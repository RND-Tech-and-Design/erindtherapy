<script setup lang="ts">

defineProps({
    title: {
        type: String,
        required: false,
    },
    colspan: {
        type: Number,
        default: 1,
    },
    animationDelay: {
        type: String,
        default: '0s',
    }
})
</script>

<template>
    <div :class="`card glass text-neutral`">
        <div class="card-body text-left">
            <h2 class="card-title" v-if="!!title">
                {{ title }}
            </h2>

            <slot name="content"></slot>
            <div class="card-actions justify-end pt-8">
                <slot name="action"></slot>
            </div>
        </div>
    </div>
</template>
