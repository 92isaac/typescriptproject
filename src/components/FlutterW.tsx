import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../features/authSlice';
import { useGetUserCartQuery } from '../features/cartApiSlice';

export default function FlutterW() {
  const { name, email, lastName, id } = useSelector(selectAuth)
  const {data: cartResult } = useGetUserCartQuery(id?.id)


    const navigate = useNavigate();
   const config = {
    public_key: 'FLWPUBK_TEST-f420e3cc38cc495e58f47a583e889310-X',
    tx_ref: Date.now(),
    amount: `${cartResult?.carts[0]?.total}`,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phone_number: '070********',
      name: `${name} ${lastName}`,
    },
    customizations: {
      title: 'Tokosmile',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response:any) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {navigate('/')},
  };

  return (
    <div className="App">
     <h1>Hello Test user</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}