<script setup lang="ts">
import type { BulletPointList } from '~/types/bulletPointList';

defineProps<{
    bulletPointList: BulletPointList
}>()





</script>

<template>
    <section class="md:flex md:flex-col md:grid md:grid-cols-2">
        <!-- First Column -->
        <ul class="block">
            <li v-for="(bulletPoint, index) in bulletPointList.bulletPoints.slice(0, bulletPointList.columnBreakIndex)"
                :key="index" class="mt-7  bg-clip-text font-sans text-base leading-relaxed antialiased">
                <NuxtLink :to="bulletPoint?.link" class="group">
                    <div class="inline-flex items-center" :class="[bulletPoint.color, bulletPointList.textStyle]">
                        <div :class="bulletPointList.listDiscStyle"></div>
                        {{ bulletPoint.text }}
                    </div>
                </NuxtLink>
            </li>
        </ul>

        <!-- Second Column -->
        <ul class="block">
            <li v-for="(bulletPoint, index) in bulletPointList.bulletPoints.slice(bulletPointList.columnBreakIndex)"
                :key="index" class="mt-7  bg-clip-text font-sans text-base leading-relaxed antialiased">
                <NuxtLink :to="bulletPoint?.link" class="group">
                    <div class="inline-flex items-center" :class="[bulletPoint.color, bulletPointList.textStyle]">
                        <div :class="bulletPointList.listDiscStyle"></div>
                        {{ bulletPoint.text }}
                    </div>
                </NuxtLink>
            </li>
        </ul>

    </section>
</template>





