import CartPage from '../components/CartPage'
import { useSelector } from 'react-redux';
import { removeItem } from '../features/cartSlice';
import { useGetUserCartQuery } from '../features/cartApiSlice';
import { selectAuth } from '../features/authSlice';


const Cart = () => {
  const id = useSelector(selectAuth)
  console.log(id?.id)
  const {data: cartResult } = useGetUserCartQuery(id?.id)
  console.log(cartResult?.carts)
  // console.log(cartResult?.carts[0]?.products)
  return (
    <>
    <CartPage items={cartResult?.carts[0]?.products} onItemRemove={removeItem} />
    </>
  )
}

export default Cart