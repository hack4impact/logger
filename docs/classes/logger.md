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
- [success](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md#success)
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
const logger = new Logger(__dirname + "/logs.json");
```

#### Parameters:

| Name       | Type     | Description          |
| ---------- | -------- | -------------------- |
| `logsPath` | _string_ | The output file path |

**Returns:** [_Logger_](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

Defined in: [index.ts:125](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L125)

## Properties

### COLORS

▪ `Readonly` `Static` **COLORS**: { `BgBlack`: _string_ = "\x1b[40m"; `BgBlue`: _string_ = "\x1b[44m"; `BgCyan`: _string_ = "\x1b[46m"; `BgGreen`: _string_ = "\x1b[42m"; `BgMagenta`: _string_ = "\x1b[45m"; `BgRed`: _string_ = "\x1b[41m"; `BgWhite`: _string_ = "\x1b[47m"; `BgYellow`: _string_ = "\x1b[43m"; `Blink`: _string_ = "\x1b[5m"; `Bright`: _string_ = "\x1b[1m"; `Dim`: _string_ = "\x1b[2m"; `FgBlack`: _string_ = "\x1b[30m"; `FgBlue`: _string_ = "\x1b[34m"; `FgCyan`: _string_ = "\x1b[36m"; `FgGreen`: _string_ = "\x1b[32m"; `FgMagenta`: _string_ = "\x1b[35m"; `FgRed`: _string_ = "\x1b[31m"; `FgWhite`: _string_ = "\x1b[37m"; `FgYellow`: _string_ = "\x1b[33m"; `Hidden`: _string_ = "\x1b[8m"; `Reset`: _string_ = "\x1b[0m"; `Reverse`: _string_ = "\x1b[7m"; `Underscore`: _string_ = "\x1b[4m" }

ANSI Escape Sequences

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

Defined in: [index.ts:86](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L86)

## Accessors

### logs

• **logs**(): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)[]

All logs that have been output by this Logger instance

**`example`**

```javascript
const logs = logger.logs;
```

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)[]

Defined in: [index.ts:151](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L151)

---

### logsPath

• **logsPath**(): _string_

The output file path

**`example`**

```javascript
const logsPath = logger.logsPath;
```

**Returns:** _string_

Defined in: [index.ts:164](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L164)

• **logsPath**(`logsPath`: _string_): _void_

The output file path

**`example`**

```javascript
logger.logsPath = __dirname + "/logs.json";
```

#### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `logsPath` | _string_ |

**Returns:** _void_

Defined in: [index.ts:177](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L177)

## Methods

### log

▸ **log**(`logParameter`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

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

#### Parameters:

| Name           | Type                                                                                       | Description        |
| -------------- | ------------------------------------------------------------------------------------------ | ------------------ |
| `logParameter` | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage) | The message to log |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

Defined in: [index.ts:199](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L199)

▸ **log**(`logParameter`: [_LogParameterWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithoutwrite.md)): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

Logs a message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.log({
  message: "Hello",
  writeToFile: false,
});
```

**`example`**

```javascript
await logger.log({
  message: "Hello",
  writeToFile: false,
  type: "error",
});
```

#### Parameters:

| Name           | Type                                                                                                                      | Description               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `logParameter` | [_LogParameterWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithoutwrite.md) | Information about the log |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

Defined in: [index.ts:221](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L221)

▸ **log**(`logParameter`: [_LogParameterWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithwrite.md)): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Logs a message to the console and writes to the output file path

**`example`**

```javascript
await logger.log({
  message: "Hello",
  writeToFile: true,
});
```

**`example`**

```javascript
await logger.log({
  message: ["hi", "hello"],
  writeToFile: true,
  type: "success",
});
```

**`example`**

```javascript
await logger.log({
  message: 32,
  writeToFile: true,
  type: "info",
  extra: "this part is not logged",
});
```

#### Parameters:

| Name           | Type                                                                                                                | Description               |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `logParameter` | [_LogParameterWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithwrite.md) | Information about the log |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Defined in: [index.ts:252](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L252)

---

### success

▸ **success**(`logParameter`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

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

#### Parameters:

| Name           | Type                                                                                       | Description                |
| -------------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| `logParameter` | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage) | The success message to log |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Defined in: [index.ts:308](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L308)

▸ **success**(`logParameter`: _Pick_<[_LogParameterWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithoutwrite.md), _message_ \| _writeToFile_\>): _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Logs a success message to the console and DOES NOT write to the output file path

**`example`**

```javascript
await logger.success({
  message: "Hello",
  writeToFile: false,
});
```

#### Parameters:

| Name           | Type                                                                                                                                                           | Description               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `logParameter` | _Pick_<[_LogParameterWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithoutwrite.md), _message_ \| _writeToFile_\> | Information about the log |

**Returns:** _Promise_<[*Log*](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)\>

Defined in: [index.ts:322](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L322)

▸ **success**(`message`: _Pick_<[_LogParameterWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithwrite.md), _message_ \| _writeToFile_ \| _extra_\>): [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

Logs a message to the console and writes to the output file path

**`example`**

```javascript
await logger.success({
  message: "Hello",
  writeToFile: true,
});
```

**`example`**

```javascript
await logger.success({
  message: 32,
  writeToFile: true,
  extra: "this part is not logged",
});
```

#### Parameters:

| Name      | Type                                                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message` | _Pick_<[_LogParameterWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithwrite.md), _message_ \| _writeToFile_ \| _extra_\> |

**Returns:** [_Log_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)

Defined in: [index.ts:346](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L346)

---

### bold

▸ `Static`**bold**(`message`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage), `afterColored?`: _string_): _void_

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

| Name           | Type                                                                                       | Default value | Description                                                    |
| -------------- | ------------------------------------------------------------------------------------------ | ------------- | -------------------------------------------------------------- |
| `message`      | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage) | -             | The bold message to log                                        |
| `afterColored` | _string_                                                                                   | ""            | The optional message after the bold message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:450](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L450)

---

### coloredLog

▸ `Static`**coloredLog**(`color`: _Reset_ \| _Bright_ \| _Dim_ \| _Underscore_ \| _Blink_ \| _Reverse_ \| _Hidden_ \| _FgBlack_ \| _FgRed_ \| _FgGreen_ \| _FgYellow_ \| _FgBlue_ \| _FgMagenta_ \| _FgCyan_ \| _FgWhite_ \| _BgBlack_ \| _BgRed_ \| _BgGreen_ \| _BgYellow_ \| _BgBlue_ \| _BgMagenta_ \| _BgCyan_ \| _BgWhite_, `message`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage), `afterColored?`: _string_, `consoleLevel?`: _log_ \| _warn_ \| _error_): _void_

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

#### Parameters:

| Name           | Type                                                                                                                                                                                                                                                                                           | Default value | Description                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| `color`        | _Reset_ \| _Bright_ \| _Dim_ \| _Underscore_ \| _Blink_ \| _Reverse_ \| _Hidden_ \| _FgBlack_ \| _FgRed_ \| _FgGreen_ \| _FgYellow_ \| _FgBlue_ \| _FgMagenta_ \| _FgCyan_ \| _FgWhite_ \| _BgBlack_ \| _BgRed_ \| _BgGreen_ \| _BgYellow_ \| _BgBlue_ \| _BgMagenta_ \| _BgCyan_ \| _BgWhite_ | -             | The color to log in                                               |
| `message`      | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)                                                                                                                                                                                                     | -             | The message to log                                                |
| `afterColored` | _string_                                                                                                                                                                                                                                                                                       | ""            | The optional message after the colored message (on the same line) |
| `consoleLevel` | _log_ \| _warn_ \| _error_                                                                                                                                                                                                                                                                     | "log"         | The console level to use (log, warn, or error)                    |

**Returns:** _void_

Defined in: [index.ts:424](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L424)

---

### error

▸ `Static`**error**(`message`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage), `afterColored?`: _string_): _void_

Logs an error message in red

**`example`**

```javascript
Logger.error("ERROR!");
```

**`example`**

```javascript
Logger.error("ERROR!", "this part is not red");
```

#### Parameters:

| Name           | Type                                                                                       | Default value | Description                                                     |
| -------------- | ------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------- |
| `message`      | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage) | -             | The error message to log                                        |
| `afterColored` | _string_                                                                                   | ""            | The optional message after the error message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:526](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L526)

---

### info

▸ `Static`**info**(`message`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage), `afterColored?`: _string_): _void_

Logs an info message in blue

**`example`**

```javascript
Logger.info("information...");
```

**`example`**

```javascript
Logger.info("information...", "this part is not blue");
```

#### Parameters:

| Name           | Type                                                                                       | Default value | Description                                                    |
| -------------- | ------------------------------------------------------------------------------------------ | ------------- | -------------------------------------------------------------- |
| `message`      | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage) | -             | The info message to log                                        |
| `afterColored` | _string_                                                                                   | ""            | The optional message after the info message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:488](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L488)

---

### line

▸ `Static`**line**(): _void_

Logs an empty line to the console

**`example`**

```javascript
Logger.line();
```

**Returns:** _void_

Defined in: [index.ts:399](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L399)

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

Defined in: [index.ts:386](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L386)

---

### success

▸ `Static`**success**(`message`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage), `afterColored?`: _string_): _void_

Logs a success message in green

**`example`**

```javascript
Logger.success("SUCCESS!");
```

**`example`**

```javascript
Logger.success("SUCCESS!", "this part is not green");
```

#### Parameters:

| Name           | Type                                                                                       | Default value | Description                                                       |
| -------------- | ------------------------------------------------------------------------------------------ | ------------- | ----------------------------------------------------------------- |
| `message`      | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage) | -             | The success message to log                                        |
| `afterColored` | _string_                                                                                   | ""            | The optional message after the success message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:469](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L469)

---

### warn

▸ `Static`**warn**(`message`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage), `afterColored?`: _string_): _void_

Logs a warning message in yellow

**`example`**

```javascript
Logger.warn("WARNING!");
```

**`example`**

```javascript
Logger.warn("WARNING!", "this part is not yellow");
```

#### Parameters:

| Name           | Type                                                                                       | Default value | Description                                                       |
| -------------- | ------------------------------------------------------------------------------------------ | ------------- | ----------------------------------------------------------------- |
| `message`      | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage) | -             | The warning message to log                                        |
| `afterColored` | _string_                                                                                   | ""            | The optional message after the warning message (on the same line) |

**Returns:** _void_

Defined in: [index.ts:507](https://github.com/hack4impact/logger/blob/1c2c72f/src/index.ts#L507)
