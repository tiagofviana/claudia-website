<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Footer.vue'
import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

export default defineComponent({
    components: { Footer },
    data() {
        return {
            timeline: null as gsap.core.Timeline | null,
            svgAnimation: null as gsap.core.Tween | null,
        }
    },
    deactivated() {
        ScrollTrigger.getAll().forEach((trigger) => {
            trigger.kill()
        })

        this.clearTimeline()
        this.clearSvgAnimation()
    },
    activated() {
        if (!('ontouchstart' in window) && !navigator.maxTouchPoints) {
            ScrollSmoother.create({
                content: '#app-content',
                smooth: 1,
                smoothTouch: false,
                normalizeScroll: true,
            })
        }

        this.createTimeline()
        this.createSvgAnimation()
    },
    methods: {
        scrollFirstSection() {
            gsap.to(window, {
                scrollTo: this.timeline?.scrollTrigger?.end,
                duration: 3,
                ease: 'none',
            })
        },

        clearSvgAnimation() {
            this.svgAnimation?.kill()
            this.svgAnimation = null
        },

        createSvgAnimation() {
            this.svgAnimation = gsap.to('#svg-click__hand', {
                duration: 1,
                scale: 0.8,
                x: 8,
                rotate: 10,
                repeat: -1,
                yoyo: true,
            })
        },

        clearTimeline() {
            this.timeline?.kill()
            this.timeline = null
        },
        createTimeline() {
            const container_duration: number = 6
            const content_duration: number = 6

            document.fonts.ready.then(() => {
                this.timeline = gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: '#first-section',
                            start: 'top top',
                            end: `+=${window.screen.height * 1.5}`,
                            // markers: true,
                            scrub: true,
                            pin: true,
                        },
                    })
                    .to('#first-section__container', {
                        duration: container_duration,
                        display: 'none',
                    })
                    .to(
                        '#first-section__container > div',
                        {
                            duration: container_duration,
                            width: '650%',
                            top: '-50%',
                            ease: 'power2.in',
                        },
                        '<',
                    )
                    .to('#first-section__title > span', {
                        duration: 4,
                        opacity: 1,
                        ease: 'power3.in',
                    })
                    .to('#first-section__title', {
                        duration: content_duration,
                        height: '100%',
                        ease: 'power2.inOut',
                    })
                    .to(
                        '#first-section__title > span:nth-child(1)',
                        {
                            duration: content_duration,
                            x: '50%',
                            y: '-100%',
                            left: '20px',
                            fontSize: 35,
                            ease: 'power2.inOut',
                        },
                        '<',
                    )
                    .to(
                        '#first-section__title > span:nth-child(2)',
                        {
                            duration: content_duration,
                            x: '0',
                            y: '100%',
                            right: '20px',
                            fontSize: 35,
                            ease: 'power2.inOut',
                        },
                        '<',
                    )
                    .to(
                        '#first-section__content',
                        {
                            duration: content_duration,
                            height: '100%',
                            borderColor: 'white',
                            ease: 'power2.inOut',
                        },
                        '<',
                    )
            })
        },
    },
})
</script>

<template>
    <main id="app-content">
        <section id="first-section">
            <div
                id="first-section__container"
                class="relative h-dvh overflow-hidden border-l border-gray-900 bg-white"
            >
                <div
                    class="relative top-1/2 left-1/2 w-6/12 min-w-48 -translate-1/2 will-change-[width] md:w-2/12"
                >
                    <img
                        src="@/assets/logo.svg"
                        alt="Logotipo da Cláudia Calzavara"
                        loading="eager"
                        class="width-full object-cover object-center"
                    />
                    <button
                        id="first-section__button"
                        @click="scrollFirstSection"
                        aria-label="Rolar para baixo"
                        class="relative mx-auto mt-10 block cursor-pointer rounded-full border-r-4 border-b-8 border-fuchsia-900 bg-fuchsia-700 p-3.5 text-xl transition-all active:border-transparent"
                    >
                        <span class="mx-auto block max-w-40 px-2 pt-2 text-center text-white">
                            Explorar
                        </span>

                        <svg
                            viewBox="-22.5 0 158 158"
                            xmlns="http://www.w3.org/2000/svg"
                            class="mx-auto h-12 fill-white pl-2"
                        >
                            <path
                                id="svg-click__hand"
                                d="M43.2289 140.489C57 151 81 156 96.4934 136.33 109 115 108 93 105 84c-5-7-9-5-12 1-4 6-7 3-7.1406-6.9082C85.3297 75.326 81 69 75.5358 74.4806c-.7515 1.4236-1.3842 2.9069-1.8909 4.4349C73 84 67 89 66.9779 77.6678 66.9437 76.151 67 70 63.3849 70.3096c-1.2385-.1982-2.5071.4299-3.4916 1.7216-1.1545 1.648-2.132 3.4129-3.73 6.986C55 81 51 83 49.5547 78.078c-.848-16.0914-1.1909-22.7198-1.6431-29.23-.3262-4.7105-.9102-9.6094-1.7831-14.977-.5185-3.1917-1.8293-5.5506-4.0037-7.2052-3.3533.8289-3.953 3.3965-4.1604 6.9329-.4175 7.1206-.8493 14.482-1.0147 21.7247-.0748 3.2752.0689 6.6107.4041 15.1293.1864 7.7428.358 15.8971.5096 24.2366C38 97 35 107 30.4867 96.4128 26 87 20.3766 85.0995 12.9296 84.9853c-1.9578 0-3.9756.3466-4.6713 2.4862-.6419 1.9776.5556 3.1649 2.6936 5.2691C17.5934 97.8738 22.8974 104.729 34.6 128.391ZM71.181 70.9653C74.0972 67.6836 85 64 91.0162 75.2124 91.7487 74.9604 93 74 98.2031 72.9264 101 73 121 72 107.976 126.774c-2.562 8.889-6.682 15.6-12.5925 20.514C65 168 37 145 35 141c-6.8284-9.335-11.5125-17.806-15.6711-25.825C16.283 109.462 12.2143 104.356 5 96 2 91 0 84 9.2153 80.3089 16.6207 78.8551 23.7482 80.6016 32 87c-.5808-11.313-.7368-16.2592-.7368-21.1266C31.2605 59.3199 31 53 32 33c-1-4 9-24 19-5 4.2574 24.8723 3.4871 30.9385 4.3554 40.0209C58.1586 65.9509 66 61 71.181 70.9653Z"
                            />

                            <path
                                d="M7 39c0-2 0-4 12.0921-2.931.8558.0237 4.9079 2.931.3516 4.8451-1.2311.3087-2.4904.4899-3.7586.5408C15.2361 41.4871 7 41 7 39Z"
                            />

                            <path
                                d="M20 21c5 1 6.3945-.7998 6.5993-1.6012.1654-1.1353-.1006-2.2913-.7451-3.2404C24 14 17.9631 13.0887 15.6646 12.5886c-2.0287-.441-3.6831.2875-4.3152 1.9034-.5644 1.4439-.0441 3.3677 2.0437 4.2491Z"
                            />

                            <path
                                d="M39 3c0-1 1-2 3.4027-2.0122h.0196C45 2 44 2 45.4973 9.5799c.0013 2.0964-1.226 3.585-2.9849 3.6204h-.0657c-1.6212 0-2.7193-1.2713-3.0193-3.4989Z"
                            />

                            <path
                                d="M64 24c-3 2-6-2-3.8841-4.2802l.5656-.5251C62.5052 17.4049 64 15 68.1893 13.6794c.5848-.0628 1.1755.035 1.7091.2829.5225.3209 3.1016 2.0377.4378 5.3393C68.1841 21.0941 65.9193 22.7471 64 24Z"
                            />

                            <path
                                d="M67.8914 37.1672C70.8154 36.1958 74 36 78.9626 37.5765c.3052.2153 1.0374.4235.9595 2.4471-.1588.5588.0779.9764-2.1862 2.5597C76.5092 42.9165 75 44 68.3095 42.7959c-1.6546-.2691-2.6572-1.4597-2.4419-2.8944.1503-1.0036 1.0669-2.4167 2.0238-2.7343Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="flex min-h-dvh items-center justify-center bg-blue-950 py-4">
                <div class="relative aspect-square w-11/12 max-w-md md:aspect-video md:max-w-5xl">
                    <h1
                        id="first-section__title"
                        aria-label="Cláudia Calzavara"
                        class="text-shadow absolute top-1/2 z-60 h-30 w-full -translate-y-1/2 text-5xl font-bold text-white will-change-[height] sm:h-36 sm:text-7xl"
                    >
                        <span
                            class="absolute left-1/2 -translate-x-1/2 overflow-hidden opacity-0 will-change-[left,_transform,_font-size]"
                            aria-hidden="true"
                        >
                            Cláudia
                        </span>
                        <span
                            class="absolute right-1/2 bottom-0 translate-x-1/2 overflow-hidden opacity-0 will-change-[right,_transform,_font-size]"
                            aria-hidden="true"
                        >
                            Calzavara
                        </span>
                    </h1>

                    <div
                        id="first-section__content"
                        class="relative top-1/2 z-20 size-full h-0 -translate-y-1/2 overflow-hidden rounded-4xl border-4 border-transparent"
                    >
                        <picture class="size-full">
                            <source
                                media="(min-width:768px)"
                                srcset="@/assets/index/horizontal.jpg"
                            />
                            <img
                                src="@/assets/index/vertical.jpg"
                                alt="Cláudia Calzavara sorrindo"
                                loading="lazy"
                                class="size-full object-cover object-center"
                            />
                        </picture>

                        <div class="absolute bottom-0 z-30 bg-white p-4 text-xl">
                            <p class="">
                                Profissionalismo e empatia para ajudar você a superar os desafios da
                                vida.
                            </p>
                            <p>Psicóloga clínica <span>CRP: 12/34567</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </main>
</template>
