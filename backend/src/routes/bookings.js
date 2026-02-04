import express from "express";
import { nanoid } from "nanoid";
import { getDb, updateDb } from "../data/store.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", requireAuth, async (req, res, next) => {
  try {
    const { hotelId, roomType, checkIn, checkOut, guests, totalPrice } = req.body || {};
    if (!hotelId || !checkIn || !checkOut || !guests) {
      return res.status(400).json({ message: "hotelId, checkIn, checkOut, and guests are required" });
    }

    const db = await getDb();
    const hotel = (db.hotels || []).find((item) => item.id === hotelId);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    const booking = {
      id: nanoid(),
      userId: req.user.sub,
      hotelId,
      roomType: roomType || "Standard",
      checkIn,
      checkOut,
      guests,
      totalPrice: totalPrice || hotel.pricePerNight,
      createdAt: new Date().toISOString()
    };

    await updateDb((data) => ({
      ...data,
      bookings: [...(data.bookings || []), booking]
    }));

    res.status(201).json({ data: booking });
  } catch (error) {
    next(error);
  }
});

export default router;
