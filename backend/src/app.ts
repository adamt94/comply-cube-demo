import express from "express";

import Logger from "./loaders/logger";
import loaders from "./loaders";
import config from "./config";
import { Server } from "http";

const app = express();
let server: Server;

async function startServer() {
    if (server) {
        return server;
    }
    await loaders({ expressApp: app });
    server = app
        .listen(config.port, () => {
            Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
        })
        .on("error", err => {
            Logger.error(err);
            process.exit(1);
        });

    return server;
}

async function stopServer(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (server) {
            server.close(err => {
                if (err) {
                    Logger.error("Error stopping server:", err);
                    reject(err);
                } else {
                    Logger.info("Server stopped successfully.");
                    server = null; // Reset server instance
                    resolve();
                }
            });
        } else {
            Logger.warn("Server is not running.");
            resolve();
        }
    });
}

if (process.env.NODE_ENV !== "test") {
    startServer();
}

export { app, startServer, stopServer };
