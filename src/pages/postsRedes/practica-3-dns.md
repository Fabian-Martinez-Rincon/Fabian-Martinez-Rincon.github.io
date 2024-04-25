---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'DNS'
pubDate: 2024-04-13
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/dns.webp'
    alt: 'El logotipo completo de Astro.'
tags: ["linux", "vim", "bash"]

---

## Introducción

<details><summary>Investigue y describa cómo funciona el DNS.</summary>

El Sistema de Nombres de Dominio (DNS) traduce nombres de dominio amigables para el humano (como "www.example.com") a direcciones IP numéricas (como "192.0.2.1") que las computadoras utilizan para identificar entre sí en la red.

</details>

<details><summary>¿Cuál es su objetivo?</summary>

El objetivo del DNS es permitir a las personas acceder a sitios web utilizando nombres de dominio fáciles de recordar en lugar de las complicadas direcciones IP, facilitando así la navegación en internet. Funciona a través de una red distribuida de servidores que resuelven nombres de dominio a direcciones IP.

</details>

<details><summary>¿Qué es un root server?</summary>

Un servidor raíz (root server) en el contexto del Sistema de Nombres de Dominio (DNS) es uno de los servidores DNS clave que contienen las direcciones de los servidores de nombres para todos los dominios de nivel superior (TLDs) como `.com`, `.org`, `.net`, `.gov`, entre otros. Los servidores raíz son una parte crítica de la infraestructura de Internet porque son la primera parada en la resolución de nombres de dominio cuando la información no está ya en la caché del servidor DNS local.

Existen 13 servidores raíz, identificados por las letras A a M. Cada uno de estos servidores raíz opera en múltiples ubicaciones geográficas utilizando tecnología de Anycast para proporcionar estabilidad y redundancia.

### Cómo Ver un Ejemplo de Servidor Raíz Usando Comandos

Puedes utilizar el comando `dig` para consultar los servidores raíz y ver cómo responden con la lista de servidores de nombres para los TLDs. Aquí te muestro cómo hacerlo:

1. **Listar todos los servidores raíz DNS**:
   ```bash
   dig NS .
   ```

   Este comando te mostrará la lista de los servidores de nombres raíz. La respuesta de `dig` incluirá una sección `ANSWER` que lista los nombres de los servidores raíz y sus direcciones IP correspondientes.

2. **Seleccionar un servidor raíz y hacer una consulta directa**:
   Para ilustrar, vamos a seleccionar el servidor raíz `a.root-servers.net` para obtener más información sobre el dominio TLD `.com`.

   ```bash
   dig @a.root-servers.net com NS
   ```

   Este comando consulta directamente al servidor raíz `A` para los servidores de nombres que administran el TLD `.com`. La opción `@` en `dig` se usa para especificar el servidor DNS que quieres consultar directamente.

### Ejemplo Práctico en el Terminal

Supongamos que ejecutas los siguientes comandos en tu terminal:

```bash
dig NS .
```

Este comando podría devolver algo como:

```bash
; <<>> DiG 9.10.6 <<>> NS .
;; global options: +cmd
.			518400	IN	NS	a.root-servers.net.
.			518400	IN	NS	b.root-servers.net.
.			518400	IN	NS	c.root-servers.net.
...
```

Luego, al consultar directamente al servidor raíz `A` para el TLD `.com`:

```bash
dig @a.root-servers.net com NS
```

Podrías recibir una respuesta como:

```bash
; <<>> DiG 9.10.6 <<>> @a.root-servers.net com NS
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 43521
;; flags: qr rd; QUERY: 1, ANSWER: 0, AUTHORITY: 13, ADDITIONAL: 14
;; QUESTION SECTION:
;com.				IN	NS

;; AUTHORITY SECTION:
com.			172800	IN	NS	a.gtld-servers.net.
com.			172800	IN	NS	b.gtld-servers.net.
com.			172800	IN	NS	c.gtld-servers.net.
...
```

Este ejemplo muestra cómo los servidores raíz dirigen las consultas hacia los servidores de nombres específicos para los TLDs, facilitando así la resolución de nombres en toda la red global de Internet.

</details>

<details><summary>¿Qué es un generic top-level domain (gtld)?</summary>

Un **Generic Top-Level Domain (gTLD)** es una categoría de dominios de nivel superior en el Sistema de Nombres de Dominio (DNS) de Internet que no está asociada con un país específico. Los gTLDs son uno de los tipos de dominios más reconocidos y utilizados en Internet. Están destinados a usos generales por comunidades de usuarios, generalmente organizados por tema o tipo de entidad, a diferencia de los ccTLDs (Country Code Top-Level Domains) que están específicamente asociados a países o territorios.

### Características de los gTLDs

1. **Generalidad**: Como su nombre lo indica, los gTLDs son genéricos, lo que significa que están destinados a un amplio uso por parte de la población de Internet sin restricciones específicas basadas en la geografía.

2. **Diversidad**: Los gTLDs abarcan una amplia gama de nombres que reflejan diferentes tipos de organizaciones, actividades comerciales, aplicaciones y grupos de usuarios. Incluyen dominios como `.com`, `.org`, `.net`, `.info`, `.biz`, y muchos otros.

3. **Administración**: Los gTLDs son supervisados por la ICANN (Internet Corporation for Assigned Names and Numbers), que es responsable de la gestión del espacio de nombres DNS, la asignación de espacio de direcciones IP, la asignación de identificadores de protocolo, y la gestión del sistema de servidores raíz.

### Ejemplos de gTLDs

- **.com**: Inicialmente destinado para entidades comerciales, es ahora el gTLD más ampliamente utilizado y puede ser registrado por cualquier persona o entidad.
  
- **.org**: Destinado originalmente para organizaciones que no encajaban en ninguna otra categoría (como las no comerciales y las sin fines de lucro), también es ampliamente utilizado por escuelas, comunidades, proyectos, y grupos personales.
  
- **.net**: Originalmente para organizaciones involucradas en tecnologías de redes, como proveedores de Internet y otras infraestructuras de red, aunque ahora está abierto a cualquier persona.

- **.info**: Uno de los primeros gTLDs introducidos que estaba destinado para sitios de información, pero no tiene restricciones de uso.

- **.biz**: Diseñado para uso comercial (negocios), como una alternativa a `.com`.

### Nuevos gTLDs

Con el programa de Nuevos gTLDs que la ICANN comenzó en 2012, se han introducido cientos de nuevos gTLDs para proporcionar mayor diversidad y opciones en el espacio de nombres de Internet. Estos incluyen dominios como `.photography`, `.guru`, `.club`, y `.city`, entre otros. Estos nuevos gTLDs permiten una mayor personalización y especificidad en los nombres de dominio, facilitando que las empresas y particulares elijan nombres que están más estrechamente alineados con sus actividades o intereses.

En resumen, los gTLDs son una parte esencial de la estructura de DNS, proporcionando un marco para clasificar y organizar los nombres de dominio de Internet. Con la expansión de los gTLDs, el paisaje de Internet sigue evolucionando, ofreciendo más opciones y oportunidades para la personalización y la innovación en el espacio en línea.

</details>

<details><summary>¿Qué es una respuesta del tipo autoritativa?</summary>

Una respuesta autoritativa en el contexto del Sistema de Nombres de Dominio (DNS) es una respuesta que proviene directamente de un servidor DNS que tiene autoridad sobre el dominio específico que está siendo consultado. Es decir, el servidor DNS que responde tiene datos directos y oficiales sobre los registros DNS del dominio, sin necesidad de referirse a otro servidor DNS para obtener esa información.

### Características de una Respuesta Autoritativa

1. **Exactitud**: La respuesta proviene de un servidor que gestiona directamente los registros del dominio, lo que garantiza que la información es exacta y actualizada.
2. **Directa**: No depende de la información almacenada en caché o proporcionada por servidores intermedios.
3. **Flag AA (Authoritative Answer)**: En los resultados de consultas DNS, la respuesta autoritativa está marcada con un flag AA (Authoritative Answer) que indica que la respuesta proviene de un servidor con autoridad sobre el dominio.

### Ejemplo Práctico Usando `dig`

Para ilustrar una respuesta autoritativa, podemos usar el comando `dig` para consultar un servidor de nombres específico que es autoritativo para un dominio. Vamos a tomar como ejemplo el dominio "example.com", consultando directamente a uno de sus servidores DNS autoritativos:

1. **Encontrar el servidor de nombres autoritativo**:
   
   Primero, encontramos los servidores de nombres para el dominio "example.com".

   ```bash
   dig NS example.com
   ```

   Supongamos que esto devuelve `ns1.example.com` como uno de los servidores de nombres autoritativos.

2. **Consultar directamente al servidor autoritativo**:

   Luego, hacemos una consulta directa a `ns1.example.com` para obtener un registro específico (por ejemplo, un registro A para "www.example.com"):

   ```bash
   dig @ns1.example.com www.example.com A
   ```

   En esta consulta, `@ns1.example.com` especifica que queremos que `dig` consulte directamente a ese servidor de nombres. La respuesta que recibamos tendrá el flag AA establecido, indicando que es una respuesta autoritativa.

### Verificación del Flag Autoritativo

Cuando usas `dig`, puedes verificar si una respuesta es autoritativa observando el campo de flags en la salida. Busca `aa` en la línea de flags, lo cual está presente cuando la respuesta es autoritativa.

```bash
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
```

En este ejemplo, `aa` indica que la respuesta es autoritativa.

### Importancia de las Respuestas Autoritativas

Las respuestas autoritativas son cruciales para la integridad y la confiabilidad del DNS. Aseguran que la información que recibe un usuario o un sistema sobre un dominio es precisa y proviene de una fuente fiable y controlada, lo cual es especialmente importante para operaciones críticas como la configuración de servicios en línea, seguridad y correo electrónico.

En resumen, las respuestas autoritativas del DNS son fundamentales para el funcionamiento correcto y seguro de Internet, y herramientas como `dig` te permiten verificar y entender cómo se resuelven estas consultas en la práctica.
</details>


<details><summary>¿Qué diferencia una consulta DNS recursiva de una iterativa?</summary>

En el Sistema de Nombres de Dominio (DNS), las consultas pueden procesarse de dos formas principales: **recursiva** e **iterativa**. Estas dos modalidades difieren en cómo un servidor DNS maneja las solicitudes de resolución de nombres de dominio cuando no tiene la información requerida en su caché.

### Consulta DNS Recursiva

En una consulta DNS recursiva, el cliente (generalmente el sistema operativo del dispositivo del usuario o el resolver de DNS del ISP) pide a un servidor DNS que resuelva un nombre de dominio y le devuelva la respuesta definitiva. El cliente espera que el servidor maneje completamente la resolución del nombre:

1. **Responsabilidad Total**: Si el servidor DNS recursivo no tiene la información requerida ya en su caché, asume la responsabilidad de obtener esa información. No devuelve el control al cliente hasta que ha resuelto la dirección o determinado que no puede hacerlo.

2. **Proceso de Resolución**: El servidor DNS recursivo consultará otros servidores DNS en nombre del cliente. Comenzará por los servidores raíz, seguirá con los servidores de nombres de dominios de nivel superior (TLDs), y continuará hasta llegar a los servidores DNS autoritativos para el dominio específico en cuestión.

3. **Ventajas**: Proporciona una experiencia simplificada al cliente, ya que solo requiere una solicitud y espera una respuesta, sin necesidad de realizar seguimientos adicionales.

### Consulta DNS Iterativa

En una consulta DNS iterativa, el servidor DNS no resuelve completamente la solicitud por sí solo. En cambio, proporciona al cliente la mejor respuesta que tiene y, si es necesario, direcciones de otros servidores DNS que pueden saber más:

1. **Responsabilidad Parcial**: Cuando un cliente hace una consulta iterativa a un servidor DNS y este servidor no tiene la respuesta en su caché, este responderá con la dirección de un servidor DNS que esté más cerca de la respuesta. El cliente es responsable de consultar al siguiente servidor recomendado.

2. **Proceso de Resolución**: El servidor DNS proporciona referencias a otros servidores DNS (por ejemplo, un servidor raíz DNS dirá al cliente que consulte a un servidor DNS específico de un TLD). El cliente sigue consultando a cada servidor recomendado hasta que obtiene la respuesta final o agota las opciones.

3. **Ventajas**: Reduce la carga en cada servidor DNS individual, ya que cada servidor no tiene que completar la resolución completa por cuenta propia. Permite a los clientes controlar el proceso de resolución y gestionar el tiempo de espera y las respuestas fallidas de manera más directa.

### Ejemplo Ilustrativo con Comandos

Si quisieras ver cómo funcionan estas consultas en la práctica, podrías usar herramientas como `dig` en un sistema Linux o macOS, o `nslookup` en Windows. Por ejemplo, con `dig`:

```bash
# Ejemplo de consulta recursiva (por defecto con dig)
dig www.example.com

# Ejemplo de consulta iterativa
dig +trace www.example.com
```

En el caso de `dig +trace`, `dig` realiza una simulación de una consulta iterativa mostrando cada paso del proceso, desde los servidores raíz hasta los servidores autoritativos para el dominio. Esto ilustra cómo un cliente podría manejar una consulta iterativa.

### Conclusión

La elección entre consultas recursivas e iterativas depende de las necesidades de configuración del sistema, las preferencias de administración de red y los requisitos de desempeño y seguridad. Las consultas recursivas simplifican la resolución para los clientes, mientras que las iterativas ofrecen mayor control y potencialmente reducen la carga sobre los servidores DNS individuales.

#### PARA PARA, TODAVIA NO PROBAMOS LOS COMANDOS

```bash
dig www.redes.unlp.edu.ar
```

```bash
; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 4692
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 2d4327c415909aa401000000661b3ae6a70f3f8d9d721ca0 (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	A

;; ANSWER SECTION:
www.redes.unlp.edu.ar.	300	IN	A	172.28.0.50

;; Query time: 4 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sat Apr 13 23:09:42 -03 2024
;; MSG SIZE  rcvd: 94

```

La salida del comando `dig` que ejecutaste para la dirección `www.redes.unlp.edu.ar` muestra varios componentes del proceso de resolución DNS y provee información detallada sobre la consulta. Aquí te explico cada parte de la salida para entender mejor lo que está sucediendo:

#### HEADER Section
- **opcode: QUERY**: Esto indica que el tipo de operación solicitada fue una consulta.
- **status: NOERROR**: Indica que la consulta se completó sin errores.
- **id: 4692**: Es un identificador único de la transacción DNS. Utilizado para emparejar respuestas con solicitudes.
- **flags**: 
  - **qr (Query Response)**: Indica que esta es una respuesta a una consulta.
  - **aa (Authoritative Answer)**: Significa que el servidor que respondió tiene autoridad sobre el dominio, ofreciendo una respuesta autoritativa.
  - **rd (Recursion Desired)**: Muestra que el cliente solicitó que el servidor realice una búsqueda recursiva.
  - **ra (Recursion Available)**: Indica que el servidor puede hacer consultas recursivas.

### OPT PSEUDOSECTION
- **EDNS (Extension Mechanisms for DNS) version: 0**: Esto es una extensión de DNS que permite funcionalidades adicionales.
- **udp: 1232**: El tamaño máximo del mensaje UDP que el servidor DNS puede manejar.
- **COOKIE**: Es una extensión de seguridad para autenticar y autorizar la transacción DNS.

#### QUESTION SECTION
- **;www.redes.unlp.edu.ar.		IN	A**: Esto muestra la pregunta realizada, que busca el registro A (dirección IPv4) para `www.redes.unlp.edu.ar`.

### ANSWER SECTION
- **www.redes.unlp.edu.ar.	300	IN	A	172.28.0.50**: Esta es la respuesta, mostrando que `www.redes.unlp.edu.ar` está asociado con la dirección IP `172.28.0.50`. El `300` es el TTL (Time to Live), que indica en segundos cuánto tiempo puede ser cacheada esta respuesta antes de requerir una actualización.

### Additional Information
- **Query time: 4 msec**: Tiempo que tomó realizar la consulta, en este caso, 4 milisegundos.
- **SERVER: 172.28.0.29#53(172.28.0.29)**: Dirección IP y puerto del servidor DNS que respondió a la consulta.
- **WHEN**: Fecha y hora en la que se realizó la consulta.
- **MSG SIZE rcvd: 94**: Tamaño del mensaje de respuesta recibido en bytes.

### Resumen
El comando `dig` ejecutado realizó correctamente la consulta DNS para el dominio `www.redes.unlp.edu.ar` y obtuvo una respuesta autoritativa indicando que la dirección IP asociada con este dominio es `172.28.0.50`. La consulta fue resuelta rápidamente (en 4 milisegundos) y la respuesta incluye detalles de configuración EDNS y medidas de seguridad como cookies de DNS. Esto demuestra que el servidor DNS configurado está funcionando correctamente y puede resolver consultas para el dominio especificado de manera eficaz y segura.

#### NOS QUEDA EL ITERATIVO


```bash
dig +trace www.redes.unlp.edu.ar
```

```bash
; <<>> DiG 9.16.27-Debian <<>> +trace www.redes.unlp.edu.ar
;; global options: +cmd
.			516425	IN	NS	m.root-servers.net.
.			516425	IN	NS	c.root-servers.net.
.			516425	IN	NS	i.root-servers.net.
.			516425	IN	NS	b.root-servers.net.
.			516425	IN	NS	d.root-servers.net.
.			516425	IN	NS	g.root-servers.net.
.			516425	IN	NS	a.root-servers.net.
.			516425	IN	NS	e.root-servers.net.
.			516425	IN	NS	h.root-servers.net.
.			516425	IN	NS	k.root-servers.net.
.			516425	IN	NS	l.root-servers.net.
.			516425	IN	NS	f.root-servers.net.
.			516425	IN	NS	j.root-servers.net.
.			516425	IN	RRSIG	NS 8 0 518400 20240426170000 20240413160000 5613 . b76jdsKNW1pvIKErb2EuvBW2DmpfBhRXB5PPKV1kwvHbgkib2JTPt51i 0DDpwaxJR7I/soLWEDJOGGwzx33AYXqhXLhQGlGxwvpEq4a9tV8sEJg7 FttTjkCW/wJnN1wFWxlTjy4u/E7bO/hzw4/mjdz3orLBPT7V0ydgiT7o xxPZDD0DDQ7eXdAFs9eEQs2RTwJWqgi2q49DA3ZxelxpdB7no5TI4VKM HIv0GGWWNWimRybEWV8sy6Rvx6CYHNIMKjAqAUzpf5oF78Q5prgo22Ro EGKWPIcaxU+57t+uZGZCwCG3uUuafbiOoOpS8+WiEWBiz5vel64iCNvH pCiqUA==
;; Received 1137 bytes from 172.28.0.29#53(172.28.0.29) in 0 ms

ar.			172800	IN	NS	a.lactld.org.
ar.			172800	IN	NS	c.dns.ar.
ar.			172800	IN	NS	d.dns.ar.
ar.			172800	IN	NS	e.dns.ar.
ar.			172800	IN	NS	f.dns.ar.
ar.			172800	IN	NS	ar.cctld.authdns.ripe.net.
ar.			86400	IN	DS	19606 8 2 4415CF1A2CF10DE94B92BC020F21D1BF4163B2E90F2A6F6A5D2A1740 339D566C
ar.			86400	IN	RRSIG	DS 8 1 86400 20240426170000 20240413160000 5613 . MGenw6Ik9gXDyLJNfh3kipGhjOcpGBSvWAdsWG4ydh5eq1HTJIGqxxKR mOiJuLG/Kw4ajwi5Htc6R0E+5pIa1QYwo6SWN6soZcwmwPzdJD41rOwH 85JPHqTTcbGZYGAk8SlD5xC4/eeRavK+mWZWmRWvkZrlOPpecNCtqkVZ Fs3xY/tEAjXhmXTNi8trm1qTMaCX4sqtJeJZyKihqXjJShAYXWyPoQF0 GyazHaNKOgV/prLq1pkaoqnexjM+v+KbWcAMo4eKic2F/3OjaRPes2yh ZduGH2cHCglPGm5pS/O4VHDiMVeEBj1RYydk+/XhgQWEAWscDQ13ASLk c4ZPIA==
;; Received 784 bytes from 199.7.83.42#53(l.root-servers.net) in 64 ms

unlp.edu.ar.		3600	IN	NS	ns1.riu.edu.ar.
unlp.edu.ar.		3600	IN	NS	unlp.unlp.edu.ar.
unlp.edu.ar.		3600	IN	NS	anubis.unlp.edu.ar.
unlp.edu.ar.		3600	IN	DS	13327 5 1 D56823AE3C414F9190D84EE063606918D04513D9
unlp.edu.ar.		3600	IN	DS	13327 5 2 898DC7FBFC8837E7F3AD30400354D54FE28FD94FBC5B7793CB88CF88 9B6AB63C
unlp.edu.ar.		3600	IN	RRSIG	DS 8 3 3600 20240509012234 20240408030001 30010 edu.ar. T1tr8uhwz8jGTXcMw0heD18gJ1SUa9SbBziwwzy2X8CRF7VOLGLQZwcE 0hC4G0Lr3adTa7mMdQzlgZxPzqQBt/6Qq+S5c/U1XhSd7QNyn8nm99kJ G+6z81qPZ7ybR9tN9M9OBMIt7lo6q/+5WL14cU3RSpjox7/v+BsLmXwb 7QQ=
;; Received 539 bytes from 200.108.148.50#53(c.dns.ar) in 128 ms

unlp.edu.ar.		3600	IN	SOA	anubis.unlp.edu.ar. root.anubis.unlp.edu.ar. 2024032620 28800 900 1209600 3600
unlp.edu.ar.		3600	IN	RRSIG	SOA 5 3 7200 20240514010002 20240414010002 44211 unlp.edu.ar. IdFIg5I8Tsqnbvqf0GU350BLHh5XdFuzxFMk+7R3ffnJ9SGir4NTWzFP 4e5UNJ2w1odTJGoeJohYsSgOBwoo5zy/1i6AqTlcQNbGdhwQi8ckc7dc MjAnosXYSlhySIUSn44bTNhKeS1mkNU4FwNiLNoZvzvimiM9xsCyL5j0 Hac=
unlp.edu.ar.		3600	IN	NSEC	_acme-challenge.unlp.edu.ar. A NS SOA MX TXT AAAA RRSIG NSEC DNSKEY
unlp.edu.ar.		3600	IN	RRSIG	NSEC 5 3 3600 20240425232106 20240326232106 44211 unlp.edu.ar. dokCs3L9XAyMGrlu1aAx01QvR7/aDnSzW1zJfWa2RlRnOpr9eWwQEyaN MzHzy4qqDsBMfDKk8wg5dqnRCR8AZiXtu+l6YX2L1bJbcBfF9ULZ6wOU mmRRsV3Wxa9KCf3ZyYdm4qoZZGnqTjfBvKJpnkC2/1EPQkslPzeo9jFV BkU=
www.reddemuseos.unlp.edu.ar. 3600 IN	NSEC	rediab.unlp.edu.ar. A RRSIG NSEC
www.reddemuseos.unlp.edu.ar. 3600 IN	RRSIG	NSEC 5 5 3600 20240425232106 20240326232106 44211 unlp.edu.ar. XESIof48Fv+GVXbRH+VnICQEX+WzmGlcVroawei/9oW2tO7t/iVFpqno Nk/xd/Jels87TfWv6x7CJoDSN/fo5mhBaOieG+c+pdw9Ow6LQKcUPqYo Z5fa3E/DjuLZjVKaNEXL9+21Fmd1adGm7ot8RTkEfJJNI0bIAzOtPCbr ct4=
;; Received 767 bytes from 170.210.0.18#53(ns1.riu.edu.ar) in 8 ms
```

El comando `dig +trace www.redes.unlp.edu.ar` que has ejecutado realiza una traza de la ruta que toma una consulta DNS desde los servidores raíz del DNS hasta los servidores específicos que manejan el registro de `www.redes.unlp.edu.ar`. Este comando es extremadamente útil para entender el proceso de resolución DNS y para identificar posibles problemas de configuración en la ruta de resolución de nombres. Aquí está la desglose de la salida proporcionada:

### Etapas de la Traza DNS

1. **Servidores Raíz**: 
   - La consulta comienza en los servidores raíz (`.root-servers.net`). Estos son los servidores más altos en la jerarquía DNS y tienen la responsabilidad de referir las consultas hacia los servidores de nombres de los dominios de nivel superior (TLDs) correspondientes.
   - Los servidores raíz proporcionan las direcciones de los servidores de nombres para el TLD `.ar`, que es relevante para este dominio.

2. **Servidores TLD para `.ar`**:
   - Los servidores para el TLD `.ar`, como `a.lactld.org` y otros servidores `dns.ar`, reciben la consulta de los servidores raíz.
   - Estos servidores de TLD son responsables de administrar todos los dominios que terminan en `.ar` y proporcionan las direcciones de los servidores de nombres específicos para el dominio `unlp.edu.ar`.

3. **Servidores de nombres para `unlp.edu.ar`**:
   - La consulta llega luego a los servidores de nombres específicos para `unlp.edu.ar` (`ns1.riu.edu.ar`, `unlp.unlp.edu.ar`, y `anubis.unlp.edu.ar`).
   - Estos servidores son los que realmente tienen la información autoritativa sobre subdominios dentro de `unlp.edu.ar`, incluyendo `www.redes.unlp.edu.ar`.

### Detalles Importantes de la Salida

- **Información de Seguridad (DNSSEC)**: 
  - `DS` (Delegation Signer) y `RRSIG` (Resource Record Signature) son registros relacionados con DNSSEC, que es un conjunto de extensiones de seguridad para proteger la información proporcionada por el DNS.
  - Estos registros son usados para verificar la integridad y autenticidad de las respuestas DNS, previniendo ataques como envenenamiento de caché y spoofing.

- **SOA (Start of Authority)**: 
  - Este registro aparece en la respuesta para `unlp.edu.ar` y contiene información administrativa sobre la zona, incluyendo el servidor primario, el contacto de correo electrónico, y varios temporizadores que afectan la operación del nombre de dominio.

- **NSEC (Next Secure Record)**:
  - Este es otro registro relacionado con DNSSEC, utilizado para proporcionar prueba de inexistencia de un registro DNS y para listar los tipos de registros existentes en un dominio.

### Conclusión

La salida del comando `dig +trace` muestra el camino completo que recorre una consulta DNS, desde los servidores raíz hasta los servidores autoritativos que finalmente contienen la información sobre el dominio solicitado. Observar estos pasos ayuda a comprender cómo se estructura y se administra el espacio de nombres global de Internet y también es vital para la resolución de problemas y la garantía de la configuración correcta del DNS.
</details>

<details><summary>¿Qué es el resolver?</summary>

En el contexto del Sistema de Nombres de Dominio (DNS), un **resolver** es un componente crucial que actúa como intermediario entre el usuario y los servidores DNS complejos para traducir los nombres de dominio en direcciones IP. El resolver, también conocido como "cliente DNS", es esencial para el funcionamiento diario de Internet, permitiendo a los usuarios acceder a los recursos web mediante nombres de dominio legibles por humanos en lugar de las direcciones IP numéricas.

### Funciones del Resolver

1. **Interpretación de Solicitudes**: Cuando escribes una URL en tu navegador, esta solicitud es recibida por el resolver DNS de tu sistema o red. El resolver interpreta y procesa esta solicitud para determinar cómo obtener la dirección IP asociada con el nombre de dominio.

2. **Caché de Resultados**: Para mejorar la eficiencia y reducir la carga en la red, el resolver almacena respuestas recientes en su caché. Si un nombre de dominio ha sido resuelto recientemente y la respuesta aún es válida según su Time To Live (TTL), el resolver puede devolver la dirección IP desde su caché sin necesidad de hacer más consultas externas.

3. **Consulta Recursiva**: Si la respuesta no está en la caché, el resolver puede actuar de manera recursiva. Esto significa que consultará otros servidores DNS en nombre del usuario para resolver el nombre de dominio de manera completa y transparente. Comienza con los servidores raíz, luego pasa a los servidores de los TLD (Top-Level Domain), y finalmente a los servidores de nombres autoritativos para el dominio específico, hasta obtener la información necesaria.

4. **Manejo de Fallos y Errores**: El resolver gestiona la lógica necesaria para manejar fallos en la red o respuestas erróneas de los servidores DNS, intentando diferentes servidores o métodos alternativos hasta resolver la solicitud de manera satisfactoria.

### Tipos de Resolvers

- **Stub Resolver**: Este tipo de resolver realiza funciones básicas y se encuentra típicamente en sistemas operativos de clientes. Generalmente envía consultas a un servidor DNS más equipado y no realiza el seguimiento completo de la consulta desde los servidores raíz hasta los autoritativos.

- **Recursive Resolver**: Un resolver recursivo, como los que operan los proveedores de servicios de internet (ISP) o servicios DNS públicos (como Google DNS, Cloudflare, etc.), realiza consultas completas partiendo de los servidores raíz hasta los servidores autoritativos para el dominio solicitado. Estos resolvers tienen la capacidad de manejar completamente el proceso de resolución DNS, almacenando caché y realizando consultas recursivas según sea necesario.

### Importancia del Resolver

La funcionalidad del resolver es esencial para la experiencia del usuario en Internet, ya que permite acceder a sitios web y otros recursos en línea mediante nombres de dominio fáciles de recordar en lugar de direcciones IP complejas. Además, al manejar eficientemente las consultas DNS, los resolvers contribuyen significativamente a la reducción del tráfico innecesario en la red y a la mejora general del rendimiento de Internet.

En resumen, el resolver DNS es una pieza fundamental de la infraestructura de Internet que facilita la comunicación entre los nombres de dominio y las direcciones IP, garantizando que los usuarios puedan acceder a los recursos de Internet de manera rápida y confiable.

</details>


Describa para qué se utilizan los siguientes tipos de registros de DNS:

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


---

## Ejercicio 7


<details><summary>En Internet, un dominio suele tener más de un servidor DNS. ¿Por qué cree que esto es así?</summary></details>

1. **Redundancia y Alta Disponibilidad**: La presencia de múltiples servidores DNS asegura que si uno falla debido a problemas técnicos, mantenimiento o ataques de denegación de servicio (DDoS), otro puede continuar resolviendo las solicitudes de nombres de dominio, manteniendo el sitio web o servicio accesible para los usuarios.

2. **Balanceo de carga**: Distribuir las solicitudes entre varios servidores DNS puede ayudar a manejar mejor el volumen de tráfico, evitando la sobrecarga en un único servidor y mejorando el tiempo de respuesta para las solicitudes de los usuarios.

3. **Resiliencia ante ataques**: Tener múltiples servidores DNS, idealmente en diferentes ubicaciones geográficas, puede ofrecer una mejor protección contra ataques dirigidos. Si un servidor es atacado, los otros pueden seguir funcionando, minimizando el impacto del ataque.

4. **Mejora del rendimiento y la velocidad de respuesta**: La presencia de servidores DNS en diferentes ubicaciones geográficas puede reducir la latencia al responder solicitudes de usuarios cercanos a esos servidores, mejorando así la experiencia general del usuario al acceder a un dominio.

5. **Descentralización**: La distribución de los servidores DNS contribuye a la descentralización de la infraestructura de Internet, haciéndola menos vulnerable a fallos o ataques que podrían afectar a un punto centralizado.

En resumen, tener múltiples servidores DNS mejora la robustez, seguridad y eficiencia del sistema de nombres de dominio en Internet, contribuyendo a una experiencia de usuario más fiable y rápida.

</details>



Cuando un dominio cuenta con más de un servidor, uno de ellos es el primario (o maestro) y todos los demás son los secundarios (o esclavos).

La configuración de servidores DNS primarios (maestros) y secundarios (esclavos) se utiliza para la gestión eficaz de los registros DNS y para asegurar la redundancia y consistencia de la información de dominio a través de Internet.

<details><summary>¿Cuál es la razón de que sea así?</summary>

1. **Sincronización y Consistencia de Datos**: El servidor DNS primario mantiene la versión autoritativa de los registros de zona del dominio. Cualquier cambio en la configuración del DNS, como añadir o modificar registros A, MX, CNAME, etc., se realiza primero en el servidor primario. Los servidores secundarios luego sincronizan estos cambios desde el primario, asegurando que todos los servidores proporcionen respuestas consistentes a las consultas DNS.

2. **Redundancia y Disponibilidad**: Al tener múltiples servidores DNS secundarios, se garantiza que si el servidor primario falla o se vuelve inaccesible, los servidores secundarios pueden continuar respondiendo las consultas DNS, manteniendo la disponibilidad del servicio o sitio web asociado al dominio. Esto es crucial para la alta disponibilidad y la resistencia a fallos.

3. **Distribución de Carga**: Los servidores secundarios también ayudan a distribuir la carga de las solicitudes DNS, especialmente para sitios web de alto tráfico. Al distribuir las consultas entre varios servidores, se reduce la carga en el servidor primario y se mejora el tiempo de respuesta para los usuarios finales.

4. **Seguridad**: En algunos casos, mantener los servidores secundarios puede aumentar la seguridad. Por ejemplo, se puede configurar el servidor primario en una red segura, no accesible directamente desde Internet, y solo permitir que los servidores secundarios, ubicados en diferentes redes, sincronicen los datos y respondan a las solicitudes externas.

5. **Eficiencia en la Actualización de Datos**: Al realizar cambios solo en el servidor primario, se simplifica la administración de los registros DNS. Los servidores secundarios automáticamente obtienen y replican estos cambios a través de un proceso llamado transferencia de zona, lo que facilita la gestión de los registros DNS para los administradores.

Esta estructura de primario-secundario asegura que los cambios se propaguen de manera controlada y eficiente a través de la infraestructura de DNS, manteniendo la integridad y la disponibilidad de los datos críticos para el funcionamiento de Internet.

</details>

<details><summary>Explique brevemente en qué consiste el mecanismo de transferencia de zona y cuál es su finalidad.</summary>

El mecanismo de transferencia de zona en DNS es un proceso por el cual los registros DNS de una zona específica son copiados (transferidos) de un servidor DNS autoritativo (el servidor primario o maestro) a otro servidor DNS (el servidor secundario o esclavo). Este proceso se realiza para asegurar que los servidores secundarios tengan una copia exacta y actualizada de los registros DNS mantenidos por el servidor primario.

La finalidad principal de la transferencia de zona es:

1. **Redundancia y Disponibilidad**: Garantizar que múltiples servidores DNS puedan responder a las consultas sobre un dominio, incluso si el servidor primario está inaccesible debido a mantenimiento, fallas o ataques. Esto mejora la disponibilidad y la resiliencia del sistema DNS.

2. **Consistencia de Datos**: Asegurar que todos los servidores secundarios tengan la misma información DNS que el servidor primario, manteniendo la consistencia de los datos a través de la red. Esto es crucial para evitar conflictos o respuestas incorrectas a las consultas DNS.

3. **Balanceo de Carga**: Distribuir las consultas DNS entre varios servidores para manejar eficientemente el tráfico y reducir la carga en cualquier servidor individual. Esto puede mejorar el rendimiento general del sistema DNS y reducir los tiempos de respuesta para los usuarios finales.

La transferencia de zona puede ocurrir de dos formas: transferencia completa de zona (AXFR), donde todos los registros de la zona son transferidos en su totalidad, o transferencia incremental de zona (IXFR), donde solo se transfieren los cambios realizados desde la última transferencia. Esto último ayuda a optimizar el ancho de banda y los recursos al minimizar la cantidad de datos transferidos entre servidores.

</details>

## Ejercicio 10

Imagine que usted es el administrador del dominio de DNS de la UNLP (unlp.edu.ar). A su vez, cada facultad de la UNLP cuenta con un administrador que gestiona su propio dominio (por ejemplo, en el caso dela Facultad de Informática se trata de info.unlp.edu.ar).

Suponga que se crea una nueva facultad, Facultad de Redes, cuyo dominio será redes.unlp.edu.ar, y el administrador le indica que quiere poder manejar su propio dominio. 

<details><summary>¿Qué debe hacer usted para que el administrador de la Facultad de Redes pueda gestionar el dominio de forma independiente?</summary>

> (Pista: investigue en qué consiste la delegación de dominios).

Para permitir que el administrador de la Facultad de Redes gestione el dominio `redes.unlp.edu.ar` de forma independiente, debería realizar una **delegación de dominio**. La delegación de dominio es un proceso en el sistema de nombres de dominio (DNS) por el cual la autoridad administrativa y de gestión de un subdominio se transfiere del administrador del dominio principal a otro servidor DNS, que generalmente es controlado por una organización o individuo diferente. En este caso, del dominio `unlp.edu.ar` al nuevo subdominio `redes.unlp.edu.ar`. Aquí están los pasos a seguir:

1. **Crear registros NS en el dominio principal**: Debes agregar registros del tipo NS (Name Server) en la zona DNS de `unlp.edu.ar` para el subdominio `redes.unlp.edu.ar`. Estos registros NS indicarán los servidores DNS que tienen autoridad sobre el subdominio `redes.unlp.edu.ar`. Por ejemplo:

   ```
   redes.unlp.edu.ar. IN NS ns1.redes.unlp.edu.ar.
   redes.unlp.edu.ar. IN NS ns2.redes.unlp.edu.ar.
   ```

2. **Especificar los servidores DNS para el subdominio**: Debes configurar o asegurarte de que los servidores DNS especificados en los registros NS (en este ejemplo, `ns1.redes.unlp.edu.ar` y `ns2.redes.unlp.edu.ar`) estén configurados correctamente para servir el subdominio `redes.unlp.edu.ar`. Esto implica configurar una nueva zona DNS en estos servidores para `redes.unlp.edu.ar`.

3. **Agregar registros A para los servidores DNS del subdominio**: Si los servidores DNS del subdominio (`ns1.redes.unlp.edu.ar`, `ns2.redes.unlp.edu.ar`) no tienen aún una dirección IP asignada visible globalmente, necesitas agregar registros A en la zona DNS de `unlp.edu.ar` para resolver estas direcciones. Por ejemplo:

   ```
   ns1.redes.unlp.edu.ar. IN A 192.0.2.1
   ns2.redes.unlp.edu.ar. IN A 192.0.2.2
   ```

4. **Configuración de la zona para el subdominio**: En los servidores DNS del subdominio, se debe configurar una zona para `redes.unlp.edu.ar`. Esta configuración incluirá todos los registros DNS necesarios para el subdominio, como registros A, MX, TXT, etc., permitiendo al administrador de la Facultad de Redes gestionar estos registros de forma independiente.

Al completar estos pasos, habrás delegado con éxito la gestión del subdominio `redes.unlp.edu.ar` al administrador de la Facultad de Redes, permitiéndole controlar completamente los registros DNS dentro de su propio subdominio. Es crucial asegurarse de que todos los servidores DNS involucrados estén configurados correctamente y sincronizados para garantizar la resolución de nombres eficaz y sin interrupciones dentro del subdominio delegado.

</details>

---

## Ejercicio 11

En la VM, utilice el comando dig para obtener la dirección IP del host `www.redes.unlp.edu.ar` y responda:

```bash
dig www.redes.unlp.edu.ar
```

<details><summary>Respuesta</summary>

```bash
; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 27770
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: b5db6c2a4993909e01000000661bf3b5c1b1ba1391d7a26a (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	A

;; ANSWER SECTION:
www.redes.unlp.edu.ar.	300	IN	A	172.28.0.50

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 14 12:18:13 -03 2024
;; MSG SIZE  rcvd: 94
```

</details>

<details><summary>¿La solicitud fue recursiva?</summary>

- **Sí**, la solicitud fue recursiva. Esto se puede determinar observando el flag `rd` (Recursion Desired) en la sección de flags del encabezado de la respuesta. Este flag indica que el cliente (en este caso, el comando `dig`) solicitó que el servidor DNS realice una resolución recursiva si no tenía la respuesta disponible inmediatamente en su caché.

  ```bash
  ;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
  ```

  - `rd` (Recursion Desired): Este flag está presente y marcado, lo que significa que se solicitó una resolución recursiva.

</details>

<details><summary>¿Y la respuesta? ¿Cómo lo sabe?</summary>

- La respuesta fue **autoritativa**, lo cual se deduce del flag `aa` (Authoritative Answer). Este flag indica que la respuesta proviene de un servidor que tiene autoridad directa sobre el dominio en cuestión, en este caso, `www.redes.unlp.edu.ar`.

  - `aa` (Authoritative Answer): Este flag está presente y marcado, indicando que el servidor que respondió lo hizo con autoridad, es decir, que posee y gestiona directamente los registros DNS de este dominio.

#### Otros Detalles

- **`qr` (Query Response)**: Este flag indica que el mensaje es una respuesta a una consulta (en lugar de una consulta por sí misma).
- **`ra` (Recursion Available)**: Este flag muestra que el servidor DNS es capaz de realizar consultas recursivas, aunque en este caso, dado que la respuesta fue autoritativa y directa, probablemente no se utilizó la recursión más allá del servidor consultado inicialmente.

#### Conclusión

En resumen:
- **La solicitud fue recursiva** porque se solicitó con el flag `rd` habilitado.
- **La respuesta fue autoritativa** y directa, como lo indica el flag `aa`, lo que significa que el servidor que respondió tenía una respuesta directa y definitiva para la consulta, sin necesidad de consultar a otros servidores.

Estos detalles son clave para entender cómo operan las solicitudes y respuestas en el sistema DNS, proporcionando visibilidad sobre el comportamiento tanto del cliente como del servidor en el proceso de resolución de nombres de dominio.
</details>

<details><summary>¿Cuál es la dirección IP del resolver utilizado?</summary>

La dirección IP del resolver que se utilizó para responder a tu consulta está indicada en la salida bajo la línea `SERVER:`. Aquí está el extracto relevante de tu comando `dig`:

```bash
;; SERVER: 172.28.0.29#53(172.28.0.29)
```

#### Desglose de la Línea

- **`172.28.0.29`**: Esta es la dirección IP del resolver. Este servidor es el que efectivamente respondió a tu consulta DNS.
- **`#53`**: Este número después del signo `#` representa el puerto utilizado por el servidor DNS. El puerto `53` es el puerto estándar utilizado para protocolos DNS.
</details>

<details><summary>¿Cómo Sabemos Que Esta es la Dirección del Resolver?</summary>

En DNS, cuando realizas una consulta utilizando herramientas como `dig`, el servidor que responde puede ser un servidor configurado en tus ajustes de red como el servidor DNS predeterminado, o puede ser un servidor DNS intermedio si estás utilizando una red que redirige las consultas DNS, como una red corporativa o de una universidad.

El servidor listado en la línea `SERVER:` de la salida de `dig` es el último servidor que procesó la consulta y devolvió el resultado. Esto indica que fue el servidor de nombres (resolver) activo que resolvió tu petición, ya sea devolviendo un resultado desde su caché o realizando su propia consulta recursiva en la red, según sea necesario.
</details>

<details><summary>¿Cuáles son los servidores de correo del dominio redes.unlp.edu.ar?</summary>

```bash
dig MX www.redes.unlp.edu.ar
```

```bash
; <<>> DiG 9.16.27-Debian <<>> MX www.redes.unlp.edu.ar
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 20927
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 2a33e83611c202e201000000661bfc44e3dbcfb90ebb03ec (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	MX

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 14 12:54:44 -03 2024
;; MSG SIZE  rcvd: 127
```

> Mira, la cosa esta no posee registros MX, solo posee un registro SOA, hacemos la consulta nuevamente pero esta vez a un servidor DNS diferente.

```bash
dig MX redes.unlp.edu.ar
```

```bash
; <<>> DiG 9.16.27-Debian <<>> MX redes.unlp.edu.ar
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 20370
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 3

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 3961424363e0639101000000661bff479d6a617ac86c0482 (good)
;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	MX

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	MX	10 mail2.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	MX	5 mail.redes.unlp.edu.ar.

;; ADDITIONAL SECTION:
mail.redes.unlp.edu.ar.	86400	IN	A	172.28.0.90
mail2.redes.unlp.edu.ar. 86400	IN	A	172.28.0.91

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 14 13:07:35 -03 2024
;; MSG SIZE  rcvd: 149
```

#### ANSWER SECTION
- **redes.unlp.edu.ar. 86400 IN MX 10 mail2.redes.unlp.edu.ar.**
  - **Prioridad**: 10
  - **Servidor de correo**: mail2.redes.unlp.edu.ar
- **redes.unlp.edu.ar. 86400 IN MX 5 mail.redes.unlp.edu.ar.**
  - **Prioridad**: 5
  - **Servidor de correo**: mail.redes.unlp.edu.ar

Estos registros indican que hay dos servidores de correo configurados para el dominio, con diferentes prioridades. El número de prioridad indica cuál servidor debería ser contactado primero, con un número más bajo indicando mayor prioridad.

#### ADDITIONAL SECTION
- Aquí se proporcionan las direcciones IP para ambos servidores de correo, facilitando la conexión directa sin necesidad de resolver nuevamente estos nombres:
  - **mail.redes.unlp.edu.ar. 86400 IN A 172.28.0.90**
  - **mail2.redes.unlp.edu.ar. 86400 IN A 172.28.0.91**

</details>

<details><summary>¿Por qué hay más de uno y qué significan los números que aparecen entre MX y el nombre?</summary>

La existencia de más de un servidor de correo (en este caso, `mail` y `mail2`) proporciona redundancia y mejora la fiabilidad del sistema de correo electrónico. En caso de que el servidor principal (`mail.redes.unlp.edu.ar`) falle o esté inaccesible por mantenimiento u otras razones, el tráfico de correo puede ser dirigido automáticamente al servidor secundario (`mail2.redes.unlp.edu.ar`).

Los números entre `MX` y el nombre del servidor son las **prioridades de los servidores de correo**. El servidor con la prioridad más baja (en este caso, `5` para `mail.redes.unlp.edu.ar`) es el preferido y debe ser contactado primero. El servidor con una prioridad más alta (`10` para `mail2.redes.unlp.edu.ar`) actúa como respaldo y se utiliza cuando el principal no está disponible.

</details>

<details><summary>Si se quiere enviar un correo destinado a redes.unlp.edu.ar, ¿a qué servidor se le entregará?</summary>

El correo destinado a `redes.unlp.edu.ar` se entregará primero a `mail.redes.unlp.edu.ar`, ya que tiene la prioridad más alta (más baja numéricamente, es decir, `5`).

</details>

<details><summary>¿En qué situación se le entregará al otro?</summary>

Si `mail.redes.unlp.edu.ar` está caído, no responde o no puede manejar más tráfico, entonces el correo se entregará al servidor `mail2.redes.unlp.edu.ar`, que tiene una prioridad de `10`. Esto garantiza que aún en caso de fallo, el correo pueda ser recibido y gestionado adecuadamente.

Este sistema de prioridades y múltiples servidores de correo asegura la continuidad del servicio de correo electrónico, crucial para las operaciones diarias de cualquier organización, especialmente en un entorno académico como una universidad.
</details>

<details><summary>¿Cuáles son los servidores de DNS del dominio redes.unlp.edu.ar?</summary>

```bash
dig NS redes.unlp.edu.ar
```

```bash
; <<>> DiG 9.16.27-Debian <<>> NS redes.unlp.edu.ar
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 55280
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 3

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 429a78e30a5755ad01000000661c04936178753028e756f4 (good)
;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	NS

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-a.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-b.redes.unlp.edu.ar.

;; ADDITIONAL SECTION:
ns-sv-a.redes.unlp.edu.ar. 604800 IN	A	172.28.0.30
ns-sv-b.redes.unlp.edu.ar. 604800 IN	A	172.28.0.29

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 14 13:30:11 -03 2024
;; MSG SIZE  rcvd: 150
```


#### Detalles de la Respuesta

**ANSWER SECTION:**
- `redes.unlp.edu.ar. 86400 IN NS ns-sv-a.redes.unlp.edu.ar.`
- `redes.unlp.edu.ar. 86400 IN NS ns-sv-b.redes.unlp.edu.ar.`
  - Estos registros indican que los servidores de nombres para el dominio `redes.unlp.edu.ar` son `ns-sv-a.redes.unlp.edu.ar` y `ns-sv-b.redes.unlp.edu.ar`.
  - **86400** es el TTL (Time to Live) en segundos, que dicta cuánto tiempo estos registros pueden ser almacenados en la caché por otros servidores antes de necesitar ser refrescados.

**ADDITIONAL SECTION:**
- `ns-sv-a.redes.unlp.edu.ar. 604800 IN A 172.28.0.30`
- `ns-sv-b.redes.unlp.edu.ar. 604800 IN A 172.28.0.29`
  - Estos registros proporcionan las direcciones IP asociadas a cada uno de los servidores de nombres, permitiendo que cualquier entidad que necesite resolver nombres bajo `redes.unlp.edu.ar` se comunique directamente con estos servidores.
  - **604800** segundos es el TTL para estos registros IP, indicando cuánto tiempo pueden ser cacheados.

#### Interpretación de los Flags

- **qr (Query Response):** Indica que la respuesta es a una consulta.
- **aa (Authoritative Answer):** El servidor que respondió tiene autoridad directa sobre el dominio, lo que significa que las respuestas son definitivas y no derivadas de otro servidor.
- **rd (Recursion Desired):** La solicitud inicial pedía que el servidor realice recursión si era necesario.
- **ra (Recursion Available):** El servidor está capacitado para realizar recursión, aunque en este caso, dio una respuesta directa y autoritativa.

#### Conclusión

Los servidores de DNS para `redes.unlp.edu.ar` son:
- **ns-sv-a.redes.unlp.edu.ar** con dirección IP **172.28.0.30**
- **ns-sv-b.redes.unlp.edu.ar** con dirección IP **172.28.0.29**

Estos servidores están configurados para manejar todas las consultas DNS relacionadas con el dominio `redes.unlp.edu.ar`. La configuración con dos servidores de nombres mejora la redundancia y la fiabilidad, asegurando que si uno de los servidores tiene problemas, el otro puede continuar manejando las solicitudes sin interrupción del servicio. Además, la respuesta autoritativa confirma que estos servidores son la fuente definitiva de información DNS para este dominio, lo cual es esencial para operaciones seguras y eficientes dentro de la red de la universidad.

</details>

Observe la información que obtuvo al consultar por los servidores de DNS del dominio. En base a la salida, 

<details><summary>¿es posible indicar cuál de ellos es el primario?</summary>

Con la información proporcionada por una consulta DNS estándar como la que se muestra en los resultados de `dig`, no es posible determinar cuál de los servidores de nombres es el primario (maestro) y cuál es el secundario (esclavo). Los registros NS simplemente enumeran los servidores de nombres que son autoritativos para el dominio, sin indicar su rol dentro de la configuración maestro-esclavo.

En la configuración de DNS tradicional, el servidor primario es donde se realizan los cambios y actualizaciones de los registros DNS, y estos cambios se replican luego a los servidores secundarios. Sin embargo, esta información de rol es parte de la configuración interna del sistema DNS y no se transmite en las respuestas a las consultas DNS realizadas por los clientes o resolvers.

Para determinar cuál es el servidor primario, normalmente se requiere acceso al servidor DNS autoritativo y a su configuración o a la interfaz de administración del proveedor de DNS donde se maneja el dominio. A veces, por convención, los nombres de los servidores de nombres pueden dar una pista (como `ns1` sugiriendo que podría ser el primario), pero esto no es una regla fiable y puede ser engañoso.
</details>

<details><summary>Consulte por el registro SOA del dominio y responda.</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2580a2e8-3cf6-48c7-bbb4-5acf1addb943)
</details>

<details><summary>¿Puede ahora determinar cuál es el servidor de DNS primario?</summary>

En la sección "ANSWER SECTION", el primer campo después del `SOA` es el servidor de nombres principal o primario para el dominio `redes.unlp.edu.ar`. Según la salida proporcionada, el servidor DNS primario es `ns-sv-b.redes.unlp.edu.ar`.

</details>

<details><summary>¿Cuál es el número de serie, qué convención sigue y en qué casos es importante actualizarlo?</summary>

El número de serie en el registro SOA es `2020031700`. La convención de numeración puede variar, pero comúnmente sigue un patrón de AAAAMMDDnn, donde AAAA es el año, MM es el mes, DD es el día y nn es un número de revisión. Este número se actualiza cada vez que se hace un cambio significativo en la zona DNS. Es importante para la replicación de la zona hacia los servidores secundarios, ya que los servidores secundarios comparan el número de serie con el que tienen localmente para decidir si necesitan actualizar su copia de la zona.

</details>

<details><summary>¿Qué valor tiene el segundo campo del registro? Investigue para qué se usa y como se interpreta el valor.</summary>

El segundo campo es `root.redes.unlp.edu.ar.` y es la dirección de contacto para el administrador de la zona DNS. Normalmente se utiliza en la forma de un correo electrónico, donde el primer punto (.) se reemplaza por una arroba (@) y los demás puntos se interpretan normalmente. Por ejemplo, `root@redes.unlp.edu.ar`.

</details>

<details><summary>¿Qué valor tiene el TTL de caché negativa y qué significa?</summary>
El último número en el registro SOA, `86400`, es el TTL de caché negativa. Esto dicta cuánto tiempo los resolvers de DNS deben cachear la respuesta a una consulta fallida (es decir, cuando NO hay un registro para el nombre solicitado). Un TTL de 86400 segundos (24 horas) significa que una respuesta negativa será cacheada durante 24 horas antes de que se realice otra consulta para ese nombre. El objetivo de esta caché es reducir la cantidad de tráfico generado por consultas repetitivas a nombres que no existen y mejorar la eficiencia del DNS.

#### Resumen

A partir de la consulta SOA, se ha identificado `ns-sv-b.redes.unlp.edu.ar` como el servidor de DNS primario. El número de serie sigue una convención de fecha y revisión y es crucial para controlar la sincronización de los registros entre los servidores DNS primarios y secundarios. El segundo campo del registro SOA proporciona información de contacto del administrador de la zona, y el TTL de caché negativa ayuda a gestionar la caché de respuestas negativas en los resolvers de DNS.
</details>

<details><summary>Indique qué valor tiene el registro TXT para el nombre saludo.redes.unlp.edu.ar.</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8500d8e2-d178-4dc1-beb6-dbdc2108e06b)

</details>

<details><summary>Investigue para qué es usado este registro.</summary>

El registro TXT en DNS es utilizado para insertar cualquier texto en el sistema de nombres de dominio. Aquí hay varios propósitos comunes para los registros TXT:

1. **Verificación de Propiedad**: Servicios como Google Search Console o proveedores de servicios de correo electrónico usan registros TXT para verificar la propiedad de un dominio.

2. **Políticas de Seguridad de Correo Electrónico**: Se usan para SPF (Sender Policy Framework), que ayuda a prevenir el spoofing de correo electrónico al especificar qué servidores están autorizados a enviar correo en nombre del dominio. También se utilizan para DKIM (DomainKeys Identified Mail), que permite la verificación de la identidad del remitente y para DMARC (Domain-based Message Authentication, Reporting, and Conformance), que es una política de autenticación de correo electrónico.

3. **Información General**: Pueden contener información general sobre el dominio o indicaciones técnicas para los administradores de sistemas.

En el resultado del `dig` que has proporcionado, se muestra que no hay un registro TXT para el dominio `redes.unlp.edu.ar`, lo que se evidencia por `ANSWER: 0`. Esto significa que no se han definido registros TXT o no están disponibles públicamente. La sección de "AUTHORITY SECTION" contiene un registro SOA, que es típico cuando no hay registros del tipo consultado pero se muestra la autoridad para el dominio.

</details>

### Parte g

`Utilizando dig, solicite la transferencia de zona de redes.unlp.edu.ar, analice la salida y responda.`

<details><summary></summary></details>

```bash
dig @ns-sv-a.redes.unlp.edu.ar redes.unlp.edu.ar AXFR
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/bd4691ea-b055-4f9b-b19a-adb4cf6d126c)

```bash
dig @ns-sv-b.redes.unlp.edu.ar redes.unlp.edu.ar AXFR
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c9e1e03d-dc55-4f98-a0b8-edd87f7301f4)

La salida proporcionada es el resultado de una transferencia de zona exitosa para el dominio `redes.unlp.edu.ar` utilizando el comando `dig`. La transferencia de zona (`AXFR`) es un tipo de consulta DNS que solicita una copia completa de todos los registros de una zona de un servidor DNS. Aquí desglosamos la información proporcionada:

- **SOA Record**: El registro de Start of Authority (SOA) al principio y al final de la transferencia de zona indica la autoridad y la versión de la zona DNS. Contiene:
  - El servidor DNS principal (`ns-sv-b.redes.unlp.edu.ar`).
  - La dirección de correo electrónico del administrador (`root.redes.unlp.edu.ar`, reemplazando el primer punto con `@`).
  - El número de serie (`2020031700`) que se actualiza cada vez que la zona cambia.
  - El intervalo de refresco (`604800` segundos, o una semana).
  - El intervalo de reintento (`86400` segundos, o un día).
  - El tiempo de expiración (`2419200` segundos, o cuatro semanas).
  - El TTL por defecto (`86400` segundos, o un día), que se aplica a los registros en ausencia de un TTL específico.

- **NS Records**: Listan los servidores de nombres autorizados (`ns-sv-a.redes.unlp.edu.ar` y `ns-sv-b.redes.unlp.edu.ar`) para el dominio.

- **MX Records**: Especifican los servidores de correo (`mail.redes.unlp.edu.ar` y `mail2.redes.unlp.edu.ar`) y sus prioridades (5 y 10 respectivamente), que se utilizan para dirigir el correo electrónico.

- **CNAME Record**: Muestra un alias (`ftp.redes.unlp.edu.ar`) que apunta a otro dominio (`www.redes.unlp.edu.ar`).

- **A Records**: Asocian subdominios con direcciones IP específicas (`mail.redes.unlp.edu.ar` a `172.28.0.90`, por ejemplo).

- **TXT Record**: Contiene texto arbitrario asociado con el dominio (`saludo.redes.unlp.edu.ar` tiene el texto `"HOLA"`).

- **Additional NS Records**: Proporcionan más servidores de nombres para subdominios específicos (`practica.redes.unlp.edu.ar` tiene sus propios NS y A records).

La presencia de dos registros SOA al principio y al final de la lista es estándar en las transferencias de zona AXFR, indicando el comienzo y el fin de la transferencia.

- **Query time**: Muestra el tiempo que tardó la consulta en completarse, que es de 4 milisegundos, lo que indica una respuesta rápida.

- **SERVER**: Indica el servidor de DNS que respondió a la consulta.

- **WHEN**: Muestra cuándo se realizó la consulta.

- **XFR size**: Informa sobre el tamaño de la transferencia, que en este caso incluyó 17 registros, con un tamaño total de 441 bytes.

La finalidad de esta transferencia es sincronizar los registros de zona entre el servidor DNS principal y los secundarios. En un entorno de producción, las transferencias de zona suelen estar restringidas a los servidores que han sido explícitamente autorizados para recibir estos datos, con el fin de proteger contra el acceso no autorizado a la configuración del dominio.

`¿Qué significan los números que aparecen antes de la palabra IN?`
<details><summary></summary></details>

Los números que aparecen antes de la palabra "IN" en una salida de `dig` corresponden al **TTL (Time To Live)** de ese registro específico. El TTL es un valor en segundos que indica cuánto tiempo debe un servidor DNS cachear la respuesta antes de volver a consultar al servidor DNS autoritativo para una actualización. Es una forma de gestionar el rendimiento y la carga en los servidores DNS, equilibrando la actualización oportuna de la información con la necesidad de reducir el tráfico DNS en la red.

Por ejemplo, un TTL de 86400 significa que una vez que un resolver DNS ha consultado ese registro, puede guardar la respuesta en su caché y no necesita realizar otra consulta para ese registro durante los próximos 86400 segundos, o 24 horas.

En el registro SOA, el TTL es de 86400 segundos, y para los registros A de los servidores de nombres (ns-sv-a y ns-sv-b), es de 604800 segundos, o 7 días.

`¿Cuál es su finalidad?`
<details><summary></summary></details>

**Su finalidad** es mejorar la eficiencia del sistema DNS reduciendo el número de consultas necesarias para la misma información y asegurando que los datos no válidos o antiguos se eliminen de las cachés en un período razonable.

`¿Cuántos registros NS observa? `
<details><summary></summary></details>

En cuanto a la **cantidad de registros NS**, se observan dos registros NS:
1. `ns-sv-a.redes.unlp.edu.ar`
2. `ns-sv-b.redes.unlp.edu.ar`

Estos son los servidores de nombres que están autorizados a responder por el dominio `redes.unlp.edu.ar`. Estos registros son fundamentales para el proceso de resolución de DNS, ya que dirigen a los clientes a los servidores que tienen la información autoritativa sobre el dominio en cuestión.

---

Compare la respuesta con los servidores de DNS del dominio redes.unlp.edu.ar que dio anteriormente.

`¿Puede explicar a qué se debe la diferencia y qué significa?`
<details><summary></summary></details>

> Consultar

### Parte h

Consulte por el registro A de www.redes.unlp.edu.ar y luego por el registro A de www.practica.redes.unlp.edu.ar. 
<details><summary></summary></details>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9962fc8f-7afd-4918-a3e0-8891ed7343d3)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/63e4b5a6-a78d-43a0-9df1-a764675b858b)

`Observe los TTL de ambos. Repita la operación y compare el valor de los TTL de cada uno respecto de la respuesta anterior. `
<details><summary></summary></details>

Las imágenes que proporcionaste muestran los resultados de dos consultas `dig` para los registros A de `www.redes.unlp.edu.ar` y `www.practica.redes.unlp.edu.ar`. 

En la primera imagen, la consulta para `www.redes.unlp.edu.ar` muestra un TTL de 300 segundos. Esto indica que la dirección IP `172.28.0.50` puede ser almacenada en caché por un resolver DNS durante 5 minutos antes de necesitar una nueva resolución.

La segunda imagen, muestra la consulta para `www.practica.redes.unlp.edu.ar` con un TTL de 56 segundos, significando que la dirección IP `172.28.0.10` puede ser almacenada en caché durante 56 segundos.

Si repites las consultas después de un intervalo de tiempo y observas los TTL en las respuestas, deberías ver que los TTL han disminuido en la cantidad de segundos que han pasado desde la consulta anterior. Esto refleja el tiempo restante que un resolver DNS puede mantener la respuesta en caché antes de requerir una actualización. 

La diferencia en los TTL entre `www.redes.unlp.edu.ar` y `www.practica.redes.unlp.edu.ar` indica posiblemente que `www.practica` podría cambiar más frecuentemente o que es un subdominio con menos tráfico, donde mantener la información en caché por un tiempo más corto no impactaría significativamente en el rendimiento del resolver.

`¿Puede explicar qué está ocurriendo?`
<details><summary></summary></details>

> (Pista: observar los flags será de ayuda).

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2f790c50-3a72-4bd9-bb58-07cac2560c6f)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/447ad9a1-ef62-4158-adab-1ecbda15165d)

`Consulte por el registro A de www.practica2.redes.unlp.edu.ar.`
<details><summary></summary></details>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4dfa0f35-1279-45f5-96ee-ba68ae5083f5)

`¿Obtuvo alguna respuesta?`
<details><summary></summary></details>

La salida del comando `dig` que proporcionaste indica que se realizó una consulta DNS para el registro A de `www.practica2.redes.unlp.edu.ar`, y la respuesta contiene varios elementos clave que nos informan sobre el resultado de la consulta:

- **status: NXDOMAIN**: Indica que el nombre de dominio consultado no existe en el servidor DNS autoritativo para el dominio `redes.unlp.edu.ar`. NXDOMAIN significa "Non-Existent Domain" (Dominio Inexistente).

- **ANSWER: 0**: Significa que no se encontraron registros A para `www.practica2.redes.unlp.edu.ar`, es decir, no hay una respuesta con una dirección IP asociada a ese nombre de dominio.

- **AUTHORITY: 1**: Muestra que hay una sección de autoridad con un registro, que en este caso es el SOA (Start of Authority) del dominio `redes.unlp.edu.ar`. Esto significa que, aunque no hay una respuesta directa para la consulta (ya que el dominio no existe), el servidor que respondió tiene autoridad sobre el dominio y por eso proporciona la información SOA.


`Investigue sobre los codigos de respuesta de DNS.`
<details><summary></summary></details>

- **NXDOMAIN**: Se utiliza para indicar que el nombre de dominio especificado no existe. Es una respuesta definitiva que informa al cliente que el dominio que está buscando no se puede encontrar en el sistema de nombres de dominio.

- **NOERROR**: Se utiliza para indicar que la consulta se completó con éxito, pero no necesariamente significa que se encontró una respuesta. En el caso de una consulta que devuelve registros válidos, la sección de respuestas tendrá una o más entradas y el estado será `NOERROR`.

`¿Para qué son utilizados los mensajes NXDOMAIN y NOERROR?`
<details><summary></summary></details>

- **NXDOMAIN**: Específicamente útil para informar a los resolvers DNS y a los usuarios que el nombre de dominio que están tratando de alcanzar no existe y que deberían verificar si lo han escrito correctamente.

- **NOERROR**: Indica que la consulta fue procesada correctamente y que la infraestructura de DNS está funcionando como se espera. Un estado `NOERROR` puede acompañarse de respuestas (si el dominio existe y tiene registros) o no (si la consulta fue por un tipo de registro no existente para ese dominio).

En tu caso específico, `NXDOMAIN` indica que `www.practica2.redes.unlp.edu.ar` no es un nombre de dominio existente bajo `redes.unlp.edu.ar`, y no se encontraron registros A asociados a él. El servidor proporcionó su registro SOA como parte de la respuesta autoritativa para mostrar que la respuesta viene del servidor autorizado para el dominio `redes.unlp.edu.ar`, pero que el subdominio consultado no existe en su configuración de DNS.

## Mas sobre los codigos de respuestas DNS

Los códigos de respuesta DNS, también conocidos como RCODEs, son parte de la sección de encabezado en los mensajes DNS y proporcionan un estado sobre el éxito o fracaso de la consulta DNS. Aquí están los RCODEs más comunes:

1. **NOERROR** (0): La consulta se completó con éxito y no hubo errores.

2. **FORMERR** (1): Error de formato; el servidor DNS fue incapaz de interpretar la solicitud.

3. **SERVFAIL** (2): Fallo del servidor; el servidor DNS fue incapaz de procesar la consulta debido a un problema con el mismo.

4. **NXDOMAIN** (3): Dominio inexistente; el nombre de dominio consultado no existe.

5. **NOTIMP** (4), también conocido como **NOTIMPL** (No implementado): El servidor DNS no implementa el tipo de consulta solicitada.

6. **REFUSED** (5): La operación fue rechazada por el servidor DNS por razones de política.

7. **YXDOMAIN** (6): Nombre de dominio que no debería existir, existe.

8. **YXRRSET** (7): Conjunto de registros que no debería existir, existe.

9. **NXRRSET** (8): Conjunto de registros que debería existir, no existe.

10. **NOTAUTH** (9), también conocido como **NOTAUTH** (No autorizado): El servidor no está autorizado para la zona especificada.

11. **NOTZONE** (10): Nombre que no está dentro de la zona.

Los códigos de 11 a 15 son reservados para uso futuro. Además, hay extensiones para RCODEs como:

16. **BADVERS** (16): La primera implementación del código de respuesta extendido (EDNS) introdujo este código para señalar problemas con la versión de EDNS.

Los códigos de respuesta extendidos se pueden encontrar en la sección OPT PSEUDOSECTION de un mensaje DNS cuando EDNS está en uso. Los códigos de respuesta proporcionan información crítica para el diagnóstico de problemas en las consultas DNS y son una herramienta importante para los administradores de sistemas y redes al solucionar problemas de resolución de nombres.

---

## Ejercicio 12

`Investigue los comando nslookup y host. ¿Para qué sirven?`
<details><summary></summary></details>

**nslookup** y **host** son herramientas de línea de comandos utilizadas para consultar el sistema de nombres de dominio (DNS) y obtener información sobre registros DNS de dominios específicos. Ambas pueden ser usadas para realizar una variedad de consultas DNS.


Intente con ambos comandos obtener:

`Dirección IP de www.redes.unlp.edu.ar.`
<details><summary></summary></details>

<table>
<tr><td>

```bash
nslookup www.redes.unlp.edu.ar
```
</td><td>

```bash
host www.redes.unlp.edu.ar
```
</td></tr>
<tr><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a54313eb-bc72-493e-a3ca-3ecca52eb6ec)

</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d62416a6-8dcc-4c08-bc10-8635cb5e3eea)
</td></tr>
</table>


`Servidores de correo del dominio redes.unlp.edu.ar.`
<details><summary></summary></details>

```bash
nslookup -query=MX redes.unlp.edu.ar
```
Con el flag `-query=MX`, `nslookup` buscará los registros MX que indican los servidores de correo para el dominio.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d95c93f7-179d-43cb-8305-dcab4ce4b7e3)

```bash
host -t MX redes.unlp.edu.ar
```

El flag `-t MX` especifica que queremos buscar los registros MX.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ae05a8ad-e016-4e81-a8d7-2ab8af8a1ba8)

`Servidores de DNS del dominio redes.unlp.edu.ar` // (registros NS)?
<details><summary></summary></details>

```bash
nslookup -query=NS redes.unlp.edu.ar
```

Esta consulta devuelve los registros NS, que son los servidores de nombres autoritativos para el dominio.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/79bcbada-369a-492a-96dc-260524cbc163)

```bash
host -t NS redes.unlp.edu.ar
```

Al igual que con `nslookup`, el flag `-t NS` le dice a `host` que busque los registros NS.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a56532a9-1953-4f88-a52e-df20b38c4b8c)


---

## Ejercicio 13

`¿Qué función cumple en Linux/Unix el archivo /etc/hosts o en Windows el archivo \WINDOWS\system32\drivers\etc\hosts?`
<details><summary></summary></details>

En los sistemas operativos Linux/Unix, el archivo `/etc/hosts` y en Windows, el archivo `\WINDOWS\system32\drivers\etc\hosts`, tienen una función muy importante: proporcionar una tabla de nombres de host a direcciones IP localmente estática.

Cuando intentas acceder a un recurso de red utilizando un nombre de dominio, como `www.ejemplo.com`, el sistema operativo normalmente consulta primero el archivo `hosts` antes de hacer una consulta al sistema de nombres de dominio (DNS) en la red. Si una entrada correspondiente al nombre de dominio que se está buscando se encuentra en el archivo `hosts`, el sistema operativo utiliza la dirección IP especificada allí y no realiza una consulta DNS externa.

Estas son algunas de las funciones clave del archivo `hosts`:

1. **Resolución de Nombres**: Permite que el sistema operativo resuelva nombres de host a direcciones IP sin consultar un servidor DNS. Esto es útil para la red local o cuando se requiere un control específico sobre la resolución de nombres.

2. **Pruebas y Desarrollo**: Es comúnmente utilizado por desarrolladores para redirigir nombres de dominio a direcciones IP locales o de prueba durante el desarrollo de software y pruebas de aplicaciones web.

3. **Bloqueo de Sitios Web**: Al asignar nombres de dominio conocidos a direcciones no válidas o locales (como 127.0.0.1), los usuarios pueden bloquear efectivamente el acceso a sitios web indeseados.

4. **Rendimiento y Caché**: Al almacenar las direcciones IP localmente, el archivo `hosts` puede reducir los tiempos de respuesta al eliminar la necesidad de realizar consultas DNS para nombres de host comúnmente accedidos o críticos.

5. **Redundancia y Seguridad**: En caso de que el DNS no esté disponible o haya sido comprometido, el archivo `hosts` puede proporcionar una capa adicional de redundancia para resolver nombres de host críticos a sus direcciones IP.

El archivo `hosts` tiene una estructura simple, donde cada entrada consta de una dirección IP seguida de uno o más nombres de host. Las modificaciones en este archivo deben realizarse con cuidado, ya que los errores pueden provocar problemas de conectividad o bloqueos inadvertidos.

---

## Ejercicio 14

Abra el programa Wireshark para comenzar a capturar el tráfico de red en la interfaz con IP `172.28.0.1`.

Una vez abierto realice una consulta DNS con el comando dig para averiguar el registro MX de redes.unlp.edu.ar y luego, otra para averiguar los registros NS correspondientes al dominio redes.unlp.edu.ar.

Analice la información proporcionada por dig y compárelo con la captura.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9b89ca2e-37fb-4e2c-af2e-92a5c7fa45a8)

```bash
dig mx redes.unlp.edu.ar +noall +answer
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f2edf8e0-804e-4816-a1ea-c82df2a95964)

```bash
dig ns redes.unlp.edu.ar +noall +answer
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fcfa7401-0347-4395-9719-ba7d10f5f67a)


---

## Ejercicio 15

Dada la siguiente situación: “Una PC en una red determinada, con acceso a Internet, utiliza los servicios de DNS de un servidor de la red”. Analice

#### Parte a

`¿Qué tipo de consultas (iterativas o recursivas) realiza la PC a su servidor de DNS?`

Cuando una PC realiza consultas a su servidor DNS local (configurado habitualmente por DHCP o manualmente en la configuración de red), generalmente realiza **consultas recursivas**. Esto significa que la PC le pide al servidor DNS que le dé una respuesta definitiva. Si el servidor DNS local no tiene la respuesta almacenada en su caché, asume la responsabilidad de realizar las consultas adicionales necesarias para resolver el nombre completo, sin requerir más acción por parte de la PC.

#### Parte b

`¿Qué tipo de consultas (iterativas o recursivas) realiza el servidor de DNS para resolver requerimientos de usuario como el anterior? `

`¿A quién le realiza estas consultas?`

El servidor DNS configurado para resolver los nombres de dominio por parte de la PC realizará **consultas iterativas** cuando hable con otros servidores DNS en Internet. En una consulta iterativa, el servidor DNS local pregunta a otro servidor DNS (comenzando generalmente por los servidores raíz, seguidos por los servidores de los TLD y finalmente los servidores autoritativos para el dominio en cuestión) y si ese servidor no conoce la respuesta, devolverá la dirección de otro servidor DNS más cercano al nombre de dominio que se está buscando. 

El servidor DNS local continuará esta serie de consultas iterativas hasta que encuentre un servidor que pueda responder con una autoridad (es decir, un servidor de nombres que alberga los registros DNS para el dominio solicitado) o hasta que determine que el dominio no existe (NXDOMAIN). Al final del proceso iterativo, el servidor DNS local tendrá la respuesta completa, que luego enviará de vuelta a la PC en respuesta a su consulta recursiva original.

---

## Ejercicio 16

### Practica 3 Ejercicio 16

`Relacione DNS con HTTP`

DNS (Sistema de Nombres de Dominio) y HTTP (Protocolo de Transferencia de Hipertexto) trabajan juntos para facilitar la navegación por Internet, pero cumplen funciones diferentes en el proceso:

- **DNS** se encarga de traducir los nombres de dominio (como "www.example.com") en direcciones IP (como "93.184.216.34"). Esto es necesario porque aunque los humanos encuentran conveniente usar nombres de dominio fáciles de recordar para acceder a sitios web, las redes informáticas utilizan direcciones IP para localizar y comunicarse entre sí.

- **HTTP** es un protocolo de la capa de aplicación utilizado para la transmisión de documentos hipermedia, como HTML. Es el fundamento de cualquier intercambio de datos en la Web y un protocolo cliente-servidor, lo que significa que las solicitudes son iniciadas por el receptor, usualmente el navegador web, permitiendo la recuperación de recursos web de servidores.

`¿Se puede navegar si no hay servicio de DNS?`

Sí, es posible navegar por Internet sin un servicio de DNS, pero con limitaciones significativas:

1. **Uso Directo de Direcciones IP**: Puedes acceder a sitios web directamente usando sus direcciones IP en lugar de sus nombres de dominio en la barra de direcciones del navegador. Por ejemplo, ingresar `http://93.184.216.34` en lugar de `http://www.example.com`. Sin embargo, esto no siempre funciona para sitios web hospedados en servidores de alojamiento compartido donde múltiples dominios comparten la misma dirección IP y dependen del encabezado del host en la solicitud HTTP para servir el sitio correcto.

2. **Archivo Hosts**: Puedes utilizar el archivo `hosts` de tu sistema operativo para mapear manualmente nombres de dominio a direcciones IP. Al añadir entradas para los sitios web que deseas visitar, puedes navegar a ellos usando nombres de dominio sin necesidad de consultar un servidor DNS. Este método es práctico para un número pequeño de sitios web, pero no es escalable para la navegación general por Internet.

Aunque técnicamente es posible navegar sin DNS, la conveniencia, la escalabilidad y la flexibilidad que proporciona DNS lo hacen esencial para la experiencia moderna de Internet, facilitando el acceso a innumerables recursos en línea sin necesidad de recordar direcciones IP específicas.


---

## Ejercicio 17

Observar el siguiente gráfico y contestar:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9e3ee962-c008-46cd-bd18-15e2a0c4f8d1)

Si la PC-A, que usa comoservidor de DNSa "DNSServer", desea obtener la IP de www.unlp.edu.ar, cuáles serían, y en qué orden, los pasos que se ejecutarán para obtener la respuesta.

`¿Dónde es recursiva la consulta? ¿Y dónde iterativa?`

La imagen muestra una red con varios servidores DNS y un cliente (PC-A) que desea resolver la dirección IP de `www.unlp.edu.ar`. Aquí está el proceso paso a paso que seguirá la consulta DNS:

1. **PC-A solicita la dirección IP para `www.unlp.edu.ar`**:
   - La consulta comienza cuando PC-A solicita a su servidor DNS local (192.168.10.2) la resolución del nombre `www.unlp.edu.ar`.

2. **Consulta Recursiva al Servidor DNS Local**:
   - PC-A realiza una **consulta recursiva** al servidor DNS local. Esto significa que PC-A espera una respuesta definitiva y no participa en el proceso de resolución.
   - Si el servidor DNS local tiene la respuesta en su caché y está aún dentro del tiempo de vida (TTL), la devolverá directamente a PC-A. Si no, continuará con el proceso.

3. **Servidor DNS Local Realiza Consultas Iterativas**:
   - El servidor DNS local no tiene la información en caché, por lo que realiza **consultas iterativas** a otros servidores DNS para resolver la dirección.
   - Primero consulta a un servidor raíz DNS (por ejemplo, A.Root-Server 205.10.100.10), que no resuelve la dirección sino que le indica dónde encontrar más información, en este caso, el servidor del TLD `.ar`.

4. **Consulta al Servidor del TLD .ar**:
   - A continuación, el servidor DNS local consulta al servidor DNS del TLD `.ar` (a.dns.ar 200.108.145.50), que tampoco resolverá directamente la consulta, sino que dirigirá al servidor DNS local hacia el servidor de nombres autoritativo para el dominio `edu.ar`.

5. **Consulta al Servidor del Dominio edu.ar**:
   - Luego, el servidor DNS local consulta al servidor de nombres para `edu.ar` (ns1.riu.edu.ar 170.210.0.18) que proporciona información sobre el servidor de nombres para `unlp.edu.ar`.

6. **Consulta al Servidor de Nombres de unlp.edu.ar**:
   - Por último, el servidor DNS local hace una consulta al servidor de nombres para `unlp.edu.ar` (en la imagen no se muestra explícitamente este servidor DNS, pero asumimos que es donde el servidor DNS local obtendrá la información final) que finalmente le dará la dirección IP para `www.unlp.edu.ar`.

7. **Respuesta a PC-A**:
   - El servidor DNS local regresa la respuesta a PC-A con la dirección IP de `www.unlp.edu.ar`, completando la solicitud inicial. Esta respuesta es el final de la consulta recursiva inicial realizada por PC-A.

En este proceso, la consulta recursiva se realiza entre el cliente (PC-A) y su servidor DNS local. Las consultas iterativas son realizadas por el servidor DNS local cuando habla con otros servidores DNS en la jerarquía hasta obtener la respuesta final. Cada servidor consultado proporciona una pieza del rompecabezas que permite al servidor DNS local llegar al servidor de nombres que tiene la autoridad directa sobre el dominio que se está consultando.

---

## Ejercicio 18

`¿A quién debería consultar para que la respuesta sobre www.google.com sea autoritativa?`

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0873d6f5-cdbe-4a89-a4d2-57e560eaeaf3)



`¿Qué sucede si al servidor elegido en el paso anterior se lo consulta por www.info.unlp.edu.ar?`

`¿Y si la consulta es al servidor 8.8.8.8?`


1. **Consulta para obtener el servidor DNS autoritativo de `www.google.com`**:
   ```bash
   dig NS google.com +short
   ```
   Este comando te dará una lista de los servidores DNS autoritativos para `google.com`.

2. **Consulta para obtener una respuesta autoritativa de `www.google.com`**:
   Selecciona uno de los servidores obtenidos en el paso anterior y realiza la consulta de registro A directamente a ese servidor:
   ```bash
   dig @ns-autoritativo.google.com A www.google.com +noall +answer
   ```
   Reemplaza `ns-autoritativo.google.com` con el servidor real obtenido en el primer paso.

3. **Consulta al servidor DNS autoritativo de `google.com` para `www.info.unlp.edu.ar`**:
   Si realizas esta consulta, lo más probable es que recibas un error o una respuesta no autoritativa, ya que ese servidor no tiene información sobre el dominio `unlp.edu.ar`:
   ```bash
   dig @ns-autoritativo.google.com A www.info.unlp.edu.ar +noall +answer
   ```

4. **Consulta al servidor público 8.8.8.8**:
   Para realizar una consulta recursiva para cualquier dominio utilizando el servidor DNS público 8.8.8.8, usarías:
   ```bash
   dig @8.8.8.8 A www.google.com +noall +answer
   ```
   y para `www.info.unlp.edu.ar`:
   ```bash
   dig @8.8.8.8 A www.info.unlp.edu.ar +noall +answer
   ```
   Estos comandos solicitan al servidor público de Google que realice la resolución de DNS y te proporcione los resultados.

Con estos comandos puedes obtener información tanto de dominios específicos como de cualquier otro nombre de dominio a través de un servidor DNS público. Los resultados no serán autoritativos si el servidor que realizas la consulta no es el servidor DNS autoritativo para ese dominio. Sin embargo, servidores como 8.8.8.8 son resolvers recursivos confiables que obtendrán la información de los servidores autoritativos en tu nombre.

---

## Ejercicio 19

Vamos a desglosar tus preguntas y responderlas en detalle con base en el contexto que proporcionas sobre las consultas DNS autoritativas y consultas a servidores específicos para dominios diferentes.

### Pregunta 1: Consulta Autoritativa para www.google.com

Para obtener una respuesta autoritativa sobre `www.google.com`, deberías consultar a uno de los servidores de nombres autoritativos de `google.com`. Puedes encontrar estos servidores utilizando el comando:

```bash
dig NS google.com +short
```

Esto te proporcionará una lista de los servidores de nombres autoritativos para el dominio `google.com`. Luego, para obtener una respuesta específicamente autoritativa para `www.google.com`, deberías seleccionar uno de estos servidores y hacer una consulta directamente a él:

```bash
dig @ns-autoritativo.google.com A www.google.com +noall +answer
```

Reemplaza `ns-autoritativo.google.com` con uno de los nombres de servidor que obteniste del comando anterior.

### Pregunta 2: Consulta al Servidor Autoritativo de Google para www.info.unlp.edu.ar

Si consultas al servidor DNS autoritativo para `google.com` acerca de `www.info.unlp.edu.ar`, es muy probable que recibas una respuesta de tipo "REFUSED" o simplemente no obtengas una respuesta autoritativa. Esto es porque los servidores de nombres de Google son autoritativos solo para los dominios bajo `google.com` y no tienen información sobre dominios externos como `unlp.edu.ar`.

### Pregunta 3: Consulta al Servidor 8.8.8.8

Cuando consultas al servidor DNS público 8.8.8.8 (propiedad de Google y utilizado para la resolución DNS pública), este actuará como un resolver recursivo:

- **Para `www.google.com`**:
  ```bash
  dig @8.8.8.8 A www.google.com +noall +answer
  ```
  Esta consulta le pide a 8.8.8.8 que resuelva la dirección de `www.google.com`. Como 8.8.8.8 es un servidor recursivo y no un servidor autoritativo para `google.com`, buscará la información contactando a los servidores autoritativos en tu nombre y luego te devolverá la respuesta.

- **Para `www.info.unlp.edu.ar`**:
  ```bash
  dig @8.8.8.8 A www.info.unlp.edu.ar +noall +answer
  ```
  De manera similar, si consultas a 8.8.8.8 para `www.info.unlp.edu.ar`, el servidor realizará la recursión para buscar la información desde los servidores de nombres autoritativos para `unlp.edu.ar` y te proporcionará los resultados.

### Resumen

En resumen, para obtener respuestas autoritativas, debes consultar a los servidores de nombres que están directamente asignados a gestionar el dominio específico. Los servidores DNS públicos como 8.8.8.8 pueden resolver cualquier dominio pero proporcionan respuestas no autoritativas que, sin embargo, son válidas y obtenidas de servidores autoritativos mediante el proceso de resolución recursiva.


---

## Ejercicio Parcial

En base a la siguiente salida de dig, conteste las consignas. Justifique en todos los casos.

```bash
1 ;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 4, ADDITIONAL: 4
2 
3 ;; QUESTION SECTION:
4 ;ejemplo.com. IN __
5  
6 ;; ANSWER SECTION: 
7 ejemplo.com. 1634 IN __ 10 srv01.ejemplo.com.
8 ejemplo.com. 1634 IN __ 5 srv00.ejemplo.com.
9
10 ;; AUTHORITY SECTION:
11 ejemplo.com. 92354 IN __ ss00.ejemplo.com.
12 ejemplo.com. 92354 IN __ ss02.ejemplo.com.
13 ejemplo.com. 92354 IN __ ss01.ejemplo.com.
14 ejemplo.com. 92354 IN __ ss03.ejemplo.com.
15
16 ;; ADDITIONAL SECTION:
17 srv01.ejemplo.com. 272 IN __ 64.233.186.26
18 srv01.ejemplo.com. 240 IN __ 2800:3f0:4003:c00::1a
19 srv00.ejemplo.com. 272 IN __ 74.125.133.26
20 srv00.ejemplo.com. 240 IN __ 2a00:1450:400c:c07::1b
```


Para analizar la salida del comando `dig` y responder a tus preguntas, necesitamos primero completar los espacios en blanco (`__`) con los registros correctos, y luego interpretar la información.

### a. Completar los registros correctos

Basándonos en el contexto típico de la salida de `dig`, los espacios en blanco probablemente corresponden a tipos de registros DNS. Aquí está la salida completada de acuerdo a lo que normalmente esperaríamos:

- **QUESTION SECTION:** Aquí deberíamos tener el tipo de registro que se estaba consultando, como `A` para direcciones IPv4, `AAAA` para IPv6, `MX` para mail servers, etc. Dado que no especificas, asumiremos que se trata de registros `MX` (Mail Exchange) basados en la respuesta.
  ```bash
  ;ejemplo.com. IN MX
  ```

- **ANSWER SECTION:** Se consultaron registros, probablemente `MX` dado que hay una prioridad (10 y 5).
  ```bash
  ejemplo.com. 1634 IN MX 10 srv01.ejemplo.com.
  ejemplo.com. 1634 IN MX 5 srv00.ejemplo.com.
  ```

- **AUTHORITY SECTION:** Aquí, probablemente se consultaron registros `NS` (Name Server), indicando qué servidores son autoritativos para el dominio.
  ```bash
  ejemplo.com. 92354 IN NS ss00.ejemplo.com.
  ejemplo.com. 92354 IN NS ss02.ejemplo.com.
  ejemplo.com. 92354 IN NS ss01.ejemplo.com.
  ejemplo.com. 92354 IN NS ss03.ejemplo.com.
  ```

- **ADDITIONAL SECTION:** Se proporcionan las direcciones IP para los servidores especificados en las secciones anteriores, tanto direcciones IPv4 (`A`) como IPv6 (`AAAA`).
  ```bash
  srv01.ejemplo.com. 272 IN A 64.233.186.26
  srv01.ejemplo.com. 240 IN AAAA 2800:3f0:4003:c00::1a
  srv00.ejemplo.com. 272 IN A 74.125.133.26
  srv00.ejemplo.com. 240 IN AAAA 2a00:1450:400c:c07::1b
  ```

### b. ¿Es una respuesta autoritativa?

No, la respuesta no es autoritativa. Los flags no incluyen `aa` (Authoritative Answer). 

**¿A qué servidor le preguntaría para obtener una respuesta autoritativa?**  
Para obtener una respuesta autoritativa, deberías consultar directamente a uno de los servidores de nombres listados en la **AUTHORITY SECTION**. Por ejemplo, podrías hacer un `dig @ss00.ejemplo.com MX ejemplo.com +noall +answer`.

### c. ¿La consulta fue recursiva? ¿Y la respuesta?

**Consulta recursiva:** Sí, la consulta fue recursiva, lo que se indica por la presencia del flag `rd` (Recursion Desired). Esto significa que el cliente solicitó al servidor que realice una búsqueda completa hasta obtener la información requerida.

**La respuesta:** La presencia del flag `ra` (Recursion Available) en la respuesta indica que el servidor DNS es capaz de realizar recursión. Sin embargo, la respuesta recibida no es autoritativa.

### d. ¿Qué representan los valores 10 y 5 en las líneas (1) y (2)?

Los números `10` y `5` representan las prioridades de los servidores de correo en los registros `MX`. En el contexto de registros `MX`, una prioridad más baja indica un servidor de correo más preferido. Por lo tanto:
- `5 srv00.ejemplo.com.` indica que `srv00.ejemplo.com` es el servidor de correo preferido.
- `10 srv01.ejemplo.com.` indica que `srv01.ejemplo.com` es menos preferido y sería usado si el primero no está disponible.

Estas prioridades ayudan a dirigir el tráfico de correo electrónico de manera eficiente, asegurando que se utilice primero el servidor más deseable o más confiable.


---

## Probando mas comandos

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
- [dig www.redes.unlp.edu.ar MX (Falta)](#registro-mx)
- [dig www.redes.unlp.edu.ar PTR](#registro-ptr)
- [dig www.redes.unlp.edu.ar SRV](#registro-srv)
- [dig redes.unlp.edu.ar NS](#registro-ns)
- [dig redes.unlp.edu.ar CNAME](#registro-cname)
- [dig redes.unlp.edu.ar SOA](#registro-soa)
- [dig redes.unlp.edu.ar TXT](#registro-txt)
- [Ejemplos Varios](#ejemplos-de-varios-comandos)
- [Ver los registros configurados para una URL](#ver-registros-para-una-url)

---

#### Registro A

```bash
dig www.redes.unlp.edu.ar A
```

```bash
redes@debian:~$ dig www.redes.unlp.edu.ar A

; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar A
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 57307
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 6df89cfa69fa329b0100000066135ae75d8578ee82028b7d (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	A

;; ANSWER SECTION:
www.redes.unlp.edu.ar.	300	IN	A	172.28.0.50

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 07 23:48:07 -03 2024
;; MSG SIZE  rcvd: 94
```

### Desglose de la Respuesta

```bash
; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar A
# Esta línea es el encabezado de la salida del comando `dig`, indicando la versión de `dig`
# usada (9.16.27) en un sistema Debian, seguido del dominio consultado 
# (`www.redes.unlp.edu.ar`) y el tipo de registro DNS solicitado (`A`).

;; global options: +cmd
# Indica las opciones globales aplicadas a la consulta. Aquí, `+cmd`
# muestra el comando exacto que se ejecutó.

;; Got answer:
# Confirma que se recibió una respuesta a la consulta DNS realizada.

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 57307
# Sección de encabezado de la respuesta:
# - `opcode: QUERY` indica que la operación realizada fue una consulta DNS.
# - `status: NOERROR` muestra que la consulta se completó sin errores.
# - `id: 57307` es un identificador único para esta consulta, útil 
#               para emparejar solicitudes y respuestas en consultas múltiples.

;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
# Resumen de banderas y estadísticas de la consulta:
# - `qr` (query response) indica que esto es una respuesta a una consulta.
# - `aa` (authoritative answer) señala que la respuesta es autoritativa.
# - `rd` (recursion desired) muestra que se solicitó recursión.
# - `ra` (recursion available) indica que el servidor puede realizar consultas recursivas.
# - `QUERY: 1` muestra que se realizó una pregunta.
# - `ANSWER: 1` indica que se proporcionó una respuesta.
# - `AUTHORITY: 0` y `ADDITIONAL: 1` muestran el número de registros
#                                    de autoridad y adicionales proporcionados.

;; OPT PSEUDOSECTION:
# Sección para opciones extendidas (EDNS).
; EDNS: version: 0, flags:; udp: 1232
# Muestra la versión de EDNS utilizada y el tamaño máximo de paquete UDP soportado (1232 bytes).
; COOKIE: 6df89cfa69fa329b0100000066135ae75d8578ee82028b7d (good)
# Un mecanismo de seguridad que proporciona un 'cookie' para autenticar la respuesta.

;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	A
# La sección de pregunta de la consulta, pidiendo el registro A (dirección IPv4) para
# `www.redes.unlp.edu.ar`.

;; ANSWER SECTION:
www.redes.unlp.edu.ar.	300	IN	A	172.28.0.50
# La sección de respuesta proporciona la dirección IPv4 (`172.28.0.50`) asociada con el nombre 
# de dominio consultado, con un TTL de 300 segundos.

;; Query time: 0 msec
# El tiempo que tomó ejecutar la consulta, en este caso, 0 milisegundos, indicando una respuesta inmediata.

;; SERVER: 172.28.0.29#53(172.28.0.29)
# La dirección IP y puerto del servidor DNS que proporcionó la respuesta.

;; WHEN: Sun Apr 07 23:48:07 -03 2024
# La fecha y hora exactas de cuando se realizó la consulta.

;; MSG SIZE  rcvd: 94
# El tamaño del mensaje de respuesta recibido, en este caso, 94 bytes.
```

---

### Registro 

---

#### Registro NS

```bash
dig redes.unlp.edu.ar NS
```

```bash
redes@debian:~$ dig www.redes.unlp.edu.ar NS

; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar NS
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 10661
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: d4e9ac68ddcc83a00100000066135b1dd8e4fc49567742d0 (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	NS

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 07 23:49:01 -03 2024
;; MSG SIZE  rcvd: 127
```


### Desglose de la Respuesta

```bash
; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar NS
# Esta línea indica la ejecución del comando `dig` en un sistema Debian, consultando los registros NS 
# (Name Server o Servidores de Nombres) para el dominio www.redes.unlp.edu.ar.

;; global options: +cmd
# Muestra las opciones globales utilizadas por `dig`. 
# Aquí, `+cmd` significa que se incluye la línea de comando inicial en la salida para referencia.

;; Got answer:
# Indica que se ha recibido una respuesta del servidor DNS consultado.

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 10661
# Sección del encabezado de la respuesta DNS:
# - `opcode: QUERY` especifica que la operación fue una consulta.
# - `status: NOERROR` indica que la consulta se completó sin errores.
# - `id: 10661` es el identificador de la transacción, útil para emparejar solicitudes con respuestas.

;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
# Detalles de los indicadores y conteos de la consulta:
# - `qr` (query response) señala que esto es una respuesta.
# - `aa` (authoritative answer) indica que la respuesta es autoritativa.
# - `rd` (recursion desired) muestra que se solicitó recursión.
# - `ra` (recursion available) indica que el servidor puede hacer consultas recursivas.
# - `QUERY: 1` muestra que hubo una pregunta realizada.
# - `ANSWER: 0` indica que no hubo respuestas directas al tipo de registro solicitado (NS en este caso).
# - `AUTHORITY: 1` muestra que hay un registro de autoridad, en este caso un registro SOA.
# - `ADDITIONAL: 1` indica un registro adicional, probablemente relacionado con EDNS.

;; OPT PSEUDOSECTION:
# Sección de opciones extendidas del DNS (EDNS).
; EDNS: version: 0, flags:; udp: 1232
# Detalles de EDNS, incluyendo la versión y el tamaño máximo de UDP (1232 bytes).
; COOKIE: d4e9ac68ddcc83a00100000066135b1dd8e4fc49567742d0 (good)
# Un mecanismo de seguridad EDNS que proporciona un 'cookie' para autenticar solicitudes y respuestas.

;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	NS
# La sección de pregunta muestra la consulta realizada, solicitando los 
# registros NS para `www.redes.unlp.edu.ar`.

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
# Sección de autoridad que proporciona el registro SOA (Start of Authority) 
# para el dominio `redes.unlp.edu.ar`, 
# ya que no se encontraron registros NS específicos para `www.redes.unlp.edu.ar`. 
# El registro SOA incluye información crítica como el servidor de nombres principal, 
# el contacto de correo electrónico, y varios temporizadores para la zona.

;; Query time: 0 msec
# El tiempo que tomó realizar la consulta, 0 milisegundos, indicando una respuesta rápida.

;; SERVER: 172.28.0.29#53(172.28.0.29)
# La dirección IP y el puerto (#53) del servidor DNS que respondió a la consulta.

;; WHEN: Sun Apr 07 23:49:01 -03 2024
# La fecha y hora exacta en que se realizó la consulta.

;; MSG SIZE  rcvd: 127
# El tamaño del mensaje de respuesta recibido, en este caso, 127 bytes.

```

### Consulta

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6b1c7fa3-1684-4eff-8d6a-78d7ba7e2ac6)

### Respuesta

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1ad414e9-537e-4828-8d63-3d6576a41359)

---

## Registro SOA

```bash
redes@debian:~$ dig redes.unlp.edu.ar SOA
```

```bash
redes@debian:~$ dig redes.unlp.edu.ar SOA

; <<>> DiG 9.16.27-Debian <<>> redes.unlp.edu.ar SOA
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 56877
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 7bd1c774cf6a7d920100000066135a6d5d9d14b02aa8c4b7 (good)
;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	SOA

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 07 23:46:05 -03 2024
;; MSG SIZE  rcvd: 123
```

### Desglose de la Respuesta

```bash
; <<>> DiG 9.16.27-Debian <<>> redes.unlp.edu.ar SOA
# Esta línea indica que se ejecutó el comando `dig` en una distribución Debian para consultar el registro SOA (Start of Authority) para el dominio redes.unlp.edu.ar. 

;; global options: +cmd
# Muestra las opciones globales aplicadas a la consulta. `+cmd` indica que el comando ejecutado se muestra en la salida para referencia.

;; Got answer:
# Confirma que se ha recibido una respuesta a la consulta DNS.

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 56877
# Encabezado de la respuesta DNS:
# - `opcode: QUERY` indica que se realizó una consulta DNS.
# - `status: NOERROR` significa que la consulta se completó sin errores.
# - `id: 56877` es un identificador único para esta transacción, útil para correlacionar solicitudes y respuestas.

;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
# Detalles de la consulta:
# - `qr` (query response) señala que esto es una respuesta.
# - `aa` (authoritative answer) indica que la respuesta es autoritativa.
# - `rd` (recursion desired) muestra que se solicitó recursión.
# - `ra` (recursion available) indica que el servidor puede realizar consultas recursivas.
# - `QUERY: 1` muestra que hubo una pregunta realizada.
# - `ANSWER: 1` indica que se proporcionó una respuesta.
# - `AUTHORITY: 0` muestra que no hay registros de autoridad adicionales.
# - `ADDITIONAL: 1` indica un registro adicional, relacionado con EDNS.

;; OPT PSEUDOSECTION:
# Sección de opciones extendidas del DNS (EDNS).
; EDNS: version: 0, flags:; udp: 1232
# Muestra la versión de EDNS utilizada y el tamaño máximo de paquete UDP (1232 bytes).
; COOKIE: 7bd1c774cf6a7d920100000066135a6d5d9d14b02aa8c4b7 (good)
# Un mecanismo de seguridad EDNS que proporciona un 'cookie' para autenticar la consulta y la respuesta.

;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	SOA
# La sección de pregunta muestra que la consulta fue para el registro SOA del dominio redes.unlp.edu.ar.

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
# La sección de respuesta contiene el registro SOA para el dominio:
# - `ns-sv-b.redes.unlp.edu.ar.` es el servidor de nombres que tiene autoridad sobre el dominio.
# - `root.redes.unlp.edu.ar.` es el contacto administrativo para el dominio.
# - `2020031700` es el número de serie del registro SOA, importante para la gestión de cambios.
# - `604800` es el intervalo de refresco en segundos (cada 7 días).
# - `86400` es el tiempo de reintento en segundos (1 día), en caso de fallo al refrescar.
# - `2419200` es el tiempo de expiración en segundos (28 días), después del cual los datos se consideran obsoletos si no se logra la actualización.
# - `86400` es el valor mínimo de TTL (Time To Live) en segundos, que indica cuánto tiempo un registro puede ser cacheado por los servidores DNS.

;; Query time: 0 msec
# El tiempo que tomó realizar la consulta, 0 milisegundos, indicando una respuesta inmediata.

;; SERVER: 172.28.0.29#53(172.28.0.29)
# La dirección IP y el puerto del servidor DNS que respondió a la consulta.

;; WHEN: Sun Apr 07 23:46:05 -03 2024
# La fecha y hora exactas de cuando se realizó la consulta.

;; MSG SIZE  rcvd: 123
# El tamaño del mensaje de respuesta recibido, en este caso, 123 bytes.
```

---

### Registro TXT

```bash
dig redes.unlp.edu.ar TXT
```

```bash
redes@debian:~$ dig www.redes.unlp.edu.ar TXT

; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar TXT
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60088
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 924f899d4f35a97f0100000066135f724ecbd98262016eb9 (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	TXT

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Mon Apr 08 00:07:30 -03 2024
;; MSG SIZE  rcvd: 127
```

### Desglose de la Respuesta

```bash
; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar TXT
# Esta línea indica la ejecución del comando `dig` en un sistema Debian 
# para consultar registros TXT para el dominio www.redes.unlp.edu.ar.

;; global options: +cmd
# Indica las opciones globales aplicadas a la consulta, con `+cmd` mostrando el comando ejecutado.

;; Got answer:
# Confirma que se ha recibido una respuesta a la consulta DNS.

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60088
# La sección del encabezado de la respuesta DNS:
# - `opcode: QUERY` especifica que la operación fue una consulta.
# - `status: NOERROR` significa que la consulta se completó sin errores.
# - `id: 60088` es el identificador único para esta transacción, 
#               útil para correlacionar solicitudes y respuestas.

;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
# Resumen de la consulta y la respuesta:
# - `qr` (query response) señala que esto es una respuesta.
# - `aa` (authoritative answer) indica que la respuesta es autoritativa.
# - `rd` (recursion desired) muestra que se solicitó recursión.
# - `ra` (recursion available) indica que el servidor puede realizar consultas recursivas.
# - `QUERY: 1` indica que se hizo una pregunta.
# - `ANSWER: 0` indica que no se encontraron registros TXT para el dominio consultado.
# - `AUTHORITY: 1` muestra que hay un registro de autoridad, un registro SOA en este caso.
# - `ADDITIONAL: 1` indica la presencia de una sección adicional, probablemente relacionada con EDNS.

;; OPT PSEUDOSECTION:
# Sección de opciones extendidas del DNS (EDNS).
; EDNS: version: 0, flags:; udp: 1232
# Muestra la versión de EDNS utilizada y el tamaño máximo de paquete UDP (1232 bytes).
; COOKIE: 924f899d4f35a97f0100000066135f724ecbd98262016eb9 (good)
# Un mecanismo de seguridad EDNS que proporciona un 'cookie' para autenticar la consulta y la respuesta.

;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	TXT
# La sección de pregunta muestra la consulta realizada, solicitando los registros 
# TXT para www.redes.unlp.edu.ar.

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 
  	                            2020031700 604800 86400 2419200 86400
# La sección de autoridad contiene un registro SOA para el dominio redes.unlp.edu.ar. 
# Este registro proporciona información administrativa sobre el dominio:
# - `ns-sv-b.redes.unlp.edu.ar.` es el servidor de nombres principal.
# - `root.redes.unlp.edu.ar.` es el contacto administrativo.
# - `2020031700` es el número de serie de la zona, importante para controlar las
#                versiones y las actualizaciones.
# - `604800` es el intervalo de refresco en segundos (cada 7 días).
# - `86400` es el tiempo de reintento en segundos (1 día), en caso de fallo al refrescar.
# - `2419200` es el tiempo de expiración en segundos (28 días), después del cual los 
#             datos se consideran obsoletos si no se logra la actualización.
# - `86400` es el valor mínimo de TTL (Time To Live) en segundos, que indica 
#           cuánto tiempo un registro puede ser cacheado por los servidores DNS.

;; Query time: 0 msec
# El tiempo que tomó realizar la consulta, 0 milisegundos, indicando una respuesta rápida.

;; SERVER: 172.28.0.29#53(172.28.0.29)
# La dirección IP y el puerto del servidor DNS que respondió a la consulta.

;; WHEN: Mon Apr 08 00:07:30 -03 2024
# La fecha y hora exactas de cuando se realizó la consulta.

;; MSG SIZE  rcvd: 127
# El tamaño del mensaje de respuesta recibido, en este caso, 127 bytes.
```

---

### Ejemplos de Varios Comandos

```bash
redes@debian:~$ dig redes.unlp.edu.ar AAAA +noall +answer
redes@debian:~$ dig redes.unlp.edu.ar MX +noall +answer
redes.unlp.edu.ar.	86400	IN	MX	5 mail.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	MX	10 mail2.redes.unlp.edu.ar.
redes@debian:~$ dig redes.unlp.edu.ar A +noall +answer
redes@debian:~$ dig redes.unlp.edu.ar NS +noall +answer
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-a.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-b.redes.unlp.edu.ar.
redes@debian:~$ dig www.redes.unlp.edu.ar CNAME +noall +answer
redes@debian:~$ dig redes.unlp.edu.ar SOA +noall +answer
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
redes@debian:~$ dig redes.unlp.edu.ar TXT +noall +answer
redes@debian:~$ 
```

Mira, lo que esta pasando aca chiquiFabo, es que la url no tiene configurado ciertos registros, no es que estes loco :D

---

### Ver registros para una url

```bash
dig redes.unlp.edu.ar any
```

```bash
;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	ANY

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-a.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-b.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	MX	10 mail2.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	MX	5 mail.redes.unlp.edu.ar.

;; ADDITIONAL SECTION:
ns-sv-a.redes.unlp.edu.ar. 604800 IN	A	172.28.0.30
ns-sv-b.redes.unlp.edu.ar. 604800 IN	A	172.28.0.29
mail.redes.unlp.edu.ar.	86400	IN	A	172.28.0.90
mail2.redes.unlp.edu.ar. 86400	IN	A	172.28.0.91

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Tue Apr 09 16:03:51 -03 2024
;; MSG SIZE  rcvd: 266
```


### Resultado desglozado

```bash
;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	ANY
# Esta sección muestra la consulta realizada. Se pidió información "IN ANY", lo que significa que se solicitó cualquier tipo de registro DNS disponible para el dominio 'redes.unlp.edu.ar'.

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
# Un registro SOA (Start of Authority), que proporciona información esencial sobre el dominio, incluyendo el servidor de nombres principal (ns-sv-b.redes.unlp.edu.ar), el contacto administrativo (root.redes.unlp.edu.ar), el número de serie de la zona, y varios temporizadores relacionados con la actualización y la caducidad de los registros.

redes.unlp.edu.ar.	86400	IN	NS	ns-sv-a.redes.unlp.edu.ar.
# Un registro NS (Name Server), que indica que 'ns-sv-a.redes.unlp.edu.ar' es un servidor de nombres autoritativo para el dominio 'redes.unlp.edu.ar'.

redes.unlp.edu.ar.	86400	IN	NS	ns-sv-b.redes.unlp.edu.ar.
# Otro registro NS, señalando a 'ns-sv-b.redes.unlp.edu.ar' como otro servidor de nombres autoritativo para el dominio.

redes.unlp.edu.ar.	86400	IN	MX	10 mail2.redes.unlp.edu.ar.
# Un registro MX (Mail Exchange), que especifica 'mail2.redes.unlp.edu.ar' como servidor de correo para el dominio, con una prioridad de 10.

redes.unlp.edu.ar.	86400	IN	MX	5 mail.redes.unlp.edu.ar.
# Otro registro MX, que indica 'mail.redes.unlp.edu.ar' como servidor de correo para el dominio, con una prioridad de 5 (mayor prioridad que el anterior).

;; ADDITIONAL SECTION:
ns-sv-a.redes.unlp.edu.ar. 604800 IN	A	172.28.0.30
# La sección adicional proporciona direcciones IP para los servidores mencionados. Aquí, 'ns-sv-a.redes.unlp.edu.ar' se asocia con la dirección IP 172.28.0.30.

ns-sv-b.redes.unlp.edu.ar. 604800 IN	A	172.28.0.29
# Proporciona la dirección IP para 'ns-sv-b.redes.unlp.edu.ar', que es 172.28.0.29.

mail.redes.unlp.edu.ar.	86400	IN	A	172.28.0.90
# Da la dirección IP del servidor de correo 'mail.redes.unlp.edu.ar', que es 172.28.0.90.

mail2.redes.unlp.edu.ar. 86400	IN	A	172.28.0.91
# Proporciona la dirección IP para otro servidor de correo, 'mail2.redes.unlp.edu.ar', que es 172.28.0.91.

;; Query time: 0 msec
# El tiempo que tomó realizar la consulta, en este caso, fue instantáneo (0 milisegundos).

;; SERVER: 172.28.0.29#53(172.28.0.29)
# Indica el servidor DNS que respondió a la consulta, con su dirección IP y el puerto utilizado (53, el puerto estándar para DNS).

;; WHEN: Tue Apr 09 16:03:51 -03 2024
# Muestra la fecha y hora exactas en que se realizó la consulta.

;; MSG SIZE  rcvd: 266
# El tamaño total del mensaje de respuesta recibido, en bytes (266 en este caso).
```

Este resultado detalla los registros DNS recuperados para `redes.unlp.edu.ar` al solicitar cualquier tipo de registro (`ANY`). Proporciona una visión general de la configuración DNS del dominio, incluyendo servidores de nombres, servidores de correo, y la autoridad de inicio del dominio, junto con las direcciones IP asociadas a cada uno de estos servicios. La sección adicional ayuda a resolver nombres a direcciones IP sin necesidad de consultas adicionales.

























