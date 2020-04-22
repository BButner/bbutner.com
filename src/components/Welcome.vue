<template>
    <div class="welcome-wrapper flex">
        <div class="w-full lg:w-2/4 z-10 h-screen flex items-center justify-center lg:justify-start lg:ml-20">
            <div class="welcome-content">
                <img class="lg:hidden m-auto rounded-full mb-20 border-primary-700 border-4 border-solid" src="../assets/Welcome_Background_Small.png" alt="Welcome Background Small">
                <p class="text-6xl">Beau Butner</p>
                <p class="text-xl text-gray-600">Systems Analyst <span class="text-primary-500 text-2xl">|</span> Student <span class="text-primary-500 text-2xl">|</span> Developer</p>
            </div>
        </div>
        <img class="hidden lg:visible lg:block absolute top-0 right-0 z-0" src="../assets/Welcome_Background.png" alt="Welcome Background">
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Welcome extends Vue {
}
</script>

<style scoped>
</style>
