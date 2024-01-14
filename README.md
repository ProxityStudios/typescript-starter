# Typescript Starter

This source is designed to prevent developers from doing things over and over again. 

## Features

-  Logging system
-  Environment system

## Included Packages

-  `yargs`
-  `dotenv`
-  `tslog`

## Included Dev Packages

- `@types/node`
- `@types/yargs`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-airbnb-base`
- `eslint-config-airbnb-typescript`
- `eslint-config-prettier`
- `eslint-formatter-pretty`
- `eslint-plugin-eslint-comments`
- `eslint-plugin-import`
- `eslint-plugin-prettier`
- `eslint-plugin-promise`
- `eslint-plugin-unicorn`
- `npm-run-all`
- `prettier`
- `rimraf`
- `ts-node-dev`
- `typescript`

## Recommended Extensions

We recommend installing these recommended extensions by us.

-  Extension `prettier` (`esbenp.prettier-vscode`)
-  Extension `todo highlight` (`wayou.vscode-todo-highlight`)
-  Extension `eslint` (`dbaeumer.vscode-eslint`)

## Scripts

#### <a href="#installscript"></a> Install dependencies **_(important)_**

```
npm run install
```

#### <a href="#start"></a> Start the project from bundle/build. You must bundle/build the project using `npm run build` script for production before using the command.

```
npm run start
```

#### <a href="#startdevelopment"></a> Start the project in development environment

```
npm run dev
```

#### <a href="#build"></a> Build the project to be used in production

```
npm run build
```

#### Clean compiled code

```
npm run clean
```

#### Fix eslint & prettier errors

```
npm run fix
```

## Guides

### Setup Guide

1. Install the dependencies by using [this](#installscript) script
2. Rename the `.env example` file to `.env`
3. Start the development environment by using [this](#startdevelopment) script
4. Code somethings...

#### Production Usage

1. Build the project by using [this](#build) script
2. Rename the `.env.production example` file to `.env.production`
3. Start the project by using [this](#start) script

### `TODO Highlighting` Extension Guide

If you installed the "TODO Highlighting" extension,
you can use the these prefixes:

-  `TODO:` Something that should be done.
-  `BUG:` Use this prefix if you write something about the bug.
-  `REVIEW:` Something that should be reviewed.
-  `NOTE:` Something that should be noted.

## License

This project licensed with `MIT` license
