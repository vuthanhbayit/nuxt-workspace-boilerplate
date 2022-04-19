<template>
  <span :size="size" class="t-tag">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

type ButtonSize = 'sm' | 'md' | 'lg'

export default defineComponent({
  props: {
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md'
    }
  }
})
</script>

<style lang="postcss">
.t-tag {
  @apply text-white bg-primary-500;
}
</style>

