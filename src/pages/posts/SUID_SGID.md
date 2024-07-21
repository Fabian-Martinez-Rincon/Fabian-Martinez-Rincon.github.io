---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'SUID y SGID'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/SUID_y_SGID.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---

- Permisos SGID, SUID y Sticky Bit: [Permisos SGID, SUID y Sticky Bit](https://deephacking.tech/permisos-sgid-suid-y-sticky-bit-linux/#:~:text=Permiso%20SGID,-El%20permiso%20SGID&text=Si%20se%20establece%20en%20un,perteneciente%2C%20el%20grupo%20del%20directorio.)
- Permisos especiales en Linux: [Permisos especiales en Linux – Sticky Bit, SUID y SGID](https://www.ochobitshacenunbyte.com/2019/06/17/permisos-especiales-en-linux-sticky-bit-suid-y-sgid/)
- Los bits SUID, SGID y Sticky: [Los bits SUID, SGID y Sticky](https://www.ibiblio.org/pub/linux/docs/LuCaS/Manuales-LuCAS/SEGUNIX/unixsec-2.1-html/node56.html)

El **SUID** (Set User ID) y el **SGID** (Set Group ID) son permisos especiales en sistemas Unix y Linux que afectan cómo los archivos y programas se ejecutan. Aquí se presenta una explicación teórica detallada de ambos permisos, sus propósitos, cómo funcionan y sus implicaciones en la seguridad del sistema.

### SUID (Set User ID)

#### Propósito

El propósito del SUID es permitir que un archivo ejecutable se ejecute con los privilegios del propietario del archivo en lugar de con los privilegios del usuario que ejecuta el archivo. Esto es útil para programas que necesitan realizar tareas con privilegios elevados temporalmente.

#### Funcionamiento

- **Archivo ejecutable:** El SUID se aplica a archivos ejecutables.
- **Ejecución con privilegios del propietario:** Cuando un usuario ejecuta un archivo con el bit SUID establecido, el programa se ejecuta con los privilegios del propietario del archivo, no con los privilegios del usuario que lo ejecuta.

#### Representación

- **Notación simbólica:** En la salida de `ls -l`, el bit SUID se representa con una `s` en lugar de una `x` en la posición de permisos de ejecución del propietario (user).

  Ejemplo: `rwsr-xr-x`
  - `rws`: El propietario tiene permisos de lectura, escritura y ejecución con SUID.
  - `r-x`: El grupo tiene permisos de lectura y ejecución.
  - `r-x`: Otros tienen permisos de lectura y ejecución.

- **Notación octal:** El bit SUID se representa con un `4` adicional en la notación octal.

  Ejemplo: `4755`
  - `4`: Bit SUID.
  - `755`: Permisos de lectura, escritura y ejecución para el propietario; permisos de lectura y ejecución para el grupo y otros.

#### Ejemplo Práctico

1. **Establecer el bit SUID en un archivo:**

   ```sh
   sudo chmod u+s archivo
   ```

2. **Verificar los permisos del archivo:**

   ```sh
   ls -l archivo
   ```

   Salida esperada:

   ```sh
   -rwsr-xr-x 1 root root 12345 Jul 19 10:13 archivo
   ```

### SGID (Set Group ID)

#### Propósito

El propósito del SGID es doble. Cuando se aplica a un archivo ejecutable, funciona de manera similar al SUID, permitiendo que el archivo se ejecute con los privilegios del grupo propietario. Cuando se aplica a un directorio, todos los archivos y subdirectorios creados dentro de ese directorio heredarán el grupo del directorio padre en lugar del grupo del usuario que los crea.

#### Funcionamiento

- **Archivo ejecutable:** El SGID se aplica a archivos ejecutables para que se ejecuten con los privilegios del grupo propietario.
- **Directorio:** Cuando el SGID se establece en un directorio, todos los nuevos archivos y subdirectorios creados dentro de ese directorio heredan el grupo del directorio.

#### Representación

- **Notación simbólica:** En la salida de `ls -l`, el bit SGID se representa con una `s` en lugar de una `x` en la posición de permisos de ejecución del grupo.

  Ejemplo en un archivo: `rwxr-sr-x`
  - `rwx`: El propietario tiene permisos de lectura, escritura y ejecución.
  - `r-s`: El grupo tiene permisos de lectura y ejecución con SGID.
  - `r-x`: Otros tienen permisos de lectura y ejecución.

  Ejemplo en un directorio: `rwxr-sr-x`
  - `rwx`: El propietario tiene permisos de lectura, escritura y ejecución.
  - `r-s`: El grupo tiene permisos de lectura y ejecución con SGID.
  - `r-x`: Otros tienen permisos de lectura y ejecución.

- **Notación octal:** El bit SGID se representa con un `2` adicional en la notación octal.

  Ejemplo: `2755`
  - `2`: Bit SGID.
  - `755`: Permisos de lectura, escritura y ejecución para el propietario; permisos de lectura y ejecución para el grupo y otros.

#### Ejemplo Práctico

1. **Establecer el bit SGID en un archivo:**

   ```sh
   sudo chmod g+s archivo
   ```

2. **Verificar los permisos del archivo:**

   ```sh
   ls -l archivo
   ```

   Salida esperada:

   ```sh
   -rwxr-sr-x 1 root root 12345 Jul 19 10:13 archivo
   ```

3. **Establecer el bit SGID en un directorio:**

   ```sh
   sudo chmod g+s directorio
   ```

4. **Verificar los permisos del directorio:**

   ```sh
   ls -ld directorio
   ```

   Salida esperada:

   ```sh
   drwxr-sr-x 2 root root 4096 Jul 19 10:13 directorio
   ```

5. **Crear un archivo dentro del directorio con SGID:**

   ```sh
   touch directorio/nuevo_archivo
   ```

6. **Verificar el grupo del nuevo archivo:**

   ```sh
   ls -l directorio/nuevo_archivo
   ```

   Salida esperada:

   ```sh
   -rw-r--r-- 1 usuario grupo 0 Jul 19 10:13 nuevo_archivo
   ```

   Aquí, `grupo` es el grupo del directorio `directorio`.

### Seguridad e Implicaciones

- **SUID:** Puede ser un riesgo de seguridad si no se maneja correctamente, ya que permite que programas se ejecuten con privilegios elevados. Los administradores deben ser cuidadosos y solo aplicar SUID a programas confiables.
- **SGID:** Similar al SUID, puede ser un riesgo si no se maneja correctamente en archivos ejecutables. En directorios, ayuda a mantener la coherencia del grupo en entornos de colaboración.

### Resumen

- **SUID (Set User ID):** Permite que un archivo ejecutable se ejecute con los privilegios del propietario del archivo. Representado con `4` en notación octal y `s` en permisos de usuario.
- **SGID (Set Group ID):** Permite que un archivo ejecutable se ejecute con los privilegios del grupo propietario. En directorios, asegura que los nuevos archivos hereden el grupo del directorio. Representado con `2` en notación octal y `s` en permisos de grupo.

Estos permisos especiales son herramientas poderosas que deben ser usadas con precaución para mantener la seguridad y funcionalidad del sistema.

![image](https://github.com/user-attachments/assets/5c78a70b-093e-4f7d-a6c5-3ade15857f2c)

![image](https://github.com/user-attachments/assets/ee4248aa-5252-43ac-9e5e-0ef824a4422e)
![image](https://github.com/user-attachments/assets/cc254453-d5ed-49f0-a92a-60d85fbf7f8b)
![image](https://github.com/user-attachments/assets/97cdf337-3fab-40c5-85c1-a7abaeda16ea)
![image](https://github.com/user-attachments/assets/5e8c9dd3-d0de-444f-b4ea-046115774a74)
![image](https://github.com/user-attachments/assets/326be9b3-f1a8-4378-a39c-78c703bfb0dc)
![image](https://github.com/user-attachments/assets/80fe6012-5fcd-4f6b-b884-f564f98d1d0f)
![image](https://github.com/user-attachments/assets/537211c9-dd01-4bd6-bc88-e01a9af1d7d7)
![image](https://github.com/user-attachments/assets/97eecd28-97b1-4a26-bd01-aff7c6ad9150)

Las "Capabilities" (Capacidades) en Linux son un mecanismo de control de acceso que permite otorgar permisos específicos a procesos individuales sin otorgarles todos los privilegios del usuario root. Este sistema proporciona una granularidad mucho más fina para la gestión de permisos, mejorando la seguridad al limitar los privilegios necesarios para realizar tareas específicas.

### ¿Qué son las Capabilities?

Las Capabilities dividen los privilegios del superusuario en unidades más pequeñas y manejables, que pueden ser asignadas de manera independiente a diferentes programas o procesos. Esto permite que un programa tenga solo los privilegios necesarios para realizar su función, en lugar de otorgarle todos los privilegios del root, reduciendo así el riesgo de comprometer la seguridad del sistema.

### Principales Capabilities

Aquí hay una lista de algunas de las capacidades más comunes:

- **CAP_CHOWN:** Cambiar el propietario de un archivo.
- **CAP_DAC_OVERRIDE:** Ignorar permisos de acceso a archivos.
- **CAP_DAC_READ_SEARCH:** Ignorar permisos de lectura y búsqueda en directorios.
- **CAP_FOWNER:** Ignorar las restricciones de los propietarios de archivos.
- **CAP_FSETID:** Ignorar el bit set-user-ID y set-group-ID en la ejecución de un archivo.
- **CAP_KILL:** Enviar señales a los procesos pertenecientes a otros usuarios.
- **CAP_NET_ADMIN:** Realizar diversas tareas administrativas en la red.
- **CAP_NET_BIND_SERVICE:** Unirse a puertos reservados (números de puerto por debajo de 1024).
- **CAP_NET_RAW:** Usar sockets RAW y PACKET.
- **CAP_SYS_BOOT:** Reiniciar el sistema.
- **CAP_SYS_MODULE:** Insertar y eliminar módulos del kernel.
- **CAP_SYS_NICE:** Modificar las prioridades de ejecución de procesos.
- **CAP_SYS_TIME:** Modificar la hora del sistema.
- **CAP_SYS_TTY_CONFIG:** Configurar dispositivos TTY.

### Funcionamiento de las Capabilities

Las capacidades se manejan en tres conjuntos distintos que se asocian con cada proceso:

1. **Permitted Set:** El conjunto de capacidades que el proceso puede usar. Estas capacidades están permitidas para el proceso, pero no necesariamente están activas.
2. **Effective Set:** El conjunto de capacidades actualmente efectivas. Las capacidades en este conjunto son las que el proceso puede usar en ese momento.
3. **Inheritable Set:** El conjunto de capacidades que un proceso puede pasar a los procesos que engendra (hijos).

### Ejemplos Prácticos

#### 1. Verificar las capacidades de un archivo

Puedes usar el comando `getcap` para ver las capacidades asignadas a un archivo:

```sh
getcap /usr/bin/ping
```

Salida esperada:

```
/usr/bin/ping = cap_net_raw+ep
```

Esto muestra que el binario `ping` tiene la capacidad `CAP_NET_RAW` en los conjuntos de permisos `effective` y `permitted`.

#### 2. Asignar capacidades a un archivo

Puedes usar el comando `setcap` para asignar capacidades a un archivo:

```sh
sudo setcap cap_net_bind_service=ep /usr/bin/python3
```

Esto otorga al binario de Python la capacidad de unirse a puertos reservados (por debajo de 1024).

#### 3. Remover capacidades de un archivo

Puedes remover capacidades de un archivo usando el comando `setcap` con `-r`:

```sh
sudo setcap -r /usr/bin/python3
```

### Uso de Capabilities en Procesos

Cuando un proceso se inicia, hereda las capacidades del proceso padre según el conjunto inheritable. Los administradores pueden configurar capacidades específicas para servicios críticos del sistema, como servidores web, para minimizar los privilegios y reducir la superficie de ataque.

### Seguridad y Capabilities

El uso de capacidades mejora la seguridad del sistema al:

- **Limitar Privilegios:** Reduciendo los privilegios de los procesos a solo lo necesario para su operación.
- **Minimizar el Riesgo:** Reduciendo el impacto potencial de una vulnerabilidad explotada en un programa.
- **Mejor Control:** Proporcionando un control granular sobre los permisos de los procesos y archivos.

### Conclusión

Las Capabilities en Linux son una poderosa herramienta para gestionar los permisos de los procesos de manera más granular y segura que el modelo tradicional basado únicamente en el usuario root. Al dividir los privilegios del superusuario en unidades más pequeñas y asignables, las capacidades permiten una gestión de permisos más fina, reduciendo el riesgo de comprometer la seguridad del sistema.

Esta técnica es fundamental para administrar sistemas de manera segura y eficiente, especialmente en entornos donde los privilegios mínimos son una práctica de seguridad importante.

- [Link del savitar](http://www.etl.it.uc3m.es/Linux_Capabilities)

![image](https://github.com/user-attachments/assets/a9ef3033-3fbb-4d12-a029-af084cff4506)

Las capacidades en Linux se utilizan para otorgar permisos específicos a procesos individuales, mejorando la seguridad al limitar los privilegios necesarios para realizar tareas específicas. A continuación, se presenta una lista completa de las capacidades disponibles en Linux, junto con una descripción detallada y un ejemplo de uso para cada una.

### Lista Completa de Capacidades en Linux

1. **CAP_AUDIT_CONTROL**
   - **Descripción:** Permite habilitar y deshabilitar auditorías; modificar el filtro de eventos del kernel para auditorías.
   - **Ejemplo de Uso:** Un daemon de auditoría puede necesitar esta capacidad para gestionar el sistema de auditoría.
   - **Comando Ejemplo:** `sudo setcap cap_audit_control=ep /usr/sbin/auditd`

2. **CAP_AUDIT_READ**
   - **Descripción:** Permite leer registros de auditoría.
   - **Ejemplo de Uso:** Una aplicación que necesita monitorear eventos de auditoría.
   - **Comando Ejemplo:** `sudo setcap cap_audit_read=ep /usr/bin/audit_reader`

3. **CAP_AUDIT_WRITE**
   - **Descripción:** Permite escribir registros de auditoría.
   - **Ejemplo de Uso:** Un proceso que necesita escribir eventos de auditoría personalizados.
   - **Comando Ejemplo:** `sudo setcap cap_audit_write=ep /usr/bin/audit_writer`

4. **CAP_BLOCK_SUSPEND**
   - **Descripción:** Permite utilizar mecanismos que bloqueen la suspensión del sistema.
   - **Ejemplo de Uso:** Un proceso que necesita mantener el sistema despierto durante una operación crítica.
   - **Comando Ejemplo:** `sudo setcap cap_block_suspend=ep /usr/bin/keep_awake`

5. **CAP_BPF**
   - **Descripción:** Permite la manipulación avanzada de programas BPF (Berkeley Packet Filter).
   - **Ejemplo de Uso:** Un firewall que utiliza BPF para filtrar paquetes de red.
   - **Comando Ejemplo:** `sudo setcap cap_bpf=ep /usr/bin/firewall`

6. **CAP_CHECKPOINT_RESTORE**
   - **Descripción:** Permite operaciones de checkpoint y restore del estado del proceso.
   - **Ejemplo de Uso:** Una herramienta que realiza migraciones de procesos.
   - **Comando Ejemplo:** `sudo setcap cap_checkpoint_restore=ep /usr/bin/cr_tool`

7. **CAP_CHOWN**
   - **Descripción:** Permite cambiar el propietario de archivos.
   - **Ejemplo de Uso:** Un servicio de administración de archivos que necesita cambiar los propietarios de los archivos.
   - **Comando Ejemplo:** `sudo setcap cap_chown=ep /usr/bin/file_manager`

8. **CAP_DAC_OVERRIDE**
   - **Descripción:** Permite ignorar los permisos de acceso a archivos.
   - **Ejemplo de Uso:** Un proceso de respaldo que necesita leer todos los archivos del sistema.
   - **Comando Ejemplo:** `sudo setcap cap_dac_override=ep /usr/bin/backup_tool`

9. **CAP_DAC_READ_SEARCH**
   - **Descripción:** Permite ignorar los permisos de lectura y búsqueda en directorios.
   - **Ejemplo de Uso:** Un motor de búsqueda de archivos que necesita acceso a todos los directorios.
   - **Comando Ejemplo:** `sudo setcap cap_dac_read_search=ep /usr/bin/file_search`

10. **CAP_FOWNER**
    - **Descripción:** Permite ignorar las restricciones de los propietarios de archivos.
    - **Ejemplo de Uso:** Un proceso que necesita cambiar permisos en archivos sin ser el propietario.
    - **Comando Ejemplo:** `sudo setcap cap_fowner=ep /usr/bin/perm_changer`

11. **CAP_FSETID**
    - **Descripción:** Permite ignorar el bit set-user-ID y set-group-ID al ejecutar un archivo.
    - **Ejemplo de Uso:** Un programa de instalación que necesita establecer permisos especiales en archivos.
    - **Comando Ejemplo:** `sudo setcap cap_fsetid=ep /usr/bin/installer`

12. **CAP_IPC_LOCK**
    - **Descripción:** Permite bloquear memoria en el espacio de direcciones del proceso.
    - **Ejemplo de Uso:** Una base de datos que necesita evitar el intercambio de páginas en disco.
    - **Comando Ejemplo:** `sudo setcap cap_ipc_lock=ep /usr/bin/database`

13. **CAP_IPC_OWNER**
    - **Descripción:** Permite ignorar restricciones de propietario en las operaciones IPC (Inter-Process Communication).
    - **Ejemplo de Uso:** Un servicio que gestiona recursos IPC compartidos.
    - **Comando Ejemplo:** `sudo setcap cap_ipc_owner=ep /usr/bin/ipc_manager`

14. **CAP_KILL**
    - **Descripción:** Permite enviar señales a procesos pertenecientes a otros usuarios.
    - **Ejemplo de Uso:** Un administrador de procesos que necesita gestionar procesos de todos los usuarios.
    - **Comando Ejemplo:** `sudo setcap cap_kill=ep /usr/bin/proc_manager`

15. **CAP_LEASE**
    - **Descripción:** Permite establecer y modificar arrendamientos de archivos.
    - **Ejemplo de Uso:** Un sistema de archivos distribuidos que necesita gestionar arrendamientos.
    - **Comando Ejemplo:** `sudo setcap cap_lease=ep /usr/bin/fs_manager`

16. **CAP_LINUX_IMMUTABLE**
    - **Descripción:** Permite establecer el atributo inmutable en un archivo.
    - **Ejemplo de Uso:** Un programa de seguridad que necesita proteger archivos críticos.
    - **Comando Ejemplo:** `sudo setcap cap_linux_immutable=ep /usr/bin/security_tool`

17. **CAP_MAC_ADMIN**
    - **Descripción:** Permite administrar políticas de control de acceso MAC (Mandatory Access Control).
    - **Ejemplo de Uso:** Un sistema de gestión de seguridad que necesita configurar políticas de acceso.
    - **Comando Ejemplo:** `sudo setcap cap_mac_admin=ep /usr/bin/mac_admin`

18. **CAP_MAC_OVERRIDE**
    - **Descripción:** Permite ignorar políticas de control de acceso MAC.
    - **Ejemplo de Uso:** Un programa de recuperación de emergencia que necesita acceso completo al sistema.
    - **Comando Ejemplo:** `sudo setcap cap_mac_override=ep /usr/bin/recovery_tool`

19. **CAP_MKNOD**
    - **Descripción:** Permite crear nodos de dispositivos utilizando `mknod`.
    - **Ejemplo de Uso:** Un instalador de dispositivos que necesita crear nodos de dispositivos.
    - **Comando Ejemplo:** `sudo setcap cap_mknod=ep /usr/bin/device_installer`

20. **CAP_NET_ADMIN**
    - **Descripción:** Permite realizar tareas administrativas de red.
    - **Ejemplo de Uso:** Un programa de configuración de red que necesita modificar interfaces de red.
    - **Comando Ejemplo:** `sudo setcap cap_net_admin=ep /usr/bin/net_config`

21. **CAP_NET_BIND_SERVICE**
    - **Descripción:** Permite unir un puerto reservado (por debajo de 1024).
    - **Ejemplo de Uso:** Un servidor web que necesita usar el puerto 80.
    - **Comando Ejemplo:** `sudo setcap cap_net_bind_service=ep /usr/bin/web_server`

22. **CAP_NET_BROADCAST**
    - **Descripción:** Permite enviar paquetes de red de difusión.
    - **Ejemplo de Uso:** Un servicio de notificación de red que utiliza difusiones.
    - **Comando Ejemplo:** `sudo setcap cap_net_broadcast=ep /usr/bin/notifier`

23. **CAP_NET_RAW**
    - **Descripción:** Permite utilizar sockets RAW y PACKET.
    - **Ejemplo de Uso:** Un sniffer de red que captura todos los paquetes de red.
    - **Comando Ejemplo:** `sudo setcap cap_net_raw=ep /usr/bin/sniffer`

24. **CAP_PERFMON**
    - **Descripción:** Permite utilizar las interfaces de monitoreo de rendimiento.
    - **Ejemplo de Uso:** Un monitor de rendimiento que necesita acceso a contadores de hardware.
    - **Comando Ejemplo:** `sudo setcap cap_perfmon=ep /usr/bin/perf_monitor`

25. **CAP_SETFCAP**
    - **Descripción:** Permite establecer las capacidades de archivos.
    - **Ejemplo de Uso:** Una herramienta de gestión de capacidades que necesita establecer capacidades en archivos.
    - **Comando Ejemplo:** `sudo setcap cap_setfcap=ep /usr/bin/cap_manager`

26. **CAP_SETGID**
    - **Descripción:** Permite establecer el ID de grupo efectivo.
    - **Ejemplo de Uso:** Un programa que necesita cambiar el grupo efectivo para realizar tareas específicas.
    - **Comando Ejemplo:** `sudo setcap cap_setgid=ep /usr/bin/group_changer`

27. **CAP_SETPCAP**
    - **Descripción:** Permite establecer las capacidades del proceso.
    - **Ejemplo de Uso:** Un programa que necesita cambiar sus propias capacidades de ejecución.
    - **Comando Ejemplo:** `sudo setcap cap_setpcap=ep /usr/bin/cap_setter`

28. **CAP_SETUID**
    - **Descripción:** Permite establecer el ID de usuario efectivo.
    - **Ejemplo de Uso:** Un programa que necesita cambiar el usuario efectivo para realizar tareas específicas.
    - **Comando Ejemplo:** `sudo setcap cap_setuid=ep /usr/bin/user_changer`

29. **CAP_SYS_ADMIN**
    - **Descripción:** Permite realizar una variedad de tareas administrativas del sistema.
    - **Ejemplo de

 Uso:** Un programa de administración del sistema que necesita realizar tareas avanzadas.
    - **Comando Ejemplo:** `sudo setcap cap_sys_admin=ep /usr/bin/sys_admin`

30. **CAP_SYS_BOOT**
    - **Descripción:** Permite reiniciar y apagar el sistema.
    - **Ejemplo de Uso:** Un programa de gestión de energía que necesita reiniciar el sistema.
    - **Comando Ejemplo:** `sudo setcap cap_sys_boot=ep /usr/bin/reboot_tool`

31. **CAP_SYS_CHROOT**
    - **Descripción:** Permite utilizar `chroot`.
    - **Ejemplo de Uso:** Un entorno de sandbox que utiliza `chroot` para aislar procesos.
    - **Comando Ejemplo:** `sudo setcap cap_sys_chroot=ep /usr/bin/sandbox`

32. **CAP_SYS_MODULE**
    - **Descripción:** Permite insertar y eliminar módulos del kernel.
    - **Ejemplo de Uso:** Un programa de gestión de módulos que necesita cargar y descargar módulos del kernel.
    - **Comando Ejemplo:** `sudo setcap cap_sys_module=ep /usr/bin/mod_manager`

33. **CAP_SYS_NICE**
    - **Descripción:** Permite modificar la prioridad de ejecución de los procesos.
    - **Ejemplo de Uso:** Un programa que necesita ajustar la prioridad de otros procesos.
    - **Comando Ejemplo:** `sudo setcap cap_sys_nice=ep /usr/bin/nice_manager`

34. **CAP_SYS_PACCT**
    - **Descripción:** Permite activar y desactivar la contabilidad del proceso.
    - **Ejemplo de Uso:** Un programa de auditoría que necesita habilitar la contabilidad del proceso.
    - **Comando Ejemplo:** `sudo setcap cap_sys_pacct=ep /usr/bin/audit_tool`

35. **CAP_SYS_PTRACE**
    - **Descripción:** Permite realizar seguimiento (tracing) a otros procesos.
    - **Ejemplo de Uso:** Un depurador que necesita rastrear procesos.
    - **Comando Ejemplo:** `sudo setcap cap_sys_ptrace=ep /usr/bin/debugger`

36. **CAP_SYS_RAWIO**
    - **Descripción:** Permite realizar operaciones de E/S en bruto.
    - **Ejemplo de Uso:** Un programa de diagnóstico de hardware que necesita acceso directo a dispositivos.
    - **Comando Ejemplo:** `sudo setcap cap_sys_rawio=ep /usr/bin/hw_diag`

37. **CAP_SYS_RESOURCE**
    - **Descripción:** Permite aumentar los límites de recursos.
    - **Ejemplo de Uso:** Un programa de ajuste de rendimiento que necesita aumentar los límites de recursos.
    - **Comando Ejemplo:** `sudo setcap cap_sys_resource=ep /usr/bin/resource_manager`

38. **CAP_SYS_TIME**
    - **Descripción:** Permite establecer el tiempo del sistema.
    - **Ejemplo de Uso:** Un servidor de tiempo que necesita sincronizar el reloj del sistema.
    - **Comando Ejemplo:** `sudo setcap cap_sys_time=ep /usr/bin/time_sync`

39. **CAP_SYS_TTY_CONFIG**
    - **Descripción:** Permite configurar terminales TTY.
    - **Ejemplo de Uso:** Un administrador de terminales que necesita configurar dispositivos TTY.
    - **Comando Ejemplo:** `sudo setcap cap_sys_tty_config=ep /usr/bin/tty_config`

40. **CAP_WAKE_ALARM**
    - **Descripción:** Permite configurar alarmas de despertador.
    - **Ejemplo de Uso:** Un programa de gestión de energía que necesita configurar alarmas de despertador.
    - **Comando Ejemplo:** `sudo setcap cap_wake_alarm=ep /usr/bin/alarm_manager`

### Uso de `setcap` y `getcap`

- **Establecer una capacidad:**

  ```sh
  sudo setcap cap_nombre_capacidad=ep /ruta/al/archivo
  ```

  Por ejemplo:

  ```sh
  sudo setcap cap_net_bind_service=ep /usr/bin/python3
  ```

- **Verificar capacidades asignadas:**

  ```sh
  getcap /ruta/al/archivo
  ```

  Por ejemplo:

  ```sh
  getcap /usr/bin/python3
  ```

### Conclusión

Las capacidades en Linux permiten un control granular sobre los privilegios que se pueden otorgar a los procesos, evitando la necesidad de otorgar permisos de superusuario completos. Cada capacidad otorga un permiso específico que puede ser crucial para ciertas aplicaciones y servicios, mejorando la seguridad y la eficiencia del sistema al limitar los permisos al mínimo necesario para la operación.