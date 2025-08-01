import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedCars from '../components/home/FeaturedCars';
import Features from '../components/home/Features';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>JodisCars - Find Your Perfect Car | Secure Car Buying Platform</title>
        <meta name="description" content="Discover thousands of quality vehicles with secure payments, professional inspections, and trusted sellers. Multi-currency support including crypto payments." />
        <meta name="keywords" content="cars, buy cars, car dealership, car inspection, secure payments, cryptocurrency payments" />
      </Helmet>
      
      <div className="min-h-screen">
        <Hero />
        <FeaturedCars />
        <Features />
      </div>
    </>
  );
};

export default Home;