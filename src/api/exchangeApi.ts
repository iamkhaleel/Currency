// src/api/exchangeApi.ts
import axios from 'axios';

export const getExchangeRates = async (baseCurrency: string) => {
  const res = await axios.get(
    `https://api.exchangerate.host/latest?base=${baseCurrency}`,
  );
  return res.data.rates;
};
