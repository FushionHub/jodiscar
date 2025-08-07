import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import toast from 'react-hot-toast';

interface FlutterwaveCheckoutProps {
  amount: number;
  email: string;
  name: string;
  phone: string;
}

const FlutterwaveCheckout: React.FC<FlutterwaveCheckoutProps> = ({ amount, email, name, phone }) => {
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
      phone_number: phone,
      name,
    },
    customizations: {
      title: 'JodisCars',
      description: 'Payment for car services',
      logo: 'https://jodiscar.vercel.app/logo.png',
    },
  };

  const handleFlutterwavePayment = useFlutterwave(config);

  return (
    <button
      onClick={() => {
        handleFlutterwavePayment({
          callback: (response) => {
            console.log(response);
            toast.success('Payment successful!');
            closePaymentModal(); // this will close the modal
          },
          onClose: () => {
            toast.error('Payment modal closed.');
          },
        });
      }}
      className="w-full mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
    >
      Pay with Flutterwave
    </button>
  );
};

export default FlutterwaveCheckout;
