---
layout: ../../layouts/MarkdownPostLayout.astro
title: Scraping PlutoTV
author: Fabian Martinez Rincon
description: "Proyecto para scraping de PlutoTV"
image:
    url: '/gif/pluto.gif'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2024-08-04
tags: ["Python", "", ""]
category: Proyectos Python
---

<div class="video-inline z-0 transition-transform duration-[1.5s] group-hover:scale-110">
    <video src='/gif/pluto.mp4' class="max-w-screen-lg mx-auto noise left-0 h-full w-full relative top-0 block overflow-hidden border-4 border-black" autoplay muted controls loop></video>
</div>

### 🧰 Requirements
- Python [3.12+](https://www.python.org/downloads/)
- Google Chrome [Driver](https://sites.google.com/chromium.org/driver/)

### 💾 Instalación (Windows)

Abrir una cmd y ejecutar el siguiente comando:

```shell
setup.bat
```

En caso de no tener permisos para ejecutar el script, ejecutar el siguiente comando:

```shell    
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
```

---

Los resultados completos se encuentran en la carpeta `data/resultados`

- [Peliculas](/data/resultados/Peliculas.json)
- [Series](/data/resultados/Series.json)
- [Canales](/data/resultados/Canales.json)

---

### 📚 Objetivos Generales

- ✅ Imprimir el tiempo de ejecución en el script
- ✅ Si es posible obtener mas información/metadata por cada contenido.
- ✅ Analisis y/o limpieza de Metadata.
- ✅ Otros campos que consideren relevantes
- ✅ Tiempo de ejecución menor a 2hs. (En mi caso fue de 135.61 segundos)

> [!NOTE]  
> Me quede con toda la información que considere relevante

---

### 📚 Objetivos On Demand

Obtener todas las películas y series. Obtener la metadata de cada contenido:
- ✅ título 
- año (No se encontraba en la web)
- ✅ Sinopsis
- ✅ Link
- ✅ duración (solo para movies).
- ✅ Episodios de cada serie
- ✅ Metadata de los episodios.

> [!NOTE]  
> Separe las peliculas/series por categorias

<details><summary>Ejemplo de peliculas | categoria "La mejor_compañía"</summary>

```json
"la_mejor_compañía_movies": {
        "count": 19,
        "movies": [
            {
                "titulo": "Pet Obsessed",
                "metadatos": [
                    "TV-G",
                    "News & Information",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/series/645ab1ce5348f4001a21019c/details?lang=en",
                "descripcion": "Con clips ridículos, cortos digitales y toneladas de pelusa; estas son las mascotas más escandalosas y francas de Internet... Tu nueva obsesión."
            },
            {
                "titulo": "Yo amo a Shakey",
                "metadatos": [
                    "PG",
                    "Children & Family",
                    "1hr 42 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/5f3fd896ad190c001a52e6da/details?lang=en",
                "descripcion": "JT O’Neil, con su hija de 10 años, y su devoto perro Shakey se mudan a una pequeña ciudad de Chicago y al no leer la letra pequeña de su contrato de alquiler, JT se ve obligado a tratar de deshacerse de su perro."
            },
            {
                "titulo": "Shelby",
                "metadatos": [
                    "TV-G",
                    "Children & Family",
                    "1hr 32 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/5fad4a7f8b78ef001aa27bcd/details?lang=en",
                "descripcion": "Shelby es un perro sin dueño que tiene por costumbre fugarse de la perrera cada vez que tiene la oportunidad. Durante una de sus escapadas conoce a Jake, un niño que sueña con ser un gran mago, y se hacen amigos inseparables."
            },
            {
                "titulo": "Chiguagua: el fantasma",
                "metadatos": [
                    "TV-PG",
                    "Children & Family",
                    "1hr 22 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/62bcab10e9e8c00013709d5a/details?lang=en",
                "descripcion": "Al heredar una antigua casa de vacaciones, los Fastener se dan cuenta que la perra de sus antepasados, Sophie los persigue. Homer, su golden retriever, se hace amigo de Sophie y descubre que ella solo está buscando una familia a la que amar"
            },
            {
                "titulo": "Max salva al Mundo",
                "metadatos": [
                    "Children & Family",
                    "1hr 28 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/60c8abd436537d0013320af4/details?lang=en",
                "descripcion": "Sean y su perro Max quieren ser detectives pero en su vecindario no sucede nada hasta que desaparece un diamante. Ahora tendrán que enfrentarse a un grupo de alienígenas que vienen al planeta con planes de quemar la Tierra."
            },
            {
                "titulo": "Benny , El Feo",
                "metadatos": [
                    "TV-PG",
                    "Children & Family",
                    "1hr 39 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/62bf09238672a30013bd7ef8/details?lang=en",
                "descripcion": "Es la historia de un perro sin buena apariencia, sus dueños no tenian idea de que hacer con el cachorro extraño. Pero su ternura logro que una familia lo adoptara y desde ese momento la vida de Benny ha cambiado totalmente."
            },
            {
                "titulo": "Un amor hasta las patas",
                "metadatos": [
                    "TV-PG",
                    "Comedy",
                    "1hr 26 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/603e6222049634001a5f3418/details?lang=en",
                "descripcion": "Su amiga Roxana decide conseguirle una cita a través de las redes sociales. El desastre de la cita la lleva a pedirle un deseo a un mágico \"gato de los deseos\": tener un novio tan tierno y comprensible como sus 2 adorables perros."
            },
            {
                "titulo": "Mi Angel Guardián",
                "metadatos": [
                    "TV-PG",
                    "Children & Family",
                    "1hr 25 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/60c8abc136537d0013320966/details?lang=en",
                "descripcion": "Cooper, un perro, es el único sobreviviente de un terrible accidente automovilístico. Jake pierde a su esposa e hijos en el accidente. Jake es de enojo hacia el perro, pero este vinculo termina siendo lo unico que lo ayuda a seguir viviendo."
            },
            {
                "titulo": "Amor por el Perro",
                "metadatos": [
                    "Children & Family",
                    "1hr 21 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/5fda4095aabcdd001aaf4430/details?lang=en",
                "descripcion": "Cuando una madre divorciada intenta iniciar una nueva relación, sus hijos y su perro comienzan a sabotear el romance. Tienen éxito, hasta que aparece un ex novio de la escuela."
            },
            {
                "titulo": "¿EI, Dónde está mi Perro?",
                "metadatos": [
                    "TV-PG",
                    "Children & Family",
                    "1hr 22 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/5fda414b0dddaf0013b83734/details?lang=en",
                "descripcion": "Un joven llamado Ray se queda en casa para cuidar al perro de la familia, Harry, para demostrarles a sus padres que no es, como dicen, \"irresponsable\"."
            },
            {
                "titulo": "El refugio",
                "metadatos": [
                    "TV-PG",
                    "Children & Family",
                    "1hr 24 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/62ffebd0c24630001a8b226c/details?lang=en",
                "descripcion": "La familia Davis es un desastre, pero un perro callejero logrará en poco tiempo restaurar su matrimonio, arreglar una relación padre-hijo deteriorada, alegrar la vida de un niño de 9 años y salvar a un niño muy pequeño."
            },
            {
                "titulo": "Un equipo incomparable",
                "metadatos": [
                    "TV-PG",
                    "Children & Family",
                    "1hr 20 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/62fe9e866df8ae001a0464ae/details?lang=en",
                "descripcion": "Seeker, un perro que no puede oler, y Fetch, un cerdo casi ciego ayudan a mascotas perdidas a encontrar sus hogares."
            },
            {
                "titulo": "De patitas a la calle",
                "metadatos": [
                    "TV-G",
                    "Children & Family",
                    "1hr 23 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/60e459453988a50013b7617f/details?lang=en",
                "descripcion": "Una perra llamada Lasmi se perdió en la ciudad de Lima. Un grupo de patrulla canina la ayuda a encontrar a su familia. Pero un grupo de traficantes está secuestrando perros, por lo que deben descubrirlos y atraparlos."
            },
            {
                "titulo": "K-9 Aventuras: Un Cuento de Navidad",
                "metadatos": [
                    "TV-G",
                    "Children & Family",
                    "1hr 29 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/61f2a44d04ff25001a4fe790/details?lang=en",
                "descripcion": "Kassie, sus amigos y su perro, Scoot, organizan una recaudación de fondos para las fiestas, pero deben proteger el dinero de algunos ladrones para poder salvar la Navidad."
            },
            {
                "titulo": "Smitty",
                "metadatos": [
                    "TV-PG",
                    "Children & Family",
                    "1hr 34 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/60c8abbc36537d00133208f2/details?lang=en",
                "descripcion": "Ben, un chico de trece años, lleva a cabo continuas travesuras que traen de cabeza a su madre, una mujer soltera que lucha cada día por intentar salir adelante sin una pareja que le ayude a tratar que el comportamiento de su hijo mejore."
            },
            {
                "titulo": "La Mejor Amiga de Summer",
                "metadatos": [
                    "Children & Family",
                    "1hr 41 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/60bf7276d782df0013ef296c/details?lang=en",
                "descripcion": "El brillante e independiente Summer Larsen, de 12 años, rescata a un dulce perro callejero y no se detendrá ante nada para salvarlo. Y es su determinación lo que finalmente impacta a quienes la rodean."
            },
            {
                "titulo": "El perrito Pudsey",
                "metadatos": [
                    "PG",
                    "Children & Family",
                    "1hr 27 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/5f7b86a0e4b56900138b713a/details?lang=en",
                "descripcion": "En la ciudad de Londres Pudsey es feliz con su vida de perro callejero, pero un día su vida cambiará radicalmente. Molly, George y Tommy son tres hermanos que deciden acogerlo en la familia. Todo cambia tras la muerte de su padre."
            },
            {
                "titulo": "El Sol de Medianoche",
                "metadatos": [
                    "TV-PG",
                    "Children & Family",
                    "1hr 36 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/60bf7226d782df0013ef25df/details?lang=en",
                "descripcion": "En las heladas tierras del norte de Canadá, el joven Luke desafiará los peligros de la naturaleza y la dura inclemencia del tiempo invernal para ayudar a un joven oso polar a que se reúna con su madre."
            },
            {
                "titulo": "Una verdadera amistad",
                "metadatos": [
                    "Children & Family",
                    "1hr 30 min",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/movies/5fda409aaabcdd001aaf44a0/details?lang=en",
                "descripcion": "Finn es un niño de 13 años que es acosado constantemente en la escuela, pero su vida comienza a cambiar el día que conoce a un labrador llamado Marshall, que vive en condiciones extremas y necesita atención médica."
            }
        ]
    },
```
</details>

<details><summary>Ejemplo de Series | categoria "Series Checas"</summary>

```json
"series_checas_movies": {
        "count": 2,
        "movies": [
            {
                "titulo": "Los Misterios de Praga",
                "metadatos": [
                    "PG-13",
                    "Thriller",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/series/64651a58f2a541001b7d2df6/details?lang=en",
                "descripcion": "Praga, década de 1920. El inspector Budik investiga una serie de asesinatos más atroces.",
                "temporadas": {
                    "Temporada 1": [
                        {
                            "Titulo": "Episode 1",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/646525ae188649001a2ba6d3",
                            "Descripción": "Praga, década de 1920. El inspector Budik investiga una serie de asesinatos más atroces.",
                            "Metadata": "T1E1 1hr 5 min"
                        },
                        {
                            "Titulo": "Episode 2",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/646525ab188649001a2ba552",
                            "Descripción": "El cuerpo de un niño es descubierto en un estanque en las afueras de Praga. El desgarrador caso tiene connotaciones sexuales que el inspector Budik debe desentrañar.",
                            "Metadata": "T1E2 1hr 9 min"
                        },
                        {
                            "Titulo": "Episode 3",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/646525c8188649001a2bae87",
                            "Descripción": "Un robo sale mal y termina con el asesinato de un hombre. Los motivos parecen estar ocultos en un libro religioso que se encuentra cerca del cuerpo.",
                            "Metadata": "T1E3 1hr 6 min"
                        },
                        {
                            "Titulo": "Episode 5",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/64651a5ef2a541001b7d317e",
                            "Descripción": "Un héroe de guerra es asesinado. El inspector Budik investiga el crimen que parece estar motivado por la traición.",
                            "Metadata": "T1E5 1hr 3 min"
                        },
                        {
                            "Titulo": "Episode 6",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/64651a5af2a541001b7d2ec7",
                            "Descripción": "Cuandi las ropas de una mujer son encontradas en la orilla del río, el inspector Budik se pregunta si se trata de un caso de suicidio o asesinato.",
                            "Metadata": "T1E6 1hr 5 min"
                        },
                        {
                            "Titulo": "Episode 7",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/64651bc5188649001a2b7d69",
                            "Descripción": "En las afueras de Praga, un granjero es encontrado con un disparo en la cabeza y otro en el pecho. Un matrimonio parece ser la clave de este caso.",
                            "Metadata": "T1E7 1hr 7 min"
                        },
                        {
                            "Titulo": "Episode 8",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/64651d2da7ef77001a744c37",
                            "Descripción": "Un hombre millonario que intenta sacar a su hija de la cárcel es encontrado muerto. El inspector Budik debe averiguar si hay un complot en la prisión detrás del crimen.",
                            "Metadata": "T1E8 1hr 8 min"
                        },
                        {
                            "Titulo": "Episode 9",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/64651d4fa7ef77001a744f2c",
                            "Descripción": "Una intrincada red de relaciones y adicciones termina con el asesinato de una mujer profundamente religiosa.",
                            "Metadata": "T1E9 1hr 7 min"
                        },
                        {
                            "Titulo": "Episode 10",
                            "Link": "/latam/on-demand/series/64651a58f2a541001b7d2df6/season/1/episode/64651e92a7ef77001a7450aa",
                            "Descripción": "Cadáver de un joyero es encontrado con una herida mortal en la cabeza. Los únicos sospechosos son dos monjes solitarios",
                            "Metadata": "T1E10 1hr 3 min"
                        }
                    ]
                }
            },
            {
                "titulo": "Las Muertes de Medusa",
                "metadatos": [
                    "PG-13",
                    "Thriller",
                    "There are no inadequacies"
                ],
                "link": "https://pluto.tv/latam/on-demand/series/64651d32a7ef77001a744d1d/details?lang=en",
                "descripcion": "A raíz de una serie de asesinatos violentos, un equipo de investigación élite de homicidios descubre una poderosa organización criminal.",
                "temporadas": {
                    "Temporada 1": [
                        {
                            "Titulo": "Episode 1",
                            "Link": "/latam/on-demand/series/64651d32a7ef77001a744d1d/season/1/episode/646530df649e97001b31fdb7",
                            "Descripción": "A raíz de una serie de asesinatos violentos, un equipo de investigación élite de homicidios descubre una poderosa organización criminal.",
                            "Metadata": "T1E1 57 min"
                        },
                        {
                            "Titulo": "Episode 2",
                            "Link": "/latam/on-demand/series/64651d32a7ef77001a744d1d/season/1/episode/646530dc649e97001b31fc3a",
                            "Descripción": "El equipo investiga al asesino de una estudiante de secundaria que fue encontrada violada y golpeada en un estanque.",
                            "Metadata": "T1E2 57 min"
                        },
                        {
                            "Titulo": "Episode 3",
                            "Link": "/latam/on-demand/series/64651d32a7ef77001a744d1d/season/1/episode/646530e2649e97001b31ff37",
                            "Descripción": "El equipo investiga el brutal asesinato de un administrador local encontrado en un antiguo castillo.",
                            "Metadata": "T1E3 58 min"
                        },
                        {
                            "Titulo": "Episode 4",
                            "Link": "/latam/on-demand/series/64651d32a7ef77001a744d1d/season/1/episode/646530e4649e97001b320024",
                            "Descripción": "La muerte de una anciana local revela disputas familiares y secretos del pasado de la víctima y su asesino",
                            "Metadata": "T1E4 59 min"
                        },
                        {
                            "Titulo": "Episode 5",
                            "Link": "/latam/on-demand/series/64651d32a7ef77001a744d1d/season/1/episode/646530eb649e97001b3201cb",
                            "Descripción": "En el ensayo general de reinado de belleza, una de las participantes se lastima y luego muere. El equipo investiga un entorno lleno de rivalidad y resentimientos.",
                            "Metadata": "T1E5 1hr"
                        },
                        {
                            "Titulo": "Episode 6",
                            "Link": "/latam/on-demand/series/64651d32a7ef77001a744d1d/season/1/episode/646530ee649e97001b32028d",
                            "Descripción": "Un secreto desgarrador vincula la construcción de un campo de golf que destruye un bosque local y la muerte de un trabajador forestal.",
                            "Metadata": "T1E6 52 min"
                        },
                        {
                            "Titulo": "Episode 7",
                            "Link": "/latam/on-demand/series/64651d32a7ef77001a744d1d/season/1/episode/64651d33a7ef77001a744d3c",
                            "Descripción": "Durante el rodaje de una película, un productor recibe un disparo en la cabeza. La investigación revela un intrincado mundo de secretos y abusos.",
                            "Metadata": "T1E7 56 min"
                        },
                        {
                            "Titulo": "Episode 8",
                            "Link": "/latam/on-demand/series/64651d32a7ef77001a744d1d/season/1/episode/64651d42a7ef77001a744e3c",
                            "Descripción": "Tras un accidente automovilístico, el cadáver de un hombre es encontrado. Sin embargo, los motivos de su fallecimiento parecen ser diferentes al choque.",
                            "Metadata": "T1E8 1hr"
                        }
                    ]
                }
            }
        ]
    },
```
</details>

---

### 📚 Objetivos LiveTV

- ✅ Traer todos los canales
- Traer la grilla de contenidos con sus
    - ✅ Titulo
    - ✅ Horarios
    - ✅ Link

> [!NOTE]  
> Separe los canales según su categoria, el json completo se encuenta en [Canales](/data/resultados/Canales.json)

<details><summary>Ejemplo de los canales en la categoria Retro</summary>

```json
"Retro": [
        {
            "canal": "Pluto TV Series Retro",
            "descripcion": "En Pluto TV Series Retro vas a poder divertirte y entretenerte con las mejores sitcoms de la historia de la televisión y éxitos clásicos como Who ìs the boss?, The Three Stooges, Popeye the Sailor and Romance of Betty Boop.",
            "link": "https://pluto.tv/latam/live-tv/5de802659167b10009e7deba/details?lang=en",
            "programas": [
                {
                    "programa 0": [
                        "Now 12:45",
                        "Guardianes de la Bahía"
                    ],
                    "link": "https://pluto.tv/live-tv/5de802659167b10009e7deba"
                },
                {
                    "programa 1": [
                        "On Next:",
                        "Guardianes de la Bahía",
                        "12:46 - 13:43"
                    ],
                    "link": "https://pluto.tv/live-tv/5de802659167b10009e7deba/details/66bd082646762a00085d2227"
                },
                {
                    "programa 2": [
                        "On Later:",
                        "Guardianes de la Bahía: Refugiame",
                        "13:43 - 14:42"
                    ],
                    "link": "https://pluto.tv/live-tv/5de802659167b10009e7deba/details/66bd082646762a00085d2228"
                }
            ]
        },
        {
            "canal": "MacGyver",
            "descripcion": "MacGyver, la popular série de acción y aventuras de los 80 está en PlutoTv. Descubre como su protagonista, resuelve problemas peligrosos utilizando su ingenio y habilidades científicas en lugar de armas.",
            "link": "https://pluto.tv/latam/live-tv/63eb95baa99571000898a078/details?lang=en",
            "programas": [
                {
                    "programa 0": [
                        "Now 12:45",
                        "MacGyver",
                        "57 min left"
                    ],
                    "link": "https://pluto.tv/live-tv/63eb95baa99571000898a078"
                },
                {
                    "programa 1": [
                        "On Next:",
                        "MacGyver",
                        "13:43 - 14:41"
                    ],
                    "link": "https://pluto.tv/live-tv/63eb95baa99571000898a078/details/668f0f3c32e253000841dd5f"
                },
                {
                    "programa 2": [
                        "On Later:",
                        "MacGyver",
                        "14:41 - 15:39"
                    ],
                    "link": "https://pluto.tv/live-tv/63eb95baa99571000898a078/details/668f0f3c32e253000841dd60"
                }
            ]
        },
        {
            "canal": "Pluto TV Retro Cartoons",
            "descripcion": "Pluto TV Retro Cartoons: Enciende la máquina del tiempo y viaja a la época de las mejores animaciones. Vuelve a ser un niño mirando las caricaturas que marcaron tu vida: Popeye, Betty Boop, Flash Gordon y mucho más. Solo en Pluto TV.",
            "link": "https://pluto.tv/latam/live-tv/60142258a54aeb0007751c15/details?lang=en",
            "programas": [
                {
                    "programa 0": [
                        "Now 12:45",
                        "Cuentos de la Cripta",
                        "6 min left"
                    ],
                    "link": "https://pluto.tv/live-tv/60142258a54aeb0007751c15"
                },
                {
                    "programa 1": [
                        "On Next:",
                        "Cuentos de la Cripta",
                        "12:52 - 13:20"
                    ],
                    "link": "https://pluto.tv/live-tv/60142258a54aeb0007751c15/details/66bbe42a46762a00085b38a2"
                },
                {
                    "programa 2": [
                        "On Later:",
                        "Cuentos de la Cripta",
                        "13:20 - 13:47"
                    ],
                    "link": "https://pluto.tv/live-tv/60142258a54aeb0007751c15/details/66bbe42a46762a00085b38a3"
                }
            ]
        }
    ],
```
</details>


---

### 🧑‍💼 Identificar modelo de negocio.

1. **Monetización a través de la publicidad**: Los datos extraídos facilitan entender qué contenido es más popular para optimizar la colocación de anuncios.

2. **Análisis de datos para optimización**: La recopilación de metadatos como títulos, descripciones y links permite analizar tendencias y preferencias, lo que guía decisiones sobre qué nuevos contenidos adquirir o desarrollar.

3. **Estrategias para aumentar la retención de usuarios**: Utilizando el análisis continuo de datos, Pluto TV puede adaptar su oferta y mejorar la plataforma para retener usuarios y atraer nuevos espectadores.

---


### 🤝 Contruibuir

Para asegurarnos de que estamos en la rama main, antes de crear una mara
```bash
git branch
```

Si ya creamos una rama y queremos ir a esa, usamos
```bash
git checkout {nombre-rama}
```

Si no existe la rama, la creamos con un nombre descriptivo

```bash
git branch {nombre-rama}
```

Para movernos despues de crearla

```bash
git checkout -b {nombre-rama}
```

Una vez que estamos en la rama, hacemos un pull para asegurarnos de que estamos actualizados

```
git pull origin main
```

Hacemos la pull request

```shell
git add .
git commit -m "Mensaje descriptivo"
git push origin {nombre-rama}
```

---

### 📁Estructura

```markdown
📁 SCRAPING_PELICULAS_SERIES/
│
├── 📂 data/
│   └── (posibles archivos JSON o de salida aquí)
│
├── 📂 env/
│   └── (entorno virtual u otros archivos relacionados)
│
├── 📂 scraping_canales/
│   ├── 🐍 __init__.py
│   ├── 🐍 scraping_links.py
│   └── 🐍 scraping.py
│
├── 📂 scraping_peliculas_series/
│   ├── 🐍 __init__.py
│   └── 🐍 scraping.py
│
├── 📂 config/
│   ├── 🐍 __init__.py
│   └── 🐍 driver.py
│
├── 📂 utils/
│   ├── 🐍 __init__.py
│   ├── 🛠️ configs.py
│   ├── 🔄 fetch_utils.py
│   ├── 🔍 scraping_utils.py
│   ├── 📝 utils_json.py
│   ├── 🧰 main.py
│   ├── 🕷️ scraper.py
│   └── 🔍 scraping.py
│
├── 🛡️ .gitignore
├── ⚙️ chromedriver.exe
├── 🧰 main.py
├── 📄 README.md
├── 📦 requirements.txt
└── 📝 setup.ps1
```
