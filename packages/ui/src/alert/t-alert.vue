<template>
  <div>
    <div>
      <div v-if="icon">
        <svg-icon
          v-if="icon"
          :class="COLORS[color].icon"
          :name="icon"
          :width="iconSize"
          :height="iconSize"
        ></svg-icon>
      </div>

      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'

const COLORS = {
  default: { background: 'bg-gray-40', icon: 'text-black' },
  green: { background: 'bg-tint-green', icon: 'text-green' },
  yellow: { background: 'bg-tint-yellow', icon: 'text-red-orange' },
  pink: { background: 'bg-tint-pink', icon: 'text-pink' },
  blue: { background: 'bg-tint-blue-sky', icon: 'text-medium-blue' },
  gray: { background: 'bg-gray-50', icon: 'text-black' },
  orange: { background: 'bg-tint-orange', icon: 'text-light-magenta' },
}

type Color =
  | 'default'
  | 'green'
  | 'yellow'
  | 'pink'
  | 'blue'
  | 'gray'
  | 'orange'

export default defineComponent({
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'default',
    },
    dense: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: [String, Boolean],
      default: null,
    },
    iconSize: {
      type: [Number, String],
      default: 24,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const direction = computed(() => {
      return props.vertical ? 'vertical' : 'horizontal'
    })

    return { direction, COLORS }
  },
})
</script>

<style lang="postcss">
.t-alert {
  @apply px-4 py-3;

  &.t-alert--dense {
    @apply px-3 py-2;
  }

  &.t-alert--rounded {
    @apply rounded-lg;
  }
}

.t-alert__content {
  @apply flex;
}

.t-alert__content--vertical {
  @apply flex-col items-start space-y-3;
}

.t-alert__content--horizontal {
  @apply flex-row items-center space-x-3;
}
</style>
