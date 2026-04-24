import fs from "fs/promises";

// Generic JSON reader.
export async function readJsonFile(path: string) {
  try {
    const raw = await fs.readFile(path, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Failed to read or parse ${path}:`, err);
    throw err;
  }
}
