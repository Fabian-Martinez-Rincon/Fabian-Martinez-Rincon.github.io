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

#### Ejercicio 1.1

1. **Nombres de Métodos Crípticos (Inconsistent Naming):**
   - Los nombres de los métodos (`lmtCrdt`, `mtFcE`, `mtCbE`) son crípticos y no son claros respecto a lo que hacen. Utilizan abreviaciones que dificultan la lectura y comprensión del código.
   - Esto es un mal olor llamado **"Nombres Inconsistentes o Crípticos"**, que puede llevar a errores en el uso del código, ya que otros desarrolladores tendrán dificultades para entender lo que hacen estos métodos.

2. **Falta de Cohesión (Low Cohesion):**
   - Los métodos `mtFcE()` y `mtCbE()` operan sobre rangos de fechas y parecen ser parte de una lógica de facturación o cobro que podría pertenecer a una clase separada. Este es un indicativo de que la clase `Cliente` puede estar asumiendo más responsabilidades de las que debería.
   - Esto es un mal olor conocido como **"Falta de Cohesión"** donde la clase `Cliente` podría estar haciendo más de lo que debería según el **Principio de Responsabilidad Única (SRP)**.

3. **Interfaz Inflada (Large Class / Bloated Interface):**
   - Si la clase `Cliente` tiene más métodos además de estos, podría convertirse en una clase demasiado grande, manejando múltiples responsabilidades. Las interfaces infladas dificultan el mantenimiento, las pruebas y la reutilización del código.
   - Este es un mal olor de **"Interfaz Inflada"** que puede ser mitigado mediante la división de responsabilidades.

#### Refactorings Sugeridos

1. **Renombrar Métodos (Rename Method):**
   - **Refactoring Aplicado:** Cambiar los nombres de los métodos a algo más descriptivo y consistente.
   - **Justificación:** Nombres claros y consistentes ayudan a mejorar la legibilidad y mantenibilidad del código. Además, el uso de nombres claros disminuye la curva de aprendizaje para nuevos desarrolladores.
   
   ```java
   protected double obtenerLimiteCredito() { ... }
   protected double calcularMontoFacturadoEntreFechas(LocalDate fechaInicio, LocalDate fechaFin) { ... }
   protected double calcularMontoCobradoEntreFechas(LocalDate fechaInicio, LocalDate fechaFin) { ... }
   ```

2. **Extraer Clase (Extract Class):**
   - **Refactoring Aplicado:** Extraer los métodos `calcularMontoFacturadoEntreFechas()` y `calcularMontoCobradoEntreFechas()` a una nueva clase, quizás llamada `Factura` o `Cobranzas`.
   - **Justificación:** Esta clase `Factura` o `Cobranzas` puede encargarse de toda la lógica de facturación y cobro, siguiendo el **Principio de Responsabilidad Única (SRP)**. Esto hace que la clase `Cliente` sea más cohesiva y se centre únicamente en información relacionada con el cliente.
   
   ```java
   public class Factura {
       public double calcularMontoFacturadoEntreFechas(Cliente cliente, LocalDate fechaInicio, LocalDate fechaFin) { ... }
       public double calcularMontoCobradoEntreFechas(Cliente cliente, LocalDate fechaInicio, LocalDate fechaFin) { ... }
   }
   ```

3. **Crear Interfaces Específicas (Introduce Interface):**
   - **Refactoring Aplicado:** Si existen más métodos similares en la clase `Cliente`, se pueden crear interfaces específicas para diferentes responsabilidades. Por ejemplo, una interfaz `Facturable` o `Cobrable`.
   - **Justificación:** Esto reduciría la complejidad de la clase `Cliente` y mejoraría la modularidad y reusabilidad del código.
   
   ```java
   public interface Facturable {
       double calcularMontoFacturadoEntreFechas(LocalDate fechaInicio, LocalDate fechaFin);
   }
   
   public interface Cobrable {
       double calcularMontoCobradoEntreFechas(LocalDate fechaInicio, LocalDate fechaFin);
   }
   ```

4. **Reducción del Alcance de los Métodos (Reduce Method Scope):**
   - **Refactoring Aplicado:** Evaluar si los métodos necesitan ser `protected` o si podrían ser `private` en una nueva clase separada. 
   - **Justificación:** Reducir el alcance de los métodos mejora el encapsulamiento y reduce la exposición innecesaria de métodos.

---

#### Ejercicio 1.2

**`1. Malos Olores Identificados en el Diseño Inicial (Figura 1)`**

1. **Inversión de Dependencia (Inappropriate Intimacy):**
   - En el diseño inicial, la clase `Persona` tiene un método `participaEnProyecto(Proyeto p)` que depende de la clase `Proyecto` para determinar si la persona participa en el proyecto. Esto significa que la clase `Persona` tiene conocimiento interno de la estructura y el funcionamiento de la clase `Proyecto`.
   - Este es un mal olor de "intimidad inapropiada" porque `Persona` depende de los detalles de implementación de `Proyecto`, lo que crea un acoplamiento fuerte entre las dos clases. Esto hace que el código sea más difícil de mantener y modificar.

2. **Falta de Cohesión (Low Cohesion):**
   - El método `participaEnProyecto(Proyeto p)` en la clase `Persona` no es cohesivo con el propósito de la clase `Persona`. El propósito de `Persona` debe ser representar a una persona, y no es responsabilidad de esta clase gestionar la lógica de participación en un proyecto.
   - La falta de cohesión en las responsabilidades de la clase `Persona` puede llevar a un código que es difícil de entender y modificar.

3. **Violación del Principio de Responsabilidad Única (Single Responsibility Principle, SRP):**
   - La clase `Persona` está asumiendo más de una responsabilidad: representar a una persona y manejar la participación en proyectos. Esto viola el SRP, ya que la clase debería tener una única razón para cambiar.

**`2. Cambios Realizados en el Diseño Modificado (Figura 2)`**

En el diseño revisado, se realizaron los siguientes cambios:

- Se movió el método `participaEnProyecto()` de la clase `Persona` a la clase `Proyecto`. El método ahora se llama `participa(Persona p)` y está dentro de la clase `Proyecto`.
- La lógica de verificación de participación se ha simplificado y ahora la clase `Proyecto` contiene un método `participa(Persona p)` que verifica si la persona dada está contenida en la lista de `participantes`.

**`3. Refactorings Aplicados en el Diseño Modificado`**

1. **Mover Método (Move Method):**
   - **Refactoring Aplicado:** El método `participaEnProyecto()` se movió de la clase `Persona` a la clase `Proyecto`.
   - **Justificación:** Esto elimina la dependencia inapropiada de `Persona` sobre `Proyecto` y hace que la lógica de participación esté dentro de la clase que realmente debería conocer sus participantes. Ahora, `Proyecto` maneja su propia lista de participantes y verifica la participación internamente.

2. **Aumentar Cohesión (Increase Cohesion):**
   - **Refactoring Aplicado:** Al mover el método `participaEnProyecto()` a `Proyecto`, aumentamos la cohesión en ambas clases. `Persona` ahora solo contiene información relacionada con la persona (como `id`) y no tiene métodos que gestionen proyectos.
   - **Justificación:** Esto hace que las clases sean más cohesivas. `Persona` se encarga únicamente de la información personal, y `Proyecto` se encarga de manejar la lógica relacionada con los proyectos, incluido quién participa en ellos.

3. **Cumplir con el Principio de Responsabilidad Única (SRP):**
   - **Refactoring Aplicado:** Separando las responsabilidades entre las dos clases. `Persona` ya no es responsable de la lógica del proyecto, y `Proyecto` maneja exclusivamente la lógica relacionada con la participación en proyectos.
   - **Justificación:** Esto alinea mejor el diseño de las clases con el SRP, haciendo que el sistema sea más fácil de mantener y modificar.

**`4. ¿Es Apropiado el Cambio Realizado?`**

**Sí, el cambio es apropiado.** Las razones son:

- **Reducción de Acoplamiento:** Ahora `Persona` no está acoplada a `Proyecto`, lo que hace que las clases sean menos dependientes entre sí y más fáciles de modificar de manera independiente.
- **Mejora de la Cohesión:** Cada clase ahora tiene una responsabilidad más clara y está alineada con su propósito.
- **Simplificación del Diseño:** El nuevo diseño es más fácil de entender porque `Proyecto` maneja toda la lógica relacionada con los proyectos y sus participantes.

---

#### Ejercicio 1.3

**`1. Malos Olores Identificados en el Código Original`**

1. **Método Largo (Long Method):**
   - El método `imprimirValores()` realiza múltiples operaciones:
     - Calcula la suma de edades.
     - Calcula la suma de salarios.
     - Calcula el promedio de edades.
     - Formatea e imprime un mensaje.
   - Este es un indicativo de una violación del **Principio de Responsabilidad Única (SRP)**, ya que el método está manejando más de una responsabilidad.

2. **Duplicación de Código (Duplicated Code):**
   - Dentro del bucle `for`, el cálculo de la suma de edades y la suma de salarios sigue el mismo patrón repetitivo.
   - Este tipo de duplicación es un mal olor porque aumenta la posibilidad de errores y dificulta el mantenimiento. Si la lógica cambia, tendrías que modificar el mismo código en varios lugares.

3. **Falta de Abstracción (Lack of Abstraction):**
   - El método `imprimirValores()` está demasiado atado a la lógica específica de los cálculos. No utiliza métodos separados para encapsular la lógica de sumar edades o salarios, lo cual hace que el código sea menos modular y más difícil de probar.

4. **Cálculo de Promedio no Intuitivo:**
   - La división para calcular el promedio de edades es un poco críptica en el contexto del método `imprimirValores()`. Sería más claro si este cálculo se realizara en un método separado.

**`2. Refactorings Aplicados`**

1. **Extracción de Métodos (Extract Method):**
   - **Refactoring Aplicado:** Extraer el código de cálculo de la suma de edades y la suma de salarios en métodos separados: `calcularSumaEdades()` y `calcularSumaSalarios()`.
   - **Justificación:** Esto hace que el código sea más modular, fácil de entender y reutilizable. Además, se reduce la duplicación de código y se aísla la lógica de los cálculos en métodos específicos.
   
   ```java
   private int calcularSumaEdades(List<Empleado> personal)
   private double calcularSumaSalarios(List<Empleado> personal)
   ```

2. **Extracción de Métodos para el Cálculo del Promedio (Extract Method):**
   - **Refactoring Aplicado:** Extraer la lógica de cálculo del promedio de edades a un método separado.
   - **Justificación:** Aunque el cálculo del promedio se realiza en línea dentro de `imprimirValores()`, se hace explícito que este cálculo es una operación separada. Esto no solo mejora la legibilidad del método principal, sino que también facilita la prueba y el mantenimiento del código.

   ```java
   private double calcularPromedioEdades(List<Empleado> personal) {
       int totalEdades = calcularSumaEdades(personal);
       return (double) totalEdades / personal.size();
   }
   ```

3. **Separación de Lógica de Presentación (Separate Presentation Logic):**
   - **Refactoring Aplicado:** Mantuve la separación lógica de los cálculos y la presentación en la consola. `imprimirValores()` ahora solo coordina las operaciones y presenta el resultado.
   - **Justificación:** Separar la lógica de presentación de la lógica de negocio permite que el código sea más flexible y fácil de modificar o cambiar la salida en el futuro.

4. **Renombrado de Variables para Claridad (Rename Variable):**
   - **Refactoring Aplicado:** Aclaré los nombres de los métodos (`calcularSumaEdades`, `calcularSumaSalarios`) para que sean más descriptivos y fáciles de entender.
   - **Justificación:** Nombres más claros y precisos mejoran la legibilidad del código y reducen la necesidad de comentarios explicativos.

5. **Conversión Explícita de Tipos para Promedio (Explicit Type Conversion):**
   - **Refactoring Aplicado:** Se dejó la conversión explícita a `double` al calcular el promedio (`(double) totalEdades / personal.size()`) para asegurar que el cálculo del promedio se realice correctamente.
   - **Justificación:** Este cambio asegura que el comportamiento del código sea el mismo que el original, sin perder precisión.

---

#### Ejercicio 2

**`1. Malos Olores Identificados`**

1. **Duplicación de Código (Duplicated Code):**
   - Las clases `EmpleadoTemporario`, `EmpleadoPlanta` y `EmpleadoPasante` tienen atributos y métodos muy similares. Los atributos `nombre`, `apellido`, y `sueldoBasico` se repiten en cada clase.
   - El cálculo de `sueldo()` también tiene una lógica redundante para la deducción del 13% del `sueldoBasico`.

2. **Falta de Herencia (Missing Abstraction):**
   - Todas las clases de empleados (`EmpleadoTemporario`, `EmpleadoPlanta`, `EmpleadoPasante`) comparten características comunes, como nombre, apellido y sueldo básico, y deberían heredar de una clase base común (por ejemplo, `Empleado`).
   - Este es un mal olor de **"Duplicación de Código"** y **"Código Rígido"**, donde falta una jerarquía de herencia adecuada que permita compartir atributos y métodos comunes.

3. **Código Frágil (Fragile Code):**
   - Si se necesita cambiar la lógica para calcular el sueldo (por ejemplo, cambiar la deducción de impuestos), se tendría que actualizar en múltiples lugares, lo cual es propenso a errores.

4. **Interfaz Inflada (Bloated Class):**
   - Las clases pueden volverse más grandes y difíciles de mantener si se siguen agregando nuevos atributos o métodos específicos para diferentes tipos de empleados, en lugar de aprovechar la herencia y/o composición.

**`Refactorings Sugeridos`**

1. **Extraer Clase Base Común (Extract Superclass):**
   - **Refactoring Aplicado:** Crear una clase base `Empleado` que contenga los atributos y métodos comunes (`nombre`, `apellido`, `sueldoBasico`, y un método abstracto `sueldo()`).
   - **Justificación:** Esto elimina la duplicación de código, hace que el código sea más mantenible y facilita futuros cambios en la lógica de los empleados.

2. **Uso de Métodos Abstractos para Comportamientos Específicos (Pull Up Method / Abstract Method):**
   - **Refactoring Aplicado:** Mover el método `sueldo()` común a la clase base `Empleado` y convertirlo en un método abstracto para que cada subclase (`EmpleadoTemporario`, `EmpleadoPlanta`, `EmpleadoPasante`) pueda implementar su propia lógica específica.
   - **Justificación:** Esto permite que cada clase hija tenga su propia implementación de cálculo de sueldo mientras se comparte la lógica común.

3. **Eliminar Duplicación de Código (Remove Duplicated Code):**
   - **Refactoring Aplicado:** Utilizar métodos en la clase base `Empleado` para manejar la deducción de impuestos común a todos los empleados.
   - **Justificación:** Esto hace que el código sea más limpio, más fácil de mantener y menos propenso a errores.

**`Código Refactorizado`**

**Clase Base `Empleado`**

```java
public abstract class Empleado {
    protected String nombre;
    protected String apellido;
    protected double sueldoBasico;

    public Empleado(String nombre, String apellido, double sueldoBasico) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldoBasico = sueldoBasico;
    }

    // Método común para calcular la deducción de impuestos
    protected double calcularDeduccionImpuestos() {
        return this.sueldoBasico * 0.13;
    }

    // Método abstracto que será implementado por cada subclase
    public abstract double sueldo();
}
```

**Clase `EmpleadoTemporario`**

```java
public class EmpleadoTemporario extends Empleado {
    private double horasTrabajadas;
    private int cantidadHijos;

    public EmpleadoTemporario(String nombre, String apellido, double sueldoBasico, double horasTrabajadas, int cantidadHijos) {
        super(nombre, apellido, sueldoBasico);
        this.horasTrabajadas = horasTrabajadas;
        this.cantidadHijos = cantidadHijos;
    }

    @Override
    public double sueldo() {
        return this.sueldoBasico + (this.horasTrabajadas * 500) + (this.cantidadHijos * 1000) - calcularDeduccionImpuestos();
    }
}
```

**Clase `EmpleadoPlanta`**

```java
public class EmpleadoPlanta extends Empleado {
    private int cantidadHijos;

    public EmpleadoPlanta(String nombre, String apellido, double sueldoBasico, int cantidadHijos) {
        super(nombre, apellido, sueldoBasico);
        this.cantidadHijos = cantidadHijos;
    }

    @Override
    public double sueldo() {
        return this.sueldoBasico + (this.cantidadHijos * 2000) - calcularDeduccionImpuestos();
    }
}
```

**Clase `EmpleadoPasante`**

```java
public class EmpleadoPasante extends Empleado {

    public EmpleadoPasante(String nombre, String apellido, double sueldoBasico) {
        super(nombre, apellido, sueldoBasico);
    }

    @Override
    public double sueldo() {
        return this.sueldoBasico - calcularDeduccionImpuestos();
    }
}
```

---

#### 2.2 Juego

**`1. Malos Olores Identificados`**

1. **Datos Expuestos (Data Clump):**
   - La clase `Jugador` tiene sus atributos `nombre`, `apellido`, y `puntuacion` definidos como `public`, lo cual expone estos datos directamente a otras clases.
   - Este es un mal olor llamado **"Campos Públicos Expuestos"** porque rompe el principio de **Encapsulamiento**. Exponer los campos directamente permite que cualquier clase acceda y modifique el estado interno de `Jugador` sin ningún control, lo que puede conducir a errores y comportamientos inesperados.

2. **Inapropiada Intimidad (Inappropriate Intimacy):**
   - La clase `Juego` accede directamente al atributo `puntuacion` de `Jugador` para incrementar o decrementar su valor. Esto indica un acoplamiento innecesario entre las dos clases.
   - Este es un mal olor conocido como **"Inapropiada Intimidad"**, ya que la clase `Juego` depende de los detalles internos de la clase `Jugador`.

3. **Falta de Encapsulación (Missing Encapsulation):**
   - No hay métodos que encapsulen la lógica de manipulación de la puntuación en la clase `Jugador`. Esto lleva a una falta de control sobre cómo se accede y se modifica la puntuación del jugador.

4. **Abuso de Funcionalidad de Clase (Feature Envy):**
   - Los métodos `incrementar()` y `decrementar()` en la clase `Juego` muestran que esta clase está "celosa de características" de la clase `Jugador`, porque dependen del conocimiento interno de cómo manipular la puntuación del jugador.
   - Este es un mal olor de **"Abuso de Funcionalidad de Clase"**.

**`Refactorings Sugeridos`**

1. **Encapsular Campos (Encapsulate Field):**
   - **Refactoring Aplicado:** Cambiar los campos `public` de la clase `Jugador` a `private` y proporcionar métodos `get` y `set` (si es necesario) para acceder a ellos.
   - **Justificación:** Esto sigue el principio de **Encapsulamiento** y proporciona un control sobre cómo se accede y modifica el estado del objeto `Jugador`.

2. **Mover Métodos (Move Method):**
   - **Refactoring Aplicado:** Mover los métodos `incrementar()` y `decrementar()` a la clase `Jugador`. La manipulación de la puntuación debería ser responsabilidad de la clase `Jugador`, no de `Juego`.
   - **Justificación:** Esto elimina la **"Inapropiada Intimidad"** entre `Juego` y `Jugador` y asegura que `Jugador` controle cómo se cambia su puntuación.

3. **Proteger Datos Internos (Hide Data):**
   - **Refactoring Aplicado:** Asegurar que las clases externas no accedan directamente a los atributos de `Jugador` y que toda manipulación se haga a través de métodos de instancia de `Jugador`.
   - **Justificación:** Esto garantiza la integridad del objeto y hace que el código sea más fácil de mantener y modificar.

**`Código Refactorizado`**

#### Clase `Jugador`

```java
public class Jugador {
    private String nombre;
    private String apellido;
    private int puntuacion = 0;

    public Jugador(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Métodos getter y setter para nombre y apellido
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getPuntuacion() {
        return puntuacion;
    }

    // Método para incrementar la puntuación
    public void incrementarPuntuacion(int puntos) {
        this.puntuacion += puntos;
    }

    // Método para decrementar la puntuación
    public void decrementarPuntuacion(int puntos) {
        this.puntuacion -= puntos;
    }
}
```

#### Clase `Juego`

```java
public class Juego {
    // Métodos para incrementar y decrementar utilizando los métodos de Jugador
    public void incrementar(Jugador j) {
        j.incrementarPuntuacion(100);  // Delegar la responsabilidad a Jugador
    }

    public void decrementar(Jugador j) {
        j.decrementarPuntuacion(50);  // Delegar la responsabilidad a Jugador
    }
}
```

---

#### Clase 2.3

**`Análisis del Código Proporcionado`**

El método `ultimosPosts(Usuario user, int cantidad)` en la clase `PostApp` devuelve una lista de los últimos `N` posts que no pertenecen al usuario especificado, ordenados por fecha de forma descendente.

**`Malos Olores Identificados`**

1. **Código Duplicado / Repetitivo (Duplicated Code):**
   - El código tiene dos bucles anidados que implementan manualmente el algoritmo de ordenación (un ordenamiento de selección, en este caso) para ordenar los posts por fecha. Este es un código repetitivo y es innecesario dado que Java proporciona métodos de ordenación más eficientes y legibles en su API estándar.
   - Este es un mal olor llamado **"Código Duplicado"** porque la lógica de ordenación puede simplificarse utilizando las utilidades proporcionadas por la biblioteca estándar de Java.

2. **Complejidad de Código (Long Method):**
   - El método `ultimosPosts` es demasiado largo y realiza múltiples tareas:
     1. Filtra los posts que no pertenecen al usuario dado.
     2. Ordena los posts filtrados por fecha.
     3. Limita la lista de posts a la cantidad solicitada.
   - Este es un mal olor conocido como **"Método Largo (Long Method)"** y **"Falta de Separación de Responsabilidades"**, ya que el método maneja múltiples responsabilidades, lo que lo hace difícil de entender, probar y mantener.

3. **Interfaz Inflada (Bloated Interface):**
   - La clase `PostApp` tiene un método que realiza demasiadas tareas. Este mal olor puede llevar a una interfaz inflada, haciendo que la clase tenga más responsabilidades de las que debería.
   - Esto indica que se podría dividir la lógica en métodos más pequeños y específicos.

4. **Código Imperativo en Lugar de Declarativo (Imperative Programming):**
   - El uso de bucles y condiciones explícitas para filtrar y ordenar es más imperativo que declarativo. Con las modernas API de Java, como `Stream`, se puede hacer el código más declarativo y legible.

**`Refactorings Sugeridos`**

1. **Usar API de Streams de Java (Replace Loop with Stream):**
   - **Refactoring Aplicado:** Utilizar la API de `Stream` de Java para filtrar, ordenar y limitar los posts. Esto hace el código más conciso, fácil de leer y mantener.
   - **Justificación:** Los Streams proporcionan un enfoque más declarativo y eficiente para manejar colecciones en Java.

2. **Dividir Métodos (Extract Method):**
   - **Refactoring Aplicado:** Extraer la lógica de filtrado y ordenación en métodos separados. Esto reduce el tamaño del método `ultimosPosts` y mejora la legibilidad.
   - **Justificación:** Hace que cada método sea más cohesivo, siguiendo el **Principio de Responsabilidad Única (SRP)**.

3. **Eliminar Código Duplicado (Remove Duplicated Code):**
   - **Refactoring Aplicado:** Usar el método `sort()` proporcionado por Java en lugar de implementar manualmente la ordenación.
   - **Justificación:** Reduce la duplicación de código y utiliza soluciones probadas y más eficientes.

**`Código Refactorizado`**

**Clase `PostApp` Refactorizada**

```java
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

public class PostApp {
    private List<Post> posts; // Suponemos que esta lista se inicializa en algún lugar del código

    /**
     * Retorna los últimos N posts que no pertenecen al usuario user.
     */
    public List<Post> ultimosPosts(Usuario user, int cantidad) {
        return filtrarYOrdenarPosts(user)
                .stream()
                .limit(cantidad)
                .collect(Collectors.toList());
    }

    /**
     * Método para filtrar y ordenar los posts que no pertenecen al usuario dado.
     */
    private List<Post> filtrarYOrdenarPosts(Usuario user) {
        return posts.stream()
                .filter(post -> !post.getUsuario().equals(user))
                .sorted(Comparator.comparing(Post::getFecha).reversed()) // Orden descendente por fecha
                .collect(Collectors.toList());
    }
}
```

**`Cambios Realizados`:**

1. **Uso de Streams:**
   - Reemplacé los bucles manuales y la lógica de ordenación con una combinación de `filter()`, `sorted()` y `limit()` de la API de `Stream`.
   - **Beneficio:** Código más conciso, legible y fácil de mantener.

2. **Separación de Responsabilidades:**
   - Creé un método `filtrarYOrdenarPosts()` que encapsula la lógica de filtrado y ordenación, mejorando la cohesión del código.
   - **Beneficio:** Cada método tiene una única responsabilidad, mejorando la mantenibilidad.

3. **Eliminación de Código Duplicado:**
   - La lógica de ordenación ahora utiliza el método `sorted()` de la API de `Stream`, eliminando el código repetitivo.
   - **Beneficio:** El código se simplifica y utiliza métodos estándar, lo que también mejora el rendimiento.

---

#### Ejercicio 2.4

1. **Feature Envy (Envidia de Características):**
   - El método `total()` en la clase `Carrito` depende de los detalles internos de la clase `ItemCarrito` para calcular el total del carrito. Está utilizando directamente `item.getProducto().getPrecio() * item.getCantidad()` en lugar de delegar esta responsabilidad a la clase `ItemCarrito`.
   - **Refactoring:** Mover el método de cálculo de subtotal a `ItemCarrito` y luego usarlo en `Carrito`. Esto hará que la clase `Carrito` sea más cohesiva y que `ItemCarrito` sea responsable de manejar su propio estado.

2. **Long Method (Método Largo):**
   - Aunque el método `total()` no es excesivamente largo en términos de líneas de código, su complejidad proviene del hecho de que realiza múltiples operaciones a nivel de detalle de objetos internos.
   - **Refactoring:** Extraer métodos para dividir las responsabilidades. Crear métodos más pequeños y cohesivos ayuda a simplificar y hacer el código más legible.

3. **Primitive Obsession (Obsesión por Tipos Primitivos):**
   - Aunque el código utiliza objetos como `Producto` y `ItemCarrito`, podría ser más expresivo utilizando métodos y objetos que representen comportamientos en lugar de solo datos.
   - **Refactoring:** Añadir métodos de conveniencia que encapsulen operaciones frecuentes (por ejemplo, `subtotal()` en `ItemCarrito`).

4. **Data Class (Clase de Datos):**
   - La clase `Producto` es esencialmente una "clase de datos", ya que solo tiene atributos y getters, pero ningún comportamiento. Esto puede ser un mal olor cuando podría beneficiarse de agregar métodos que proporcionen comportamiento en lugar de solo datos.
   - **Refactoring:** Considerar si `Producto` necesita tener algún método de comportamiento (aunque en este caso puede ser más limitado y no necesariamente un problema).

**`Refactorings Aplicados`**

1. **Mover Método (Move Method):**
   - Se ha movido la lógica de cálculo de subtotal del carrito (`item.getProducto().getPrecio() * item.getCantidad()`) al propio `ItemCarrito`. Esto se ha logrado agregando un método `subtotal()` a la clase `ItemCarrito`.

2. **Añadir Métodos de Conveniencia (Add Convenience Method):**
   - Se ha añadido el método `subtotal()` a `ItemCarrito` para que encapsule la lógica de multiplicación de `cantidad` y `precio` de `Producto`.

3. **Refactorización del Método `total()` en `Carrito`:**
   - Después de mover la lógica de cálculo del subtotal a `ItemCarrito`, el método `total()` en `Carrito` ahora se vuelve más simple y legible.

**Código Refactorizado**

**Clase `Producto`**

El código de la clase `Producto` permanece igual, ya que no presenta malos olores críticos:

```java
public class Producto {
    private String nombre;
    private double precio;

    public double getPrecio() {
        return this.precio;
    }
}
```

**Clase `ItemCarrito`**

Se añade un método `subtotal()` que encapsula la lógica del cálculo del subtotal:

```java
public class ItemCarrito {
    private Producto producto;
    private int cantidad;

    public Producto getProducto() {
        return this.producto;
    }

    public int getCantidad() {
        return this.cantidad;
    }

    // Método de conveniencia que calcula el subtotal del ItemCarrito
    public double subtotal() {
        return this.producto.getPrecio() * this.cantidad;
    }
}
```

**Clase `Carrito`**

El método `total()` se simplifica para usar el método `subtotal()` de `ItemCarrito`:

```java
import java.util.List;

public class Carrito {
    private List<ItemCarrito> items;

    public double total() {
        return this.items.stream()
                .mapToDouble(ItemCarrito::subtotal)  // Usa el método subtotal() de ItemCarrito
                .sum();
    }
}
```

----

#### Ejercicio 2.5

**`Malos Olores Identificados`**

1. **Envidia de Características (Feature Envy):**
   - El método `getDireccionFormateada()` en la clase `Cliente` está utilizando intensamente los detalles internos de la clase `Direccion` (sus atributos `localidad`, `calle`, `numero`, `departamento`) para crear la dirección formateada. Esto muestra que `Cliente` está haciendo trabajo que debería ser responsabilidad de `Direccion`.
   - Este es un mal olor llamado **"Feature Envy"** porque la lógica relacionada con `Direccion` debería estar encapsulada dentro de la propia clase `Direccion`.

2. **Duplicación Potencial de Código (Potential Duplicate Code):**
   - El formato de la dirección puede necesitar reutilización en otros contextos (por ejemplo, otros métodos que requieran una dirección formateada). Si esto no se mueve a `Direccion`, existe la posibilidad de que esta lógica de formateo se duplique.

3. **Falta de Encapsulamiento (Lack of Encapsulation):**
   - El método `getDireccionFormateada()` no está encapsulando la lógica donde pertenece; la lógica de formateo de dirección debería estar en la clase `Direccion`.

**`Refactorings Sugeridos`**

1. **Mover Método (Move Method):**
   - **Refactoring Aplicado:** Mover el método `getDireccionFormateada()` de `Cliente` a `Direccion`.
   - **Justificación:** Encapsula el comportamiento de formateo en la clase que contiene los datos necesarios (`Direccion`), mejorando la cohesión y reduciendo la envidia de características.

2. **Renombrar Método para Mayor Claridad (Rename Method):**
   - **Refactoring Aplicado:** Renombrar `getDireccionFormateada()` a `formatearDireccion()` para dejar claro que el método realiza una acción (formatear).
   - **Justificación:** Mejora la legibilidad del código y hace que el nombre del método sea más descriptivo.

**`Código Refactorizado`**

**Clase `Direccion`**

El método `getDireccionFormateada()` se mueve a la clase `Direccion` y se renombra a `formatearDireccion()`:

```java
public class Direccion {
    private String localidad;
    private String calle;
    private String numero;
    private String departamento;

    // Refactoring: Move Method and Rename Method
    public String formatearDireccion() {
        return localidad + ", " + calle + ", " + numero + ", " + departamento;
    }

    // Getters y setters para los atributos (si es necesario)
    public String getLocalidad() {
        return localidad;
    }

    public String getCalle() {
        return calle;
    }

    public String getNumero() {
        return numero;
    }

    public String getDepartamento() {
        return departamento;
    }
}
```

**Clase `Cliente`**

El método `getDireccionFormateada()` se elimina de `Cliente` y se llama al método de `Direccion`:

```java
public class Cliente {
    private Direccion direccion;

    // Método para obtener la dirección formateada ahora delega a Direccion
    public String getDireccionFormateada() {
        return this.direccion.formatearDireccion();  // Refactoring: Delegación del método
    }

    // Otros métodos y atributos
}
```

**Clase `Supermercado`**

La clase `Supermercado` permanece igual, ya que no presenta malos olores significativos. La única modificación es el nombre del método que se llama para obtener la dirección formateada:

```java
import java.text.MessageFormat;

public class Supermercado {
    public void notificarPedido(long nroPedido, Cliente cliente) {
        String notificacion = MessageFormat.format(
            "Estimado cliente, se le informa que hemos recibido su pedido con número {0}, el cual será enviado a la dirección {1}", 
            nroPedido, cliente.getDireccionFormateada()
        );
        // lo imprimimos en pantalla, podría ser un mail, SMS, etc..
        System.out.println(notificacion);
    }
}
```

**`Resultado Final`**

Con esta refactorización:

1. **Eliminación de la "Envidia de Características" (Feature Envy):** El método `formatearDireccion()` se encuentra ahora en la clase que contiene los datos necesarios (`Direccion`), reduciendo la dependencia en los detalles internos de otras clases.

2. **Mejora de la Cohesión y Encapsulamiento:** La clase `Direccion` ahora es más cohesiva, ya que incluye la lógica relevante para su propósito (formateo de la dirección).

3. **Código más legible y mantenible:** La lógica se distribuye apropiadamente entre las clases, y el código es más fácil de entender y modificar.

**`Conclusión`**

Los malos olores de **Envidia de Características** y **Falta de Encapsulamiento** se resolvieron mediante los refactorings **Mover Método (Move Method)** y **Renombrar Método (Rename Method)**. El resultado es un código más limpio, modular y fácil de mantener.

---

#### Ejercicio 2.6

**`Malos Olores Identificados`**

1. **Condicionales Anidados (Long Conditional / Conditional Complexity):**
   - El método `calcularCostoPelicula()` en la clase `Usuario` utiliza una serie de condicionales (`if-else`) para determinar el costo de una película según el tipo de suscripción del usuario. Esto genera complejidad y es difícil de mantener.

2. **Falta de Polimorfismo (Missing Polymorphism):**
   - En lugar de usar condicionales para decidir el comportamiento basado en el tipo de suscripción, se puede usar polimorfismo para encapsular el comportamiento en clases diferentes de suscripción.

3. **Uso de Comparación de Strings con `==` (Primitive Obsession):**
   - Comparar `String` usando `==` es un error común en Java y puede llevar a un comportamiento inesperado. Debería utilizarse el método `.equals()` para comparar `String`.

4. **Acoplamiento Fuerte (Feature Envy):**
   - La clase `Usuario` sabe demasiado sobre cómo calcular los costos adicionales de una película. Esto es responsabilidad de la suscripción o de la propia clase `Pelicula`.

**`Refactorings Aplicados con Nombres Específicos`**

1. **Reemplazar Condicionales con Polimorfismo (Replace Conditional with Polymorphism):**
   - **Refactoring Aplicado:** Crear una jerarquía de clases para diferentes tipos de suscripciones (`Basico`, `Familia`, `Plus`, `Premium`), cada una con su propia implementación del cálculo de costos.
   - **Justificación:** Esto elimina los condicionales y permite que cada tipo de suscripción maneje su propio comportamiento, siguiendo el principio de **Abierto/Cerrado (Open/Closed Principle, OCP)**.

2. **Extraer Jerarquía de Clases (Extract Class Hierarchy):**
   - **Refactoring Aplicado:** Crear una clase base `Subscripcion` y subclases derivadas como `Basico`, `Familia`, `Plus`, y `Premium` que implementen el método `calcularCosto(Pelicula pelicula)`.
   - **Justificación:** Encapsula el comportamiento de cada tipo de suscripción y hace que el código sea más fácil de mantener y expandir. Las subclases son responsables de su comportamiento específico.

3. **Reemplazar Comparación de `String` con Polimorfismo (Replace String with Polymorphism):**
   - **Refactoring Aplicado:** En lugar de comparar `String` para decidir el tipo de suscripción, se crea una jerarquía de clases que maneja estos comportamientos.
   - **Justificación:** Mejora la legibilidad y reduce errores debido a comparaciones incorrectas de `String`.

4. **Mover Método a la Clase Correcta (Move Method):**
   - **Refactoring Aplicado:** El método `calcularCostoPelicula()` que pertenece a `Usuario` ahora se mueve a la jerarquía de clases `Subscripcion`. Esto se denomina **Mover Método** porque mueve la lógica al lugar correcto.
   - **Justificación:** Este refactoring ayuda a reducir el acoplamiento y la "envidia de características" (Feature Envy) entre las clases, y mejora la cohesión.

**Clase `Usuario`**

La clase `Usuario` ahora contiene una referencia a `Subscripcion`, que maneja el cálculo del costo:

```java
public class Usuario {
    private Subscripcion subscripcion;  // Reemplazamos tipoSubscripcion con una clase

    // Refactoring: Encapsulate Field
    public void setSubscripcion(Subscripcion subscripcion) {
        this.subscripcion = subscripcion;
    }

    // Refactoring: Move Method
    public double calcularCostoPelicula(Pelicula pelicula) {
        return subscripcion.calcularCosto(pelicula);  // Delegamos el cálculo a la suscripción
    }
}
```

**Clase Base `Subscripcion` y Subclases Específicas**

Creamos una clase base `Subscripcion` y subclases para cada tipo de suscripción:

```java
// Refactoring: Extract Class Hierarchy
public abstract class Subscripcion {
    // Refactoring: Replace Conditional with Polymorphism
    public abstract double calcularCosto(Pelicula pelicula);
}

// Refactoring: Extract Subclass for Basico
public class Basico extends Subscripcion {
    @Override
    public double calcularCosto(Pelicula pelicula) {
        return pelicula.getCosto() + pelicula.calcularCargoExtraPorEstreno();
    }
}

// Refactoring: Extract Subclass for Familia
public class Familia extends Subscripcion {
    @Override
    public double calcularCosto(Pelicula pelicula) {
        return (pelicula.getCosto() + pelicula.calcularCargoExtraPorEstreno()) * 0.90;
    }
}

// Refactoring: Extract Subclass for Plus
public class Plus extends Subscripcion {
    @Override
    public double calcularCosto(Pelicula pelicula) {
        return pelicula.getCosto();
    }
}

// Refactoring: Extract Subclass for Premium
public class Premium extends Subscripcion {
    @Override
    public double calcularCosto(Pelicula pelicula) {
        return pelicula.getCosto() * 0.75;
    }
}
```

**Clase `Pelicula`**

La clase `Pelicula` permanece igual, ya que no presenta malos olores significativos:

```java
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Pelicula {
    private String nombre;
    private String genero;
    private LocalDate fechaEstreno;
    private double costo;

    public double getCosto() {
        return this.costo;
    }

    // Refactoring: Replace Conditional Logic with Method
    public double calcularCargoExtraPorEstreno(){
        // Si la Película se estrenó 30 días antes de la fecha actual, retorna un cargo de 0$, caso contrario, retorna un cargo extra de 300$
        return (ChronoUnit.DAYS.between(this.fechaEstreno, LocalDate.now())) > 30 ? 0 : 300;
    }
}
```

#### Resultado Final

Con esta refactorización:

1. **Reemplazar Condicionales con Polimorfismo:** Se han eliminado las estructuras condicionales complejas utilizando polimorfismo. Cada subclase de `Subscripcion` maneja su propio comportamiento.
   
2. **Extraer Jerarquía de Clases:** Se ha creado una jerarquía de clases específica para representar cada tipo de suscripción, haciendo que el código sea más modular y mantenible.

3. **Mover Método a la Clase Correcta:** Se movió la lógica del cálculo de costos a las clases de suscripción correspondientes, mejorando la cohesión y reduciendo el acoplamiento.

---

#### Ejercicio 3


**Requerimientos de Extensión**

El diseño original tenía ciertas limitaciones que se hicieron evidentes con los nuevos requerimientos:

1. **Flexibilidad insuficiente:** El diseño original no permite que una persona pueda tener múltiples roles (e.g., ser tanto `Profesor` como `Mentor`).
2. **Dificultad para agregar nuevos roles:** En el diseño original, agregar un nuevo rol requeriría añadir nuevas subclases de `Person`, complicando la jerarquía de herencia.

**Diseño Propuesto**

1. **Nuevas Clases:**
   - `Party`: Nueva clase abstracta que representa a una persona o entidad en el sistema.
   - `Role`: Nueva clase que representa un rol que puede tener una `Party`.
   - `Profesor` y `Student` ya no son subclases de `Person` sino que son `Role`.

2. **Nuevas Relaciones:**
   - `Party` puede tener uno o muchos `Role`.
   - `Course` se relaciona con `Role` en lugar de con `Profesor` o `Student` directamente.

**¿Por qué la Transformación no es un Refactoring?**

1. **Se Añade Nueva Funcionalidad:**
   - El nuevo diseño introduce la capacidad de que una `Party` pueda tener múltiples `Role` al mismo tiempo. Por ejemplo, una persona ahora puede ser `Profesor` y `Mentor`, lo cual no era posible en el diseño original.
   - **Añadir esta funcionalidad va más allá del simple refactoring** porque un refactoring debe preservar el comportamiento existente sin agregar nuevas capacidades.

2. **Cambio en el Modelo Conceptual:**
   - El diseño original usaba una jerarquía de herencia para definir los roles (`Profesor` y `Student`) de una `Person`. El diseño propuesto cambia este modelo a una composición de `Party` y `Role`, lo que modifica significativamente cómo se entienden y representan las relaciones entre los objetos.
   - Este cambio en la abstracción del modelo implica una nueva forma de operar y extender el sistema, más allá de lo que permite un refactoring.

3. **Impacto en la Extensibilidad y Mantenimiento:**
   - Aunque la propuesta mejora la extensibilidad y flexibilidad del sistema al permitir múltiples roles y facilita la adición de nuevos roles, estos cambios también introducen nuevas estructuras de datos y asociaciones que no existían en el diseño original. Esta mejora en la extensibilidad implica cambios significativos en cómo funciona el sistema.

**Conclusión**

La transformación propuesta **no es un refactoring** porque:

- **Agrega nueva funcionalidad:** Permite que una `Party` tenga múltiples `Role`, lo cual es una nueva capacidad que no existía en el diseño original.
- **Cambia la estructura conceptual del modelo:** Introduce nuevas clases (`Party` y `Role`) y modifica las relaciones existentes, lo que cambia el modelo conceptual del dominio.
- **Impacto en el comportamiento:** Aunque la funcionalidad existente (e.g., cursos que tienen profesores y estudiantes) puede ser preservada, la forma de manejar esa funcionalidad cambia significativamente.

**Alternativas de Diseño**

En lugar de llamar a esto un "refactoring", sería más preciso considerarlo como una **reingeniería de diseño** o **rediseño del sistema** que permite nuevas funcionalidades y mejora la extensibilidad del sistema. Esto es parte de un proceso de mejora continua, pero no cae bajo la definición estricta de "refactoring" que implica no cambiar el comportamiento observable del sistema.

Por lo tanto, la transformación es una mejora del diseño que agrega nuevas capacidades y flexibilidad, pero no puede considerarse un refactoring en sentido estricto.

---

### Ejercicio 4