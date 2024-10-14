"use server";
import { db } from "@/drizzle/db";
import { EventTables } from "@/drizzle/schema";
import { eventFormSchema } from "@/schema/events";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import "use-server";
import { z } from "zod";

export async function createEvent(
  unsafeData: z.infer<typeof eventFormSchema>
): Promise<{ error: boolean } | undefined> {
  const { userId } = auth();
  const { success, data } = eventFormSchema.safeParse(unsafeData);
  unsafeData.name = ""; // Temp

  if (!success || userId == null) {
    return { error: true };
  }

  await db.insert(EventTables).values({ ...data, clerkUserId: userId });
  redirect("/events");
}
