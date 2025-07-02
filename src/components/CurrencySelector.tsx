// src/components/CurrencySelector.tsx
import React from 'react';
import { Picker } from '@react-native-picker/picker';

const currencyData: Record<string, { name: string; flag: string }> = {
  USD: { name: 'US Dollar', flag: '🇺🇸' },
  EUR: { name: 'Euro', flag: '🇪🇺' },
  GBP: { name: 'British Pound', flag: '🇬🇧' },
  JPY: { name: 'Japanese Yen', flag: '🇯🇵' },
  AUD: { name: 'Australian Dollar', flag: '🇦🇺' },
  CAD: { name: 'Canadian Dollar', flag: '🇨🇦' },
  CHF: { name: 'Swiss Franc', flag: '🇨🇭' },
  CNY: { name: 'Chinese Yuan', flag: '🇨🇳' },
  INR: { name: 'Indian Rupee', flag: '🇮🇳' },
  RUB: { name: 'Russian Ruble', flag: '🇷🇺' },
  BRL: { name: 'Brazilian Real', flag: '🇧🇷' },
  ZAR: { name: 'South African Rand', flag: '🇿🇦' },
  // Add more as needed
};

type Props = {
  selected: string;
  onChange: (value: string) => void;
  currencies: string[];
};

const CurrencySelector: React.FC<Props> = ({
  selected,
  onChange,
  currencies,
}) => (
  <Picker selectedValue={selected} onValueChange={onChange}>
    {currencies.map(cur => {
      const data = currencyData[cur] || { name: cur, flag: '' };
      return (
        <Picker.Item
          label={`${data.flag} ${cur} - ${data.name}`}
          value={cur}
          key={cur}
        />
      );
    })}
  </Picker>
);

export default CurrencySelector;
