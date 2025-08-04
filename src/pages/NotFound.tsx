import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found - JodisCars</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
            Page Not Found
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Sorry, the page you are looking for does not exist.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
