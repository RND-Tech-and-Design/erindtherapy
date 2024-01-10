<script setup lang="ts">
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
        main: {
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
        list: {
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
            }]

        }
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
                <IndividualTherapySection v-bind="pageData.section2.main" />
                <p class="mt-10 mb-10">
                    Have additional questions? Review the <NuxtLink to="/policies"
                        class="text-secondary font-bold underline">FAQs
                    </NuxtLink> for more info
                </p>
                <BulletPointList v-bind="pageData.section2.list" />
            </div>
        </section>


        <section>
            <IndividualTherapySection v-bind="pageData.section3" :class="pageStyle.sectionMargins" />
        </section>
    </div>

    <section>
        The process

        <div>
            <CardGlass />
        </div>
    </section>

    <Cta></Cta>
</template>