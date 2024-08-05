---
layout: ../../layouts/MarkdownPostLayout.astro
title: Final Concurrente
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Materias/fod.webp'
    alt: "Miniatura de los rayos de Astro."
pubDate: 2024-08-05
tags: [""]
category: Facultad
---

Sea la siguiente solución al problema del producto de matrices de nxn con P
procesos trabajando en paralelo.

```bash
process worker[w = 1 to P] { # strips en paralelo (p strips de n/P filas) }
    int first = (w-1) * n/P; # Primera fila del strip
    int last = first + n/P - 1; # Última fila del strip
    for [i = first to last] {
        for [j = 0 to n-1] {
            c[i,j] = 0.0;
            for [k = 0 to n-1]
                c[i,j] = c[i,j] + a[i,k]*b[k,j];
        }
    }
}
```

#### Parte A)

<details><summary>Suponga que n=128 y cada procesador es capaz de ejecutar un proceso. ¿Cuántas asignaciones, sumas y productos se hacen secuencialmente (caso en que P=1)?</summary>

Si el algoritmo se ejecuta secuencialmente se tienen:
- Asignaciones: 128^3 + 128^2 = 2097152 + 16384 = 2113536
- Sumas: 128^3 = 2097152.
- Productos: 128^3 = 2097152.

</details>

<hr class="yellow">

#### Parte B)

<details><summary>¿Cuántas se realizan en cada procesador en la solución paralela con P=8?</summary>

Si tenemos 8 procesos cada uno con un strip de 16 (128/8) los cálculos de tiempo quedarían para cada proceso como:

- **Asignaciones**: 128^2 * 16 + 128 * 16 = 262144 + 2048 = 264192.
- **Sumas**: 128^2 * 16 = 262144.
- **Productos**: 128^2 * 16 = 262144

</details>

<hr class="yellow">

#### Parte C)

<details><summary>Si los procesadores P1 a P7 son iguales, y sus tiempos de asignación son 1, de suma 2 y de producto 3, y si P8 es 4 veces más lento, ¿Cuánto tarda el proceso total concurrente? ¿Cuál es el valor del speedup (Tiempo secuencial/Tiempo paralelo)?. Modifique el código para lograr un mejor speedup.</summary>

![image](https://github.com/user-attachments/assets/8993edde-c840-49af-81e1-f290afece8ef)

</details>

---

Dado el siguiente programa concurrente con memoria compartida:

```bash
X:=4; y:=2; z:=3;
Co
x:=x-z//z:=z*2//y:=z+4
Oc
```

#### Parte A)

<details><summary>Cuáles de las asignaciones dentro de la sentencia co cumplen la propiedad
de ASV. Justifique claramente.</summary>

![image](https://github.com/user-attachments/assets/79f4d564-82b6-4681-b70a-9f08f7c9d1d1)

</details>

<hr class="yellow">

#### Parte B)

<details><summary>Indique los resultados posibles de la ejecución. Justifique</summary>

![image](https://github.com/user-attachments/assets/58427e83-7a91-40d4-afc0-0e18aa2d98c1)

</details>

---

Dado el siguiente programa concurrente con memoria compartida:

```bash
x = 3; y = 2; z = 5;
co
x = y * z // z = z * 2 // y = y + 2x
oc
```

#### Parte A)

<details><summary>Cuáles de las asignaciones dentro de la sentencia co cumplen la propiedad de “A lo sumo una vez”. Justifique claramente</summary>

![image](https://github.com/user-attachments/assets/c8f83c60-d2cd-4e31-b98c-77880e76ef49)

</details>

<hr class="yellow">

#### Parte B)

<details><summary>Indique los resultados posibles de la ejecución. Justifique.</summary>

![image](https://github.com/user-attachments/assets/d2446114-ed48-4da9-893c-83ab76beb660)

</details>

---

Sea la siguiente solución propuesta al problema de alocación SJN (short Job Next):

```c
Monitor SJN {
    Bool libre=true;
    Cond turno;
    Procedure request {
        If (not libre) wait (turno, tiempo);
        Libre = false;
    }
    Procedure release {
        Libre = true;
        Signal (turno);
    }
}
```

#### Parte A)

<details><summary>¿Funciona correctamente con disciplina de señalización Signal and continue? Justifique.</summary>

Con S&C un proceso que es despertado para poder seguir ejecutando es pasado a la cola de ready en cuyo caso su orden de ejecución depende de la política que se utilice para ordenar los procesos en dicha cola. Puede ser que sea retrasado en esa cola permitiendo que otro proceso ejecute en el monitor antes que el por lo que podría no cumplirse el objetivo del SJN.

</details>

<hr class="yellow">

#### Parte B)

<details><summary>¿Funciona correctamente con disciplina de señalización signal and wait? Justifique.</summary>

En cambio, con S&W se asegura que el proceso despertado es el próximo en ejecutar después de que el señalador ejecuta signal. Por lo tanto, SJN funcionaria correctamente de esta forma evitando que cualquier otro proceso listo para ejecutar le robe el acceso al proceso despertado

Definiciones:

- Signal and Continue -> el proceso que hace el signal continua usando el monitor, y el proceso despertado pasa a competir por acceder nuevamente al monitor para continuar con su ejecución (en la instrucción que lógicamente le sigue al wait).
- Signal and Wait -> el proceso que hace el signal pasa a competir por acceder
nuevamente al monitor, mientras que el proceso despertado pasa a ejecutar dentro del
monitor a partir de instrucción que lógicamente le sigue al wait.

</details>