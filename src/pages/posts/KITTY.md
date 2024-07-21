---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'KITTY'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/KITTY.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---

- [Pagina de instalación](https://sw.kovidgoyal.net/kitty/)

### Mi configuración

```bash
❯ cat ~/.config/kitty/kitty.conf
───────┬───────────────────────────────────────────────────────
       │ File: /home/fabian/.config/kitty/kitty.conf
───────┼───────────────────────────────────────────────────────
   1   │ enable_audio_bell no
   2   │ 
   3   │ include color.ini
   4   │ 
   5   │ font_family      HackNerdFont
   6   │ 
   7   │ font_size 12
   8   │ 
   9   │ disable_ligatures never
  10   │ 
  11   │ url_color #61afef
  12   │ 
  13   │ url_style curly
  14   │ 
  15   │ map ctrl+left neighboring_window left
  16   │ map ctrl+right neighboring_window right
  17   │ map ctrl+up neighboring_window up
  18   │ map ctrl+down neighboring_window down
  19   │ 
  20   │ map F1 copy_to_buffer a
  21   │ map F2 paste_from_buffer a
  22   │ map F3 copy_to_buffer b
  23   │ map F4 paste_from_buffer b
  24   │ 
  25   │ cursor_shape beam
  26   │ cursor_beam_thickness 1.8
  27   │ 
  28   │ mouse_hide_wait 3.0
  29   │ detect_urls yes
  30   │ 
  31   │ repaint_delay 10
  32   │ input_delay 3
  33   │ sync_to_monitor yes
  34   │ 
  35   │ map ctrl+shift+z toggle_layout stack
  36   │ tab_bar_style powerline
  37   │ 
  38   │ active_tab_background #98c379
  39   │ inactive_tab_background #e06c75
  40   │ inactive_tab_foreground #000000
  41   │ tab_bar_margin_color black
  42   │ 
  43   │ map ctrl+shift+enter new_window_with_cwd
  44   │ map ctrl+shift+t new_tab_with_cwd
  45   │ 
  46   │ background_opacity 0.85
  47   │ 
  48   │ shell zsh
───────┴───────────────────────────────────────────────────────

```

### Comandos basicos

- **Copiar**: Ctrl + Shift + C y 
- **Pegar**: Ctrl + Shift + V

Hay mas opciones pero es lo mas comodo

---

Para seleccionar multiples lineas podes hacer

Ctrl + Alt + Lo seleccionas con el teclado

![image](https://github.com/user-attachments/assets/d4231c91-4953-408b-8447-7edb00a1fb48)

---

- **Powerline:** Ctrl + Shift + alt + T

![image](https://github.com/user-attachments/assets/c3e1a632-61c4-429d-840f-ba56e62d94cf)

Lo renombramos

![image](https://github.com/user-attachments/assets/96d4c31a-a828-42e2-b1d6-c34238b8d525)

No vemos nada pero porque no tenemos mas ventanas abiertas,

- **Aprimos otra terminal:** Ctrl + Shift + Enter
- **Movemos las ventanas a gusto personal:** Ctrl + Shift + L
- **Cerramos la terminal:** Ctrl + Shift + W
- **Movernos** Ctrl  + flechas para cualquier lado y nos movemos entre terminales
- **Movernos Entre Ventanas** Ctrl + Shift + flechas para cualquier lado y nos movemos entre terminales
- **Mover el contenido de mi terminal** Ctrl  + Shift + B
- **Aprimos otra Ventana:** Ctrl + Shift + T
- **Powerline:** Ctrl + Shift + alt + T
- **Cambiar el tamaño de las terminales** Ctrl + Shift + R (Y elegimos segun las opciones)
- **Movemos las ventanas de lugar** Ctrl + Shift + , o .
- **Zoom en la ventana actual** Ctrl + Shift + Z

![image](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJqaWxzMWlzMnNjOTl2aHhkem0yZmplbXpjZ2U0bzJrOXp6dHV1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMVK6hOc7brtsTm/giphy.gif)