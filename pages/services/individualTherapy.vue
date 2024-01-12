<script setup lang="ts">
import type { BulletPointList } from '~/types/bulletPointList';
import type { ResponsiveCard } from '~/types/responsiveCard';
import type { SectionContent } from '~/types/sectionContent';

definePageMeta({
    layout: 'default',
    title: 'Individual Therapy'
})

const pageStyle = {
    sectionMargins: 'py-20 mx-5 xl:mx-auto  xl:max-w-screen-lg 2xl:max-w-screen-xl',
    generalBgColor: "bg-complementary_neutral bg-opacity-10",
    FAQLinkColor: "text-secondary",
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


const section4Props: ResponsiveCard[] = [
    {
        title: "Mindfulness",
        backgroundColor: 'bg-primary bg-opacity-50',
        imageURL: "/images/content/ind_therapy_mindfulness.webp",
        imageAlt: "Mindfulness",
        paragraphs: ['I incorporate exercises centered around body awareness and mindfulness.', 'This may include breathing techniques, body scans, meditations, or yoga to name a few.']
    },
    {
        title: "Metaphor", backgroundColor: 'bg-secondary bg-opacity-50',
        imageURL: "/images/content/ind_therapy_metaphor.webp",
        imageAlt: "Metaphor",
        paragraphs: ['We often speak in metaphors and when they do arise, I might invite you to describe it in further detail or even draw it out.', 'This helps us separate the issue from ourselves and can be a powerful technique toward healing.']
    },
    {
        title: "Strengths", backgroundColor: 'bg-accent bg-opacity-50',
        imageURL: "/images/content/ind_therapy_strengths.webp",
        imageAlt: "Strengths",
        paragraphs: ['My approach is strengths-based, meaning I am going to help you identify the areas you shine the most.', 'This may be uncomfortable, and you might not be used to hearing about what makes you amazing.']
    },
]


const section5Props: SectionContent = {
    title: 'Therapy is a place to express ourselves and our experience',
    paragraphs: ['When we get the chance to express ourselves truly, our genuine characteristics emerge, tears are shed, joy is apparent, and we allow ourselves to feel and be, in all our humanness.',
        'No matter what, you are always in the driver’s seat. It’s your time, your money, and your energy!',
        'I see therapy as a space to process your lived experience in ways that shift how you view your current challenges. Brainstorming unique ways to process one’s experience is a creative piece that I love about therapy. We will tailor our sessions to your needs and preferences based on what you want out of therapy.']
    ,
    backgroundImage: '/images/banner/ind_therapy_banner3.webp'
}





const pageData = {
    hero: {
        props: {
            title: "Individual Therapy",
            imageURL: '/images/banner/ind_therapy_banner1.webp',
            imageAlt: "Hero Image",
            backgroundColor: "bg-primary"
        }
    },

    section1: {
        imageURL: '/images/content/beach_footsteps.webp',
        imageAlt: "footsteps",
        props: {
            title1: "You do not have to stay stuck",
            title2: "Find What Fills Your Cup",
            paragraphs: [
                {
                    text: "Clients who arrive at therapy with me are often on the verge of burnout or already are.",
                },
                {
                    text: "They are scared of remaining stuck and feel as though making a different choice for themselves is too intimidating or unrealistic. And yet, the sinking feeling of wondering if things could be better remains. But it doesn’t have to stay there.",
                },
            ],
        }
    },
    section2: {
        props: {
            title1: "Session Breakdown",
            title2: "What does my first session look like?",
            paragraphs: [
                {
                    text: "During your first session, we’ll work on your intake paperwork, sign releases, and collaborate on your goals for therapy.",
                },
                {
                    text: "Every session will be 50 minutes, and I recommend in the beginning we meet once a week for the first several weeks to keep up the momentum we see in each session. Payment is collected at the end of your session via credit card",
                }
            ],
        },
        bulletPoints: bulletPointList
    },

    section3: {
        props:
        {
            title1: "Free Consultation",
            title2: "Find your best fit",
            paragraphs: [
                {
                    text: "Every therapist is unique, and finding a clinician that is a good fit for you is essential. For this reason, I provide a single <b>free 15-minute phone consultation. </b>",
                },
                {
                    text: "This gives you an opportunity to ask any questions you may have about my approach to therapy or the therapeutic process. It also gives both of us a chance to determine if we are a good fit. If you were better served by another clinician, I will provide you with referrals.",
                },
            ],
        }
    },

    section4: {
        backgroundColor: 'bg-rose-50 opacity-50',
        banner: {
            title1: "The Process",
            title2: "What will the therapeutic process be like for me?",
            bannerImageURL: '/images/banner/ind_therapy_banner2.webp',
            bannerImageAlt: "Section 4 Banner",
            bannerBgColor: "bg-black opacity-60",
        },
        props: section4Props

    }
}


</script>




<template>
    <Hero :headline="pageData.hero.props.title" :hero-image="pageData.hero.props.imageURL"
        :overlayClass="pageData.hero.props.backgroundColor" />
    <div class="flex flex-col align-center">

        <!-- Section1 -->
        <section>
            <div :class="pageStyle.sectionMargins">
                <div class="flex flex-col md:flex-row items-center justify-center">
                    <IndividualTherapySection v-bind="pageData.section1.props" class="flex-1 " />
                    <div
                        class="flex-1 mt-10 md:mt-0 ml-0 md:ml-10 lg:ml-20 xl:ml-40  max-w-96 lg:max-w-screen-sm rounded-xl bg-clip-border text-gray-700 shadow-lg">
                        <img class="object-cover object-center w-full h-full rounded-xl text-gray-700 shadow-lg"
                            :src="pageData.section1.imageURL" :alt="pageData.section1.imageAlt" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Section2 -->
        <section :class="pageStyle.generalBgColor">
            <div :class="pageStyle.sectionMargins">
                <IndividualTherapySection v-bind="pageData.section2.props" />
                <p class="mt-10 mb-10">
                    Have additional questions? Review the <NuxtLink to="/policies"
                        class="text-secondary hover:opacity-80 font-bold underline">FAQs
                    </NuxtLink> for more info
                </p>
                <BulletPointList :bulletPointList="pageData.section2.bulletPoints" />
            </div>
        </section>

        <!-- Section3 -->
        <section>
            <IndividualTherapySection v-bind="pageData.section3.props" :class="pageStyle.sectionMargins" />
        </section>
    </div>

    <!-- Section4 -->
    <section class="pb-0">
        <!-- Section4 Banner -->
        <div class="relative bg-cover bg-no-repeat bg-center text-center"
            :style="{ backgroundImage: `url('${pageData.section4.banner.bannerImageURL}')` }">

            <div class="absolute inset-0" :class="pageData.section4.banner.bannerBgColor"></div>
            <div class=" px-4 py-32 relative">
                <div class="text-white">
                    <h2 class="uppercase tracking-tight  font-bold text-accent">{{ pageData.section4.banner.title1 }}</h2>
                    <p class="mt-5 lg:text-4xl text-3xl font-medium">
                        {{ pageData.section4.banner.title2 }}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section4 Process ResponsiveCards -->
    <section :class="pageData.section4.backgroundColor">
        <div class="flex flex-col items-center pb-0" :class="pageStyle.sectionMargins">
            <IndividualTherapyResponsiveCard v-for="(card, index) in  pageData.section4.props" :key="index"
                :responsiveCard="card" class=" max-w-[80%] sm:max-w-[70%] md:max-w-[100%] md:w-full md:h-60 mx-10 mb-20" />
        </div>
    </section>
    <!-- Section5 -->
    <SectionCard :content="section5Props" />

    <Cta></Cta>
</template>


