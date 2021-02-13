// Externals
import { readFileSync } from "fs";
import { readFile, writeFile } from "fs/promises";

// Internals
import Logger, {
  Log,
  LogMessage,
  LogParameterWithWrite,
  LogParameterWithoutWrite,
} from "../../src";
import { createLogsPath, setUpConsoleSpy } from "../helpers";
import { checkFields } from "./helpers";

const logsPath = createLogsPath(__filename);

const checkConsoleSpy = (spy: jest.SpyInstance, log: Log) => {
  const { message, type } = log;

  expect(spy).toHaveBeenCalledTimes(1);

  if (type !== undefined || typeof message === "string")
    expect(spy).toHaveBeenCalledWith<[string]>(
      expect.stringMatching(new RegExp(`.*${message}.*`))
    );
  else if (typeof message === "number")
    expect(spy).toHaveBeenCalledWith<[number]>(message);
  else if (Array.isArray(message))
    expect(spy).toHaveBeenCalledWith<[LogMessage[]]>(message);

  spy.mockRestore();
};

beforeEach(async () => {
  await writeFile(logsPath, "[]", "utf-8");
});

test("With only message", async () => {
  const logger = new Logger(logsPath);

  const messages: LogMessage[] = ["hello", 43, ["hi there", ["hi"], 312]];

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    const spy = setUpConsoleSpy();

    const log = logger.log(message);

    checkFields(log, { message }, i);

    const rawLogs = readFileSync(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    expect(writtenLogs.length).toEqual(0);

    checkConsoleSpy(spy, log);
  }
});

test("With writeToFile enabled", async () => {
  const logger = new Logger(logsPath);

  const testParams: Partial<LogParameterWithWrite>[] = [
    { message: "hello" },
    { message: ["hi", 1212], type: "warn" },
    { message: 1212, extra: "Extra.." },
    { message: [2121, 12, [121], "qwd"], type: "success", extra: "Extra!" },
  ];

  for (let i = 0; i < testParams.length; i++) {
    const params: LogParameterWithWrite = {
      message: "",
      writeToFile: true,
      ...testParams[i],
    };

    const spy = setUpConsoleSpy(params.type);

    const log = await logger.log(params);

    checkFields(log, params, i);

    const rawLogs = readFileSync(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    checkFields(writtenLogs[i], params, i);

    checkConsoleSpy(spy, log);
  }
});

test("With writeToFile disabled", async () => {
  const logger = new Logger(logsPath);

  const testParams: Partial<LogParameterWithoutWrite>[] = [
    { message: ["hello", 1212, ["hi"]] },
    { message: 121 },
    { message: "hi", type: "warn" },
  ];

  for (let i = 0; i < testParams.length; i++) {
    const params: LogParameterWithoutWrite = {
      message: "",
      writeToFile: false,
      ...testParams[i],
    };

    const spy = setUpConsoleSpy(params.type);

    const log = logger.log(params);

    checkFields(log, params, i);

    const rawLogs = await readFile(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    expect(writtenLogs.length).toEqual(0);

    checkConsoleSpy(spy, log);
  }
});
