---
layout: ../../layouts/MarkdownPostLayout.astro
title: Funciones Anonimas
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Python/Funciones_Anonimas.jpg'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

Las **funciones lambda** en Python, también conocidas como funciones anónimas, son funciones pequeñas que se definen sin un nombre explícito. Utilizan la palabra clave `lambda` y pueden tener cualquier número de argumentos, pero solo una expresión. Las funciones lambda se suelen usar para tareas simples y de corta duración, y son muy útiles en combinación con otras funciones de orden superior como `map`, `filter` y `reduce`.

## Sintaxis de Funciones Lambda

La sintaxis básica de una función lambda es:

```python
lambda argumentos: expresión
```

### Ejemplo Básico

```python
# Una función lambda que suma dos números
suma = lambda x, y: x + y

print(suma(2, 3))  # Output: 5
```

En este ejemplo, `suma` es una función lambda que toma dos argumentos `x` y `y`, y devuelve su suma.

## Usos Comunes de Funciones Lambda

### 1. Uso con `map`

La función `map` aplica una función a todos los elementos de una secuencia (como una lista) y devuelve un iterador con los resultados.

```python
numeros = [1, 2, 3, 4, 5]
cuadrados = map(lambda x: x**2, numeros)

print(list(cuadrados))  # Output: [1, 4, 9, 16, 25]
```

### 2. Uso con `filter`

La función `filter` filtra elementos de una secuencia según una función que devuelve `True` o `False`.

```python
numeros = [1, 2, 3, 4, 5]
pares = filter(lambda x: x % 2 == 0, numeros)

print(list(pares))  # Output: [2, 4]
```

### 3. Uso con `reduce`

La función `reduce` aplica una función de acumulación a los elementos de una secuencia, reduciéndola a un solo valor. Para usar `reduce`, necesitas importar `functools`.

```python
from functools import reduce

numeros = [1, 2, 3, 4, 5]
suma_total = reduce(lambda x, y: x + y, numeros)

print(suma_total)  # Output: 15
```

## Funciones Lambda como Claves de Ordenación

### Ordenar una Lista de Tuplas

```python
puntos = [(1, 2), (3, 1), (5, -1), (0, 0)]
ordenados = sorted(puntos, key=lambda punto: punto[1])

print(ordenados)  # Output: [(5, -1), (0, 0), (3, 1), (1, 2)]
```

### Ordenar una Lista de Diccionarios

```python
personas = [
    {'nombre': 'Ana', 'edad': 28},
    {'nombre': 'Luis', 'edad': 34},
    {'nombre': 'Carlos', 'edad': 22}
]
ordenados_por_edad = sorted(personas, key=lambda persona: persona['edad'])

print(ordenados_por_edad)
# Output: [{'nombre': 'Carlos', 'edad': 22}, {'nombre': 'Ana', 'edad': 28}, {'nombre': 'Luis', 'edad': 34}]
```

## Funciones Lambda como Argumentos de Otras Funciones

### Uso con `sorted`

```python
frutas = ['manzana', 'banana', 'cereza', 'kiwi', 'mango']
ordenadas_por_longitud = sorted(frutas, key=lambda fruta: len(fruta))

print(ordenadas_por_longitud)  # Output: ['kiwi', 'mango', 'banana', 'manzana', 'cereza']
```

### Uso con `max` y `min`

```python
numeros = [1, 2, 3, 4, 5]
maximo = max(numeros, key=lambda x: -x)  # Orden inverso

print(maximo)  # Output: 5
```

### Uso con `any` y `all`

```python
numeros = [1, 2, 3, 4, 5]

# Verificar si algún número es par
hay_pares = any(map(lambda x: x % 2 == 0, numeros))

print(hay_pares)  # Output: True

# Verificar si todos los números son positivos
todos_positivos = all(map(lambda x: x > 0, numeros))

print(todos_positivos)  # Output: True
```

## Funciones Lambda con Expresiones Complejas

Aunque las funciones lambda deben contener solo una expresión, esa expresión puede ser bastante compleja.

### Uso de Condicionales en Lambda

```python
# Función lambda con condicional
clasificar = lambda x: 'par' if x % 2 == 0 else 'impar'

print(clasificar(2))  # Output: 'par'
print(clasificar(3))  # Output: 'impar'
```

### Lambda con Operaciones Múltiples

```python
# Función lambda con múltiples operaciones
calculo = lambda x, y: (x + y) * (x - y)

print(calculo(3, 2))  # Output: 5
```

## Ejemplos Combinados

### Lista de Funciones Lambda

```python
operaciones = [
    lambda x: x**2,
    lambda x: x**3,
    lambda x: x**4
]

for operacion in operaciones:
    print(operacion(2))
# Output:
# 4
# 8
# 16
```

### Diccionario de Funciones Lambda

```python
operaciones = {
    'cuadrado': lambda x: x**2,
    'cubo': lambda x: x**3,
    'cuarta_potencia': lambda x: x**4
}

print(operaciones )  # Output: 4
print(operaciones )  # Output: 8
print(operaciones )  # Output: 16
```

