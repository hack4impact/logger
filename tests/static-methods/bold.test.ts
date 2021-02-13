// Internals
import Logger from "../../src";
import { setUpConsoleSpy } from "../helpers";

test("With only message", () => {
  const spy = setUpConsoleSpy();

  const message = "BOLD!";

  Logger.bold(message);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.Bright}${message}${Logger.COLORS.Reset}`
  );

  spy.mockRestore();
});

test("With message and afterColored", () => {
  const spy = setUpConsoleSpy();

  const message = "BOLD!";
  const afterColored = "not bold...";

  Logger.bold(message, afterColored);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    `${Logger.COLORS.Bright}${message}${Logger.COLORS.Reset}${afterColored}`
  );

  spy.mockRestore();
});
