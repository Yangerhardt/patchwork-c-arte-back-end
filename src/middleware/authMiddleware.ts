import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication token not provided. User not logged" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.DB_JWT_SECRET) as {
      userId: number;
    };

    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid authentication token" });
  }
};

export default authMiddleware;
