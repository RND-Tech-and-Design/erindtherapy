<script setup lang="ts">
import { defineProps } from "vue";


interface ListObject {
    text: string[];
    style: string;
}
interface CheckMarkObject {
    iconColor: string;
    iconName: string;
    iconSize: string;
}

const props = defineProps<{
    heading: string;
    checkMark: CheckMarkObject;
    list: ListObject;
}>();


</script>

<template>
    <section class="flex flex-col mt-5">

        <div class="mt-5 mb-5 lg:text-4xl text-2xl font-medium">
            <h3>{{ props.heading }}</h3>
        </div>
        <ul>
            <li v-for="(item, index) in props.list.text" :key="index"
                class=" mt-5 md:mt-5 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased flex items-center">
                <span :class="props.checkMark.iconColor" class="inline-block">
                    <Icon :name="props.checkMark.iconName" :size="props.checkMark.iconSize" />
                </span>
                <span class="ml-2">{{ item }}</span>
            </li>

        </ul>
    </section>
</template>



