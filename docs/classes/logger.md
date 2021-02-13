[Hack4Impact Logger](https://github.com/hack4impact/logger/tree/main/docs/README.md) / [Exports](https://github.com/hack4impact/logger/tree/main/docs/modules.md) / Logger

# Class: Logger

## Hierarchy

- **Logger**

## Table of contents

### Constructors

- [constructor](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#constructor)

### Properties

- [COLORS](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#colors)

### Accessors

- [logs](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#logs)
- [logsPath](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#logspath)

### Methods

- [log](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#log)
- [bold](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#bold)
- [coloredLog](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#coloredlog)
- [error](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#error)
- [info](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#info)
- [line](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#line)
- [log](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#log)
- [success](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#success)
- [warn](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#warn)

## Constructors

### constructor

\+ **new Logger**(`logsPath`: _string_): [_Logger_](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

Creates a new Logger instance

**`example`**

```javascript
const logger = new Logger(__dirname + "logs.json");
```

#### Parameters:

| Name       | Type     | Description          |
| ---------- | -------- | -------------------- |
| `logsPath` | _string_ | The output file path |

**Returns:** [_Logger_](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

Defined in: [index.ts:71](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L71)

## Properties

### COLORS

▪ `Readonly` `Static` **COLORS**: { `BgBlack`: _string_ = "\x1b[40m"; `BgBlue`: _string_ = "\x1b[44m"; `BgCyan`: _string_ = "\x1b[46m"; `BgGreen`: _string_ = "\x1b[42m"; `BgMagenta`: _string_ = "\x1b[45m"; `BgRed`: _string_ = "\x1b[41m"; `BgWhite`: _string_ = "\x1b[47m"; `BgYellow`: _string_ = "\x1b[43m"; `Blink`: _string_ = "\x1b[5m"; `Bright`: _string_ = "\x1b[1m"; `Dim`: _string_ = "\x1b[2m"; `FgBlack`: _string_ = "\x1b[30m"; `FgBlue`: _string_ = "\x1b[34m"; `FgCyan`: _string_ = "\x1b[36m"; `FgGreen`: _string_ = "\x1b[32m"; `FgMagenta`: _string_ = "\x1b[35m"; `FgRed`: _string_ = "\x1b[31m"; `FgWhite`: _string_ = "\x1b[37m"; `FgYellow`: _string_ = "\x1b[33m"; `Hidden`: _string_ = "\x1b[8m"; `Reset`: _string_ = "\x1b[0m"; `Reverse`: _string_ = "\x1b[7m"; `Underscore`: _string_ = "\x1b[4m" }

ANSI Escape Codes

**`example`**

```javascript
console.log(Logger.COLORS.Dim + "Dim log" + Logger.COLORS.Reset);
```

#### Type declaration:

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

Defined in: [index.ts:32](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L32)

## Accessors

### logs

• **logs**(): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)[]

All logs that have been output by this Logger instance

**`example`**

```javascript
const logs = logger.logs;
```

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)[]

Defined in: [index.ts:97](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L97)

---

### logsPath

• **logsPath**(): _string_

The output file path

**`example`**

```javascript
const logsPath = logger.logsPath;
```

**Returns:** _string_

Defined in: [index.ts:110](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L110)

• **logsPath**(`logsPath`: _string_): _void_

The output file path

**`example`**

```javascript
logger.logsPath = __dirname + "logs.json";
```

#### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `logsPath` | _string_ |

**Returns:** _void_

Defined in: [index.ts:123](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L123)

## Methods

### log

▸ **log**(`message`: _any_): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Logs a message to the console and writes to the output file path

**`example`**

```javascript
await logger.log("hi");
```

#### Parameters:

| Name      | Type  | Description        |
| --------- | ----- | ------------------ |
| `message` | _any_ | The message to log |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Defined in: [index.ts:137](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L137)

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

#### Parameters:

| Name          | Type                                     | Description                                             |
| ------------- | ---------------------------------------- | ------------------------------------------------------- |
| `message`     | _any_                                    | The message to log                                      |
| `writeToFile` | _true_                                   | Should write to file                                    |
| `type?`       | _success_ \| _info_ \| _error_ \| _warn_ | The type of log                                         |
| `extra?`      | _unknown_                                | Extra information to write to file (will not be logged) |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Defined in: [index.ts:159](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L159)

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

#### Parameters:

| Name          | Type                                     | Description          |
| ------------- | ---------------------------------------- | -------------------- |
| `message`     | _any_                                    | The message to log   |
| `writeToFile` | _false_                                  | Should write to file |
| `type?`       | _success_ \| _info_ \| _error_ \| _warn_ | The type of log      |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

Defined in: [index.ts:181](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L181)

---

### bold

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

#### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:298](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L298)

---

### coloredLog

▸ `Static`**coloredLog**(`color`: _Reset_ \| _Bright_ \| _Dim_ \| _Underscore_ \| _Blink_ \| _Reverse_ \| _Hidden_ \| _FgBlack_ \| _FgRed_ \| _FgGreen_ \| _FgYellow_ \| _FgBlue_ \| _FgMagenta_ \| _FgCyan_ \| _FgWhite_ \| _BgBlack_ \| _BgRed_ \| _BgGreen_ \| _BgYellow_ \| _BgBlue_ \| _BgMagenta_ \| _BgCyan_ \| _BgWhite_, `message?`: _string_, `afterColored?`: _string_, `consoleLevel?`: _error_ \| _warn_ \| _log_): _void_

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

#### Parameters:

| Name           | Type                                                                                                                                                                                                                                                                                           | Default value | Description                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| `color`        | _Reset_ \| _Bright_ \| _Dim_ \| _Underscore_ \| _Blink_ \| _Reverse_ \| _Hidden_ \| _FgBlack_ \| _FgRed_ \| _FgGreen_ \| _FgYellow_ \| _FgBlue_ \| _FgMagenta_ \| _FgCyan_ \| _FgWhite_ \| _BgBlack_ \| _BgRed_ \| _BgGreen_ \| _BgYellow_ \| _BgBlue_ \| _BgMagenta_ \| _BgCyan_ \| _BgWhite_ | -             | The color to log in                                               |
| `message`      | _string_                                                                                                                                                                                                                                                                                       | ""            | The message to log                                                |
| `afterColored` | _string_                                                                                                                                                                                                                                                                                       | ""            | The optional message after the colored message (on the same line) |
| `consoleLevel` | _error_ \| _warn_ \| _log_                                                                                                                                                                                                                                                                     | "log"         | The console level to use (log, warn, or error)                    |

**Returns:** _void_

Defined in: [index.ts:272](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L272)

---

### error

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

#### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:374](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L374)

---

### info

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

#### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:336](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L336)

---

### line

▸ `Static`**line**(): _void_

Logs an empty line to the console

**`example`**

```javascript
Logger.line();
```

**Returns:** _void_

Defined in: [index.ts:247](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L247)

---

### log

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

#### Parameters:

| Name                | Type      | Description          |
| ------------------- | --------- | -------------------- |
| `message?`          | _unknown_ | The message to log   |
| `...optionalParams` | _any_[]   | Substitution strings |

**Returns:** _void_

Defined in: [index.ts:234](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L234)

---

### success

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

#### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:317](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L317)

---

### warn

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

#### Parameters:

| Name           | Type     | Default value | Description                                                       |
| -------------- | -------- | ------------- | ----------------------------------------------------------------- |
| `message`      | _any_    | -             | The message to log                                                |
| `afterColored` | _string_ | ""            | The optional message after the colored message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:355](https://github.com/YashTotale/logger/blob/e8163c7/src/index.ts#L355)
