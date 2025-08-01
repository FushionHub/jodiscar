import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, EyeIcon, CalendarIcon, GaugeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useApp } from '../../context/AppContext';
import { formatCurrency } from '../../utils/currency';
import { Car } from '../../types';

// Mock featured cars data
const featuredCars: Car[] = [
  {
    id: '1',
    title: '2023 Tesla Model 3 Long Range',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45000,
    currency: 'USD',
    mileage: 5000,
    fuelType: 'electric',
    transmission: 'automatic',
    bodyType: 'sedan',
    color: 'Pearl White',
    images: [
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium electric sedan with autopilot capability',
    features: ['Autopilot', 'Premium Interior', 'Supercharging', 'Over-the-air updates'],
    location: 'California, USA',
    condition: 'used',
    sellerId: 'seller1',
    seller: {} as any,
    isAvailable: true,
    views: 1250,
    likes: 89,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: '2022 BMW X5 xDrive40i',
    brand: 'BMW',
    model: 'X5',
    year: 2022,
    price: 65000,
    currency: 'USD',
    mileage: 15000,
    fuelType: 'petrol',
    transmission: 'automatic',
    bodyType: 'suv',
    color: 'Alpine White',
    images: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Luxury SUV with premium features and comfort',
    features: ['Leather Seats', 'Panoramic Roof', 'Navigation', 'Premium Sound'],
    location: 'New York, USA',
    condition: 'certified',
    sellerId: 'seller2',
    seller: {} as any,
    isAvailable: true,
    views: 890,
    likes: 67,
    createdAt: '2024-01-14T14:30:00Z',
    updatedAt: '2024-01-14T14:30:00Z'
  },
  {
    id: '3',
    title: '2024 Toyota Camry Hybrid LE',
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 32000,
    currency: 'USD',
    mileage: 1200,
    fuelType: 'hybrid',
    transmission: 'automatic',
    bodyType: 'sedan',
    color: 'Midnight Black',
    images: [
      'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Fuel-efficient hybrid sedan with modern technology',
    features: ['Hybrid Engine', 'Safety Sense 2.0', 'Wireless Charging', 'LED Headlights'],
    location: 'Texas, USA',
    condition: 'new',
    sellerId: 'seller3',
    seller: {} as any,
    isAvailable: true,
    views: 2100,
    likes: 156,
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z'
  }
];

const FeaturedCars: React.FC = () => {
  const { state } = useApp();
  const [likedCars, setLikedCars] = React.useState<Set<string>>(new Set());

  const handleLike = (carId: string) => {
    setLikedCars(prev => {
      const newSet = new Set(prev);
      if (newSet.has(carId)) {
        newSet.delete(carId);
      } else {
        newSet.add(carId);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Cars
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles from trusted sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={car.images[0]}
                  alt={car.title}
                  className="w-full h-48 object-cover"
                />
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
                  onClick={() => handleLike(car.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  {likedCars.has(car.id) ? (
                    <HeartSolidIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {car.title}
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
                      {car.likes}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-gray-400" />
                    {car.year}
                  </div>
                  <div className="flex items-center">
                    <GaugeIcon className="h-4 w-4 mr-2 text-gray-400" />
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

                <div className="flex space-x-3">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/cars"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Cars
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;