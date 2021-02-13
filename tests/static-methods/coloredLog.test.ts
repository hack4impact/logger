// Internals
import Logger, { ConsoleLevel } from "../../src";
import { setUpConsoleSpy } from "../helpers";

test("With only color & message", () => {
  const spy = setUpConsoleSpy();

  const color: keyof typeof Logger.COLORS = "FgCyan";
  const message = "COLORED!";

  Logger.coloredLog(color, message);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS[color]}${message}${Logger.COLORS.Reset}`
  );

  spy.mockRestore();
});

test("With color, message, and afterColored", () => {
  const spy = setUpConsoleSpy();

  const color: keyof typeof Logger.COLORS = "FgCyan";
  const message = "COLORED!";
  const afterColored = "not colored...";

  Logger.coloredLog(color, message, afterColored);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS[color]}${message}${Logger.COLORS.Reset}${afterColored}`
  );

  spy.mockRestore();
});

test("With color, message, afterColored, and consoleLevel", () => {
  const levels: ConsoleLevel[] = ["log", "error", "warn"];

  levels.forEach((level) => {
    const spy = setUpConsoleSpy(level);

    const color: keyof typeof Logger.COLORS = "FgCyan";
    const message = "COLORED!";
    const afterColored = "not colored...";

    Logger.coloredLog(color, message, afterColored, level);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith<[string]>(
      `${Logger.COLORS[color]}${message}${Logger.COLORS.Reset}${afterColored}`
    );

    spy.mockRestore();
  });
});
