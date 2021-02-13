// Externals
import { join } from "path";

// Internals
import Logger from "../../src";
import { logsPath } from "../helpers";

test("Set Logs Path", () => {
  const logger = new Logger(logsPath);

  const newPath = join(__dirname, "other-logs.json");

  logger.logsPath = newPath;
  expect(logger.logsPath).toEqual(newPath);
});
