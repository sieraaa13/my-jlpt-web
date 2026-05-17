"use client";

import { useEffect, useRef } from "react";

export default function Photobooth({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const initRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const loadScript = () => {
      return new Promise((resolve) => {
        if ((window as any).html2canvas) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
        script.onload = () => resolve(true);
        document.head.appendChild(script);
      });
    };

    const init = async () => {
      if (initRef.current) return;
      
      await loadScript();
      
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
        <!-- Decorations that will be hidden during screenshot -->
        <div class="photobooth-decorations">
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
        </div>

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
  background: #4db8e8;
  background: linear-gradient(to bottom, #4db8e8 0%, #2a7ba8 50%, #1a5278 100%);
  border: 12px solid #2a8ab8;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  margin-bottom: 30px;
  overflow: hidden;
}

/* Decorations container - will be hidden during screenshot */
.photobooth-decorations { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; }

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
.swim1 { top: 15%; left: -50px; animation: swim-right 8s linear infinite; }
.swim2 { top: 35%; right: -50px; animation: swim-left 10s linear infinite; animation-delay: 2s; }
.swim3 { top: 55%; left: -50px; animation: swim-right 12s linear infinite; animation-delay: 4s; }
.swim4 { top: 70%; right: -50px; animation: swim-left 9s linear infinite; animation-delay: 1s; }
.swim5 { top: 25%; left: -50px; animation: swim-right 11s linear infinite; animation-delay: 5s; }

@keyframes swim-right {
  0% { left: -50px; transform: scaleX(1); }
  100% { left: calc(100% + 50px); transform: scaleX(1); }
}
@keyframes swim-left {
  0% { right: -50px; transform: scaleX(-1); }
  100% { right: calc(100% + 50px); transform: scaleX(-1); }
}

.photobooth-creature {
  position: absolute;
  font-size: 35px;
  z-index: 3;
  opacity: 0.8;
}
.float1 { top: 10%; right: 15%; animation: float-gentle 6s ease-in-out infinite; }
.float2 { top: 45%; left: 10%; animation: float-gentle 7s ease-in-out infinite; animation-delay: 2s; }
.float3 { bottom: 120px; right: 20%; animation: float-gentle 5s ease-in-out infinite; animation-delay: 4s; }

@keyframes float-gentle {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.photobooth-bubble {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  z-index: 6;
}
.rise1 { width: 15px; height: 15px; bottom: 0; left: 10%; animation: rise 4s ease-in infinite; }
.rise2 { width: 20px; height: 20px; bottom: 0; left: 25%; animation: rise 5s ease-in infinite; animation-delay: 1s; }
.rise3 { width: 12px; height: 12px; bottom: 0; left: 40%; animation: rise 6s ease-in infinite; animation-delay: 2s; }
.rise4 { width: 18px; height: 18px; bottom: 0; left: 55%; animation: rise 4.5s ease-in infinite; animation-delay: 0.5s; }
.rise5 { width: 22px; height: 22px; bottom: 0; left: 70%; animation: rise 5.5s ease-in infinite; animation-delay: 1.5s; }
.rise6 { width: 16px; height: 16px; bottom: 0; left: 85%; animation: rise 4s ease-in infinite; animation-delay: 3s; }
.rise7 { width: 14px; height: 14px; bottom: 0; left: 15%; animation: rise 6s ease-in infinite; animation-delay: 2.5s; }
.rise8 { width: 19px; height: 19px; bottom: 0; left: 60%; animation: rise 5s ease-in infinite; animation-delay: 3.5s; }

@keyframes rise {
  0% { bottom: 0; opacity: 0; }
  10% { opacity: 0.7; }
  90% { opacity: 0.7; }
  100% { bottom: 100%; opacity: 0; }
}

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
  transform-origin: bottom center;
}
.wave1 { animation: wave 3s ease-in-out infinite; }
.wave2 { animation: wave 3.5s ease-in-out infinite; animation-delay: 0.3s; }
.wave3 { animation: wave 3.2s ease-in-out infinite; animation-delay: 0.6s; }
.wave4 { animation: wave 3.8s ease-in-out infinite; animation-delay: 0.9s; }
.wave5 { animation: wave 3.4s ease-in-out infinite; animation-delay: 1.2s; }
.wave6 { animation: wave 3.6s ease-in-out infinite; animation-delay: 1.5s; }

@keyframes wave {
  0%, 100% { transform: rotate(-8deg) scaleY(1); }
  50% { transform: rotate(8deg) scaleY(1.1); }
}

/* Hide decorations during screenshot */
.photobooth-frame.capturing .photobooth-decorations,
.photobooth-frame.capturing .photobooth-seaweed-container {
  display: none !important;
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
  
  downloadFrame() {
    if (typeof html2canvas === 'undefined') { 
      alert('⚠️ Tunggu sebentar...'); 
      setTimeout(() => this.downloadFrame(), 2000);
      return; 
    }
    
    this.downloadBtn.disabled = true; 
    this.downloadBtn.textContent = '⏳ Memproses...';
    
    // CRITICAL FIX: Hide emoji decorations before screenshot
    this.photoboothFrame.classList.add('capturing');
    
    setTimeout(() => {
      html2canvas(this.photoboothFrame, { 
        backgroundColor: '#4db8e8',
        scale: 2,
        logging: false
      }).then(canvas => {
        // Show decorations back
        this.photoboothFrame.classList.remove('capturing');
        
        try {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = \`underwater-photobooth-\${Date.now()}.png\`;
          link.click();
          this.downloadBtn.textContent = '⬇️ DOWNLOAD FRAME'; 
          this.downloadBtn.disabled = false;
          alert('✅ Download berhasil!');
        } catch (err) {
          console.error('Download error:', err);
          alert('❌ Gagal download!');
          this.downloadBtn.textContent = '⬇️ DOWNLOAD FRAME'; 
          this.downloadBtn.disabled = false;
        }
      }).catch(err => { 
        this.photoboothFrame.classList.remove('capturing');
        console.error('html2canvas error:', err); 
        alert('❌ Gagal membuat gambar!'); 
        this.downloadBtn.textContent = '⬇️ DOWNLOAD FRAME'; 
        this.downloadBtn.disabled = false; 
      });
    }, 100);
  }
}

if (typeof window !== 'undefined') {
  window.UnderwaterPhotobooth = UnderwaterPhotobooth;
}
`;
