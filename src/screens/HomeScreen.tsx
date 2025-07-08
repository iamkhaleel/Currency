// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { getExchangeRates } from '../api/exchangeApi';
import CurrencySelector from '../components/CurrencySelector';
import Keypad from '../components/Keypad';

const HomeScreen = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [converted, setConverted] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const rates = await getExchangeRates(fromCurrency);
      setCurrencies(Object.keys(rates));
      setLastUpdated(new Date().toLocaleString());
    };
    fetchData();
  }, [fromCurrency]);

  useEffect(() => {
    handleConvert();
    // eslint-disable-next-line
  }, [amount, fromCurrency, toCurrency]);

  const handleConvert = async () => {
    if (!amount || isNaN(Number(amount))) {
      setConverted(null);
      return;
    }
    const rates = await getExchangeRates(fromCurrency);
    const rate = rates[toCurrency];
    setConverted(Number(amount) * rate);
  };

  const handleKeypad = (key: string) => {
    if (key === 'C') {
      setAmount('');
    } else if (key === '.') {
      if (!amount.includes('.')) setAmount(amount + '.');
    } else {
      setAmount(amount + key);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Convert Currency</Text>
        <Text style={styles.updated}>Last Updated: {lastUpdated}</Text>
        {/* Amount Card */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <CurrencySelector
              selected={fromCurrency}
              onChange={setFromCurrency}
              currencies={currencies}
            />
            <Text style={styles.amountInput}>{amount || '0'}</Text>
          </View>
        </View>
        {/* Converted Card */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <CurrencySelector
              selected={toCurrency}
              onChange={setToCurrency}
              currencies={currencies}
            />
            <Text style={styles.convertedAmount}>
              {converted !== null ? `$ ${converted.toFixed(2)}` : '$ 0.00'}
            </Text>
          </View>
          <Text style={styles.rateText}>
            {`1 ${fromCurrency} = ${
              converted && amount
                ? (converted / Number(amount)).toFixed(4)
                : '...'
            } ${toCurrency}`}
          </Text>
        </View>
        {/* Add Currency Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Currency</Text>
        </TouchableOpacity>
        {/* Keypad */}
        <Keypad onKeyPress={handleKeypad} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 24,
    marginTop: 40,
    marginBottom: 4,
    alignSelf: 'center',
    fontWeight: '700',
  },
  updated: {
    fontSize: 12,
    color: '#888',
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
    width: '100%',
    height: '10%',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountInput: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  convertedAmount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  rateText: {
    fontSize: 13,
    color: '#000',
    marginTop: -50,
    alignSelf: 'flex-end',
  },
  addButton: {
    backgroundColor: '#111',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginVertical: 18,
    width: '100%',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
