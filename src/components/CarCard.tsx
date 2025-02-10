import React from 'react';
import { motion } from 'framer-motion';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  index: number;
}

export default function CarCard({ car, index }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-shadow"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full">
          #{car.rank}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
        <p className="text-gray-400 mb-4">{car.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500">Price</p>
            <p className="text-purple-400 font-semibold">{car.price}</p>
          </div>
          <div>
            <p className="text-gray-500">0-60 mph</p>
            <p className="text-purple-400 font-semibold">{car.specs.acceleration}</p>
          </div>
          <div>
            <p className="text-gray-500">Top Speed</p>
            <p className="text-purple-400 font-semibold">{car.specs.topSpeed}</p>
          </div>
          <div>
            <p className="text-gray-500">Power</p>
            <p className="text-purple-400 font-semibold">{car.specs.power}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}