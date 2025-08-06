import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { User, Currency, Car, AppSettings, Session } from '../types';
import { getCurrencyRates } from '../utils/currency';
import { supabase } from '../utils/supabase';
import toast from 'react-hot-toast';

interface AppState {
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  currency: Currency;
  cars: Car[];
  settings: AppSettings;
  loading: boolean;
  currencyRates: Record<Currency, number>;
  cookieConsent: {
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
    necessary: boolean;
  };
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_SESSION'; payload: Session | null }
  | { type: 'SET_CURRENCY'; payload: Currency }
  | { type: 'SET_CARS'; payload: Car[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_CURRENCY_RATES'; payload: Record<Currency, number> }
  | { type: 'SET_COOKIE_CONSENT'; payload: Partial<AppState['cookieConsent']> }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<AppSettings> };

const initialState: AppState = {
  user: null,
  session: null,
  isAuthenticated: false,
  currency: 'USD',
  cars: [],
  settings: {
    siteName: 'JodisCars',
    logo: '/logo.png',
    favicon: '/favicon.ico',
    primaryColor: '#1E40AF',
    secondaryColor: '#F59E0B',
    currency: 'USD',
    language: 'en',
    timezone: 'UTC',
    emailSettings: {
      smtpHost: '',
      smtpPort: 587,
      smtpUser: '',
      smtpPassword: '',
      fromEmail: 'noreply@jodiscars.com',
      fromName: 'JodisCars',
    },
    analyticsSettings: {},
    aiSettings: {
      geminiApiKey: '',
      isEnabled: true,
    },
  },
  loading: false,
  currencyRates: {
    USD: 1,
    NGN: 460,
    JOD: 0.71,
    EUR: 0.85,
    GBP: 0.73,
    BNB: 0.0035,
    USDT: 1,
    BTC: 0.000023,
  },
  cookieConsent: {
    analytics: false,
    marketing: false,
    functional: true,
    necessary: true,
  },
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
    case 'SET_SESSION':
      return {
        ...state,
        session: action.payload,
        user: action.payload?.user ?? null,
        isAuthenticated: !!action.payload,
      };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_CARS':
      return { ...state, cars: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_CURRENCY_RATES':
      return { ...state, currencyRates: action.payload };
    case 'SET_COOKIE_CONSENT':
      return {
        ...state,
        cookieConsent: { ...state.cookieConsent, ...action.payload },
      };
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.payload },
      };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        dispatch({ type: 'SET_SESSION', payload: session });
      }
    );

    // Load currency rates on app start
    const loadCurrencyRates = async () => {
      try {
        const rates = await getCurrencyRates();
        dispatch({ type: 'SET_CURRENCY_RATES', payload: rates.rates });
      } catch (error) {
        console.error('Failed to load currency rates:', error);
      }
    };

    loadCurrencyRates();

    // Load saved cookie consent
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      dispatch({ type: 'SET_COOKIE_CONSENT', payload: JSON.parse(savedConsent) });
    }

    // Load saved currency preference
    const savedCurrency = localStorage.getItem('preferredCurrency') as Currency;
    if (savedCurrency) {
      dispatch({ type: 'SET_CURRENCY', payload: savedCurrency });
    }

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};