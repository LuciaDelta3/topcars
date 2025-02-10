import React from 'react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import AdUnit from '../components/AdUnit';
import { cars } from '../data/cars';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Top Cars of <span className="text-purple-500">2025</span>
          </h1>
          <p className="text-xl text-gray-400">
            Discover the future of automotive excellence
          </p>
        </motion.div>
        
        <div className="flex">
          {/* Left sidebar ad */}
          <div className="hidden lg:block w-64 mr-8">
            <div className="sticky top-24">
              <AdUnit className="w-full h-[600px] bg-gray-800 rounded-lg" />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          </div>

          {/* Right sidebar ad */}
          <div className="hidden lg:block w-64 ml-8">
            <div className="sticky top-24">
              <AdUnit className="w-full h-[600px] bg-gray-800 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}