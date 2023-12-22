
<script setup lang="ts">

const therapyTitle = "Erin Dierickx, LMFT";
const site_name = "ErinDTherapy";
const domain = "https://erindtherapy.com";
const titleTail = `${site_name} - ${therapyTitle}`
const route = useRoute();

const defaultDescription = `Expert Couples Therapy, Depression, Anxiety, Intensive Marathon Therapy treatment, focusing on improving relationships and personal well-being, Seattle, Washington, ${therapyTitle} - Gottman lvl 3 `;

watchEffect(async () => {
    const title = route.meta.title; // or derive your title based on the route
    const fullTitle = title ? `${title} - ${titleTail}` : titleTail;
    const metaDescription =
        route.meta?.description ?
            `${route.meta.description} - ${titleTail}`
            : defaultDescription;

    const ogImage = `${domain}/${route.meta?.ogImage || 'og-image.png'}`;
    const pagePath = `${domain}${route.fullPath}`

    useHead({
        titleTemplate: fullTitle,
        htmlAttrs: {
            lang: 'en',
        },

        meta: [
            {
                hid: 'description',
                name: 'description',
                content: metaDescription
            },
            {
                property: 'og:locale',
                content: 'en_US'
            },
            {
                property: 'og:title',
                content: fullTitle
            },
            {
                property: 'og:description',
                content: metaDescription
            },
            {
                property: 'og:image',
                content: ogImage
            },
            {
                property: 'og:url',
                content: pagePath
            },
            {
                property: 'og:type',
                content: 'website'
            },
            {
                property: 'og:site_name',
                content: site_name
            },
            {
                property: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                property: 'twitter:creator',
                content: '@erindtherapy'
            },
            {
                property: 'twitter:title',
                content: fullTitle
            },
            {
                property: 'twitter:description',
                content: metaDescription
            },
            {
                property: 'twitter:image',
                content: ogImage
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: pagePath
            }
        ],


    });
});



</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
