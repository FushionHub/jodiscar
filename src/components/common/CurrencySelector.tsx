import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useApp } from '../../context/AppContext';
import { Currency } from '../../types';
import { CURRENCIES } from '../../utils/constants';

const CurrencySelector: React.FC = () => {
  const { state, dispatch } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyChange = (currency: Currency) => {
    dispatch({ type: 'SET_CURRENCY', payload: currency });
    localStorage.setItem('preferredCurrency', currency);
    setIsOpen(false);
  };

  const currentCurrency = CURRENCIES[state.currency];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <span>{currentCurrency.flag}</span>
        <span className="font-medium">{state.currency}</span>
        <ChevronDownIcon className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
          {Object.entries(CURRENCIES).map(([code, info]) => (
            <button
              key={code}
              onClick={() => handleCurrencyChange(code as Currency)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between ${
                state.currency === code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>{info.flag}</span>
                <span>{code}</span>
              </div>
              <span className="text-xs text-gray-500">{info.symbol}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;