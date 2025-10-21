CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"age" integer NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
