<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

</script>

<template>
    <section>
        <div class="hero min-h-screen"
             style="background-image: url(/images/banner/home.webp);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content mt-32 ">
                <div class="max-w-md -mt-64 h-96 md:max-w-2xl text-left md:-ml-32 md:-mt-64 ">
                    <h1 class="mb-5 text-3xl font-bold">
                        A NEW CHAPTER?
                    </h1>
                    <h2 class="mb-5 text-5xl font-bold ">
                        Don’t just face it,
                        <span class="relative z-10 bg-gradient-to-r from-accent to-soft
                     bg-clip-text text-5xl font-extrabold text-transparent">
                            embrace it!
                        </span>
                    </h2>
                    <p class="mb-5 text-2xl">I help individuals and couples meet a new chapter with confidence</p>

                    <div class="p-1 bg-gradient-to-r from-accent via-primary to-soft
                      hover:from-soft hover:via-primary hover:to-accent 
                     rounded-lg inline-block">
                        <NuxtLink to="/contact"
                                  class="bg-secondary hover:bg-primary hover:text-black text-text_secondaryt 
                              px-4 py-2 rounded-lg flex items-center">
                            <span class="flex items-center">
                                <span class="mr-2">Get Started</span>
                                <ArrowRightIcon class="h-6 w-6" />
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>