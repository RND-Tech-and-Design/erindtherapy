<script setup lang="ts">

import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

definePageMeta({
    layout: 'default',
    navOrder: 3,
})
</script>

<template>
    <Hero hero-image="/images/banner/contact.webp" :enableOverlay="false" class="pb-36 pt-19">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
            <div class=" flex flex-col col-span-1 ">
                <CardGlass title="Ready to make an appointment?" class="flex-grow" animation-delay="0.2s">
                    <template #content>
                        <p>
                            Book your 50/90-minute intake evaluation or your free 20-minute phone consultation.
                        </p>
                    </template>

                    <template #action>
                        <NuxtLink to="https://erindtherapy.clientsecure.me/widget/service?channel=sp_website"
                                  class="btn btn-primary text-text_secondary flex items-center"
                                  target="_blank">
                            <span class="mr-2">Request Appointment </span>
                            <ArrowTopRightOnSquareIcon class="h-6 w-6" />
                        </NuxtLink>
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
                                  class="btn btn-primary text-text_secondary flex items-center"
                                  target="_blank">
                            <span class="mr-2">Open Client Portal </span>
                            <ArrowTopRightOnSquareIcon class="h-6 w-6" />
                        </NuxtLink>
                    </template>
                </CardGlass>
            </div>
        </div>
        <div class="mt-10">
            <CardGlass title="Have a Question?" animation-delay="0.8s">
                <template #content>
                    <p>
                        Send me a message with this secure form
                    </p>
                </template>

                <template #action>
                    <NuxtLink to="https://erindtherapy.clientsecure.me/sign-in"
                              class="btn btn-primary text-text_secondary flex items-center"
                              target="_blank">
                        <span class="mr-2">Submit</span>
                    </NuxtLink>
                </template>
            </CardGlass>
        </div>

    </Hero>
</template>