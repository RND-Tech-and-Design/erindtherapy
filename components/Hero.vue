<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

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
    placeholderImage: {
        type: String,
        default: '', // Optional low-res placeholder
    },
    placeholderColor: {
        type: String,
        default: '#cccccc', // Default background color
    },
});

const minHeightStyle = computed(() => ({
    minHeight: `${props.heroHeight > 0 ? props.heroHeight : 50}vh`,
}));

const hasDescription = computed(() => !!props.description);

const isImageLoaded = ref(false); // Tracks if the full image is loaded

onMounted(() => {
    const img = new Image();
    img.src = props.heroImage;
    img.onload = () => {
        isImageLoaded.value = true;
    };
});
</script>

<template>
    <div
         class="hero bg-cover bg-center bg-no-repeat transition-opacity duration-500"
         :style="{
            backgroundImage: isImageLoaded
                ? `url(${heroImage})`
                : placeholderImage
                    ? `url(${placeholderImage})`
                    : 'none',
            backgroundColor: placeholderColor,
            ...minHeightStyle,
        }"
         :class="{ 'opacity-100': isImageLoaded, 'opacity-0': !isImageLoaded }">
        <!-- Overlay -->
        <div
             v-if="enableOverlay"
             :class="`hero-overlay ${overlayClass} bg-opacity-60`"></div>

        <!-- Content -->
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
.hero {
    transition: opacity 0.5s ease-in-out;
}
</style>