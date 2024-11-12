<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { type NavLink } from '~/composables/navigation';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

defineProps({
    navigationLinks: {
        type: Array as () => NavLink[],
        default: () => [],
        required: true,
    },
});

const menuRef = ref<HTMLElement | null>(null);

function handleClickOutside(event: Event) {
    const menuElement = menuRef.value;
    if (menuElement && !menuElement.contains(event.target as Node)) {
        // Close all open <details> elements within the menu
        const openDetails = menuElement.querySelectorAll('details[open]');
        openDetails.forEach((detail) => {
            (detail as HTMLDetailsElement).open = false;
        });
    }
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        const menuElement = menuRef.value;
        if (menuElement) {
            const openDetails = menuElement.querySelectorAll('details[open]');
            openDetails.forEach((detail) => {
                (detail as HTMLDetailsElement).open = false;
            });
        }
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
    <header>
        <nav class="navbar bg-secondary text-neutral-content lg:py-6 sm:py-0">
            <div class="navbar-start ">
                <!-- Optional: Add content here -->
            </div>
            <div class="navbar-center flex-col">

                <!-- Menu -->
                <ul ref="menuRef" class="menu menu-horizontal disable-active px-1 hidden -mt-10 lg:flex z-10">
                    <!-- Menu Items without Children -->
                    <template v-for="link in navigationLinks" :key="link.path">
                        <li v-if="!link.children || link.children.length === 0"
                            :class="`join-item text-text_secondary ${link.active ? 'ease-in duration-100 border-t-[3px]' : 'pt-[3px]'}`"
                            style="color: white !important;">
                            <NuxtLink :to="link.path"
                                      class="join-item text-text_secondary"
                                      style="color: white !important;">
                                {{ link.name }}
                            </NuxtLink>
                        </li>
                    </template>

                    <!-- Menu Items with Children -->
                    <template v-for="link in navigationLinks" :key="link.path">
                        <li v-if="link.children && link.children.length > 0"
                            :class="`${link.active ? 'ease-in duration-100 border-t-[3px]' : 'pt-[3px]'}`"
                            style="color: white !important;">

                            <details>
                                <summary class="cursor-pointer select-none">
                                    {{ link.name }}
                                </summary>
                                <ul class="p-2 bg-secondary rounded-t-none">
                                    <template v-for="child in link.children" :key="child.path">
                                        <li>
                                            <NuxtLink :to="child.path"
                                                      class="link whitespace-nowrap focus:text-text_secondary"
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
                <a href="/" class="absolute overflow-visible -top-4 lg:top-6 ">
                    <img src="/images/logos/icon.svg" alt="Logo" height="112px" width="112px" />
                </a>
            </div>

            <div class="navbar-end ">
                <NuxtLink to="https://erindtherapy.clientsecure.me/sign-in"
                          class="btn btn-primary hidden text-text_secondary lg:flex mr-2 ">
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