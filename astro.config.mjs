import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://rincondelfabo.vercel.app/',
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/onest'], // Agrega aquí el paquete con problemas
    },
  },
})