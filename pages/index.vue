<script setup lang="ts">
definePageMeta({
    layout: 'default',
    navOrder: 1,
})
</script>

<template>
    <div>
        <HomeHero />
        <QuoteBlock :randomQuote="true" />
        <AppAlert>
            Currently Accepting New Clients!
        </AppAlert>

    </div>
</template>
