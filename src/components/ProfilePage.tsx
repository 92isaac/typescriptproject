import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <img
                src="profile.jpg"
                alt="Profile"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-center mb-2">John Doe</h2>
              <p className="text-gray-500 text-center">john.doe@example.com</p>
              <div className="flex justify-center mt-6">
                <button className="px-4 py-2 bg-indigo-500 text-white rounded-md">
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Shipping Address</h3>
              <p className="text-gray-500">123 Street, City, State, ZIP Code</p>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">Order History</h3>
              <ul className="divide-y divide-gray-300">
                <li className="py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="product1.jpg"
                        alt="Product"
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Product 1</h4>
                      <p className="text-gray-500">Order Date: May 1, 2023</p>
                      <p className="text-gray-500">Price: $19.99</p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="product2.jpg"
                        alt="Product"
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Product 2</h4>
                      <p className="text-gray-500">Order Date: May 3, 2023</p>
                      <p className="text-gray-500">Price: $29.99</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Wishlist</h3>
              <ul className="divide-y divide-gray-300">
                <li className="py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="product3.jpg"
                        alt="Product"
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Product 3</h4>
                      <p className="text-gray-500">Price: $39.99</p>
                      <button className="text-indigo-500 underline">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="product4.jpg"
                        alt="Product"
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Product 4</h4>
                      <p className="text-gray-500">Price: $49.99</p>
                      <button className="text-indigo-500 underline">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
