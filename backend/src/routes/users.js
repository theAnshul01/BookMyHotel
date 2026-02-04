import express from "express";
import { getDb } from "../data/store.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id/bookings", requireAuth, async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.user.sub !== id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const db = await getDb();
    const bookings = (db.bookings || []).filter((booking) => booking.userId === id);

    res.json({ data: bookings });
  } catch (error) {
    next(error);
  }
});

export default router;
