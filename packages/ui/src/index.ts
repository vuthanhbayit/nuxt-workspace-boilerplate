import Vue from 'vue'
import TButton from './button'
import TInput from './input'
import TTag from './tag'
import TToast from './toast'
import TAlert from './alert'
import TBadge from './badge'

const install = (app: typeof Vue) => {
  app.component('TButton', TButton)
  app.component('TInput', TInput)
  app.component('TTag', TTag)
  app.component('TToast', TToast)
  app.component('TAlert', TAlert)
  app.component('TBadge', TBadge)
}

export default { install }

export { TButton, TInput, TTag, TToast, TAlert, TBadge }
