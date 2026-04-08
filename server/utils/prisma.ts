import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const {
    tursoDatabaseUrl,
    tursoAuthToken,
    public: { appEnv },
} = useRuntimeConfig();

const adapter = new PrismaLibSql({
    url: tursoDatabaseUrl,
    authToken: appEnv === "development" ? undefined : tursoAuthToken,
});

const prisma = new PrismaClient({ adapter });

export default prisma;
