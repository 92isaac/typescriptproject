import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../features/authSlice';
import { useGetUserCartQuery } from '../features/cartApiSlice';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total:number;
  totalQuantity:number;
  totalProducts: number;
  discountedTotal: number;
}

interface CartProps {
  items: CartItem[];
  onItemRemove: (id: number) => void;
  // onQuantityChange: (id: number, quantity: number) => void;
}



const CartPage: React.FC<CartProps> = ({ items, onItemRemove }) => {
  const navigate = useNavigate()
  const id = useSelector(selectAuth)
  console.log(id?.id)
  const {data: cartResult } = useGetUserCartQuery(id?.id)
  return (
    <div className="flex flex-col lg:flex-row lg:max-w-4xl mx-auto my-4 p-4 bg-white rounded-md shadow-md">
      <div className="flex-1">
        <h2 className="text-lg font-medium mb-4">Your Cart ({items?.length})</h2>
        {items?.length > 0 ? (
          <ul>
            {Object.values(items).map((item) => (
              <li key={item?.id} className="flex mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-medium">{item?.title}</h3>
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
                      readOnly
                      // onChange={(e) =>
                        // onQuantityChange(item?.id, parseInt(e.target.value))
                      // }
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
            {/* <div>${items?.reduce((acc, item) => acc + item?.price * item?.quantity, 0).toFixed(2)}</div> */}
          </div>
          <div className="flex justify-between mb-2">
            <div>Tax:</div>
            <div>$0.00</div>
          </div>
          <div className="flex justify-between mb-4">
            <div>Total Products:</div>
            <div>{cartResult?.carts[0]?.totalProducts}</div>
          </div>
          <div className="flex justify-between mb-4">
            <div>Total Quantity:</div>
            <div>{cartResult?.carts[0]?.totalQuantity}</div>
          </div>
          <div className="flex justify-between mb-4">
            <div>Total Discount:</div>
            <div>{cartResult?.carts[0]?.discountedTotal}</div>
          </div>
          <div className="flex justify-between mb-4">
            <div>Shipping:</div>
            <div>$0.00</div>
          </div>
          <div className="flex justify-between font-medium text-xl">
            <div className=''>Total:</div>
            <div className=''>${cartResult?.carts[0]?.total}</div>
          </div>
        </div>
        <button className="w-full mt-4 bg-[#349C83] text-white hover:bg-[#2A977D] py-2 rounded-md shadow-md" onClick={()=>navigate('/flutter')}>
          Checkout
        </button>
        <button className="w-full mt-4 bg-[#2A977D] text-white hover:bg-[#349C83] py-2 rounded-md shadow-md" onClick={()=>navigate('/products')}>
          Continue Shopping
        </button>
        <button className="w-full mt-4 bg-[#2A977D] text-white hover:bg-[#349C83] py-2 rounded-md shadow-md" onClick={()=>navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default CartPage;
