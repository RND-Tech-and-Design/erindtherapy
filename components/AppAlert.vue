<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { ExclamationCircleIcon } from '@heroicons/vue/24/solid';

const showAlert = ref(false);

const handleScroll = () => {
    showAlert.value = false;
};

onMounted(() => {
    setTimeout(() => {
        showAlert.value = true;
    }, 500);

    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <transition name="fade">
        <div v-if="showAlert" class="toast toast-start ease-in duration-100">
            <div class="alert">
                <ExclamationCircleIcon class="h-6 w-6 hidden md:inline-flex" />
                <span>
                    <slot />
                </span>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active {
    transition: opacity 0.5s;
}

.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from {
    opacity: 0;
}

.fade-leave-to {
    opacity: 0;
}
</style>
