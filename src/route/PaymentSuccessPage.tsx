import { TiTick } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessPage: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-[70vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto">
        <div className="text-center">
          <div className="text-6xl text-green-500">
            <TiTick />
          </div>
          <h1 className="text-2xl font-bold mt-4">Payment Successful</h1>
          <p className="text-gray-600 mt-2">Thank you for your payment!</p>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-green-600 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={()=>navigate('/products')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
