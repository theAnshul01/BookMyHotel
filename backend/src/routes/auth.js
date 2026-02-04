import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { updateDb } from "../data/store.js";

const router = express.Router();

function getJwtSecret() {
  return process.env.JWT_SECRET || "dev_secret_change_me";
}

function signToken(user) {
  return jwt.sign(
    { sub: user.id, email: user.email, name: user.name },
    getJwtSecret(),
    { expiresIn: "7d" }
  );
}

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    const normalizedEmail = email.toLowerCase();

    const result = await updateDb(async (data) => {
      const exists = data.users?.some((user) => user.email === normalizedEmail);
      if (exists) {
        const error = new Error("Email already registered");
        error.status = 409;
        throw error;
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const user = {
        id: nanoid(),
        name,
        email: normalizedEmail,
        passwordHash,
        createdAt: new Date().toISOString()
      };
      const next = {
        ...data,
        users: [...(data.users || []), user]
      };
      return next;
    });

    const user = result.users[result.users.length - 1];
    const token = signToken(user);

    res.status(201).json({
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const normalizedEmail = email.toLowerCase();

    const result = await updateDb((data) => data);
    const user = (result.users || []).find((item) => item.email === normalizedEmail);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = signToken(user);

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    next(error);
  }
});

export default router;
