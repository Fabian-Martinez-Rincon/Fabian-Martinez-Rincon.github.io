---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'BASH SCRIPTING'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/BASH_SCRIPTING.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---

El **Bash scripting** es la práctica de escribir scripts (programas) en el shell de Unix/Linux conocido como **Bash** (Bourne Again SHell). Bash es un intérprete de comandos que permite a los usuarios ejecutar comandos del sistema operativo, automatizar tareas, procesar datos y mucho más. A través de Bash scripting, se pueden encadenar múltiples comandos en un archivo de texto y ejecutarlos secuencialmente para realizar tareas complejas de manera eficiente.

### Conceptos Básicos de Bash Scripting

#### 1. **Shell**
- **Definición:** El shell es un programa que proporciona la interfaz de usuario para acceder a los servicios del sistema operativo. Bash es uno de los shells más populares en sistemas Unix y Linux.
- **Funciones:** Permite a los usuarios ejecutar comandos, scripts y programas.

#### 2. **Script**
- **Definición:** Un script es un archivo de texto que contiene una serie de comandos que se ejecutan en secuencia.
- **Extensión:** Generalmente, los scripts de Bash tienen la extensión `.sh`.

### Crear y Ejecutar un Script de Bash

#### 1. **Crear un Script**
- **Paso 1:** Abrir un editor de texto como `nano`, `vim` o `gedit`.
- **Paso 2:** Escribir el script.

  Ejemplo de script simple (`mi_script.sh`):

  ```bash
  #!/bin/bash
  echo "Hola, mundo!"
  ```

  - `#!/bin/bash`: Shebang, indica que el script debe ser ejecutado usando Bash.
  - `echo "Hola, mundo!"`: Comando que imprime "Hola, mundo!" en la terminal.

- **Paso 3:** Guardar el archivo con una extensión `.sh`.

#### 2. **Dar Permisos de Ejecución**
- **Comando:** Para hacer el script ejecutable, utiliza `chmod`.

  ```sh
  chmod +x mi_script.sh
  ```

#### 3. **Ejecutar el Script**
- **Comando:**

  ```sh
  ./mi_script.sh
  ```

### Elementos Fundamentales de Bash Scripting

#### 1. **Variables**
- **Definición:** Almacenan datos que pueden ser utilizados y modificados en el script.
- **Sintaxis:**

  ```bash
  nombre_variable="valor"
  echo $nombre_variable
  ```

  Ejemplo:

  ```bash
  nombre="Carlos"
  echo "Hola, $nombre!"
  ```

#### 2. **Operaciones Aritméticas**
- **Sintaxis:**

  ```bash
  resultado=$((2 + 3))
  echo $resultado
  ```

  Ejemplo:

  ```bash
  a=5
  b=3
  suma=$((a + b))
  echo "La suma de $a y $b es $suma"
  ```

#### 3. **Condicionales**
- **Definición:** Permiten ejecutar comandos basados en condiciones.

  **Sintaxis:**

  ```bash
  if [ condición ]; then
    comandos
  elif [ otra_condición ]; then
    otros_comandos
  else
    comandos_alternativos
  fi
  ```

  Ejemplo:

  ```bash
  numero=10
  if [ $numero -gt 5 ]; then
    echo "$numero es mayor que 5"
  else
    echo "$numero es menor o igual a 5"
  fi
  ```

#### 4. **Bucles**
- **For Loop:** Itera sobre una lista de elementos.

  **Sintaxis:**

  ```bash
  for var in lista; do
    comandos
  done
  ```

  Ejemplo:

  ```bash
  for i in 1 2 3 4 5; do
    echo "Número: $i"
  done
  ```

- **While Loop:** Repite comandos mientras una condición sea verdadera.

  **Sintaxis:**

  ```bash
  while [ condición ]; do
    comandos
  done
  ```

  Ejemplo:

  ```bash
  contador=1
  while [ $contador -le 5 ]; do
    echo "Contador: $contador"
    contador=$((contador + 1))
  done
  ```

#### 5. **Funciones**
- **Definición:** Bloques de código reutilizables.

  **Sintaxis:**

  ```bash
  nombre_funcion() {
    comandos
  }
  ```

  Ejemplo:

  ```bash
  saludar() {
    echo "Hola, $1!"
  }

  saludar "Carlos"
  ```

#### 6. **Arreglos**
- **Definición:** Colecciones de valores indexados.

  **Sintaxis:**

  ```bash
  nombres=("Carlos" "Ana" "Luis")
  echo ${nombres[0]}  # Carlos
  ```

  Ejemplo:

  ```bash
  frutas=("manzana" "banana" "cereza")
  for fruta in "${frutas[@]}"; do
    echo "Fruta: $fruta"
  done
  ```

### Herramientas y Comandos Comunes en Bash Scripting

#### 1. **Comandos de Manipulación de Archivos**
- **`ls`**: Lista archivos y directorios.
- **`cp`**: Copia archivos y directorios.
- **`mv`**: Mueve o renombra archivos y directorios.
- **`rm`**: Elimina archivos y directorios.

#### 2. **Comandos de Texto**
- **`cat`**: Concatenar y mostrar archivos.
- **`grep`**: Buscar patrones en archivos.
- **`awk`**: Procesador de texto.
- **`sed`**: Editor de flujo para filtrar y transformar texto.

#### 3. **Redirección y Pipes**
- **Redirección de Salida**: `>` y `>>`.
- **Redirección de Entrada**: `<`.
- **Pipes**: `|`.

### Ejemplo Completo de Script

Un script que muestra el uso de variables, condicionales, bucles, y funciones:

```bash
#!/bin/bash

# Función para saludar
saludar() {
  echo "Hola, $1!"
}

# Variable
nombre="Carlos"
saludar $nombre

# Condicional
numero=10
if [ $numero -gt 5 ]; then
  echo "$numero es mayor que 5"
else
  echo "$numero es menor o igual a 5"
fi

# Bucle for
for i in 1 2 3; do
  echo "Número: $i"
done

# Bucle while
contador=1
while [ $contador -le 3 ]; do
  echo "Contador: $contador"
  contador=$((contador + 1))
done
```

### Conclusión

El Bash scripting es una herramienta poderosa para automatizar tareas en sistemas Unix y Linux. Al aprender a escribir scripts de Bash, puedes realizar tareas complejas de manera eficiente, gestionar sistemas, procesar datos y mucho más. Con una comprensión sólida de los elementos básicos y avanzados de Bash scripting, puedes aprovechar al máximo las capacidades del shell para simplificar y optimizar tu flujo de trabajo.

---

## Comandos Basicos

Aquí tienes ejemplos prácticos y detallados para cada uno de los comandos y herramientas comunes mencionados en Bash scripting:

### 1. Comandos de Manipulación de Archivos

#### `ls`: Lista archivos y directorios

```sh
#!/bin/bash
# Listar todos los archivos y directorios en el directorio actual
ls

# Listar todos los archivos incluyendo los ocultos
ls -a

# Listar archivos con detalles como permisos, tamaño y fecha de modificación
ls -l

# Listar archivos en un directorio específico
ls /ruta/al/directorio
```

#### `cp`: Copia archivos y directorios

```sh
#!/bin/bash
# Copiar un archivo a otro directorio
cp archivo.txt /ruta/al/destino/

# Copiar y renombrar un archivo
cp archivo.txt /ruta/al/destino/nuevo_archivo.txt

# Copiar un directorio y todo su contenido recursivamente
cp -r directorio /ruta/al/destino/
```

#### `mv`: Mueve o renombra archivos y directorios

```sh
#!/bin/bash
# Mover un archivo a otro directorio
mv archivo.txt /ruta/al/destino/

# Renombrar un archivo
mv archivo.txt nuevo_nombre.txt

# Mover un directorio
mv directorio /ruta/al/destino/
```

#### `rm`: Elimina archivos y directorios

```sh
#!/bin/bash
# Eliminar un archivo
rm archivo.txt

# Eliminar un directorio vacío
rmdir directorio_vacio

# Eliminar un directorio y todo su contenido recursivamente
rm -r directorio
```

### 2. Comandos de Texto

#### `cat`: Concatenar y mostrar archivos

```sh
#!/bin/bash
# Mostrar el contenido de un archivo
cat archivo.txt

# Concatenar dos archivos y mostrar el resultado
cat archivo1.txt archivo2.txt

# Guardar el contenido de varios archivos concatenados en un nuevo archivo
cat archivo1.txt archivo2.txt > archivo_concatenado.txt
```

#### `grep`: Buscar patrones en archivos

```sh
#!/bin/bash
# Buscar una palabra en un archivo
grep "palabra" archivo.txt

# Buscar una palabra en varios archivos
grep "palabra" *.txt

# Buscar una palabra en archivos recursivamente en un directorio
grep -r "palabra" /ruta/al/directorio/

# Buscar una palabra ignorando mayúsculas y minúsculas
grep -i "Palabra" archivo.txt
```

#### `awk`: Procesador de texto

```sh
#!/bin/bash
# Imprimir la segunda columna de un archivo de texto delimitado por espacios
awk '{print $2}' archivo.txt

# Imprimir la suma de la primera columna
awk '{sum += $1} END {print sum}' archivo.txt

# Imprimir filas donde la tercera columna es mayor que 50
awk '$3 > 50' archivo.txt
```

#### `sed`: Editor de flujo para filtrar y transformar texto

```sh
#!/bin/bash
# Reemplazar todas las ocurrencias de una palabra por otra en un archivo
sed 's/palabra/nueva_palabra/g' archivo.txt

# Eliminar líneas que contienen una palabra específica
sed '/palabra/d' archivo.txt

# Insertar una línea de texto después de una línea que contiene una palabra específica
sed '/palabra/a\Nueva línea de texto' archivo.txt

# Guardar los cambios en el archivo original
sed -i 's/palabra/nueva_palabra/g' archivo.txt
```

### 3. Redirección y Pipes

#### Redirección de Salida: `>` y `>>`

```sh
#!/bin/bash
# Redirigir la salida de un comando a un archivo (sobreescribir)
echo "Hola, mundo!" > saludo.txt

# Redirigir la salida de un comando a un archivo (añadir)
echo "Otra línea" >> saludo.txt

# Redirigir la salida de un comando a otro archivo
ls -l > listado.txt
```

#### Redirección de Entrada: `<`

```sh
#!/bin/bash
# Leer contenido de un archivo como entrada de un comando
while read linea; do
  echo "Leí: $linea"
done < archivo.txt
```

#### Pipes: `|`

```sh
#!/bin/bash
# Usar pipes para encadenar comandos
# Listar archivos, buscar aquellos que contienen "log" y mostrar los primeros 5 resultados
ls -l | grep "log" | head -n 5

# Contar el número de líneas que contienen una palabra específica
grep "palabra" archivo.txt | wc -l
```

### Ejemplo Completo de Script Utilizando Varios Comandos

```sh
#!/bin/bash

# Definir variables
archivo_busqueda="archivo.txt"
patron="error"
resultado="resultado.txt"

# Buscar patrones en un archivo y guardar los resultados en un nuevo archivo
grep "$patron" "$archivo_busqueda" > "$resultado"

# Leer el archivo de resultados y procesar cada línea
while read linea; do
  # Imprimir la línea procesada
  echo "Encontrado: $linea"
done < "$resultado"

# Contar y mostrar el número de ocurrencias encontradas
num_ocurrencias=$(wc -l < "$resultado")
echo "Número de ocurrencias: $num_ocurrencias"

# Mover el archivo de resultados a un directorio específico
mv "$resultado" /ruta/al/directorio/
```

Estos ejemplos muestran cómo utilizar comandos comunes en Bash scripting para manipular archivos y texto, redirigir entradas y salidas, y utilizar pipes para encadenar comandos, todo en un contexto práctico y detallado.