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
  