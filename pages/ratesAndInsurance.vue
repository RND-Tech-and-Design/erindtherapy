<script setup lang="ts">

import type { PriceCard, PaymentCard } from '~/types/card';

definePageMeta({
    layout: 'default',
    name: 'Rates & Insurance',
    navOrder: 4
})

const priceCards: PriceCard[] = [
    {
        id: 1,
        title: 'Phone Consultation',
        price: 'FREE',
        duration: '15-minute phone call',
        items: ['Share your story', 'Ask questions about services', 'Discover compatibility', 'Schedule intake'],
        bgClass: 'bg-primary bg-opacity-50',
        btnClass: 'mt-8 btn btn-primary',
        hoverClass: 'bg-primary'
    },
    {
        id: 2,
        title: '50 minute Session',
        price: '$175',
        duration: '50 minutes',
        items: ['Individualized services', 'Explore coping skills', 'Gain tools and resources', 'Share your story'],
        bgClass: 'bg-secondary bg-opacity-50',
        btnClass: 'mt-8 btn btn-secondary',
        hoverClass: 'bg-secondary'
    },
    {
        id: 3,
        title: '90 minute Session',
        price: '$250',
        duration: '90 minutes',
        items: ['Assess relationship strengths', 'Explore communication skills', 'Learn to manage conflict', 'Gain tools and resources'],
        bgClass: 'bg-accent bg-opacity-50',
        btnClass: 'mt-8 btn btn-accent',
        hoverClass: 'bg-accent'
    }
];

const paymentCards: PaymentCard[] = [
    {
        figureBackgroundClass: 'figure-background-cards',
        iconName: 'bi:credit-card-2-front',
        title: 'Payments',
        description: 'I accept all major credit and debit cards as forms of payment.',
    },
    {
        figureBackgroundClass: 'figure-background-hsa',
        iconName: 'streamline:insurance-hand',
        title: 'HSA',
        description: 'I accept all Healthcare Savings Account debit cards as forms of payment.',
    },
    {
        figureBackgroundClass: 'figure-background-insurance',
        iconName: 'streamline:good-health-and-well-being',
        title: 'Medical Insurance',
        description: 'I do not take insurance directly.',
        extraContentTemplates: ['insurance'],
    },
];

const providerQuestions: string[] = [
    'Could you please provide the call reference number and the name of the representative I\'m speaking with?',
    'Are "out of network" mental health benefits included in my health insurance plan, and what percentage is reimbursed for mental health services?',
    'What constitutes telehealth services according to my plan, and is live video necessary for these services?',
    'Is there a particular billing code that is required for telehealth services?',
    'Do I have a deductible, and if so, how much is it and has it been met?',
    'Are there any restrictions on the number of sessions I\'m allowed per calendar year, and what is the maximum allowed?',
    'Is written authorization from my primary care physician required for services to be reimbursed?',
    'What specific documents, if any, does my counselor need to provide for insurance purposes?',
];


</script>

<template>
    <Hero headline="Rates & Insurance"
          hero-image="/images/banner/rates.webp"
          overlayClass="bg-primary" />

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

    <hr class="my-4">

    <div class="max-w-4xl mx-auto p-6 flex flex-col gap-8 items-center md:mt-16 ">
        <InfoCard
                  v-for="(card, index) in paymentCards"
                  :key="index"
                  :figureBackgroundClass="card.figureBackgroundClass"
                  :iconName="card.iconName"
                  :title="card.title"
                  :description="card.description">

            <template v-if="card.extraContentTemplates && card.extraContentTemplates.includes('insurance')">
                <p class="pt-1">
                    However, depending on your current health
                    insurance provider, it is possible for services to be covered in full or in part. Please contact
                    your provider to verify how your plan compensates you for psychotherapy services.
                </p>
                <p class="text-xl">
                    <strong>
                        A reimbursement superbill can be provided for free!
                    </strong>
                </p>

                <button class="mt-2 btn btn-primary text-white" onclick="provider_questions_modal.showModal()">Provider
                    Questions
                    <Icon name="material-symbols:help-center-rounded" color="white" size="2em" />
                </button>
            </template>
        </InfoCard>
    </div>

    <!-- <div class="max-w-4xl mx-auto p-6 flex flex-col gap-8 items-center md:mt-16 ">

        <div class="card w-5/6  bg-soft_off_white shadow-xl">
            <figure class="p-24 relative">
                <div class="figure-background-cards"></div>
                <Icon name="bi:credit-card-2-front" color="white" size="8em" class="z-10" />
            </figure>
            <div class="card-body">
                <h3 class="text-3xl font-semibold">Payments</h3>
                <p class="text-xl">I accept all major credit and debit cards as forms of payment.</p>
            </div>
        </div>

        <div class="card w-5/6 bg-soft_off_white shadow-xl">
            <figure class="p-24 relative">
                <div class="figure-background-hsa"></div>
                <Icon name="streamline:insurance-hand" color="white" size="8em" class="z-10" />
            </figure>
            <div class="card-body">
                <h3 class="text-3xl font-semibold">HSA</h3>
                <p class="text-xl">I accept all Healthcare Savings Account debit cards as forms of payment.</p>
            </div>
        </div>

        <div class="card w-5/6 bg-soft_off_white  shadow-xl ">
            <figure class="p-24 relative">
                <div class="figure-background-insurance"></div>
                <Icon name="streamline:good-health-and-well-being" color="white" size="8em" class="z-10" />
            </figure>
            <div class="card-body">
                <h3 class="text-3xl font-semibold">Medical Insurance</h3>
                <p>
                    <strong>I do not take insurance directly.</strong>
                    <br />
                    <br />
                    However, depending on your current health
                    insurance provider, it is possible for services to be covered in full or in part. Please contact
                    your provider to verify how your plan compensates you for psychotherapy services.
                </p>
                <br />
                <p class="text-xl">
                    <strong>
                        A reimbursement superbill can be provided for free!
                    </strong>
                </p>

                <button class="mt-2 btn btn-primary text-white" onclick="provider_questions_modal.showModal()">Provider
                    Questions
                    <Icon name="material-symbols:help-center-rounded" color="white" size="2em" />
                </button>
            </div>
        </div>
    </div> -->

    <dialog id="provider_questions_modal" class="modal">
        <div class="modal-box w-11/12 max-w-7xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold text-lg py-4 ">Questions for your provider</h3>
            <div>
                <p class="py-4">
                    <strong>
                        I'd recommend asking these questions to your insurance provider to help determine your benefits:
                    </strong>
                </p>
                <div class="py-4 ml-2">
                    <div v-for="(question, index) in providerQuestions" :key="index" class="pt-2 pl-2 flex">
                        <icon name="fluent:chat-bubbles-question-16-regular" size="2em"></icon>
                        <span class=" pl-2 ">
                            {{ question }}
                        </span>
                    </div>
                </div>
                <hr class="my-4">
                <p>
                    <strong>
                        It is always the client's responsibility to know and verify their own benefits. The client is
                        responsible for anything that insurance doesn't cover.
                    </strong>
                </p>
            </div>
        </div>
    </dialog>
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