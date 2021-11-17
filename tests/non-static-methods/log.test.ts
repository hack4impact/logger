// Externals
import { readFile, writeFile } from "fs/promises";

// Internals
import Logger, {
  Log,
  LogMessage,
  LogOptionsWithWrite,
  LogOptionsWithoutWrite,
} from "../../src";
import { INVALID_TYPE } from "../../src/errors";
import { createLogsPath, setUpConsoleSpy } from "../helpers";
import { checkFields, checkConsoleSpy } from "./helpers";

const logsPath = createLogsPath(__filename);

const withWriteOptions: LogOptionsWithWrite[] = [
  { type: "warn" },
  { extra: "Extra.." },
  { type: "success", extra: "Extra!" },
  { type: "warn", writeToFile: true },
  { extra: "Extra..", writeToFile: true },
  { type: "success", extra: "Extra!", writeToFile: true },
];

beforeEach(async () => {
  await writeFile(logsPath, "[]", "utf-8");
});

test("With only message", async () => {
  const logger = new Logger({ logsPath });
  const messages: LogMessage[] = ["hello", true, ["hi there", ["hi"], 312]];

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    const spy = setUpConsoleSpy();

    const log = await logger.log(message);

    checkFields(log, message, i);

    const rawLogs = await readFile(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    checkFields(writtenLogs[i], message, i);

    checkConsoleSpy(spy, log);
  }
});

test("With writeToFile enabled", async () => {
  const logger = new Logger({ logsPath });
  const message = "hi";

  for (let i = 0; i < withWriteOptions.length; i++) {
    const options = withWriteOptions[i];

    const spy = setUpConsoleSpy(options.type);

    const log = await logger.log(message, options);

    checkFields(log, message, i, options);

    const rawLogs = await readFile(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    checkFields(writtenLogs[i], message, i, options);

    checkConsoleSpy(spy, log);
  }
});

test("With writeToFile disabled", async () => {
  const logger = new Logger({ logsPath });
  const message = "hi";

  const testOptions: LogOptionsWithoutWrite[] = [
    { type: "success", writeToFile: false },
    { writeToFile: false },
  ];

  for (let i = 0; i < testOptions.length; i++) {
    const options = testOptions[i];

    const spy = setUpConsoleSpy(options.type);

    const log = logger.log(message, options);

    checkFields(log, message, i, options);

    const rawLogs = await readFile(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    expect(writtenLogs.length).toEqual(0);

    checkConsoleSpy(spy, log);
  }
});

test("With no logsPath", async () => {
  const logger = new Logger();
  const message = "hi";

  for (let i = 0; i < withWriteOptions.length; i++) {
    const options = withWriteOptions[i];
    const spy = setUpConsoleSpy(options.type);
    expect(() => logger.log(message, options)).toThrowError();
    spy.mockRestore();
  }
});

test("With invalid type", () => {
  const logger = new Logger({ logsPath });
  const invalidTypes = [31, "invalid-type", [], true, new Error(), writeFile];

  invalidTypes.forEach((invalid) => {
    expect(() =>
      logger.log("hi", {
        writeToFile: false,
        // @ts-expect-error Testing for invalid types
        type: invalid,
      })
    ).toThrowError(INVALID_TYPE.message);
  });
});
