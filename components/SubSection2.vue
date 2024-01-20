<script setup lang="ts">
import { defineProps } from "vue";

import type { SubSection2Content } from '~/types/subSection2Content';

defineProps<{
    content: SubSection2Content

}>()


</script>


<template>
    <div class="flex flex-col md:flex-row items-center ">
        <div class="md:w-2/3"> <!-- Adjusted width for the text container -->
            <h3 class="lg:text-3xl text-2xl font-medium mb-7 text-neutral">{{ content.heading }}</h3>

            <p v-for="(paragraph, index) in content.paragraphs" :key="index"
                class="block mb-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased">
                {{ paragraph }}
            </p>
        </div>

        <div class="md:w-2/5 md:ml-16 mx-5" v-if="content.imageURL"> <!-- Adjusted width for the image container -->
            <div class="aspect-square">
                <img class="object-cover w-full h-full rounded-full" :src="content.imageURL" :alt="content.imageAlt" />
            </div>
        </div>
    </div>
</template>