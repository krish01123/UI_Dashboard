import { encode } from "punycode";
import { Product, ProductsResponse } from "./product";

const BASE_URL = "https://dummyjson.com";

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

export async function getAllProduct(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products?limit=100`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await res.json();

  return data.products;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const res = await fetch(
    `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`,
  );

  if (!res.ok) {
    throw new Error("Failed to search products");
  }

  const data: ProductsResponse = await res.json();

  return data.products;
}

export async function getCategoryProducts(
  category: string,
): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const data: ProductsResponse = await res.json();

  return data.products;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();

  return data;
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data: Product = await res.json();

  return data;
}
