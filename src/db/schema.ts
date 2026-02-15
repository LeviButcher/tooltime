import { numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial().primaryKey(),
  title: text().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const locations = pgTable("locations", {
  id: serial().primaryKey(),
  name: text().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Things to consider
// Images
// in stock?
export const products = pgTable("products", {
  id: serial().primaryKey(),
  name: text().notNull().unique(),
  description: text().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  modifiedAt: timestamp("modified_at").defaultNow(),
  inStock: numeric().notNull(),
});
