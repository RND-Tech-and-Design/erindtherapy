<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
import { extractTextWithoutAnchors } from '~/helpers/util';
import type { ParsedContent } from '@nuxt/content';

// Get route and router instances
const route = useRoute();

// Fetch posts from the content/blog directory
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').find());

// Reactive category based on URL query parameter
let category = computed(() => route.query.category ? decodeURIComponent(route.query.category as string) : null);

// Function to get the featured image URL or a placeholder
function getFeaturedImage(post: ParsedContent) {
    return post.heroImage || 'https://via.placeholder.com/600x400';
}

// Extract unique categories from all posts
const uniqueCategories = computed(() => {
    const categories = posts.value?.flatMap(post => post.categories || []);
    return Array.from(new Set(categories)); // Remove duplicates
});

// Sort posts by date and filter by category if a category is present
const filteredPosts = computed(() => {
    // Sort posts by date (newest first)
    const sortedPosts = posts.value ? posts.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) : [];

    // Filter by category if a category is present
    return category.value
        ? sortedPosts.filter(post =>
            post.categories && post.categories.some((cat: string) =>
                category.value && cat.toLowerCase().trim() === category.value.toLowerCase().trim()))
        : sortedPosts;
});

// Function to handle category click and update the URL
function selectCategory(cat: string | null): string {
    const qst = cat ? encodeURIComponent(cat) : '';

    return qst
}


</script>


<template>
    <div class="container mx-auto p-4 pt-10">

        <h1 class="text-4xl font-bold mb-8 text-center mt-8">
            {{ category ? `Posts in ${category}` : "All Blog Posts" }}
        </h1>

        <!-- Categories Menu -->
        <div class="mb-8 text-center">
            <NuxtLink
                      v-for="(cat, index) in uniqueCategories"
                      :key="index"
                      :to="`/blog?category=${selectCategory(cat)}`"
                      class="mx-2 text-lg font-semibold underline hover:text-blue-600"
                      :class="{ 'text-blue-600': category === cat }">
                {{ cat }}
            </NuxtLink>
            <!-- All button to reset category filter -->
            <NuxtLink
                      to="/blog"
                      class="mx-2 text-lg font-semibold underline hover:text-blue-600">
                All
            </NuxtLink>
        </div>



        <div v-if="filteredPosts && filteredPosts.length > 0">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- Most Recent Post -->
                <div
                     v-if="filteredPosts.length > 0"
                     :key="filteredPosts[0]._id"
                     class="col-span-1 md:col-span-2 lg:col-span-3">
                    <NuxtLink
                              :to="`/blog/${filteredPosts[0].slug}`"
                              class="block overflow-hidden rounded-lg shadow-lg group">
                        <div class="relative h-48 md:h-[350px] overflow-hidden">
                            <NuxtPicture
                                         :src="getFeaturedImage(filteredPosts[0])"
                                         preload
                                         placeholder
                                         layout="responsive"
                                         sizes="1400px"
                                         alt="Post Image"
                                         class="absolute inset-0 w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div class="p-4">
                            <h2 class="text-2xl font-bold mb-2 group-hover:underline">
                                {{ filteredPosts[0].title }}
                            </h2>
                            <p class="text-gray-600">
                                {{
                                extractTextWithoutAnchors(`${filteredPosts[0].excerpt ?? filteredPosts[0].description
                                ?? ""}`) }}
                            </p>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Remaining Posts -->
                <div
                     v-for="(post, _index) in filteredPosts.slice(1)"
                     :key="post._id"
                     class="bg-white overflow-hidden rounded-lg shadow-lg group">
                    <NuxtLink :to="`/blog/${post.slug}`" class="block">
                        <NuxtImg
                                 placeholder
                                 loading="lazy"
                                 layout="responsive"
                                 :src="getFeaturedImage(post)"
                                 sizes="700px"
                                 class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-2 group-hover:underline">
                                {{ post.title }}
                            </h2>
                            <p class="text-gray-600">
                                {{ extractTextWithoutAnchors(`${post.excerpt ?? post.description ?? ""}`) }}
                            </p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- No Posts Found -->
        <div v-else>
            <p class="text-center text-gray-500">No posts found.</p>
        </div>
    </div>
</template>