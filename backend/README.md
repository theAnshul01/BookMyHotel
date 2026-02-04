# BookMyHotel Backend (Express)

This folder contains a lightweight Express API that matches the frontend expectations.

## Quick Start

```bash
cd backend
npm install
npm run dev
```

The server runs on `http://localhost:4000` by default.

## Environment Variables

Create a `.env` file in `backend/`:

```env
PORT=4000
JWT_SECRET=replace_me
CORS_ORIGIN=http://localhost:3000
```

## API Endpoints

- `GET /health` — health check
- `GET /hotels?q=&page=&limit=&sort=` — list hotels (supports search + pagination)
- `GET /hotels/:id` — hotel details
- `POST /auth/register` — create user + return JWT
- `POST /auth/login` — login + return JWT
- `POST /bookings` — create booking (auth required)
- `GET /users/:id/bookings` — list user bookings (auth required)

## Data Storage

Data is stored in `backend/data/db.json` and is persisted between restarts.

## Sample Curl

```bash
curl -X POST http://localhost:4000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password"}'
```
