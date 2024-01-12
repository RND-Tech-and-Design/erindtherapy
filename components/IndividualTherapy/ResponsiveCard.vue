<script setup lang="ts">
import type { ResponsiveCard } from '~/types/responsiveCard';

defineProps<{
    responsiveCard: ResponsiveCard
}>()




</script>

<template>
    <div class="card md:card-side rounded-xl shadow-xl" :class="responsiveCard.cardColor">
        <!-- Title container with image background -->
        <div class="h-56 md:h-auto md:w-1/2 card-body bg-cover bg-no-repeat bg-center rounded-t-xl md:rounded-tr-none md:rounded-l-xl relative"
            :style="{ backgroundImage: `url('${responsiveCard?.imageURL}')` }">

            <div class="absolute inset-0  rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                :class="responsiveCard.imageColor"></div>
            <div class="absolute inset-0 flex items-center justify-center" :class="responsiveCard.titleColor">
                <h2 class="card-title text-4xl">{{ responsiveCard.title }}</h2>
            </div>

        </div>
        <!-- Text container -->

        <div class=" md:w-1/2 card-body p-5">
            <div class="bg-white bg-opacity-40 p-5 rounded-xl">
                <div class="flex flex-col space-y-4 lg:space-7-8">
                    <h3 class=" font-bold uppercase tracking-tight text-base lg:text-xl  text-center md:text-left "
                        :class="responsiveCard.subheadingColor">
                        {{
                            responsiveCard.subheading }}
                    </h3>
                    <div class="flex flex-col space-y-5 ">
                        <p v-for="(paragraph, index) in responsiveCard.paragraphs" :key="index"
                            class="text-sm lg:text-base font-sans " v-html="paragraph">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


