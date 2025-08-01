import { Currency, CurrencyRate } from '../types';
import { CURRENCIES } from './constants';

// Mock exchange rates - in production, this would fetch from a real API
const MOCK_RATES: Record<Currency, number> = {
  USD: 1,
  NGN: 460,
  JOD: 0.71,
  EUR: 0.85,
  GBP: 0.73,
  BNB: 0.0035,
  USDT: 1,
  BTC: 0.000023,
};

export const convertCurrency = (
  amount: number,
  fromCurrency: Currency,
  toCurrency: Currency
): number => {
  if (fromCurrency === toCurrency) return amount;
  
  // Convert to USD first, then to target currency
  const usdAmount = amount / MOCK_RATES[fromCurrency];
  return usdAmount * MOCK_RATES[toCurrency];
};

export const formatCurrency = (
  amount: number,
  currency: Currency,
  locale: string = 'en-US'
): string => {
  const currencyInfo = CURRENCIES[currency];
  
  if (['BTC', 'USDT', 'BNB'].includes(currency)) {
    return `${currencyInfo.symbol}${amount.toFixed(8)}`;
  }
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency === 'JOD' ? 'USD' : currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount).replace(/[A-Z]{3}/, currencyInfo.symbol);
};

export const getCurrencyRates = async (): Promise<CurrencyRate> => {
  // In production, this would fetch from a real API like exchangerate-api.com
  return {
    base: 'USD',
    rates: MOCK_RATES,
    lastUpdated: new Date().toISOString(),
  };
};