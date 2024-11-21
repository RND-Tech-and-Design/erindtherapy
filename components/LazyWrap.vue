<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

// Define props
const props = defineProps({
    animate: {
        type: Boolean,
        default: true, // Enable animation by default
    },
});

// Reactive references
const isIntersecting = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);

// Observer variable
let observer: IntersectionObserver | null = null;

// Function to observe the element
const observeElement = (el: HTMLElement) => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isIntersecting.value = true;
                // Clean up observer after intersection
                observer?.disconnect();
                observer = null;
            }
        },
        {
            root: null, // Observe the viewport
            rootMargin: '0px',
            threshold: 0.1, // 10% visibility threshold
        }
    );
    observer.observe(el);
};

// Lifecycle hooks
onMounted(() => {
    if (wrapperRef.value) {
        observeElement(wrapperRef.value);
    }
});

onUnmounted(() => {
    // Ensure cleanup of the observer
    observer?.disconnect();
    observer = null;
});
</script>

<template>
    <div ref="wrapperRef" class="relative">
        <!-- Placeholder slot (displayed when not intersecting) -->
        <template v-if="!isIntersecting">
            <slot name="placeholder"></slot>
        </template>

        <!-- Render actual content when visible -->
        <div v-if="isIntersecting" :class="props.animate ? 'opacity-0 animate-fade-in' : ''">
            <slot />
        </div>
    </div>
</template>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 0.5s ease-in-out forwards;
}
</style>