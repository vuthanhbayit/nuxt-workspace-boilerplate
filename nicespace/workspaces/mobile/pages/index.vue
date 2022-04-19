<template>
  <div>
    <the-header></the-header>
    <t-base></t-base>
    <t-button size="lg">button</t-button>
    <t-tag size="md">tag</t-tag>
    <t-tag>tag 2</t-tag>
  </div>
</template>

<script lang="ts">
import {onMounted, defineComponent} from "@nuxtjs/composition-api";
import {sleep} from "@think/utils";
import TBase from "@base/t-base.vue";
import TheHeader from "@root/components/the-header.vue";
import {useValue} from "@@/composables";

export default defineComponent({
  name: 'IndexPage',
  components: {TheHeader, TBase},
  setup() {
    onMounted(async () => {
      await sleep(1000)
      console.log('1000')
      await sleep(1000)
      console.log('1000')
      await sleep(1000)
      console.log('1000')
      useValue()
    })
  }
})
</script>
