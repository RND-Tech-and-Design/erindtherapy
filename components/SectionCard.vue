<script setup lang="ts">
import type { SectionContent } from '~/types/sectionContent';


defineProps<{
    content: SectionContent
}>()

</script>

<template>
    <section class="relative bg-cover bg-no-repeat bg-center"
        :style="{ backgroundImage: `url(${content.backgroundImage})` }">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="container mx-auto px-4 py-12 relative">
            <div class="max-w-4xl mx-auto bg-white bg-opacity-75 rounded shadow-xl p-8 text-gray-800">
                <h2 class="text-3xl font-bold mb-3">{{ content.title }}</h2>
                <p class="mb-5" v-for="(paragraph, index) in content.paragraphs" :key="index">
                    {{ paragraph }}
                </p>
                 <slot></slot>
            </div>
        </div>
    </section>
</template>