<script lang="ts">
import { defineComponent } from 'vue'
import { gsap } from 'gsap'

export default defineComponent({
    data() {
        return {
            timeline: null as gsap.core.Timeline | null,
        }
    },

    beforeUnmount() {
        this.timeline?.kill()
        this.timeline = null
    },

    mounted() {
        this.timeline = gsap
            .timeline({
                scrollTrigger: {
                    trigger: 'footer',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true,
                    // markers: true,
                },
            })
            .from('#footer > div', { yPercent: -50, ease: 'none' })
    },

    methods: {
        goTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        },
    },
})
</script>

<template>
    <footer
        id="footer"
        class="overflow-hidden bg-green-800/40"
        style="
            box-shadow:
                rgba(60, 64, 67, 0.3) 0px 1px 2px 0px inset,
                rgba(60, 64, 67, 0.15) 0px 2px 6px 2px inset;
        "
    >
        <div class="mx-auto w-11/12 max-w-6xl">
            <div class="mb-4 flex flex-row items-center border-b border-black/20 px-2 py-4">
                <img src="@/assets/logo.svg" alt="Logo da Cláudia Calzavara" class="h-20" />

                <h2 class="text-bold ml-2 font-serif text-xl font-bold text-blue-950 sm:text-2xl">
                    Psicóloga Cláudia Calzavara
                </h2>

                <button
                    @click="goTop"
                    aria-label="Subir"
                    class="btn btn-yellow ml-auto hidden rounded-sm px-4 py-0.5 sm:table"
                >
                    <font-awesome-icon :icon="['fas', 'turn-up']" />
                </button>
            </div>

            <div class="flex flex-col items-start px-2 sm:flex-row">
                <section class="mx-auto w-11/12 max-w-[11rem] sm:mx-0">
                    <h2
                        class="text-shadow w-full pb-2.5 font-bold text-balance whitespace-nowrap text-white sm:text-lg"
                    >
                        REDES SOCIAIS
                    </h2>

                    <div class="bg grid grid-cols-2 gap-3">
                        <a
                            href="#"
                            aria-label="Facebook"
                            target="_blank"
                            class="btn relative table h-10 rounded bg-[#1877f2]"
                        >
                            <font-awesome-icon
                                :icon="['fab', 'facebook-f']"
                                class="absolute top-1/2 left-1/2 -translate-1/2 text-white"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            target="_blank"
                            class="btn relative table h-10 rounded bg-[#c13584]"
                        >
                            <font-awesome-icon
                                :icon="['fab', 'instagram']"
                                class="absolute top-1/2 left-1/2 -translate-1/2 text-white"
                            />
                        </a>
                    </div>
                </section>

                <section class="mx-auto mt-10 w-11/12 max-w-[11rem] sm:mx-0 sm:mt-0 sm:ml-20">
                    <h2
                        class="text-shadow w-full pb-1.5 font-semibold text-balance whitespace-nowrap text-white sm:text-lg"
                    >
                        CONTATO
                    </h2>

                    <address
                        itemtype="http://schema.org/PostalAddress"
                        class="text-sm leading-6 text-black/80 not-italic"
                    >
                        <p itemprop="streetAddress">Rua Exemplo, 123</p>

                        <p>
                            <span itemprop="addressLocality">Paraíba</span> -
                            <span itemprop="addressRegion">PB</span>
                        </p>

                        <p itemprop="postalCode">01234-567</p>

                        <p>
                            Telefone:
                            <a
                                href="tel:+5511999999999"
                                target="_blank"
                                itemprop="telephone"
                                class="whitespace-nowrap text-blue-700/80 no-underline hover:underline"
                            >
                                +55 (11) 99999-9999
                            </a>
                        </p>

                        <p>
                            Email:
                            <a
                                href="mailto:contato@exemplo.com"
                                target="_blank"
                                itemprop="email"
                                class="whitespace-nowrap text-blue-700/80 no-underline hover:underline"
                            >
                                contato@exemplo.com
                            </a>
                        </p>
                    </address>
                </section>
            </div>

            <p class="mt-6 w-full px-4 text-center text-sm text-pretty text-black/80">
                {{ new Date().getFullYear() }} &copy; Direitos reservador
            </p>
        </div>
    </footer>
</template>
