// Internals
import Logger from "../../src";
import { setUpConsoleSpy } from "../helpers";

test("With only message", () => {
  const spy = setUpConsoleSpy();

  const message = "INFO!";

  Logger.info(message);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.FgBlue}${message}${Logger.COLORS.Reset}`
  );

  spy.mockRestore();
});

test("With message and afterColored", () => {
  const spy = setUpConsoleSpy();

  const message = "INFO!";
  const afterColored = "not blue...";

  Logger.info(message, afterColored);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.FgBlue}${message}${Logger.COLORS.Reset}${afterColored}`
  );

  spy.mockRestore();
});
