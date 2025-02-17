import { Router, Request, Response, NextFunction } from "express";

// Middleware to validate inputs
export const validateUserInputs = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      error: "Missing required fields: firstName, lastName, or email",
    });
  }

  // Check if email is in a valid format (simple regex for basic validation)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Check if firstName and lastName are strings and not empty
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return res
      .status(400)
      .json({ error: "firstName and lastName must be strings" });
  }

  if (firstName.trim() === "" || lastName.trim() === "") {
    return res
      .status(400)
      .json({ error: "firstName and lastName cannot be empty" });
  }

  next();
};

export const validateUserDocuments = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { client_id, document_id, live_photo_id } = req.query;

  if (!client_id || !document_id || !live_photo_id) {
    return res.status(400).json({
      error: "client_id, document_id, live_photo_id query parameter is required",
    });
  }

  next();
};
