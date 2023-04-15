set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."restaurants" (
	"id"          serial   NOT NULL,
	"name"        text     NOT NULL,
	"location"    text     NOT NULL,
	"priceRange"  int      NOT NULL check("priceRange" >= 1 and "priceRange" <= 5),
  PRIMARY KEY ("id")
);



CREATE TABLE "public"."reviews" (
	"id"            serial   NOT NULL,
	"restaurant.id" serial   NOT NULL,
	"name"          text     NOT NULL,
	"review"        text     NOT NULL,
	"rating"        int      NOT NULL check("rating" >= 1 and "rating" <=5),
  PRIMARY KEY ("id")
);
