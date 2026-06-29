export interface BillingUser {
  id: number;
  name: string;
  company: string;
  email: string;
  vat: string;
}

export async function getBillingDate(): Promise<BillingUser[]> {
  const res = await fetch("https://dummyjson.com/users?limit=3", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch billing data");
  }

  const data = await res.json();

  return data.users.map((user: any) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    company: user.company.name,
    email: user.email,
    vat: `FRB${1234376 + user.id}`,
  }));
}
