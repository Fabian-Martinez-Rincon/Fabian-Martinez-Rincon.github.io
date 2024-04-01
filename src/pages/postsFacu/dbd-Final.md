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

### Capitulo 13. `Conceptos de Normalización`

---

## procesamiento de Consultas

### Capitulo 14. `Lenguajes de Procesamientom de Datos (Algebra y Calculo)`

### Capitulo 15. `SQL y QBE`

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