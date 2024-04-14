---
layout: ../../layouts/MarkdownPostLayout.astro
title: Parciales ING1
author: Fabian Martinez Rincon
description: "Historias de Usuario y Casos de uso. Tuve que ir todas las practicas y consultas para poder entender con mejor detalle."
image:
    url: '/posts/hu.jpg'
    alt: "Miniatura de los rayos de Astro."
pubDate: 2023-05-07
tags: ["bash", "nvim", "linux", "debian"]
---


```markdown
# ID: Ofertar Publicación

# Título
 Como Usuario General 
 Quiero Ofertar una publicación
 Para Intercambiar un producto que me guste

# Regla de negocio
- Tener al menos una publicación subida por parte del usuario general

## Criterios de aceptación
- **Escenario 1:** Oferta exitosa
  **Dado** que tiene 10 publicaciones subidas
  **Cuando** el usuario general selecciona una publicación, filial "Filia Nueva York Este", Fecha "1/1/2001" Hora "15:00"
  **Entonces** El sistema muestra un mensaje de oferta exitosa y envia la oferta al usuario ofertado

- **Escenario 2:** Oferta fallida por no tener publicaciones subidas
    **Dado** que no tiene publicaciones subidas
    **Cuando** el usuario general intenta seleccionar una publicación
    **Entonces** El sistema muestra un mensaje de oferta fallida y no envia la oferta al usuario ofertado
```

```markdown
# ID: Editar Publicación

# Título
 Como Usuario
 Quiero Editar una publicación
 Para actualizar los datos de la misma

# Regla de negocio
- La descripción debe tener entre 10 y 240 caracteres

## Criterios de aceptación
- **Escenario 1:** Edición Exitos
  **Dado** que estoy en una publicación a editar
  **Cuando** el usuario general ingresa una descripción de 100 caracteres
  **Entonces** el sistema informa que se ha editado correctamente 

- **Escenario 2:** Edición Fallida
  **Dado** que estoy en una publicación a editar
  **Cuando** el usuario general ingresa una descripción de 1 caracter
  **Entonces** el sistema informa que la descripción ingresada es demasiado corta
```

```markdown
# ID: Mis Publicación

# Título
 Como Usuario general
 Quiero ver mis publicaciones
 Para poder ver las publicaciones que he subido

# Regla de negocio

## Criterios de aceptación
- **Escenario 1:** Listado de mis Publicaciones exitoso
  **Dado** que tengo publicaciones subidas
  **Cuando** el usario general selecciona la opción de ver mis publicaciones
  **Entonces** el sistema muestra un listado de las publicaciones subidas por el usuario

- **Escenario 2:** Listado de mis Publicaciones fallido
    **Dado** que no tengo publicaciones subidas
    **Cuando** el usario general quiere ver sus publicaciones
    **Entonces** el sistema muestra la pagina vacia
```


```markdown
# ID: Abrir Publicación

# Título
 Como Usuario General 
 Quiero abrir una publicación
 Para ver los detalles de la misma

# Regla de negocio

## Criterios de aceptación
- **Escenario 1:** Apertura de publicación exitosa
  **Dado** a que estoy navegando en la pagina principal
  **Cuando** el usuario general selecciona una publicación
  **Entonces** el sistema muestra los detalles de la publicación

```