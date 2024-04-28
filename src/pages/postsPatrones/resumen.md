---
layout: ../../layouts/MarkdownPostLayout.astro
title: '📚 Resumen'
pubDate: 2024-04-25
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Objetos/resumen.webp'
    alt: ''
tags: ["POO"]
---

- [Adapter](#adapter)
- [Template Method](#template-method)
- [Composite](#composite)
- [State](#state)
- [Strategy](#strategy)
- [Proxy](#proxy)
- [Decorator](#decorator)

---

## Adapter

El patrón Adapter es un patrón de diseño estructural que permite a objetos con interfaces incompatibles trabajar juntos. Esencialmente, el patrón Adapter actúa como un intermediario que traduce las llamadas de una interfaz a otra, adaptando la interfaz de un objeto existente a otra interfaz que el cliente espera utilizar. Esto es particularmente útil cuando no es posible modificar las clases directamente, pero se necesita que trabajen juntas.

<details><summary>Estructura</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Rincon-De-Fabo/assets/55964635/7e5f0109-93bb-48da-a8c2-232d8f279c56)

</details>

<details><summary>Componentes</summary>

1. **Client (Cliente)**: Es la clase que interactúa con la interfaz `Target`. Esta clase necesita una operación específica y espera poder llamarla a través de una interfaz conocida (`Request()`).

2. **Target (Objetivo)**: Es la interfaz que define el dominio de métodos que el `Client` utiliza. En este caso, tiene un método `Request()` que el cliente llama para realizar alguna acción.

3. **Adapter (Adaptador)**: Es la clase que implementa la interfaz `Target` y traduce las llamadas del cliente a una interfaz comprensible para el `Adaptee`. En este caso, el método `Request()` es implementado por el `Adapter` de manera que pueda invocar el método `SpecificRequest()` del `Adaptee`.

4. **Adaptee (Adaptado)**: Es la clase que tiene una interfaz diferente (`SpecificRequest()`) que necesita ser adaptada. Esta clase realiza una función necesaria, pero su interfaz no es compatible con la que el cliente espera.

5. **Relaciones**:
    - **Client -> Target**: El cliente realiza llamadas al `Target`.
    - **Adapter -> Adaptee**: El adaptador conoce al adaptado y puede invocar sus métodos.
    - **Target <- Adapter**: El adaptador implementa la interfaz objetivo y traduce las llamadas de `Request()` a `SpecificRequest()`.
</details>

<details><summary>Como Funciona</summary>

Cuando el `Client` quiere hacer una llamada a `Request()`, realmente quiere que se ejecute la funcionalidad de `SpecificRequest()` que está en el `Adaptee`. Sin embargo, el cliente no puede hacer esto directamente porque las dos interfaces son incompatibles. Aquí es donde entra el `Adapter`:

1. El `Client` llama a `Request()` en el `Adapter`.
2. El `Adapter` recibe esta llamada y la "adapta" o traduce a una o más llamadas a `SpecificRequest()` del `Adaptee`.
3. El `Adaptee` no sabe que el `Adapter` está involucrado; simplemente ve que se llama a su método `SpecificRequest()` y responde como de costumbre.
4. El `Adapter` puede hacer cualquier trabajo adicional necesario para transformar los datos o el formato de llamada entre `Request()` y `SpecificRequest()`, si es necesario.
</details>


<details><summary>Ejemplo Practico</summary>

### Ejemplo Practico: Sistema de Audios

Usted ha implementado una clase `Media player`, para `reproducir` archivos de `audio` y `video` en formatos que usted ha diseñado. Cada `Media` se puede `reproducir` con el mensaje `play()`. Para continuar con el desarrollo, usted desea incorporar la posibilidad de reproducir `Video Stream`. Para ello, dispone de la clase `VideoStream` que pertenece a una librería de terceros y usted no puede ni debe modificarla. El desafío que se le presenta es hacer que la clase `MediaPlayer` pueda interactuar con la clase `VideoStream`. 
La situación se resume en el siguiente diagrama UML:

</details>

<details><summary>Diagrama</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/29e8bb02-4b80-4879-8835-97efffde2249)
</details>



<details><summary>UML</summary>

![image](/posts/Objetos/adapterExample.PNG)
</details>

<details><summary>Audio</summary>

```java
public class Audio extends Media {
	public String play() {
		return "Jaloner - Recopilación mejores rapeos 3.mp3";
	}
}
```
</details>

<details><summary>Media</summary>

```java
public abstract class Media {
	public abstract String play();
}
```
</details>

<details><summary>MediaPlayer</summary>

```java
public class MediaPlayer {
	private Media media;
	
	public MediaPlayer(Media media) {
		this.media = media;
	}
	
	public String playMedia() {
		return media.play();
	}
}
```
</details>

<details><summary>VideoFile</summary>

```java
public class VideoFile extends Media {
	public String play() {
		return "Acru - Román (Videoclip Oficial).mp4";
	}
}
```
</details>

<details><summary>VideoStream</summary>

```java
public class VideoStream {
	public String reproduce() {
		return "me roban en directo y pasa esto.stream";
	}
}
```
</details>

<details><summary>VideoStreamAdapter</summary>

```java
public class VideoStreamAdapter extends Media {
	private VideoStream adaptee;

	public String play() {
		return adaptee.reproduce();
	}
}
```
</details>

---

## Template Method


El patrón Template Method es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en una operación, postergando algunos pasos a las subclases. Permite a las subclases redefinir ciertas etapas de un algoritmo sin cambiar su estructura.

<details><summary>Estructura</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a3e8c7d5-6e4a-4cac-8ae8-c165ea63a381)

</details>

<details><summary>Componentes</summary>

1. **AbstractClass**: Esta es una clase abstracta que define tres elementos:
   - **TemplateMethod()**: Es el método de plantilla que define el esqueleto de un algoritmo. En el contexto de este método, se llamará a las operaciones primitivas en un orden específico. Este método es crucial porque impone la estructura del algoritmo y será invocado por el cliente.
   - **PrimitiveOperation1() y PrimitiveOperation2()**: Son las operaciones primitivas que deben ser implementadas por las subclases concretas. Son "pasos" abstractos dentro del algoritmo definido por `TemplateMethod()`.

2. **ConcreteClass**: Esta es la clase concreta que hereda de `AbstractClass` y proporciona implementaciones específicas para las operaciones primitivas:
   - **PrimitiveOperation1() y PrimitiveOperation2()**: En `ConcreteClass`, estos métodos son sobrescritos para realizar tareas específicas que varían entre diferentes subclases.

3. **Relación de herencia**: La flecha de herencia indica que `ConcreteClass` es una subclase de `AbstractClass` y, por lo tanto, hereda o debe proporcionar implementaciones concretas de los métodos abstractos definidos en la clase abstracta.

</details>

<details><summary>Como Funciona</summary>

- El cliente llama al `TemplateMethod()` en la instancia de `ConcreteClass`.
- El `TemplateMethod()` ejecuta y coordina cuándo se deben realizar las operaciones primitivas.
- Las operaciones primitivas `PrimitiveOperation1()` y `PrimitiveOperation2()` son llamadas desde el `TemplateMethod()` en el orden definido por la lógica del algoritmo. Estas operaciones se ejecutan según las implementaciones específicas proporcionadas en `ConcreteClass`.
</details>

<details><summary>Ejemplo Practico</summary>

### Ejemplo Practico: Calculo de sueldos

Sea una empresa que paga sueldos a sus empleados, los cuales están organizados en tres tipos: Temporarios, Pasantes y Planta. El sueldo se compone de 3 elementos: sueldo básico, adicionales y descuentos. 

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0d6fe056-3568-4d28-b23d-e50cfbf00617)

</details>

<details><summary>UML</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8c94e215-6081-4ccd-bd29-d08b7d22935b)
</details>

<details><summary>Empleado</summary>

```java
public abstract class Empleado {
	private int cantidadHijos;
	private boolean estaCasado;
	
	public Empleado(int cantidadHijos, boolean estaCasado) {
		this.cantidadHijos = cantidadHijos;
		this.estaCasado = estaCasado;
	}
	
	public double calcularSueldo() {
		return this.getBasico() + this.getAdicional() - this.getDescuento();
	}
	
	public abstract double getBasico();
	public abstract double getAdicional();

    public double getDescuento(){ 
        return (this.getBasico() * 0.13) + (this.getAdicional() * 0.5); 
    }
}
```
</details>

<details><summary>Pasante</summary>

```java
public class Pasante extends Empleado {
	private int examenesRendidos;

	public Pasante(int examenesRendidos) {
		this.examenesRendidos = examenesRendidos;
	}

	public double getBasico() {
		return 20000;
	}

	public double getAdicional() {
		return this.examenesRendidos * 2000;
	}
}
```
</details>

<details><summary>Planta</summary>

```java
public class Planta extends Empleado{
	private int antiguedad;

	public Planta(int cantidadHijos, boolean casado, int antiguedad) {
		super(cantidadHijos, casado);
		this.antiguedad = antiguedad;
	}

	public double getBasico() {
		return 50000;
	}

	public double getAdicional() {
        double sueldo = 0;
        if (this.isCasado()){
            sueldo = 5000;
        }
        return sueldo + (this.getCantidadHijos() * 2000) + (this.antiguedad * 2000);
	}
}
```
</details>

<details><summary>Temporario</summary>

```java
public class Temporario extends Empleado{
	private int cantidadHoras;

	public Temporario(int cantidadHijos, boolean estaCasado, int cantidadHoras) {
		super(cantidadHijos, estaCasado);
		this.cantidadHoras = cantidadHoras;
	}

	public double getBasico() {
		return 20000 + this.cantidadHoras * 300 ;
	}

	public double getAdicional() {
        double sueldo = 0;
        if (this.isCasado()){
            sueldo = 5000;
        }
        return sueldo + (this.getCantidadHijos() * 2000);
	}
}
```
</details>

---

## Composite

El patrón Composite es un patrón de diseño estructural que permite componer objetos en estructuras de árbol para representar jerarquías parte-todo. Facilita a los clientes tratar de manera uniforme los objetos individuales (hojas) y las composiciones de objetos (contenedores).

<details><summary>Estructura</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7dfe597b-2c58-45c7-9493-3bc218f9181d)

</details>

<details><summary>Componentes</summary>

1. **Component**: Es una interfaz o clase abstracta que declara la interfaz común para objetos en la composición. Incluye métodos para manipular y acceder a los hijos, así como para realizar operaciones (`Operation()`). Esta interfaz es esencial para tratar los objetos `Leaf` y `Composite` de la misma manera.

2. **Leaf**: Representa objetos finales en la composición que no tienen hijos. Realiza las operaciones definidas por `Component`. La clase `Leaf` implementa los comportamientos para los objetos primitivos de la composición.

3. **Composite**: Es una clase que almacena componentes hijos (`Leaf` u otros `Composite`). Implementa los métodos de `Component` relacionados con los hijos y, al realizar una operación (`Operation()`), típicamente recorre sus elementos hijos y les invoca dicha operación, acumulando o realizando una acción colectiva.

4. **Client**: Es una clase que manipula objetos a través de la interfaz de `Component`. Gracias a esta interfaz común, el `Client` puede trabajar de manera uniforme con hojas individuales o con grupos de objetos (compuestos).

</details>

<details><summary>Como Funciona</summary>

- El `Client` hace una llamada a `Operation()` en un `Component` (puede ser tanto un `Leaf` como un `Composite`).
- Si el `Component` es un `Leaf`, simplemente realiza la operación.
- Si el `Component` es un `Composite`, puede realizar alguna operación propia y luego propagar la llamada a `Operation()` a sus hijos, iterando sobre ellos a través de una operación como `for (Component g : children) { g.Operation(); }`.

</details>

<details><summary>Ejemplo Practico</summary>

### Ejemplo Practico: FileSystem

Un `File System` es un componente que forma parte del sistema operativo. Este está estructurado jerárquicamente en forma de árbol, comenzando con un directorio raíz.
Los elementos del file system pueden ser `directorios` o `archivos`. Los archivos contienen datos y los directorios contienen archivos u otros directorios. De cada `archivo` se conoce el `nombre`, `fecha de creación` y `tamaño en bytes`. De cada `directorio` se conoce el `nombre`, `fecha de creación` y `contenido` (el tamaño es siempre la cantidad inicial de 32kb más la suma del tamaño de su contenido).

</details>

<details><summary>UML</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ccd24973-2d85-4d0a-91f6-0599d2e1ac95)

</details>

<details><summary>FileSystem</summary>

```java
public abstract class FileSystem{
	private String nombre;
	private LocalDate fecha;
	
	public FileSystem(String nombre, LocalDate fecha) {
		this.nombre = nombre;
		this.fecha = fecha;
	}
	
	public String getNombre() {return this.nombre;}
	public LocalDate getFecha() {return this.fecha;}
	
	public abstract int tamanoTotalOcupado();
    public abstract Archivo archivoMasGrande();
    public abstract Archivo archivoMasNuevo();
}
```
</details>

<details><summary>File</summary>

```java
public class File extends FileSystem{
	private int tamanio;
	
	public File(String nombre, LocalDate fecha, int tamanio) {
		super(nombre, fecha);
		this.tamanio = tamanio;
	}
	
	public File archivoMasGrande() {return this;}

	public File archivoMasNuevo() { return this;}

	public int tamanoTotalOcupado() { return this.tamano;}
}
```
</details>

<details><summary>Directory</summary>

```java
public class Directorio extends FileSystem {
	private List<FileSystem> files;

	public Directorio(String nombre, LocalDate fecha) {
		super(nombre, fecha);
		this.files = new ArrayList<>();
	}
	
	public void agregar(FileSystem archivo) {this.files.add(archivo);}
	
	public File tamanoTotalOcupado() {
		return (this.files.stream()
				.mapToInt(file -> file.tamanoTotalOcupado())
				.sum()
		) + 32;
	}
	
    public File archivoMasGrande() {
    	return this.files.stream()
				.map(file -> file.archivoMasGrande())
				.max((a1,a2) -> Integer.compare(
					a1.tamanoTotalOcupado(),
					a2.tamanoTotalOcupado()
				)).orElse(null);	
    }
    
    public File archivoMasNuevo() {
		return this.files.stream()
				.map(file -> file.archivoMasNuevo())
				.max((a1,a2) -> a1.getFecha()
				.compareTo(a2.getFecha()))
				.orElse(null);
    }
}
```
</details>

---

## State

El patrón de diseño State permite a un objeto alterar su comportamiento cuando su estado interno cambia, pareciendo que su clase ha cambiado. Es muy útil para casos en los que el comportamiento de un objeto depende fuertemente de su estado interno, y queremos evitar sentencias condicionales complejas que seleccionen el comportamiento basado en el estado del objeto.

<details><summary>Estructura</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f6296652-d325-4932-976b-851239c0ff87)
</details>

<details><summary>Componentes</summary>

1. **Context (Contexto)**: 
   - Es la clase que tiene un estado interno que puede variar a lo largo de su vida. En el diagrama, `Context` tiene un método `Request()`, que es probablemente la forma en que el cliente interactúa con el estado. Internamente, este método delegará la petición al estado actual.

2. **State (Estado)**:
   - Es una interfaz o clase abstracta que define un método `Handle()`. Este método es utilizado por el `Context` para delegar operaciones basadas en su estado interno.

3. **ConcreteStateA / ConcreteStateB**:
   - Son clases concretas que implementan la interfaz `State`. Cada una representa un estado específico del `Context`. Al cambiar el objeto `State` en el `Context` a diferentes subclases de `State`, cambias el comportamiento del `Context` cuando se llama a `Request()`.

4. **Transiciones**:
   - El estado del `Context` se cambia mediante la asignación de una nueva instancia de `ConcreteState` al atributo `state` del `Context`. Cuando se invoca `Request()`, la llamada se delega a `state->Handle()`, lo que resulta en comportamientos diferentes dependiendo del objeto `ConcreteState` actual asignado en `state`.
</details>

<details><summary>Como Funciona</summary>

- El `Client` hace una llamada a `Request()` en un objeto `Context`.
- El objeto `Context` delega la llamada a `Handle()` en su atributo `state`, que es del tipo `State`.
- Dependiendo de la implementación concreta de `State` (ya sea `ConcreteStateA` o `ConcreteStateB`), el comportamiento de la llamada a `Request()` puede variar significativamente.
- Cuando es necesario cambiar el comportamiento del `Context`, su atributo `state` se asigna a una instancia diferente de una clase que implementa la interfaz `State`.
</details>

<details><summary>Ejemplo Practico</summary>

### Ejemplo Practico: ToDoItem

Se desea definir un sistema de seguimiento de tareas similar a Jira. 
En este sistema hay tareas en las cuales se puede definir el nombre y una serie de comentarios. Las tareas atraviesan diferentes etapas a lo largo de su ciclo de vida y ellas son: pending, in-progress, paused y finished. Cada tarea debe estar modelada mediante la clase ToDoItem con el siguiente protocolo: 

</details>

<details><summary>UML</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9c6ce682-1229-43fd-88e4-efb642ac5b23)

</details>

<details><summary>ToDoItem</summary>

```java
public class ToDoItem {
	private String name;
	private State state;
	private List<String> comentarios;
	private LocalDateTime fechaInicio;
	private LocalDateTime fechaFin;

	public ToDoItem(String name) {
		this.name = name;
		this.comentarios = new ArrayList<>();
		this.setState(new Pending(this));
	}
	
	public void start() { this.state.start();}

	public void togglePause() {this.state.togglePause();}

	public void finish() {this.state.finish();}

	 public Duration workedTime() { return this.state.workedTime();}

	public void addComment(String comment) {this.state.addComment(comment);}
}
```
</details>

<details><summary>State</summary>

```java
public abstract class State {
	private ToDoItem task;
	
	public State (ToDoItem task) {
		this.task = task;
	}

	public abstract void start();
	public abstract void togglePause();
	public abstract void finish();

	public Duration workedTime() {
		return Duration.between(this.task.getStart(),this.task.getEnd());
	}
	
	public void addComment(String comment) {
		this.task.getCommentaries().add(comment);
	}
}
```
</details>



<details><summary>Pending</summary>

```java
public class Pending extends State{
	public Pending(ToDoItem task) {
		super(task);
	}

	public void start() {
		this.getTask().setState(new InProgress(this.getTask()));
		this.getTask().setStart(LocalDateTime.now());
	}

	public void togglePause() {
		throw new RuntimeException("ERROR: you can't pause (or unpause) in pending state");
	}

	public void finish() {}

	public Duration workedTime() {
		throw new RuntimeException("ERROR: the task never started");
	}
}
```
</details>

<details><summary>Paused</summary>

```java
public class Paused extends State{
	public Paused(ToDoItem task) {
		super(task);
	}

	public void start() {}

	public void togglePause() {
		this.getTask().setState(new InProgress(this.getTask()));
		
	}

	public void finish() {
		this.getTask().setState(new Finished(this.getTask()));
		this.getTask().setEnd(LocalDateTime.now());
	}
}
```
</details>

<details><summary>InProgress</summary>

```java
public class InProgress extends State{
	public InProgress(ToDoItem task) {
		super(task);
	}

	public void start() {}

	public void togglePause() {
		this.getTask().setState(new Paused(this.getTask()));
	}

	public void finish() {
		this.getTask().setState(new Finished(this.getTask()));
		this.getTask().setEnd(LocalDateTime.now());
	}
}
```
</details>

<details><summary>Finished</summary>

```java
public class Finished extends State{
	public Finished(ToDoItem task) {
		super(task);
	}

	public void start() {}

	public void togglePause() {
		throw new RuntimeException("ERROR: you can't pause (or unpause) in finished state");
	}

	public void finish() {}
	public void addComment(String comment) {}
}
```
</details>

---

## Strategy

El patrón Strategy es un patrón de diseño de comportamiento que define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables. Este patrón permite que la estrategia varíe independientemente de los clientes que la usan y es ideal cuando se tienen múltiples clases que difieren solo en su comportamiento. Las estrategias permiten configurar una clase con uno de muchos comportamientos.

<details><summary>Estructura</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/467fbd17-a864-4177-80b8-73ba31d52951)

</details>

<details><summary>Componentes</summary>

1. **Context (Contexto)**: 
   - Es la clase que contiene una referencia a una estrategia `Strategy`. Tiene un método `ContextInterface()`, que se supone es la forma en que el cliente interactúa con la estrategia. Este método es probablemente lo que inicia el algoritmo dentro de la `Strategy`.

2. **Strategy (Estrategia)**: 
   - Es una interfaz o clase abstracta que define una operación común para todas las estrategias concretas, en este caso, `AlgorithmInterface()`. Es la interfaz común que todas las estrategias implementarán.

3. **ConcreteStrategyA, ConcreteStrategyB, ConcreteStrategyC**:
   - Son las implementaciones concretas de la interfaz `Strategy`. Cada una de estas clases implementa el método `AlgorithmInterface()` para realizar un comportamiento específico o un algoritmo.

</details>

<details><summary>Como Funciona</summary>

- El `Context` mantiene una referencia a la `Strategy` y delega el trabajo a esta interfaz `Strategy` cuando necesita ejecutar el algoritmo.
- Dependiendo de la `ConcreteStrategy` que actualmente esté referenciada en el `Context`, la llamada a `ContextInterface()` dará lugar a diferentes comportamientos.
- El `Context` puede cambiar la `Strategy` en cualquier momento, lo que le permite cambiar dinámicamente el comportamiento del algoritmo que está utilizando.

</details>

<details><summary>Ejemplo Practico</summary>

### Ejemplo Practico: Codificador

Sea una empresa de cable on demand que entrega decodificadores a sus clientes para que miren las películas que ofrece. El `decodificador` muestra la grilla de películas y también sugiere películas. 

Usted debe implementar la aplicación para que el decodificador sugiera películas. El `decodificador` conoce la `grilla de películas` (lista completa que ofrece la empresa), como así también las `películas que reproduce`. De cada `película` se conoce `título`, `año de estreno`, `películas similares` y `puntaje`. La similaridad establece una relación recíproca entre dos películas, por lo que si A es similar a B entonces también B es similar a A. 

Cada decodificador puede ser configurado para que sugiera 3 películas (que no haya reproducido) por alguno de los siguientes criterios:
- (i) `novedad`: las películas más recientes. 
- (ii) `similaridad`: las películas similares a alguna película que reprodujo, ordenadas de más a menos reciente.
- (iii) `puntaje`: las películas de mayor puntaje, para igual puntaje considera las más recientes.

Tenga en cuenta que la configuración del criterio de sugerencia del decodificador no es fija, sino que el usuario la debe poder cambiar en cualquier momento. El sistema debe soportar agregar nuevos tipos de sugerencias aparte de las tres mencionadas.

Sea un decodificador que reprodujo Thor y Rocky, y posee la siguiente lista de películas:
- Thor, 7.9, 2007 (Similar a Capitan America, Iron Man)
- Capitan America, 7.8, 2016 (Similar a Thor, Iron Man)
- Iron man, 7.9, 2010 (Similar a Thor, Capitan America)
- Dunkirk, 7.9, 2017
- Rocky, 8.1, 1976 (Similar a Rambo)
- Rambo, 7.8, 1979 (Similar a Rocky)

Las películas que debería sugerir son:
- (i) Dunkirk, Capitan America,  Iron man
- (ii) Capitán América,  Iron man, Rambo
- (iii) Dunkirk, Iron man, Capitan America

</details>

<details><summary>UML</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/25bb268c-db88-48ee-ac1a-0b203dfa0ae6)
</details>

<details><summary>Decodificador</summary>

```java
public class Decodificador {
	private List<Pelicula> grilla;
	private List<Pelicula> reproducidas;
	private Sugerencia criterioSugerencia;
	
	public Decodificador() {
		this.grilla = new ArrayList<>();
		this.reproducidas = new ArrayList<>();
		this.criterioSugerencia = new SugerenciaNovedad();
	}
	
	public List<Pelicula> obtenerSugerencias() {
		return this.criterioSugerencia.obtenerSugerencias(this);
	}
}
```

</details>
<details><summary>Pelicula</summary>

```java
public class Pelicula {
	private String titulo;
	private Year anioEstreno;
	private double puntaje;
	private List<Pelicula> peliculasSimilares;
	
	public Pelicula(String titulo, double puntaje, Year anioEstreno) {
		this.titulo = titulo;
		this.anioEstreno = anioEstreno;
		this.puntaje = puntaje;
		this.peliculasSimilares = new ArrayList<>();
	}

	public void establecerSimilitud(Pelicula pelicula) {
		if (!this.peliculasSimilares.contains(pelicula)) {
			this.peliculasSimilares.add(pelicula);
			pelicula.establecerSimilitud(this);
		}
	}
}
```
</details>
<details><summary>Sugerencia</summary>

```java
public abstract class Sugerencia {
	public List<Pelicula> obtenerSugerencias(Decodificador decodificador){
		return this.sugerirPeliculas(decodificador).stream()
				.filter(pelicula -> !decodificador.getReproducidas().contains(pelicula))
				.limit(3).collect(Collectors.toList());
	}
	
	public abstract List<Pelicula> sugerirPeliculas(Decodificador decodificador);
}
```
</details>

<details><summary>SugerenciaNovedad</summary>

```java
public class SugerenciaNovedad extends Sugerencia {

	public List<Pelicula> sugerirPeliculas(Decodificador decodificador) {
		return decodificador.getGrilla().stream()
					.sorted((p2,p1) -> p1.getAnioEstreno().compareTo(p2.getAnioEstreno()))
					.collect(Collectors.toList());
	}
}
```
</details>

<details><summary>SugerenciaPuntaje</summary>

```java
public class SugerenciaPuntaje extends Sugerencia {
	public List<Pelicula> sugerirPeliculas(Decodificador decodificador) {
		return decodificador.getGrilla().stream()
			.sorted((p1,p2) -> Double.compare(p2.getPuntaje(), p1.getPuntaje()))
			.collect(Collectors.toList());
	}
}
```
</details>

<details><summary>SugerenciaSimilaridad</summary>

```java
public class SugerenciaSimilaridad extends Sugerencia {

	public List<Pelicula> sugerirPeliculas(Decodificador decodificador) {
		return decodificador.getReproducidas().stream()
				.map(pelicula -> pelicula.getPeliculasSimilares())
				.flatMap(lista -> lista.stream())
				.distinct()
				.collect(Collectors.toList());
	} 
}
```
</details>

---

## Proxy

El patrón de diseño Proxy proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a este último. Se utiliza en situaciones donde queremos agregar cierta funcionalidad adicional cuando un objeto es accedido. Hay varias variantes del patrón Proxy, cada una optimizada para un caso de uso diferente, como el manejo de operaciones costosas, la implementación de controles de seguridad, o la interacción con objetos que residen en diferentes espacios de direcciones (como en aplicaciones distribuidas).

Aquí se describen algunas variantes comunes del patrón Proxy:

#### Proxy Virtual:
Es utilizado para realizar optimizaciones, como la carga perezosa (lazy loading) de un objeto que es muy pesado o costoso de crear. Un ejemplo clásico sería el de objetos de imágenes que no se cargan en memoria hasta que no se necesitan realmente para la visualización.

#### Proxy de Protección:
Controla el acceso al objeto original, proporcionando un tipo de seguridad y comprobando que el cliente tenga los permisos necesarios para realizar una acción.

#### Proxy Remoto:
Proporciona una representación local de un objeto que reside en un espacio de direcciones diferente, como un servidor remoto. Esto es común en sistemas distribuidos, donde el proxy se encarga de la comunicación a través de la red, la serialización y deserialización de datos, y la entrega de llamadas entre el cliente y el objeto remoto.

<details><summary>Estructura</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2962596c-0ad0-480c-a623-d1b7513d12cc)
</details>


<details><summary>Componentes</summary>

1. **Subject (Sujeto)**:
   - Es una interfaz que declara operaciones comunes para `RealSubject` y `Proxy`. Asegura que tanto el objeto real como el proxy puedan ser utilizados de forma intercambiable.

2. **RealSubject**:
   - Es la clase que define el objeto real que el proxy representa. Implementa la interfaz `Subject` y define la lógica real de negocio que se quiere ejecutar.

3. **Proxy**:
   - Es una clase que mantiene una referencia a `RealSubject` y también implementa la interfaz `Subject`. El `Proxy` intercepta todas las llamadas que se hacen al `RealSubject` y puede realizar operaciones antes o después de pasar la llamada al `RealSubject` (como control de acceso, lazy loading, logging, etc.).

4. **Client (Cliente)**:
   - Es el usuario del objeto `Subject`. Interactúa con `RealSubject` a través de la interfaz `Subject`, sin saber si está trabajando con un `RealSubject` o con un `Proxy`.

</details>

<details><summary>Como Funciona</summary>

- El `Client` realiza una llamada al método `Request()` del `Subject`.
- Si el `Client` tiene una referencia a un `Proxy`, es el `Proxy` quien recibe inicialmente esta llamada.
- El `Proxy` realiza cualquier operación previa que necesite (por ejemplo, chequear si el `Client` tiene permisos para realizar la solicitud).
- Posteriormente, el `Proxy` hace la llamada al método `Request()` del `RealSubject` referenciado dentro del `Proxy` (`realSubject->Request()`).
- El `RealSubject` realiza la operación y devuelve el resultado al `Proxy`, si es necesario.
- El `Proxy` puede entonces realizar cualquier operación posterior antes de pasar el resultado al `Client`.

</details>

<details><summary>Ejemplo Practico</summary>

### Ejemplo Practico: Acceso a la base de datos

Queremos acceder a una base de datos que contiene información sobre cómics. Este acceso está dado por el comportamiento de la clase DatabaseRealAccess con el siguiente protocolo y modelado como muestra la siguiente figura.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4300eeea-553f-4de3-941d-410c45580adb)

```java
public interface DatabaseAccess {
   /*Realiza la inserción de nueva información en la base de datos y retorna el id que recibe la nueva inserción */
   public int insertNewRow(List<String> rowData);
   /* Retorna una colección de acuerdo al texto que posee "queryString" */
   public Collection<String> getSearchResults(String queryString);
}
```

</details>

<details><summary>UML</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/56fc2c45-1171-4397-ae0a-15a5fa6455bb)

</details>

<details><summary>DatabaseAccess</summary>

```java
public interface DatabaseAccess {
    Collection<String> getSearchResults(String queryString);
    int insertNewRow(List<String> rowData);
}
```
</details>

<details><summary>DatabaseProxy</summary>

```java
public class DatabaseProxy implements DatabaseAccess{
	private DatabaseAccess database;
	private boolean isLog;
	
	public DatabaseProxy (DatabaseAccess database) {
		this.database = database;
		this.isLog = false;
	}

	public void logIn () {
		this.isLog = true;
	}
	
	public void closeSession() {
		this.isLog = false;
	}

	public Collection<String> getSearchResults(String queryString) {
		if (!this.isLog) {
			throw new RuntimeException("access denied"); 
		}
		return this.database.getSearchResults(queryString);
	}

	public int insertNewRow(List<String> rowData) {
		if (!this.isLog) {
			throw new RuntimeException("access denied"); 
		}
		return this.database.insertNewRow(rowData);
	}
}
```
</details>

<details><summary>DatabaseRealAccess</summary>

```java
public class DatabaseRealAccess implements DatabaseAccess {
    private Map<String, List<String>> data;
    private int currentId;

    public DatabaseRealAccess() {
        super();
        this.data = new HashMap<>();
        this.currentId = 3;
        this.data.put("select * from comics where id=1", Arrays.asList("Spiderman", "Marvel"));
        this.data.put("select * from comics where id=2", Arrays.asList("Batman", "DC comics"));
    }

    public Collection<String> getSearchResults(String queryString) {
        return this.data.getOrDefault(queryString, Collections.emptyList());
    }

    public int insertNewRow(List<String> rowData) {
        this.data.put("select * from comics where id=" + this.currentId, rowData);
        this.currentId = this.currentId + 1;

        return this.currentId - 1;
    }
}
```
</details>

---

## Decorator

El patrón Decorator es una solución de diseño estructural que permite agregar funcionalidades adicionales a objetos específicos de forma dinámica sin alterar su estructura. Esto es especialmente útil cuando extender una clase a través de la herencia no es viable o resulta menos flexible que componer comportamientos. El patrón Decorator "envuelve" el objeto original, proporcionando una envoltura mejorada.

<details><summary>Estructura</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b187a5dd-2b8d-4871-8588-bf357a8f614c)
</details>

<details><summary>Componentes</summary>

1. **Component (Componente)**:
   - Es la interfaz que define la operación que puede ser dinámicamente mejorada por los decoradores. En el diagrama, tiene un método `Operation()` que se supone es la acción que puede ser decorada.

2. **ConcreteComponent (Componente Concreto)**:
   - Es una clase que implementa `Component`. Proporciona el comportamiento básico que los decoradores pueden alterar. Tiene su propia implementación de `Operation()` que es la funcionalidad básica antes de que cualquier decoración se aplique.

3. **Decorator (Decorador)**:
   - Es una clase abstracta que implementa la interfaz `Component` y tiene una referencia a un objeto `Component`. Actúa como la clase base para todos los decoradores concretos. Tiene su propio método `Operation()` que por lo general llamará al `Operation()` del componente que está decorando, permitiendo así que los decoradores concretos agreguen comportamiento antes o después de la llamada al método del componente.

4. **ConcreteDecoratorA / ConcreteDecoratorB (Decoradores Concretos)**:
   - Son clases que extienden `Decorator`. Cada una agrega funcionalidades específicas al `Component` en el método `Operation()`. `ConcreteDecoratorA` tiene una variable de estado `addedState`, mientras que `ConcreteDecoratorB` tiene un método adicional `AddedBehavior()` que podría invocar dentro de su implementación de `Operation()`.
</details>
<details><summary>Como Funciona</summary>

- Un `ConcreteComponent` inicia con su operación básica.
- Un `ConcreteDecoratorA` o `ConcreteDecoratorB` envuelve el `ConcreteComponent`.
- Cuando se llama a `Operation()` en un decorador, este puede realizar acciones adicionales y, en algún momento dentro de este método, llamar a `Operation()` en el `Component` que está decorando.
- Los decoradores pueden agregarse en cascada, es decir, un `ConcreteDecoratorA` puede envolver otro `ConcreteDecoratorB`, y así sucesivamente, cada uno agregando su comportamiento en el proceso.

</details>

<details><summary>Ejemplo Practico</summary>

### Ejemplo Practico: FileManager

En un File Manager se muestran los archivos. De los archivos se conoce:

- Nombre
- Extensión 
- Tamaño
- Fecha de creación
- Fecha de modificación
- Permisos

Implemente la clase FileOO2, con las correspondientes variables de instancia y accessors.

En el File Manager el usuario debe poder elegir cómo se muestra un archivo (instancia de la clase FileOO2), es decir, cuáles de los aspectos mencionados anteriormente se muestran,  y en qué orden.  Esto quiere decir que un usuario podría querer ver los archivos de muchas maneras. Algunas de ellas son:

- nombre - extensión
- nombre - extensión - fecha de creación
- permisos - nombre - extensión - tamaño

Para esto, el objeto o los objetos que representen a los archivos en el FileManager debe(n) entender el mensaje prettyPrint(). 

Es decir, un objeto cliente (digamos el FileManager) le enviará al objeto que Ud. determine, el mensaje prettyPrint(). **De acuerdo a cómo el usuario lo haya configurado se deberá retornar un String con los aspectos seleccionados por el usuario en el orden especificado por éste**. Considere que un mismo archivo podría verse de formas diferentes desde distintos puntos del sistema, y que el usuario podría cambiar la configuración del sistema (qué y en qué orden quiere ver) en runtime.

#### Tareas:
- Discuta los requerimientos y diseñe una solución. Si aplica un patrón de diseño, indique cuál es y justifique su aplicabilidad.
- Implemente en Java.
- Instancie un objeto para cada uno de los ejemplos citados anteriormente y verifique escribiendo tests de unidad.

</details>

<details><summary>UML</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5284edc6-beaf-47bc-bee6-026526eb123c)
</details>

<details><summary>Aspect</summary>

```java
public class Aspect implements FileOO2{
	private FileOO2 component;

	public Aspect(FileOO2 component) {
		this.component = component;
	}

	public String prettyPrint() {return this.component.prettyPrint() + " ";}
	public String getName() {return this.component.getName();}
	public String getExtension() {return this.component.getExtension();}
	public String getSize() {return this.component.getSize();}
	public String getDateCreated() {return this.component.getDateCreated();}
	public String getDateModified() {return this.component.getDateModified();}
	public String getPermissions() {return this.component.getPermissions();}
}
```
</details>

<details><summary>AspectDateCreated</summary>

```java
public class AspectDateCreated extends Aspect{
	public AspectDateCreated(FileOO2 component) {
		super(component);
	}
	
	public String prettyPrint() {
		return super.prettyPrint() + this.getDateCreated();
	}
}
```
</details>

<details><summary>AspectDateModified</summary>

```java
public class AspectDateModified extends Aspect {

	public AspectDateModified(FileOO2 component) {
		super(component);
	}

	public String prettyPrint() {
		return super.prettyPrint() + this.getDateModified();
	}
}
```
</details>

<details><summary>AspectExtension</summary>

```java
public class AspectExtension extends Aspect {
	public AspectExtension(FileOO2 component) {
		super(component);
	}
	
	public String prettyPrint() {
		return super.prettyPrint() + this.getExtension();
	}
}
```
</details>

<details><summary>AspectName</summary>

```java
public class AspectName extends Aspect{
	public AspectName(FileOO2 component) {
		super(component);
	}
	
	public String prettyPrint() {
		return super.prettyPrint() + this.getName();
	}
}
```
</details>

<details><summary>AspectPermissions</summary>

```java
public class AspectPermissions extends Aspect {
	public AspectPermissions(FileOO2 component) {
		super(component);
	}
	
	public String prettyPrint() {
		return super.prettyPrint() + this.getPermissions();
	}
}
```
</details>

<details><summary>AspectSize</summary>

```java
public class AspectSize extends Aspect {
	public AspectSize(FileOO2 component) {
		super(component);
	}

	public String prettyPrint() {
		return super.prettyPrint() + this.getSize() + " MB";
	}
}
```
</details>

<details><summary>File</summary>

```java
public class File implements FileOO2 {
	private String name;
	private String extension;
	private double size;
	private LocalDate dateCreated;
	private LocalDate dateModified;
	private String permissions;
	
	public File(String name, String extension, double size, LocalDate dateCreated, LocalDate dateModified,
			String permissions) {
		this.name = name;
		this.extension = extension;
		this.size = size;
		this.dateCreated = dateCreated;
		this.dateModified = dateModified;
		this.permissions = permissions;
	}

	public String prettyPrint() {return "Datos del archivo:\n";}
	public String getName() {return this.name;}
	public String getExtension() {return this.extension;}
	public String getSize() {return Double.toString(this.size);}
	public String getDateCreated() {return this.dateCreated.toString();}
	public String getDateModified() {return this.dateModified.toString();}
	public String getPermissions() {return this.permissions;}
}
```
</details>

<details><summary>FileOO2</summary>

```java
public interface FileOO2 {
	public abstract String prettyPrint();
	public abstract String getName();
	public abstract String getExtension();
	public abstract String getSize();
	public abstract String getDateCreated();
	public abstract String getDateModified();
	public abstract String getPermissions();
}
```
</details>


---

