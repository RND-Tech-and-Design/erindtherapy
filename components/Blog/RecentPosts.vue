<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from '#app';
import { extractTextWithoutAnchors } from '~/helpers/util';
import rawPosts from '~/assets/json/posts.json';

// Define the type for the 'posts' array
type Post = {
    title: string;
    description: string;
    date: string;
    image: string;
    link: string;
    slug: string;
};

// Function to get the featured image or a placeholder
function getFeaturedImage(post: any) {
    return post.jetpack_featured_media_url || 'https://via.placeholder.com/600x400';
}
// Handle the loading and error states
const isLoading = ref(true);
const posts = ref<Post[]>([]); // Explicitly type the 'posts' array
const error = ref(false);
try {
    posts.value = (rawPosts as unknown as Post[])
        .slice(0, 3)
        .map((post: any) => ({
            title: post.title.rendered,
            description: extractTextWithoutAnchors(post.excerpt.rendered),
            date: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            image: getFeaturedImage(post),
            link: post.link,
            slug: post.slug
        }));
    isLoading.value = false;

}
catch (error) {
    console.error(error);
    error = true;
}


</script>

<template>
    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row">
                <!-- Handle loading and error states -->
                <template v-if="isLoading">
                    <p>Loading...</p>
                </template>
                <template v-else-if="error">
                    <p>Error loading posts. Please try again later.</p>
                </template>
                <template v-else>
                    <template v-for="post in posts" :key="post.title">
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-10 max-w-[370px]">
                                <div class="mb-8 overflow-hidden rounded">
                                    <img
                                         :src="post.image"
                                         alt="image"
                                         class="w-full" />
                                </div>
                                <div>

                                    <h3>
                                        <NuxtLink :to="`/blog/${post.slug}`"
                                                  class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                                            {{ post.title }}
                                        </NuxtLink>
                                    </h3>
                                    <p class="text-body-color text-base">
                                        {{ post.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </section>
</template>