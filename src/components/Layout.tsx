import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Car, Home } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="fixed top-0 w-full bg-gray-800/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-purple-500" />
                <span className="text-xl font-bold">Top Cars 2025</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/" className="flex items-center space-x-1 hover:text-purple-400 transition-colors">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link to="/future" className="flex items-center space-x-1 hover:text-purple-400 transition-colors">
                <Car className="h-5 w-5" />
                <span>Future</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}