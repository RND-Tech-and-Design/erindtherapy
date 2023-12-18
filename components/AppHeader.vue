<script setup lang="ts">

import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useNavigation } from '~/composables/navigation';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const { generateNavigation } = useNavigation();
const navigationLinks = ref<NavLink[]>([]);

// Initial population of navigation links
generateNavigation().then(links => navigationLinks.value = links);

const route = useRoute();

watch(route, async () => {
    navigationLinks.value = await generateNavigation();
}, { immediate: true });

</script>

<template>
    <header>
        <nav class="navbar bg-secondary text-neutral-content md:py-6 sm:py-0">
            <div class="navbar-start ">
            </div>
            <div class="navbar-center flex-col">

                <!-- Menu -->
                <ul class="menu menu-horizontal disable-active px-1 hidden -mt-10 md:flex z-10">
                    <template v-for="link in navigationLinks" :key="link.path">
                        <li v-if="!link.children || link.children?.length === 0"
                            :class="`${link.active ? 'ease-in duration-100 border-t-[3px]' : 'pt-[3px]'}`">
                            <NuxtLink :to="link.path">
                                {{ link.name }}
                            </NuxtLink>
                        </li>
                    </template>
                    <template v-for="link in navigationLinks" :key="link.path">
                        <li v-if="link.children && link.children?.length > 0"
                            :class="`${link.active ? 'ease-in duration-100 border-t-[3px]' : 'pt-[3px]'}`">

                            <details>
                                <summary>
                                    {{ link.name }}
                                </summary>
                                <ul class="p-2 bg-secondary rounded-t-none">
                                    <template v-for="child in link.children">
                                        <li>
                                            <NuxtLink :to="child.path" class="link">
                                                {{ child.name }}
                                            </NuxtLink>
                                        </li>
                                    </template>
                                </ul>
                            </details>

                        </li>
                    </template>
                </ul>

                <!-- Logo -->
                <a href="/"
                   class="absolute overflow-visible top-4 md:top-10">
                    <NuxtImg src="/images/logos/top.webp"
                                 alt="Logo"
                                 sizes="112px 112px" />
                </a>
            </div>

            <div class="navbar-end">
                <NuxtLink class="btn btn-primary hidden text-text_secondary md:flex mr-2 ">
                    <span class="flex items-center">
                        <span class="mr-2">Client Portal</span>
                        <ArrowTopRightOnSquareIcon class="h-6 w-6" />
                    </span>
                </NuxtLink>

                <slot />
            </div>
        </nav>
    </header>
</template>