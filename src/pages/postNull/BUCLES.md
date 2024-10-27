---
layout: ../../layouts/MarkdownPostLayout.astro
title: BUCLES
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Python/BUCLES.jpg'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---



## Condicionales

Los condicionales permiten ejecutar ciertos bloques de código solo si se cumplen ciertas condiciones. En Python, esto se logra utilizando las declaraciones `if`, `elif` y `else`.

### Estructura de `if`

La estructura básica de una declaración `if` es:

```python
if condición:
    # bloque de código a ejecutar si la condición es verdadera
```

### Estructura de `if-else`

Para manejar dos posibles caminos de ejecución, se usa `if-else`:

```python
if condición:
    # bloque de código a ejecutar si la condición es verdadera
else:
    # bloque de código a ejecutar si la condición es falsa
```

### Estructura de `if-elif-else`

Para manejar múltiples condiciones, se utiliza `if-elif-else`:

```python
if condición1:
    # bloque de código a ejecutar si condición1 es verdadera
elif condición2:
    # bloque de código a ejecutar si condición2 es verdadera
else:
    # bloque de código a ejecutar si ninguna de las condiciones anteriores es verdadera
```

### Ejemplo de Condicionales

```python
edad = 18

if edad < 18:
    print("Eres menor de edad.")
elif edad == 18:
    print("Acabas de alcanzar la mayoría de edad.")
else:
    print("Eres mayor de edad.")
```

## Bucles

Los bucles permiten repetir un bloque de código varias veces. Python soporta dos tipos principales de bucles: `for` y `while`.

### Bucle `for`

El bucle `for` se utiliza para iterar sobre una secuencia (como una lista, tupla, diccionario, conjunto o cadena).

```python
for elemento in secuencia:
    # bloque de código a ejecutar por cada elemento en la secuencia
```

#### Ejemplo de `for`

```python
numeros = [1, 2, 3, 4, 5]

for numero in numeros:
    print(numero)
```

### Bucle `while`

El bucle `while` se ejecuta mientras una condición sea verdadera.

```python
while condición:
    # bloque de código a ejecutar mientras la condición sea verdadera
```

#### Ejemplo de `while`

```python
contador = 0

while contador < 5:
    print(contador)
    contador += 1
```

### Control de Flujo en Bucles

#### `break`

La declaración `break` se utiliza para salir de un bucle antes de que haya terminado de ejecutarse.

```python
for numero in numeros:
    if numero == 3:
        break
    print(numero)
```

#### `continue`

La declaración `continue` se utiliza para omitir el resto del bloque de código en la iteración actual y continuar con la siguiente iteración.

```python
for numero in numeros:
    if numero == 3:
        continue
    print(numero)
```

### Bucles Anidados

Puedes tener bucles dentro de otros bucles.

```python
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

### Ejemplo Completo

Combina condicionales y bucles para crear un programa más complejo:

```python
numeros = [1, 2, 3, 4, 5]

for numero in numeros:
    if numero % 2 == 0:
        print(f"{numero} es par.")
    else:
        print(f"{numero} es impar.")
```

Este ejemplo recorre una lista de números y utiliza una declaración `if-else` para determinar si cada número es par o impar.

Claro, el bucle `for` en Python es una herramienta muy poderosa y flexible para iterar sobre secuencias como listas, tuplas, diccionarios, conjuntos y cadenas. A continuación, te explico en detalle cómo funciona el bucle `for`, incluyendo todas sus variantes y usos.

## Bucle `for` Básico

### Iteración sobre Listas

La forma más básica del bucle `for` es iterar sobre una lista.

```python
numeros = [1, 2, 3, 4, 5]

for numero in numeros:
    print(numero)
```

### Iteración sobre Cadenas

También puedes iterar sobre cada carácter de una cadena.

```python
mensaje = "Hola"

for letra in mensaje:
    print(letra)
```

### Iteración sobre Tuplas

Las tuplas también pueden ser iteradas con `for`.

```python
colores = ('rojo', 'verde', 'azul')

for color in colores:
    print(color)
```

### Iteración sobre Diccionarios

Puedes iterar sobre las claves, los valores o los pares clave-valor de un diccionario.

#### Iterar sobre Claves:

```python
persona = {'nombre': 'Juan', 'edad': 30}

for clave in persona:
    print(clave)
```

#### Iterar sobre Valores:

```python
for valor in persona.values():
    print(valor)
```

#### Iterar sobre Pares Clave-Valor:

```python
for clave, valor in persona.items():
    print(f"{clave}: {valor}")
```

## Uso del `range`

El `range` es una función muy útil para generar una secuencia de números, que a menudo se utiliza con `for`.

### Iteración con `range`

#### Desde 0 hasta n-1:

```python
for i in range(5):
    print(i)
```

#### Especificar el Inicio y el Fin:

```python
for i in range(2, 6):
    print(i)
```

#### Especificar el Paso:

```python
for i in range(2, 10, 2):
    print(i)
```

## Bucles Anidados

Puedes anidar un bucle `for` dentro de otro bucle `for`. Esto es útil para iterar sobre estructuras de datos más complejas, como listas de listas (matrices).

### Ejemplo de Bucles Anidados

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for fila in matriz:
    for elemento in fila:
        print(elemento)
```

## Funciones `enumerate`, `zip` y `sorted`

### `enumerate`

`enumerate` permite iterar sobre una secuencia y tener un contador que indica la posición del elemento en la secuencia.

```python
frutas = ['manzana', 'banana', 'cereza']

for indice, fruta in enumerate(frutas):
    print(f"{indice}: {fruta}")
```

### `zip`

`zip` permite iterar sobre dos (o más) secuencias al mismo tiempo, emparejando los elementos correspondientes.

```python
nombres = ['Ana', 'Luis', 'Carlos']
edades = [28, 34, 22]

for nombre, edad in zip(nombres, edades):
    print(f"{nombre} tiene {edad} años")
```

### `sorted`

`sorted` devuelve una nueva lista ordenada a partir de los elementos de cualquier iterable.

```python
numeros = [4, 1, 3, 2]

for numero in sorted(numeros):
    print(numero)
```

## `break`, `continue` y `else` en Bucles

### `break`

`break` se utiliza para salir del bucle antes de que haya terminado su iteración completa.

```python
for numero in numeros:
    if numero == 3:
        break
    print(numero)
```

### `continue`

`continue` omite el resto del bloque de código en la iteración actual y continúa con la siguiente iteración.

```python
for numero in numeros:
    if numero == 3:
        continue
    print(numero)
```

### `else` en Bucles

La cláusula `else` en un bucle `for` se ejecuta cuando el bucle se completa sin encontrar una instrucción `break`.

```python
for numero in numeros:
    print(numero)
else:
    print("Bucle completado.")
```

## Comprehensions

### List Comprehensions

Una forma compacta de crear listas.

```python
cuadrados = [x**2 for x in range(10)]
print(cuadrados)
```

### Set Comprehensions

De forma similar, se pueden crear conjuntos.

```python
cuadrados = {x**2 for x in range(10)}
print(cuadrados)
```

### Dict Comprehensions

También se pueden crear diccionarios de forma compacta.

```python
cuadrados = {x: x**2 for x in range(10)}
print(cuadrados)
```

## Ejemplo Completo

Combina varios conceptos para ilustrar un ejemplo más completo:

```python
nombres = ['Ana', 'Luis', 'Carlos']
edades = [28, 34, 22]
datos = list(zip(nombres, edades))

for i, (nombre, edad) in enumerate(datos):
    if edad < 25:
        continue
    print(f"{i}. {nombre} tiene {edad} años")
else:
    print("Iteración completada.")
```

Este ejemplo muestra cómo combinar `zip`, `enumerate`, `continue` y `else` en un solo bucle `for`.

