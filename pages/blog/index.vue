<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
import { extractTextWithoutAnchors } from '~/helpers/util';

// Get optional URL parameter for filtering posts by category
const route = useRoute();
const category = route.query.category;

// Fetch posts from the content/blog directory
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').find());

// Function to get the featured image URL or a placeholder
function getFeaturedImage(post) {
    return post.heroImage || 'https://via.placeholder.com/600x400';
}

// Sort posts by date and filter by category if a category is present
const filteredPosts = computed(() => {
    // Sort posts by date (newest first)
    const sortedPosts = posts.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filter by category if a category is present
    return category
        ? sortedPosts.filter(post => post.categories && post.categories.includes(parseInt(category as string)))
        : sortedPosts;
});

</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-4xl font-bold mb-8 text-center mt-8">Blog</h1>

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
                        <img
                             :src="getFeaturedImage(filteredPosts[0])"
                             alt="Post Image"
                             class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div class="p-4">
                            <h2 class="text-2xl font-bold mb-2 group-hover:underline">
                                {{ filteredPosts[0].title }}
                            </h2>
                            <p class="text-gray-600">
                                {{ extractTextWithoutAnchors(filteredPosts[0].excerpt ?? "") }}
                            </p>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Remaining Posts -->
                <div
                     v-for="(post, index) in filteredPosts.slice(1)"
                     :key="post._id"
                     class="bg-white overflow-hidden rounded-lg shadow-lg group">
                    <NuxtLink :to="`/blog/${post.slug}`" class="block">
                        <img
                             :src="getFeaturedImage(post)"
                             alt="Post Image"
                             class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-2 group-hover:underline">
                                {{ post.title }}
                            </h2>
                            <p class="text-gray-600">
                                {{ extractTextWithoutAnchors(post.excerpt ?? "") }}
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