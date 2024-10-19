ALTER TABLE "schedules" ADD COLUMN "timezone" text NOT NULL;--> statement-breakpoint
ALTER TABLE "schedules" DROP COLUMN IF EXISTS "timeZone";