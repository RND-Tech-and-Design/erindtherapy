// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
    devtools: { enabled: true },
    site: {
        url: 'https://main--delightful-caramel-537f72.netlify.app/', //! TODO - replace with erindtherapy.com
    },
    image: {
        provider: "ipx"
    },
    webVitals: {
        gtm: {}, //! TODO - set gtm tag or GA tag when production
        provider: 'log',
        debug: true, // debug enable metrics reporting on dev environments only
        disabled: false
    },
    alias: {
        "@": resolve(__dirname, "./src"),
    },
    css: ['~/assets/css/main.scss'],
    modules: [
        'nuxt-simple-sitemap', // https://nuxt.com/modules/simple-sitemap
        'nuxt-icon', // https://nuxt.com/modules/icon
        'nuxt-simple-robots',  // https://nuxt.com/modules/simple-robots
        '@nuxtjs/web-vitals', // https://nuxt.com/modules/web-vitals
        'nuxt-simple-robots', // https://nuxtseo.com/robots/getting-started/installation //! TODO preview set NUXT_SITE_ENV=production when deployed
        'nuxt-gtag', //https://nuxt.com/modules/gtag
        '@nuxtjs/eslint-module',
        "nuxt-lodash",
        '@nuxt/image',
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
}
)
