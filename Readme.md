## Typescript Project Configuration

```
npm init -y
```

```
npx tsc --init
```

- Create tsconfig.json file in the root of your project. This file will contain the configuration settings for the TypeScript compiler and paste the following code into it:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

```

- project structure
  project/
  ├── src/ // Source code
  │ ├── index.ts // Entry point
  │ └── utils.ts // Example module
  ├── dist/ // Compiled JavaScript output
  ├── node_modules/ // Dependencies
  ├── tsconfig.json // TypeScript configuration
  └── package.json // Project dependencies and scripts

---

- Install TypeScript and any required packages:

```
npm install typescript --save-dev
```

- Update the scripts section in your package.json

```
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

- Run the Compiler

```
npm run build
```
