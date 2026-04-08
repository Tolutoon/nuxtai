import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaPg } from "@prisma/adapter-pg";



const connectionString = process.env.BETTER_AUTH_URL ?? "";
const adapter = new PrismaPg({ connectionString });

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite", // or "mysql", "sqlite", ...etc
    }),
});
