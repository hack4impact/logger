// Internals
import { Log } from "../../src";

export const checkFields = (
  log: Log,
  params: Partial<Log>,
  index: number,
  defaults?: Partial<Log>
): void => {
  const allParams = { ...defaults, ...params };
  const { message, type, extra } = allParams;

  expect(log.message).toEqual(message);
  expect(log.index).toEqual(index);
  expect(new Date(log.timestamp).toString()).not.toEqual("Invalid Date");
  expect(log.type).toEqual(type);
  expect(log.extra).toEqual(extra);
};
