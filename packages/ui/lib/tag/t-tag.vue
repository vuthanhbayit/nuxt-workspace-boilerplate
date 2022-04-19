<template>
  <span :size="size" class="t-tag">
    <slot></slot>
  </span>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  props: {
    size: {
      type: String,
      default: "md"
    }
  }
});
</script>

<style lang="postcss">
.t-tag {
  @apply text-white bg-primary-500;
}
</style>

