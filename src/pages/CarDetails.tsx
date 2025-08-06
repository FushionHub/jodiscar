import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Car } from '../types';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/currency';
import { CalendarIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { state } = useApp();

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch('/cars.json');
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data: Car[] = await response.json();
        const foundCar = data.find(c => c.id === id);
        if (foundCar) {
          setCar(foundCar);
        } else {
          setError('Car not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCarDetails();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading car details...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  if (!car) {
    return <div className="text-center py-12">Car not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${car.title} - JodisCars`}</title>
        <meta name="description" content={car.description} />
      </Helmet>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img src={car.images[0]} alt={car.title} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{car.title}</h1>
              <p className="text-3xl font-bold text-blue-600 mb-6">
                {formatCurrency(car.price, state.currency)}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-gray-400" />
                  <span>Year: {car.year}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
                  <span>{car.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Mileage:</span>
                  {car.mileage.toLocaleString()} mi
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Fuel:</span>
                  {car.fuelType}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Transmission:</span>
                  {car.transmission}
                </div>
                 <div className="flex items-center">
                  <span className="font-semibold mr-2">Color:</span>
                  {car.color}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Features</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

               <div className="mt-8 flex space-x-4">
                <Link
                  to={`/cars/${car.id}/checkout`}
                  className="flex-1 bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Buy Now
                </Link>
                 <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Contact Seller
                </button>
                <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Save to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
