import * as dotenv from "dotenv";

dotenv.config();

export const AppConfig = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
};