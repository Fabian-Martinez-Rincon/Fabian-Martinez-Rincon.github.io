---
layout: ../../layouts/MarkdownPostLayout.astro
title: Refactoring
author: Fabian Martinez Rincon
description: "Preparando el parcial para el redictado de objetos 2 (raro)."
image:
    url: '/posts/Materias/gramatica.jpg'
    alt: "Miniatura de los rayos de Astro."
pubDate: 2024-09-08
tags: ["bash", "nvim", "linux", "debian"]
category: Facultad
---

#### Code Smells

Es una indicación de un posible problema
- Se encuentra en el código fuente
- Puede indicar un problema
    - Estilo
    - Implementación
    - Diseño
    - Análisis de Dominio

#### Refactoring

Transformaciones de código que `preservan` el comportamiento

- No corrigen errores
- No agregan funcionalidad

Pueden mejorar algún aspecto no funcional del código
- Configurabilidad (a patrones o a frameworks)
- Performance
- Uso de memoria
- Legibilidad

Soporte de herramientas (basados en ATS)
- Renaming: classes, variables, methods
- Extrating Method class & component
- Pushing UP/DOWN: Methods&vars

![image](https://github.com/user-attachments/assets/04cad218-5f72-4939-a81f-6edb21677dec)


1. **Renombrar `idx` a `index`**:
   - Línea 5: `int idx;` -> `int index;`
   - Línea 11: `idx = result;` -> `index = result;`
   - Línea 15: `if(idx >= source.length)` -> `if(index >= source.length)`
   - Línea 16: `idx = 0;` -> `index = 0;`
   - Línea 17: `result = idx++;` -> `result = index++;`

2. **Renombrar `result` a `position`**:
   - Línea 14: `char result;` -> `char position;`
   - Línea 17: `result = idx++;` -> `position = index++;`
   - Línea 18: `return source[result];` -> `return source[position];`

#### Patrón

La mejor solución a un problema recurrente

`Engine Flameout`

- Es un incidente (recurrente) que resulta en el malfuncionamiento de un motor jet
- El entrenamiento de un piloto incluye conocer la mejor solución a este tipo de problemas
- Diferentes aviones tienen diferentes procedimientos
- Diferentes momentos del vuelo requieren diferentes procedimientos
    - Carreteo
    - Despegue
    - Vuelo


⚠️ Importante:
- Reconocer el problema de manera exacta
- Aplicar la mejor solución (correcta… patrón)
- Aplicar la solución de manera apropiada

#### IB6012 (18/08/2015) solución correcta, bien aplicada

![image](https://github.com/user-attachments/assets/23e41603-4026-406d-a540-2def0d4610b0)

#### TNA235 (04/02/2015) solución correcta, mal aplicada

![image](https://github.com/user-attachments/assets/1c9a17cf-c72e-49e8-8f52-c42e0ed6ceb4)

### Design Patterns: smells más comunes

![image](https://github.com/user-attachments/assets/6c811c2c-4bdf-4269-8fb6-079d594c5e9b)

#### Patrones

Proceso de resolución de Problemas
- Reconocer el problema de manera exacta
- Encontrar la solución correcta
- Aplicar la solución de manera apropiada

Un Patrón es la mejor solución a un problema recurrente…

Proceso de resolución de Problemas con Patrones
- Reconocer el problema de manera exacta
- Encontrar el patrón que aplica al problema
    - Evaluar ventajas y desventajas
- Aplicar la solución de manera apropiada

Suele ocurrir que un patrón soluciona parcialmente el universo del problema, y se
debe seguir resolviendo problemas (menores) de manera iterativa

#### Framework

- Un framework es en sí mismo un módulo de software reutilizable.
- Muchas aplicaciones se construirán sobre él (instanciaciones).
- El framework será independiente de las aplicaciones. Sin embargo, las aplicaciones dependen de que la interfaz (conjunto de puntos de instanciación) y el comportamiento del framework se mantengan estables.

Conceptos elementales

- Instaciación vs extensión.
    - instanciación(framework) = aplicación
    - extensión(framework) = framework
- Inversión de control
- **WhiteBox frameworks**: las instanciaciones completan el loop de control (estáticamente)
- **BlackBox**: las instanciaciones configuran el framework (composición) y agregan objetos que responden a
protocolos requeridos.


#### (deep into) Refactoring

Los refactoring de código son:

- Cualquier transformación de código fuente
- Cambios en el código que no alteran el comportamiento
- Cambios en los datos del sistema para que funcione bien
- Cambios en el código fuente que elimina code smells
- Cambios en el código que mejoran el sistema
- Transtornaciones del programador que arreglan el sistema
- Cambios en el código que mantienen la funcionalidad
- Mejoras en la funcionalidad sin cambios de código


#### Refactoring

- Rename Variable
- Rename Method
- Extract Method
- Move Method to Component
- Replace Conditional with Polymorphism
- Replace temp with query

#### Code Smells

- Duplicate Code
- Large Class
- Long Method
- Data Class
- Feature Envy
- Long Parameter List
- Switch Statements
- Primitive Obsession
- Oddball Solution
- Lazy Class


#### Patrones de Diseño
- Template Method
- Strategy
- State
- Composite
- Façade
- Adapter/Decorator
- Command
- Builder / Factory Method


#### Code Smells → Refactoring (cuales se relacionan?) 

- Duplicate Code
- Large Class
- Long Method
- Data Class
- Feature Envy
- Long Parameter List
- Switch Statements
- Rename Variable
- Rename Method
- Extract Method
- Move Method to Component
- Replace Conditional with Polymorphism
- Replace temp with query
- Variable move up
- Method move up (+ variables)


#### Refactorings Patterns

- Form Template Method
- Extract Adapter
- Replace Implicit Tree with Composite
- Replace Conditional Logic with Strategy
- Replace State-altering conditionals with State

![image](https://github.com/user-attachments/assets/8b134a3f-516b-415c-9e67-67fa8934dac2)


#### Refactorings

- Transformaciones de código que preservan el comportamiento
- Preservar el comportamiento
    - (Hace lo que hacía antes) & (No hace lo que no hacía antes) *
- Se puede contar todas las maneras de escribir?
    - operación (función),
    - Clase
    - Librería, Framework
    - Programa
    - Elija su opción: Finito, Infinito contable o Infinito Incontable

Qué debería usarse para poder analizar (cualquier) código (dado un lenguaje de programación)?


#### Abstracción

- Creada desde el código
- Uniquivoca
- Manipulable por
- Algoritmos
- => Arboles !

Syntax Trees
- Parsing
- Gramatica
- Abstract (AST)
- Concrete (CST) 

```markdown
EXPRESSION ::= NUMERAL | “(“NUMERAL”)”
         “(“ EXPRESSION OPERATOR EXPRESSION “)”
OPERATOR ::= “+” | “-”
NUMERAL ::= DIGIT | DIGIT NUMERAL
DIGIT ::= “0” | “1” | “2” | “3” | “4” | “5” | “6” | “7” | “8” | “9”
```

#### Ejemplo: (4 - (3 + 2))

![image](https://github.com/user-attachments/assets/af867f9a-a35e-483a-940e-eb36a6770dce)

#### ((4) - (3 + 2))

Concrete ST: cada derivation rule es un subarbol

![image](https://github.com/user-attachments/assets/94aec436-7a35-4b9a-b5c0-8a152529ccc8)

Abstract ST: estructura relevante

![image](https://github.com/user-attachments/assets/db23a18c-6e43-4367-a320-0ed511defd94)


#### Refactoring(Tree)

```markdown
EXPRESSION ::= NUMERAL | (NUMERAL)
     “(“ EXPRESSION OPERATOR EXPRESSION “)”
(NUMERAL) ::= “(“ NUMERAL ”)”
OPERATOR ::= “+” | “-”
NUMERAL ::= DIGIT | DIGIT NUMERAL
DIGIT ::= “0” | “1” | “2” | “3” | “4” | “5” | “6” | “7” | “8” | “9”
```

Transformación(Tree) = Tree’
- Tree EQUIV Tree’ 

![image](https://github.com/user-attachments/assets/5be1d5d3-860b-4a67-83c6-b7a6db447d19)


#### Refactorizar

- Transformaciones de AST que preservan la funcionalidad
- Son todas las expresiones equivalentes a ((4) - (3+2))? Cuales son las reglas de transformación que preservan funcionalidad?
    - ((4) - (3 + 2))
    - (4 - (3 + 2))
    - 4 - (3 + 2)
    - (4) - (3 + 2)
    - (4) - 3 + 2
    - 4 - 3 + 2
    - 4 - 3 - 2


#### Para pensar…

Qué implica preservar el comportamiento?
- Variable temporal (de una operación)
- Variable de instancia privada de una clase
- Variable de instancia publica de una clase
- Método público de una clase
- Método abstracto de una clase
- Método público de una clase (pública) de una librería

Para cuando estan desvelados:

- Semántica Denotacional
- Lógica de Reescritura + Resolverdores de Teoremas

---

```sql
Select Orders.OrderID, Customers.CustomerName
From Orders, Customers
WHERE Customers.CustomerID = Orders.OrderID
```

![image](https://github.com/user-attachments/assets/e61dbb34-479c-4068-a38c-02429a7d1390)



#### Refactoring SQL: alias de tablas

```sql
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Customers, Orders
WHERE Customers.CustomerName='Around the Horn' AND Customers.CustomerID=Orders.CustomerID;
```

1. Verificar precondiciones
2. Agregar alias a la declaración de la tabla
3. Cambiar la ocurrencia de la tabla por su alias

Ejemplo: Customers →"c". Orders →"o"

```sql
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;
```

#### antlr

ANTLR (ANother Tool for Language Recognition)
- Generador de analizadores para leer, procesar, ejecutar o traducir texto estructurado o archivos binarios.
- Se usa ampliamente para crear lenguajes, herramientas y Frameworks.
- A partir de una gramática, ANTLR genera un analizador que puede construir y recorrer árboles de análisis.
- http://lab.antlr.org/

Antlr lab: herramiento de pruebas

![image](https://github.com/user-attachments/assets/59865bda-5a8f-4e49-a0bd-9fd1119fe938)

![image](https://github.com/user-attachments/assets/7efc2e92-e56f-47e7-9407-f3b41156b2bf)

#### Configuraciones

![image](https://github.com/user-attachments/assets/3752f4a4-1efb-4fa5-a70c-78a383737898)

![image](https://github.com/user-attachments/assets/c67af685-ad00-4033-9e11-baf2cd6999b1)

#### Ejemplos de uso

- Asignación como statement
- Expresiones aritméticas con precedencia de operadores
```markdown
f(x,y) {
    a = 3+foo;
    x* x + y * x;
}
```

![image](https://github.com/user-attachments/assets/512485f5-d09d-4433-9c3b-9e58408cc0b0)

- Condicional simple (exp1 ? exp2)
- Condicional completo (exp1 ? exp2 : exp3 )
- Asignación y Condicionales

```markdown
f(x,y) {
    x ? x+1 ;
    y ? y+ 1 : y-1;
    z = y ? y+ 1 : y-1;
}
```

![image](https://github.com/user-attachments/assets/3c9a5fec-9326-4e84-97f5-6a42ef94d3da)

Acceso a estructura

```markdown
f(x,y) {
    x.foo;
    x.foo = 4;
}
```

![image](https://github.com/user-attachments/assets/9f136615-9dec-4183-bbb4-fc92e34a2322)

- Envio de mensajes sin argumento
- Envio de mensajes con argumento
- Envio de mensajes con argumentos

```markdown
f(x,y) {
    x.foo();
    x.foo(4);
    x.bar(x.foo, 4);
}
```

![image](https://github.com/user-attachments/assets/2421491f-06a8-4dd5-9370-00d51e568a60)

#### Otro ejemplo

![image](https://github.com/user-attachments/assets/43dee6e5-e0d9-4615-a461-1653b5e2853a)

#### Practica

![image](https://github.com/user-attachments/assets/9b4002b7-6031-4e19-ba97-b52192c97ea5)

1. **Convenciones de Nombres Inconsistentes**: Los nombres de los métodos `lmtCrdt()`, `mtFcE()`, y `mtCbE()` usan abreviaturas inconsistentes y poco claras, lo que hace que el código sea difícil de leer y entender.

2. **Falta de Claridad**: Los nombres de los métodos no describen claramente su funcionalidad. Es importante que los nombres de los métodos sean autoexplicativos para mejorar la legibilidad del código.

Sugerencias de Mejora:

1. **Usar Nombres Descriptivos y Consistentes**: Renombrar los métodos para que sean más descriptivos y sigan una convención de nombres consistente. Por ejemplo:
   - `lmtCrdt()` → `obtenerLimiteCredito()`
   - `mtFcE(LocalDate f1, LocalDate f2)` → `obtenerMontoFacturado(LocalDate fechaInicio, LocalDate fechaFin)`
   - `mtCbE(LocalDate f1, LocalDate f2)` → `obtenerMontoCobrado(LocalDate fechaInicio, LocalDate fechaFin)`

2. **Mejorar la Documentación de los Métodos**: Asegurarse de que los comentarios describan con precisión lo que hace cada método y proporcionen información significativa.


![image](https://github.com/user-attachments/assets/fec8ac93-6dd6-4b35-9022-166d90237740)
![image](https://github.com/user-attachments/assets/8d13d122-c3e3-4c07-8e5a-ba48c7ce6047)

En el ejercicio sobre participación en proyectos, se presentan dos diagramas de clases (Figura 1 y Figura 2) donde se ha realizado un cambio para evitar lo que se consideraba un "mal olor" en el diseño original.

Análisis del Cambio Realizado

**Diseño Inicial (Figura 1):**

- En el diseño inicial, la clase `Persona` contiene el método `participaEnProyecto(p: Proyecto): Boolean`, que comprueba si una persona participa en un proyecto dado.
- Este método depende de obtener los participantes del objeto `Proyecto` y verificar si la instancia actual de `Persona` está contenida en esa lista.

**Diseño Modificado (Figura 2):**

- En el diseño modificado, el método `participa(p: Persona): Boolean` se ha movido a la clase `Proyecto`.
- Este cambio hace que sea responsabilidad de la clase `Proyecto` verificar si una persona está participando, utilizando su propia lista de participantes.

**Justificación del Cambio**

1. **Responsabilidad Apropiada (Single Responsibility Principle)**: El cambio realizado es apropiado porque en el diseño inicial, la clase `Persona` estaba asumiendo una responsabilidad que pertenece más naturalmente a la clase `Proyecto`. Este cambio respeta el principio de responsabilidad única, donde cada clase debe ser responsable de una única parte de la funcionalidad.

2. **Mejor Cohesión**: El método `participa` ahora está directamente relacionado con la gestión de la lista de participantes de la clase `Proyecto`. Esto mejora la cohesión de la clase `Proyecto`, ya que ahora gestiona su propia lógica interna de participación.

3. **Desacoplamiento**: El diseño modificado reduce el acoplamiento entre `Persona` y `Proyecto`. En el diseño inicial, `Persona` tenía que conocer la estructura interna de `Proyecto` para funcionar correctamente, lo cual no es ideal.

4. **Claridad del Código**: El código es más claro y fácil de entender en el diseño modificado, ya que cada clase tiene métodos que directamente reflejan su función principal en el sistema.

**Conclusión**
El cambio realizado en el diseño es apropiado y mejora la arquitectura del sistema. Al mover la lógica de verificación de participación a la clase `Proyecto`, se respeta el principio de responsabilidad única, se mejora la cohesión y se reduce el acoplamiento entre clases.