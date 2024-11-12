<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { CarouselItem } from '~/types/carouselItem';

const props = defineProps<{
    carouselItems: CarouselItem[],
}>()

const carouselRef = ref<HTMLDivElement | null>(null);
const showLeftButton = ref(false);
const showRightButton = ref(true);
const iconSize = ref('2em'); // Default size

// Function to adjust icon size based on screen width
const adjustIconSize = () => {
    if (window.innerWidth < 640) { // Tailwind's 'sm' breakpoint
        iconSize.value = '2em';
    } else {
        iconSize.value = '4em';
    }
}

const scrollCarousel = (direction: number) => {
    if (carouselRef.value) {
        carouselRef.value.scrollLeft += direction * 300; // adjust the value as needed
    }
}
const updateButtonVisibility = () => {
    if (carouselRef.value) {
        const carouselWidth = carouselRef.value.offsetWidth;
        const totalItemWidth = carouselRef.value.scrollWidth;
        const scrollPosition = carouselRef.value.scrollLeft;

        showLeftButton.value = scrollPosition > 0;
        showRightButton.value = scrollPosition < totalItemWidth - carouselWidth;
    }
}

onMounted(() => {
    window.addEventListener('resize', () => {
        adjustIconSize();
        updateButtonVisibility();
    });
    if (carouselRef.value) {
        carouselRef.value.addEventListener('scroll', updateButtonVisibility);
    }
    adjustIconSize();
    updateButtonVisibility();
});

onUnmounted(() => {
    window.removeEventListener('resize', adjustIconSize);
    if (carouselRef.value) {
        carouselRef.value.removeEventListener('scroll', updateButtonVisibility);
    }
});
</script>

<template>
    <section class="py-10 px-2"> <!-- Changed mx-2 to px-2 -->
        <div class="flex justify-center items-center py-8">
            <transition name="fade">
                <button :style="{ visibility: showLeftButton ? 'visible' : 'hidden' }"
                        class="btn btn-circle btn-ghost ml-2 hover:bg-transparent"
                        @click="scrollCarousel(-1)">
                    <icon
                          name="material-symbols:chevron-left"
                          :size="iconSize"
                          class="flex-none -mt-1"
                          aria-hidden="true" />
                </button>
            </transition>
            <div ref="carouselRef" class="carousel carousel-center p-4 space-x-2 rounded-box overflow-hidden">
                <!-- Added overflow-hidden -->
                <CarouselCard v-for="(item, index) in carouselItems" :key="index"
                              :carouselItem="item"
                              :itemIndex="index"
                              @load="updateButtonVisibility" />
            </div>
            <transition name="fade">
                <button :style="{ visibility: showRightButton ? 'visible' : 'hidden' }"
                        class="btn btn-circle btn-ghost mr-2 hover:bg-transparent"
                        @click="scrollCarousel(1)">
                    <icon
                          name="material-symbols:chevron-right"
                          :size="iconSize"
                          class="flex-none -mt-1"
                          aria-hidden="true" />
                </button>
            </transition>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>