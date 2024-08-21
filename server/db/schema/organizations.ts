import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { projects } from "./projects";

export const organizations = sqliteTable("organizations", {
  id: text("id").notNull().primaryKey(),
  displayName: text("name").notNull(),
  key: text("string").notNull(),
  avatar: text("avatar"),
});

export const organizationsRelations = relations(projects, ({ many }) => ({
  projects: many(projects),
}));
