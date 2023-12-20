<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
    figureBackgroundClass: {
        type: String,
        required: true,
    },
    iconName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <div class="card w-5/6 bg-soft_off_white shadow-xl">
        <figure class="p-24 relative">
            <div :class="figureBackgroundClass"></div>
            <Icon :name="iconName" color="white" size="8em" class="z-10" />
        </figure>
        <div class="card-body">
            <h3 class="text-3xl font-semibold">{{ title }}</h3>
            <p class="text-xl">{{ description }}</p>
            <slot />
        </div>
    </div>
</template>
<style scoped lang="scss">
$figure-backgrounds: 'cards', 'hsa', 'insurance';

@each $name in $figure-backgrounds {
    .figure-background-#{$name} {
        background-image: url('/images/content/#{$name}.webp');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        backdrop-filter: blur(8px);
        filter: blur(4px);
    }
}
</style>
