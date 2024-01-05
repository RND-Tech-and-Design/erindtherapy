<script setup lang="ts">
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Use 'defineProps' to access the props
const props = defineProps({ data: String });
</script>

<template>
  <section>
    <div>
      <font-awesome-icon :icon="data.icon" />
    </div>
    <div>
      {{ data.title }}
    </div>
    <div>{{ data.text }}</div>
  </section>
</template>
