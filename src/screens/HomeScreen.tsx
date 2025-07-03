// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { getExchangeRates } from '../api/exchangeApi';
import CurrencySelector from '../components/CurrencySelector';

const HomeScreen = () => {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [converted, setConverted] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const rates = await getExchangeRates(fromCurrency);
      setCurrencies(Object.keys(rates));
    };
    fetchData();
  }, [fromCurrency]);

  const isAmountValid = !isNaN(Number(amount)) && Number(amount) > 0;
  const isReady = currencies.length > 0 && isAmountValid;

  const convert = async () => {
    if (!isReady) return;
    const rates = await getExchangeRates(fromCurrency);
    const rate = rates[toCurrency];
    setConverted(parseFloat(amount) * rate);
  };

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <Text
        style={{
          fontFamily: 'AvenirNext-Bold',
          fontSize: 20,
          marginTop: 70,
          alignSelf: 'center',
        }}
      >
        {' '}
        Convert Currency
      </Text>
    </View>
  );
};

export default HomeScreen;
