export const plugin = [
  'import',
  {
    libraryName: '@think/ui',
    customName(name: string) {
      return '@think/ui/lib/' + name.substr(2)
    },
  },
]
