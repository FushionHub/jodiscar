import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../../types';
import CarCard from '../common/CarCard';

const FeaturedCars: React.FC = () => {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch('/cars.json');
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data: Car[] = await response.json();
        // Select first 3 cars as featured
        setFeaturedCars(data.slice(0, 3));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p className="text-center">Loading featured cars...</p>;
    }

    if (error) {
      return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (featuredCars.length === 0) {
      return <p className="text-center">No featured cars available at the moment.</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    );
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

        {renderContent()}

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