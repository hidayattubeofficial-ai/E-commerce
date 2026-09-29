import products from "../../../../../data/products.json";

export type FmProduct = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  stock: number;
  active: boolean;
};

export function getFmCatalog(): FmProduct[] {
  return products.map((product) => ({ ...product }));
}

export function getFmProduct(slug: string): FmProduct | undefined {
  return getFmCatalog().find((product) => product.slug === slug);
}