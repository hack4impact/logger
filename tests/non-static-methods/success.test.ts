// Externals
import { readFile, writeFile } from "fs/promises";

// Internals
import Logger, { Log } from "../../src";
import { checkFields } from "./helpers";
import {
  createLogsPath,
  createSuccessRegex,
  setUpConsoleSpy,
} from "../helpers";

const logsPath = createLogsPath(__filename);

beforeEach(async (done) => {
  await writeFile(logsPath, "[]", "utf-8");
  done();
});

const checkConsoleSpy = (spy: jest.SpyInstance, message: string) => {
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith<[string]>(createSuccessRegex(message));

  spy.mockRestore();
};

const checkSuccessFields = (log: Log, params: Partial<Log>, index: number) =>
  checkFields(log, params, index, { type: "success" });

test("With only message", async () => {
  const logger = new Logger(logsPath);

  const message = "success!!";

  const spy = setUpConsoleSpy("success");

  const log = await logger.success(message);

  checkSuccessFields(log, { message }, 0);

  const rawLogs = await readFile(logsPath, "utf-8");
  const writtenLogs: Log[] = JSON.parse(rawLogs);

  checkSuccessFields(writtenLogs[0], { message }, 0);

  checkConsoleSpy(spy, message);
});

test("With writeToFile enabled", async () => {
  const logger = new Logger(logsPath);

  const testParams: Partial<Log>[] = [
    { message: "success!!" },
    { message: "success!!!", extra: "Extra.." },
  ];

  for (let i = 0; i < testParams.length; i++) {
    const params = testParams[i];
    const { message, extra } = params;

    const spy = setUpConsoleSpy("success");

    const log = await logger.success(message, true, extra);

    checkSuccessFields(log, params, i);

    const rawLogs = await readFile(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    checkSuccessFields(writtenLogs[i], params, i);

    checkConsoleSpy(spy, message);
  }
});

test("With writeToFile disabled", async () => {
  const logger = new Logger(logsPath);

  const message = "success!!";

  const spy = setUpConsoleSpy("success");

  const log = logger.success(message, false);

  checkSuccessFields(log, { message }, 0);

  const rawLogs = await readFile(logsPath, "utf-8");
  const writtenLogs: Log[] = JSON.parse(rawLogs);

  expect(writtenLogs.length).toEqual(0);

  checkConsoleSpy(spy, message);
});
