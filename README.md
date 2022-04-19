# fe-nicespace

### Install

```
> yarn install
```

### Run dev

- In folder nicespace-fe
```
> yarn nicespace:dev:desktop
> yarn nicespace:dev:mobile
```

- In folder nicespace-fe/nicespace
```
> yarn dev:desktop
> yarn dev:mobile  
```

### Build packages

```
> cd nicespace-fe
> yarn build:packages
```

### Build ui

```
> cd packages/ui
> yarn build
> yarn stub
```

### Import workspace utils to other workspace

```
> lerna add @think/ui nicespace
```

### Add package in root workspace (nicespace-fe)

```
> yarn add vitest -DW
```

### How to commit
 - Use [commitlint](https://github.com/conventional-changelog/commitlint)
```
> git add .
> git commit -m "feat(utils): add lorem function"
> git commit -m "feat(ui): add component t-button"
```
