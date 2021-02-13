// Internals
import Logger from "../../src";
import { setUpConsoleSpy } from "../helpers";

test("Prints empty line", () => {
  const spy = setUpConsoleSpy();

  Logger.line();

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[]>();

  spy.mockRestore();
});
