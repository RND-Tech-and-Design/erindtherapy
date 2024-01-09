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
            </div>
        </div>
    </section>
</template>

<!-- <template>
    <section class="relative bg-cover bg-no-repeat bg-center"
             style="background-image: url('/images/content/wave.webp');">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="container mx-auto px-4 py-12 relative">
            <div class="max-w-4xl mx-auto bg-white bg-opacity-75 rounded shadow-xl p-8 text-gray-800">
                <h2 class="text-3xl font-bold mb-3">Does this sound like you?</h2>
                <p class="mb-5">
                    My patients often report they have been expending more energy than they bring in. They feel
                    drained,
                    cynical, and discouraged that their efforts are not manifesting in the goals they desire. Their
                    attitude, relationships, and health suffer. They feel their time is spent in a job that no
                    longer
                    serves them.
                </p>
                <p class="mb-5">
                    Before my clients came to see me, they concluded that it was “too late” to make a change, and
                    that
                    “it is what it is.” They feared that if they took any drastic steps to improve their lives, it
                    would
                    be considered “selfish.” They believed they were stuck.
                </p>
                <p class="mb-5">
                    The fear of change, but also the fear of never changing, created constant tension and anxiety.
                </p>
            </div>
        </div>
    </section>
</template> -->