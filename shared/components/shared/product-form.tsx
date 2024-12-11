'use client';

import React from 'react';
import { useCartStore } from '@/shared/store';
import { useShallow } from 'zustand/react/shallow';
import toast from 'react-hot-toast';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '@/shared/components/shared/choose-pizza-form';
import { ChooseProductForm } from '@/shared/components/shared/choose-product-form';

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({
  product,
  onSubmit: _onSubmit,
}) => {
  const [loading, addCartItem] = useCartStore(
    useShallow((state) => [state.loading, state.addCartItem]),
  );

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({ productItemId: itemId, ingredients });

      toast.success(`${product.name} добавлена в корзину`);
      _onSubmit?.();
    } catch (e) {
      toast.error(`Не удалось добавить ${product.name} в корзину`);
      console.error(e);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      price={firstItem.price}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
