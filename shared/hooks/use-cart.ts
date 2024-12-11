import React from 'react';
import { useCartStore } from '@/shared/store';
import { useShallow } from 'zustand/react/shallow';
import { CartStateItem } from '@/shared/lib/get-cart-details';
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore(useShallow((state) => state));

  React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
