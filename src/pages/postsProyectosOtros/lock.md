---
layout: ../../layouts/MarkdownPostLayout.astro
title: Lock
author: Fabian Martinez Rincon
description: "🔒 In this report we will see both the circuit simulation and the actual programming of a safe."
image:
    url: '/allProjecs/lock.webp'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Arduino"]
category: Otros
---

- [Link del Repositorio](https://github.com/Fabian-Martinez-Rincon/Lock)

## Introduction
In this report we will see both the circuit simulation and the actual programming of a safe. Next, we will look at both the general and individual flow diagrams.

### General flow chart.
![image](https://github.com/user-attachments/assets/bf4996f5-76aa-4d92-949d-ad6f53471110)

### Circuit diagram.
![image](https://github.com/user-attachments/assets/43836017-7c88-4fa2-bb83-2bfe3ae878bb)

We read the voltage of the pins as follows.
### Read push buttons.
![image](https://github.com/user-attachments/assets/c789c3f0-5b2a-4254-9112-5dccf4d178c4)

They would give us this data according to the buttons (from left to right).
### Voltaje data.
![image](https://github.com/user-attachments/assets/fb0ab49b-1b8a-4f44-becf-f21070158173)

### The data read according to the voltage of the pins.
![image](https://github.com/user-attachments/assets/2c5580f9-d244-4a7a-bb9e-fd65c1e91d71)

Once we have all the data from the buttons, we configure the reading of pins

### Lectura de pines
![image](https://github.com/user-attachments/assets/3b9d2658-584b-4c76-9f5d-e0df877cfa16)

The buttons are loaded as follows (There are two parts that we will explain later)

### Load keyboard
![image](https://github.com/user-attachments/assets/4cdcbb03-d868-41d5-98b5-50c1e096c6ac)

We show the data pressed both on the display and in the virtual Proteus terminal
### Example
![image](https://github.com/user-attachments/assets/6497d8d0-e0fc-4c06-bd8e-f0de23f9cb80)

First we have a special code, if the special code is inserted we have to enter a 4-digit password to our liking.
We have to compare two arrangements. For this we have to load an array called against []. (this is the array that contains the momentary data). Once this fix is loaded, we have to go through both the fix that we load and the one we have as "Special Code".
We compare each figure in the arrangement according to position. Every time a number matches in the same position of both, it will be incremented by one in a variable called "k". (This in the function called "FourNumbers" at the end of the report).

### Part of the function
![image](https://github.com/user-attachments/assets/c47400ec-e5b0-4384-b16a-d9e40b3334cc)

In the event that the password is incorrect, it would show us the following on the screen
### Wrong case

![image](https://github.com/user-attachments/assets/5a9d674c-d85f-4f33-b998-335da5e2d04d)

In the event that the four digits are equal, both in value and in position, the following function will be executed to be able to enter a new password.

### Fuction
![image](https://github.com/user-attachments/assets/1eb13431-7e49-4255-a7ef-ee31413a3e3a)

### New password
![image](https://github.com/user-attachments/assets/0f63ecb0-972a-47c6-bfd4-459d28cb7f68)


In the "Open" function, we set both the "change" and "changeContra" variables to true. 
We use the "change" function to be able to use the "traverseContra" function and the keyboard takes "ChangeContra" as true to use the other part of the function.

### Password update
![image](https://github.com/user-attachments/assets/fa923f09-8bc5-4a7c-97e4-0d5067b5c30d)

Once we choose the 4 numbers for our password, it restarts, but with our password saved. If we put the password that we choose after putting the special code, the servomotor has to be turned on.

### We check new password
![image](https://github.com/user-attachments/assets/f3067443-c6fc-4de3-a7ff-ef3d5ba6a7aa)

Since the servo part was in my topics, I left it to my partner. Even so, I printed a message of what would happen if it was activated.
### Conclusion.
EIn this job I had problems in the part where I had to load a new arrangement. I implemented all the tools that we saw these years in addition to some things that were personal research.