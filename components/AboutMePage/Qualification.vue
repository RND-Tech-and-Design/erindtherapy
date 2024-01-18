<script setup lang="ts">
import { defineProps } from "vue";


const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    default: ""
  },
  iconName: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: 'text-pink-900 text-opacity-50',
  },
  iconSize: {
    type: String,
    default: '4em',
  }

});

</script>

<template>
  <section class="mx-4">
    <div class="flex mr-10 items-center justify-center text-center" :class="iconColor">
      <Icon :name="iconName" :size="iconSize" :color="iconColor" />
    </div>
    <div class="mt-2 mr-10 mb-5 lg:text-4xl lg:mb-5 text-2xl font-medium text-center">
      {{ title }}
    </div>
    <div>{{ text }}</div>
  </section>
</template>

