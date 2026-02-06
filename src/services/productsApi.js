const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchProducts({ limit, skip }) {
  const response = await fetch(
    `${API_BASE_URL}/products?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data.products;
}
