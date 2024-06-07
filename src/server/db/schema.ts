import { relations } from "drizzle-orm";
import {
  pgTable,
  pgEnum,
  serial,
  varchar,
  timestamp,
  integer,
  doublePrecision,
  real,
  primaryKey,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const permissions = pgTable("permissions", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 64 }),
  phoneNumber: varchar("phone_number", { length: 64 }),
  signature: varchar("signature", { length: 64 }),
});
