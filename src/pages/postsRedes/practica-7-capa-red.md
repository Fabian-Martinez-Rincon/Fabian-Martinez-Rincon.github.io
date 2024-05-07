---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Capa de Red'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/capa-transporte.webp'
    alt: ''
tags: ["Capa de Aplicación"]
---

1. ¿Qué servicios presta la capa de red? ¿Cuál es la PDU en esta capa? ¿Qué dispositivo es considerado sólo de la capa de red?


2. ¿Por qué se lo considera un protocolo de mejor esfuerzo?

3. ¿Cuántas redes clase A, B y C hay? ¿Cuántos hosts como máximo pueden tener cada una?

4. ¿Qué son las subredes? ¿Por qué es importante siempre especificar la máscara de subred asociada?

5. ¿Cuál es la finalidad del campo Protocol en la cabecera IP? ¿A qué campos de la capa de transporte se asemeja en su funcionalidad?


División en subredes

6. Para cada una de las siguientes direcciones IP (172.16.58.223/26, 163.10.5.49/27, 128.10.1.0/23, 10.1.0.0/24, 8.40.11.179/12) determine:
- a. ¿De qué clase de red es la dirección dada (Clase A, B o C)?
- b. ¿Cuál es la dirección de subred?
- c. ¿Cuál es la cantidad máxima de hosts que pueden estar en esa subred?
- d. ¿Cuál es la dirección de broadcast de esa subred?
- e. ¿Cuál es el rango de direcciones IP válidas dentro de la subred?

7. Su organización cuenta con la dirección de red 128.50.10.0. Indique:
- a. ¿Es una dirección de red o de host?
- b. Clase a la que pertenece y máscara de clase.
- c. Cantidad de hosts posibles.
- d. Se necesitan crear, al menos, 513 subredes. Indique:
    - i. Máscara necesaria.
    - ii. Cantidad de redes asignables.
    - iii. Cantidad de hosts por subred.
    - iv. Dirección de la subred 710.
    - v. Dirección de broadcast de la subred 710.

8. Si usted estuviese a cargo de la administración del bloque IP 195.200.45.0/24
- a. ¿Qué máscara utilizaría si necesita definir al menos 9 subredes?
- b. Indique la dirección de subred de las primeras 9 subredes.
- c. Seleccione una e indique dirección de broadcast y rango de direcciones asignables en esa subred.

9. Dado el siguiente gráfico:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/84bced02-ed1c-4d45-b301-8bcf124fd4a9)

- a. Verifique si es correcta la asignación de direcciones IP y, en caso de no serlo, modifique la misma para que lo sea.
- b. ¿Cuántos bits se tomaron para hacer subredes en la red 10.0.10.0/24? ¿Cuántas subredes se podrían generar?
- c. Para cada una de las redes utilizadas indique si son públicas o privadas.


CIDR
10. ¿Qué es CIDR (Class Interdomain routing)? ¿Por qué resulta útil?

11. ¿Cómo publicaría un router las siguientes redes si se aplica CIDR?
- a. 198.10.1.0/24
- b. 198.10.0.0/24
- c. 198.10.3.0/24
- d. 198.10.2.0/24


12. Listar las redes involucradas en los siguientes bloques CIDR:
- 200.56.168.0/21
- 195.24.0.0/13
- 195.24/13

13. El bloque CIDR 128.0.0.0/2 o 128/2, ¿Equivale a listar todas las direcciones de red de clase B? ¿Cuál sería el bloque CIDR que agrupa todas las redes de clase A?

VLSM

14. ¿Qué es y para qué se usa VLSM?

15. Describa, con sus palabras, el mecanismo para dividir subredes utilizando VLSM.

16. Suponga que trabaja en una organización que tiene la red que se ve en el gráfico y debe armar el direccionamiento para la misma, minimizando el desperdicio de direcciones IP.

Dicha organización posee la red 205.10.192.0/19, que es la que usted deberá utilizar.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/06fab6ba-67c4-427f-b729-5845aec8f9ed)

a. ¿Es posible asignar las subredes correspondientes a la topología utilizando subnetting sin VLSM? Indique la cantidad de hosts que se desperdicia en cada subred.

b. Asigne direcciones a todas las redes de la topología. Tome siempre en cada paso la primera dirección de red posible.

c. Para mantener el orden y el inventario de direcciones disponibles, haga un listado de todas las direcciones libres que le quedaron, agrupándolas utilizando CIDR.

d. Asigne direcciones IP a todas las interfaces de la topología que sea posible.

17. Utilizando la siguiente topología y el bloque asignado, arme el plan de direccionamiento IPv4 teniendo en cuenta las siguientes restricciones:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c39bd88d-e208-45cf-b70e-a764ac567c8b)

- a. Utilizar el bloque IPv4 200.100.8.0/22.
- b. La red A tiene 125 hosts y se espera un crecimiento máximo de 20 hosts.
- c. La red X tiene 63 hosts.
- d. La red B cuenta con 60 hosts
- e. La red Y tiene 46 hosts y se espera un crecimiento máximo de 18 hosts.
- f. En cada red, se debe desperdiciar la menor cantidad de direcciones IP posibles. En este sentido, las redes utilizadas para conectar los routers deberán utilizar segmentos de red /30 de modo de desperdiciar la menor cantidad posible de direcciones IP

18. Asigne direcciones IP en los equipos de la topología según el plan anterior.

ICMP y Configuraciones IP

19. Describa qué es y para qué sirve el protocolo ICMP.
- a. Analice cómo funciona el comando ping.
    - i. Indique el tipo y código ICMP que usa el ping.
    - ii. Indique el tipo y código ICMP que usa la respuesta de un ping
- b. Analice cómo funcionan comandos como traceroute/tracert de Linux/Windows y cómo manipulan el campo TTL de los paquetes IP.
- c. Indique la cantidad de saltos realizados desde su computadora hasta el sitio www.nasa.gov. Analice:
    - i. Cómo hacer para que no muestre el nombre del dominio asociado a la IP de cada salto.
    - ii. La razón de la aparición de * en parte o toda la respuesta de un salto.
- d. Verifique el recorrido hacia los servidores de nombre del dominio unlp.edu.ar. En base al recorrido realizado, ¿podría confirmar cuál de ellos toma un camino distinto?

20. ¿Para que se usa el bloque 127.0.0.0/8? ¿Qué PC responde a los siguientes comandos?
- a. ping 127.0.0.1
- b. ping 127.0.54.43

21. Investigue para qué sirven los comandos ifconfig y route. ¿Qué comandos podría utilizar en su reemplazo? Inicie una topología con CORE, cree una máquina y utilice en ella los comandos anteriores para practicar sus diferentes opciones, mínimamente:
- Configurar y quitar una dirección IP en una interfaz.
- Ver la tabla de ruteo de la máquina