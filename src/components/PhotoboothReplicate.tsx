"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function PhotoboothReplicate({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
      setGeneratedImage(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);

    try {
      // Get file from input
      const file = fileInputRef.current?.files?.[0];
      if (!file) throw new Error('No file selected');

      // Create FormData
      const formData = new FormData();
      formData.append('image', file);

      // Call API
      const response = await fetch('/api/photobooth/generate', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Generation failed');
      }

      setGeneratedImage(data.imageUrl);

    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;

    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `underwater-${Date.now()}.png`;
    link.click();
  };

  const handleReset = () => {
    setSelectedImage(null);
    setGeneratedImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-gradient-to-b from-cyan-900 to-blue-900 rounded-3xl p-8 max-w-4xl w-full shadow-2xl border-4 border-cyan-500">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl shadow-lg transition-all"
        >
          ×
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            🌊 UNDERWATER PHOTOBOOTH 🐠
          </h2>
          <p className="text-cyan-200 text-sm">
            Powered by AI • Upload foto kamu dan transform ke underwater scene!
          </p>
        </div>

        {/* Template Preview */}
        <div className="mb-6 text-center">
          <p className="text-white text-sm mb-3">📸 Contoh Template:</p>
          <div className="inline-block rounded-xl overflow-hidden border-4 border-cyan-400 shadow-xl">
            <Image 
              src="/asset/photobooth/templates.png" 
              alt="Template"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Upload Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          
          {/* Left: Upload */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border-2 border-cyan-400">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              📤 Upload Foto Kamu
            </h3>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="photo-upload"
            />
            
            <label
              htmlFor="photo-upload"
              className="block w-full aspect-square bg-cyan-500/20 border-4 border-dashed border-cyan-400 rounded-xl cursor-pointer hover:bg-cyan-500/30 transition-all flex items-center justify-center overflow-hidden"
            >
              {selectedImage ? (
                <img 
                  src={selectedImage} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-6">
                  <p className="text-6xl mb-4">📸</p>
                  <p className="text-white font-bold">Klik untuk upload</p>
                  <p className="text-cyan-200 text-sm mt-2">JPG, PNG</p>
                </div>
              )}
            </label>
          </div>

          {/* Right: Result */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border-2 border-cyan-400">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              ✨ Hasil AI Generation
            </h3>
            
            <div className="w-full aspect-square bg-cyan-500/20 border-4 border-dashed border-cyan-400 rounded-xl flex items-center justify-center overflow-hidden">
              {loading ? (
                <div className="text-center p-6">
                  <div className="animate-spin text-6xl mb-4">🌀</div>
                  <p className="text-white font-bold">Generating...</p>
                  <p className="text-cyan-200 text-sm mt-2">~10-20 detik</p>
                </div>
              ) : generatedImage ? (
                <img 
                  src={generatedImage} 
                  alt="Generated" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-6">
                  <p className="text-6xl mb-4">🎨</p>
                  <p className="text-white font-bold">Hasil akan muncul di sini</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 bg-red-500/20 border-2 border-red-500 rounded-xl p-4 text-center">
            <p className="text-red-200">❌ {error}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleGenerate}
            disabled={!selectedImage || loading}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
          >
            {loading ? '⏳ Generating...' : '🎨 GENERATE UNDERWATER!'}
          </button>

          <button
            onClick={handleDownload}
            disabled={!generatedImage}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
          >
            ⬇️ DOWNLOAD
          </button>

          <button
            onClick={handleReset}
            className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl shadow-lg transition-all"
          >
            🔄 RESET
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 text-center text-cyan-200 text-xs">
          <p>💡 Tip: Gunakan foto dengan pencahayaan bagus untuk hasil terbaik!</p>
        </div>
      </div>
    </div>
  );
}
