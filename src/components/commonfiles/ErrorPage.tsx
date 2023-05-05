import React from 'react';

interface ErrorProps {
  message: string;
}

const ErrorPage: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4">
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default ErrorPage;
