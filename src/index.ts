// Externals
import { strict as assert } from "assert";
import { promises } from "fs";
const { writeFile } = promises;

// Internals
import { INVALID_TYPE, NO_LOGS_PATH } from "./errors";
import { COLORS } from "./colors";

/**
 *
 * Array of all possible console log levels
 *
 */
export const CONSOLE_LEVELS = ["log", "warn", "error"] as const;

/**
 *
 * The possible console log levels (log, warn, or error)
 *
 */
export type ConsoleLevel = typeof CONSOLE_LEVELS[number];

/**
 *
 * Array of all possible log types
 *
 */
export const LOG_TYPES = ["success", "info", "error", "warn"] as const;

/**
 *
 * The type of log (success, info, warn, or error)
 *
 */
export type LogType = typeof LOG_TYPES[number];

/**
 *
 * Logger constructor options
 *
 */
export type LoggerConstructorOptions = {
  logsPath?: string;
};

/**
 *
 * The message to log
 *
 */
export type LogMessage = unknown;

/**
 *
 * The timestamp (in ms) of the log
 *
 */
export type LogTimestamp = number;

/**
 *
 * The index of the log (0-based)
 *
 */
export type LogIndex = number;

/**
 *
 * The extra information to write to the output file (will not be logged)
 *
 */
export type LogExtra = unknown;

/**
 *
 * Log options with writeToFile enabled
 *
 */
export type LogOptionsWithWrite = {
  writeToFile?: true;
  type?: LogType;
  extra?: LogExtra;
};

/**
 *
 * Log options with writeToFile disabled
 *
 */
export type LogOptionsWithoutWrite = {
  writeToFile: false;
  type?: LogType;
};

/**
 *
 * Log options (writeToFile, type, extra)
 *
 */
export type LogOptions = LogOptionsWithWrite | LogOptionsWithoutWrite;

/**
 *
 * Log options with writeToFile enabled and without type parameter
 *
 */
export type LogOptionsWithWriteWithoutType = Omit<LogOptionsWithWrite, "type">;

/**
 *
 * Log options with writeToFile disabled and without type parameter
 *
 */
export type LogOptionsWithoutWriteWithoutType = Omit<
  LogOptionsWithoutWrite,
  "type"
>;

/**
 *
 * Log options without type parameter (writeToFile, extra)
 *
 */
export type LogOptionsWithoutType =
  | LogOptionsWithWriteWithoutType
  | LogOptionsWithoutWriteWithoutType;

/**
 *
 * Structure of all logs created by non-static log methods
 *
 */
export type Log = {
  message: LogMessage;
  timestamp: LogTimestamp;
  index: LogIndex;
  type?: LogType;
  extra?: LogExtra;
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
  public static readonly COLORS = COLORS;

  /**
   *
   * The output file path
   *
   */
  private _logsPath?: string;
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
   * const logger = new Logger({ logsPath: __dirname + "/logs.json" });
   * ```
   */
  constructor(options?: LoggerConstructorOptions) {
    this._logsPath = options?.logsPath;
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
  public get logsPath(): InstanceType<typeof Logger>["_logsPath"] {
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
  public set logsPath(logsPath: InstanceType<typeof Logger>["_logsPath"]) {
    this._logsPath = logsPath;
  }

  /**
   *
   * Logs a message to the console and writes to the output file path
   *
   * @param message - The message to log
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
  public log(message: LogMessage): Promise<Log>;
  /**
   *
   * Logs a message to the console and DOES NOT write to the output file path
   *
   * @param message - The message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.log(31, {
   *   writeToFile: false,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.log("Hello", {
   *   writeToFile: false,
   *   type: "error",
   * });
   * ```
   */
  public log(message: LogMessage, logOptions: LogOptionsWithoutWrite): Log;
  /**
   *
   * Logs a message to the console and writes to the output file path
   *
   * @param message - The message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.log("Hello", {
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.log(["hi", "hello"], {
   *   writeToFile: true,
   *   type: "success",
   * });
   * ```
   * @example
   * ```javascript
   * await logger.log(32, {
   *   type: "info",
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public log(
    message: LogMessage,
    logOptions: LogOptionsWithWrite
  ): Promise<Log>;
  public log(message: LogMessage, logOptions?: LogOptions): Promise<Log> | Log {
    const { type } = logOptions ?? {};

    let log: Log = {
      timestamp: Date.now(),
      index: this.logs.length,
      message,
      type,
    };

    if (type) {
      assert.ok(LOG_TYPES.includes(type), INVALID_TYPE);
      Logger[type](message);
    } else Logger.log(message);

    if (!(logOptions && logOptions.writeToFile === false)) {
      const { extra } = logOptions ?? {};
      log = { ...log, extra };

      this.logs.push(log);
      return this.writeLogs().then(() => log);
    }

    this.logs.push(log);
    return log;
  }

  /**
   *
   * Logs a success message to the console and writes to the output file path
   *
   * @param message - The success message to log
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
  public success(message: LogMessage): Promise<Log>;
  /**
   *
   * Logs a success message to the console and DOES NOT write to the output file path
   *
   * @param message - The success message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.success("Hello", {
   *   writeToFile: false,
   * });
   * ```
   */
  public success(
    message: LogMessage,
    logOptions: LogOptionsWithoutWriteWithoutType
  ): Log;
  /**
   *
   * Logs a success message to the console and writes to the output file path
   *
   * @param message - The success message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.success("Hello", {
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.success(32, {
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public success(
    message: LogMessage,
    logOptions: LogOptionsWithWriteWithoutType
  ): Promise<Log>;
  public success(
    message: LogMessage,
    logOptions?: LogOptionsWithoutType
  ): Promise<Log> | Log {
    const options: LogOptions = {
      ...logOptions,
      type: "success",
    };

    if (options.writeToFile === false) return this.log(message, options);

    return this.log(message, options); // Same as above, but different overload and return value
  }

  /**
   *
   * Logs a success message to the console and writes to the output file path
   *
   * @param message - The info message to log
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
  public info(message: LogMessage): Promise<Log>;
  /**
   *
   * Logs an info message to the console and DOES NOT write to the output file path
   *
   * @param message - The info message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.info("Hello", {
   *   writeToFile: false,
   * });
   * ```
   */
  public info(
    message: LogMessage,
    logOptions: LogOptionsWithoutWriteWithoutType
  ): Log;
  /**
   *
   * Logs an info message to the console and writes to the output file path
   *
   * @param message - The info message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.info("Hello", {
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.info(32, {
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public info(
    message: LogMessage,
    logOptions: LogOptionsWithWriteWithoutType
  ): Promise<Log>;
  public info(
    message: LogMessage,
    logOptions?: LogOptionsWithoutType
  ): Promise<Log> | Log {
    const options: LogOptions = {
      ...logOptions,
      type: "info",
    };

    if (options.writeToFile === false) return this.log(message, options);

    return this.log(message, options); // Same as above, but different overload and return value
  }

  /**
   *
   * Logs a success message to the console and writes to the output file path
   *
   * @param message - The warn message to log
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
  public warn(message: LogMessage): Promise<Log>;
  /**
   *
   * Logs a warning message to the console and DOES NOT write to the output file path
   *
   * @param message - The warning message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.warn("Hello", {
   *   writeToFile: false,
   * });
   * ```
   */
  public warn(
    message: LogMessage,
    logOptions: LogOptionsWithoutWriteWithoutType
  ): Log;
  /**
   *
   * Logs a warning message to the console and writes to the output file path
   *
   * @param message - The warning message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.warn("Hello", {
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.warn(32, {
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public warn(
    message: LogMessage,
    logOptions: LogOptionsWithWriteWithoutType
  ): Promise<Log>;
  public warn(
    message: LogMessage,
    logOptions?: LogOptionsWithoutType
  ): Promise<Log> | Log {
    const options: LogOptions = {
      ...logOptions,
      type: "warn",
    };

    if (options.writeToFile === false) return this.log(message, options);

    return this.log(message, options); // Same as above, but different overload and return value
  }

  /**
   *
   * Logs a success message to the console and writes to the output file path
   *
   * @param message - The error message to log
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
  public error(message: LogMessage): Promise<Log>;
  /**
   *
   * Logs an error message to the console and DOES NOT write to the output file path
   *
   * @param message - The error message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.error("Hello", {
   *   writeToFile: false,
   * });
   * ```
   */
  public error(
    message: LogMessage,
    logOptions: LogOptionsWithoutWriteWithoutType
  ): Log;
  /**
   *
   * Logs an error message to the console and writes to the output file path
   *
   * @param message - The error message to log
   * @param logOptions - Logging options
   * @example
   * ```javascript
   * await logger.error("Hello", {
   *   writeToFile: true,
   * });
   * ```
   * @example
   * ```javascript
   * await logger.error(32, {
   *   extra: "this part is not logged"
   * });
   * ```
   */
  public error(
    message: LogMessage,
    logOptions: LogOptionsWithWriteWithoutType
  ): Promise<Log>;
  public error(
    message: LogMessage,
    logOptions?: LogOptionsWithoutType
  ): Promise<Log> | Log {
    const options: LogOptions = {
      ...logOptions,
      type: "error",
    };

    if (options.writeToFile === false) return this.log(message, options);

    return this.log(message, options); // Same as above, but different overload and return value
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
  public writeLogs(): Promise<void> {
    if (!this.logsPath) throw NO_LOGS_PATH;

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

export { Output, OutputMessage } from "./output";
export default Logger;
