module.exports = [
  "index",
  "modules",
  {
    type: "category",
    label: "Classes",
    items: ["classes/logger"],
  },
  {
    type: "category",
    label: "Type aliases",
    items: [
      "types/consolelevel",
      "types/log",
      "types/logextra",
      "types/logindex",
      "types/logmessage",
      "types/logoptions",
      "types/logoptionswithwrite",
      "types/logoptionswithwritewithouttype",
      "types/logoptionswithouttype",
      "types/logoptionswithoutwrite",
      "types/logoptionswithoutwritewithouttype",
      "types/logtimestamp",
      "types/logtype",
    ],
  },
  {
    type: "category",
    label: "Variables",
    items: ["variables/console_levels", "variables/log_types"],
  },
];
