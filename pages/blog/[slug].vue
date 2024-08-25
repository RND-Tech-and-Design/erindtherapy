<script setup lang="ts">
import { useRoute, useFetch } from 'nuxt/app';
import { ref, computed } from 'vue';
import { transformLinks } from '~/helpers/util';
import type { Post } from '~/types/post';

const route = useRoute();
const { data: bposts, status, error } = await useFetch(`https://www.erindtherapy.com/wp-json/wp/v2/posts?slug=${route.params.slug}`);
const posts = computed(() => bposts.value as Post[] || []);
const post = computed(() => posts.value[0] || null);
const featuredImageUrl = computed(() => post.value?.jetpack_featured_media_url || '');
const authorName = ref('Erin Dierickx'); // Assuming the author is the same for all posts or fetch it if needed

</script>

<template>
    <div v-if="!error" class="container mx-auto p-4">
   
        <div v-if="status === 'pending'" class="text-center">
            Loading...
        </div>
        <article v-else v-if="post" class="prose lg:prose-xl mx-auto mt-8">
            <!-- Featured Image -->
            <img :src="featuredImageUrl" :alt="post.title?.rendered"
                 class="w-full h-auto mb-6 rounded-lg shadow-lg mt-12" />

            <!-- Post Title -->
            <h1 class="text-4xl font-bold mb-4">{{ post.title?.rendered }}</h1>

            <!-- Post Meta -->
            <div class="text-gray-600 text-sm mb-8">
                <span>By {{ authorName }}</span>
            </div>

            <!-- Post Content -->
            <div v-html="transformLinks(post.content?.rendered ?? '')" class="prose"></div>
        </article>
    </div>
    <Cta />
</template>