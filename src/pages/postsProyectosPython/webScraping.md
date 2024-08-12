---
layout: ../../layouts/MarkdownPostLayout.astro
title: Preparando Entrevista
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Python/webScraping.jpg'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

![image](https://github.com/user-attachments/assets/bc2fa810-ba2b-4c9a-b98e-83dd15510c6f)

![image](https://github.com/user-attachments/assets/f218a462-7d57-4863-8155-14b88847776b)

![image](https://github.com/user-attachments/assets/4e7c1986-bd24-439b-afa2-01abd38073b1)

![image](https://github.com/user-attachments/assets/717c41e2-58fd-4c07-88ab-e31945f3a084)

![image](https://github.com/user-attachments/assets/417013b6-19a9-4d3a-b350-9a603a0b4121)

![image](https://github.com/user-attachments/assets/27d111f7-2f65-49de-896e-c36d3cfaa6da)

![image](https://github.com/user-attachments/assets/a66f8ebd-9cad-4e28-b103-745f552a35bf)

![image](https://github.com/user-attachments/assets/87b20987-5f68-456a-8341-17b6c983d8b2)

![image](https://github.com/user-attachments/assets/fcf131e3-b3e5-4f41-b45d-e770c202a6e3)

![image](https://github.com/user-attachments/assets/7f924924-6583-481b-aa9b-10fcb2fe722c)

![image](https://github.com/user-attachments/assets/42a31738-eee0-4d4d-9dd5-b85eeb23afd2)

![image](https://github.com/user-attachments/assets/e736bc0e-cf65-47a2-9937-3f31d0287206)

![image](https://github.com/user-attachments/assets/080b5aaf-e742-4995-af9b-9f87a769b149)

![image](https://github.com/user-attachments/assets/e6e3c85d-367e-46df-a404-89a95c050996)

![image](https://github.com/user-attachments/assets/f1e229fd-a9bc-4141-9e7b-9482313f7271)

![image](https://github.com/user-attachments/assets/a74ffd2e-8df0-4307-8896-30d63f171465)

![image](https://github.com/user-attachments/assets/f70de589-a56e-4c49-81cf-1644218d07d8)

![image](https://github.com/user-attachments/assets/20fbf559-16c2-402a-91f5-55205474ed3e)

![image](https://github.com/user-attachments/assets/21145bcb-9332-47ec-8a9c-ee585637bd56)

![image](https://github.com/user-attachments/assets/68099bc1-d332-481c-bacc-121b7bc58be2)

![image](https://github.com/user-attachments/assets/4edb1c59-8ef6-43ca-9f06-9b41eb2b4d27)

![image](https://github.com/user-attachments/assets/f477a715-7df2-4f63-93e1-a82d3b076c52)

![image](https://github.com/user-attachments/assets/6b6ae406-cedb-435e-b3e0-cb02c4dab199)

---

### Practicamos con ScrapePark

Vamos ausar la siguiente pagina para practicar, aca dejo el link

- [ScrapePark](https://scrapepark.org/courses/spanish/)

![image](https://github.com/user-attachments/assets/8a41e3b8-5017-4e6a-b42e-41e2397d1496)


### Uso basico de APIs

#### Uso de API de manera directa

![image](https://github.com/user-attachments/assets/aa0194e6-e727-4d1a-8385-63b8937170d6)

```python
import requests

latitud = -32
longitud = -58
fecha = '2021-09-01'

respuesta = requests.get(f'https://api.sunrise-sunset.org/json?lat={latitud}&lng={longitud}&date={fecha}')

print(respuesta.json())

print(respuesta.json()['status'])

print(respuesta.json()['results']['sunset'])
```

![image](https://github.com/user-attachments/assets/cc3e1f14-12af-4b3e-99bc-85c32ae2df9f)