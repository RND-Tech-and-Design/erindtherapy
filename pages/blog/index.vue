<template>
    <div class="container mx-auto p-4">
        <h1 class="text-4xl font-bold mb-8 text-center mt-8">Blog</h1>

        <div v-if="posts && posts.length">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- Most Recent Post -->
                <div v-if="posts.length > 0" :key="posts[0].id" class="col-span-1 md:col-span-2 lg:col-span-3">
                    <NuxtLink :to="`/blog/${posts[0].slug}`" class="block overflow-hidden rounded-lg shadow-lg group">
                        <img :src="getFeaturedImage(posts[0])" alt="Post Image"
                             class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="p-4">
                            <h2 class="text-2xl font-bold mb-2 group-hover:underline">{{ posts[0].title.rendered }}</h2>
                            <p v-html="posts[0].excerpt.rendered" class="text-gray-600"></p>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Remaining Posts -->
                <div v-for="(post, index) in posts.slice(1)" :key="post.id"
                     class="bg-white overflow-hidden rounded-lg shadow-lg group">
                    <NuxtLink :to="`/blog/${post.slug}`" class="block">
                        <img :src="getFeaturedImage(post)" alt="Post Image"
                             class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-2 group-hover:underline">
                                {{ post.title.rendered }}
                            </h2>
                            <p v-html="post.excerpt.rendered" class="text-gray-600"></p>
                        </div>
                    </NuxtLink>
                </div>

            </div>
        </div>

        <div v-else>
            <p class="text-center text-gray-500">No posts found.</p>
        </div>
    </div>
</template>

<script setup>

// Fetch blog posts from the Netlify function (which acts as a proxy)
const { data: posts, error } = await useFetch('/.netlify/functions/wordpress-proxy');

if (error.value) {
    console.error('Error fetching posts:', error.value);
}

function getFeaturedImage(post) {
    return post.jetpack_featured_media_url || 'https://via.placeholder.com/600x400'; // Replace with actual image retrieval logic
}
</script>