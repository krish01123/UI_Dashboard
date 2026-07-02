const BASE_URL = "https://dummyjson.com";

export async function getProfile(userId: number = 1) {
  const res = await fetch(`${BASE_URL}/users/${userId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }
  return res.json();
}
