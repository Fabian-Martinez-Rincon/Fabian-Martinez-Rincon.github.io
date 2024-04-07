---
layout: ../../layouts/MarkdownPostLayout.astro
title: Practicando DNS
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/dns.webp'
    alt: "Redes."
pubDate: 2024-04-07
tags: ["HTTP", "HTTP 1.0", "HTTP 1.1"]
---


Queria tener un resumen a medida que voy haciendo la practica, separando bien la teoria de la practica


## Conceptos antes de la practica

<details><summary>DNS</summary>

`Investigue y describa cómo funciona el DNS.`

El Sistema de Nombres de Dominio (DNS) traduce nombres de dominio amigables para el humano (como "www.example.com") a direcciones IP numéricas (como "192.0.2.1") que las computadoras utilizan para identificar entre sí en la red.

`¿Cuál es su objetivo?`

El objetivo del DNS es permitir a las personas acceder a sitios web utilizando nombres de dominio fáciles de recordar en lugar de las complicadas direcciones IP, facilitando así la navegación en internet. Funciona a través de una red distribuida de servidores que resuelven nombres de dominio a direcciones IP.

</details>

<details><summary>Root Server</summary>

`¿Qué es un root server?`

Un **servidor raíz** (root server) en el contexto del DNS es uno de los servidores DNS que contiene una lista completa de los nombres de dominio y sus direcciones IP asociadas para los dominios de nivel superior (TLDs). Es la primera parada en la resolución de nombres de dominio en Internet, dirigida a encontrar la dirección IP de un TLD específico. Los root servers son una parte crítica de la infraestructura de Internet, asegurando que la resolución de nombres funcione de manera eficiente y efectiva.

</details>

<details><summary>Top Level Domain</summary>

`¿Qué es un generic top-level domain (gtld)?`

Un **dominio de nivel superior genérico** (generic top-level domain o gTLD) es una categoría de dominios de nivel superior en el DNS que no está asociada a un país específico. Originalmente, los gTLDs incluían dominios como .com, .org, .net, entre otros, destinados a entidades comerciales, organizaciones y redes. Desde 2012, el número de gTLDs se ha expandido significativamente para incluir una amplia variedad de nombres como .academy, .bike, .beer, entre otros, permitiendo una mayor personalización y especificación para las direcciones de sitios web .

</details>

<details><summary>Consultas Iterativas vs Consultas Recursivas</summary>

`¿Qué diferencia una consulta DNS recursiva de una iterativa?`

La diferencia principal entre una consulta DNS recursiva y una iterativa radica en el método de resolución y el grado de trabajo realizado por los servidores de nombres involucrados:

**Consulta DNS recursiva**:
En una consulta recursiva, el cliente (generalmente el resolver DNS del sistema operativo del usuario) solicita una resolución completa del nombre a un servidor DNS. Si este servidor no tiene la respuesta en su caché, se hace cargo de la tarea completa de resolver la dirección, realizando tantas consultas adicionales como sean necesarias a otros servidores DNS en la jerarquía para obtener la respuesta definitiva. Una vez que tiene la respuesta completa, se la devuelve al cliente original. Este método es más cómodo para el cliente, ya que solo tiene que hacer una solicitud y esperar la respuesta sin realizar más acciones.

**Consulta DNS iterativa**:
En una consulta iterativa, el cliente solicita una dirección a un servidor DNS, pero si este servidor no tiene la respuesta exacta, en lugar de resolver la consulta por completo, devuelve la mejor referencia que tiene a otro servidor DNS más cercano a la información solicitada. Luego, el cliente es responsable de consultar a este nuevo servidor DNS. Este proceso se repite iterativamente: el cliente va de servidor en servidor hasta que encuentra uno que pueda responder la pregunta directamente (con una respuesta autoritativa) o hasta que se agotan los servidores a consultar. En este caso, el trabajo de resolver el nombre se distribuye entre el cliente y varios servidores DNS.

La consulta recursiva es generalmente utilizada por los clientes finales ya que simplifica el proceso de resolución, mientras que la iterativa es utilizada entre servidores DNS para distribuir la carga y controlar el flujo de información.

</details>


<details><summary>Respuesta autoritativa</summary>

`¿Qué es una respuesta del tipo autoritativa?`

Una **respuesta autoritativa** en DNS es aquella que proviene de un servidor de nombres que tiene la autoridad directa sobre el nombre de dominio consultado. Esto significa que el servidor de nombres puede proporcionar una respuesta definitiva a una consulta de nombre de dominio sin tener que referirse a otro servidor de nombres. Las respuestas autoritativas se utilizan para confirmar la existencia de un registro de dominio y su correspondiente información, como la dirección IP asociada. En el proceso de resolución de nombres de DNS, una respuesta autoritativa se considera la fuente definitiva y fiable para la información solicitada sobre un dominio .

</details>

<details><summary>Servidor Primario y Servidor Secundario</summary>

`Cuando un dominio cuenta con más de un servidor, uno de ellos es el primario (o maestro) y todos los demás son los secundarios (o esclavos).`

La configuración de servidores DNS primarios (maestros) y secundarios (esclavos) se utiliza para la gestión eficaz de los registros DNS y para asegurar la redundancia y consistencia de la información de dominio a través de Internet.

`¿Cuál es la razón de que sea así?`

1. **Sincronización y Consistencia de Datos**: El servidor DNS primario mantiene la versión autoritativa de los registros de zona del dominio. Cualquier cambio en la configuración del DNS, como añadir o modificar registros A, MX, CNAME, etc., se realiza primero en el servidor primario. Los servidores secundarios luego sincronizan estos cambios desde el primario, asegurando que todos los servidores proporcionen respuestas consistentes a las consultas DNS.

2. **Redundancia y Disponibilidad**: Al tener múltiples servidores DNS secundarios, se garantiza que si el servidor primario falla o se vuelve inaccesible, los servidores secundarios pueden continuar respondiendo las consultas DNS, manteniendo la disponibilidad del servicio o sitio web asociado al dominio. Esto es crucial para la alta disponibilidad y la resistencia a fallos.

3. **Distribución de Carga**: Los servidores secundarios también ayudan a distribuir la carga de las solicitudes DNS, especialmente para sitios web de alto tráfico. Al distribuir las consultas entre varios servidores, se reduce la carga en el servidor primario y se mejora el tiempo de respuesta para los usuarios finales.

4. **Seguridad**: En algunos casos, mantener los servidores secundarios puede aumentar la seguridad. Por ejemplo, se puede configurar el servidor primario en una red segura, no accesible directamente desde Internet, y solo permitir que los servidores secundarios, ubicados en diferentes redes, sincronicen los datos y respondan a las solicitudes externas.

5. **Eficiencia en la Actualización de Datos**: Al realizar cambios solo en el servidor primario, se simplifica la administración de los registros DNS. Los servidores secundarios automáticamente obtienen y replican estos cambios a través de un proceso llamado transferencia de zona, lo que facilita la gestión de los registros DNS para los administradores.

Esta estructura de primario-secundario asegura que los cambios se propaguen de manera controlada y eficiente a través de la infraestructura de DNS, manteniendo la integridad y la disponibilidad de los datos críticos para el funcionamiento de Internet.

</details>

`Registros DNS`

<details><summary>A (Address Record)</summary>

Asocia un nombre de dominio con una dirección IPv4. Este registro se utiliza para traducir nombres de dominio a sus correspondientes direcciones IP para que los navegadores puedan encontrar y acceder a los sitios web.

</details>


<details><summary>MX (Mail Exchange Record)</summary>

Indica el servidor de correo que debe ser utilizado para entregar el correo electrónico a un dominio. Este registro es esencial para la configuración del correo electrónico y dirige el correo entrante a los servidores de correo adecuados.

</details>


<details><summary>PTR (Pointer Record)</summary>

Realiza la función opuesta a la de los registros A y AAAA; asocia una dirección IP con un nombre de dominio canónico. Se utiliza principalmente para la resolución inversa de DNS, es decir, cuando se traduce una dirección IP en un nombre de dominio.

</details>


<details><summary>AAAA (IPv6 Address Record)</summary>

Similar al registro A, pero se utiliza para asociar un nombre de dominio con una dirección IPv6.

</details>


<details><summary>SRV (Service Record)</summary>

Proporciona información sobre los servicios disponibles en un dominio. Especifica el nombre de host y el puerto para servicios específicos (como VoIP o mensajería instantánea), permitiendo a los dominios definir la localización de servidores y servicios específicos.

</details>


<details><summary>NS (Name Server Record)</summary>

Especifica los servidores DNS autorizados para un dominio. Estos servidores DNS son los que contienen los registros DNS de ese dominio y pueden responder consultas relativas a él.

</details>


<details><summary>CNAME (Canonical Name Record)</summary>

Permite que un dominio se asocie con otro nombre de dominio, el "nombre canónico". Se utiliza para apuntar varios nombres de dominio a un mismo lugar, facilitando la gestión de sitios que pueden ser accedidos mediante múltiples nombres.

</details>


<details><summary>SOA (Start of Authority Record)</summary>

Contiene información esencial sobre el dominio y la zona, como el servidor DNS principal, el correo electrónico del administrador, el intervalo de actualización y la caducidad. Es el registro inicial de cualquier zona de DNS y establece la autoridad del dominio.

</details>


<details><summary>TXT (Text Record)</summary>

Permite que los administradores inserten texto arbitrario en un registro DNS. Comúnmente se utiliza para verificar la propiedad del dominio, implementar políticas de seguridad del correo electrónico como SPF (Sender Policy Framework) y DKIM (DomainKeys Identified Mail), y otras aplicaciones que requieren leer datos en forma de texto de los registros DNS.

</details>

## Practica

---

- [dig www.redes.unlp.edu.ar A](#registro-a)
- [dig redes.unlp.edu.ar NS](#registro-ns)

---

#### Registro A

```bash
dig www.redes.unlp.edu.ar A
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6cfae24c-e2bf-4c02-8b9c-b49675bf434b)

Esta salida del comando `dig` muestra los resultados de una consulta DNS para obtener el registro A (dirección IPv4) de `www.redes.unlp.edu.ar`. Aquí te desgloso la información:

- **Línea de comando**: Muestra la versión de `dig` utilizada y la consulta realizada, en este caso, una solicitud del registro A para `www.redes.unlp.edu.ar`.

- **Global options**: Las opciones globales aplicadas a la consulta, en este caso, `+cmd`, que indica que se está mostrando el comando que se ejecutó.

- **Got answer**: Indica que se recibió una respuesta a la consulta.

- **HEADER**: Muestra los detalles de la respuesta:
  - `opcode: QUERY`: Es una consulta estándar.
  - `status: NOERROR`: La consulta se completó sin errores.
  - `id: 52809`: Es el identificador de la sesión de la consulta, útil para emparejar solicitudes y respuestas.
  - `flags`: 
    - `qr`: Indica que la respuesta es un resultado de consulta.
    - `aa`: Autoritativo Answer (respuesta autoritativa), lo que significa que el servidor que respondió tiene autoridad directa sobre el dominio.
    - `rd`: Recursion Desired (recursión deseada), la consulta solicitaba que se realizara recursión si fuera necesario.
    - `ra`: Recursion Available (recursión disponible), el servidor puede hacer consultas recursivas.

- **QUESTION SECTION**: Muestra la pregunta realizada, solicitando el registro A para `www.redes.unlp.edu.ar`.

- **ANSWER SECTION**: Proporciona la respuesta a la consulta:
  - `www.redes.unlp.edu.ar. 300 IN A 172.28.0.50`: Indica que el dominio `www.redes.unlp.edu.ar` tiene una dirección IPv4 (`A`) de `172.28.0.50`, con un TTL (Time To Live) de 300 segundos, lo que significa que este resultado puede ser almacenado en caché por hasta 300 segundos antes de requerir una nueva consulta.

- **Query time**: Tiempo que tomó realizar la consulta, en este caso, 0 milisegundos.

- **SERVER**: Dirección IP y puerto del servidor DNS que respondió a la consulta (`172.28.0.29` en el puerto 53).

- **WHEN**: Fecha y hora de cuando se realizó la consulta.

- **MSG SIZE rcvd**: Tamaño del mensaje recibido, en este caso, 94 bytes.

La salida proporciona una visión detallada de cómo se resuelve una dirección web a su correspondiente dirección IP a través de DNS, incluyendo la respuesta específica proporcionada por el servidor DNS consultado.

---

#### Registro NS

```bash
dig redes.unlp.edu.ar NS
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c0571a90-f08d-42b7-b51e-5715aa4be098)

### Consulta

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6b1c7fa3-1684-4eff-8d6a-78d7ba7e2ac6)

### Respuesta

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1ad414e9-537e-4828-8d63-3d6576a41359)