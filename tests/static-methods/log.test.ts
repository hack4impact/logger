// Internals
import Logger from "../../src";
import { ALL_MESSAGES, setUpConsoleSpy } from "../helpers";

test("With only message", () => {
  ALL_MESSAGES.forEach((message) => {
    const spy = setUpConsoleSpy();

    Logger.log(message);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith<[typeof message]>(message);

    spy.mockRestore();
  });
});

test("With message and substitution strings", () => {
  ALL_MESSAGES.forEach((message) => {
    const spy = setUpConsoleSpy();
    const sub1 = "Bill";
    const sub2 = "life";

    Logger.log(message, sub1, sub2);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith<[typeof message, string, string]>(
      message,
      sub1,
      sub2
    );

    spy.mockRestore();
  });
});
