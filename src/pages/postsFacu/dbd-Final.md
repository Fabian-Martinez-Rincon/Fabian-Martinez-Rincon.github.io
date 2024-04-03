---
layout: ../../layouts/MarkdownPostLayout.astro
title: Final DBD
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/dbd.gif'
    alt: "Miniatura de los rayos de Astro."
pubDate: 2024-03-31
tags: ["Modelado de Datos", "Procesamiento de Consultas", "Seguridad e Integridad de los Datos"]
---

- [Modelado De Datos](#modelado-de-datos)
    - [Capitulo 9. `Introducción al modelado de Datos`](#capitulo-9-introducción-al-modelado-de-datos)
    - [Capitulo 10. `Modelado Entidad Relación Conceptual`](#capitulo-10-modelado-entidad-relación-conceptual)
    - [Capitulo 11. `Modelado Entidad Relación Lógico`](#capitulo-11-modelado-entidad-relación-lógico)
    - [Capitulo 12. `Modelado Fisico (Relacional)`](#capitulo-12-modelado-fisico-relacional)
    - [Capitulo 13. `Conceptos de Normalización`](#capitulo-13-conceptos-de-normalización)
- [procesamiento de Consultas](#procesamiento-de-consultas)
    - [Capitulo 14. `Lenguajes de Procesamientom de Datos (Algebra y Calculo)`](#capitulo-14-lenguajes-de-procesamientom-de-datos-algebra-y-calculo)
    - [Capitulo 15. `SQL y QBE`](#capitulo-15-sql-y-qbe)
    - [Capitulo 16. `Optimización de Consultas`](#capitulo-16-optimización-de-consultas)
- [Seguridad e Integridad de los Datos](#seguridad-e-integridad-de-los-datos)
    - [Capitulo 17. `Concecptos de Transacciones`](#capitulo-17-concecptos-de-transacciones)
    - [Capitulo 18. `Transacciones en Entornos Concurrentes`](#capitulo-18-transacciones-en-entornos-concurrentes)
    - [Capitulo 19. `Seguridad e Integridad`](#capitulo-19-seguridad-e-integridad)

---

## Modelado de Datos

### Capitulo 9. `Introducción al modelado de Datos`

<details><summary>Un modelo de datos</summary>

Es un conjunto de herramientas conceptuales que permiten describir la información que es necesaria administrar para un SI (Sistema de Información),
las relaciones existen entre estos datos, la semántica asociada y las restricciones de consistencia
</details>

<details><summary>Modelado Conceptual</summary>

Es desarrollado durante la etapa de adquisición de conocimiento del problema; el analista se independiza del tipo de SGBD (Sistema de Gestión de Bases de Datos) a utilizar y, por consiguiente, dedl producto de mercado. Así, el modelo conceptual se desarrolla independientemente de su implementación final.
</details>

<details><summary>Modelado Lógico</summary>

El analista debe determinar el tipo de SGBD, debido a que las decisiones que debe tomar dependen de esa elección.
</details>

<details><summary>Modelado Físico</summary>

Es necesario tomar decisiones específicas. Estas últimas tienen que ver con el producto de mercado a utilizar, es decir, el SGBD específico.
</details>

### Capitulo 10. `Modelado Entidad Relación Conceptual`

<details><summary>Caracteristicas</summary>


![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/b693153b-0d1c-4a6a-84d3-528d050c74dc)
</details>

<details><summary>Entidad</summary>


![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/b6d63f29-0df5-4547-a9bb-8572e04c8871)
![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/526eb338-f35e-43ac-b650-d947aa1decc5)
</details>

<details><summary>Relación</summary>

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/e04df4dc-cf37-4800-929b-e1a5d6458048)

#### Ejemplos

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/537b9876-f60f-425c-bc18-6b18c9eebe2c)
</details>

<details><summary>Atributo</summary>

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/3a047ef6-5ae3-41d2-aac6-aece47c70756)

#### Ejemplo

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/66cd70e8-0e74-461e-8fb7-2a8252f450e5)

#### Cardinalidades

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/00f4c0a0-2d1f-4574-9a01-273916b8a596)
</details>

<details><summary>Jerarquías de Generalización</summary>

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/c89b332b-8d0e-40e2-bf6f-20a3de2bd7ba)

#### Ejemplo

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/c2cf7bb0-a514-4cf4-a64e-9b94a0728bc8)

</details>

<details><summary>Subconjunto</summary>

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/882e35f7-e4c0-4860-bb28-a158eff5aceb)

#### Ejemplo

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/3b8787ff-24ad-4f3b-b88d-652fa366ced6)

</details>

<details><summary>Atributos Compuestos</summary>

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/96cff147-7eec-4092-9eb9-2d3b98b553c8)

#### Ejemplo

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/f87b9c7e-e7ad-4723-b4de-9cc55a463979)

</details>

<details><summary>Identificadores</summary>

![image](https://github.com/Fabian-Martinez-Rincon/FOD/assets/55964635/a5af9c52-03aa-4ac8-b074-20cf2301cc74)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fac1b82f-a829-40ea-bc7d-d3a082703736)

#### Identificador Simple

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/150e09dd-b1cb-400c-bea1-2b89513dfdcb)

#### Identificador Compuesto

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0e67bd94-1dec-4c76-b31a-70d1e7e8e1f2)

#### Identificador Externo

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7b0f32b0-4423-4cdc-abc2-3fb653fc3a64)

</details>

### Capitulo 11. `Modelado Entidad Relación Lógico`

<details><summary>Atributos Derivados</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b2560676-d61d-4153-b785-8f9abd6f5196)
</details>


<details><summary>Atributos Polivalentes</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5fe85d5c-e6e6-43d5-84f6-d942ed97f6ad)

#### Ejemplo de como deberian verse los atributos polivalentes

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b5f8aea3-9115-4a83-b097-6e48ade4ba64)

</details>

<details><summary>Atributos Compuestos</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a045d635-b49e-4021-a781-b06ccbcb284c)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/370263c7-7898-490e-bde8-2f3592755181)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fed015d7-a5e6-40e1-a3ef-5ddd19ee19db)
</details>

<details><summary>Jerarquías</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/60cce5aa-f12a-4884-a759-e7fe924dd0dd)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1e50b6b5-658c-4e01-be7d-4ee1b1124e40)

### Primer Ejemplo de Relacion de Jerarquia (P-E)

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/23066141-5b6b-4b2c-994e-490d0cb6c2a0)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/94051a04-c275-4ac3-862c-08a5cfd9bda1)
</td></table>

#### Sobre el mismo ejemplo pero aplicando la 3ra opción

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b725c0bc-9dad-4de6-88fd-b5af84806a7d)

### Segundo Ejemplo de Relacion de Jerarquia (T-E) 

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e2ee215f-363b-4bdc-a1da-3304ede7a604)

#### Resolución con la 3era opción

Las otras dos opciones aunque se pueden aplicar, no son rentables en este caso ya que perdemos mucha legibilidad y mantenibilidad en el modelo.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2a562884-b811-4fa3-9c49-34f56af4c521)

</details>

### Capitulo 12. `Modelado Fisico (Relacional)`

<details><summary>Eliminación de identificadores externos</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f5b486ac-c482-4d37-8928-ca9c070480fc)

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ddacd0b4-ebbf-4f3f-8b49-14fdf1701cae)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3ee482c9-9b62-42f8-8072-9d61088e80ae)
</td></table>
</details>

<details><summary>Conversión de Entidades</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/96bcdbd2-122f-4240-8e6a-ba3accaabf5d)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e46fb735-5e36-41a2-ab26-1f5c6b41d2eb)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f624fa1c-5f5b-4c9f-aa50-d65927167c85)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b5095bcc-2777-475b-a8b6-b0e637966d0b)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/847f4d34-39bf-4725-af39-ce1114bc7e50)
</details>

<details><summary>Conversión de Relaciones (Cardinalidad)</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2319e63c-0211-45f9-8407-3fb969f33392)
</details>

<details><summary>Cardinalidad Muchos a Muchos</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f1237f7d-cdb2-42f2-9902-1b58d844eb2d)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4775229c-d4c1-41bf-b449-94cf22d3ec95)
</details>

<details><summary>Cardinalidad Uno a Muchos</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8e04e746-fac7-4f47-90b7-437150b9bfb2)
</details>

<details><summary>Uno a Muchos con participación total</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5a0d9073-8a69-4e60-ad3f-94cbff645cf3)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9b6d6e8c-f63a-4cf8-a72c-7fef727d861e)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a9406746-8f58-44d3-ac11-2d0b7bfbded3)
</details>

<details><summary>Uno a Muchos con participación parcial del lado de muchos</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5f35607f-9fbf-4c21-89a0-bc37bede0377)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5a410b48-90de-44d2-8ab1-4724472ddedf)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c40ebe41-3b33-4c43-aec7-3bb097a0bd11)
</details>

<details><summary>Uno a Muchos con participación parcial del lado de uno</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b38d61b6-843e-4e18-a836-8acf6d0246f7)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/15569a2c-9c1b-46b1-b221-59f19c29c9ac)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c3aaf951-f3ba-4298-8566-8b77ab0424e2)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/71cfb10a-32ab-4cfc-945b-92a2161b04d4)
</details>

<details><summary>Uno a Muchos con cobertura parcial de ambos lados</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/019dd03e-6dcc-487d-a3e5-ffecaf0a7ce0)
</details>

<details><summary>Cardinalidad Uno a Uno</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3caa6244-05bf-41f1-8c45-dc7ca81a8a4f)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b7d40c38-df13-430e-9893-ab62179ba856)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fe282b50-14da-4cea-acc9-5cdb238b007a)
</details>

No entiendo muy bien cuando hablan de un id Auto Incremental

### Capitulo 13. `Conceptos de Normalización`

<details><summary>Definición</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/10312851-8abf-4ca3-a73c-4a395518219a)
</details>

<details><summary>Anomalías de Inserción</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/37192650-6f13-4903-87ab-a354f2d64ce0)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/96d234ac-158e-4f7a-b136-c00a3a8338f1)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5c4096e8-7bfb-4568-a89d-cd9a9147f723)
</details>

<details><summary>Anomalías de Borrado</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/40bb4730-2c35-4d47-9928-5c73e5d0accb)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/96d234ac-158e-4f7a-b136-c00a3a8338f1)
</details>

<details><summary>Anomalías de Modificación</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3dfc3b3e-d372-461b-8bdc-6fe7337b6b55)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/96d234ac-158e-4f7a-b136-c00a3a8338f1)
</details>

<details><summary>Dependencia Funcional (Voy a rezar para que no tomen esto)</summary>
<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajhmb2ViYTQ4MTd3Z25nYWU2Y2N2OTV2Mm1sa2E1YXZxemtqNTN4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1yMQsiA60rrjMD3vSk/giphy.gif'>
</details>

<details><summary>Formas Normales (Definición)</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5fc57b5c-bb4f-4387-866d-930ea28c39f2)
</details>

<details><summary>Primera Forma Normal</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4805cd4d-bcb4-4ffd-8cca-3fc2d0df7b3a)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6f30c8c2-0376-49b0-a314-481a9123ce98)
</details>

<details><summary>Segunda Forma Normal</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a8d2b6b5-0c83-4acf-8f19-e3a30aa36395)
</details>

<details><summary>Tercera Forma Normal</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ab047be1-97c9-46a7-91ef-39166a44d480)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/faf87410-e7d0-4238-9d58-8fa0856dd802)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/95ee5640-dd54-4c19-8903-6f65b683e091)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7c0da7d4-a847-4f1a-9705-3d8215a5fa04)
</details>

---

## Procesamiento de Consultas

### Capitulo 14. `Lenguajes de Procesamientom de Datos (Algebra y Calculo)`

<details><summary>Definición</summary>

Los lenguajes de procesamiento de datos permiten operar con la información contenida en una BD

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ebaabdb3-8079-41ab-89c7-e11d47d16135)

</details>

<details><summary>Álgebra relacional</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a0f3d6d8-3acb-443b-b559-61f2c9716f28)
</details>

<details><summary>Operadores Basicos (Selección, Proyección, Producto Cartesiano, Renombre, Union, Diferencia)</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/55a17f2a-02ca-4284-88ee-72f7240055d5)

### Selección

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/26d82211-698a-42c9-87c9-99b8a7e5e6e1)

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5486427c-a274-49b6-9a71-170d8191f746)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/beaef63d-ebc0-47c4-b152-6df97222138f)
</td></table>


### Proyección

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/23865cd1-d1e6-4feb-b83d-1df50f984056)

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f77ba88e-f755-4542-b580-16664349233e)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/bce22b96-a207-4627-a4d0-9fed0847f29a)
</td></table>

### Producto Cartesiano

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5fd9042e-733f-462d-9904-3336940dcdac)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/68f89435-fe31-4412-b399-6074df552902)

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f9ea231d-6821-4060-88e3-6f2b99b025c4)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f047b7f7-1407-46d3-a25b-0ddd89ec5e21)
</td></table>

#### Resultado

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9704040f-9693-4f72-9411-e64a4f40488c)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/36a9c303-d2b4-460d-982d-a27e9a28275e)

### Renombre

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/21479ea2-09cc-4b85-ad32-0a14a78b3054)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/707049bd-4a64-46ee-bfb0-5c723441cd90)

#### Resultado

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ca8ade51-3800-4504-9229-28d2bdaea84f)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fb120440-ffa9-45af-8a53-0f70ffe7fc2a)
</td></table>

### Union

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/63cb07c0-f663-4579-bd8e-2baab048d065)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/28b69d3b-1b83-4afb-846e-509f2aa81f0c)

#### Tablas

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/14562c37-bcd8-4be0-80a7-6e5684d46466)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/82673347-f1a2-46e4-93ac-4db6c219d9f8)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7a30fac2-982c-4ee8-80fa-17fe7f3e96e8)
</td></table>

#### Resultado

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/50510ba8-219f-4154-bea1-ba3cd954e4a5)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1c059871-12fb-4aee-8177-428fb058c700)

### Diferencia

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/776fdb23-47b6-4a9c-be03-8cf92dffacb0)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c36e0f93-ae5c-4035-97d3-5c8925194cc8)

#### Tablas

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/14562c37-bcd8-4be0-80a7-6e5684d46466)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/82673347-f1a2-46e4-93ac-4db6c219d9f8)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7a30fac2-982c-4ee8-80fa-17fe7f3e96e8)
</td></table>

#### Resultado

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3265ba61-2467-4ca7-be08-14b503bf0f08)

</details>

<details><summary>Operadores adicionale (Producto Natural, Intersección, Asignación, División)</summary>

### Producto Natural

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6f12af31-fa5c-4ad8-9d96-2e0d52b80680)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/36f3f46e-fca5-490b-a792-2ae0f2661d22)

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f9ea231d-6821-4060-88e3-6f2b99b025c4)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f047b7f7-1407-46d3-a25b-0ddd89ec5e21)
</td></table>

#### Resultado

Seria esto sin las tablas repetidas

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9704040f-9693-4f72-9411-e64a4f40488c)

### Intersección

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8c3df123-9993-4b80-b1ac-11924426e15a)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/89bba6b0-e8c8-4d25-907f-05ba58bb7f8b)

<table><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/14562c37-bcd8-4be0-80a7-6e5684d46466)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/82673347-f1a2-46e4-93ac-4db6c219d9f8)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7a30fac2-982c-4ee8-80fa-17fe7f3e96e8)
</td></table>

#### Resultado

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3d1a2f65-4617-4671-8f1b-6ffcfad9348e)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c7bfa7cd-868d-4a24-b5fb-e63ff0cb55dd)

### Asignación

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0dafdca6-6694-473b-bf4e-d197ce16242c)

### División

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/dd4e0285-41ca-46ac-99f2-9288b75695d1)

</details>

<details><summary>Actualizaciones utilizando AR (Altas, Bajas, Modificaciones)</summary>

### Altas

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/30b1a46a-e535-4643-abfa-225850d1a897)

### Bajas

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/dc40371e-a64d-4f07-bb72-f22213b91dcf)

### Modificaciones

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/442e77f5-6684-4d87-8491-9c5a7b5740fa)

</details>

### Capitulo 15. `SQL y QBE`

<details><summary>Crear o borrar una BD</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/67504e79-25c4-4237-bdfd-187b39f3a610)
</details>

<details><summary>Lenguaje de Manipulación de Datos</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/58a3d666-e379-43e2-bb7a-af25749aaa22)
</details>

<details><summary>Estructura Basica</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/22fd98d6-4ce1-4d77-bba3-5364182db56e)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d869ba0c-8c47-4b3a-8288-6888be4ad3e1)
</details>

<details><summary>Operaciones de Consulta</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1dcc3ea3-0fe8-4666-b3ab-937b54464163)
</details>

<details><summary>Consultas de funciones de agregación</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/cc3ae613-a1d4-451e-b653-3a3b703b388e)
</details>

<details><summary>Funciones de Agrupación</summary>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/118a9c8a-4d57-4bf6-bf7a-a404207ff632)
![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c28ee4bb-3736-4258-b9b3-317e76b2807f)
</details>

> Me tengo que hacer algun apunte sobre todo SQL no porque sea mucho que lo es, sino que es mucho de forma muy distina, muchas operaciones.

### Capitulo 16. `Optimización de Consultas`

---

## Seguridad e Integridad de los Datos

### Capitulo 17. `Concecptos de Transacciones`

### Capitulo 18. `Transacciones en Entornos Concurrentes`

### Capitulo 19. `Seguridad e Integridad`

---

## Finales

### Final de Marzo 2024

- `1)` Por que se debe remover la jerarquia del modelo logico relacional
- `2)` Que cardinalidad deben poseer los atributos derivados?
- `3)` Para que se define la Integridad Referencial y que ventajas trae?
- `4)` porque el modelo conceptual es independiente del tipo de dbms?
- `5)` Por que el DBMS es el encargado de hacer la optimizacion
- `6)` Que diferencia hay entre lenguaje procedural y no procedural
- `7)` Durabilidad en entornos monousuario
- `8)` Por que no hay agregacion en el Where
- `9)`  crear tu pregunta