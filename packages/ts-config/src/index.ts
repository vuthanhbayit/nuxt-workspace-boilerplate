import { promises as fsp } from 'fs'
import { relative, resolve, dirname, join } from 'pathe'
import consola from 'consola'
import defu from 'defu'
import type { Module } from '@nuxt/types'
import type { TSConfig } from 'pkg-types'
// @ts-ignore
import { name, version } from '../package.json'

const meta = { name, version }

declare module '@nuxt/types' {
  interface NuxtOptions {
    tsConfig: TSConfig
  }
}

const tsConfig: TSConfig = {
  compilerOptions: {
    paths: {},
  },
}

const getAppRoot = () => {
  // @ts-ignore
  const fullPath = dirname(require.main.filename)
  const regexResp = /^(.*?)node_modules/.exec(fullPath)
  const appRoot = regexResp ? regexResp[1] : fullPath

  return appRoot
}

const generateTsConfig: Module<TSConfig> = async function (moduleOptions) {
  const rootDir = this.options.rootDir
  const aliases = this.options.alias
  const appRoot = getAppRoot()
  const workspace = rootDir.replace(appRoot, '')

  const options: TSConfig = defu(
    {},
    tsConfig,
    moduleOptions,
    this.options.tsConfig
  )

  for (const alias in aliases) {
    if (['~~', '~', '@@'].includes(alias)) {
      continue
    }

    const relativePath =
      relative(rootDir, aliases[alias]).replace(
        /(?<=\w)\.\w+$/g,
        ''
      ) /* remove extension */ || '.'

    try {
      const { isDirectory } = await fsp.stat(resolve(rootDir, relativePath))

      // @ts-ignore
      if (isDirectory && options.compilerOptions) {
        options.compilerOptions.paths[`${alias}/*`] = [
          `${join(workspace, relativePath)}/*`,
        ]
      }
    } catch {}
  }

  await this.nuxt.hook('modules:before')

  const tsConfigPath = resolve(appRoot, 'tsconfig-paths.json')

  // await fsp.mkdir(this.options.buildDir, { recursive: true })
  await fsp.writeFile(tsConfigPath, JSON.stringify(options, null, 2))

  consola.success('Generated tsconfig-paths.json')
}

// @ts-ignore
generateTsConfig.meta = meta
export default generateTsConfig
