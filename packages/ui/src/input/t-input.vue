<template>
  <input type="text" class="t-input" />
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
.t-input {
  @apply p-4 bg-gray-200;
}
</style>
