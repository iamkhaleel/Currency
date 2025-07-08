// src/components/CurrencySelector.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

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
  MXN: { name: 'Mexican Peso', flag: '🇲🇽' },
  KRW: { name: 'South Korean Won', flag: '🇰🇷' },
  SGD: { name: 'Singapore Dollar', flag: '🇸🇬' },
  HKD: { name: 'Hong Kong Dollar', flag: '🇭🇰' },
  SEK: { name: 'Swedish Krona', flag: '🇸🇪' },
  NOK: { name: 'Norwegian Krone', flag: '🇳🇴' },
  TRY: { name: 'Turkish Lira', flag: '🇹🇷' },
  SAR: { name: 'Saudi Riyal', flag: '🇸🇦' },
  AED: { name: 'UAE Dirham', flag: '🇦🇪' },
  EGP: { name: 'Egyptian Pound', flag: '🇪🇬' },
  NGN: { name: 'Nigerian Naira', flag: '🇳🇬' },
  ARS: { name: 'Argentine Peso', flag: '🇦🇷' },
  IDR: { name: 'Indonesian Rupiah', flag: '🇮🇩' },
  THB: { name: 'Thai Baht', flag: '🇹🇭' },
  PKR: { name: 'Pakistani Rupee', flag: '🇵🇰' },
  MYR: { name: 'Malaysian Ringgit', flag: '🇲🇾' },
  PHP: { name: 'Philippine Peso', flag: '🇵🇭' },
  PLN: { name: 'Polish Zloty', flag: '🇵🇱' },
  DKK: { name: 'Danish Krone', flag: '🇩🇰' },
  HUF: { name: 'Hungarian Forint', flag: '🇭🇺' },
  CZK: { name: 'Czech Koruna', flag: '🇨🇿' },
  ILS: { name: 'Israeli Shekel', flag: '🇮🇱' },
  CLP: { name: 'Chilean Peso', flag: '🇨🇱' },
  COP: { name: 'Colombian Peso', flag: '🇨🇴' },
  TWD: { name: 'Taiwan Dollar', flag: '🇹🇼' },
  VND: { name: 'Vietnamese Dong', flag: '🇻🇳' },
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
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const selectedData = currencyData[selected] || { name: selected, flag: '' };

  return (
    <>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
      >
        <Text style={styles.flag}>{selectedData.flag}</Text>
        <Text style={styles.code}>{selected}</Text>
        <Text style={styles.chevron}>▼</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.15)',
          }}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={currencies}
              keyExtractor={item => item}
              renderItem={({ item }) => {
                const data = currencyData[item] || { name: item, flag: '' };
                return (
                  <TouchableOpacity
                    style={styles.currencyItem}
                    onPress={() => {
                      onChange(item);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.flag}>{data.flag}</Text>
                    <Text style={styles.code}>{item}</Text>
                    <Text style={styles.name}>{data.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <TouchableOpacity
            style={StyleSheet.absoluteFill}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 8,
  },
  flag: {
    fontSize: 22,
    marginRight: 8,
  },
  code: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  chevron: {
    fontSize: 14,
    color: '#888',
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: 280,
    maxHeight: 400,
    elevation: 4,
  },
  currencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
});

export default CurrencySelector;
