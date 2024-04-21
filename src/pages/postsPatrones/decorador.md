---
layout: ../../layouts/MarkdownPostLayout.astro
title: '🎁 Decorator'
pubDate: 2024-04-21
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/decorator.webp'
    alt: ''
tags: ["POO"]

---

El patrón de diseño **Decorator** se utiliza para agregar responsabilidades adicionales a un objeto de manera dinámica y transparente, es decir, sin afectar a otros objetos de la misma clase. A diferencia de la herencia, donde el comportamiento es estático y no se puede cambiar después de la compilación, el Decorator permite la adición y eliminación dinámica de comportamientos.

#### Objetivo del Decorator

El objetivo del Decorator es permitir la extensión de las funcionalidades de un objeto sin necesidad de heredar de él. Esto proporciona una alternativa flexible a la herencia para extender la funcionalidad.

#### Aplicabilidad

Usarías el Decorator para:
- Agregar responsabilidades a objetos de forma individual y de manera que puedas agregar o quitar funcionalidad en tiempo de ejecución.
- Evitar la creación de una gran cantidad de subclases que solo se diferencian en la funcionalidad que agregan.
- Modificar el comportamiento de los objetos encapsulando la variabilidad dentro de clases dedicadas a tal fin.

#### Solución que Ofrece

El patrón Decorator resuelve este problema permitiendo envolver un objeto dentro de una "piel" de objetos decoradores. Estos decoradores implementan la misma interfaz que el objeto que están decorando y agregan su comportamiento antes o después de delegar la llamada al objeto envuelto.

#### Estructura del Decorator

La estructura típica de un patrón Decorator incluye:

1. **Componente (Component):** 
   - Una interfaz que define las operaciones que pueden ser decoradas.

2. **Componente Concreto (ConcreteComponent):**
   - Clase que implementa `Component` y define un objeto que puede tener responsabilidades adicionales agregadas.

3. **Decorador (Decorator):**
   - Clase abstracta que implementa `Component` y mantiene una referencia a un objeto `Component`. El `Decorator` delega las operaciones al objeto `Component` y puede añadir comportamiento antes o después de la delegación.

4. **Decoradores Concretos (ConcreteDecorators):**
   - Clases que extienden `Decorator` y agregan responsabilidades específicas al `Component`.

#### Consecuencias

- **Flexibilidad:** Al ser más flexible que la herencia, permite la adición y eliminación dinámica de responsabilidades.
- **Incrementalidad:** Facilita la adición de funcionalidades incrementales sin afectar a otros objetos o clases.
- **Complejidad:** Puede aumentar la cantidad de objetos pequeños en el sistema y complicar la estructura, especialmente si se anidan muchos decoradores.

#### Ejemplo en Código

En el contexto de entrada/salida de archivos (File I/O Streams), el patrón Decorator se utiliza para agregar comportamientos como buffering, compresión, encriptación, etc., de manera dinámica. Por ejemplo, puedes tener un `FileInputStream` y luego agregarle dinámicamente un `BufferedInputStream` y un `GZipInputStream` para obtener un stream que lee de un archivo, lo descomprime y además añade funcionalidad de buffering.

#### Resumen

El patrón Decorator es una herramienta poderosa que ofrece una alternativa flexible a la herencia para extender las funcionalidades de los objetos. Permite modificar comportamientos de forma dinámica y es ampliamente utilizado en la programación orientada a objetos para añadir funcionalidades a clases ya existentes sin alterar su estructura.

## Estructura

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/472bafdd-106d-4184-a262-c46c2229c869)

El patrón de diseño **Decorator** se utiliza para agregar responsabilidades adicionales a un objeto de manera dinámica y transparente, es decir, sin afectar a otros objetos de la misma clase. A diferencia de la herencia, donde el comportamiento es estático y no se puede cambiar después de la compilación, el Decorator permite la adición y eliminación dinámica de comportamientos.

### Objetivo del Decorator

El objetivo del Decorator es permitir la extensión de las funcionalidades de un objeto sin necesidad de heredar de él. Esto proporciona una alternativa flexible a la herencia para extender la funcionalidad.

### Aplicabilidad

Usarías el Decorator para:
- Agregar responsabilidades a objetos de forma individual y de manera que puedas agregar o quitar funcionalidad en tiempo de ejecución.
- Evitar la creación de una gran cantidad de subclases que solo se diferencian en la funcionalidad que agregan.
- Modificar el comportamiento de los objetos encapsulando la variabilidad dentro de clases dedicadas a tal fin.

### Solución que Ofrece

El patrón Decorator resuelve este problema permitiendo envolver un objeto dentro de una "piel" de objetos decoradores. Estos decoradores implementan la misma interfaz que el objeto que están decorando y agregan su comportamiento antes o después de delegar la llamada al objeto envuelto.

### Estructura del Decorator

La estructura típica de un patrón Decorator incluye:

1. **Componente (Component):** 
   - Una interfaz que define las operaciones que pueden ser decoradas.

2. **Componente Concreto (ConcreteComponent):**
   - Clase que implementa `Component` y define un objeto que puede tener responsabilidades adicionales agregadas.

3. **Decorador (Decorator):**
   - Clase abstracta que implementa `Component` y mantiene una referencia a un objeto `Component`. El `Decorator` delega las operaciones al objeto `Component` y puede añadir comportamiento antes o después de la delegación.

4. **Decoradores Concretos (ConcreteDecorators):**
   - Clases que extienden `Decorator` y agregan responsabilidades específicas al `Component`.

### Consecuencias

- **Flexibilidad:** Al ser más flexible que la herencia, permite la adición y eliminación dinámica de responsabilidades.
- **Incrementalidad:** Facilita la adición de funcionalidades incrementales sin afectar a otros objetos o clases.
- **Complejidad:** Puede aumentar la cantidad de objetos pequeños en el sistema y complicar la estructura, especialmente si se anidan muchos decoradores.

### Ejemplo en Código

En el contexto de entrada/salida de archivos (File I/O Streams), el patrón Decorator se utiliza para agregar comportamientos como buffering, compresión, encriptación, etc., de manera dinámica. Por ejemplo, puedes tener un `FileInputStream` y luego agregarle dinámicamente un `BufferedInputStream` y un `GZipInputStream` para obtener un stream que lee de un archivo, lo descomprime y además añade funcionalidad de buffering.

### Resumen

El patrón Decorator es una herramienta poderosa que ofrece una alternativa flexible a la herencia para extender las funcionalidades de los objetos. Permite modificar comportamientos de forma dinámica y es ampliamente utilizado en la programación orientada a objetos para añadir funcionalidades a clases ya existentes sin alterar su estructura.

## Estructura

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9bf9a870-344d-4070-93d1-796fc49082a3)

El diagrama UML que proporcionaste muestra la estructura del patrón de diseño **Proxy**. Aquí está el detalle de cada parte del diagrama:

1. **Cliente (Client):**
   - La clase que actúa como consumidor de los servicios proporcionados por el `Subject`. El cliente interactúa con el `Subject` sin necesariamente saber si está trabajando con un `RealSubject` o un `Proxy`.

2. **Sujeto (Subject):**
   - Es una interfaz que define una operación común llamada `Request()` que debe ser implementada tanto por el `Proxy` como por el `RealSubject`. Representa la interfaz que el `Client` utiliza para trabajar con los objetos.

3. **Sujeto Real (RealSubject):**
   - La clase que hereda o implementa la interfaz `Subject` y define el objeto real que el `Proxy` está destinado a representar. `RealSubject` implementa la operación real `Request()` que el cliente quiere invocar.

4. **Proxy:**
   - Una clase que también implementa la interfaz `Subject` y contiene una referencia al `RealSubject`. Su propósito es controlar el acceso al `RealSubject`, posiblemente realizando tareas adicionales como carga perezosa, control de acceso, buffering, etc., cuando se invoca su método `Request()`.
   - El `Proxy` implementa el método `Request()` que es llamado por el `Client`. Dentro de este método, el `Proxy` puede realizar operaciones adicionales y, finalmente, delegar la llamada al `RealSubject` llamando a `realSubject->Request()`.

### Funcionamiento del Proxy

Cuando el `Client` invoca `Request()`, puede hacerlo a través de un objeto `Proxy`. El `Proxy` entonces tiene la oportunidad de interceder en la operación. Puede realizar acciones antes o después de pasar la llamada a `Request()` del `RealSubject`. Este enfoque es útil para:

- Retrasar la creación del objeto real solo cuando se necesita realmente (`Lazy Initialization`).
- Controlar el acceso al objeto real por razones de seguridad (`Protection Proxy`).
- Gestionar la interacción con un objeto que está en un espacio de memoria diferente (`Remote Proxy`).

### Ejemplo

Imagina que el `RealSubject` es un sistema de gestión de documentos y el `Proxy` proporciona un control de acceso seguro. Cuando un cliente solicita abrir un documento a través del método `Request()`, el `Proxy` puede verificar las credenciales del usuario antes de permitir o negar el acceso al documento solicitando el método `Request()` en el `RealSubject`.

### En Resumen

El patrón Proxy es un patrón estructural esencial en el diseño de software que proporciona un objeto sustituto para otro objeto para controlar el acceso a él. Este patrón es particularmente útil para operaciones costosas o de seguridad, permitiendo que las operaciones se realicen de manera más eficiente o segura.