---
layout: ../../layouts/MarkdownPostLayout.astro
title: '🔌 Adapter'
pubDate: 2024-04-19
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Objetos/adapter.webp'
    alt: ''
tags: ["POO"]
category: Patrones
---

## Ejemplo Practico

Supongamos que tienes un sistema de figuras geométricas 2D y deseas extenderlo para manejar figuras 3D. Las figuras 3D tienen métodos distintos para dibujar y moverse (por ejemplo, `3dDraw()` y `3dMove()`). Podrías crear un adaptador que permita manejar estas figuras 3D como si fueran figuras 2D, proporcionando así una interfaz uniforme en el editor de figuras.

Este patrón es especialmente útil en sistemas donde no puedes controlar el código fuente de las clases que necesitas usar, facilitando la integración y la extensibilidad sin modificar el comportamiento existente.


| Sistema | Implementación a Agregar |
| --------- | --------- |
| ![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c759e543-54a8-420a-a041-445902d76aa7)   | ![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/96378126-7cc8-4f47-8451-70deb55546c8)   |


### Transformación

Ahora que sabemos cual es el problema y no podemos modificar nada, vamos a crear un adaptador entre los dos sistemas. El adapter termina heredando los meotodos de la interfaz que se quiere adaptar.

| Sistema | Implementación a Agregar |
| --------- | --------- |
| ![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/53b4d8b8-eabc-4882-9091-aec428b90977)   |  ![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ade568ef-6b05-44b8-9147-62edd3aa7759)  |


Una vez que entendemos este concepto, vamos a identificar los respectivos roles futuras explicaciones.

### Estructura

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c0aa4ff9-9381-4f0d-bc3d-ff208c67d797)


#### Ejemplo: Integración de figuras 3D en un sistema de figuras 2D

**Escenario:**
Supongamos que tienes un sistema de edición gráfico que hasta ahora ha trabajado solo con figuras 2D (como círculos y rectángulos), y necesitas extenderlo para soportar figuras 3D (como esferas y cubos). El sistema de figuras 2D utiliza métodos como `draw()` y `move()`. Las figuras 3D, en cambio, tienen métodos como `draw3D()` y `move3D()`.

**Objetivo:**
Queremos que las figuras 3D sean tratadas como figuras 2D por el editor gráfico, sin cambiar la interfaz de usuario ni el código del cliente que maneja las figuras 2D.



**Descripción de los componentes:**

1. **Target (Figura2D):**
   - Esta es la interfaz que el cliente espera usar. Define métodos como `draw()` y `move()`.

2. **Client (Editor):**
   - Utiliza objetos que implementan la interfaz `Figura2D`. Este cliente quiere usar figuras 3D pero sin alterar su forma de interactuar con figuras 2D.

3. **Adapter (Adaptador3D):**
   - Implementa la interfaz `Figura2D` y adapta la interfaz de las figuras 3D al mundo de las figuras 2D.
   - Contiene una instancia de `Figura3D` y traduce las llamadas de los métodos `draw()` y `move()` de la interfaz `Figura2D` a `draw3D()` y `move3D()` respectivamente.

4. **Adaptee (Figura3D):**
   - Clase que define una interfaz que necesita ser adaptada para ser utilizada por el cliente. En este caso, `Figura3D` tiene métodos como `draw3D()` y `move3D()` que son incompatibles directamente con el sistema existente de figuras 2D.

**Funcionamiento:**

- Cuando el **Editor** (cliente) necesita dibujar o mover una figura, llama a `draw()` o `move()` en la interfaz `Figura2D`.
- El **Adaptador3D** recibe estas llamadas y las traduce a `draw3D()` y `move3D()` del objeto `Figura3D`.
- La `Figura3D` realiza las acciones necesarias y el resultado se refleja en la interfaz del usuario como si se estuviese manejando una figura 2D convencional.

Este enfoque permite que el sistema original de figuras 2D se extienda a nuevas dimensiones sin alterar el código cliente existente, garantizando que los nuevos tipos de figuras se integren de manera transparente y manteniendo la cohesión y modularidad del sistema.

### Ejemplo Practico

Usted ha implementado una clase Media player, para reproducir archivos de audio y video en formatos que usted ha diseñado. Cada Media se puede reproducir con el mensaje play(). Para continuar con el desarrollo, usted desea incorporar la posibilidad de reproducir Video Stream. Para ello, dispone de la clase VideoStream que pertenece a una librería de terceros y usted no puede ni debe modificarla. El desafío que se le presenta es hacer que la clase MediaPlayer pueda interactuar con la clase VideoStream. 
La situación se resume en el siguiente diagrama UML:

![image](https://github.com/Fabian-Martinez-Rincon/Orientacion-a-Objetos-2/assets/55964635/6400603c-4313-40fd-ac50-25eae5c79657)


### Tareas:

- Modifique el diagrama de clases UML para considerar los cambios necesarios. Si utiliza patrones de diseño indique los roles en las clases utilizando estereotipos.
- Implemente en Java

#### Diagrama



![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e7ccb84f-5f1a-43ee-ac34-e6d8bc5bb213)

> El uml lo corregi pero el codigo no

<table>

<tr><td>Audio</td><td>Media</td></tr>
<tr><td>

```java
public class Audio extends Media{
	
	public String play() {
		String nombre = "audio";
		return nombre;
	}
}
```
</td><td>

```java
public class Media {
	public String play() {
		String nombre = "media";
		return nombre;
	}
}
```
</td></tr>
<tr><td>VideoFile</td><td>VideoStream</td></tr>
<tr><td>

```java
public class VideoFile extends Media{
	public String play() {
		String nombre = "video file";
		return nombre;
	}
}
```
</td><td>

```java
public class VideoStream extends VideoFile{
	public String reproduce() {
		String nombre = "video stream";
		return nombre;
	}
}
```
</td></tr>

</table>

#### adapterVideoStream

```java
public class adapterVideoStream extends VideoFile{
	private VideoStream vs = new VideoStream();
	
	public String play() {
		return vs.reproduce();
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
