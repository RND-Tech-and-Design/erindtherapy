<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title1: { type: String, default: "" },
  title2: { type: String, default: "" },
  paragraphs: { type: Array<{ text: String; styleType: String }>, default: [{ text: "", styleType: "" }] }
});


</script>

<template>
  <section class="flex flex-col mt-20 mb-10 items-center justify-center ">
    <div class="uppercase tracking-tight font-bold text-secondary mt-2">
      <h3>{{ props.title1 }}</h3>
    </div>
    <div class="mt-5 lg:text-5xl lg:mb-5 text-3xl font-medium">
      <h3>{{ props.title2 }}</h3>
    </div>
    <div class="mt-5 text-base">
      <p v-for="(paragraph, index) in props.paragraphs" :key="index"
        class="block mb-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased"
        :class="[paragraph.styleType]">
        {{ paragraph.text }}
      </p>
    </div>
  </section>
</template>
