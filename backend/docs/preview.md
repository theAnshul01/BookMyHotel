# Backend Preview Artifact

This artifact shows a minimal sequence of requests that exercise the API.

## 1) Health

```bash
curl http://localhost:4000/health
```

Expected response:

```json
{ "status": "ok" }
```

## 2) Hotels (list)

```bash
curl "http://localhost:4000/hotels?limit=2"
```

Expected response (shape):

```json
{
  "data": [
    {
      "id": "1",
      "name": "Grand Palace Hotel",
      "location": "Delhi",
      "pricePerNight": 3200,
      "rating": 4.5,
      "image": "https://placeholder.pagebee.io/api/random/300/200"
    }
  ],
  "meta": { "total": 18, "page": 1, "limit": 2 }
}
```

## 3) Register + Login

```bash
curl -X POST http://localhost:4000/auth/register \
  -H "Content-Type: application/json" \
  -d '{ "name": "Test User", "email": "test@example.com", "password": "password" }'
```

Expected response (shape):

```json
{
  "token": "JWT_TOKEN",
  "user": { "id": "USER_ID", "name": "Test User", "email": "test@example.com" }
}
```

```bash
curl -X POST http://localhost:4000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "email": "test@example.com", "password": "password" }'
```

## 4) Create Booking

```bash
curl -X POST http://localhost:4000/bookings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer JWT_TOKEN" \
  -d '{ "hotelId": "1", "checkIn": "2025-01-10", "checkOut": "2025-01-11", "guests": 2 }'
```

Expected response (shape):

```json
{
  "data": {
    "id": "BOOKING_ID",
    "userId": "USER_ID",
    "hotelId": "1",
    "roomType": "Standard",
    "checkIn": "2025-01-10",
    "checkOut": "2025-01-11",
    "guests": 2,
    "totalPrice": 3200,
    "createdAt": "2024-01-01T12:00:00.000Z"
  }
}
```

## 5) User Bookings

```bash
curl http://localhost:4000/users/USER_ID/bookings \
  -H "Authorization: Bearer JWT_TOKEN"
```
