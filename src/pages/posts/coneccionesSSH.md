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

![image](https://github.com/user-attachments/assets/5b14d13f-bbe7-4378-90ad-fbc7c4679b0b)

![image](https://github.com/user-attachments/assets/c97901e9-dd4e-442e-827f-703abe572088)

![image](https://github.com/user-attachments/assets/295deae6-59be-45c8-9bc2-523497c92712)

![image](https://github.com/user-attachments/assets/af6456ca-558a-4767-aa9a-b5e76aee8568)

![image](https://github.com/user-attachments/assets/e52e3da7-4eb3-46ff-bd7f-8809af56b808)

Y asi hasta el final

```bash
#!/bin/bash

function ctrl_c(){
  echo -e "\n\n[!] Saliendo...\n"
  exit 1
}

# Ctrl+C
trap ctrl_c INT

first_file_name="data.gz"
decompressed_file_name="$(7z l data.gz | tail -n 3 | head -n 1 | awk 'NF{print $NF}')"

7z x $first_file_name &>/dev/null

while [ $decompressed_file_name ]; do
  echo -e "\n[+] Nuevo archivo descomprimido: $decompressed_file_name"
  7z x $decompressed_file_name &>/dev/null
  decompressed_file_name="$(7z l $decompressed_file_name 2>/dev/null | tail -n 3 | head -n 1 | awk 'NF{print $NF}')"
done

```

![image](https://github.com/user-attachments/assets/f2a995e4-2e8a-46fb-8ab0-3cb6999c7a71)

### Nivel 14

El manejo de pares de claves y las conexiones SSH son aspectos fundamentales para garantizar una comunicación segura entre dos máquinas en una red, especialmente en entornos de administración de sistemas y en la nube. Aquí te explico en detalle cómo funcionan los pares de claves, cómo se utilizan en conexiones SSH y cómo puedes gestionarlos.

### Concepto de Pares de Claves

#### 1. **Pares de Claves**
Un par de claves SSH consiste en dos claves criptográficas:
   - **Clave Privada**: La clave privada es secreta y debe ser guardada de forma segura por el usuario. Nunca debe ser compartida.
   - **Clave Pública**: La clave pública puede ser compartida libremente con cualquier servidor al que el usuario desee conectarse.

Estas claves se utilizan en un algoritmo criptográfico que asegura que la identidad del usuario pueda ser verificada por el servidor sin necesidad de enviar la clave privada a través de la red.

#### 2. **Criptografía Asimétrica**
Las claves SSH utilizan criptografía asimétrica. La clave privada genera una firma digital única que solo puede ser verificada por su correspondiente clave pública. Esto permite que las comunicaciones sean seguras y que solo el poseedor de la clave privada pueda iniciar una sesión segura.

### Conexiones SSH Usando Pares de Claves

#### Proceso de Conexión SSH
1. **Generación de Par de Claves**: El primer paso es generar un par de claves usando `ssh-keygen`.
   ```bash
   ssh-keygen -t rsa -b 4096
   ```
   Esto genera una clave privada y una clave pública (por defecto, `id_rsa` y `id_rsa.pub`).

2. **Copiar la Clave Pública al Servidor**: La clave pública debe ser colocada en el archivo `authorized_keys` del servidor.
   ```bash
   ssh-copy-id usuario@servidor
   ```
   Este comando copia automáticamente la clave pública al servidor en el archivo adecuado.

3. **Inicio de Sesión SSH**: Cuando el usuario intenta iniciar sesión en el servidor, el servidor crea un mensaje, lo cifra con la clave pública y lo envía al cliente.
   ```bash
   ssh usuario@servidor
   ```
   El cliente usa la clave privada para descifrar el mensaje. Si el descifrado es exitoso, se demuestra la posesión de la clave privada y se establece la sesión sin necesidad de contraseña.

### Ventajas del Uso de Pares de Claves en SSH

- **Seguridad Mejorada**: Es mucho más difícil comprometer una clave criptográfica que adivinar una contraseña.
- **Automatización**: Las conexiones pueden ser automatizadas sin intervención humana, ideal para scripts y tareas automatizadas.
- **Control de Acceso**: Las claves pueden ser añadidas o revocadas fácilmente del servidor para permitir o restringir el acceso.

### Mejores Prácticas de Seguridad

- **Proteger la Clave Privada**: La clave privada debe ser guardada de forma segura, protegida por una frase de paso fuerte y solo accesible por el usuario.
- **Permisos Adecuados**: Asegúrate de que los permisos de los archivos de claves privadas sean restrictivos (`chmod 600 ~/.ssh/id_rsa`).
- **Rotación de Claves**: Las claves deben ser cambiadas regularmente para mitigar los riesgos asociados con el robo o compromiso de claves a largo plazo.
- **Uso de `ssh-agent`**: Utiliza `ssh-agent` para mantener las claves cargadas en memoria y seguras, evitando tener que introducir la frase de paso cada vez.

### Conclusión

El manejo efectivo de pares de claves es esencial para mantener seguras las conexiones SSH. A través del uso de criptografía asimétrica, se puede asegurar que las conexiones entre el cliente y el servidor sean confiables y seguras, minimizando el riesgo de interceptación o acceso no autorizado. Con una configuración adecuada y siguiendo las mejores prácticas de seguridad, los pares de claves SSH proporcionan una herramienta robusta para la gestión segura de servidores y automatización de tareas.

![image](https://github.com/user-attachments/assets/b8d1cb75-4461-4934-a15e-9c6be7334a51)

![image](https://github.com/user-attachments/assets/57d5436a-da02-43b3-a1d5-a974380d1fa9)
![image](https://github.com/user-attachments/assets/bd8818b0-1692-432a-b69b-3117947d5668)

### Nivel 15

![image](https://github.com/user-attachments/assets/8deac825-6587-4adc-ab45-8e09a8be1c11)

### Nivel 16

![image](https://github.com/user-attachments/assets/a91b4366-4e99-442e-8379-4d036b1c088b)

### Nivel 17

```bash
#!/bin/bash

function ctrl_c(){
  echo -e "\n\n[!] Saliendo...\n"
  exit 1
}

# Ctrl+C
trap ctrl_c INT

for i in $(seq 1 254); do
  timeout 1 bash -c "ping -c 1 192.168.1.$i &>/dev/null" && echo "[+] Host 192.168.1.$i - ACTIVE" &
done; wait

```

```bash
#!/bin/bash

function ctrl_c(){
  echo -e "\n\n[!] Saliendo...\n"
  tput cnorm; exit 1
}

# Ctrl+C
trap ctrl_c INT

tput civis # Ocultar el cursor
for port in $(seq 1 65535); do
  (echo '' > /dev/tcp/127.0.0.1/$port) 2>/dev/null && echo "[+] $port - OPEN" &
done; wait

# Recuperamos el cursor
tput cnorm

```