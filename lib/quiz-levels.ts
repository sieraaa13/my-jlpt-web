// lib/quiz-levels.ts

export interface PlayerLevel {
  num:   number;
  icon:  string;
  name:  string;
  jp:    string;
  color: string;
  minPts: number;
  maxPts: number;
  perks: string[];
}

export const PLAYER_LEVELS: PlayerLevel[] = [
  { num: 1,  icon: "🌱", name: "Sakura Seed",    jp: "桜の種",    color: "#1D9E75", minPts: 0,    maxPts: 29,   perks: ["Quiz harian aktif", "5 soal per hari"] },
  { num: 2,  icon: "🌸", name: "Sakura Blooms",  jp: "桜の花",    color: "#D4537E", minPts: 30,   maxPts: 79,   perks: ["Badge Sakura", "Streak bonus +1"] },
  { num: 3,  icon: "🍵", name: "Ocha Master",    jp: "お茶の達人", color: "#3B6D11", minPts: 80,   maxPts: 149,  perks: ["Badge Ocha", "Akses topik Anime"] },
  { num: 4,  icon: "⛩️", name: "Jinja Keeper",   jp: "神社の守",   color: "#534AB7", minPts: 150,  maxPts: 249,  perks: ["Badge Jinja", "Soal bonus +1/hari"] },
  { num: 5,  icon: "🥷", name: "Kunoichi",       jp: "くノ一",    color: "#5F5E5A", minPts: 250,  maxPts: 379,  perks: ["Badge Ninja", "Ganti topik +1"] },
  { num: 6,  icon: "⚔️", name: "Samurai",        jp: "侍",        color: "#BA7517", minPts: 380,  maxPts: 549,  perks: ["Badge Samurai", "Poin N5 x1.5"] },
  { num: 7,  icon: "🏯", name: "Daimyo",         jp: "大名",      color: "#D85A30", minPts: 550,  maxPts: 759,  perks: ["Badge Daimyo", "Soal bonus +2/hari"] },
  { num: 8,  icon: "🐉", name: "Ryu Master",     jp: "龍の達人",  color: "#185FA5", minPts: 760,  maxPts: 999,  perks: ["Badge Ryu", "Poin N4 x1.5"] },
  { num: 9,  icon: "🎌", name: "Shogun",         jp: "将軍",      color: "#E24B4A", minPts: 1000, maxPts: 1299, perks: ["Badge Shogun", "Semua bonus aktif"] },
  { num: 10, icon: "👑", name: "Tenno",          jp: "天皇",      color: "#534AB7", minPts: 1300, maxPts: 99999,perks: ["Badge Tenno", "Gelar tertinggi"] },
];

export function getPlayerLevel(totalPts: number): PlayerLevel {
  for (let i = PLAYER_LEVELS.length - 1; i >= 0; i--) {
    if (totalPts >= PLAYER_LEVELS[i].minPts) return PLAYER_LEVELS[i];
  }
  return PLAYER_LEVELS[0];
}

export function getProgressToNext(totalPts: number): number {
  const current = getPlayerLevel(totalPts);
  if (current.num === 10) return 100;
  const range = current.maxPts - current.minPts + 1;
  const progress = totalPts - current.minPts;
  return Math.round((progress / range) * 100);
}

export function getPtsToNext(totalPts: number): number {
  const current = getPlayerLevel(totalPts);
  if (current.num === 10) return 0;
  return current.maxPts + 1 - totalPts;
}
