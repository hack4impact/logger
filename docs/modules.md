[Hack4Impact Logger](https://github.com/hack4impact/logger/tree/main/docs/README.md) / Exports

# Hack4Impact Logger

## Table of contents

### References

- [default](https://github.com/hack4impact/logger/tree/main/docs/modules.md#default)

### Classes

- [Logger](https://github.com/hack4impact/logger/tree/main/docs/classes/logger.md)

### Interfaces

- [Log](https://github.com/hack4impact/logger/tree/main/docs/interfaces/log.md)
- [LogParameterWithWrite](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithwrite.md)
- [LogParameterWithoutWrite](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithoutwrite.md)

### Type aliases

- [ConsoleLevel](https://github.com/hack4impact/logger/tree/main/docs/modules.md#consolelevel)
- [LogExtra](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logextra)
- [LogIndex](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logindex)
- [LogMessage](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)
- [LogParameter](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logparameter)
- [LogParameterWithWriteWithoutType](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logparameterwithwritewithouttype)
- [LogParameterWithoutType](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logparameterwithouttype)
- [LogParameterWithoutWriteWithoutType](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logparameterwithoutwritewithouttype)
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

Defined in: [index.ts:8](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L8)

---

### LogExtra

Ƭ **LogExtra**: _unknown_

Defined in: [index.ts:22](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L22)

---

### LogIndex

Ƭ **LogIndex**: _number_

Defined in: [index.ts:20](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L20)

---

### LogMessage

Ƭ **LogMessage**: _string_ \| _number_ \| _boolean_ \| [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)[]

Defined in: [index.ts:16](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L16)

---

### LogParameter

Ƭ **LogParameter**: [_LogParameterWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithwrite.md) \| [_LogParameterWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithoutwrite.md) \| [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)

Defined in: [index.ts:37](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L37)

---

### LogParameterWithWriteWithoutType

Ƭ **LogParameterWithWriteWithoutType**: _Omit_<[_LogParameterWithWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithwrite.md), _type_\>

Defined in: [index.ts:42](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L42)

---

### LogParameterWithoutType

Ƭ **LogParameterWithoutType**: [_LogParameterWithWriteWithoutType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logparameterwithwritewithouttype) \| [_LogParameterWithoutWriteWithoutType_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logparameterwithoutwritewithouttype) \| [_LogMessage_](https://github.com/hack4impact/logger/tree/main/docs/modules.md#logmessage)

Defined in: [index.ts:52](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L52)

---

### LogParameterWithoutWriteWithoutType

Ƭ **LogParameterWithoutWriteWithoutType**: _Omit_<[_LogParameterWithoutWrite_](https://github.com/hack4impact/logger/tree/main/docs/interfaces/logparameterwithoutwrite.md), _type_\>

Defined in: [index.ts:47](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L47)

---

### LogTimestamp

Ƭ **LogTimestamp**: _number_

Defined in: [index.ts:18](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L18)

---

### LogType

Ƭ **LogType**: _success_ \| _info_ \| _error_ \| _warn_

Defined in: [index.ts:12](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L12)

## Variables

### CONSOLE_LEVELS

• `Const` **CONSOLE_LEVELS**: readonly _log_[]

Defined in: [index.ts:10](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L10)

---

### LOG_TYPES

• `Const` **LOG_TYPES**: readonly _success_[]

Defined in: [index.ts:14](https://github.com/hack4impact/logger/blob/0dfee1d/src/index.ts#L14)
