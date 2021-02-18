// Node
import { basename, join } from "path";
import { writeFile, rm } from "fs/promises";

// Externals
import recursive from "recursive-readdir";

const postbuild = async (): Promise<void> => {
  try {
    await Promise.all([createIndexFile(), removeTypings()]);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

const createIndexFile = async (): Promise<void> => {
  await writeFile(
    join("dist", "index.js"),
    "'use strict';\n\nif (process.env.NODE_ENV === 'production') {\n  module.exports = require('./logger.min.js');" +
      "\n} else {\n  module.exports = require('./logger.js');\n}",
    "utf-8"
  );
};

const removeTypings = async (): Promise<void> => {
  const keepTypings = ["index.d.ts"];

  const distFiles = await recursive("dist");

  await Promise.all(
    distFiles.map(async (file) => {
      if (file.length > 5) {
        const ending = file.substr(file.length - 5);
        if (ending === ".d.ts" && !keepTypings.includes(basename(file))) {
          await rm(file);
        }
      }
    })
  );
};

postbuild();
