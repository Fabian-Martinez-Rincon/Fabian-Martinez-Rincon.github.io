---
layout: ../../layouts/MarkdownPostLayout.astro
title: Colecciones y estructuras de datos en Python
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Python/Colecciones.jpg'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

- [Introducción](#introducción)
- [Listas](#listas-en-python-todo-lo-que-necesitas-saber)
- [Tuplas](#tuplas-en-python-todo-lo-que-necesitas-saber)
- [Conjuntos](#conjuntos-en-python-todo-lo-que-necesitas-saber)
- [Diccionarios](#diccionarios-en-python-todo-lo-que-necesitas-saber)
- [Examen](#examen)

---

## Introducción

Las colecciones y estructuras de datos en Python son fundamentales para organizar y manipular datos de manera eficiente. A continuación, te explicaré las principales colecciones y estructuras de datos disponibles en Python, junto con ejemplos de cómo se usan.

### 1. Listas (`list`)

Las listas son colecciones ordenadas y mutables que pueden contener elementos de diferentes tipos.

```python
# Crear una lista
mi_lista = [1, 2, 3, 4, 5]

# Acceder a un elemento
print(mi_lista[0])  # Imprime 1

# Modificar un elemento
mi_lista[1] = 20

# Agregar un elemento
mi_lista.append(6)

# Eliminar un elemento
mi_lista.remove(3)

# Recorrer una lista
for elemento in mi_lista:
    print(elemento)
```

### 2. Tuplas (`tuple`)

Las tuplas son colecciones ordenadas e inmutables, ideales para datos que no deben cambiar.

```python
# Crear una tupla
mi_tupla = (1, 2, 3, 4, 5)

# Acceder a un elemento
print(mi_tupla[0])  # Imprime 1

# No se pueden modificar las tuplas
# mi_tupla[1] = 20  # Esto generará un error
```

### 3. Conjuntos (`set`)

Los conjuntos son colecciones desordenadas de elementos únicos.

```python
# Crear un conjunto
mi_conjunto = {1, 2, 3, 4, 5}

# Agregar un elemento
mi_conjunto.add(6)

# Eliminar un elemento
mi_conjunto.remove(3)

# Operaciones de conjuntos
otro_conjunto = {4, 5, 6, 7}
union = mi_conjunto.union(otro_conjunto)
interseccion = mi_conjunto.intersection(otro_conjunto)

print(union)         # Imprime {1, 2, 4, 5, 6, 7}
print(interseccion)  # Imprime {4, 5, 6}
```

### 4. Diccionarios (`dict`)

Los diccionarios son colecciones desordenadas de pares clave-valor.

```python
# Crear un diccionario
mi_diccionario = {'nombre': 'Juan', 'edad': 30, 'ciudad': 'Madrid'}

# Acceder a un valor
print(mi_diccionario['nombre'])  # Imprime 'Juan'

# Modificar un valor
mi_diccionario['edad'] = 31

# Agregar un par clave-valor
mi_diccionario['profesión'] = 'Ingeniero'

# Eliminar un par clave-valor
del mi_diccionario['ciudad']

# Recorrer un diccionario
for clave, valor in mi_diccionario.items():
    print(clave, valor)
```

### 5. Listas por comprensión (List Comprehensions)

Una forma concisa de crear listas.

```python
# Crear una lista de cuadrados de números del 0 al 9
cuadrados = [x**2 for x in range(10)]

print(cuadrados)  # Imprime [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### 6. Diccionarios por comprensión (Dict Comprehensions)

De manera similar a las listas por comprensión, se pueden crear diccionarios.

```python
# Crear un diccionario con números y sus cuadrados
cuadrados_dict = {x: x**2 for x in range(10)}

print(cuadrados_dict)  # Imprime {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
```

### 7. Conjuntos por comprensión (Set Comprehensions)

Crear conjuntos de manera concisa.

```python
# Crear un conjunto de cuadrados de números del 0 al 9
cuadrados_set = {x**2 for x in range(10)}

print(cuadrados_set)  # Imprime {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}
```

Estas son las colecciones y estructuras de datos más comunes en Python. Cada una tiene sus propias características y es adecuada para diferentes tipos de tareas. Comprender cómo y cuándo usar cada una te permitirá escribir código más eficiente y claro.

---

## Listas en Python: Todo lo que necesitas saber

Claro, las listas en Python son una de las estructuras de datos más versátiles y utilizadas. A continuación, te proporcionaré una explicación detallada de las listas, sus funcionalidades y ejemplos de uso.

### ¿Qué es una lista?

Una lista en Python es una colección ordenada y mutable de elementos que puede contener datos de cualquier tipo: números, cadenas, otros objetos e incluso otras listas.

### Creación de listas

Las listas se crean encerrando los elementos entre corchetes `[]`, separados por comas.

```python
# Lista vacía
mi_lista_vacia = []

# Lista con elementos
mi_lista = [1, 2, 3, 4, 5]

# Lista con diferentes tipos de elementos
mi_lista_mixta = [1, 'hola', 3.14, True, [1, 2, 3]]
```

### Acceso a elementos

Se puede acceder a los elementos de una lista usando índices. Los índices en Python comienzan desde 0.

```python
mi_lista = [10, 20, 30, 40, 50]

# Acceso al primer elemento
print(mi_lista[0])  # Imprime 10

# Acceso al tercer elemento
print(mi_lista[2])  # Imprime 30

# Acceso al último elemento
print(mi_lista[-1])  # Imprime 50
```

### Modificación de elementos

Las listas son mutables, lo que significa que se pueden cambiar sus elementos después de haberlas creado.

```python
mi_lista = [10, 20, 30, 40, 50]

# Cambiar el primer elemento
mi_lista[0] = 15

# Cambiar el último elemento
mi_lista[-1] = 55

print(mi_lista)  # Imprime [15, 20, 30, 40, 55]
```

### Slicing (rebanado)

El slicing permite acceder a una subsección de la lista.

```python
mi_lista = [10, 20, 30, 40, 50]

# Obtener los primeros tres elementos
print(mi_lista[:3])  # Imprime [10, 20, 30]

# Obtener elementos desde el segundo hasta el cuarto
print(mi_lista[1:4])  # Imprime [20, 30, 40]

# Obtener los últimos dos elementos
print(mi_lista[-2:])  # Imprime [40, 50]
```

### Agregar elementos

Se pueden agregar elementos a una lista usando métodos como `append()`, `insert()`, y `extend()`.

```python
mi_lista = [10, 20, 30]

# Agregar un elemento al final
mi_lista.append(40)
print(mi_lista)  # Imprime [10, 20, 30, 40]

# Insertar un elemento en una posición específica
mi_lista.insert(1, 15)
print(mi_lista)  # Imprime [10, 15, 20, 30, 40]

# Agregar múltiples elementos al final
mi_lista.extend([50, 60])
print(mi_lista)  # Imprime [10, 15, 20, 30, 40, 50, 60]
```

### Eliminar elementos

Se pueden eliminar elementos de una lista usando métodos como `remove()`, `pop()`, y `del`.

```python
mi_lista = [10, 20, 30, 40, 50]

# Eliminar un elemento específico por valor
mi_lista.remove(30)
print(mi_lista)  # Imprime [10, 20, 40, 50]

# Eliminar un elemento por índice y obtenerlo
elemento = mi_lista.pop(1)
print(elemento)  # Imprime 20
print(mi_lista)  # Imprime [10, 40, 50]

# Eliminar un elemento por índice sin obtenerlo
del mi_lista[0]
print(mi_lista)  # Imprime [40, 50]
```

### Métodos útiles

Python proporciona muchos métodos útiles para trabajar con listas.

```python
mi_lista = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

# Obtener la longitud de la lista
print(len(mi_lista))  # Imprime 11

# Contar ocurrencias de un valor
print(mi_lista.count(5))  # Imprime 3

# Encontrar el índice de la primera ocurrencia de un valor
print(mi_lista.index(9))  # Imprime 5

# Ordenar la lista
mi_lista.sort()
print(mi_lista)  # Imprime [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Invertir el orden de la lista
mi_lista.reverse()
print(mi_lista)  # Imprime [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
```

### Listas anidadas

Las listas pueden contener otras listas, lo que permite la creación de estructuras de datos complejas como matrices.

```python
# Crear una lista de listas
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Acceder a un elemento en una lista anidada
print(matriz[1][2])  # Imprime 6

# Recorrer una lista anidada
for fila in matriz:
    for elemento in fila:
        print(elemento, end=' ')
    print()
# Imprime:
# 1 2 3 
# 4 5 6 
# 7 8 9
```

### Listas por comprensión

Las listas por comprensión proporcionan una forma concisa de crear listas.

```python
# Crear una lista de cuadrados de números del 0 al 9
cuadrados = [x**2 for x in range(10)]
print(cuadrados)  # Imprime [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Crear una lista de pares de números del 0 al 9
pares = [x for x in range(10) if x % 2 == 0]
print(pares)  # Imprime [0, 2, 4, 6, 8]

# Crear una lista de tuplas (número, cuadrado)
tuplas = [(x, x**2) for x in range(10)]
print(tuplas)  # Imprime [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36), (7, 49), (8, 64), (9, 81)]
```

### Copiar listas

Al copiar listas, hay que tener en cuenta si se desea una copia superficial o una copia profunda.

```python
import copy

mi_lista = [1, 2, 3, [4, 5]]

# Copia superficial (shallow copy)
copia_superficial = mi_lista.copy()
copia_superficial[3][0] = 99
print(mi_lista)  # Imprime [1, 2, 3, [99, 5]] debido a la referencia compartida de la sublista

# Copia profunda (deep copy)
mi_lista = [1, 2, 3, [4, 5]]
copia_profunda = copy.deepcopy(mi_lista)
copia_profunda[3][0] = 99
print(mi_lista)  # Imprime [1, 2, 3, [4, 5]]
print(copia_profunda)  # Imprime [1, 2, 3, [99, 5]]
```

### Funciones de orden superior

Las listas pueden ser manipuladas usando funciones de orden superior como `map()`, `filter()`, y `reduce()`.

```python
from functools import reduce

mi_lista = [1, 2, 3, 4, 5]

# Mapear una función a todos los elementos
cuadrados = list(map(lambda x: x**2, mi_lista))
print(cuadrados)  # Imprime [1, 4, 9, 16, 25]

# Filtrar elementos usando una función
pares = list(filter(lambda x: x % 2 == 0, mi_lista))
print(pares)  # Imprime [2, 4]

# Reducir la lista a un solo valor usando una función
suma = reduce(lambda x, y: x + y, mi_lista)
print(suma)  # Imprime 15
```

### Resumen

Las listas en Python son increíblemente poderosas y flexibles. Permiten almacenar y manipular datos de manera eficiente, ofreciendo una amplia gama de métodos y técnicas para trabajar con datos. Desde operaciones básicas de acceso y modificación hasta técnicas avanzadas como listas por comprensión y uso de funciones de orden superior, las listas son una herramienta fundamental en el arsenal de cualquier programador de Python.

---

## Tuplas en Python: Todo lo que necesitas saber

Claro, las tuplas en Python son colecciones ordenadas e inmutables, lo que significa que una vez creadas, no se pueden modificar. Son muy útiles para almacenar datos que no deben cambiar y pueden contener elementos de diferentes tipos. A continuación, te proporcionaré una explicación detallada de las tuplas, sus funcionalidades y ejemplos de uso.

### ¿Qué es una tupla?

Una tupla en Python es una colección ordenada e inmutable de elementos que puede contener datos de cualquier tipo: números, cadenas, otros objetos e incluso otras tuplas.

### Creación de tuplas

Las tuplas se crean encerrando los elementos entre paréntesis `()` y separados por comas.

```python
# Tupla vacía
mi_tupla_vacia = ()

# Tupla con un solo elemento (nota la coma)
mi_tupla_un_elemento = (1,)

# Tupla con múltiples elementos
mi_tupla = (1, 2, 3, 4, 5)

# Tupla con diferentes tipos de elementos
mi_tupla_mixta = (1, 'hola', 3.14, True, (1, 2, 3))
```

### Acceso a elementos

Se puede acceder a los elementos de una tupla usando índices. Los índices en Python comienzan desde 0.

```python
mi_tupla = (10, 20, 30, 40, 50)

# Acceso al primer elemento
print(mi_tupla[0])  # Imprime 10

# Acceso al tercer elemento
print(mi_tupla[2])  # Imprime 30

# Acceso al último elemento
print(mi_tupla[-1])  # Imprime 50
```

### Slicing (rebanado)

El slicing permite acceder a una subsección de la tupla.

```python
mi_tupla = (10, 20, 30, 40, 50)

# Obtener los primeros tres elementos
print(mi_tupla[:3])  # Imprime (10, 20, 30)

# Obtener elementos desde el segundo hasta el cuarto
print(mi_tupla[1:4])  # Imprime (20, 30, 40)

# Obtener los últimos dos elementos
print(mi_tupla[-2:])  # Imprime (40, 50)
```

### Inmutabilidad

Las tuplas son inmutables, lo que significa que no se pueden cambiar después de su creación.

```python
mi_tupla = (10, 20, 30)

# Intentar modificar un elemento generará un error
# mi_tupla[1] = 25  # Esto generará TypeError

# Sin embargo, se puede crear una nueva tupla a partir de la existente
mi_tupla_nueva = mi_tupla + (40, 50)
print(mi_tupla_nueva)  # Imprime (10, 20, 30, 40, 50)
```

### Desempaquetado de tuplas

Se pueden desempaquetar los elementos de una tupla en variables individuales.

```python
mi_tupla = (10, 20, 30)

# Desempaquetado de tupla
a, b, c = mi_tupla
print(a)  # Imprime 10
print(b)  # Imprime 20
print(c)  # Imprime 30

# Desempaquetado parcial
mi_tupla = (1, 2, 3, 4, 5)
a, b, *resto = mi_tupla
print(a)  # Imprime 1
print(b)  # Imprime 2
print(resto)  # Imprime [3, 4, 5]
```

### Métodos útiles

Las tuplas tienen menos métodos disponibles que las listas debido a su inmutabilidad, pero algunos de los métodos útiles incluyen `count()` e `index()`.

```python
mi_tupla = (1, 2, 3, 4, 3, 2, 1)

# Contar ocurrencias de un valor
print(mi_tupla.count(2))  # Imprime 2

# Encontrar el índice de la primera ocurrencia de un valor
print(mi_tupla.index(3))  # Imprime 2
```

### Tuplas anidadas

Las tuplas pueden contener otras tuplas, lo que permite la creación de estructuras de datos complejas.

```python
# Crear una tupla de tuplas
mi_tupla_anidada = ((1, 2, 3), (4, 5, 6), (7, 8, 9))

# Acceder a un elemento en una tupla anidada
print(mi_tupla_anidada[1][2])  # Imprime 6

# Recorrer una tupla anidada
for sub_tupla in mi_tupla_anidada:
    for elemento in sub_tupla:
        print(elemento, end=' ')
    print()
# Imprime:
# 1 2 3 
# 4 5 6 
# 7 8 9
```

### Conversiones entre listas y tuplas

A menudo, es útil convertir entre listas y tuplas.

```python
mi_lista = [1, 2, 3, 4, 5]

# Convertir lista a tupla
mi_tupla = tuple(mi_lista)
print(mi_tupla)  # Imprime (1, 2, 3, 4, 5)

# Convertir tupla a lista
mi_lista_nueva = list(mi_tupla)
print(mi_lista_nueva)  # Imprime [1, 2, 3, 4, 5]
```

### Funciones de orden superior

Las tuplas pueden ser manipuladas usando funciones de orden superior como `map()`, `filter()`, y `reduce()`.

```python
from functools import reduce

mi_tupla = (1, 2, 3, 4, 5)

# Mapear una función a todos los elementos
cuadrados = tuple(map(lambda x: x**2, mi_tupla))
print(cuadrados)  # Imprime (1, 4, 9, 16, 25)

# Filtrar elementos usando una función
pares = tuple(filter(lambda x: x % 2 == 0, mi_tupla))
print(pares)  # Imprime (2, 4)

# Reducir la tupla a un solo valor usando una función
suma = reduce(lambda x, y: x + y, mi_tupla)
print(suma)  # Imprime 15
```

### Tuplas como claves de diccionarios

Debido a que las tuplas son inmutables, pueden usarse como claves en diccionarios, a diferencia de las listas.

```python
mi_diccionario = {
    (1, 2): "A",
    (3, 4): "B"
}

# Acceder a un valor usando una tupla como clave
print(mi_diccionario[(1, 2)])  # Imprime "A"
```

### Resumen

Las tuplas en Python son útiles para almacenar datos que no deben cambiar, proporcionando una estructura ordenada e inmutable. Aunque no tienen tantos métodos como las listas debido a su inmutabilidad, las tuplas siguen siendo poderosas y se pueden utilizar en una variedad de contextos, como el desempaquetado, la manipulación con funciones de orden superior y el uso como claves en diccionarios. Conocer y comprender cómo y cuándo usar tuplas puede mejorar significativamente la eficiencia y claridad de tu código en Python.

---

## Conjuntos en Python: Todo lo que necesitas saber

Por supuesto, los conjuntos en Python son una colección de elementos únicos y desordenados. Son útiles para realizar operaciones matemáticas como unión, intersección y diferencia. A continuación, te proporcionaré una explicación detallada de los conjuntos, sus funcionalidades y ejemplos de uso.

### ¿Qué es un conjunto?

Un conjunto en Python es una colección desordenada de elementos únicos. Los conjuntos son mutables, lo que significa que se pueden modificar después de su creación. También existe el `frozenset`, que es una versión inmutable de un conjunto.

### Creación de conjuntos

Los conjuntos se pueden crear usando llaves `{}` o la función `set()`.

```python
# Conjunto vacío
mi_conjunto_vacio = set()

# Conjunto con elementos
mi_conjunto = {1, 2, 3, 4, 5}

# Crear un conjunto a partir de una lista (se eliminan duplicados)
mi_lista = [1, 2, 3, 3, 4, 4, 5]
mi_conjunto_desde_lista = set(mi_lista)

print(mi_conjunto_desde_lista)  # Imprime {1, 2, 3, 4, 5}
```

### Agregar y eliminar elementos

Los conjuntos son mutables, por lo que puedes agregar y eliminar elementos.

```python
mi_conjunto = {1, 2, 3}

# Agregar un elemento
mi_conjunto.add(4)
print(mi_conjunto)  # Imprime {1, 2, 3, 4}

# Agregar múltiples elementos
mi_conjunto.update([5, 6, 7])
print(mi_conjunto)  # Imprime {1, 2, 3, 4, 5, 6, 7}

# Eliminar un elemento (si no existe, genera un KeyError)
mi_conjunto.remove(7)
print(mi_conjunto)  # Imprime {1, 2, 3, 4, 5, 6}

# Eliminar un elemento sin generar error si no existe
mi_conjunto.discard(10)  # No hace nada ya que 10 no está en el conjunto
print(mi_conjunto)  # Imprime {1, 2, 3, 4, 5, 6}

# Eliminar y obtener un elemento aleatorio
elemento = mi_conjunto.pop()
print(elemento)  # Imprime un elemento aleatorio del conjunto
print(mi_conjunto)  # Imprime el conjunto sin el elemento eliminado

# Vaciar el conjunto
mi_conjunto.clear()
print(mi_conjunto)  # Imprime set()
```

### Operaciones de conjuntos

Los conjuntos soportan varias operaciones matemáticas estándar, como unión, intersección, diferencia y diferencia simétrica.

```python
conjunto_a = {1, 2, 3, 4}
conjunto_b = {3, 4, 5, 6}

# Unión
union = conjunto_a.union(conjunto_b)
print(union)  # Imprime {1, 2, 3, 4, 5, 6}

# Intersección
interseccion = conjunto_a.intersection(conjunto_b)
print(interseccion)  # Imprime {3, 4}

# Diferencia
diferencia = conjunto_a.difference(conjunto_b)
print(diferencia)  # Imprime {1, 2}

# Diferencia simétrica
diferencia_simetrica = conjunto_a.symmetric_difference(conjunto_b)
print(diferencia_simetrica)  # Imprime {1, 2, 5, 6}
```

### Métodos útiles

Los conjuntos tienen varios métodos útiles para trabajar con sus elementos.

```python
mi_conjunto = {1, 2, 3, 4, 5}

# Verificar si un elemento está en el conjunto
print(3 in mi_conjunto)  # Imprime True
print(10 in mi_conjunto)  # Imprime False

# Verificar la longitud del conjunto
print(len(mi_conjunto))  # Imprime 5

# Copiar un conjunto
copia_conjunto = mi_conjunto.copy()
print(copia_conjunto)  # Imprime {1, 2, 3, 4, 5}

# Comprobar si es un subconjunto
subconjunto = {1, 2}
print(subconjunto.issubset(mi_conjunto))  # Imprime True

# Comprobar si es un superconjunto
print(mi_conjunto.issuperset(subconjunto))  # Imprime True

# Comprobar si los conjuntos son disjuntos (sin elementos comunes)
conjunto_disjunto = {6, 7, 8}
print(mi_conjunto.isdisjoint(conjunto_disjunto))  # Imprime True
```

### Conjuntos inmutables: `frozenset`

El `frozenset` es una versión inmutable de un conjunto.

```python
mi_frozenset = frozenset([1, 2, 3, 4, 5])

# No se pueden agregar ni eliminar elementos
# mi_frozenset.add(6)  # Esto generará AttributeError

# Se pueden realizar operaciones de conjuntos
otro_frozenset = frozenset([4, 5, 6, 7])

union = mi_frozenset.union(otro_frozenset)
print(union)  # Imprime frozenset({1, 2, 3, 4, 5, 6, 7})

interseccion = mi_frozenset.intersection(otro_frozenset)
print(interseccion)  # Imprime frozenset({4, 5})
```

### Iteración sobre conjuntos

Se pueden recorrer los elementos de un conjunto utilizando un bucle `for`.

```python
mi_conjunto = {1, 2, 3, 4, 5}

# Recorrer el conjunto
for elemento in mi_conjunto:
    print(elemento)
# Imprime:
# 1
# 2
# 3
# 4
# 5
```

### Aplicaciones comunes de conjuntos

#### Eliminación de duplicados

Los conjuntos se utilizan comúnmente para eliminar duplicados de una lista.

```python
mi_lista = [1, 2, 2, 3, 4, 4, 5]
mi_conjunto_sin_duplicados = set(mi_lista)
print(mi_conjunto_sin_duplicados)  # Imprime {1, 2, 3, 4, 5}

# Convertir de nuevo a lista
mi_lista_sin_duplicados = list(mi_conjunto_sin_duplicados)
print(mi_lista_sin_duplicados)  # Imprime [1, 2, 3, 4, 5]
```

#### Contar elementos únicos

Puedes contar fácilmente el número de elementos únicos en una lista usando un conjunto.

```python
mi_lista = [1, 2, 2, 3, 4, 4, 5]
num_unicos = len(set(mi_lista))
print(num_unicos)  # Imprime 5
```

### Resumen

Los conjuntos en Python son una estructura de datos poderosa para trabajar con colecciones de elementos únicos. Ofrecen una amplia variedad de operaciones matemáticas y métodos útiles para manipular y consultar conjuntos de datos. Además, la posibilidad de usar `frozenset` proporciona una opción inmutable cuando se necesita garantizar que el conjunto de datos no cambiará. Conocer y comprender cómo y cuándo usar conjuntos puede mejorar significativamente la eficiencia y claridad de tu código en Python.

---

## Diccionarios en Python: Todo lo que necesitas saber

Por supuesto, los diccionarios en Python son una de las estructuras de datos más importantes y versátiles. Son colecciones desordenadas de pares clave-valor, lo que permite acceder a los valores mediante sus claves únicas. A continuación, te proporcionaré una explicación detallada de los diccionarios, sus funcionalidades y ejemplos de uso.

### ¿Qué es un diccionario?

Un diccionario en Python es una colección desordenada, mutable e indexada de pares clave-valor. Cada clave en un diccionario debe ser única, pero los valores pueden repetirse.

### Creación de diccionarios

Los diccionarios se crean usando llaves `{}` y especificando pares clave-valor separados por comas.

```python
# Diccionario vacío
mi_diccionario_vacio = {}

# Diccionario con pares clave-valor
mi_diccionario = {
    'nombre': 'Juan',
    'edad': 30,
    'ciudad': 'Madrid'
}

# Otra forma de crear un diccionario
mi_diccionario_alternativo = dict(nombre='Juan', edad=30, ciudad='Madrid')
```

### Acceso a elementos

Se puede acceder a los valores de un diccionario usando sus claves.

```python
mi_diccionario = {
    'nombre': 'Juan',
    'edad': 30,
    'ciudad': 'Madrid'
}

# Acceso a un valor
print(mi_diccionario['nombre'])  # Imprime 'Juan'

# Acceso a un valor usando el método get (evita errores si la clave no existe)
print(mi_diccionario.get('edad'))  # Imprime 30
print(mi_diccionario.get('profesion', 'No especificado'))  # Imprime 'No especificado'
```

### Modificación de elementos

Se pueden agregar o modificar pares clave-valor en un diccionario.

```python
mi_diccionario = {
    'nombre': 'Juan',
    'edad': 30
}

# Modificar un valor existente
mi_diccionario['edad'] = 31

# Agregar un nuevo par clave-valor
mi_diccionario['ciudad'] = 'Madrid'

print(mi_diccionario)  # Imprime {'nombre': 'Juan', 'edad': 31, 'ciudad': 'Madrid'}
```

### Eliminación de elementos

Se pueden eliminar pares clave-valor de un diccionario usando `del`, `pop()` o `popitem()`.

```python
mi_diccionario = {
    'nombre': 'Juan',
    'edad': 30,
    'ciudad': 'Madrid'
}

# Eliminar un par clave-valor usando del
del mi_diccionario['ciudad']

# Eliminar un par clave-valor usando pop (y obtener el valor eliminado)
edad = mi_diccionario.pop('edad')

# Eliminar el último par clave-valor añadido usando popitem
ultimo_item = mi_diccionario.popitem()

print(mi_diccionario)  # Imprime {}
print(edad)  # Imprime 30
print(ultimo_item)  # Imprime ('nombre', 'Juan')
```

### Métodos útiles

Los diccionarios tienen muchos métodos útiles para trabajar con sus elementos.

```python
mi_diccionario = {
    'nombre': 'Juan',
    'edad': 30,
    'ciudad': 'Madrid'
}

# Obtener todas las claves
claves = mi_diccionario.keys()
print(claves)  # Imprime dict_keys(['nombre', 'edad', 'ciudad'])

# Obtener todos los valores
valores = mi_diccionario.values()
print(valores)  # Imprime dict_values(['Juan', 30, 'Madrid'])

# Obtener todos los pares clave-valor
items = mi_diccionario.items()
print(items)  # Imprime dict_items([('nombre', 'Juan'), ('edad', 30), ('ciudad', 'Madrid')])

# Actualizar un diccionario con otro diccionario
mi_diccionario.update({'profesion': 'Ingeniero', 'edad': 31})
print(mi_diccionario)  # Imprime {'nombre': 'Juan', 'edad': 31, 'ciudad': 'Madrid', 'profesion': 'Ingeniero'}
```

### Iteración sobre diccionarios

Se pueden recorrer las claves, los valores o los pares clave-valor de un diccionario usando un bucle `for`.

```python
mi_diccionario = {
    'nombre': 'Juan',
    'edad': 30,
    'ciudad': 'Madrid'
}

# Recorrer las claves
for clave in mi_diccionario:
    print(clave)
# Imprime:
# nombre
# edad
# ciudad

# Recorrer los valores
for valor in mi_diccionario.values():
    print(valor)
# Imprime:
# Juan
# 30
# Madrid

# Recorrer los pares clave-valor
for clave, valor in mi_diccionario.items():
    print(f'{clave}: {valor}')
# Imprime:
# nombre: Juan
# edad: 30
# ciudad: Madrid
```

### Diccionarios anidados

Los diccionarios pueden contener otros diccionarios, lo que permite la creación de estructuras de datos complejas.

```python
mi_diccionario_anidado = {
    'persona': {
        'nombre': 'Juan',
        'edad': 30,
        'ciudad': 'Madrid'
    },
    'trabajo': {
        'profesion': 'Ingeniero',
        'empresa': 'TechCorp'
    }
}

# Acceder a elementos de un diccionario anidado
print(mi_diccionario_anidado['persona']['nombre'])  # Imprime 'Juan'
print(mi_diccionario_anidado['trabajo']['empresa'])  # Imprime 'TechCorp'
```

### Comprensión de diccionarios

Los diccionarios por comprensión permiten crear diccionarios de manera concisa y legible.

```python
# Crear un diccionario de cuadrados de números del 0 al 9
cuadrados = {x: x**2 for x in range(10)}
print(cuadrados)  # Imprime {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}

# Crear un diccionario a partir de dos listas
claves = ['nombre', 'edad', 'ciudad']
valores = ['Juan', 30, 'Madrid']
mi_diccionario = {k: v for k, v in zip(claves, valores)}
print(mi_diccionario)  # Imprime {'nombre': 'Juan', 'edad': 30, 'ciudad': 'Madrid'}
```

### Métodos avanzados

#### `setdefault()`

Este método devuelve el valor de una clave si existe, y si no, la agrega al diccionario con un valor por defecto.

```python
mi_diccionario = {'nombre': 'Juan', 'edad': 30}

# Obtener el valor de una clave existente
nombre = mi_diccionario.setdefault('nombre', 'Desconocido')
print(nombre)  # Imprime 'Juan'

# Obtener el valor de una clave no existente, agregándola con un valor por defecto
ciudad = mi_diccionario.setdefault('ciudad', 'Desconocido')
print(ciudad)  # Imprime 'Desconocido'
print(mi_diccionario)  # Imprime {'nombre': 'Juan', 'edad': 30, 'ciudad': 'Desconocido'}
```

#### `fromkeys()`

Este método crea un nuevo diccionario a partir de una secuencia de claves y un valor único.

```python
claves = ['a', 'b', 'c']
valor = 0
mi_diccionario = dict.fromkeys(claves, valor)
print(mi_diccionario)  # Imprime {'a': 0, 'b': 0, 'c': 0}
```

### Resumen

Los diccionarios en Python son una estructura de datos flexible y poderosa para almacenar pares clave-valor. Permiten un acceso rápido y eficiente a los datos mediante sus claves y ofrecen una amplia variedad de métodos y técnicas para manipular y consultar los datos. Con su capacidad para ser anidados, comprensiones de diccionarios y métodos avanzados, los diccionarios son una herramienta esencial para cualquier programador de Python.

---

## Examen

![image](https://github.com/user-attachments/assets/6046bf42-0c81-4643-8846-f1f275fcaf23)
![image](https://github.com/user-attachments/assets/7a7fca76-08cc-4d8f-a57e-e1bce8ac11f1)
![image](https://github.com/user-attachments/assets/b47c677c-9597-4b45-8268-60b4e7bd75a2)
![image](https://github.com/user-attachments/assets/d5632d03-c952-4d63-8ae3-0c39fab76983)
![image](https://github.com/user-attachments/assets/84ed4b15-f9eb-4dbf-94f8-8703cd05f92a)
![image](https://github.com/user-attachments/assets/a23c07e9-74c1-4161-8d20-27b437e3c97e)
![image](https://github.com/user-attachments/assets/356ac80f-bc11-4eff-8ebb-7fefc0305129)
![image](https://github.com/user-attachments/assets/feb9475e-be9b-49b9-8b81-49c1384b48f5)
![image](https://github.com/user-attachments/assets/9fef8a6d-c13f-4579-b81e-44d6b6cd1bdf)
![image](https://github.com/user-attachments/assets/42609044-5337-4150-975d-029b2fa81650)
![image](https://github.com/user-attachments/assets/1873e3ab-c8ec-4d81-903f-4b16a5c7cad7)
![image](https://github.com/user-attachments/assets/9a7c9fef-6c33-4ebd-96ca-0333fc49f48a)
![image](https://github.com/user-attachments/assets/3051910a-d104-47e1-acb0-4fcc443db202)
![image](https://github.com/user-attachments/assets/c2980e34-9561-4f54-8037-5b99b5939579)
![image](https://github.com/user-attachments/assets/0226bc52-6cdd-4f30-ac3f-86108c45c9ee)
