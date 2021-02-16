// Externals
import { strict as assert } from "assert";
import { writeFile } from "fs/promises";

// Internals
import { INVALID_MESSAGE, INVALID_TYPE } from "./errors";

export type ConsoleLevel = "log" | "warn" | "error";

export const CONSOLE_LEVELS = ["log", "warn", "error"] as const;

export type LogType = "success" | "info" | "error" | "warn";

export const LOG_TYPES = ["success", "info", "error", "warn"] as const;

export type LogMessage = string | number | boolean | LogMessage[];

export type LogTimestamp = number;

export type LogIndex = number;

export type LogExtra = unknown;

export interface LogParameterWithWrite {
  message: LogMessage;
  writeToFile: true;
  type?: LogType;
  extra?: LogExtra;
}

export interface LogParameterWithoutWrite {
  message: LogMessage;
  writeToFile: false;
  type?: LogType;
}

export type LogParameter =
  | LogParameterWithWrite
  | LogParameterWithoutWrite
  | LogMessage;

export type LogParameterWithWriteWithoutType = Omit<
  LogParameterWithWrite,
  "type"
>;

export type LogParameterWithoutWriteWithoutType = Omit<
  LogParameterWithoutWrite,
  "type"
>;

export type LogParameterWithoutType =
  | LogParameterWithWriteWithoutType
  | LogParameterWithoutWriteWithoutType
  | LogMessage;

export interface Log {
  message: LogMessage;
  timestamp: LogTimestamp;
  index: LogIndex;
  type?: LogType;
  extra?: LogExtra;
}

const checkValidMessage = (
  parameter: LogParameter
): parameter is LogMessage => {
  return (
    Array.isArray(parameter) ||
    typeof parameter === "string" ||
    typeof parameter === "number" ||
    typeof parameter === "boolean"
  );
};

export class Logger {
  /**
   *
   * ANSI Escape Sequences
   *
   * @example
   * ```javascript
   * console.log(Logger.COLORS.Dim + "Dim log" + Logger.COLORS.Reset);
   * ```
   */
  public static readonly COLORS = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",

    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",

    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m",
  };

  /**
   *
   * The output file path
   *
   */
  private _logsPath: string;
  /**
   *
   * All logs that have been output by this Logger instance
   *
   */
  private _logs: Log[];

  /**
   *
   * Creates a new Logger instance
   *
   * @param logsPath - The output file path
   * @example
   * ```javascript
   * const logger = new Logger(__dirname + "/logs.json");
   * ```
   */
  constructor(logsPath: string) {
    this._logsPath = logsPath;
    this._logs = [];
  }

  /**
   *
   * All logs that have been output by this Logger instance
   *
   * @example
   * ```javascript
   * const logs = logger.logs;
   * ```
   */
  public get logs(): Log[] {
    return this._logs;
  }

  /**
   *
   * The output file path
   *
   * @example
   * ```javascript
   * const logsPath = logger.logsPath;
   * ```
   */
  public get logsPath(): string {
    return this._logsPath;
  }

  /**
   *
   * The output file path
   *
   * @example
   * ```javascript
   * logger.logsPath = __dirname + "/logs.json";
   * ```
   */
  public set logsPath(logsPath: string) {
    this._logsPath = logsPath;
  }

  /**
   *
   * Logs a message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - The message to log
   * @example
   * ```javascript
   * await logger.log("Hello");
   * ```
   * @example
   * ```javascript
   * await logger.log(2);
   * ```
   * @example
   * ```javascript
   * await logger.log(["hi!", 4, ["nested string"]]);
   * ```
   */
  public log(logParameter: LogMessage): Log;
  /**
   *
   * Logs a message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.log({
   *   message: "Hello",
   *   writeToFile: false,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.log({
   *   message: "Hello",
   *   writeToFile: false,
   *   type: "error",
   * });
   * ```
   */
  public log(logParameter: LogParameterWithoutWrite): Log;
  /**
   *
   * Logs a message to the console and writes to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.log({
   *   message: "Hello",
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.log({
   *   message: ["hi", "hello"],
   *   writeToFile: true,
   *   type: "success",
   * });
   * ```
   * @example
   * ```javascript
   * await logger.log({
   *   message: 32,
   *   writeToFile: true,
   *   type: "info",
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public log(logParameter: LogParameterWithWrite): Promise<Log>;
  public log(logParameter: LogParameter): Promise<Log> | Log {
    let log: Log = {
      timestamp: Date.now(),
      index: this.logs.length,
      message: "",
    };

    if (checkValidMessage(logParameter)) {
      Logger.log(logParameter);
      log.message = logParameter;

      this.logs.push(log);
      return log;
    }

    const { message, type } = logParameter;
    assert.ok(checkValidMessage(message), INVALID_MESSAGE);

    log = { ...log, message, type };

    if (type) {
      assert.ok(LOG_TYPES.includes(type), INVALID_TYPE);
      Logger[type](message);
    } else Logger.log(message);

    if (!logParameter.writeToFile) {
      this.logs.push(log);
      return log;
    }

    const { extra } = logParameter;
    log = { ...log, extra };

    this.logs.push(log);
    return this.writeLogs().then(() => log);
  }

  /**
   *
   * Logs a success message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - The success message to log
   * @example
   * ```javascript
   * await logger.success("Hello");
   * ```
   * @example
   * ```javascript
   * await logger.success(2);
   * ```
   * @example
   * ```javascript
   * await logger.success(["hi!", 4, ["nested string"]]);
   * ```
   */
  public success(logParameter: LogMessage): Promise<Log>;
  /**
   *
   * Logs a success message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.success({
   *   message: "Hello",
   *   writeToFile: false,
   * });
   * ```
   */
  public success(
    logParameter: LogParameterWithoutWriteWithoutType
  ): Promise<Log>;
  /**
   *
   * Logs a success message to the console and writes to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.success({
   *   message: "Hello",
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.success({
   *   message: 32,
   *   writeToFile: true,
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public success(message: LogParameterWithWriteWithoutType): Log;
  public success(logParameter: LogParameterWithoutType): Promise<Log> | Log {
    if (checkValidMessage(logParameter)) {
      return this.log(logParameter);
    }

    if (logParameter.writeToFile === undefined || logParameter.writeToFile) {
      return this.log({ ...logParameter, type: "success" });
    }
    return this.log({ ...logParameter, type: "success" }); // Same as above, but different overload and return value
  }

  /**
   *
   * Logs an info message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - The info message to log
   * @example
   * ```javascript
   * await logger.info("Hello");
   * ```
   * @example
   * ```javascript
   * await logger.info(2);
   * ```
   * @example
   * ```javascript
   * await logger.info(["hi!", 4, ["nested string"]]);
   * ```
   */
  public info(logParameter: LogMessage): Promise<Log>;
  /**
   *
   * Logs an info message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.info({
   *   message: "Hello",
   *   writeToFile: false,
   * });
   * ```
   */
  public info(logParameter: LogParameterWithoutWriteWithoutType): Promise<Log>;
  /**
   *
   * Logs an info message to the console and writes to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.info({
   *   message: "Hello",
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.info({
   *   message: 32,
   *   writeToFile: true,
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public info(message: LogParameterWithWriteWithoutType): Log;
  public info(logParameter: LogParameterWithoutType): Promise<Log> | Log {
    if (checkValidMessage(logParameter)) {
      return this.log(logParameter);
    }

    if (logParameter.writeToFile === undefined || logParameter.writeToFile) {
      return this.log({ ...logParameter, type: "info" });
    }
    return this.log({ ...logParameter, type: "info" }); // Same as above, but different overload and return value
  }

  /**
   *
   * Logs a warning message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - The warning message to log
   * @example
   * ```javascript
   * await logger.warn("Hello");
   * ```
   * @example
   * ```javascript
   * await logger.warn(2);
   * ```
   * @example
   * ```javascript
   * await logger.warn(["hi!", 4, ["nested string"]]);
   * ```
   */
  public warn(logParameter: LogMessage): Promise<Log>;
  /**
   *
   * Logs a warning message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.warn({
   *   message: "Hello",
   *   writeToFile: false,
   * });
   * ```
   */
  public warn(logParameter: LogParameterWithoutWriteWithoutType): Promise<Log>;
  /**
   *
   * Logs a warning message to the console and writes to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.warn({
   *   message: "Hello",
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.warn({
   *   message: 32,
   *   writeToFile: true,
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public warn(message: LogParameterWithWriteWithoutType): Log;
  public warn(logParameter: LogParameterWithoutType): Promise<Log> | Log {
    if (checkValidMessage(logParameter)) {
      return this.log(logParameter);
    }

    if (logParameter.writeToFile === undefined || logParameter.writeToFile) {
      return this.log({ ...logParameter, type: "warn" });
    }
    return this.log({ ...logParameter, type: "warn" }); // Same as above, but different overload and return value
  }

  /**
   *
   * Logs an error message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - The error message to log
   * @example
   * ```javascript
   * await logger.error("Hello");
   * ```
   * @example
   * ```javascript
   * await logger.error(2);
   * ```
   * @example
   * ```javascript
   * await logger.error(["hi!", 4, ["nested string"]]);
   * ```
   */
  public error(logParameter: LogMessage): Promise<Log>;
  /**
   *
   * Logs an error message to the console and DOES NOT write to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.error({
   *   message: "Hello",
   *   writeToFile: false,
   * });
   * ```
   */
  public error(logParameter: LogParameterWithoutWriteWithoutType): Promise<Log>;
  /**
   *
   * Logs an error message to the console and writes to the output file path
   *
   * @param logParameter - Information about the log
   * @example
   * ```javascript
   * await logger.error({
   *   message: "Hello",
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.error({
   *   message: 32,
   *   writeToFile: true,
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public error(message: LogParameterWithWriteWithoutType): Log;
  public error(logParameter: LogParameterWithoutType): Promise<Log> | Log {
    if (checkValidMessage(logParameter)) {
      return this.log(logParameter);
    }

    if (logParameter.writeToFile === undefined || logParameter.writeToFile) {
      return this.log({ ...logParameter, type: "error" });
    }
    return this.log({ ...logParameter, type: "error" }); // Same as above, but different overload and return value
  }

  /**
   *
   * Writes the logs stored in `this.logs` to the output file
   *
   * @example
   * ```javascript
   * await logger.writeLogs();
   * ```
   */
  private writeLogs(): Promise<void> {
    return writeFile(this.logsPath, JSON.stringify(this.logs), "utf-8");
  }

  /**
   *
   * Logs to the console
   *
   * @param message - The message to log
   * @param optionalParams - Substitution strings
   * @example
   * ```javascript
   * Logger.log("hi");
   * ```
   * @example
   * ```javascript
   * Logger.log("hi %s", "Bill");
   * ```
   */
  public static log(message?: unknown, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
  }

  /**
   *
   * Logs an empty line to the console
   *
   * @example
   * ```javascript
   * Logger.line();
   * ```
   */
  public static line(): void {
    console.log();
  }

  /**
   *
   * Logs a colored message to the console
   *
   * @param color - The color to log in
   * @param message - The message to log
   * @param afterColored - The optional message after the colored message (on the same line)
   * @param consoleLevel - The console level to use (log, warn, or error)
   * @example
   * ```javascript
   * Logger.coloredLog("BgBlue", "hi");
   * ```
   * @example
   * ```javascript
   * Logger.coloredLog("FgYellow", "hi", "this string will not be colored");
   * ```
   * @example
   * ```javascript
   * Logger.coloredLog("FgRed", "error!!!", "not colored", "error");
   * ```
   */
  public static coloredLog(
    color: keyof typeof Logger.COLORS,
    message: LogMessage,
    afterColored = "",
    consoleLevel: ConsoleLevel = "log"
  ): void {
    console[consoleLevel](
      `${this.COLORS[color]}${message}${this.COLORS.Reset}${afterColored}`
    );
  }

  /**
   *
   * Logs a bold message
   *
   * @param message - The bold message to log
   * @param afterColored - The optional message after the bold message (on the same line)
   * @example
   * ```javascript
   * Logger.bold("BOLD!");
   * ```
   * @example
   * ```javascript
   * Logger.bold("BOLD!", "this part is not bold");
   * ```
   */
  public static bold(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("Bright", message, afterColored);
  }

  /**
   *
   * Logs a success message in green
   *
   * @param message - The success message to log
   * @param afterColored - The optional message after the success message (on the same line)
   * @example
   * ```javascript
   * Logger.success("SUCCESS!");
   * ```
   * @example
   * ```javascript
   * Logger.success("SUCCESS!", "this part is not green");
   * ```
   */
  public static success(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgGreen", message, afterColored);
  }

  /**
   *
   * Logs an info message in blue
   *
   * @param message - The info message to log
   * @param afterColored - The optional message after the info message (on the same line)
   * @example
   * ```javascript
   * Logger.info("information...");
   * ```
   * @example
   * ```javascript
   * Logger.info("information...", "this part is not blue");
   * ```
   */
  public static info(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgBlue", message, afterColored);
  }

  /**
   *
   * Logs a warning message in yellow
   *
   * @param message - The warning message to log
   * @param afterColored - The optional message after the warning message (on the same line)
   * @example
   * ```javascript
   * Logger.warn("WARNING!");
   * ```
   * @example
   * ```javascript
   * Logger.warn("WARNING!", "this part is not yellow");
   * ```
   */
  public static warn(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgYellow", message, afterColored, "warn");
  }

  /**
   *
   * Logs an error message in red
   *
   * @param message - The error message to log
   * @param afterColored - The optional message after the error message (on the same line)
   * @example
   * ```javascript
   * Logger.error("ERROR!");
   * ```
   * @example
   * ```javascript
   * Logger.error("ERROR!", "this part is not red");
   * ```
   */
  public static error(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgRed", message, afterColored, "error");
  }
}

export default Logger;
