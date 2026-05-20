"use client";

import { useEffect, useRef } from "react";

export default function Photobooth({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const initRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    const init = async () => {
      if (initRef.current) return;
      setTimeout(() => {
        if (!(window as any).TemplatePhotobooth) eval(PHOTOBOOTH_JS);
        if (!(window as any).photobooth && (window as any).TemplatePhotobooth) {
          (window as any).photobooth = new (window as any).TemplatePhotobooth();
        }
        initRef.current = true;
      }, 300);
    };
    init();
    return () => {
      if ((window as any).photobooth?.stream) {
        (window as any).photobooth.stream.getTracks().forEach((t: any) => t.stop());
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div className="relative bg-gray-900 rounded-2xl p-6 max-w-5xl w-full">
          <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">×</button>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">📸 SCRAPBOOK PHOTOBOOTH</h2>
            <p className="text-sm text-gray-400">Pakai kamera atau upload foto → AI edit → masuk ke frame!</p>
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
  <div class="camera-section">
    <video id="camera-video" autoplay playsinline muted></video>
    <div class="camera-hint">📸 Posisikan dirimu dengan baik</div>
  </div>
  <div class="template-section">
    <canvas id="template-canvas"></canvas>
    <div class="template-hint" id="template-hint">⏳ Loading template...</div>
  </div>
  <div class="ai-loading-overlay" id="ai-loading-overlay" style="display:none;">
    <div class="ai-loading-box">
      <div class="ai-spinner"></div>
      <p class="ai-loading-text" id="ai-loading-text">✨ AI sedang memproses...</p>
      <p class="ai-loading-sub">Tunggu 30–60 detik ya!</p>
    </div>
  </div>

  <!-- Input tersembunyi untuk upload dari device -->
  <input type="file" id="upload-input" accept="image/*" style="display:none;" />

  <div class="controls-section">
    <button id="start-camera-btn" class="btn btn-primary">📷 BUKA KAMERA</button>
    <button id="capture-photo-btn" class="btn btn-capture" disabled>📸 AMBIL FOTO <span id="photo-count">(0/6)</span></button>
    <button id="upload-photo-btn" class="btn btn-upload">🖼️ UPLOAD FOTO</button>
    <button id="reset-btn" class="btn btn-secondary" disabled>🔄 RESET</button>
    <button id="download-btn" class="btn btn-download" disabled>⬇️ DOWNLOAD</button>
  </div>
</div>
`;

const PHOTOBOOTH_CSS = `
#template-photobooth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
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
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 13px;
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
#template-canvas { max-width: 100%; max-height: 100%; display: block; }
.template-hint {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,182,193,0.9);
  color: #333;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
}
.ai-loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.88);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  grid-column: 1 / -1;
}
.ai-loading-box { text-align: center; padding: 2rem; }
.ai-spinner {
  width: 64px;
  height: 64px;
  border: 5px solid rgba(255,105,180,0.3);
  border-top-color: #ff69b4;
  border-radius: 50%;
  animation: pb-spin 1s linear infinite;
  margin: 0 auto 1.2rem;
}
@keyframes pb-spin { to { transform: rotate(360deg); } }
.ai-loading-text { color: #fff; font-size: 18px; font-weight: bold; margin-bottom: 6px; }
.ai-loading-sub { color: #aaa; font-size: 13px; }
.controls-section {
  grid-column: 1 / -1;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn:hover:not(:disabled) { transform: translateY(-2px); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-primary   { background: linear-gradient(135deg,#00897b,#00695c); color:white; }
.btn-capture   { background: linear-gradient(135deg,#ff69b4,#ff1493); color:white; }
.btn-upload    { background: linear-gradient(135deg,#f59e0b,#d97706); color:white; }
.btn-secondary { background: linear-gradient(135deg,#757575,#616161); color:white; }
.btn-download  { background: linear-gradient(135deg,#6366f1,#4f46e5); color:white; }
@media (max-width: 968px) {
  #template-photobooth { grid-template-columns: 1fr; }
  .controls-section { flex-direction: column; }
  .btn { width: 100%; }
}
`;

const PHOTOBOOTH_JS = `
class TemplatePhotobooth {
  constructor() {
    this.stream = null;
    this.photos = [];
    this.maxPhotos = 6;
    this.templateImg = null;
    this.templateLoaded = false;
    this.isGenerating = false;

    this.FRAMES = [
      { cx: 0.822, cy: 0.185, w: 0.375, h: 0.199, angle: -90.0 },
      { cx: 0.398, cy: 0.285, w: 0.357, h: 0.144, angle: -86.9 },
      { cx: 0.740, cy: 0.398, w: 0.269, h: 0.114, angle: -79.9 },
      { cx: 0.321, cy: 0.477, w: 0.505, h: 0.232, angle:  -3.9 },
      { cx: 0.254, cy: 0.713, w: 0.166, h: 0.092, angle:  -9.8 },
      { cx: 0.639, cy: 0.721, w: 0.387, h: 0.128, angle: -88.5 },
    ];

    this.initElements();
    this.loadTemplate();
    this.attachEventListeners();
  }

  initElements() {
    this.video          = document.getElementById('camera-video');
    this.canvas         = document.getElementById('template-canvas');
    this.ctx            = this.canvas.getContext('2d');
    this.hintEl         = document.getElementById('template-hint');
    this.startBtn       = document.getElementById('start-camera-btn');
    this.captureBtn     = document.getElementById('capture-photo-btn');
    this.uploadBtn      = document.getElementById('upload-photo-btn');
    this.uploadInput    = document.getElementById('upload-input');
    this.resetBtn       = document.getElementById('reset-btn');
    this.downloadBtn    = document.getElementById('download-btn');
    this.photoCountEl   = document.getElementById('photo-count');
    this.loadingOverlay = document.getElementById('ai-loading-overlay');
    this.loadingText    = document.getElementById('ai-loading-text');
  }

  loadTemplate() {
    this.hintEl.textContent = '⏳ Loading template...';
    this.templateImg = new Image();
    this.templateImg.crossOrigin = 'anonymous';
    this.templateImg.onload = () => {
      this.canvas.width  = this.templateImg.width;
      this.canvas.height = this.templateImg.height;
      this.templateLoaded = true;
      this.hintEl.textContent = '👆 Ambil atau upload foto (0/' + this.maxPhotos + ')';
      this.drawComposite();
    };
    this.templateImg.onerror = () => {
      this.hintEl.textContent = '❌ Gagal load template!';
    };
    this.templateImg.src = '/asset/photobooth/scrapbook-template.jpg';
  }

  drawComposite() {
    if (!this.templateLoaded) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.templateImg, 0, 0, this.canvas.width, this.canvas.height);
    this.photos.forEach((photoData, index) => this.drawUserPhoto(photoData, index));
  }

  drawUserPhoto(photoData, index) {
    const W = this.canvas.width;
    const H = this.canvas.height;
    const f = this.FRAMES[index];
    if (!f) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      this.ctx.save();
      this.ctx.translate(f.cx * W, f.cy * H);
      this.ctx.rotate(f.angle * Math.PI / 180);
      this.ctx.drawImage(img, -(f.w * W)/2, -(f.h * H)/2, f.w * W, f.h * H);
      this.ctx.restore();
    };
    img.src = photoData;
  }

  attachEventListeners() {
    this.startBtn.addEventListener('click',   () => this.startCamera());
    this.captureBtn.addEventListener('click', () => this.capturePhoto());
    this.resetBtn.addEventListener('click',   () => this.reset());
    this.downloadBtn.addEventListener('click',() => this.download());

    // Upload dari device
    this.uploadBtn.addEventListener('click', () => {
      if (this.photos.length >= this.maxPhotos || this.isGenerating) return;
      this.uploadInput.click();
    });

    this.uploadInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      // Reset input agar bisa upload file yang sama lagi
      e.target.value = '';

      const reader = new FileReader();
      reader.onload = (ev) => {
        const base64 = ev.target.result;
        this.processImage(base64);
      };
      reader.readAsDataURL(file);
    });
  }

  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      this.video.srcObject = this.stream;
      this.startBtn.disabled   = true;
      this.captureBtn.disabled = false;
    } catch(err) {
      alert('⚠️ Gagal mengakses kamera: ' + err.message);
    }
  }

  async capturePhoto() {
    if (this.photos.length >= this.maxPhotos || this.isGenerating) return;
    const cap = document.createElement('canvas');
    cap.width  = this.video.videoWidth;
    cap.height = this.video.videoHeight;
    const c = cap.getContext('2d');
    c.save(); c.scale(-1,1); c.drawImage(this.video, -cap.width, 0); c.restore();
    const base64 = cap.toDataURL('image/jpeg', 0.85);
    await this.processImage(base64);
  }

  // Fungsi utama: terima base64 → kirim ke AI → tempel ke canvas
  async processImage(base64) {
    if (this.photos.length >= this.maxPhotos || this.isGenerating) return;

    this.isGenerating = true;
    this.captureBtn.disabled = true;
    this.uploadBtn.disabled  = true;
    const frameNum = this.photos.length + 1;
    this.loadingText.textContent = '✨ AI sedang edit foto ' + frameNum + '/' + this.maxPhotos + '...';
    this.loadingOverlay.style.display = 'flex';

    try {
      const res = await fetch('/api/photobooth/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64, theme: 'scrapbook' }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Generate gagal');

      this.photos.push(data.imageUrl);
      this.drawComposite();
      this.updateUI();

      const remaining = this.maxPhotos - this.photos.length;
      if (remaining === 0) {
        this.captureBtn.disabled = true;
        this.uploadBtn.disabled  = true;
        this.hintEl.textContent  = '✅ Semua frame terisi! Klik DOWNLOAD!';
      } else {
        this.captureBtn.disabled = this.stream ? false : true;
        this.uploadBtn.disabled  = false;
        this.hintEl.textContent  = '✅ Foto ' + this.photos.length + ' berhasil! ' + remaining + ' lagi!';
      }

    } catch(err) {
      alert('❌ ' + err.message);
      this.captureBtn.disabled = this.stream ? false : true;
      this.uploadBtn.disabled  = false;
    } finally {
      this.isGenerating = false;
      this.loadingOverlay.style.display = 'none';
    }
  }

  updateUI() {
    this.photoCountEl.textContent = '(' + this.photos.length + '/' + this.maxPhotos + ')';
    this.resetBtn.disabled    = this.photos.length === 0;
    this.downloadBtn.disabled = this.photos.length === 0;
  }

  reset() {
    if (confirm('Reset semua foto?')) {
      this.photos = [];
      this.drawComposite();
      this.updateUI();
      this.captureBtn.disabled = this.stream ? false : true;
      this.uploadBtn.disabled  = false;
      this.hintEl.textContent  = '👆 Ambil atau upload foto (0/' + this.maxPhotos + ')';
    }
  }

  download() {
    if (this.photos.length === 0) return;
    setTimeout(() => {
      const link = document.createElement('a');
      link.download = 'scrapbook-' + Date.now() + '.png';
      link.href = this.canvas.toDataURL('image/png');
      link.click();
    }, 500);
  }
}

if (typeof window !== 'undefined') window.TemplatePhotobooth = TemplatePhotobooth;
`;
