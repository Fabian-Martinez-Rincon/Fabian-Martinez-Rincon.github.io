---
layout: ../../layouts/MarkdownPostLayout.astro
title: Cuadernillo OO2
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Materias/oo2.webp'
    alt: "Orientación a OO2."
pubDate: 2024-03-12
tags: ["Objetos", "Uml", "Java", "Test Unit"]
---

# Indice

- [Ejercicio 1 Red Social](#ejercicio-1-red-social)
- [Ejercicio 2 Piedra Papel o Tijera](#ejercicio-2-piedra-papel-o-tijera)
- [Ejercicio 3 Friday The 13th en Java](#ejercicio-3-friday-the-13th-en-java)
- [Ejercicio 3b Usando la librería JsonSimple](#ejercicio-3b-usando-la-librería-jsonsimple)
- [Ejercicio 4 Cálculo de sueldos](#ejercicio-4-cálculo-de-sueldos)
- [Ejercicio 5 Media Player](#ejercicio-5-media-player)
- [Ejercicio 6 Topografías](#ejercicio-6-topografías)
- [Ejercicio 6b Mas Topografías](#ejercicio-6b-más-topografías)
- [Ejercicio 7 Filesystem](#ejercicio-7-filesystem)
- [Ejercicio 8 Todo Item](#ejercicio-8-todoitem)
- [Ejercicio 9 Excursiones](#ejercicio-9-excursiones)
- [Ejercicio 10 Encriptador](#ejercicio-10-encriptador)





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

![image](https://github.com/Fabian-Martinez-Rincon/Orientacion-a-Objetos-2/assets/55964635/efd0868e-2c4b-4407-abc9-ab9b403fe8f3)

### Resolución mia (Lo saque a las patadas)

#### Test

```java
public class TwitterTest {
	Twitter twitter;
	Usuario pepe;
	Usuario maria;
	
	Tweet tweetPepe;
	Tweet tweetMaria;
	
	ReTweet retweetPepe;
	ReTweet retweetMaria;
	
	@BeforeEach
	void setUp() throws Exception{
		twitter = new Twitter();
		
		pepe = new Usuario("Pepe");
		maria = new Usuario("Maria");
		
		tweetPepe = new Tweet("Esto no es un juego");
		tweetMaria = new Tweet("Pugliese publiese pugliese");
		
		pepe.agregarTweet(tweetPepe);
		maria.agregarTweet(tweetMaria);
		
		pepe.agregarReTweet(new ReTweet(tweetMaria));

		twitter.agregarUsuario(pepe);
		twitter.agregarUsuario(maria);
	}
	
	@Test
	public void testTweets() {
		assertEquals(1, pepe.cantidadTweets());
		assertEquals(1, pepe.cantidadReTweets());
		assertEquals(1, maria.cantidadTweets());
		
		twitter.eliminarUsuario(maria);
		
		assertEquals(1, pepe.cantidadTweets());
		assertEquals(0, pepe.cantidadReTweets());
		assertEquals(0, maria.cantidadTweets());		
	}
}
```
#### Twitter

```java
public class Twitter {
	
	private List<Usuario> usuarios = new ArrayList<>();
	
	public void agregarUsuario(Usuario u) {
		this.usuarios.add(u);
	}
	
	public void eliminarUsuario(Usuario u) {
		u.eliminarReTweets();
		this.eliminarReferenciasAlUsuario(u.devolverTweets());
		u.eliminarTweets();
	}
	
	public void eliminarReferenciasAlUsuario(List<Tweet> tweetsEliminar){
		for (Tweet tweet: tweetsEliminar) {
			for (Usuario usuario: usuarios) {
				if (usuario.tieneReTweetsDelTweet(tweet)){
					usuario.eliminarReTweetsReferenciados(tweet);
				}
			}
				
		}
	}
}
```

#### Usuario

```java
public class Usuario {
	
	private String screenName;
	private List<Tweet> tweets = new ArrayList<>();
	private List<ReTweet> re_tweets = new ArrayList<>();
	
	// Se supone que el screen name es unico
	public Usuario(String screenName) {
		this.screenName = screenName;
	}
	
	public void agregarTweet(Tweet T) {
		this.tweets.add(T);
	}
	
	public void agregarReTweet(ReTweet RT) {
		this.re_tweets.add(RT);
	}
	
	public List<Tweet> devolverTweets(){
		return this.tweets;
	}
	
	public int cantidadTweets() {
		return this.tweets.size();
	}
	
	public int cantidadReTweets() {
		return this.re_tweets.size();
	}
	
	public void eliminarReTweets(){
		this.re_tweets.clear();
	}
	
	public void eliminarTweets(){
		this.tweets.clear();
	}
	
	public boolean tieneReTweetsDelTweet(Tweet t) {
		return this.re_tweets.stream()
				.anyMatch(retweet -> retweet.esOrigen(t));
	}
	
	public void eliminarReTweetsReferenciados(Tweet t) {
		this.re_tweets.removeIf(rt -> rt.esOrigen(t));
	}
}
```

#### ReTweet

```java
public class ReTweet {
	private Tweet origen = null;;
	
	public ReTweet(Tweet origen) {
		this.origen = origen;		
	}
	
	public boolean esOrigen(Tweet destino) {
		return this.origen.equals(destino);
	}
}
```

#### Tweet

```java
public class Tweet {
	private String texto;
	
	public Tweet(String texto) {
		this.texto = texto;
	}
}
```

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

#### Jugada

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

#### Lagarto

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

#### Papel

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

#### Piedra

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

#### Spock

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

#### Tijera

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

#### Test

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

#### Biblioteca

```java
public class Biblioteca {
	private List<Socio> socios;
	private VoorheesExporter exporter;

	public Biblioteca() {
		socios = new ArrayList<>();
		exporter= new VoorheesExporter(); 
	}

	public void agregarSocio(Socio socio) {
		socios.add(socio);
	}

	/**
	 * Retorna la representación JSON de la colección de socios.
	 */
	public String exportarSocios() {
		return exporter.exportar(socios);
	}

	public VoorheesExporter getExporter() {
		return exporter;
	}

	public void setExporter(VoorheesExporter exporter) {
		this.exporter = exporter;
	}
}
```

#### Socio

```java
public class Socio {
	private String nombre;
	private String legajo;
	private String email;


	public Socio(String nombre, String email, String legajo) {
		this.nombre = nombre;
		this.email = email;
		this.legajo = legajo;
	}

	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLegajo() {
		return legajo;
	}
	public void setLegajo(String legajo) {
		this.legajo = legajo;
	}
}
```

#### VoorheesExporter

```java
public class VoorheesExporter {

	private String exportar(Socio socio) {
		String separator = System.lineSeparator();
		return "\t{" + separator
			+ "\t\t\"nombre\": \"" + socio.getNombre() + "\"," + separator
			+ "\t\t\"email\": \"" + socio.getEmail() + "\"," + separator
			+ "\t\t\"legajo\": \"" + socio.getLegajo() + "\"" + separator
			+ "\t}";
	}

	public String exportar(List<Socio> socios) {
		if (socios.isEmpty()) {
			return "[]";
		}
		String separator = System.lineSeparator();
		StringBuilder buffer = new StringBuilder("[" + separator);
		socios.forEach(socio -> {
			buffer.append(this.exportar(socio))
				.append(",")
				.append(separator);
		});
		// remueve la última coma y fin de línea
		buffer.setLength(buffer.length() - (separator.length() + 1));
		buffer.append(separator).append("]");
		return buffer.toString();
	}
}
```

#### Test

```java
public class BibliotecaTest {

	Biblioteca biblioteca;
	Socio socio1;
	Socio socio2;
	
	@BeforeEach
	void setUp() throws Exception{
		biblioteca = new Biblioteca();
		socio1 = new Socio("Messi","messi@gmail.com","10");
		socio2 = new Socio("Ronaldo","ronaldo@gmail.com","7");
		biblioteca.agregarSocio(socio1);
	}
	
	@Test
	public void testExportar() {
		String separator = System.lineSeparator();
		assertEquals("[" + separator +"\t{" + separator
				+ "\t\t\"nombre\": \"" + "Messi" + "\"," + separator
				+ "\t\t\"email\": \"" + "messi@gmail.com" + "\"," + separator
				+ "\t\t\"legajo\": \"" + "10" + "\"" + separator
				+ "\t}"+ separator + "]", biblioteca.exportarSocios());	
	}
}
```

---

## Ejercicio 3b Usando la librería JSON.simple

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


#### Adapter

```java
public class Adapter extends VoorheesExporter{
	
	@SuppressWarnings("unchecked")
	private JSONObject exportarSocioToJson(Socio socio) {
		JSONObject obj = new JSONObject();
		obj.put("nombre", socio.getNombre());
		obj.put("email", socio.getEmail());
		obj.put("legajo", socio.getLegajo());
		return obj;
	}
	
	@SuppressWarnings("unchecked")
	public String exportar(List<Socio> socios) {
		
		JSONArray jsonArray = new JSONArray();
		
		for (Socio socio : socios) {
	        jsonArray.add(exportarSocioToJson(socio));
	    }
	    return jsonArray.toJSONString();
	}
}
```

#### Test

```java
public class BibliotecaTest {

	Biblioteca biblioteca;
	Socio socio1;
	Socio socio2;
	Adapter adapter;
	JSONParser parser;
	
	@BeforeEach
	void setUp() throws Exception{
		biblioteca = new Biblioteca();
		socio1 = new Socio("Messi","messi@gmail.com","10");
		socio2 = new Socio("Ronaldo","ronaldo@gmail.com","7");
		adapter = new Adapter();
		
		biblioteca.agregarSocio(socio1);
		parser = new JSONParser();
	}
	
	@Test
	public void testExportarJson() throws ParseException {
		biblioteca.setExporter(adapter);
		String separator = System.lineSeparator();
		
		String socio = "[" + separator +"\t{" + separator
			+ "\t\t\"nombre\": \"" + "Messi" + "\"," + separator
			+ "\t\t\"email\": \"" + "messi@gmail.com" + "\"," + separator
			+ "\t\t\"legajo\": \"" + "10" + "\"" + separator
			+ "\t}"+ separator + "]";
		
		assertEquals("[{\"legajo\":\"10\",\"nombre\":\"Messi\",\"email\":\"messi@gmail.com\"}]", 
				biblioteca.exportarSocios());

		assertEquals(parser.parse(socio), parser.parse(biblioteca.exportarSocios()));
	}
	
	@Test
	public void testExportar() {
		String separator = System.lineSeparator();
		assertEquals("[" + separator +"\t{" + separator
				+ "\t\t\"nombre\": \"" + "Messi" + "\"," + separator
				+ "\t\t\"email\": \"" + "messi@gmail.com" + "\"," + separator
				+ "\t\t\"legajo\": \"" + "10" + "\"" + separator
				+ "\t}"+ separator + "]", biblioteca.exportarSocios());	
	}

}
```

---

## Ejercicio 4 Cálculo de sueldos

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

---

## Ejercicio 5 Media Player

Usted ha implementado una clase Media player, para reproducir archivos de audio y video en formatos que usted ha diseñado. Cada Media se puede reproducir con el mensaje play(). Para continuar con el desarrollo, usted desea incorporar la posibilidad de reproducir Video Stream. Para ello, dispone de la clase VideoStream que pertenece a una librería de terceros y usted no puede ni debe modificarla. El desafío que se le presenta es hacer que la clase MediaPlayer pueda interactuar con la clase VideoStream. 
La situación se resume en el siguiente diagrama UML:

![image](https://github.com/Fabian-Martinez-Rincon/Orientacion-a-Objetos-2/assets/55964635/6400603c-4313-40fd-ac50-25eae5c79657)

### Tareas:

- Modifique el diagrama de clases UML para considerar los cambios necesarios. Si utiliza patrones de diseño indique los roles en las clases utilizando estereotipos.
- Implemente en Java

#### adapterVideoStream

```java
public class adapterVideoStream extends VideoFile{
	private VideoStream vs = new VideoStream();
	
	public String play() {
		return vs.reproduce();
	}
}
```

#### Audio

```java
public class Audio extends Media{
	
	public String play() {
		String nombre = "audio";
		return nombre;
	}
}
```

#### Media

```java
public class Media {
	public String play() {
		String nombre = "media";
		return nombre;
	}
}
```

#### MediaPlayer

```java
public class MediaPlayer {
	private List<Media> media = new ArrayList<Media>(); 
	
	public void play() {
		System.out.println("Play");
	}
	
	public void agregarMedia(Media m) {
		this.media.add(m);
	}
	
	public String concatenarNombresMedia() {
        String nombresConcatenados = "";
        for (int i = 0; i < media.size(); i++) {
            nombresConcatenados += media.get(i).play(); 
            if (i < media.size() - 1) {
                nombresConcatenados += ", "; 
            }
        }
        return nombresConcatenados;
    }
}
```

#### VideoFile

```java
public class VideoFile extends Media{
	public String play() {
		String nombre = "video file";
		return nombre;
	}
}
```

#### VideoStream

```java
public class VideoStream extends VideoFile{
	public String reproduce() {
		String nombre = "video stream";
		return nombre;
	}
}
```

#### Test

```java
public class MediaPlayerTest {
	
	MediaPlayer mp;
	Audio a;
	VideoFile vf;
	VideoStream vs;
	AdapterVideoStream adapter;
	
	@BeforeEach
	void setUp() throws Exception {
		mp = new MediaPlayer();
		a = new Audio();
		vf = new VideoFile();
		adapter = new AdapterVideoStream();
		
		mp.agregarMedia(a);
		mp.agregarMedia(vf);
		mp.agregarMedia(adapter);
	}
	
    @Test
    public void testNombreCompleto() {
    	assertEquals("audio, video file, video stream", mp.concatenarNombresMedia());
    }
}
```

---

## Ejercicio 6 Topografías

Un uso común de imágenes satelitales es el estudio de las cuencas hídricas que incluye saber la proporción entre la parte seca y la parte bajo agua. En general las imágenes satelitales están divididas en celdas. Las celdas son imágenes digitales (con píxeles) de las cuales se quiere extraer su “topología”. 

Un objeto Topografía representa la distribución de agua y tierra de una celda satelital, la cual está formada por porciones de “agua” y de “tierra”. La siguiente figura muestra:


![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8b496b34-29e1-47b8-b4db-c4f60b764799)

Una topografía mixta está formada por partes de agua y partes de tierra (4 partes en total). Estas a su vez, podrían descomponerse en 4 más y así siguiendo.
					
La proporción de agua de una topografía sólo agua es 1. La proporción de agua de una topografía sólo tierra es 0. La proporción de agua de una topografía compuesta está dada por la suma de la proporción de agua de sus componentes dividida por 4. En el ejemplo, la proporción de agua es: (1 +0+0 + 1) / 4 = 1/2. La proporción siempre es un valor entre 0 y 1. 

### Tareas:
Diseñe e implemente las clases necesarias para que sea posible:
- crear Topografías,
- calcular su proporción de agua y tierra,
- comparar igualdad entre topografías. Dos topografías son iguales si tienen exactamente la misma composición. Es decir, son iguales las proporciones de agua y tierra, y además, para aquellas que son mixtas, la disposición de sus partes es igual. 

> Pista: notar que la definición de igualdad para topografías mixtas corresponde exactamente a la misma que implementan las listas en Java. https://docs.oracle.com/javase/8/docs/api/java/util/AbstractList.html#equals-java.lang.Object-

Diseñe e implemente test cases para probar la funcionalidad implementada. Incluya en el set up de los tests, la topografía compuesta del ejemplo. 

---

## Ejercicio 6b Más Topografías

Extienda el ejercicio anterior para soportar (además de Agua y Tierra) el terreno Pantano. Un pantano tiene una proporción de agua de 0.7 y una proporción de tierra de 0.3. No olvide hacer las modificaciones necesarias para responder adecuadamente la comparación por igualdad.

---

## Ejercicio 7 FileSystem

Un File System es un componente que forma parte del sistema operativo. Este está estructurado jerárquicamente en forma de árbol, comenzando con un directorio raíz.

Los elementos del file system pueden ser directorios o archivos. Los archivos contienen datos y los directorios contienen archivos u otros directorios. De cada archivo se conoce el nombre, fecha de creación y tamaño en bytes. De cada directorio se conoce el nombre, fecha de creación y contenido (el tamaño es siempre la cantidad inicial de 32kb más la suma del tamaño de su contenido). Modele el file system y provea la siguiente funcionalidad:

```java
public class FileSystem {
	/**
	* Retorna el espacio total ocupado, incluyendo todo su contenido.
	*/
    public int tamanoTotalOcupado()

	/**
	* Retorna el archivo con mayor cantidad de bytes en cualquier nivel del 
	* filesystem 
	*/
	
	public Archivo archivoMasGrande()
	/**
	* Retorna el archivo con fecha de creación más reciente en cualquier nivel 
	* del filesystem
	*/

	public Archivo archivoMasNuevo()

	/**
	* Retorna el primer elemento con el nombre solicitado contenido en cualquier
	* nivel del filesystem
	*/
    public ?? buscar(String nombre)

	/**
	* Retorna la lista con los elementos que coinciden con el nombre solicitado 
	* contenido en cualquier nivel del filesystem
	*/
    
	public List<??> buscarTodos(String nombre)

	/**
	* Retorna un String con los nombres de los elementos contenidos en todos los 
	* niveles del filesystem. De cada elemento debe retornar el path completo
	* (similar al comando pwd de linux) siguiendo el modelo presentado a
	* continuación
	/Directorio A
	/Directorio A/Directorio A.1
	/Directorio A/Directorio A.1/Directorio A.1.1
	/Directorio A/Directorio A.1/Directorio A.1.2 	
	/Directorio A/Directorio A.2
	/Directorio B
	*/
    
	public String listadoDeContenido()

}
```

### Tareas:
- `1)`Diseñe y represente un modelo UML de clases de su aplicación, identifique el patrón de diseño empleado (utilice estereotipos UML para indicar los roles de cada una de las clases en ese patrón). 
- `2)`Diseñe, implemente y ejecute test cases para verificar el funcionamiento de su aplicación.  
- `3)`Implemente completamente en Java.

---

## Ejercicio 8 ToDoItem

Se desea definir un sistema de seguimiento de tareas similar a Jira. 

En este sistema hay tareas en las cuales se puede definir el nombre y una serie de comentarios. Las tareas atraviesan diferentes etapas a lo largo de su ciclo de vida y ellas son: pending, in-progress, paused y finished. Cada tarea debe estar modelada mediante la clase ToDoItem con el siguiente protocolo:

```java
public class ToDoItem {
	/**
	* Instancia un ToDoItem nuevo en estado pending con <name> como nombre.
	*/
	public ToDoItem(String name)

	/**
	* Pasa el ToDoItem a in-progress, siempre y cuando su estado actual sea
	* pending. Si se encuentra en otro estado, no hace nada.
	*/
	public void start()

	/**
	* Pasa el ToDoItem a paused si su estado es in-progress, o a in-progress si su
	* estado es paused. Caso contrario (pending o finished) genera un error
	* informando la causa específica del mismo.
	*/
	public void togglePause()


	/**
	* Pasa el ToDoItem a finished, siempre y cuando su estado actual sea 
	* in-progress o paused. Si se encuentra en otro estado, no hace nada.
	*/
	public void finish()


	/**
	* Retorna el tiempo que transcurrió desde que se inició el ToDoItem (start)
	* hasta que se finalizó. En caso de que no esté finalizado, el tiempo que
	* haya transcurrido hasta el momento actual. Si el ToDoItem no se inició,
	* genera un error informando la causa específica del mismo.
	*/
	public Duration workedTime()


	/**
	* Agrega un comentario al ToDoItem siempre y cuando no haya finalizado. Caso
	* contrario no hace nada."
	*/
	public void addComment(String comment)
}
```

> Nota: para generar o levantar un error debe utilizar la expresión 

```java
throw new RuntimeException("Este es mi mensaje de error");
```

El mensaje de error específico que se espera en este ejercicio debe ser descriptivo del caso. Por ejemplo, para el método togglePause() , el mensaje de error debe indicar que el ToDoItem no se encuentra en in-progress o paused: 

```java
throw new RuntimeException("El objeto ToDoItem no se encuentra en pause o in-progress");
```

### Tareas:
- `1)` Modele una solución orientada a objetos para el problema planteado utilizando un diagrama de clases UML. Si utilizó algún patrón de diseño indique cuáles son los participantes en su modelo de acuerdo a Gamma et al.
- `2)` Implemente su solución en Java. Para comprobar cómo funciona recomendamos usar test cases.


---

## Ejercicio 9 Excursiones

Sea una aplicación que ofrece excursiones como por ejemplo “dos días en kayak bajando el Paraná”. Una excursión posee nombre, fecha de inicio, fecha de fin, punto de encuentro, costo, cupo mínimo y cupo máximo.

La aplicación ofrece las excursiones pero éstas sólo se realizan si alcanzan el cupo mínimo de inscriptos. Un usuario se inscribe a una excursión y si aún no se alcanzó el cupo mínimo, la inscripción se considera provisoria. Luego, cuando se alcanza el cupo mínimo, la inscripción se considera definitiva y podrá llevarse a cabo. Finalmente, cuando se alcanza el cupo máximo, la excursión solo registrará nuevos inscriptos en su lista de espera.

De los usuarios inscriptos, la aplicación registra su nombre, apellido e email.

Por otro lado, en todo momento la excursión ofrece información de la misma, la cual consiste en una serie de datos que varían en función de la situación.

- Si la excursión no alcanza el cupo mínimo, la información es la siguiente: nombre, costo, fechas, punto de encuentro, cantidad de usuarios faltantes para alcanzar el cupo mínimo.
- Si la excursión alcanzó el cupo mínimo pero aún no el máximo, la información es la siguiente: nombre, costo, fechas, punto de encuentro, los mails de los usuarios inscriptos y cantidad de usuarios faltantes para alcanzar el cupo máximo.
- Si la excursión alcanzó el cupo máximo, la información solamente incluye nombre, costo, fechas y punto de encuentro.

En una primera versión, al no contar con una interfaz de usuario y a los efectos de debugging, este comportamiento puede implementarlo en un método que retorne un String con la información solicitada.

### Tareas:
- `1)` Realice un diseño UML. Si utiliza algún patrón indique cuál(es) y justifique su uso.
- `2)` Implemente lo necesario para instanciar una excursión y para instanciar un usuario.
- `3)` Implemente los siguientes mensajes de la clase Excursion: 
	- (i) public void inscribir (Usuario unUsuario) 
	- (ii) public String obtenerInformacion().
- `4)` Escriba un test para inscribir a un usuario en la excursión “Dos días en kayak bajando el Paraná”, con cupo mínimo de 1 persona y cupo máximo 2, con dos personas ya inscriptas. Implemente todos los mensajes que considere necesarios.


---

## Ejercicio 10: Encriptador

En un sistema de mensajes instantáneos (como WhatsApp) se envían mensajes de una máquina a otra a través de una red. Para asegurar que la información que pasa por la red no es espiada, el sistema utiliza una conexión segura. Este tipo de conexión encripta la información antes de enviarla y la desencripta al recibirla. La siguiente figura ilustra un posible diseño para este enunciado.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3a184b23-158e-4b71-ab30-599084babc0d)

### Tareas:
- Modifique el diseño para que el objeto Encriptador pueda encriptar mensajes usando los algoritmos Blowfish y RC4, además del ya soportado RSA.
- Documente mediante un diagrama de clases UML indicando los roles de cada clase.
