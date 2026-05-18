"use client";

import { useState } from 'react';
import PhotoboothReplicate from '@/components/PhotoboothReplicate';

export default function Page() {
  const [photoboothOpen, setPhotoboothOpen] = useState(false);

  return (
    <div className="p-8">
      {/* Your existing content */}
      
      {/* Photobooth Button */}
      <button
        onClick={() => setPhotoboothOpen(true)}
        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
      >
        🌊 Open Underwater Photobooth
      </button>

      {/* Photobooth Modal */}
      <PhotoboothReplicate 
        isOpen={photoboothOpen}
        onClose={() => setPhotoboothOpen(false)}
      />
    </div>
  );
}
