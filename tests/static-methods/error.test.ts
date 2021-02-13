// Internals
import Logger from "../../src";
import { setUpConsoleSpy } from "../helpers";

test("With only message", () => {
  const spy = setUpConsoleSpy("error");

  const message = "WARNING!";

  Logger.error(message);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.FgRed}${message}${Logger.COLORS.Reset}`
  );

  spy.mockRestore();
});

test("With message and afterColored", () => {
  const spy = setUpConsoleSpy("error");

  const message = "WARNING!";
  const afterColored = "not yellow...";

  Logger.error(message, afterColored);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.FgRed}${message}${Logger.COLORS.Reset}${afterColored}`
  );

  spy.mockRestore();
});
