export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'admin';
  isVerified: boolean;
  subscription?: Subscription;
  savedCards: PaymentCard[];
  preferences: UserPreferences;
  createdAt: string;
  lastLogin?: string;
}

export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: Currency;
  mileage: number;
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic';
  bodyType: string;
  color: string;
  images: string[];
  description: string;
  features: string[];
  location: string;
  condition: 'new' | 'used' | 'certified';
  sellerId: string;
  seller: User;
  isAvailable: boolean;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export interface Inspection {
  id: string;
  carId: string;
  car: Car;
  userId: string;
  user: User;
  date: string;
  time: string;
  location: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  inspector?: string;
  report?: InspectionReport;
  createdAt: string;
}

export interface InspectionReport {
  id: string;
  inspectionId: string;
  overallRating: number;
  engineCondition: number;
  bodyCondition: number;
  interiorCondition: number;
  tiresCondition: number;
  notes: string;
  images: string[];
  recommendations: string[];
  estimatedValue: number;
  createdAt: string;
}

export interface Payment {
  id: string;
  userId: string;
  carId?: string;
  inspectionId?: string;
  amount: number;
  currency: Currency;
  gateway: PaymentGateway;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  receipt?: string;
  invoice?: string;
  createdAt: string;
}

export interface PaymentCard {
  id: string;
  userId: string;
  last4: string;
  brand: string;
  expiryMonth: number;
  expiryYear: number;
  isDefault: boolean;
  token: string;
}

export interface Subscription {
  id: string;
  userId: string;
  email: string;
  status: 'active' | 'inactive';
  preferences: string[];
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  userId?: string;
  adminReply?: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: User;
  tags: string[];
  status: 'draft' | 'published';
  views: number;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  user: User;
  carId?: string;
  rating: number;
  comment: string;
  helpful: number;
  createdAt: string;
}

export interface UserPreferences {
  currency: Currency;
  language: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  privacy: {
    showProfile: boolean;
    showActivity: boolean;
  };
}

export interface Analytics {
  visitors: {
    total: number;
    unique: number;
    returning: number;
  };
  countries: Array<{
    country: string;
    visitors: number;
  }>;
  browsers: Array<{
    browser: string;
    percentage: number;
  }>;
  pages: Array<{
    path: string;
    views: number;
  }>;
}

export type Currency = 'USD' | 'NGN' | 'JOD' | 'EUR' | 'GBP' | 'BNB' | 'USDT' | 'BTC';

export type PaymentGateway = 'paypal' | 'stripe' | 'flutterwave' | 'paystack' | 'crypto' | 'bank_transfer';

export interface CurrencyRate {
  base: Currency;
  rates: Record<Currency, number>;
  lastUpdated: string;
}

export interface APIKey {
  id: string;
  gateway: PaymentGateway;
  publicKey: string;
  secretKey: string;
  isActive: boolean;
  environment: 'sandbox' | 'live';
  updatedAt: string;
}

export interface AppSettings {
  siteName: string;
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  currency: Currency;
  language: string;
  timezone: string;
  emailSettings: {
    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPassword: string;
    fromEmail: string;
    fromName: string;
  };
  analyticsSettings: {
    googleAnalyticsId?: string;
    vercelAnalyticsId?: string;
    adsenseId?: string;
  };
  aiSettings: {
    geminiApiKey: string;
    isEnabled: boolean;
  };
}