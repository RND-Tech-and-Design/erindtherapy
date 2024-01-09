<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title1: { type: String, default: "" },
  title2: { type: String, default: "" },
  paragraphs: { type: Array<{ text: String; styleType: String }>, default: [{ text: "", styleType: "" }] }
});

</script>
<template>
  <section class="flex flex-col sm:flex-row mt-20 mb-20 ">
    <div class="flex flex-1 flex-col mr-0 sm:mr-20 lg:mr-40">
      <div class="uppercase tracking-tight font-bold text-secondary mt-10">
        <h3>{{ props.title1 }}</h3>
      </div>
      <div class="mt-5 mb-5 font-bold text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        <h3>{{ props.title2 }}</h3>
      </div>
      <div class="mt-7 text-base">
        <p v-for="(paragraph, index) in props.paragraphs" :key="index"
          class="block mb-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased">
          {{ paragraph.text }}
        </p>
        <NuxtLink to="/contact" class="mt-10 btn btn-secondary text-white">
          Let's Connect!
        </NuxtLink>
      </div>
    </div>


    <div class="flex-1 max-w-72 xl:max-w-96 mx-auto mt-10 rounded-xl bg-clip-border text-gray-700 shadow-lg ">
      <img class="object-cover object-center w-full h-full rounded-xl text-gray-700 shadow-lg "
        src="/images/content/aboutme.webp" alt="profile-picture" />
    </div>
  </section>
</template>
