CREATE TABLE IF NOT EXISTS "permissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(64),
	"phone_number" varchar(64),
	"signature" varchar(64)
);
