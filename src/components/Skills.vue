<template>
    <div class="flex flex-wrap m-auto justify-around text-gray-700 wrapper lg:w-1/2 mt-64 mb-64">
        <div v-for="skill in skills" :key="skill.title"
          class="w-4/6 mb-20 lg:mb-0 lg:w-2/5 pt-20 pb-20 border-gray-600 border-2 rounded-lg hover:bg-gray-600 hover:text-white animated m-10">
            <div class="icon"><i class="fas text-6xl" :class="[skill.icon]"></i></div>
            <div class="text-xl">{{ skill.title }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Skills extends Vue {
  private skills = [
    {
      title: 'Collaboration & Teamwork',
      icon: 'fa-users'
    },
    {
      title: 'Willingness to Learn',
      icon: 'fa-graduation-cap'
    },
    {
      title: 'Reliability',
      icon: 'fa-shield-alt'
    },
    {
      title: 'Adaptability & Flexibility',
      icon: 'fa-random'
    },
    {
      title: 'Problem-solving',
      icon: 'fa-brain'
    },
    {
      title: 'Communication',
      icon: 'fa-comments'
    }
  ]
}
</script>

<style scoped>
.icon {
    height: 90%;
}
</style>
