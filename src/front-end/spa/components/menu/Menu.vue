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
        class="fixed z-60 top-0 right-0 group transition-[background] delay-200 duration-600 ease-in-out [&.is-open]:h-dvh [&.is-open]:w-dvw [&.is-open]:bg-black/80"
    >
        <div
            class="absolute top-0 right-0 bg-gray-100 border-l border-b border-gray-300 shadow-lg w-16 h-16 rounded-bl-full overflow-hidden transition-[width,height] duration-700 ease-in-out group-[.is-open]:w-56 group-[.is-open]:h-dvh group-[&.is-open]:rounded-bl"
        >
            <button
                @click="toggleMenu"
                aria-label="Hubuerguer do menu"
                class="table ml-auto size-16 p-2 cursor-pointer hover:scale-110 transition-all"
            >
                <div class="ml-auto -mt-4 w-8">
                    <span
                        class="block h-1 bg-blue-950 rounded-full transition-all duration-700 group-[.is-open]:rotate-225 group-[.is-open]:mt-2"
                    ></span>
                    <span
                        class="block h-1 bg-blue-950 mt-1.5 rounded-full transition-all duration-700 group-[.is-open]:-rotate-45 group-[.is-open]:-mt-1"
                    ></span>
                    <span
                        class="block h-1 bg-blue-950 mt-1.5 rounded-full transition-all duration-700 group-[.is-open]:-rotate-45 group-[.is-open]:-mt-1"
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
