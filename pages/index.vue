<script setup lang="ts">
definePageMeta({
    layout: 'default',
    title: 'Home',
    navOrder: 1,
})
</script>

<template>
    <div>
        <HomeHero />
        <AboutBox />
        <QuoteBlock :randomQuote="true" />

<!-- WIP -->
        <section v-if="false" class="my-10">
            <h3 class="text-3xl font-semibold text-center mb-10">
                What I can help with
            </h3>
            <div class="carousel carousel-center p-4 space-x-4 rounded-box">
                <div class="carousel-item mx-4 ">
                    <div class="card w-96 bg-base-100 shadow-xl image-full">
                        <figure >
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                 alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                </div>
                <div class="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
                </div>
                <div class="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
                </div>
                <div class="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
                </div>
                <div class="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
                </div>
            </div>
        </section>
<!-- /WIP -->
        <Cta></Cta>

        <AppAlert>
            Currently Accepting New Clients!
        </AppAlert>
    </div>
</template>
