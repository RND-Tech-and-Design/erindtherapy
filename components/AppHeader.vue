<script setup lang="ts">

import { type NavLink } from '~/composables/navigation';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

defineProps({
    navigationLinks: {
        type: Array as () => NavLink[],
        default: () => [],
        required: true,
    },
});

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
                            :class="`join-item text-text_secondary ${link.active ? 'ease-in duration-100 border-t-[3px]' : 'pt-[3px]'}`"
                            style="color: white !important;">
                            <NuxtLink :to="link.path"
                                      class="join-item text-text_secondary"
                                      style="color: white !important;">
                                {{ link.name }}
                            </NuxtLink>
                        </li>
                    </template>
                    <template v-for="link in navigationLinks" :key="link.path">
                        <li v-if="link.children && link.children?.length > 0"
                            :class="`${link.active ? 'ease-in duration-100 border-t-[3px]' : 'pt-[3px]'}`"
                            style="color: white !important;">

                            <details>
                                <summary>
                                    {{ link.name }}
                                </summary>
                                <ul class="p-2 bg-secondary rounded-t-none">
                                    <template v-for="child in link.children">
                                        <li>
                                            <NuxtLink :to="child.path"
                                                      class="link whitespace-nowrap  focus:text-text_secondary "
                                                      style="color: white !important;">
                                                <Icon v-if="child.active"
                                                      name="ph:dot-outline-fill"
                                                      color="white"
                                                      size="1.5em" />
                                                <span :class="`${child.active ? '-ml-3' : 'ml-4'}`">
                                                    {{ child.name }}
                                                </span>
                                            </NuxtLink>
                                        </li>
                                    </template>
                                </ul>
                            </details>
                        </li>
                    </template>
                </ul>

                <!-- Logo -->
                <a href="/" class="absolute overflow-visible -top-4 md:top-6 ">
                    <img src="/images/logos/icon.svg" alt="Logo" height="112px" width="112px" />
                </a>
            </div>

            <div class="navbar-end">
                <NuxtLink to="https://erindtherapy.clientsecure.me/sign-in"
                          class="btn btn-primary hidden text-text_secondary md:flex mr-2 ">
                    <span class="flex items-center ">
                        <span class="mr-2 text-text_secondary">Client Portal</span>
                        <ArrowTopRightOnSquareIcon class="h-6 w-6" />
                    </span>
                </NuxtLink>
                <slot />
            </div>
        </nav>
    </header>
</template>