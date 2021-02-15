import { LOG_TYPES } from "./index";

export const INVALID_MESSAGE = new TypeError(
  "Value for 'message' parameter must be a valid LogMessage (string, number, or array)"
);

export const INVALID_TYPE = new TypeError(
  `Value for 'type' parameter must be one of ${LOG_TYPES}`
);
