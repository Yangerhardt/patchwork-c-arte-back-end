import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication token not provided" });
  }

  try {
    const decodedToken = jwt.verify(token, "seuSegredoJWT") as {
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
