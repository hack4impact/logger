// Externals
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

class Logger {
  /**
   * @description ANSI Escape Codes
   * @example console.log(Logger.COLORS.Dim + "Dim log" + Logger.COLORS.Reset);
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
   * @description The output file path
   */
  private logsPath: string;
  /**
   * @description All logs that have been output by this Logger instance
   */
  private logs: Log[];

  /**
   * @description Creates a new Logger instance
   * @param logsPath The output file path
   * @example const logger = new Logger(__dirname + "logs.json");
   */
  constructor(logsPath: string) {
    this.logsPath = logsPath;
    this.logs = [];
  }

  /**
   * @description Returns all logs that have been output by this Logger instance
   * @example const logs = logger.getLogs();
   */
  public getLogs(): Log[] {
    return this.logs;
  }

  /**
   * @description Returns the output file path
   * @example const logsPath = logger.getLogsPath();
   */
  public getLogsPath() {
    return this.logsPath;
  }

  /**
   * @description Logs a message to the console and writes to the output file path
   * @param message The message to log
   * @example await logger.log("hi");
   */
  public log(message: LogMessage): Promise<void>;
  /**
   * @description Logs a message to the console and writes to the output file path
   * @param message The message to log
   * @param writeToFile Should write to file
   * @param type The type of log
   * @param extra Extra information to write to file (will not be logged)
   * @example await logger.log("hi", true);
   * @example await logger.log("hi", true, "info");
   * @example await logger.log("hi", true, "success", "extra info that is not logged");
   */
  public log(
    message: LogMessage,
    writeToFile: true,
    type?: LogType,
    extra?: LogExtra
  ): Promise<void>;
  /**
   * @description Logs a message to the console
   * @param message The message to log
   * @param writeToFile Should write to file
   * @param type The type of log
   * @example logger.log("hi", false);
   * @example logger.log("hi", false, "info");
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
   * @description Writes the logs stored in `this.logs` to the output file
   * @example await logger.writeLogs();
   */
  private writeLogs(): Promise<void> {
    return writeFile(this.logsPath, JSON.stringify(this.logs), "utf-8");
  }

  /**
   * @description Sets the output file path
   * @param logsPath The output file path
   * @example logger.setLogsPath(__dirname + "logs.json");
   */
  public setLogsPath(logsPath: string) {
    this.logsPath = logsPath;
  }

  /**
   * @description Logs to the console
   * @param message The message to log
   * @param optionalParams Substitution strings
   * @example Logger.log("hi");
   * @example Logger.log("hi %s", "Bill");
   */
  static log(message?: any, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
  }

  /**
   * @description Logs an empty line to the console
   * @example Logger.line();
   */
  static line(): void {
    console.log();
  }

  /**
   * @description Logs a colored message to the console
   * @param color The color to log in
   * @param message The message to log
   * @param afterColored The optional message after the colored message (on the same line)
   * @param consoleLevel The console level to use (log, warn, or error)
   * @example Logger.coloredLog("BgBlue", "hi");
   * @example Logger.coloredLog("FgYellow", "hi", "this string will not be colored");
   * @example Logger.coloredLog("FgRed", "error!!!", "", "error");
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
   * @description Logs a bold message
   * @param message The message to log
   * @param afterColored The optional message after the colored message (on the same line)
   * @example Logger.bold("BOLD!");
   * @example Logger.bold("BOLD!", "this part is not bold");
   */
  static bold(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("Bright", message, afterColored);
  }

  /**
   * @description Logs a success message in green
   * @param message The message to log
   * @param afterColored The optional message after the colored message (on the same line)
   * @example Logger.bold("SUCCESS!");
   * @example Logger.bold("SUCCESS!", "this part is not green");
   */
  static success(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgGreen", message, afterColored);
  }

  /**
   * @description Logs an info message in blue
   * @param message The message to log
   * @param afterColored The optional message after the colored message (on the same line)
   * @example Logger.bold("information...");
   * @example Logger.bold("information...", "this part is not blue");
   */
  static info(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgBlue", message, afterColored);
  }

  /**
   * @description Logs a warning message in yellow
   * @param message The message to log
   * @param afterColored The optional message after the colored message (on the same line)
   * @example Logger.bold("WARNING!");
   * @example Logger.bold("WARNING!", "this part is not yellow");
   */
  static warn(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgYellow", message, afterColored, "warn");
  }

  /**
   * @description Logs an error message in red
   * @param message The message to log
   * @param afterColored The optional message after the colored message (on the same line)
   * @example Logger.bold("ERROR!");
   * @example Logger.bold("ERROR!", "this part is not red");
   */
  static error(message: LogMessage, afterColored = ""): void {
    return this.coloredLog("FgRed", message, afterColored, "error");
  }
}

export default Logger;
