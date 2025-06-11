import { db } from "@/config/db";
import { coursesTable, enrollCourseTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { courseId } = await req.json();
        const user = await currentUser();

        const userEmail = user?.primaryEmailAddress?.emailAddress;
        if (!userEmail) {
            return NextResponse.json(
                { error: "Unauthorized: No user email found" },
                { status: 401 }
            );
        }

        const enrollCourses = await db
            .select()
            .from(enrollCourseTable)
            .where(and(
                eq(enrollCourseTable.userEmail, userEmail),
                eq(enrollCourseTable.courseId, courseId)
            ));

        if (enrollCourses.length === 0) {
            const result = await db
                .insert(enrollCourseTable)
                .values({
                    courseId,
                    userEmail,
                    completedChapters: 0
                });

            return NextResponse.json(
                { message: "Enrollment successful", result},
                { status: 201 }
            );
        } else {
            return NextResponse.json(
                { message: "User already enrolled" },
                { status: 200 }
            );
        }
    } catch (error) {
        console.error("Enrollment error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function  GET(req:NextRequest) {
    try {
        const user = await currentUser();
        const userEmail = user?.primaryEmailAddress?.emailAddress;
        if (!userEmail) {
            return NextResponse.json(
                { error: "Unauthorized: No user email found" },
                { status: 401 }
            );
        }
        const result = await db
            .select()
            .from(coursesTable)
            .innerJoin(enrollCourseTable, eq(coursesTable.courseId, enrollCourseTable.courseId))
            .where(eq(enrollCourseTable.userEmail, userEmail))
            .orderBy(desc(enrollCourseTable.id));

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}