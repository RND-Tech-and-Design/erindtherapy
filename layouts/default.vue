<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/solid';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useNavigation } from '~/composables/navigation';

const { generateNavigation } = useNavigation();
const navigationLinks = ref<NavLink[]>([]);
const route = useRoute();
const metaTitle = ref<string>(`${route.meta?.title}`);

// Initial population of navigation links
generateNavigation().then(links => navigationLinks.value = links);

watch(route, async () => {
    metaTitle.value = `${route.meta?.title}`;
    navigationLinks.value = await generateNavigation();
}, { immediate: true });

function closeSidebar() {
    const mainDrawer = document.getElementById('main-drawer');
    if (mainDrawer) {
        mainDrawer.click();
    }
}

</script>

<template>
    <div class="drawer drawer-end">
        <input id="main-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <AppHeader :navigationLinks="navigationLinks">
                <label for="main-drawer" class="drawer-button btn btn-square btn-ghost lg:hidden">
                    <Bars3Icon class="h-6 w-6" />
                </label>
            </AppHeader>
            <div>
                <slot />
            </div>
            <AppFooter :navigationLinks="navigationLinks" />
        </div>
        <div class="drawer-side z-50">

            <label for="main-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

            <ul class="menu p-4 w-80 min-h-full backdrop-blur-md bg-opacity-50 text-text_secondary">
                <div class="mr-12 mt-5 mb-5 h-20 w-20 flex justify-center items-center self-center">
                    <img src="/images/logos/icon.svg" alt="ErinDTherapy" width="128px" height="128px"
                         class="h-20 w-20" />
                </div>
                <template v-for="link in navigationLinks" :key="link.path">
                    <li v-if="!link.children || link.children?.length === 0">
                        <NuxtLink :to="link.path"
                                  @click="closeSidebar"
                                  :class="`text-text_secondary focus:text-text_secondary
                                  ${link.active ? 'ease-in duration-100 bg-gray-400/50 text-text_secondary' : ''}`">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </template>

                <template v-for="link in navigationLinks" :key="link.path">
                    <ul v-if="link.children && link.children?.length > 0"
                        class="menu p-4 w-80 min-h-full backdrop-blur-md bg-opacity-50 text-text_secondary">
                        <div class="footer-title">
                            {{ link.name }}
                        </div>
                        <template v-for="childLink in link.children" :key="link.path">
                            <li>
                                <NuxtLink :to="childLink.path"
                                          :class="`text-text_secondary focus:text-text_secondary 
                                  ${childLink.active ? 'ease-in duration-100 bg-gray-400/50 text-text_secondary' : ''}`">
                                    {{ childLink.name }}
                                </NuxtLink>
                            </li>
                        </template>
                    </ul>
                </template>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.drawer-side {
    display: none;
}

.drawer-toggle:checked~.drawer-side {
    display: grid;
}

html,
body {
    overflow-x: hidden;
}
</style>