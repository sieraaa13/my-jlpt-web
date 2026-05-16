"use client";

import { useEffect, useRef, useState } from "react";

export default function Photobooth({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isReady, setIsReady] = useState(false);
  const initRef = useRef(false);

  useEffect(() => {
    if (!isOpen || initRef.current) return;

    // Load html2canvas
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    script.onload = () => {
      setIsReady(true);
      initRef.current = true;
      
      // Initialize photobooth after a short delay to ensure DOM is ready
      setTimeout(() => {
        if (!(window as any).photobooth) {
          (window as any).photobooth = new (window as any).UnderwaterPhotobooth();
          console.log("✅ Photobooth initialized");
        }
      }, 100);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup camera stream when closing
      if ((window as any).photobooth?.stream) {
        (window as any).photobooth.stream.getTracks().forEach((track: any) => track.stop());
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[95vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg transition-all"
          >
            ×
          </button>

          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary mb-2">
              🎉 REWARD: PHOTOBOOTH! 🎉
            </h2>
            <p className="text-sm text-muted-foreground">
              Selamat! Ambil foto kenangan kamu! 📸
            </p>
          </div>

          {/* Photobooth Content */}
          <div id="photobooth-root" dangerouslySetInnerHTML={{ __html: PHOTOBOOTH_HTML }} />
        </div>
      </div>

      {/* Inject CSS */}
      <style jsx global>{PHOTOBOOTH_CSS}</style>

      {/* Inject JS */}
      <script dangerouslySetInnerHTML={{ __html: PHOTOBOOTH_JS }} />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// PHOTOBOOTH HTML
// ═══════════════════════════════════════════════════════════════
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
        <div class="photobooth-decoration photobooth-fish1">🐠</div>
        <div class="photobooth-decoration photobooth-fish2">🐠</div>
        <div class="photobooth-decoration photobooth-fish3">🐡</div>
        
        <div class="photobooth-bubble photobooth-bubble1"></div>
        <div class="photobooth-bubble photobooth-bubble2"></div>
        <div class="photobooth-bubble photobooth-bubble3"></div>
        <div class="photobooth-bubble photobooth-bubble4"></div>
        <div class="photobooth-bubble photobooth-bubble5"></div>
        <div class="photobooth-bubble photobooth-bubble6"></div>

        <div class="photobooth-shell photobooth-shell1">🐚</div>
        <div class="photobooth-shell photobooth-shell2">🐚</div>
        <div class="photobooth-shell photobooth-shell3">🪨</div>

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
            <div class="photobooth-seaweed">🌿</div>
            <div class="photobooth-seaweed">🌿</div>
            <div class="photobooth-seaweed">🌿</div>
            <div class="photobooth-seaweed">🌿</div>
            <div class="photobooth-seaweed">🌿</div>
        </div>
    </div>

    <div class="photobooth-controls">
        <button id="photobooth-open-camera-btn" class="photobooth-btn photobooth-btn-primary">📷 BUKA KAMERA</button>
    </div>

    <div class="photobooth-actions">
        <button id="photobooth-clear-btn" class="photobooth-btn photobooth-btn-secondary" disabled>🗑️ HAPUS</button>
        <button id="photobooth-reset-btn" class="photobooth-btn photobooth-btn-secondary" disabled>🔄 RESET</button>
    </div>

    <button id="photobooth-download-btn" class="photobooth-btn photobooth-btn-download" disabled>⬇️ DOWNLOAD FRAME</button>
</div>
`;

// ═══════════════════════════════════════════════════════════════
// PHOTOBOOTH CSS (from uploaded file)
// ═══════════════════════════════════════════════════════════════
const PHOTOBOOTH_CSS = `
#photobooth-container { position: relative; width: 100%; max-width: 500px; margin: 0 auto; }
.photobooth-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); display: none; z-index: 999; }
.photobooth-overlay.active { display: block; }
.photobooth-video-preview { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: black; border: 4px solid white; border-radius: 16px; display: none; z-index: 1000; width: 90%; max-width: 600px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); }
.photobooth-video-preview.active { display: block; }
#photobooth-camera-video { width: 100%; height: auto; display: block; border-radius: 12px 12px 0 0; }
.photobooth-preview-controls { padding: 15px; background: black; border-radius: 0 0 12px 12px; display: flex; gap: 10px; justify-content: center; }
.photobooth-frame { position: relative; background: linear-gradient(135deg, #a0d8d8 0%, #7bcfd4 100%); border: 12px solid #5fa7a6; border-radius: 20px; padding: 30px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); margin-bottom: 30px; }
.photobooth-header { text-align: center; margin-bottom: 25px; position: relative; z-index: 10; }
.photobooth-title { font-size: 36px; font-weight: bold; color: #ff69b4; text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.7); letter-spacing: 3px; font-family: 'Comic Sans MS', cursive, sans-serif; }
.photobooth-grid { display: grid; grid-template-columns: 1fr; gap: 15px; margin-bottom: 25px; position: relative; z-index: 5; }
.photobooth-slot { position: relative; background: white; border: 4px solid #fff8dc; border-radius: 8px; aspect-ratio: 4/3; overflow: hidden; box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1); }
.photobooth-slot img { width: 100%; height: 100%; object-fit: cover; }
.photobooth-empty { display: flex; align-items: center; justify-content: center; height: 100%; color: #aaa; font-size: 14px; }
.photobooth-decoration { position: absolute; font-size: 40px; opacity: 0.8; z-index: 3; }
.photobooth-fish1 { top: 20px; right: 20px; }
.photobooth-fish2 { bottom: 60px; left: 15px; }
.photobooth-fish3 { top: 120px; right: -10px; }
.photobooth-bubble { position: absolute; border: 2px solid #fff; border-radius: 50%; opacity: 0.5; z-index: 2; }
.photobooth-bubble1 { width: 20px; height: 20px; top: 50px; left: 30px; }
.photobooth-bubble2 { width: 15px; height: 15px; top: 150px; right: 40px; }
.photobooth-bubble3 { width: 25px; height: 25px; top: 200px; left: 50px; }
.photobooth-bubble4 { width: 18px; height: 18px; top: 100px; right: 80px; }
.photobooth-bubble5 { width: 22px; height: 22px; bottom: 100px; left: 20px; }
.photobooth-bubble6 { width: 16px; height: 16px; top: 180px; left: 80px; }
.photobooth-shell { position: absolute; font-size: 32px; opacity: 0.6; z-index: 3; }
.photobooth-shell1 { bottom: 90px; right: 20px; }
.photobooth-shell2 { bottom: 80px; left: 25px; }
.photobooth-shell3 { top: 150px; left: 10px; }
.photobooth-seaweed-container { position: absolute; bottom: 0; width: 100%; height: 70px; display: flex; justify-content: space-around; align-items: flex-end; padding: 0 10px; z-index: 1; }
.photobooth-seaweed { font-size: 50px; opacity: 0.7; animation: photobooth-wave 3s ease-in-out infinite; }
.photobooth-seaweed:nth-child(1) { animation-delay: 0s; }
.photobooth-seaweed:nth-child(2) { animation-delay: 0.2s; }
.photobooth-seaweed:nth-child(3) { animation-delay: 0.4s; }
.photobooth-seaweed:nth-child(4) { animation-delay: 0.6s; }
.photobooth-seaweed:nth-child(5) { animation-delay: 0.8s; }
@keyframes photobooth-wave { 0%, 100% { transform: rotate(-5deg) translateY(0); } 50% { transform: rotate(5deg) translateY(-15px); } }
.photobooth-btn { padding: 12px 24px; border: 2px solid #00897b; background: white; color: #00897b; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
.photobooth-btn:hover:not(:disabled) { background: #00897b; color: white; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); }
.photobooth-btn:active:not(:disabled) { transform: translateY(0); }
.photobooth-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.photobooth-btn-primary { background: #00897b; color: white; border-color: #00897b; width: 100%; padding: 15px; font-size: 16px; margin-bottom: 20px; }
.photobooth-btn-primary:hover:not(:disabled) { background: #00695c; border-color: #00695c; }
.photobooth-btn-secondary { padding: 10px 20px; font-size: 13px; }
.photobooth-btn-download { width: 100%; padding: 15px; background: #00897b; color: white; border-color: #00897b; font-size: 16px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
.photobooth-btn-download:hover:not(:disabled) { background: #00695c; border-color: #00695c; transform: scale(1.02); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); }
.photobooth-capture-btn { background: #ff69b4; border-color: #ff69b4; color: white; flex: 1; padding: 12px; font-size: 16px; }
.photobooth-capture-btn:hover { background: #ff1493; border-color: #ff1493; }
.photobooth-close-btn { background: #ff6b6b; border-color: #ff6b6b; color: white; padding: 12px 24px; font-size: 16px; }
.photobooth-close-btn:hover { background: #ff5252; border-color: #ff5252; }
.photobooth-controls { margin-bottom: 20px; }
.photobooth-actions { display: flex; gap: 10px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap; }
.photobooth-actions .photobooth-btn { flex: 1; min-width: 120px; }
@media (max-width: 600px) {
  .photobooth-frame { padding: 20px; border: 10px solid #5fa7a6; }
  .photobooth-title { font-size: 28px; letter-spacing: 2px; }
  .photobooth-decoration { font-size: 32px; }
  .photobooth-seaweed { font-size: 40px; }
  .photobooth-shell { font-size: 28px; }
  .photobooth-video-preview { width: 95%; max-width: none; }
}
@media (max-width: 400px) {
  .photobooth-title { font-size: 24px; }
  .photobooth-btn { padding: 10px 16px; font-size: 12px; }
  .photobooth-preview-controls { flex-direction: column; gap: 8px; }
  .photobooth-actions .photobooth-btn { min-width: auto; padding: 8px 12px; font-size: 11px; }
}
`;

// ═══════════════════════════════════════════════════════════════
// PHOTOBOOTH JS (from uploaded file)
// ═══════════════════════════════════════════════════════════════
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
  }
  attachEventListeners() {
    this.openCameraBtn.addEventListener('click', () => this.openCamera());
    this.closeCameraBtn.addEventListener('click', () => this.closeCamera());
    this.captureBtn.addEventListener('click', () => this.capturePhoto());
    this.clearBtn.addEventListener('click', () => this.clearAll());
    this.resetBtn.addEventListener('click', () => this.reset());
    this.downloadBtn.addEventListener('click', () => this.downloadFrame());
    this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.closeCamera(); });
    window.addEventListener('beforeunload', () => { if (this.stream) this.stream.getTracks().forEach(track => track.stop()); });
  }
  async openCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } } });
      this.cameraVideo.srcObject = this.stream;
      this.videoPreview.classList.add('active');
      this.overlay.classList.add('active');
      this.openCameraBtn.style.display = 'none';
    } catch (err) {
      alert('⚠️ Akses kamera ditolak. Pastikan Anda sudah memberikan izin kamera di browser.');
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
    if (this.photoCount >= 2) { alert('✅ Maksimal 2 foto untuk frame ini!'); return; }
    this.previewCanvas.width = this.cameraVideo.videoWidth;
    this.previewCanvas.height = this.cameraVideo.videoHeight;
    const ctx = this.previewCanvas.getContext('2d');
    ctx.drawImage(this.cameraVideo, 0, 0);
    this.photoCount++;
    this.photos[this.photoCount] = this.previewCanvas.toDataURL('image/png');
    this.updatePhotoSlot(this.photoCount);
    if (this.photoCount === 2) { alert('✅ Frame lengkap! Tutup kamera untuk download.'); this.closeCamera(); } 
    else { alert(\`✅ Foto \${this.photoCount} berhasil ditangkap. Ambil 1 foto lagi!\`); }
  }
  updatePhotoSlot(slotNum) {
    const slot = document.getElementById(\`photobooth-photo\${slotNum}\`);
    if (this.photos[slotNum]) slot.innerHTML = \`<img src="\${this.photos[slotNum]}" alt="Photo \${slotNum}">\`;
    if (this.photoCount > 0) { this.downloadBtn.disabled = false; this.clearBtn.disabled = false; this.resetBtn.disabled = false; }
  }
  clearAll() {
    this.photos = {}; this.photoCount = 0;
    document.getElementById('photobooth-photo1').innerHTML = '<div class="photobooth-empty">Ambil Foto 1 📸</div>';
    document.getElementById('photobooth-photo2').innerHTML = '<div class="photobooth-empty">Ambil Foto 2 📸</div>';
    this.downloadBtn.disabled = true; this.clearBtn.disabled = true; this.resetBtn.disabled = true;
  }
  reset() { this.clearAll(); }
  downloadFrame() {
    if (typeof html2canvas === 'undefined') { alert('⚠️ Library html2canvas belum loaded. Coba refresh halaman.'); return; }
    this.downloadBtn.disabled = true; this.downloadBtn.textContent = '⏳ Downloading...';
    html2canvas(this.photoboothFrame, { backgroundColor: null, scale: 2, useCORS: true, logging: false }).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      const timestamp = new Date().toISOString().slice(0, 10);
      link.download = \`photobooth-\${timestamp}-\${new Date().getTime()}.png\`;
      link.click();
      this.downloadBtn.textContent = '⬇️ DOWNLOAD FRAME'; this.downloadBtn.disabled = false;
    }).catch(err => { alert('❌ Gagal download. Coba lagi!'); console.error('Download error:', err); this.downloadBtn.textContent = '⬇️ DOWNLOAD FRAME'; this.downloadBtn.disabled = false; });
  }
  setTitle(newTitle) { const titleElement = document.querySelector('.photobooth-title'); if (titleElement) titleElement.textContent = newTitle; }
  getStatus() { return { photoCount: this.photoCount, maxPhotos: 2, cameraActive: this.stream !== null, photos: Object.keys(this.photos).length }; }
}
if (typeof window !== 'undefined') {
  window.UnderwaterPhotobooth = UnderwaterPhotobooth;
}
`;
