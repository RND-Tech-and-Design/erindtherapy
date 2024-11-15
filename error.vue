<script setup>
const error = useError();
</script>


<template>
    <NuxtLayout>
 
        <div itemscope itemtype="https://schema.org/Psychiatric">
            <h1 v-if="error.statusCode === 404">Oh No! 404 - Page Not Found!</h1>
            <h1 v-else>Something went wrong ({{ error.statusCode }})</h1>
            <p>{{ error.message }}</p>
            <NuxtLink to="/" class="back-home">Go back home</NuxtLink>
        </div>
        
    </NuxtLayout>
</template>