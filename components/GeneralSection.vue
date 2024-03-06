<script setup lang="ts">
import { defineProps } from "vue";
interface Paragraph {
    text: string;
    styleType?: string | null;
}

const props = defineProps({
    title1: { type: String, default: "" },
    title2: { type: String, default: "" },
    sectionStyle: { type: String, default: "" },
    paragraphs: {
        type: Array as () => Paragraph[], // Explicitly specify the type for paragraphs
        default: () => [{ text: "", styleType: null }]
    }
});

</script>

<template>
    <section class="flex flex-col ">
        <div class="uppercase tracking-tight font-bold text-accent text-sm sm:text-base">
            <h3>{{ props.title1 }}</h3>
        </div>
        <div class="mt-5 lg:text-5xl text-3xl font-medium">
            <h3>{{ props.title2 }}</h3>
        </div>
        <ul :class="props.sectionStyle">
            <li v-for="(paragraph, index) in   props.paragraphs  " :key="index"
                class="mt-7 text-text_primary bg-clip-text font-sans  leading-relaxed antialiased"
                :class="paragraph.styleType ? paragraph.styleType : 'text-base'" v-html="paragraph.text">
            </li>
        </ul>
    </section>
</template>