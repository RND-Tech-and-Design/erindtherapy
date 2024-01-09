<script setup lang="ts">
const paragraphs = [
    'As a Licensed Marriage and Family Therapist in Washington State, I offer my expertise through teletherapy. My primary focus is assisting individuals in navigating significant career changes, managing symptoms of anxiety and depression, and improving relationship dynamics. I create a nurturing, empathetic environment for you to explore thoughts and feelings without fear of judgment.',
    'Teletherapy brings the convenience and comfort of mental health care into your home. I provide compassionate counseling through secure video conferencing, ensuring access to support when needed.',
    'I also specialize in couples therapy, guiding partners towards stronger bonds, and conduct intensive marathon therapy sessions for deeper insight and swift progress.',
    'Dedicated to helping you overcome life\'s challenges with strength and resilience, I invite you to take the first step with me today towards a more healing and hopeful future.'
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
                   class="block mb-3 text-text_primary text bg-clip-text font-sans text-2xl font-medium leading-relaxed  antialiased">
                    My clients struggle like you.
                </p>
                <p
                   v-for="(paragraph, index) in paragraphs"
                   :key="index"
                   class="block mt-3 text-text_primary bg-clip-text font-sans text-base font-medium leading-relaxed antialiased">
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
                       class="block text-primary bg-clip-text font-sans text-base font-medium leading-relaxed antialiased">
                        Licensed Marriage and Family Therapist in Washington State

                    </p>
                    <br />
                    <p
                       class="block text-primary bg-clip-text font-sans text-base font-medium leading-relaxed antialiased">
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
