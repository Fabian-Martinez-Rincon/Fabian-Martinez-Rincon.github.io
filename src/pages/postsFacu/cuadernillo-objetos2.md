---
layout: ../../layouts/MarkdownPostLayout.astro
title: Cuadernillo OO2
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/oo2.jpg'
    alt: "Orientación a OO2."
pubDate: 2024-03-12
tags: ["Objetos", "Uml", "Java", "Test Unit"]
---

# Indice

- [Ejercicio 1 Red Social](#ejercicio-1-red-social)
- [Ejercicio 2 Piedra Papel o Tijera](#ejercicio-2-piedra-papel-o-tijera)

---

## Introducción

El presente cuadernillo estará en elaboración durante el semestre y tendrá un compilado con todos los ejercicios que se usarán durante la asignatura. Se irán agregando ejercicios al final del cuadernillo para poder poner en práctica los contenidos que se van viendo en la materia.

Cada semana les indicaremos cuáles son los ejercicios en los que deberían enfocarse para estar al día y algunos de ellos serán discutidos en la explicación de práctica.

Recomendación importante: 
Los contenidos de la materia se incorporan y fijan mejor cuando uno intenta aplicarlos - no alcanza con ver un ejercicio resuelto por alguien más. Para sacar el máximo provecho de los ejercicios es importante asistir a las consultas de práctica habiendo intentado resolverlos (tanto como sea posible). De esa manera las consultas estarán más enfocadas y el docente podrá dar un mejor feedback.

## Ejercicio 1 Red Social

Ejercicio 1: Red social  
Se quiere programar en objetos una versión simplificada de una red social parecida a Twitter. Este servicio debe permitir a los usuarios registrados postear y leer mensajes de hasta 280 caracteres. Ud. debe modelar e implementar parte del sistema donde nos interesa que quede claro lo siguiente:
- Cada usuario conoce todos los Tweets que hizo.
- Un tweet puede ser re-tweet de otro y este tweet debe conocer a su tweet de origen.
- Twitter debe conocer a todos los usuarios del sistema.
- Los tweets de un usuario se deben eliminar cuando el usuario es eliminado. No existen tweets no referenciados por un usuario.
- Los usuarios se identifican por su screenName.
- No se pueden agregar dos usuarios con el mismo screenName.
- Los tweets deben tener un texto de 1 carácter como mínimo y 280 caracteres como máximo.
- Un re-tweet no tiene texto adicional.

Tareas:
- Su tarea es diseñar y programar en Java lo que sea necesario para ofrecer la funcionalidad antes descrita. Se espera que entregue los siguientes productos.
  - Diagrama de clases UML.
  - Implementación en Java de la funcionalidad requerida.
  - Implementar los tests (JUnit) que considere necesarios.

Nota: para crear el proyecto Java lea el material llamado “Trabajando en OO2 con proyectos Maven”.

---

## Ejercicio 2 Piedra Papel o Tijera

Se quiere programar en objetos una versión del juego Piedra Papel o Tijera. En este juego dos jugadores eligen entre tres opciones: piedra, papel o tijera. La piedra aplasta la tijera, la tijera corta el papel, y el papel envuelve la piedra. Los jugadores eligen una opción y se determina un ganador según las reglas:

|         | Piedra | Papel  | Tijera |
|---------|--------|--------|--------|
| Piedra  | Empate | Papel  | Piedra |
| Papel   | Papel  | Empate | Tijera |
| Tijera  | Piedra | Tijera | Empate |

Tareas:
- Diseñe e implemente una solución a este problema de forma tal que dadas dos opciones determine cuál fue la ganadora o si hubo empate.
- Se desea extender al juego a una versión más equitativa que integre a lagarto y Spock con las siguientes reglas:
  - Piedra aplasta tijera y aplasta lagarto.
  - Papel cubre piedra y desaprueba Spock.
  - Tijera corta papel y decapita lagarto.
  - Lagarto come papel y envenena Spock.
  - Spock rompe tijera y vaporiza piedra.
- ¿Qué cambios se necesitan agregar?
- Agregue los cambios a la solución anterior.


### Resolución

![Scan_20240319](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/272140cb-ada6-4b2c-a06c-11b377e61e03)

### Jugada

```java
public abstract class Jugada {
	public abstract String juegaContra(Jugada j);
	public abstract String contraPiedra();
	public abstract String contraPapel();
	public abstract String contraTijera();
	public abstract String contraLagarto();
	public abstract String contraSpock();
}
```

### Lagarto

```java
public class Lagarto extends Jugada{

	@Override
	public String juegaContra(Jugada j) {
		return j.contraLagarto();
	}

	@Override
	public String contraPiedra() {
		return "Es Aplastado";
	}

	@Override
	public String contraPapel() {
		return "Come";
	}

	@Override
	public String contraTijera() {
		return "Es Decapitado";
	}

	@Override
	public String contraLagarto() {
		return "Empata";
	}

	@Override
	public String contraSpock() {
		return "Envenena";
	}
}
```

### Papel

```java
public class Papel extends Jugada{

	@Override
	public String juegaContra(Jugada j) {
		return j.contraPapel();
	}

	@Override
	public String contraPiedra() {
		return "Cubre";
	}

	@Override
	public String contraPapel() {
		return "Empata";
	}

	@Override
	public String contraTijera() {
		return "Es Cortado";
	}

	@Override
	public String contraLagarto() {
		return "Es Comido";
	}

	@Override
	public String contraSpock() {
		// TODO Auto-generated method stub
		return null;
	}
}
```

### Piedra

```java
public class Piedra extends Jugada{

	@Override
	public String juegaContra(Jugada j) {
		return j.contraPiedra();
	}

	@Override
	public String contraPiedra() {
		return "Empata";
	}

	@Override
	public String contraPapel() {
		return "Es cubierto";
	}

	@Override
	public String contraTijera() {
		return "Aplasta";
	}

	@Override
	public String contraLagarto() {
		return "Aplasta";
	}

	@Override
	public String contraSpock() {
		return "Es Vaporizado";
	}
}
```

### Spock

```java
public class Spock extends Jugada{
	@Override
	public String juegaContra(Jugada j) {
		return j.contraSpock();
	}

	@Override
	public String contraPiedra() {
		return "Vaporiza";
	}

	@Override
	public String contraPapel() {
		return "Desaprueba";
	}

	@Override
	public String contraTijera() {
		return "Rompe";
	}

	@Override
	public String contraLagarto() {
		return "Es Envenenado";
	}

	@Override
	public String contraSpock() {
		return "Empata";
	}
}
```

### Tijera

```java
public class Tijera extends Jugada{
	@Override
	public String juegaContra(Jugada j) {
		return j.contraTijera();
	}

	@Override
	public String contraPiedra() {
		return "Se Rompe";
	}

	@Override
	public String contraPapel() {
		return "Corta";
	}

	@Override
	public String contraTijera() {
		return "Empata";
	}

	@Override
	public String contraLagarto() {
		return "Envenena";
	}

	@Override
	public String contraSpock() {
		return "Es Rompido :c";
	}
}
```

### Test

```java
public class JugadaTest {
	
	Piedra piedra;
	Papel papel;
	Tijera tijera;
	Lagarto lagarto;
	Spock spock;
	
	@BeforeEach
	void setUp() throws Exception {
		piedra = new Piedra();
		papel = new Papel();
		tijera = new Tijera();
		lagarto = new Lagarto();
		spock = new Spock();
	}
	
    @Test
    public void testJugadas() {
        assertEquals("Se Rompe", piedra.juegaContra(tijera));
        assertEquals("Cubre", piedra.juegaContra(papel));
        assertEquals("Empata", piedra.juegaContra(piedra));
        assertEquals("Es Aplastado", piedra.juegaContra(lagarto));
        assertEquals("Vaporiza", piedra.juegaContra(spock));
    }
}
```


---

## Ejercicio 3 Friday the 13th en Java


Nota: Para realizar este ejercicio utilice el recurso que se encuentra en el sitio de la cátedra. Allí encontrará un proyecto Maven que contiene el código fuente de las clases Biblioteca, Socio y VoorheesExporter.

La clase Biblioteca implementa la funcionalidad de exportar el listado de sus socios en formato JSON. Para ello define el método `exportarSocios()` de la siguiente forma:

```java
/**
 * Retorna la representación JSON de la colección de socios.
 */
public String exportarSocios() {
    return exporter.exportar(socios);
}
```

La Biblioteca delega la responsabilidad de exportar en una instancia de la clase VoorheesExporter que, dada una colección de socios, retorna un texto con la representación de la misma en formato JSON. Esto lo hace mediante el mensaje de instancia `exportar(List<Socio>)`. 

De un socio se conoce el nombre, el email y el número de legajo. Por ejemplo, para una biblioteca que posee una colección con los siguientes socios:

```
Nombre: Arya Stark
e-mail: needle@stark.com
legajo: 5234-5

Nombre: Tyron Lannister
e-mail: tyron@thelannisters.com
legajo: 2345-2
```

Ud. puede probar la funcionalidad ejecutando el siguiente código:

```java
Biblioteca biblioteca = new Biblioteca();
biblioteca.agregarSocio(new Socio("Arya Stark", "needle@stark.com", "5234-5"));
biblioteca.agregarSocio(new Socio("Tyron Lannister", "tyron@thelannisters.com", "2345-2"));
System.out.println(biblioteca.exportarSocios());
```

Al ejecutar el mismo imprimirá el siguiente JSON:

```json
[
    {
   	 "nombre": "Arya Stark",
   	 "email": "needle@stark.com",
   	 "legajo": "5234-5"
    },
    {
   	 "nombre": "Tyron Lannister",
   	 "email": "tyron@thelannisters.com",
   	 "legajo": "2345-2"
    }
]
```

Note los corchetes de apertura y cierre de la colección, las llaves de apertura y cierre para cada socio y la coma separando a los socios.

Tareas:
- Analice la implementación de la clase Biblioteca, Socio y VoorheesExporter que se provee con el material adicional de esta práctica (Archivo biblioteca.zip).
- Documente la implementación mediante un diagrama de clases UML.
- Programe los Test de Unidad para la implementación propuesta.

---

## Ejercicio 3b

Ejercicio 3.b - Usando la librería JSON.simple  
Su nuevo desafío consiste en utilizar la librería JSON.simple para imprimir en formato JSON a los socios de la Biblioteca en lugar de utilizar la clase VoorheesExporter. Pero con la siguiente condición: nada de esto debe generar un cambio en el código de la clase Biblioteca.

La librería JSON.simple es liviana y muy utilizada para leer y escribir archivos JSON. Entre las clases que contiene se encuentran:
- JSONObject: Usada para representar los datos que se desean exportar de un objeto. Esta clase provee el método `put(Object, Object)` para agregar los campos al mismo. Aunque el primer argumento sea de tipo Object, usted debe proveer el nombre del atributo como un string. El segundo argumento contendrá el valor del mismo. Por ejemplo, si `point` es una instancia de JSONObject, se podrá ejecutar `point.put("x", 50);`
- JSONArray: Usada para generar listas. Provee el método `add(Object)` para agregar los elementos a la lista, los cuales para este caso deben ser JSONObject.
Ambas clases implementan el mensaje `toJSONString()`, el cual retorna un String con la representación JSON del objeto.
- JSONParser: Usada para recuperar desde un String con formato JSON los elementos que lo componen.

Tareas:

- Instale la librería JSON.simple agregando la siguiente dependencia al archivo `pom.xml` de Maven:

```xml
<dependency>
    <groupId>com.googlecode.json-simple</groupId>
    <artifactId>json-simple</artifactId>
    <version>1.1.1</version>
</dependency>
```

- Utilice esta librería para imprimir en formato JSON los socios de la Biblioteca en lugar de utilizar la clase VoorheesExporter sin que esto genere un cambio en el código de la clase Biblioteca.
    - Modele una solución a esta alternativa utilizando un diagrama de clases UML. Si utiliza patrones de diseño, indique los roles en las clases utilizando estereotipos.
    - Implemente en Java la solución incluyendo los tests que crea necesarios.

Investigue sobre la librería Jackson, la cual también permite utilizar el formato JSON para serializar objetos Java. Extienda la implementación para soportar también esta librería.

---

## Ejercicio 4

---

## Ejercicio 5

---

## Ejercicio 6

---

## Ejercicio 6b
