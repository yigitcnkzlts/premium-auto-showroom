import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const vehicleBrands = sqliteTable("vehicle_brands", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	slug: text("slug").notNull().unique(),
	logoUrl: text("logo_url"),
	active: integer("active", { mode: "boolean" }).notNull().default(true),
});

export const vehicleModels = sqliteTable("vehicle_models", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	brandId: integer("brand_id").notNull().references(() => vehicleBrands.id),
	name: text("name").notNull(),
	slug: text("slug").notNull(),
	active: integer("active", { mode: "boolean" }).notNull().default(true),
});

export const vehicleVariants = sqliteTable("vehicle_variants", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	modelId: integer("model_id").notNull().references(() => vehicleModels.id),
	year: integer("year"),
	fuelType: text("fuel_type"),
	transmission: text("transmission"),
	engine: text("engine"),
	trim: text("trim"),
});

export const valuationRequests = sqliteTable("valuation_requests", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	year: integer("year"),
	brand: text("brand").notNull(),
	model: text("model").notNull(),
	details: text("details", { mode: "json" }).$type<Record<string, unknown>>().notNull(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	phone: text("phone").notNull(),
	email: text("email").notNull(),
	status: text("status").notNull().default("received"),
	createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
});

export const aiVehicleConversations = sqliteTable("ai_vehicle_conversations", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	vehicle: text("vehicle", { mode: "json" }).$type<Record<string, unknown>>().notNull(),
	messages: text("messages", { mode: "json" }).$type<unknown[]>().notNull(),
	createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
});
