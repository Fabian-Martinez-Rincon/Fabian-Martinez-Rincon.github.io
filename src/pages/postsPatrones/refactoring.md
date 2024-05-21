---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Refactoring'
pubDate: 2024-04-24
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Objetos/proxy.webp'
    alt: ''
tags: [""]
---

## Ejercicio 1: Algo huele mal

Indique qué malos olores se presentan en los siguientes ejemplos.

### 1.1 Protocolo de Cliente

La clase Cliente tiene el siguiente protocolo. ¿Cómo puede mejorarlo? 

```java
/** 
* Retorna el límite de crédito del cliente
*/
protected double lmtCrdt() {...

/** 
* Retorna el monto facturado al cliente desde la fecha f1 a la fecha f2
*/
protected double mtFcE(LocalDate f1, LocalDate f2) {...

/** 
* Retorna el monto cobrado al cliente desde la fecha f1 a la fecha f2
*/
protected double mtCbE(LocalDate f1, LocalDate f2) {...
```


### 1.2 Participación en proyectos

Al revisar el siguiente diseño inicial (Figura 1), se decidió realizar un cambio para evitar lo que se consideraba un mal olor. El diseño modificado se muestra en la Figura 2. Indique qué tipo de cambio se realizó y si lo considera apropiado. Justifique su respuesta.


![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/79fb3e62-03b2-4701-945b-1b2137361c24)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/25f27e34-2be2-4d08-9fc6-730643d3fffa)

### 1.3 Cálculos 

Analice el código que se muestra a continuación. Indique qué code smells encuentra y cómo pueden corregirse.

```java
public void imprimirValores() {
	int totalEdades = 0;
	double promedioEdades = 0;
	double totalSalarios = 0;
	
	for (Empleado empleado : personal) {
		totalEdades = totalEdades + empleado.getEdad();
		totalSalarios = totalSalarios + empleado.getSalario();
	}
	promedioEdades = totalEdades / personal.size();
		
	String message = String.format("El promedio de las edades es %s y el total de salarios es %s", promedioEdades, totalSalarios);
	
	System.out.println(message);
}
```

## Ejercicio 2

Para cada una de las siguientes situaciones, realice en forma iterativa los siguientes pasos:
- (i) indique el mal olor,
- (ii) indique el refactoring que lo corrige, 
- (iii) aplique el refactoring, mostrando el resultado final (código y/o diseño según corresponda). 

Si vuelve a encontrar un mal olor, retorne al paso (i).

### 2.1 Empleados

```java

public class EmpleadoTemporario {
    public String nombre;
    public String apellido;
    public double sueldoBasico = 0;
    public double horasTrabajadas = 0;
    public int cantidadHijos = 0;
    // ......

    public double sueldo() {
        return this.sueldoBasico
            (this.horasTrabajadas * 500) 
            (this.cantidadHijos * 1000) 
            (this.sueldoBasico * 0.13);
        }
}

public class EmpleadoPlanta {
    public String nombre;
    public String apellido;
    public double sueldoBasico = 0;
    public int cantidadHijos = 0;
    // ......
    
    public double sueldo() {
        return this.sueldoBasico 
            + (this.cantidadHijos * 2000)
            - (this.sueldoBasico * 0.13);
    }
}

public class EmpleadoPasante {
    public String nombre;
    public String apellido;
    public double sueldoBasico = 0;
    // ......
    
    public double sueldo() {
        return this.sueldoBasico - (this.sueldoBasico * 0.13);
    }
}

```

### 2.2 Juego

```java
public class Juego {
    // ......
    public void incrementar(Jugador j) {
        j.puntuacion = j.puntuacion + 100;
    }
    public void decrementar(Jugador j) {
        j.puntuacion = j.puntuacion - 50;
    }

    public class Jugador {
        public String nombre;
        public String apellido;
        public int puntuacion = 0;
    }
}
```