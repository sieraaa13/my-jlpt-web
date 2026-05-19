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
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div className="relative bg-gray-900 rounded-2xl p-6 max-w-5xl w-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg transition-all"
          >×</button>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">🎥 UNDERWATER PHOTOBOOTH 🌊</h2>
            <p className="text-sm text-gray-400">Ambil foto → AI anime-kan → masuk ke template!</p>
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
        <div class="camera-hint">📸 Posisikan wajah kamu dengan baik</div>
    </div>
    <div class="template-section">
        <canvas id="template-canvas"></canvas>
        <div class="template-hint" id="template-hint">⏳ Loading template...</div>
    </div>
    <div class="ai-loading-overlay" id="ai-loading-overlay" style="display:none;">
        <div class="ai-loading-box">
            <div class="ai-spinner"></div>
            <p class="ai-loading-text" id="ai-loading-text">✨ AI sedang memproses foto kamu...</p>
            <p class="ai-loading-sub">Tunggu 30–60 detik ya!</p>
        </div>
    </div>
    <div class="controls-section">
        <button id="start-camera-btn" class="btn btn-primary">📷 BUKA KAMERA</button>
        <button id="capture-photo-btn" class="btn btn-capture" disabled>📸 AMBIL & ANIME-KAN <span id="photo-count">(0/2)</span></button>
        <button id="reset-btn" class="btn btn-secondary" disabled>🔄 RESET</button>
        <button id="download-btn" class="btn btn-download" disabled>⬇️ DOWNLOAD HASIL</button>
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
#template-canvas { max-width: 100%; max-height: 100%; display: block; }
.template-hint {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,182,193,0.9);
  color: #333;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
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
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}
.btn:hover:not(:disabled) { transform: translateY(-2px); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-primary   { background: linear-gradient(135deg,#00897b,#00695c); color:white; }
.btn-capture   { background: linear-gradient(135deg,#ff69b4,#ff1493); color:white; font-size:18px; }
.btn-secondary { background: linear-gradient(135deg,#757575,#616161); color:white; }
.btn-download  { background: linear-gradient(135deg,#6366f1,#4f46e5); color:white; }
#photo-count { font-size:14px; opacity:0.9; }
@media (max-width: 968px) {
  #template-photobooth { grid-template-columns: 1fr; }
  .controls-section { flex-direction: column; }
  .btn { width: 100%; }
}
`;

const PHOTOBOOTH_JS = `
class TemplatePhotobooth {
  constructor() {
    this.stream       = null;
    this.photos       = [];
    this.framePositions = []; // dari GPT Vision
    this.maxPhotos    = 2;
    this.templateImg  = null;
    this.templateLoaded = false;
    this.isGenerating = false;
    this.currentTemplate = 'underwater';

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
      this.hintEl.textContent = '👆 Ambil 2 foto, AI akan proses!';
      this.drawComposite();
    };
    this.templateImg.onerror = () => {
      this.hintEl.textContent = '❌ Gagal load template!';
    };
    this.templateImg.src = '/asset/photobooth/underwater-template.png';
  }

  drawComposite() {
    if (!this.templateLoaded) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.templateImg, 0, 0, this.canvas.width, this.canvas.height);
    this.photos.forEach((p, i) => this.drawUserPhoto(p, i));
  }

  drawUserPhoto(photoData, index) {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Gunakan framePositions dari GPT Vision kalau ada
    // fallback ke posisi default kalau belum ada
    let pos;
    if (this.framePositions && this.framePositions[index]) {
      const f = this.framePositions[index];
      pos = {
        x:      f.x * w,
        y:      f.y * h,
        width:  f.width * w,
        height: f.height * h,
        rotate: f.rotation ?? 0,
      };
    } else {
      // Fallback default positions
      const defaults = [
        { x: w*0.54, y: h*0.12, width: w*0.25, height: h*0.28, rotate: 8  },
        { x: w*0.55, y: h*0.47, width: w*0.25, height: h*0.28, rotate: -5 },
      ];
      pos = defaults[index];
    }

    if (!pos) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      this.ctx.save();
      this.ctx.translate(pos.x + pos.width/2, pos.y + pos.height/2);
      this.ctx.rotate(pos.rotate * Math.PI / 180);
      this.ctx.drawImage(img, -pos.width/2, -pos.height/2, pos.width, pos.height);
      this.ctx.restore();
    };
    img.src = photoData;
  }

  attachEventListeners() {
    this.startBtn.addEventListener('click',    () => this.startCamera());
    this.captureBtn.addEventListener('click',  () => this.capturePhoto());
    this.resetBtn.addEventListener('click',    () => this.reset());
    this.downloadBtn.addEventListener('click', () => this.download());
  }

  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode:'user', width:{ideal:1280}, height:{ideal:720} }
      });
      this.video.srcObject  = this.stream;
      this.startBtn.disabled   = true;
      this.captureBtn.disabled = false;
    } catch(err) {
      alert('⚠️ Gagal mengakses kamera: ' + err.message);
    }
  }

  async capturePhoto() {
    if (this.photos.length >= this.maxPhotos || this.isGenerating) return;

    // Capture dari webcam
    const cap = document.createElement('canvas');
    cap.width  = this.video.videoWidth;
    cap.height = this.video.videoHeight;
    const c = cap.getContext('2d');
    c.save(); c.scale(-1,1); c.drawImage(this.video, -cap.width, 0); c.restore();
    const base64 = cap.toDataURL('image/jpeg', 0.85);

    // Tampilkan loading
    this.isGenerating = true;
    this.captureBtn.disabled = true;
    this.loadingText.textContent = '✨ AI sedang memproses foto ' + (this.photos.length+1) + '...';
    this.loadingOverlay.style.display = 'flex';

    try {
      const res = await fetch('/api/photobooth/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64, template: this.currentTemplate }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Generate gagal');

      // Simpan frame positions dari GPT Vision (hanya perlu sekali)
      if (data.frames && data.frames.length > 0 && this.framePositions.length === 0) {
        this.framePositions = data.frames;
        console.log('✅ Frame positions dari GPT Vision:', this.framePositions);
      }

      // Tambah foto hasil AI
      this.photos.push(data.imageUrl);
      this.drawComposite();
      this.updateUI();

      const remaining = this.maxPhotos - this.photos.length;
      if (remaining === 0) {
        this.captureBtn.disabled = true;
        this.hintEl.textContent  = '✅ Selesai! Klik DOWNLOAD!';
      } else {
        this.captureBtn.disabled = false;
        this.hintEl.textContent  = '✅ Foto ' + this.photos.length + ' berhasil! Ambil ' + remaining + ' lagi!';
      }

    } catch(err) {
      alert('❌ ' + err.message);
      this.captureBtn.disabled = false;
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
      this.framePositions = [];
      this.drawComposite();
      this.updateUI();
      this.captureBtn.disabled = this.stream ? false : true;
      this.hintEl.textContent  = '👆 Ambil 2 foto, AI akan proses!';
    }
  }

  download() {
    if (this.photos.length === 0) return;
    setTimeout(() => {
      const link = document.createElement('a');
      link.download = 'underwater-anime-' + Date.now() + '.png';
      link.href = this.canvas.toDataURL('image/png');
      link.click();
    }, 500);
  }
}

if (typeof window !== 'undefined') window.TemplatePhotobooth = TemplatePhotobooth;
`;
