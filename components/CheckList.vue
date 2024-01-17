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

        <div class="mt-5 lg:text-4xl text-3xl font-medium">
            <h3>{{ props.heading }}</h3>
        </div>
        <ul>
            <li v-for="(item, index) in   props.list.text  " :key="index"
                class="mt-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased">
                <span :class="props.checkMark.iconColor">
                    <Icon :name="props.checkMark.iconName" :size="props.checkMark.iconSize" />
                </span> {{ item }}
            </li>
        </ul>
    </section>
</template>



