<template>
  <div>
    <Welcome/>
    <Skills/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import Skills from '@/components/Skills.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Skills
  }
}
</script>
