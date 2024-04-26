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
- [Adapter](#adapter)

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



### Ejemplo Practico: Sistema de Audios

Usted ha implementado una clase `Media player`, para `reproducir` archivos de `audio` y `video` en formatos que usted ha diseñado. Cada `Media` se puede `reproducir` con el mensaje `play()`. Para continuar con el desarrollo, usted desea incorporar la posibilidad de reproducir `Video Stream`. Para ello, dispone de la clase `VideoStream` que pertenece a una librería de terceros y usted no puede ni debe modificarla. El desafío que se le presenta es hacer que la clase `MediaPlayer` pueda interactuar con la clase `VideoStream`. 
La situación se resume en el siguiente diagrama UML:

<details><summary>Diagrama</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/29e8bb02-4b80-4879-8835-97efffde2249)
</details>



<details><summary>Resultado</summary>

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

---

## Composite

---

## State

---

## Strategy

---

## Proxy

---

## Adapter

---

