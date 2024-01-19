<script setup lang="ts">
import type { TabsContentArray } from '~/types/tabs';

defineProps<{
    tabsContent: TabsContentArray
}>()


</script>

<template>
    <section>
        <div role="tablist" class="tabs tabs-lg  tabs-bordered tabs-lifted ">
            <TabsSingleTab v-for="( tab, index ) in   tabsContent" :key="index" :tab="tab" :tabIndex="index" />
        </div>
    </section>
</template>