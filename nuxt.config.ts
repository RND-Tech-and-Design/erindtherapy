// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteBaseUrl: process.env.NUXT_PUBLIC_SITE_BASE_URL || '',
        },
    },
    devtools: {
        enabled: true
    },

    routeRules: {
        '/contact': { prerender: true },
    },

    site: {
        url: 'https://erindtherapy.com',
    },

    build: {
        transpile: ["rxjs"],
    },

    alias: {
        "@": resolve(__dirname, "./src"),
    },

    css: ['~/assets/css/main.scss'],

    modules: [
        'nuxt-simple-sitemap', // https://nuxt.com/modules/simple-sitemap
        'nuxt-icon', // https://nuxt.com/modules/icon https://icones.js.org/
        'nuxt-simple-robots', // https://nuxtseo.com/robots/getting-started/installation //! TODO preview set NUXT_SITE_ENV=production when deployed
        'nuxt-gtag', //https://nuxt.com/modules/gtag
        "nuxt-lodash",
        '@nuxt/image',
        '@nuxt/content',
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    gtag: {
        id: 'G-XXXXXXXXXX' //! TODO  - add tag when production deployed
    },

    compatibilityDate: '2024-08-24',
}
)