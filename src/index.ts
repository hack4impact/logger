// Node
import { writeFile } from "fs/promises";

export type LogType = "success" | "info" | "error" | "warn";

export type LogMessage = any;

export type LogTimestamp = number;

export type LogIndex = number;

export type LogExtra = unknown;

export interface Log {
  message: LogMessage;
  timestamp: LogTimestamp;
  index: LogIndex;
  type?: LogType;
  extra?: LogExtra;
}

export class Logger {
  /**
   *
   * ANSI Escape Codes
   *
   * @example
   * ```javascript
   * console.log(Logger.COLORS.Dim + "Dim log" + Logger.COLORS.Reset);
   * ```
   */
  static readonly COLORS = {
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
   * const logger = new Logger(__dirname + "logs.json");
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
   * logger.logsPath = __dirname + "logs.json";
   * ```
   */
  public set logsPath(logsPath: string) {
    this._logsPath = logsPath;
  }

  /**
   *
   * Logs a message to the console and writes to the output file path
   *
   * @param message - The message to log
   * @example
   * ```javascript
   * await logger.log("hi");
   * ```
   */
  public log(message: LogMessage): Promise<void>;
  /**
   *
   * Logs a message to the console and writes to the output file path
   *
   * @param message - The message to log
   * @param writeToFile - Should write to file
   * @param type - The type of log
   * @param extra - Extra information to write to file (will not be logged)
   * @example
   * ```javascript
   * await logger.log("hi", true);
   * ```
   * @example
   * ```javascript
   * await logger.log("hi", true, "info");
   * ```
   * @example
   * ```javascript
   * await logger.log("hi", true, "success", "extra info that is not logged");
   * ```
   */
  public log(
    message: LogMessage,
    writeToFile: true,
    type?: LogType,
    extra?: LogExtra
  ): Promise<void>;
  /**
   *
   * Logs a message to the console
   *
   * @param message - The message to log
   * @param writeToFile - Should write to file
   * @param type - The type of log
   * @example
   * ```javascript
   * logger.log("hi", false);
   * ```
   * @example
   * ```javascript
   * logger.log("hi", false, "info");
   * ```
   */
  public log(message: LogMessage, writeToFile: false, type?: LogType): void;
  public log(
    message: LogMessage,
    writeToFile?: boolean,
    type?: LogType,
    extra?: LogExtra
  ): Promise<void> | void {
    const newLog: Log = {
      message,
      timestamp: Date.now(),
      type,
      index: this.logs.length,
      extra,
    };

    this.logs.push(newLog);

    if (type) Logger[type](message);
    else Logger.log(message);

    if (writeToFile === undefined) writeToFile = true;
    if (writeToFile) this.writeLogs();
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
  static log(message?: unknown, ...optionalParams: any[]): void {
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
  static line(): void {
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
   * Logger.coloredLog("FgRed", "error!!!", "", "error");
   * ```
   */
  static coloredLog(
    color: keyof typeof Logger.COLORS,
    message = "",
    afterColored = "",
    consoleLevel: "log" | "warn" | "error" = "log"
  ): void {
    console[consoleLevel](
      `${this.COLORS[color]}${message}${this.COLORS.Reset}${afterColored}`
    );
  }

  /**
   *
   * Logs a bold message
   *
   * @param message - The message to log
   * @param afterColored - The optional message after the colored message (on the same line)
   * @example
   * ```javascript
   * Logger.bold("BOLD!");
   * ```
   * @example
   * ```javascript
   * Logger.bold("BOLD!", "this part is not bold");
   * ```
   */
  static bold(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("Bright", message, afterColored);
  }

  /**
   *
   * Logs a success message in green
   *
   * @param message - The message to log
   * @param afterColored - The optional message after the colored message (on the same line)
   * @example
   * ```javascript
   * Logger.bold("SUCCESS!");
   * ```
   * @example
   * ```javascript
   * Logger.bold("SUCCESS!", "this part is not green");
   * ```
   */
  static success(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgGreen", message, afterColored);
  }

  /**
   *
   * Logs an info message in blue
   *
   * @param message - The message to log
   * @param afterColored - The optional message after the colored message (on the same line)
   * @example
   * ```javascript
   * Logger.bold("information...");
   * ```
   * @example
   * ```javascript
   * Logger.bold("information...", "this part is not blue");
   * ```
   */
  static info(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgBlue", message, afterColored);
  }

  /**
   *
   * Logs a warning message in yellow
   *
   * @param message - The message to log
   * @param afterColored - The optional message after the colored message (on the same line)
   * @example
   * ```javascript
   * Logger.bold("WARNING!");
   * ```
   * @example
   * ```javascript
   * Logger.bold("WARNING!", "this part is not yellow");
   * ```
   */
  static warn(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgYellow", message, afterColored, "warn");
  }

  /**
   *
   * Logs an error message in red
   *
   * @param message - The message to log
   * @param afterColored - The optional message after the colored message (on the same line)
   * @example
   * ```javascript
   * Logger.bold("ERROR!");
   * ```
   * @example
   * ```javascript
   * Logger.bold("ERROR!", "this part is not red");
   * ```
   */
  static error(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgRed", message, afterColored, "error");
  }
}

export default Logger;
