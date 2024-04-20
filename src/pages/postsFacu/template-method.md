---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Template Method'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/template-method.webp'
    alt: ''
tags: ["POO"]

---

## Ejemplo WTF

Esto es lo que no tenemos que hacer

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9bb08ceb-3773-4173-8a32-884dce2bf301)

Claro, aquí tienes un resumen conciso de los puntos clave del patrón de diseño **Template Method**:

#### Concepto Principal
- El **Template Method** es un patrón de diseño que define el esqueleto de un algoritmo en un método, postergando algunos pasos algorítmicos a las subclases. Esto permite que las subclases puedan alterar ciertos pasos del algoritmo sin cambiar su estructura general.

#### Uso
- Se utiliza cuando varios algoritmos tienen estructuras similares pero difieren en algunos pasos específicos.
- Ayuda a evitar la duplicación de código y promueve la reutilización al centralizar el código común en una clase base.

#### Estructura
- **Clase Abstracta**: Define un método plantilla (`templateMethod()`) que contiene un algoritmo con pasos definidos, algunos de los cuales son implementados por subclases.
- **Subclases Concretas**: Implementan los detalles específicos de los pasos del algoritmo que varían entre las diferentes implementaciones.

#### Ventajas
- **Reutilización de Código**: Centraliza el código común, reduciendo la duplicación.
- **Extensibilidad**: Facilita la introducción de nuevas variantes de un algoritmo sin modificar el código existente.
- **Control**: El flujo del programa es controlado desde el nivel superior, permitiendo una mejor gestión del comportamiento del software.

#### Desventajas
- **Rigidez**: Puede resultar en jerarquías de clases rígidas si las subclases tienen que seguir una estructura de método plantilla muy estricta.
- **Complejidad**: Puede ser difícil seguir el flujo de control cuando el algoritmo es complejo y distribuido a través de múltiples subclases.

#### Aplicaciones Típicas
- Muy usado en frameworks y bibliotecas donde se define un algoritmo estándar con puntos de extensión específicos para que los usuarios los adapten según necesiten.

Este patrón es fundamental para diseñar aplicaciones robustas y fácilmente extensibles, manteniendo un alto nivel de coherencia y cohesión en el código base.

### Estructura

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/cee1aaa5-8f35-4e3b-8bbc-a23aab37014f)

La imagen que has proporcionado ilustra el patrón de diseño **Template Method** a través de un diagrama UML (Unified Modeling Language). Este diagrama muestra la relación entre una clase abstracta y una clase concreta en el contexto de este patrón. A continuación, te explico cada uno de los elementos del diagrama:

1. **AbstractClass**: 
   - Es una clase abstracta que define un método llamado `TemplateMethod()`. Este método es el método plantilla que dicta el algoritmo general. En el contexto del patrón, este método invoca una serie de operaciones en un orden específico.
   - Contiene declaraciones de métodos llamados `PrimitiveOperation1()` y `PrimitiveOperation2()`. Estos son llamados dentro de `TemplateMethod()` y son los pasos del algoritmo que varían según la implementación específica. Por lo tanto, se definen como operaciones, pero su implementación exacta se deja a las subclases.

2. **ConcreteClass**:
   - Esta es una subclase de `AbstractClass` y proporciona implementaciones concretas de los métodos `PrimitiveOperation1()` y `PrimitiveOperation2()`.
   - Cuando `TemplateMethod()` se ejecuta en una instancia de `ConcreteClass`, se llamarán las implementaciones de `PrimitiveOperation1()` y `PrimitiveOperation2()` de `ConcreteClass`.

3. **Flecha de Herencia**:
   - La flecha sólida de `ConcreteClass` a `AbstractClass` indica que `ConcreteClass` hereda de `AbstractClass`.

4. **Líneas discontinuas con marcadores de llamada**:
   - Las líneas discontinuas que apuntan a los métodos `PrimitiveOperation1()` y `PrimitiveOperation2()` desde `TemplateMethod()` indican que estos métodos son invocados (llamados) por `TemplateMethod()`. En UML, estas líneas discontinuas suelen representar llamadas a métodos o utilización de métodos definidos en otro lugar.

Este diagrama UML está comunicando que `AbstractClass` establece un algoritmo en `TemplateMethod()`, pero deja algunos de los detalles específicos de ese algoritmo para ser definidos por `ConcreteClass`. De esta manera, las clases concretas que extienden `AbstractClass` pueden alterar partes del algoritmo sin cambiar la estructura general del mismo.