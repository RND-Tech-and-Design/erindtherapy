<script setup lang="ts">

import type { PriceCard, PaymentCard } from '~/types/card';

definePageMeta({
    layout: 'default',
    title: 'Rates & Insurance',
    navOrder: 4,
    description: `Affordable, results-oriented therapy: Specializing in marathon couples therapy, individual counseling. 
    Flexible rates, personalized care. Expert therapist.`
})


const priceCards: PriceCard[] = [
    {
        id: 1,
        title: 'Phone Consultation',
        price: 'FREE',
        duration: '20-minute phone call',
        items: ['Share your story', 'Ask questions about services', 'Discover compatibility', 'Schedule intake'],
        bgClass: 'bg-primary bg-opacity-50',
        btnClass: 'mt-8 btn btn-primary',
        hoverClass: 'bg-primary'
    },
    {
        id: 2,
        title: '50 minute Session',
        price: '$190',
        duration: '50 minutes',
        items: ['Individualized services', 'Explore coping skills', 'Gain tools and resources', 'Share your story'],
        bgClass: 'bg-secondary bg-opacity-50',
        btnClass: 'mt-8 btn btn-secondary',
        hoverClass: 'bg-secondary'
    },
    {
        id: 3,
        title: '90 minute Session',
        price: '$275',
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

const modal = ref<HTMLDialogElement | null>(null);

// Function to close the modal
const closeModal = () => {
    modal.value?.close();
    showIframe.value = false;
};

const iframeUrl = ref(
    'https://erindtherapy.clientsecure.me/widget-redirect?scopeId=a369b4c9-25b3-444d-8978-af57c98e6307&scopeGlobal=true&applicationId=7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b&channel=sp_website&appearance=%7B%22fullScreen%22%3Atrue%7D'
);
const showIframe = ref(false);
const iframeLoading = ref(true); // Tracks the iframe's loading state
const pageLoaded = ref(false); // Tracks the iframe's loading state

const toggleIframe = (event: any) => {
    console.log('toggleIframe', event)
    event.preventDefault();
    showIframe.value = !showIframe.value;
    console.log('toggleIframe value', showIframe.value)
    // Reset iframeLoading state when opening
    if (showIframe.value) {
        iframeLoading.value = true;
    }
};

const onIframeLoad = () => {
    console.log('Iframe loaded');
    iframeLoading.value = false; // Iframe has finished loading
};

onMounted(() => {
    pageLoaded.value = true
    // Event handler for iframe messages
    const handleMessage = (event: any) => {
        // Validate the origin of the message
        if (event.origin !== 'https://spwidget-erindtherapy.clientsecure.me') {
            return;
        }

        const eventData = event?.data;
        // Check if the message contains the expected data
        if (eventData?.action === 'close' && eventData?.scope === "client-portal-iframe-to-origin") {
            closeModal();
        }
    };

    // Attach event listener
    window.addEventListener('message', handleMessage);

    // Cleanup listener on component unmount
    onUnmounted(() => {
        window.removeEventListener('message', handleMessage);
    });
});

</script>

<template>
    <Hero headline="Rates & Insurance"
          hero-image="/images/banner/rates.webp"
          overlayClass="bg-primary" />

    <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-base-100">
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
                <NuxtLink
                          v-if="pageLoaded"
                          onclick="booking_portal_modal.showModal()"
                          @click="toggleIframe"
                          :class="priceCard.btnClass + ' text-white px-4 py-2 rounded hover:' + priceCard.hoverClass">
                    Book Now!
                </NuxtLink>

                <NuxtLink
                          v-if="!pageLoaded"
                          :class="priceCard.btnClass + ' text-white px-4 py-2 rounded hover:' + priceCard.hoverClass">
                    <icon name="svg-spinners:pulse" size="2em" class="flex-none min-w-8"></icon>
                </NuxtLink>
            </div>
        </div>
    </section>

    <hr class="my-4">

    <section class="max-w-6xl mx-auto py-16 px-6 flex flex-col gap-12 items-center">
        <InfoCard
                  v-for="(card, index) in paymentCards"
                  :key="index"
                  :figureBackgroundClass="card.figureBackgroundClass"
                  :iconName="card.iconName"
                  :title="card.title"
                  :description="card.description"
                  class="w-full max-w-4xl bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                  
            <!-- Extra Content -->
            <template v-if="card.extraContentTemplates && card.extraContentTemplates.includes('insurance')">
                <div class="bg-gray-50 p-4 mt-4 rounded-md border border-gray-200">
                    <p class="text-gray-700 leading-relaxed">
                        However, depending on your current health insurance provider, it is possible for services to be
                        covered in full or in part. Please contact your provider to verify how your plan compensates you
                        for psychotherapy services.
                    </p>
                    <p class="text-lg font-semibold text-gray-900 mt-4">
                        A reimbursement superbill can be provided for free!
                    </p>

                    <button
                            class="mt-4 px-6 py-2 bg-secondary text-white rounded-lg flex items-center gap-2 hover:bg-secondary-dark transition-colors"
                            onclick="provider_questions_modal.showModal()">
                        <Icon name="material-symbols:help-center-rounded" size="1.5em" />
                        Provider Questions
                    </button>
                </div>
            </template>
        </InfoCard>
    </section>


    <Cta></Cta>

    <dialog id="provider_questions_modal" class="modal">
        <div class="modal-box w-11/12 max-w-7xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    <icon name="material-symbols:close" size="2em" class="flex-none min-w-8"></icon>

                </button>
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
                        <icon name="fluent:chat-bubbles-question-16-regular" size="2em" class="flex-none min-w-8">
                        </icon>
                        <span class="flex-auto pl-2 pt-1">
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

    <dialog id="booking_portal_modal" ref="modal" class="modal sm:h-full">
        <div
             class="modal-box max-h-screen md:[max-height:calc(100vh_-_5em)] w-full h-full md:w-10/12 lg:w-3/4 max-w-screen-lg ">
            <form method="dialog">
                <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Close">
                </button>
            </form>

            <div v-if="iframeLoading"
                 class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">

                <icon name="svg-spinners:3-dots-scale-middle" size="8em" class="flex-none min-w-8">
                </icon>
            </div>

            <div id="iframe-container" v-if="showIframe" class="w-full h-full border-0">
                <iframe @load="onIframeLoad" :src="iframeUrl" class="w-full h-full border-0" allowtransparency="true"
                        sandbox="allow-scripts allow-forms allow-same-origin"></iframe>
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