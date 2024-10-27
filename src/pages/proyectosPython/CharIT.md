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

- [Repositorio](https://github.com/Fabian-Martinez-Rincon/Char-IT)

## Char-IT

### Integrantes

Fabian Martinez Rincon | Lucia Lamella | Lucas Gallardo | Myles Barker
--- | --- | --- | ---
![@FabianMartinez](https://avatars.githubusercontent.com/u/55964635?s=150&v=1) | ![@luciana678](https://avatars.githubusercontent.com/luciana678?s=150&v=1) | ![@Lucas-Andres-GF](https://avatars.githubusercontent.com/u/91075804?s=150&v=1) | ![@KinnaGt](https://avatars.githubusercontent.com/Austin-Myles?s=150&v=1)
[@fabian-martinez-rincon](https://github.com/fabian-martinez-rincon) | [@luciana678](https://github.com/luciana678) | [@Lucas-Andres-GF](https://github.com/Lucas-Andres-GF) | [@Austin-Myles](https://github.com/Austin-Myles)

---

### Para Colaborar

- Para asegurarnos de que estamos en la rama main, antes de crear una mara
    ```bash
    git branch
    ```
- Si ya creamos una rama y queremos ir a esa, usamos
    ```bash
    git checkout {nombre-rama}
    ```
- Si no existe la rama, la creamos con un nombre descriptivo
    ```bash
    git branch {nombre-rama} o git checkout -b {nombre-rama}  //Para movernos despues de crearla
    ```
- Una vez que estamos en la rama, hacemos un pull para asegurarnos de que estamos actualizados
    ```bash
    git pull origin main
    ```
- Hacemos la pull request
    ```bash
    git add .
    git commit -m "Mensaje descriptivo"
    git push origin {nombre-rama}
    ```

---

### Requirements

- [Python 3.8.10](https://www.python.org/downloads/release/python-3810/)

---

### Instalación

- Paso 1 Creamos el entorno Virtual
    ```bash
    python -m venv .venv
    ```
- Paso 2 Activamos el entorno
    ```bash
    .venv\Scripts\activate
    ```
- Dependiendo el idioma
    ```bash
    .venv/Scripts/activate
    ```
- En caso de no tener permisos
    ```bash
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```
- Instalamos las dependencias (Solo hace falta la primera vez)
    ```bash
    pip install -r requirements.txt -r requirements-dev.txt
    ```
- No hace falta
    ```bash
    livetw init -d
    livetw build
    ```

---

### Ejecución

```bash
flask resetdb
flask seeddb
```

Para correr la aplicación

```bash
livetw dev
```

o los siguientes dos
```bash
flask run --debug
livetw dev --no-flask
```

----

Para configurar las variables de entorno, copiamos y renombramos el archivo `.env.example` a `.env` y configuramos las variables de entorno.

```json
DB_PASS = "password_example"
DB_USER = "user_example"
DB_NAME = "database_example"
DB_HOST = "host_example"
```

---

### Extensiones Recomendadas

- Pretier - Code formatter
- Headwind
- Error Lens
- Auto Close Tag
- Auto Rename Tag
- Image preview

---

#### Rutas para la primera demo

- `/eliminar_publicaciones`
- `/eliminar_colaboradores`
- `/eliminar_generales`

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

---

## Entrevista 1

- Proyecto: HopeTrade
- Identificación: 1


---

- **Preparada por**: Fabian Martinez Rincon, Lucas Gallardo, Luciana Elizabeth Lamella, Austin Myles Barker
- **Fecha de preparación**: 16/03/2024
- **Fase en la que se encuentra el proyecto**: Elicitación de Requerimientos inicial
- **Documentos a que se hacen referencias**:  Excel con información de las filiales. Excel con categorías, Imágenes informativas. Documentos con Ejemplos de donaciones

---

- Lugar de la entrevista:UNLP Informática Aula 1.
- Fecha/Hora/Duración de la entrevista: 
- 11/03/2024 16:50 con una duración de 40 minutos

---

- **Entrevistado**: Mario 
- **Rol**: Representante
- **Objetivo a lograr con esta entrevista**: Tener un panorama general sobre los requerimientos del nuevo software idealizado por el cliente.

### Cuerpo de la entrevista ( preguntas con sus respuestas):

**¿Qué es Cáritas y cuál sería su misión principal?**

Bueno, les cuento, yo soy Mario, soy representante de varias filiales acá en La Plata, de Cáritas.
Justamente junto con María, que puede ser como mi colega o la persona que está en el mismo rango que yo. Nosotros estamos un poco en el día a día del manejo de las filiales, les cuento. Por lo general la tarea que se hace es recibir productos o artículos que se quieran donar, a gente que lo necesite, y después nosotros los distribuimos en base a las necesidades, ya sea x barrio que sabemos que necesita ayuda, familias puntuales, somos como ese intermediario.

**¿Qué objetivos tienen en mente sobre la idea, cuál sería el objetivo principal tras la idea que se les ocurrió?**

Nuestra idea es, por un lado, poder hacer algo, no sé si un sistema, una aplicación, supongo que ustedes, eso lo tendrán un poco más claro. Pero bueno, la idea es hacer algo que nos permita ayudar un poco para el control de las filiales, un poco el manejo de qué es lo que entra, las donaciones que recibimos, ese tipo de cosas. También poder implementar una idea que ya hace tiempo tenemos, que es la posibilidad de que personas que quieran puedan realizar intercambios de productos. 

Por ejemplo, no sé, cambiar algo por algo, por ejemplo, una persona que tiene, no sé, una heladera, que la heredó de un suegro. Bueno, agarra y la puede publicar ahí para intercambiar por otro electrodoméstico que necesite. Y ahí puede haber gente que esté dispuesta a recibir la heladera y entregar otro electrodoméstico, pero por medio de nosotros, O sea, nosotros como filial o filiales, seríamos los intermediarios de que se está realizando ese intercambio.

**¿Cuál sería el usuario final al que ustedes van dirigidos? A niños, a adultos, a personas en general?**

Bueno como por un lado están las donaciones de dinero y demás, para eso es necesario que sean mayor de edad.

**¿Cualquier persona podría estar viendo la página sin importar si es mayor o menor de edad?**

No, para acceder a la página me tengo que autenticar (Iniciar Sesión). Una vez que me auténtico, puedo ver las publicaciones de la gente que quiere intercambiar.

**¿Se debería estar registrado para poder realizar una donación?**

Las donaciones de dinero se van hacer por medio de la aplicación, tienen que estar identificados por una cuestión lógica.

En la página principal, antes de que se identifique la persona ¿Qué se quiere mostrar? 

Podría ser una página informativa. Les puedo pasar algunas fotos que tenemos y armar algo ahí con información de lo que son las filiales,  Dónde están, contar sobre las funcionalidades y que puedan acceder a registrarse o iniciar sesión.

**¿Tienen alguna preferencia de plataforma o dispositivo que quieran usar? ¿como una computadora, celular?**

Nosotros en cada filial tenemos una computadora. Obviamente la gente lo que más uso es el celular, pero bueno, entiendo yo que es lo mismo tener una página y abrir la de la página. hasta ahí llega mi conocimiento de tecnología.

**¿Cuál sería el objetivo concreto que tratan de solucionar con la aplicación?**

Nos agrega un poco de organización a las filiales para lo que es el tema de gestionar las donaciones, para poder ver quién donó, cuándo donó. Y bueno, eso también nos va a dar cierta transparencia de lo que recibimos hoy en día. Si bien tratamos de llevarlo en un excel de donación, a veces se traspapelan o se hace difícil juntar todo porque hay varias filiales y cada una tiene lo suyo. El poder tener todo en un mismo lugar y que lo haga todo el mismo sistema estaría buenísimo.

**¿Nos podrían brindar algún recurso interno como para estar orientados o para poder ver más o menos cómo se hace de forma manual para nosotros identificar qué punto se puede automatizar?**

Si, no hay drama.

**¿Cómo desea que se vea la interfaz, cuentan con algún sistema anterior?**

Hoy sistema no tenemos, estuvimos el otro día con María viendo cómo hacer un logo que identifique al sistema. Porque estaría bueno que un poco se independice de nuestras filiales. Por si el día de mañana se quiere expandir a otro lado. Todavía no tenemos el nombre ni el logo, pero bueno, en cuanto lo tengamos se los puedo pasar. 

En cuanto al software, si usted tuviera una varita mágica y dice este sería el software que yo quiero.

**¿Cómo te lo imaginas?**

Bueno, el tema de las publicaciones. Cuando se me ocurrió la idea pensé en algo parecido a Marketplace. Así me lo imaginaba yo en el tema de las publicaciones.

El intercambio se hace en la filial, en el momento que se ponen de acuerdo para intercambiar por el sistema, tienen que acordar un punto de encuentro que va a ser una de nuestras filiales. Luego desde la filial (en físico) alguien puede confirmar que se hizo ese intercambio. Estaría bueno que eso quede registrado.

En el momento que se confirma el intercambio, ya no aparece más la publicación, pero sí queda registrado en el sistema que queda pendiente el intercambio.

**¿Quien maneja el tema de donaciones e intercambios en la filial (además de ustedes dos), hay algún colaborador?**

Tenemos colaboradores que son personas que están en el día a día, que van cuando tienen tiempo. Entonces eso es muy variable.

El colaborador recibe a la persona que quieren donar, le toma  los datos y registra la misma.

Además puede registrar los intercambios. En el caso de que falle el intercambio se detalla brevemente el motivo.

Al igual que nosotros, los colaboradores quizás podrían dar de baja las publicaciones que no correspondan.

**¿Cuáles desearía que sean las funcionalidades de los administradores?**

Nosotros , María y yo, podríamos registrar a personas que son colaboradores, ya que va cambiando día a día, quizás hay una persona nueva, estaría bueno que pueda usar el sistema.

Una de las ideas más necesarias es poder ver el historial de donaciones. Pero eso solo lo podemos ver solo Maria y yo, no los colaboradores.

Poder ver en específico, por ejemplo, tal día ¿Quién donó? ¿Cuánto?, tener un listado.

**¿Una vez que se sube una publicación, se puede eliminar?**

Si.

**¿Cómo sería la elección de la filial para el intercambio?**

Cómo me lo había imaginado, la gente al momento de ponerse de acuerdo en hacer el intercambio, puede elegir especificando la filial. O mismo la persona que ofrece,  el intercambio me puede decir te ofrezco tal cosa, en tal día, en tal filial, y yo puedo aceptar o rechazar. Le puedo decir que se me complica ir a tal filial y podemos ir a otra. También cambiar el día por conveniencia.

**¿Poseen algún excel con la ubicación de las filiales?**

Si, después les paso el excel.

**¿Una publicación estaría atada a una filial específica?**

No, no se especifica la filial, al momento de hacer el intercambio se elige la filial. Más o menos como funciona  mercado libre, que uno elige donde retirar el producto.

**¿Le gustaría algún filtro para las publicaciones?**

Por categoría de producto, por ejemplo: electrodomésticos, ropa, juguetes, comida, otros, etc. Porque por lo general se reciben cosas muy variadas. Yo le paso las categorías de productos que más recibimos. si a ustedes se les ocurre alguna están libres de agregar.

**¿Cómo se manejaría el sistema de propuesta de intercambio?**

Como me lo imagino, es que la publicación no pertenece a una filial, sino que pertenece al sistema y en el momento que otra persona quiere hacer un intercambio, ofrece algo (En la publicación), un artículo a cambio. Y la misma persona que oferta puede incluir la filial en la cual quiere el intercambio e incluso el día y la hora, y después la otra persona puede aceptar o rechazar si le queda cómodo o no. En el momento que se acepta el intercambio se hace donde acordaron.

**¿Qué información nos brindaría?**

Demostración de una donación( ya sea en dinero o en algún producto)
categorías de productos que más se reciben para el filtro
-	Nombre de la aplicación.
-	Logo de la aplicación y sus respectivos colores.
-	Excel con las ubicaciones de las filiales.
-	Fotos de las filiales.
-	Información sobre ustedes y a que se dedican.
-	Horario de atención de las filiales.

**¿Cómo sería la donación de dinero?**

Por medio de la aplicación es mediante una tarjeta.
Presencial sería utilizando efectivo, en este caso, un colaborador se encargaría de tomar los datos, registrar la donación y recibir el dinero.

**¿Cómo sería la donación de productos?**

Únicamente en la filial, la persona se acerca y dona el producto, el colaborador se encarga de tomar los datos y registrar la donación.

Informar en la página principal que en caso de querer donar un producto, se acerque a la filial de su preferencia.

**¿Qué debería pasar para que usted considere que el proyecto fue exitoso?**

Nosotros apuntamos a que la gente que no puede comprarse determinados productos, pueda acceder a ellos mediante el intercambio. Poder llegar a que muchas personas incorporen esa metodología estaría buenísimo.

---

#### Conclusión de la entrevista

Informe final:

El cliente requiere una página de intercambios que incluya funcionalidades para realizar donaciones y registrarlas por filial, así como un sistema de gestión para ambas actividades. Se obtuvo como regla de negocio que para utilizar el sistema se debe ser mayor de edad.

Se identificaron las siguientes hu a grandes rasgos

-	Iniciar Sesión
-	Registrar Usuario
-	Registrar Intercambio en la filial
-	Registrar cualquier tipo de donación en la filial
-	Registrar Colaboradores
-	Ver Historial de donaciones (por parte del owner)
-	Ofertar Producto
-	Eliminar Publicación
-	Responder Oferta
-	Realizar Donación de Producto
-	Realizar Donación de Dinero en la Filial
-	Realizar Donación de Producto en la Filial

Información obtenida en detalle: 
-	Los datos que se debe ingresar para ofertar un intercambio son: Filial, Hora y Fecha.
-	Para realizar una donación en la web se puede usar una tarjeta de crédito/débito y para realizarla en persona se usa efectivo en la filial. 
-	Una filial cuenta con su dirección y hora de atención. 
-	Los productos ya sean donaciones o intercambios se corresponden a las categorías : electrodomésticos, ropa, juguetes, comida, otros, etc
-	Mario y Maria pueden crear colaboradores
-	Solo Mario y María pueden ver el historial de Donaciones
-	Una persona antes de poder ingresar en la página, debe autenticarse. Este solo podrá ver una página informativa.

Información pendiente:
-	Datos para registro.
-	Datos para realizar una donación en la filial.
-	Datos para publicar un producto.
-	Datos de confirmación de intercambio en la filial.
-	Datos de inicio de sesión.
-	Datos para mostrar filiales.
-	Datos que debe ver el usuario común en una publicación.
-	Términos y condiciones para registrarse. 
-	Datos para registrar una donación en el sistema de gestión por la web.

---

Documentos que se deben entregar: 

-	Vista previa con funcionalidades básicas.
-	Documento Entrevista 1

Documentos que debe entregar el entrevistado: 
-	Logo de la aplicación y sus respectivos colores.
-	Excel con las filiales y sus ubicaciones.
-	Fotos de las filiales. (buscamos)
-	Información sobre ustedes y a que se dedican.
-	Horario de atención de las filiales.
-	Categorías en detalle. 
-	Documentos con Ejemplos de donaciones

Próxima entrevista: 18/03/2024

---

## Entrevista 2

- Proyecto: HopeTrade
- Identificación: 1

---

- **Preparada por**: Fabian Martinez Rincon, Lucas Gallardo, Luciana Elizabeth Lamella, Austin Myles Barker
- **Fecha de preparación**: 20/03/2024
- **Fase en la que se encuentra el proyecto**: Elicitación de Requerimientos inicial
- **Documentos a que se hacen referencias**:  Entrevista 1, Diseño de entrevista 1,  Excel con información de las filiales. Excel con categorías, Imágenes informativas.

---

- **Lugar de la entrevista**: UNLP Informática Aula 1.
- **Fecha/Hora/Duración de la entrevista**: 18/03/2024 16:50 con una duración de 40 minutos 

---

- **Entrevistado**: Mario 
- **Rol**: Representante
- **Objetivo a lograr con esta entrevista**: Clarificar, detallar y validar los requerimientos obtenidos en la Entrevista 1 para avanzar hacia una especificación de requerimientos precisa y acordada

---

Cuerpo de la entrevista ( preguntas con sus respuestas):

**Haciendo referencia a la platilla n°1 (página principal):**

**¿Qué te gustaría mostrar en la página principal?**

Podemos poner un poco qué es Cáritas, la ubicación de las filiales y esas cosas. Pero si después se los paso, porque eso todavía tengo que ver y  definir bien qué filiales son las que van a participar.

**¿Sería el horario de atención y dirección?**

Sí, más que nada eso. Un listado con las direcciones. 

Una vez que entras en la página principal tenemos algunas fotos, los horarios y las direcciones. La misma contendrá un botón de Login o Registro. ¿Está de acuerdo?

Si

**A la hora de iniciar sesión, se pide email y contraseña. ¿Está de acuerdo?**

Está bien. 

**A la hora de registrarse, la persona  debe ser mayor de 18 años, que ingrese email, nombre, apellido, contraseña y fecha de nacimiento, ¿eso serían todos los campos necesarios?**

Sí, y le agregaría el número de DNI porque lo necesitamos. 

**Nosotros entendemos que tenemos distintos tipos de usuarios.**

Tenemos lo que sería Mario y María, que son los que le pueden registrar usuarios colaboradores.

**En principio existirá un solo usuario owner, con un email y una contraseña para ingresar. Este usuario crea usuarios colaboradores.**

Sí, está bien

**Además, de los usuarios anteriormente dichos, tenemos el Usuario General**
**Este puede ver el título de la página y las publicaciones.**

Si

**Para que el usuario general pueda subir un producto se le solicitará: Título del Producto, Categoría, Un detalle opcional, una imagen, filiales y horario de preferencia**

El detalle yo no lo pondría opcional porque va a ser donde explique qué es lo que está ofreciendo, porque si no quedará muy vacío en la publicación.

**A la hora de que el usuario general decida modificar su producto ¿Qué campos se le permitirá modificar? ¿Todos los campos o Sólo la descripción?**

Solo se modifica la descripción del producto.

**¿Y en el caso de que haya cargado mal la foto?**

En caso de que el usuario general cargue mal una imagen, tendría que dar de baja la publicación.

**A la hora de eliminar una publicación se realizará una doble confirmación. ¿Está de acuerdo?**

Si

**Al momento de solicitar un intercambio se debe tener el producto a intercambiar subido a la plataforma para ofrecerlo al dueño de la publicación, sin la necesidad de tenerlo a la vista del público general.**

Si, me parece correcto

**En el caso de que el dueño de la publicación rechace la oferta podrá ofertar nuevamente pero como una nueva solicitud, ¿está usted de acuerdo?**

Si

**Al momento de cargar un producto a la plataforma, se dará la opción de publicarlo o guardarlo como privado que puede ofrecer para intercambiar. ¿Está de acuerdo?**

Sisi, estoy de acuerdo

**Cuando se realiza una solicitud, el usuario selecciona: su producto a intercambiar, la filial, hora y fecha en la que está dispuesto a intercambiar. ¿Le gustaría agregar algo más?**

No, con esos campos estaría bien.

**Al recibir una solicitud el publicante tendrá la opción de aceptar o rechazar la oferta. En caso de rechazar deberá detallar el motivo del rechazo para notificar al ofertante y en caso de aceptar se registrará en la plataforma la solicitud de intercambio con el fin de que el representante (owner/colaborador) disponible lo registre.**

Yo lo que haría es que después cada ayudante puede entrar. Cuando entra al sistema tiene asignado un auxiliar. Entonces cuando un ayudante entra al sistema, puede ver los intercambios que hay en el día. Tiene que estar para la filial en la que él está.  Entonces, si hubo un intercambio confirmado para esa filial en el día, cuando llegue el día va a entrar. Es más, podría ser hasta la página inicial, o sea, la página que ve el ayudante ni bien entra un listado de intercambio de Todos los intercambios que se van a hacer en ese mismo día. 

**¿Solamente podrá acceder a las solicitudes del día o también puede acceder a la información solicitudes futuras?**

Puede ser, Pero en ese lugar, que es el lugar donde más movimiento va a haber, o sea, donde él va a estar más aceptando y demás que sean solo los del día. 

**En base a las donaciones que se realizarán mediante la plataforma teníamos pensado utilizar un QR y transferencias con mercadopago o el Banco a su preferencia. Actualmente ¿cómo aceptan las filiales las donaciones?**

Hoy en día aceptamos efectivo o tarjeta. La de QR Mercado Pago está bueno, creo que puede llegar a que más gente vaya a donar o lo haga desde la página. El tema de la transferencia no sé si nos va, nos complica mucho porque para la transferencia vamos a tener que tener como una confirmación del lado nuestro. 

**Lo que se propone con las transferencias es recibir un comprobante de parte del donante para verificar si se recibió la transferencia o no.**

Hacer eso implicaría agregarle más funcionalidades al ayudante y por lo menos en esta primera instancia no lo queremos confundir. Siento que va a ser mucha información. 

**Entonces para cerrar mediante la plataforma solamente se recibirán pagos mediante tarjeta o QR. ¿En la filial se podrá recibir transferencias o únicamente efectivo?**

Si, pero por ahora no lo estamos haciendo lo que es transferencia. Únicamente efectivo. 

**¿El donante tendrá la opción de elegir entre una tarjeta de débito o crédito?**


Sí, sí, sí. 

**¿El usuario puede tener acceso al historial de sus donaciones?**

Si, solo de las suyas. 

**Al acceder a una publicación la información que se podrá ver será el título del producto, una foto, información del producto y el nombre del vendedor.**

¿Se puede agregar ahí como una sección de comentarios?. Al estilo Mercado Libre. Que sea público. O sea, que alguien pueda comentar algo y aparezca ahí. 

Para realizarle preguntas antes de ofertar por él. Por ejemplo, estás ofertando o estás queriendo publicar tu lavarropa y dejas una descripción incompleta, y yo no sé nada de eso. O sea, no sé ni qué modelo es ni nada. Entonces, en la sección de comentarios, preguntar respecto al lavarropa para ver si te quiero ofertar o no. Que la previa a la oferta sea una sección de comentarios, no sería un chat, sería un intercambio de comentarios, comentarios y respuestas con el dueño de la publicación.

**¿Estos comentarios requerirán que sean moderados por los colaboradores?**

En principio no. Vamos a ver cómo se comporta esto, pero en MercadoLibre no hay nadie moderando. Se puede decir lo que le plazca en mercado libre.
vamos a ver qué sale. 

**¿Qué es lo que se quiere mostrar en las estadísticas y quién puede acceder a esta información?**

Solo nosotros podemos ver el historial de donaciones, el owner. Y en base a eso, o sea, lo que ustedes me sugirieron fue como hacer reportes en base a ese historial de, no sé, distintas estadísticas de la donación. Yo me imaginaba como gráficos que detallen no sé cuánto recibieron de cada cosa. 

**Entonces, ¿las Estadísticas van a ser únicamente de las donaciones o también de los intercambios en la plataforma?**

Estadísticas de los intercambios no, no, no. 

**Para las donaciones, ¿le parece bien un gráfico de barras con las fechas y la cantidad de donaciones?**

Puede ser algo así, o puede ser un gráfico de torta. Ahí podría entrar por categoría. No sé. O sea, esto me lo había sugerido. Sino, solo el historial en el que se va a filtrar.

**De acuerdo, entonces únicamente un historial con filtrado por fecha y categoría.**

Si, en un rango de fechas también. 

**En base a los permisos del ámbito administrativo. ¿El colaborador no tiene la funcionalidad de donar y de publicar?**

Ni el owner, ni los colaboradores tampoco, si quieren hacer eso se registran un usuario general.

**A la hora de registrar a los colaboradores ¿se solicitarán los mismos datos que al usuario general?**

No, porque el DNI no lo necesitamos.
El mail, nombre, apellido y contraseña. Pero el tema de la contraseña es que no sé si se puede generar algo aleatorio como para que le llegue al mail y que no se la tenga que poner yo.

**Cuando un colaborador desea registrar una donación presencial, ¿Qué datos se le solicitan al donante?**

Sí la persona está registrada vos la seleccionas y ya está. En caso de que no, el nombre, apellido y un contacto puede ser mail o un celular. El monto o producto, y si es un producto la categoría.

**¿Un colaborador puede eliminar una publicación y registrar donaciones?**

Si, también puede confirmar el intercambio.

**Al realizar el intercambio en la filial el representante sólo puede confirmar o rechazar si se realizó. ¿Está de acuerdo?**

Dijimos, que le aparece a él el intercambio que se va a hacer. Y a ese intercambio lo puede aceptar, si lo acepta en el sistema queda registrado que se hizo. En caso de rechazar poner un detalle donde por ejemplo, se rechazó porque uno de los dos no asistió. Para que quede en el historial que esa persona no asistió.

**En el caso de que un usuario posea un comportamiento indebido, como no asistir a los compromisos planteados, realizar ofertas falsas, etc. ¿Existe la posibilidad de aplicarle una penalización?**

Si, se lo puede suspender por cierto tiempo o incluso darlo de baja del sistema.

**¿Se sabe cuál es el nombre del proyecto?**

Si, se llama “Hope Trade”

---

#### Conclusión de la entrevista

Informe final:  

Se definieron los requisitos de acceso al sistema, la gestión de donaciones y estadísticas, el proceso de intercambios, y las funcionalidades específicas para cada tipo de usuario. Además, se determinó el nombre de la aplicación.

Información obtenida en detalle: 
-	Iniciar sesión
-	mail
-	contraseña
-	Registrar Usuario
-	nombre
-	apellido
-	mail
-	nro dni
-	contraseña
-	Fecha de Nacimiento
-	Registrar una donación de producto en la filial, si está registrado solo se selecciona el usuario y  en caso de no estar registrado:
-	Nombre y apellido del donante
-	Un contacto (mail o teléfono).
-	Si se recibe una donación monetaria, se deberá ingresar el monto y en caso de ser un producto, su categoría. 
-	Una publicación después de ser subida solo se puede modificar la descripción
-	En caso de querer modificar otro campo, se deberá eliminar la publicación que contendrá una doble confirmación.
-	Los usuarios solo pueden intercambiar productos que cargaron previamente en la plataforma.
-	Las donaciones en la plataforma se realizarán con tarjeta (credito o debito) o QR
-	El historial de donaciones solo lo puede ver el usuario owner. Este se podrá filtrar por categoría, fecha o un rango de fechas.
-	Cada vez que un Owner o Colaborador inicia sesión solo podrá ver las solicitudes que se harán para ese mismo día. 
-	Las publicaciones contendrá:
-	El título
-	La imagen
-	Descripción obligatoria
-	Filiales
-	Horarios
-	Sección de comentarios
-	El Owner y el colaborador no pueden realizar donaciones y publicar productos, si quieren hacerlo, deberán registrarse como un usuario general. 
-	En la pagina principal va
-	Información de Cáritas
-	Ubicación de las filiales con la dirección
-	Horario de atención
-	Solo el usuario owner puede registrar colaboradores
-	Solo existe un usuario owner
-	Los usuarios generales tienen la opción de poner un producto oculto para el público general. 
-	Para ofertar un producto se debe realizar una nueva solicitud
-	Para solicitar un intercambio se requiere
-	Mi producto
-	Filial
-	Hora y Fecha para el intercambio
-	En caso de rechazar una solicitud, se deberá informar el motivo del rechazo para notificar al ofertante.
-	En caso de aceptar la solicitud, esta pasa a un registro en nuestra base de datos.
-	En la filial se pueden realizar donaciones de productos y donaciones monetarias sólo en efectivo.
-	El usuario general puede tener acceso al historial de sus donaciones. 
-	Registrar Colaborador
-	Mail
-	Nombre
-	Apellido
-	Contraseña (Se genera de forma aleatoria y se la enviará al mail)
-	Un colaborador puede
-	Eliminar una publicación
-	Registrar donaciones
-	Confirmar o rechazar una solicitud de intercambio.
-	En caso de ser rechazada 
-	Se debe ingresar un detalle
-	Se contabilizará la falta de algún integrante en el intercambio. (En caso de tener 3 faltas se le dará de baja)

Información pendiente: N/A

---

Documentos que se deben entregar: 

- Documento Entrevista 2

Documentos que debe entregar el entrevistado: 
-	Logo de la aplicación y sus respectivos colores.
-	Excel con las filiales y sus ubicaciones.
-	Fotos de las filiales. (buscamos)
-	Información sobre ustedes y a que se dedican.
-	Horario de atención de las filiales.
-	Categorías en detalle. 

Próxima entrevista: n/a

---

### Especificación de Requisitos de Software (SRS)

#### 1) Introducción

a.	Propósito y alcance 

El propósito de este documento es definir los requisitos del software, ya sean funcionales o no funcionales, para el desarrollo del proyecto “Hope Trade”, brindando así como producto final un sistema de organización centralizada para intercambios en las filiales y donaciones.

Este documento está dirigido a Mario y Maria, representantes de varias filiales de Cáritas en La Plata, y a los desarrolladores de este sistema. Se presenta como una base fundamental para el equipo de desarrollo.

b.	Definiciones, acrónimos y abreviaturas a considerar
-	Página web: documento en línea que contiene información programa informático diseñado para ejecutarse en navegadores con uso de internet.
-	 Usuario Visitante: persona que no posee cuenta en el sistema, o en su defecto que no inició sesión en este.
-	 Usuario General: persona que se registró en el sistema e inicio sesión y cuenta con ciertos permisos.
-	 Usuario Colaborador: persona que un usuario owner registró en el sistema e inicio sesión y cuenta con permisos de gestión
-	Usuario Owner: cuenta única ya registrada en el sistema, la cual está destinada al propietario del sistema. Este usuario posee funcionalidades adicionales en comparación con el usuario colaborador y tiene la capacidad de realizar acciones y tomar decisiones clave dentro del sistema.
-	Base de datos: es un conjunto de datos que pertenecen al mismo contexto almacenados sistemáticamente para su posterior uso.
-	Software: programas y aplicaciones que se ejecutan en un sistema informático, computadora o dispositivo electrónico. 
Hardware: los elementos físicos que componen un sistema informático, computadora o dispositivo electrónico. 
-	Filial: Sucursal o local perteneciente a Cáritas donde se realizan actividades de intercambio y donación.
-	Stakeholder: Cualquier persona o grupo que esté relacionada directa o indirectamente con el desarrollo o el resultado del proyecto. Esto incluye a desarrolladores, administradores de proyecto, usuarios finales y clientes.

c.	Referencias

| Nombre del documento | Fecha de Creación | Autor |
| --- | --- | --- |
| Entrevista 1 |	11/03/2024 |	Char-IT |
| Entrevista 2	| 18/03/2024 |	Char-IT |
| Epicas |	18/03/2024	| Char-IT |
Cuestionario “Char-IT”	18/03/2024	Char-IT |

#### 2) Descripción general

a.	Resumen de la idea del producto	

"HopeTrade" es una página web diseñada para facilitar y mejorar la gestión de donaciones y promover el intercambio de productos entre los usuarios en la red de filiales de la organización benéfica Cáritas. El objetivo principal del sistema es centralizar y automatizar los procesos que actualmente se realizan de forma manual como los registros de donaciones, aumentando la eficiencia y la transparencia para todas las filiales involucradas.

b.	Perspectiva del producto
El sistema es una Página Web independiente, ya que no es parte de un sistema mayor.

c.	Características de los usuarios

En el sistema se encuentran los siguientes roles de usuario en conjunto con sus actividades permitidas:
-	Usuario Visitante
  -	Listar Filiales
  -	Iniciar Sesión
  -	Registrar Usuario
-	Usuario General
  -	Listar Filiales
  -	Cerrar Sesión
  -	Abrir Menu
  -	Ver perfil
  -	Editar Perfil
  -	Subir Publicacion
  -	Listar Mis Publicaciones
    -	Editar Publicación
    -	Responder Comentario
    -	Eliminar Mi Publicación
    -	Cambiar Visibilidad
  -	Listar Publicaciones
    -	Detallar Publicación
    -	Ofertar Publicación
    -	Comentar Publicación
  -	Listar Ofertas Recibidas
    -	Detallar oferta Recibida
      -	Aceptar Oferta
      -	Rechazar Oferta
  -	Listar Ofertas Enviadas
    -	Detallar oferta Enviada
  -	Listar Notificaciones
  -	Listar Mi Historial de Donaciones
  -	Donar con Tarjeta
-	Usuario Colaborador
  -	Listar Filiales
  -	Cerrar Sesión
  -	Abrir Menu
  -	Ver perfil
  -	Editar Perfil
  -	Registrar Donación en Efectivo
  -	Registrar Donación de Producto
  -	Listar Intercambios Pendientes
  -	Penalizar Usuario
  -	Listar Usuarios
  -	Filtrar Usuario
-	Usuario Owner
  -	Listar Filiales
  -	Cerrar Sesión
  -	Abrir Menu
  -	Editar Perfil
  -	Ver perfil
  -	Registrar Donación en Efectivo
  -	Registrar Donación de Producto
  -	Listar Intercambios Pendientes
  -	Penalizar Usuario
  -	Listar Usuarios
  -	Filtrar Usuario
  -	Listar Colaboradores
  -	Filtrar Colaborador
  -	Eliminar Colaborador
  -	Registrar Colaborador
  -	Listar Historial de Donaciones
  -	Filtrar Donaciones
  -	Eliminar Usuario
  -	Eliminar Publicación
  -	Listar Publicaciones
d.	Evolución previsible del sistema
-	Implementación de Mercado Pago.
-	Complementación usando estadísticas.
-	Implementación de los mapas para la selección de las filiales

#### 3) Requisitos del Software

Requisitos de Interfaz

a.	Interfaz de Usuario 

La interfaz de usuario es la de una página web, en la que se utiliza una paleta con los siguientes colores: 
-	#e8e8e7: Sombra muy claro de amarillo-verde
-	#61b0b2: Sombra de cian
-	#79b18d: Sombra de Verde-Cian
-	#92b268: Sombra de verde
-	#abb444: Sombra de amarillo-verde.

El logo puede ser visible en cualquier parte de la página, no hubo indicaciones en cuantos a su uso

La interfaz se tiene que adaptar a cualquier dispositivo con acceso a internet mediante un navegador web.

b.	Interfaces de Software
API Bancaria
Gestor mail
c.	Interfaces de Hardware
N/A


Requisitos funcionales

Epicas
-	Manejo de Cuenta
  -	Iniciar Sesión
  -	Cerrar Sesión
  -	Ver perfil
  -	Editar Perfil
  -	Abrir Menu
  -	Listar Notificaciones
  -	Listar Filiales
-	Gestión de Usuarios
  -	Registrar Usuario
  -	Listar Usuarios
  -	Filtrar Usuario
  -	Eliminar Usuario
  -	Registrar Colaborador
  -	Listar Colaboradores
  -	Filtrar Colaborador
  -	Eliminar Colaborador
  -	Penalizar Usuario
-	Administración de Donaciones
  -	Donar con Tarjeta
  -	Registrar Donación en Efectivo
  -	Registrar Donación de Producto
  -	Listar Mi Historial de Donaciones
  -	Listar Historial de Donaciones
  -	Filtrar Donaciones
-	Administración de publicaciones
  -	Subir Publicación
  -	Cambiar Visibilidad
  -	Listar Mis Publicaciones
    -	Editar Publicación
    -	Responder Comentario
    -	Eliminar Mi Publicación
  -	Listar Publicaciones
    -	Detallar Publicación
    -	Ofertar Publicación
    -	Comentar Publicación
  -	Eliminar Publicación
-	Administración de intercambios
  -	 Listar Ofertas Recibidas
    -	Detallar oferta Recibida
      -	Aceptar Oferta
      -	Rechazar Oferta
  -	Listar Ofertas Enviadas
    -	Detallar oferta Enviada
  -	Listar Intercambios Pendientes

Requisitos no funcionales

-	Fiabilidad: El sistema deberá funcionar normalmente en condiciones normales. Los eventos como fallos de la red, fallos de energía eléctrica, entre otros eventos de la misma naturaleza, se consideran excepciones lo cual provocará que el sistema deje de funcionar hasta recuperar las condiciones normales. 
-	Mantenibilidad: El sistema recibirá mantenimiento sin costo como garantía por un periodo de 2 meses luego del lanzamiento del mismo por la empresa Char-IT. Pasado este periodo de tiempo la empresa se compromete a establecer un acuerdo con remuneración monetaria para continuar con el mantenimiento.
-	Multiplataforma:  El sistema al ser una página web, por definición es multiplataforma dado que puede ser utilizada en cualquier dispositivo con un navegador, como lo son un ordenador, tablet, móvil, entre otros. 
-	Seguridad: El sistema cuenta con un sistema de autenticación para el acceso a funcionalidades específicas a través de cuentas, en las que se encuentran tres tipos: cuenta de usuario general, cuenta de usuario colaborador y cuenta del owner. Al momento de utilizar el sistema si no se inició sesión solo se puede efectuar las funcionalidades del rol usuario visitante. Si un usuario procede a iniciar sesión y lo logra, a través de las mismas credenciales se conoce el rol, ya sea usuario general,usuario colaborador o usuario owner, se le habilitaran las funcionalidades adecuadas.
-	Privacidad: El sistema implementará estrictas medidas de privacidad para garantizar la protección de la información personal y los datos de los usuarios. Se aplicarán protocolos de encriptación avanzados para el almacenamiento y la transmisión de datos sensibles, asegurando que toda información personal se maneje de acuerdo con las normativas de protección de datos vigentes.

---

### Plan de Gestión de Proyecto (PGP)

#### 1) Introducción

a.	Propósito y alcance 

Este documento sirve como el marco del plan de realización del proyecto "HopeTrade", detallando los recursos necesarios para su ejecución. Se especifican los plazos, roles, responsabilidades, recursos y presupuesto estimado, teniendo en cuenta los riesgos asociados. Está dirigido a diversas partes interesadas, incluyendo al equipo de desarrollo de Char-IT y a los representantes de varias filiales de Cáritas en La Plata, Mario y María.

El sistema recibe el nombre de HopeTrade el cual se encargará de: 
- Administración y registro de donaciones presenciales
- Promover el intercambio entre terceros de productos en las filiales.
- Gestión y registro de los movimientos del usuario en el sistema
- Facilitar las donaciones monetarias mediante la página web.


b.	Definiciones, acrónimos y abreviaturas a considerar

-	Página web: documento en línea que contiene información programa informático diseñado para ejecutarse en navegadores con uso de internet.
-	 Usuario Visitante: persona que no posee cuenta en el sistema, o en su defecto que no inició sesión en este.
-	 Usuario General: persona que se registró en el sistema y cuenta con ciertos permisos.
-	 Usuario Colaborador: persona que un usuario owner registró en el sistema e inicio sesión y cuenta con permisos de gestión
-	Usuario Owner: cuenta única ya registrada en el sistema, la cual está destinada al propietario del sistema. Este usuario posee funcionalidades adicionales en comparación con el usuario colaborador y tiene la capacidad de realizar acciones y tomar decisiones clave dentro del sistema.
-	Base de datos: es un conjunto de datos que pertenecen al mismo contexto almacenados sistemáticamente para su posterior uso.
-	Software: programas y aplicaciones que se ejecutan en un sistema informático, computadora o dispositivo electrónico. 
-	Hardware: los elementos físicos que componen un sistema informático, computadora o dispositivo electrónico. 
-	Filial: Sucursal o local perteneciente a Cáritas donde se realizan actividades de intercambio y donación.
-	Stakeholder: Cualquier persona o grupo que esté relacionada directa o indirectamente con el desarrollo o el resultado del proyecto. Esto incluye a desarrolladores, administradores de proyecto, usuarios finales y clientes.



| Nombre del documento |	Fecha de Creación |	Autor |
| --- | --- | --- |
| Entrevista 1 |	11/03/2024 |	Char-IT |
| Entrevista 2 |	18/03/2024	| Char-IT |
| Epicas |	18/03/2024	| Char-IT | 
| Cuestionario “Char-IT” |	18/03/2024 |	Char-IT |
| SRS	 | 22/04/2024	| Char-IT |

#### 2) Planes generales

a.	Entregables del proyecto
El desarrollo de la aplicación web consta de cinco entregas de las cuales dos son de documentos y las tres restantes siendo demos del estado actual del desarrollo, resaltando que en la última demo la aplicación se encontrará finalizada. 

Se detallan los entregables en la tabla siguiente. 

| Entregable	| Fecha de entrega |
| --- | --- |
| Entrevista 1	| 25/03/2024 |
| Entrevista 2	| 25/03/2024 |
| Cuestionario 	| 25/03/2024 |
| Épicas	| 25/03/2024 | 
| SRS (Especificación de Requisitos de Software) |	22/04/2024 |
| PGP (Plan de Gestión de Proyecto)	| 22/04/2024 |
| Pila de producto | 22/04/2024 |
| Demo 1	| 20/05/2024 |
| Demo 2	| 10/06/2024 |
| Demo 3	| 08/07/2024 |

b.	Calendario y resumen del presupuesto
El desarrollo se realizará en el periodo comprendido entre el 11/03/2024 y el 8/07/2024. En la tabla siguiente se detalla un calendario con las etapas de desarrollo. 

| Etapa	| Accion/es |	Fecha |
| --- | --- | --- |
| Elicitación de Requerimientos |	Entrevista 1	| 11/03/2024 |
| Elicitación de Requerimientos	| Entrevista 2	| 18/03/2024 |
| Especificación de requerimientos | 	Entrega de Entrevistas 1 y 2, Cuestionario y Épicas |	25/03/2024 |
| | Entrega de SRS, PGP y Pila de producto	| 22/04/2024 |
| Sprint 1 |	Planificación Scrum 1	| 29/04/2024 |
| | Scrum diario 1-1	| 06/05/2024 |
| | Scrum diario 1-2	| 13/05/2024 |
| | Demo 1	| 20/05/2024 |
| Sprint 2 |	Planificación Scrum 2	| 20/05/2024 |
| | Scrum diario 2-1	| 27/05/2024 |
| | Scrum diario 2-2	| 03/06/2024 |
| | Demo 2	| 10/06/2024 |
| Sprint 3 |	Planificación Scrum 3 |	10/06/2024 |
| | Scrum diario 2-1	| 24/06/2024 |
| | Scrum diario 2-2	| 01/07/2024 |
| | Demo 3	| 08/07/2024 |

El presupuesto final es de 9.952 USD para el desarrollo completo. Sujeto a modificaciones

c.	Plan del personal
Para llevar a cabo el proyecto serán necesarios cuatro programadores con conocimiento, experiencia y determinación. Estos mismos deben ser capaces de realizar tanto la elicitación de los requerimientos, como el diseño lógico y gráfico de los requerimientos del sistema. No es requerido especificación en ninguna área, solo una correcta organización de esfuerzos y tiempos mediante comunicación. Cuatro desarrolladores full stack serían pertinentes en este proyecto. El personal será contratado durante 18 semanas, que se estima para el desarrollo completo. 

#### 3) Presupuesto

a.	Principales actividades del proyecto

El proyecto consiste en el desarrollo de una página web desde cero para las filiales de Cáritas, para lo cual se requieren las siguientes actividades: 

1. Elicitar requerimientos: elaboración y realización de entrevistas y cuestionario. 

2. Especificar requerimientos: elaboración de especificaciones de requerimientos de manera formal, describiendo las funcionalidades y restricciones del sistema a desarrollar. Estos documentos además tienen la importancia de ser contratos con el cliente sobre el sistema solicitado. 

3. Diseño conceptual: elaboración de diseños abstractos en cuanto al manejo de la información del sistema y bocetos gráficos de la aplicación en base a los requerimientos. 

4. Desarrollo: la página web será desarrollada con el siguiente conjunto de tecnologías/frameworks python, tailwind, Flask, Postgresql, Css, ya que estas brindan la adaptabilidad, agilidad y efectividad para realizar un proyecto de esta envergadura. Para lo cual se gestionará el proceso con la metodología de desarrollo Scrum, que gestiona el desarrollo completo en los submódulos: 
-	a. Sistema de usuarios: contiene las funcionalidades respectivas a autenticación, manejo de cuentas. 
-	b. Sistema de intercambios: contiene las funcionalidades respectivas a la gestión de intercambios por parte de Usuario Colaboradores/Usuario Owner y la solicitud de Usuarios Generales. 
-	c. Sistema de Publicaciones: contiene las funcionalidades respectivas de las publicaciones tanto comentarios como respuestas.
-	d. Sistema de Donaciones: contiene las funcionalidades respectivas para gestión de donaciones presenciales y virtuales
-	e. Sistema de Colaboradores: contiene las funcionalidades respectivas para gestión de usuarios colaboradores (Crear/Eliminar)
-	f. Sistema de Historiales: contiene las funcionalidades para el filtrado y listado de los donaciones históricas.
-	g. Sistema de Notificaciones: contiene las funcionalidades respectivas al manejo de las notificaciones del sistema.
-	h. Sistema Gestión de Usuarios: Contiene las funcionalidades para listas, penalizar y/o eliminar un usuario.

5. Despliegue efectivo: se realizará el despliegue final efectivo del sistema para que pueda ser usado en los dispositivos de los futuros usuarios generales y en las máquinas disponibles en cada filial asociada al sistema.

6. Mantenimiento: se realiza el monitoreo del funcionamiento del sistema luego que se encuentre activo para verificar su correcto funcionamiento, desde el lado del usuario general, usuario colaborador y usuario owner.

b.	Asignación de esfuerzo

| Actividad |	Responsable/s (cantidad)	| Esfuerzo unitario (hs) | Esfuerzo total(hs) |
| --- | --- | --- | --- |
| Elicitar requerimientos	| 4	| 6	| 24 |
| Especificar requerimientos	| 4	| 9	| 36 |
| Diseño conceptual	| 4	| 6	| 24 |
| Sistema de usuarios	| 4	| 16	| 64 |
| Sistema de intercambio	| 4	| 20	| 80 |
| Sistema de Publicaciones	| 4	| 18	| 72 |
| Sistema de Donaciones	| 4	| 16	| 64 |
| Sistema de Colaboradores	| 4	| 10	| 40 |
| Sistema de Historiales	| 4	| 10	| 40 |
| Sistema de Notificaciones	| 4	| 10	| 40 |
| Sistema Gestión de Usuarios	| 4	| 10	| 40 |
| Despliegue efectivo	| 4	| 6	| 24 |
| Mantenimiento	| 4	| 8	| 32 |

Total de horas entre todas las actividades: 580 hs.

-	Por Etapas:

| Etapa 1 | 4	| 24 | 96 |
| --- | --- | --- | --- |
| Etapa 2	| 4	| 100 |	400 |
| Etapa 3	| 4	| 25 |	100 |

Total de horas entre todas las etapas: 596 hs

c.	Presupuesto final

El presupuesto se calculará en base a la suma de los presupuestos para los salarios de los desarrolladores más los costos de los recursos. El sueldo de cada desarrollador será el producto entre las horas empleadas y el salario por hora de la tabla a continuación:

| Especialidad | Sueldo base |	Extra |	Total(salario por hora) |
| Fullstack	| 15 USD |	2 USD	| 17 USD |

Precio total del personal 17 USD/hs * 580 = 9.860

Recursos Extras:

| Nombre |	Tiempo |	Costo |
| Dominio hopetrade.ar |	1 año |	32 USD |
| Base de datos	| 1 mes |	5 USD |

Precio total de recursos a 1 año = 1 * 32 USD + 12 * 5 USD = 92 USD

Costo total en USD = 9.860 USD + 92 USD = 9.952 USD

#### 4) Riesgos

Para estandarizar la medida de los riesgos se usará la métrica de impacto que describe como un riesgo impacta en el sistema. El impacto se medirá en los valores 1, 2, 3 y 4 y cada valor se describe en la tabla a continuación:

| Valor	| Alias |	Interpretacion |
| --- | --- | --- |
| 1 |	Catastrofico |	Cancelacion o suspension del proyecto |
| 2	| Serio	| Reducción de rendimiento, retrasos en la entrega, excesos importante en costo |
| 3	| Tolerable |	Reducciones mínimas de rendimiento, posibles retrasos, exceso en costo |
| 4	| Insignificante |	Incidencia mínima en el desarrollo |

En el desarrollo y posterior a él se encuentran riesgos que pueden afectar en el sistema, para lo cual a continuación se detallan con un nombre, probabilidad de ocurrir, impacto en el sistema si sucede, las medidas mitigadoras para que no ocurra, estrategias de contingencia en caso de que suceda para minimizar el impacto inevitable y el miembro del equipo de desarrollo designado como responsable del riesgo.


-	Riesgo: Menos reutilización de la prevista.
Probabilidad: 30%.
Impacto: 3.
Medidas mitigadoras: Cumplir con buenas prácticas a la hora de programar para lograr un software modularizado y reusable.
Plan de contingencia: Aplicar técnicas de refactoring sobre el código.
Responsable: Fabian Martinez Rincon.

-	Riesgo: Cambios en el equipo de desarrollo.
Probabilidad: 10%.
Impacto: 3.
Medidas mitigadoras: Fomentar un ambiente de trabajo agradable y alentar a los miembros del equipo a comunicarse abiertamente.
Plan de contingencia: Redistribuir las responsabilidades actuales y de ser necesario mejorar  las relaciones entre desarrolladores y su ambiente de trabajo.
Responsable: Lucas Andrés Gallardo Florido.

-	Riesgo: Subestimación del tamaño del sistema.
Probabilidad: 30%.
Impacto: 2.
Medidas mitigadoras: Realizar una nueva elicitación de requerimientos junto al análisis del negocio y mercado, además analizar detalladamente la información recaudada y definir correctamente los requerimientos subyacentes.
Plan de contingencia: Pautar con el cliente una nueva entrevista y de ser necesario
reprogramar la entrega. 
Responsable: Austin Myles Barker. 

-	Riesgo: Enfermedades y/o contratiempos personales. 
Probabilidad: 20%.
Impacto: 3.
Medidas mitigadoras: Organizar y gestionar una buena comunicación entre los miembros del equipo de desarrollo para comprender las tareas que los demás desarrolladores tienen que cumplir. Fomentar un ambiente de trabajo saludable y flexible, en el que se promueva el equilibrio entre la vida laboral y personal.
Plan de contingencia: Mantener constante comunicación y asistir en cualquier caso para la rápida reincorporación de la persona. 
Responsable: Luciana Elizabeth Lamella.

-	Riesgo: Usuario no se adapta a la UI.
Probabilidad: 25%.
Impacto: 2.
Medidas mitigadoras: Pruebas de usabilidad, diseño y desarrollo iterativo, documentación clara de la interfaz de usuario.
Plan de contingencia: Capacitación adicional para el usuario, posible revisión del diseño de la UI y en el peor de los casos rediseñar la UI. 
Responsable: Lucas Andrés Gallardo Florido.


-	Riesgo: Cambios de licencias de software..
Probabilidad: 10%.
Impacto: 1.
Medidas mitigadoras: Investigación exhaustiva de las licencias de software antes de su adopción, implementación de alternativas de software si es necesario.
Plan de contingencia: Cambio a alternativas de software, reasignación de recursos para adaptarse al nuevo software, posible retraso en el proyecto.
Responsable: Fabian Martinez Rincon.

-	Riesgo: Rendimiento del sistema no es el esperado.
Probabilidad: 20 %.
Impacto: 2.
Medidas mitigadoras: Pruebas de rendimiento durante desarrollo, diseño y desarrollo iterativo, revisión y optimización del código.
Plan de contingencia: Revisión y optimización del código, posible reasignación de recursos para mejorar el rendimiento.
Responsable: Austin Myles Barker.

-	Riesgo: Retraso de entrega en la fecha acordada. 
Probabilidad: 5%
Impacto: 1.
Medidas mitigadoras: Mantener una buena organización durante el desarrollo. Fomentar el apoyo entre desarrolladores durante las tareas y tener siempre presente la planificación acordada. 
Plan de contingencia: Pautar una nueva reunión con el cliente y proponer una extensión de plazo de entrega. 
Responsable: Luciana Elizabeth Lamella.
