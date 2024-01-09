<script setup lang="ts">

import type { CarouselItem } from '~/types/carouselItem';
import type { SectionContent } from '~/types/sectionContent';

definePageMeta({
    layout: 'default',
    title: 'Home',
    navOrder: 1,
})

const carouselItems: CarouselItem[] = [
    {
        image: "/images/content/helping_hand.webp",
        altText: "helping hand",
        title: "Individual Therapy",
        description: "Using a strengths-based methodology, I offer weekly 50-minute sessions designed to establish a robust support system tailored specifically for your needs.",
        link: "/services/individualTherapy"
    },
    {
        image: "/images/content/couple.webp",
        altText: "couple",
        title: "Couples Therapy",
        description: "I provide weekly sessions, available in 50 or 90-minute durations, aimed at assisting you and your partner in overcoming relationship challenges. By employing the Gottman Method, I focus on fostering a stronger bond and deeper connection between you both, using a scientifically grounded approach.",
        link: "/services/couplesTherapy"
    },
    {
        image: "/images/content/marathon.webp",
        altText: "heart",
        title: "Marathon Therapy",
        description: "I offer flexible, intensive marathon therapy sessions designed to quickly deepen your understanding of relationship dynamics and strengthen your connection with your partner, ideal for couples seeking rapid progress.",
        link: "/services/marathonCouplesTherapy"
    }
]

const sectionCardContent: SectionContent = {
    title: 'Does this sound like you?',
    paragraphs: [
        'My patients often report they have been expending more energy than they bring in. They feel drained, cynical, and discouraged that their efforts are not manifesting in the goals they desire. Their attitude, relationships, and health suffer. They feel their time is spent in a job that no longer serves them.',
        'Before my clients came to see me, they concluded that it was “too late” to make a change, and that “it is what it is.” They feared that if they took any drastic steps to improve their lives, it would be considered “selfish.” They believed they were stuck.',
        'The fear of change, but also the fear of never changing, created constant tension and anxiety.'
    ],
    backgroundImage: '/images/content/wave.webp'
}

</script>

<template>
    <div>
        <HomeHero />
        <AboutBox />

        <section class="py-10 ">
            <h3 class="text-3xl font-semibold text-center pb-18 mb-5">
                What I can help with
            </h3>
            <div class="flex justify-center items-center mt-8">
                <div class="carousel carousel-center p-4 space-x-2 rounded-box">
                    <CarouselCard v-for="(item, index) in carouselItems"
                                  :key="index"
                                  :carouselItem="item" />
                </div>
            </div>
        </section>

        <SectionCard :content="sectionCardContent" />

        <QuoteBlock :randomQuote="true" />

        <Cta></Cta>

        <AppAlert>
            Currently Accepting New Clients!
        </AppAlert>

    </div>
</template>
