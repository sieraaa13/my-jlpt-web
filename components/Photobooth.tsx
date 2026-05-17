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
        <div className="relative bg-gray-900 rounded-2xl p-6 max-w-5xl w-full">
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
              Foto akan menimpa background dengan frame lucu!
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
    <!-- Main Stage with Overlapping Photos -->
    <div class="live-main-stage" id="live-main-stage">
        <!-- Background Photobooth Frame -->
        <div class="live-background-frame">
            <div class="live-bg-title">UNDER SEA</div>
            <div class="live-bg-decorations">
                <div class="live-bg-slot slot-1"></div>
                <div class="live-bg-slot slot-2"></div>
                <div class="live-bg-slot slot-3"></div>
            </div>
            <div class="live-bg-seaweed">🌿🌿🌿🌿🌿</div>
            <div class="live-bg-fish">🐠🐡🦑</div>
        </div>
        
        <!-- Live Camera Area -->
        <div class="live-camera-stage" id="live-camera-stage">
            <video id="live-camera-video" autoplay playsinline muted></video>
            <canvas id="live-decorations-canvas"></canvas>
            
            <div class="live-camera-hint">
                💡 Ambil foto dan lihat hasilnya menimpa background!
            </div>
        </div>
        
        <!-- Overlapping Photo Frames (Polaroid Style) -->
        <div class="live-photo-overlays" id="live-photo-overlays">
            <!-- Photos will be added here as overlapping polaroid frames -->
        </div>
    </div>

    <!-- Controls -->
    <div class="live-controls">
        <button id="live-start-btn" class="live-btn live-btn-primary">
            📷 BUKA KAMERA
        </button>
        <button id="live-capture-btn" class="live-btn live-btn-capture" disabled>
            📸 AMBIL FOTO
        </button>
        <button id="live-close-btn" class="live-btn live-btn-secondary" disabled>
            ❌ TUTUP
        </button>
        <button id="live-download-all-btn" class="live-btn live-btn-download" disabled>
            ⬇️ DOWNLOAD SEMUA
        </button>
    </div>
</div>
`;

const PHOTOBOOTH_CSS = `
#live-photobooth-container {
  max-width: 100%;
}

/* Main Stage - Contains everything */
.live-main-stage {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto 30px;
  min-height: 600px;
}

/* Background Photobooth Frame (Like sample) */
.live-background-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(180deg, #B8E6F0 0%, #87CEEB 100%);
  border: 8px solid #FFB6C1;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.live-bg-title {
  font-size: 24px;
  font-weight: bold;
  color: #FFB6C1;
  text-align: center;
  letter-spacing: 3px;
  margin-bottom: 15px;
  font-family: 'Comic Sans MS', cursive;
}

.live-bg-decorations {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.live-bg-slot {
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid #87CEEB;
  border-radius: 8px;
  height: 80px;
}

.slot-1 { background: linear-gradient(135deg, #FFE4E1 0%, #FFC0CB 100%); }
.slot-2 { background: linear-gradient(135deg, #E0F7FF 0%, #B8E6F0 100%); }
.slot-3 { background: linear-gradient(135deg, #FFFACD 0%, #FFE4B5 100%); }

.live-bg-seaweed {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
}

.live-bg-fish {
  position: absolute;
  top: 50%;
  right: 10px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Live Camera Stage */
.live-camera-stage {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 55%;
  aspect-ratio: 4/3;
  background: linear-gradient(180deg, #4db8e8 0%, #2a7ba8 100%);
  border: 8px solid #2a8ab8;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.live-camera-stage.hidden {
  display: none;
}

#live-camera-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
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

.live-camera-hint {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 15px;
  border-radius: 10px;
  font-size: 11px;
  text-align: center;
  z-index: 3;
  white-space: nowrap;
}

/* Overlapping Polaroid Photo Frames */
.live-photo-overlays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

.live-polaroid-frame {
  position: absolute;
  background: white;
  padding: 15px 15px 50px 15px;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  animation: polaroid-appear 0.5s ease-out;
  pointer-events: auto;
  cursor: pointer;
}

.live-polaroid-frame:hover {
  transform: scale(1.05) !important;
  z-index: 10 !important;
}

.live-polaroid-frame img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.live-polaroid-delete {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

@keyframes polaroid-appear {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(0deg);
  }
  100% {
    opacity: 1;
  }
}

/* Controls */
.live-controls {
  display: flex;
  gap: 15px;
  justify-content: center;
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
}

@media (max-width: 768px) {
  .live-background-frame {
    width: 100%;
    position: relative;
    height: 400px;
    margin-bottom: 20px;
  }
  
  .live-camera-stage {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .live-main-stage {
    min-height: auto;
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
    this.maxPhotos = 6;
    
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
    this.cameraStage = document.getElementById('live-camera-stage');
    this.photoOverlays = document.getElementById('live-photo-overlays');
    this.startBtn = document.getElementById('live-start-btn');
    this.captureBtn = document.getElementById('live-capture-btn');
    this.closeBtn = document.getElementById('live-close-btn');
    this.downloadAllBtn = document.getElementById('live-download-all-btn');
  }
  
  initDecorations() {
    this.fish = [
      { emoji: '🐠', x: 0, y: 0.20, speed: 0.0006, direction: 1, size: 60 },
      { emoji: '🐡', x: 1, y: 0.40, speed: 0.0005, direction: -1, size: 58 },
      { emoji: '🐟', x: 0, y: 0.60, speed: 0.0007, direction: 1, size: 55 },
      { emoji: '🐠', x: 1, y: 0.75, speed: 0.00055, direction: -1, size: 60 },
      { emoji: '🐡', x: 0, y: 0.30, speed: 0.00065, direction: 1, size: 57 }
    ];
    
    this.creatures = [
      { emoji: '🦑', x: 0.85, y: 0.15, offsetY: 0, speed: 0.004, size: 55 },
      { emoji: '🪼', x: 0.15, y: 0.50, offsetY: 0, speed: 0.005, size: 52 },
      { emoji: '🦑', x: 0.75, y: 0.70, offsetY: 0, speed: 0.0036, size: 55 }
    ];
    
    this.bubbles = [];
    for (let i = 0; i < 12; i++) {
      this.bubbles.push({
        x: Math.random(),
        y: 1 + Math.random() * 0.3,
        radius: 10 + Math.random() * 15,
        speed: 0.0006 + Math.random() * 0.001,
        opacity: 0.7
      });
    }
    
    this.seaweed = [];
    for (let i = 0; i < 8; i++) {
      this.seaweed.push({
        x: (i + 0.5) / 8,
        angle: 0,
        speed: 0.006 + Math.random() * 0.004
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
      
      alert('✅ Kamera aktif! Ambil foto dan lihat hasilnya menimpa background!');
    } catch (err) {
      alert('⚠️ Gagal mengakses kamera: ' + err.message);
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
    this.fish.forEach(fish => {
      fish.x += fish.speed * fish.direction;
      if (fish.x > 1.2) fish.x = -0.2;
      if (fish.x < -0.2) fish.x = 1.2;
    });
    
    this.creatures.forEach(creature => {
      creature.offsetY = Math.sin(Date.now() * creature.speed / 1000) * 0.04;
    });
    
    this.bubbles.forEach(bubble => {
      bubble.y -= bubble.speed;
      if (bubble.y < -0.1) {
        bubble.y = 1.2;
        bubble.x = Math.random();
      }
    });
    
    this.seaweed.forEach(weed => {
      weed.angle = Math.sin(Date.now() * weed.speed / 1000) * 12;
    });
  }
  
  drawDecorations() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    this.ctx.clearRect(0, 0, w, h);
    
    this.ctx.font = 'bold ' + (w * 0.065) + 'px Arial';
    this.fish.forEach(fish => {
      this.ctx.save();
      const x = fish.x * w;
      const y = fish.y * h;
      this.ctx.translate(x, y);
      if (fish.direction === -1) this.ctx.scale(-1, 1);
      this.ctx.fillText(fish.emoji, -fish.size/2, fish.size/2);
      this.ctx.restore();
    });
    
    this.ctx.font = 'bold ' + (w * 0.06) + 'px Arial';
    this.creatures.forEach(creature => {
      const x = creature.x * w;
      const y = (creature.y + creature.offsetY) * h;
      this.ctx.fillText(creature.emoji, x - creature.size/2, y + creature.size/2);
    });
    
    this.bubbles.forEach(bubble => {
      this.ctx.beginPath();
      this.ctx.arc(bubble.x * w, bubble.y * h, bubble.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      this.ctx.fill();
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
    });
    
    this.ctx.font = 'bold ' + (w * 0.09) + 'px Arial';
    this.seaweed.forEach(weed => {
      this.ctx.save();
      const x = weed.x * w;
      const y = h - 50;
      this.ctx.translate(x, y);
      this.ctx.rotate(weed.angle * Math.PI / 180);
      this.ctx.fillText('🌿', -35, 0);
      this.ctx.restore();
    });
  }
  
  capturePhoto() {
    if (this.photos.length >= this.maxPhotos) {
      alert('⚠️ Maksimal ' + this.maxPhotos + ' foto!');
      return;
    }
    
    const captureCanvas = document.createElement('canvas');
    captureCanvas.width = this.video.videoWidth;
    captureCanvas.height = this.video.videoHeight;
    const captureCtx = captureCanvas.getContext('2d');
    
    captureCtx.save();
    captureCtx.scale(-1, 1);
    captureCtx.drawImage(this.video, -captureCanvas.width, 0, captureCanvas.width, captureCanvas.height);
    captureCtx.restore();
    
    captureCtx.drawImage(this.canvas, 0, 0);
    
    const photoData = captureCanvas.toDataURL('image/png');
    this.photos.push(photoData);
    this.addPolaroidFrame(photoData, this.photos.length - 1);
    this.downloadAllBtn.disabled = false;
    
    alert('✅ Foto ' + this.photos.length + ' ditambahkan! Lihat hasilnya menimpa background!');
  }
  
  addPolaroidFrame(photoData, index) {
    const polaroid = document.createElement('div');
    polaroid.className = 'live-polaroid-frame';
    polaroid.id = 'polaroid-' + index;
    
    // Random position and rotation for overlapping effect
    const positions = [
      { top: '10%', left: '45%', rotate: '8deg', width: '250px' },
      { top: '25%', left: '52%', rotate: '-5deg', width: '240px' },
      { top: '40%', left: '48%', rotate: '12deg', width: '260px' },
      { top: '15%', left: '60%', rotate: '-8deg', width: '245px' },
      { top: '50%', left: '55%', rotate: '6deg', width: '255px' },
      { top: '30%', left: '65%', rotate: '-10deg', width: '250px' }
    ];
    
    const pos = positions[index % positions.length];
    polaroid.style.top = pos.top;
    polaroid.style.left = pos.left;
    polaroid.style.transform = 'rotate(' + pos.rotate + ')';
    polaroid.style.width = pos.width;
    polaroid.style.zIndex = 10 + index;
    
    polaroid.innerHTML = \`
      <img src="\${photoData}" alt="Photo \${index + 1}">
      <button class="live-polaroid-delete" onclick="window.photobooth.deletePhoto(\${index})">×</button>
    \`;
    
    this.photoOverlays.appendChild(polaroid);
  }
  
  deletePhoto(index) {
    if (confirm('Hapus foto ini?')) {
      this.photos.splice(index, 1);
      const polaroid = document.getElementById('polaroid-' + index);
      if (polaroid) polaroid.remove();
      
      // Re-index remaining photos
      this.photoOverlays.innerHTML = '';
      this.photos.forEach((photo, i) => {
        this.addPolaroidFrame(photo, i);
      });
      
      this.downloadAllBtn.disabled = this.photos.length === 0;
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
    this.cameraStage.classList.add('hidden');
    this.startBtn.disabled = false;
    this.captureBtn.disabled = true;
    this.closeBtn.disabled = true;
  }
  
  downloadAll() {
    if (this.photos.length === 0) return;
    
    this.photos.forEach((photo, index) => {
      const link = document.createElement('a');
      link.href = photo;
      link.download = \`underwater-\${Date.now()}-\${index + 1}.png\`;
      link.click();
    });
    
    alert('✅ Download ' + this.photos.length + ' foto berhasil!');
  }
}

if (typeof window !== 'undefined') {
  window.LiveUnderwaterPhotobooth = LiveUnderwaterPhotobooth;
}
`;
