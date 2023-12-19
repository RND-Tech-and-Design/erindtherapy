<script setup lang="ts">

import { priceCards } from '~/constants/priceCards'

definePageMeta({
    layout: 'default',
    name: 'Rates & Insurance',
    navOrder: 4
})

</script>

<template>
    <Hero headline="Rates & Insurance" hero-image="/images/banner/about.webp" />
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-base-100">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(priceCard, index) in priceCards" :key="priceCard.id"
                 :class="priceCard.bgClass + ' text-center p-6 rounded-lg card card-compact shadow-xl animate-fade-in'"
                 :style="{ '--delay': index * .2 + 's' }">

                <h2 class="text-lg font-medium text-gray-700">{{ priceCard.title }}</h2>
                <p class="text-4xl font-semibold text-gray-900 mt-4">{{ priceCard.price }}</p>
                <p class="mt-4">{{ priceCard.duration }}</p>
                <ul class="mt-4 text-sm text-gray-600">
                    <li v-for="item in priceCard.items" :key="item">{{ item }}</li>
                </ul>
                <NuxtLink :class="priceCard.btnClass + ' text-white px-4 py-2 rounded hover:' + priceCard.hoverClass">
                    Book Now!
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="max-w-4xl mx-auto p-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Payment Method 1 -->
            <div class="flex items-start gap-4">
                <!-- <img src="/path-to-your-icon-credit-card.svg" alt="Credit Card" class="w-12 h-12"> -->
                <div>
                    <h3 class="text-xl font-semibold">Payments</h3>
                    <p>I accept all major credit and debit cards as forms of payment.</p>
                </div>
            </div>

            <!-- Payment Method 2 -->
            <div class="flex items-start gap-4">
                <!-- <img src="/path-to-your-icon-hsa.svg" alt="HSA" class="w-12 h-12"> -->
                <div>
                    <h3 class="text-xl font-semibold">HSA</h3>
                    <p>I accept all Healthcare Savings Account debit cards as forms of payment.</p>
                </div>
            </div>

            <!-- Payment Method 3 -->
            <div class="items-start flex-wrap justify-center md:justify-start gap-4">
                <!-- <img src="/path-to-your-icon-medical-insurance.svg" alt="Medical Insurance" class="w-12 h-12"> -->
                <div>
                    <h3 class="text-xl font-semibold">Medical Insurance</h3>
                    <p>I do not take insurance directly. Please contact your provider to verify how your plan compensates
                        you for services.</p>
                    <button class="mt-2 btn btn-primary">Contact Provider</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$default-animation-delay: 0.5s;
$default-translate-y-start: 20px;

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY($default-translate-y-start);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    opacity: 0;
    animation: fadeIn $default-animation-delay ease forwards;
    animation-delay: var(--delay);
}
</style>