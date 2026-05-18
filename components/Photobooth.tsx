"use client";

import { useEffect, useRef } from "react";

export default function Photobooth({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const initRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const init = async () => {
      if (initRef.current) return;
      
      setTimeout(() => {
        if (!(window as any).TemplatePhotobooth) {
          eval(PHOTOBOOTH_JS);
        }
        if (!(window as any).photobooth && (window as any).TemplatePhotobooth) {
          (window as any).photobooth = new (window as any).TemplatePhotobooth();
          console.log("✅ Template Photobooth initialized");
        }
        initRef.current = true;
      }, 300);
    };

    init();

    return () => {
      if ((window as any).photobooth?.stream) {
        (window as any).photobooth.stream.getTracks().forEach((track: any) => track.stop());
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="relative bg-gray-900 rounded-2xl p-6 max-w-5xl w-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg transition-all"
          >
            ×
          </button>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              🎥 UNDERWATER PHOTOBOOTH 🌊
            </h2>
            <p className="text-sm text-gray-400">
              Ambil foto dan lihat hasilnya di template underwater!
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: PHOTOBOOTH_HTML }} />
        </div>
      </div>

      <style jsx global>{PHOTOBOOTH_CSS}</style>
    </>
  );
}

const PHOTOBOOTH_HTML = `
<div id="template-photobooth">
    <!-- Camera View -->
    <div class="camera-section" id="camera-section">
        <video id="camera-video" autoplay playsinline muted></video>
        <div class="camera-hint">📸 Posisikan wajah kamu dengan baik</div>
    </div>

    <!-- Template Preview with Photos -->
    <div class="template-section" id="template-section">
        <canvas id="template-canvas"></canvas>
        <div class="template-hint">👆 Hasil foto kamu akan muncul di sini!</div>
    </div>

    <!-- Controls -->
    <div class="controls-section">
        <button id="start-camera-btn" class="btn btn-primary">
            📷 BUKA KAMERA
        </button>
        <button id="capture-photo-btn" class="btn btn-capture" disabled>
            📸 AMBIL FOTO <span id="photo-count">(0/2)</span>
        </button>
        <button id="reset-btn" class="btn btn-secondary" disabled>
            🔄 RESET
        </button>
        <button id="download-btn" class="btn btn-download" disabled>
            ⬇️ DOWNLOAD HASIL
        </button>
    </div>
</div>
`;

const PHOTOBOOTH_CSS = `
#template-photobooth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.camera-section {
  position: relative;
  aspect-ratio: 4/3;
  background: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  border: 4px solid #2a8ab8;
}

#camera-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
}

.camera-hint {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
}

.template-section {
  position: relative;
  aspect-ratio: 4/3;
  background: #f0f0f0;
  border-radius: 15px;
  overflow: hidden;
  border: 4px solid #FFB6C1;
  display: flex;
  align-items: center;
  justify-content: center;
}

#template-canvas {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

.template-hint {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 182, 193, 0.9);
  color: #333;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
}

.controls-section {
  grid-column: 1 / -1;
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #00897b 0%, #00695c 100%);
  color: white;
}

.btn-capture {
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  color: white;
  font-size: 18px;
}

.btn-secondary {
  background: linear-gradient(135deg, #757575 0%, #616161 100%);
  color: white;
}

.btn-download {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
}

#photo-count {
  font-size: 14px;
  opacity: 0.9;
}

@media (max-width: 968px) {
  #template-photobooth {
    grid-template-columns: 1fr;
  }
  
  .controls-section {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
`;

const PHOTOBOOTH_JS = `
class TemplatePhotobooth {
  constructor() {
    this.stream = null;
    this.photos = [];
    this.maxPhotos = 2;
    this.templateImg = null;
    
    this.initElements();
    this.loadTemplate();
    this.attachEventListeners();
  }
  
  initElements() {
    this.video = document.getElementById('camera-video');
    this.canvas = document.getElementById('template-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.cameraSection = document.getElementById('camera-section');
    this.startBtn = document.getElementById('start-camera-btn');
    this.captureBtn = document.getElementById('capture-photo-btn');
    this.resetBtn = document.getElementById('reset-btn');
    this.downloadBtn = document.getElementById('download-btn');
    this.photoCountEl = document.getElementById('photo-count');
  }
  
  loadTemplate() {
    this.templateImg = new Image();
    this.templateImg.crossOrigin = 'anonymous';
    this.templateImg.onload = () => {
      this.canvas.width = this.templateImg.width;
      this.canvas.height = this.templateImg.height;
      this.drawTemplate();
    };
    // Load the sample template image
    this.templateImg.src = '/asset/underwater-template.png';
    
    // For demo, create a colored template
    setTimeout(() => {
      if (!this.templateImg.complete) {
        this.createDemoTemplate();
      }
    }, 100);
  }
  
  createDemoTemplate() {
    // Create demo template if image fails to load
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.drawTemplate();
  }
  
  drawTemplate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw background gradient (ocean theme)
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0, '#B8E6F0');
    gradient.addColorStop(1, '#87CEEB');
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw decorative frame (left side)
    this.ctx.fillStyle = '#FFB6C1';
    this.ctx.fillRect(20, 20, this.canvas.width * 0.35, this.canvas.height - 40);
    
    // Draw title
    this.ctx.font = 'bold 32px Comic Sans MS';
    this.ctx.fillStyle = '#FF69B4';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('UNDER SEA', this.canvas.width * 0.2, 60);
    
    // Draw decorative slots
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.fillRect(40, 100, this.canvas.width * 0.3, 80);
    this.ctx.fillRect(40, 200, this.canvas.width * 0.3, 80);
    this.ctx.fillRect(40, 300, this.canvas.width * 0.3, 80);
    
    // Draw seaweed emoji
    this.ctx.font = 'bold 40px Arial';
    this.ctx.fillText('🌿🌿🌿', this.canvas.width * 0.2, this.canvas.height - 30);
    
    // Draw fish emoji
    this.ctx.fillText('🐠', this.canvas.width * 0.15, 150);
    this.ctx.fillText('🐡', this.canvas.width * 0.25, 250);
    this.ctx.fillText('🦑', this.canvas.width * 0.15, 350);
    
    // Draw photo frame placeholders (right side - tilted)
    this.drawPhotoFramePlaceholder(0);
    this.drawPhotoFramePlaceholder(1);
    
    // Draw user photos if any
    this.photos.forEach((photo, index) => {
      this.drawUserPhoto(photo, index);
    });
  }
  
  drawPhotoFramePlaceholder(index) {
    const positions = [
      { x: 500, y: 100, width: 220, height: 165, rotate: 8 },
      { x: 520, y: 320, width: 220, height: 165, rotate: -5 }
    ];
    
    const pos = positions[index];
    this.ctx.save();
    this.ctx.translate(pos.x + pos.width/2, pos.y + pos.height/2);
    this.ctx.rotate(pos.rotate * Math.PI / 180);
    
    // Draw frame border
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(-pos.width/2 - 15, -pos.height/2 - 15, pos.width + 30, pos.height + 50);
    
    // Draw inner placeholder
    if (!this.photos[index]) {
      this.ctx.fillStyle = '#E0E0E0';
      this.ctx.fillRect(-pos.width/2, -pos.height/2, pos.width, pos.height);
      
      // Draw text
      this.ctx.fillStyle = '#999';
      this.ctx.font = 'bold 16px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Foto ' + (index + 1), 0, 0);
    }
    
    this.ctx.restore();
  }
  
  drawUserPhoto(photoData, index) {
    const positions = [
      { x: 500, y: 100, width: 220, height: 165, rotate: 8 },
      { x: 520, y: 320, width: 220, height: 165, rotate: -5 }
    ];
    
    const pos = positions[index];
    const img = new Image();
    img.onload = () => {
      this.ctx.save();
      this.ctx.translate(pos.x + pos.width/2, pos.y + pos.height/2);
      this.ctx.rotate(pos.rotate * Math.PI / 180);
      
      // Draw white frame
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(-pos.width/2 - 15, -pos.height/2 - 15, pos.width + 30, pos.height + 50);
      
      // Draw photo
      this.ctx.drawImage(img, -pos.width/2, -pos.height/2, pos.width, pos.height);
      
      this.ctx.restore();
    };
    img.src = photoData;
  }
  
  attachEventListeners() {
    this.startBtn.addEventListener('click', () => this.startCamera());
    this.captureBtn.addEventListener('click', () => this.capturePhoto());
    this.resetBtn.addEventListener('click', () => this.reset());
    this.downloadBtn.addEventListener('click', () => this.download());
  }
  
  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      this.video.srcObject = this.stream;
      this.startBtn.disabled = true;
      this.captureBtn.disabled = false;
      
      alert('✅ Kamera aktif! Posisikan wajah kamu lalu klik AMBIL FOTO!');
    } catch (err) {
      alert('⚠️ Gagal mengakses kamera: ' + err.message);
    }
  }
  
  capturePhoto() {
    if (this.photos.length >= this.maxPhotos) {
      alert('⚠️ Maksimal ' + this.maxPhotos + ' foto!');
      return;
    }
    
    const captureCanvas = document.createElement('canvas');
    captureCanvas.width = this.video.videoWidth;
    captureCanvas.height = this.video.videoHeight;
    const ctx = captureCanvas.getContext('2d');
    
    // Draw mirrored video
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(this.video, -captureCanvas.width, 0);
    ctx.restore();
    
    const photoData = captureCanvas.toDataURL('image/png');
    this.photos.push(photoData);
    
    this.updateUI();
    this.drawTemplate();
    
    const remaining = this.maxPhotos - this.photos.length;
    if (remaining === 0) {
      alert('✅ Foto lengkap! Klik DOWNLOAD untuk menyimpan hasil!');
      this.captureBtn.disabled = true;
    } else {
      alert('✅ Foto ' + this.photos.length + ' berhasil! Ambil ' + remaining + ' foto lagi!');
    }
  }
  
  updateUI() {
    this.photoCountEl.textContent = '(' + this.photos.length + '/' + this.maxPhotos + ')';
    this.resetBtn.disabled = this.photos.length === 0;
    this.downloadBtn.disabled = this.photos.length === 0;
  }
  
  reset() {
    if (confirm('Reset semua foto?')) {
      this.photos = [];
      this.drawTemplate();
      this.updateUI();
      this.captureBtn.disabled = this.stream ? false : true;
    }
  }
  
  download() {
    if (this.photos.length === 0) return;
    
    const link = document.createElement('a');
    link.download = 'underwater-photobooth-' + Date.now() + '.png';
    link.href = this.canvas.toDataURL('image/png');
    link.click();
    
    alert('✅ Download berhasil!');
  }
}

if (typeof window !== 'undefined') {
  window.TemplatePhotobooth = TemplatePhotobooth;
}
`;
