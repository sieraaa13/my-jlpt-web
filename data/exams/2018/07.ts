// ============================================================
// LATIHAN Moji-Goi N3 — konten ORISINAL buatan sendiri. BUKAN
// soal ujian JLPT resmi Juli 2018 (soal ujian resmi berhak cipta
// milik Japan Foundation / JEES dan tidak disalin di sini).
// Mengisi slot 2018-07 yang sebelumnya kosong.
//
// Bunpou & Dokkai untuk paket ini akan ditambahkan menyusul secara
// terpisah (deploy per bagian). Choukai (dengan audio) juga
// menyusul di paket terpisah.
// ============================================================
export const exam201807 = {
  label: "Latihan Moji-Goi (bukan soal ujian resmi)",
  kanji: [
    // 問題1 — Cara baca kanji (8)
    { q: "1. 彼は自分の【責任】を果たした。", options: ["せきにん", "せきじん", "しゃくにん", "せいにん"], correct: 0 },
    { q: "2. 台風で交通機関に【混乱】が生じた。", options: ["こんらん", "こんなん", "こんろん", "こんだん"], correct: 0 },
    { q: "3. 新製品の【開発】に成功した。", options: ["かいはつ", "がいはつ", "かいほつ", "かいばつ"], correct: 0 },
    { q: "4. その事故の【原因】を調査する。", options: ["げんいん", "げいいん", "げんにん", "けんいん"], correct: 0 },
    { q: "5. 彼女は仕事に【誇り】を持っている。", options: ["ほこり", "ほごり", "ぼこり", "ほこいり"], correct: 0 },
    { q: "6. 会議の【内容】をまとめる。", options: ["ないよう", "ないよ", "だいよう", "ないえい"], correct: 0 },
    { q: "7. 彼は【親戚】の家に泊まった。", options: ["しんせき", "しんぜき", "しんせい", "しんさき"], correct: 0 },
    { q: "8. 台所から変な【匂い】がする。", options: ["におい", "にほい", "のおい", "におえ"], correct: 0 },

    // 問題2 — Penulisan kanji yang benar (6)
    { q: "9. かいけつすべき問題がたくさんある。", options: ["解決", "回決", "解結", "回結"], correct: 0 },
    { q: "10. どりょくすれば必ず結果が出る。", options: ["努力", "怒力", "努立", "怒立"], correct: 0 },
    { q: "11. しゅうかんを変えるのは難しい。", options: ["習慣", "習貫", "週慣", "習館"], correct: 0 },
    { q: "12. れんらくさきを教えてください。", options: ["連絡先", "連格先", "連絡失", "連楽先"], correct: 0 },
    { q: "13. きんじょに新しい店ができた。", options: ["近所", "近処", "近署", "近書"], correct: 0 },
    { q: "14. たいどが悪いと注意された。", options: ["態度", "態道", "体度", "態渡"], correct: 0 },

    // 問題3 — Kata yang tepat untuk mengisi kalimat (11)
    { q: "15. 彼の説明は（　）で、よく理解できた。", options: ["明確", "明白", "正確", "的確"], correct: 0 },
    { q: "16. 新しいシステムの導入で、作業が（　）になった。", options: ["効率的", "能率的", "合理的", "経済的"], correct: 0 },
    { q: "17. 彼は困っている人をいつも（　）。", options: ["助ける", "手伝う", "支える", "救う"], correct: 0 },
    { q: "18. この地域は工業が（　）している。", options: ["発達", "発展", "進歩", "向上"], correct: 0 },
    { q: "19. 台風のため、飛行機が（　）になった。", options: ["欠航", "運休", "休止", "中断"], correct: 0 },
    { q: "20. 彼女は新しい環境に（　）のが早い。", options: ["慣れる", "適応する", "対応する", "順応する"], correct: 0 },
    { q: "21. 会議の資料はもう（　）ましたか。", options: ["準備し", "用意し", "支度し", "予定し"], correct: 0 },
    { q: "22. 彼は難しい問題を（　）解決した。", options: ["見事に", "立派に", "上手に", "綺麗に"], correct: 0 },
    { q: "23. この薬は風邪に（　）がある。", options: ["効果", "効能", "効力", "効用"], correct: 0 },
    { q: "24. 彼は自分の意見を（　）主張した。", options: ["強く", "厳しく", "激しく", "固く"], correct: 0 },
    { q: "25. 締め切りに（　）ように急いで仕上げた。", options: ["間に合う", "間に合わせる", "遅れない", "遅れる"], correct: 0 },

    // 問題4 — Sinonim / ungkapan yang paling dekat maknanya (5)
    { q: "26. 彼女は【頑固】な性格だ。", options: ["一度決めたら変えない", "すぐに変わる", "とても優しい", "いつも明るい"], correct: 0 },
    { q: "27. その計画は【断念】された。", options: ["あきらめられた", "始められた", "発表された", "変更された"], correct: 0 },
    { q: "28. 彼は【多忙】な毎日を送っている。", options: ["とても忙しい", "とても暇な", "とても楽な", "とても静かな"], correct: 0 },
    { q: "29. 彼女の意見は【的確】だった。", options: ["正確でぴったりだった", "間違っていた", "長すぎた", "曖昧だった"], correct: 0 },
    { q: "30. その提案は【却下】された。", options: ["認められなかった", "すぐに実行された", "高く評価された", "忘れられた"], correct: 0 },

    // 問題5 — Penggunaan kata yang benar dalam kalimat (5)
    {
      q: "31. 【集中】",
      options: [
        "彼は勉強に集中している。",
        "彼は集中な性格だ。",
        "今日は集中な天気だ。",
        "この料理は集中な味だ。",
      ],
      correct: 0,
    },
    {
      q: "32. 【いよいよ】",
      options: [
        "いよいよ明日から新学期が始まる。",
        "彼はいよいよ静かな人だ。",
        "このスープはいよいよおいしい。",
        "彼女はいよいよ優しい。",
      ],
      correct: 0,
    },
    {
      q: "33. 【まさか】",
      options: [
        "まさか彼が犯人だとは思わなかった。",
        "まさか明日は晴れるだろう。",
        "まさか宿題を忘れずにやった。",
        "まさかもう一度説明してください。",
      ],
      correct: 0,
    },
    {
      q: "34. 【手間】",
      options: [
        "この料理は手間がかかる。",
        "彼は手間な性格だ。",
        "今日は手間な天気だ。",
        "この本は手間な内容だ。",
      ],
      correct: 0,
    },
    {
      q: "35. 【延期】",
      options: [
        "雨のため、試合が延期になった。",
        "彼女は延期な性格だ。",
        "この本は延期な内容だ。",
        "会議室は延期だ。",
      ],
      correct: 0,
    },
  ],

  bunpou: [],

  dokkai: [],
};
