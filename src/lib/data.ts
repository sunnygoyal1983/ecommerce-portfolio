import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import { Product, Category } from './types';

export const getProducts = async (): Promise<Product[]> => {
  return productsData as Product[];
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  return (productsData as Product[]).find((p) => p.slug === slug);
};

export const getProductsByCategory = async (categorySlug: string): Promise<Product[]> => {
  return (productsData as Product[]).filter((p) => p.category === categorySlug);
};

export const getCategories = async (): Promise<Category[]> => {
  return categoriesData as Category[];
};

export const getCategoryBySlug = async (slug: string): Promise<Category | undefined> => {
  return (categoriesData as Category[]).find((c) => c.slug === slug);
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return (productsData as Product[]).filter((p) => p.featured);
};
