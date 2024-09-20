<template>
    <main>
        <ContentDoc>
            <template v-slot="{ doc }">
                <Hero
                      :hero-image="doc.heroImage"
                      :enableOverlay="true"
                      :heroHeight="65">

                    <div class="px-12 py-12 text-white bg-black bg-opacity-60 ">
                        <h1 class="text-4xl font-bold">
                            {{ doc.title }}
                        </h1>
                        <div class="flex items-center mt-4">
                            <p class="text-sm">
                                {{ doc.author }} |
                                <span v-for="(category, index) in doc.categories" :key="index">
                                    <NuxtLink
                                              :to="`/blog?category=${encodeURIComponent(category)}`"
                                              class="hover: underline">
                                        {{ category }}
                                    </NuxtLink>
                                    <span v-if="index < doc.categories.length - 1" class="mx-1">/</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </Hero>

                <div class="container mx-auto p-4">
                    <article class="prose lg:prose-xl mx-auto mt-8">
                        <ContentRenderer :value="doc" />
                    </article>
                </div>

            </template>
            <template #not-found>
                <h1>Document not found</h1>
            </template>
        </ContentDoc>
    </main>
    <cta></cta>
</template>
<!-- featured image from content markdown -->