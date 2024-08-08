---
layout: ../../layouts/MarkdownPostLayout.astro
title: Final Concurrente
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/Materias/finales-programación-concurrente.jpg'
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

---

Utilice la técnica de `passing the condition` para implementar un semáforo fair usando monitores


<details><summary>Respuesta.</summary>

```c
monitor Semaforo{ 
    int s = 1, espera = 0; cond pos;

    procedure P (){ 
        if (s == 0) {
            espera ++; 
            wait(pos);
        }
        else
            s = s-1;
    };

    procedure V () {
        if (espera == 0 ) 
            s = s+1
        else { 
            espera --; 
            signal(pos);
        }
    };
};
```

</details>

<hr class="yellow">

Resuelva con monitores el siguiente problema:

Tres clases de procesos comparten el acceso a una lista enlazada:

Searchers, inserters y deleters.

- Los searchers sólo examinan la lista, y por lo tanto pueden ejecutar concurrentemente unos con otros.
- Los inserters agregan nuevos items al final de la lista; las inserciones deben ser mutuamente exclusivas para evitar insertar dos items casi al mismo tiempo. Sin embargo un insert puede hacerse en paralelo con uno o más searchers. 
- Por último, los deleters remueven items de cualquier lugar de la lista. A lo sumo un deleter puede acceder la lista a la vez, y el borrado también debe ser mutuamente exclusivo con searchers e inserciones.

<br>

<details><summary>Respuesta.</summary>

```c
monitor Controlador_ListaEnlazada{
    int numSearchers=0, numInserters=0, numDeleters =0;
    cond searchers, inserters, deleters;

    procedure pedir_Deleter(){
        while (numSearchers>0 OR numInserters>0 OR numDeleters >0){
            wait(deleters);
        }
        numDeleters=numDeleters+1;
    }
    procedure liberar_Deleter(){
        numDeleters=numDeleters-1;
        signal(inserters);
        signal(deleters);
        signal_all(searchers);
    }
    procedure pedir_Searcher(){
        while(numDeleters >0){ 
            wait(searchers);
        }
        numSearchers=numSearchers+1;
    }
    procedure liberar_Searcher(){
        numSearchers=numSearchers-1;
        if(numSearchers==0 AND numInserters==0 ){
            signal(deleters);
        }
    }
    procedure pedir_Inserter(){
        while(numDeleters >0 OR numInserters>0 ){
            wait(inserters);
        }
        numInserters=numInserters+1;
    }
    procedure liberar_Inserter(){
        numInserters=numInserters-1;
        signal(inserters);
        if(numSearchers==0 ){
            signal(deleters);
        }
    }
 }
    
process Searchers[i=1..S] {
    Controlador_ListaEnlazada.pedir_Searcher();
    <Realiza búsqueda en la lista>
    Controlador_ListaEnlazada.liberar_Searcher();
}
process Inserters[j=1..I] {
    Controlador_ListaEnlazada.pedir_Inserter();
    <Inserta en la lista>
    Controlador_ListaEnlazada.liberar_Inserter();
}
process Deleters[k=1..D] {
    Controlador_ListaEnlazada.pedir_Deleter();
    <Borra en la lista>
    Controlador_ListaEnlazada.liberar_Deleter()
}
```

</details>

---

En los protocolos de acceso a sección crítica vistos en clase, cada proceso ejecuta el mismo algoritmo. Una manera alternativa de resolver el problema es usando un proceso coordinador. En este caso, cuando cada proceso SC[i] quiere entrar a su sección crítica le avisa al coordinador, y espera a que éste le de permiso. Al terminar de ejecutar su sección crítica, el proceso SC[i] le avisa al coordinador.

Desarrolle protocolos para los procesos SC[i] y el coordinador usando sólo variables compartidas (no tenga en cuenta la propiedad de eventual entrada)

<details><summary>Respuesta.</summary>

```c
int aviso [1:n]=([n]0), permiso [1:n]=([n]0);
process SC[i = 1 to N] {
    SNC;
    permiso[i] = 1; # Protocolo
    while (aviso[i]==0) skip; # de entrada
    SC;
    aviso[i] = 0; # Protocolo de salida
    SNC;
}
process Coordinador {
    int i = 1;
    while (true) {
        while (permiso[i]==0) i = i mod N +1;
        permiso[i] = 0;
        aviso[i] = 1;
        while (aviso[i]==1) skip;
    }
}
```

</details>

---

Describa la solución utilizando la criba de Eratóstenes al problema de hallar los primos entre 2 y n. Cómo termina el algoritmo? Qué modifica para que no termine de esta manera?

La criba de Eratóstenes es un algoritmo clásico para determinar cuáles números en un rango son primos. Supongamos que queremos generar todos los primos entre 2 y n.

Primero, escribimos una lista con todos los números:

2 3 4 5 6 7 ... n

Comenzando con el primer número no tachado en la lista, 2, recorremos la lista y borramos los múltiplos de ese número. Si n es impar, obtenemos la lista:

2 3 5 7 ... n

En este momento, los números borrados no son primos; los números que quedan todavía son candidatos a ser primos. Pasamos al próximo número, 3, y repetimos el anterior proceso borrando los múltiplos de 3. Si seguimos este proceso hasta que todo número fue considerado, los números que quedan en la lista final serán todos los primos entre 2 y n.

Para solucionar este problema de forma paralela podemos emplear un pipeline de procesos filtro. Cada filtro recibe una serie de números de su predecesor y envía una serie de números a su sucesor. El primer número que recibe un filtro es el próximo primo más grande; le pasa a su sucesor todos los números que no son múltiplos del primero.

El siguiente es el algoritmo pipeline para la generación de números primos. Por cada canal, el primer número es primo y todos los otros números no son múltiplo de ningún primo menor que el primer número:

```c
Process Criba[1] {
    int p = 2;
    for [i = 3 to n by 2]  Criba[2] ! (i);
}

Process Criba[i = 2 to L] {
    int p, proximo;

    Criba[i-1] ? p;
    do Criba[i-1] ? (Proximo) ->
        if ((proximo MOD p) <> 0 ) -> Criba[i+1] ! (proximo); fi
    od
}
```

El primer proceso, Criba[1], envía todos los números impares desde 3 a n a Criba[2]. Cada uno de los otros procesos recibe una serie de números de su predecesor.

El primer número p que recibe el proceso Criba[i] es el i-ésimo primo. Cada Criba[i] subsecuentemente pasa todos los otros números que recibe que no son múltiplos de su primo p. El número total L de procesos Cribe debe ser lo suficientemente grande para garantizar que todos los primos hasta n son generados. Por ejemplo, hay 25 primos menores que 100; el porcentaje decrece para valores crecientes de n.

El programa anterior termina en deadlock, ya que no hay forma de saber cuál es el último número de la secuencia y cada proceso queda esperando un próximo número que no llega. Podemos fácilmente modificarlo para que termine normalmente usando centinelas, es decir que al final de los streams de entrada son marcados por un centinela EOS (End Of Stream).

```c
Process Criba[1] {
    INT p=2;
    for [i = 3 to n by 2] Criba[2] ! i # pasa impares a Criba[2]
        Criba[2] ! –1;
}

Process Criba[i = 2 TO L] {
    INT p, proximo;
    boolean seguir = true;
    Criba[i-1] ? p # p es primo
    do (seguir); Criba[i-1] ? proximo -> # recibe próximo candidato
    if (proximo = -1) {
        seguir = false;
        Criba[i+1] ! -1;
    }
    else if ((proximo MOD p) <> 0) # si es primo
    Criba[i+1] ! proximo; # entonces lo pasa
    fi
    od
}
```

---

Suponga los siguientes programas concurrentes. Asuma que “función” existe, y que los procesos son iniciados desde el programa principal.

<table><tr><td>P1</td><td>P2</td></tr>

<tr><td>

```c

chan canal (double)
    process grano1 {
        int veces, i;
        double sum;
        for [veces=1 to 10] {
            for [i=1 to 10000]
                sum = sum + funcion(i);
            send canal (sum);
        }
    }

    process grano2 {
        int veces; double sum;
        for [veces=1 to 10] {
            receive canal (sum);
            printf (sum);
        }
    }
```
</td><td>

```c

chan canal (double)
    process grano1 {
        int veces, i;
        double sum;
        for [veces=1 to 10000] {
            for [i=1 to 10]
                sum = sum + i;
            send canal (sum);
        }
    }

    process grano2 {
        int veces; double sum;
        for [veces=1 to 10000] {
            receive canal (sum);
            printf (sum);
        }
    }
```

</td></tr>

</table>

#### Parte A)

<details><summary>Analice desde el punto de vista del número de mensajes</summary>

En la P1, sólo se envían 10 mensajes al proceso grano2. En P2 se envían 10000 mensajes.

</details>

<hr class="yellow">

#### Parte B)

<details><summary> Analice desde el punto de vista de la granularidad de los procesos.</summary>

En P1, el envío de los mensajes se realiza después de largos períodos de ejecución ya que entre cada send se ejecuta una iteración de 10000 unidades de tiempo, esto nos asegura que la comunicación entre los dos procesos es poco frecuente. Dadas dichas características podemos decir, que desde el punto de vista de la granularidad, P1 es de granularidad gruesa ya que la comunicación ente los procesos no es de manera reiterada.

Al tener mayor granularidad disminuye la concurrencia y la sobrecarga de bloqueos.

En P2, el envío de mensajes se realiza en intervalos cortos de tiempo (entre la ejecución de cada send sólo se ejecuta un for de 1 a 10), aumentando considerablemente la comunicación respecto de P1. Por lo tanto, podemos decir que P2 es de granularidad fina, ya que en cada iteración el volumen de comunicación aumenta, por lo tanto la relación cómputo / comunicación disminuye. Al disminuir la granularidad aumenta la concurrencia pero también aumenta la sobrecarga de bloqueos.

c) Cuál de los programas le parece más adecuado para ejecutar sobre una arquitectura de tipo cluster de PCs? Justifique.


La implementación más adecuada para este tipo de arquitecturas es P1, por ser de granularidad gruesa. Al tratarse de una arquitectura con memoria distribuida la comunicación entre los procesos es más costosa ya que cada proceso puede ejecutarse en computadores diferentes, por lo tanto sería más eficiente que la sobrecarga de comunicación sea lo más baja posible, y dicha característica la brinda la granularidad gruesa

</details>

---

Suponga los siguientes programas concurrentes. Asuma que EOS es un valor especial que indica el fin de la secuencia de mensajes, y que los procesos son iniciados desde el programa principal.

<table><tr><td>P1</td><td>P2</td></tr>

<tr><td>

```c
chan canal (double)
    process Genera {
        int fila, col; double sum;
        for [fila = 1 to 10000]
            for [col = 1 to 10000]
                send canal (a(fila, col));
        send canal (EOS)
    }

    process Acumula {
        double valor, sumT;
        sumT = 0;
        receive canal (valor);
        while valor <> EOS {
            sumT = sumT + valor
            receive canal (valor);
        }
        printf (sumT);
    }


```

</td><td>

```c
chan canal (double)
    process Genera {
        int fila, col; double sum;
        for [fila = 1 to 10000] {
            sum = 0;
            for [col = 1 to 10000]
                sum = sum + a(fila, col);
            send canal (sum);
        }
        send canal (EOS)
    }

    process Acumula {
        double valor, sumT;
        sumT = 0;
        receive canal (valor);
        while valor <> EOS {
            sumT = sumT + valor
            receive canal (valor);
        }
        printf (sumT);
    }
```

</td></tr>

</table>

#### Parte A)

<details><summary>¿Qué hacen los programas?</summary>

Ambos programas realizan la suma de todos los elementos de una matriz pero difieren en la forma de llegar al resultado. P1 Genera le envía los 10000 2 valores a acumula para que este los sume mientras que en P2 Genera solo le envía 10000 valores ya que el mismo se encarga de sumar toda una fila. Es decir, le envía a acumula la suma de todos los elemento de cada fila.

</details>

<hr class="yellow">

#### Parte B)

<details><summary>Analice desde el punto de vista del número de mensajes.</summary>

P1 realiza 10000^2 envíos de mensajes (uno por cada elemento de la matriz) mientras que P2 solo realiza 10000 (uno por cada fila de la matriz).

</details>

#### Parte C)

<details><summary>Analice desde el punto de vista de la granularidad de los procesos</summary>

Se puede decir que el proceso P2 es de grano más grueso que el proceso P1 ya que realiza más procesamiento en Genera y esto hace que se necesite un menor número de comunicaciones con Acumula para llegar al resultado.

</details>

#### Parte D)


<details><summary>¿Cuál de los programas le parece más adecuado para ejecutar sobre una arquitectura de tipo cluster de PCs? Justifique.</summary>

Las arquitecturas del tipo cluster pueden considerarse arquitecturas de grano grueso ya que poseen muchos procesadores con mucha capacidad de cómputo pero con poca capacidad para la comunicación haciéndolos más apropiados para ejecutar programas de grano grueso que requieren de menos comunicación que capacidad de computo. Por lo tanto, P2 sería más apropiado para ejecutarse sobre este tipo de arquitecturas.

</details>

---

Dada la siguiente solución con monitores al problema de alocación de un recurso con múltiples unidades, transforme la misma en una solución utilizando mensajes asincrónicos.

```c
Monitor Alocador_Recurso {
    INT disponible = MAXUNIDADES;
    SET unidades = valores iniciales;
    COND libre; # TRUE cuando hay recursos
    procedure adquirir( INT Id ) {
        if (disponible == 0) wait(libre)
        else disponible = disponible - 1; remove(unidades, id);
    }
    procedure liberar( INT id ) {
        insert(unidades, id);
        if (empty(libre)) disponible := disponible + 1
        else signal(libre);
    }
}
```

<details><summary>Respuesta.</summary>

```c
Aquí tienes el contenido de la imagen convertido a texto:

```plaintext
type clase_op = enum(adquirir, liberar);
chan request(int idCliente, claseOp oper, int idUnidad);
chan respuesta[n] (int id_unidad);

Process Administrador_Recurso {
    int disponible = MAXUNIDADES;
    set unidades = valor inicial disponible;
    queue pendientes;
    while (true){
        receive request (IdCliente, oper, id_unidad);
        if (oper == adquirir){
            if (disponible > 0){
                disponible = disponible - 1;
                remove (unidades, id_unidad);
                send respuesta[IdCliente] (id_unidad);
            }
            else insert (pendientes, IdCliente);
        }
        else{
            if (empty (pendientes)){
                disponible = disponible + 1;
                insert (unidades, id_unidad);
            }
            else{
                remove (pendientes, IdCliente);
                send respuesta[IdCliente] (id_unidad);
            }
        }
    } 
    //while
}//process Administrador_Recurso

Process Cliente[i = 1 to n]
{
    int id_unidad;
    send request(i, adquirir, 0);
    receive respuesta[i](id_unidad);
    //Usa la unidad
    send request(i, liberar, id_unidad);
}
```

</details>

---

Dados los siguientes dos segmentos de código, indicar para cada uno de los ítems si son equivalentes o no. Justificar cada caso (de ser necesario dar ejemplos).

![image](https://github.com/user-attachments/assets/43109b40-3f15-4d66-80cd-22aca2f7fb7c)

En todos los casos, en primera instancia el valor de cant va a ser 1000, por lo tanto entra por la guarda (cant>10). Si en esa guarda el valor de cant se modifica (porque llega por el canal, o porque lo modifica Sentencia 2), las guardas deben cubrir todos los posibles valores que toma la variable, para que ambos segmentos sean equivalentes. De no ser así, cuando en el segmento 1 todas las guardas son falsas, el do termina y sigue la ejecución del programa, mientras que el segmento 2, se queda en un bucle hasta que la variable sea modificada por otro proceso.


#### Parte A)

<details><summary>INCOGNITA equivale a: (cant = 0)</summary>

No son equivalentes ya que el DO en segmento 1 terminaría para valores de cant (1...10) (-1…-10) mientras que en segmento 2 el if fallaría pero la iteración se seguiría realizando.

</details>

<hr class="yellow">

#### Parte B)

<details><summary>INCOGNITA equivale a: (cant > -100)</summary>

Son equivalentes con estas condiciones no hay ningún caso en el que todas las guardas fallen por lo tanto el DO no termina nunca, obteniendo el mismo comportamiento que el while true con el IF.

</details>

<hr class="yellow">

#### Parte C)

<details><summary>INCOGNITA equivale a: ((cant > 0) or (cant < 0))</summary>

No son equivalentes ya que el DO termina si cant=0 porque todas las guardas son false.

</details>

#### Parte D)

<details><summary>INCOGNITA equivale a: ((cant > -10) or (cant < 10))</summary>

No son equivalente ya que para cant = 10 o cant=-10 segmento 1 terminaría su ejecución del DO porque todas las guardas serían falsas.

</details>

#### Parte E)

<details><summary>INCOGNITA equivale a: ((cant >= -10) or (cant <= 10))</summary>

Serian equivalentes ya que se estarían eliminando en segmento 1 los valores puestos en d) que provocarían que el DO terminase.

</details>

---

Sea “ocupados” una variable entera inicializada en N que representa la cantidad de slots ocupados de un buffer, y sean P1 y P2 dos programas que se ejecutan de manera concurrente, donde cada una de las instrucciones que los componen son atómicas.

![image](https://github.com/user-attachments/assets/00083bc7-b1ef-49c7-979a-a1b0c9b11049)

El programa funciona correctamente para asegurar el manejo del buffer? Si su respuesta es afirmativa justifique. Sino, encuentre una secuencia de ejecución que lo verifique y escríbala, y además modifique la solución para que funcione correctamente (Suponga buffer, elemento_a_agregar y elemento_a_sacar variables declaradas).

<details><summary>Respuesta.</summary>

![image](https://github.com/user-attachments/assets/6147c9e0-92fd-4410-835c-2f163374108c)

</details>

---

Sea “cantidad” una variable entera inicializada en 0 que representa la cantidad de elementos de un buffer, y sean P1 y P2 dos programas que se ejecutan de manera concurrente, donde cada una de las instrucciones que los componen son atómicas.

![image](https://github.com/user-attachments/assets/089b4333-db09-419e-a6ca-51168bb6d6aa)

Además existen dos alumnos de concurrente que analizan el programa y opinan lo siguiente:

“Pepe: este programa funciona correctamente ya que las instrucciones son atómicas”.
“José: no Pepe estás equivocado, hay por lo menos una secuencia de ejecución en la cual funciona erróneamente”

¿Con cuál de los dos alumnos está de acuerdo?

Si está de acuerdo con Pepe justifique su respuesta. Si está de acuerdo con José encuentre una secuencia de ejecución que verifique lo que José opina y escríbala, y modifique la solución para que funcione correctamente (Suponga buffer y elemento variables declaradas). (22-04-2009)

<details><summary>Respuesta.</summary>

Estoy de acuerdo con José. Ya que existen secuencias de ejecución en las cuales no funciona correctamente.

Por ejemplo si P1 ejecuta su primera linea y suma cantidad:=cantidad + 1, y corta su ejecución, se ejecuta P2, la condición de cantidad>0 da verdadera pero no existe nada en el buffer y P2 en su primera linea ejecuta elemento_a_sacar := buffer

</details>

---

![image](https://github.com/user-attachments/assets/396f0773-e0cc-491f-8c78-293fa3895ca7)