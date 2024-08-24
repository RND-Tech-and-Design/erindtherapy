<template>
    <div v-if="error">Error loading post: {{ error.message }}</div>
    <div v-else-if="pending">Loading...</div>
    <article v-else>
        <h1>{{ post.title.rendered }}</h1>
        <div v-html="post.content.rendered"></div>
    </article>
</template>

<script setup>
import { useRoute, useFetch } from 'nuxt/app';

const route = useRoute();
const { data: post, pending, error } = await useFetch(`https://www.erindtherapy.com/wp-json/wp/v2/posts?slug=${route.params.slug}`);
</script>