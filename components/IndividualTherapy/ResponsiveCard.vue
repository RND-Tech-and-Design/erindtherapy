<script setup lang="ts">
import type { ResponsiveCard } from '~/types/responsiveCard';

defineProps<{
    responsiveCard: ResponsiveCard
}>()




</script>

<template>
    <div class="card md:card-side rounded-xl shadow-xl lg:flex lg:items-center" :class="responsiveCard.backgroundColor">
        <!-- Title container with image background -->
        <div class="md:w-1/2 relative">
            <figure>
                <img :src="responsiveCard?.image" alt="Album" class="w-full h-64 md:h-60 object-cover rounded-xl" />
            </figure>
            <!-- Overlay with 50% opacity -->
            <div class="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div class="absolute inset-0 flex items-center justify-center text-white">
                <h2 class="card-title text-4xl">{{ responsiveCard.title }}</h2>
            </div>
        </div>
        <!-- Text container -->
        <div class="md:w-1/2 card-body flex flex-col justify-around space-y-4 mx-5">
            <p v-for="(paragraph, index) in responsiveCard.paragraphs" :key="index"
                class="flex1 text-lg md:text-base lg:text-lg font-sans font-medium antialiased" v-html="paragraph">
            </p>
        </div>
    </div>
</template>


