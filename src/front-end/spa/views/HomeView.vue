<script lang="ts">
import { gsap } from 'gsap'
import Footer from '@/components/Footer.vue'

export default {
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            gsap.from('.gsap-fade', {
                opacity: 0,
                duration: 0.7,
                stagger: 0.4,
            })
        })
    },
}
</script>
<!-- gsap -->
<!-- https://www.onioncreative.studio/ -->
<!-- https://thmssnglmnt.com/en/ -->
<!-- https://wordpress.com/theme/coachify?tab_filter=business -->
<template>
    <div class="flex min-h-dvh flex-row items-center justify-center">
        <div class="max-w-sm">
            <h1 class="text-shadow gsap-fade text-6xl font-extrabold text-green-600">
                Cláudia <span class="gsap-fade block indent-4">Calzavara</span>
            </h1>

            <p class="font-pretty gsap-fade mt-4 text-lg text-blue-400">
                Apoio emocional e desenvolvimento pessoal para uma vida com mais equilíbrio.
            </p>
        </div>

        <img
            src="@/assets/belinha.jpg"
            alt=""
            class="gsap-fade w-11/12 max-w-xs rounded-4xl border-8 border-white shadow outline outline-black/15 outline-solid"
        />
    </div>

    <Footer></Footer>
</template>
