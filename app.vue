
<script setup lang="ts">
import { populateHeader } from '~/composables/seoMeta';

const route = useRoute();
onMounted(() => populateHeader(route));
watchEffect(() => populateHeader(route));

</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
