<template>
  <div>
    <the-header></the-header>
    <t-button size="lg">button</t-button>
    <t-tag size="md">tag</t-tag>
    <t-tag>tag 2</t-tag>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent } from '@nuxtjs/composition-api'
import { sleep } from '@think/utils'
import TheHeader from '@/components/the-header.vue'
import { useValue } from '@root/composables'

export default defineComponent({
  name: 'IndexPage',
  components: { TheHeader },
  setup() {
    onMounted(() => {
      sleep(1000)

      useValue()
    })
  },
})
</script>
