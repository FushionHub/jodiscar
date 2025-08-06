import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  UserIcon,
  CogIcon,
  HeartIcon,
  ShoppingCartIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const navigation = [
    { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
    { name: 'My Cars', href: '/dashboard/cars', icon: ShoppingCartIcon },
    { name: 'Favorites', href: '/dashboard/favorites', icon: HeartIcon },
    { name: 'Notifications', href: '/dashboard/notifications', icon: BellIcon },
    { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - JodisCars</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `group rounded-md px-3 py-2 flex items-center text-sm font-medium ${
                      isActive
                        ? 'bg-gray-50 text-blue-600 hover:bg-white'
                        : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  <item.icon
                    className="flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </aside>

          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
