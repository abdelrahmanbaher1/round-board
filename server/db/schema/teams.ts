import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { projects } from "./projects";

export const teams = sqliteTable("teams", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  projects: text("string").notNull(),
  avatar: text("avatar"),
});

export const organizationsRelations = relations(projects, ({ many }) => ({
  projects: many(projects),
}));
