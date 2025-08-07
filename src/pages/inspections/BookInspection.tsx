import React from 'react';
import { Helmet } from 'react-helmet-async';
import FlutterwaveCheckout from '../../components/common/FlutterwaveCheckout';
import PaystackCheckout from '../../components/common/PaystackCheckout';

const BookInspection: React.FC = () => {
  // Dummy data for now
  const inspectionFee = 5000;
  const user = {
    email: 'customer@example.com',
    name: 'John Doe',
    phone: '08012345678',
  };

  return (
    <>
      <Helmet>
        <title>Book Inspection - JodisCars</title>
      </Helmet>
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Book a Pre-Purchase Inspection</h1>
          <p className="mt-4 text-lg text-gray-500">
            Ensure your next car is in perfect condition with our professional inspection service.
          </p>
        </div>
        <div className="mt-12">
          <div className="mt-6">
            <FlutterwaveCheckout
              amount={inspectionFee}
              email={user.email}
              name={user.name}
              phone={user.phone}
            />
          </div>
          <div className="mt-6">
            <PaystackCheckout
              amount={inspectionFee}
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

export default BookInspection;
