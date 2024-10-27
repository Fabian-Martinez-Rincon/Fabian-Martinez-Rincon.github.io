---
layout: ../../layouts/MarkdownPostLayout.astro
title: TIPOS DE DATOS
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Python/TIPOS_DE_DATOS.jpg'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

- [Introducción](#tipos-de-datos-básicos)
- [Listas](#listas)
- [Tuplas](#tuplas)

Python, siendo un lenguaje de programación de alto nivel, maneja varios tipos de datos que permiten a los desarrolladores trabajar de manera flexible y eficiente. Aquí te explico los principales tipos de datos en Python, categorizados en mutables e inmutables, con detalles sobre sus características y usos.

### Tipos de datos básicos

#### 1. Números
   - **Enteros (`int`)**: Representan números enteros, positivos o negativos, sin parte decimal.
   - **Punto flotante (`float`)**: Representan números reales con parte decimal. Pueden también representar números en formato científico (e.g., 1.5e2).
   - **Números complejos (`complex`)**: Tienen una parte real y una parte imaginaria (e.g., `3 + 4j`).

#### 2. Booleanos (`bool`)
   - Representan dos valores: `True` y `False`. Son subtipos de los enteros (`int`), donde `True` equivale a 1 y `False` a 0.

#### 3. Cadenas de caracteres (`str`)
   - Secuencias inmutables de caracteres Unicode. Pueden ser definidas usando comillas simples o dobles.

### Estructuras de datos

#### 1. Listas (`list`)
   - Colecciones ordenadas y mutables de elementos. Los elementos pueden ser de diferentes tipos, incluyendo otras listas.
   - Ejemplo: `[1, "a", 3.14, [2, 3]]`

#### 2. Tuplas (`tuple`)
   - Colecciones ordenadas e inmutables de elementos. Funcionan de manera similar a las listas, pero no pueden ser modificadas una vez creadas.
   - Ejemplo: `(1, "a", 3.14)`

#### 3. Diccionarios (`dict`)
   - Colecciones no ordenadas de pares clave-valor. Las claves deben ser únicas y son inmutables. Los valores pueden ser de cualquier tipo.
   - Ejemplo: `{"nombre": "Juan", "edad": 28}`

#### 4. Conjuntos (`set`)
   - Colecciones no ordenadas de elementos únicos. Son mutables y muy útiles para realizar operaciones de conjuntos como uniones, intersecciones, etc.
   - Ejemplo: `{1, 2, 3}`

### Otros tipos de datos

#### 1. Bytes y bytearray
   - **Bytes (`bytes`)**: Secuencias inmutables de bytes (0-255).
   - **Bytearray (`bytearray`)**: Secuencias mutables de bytes.
   - Útiles para trabajar con datos binarios en archivos o redes.

#### 2. None
   - Un tipo especial que tiene un único valor posible: `None`. Es utilizado para denotar la ausencia de valor.

### Características adicionales de los tipos de datos en Python

- **Tipado dinámico**: No necesitas declarar el tipo de una variable; Python lo inferirá en tiempo de ejecución.
- **Casting**: Puedes convertir explícitamente de un tipo a otro (e.g., de `float` a `int`).
- **Colecciones avanzadas**: Python incluye módulos como `collections` y `array` que ofrecen estructuras de datos especializadas como `deque`, `namedtuple` y `array.array`.

Los tipos de datos en Python son fundamentales para entender cómo almacenar, manipular y trabajar con datos de manera efectiva. La elección del tipo de dato correcto puede influir significativamente en la eficiencia y simplicidad del código.

---

## Listas

Las listas en Python son estructuras de datos muy versátiles y se utilizan ampliamente debido a su flexibilidad y facilidad de uso. Aquí te explico en detalle cómo funcionan las listas, sus características principales, y cómo puedes manipularlas.

### Características de las Listas en Python

1. **Mutables**: Puedes cambiar, agregar o eliminar elementos de una lista después de su creación.
2. **Ordenadas**: Los elementos en una lista tienen un orden definido, lo que significa que cada elemento tiene un índice asignado, empezando por 0.
3. **Heterogéneas**: Una lista puede contener elementos de diferentes tipos, incluyendo otra lista, lo que permite crear estructuras de datos complejas como listas de listas.

### Creación de Listas

Para crear una lista, simplemente coloca los elementos entre corchetes `[]`, separados por comas:

```python
mi_lista = [1, 2, 3, 'ejemplo', True]
```

También puedes crear una lista vacía y luego agregarle elementos:

```python
mi_lista = []
mi_lista.append(1)  # Agrega 1 al final de la lista
mi_lista.append('a')
```

### Acceso a Elementos

Puedes acceder a los elementos de la lista mediante sus índices:

```python
elemento = mi_lista[0]  # Retorna el primer elemento, 1
ultimo = mi_lista[-1]  # Retorna el último elemento, 'a'
```

### Modificación de Elementos

Modificar un elemento en la lista es sencillo gracias a su naturaleza mutable:

```python
mi_lista[1] = 'nuevo valor'  # Cambia el segundo elemento a 'nuevo valor'
```

### Métodos Principales de las Listas

Las listas tienen varios métodos útiles para su manipulación:

- **`append(x)`**: Agrega un elemento `x` al final de la lista.
- **`extend([x, y, z])`**: Extiende la lista agregando todos los elementos de la lista dada.
- **`insert(i, x)`**: Inserta un elemento `x` en la posición `i`.
- **`remove(x)`**: Elimina el primer elemento `x` de la lista.
- **`pop([i])`**: Elimina el elemento en la posición `i` y lo retorna. Si no se especifica `i`, `pop()` elimina y retorna el último elemento.
- **`clear()`**: Elimina todos los elementos de la lista.
- **`index(x)`**: Retorna el índice del primer elemento igual a `x`.
- **`count(x)`**: Cuenta el número de veces que `x` aparece en la lista.
- **`sort()`**: Ordena los elementos de la lista in situ.
- **`reverse()`**: Invierte el orden de los elementos de la lista in situ.

### Iteración Sobre Listas

Las listas se pueden iterar usando un bucle `for`, lo que permite ejecutar operaciones con cada elemento:

```python
for elemento in mi_lista:
    print(elemento)
```

### Listas por Comprensión

Python permite crear listas de manera concisa y eficiente a través de lo que se conoce como comprensiones de listas:

```python
cuadrados = [x**2 for x in range(10)]
```

Esto crea una lista de los cuadrados de los números del 0 al 9.

### Usos Comunes de las Listas

- Almacenamiento de colecciones de datos.
- Manipulación de datos para análisis.
- Implementación de estructuras de datos como pilas y colas.

Las listas son una herramienta esencial en Python debido a su flexibilidad y poderosas capacidades de manipulación de datos. Su comprensión profunda es crucial para la programación efectiva en Python.


![image](https://github.com/user-attachments/assets/6500e7ef-1e7b-424f-90d8-579c5e863839)

Las operaciones entre listas en Python son fundamentales para manipular colecciones de datos. A continuación, te detallo las operaciones más comunes que puedes realizar con listas, incluyendo cómo combinarlas, compararlas, y modificar su contenido.

### 1. Concatenación de Listas
Para unir dos o más listas, puedes usar el operador de suma (`+`). Esta operación no modifica las listas originales, sino que devuelve una nueva lista que es la unión de las listas que se concatenan.

```python
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]
lista3 = lista1 + lista2  # Resultado: [1, 2, 3, 4, 5, 6]
```

### 2. Repetición de Listas
Puedes repetir los elementos de una lista un número determinado de veces utilizando el operador de multiplicación (`*`), lo que resulta útil para crear listas grandes o inicializar valores.

```python
lista = [1, 2, 3]
repetida = lista * 3  # Resultado: [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

### 3. Acceso a Elementos
Puedes acceder a los elementos de una lista utilizando índices entre corchetes. Python también admite índices negativos, donde `-1` es el último elemento, `-2` el penúltimo, y así sucesivamente.

```python
elemento = lista1[0]  # Accede al primer elemento, 1
ultimo = lista1[-1]   # Accede al último elemento, 3
```

### 4. Rebanadas de Listas (Slicing)
Python permite obtener sub-listas utilizando la notación de rebanadas, que especifica el índice de inicio y el de fin, separados por dos puntos (`:`). Si se omite el índice de inicio o el de fin, se asume que es el inicio o el fin de la lista, respectivamente.

```python
sublista = lista1[1:3]  # Obtiene los elementos desde el índice 1 hasta el 2, resultado: [2, 3]
```

### 5. Comparación de Listas
Las listas pueden ser comparadas utilizando operadores de comparación. La comparación se realiza elemento por elemento empezando desde el primer índice.

```python
lista1 == [1, 2, 3]  # Retorna True
lista1 < lista2      # Retorna True si lista1 es lexicográficamente menor que lista2
```

### 6. Métodos de Listas para Operaciones entre Listas
Algunos métodos de listas son especialmente útiles para modificar listas:

- **`append(obj)`**: Agrega un objeto al final de la lista.
- **`extend(iterable)`**: Extiende la lista agregando todos los elementos del iterable.
- **`insert(index, obj)`**: Inserta un objeto en la posición indicada.
- **`remove(obj)`**: Elimina el primer elemento con el valor especificado.
- **`pop([index])`**: Remueve el elemento en el índice dado y lo retorna.

### 7. Iteración sobre Listas
Las listas son iterables, lo que significa que puedes recorrer sus elementos utilizando un bucle `for`.

```python
for elemento in lista1:
    print(elemento)
```

### 8. List Comprehensions
Las comprensiones de listas son una forma concisa y eficiente de crear listas a partir de otros iterables. Son comunes para realizar operaciones entre elementos de listas existentes y crear una nueva lista.

```python
cuadrados = [x**2 for x in lista1]  # Crea una lista de los cuadrados de lista1
```

Estas operaciones y métodos hacen de las listas una de las herramientas más flexibles y utilizadas en Python, permitiéndote manejar datos de manera eficaz en una gran variedad de aplicaciones.

¡Claro! Vamos a explorar más a fondo las operaciones avanzadas que puedes realizar con listas en Python, incluyendo el uso de la función `zip` y otras técnicas útiles para manipular listas.

### Función `zip()`
La función `zip()` es extremadamente útil cuando necesitas combinar elementos de dos o más listas (o cualquier iterable) en una serie de tuplas. Cada tupla creada por `zip()` contiene un elemento de cada uno de los iterables pasados como argumentos, agrupados por sus posiciones.

#### Ejemplo Básico de `zip()`
```python
nombres = ['Ana', 'Luis', 'Marta']
edades = [25, 30, 35]
combinados = list(zip(nombres, edades))
# Resultado: [('Ana', 25), ('Luis', 30), ('Marta', 35)]
```

#### Usos Comunes de `zip()`
- **Paralelismo**: `zip()` es útil para iterar sobre múltiples listas en paralelo.
  ```python
  for nombre, edad in zip(nombres, edades):
      print(f"{nombre} tiene {edad} años")
  ```
- **Creación de Diccionarios**: Cuando tienes dos listas relacionadas, puedes usar `zip()` para crear un diccionario donde una lista forma las claves y la otra los valores.
  ```python
  diccionario = dict(zip(nombres, edades))
  # Resultado: {'Ana': 25, 'Luis': 30, 'Marta': 35}
  ```

### Operaciones con `map()`
La función `map()` aplica una función a cada elemento de una lista (o a cualquier iterable) y retorna un nuevo iterable con los resultados.

#### Ejemplo de `map()`
```python
def cuadrado(x):
    return x * x

numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(cuadrado, numeros))
# Resultado: [1, 4, 9, 16, 25]
```

### Funciones `filter()` y `reduce()`
Estas funciones son útiles para realizar operaciones que requieren condicionar o acumular valores.

#### Función `filter()`
`filter()` permite filtrar elementos de una lista basados en una condición.

```python
def es_par(x):
    return x % 2 == 0

pares = list(filter(es_par, numeros))
# Resultado: [2, 4]
```

#### Función `reduce()`
A diferencia de `filter()` y `map()`, `reduce()` no es una función incorporada y debe importarse del módulo `functools`. Reduce una lista a un único valor aplicando repetidamente una función a los elementos de la lista.

```python
from functools import reduce

def suma(x, y):
    return x + y

resultado = reduce(suma, numeros)
# Resultado: 15
```

### Listas por Comprensión Avanzadas
Las comprensiones de listas pueden incluir condiciones y ser usadas para crear listas más complejas de manera concisa y eficiente.

#### Ejemplo Avanzado
```python
# Cuadrados de los números pares
cuadrados_pares = [x**2 for x in numeros if x % 2 == 0]
# Resultado: [4, 16]
```

### Uso de `sorted()`
`sorted()` es una función incorporada que ordena cualquier iterable y retorna una nueva lista ordenada.

```python
numeros_desordenados = [3, 1, 4, 1, 5, 9, 2, 6]
ordenados = sorted(numeros_desordenados)
# Resultado: [1, 1, 2, 3, 4, 5, 6, 9]
```

Estas herramientas y funciones hacen que las listas en Python sean increíblemente potentes y flexibles para manejar datos y realizar cálculos complejos, optimizando muchas tareas comunes de programación.

---

# Tuplas

Las tuplas en Python son estructuras de datos que se utilizan para almacenar colecciones ordenadas e inmutables de elementos. A diferencia de las listas, las tuplas no pueden modificarse una vez creadas, lo que las hace ideales para asegurar que los datos no cambien y para mejorar el rendimiento en ciertos contextos. Aquí te detallo más sobre las tuplas:

### Características de las Tuplas

1. **Inmutables**: Una vez que se crea una tupla, no puedes modificar sus elementos. Esto incluye no poder añadir, cambiar o eliminar elementos.
2. **Ordenadas**: Al igual que las listas, las tuplas mantienen un orden específico. Esto significa que cada elemento tiene un índice basado en su posición.
3. **Heterogéneas**: Las tuplas pueden contener elementos de diferentes tipos de datos, como enteros, cadenas y otras tuplas.

### Creación de Tuplas

Puedes crear una tupla simplemente enumerando sus elementos entre paréntesis `()`, separados por comas:

```python
mi_tupla = (1, 2, 3, 'Python', False)
```

Para tuplas de un solo elemento, es necesario incluir una coma al final para diferenciarla de un elemento entre paréntesis:

```python
tupla_un_elemento = (1,)
```

También puedes crear una tupla sin paréntesis, simplemente separando los elementos con comas:

```python
mi_tupla = 1, 2, 3, 'Python', False
```

### Acceso a Elementos

El acceso a los elementos de una tupla se realiza mediante índices, de la misma manera que con las listas:

```python
primer_elemento = mi_tupla[0]  # Retorna 1
ultimo_elemento = mi_tupla[-1] # Retorna False
```

### Operaciones Comunes en Tuplas

Aunque las tuplas son inmutables, puedes realizar ciertas operaciones que no modifican los elementos:

- **Concatenación**: Puedes unir dos o más tuplas para formar una nueva tupla.
  
  ```python
  tupla1 = (1, 2, 3)
  tupla2 = ('a', 'b', 'c')
  nueva_tupla = tupla1 + tupla2  # (1, 2, 3, 'a', 'b', 'c')
  ```

- **Multiplicación**: Repetir una tupla un número específico de veces.
  
  ```python
  repetir_tupla = tupla1 * 2  # (1, 2, 3, 1, 2, 3)
  ```

- **Métodos**: Algunos métodos útiles para trabajar con tuplas son:
  - **`count(x)`**: Devuelve el número de veces que el elemento `x` aparece en la tupla.
  - **`index(x)`**: Devuelve el índice del primer elemento igual a `x`.

### Inmutabilidad de las Tuplas

La inmutabilidad de las tuplas las hace útiles en situaciones donde necesitas asegurar que los datos no sean alterados, como:

- Claves en diccionarios, donde las claves deben ser inmutables.
- Paso de datos a funciones que no deben cambiar los valores recibidos.

### Usos Comunes de las Tuplas

- Almacenamiento de datos que no deben cambiar, como coordenadas o configuraciones fijas.
- Retorno de múltiples valores desde una función.

Las tuplas son estructuras de datos fundamentales en Python debido a su simplicidad y eficiencia, especialmente en contextos donde la integridad y la seguridad de los datos son cruciales.

---

