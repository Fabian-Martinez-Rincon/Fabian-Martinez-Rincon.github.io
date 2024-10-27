---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'grep, sort, uniq, strings, base64, tr, tar, gzip, bzip2, xxd'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/coneccionesSSH.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---

- [Find](#find)
- [Comandos](#comandos) 
- [Estructura](#estructura)

---

## Estructura

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

---

## Comandos

### Comandos Practica 1 

**Sudo**

Sudo es un programa diseñado para facilitar a los administradores del sistema permitir a algunos usuarios ejecutar órdenes como root (u otro usuario).

| Comando  | Funcion |
| ------------- | ------------- |
| `apt install sudo`  | Instala el sudo en debian 11  |
| `cat /var/log/syslog`  | Muestra el contenido dentro del fichero  |
| `more /var/log/syslog`  | Igual que cat solo que muestra linea por linea   |
| `less /var/log/syslog`  | Limita la cantidad de lineas visibles  |
| `vi nomArchivo`  | i para cambiar de modo, escribirmos, luego `esc` y despues :wq  |
| `file nombreArchivo`  | Muestra que tipo de contenido posee  |
| `cd Desktop`  | Permite meternos en un directorio  |
| `cd ..`  |  Para retroceder en el directorio  |
| `mkdir "ISO 2022"`  | Crea carpetas  |
| `touch ISO2022-1 ISO2022-2`  | Crea dos archivos  |
| `ls`  | Lista el contenido del directorio actual  |
| `pwd`  | Visualiza la ruta donde estoy situado  |
| `find ./'ISO 2022' -name "ISO*"`  | Busca todos los archivos en los que su nombre contiene la cadena “iso*”   |
| `df`  | Informa la cantidad de espacio libre en disco  |
| `who`  | Verifica los usuarios conectados al sistema  |
| `tail ISO2022-1`  | Muestra en pantalla las últimas líneas de un archivo  |

<br>

---

### ⚠️ Peligrosos ⚠️ 
Antes de usar un comando `sudo`, primero tenes que entrar como super-usuario con el comando `su`

| Comando  | Funcion |
| ------------- | ------------- |
| `shutdown`  | Permite apagar, reiniciar y detener tu sistema  |
| `sudo shutdown`  | Apaga el sistema luego de 2 minutos aprox  |
| `sudo shutdown now`  | Apaga el sistema ahora  |
| `sudo shutdown -r`  | Reinicia el sistema luego de 2 minutos aprox  |
| `sudo shutdown -c`  | Cancela el reinicio/apagado  |
| `sudo reboot`  | Reinicia el equipo  |
| `sudo halt`  | Detiene la CPU del ordenador  |
| `locate nomArchivo`  | Como el find pero mas canchero |
| `sudo apt install locate` | Instalar el locate |
| `uname -letra`  | Verifica la información del sistema (s, r, v, n, m, p, i, o, **[a]()**)  |
| `gmesg`  | No lo pude hacer funcionar (puede ser el `dmesg`?)  |
| `lspci`  | Lista todos los componentes tipo pci    |
| `at 10:00 PM accion`  | (se sale con Ctrl + D) Nos permite programar tareas|
| `sudo apt update, sudo apt install at` | instalar el at |
| `netstat`  | Muestra información sobre las conexiones de red|
| `sudo apt install net-tools` | Instala netstat |
| `mount`  | Permite montar dispositivos/particiones para su uso por el so|
| `sudo apt install nfs-common` | Instala el mount |
| `umount -V`  | Permite eliminar un sArch remoto que esté montando en la actualidad|
| `head nomArchivo`  | Puestra el principio de un archivo |
| `losetup`  | Se utiliza para fijar el dispositivo de bucle   |

<br>

---

## Comandos Practica 2

| Comando  | Funcion |
| ------------- | ------------- |
| `ls /etc/rc0.d` | miramos el conenido de la runlevel 0. Estos scripts |
| `sudo runlevel` | nos muestra la runlevel actual |
| `sudo telinit 2` | nos cambia a la runlevel 2 |
| `sudo adduser usuarioNuevo` | Crea un usuario |
| `sudo groupadd grupode5` | Crea un grupo |
| `sudo groupdel grupode5` | Elimina un grupo |
| `sudo usermod -a -G grupode5 pepe` | Agrega usuarios a un grupo |
| `id -nG iso2022` | Muestra los grupos a los que pertenece un usuario |
| `sudo login iso2022` | Logueo como otro usuario |
| `sudo userdel iso2022` | Elimina un usuario |
| `groups`  | Permite ver los grupos a los que pertenece mi usuario  |
| `su`  | Entrar como super usuario  |
| `who`  | Verifiqua los usuarios conectado al sistema  |
| `passwd`  | Cambia la constraseña del usuario actual  |
| `chmod (u,g,o)(+,=)(w,rw,rwx) archivo.txt` | Nos permite modificar cualquier permiso |
| `chown nombreUsuario nombreArchivo` | Cambia el propietario de un archivo |
| `chgrp` | Igual que chwon sintaxis mas simple |
| `du` | Muestra tamaño de ficheros y carpetas (actual) |
| `rmdir nombreCarpeta` | Elimina una carpeta |
| `cp nombreArchivo nombreCarpeta` | Sirve para copiar archivos y directorios dentro del sArch |
| `mv` | e utiliza para mover o renombrar los archivos y directorios |
|`ps`  | posee algunas opciones para mostrar los procesos en ejecución |
| `ls \| more ` | Se ejecuta el comando ls y la salida del mismo, es enviada como entrada del comanda more |
| `grep -iRl .conf ` | Buscar todos los archivos de usuarios en los que su nombre contiene la cadena “.conf” |
| `tar cvf ejercicio6.tar directorioNuevo` | Comprime el directorio o archivo marcado |
| `gzip` | comprime/descomprime archivos ([Parametros que puede recibir](https://www.solvetic.com/tutoriales/article/11693-comprimir-o-descomprimir-archivos-con-gzip-en-linux/)) |
| `zgrep` | lo mismo que grep pero puede estar comprimido el archivo |
| `wc` | cuenta nuevas líneas, palabras y bytes para los archivos  |

---

## Find



- [Recursos](https://www.hostinger.es/tutoriales/como-usar-comando-find-locate-en-linux/)


El comando `find` en Linux es una herramienta poderosa y flexible utilizada para buscar archivos y directorios en el sistema de archivos. Permite realizar búsquedas basadas en una amplia variedad de criterios como nombre, tipo, permisos, tamaño, fecha de modificación y más. Aquí se presenta una explicación detallada del comando `find`, incluyendo su sintaxis, opciones comunes, y ejemplos prácticos.

### Sintaxis Básica

```sh
find [ruta] [expresiones]
```

- **ruta:** El directorio donde se iniciará la búsqueda. Si se omite, `find` busca en el directorio actual.
- **expresiones:** Condiciones que determinan qué archivos o directorios se buscarán.

### Opciones y Expresiones Comunes

#### 1. Buscar por Nombre

- **`-name`**: Busca archivos y directorios que coincidan exactamente con el nombre especificado (sensible a mayúsculas y minúsculas).

  ```sh
  find /ruta -name "archivo.txt"
  ```

- **`-iname`**: Busca archivos y directorios sin diferenciar entre mayúsculas y minúsculas.

  ```sh
  find /ruta -iname "archivo.txt"
  ```

#### 2. Buscar por Tipo

- **`-type`**: Especifica el tipo de archivo a buscar.

  ```sh
  find /ruta -type f    # Archivos regulares
  find /ruta -type d    # Directorios
  find /ruta -type l    # Enlaces simbólicos
  find /ruta -type c    # Dispositivos de caracteres
  find /ruta -type b    # Dispositivos de bloques
  ```

#### 3. Buscar por Tamaño

- **`-size`**: Busca archivos según su tamaño.

  ```sh
  find /ruta -size +100M   # Más de 100 megabytes
  find /ruta -size -50k    # Menos de 50 kilobytes
  find /ruta -size 10M     # Exactamente 10 megabytes
  ```

#### 4. Buscar por Permisos

- **`-perm`**: Busca archivos con permisos específicos.

  ```sh
  find /ruta -perm 644    # Archivos con permisos 644
  find /ruta -perm -u+x   # Archivos ejecutables por el propietario
  find /ruta -perm /a+w   # Archivos escribibles por cualquier usuario
  ```

#### 5. Buscar por Propietario y Grupo

- **`-user`**: Busca archivos pertenecientes a un usuario específico.

  ```sh
  find /ruta -user nombre_usuario
  ```

- **`-group`**: Busca archivos pertenecientes a un grupo específico.

  ```sh
  find /ruta -group nombre_grupo
  ```

#### 6. Buscar por Fecha

- **`-mtime`**: Busca archivos modificados hace un cierto número de días.

  ```sh
  find /ruta -mtime -7   # Modificados en los últimos 7 días
  find /ruta -mtime +30  # Modificados hace más de 30 días
  ```

- **`-atime`**: Busca archivos accedidos hace un cierto número de días.

  ```sh
  find /ruta -atime -7
  ```

- **`-ctime`**: Busca archivos cuyo estado (metadatos) ha cambiado hace un cierto número de días.

  ```sh
  find /ruta -ctime -7
  ```

#### 7. Acciones

- **`-exec`**: Ejecuta un comando en cada archivo encontrado.

  ```sh
  find /ruta -name "*.txt" -exec rm {} \;   # Elimina todos los archivos .txt encontrados
  find /ruta -type f -exec chmod 644 {} \;  # Cambia permisos de todos los archivos a 644
  ```

- **`-ok`**: Similar a `-exec`, pero pide confirmación antes de ejecutar el comando.

  ```sh
  find /ruta -name "*.txt" -ok rm {} \;
  ```

- **`-delete`**: Elimina los archivos encontrados.

  ```sh
  find /ruta -name "*.bak" -delete   # Elimina todos los archivos .bak encontrados
  ```

- **`-print`**: Imprime la ruta de los archivos encontrados (comportamiento por defecto si no se especifica ninguna acción).

  ```sh
  find /ruta -name "*.txt" -print
  ```

#### 8. Buscar en Archivos y Subdirectorios Específicos

- **`-maxdepth`**: Limita la profundidad máxima de búsqueda.

  ```sh
  find /ruta -maxdepth 2 -name "*.txt"   # Busca solo en los primeros dos niveles de subdirectorios
  ```

- **`-mindepth`**: Limita la profundidad mínima de búsqueda.

  ```sh
  find /ruta -mindepth 2 -name "*.txt"   # Busca en subdirectorios a partir del segundo nivel
  ```

#### 9. Buscar por Varios Criterios

- **`-and` o `-a`**: Combina criterios (implícito).

  ```sh
  find /ruta -name "*.txt" -type f   # Busca archivos .txt que son archivos regulares
  ```

- **`-or` o `-o`**: Busca archivos que cumplen uno u otro criterio.

  ```sh
  find /ruta -name "*.txt" -o -name "*.md"   # Busca archivos .txt o .md
  ```

- **`-not` o `!`**: Excluye archivos que cumplen un criterio.

  ```sh
  find /ruta -not -name "*.bak"   # Busca archivos que no son .bak
  ```

### Ejemplos Prácticos

1. **Buscar archivos con extensión `.log` modificados en los últimos 7 días:**

   ```sh
   find /var/log -name "*.log" -mtime -7
   ```

2. **Eliminar todos los archivos `.tmp` en el directorio actual y sus subdirectorios:**

   ```sh
   find . -name "*.tmp" -delete
   ```

3. **Buscar archivos mayores de 100 MB en el directorio `/home`:**

   ```sh
   find /home -size +100M
   ```

4. **Buscar archivos con permisos 755 y cambiarles los permisos a 644:**

   ```sh
   find /home -perm 755 -exec chmod 644 {} \;
   ```

5. **Buscar y listar archivos de un usuario específico:**

   ```sh
   find / -user username -print
   ```

6. **Buscar archivos de un cierto tipo (por ejemplo, archivos regulares) y ejecutar un comando (por ejemplo, `ls -l`):**

   ```sh
   find /ruta -type f -exec ls -l {} \;
   ```

7. **Buscar archivos que no pertenecen a un usuario específico:**

   ```sh
   find /ruta -not -user username
   ```

### Resumen

El comando `find` es extremadamente versátil y puede utilizarse para buscar archivos y directorios según una amplia variedad de criterios. Al combinar múltiples opciones y expresiones, se puede realizar búsquedas muy específicas y ejecutar acciones sobre los archivos encontrados. Esta flexibilidad hace de `find` una herramienta esencial para la administración de sistemas en Linux.

![image](https://github.com/user-attachments/assets/c5310f2d-faa0-4373-a376-79787bb757b8)

---

### Comandos en Linux: Explicación Detallada

### 1. `grep`

#### Descripción:
`grep` es una herramienta utilizada para buscar patrones de texto en archivos o flujos de datos. Es muy poderoso y flexible, permitiendo buscar cadenas simples o expresiones regulares complejas.

#### Sintaxis:
```sh
grep [opciones] patrón [archivo...]
```

#### Ejemplos Prácticos:
- **Buscar una cadena en un archivo:**
  ```sh
  grep "cadena" archivo.txt
  ```
  Esto buscará "cadena" en `archivo.txt` y mostrará las líneas que la contengan.

- **Buscar sin diferenciar mayúsculas y minúsculas:**
  ```sh
  grep -i "cadena" archivo.txt
  ```

- **Buscar recursivamente en un directorio:**
  ```sh
  grep -r "cadena" /ruta/al/directorio
  ```

- **Mostrar número de línea:**
  ```sh
  grep -n "cadena" archivo.txt
  ```

### 2. `sort`

#### Descripción:
`sort` ordena las líneas de texto en archivos o flujos de datos según diferentes criterios.

#### Sintaxis:
```sh
sort [opciones] [archivo...]
```

#### Ejemplos Prácticos:
- **Ordenar un archivo alfabéticamente:**
  ```sh
  sort archivo.txt
  ```

- **Ordenar de forma inversa:**
  ```sh
  sort -r archivo.txt
  ```

- **Ordenar numéricamente:**
  ```sh
  sort -n archivo.txt
  ```

### 3. `uniq`

#### Descripción:
`uniq` filtra líneas repetidas consecutivas en un archivo o flujo de datos. Se suele usar después de `sort`.

#### Sintaxis:
```sh
uniq [opciones] [archivo]
```

#### Ejemplos Prácticos:
- **Eliminar líneas duplicadas consecutivas:**
  ```sh
  sort archivo.txt | uniq
  ```

- **Contar ocurrencias de líneas únicas:**
  ```sh
  sort archivo.txt | uniq -c
  ```

### 4. `strings`

#### Descripción:
`strings` imprime las cadenas de caracteres legibles en un archivo binario. Es útil para extraer texto de archivos binarios o ejecutables.

#### Sintaxis:
```sh
strings [opciones] archivo
```

#### Ejemplos Prácticos:
- **Mostrar cadenas legibles en un archivo binario:**
  ```sh
  strings archivo.bin
  ```

### 5. `base64`

#### Descripción:
`base64` se utiliza para codificar o decodificar datos en formato Base64, que es una representación de datos binarios en texto.

#### Sintaxis:
```sh
base64 [opciones] [archivo]
```

#### Ejemplos Prácticos:
- **Codificar un archivo en Base64:**
  ```sh
  base64 archivo.bin > archivo.b64
  ```

- **Decodificar un archivo en Base64:**
  ```sh
  base64 -d archivo.b64 > archivo.bin
  ```

### 6. `tr`

#### Descripción:
`tr` traduce o elimina caracteres en un flujo de datos. Es muy útil para manipular texto.

#### Sintaxis:
```sh
tr [opciones] set1 [set2]
```

#### Ejemplos Prácticos:
- **Convertir minúsculas a mayúsculas:**
  ```sh
  echo "hola mundo" | tr 'a-z' 'A-Z'
  ```

- **Eliminar caracteres específicos:**
  ```sh
  echo "hola mundo" | tr -d 'o'
  ```

### 7. `tar`

#### Descripción:
`tar` se utiliza para crear, extraer y manipular archivos tarball, que son archivos de archivo comúnmente usados en Unix y Linux.

#### Sintaxis:
```sh
tar [opciones] [archivo]
```

#### Ejemplos Prácticos:
- **Crear un archivo tar:**
  ```sh
  tar -cvf archivo.tar directorio/
  ```

- **Extraer un archivo tar:**
  ```sh
  tar -xvf archivo.tar
  ```

- **Crear un archivo tar comprimido con gzip:**
  ```sh
  tar -czvf archivo.tar.gz directorio/
  ```

### 8. `gzip`

#### Descripción:
`gzip` se utiliza para comprimir archivos, reduciendo su tamaño.

#### Sintaxis:
```sh
gzip [opciones] [archivo]
```

#### Ejemplos Prácticos:
- **Comprimir un archivo:**
  ```sh
  gzip archivo.txt
  ```

- **Descomprimir un archivo:**
  ```sh
  gzip -d archivo.txt.gz
  ```

### 9. `bzip2`

#### Descripción:
`bzip2` es similar a `gzip`, pero utiliza un algoritmo de compresión diferente que a menudo proporciona una mejor compresión.

#### Sintaxis:
```sh
bzip2 [opciones] [archivo]
```

#### Ejemplos Prácticos:
- **Comprimir un archivo:**
  ```sh
  bzip2 archivo.txt
  ```

- **Descomprimir un archivo:**
  ```sh
  bzip2 -d archivo.txt.bz2
  ```

### 10. `xxd`

#### Descripción:
`xxd` crea un volcado hexdump de un archivo o puede revertir un hexdump a su formato binario original.

#### Sintaxis:
```sh
xxd [opciones] [archivo]
```

#### Ejemplos Prácticos:
- **Crear un hexdump de un archivo:**
  ```sh
  xxd archivo.bin
  ```

- **Convertir un hexdump de nuevo a binario:**
  ```sh
  xxd -r archivo.hex archivo.bin
  ```

### Conclusión

Estos comandos son herramientas fundamentales en la administración y manipulación de archivos y datos en sistemas Unix y Linux. Cada comando tiene un conjunto específico de funcionalidades y opciones que lo hacen adecuado para tareas particulares. La comprensión y el uso efectivo de estos comandos pueden mejorar significativamente la eficiencia y productividad al trabajar con sistemas Linux.

### `awk`: Un Potente Procesador de Texto

`awk` es una herramienta de procesamiento de texto muy poderosa y versátil en Unix y Linux. Se utiliza para manipular, analizar y generar informes basados en archivos de texto. `awk` funciona por medio de patrones y acciones, y puede realizar tareas complejas en archivos de texto con una sintaxis relativamente simple.

### Sintaxis Básica

```sh
awk 'programa' archivo
```

- **`programa`**: Un conjunto de instrucciones `awk`, usualmente en formato de `patrón {acción}`.
- **`archivo`**: El archivo de entrada que `awk` procesará.

### Componentes Principales

#### 1. **Patrón**
Define cuándo se debe ejecutar una acción. Puede ser una expresión regular, una condición lógica, o una combinación de ambas.

#### 2. **Acción**
Define qué hacer cuando se encuentra un patrón. Se coloca entre llaves `{}` y puede contener varias declaraciones separadas por punto y coma.

### Estructura de un Programa `awk`

Un programa `awk` puede consistir en uno o más patrones y acciones. También puede tener secciones especiales para inicialización (`BEGIN`) y finalización (`END`).

```sh
BEGIN { declaraciones de inicialización }
patrón { acción }
patrón { acción }
END { declaraciones de finalización }
```

### Parámetros y Opciones Comunes

#### `-F`: Especificar el Separador de Campos

```sh
awk -F ':' '{print $1}' archivo.txt
```
- **Descripción:** Establece el separador de campos. En este ejemplo, `:` es el separador.

#### `-v`: Definir Variables de Usuario

```sh
awk -v var=valor 'BEGIN {print var}'
```
- **Descripción:** Define variables antes de ejecutar el programa `awk`.

#### `-f`: Especificar un Archivo de Programa

```sh
awk -f programa.awk archivo.txt
```
- **Descripción:** Lee el programa `awk` desde un archivo en lugar de la línea de comandos.

### Campos y Registros

- **Campos (`$1`, `$2`, ... `$n`)**: Cada campo en una línea de entrada. `$0` representa la línea completa.
- **Registros**: Por defecto, una línea de entrada es un registro.

### Ejemplos Prácticos

#### 1. Imprimir el Primer Campo de Cada Línea

```sh
awk '{print $1}' archivo.txt
```
- **Descripción:** Imprime el primer campo de cada línea en `archivo.txt`.

#### 2. Imprimir Líneas que Contienen un Patrón Específico

```sh
awk '/patrón/' archivo.txt
```
- **Descripción:** Imprime las líneas que contienen "patrón".

#### 3. Imprimir el Número de Líneas y Palabras

```sh
awk 'BEGIN {lineas=0; palabras=0}
{
    lineas++;
    palabras += NF;
}
END {print "Líneas:", lineas; print "Palabras:", palabras}' archivo.txt
```
- **Descripción:** Cuenta el número de líneas y palabras en `archivo.txt`.

#### 4. Sumar los Valores de una Columna

```sh
awk '{suma += $2} END {print "Suma:", suma}' archivo.txt
```
- **Descripción:** Suma los valores del segundo campo y los imprime al final.

#### 5. Filtrar y Modificar Contenido

```sh
awk '$2 > 50 {print $1, $2 * 2}' archivo.txt
```
- **Descripción:** Imprime el primer campo y el doble del segundo campo solo si el segundo campo es mayor que 50.

### Funciones Incorporadas

`awk` tiene muchas funciones incorporadas para manipular y procesar datos:

- **Funciones de Texto**: `length()`, `substr()`, `index()`, `split()`.
- **Funciones Numéricas**: `sqrt()`, `sin()`, `cos()`, `rand()`, `srand()`.
- **Funciones de Fecha y Hora**: `strftime()`, `systime()`.

#### Ejemplos de Funciones

##### 1. `length()`: Longitud de una Cadena

```sh
awk '{print $1, length($1)}' archivo.txt
```
- **Descripción:** Imprime cada palabra y su longitud.

##### 2. `substr()`: Subcadena

```sh
awk '{print substr($0, 2, 5)}' archivo.txt
```
- **Descripción:** Imprime una subcadena que empieza en la posición 2 y tiene una longitud de 5 caracteres.

##### 3. `split()`: Dividir Cadena en Partes

```sh
awk '{split($0, partes, ":"); print partes[1], partes[2]}' archivo.txt
```
- **Descripción:** Divide cada línea en partes usando `:` como delimitador e imprime las primeras dos partes.

### Variables Internas de `awk`

`awk` proporciona varias variables internas que son útiles para procesar datos:

- **`FS`**: Separador de campos (por defecto es espacio o tabulación).
- **`OFS`**: Separador de campos de salida.
- **`RS`**: Separador de registros (por defecto es nueva línea).
- **`ORS`**: Separador de registros de salida.
- **`NR`**: Número de registro (línea) actual.
- **`NF`**: Número de campos en el registro actual.

#### Ejemplo con Variables Internas

```sh
awk 'BEGIN {FS=","; OFS=";"} {print $1, $2}' archivo.csv
```
- **Descripción:** Usa `,` como separador de campos de entrada y `;` como separador de campos de salida.

### Conclusión

`awk` es una herramienta extremadamente poderosa para procesar y analizar datos en archivos de texto. Su capacidad para manejar patrones y acciones permite realizar tareas complejas con comandos relativamente simples. Al comprender los parámetros, las variables internas y las funciones incorporadas de `awk`, puedes aprovechar al máximo su potencial para manipular y analizar datos de manera eficiente.

![image](https://github.com/user-attachments/assets/1ed88c35-62a4-4263-978d-172e788fe649)

![image](https://github.com/user-attachments/assets/7ae23704-67bf-47f6-8815-5d164b5ad971)

![image](https://github.com/user-attachments/assets/9086ca0e-73fc-4419-85b8-5fe607c1ea99)

![image](https://github.com/user-attachments/assets/c62762d2-3fe8-4517-9b92-94d2cbebcf2a)

![image](https://github.com/user-attachments/assets/edfad4c5-d01e-4889-ac77-ea4c654b8f92)

![image](https://github.com/user-attachments/assets/a17d94e4-c4fc-42e8-91d4-b5d3c4785600)

![image](https://github.com/user-attachments/assets/d113db2d-1aae-4677-a4e7-3e8f97e280b0)

![image](https://github.com/user-attachments/assets/b379e855-a402-449f-8436-bf8460d3fbe4)

![image](https://github.com/user-attachments/assets/97000d7f-6dc4-436e-bbac-8a45aeb1017d)

![image](https://github.com/user-attachments/assets/30f73363-4d43-4ccd-8b77-c915973f613e)

![image](https://github.com/user-attachments/assets/b221a4e9-f4eb-4884-84a6-abf037d9c8a7)

![image](https://github.com/user-attachments/assets/ad7b7c7c-4a50-492e-a17c-a276836910be)

![image](https://github.com/user-attachments/assets/d75da34a-ee5e-46a9-9e14-b9acc1b31e45)

![image](https://github.com/user-attachments/assets/523896c4-68a7-40de-98a9-ecfa02f8b0e1)

![image](https://github.com/user-attachments/assets/d1d11914-62df-4c0b-aab4-d494f6dc3d83)

![image](https://github.com/user-attachments/assets/32be5c2f-ab6b-4217-95f0-68592bf5ef11)

![image](https://github.com/user-attachments/assets/71d16818-9453-40b5-a637-9c4da1bc0ad9)

![image](https://github.com/user-attachments/assets/5752a486-0d87-47a5-a4da-6b413cf45bd5)

![image](https://github.com/user-attachments/assets/ab38f248-6d7d-4a1b-be46-40aff498626e)

![image](https://github.com/user-attachments/assets/f96ad655-775e-4bea-a610-f6db861ab740)

![image](https://github.com/user-attachments/assets/f7f18ceb-7f9f-4dae-896c-d51693091774)

![image](https://github.com/user-attachments/assets/47d31ccb-026f-492f-9351-7154ee2ef31b)

![image](https://github.com/user-attachments/assets/92ed1753-6ed2-464b-897b-2e0cfb8238d6)

![image](https://github.com/user-attachments/assets/1fa97ec9-44dc-4dac-86d4-08608f16d951)

![image](https://github.com/user-attachments/assets/de2e6768-2576-4367-94db-e1beb7808ba6)

![image](https://github.com/user-attachments/assets/ecb68fc2-42b1-431a-ba2c-6da755812439)

