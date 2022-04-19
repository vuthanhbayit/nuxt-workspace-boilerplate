import { resolve } from 'path'
import { defu } from 'defu'
import nuxtConfigBase from '../../nuxt.config.base'

export default defu(nuxtConfigBase, {
  srcDir: __dirname,
  buildDir: 'workspaces/mobile/.nuxt',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/ui.ts'],

  alias: {
    '@base': resolve(__dirname, './components/base'),
    '@root': resolve(__dirname, '../..'),
  },

  tsConfig: {
    exclude: ['nicespace/workspaces/desktop'],
  },
})
