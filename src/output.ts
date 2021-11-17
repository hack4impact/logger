// Internals
import { LogMessage } from "./index";
import { COLORS } from "./colors";

/**
 * The message or nested output
 */
export type OutputMessage = LogMessage | Output;

/**
 * Store and flush a series of outputs synchronously
 */
export class Output {
  /**
   *
   * ANSI Escape Sequences
   *
   * @example
   * ```javascript
   * const bold = Output.Colors.Bright;
   * ```
   */
  public static readonly COLORS = COLORS;
  /**
   *
   * All messages or nested outputs of this Output instance
   *
   */
  private _output: OutputMessage[] = [];

  /**
   *
   * All messages or nested outputs of this Output instance
   *
   */
  public get output(): OutputMessage[] {
    return this._output;
  }

  /**
   *
   * All messages or nested outputs of this Output instance
   *
   */
  private set output(newOutput: OutputMessage[]) {
    this._output = newOutput;
  }

  /**
   *
   * Adds a message to the output array
   *
   * @param value - The message to add
   * @example
   * ```javascript
   * new Output().log("hi");
   * ```
   */
  log<T extends LogMessage>(value: T): T {
    this.output.push(value);
    return value;
  }

  /**
   *
   * Adds a line break to the output array
   *
   * @example
   * ```javascript
   * new Output().line();
   * ```
   */
  public line(): void {
    this.output.push("\n");
  }

  /**
   *
   * Adds a colored message to the output array
   *
   * @param color - The color to log in
   * @param message - The message to add
   * @param afterColored - The optional message after the colored message (on the same line)
   * @returns The colored log message
   * @example
   * ```javascript
   * new Output().coloredLog("BgBlue", "hi");
   * ```
   * @example
   * ```javascript
   * new Output().coloredLog("FgYellow", "hi", "this string will not be colored");
   * ```
   */
  coloredLog(
    color: keyof typeof Output.COLORS,
    message: LogMessage,
    afterColored = ""
  ): string {
    const colored = `${Output.COLORS[color]}${message}${Output.COLORS.Reset}${afterColored}`;
    this.output.push(colored);
    return colored;
  }

  /**
   *
   * Adds a nested output instance to the output array
   *
   * @returns The nested output
   * @example
   * ```javascript
   * const nested = new Output().nested();
   * ```
   */
  nested(): Output {
    const nestedOutput = new Output();
    this.output.push(nestedOutput);
    return nestedOutput;
  }

  /**
   *
   * Logs all messages in the output array
   *
   * @returns The output array
   * @example
   * ```javascript
   * new Output().flush();
   * ```
   */
  flush(): OutputMessage[] {
    this.output.forEach((value) => {
      if (value instanceof Output) value.flush();
      else console.log(value);
    });
    const flushed = [...this.output];
    this.output = [];
    return flushed;
  }
}

export default Output;
