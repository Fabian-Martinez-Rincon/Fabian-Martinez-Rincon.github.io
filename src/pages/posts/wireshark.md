---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Wireshark'
pubDate: 2022-10-04
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/wireshark.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["linux", "vim", "bash"]

# url: '/posts/vim.jpg'
#https://docs.astro.build/assets/arc.webp
---

Nos vamos a basar en un ejercicio para redes que se me complico bastante

# No te asustes, es solo para ver la ip de las interfaces

Hubo una pregunta que me solicitaba buscar el trafico de la interfaz y solo me habian dado la `IP` por eso este quilombo

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5e11bc6a-83be-4d29-a956-1d8ca6428699)

1. **lo (Loopback Interface)**: Permite a la máquina comunicarse consigo misma. Es utilizado principalmente para pruebas y desarrollo.

2. **enp0s3 (Ethernet Interface)**: Esta es tu interfaz de red principal conectada a la red externa, probablemente a través de Ethernet o una conexión similar.

3. **br-c8ee5a5c812e (Network Bridge)**: Utilizado para conectar dos redes, común en ambientes de virtualización como Docker, permitiendo que los contenedores se comuniquen entre sí y con el host.

4. **docker0**: Un puente de red creado por Docker. Normalmente se utiliza para la comunicación de red entre los contenedores Docker y el host del sistema.

5. **vethXXXXX (Virtual Ethernet Devices)**: Estos son dispositivos de red virtuales utilizados por Docker para conectar contenedores individuales al puente de Docker o a otros dispositivos de red.

Cada entrada muestra el estado de la interfaz, configuraciones como MTU (Maximum Transmission Unit), y direcciones IP asignadas. Las interfaces `veth` están asociadas con entornos de red específicos, típicamente contenedores Docker, lo que permite su aislamiento y gestión de red independiente.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f4750ec0-84ee-4110-bdbe-ac801f867c1a)

El comando `netstat -i` muestra la tabla de interfaces de red del kernel. Para cada interfaz, indica:

- **MTU (Maximum Transmission Unit)**: El tamaño máximo de paquete que la interfaz puede manejar.
- **RX-OK**: Número de paquetes recibidos correctamente.
- **RX-ERR**: Número de paquetes recibidos con errores.
- **RX-DRP**: Número de paquetes recibidos descartados.
- **RX-OVR**: Número de errores de desbordamiento en la recepción.
- **TX-OK**: Número de paquetes enviados correctamente.
- **TX-ERR**: Número de paquetes enviados con errores.
- **TX-DRP**: Número de paquetes enviados descartados.
- **TX-OVR**: Número de errores de desbordamiento en el envío.
- **Flg (Flags)**: Indica el estado de la interfaz (B: broadcast, M: multicast, R: running, U: up, L: loopback).

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d142d210-f937-4b57-894a-1dbbb88a8e3a)

---

## Todo lo anterior fue para poder entrar a wireshark (saber la interfaz de la `IP`)

Tenemos que abrir `Wireshark` usando sudo, sino, no captura el trafico. Y en otra terminal usamos curl sobre algo.

> IMPORTANTE: Para que te funcione tenes que estar ejecutando curls constantemente o cuando desees ver la respuesta en otra terminal.

Por ejemplo

```bash
curl https://www.google.com
```

este usamos en la catedra

```bash
curl www.redes.unlp.edu.ar
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/44ff28a2-5ef4-4466-ad13-397fd0306b66)

```bash
curl -I www.redes.unlp.edu.ar
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3ce5cf8e-66ae-4286-91d1-63e05cac3f54)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/38dc2ea3-8c37-41b1-85ab-c7750c939ae9)

La captura de pantalla muestra una sesión de Wireshark, una herramienta utilizada para analizar el tráfico de red. En ella, podemos ver varios paquetes de datos intercambiados entre dispositivos en la red:

- **Paquetes DNS (Domain Name System)**: Estos paquetes se utilizan para la resolución de nombres de dominio. Por ejemplo, convertir "www.redes.unlp.edu.ar" en una dirección IP.
- **Paquetes TCP (Transmission Control Protocol)**: Muestran la comunicación entre dos dispositivos, incluidos los detalles de la conexión como sincronización (SYN), acuse de recibo (ACK), y finalización (FIN).
- **Paquetes HTTP (Hypertext Transfer Protocol)**: Son solicitudes y respuestas de datos web, como solicitudes de páginas web (indicado por `GET`) y respuestas del servidor (`HTTP/1.1 200 OK` indica una respuesta exitosa).
- **Paquetes ARP (Address Resolution Protocol)**: Se utilizan para mapear una dirección IP a una dirección MAC en la red local.

Cada fila representa un paquete diferente, y las columnas proporcionan información como el tiempo, las direcciones de origen y destino, el protocolo utilizado y una breve descripción del contenido del paquete.