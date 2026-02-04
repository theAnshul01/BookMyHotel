import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import hotelsRouter from "./routes/hotels.js";
import authRouter from "./routes/auth.js";
import bookingsRouter from "./routes/bookings.js";
import usersRouter from "./routes/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  credentials: true
}));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/hotels", hotelsRouter);
app.use("/auth", authRouter);
app.use("/bookings", bookingsRouter);
app.use("/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Server error" });
});

app.listen(port, () => {
  console.log(`BookMyHotel backend listening on port ${port}`);
});
