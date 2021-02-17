import { LOG_TYPES } from "./index";

export const INVALID_TYPE = new TypeError(
  `Value for 'type' parameter must be one of ${LOG_TYPES}`
);
