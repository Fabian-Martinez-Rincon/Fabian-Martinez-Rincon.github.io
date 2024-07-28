---
layout: ../../layouts/MarkdownPostLayout.astro
title: OPERANDOS
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Python/OPERANDOS.jpg'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

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