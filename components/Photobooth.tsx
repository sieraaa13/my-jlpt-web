"use client";

import { useEffect, useRef } from "react";

export default function Photobooth({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const initRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const init = async () => {
      if (initRef.current) return;
      
      setTimeout(() => {
        if (!(window as any).LiveUnderwaterPhotobooth) {
          eval(PHOTOBOOTH_JS);
        }
        if (!(window as any).photobooth && (window as any).LiveUnderwaterPhotobooth) {
          (window as any).photobooth = new (window as any).LiveUnderwaterPhotobooth();
          console.log("✅ Live Photobooth initialized");
        }
        initRef.current = true;
      }, 300);
    };

    init();

    return () => {
      if ((window as any).photobooth?.stream) {
        (window as any).photobooth.stream.getTracks().forEach((track: any) => track.stop());
      }
      if ((window as any).photobooth?.animationId) {
        cancelAnimationFrame((window as any).photobooth.animationId);
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
        <div className="relative bg-gray-900 rounded-2xl p-6 max-w-4xl w-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg transition-all"
          >
            ×
          </button>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              🎥 LIVE UNDERWATER PHOTOBOOTH! 🌊
            </h2>
            <p className="text-sm text-gray-400">
              Pose dengan ikan, cumi, dan gelembung yang bergerak!
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
<div id="live-photobooth-container">
    <!-- Live Camera Preview with Overlay -->
    <div class="live-camera-stage" id="live-camera-stage">
        <video id="live-camera-video" autoplay playsinline muted></video>
        <canvas id="live-decorations-canvas"></canvas>
        
        <div class="live-camera-title">UNDER SEA</div>
        
        <div class="live-camera-hint">
            💡 Pose sesuai dekorasi:<br>
            Makan ikan 🐠 | Tangkap cumi 🦑 | Main gelembung ○
        </div>
    </div>

    <!-- Controls -->
    <div class="live-controls">
        <button id="live-start-btn" class="live-btn live-btn-primary">
            📷 BUKA KAMERA LIVE
        </button>
        <button id="live-capture-btn" class="live-btn live-btn-capture" disabled>
            📸 AMBIL FOTO
        </button>
        <button id="live-close-btn" class="live-btn live-btn-secondary" disabled>
            ❌ TUTUP KAMERA
        </button>
    </div>

    <!-- Photo Gallery -->
    <div class="live-gallery" id="live-gallery">
        <h3 class="live-gallery-title">📸 Foto Hasil (Max 4)</h3>
        <div class="live-gallery-grid" id="live-gallery-grid">
            <!-- Photos will be added here -->
        </div>
        <button id="live-download-all-btn" class="live-btn live-btn-download" disabled>
            ⬇️ DOWNLOAD SEMUA FOTO
        </button>
    </div>
</div>
`;

const PHOTOBOOTH_CSS = `
#live-photobooth-container {
  max-width: 100%;
}

.live-camera-stage {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 20px;
  aspect-ratio: 4/3;
  background: linear-gradient(180deg, #4db8e8 0%, #2a7ba8 50%, #1a5278 100%);
  border: 8px solid #2a8ab8;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

#live-camera-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1); /* Mirror effect */
}

#live-decorations-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.live-camera-title {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 48px;
  font-weight: bold;
  color: #ff69b4;
  text-shadow: 
    3px 3px 0px rgba(255, 255, 255, 0.8),
    0 0 30px rgba(255, 105, 180, 0.6);
  letter-spacing: 5px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  z-index: 3;
  animation: title-glow 2s ease-in-out infinite;
}

@keyframes title-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.live-camera-hint {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  text-align: center;
  z-index: 3;
  line-height: 1.6;
}

.live-controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.live-btn {
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.live-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.live-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.live-btn-primary {
  background: linear-gradient(135deg, #00897b 0%, #00695c 100%);
  color: white;
}

.live-btn-capture {
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  color: white;
  font-size: 18px;
}

.live-btn-secondary {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5253 100%);
  color: white;
}

.live-btn-download {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  width: 100%;
  margin-top: 20px;
}

.live-gallery {
  margin-top: 40px;
}

.live-gallery-title {
  color: white;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.live-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.live-photo-item {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid #2a8ab8;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.live-photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.live-photo-delete {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .live-camera-title {
    font-size: 32px;
  }
  
  .live-camera-hint {
    font-size: 12px;
    padding: 10px 15px;
  }
  
  .live-controls {
    flex-direction: column;
  }
  
  .live-btn {
    width: 100%;
  }
}
`;

const PHOTOBOOTH_JS = `
class LiveUnderwaterPhotobooth {
  constructor() {
    this.stream = null;
    this.animationId = null;
    this.photos = [];
    this.maxPhotos = 4;
    
    // Animation state
    this.fish = [];
    this.creatures = [];
    this.bubbles = [];
    this.seaweed = [];
    
    this.initElements();
    this.initDecorations();
    this.attachEventListeners();
  }
  
  initElements() {
    this.video = document.getElementById('live-camera-video');
    this.canvas = document.getElementById('live-decorations-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.stage = document.getElementById('live-camera-stage');
    this.startBtn = document.getElementById('live-start-btn');
    this.captureBtn = document.getElementById('live-capture-btn');
    this.closeBtn = document.getElementById('live-close-btn');
    this.gallery = document.getElementById('live-gallery-grid');
    this.downloadAllBtn = document.getElementById('live-download-all-btn');
  }
  
  initDecorations() {
    // Initialize fish (5 fish)
    this.fish = [
      { emoji: '🐠', x: 0, y: 0.15, speed: 0.003, direction: 1, size: 50 },
      { emoji: '🐡', x: 1, y: 0.35, speed: 0.0025, direction: -1, size: 50 },
      { emoji: '🐟', x: 0, y: 0.55, speed: 0.0035, direction: 1, size: 45 },
      { emoji: '🐠', x: 1, y: 0.70, speed: 0.0028, direction: -1, size: 50 },
      { emoji: '🐡', x: 0, y: 0.25, speed: 0.0032, direction: 1, size: 48 }
    ];
    
    // Initialize creatures (3 creatures)
    this.creatures = [
      { emoji: '🦑', x: 0.85, y: 0.10, offsetY: 0, speed: 0.02, size: 45 },
      { emoji: '🪼', x: 0.10, y: 0.45, offsetY: 0, speed: 0.025, size: 42 },
      { emoji: '🦑', x: 0.80, y: 0.75, offsetY: 0, speed: 0.018, size: 45 }
    ];
    
    // Initialize bubbles (10 bubbles)
    this.bubbles = [];
    for (let i = 0; i < 10; i++) {
      this.bubbles.push({
        x: Math.random(),
        y: 1 + Math.random() * 0.2,
        radius: 8 + Math.random() * 12,
        speed: 0.003 + Math.random() * 0.005,
        opacity: 0.3 + Math.random() * 0.4
      });
    }
    
    // Initialize seaweed (7 pieces)
    this.seaweed = [];
    for (let i = 0; i < 7; i++) {
      this.seaweed.push({
        x: (i + 0.5) / 7,
        angle: 0,
        speed: 0.03 + Math.random() * 0.02
      });
    }
  }
  
  attachEventListeners() {
    this.startBtn.addEventListener('click', () => this.startCamera());
    this.captureBtn.addEventListener('click', () => this.capturePhoto());
    this.closeBtn.addEventListener('click', () => this.closeCamera());
    this.downloadAllBtn.addEventListener('click', () => this.downloadAll());
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
      
      this.video.onloadedmetadata = () => {
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;
        this.startAnimation();
      };
      
      this.startBtn.disabled = true;
      this.captureBtn.disabled = false;
      this.closeBtn.disabled = false;
      
      alert('✅ Kamera live aktif! Pose sesuai dekorasi yang bergerak!');
    } catch (err) {
      alert('⚠️ Gagal mengakses kamera: ' + err.message);
      console.error('Camera error:', err);
    }
  }
  
  startAnimation() {
    const animate = () => {
      this.updateDecorations();
      this.drawDecorations();
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }
  
  updateDecorations() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    // Update fish positions
    this.fish.forEach(fish => {
      fish.x += fish.speed * fish.direction;
      if (fish.x > 1.2) fish.x = -0.2;
      if (fish.x < -0.2) fish.x = 1.2;
    });
    
    // Update creatures (floating)
    this.creatures.forEach(creature => {
      creature.offsetY = Math.sin(Date.now() * creature.speed / 1000) * 0.03;
    });
    
    // Update bubbles
    this.bubbles.forEach(bubble => {
      bubble.y -= bubble.speed;
      if (bubble.y < -0.1) {
        bubble.y = 1.1;
        bubble.x = Math.random();
      }
    });
    
    // Update seaweed
    this.seaweed.forEach(weed => {
      weed.angle = Math.sin(Date.now() * weed.speed / 1000) * 15;
    });
  }
  
  drawDecorations() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    this.ctx.clearRect(0, 0, w, h);
    
    // Draw fish
    this.ctx.font = 'bold ' + (w * 0.06) + 'px Arial';
    this.fish.forEach(fish => {
      this.ctx.save();
      const x = fish.x * w;
      const y = fish.y * h;
      this.ctx.translate(x, y);
      if (fish.direction === -1) this.ctx.scale(-1, 1);
      this.ctx.fillText(fish.emoji, -fish.size/2, fish.size/2);
      this.ctx.restore();
    });
    
    // Draw creatures
    this.ctx.font = 'bold ' + (w * 0.055) + 'px Arial';
    this.ctx.globalAlpha = 0.9;
    this.creatures.forEach(creature => {
      const x = creature.x * w;
      const y = (creature.y + creature.offsetY) * h;
      this.ctx.fillText(creature.emoji, x - creature.size/2, y + creature.size/2);
    });
    this.ctx.globalAlpha = 1;
    
    // Draw bubbles
    this.bubbles.forEach(bubble => {
      this.ctx.beginPath();
      this.ctx.arc(bubble.x * w, bubble.y * h, bubble.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(255, 255, 255, ' + (bubble.opacity * 0.3) + ')';
      this.ctx.fill();
      this.ctx.strokeStyle = 'rgba(255, 255, 255, ' + (bubble.opacity * 0.6) + ')';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    });
    
    // Draw seaweed
    this.ctx.font = 'bold ' + (w * 0.08) + 'px Arial';
    this.ctx.globalAlpha = 0.7;
    this.seaweed.forEach(weed => {
      this.ctx.save();
      const x = weed.x * w;
      const y = h - 40;
      this.ctx.translate(x, y);
      this.ctx.rotate(weed.angle * Math.PI / 180);
      this.ctx.fillText('🌿', -30, 0);
      this.ctx.restore();
    });
    this.ctx.globalAlpha = 1;
  }
  
  capturePhoto() {
    if (this.photos.length >= this.maxPhotos) {
      alert('⚠️ Maksimal ' + this.maxPhotos + ' foto! Hapus foto lama dulu.');
      return;
    }
    
    // Create capture canvas
    const captureCanvas = document.createElement('canvas');
    captureCanvas.width = this.video.videoWidth;
    captureCanvas.height = this.video.videoHeight;
    const captureCtx = captureCanvas.getContext('2d');
    
    // Draw video frame (mirrored)
    captureCtx.save();
    captureCtx.scale(-1, 1);
    captureCtx.drawImage(this.video, -captureCanvas.width, 0, captureCanvas.width, captureCanvas.height);
    captureCtx.restore();
    
    // Draw decorations overlay
    captureCtx.drawImage(this.canvas, 0, 0);
    
    // Draw title
    captureCtx.font = 'bold ' + (captureCanvas.width * 0.08) + 'px Comic Sans MS';
    captureCtx.fillStyle = '#ff69b4';
    captureCtx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    captureCtx.lineWidth = 3;
    captureCtx.textAlign = 'center';
    const titleY = captureCanvas.height * 0.08;
    captureCtx.strokeText('UNDER SEA', captureCanvas.width / 2, titleY);
    captureCtx.fillText('UNDER SEA', captureCanvas.width / 2, titleY);
    
    // Save photo
    const photoData = captureCanvas.toDataURL('image/png');
    this.photos.push(photoData);
    this.updateGallery();
    
    alert('✅ Foto berhasil diambil! (' + this.photos.length + '/' + this.maxPhotos + ')');
  }
  
  updateGallery() {
    this.gallery.innerHTML = '';
    this.photos.forEach((photo, index) => {
      const item = document.createElement('div');
      item.className = 'live-photo-item';
      item.innerHTML = \`
        <img src="\${photo}" alt="Photo \${index + 1}">
        <button class="live-photo-delete" onclick="window.photobooth.deletePhoto(\${index})">×</button>
      \`;
      this.gallery.appendChild(item);
    });
    
    this.downloadAllBtn.disabled = this.photos.length === 0;
  }
  
  deletePhoto(index) {
    if (confirm('Hapus foto ini?')) {
      this.photos.splice(index, 1);
      this.updateGallery();
    }
  }
  
  closeCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.startBtn.disabled = false;
    this.captureBtn.disabled = true;
    this.closeBtn.disabled = true;
  }
  
  downloadAll() {
    if (this.photos.length === 0) return;
    
    this.photos.forEach((photo, index) => {
      const link = document.createElement('a');
      link.href = photo;
      link.download = \`underwater-live-\${Date.now()}-\${index + 1}.png\`;
      link.click();
    });
    
    alert('✅ Download ' + this.photos.length + ' foto berhasil!');
  }
}

if (typeof window !== 'undefined') {
  window.LiveUnderwaterPhotobooth = LiveUnderwaterPhotobooth;
}
`;
