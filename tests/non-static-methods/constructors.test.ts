// Internals
import Logger from "../../src";

test("Without Options", () => {
  const logger = new Logger();

  expect(logger.logsPath).toBeUndefined();
  expect(logger.logs).toEqual([]);
});

test("With Logs Path", () => {
  const logsPath = "logs.json";
  const logger = new Logger({ logsPath });

  expect(logger.logsPath).toEqual(logsPath);
  expect(logger.logs).toEqual([]);
});

test("Without Logs Path", () => {
  const logger = new Logger({ logsPath: undefined });

  expect(logger.logsPath).toBeUndefined();
  expect(logger.logs).toEqual([]);
});
