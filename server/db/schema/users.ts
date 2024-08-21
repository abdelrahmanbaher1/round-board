import { relations, sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersToOrganizations } from "./user_organization";
import { usersToProjects } from "./user_project";
import { usersToTickets } from "./user_ticket";

export const users: any = sqliteTable("users", {
  id: text("id").notNull().primaryKey(),
  name: text("fullName").notNull(),
  nickName: text("nickName"),
  email: text("email").notNull(),
  password: text("password").notNull(),
  avatar: text("avatar"),
  role: text("role", { enum: ["USER", "ADMIN"] }).notNull(),
  status: text("status", { enum: ["ACTIVE", "INACTIVE"] })
    .default("INACTIVE")
    .notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updateAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const userRelations = relations(users, ({ many }: { many: any }) => ({
  organizations: many(usersToOrganizations),
  projects: many(usersToProjects),
  tickets: many(usersToTickets),
}));
