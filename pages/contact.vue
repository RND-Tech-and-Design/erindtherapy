<script setup lang="ts">

import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';
import { ref, watch } from 'vue'

const route = useRoute()
const success = ref(route.query.success === 'true')
const email = ref('')
const name = ref('')
const service = ref('')
const formIsValid = ref<boolean>(false)
const invalidEmail = ref<boolean>(false)

const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isValid = email.value.match(emailRegex) && name.value !== ''
    formIsValid.value = !!isValid
    invalidEmail.value = email.value !== '' && !isValid
}

watch(email, validateForm)
watch(name, validateForm)

validateForm()

definePageMeta({
    layout: 'default',
    title: 'Contact',
    navOrder: 3,
})
</script>

<template>
    <section>
        <Hero hero-image="/images/banner/contact.webp" :enableOverlay="false" class="pb-36 pt-19">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
                <div class="flex flex-col col-span-1 ">
                    <CardGlass title="Ready to make an appointment?" class="flex-grow" animation-delay="0.2s">
                        <template #content>
                            <p>
                                Book your 50/90-minute intake evaluation or your free 20-minute phone consultation.
                            </p>
                        </template>

                        <template #action>
                            <BookingPortalModalButton
                                                      buttonClass="btn btn-primary text-text_secondary flex items-center">
                                Request Appointment
                            </BookingPortalModalButton>
                        </template>
                    </CardGlass>
                </div>
                <div class="flex flex-col col-span-1">
                    <CardGlass title="Already a client?" class="flex-grow" animation-delay="0.5s">
                        <template #content>
                            <p>
                                Schedule your next appointment using the client portal.
                            </p>
                        </template>

                        <template #action>
                            <NuxtLink to="https://erindtherapy.clientsecure.me/sign-in"
                                      class="btn btn-primary text-text_secondary flex items-center" target="_blank">
                                <span class="mr-2">Open Client Portal </span>
                                <ArrowTopRightOnSquareIcon class="h-6 w-6" />
                            </NuxtLink>
                        </template>
                    </CardGlass>
                </div>
            </div>
            <div class="mt-10">
                <CardGlass :title="success ? '' : 'Have a Question?'" animation-delay="0.8s">
                    <template #content>
                        <div v-if="!success">
                            <p>
                                Send me a message with this secure form.
                            </p>

                            <form
                                  name="contact"
                                  method="POST"
                                  action="/contact?success=true"
                                  netlify
                                  data-netlify-recaptcha="true"
                                  netlify-honeypot="bot-field"
                                  class="space-y-4">
                                <input type="hidden" name="form-name" value="contact" />
                                <p class="hidden">
                                    <label>
                                        Whats up with stuff? <input name="bot-field" />
                                    </label>
                                </p>
                                <label class="input input-bordered flex items-center gap-2">
                                    <Icon name="line-md:person" class="hidden md:block"></Icon>
                                    <input type="text"
                                           class="grow bg-transparent"
                                           placeholder="Your Name"
                                           name="name"
                                           v-model="name" />
                                    <span v-if="name === ''"
                                          class="badge badge-warning text-base  text-xs sm:text-sm p-2 sm:p-1 -ml-20 md:-ml-4">Required</span>
                                </label>


                                <label class="input input-bordered flex items-center gap-2">
                                    <Icon name="line-md:email-twotone" class="hidden md:block"></Icon>

                                    <input type="text"
                                           class="grow bg-transparent"
                                           placeholder="Your Email"
                                           name="email"
                                           v-model="email" />
                                    <span v-if="email === ''"
                                          class="badge badge-warning text-base text-xs sm:text-sm p-2 sm:p-1 -ml-20 md:-ml-4">Required
                                    </span>
                                    <span v-if="invalidEmail"
                                          class="badge badge-error text-base text-xs sm:text-sm p-2 sm:p-1 -ml-20 md:-ml-4">Invalid
                                    </span>
                                </label>

                                <label class="form-control">
                                    <div class="label">
                                        <span class="label-text">What service are you interested in?</span>
                                    </div>
                                    <select name="service"
                                            v-model="service"
                                            class="form-select w-full max-w-full input input-bordered flex items-center gap-2">
                                        <option disabled selected value="">Select a service</option>
                                        <option value="individual">Individual Therapy</option>
                                        <option value="couples">Couples Therapy</option>
                                        <option value="family">Family Therapy</option>
                                        <option value="family">Other</option>
                                    </select>
                                </label>

                                <label class="form-control">
                                    <div class="label">
                                        <span class="label-text">Your Message</span>
                                    </div>
                                    <textarea name="message"
                                              class="textarea textarea-bordered w-full max-w-full h-32"
                                              placeholder="Please do not share any confidential or sensitive medical information"></textarea>
                                </label>

                                <div data-netlify-recaptcha="true"></div>

                                <div class="flex justify-end md:w-auto w-full">
                                    <button
                                            type="submit"
                                            :disabled="!formIsValid"
                                            :aria-disabled="!formIsValid"
                                            class="btn btn-primary text-text_secondary flex items-center justify-center md:w-auto w-full md:text-sm text-base">
                                        <!-- Conditional Icon Rendering -->
                                        <span class="mr-2 flex items-center">
                                            <Icon
                                                  v-if="formIsValid"
                                                  name="line-md:confirm-circle"
                                                  class="h-5 w-5 flex-shrink-0 relative top-0.5 mb-1"
                                                  aria-hidden="true" />
                                            <Icon
                                                  v-else
                                                  name="line-md:alert-circle-loop"
                                                  class="h-5 w-5 flex-shrink-0 relative top-0.5"
                                                  aria-hidden="true" />
                                        </span>
                                        <!-- Button Text -->
                                        <span>Submit</span>
                                    </button>
                                </div>

                            </form>
                        </div>
                        <div v-else class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                            <div class="flex">
                                <div class="py-1">
                                    <span class="mr-2 text-4xl">
                                        <Icon name="line-md:emoji-smile"></Icon>
                                    </span>
                                </div>
                                <div>
                                    <p class="font-bold">Thank you for reaching out!</p>
                                    <p class="text-sm">I will get back to you as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #action>
                    </template>
                </CardGlass>
            </div>
        </Hero>
    </section>
</template>