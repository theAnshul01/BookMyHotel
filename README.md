# BookMyHotel — Frontend (React) 🚀

**BookMyHotel** is a frontend-only React application that provides a clean, responsive interface for browsing hotels, viewing details, and completing bookings. This repository contains the UI and client-side logic only — it expects a separate backend API to provide hotel and booking data.

---

## Features ✅

- Browse & search hotels (list views)
- View hotel details, photos, amenities and room types
- Filter and sort (price, rating)
- Booking flow (select hotel, room details, enter guest details, confirm)
- Basic authentication flows (login / signup) — client-side only (JWT expected from API)
- Responsive design for desktop & mobile

---

## Tech Stack ⚙️

- React (Create React App)
- React Router for navigation
- Context / Redux for state (depending on implementation)
- Axios / fetch for HTTP requests
- CSS Modules / SASS / plain CSS for styling
- bootstrap

---

## Quick Start — Local Development 💡

**Prerequisites:** Node.js (>=14) and npm or yarn

1. Install dependencies

```bash
npm install
# or
# yarn
```

2. Create a `.env` file (see Environment Variables below)

3. Start the development server

```bash
npm start
# or
# yarn start
```

Open `http://localhost:3000` in your browser. The app will reload on code changes.

---

## Available Scripts

- `npm start` — runs the app in development mode
- `npm test` — runs tests (if present)
- `npm run build` — builds production assets to `build/`
- `npm run lint` — run linters (if configured)

---

## Environment Variables (example) 🔐

Create a `.env` in the project root with values used by the app. Example variables:

```env
REACT_APP_API_BASE_URL=https://api.example.com
REACT_APP_GOOGLE_MAPS_KEY=your_key_here # optional, if map is used
```

> Note: Prefixed with `REACT_APP_` so Create React App exposes them to the client.

---

## API Contract (Frontend expectations) 🔌

This project expects a backend API with these endpoints (adjust to your backend):

- `GET /hotels` — returns a list of hotels
	- Query params: `?q=`, `?page=`, `?limit=`, `?sort=`
- `GET /hotels/:id` — hotel details, rooms, photos, amenities
- `POST /auth/login` — returns `{ token }` (JWT)
- `POST /auth/register` — register a new user
- `POST /bookings` — create a booking (requires auth)
- `GET /users/:id/bookings` — user bookings (requires auth)

Responses should be JSON and use standard HTTP status codes. The frontend sends JWTs in the `Authorization: Bearer <token>` header after login.

---

## Project Structure 📁

Typical `src/` layout:

```
src/
	components/   # reusable UI components
	pages/        # top-level views (Home, Hotel, Booking, Profile)
	services/     # API wrappers (e.g., axios instance)
	hooks/        # custom React hooks
	styles/       # global styles
	App.js
	index.js
```

---

## Deployment 📦

Build the app and deploy the contents of the `build/` folder to any static hosting provider (Netlify, Vercel, GitHub Pages, S3 + CloudFront):

```bash
npm run build
```

Make sure `REACT_APP_API_BASE_URL` points to your production API when deploying.

---

## Contributing ✨

Contributions are welcome. Please open issues for bugs or feature requests. For code changes, file a pull request with a clear description and test coverage where possible.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

If you have questions or want to collaborate, open an issue or contact the repository owner.

Thank you for using **BookMyHotel**! 🏨
