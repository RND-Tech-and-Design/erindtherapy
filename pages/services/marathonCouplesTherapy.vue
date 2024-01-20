<script setup lang="ts">

import GeneralSection from '~/components/GeneralSection.vue'
import SubSection2 from '~/components/SubSection2.vue'






definePageMeta({
    layout: 'default',
    title: 'Marathon Couples Therapy',
    description: `Experience enhanced relationship healing with Marathon Couples Therapy: 
    an intensive, results-focused approach, led by a Level 3 Gottman-certified therapist for profound, lasting change.`
})


const pageStyle = {
    sectionMargins: 'py-20 md:py-32 mx-5 xl:mx-auto  xl:max-w-screen-lg 2xl:max-w-screen-xl',
    generalBgColor: "bg-complementary_neutral bg-opacity-10",
    weeklySessions: '<NuxtLink to="/couplestherapy"class="text-accent hover:opacity-80  underline">weekly sessions</NuxtLink>',
    checkMark: {
        iconName: 'material-symbols:check',
        iconColor: 'text-accent',
        iconSize: '3em',
    }

}

const pageData = {
    hero: {
        props: {
            title: "Marathon Couples Therapy",
            imageURL: '/images/banner/marathon-therapy-banner.webp',
            imageAlt: "Hero Image",
            backgroundColor: "bg-primary"
        }
    },

    section1: {
        imageURL: '/images/content/marathon-couple-sitting.webp',
        imageAlt: "couple-sitting",
        props: {
            title1: "Invest in Communication",
            title2: "Build Strong Habits",
            paragraphs: [
                {
                    text: `Marathon Couples Therapy is a growing, alternative approach to ${pageStyle.weeklySessions} that involves condensing couples therapy into 1–3 days. This offers you the time needed to address issues and revamp your relationship.`,
                },
                {
                    text: "In this unique and growing therapy approach, you’ll meet with a highly trained therapist for either 1, 2, or 3 consecutive days, depending on your needs.",
                },
            ]

        }
    },

    section2: {
        props: {
            title1: "intensive couples therapy",
            title2: "Why Marathon Couples Therapy?",
            paragraphs: []

        },

        tabs: [
            {
                itemName: "Convenient",
                backgroundColor: pageStyle.generalBgColor,

                itemBodyContent: {
                    heading: "It Fits Your Schedule",
                    paragraphs: [
                        "Marathon Therapy has the benefit of allowing you to schedule your therapy in a single large block of time. This is great for people who find it hard to commit to a weekly appointment due to busy or variable schedules.",
                    ],
                    imageURL: "/images/content/marathon-couple-convienent.webp",
                    imageAlt: "convenient",

                },
            },
            {
                itemName: "Depth",
                backgroundColor: pageStyle.generalBgColor,
                itemBodyContent: {
                    heading: "Time to Process",
                    paragraphs: [
                        "You may need to get through a lot of material quickly if your relationship or marriage is in trouble.",
                        "Intensive Marathon Therapy may be especially helpful with having time to process past injuries that never healed or if there has been a recent affair. It may be more convenient to take a few days and “knock it out,” as opposed to scheduling multiple appointments.",
                    ],
                    imageURL: "/images/content/marathon-couple-depth.webp",
                    imageAlt: "depth",

                },
            },
            {
                itemName: "Efficient",
                backgroundColor: pageStyle.generalBgColor,
                itemBodyContent: {
                    heading: "It Helps You See Results Sooner",
                    paragraphs: [
                        "Many couples schedule individual sessions schedule weekly, every two weeks, or monthly. It can take a long time to see the lasting benefits of using this schedule. Couples go to therapy and walk out feeling great, only to revert to old patterns as soon as they get home.",
                        "Marathon Therapy allows more time for what you learn to be cemented as habits in your relationship.",
                    ],
                    imageURL: "/images/content/marathon-couple-efficient.webp",
                    imageAlt: "efficient",

                },
            },
            {
                itemName: "Practice",
                backgroundColor: pageStyle.generalBgColor,
                itemBodyContent: {
                    heading: "Time To Practice What You Learn",
                    paragraphs: [
                        "You get a lot of time to practice new communication skills, build shared meaning, and boost your friendship. Guided practice allows you to explore communication under the supervision of a Gottman trained therapist.",
                    ],
                    imageURL: "/images/content/marathon-couple-practice.webp",
                    imageAlt: "practice",

                },
            },],



    },




    section3: {
        props: {
            title1: "What should we expect?",
            title2: "What will Marathon Therapy Look Like?",
            paragraphs: [
                {
                    text: 'Consultation: 20 minutes',
                    styleType: 'text-2xl  lg:text-4xl  font-medium'
                }, {
                    text: 'The initial 20-minute consultation phone call is important to see if you feel comfortable with your therapist, ask questions, and see if there is mutual agreement that this type of marathon couples therapy is a good fit for you.',

                },
                {
                    text: 'Here we will also find a time slot that works for you.'
                }]
        },
        subSections: [{
            heading: 'Assessments: 5 Hours',
            listDisc: true,
            paragraphs: {
                style: "",
                text: ["Relationship Assessments. You and your partner will separately complete online relationship assessments prior to starting therapy.  These results offer thorough information on your relationship’s strengths and challenges. ",
                    "Couples Intake Session. The therapist will gather your hopes for therapy and the history of your relationship. ",
                    "Individual Sessions.  The therapist will meet for 60 minutes with each partner separately.",
                    "Feedback Session. The results of the relationship assessments are provided, and the recommended areas for intervention are discussed. You are both provided with a specialized treatment plan from which evidence-based interventions are selected."

                ]
            }
        },
        {
            heading: 'Treatment: 10–20 hours',
            listDisc: false,
            paragraphs: {
                style: "",
                text: ["Structured interventions designed to strengthen friendship, intimacy, and conflict management are introduced and practiced in each session. You will learn to replace negative conflict patterns with positive interactions, repair past hurts, and begin to create shared meaning and purpose in your relationship. "

                ]
            }
        },
        {
            heading: 'Follow Up',
            listDisc: false,
            paragraphs: {
                style: "", text: [
                    "It is recommended to have several follow-up sessions approximately 3–4 weeks apart after the initial marathon therapy. The time after marathon therapy offers you a chance to process all that you learned and addressed in the marathon sessions. It is also extremely important to have follow-up sessions to prevent relapse. ",

                ]
            }
        }]
    },
    section4: {

        props: {
            title1: "are we a good fit?",
            title2: "Is Marathon Therapy For us?",
            paragraphs: []

        },
        checkList: {
            heading: 'Marathon Therapy is for you if:',
            checkMark: pageStyle.checkMark,
            list: {
                style: "",
                text: ["Both partners are committed to putting in the hard work.",
                    "You want to see the most rapid change possible in a therapy setting.",
                    "Are willing to commit to working hard with a well-trained therapist."
                ]
            },
        },
        subSection:
        {
            heading: 'Marathon Therapy is unsuitable when:',
            listDisc: true,
            paragraphs: {
                style: '',
                text: ["There is active alcohol and/or drug addiction on the part of either or both partners, from either partner’s perspective",
                    "There is serious violence in your relationship, threats by one or both partners that serious violence might occur, or fear of such serious violence on the part of one or both partners",
                    "Either partner currently has an untreated major mental illness (schizophrenia, recurrent psychotic depression, or bipolar/manic-depressive illness.) If a mental illness has not been addressed, it may need to be tackled first. Note: This does not include past, successfully treated psychotic episodes (e.g. postpartum depression with psychosis). If the mental illness has been treated through counseling and/or medication, the couple may be fine to attend.",
                    "There is serious violence in your relationship, threats by one or both partners that serious violence might occur, or fear of such serious violence on the part of one or both partners",
                    "There is an undisclosed, current affair that you are not willing to disclose (such secrets predict marital therapy failure)",
                    "Either partner is currently experiencing suicidal or homicidal thoughts or has a history of serious harm inflicted on him/herself or another person",
                    "One partner feels pressured into going"
                ]
            }
        }
    },
    section5: {
        props: {
            title1: "Details",
            title2: "Rates",
            sectionStyle: 'list-disc ml-5',
            paragraphs: [{
                styleType: 'mb-4',
                text: 'The rate for marathon therapy sessions is $250 per 60-minute increment.',

            }, {
                styleType: 'mt-0',
                text: "A deposit of 50% is required at the point of reservation in order to solidify your slot. Once the deposit is received, the days agreed upon by the client and therapist are secured. The remaining payment is due at the start of your first session and is non-refundable. Credit or debit card payments can be completed online via Simple Practice or over the phone.",

            },
            ]

        },
        subSections: [{
            heading: 'Rescheduling and Cancellation',
            listDisc: false,
            paragraphs: {
                style: "",
                text: ["Cancellations can be made up to 30 days prior to your scheduled appointment. Deposits are non-refundable within 30 days. ",
                    "Reschedules must take place at least 30 days prior to the scheduled session. Re-scheduled sessions will be subject to a full charge if not received at least 30 days in advance. This is necessary because a time commitment is made to you and is held exclusively for you. If you are late for a session, you may lose some of that session time.",
                    "Full charge for no-shows or late cancellations is standard practice in the field. You are not just paying for services rendered, but reserving a time slot that your therapist will not be able to offer to someone else on short notice."
                ]
            },
        },]
    }
}


</script>

<template>
    <Hero :headline="pageData.hero.props.title" :hero-image="pageData.hero.props.imageURL"
        :overlayClass="pageData.hero.props.backgroundColor" />
    <div class="flex flex-col align-center">

        <!-- Section1 -->
        <section :class="pageStyle.generalBgColor">
            <div :class="pageStyle.sectionMargins">
                <div class="flex flex-col md:flex-row items-center justify-center">
                    <GeneralSection v-bind="pageData.section1.props" class="flex-1  " />
                    <div
                        class="flex-1  mt-10 md:mt-0 ml-0 md:ml-10 lg:ml-20 xl:ml-52 max-w-96 md:max-w-none rounded-xl bg-clip-border text-gray-700  shadow-lg  ">

                        <img class=" object-cover object-center rounded-xl text-gray-700 shadow-lg w-full  md:h-80 lg:h-96"
                            :src="pageData.section1.imageURL" :alt="pageData.section1.imageAlt" />

                    </div>
                </div>
            </div>
        </section>

        <!-- Section2 -->
        <section>
            <div :class="pageStyle.sectionMargins">
                <GeneralSection v-bind="pageData.section2.props" />
                <div>
                    <!-- TabsTabList: Show on all screens, hide on medium screens and smaller -->
                    <TabsTabList :tabListContent="pageData.section2.tabs" :component="SubSection2"
                        class="mt-10 hidden md:block " />

                    <!-- AccordianList: Show on medium screens and smaller, hide on large screens -->
                    <AccordianList :accordianContent="pageData.section2.tabs" :component="SubSection2"
                        class="mt-10 md:hidden " />
                </div>


            </div>
        </section>

        <!-- Section3 -->
        <section :class="pageStyle.generalBgColor">
            <div :class="pageStyle.sectionMargins">
                <GeneralSection v-bind="pageData.section3.props" />
                <NuxtLink to="/contact" class="mt-10 btn btn-secondary text-white">
                    Schedule Now
                </NuxtLink>
                <SubSection1 v-for="( subSection, index ) in   pageData.section3.subSections   " :key="index"
                    v-bind="subSection" />
            </div>
        </section>

        <!-- Section4 -->
        <ParallaxBg :margins="pageStyle.sectionMargins" imageClass="custom-img" >
            <GeneralSection v-bind="pageData.section4.props" />
            <CheckList v-bind="pageData.section4.checkList" />
            <SubSection1 v-bind="pageData.section4.subSection" />
        </ParallaxBg>




        <!-- Section5 -->
        <section>
            <div :class="pageStyle.sectionMargins">
                <GeneralSection v-bind="pageData.section5.props" />
                <SubSection1 v-for="( subSection, index ) in   pageData.section5.subSections   " :key="index"
                    v-bind="subSection" />
            </div>
        </section>



    </div>
    <Cta></Cta>
</template>



<style scoped>
.custom-img {
    background-image: url("/images/content/marathon-therapy-bg.webp");

}
</style>