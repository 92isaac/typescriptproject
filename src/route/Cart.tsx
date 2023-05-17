import CartPage from '../components/CartPage'
import { useSelector } from 'react-redux';
import { selectCart } from '../features/cartSlice';
import { removeItem } from '../features/cartSlice';


const Cart = () => {
  const cart = useSelector(selectCart);
  return (
    <>
    <CartPage items={cart.cart} onItemRemove={removeItem} />
    </>
  )
}

export default Cart