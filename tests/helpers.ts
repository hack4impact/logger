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

export const createLogsPath = (filePath: string, append = ""): string => {
  const logsPath = join(__dirname, "logs");
  const nestedLogs = join(logsPath, basename(dirname(filePath)));

  return join(nestedLogs, basename(filePath, ".test.ts") + append + ".json");
};

export const createTypeRegex = (
  message: LogMessage,
  type: LogType | "bold",
  afterColored = ""
): string => {
  const template = (color: keyof typeof Logger.COLORS) =>
    `${Logger.COLORS[color]}${message}${Logger.COLORS.Reset}${afterColored}`;

  switch (type) {
    case "success": {
      return template("FgGreen");
    }
    case "info": {
      return template("FgBlue");
    }
    case "warn": {
      return template("FgYellow");
    }
    case "error": {
      return template("FgRed");
    }
    case "bold": {
      return template("Bright");
    }
    default: {
      return null;
    }
  }
};

export const ALL_MESSAGES = [
  "message",
  212,
  new Error(),
  basename,
  ["message", new Error()],
  {
    key: "value",
  },
  false,
  /wq/,
];
