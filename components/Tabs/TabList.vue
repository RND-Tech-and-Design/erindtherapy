<script setup lang="ts">
import type { TabListContentArray } from '~/types/tabs';


defineProps<{
    tabListContent: TabListContentArray;
    component: Object;
}>();
</script>
<template>
    <section>
        <div role="tablist" class="tabs tabs-lg  tabs-bordered tabs-lifted  ">
            <TabsSingleTab v-for="( tab, index ) in   tabListContent" :key="index" :content="tab" :component="component"
                :tabIndex="index" />
        </div>
    </section>
</template>