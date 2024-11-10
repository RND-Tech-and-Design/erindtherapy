<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    headline: String,
    description: {
        type: String,
        default: '',
    },
    enableOverlay: {
        type: Boolean,
        default: true,
    },
    overlayClass: {
        type: String,
        default: '',
    },
    heroHeight: {
        type: Number,
        default: 0,
    },
    heroImage: {
        type: String,
        required: true,
        validator: (value: string) => value.includes('/'),
    },
});

const minHeightStyle = computed(() => ({
    minHeight: `${props.heroHeight > 0 ? props.heroHeight : 50}vh`,
}));

const hasDescription = computed(() => !!props.description);
</script>

<template>
    <div
         class="hero bg-cover bg-center bg-no-repeat"
         :style="{
            backgroundImage: `url(${heroImage})`,
            ...minHeightStyle,
        }">
        <div
             v-if="enableOverlay"
             :class="`hero-overlay ${overlayClass} bg-opacity-60`"></div>
        <div class="hero-content text-center text-neutral-content pt-12">
            <div class="max-w-sm md:max-w-none">
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

</style>