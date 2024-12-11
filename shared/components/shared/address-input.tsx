'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="72e0485ed4004caa12d4c528c11398f248bc88ef"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
