import React from 'react';
import { WhiteBlock } from '@/shared/components/shared/white-block';
import { CheckoutItemDetails } from '@/shared/components/shared/checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button, Skeleton } from '@/shared/components/ui';
import { cn } from '@/shared/lib/utils';

interface Props {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

const VAT = 15;
const DELIVERY_PRICE = 250;

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  loading,
  className,
}) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

  return (
    <WhiteBlock className={cn('p-6 sticky top-4', className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className="w-48 h-12" />
        ) : (
          <span className="text-[34px] font-extrabold">{totalPrice} ₽</span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Package size={20} className="text-gray-400" /> Стоимость корзины:
          </div>
        }
        value={loading ? <Skeleton className="w-16 h-6" /> : `${totalAmount} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Percent size={20} className="text-gray-400" />
            Налоги:
          </div>
        }
        value={loading ? <Skeleton className="w-16 h-6" /> : `${vatPrice} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Truck size={20} className="text-gray-400" />
            Доставка:
          </div>
        }
        value={
          loading ? <Skeleton className="w-16 h-6" /> : `${DELIVERY_PRICE} ₽`
        }
      />

      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
