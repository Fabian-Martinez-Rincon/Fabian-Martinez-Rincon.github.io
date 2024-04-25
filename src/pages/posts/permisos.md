---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Permisos Linux'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/permisos.webp'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]

---



Crear Grupo

```shell
sudo groupadd mi_grupo
```

Crear Usuario

```shell
sudo useradd mi_usuario
```

Asignar Usuario a Grupo

```shell
sudo usermod -a -G nombre_del_grupo nombre_de_usuario
```

## getfacl

Al ejecutar getfacl en un archivo o directorio, la salida típica incluye:


Comando
    
```shell
getfacl nombre_archivo
```

Salida

```
# file: Muestra el nombre del archivo o directorio.
# owner: Muestra el nombre del propietario.
# group: Muestra el nombre del grupo asociado.
user::rwx: Muestra los permisos del propietario (donde rwx puede variar según los permisos actuales).
group::r-x: Muestra los permisos del grupo (los permisos pueden variar).
other::r--: Muestra los permisos para otros (pueden variar).
```

Claro, aquí tienes un resumen sobre cómo se aplican y priorizan los diferentes tipos de permisos en sistemas Unix y Linux, incluyendo permisos tradicionales y ACL (Listas de Control de Acceso):

---

### 1. Permisos Tradicionales (chmod):

- **Propietario (u):** Los permisos del propietario tienen la prioridad inicial sobre el archivo o directorio. Si el propietario tiene permisos de lectura, escritura o ejecución, estos se aplican directamente al propietario, sin interferencia de las ACL.
- **Grupo (g):** Los permisos de grupo se aplican a todos los usuarios que son miembros del grupo asociado al archivo o directorio. Si hay permisos de grupo específicos (como lectura o escritura), estos afectan a todos los miembros del grupo.
- **Otros (o):** Los permisos para "otros" se aplican a todos los demás usuarios del sistema que no son ni el propietario ni miembros del grupo asociado.

### 2. Listas de Control de Acceso (ACL):

- **ACL de Usuario:** Si se define una ACL específica para un usuario (con `setfacl -m u:nombredeusuario:permisos archivo`), estos permisos tienen prioridad sobre los permisos de grupo y "otros" para ese usuario específico, pero no necesariamente sobre los permisos del propietario si el usuario es el propietario.
- **ACL de Grupo:** Si se establece una ACL para un grupo específico (con `setfacl -m g:nombredelgrupo:permisos archivo`), estos permisos afectan a todos los miembros de ese grupo específico, pero solo si son más permisivos que los permisos del grupo definidos por `chmod`.
- **Máscara (mask):** La máscara de una ACL limita los permisos máximos que pueden ser otorgados por las ACL de usuario y grupo. La máscara actúa como un tope máximo para los permisos de ACL, pero no afecta los permisos del propietario establecidos por `chmod`.
- **Otros y ACL por defecto:** Las ACL también pueden definir permisos para "otros" y establecer ACL predeterminadas para directorios, que afectan la creación de nuevos archivos y subdirectorios.

### Prioridades y Resolución de Conflictos:

1. **Permisos del Propietario:** Los permisos de `chmod` para el propietario siempre se respetan para el propietario del archivo o directorio.
2. **ACL de Usuario vs. Permisos de Grupo de `chmod`:** Para usuarios específicos, las ACL de usuario tienen prioridad sobre los permisos de grupo establecidos por `chmod`.
3. **ACL de Grupo vs. Permisos de Grupo de `chmod`:** Los permisos de las ACL de grupo solo se aplican si son más permisivos que los permisos de grupo de `chmod` o si no hay conflictos directos.
4. **Permisos para "Otros":** Se respetan según `chmod` a menos que se especifiquen explícitamente mediante ACL.
5. **Máscara (mask):** Limita los permisos efectivos de las ACL de usuario y grupo, pero no afecta los permisos del propietario de `chmod`.
6. **Permisos Más Restrictivos:** En cualquier conflicto entre diferentes tipos de permisos, los permisos más restrictivos prevalecen.

Mientras que las ACL permiten una granularidad mayor, no pueden conceder más permisos que los establecidos por los permisos base (`chmod`). Además, la resolución de permisos efectivos depende de una combinación de estos controles, aplicando reglas específicas para resolver qué permisos prevalecen en diferentes situaciones.


---

### Conclusión

Los permisos primarios como los permisos de usuario y grupos secundario son los principales. Mas que los permisos del ACK

Si un usuario tiene varios grupos ACK, toma los permisos del grupo mas permisivos que tenga. Siempre conviene que el grupo no tenga permisos para nada, mas que los justos


```shell
setfacl -R -m g::--- carpeta
```

```bash
redes@debian:~/Desktop$ ls -l ISO
total 48
drwxr-xr-x  2 redes users  4096 Feb 19 11:01 Documentos
drwxr-xr-x  2 redes users  4096 Feb 19 11:01 Ejemplos
drwxr-xr-x  7 redes users  4096 Feb 19 11:01 Otros
drwxr-xr-x  2 redes users  4096 Feb 19 11:01 PracticaNormalParciales
drwxr-xr-x 10 redes users  4096 Feb 19 11:01 Practicas
-rw-r--r--  1 redes users 23639 Feb 19 11:01 README.md
drwxr-xr-x  9 redes users  4096 Feb 19 11:01 Teoria
redes@debian:~/Desktop$ find ISO -type d \( -path ISO/Teoria -o -path ISO/Practicas \) -prune -o -exec setfacl -m g:Director:--- {} \;
redes@debian:~/Desktop$ ls -l ISO
total 48
drwxr-xr-x+  2 redes users  4096 Feb 19 11:01 Documentos
drwxr-xr-x+  2 redes users  4096 Feb 19 11:01 Ejemplos
drwxr-xr-x+  7 redes users  4096 Feb 19 11:01 Otros
drwxr-xr-x+  2 redes users  4096 Feb 19 11:01 PracticaNormalParciales
drwxr-xr-x  10 redes users  4096 Feb 19 11:01 Practicas
-rw-r--r--+  1 redes users 23639 Feb 19 11:01 README.md
drwxr-xr-x   9 redes users  4096 Feb 19 11:01 Teoria
redes@debian:~/Desktop$ 


```