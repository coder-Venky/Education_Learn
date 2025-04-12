export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  farmer: string;
  unit: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}