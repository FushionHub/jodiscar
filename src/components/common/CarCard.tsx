import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, EyeIcon, CalendarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Car } from '../../types';
import { useApp } from '../../context/AppContext';
import { formatCurrency } from '../../utils/currency';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { state } = useApp();
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // In a real app, you'd also call an API to update the like status
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative">
        <Link to={`/cars/${car.id}`}>
          <img
            src={car.images[0]}
            alt={car.title}
            className="w-full h-48 object-cover"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            car.condition === 'new'
              ? 'bg-green-100 text-green-800'
              : car.condition === 'certified'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {car.condition.toUpperCase()}
          </span>
        </div>
        <button
          onClick={handleLike}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          {isLiked ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          <Link to={`/cars/${car.id}`} className="hover:text-blue-600">{car.title}</Link>
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {formatCurrency(car.price, state.currency)}
          </span>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <EyeIcon className="h-4 w-4 mr-1" />
              {car.views}
            </div>
            <div className="flex items-center">
              <HeartIcon className="h-4 w-4 mr-1" />
              {car.likes + (isLiked ? 1 : 0)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-gray-400" />
            {car.year}
          </div>
          <div className="flex items-center">
            <RocketLaunchIcon className="h-4 w-4 mr-2 text-gray-400" />
            {car.mileage.toLocaleString()} mi
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
          {car.features.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{car.features.length - 2} more
            </span>
          )}
        </div>

        <div className="mt-auto flex space-x-3">
          <Link
            to={`/cars/${car.id}`}
            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/inspections/book?carId=${car.id}`}
            className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Book Inspection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
