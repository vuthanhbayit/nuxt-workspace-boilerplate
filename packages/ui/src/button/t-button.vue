<template>
  <button :size="size" class="t-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

type ButtonSize = 'sm' | 'md' | 'lg'

export default defineComponent({
  props: {
    size: {
      type: String as PropType<ButtonSize>,
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
