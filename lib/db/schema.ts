import {boolean, pgTable, serial, text, timestamp,} from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    text: text("text").notNull(),
    deliverTime: timestamp("deliver_time", {mode: "date", withTimezone: true}),
    done: boolean("done").default(false).notNull(),
    createdAt: timestamp("created_at", {mode: "date", withTimezone: true})
        .defaultNow()
        .notNull(),
});