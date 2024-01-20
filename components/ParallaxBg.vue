<script setup lang="ts">


defineProps<{
    margins: string;
    imageClass: string;

}>();

</script>
<template>
    <section class=" flex  m-auto w-full bg-fixed object-coverbg-center bg-cover relative " :class="imageClass">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class=" my-24 p-5 bg-white shadow-lg z-10 opacity-90" :class="margins">
            <div class="mt-0 md:mx-20">
                <slot></slot>
            </div>
        </div>

    </section>
</template>

