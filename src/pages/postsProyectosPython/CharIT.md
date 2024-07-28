---
layout: ../../layouts/MarkdownPostLayout.astro
title: Char IT
author: Fabian Martinez Rincon
description: ""
image:
    url: '/allProjecs/hopetrade.webp'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

## Historias de Usuario 1ra Demo

<details><summary>1) Listar Filiales</summary>

```markdown
### Título
**Como** usuario visitante o usuario general o usuario colaborador o usuario owner
**Quiero** listar las filiales
**Para** conocer su información

### Criterios de aceptación

- **Escenario 1:** Éxito al listar filiales
  **Dado** un usuario visitante que se encuentra en la pagina principal y un listado de filiales que existe
  **Cuando** presiona en el botón "Ver Filiales"
  **Entonces** el sistema muestra un listado de las filiales
```

![image](https://github.com/user-attachments/assets/8cd7633b-5afa-4fbb-9556-db644c10f59d)
![image](https://github.com/user-attachments/assets/24a7e600-a7be-47d6-991e-a32fd748e2d0)

</details>

<details><summary>2) Cambiar Visibilidad</summary>

```markdown
# Título
 Como Usuario General
 Quiero cambiar la visibilidad de una publicación
 Para usarla de diferentes maneras

## Criterios de aceptación

- **Escenario 1:** Éxito archivar una publicación publicada
  **Dado** que el usuario general con mail "general@gmail.com" en su publicación que existe y esta publicada
  **Cuando** presiona el botón "Archivar"
  **Entonces** el sistema cambia el estado de la publicación, la archiva e informa  "La publicación se ha actualizado correctamente."

- **Escenario 2:** Éxito al publicar una publicación archivada
  **Dado** que el usuario general con mail "general@gmail.com" en su publicación que existe y esta archivada
  **Cuando** presiona el botón "Publicar"
  **Entonces** el sistema cambia el estado de la publicación, la publica e informa "La publicación se ha actualizado correctamente."
```

![image](https://github.com/user-attachments/assets/8b0daf04-d906-41bc-b98f-18d1a2262773)
![image](https://github.com/user-attachments/assets/35663a80-913e-41e1-a94c-e909bdc6f7e4)
![image](https://github.com/user-attachments/assets/7d14b8a1-e056-4960-84ac-66f99092589a)

</details>

<details><summary>3) Editar Publicación</summary>

```markdown
# Título
 Como Usuario General
 Quiero Editar una publicación
 Para actualizar los datos de la misma

# Regla de negocio

## Criterios de aceptación
- **Escenario 1:** Edición Exitosa
  **Dado** que el usuario general con mail "general@gmail.com" en su publicación que existe
  **Cuando** presiona el botón de "Editar Publicación", "Nueva Descripción": "Estado Perfecto" y presiona el botón de "Confirmar".
  **Entonces** el sistema informa "La publicación se ha actualizado correctamente."
```

![image](https://github.com/user-attachments/assets/f6ea19a5-5ac2-4bcf-8611-1f5cf087c159)
![image](https://github.com/user-attachments/assets/d46e15b8-624a-480d-a47c-7afb785aa482)
![image](https://github.com/user-attachments/assets/1a314cfe-3bd9-4fac-9633-e512ea0f94d5)

</details>

<details><summary>4) Ver Perfil</summary>

```markdown
## Título
- **Como** usuario general o usuario colaborador o usuario owner
- **Quiero** ver mi Perfil 
- **Para** ver mis datos personales 

## Criterios de aceptación
- **Escenario:** Éxito al mostrar perfil
  **Dado** El Usuario General con Mail "general@gmail.com" que ha iniciado sesión
  **Cuando** presiona el botón "Ver Perfil"
  **Entonces** el sistema muestra la información personal del usuario y el botón "Editar perfil"
```

![image](https://github.com/user-attachments/assets/5bb97cad-5466-4de5-8078-5d6822425dde)

</details>


<details><summary>5) Editar Perfil</summary>

```markdown
## Título
- **Como** usuario general o usuario owner o usuario colaborador
- **Quiero** editar mi perfil
- **Para** cambiar mis datos de acceso 

## Reglas de Negocio
- La contraseña debe tener mínimo 8 caracteres

## Criterios de aceptación
- **Escenario 1:** Éxito al Editar Perfil 
  **Dado** El Usuario General con Mail "general@gmail.com" y la contraseña nueva "contranueva" la cual tiene mínimo 8 caracteres 
  **Cuando** ingresa Contraseña Actual: "contrageneral", Nueva Contraseña: "contranueva" y presiona el botón "Actualizar"
  **Entonces** el sistema registra la contraseña e informa "¡Perfil actualizado correctamente!"
  
- **Escenario 2:** Fallo al Editar Perfil por contraseña menor a 8 caracteres
  **Dado** El Usuario General con Mail "general@gmail.com" y la contraseña nueva "contra" la cual tiene menos 8 caracteres 
  **Cuando** ingresa Contraseña Actual: "contranueva", Nueva Contraseña: "contra" y presiona el botón "Actualizar"
  **Entonces** el sistema informa "La contraseña debe tener mínimo 8 caracteres"

- **Escenario 3:** Fallo al Editar Perfil por contraseña actual incorrecta
  **Dado** El Usuario General con Mail "general@gmail.com" y la contraseña nueva "contrafinal" la cual tiene mínimo 8 caracteres 
  **Cuando** ingresa Contraseña Actual: "contrarara", Nueva Contraseña: "contrafinal" y presiona el botón "Actualizar"
  **Entonces** el sistema informa "Contraseña actual incorrecta. Inténtalo de nuevo."
```

![image](https://github.com/user-attachments/assets/76e13b2a-0756-4153-82be-3bb59f7fd47f)
![image](https://github.com/user-attachments/assets/8fba0fb0-b68c-43df-9988-2adf0aa8ab4d)
![image](https://github.com/user-attachments/assets/0964c9bd-b860-4f45-9ae2-a80f938d9d12)
![image](https://github.com/user-attachments/assets/9c3c805c-8c0b-4a11-bfe4-c6d7852527bf)

</details>

<details><summary>6) Cerrar Sesión</summary>

```markdown
# Título
**Como** usuario general o usuario owner o usuario colaborador
**Quiero** cerrar sesión 
**Para** salir del sistema

# Regla de negocio 
	
## Criterios de aceptación
- **Escenario:** Éxito al cerrar sesión
  **Dado** el usuario general con email "general@gmail.com" que ha iniciado sesión
  **Cuando** presiona el botón "Cerrar Sesión" y confirma el cierre
  **Entonces** el sistema cierra la sesión del usuario, informa "Se ha cerrado la sesión correctamente." y lo redirecciona a la página principal
  
- **Escenario 2:** Éxito al cancelar el cierre de sesión
  **Dado** el usuario general con email "general@gmail.com" que ha iniciado sesión
  **Cuando**  presiona el botón "Cerrar Sesión" y cancela el cierre 
  **Entonces** el sistema cancela la operación
```

![image](https://github.com/user-attachments/assets/6273e639-2198-4f43-ab65-301ca4ebd2c6)
![image](https://github.com/user-attachments/assets/510a7b03-f20e-4586-9820-af47fcdcb6fd)
![image](https://github.com/user-attachments/assets/16db14ef-64de-476e-8c30-054dc6bdd046)

</details>

<details><summary>7) Registrar Colaborador</summary>

```markdown
### Título

**Como** usuario owner
**Quiero** registrar un colaborador
**Para** habilitarle las funcionalidades correspondientes

### Regla de negocio

- El mail debe ser único en el sistema

### Criterios de aceptación

- **Escenario 1:** Éxito al registrar colaborador
  **Dado** el mail "gallardolucas003@gmail.com" el cual no se encuentra registrado previamente
  **Cuando** se ingresa Nombre: "Lucas", Apellido: "Gallardo" y el Email:"gallardolucas003@gmail.com"
  **Entonces** el sistema da de alta un nuevo colaborador e informa "Usuario registrado Correctamente!. Se ha enviado un correo electrónico con la contraseña" y lo redirige al listado de usuarios colaboradores

- **Escenario 2:** Error al registrar colaborador
  **Dado** el mail "gallardolucas003@gmail.com" el cual se encuentra registrado previamente
   **Cuando** se ingresa Nombre: "Fabian", Apellido: "Martinez" y el Email:"gallardolucas003@gmail.com"
  **Entonces** el sistema informa "El mail ingresado ya se encuentra registrado." y lo redirige al listado de usuarios colaboradores
```

![image](https://github.com/user-attachments/assets/6534797b-5048-4854-be89-9e5cb6364358)
![image](https://github.com/user-attachments/assets/51643846-2555-43ef-a1c4-8de87a198b14)
![image](https://github.com/user-attachments/assets/6a7f280e-be61-4b5c-afbc-b8a22ad48358)
![image](https://github.com/user-attachments/assets/953d22ce-663d-4f99-8e30-4ca5c4c6361b)

</details>

<details><summary>8) Iniciar Sesión</summary>

```markdown
## Título
- **Como** Usuario general o usuario owner o usuario colaborador
- **Quiero** Iniciar Sesión
- **Para** acceder al sistema

## Criterios de aceptación
- **Escenario 1:** Inicio de sesión exitoso como usuario general
  **Dado** Un Usuario General con el mail "general@gmail.com" el cual pertenece un usuario general y contraseña "contrageneral" la cual es valida
  **Cuando** se ingresa el mail "general@gmail.com" y la contraseña "contrageneral"
  **Entonces** el sistema habilita las funcionalidades de usuario general, informa "Inicio de sesión Exitoso" y lo redirige a la página principal
  
- **Escenario 2:** Inicio de sesión exitoso como usuario colaborador
  **Dado** Un Usuario Colaborador con el mail "colaborador@gmail.com" el cual pertenece a un usuario colaborador y contraseña "contracolaborador" la cual es valida
  **Cuando** se ingresa el mail "colaborador@gmail.com" y la contraseña "contracolaborador"
  **Entonces** el sistema habilita las funcionalidades de usuario colaborador, informa "Inicio de sesión Exitoso" y lo redirige a la página principal
  
- **Escenario 3:** Inicio de sesión exitoso como usuario owner
  **Dado** Un Usuario Owner con el mail "owner@gmail.com" el cual pertenece a un usuario owner y contraseña "contraowner" la cual es valida
  **Cuando** se ingresa el mail "owner@gmail.com" y la contraseña "contraowner"
  **Entonces** el sistema habilita las funcionalidades de usuario owner, informa "Inicio de sesión Exitoso" y y lo redirige a la página principal

- **Escenario 4:** Inicio de sesión fallido por correo invalido
  **Dado** Un Usuario General con el mail "invalido@gmail.com" el cual no pertenece a un usuario general del sistema y contraseña "contrarandom"
  **Cuando** se ingresa mail "invalido@gmail.com" y contraseña "contrarandom"
  **Entonces** el sistema le informa "El mail o contraseña son incorrectos"

- **Escenario 5:** Inicio de sesión fallido por contraseña invalida
  **Dado** Un Usuario General el mail "general@gmail.com" el cual pertenece a un usuario general del sistema y contraseña "contraivalida" la cual es invalida
  **Cuando** se ingresa mail "general@gmail.com" y contraseña "contraivalida"
  **Entonces** el sistema le informa "El mail o contraseña son incorrectos"
```

![image](https://github.com/user-attachments/assets/fb1a2134-e4d9-434b-afcb-73cc59e2e3e4)
![image](https://github.com/user-attachments/assets/0295be0d-9abb-4dd6-aeec-a00f3cd3603c)
![image](https://github.com/user-attachments/assets/f043d146-432b-4503-99be-544dfb4021f8)
![image](https://github.com/user-attachments/assets/c7e483d8-8b6b-4181-8529-9ec09eec5fee)

</details>

<details><summary>9) Listar Usuarios</summary>

```markdown
## Título
- **Como** usuario colaborador o usuario owner 
- **Quiero** ver los usuarios generales
- **Para** tener un control de los mismos

## Criterios de aceptación
- **Escenario 1:** Éxito al listar usuarios Generales
  **Dado** El Usuario Owner con Mail owner@gmail.com y usuarios generales existentes
  **Cuando** se presiona el botón "Listar Usuarios"
  **Entonces** el sistema muestra un listado con los usuarios generales
  
- **Escenario 2:** Éxito al mostrar un listado vacío de usuarios generales
  **Dado** El Usuario Owner con Mail owner@gmail.com y que no existen usuarios generales
  **Cuando**  se presiona el botón "Listar Usuarios"
  **Entonces** El sistema informa que "No existen usuarios generales cargados en el sistema"
```

![image](https://github.com/user-attachments/assets/56dd54d6-6e9e-4c06-9357-3ce1e5d24f7a)


</details>

<details><summary>10) Listar Colaboradores</summary>

```markdown
## Título
- **Como** usuario Owner 
- **Quiero** listar los usuarios colaboradores
- **Para** mantener un control

## Criterios de aceptación
- **Escenario 1:** Éxito al mostrar usuarios colaboradores
  **Dado** El Usuario Owner con Mail owner@gmail.com y que existen usuarios colaboradores
  **Cuando** presiona el botón "Listar Colaboradores"
  **Entonces** el sistema muestra un listado con los usuarios colaboradores
  
- **Escenario 2:** Listado vacío de usuarios colaboradores
  **Dado** El Usuario Owner con Mail owner@gmail.com  y que no existen usuarios colaboradores
  **Cuando**  presiona el botón "Listar Colaboradores"
  **Entonces** El sistema informa que "No existen usuarios colaboradores cargados en el sistema"
```

![image](https://github.com/user-attachments/assets/ef8acccc-66f9-4603-9be6-b2a750a67609)

</details>

<details><summary>11) Abrir Menú</summary>

```markdown
# Título
 **Como** usuario visitante o usuario general o usuario colaborador o usuario owner
 **Quiero** Abrir el menú 
 **Para** para seleccionar una opción

## Criterios de aceptación
- **Escenario 1:** Ingreso Al Menú Exitoso como Usuario Visitante
  **Dado** un usuario visitante que no ha iniciado sesión
  **Cuando** el Usuario Visitante presiona el botón para desplegar el menú
  **Entonces** El sistema muestra las opciones del Usuario Visitante

- **Escenario 2:** Ingreso Al Menú Exitoso como Usuario General
  **Dado** un mail "general@gmail.com" que ha iniciado sesión
  **Cuando** presiona el botón para desplegar el menú
  **Entonces** El sistema muestra las opciones del Usuario General

- **Escenario 3:** Ingreso Al Menú Exitoso como Usuario Colaborador
  **Dado** un mail colaborador@gmail.com que ha iniciado sesión
  **Cuando** presiona el botón para desplegar el menú
  **Entonces** El sistema muestra las opciones del Usuario Colaborador

- **Escenario 4:** Ingreso Al Menú Exitoso como Usuario Owner
  **Dado** un mail owner@gmail.com que ha iniciado sesión
  **Cuando** el usuario Owner presiona el botón para desplegar el menú
  **Entonces** El sistema muestra las opciones del usuario Owner
```

![image](https://github.com/user-attachments/assets/e89c02d9-44da-47bd-86de-c893d5820ba7)

</details>


<details><summary>12) Listar mis publicaciones</summary>

```markdown
# Título
 Como Usuario general
 Quiero listar mis publicaciones
 Para poder ver las publicaciones que he subido

# Regla de negocio

## Criterios de aceptación
- **Escenario 1:** Éxito al listar mis Publicaciones
  **Dado** el usuario general "general@gmail.com" con sesión iniciada y con publicaciones subidas
  **Cuando**  se presiona el botón "Listar Mis Publicaciones"
  **Entonces** el sistema muestra un listado de las publicaciones subidas por el usuario

- **Escenario 2:** Éxito al mostrar un listado vacío de publicaciones
    **Dado** el usuario general general2@gmail.com con sesión iniciada y sin publicaciones subidas
    **Cuando** se presiona el botón "Listar Mis Publicaciones"
    **Entonces** El sistema muestra el mensaje 'No hay Publicaciones disponibles'
```

![image](https://github.com/user-attachments/assets/49a12772-f116-42a9-9acc-cb1f844b549f)

</details>

<details><summary>13) Listar Publicaciones</summary>

```markdown
## Título
- **Como** usuario general o usuario owner o usuario colaborador 
- **Quiero** listar las publicaciones 
- **Para** conocerlas

## Criterios de aceptación
- **Escenario 1:** Éxito al mostrar las publicaciones 
  **Dado** El Usuario General con Mail "general@gmail.com" y que existen publicaciones subidas
  **Cuando** se presiona el botón "Listar publicaciones"
  **Entonces** el sistema muestra un listado con las publicaciones publicas subidas por otros usuarios
  
- **Escenario 2:** Éxito al mostrar un listado vacío de publicaciones  
  **Dado** El Usuario General con Mail "general@gmail.com" y no existen publicaciones subidas
  **Cuando**  se presiona el botón "Listar publicaciones"
  **Entonces** El sistema muestra el mensaje 'No hay Publicaciones disponibles'
```

![image](https://github.com/user-attachments/assets/d9cf246c-3019-441f-9788-a6ff41c15a69)

</details>

---

## Historias de Usuario 2da Demo


<details><summary>14) Registrar Usuario</summary>

```markdown
## Título
- **Como** Usuario Visitante
- **Quiero** Registrarme
- **Para** poder acceder a las funcionalidades del sistema

## Reglas de negocio

- El mail debe ser único en el sistema
- El DNI debe ser único en el sistema
- El usuario visitante debe ser mayor de edad
- La contraseña debe tener mínimo 8 caracteres

## Criterios de aceptación
- **Escenario 1:** Registro Exitoso
  **Dado** el mail "prueba@gmail.com" el cual no se encuentra registrado previamente, DNI "42342521" el cual no se encuentra registrado previamente, fecha de nacimiento "01/01/2000" la cual pertenece a una persona mayor de edad y contraseña "contraprueba" la cual tiene mínimo 8 caracteres
  **Cuando** se ingresa el Nombre "Nombre1", Apellido "Apellido1", Email "prueba@gmail.com", Contraseña "contraprueba", DNI "42342521",  Teléfono "22132131"  y Fecha de Nacimiento "01/01/2000"
  **Entonces** El sistema da de alta un nuevo usuario, redirecciona al Iniciar sesión e informa "Fue registrado correctamente"
  
- **Escenario 2:** Registro Fallido por mail ya registrado
  **Dado** el mail "prueba@gmail.com" el cual se encuentra registrado 
  **Cuando** se ingresa el Nombre "Nombre2", Apellido "Apellido2", Email "prueba@gmail.com", Contraseña "contracualquiera", DNI "554353412", Teléfono "31214523" , Fecha de Nacimiento "01/01/2000"
  **Entonces** El sistema informa "Ya existe un usuario registrado con ese mail"

- **Escenario 3:** Registro Fallido por dni ya registrado
  **Dado** el mail "pruebadni@gmail.com" el cual no se encuentra registrado previamente y el DNI "42342521" el cual se encuentra registrado previamente
  **Cuando** se ingresa el Nombre "Nombre3", Apellido "Apellido3", Email "pruebadni@gmail.com", Contraseña "contrarepetida", DNI "42342521", Teléfono "745345534",  y fecha de nacimiento "01/01/2000"
  **Entonces** El sistema informa al usuario "Ya existe un usuario registrado con ese dni"
  
- **Escenario 4:** Registro Fallido por Persona menor de edad
  **Dado** el mail "menor@gmail.com" el cual no se encuentra registrado previamente, DNI "98413292" el cual no se encuentra registrado previamente, fecha de nacimiento "08/08/2018" la cual no pertenece a una persona mayor de edad
  **Cuando** se ingresa el Nombre "Nombre4", Apellido "Apellido4", Email "menor@gmail.com", Contraseña "contramenor", DNI "98413292", Teléfono "4234321", y fecha de nacimiento "08/08/2018"
  **Entonces** El sistema informa al usuario "Debes tener al menos 18 años para registrarte."
  
- **Escenario 5:** Registro Fallido por contraseña con menos de 8 caracteres
  **Dado** el mail "prueba2@gmail.com" el cual no se encuentra registrado previamente, DNI "31234324" el cual no se encuentra registrado previamente, fecha de nacimiento 01/01/2000 la cual pertenece a una persona mayor de edad y contraseña "hola" la cual tiene menos de 8 caracteres
  **Cuando** se ingresa el Nombre "Nombre5", Apellido "Apellido5" Email "prueba2@gmail.com", Contraseña "hola", DNI "31234324", Teléfono "4234321" y fecha de nacimiento "01/01/2000"
  **Entonces** El sistema informa que "La contraseña debe tener mínimo 8 caracteres"
```
</details>



<details><summary>15) Subir Publicación</summary>

```markdown
# Título
Como usuario general,
Quiero Subir una Publicación,
Para poder intercambiarlo en el futuro

# Regla de negocio
- La imagen tiene que ser en formato png o jpg
- Nombre de la publicación único para el usuario

## Criterios de aceptación
- **Escenario 1:** Subida Exitosa de una Publicación Publica
  **Dado**: que la imagen tiene formato png y el Título "Cafetera" no pertenece a una publicación del usuario
  **Cuando**: Selecciona la imagen, ingresa Título: "Cafetera", Descripción: "En buen estado", Horarios Libres (opcional) : "de 13 a 18", selecciona la categoría "Electrodomésticos" y presiona el botón: "Publicar"
  **Entonces**: Sistema registra la publicación para el usuario como pública, informa "La publicación se ha subido correctamente." y lo redirige al listado de sus publicaciones

- **Escenario 2:** Subida Exitosa de una Publicación Archivada
  **Dado**: que la imagen tiene formato jpg y el Título "Paquete de Arroz" no pertenece a una publicación del usuario
  **Cuando**: Selecciona la imagen, ingresa Título: "Paquete de Arroz", Descripción: "Largo Fino", Horarios Libres (opcional) : "de 10 a 18", selecciona la categoría "Comida" y presiona el botón: "Archivar"
  **Entonces**: Sistema registra la publicación para el usuario como archivada, informa "La publicación se ha subido correctamente."  y lo redirige al listado de sus publicaciones

- **Escenario 3:** Subida Fallida por formato invalido
  **Dado**: que la imagen tiene formato webp y el Título "Mesita de luz" no pertenece a una publicación del usuario
  **Cuando**: Selecciona la imagen, ingresa Título: "Mesita de luz", Descripción: "Barnizada", Horarios Libres (opcional) : "de 10 a 18", selecciona la categoría "Muebles" y presiona el botón: "Publicar"
  **Entonces**: Sistema informa "El archivo debe ser una imagen en formato JPG o PNG."
 
- **Escenario 4:** Subida Fallida por Titulo ya registrado
  **Dado**: que la imagen tiene formato png y el Título "Cafetera" pertenece a una publicación del usuario
  **Cuando**: Selecciona la imagen, ingresa Título: "Cafetera", Descripción: "En regular estado", Horarios Libres (opcional) : "de 13 a 18", selecciona la categoría "Electrodomésticos" y presiona el botón: "Publicar"
  **Entonces**: Sistema informa "Ya tienes una publicación con el mismo título."
```

![image](https://github.com/user-attachments/assets/229ee4b1-53e5-491a-be2e-f6922a4f65e3)
![image](https://github.com/user-attachments/assets/5744d939-58c6-4bc7-a739-036f8aa36c1a)
![image](https://github.com/user-attachments/assets/43d1ea16-a672-4ffa-9720-6bbd4e8f01aa)
![image](https://github.com/user-attachments/assets/dfcae9ae-4d07-4d81-bd3b-429f13bb0803)
![image](https://github.com/user-attachments/assets/2213f17f-080c-4842-8e47-f2d88158c4e9)
![image](https://github.com/user-attachments/assets/762f8e62-006c-4505-966f-2146ae548979)
![image](https://github.com/user-attachments/assets/6aedf42d-c885-4ad9-a504-e90c71ae508a)

</details>


<details><summary>16) Comentar Publicación</summary>

```markdown
### Título

**Como** usuario general
**Quiero** comentar una publicación
**Para** interactuar con otro usuario

### Criterios de aceptación

- **Escenario 1:** Éxito al comentar publicación ajena
  **Dado** un usuario general con email general@gmail.com y una publicación ajena que existe
  **Cuando** presiona el botón "Comentar", ingresa "Me interesa" y presiona el botón "Agregar Comentario"
  **Entonces** el sistema registra el comentario, informa "¡Comentario agregado con éxito!" y notifica por email al autor de la publicación
```
</details>


<details><summary>17) Detallar Publicación</summary>

```markdown
**Como** usuario general o usuario colaborador o usuario owner
**Quiero** ver la información detallada de una publicación
**Para** conocer más detalles sobre la misma
### Reglas de negocio
- Un comentario tiene solo una respuesta
### Criterios de aceptación


- **Escenario 1:** Éxito al detallar una publicación ajena  sin comentarios siendo usuario general
  **Dado** un usuario general con email "general@gmail.com" que ha iniciado sesión y una publicación ajena que existe
  **Cuando** selecciona la publicación en la lista de publicaciones
  **Entonces** el sistema muestra la información detallada de la publicación, la sección de comentarios con un mensaje "No hay comentarios", la opción de Comentar y la opción de "Ofertar"

- **Escenario 2:** Éxito al detallar una publicación propia sin comentarios
  **Dado** un usuario general con email "general@gmail.com" que ha iniciado sesión y una publicación propia que existe, 
  **Cuando** selecciona una publicación en la lista de sus publicaciones
  **Entonces** el sistema muestra la información detallada de la publicación y habilita las opciones para "Archivar" o "Publicar" , "Eliminar" y "Editar Publicación", muestra la sección de comentarios con un mensaje "No hay comentarios"

- **Escenario 3:** Éxito al detallar una publicación ajena con comentarios siendo usuario general 
  **Dado** un usuario general con email "general@gmail.com" que ha iniciado sesión y una publicación ajena que existe
  **Cuando** selecciona la publicación en la lista de publicaciones
  **Entonces** el sistema muestra la información detallada de la publicación, la opción de "Ofertar" , la sección de comentarios y la opción de Comentar

- **Escenario 4:** Éxito al detallar una publicación propia con comentarios
  **Dado** un usuario general con email "general@gmail.com" que ha iniciado sesión y una publicación propia que existe
  **Cuando** selecciona una publicación en la lista de sus publicaciones
  **Entonces** el sistema muestra la información detallada de la publicación y habilita las opciones para "Archivar" o "Publicar" , "Eliminar" y "Editar Publicación", muestra la sección de comentarios con la opción de Responder si corresponde

- **Escenario 5:** Éxito al detallar una publicación con comentarios siendo owner 
  **Dado** un usuario owner con email "owner@gmail.com" que ha iniciado sesión y una publicación que existe
  **Cuando** selecciona la publicación en la lista de publicaciones
  **Entonces** el sistema muestra la información detallada de la publicación, la sección de comentarios  y habilita las opción para "Eliminar".

- **Escenario 6:** Éxito al detallar una publicación sin comentarios siendo owner 
  **Dado** un usuario owner con email "owner@gmail.com" que ha iniciado sesión y una publicación que existe
  **Cuando** selecciona la publicación en la lista de publicaciones
  **Entonces** el sistema muestra la información detallada de la publicación, la sección de comentarios con un mensaje "No hay comentarios"  y habilita las opción para "Eliminar".
```
</details>


<details><summary>18) Responder Comentario</summary>

```markdown
### Título

**Como** usuario general 
**Quiero** responder un comentario 
**Para** interactuar con otro usuario

### Criterios de aceptación

- **Escenario 1:** Éxito al responder comentario
  **Dado** un usuario general con email general@gmail.com y un comentario en una publicación propia
 **Cuando** presiona el botón "Responder", ingresa "Gracias" y presiona el botón "Enviar Respuesta"
  **Entonces** el sistema registra la respuesta, informa "¡Respuesta enviada con exito! y notifica por email al autor del comentario
```
</details>


<details><summary>19) Filtrar Usuario</summary>

```markdown
- **Como** Usuario Owner o Usuario Colaborador 
**quiero** filtrar a los usuarios generales por email  mediante una cadena
**para** realizar una búsqueda mas rápida

## Reglas de negocio

## Criterios de aceptación

- **Escenario 1:** Éxito al filtrar por mail
  **Dado** que el usuario owner con email "owner@gmail.com" que ha iniciado sesión y hay usuarios generales con un mail que coincide con la cadena "general2"
  **Cuando** ingresa "Filtrar por email" : "general2"
  **Entonces** el sistema muestra el listado de usuarios generales que comiencen con la cadena "general2"
  
- **Escenario 2:** Éxito al filtrar sin coincidencias.
  **Dado** que el usuario colaborador con email "colaborador@gmail.com" que ha iniciado sesión y no hay usuarios generales con un mail que coincide con la cadena "nuevo"
  **Cuando** ingresa "Filtrar por email" : "nuevo"
  **Entonces** El sistema muestra el mensaje 'No existen coincidencias'
```
</details>


<details><summary>20) Ofertar Publicación</summary>

```markdown
# Título
 Como Usuario General 
 Quiero Ofertar una publicación
 Para Intercambiar un producto que me guste

# Regla de negocio
- Tener al menos una publicación subida por parte del usuario general

## Criterios de aceptación
- **Escenario 1:** Oferta fallida por falta de publicaciones subidas.  
  **Dado** que el usuario general general@gmail.com no posee publicaciones subidas. 
  **Cuando** toca la opción de ofertar
  **Entonces** El sistema muestra un mensaje "No tienes publicaciones para ofertar." y el usuario general es redirigido al listado de publicaciones.

- **Escenario 2:** Oferta fallida por horario invalido
  **Dado** que el usuario general general@gmail.com y tiene al menos 1 publicación subida
  **Cuando** toca la opción de ofertar, selecciona una publicación propia, filial "La Plata", Fecha "1/1/2025" Hora "07:00"
  **Entonces** El sistema informa "El horario debe estar entre las 8 AM y las 7 PM.", y no se realiza la oferta.

- **Escenario 3:** Oferta fallida por fecha invalida
  **Dado** que el usuario general generalCaritas@gmail.com y tiene al menos 1 publicación subida
  **Cuando** toca la opción de ofertar, selecciona una publicación propia, filial "La Plata", Fecha "01/06/2001" y Hora "15:00"
  **Entonces** El sistema informa "La fecha no puede ser anterior a la actual."  y no se realiza la oferta.

- **Escenario 4:** Oferta exitosa
  **Dado** que el usuario general general@gmail.com y tiene al menos 1 publicación subida
  **Cuando** el selecciona una publicación propia, filial "La Plata", Fecha "10/06/2024" y Hora "18:00"
  **Entonces** El sistema muestra un mensaje "Oferta realizada con éxito.", registra la oferta realizada al sistema, y envía una notificación al email sobre la oferta de intercambio al usuario ofertado. El Usuario general es redirigido al listado de publicaciones.

- **Escenario 5:** Oferta fallida por repetir la oferta 
  **Dado** que el usuario general general@gmail.com, tiene al menos 1 publicación subida, ya posee una oferta de intercambio similar realizada con el mismo producto ofertado y mismo ofrecido.
  **Cuando** toca la opción de ofertar, selecciona una publicación propia, filial "La Plata", Fecha "1/10/2025" Hora "09:00"
  **Entonces** El sistema redirige al usuario a la página de ofertas enviadas, informa "Ya existe una oferta similar, revise sus ofertas enviadas". Y no se realiza la oferta.

- **Escenario 6:** Oferta fallida por oferta similar recibida
  **Dado** que el usuario general general2@gmail.com, tiene al menos 1 publicación subida, ya posee una oferta de intercambio similar recibida con los mismos productos.
  **Cuando** toca la opción de ofertar, selecciona una publicación propia, filial "La Plata", Fecha "1/10/2025" Hora "09:00"
  **Entonces** El sistema redirige al usuario a la página de ofertas recibidas, informa "Ya existe una oferta similar, revise sus ofertas recibidas". Y no se realiza la oferta.
```
</details>


<details><summary>21) Listar Ofertas Enviadas</summary>

```markdown
### Título

**Como** usuario general
**Quiero** listar las ofertas enviadas
**Para** consultar su estado

### Criterios de aceptación

- **Escenario 1:** Éxito al listar las ofertas enviadas
  **Dado** un usuario general con email general@gmail.com y ofertas enviadas que existen  
  **Cuando** presiona el botón "Listar Ofertas Enviadas"
  **Entonces** el sistema muestra el listado detallado con las ofertas enviadas

- **Escenario 2:** Éxito al mostrar un listado vació de ofertas enviadas
  **Dado** un usuario general con email general@gmail.com y que no existen ofertas enviadas
  **Cuando** presiona el botón "Listar Ofertas Enviadas"
  **Entonces** El sistema informa que "No hay Ofertas de intercambios"
```
</details>


<details><summary>22) Listar Ofertas Recibidas</summary>

```markdown
### Título

**Como** usuario general
**Quiero** listar las ofertas recibidas
**Para** consultar su estado

### Criterios de aceptación

- **Escenario 1:** Éxito al listar las ofertas recibidas
  **Dado** un usuario general con email general@gmail.com y ofertas recibidas que existen  
  **Cuando** presiona el botón "Listar Ofertas Recibidas"
  **Entonces** el sistema muestra el listado detallado con las ofertas recibidas

- **Escenario 2:** Éxito al mostrar un listado vació de ofertas recibidas
  **Dado** un usuario general con email general@gmail.com con un listado vació de ofertas recibidas
  **Cuando** presiona el botón "Listar Ofertas Recibidas"
  **Entonces** El sistema informa que "No hay Ofertas de intercambios"
```
</details>


<details><summary>23) Rechazar Oferta</summary>

```markdown
### Título

**Como** usuario general
**Quiero** Rechazar la oferta recibida
**Para** buscar otra oferta que me interese

### Criterios de aceptación

- **Escenario 1:** Éxito al rechazar la oferta recibida
  **Dado** un usuario general con email general@gmail.com, una oferta recibida y una descripción "No me interesa"
  **Cuando** presiona "Rechazar", "detalle el motivo": "No me interesa"
  **Entonces** el sistema informar "Oferta rechazada con éxito", cambia el estado de la oferta a rechazada, notifica por email al  usuario solicitante y almacena la descripción del rechazo.
```
</details>


<details><summary>24) Detallar Oferta Recibida</summary>

```markdown
### Título

**Como** usuario general
**Quiero** ver el detalle de la oferta recibida
**Para** determinar si la acepto o no

### Criterios de aceptación

- **Escenario 1:** Éxito al detallar oferta recibida en estado pendiente
  **Dado** un usuario general con email general@gmail.com y una oferta recibida
  **Cuando** selecciona la oferta en la lista de ofertas recibidas
  **Entonces** el sistema muestra la información detallada de la oferta recibida, su estado actual y las opciones para "Aceptar" , "Rechazar" y  campo "detalle el motivo". 

- **Escenario 2:** Éxito al detallar oferta recibida 
  **Dado** un usuario general con email general@gmail.com y una oferta recibida
  **Cuando** selecciona la oferta en la lista de ofertas recibidas
  **Entonces** el sistema muestra la información detallada de la oferta recibida y su estado actual
```
</details>


<details><summary>25) Aceptar Oferta</summary>

```markdown
### Título

**Como** usuario general
**Quiero** aceptar la oferta recibida
**Para** proceder al intercambio de los productos

### Criterios de aceptación

- **Escenario 1:** Éxito al aceptar la oferta recibida
  **Dado** un usuario general con email general@gmail.com y una oferta recibida
  **Cuando** presiona "Aceptar"
  **Entonces** el sistema informa "Oferta aceptada con éxito", cambia el estado de la oferta a aceptada, notifica por email al usuario solicitante y almacena el intercambio de productos.
```
</details>


<details><summary>26) Listar Intercambios Pendientes Del Día</summary>

```markdown
## Título
- **Como** Usuario Colaborador  o Usuario Owner
**quiero** ver el listado de intercambios pendientes del día
**para** poder confirmar o cancelar un intercambio.

## Reglas de negocio

## Criterios de aceptación
- **Escenario 1:** Éxito al listar los intercambios pendientes del día
  **Dado** que el usuario owner con email owner@gmail.com e  intercambios pendientes durante el día que existen
  **Cuando** presiona el botón "Listar Intercambios Pendientes"
  **Entonces** el sistema muestra el listado detallado y habilita las opciones para "Confirmar Intercambio", "Cancelar Intercambio" y el campo "detalle el motivo"

- **Escenario 2:** Éxito al mostrar listado vacío de intercambios pendientes del día
       **Dado** que el usuario owner con email owner@gmail.com con un listado vacío de intercambios pendientes durante el día
    **Cuando** presiona el botón "Listar Intercambios Pendientes"
      **Entonces** El sistema informa que "No hay intercambios pendientes para el día de hoy."
```
</details>


<details><summary>27) Confirmar Intercambio</summary>

```markdown
# Título
Como usuario colaborador o owner
Quiero confirmar un intercambio pendiente del día
Para registrar la confirmación del intercambio realizado

# Criterios de aceptación
- **Escenario 1:** Éxito al confirmar el intercambio pendiente
**Dado** un usuario colaborador con email colaborador@gmail.com y una oferta pendiente a intercambio 
**Cuando** selecciona "Confirmar intercambio"
**Entonces** el sistema informa "Intercambio confirmado con éxito", cambia el estado de la oferta a finalizada, cambia la descripción de la oferta a "Intercambio confirmado con éxito", cambia la visibilidad de las publicaciones involucradas a "eliminada", notifica por email a los usuarios ofertante y solicitante, lo registra en el historial de intercambios y lo redirige a intercambios pendientes del día.
```
</details>


<details><summary>28) Listar Historial de Intercambios</summary>

```markdown
# Título
Como Usuario Colaborador o Usuario Owner
quiero ver el listado del historial intercambios 
para ver los intercambios que se realizaron o no.

## Criterios de aceptación
- **Escenario 1:** Éxito al mostrar listado
**Dado** que el usuario colaborador colaborador@gmail.com con una sesión iniciada y el listado de historial de intercambios no está vacío
**Cuando** presiona el botón "Listar historial de intercambios" 
**Entonces** el sistema muestra en pantalla el listado de intercambios realizados

- **Escenario 2:** Éxito al mostrar listado vacío
**Dado** que el usuario colaborador colaborador@gmail.com con una sesión iniciada y el listado de historial de intercambios está vacío
**Cuando** presiona el botón "Listar historial de intercambios"
**Entonces** el sistema muestra "No existen intercambios realizados en el sistema".
```
</details>


<details><summary>29) Cancelar Intercambio</summary>

```markdown
# Título
Como usuario colaborador o usuario owner
Quiero Cancelar un intercambio del día
Para registrar la cancelación del intercambio no realizado

## Criterios de aceptación
- **Escenario 1:** Éxito al Cancelar el Intercambio pendiente
**Dado** un usuario colaborador con email colaborador@gmail.com, una oferta pendiente a intercambio y una descripción "No estuvieron de Acuerdo"
**Cuando**  ingresa "detalle el motivo": "No estuvieron de acuerdo" y presiona "Cancelar intercambio" 
**Entonces** el sistema informa "Intercambio cancelado con éxito", cambia el estado de la oferta a finalizada, notifica por email a los usuarios ofertante y solicitante, almacena la descripción de la cancelación, lo registra en el historial de intercambios y lo redirige a intercambios pendientes del día.
```
</details>


<details><summary>30) Filtrar Colaborador</summary>

```markdown
## Título
- **Como** Usuario Owner
**quiero** filtrar el listado de los usuarios colaboradores por email mediante una cadena
**para** poder obtener un listado filtrado de los usuarios que coinciden con la cadena ingresada.

## Reglas de negocio

## Criterios de aceptación

- **Escenario 1:** Filtrado de listado éxitoso 
  **Dado** que el usuario owner con email "owner@gmail.com" que ha iniciado sesión y hay usuarios colaboradores con un mail que coincide con la cadena "colaborador2". 
  **Cuando** ingresa "Filtrar por email" : "colaborador2"
  **Entonces** el sistema muestra el listado de usuarios colaboradores que comiencen con la cadena "colaborador2"
  
- **Escenario 2:** Filtrado de listado éxitoso 
  **Dado** que el Usuario Owner con email "owner@gmail.com" que ha iniciado sesión y no hay usuarios colaboradores con un mail que coincide con la cadena "austin"
    **Cuando** ingresa "Filtrar por email" : "austin"
  **Entonces** El sistema muestra el mensaje 'No existen coincidencias'
```
</details>


<details><summary>31) Detallar Oferta Enviada</summary>

```markdown
### Título

**Como** usuario general
**Quiero** ver el detalle de la oferta enviada
**Para** consultar su estado

### Criterios de aceptación

- **Escenario 1:** Éxito al detallar oferta enviada
  **Dado** un usuario general con email general@gmail.com y una oferta enviada
  **Cuando** selecciona la oferta en la lista de ofertas recibidas
  **Entonces** el sistema muestra la información detallada de la oferta enviada y su estado actual
```
</details>


<details><summary>32) Eliminar Mi Publicación</summary>

```markdown
## Titulo
- **Como** Usuario General
- **Quiero** eliminar mi publicación
- **Para** que no se encuentre en el sistema

## Regla de Negocio
- La publicación no debe tener ofertas recibidas pendientes
- La publicación no debe tener una oferta aceptada

## Criterios de aceptación

**Escenario 1:** Éxito al eliminar mi publicación sin ofertas pendientes y sin una oferta aceptada
  **Dado** que el usuario general con mail "general@gmail.com" en su publicación que existe, la cual no posee ofertas pendientes y no posee una oferta aceptada.
  **Cuando** presiona el botón de "Eliminar" y acepta la operación
  **Entonces** el sistema elimina la publicación, informa al usuario "La publicación ha sido eliminada correctamente." y redirecciona a sus publicaciones

**Escenario 2:** Fallo al eliminar mi publicación con ofertas pendientes
  **Dado** que el usuario general con mail "general@gmail.com" en su publicación que existe, la cual posee ofertas pendientes
  **Cuando** presiona el botón de "Eliminar" y acepta la operación
  **Entonces** el sistema informa al usuario "No Puedes Eliminar esta Publicacion ya que tenes ofertas pendientes." y redirecciona al listado de ofertas recibidas. 

**Escenario 3:** Éxito al cancelar eliminar mi publicación
   **Dado** que el usuario general con mail "general@gmail.com" en su publicación que existe
   **Cuando** presiona el botón de "Eliminar" y cancela la operación
   **Entonces** el sistema cancela la operación
```
</details>


<details><summary>33) Eliminar Publicación</summary>

```markdown
## Titulo
- **Como** usuario owner 
- **Quiero** eliminar una publicación que incumple las normas
- **Para** que ya no se encuentre disponible

## Reglas de Negocio
- La publicación no debe tener ofertas con estado aceptada

## Criterios de aceptación
- **Escenario 1:** Éxito al eliminar publicación sin ofertas pendientes o aceptadas 
     **Dado** El usuario owner con mail owner@gmail.com en una publicación que existe
     **Cuando** presiona el botón de Eliminar y confirma la operación
     **Entonces** el sistema elimina la publicación, redirige a la página principal , informa "La publicación ha sido eliminada correctamente" y notifica por email al usuario General que su publicación fue eliminada por un administrador.

- **Escenario 2:** Éxito al eliminar publicación con ofertas pendientes
     **Dado** El Usuario owner con mail owner@gmail.com en una publicación que existe
     **Cuando** presionar el botón de Eliminar y confirma la operación
     **Entonces** el sistema cancela las ofertas recibidas o enviadas en estado pendiente, cambia el estado de la oferta a "cancelada" y la descripcion a "La oferta fue cancelada por la eliminacion de La publicacion (titulo de la publicacion)", notifica por email al usuario solicitante u ofertante (según corresponda) que la oferta fue cancelada, elimina la publicación, redirige a la página principal, informa "La publicación ha sido eliminada correctamente." y notifica por email al usuario General que su publicación fue eliminada por un administrador.

- **Escenario 3:** Éxito al cancelar eliminar publicación  
     **Dado** El usuario owner con mail owner@gmail.com en una publicación que existe  
     **Cuando** presionar el botón de Eliminar y cancela la operación  
     **Entonces** el sistema cancela la operación.
```
</details>

---

## Historias de Usuario 3ra Demo

<details><summary>34) Listar todas las donaciones</summary>

```markdown
## Título
- **Como** Usuario Owner 
  **quiero** ver el listado de las donaciones registradas en el sistema 
  **para** poder consultarlo y administrarlo.

## Criterios de aceptación
- **Escenario 1:** Éxito al mostrar donaciones
  **Dado** el usuario Owner con email "owner@gmail.com" que ha iniciado sesión y que existen donaciones
  **Cuando** selecciona la opción del menú "Listar Historial de Donaciones"
  **Entonces** el sistema muestra un listado con las donaciones.

- **Escenario 2:** Éxito al mostrar Listado vacío de donaciones
  **Dado** el usuario Owner con email "owner@gmail.com" que ha iniciado sesión y que NO existen donaciones
  **Cuando** selecciona la opción del menú "Listar Historial de Donaciones"
  **Entonces** el sistema informa que "No existen donaciones realizados en el sistema."
```
</details>


<details><summary>35) Registrar donación de producto</summary>

```markdown
### Título

**Como** usuario colaborador o usuario owner
**Quiero** registrar una donación de producto por parte de un usuario registrado o una persona no registrada
**Para** que quede registrado en el sistema

# Regla de negocio
- Un usuario colaborador / Owner no puede realizar una donación.

### Criterios de aceptación
Escenario 1: Éxito al registrar donación de producto donado por un usuario registrado
Dado que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "general@gmail.com" el cual se encuentra registrado y pertenece a un usuario general
Cuando selecciona la opción "Registrado" e ingresa email: "general@gmail.com", descripción: "Arroz" y selecciona la categoría del producto: "Comida" 
Entonces el sistema registra la donación del producto, notifica por email al usuario general y al owner, actualiza el historial de mis donaciones, actualiza el historial de todas las donaciones e informa el éxito de la operación.

Escenario 2: Éxito al registrar donación de producto donado por una persona no registrada
Dado que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "general@gmail.com" el cual se encuentra registrado y pertenece a un usuario general
Cuando selecciona la opción "No registrado" e ingresa email: "general@gmail.com", Nombre: "Pepe", Apellido: "Pérez", Descripción: "Arroz", selecciona la categoría del producto: "Comida".
Entonces el sistema registra la donación del producto, notifica por email al donante y al owner, actualiza el historial de mis donaciones, actualiza el historial de todas las donaciones e informa el éxito de la operación.

Escenario 3: Fallo al registrar donación de producto por un usuario no registrado.
Dado que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "general@gmail.com" el cual NO se encuentra registrado
Cuando selecciona la opción "Registrado" e ingresa email: "general@gmail.com", descripción: "Arroz" y selecciona la categoría del producto: "Comida"
Entonces el sistema informa "Usuario no registrado. Por favor, complete los datos requeridos." y no registra el producto.

Escenario 4: Fallo al registrar donación en efectivo por una persona con email registrado.
Dado que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "general@gmail.com" el cual se encuentra registrado y pertenece a un usuario general
Cuando selecciona la opción "No registrado" e ingresa email: "general@gmail.com", Nombre: "Pepe", Apellido: "Pérez", Descripción: "Arroz", selecciona la categoría del producto: "Comida".
Entonces el sistema informa "El Usuario ya se encuentra registrado. Complete los campos como corresponde." y no registra el producto.

Escenario 5: Fallo al registrar donación de producto por un usuario colaborador.
Dado que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "colaborador2@gmail.com" el cual se encuentra registrado y pertenece a un usuario colaborador
Cuando selecciona la opción "No registrado" e ingresa email: "colaborador2@gmail.com" Nombre: "Pepe", Apellido: "Pérez", Descripción: "Arroz", selecciona la categoría del producto: "Comida".
Entonces el sistema informa "El donante no puede ser ni Dueño, ni Colaborador. Complete los campos como corresponde." y no registra el producto.
```
</details>

<details><summary>36) Listar mi historial de donaciones</summary>

```markdown
## Título
 **Como** Usuario general 
 **quiero** ver mi historial de donaciones 
 **para** tener un registro de las donaciones que realice 
 
## Criterios de aceptación
- **Escenario 1:** Éxito al mostrar mis donaciones
  **Dado** el usuario general con email "general@gmail.com" que ha iniciado sesión y que realizo donaciones
  **Cuando** selecciona la opción del menú "Listar Mi Historial de Donaciones"
  **Entonces** el sistema muestra un listado con todas las donaciones del usuario.
  
- **Escenario 2:** Éxito al mostrar Listado vacío de donaciones
  **Dado**el usuario general con email "general2@gmail.com" que ha iniciado sesión y que NO realizo donaciones
  **Cuando** selecciona la opción del menú  "Listar Mi Historial de Donaciones"
  **Entonces** el sistema informa que "No hay donaciones disponibles."
```
</details>


<details><summary>37) Penalizar Usuario</summary>

```markdown
## Título
 **Como** Usuario Colaborador o Usuario Owner
 **Quiero** penalizar a un usuario general
 **Para** darle una advertencia

## Regla de negocio

- El usuario debe tener menos de 3 penalizaciones.
- El motivo no puede estar en blanco

## Criterios de aceptación
- **Escenario 1:** Éxito al penalizar usuario con menos de 2 penalizaciones
  **Dado** El Usuario Owner con Mail "hopetrade08@gmail.com", usuarios generales existentes y el usuario General  "general@gmail.com" posee menos de 2 penalizaciones.
  **Cuando** selecciona al usuario "general@gmail.com",  Motivo: "Ausencia en el intercambio" y presiona el botón "Penalizar"
  **Entonces** el sistema incrementa la cantidad de penalizaciones del usuario general reportado ,lo notifica al email que fue penalizado, informa "El usuario fue penalizado con éxito" y lo redirige al listado de usuarios generales
  
- **Escenario 2:** Éxito al penalizar usuario con 2 penalizaciones
  **Dado**El Usuario Owner con Mail "hopetrade08@gmail.com", usuarios generales existentes y el usuario General  "general@gmail.com" posee 2 penalizaciones.
  **Cuando** selecciona al usuario "general@gmail.com",  Motivo: "Otra Ausencia en el intercambio" y presiona el botón "Penalizar"
  **Entonces** el sistema elimina al usuario general, lo notifica por mail, elimina todas sus publicaciones, cancela todas las ofertas enviadas o recibidas en estado pendiente o aceptada, cambia el estado de las ofertas a "cancelada", junto con las descripciones, notifica por email a los usuarios solicitantes u ofertantes (según corresponda) de lo ocurrido, e informa "El usuario fue penalizado y eliminado con éxito".

- **Escenario 3:** Éxito al cancelar operación
     **Dado** El Usuario Owner con Mail "hopetrade08@gmail.com", usuarios generales existentes y el usuario General  "general2@gmail.com" posee menos de 3 penalizaciones.
     **Cuando** selecciona un usuario y presiona el botón de "Cerrar" 
     **Entonces** el sistema cancela la operación.
```
</details>

<details><summary>38) Donar con Tarjeta</summary>

```markdown
#Título
• Como usuario General
• Quiero donar con tarjeta
• Para colaborar con Caritas

#Regla de negocio
• El usuario general DEBE ser titular de la tarjeta.

#Criterios de aceptación

• Escenario 1: Éxito al realizar la donación
Dado el usuario general “Pérez Juan” que tiene la sesión iniciada, con una tarjeta valida que le pertenece, posee fondos y que hay conexión con el servidor bancario
• Cuando ingresa monto: $1000, selecciona tarjeta “VISA”, Numero de tarjeta: “4970110000001029”, fecha de expiración “05/27”, código de seguridad: “111” y nombre del titular(Como aparece en la tarjeta): "Perez Juan" y presiona “Donar”
Entonces el sistema registra el pago, notifica por email al usuario general y al owner, actualiza el historial de mis donaciones, actualiza el historial de todas las donaciones e informa el éxito de la operación.

• Escenario 2: Fallo al realizar la donación por fondos insuficientes
Dado el usuario general “Pérez Juan” que tiene la sesión iniciada, con una tarjeta valida que le pertenece, NO posee fondos y que hay conexión con el servidor bancario
• Cuando ingresa monto: $1000, selecciona tarjeta “VISA”, Numero de tarjeta: “4970110000001029”, fecha de expiración “05/27”, código de seguridad: “111” y nombre del titular(Como aparece en la tarjeta): "Perez Juan" y presiona “Donar”
Entonces el sistema informa “El monto ingresado supera el saldo de la tarjeta.” Y no registra el pago.

• Escenario 3: Fallo al registrar donación por datos de la tarjeta inválidos
Dado el usuario general “Pérez Juan” que tiene la sesión iniciada, con una tarjeta que le pertenece con código de seguridad "333" y que hay conexión con el servidor bancario
• Cuando ingresa monto: $1000, selecciona tarjeta “VISA”, Numero de tarjeta: “4970110000001029”, fecha de expiración “05/27”, código de seguridad: “111” y nombre del titular(Como aparece en la tarjeta): "Perez Juan" y presiona “Donar”
Entonces el sistema informa "Los datos de la tarjeta son inválidos." y no registra el pago.

• Escenario 4: Fallo al registrar donación, la tarjeta no le pertenece
Dado el usuario general “Diaz Bruno” que tiene la sesión iniciada, con una tarjeta valida que NO le pertenece, el titular es “Perez Juan” y que hay conexión con el servidor bancario
• Cuando ingresa monto: $1000, selecciona tarjeta “VISA”, Numero de tarjeta: “4970110000001029”, fecha de expiración “05/27”, código de seguridad: “111” y nombre del titular(Como aparece en la tarjeta): "Perez Juan" y presiona “Donar”
Entonces el sistema informa “La donación debe hacerse con una tarjeta a su nombre” Y no registra el pago.

• Escenario 5: Fallo al registrar donación por error en la conexión con el servidor bancario
Dado el usuario general “Pérez Juan” que tiene la sesión iniciada, con una tarjeta valida que le pertenece, posee fondos y que NO hay conexión con el servidor bancario
• Cuando ingresa monto: $1000, selecciona tarjeta “VISA”, Numero de tarjeta: “4970110000001029”, fecha de expiración “05/27”, código de seguridad: “111” y nombre del titular(Como aparece en la tarjeta): "Perez Juan" y presiona “Donar”
Entonces el sistema informa “Fallo la conexión con el banco.” Y no registra el pago.
```
</details>

<details><summary>39) Registrar donación en efectivo</summary>

```markdown
### Título

**Como** usuario colaborador o usuario Owner
**Quiero** registrar una donación en efectivo por parte de un usuario registrado o una persona no registrada 
**Para** que quede registrado en el sistema

# Regla de negocio
- Un usuario colaborador / Owner no puede realizar una donación.

### Criterios de aceptación

- **Escenario 1:** Éxito al registrar donación en efectivo donado por un usuario registrado
  **Dado** que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "general@gmail.com" el cual se encuentra registrado y pertenece a un usuario general
  **Cuando** selecciona la opción "Registrado" e ingresa email: "general@gmail.com" y monto de la donación: 1000
  **Entonces** el sistema registra la donación en efectivo, notifica por email al usuario general y al owner, actualiza el historial de mis donaciones, actualiza el historial de todas las donaciones e informa el éxito de la operación.

- **Escenario 2:** Éxito al registrar donación en efectivo donado por una persona no registrada
  **Dado** que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "general@gmail.com" el cual se encuentra registrado y pertenece a un usuario general
  **Cuando** selecciona la opción "No registrado" e ingresa email: "general@gmail.com", nombre: "Juan", apellido: "Martínez", teléfono: 221122112  y monto: 1000.
  **Entonces** el sistema registra la donación en efectivo, notifica por email al usuario general y al owner, actualiza el historial de mis donaciones, actualiza el historial de todas las donaciones e informa el éxito de la operación.

- **Escenario 3:** Fallo al registrar donación en efectivo por un usuario no registrado.
  **Dado** que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "general@gmail.com" el cual NO se encuentra registrado
  **Cuando** selecciona la opción "Registrado" e ingresa email: "general@gmail.com" y monto de la donación: 1000
  **Entonces** el sistema informa "El usuario no se encuentra registrado. Complete los campos como corresponde." y no registra el pago.

- **Escenario 4:** Fallo al registrar donación en efectivo por una persona con email registrado.
  **Dado** que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "general@gmail.com" el cual se encuentra registrado y pertenece a un usuario general
  **Cuando** selecciona la opción "No registrado" e ingresa email: "general@gmail.com", nombre: "Juan", apellido: "Martínez", teléfono: 221122112 y monto de la donación: 1000
  **Entonces** el sistema informa "El Usuario ya se encuentra registrado. Complete los campos como corresponde." y no registra el pago.

- **Escenario 5:** Fallo al registrar donación en efectivo por un usuario colaborador.
  **Dado** que un usuario colaborador con email "colaborador@gmail.com" que posee su sesión iniciada y el mail "colaborador2@gmail.com" el cual se encuentra registrado y pertenece a un usuario colaborador
  **Cuando** selecciona la opción "Registrado" e ingresa email: "colaborador2@gmail.com" y monto de la donación: 1000
  **Entonces** el sistema informa "El donante no puede ser ni Dueño, ni Colaborador. Complete los campos como corresponde." y no registra el pago.
```
</details>

<details><summary>40) Filtrar donaciones</summary>

```markdown
## Título
- **Como** Usuario Owner 
**quiero** filtrar entre dos fechas y/o por tipo el listado de las donaciones registradas en el sistema
**para** poder verificarlo según un tipo de filtrado, verlo y administrarlo.

## Criterios de aceptación

- **Escenario 1:** Éxito al mostrar Listado filtrado por tipo de donación entre dos fechas 
  **Dado**  el usuario owner con email "hopetrade08@gmail.com" que ha iniciado sesión, el tipo de donación "efectivo",  la fecha de inicio "30/01/2024" que no es mayor a la fecha de fin, la fecha de fin: "30/02/2024" que no es futura al presente y que hay donaciones en efectivo en el rango de fechas.
  **Cuando** selecciona el tipo de donación "Efectivo", las fechas "30/01/2024" , "30/04/2024" y presiona "Filtrar por Fecha"
  **Entonces** el sistema muestra el listado de las donaciones pertenecientes al tipo de donación registradas entre las dos fechas.

- **Escenario 2:** Éxito al mostrar listado filtrado vacío de donaciones por tipo de donación entre dos fechas
  **Dado**  el usuario owner con email "owner@gmail.com" que ha iniciado sesión, el tipo de donación "efectivo",  la fecha de inicio "30/01/2024" que no es mayor a la fecha de fin, la fecha de fin: "30/02/2024" que no es futura al presente y que NO hay registro de donaciones entre las fechas pertenecientes al tipo de donación.
  **Cuando** selecciona el tipo de donación "Efectivo", las fechas "30/01/2024" , "30/04/2024" y presiona "Filtrar por Fecha"
  **Entonces** el sistema informa que no existen coincidencias.

- **Escenario 3:** Fallo listado filtrado por fecha futura al presente
    **Dado**  el usuario owner con email "owner@gmail.com" que ha iniciado sesión, el tipo de donación "efectivo", la fecha de inicio "30/01/2024" que no es mayor a la fecha de fin, la fecha de fin: "30/02/2025" que es futura al presente 
  **Cuando** selecciona el tipo de donación "Efectivo", las fechas "30/01/2024" , "30/02/2025" y presiona "Filtrar por Fecha"
  **Entonces** el sistema informa "La fecha no puede ser futura al presente."  
- **Escenario 4:** Fallo listado filtrado por fecha de inicio mayor a fecha de fin.
  **Dado**  el usuario owner con email "owner@gmail.com" que ha iniciado sesión, el tipo de donación "efectivo",  la fecha de inicio "30/04/2024" que ES mayor a la fecha de fin, la fecha de fin: "30/02/2024" 
  **Cuando** selecciona el tipo de donación "Efectivo", las fechas "30/04/2024" , "30/02/2024" y presiona "Filtrar por Fecha"
  **Entonces** el sistema informa "La fecha inicial no puede ser mayor a la fecha final."
```
</details>

<details><summary>41) Eliminar Colaborador</summary>

```markdown
## Titulo
- **Como** usuario owner 
- **Quiero** eliminar un usuario colaborador 
- **Para** que ya no se encuentre en el sistema

## Criterios de aceptación
- **Escenario 1:** Éxito al eliminar usuario colaborador 
     **Dado** El Usuario Owner con Mail "hopetrade08@gmail.com" en el listado de colaboradores y que existen usuarios colaboradores
     **Cuando** selecciona un usuario y presiona el botón de "Eliminar" 
     **Entonces** el sistema elimina al usuario colaborador e informa "Usuario colaborador eliminado correctamente"
- **Escenario 2:** Éxito al cancelar la eliminación de usuario colaborador
     **Dado** El Usuario Owner con Mail "hopetrade08@gmail.com" en el listado de colaboradores y que existen usuarios colaboradores
     **Cuando** selecciona un usuario y presiona el botón de "Cerrar" 
     **Entonces** el sistema cancela la operación.
```
</details>

<details><summary>42) Eliminar Usuario</summary>

```markdown
## Titulo
- **Como** usuario owner 
- **Quiero** eliminar un usuario general
- **Para** que ya no se encuentre en el sistema

## Criterios de aceptación
- **Escenario 1:** Éxito al eliminar
     **Dado** El Usuario Owner con Mail "hopetrade08@gmail.com" y hay usuarios generales existentes
     **Cuando** selecciona un usuario, 
 Motivo: "Incumplimiento de las normas" y presiona el botón "Eliminar"
     **Entonces** el sistema elimina al usuario general, lo notifica por mail,  elimina todas sus publicaciones, cancela todas las ofertas enviadas o recibidas en estado pendiente o aceptada, cambia el estado de las ofertas a "cancelada", junto con las descripciones, notifica por email a los usuarios solicitantes u ofertantes (según corresponda) de lo ocurrido, e informa "Usuario General eliminado correctamente".

- **Escenario 2:** Éxito al cancelar la eliminación de usuario general
     **Dado** El Usuario Owner con Mail "hopetrade08@gmail.com" y hay usuarios generales existentes
     **Cuando** selecciona un usuario general y presiona el botón "Cerrar" 
     **Entonces** el sistema cancela la operación.
```
</details>