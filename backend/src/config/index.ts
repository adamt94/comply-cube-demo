import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    port: parseInt(process.env.PORT, 10) || 8080,
    logs: {
        level: process.env.LOG_LEVEL || "silly",
    },
    api: {
        prefix: "/api",
    },
    complycube: {
        apiKey: process.env.COMPLY_CUBE_API_KEY,
    },
};
