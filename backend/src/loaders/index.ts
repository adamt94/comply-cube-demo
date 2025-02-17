import { Express } from "express";
import expressLoader from "./express";
import Logger from "./logger";

export default async ({
    expressApp,
}: {
    expressApp: Express;
}): Promise<void> => {
    expressLoader({ app: expressApp });
    Logger.info("Express loaded");
};
