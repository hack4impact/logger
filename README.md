<p align="center"><img alt="Icon" width="200" src="https://raw.githubusercontent.com/hack4impact/logger/main/static/images/icon.svg"></img></p>

<h1 align="center">Hack4Impact Logger</h1>

<p align="center">The <strong>📦 lightweight</strong> & <strong>⚡ lightning-fast</strong> Logger Utility used by <a href="https://hack4impact.org/">Hack4Impact</a> Projects</p>

<p align="center">(All documentation auto-generated using <a href="https://typedoc.org/">TypeDoc</a>)</p>

## Table of Contents

<!-- toc -->

- [Why should you use Hack4Impact's Logger?](#why-should-you-use-hack4impacts-logger)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
  - [Hierarchy](#hierarchy)
  - [Constructors](#constructors)
  - [Properties](#properties)
  - [Accessors](#accessors)
  - [Methods](#methods)
- [Dependents](#dependents)
- [Contributors](#contributors)

<!-- tocstop -->

## Why should you use Hack4Impact's Logger?

- 🚀 **NO dependencies, <1.1kB size (zipped)**
- ✨ TypeScript definitions **built in**
- 📖 **Thorough** and **detailed** [documentation](https://github.com/hack4impact/logger/tree/main/docs)
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

// Log "Hello" and append it the output file
logger.log("Hello");

// Log "Hello" but don't append it to the output file
logger.log("Hello", false);

// Log "WARNING!" using console.warn and append it the output file
logger.log("WARNING!", true, "warn");

// Log a success message using the static method 'success'
Logger.success("It works!");

// The list goes on...

// Refer to the API documentation for a comprehensive list of all methods
```

## API Documentation

### Hierarchy

- **Logger**

### Constructors

#### constructor

\+ **new Logger**(`logsPath`: _string_): [_Logger_](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

Creates a new Logger instance

**`example`**

```javascript
const logger = new Logger(__dirname + "/logs.json");
```

##### Parameters:

| Name       | Type     | Description          |
| ---------- | -------- | -------------------- |
| `logsPath` | _string_ | The output file path |

**Returns:** [_Logger_](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

Defined in: [index.ts:105](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L105)

### Properties

#### COLORS

▪ `Readonly` `Static` **COLORS**: { `BgBlack`: _string_ = "\x1b[40m"; `BgBlue`: _string_ = "\x1b[44m"; `BgCyan`: _string_ = "\x1b[46m"; `BgGreen`: _string_ = "\x1b[42m"; `BgMagenta`: _string_ = "\x1b[45m"; `BgRed`: _string_ = "\x1b[41m"; `BgWhite`: _string_ = "\x1b[47m"; `BgYellow`: _string_ = "\x1b[43m"; `Blink`: _string_ = "\x1b[5m"; `Bright`: _string_ = "\x1b[1m"; `Dim`: _string_ = "\x1b[2m"; `FgBlack`: _string_ = "\x1b[30m"; `FgBlue`: _string_ = "\x1b[34m"; `FgCyan`: _string_ = "\x1b[36m"; `FgGreen`: _string_ = "\x1b[32m"; `FgMagenta`: _string_ = "\x1b[35m"; `FgRed`: _string_ = "\x1b[31m"; `FgWhite`: _string_ = "\x1b[37m"; `FgYellow`: _string_ = "\x1b[33m"; `Hidden`: _string_ = "\x1b[8m"; `Reset`: _string_ = "\x1b[0m"; `Reverse`: _string_ = "\x1b[7m"; `Underscore`: _string_ = "\x1b[4m" }

ANSI Escape Sequences

**`example`**

```javascript
console.log(Logger.COLORS.Dim + "Dim log" + Logger.COLORS.Reset);
```

##### Type declaration:

| Name         | Type     |
| ------------ | -------- |
| `BgBlack`    | _string_ |
| `BgBlue`     | _string_ |
| `BgCyan`     | _string_ |
| `BgGreen`    | _string_ |
| `BgMagenta`  | _string_ |
| `BgRed`      | _string_ |
| `BgWhite`    | _string_ |
| `BgYellow`   | _string_ |
| `Blink`      | _string_ |
| `Bright`     | _string_ |
| `Dim`        | _string_ |
| `FgBlack`    | _string_ |
| `FgBlue`     | _string_ |
| `FgCyan`     | _string_ |
| `FgGreen`    | _string_ |
| `FgMagenta`  | _string_ |
| `FgRed`      | _string_ |
| `FgWhite`    | _string_ |
| `FgYellow`   | _string_ |
| `Hidden`     | _string_ |
| `Reset`      | _string_ |
| `Reverse`    | _string_ |
| `Underscore` | _string_ |

Defined in: [index.ts:66](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L66)

### Accessors

#### logs

• **logs**(): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)[]

All logs that have been output by this Logger instance

**`example`**

```javascript
const logs = logger.logs;
```

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)[]

Defined in: [index.ts:131](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L131)

---

#### logsPath

• **logsPath**(): _string_

The output file path

**`example`**

```javascript
const logsPath = logger.logsPath;
```

**Returns:** _string_

Defined in: [index.ts:144](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L144)

• **logsPath**(`logsPath`: _string_): _void_

The output file path

**`example`**

```javascript
logger.logsPath = __dirname + "/logs.json";
```

##### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `logsPath` | _string_ |

**Returns:** _void_

Defined in: [index.ts:157](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L157)

### Methods

#### error

▸ **error**(`message`: _unknown_): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Logs an error message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.error("Hello");
```

**`example`**

```javascript
await logger.error(2);
```

**`example`**

```javascript
await logger.error(["hi!", 4, ["nested string"]]);
```

##### Parameters:

| Name      | Type      | Description              |
| --------- | --------- | ------------------------ |
| `message` | _unknown_ | The error message to log |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:496](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L496)

▸ **error**(`message`: _unknown_, `logOptions`: _Pick_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite), _writeToFile_\>): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)

Logs an error message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.error("Hello", {
  writeToFile: false,
});
```

##### Parameters:

| Name         | Type                                                                                                                                        | Description              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `message`    | _unknown_                                                                                                                                   | The error message to log |
| `logOptions` | _Pick_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite), _writeToFile_\> | Logging options          |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:510](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L510)

▸ **error**(`message`: _unknown_, `logOptions`: _Pick_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite), _writeToFile_ \| _extra_\>): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)\>

Logs an error message to the console and writes to the output file path

**`example`**

```javascript
await logger.error("Hello", {
  writeToFile: true,
});
```

**`example`**

```javascript
await logger.error(32, {
  writeToFile: true,
  extra: "this part is not logged",
});
```

##### Parameters:

| Name         | Type                                                                                                                                             | Description              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `message`    | _unknown_                                                                                                                                        | The error message to log |
| `logOptions` | _Pick_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite), _writeToFile_ \| _extra_\> | Logging options          |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)\>

Defined in: [index.ts:534](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L534)

---

#### info

▸ **info**(`message`: _unknown_): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Logs an info message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.info("Hello");
```

**`example`**

```javascript
await logger.info(2);
```

**`example`**

```javascript
await logger.info(["hi!", 4, ["nested string"]]);
```

##### Parameters:

| Name      | Type      | Description             |
| --------- | --------- | ----------------------- |
| `message` | _unknown_ | The info message to log |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:350](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L350)

▸ **info**(`message`: _unknown_, `logOptions`: _Pick_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite), _writeToFile_\>): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)

Logs an info message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.info("Hello", {
  writeToFile: false,
});
```

##### Parameters:

| Name         | Type                                                                                                                                        | Description             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `message`    | _unknown_                                                                                                                                   | The info message to log |
| `logOptions` | _Pick_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite), _writeToFile_\> | Logging options         |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:364](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L364)

▸ **info**(`message`: _unknown_, `logOptions`: _Pick_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite), _writeToFile_ \| _extra_\>): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)\>

Logs an info message to the console and writes to the output file path

**`example`**

```javascript
await logger.info("Hello", {
  writeToFile: true,
});
```

**`example`**

```javascript
await logger.info(32, {
  writeToFile: true,
  extra: "this part is not logged",
});
```

##### Parameters:

| Name         | Type                                                                                                                                             | Description             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| `message`    | _unknown_                                                                                                                                        | The info message to log |
| `logOptions` | _Pick_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite), _writeToFile_ \| _extra_\> | Logging options         |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)\>

Defined in: [index.ts:388](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L388)

---

#### log

▸ **log**(`message`: _unknown_): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Logs a message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.log("Hello");
```

**`example`**

```javascript
await logger.log(2);
```

**`example`**

```javascript
await logger.log(["hi!", 4, ["nested string"]]);
```

##### Parameters:

| Name      | Type      | Description        |
| --------- | --------- | ------------------ |
| `message` | _unknown_ | The message to log |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:179](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L179)

▸ **log**(`message`: _unknown_, `logOptions`: [_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite)): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)

Logs a message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.log(31, {
  writeToFile: false,
});
```

**`example`**

```javascript
await logger.log("Hello", {
  writeToFile: false,
  type: "error",
});
```

##### Parameters:

| Name         | Type                                                                                                                | Description        |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `message`    | _unknown_                                                                                                           | The message to log |
| `logOptions` | [_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite) | Logging options    |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:200](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L200)

▸ **log**(`message`: _unknown_, `logOptions`: [_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite)): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)\>

Logs a message to the console and writes to the output file path

**`example`**

```javascript
await logger.log("Hello", {
  writeToFile: true,
});
```

**`example`**

```javascript
await logger.log(["hi", "hello"], {
  writeToFile: true,
  type: "success",
});
```

**`example`**

```javascript
await logger.log(32, {
  writeToFile: true,
  type: "info",
  extra: "this part is not logged",
});
```

##### Parameters:

| Name         | Type                                                                                                          | Description        |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ------------------ |
| `message`    | _unknown_                                                                                                     | The message to log |
| `logOptions` | [_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite) | Logging options    |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)\>

Defined in: [index.ts:229](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L229)

---

#### success

▸ **success**(`message`: _unknown_): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Logs a success message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.success("Hello");
```

**`example`**

```javascript
await logger.success(2);
```

**`example`**

```javascript
await logger.success(["hi!", 4, ["nested string"]]);
```

##### Parameters:

| Name      | Type      | Description                |
| --------- | --------- | -------------------------- |
| `message` | _unknown_ | The success message to log |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:277](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L277)

▸ **success**(`message`: _unknown_, `logOptions`: _Pick_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite), _writeToFile_\>): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)

Logs a success message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.success("Hello", {
  writeToFile: false,
});
```

##### Parameters:

| Name         | Type                                                                                                                                        | Description                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `message`    | _unknown_                                                                                                                                   | The success message to log |
| `logOptions` | _Pick_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite), _writeToFile_\> | Logging options            |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:291](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L291)

▸ **success**(`message`: _unknown_, `logOptions`: _Pick_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite), _writeToFile_ \| _extra_\>): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)\>

Logs a success message to the console and writes to the output file path

**`example`**

```javascript
await logger.success("Hello", {
  writeToFile: true,
});
```

**`example`**

```javascript
await logger.success(32, {
  writeToFile: true,
  extra: "this part is not logged",
});
```

##### Parameters:

| Name         | Type                                                                                                                                             | Description                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `message`    | _unknown_                                                                                                                                        | The success message to log |
| `logOptions` | _Pick_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite), _writeToFile_ \| _extra_\> | Logging options            |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)\>

Defined in: [index.ts:315](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L315)

---

#### warn

▸ **warn**(`message`: _unknown_): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Logs a warning message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.warn("Hello");
```

**`example`**

```javascript
await logger.warn(2);
```

**`example`**

```javascript
await logger.warn(["hi!", 4, ["nested string"]]);
```

##### Parameters:

| Name      | Type      | Description             |
| --------- | --------- | ----------------------- |
| `message` | _unknown_ | The warn message to log |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:423](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L423)

▸ **warn**(`message`: _unknown_, `logOptions`: _Pick_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite), _writeToFile_\>): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)

Logs a warning message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.warn("Hello", {
  writeToFile: false,
});
```

##### Parameters:

| Name         | Type                                                                                                                                        | Description                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `message`    | _unknown_                                                                                                                                   | The warning message to log |
| `logOptions` | _Pick_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithoutwrite), _writeToFile_\> | Logging options            |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)

Defined in: [index.ts:437](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L437)

▸ **warn**(`message`: _unknown_, `logOptions`: _Pick_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite), _writeToFile_ \| _extra_\>): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)\>

Logs a warning message to the console and writes to the output file path

**`example`**

```javascript
await logger.warn("Hello", {
  writeToFile: true,
});
```

**`example`**

```javascript
await logger.warn(32, {
  writeToFile: true,
  extra: "this part is not logged",
});
```

##### Parameters:

| Name         | Type                                                                                                                                             | Description                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `message`    | _unknown_                                                                                                                                        | The warning message to log |
| `logOptions` | _Pick_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##logoptionswithwrite), _writeToFile_ \| _extra_\> | Logging options            |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/modules.md##log)\>

Defined in: [index.ts:461](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L461)

---

#### bold

▸ `Static`**bold**(`message`: _unknown_, `afterColored?`: _string_): _void_

Logs a bold message

**`example`**

```javascript
Logger.bold("BOLD!");
```

**`example`**

```javascript
Logger.bold("BOLD!", "this part is not bold");
```

##### Parameters:

| Name           | Type      | Default value | Description                                                    |
| -------------- | --------- | ------------- | -------------------------------------------------------------- |
| `message`      | _unknown_ | -             | The bold message to log                                        |
| `afterColored` | _string_  | ""            | The optional message after the bold message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:643](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L643)

---

#### coloredLog

▸ `Static`**coloredLog**(`color`: _Reset_ \| _Bright_ \| _Dim_ \| _Underscore_ \| _Blink_ \| _Reverse_ \| _Hidden_ \| _FgBlack_ \| _FgRed_ \| _FgGreen_ \| _FgYellow_ \| _FgBlue_ \| _FgMagenta_ \| _FgCyan_ \| _FgWhite_ \| _BgBlack_ \| _BgRed_ \| _BgGreen_ \| _BgYellow_ \| _BgBlue_ \| _BgMagenta_ \| _BgCyan_ \| _BgWhite_, `message`: _unknown_, `afterColored?`: _string_, `consoleLevel?`: _log_ \| _warn_ \| _error_): _void_

Logs a colored message to the console

**`example`**

```javascript
Logger.coloredLog("BgBlue", "hi");
```

**`example`**

```javascript
Logger.coloredLog("FgYellow", "hi", "this string will not be colored");
```

**`example`**

```javascript
Logger.coloredLog("FgRed", "error!!!", "not colored", "error");
```

##### Parameters:

| Name           | Type                                                                                                                                                                                                                                                                                           | Default value | Description                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| `color`        | _Reset_ \| _Bright_ \| _Dim_ \| _Underscore_ \| _Blink_ \| _Reverse_ \| _Hidden_ \| _FgBlack_ \| _FgRed_ \| _FgGreen_ \| _FgYellow_ \| _FgBlue_ \| _FgMagenta_ \| _FgCyan_ \| _FgWhite_ \| _BgBlack_ \| _BgRed_ \| _BgGreen_ \| _BgYellow_ \| _BgBlue_ \| _BgMagenta_ \| _BgCyan_ \| _BgWhite_ | -             | The color to log in                                               |
| `message`      | _unknown_                                                                                                                                                                                                                                                                                      | -             | The message to log                                                |
| `afterColored` | _string_                                                                                                                                                                                                                                                                                       | ""            | The optional message after the colored message (on the same line) |
| `consoleLevel` | _log_ \| _warn_ \| _error_                                                                                                                                                                                                                                                                     | "log"         | The console level to use (log, warn, or error)                    |

**Returns:** _void_

Defined in: [index.ts:617](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L617)

---

#### error

▸ `Static`**error**(`message`: _unknown_, `afterColored?`: _string_): _void_

Logs an error message in red

**`example`**

```javascript
Logger.error("ERROR!");
```

**`example`**

```javascript
Logger.error("ERROR!", "this part is not red");
```

##### Parameters:

| Name           | Type      | Default value | Description                                                     |
| -------------- | --------- | ------------- | --------------------------------------------------------------- |
| `message`      | _unknown_ | -             | The error message to log                                        |
| `afterColored` | _string_  | ""            | The optional message after the error message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:719](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L719)

---

#### info

▸ `Static`**info**(`message`: _unknown_, `afterColored?`: _string_): _void_

Logs an info message in blue

**`example`**

```javascript
Logger.info("information...");
```

**`example`**

```javascript
Logger.info("information...", "this part is not blue");
```

##### Parameters:

| Name           | Type      | Default value | Description                                                    |
| -------------- | --------- | ------------- | -------------------------------------------------------------- |
| `message`      | _unknown_ | -             | The info message to log                                        |
| `afterColored` | _string_  | ""            | The optional message after the info message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:681](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L681)

---

#### line

▸ `Static`**line**(): _void_

Logs an empty line to the console

**`example`**

```javascript
Logger.line();
```

**Returns:** _void_

Defined in: [index.ts:592](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L592)

---

#### log

▸ `Static`**log**(`message?`: _unknown_, ...`optionalParams`: _any_[]): _void_

Logs to the console

**`example`**

```javascript
Logger.log("hi");
```

**`example`**

```javascript
Logger.log("hi %s", "Bill");
```

##### Parameters:

| Name                | Type      | Description          |
| ------------------- | --------- | -------------------- |
| `message?`          | _unknown_ | The message to log   |
| `...optionalParams` | _any_[]   | Substitution strings |

**Returns:** _void_

Defined in: [index.ts:579](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L579)

---

#### success

▸ `Static`**success**(`message`: _unknown_, `afterColored?`: _string_): _void_

Logs a success message in green

**`example`**

```javascript
Logger.success("SUCCESS!");
```

**`example`**

```javascript
Logger.success("SUCCESS!", "this part is not green");
```

##### Parameters:

| Name           | Type      | Default value | Description                                                       |
| -------------- | --------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _unknown_ | -             | The success message to log                                        |
| `afterColored` | _string_  | ""            | The optional message after the success message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:662](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L662)

---

#### warn

▸ `Static`**warn**(`message`: _unknown_, `afterColored?`: _string_): _void_

Logs a warning message in yellow

**`example`**

```javascript
Logger.warn("WARNING!");
```

**`example`**

```javascript
Logger.warn("WARNING!", "this part is not yellow");
```

##### Parameters:

| Name           | Type      | Default value | Description                                                       |
| -------------- | --------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _unknown_ | -             | The warning message to log                                        |
| `afterColored` | _string_  | ""            | The optional message after the warning message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:700](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts##L700)

## Dependents

If your project uses this package, you can add it to this list by submitting a PR [here](https://github.com/hack4impact/logger/pulls).

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=hack4impact&repo=airtable-automation&show_owner=true)](https://github.com/hack4impact/airtable-automation)

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
