// Internals
import { Output } from "../../src";
import { ALL_MESSAGES, setUpConsoleSpy } from "../helpers";

test("Logs and flushes message", () => {
  const output = new Output();
  const spy = setUpConsoleSpy();

  ALL_MESSAGES.forEach((message) => {
    output.log(message);
    expect(spy).toHaveBeenCalledTimes(0);

    output.line();
    expect(spy).toHaveBeenCalledTimes(0);

    output.flush();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(1, message);
    expect(spy).toHaveBeenNthCalledWith(2, "\n");

    spy.mockReset();
  });

  spy.mockRestore();
});
