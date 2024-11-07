const fakeApi = "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${fakeApi}/products`);
  const data = await res.json();
  return data;
}

export async function getProductDetail(id) {
  const res = await fetch(`${fakeApi}/products/${id}`);
  const data = await res.json();
  return data;
}
