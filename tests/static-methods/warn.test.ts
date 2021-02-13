// Internals
import Logger from "../../src";
import { setUpConsoleSpy } from "../helpers";

test("With only message", () => {
  const spy = setUpConsoleSpy("warn");

  const message = "WARNING!";

  Logger.warn(message);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.FgYellow}${message}${Logger.COLORS.Reset}`
  );

  spy.mockRestore();
});

test("With message and afterColored", () => {
  const spy = setUpConsoleSpy("warn");

  const message = "WARNING!";
  const afterColored = "not yellow...";

  Logger.warn(message, afterColored);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.FgYellow}${message}${Logger.COLORS.Reset}${afterColored}`
  );

  spy.mockRestore();
});
