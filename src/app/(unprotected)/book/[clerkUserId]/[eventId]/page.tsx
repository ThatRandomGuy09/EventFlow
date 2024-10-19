/* eslint-disable @typescript-eslint/no-unused-vars */

import { db } from "@/drizzle/db";
import { notFound } from "next/navigation";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  addMonths,
  eachMinuteOfInterval,
  endOfDay,
  roundToNearestMinutes,
} from "date-fns";
import Link from "next/link";

export const revalidate = 0;
export default async function BookEventPage({
  params: { clerkUserId, eventId },
}: {
  params: { clerkUserId: string; eventId: string };
}) {
  const event = await db.query.EventTables.findFirst({
    where: ({ clerkUserId: userIdCol, isActive, id }, { eq, and }) =>
      and(eq(isActive, true), eq(userIdCol, clerkUserId), eq(id, eventId)),
  });
  if (event == null) return notFound();

  const calendarUser = await clerkClient().users.getUser(clerkUserId);

  const startDate = roundToNearestMinutes(new Date(), {
    nearestTo: 15,
    roundingMethod: "ceil",
  });
  const endDate = endOfDay(addMonths(startDate, 2));

  return <></>;
}
