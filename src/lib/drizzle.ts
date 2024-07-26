import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const db = drizzle(sql);

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  task: text("task").notNull(),
});
