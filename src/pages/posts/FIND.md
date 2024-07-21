---
layout: ../../layouts/MarkdownPostLayout.astro
title: '🔎 FIND Modo dios'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/FIND.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---


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