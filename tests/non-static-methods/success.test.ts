// Externals
import { readFile, writeFile } from "fs/promises";

// Internals
import Logger, {
  Log,
  LogMessage,
  LogParameterWithoutWriteWithoutType,
  LogParameterWithWriteWithoutType,
} from "../../src";
import { createLogsPath, setUpConsoleSpy } from "../helpers";
import { checkFields, checkConsoleSpy } from "./helpers";

const logsPath = createLogsPath(__filename);

beforeEach(async () => {
  await writeFile(logsPath, "[]", "utf-8");
});

test("With only message", async () => {
  const logger = new Logger(logsPath);

  const messages: LogMessage[] = ["hello", true, ["hi there", ["hi"], 312]];

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    const spy = setUpConsoleSpy("success");

    const log = logger.success(message);

    checkFields(log, { message, type: "success" }, i);

    const rawLogs = await readFile(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    expect(writtenLogs.length).toEqual(0);

    checkConsoleSpy(spy, log);
  }
});

test("With writeToFile enabled", async () => {
  const logger = new Logger(logsPath);

  const testParams: Pick<Log, "message" | "extra">[] = [
    { message: "hello" },
    { message: ["hi", 1212, false] },
    { message: 1212, extra: "Extra.." },
    { message: [2121, true, [121], "qwd"], extra: "Extra!" },
  ];

  for (let i = 0; i < testParams.length; i++) {
    const params: LogParameterWithWriteWithoutType = {
      writeToFile: true,
      ...testParams[i],
    };

    const spy = setUpConsoleSpy("success");

    const log = await logger.success(params);

    checkFields(log, params, i, { type: "success" });

    const rawLogs = await readFile(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    checkFields(writtenLogs[i], params, i, { type: "success" });

    checkConsoleSpy(spy, log);
  }
});

test("With writeToFile disabled", async () => {
  const logger = new Logger(logsPath);

  const testParams: Pick<Log, "message">[] = [
    { message: ["hello", 1212, ["hi"]] },
    { message: [false, 212] },
    { message: "hi" },
  ];

  for (let i = 0; i < testParams.length; i++) {
    const params: LogParameterWithoutWriteWithoutType = {
      writeToFile: false,
      ...testParams[i],
    };

    const spy = setUpConsoleSpy("success");

    const log = logger.success(params);

    checkFields(log, params, i, { type: "success" });

    const rawLogs = await readFile(logsPath, "utf-8");
    const writtenLogs: Log[] = JSON.parse(rawLogs);

    expect(writtenLogs.length).toEqual(0);

    checkConsoleSpy(spy, log);
  }
});
