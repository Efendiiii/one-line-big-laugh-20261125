import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My robot vacuum filed for overtime after finding the same sock under the couch for the ninth time this week.";

if (LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars, over the 200-char limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
