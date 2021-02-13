// Externals
import { basename, dirname, join } from "path";

// Internals
import Logger, { LogType, ConsoleLevel, LogMessage } from "../src";

export const setUpConsoleSpy = (
  type?: LogType | ConsoleLevel
): jest.SpyInstance => {
  let spy: jest.SpyInstance;

  if (type === "warn") {
    spy = jest.spyOn(global.console, "warn").mockImplementation();
  } else if (type === "error") {
    spy = jest.spyOn(global.console, "error").mockImplementation();
  } else {
    spy = jest.spyOn(global.console, "log").mockImplementation();
  }

  return spy;
};

export const createLogsPath = (filePath: string): string => {
  const logsPath = join(__dirname, "logs");
  const nestedLogs = join(logsPath, basename(dirname(filePath)));

  return join(nestedLogs, basename(filePath, ".test.ts") + ".json");
};

export const createSuccessRegex = (
  message: LogMessage,
  afterColored = ""
): string =>
  `${Logger.COLORS.FgGreen}${message}${Logger.COLORS.Reset}${afterColored}`;
