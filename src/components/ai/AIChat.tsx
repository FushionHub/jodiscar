import React, { useState, useRef, useEffect } from 'react';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm JodisCars AI Assistant. I can help you find the perfect car, explain our services, or answer any questions you have. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('price') || input.includes('cost') || input.includes('payment')) {
      return "Our cars range from affordable to luxury options. We support multiple payment methods including PayPal, Stripe, Flutterwave, Paystack, cryptocurrency (Bitcoin, USDT, BNB), and bank transfers. All payments are secure and encrypted. Would you like to see cars in a specific price range?";
    }
    
    if (input.includes('inspection') || input.includes('inspect')) {
      return "We offer professional car inspections by certified mechanics. The inspection includes engine condition, body condition, interior assessment, tire condition, and more. You can book an inspection for any car listing, and we'll provide a detailed report with photos and recommendations. Would you like to book an inspection?";
    }
    
    if (input.includes('currency') || input.includes('exchange')) {
      return "We support 8 currencies: USD, NGN, JOD, EUR, GBP, BNB, USDT, and Bitcoin. Our system automatically converts prices using real-time exchange rates. You can change your preferred currency in your account settings or using the currency selector in the header.";
    }
    
    if (input.includes('financing') || input.includes('loan')) {
      return "We partner with trusted financial institutions to offer competitive car financing options. You can get pre-approved for loans with flexible terms and competitive interest rates. Our financing partners work with various credit scores. Would you like more information about financing options?";
    }
    
    if (input.includes('sell') || input.includes('selling')) {
      return "Selling your car with JodisCars is easy! Create a listing with photos and details, set your price, and connect with verified buyers. We handle secure payments and provide inspection services to build buyer confidence. Our platform fee is competitive and transparent. Ready to list your car?";
    }
    
    if (input.includes('search') || input.includes('find') || input.includes('looking')) {
      return "I can help you find the perfect car! You can search by make, model, year, price range, location, and more. We have over 10,000 vehicles from trusted sellers. What type of car are you looking for? Any specific brand, budget, or features in mind?";
    }
    
    if (input.includes('help') || input.includes('support') || input.includes('contact')) {
      return `Our support team is available 24/7 to help you. You can:
      • Chat with me for instant assistance
      • Email us at jamachimauricennadi0@gmail.com
      • Call us at +2349024428551
      • Use the contact form on our website
      What specific assistance do you need?`;
    }
    
    // Default response
    return "I'm here to help with all your car buying and selling needs! I can assist with finding cars, explaining our services, payment methods, inspections, and more. Could you please be more specific about what you'd like to know?";
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <SparklesIcon className="h-5 w-5" />
          <span className="font-semibold">JodisCars AI</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <PaperAirplaneIcon className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChat;