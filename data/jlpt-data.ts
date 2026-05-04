export const jlptData = {
  kanji: [
    { q: "1. 日本の【首都】はどこですか。", category: "KANJI", options: ["しゅとう", "しゅうと", "しゅと", "しゅうとう"], correct: 2 },
    { q: "2. 【地球】は太陽のまわりを回っている。", category: "KANJI", options: ["じきゅう", "ちきゅう", "じきゅ", "ちきゅ"], correct: 1 },
  ],
  bunpou: [
    { q: "1. 今度の試合に勝てる（　　）一生懸命がんばります。", category: "BUNPOU", options: ["ために", "ように", "ことに", "みたいに"], correct: 1 },
  ],
  dokkai: [
    { q: "24. 中村さんがしなければならないことは何か。", category: "DOKKAI", options: ["呼びに行く", "ところに置く", "状態を説明する", "印刷してもらう"], correct: 2 },
  ],
};

export const categoryInfo = {
  kanji: {
    title: "漢字 (Kanji)",
    description: "Soal-soal kanji dan bacaan",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-400/50",
  },
  bunpou: {
    title: "文法 (Bunpou)",
    description: "Soal-soal tata bahasa",
    color: "from-sky-500/20 to-cyan-500/20",
    borderColor: "border-sky-400/50",
  },
  dokkai: {
    title: "読解 (Dokkai)",
    description: "Soal-soal pemahaman membaca",
    color: "from-purple-500/20 to-fuchsia-500/20",
    borderColor: "border-purple-400/50",
  },
};
