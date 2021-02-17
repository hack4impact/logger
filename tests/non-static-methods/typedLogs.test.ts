// Externals
import { readFile, writeFile } from "fs/promises";

// Internals
import Logger, {
  Log,
  LogMessage,
  LogOptionsWithWriteWithoutType,
  LOG_TYPES,
} from "../../src";
import { createLogsPath, setUpConsoleSpy } from "../helpers";
import { checkFields, checkConsoleSpy } from "./helpers";

LOG_TYPES.forEach((type) => {
  const logsPath = createLogsPath(__filename, "-" + type);

  describe(type, () => {
    beforeEach(async () => {
      await writeFile(logsPath, "[]", "utf-8");
    });

    test("With only message", async () => {
      const logger = new Logger(logsPath);

      const messages: LogMessage[] = ["hello", true, ["hi there", ["hi"], 312]];

      for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const spy = setUpConsoleSpy(type);

        const log = logger[type](message);

        checkFields(log, message, i, { type, writeToFile: false });

        const rawLogs = await readFile(logsPath, "utf-8");
        const writtenLogs: Log[] = JSON.parse(rawLogs);

        expect(writtenLogs.length).toEqual(0);

        checkConsoleSpy(spy, log);
      }
    });

    test("With writeToFile enabled", async () => {
      const logger = new Logger(logsPath);

      const message = "hi";

      const testParams: Omit<
        LogOptionsWithWriteWithoutType,
        "writeToFile"
      >[] = [{ extra: "Extra" }, { extra: ["extra....."] }];

      for (let i = 0; i < testParams.length; i++) {
        const options: LogOptionsWithWriteWithoutType = {
          writeToFile: true,
          ...testParams[i],
        };

        const spy = setUpConsoleSpy(type);

        const log = await logger[type](message, options);

        checkFields(log, message, i, { ...options, type });

        const rawLogs = await readFile(logsPath, "utf-8");
        const writtenLogs: Log[] = JSON.parse(rawLogs);

        checkFields(writtenLogs[i], message, i, { ...options, type });

        checkConsoleSpy(spy, log);
      }
    });

    test("With writeToFile disabled", async () => {
      const logger = new Logger(logsPath);

      const message = "hi";

      const spy = setUpConsoleSpy(type);

      const log = logger[type](message, { writeToFile: false });

      checkFields(log, message, 0, { type, writeToFile: false });

      const rawLogs = await readFile(logsPath, "utf-8");
      const writtenLogs: Log[] = JSON.parse(rawLogs);

      expect(writtenLogs.length).toEqual(0);

      checkConsoleSpy(spy, log);
    });
  });
});
