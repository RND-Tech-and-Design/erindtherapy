<script setup lang="ts">
import type { BulletPointList } from '~/types/bulletPointList';
import type { ResponsiveCard } from '~/types/responsiveCard';
import type { SectionContent } from '~/types/sectionContent';

definePageMeta({
    layout: 'default',
    title: 'Individual Therapy'
})

const pageStyle = {
    sectionMargins: 'my-10 mx-5 xl:mx-auto  xl:max-w-screen-lg 2xl:max-w-screen-xl',
    backgroundColor: "bg-complementary_neutral bg-opacity-10",
    FAQLinkColor: "text-secondary",
}





const pageData = {
    section1: {
        title1: "You do not have to stay stuck",
        title2: "Find What Fills Your Cup",
        paragraphs: [
            {
                styleType: "",
                text: "Clients who arrive at therapy with me are often on the verge of burnout or already are.",
            },
            {
                styleType: "",
                text: "They are scared of remaining stuck and feel as though making a different choice for themselves is too intimidating or unrealistic. And yet, the sinking feeling of wondering if things could be better remains. But it doesn’t have to stay there.",
            },
        ],
    },
    section2: {

        title1: "Session Breakdown",
        title2: "What does my first session look like?",
        paragraphs: [
            {
                styleType: "",
                text: "During your first session, we’ll work on your intake paperwork, sign releases, and collaborate on your goals for therapy.",
            },
            {
                styleType: "",
                text: "Every session will be 50 minutes, and I recommend in the beginning we meet once a week for the first several weeks to keep up the momentum we see in each session. Payment is collected at the end of your session via credit card",
            }
        ],
    },

    section3: {
        title1: "Free Consultation",
        title2: "Find your best fit",
        paragraphs: [
            {
                styleType: "",
                text: "Every therapist is unique, and finding a clinician that is a good fit for you is essential. For this reason, I provide a single <b>free 15-minute phone consultation. </b>",
            },
            {
                styleType: "",
                text: "This gives you an opportunity to ask any questions you may have about my approach to therapy or the therapeutic process. It also gives both of us a chance to determine if we are a good fit. If you were better served by another clinician, I will provide you with referrals.",
            },
        ],
    },
    section4: {
        title: "The Process",
        text: "What will the therapeutic process be like for me?",
        backgroundImage: '/images/content/wave.webp'

    },
}

const sectionCardContent: SectionContent = {
    title: 'Therapy is a place to express ourselves and our experience',
    paragraphs: ['When we get the chance to express ourselves truly, our genuine characteristics emerge, tears are shed, joy is apparent, and we allow ourselves to feel and be, in all our humanness.',
        'No matter what, you are always in the driver’s seat. It’s your time, your money, and your energy!',
        'I see therapy as a space to process your lived experience in ways that shift how you view your current challenges. Brainstorming unique ways to process one’s experience is a creative piece that I love about therapy. We will tailor our sessions to your needs and preferences based on what you want out of therapy.']
    ,
    backgroundImage: '/images/content/wave.webp'
}



const bulletPointList: BulletPointList =
{
    columnBreakIndex: 3,
    textStyle: "group-hover:text-primary font-bold",
    listDiscStyle: 'w-5 h-5 bg-accent rounded-full mr-2 group-hover:bg-primary',
    bulletPoints: [{
        link: '/policies',
        text: 'All sessions are virtual'
    },
    {
        link: '/ratesAndInsurance',
        text: 'All 50-minute sessions are $175',
        color: `${pageStyle.FAQLinkColor}`
    },
    {
        link: '/ratesAndInsurance',
        text: 'All 90-minute sessions are $250',
        color: `${pageStyle.FAQLinkColor}`
    },
    {
        link: '/policies',
        text: 'Insurance not accepted'
    },
    {
        link: '/policies',
        text: 'Reimbursement superbill provided'
    },
    {
        link: '/policies',
        text: 'Sliding rates offered based on need'
    }
    ]
}



const responsiveCard: ResponsiveCard[] = [
    {
        title: "Mindfulness",
        backgroundColor: 'bg-primary bg-opacity-50', image: "/images/content/beach_footsteps.webp", paragraphs: ['I incorporate exercises centered around body awareness and mindfulness.', 'This may include breathing techniques, body scans, meditations, or yoga to name a few.']
    },
    { title: "Metaphor", backgroundColor: 'bg-secondary bg-opacity-50', image: "/images/content/beach_footsteps.webp", paragraphs: ['We often speak in metaphors and when they do arise, I might invite you to describe it in further detail or even draw it out.', 'This helps us separate the issue from ourselves and can be a powerful technique toward healing.'] },
    { title: "Strengths", backgroundColor: 'bg-accent bg-opacity-50', image: "/images/content/beach_footsteps.webp", paragraphs: ['My approach is strengths-based, meaning I am going to help you identify the areas you shine the most.', 'This may be uncomfortable, and you might not be used to hearing about what makes you amazing.'] },
]

</script>


<template>
    <Hero headline="Individual Therapy" hero-image="/images/banner/about.webp" />

    <div class="flex flex-col align-center">
        <section>
            <div :class="pageStyle.sectionMargins">
                <div class="flex flex-col md:flex-row items-center justify-center">
                    <IndividualTherapySection v-bind="pageData.section1" class="flex-1 " />
                    <div
                        class="flex-1 mt-10 md:mt-0 ml-0 md:ml-10 lg:ml-20 xl:ml-40  max-w-96 lg:max-w-screen-sm rounded-xl bg-clip-border text-gray-700 shadow-lg">
                        <img class="object-cover object-center w-full h-full rounded-xl text-gray-700 shadow-lg"
                            src="/images/content/beach_footsteps.webp" alt="beach-footsteps" />
                    </div>
                </div>
            </div>

        </section>

        <section :class="pageStyle.backgroundColor">
            <div :class="pageStyle.sectionMargins">
                <IndividualTherapySection v-bind="pageData.section2" />
                <p class="mt-10 mb-10">
                    Have additional questions? Review the <NuxtLink to="/policies"
                        class="text-secondary hover:opacity-80 font-bold underline">FAQs
                    </NuxtLink> for more info
                </p>
                <BulletPointList :bulletPointList="bulletPointList" />
            </div>
        </section>


        <section>
            <IndividualTherapySection v-bind="pageData.section3" :class="pageStyle.sectionMargins" class="pb-10" />
        </section>
    </div>


    <section class="pb-0">
        <div class="relative bg-cover bg-no-repeat bg-center text-center"
            :style="{ backgroundImage: `url(${pageData.section4.backgroundImage})` }">
            <div class="absolute inset-0 bg-black opacity-60"></div>
            <div class=" px-4 py-32 relative">
                <div class="text-complementary_neutral">
                    <h2 class="uppercase tracking-tight  font-bold text-accent">{{ pageData.section4.title }}</h2>
                    <p class="mt-5 lg:text-4xl text-3xl font-medium">
                        {{ pageData.section4.text }}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section :class="pageStyle.backgroundColor">
        <div class="flex flex-col items-center pt-20" :class="pageStyle.sectionMargins">
            <IndividualTherapyResponsiveCard v-for="(card, index) in  responsiveCard" :key="index" :responsiveCard="card"
                class=" max-w-[80%] sm:max-w-[70%] md:max-w-[100%] md:w-full md:h-60 mx-10 mb-20" />

        </div>
    </section>
    <SectionCard :content="sectionCardContent" />

    <Cta></Cta>
</template>


