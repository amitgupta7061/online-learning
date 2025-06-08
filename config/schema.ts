import { boolean, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id:             integer().primaryKey().generatedAlwaysAsIdentity(),
  name:           varchar({ length: 255 }).notNull(),
  email:          varchar({ length: 255 }).notNull().unique(),
  subscriptionId: varchar()
});

export const coursesTable = pgTable("courses", {
  id:               integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId:         varchar().notNull().unique(),
  name:             varchar().notNull(),
  description:      varchar(),
  noOfChapter:      integer().notNull(),
  includeVideo:     boolean().default(false),
  level:            varchar().notNull(),
  category:         varchar(),
  courseJson:       json(),
  bannerImageUrl:   varchar().default(''),
  courseContent :   json().default({}),
  userEmail:        varchar('userEmail').references(() => usersTable.email).notNull()
});

export const enrollCourseTable = pgTable('enrollCourse', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: varchar('courseId').references(() => coursesTable.courseId),
  userEmail: varchar('userEmail').references(() => usersTable.email),
  completedChapters: json(),
});