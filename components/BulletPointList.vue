<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    columnBreakIndex: { type: Number },
    textStyle: { type: String, default: "" },
    listDiscStyle: { type: String, default: "" },
    bulletPoints: { type: Array<{ text: String; link: String, color: String }>, default: [{ text: "", link: "", color: "" }] }
})



</script>

<template>
    <section class="md:flex md:flex-col md:grid md:grid-cols-2">
        <!-- First Column -->
        <ul class="block">
            <li v-for="(bulletPoint, index) in props.bulletPoints.slice(0, props.columnBreakIndex)" :key="index"
                class="mt-7  bg-clip-text font-sans text-base leading-relaxed antialiased">
                <NuxtLink :to="bulletPoint.link" class="group">
                    <div class="inline-flex items-center" :class="[bulletPoint.color, props.textStyle]">
                        <div :class="props.listDiscStyle"></div>
                        {{ bulletPoint.text }}
                    </div>
                </NuxtLink>
            </li>
        </ul>

        <!-- Second Column -->
        <ul class="block">
            <li v-for="(bulletPoint, index) in props.bulletPoints.slice(props.columnBreakIndex)" :key="index"
                class="mt-7  bg-clip-text font-sans text-base leading-relaxed antialiased">
                <NuxtLink :to="bulletPoint.link" class="group">
                    <div class="inline-flex items-center" :class="[bulletPoint.color, props.textStyle]">
                        <div :class="props.listDiscStyle"></div>
                        {{ bulletPoint.text }}
                    </div>
                </NuxtLink>
            </li>
        </ul>

    </section>
</template>





