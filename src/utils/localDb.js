// LocalStorage-backed data layer to replace json-server
import db from '../data/db.json';

const LS_KEYS = {
    HOTELS: 'bm_hotels',
    FEATURED: 'bm_featured'
};

export function initializeLocalDb() {
    // Seed localStorage from data/db.json if keys are missing
    if (!localStorage.getItem(LS_KEYS.HOTELS)) {
        localStorage.setItem(LS_KEYS.HOTELS, JSON.stringify(db.hotels || []));
    }
    if (!localStorage.getItem(LS_KEYS.FEATURED)) {
        localStorage.setItem(LS_KEYS.FEATURED, JSON.stringify(db.featuredHotels || []));
    }
}

export async function getHotels() {
    initializeLocalDb();
    return JSON.parse(localStorage.getItem(LS_KEYS.HOTELS) || '[]');
}

export async function getFeaturedHotels() {
    initializeLocalDb();
    // Fall back to slicing top 3 hotels if featured list not present
    const featured = JSON.parse(localStorage.getItem(LS_KEYS.FEATURED) || 'null');
    if (featured && Array.isArray(featured) && featured.length) return featured;
    const hotels = await getHotels();
    return hotels.slice(0, 3);
}

export async function getHotelById(id) {
    const hotels = await getHotels();
    return hotels.find(h => String(h.id) === String(id));
}

export async function addHotel(hotel) {
    const hotels = await getHotels();
    // Generate a simple unique id
    const newId = Date.now().toString();
    const newHotel = { id: newId, ...hotel };
    hotels.push(newHotel);
    localStorage.setItem(LS_KEYS.HOTELS, JSON.stringify(hotels));
    // notify other parts of app that hotels changed
    try {
        window.dispatchEvent(new CustomEvent('bm_hotels_updated', { detail: newHotel }));
    } catch (e) {
        // ignore if CustomEvent isn't available in the environment
    }
    return newHotel;
}

export async function replaceHotels(hotels) {
    localStorage.setItem(LS_KEYS.HOTELS, JSON.stringify(hotels || []));
}

const localDb = {
    initializeLocalDb,
    getHotels,
    getFeaturedHotels,
    getHotelById,
    addHotel,
    replaceHotels
};

export default localDb;
