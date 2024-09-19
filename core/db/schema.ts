import { v4 as uuidv4 } from "uuid";
import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const id = () =>
  text("id")
    .primaryKey()
    .$default(() => uuidv4());

const createdAt = () =>
  text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();

const boolean = (field: string) => integer(field, { mode: "boolean" });

export const users = sqliteTable("users", {
  id: id(),
  fullName: text("fullName").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("isAdmin").default(true).notNull(),
  status: text("status", { enum: ["ACTIVE", "INACTIVE"] })
    .default("ACTIVE")
    .notNull(),
  createdAt: createdAt(),
  organizationId: text("organizationId")
    .notNull()
    .references(() => organizations.id),
});

export const userRelations = relations(users, ({ many }) => ({
  tickets: many(tickets),
  teams: many(teams),
  projects: many(projects),
}));

export const organizations = sqliteTable("organizations", {
  id: id(),
  displayName: text("displayName").notNull(),
  key: text("key").notNull().unique(),
});

export const organizationRelations = relations(organizations, ({ many }) => ({
  users: many(users),
  teams: many(teams),
  projects: many(projects),
}));

export const teams = sqliteTable("teams", {
  id: id(),
  name: text("name").notNull(),
  description: text("description"),
  organizationId: text("organizationId")
    .notNull()
    .references(() => organizations.id),
});
export const teamRelations = relations(teams, ({ many, one }) => ({
  organization: one(organizations, {
    fields: [teams.organizationId],
    references: [organizations.id],
  }),

  projects: many(projects),
}));

export const projects = sqliteTable("projects", {
  id: id(),
  name: text("name").notNull(),
  description: text("description"),
  isFavorite: boolean("isFavorite").default(true).notNull(),
  color: text("color").notNull(),
  teamId: text("teamId")
    .notNull()
    .references(() => teams.id),
  organizationId: text("organizationId")
    .notNull()
    .references(() => organizations.id),
});

export const tickets = sqliteTable("tickets", {
  id: id(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status", {
    enum: ["OPEN", "IN_PROGRESS", "CLOSED", "READY_FOR_REVIEW", "ERROR"],
  }).notNull(),
  priority: text("priority", {
    enum: ["URGENT", "HIGH", "MEDIUM", "LOW"],
  })
    .default("HIGH")
    .notNull(),
  projectId: text("projectId")
    .notNull()
    .references(() => projects.id),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
});
