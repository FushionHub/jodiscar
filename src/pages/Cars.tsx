import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Car } from '../types';
import CarCard from '../components/common/CarCard';
import { useLocation } from 'react-router-dom';

const Cars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch('/cars.json');
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data: Car[] = await response.json();
        setCars(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q')?.toLowerCase() || '';
    const brand = params.get('brand')?.toLowerCase() || '';
    const locationParam = params.get('location')?.toLowerCase() || '';

    const filtered = cars.filter(car => {
      const matchesQuery = query ? (
        car.title.toLowerCase().includes(query) ||
        car.description.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query)
      ) : true;
      const matchesBrand = brand ? car.brand.toLowerCase() === brand : true;
      const matchesLocation = locationParam ? car.location.toLowerCase().includes(locationParam) : true;

      return matchesQuery && matchesBrand && matchesLocation;
    });

    setFilteredCars(filtered);
  }, [location.search, cars]);

  return (
    <>
      <Helmet>
        <title>Buy Cars - JodisCars | Search for Your Next Car</title>
        <meta name="description" content="Browse our inventory of new, used, and certified pre-owned cars. Find the perfect vehicle for you." />
      </Helmet>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Cars
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your next car from our extensive inventory of quality vehicles.
            </p>
          </div>

          {/* I'll add filter controls here later as per the plan */}

          {loading && <p className="text-center">Loading cars...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))
              ) : (
                <p className="text-center md:col-span-2 lg:col-span-3">No cars found matching your criteria.</p>
              )}
            </div>
          )}

          {/* Pagination could be added here in the future */}
        </div>
      </div>
    </>
  );
};

export default Cars;
