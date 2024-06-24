---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Enlace'
pubDate: 2024-06-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/enlace.jpg'
    alt: ''
tags: ["Capa de Aplicación"]
category: Redes
---

## Indice

- [Ejercicio 1](#ejercicio-1)
- [Ejercicio 2](#ejercicio-2)
- [Ejercicio 3](#ejercicio-3)
- [Ejercicio 4](#ejercicio-4)
- [Ejercicio 5](#ejercicio-5)
- [Ejercicio 6](#ejercicio-6)
- [Ejercicio 7](#ejercicio-7)
- [Ejercicio 8](#ejercicio-8)
- [Ejercicio 9](#ejercicio-9)
- [Ejercicio 10](#ejercicio-10)
- [Ejercicio 11](#ejercicio-11)
- [Ejercicio 12](#ejercicio-12)
- [Ejercicio 13](#ejercicio-13)

---

### Ejercicio 1

`¿Qué función cumple la capa de enlace? Indique qué servicios presta esta capa.`

La capa de enlace de datos, también conocida como capa 2 del Modelo OSI (Open Systems Interconnection), es fundamental en el proceso de comunicación en redes de computadoras. Su principal función es proporcionar medios para que los datos se transfieran de manera confiable entre dispositivos adyacentes conectados a la misma red física, como un enlace Ethernet o una conexión Wi-Fi. Aquí detallo las funciones y servicios principales que presta esta capa:

`Funciones de la Capa de Enlace de Datos`

1. **Control de Acceso al Medio (MAC)**:
   - **Definición**: Gestiona cómo los dispositivos en la misma red física acceden al medio compartido de comunicación.
   - **Importancia**: Evita colisiones y sobrecarga de la red gestionando cuándo y cómo los dispositivos pueden transmitir datos.

2. **Detección y corrección de errores**:
   - **Definición**: Identifica y, en algunos casos, corrige errores que ocurren en el nivel físico (capa 1).
   - **Mecanismo**: Utiliza técnicas como el chequeo de paridad, checksums y código de corrección de errores para asegurar que los datos recibidos son correctos y completos.

3. **Encapsulamiento de tramas**:
   - **Definición**: Encapsula paquetes de la capa de red en tramas agregando encabezados y trailers necesarios para el procesamiento en la capa de enlace.
   - **Componentes**: Los encabezados y trailers típicamente incluyen direcciones de origen y destino, información de control, y a menudo checksums para error checking.

4. **Control de Flujo**:
   - **Definición**: Regula la velocidad de transmisión de datos para evitar que el emisor sobrecargue al receptor.
   - **Métodos**: Puede implementarse mediante mecanismos de retroalimentación entre emisor y receptor, como en el protocolo Ethernet.

5. **Delimitación de tramas**:
   - **Definición**: Determina dónde comienza y termina cada trama, lo cual es esencial para la correcta extracción y procesamiento de los datos.
   - **Métodos**: Uso de secuencias especiales de bytes que no se encuentran en los datos normales para señalar límites de tramas.

`Servicios Prestados por la Capa de Enlace de Datos`

- **Confiabilidad de la Transmisión**: Asegura que los datos transmitidos lleguen sin errores, en secuencia y sin pérdidas ni duplicaciones.
- **Interconexión de Redes**: Facilita la interconexión entre diferentes tecnologías de red física mediante adaptaciones en el enlace de datos.
- **Control de Topología**: Gestiona cómo los dispositivos están organizados y comunican en la red, ayudando a organizar y optimizar la estructura de la red.
- **Gestión**: Proporciona medios para diagnosticar problemas y administrar el rendimiento de la red en la capa de enlace.

`Conclusión`

La capa de enlace de datos es crucial en la arquitectura de red, proporcionando la base para una comunicación fiable y efectiva entre dispositivos en la misma red. Esta capa asegura que, pese a las imperfecciones del medio físico y las limitaciones de los dispositivos, la comunicación pueda llevarse a cabo de manera eficiente y controlada.

---

### Ejercicio 2

`Compare los servicios de la capa de enlace con los de la capa de transporte.`



---
### Ejercicio 3
---
### Ejercicio 4
---
### Ejercicio 5
---
### Ejercicio 6
---
### Ejercicio 7
---
### Ejercicio 8
---
### Ejercicio 9
---
### Ejercicio 10
---
### Ejercicio 11
---
### Ejercicio 12
---
### Ejercicio 13
