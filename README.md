# Typescript Starter

This source is designed to help developers that using TypeScript language and Visual Studio Code.

## Features

-  Logging system
-  Environment system

## Included External Packages

\*_You can remove these packages if you don't want to use them._

-  `eslint`
-  `prettier`
-  `concurrently`
   -  _If you remove this package(`concurrently`), you will need to remove other external packages or edit the script that the package uses in `package.json`_

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

#### Fix bla bla...

```
npm run fix
```

-  Use the packages specificaly

   -  Use `prettier` package

   ```
   npm run fix:prettier
   ```

   -  Use `eslint` package

   ```
   npm run fix:eslint
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
