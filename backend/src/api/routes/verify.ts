import { Router, Request, Response, NextFunction } from "express";
import { validateUserDocuments } from "../middlewares";
import { ComplyCubeService } from "../../services/complycubeService";

export default (app: Router): void => {
  const route = Router();
  app.use("/users", route);
  route.get(
    "/verify",
    validateUserDocuments,
    async (
      req: Request & {
        client_id: string;
        document_id: string;
        live_photo_id: string;
      },
      res: Response,
      next: NextFunction,
    ) => {
      const { client_id, document_id, live_photo_id } = req.query;

      try {
        const check = await ComplyCubeService.createIdentityCheck(
          client_id as string,
          document_id as string,
          live_photo_id as string,
        );

        res.json(check);
      } catch (error) {
        console.error("Error checking status:", error);
        return next(error); // Forward the error to the next error handler
      }
    },
  );
};
