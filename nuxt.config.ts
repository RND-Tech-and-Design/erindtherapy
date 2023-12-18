// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
    devtools: { enabled: true },
    image: {
        format: ['webp'],
    },
    alias: {
        "@": resolve(__dirname, "./src"),
    },
    css: ['~/assets/css/main.scss'],
    modules: [
        "nuxt-lodash",
        '@nuxt/image',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
