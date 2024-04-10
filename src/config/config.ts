require("dotenv").config();

export const DB_PORT: string | undefined = process.env.DB_PORT;
export const DB_HOST: string| undefined = process.env.DB_HOST;
export const DB_USERNAME: string| undefined = process.env.DB_USERNAME;
export const DB_PASSWORD: string| undefined = process.env.DB_PASSWORD;
export const DB_NAME: string| undefined = process.env.DB_NAME;
export const PORT: string| undefined = process.env.PORT;
