---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Conexiones SSH'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/coneccionesSSH.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---

### Conexiones SSH (Secure Shell)

#### ¿Qué es SSH?

**SSH** (Secure Shell) es un protocolo de red que permite a los usuarios acceder y administrar de forma segura un servidor o dispositivo a través de una red insegura. SSH proporciona autenticación fuerte, comunicación encriptada y la integridad de los datos, asegurando que las comunicaciones entre el cliente y el servidor sean confidenciales y a prueba de manipulaciones.

#### Componentes Clave de SSH

1. **Cliente SSH:**
   - Un software que inicia la conexión con el servidor SSH.
   - Ejemplos: `ssh` en Linux, PuTTY en Windows.

2. **Servidor SSH:**
   - Un software que acepta conexiones desde clientes SSH.
   - Ejemplos: `sshd` en Linux.

3. **Autenticación:**
   - Métodos para verificar la identidad del cliente.
   - Ejemplos: contraseñas, claves públicas/privadas, autenticación de dos factores.

4. **Encriptación:**
   - Cifrado de datos para asegurar la privacidad y la integridad de la comunicación.
   - Ejemplos de algoritmos de cifrado: AES, Blowfish.

5. **Túneles SSH:**
   - Canales seguros que permiten el redireccionamiento de tráfico a través de la conexión SSH.
   - Tipos: túnel local, túnel remoto, túnel dinámico.

### Funcionalidades Principales de SSH

1. **Acceso Remoto Seguro:**
   - Permite a los usuarios acceder y controlar máquinas remotas de forma segura.
   - Comando: `ssh usuario@servidor`

2. **Transferencia Segura de Archivos:**
   - **SCP (Secure Copy Protocol):** Transferencia segura de archivos.
     - Comando: `scp archivo_local usuario@servidor:/ruta/remota`
   - **SFTP (SSH File Transfer Protocol):** Transferencia interactiva de archivos.
     - Comando: `sftp usuario@servidor`

3. **Túneles SSH:**
   - **Túnel Local:** Redirige el tráfico desde un puerto local a un servidor remoto.
     - Comando: `ssh -L puerto_local:host_remoto:puerto_remoto usuario@servidor`
   - **Túnel Remoto:** Redirige el tráfico desde un puerto remoto a una máquina local.
     - Comando: `ssh -R puerto_remoto:host_local:puerto_local usuario@servidor`
   - **Túnel Dinámico:** Crea un proxy SOCKS que puede redirigir el tráfico a múltiples destinos.
     - Comando: `ssh -D puerto_local usuario@servidor`

### Ejemplos Prácticos

#### 1. Conexión SSH Básica

Conéctate a un servidor remoto utilizando SSH:

```sh
ssh usuario@servidor_remoto
```

#### 2. Uso de Claves SSH

Genera un par de claves SSH (pública y privada):

```sh
ssh-keygen -t rsa -b 2048 -f ~/.ssh/id_rsa
```

Copia la clave pública al servidor remoto:

```sh
ssh-copy-id usuario@servidor_remoto
```

Conéctate al servidor utilizando la clave SSH:

```sh
ssh -i ~/.ssh/id_rsa usuario@servidor_remoto
```

#### 3. Transferencia de Archivos con SCP

Copia un archivo local a un servidor remoto:

```sh
scp archivo.txt usuario@servidor_remoto:/ruta/remota
```

Copia un archivo desde un servidor remoto a tu máquina local:

```sh
scp usuario@servidor_remoto:/ruta/remota/archivo.txt /ruta/local
```

#### 4. Túnel Local

Redirige el tráfico desde el puerto local 8080 a un servidor web remoto en el puerto 80:

```sh
ssh -L 8080:www.ejemplo.com:80 usuario@servidor_remoto
```

#### 5. Túnel Remoto

Redirige el tráfico desde el puerto 9090 en el servidor remoto a un servidor web local en el puerto 80:

```sh
ssh -R 9090:localhost:80 usuario@servidor_remoto
```

#### 6. Túnel Dinámico

Crea un proxy SOCKS en el puerto local 1080:

```sh
ssh -D 1080 usuario@servidor_remoto
```

Configura tu navegador para usar `localhost:1080` como un proxy SOCKS para redirigir el tráfico a través del servidor SSH.

### Seguridad en SSH

1. **Autenticación de Claves Públicas/Privadas:**
   - Más segura que el uso de contraseñas.
   - Implica generar un par de claves y almacenar la clave pública en el servidor.

2. **Desactivar el Acceso Root Directo:**
   - Mejora la seguridad al evitar que el usuario root inicie sesión directamente.
   - Configuración en `/etc/ssh/sshd_config`:
     ```sh
     PermitRootLogin no
     ```

3. **Cambio del Puerto por Defecto:**
   - El puerto por defecto para SSH es el 22. Cambiarlo puede reducir los intentos de intrusión automatizados.
   - Configuración en `/etc/ssh/sshd_config`:
     ```sh
     Port 2222
     ```

4. **Autenticación de Dos Factores (2FA):**
   - Añade una capa adicional de seguridad.
   - Puede configurarse utilizando herramientas como Google Authenticator.

5. **Firewall y Limitación de Acceso:**
   - Usar firewalls para limitar el acceso al puerto SSH.
   - Configurar `iptables` o `ufw` para permitir solo direcciones IP específicas.

### Conclusión

SSH es una herramienta esencial para la administración remota de sistemas y la transferencia segura de datos. Ofrece múltiples capas de seguridad, incluyendo autenticación de claves públicas, encriptación de datos y soporte para túneles seguros. La comprensión y el uso adecuado de SSH permiten a los administradores de sistemas y a los usuarios finales interactuar de manera segura y eficiente con los recursos de la red.


---

[Link de la pagina para practicar](https://overthewire.org/wargames/bandit/)

![image](https://github.com/user-attachments/assets/bb0928c3-a4e3-4e98-b638-9e2a5ad693bc)


```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

Recuerda que la contraseña para el usuario ‘bandit0‘ es ‘bandit0‘.

```bash
export TERM=xter
```

### Nivel 1

![image](https://github.com/user-attachments/assets/d3afa2fc-1c6b-4a17-9ee8-2210e9b8c317)

### Nivel 2

![image](https://github.com/user-attachments/assets/bbafa0df-620b-4e14-90ba-7c2c8c2da9ac)

### Nivel 3

![image](https://github.com/user-attachments/assets/d14585d3-6cff-4a18-bfd7-4f105715b53f)

### Nivel 4

![image](https://github.com/user-attachments/assets/7a33ac89-017d-48e8-b885-89bd33c70edd)

### Nivel 5

![image](https://github.com/user-attachments/assets/dd9c8ae6-a2f4-4355-860e-ff713402c0f2)

### Nivel 6

![image](https://github.com/user-attachments/assets/c7c91931-f749-45ae-9db9-891946ad402c)

### Nivel 7

![image](https://github.com/user-attachments/assets/dc6f7b26-654d-42ca-bd6d-83e8796f855d)

### Nivel 8

- [Material 1](https://www.shortcutfoo.com/app/dojos/awk/cheatsheet)
- [Material 2](https://bl831.als.lbl.gov/~gmeigs/scripting_help/awk_cheat_sheet.pdf)

![image](https://github.com/user-attachments/assets/7eb23194-d041-4cbd-af74-59c5d3d00938)

### Nivel 9

![image](https://github.com/user-attachments/assets/2b39319e-21bc-45f9-8123-ec58e14507ed)

### Nivel 10

![image](https://github.com/user-attachments/assets/3ea49fe9-31ef-4e5e-ba8f-b5332827e417)

### Nivel 11

![image](https://github.com/user-attachments/assets/3d8d3827-ef16-4f4a-8d06-8ece57fedf7c)

### Nivel 12

![image](https://github.com/user-attachments/assets/e64a05d5-9d8e-48f6-b9cd-140c99efcca6)

### Nivel 13

