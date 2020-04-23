<template>
  <div class="lang-wrapper">
    <p class="w-3/5 text-4xl text-gray-700 languages lg:w-1/5 m-auto">Languages</p>
    <div class="relative languages-wrapper flex flex-wrap m-auto justify-around text-gray-700 wrapper mt-64 mb-64
      lg:justify-end items-center">
      <img src="../assets/Code_Background_2.png" alt="Code Background" class="hidden lg:block lg:visible absolute top-0 left-0">
      <div class="w-full flex flex-wrap justify-center lg:w-2/5">
        <div v-for="lang in languages" :key="lang.title"
          class="w-3/5 mb-10 lg:mb-0 lg:w-2/6 pt-20 pb-20 animated m-10">
          <div class="icon text-primary-300"><i class="fas text-6xl" :class="[lang.icon]"></i></div>
          <div class="text-xl mt-5">{{ lang.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Languages extends Vue {
  private languages = [
    {
      title: 'Java',
      icon: 'fa-coffee'
    },
    {
      title: 'SQL',
      icon: 'fa-database'
    },
    {
      title: 'Full Stack Web',
      icon: 'fa-code'
    }
  ]
}
</script>

<style scoped>
.icon {
    height: 90%;
    border-bottom: 1px solid #4a5568;
}

.languages {
  border-bottom: 2px solid #42b362;
}

.languages-wrapper {
  height: 100vh;
}
</style>
