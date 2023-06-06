import React, { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Payment Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block mb-2 text-lg font-medium">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full p-3 border-gray-300 border-solid border rounded"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Enter your card number"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiryDate" className="block mb-2 text-lg font-medium">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              className="w-full p-3 border-gray-300 border-solid border rounded"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block mb-2 text-lg font-medium">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full p-3 border-gray-300 border-solid border rounded"
              value={cvv}
              onChange={handleCVVChange}
              placeholder="Enter CVV"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
