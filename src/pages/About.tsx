import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  UserGroupIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';
import { DEVELOPER_INFO } from '../utils/constants';

const About: React.FC = () => {
  const values = [
    {
      name: 'Trust & Transparency',
      description: 'We believe in honest dealings with transparent pricing, no hidden fees, and verified seller information.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Customer First',
      description: 'Every decision we make is focused on providing the best experience for our customers.',
      icon: HeartIcon,
    },
    {
      name: 'Global Accessibility',
      description: 'Supporting multiple currencies and payment methods to serve customers worldwide.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Community',
      description: 'Building a trusted community of buyers, sellers, and automotive professionals.',
      icon: UserGroupIcon,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - JodisCars | Our Mission & Story</title>
        <meta name="description" content="Learn about JodisCars mission to revolutionize car buying with secure payments, professional inspections, and trusted sellers worldwide." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About JodisCars</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Revolutionizing the car buying experience with technology, 
                security, and customer-first approach.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At JodisCars, we're on a mission to transform the car buying and selling 
                  experience by leveraging cutting-edge technology, ensuring maximum security, 
                  and providing unparalleled customer service.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that finding the perfect car should be exciting, not stressful. 
                  That's why we've built a platform that combines the convenience of online 
                  shopping with the trust and assurance of professional inspections and 
                  secure payments.
                </p>
                <p className="text-lg text-gray-600">
                  From supporting multiple currencies including cryptocurrencies to providing 
                  AI-powered assistance, we're constantly innovating to meet our customers' 
                  evolving needs.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Car showroom"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide every decision we make and every service we provide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.name} className="text-center">
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.name}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  JodisCars was founded in 2024 with a simple yet ambitious goal: to create 
                  the world's most trusted and innovative car marketplace. Our founder, 
                  {' '}{DEVELOPER_INFO.name}, recognized the challenges facing both car buyers 
                  and sellers in the digital age.
                </p>
                <p className="mb-6">
                  Traditional car buying often involves uncertainty, hidden fees, and lengthy 
                  processes. We set out to change that by building a platform that prioritizes 
                  transparency, security, and user experience above all else.
                </p>
                <p className="mb-6">
                  Today, JodisCars serves thousands of customers worldwide, offering them access 
                  to quality vehicles, professional inspection services, and secure payment options 
                  that include traditional methods and cutting-edge cryptocurrency solutions.
                </p>
                <p>
                  We're just getting started. As we continue to grow, our commitment remains the 
                  same: to provide the best car buying and selling experience in the industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">JodisCars by the Numbers</h2>
              <p className="text-xl text-blue-100">
                See the impact we're making in the automotive industry
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-200 mb-2">10K+</div>
                <div className="text-blue-100">Cars Listed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-200 mb-2">500+</div>
                <div className="text-blue-100">Trusted Dealers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-200 mb-2">50K+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-200 mb-2">8</div>
                <div className="text-blue-100">Supported Currencies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
              <p className="text-lg text-gray-600">
                The visionary behind JodisCars
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {DEVELOPER_INFO.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {DEVELOPER_INFO.name}
                </h3>
                <p className="text-blue-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-6">
                  A passionate technologist and automotive enthusiast dedicated to 
                  revolutionizing the car buying experience through innovation and technology.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={`mailto:${DEVELOPER_INFO.email}`}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Email
                  </a>
                  <a 
                    href={`https://linkedin.com/in/${DEVELOPER_INFO.linkedin}`}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={`https://twitter.com/${DEVELOPER_INFO.twitter}`}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;