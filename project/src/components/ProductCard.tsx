import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="text-green-600 font-bold">₹{product.price}/{product.unit}</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">By {product.farmer}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 hover:bg-green-600 transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}