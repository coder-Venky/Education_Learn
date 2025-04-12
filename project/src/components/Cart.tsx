import React from 'react';
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, change: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <ShoppingCart />
          <span>Your cart is empty</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-4 pb-4 border-b">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.product.name}</h3>
              <p className="text-gray-600">₹{item.product.price}/{item.product.unit}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.product.id, -1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.product.id, 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => onRemoveItem(item.product.id)}
                className="p-1 rounded-full hover:bg-gray-100 text-red-500"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-green-600">₹{total}</span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}