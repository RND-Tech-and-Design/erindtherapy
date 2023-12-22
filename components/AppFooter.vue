<script setup lang="ts">

import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useNavigation } from '~/composables/navigation';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/solid';

const { generateNavigation } = useNavigation();
const navigationLinks = ref<NavLink[]>([]);

// Initial population of navigation links
generateNavigation().then(links => navigationLinks.value = links);

const route = useRoute();

watch(route, async () => {
    navigationLinks.value = await generateNavigation();
}, { immediate: true });


const currentYear = new Date().getFullYear()
</script>


<template>
    <footer class="footer p-10 bg-secondary text-neutral-content">
        <aside>

            <header class="footer-title">
                <div class="font-extrabold -ml-1">Erin D Therapy PLLC</div>
            </header>

            <div>
                <NuxtLink href="https://www.facebook.com/erindtherapy" class="link link-hover flex items-center">
                    <span class="h-4 mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                             class="fill-current">
                            <path
                                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                            </path>
                        </svg>
                    </span>
                    @erindtherapy
                </NuxtLink>
            </div>
            <div>
                <span class="flex items-center">
                    <EnvelopeIcon class="h-5 w-5 mr-1" />
                    <NuxtLink class="link link-hover flex items-center" href="mailto:erin@erindtherapy.com">
                        erin@erindtherapy.com
                    </NuxtLink>
                </span>

            </div>
            <div>
                <span class="flex items-center">
                    <PhoneIcon class="h-5 w-5 mr-1" />
                    <NuxtLink class="link link-hover flex items-center" href="tel:+4257280775">
                        (425) 728-0775
                    </NuxtLink>
                </span>

            </div>
            <div>
                <span class="flex items-center">
                    <MapPinIcon class="h-5 w-5 mr-1" />
                    P.O. Box 412 Renton, WA 98057
                </span>

            </div>
        </aside>

        <nav>
            <header class="footer-title">Main</header>
            <template v-for="link in navigationLinks">
                <NuxtLink v-if="!link.children || link.children?.length === 0" :to="link.path" class="link">{{ link.name }}
                </NuxtLink>
            </template>
        </nav>
        <template v-for="link in navigationLinks">

            <nav v-if="link.children && link.children?.length > 0">
                <header class="footer-title">{{ link.name }}</header>
                <template v-for="child in link.children">
                    <NuxtLink :to="child.path" class="link">
                        {{ child.name }}
                    </NuxtLink>
                </template>
            </nav>

        </template>


    </footer>
    <footer class="footer footer-center px-10 py-4 border-t bg-secondary border-base-300 text-neutral-content">
        <aside class="items-center">
            <div class=" h-12 w-12 flex justify-center items-center rounded-full shadow">
                <img src="/images/logos/icon.svg" alt="ErinDTherapy" width="128px" height="128px" class="h-32 w-32" />
            </div>
            <p> &copy; ErinDTherapy {{ currentYear }}</p>
        </aside>
    </footer>
</template>
