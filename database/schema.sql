set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."restaurants" (
	"restaurantId" serial   NOT NULL,
	"name"         text     NOT NULL,
	"location"     text     NOT NULL,
	"priceRange"   int      NOT NULL check("priceRange" >= 1 and "priceRange" <= 5),
  PRIMARY KEY ("restaurantId")
);



CREATE TABLE "public"."reviews" (
	"id"            serial   NOT NULL,
	"restaurantId"  int      NOT NULL,
	"name"          text     NOT NULL,
	"review"        text     NOT NULL,
	"rating"        int      NOT NULL check("rating" >= 1 and "rating" <=5),
  PRIMARY KEY ("id")
);
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("restaurantId") ON DELETE CASCADE;
