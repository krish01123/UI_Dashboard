export async function getDashboardData() {
  const [usersRes, cartsRes, productsRes] = await Promise.all([
    fetch("https://dummyjson.com/users"),
    fetch("https://dummyjson.com/carts"),
    fetch("https://dummyjson.com/products?limit=4"),
  ]);

  const users = await usersRes.json();
  const carts = await cartsRes.json();
  const products = await productsRes.json();

  const totalMoney = carts.carts.reduce(
    (sum: number, cart: any) => sum + cart.total,
    0,
  );

  const totalSales = carts.carts.reduce(
    (sum: number, cart: any) => sum + cart.discountedTotal,
    0,
  );

  return {
    todayMoney: totalMoney,
    todayUsers: users.total,
    newClients: 10,
    totalSales,
    featuredProducts: products.products,
  };
}
