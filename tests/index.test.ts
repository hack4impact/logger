import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import Logger, { Log, LogType } from "../src";

const logsPath = join(__dirname, "logs.json");

describe("Constructors", () => {
  test("With Logs Path", () => {
    const logger = new Logger(logsPath);

    expect(logger.logsPath).toEqual(logsPath);
    expect(logger.logs).toEqual([]);
  });
});

describe("Setters", () => {
  test("Set Logs Path", () => {
    const logger = new Logger(logsPath);

    const newPath = join(__dirname, "other-logs.json");

    logger.logsPath = newPath;
    expect(logger.logsPath).toEqual(newPath);
  });
});

describe("Log Method", () => {
  beforeEach(async (done) => {
    await writeFile(logsPath, "[]", "utf-8");
    done();
  });

  const checkFields = (log: Log, params: Partial<Log>, index: number) => {
    const { message, type, extra } = params;

    expect(log.message).toEqual(message);
    expect(log.index).toEqual(index);
    expect(new Date(log.timestamp).toString()).not.toEqual("Invalid Date");
    expect(log.type).toEqual(type);
    expect(log.extra).toEqual(extra);
  };

  const setUpConsoleSpy = (type: LogType) => {
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

  test("With writeToFile enabled", async () => {
    const logger = new Logger(logsPath);

    const testParams: Partial<Log>[] = [
      { message: "hello" },
      { message: "hi", type: "warn" },
      { message: "howdy", extra: "Extra.." },
      { message: "hola", type: "success", extra: "Extra!" },
    ];

    for (let i = 0; i < testParams.length; i++) {
      const params = testParams[i];
      const { message, type, extra } = params;

      const spy = setUpConsoleSpy(type);

      const log = await logger.log(message, true, type, extra);

      checkFields(log, params, i);

      const rawLogs = await readFile(logsPath, "utf-8");
      const writtenLogs: Log[] = JSON.parse(rawLogs);

      checkFields(writtenLogs[i], params, i);

      expect(spy).toHaveBeenCalledTimes(1);

      spy.mockRestore();
    }
  });

  test("With writeToFile disabled", async () => {
    const logger = new Logger(logsPath);

    const testParams: Partial<Log>[] = [
      { message: "hello" },
      { message: "hi", type: "warn" },
    ];

    for (let i = 0; i < testParams.length; i++) {
      const params = testParams[i];
      const { message, type } = params;

      const spy = setUpConsoleSpy(type);

      const log = logger.log(message, false, type);

      checkFields(log, params, i);

      const rawLogs = await readFile(logsPath, "utf-8");
      const writtenLogs: Log[] = JSON.parse(rawLogs);

      expect(writtenLogs.length).toEqual(0);

      spy.mockRestore();
    }
  });
});
