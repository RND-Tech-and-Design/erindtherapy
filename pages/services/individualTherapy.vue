<script setup lang="ts">
definePageMeta({
    layout: 'default',
    title: 'Individual Therapy'
})

const pageStyle = {
    margins: " mx-10 md:mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg ",
    backgroundColor: "bg-complementary_neutral bg-opacity-10"
}

const FAQLinkColor = "text-sky-800"



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
        bulletPoints: [{
            link: '/policies',
            text: 'All sessions are virtual'
        },
        {
            link: '/ratesAndInsurance',
            text: 'All 50-minute sessions are $175',
            color: `${FAQLinkColor}`
        },
        {
            link: '/ratesAndInsurance',
            text: 'All 90-minute sessions are $250',
            color: `${FAQLinkColor}`
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
    }

}

</script>

<template>
    <Hero headline="Individual Therapy" hero-image="/images/banner/about.webp" />

    <div class="flex flex-col align-center">



        <section :class="pageStyle.backgroundColor">
            <div :class="pageStyle.margins">
                <IndividualTherapySection v-bind="pageData.section2" :class="pageStyle.margins" />
                <p :class="pageStyle.margins">
                    Have additional questions? Review the <NuxtLink to="/policies"
                        class="text-secondary font-bold underline">FAQs
                    </NuxtLink> for more info
                </p>


                <ul class="mt-10">
                    <li v-for="(bulletPoint, index) in pageData.section2.bulletPoints" :key="index"
                        class="block mb-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased">
                        <NuxtLink :to="bulletPoint.link" :class="[bulletPoint.color]" class="font-bold"> {{
                            bulletPoint.text
                        }}
                        </NuxtLink>
                    </li>
                </ul>

            </div>
        </section>


        <section :class="pageStyle.backgroundColor">
            <IndividualTherapySection v-bind="pageData.section3" :class="pageStyle.margins" />
        </section>
    </div>

    <Cta></Cta>
</template>