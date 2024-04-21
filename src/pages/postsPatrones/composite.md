---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Patrón Composite'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/composite.webp'
    alt: ''
tags: ["POO"]

---

## [Video de BettaTech](https://youtu.be/ES3DnAPted0?si=rXTAYg96uVkFsYAq)



## Introducción

El patrón **Composite** es un patrón de diseño estructural que te permite componer objetos en estructuras de árbol para representar jerarquías parte-todo. Permite a los clientes tratar tanto a los objetos individuales como a las composiciones de objetos de manera uniforme.

#### Concepto Principal

El patrón Composite se basa en la idea de que tanto los objetos individuales (hojas) como los grupos de objetos (composites) deben ser tratados de manera similar. Es decir, deben poder ser manejados a través de una interfaz común.

#### Problema

El problema que resuelve el patrón Composite es cómo organizar los objetos en estructuras que incluyan tanto objetos simples como grupos de objetos que deberían ser tratados de la misma manera. Por ejemplo, piensa en una interfaz gráfica con figuras que pueden ser simples (como círculos o rectángulos) o compuestas (como un diagrama que está formado por múltiples figuras).

#### Estructura

- **Componente (Component):** Es la interfaz o clase abstracta que declara las operaciones comunes tanto para los objetos simples como para los compuestos. Puede incluir métodos para agregar y eliminar hijos, así como operaciones específicas como `move()` o `draw()` que deben ser implementadas por todos los objetos concretos.
  
- **Hoja (Leaf):** Representa los objetos finales de la composición que no tienen hijos. Realizan las operaciones solicitadas directamente.
  
- **Compuesto (Composite):** Define comportamientos para los componentes que tienen hijos. Guarda los componentes hijos y delega a ellos las operaciones que se invocan en el objeto compuesto.

#### Consecuencias

- **Pros:**
  - Facilita la construcción de objetos complejos a partir de partes simples y composites.
  - Simplifica el código de los clientes, ya que pueden tratar todos los objetos de la composición uniformemente.
  - Facilita la adición de nuevos tipos de componentes, ya que los cambios son aislados y no afectan al código cliente.
  
- **Contras:**
  - Puede ser difícil restringir los tipos de componentes en una composición. Por ejemplo, no hay una forma sencilla de permitir solo ciertos componentes en un compuesto.
  
- **Cuestiones de Implementación:**
  - Se pueden tener referencias explícitas al padre para facilitar la navegación y la gestión de la estructura.
  - Se debe decidir entre la transparencia y la seguridad en el manejo de las operaciones de los hijos (p. ej., debería `Leaf` tener operaciones para manejar hijos?).
  - Es posible que necesites caching, ordenar los hijos, o manejar su borrado.
  - Puedes elegir diferentes estructuras de datos para almacenar los componentes, dependiendo de las operaciones que necesites optimizar.

### Ejemplo Aplicado

Imagina que estás diseñando un sistema para un Banco de Alimentos que necesita armar cajas con productos que cumplen ciertos requerimientos nutricionales. Puedes tener productos individuales como `Leaf` y composiciones como cajas o paquetes como `Composite`. El patrón Composite te permitiría tratar tanto un producto individual como una caja de productos de manera uniforme, por ejemplo, para calcular el valor nutricional total.

En resumen, el patrón Composite es muy útil para trabajar con estructuras que pueden ser tratadas de manera recursiva como si fueran un único objeto, facilitando el manejo de colecciones de objetos a través de una interfaz común.

| En la vida | En objetos :( |
| --------- | --------- |
| ![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/df3cc88a-bcd8-4da6-b073-806299a8d3e2)   | ![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/101ffd56-5d80-4ff7-bb38-17f7a4c7cc88)   |


### Estructura

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d8eb8cc1-a8db-42c1-b9aa-c21905472526)

El diagrama UML que has subido representa el patrón de diseño Composite de una manera clásica y clara. A continuación, te detallo cada componente y su relación en el patrón:

1. **Cliente (Client):**
   - Representa la parte del sistema que interactúa con la estructura compuesta. El cliente utiliza la interfaz 'Component' para trabajar con los objetos del árbol.

2. **Componente (Component):**
   - Es una clase abstracta o interfaz que declara la interfaz común para todos los objetos en la composición, tanto simples (Leaf) como compuestos (Composite).
   - Define las operaciones como `Operation()`, que debe ser implementada tanto por las hojas como por los compuestos.
   - También declara operaciones para manipular los hijos (`Add(Component)`, `Remove(Component)`, `GetChild(int)`), aunque estos métodos no necesariamente tienen sentido o serán implementados en las hojas.

3. **Hoja (Leaf):**
   - Representa los objetos finales de la composición que no tienen hijos (objetos simples). Las hojas implementan la operación `Operation()` que es común a todos los componentes del árbol.

4. **Compuesto (Composite):**
   - Representa los objetos complejos del árbol que pueden tener hijos. Estos hijos pueden ser tanto hojas como otros compuestos, permitiendo así la recursividad y la formación de una estructura de árbol.
   - La clase Composite implementa la operación `Operation()` y las operaciones de manejo de hijos (`Add(Component)`, `Remove(Component)`, `GetChild(int)`). Cuando se invoca `Operation()`, el Composite itera sobre sus hijos y les llama la operación `Operation()` a cada uno de ellos (`forall g in children g.Operation();`). Esto permite aplicar una operación a un grupo completo de objetos (hojas y/o compuestos) de manera transparente.

5. **Relaciones:**
   - La relación de herencia/interfaz (línea con un triángulo vacío) desde 'Leaf' y 'Composite' hacia 'Component' significa que ambos, 'Leaf' y 'Composite', conforman la interfaz de 'Component'.
   - La relación de agregación (línea con un diamante vacío) de 'Composite' a 'Component' indica que 'Composite' puede tener cero o más hijos de tipo 'Component'.
   - La flecha punteada desde 'Composite' hacia la operación 'Operation()' de 'Component' denota la llamada a esta operación en cada hijo durante la ejecución de 'Composite's Operation()'.

Este diagrama UML es fundamental para entender cómo el patrón Composite permite manejar objetos simples y compuestos de manera uniforme a través de una interfaz común, lo cual simplifica el código del cliente y permite construir jerarquías complejas de objetos.