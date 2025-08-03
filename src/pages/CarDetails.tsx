import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Car Details Page</h1>
      <p className="mt-4">Details for car with ID: {id}</p>
      <p className="mt-2 text-gray-600">(This is a placeholder page. Full implementation is pending.)</p>
    </div>
  );
};

export default CarDetails;
