<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Menu from '@/components/menu/Menu.vue'

export default defineComponent({
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

    <RouterView v-slot="{ Component, route }">
        <KeepAlive :max="5">
            <component :is="Component" :key="route.path" />
        </KeepAlive>
    </RouterView>
</template>

<style></style>
