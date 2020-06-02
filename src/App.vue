<template>
  <div id="app" class="text-gray-900">
    <Navbar :links="links"/>
    <router-view/>
    <Footer :navLinks="links"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class App extends Vue {
  private links = [
    {
      title: 'HOME',
      href: '/',
      scrollTo: '#nav'
    },
    {
      title: 'ABOUT',
      href: '/about',
      scrollTo: '#nav'
    },
    {
      title: 'CONTACT',
      href: '/about#contact',
      scrollTo: '#contact'
    }
  ]
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.router-link-exact-active {
  border-bottom: 1px solid white;
}
</style>
