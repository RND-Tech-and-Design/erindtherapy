<script setup lang="ts">
import type { TabContent } from '~/types/tabs';


defineProps<{
    content: TabContent;
    tabIndex: number;
    component: Object;
}>();
</script>

<template>
    <input type="radio" name="my_tabs" role="tab" class="tab  font-medium bg-primary text-white checked:text-accent "
        :aria-label="content.itemName" :checked="tabIndex === 0" />
    <div role="tabpanel" class="tab-content border-base-200 rounded-box rounded-tl-none px-16 py-10 "
        :class="content.backgroundColor">
        <component :is="component" :content="content.itemBodyContent"></component>
    </div>
</template>
