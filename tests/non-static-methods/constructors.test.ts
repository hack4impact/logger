// Internals
import Logger from "../../src";

test("With Logs Path", () => {
  const logsPath = "logs.json";
  const logger = new Logger(logsPath);

  expect(logger.logsPath).toEqual(logsPath);
  expect(logger.logs).toEqual([]);
});
