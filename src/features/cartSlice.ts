import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
// import { getDefaultCart } from '../constant/helpers';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: Item[];
}

// const cart = getDefaultCart()

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity ++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});


export const selectCart =(state: RootState)=>state.cart
export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;



// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { calculateTotalCost } from '../constant/helpers';

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
// }

// interface CartState {
//   items: CartItem[];
// }

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: { items: [] } as CartState,
//   reducers: {
//     addItem: (state, action: PayloadAction<CartItem>) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addItem, removeItem } = cartSlice.actions;

// export const selectCartTotal = (state: { cart: CartState }) => {
//   const items = state.cart.items;
//   return calculateTotalCost(items);
// };

// export default cartSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//    cart: [],
//  },
//  reducers: {
//     addToCart: (state, action) => {
//       const itemInCart = state.cart.find((item) => item.id === action.payload.id);
//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       item.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       if (item.quantity === 1) {
//         item.quantity = 1
//       } else {
//         item.quantity--;
//       }
//     },
//     removeItem: (state, action) => {
//       const removeItem = state.cart.filter((item) => item.id !== action.payload);
//       state.cart = removeItem;
//     },
//   },
// });

// export const cartReducer = cartSlice.reducer;
// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeItem,
// } = cartSlice.actions;