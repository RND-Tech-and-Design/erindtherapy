<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/solid';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useNavigation } from '~/composables/navigation';


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
    <div class="drawer drawer-end">
        <input id="main-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <AppHeader>
                <label for="main-drawer" class="drawer-button btn btn-square btn-ghost md:hidden">
                    <Bars3Icon class="h-6 w-6" />
                </label>
            </AppHeader>
            <slot />
            <AppFooter />
        </div>
        <div class="drawer-side">
            <label for="main-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <template v-for="link in navigationLinks" :key="link.path">
                    <li v-if="!link.children || link.children?.length === 0">
                        <NuxtLink :to="link.path" :class="`${link.active ? 'ease-in duration-100 bg-gray-400/50' : ''}`">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
