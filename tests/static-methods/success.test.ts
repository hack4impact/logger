// Internals
import Logger from "../../src";
import { createSuccessRegex, setUpConsoleSpy } from "../helpers";

test("With only message", () => {
  const spy = setUpConsoleSpy();

  const message = "SUCCESS!";

  Logger.success(message);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(createSuccessRegex(message));

  spy.mockRestore();
});

test("With message and afterColored", () => {
  const spy = setUpConsoleSpy();

  const message = "SUCCESS!";
  const afterColored = "not green...";

  Logger.success(message, afterColored);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(
    createSuccessRegex(message, afterColored)
  );

  spy.mockRestore();
});
