import React from 'react';
import { 
  ShieldCheckIcon, 
  CreditCardIcon, 
  UserGroupIcon, 
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Secure Payments',
    description: 'Multiple payment gateways including crypto, PayPal, Stripe, and bank transfers with end-to-end encryption.',
    icon: CreditCardIcon,
  },
  {
    name: 'Professional Inspections',
    description: 'Certified mechanics provide detailed inspection reports with photos and recommendations.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Trusted Network',
    description: 'Verified dealers and sellers with customer reviews and ratings for your peace of mind.',
    icon: UserGroupIcon,
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock customer support with AI assistance and human experts available.',
    icon: ClockIcon,
  },
  {
    name: 'Global Currency',
    description: 'Support for 8 currencies including USD, EUR, NGN, and cryptocurrencies with live conversion.',
    icon: GlobeAltIcon,
  },
  {
    name: 'AI Assistant',
    description: 'Gemini AI-powered chat support to help you find the perfect car and answer questions.',
    icon: ChatBubbleLeftRightIcon,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose JodisCars?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive car buying experience with cutting-edge technology, 
            security, and customer service that sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative group bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <feature.icon 
                    className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" 
                    aria-hidden="true" 
                  />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
                  {feature.name}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted by Thousands</h3>
            <p className="text-gray-300">Join our growing community of satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
              <div className="text-sm text-gray-300">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">$0</div>
              <div className="text-sm text-gray-300">Hidden Fees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">256-bit</div>
              <div className="text-sm text-gray-300">SSL Encryption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;