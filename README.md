# Typescript Starter

This source is designed to help developers that using TypeScript language and Visual Studio Codeww.

## Features

- Logging system
- Environment system

## Included External Packages

*_You can remove these packages if you don't want to use them._

- `eslint`
- `prettier`
- `concurrently` 
    * _If you remove this package(`concurrently`), you will need to remove other external packages or edit the script that the package uses in `package.json`_

## Extension Recommendations

We recommend installing these recommended extensions by us.

- Extension `prettier` (`esbenp.prettier-vscode`)
- Extension `todo highlight` (`wayou.vscode-todo-highlight`)
- Extension `eslint` (`dbaeumer.vscode-eslint`)

## Scripts

#### Install dependencies **_(important)_**

```
npm run install
```

#### Start the project from bundle/build. You can bundle/build the project using `npm run build` script for production.

```
npm run start
```

#### Start the project in development environment

```
npm run dev
```

#### Fix bla bla...

```
npm run fix
```

- Use the packages specificaly 
    - Use `prettier` package

    ```
    npm run fix:prettier
    ```

    -  Use `eslint` package

    ```
    npm run fix:eslint
    ```

#### Build the project to be used on production

```
npm run build
```

## Guides

### `TODO Highlighting` Extension Guide

If you installed the "TODO Highlighting" extension,
you can use the these prefixes:

- `TODO:` Something that should be done.
- `BUG:` Use this prefix if you write something about the bug.
- `REVIEW:` Something that should be reviewed.
- `NOTE:` Something that should be noted.

## License

This project licensed with `MIT` license
