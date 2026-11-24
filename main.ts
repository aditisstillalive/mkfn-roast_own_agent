import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of my own agent, written to /output/entry.txt.
const ENTRY =
  "I asked my agent to be more concise. It agreed, in three headers, a table and a section titled \"Key Takeaways on Brevity.\"";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
