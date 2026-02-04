import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "..", "..", "data", "db.json");

let writeQueue = Promise.resolve();

async function readDb() {
  const raw = await fs.readFile(dbPath, "utf-8");
  return JSON.parse(raw);
}

function writeDb(data) {
  writeQueue = writeQueue.then(() => fs.writeFile(dbPath, JSON.stringify(data, null, 2)));
  return writeQueue;
}

export async function getDb() {
  return readDb();
}

export async function updateDb(updater) {
  const data = await readDb();
  const updated = await updater(data);
  await writeDb(updated);
  return updated;
}

export async function ensureDefaults() {
  return updateDb((data) => {
    const next = {
      hotels: data.hotels || [],
      users: data.users || [],
      bookings: data.bookings || []
    };
    return next;
  });
}
