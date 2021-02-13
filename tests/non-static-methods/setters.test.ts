// Externals
import { join } from "path";

// Internals
import Logger from "../../src";

test("Set Logs Path", () => {
  const logsPath = "logs.json";
  const logger = new Logger(logsPath);

  const newPath = join(__dirname, "other-logs.json");

  logger.logsPath = newPath;
  expect(logger.logsPath).toEqual(newPath);
});
