<script setup lang="ts">
import type { CarouselItem } from '~/types/carouselItem';

const props = defineProps<{
    carouselItem: CarouselItem,
    itemIndex: number,
}>()

const getCarouselItemId = (index: number) => `carousel-item-${index}`;

const carouselItemId = getCarouselItemId(props.itemIndex);

</script>

<template>
    <div :id="carouselItemId" class="carousel-item">
        <div class="card w-64 md:w-96 bg-secondary shadow-xl image-full">
            <figure>
                <NuxtImg
                         layout="responsive"
                         loading="lazy"
                         placeholder
                         :src="carouselItem?.image"
                         :alt="carouselItem?.altText" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ carouselItem?.title }}</h2>
                <p class="mt-8 md:mt-16">
                    {{ carouselItem?.description }}
                </p>
                <div class="card-actions justify-end">
                    <NuxtLink :to="carouselItem?.link"
                              class="mt-2 btn btn-secondary text-white">
                        Learn More
                        <Icon name="material-symbols:arrow-circle-right-rounded"
                              color="white"
                              size="2em" />
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>