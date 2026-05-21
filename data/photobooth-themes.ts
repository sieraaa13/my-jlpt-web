// ─────────────────────────────────────────────────────────────
// data/photobooth-themes.ts
// Daftar semua tema photobooth + konfigurasinya
// Untuk tambah tema baru: cukup tambah object baru di array THEMES
// Tidak perlu ubah route.ts sama sekali
// ─────────────────────────────────────────────────────────────

export type Frame = {
  cx: number;    // posisi center X (0-1, relatif lebar gambar)
  cy: number;    // posisi center Y (0-1, relatif tinggi gambar)
  w: number;     // lebar frame (0-1)
  h: number;     // tinggi frame (0-1)
  angle: number; // rotasi dalam derajat
};

export type Theme = {
  id: string;          // unik, dipakai di API
  name: string;        // nama tampil di UI
  template: string;    // nama file di /public/asset/photobooth/
  prompt: string;      // instruksi gaya untuk Gemini
  maxPhotos: number;   // jumlah frame foto
  frames: Frame[];     // koordinat tiap frame
};

export const THEMES: Theme[] = [

  // ── 1. Urban Scrapbook ───────────────────────────────────────
  {
    id: "scrapbook",
    name: "Urban Scrapbook",
    template: "scrapbook-template.jpg",
    prompt: "candid street photography style, moody urban aesthetic, natural film grain, slightly desaturated colors, city background, cinematic lighting, authentic candid shot",
    maxPhotos: 6,
    frames: [
      { cx: 0.822, cy: 0.185, w: 0.375, h: 0.199, angle: -90.0 },
      { cx: 0.398, cy: 0.285, w: 0.357, h: 0.144, angle: -86.9 },
      { cx: 0.740, cy: 0.398, w: 0.269, h: 0.114, angle: -79.9 },
      { cx: 0.321, cy: 0.477, w: 0.505, h: 0.232, angle:  -3.9 },
      { cx: 0.254, cy: 0.713, w: 0.166, h: 0.092, angle:  -9.8 },
      { cx: 0.639, cy: 0.721, w: 0.387, h: 0.128, angle: -88.5 },
    ],
  },

  // ── 2. Underwater Mermaid ────────────────────────────────────
  {
    id: "underwater",
    name: "Underwater Mermaid",
    template: "underwater-template.png",
    prompt: "underwater mermaid scene, magical ocean background, glowing bubbles, ethereal soft blue teal lighting, coral reef, dreamy aquatic atmosphere",
    maxPhotos: 2,
    frames: [
      { cx: 0.605, cy: 0.145, w: 0.325, h: 0.33, angle:  8 },
      { cx: 0.62,  cy: 0.505, w: 0.325, h: 0.33, angle: -5 },
    ],
  },

  // ── 3. KPop Cafe Event ───────────────────────────────────────
  {
    id: "kpop_cafe",
    name: "KPop Cafe Event",
    template: "kpop-cafe-template.png",
    prompt: "Korean idol fan cafe event style, y2k aesthetic, soft pastel lighting, cute kawaii atmosphere, kpop merchandise style, bright cheerful colors, polaroid frame effect",
    maxPhotos: 4,
    frames: [
      { cx: 0.269, cy: 0.250, w: 0.400, h: 0.280, angle: 0 },
      { cx: 0.700, cy: 0.250, w: 0.400, h: 0.280, angle: 0 },
      { cx: 0.269, cy: 0.560, w: 0.400, h: 0.280, angle: 0 },
      { cx: 0.700, cy: 0.560, w: 0.400, h: 0.280, angle: 0 },
    ],
  },

  // ── 4. Sakura Festival ───────────────────────────────────────
  {
    id: "sakura",
    name: "Sakura Festival",
    template: "sakura-template.png",
    prompt: "cherry blossom sakura festival, soft pink petals falling, Japanese spring atmosphere, dreamy romantic lighting, pastel pink and white tones, hanami picnic aesthetic",
    maxPhotos: 3,
    frames: [
      { cx: 0.5,  cy: 0.25, w: 0.4, h: 0.35, angle:  0 },
      { cx: 0.25, cy: 0.65, w: 0.35, h: 0.3, angle: -5 },
      { cx: 0.72, cy: 0.65, w: 0.35, h: 0.3, angle:  5 },
    ],
  },

  // ── 5. Harajuku Street ───────────────────────────────────────
  {
    id: "harajuku",
    name: "Harajuku Street",
    template: "harajuku-template.png",
    prompt: "Harajuku Tokyo street fashion, colorful bold outfit, Takeshita Street background, vibrant pop art style, neon colors, funky accessories, Japanese street culture",
    maxPhotos: 2,
    frames: [
      { cx: 0.3,  cy: 0.5, w: 0.45, h: 0.6, angle: -3 },
      { cx: 0.75, cy: 0.5, w: 0.35, h: 0.5, angle:  3 },
    ],
  },

  // ── 6. Vintage Film ──────────────────────────────────────────
  {
    id: "vintage_film",
    name: "Vintage Film",
    template: "vintage-film-template.png",
    prompt: "vintage analog film photography, warm orange brown tones, film grain texture, light leaks, 35mm film aesthetic, nostalgic retro atmosphere, faded colors",
    maxPhotos: 4,
    frames: [
      { cx: 0.25, cy: 0.3,  w: 0.4, h: 0.35, angle: -3 },
      { cx: 0.72, cy: 0.28, w: 0.38, h: 0.32, angle:  5 },
      { cx: 0.28, cy: 0.72, w: 0.38, h: 0.35, angle:  2 },
      { cx: 0.70, cy: 0.70, w: 0.40, h: 0.33, angle: -4 },
    ],
  },

  // ── 7. Dreamy Pastel ─────────────────────────────────────────
  {
    id: "dreamy_pastel",
    name: "Dreamy Pastel",
    template: "dreamy-pastel-template.png",
    prompt: "dreamy soft pastel aesthetic, pink lavender mint colors, soft bokeh background, fairy tale atmosphere, cute ribbons and flowers decoration, soft glowing light",
    maxPhotos: 3,
    frames: [
      { cx: 0.5,  cy: 0.3,  w: 0.5, h: 0.45, angle:  0 },
      { cx: 0.25, cy: 0.72, w: 0.4, h: 0.35, angle: -5 },
      { cx: 0.72, cy: 0.72, w: 0.4, h: 0.35, angle:  5 },
    ],
  },

  // ── 8. Dark Academia ─────────────────────────────────────────
  {
    id: "dark_academia",
    name: "Dark Academia",
    template: "dark-academia-template.png",
    prompt: "dark academia aesthetic, vintage library background, warm candlelight, earth tones brown beige, old books manuscripts, moody intellectual atmosphere, classical architecture",
    maxPhotos: 2,
    frames: [
      { cx: 0.3,  cy: 0.5, w: 0.45, h: 0.55, angle: -2 },
      { cx: 0.75, cy: 0.5, w: 0.38, h: 0.48, angle:  3 },
    ],
  },

  // ── 9. Neon Cyber ────────────────────────────────────────────
  {
    id: "neon_cyber",
    name: "Neon Cyber",
    template: "neon-cyber-template.png",
    prompt: "cyberpunk neon aesthetic, glowing neon lights pink blue purple, futuristic city background, dark night atmosphere, holographic effects, sci-fi vibe",
    maxPhotos: 4,
    frames: [
      { cx: 0.25, cy: 0.3,  w: 0.38, h: 0.42, angle:  0 },
      { cx: 0.72, cy: 0.28, w: 0.38, h: 0.40, angle:  0 },
      { cx: 0.28, cy: 0.72, w: 0.38, h: 0.40, angle:  0 },
      { cx: 0.70, cy: 0.70, w: 0.38, h: 0.42, angle:  0 },
    ],
  },

  // ── 10. Summer Beach ─────────────────────────────────────────
  {
    id: "summer_beach",
    name: "Summer Beach",
    template: "summer-beach-template.png",
    prompt: "summer beach vacation, golden sunshine, tropical ocean background, bright warm colors, fun holiday atmosphere, sunlight and blue sky",
    maxPhotos: 3,
    frames: [
      { cx: 0.5,  cy: 0.28, w: 0.5, h: 0.42, angle:  0 },
      { cx: 0.27, cy: 0.72, w: 0.4, h: 0.38, angle: -4 },
      { cx: 0.72, cy: 0.72, w: 0.4, h: 0.38, angle:  4 },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Tambah tema ke-11 sampai 100 di sini dengan format yang sama
  // Contoh:
  // {
  //   id: "nama_unik",
  //   name: "Nama Tampil",
  //   template: "nama-file-template.png",
  //   prompt: "deskripsi gaya untuk Gemini...",
  //   maxPhotos: 2,
  //   frames: [
  //     { cx: 0.5, cy: 0.5, w: 0.4, h: 0.4, angle: 0 },
  //   ],
  // },
  // ─────────────────────────────────────────────────────────────
];

// Helper: cari tema berdasarkan ID
export function getThemeById(id: string): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

// Helper: daftar tema untuk UI (tanpa frames, lebih ringan)
export function getThemeList() {
  return THEMES.map(({ id, name, template, maxPhotos }) => ({
    id,
    name,
    template,
    maxPhotos,
  }));
}
