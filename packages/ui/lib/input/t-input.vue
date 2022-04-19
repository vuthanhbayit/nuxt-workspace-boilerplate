<template>
  <input type="text" class="t-input" />
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    size: {
      type: String,
      default: 'md',
    },
  },
})
</script>

<style lang="postcss">
.t-input {
  @apply p-4 bg-gray-200;
}
</style>
