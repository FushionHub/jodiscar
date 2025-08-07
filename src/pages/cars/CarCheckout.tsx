import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../utils/stripe';
import CheckoutForm from '../../components/common/CheckoutForm';
import FlutterwaveCheckout from '../../components/common/FlutterwaveCheckout';
import PaystackCheckout from '../../components/common/PaystackCheckout';

const CarCheckout: React.FC = () => {
  // Dummy data for now
  const carPrice = 5000000;
  const user = {
    email: 'customer@example.com',
    name: 'John Doe',
    phone: '08012345678',
  };

  return (
    <>
      <Helmet>
        <title>Checkout - JodisCars</title>
      </Helmet>
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Complete Your Purchase</h1>
          <p className="mt-4 text-lg text-gray-500">
            You're just one step away from owning your new car.
          </p>
        </div>
        <div className="mt-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
          <div className="mt-6">
            <FlutterwaveCheckout
              amount={carPrice}
              email={user.email}
              name={user.name}
              phone={user.phone}
            />
          </div>
          <div className="mt-6">
            <PaystackCheckout
              amount={carPrice}
              email={user.email}
              name={user.name}
              phone={user.phone}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCheckout;
