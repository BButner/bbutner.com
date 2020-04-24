<template>
  <div class="lang-wrapper">
    <p class="w-3/5 text-4xl text-gray-700 languages lg:w-1/5 m-auto">Languages</p>
    <div class="w-full flex flex-wrap justify-center mt-32 text-gray-700">
      <div v-for="lang in languages" :key="lang.id"
        class="w-3/5 mb-10 lg:mb-0 lg:w-1/6 pt-20 pb-20 animated hover:bg-gray-600 hover:text-white cursor-pointer"
        :class="{
          'bg-primary-500': selectedId === lang.id,
          'text-white': selectedId === lang.id
        }"
        @click="handleCodeDisplay(lang.id)">
        <div class="icon"><i class="fas text-6xl" :class="[lang.icon]"></i></div>
        <div class="text-xl mt-5">{{ lang.title }}</div>
      </div>
    </div>
    <div class="fixed top-0 text-xs left-0 lg:relative w-full m-auto pt-10 pb-10 flex justify-center mt-32 lg:mt-0 lg:text-sm" v-if="selectedId.length > 0">
      <div class="wrapper w-5/6">
        <div @click="resetCodeDisplay()">
          <i class="far fa-times-circle text-5xl mb-5 text-gray-700 cursor-pointer animated hover:text-gray-500"></i>
        </div>
        <div class="">
          <vue-code-highlight class="lg:ib">
            {{ code }}
          </vue-code-highlight>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { component as VueCodeHighlight } from 'vue-code-highlight'

@Component({
  components: {
    VueCodeHighlight
  }
})
export default class Languages extends Vue {
  private languages = [
    {
      title: 'Java',
      icon: 'fa-coffee',
      id: 'java'
    },
    {
      title: 'SQL',
      icon: 'fa-database',
      id: 'sql'
    },
    {
      title: 'Full Stack Web',
      icon: 'fa-code',
      id: 'web'
    }
  ]

  private selectedId = ''
  private code = ''

  @Emit()
  handleCodeDisplay (id: string) {
    if (this.selectedId === id) {
      this.resetCodeDisplay()
    } else {
      fetch(`/code/${id}.txt`)
        .then(response => response.text())
        .then((data) => {
          this.code = data
        })
      this.selectedId = id
    }
  }

  @Emit()
  resetCodeDisplay () {
    this.code = ''
    this.selectedId = ''
  }
}
</script>

<style scoped>
.languages {
  border-bottom: 2px solid #42b362;
}

.languages-wrapper {
  height: 100vh;
}
</style>
