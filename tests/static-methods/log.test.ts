// Internals
import Logger from "../../src";
import { setUpConsoleSpy } from "../helpers";

test("With only message", () => {
  const spy = setUpConsoleSpy();
  const message = "hi";

  Logger.log(message);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string]>(message);
});

test("With message and substitution strings", () => {
  const spy = setUpConsoleSpy();
  const message = "Hi %s! How is %s?";
  const sub1 = "Bill";
  const sub2 = "life";

  Logger.log(message, sub1, sub2);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenLastCalledWith<[string, string, string]>(
    message,
    sub1,
    sub2
  );
});
