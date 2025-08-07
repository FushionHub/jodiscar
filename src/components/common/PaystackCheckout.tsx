import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import toast from 'react-hot-toast';

interface PaystackCheckoutProps {
  amount: number;
  email: string;
  name: string;
  phone: string;
}

const PaystackCheckout: React.FC<PaystackCheckoutProps> = ({ amount, email, name, phone }) => {
  const config = {
    reference: (new Date()).getTime().toString(),
    email,
    amount: amount * 100, // Paystack amount is in kobo
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    metadata: {
      name,
      phone,
    },
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    toast.success('Payment successful!');
  };

  const onClose = () => {
    toast.error('Payment modal closed.');
  };

  return (
    <button
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
      className="w-full mt-6 bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
    >
      Pay with Paystack
    </button>
  );
};

export default PaystackCheckout;
