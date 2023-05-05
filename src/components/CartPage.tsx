import React from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onItemRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const CartPage: React.FC<CartProps> = ({ items, onItemRemove, onQuantityChange }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:max-w-4xl mx-auto my-4 p-4 bg-white rounded-md shadow-md">
      <div className="flex-1">
        <h2 className="text-lg font-medium mb-4">Your Cart ({items?.length})</h2>
        {items?.length > 0 ? (
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-medium">{item?.name}</h3>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => onItemRemove(item?.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2">Quantity:</div>
                    <input
                    title='quantity'
                      type="number"
                      min="1"
                      value={item?.quantity}
                      onChange={(e) =>
                        onQuantityChange(item?.id, parseInt(e.target.value))
                      }
                      className="w-16 h-10 rounded-md border-gray-300 text-center"
                    />
                  </div>
                  <div className="text-gray-500">${item?.price.toFixed(2)}</div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="flex-shrink-0 lg:w-80 lg:ml-4 mt-4 lg:mt-0">
        <h2 className="text-lg font-medium mb-4">Order Summary</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between mb-2">
            <div>Subtotal ({items?.length} items):</div>
            <div>${items?.reduce((acc, item) => acc + item?.price * item?.quantity, 0).toFixed(2)}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div>Tax:</div>
            <div>$0.00</div>
          </div>
          <div className="flex justify-between mb-4">
            <div>Shipping:</div>
            <div>$0.00</div>
          </div>
          <div className="flex justify-between font-medium">
            <div>Total:</div>
            <div>${items?.reduce((acc, item) => acc + item?.price * item?.quantity, 0).toFixed(2)}</div>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-700 py-2 rounded-md shadow-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
