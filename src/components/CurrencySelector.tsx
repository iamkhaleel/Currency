// src/components/CurrencySelector.tsx
import React from 'react';
import { Picker } from '@react-native-picker/picker';

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
    {currencies.map(cur => (
      <Picker.Item label={cur} value={cur} key={cur} />
    ))}
  </Picker>
);

export default CurrencySelector;
