<template>
  <div>
    <Welcome/>
    <Skills/>
    <Languages/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import Skills from '@/components/Skills.vue'
import Languages from '@/components/Languages.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Skills,
    Languages
  }
}
</script>
