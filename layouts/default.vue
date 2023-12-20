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

            <ul class="menu p-4 w-80 min-h-full backdrop-blur-md bg-opacity-50 text-text_secondary">
                <div class=" mt-5 mb-5 h-20 w-20 flex justify-center items-center self-center">
                    <img src="/images/logos/icon.svg" alt="ErinDTherapy" width="128px" height="128px" class="h-20 w-20" />
                </div>
                <template v-for="link in navigationLinks" :key="link.path">
                    <li v-if="!link.children || link.children?.length === 0">
                        <NuxtLink :to="link.path"
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
</style>