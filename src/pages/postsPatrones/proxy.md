---
layout: ../../layouts/MarkdownPostLayout.astro
title: '📡 Proxy'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Objetos/proxy.webp'
    alt: ''
tags: ["POO"]
category: Patrones
---


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