<script setup lang="ts">
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Use 'defineProps' to access the props
const props = defineProps({ data: String });

</script>

<template>
  <section class="mx-4">
    <div class="flex items-center justify-center">
      <font-awesome-icon :icon="data.icon" class="mr-4 text-5xl text-pink-900 text-opacity-50" />
    </div>
    <div class="mt-5 mb-5 lg:text-4xl lg:mb-5 text-2xl font-medium">
      {{ data.title }}
    </div>
    <div>{{ data.text }}</div>
  </section>
</template>
