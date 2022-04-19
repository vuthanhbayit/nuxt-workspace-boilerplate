<template>
  <div>
    <span v-if="dot">
      <span v-if="ping"></span>
      <span></span>
    </span>

    <span v-else-if="!hidden && value" v-text="value"></span>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type Color = 'primary' | 'warning'

export default defineComponent({
  props: {
    bottom: {
      type: [String, Number],
      default: null,
    },
    color: {
      type: String as PropType<Color>,
      default: 'primary',
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    dot: {
      type: Boolean,
      default: false,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    left: {
      type: [String, Number],
      default: null,
    },
    ping: {
      type: Boolean,
      default: false,
    },
    right: {
      type: [String, Number],
      default: null,
    },
    top: {
      type: [String, Number],
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
})
</script>

<style lang="postcss">
.t-badge {
  --badge-content-size: 16px;
  display: inline-block;

  --badge-dot-size: 6px;
  vertical-align: middle;

  &.t-badge--fixed {
    position: relative;
  }

  .t-badge--warning & {
  }
}

.t-badge__dot-wrapper {
  @apply absolute top-0 right-0;
  @apply flex;

  height: var(--badge-dot-size);
  width: var(--badge-dot-size);
}

.t-badge__ping {
  @apply absolute inline-flex;
  @apply h-full w-full rounded-full;
}

.t-badge__dot {
  @apply relative inline-flex rounded-full;

  height: var(--badge-dot-size);
  width: var(--badge-dot-size);

  .t-badge--primary & {
  }

  .t-badge--warning & {
  }
}

.t-badge__content {
  @apply block text-white;
  @apply border border-white;

  border-radius: var(--badge-content-size);
  box-sizing: border-box;
  font-size: 10px;

  font-weight: 800;
  line-height: var(--badge-content-size);
  min-width: calc(var(--badge-content-size) + 2px);
  padding: 0 3px;
  text-align: center;

  .t-badge--fixed & {
    @apply absolute top-1 right-0;

    transform: translate(50%, -50%);
    transform-origin: 100%;
  }

  .t-badge--primary & {
  }

  .t-badge--warning & {
  }
}
</style>
