

<script setup lang="ts">
import { ref } from 'vue';

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
    heroHeight: {
        type: Number,
        required: false,
        default: 0,
    },
    heroImage: {
        type: String,
        required: true,
        validator: (value: string) => value.includes('/'),
    },
});

const forceHeroHeight = props.heroHeight > 0
    ? ref<string>(`min-h-[${props.heroHeight}vh]`)
    : ref<string>('min-h-screen-50');

const hasDescription = ref<boolean>(!!props.description);

</script>

<template>
    <div :class="`hero bg-cover bg-center bg-no-repeat ${forceHeroHeight}`"
         :style="{ backgroundImage: `url(${heroImage})` }">
        <div v-if="enableOverlay" :class="`hero-overlay ${overlayClass} bg-opacity-60`"></div>
        <div class="hero-content text-center text-neutral-content pt-12 ">
            <div class="max-w-sm md:max-w-none ">
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