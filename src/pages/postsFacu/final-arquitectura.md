---
layout: ../../layouts/MarkdownPostLayout.astro
title: Final AC
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Materias/finales-Arquitectura.jpg'
    alt: "Miniatura de los rayos de Astro."
pubDate: 2024-08-05
tags: [""]
category: Facultad
---

- [Clase 1 Subrutinas](#clase-1-subrutinas)
- [Clase 2 Subrutinas](#clase-2-subrutinas)
- [Clase 3 Interrupciones](#clase-3-interrupciones)
- [Clase 4 Entrada/Salida](#clase-4-entradasalida)
- [Clase 5 Comunicación CPU-Impresora](#clase-5-comunicación-cpu-impresora)
- [Clase 6 Segmentación de Intrucciones](#clase-6-segmentación-de-intrucciones)


---

### Clase 1 Subrutinas

Temas de la clase

Programas, Subrutinas, Pasaje de Parámetros, Funcionamiento de la pila, Push/Pop,

<details><summary>Subrutinas</summary>

- Misma idea de los procedimientos en Pascal.
- También tiene una definición determinada. Encabezamiento y final. Cuerpo del procedimiento (instrucciones).
- Vamos a ver esto para el simulador.

Lo unico que es fijo es los 2000h que es el programa principal

![image](https://github.com/user-attachments/assets/e610bfce-e313-4679-990c-3134eaf1dda6)
</details>

<details><summary>Pasaje de parámetros a subrutinas</summary>

- Procedimientos (subrutinas), en general requieren datos de entrada y proveen datos de salidas.
- Parámetros son estos datos pasados a y desde el procedimiento.
- Estos parámetros pueden ser pasados de dos maneras:
  - Por valor
  - Por referencia

**Parámetros por valor**

- Es eso: se pasa el valor de una variable al procedimiento.
- Son sólo parámetros de entrada.
- Independientemente del uso de este valor por parte del procedimiento, éste no puede ser modificado.

**Parámetros por referencia**

> Esto es util cuando tenemos muchos parametros ya que en lugar de pasar muchos parametros pasamos la direccion de memoria de un arreglo.

- Aquí es pasada la dirección de la variable y no su valor.
- Es necesario cuando hay que modificar el valor del parámetro (retorno).
- En general menos eficiente que pasar por valor. Tenemos la dir y hay que acceder a memoria para buscar el dato.
- Pero más eficiente cuando hay que transferir un arreglo datos entre proc. Así se pasa la dir del arreglo.

</details>

<details><summary>¿Dónde se pasan los parámetros?</summary>

- **Vía registros**
  - El número de registros es la principal limitación
  - Es importante documentar que registros se usan

- **Vía memoria**
  - Variables definidas en el programa (“globales”)
  - Se usa un área definida de memoria (RAM).
  - Difícil de estandarizar

- **Vía pila (stack)**
  - Es el método más ampliamente usado.
  - La pila (o stack) es una zona de memoria (RAM) destinada a este uso específico.
  - Lo usa la mayoría de los lenguajes de alto nivel.
  - Independiente de memoria y registros.
  - Hay que comprender bien cómo funciona porque la pila (stack) es usada por el usuario y por el sistema.
  - Aunque es más complicado, en general los registros son recursos muy preciados.

</details>

<details><summary>Funcionamiento de la Pila</summary>

- Zona de memoria destinada a un uso específico
  - `Uso del sistema`: salva la dirección de retorno cuando es llamada una subrutina o se produce una interrupción por hardware
  - `Uso del usuario`: pasaje de parámetros

- Cada vez que se ejecuta un programa, el SO inicializa el reg SP apuntando a la pila
  - El simulador inicializa SP=8000H

</details>


<details><summary>Operaciones de apilar/desapilar</summary>

- **PUSH:** apila datos. El SP apunta al último dato almacenado, por lo tanto primero se decrementa y luego almacena el dato.
- **POP:** desapila datos. Desapila el dato y luego incrementa el SP. Operación inversa a la anterior.
- **PUSH y POP** apilan y desapilan datos de 16 bits (2 bytes).

| Push                           | Pop                                                                                                                        |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| ![image](https://github.com/user-attachments/assets/35f603af-5a8f-473b-9e34-c615747fd2fe) | ![image](https://github.com/user-attachments/assets/23a62094-7be9-47c8-bd5b-28d95ef60f98) |

![image](https://github.com/user-attachments/assets/e666e366-481a-4ce0-8294-11b6783ee713)

![image](https://github.com/user-attachments/assets/e2750d05-7327-4990-818c-050405b2fc5e)

</details>

<details><summary>Llamada al procedimiento y pasaje de parámetros por pila</summary>

En el programa principal

```
...
Push Parámetro 1
Push Parámetro 2
Call    Nombre
...
```

**Uso de registros con la pila (1)**

- SP = Stack pointer (Puntero de pila).
- Apunta al último dato almacenado en la pila:
  - Por el usuario con push y pop
  - Por el sistema al salvar la dirección de retorno en el llamado a una subrutina o cuando se produce una interrupción (la veremos más adelante).


**Uso de registros con la pila (2)**

- BP = Base pointer (Puntero base). Como SP no es un registro base o índice, no puede ser usado para direccionar entre corchetes. No está permitido [SP].
- Para direccionar la pila se usa BP. Así si se ejecutan instrucciones push y pop se modifica SP; si hay una llamada a procedimiento también se modifica SP.
- BP está manejado por el usuario.

> BX es como BP pero solo para usar con la pila

Se pueden apilar direcciones sin usar un pull

Nosotros como programadores movemos el stack pointer con push y pop y el sistema lol mueve cada vez que hay un `call` y un `ret` 

![image](https://github.com/user-attachments/assets/05f3daa7-d559-46c0-b485-a67ca4c6b089)

</details>

<details><summary>Sumar dos datos pasados Por en Registros y Por Valor</summary>

![image](https://github.com/user-attachments/assets/f7cd8a85-7415-426c-92c8-8ef5b8115a84)
</details>

<details><summary>Lo mismo de arriba pero por referencia</summary>

![image](https://github.com/user-attachments/assets/76f96354-ce7a-467a-a217-baf8c99e069f)
![image](https://github.com/user-attachments/assets/3078e1dc-471d-40ce-8087-4a12b7d24fbc)
![image](https://github.com/user-attachments/assets/ca74c369-d6e1-4946-9832-44423aec5a99)
![image](https://github.com/user-attachments/assets/1eb4ecf7-3f01-4047-8e8c-6887f15c7a5a)
![image](https://github.com/user-attachments/assets/cf940e82-bf59-416c-9401-de125e23f94b)
</details>

<details><summary>Una suma donde los parametros se pansan por valor en la PILA</summary>

![image](https://github.com/user-attachments/assets/51928990-cc8a-45a3-9b83-4364146c1f70)
![image](https://github.com/user-attachments/assets/10223f55-8c1e-453c-aab6-1d52eeb57da5)
![image](https://github.com/user-attachments/assets/92fd10f0-1f1b-4c91-a793-82fe3ef1ea23)
![image](https://github.com/user-attachments/assets/99a72b26-3ce9-4612-89c0-2fb9c7aee75d)

Aca BX se salva pero no es necesario si no se pide en el enunciado

![image](https://github.com/user-attachments/assets/e1dfa43d-8b36-4ede-aa09-8bd4c158752b)
![image](https://github.com/user-attachments/assets/c9391061-086d-4e78-88fa-a0a355ad02bc)

Porque BX y no SP?, Porque es el unico registro que permite el direccionamiento indirecto (Lo de poner corchetes y quedarnos con los valores basicamente)

![image](https://github.com/user-attachments/assets/6b9f2e5d-d7a8-494d-9444-9462952385cb)
![image](https://github.com/user-attachments/assets/0c47184e-2850-4913-aa93-9e3ca5f5753f)
![image](https://github.com/user-attachments/assets/7e6acb24-e661-4ed0-bde5-d05b664a53ab)
![image](https://github.com/user-attachments/assets/bf3ae40f-8fd8-4bf4-9390-150e73af7354)
![image](https://github.com/user-attachments/assets/0a8647be-19ae-410b-9d34-9894df1f25b6)
![image](https://github.com/user-attachments/assets/9736f941-af1b-473a-9869-3b0a724f40b1)
![image](https://github.com/user-attachments/assets/eb7a4368-09d4-4975-9658-ebe109074150)
</details>

---

### Clase 2 Subrutinas

<details><summary>Ejercicio 1</summary>

![image](https://github.com/user-attachments/assets/8d5525f5-bd08-49bc-90ea-56efe455819a)
</details>

<details><summary>Ejercicio 2</summary>

![image](https://github.com/user-attachments/assets/82a9eb6b-781f-450e-990f-de4128e1cd71)
![image](https://github.com/user-attachments/assets/53c6e12f-3415-47db-8330-8b01b6b05b5f)
</details>

<details><summary>Ejercicio 3</summary>

> Algunos numeros de aca estan mal igual, no hace falta ver este ejercicio.

![image](https://github.com/user-attachments/assets/33000a6a-76c2-4eae-9098-d28d0bf58547)
</details>

<details><summary>Sumar la cantidad de caracteres</summary>

![image](https://github.com/user-attachments/assets/372952a8-b60a-47bc-a5e0-77ff0cb73acb)
</details>


<details><summary>Ejercicio 7</summary>

![image](https://github.com/user-attachments/assets/59f2324c-c822-4897-852a-1860aadf02d3)
![image](https://github.com/user-attachments/assets/57bbaf37-20fb-488f-bd0a-3da5d2b67d8f)
![image](https://github.com/user-attachments/assets/b8f85adb-1b44-44d5-b837-f8d3044271ca)
</details>


---

### Clase 3 Interrupciones


<details><summary>Interrupciones</summary>


- La funcionalidad dentro de un sistema de cómputo es implementada por hardware que ayuda al procesador.
- Cada dispositivo opera a su propio ritmo, pero hay necesidad de sincronizar la operación del procesador con estos dispositivos.


**Interrupciones (2)**

- Una solución: el procesador pregunta a c/dispositivo su estado (si hay dato disponible). Cuando el dato está disponible el procesador puede leerlo y procesarlo. (Polling)

- Desventajas:
  - El procesador malgasta tiempo preguntando continuamente si hay algún dato disponible.
  - Hay que esperar a los dispositivos más lentos.


**Interrupciones (3)**

**Mejor solución**: cuando un dispositivo necesita la atención del procesador, envía una señal para avisarle, es decir, produce una interrupción. Este mecanismo permite alterar la secuencia normal de procesamiento. Recordar otros mecanismos (jmp, call).

</details>

<details><summary>Interrupciones por hardware</summary>

- Son las generadas por dispositivos de E/S.
- Son las "verdaderas" interrupciones.
- El sistema de cómputo tiene que manejar estos eventos externos "no planeados" o "asíncrónicos".
- No están relacionadas con el proceso en ejecución en ese momento.
- Son conocidas como interrupt request.

</details>


<details><summary>Traps</summary>

Interrupciones por hardware creadas por el procesador en respuesta a ciertos eventos como:
- Condiciones excepcionales: overflow en punto flotante.
- Falla de programa: tratar de ejecutar una instrucción no definida.
- Fallas de hardware: error de paridad de memoria.

</details>


<details><summary>Interrupciones por software</summary>

Muchos procesadores tienen instrucciones explícitas que afectan el estado del procesador en la misma manera que int por hardware. Generalmente usadas para hacer llamadas a funciones del SO. Esta característica permite que las subrutinas del sistema se carguen en cualquier lugar.

- No requieren conocer la dirección de la rutina en tiempo de ejecución.
- Son más cortas que Call.
- Hay sistemas que no permiten hacer una llamada directa a una dirección de la función del SO, pues es una zona reservada.
- Se pueden reubicar fácilmente.

</details>

<details><summary>¿Qué pasa si no las tuviera?</summary>

Al cargar un programa habría que "mirar" todas las llamadas al BIOS y SO y reemplazar en el código las direcciones de todas estas funciones invocadas.

</details>

<details><summary>Interrupciones por Software vs Hardware</summary>

![image](https://github.com/user-attachments/assets/9a394268-62ed-4446-a667-961c88dffde7)

</details>

#### Interrupciones por Hardware

<details><summary>Diagrama de Estados de un ciclo de Intrucción con Interrupciones</summary>

> Esto no se toma pero es para saberlo

![image](https://github.com/user-attachments/assets/8e6ca96e-79f9-4103-8496-2efb181dca56)

</details>

<details><summary>Ciclo de interrupción</summary>

- Añadido al ciclo de instrucción.
- El procesador comprueba si se ha generado alguna interrupción.
  - Indicada por la presencia de una señal de interrupción.
- Si no hay señales de interrupción, capta la siguiente instrucción.
- Si hay alguna interrupción pendiente:
  - Se suspende la ejecución del programa en curso.
  - Guarda su contexto (próxima instrucción a ejecutar y otros).
  - Carga el PC con la dirección de comienzo de una rutina de gestión de interrupción.
  - Finalizada la rutina de gestión, el procesador retoma la ejecución del programa del usuario en el punto de interrupción.
</details>

<details><summary>Escenario de trabajo</summary>

- El procesador tiene una única entrada de interrupciones.
- ¿Cómo solucionamos tener varias entradas de interrupciones?
- Existe un dispositivo: controlador de interrupciones (PIC).
- Interrupciones priorizadas.

![image](https://github.com/user-attachments/assets/289cbea9-3c9c-4ed8-8ae6-89e9f1c904d1)
</details>

<details><summary>¿Como trabaja el PIC?</summary>

1. El PIC recibe un pedido de interrupción de un dispositivo externo y prioriza éste con otros pedidos que pueden llegar o estar pendientes.

![image](https://github.com/user-attachments/assets/5e98cf2e-a460-4cc2-bef1-9ec133890922)

2. Un pedido de interrupción es enviado al procesador, por la línea INTR.

![image](https://github.com/user-attachments/assets/a95fcaed-0564-44d6-b86e-7daf1ac36041)

3. El procesador contesta por la línea INTA y solicita un puntero de 8 bits para la tabla.

![image](https://github.com/user-attachments/assets/e421880e-70b1-4eda-bb6a-77d584780185)

4. El procesador recibe el puntero y lo usa para acceder a la tabla de vectores (direcciones) donde se encuentra la dirección del servicio.

![image](https://github.com/user-attachments/assets/84f02e74-33d9-4ebf-baf9-52cc884c185e)

5. Accede a la tabla y obtiene la dirección buscada.

![image](https://github.com/user-attachments/assets/05bdfff2-4c77-4d44-9bcb-14d3c5332484)

6. Salva en la pila la dirección actual, los flags y salta a la dirección del servicio.

![image](https://github.com/user-attachments/assets/e1c7eefb-0da1-4d27-b644-d5c399a8ee63)

</details>

<details><summary>Vectores de Interrupción</summary>

- 00 ⟶ 255 - 00h ⟶ FFh hay 256 entradas en la tabla.
- Cada entrada en la tabla son 4 bytes, que tienen la dirección del servicio que atiende a la interrupción.
- Los 16 bits más altos están siempre en cero.
- Los restantes 16 bits tienen la dirección lógica/física. Las direcciones en el simulador son de 16 bits. Ej. 0000XXXXh
- De las 256 posibles interrupciones: 4 están usadas por interrupciones de soft:
  - **Tipo 0 (INT 0)**: finaliza la ejecución de un programa.
  - **Tipo 3 (INT 3)**: puntos de parada en el programa.
  - **Tipo 6 (INT 6)**: espera un carácter del teclado y lo almacena en la dirección apuntada por BX. (Entrada estándar).
  - **Tipo 7 (INT 7)**: escribe en pantalla. BX = dirección de comienzo del bloque de datos. AL = No de datos. (Salida estándar).
- El resto de las interrupciones (entradas en la tabla) están libres para ser utilizadas.
</details>

<details><summary>Perifericos Internos</summary>

- PIO: puertos paralelos de e/s
- HAND-SHAKE:
- PIC: controlador de interrupciones
- TIMER: contador de eventos
- CDMA: controlador de acceso directo a memoria
</details>

<details><summary>Perifericos Externos</summary>

- Barra de led’s.
- Barra de interruptores (microswitchs).
- Impresora.
</details>

<details><summary>Controlador de interrupciones (PIC)</summary>

- Puede manejar hasta 8 interrupciones.
- INT0 ⟶ INT7, por hardware (sin espacios)
- Esquema de prioridades:
  - 0 = más alta prioridad
  - 7 = más baja prioridad
</details>

<details><summary>PIC: registros internos</summary>

- Todos son de 8 bits
- **ISR**: registro de interrupción en servicio. Indica cuál es la interrupción que está siendo atendida. Ej. Si se atiende INT0 se pone en 1 el bit 0; si se atiende INT7 se pone en 1 bit 7.
- **IRR**: registro de petición de interrupción. El bit asociado se pone en 1 cuando hay un pedido de int y va a 0 cuando es atendida.
- **IMR**: registro de máscara de interrupción. Permite enmascarar cada una de las entradas, bit 0 ⟶ INT0, si se pone en 1 se enmascara INT0 (no se atiende).
- **INT0...INT7**: contiene el valor del vector. Este número multiplicado por 4 = entrada en la tabla.
- **EOI**: se envía el comando de final de interrupción (end of interrupt) 20h = comando al final de la rutina de hard.
</details>

<details><summary>Acceso a los registros del PIC</summary>

> No creo que lo tomen

Se acceden a partir de la dirección 20h.

- EOI = 20h
- IMR = 21h
- IRR = 22h
- ISR = 23h
- INT0 = 24h
- INT1 = 25h
- INT2 = 26h
- INT3 = 27h
- INT4 = 28h
- INT5 = 29h
- INT6 = 2Ah
- INT7 = 2Bh

![image](https://github.com/user-attachments/assets/188d6438-221b-42a5-ae07-1b5228a2cd20)

</details>

<details><summary>Interrupciones por hardware</summary>

- **int0**: conectada a la tecla F10, que produce una interrupción al ser pulsada.
- **int1**: se conecta a la línea OUT del TIMER, se produce una interrupción con cada pulso del mismo.
- **int2**: se conecta a la línea INT de HAND.
- **int3**: se conecta al controlador de acceso directo a memoria.
</details>

<details><summary>Interrupciones por software Imprimir Mensaje</summary>

![image](https://github.com/user-attachments/assets/38bfd0e1-1cc2-4b6e-9ae1-1126402e2856)
</details>

<details><summary>Interrupciones por software Leer desde Teclado</summary>

![image](https://github.com/user-attachments/assets/9e1fc729-ba73-461f-a28d-7ada5f551245)

En AL van la cantidad de elementos que voy a imprimir
</details>

<details><summary>Interrupción por Hardware con tecla F10</summary>

| Codigo | Acceso a los registros del PIC |
|--------------|--------------|
|![image](https://github.com/user-attachments/assets/2d91b454-0372-4b55-aea6-0882e459fc0b) | ![image](https://github.com/user-attachments/assets/71f50286-37ae-43c1-afc0-5f99014f6a29) |

```
ORG 40
IP_F10 DW RUT_F10
```

ORG 40: porque vamos a instalar la interrupción en el lugar 10 de la tabla de vectores. Como cada entrada ocupa 4 bytes, la dirección es 4*10. Aquí va la dirección de la primera instrucción del servicio que atiende a la interrupción. Esta dirección tiene una etiqueta RUT_F10, pero vemos que es 3000h.

```
MOV AL, 0FEH # En Binario es 11111110
OUT PIC+1, AL
```

- Estas dos instrucciones cargan en el registro IMR el valor FEh, poniendo el bit 0 en 0 y los restantes bits en 1, enmascarando todas las interrupciones menos la INT0 que corresponde a la tecla F10.
- 0FEh = lleva un 0 al principio para indicar que el resto de las letras corresponden a un número y no al nombre de una variable.

`¿Como sabemos que INT0 corresponde a la tecla F10?`

Por el siguiente grafico

| Grafico del PIC | Interrupciones por Hardware |
|--------------|--------------|
|![image](https://github.com/user-attachments/assets/d301caff-7f41-4dbe-809c-fd069b966814) | ![image](https://github.com/user-attachments/assets/4e29723c-10c5-4131-8529-838d1d2cd0f3) |

```
MOV AL, N_F10
OUT PIC+4, AL
```

Estas dos instrucciones escriben en el registro INT0 del PIC, el valor de la posición en la tabla de vectores; en este registro se buscará dicha posición para la interrupción producida por F10. Recordemos que se accede al registro en la dirección 24h (PIC+4).

```
MOV DX, 0
```

En DX vamos a contar cuántas veces fue presionada la tecla F10. Acá inicializamos la cuenta en 0.

**STI y CLI**

- Las instrucciones STI y CLI activan y desactivan, respectivamente, interrupciones. Cuando se activa la bandera I permite que por el terminal INTR del procesador, se produzca una interrupción.
- Cuando se desactiva el bit impide que se produzca la interrupción por el terminal INTR.
- INTR es un terminal del procesador.

```
MOV AL, EOI    #OUT 20H,20H
OUT EOI, AL
```

- La CPU debe indicarle al controlador cuando ha completado el servicio de cada interrupción de hardware. Por lo tanto, al final de la rutina de servicio de la interrupción habrá que escribir en el registro de comandos, un número (comando) que indique el final de la interrupción.
- La dirección del registro coincide con el valor a escribir.


**IRET**

- La instrucción IRET es una instrucción especial para retorno y se utiliza para retornar de las interrupciones de software y hardware.
- La instrucción IRET es como una instrucción RET, porque recupera de la pila la dirección de retorno.
- Es diferente porque también recupera una copia del registro de banderas de la pila.
- La instrucción IRET extrae 6 bytes de la pila: 4 para la dirección de retorno y 2 para el registro de banderas.

**TIMER**

- Posee dos registros de 8 bits.
- COMP: registro de comparación que determina el módulo de la cuenta del timer.
- CONT: registro contador, muestra la cuenta de los pulsos de la señal aplicada a la entrada INT del periférico. Cuando coincide su valor con el registro COMP, provoca una salida del TIMER.
- Direcciones de registros: 10h y 11h
- Frecuencia: 1 Hz

</details>

---

### Clase 4 Entrada/Salida

<details><summary>Problemas de Entrada/Salida</summary>

- Gran variedad de periféricos con varios métodos de operación.
  - Transmisión de diferentes cantidades de datos.
  - A diferentes velocidades.
  - Usan diferentes formatos de dato y tamaño de palabra.
- Todos más lentos que la CPU y la RAM.
- Necesidad de módulos de E/S (con alguna "inteligencia").

</details>

<details><summary>Módulo de Entrada/Salida</summary>

![image](https://github.com/user-attachments/assets/fadfafe4-5521-4777-bfc8-932f3c475d59)

</details>

<details><summary>Dispositivos Externos</summary>

> Basicamente todo lo que no es memoria y CPU

- **e/s básicos**
  - monitor/pantalla, mouse, teclado
- **almacenamiento**
  - disco duro, CD, DVD
- **impresión**
  - impresora, escáner
- **comunicación con dispositivos remotos**
  - módem, acceso/interfaz de red
- **multimedia**
  - micrófono, parlantes
- **automatización y control**
  - sensores, alarmas, adquisición de datos

</details>

<details><summary>Características de un puerto</summary>

- Interfase entre el periférico y el módulo de E/S
- Señales de Control, Estado y Datos
  - **Señal de Control**: función a realizar
    - Ej: INPUT ó READ, OUTPUT ó WRITE
  - **Señal de Estado**: READY/NOT READY
  - **Control lógico**: manejo de direccionamiento
  - **Transductor**: conversión del datos
  - **Buffer**: adaptación (1, 8 o 16 bits)

</details>

<details><summary>Funciones de un módulo de E/S</summary>

- Control y temporización de uno o más dispositivos externos
- Interpretar las órdenes que recibe de CPU y transmitirlas al periférico
- Comunicación con la CPU (registros) y Memoria
- Controlar las transferencias de datos entre CPU y el periférico (convertir formatos, adaptar velocidades)
- Comunicación con los dispositivos (periféricos)
- Informar a la CPU del estado del periférico
- Almacenamiento temporal (buffering) de datos
- Detección de errores

</details>

<details><summary>Diagrama en Bloques de un módulo de E/S</summary>

![image](https://github.com/user-attachments/assets/3965fe7e-d8fa-4591-9c83-3eeb367dd908)
</details>

<details><summary>Capacidades de un módulo de E/S</summary>

- Ocultar las propiedades del dispositivo a la CPU.
  - Ej: temporizados, formatos, electromecanismos ...etc
- Ocuparse de uno o varios dispositivos.
- Controlar o no las funciones del dispositivo.
  - Canales de E/S ó procesador de E/S (manejo de parte importante de la carga del procesamiento). Presentes en Mainframes.
  - Controlador de E/S ó controlador de dispositivo (manejo primitivo). Presentes en microcomputadoras.

</details>

<details><summary>Operación de Entrada o Salida</summary>

Requiere:

- **Direccionamiento**
  - E/S mapeada en memoria
  - E/S aislada
- **Transferencia de información**
  - Lectura o escritura
- **Gestión de la transferencia**
  - Mecanismos de sincronización y control de la transferencia de datos

</details>

<details><summary>Direccionamiento de E/S</summary>

- **E/S asignada en memoria (memory-mapped)**
  - Dispositivos de E/S y memoria comparten un único espacio de direcciones.
  - E/S se parece a la memoria de lectura/escritura.
  - No hay órdenes específicas para E/S.
    - Variedad de órdenes de acceso a memoria (programación eficiente).

- **E/S aislada**
  - Espacios de direcciones separados.
  - Necesidad de líneas especiales de E/S y de memoria.
  - Órdenes específicas para E/S.
    - Conjunto limitado de instrucciones.

</details>

<details><summary>E/S Aislada</summary>

| Diagrama 1 | Diagrama 2 |
|-----------|-----------|
|![image](https://github.com/user-attachments/assets/2963ad5d-57bc-4071-ba3d-f47d6968682b)    | ![382872446-d26f051e-6152-4a5f-a344-627b2ad47c37](https://github.com/user-attachments/assets/60dfab3c-39a8-4395-ab05-ba56013d4060)|


Recordemos, todas las instrucciones que vimos eran de la forma:
- MOV mem, reg
- MOV reg, mem
- MOV reg, reg

Son entre el procesador y memoria

Ahora tenemos instrucciones:

- IN AL, puerto: Lee un byte de la dirección de e/s puerto.
- IN AL, DX: Lee un byte de la dirección de e/s almacenada en DX.
- OUT puerto, AL: Escribe un byte de AL en la dirección de e/s puerto.
- OUT DX, AL: Escribe un byte de AL en la dirección de e/s contenida en DX.


Cuando la UC decodifica OUT o IN, activa las líneas del bus de control  
- iow = input/output write  
- ior = input/output read  

Cuando la UC decodifica MOV, activa las líneas del bus de control  
- mwr = memory write  
- mrd = memory read  

Se puede ver en el simulador.
</details>

> Este no lo vamos a usar

<details><summary>E/S Mapeada en Memoria</summary>

- Las direcciones de e/s están mapeadas en las direcciones de memoria.
- Las direcciones de e/s pertenecen al espacio de memoria.
- No se distingue una posición de e/s de una posición de memoria.

![image](https://github.com/user-attachments/assets/c4216183-d26a-4273-9c2e-41c191160ec8)

`Ventaja:`

Puedo usar todo el conjunto de instrucciones del µp, porque todas las posiciones son tomadas como direcciones. No hay instrucciones como IN y OUT.

`Desventaja:`

Ocupa espacio de memoria

</details>


> Esto puede que entre :/

<details><summary>Técnicas de gestión de E/S</summary>

- E/S Programada con espera de respuesta
- E/S con interrupciones
- E/S con acceso directo a memoria (DMA)

</details>

<details><summary>E/S programada</summary>

- Intercambio de datos entre la CPU y el módulo
- La CPU tiene control directo sobre la operación de E/S
  - Comprobación del estado del dispositivo
  - Envío de comandos de lectura/escritura
  - Transferencia de datos
- La CPU espera que el módulo E/S termine la operación
- Por lo tanto la CPU permanece ociosa durante un período de tiempo (no deseable)

</details>

<details><summary>E/S con Interrupciones</summary>

- La CPU no tiene que esperar la finalización de la tarea de E/S, puede seguir procesando.
- No se repite la comprobación de los estados de los módulos.
- El módulo envía un pedido de interrupción a la CPU cuando está listo nuevamente.

</details>


<details><summary>PIO</summary>

- 2 puertos paralelos de 8 bits: A y B.
- Se puede programar c/bit por separado como entrada o salida.
- 4 registros internos de 8 bits:
  - 2 de datos, PA y PB.
  - 2 de control CA y CB, para programar los bits de PA y PB.

Las direcciones de los registros son (P de port y C de configuración):
- PA ➔ 30H
- PB ➔ 31H
- CA ➔ 32H
  - CA = un bit en 0 selecciona como salida a la línea correspondiente en PA.
  - CA = un bit en 1 selecciona como entrada a la línea correspondiente en PA.
- CB ➔ 33H
  - CB = controla de la misma manera a PB.

![image](https://github.com/user-attachments/assets/f66b74af-6da1-4bb9-a507-41601e208040)
![image](https://github.com/user-attachments/assets/072a603b-61eb-4b40-af27-95292797683b)
![image](https://github.com/user-attachments/assets/e2a4e286-ece3-4d77-9d87-def13b49d54b)
![image](https://github.com/user-attachments/assets/26e16cfb-a74a-4226-9c11-b2a3b9c207af)
![image](https://github.com/user-attachments/assets/6c96892c-85bc-4545-8c7b-488a0f6fdd46)
![image](https://github.com/user-attachments/assets/ca5d3fe3-6f4e-46ed-855d-fc1603eda3cc)

![image](https://github.com/user-attachments/assets/ecc46d16-d02e-4c86-b4a2-50b1b7a6f5e3)
![image](https://github.com/user-attachments/assets/02bf59cd-c600-4fa7-8e5e-b49ef4694f65)
![image](https://github.com/user-attachments/assets/ce8caa7d-c570-454e-b682-4eea3d6bd83f)
![image](https://github.com/user-attachments/assets/0ee72cd1-0ae0-4ac7-b741-5fe7b77a0f0e)

**Codigo**

![image](https://github.com/user-attachments/assets/0bec8b6e-0d8e-48a3-a764-070c16c8a719)
</details>

---

### Clase 5 Comunicación CPU-Impresora

<details><summary>Comunicación CPU - Impresora</summary>

![image](https://github.com/user-attachments/assets/7e4d4a3f-80fe-4ba9-809a-4b89e5fce5f2)

- La comunicación con la impresora es a través de 8 líneas entrantes (8 bits) por donde la CPU envía el código ASCII del carácter a imprimir.
- Otra línea entrante es STROBE por donde la CPU avisa que el carácter ASCII enviado es válido y hay que imprimirlo. Si no está presente esta señal no se lleva a cabo la impresión.
- Por último, una línea saliente BUSY (1 bit) indica cuando la impresora está libre o ocupada; la impresión se lleva a cabo cuando la impresora está libre. El estado ocupado es cuando está imprimiendo, en el estado libre la CPU envía caracteres para imprimir.

</details>

<details><summary>CPU - PIO - Impresora</summary>

![image](https://github.com/user-attachments/assets/57350908-ef1d-41f0-91d7-243b740fdb25)

- El Puerto B (8 bits) del PIO se conecta a la impresora a las entradas del carácter ASCII, o sea el carácter a imprimir la CPU lo envía a este puerto.
- El bit 0 del Puerto A (PA0) se conecta a la línea de ocupado (BUSY) de la impresora y el bit 1 de este mismo puerto (PA1) se conecta a la entrada de la señal de STROBE.

**Secuencia de impresión**

1) Si la impresora está libre PA0 (bit 0 de PA) en 0, entonces enviar el carácter ASCII a imprimir a PB. En caso contrario, esperar.

2) Generar la señal de STROBE que valida el dato en PB. PA1 está en 0, llevarla a 1 y luego otra vez a 0. Tiene que pasar de 0 a 1 y de 1 a 0, generando así un pulso.

3) Volver a 1) si hay más caracteres a imprimir.

</details>


Podes tener por consulta de estado o por interrupciones, en comparación con el PIO que siempre es con consulta de estado

<details><summary>CPU - HAND - Impresora</summary>

Tiene inteligencia solo para comunicarse con la impresora.

![image](https://github.com/user-attachments/assets/e98187ad-17e4-40cb-88dc-f3aaa69d54ad)

</details>

<details><summary>Transferencia desde memoria → periférico</summary>

![image](https://github.com/user-attachments/assets/63642683-d7e4-4a1e-99c8-1f92e443bc7a)

- La transferencia ocurre después que la CPU "determinó" que el dispositivo de E/S está listo.
- Esto último puede ser por consulta de estado o a la espera de un pedido de interrupción.
- "Sobrecarga" se produce porque hay que ejecutar varias instrucciones por cada dato transferido.
- Instrucciones se necesitan para incrementar el puntero a memoria y para llevar la cuenta de la cantidad de datos transferidos.
- Con interrupciones esto se complica más, porque cada vez que hay una interrupción, existen instrucciones para salvar el contexto y luego instrucciones para retornar al punto de interrupción.

</details>

<details><summary>Acceso directo a memoria –> DMA</summary>

![image](https://github.com/user-attachments/assets/3e43e433-d2b2-4a47-8413-f70d4e341db2)



- Para transferir una “gran cantidad de datos” (ej. multimedia) la estrategia utilizada es otra.
- La transferencia de datos entre la memoria y el dispositivo externo es realizada sin la intervención de la CPU.
- La operación es controlada por otro dispositivo: controlador de acceso directo a memoria (CDMA).
- Realiza las mismas funciones que hace la CPU para transferir datos a la memoria. Para cada palabra de datos transferida genera el direccionamiento y todas las señales necesarias para el manejo del bus.

</details>

<details><summary>Etapas de la transferencia DMA</summary>

> Parar la cpu es mas eficiente que guardar todos los registros y estar haciendo interrupciones

- Se distinguen 3 etapas:
  1) **Inicialización**: interviene la CPU. Configuración de dispositivos, direcciones, a qué dispositivo transferir, etc.
  2) **Transferencia de datos**: no interviene la CPU.
  3) **Finalización**: interviene la CPU.

</details>

> El CDMA es mejor porque no tiene que salvar nada en la pila, solo se ocupa de transferir datos


<details><summary>Modos de transferencia por DMA</summary>

- **Modo ráfaga (burst)**: cuando el CDMA toma el control del bus, transfiere un bloque de datos y no libera el bus hasta terminar.
- **Modo robo de ciclo**: el CDMA toma el control del bus, transfiere el dato y luego devuelve el control del bus. Luego la CPU ejecuta una instrucción y, si el CDMA necesita hacer otra transferencia, vuelve a pedir el uso del bus y transfiere el dato. Así se van alternando entre ejecución (CPU) y transferencia (CDMA).
- **Modo transparente**: el CDMA transmite en aquellos casos en los que la CPU no utiliza los buses al realizar movimiento entre registros.

> El segundo es el mejor en teoria

![image](https://github.com/user-attachments/assets/05be5e49-8780-4330-83af-d20d9f78ca48)



</details>

<details><summary>Controlador de DMA (CDMA)</summary>

- Realiza transferencia de datos de memoria-memoria o memoria-periférico y a la inversa.
- Trabaja por robo de ciclo.
- Tamaño máximo del bloque a transferir: 64 kbytes.

**Registros de CDMA**

- **RF**: Registro de direcciones fuente. Se carga en él la dirección del bloque de memoria a transferir.
  - RFL → 50H
  - RFH → 51H
- **RD**: Registro de direcciones destino. Se carga en él la dirección destino del bloque. Memoria-memoria.
  - RDL → 54H
  - RDH → 55H
- **CONT**: Registro contador. Indica el número de bytes a transferir.
  - CONTL → 52H
  - CONTH → 53H
- CTRL → 56H
- ARRANQUE → 57H

Una vez cargados los valores adecuados en los registros, para arrancar la transferencia programada hay que poner en 1 A0=A1=A2 del registro de arranque, esto pone a 0 C0. Si se desea detener momentáneamente la transferencia se pone C0 a 1. Pero ponerlo en 0 no "rearranca".

- **CTRL**: registro de control.
- Campos del registro:
  - **TC**: Bit de control.
  - **X**: Reservados o no especificados (C6, C5, C4).
  - **MT**: Modo de transferencia.
  - **ST**: Sentido de transferencia.
  - **TT**: Tipo de transferencia.
  - **STOP**: Detiene la transferencia en curso.
- **Escritura**
- **C0**: STOP
  - 0: No se usa
  - 1: Detiene la CPU la transferencia en curso.
- **C1**: TT = Tipo de transferencia
  - 0: Memoria-Periférico o al revés
  - 1: Memoria-Memoria
- **C2**: ST = Sentido de transferencia. Solo si C1 = 0.
  - 0: Periférico-Memoria
  - 1: Memoria-Periférico
- **C3**: MT = Modo de transferencia
  - 0: Transferencia por demanda
  - 1: Transferencia en modo bloque
- **C4...C7**: no se usan

</details>

---

### Clase 6 Segmentación de Intrucciones

---

Bueno, como tengo que repasar, voy a emprezar con las clases

### Final 1

#### Pregunta 1
a) ¿Qué métodos para pasaje de argumentos podemos utilizar en una computadora?
b) ¿Cuáles son las diferenciasa en la terminación de una subrutina y un gestor de interrupción?

#### Pregunta 2

a) Esquematice y describa la estructura interna de un Controlador Programable de Interrupciones.
b) Describa cómo funciona la gestión de E/S programa con espera de Respuesta

#### Pregunta 3
a) ¿



---


<details><summary>
1.	Explique los métodos de pasaje de argumentos a procedimientos o funciones. 
</summary>

El pasaje de argumentos a procedimientos o funciones pueden ser:
-	`Vía Registros`: El número de registros es la principal limitación. Es importante documentar qué registros se usan.
-	`Vía Memoria`: Se usa un área definida de memoria (RAM). Difícil de estandarizar
-	`Vía Pila (Stack)`: Es el método más ampliamente usado. El verdadero “pasaje de parámetros”. Independientemente de memoria y registros. Hay que comprender bien cómo funciona porque la pila es usada tanto por el usuario como por el sistema.

</details>

<details><summary>
2.	¿Qué es una pila? Describir el comportamiento con anidamiento de múltiples procedimientos/funciones utilizando pila.</summary>


La pila o stack es una estructura de datos que sigue el principio LIFO y se utiliza para gestionar la ejecución de programas y el uso de memoria de manera eficiente. Es un bloque de direcciones de memoria reservado para esta funcionalidad.

Consta de dos operaciones básicas:

- PUSH -> Agregar (apilar) un elemento en la parte superior de la pila.
- POP -> Retirar (desapilar) el elemento superior de la pila.

Cuando anidamos múltiples procedimientos o funciones utilizando una pila, se está agregando llamadas a funciones dentro de otras funciones. Cada vez que se llama a una nueva función, se agrega un nuevo “marco de pila”, que contiene variables locales, parámetros, la dirección de retorno, y cualquier otra información necesaria para la ejecución de esa función.

A medida que las funciones anidadas se completan, sus marcos de pila se retiran de la pila, y el control regresa a la función que las llamó.

Se debe:

- `1)` Salvar el estado del BP
- `2)` Salvar el estado de SP
- `3)` Reservar espacio para datos locales (opcional)
- `4)` Salvar valores de otros registros (opcional)
- `5)` Acceder a parámetros

Luego, para retornar: 
-	Los registros salvados deben ser descargados en orden inverso
-	Si se reservó espacio para variables locales, se debe reponer SP con el valor de BP que no cambió durante el procedimiento
-	Reponer BP
-	Volver al programa que llamó al procedimiento con RET.

</details>

<details><summary>
1.	¿Qué es una interrupción? ¿Cuál es la función de un controlador de interrupciones?
</summary>

Una interrupción es el mecanismo mediante el cual se puede interrumpir el procesamiento normal de la CPU. Pueden ser origen interno o externo a la misma.

La función de un controlador de interrupciones es gestionar y coordinar las interrupciones. Se encarga de determinar qué dispositivo o evento generó la interrupción, priorizarlas en caso de múltiples interrupciones simultáneas y luego redirigir el flujo de ejecución del procesador hacia un programa de manejo de interrupciones específico.
</details>

<details><summary>
2.	Describa el mecanismo de interrupción. 
</summary>

El mecanismo de interrupción funciona de la siguiente manera:

- `1) Generar la interrupción`: Un dispositivo o componente del sistema detecta un evento que requiere atención, por lo que genera una señal de interrupción.
- `2) Interrupción del procesador`: Cuando se genera una interrupción, el procesador suspende temporalmente la ejecución del programa actual y cambia su enfoque hacia el controlador de interrupciones.
- `3) Guarda el estado`: Antes de manejar la interrupción, el procesador guarda el estado actual del programa en ejecución. Esto incluye la posición del programa en la que se detuvo, los registros de la CPU y otros datos relevantes.
- `4) Rutina de manejo de interrupciones`: El controlador de interrupciones determina la naturaleza de la interrupción y consulta una tabla de vectores de interrupción que contiene direcciones de memoria de rutinas específicas de manejo de interrupciones. Estas rutinas son porciones de código que se encargan de gestionar el evento específico asociado con la interrupción.
- `5) Ejecución de la rutina de manejo`: El procesador comienza a ejecutar la rutina de manejo de interrupciones correspondiente. Esta rutina se encarga de procesar el evento que generó la interrupción. Una vez que la rutina ha sido ejecutada, el control es devuelto al punto en el programa donde se detuvo inicialmente.
- `6) Restauración del estado`: Después de que se maneja la interrupción, el procesador restaura el estado previo guardado, incluyendo los registros y la posición del programa, permitiendo que el programa original se reanude como si la interrupción nunca hubiera ocurrido.
- `7) Continuación de la ejecución`: Con el estado restaurado, el programa original continúa su ejecución desde el punto en el que se interrumpió.

El mecanismo de interrupción permite a los sistemas manejar eventos en tiempo real, realizar tares de gestión de dispositivos y responder eficazmente a situaciones imprevistas sin detener por completo la operación del sistema.

</details>


<details><summary>
3.	¿Cuáles son las diferencias en la terminación de una subrutina y un gestor de interrupción?

</summary>

La subrutina regresa al programa principal utilizando la instrucción de retorno RET. En cambio, un gestor de interrupción lo hace después de manejar dicha interrupción, o con la instrucción de retorno IRET.

La instrucción IRET es similar a una instrucción RET, por utilizar la pila, pero recupera una copia del registro de estado y la dirección de retorno 

</details>

<details><summary>
4.	Explique características y tratamiento de interrupciones múltiples.
</summary>

Las interrupciones múltiples se refiere a la situación en la que ocurren varias interrupciones mientras se está manejando una interrupción previa. 

Las características a tener en cuenta son:

-	`Prioridad de interrupciones`: Las interrupciones suelen tener un nivel de prioridad asignado. Cuando se producen múltiples interrupciones, el sistema debe determinar cuál de ellas se manejará primero en función de su prioridad.
-	`Máscara de interrupciones`: En algunos sistemas, es posible desactivar temporalmente ciertas interrupciones (de menor prioridad) utilizando máscaras de interrupción.
-	`Nivel de anidación`: El sistema debe ser capaz de manejar múltiples niveles de anidación de interrupciones. Si se está manejando una interrupción y ocurre otra de mayor prioridad, el sistema debe ser capaz de suspender temporalmente la primera interrupción, manejar la segunda y luego regresar al manejo de la primera.
-	`Protección del estado del sistema`: Durante un manejo de una interrupción, se deben tomar medidas para proteger el estado actual del sistema. 

Esto generalmente implica guardar los registros y datos críticos antes de comenzar a manejar la interrupción y restaurarlos después de que se haya completado el manejo de la interrupción.

El tratamiento de interrupciones múltiples puede variar, pero en general sigue un enfoque de manejo de interrupciones en cascada. Los pasos que suele seguir son los siguientes:

- `1)` El sistema determina la prioridad de las interrupciones en cola y selecciona la de mayor prioridad para manejarla primero.
- `2)` Se guarda el estado actual del sistema, incluidos los registros y otros datos relevantes, para que pueda restaurarse más tarde.
- `3)` Se ejecuta la rutina de manejo de la interrupción correspondiente a la interrupción seleccionada.
- `4)` Después de que se complete el manejo de la interrupción, se restaura el estado del sistema que se guardó previamente.
- `5)` Si aún quedan interrupciones en cola, el sistema selecciona la siguiente interrupción de mayor prioridad y repite el proceso.
- `6)` Cuando no quedan interrupciones en cola o cuando se han manejado todas las interrupciones necesarias, se reanuda la ejecución normal del programa.

</details>

<details><summary>
5.	Describa las características y el funcionamiento de un PIC.
</summary>

Un PIC (Controlador Programable de Interrupciones) es un dispositivo usado para combinar varias fuentes de interrupciones sobre una o más líneas del CPU, mientras que permite que los niveles de prioridad sean asignados a sus salidas de interrupción.

Los PICs tienen un conjunto común de registros:

- IRR, petición de interrupciones, especifica qué interrupciones están pendientes de reconocimiento, suele ser un registro interno que no puede ser accedido directamente.
- ISR, interrupción en servicio, especifica qué interrupciones han sido reconocidas, pero todavía están esperando por un final de interrupción (EOI).
- IMR, máscara de interrupciones, especifica qué interrupciones deben ser ignoradas y no reconocidas.
- INT0…INT7, cada uno de estos registros se relaciona con un vector de interrupción.

El funcionamiento de un PIC implica varios pasos:
- `1) Detección de interrupciones`: El PIC monitorea constantemente las líneas de interrupción de los dispositivos periféricos y otros eventos en busca de cambios en su estado. Cuando se detecta una interrupción, se genera una solicitud de interrupción hacia el procesador.
- `2) Priorización`: Si hay múltiples interrupciones pendientes, el PIC selecciona la de mayor prioridad según su configuración. Esto se basa en las prioridades asignadas a las líneas de interrupción.
- `3) Enmascaramiento`: Antes de notificar al procesador sobre una interrupción, verifica si la línea de interrupción está habilitada o enmascarada. Si la línea está enmascarada, la interrupción se ignora.
- `4) Vectorización`: Una vez que se determina la interrupción que debe atenderse, el PIC envía un vector de interrupción a la CPU. Este vector contiene información sobre la fuente de la interrupción y apunta a la dirección de memoria de la rutina de manejo de interrupciones correspondiente.
- `5) Procesamiento de interrupción`: La CPU recibe el vector de interrupción y ejecuta la rutina de manejo de interrupciones asociada. Esta rutina es la encargada de gestionar la interrupción, guardar el estado necesario y realizar cualquier acción requerida.
- `6) Fin de interrupción (EOI)`: Después de manejar la interrupción, la CPU envía una señal de Fin de Interrupción (EOI) al PIC para indicar que ha completado el manejo de la interrupción actual. Esto permite que el PIC se prepare para la siguiente interrupción si la hubiera.

</details>

<details><summary>
6.	Describa las distintas fuentes de interrupción (tipos de interrupción) que conozca y el tratamiento a realizar cuando hay múltiples interrupciones.
</summary>

Las interrupciones son el mecanismo mediante el cual se puede interrumpir el procesamiento normal de la CPU. Estas pueden ser de origen interno o externo a la CPU. Las interrupciones pueden ser:

- `Por Hardware`: Son las llamadas “verdaderas” interrupciones. Son generadas por dispositivos de E/S (como teclado o mouse) para señalar eventos (como la pulsación de una tecla). El tratamiento implica determinar la fuente de la interrupción, ejecutar la rutina de manejo correspondiente y, si hay múltiples interrupciones de hardware, priorizarlas según su importancia y manejarlas secuencialmente en función de su prioridad.
- `Traps/Excepciones`: Son interrupciones por hardware creadas por el procesador en respuesta a ciertos eventos como: condiciones excepcionales (overflow en la ALU), falla de programa (tratar de ejecutar una instrucción no definida), fallas de hardware (error de paridad de memoria) o, accesos no alineados o a zonas de memoria restringidas.
- `Por Software`: Son generadas por instrucciones explícitas que afectan al procesador de la misma manera que las interrupciones por hardware, generalmente usadas para hacer llamadas a funciones del sistema operativo 

Cuando hay múltiples interrupciones puede que al atender una se inhabiliten las otras, por lo que las interrupciones se manejan en orden secuencial, o que se hayan definido prioridades, por lo que una interrupción de prioridad más alta puede interrumpir a un gestor de interrupción de prioridad menor, cuando se ha gestionado la de mayor prioridad el procesador vuelve a las interrupciones previas, y terminadas todas las rutinas de interrupción se retorna a la ejecución normal.

</details>

<details><summary>
7.	Describa las limitaciones existentes al paralelismo a nivel de instrucciones.
</summary>

El paralelismo a nivel de instrucciones es una técnica que permite que múltiples instrucciones se ejecuten en paralelo dentro de un procesador. Algunas de sus limitaciones son:
-	`Dependencias de Datos:` Las dependencias de datos ocurren cuando una instrucción depende de los resultados de una o más instrucciones anteriores. Esto puede limitar la cantidad de instrucciones que pueden ejecutarse en paralelo, ya que algunas de ellas deben esperar a que se completen las instrucciones precedentes.
-	`Dependencias de Control:` Las dependencias de control se refieren a las instrucciones condicionales, como las instrucciones de salto condicional. El procesador no puede prever de antemano cuál será la próxima instrucción a ejecutar hasta que se resuelva la condición.
-	`Limitaciones de Ancho de Bande de Memoria:` El acceso a memoria principal es una operación que puede restringir el paralelismo a nivel de instrucción. Si el procesador necesita acceder repetidamente a la memoria, es posible que deba esperar a que se completen las operaciones de lectura/escritura antes de poder avanzar con otras instrucciones.
-	`Tamaño de Ventana de Ejecución:` La cantidad máxima de instrucciones que se pueden emitir y ejecutar en paralelo puede ser limitada por cuestiones de diseño de hardware o por la arquitectura del procesador.
-	`Saltos y Llamadas a Subrutinas:` Las instrucciones de salto y las llamadas a subrutinas cambian el flujo de ejecución y pueden requerir la cancelación de instrucciones en vuelo que ya no son válidas debido al salto. Esto puede llevar a penalizaciones de tiempo significativas.

</details>

<details><summary>
8.	¿A que método de atención lo conocemos como de interrupciones vectorizadas?¿Cuándo, por qué, para qué y cómo utiliza una de las denominadas interrupciones por software?
</summary>

En el método de interrupciones vectorizadas, cuando se produce una interrupción, se utiliza un vector de interrupción para direccionar directamente la ejecución del procesador a la ubicación de memoria de la rutina de manejo de interrupciones correspondiente. Se utiliza el número de identificación de la interrupción como índice para buscar en la tabla de vectores, luego el procesador salta directamente a esa dirección de memoria y comienza a ejecutar la rutina de manejo de la interrupción.
</details>

<details><summary>
9.	Esquematice y describa la estructura interna de un controlador programable de interrupciones y describa cómo funciona la gestión E/S programada con espera de respuesta
</summary>

![image](https://github.com/user-attachments/assets/fbcf5b43-6185-47a0-8386-26a45ded34b8)

Componentes de la estructura interna de un controlador programable de interrupciones:

- `IRR (Interrupt Request Register):` Registro de petición de interrupción, indica con bit en 1 las interrupciones demandadas hasta el momento. 
- `ISR (In Service Register):` Registro de interrupción en servicio, indica con bit en 1 cuál es la interrupción que está siendo atendida.
- `IMR (Interrupt Mask Register):` Registro de máscara de interrupciones, permite el enmascaramiento selectivo de cada una de las entradas de interrupción, indicando con bit en 1 (Indica cuáles deben ser ignoradas). Tras un reset los bits de este registro quedarán en 0. 
- `EOI (End of Interruption):` Fin de interrupción. Como consecuencia, se pone en 0 el bit del ISR correspondiente. Sirve para indicarle al PIC que ya fue atendida la interrupción y la CPU vuelve a la ejecución normal del programa.
- INT0 … INT7: 8 registros, donde se cargan los id de interrupciones.

La gestión de E/S programada con espera de respuesta se refiere a un método en el que un programa solicita una operación de E/S y luego espera activamente hasta que se complete la operación. Esto se utiliza en situaciones en las que el programa necesita el resultado de la operación antes de continuar su ejecución. El funcionamiento de este proceso es el siguiente:

- `1) Solicitud de E/S`: El programa emite una solicitud de E/S al dispositivo periférico o al controlador correspondiente.
- `2) Inicio de la operación`: El controlador de E/S inicia la operación y se pone en marcha para realizar la tarea solicitada.
- `3) Espera activa`: Mientras la operación de E/S está en curso, el programa entra en un bucle de espera activa (verifica continuamente el estado de la operación).
- `4) Finalización de la operación`: Cuando la operación de E/S se completa, el controlador de E/S indica su finalización al programa. Esto podría ser a través de una interrupción por hardware o mediante el establecimiento de una bandera de estado.
- `5) Procesamiento de datos`: Una vez que el programa recibe la notificación de que la operación de E/S ha finalizado, puede procesar los datos obtenidos de la operación, si es necesario, y luego continuar con su ejecución normal.

</details>

<details><summary>
1.	¿Qué es segmentación de cauce?
</summary>

La segmentación de cauce (pipelining) es una forma de organizar el hardware de la CPU para realizar más de una operación al mismo tiempo. Consiste en descomponer el proceso de ejecución de las instrucciones en fases o etapas que permitan una ejecución simultánea.
</details>

<details><summary>
2.	¿Qué ventajas proporciona su implementación?
</summary>

La implementación de la segmentación de cauce proporciona varias ventajas, entre ellas:

- Mejora el rendimiento -> La ejecución en paralelo acelera la velocidad de ejecución de las instrucciones.
- Aprovechamiento de recursos -> Mientras una unidad de ejecución realiza una operación, las etapas anteriores y posteriores pueden estar ocupadas con otras instrucciones, lo que permite un uso más completo de las unidades funcionales.
- Mayor paralelismo -> Al permitir que múltiples instrucciones se ejecuten al mismo tiempo, la segmentación de cauce aumenta el nivel de paralelismo a nivel de instrucciones en un procesador.
- Reducción del ciclo de reloj por instrucción -> Reduce el tiempo necesario para ejecutar una instrucción completa al dividirla en etapas más pequeñas.
- Mejora de la predicción de saltos -> Puede combinarse con técnicas de predicción de saltos para reducir las penalizaciones por fallos de predicción de saltos, lo que resulta en una ejecución más eficiente en las instrucciones.

</details>

<details><summary>
3.	Tres motivos de retardo de cauce en segmentación de cauce
</summary>

Hay tres motivos comunes de retardo de cauce en segmentación de cauce:
- `1) Dependencia de Datos`: Ocurre cuando una instrucción depende de los resultados de una instrucción anterior que aún no ha completado su etapa de ejecución. Los tipos de dependencia de datos son:
    - `a)` RAW – Read after Write
    - `b)` WAR – Write after Read
    - `c)` WAW – Write after Write
- `2) Dependencia de Control`: Ocurren debido a las decisiones de salto condicional en el flujo de control del programa. Cuando una instrucción de salto condicional se encuentra en el cauce, el procesador puede no conocer la dirección de la próxima instrucción hasta que se resuelva la condición.
- `3) Dependencias Estructurales`: Ocurren cuando dos o más instrucciones compiten por el mismo recurso funcional en una etapa específica del cauce.

Para mitigar estos retrasos y mejorar el rendimiento en la segmentación de cauce, se utilizan técnicas como la ejecución fuera de orden, el renombramiento de registros y la predicción de saltos avanzada.

</details>

<details><summary>
4.	Describa las dependencias de los datos que pueden afectar un cauce segmentado.
</summary>

Los tipos de dependencias de datos son:

-	`Read After Write (RAW)`: Ocurre cuando una instrucción en el cauce necesita leer un registro o dato que está siendo escrito por una instrucción anterior en el mismo cauce.
-	`Write After Read (WAR)`: Ocurre cuando una instrucción en el cauce necesita escribir un registro o dato que está siendo leído por una instrucción anterior en el mismo cauce. A veces se denominan “antidependencias”.
-	`Write After Write (WAW)`: Ocurre cuando dos instrucciones en el cauce necesitan escribir en el mismo registro o dato. A veces se denominan “dependencias de salida”.

</details>

<details><summary>
5.	Explique los atascos producidos por saltos
</summary>

Los atascos producidos por saltos son situaciones en las que la ejecución de instrucciones en un cauce segmentado se ve afectado negativamente debido a la presencia de instrucciones de salto condicional o incondicional. Hay tres tipos principales de atascos de control causados por saltos:

- Salto condicional tomado, cuando la condición se resuelve como verdadera, lo que significa que se debe tomar el salto. Las instrucciones que siguen al salto condicional y ya han avanzado deben descartarse, lo que conduce a un desperdicio de ciclos de reloj y una penalización en el rendimiento.
- Salto condicional no tomado, cuando la condición se resuelve como falsa, lo que significa que no se toma el salto. Las instrucciones que siguen al salto deben continuar su ejecución.
- Salto incondicional, ocurre cuando se encuentra una instrucción de salto incondicional. Las instrucciones que siguen ya han avanzado en el cauce y se encuentra en diferentes etapas de ejecución. Cuando se toma el salto, estas instrucciones en etapas posteriores deben ser descartadas, lo que resulta en un desperdicio de ciclos de reloj y una penalización en el rendimiento.

</details>

<details><summary>
6.	Describa el problema y posibles soluciones ante riesgos por transferencia de control de programa.
</summary>

Los riesgos por transferencia de control de programa se refiere a situaciones en las que la ejecución de instrucciones en un procesador segmentado se ve afectada negativamente debido a saltos de programa, como instrucciones de salto condicional o incondicional. Estos riesgos pueden dar lugar a retrasos en la ejecución de instrucciones y pueden afectar el rendimiento general del procesador.

Los riesgos por transferencia de control pueden ser:

-	Salto condicional tomado
-	Salto condicional no tomado
-	Salto incondicional

Las posibles soluciones:
- Adelantar la resolución de los saltos a la etapa de decodificación
    - En ella se decodifican y se sabe que es un salto
    - Se puede evaluar la condición de salto (con restador)
    - Se puede calcular la dirección de salto (con sumador)
- Para tratamiento de saltos hay:
    - Técnica Hardware -> Predicción de saltos:
        - Técnicas estáticas:
            - Predecir que nunca se salta: Asume que el salto no se producirá y siempre capta la siguiente instrucción.
            - Predecir que siempre se salta: Asume que el salto se producirá y siempre capta la instrucción destino del salto.
        - Técnicas dinámicas:
            - Conmutador saltar/no saltar: Basado en la historia de las instrucciones. Es eficaz en bucles.
            - Tabla de historia de saltos (Branch-target buffer): Pequeña cache asociada a la etapa de búsqueda (F). Tiene 3 campos, dirección de una instrucción de bifurcación, información de la instrucción destino y N bits de estado (historia de uso).
        - Predecir según el código de operación:
            - Hay instrucciones con más probabilidades de saltar.
        - Flujos múltiples:
            - Varios cauces (uno por cada opción de salto). Precaptan cada salto en diferentes cauces. Se debe utilizar el cauce correcto.
        - Precaptar el destino de salto:
            - Se precapta la instrucción destino del salto, además de las instrucciones siguientes a la bifurcación. La instrucción se guarda hasta que se ejecute la instrucción de bifurcación.
        - Buffer de bucles:
            - Es una memoria muy rápida, gestionada por la etapa de captación de instrucción del cauce. Comprueba el buffer antes de hacer la captación de memoria.

- Técnica Software -> Salto retardado o de relleno de ranura de retardo:
    - El compilador introduce instrucciones que se ejecutarán en cualquier caso después de la instrucción de salto, y de no ser posible se utilizan instrucciones NOP.
    - Requiere reordenar las instrucciones.

</details>

<details><summary>
1.	Describa las características funcionales del Acceso Directo a Memoria (DMA) (Etapas de transferencia).
</summary>

El Acceso Directo a Memoria permite que un dispositivo periférico acceda a memoria principal (RAM) directamente sin la intervención de la CPU. El DMA acelera la transferencia de datos entre la memoria y los dispositivos periféricos, lo que libera recursos de la CPU para otras tareas. Las características funcionales del DMA incluyen varias etapas de transferencia:

-	`Solicitud:` La primera etapa implica que un dispositivo periférico envíe una solicitud de acceso a la memoria al controlador DMA. Esta solicitud incluye información sobre la dirección de memoria de origen y destino, la cantidad de datos a transferir y el sentido de la transferencia.
-	`Selección del Canal DMA:` Los sistemas informáticos pueden tener múltiples canales, cada uno dedicado a un tipo específico de dispositivo o función. En esta etapa, el sistema debe asignar el canal DMA a la solicitud entrante.
-	`Configuración:` Una vez seleccionado el canal DMA, se configura para que coincida con los requisitos de la transferencia de datos. Esto incluye la configuración de las direcciones de inicio y finalización en la memoria, el tamaño de la transferencia y otras características relevantes.
-	`Acceso Directo:` El controlador DMA se comunica directamente con la memoria principal y el dispositivo periférico para iniciar la transferencia de datos. La CPU no participa en la transferencia en sí, lo que permite que la CPU realice otras tareas mientras se lleva a cabo la transferencia.
-	`Transferencia de Datos:` El controlador DMA transfiere datos entre la memoria y el dispositivo periférico utilizando el canal DMA configurado previamente. La transferencia puede ser en una dirección o bidireccional.
- `Finalización:` Cuando se completa la transferencia, el controlador DMA notifica al dispositivo periférico y actualiza cualquier estado relevante. La CPU puede ser notificada de la finalización de la transferencia mediante una interrupción o un mecanismo similar.
- `Liberación del Canal DMA:` Después de completar la transferencia, el canal DMA se libera para su uso posterior. Esto permite que otros dispositivos o solicitudes utilicen el canal DMA según sea necesario.

</details>

<details><summary>
2.	¿Cómo es la estructura de un módulo de E/S? (Esquematice y describa)
</summary></details>

<details><summary>
3.	Describa las posibles técnicas que puede utilizar una CPU para realizar operaciones de E/S.
</summary></details>

<details><summary>
4.	Desarrolle cómo es el funcionamiento del DMA y los usos que de él se hacen.
</summary></details>

<details><summary>
5.	Describa cómo funciona la gestión de E/S programada con espera de respuesta.
</summary></details>

<details><summary>
6.	¿La coherencia de datos de un sistema jerárquico de memoria se ve afectado por el uso de DMA?
</summary></details>

<details><summary>
7.	¿Cuáles son los modos de ubicación de los módulos de entrada salida? Describir.
</summary></details>

<details><summary>
1.	Memoria Caché. Describa el mapeo asociativo por conjuntos.
</summary></details>

<details><summary>
2.	Analice las políticas de escritura desde el punto de vista de la coherencia de datos.
</summary></details>

<details><summary>
3.	Describa los elementos a tener en cuenta en el diseño de una memoria caché. Analice ventajas y desventajas de poseer varios niveles de caché.
</summary></details>

<details><summary>
4.	Describa los algoritmos de reemplazo de bloque y políticas de escritura en la cache.
</summary></details>

<details><summary>
5.	Si se pretende mejorar el tiempo de acceso medio a memoria cache. ¿Sobre qué parámetros será necesario trabajar y propone como medida para hacerlo?
</summary></details>

<details><summary>
6.	Describa y compare las correspondencias entra la memoria principal y la caché. ¿Cómo se determina, en cada caso, la hilera/fila de ubicación de un bloque de palabras provenientes de la memoria principal? Ejemplifique.
</summary></details>

<details><summary>
7.	Justifique el uso de dos niveles de caché.
</summary></details>

<details><summary>
1.	Describa tres características que usted considere las más importantes de las arquitecturas RISC.
</summary></details>

<details><summary>
2.	Describa las características que diferencian los procesadores RISC respectos a los CISC.
</summary></details>

<details><summary>
1.	¿Qué son los procesadores superescalares?
</summary></details>

<details><summary>
2.	¿De qué depende el paralelismo de una máquina superescalar?
</summary></details>

<details><summary>
3.	¿Cuál es el objetivo de usar la técnica de Renombre de Registros en un procesador superescalar?
</summary></details>

<details><summary>
4.	¿Qué características tienen los procesadores superescalares? 
</summary></details>

<details><summary>
5.	¿Qué características posee un procesador supersegmentado frente a un superescalar?
</summary></details>

<details><summary>
6.	Compare las políticas de emisión de instrucciones.
</summary></details>

<details><summary>
7.	Elija una alternativa de emisión/finalización y justifique.
</summary></details>

<details><summary>
1.	¿Qué es un bus? Describa los diferentes tipos de modos de arbitraje y sincronización. 
</summary></details>

<details><summary>
2.	Mencione las principales diferencias entre un bus PCI y SCSI.
</summary></details>

<details><summary>
3.	¿Qué elementos característicos definen un bus?
</summary></details>

<details><summary>
4.	Tipos de buses, temporización y métodos de arbitraje
</summary></details>

<details><summary>
1.	¿Qué son los MIMD de la taxonomía de Flynn?
</summary></details>

<details><summary>
2.	Describa las 4 variantes de arquitectura de la Taxonomía de Flynn.
</summary></details>

<details><summary>
1.	Describa las características que diferencian los SMP respecto a los Cluster.
</summary></details>

<details><summary>
2.	Características de los Cluster.
</summary></details>

<details><summary>
3.	Compare los sistemas MP y Cluster.
</summary></details>

<details><summary>
4.	Funcionamiento de un Cluster.</summary></details>