<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
    name: 'MenuItem',
    props: {
        label: { type: String, required: true },
        location: { type: String, required: true },
        icon: { type: Array<String>, required: true },
    },
})
</script>

<template>
    <RouterLink
        :to="{ name: location }"
        class="flex flex-row items-center flex-nowrap px-3 py-2 no-underline text-gray-500 text-xl hover:text-black border-t border-b border-transparent hover:border-gray-300 hover:bg-white"
    >
        <font-awesome-icon :icon="icon" class="w-5" />
        <span class="flex-1 pl-2 font-medium">
            {{ label }}
        </span>
    </RouterLink>
</template>
