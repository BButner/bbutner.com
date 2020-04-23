<template>
  <div class="w-full bg-gray-800 text-gray-400 p-20 text-xl lg:text-sm lg:flex lg:justify-between mt-64 lg:items-center">
    <div class="align-center m-auto mb-10 lg:m-0 lg:text-left">
      <router-link class="hover:text-white animated" :to="'/' + link.toLowerCase().replace('home', '')" v-for="link in navLinks"
        :key="link">{{ link }}<br><br class="lg:hidden"></router-link>
    </div>
    <div class="mb-20 lg:m-0">
      &copy; Beau Butner 2020
    </div>
    <div class="">
      <p>Socials</p>
      <div class="text-4xl lg:text-lg">
        <a class="animated hover:text-white" href="https://github.com/BButner"><i class="fab fa-github"></i></a>
        <a class="animated hover:text-white" href="https://twitter.com/BeauButner"><i class="fab fa-twitter ml-2"></i></a>
        <a class="animated hover:text-white" href="https://www.youtube.com/channel/UCHSC6wkl0Dx8TtIRRhLaB6w"><i class="fab fa-youtube ml-2"></i></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  @Prop() navLinks!: string[]
}
</script>

<style scoped>
.router-link-exact-active > p {
  border-bottom: 1px solid white;
}
</style>
