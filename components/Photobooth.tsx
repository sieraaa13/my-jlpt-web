"use client";

import { useEffect, useRef } from "react";

export default function Photobooth({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const initRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const init = async () => {
      if (initRef.current) return;
      
      setTimeout(() => {
        if (!(window as any).UnderwaterPhotobooth) {
          eval(PHOTOBOOTH_JS);
        }
        if (!(window as any).photobooth && (window as any).UnderwaterPhotobooth) {
          (window as any).photobooth = new (window as any).UnderwaterPhotobooth();
          console.log("✅ Photobooth initialized");
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
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[95vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg transition-all"
          >
            ×
          </button>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary mb-2">
              🎉 REWARD: PHOTOBOOTH! 🎉
            </h2>
            <p className="text-sm text-muted-foreground">
              Selamat! Ambil foto kenangan kamu di bawah laut! 🌊📸
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
<div id="photobooth-container">
    <div class="photobooth-overlay" id="photobooth-overlay"></div>
    
    <div class="photobooth-video-preview" id="photobooth-video-preview">
        <video id="photobooth-camera-video" autoplay playsinline></video>
        <div class="photobooth-preview-controls">
            <button class="photobooth-capture-btn" id="photobooth-capture-btn">📸 CAPTURE</button>
            <button class="photobooth-close-btn" id="photobooth-close-camera-btn">CLOSE</button>
        </div>
    </div>

    <div class="photobooth-frame" id="photobooth-frame">
        <div class="photobooth-fish swim1">🐠</div>
        <div class="photobooth-fish swim2">🐡</div>
        <div class="photobooth-fish swim3">🐟</div>
        <div class="photobooth-fish swim4">🐠</div>
        <div class="photobooth-fish swim5">🐡</div>
        
        <div class="photobooth-creature float1">🦑</div>
        <div class="photobooth-creature float2">🪼</div>
        <div class="photobooth-creature float3">🦑</div>
        
        <div class="photobooth-bubble rise1"></div>
        <div class="photobooth-bubble rise2"></div>
        <div class="photobooth-bubble rise3"></div>
        <div class="photobooth-bubble rise4"></div>
        <div class="photobooth-bubble rise5"></div>
        <div class="photobooth-bubble rise6"></div>
        <div class="photobooth-bubble rise7"></div>
        <div class="photobooth-bubble rise8"></div>

        <div class="photobooth-shell shell1">🐚</div>
        <div class="photobooth-shell shell2">🐚</div>
        <div class="photobooth-shell shell3">🪨</div>

        <div class="photobooth-header">
            <div class="photobooth-title">UNDER SEA</div>
        </div>

        <div class="photobooth-grid">
            <div class="photobooth-slot" id="photobooth-photo1">
                <div class="photobooth-empty">Ambil Foto 1 📸</div>
            </div>
            <div class="photobooth-slot" id="photobooth-photo2">
                <div class="photobooth-empty">Ambil Foto 2 📸</div>
            </div>
        </div>

        <div class="photobooth-seaweed-container">
            <div class="photobooth-seaweed wave1">🌿</div>
            <div class="photobooth-seaweed wave2">🌿</div>
            <div class="photobooth-seaweed wave3">🌿</div>
            <div class="photobooth-seaweed wave4">🌿</div>
            <div class="photobooth-seaweed wave5">🌿</div>
            <div class="photobooth-seaweed wave6">🌿</div>
        </div>
    </div>

    <div class="photobooth-controls">
        <button id="photobooth-open-camera-btn" class="photobooth-btn photobooth-btn-primary">📷 BUKA KAMERA</button>
        <label for="photobooth-upload-input" class="photobooth-btn photobooth-btn-upload">
            🖼️ UPLOAD GAMBAR
        </label>
        <input type="file" id="photobooth-upload-input" accept="image/*" style="display: none;" />
    </div>

    <div class="photobooth-actions">
        <button id="photobooth-clear-btn" class="photobooth-btn photobooth-btn-secondary" disabled>🗑️ HAPUS</button>
        <button id="photobooth-reset-btn" class="photobooth-btn photobooth-btn-secondary" disabled>🔄 RESET</button>
    </div>

    <button id="photobooth-download-btn" class="photobooth-btn photobooth-btn-download" disabled>⬇️ DOWNLOAD FRAME</button>
</div>
`;

const PHOTOBOOTH_CSS = `
#photobooth-container { position: relative; width: 100%; max-width: 500px; margin: 0 auto; }
.photobooth-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); display: none; z-index: 999; }
.photobooth-overlay.active { display: block; }
.photobooth-video-preview { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: black; border: 4px solid white; border-radius: 16px; display: none; z-index: 1000; width: 90%; max-width: 600px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); }
.photobooth-video-preview.active { display: block; }
#photobooth-camera-video { width: 100%; height: auto; display: block; border-radius: 12px 12px 0 0; }
.photobooth-preview-controls { padding: 15px; background: black; border-radius: 0 0 12px 12px; display: flex; gap: 10px; justify-content: center; }

.photobooth-frame { 
  position: relative; 
  background: linear-gradient(to bottom, #4db8e8 0%, #2a7ba8 50%, #1a5278 100%);
  border: 12px solid #2a8ab8;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  margin-bottom: 30px;
  overflow: hidden;
}

.photobooth-header { text-align: center; margin-bottom: 25px; position: relative; z-index: 10; }
.photobooth-title { 
  font-size: 36px; 
  font-weight: bold; 
  color: #ff69b4; 
  letter-spacing: 3px; 
  font-family: 'Comic Sans MS', cursive, sans-serif; 
}

.photobooth-grid { display: grid; grid-template-columns: 1fr; gap: 15px; margin-bottom: 25px; position: relative; z-index: 5; }
.photobooth-slot { 
  position: relative; 
  background: rgba(255, 255, 255, 0.95);
  border: 6px solid #87ceeb;
  border-radius: 12px;
  aspect-ratio: 4/3;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.photobooth-slot img { width: 100%; height: 100%; object-fit: cover; }
.photobooth-empty { display: flex; align-items: center; justify-content: center; height: 100%; color: #6b9fbe; font-size: 14px; font-weight: 600; }

.photobooth-fish {
  position: absolute;
  font-size: 40px;
  z-index: 4;
}
.swim1 { top: 15%; left: 10%; }
.swim2 { top: 35%; right: 15%; }
.swim3 { top: 55%; left: 5%; }
.swim4 { top: 70%; right: 10%; }
.swim5 { top: 25%; left: 80%; }

.photobooth-creature {
  position: absolute;
  font-size: 35px;
  z-index: 3;
  opacity: 0.8;
}
.float1 { top: 10%; right: 15%; }
.float2 { top: 45%; left: 10%; }
.float3 { bottom: 120px; right: 20%; }

.photobooth-bubble {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  z-index: 6;
}
.rise1 { width: 15px; height: 15px; bottom: 10%; left: 10%; }
.rise2 { width: 20px; height: 20px; bottom: 20%; left: 25%; }
.rise3 { width: 12px; height: 12px; bottom: 15%; left: 40%; }
.rise4 { width: 18px; height: 18px; bottom: 25%; left: 55%; }
.rise5 { width: 22px; height: 22px; bottom: 30%; left: 70%; }
.rise6 { width: 16px; height: 16px; bottom: 18%; left: 85%; }
.rise7 { width: 14px; height: 14px; bottom: 22%; left: 15%; }
.rise8 { width: 19px; height: 19px; bottom: 28%; left: 60%; }

.photobooth-shell {
  position: absolute;
  font-size: 28px;
  opacity: 0.7;
  z-index: 2;
}
.shell1 { bottom: 15%; right: 12%; }
.shell2 { bottom: 15%; left: 15%; }
.shell3 { bottom: 12%; left: 40%; }

.photobooth-seaweed-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 15px;
  z-index: 1;
}
.photobooth-seaweed {
  font-size: 55px;
  opacity: 0.6;
}

.photobooth-btn { padding: 12px 24px; border: 2px solid #00897b; background: white; color: #00897b; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: inline-block; text-align: center; text-decoration: none; }
.photobooth-btn:hover:not(:disabled) { background: #00897b; color: white; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); }
.photobooth-btn:active:not(:disabled) { transform: translateY(0); }
.photobooth-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.photobooth-btn-primary { background: #00897b; color: white; border-color: #00897b; width: 100%; padding: 15px; font-size: 16px; margin-bottom: 10px; }
.photobooth-btn-upload { background: #6366f1; color: white; border-color: #6366f1; width: 100%; padding: 15px; font-size: 16px; margin-bottom: 20px; cursor: pointer; }
.photobooth-btn-secondary { padding: 10px 20px; font-size: 13px; }
.photobooth-btn-download { width: 100%; padding: 15px; background: #00897b; color: white; border-color: #00897b; font-size: 16px; }
.photobooth-capture-btn { background: #ff69b4; border-color: #ff69b4; color: white; flex: 1; padding: 12px; font-size: 16px; }
.photobooth-close-btn { background: #ff6b6b; border-color: #ff6b6b; color: white; padding: 12px 24px; font-size: 16px; }
.photobooth-controls { margin-bottom: 20px; }
.photobooth-actions { display: flex; gap: 10px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap; }
.photobooth-actions .photobooth-btn { flex: 1; min-width: 120px; }

@media (max-width: 600px) {
  .photobooth-frame { padding: 25px 20px; }
  .photobooth-title { font-size: 28px; }
  .photobooth-fish { font-size: 32px; }
  .photobooth-creature { font-size: 28px; }
  .photobooth-seaweed { font-size: 45px; }
}
`;

const PHOTOBOOTH_JS = `
class UnderwaterPhotobooth {
  constructor() {
    this.stream = null;
    this.photoCount = 0;
    this.photos = {};
    this.previewCanvas = document.createElement('canvas');
    this.initElements();
    this.attachEventListeners();
  }
  
  initElements() {
    this.cameraVideo = document.getElementById('photobooth-camera-video');
    this.videoPreview = document.getElementById('photobooth-video-preview');
    this.overlay = document.getElementById('photobooth-overlay');
    this.openCameraBtn = document.getElementById('photobooth-open-camera-btn');
    this.closeCameraBtn = document.getElementById('photobooth-close-camera-btn');
    this.captureBtn = document.getElementById('photobooth-capture-btn');
    this.clearBtn = document.getElementById('photobooth-clear-btn');
    this.resetBtn = document.getElementById('photobooth-reset-btn');
    this.downloadBtn = document.getElementById('photobooth-download-btn');
    this.photoboothFrame = document.getElementById('photobooth-frame');
    this.uploadInput = document.getElementById('photobooth-upload-input');
  }
  
  attachEventListeners() {
    if (this.openCameraBtn) this.openCameraBtn.addEventListener('click', () => this.openCamera());
    if (this.closeCameraBtn) this.closeCameraBtn.addEventListener('click', () => this.closeCamera());
    if (this.captureBtn) this.captureBtn.addEventListener('click', () => this.capturePhoto());
    if (this.clearBtn) this.clearBtn.addEventListener('click', () => this.clearAll());
    if (this.resetBtn) this.resetBtn.addEventListener('click', () => this.reset());
    if (this.downloadBtn) this.downloadBtn.addEventListener('click', () => this.downloadFrame());
    if (this.overlay) this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.closeCamera(); });
    if (this.uploadInput) this.uploadInput.addEventListener('change', (e) => this.handleUpload(e));
  }
  
  async openCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } } });
      this.cameraVideo.srcObject = this.stream;
      this.videoPreview.classList.add('active');
      this.overlay.classList.add('active');
      this.openCameraBtn.style.display = 'none';
    } catch (err) {
      alert('⚠️ Akses kamera ditolak.');
      console.error('Camera Error:', err);
    }
  }
  
  closeCamera() {
    if (this.stream) this.stream.getTracks().forEach(track => track.stop());
    this.videoPreview.classList.remove('active');
    this.overlay.classList.remove('active');
    this.openCameraBtn.style.display = 'inline-block';
  }
  
  capturePhoto() {
    if (this.photoCount >= 2) { alert('✅ Maksimal 2 foto!'); return; }
    this.previewCanvas.width = this.cameraVideo.videoWidth;
    this.previewCanvas.height = this.cameraVideo.videoHeight;
    const ctx = this.previewCanvas.getContext('2d');
    ctx.drawImage(this.cameraVideo, 0, 0);
    this.photoCount++;
    this.photos[this.photoCount] = this.previewCanvas.toDataURL('image/png');
    this.updatePhotoSlot(this.photoCount);
    if (this.photoCount === 2) { alert('✅ Frame lengkap!'); this.closeCamera(); } 
    else { alert(\`✅ Foto \${this.photoCount} berhasil!\`); }
  }
  
  handleUpload(e) {
    if (this.photoCount >= 2) { alert('✅ Maksimal 2 foto!'); return; }
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      this.photoCount++;
      this.photos[this.photoCount] = event.target.result;
      this.updatePhotoSlot(this.photoCount);
      if (this.photoCount === 2) alert('✅ Frame lengkap!');
      else alert(\`✅ Foto \${this.photoCount} berhasil!\`);
      e.target.value = '';
    };
    reader.readAsDataURL(file);
  }
  
  updatePhotoSlot(slotNum) {
    const slot = document.getElementById(\`photobooth-photo\${slotNum}\`);
    if (this.photos[slotNum]) slot.innerHTML = \`<img src="\${this.photos[slotNum]}" alt="Photo \${slotNum}">\`;
    if (this.photoCount > 0) { 
      this.downloadBtn.disabled = false; 
      this.clearBtn.disabled = false; 
      this.resetBtn.disabled = false; 
    }
  }
  
  clearAll() {
    this.photos = {}; this.photoCount = 0;
    document.getElementById('photobooth-photo1').innerHTML = '<div class="photobooth-empty">Ambil Foto 1 📸</div>';
    document.getElementById('photobooth-photo2').innerHTML = '<div class="photobooth-empty">Ambil Foto 2 📸</div>';
    this.downloadBtn.disabled = true; this.clearBtn.disabled = true; this.resetBtn.disabled = true;
  }
  
  reset() { this.clearAll(); }
  
  async downloadFrame() {
    this.downloadBtn.disabled = true;
    this.downloadBtn.textContent = '⏳ Memproses...';
    
    try {
      const canvas = document.createElement('canvas');
      const frame = this.photoboothFrame;
      const scale = 2;
      canvas.width = frame.offsetWidth * scale;
      canvas.height = frame.offsetHeight * scale;
      const ctx = canvas.getContext('2d');
      ctx.scale(scale, scale);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, frame.offsetHeight);
      gradient.addColorStop(0, '#4db8e8');
      gradient.addColorStop(0.5, '#2a7ba8');
      gradient.addColorStop(1, '#1a5278');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, frame.offsetWidth, frame.offsetHeight);
      
      // Draw title
      ctx.font = 'bold 36px Comic Sans MS';
      ctx.fillStyle = '#ff69b4';
      ctx.textAlign = 'center';
      ctx.fillText('UNDER SEA', frame.offsetWidth / 2, 60);
      
      // Draw photos
      const slot1 = document.getElementById('photobooth-photo1');
      const slot2 = document.getElementById('photobooth-photo2');
      const img1 = slot1.querySelector('img');
      const img2 = slot2.querySelector('img');
      
      if (img1) {
        const slotRect = slot1.getBoundingClientRect();
        const frameRect = frame.getBoundingClientRect();
        await this.drawImage(ctx, img1.src, 
          slotRect.left - frameRect.left, 
          slotRect.top - frameRect.top, 
          slotRect.width, 
          slotRect.height);
      }
      
      if (img2) {
        const slotRect = slot2.getBoundingClientRect();
        const frameRect = frame.getBoundingClientRect();
        await this.drawImage(ctx, img2.src, 
          slotRect.left - frameRect.left, 
          slotRect.top - frameRect.top, 
          slotRect.width, 
          slotRect.height);
      }
      
      // Draw decorations (emoji)
      ctx.font = '40px Arial';
      // Fish
      ctx.fillText('🐠', frame.offsetWidth * 0.10, frame.offsetHeight * 0.15);
      ctx.fillText('🐡', frame.offsetWidth * 0.85, frame.offsetHeight * 0.35);
      ctx.fillText('🐟', frame.offsetWidth * 0.05, frame.offsetHeight * 0.55);
      ctx.fillText('🐠', frame.offsetWidth * 0.90, frame.offsetHeight * 0.70);
      ctx.fillText('🐡', frame.offsetWidth * 0.80, frame.offsetHeight * 0.25);
      
      ctx.font = '35px Arial';
      // Creatures
      ctx.fillText('🦑', frame.offsetWidth * 0.85, frame.offsetHeight * 0.10);
      ctx.fillText('🪼', frame.offsetWidth * 0.10, frame.offsetHeight * 0.45);
      ctx.fillText('🦑', frame.offsetWidth * 0.80, frame.offsetHeight * 0.75);
      
      // Bubbles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 2;
      [
        {x: 0.10, y: 0.85, r: 7.5},
        {x: 0.25, y: 0.75, r: 10},
        {x: 0.40, y: 0.80, r: 6},
        {x: 0.55, y: 0.70, r: 9},
        {x: 0.70, y: 0.65, r: 11},
        {x: 0.85, y: 0.78, r: 8},
        {x: 0.15, y: 0.73, r: 7},
        {x: 0.60, y: 0.68, r: 9.5}
      ].forEach(b => {
        ctx.beginPath();
        ctx.arc(frame.offsetWidth * b.x, frame.offsetHeight * b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
      
      ctx.font = '28px Arial';
      // Shells
      ctx.fillText('🐚', frame.offsetWidth * 0.88, frame.offsetHeight * 0.85);
      ctx.fillText('🐚', frame.offsetWidth * 0.15, frame.offsetHeight * 0.85);
      ctx.fillText('🪨', frame.offsetWidth * 0.40, frame.offsetHeight * 0.88);
      
      ctx.font = '55px Arial';
      // Seaweed
      const seaweedY = frame.offsetHeight - 40;
      [0.05, 0.20, 0.35, 0.50, 0.65, 0.80, 0.95].forEach((x, i) => {
        ctx.fillText('🌿', frame.offsetWidth * x, seaweedY);
      });
      
      // Download
      const link = document.createElement('a');
      link.download = \`underwater-photobooth-\${Date.now()}.png\`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      alert('✅ Download berhasil!');
    } catch (err) {
      console.error('Download error:', err);
      alert('❌ Gagal download: ' + err.message);
    } finally {
      this.downloadBtn.textContent = '⬇️ DOWNLOAD FRAME';
      this.downloadBtn.disabled = false;
    }
  }
  
  drawImage(ctx, src, x, y, width, height) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, x, y, width, height);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }
}

if (typeof window !== 'undefined') {
  window.UnderwaterPhotobooth = UnderwaterPhotobooth;
}
`;
