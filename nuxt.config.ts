// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
    devtools: { enabled: true },
    webVitals: {},
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
