---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Parciales'
pubDate: 2024-04-26
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Objetos/composite.webp'
    alt: ''
tags: ["POO"]
category: Patrones
---

![1](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/da385fe9-f496-4ad3-be7d-83f594281b4a)

#### Ejercicio 1 - Patrones

Se quiere implementar una aplicación para seguros de vehículos. Cada seguro estará asociado a un vehículo en específico, y una persona podrá contar con múltiples vehículos asegurados. La compañía brinda 3 tipos de seguros. Cada seguro incluye una cobertura de vida, una cobertura de daños a otros vehículos y una cobertura de daños al vehículo propio, según se muestra a continuación:

| Seguro contra terceros | Seguro terceros completo | Seguro todo riesgo |
|------------------------|--------------------------|--------------------|
| **Costo del seguro de vida**: contempla solo el **seguro del conductor**. 100 pesos multiplicado por la edad del asegurado. | **Costo del seguro de vida**: Al **seguro del conductor** se le suma un monto de 6.000 pesos multiplicado por la cantidad máxima de ocupantes que posee el vehículo. | **Costo del seguro de vida**: Al **seguro del conductor** se le suma un monto de 9.000 pesos multiplicado por la antigüedad del vehículo asegurado. |
| **Costo de la cobertura de daños a otros vehículos**: 1.000 pesos más el 1% del valor del vehículo. | **Costo de la cobertura de daños a otros vehículos**: 4.000 pesos multiplicado por la antigüedad del auto si el auto tiene más de 4 años o 10.000 pesos si el auto tiene hasta 4 años. | **Costo de la cobertura de daños a otros vehículos**: 100.000 pesos dividido la edad del conductor. |
| **Costo de la cobertura de destrucción total del vehículo propio por accidente o incendio**: 0.5% del valor del auto asegurado. | **Costo de la cobertura de destrucción total del vehículo propio por accidente o incendio**: 0.5% del valor del auto asegurado + 10.000 pesos. | **Costo de la cobertura de destrucción total o parcial del vehículo propio por accidente o incendio**: 0.5% del valor del auto asegurado + 1.000 pesos por la antigüedad del auto. |


La empresa cuenta con promociones disponibles para sus asegurados, pero planea agregar nuevas promociones en un futuro. Las promociones son: (i) promoción por múltiples pólizas, en donde se le descuenta al asegurado un 10% a cada una de los seguros contratados, si tiene al menos 2 pólizas, (ii) promoción por campaña excepcional, se le descuenta el 50% del costo del seguro más económico que tiene contratado y (iii) sin promoción, es decir, no se le realiza ningún descuento.

A los nuevos asegurados, la empresa asigna una promoción específica. Sin embargo, la empresa puede cambiarla en cualquier momento.

Usted debe brindar una solución para calcular el monto a abonar correspondiente a un asegurado. Este costo final es la suma de los costos de sus seguros aplicando la bonificación por la promoción que posea.

Ayuda: Para calcular los años entre dos fechas puede utilizar la siguiente expresión ChronoUnit.YEARS.between(fecha1, fecha2);



![2](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/87fed2e8-71d9-45bc-8ac4-bd68f2ae041f)
![3](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8f8b1673-3499-4eb0-bc90-c0fc5d680cbc)