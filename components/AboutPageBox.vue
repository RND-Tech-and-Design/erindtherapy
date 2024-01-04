<script setup lang="ts">
import { defineProps } from "vue";

// Use 'defineProps' to access the props
const props = defineProps({ boxData: Object });
</script>

<template>
  <section
    class="flex flex-col md:flex-column mt-10 mb-10 items-center justify-center"
  >
    <div class="uppercase tracking-tight font-bold text-secondary mt-2">
      <h3>{{ boxData.section }}</h3>
    </div>
    <div class="mt-5 text-4xl">
      <h3>{{ boxData.title }}</h3>
    </div>
    <div class="mt-5 text-base">
      <p
        v-for="(paragraph, index) in boxData.paragraphs"
        :key="index"
        class="block mt-3 text-text_primary bg-clip-text font-sans text-base font-medium leading-relaxed antialiased"
      >
        {{ paragraph.text }}
      </p>
    </div>
  </section>
</template>
