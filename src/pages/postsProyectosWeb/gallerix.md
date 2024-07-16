---
layout: ../../layouts/MarkdownPostLayout.astro
title: Gallerix

author: Fabian Martinez Rincon
description: "Después de aprender un poco de Astro, ¡no podía parar!"
image:
    url: '/allProjecs/gallerix.webp'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Css", "Html", "Web"]
category: Proyectos Webs
---

- [Link del Repositorio](https://github.com/Fabian-Martinez-Rincon/Galleriix-Frontend)


## Links de ayuda

- [Agregar imagenes al store](https://supabase.com/docs/guides/storage/image-transformations)

```javascript
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);
```

## Insertar en la tabla

```javascript
    await supabaseAdmin.from('images').insert([{
      name: 'Pedro Duarte',
      href: 'https://twitter.com/peduarte/status/1463897468383412231',
      username: '@peduarte',
      imageSrc: 'https://katkzhgmwoqfjrdvgtqr.supabase.co/storage/v1/object/sign/images-links/1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtbGlua3MvMS5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzIxNzYwNTUsImV4cCI6MTk4NzUzNjA1NX0.Kl9B9-RhPtW-32kgU61Gkqq4RxPHc3k8b8PFtQXHjj0',
    }]);
```
## Tener url de una imagen del store

```javascript
    supabaseAdmin.storage.from('bucket').getPublicUrl('13.png', {
        transform: {
        width: 500,
        height: 600,
        },
    })
```

## Insertar en la tabla

```javascript
  await supabaseAdmin.from('images').insert([{
    name: 'Pedro Duarte',
    href: 'https://twitter.com/peduarte/status/1463897468383412231',
    username: '@peduarte',
    imageSrc: 'https://pbs.twimg.com/media/FFDOtLkWYAsWjTM?format=jpg',
  }]);
```
---

```javascript
json.forEach(async (item) => {
  await supabaseAdmin.from('images').insert([{
    name: item.name,
    href: item.url.publicUrl,
    username: '@nomadiix',
    imageSrc: item.url.publicUrl
  }]);
});
```