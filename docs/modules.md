[Hack4Impact Logger](https://github.com/hack4impact/logger/tree/main/docs/README.md) / Exports

# Hack4Impact Logger

## Table of contents

### References

- [default](https://github.com/hack4impact/logger/tree/main/docs/modules.md#default)

### Classes

- [Logger](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

### Type aliases

- [ConsoleLevel](https://github.com/hack4impact/logger/tree/main/docs/modules.md#consolelevel)
- [Log](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log)
- [LogExtra](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logextra)
- [LogIndex](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logindex)
- [LogMessage](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)
- [LogOptions](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptions)
- [LogOptionsWithWrite](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithwrite)
- [LogOptionsWithWriteWithoutType](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithwritewithouttype)
- [LogOptionsWithoutType](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithouttype)
- [LogOptionsWithoutWrite](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithoutwrite)
- [LogOptionsWithoutWriteWithoutType](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithoutwritewithouttype)
- [LogTimestamp](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtimestamp)
- [LogType](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtype)

### Variables

- [CONSOLE_LEVELS](https://github.com/hack4impact/logger/tree/main/docs/modules.md#console_levels)
- [LOG_TYPES](https://github.com/hack4impact/logger/tree/main/docs/modules.md#log_types)

## References

### default

Renames and exports: [Logger](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

## Type aliases

### ConsoleLevel

Ƭ **ConsoleLevel**: _log_ \| _warn_ \| _error_

Defined in: [index.ts:8](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L8)

---

### Log

Ƭ **Log**: { `extra?`: [_LogExtra_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logextra) ; `index`: [_LogIndex_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logindex) ; `message`: [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage) ; `timestamp`: [_LogTimestamp_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtimestamp) ; `type?`: [_LogType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtype) }

#### Type declaration:

| Name        | Type                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------- |
| `extra?`    | [_LogExtra_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logextra)         |
| `index`     | [_LogIndex_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logindex)         |
| `message`   | [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)     |
| `timestamp` | [_LogTimestamp_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtimestamp) |
| `type?`     | [_LogType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtype)           |

Defined in: [index.ts:48](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L48)

---

### LogExtra

Ƭ **LogExtra**: _unknown_

Defined in: [index.ts:22](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L22)

---

### LogIndex

Ƭ **LogIndex**: _number_

Defined in: [index.ts:20](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L20)

---

### LogMessage

Ƭ **LogMessage**: _unknown_

Defined in: [index.ts:16](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L16)

---

### LogOptions

Ƭ **LogOptions**: [_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithwrite) \| [_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithoutwrite)

Defined in: [index.ts:35](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L35)

---

### LogOptionsWithWrite

Ƭ **LogOptionsWithWrite**: { `extra?`: [_LogExtra_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logextra) ; `type?`: [_LogType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtype) ; `writeToFile`: _true_ }

#### Type declaration:

| Name          | Type                                                                                   |
| ------------- | -------------------------------------------------------------------------------------- |
| `extra?`      | [_LogExtra_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logextra) |
| `type?`       | [_LogType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtype)   |
| `writeToFile` | _true_                                                                                 |

Defined in: [index.ts:24](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L24)

---

### LogOptionsWithWriteWithoutType

Ƭ **LogOptionsWithWriteWithoutType**: _Omit_<[_LogOptionsWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithwrite), _type_\>

Defined in: [index.ts:37](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L37)

---

### LogOptionsWithoutType

Ƭ **LogOptionsWithoutType**: [_LogOptionsWithWriteWithoutType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithwritewithouttype) \| [_LogOptionsWithoutWriteWithoutType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithoutwritewithouttype)

Defined in: [index.ts:44](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L44)

---

### LogOptionsWithoutWrite

Ƭ **LogOptionsWithoutWrite**: { `type?`: [_LogType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtype) ; `writeToFile`: _false_ }

#### Type declaration:

| Name          | Type                                                                                 |
| ------------- | ------------------------------------------------------------------------------------ |
| `type?`       | [_LogType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logtype) |
| `writeToFile` | _false_                                                                              |

Defined in: [index.ts:30](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L30)

---

### LogOptionsWithoutWriteWithoutType

Ƭ **LogOptionsWithoutWriteWithoutType**: _Omit_<[_LogOptionsWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logoptionswithoutwrite), _type_\>

Defined in: [index.ts:39](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L39)

---

### LogTimestamp

Ƭ **LogTimestamp**: _number_

Defined in: [index.ts:18](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L18)

---

### LogType

Ƭ **LogType**: _success_ \| _info_ \| _error_ \| _warn_

Defined in: [index.ts:12](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L12)

## Variables

### CONSOLE_LEVELS

• `Const` **CONSOLE_LEVELS**: readonly _log_[]

Defined in: [index.ts:10](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L10)

---

### LOG_TYPES

• `Const` **LOG_TYPES**: readonly _success_[]

Defined in: [index.ts:14](https://github.com/hack4impact/logger/blob/a613d31/src/index.ts#L14)
