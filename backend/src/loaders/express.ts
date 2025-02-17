import express, { Request, Response, NextFunction, Errback } from "express";
import routes from "../api";
import config from "../config";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");

export default ({ app }: { app: express.Application }) => {
    app.get("/status", (_, res) => {
        res.status(200).end();
    });
    app.head("/status", (_, res) => {
        res.status(200).end();
    });

    app.use(cors());

    app.use(express.json());
    // Load API routes
    app.use(config.api.prefix, routes());

    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error("Not Found");
        next(err);
    });

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err.name === "UnauthorizedError") {
            return res.status(401).send("invalid token...");
        }
        next();
    });

    app.use((err, res, next) => {
        const errorResponse = {
            message: "Internal Server Error",
            code: err.statusCode || 500,
        };

        res.status(500).json(errorResponse);
    });
};
