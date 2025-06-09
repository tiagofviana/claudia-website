<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

const AsyncMenu = defineAsyncComponent(() => import('@/components/menu/Menu.vue'))
const AsyncFooter = defineAsyncComponent(() => import('@/components/Footer.vue'))

export default defineComponent({
    components: { AsyncMenu, AsyncFooter },
    data() {
        return {
            previousScrollHeight: document.body.scrollHeight,
            observer: null as ResizeObserver | null,
            smoother: null as ScrollSmoother | null,
        }
    },
    watch: {
        $route(to, from) {
            this.smoother?.paused(true)
            window.scrollTo({ top: 0, behavior: 'instant' })
            this.smoother?.scrollTop(0)
            this.smoother?.paused(false)
            console.log('Route changed:', from.path, '→', to.path)
        },

        previousScrollHeight(to, from) {
            // Refresh all scroll triggers
            ScrollTrigger.refresh()
        },
    },
    mounted() {
        this.observer = new ResizeObserver(() => {
            const currentHeight = document.body.scrollHeight
            if (currentHeight !== this.previousScrollHeight) {
                this.previousScrollHeight = currentHeight
            }
        })
        this.observer.observe(document.body)
        this.smoother = ScrollSmoother.create({
            content: '#smooth-content',
            wrapper: '#wrapper-content',
            smooth: 0.8,
            // effects: true,
            smoothTouch: false,
        })
    },
    unmounted() {
        this.observer?.disconnect()
        this.observer = null

        this.smoother?.kill()
        this.smoother = null
    },
})
</script>

<template>
    <AsyncMenu></AsyncMenu>

    <div id="smooth-wrapper">
        <div id="smooth-content" class="will-change-transform">
            <main class="min-h-dvh">
                <RouterView v-slot="{ Component }">
                    <component :is="Component" />
                </RouterView>
            </main>

            <AsyncFooter></AsyncFooter>
        </div>
    </div>
</template>

<style></style>
