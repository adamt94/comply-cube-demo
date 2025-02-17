import { ComplyCubeService } from "../../services/complycubeService";
import { Router, Request, Response, NextFunction } from "express";

const checkInput = (req: Request, res: Response, next: NextFunction) => {
  const { check_id } = req.query;

  if (!check_id) {
    return res.status(400).json({
      error: "check_id query parameter is required",
    });
  }

  next();
};

export default (app: Router): void => {
  const route = Router();
  app.use("/users", route);
  route.get(
    "/status",
    checkInput,
    async (
      req: Request & {
        client_id: string;
      },
      res: Response,
      next: NextFunction,
    ) => {
      const { check_id } = req.query;

      try {
        const checkStatus = await ComplyCubeService.getCheckStatus(
          check_id as string,
        );

        res.json(checkStatus);
      } catch (error) {
        console.error("Error checking status:", error);
        return next(error);
      }
    },
  );
};
