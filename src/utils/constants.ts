export const CURRENCIES: Record<string, { name: string; symbol: string; flag: string }> = {
  USD: { name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  NGN: { name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬' },
  JOD: { name: 'Jordanian Dinar', symbol: 'JD', flag: '🇯🇴' },
  EUR: { name: 'Euro', symbol: '€', flag: '🇪🇺' },
  GBP: { name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  BNB: { name: 'Binance Coin', symbol: 'BNB', flag: '🔶' },
  USDT: { name: 'Tether', symbol: 'USDT', flag: '💰' },
  BTC: { name: 'Bitcoin', symbol: '₿', flag: '₿' },
};

export const PAYMENT_GATEWAYS = {
  paypal: { name: 'PayPal', icon: '💳' },
  stripe: { name: 'Stripe', icon: '💳' },
  flutterwave: { name: 'Flutterwave', icon: '💳' },
  paystack: { name: 'Paystack', icon: '💳' },
  crypto: { name: 'Cryptocurrency', icon: '₿' },
  bank_transfer: { name: 'Bank Transfer', icon: '🏦' },
};

export const CAR_BRANDS = [
  'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz',
  'Audi', 'Lexus', 'Hyundai', 'Kia', 'Mazda', 'Subaru', 'Infiniti',
  'Acura', 'Cadillac', 'Lincoln', 'Jaguar', 'Land Rover', 'Porsche',
  'Ferrari', 'Lamborghini', 'Bentley', 'Rolls-Royce', 'Tesla'
];

export const FUEL_TYPES = ['petrol', 'diesel', 'electric', 'hybrid'];
export const TRANSMISSION_TYPES = ['manual', 'automatic'];
export const BODY_TYPES = ['sedan', 'suv', 'hatchback', 'coupe', 'convertible', 'truck', 'van'];
export const CONDITIONS = ['new', 'used', 'certified'];

export const INSPECTION_TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];

export const SUPPORT_EMAIL = 'jamachimauricennadi0@gmail.com';
export const SUPPORT_PHONE = '+2349024428551';
export const DEVELOPER_INFO = {
  name: 'Jamachi Mauricennadi',
  email: 'jamachimauricennadi0@gmail.com',
  phone: '+2349024428551',
  linkedin: 'mauricennadijamachi',
  twitter: '@fushiondevhub',
  website: 'me.fushionhubai.com.ng'
};

export const FAQ_DATA = [
  {
    question: 'How do I book a car inspection?',
    answer: 'You can book an inspection by clicking on any car listing and selecting "Book Inspection". Choose your preferred date and time, and our certified inspectors will meet you at the specified location.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept multiple payment methods including PayPal, Stripe, Flutterwave, Paystack, cryptocurrency (Bitcoin, USDT, BNB), and bank transfers.'
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Yes, all payment information is encrypted and processed through secure, PCI-compliant payment gateways. We never store your complete card details on our servers.'
  },
  {
    question: 'Can I save my payment cards for future purchases?',
    answer: 'Yes, you can securely save your payment cards in your account dashboard for faster checkouts in the future.'
  },
  {
    question: 'How does the currency conversion work?',
    answer: 'Our system uses real-time exchange rates to convert prices between different currencies. You can change your preferred currency in your account settings.'
  }
];