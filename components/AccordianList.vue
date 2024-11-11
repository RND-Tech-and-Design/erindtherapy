<script setup lang="ts">

import type { AccordianContentArray } from '~/types/accordian';

defineProps<{
    accordianContent: AccordianContentArray;
    component: Object;
}>();

</script>
<template>
    <div class="join join-vertical w-full">
        <div v-for="( item, index ) in accordianContent" :key="index" :checked="index === 0"
             class="collapse collapse-arrow join-item border border-base-300">

            <input type="radio" name="accordian" />
            <div class="collapse-title text-xl font-medium bg-primary text-white checked:bg-accent">
                {{ item.itemName }}
            </div>
            <div class="collapse-content" :class="item.backgroundColor">
                <component :is="component" :content="item.itemBodyContent" class="my-10 mx-5"></component>
            </div>
        </div>
    </div>
</template>