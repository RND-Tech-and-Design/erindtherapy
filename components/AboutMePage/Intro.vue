<script setup lang="ts">
import { defineProps } from "vue";

// Use 'defineProps' to access the props
const props = defineProps({ data: Object });
</script>

<template>
  <section class="flex flex-col md:flex-row md:justify-between  mb-20">
    <div class="flex flex-col md:flex-col">
      <div class="uppercase tracking-tight font-bold text-secondary mt-10">
        <h3>{{ data.section }}</h3>
      </div>
      <div class="mt-5 font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        <h3>{{ data.title }}</h3>
      </div>
      <div class="mt-7 text-base">
        <p v-for="(paragraph, index) in data.paragraphs" :key="index"
          class="block mb-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased">
          {{ paragraph.text }}
        </p>
        <NuxtLink to="/contact" class="mt-10 btn btn-secondary text-white">
          Let's Connect!
        </NuxtLink>
      </div>
    </div>

    <div class="relative md:mx-20 mx-auto mt-10 rounded-xl bg-clip-border text-gray-700 shadow-lg overflow-hidden">
      <img class="object-cover object-center w-full h-full" src="/images/content/aboutme.webp" alt="profile-picture" />
    </div>
  </section>
</template>
