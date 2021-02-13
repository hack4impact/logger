// Externals
import { readFile, writeFile } from "fs/promises";

// Internals
import Logger, { Log } from "../../src";
import { logsPath, setUpConsoleSpy } from "../helpers";
import { checkFields } from "./helpers";

beforeEach(async (done) => {
  await writeFile(logsPath, "[]", "utf-8");
  done();
});

const checkConsoleSpy = (spy: jest.SpyInstance, message: string) => {
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith<[string]>(
    expect.stringMatching(new RegExp(`.*${message}.*`))
  );

  spy.mockRestore();
};

test("With only message", async () => {
  const logger = new Logger(logsPath);

  const message = "hello";

  const spy = setUpConsoleSpy();

  const log = await logger.log(message);

  checkFields(log, { message }, 0);

  const rawLogs = await readFile(logsPath, "utf-8");
  const writtenLogs: Log[] = JSON.parse(rawLogs);

  checkFields(writtenLogs[0], { message }, 0);

  checkConsoleSpy(spy, message);
});

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

    checkConsoleSpy(spy, message);
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

    checkConsoleSpy(spy, message);
  }
});
