// Internals
import Logger from "../../src";
import { setUpConsoleSpy } from "../helpers";

test("With only message", () => {
  const spy = setUpConsoleSpy();

  const message = "SUCCESS!";

  Logger.success(message);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.FgGreen}${message}${Logger.COLORS.Reset}`
  );

  spy.mockRestore();
});

test("With message and afterColored", () => {
  const spy = setUpConsoleSpy();

  const message = "SUCCESS!";
  const afterColored = "not green...";

  Logger.success(message, afterColored);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.FgGreen}${message}${Logger.COLORS.Reset}${afterColored}`
  );

  spy.mockRestore();
});
