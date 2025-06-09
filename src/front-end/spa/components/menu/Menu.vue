<script lang="ts">
import { defineComponent } from 'vue'
import MenuItem from './MenuItem.vue'

export default defineComponent({
    name: 'Menu',
    components: { MenuItem },
    props: {
        menu_items: {
            type: Array<{
                label: string
                location: string
                icon: [string, string]
            }>,
            default: [
                {
                    label: 'Início',
                    location: 'home',
                    icon: ['fas', 'house'],
                },
                {
                    label: 'Sobre',
                    location: 'about',
                    icon: ['fas', 'book'],
                },
                {
                    label: 'Contato',
                    location: 'contact',
                    icon: ['fas', 'phone'],
                },
            ],
        },
    },
    data() {
        return {
            is_menu_open: false,
        }
    },
    methods: {
        toggleHeader(event: Event) {
            const target = event.target as HTMLElement
            if (target.tagName == 'HEADER') this.toggleMenu()
        },

        toggleMenu() {
            this.is_menu_open = !this.is_menu_open
        },
    },
})
</script>

<template>
    <header
        @click="toggleHeader"
        :class="{ 'is-open': is_menu_open }"
        class="group fixed top-0 right-0 z-60 transition-[background] delay-200 duration-600 ease-in-out [&.is-open]:h-dvh [&.is-open]:w-dvw [&.is-open]:bg-black/80"
    >
        <div
            class="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-bl-full border-b border-l border-gray-300 bg-gray-100 shadow-lg transition-[width,height] duration-700 ease-in-out group-[&.is-open]:rounded-bl group-[.is-open]:h-dvh group-[.is-open]:w-56"
        >
            <button
                @click="toggleMenu"
                aria-label="Hubuerguer do menu"
                class="ml-auto table size-16 cursor-pointer p-2 transition-all hover:scale-105"
            >
                <div class="-mt-4 ml-auto w-8">
                    <span
                        class="block h-1 rounded-full bg-blue-950 transition-all duration-700 group-[.is-open]:mt-2 group-[.is-open]:rotate-225"
                    ></span>
                    <span
                        class="mt-1.5 block h-1 rounded-full bg-blue-950 transition-all duration-700 group-[.is-open]:-mt-1 group-[.is-open]:-rotate-45"
                    ></span>
                    <span
                        class="mt-1.5 block h-1 rounded-full bg-blue-950 transition-all duration-700 group-[.is-open]:-mt-1 group-[.is-open]:-rotate-45"
                    ></span>
                </div>
            </button>

            <nav @click="toggleMenu" class="flex flex-col overflow-hidden no-underline">
                <slot name="nav">
                    <MenuItem
                        v-for="item in menu_items"
                        :label="item.label"
                        :location="item.location"
                        :icon="item.icon"
                    />
                </slot>
            </nav>
        </div>
    </header>
</template>
