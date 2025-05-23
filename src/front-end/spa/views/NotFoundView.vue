<script setup lang="ts"></script>

<template>
    <div class="relative flex min-h-dvh items-center justify-center overflow-hidden bg-green-300">
        <div id="clouds" class="absolute top-0 bottom-0 w-full overflow-hidden">
            <!-- Top clouds -->
            <div class="top-12 left-24 scale-50 opacity-80"></div>
            <div class="top-40 left-40 scale-105 opacity-30"></div>
            <div class="top-16 left-1/4 scale-75 opacity-90"></div>

            <!-- Bottom clouds -->
            <div class="bottom-36 left-16 scale-90 opacity-80"></div>
            <div class="bottom-6 left-1/2 opacity-90"></div>
            <div class="bottom-5 left-48 z-10 scale-50 opacity-50"></div>
        </div>

        <div class="w-11/12 max-w-sm text-center text-white">
            <h1
                class="text-shadow border-b-4 border-white text-8xl text-white uppercase md:text-9xl"
            >
                404
            </h1>

            <p class="text-shadow mt-4 px-2 text-xl uppercase sm:text-2xl">Página não encontrada</p>

            <RouterLink :to="{ name: 'home' }" class="btn btn-red mx-auto my-4">
                VOLTAR PARA O INÍCIO
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
@keyframes moveclouds {
    0% {
        margin-left: 1000px;
    }
    100% {
        margin-left: -1000px;
    }
}

@media only screen and (max-width: 600px) {
    @keyframes moveclouds {
        0% {
            margin-left: 300px;
        }
        100% {
            margin-left: -300px;
        }
    }
}

#clouds > div {
    position: absolute;
    height: 4rem;
    width: 12rem;
    background: #fff;
    border-radius: 9999px;
    animation-name: moveclouds;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

#clouds > div:nth-of-type(1) {
    animation-duration: 35s;
}
#clouds > div:nth-of-type(2) {
    animation-duration: 17s;
}
#clouds > div:nth-of-type(3) {
    animation-duration: 25s;
}
#clouds > div:nth-of-type(4) {
    animation-duration: 34s;
}
#clouds > div:nth-of-type(5) {
    animation-duration: 22s;
}
#clouds > div:nth-of-type(6) {
    animation-duration: 48s;
}

#clouds > div::after {
    content: '';
    width: 5rem;
    height: 5rem;
    background: #fff;
    position: absolute;
    right: 2rem;
    top: -2.5rem;
    border-radius: 9999px;
}

#clouds > div::before {
    content: '';
    width: 3.5rem;
    height: 3.5rem;
    background: #fff;
    position: absolute;
    left: 2.25rem;
    top: -1.75rem;
    border-radius: 9999px;
}
</style>
