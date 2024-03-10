---
layout: ../../layouts/MarkdownPostLayout.astro
title: Final FOD
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/fod.jpg'
    alt: "Miniatura de los rayos de Astro."
pubDate: 2023-12-12
tags: ["bash", "nvim", "linux", "debian"]
---


El objetivo de este blog es poder tener la información necesaria para aprobar el final y que no dependa de si conseguiste finales o si no sabes donde encontrar información para estudiar.

- [Repositorio con todas las clases](https://github.com/Fabo-University/FOD)
- [Libro de la materia](https://github.com/Fabo-University/FOD/blob/main/Introducci%C3%B3n%20a%20las%20Bases%20de%20Datos%20-%20Bertone-Thomas.pdf)
- [Cuestionario online](https://j-josu.github.io/Quiz-FOD/)

## Final de septiembre (07/09/2023) 

En cada caso marcar una sola opción correcta. Cada respuesta correcta suma 1 punto, cada respuesta incorrecta resta 0.5 y un  inciso sin responder es neutro.

#### Pregunta 1)

Dado el siguiente árbol B+ es de 5. La operación de baja del valor 52:

- **Nodo 0**: 4, i, 1(23) 2(52) 3(73) 4(88) 5
- **Nodo 1**: 4, h, (5) (9) (15) (20)
- **Nodo 2**: 3, h, (25) (32) (41)
- **Nodo 3**: 2, h, (53) (62)
- **Nodo 4**: 1, h, (78)
- **Nodo 5**: 1, h, (90)

#### Respuestas
- **`a) Genera: lectura nodo 0, lectura nodo 5 y ninguna escritura.`**
- **b)** Genera: lectura nodo 0, lectura nodo 5, lectura nodo 4 y escritura solo del nodo 0.
- **c)** El árbol desciende de nivel.
- **d)** Genera: lectura nodo 0, lectura nodo 5, lectura nodo 4, escritura nodos 5 y escritura nodo 4.
- **e)** Hay más de una opción valida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 2)

La siguiente secuencia de instrucciones en un archivo con al menos un registro y la siguiente estructura: código de producto y precio:

```
assign (arch, "archivo.dat");
reset(arch);
read(arch, producto);
producto.codigo:= 1;
producto.precio:= 5000;
write(arch, producto);
close(arch);
reset(arch);
writeln(filesize(arch));
```

#### Respuestas

- **a)** Pierde la información del primer registro del archivo.
- **``b) Modifica el código y el precio del primer registro existente en el archivo y lo escribe en su misma posición.``**
- **c)** Puede imprimir 2 en pantalla
- **d)** Puede imprimir 1 en pantalla
- **e)** Puede imprimir 0 en pantalla
- **f)** Hay más de una opción valida.
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 3)

Se tiene el siguiente archivo para dispersión estática, con la técnica de saturación progresiva encadenada. Si llega la clave B que genera por función de dispersión la dirección 1 (F(B) = 1). Entonces:

| Dir | Clave  | Enlace |
|-----|--------|--------|
| 0   |        | -1     |
| 1   | A      | 3      |
| 2   | Z      | -1     |
| 3   | W      | -1     |
| 4   |        | -1     |
| 5   | D      | -1     |
| 6   |        | -1     |
| 7   |        | -1     |

#### Respuestas

- **a)** La clave B se almacena en la dirección 0 con enlace a la dirección 3.
- **b)** La clave B se almacena en la dirección 4 con enlace a la dirección 3.
- **c)** La clave B se almacena en la dirección 3 y la clave W se quita del archivo.
- **d)** La clave B se almacena en la dirección 3 y la clave W se mueve a la dirección 4 con enlace a la dirección 3.
- **e)** Hay más de una opción valida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

> Esta pregunta no esta corregida.

---

#### Pregunta 4)

Dado un archivo organizado con una lista invertida interna al mismo archivo para recuperación de espacio libre:

- **a)** Ante una nueva alta, se debe recorrer el archivo de forma secuencial buscando un espacio libre.
- **b)** La búsqueda de un elemento en el archivo puede realizarse secuencialmente.
- **c)** Ante una nueva alta, siempre se modifica el registro de la posición 0.
- **d)** Ante una baja de un elemento existente en el archivo, siempre se modifica el registro de la posición 0.
- **e)** Hay más de una opción valida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

> No hay respuesta

#### Pregunta 4 Alternativa)

La misma Pregunta

- **a)** Ante una nueva alta, se debe recorrer el archivo de forma secuencial buscando un espacio libre.
- **b)** Ante una nueva alta, siempre se modifica el registro de la posición 0.
- **c)** Ante una baja de un elemento existente en el archivo, siempre se modifica el registro de la posición 0.
- **d)** Si se eliminan todos los registros del archivo, la operación de filesize imprime 0. **`//Esta no es`**
- **e)** Hay más de una opción valida.
- **f)** Todas las opciones anteriores son correctas.


---

#### Pregunta 5)

Según el estado de un archivo directo para dispersión estensible y bloques o cubetas con capacidad para 3 registros:"

Tabla:

- 0 (0): 1
- 1 (1): 0

Claves de registros en Bloques:

- 0: 1 | 13525(0011010011010101), 12829(0011001000011101), 11541(0010110100010101)
- 1: 0 | 55344(1101100000110000), 37502(1001001001111110), 20642(0101000010100010)

#### Respuestas
- **a)** El proceso de alta de la clave 19825 (100110101110001) no produce overflow
- **b)** El proceso de alta de la clave 19825 (100110101110001) produce overflow y no es necesario duplicar la tabla
- **c)** El proceso de alta de la clave 19825 (100110101110001) produce más de un overflow y se duplica la tabla una única vez, quedando la misma con 2 bits asociados (4 entradas)
- **d)** Hay más de una opción valida.
- **e)** Todas las opciones anteriores son correctas.
- **f)** Ninguna de las opciones anteriores es correcta.

> No hay respuesta

---

#### Pregunta 6) No estan ordenados

Dado un archivo maestro que almacena código ded producto y stock, y dando dos archivos de detalle que almacenan fecha de venta, código de producto y cantidad vendida. El archivo maestro y los detalles no están ordenados, entonces en la implementación de un algoritmo de actualización maestro/detalle:

- **a)** Se aplica un algoritmo de corte de control  para procesar ambos archivos de detalle simultáneamente.
- **b)** No es necesario procesar todos los registros del archivo maestro.
- **c)** No es posible actualizar el archivo maestro con los archivos de detalle.
- **d)** Es necesario procesar todos los registros en los archivos detalle
- **`e) Hay más de una opción valida.`**
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

#### Pregunta 6 Alternativa) Estan ordenados

Dado un archivo maestro que almacena código ded producto y stock, y dando dos archivos de detalle que almacenan fecha de venta, código de producto y cantidad vendida. El archivo maestro y los detalles están ordenados por codigo de producto, entonces en la implementación de un algoritmo de actualización maestro/detalle:

- **a)** Se pueden procesar ambos archivos de detalle simultáneamente.
- **b)** Puede no ser necesario procesar todos los registros del archivo maestro.
- **c)** Es necesario procesar todos los registros de los archivos de detalle.
- **d)** Hay más de una opción valida.
- **`e) Todas las opciones anteriores son correctas.`**
- **f)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 7)

Dada una función de dispersión
- **a)** Se utiliza saturación progresiva para ubicar registros en overflow.
- **b)** Se utiliza saturación progresiva encadenada para ubicar registros en overflow.
- **c)** Se utiliza saturación progresiva encadenada en áreas separadas para ubicar registros en overflow.
- **d)** Se utiliza dispersión doble para ubicar registros en overflow.
- **e)** Todas las opciones anteriores son correctas.
- **f)** Algunas de las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 8)

Cuando se busca un elemento en un árbol B+

- **a)** Puede necesitar la creación de un nodo.
- **b)** No es necesario acceder al nivel hoja.
- **c)** Puede ser necesario realizar una actualización en un nodo interno.
- **d)** Es necesario acceder al nivel hoja.
- **e)** Hay más de una opción válida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

> No hay respuesta

---

#### Pregunta 9)

Cuando se busca un elemento en un árbol B (Pueden preguntar lo mismo con árbol B+):

- **a)** Puede necesitar la creación de un nodo.
- **b)** Puede no ser necesario acceder al nivel hoja.
- **c)** Puede ser necesario realizar una actualización en un nodo interno.
- **d)** Es necesario acceder al nivel hoja.
- **e)** Hay más de una opción válida.
- **f)** Todas las opciones anteriores son correctas.
- **`g) Ninguna de las opciones anteriores es correcta.`**

---

#### Pregunta 10)

- Cuando se realiza una baja en un árbol B+:
- Cuando se realiza una baja en un árbol B:

#### Respuestas

- **a)** Puede ocurrir overflow
- **b)** Ocurre underflow
- **c)** Puede ser necesario liberar un nodo.
- **d)** Puede no ser necesario acceder al nivel hoja.
- **e)** Hay más de una opción válida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

> No hay respuesta

---

#### Pregunta 8)

Un indice secundario es:

- **a)** Una estructura de datos adicional que permite asociar una o varias claves primarias con una clave candidata.
- **b)** Una estructura de datos adicional que contiene el mismo volumen de información que el archivo original
- **c)** Una estructura de datos adicional que permite asociar una o varias claves secundarias con una clave primaria.
- **d)** Hay más de una opción válida.
- **e)** Todas las opciones anteriores son correctas.
- **`f) Ninguna de las opciones anteriores es correcta.`**

---

#### Pregunta 7)

Un árbol AVL es un (utilizar sólo 5 palabras, no más):

---

## Otro Final

#### Pregunta 1)

Cuando se produce un desborde en dispersión dinámica:

- **a)** En algunos casos aumenta la cantidad de bits asociado al bloque en donde sucede el desborde.
- **b)** Siempre se duplica la tabla asociada al archivo de datos.
- **c)** No es necesario generar un nuevo bloque para el archivo de datos.
- **d)** Puede no ser necesario escribir en el archivo de datos.
- **e)** Hay más de una opción válida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 2)

La siguiente secuencia de instrucciones en un archivo vacío con la siguiente estructura: código de producto y precio:

```
assign (arch, "archivo.dat");
rewrite(arch);
producto.codigo:= 1;
producto.precio:= 5000;
close(arch);
reset(arch);
writeln(filesize(arch));
```

#### Respuestas

- **a)** Pierde Información
- **b)** Modificar el código y el precio del último registro existente en el archivo.
- **c)** Puede imprimir 0 en pantalla
- **d)** Puede imprimir 1 en pantalla **`//Esta no es`**
- **e)** No realiza cambio alguno sobre el archivo.
- **f)** Hay más de una opción valida.
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 3)

Final de septiembre (07/09/2023) Pregunta 6 Alternativa

---

#### Pregunta 4)

Un árbol AVL

- **a)** Es un árbol binario en donde cada nodo puede tener más de un nodo padre.
- **b)** Es un árbol B balanceado en altura
- **c)** Es una estructura de datos lineal que se puede desbalancear.
- **d)** Puede ser árbol B balanceado en altura.
- **d)** Puede ser árbol B+ balanceado en altura.
- **e)** Hay más de una opción válida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.


> No hay respuesta 

---

#### Pregunta 5)

Un índice secundario es:

- **a)** Una estructura de datos adicional que permite asociar una o varias claves primarias con una clave secundaria.
- **b)** Una estructura de datos adicional que contiene el mismo volumen de información que el archivo original
- **c)** Una estructura de datos adicional que permite asociar una o varias claves secundarias con una clave primaria.
- **d)** Una estructura de datos adicional que establece un orden lógico del archivo original.
- **e)** Una estructura de datos adicional que permite relacionar una clave primaria con otra clave candidata.
- **f)** Hay más de una opción válida.
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

> No hay respuesta

---

#### Pregunta 6)

Cuando se realiza una baja en un árbol B+ de prefijos simples:

- **a)** Necesita la creación de más de un nodo.
- **b)** Siempre se accede al nivel hoja.
- **c)** Es necesario realizar una actualización en un nodo interno.
- **d)** Nunca puede aumentar el nivel del árbol
- **e)** Se promociona una copia de la expresión en un nodo interno. **`//Esta no es`**
- **f)** Hay más de una opción válida.
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 7)

Cuando se realiza un alta en un árbol B:

- **a)** El nuevo elemento debe ir en un nodo interno.
- **b)** Ocurre un overflow
- **c)** Puede ocurrir un underflow. **`//Esta no es`**
- **d)** Puede ser necesario liberar un nodo.
- **e)** El árbol nunca puede descender de nivel.
- **f)** No es necesario acceder al nivel hoja.
- **g)** Hay más de una opción válida.
- **h)** Todas las opciones anteriores son correctas.
- **i)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 8)

Cuando se realiza un alta y produce una colisión en dispersión estática:

- **a)** Siempre se genera desborde.
- **b)** Nunca se genera desborde.
- **`c) Se puede generar desborde.`**.
- **d)** Se puede generar una colisión.
- **e)** Hay más de una opción válida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 9)

Dado un archivo organizado con una lista invertida interna al mismo archivo para recuperación de espacio libre:

- **a)** Ante una nueva alta, se recorre el archivo de forma secuencial buscando un espacio libre.
- **b)** Ante una nueva alta, se modifica el registro de la posición 0.
- **c)** Ante una baja de un elemento existente en un archivo, se modifica el registro de la posición 0.
- **d)** Si se eliminan todos los registros del archivo, entonces se debe eliminar el registro en la posición 0 del archivo. **`//Esta no es`**
- **e)** La lista invertida interna no puede estar vacía.
- **f)** Hay más de una opción válida.
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 10)

Cuando una clave **x** y otra clave **y** generan, por Función de Dispersión, la misma dirección, entonces:

- **a)** Puede ocurrir un desborde.
- **b)** Puede ocurrir una colisión.
- **c)** **x** e **y** no son claves sinónimas.
- **d)** Todas las opciones anteriores son correctas. **`//Esta no es`**
- **e)** Hay más de una opción válida.
- **f)** Ninguna de las opciones anteriores es correcta.

---

## Final de Julio (06/07/2023)

En cada caso marcar una sola opción correcta. Cada respuesta correcta suma 1 punto, cada respuesta incorrecta resta 0.5 y un inciso sin respuesta es neutro.

#### Pregunta 1)

Dado un archivo maestro que almacena código de producto y stock, y dado dos archivos de detalle que almacenan fecha de venta, código de producto y cantidad vendida. El archivo maestro ordenado por stock y los detalles por  código ded producto, entonces en la implementación de un algoritmo ded actualización maestro/detalle:

- **a)** No se pueden procesar ambos archivos de detalle simultáneamente. **`//Esta no es`**
- **b)** No es necesario procesar todos los registros del archivo maestro.
- **c)** Puede no ser necesario procesar todos los registros de los archivos detalle.
- **d)** Hay más de una opción válida.
- **e)** Todas las opciones anteriores son correctas.
- **f)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 2)

La siguiente secuencia de instrucciones en un archivo con al menos un registro y con la siguiente estructura: código de producto y precio:

```	
assign (arch, "archivo.dat");
rewrite(arch);
producto.codigo:= 1;
producto.precio:= 5000;
write(arch, producto);
close(arch);
reset(arch);
writeln(filesize(arch));
```

#### Respuestas

- **a)** Puede perder información. **`//Esta no es`**
- **b)** Modifica el código y el precio del último registro existente en el archivo.
- **c)** Imprime 0 en pantalla
- **d)** Imprime 1 en pantalla
- **e)** No realiza cambio alguno sobre el archivo.
- **f)** Hay más de una opción válida.
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 3)

Dado un archivo organizado con una lista invertida interna al mismo archivo para recuperación de espacio libre:

- **a)** El registro ubicado en la posición 1 se considera un registro especial que se utiliza como inicio de la lista.
- **b)** Ante una nueva alta, se recorre el archivo de forma secuencial buscando un espacio libre.
- **c)** Ante una nueva alta, si la lista interna de espacio libre está vacía se recorre el archivo secuencialemnte hasta el final y ahí se agrega el nuevo registro.
- **d)** Ante una baja, no es necesario actualizar la lista interna de espacio libre.
- **e)** Si se eliminan todos los registros del archivo, entonces se debe eliminar el registro en la posición 0 del archivo.
- **f)** La lista invertida interna no puede estar vacía.
- **g)** Hay más de una opción válida. **`//Esta no es`**
- **h)** Todas las opciones anteriores son correctas.
- **i)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 4)

Un índice primario es:

- **a)** Una estructura de datos adicional que permite asociar una o varias claves primarias con una clave secundaria.
- **b)** Una estructura de datos adicional que contiene el mismo volumen de información que el archivo original
- **c)** Una estructura de datos adicional que permite asociar una o varias claves secundarias con una clave primaria.
- **`d) Una estructura de datos adicional que establece un orden lógico del archivo original.`**
- **e)** Una estructura de datos adicional que permite relacionar una clave primaria con otra clave candidata.
- **f)** Hay más de una opción válida.
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 5)

Un árbol AVL

- **a)** Es un árbol binario en donde cada nodo puede tener más de un nodo padre.
- **b)** Es un árbol B balanceado en altura
- **c)** Es una estructura de datos lineal que se puede desbalancear.
- **d)** Puede ser árbol B balanceado en altura.
- **d)** Puede ser árbol B+ balanceado en altura.
- **e)** Hay más de una opción válida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta. **`//Esta no es`**

---

#### Pregunta 6)

Cuando se realiza un alta en un árbol B+ de prefijos simples:

- **a)** No necesita la creación de más de un nodo.
- **b)** Siempre se accede al nivel hoja.
- **c)** Puede no ser necesario realizar una actualización en un nodo interno.
- **d)** Nunca puede aumentar el nivel del árbol
- **e)** Siempre se promociona una copia de la expresión minima de la clave.
- **`f) Hay más de una opción válida.`**
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 7)

Cuando se realiza una baja en un árbol B:

- **a)** El elemento que se elimina no puede estar en un nod interno del árbol.
- **b)** Puede existir underflow y no propagarse hasta el nodo raíz.
- **c)** Puede existir underflow y progagarse hasta el nodo raíz.
- **d)** Siempre es necesario liberar un nodo.
- **e)** El árbol desciende de nivel.
- **f)** No es necesario acceder al nivel hoja.
- **`g) Hay más de una opción válida.`**
- **h)** Todas las opciones anteriores son correctas.
- **i)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 8)

Cuando se realiza un alta se produce una colisión en dispersión estática:

- **a)** Siempre se genera desborde.
- **b)** Nunca se genera desborde.
- **c)** **`Se puede generar desborde.`**
- **d)** Se puede generar una colisión.
- **e)** Hay más de una opción válida.
- **f)** Todas las opciones anteriores son correctas.
- **g)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 9)

Cuando una clave **x** y otra clave **y** generan, por Función de Dispersión, distinta dirección, entonces:

- **a)** Puede ocurrir un desborde.
- **b)** Puede ocurrir una colisión.
- **c)** **x** e **y** no son claves sinónimas. **`//Esta no es`**
- **d)** Todas las opciones anteriores son correctas.
- **e)** Hay más de una opción válida.
- **f)** Ninguna de las opciones anteriores es correcta.

---

#### Pregunta 10)

Cuando se produce un desborde en dispersión dinámica:

- **a)** En algunos casos aumenta la cantidad de bits asociado al bloque en donde sucede el desborde.
- **b)** Siempre se duplica la tabla asociada al archivo de datos.
- **c)** Se debe generar un nuevo bloque para el archivo de datos.
- **d)** Puede no ser necesario duplicar la tabla asociada al archivo de datos.
- **e)** Puede no ser necesario escribir en el archivo de datos.
- **f)** Hay más de una opción válida. **`//Esta no es`**
- **g)** Todas las opciones anteriores son correctas.
- **h)** Ninguna de las opciones anteriores es correcta.

---

## Mas Finales


![WhatsApp Image 2023-12-16 at 16 39 02](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a8deffe9-b4a4-4f84-bdf1-695ed6aac347)
![WhatsApp Image 2023-12-16 at 16 39 02 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/83eada33-faa7-42e0-b94d-ef3189f6f92d)
![WhatsApp Image 2023-12-16 at 16 39 01](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b9f4ba65-064f-4f65-9d95-b591c8c17762)
![WhatsApp Image 2023-12-16 at 16 39 01 (2)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/67be5cd8-7bcd-49d7-9e64-9e0165ac4f1b)
![WhatsApp Image 2023-12-16 at 16 39 01 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/233d0050-f4fc-4a46-929a-07396e1baa33)
![WhatsApp Image 2023-12-16 at 16 39 00](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0af57699-e23f-4234-865d-288efb9b1171)
![WhatsApp Image 2023-12-16 at 16 39 00 (3)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/30d556e1-48a2-4c65-af9e-03bb8ff94354)
![WhatsApp Image 2023-12-16 at 16 39 00 (2)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/469d40c4-4e58-4270-9c44-6021a362dd26)
![WhatsApp Image 2023-12-16 at 16 39 00 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/92ac08ab-25a1-4645-9037-ddb18c3c7db0)
![WhatsApp Image 2023-12-16 at 16 38 59](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/be5e116d-8ac6-4d10-97d9-a157920696b3)
![WhatsApp Image 2023-12-16 at 16 38 59 (2)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6dae533a-fc8a-4632-9534-5af9ae16bf85)
![WhatsApp Image 2023-12-16 at 16 38 59 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8ca511f4-813e-49e1-bb98-9adf56b64740)
![WhatsApp Image 2023-12-16 at 16 38 58](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/58a1baac-d101-4a1e-a590-6a33fbf6fd26)
![WhatsApp Image 2023-12-16 at 16 38 58 (3)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fab2d9bb-e109-4e90-9ad4-03753d3f3f24)
![WhatsApp Image 2023-12-16 at 16 38 58 (2)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d0093a4d-11ca-442d-b2dc-c14574010664)
![WhatsApp Image 2023-12-16 at 16 38 58 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/589a6eeb-045f-4818-b7ba-9bd27dc04eee)
![WhatsApp Image 2023-12-16 at 16 38 57](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/72397470-c8a4-4f03-9f60-30218e2f51e0)
![WhatsApp Image 2023-12-16 at 16 38 57 (2)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e47c2b62-57e8-4d7c-a0a6-572c674bd53a)
![WhatsApp Image 2023-12-16 at 16 38 55](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e58c120b-c1de-41d1-ad04-6f905f2d66e6)
![WhatsApp Image 2023-12-16 at 16 38 55 (3)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/13d57bbc-dbd8-4865-a624-9d0cc095867b)
![WhatsApp Image 2023-12-16 at 16 38 55 (2)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b4b330e0-193f-4246-a3d5-26bdaeca81d5)
![WhatsApp Image 2023-12-16 at 16 38 55 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/db9c3498-d3cc-4441-9252-a817a19a46f6)
![WhatsApp Image 2023-12-16 at 16 38 54](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f7f0164b-e460-4b34-8ab1-25bdfb255ab9)
![WhatsApp Image 2023-12-16 at 16 38 54 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8a4b1060-8608-4110-8614-41e54e9fa894)
![WhatsApp Image 2023-12-16 at 16 38 15](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/087773db-1ab7-4bc5-bea0-8f9d433d97aa)
![WhatsApp Image 2023-12-16 at 16 38 14](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/84277822-3e82-4d46-b463-aa239e3d85eb)
![WhatsApp Image 2023-12-16 at 16 38 14 (2)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a3bf7ea3-e8a5-4726-bab5-5abca7a3e982)
![WhatsApp Image 2023-12-16 at 16 38 14 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/09c496cd-ca64-4a76-a0be-7862a50d2112)
![WhatsApp Image 2023-12-16 at 16 37 57](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/25986578-3201-487d-baeb-87880fa1e500)
![WhatsApp Image 2023-12-16 at 16 37 57 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8d2905aa-7507-497c-9377-e0c7a2bd2f98)
![WhatsApp Image 2023-12-16 at 16 37 56](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/27da657b-fca8-4262-94b4-ff2ef3a931a8)
![WhatsApp Image 2023-12-16 at 16 37 56 (2)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/65d20f49-8b78-41f5-9137-62d282e2ba6c)
![WhatsApp Image 2023-12-16 at 16 37 56 (1)](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/aa5ced84-3c8f-488a-ad2e-65797f303390)