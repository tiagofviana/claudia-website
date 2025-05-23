<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Menu from '@/components/menu/Menu.vue'

export default defineComponent({
    name: 'App',
    components: { Menu },
    watch: {
        route(to, from) {
            console.log('Route changed:', from.path, '→', to.path)
        },
    },
})
</script>

<template>
    <Menu></Menu>
    <Transition name="slide" mode="out-in">
        <RouterView v-slot="{ Component, route }">
            <KeepAlive :max="8">
                <component :is="Component" :key="route.path" />
            </KeepAlive>
        </RouterView>
    </Transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
    transition:
        opacity 1s,
        transform 1s;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    /* opacity: 0;
    transform: translateX(-30%); */
}
</style>
