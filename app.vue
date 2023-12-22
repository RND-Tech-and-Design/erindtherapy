
<script setup lang="ts">
const therapyTitle = "Erin Dierickx, LMFT";
const site_name = "ErinDTherapy";
const domain = "https://erindtherapy.com";
const titleTail = `${site_name} - ${therapyTitle}`
const route = useRoute();

const defaultDescription = `Expert Couples Therapy, Depression, Anxiety, Intensive Marathon Therapy treatment, focusing on improving relationships and personal well-being, Seattle, Washington, ${therapyTitle} - Gottman lvl 3 `;

function generateMetaTags(title: string, description: string, image: string, url: string) {
    return [
        { hid: 'description', name: 'description', content: description },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: site_name },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:creator', content: '@erindtherapy' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: description },
        { property: 'twitter:image', content: image }
    ];
}


const populateHeader = async () => {
    const title = route.meta.title ? `${route.meta.title} - ${titleTail}` : titleTail;
    const description = route.meta?.description ? `${route.meta.description} - ${titleTail}` : defaultDescription;
    const image = `${domain}/${route.meta?.ogImage || 'og-image.png'}`;
    const url = `${domain}${route.fullPath}`;

    useHead({
        titleTemplate: title,
        htmlAttrs: { lang: 'en' },
        meta: generateMetaTags(title, description, image, url),
        link: [{ rel: 'canonical', href: url }],
    });
}

onMounted(populateHeader);
watchEffect(() => {
    populateHeader()
});

</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
