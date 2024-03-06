<script setup lang="ts">
import { defineProps } from "vue";


interface ParagraphObject {
    text: string[];
    style: string;
}

const props = defineProps<{
    heading: string;
    listDisc: boolean;
    paragraphs: ParagraphObject;
}>();
</script>

<template>
    <section class="flex flex-col mt-5">

        <div class="mt-5 lg:text-4xl text-2xl  font-medium">
            <h3>{{ props.heading }}</h3>
        </div>
        <ul :class="[props.listDisc ? 'list-disc ml-5' : '']">
            <li v-for="(paragraph, index) in   props.paragraphs.text  " :key="index"
                :class="[props.listDisc ? 'mt-5' : 'mt-7']"
                class="mt-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased"
                v-html="paragraph">
            </li>
        </ul>
    </section>
</template>