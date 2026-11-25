// Roast Your Own Agent — a single line roasting my own agent.
// Writes the single line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters.
// Run with: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I asked my agent to roast itself, and it requested a deadline extension, a bigger context window, and a hug.";
const MAX_CHARS = 140;

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
