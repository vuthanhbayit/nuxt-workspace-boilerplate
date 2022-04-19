import { Module } from '@nuxt/types'
import { plugin } from './babel'

const module: Module<never> = function () {
  if (!this.options.build.babel) {
    this.options.build.babel = {
      plugins: [],
    }
  }

  // @ts-ignore
  this.options.build.babel.plugins!.push(plugin)
}

export default module
