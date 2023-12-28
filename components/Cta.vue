<script setup lang="ts">


const image = Math.floor(Math.random() * 7) + 1;
const bg = `/images/cta/${image}.webp`;
</script>

<template>
    <div class="flex justify-center py-20 relative bg-cover bg-center text-text_secondary"
         :style="{ backgroundImage: `url(${bg})` }">
        <div class="absolute inset-0 bg-primary opacity-80"></div> <!-- This is the overlay -->
        <div class="flex flex-col items-center md:mx-6 lg:mx-14 relative z-10">
            <div class="text-center mb-4">
                <h2 class="text-2xl font-bold">Ready to get started?</h2>
                <p class="text-lg">Schedule your free 15 minute consultation today!</p>
            </div>
            <div>
                <NuxtLink class="btn btn-accent" to="/contact">
                    Let's Connect
                    <Icon name="material-symbols:handshake-outline-rounded" color="" size="2em" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
