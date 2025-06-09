<script lang="ts">
import { defineComponent } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default defineComponent({})
</script>

<template>
    <section id="first-section" class="bg-red-50">
        <div
            class="mx-auto flex min-h-dvh w-11/12 max-w-6xl flex-col items-center justify-center lg:flex-row"
        >
            <div
                id="first-section__content"
                class="order-last rounded-3xl border border-black/10 bg-white p-6 shadow lg:order-first"
            >
                <h1>
                    <span class="font-serif text-5xl font-bold">Cláudia Calzavara</span>
                    <span class="block text-4xl">Psicóloga familiar</span>
                </h1>
                <small class="text-md font-mono">CRP12/34567</small>

                <p class="mt-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates possimus
                    atque delectus est perspiciatis et eius veritatis facere deleniti id eveniet
                    nisi libero quasi quos dolore, fugit illum adipisci blanditiis
                </p>

                <button class="btn btn-brown mt-4">Marque uma consulta</button>
            </div>

            <div id="first-section__galery" class="lg:ml-10">
                <picture>
                    <source media="(min-width:768px)" srcset="@/assets/index/vertical.jpg" />
                    <img
                        src="@/assets/index/vertical.jpg"
                        alt="Cláudia Calzavara sorrindo"
                        loading="lazy"
                        class="lg:full relative z-20 mx-auto w-10/12 max-w-sm -rotate-3 overflow-hidden rounded-3xl border border-black/15 object-cover object-center shadow-xl"
                    />
                </picture>

                <picture>
                    <source media="(min-width:768px)" srcset="@/assets/index/vertical.jpg" />
                    <img
                        src="@/assets/index/vertical.jpg"
                        alt="Cláudia Calzavara sorrindo"
                        loading="lazy"
                        class="relative -top-10 z-10 ml-20 hidden max-w-sm rotate-3 overflow-hidden rounded-3xl border border-black/15 object-cover object-center shadow-lg lg:block"
                    />
                </picture>
            </div>
        </div>
    </section>

    <section class="relative min-h-dvh">
        <svg
            viewBox="0 4 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="1"
            class="w-full fill-red-50 stroke-red-200"
        >
            <path
                d="M0,20 C120,0 320,40 480,30 C640,20 760,0 900,25 C1100,60 1300,40 1440,20 L1440,0 L0,0 Z"
            />
        </svg>

        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officia in odit tenetur
            inventore mollitia libero veniam illo. Nisi quia debitis mollitia velit accusamus
            provident sapiente! Esse dolore voluptate deserunt.
        </h2>
    </section>
</template>
