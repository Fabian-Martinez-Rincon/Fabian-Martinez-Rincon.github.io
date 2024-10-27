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

- [Tipos de Datos](#tipos-de-datos)
- [Bucles](#bucles)
- [Operandos](#operandos)
- [Introducción](#introducción)
- [Listas](#listas-en-python-todo-lo-que-necesitas-saber)
- [Tuplas](#tuplas-en-python-todo-lo-que-necesitas-saber)
- [Conjuntos](#conjuntos-en-python-todo-lo-que-necesitas-saber)
- [Diccionarios](#diccionarios-en-python-todo-lo-que-necesitas-saber)
- [Examen](#examen)

---

## Tipos de Datos

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

---


## Operandos

En Python, los operadores son símbolos especiales o palabras clave que están diseñados para llevar a cabo operaciones específicas en uno o más operandos. Aquí te explico los operadores básicos en Python, categorizados en varios tipos según su función.

### 1. Operadores Aritméticos
Estos operadores se utilizan para realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.

- **Suma (`+`)**: Suma dos operandos.
  ```python
  resultado = 3 + 2  # resultado es 5
  ```
- **Resta (`-`)**: Resta el operando derecho del izquierdo.
  ```python
  resultado = 3 - 2  # resultado es 1
  ```
- **Multiplicación (`*`)**: Multiplica dos operandos.
  ```python
  resultado = 3 * 2  # resultado es 6
  ```
- **División (`/`)**: Divide el operando izquierdo por el derecho. Siempre devuelve un flotante.
  ```python
  resultado = 3 / 2  # resultado es 1.5
  ```
- **División Entera (`//`)**: Divide el operando izquierdo por el derecho y redondea hacia abajo para devolver un entero.
  ```python
  resultado = 3 // 2  # resultado es 1
  ```
- **Módulo (`%`)**: Devuelve el resto de la división entre el operando izquierdo y el derecho.
  ```python
  resultado = 3 % 2  # resultado es 1
  ```
- **Exponente (`**`)**: Eleva el operando izquierdo a la potencia del derecho.
  ```python
  resultado = 3 ** 2  # resultado es 9
  ```

### 2. Operadores de Comparación
Utilizados para comparar dos valores. Devuelven `True` o `False` según la condición.

- **Igual (`==`)**: Verifica si dos operandos son iguales.
- **No igual (`!=`)**: Verifica si dos operandos no son iguales.
- **Mayor que (`>`)**: Verifica si el operando izquierdo es mayor que el derecho.
- **Menor que (`<`)**: Verifica si el operando izquierdo es menor que el derecho.
- **Mayor o igual que (`>=`)**: Verifica si el operando izquierdo es mayor o igual que el derecho.
- **Menor o igual que (`<=`)**: Verifica si el operando izquierdo es menor o igual que el derecho.

### 3. Operadores Lógicos
Se utilizan para combinar declaraciones condicionales.

- **And (`and`)**: Retorna `True` si ambos operandos son verdaderos.
- **Or (`or`)**: Retorna `True` si al menos uno de los operandos es verdadero.
- **Not (`not`)**: Invierte el estado lógico de su operando.

### 4. Operadores de Asignación
Utilizados para asignar valores a variables.

- **Asignación (`=`)**: Asigna un valor de derecha a izquierda.
- **Suma en asignación (`+=`)**: Suma el operando derecho al izquierdo y asigna el resultado al operando izquierdo.
- **Resta en asignación (`-=`)** y otros similares modifican el valor de la variable en base al operador utilizado.

### 5. Operadores de Bit
Operan bit a bit en representaciones binarias de enteros.

- **AND (`&`)**, **OR (`|`)**, **XOR (`^`)**, **NOT (`~`)**: Operan respectivamente como and, or, xor y not a nivel de bits.
- **Desplazamiento a la izquierda (`<<`)**, **Desplazamiento a la derecha (`>>`)**: Desplazan los bits del operando izquierdo hacia la izquierda o derecha según el número especificado por el operando derecho.

### 6. Operadores de Identidad
Utilizados para comparar si dos variables apuntan al mismo objeto.

- **is**
- **is not**

### 7. Operadores de Membresía
Verifican si un valor se encuentra en una secuencia.

- **in**
- **not in**

Estos operadores básicos son fundamentales en cualquier tipo de programación en Python, permitiendo realizar cálculos, comparaciones y manipulaciones de datos de manera eficiente.

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

---

## Operandos

En Python, los operadores son símbolos especiales o palabras clave que están diseñados para llevar a cabo operaciones específicas en uno o más operandos. Aquí te explico los operadores básicos en Python, categorizados en varios tipos según su función.

### 1. Operadores Aritméticos
Estos operadores se utilizan para realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.

- **Suma (`+`)**: Suma dos operandos.
  ```python
  resultado = 3 + 2  # resultado es 5
  ```
- **Resta (`-`)**: Resta el operando derecho del izquierdo.
  ```python
  resultado = 3 - 2  # resultado es 1
  ```
- **Multiplicación (`*`)**: Multiplica dos operandos.
  ```python
  resultado = 3 * 2  # resultado es 6
  ```
- **División (`/`)**: Divide el operando izquierdo por el derecho. Siempre devuelve un flotante.
  ```python
  resultado = 3 / 2  # resultado es 1.5
  ```
- **División Entera (`//`)**: Divide el operando izquierdo por el derecho y redondea hacia abajo para devolver un entero.
  ```python
  resultado = 3 // 2  # resultado es 1
  ```
- **Módulo (`%`)**: Devuelve el resto de la división entre el operando izquierdo y el derecho.
  ```python
  resultado = 3 % 2  # resultado es 1
  ```
- **Exponente (`**`)**: Eleva el operando izquierdo a la potencia del derecho.
  ```python
  resultado = 3 ** 2  # resultado es 9
  ```

### 2. Operadores de Comparación
Utilizados para comparar dos valores. Devuelven `True` o `False` según la condición.

- **Igual (`==`)**: Verifica si dos operandos son iguales.
- **No igual (`!=`)**: Verifica si dos operandos no son iguales.
- **Mayor que (`>`)**: Verifica si el operando izquierdo es mayor que el derecho.
- **Menor que (`<`)**: Verifica si el operando izquierdo es menor que el derecho.
- **Mayor o igual que (`>=`)**: Verifica si el operando izquierdo es mayor o igual que el derecho.
- **Menor o igual que (`<=`)**: Verifica si el operando izquierdo es menor o igual que el derecho.

### 3. Operadores Lógicos
Se utilizan para combinar declaraciones condicionales.

- **And (`and`)**: Retorna `True` si ambos operandos son verdaderos.
- **Or (`or`)**: Retorna `True` si al menos uno de los operandos es verdadero.
- **Not (`not`)**: Invierte el estado lógico de su operando.

### 4. Operadores de Asignación
Utilizados para asignar valores a variables.

- **Asignación (`=`)**: Asigna un valor de derecha a izquierda.
- **Suma en asignación (`+=`)**: Suma el operando derecho al izquierdo y asigna el resultado al operando izquierdo.
- **Resta en asignación (`-=`)** y otros similares modifican el valor de la variable en base al operador utilizado.

### 5. Operadores de Bit
Operan bit a bit en representaciones binarias de enteros.

- **AND (`&`)**, **OR (`|`)**, **XOR (`^`)**, **NOT (`~`)**: Operan respectivamente como and, or, xor y not a nivel de bits.
- **Desplazamiento a la izquierda (`<<`)**, **Desplazamiento a la derecha (`>>`)**: Desplazan los bits del operando izquierdo hacia la izquierda o derecha según el número especificado por el operando derecho.

### 6. Operadores de Identidad
Utilizados para comparar si dos variables apuntan al mismo objeto.

- **is**
- **is not**

### 7. Operadores de Membresía
Verifican si un valor se encuentra en una secuencia.

- **in**
- **not in**

Estos operadores básicos son fundamentales en cualquier tipo de programación en Python, permitiendo realizar cálculos, comparaciones y manipulaciones de datos de manera eficiente.

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
