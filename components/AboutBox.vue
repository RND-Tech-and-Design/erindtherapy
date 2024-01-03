<script setup lang="ts">
const paragraphs = [
    'I am a Licensed Marriage and Family Therapist in Washington State, I extend my services through teletherapy, focusing on guiding individuals through pivotal career shifts, managing anxiety and depression, and mending relationship dynamics. My approach is to create a warm, empathetic sanctuary for you to freely examine your thoughts and emotions without fear of judgment.',
    'Embrace the ease and comfort of teletherapy, where personalized mental health care meets the privacy of your home. I offer compassionate counseling via secure video conferencing, ensuring you receive the support you need, when you need it.',
    'I also specialize in couples therapy, providing a path to stronger relationships, and offer intensive marathon therapy sessions for deeper exploration and rapid progress.',
    'I\'m committed to helping you face life\'s hurdles with resilience. Don\'t let stress dictate your life—take the first step with me today toward a more healed and hopeful future.',
]

</script>

<template>
    <section class="flex flex-col md:flex-row">
        <div class="flex justify-center py-20 relative bg-cover bg-center text-text_primary md:w-[65%]">
            <div class="absolute inset-0 opacity-80"></div>
            <div class="flex flex-col md:mx-6 lg:mx-14 relative z-10 text-text_primary mt-10 text-left">
                <h3
                    class="mb-2 text-secondary block font-sans text-4xl font-semibold leading-snug tracking-normal antialiased text-left">
                    How I can help
                </h3>
                <p
                   class="block mb-3 text-text_primary text bg-clip-text font-sans text-2xl font-medium leading-relaxed text-transparent antialiased">
                    My clients struggle like you.
                </p>
                <p
                   v-for="(paragraph, index) in paragraphs"
                   :key="index"
                   class="block mt-3 text-text_primary bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                    {{ paragraph }}
                    
                </p>
            </div>
        </div>
        <div class="flex justify-center md:py-20 relative bg-cover bg-center text-text_secondary md:w-[35%]">
            <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                     class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img
                         class="w-full h-full object-cover"
                         src="/images/content/profile-home.webp"
                         alt="profile-picture" />
                </div>
                <div class="p-6 text-center">
                    <h4
                        class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Erin Dierickx
                    </h4>
                    <p
                       class="block text-primary bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Licensed Marriage and Family Therapist in Washington State

                    </p>
                    <br />
                    <p
                       class="block text-primary bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Level III Gottman Institute Trained Therapist
                    </p>
                    <NuxtLink to="/about"
                              class="mt-2 btn btn-secondary text-white">
                        About Me
                    </NuxtLink>

                </div>
            </div>
        </div>

    </section>
</template>
