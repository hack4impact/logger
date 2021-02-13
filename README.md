<p align="center"><img alt="Icon" width="200" src="https://raw.githubusercontent.com/hack4impact/logger/main/static/images/icon.svg"></img></p>

<h1 align="center">Hack4Impact Logger</h1>

<p align="center">The <strong>📦 lightweight</strong> & <strong>⚡ lightning-fast</strong> Logger Utility used by <a href="https://hack4impact.org/">Hack4Impact</a> Projects</p>

<p align="center">(All documentation auto-generated using <a href="https://typedoc.org/">TypeDoc</a>)</p>

## Table of Contents

<!-- toc -->

- [Why should you use Hack4Impact's Logger?](#why-should-you-use-hack4impacts-logger)
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
- 🌟 Code quality **perfected** with linters ([Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [EditorConfig](https://editorconfig.org/), [Markdownlint](https://github.com/DavidAnson/markdownlint)) to reduce bundle size and ensure bug-free code
- 💫 Automated [GitHub Workflows](https://github.com/hack4impact/logger/actions?query=workflow%3A%22Node+CI%22) ensuring that every change is **high quality** and **functional**

## API Documentation

### Hierarchy

- **Logger**

### Constructors

#### constructor

\+ **new Logger**(`logsPath`: _string_): [_Logger_](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

Creates a new Logger instance

**`example`**

```javascript
const logger = new Logger(__dirname + "logs.json");
```

##### Parameters:

| Name       | Type     | Description          |
| ---------- | -------- | -------------------- |
| `logsPath` | _string_ | The output file path |

**Returns:** [_Logger_](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

Defined in: [index.ts:73](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L73)

### Properties

#### COLORS

▪ `Readonly` `Static` **COLORS**: { `BgBlack`: _string_ = "\x1b[40m"; `BgBlue`: _string_ = "\x1b[44m"; `BgCyan`: _string_ = "\x1b[46m"; `BgGreen`: _string_ = "\x1b[42m"; `BgMagenta`: _string_ = "\x1b[45m"; `BgRed`: _string_ = "\x1b[41m"; `BgWhite`: _string_ = "\x1b[47m"; `BgYellow`: _string_ = "\x1b[43m"; `Blink`: _string_ = "\x1b[5m"; `Bright`: _string_ = "\x1b[1m"; `Dim`: _string_ = "\x1b[2m"; `FgBlack`: _string_ = "\x1b[30m"; `FgBlue`: _string_ = "\x1b[34m"; `FgCyan`: _string_ = "\x1b[36m"; `FgGreen`: _string_ = "\x1b[32m"; `FgMagenta`: _string_ = "\x1b[35m"; `FgRed`: _string_ = "\x1b[31m"; `FgWhite`: _string_ = "\x1b[37m"; `FgYellow`: _string_ = "\x1b[33m"; `Hidden`: _string_ = "\x1b[8m"; `Reset`: _string_ = "\x1b[0m"; `Reverse`: _string_ = "\x1b[7m"; `Underscore`: _string_ = "\x1b[4m" }

ANSI Escape Codes

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

Defined in: [index.ts:34](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L34)

### Accessors

#### logs

• **logs**(): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)[]

All logs that have been output by this Logger instance

**`example`**

```javascript
const logs = logger.logs;
```

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)[]

Defined in: [index.ts:99](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L99)

---

#### logsPath

• **logsPath**(): _string_

The output file path

**`example`**

```javascript
const logsPath = logger.logsPath;
```

**Returns:** _string_

Defined in: [index.ts:112](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L112)

• **logsPath**(`logsPath`: _string_): _void_

The output file path

**`example`**

```javascript
logger.logsPath = __dirname + "logs.json";
```

##### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `logsPath` | _string_ |

**Returns:** _void_

Defined in: [index.ts:125](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L125)

### Methods

#### log

▸ **log**(`message`: _any_): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Logs a message to the console and writes to the output file path

**`example`**

```javascript
await logger.log("hi");
```

##### Parameters:

| Name      | Type  | Description        |
| --------- | ----- | ------------------ |
| `message` | _any_ | The message to log |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Defined in: [index.ts:139](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L139)

▸ **log**(`message`: _any_, `writeToFile`: _true_, `type?`: _success_ \| _info_ \| _error_ \| _warn_, `extra?`: _unknown_): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Logs a message to the console and writes to the output file path

**`example`**

```javascript
await logger.log("hi", true);
```

**`example`**

```javascript
await logger.log("hi", true, "info");
```

**`example`**

```javascript
await logger.log("hi", true, "success", "extra info that is not logged");
```

##### Parameters:

| Name          | Type                                     | Description                                             |
| ------------- | ---------------------------------------- | ------------------------------------------------------- |
| `message`     | _any_                                    | The message to log                                      |
| `writeToFile` | _true_                                   | Should write to file                                    |
| `type?`       | _success_ \| _info_ \| _error_ \| _warn_ | The type of log                                         |
| `extra?`      | _unknown_                                | Extra information to write to file (will not be logged) |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Defined in: [index.ts:161](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L161)

▸ **log**(`message`: _any_, `writeToFile`: _false_, `type?`: _success_ \| _info_ \| _error_ \| _warn_): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

Logs a message to the console

**`example`**

```javascript
logger.log("hi", false);
```

**`example`**

```javascript
logger.log("hi", false, "info");
```

##### Parameters:

| Name          | Type                                     | Description          |
| ------------- | ---------------------------------------- | -------------------- |
| `message`     | _any_                                    | The message to log   |
| `writeToFile` | _false_                                  | Should write to file |
| `type?`       | _success_ \| _info_ \| _error_ \| _warn_ | The type of log      |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

Defined in: [index.ts:183](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L183)

---

#### bold

▸ `Static`**bold**(`message`: _any_, `afterColored?`: _string_): _void_

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

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:300](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L300)

---

#### coloredLog

▸ `Static`**coloredLog**(`color`: _Reset_ \| _Bright_ \| _Dim_ \| _Underscore_ \| _Blink_ \| _Reverse_ \| _Hidden_ \| _FgBlack_ \| _FgRed_ \| _FgGreen_ \| _FgYellow_ \| _FgBlue_ \| _FgMagenta_ \| _FgCyan_ \| _FgWhite_ \| _BgBlack_ \| _BgRed_ \| _BgGreen_ \| _BgYellow_ \| _BgBlue_ \| _BgMagenta_ \| _BgCyan_ \| _BgWhite_, `message`: _string_, `afterColored?`: _string_, `consoleLevel?`: [_ConsoleLevel_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##consolelevel)): _void_

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
Logger.coloredLog("FgRed", "error!!!", "", "error");
```

##### Parameters:

| Name           | Type                                                                                                                                                                                                                                                                                           | Default value | Description                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| `color`        | _Reset_ \| _Bright_ \| _Dim_ \| _Underscore_ \| _Blink_ \| _Reverse_ \| _Hidden_ \| _FgBlack_ \| _FgRed_ \| _FgGreen_ \| _FgYellow_ \| _FgBlue_ \| _FgMagenta_ \| _FgCyan_ \| _FgWhite_ \| _BgBlack_ \| _BgRed_ \| _BgGreen_ \| _BgYellow_ \| _BgBlue_ \| _BgMagenta_ \| _BgCyan_ \| _BgWhite_ | -             | The color to log in                                               |
| `message`      | _string_                                                                                                                                                                                                                                                                                       | -             | The message to log                                                |
| `afterColored` | _string_                                                                                                                                                                                                                                                                                       | ""            | The optional message after the colored message (on the same line) |
| `consoleLevel` | [_ConsoleLevel_](https://github.com/hack4impact/logger/tree/main/docs/modules.md##consolelevel)                                                                                                                                                                                                | "log"         | The console level to use (log, warn, or error)                    |

**Returns:** _void_

Defined in: [index.ts:274](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L274)

---

#### error

▸ `Static`**error**(`message`: _any_, `afterColored?`: _string_): _void_

Logs an error message in red

**`example`**

```javascript
Logger.bold("ERROR!");
```

**`example`**

```javascript
Logger.bold("ERROR!", "this part is not red");
```

##### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:376](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L376)

---

#### info

▸ `Static`**info**(`message`: _any_, `afterColored?`: _string_): _void_

Logs an info message in blue

**`example`**

```javascript
Logger.bold("information...");
```

**`example`**

```javascript
Logger.bold("information...", "this part is not blue");
```

##### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:338](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L338)

---

#### line

▸ `Static`**line**(): _void_

Logs an empty line to the console

**`example`**

```javascript
Logger.line();
```

**Returns:** _void_

Defined in: [index.ts:249](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L249)

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

Defined in: [index.ts:236](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L236)

---

#### success

▸ `Static`**success**(`message`: _any_, `afterColored?`: _string_): _void_

Logs a success message in green

**`example`**

```javascript
Logger.bold("SUCCESS!");
```

**`example`**

```javascript
Logger.bold("SUCCESS!", "this part is not green");
```

##### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:319](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L319)

---

#### warn

▸ `Static`**warn**(`message`: _any_, `afterColored?`: _string_): _void_

Logs a warning message in yellow

**`example`**

```javascript
Logger.bold("WARNING!");
```

**`example`**

```javascript
Logger.bold("WARNING!", "this part is not yellow");
```

##### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:357](https://github.com/hack4impact/logger/blob/3d9ffd5/src/index.ts##L357)

## Dependents

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
