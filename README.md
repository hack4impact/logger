<p align="center"><img alt="Icon" width="200" src="https://raw.githubusercontent.com/hack4impact/logger/main/static/images/icon.svg"></img></p>

<h1 align="center">Hack4Impact Logger</h1>

<p align="center">The <strong>📦 lightweight</strong> & <strong>⚡ lightning-fast</strong> Logger Utility used by <a href="https://hack4impact.org/">Hack4Impact</a> Projects</p>

<p align="center"><strong><a href="https://hack4impact.github.io/logger/">View the website for API documentation and more!</a></strong></p>

## Table of Contents

- [Why should you use Hack4Impact's Logger?](#why-should-you-use-hack4impacts-logger)
- [Installation](#installation)
- [Usage](#usage)
- [Website](#website)
- [Dependents](#dependents)
- [Contributors](#contributors)

## Why should you use Hack4Impact's Logger?

- 🚀 **NO dependencies, <1.1kB size (zipped)**
- ✨ TypeScript definitions **built in**
- 📖 **Thorough** and **detailed** [documentation](https://hack4impact.github.io/logger/)
- ✅ Tested **end-to-end** with Jest
- 🌟 Code quality **perfected** with linters ([Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [EditorConfig](https://editorconfig.org/), [Markdownlint](https://github.com/DavidAnson/markdownlint)) to reduce **bundle size** and ensure **bug-free code**
- 💫 Automated [GitHub Workflows](https://github.com/hack4impact/logger/actions?query=workflow%3A%22Node+CI%22) ensure that every change is **high quality** and **functional**

## Installation

Using [npm](https://www.npmjs.com):

```shell
npm install @hack4impact/logger
```

Using [yarn](https://yarnpkg.com/):

```shell
yarn add @hack4impact/logger
```

## Usage

```javascript
// ESM: import { join } from "path";
const { join } = require("path");

// ESM: import Logger from "@hack4impact/logger";
const Logger = require("@hack4impact/logger");

const logger = new Logger(join(__dirname, "logs.json"));

// Log "Hello" (DOES NOT append to the output file)
logger.log("Hello");

// Log "Hello" and append it to the output file
logger.log("Hello", { writeToFile: true });

// Log "WARNING!" using console.warn and append it the output file
logger.log("WARNING!", { type: "warn" });

// Log a success message using the static method 'success'
Logger.success("It works!");

// The list goes on...

// Refer to the website for a comprehensive list of all methods with examples
```

## Website

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fhack4impact.github.io%2Flogger%2F&style=flat-square&logo=github)](https://hack4impact.github.io/logger/)

**[The website contains all API documentation and information about this package.](https://hack4impact.github.io/logger/)**

## Dependents

If your project uses this package, you can add it to this list by submitting a PR [here](https://github.com/hack4impact/logger/pulls).

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=hack4impact&repo=feedback-survey-automation&show_owner=true)](https://github.com/hack4impact/feedback-survey-automation)

## Contributors

Project Contributors ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/YashTotale"><img src="https://avatars.githubusercontent.com/u/30784592?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yash Totale</b></sub></a><br /><a href="https://github.com/hack4impact/logger/commits?author=YashTotale" title="Code">💻</a> <a href="#ideas-YashTotale" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/hack4impact/logger/commits?author=YashTotale" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
