// Internals
import Logger from "../src";
import { logsPath } from "./constants";

test("With Logs Path", () => {
  const logger = new Logger(logsPath);

  expect(logger.logsPath).toEqual(logsPath);
  expect(logger.logs).toEqual([]);
});
