<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        default: 'Ready to get started?',
    },
    subtitle: {
        type: String,
        default: 'Schedule your free 15 minute consultation today!',
    },
    buttonText: {
        type: String,
        default: "Let's Connect",
    },
    buttonLink: {
        type: String,
        default: '/contact',
    },
    iconName: {
        type: String,
        default: 'material-symbols:handshake-outline-rounded',
    },
    iconColor: {
        type: String,
        default: '',
    },
    iconSize: {
        type: String,
        default: '2em',
    },
    backgroundImage: {
        type: String,
    },

});

const image = Math.floor(Math.random() * 7) + 1;
const bg = props.backgroundImage || `/images/cta/${image}.webp`;
</script>

<template>
    <section class="flex justify-center py-20 relative bg-cover bg-center text-text_secondary"
             :style="{ backgroundImage: `url(${bg})` }">
        <div class="absolute inset-0 bg-primary opacity-80"></div>
        <div class="flex flex-col items-center md:mx-6 lg:mx-14 relative z-10">
            <div class="text-center mb-4">
                <h2 class="text-2xl font-bold">{{ title }}</h2>
                <p class="text-lg">{{ subtitle }}</p>
            </div>
            <div>
                <NuxtLink class="btn btn-accent"
                          :to="buttonLink">
                    {{ buttonText }}
                    <Icon :name="iconName"
                          :color="iconColor"
                          :size="iconSize" />
                </NuxtLink>
                <slot></slot>
            </div>
        </div>
    </section>
</template>
