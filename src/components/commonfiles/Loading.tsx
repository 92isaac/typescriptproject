import React from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="border-4 border-gray-300 border-t-4  rounded-full w-12 h-12 animate-spin"></div>
      <div className="mt-4 text-lg font-bold text-gray-700">{message}</div>
    </div>
  );
};

export default Loading;
