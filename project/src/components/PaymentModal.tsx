import React from 'react';
import { X } from 'lucide-react';

interface PaymentModalProps {
  total: number;
  onClose: () => void;
  onComplete: () => void;
}

export function PaymentModal({ total, onClose, onComplete }: PaymentModalProps) {
  const upiId = "farmer@upi";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">UPI Payment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-lg font-semibold text-green-600">Amount: ₹{total}</p>
            <p className="text-gray-600">UPI ID: {upiId}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Please complete the payment using your preferred UPI app:
            </p>
            <div className="grid grid-cols-3 gap-4">
              {['Google Pay', 'PhonePe', 'Paytm'].map((app) => (
                <button
                  key={app}
                  onClick={onComplete}
                  className="p-2 border rounded-lg hover:bg-gray-50"
                >
                  {app}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center">
            After completing the payment, click the app button to confirm your order
          </p>
        </div>
      </div>
    </div>
  );
}