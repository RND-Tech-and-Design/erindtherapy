<script setup lang="ts">
definePageMeta({
    layout: 'default',
    title: 'Policies & FAQs',
    navOrder: 5,
})

const faqs = [
    {
        question: 'What is telehealth?',
        answer: 'Telehealth is a convenient and accessible way for clients to live audio or video chat with their healthcare providers including therapists.'
    },
    {
        question: 'What equipment do I need for telehealth?',
        answer: 'Just a computer, tablet or smartphone and internet connection that is at least 10mbps.'
    },
    {
        question: 'What are the benefits of telehealth?',
        answer: 'There are lots! Telehealth increases access to care and makes it more convenient due to not having to commute to your appointment or wait in the office. You can receive care in the comfort of your own home and all that is required is internet and a computer or smartphone. Reduced cost for clients is a big one due to lower copays, transportation costs, less time missed from work and less money spent on child care.'
    },
    {
        question: 'Is telehealth HIPAA compliant?',
        answer: 'I use the program Simple Practice, which is 100% HIPAA compliant. Other programs like FaceTime and Skype do not meet the standards for HIPAA compliance.'
    },
    {
        question: 'What can I expect in the 15-minute phone consultation?',
        answer: 'This call is a chance to see if we are a good fit, explore your reasons for arriving at therapy right now, and what you hope to gain from therapy. It is also a great time for you to ask questions! Some things you might consider are which presenting issues I work with, what my approach is and anything else you might be wondering that would inform your decision to continue working with me.'
    },
    {
        question: 'What happens after the 15-minute phone consultation?',
        answer: 'I will check in with you at the end of the call to see if you’d like to schedule a session in the next 1-2 weeks. If so, we’ll book it then and there! If not, I would be happy to provide you with referrals and resources to aid you in the search for the support you need and that feels right for you.'
    },
    {
        question: 'Do you accept health insurance?',
        answer: 'I do not accept insurance. However, I can provide a superbill, or proof of services at no cost for you to receive reimbursement from your insurance company if that is included in your plan. It is encouraged to double-check with your insurance company to ensure your benefits. Check out the Rates and Insurance page for specific questions to ask your insurance company about this option.'
    },
    {
        question: 'Do we have to talk the whole session?',
        answer: 'Absolutely not! Sometimes it is great to try other methods of communicating. I find my clients’ talents inspiring and invite them to share their strengths in therapy. Are you a musician? Feel free to bring your instrument into the session! Are you a poet? The spoken (or written) word is always welcome per your comfortability. Are you taking up baking? Oh, how I wish I could try your delectable treats, but telehealth does offer a challenge with that one. You’re still welcome to show me your beautiful baked goods and describe the smells and tastes in great detail!'
    }
]
</script>

<template>
    <Hero
          headline="Policies & FAQs"
          hero-image="/images/banner/policies.webp"
          overlayClass="bg-complementary_secondary" />

    <!-- Cancellation Policy Section -->
    <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-6 md:px-12 max-w-5xl">
            <div class="mx-auto max-w-4xl flex flex-col items-center">
                <InfoCard
                          figureBackgroundClass="figure-background-cancel"
                          iconName="line-md:cancel"
                          title="Cancellation Policy"
                          description="">
                    <p class="text-lg leading-relaxed text-gray-700">
                        If you are unable to attend a session, please cancel at least
                        <span class="font-extrabold">24 hours</span> beforehand.
                        Otherwise, you will be charged for the full rate of the session.
                        <br />
                        <br />
                        Recurring cancellations or no-shows may result in loss of time slot.
                    </p>
                </InfoCard>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-6 md:px-12 max-w-5xl">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
                Frequently Asked Questions
            </h2>

            <div class="grid grid-cols-1 gap-8">
                <div
                     v-for="(faq, index) in faqs"
                     :key="index"
                     class="bg-gray-50 shadow-md rounded-lg p-6 md:p-8 transition-transform duration-300 hover:scale-105">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                        {{ faq.question }}
                    </h3>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        {{ faq.answer }}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <Cta />
</template>