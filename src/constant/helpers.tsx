interface CartItem {
    price: number;
    quantity: number;
  }
  
  interface Props {
    cartitems: CartItem[];
  }
  
  export function calculateTotalCost({ cartitems }: Props): number {
    return cartitems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  


  export const getDefaultCart = ({ products }: { products: string[] }) => {
    const cart: { [key: string]: number } = {};
    for (const product of products) {
      cart[product] = 0;
    }
    return cart;
  };



  export const API_URL = 'https://dummyjson.com';