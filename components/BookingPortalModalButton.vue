<script setup lang="ts">
defineProps({
    buttonClass: {
        type: String,
        required: true
    }
});

const modal = ref<HTMLDialogElement | null>(null);

// Function to close the modal
const closeModal = () => {
    modal.value?.close();
    showIframe.value = false;
};

const iframeUrl = ref(
    'https://erindtherapy.clientsecure.me/widget-redirect?scopeId=a369b4c9-25b3-444d-8978-af57c98e6307&scopeGlobal=true&applicationId=7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b&channel=sp_website&appearance=%7B%22fullScreen%22%3Atrue%7D'
);
const showIframe = ref(false);
const iframeLoading = ref(true); // Tracks the iframe's loading state
const pageLoaded = ref(false); // Tracks the page's loading state

const toggleIframe = (event: any) => {
    modal.value?.showModal()
    event.preventDefault();
    showIframe.value = !showIframe.value;
    // Reset iframeLoading state when opening
    if (showIframe.value) {
        iframeLoading.value = true;
    }
};

const onIframeLoad = () => {
    console.log('Iframe loaded');
    iframeLoading.value = false; // Iframe has finished loading
    showIframe.value = true;
};


onMounted(() => {
    pageLoaded.value = true
    // Event handler for iframe messages
    const handleMessage = (event: any) => {
        // Validate the origin of the message
        if (event.origin !== 'https://spwidget-erindtherapy.clientsecure.me') {
            return;
        }

        const eventData = event?.data;
        // Check if the message contains the expected data
        if (eventData?.action === 'close' && eventData?.scope === "client-portal-iframe-to-origin") {
            closeModal();
        }
    };

    // Attach event listener
    window.addEventListener('message', handleMessage);

    // Cleanup listener on component unmount
    onUnmounted(() => {
        window.removeEventListener('message', handleMessage);
    });
});

</script>

<template>
    <NuxtLink
              v-if="pageLoaded"
              @click="toggleIframe"
              :class="buttonClass">
        <slot />
    </NuxtLink>


    <NuxtLink
              v-if="!pageLoaded"
              :class="buttonClass">
        <icon name="svg-spinners:pulse" size="2em" class="flex-none min-w-8"></icon>
    </NuxtLink>

    <dialog id="booking_portal_modal" ref="modal" class="modal sm:h-full">
        <div
             class="modal-box max-h-screen md:[max-height:calc(100vh_-_5em)] w-full h-full md:w-10/12 lg:w-3/4 max-w-screen-lg ">
            <form method="dialog">
                <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Close">
                </button>

            </form>
            <div v-if="iframeLoading"
                 class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">

                <icon name="svg-spinners:3-dots-scale-middle" size="8em" class="flex-none min-w-8">
                </icon>
            </div>

            <div id="iframe-container" v-if="showIframe" class="w-full h-full border-0">
                <iframe @load="onIframeLoad" :src="iframeUrl" class="w-full h-full border-0" allowtransparency="true"
                        sandbox="allow-scripts allow-popups allow-forms allow-same-origin"></iframe>
            </div>
        </div>
    </dialog>
</template>