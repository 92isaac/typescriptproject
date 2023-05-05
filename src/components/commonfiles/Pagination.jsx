import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === currentPage || i === totalPages || i === currentPage - 1 || i === currentPage + 1) {
        pages.push(i);
      }
    }
    return pages;
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex">
        <li className={`${currentPage === 1 ? 'hidden' : ''}`}>
          <button
            className="p-2 mx-1 text-gray-600 transition-colors duration-300 rounded-full hover:bg-gray-300 focus:outline-none"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <FaChevronLeft />
          </button>
        </li>
        {getPageNumbers().map((page) => (
          <li key={page}>
            <button
              className={`p-2 mx-1 text-gray-600 transition-colors duration-300 rounded-full hover:bg-gray-300 ${
                currentPage === page ? 'bg-gray-300' : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`${currentPage === totalPages ? 'hidden' : ''}`}>
          <button
            className="p-2 mx-1 text-gray-600 transition-colors duration-300 rounded-full hover:bg-gray-300 focus:outline-none"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <FaChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
