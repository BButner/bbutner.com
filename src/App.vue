<template>
  <div id="app" class="text-gray-900">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <nav class="fixed top-0 left-0 flex items-center justify-between flex-wrap p-6 w-4/4 z-50 bg-primary-500 w-screen"
      :class="{
        'lg:bg-primary-500': scrolled,
        'lg:bg-transparent': !scrolled
      }">
      <div class="flex items-center flex-shrink-0 text-white"
        :class="{
            'lg:text-gray-800': !scrolled
        }">
        <router-link to="/" class="font-semibold text-xl tracking-tight hover:text-gray-300">Beau Butner</router-link>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white border-primary-100 hover:text-white hover:border-white" @click="showLinks = !showLinks">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" v-if="showLinks">
        <div class="text-sm lg:flex-grow justify-center text-center font-semibold text-gray-300"
          :class="{
            'lg:text-gray-600': !scrolled,
            'lg:text-left': !scrolled,
            'lg:ml-20': !scrolled
          }">
          <router-link class="block mt-4 lg:inline-block lg:mt-0 hover:text-white lg:mr-4" v-for="link in links" :to="'/' + link.toLowerCase()" :key="link"
          :class="{
            'lg:hover:text-gray-400': !scrolled
          }">{{ link }}</router-link>
        </div>
        <div>
          <a href="https://www.github.com/BButner" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary-500 hover:bg-white mt-4 lg:mt-0"
            :class="{
              'lg:hover:text-gray-800': !scrolled
            }">GitHub</a>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private showLinks = true
  private scrolled = false
  @Prop() links: string[] = ['HOME', 'ABOUT', 'BLOG', 'CONTACT']

  @Emit()
  handleScroll () {
    if (window.scrollY > 50) {
      this.scrolled = true
    } else if (window.scrollY === 0) {
      this.scrolled = false
    }
  }

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

* {
  transition: all .25s ease;
}
</style>
