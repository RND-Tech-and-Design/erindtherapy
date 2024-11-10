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

    sitemap: {
        strictNuxtContentPaths: true,
        sitemaps: {
            pages: {
                // extend the nuxt:pages app source
                includeAppSources: true,
                // filter the URLs to only include pages
                exclude: ['/blog/**'],
            },
            posts: {
                // extend the nuxt:pages app source
                includeAppSources: true,
                // filter the URLs to only include pages
                include: ['/blog/**'],
            },
        },
    },

    build: {
        transpile: ["rxjs"],
    },

    alias: {
        "@": resolve(__dirname, "./src"),
    },

    css: ['~/assets/css/main.scss'],

    modules: [
        'nuxt-og-image',
        '@nuxt/icon', // https://nuxt.com/modules/icon https://icones.js.org/
        '@nuxtjs/sitemap', 
        '@nuxtjs/robots',
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