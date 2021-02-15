import { mkdir, readdir, rm } from "fs/promises";
import { join } from "path";

export default async (): Promise<void> => {
  const logsPath = join(__dirname, "logs");

  await rm(logsPath, { force: true, recursive: true });

  const contents = await readdir(__dirname, { withFileTypes: true });

  const dirs = contents
    .filter((content) => content.isDirectory())
    .map((dir) => dir.name);

  for (const dir of dirs) {
    const path = join(logsPath, dir);

    await mkdir(path, { recursive: true });
  }
};
