import { migrate } from "drizzle-orm/postgres-js/migrator";

import { env } from "./src/env.js";

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const main = async () => {
  const client = postgres(env.DATABASE_URL);
  const db = drizzle(client);
  await migrate(db, { migrationsFolder: "drizzle" });
};

main();
