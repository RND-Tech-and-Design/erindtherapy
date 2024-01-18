<script setup lang="ts">

// to be replaces by call to blog host API. This is just a dummy data
const blogPosts = [
    {
        title: 'How to test a blog post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, magna libero semper urna, id sodales nisi velit id elit. Sed euismod, diam id tincidunt dapibus, magna libero semper urna, id sodales nisi velit id elit.',
        date: 'Dec 22, 2023',
        image: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg',
        link: 'javascript:void(0)',
    },
    {
        title: 'This is a blog post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, magna libero semper urna, id sodales nisi velit id elit. Sed euismod, diam id tincidunt dapibus, magna libero semper urna, id sodales nisi velit id elit.',
        date: 'Mar 15, 2023',
        image: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg',
        link: 'javascript:void(0)',
    },
    {
        title: 'Whats up with this blog post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, magna libero semper urna, id sodales nisi velit id elit. Sed euismod, diam id tincidunt dapibus, magna libero semper urna, id sodales nisi velit id elit.',
        date: 'Jan 05, 2023',
        image: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg',
        link: 'javascript:void(0)',
    }
];

</script>

<template>
    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row -mx-4">
                <template v-for="post in blogPosts">
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mx-auto mb-10 max-w-[370px]">
                            <div class="mb-8 overflow-hidden rounded">
                                <img
                                     :src="post.image"
                                     alt="image"
                                     class="w-full" />
                            </div>
                            <div>
                                <span
                                      class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                                    {{ post.date }}
                                </span>
                                <h3>
                                    <a
                                       href="javascript:void(0)"
                                       class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                                        {{ post.title }}
                                    </a>
                                </h3>
                                <p class="text-body-color text-base">
                                    {{ post.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>