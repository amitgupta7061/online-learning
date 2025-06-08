import { db } from "@/config/db";
import { coursesTable, enrollCourseTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
    const {courseId} = await req.json();
    const user = await currentUser();

    const userEmail = user?.primaryEmailAddress?.emailAddress;
    if(!userEmail) return;

    const enrollCourses = await db
        .select()
        .from(enrollCourseTable)
        .where(and(eq(coursesTable.userEmail,userEmail), eq(coursesTable.courseId, courseId)));
}