---
layout: ../../layouts/MarkdownPostLayout.astro
title: Final OC
author: Alumno de Astro
description: ""
image:
    url: '/posts/Materias/oc-finales.webp'
    alt: "Miniatura de los rayos de Astro."
pubDate: 2022-07-15
tags: ["bash", "nvim", "linux", "debian"]
category: Facultad
---

<div align='center'><img src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDR2ZGR0enZoYXF4cnhwZGc4dGRqN2VrcmdmeG16d2h4cnhjZHlzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ubLIcHvitTa36/giphy.gif'></div>

> ⚠️ Las Algunas preguntas estan hechas bajo mi criterio, pueden estar mal, si detectan que algo esta mal, no duden en contactarme por mail:fabianmartinezrincon.123@gmail.com o por discord: fabomartinez

<br>

---

# Indice

- [Finales Echos por mi](#finales-echos-por-mi)
	- [Final 1](#final-1)
	- [Final 2 08-22](#final-2-08-22)
	- [Final 3 sin fecha](#final-3-sin-fecha)
	- [Final 4 11-22](#final-4-11-22)
	- [Final 5 Mesa febrero 2º llamado | 21/02/2022](#final-5-mesa-febrero-2º-llamado--21022022)
	- [Final 6 FEBRERO 2022 1ERA FECHA](#final-6-febrero-2022-1era-fecha)
	- [Final 7 Organización de Computadoras 08-23](#final-7-organización-de-computadoras-08-23)
	- [Final 8 - Abril 2023 (10/04)](#final-8---abril-2023-1004)
	- [Final 9 Organización de Computadoras 23-Feb1](#final-9-organización-de-computadoras-23-feb1)
	- [Final 10 Feb20b](#final-10-feb20b)
	- [Final 11 Octubre del 2023](#final-11-octubre-del-2023)
	- [Final 12 23Dicb](#final-12-23dicb)
	- [Final 13 FEBRERO 2022 1ERA FECHA](#final-13-febrero-2022-1era-fecha)
	- [Final 14 08-23](#final-14-08-23)
	- [Final 15 11-22](#final-15-11-22)
	- [Final 16 04-24](#final-16-04-24)
	- [Final 17](#final-17-abr23)
	- [Final 18](#final-18-5-23)
	- [Final 19](#final-19)
	- [Final 20](#final-20-08-22)
	- [Final 21](#final-21-09-22)
- [Otros Finales Resueltos](#otros-finales-resueltos)
- [Ejemplos de youtube](#ejemplos)
	- [Punto Flotante](#numeros-en-punto-flotante)

---

# Practica 1

#### Ejercicio 1

![image](https://github.com/user-attachments/assets/32794443-4aae-4f72-9ed2-d137e8f0fe26)


Vamos a añadir el sistema **Ex2** a las representaciones. En el sistema Ex2, sumamos un exceso de \(2^{n-1}\) (en 8 bits, el exceso es 128) antes de representar el número en binario.

1. **0**:
   - **BSS**: `00000000`
   - **BCS**: `00000000`
   - **Ca1**: `00000000`
   - **Ca2**: `00000000`
   - **Ex2**: `10000000` (0 + 128)

2. **1**:
   - **BSS**: `00000001`
   - **BCS**: `00000001`
   - **Ca1**: `00000001`
   - **Ca2**: `00000001`
   - **Ex2**: `10000001` (1 + 128)

3. **127**:
   - **BSS**: `01111111`
   - **BCS**: `01111111`
   - **Ca1**: `01111111`
   - **Ca2**: `01111111`
   - **Ex2**: `11111111` (127 + 128)

4. **128**: //Este esta mal
   - **BSS**: No se puede representar, ya que el rango es de 0 a 255.
   - **BCS**: No se puede representar.
   - **Ca1**: No se puede representar.
   - **Ca2**: No se puede representar.
   - **Ex2**: `00000000` (128 + 128 = 256, pero en 8 bits es `00000000`)

5. **255**:
   - **BSS**: `11111111`
   - **BCS**: No se puede representar.
   - **Ca1**: No se puede representar.
   - **Ca2**: No se puede representar.
   - **Ex2**: `01111111` (255 + 128 = 383, pero en 8 bits es `01111111`)

6. **256**: No se puede representar en ninguno de los sistemas de 8 bits.
   - **BSS**: No se puede representar
   - **BCS**: No se puede representar 
   - **Ca1**: No se puede representar 
   - **Ca2**: No se puede representar
   - **Ex2**: No se puede representar

7. **-1**:
   - **BSS**: No se puede representar
   - **BCS**: `11111111`
   - **Ca1**: `11111110`
   - **Ca2**: `11111111`
   - **Ex2**: `01111111` (-1 + 128)

8. **-7**:
   - **BSS**: No se puede representar
   - **BCS**: `11111001`
   - **Ca1**: `11111000`
   - **Ca2**: `11111001`
   - **Ex2**: `01111001` (-7 + 128)

9. **-127**:
   - **BSS**: No se puede representar
   - **BCS**: `10000001`
   - **Ca1**: `10000000`
   - **Ca2**: `10000001`
   - **Ex2**: `00000001` (-127 + 128)

10. **-128**:
    - **BSS**: No se puede representar
    - **BCS**: `10000000`
    - **Ca1**: `01111111`
    - **Ca2**: `10000000`
    - **Ex2**: `00000000` (-128 + 128)

11. **-139**: No se puede representar en ninguno de los sistemas de 8 bits.
    - **BSS**: No se puede representar
    - **BCS**: No se puede representar
    - **Ca1**: No se puede representar
    - **Ca2**: No se puede representar
    - **Ex2**: No se puede representar

12. **-56**:
    - **BSS**: No se puede representar
    - **BCS**: `11001000`
    - **Ca1**: `10110111`
    - **Ca2**: `10111000`
    - **Ex2**: `01001000` (-56 + 128)

13. **130**: No se puede representar en BCS, Ca1, ni Ca2 porque el rango permitido es de -128 a 127.
    - **BSS**: `10000010`
    - **BCS**: No se puede representar
    - **Ca1**: No se puede representar
    - **Ca2**: No se puede representar
    - **Ex2**: `10000010` (130 + 128 = 258, pero en 8 bits es `00000010`)

14. **45**:
    - **BSS**: `00101101`
    - **BCS**: `00101101`
    - **Ca1**: `00101101`
    - **Ca2**: `00101101`
    - **Ex2**: `10101101` (45 + 128)

15. **90**:
    - **BSS**: `01011010`
    - **BCS**: `01011010`
    - **Ca1**: `01011010`
    - **Ca2**: `01011010`
    - **Ex2**: `11011010` (90 + 128)

16. **-90**:
    - **BSS**: No se puede representar
    - **BCS**: `10100110`
    - **Ca1**: `01011001`
    - **Ca2**: `01011010`
    - **Ex2**: `00100110` (-90 + 128)

17. **0.75 y 2.5**: No se pueden representar en sistemas enteros de 8 bits.

Ejemplo de Bogado

![image](https://github.com/user-attachments/assets/3524dcb2-11ea-4c8c-b7c3-ea6291dbddae)
![image](https://github.com/user-attachments/assets/dc7f7380-4126-4e88-914c-4a7cf68055cd)

<hr class="yellow">

### Ejercicio 2

![image](https://github.com/user-attachments/assets/df84948f-6ea0-47d0-bb1e-42179e115c68)

Para interpretar las cadenas de 8 bits en los sistemas BSS, BCS, Ca1, Ca2 y Ex2, vamos a analizar cada cadena por separado en cada sistema:

1. **00000000**:
   - **BSS**: 0
   - **BCS**: 0
   - **Ca1**: 0
   - **Ca2**: 0
   - **Ex2**: \(0 - 128 = -128\)

2. **00000001**:
   - **BSS**: 1
   - **BCS**: 1
   - **Ca1**: 1
   - **Ca2**: 1
   - **Ex2**: \(1 - 128 = -127\)

3. **11111110**:
   - **BSS**: No se puede representar (número negativo en BSS)
   - **BCS**: -126
   - **Ca1**: -1 (invertir bits de 00000001 que es 1)
   - **Ca2**: -2 (invertir bits de 00000001 que es 1 y sumar 1)
   - **Ex2**: \(254 - 128 = 126\)

4. **01111111**:
   - **BSS**: 127
   - **BCS**: 127
   - **Ca1**: 127
   - **Ca2**: 127
   - **Ex2**: \(127 - 128 = -1\)

5. **11111111**:
   - **BSS**: No se puede representar (número negativo en BSS)
   - **BCS**: -127
   - **Ca1**: -0 (invertir bits de 00000000 que es 0)
   - **Ca2**: -1 (invertir bits de 00000000 que es 0 y sumar 1)
   - **Ex2**: \(255 - 128 = 127\)

6. **00010001**:
   - **BSS**: 17
   - **BCS**: 17
   - **Ca1**: 17
   - **Ca2**: 17
   - **Ex2**: \(17 - 128 = -111\)

7. **10011001**:
   - **BSS**: No se puede representar (número negativo en BSS)
   - **BCS**: -25
   - **Ca1**: -102 (invertir bits de 01100110 que es 102)
   - **Ca2**: -103 (invertir bits de 01100110 que es 102 y sumar 1)
   - **Ex2**: \(153 - 128 = 25\)

8. **10101010**:
   - **BSS**: No se puede representar (número negativo en BSS)
   - **BCS**: -86
   - **Ca1**: -85 (invertir bits de 01010101 que es 85)
   - **Ca2**: -86 (invertir bits de 01010100 que es 85 y sumar 1)
   - **Ex2**: \(170 - 128 = 42\)

9. **01100110**:
   - **BSS**: 102
   - **BCS**: 102
   - **Ca1**: 102
   - **Ca2**: 102
   - **Ex2**: \(102 - 128 = -26\)

#### Resumen de los resultados:

| Cadena     | BSS       | BCS  | Ca1  | Ca2  | Ex2    |
|------------|-----------|------|------|------|--------|
| 00000000   | 0         | 0    | 0    | 0    | -128   |
| 00000001   | 1         | 1    | 1    | 1    | -127   |
| 11111110   | 254 | -126 | -1   | -2   | 126    |
| 01111111   | 127       | 127  | 127  | 127  | -1     |
| 11111111   | 255 | -127 | -0   | -1   | 127    |
| 00010001   | 17        | 17   | 17   | 17   | -111   |
| 10011001   | 153 | -25  | -102 | -103 | 25     |
| 10101010   | 170 | -86  | -85  | -86  | 42     |
| 01100110   | 102       | 102  | 102  | 102  | -26    |

![image](https://github.com/user-attachments/assets/754f0570-f2c7-4232-b3b7-7b4a6afec1bb)

<hr class="yellow">

### Ejercicio 3

![image](https://github.com/user-attachments/assets/680b8037-b8e0-478d-b37f-c9a69d5e9e5f)

![image](https://github.com/user-attachments/assets/98828090-8176-463a-a107-e4d148a76504)
![image](https://github.com/user-attachments/assets/d81fe7ec-8fc1-4079-a274-188d84568d45)
![image](https://github.com/user-attachments/assets/a3175e4b-a336-4aff-bbec-54b4f0a94967)
![image](https://github.com/user-attachments/assets/e75b277f-a587-43b6-bdfb-daa9424ea832)

---

### Ejercicio 4

![image](https://github.com/user-attachments/assets/662416d2-8e3a-4bce-9466-6247c6b92300)

Vamos a representar los números dados en los sistemas de punto fijo del ejercicio 3 y, si no es posible obtener una representación exacta, indicaremos cuál es la más próxima y calcularemos el error cometido. Si el número está fuera del rango del sistema, lo señalaremos.

#### Sistema de punto fijo en BSS (7 bits de parte entera y 3 bits de parte fraccionaria)

![image](https://github.com/user-attachments/assets/65334c81-1ca8-415d-a05a-cddf2aa5cfd8)

1. **7**:
   - Representación: 7
   - Error: 0

2. **15.125**:
   - Representación: 15.125
   - Error: 0

3. **2.2**:
   - Más próxima: 2.25
   - Error: \(2.25 - 2.2 = 0.05\)

4. **8.001**:
   - Más próxima: 8
   - Error: \(8 - 8.001 = -0.001\)

5. **123.25**:
   - Representación: 123.25
   - Error: 0

6. **50.50**:
   - Más próxima: 50.5
   - Error: 0

7. **120**:
   - Representación: 120
   - Error: 0

8. **1.2**:
   - Más próxima: 1.25
   - Error: \(1.25 - 1.2 = 0.05\)

9. **1.25**:
   - Representación: 1.25
   - Error: 0

10. **35**:
    - Representación: 35
    - Error: 0

11. **-1.25**:
    - No se puede representar (fuera del rango)

12. **1.0625**:
    - Más próxima: 1.125
    - Error: \(1.125 - 1.0625 = 0.0625\)

13. **-1.5625**:
    - No se puede representar (fuera del rango)

14. **-35.5**:
    - No se puede representar (fuera del rango)

#### Sistema de punto fijo en BCS (1 bit de signo, 5 bits de parte entera y 4 bits de parte fraccionaria)

![image](https://github.com/user-attachments/assets/1654ecc6-c9c7-4fe8-bca1-07998857d06b)

1. **7**:
   - Representación: 7
   - Error: 0

2. **15.125**:
   - Representación: 15.125
   - Error: 0

3. **2.2**:
   - Más próxima: 2.1875
   - Error: \(2.2 - 2.1875 = 0.0125\)

4. **8.001**:
   - Más próxima: 8
   - Error: \(8 - 8.001 = -0.001\)

5. **123.25**:
   - No se puede representar (fuera del rango)

6. **50.50**:
   - No se puede representar (fuera del rango)

7. **120**:
   - No se puede representar (fuera del rango)

8. **1.2**:
   - Más próxima: 1.1875
   - Error: \(1.2 - 1.1875 = 0.0125\)

9. **1.25**:
   - Representación: 1.25
   - Error: 0

10. **35**:
    - No se puede representar (fuera del rango)

11. **-1.25**:
    - Representación: -1.25
    - Error: 0

12. **1.0625**:
    - Representación: 1.0625
    - Error: 0

13. **-1.5625**:
    - Representación: -1.5625
    - Error: 0

14. **-35.5**:
    - No se puede representar (fuera del rango)

#### Resumen

| Número   | BSS Representación | Error BSS | BCS Representación | Error BCS |   |
|----------|--------------------|-----------|--------------------|-----------|---|
| 7        | 7                  | 0         | 7                  | 0         |   |
| 15.125   | 15.125             | 0         | 15.125             | 0         |   |
| 2.2      | 2.25               | 0.05      | 2.1875             | 0.0125    |   |
| 8.001    | 8                  | -0.001    | 8                  | -0.001    |   |
| 123.25   | 123.25             | 0         | No se puede representar | -       |   |
| 50.50    | 50.5               | 0         | No se puede representar | -       |   |
| 120      | 120                | 0         | No se puede representar | -       |   |
| 1.2      | 1.25               | 0.05      | 1.1875             | 0.0125    |   |
| 1.25     | 1.25               | 0         | 1.25               | 0         |   |
| 35       | 35                 | 0         | No se puede representar | -       |   |
| -1.25    | No se puede representar | -       | -1.25              | 0         |   |
| 1.0625   | 1.125              | 0.0625    | 1.0625             | 0         |   |
| -1.5625  | No se puede representar | -       | -1.5625            | 0         |   |
| -35.5    | No se puede representar | -       | No se puede representar | -       |   |

Con esto, hemos representado los números en los sistemas de punto fijo de acuerdo a las restricciones y características mencionadas en el ejercicio 3.

![image](https://github.com/user-attachments/assets/ffa7b418-cbb6-4e50-8e69-0ad721a48b5f)
![image](https://github.com/user-attachments/assets/954f9e08-73db-4515-941a-6048c6e4aa7f)

---

### Ejercicio 5

![image](https://github.com/user-attachments/assets/186fb92b-7c4e-452f-801c-abac779dda3e)

![image](https://github.com/user-attachments/assets/618bac08-61d9-446e-b15d-872564f2e22c)

#### Interpretación de las cadenas

1. **00000000**:

   - **BSS**:
     - Parte entera: 0000000 (0)
     - Parte fraccionaria: 000 (0)
     - Valor: 0
   - **BCS**:
     - Bit de signo: 0 (positivo)
     - Parte entera: 00000 (0)
     - Parte fraccionaria: 0000 (0)
     - Valor: 0

2. **01010101**:

   - **BSS**:
     - Parte entera: 0101010 (42)
     - Parte fraccionaria: 101 (0.625)
     - Valor: 42.625
   - **BCS**:
     - Bit de signo: 0 (positivo)
     - Parte entera: 10101 (21)
     - Parte fraccionaria: 0101 (0.3125)
     - Valor: 21.3125

3. **10000000**:

   - **BSS**:
     - Parte entera: 1000000 (64)
     - Parte fraccionaria: 000 (0)
     - Valor: 64
   - **BCS**:
     - Bit de signo: 1 (negativo)
     - Parte entera: 00000 (0)
     - Parte fraccionaria: 0000 (0)
     - Valor: -16

4. **11111110**:

   - **BSS**:
     - Parte entera: 1111111 (127)
     - Parte fraccionaria: 110 (0.75)
     - Valor: 127.75
   - **BCS**:
     - Bit de signo: 1 (negativo)
     - Parte entera: 11111 (31)
     - Parte fraccionaria: 1110 (0.9375)
     - Valor: -0.0625

5. **11111111**:

   - **BSS**:
     - Parte entera: 1111111 (127)
     - Parte fraccionaria: 111 (0.875)
     - Valor: 127.875
   - **BCS**:
     - Bit de signo: 1 (negativo)
     - Parte entera: 11111 (31)
     - Parte fraccionaria: 1111 (0.9375)
     - Valor: -0.0625

6. **10101010**:

   - **BSS**:
     - Parte entera: 1010101 (85)
     - Parte fraccionaria: 010 (0.25)
     - Valor: 85.25
   - **BCS**:
     - Bit de signo: 1 (negativo)
     - Parte entera: 01010 (10)
     - Parte fraccionaria: 1010 (0.625)
     - Valor: -5.375

7. **01111111**:

   - **BSS**:
     - Parte entera: 0111111 (63)
     - Parte fraccionaria: 111 (0.875)
     - Valor: 63.875
   - **BCS**:
     - Bit de signo: 0 (positivo)
     - Parte entera: 11111 (31)
     - Parte fraccionaria: 1111 (0.9375)
     - Valor: 31.9375

8. **01101101**:

   - **BSS**:
     - Parte entera: 0110110 (54)
     - Parte fraccionaria: 110 (0.75)
     - Valor: 54.75
   - **BCS**:
     - Bit de signo: 0 (positivo)
     - Parte entera: 11011 (27)
     - Parte fraccionaria: 0110 (0.375)
     - Valor: 27.375

#### Resumen de los resultados:

| Cadena     | BSS       | BCS        |
|------------|-----------|------------|
| 00000000   | 0         | 0          |
| 01010101   | 42.625    | 21.3125    |
| 10000000   | 64        | -16        |
| 11111110   | 127.75    | -0.0625    |
| 11111111   | 127.875   | -0.0625    |
| 10101010   | 85.25     | -5.375     |
| 01111111   | 63.875    | 31.9375    |
| 01101101   | 54.75     | 27.375     |

---

### Ejercicio 6

![image](https://github.com/user-attachments/assets/746d5cc9-c945-4646-9acc-19bfa23ed521)

[Link de la clase](https://www.youtube.com/watch?v=UUyhf9xzahI)
[Link de la clase](https://www.youtube.com/watch?v=ncCl3qNUMPU)

#### Ejemplo de Como deberia Ser

![image](https://github.com/user-attachments/assets/fe58b04f-7061-46e3-94dc-7f3e0550e8c1)
![image](https://github.com/user-attachments/assets/cd7fdcc3-5973-449e-bf9f-e9e9a28c837a)
![image](https://github.com/user-attachments/assets/288b308c-82e2-4e20-91c9-ce9a516b0928)


---

### Finales Echos por mi

<div align='center'>

# Final 1

</div>

<hr class="yellow">

#### Ejercicio 1

Dado un sistema en punto flotante con 6 bits de mantisa fraccionaria normalizada en BCS y exponente de 4 bits en exceso 8 (en ese orden de izq a der)

`a) ¿Cuál es el valor del minimo positivo representable en ese sistema?`

<details><summary>🧠 Respuesta</summary>

![image](https://github.com/user-attachments/assets/a1077c78-fafe-448f-b473-32b864cb8576)

</details>

`b) Representante en punto flotante el número decimal 32.25`

<details><summary>🧠 Respuesta</summary>


![image](https://github.com/user-attachments/assets/00259749-a119-4092-ab2d-1ccc45429af1)
</details>

<hr class="yellow">

#### Ejercicio 2

`a) ¿Cuáles son las 3 formas que se pueden utilizar para representar una función lógica?`

<details><summary>🧠 Respuesta</summary>

- Tablas de Verdad:
   - Una tabla de verdad es una representación tabular que muestra todas las posibles combinaciones de las entradas a una función lógica y los correspondientes resultados de salida. Cada fila de la tabla representa una combinación única de las entradas y su resultado de salida asociado.
- Diagramas de Circuitos Lógicos:
   - Los diagramas de circuitos lógicos son representaciones gráficas de una función lógica usando compuertas lógicas. Estos diagramas muestran cómo se conectan las compuertas lógicas (AND, OR, NOT, NAND, NOR, XOR, etc.) para realizar una operación lógica específica. Cada compuerta tiene un símbolo estándar y las conexiones entre ellas indican el flujo de las señales lógicas.
- Ecuaciones Booleanas:
   - Las ecuaciones booleanas usan álgebra booleana para representar una función lógica. Estas ecuaciones describen la relación entre las variables de entrada y la salida usando operadores booleanos como AND (multiplicación), OR (suma), y NOT (complemento). Las expresiones booleanas se pueden simplificar usando las leyes del álgebra booleana para optimizar el diseño del circuito.

</details>

`b) Describa el método de diseño de circuitos de circuitos lógicos combinacionales denominado "Suma de productos".`

[Video Explicativo](https://www.youtube.com/watch?v=59DOU2mzdgE)

<details><summary>🧠 Respuesta</summary>

![image](https://github.com/user-attachments/assets/338488b6-a8ec-4b33-8503-c154cd9b00af)

![image](https://github.com/user-attachments/assets/6466a38d-d59e-417d-8d6e-360f94b4c826)
![image](https://github.com/user-attachments/assets/88691704-f797-4467-81db-e6a6af4c8149)
![image](https://github.com/user-attachments/assets/8119d5f9-fff2-42f3-a1b0-121061e35054)

Resumen
- **Tablas de Verdad**: Enumeran todas las combinaciones de entradas y salidas.
- **Diagramas de Circuitos Lógicos**: Utilizan compuertas lógicas para representar visualmente la función.
- **Ecuaciones Booleanas**: Describen la función lógica usando operadores booleanos.
El método SOP garantiza que todas las combinaciones de entradas que producen una salida '1' se representen en el circuito final, asegurando la correcta implementación de la función lógica.

</details>

<hr class="yellow">

#### Ejercicio 3

`a) ¿Qué se representa con el formato de instrucción?`

<details><summary>🧠 Respuesta</summary>

El formato de instrucción es una representación específica que define cómo se codifican las instrucciones dentro de una computadora. Incluye varios componentes clave que son necesarios para que la Unidad Central de Procesamiento (CPU) pueda interpretar y ejecutar las instrucciones correctamente. Los componentes principales del formato de instrucción suelen incluir:

1. **Código de Operación (Opcode):** Este es un conjunto de bits que especifica la operación que debe realizar la CPU (por ejemplo, adición, sustracción, carga, almacenamiento, etc.). El opcode indica a la CPU qué tipo de instrucción se debe ejecutar.

2. **Operando(s):** Estos son los datos sobre los cuales se debe realizar la operación especificada por el opcode. Los operandos pueden ser:
   - **Inmediatos:** Valores constantes incluidos en la instrucción.
   - **Registros:** Direcciones de registros internos de la CPU.
   - **Direcciones de memoria:** Ubicaciones en la memoria donde se encuentran los datos.

3. **Modo de Direccionamiento:** Especifica cómo se deben interpretar los operandos. Hay varios modos de direccionamiento, como:
   - **Directo:** La dirección del operando está explícitamente dada.
   - **Indirecto:** La dirección del operando está en un registro o en otra dirección de memoria.
   - **Inmediato:** El operando está incluido en la instrucción.
   - **Indexado:** La dirección del operando es calculada sumando un desplazamiento a un registro base.

Un ejemplo simplificado de una instrucción podría ser:

```
ADD R1, R2, R3
```

Donde `ADD` es el opcode que indica una operación de suma, y `R1`, `R2`, y `R3` son los operandos que indican los registros que contienen los valores a sumar y donde se almacenará el resultado.
</details>

`b) Describa los pasos del ciclo de instrucción de un salto incondicional`

<details><summary>🧠 Respuesta</summary>

El ciclo de instrucción de un salto incondicional es el proceso que sigue la CPU para ejecutar una instrucción de salto que siempre se realiza sin condiciones. A continuación se detallan los pasos típicos de este ciclo:

1. **Fetch (Búsqueda):**
   - La CPU obtiene (fetch) la instrucción de salto desde la memoria. La dirección de la instrucción a ser buscada es indicada por el contador de programa (Program Counter, PC).

2. **Decode (Decodificación):**
   - La instrucción de salto obtenida es decodificada por la unidad de control de la CPU. Durante este paso, la CPU identifica que la instrucción es un salto incondicional y determina la dirección de salto (la dirección a la que se debe transferir el control).

3. **Execution (Ejecución):**
   - En el caso de un salto incondicional, la CPU simplemente carga la nueva dirección de la instrucción (especificada por la instrucción de salto) en el contador de programa (PC). Esto implica que la próxima instrucción a ser ejecutada no es la siguiente en secuencia, sino la instrucción ubicada en la dirección especificada por el salto.

4. **Writeback (Escritura):**
   - En un salto incondicional, generalmente no hay necesidad de una fase de escritura ya que no se está modificando el contenido de los registros o memoria, solo el valor del contador de programa (PC).

5. **Increment Program Counter (Actualización del Contador de Programa):**
   - Aunque en muchos ciclos de instrucción se incrementa el PC para apuntar a la siguiente instrucción, en un salto incondicional el PC es actualizado directamente con la dirección de salto especificada. 

#### Ejemplo de Salto Incondicional

Supongamos que la instrucción de salto es `JMP 0x0040`:

1. **Fetch:** La CPU busca la instrucción `JMP 0x0040` desde la memoria.
2. **Decode:** La instrucción es decodificada y se identifica como un salto incondicional a la dirección `0x0040`.
3. **Execution:** La CPU actualiza el contador de programa (PC) con el valor `0x0040`.
4. **Writeback:** No se realiza ninguna operación de escritura adicional.
5. **Increment Program Counter:** En este caso, el PC ya se ha actualizado con la dirección de salto, por lo que el ciclo de instrucción continuará con la nueva dirección en el siguiente ciclo.

Estos pasos aseguran que la CPU salte incondicionalmente a una nueva posición de memoria y continúe la ejecución desde allí.
</details>

<hr class="yellow">

#### Ejercicio 4

`a) ¿Cuales son los valores típicos de tiempo de acceso a los niveles de una "jerarquia de memoria"?`

<details><summary>🧠 Respuesta</summary>

La jerarquía de memoria en una computadora está diseñada para balancear la velocidad, costo y capacidad de almacenamiento. Cada nivel en la jerarquía tiene características diferentes en cuanto a estos aspectos. Aquí hay una lista de los niveles típicos de la jerarquía de memoria y sus tiempos de acceso aproximados:

1. **Registros de la CPU:**
   - Tiempo de acceso: 1 ciclo de reloj de la CPU (menos de 1 nanosegundo, típicamente en el rango de picosegundos a nanosegundos).

2. **Caché L1:**
   - Tiempo de acceso: 1-2 ciclos de reloj de la CPU (alrededor de 1-2 nanosegundos).

3. **Caché L2:**
   - Tiempo de acceso: 3-10 ciclos de reloj de la CPU (aproximadamente 3-10 nanosegundos).

4. **Caché L3:**
   - Tiempo de acceso: 10-20 ciclos de reloj de la CPU (aproximadamente 10-20 nanosegundos).

5. **Memoria Principal (RAM, DRAM):**
   - Tiempo de acceso: 50-100 nanosegundos.

6. **Almacenamiento en estado sólido (SSD):**
   - Tiempo de acceso: 50-150 microsegundos.

7. **Disco Duro (HDD):**
   - Tiempo de acceso: 10-15 milisegundos.

8. **Memoria Secundaria (Cintas, almacenamiento en la nube, etc.):**
   - Tiempo de acceso: segundos a minutos, dependiendo de la tecnología y la ubicación.
</details>

`b) ¿Porque la organización 2 1/2D de memoria semiconductora requiere 'refresco'?`

<details><summary>🧠 Respuesta</summary>

La organización 2 1/2D de memoria semiconductora se refiere a un diseño en el que la memoria está estructurada en varios niveles (capas) y utiliza una técnica que permite una mayor densidad de almacenamiento. Este diseño es común en la memoria DRAM (Dynamic Random Access Memory). La razón por la que la memoria DRAM requiere "refresco" es fundamentalmente debido a la naturaleza de su tecnología de almacenamiento.

#### Funcionamiento de la DRAM

- **Almacenamiento de Datos en Capacitores:** En la DRAM, cada bit de información se almacena en un pequeño capacitor. Un capacitor puede estar cargado (representando un bit '1') o descargado (representando un bit '0').
- **Pérdida de Carga:** Los capacitores en la DRAM no pueden retener su carga indefinidamente; la carga se fuga con el tiempo debido a la naturaleza de los materiales y las imperfecciones en los componentes electrónicos.
- **Refresco de Datos:** Para evitar la pérdida de datos, cada bit de la DRAM debe ser refrescado periódicamente. Esto implica leer el estado del capacitor y luego reescribir el mismo valor para restaurar la carga completa.

#### Organización 2 1/2D y Necesidad de Refresco

- **Alta Densidad de Almacenamiento:** La organización 2 1/2D permite almacenar una mayor cantidad de datos en un área más pequeña, lo que implica que hay más capacitores por unidad de área.
- **Más Capas y Mayor Integración:** Con más capas de almacenamiento y mayor integración, la complejidad del sistema aumenta y la tasa de fuga de los capacitores puede ser más pronunciada debido a la proximidad de los componentes y la interferencia potencial.
- **Refresco Periódico Necesario:** Debido a la fuga de carga en los capacitores, la memoria DRAM en una configuración 2 1/2D, al igual que cualquier DRAM, requiere ciclos de refresco periódicos para asegurar que los datos almacenados no se pierdan. Estos ciclos de refresco son gestionados por el controlador de memoria y ocurren cientos de veces por segundo.

En resumen, la necesidad de refresco en la organización 2 1/2D de memoria semiconductora se debe a la naturaleza inherente de la tecnología DRAM, donde los datos se almacenan en capacitores que pierden su carga con el tiempo y deben ser periódicamente recargados para mantener la integridad de los datos almacenados.

</details>

<hr class="yellow">

#### Ejercicio 5

Una imagen de pantalla de 100 cm por 50 cm posee una resolución de 100 puntos por centimetro:

`a) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen en True Color?`

<details><summary>🧠 Respuesta</summary>

1. **Dimensiones de la imagen:**
   - Ancho: 100 cm
   - Alto: 50 cm
   - Resolución: 100 puntos por centímetro

2. **Calcular la resolución total de la imagen en píxeles:**
   - Ancho en píxeles: 100 cm * 100 puntos/cm = 10,000 píxeles
   - Alto en píxeles: 50 cm * 100 puntos/cm = 5,000 píxeles
   - Total de píxeles: 10,000 píxeles * 5,000 píxeles = 50,000,000 píxeles

3. **True Color:**
   - En True Color, cada píxel se representa con 24 bits (8 bits por canal para los colores rojo, verde y azul).
   - Convertir 24 bits a bytes: 24 bits / 8 = 3 bytes por píxel

4. **Calcular la memoria total en bytes:**
   - Memoria total: 50,000,000 píxeles * 3 bytes/píxel = 150,000,000 bytes

Por lo tanto, se necesitan 150,000,000 bytes de memoria para almacenar una imagen en True Color.
</details>

`b) Cuantas imágenes podria almacenar en esa memoría si la imagen a almacenar fuera monocromatica?`

<details><summary>🧠 Respuesta</summary>

1. **Monocromática:**
   - Una imagen monocromática (en blanco y negro) se representa con 1 bit por píxel.

2. **Calcular la memoria necesaria para una imagen monocromática:**
   - Memoria necesaria por píxel: 1 bit
   - Convertir bits a bytes: 1 bit / 8 = 0.125 bytes por píxel

3. **Calcular la memoria total en bytes para una imagen monocromática:**
   - Memoria total para una imagen: 50,000,000 píxeles * 0.125 bytes/píxel = 6,250,000 bytes

4. **Calcular el número de imágenes monocromáticas que se pueden almacenar:**
   - Memoria disponible: 150,000,000 bytes (de la parte a)
   - Número de imágenes: 150,000,000 bytes / 6,250,000 bytes/imagen = 24 imágenes

Por lo tanto, en la misma cantidad de memoria, se podrían almacenar 24 imágenes monocromáticas.

#### Resumen

a) Se necesitan 150,000,000 bytes de memoria para almacenar una imagen en True Color.

b) Se podrían almacenar 24 imágenes monocromáticas en esa misma memoria.
</details>

---

<div align='center'>

# Final 2 08-22

</div>

#### Ejercicio 1

Dado un sistema en punto flotante con 6 bits de mantisa fraccionaria en BCS y exponente de 4 bits en exceso 8 (en ese orden de izq a der):

`A) ¿Cuál es el rango de representación del sistema?.`

<details><summary>🧠 Respuesta</summary>

Para determinar el rango de representación de un sistema en punto flotante, necesitamos entender cómo se representan tanto la mantisa como el exponente.

1. **Mantisa fraccionaria en BCS (Binary Coded Sign):**
   - La mantisa tiene 6 bits, con el formato 1.xxx...xx (donde x puede ser 0 o 1).
   - Esto significa que la mantisa puede representar valores en el rango de 1 a 1.11111 en binario (equivalente a 1 a (2 - 2^-6) en decimal).

2. **Exponente de 4 bits en exceso 8:**
   - El exponente se representa con 4 bits en exceso 8.
   - Esto significa que el exponente puede variar de 0000 a 1111 en binario, que en decimal representa de 0 a 15.
   - En exceso 8, el exponente real se calcula restando 8. Por lo tanto, el exponente real varía de -8 a 7.

![image](https://github.com/user-attachments/assets/41e47b50-255c-4ee8-9dd9-5f6e03c6df96)

</details>

`B) Represente en punto flotante el número decimal 322.`

<details><summary>🧠 Respuesta</summary>

Para representar el número decimal 322 en el sistema de punto flotante dado:

![image](https://github.com/user-attachments/assets/b64233cf-1970-4ca2-9614-f0c3a4138792)

Entonces, la representación en punto flotante del número 322 es:

> 0 1111 010000

Espero que esto ayude a resolver el ejercicio. Si tienes más preguntas o necesitas más aclaraciones, no dudes en decírmelo.

</details>

<hr class="yellow">

#### Ejercicio 2

`A) ¿Cuáles son las 3 formas que se pueden utilizar para representar una función lógica?`

<details><summary>🧠 Respuesta</summary>

1. **Tablas de Verdad:**
   - Una tabla de verdad es una representación tabular que muestra todas las posibles combinaciones de las entradas a una función lógica y los correspondientes resultados de salida. Cada fila de la tabla representa una combinación única de las entradas y su resultado de salida asociado.

2. **Diagramas de Circuitos Lógicos:**
   - Los diagramas de circuitos lógicos son representaciones gráficas de una función lógica utilizando compuertas lógicas. Estos diagramas muestran cómo se conectan las compuertas lógicas (AND, OR, NOT, NAND, NOR, XOR, etc.) para realizar una operación lógica específica. Cada compuerta tiene un símbolo estándar y las conexiones entre ellas indican el flujo de las señales lógicas.

3. **Ecuaciones Booleanas:**
   - Las ecuaciones booleanas usan álgebra booleana para representar una función lógica. Estas ecuaciones describen la relación entre las variables de entrada y la salida usando operadores booleanos como AND (multiplicación), OR (suma), y NOT (complemento). Las expresiones booleanas se pueden simplificar usando las leyes del álgebra booleana para optimizar el diseño del circuito.
</details>

`B) Describa el método de diseño de circuitos lógicos combinacionales denominado "Suma de productos".`

<details><summary>🧠 Respuesta</summary>

El método de "Suma de productos" (SOP) es una técnica estándar en el diseño de circuitos lógicos combinacionales. Consiste en representar una función lógica como una suma (OR) de productos (AND) de variables de entrada. Aquí están los pasos generales para diseñar un circuito utilizando el método SOP:

![image](https://github.com/user-attachments/assets/13980831-15a6-46dd-8a91-c7d7f7561df9)

#### Ejemplo

![image](https://github.com/user-attachments/assets/9e5b7876-a599-4507-899d-b650e7791986)
![image](https://github.com/user-attachments/assets/8f43452a-a5d7-4111-a2de-229424b38dae)
</details>

<hr class="yellow">

#### Ejercicio 3

`A) ¿Qué es el ciclo de instrucción?`

<details><summary>🧠 Respuesta</summary>

El ciclo de instrucción es el proceso que sigue una CPU para ejecutar una instrucción de un programa almacenado en la memoria. Este ciclo es repetitivo y se compone de varios pasos que incluyen la búsqueda (fetch), decodificación (decode), ejecución (execute) y escritura (write back) de las instrucciones. Cada ciclo de instrucción permite que la CPU lea una instrucción de la memoria, la interprete y realice la operación correspondiente.

El ciclo de instrucción se puede descomponer en las siguientes fases:

1. **Fetch (Búsqueda):**
   - La CPU obtiene la instrucción desde la memoria. La dirección de la instrucción a ser buscada es indicada por el contador de programa (PC).

2. **Decode (Decodificación):**
   - La instrucción buscada es decodificada por la unidad de control de la CPU para determinar qué operación debe realizarse y qué operandos son necesarios.

3. **Execute (Ejecución):**
   - La CPU realiza la operación especificada por la instrucción utilizando los operandos apropiados. Esto puede incluir operaciones aritméticas, lógicas, de control, etc.

4. **Write Back (Escritura):**
   - Los resultados de la operación se almacenan en la memoria o en los registros de la CPU según lo especificado por la instrucción.

5. **Increment Program Counter (Actualización del Contador de Programa):**
   - El contador de programa (PC) se incrementa para apuntar a la siguiente instrucción a ser ejecutada en el ciclo siguiente.
</details>

`B) Describa los pasos del ciclo de instrucción de una operación aritmética.`

<details><summary>🧠 Respuesta</summary>

Veamos los pasos del ciclo de instrucción para una operación aritmética, como una suma. Supongamos que tenemos una instrucción de suma `ADD R1, R2, R3`, donde `R1`, `R2`, y `R3` son registros de la CPU.

1. **Fetch (Búsqueda):**
   - La CPU busca la instrucción `ADD R1, R2, R3` desde la memoria. La dirección de la instrucción a ser buscada es indicada por el contador de programa (PC).

2. **Decode (Decodificación):**
   - La unidad de control decodifica la instrucción `ADD R1, R2, R3`. Se determina que la operación a realizar es una suma y que los operandos son los registros `R2` y `R3`, con el resultado que se almacenará en el registro `R1`.

3. **Fetch Operands (Búsqueda de Operandos):**
   - La CPU busca los valores almacenados en los registros `R2` y `R3`.

4. **Execute (Ejecución):**
   - La unidad aritmético-lógica (ALU) de la CPU realiza la operación de suma utilizando los valores de `R2` y `R3`. Por ejemplo, si `R2` tiene el valor 5 y `R3` tiene el valor 10, la ALU suma estos valores para obtener el resultado 15.

5. **Write Back (Escritura):**
   - El resultado de la operación (15) se almacena en el registro `R1`.

6. **Increment Program Counter (Actualización del Contador de Programa):**
   - El contador de programa (PC) se incrementa para apuntar a la siguiente instrucción a ser ejecutada.

#### Ejemplo Visual del Ciclo de Instrucción de una Suma

1. **Fetch:**
   - `PC -> Memory[PC] -> Instruction Register (IR)` 
   - Instrucción: `ADD R1, R2, R3`

2. **Decode:**
   - `IR -> Control Unit`
   - Control Unit decodifica `ADD` y determina los operandos `R2`, `R3` y el destino `R1`.

3. **Fetch Operands:**
   - `R2 -> Operand 1`
   - `R3 -> Operand 2`

4. **Execute:**
   - `ALU: Operand 1 + Operand 2`
   - Resultado: 15

5. **Write Back:**
   - `Result (15) -> R1`

6. **Increment PC:**
   - `PC + 1 -> PC`

Este ciclo se repite para cada instrucción del programa, permitiendo que la CPU ejecute secuencialmente todas las instrucciones almacenadas en la memoria.

Si necesitas más detalles o ejemplos específicos, no dudes en decírmelo.
</details>

<hr class="yellow">


#### Ejercicio 4

`A) ¿Cómo está compuesta una "jerarquía de memoria"?`

<details><summary>🧠 Respuesta</summary>

La jerarquía de memoria en una computadora está organizada en varios niveles que varían en velocidad, tamaño y costo. Cada nivel está diseñado para optimizar el rendimiento general del sistema al balancear estos factores. La jerarquía de memoria típica incluye los siguientes niveles, desde el más rápido y costoso hasta el más lento y económico:

1. **Registros de la CPU:**
   - Los registros son la forma más rápida de memoria dentro del procesador. Son muy pequeños y se utilizan para almacenar datos temporales que la CPU necesita de inmediato.

2. **Caché:**
   - **Caché L1:** Es la más rápida y está directamente integrada en el núcleo del procesador. Tiene una capacidad pequeña, típicamente entre 32KB y 256KB.
   - **Caché L2:** También está integrada en el procesador pero es más grande y ligeramente más lenta que la L1, con capacidades típicas entre 256KB y 2MB.
   - **Caché L3:** Puede estar compartida entre varios núcleos del procesador. Es más grande y más lenta que las cachés L1 y L2, con capacidades típicas entre 2MB y 64MB.

3. **Memoria Principal (RAM):**
   - La memoria RAM (DRAM) es más lenta que la caché, pero tiene una capacidad mucho mayor, típicamente en el rango de gigabytes (GB). Se utiliza para almacenar datos y programas que están siendo utilizados activamente por el sistema.

4. **Almacenamiento Secundario:**
   - **Discos Duros (HDD) y Unidades de Estado Sólido (SSD):** Estos dispositivos de almacenamiento son mucho más lentos que la memoria RAM, pero tienen una capacidad mucho mayor, en el rango de terabytes (TB). Se utilizan para almacenar datos y programas a largo plazo.
   - **Memoria Externa (cintas, almacenamiento en la nube, etc.):** Estos son los medios de almacenamiento más lentos pero también los más grandes y económicos. Se utilizan para copias de seguridad y almacenamiento de archivos que no se necesitan con frecuencia.
</details>

`B) ¿Porqué la organización 2D de memoria semicondutora NO requiere 'refresco'? `

<details><summary>🧠 Respuesta</summary>

La organización 2D de memoria semiconductora generalmente se refiere a la memoria **SRAM (Static Random Access Memory)**, en contraste con la memoria **DRAM (Dynamic Random Access Memory)**, que suele utilizar una organización más compleja (a veces denominada 2.5D o 3D debido a las múltiples capas de almacenamiento).

**SRAM (2D) vs DRAM (2.5D o 3D):**

1. **SRAM:**
   - **Celdas de Memoria:** Las celdas de memoria SRAM están compuestas por flip-flops, que son circuitos de almacenamiento estático formados por transistores.
   - **Estabilidad:** Una vez que los flip-flops almacenan un bit de información (0 o 1), mantienen su estado sin necesidad de ser refrescados periódicamente mientras haya alimentación eléctrica.
   - **Velocidad y Consumo:** La SRAM es muy rápida y consume menos energía en estado activo, pero es más costosa y tiene menor densidad de almacenamiento en comparación con la DRAM.

2. **DRAM:**
   - **Celdas de Memoria:** Las celdas de memoria DRAM están formadas por un transistor y un capacitor. El capacitor almacena la carga eléctrica que representa el bit de información.
   - **Pérdida de Carga:** Los capacitores pierden su carga con el tiempo debido a la fuga eléctrica, lo que significa que la información almacenada en una celda DRAM se degrada rápidamente.
   - **Refresco Necesario:** Para evitar la pérdida de datos, cada bit en la DRAM debe ser refrescado periódicamente, lo que implica leer y reescribir el contenido del capacitor. Este proceso de refresco consume tiempo y energía adicionales.

**Conclusión:**

- **SRAM (Organización 2D):** No requiere refresco porque utiliza flip-flops que mantienen su estado de manera estable mientras haya energía. La organización 2D en SRAM es suficiente para mantener los datos sin necesidad de refresco periódico.
- **DRAM (Organización 2.5D o 3D):** Requiere refresco debido a la naturaleza de los capacitores que pierden carga con el tiempo. La organización 2.5D o 3D en DRAM permite una mayor densidad de almacenamiento, pero a costa de la necesidad de refrescar los datos periódicamente.

Por lo tanto, la organización 2D de memoria semiconductora (SRAM) no requiere refresco porque las celdas de memoria estática (flip-flops) mantienen su estado sin necesidad de intervención adicional.
</details>

<hr class="yellow">

#### Ejercicio 5

Una imagen en una pantalla de 100 cm por 50 cm posee una resolución de 100 puntos por centímetro:

`A) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen en True Color?`

<details><summary>🧠 Respuesta</summary>

Para calcular cuántos bytes de memoria se necesitan para almacenar una imagen en True Color, seguimos estos pasos:

1. **Dimensiones de la imagen:**
   - Ancho: 100 cm
   - Alto: 50 cm
   - Resolución: 100 puntos por centímetro

2. **Calcular la resolución total de la imagen en píxeles:**
   - Ancho en píxeles: 100 cm * 100 puntos/cm = 10,000 píxeles
   - Alto en píxeles: 50 cm * 100 puntos/cm = 5,000 píxeles
   - Total de píxeles: 10,000 píxeles * 5,000 píxeles = 50,000,000 píxeles

3. **True Color:**
   - En True Color, cada píxel se representa con 24 bits (8 bits por canal para los colores rojo, verde y azul).
   - Convertir 24 bits a bytes: 24 bits / 8 = 3 bytes por píxel

4. **Calcular la memoria total en bytes:**
   - Memoria total: 50,000,000 píxeles * 3 bytes/píxel = 150,000,000 bytes

Por lo tanto, se necesitan 150,000,000 bytes de memoria para almacenar una imagen en True Color.
</details>

`B) ¿Cuántas imágenes podría almacenar en esa memoria si la imagen a almacenar fuera 'monocromática'?`

<details><summary>🧠 Respuesta</summary>

Para calcular cuántas imágenes monocromáticas se pueden almacenar en la misma cantidad de memoria, seguimos estos pasos:

1. **Monocromática:**
   - Una imagen monocromática (en blanco y negro) se representa con 1 bit por píxel.

2. **Calcular la memoria necesaria para una imagen monocromática:**
   - Memoria necesaria por píxel: 1 bit
   - Convertir bits a bytes: 1 bit / 8 = 0.125 bytes por píxel

3. **Calcular la memoria total en bytes para una imagen monocromática:**
   - Memoria total para una imagen: 50,000,000 píxeles * 0.125 bytes/píxel = 6,250,000 bytes

4. **Calcular el número de imágenes monocromáticas que se pueden almacenar:**
   - Memoria disponible: 150,000,000 bytes (de la parte a)
   - Número de imágenes: 150,000,000 bytes / 6,250,000 bytes/imagen = 24 imágenes

Por lo tanto, en la misma cantidad de memoria, se podrían almacenar 24 imágenes monocromáticas.

#### Resumen

A) Se necesitan 150,000,000 bytes de memoria para almacenar una imagen en True Color.

B) Se podrían almacenar 24 imágenes monocromáticas en esa misma memoria.
</details>


---

<div align='center'>

# Final 3 sin fecha

</div>

#### Ejercicio 1

4186H (en hexadecimal) punto flotante 8 bits mantisa BCS y bit implícito y exponente 8 bits en exceso 128 (de izq a der)

`a) Determine el valor decimal representado`

<details><summary>🧠 Respuesta</summary>

![image](https://github.com/user-attachments/assets/690377fd-5232-484b-b512-adab79f90550)
![image](https://github.com/user-attachments/assets/3d6ad683-fbbe-4cb9-9eb5-bb23818a99a0)
</details>

`b) Calcule el error absoluto máximo`

<details><summary>🧠 Respuesta</summary>

![image](https://github.com/user-attachments/assets/757bff0f-a6e6-4239-950d-b5c09776dad9)
</details>

<hr class="yellow">

#### Ejercicio 2

`¿Qué es una puerta lógica?`

<details><summary>🧠 Respuesta</summary>

![image](https://github.com/user-attachments/assets/f8d9ad37-e3ae-4521-ae21-d8d0098d0f14)
</details>

`Describa el circuito lógico secuencial "Biestable RS".`

<details><summary>🧠 Respuesta</summary>

![image](https://github.com/user-attachments/assets/df5b5e43-75b0-4a29-a1a1-1c0fe78e2116)
</details>

`Realice la tabla de comportamiento y un gráfico de interconexión de puertas lógicas que lo represente`

<details><summary>🧠 Respuesta</summary>

![image](https://github.com/user-attachments/assets/d430bed7-c12d-45fe-b0bb-f0db69c485ad)
![image](https://github.com/user-attachments/assets/f7f377f4-9c2e-4eeb-8daa-9c5afe3d5923)
![image](https://github.com/user-attachments/assets/cb8881e4-73ed-4abc-b695-1be4ec8fcf78)
</details>

<hr class="yellow">

#### Ejercicio 3

`¿Qué es un ciclo de instrucción?`

<details><summary>🧠 Respuesta</summary>

El ciclo de instrucción es el proceso completo que sigue una CPU para ejecutar una instrucción de un programa almacenado en la memoria. Este ciclo es repetitivo y consta de varias fases, cada una de las cuales realiza una tarea específica para procesar y ejecutar una instrucción. Las fases del ciclo de instrucción son:

1. **Fetch (Búsqueda):**
   - La CPU obtiene la instrucción desde la memoria. La dirección de la instrucción a ser buscada es indicada por el contador de programa (PC).

2. **Decode (Decodificación):**
   - La instrucción buscada es decodificada por la unidad de control de la CPU. En esta fase, se determina qué operación debe realizarse y cuáles son los operandos necesarios.

3. **Execute (Ejecución):**
   - La CPU realiza la operación especificada por la instrucción utilizando los operandos apropiados. Esto puede incluir operaciones aritméticas, lógicas, de control, etc.

4. **Write Back (Escritura):**
   - Los resultados de la operación se almacenan en la memoria o en los registros de la CPU según lo especificado por la instrucción.

5. **Increment Program Counter (Actualización del Contador de Programa):**
   - El contador de programa (PC) se incrementa para apuntar a la siguiente instrucción a ser ejecutada en el ciclo siguiente.

Estas fases se repiten continuamente mientras el programa está en ejecución, permitiendo que la CPU ejecute secuencialmente todas las instrucciones almacenadas en la memoria.
</details>

`Describa el funcionamiento del modo de direccionamiento indirecto vía registro con desplazamiento`

<details><summary>🧠 Respuesta</summary>

El modo de direccionamiento indirecto vía registro con desplazamiento es una técnica utilizada en la arquitectura de computadoras para acceder a datos en la memoria. Este modo de direccionamiento combina el uso de un registro base, un desplazamiento y la memoria principal para calcular la dirección efectiva del operando. Aquí está el funcionamiento detallado:

1. **Registro Base:**
   - Un registro en la CPU (por ejemplo, el registro base o el registro índice) contiene una dirección base. Este registro se utiliza como punto de partida para calcular la dirección efectiva del operando.

2. **Desplazamiento:**
   - Un valor constante (desplazamiento) se suma al valor contenido en el registro base para obtener la dirección efectiva. El desplazamiento puede ser positivo o negativo y se especifica en la instrucción.

3. **Dirección Indirecta:**
   - La dirección efectiva calculada en el paso anterior apunta a una ubicación en la memoria. En esta ubicación de memoria se encuentra la dirección real del operando.

4. **Acceso al Operando:**
   - La CPU utiliza la dirección real obtenida en el paso anterior para acceder al operando en la memoria.

#### Ejemplo de Funcionamiento

Supongamos que tenemos la siguiente instrucción en ensamblador:
```
LOAD R1, [R2 + 10]
```
Donde `LOAD` es la operación que carga un valor en el registro `R1` desde la memoria.

1. **Registro Base (`R2`):**
   - El registro `R2` contiene la dirección base. Supongamos que `R2` tiene el valor `1000`.

2. **Desplazamiento (`10`):**
   - El desplazamiento es `10`.

3. **Calcular la Dirección Efectiva:**
   - Dirección efectiva = Valor de `R2` + Desplazamiento = `1000 + 10 = 1010`.

4. **Dirección Indirecta:**
   - La dirección efectiva `1010` apunta a una ubicación en la memoria. Supongamos que en la dirección `1010` en la memoria se encuentra el valor `2000`, que es la dirección real del operando.

5. **Acceso al Operando:**
   - La CPU utiliza la dirección real `2000` para acceder al operando en la memoria. Supongamos que en la dirección `2000` se encuentra el valor `50`.

6. **Cargar el Operando:**
   - El valor `50` se carga en el registro `R1`.

#### Tabla de Ejemplo

| Registro | Valor          |
|----------|----------------|
| R2       | 1000           |
| Mem[1010]| 2000 (Dirección real) |
| Mem[2000]| 50 (Valor del operando) |
| R1       | 50 (Después de LOAD)    |

#### Resumen

- **Ciclo de Instrucción:** Es el proceso completo que sigue una CPU para buscar, decodificar, ejecutar y escribir una instrucción de un programa.
- **Modo de Direccionamiento Indirecto Vía Registro con Desplazamiento:** Es un método que utiliza un registro base y un desplazamiento para calcular una dirección efectiva, la cual apunta a una dirección en memoria donde se encuentra la dirección real del operando. Este modo es útil para acceder a estructuras de datos como arreglos y tablas de manera eficiente.
</details>

<hr class="yellow">

#### Ejercicio 4

a) `Describa las características principales de la organización 2D de memoria semiconductora`

<details><summary>🧠 Respuesta</summary>

La organización 2D de memoria semiconductora se refiere a la disposición de celdas de memoria en una configuración bidimensional (filas y columnas) sobre un chip de silicio. Esta disposición es común en tecnologías de memoria como SRAM (Static Random Access Memory) y DRAM (Dynamic Random Access Memory). Las características principales son:

1. **Disposición en Matriz:**
   - Las celdas de memoria están organizadas en una matriz de filas y columnas, donde cada celda se encuentra en la intersección de una fila y una columna.

2. **Acceso mediante Decodificadores:**
   - La selección de una celda específica se realiza mediante decodificadores de fila y columna. El decodificador de fila selecciona una fila específica y el decodificador de columna selecciona una columna específica.

3. **Tipos de Memoria:**
   - **SRAM:** Utiliza celdas de memoria basadas en flip-flops (generalmente 6 transistores por celda), lo que permite un acceso muy rápido y sin necesidad de refresco.
   - **DRAM:** Utiliza celdas de memoria basadas en un transistor y un capacitor. Requiere refresco periódico para mantener la carga en el capacitor y, por lo tanto, los datos.

4. **Velocidad y Consumo de Energía:**
   - **SRAM:** Es más rápida y consume menos energía durante la operación activa, pero ocupa más espacio y es más costosa de fabricar debido al mayor número de transistores por celda.
   - **DRAM:** Tiene una mayor densidad de almacenamiento y es más económica, pero es más lenta y requiere energía adicional para los ciclos de refresco.

5. **Aplicaciones:**
   - **SRAM:** Utilizada en cachés de CPU y registros internos debido a su alta velocidad.
   - **DRAM:** Utilizada como memoria principal (RAM) en computadoras debido a su alta densidad de almacenamiento y menor costo.
</details>

b) `Realice el esquema del chip con esta organización`

<details><summary>🧠 Respuesta</summary>

Un esquema simplificado de un chip de memoria con organización 2D podría verse así:

```plaintext
       Columna 0  Columna 1  Columna 2  ...  Columna N
       ---------------------------------------------
Fila 0 |  Celda  |  Celda  |  Celda  |  ...  |  Celda  |
       ---------------------------------------------
Fila 1 |  Celda  |  Celda  |  Celda  |  ...  |  Celda  |
       ---------------------------------------------
Fila 2 |  Celda  |  Celda  |  Celda  |  ...  |  Celda  |
       ---------------------------------------------
...    |  ...    |  ...    |  ...    |  ...  |  ...    |
       ---------------------------------------------
Fila M |  Celda  |  Celda  |  Celda  |  ...  |  Celda  |
       ---------------------------------------------
```

Cada "Celda" representa una celda de memoria que puede almacenar un bit de información (0 o 1).
</details>

c) `Mencione valores típicos de capacidad de almacenamiento y de tiempo de acceso`

<details><summary>🧠 Respuesta</summary>

1. **Capacidad de Almacenamiento:**
   - **SRAM:**
     - Capacidades típicas varían desde unos pocos kilobytes (KB) hasta varios megabytes (MB). Ejemplos incluyen 32KB a 64MB.
   - **DRAM:**
     - Capacidades típicas varían desde 1 gigabyte (GB) hasta varios terabytes (TB). Ejemplos comunes son 4GB, 8GB, 16GB, y 32GB.

2. **Tiempo de Acceso:**
   - **SRAM:**
     - Muy rápida, con tiempos de acceso típicos en el rango de 1 a 10 nanosegundos (ns).
   - **DRAM:**
     - Más lenta que SRAM, con tiempos de acceso típicos en el rango de 50 a 100 nanosegundos (ns). Las memorias DRAM modernas (como DDR4) pueden tener latencias menores, pero aún así son más lentas que las SRAM.

#### Resumen

- **Organización 2D de Memoria Semiconductora:**
  - Disposición en matriz de celdas de memoria.
  - Selección de fila y columna mediante decodificadores.
  - Diferentes tecnologías como SRAM y DRAM con características específicas.

- **Esquema del Chip:**
  - Disposición de filas y columnas con celdas de memoria en cada intersección.

- **Valores Típicos:**
  - Capacidades de almacenamiento: Desde KB a MB para SRAM, y GB a TB para DRAM.
  - Tiempos de acceso: 1-10 ns para SRAM, y 50-100 ns para DRAM.
</details>

<hr class="yellow">

#### Ejercicio 5

Un video musical monocromático de youtube dura 200 seg

`a. Calcule cuántos bytes de memoria se necesitan para almacenar el video completo si cada imagen es de 800 x 500 px`

<details><summary>🧠 Respuesta</summary>
</details>

`b. ¿Cuál debería ser la velocidad de transferencia (en bytes/seg) si la imagen debe ser cambiada 25 veces en 1 seg?`

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 4 11-22

</div>

#### Ejercicio 1

Dado un sistema en punto flotante con 5 bits de mantisa en BCS con bit implicito y exponente de 5 bits en exceso 16 (en ese orden de izq a der):

`A) ¿Cuál es el valor decimal del mínimo positivo representable por el sistema?`

<details><summary>🧠 Respuesta</summary>
</details>

`B) Represente en el sistema de punto flotante dado el número decimal 2,625`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

`¿Cuáles son las 3 funciones lógicas elementales y cómo las puede representar?`

<details><summary>🧠 Respuesta</summary>
</details>

`b) Describa el método de diseño de circuitos lógicos combinacionales denominado "Suma de productos"`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

`A) ¿Cómo es el formato de instrucción de una máquina de 3 direcciones?`

`b) Describa la diferencia en los pasos del ciclo de instrucción de una instrucción SUB y una CMP`

<hr class="yellow">

#### Ejercicio 4

`A) ¿Cuáles son los principios que rigen el funcionamiento de una "jerarquía de memoría"?`

<details><summary>🧠 Respuesta</summary>
</details>

`b) ¿Porqué la organización 2 1/2D de memoria semiconductora utiliza 2 decodificadores?`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

Una imagen en una pantalla de 100cm por 50cm posee una resolución de 100 puntos por centímetro:

`a) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen en True Color?`

<details><summary>🧠 Respuesta</summary>
</details>

`b) ¿Cuántas imágenes "monocromo" se podrían almacenar en esa memoria?`

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 5 Mesa febrero 2º llamado | 21/02/2022

</div>

#### Ejercicio 1

Sistema de punto flotante 7 bits mantisa BCS y bit implícito y 8 bits exponente en exceso /128 (en ese orden de izq a der)

`a) Representar tu número de alumno (sin el nro después de la barra "/6").`

<details><summary>🧠 Respuesta</summary>
</details>

`b) Calcular error absoluto.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

`a) Las 3 formas que se pueden utilizar para representar una función lógica.`

<details><summary>🧠 Respuesta</summary>
</details>

`b) Suma de productos.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

Elementos que debe poseer una instrucción.

`b) Modo de direccionamiento utilizado en las instrucciones de salto condicional.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

`a) ¿Qué función debe cumplir un "punto de memoria"?`

<details><summary>🧠 Respuesta</summary>
</details>

`b) ¿Por qué la organización 2/1D requiere refresco?`

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 6 FEBRERO 2022 1ERA FECHA

</div>

#### Ejercicio 1

Dado el número A188 en BCH donde 8 bits representan la mantisa en BCS con bit implícito y 8 bits para exponente en exceso 128.

`a) Calcular el valor en decimal.`

<details><summary>🧠 Respuesta</summary>
</details>

`b) Calcular el error absoluto máximo.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

`a) ¿Qué es un circuito combinatorio?`

<details><summary>🧠 Respuesta</summary>
</details>

`b) Explicar que es "sumador completo". Realizar tabla de verdad y gráfico.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

`a) MSX88 representa una máquina de 2 direcciones?`

<details><summary>🧠 Respuesta</summary>
</details>

`b) Explicar máquina de 1 dirección.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

`a) Dar 3 características principales de la organización de memoria semiconductor (2^1/2 D)`

<details><summary>🧠 Respuesta</summary>
</details>

`b) Realizar una tabla con valores típicos de capacidad de almacenamiento y tiempo de acceso de cada nivel de jerarquía de memoria.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

Dado un vídeo monocromático de 15 segundos donde cada imagen tiene 500*800 pixeles:

`a) Cuantos bytes se necesitan por cada imagen?`

<details><summary>🧠 Respuesta</summary>
</details>

`b) Que velocidad de transferencia a periférico debe haber si cada imagen debe ser cambiada 25 veces en 1 segundo?`

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 7 Organización de Computadoras 08-23

</div>

#### Ejercicio 1

Dado un sistema en punto flotante con 6 bits de mantisa fraccionaria en BCS y exponente de 4 bits en exceso 8 (en ese orden de izq a der):

`A) ¿Cuál es el rango de representación del sistema?`

<details><summary>🧠 Respuesta</summary>
</details>

`B) Represente en punto flotante el número decimal 32,2.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

`A) ¿Cuáles son las 3 formas que se pueden utilizar para representar una función lógica?`

<details><summary>🧠 Respuesta</summary>
</details>

`B) Describa el funcionamiento del circuito lógico secuencial denominado 'D'.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

`A) ¿Qué es un ciclo de instrucción?`

<details><summary>🧠 Respuesta</summary>
</details>

`B) Describa los pasos del ciclo de instrucción de una operación aritmética.`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

`A) ¿Cómo está compuesta una "jerarquía de memoria"?`

<details><summary>🧠 Respuesta</summary>
</details>

`B) ¿Por qué la organización 2D de memoria semiconductora NO requiere 'refresco'?`

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

Una imagen en una pantalla de 100 cm por 50 cm posee una resolución de 100 puntos por centímetro:
   
`A) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen en True Color?`

<details><summary>🧠 Respuesta</summary>
</details>

B) ¿Cuántas imágenes podría almacenar en esa memoria si la imagen a almacenar fuera 'monocromática'?

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 8 - Abril 2023 (10/04)

</div>

#### Ejercicio 1

a) Características de coma flotante IEEE 754 simple precisión.

<details><summary>🧠 Respuesta</summary>
</details>

b) Representar el número 1 en el modelo del inciso a).

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

a) Explicar qué es la suma de productos.

<details><summary>🧠 Respuesta</summary>
</details>

b) Usar suma de productos para representar una función de cuatro entradas (A,B,C,D) cuya salida de 1 cuando dos de las entradas sea cero (cabeza ecuación gráfico).

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

a) Explicar el modo de direccionamiento indirecto por registro con desplazamiento.

<details><summary>🧠 Respuesta</summary>
</details>

b) Dar ejemplos de instrucciones de sus variantes.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

a) Explicar los principios de la jerarquía de memoria.

<details><summary>🧠 Respuesta</summary>
</details>

b) Describir la organización 2^(1/2) D y realizar el gráfico para esa memoria con capacidad de almacenamiento de 1024 bits.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

a) Describir el disco rígido teniendo en cuenta su comunicación con la CPU, el formato de almacenamiento, cantidad de información, etc.

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 9 Organización de Computadoras 23-Feb1

</div>

#### Ejercicio 1

Dada la representación A188H (en BCH) de un sistema en punto flotante con 8 bits de mantisa en BCS y bit implícito y exponente de 8 bits en exceso 128 (en ese orden de izq a der):

A) Determine el valor decimal representado en ese sistema.

<details><summary>🧠 Respuesta</summary>
</details>

B) Calcule el Error Absoluto Máximo de esa representación.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

A) ¿Qué es un circuito combinatorio?

<details><summary>🧠 Respuesta</summary>
</details>

B) Describa el circuito lógico denominado “sumador completo”. Realice la tabla de verdad y un gráfico de interconexión de puertas lógicas que lo represente.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

A) ¿El MSX88 simula una máquina de 2 direcciones? Justifique.

<details><summary>🧠 Respuesta</summary>
</details>

B) Describa el formato de instrucción de una máquina de 1 dirección.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

A) Describa 3 características fundamentales de un ‘chip’ de memoria semiconductor para una organización 2 1/2D

<details><summary>🧠 Respuesta</summary>
</details>

B) En una tabla, escriba los valores típicos de capacidad de almacenamiento y tiempo de acceso de cada nivel de una jerarquía de memoria.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

Un video monocromático de Tik-Tok dura 15 segundos y cada imagen es de 500 por 800 píxeles.
   
A) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen del video?

<details><summary>🧠 Respuesta</summary>
</details>

B) ¿Cuál debe ser la velocidad de transferencia a periférico (en bytes/segundo) si para 'percibir movimiento' cada imagen 'visible' debe ser cambiada 25 veces en un segundo?

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 10 Feb20b

</div>

#### Ejercicio 1

¿Qué define el Teorema Fundamental de la Numeración?.

<details><summary>🧠 Respuesta</summary>
</details>

Determine el rango de representación y resoluciones de:
   
a) Un sistema en Punto Fijo en BCS con 4 bits para parte entera y 4 bits para parte fraccionaria

<details><summary>🧠 Respuesta</summary>
</details>

b) Un sistema en Punto Flotante con 4 bits para mantisa con bit implícito en BCS y 4 bits para exponente en BCS

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

a) Describa las diferencias entre un circuito combinatorio y uno secuencial.

<details><summary>🧠 Respuesta</summary>
</details>

b) Describa el método ‘Suma de Productos’ para determinar la ecuación algebraica de un circuito lógico.

<details><summary>🧠 Respuesta</summary>
</details>

c) Ejemplifique el uso de SOP con la función OR Exclusiva.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

Describa las características que tienen las máquinas que ejecutan instrucciones con 1 dirección. 

<details><summary>🧠 Respuesta</summary>
</details>

Suponiendo que se poseen las instrucciones adecuadas y que varA, varB, varC y varD son las direcciones de memoria donde se almacenan los valores A, B, C y D respectivamente:

a) Resuelva mediante programa en pseudo-assembly la ecuación D = (A-B)*(C+A) para la máquina de una dirección.

<details><summary>🧠 Respuesta</summary>
</details>

b) Determine la cantidad de instrucciones y la de accesos a memoria (de instrucciones y de datos) requeridos por la solución programada.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

¿Cuáles son los principios que sustentan el funcionamiento de la jerarquía de un sistema de memoria?.

<details><summary>🧠 Respuesta</summary>
</details>

En una tabla, escriba valores típicos de capacidad de almacenamiento en bytes, tiempo de acceso y tecnología de soporte de cada nivel.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

a) ¿Qué son y para qué sirven los modos de direccionamiento?.

<details><summary>🧠 Respuesta</summary>
</details>

b) Explique el funcionamiento que tendrán las instrucciones en assembly JMP Dir y POP AX. La CPU es la del MSX88, Dir es una dirección de 16 bit y AX un registro de 16 bits.

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 11 Octubre del 2023

</div>

#### Ejercicio 1

a- Describa características de IEEE 754 simple precisión.

<details><summary>🧠 Respuesta</summary>
</details>

b- Representar el valor hexadecimal 62000000H en el sistema.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

a- ¿Que es un circuito lógico combinatorial?

<details><summary>🧠 Respuesta</summary>
</details>

b- Describa suma de productos e implemente la función XOR utilizando el mismo.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

a- Describa el funcionamiento de las instrucciones de Mov. de datos.

<details><summary>🧠 Respuesta</summary>
</details>

b- ¿Qué modos de direccionamiento pueden ser utilizados en ellos?

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

a- ¿Cuáles son los principios que permiten el funcionamiento de un sistema de memoria basado en jerarquía?

<details><summary>🧠 Respuesta</summary>
</details>

b- Describa y realice un esquema de organización 2D y con capacidad de almacenamiento de 1024 palabras de 16 bits

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

a- Describa características de un disco rígido. Mencione medio de almacenamiento, tiempo de acceso, formato y capacidad, etc.

<details><summary>🧠 Respuesta</summary>
</details>

b- ¿Qué son los RAID?

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 12 23Dicb

</div>

#### Ejercicio 1

a) Describa las características del sistema de representación en coma flotante estándar IEEE 754 de simple precisión.

<details><summary>🧠 Respuesta</summary>
</details>

b) Represente el número decimal 1 en el formato de la parte a).

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

a) Describa el método de implementación de funciones booleanas denominado SoP.

<details><summary>🧠 Respuesta</summary>
</details>

b) Use el método descrito en a) para la función lógica S con 4 entradas (A, B, C, D) cuya salida es '1' cuando dos de las entradas están en '1' (Tabla-Ecuación-Gráfico).

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

a) Describa el modo de direccionamiento indirecto por Registro con desplazamiento.

<details><summary>🧠 Respuesta</summary>
</details>

b) Use el método descrito en a) para el modo de direccionamiento Sim) que usen las variantes de la parte a).

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

a) Describa el funcionamiento del proceso (para MSX88 o Viento) de un sistema de memoria basado en jerarquía?

<details><summary>🧠 Respuesta</summary>
</details>

b) ¿Cuáles son los principios que permiten el funcionamiento 2 ½ D con capacidad de almacenamiento de 1024 bits.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

Describa las características del almacenamiento externo conocido como disco rígido. Considerar el tipo de comunicación entre CPU y el periférico, el formato de almacenamiento, cantidad de información almacenada etc..

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 13 FEBRERO 2022 1ERA FECHA

</div>

#### Ejercicio 1

Dado el numero A188 en BCH donde 8 bits representan la mantisa en BCS con bit implícito y 8 bits para exponente en exceso 128.

a) Calcular el valor en decimal.

<details><summary>🧠 Respuesta</summary>
</details>

b) Calcular el error absoluto máximo.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

a) ¿Que es un circuito combinatorio?

<details><summary>🧠 Respuesta</summary>
</details>

b) Explicar que es "sumador completo". Realizar tabla de verdad y gráfico.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

a) MSX88 representa una maquina de 2 direcciones?

<details><summary>🧠 Respuesta</summary>
</details>

b) Explicar maquina de 1 direccion.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

a) Dar 3 características principales de la organización de memoria semiconductor (2^1/2 D)

<details><summary>🧠 Respuesta</summary>
</details>

b) Realizar una tabla con valores típicos de capacidad de almacenamiento y tiempo de acceso de cada nivel de jerarquía de memoria.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

Dado un video monocromático de 15 segundos donde cada imagen tiene 500*800 píxeles

a) ¿Cuantos bytes se necesitan por cada imagen?

<details><summary>🧠 Respuesta</summary>
</details>

b) Que velocidad de transferencia a periférico debe haber si cada imagen debe ser cambiada 25 veces en 1 segundo?

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 14 08-23

</div>

#### Ejercicio 1

Dado un sistema en punto flotante con 6 bits de mantisa fraccionaria en BCS y exponente de 4 bits en exceso 8 (en ese orden de izq a der):

A) ¿Cuál es el rango de representación del sistema?

<details><summary>🧠 Respuesta</summary>
</details>

B) Represente en el sistema de punto flotante dado el número decimal 32,2.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 2

A) ¿Cuáles son las 3 formas que se pueden utilizar para representar una función lógica?

<details><summary>🧠 Respuesta</summary>
</details>

B) Describa el funcionamiento del circuito lógico secuencial denominado 'D'.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 3

A) ¿Qué es un ciclo de instrucción?

<details><summary>🧠 Respuesta</summary>
</details>

B) Describa los pasos del ciclo de instrucción de una operación aritmética.

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 4

A) ¿Cómo está compuesta una 'jerarquía de memoria'?

<details><summary>🧠 Respuesta</summary>
</details>

B) ¿Porqué la organización 2D de memoria semiconductor NO requiere 'refresco'?

<details><summary>🧠 Respuesta</summary>
</details>

<hr class="yellow">

#### Ejercicio 5

Una imagen en una pantalla de 100 cm por 50 cm posee una resolución de 100 puntos por centímetro:

A) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen en 'True Color'?

<details><summary>🧠 Respuesta</summary>
</details>

B) ¿Cuántas imágenes podría almacenar en esa memoria si la imagen a almacenar fuera 'monocromática'?

<details><summary>🧠 Respuesta</summary>
</details>

---

<div align='center'>

# Final 15 11-22

</div>

#### Ejercicio 1

Dado un sistema en punto flotante con 5 bits de mantisa en BCS con bit implícito y exponente de 5 bits en exceso 16 (en ese orden de izq a der):

A) ¿Cuál es el valor decimal del mínimo positivo representable por el sistema?

B) Represente en el sistema de punto flotante dado el número decimal 2,625.

<hr class="yellow">

#### Ejercicio 2

A) ¿Cuáles son las 3 funciones lógicas elementales y cómo las puede representar?

B) Describa el método de diseño de circuitos lógicos combinacionales denominado "Suma de productos".

<hr class="yellow">

#### Ejercicio 3

A) ¿Cómo es el formato de instrucción de una máquina de 3 direcciones?
B) Describa la diferencia en los pasos del ciclo de instrucción de una instrucción SUB y una CMP.

<hr class="yellow">

#### Ejercicio 4

A) ¿Cuáles son los principios que rigen el funcionamiento de una "jerarquía de memoria"?
B) ¿Porqué la organización 2 1/2D de memoria semiconductor utiliza 2 decodificadores?

<hr class="yellow">

#### Ejercicio 5

Una imagen en una pantalla de 100 cm por 50 cm posee una resolución de 100 puntos por centímetro:
A) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen en True Color?
B) ¿Cuántas imágenes "monocromo" se podrían almacenar en esa memoria?

---

<div align='center'>

# Final 16 04-24

</div>

#### Ejercicio 1

Dada la representación 4885H (en BCH) de un sistema en punto flotante con 8 bits de mantisa en BCS y bit implícito y exponente de 8 bits en exceso 128 (en ese orden de izq a der):

A) Determine el valor decimal representado.

B) Calcule el Error Absoluto Máximo.

<hr class="yellow">

#### Ejercicio 2

A) ¿Cuáles son las formas de representar o describir la función lógica NOR?

B) Describa el circuito lógico secuencial denominado "biestable RS". Realice la tabla de comportamiento y el gráfico de interconexión de puertas lógicas que lo represente.

<hr class="yellow">

#### Ejercicio 3

A) ¿Qué es el modo de direccionamiento de un operando?

B) Describa cómo se determina la dirección efectiva del operando cuando se utiliza el modo de direccionamiento indirecto via registro con desplazamiento.



#### Ejercicio 4

A) ¿Porqué funciona la jerarquía de memoria?

B) Describa 3 características principales de la organización 2 1/2D de memoria semiconductor.



#### Ejercicio 5

Un video musical en blanco y negro dura 100 segundos y cada imagen es de 500 por 800 píxeles:

A) ¿Cuál debe ser la velocidad de transferencia a periférico (en bytes/segundo) si para "percibir movimiento" cada imagen "visible" debe ser cambiada 25 veces en un segundo?

B) ¿Cuántos bytes de memoria se necesitan para almacenar el video completo?

---

<div align='center'>

# Final 17 Abr23

</div>

#### Ejercicio 1

a) Describa las características del sistema de representación en coma flotante estándar IEEE 754 de simple precisión.

b) Represente el número decimal 1 en el formato de la parte a).



#### Ejercicio 2
a) Describa el método de implementación de funciones booleanas denominado SoP.

b) Use el método descripto en a) para la función lógica S con 4 entradas (A, B, C, D) cuya salida es '1' cuando dos de las entradas están en '0' (Tabla-Ecuación-Gráfico).



#### Ejercicio 3

a) Describa el funcionamiento del modo de direccionamiento Indirecto por Registro con desplazamiento.

b) Escriba instrucciones como ejemplo de uso de las variantes que conozca.



#### Ejercicio 4

a) ¿Cuáles son los principios que permiten el funcionamiento de un sistema de memoria basado en jerarquía?

b) Describa y realice un esquema de memoria con organización 2 ½ D con capacidad de almacenamiento de 1024 bits.



#### Ejercicio 5

Describa las características del almacenamiento externo conocido como disco rígido. Considerar el tipo de comunicación entre CPU y el periférico, el formato de almacenamiento, cantidad de información almacenada, etc.

---

<div align='center'>

# Final 18 5-23

</div>

#### Ejercicio 1

Dada la representación 4185H (en hexadecimal) de un sistema en punto flotante con 8 bits de mantisa en BCS y bit implícito y exponente de 8 bits en exceso 128 (en ese orden de izq a der):

a) Determine el valor decimal representado.

b) Calcule el Error Absoluto máximo.

<hr class="yellow">

#### Ejercicio 2

¿Qué es una puerta lógica?

Describa el circuito lógico secuencial denominado "biestable RS".

Realice la tabla de comportamiento y un gráfico de interconexión de puertas lógicas que lo represente.

<hr class="yellow">

#### Ejercicio 3

¿Qué es un ciclo de instrucción?

Describa el funcionamiento del modo de direccionamiento indirecto via registro con desplazamiento.

<hr class="yellow">

#### Ejercicio 4

a) Describa las características principales de la organización 21/2D de memoria semiconductor.


b) Realice un esquema del chip con esta organización.


c) Mencione valores típicos de capacidad de almacenamiento y de tiempo de acceso.

<hr class="yellow">

#### Ejercicio 5

Un video musical monocromático de youtube dura 200 segundos.

a) Calcule cuántos bytes de memoria se necesitan para almacenar el video completo si cada imagen es de 800 por 500 píxeles.

b) ¿Cuál debe ser la velocidad de transferencia (en bytes/segundo) si la imagen debe ser cambiada 25 veces en un segundo?


<hr class="yellow">



---

<div align='center'>

# Final 19

</div>

#### Ejercicio 1

4185H (en hexadecimal) Punto flotante 8 bits mantisa BCS y bit implícito y exponente 8 bits en exceso 128 (de izq a der)

a. Determine el valor decimal representado

b. Calcule el error absoluto máximo

<hr class="yellow">

#### Ejercicio 2

¿Qué es una puerta lógica? Describa el circuito lógico secuencial "Biestable RS". Realice la tabla de comportamiento y un gráfico de interconexión de puertas lógicas que lo represente.

<hr class="yellow">

#### Ejercicio 3

¿Qué es un ciclo de instrucción?

Describa el funcionamiento del modo de direccionamiento indirecto vía registro con desplazamiento.



#### Ejercicio 4

a. Describa las características principales de la organización 2D de memoria semiconductora

b. Realice el esquema del chip con esta organización

c. Mencione valores típicos de capacidad de almacenamiento y de tiempo de acceso

<hr class="yellow">

#### Ejercicio 5

Un video musical monocromático de Youtube dura 200 seg

a. Calcule cuántos bytes de memoria se necesitan para almacenar el video completo si cada imagen es de 800 x 500 px

b. ¿Cuál debería ser la velocidad de transferencia (en bytes/seg) si la imagen debe ser cambiada 25 veces en 1 seg?

---

<div align='center'>

# Final 20 08-22

</div>

#### Ejercicio 1

Dado un sistema en punto flotante con 6 bits de mantisa fraccionaria en BCS y exponente de 4 bits en exceso 8 (en ese orden de izq a der):

A) ¿Cuál es el rango de representación del sistema?

B) Represente en el sistema de punto flotante dado el número decimal 32,2.

<hr class="yellow">

#### Ejercicio 2

A) ¿Cuáles son las 3 formas que se pueden utilizar para representar una función lógica?

B) Describa el método de diseño de circuitos lógicos combinacionales denominado "Suma de productos".

<hr class="yellow">

#### Ejercicio 3

A) ¿Qué es el ciclo de instrucción?

B) Describa los pasos del ciclo de instrucción de una operación aritmética.

<hr class="yellow">

#### Ejercicio 4

A) ¿Cómo está compuesta una "jerarquía de memoria"?

B) ¿Porqué la organización 2D de memoria semiconductor NO requiere "refresco"?

<hr class="yellow">

#### Ejercicio 5

Una imagen en una pantalla de 100 cm por 50 cm posee una resolución de 100 puntos por centímetro:

A) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen en "True Color"?

B) ¿Cuántas imágenes podría almacenar en esa memoria si la imagen a almacenar fuera "monocromática"?


---

<div align='center'>

# Final 21 09-22

</div>

#### Ejercicio 1

Dado un sistema en punto flotante con 6 bits de mantisa fraccionaria normalizada en BCS y exponente de 4 bits en exceso 8 (en ese orden de izq a der):

A) ¿Cuál es el valor del mínimo positivo representable en ese sistema?

B) Represente en punto flotante el número decimal 32,25.


<hr class="yellow">

#### Ejercicio 2

A) ¿Cuáles son las 3 formas que se pueden utilizar para representar una función lógica?

B) Describa el método de diseño de circuitos lógicos combinacionales denominado "Suma de productos".


<hr class="yellow">

#### Ejercicio 3

A) ¿Qué se representa con el formato de instrucción?

B) Describa los pasos del ciclo de instrucción de un salto incondicional.


<hr class="yellow">

#### Ejercicio 4

A) ¿Cuáles son los valores típicos de tiempo de acceso en los niveles de una "jerarquía de memoria"?

B) ¿Porqué la organización 2 1/2D de memoria semiconductor requiere "refresco"?


#### Ejercicio 5

Una imagen en una pantalla de 100 cm por 50 cm posee una resolución de 100 puntos por centímetro:

A) ¿Cuántos bytes de memoria se necesitan para almacenar una imagen en True Color?

B) ¿Cuántas imágenes podría almacenar en esa memoria si la imagen a almacenar fuera "monocromática"?

---

# Otros Finales Resueltos

¿Qué es una puerta lógica? Describe el método para la obtención del circuito combinatorio de una tabla de verdad con cuatro variables de entrada que produce una salida “1” solo cuando una de las 4 entradas esta en  1.

<details><summary>🧠 Respuesta</summary>

Una puerta lógica es un dispositivo electrónico que produce como señal de salida una operación booleana a partir  de las señales de entrada. Las puertas básicas usadas en lógica digital son: AND OR NOT, y en base a estas se derivan XOR, NAND y NOR. Cada puerta tiene una o mas entradas que cuando cambian, la señal de salida aparece casi instantáneamente, retrasada solo por el retardo de puerta. La puerta se define de tres formas: 

- Simbólica: es el convenio gráfico conocido universalmente para representar la puerta
- Función algebraica: es la ecuación con la que se puede definir una puerta.
- Tabla de verdad: enumera el valor de una operación para cada combinación posible de los valores de los operandos.

El método consiste en usar la técnica de suma de productos, primero se arma la tabla de verdad:

| A | B | C | D | F |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 |

Tomar las filas en las que la salida es “1”, y armar la función algebraica. Los “0” serán la variable negada.

F= [(~A).(~B).(~C).D]+[(~A).(~B).C.(~D)]+[(~A).B.(~C).(~D)]+[A.(~B).(~C).(~D)]

Así de esta forma queda dibujar el circuito lógico que van a ser tres AND unidas a un OR. Las negaciones se realizan agregando una NOT antes. 
Se unen todas las salidas de las compuertas AND con una OR porque solo se va a cumplir una de las condiciones a la vez. 

</details>

Describa las características principales de la organización 2 ½ D de memoria semiconductora. Defina los valores de capacidad de almacenamiento y tiempo acceso.

<details><summary>🧠 Respuesta</summary>

Los bits se almacenan en una matriz cuadrada de N filas por M columnas. Se accede de un bit a la vez, que tiene asociada una dirección que puede ser leída o escrita según la señal de control.
Están hechas de transistores en lugar de flip-flops como la memoria 2D, lo que permite poder fabricarlas de mayor capacidad. El problema de los transistores es que pierden la carga y por lo tanto pierden el valor almacenado, por lo cual se debe usar una técnica de refresco. Esto puede provocar cuello de botella. Tiene dos decodificadores, la dirección se divide en dos.
Hoy en día se comercializan memorias de 1 a 8 GB, con tiempos de acceso entre 50 y 70 ns. 

</details>

Enumere todos los elementos a tener en cuenta para el diseño del repertorio de instrucciones de un procesador. Describa dos de ellos.

<details><summary>🧠 Respuesta</summary>

Para el repertorio de instrucciones hay que tener en cuenta:
- Tipos de operaciones: cuantas y cuales
- Tipos de datos: cuales
- Formato de instrucciones: longitud (bits), N° de direcciones, tamaño de cada campo.
- Registros: cantidad que se pueden referenciar mediante instrucciones y su uso.
- Direccionamiento: la manera de especificar la dirección de un operando o una instrucción (la próxima)

Dos ejemplo podrían ser, las maquinas de dos direcciones y las de una dirección.

Tipos de operaciones
- Transferencia de datos: MOV (load/store) 
- Aritméticas: ADD, SUB, INC, DEC, MUL, DIV.
- Lógicas: AND, OR, XOR, NOT.
- Conversión
- E/S: In, Out.
- Transferencia de control: salto, bifurcación.
- Control del sistema: usadas por el sistema operativo.   

Tipos de datos
Los mas importantes:
- Direcciones
- Números: enteros, punto fijo, punto flotante.
- Caracteres: ASCII, BCD.
- Datos lógicos

Modos de direccionamiento
En una instrucción se utilizan bits para expresar el código de operación: nos dicen qué hacer. También se necesitan una gran cantidad de bits para especificar de donde provienen los datos.
Los modos de direccionamiento tienen como objetivo:
- Disminuir la cantidad de bits en la instrucción.
- La dirección puede que no se conozca hasta el momento de ejecutar el programa.
- Manejo mas eficiente de los datos (arreglos).

Los modos de direccionamiento que existen son:
- Inmediato
- Directo
- Por registro
- Indirecto por memoria
- Indirecto por registro
- Por desplazamiento
- Del stack 

Mdd Inmediato
El operando se obtiene automáticamente de la memoria al mismo tiempo que la instrucción. No requiere una referencia extra a memoria.
La desventaja es que el tamaño del operando está limitado por el tamaño del campo de direccionamiento.

Mdd Directo
El campo de direccion tiene la direccion efectiva del operando. Es simple pero tiene un espacio limitado de direcciones por cantidad de bits del campo.

Mdd por registro
Conceptualmente es igual al Directo, pero se especifica un registro en lugar de una posición de memoria. 
La referencia a registro usa menos bits que la especificación de la dirección y no requiere acceso a memoria de datos.
La desventaja es que son pocos.

Mdd Indirecto por memoria
En la instrucción está la dirección de la dirección del operando. Trata de solucionar el problema del Directo. Así, con una dirección de menos bits en la instrucción, se apunta a una dirección de mas bits.
La ventaja es que es espacio de direccionamiento es mayor. La principal desventaja es que realiza múltiples accesos a memoria.

Mdd Indirecto por registro
En la instrucción se especifica el registro que tiene almacenada la dirección. La ventaja de esto es que necesita menos bits para especificar el registro que la posición de memoria.

Mdd por desplazamiento
Combina capacidades de Indirecto y Directo. Requiere que la instrucción tenga dos campos de dirección. Estos dos campos se suman para producir la dirección efectiva. Los mas comunes son Relativo, De registro base e Indexado.

Mdd Del stack
El stack o pila es un arreglo lineal de localidades de memoria. Es una lista o cola donde el ultimo en entrar es el primero en salir. Es una zona de memoria reservada.
Asociado con la pila o stack hay un registro apuntador (SP) cuyo valor es la dirección tope de pila o stack.

</details>

Se requiere mostrar en “True Color” de 1024x1024 píxeles, un vídeo que posee 20 imágenes por cada segundo ¿podría usar la memoria cuyos valores de capacidad y tiempo de acceso definió en el punto 3? justifiquen.

<details><summary>🧠 Respuesta</summary>

1024 x 1024 x 3 Bytes x 20 = 62.914.560 Bytes = 60 MB

1 Byte _________ 50 ns
62.914.560______ x ns

(62.914.560 x 50) / 1 = 3,14 seg. aprox. 
Por lo tanto la memoria especificada en el punto 3 no nos sirve para mostrar las 20 imágenes en un segundo.

</details>

¿Qué características determinan que un circuito lógico sea combinacional? Describa el método para implementar el circuito lógico de la función booleana F de cuatro entradas (a, b, c y d) cuya tabla de verdad posee valor de salida “1” cuando solo una de sus variables esta en “1”. realice el gráfico correspondiente de interconexión de compuertas resultantes.

<details><summary>🧠 Respuesta</summary>

Para que un circuito lógico sea combinacional se necesitan un conjunto de dos o mas puertas interconectadas. Responden a los valores logicos de las entradas, la salida esta determinada exclusivamente por los valores de las entradas en ese instante. Si cambia la entrada cambia la salida. Lo valores pasados de las entradas no influyen en los valores de las salidas.

</details>

¿Qué es un ciclo de instrucción? Describa los diferentes pasos del ciclo si la instrucción a realizar es XOR AL, 55H (or exclusivo entre registro y operando inmediato). Si AL contenía 5AH, ¿Que resultado queda en AL luego de la ejecución de la instrucción?

<details><summary>🧠 Respuesta</summary>

El ciclo de instrucción es el procedimiento requerido para una sola instrucción. Se puede decir que un ciclo de instrucción incluye subciclos: captación o búsqueda, interpretación y ejecución e interrupción. La ejecución del programa se detiene sólo si la computadora se desconecta, se produce una error o se encuentra una instrucción que la detiene. La secuencia exacta de eventos que tiene lugar durante un ciclo de instrucción depende del diseño de la CPU. 

Los pasos de la instrucción XOR AL, 55H son:

1.	Busca el código de operación.
2.	Incrementa el PC.
3.	Decodifica la instrucción y detecta que tiene que ir a buscar la otra parte.
4.	Busca la otra parte del código de operación.
5.	Incrementa el PC.
6.	Decodifica la instrucción y detecta que es una operación lógica XOR, por lo que tendrá que usar la ALU.
7.	Busca el operando que en este caso es el 55H.
8.	Incrementa el PC.
9.	Realiza la operación XOR entre el valor almacenado en AL y el 55H.
10.	Almacena el resultado en AL.

El resultado que quedaría en AL seria 00001111 = 0FH

</details>

¿Que operaciones de tipo aritmético podemos encontrar en un repertorio de instrucciones? ¿Porque los distintos tipos de datos que deseen utilizarse en esas operaciones condicionan el hardware necesario para operar?

<details><summary>🧠 Respuesta</summary>

El conjunto de operaciones de tipo aritmético que podemos encontrar son la suma, resta, multiplicación, división, incremento, decremento, valor absoluto y negación. 
Los tipos de datos condicionan al hardware por una serie de cosas:
- Si se esta diseñando un sistema que valla a multiplicar muchos números seria conveniente seria conveniente incluir un multiplicador por hardware.
- Si se va a utilizar números  muy grandes debe disponerse de una cantidad adecuada de bits para los buses en general, memoria, CPU, etc. Por ejemplo, una maquina de 4 bits no se podría utilizar para un software que trabaja con números de miles de millones.

</details>

Describa los métodos de acceso a la información almacenada en memoria secundaria. ¿que ventaja y/o usos puede mencionar del almacenamiento en RAID?

<details><summary>🧠 Respuesta</summary>

Los métodos de acceso son:
- Secuencial: la memoria se organiza en unidades (registros). Para acceder a uno se debe ir trasladando desde la posición actual a la deseada por todos los registros intermedios. Ej.: discos.
- Directo: se accede directamente a una vecindad dada de registros o bloques, luego una búsqueda secuencial contando o esperando alcanzar la posición. Ej.: discos.
- Aleatorio-Random: cada posición direccionable tiene un único mecanismo de acceso. Ej.: memoria principal y cache.
- Asociativa: de tipo aleatoria donde se hace una comparación de ciertos bits de una palabra buscando coincidencias de valores dados, y esto para todas las palabras simultáneamente. Una palabra accedida basándose en una parte de su contenido y no de su dirección o posición.
 
Las ventajas y/o usos de RAID depende de cada nivel:
- NIVEL 0: En este nivel los datos del usuario y del sistema están distribuidos a lo largo de todos los discos del conjunto, a través de la tira de datos (las cuales pueden ser bloques físicos, sectores o alguna otra entidad) y se proyectan cíclicamente en dispositivos consecutivos. Al conjunto de tiras lógicamente consecutivas, que se proyecta exactamente sobre una misma tira en cada miembro del conjunto, se las denomina franja.

- NIVEL 1: Consigue la redundancia duplicando todos los datos, proporcionando una copia de seguridad en tiempo real. Se hace una distribución de datos como en el nivel 0, pero cada franja lógica se proyecta en dos discos físicos separados. De esta forma cada disco tiene un espejo que tiene la misma información.

Esto trae tres ventajas:

- Una petición de lectura puede ser servida por cualquier de los dos discos que contienen los datos pedidos.
- La petición de escritura, que requiere que las dos tiras correspondientes se actualicen, se hace en paralelo.
- Cuando una unidad falla, se puede acceder inmediatamente a los datos de la otra.

La principal desventaja es el costo de su implementación, ya que se requiere el doble del espacio de disco del disco lógico. Ej.: Para organizar un RAID 1 de 4 discos físicos se usaran 2 para el espacio lógico y 2 para el espejado. 

- NIVEL 2: utiliza una técnica de acceso en paralelo, que consiste en que todos los discos miembros, participan en la ejecución de cada E/S. Dado que el giro de cada unidad esta sincronizado, para que cada cabezal este en la misma posición en cada disco.

En este nivel las tiras son muy pequeñas, y la redundancia y corrección de errores, se logran a través de una ecuación de paridad, que consiste en calcular los bits de cada posición de cada disco, y almacenarlos en las correspondientes posiciones en los discos de paridad. 

Cuando se produce un error en un solo bit, el controlador del conjunto lo reconoce, realiza el calculo para saber el valor correspondiente y lo corrige instantáneamente.

En cuanto a las operaciones E/S, una petición de lectura no conlleva un tiempo adicional, sin embargo, la petición de escritura debe acceder a todos los discos de datos y de paridad.
La ventaja de este RAID esta en que se necesita una menor cantidad de discos para almacenar la información. Y su desventaja recae en el costo.
Su uso esta destinado en entornos en los que haya muchos errores de disco y la seguridad no sea alta.

- NIVEL 3: se organiza de manera similar que el de nivel 2 y utiliza una acceso en paralelo, pero se diferencia de él en que solo requiere de un disco redundante, sin importar lo grande que sea el conjunto de disco.

En este nivel la corrección es simple, se calcula un sencillo bit de paridad para el conjunto de bit individuales que están en la misma posición, en todos los discos de datos. En caso de que falle una unidad, se accede a disco de paridad y se reconstruye la información desde el resto de los dispositivos.

Las ventajas de este RAID se encuentran en el ahorro de espacio, ya que solo se necesita un disco de paridad y en las altas velocidades de transferencias de datos. Su desventaja esta en que solo se puede recuperar un disco dañado por ves, si se dañaran dos al mismo tiempo, no podría reconstruir la información.

Su uso esta destinado en entornos no orientados en transacciones.

- NIVEL 4: Este nivel, así como el 5 y el 6, usan una técnica de acceso independiente, por lo que las diferentes E/S se pueden atender en paralelo. (es más adecuado para sistemas que requieran velocidades de petición de E/S altas, que para los que necesiten velocidades de transferencia altas)

Las tiras de datos son relativamente grandes, y se realiza una paridad bit a bit que se guarda en la tira correspondiente del disco de paridad. Esto trae aparejado un cuello de botella sobre el disco de paridad, ya que debe actualizarse cada vez que se haga una escritura en cualquiera de los discos de datos.

- NIVEL 5: Este nivel es muy similar al nivel 4, pero las tiras de paridad se distribuyen a lo largo de todos los discos. Se distribuye de manera cíclica: para un conjunto de n discos, la tira de paridad está en diferentes discos para las primeras n tiras, y este patrón se repite. O sea que la tira de paridad siempre está en otro disco que su correspondiente tira de datos.

Esta distribución evita el cuello de botella que se produce el nivel 4, ya que la actualización de la paridad se distribuye sobre todos los discos.

- NIVEL 6: El nivel 6 agrega otro algoritmo de comprobación de datos, y se distribuyen de la misma manera que el nivel 5. Uno es el algoritmo de los niveles 3, 4 y 5 que calcula la XOR, y otro es un algoritmo independiente. Esto hace posible la regeneración de los datos incluso si dos de los discos que contienen los datos de los usuarios fallan.

Es una solución perfecta para aplicaciones con objetivos críticos, pero tiene un gran costo de cálculo y escritura de paridades.

</details>

Describa como se puede construir un sumador binario completo. Defina cuales son las funciones lógicas que se pueden utilizar, tabla de verdad y realice un esquema de interconexión de compuertas de dicho sumador.

<details><summary>🧠 Respuesta</summary>


Un  sumador binario completo se puede construir armando la tabla de verdad con los valores booleanos de la suma binaria, y la tabla de verdad de la suma con acarreo. Una vez realizadas estas tablas, se puede hacer las funciones de salida. 
Para que funcione un sumador de varios bits cada uno de los sumadores de un bit deben tener 3 entradas, incluyendo el acarreo del sumador inmediato inferior.

Suma = (-A . -B . C) + (-A . B . -C) + (A.B.C) + (A.-B.-C)
Acarreo = A.B + A.C + B.C

</details>

¿Qué mejoras podemos obtener en el funcionamiento de máquina que ejecuta instrucciones debido al principio de localidad de referencia?

<details><summary>🧠 Respuesta</summary>

La principal mejora que podemos obtener cuando se cumple el principio de localidad de referencia es la disminución de la frecuencia de acceso a los niveles inferiores de la jerarquía de memoria. Es gracias a este principio que dicha jerarquía puede implementarse. 
El principio de localidad de referencia nos dice que en el curso de la ejecución de un programa, las referencias a memoria por parte del procesador, tanto para instrucciones como para datos, tienden a estar agrupadas. Los programas normalmente contienen un numero de bucles iterativos y subrutinas. Cada vez que se entra en un bucle a una subrutina, hay repetidas referencias a un pequeño conjunto de instrucciones. Esto también se cumple al trabajar con matrices o arreglos.

</details>

¿En qué momento del ciclo de instrucciones se fija la CPU si hay pedido de interrupciones? ¿Por qué? Describa los pasos que se llevan a cabo cuando se encuentra el pedido.

<details><summary>🧠 Respuesta</summary>

Después de la ejecución de la instrucción.

Pasos
- 1.	Suspende la ejecución del programa en curso y guarda su contexto. Esto significa almacenar la dirección de la siguiente instrucción a ejecutar y cualquier otro dato relacionado con la actividad en curso del procesador.
- 2.	Carga el PC con la dirección de comienzo de una rutina de gestión de interrupción.

A continuación el procesador prosigue con el ciclo de captación y accede a la primera instrucción del programa de gestión de interrupción, que dará servicio a la interrupción. Generalmente el programa de gestión de interrupción forma parte del sistema operativo. Normalmente, este programa determina el origen de la interrupción y realiza todas las acciones que sea necesarias. Cuando la rutina de gestión de interrupción se completa, el procesador puede proseguir la ejecución del programa de usuario en el punto en el que se interrumpió. 

</details>

¿Qué objetivo persigue la existencia del registro puntero de pila (stack pointer) en el CPU? ¿Para qué serviría tener más de uno?

<details><summary>🧠 Respuesta</summary>

El objetivo del stack pointer es contener el valor de la dirección del tope de la pila.

Tener más de un Stack Pointer serviría para poder tener una pila para el usuario y una para el sistema. Esto evitaría que el usuario tenga que estar pendiente de los cambios que realiza el sistema en la pila.

</details>

Completada la instrucción add AX, meno1. ¿Qué instrucción deberá ejecutar a continuación para determinar si el resultado obtenido es correcto o no? Considere los casos de representación de números sin signos y en ca2.

<details><summary>🧠 Respuesta</summary>

```
Para números sin signo debería ejecutar: 
		JNC correcto
		MOV CX, 1
		JMP fin
correcto:	MOV CX, 0
fin:		HLT

Para números en ca2 debería ejecutar: 
		JNO correcto
		MOV CX, 1
		JMP fin
correcto:	MOV CX, 0
fin:		HLT
```

</details>

Describa los componentes que definen el tiempo de acceso de un disco magnético. ¿Cómo se podría calcular un tiempo de acceso promedio?

<details><summary>🧠 Respuesta</summary>

Los componentes que definen el tiempo de acceso son: Por un lado, la cabeza de lectura, que tiene una cierta velocidad para alcanzar el cilindro buscado (tiempo de seek). 
También los discos en si, que tienen una determinada velocidad de giro. Esto determina el tiempo de latencia, que ocurre desde que la cabeza de lectura se posiciona sobre el cilindro, hasta que el sector buscado pasa por debajo de la cabeza.

Para calcular el tiempo de acceso promedio debemos sumar el tiempo de seek y el tiempo de latencia promedio. Este último se puede calcular como el tiempo de giro de una pista dividido dos.
Otra manera podría ser midiendo el tiempo de acceso de una gran cantidad de accesos y hacer un promedio.

</details>

¿Qué es un JK? Describa las características de funcionamiento con tabla de comportamiento y gráfico del circuito lógico.

<details><summary>🧠 Respuesta</summary>

Es un circuito secuencial, por lo tanto la salida depende de la entrada como del estado interno del circuito. Es un tipo de flip-flop que tiene dos entradas al igual que es SR, pero todas las combinaciones posibles son validas. La entrada J sola realiza la función de puesta a 1, causando que la salida sea 1. La entrada K solo realiza la función de puesta a 0. Cuando J y K son 1 la función realizada es de conmutación: la salida se invierte.

</details>

Describa paso a paso el ciclo de instrucción correspondiente a la ejecución JMP memo1. Dicha instrucción ocupa 3 bytes en memoria. La memoria almacena palabras de 8 bits y direcciona con 16 bits.

<details><summary>🧠 Respuesta</summary>

1) Busca el código de operación
2) Incrementa el Program Counter
3) Decodifica y detecta que se trata de un salto
4) Busca la parte baja de la dirección a la que tiene que saltar
5) Incrementa el PC
6) Busca la parte alta de la dirección a la que tiene que saltar
7) Incrementa el PC
8) Carga el PC con el valor de la dirección a la que tiene que saltar

</details>

Enumere las instrucciones de tipo transferencia de control que posee el MSX-88 y explique el modo de direccionamiento de c/u de ellas.

<details><summary>🧠 Respuesta</summary>

Las instrucciones de tipo transferencia de control que posee el MSX-88 son: Los saltos (JMP, JZ, JNZ, JS, JNS, JC, JNC, JO, JNO)
Las llamadas a subrutinas (Call, Ret)
También son de transferencia de control las de interrupciones.

Los modos de direccionamiento que usan son: 
Relativos al PC, donde se tiene un número que debe ser sumado al contenido del PC.
Directo, cuando la etiqueta representa una dirección a la que se debe saltar.

</details>

¿Que es un módem? Para que sirve, porque se utiliza? Cuales son los parámetros de un módem?

<details><summary>🧠 Respuesta</summary>

MODEM: MOdulador, DEModulador. Convierte señales '0' y'1' en tono de audio y viceversa. La tasa de Bits/seg (bps) es el numero de bits enviados por segundo. Tasa de baudio es el numero de cambio de señal por segundo.
Su principal uso es para telecomunicaciones: convierte señales analógicas provenientes de un sistema telefónico a cadenas binarias. Es una de las tecnologías más usadas para conectarse a internet. 

</details>

Describa los mecanismos de impresión que conozca, compare calidad obtenible, cantidad de copias por vez, tamaño de papel utilizable, cantidad de colores y velocidad de impresión de los mecanismos que mencione.

<details><summary>🧠 Respuesta</summary>

- Impresora de impacto: Los caracteres son impresos golpeando los moldes de los caracteres o una cinta entintada sobre la hoja.
En la disposición “Margarita” todos los caracteres sobre relieve están dispuestos en forma de flor e impactan de a uno contra la hoja, golpeando una cinta entintada que les permite marcar el carácter. La ventaja es que cada carácter individual se imprime con buena calidad, pero no puede imprimir nada que no sea cadenas de caracteres.
En cambio, las impresoras por matriz de puntos, marcan los caracteres sobre una cinta al igual que las de margarita, pero usando punzones manejados por solenoides. Tiene tantos punzones como sea el alto de la matriz de caracteres. Produce muy baja resolución.
Ambos tipos de impresoras son muy lentas y por lo general ruidosas. Según el fabricante, pueden usar algunos colores, pero muy limitados y de baja calidad y resolución.
- Impresora láser: Es el tipo de impresora con mayor resolución, llegando hasta 1200dpi. Permite usar todos los colores y puede imprimir páginas completas de texto o gráfico a gran velocidad. Permite realizar muchas copias en menos tiempo que los demás sistemas. La desventaja es que son costosas.
- Impresora Ink-jet ó de inyección de tinta: Tienen un trasductor ultrasónico que lanza pequeños chorros de tinta a los puntos correctos con la cabeza moviéndose sobre el papel.

Permite tanto blanco y negro como color.
El precio, resolución, y velocidad se encuentra entre las anteriores. Esto hace que sean las más comunes para uso cotidiano.

Con respecto a al tamaño utilizable, puede que las impresoras de impacto estén limitadas por el tamaño físico de los punzones o martillos. En los otros tipos, depende del tamaño de bandeja que incorpore el fabricante. Los tamaños más comunes son los estándares “A4”, “Oficio”, “carta”, etc.

La cantidad de copias por vez va depender de la velocidad de impresión del dispositivo, siendo las más rápidas las láser.

</details>

Describa las diferencias que tendremos entre una computadora con teclado y monitor como periféricos y una que posee un equipo denominado terminal como periférico. Puede considerar cantidad y ubicación de la memoria de video, cantidad y tipo de puertas de E/S, tipo de comunicación entre CPU y periférico.

<details><summary>🧠 Respuesta</summary>

En una computadora tradicional con teclado y monitor, tendremos un monitor de video con memoria de visualización que está mapeada en la memoria principal del equipo. En cambio, en un esquema con terminales, cada terminal se compone de un teclado y un monitor con su propia memoria de visualización dedicada a ese terminal. Esto evita que se llene la memoria principal del computador que centraliza a los terminales. 
Cada terminal puede estar alejado físicamente del CPU, por ejemplo, se puede tener el computador principal en una habitación y poner un terminal en cada una de las demás habitaciones.

La terminal conecta sus periféricos con la computadora a través de una conexión en serie, que tiene poco ancho de banda, por lo que los monitores de los terminales suelen estar orientados a caracteres para ahorrar transferencia de datos. En cambio, las computadoras con video mapeado en memoria conectan los periféricos directamente al bus de memoria, que permite cambios rápidos. Esto hace que tenga solo 1 E/S para el monitor, a diferencia de el computador con terminales, que va a tener 1 conexión de E/S para cada terminal, a pesar de que no necesite mapear la memoria de visualización en su memoria principal.

</details>

¿Qué define el Teorema fundamental de la numeración?

<details><summary>🧠 Respuesta</summary>

El teorema fundamental de la numeración establece la forma general de construir números en un sistema de numeración posicional.

![1](https://github.com/user-attachments/assets/9444bbcd-3859-4012-81d7-878d78c006bf)

Donde:
- N es el número decimal 
- d es un dígito que puede variar entre {0,1,..., (b-1)}
- b es la base de representación
- -k es la posición del dígito menos significativo, y n es la posición del dígito más significativo.

</details>


---

# Ejemplos

### Numeros en Punto Flotante


<details><summary>Notación</summary>

![image](https://github.com/user-attachments/assets/4f2ba0e9-bbae-429a-8a6e-25b4b37ab826)
</details>


Mantisa Entera BCS restringido a 4 bits y el Exponente BSS restringido a 3 bits. (0110010)

[Explicación Numeros en Punto Flotante Parte 1](https://youtu.be/lbf76DyolKI?si=DEQxUtXJvvjt9HJL)

![image](https://github.com/user-attachments/assets/9b61158b-ce27-4788-bcf4-649c88b72f09)

---

Mantisa Entera BCS restringido a 4 bits y el Exponente BSS restringido a 3 bits. (1011111)

[ExplicaciónNumeros en Punto Flotante Parte 2](https://youtu.be/O10ce7g59NI?si=2LlCO5TQizDLDIv6)

![image](https://github.com/user-attachments/assets/4f11d9df-ef12-4358-8945-4eaf231fe52f)

---

Mantisa Entera BCS restringido a 4 bits y el Exponente BSS restringido a 3 bits. (1010011)

[Explicación Numeros en Punto Flotante Parte 3](https://youtu.be/EcgWg25SeZU?si=WKmM16BvpPtvhpLt)

![image](https://github.com/user-attachments/assets/7fbd2ac9-e475-4af0-9e27-e76245d9ada4)

---

Mantisa Fraccionaria BCS restringido a 4 bits y el Exponente BSS restringido a 3 bits. (1010011)

[Explicación Numeros En Punto Flotante Parte 4](https://youtu.be/be6uwcy1GT4?si=Nlhqgx7-QXwDG69A)

![image](https://github.com/user-attachments/assets/aa135c5e-0f92-4a02-9df8-a348069ce43e)

---

Sistema en Punto Flotante cuya mantisa es fraccionaria, con 6 bits, está expresada en BSS (en el inciso a) o BCS (en el insciso b) y su exponente en BCS con 4 bits, escriba el significado de las siguientes cadenas de bits (mantisa a la izquierda) 

[Explicación Practica Punto Flotante Parte 1](https://youtu.be/NNqgT0xH9Kg?si=6gpAC7r8ZpVMXEKq)

![image](https://github.com/user-attachments/assets/c3f91b66-747b-46df-80b1-74d6be91fb3f)

---

Sistema en Punto Flotante cuya mantisa es fraccionaria, con 6 bits, está expresada en BSS (en el inciso a) o BCS (en el insciso b) y su exponente en BCS con 4 bits, escriba el significado de las siguientes cadenas de bits (mantisa a la izquierda) 

[Explicación Practica Punto Flotante Parte 2](https://youtu.be/2X5Owj5l3po?si=d_4N4pF9kRZbDnEJ)

![image](https://github.com/user-attachments/assets/f396aabc-2ea9-4461-8baa-fe5119122526)

---

Sistema en Punto Flotante cuya mantisa es fraccionaria, con 6 bits, está expresada en BSS (en el inciso a) o BCS (en el insciso b) y su exponente en BCS con 4 bits, escriba el significado de las siguientes cadenas de bits (mantisa a la izquierda) 

[Explicación Practica Punto Flotante Parte 2](https://youtu.be/CxcN47BthFU?si=QjD6DulFumBWp5c8)

Parte A)

![image](https://github.com/user-attachments/assets/799a6276-bc4d-48ec-8975-6d726151f40f)

Parte B)

![image](https://github.com/user-attachments/assets/d24aaa58-5005-425f-9e28-dd58e56a01b6)

---

[Explicación Punto Flotante Ejercicio 1 Rango y Resolución Parte 1](https://youtu.be/0P0NGutcPcA?si=9pnez6f-I7_6wPNL)

Calcular El Rango

![image](https://github.com/user-attachments/assets/3284f9db-6bd8-46a1-aefc-701874c896e4)

Esto es un ejemplo para ver el maximo anterior y lo demas continua en la siguiente clase

![image](https://github.com/user-attachments/assets/0eadd8e8-6d71-4aae-a31f-2ba3f84237da)

---

[Explicación Punto Flotante Ejercicio 1 Rango y Resolución Parte 2](https://youtu.be/pd-uk_Nrgus?si=QwrV6_4IiDForYep)

![image](https://github.com/user-attachments/assets/76056776-892c-4e47-9e86-070cf6cf3315)

