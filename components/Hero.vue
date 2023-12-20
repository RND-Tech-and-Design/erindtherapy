

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
    headline: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
        default: '',
    },
    enableOverlay: {
        type: Boolean,
        required: false,
        default: true,
    },
    overlayClass: {
        type: String,
        required: false,
        default: '',
    },
    heroImage: {
        type: String,
        required: true,
        validator: (value: string) => value.includes('/'),
    },
});

const hasDescription = ref<boolean>(!!props.description);

</script>

<template>
    <div class="hero min-h-screen-50"
         :style="{ backgroundImage: `url(${heroImage})` }">
        <div v-if="enableOverlay" :class="`hero-overlay ${overlayClass} bg-opacity-60`"></div>
        <div class="hero-content text-center text-neutral-content pt-12">
            <div class="max-w-xlg">
                <h1 class="text-5xl font-bold text-white">
                    {{ headline }}
                </h1>
                <p v-if="hasDescription" class="py-6">
                    {{ description }}
                </p>
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.min-h-screen-50 {
    min-height: 50vh;
}
</style>