---
layout: ../../layouts/MarkdownPostLayout.astro
title: '📃TemplateMethod'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Objetos/template-method.webp'
    alt: ''
tags: ["POO"]
category: Patrones
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

## Ejemplo Práctico (Ejercicio 4 Cálculo de sueldos)

Sea una empresa que paga sueldos a sus empleados, los cuales están organizados en tres tipos: Temporarios, Pasantes y Planta. El sueldo se compone de 3 elementos: sueldo básico, adicionales y descuentos. 

|          | Temporario                                      | Pasante          | Planta                        |
|----------|-------------------------------------------------|------------------|-------------------------------|
| básico   | $ 20.000 + cantidad de horas que trabajo * $ 300| $20.000          | $ 50.000                      |
| adicional| $5.000 si está casado<br>$2.000 por cada hijo  | $2.000 por examen que rindió | $5.000 si está casado<br>$2.000 por cada hijo<br>$2.000 por cada año de antigüedad |
| descuento| 13% del sueldo básico<br>5% del sueldo adicional| 13% del sueldo básico<br>5% del sueldo adicional | 13% del sueldo básico<br>5% del sueldo adicional |


### Tareas

- Diseñe la jerarquía de Empleados de forma tal que cualquier empleado puede responder al mensaje #sueldo. 
- Desarrolle los test cases necesarios para probar todos los casos posibles.
- Implemente en Java.

---

### Diagrama

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/39f37ecd-5aa8-4136-8449-50995a69c2e3)

### Codigo

#### Empleado

```java
public abstract class Empleado {
	private String nombre;
	protected double cantidadHijos;
	protected Boolean estaCasado;
	
	public Empleado(String nombre) {
		this.nombre = nombre;
	}
	
	public double calcularSueldo() {
		return this.getBasico() + getAdicional() - getDescuento();
	}
	
	abstract double getBasico();
	abstract double getAdicional();
	
	double getDescuento() {
		return this.getBasico() * 0.13 + this.getAdicional() * 0.05;
	}
	
	public void setCasado(Boolean estaCasado) {
		this.estaCasado = estaCasado;
	}
	
	public void cantidadHijos(double cantidadHijos) {
		this.cantidadHijos = cantidadHijos;
	}
}
```

#### Empresa

```java
public class Empresa {
	List<Empleado> empleados = new ArrayList<Empleado>();
	
	public void agregarEmpleado(Empleado e) {
		this.empleados.add(e);
	}
}
```

#### Pasante

```java
public class Pasante extends Empleado{
	private double examenesRendidos;
	
	public Pasante(String nombre) {
		super(nombre);
	}

	@Override
	double getBasico() {
		return 20000;
	}

	@Override
	double getAdicional() {
		return 2000 * this.examenesRendidos;
	}
	
	public void setExamenesRendidos(double cantidadExamenes) {
		this.examenesRendidos = cantidadExamenes;
	}
}
```

#### Planta

```java
public class Planta extends Empleado{
	private double antiguedad;
	
	public Planta(String nombre) {
		super(nombre);
		// TODO Auto-generated constructor stub
	}

	public void setAntiguedad(double antiguedad) {
		this.antiguedad = antiguedad;
	}
	
	@Override
	double getBasico() {
		return 50000;
	}

	@Override
	double getAdicional() {
		double total = 0;
		if (this.estaCasado) {
			total = total + 5000;
		}
		return total + (2000 * this.cantidadHijos) + (2000 * this.antiguedad);  
		
	}
}
```

#### Temporal

```java
public class Temporal extends Empleado{
	private double cantidadHoras;
	
	public Temporal(String nombre) {
		super(nombre);
	}  

	public void setCantidadHoras(double horas) {
		this.cantidadHoras = horas;
	}
	
	@Override
	double getBasico() {
		return 20000 + (this.cantidadHoras * 300);
	}

	@Override
	double getAdicional() {
		if (this.estaCasado) {
			return 5000 + (2000 * this.cantidadHijos);
		}
		return 2000 * this.cantidadHijos;
		
	}
}
```

#### Test

```java
public class EmpleadoTest {
	
	Pasante pasante;
	Planta planta;
	Temporal temporal;
	
	@BeforeEach
	void setUp() throws Exception {
		temporal = new Temporal("Temporal");
		pasante = new Pasante("Pasante");
		planta = new Planta("Planta");		
	}
	
    @Test
    public void testTemporal() {
    	temporal.setCantidadHoras(10);
    	temporal.setCasado(true);
    	temporal.cantidadHijos(1);
    	
        assertEquals(23000, temporal.getBasico());
        assertEquals(7000, temporal.getAdicional());
        assertEquals((23000 * 0.13) + (7000 * 0.05), temporal.getDescuento());
    }
    
    @Test
    public void testPasante() {
    	pasante.setExamenesRendidos(10);
    	
        assertEquals(20000, pasante.getBasico());
        assertEquals(20000, pasante.getAdicional());
        assertEquals((20000 * 0.13) + (20000 * 0.05), pasante.getDescuento());
    }
    
    @Test
    public void testPlanta() {
    	planta.setCasado(true);
    	planta.cantidadHijos(1);
    	planta.setAntiguedad(1);
    	
        assertEquals(50000, planta.getBasico());
        assertEquals(9000, planta.getAdicional());
        assertEquals((50000 * 0.13) + (9000 * 0.05), planta.getDescuento());
    }
}
```