import { type Config } from "drizzle-kit";
import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  breakpoints: true,
} satisfies Config;
