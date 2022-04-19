import Vue from 'vue'
import { TButton } from './button'
import { TInput } from './input'
import { TTag } from './tag'

const install = (app: typeof Vue) => {
  app.component('TButton', TButton)
  app.component('TInput', TInput)
  app.component('TTag', TTag)
}

export default { install }

export { TButton, TInput, TTag }
