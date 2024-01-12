<script setup lang="ts">
import type { CarouselItem } from '~/types/carouselItem';

const props = defineProps<{
    carouselItems: CarouselItem[],
}>()

const carouselRef = ref<HTMLDivElement | null>(null);
const showLeftButton = ref(false);
const showRightButton = ref(true);


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
    window.addEventListener('resize', updateButtonVisibility);
    if (carouselRef.value) {
        carouselRef.value.addEventListener('scroll', updateButtonVisibility);
    }
    updateButtonVisibility();
});

onUnmounted(() => {
    window.removeEventListener('resize', updateButtonVisibility);
    if (carouselRef.value) {
        carouselRef.value.removeEventListener('scroll', updateButtonVisibility);
    }
});


</script>

<template>
    <section class="py-10">
        <div class="flex justify-center items-center py-8">
            <transition name="fade">
                <button :style="{ visibility: showLeftButton ? 'visible' : 'hidden' }" class="btn btn-circle btn-ghost" @click="scrollCarousel(-1)">
                    <icon name="material-symbols:chevron-left"
                          size="4em"
                          class="flex-none -mt-1 mr-1">
                    </icon>
                </button>
            </transition>
            <div ref="carouselRef" class="carousel carousel-center p-4 space-x-2 rounded-box">
                <CarouselCard v-for="(item, index) in carouselItems" :key="index"
                              :carouselItem="item"
                              :itemIndex="index"
                              @load="updateButtonVisibility" />

            </div>
            <transition name="fade">
            <button :style="{ visibility: showRightButton ? 'visible' : 'hidden' }" class="btn btn-circle btn-ghost" @click="scrollCarousel(1)">
                <icon name="material-symbols:chevron-right"
                      size="4em"
                      class="flex-none -mt-1 ml-1">
                </icon>
            </button>
            </transition>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
