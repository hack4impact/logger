// Internals
import { Output } from "../../src";
import { ALL_MESSAGES, setUpConsoleSpy } from "../helpers";

test("With only color & message", () => {
  const output = new Output();
  const color: keyof typeof Output.COLORS = "FgCyan";
  const spy = setUpConsoleSpy();

  ALL_MESSAGES.forEach((message) => {
    output.coloredLog(color, message);
    expect(spy).toHaveBeenCalledTimes(0);

    output.flush();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith<[string]>(
      `${Output.COLORS[color]}${message}${Output.COLORS.Reset}`
    );

    spy.mockReset();
  });

  spy.mockRestore();
});

test("With color, message, and afterColored", () => {
  const output = new Output();
  const color: keyof typeof Output.COLORS = "FgCyan";
  const afterColored = "not colored...";
  const spy = setUpConsoleSpy();

  ALL_MESSAGES.forEach((message) => {
    output.coloredLog(color, message, afterColored);
    expect(spy).toHaveBeenCalledTimes(0);

    output.flush();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith<[string]>(
      `${Output.COLORS[color]}${message}${Output.COLORS.Reset}${afterColored}`
    );

    spy.mockReset();
  });

  spy.mockRestore();
});
