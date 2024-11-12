<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
import { extractTextWithoutAnchors, trimTextToCharacterLengthOrNearestPeriod } from '~/helpers/util';
import type { ParsedContent } from '@nuxt/content';

// Get the current route
const route = useRoute();

// Fetch the 3 most recent posts using `queryContent` with a limit
const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').sort({ date: -1 }).limit(3).find()
);


// Function to get the featured image URL or a placeholder
function getFeaturedImage(post: ParsedContent) {
    return post.heroImage || 'https://via.placeholder.com/600x400';
}

// Sort posts by date and filter by category if a category is present
const filteredPosts = computed(() => {
    if (!posts.value) return [];
    // Sort posts by date (newest first)
    const sortedPosts = posts.value.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filter by category if a category is present
    return sortedPosts;
});

</script>


<template>
    <div class="container mx-auto p-4 pt-10">

        <!-- Display Posts -->
        <div v-if="filteredPosts && filteredPosts.length > 0">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                <!-- Remaining Posts -->
                <div
                     v-for="(post, _index) in filteredPosts"
                     :key="post._id"
                     class="bg-white overflow-hidden rounded-lg shadow-lg group">
                    <NuxtLink :to="`/blog/${post.slug}`" class="block">
                        <NuxtPicture
                                     placeholder
                                     loading="lazy"
                                     :src="getFeaturedImage(post)"
                                     sizes="400px"
                                     class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-2 group-hover:underline">
                                {{ post.title }}
                            </h2>
                            <p class="text-gray-600">
                                {{ trimTextToCharacterLengthOrNearestPeriod(
                                extractTextWithoutAnchors(`${post.excerpt ?? post.description ?? ""}`)
                                )
                                }}
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