import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../utils/stripe';
import CheckoutForm from '../../components/common/CheckoutForm';

const CarCheckout: React.FC = () => {
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
        </div>
      </div>
    </>
  );
};

export default CarCheckout;
