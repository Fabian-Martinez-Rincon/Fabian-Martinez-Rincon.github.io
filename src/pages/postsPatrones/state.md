---
layout: ../../layouts/MarkdownPostLayout.astro
title: '🗽 State'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/state.webp'
    alt: ''
tags: ["POO"]

---

## Introducción

El patrón **State** es un patrón de diseño de comportamiento que permite a un objeto cambiar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase. Es especialmente útil en el diseño de máquinas de estado, donde el comportamiento de un objeto puede cambiar drásticamente dependiendo de su estado actual.

### Intención

El propósito del patrón State es encapsular los estados variables de un objeto en clases separadas y permitir al objeto cambiar de estado como si cambiara de clase. En lugar de estar lleno de condicionales para realizar diferentes acciones dependiendo del estado, el objeto delega las acciones al objeto de estado actual.

### Uso

El patrón State es útil cuando tienes un objeto que se comporta de manera diferente según el estado en el que se encuentra, y hay muchas operaciones condicionales que dependen del estado.

### Estructura

El patrón State se compone de varias partes clave:

1. **Contexto (Context):**
   - Es la clase que tiene un estado que dicta cómo debe comportarse. Mantiene una referencia a una instancia de una subclase de `State` que representa el estado actual.
   - El contexto delega las operaciones a la instancia de `State` para actuar de acuerdo con su estado actual.

2. **Estado (State):**
   - Es una interfaz o clase abstracta que define la interfaz para encapsular el comportamiento asociado con un estado particular del contexto.
   - Puede definir métodos que serán llamados por el contexto para realizar acciones que dependen del estado.

3. **Estados Concretos (ConcreteStates):**
   - Son clases que implementan la interfaz `State` y definen el comportamiento real asociado con un estado del contexto.
   - Cada `ConcreteState` sabe a qué otro estado debe cambiar el contexto bajo ciertas condiciones y puede realizar la transición al cambiar la referencia de `State` en el contexto.

### Ventajas

- **Localización del Comportamiento de Estado:** Centraliza el comportamiento de cada estado en clases correspondientes.
- **Cambios de Estado explícitos:** Cambiar de un estado a otro se hace explícitamente cambiando la instancia de estado dentro del contexto, lo cual es más claro que usar múltiples condicionales.
- **Estado y Transiciones Encapsulados:** Al aislar los estados en diferentes clases, se encapsulan tanto las acciones como las transiciones entre estados.

### Desventajas

- **Aumento de Clases:** Puede incrementar el número de clases en el sistema.
- **Dependencia entre Estados Concretos:** Puede haber dependencia entre `ConcreteStates` si no se planifica adecuadamente, lo que puede llevar a un mantenimiento más difícil.

### Ejemplo Aplicado

Un ejemplo común del patrón State es una máquina expendedora que tiene diferentes estados, como 'Esperando selección', 'Validando pago', 'Dispensando producto', y 'Dando cambio'. Cada estado determinará cómo responderá la máquina a diferentes entradas, como la selección de un producto o la inserción de dinero.

### Resumen

El patrón State es esencial para situaciones donde el comportamiento de un objeto depende de su estado, y hay complejas reglas de transición entre estados. Este patrón oculta las complejidades de estado y transición en un marco de trabajo que es fácil de entender y mantener.

## Estructura

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/07e27d74-e170-4cb4-8c7e-07dc30f89281)

Este diagrama UML describe el patrón de diseño State. A continuación, te detallo cada componente del diagrama y cómo interactúan entre sí:

1. **Contexto (Context):**
   - La clase `Context` mantiene una referencia a una instancia de la clase `State`, que representa el estado actual del contexto.
   - Contiene un método `request()` que es el punto de entrada para solicitar la operación. Este método luego delega la ejecución a la instancia de `State` actual llamando a `state.handle()`.
   - La asociación entre `Context` y `State` se muestra con una línea que tiene un círculo al final, indicando que `Context` mantiene una referencia a `State`.

2. **Estado (State):**
   - La interfaz o clase abstracta `State` define un método `handle()`, que será implementado por las subclases concretas para realizar las acciones asociadas con un estado específico.
   - Esta es la interfaz común que todas las clases concretas de estado implementarán.

3. **Estados Concretos (ConcreteStateA y ConcreteStateB):**
   - `ConcreteStateA` y `ConcreteStateB` son implementaciones de la interfaz `State`. Cada una define una versión del método `handle()`, que contiene la lógica específica que debe ejecutarse cuando el objeto `Context` se encuentra en el estado correspondiente.
   - Estos objetos de estado concreto pueden cambiar el estado del `Context` al reemplazar la instancia de estado actual por otra, lo que permite cambiar el comportamiento del `Context` dinámicamente.

4. **Transiciones de Estado:**
   - En la práctica, la implementación de `handle()` en `ConcreteStateA` podría resultar en un cambio de estado al establecer una nueva instancia de `State` (por ejemplo, `ConcreteStateB`) en el `Context`. Esto no se muestra explícitamente en el diagrama, pero es parte central de cómo funciona el patrón State.

### Cómo Funciona

- Cuando un cliente invoca `request()` en el `Context`, el `Context` delega esa solicitud a su objeto de estado actual llamando a `state.handle()`.
- El objeto de `State` actual determina qué operaciones realizar y puede cambiar el estado actual del `Context` a otro estado, influyendo así en el comportamiento futuro del `Context`.
- Este patrón permite al `Context` cambiar su comportamiento en tiempo de ejecución sin tener que recurrir a grandes cantidades de condicionales y sin violar el principio de abierto/cerrado, que promueve que las entidades (clases, módulos, funciones, etc.) deberían estar abiertas para su extensión, pero cerradas para su modificación.

El diagrama ilustra una estructura flexible que soporta cambios en el comportamiento de un objeto sin recurrir a múltiples sentencias `if` o `switch` a lo largo del código, facilitando así la mantenibilidad y escalabilidad.

## State vs Strategy

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4bddf196-bd44-416e-9af1-8a06c333ba54)

El patrón **State** y el patrón **Strategy** son a menudo confundidos debido a que su estructura UML puede parecer similar y ambos patrones implican el uso de composición para cambiar el comportamiento de un objeto en tiempo de ejecución. Sin embargo, sus intenciones, uso y forma de gestionar el cambio de comportamiento son distintos.

### State
El patrón **State** se utiliza cuando el comportamiento de un objeto debe cambiar de acuerdo con su estado interno. Cada estado es representado por una clase concreta que implementa una interfaz común, y el objeto cambia su comportamiento cambiando su estado interno a diferentes instancias de estas clases de estado.

**Características del State:**
- Encapsula los posibles estados en diferentes clases.
- Cambios de estado normalmente se ocultan dentro de las clases de estado y pueden ser automáticos en respuesta a eventos internos.
- El objeto de contexto puede no saber qué clase de estado concreto está en uso, reflejando un cambio en el comportamiento de manera transparente.
- El número y naturaleza de los estados pueden ser muchos y complejos, cada estado puede tener su propia lógica para determinar a qué estado cambiar después.
- Se enfoca en el ciclo de vida de un objeto y cómo cambia su comportamiento a lo largo del tiempo y los eventos internos.

### Strategy
El patrón **Strategy** se centra en definir una familia de algoritmos, encapsulando cada uno en su propia clase de estrategia, y haciendo los algoritmos intercambiables desde el contexto. Este patrón se utiliza principalmente para seleccionar un algoritmo de un grupo de algoritmos en tiempo de ejecución.

**Características del Strategy:**
- Encapsula un algoritmo o estrategia específica en una clase.
- Los cambios de estrategia suelen ser explícitos y controlados desde afuera, por el cliente del objeto de contexto.
- El objeto de contexto sabe qué estrategia está utilizando y normalmente elige entre estrategias concretas predefinidas.
- Los algoritmos no suelen cambiar automáticamente y no dependen del estado interno del objeto.
- Se enfoca en operaciones o acciones que realiza el objeto y en cómo pueden variar independientemente del ciclo de vida del objeto.

### Comparación

- **Cambios de Comportamiento:** En el State, los cambios de comportamiento están ligados al estado interno del objeto. En el Strategy, los cambios de comportamiento se realizan cambiando la estrategia asignada al objeto desde el exterior.
- **Conocimiento de los Estados/Algoritmos:** En el State, el objeto no necesita tener conocimiento de qué estado está activo. En Strategy, el cliente del contexto debe conocer las estrategias concretas para elegir una.
- **Control de Cambios:** En State, los estados suelen controlarse y cambiar desde el interior de la clase de estado. En Strategy, el contexto o el cliente externo controla cuál estrategia se utiliza.

### En Resumen
El State se ocupa de lo que un objeto es (estado interno), mientras que el Strategy se ocupa de lo que un objeto hace (comportamiento o algoritmo). Mientras que State puede conducir a un cambio en el comportamiento debido a un cambio en el estado interno del objeto, Strategy implica cambiar el comportamiento asignando un nuevo algoritmo, a menudo como resultado de decisiones tomadas fuera del objeto.