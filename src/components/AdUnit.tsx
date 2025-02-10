import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface AdUnitProps {
  className?: string;
}

export default function AdUnit({ className = '' }: AdUnitProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 30000); // Reappear after 30 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 bg-gray-800 text-white p-1 rounded-full hover:bg-gray-700 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8630572584569784"
        data-ad-slot="your-ad-slot"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}