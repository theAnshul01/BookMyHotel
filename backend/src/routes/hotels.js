import express from "express";
import { getDb } from "../data/store.js";

const router = express.Router();

function sortHotels(hotels, sortKey, order = "asc") {
  if (!sortKey) return hotels;
  const sorted = [...hotels].sort((a, b) => {
    const aVal = a[sortKey] ?? 0;
    const bVal = b[sortKey] ?? 0;
    if (aVal === bVal) return 0;
    return order === "desc" ? bVal - aVal : aVal - bVal;
  });
  return sorted;
}

router.get("/", async (req, res, next) => {
  try {
    const { q, page = "1", limit = "12", sort } = req.query;
    const db = await getDb();
    let hotels = db.hotels || [];

    if (q) {
      const query = q.toLowerCase();
      hotels = hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(query) ||
        hotel.location.toLowerCase().includes(query)
      );
    }

    let sortKey = null;
    let order = "asc";
    if (sort === "price" || sort === "pricePerNight") {
      sortKey = "pricePerNight";
    }
    if (sort === "rating") {
      sortKey = "rating";
      order = "desc";
    }
    if (sort === "price_desc") {
      sortKey = "pricePerNight";
      order = "desc";
    }
    if (sortKey) {
      hotels = sortHotels(hotels, sortKey, order);
    }

    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 12;
    const startIndex = (pageNumber - 1) * limitNumber;
    const paginated = hotels.slice(startIndex, startIndex + limitNumber);

    res.json({
      data: paginated,
      meta: {
        total: hotels.length,
        page: pageNumber,
        limit: limitNumber
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const db = await getDb();
    const hotel = (db.hotels || []).find((item) => item.id === req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.json({
      data: {
        ...hotel,
        amenities: hotel.amenities || ["Free WiFi", "Breakfast", "Pool", "Parking"],
        rooms: hotel.rooms || [
          { type: "Standard", price: hotel.pricePerNight, available: 4 },
          { type: "Deluxe", price: hotel.pricePerNight + 1200, available: 2 }
        ]
      }
    });
  } catch (error) {
    next(error);
  }
});

export default router;
