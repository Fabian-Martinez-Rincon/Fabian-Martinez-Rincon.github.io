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

