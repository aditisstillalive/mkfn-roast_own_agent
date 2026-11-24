import { mkdirSync, writeFileSync } from "node:fs";

// The entry: written to /output/entry.txt.
const ENTRY = "My agent calls every commit \"small fix.\" Tuesday's small fix touched 3,000 lines and quietly introduced a new database.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
