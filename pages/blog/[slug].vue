<template>
    <div class="container mx-auto p-4">
        <div v-if="error" class="text-red-500 text-center">
            Error loading post: {{ error.message }}
        </div>
        <div v-else-if="isFetching" class="text-center">
            Loading...
        </div>
        <article v-else v-if="post" class="prose lg:prose-xl mx-auto mt-8">
            <!-- Featured Image -->
            <img :src="featuredImageUrl" :alt="post.title.rendered"
                 class="w-full h-auto mb-6 rounded-lg shadow-lg mt-12" />

            <!-- Post Title -->
            <h1 class="text-4xl font-bold mb-4">{{ post.title.rendered }}</h1>

            <!-- Post Meta -->
            <div class="text-gray-600 text-sm mb-8">
                <span>By {{ authorName }}</span>
            </div>

            <!-- Post Content -->
            <div v-html="transformLinks(post.content.rendered)" class="prose"></div>
        </article>
    </div>
    <Cta></Cta>
</template>

<script setup>
import { useRoute, useFetch } from 'nuxt/app';
import { ref, computed } from 'vue';

const route = useRoute();
const { data: posts, isFetching, error } = await useFetch(`https://www.erindtherapy.com/wp-json/wp/v2/posts?slug=${route.params.slug}`);

const post = computed(() => posts.value ? posts.value[0] : null);
const featuredImageUrl = computed(() => post.value ? post.value.jetpack_featured_media_url : '');
const authorName = ref('Erin Dierickx'); // Assuming the author is the same for all posts or fetch it if needed

/**
 * Function to transform and clean up content by:
 * - Removing the entire anchor tag for the contact page.
 * - Converting internal blog post links to internal Nuxt routes.
 * @param {string} content - The HTML content of the blog post.
 * @returns {string} - The transformed and cleaned HTML content.
 */
function transformLinks(content) {
    const domain = 'www.erindtherapy.com';

    // Remove the entire anchor tag for the contact page
    content = content.replace(new RegExp(`<a\\s+[^>]*href=["']https?://${domain}/contact/["'][^>]*>.*?</a>`, 'gi'), '');

    // Convert internal blog post links to internal Nuxt routes
    const blogLinkRegex = new RegExp(`https?://${domain}/\\d{4}/\\d{2}/\\d{2}/([^/]+)/`, 'gi');

    return content.replace(blogLinkRegex, (match, slug) => {
        return `/blog/${slug}`;
    });
}
</script>