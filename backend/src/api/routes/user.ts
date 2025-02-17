import { Router, Request, Response, NextFunction } from "express";
const route = Router();
import { validateUserInputs } from "../middlewares";
import { ComplyCubeService } from "../../services/complycubeService";

export type CreateUserResponse = {
    client: {
        id: string;
        type: "person";
        email: string;
        personDetails: { firstName: string; lastName: string };
    };
};

export default (app: Router): void => {
    app.use("/users", route);
    route.post(
        "/create",
        validateUserInputs,
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                // Extract parameters from the request body
                const { firstName, lastName, email } = req.body;

                const client = await ComplyCubeService.createUser(
                    firstName,
                    lastName,
                    email,
                );
                const token = await ComplyCubeService.generateToken(client.id);

                return res.status(201).json({ token, client: client });
            } catch (e) {
                return next(e);
            }
        },
    );
};
