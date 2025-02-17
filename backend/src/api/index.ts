import { Router } from "express";
import user from "./routes/user";
import Logger from "../logger";
import check from "./routes/status";
import verify from "./routes/verify";
import status from "./routes/status";

// guaranteed to get dependencies
export default () => {
    const app = Router();
    user(app);
    status(app);
    verify(app);

    Logger.info("Loaded Api Routes");
    return app;
};
