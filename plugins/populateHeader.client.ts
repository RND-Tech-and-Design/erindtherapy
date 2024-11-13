// plugins/populateHeader.client.ts
import { populateHeader } from '~/composables/seoMeta';

export default defineNuxtPlugin((nuxtApp) => {
    const route = useRoute();
    onBeforeMount(() => {
        populateHeader(route);
    });

    // Watch for route changes to update the header
    watchEffect(() => populateHeader(route));
});
