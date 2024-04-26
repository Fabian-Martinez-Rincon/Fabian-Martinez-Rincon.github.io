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

### Ejemplo Practico: Sistema de Audios

Usted ha implementado una clase `Media player`, para `reproducir` archivos de `audio` y `video` en formatos que usted ha diseñado. Cada `Media` se puede `reproducir` con el mensaje `play()`. Para continuar con el desarrollo, usted desea incorporar la posibilidad de reproducir `Video Stream`. Para ello, dispone de la clase `VideoStream` que pertenece a una librería de terceros y usted no puede ni debe modificarla. El desafío que se le presenta es hacer que la clase `MediaPlayer` pueda interactuar con la clase `VideoStream`. 
La situación se resume en el siguiente diagrama UML:

<details><summary>Diagrama</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/29e8bb02-4b80-4879-8835-97efffde2249)
</details>



<details open><summary>Resultado</summary>

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