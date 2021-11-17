<p align="center"><img alt="Icon" width="200" src="https://raw.githubusercontent.com/hack4impact/logger/main/static/images/icon.svg"/></p>

<h1 align="center">Hack4Impact Logger</h1>

<p align="center">
<a href="https://www.npmjs.com/package/@hack4impact/logger"><img src="https://img.shields.io/npm/v/@hack4impact/logger?logo=npm&logoColor=FFFFFF&labelColor=000000&label=Version&style=flat-square" alt="Version"/></a>&nbsp;
<a href="https://www.npmjs.com/package/@hack4impact/logger"><img src="https://img.shields.io/npm/dt/@hack4impact/logger?logo=npm&logoColor=FFFFFF&labelColor=000000&label=Downloads&style=flat-square" alt="Downloads"/></a>&nbsp;
<a href="https://github.com/hack4impact/logger/actions?query=workflow%3A%22Node+CI%22"><img src="https://img.shields.io/github/workflow/status/hack4impact/logger/Node%20CI?logo=github&logoColor=FFFFFF&labelColor=000000&label=Build&style=flat-square" alt="Build"/></a>&nbsp;
<a href="https://codecov.io/gh/hack4impact/logger/"><img src="https://img.shields.io/codecov/c/github/hack4impact/logger?style=flat-square&label=Coverage&logo=Codecov&logoColor=FFFFFF&labelColor=000000" alt="Coverage"/></a>&nbsp;
<a href="https://lgtm.com/projects/g/hack4impact/logger/context:javascript"><img src="https://img.shields.io/lgtm/grade/javascript/github/hack4impact/logger?logo=lgtm&logoColor=FFFFFF&labelColor=000000&label=Code%20Quality&style=flat-square" alt="Code Quality"/></a>
</p>

<p align="center">The <strong>📦 lightweight</strong> & <strong>⚡ lightning-fast</strong> Logger Utility used by <a href="https://hack4impact.org/">Hack4Impact</a> Projects</p>

<p align="center"><strong><a href="https://hack4impact.github.io/logger/">View the website for API documentation and more!</a></strong></p>

## Table of Contents

- [Why should you use Hack4Impact's Logger?](#why-should-you-use-hack4impacts-logger)
- [Installation](#installation)
- [Usage](#usage)
- [Website](#website)
- [Featured Dependents](#featured-dependents)
- [Contributors](#contributors)

## Why should you use Hack4Impact's Logger?

- 🚀 **NO dependencies, <1.1kB size (zipped)**
- ✨ TypeScript definitions **built in**
- 📖 **Thorough** and **detailed** [documentation](https://hack4impact.github.io/logger/docs/classes/logger)
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

You can browse the package's files on [unpkg](https://unpkg.com/browse/@hack4impact/logger/).

## Usage

```javascript
// ESM: import { join } from "path";
const { join } = require("path");

// ESM: import Logger from "@hack4impact/logger";
const Logger = require("@hack4impact/logger");

const outputFile = join(__dirname, "logs.json");

const logger = new Logger({ logsPath: outputFile });

// Log "Hello" an append a created Log object (w/ message, timestamp, index) to the output file
logger.log("Hello");

// Log "Hello" and don't append the Log object to the output file
logger.log("Hello", { writeToFile: false });

// Log "WARNING!" using console.warn and append to the output file
logger.warn("WARNING!");
// ↑ Can also use logger.log("WARNING!", { type: "warn" })

// Log "ERROR!" using console.error and append the created Log object (w/ extra as well) to the output file
logger.error("ERROR!", { extra: "Not logged but written to file" });

// Log a success message using the static method 'success'
Logger.success("It works!");

// The list goes on...

// Refer to the website for a comprehensive list of all methods with examples
```

## Website

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fhack4impact.github.io%2Flogger%2F&style=flat-square&logo=github)](https://hack4impact.github.io/logger/)

**[The website contains all API documentation and information about this package.](https://hack4impact.github.io/logger/)**

## Featured Dependents

If your project uses this package, you can add it to this list by submitting a PR [here](https://github.com/hack4impact/logger/pulls).

| Owner                                                                                                                                                                                                                                                                                          | Repository Information                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <p align="center"><a href="https://github.com/hack4impact"><img width="75" height="75" src="https://raw.githubusercontent.com/hack4impact/logger/main/static/images/hack4impact-icon.png"/></a></p><p align="center">[Hack4Impact](https://github.com/hack4impact)</p>                         | [![Feedback Survey Automation](https://github-readme-stats.vercel.app/api/pin/?username=hack4impact&repo=feedback-survey-automation)](https://github.com/hack4impact/feedback-survey-automation) |
| <p align="center"><a href="https://github.com/hack4impact-calpoly"><img width="75" height="75" src="https://raw.githubusercontent.com/hack4impact/logger/main/static/images/hack4impact-icon.png"/></a></p><p align="center">[Hack4Impact Calpoly](https://github.com/hack4impact-calpoly)</p> | [![Feedback Survey Automation](https://github-readme-stats.vercel.app/api/pin/?username=hack4impact-calpoly&repo=happy-hats)](https://github.com/hack4impact-calpoly/happy-hats)                 |

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
