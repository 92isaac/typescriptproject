// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { selectAuth } from '../features/authSlice';
// import { useGetUserCartQuery } from '../features/cartApiSlice';

// export default function FlutterW(): JSX.Element {
//   const { name, email, lastName, id } = useSelector(selectAuth)
//   const {data: cartResult } = useGetUserCartQuery(id)
//   const navigate = useNavigate();
//   const config = {
//     public_key: 'FLWPUBK_TEST-f420e3cc38cc495e58f47a583e889310-X',
//     tx_ref: Date.now().toString(),
//     amount: `56666`,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: email,
//       phone_number: '070********',
//       name: `${name} ${lastName}`,
//     },
//     customizations: {
//       title: 'Tokosmile',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//   return (
//     <div className="App">
//      <h1>Hello Test user</h1>

//       <button
//         onClick={() => {
//           handleFlutterPayment({
//             callback: (response) => {
//                console.log(response);
//                 closePaymentModal() // this will close the modal programmatically
//             },
//             onClose: () => {navigate('/')},
//           });
//         }}
//       >
//         Payment with React hooks
//       </button>
//     </div>
//   );
// }

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../features/authSlice';

export default function FlutterW() {
  const navigate = useNavigate();
  const { name, lastName, } = useSelector(selectAuth)

  const config = {
    public_key: 'FLWPUBK_TEST-f420e3cc38cc495e58f47a583e889310-X',
    tx_ref: Date.now().toString(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
       phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="min-h-[45vh] mt-10 bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto">

     <h1>Hello {name} {lastName}</h1>

      <button
      className='bg-green-600 hover:bg-green-600 text-white px-4 py-2 rounded'
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {navigate('/payment-success')},
          });
        }}
      >
        Make Payment 
      </button>
    </div>
    </div>
  );
}