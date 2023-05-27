import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../entities/User";
import dotenv from "dotenv";
dotenv.config();

const authRouter = Router();

authRouter.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JTW_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" + error });
  }
});

authRouter.get("/user-info", async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    if (!token) {
      throw new Error("Token was not identified.");
    }
    const decodedToken = jwt.verify(token, process.env.JTW_SECRET);
    const user = await User.findOne({ where: { id: decodedToken } });

    if (!user) {
      throw new Error("User not found through token");
    }

    return user;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" + error });
  }
});

export default authRouter;
