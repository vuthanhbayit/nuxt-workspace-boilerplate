<template>
  <button :size="size" class="t-button">
    <slot></slot>
  </button>
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
.t-button {
  @apply text-white bg-primary-500;
}
</style>
