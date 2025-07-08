import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const KEYS = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '-'],
  ['0', '.', 'C', '+'],
];

type KeypadProps = {
  onKeyPress: (key: string) => void;
};

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => (
  <View style={styles.container}>
    {KEYS.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map(key => (
          <TouchableOpacity
            key={key}
            style={key === 'C' ? styles.clearButton : styles.keyButton}
            onPress={() => onKeyPress(key)}
          >
            <Text style={key === 'C' ? styles.clearText : styles.keyText}>
              {key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  keyButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 2,
  },
  keyText: {
    fontSize: 22,
    color: '#222',
    fontWeight: '500',
  },
  clearButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 2,
  },
  clearText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '700',
  },
});

export default Keypad;
