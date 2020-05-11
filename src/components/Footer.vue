<template>
  <div class="w-full pt-32">
    <router-link class="m-auto text-4xl animated hover:text-gray-500 cursor-pointer w-1/5" :to="currentRoute()" v-scroll-to="'#nav'"><i class="fas fa-chevron-up"></i></router-link>
    <div class="w-full bg-gray-800 text-gray-400 p-20 text-xl lg:text-sm lg:flex lg:justify-between lg:items-center">
      <div class="align-center m-auto mb-10 lg:m-0 lg:text-left lg:w-1/3">
        <router-link class="hover:text-white animated" :to="'/' + link.href" v-for="link in navLinks" v-scroll-to="link.scrollTo"
          :key="link.title">{{ link.title }}<br><br class="lg:hidden"></router-link>
      </div>
      <div class="mb-20 lg:m-0 lg:w-1/3">
        &copy; Beau Butner 2020
      </div>
      <div class="w-full lg:w-1/3 lg:text-right">
        <div class="text-4xl w-full">
          <a class="animated hover:text-white" href="https://github.com/BButner"><i class="fab fa-github"></i></a>
          <a class="animated hover:text-white" href="https://twitter.com/BeauButner"><i class="fab fa-twitter ml-2"></i></a>
          <a class="animated hover:text-white" href="https://www.youtube.com/channel/UCHSC6wkl0Dx8TtIRRhLaB6w"><i class="fab fa-youtube ml-2"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  @Prop() navLinks!: string[]

  @Emit()
  goTop () {
    window.scrollTo(0, 0)
  }

  @Emit()
  currentRoute () {
    return this.$route.path
  }
}
</script>

<style scoped>
.router-link-exact-active > p {
  border-bottom: 1px solid white;
}
</style>
