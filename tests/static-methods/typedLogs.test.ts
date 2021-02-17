// Internals
import Logger, { LOG_TYPES } from "../../src";
import { ALL_MESSAGES, createTypeRegex, setUpConsoleSpy } from "../helpers";

const typedMethods = [...LOG_TYPES, "bold"] as const;

typedMethods.forEach((type) => {
  describe(type, () => {
    test("With only message", () => {
      ALL_MESSAGES.forEach((message) => {
        //@ts-expect-error If not a valid type, will default to console.log
        const spy = setUpConsoleSpy(type);

        Logger[type](message);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenLastCalledWith<[string]>(
          createTypeRegex(message, type)
        );

        spy.mockRestore();
      });
    });

    test("With message and afterColored", () => {
      ALL_MESSAGES.forEach((message) => {
        //@ts-expect-error If not a valid type, will default to console.log
        const spy = setUpConsoleSpy(type);

        const afterColored = "not colored...";

        Logger[type](message, afterColored);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenLastCalledWith<[string]>(
          createTypeRegex(message, type, afterColored)
        );

        spy.mockRestore();
      });
    });
  });
});
