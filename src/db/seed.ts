import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

import { reset, seed } from "drizzle-seed";
import { db } from "./index.ts";
import { todos } from "./schema.ts";

async function main() {
  await reset(db, { todos });
  await seed(db, { todos });
}

await main();
