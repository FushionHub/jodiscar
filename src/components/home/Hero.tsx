import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { CAR_BRANDS } from '../../utils/constants';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append('q', searchQuery);
    if (selectedBrand) params.append('brand', selectedBrand);
    if (location) params.append('location', location);
    navigate(`/cars?${params.toString()}`);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div 
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center lg:text-left max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Find Your Perfect Car
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover thousands of quality vehicles with secure payments, 
              professional inspections, and trusted sellers.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-xl p-6 text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    What are you looking for?
                  </label>
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by make, model, or keyword..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                    Brand
                  </label>
                  <select
                    id="brand"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Brands</option>
                    {CAR_BRANDS.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City or ZIP code"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Search Cars
              </button>
            </form>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">10K+</div>
                <div className="text-sm text-blue-100">Cars Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">500+</div>
                <div className="text-sm text-blue-100">Trusted Dealers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">50K+</div>
                <div className="text-sm text-blue-100">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;