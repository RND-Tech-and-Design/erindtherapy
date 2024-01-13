<script setup lang="ts">
import type { SectionContent } from '~/types/sectionContent';

definePageMeta({
    layout: 'default',
    title: 'Couples Therapy',
    description: `Enhance your relationship with Couples Therapy: Embrace Gottman Method techniques for 
    lasting emotional connection, effective communication, and conflict resolution with a Level 3 Gottman-certified therapist.`
})



const pageStyle = {
    sectionMargins: 'py-32 mx-5 xl:mx-auto  xl:max-w-screen-lg 2xl:max-w-screen-xl',
    generalBgColor: "bg-complementary_neutral bg-opacity-10",
}




const section3Props: SectionContent = {
    title: 'Conflict gets in the way of life',
    paragraphs: ['Their conflict and disconnection get in the way of the life they want in so many ways. They aren’t the partner they want to be. Many feel they’re failing in their relationship, and they lack confidence that things will improve.', 
    'Before they came to see me, often, one partner was interested in therapy while the other was still warming up to it. They feared that therapy was an automatic indicator of divorce. And they were confident their relationship was “too far gone” for any positive change to happen. Patience and hope were running out.'],

    backgroundImage: '/images/banner/couple-banner2.webp'
}


const section5Props: SectionContent = {
    title: 'Your relationship deserves happiness and meaning',
    paragraphs: ["Like the couples I work with, you deserve to have the kind of relationship you both want. A relationship that brings you happiness, connection, and meaning. Managing inevitable conflict is not out of your reach. If you want to feel hopeful about your future together I’d love to help you get there",
"You don’t have to stay stuck, and neither does your relationship. I can help."],
    backgroundImage: '/images/banner/couple-banner3.webp'
}





const pageData = {
    hero: {
        props: {
            title: "Couples Therapy",
            imageURL:  '/images/banner/couple-banner1.webp',
            imageAlt: "Hero Image",
            backgroundColor: "bg-primary"
        }
    },

    section1: {
        imageURL: '/images/content/couple-therapy-couple-walking-talking.webp',
        imageAlt: "footsteps",
        props: {
            title1: "Don't let conflict divide you",
            title2: "Conquer conflict through connection",
            paragraphs: [
                {
                    text: "Couples who arrive at therapy are often struggling to manage conflict in a way that feels productive. They feel less connected with their partner than they had previously.",
                },
                {
                    text: "Conversations that once seemed effortless require more energy. Arguments have become more frequent and volatile and frequently end without resolution.",
                },
            ],
        }
    },


    section2: {
        props:
        {
            title1: "What to expect",
            title2: "What does our session look like?",
            paragraphs: [  ],
        },
        bulletList:
            [{type:"default", text:"Session 1: Couples intake session ( 90 min )"},
            {type:"indent", text:"After Session Exercise: Each partner is invited to take the Gottman Relationship Assessment"},
            {type:"default", text:"Sessions 2 and 3: Separate individual sessions ( 60 min)"},
            {type:"default", text:"Session 4: Couples session to discuss assessment results and develop goals for therapy ( 90 min )"},
            {type:"default", text:"Session 5 and on: Couples sessions (individual sessions as needed)"}
            ]

        
    },

    section3: {
        backgroundColor: pageStyle.generalBgColor,
        props: section3Props
    },


    section4: {
        props:
        {
            title1: "How can I help?",
            title2: "Managing the inevitable",
            paragraphs: [{ text:
                "Couples therapy can be a unique space to build upon the strengths already present in your relationship and focus on the areas that might need some touching up.",
            },
            { text:"Despite therapy having a reputation for talking about our problems, I believe therapy is equally a space to celebrate the strengths of your relationship and to have fun!  I help couples not just manage conflict, but also connect through it."
            },
            {
                text: "I have completed Levels 1 and 2 of the Gottman Method training and incorporate these research-based interventions into our work to provide positive and efficient support."  
            }]
            
    },
    section5: {
        backgroundColor: pageStyle.generalBgColor,
        props: section5Props
    },

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
                    <CouplesTherapySection v-bind="pageData.section1.props" class="flex-1 " />
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
                <CouplesTherapySection v-bind="pageData.section2.props"  />
                <div>
                <p v-for="(bulletPoint, index) in pageData.section2.bulletList" :key="index" class="">
   {{ bulletPoint.text }}
        </p>
    </div>
    </div>
        </section>

        <!-- Section3 -->
        <section>
            <SectionCard :content="section3Props" />
        </section>
    </div>

    <!-- Section4 -->
    <section >
                <CouplesTherapySection v-bind="pageData.section4.props"  :class="pageStyle.sectionMargins"/>
        </section>

    <!-- Section5 -->
<div>
    <SectionCard :content="section5Props" />
</div>
    <Cta></Cta>
</template>