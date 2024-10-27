---
layout: ../../layouts/MarkdownPostLayout.astro
title: MidFlash
author: Fabian Martinez Rincon
description: "📷 Automatizacion de operaciones que hago para las imagenes individualmente, recortar las imagenes y aumentar las resoluciones de forma automatica"
image:
    url: '/gif/midflash.gif'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Python"]
category: Proyectos Python
---

<div align="center">
<img src="https://user-images.githubusercontent.com/55964635/209423757-dc0ee138-37e4-409d-a1f9-2f48c1da904e.png"/>
 </div>

<br>


<div class=" video-inline z-0 transition-transform duration-[1.5s] group-hover:scale-110">
    <img src="/gif/midflash.gif" class="max-w-screen-lg mx-auto noise pointer-events-none left-0 h-full w-full relative top-0 block overflow-hidden border-4 border-black">
</div>






### Version de Selenium 4.7.2

Para que el siguiente codigo funcione de forma 100% correcta, tenes que tener la carpeta de descargas limpia.

### Instalar dependencias

```cmd
pip install selenium
pip install pyautogui
```

## Explicacion momentanea 

- `1)` El programa comienza leyendo la ruta de una imagen de entrada y cargándola en memoria.
- `2)` El programa utiliza una técnica de procesamiento de imagen, como el algoritmo de borde de Canny, para detectar los bordes de la imagen y determinar qué partes de la imagen deben recortarse.
- `3)` El programa recorta la imagen según los bordes detectados y almacena la imagen recortada en una variable.
- `4)` El programa utiliza un modelo de inteligencia artificial entrenado para aumentar la resolución de las imágenes para aumentar la resolución de la imagen recortada.
- `5)` El programa guarda la imagen con la resolución aumentada en una ruta de salida especificada por el usuario.
- `6)` El programa finaliza y muestra al usuario un mensaje de éxito o un mensaje de error en caso de que haya ocurrido algún problema durante el procesamiento.

### Links de ayuda

- [Libreria](https://www.selenium.dev/selenium/docs/api/py/)
- [Link para las Imagenes](https://zyro.com/es/herramientas/upscaler-de-imagenes)
- [Web de ayuda](https://selenium-python.readthedocs.io/getting-started.html)

### Config

```python
import os
from PIL import Image
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import pyautogui
import time
from selenium.webdriver.support.wait import WebDriverWait


PATH_BASE = os.getcwd()
PATH_SOURCE = os.path.join(PATH_BASE, "base_images")
PATH_PROSSED = os.path.join(PATH_BASE, "processed_images")
PATH_PROSSED_RESOLUTION = os.path.join(PATH_BASE, "processed_resolution_images")
PATH_DOWNLOAD = "C:\\Users\\fabian\\Downloads"

BUTTON_CLOSE = 'button-close.modal__close-button'
BUTTON_COOKIES = 'button.medium-up.button--small.button--small-mobile.button--black'
BUTTON_LOAD = 'button.hero__button.button--small.button--small-mobile.button--white'
BUTTON_DOWNLOAD = 'button.button--medium.button--medium-mobile.button--black'
BUTTON_NEWLOAD = 'button.button--outline.button--medium.button--medium-mobile.button--black'

DRIVER = webdriver.Chrome(executable_path="chromedriver", chrome_options=webdriver.ChromeOptions())
DRIVER.get("https://zyro.com/es/herramientas/upscaler-de-imagenes")

if not os.path.exists(PATH_PROSSED):
    os.makedirs(PATH_PROSSED, exist_ok=True)
    
if not os.path.exists(PATH_PROSSED_RESOLUTION):
    os.makedirs(PATH_PROSSED_RESOLUTION, exist_ok=True)
```

### Download Wait

```python
def download_wait(path_to_downloads):
    seconds = 0
    dl_wait = True
    while dl_wait and seconds < 20:
        time.sleep(1)
        dl_wait = False
        for fname in os.listdir(path_to_downloads):
            if fname.endswith('.crdownload'):
                dl_wait = True
        seconds += 1
    return seconds
```

Este código define una función llamada "download_wait" que toma un argumento llamado "path_to_downloads". La función espera a que un archivo de descarga se complete durante 20 segundos y luego devuelve el número de segundos que ha transcurrido desde el inicio de la descarga.

La función utiliza un bucle "while" para esperar a que la descarga se complete. El bucle "while" se ejecuta mientras la variable "dl_wait" sea verdadera y el número de segundos sea menor que 20. La variable "dl_wait" se establece en verdadero al principio de la función y se utiliza para controlar cuándo debe finalizar el bucle.

Dentro del bucle "while", la función utiliza la función "sleep" de la biblioteca "time" para detener la ejecución del código durante un segundo. Luego, se establece la variable "dl_wait" en falso y se recorren todos los archivos en la carpeta de descargas especificada por el argumento "path_to_downloads". Si se encuentra un archivo que tenga como extensión ".crdownload", se establece la variable "dl_wait" en verdadero de nuevo.

Finalmente, se incrementa el contador de segundos en uno y se vuelve a evaluar la condición del bucle "while". Si la descarga aún no ha finalizado y el número de segundos es menor que 20, el bucle se repetirá y se volverá a ejecutar la función "sleep". Si la descarga se ha completado o si el número de segundos es igual o mayor que 20, el bucle se detendrá y la función devolverá el número de segundos que ha transcurrido desde el inicio de la descarga.

En resumen, esta función espera a que un archivo de descarga se complete durante 20 segundos y luego devuelve el número de segundos que ha transcurrido desde el inicio de la descarga.

### Push Button

```python
def push_button(button):
    WebDriverWait(DRIVER, 20).until(
        EC.element_to_be_clickable(
            DRIVER.find_element(By.CLASS_NAME, button)
        )).click()
```

Este código define una función llamada "push_button" que toma un argumento llamado "button". La función espera a que un elemento en la página web sea clickeable durante 20 segundos y, una vez que se haya vuelto clickeable, hace clic en él.

La función utiliza la biblioteca de selenium "WebDriverWait" para esperar a que el elemento sea clickeable. La biblioteca "WebDriverWait" toma dos argumentos: el "WebDriver" y el tiempo de espera en segundos. El "WebDriver" es un objeto que representa el navegador web y se encarga de controlar el navegador y realizar acciones en la página web. El tiempo de espera especifica cuánto tiempo se debe esperar a que el elemento sea clickeable antes de que se produzca un error.

La función también utiliza la biblioteca "EC" (Expected Conditions) de selenium para especificar la condición esperada (en este caso, que el elemento sea clickeable). La biblioteca "EC" proporciona una serie de condiciones esperadas que se pueden usar para esperar a que se cumplan ciertas condiciones en la página web.

Por último, la función utiliza el método "find_element" del "WebDriver" para encontrar el elemento en la página web. El método "find_element" toma dos argumentos: el tipo de elemento que se está buscando (en este caso, el nombre de la clase) y el valor del elemento (en este caso, el valor del argumento "button"). Una vez que se ha encontrado el elemento, se hace clic en él usando el método "click".

### Cutout

```python
def cutout(image):
    imagen = Image.open(os.path.join(PATH_SOURCE, image))
    ancho, alto = imagen.size
    ancho_cuadrante = ancho // 2
    alto_cuadrante = alto // 2

    # Crea una lista con las coordenadas de cada cuadrante
    cuadrantes = [
        (0, 0, ancho_cuadrante, alto_cuadrante),
        (ancho_cuadrante, 0, ancho, alto_cuadrante),
        (0, alto_cuadrante, ancho_cuadrante, alto),
        (ancho_cuadrante, alto_cuadrante, ancho, alto)
    ]

    for i, cuadrante in enumerate(cuadrantes):
        # Utiliza el método crop() para cortar la imagen en el cuadrante especificado
        imagen_cuadrante = imagen.crop(cuadrante)
        
        imagen_cuadrante.save(
            os.path.join(
                PATH_PROSSED, 
                image.replace('.png', '_{}.jpg'.format(i))
                )
            )

```

Recorta la imagen en 4 cuadrantes

---
## first_image y proced_image

```python
def first_image(image):
    push_button(BUTTON_COOKIES)
    push_button(BUTTON_LOAD)
    
    time.sleep(3)
    pyautogui.write(image)
    pyautogui.press("enter")
    WebDriverWait(DRIVER, 10).until(EC.presence_of_element_located((By.CLASS_NAME, BUTTON_DOWNLOAD)))
    
    push_button(BUTTON_DOWNLOAD)

def proced_image(image):
    push_button(BUTTON_NEWLOAD)
    time.sleep(3)
    
    pyautogui.write(image)
    pyautogui.press("enter")
    
    time.sleep(15)
    push_button(BUTTON_DOWNLOAD)
```

Como la pagina tiene distintos botones dependiendo de la acción, al principio era distinto automatizar las resoluciones, pero despues de la primera imagen, todas las demas eran con la misma operación, es por eso que hice dos modulos separados

## El programa principal

```python
try:
    imagenes = [
        imagen for imagen in os.listdir(PATH_SOURCE) 
        if imagen.endswith(('.jpg', '.png'))
    ]
    for image in imagenes:
        cutout(image)
        
    imagenes_procesadas = [
        os.path.join(PATH_PROSSED, imagen) for imagen in os.listdir(PATH_PROSSED) 
        if imagen.endswith(('.jpg', '.png'))
    ]
    
    first_image(imagenes_procesadas[0])    
    for image in imagenes_procesadas[1:]:
        proced_image(image)
    download_wait(PATH_DOWNLOAD)
    DRIVER.quit()
    
except FileNotFoundError:
    print('No existe la ruta', PATH_SOURCE)
except NotADirectoryError:
    print('La ruta no es un directorio ', PATH_SOURCE)
```