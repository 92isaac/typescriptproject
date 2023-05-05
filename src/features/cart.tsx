import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calculateTotalCost } from '../constant/helpers';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectCartTotal = (state: { cart: CartState }) => {
  const items = state.cart.items;
  return calculateTotalCost(items);
};

export default cartSlice.reducer;