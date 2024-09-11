<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useFetch } from 'nuxt/app';
import { transformLinks } from '~/helpers/util';
import type { Post } from '~/types/post';

const route = useRoute();
const config = useRuntimeConfig(); 
const authorName = ref('Erin Dierickx'); // Default author name

// Fetch the post data from the server or client using useAsyncData
const { data: post, pending: isLoading, error: hasError } = useFetch<Post>(`${config.public.siteBaseUrl}/blogposts/${route.params.slug}.json`);


let bpost: Post = {} as Post; 

// Watch for changes to the post data and update the author name
watch(post, () => {
    if (post.value) {
        bpost = post.value as Post;
    }
}, { immediate: true });
// Computed property for the featured image URL or a placeholder
const featuredImageUrl = computed(() => bpost?.jetpack_featured_media_url || '');

</script>
<template>
    <div v-if="isLoading" class="container mx-auto p-4">
        <div class="text-center">Loading...</div>
    </div>

    <div v-else-if="hasError" class="container mx-auto p-4">
        <div class="text-center text-red-500">Error loading post.
            {{ hasError.message }}
        </div>
    </div>

    <div v-else class="container mx-auto p-4">
        <article class="prose lg:prose-xl mx-auto mt-8">
            <!-- Featured Image -->
            <img :src="featuredImageUrl" :alt="post?.title?.rendered"
                 class="w-full h-auto mb-6 rounded-lg shadow-lg mt-12" />

            <!-- Post Title -->
            <h1 class="text-4xl font-bold mb-4">{{ post?.title?.rendered }}</h1>

            <!-- Post Meta -->
            <div class="text-gray-600 text-sm mb-8">
                <span>By {{ authorName }}</span>
            </div>

            <!-- Post Content -->
            <div v-html="transformLinks(post?.content?.rendered ?? '')" class="prose"></div>
        </article>
    </div>
</template>