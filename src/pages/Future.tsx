import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Cpu, Leaf, Zap } from 'lucide-react';
import AdUnit from '../components/AdUnit';

export default function Future() {
  const features = [
    {
      icon: <Battery className="h-8 w-8 text-purple-500" />,
      title: "Electric Revolution",
      description: "The future of automobiles is electric, with improved battery technology enabling longer ranges and faster charging times."
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-500" />,
      title: "Autonomous Driving",
      description: "AI-powered vehicles will revolutionize transportation, making it safer and more efficient than ever before."
    },
    {
      icon: <Leaf className="h-8 w-8 text-purple-500" />,
      title: "Sustainability",
      description: "Future cars will be built with eco-friendly materials and powered by renewable energy sources."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Connected Cars",
      description: "Smart vehicles will communicate with each other and infrastructure to optimize traffic flow and safety."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Left sidebar ad */}
          <div className="hidden lg:block w-64 mr-8">
            <div className="sticky top-24">
              <AdUnit className="w-full h-[600px] bg-gray-800 rounded-lg" />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                The Future of <span className="text-purple-500">Automobiles</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore how cars are evolving and shaping our future mobility
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Why We're Passionate About Cars</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-400">
                    Cars represent more than just transportation—they're a symbol of freedom, innovation, and human achievement. 
                    From the first automobile to today's electric vehicles, cars have continuously pushed the boundaries of 
                    technology and design.
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">
                    As we look to the future, automobiles continue to evolve with breakthrough technologies in electric 
                    powertrains, autonomous driving, and sustainable manufacturing. These advancements promise to make 
                    driving safer, more efficient, and more enjoyable than ever before.
                  </p>
                </div>
              </div>
            </motion.div>
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