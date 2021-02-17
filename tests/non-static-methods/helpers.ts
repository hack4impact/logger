// Internals
import { Log, LogMessage, LogOptions } from "../../src";

export const checkFields = (
  log: Log,
  message: LogMessage,
  index: number,
  options?: LogOptions
): void => {
  //@ts-expect-error Checking for all possibilities
  const { type, extra } = options ?? {};

  expect(log.message).toEqual(message);
  expect(log.index).toEqual(index);
  expect(new Date(log.timestamp).toString()).not.toEqual("Invalid Date");
  expect(log.type).toEqual(type);
  expect(log.extra).toEqual(extra);
};

export const checkConsoleSpy = (spy: jest.SpyInstance, log: Log): void => {
  const { message, type } = log;

  expect(spy).toHaveBeenCalledTimes(1);

  if (type !== undefined || typeof message === "string")
    expect(spy).toHaveBeenCalledWith<[string]>(
      expect.stringMatching(new RegExp(`.*${message}.*`))
    );
  else if (typeof message === "number")
    expect(spy).toHaveBeenCalledWith<[number]>(message);
  else if (typeof message === "boolean")
    expect(spy).toHaveBeenCalledWith<[boolean]>(message);
  else if (Array.isArray(message))
    expect(spy).toHaveBeenCalledWith<[LogMessage[]]>(message);

  spy.mockRestore();
};
