<script setup lang="ts">
import { defineProps } from "vue";

// Use 'defineProps' to access the props
const props = defineProps({ data: Object });
</script>

<template>
  <section
    class="flex flex-col mt-10 mb-10 items-center justify-center mx-10 md:mx-20 xl:mx-80"
  >
    <div class="uppercase tracking-tight font-bold text-secondary mt-2">
      <h3>{{ data.section }}</h3>
    </div>
    <div class="mt-5 lg:text-5xl lg:mb-5 text-3xl font-medium">
      <h3>{{ data.title }}</h3>
    </div>
    <div class="mt-5 text-base">
      <p
        v-for="(paragraph, index) in data.paragraphs"
        :key="index"
        class="block mb-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased"
        :class="[paragraph.styleType]"
      >
        {{ paragraph.text }}
      </p>
    </div>
  </section>
</template>
