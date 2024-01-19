
<script setup lang="ts">
import type { TabContent } from '~/types/tabs';

const props = defineProps<{
    tab: TabContent,
    tabIndex: number; // 

}>()


</script>

<template>
    <input type="radio" name="my_tabs" role="tab" class="tab  font-medium" :aria-label="tab.tabName"
        :checked="tabIndex === 0" />
    <div role="tabpanel" class="tab-content border-base-300 rounded-box px-16 py-10" :class="tab.backgroudnColor">
        <div class="flex flex-col md:flex-row items-center ">
            <div class="w-2/3"> <!-- Adjusted width for the text container -->
                <h3 class="lg:text-3xl text-2xl font-medium mb-7">{{ tab.heading }}</h3>

                <p v-for="(paragraph, index) in tab.paragraphs" :key="index"
                    class="block mb-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased">
                    {{ paragraph }}
                </p>
            </div>

            <div class="w-2/5 ml-16" v-if="tab.imageURL"> <!-- Adjusted width for the image container -->
                <div class="aspect-square">
                    <img class="object-cover w-full h-full rounded-full" :src="tab.imageURL" :alt="tab.imageAlt" />
                </div>
            </div>
        </div>
    </div>
</template>



