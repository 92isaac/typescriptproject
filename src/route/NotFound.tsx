import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-500 text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-indigo-500 rounded-md transition-colors duration-300 hover:bg-indigo-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
