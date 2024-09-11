<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'nuxt/app';
import { transformLinks } from '~/helpers/util';
import type { Post } from '~/types/post';

const route = useRoute();

// Ref for the author name
const authorName = ref('Erin Dierickx');

// Reactive state for loading post data
const post = ref<Post | null>(null);

// Function to load the JSON file dynamically based on the slug
async function loadPost() {
    try {
        // Construct the dynamic path based on the slug
        const slug = route.params.slug;
        const data = await import(`~/json/blog/${slug}.json`);
        post.value = data.default;
    } catch (error) {
        console.error(`Error loading post for slug: ${route.params.slug}`, error);
    }
}

// Load the post data on component mount
await loadPost();

// Computed property to get the featured image or a placeholder
const featuredImageUrl = computed(() => post.value?.jetpack_featured_media_url || '');
</script>

<template>
    <div v-if="!post" class="container mx-auto p-4">
        <div class="text-center">
            Loading...
        </div>
    </div>

    <div v-else class="container mx-auto p-4">
        <article class="prose lg:prose-xl mx-auto mt-8">
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