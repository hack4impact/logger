// Internals
import { Output } from "../../src";
import { ALL_MESSAGES, setUpConsoleSpy } from "../helpers";

test("Empty nested", () => {
  const output = new Output();
  const spy = setUpConsoleSpy();

  output.nested();
  output.flush();

  expect(spy).toHaveBeenCalledTimes(0);

  spy.mockRestore();
});

test("With nested", () => {
  const output = new Output();
  const spy = setUpConsoleSpy();

  const nestedMessage = "this is nested";
  const firstMessage = "hi";
  output.log(firstMessage);

  ALL_MESSAGES.forEach((message) => {
    const nested = output.nested();
    nested.log(nestedMessage);
    nested.log(message);
  });

  output.flush();

  expect(spy).toHaveBeenCalledTimes(ALL_MESSAGES.length * 2 + 1);
  expect(spy).toHaveBeenNthCalledWith(1, firstMessage);
  ALL_MESSAGES.forEach((message, i) => {
    expect(spy).toHaveBeenNthCalledWith(i * 2 + 2, nestedMessage);
    expect(spy).toHaveBeenNthCalledWith(i * 2 + 3, message);
  });

  spy.mockRestore();
});
