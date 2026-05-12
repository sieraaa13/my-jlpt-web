// ============================================================
// JLPT N3 聴解 (Choukai) - 2011年07月
// Audio hosted di Supabase Storage
// Base URL: https://bucvzrvimgqdttvgubne.supabase.co/storage/v1/object/public/audio/2011/07/
// ============================================================

const BASE = "https://bucvzrvimgqdttvgubne.supabase.co/storage/v1/object/public/audio/2011/07";

export const exam201107_choukai = {
  choukai: [

    // ============================================================
    // 問題 1 (6 soal)
    // まず質問を聞いてください。それから話を聞いて、
    // 問題用紙の１から４の中から、最もよいものを一つえらんでください。
    // ============================================================
    {
      q: "【問題1-1番】のり、ボールペン、ノート、封筒、コピー用紙の中から、最も良いものを選んでください。",
      audio: `${BASE}/1_1.mp3`,
      introAudio: `${BASE}/intro_soal_1.mp3`,
      options: ["アイウ", "アウエ", "アウオ", "アエオ"],
      correct: 0,
      mondai: 1,
      questionNumber: 1,
    },
    {
      q: "【問題1-2番】何を買いますか。",
      audio: `${BASE}/1_2.mp3`,
      options: ["赤ちゃんのふく", "赤ちゃんのおもちゃ", "友だちのふく", "友だちのバッグ"],
      correct: 0,
      mondai: 1,
      questionNumber: 2,
    },
    {
      q: "【問題1-3番】何をしますか。",
      audio: `${BASE}/1_3.mp3`,
      options: ["友だちにれんらくする", "レストランをよやくする", "旅行の計画を立てる", "ひこうきをよやくする"],
      correct: 0,
      mondai: 1,
      questionNumber: 3,
    },
    {
      q: "【問題1-4番】男の人は何をしますか。",
      audio: `${BASE}/1_4.mp3`,
      options: ["映画を見る", "にもつを出す", "本屋に行く", "ご飯を食べる"],
      correct: 0,
      mondai: 1,
      questionNumber: 4,
    },
    {
      q: "【問題1-5番】女の人は何をしますか。",
      audio: `${BASE}/1_5.mp3`,
      options: ["かさを用意する", "リビングのエアコンをけす", "台所の電気をけす", "台所のまどを閉める"],
      correct: 0,
      mondai: 1,
      questionNumber: 5,
    },
    {
      q: "【問題1-6番】これから何をすることになりますか。",
      audio: `${BASE}/1_6.mp3`,
      options: ["アンケートをとる", "行く場所をさがす", "何をするか決める", "食事する店を決める"],
      correct: 0,
      mondai: 1,
      questionNumber: 6,
    },

    // ============================================================
    // 問題 2 (6 soal)
    // まず質問を聞いてください。そのあと、問題用紙を見てください。
    // 読む時間があります。それから話を聞いて、最もよいものを一つえらんでください。
    // ============================================================
    {
      q: "【問題2-1番】クッキングクラスはいつから始まりますか。",
      audio: `${BASE}/2_1.mp3`,
      introAudio: `${BASE}/intro_soal_2.mp3`,
      options: ["来週の月曜日", "来週の火曜日", "来週の水曜日", "来週の木曜日"],
      correct: 0,
      mondai: 2,
      questionNumber: 1,
    },
    {
      q: "【問題2-2番】女の人がこのクラスを選んだ理由は何ですか。",
      audio: `${BASE}/2_2.mp3`,
      options: ["いろいろな国の料理が作れるから", "へいじつに教室があるから", "一人で作れるから", "料金が安いから"],
      correct: 0,
      mondai: 2,
      questionNumber: 2,
    },
    {
      q: "【問題2-3番】男の人が前の仕事をやめた理由は何ですか。",
      audio: `${BASE}/2_3.mp3`,
      options: ["朝早い仕事だったから", "じきゅうが安かったから", "物を作る仕事がしたかったから", "ほかの仕事も経験したかったから"],
      correct: 0,
      mondai: 2,
      questionNumber: 3,
    },
    {
      q: "【問題2-4番】会社では何ができないことが問題ですか。",
      audio: `${BASE}/2_4.mp3`,
      options: ["インターネットを使うこと", "メールをすること", "プリンターを使うこと", "DVDを見ること"],
      correct: 0,
      mondai: 2,
      questionNumber: 4,
    },
    {
      q: "【問題2-5番】女の人がこのイベントに参加できない理由は何ですか。",
      audio: `${BASE}/2_5.mp3`,
      options: ["もうしこみのしめきりがすぎたから", "2回目のさんかだから", "1か月後に帰国するから", "来日して半年以上になるから"],
      correct: 0,
      mondai: 2,
      questionNumber: 5,
    },
    {
      q: "【問題2-6番】女の人にとって良いニュースは何ですか。",
      audio: `${BASE}/2_6.mp3`,
      options: ["新しい店ではたらけること", "車を使って仕事ができること", "しょうひんがたくさん売れること", "村の人がよろこんでくれること"],
      correct: 0,
      mondai: 2,
      questionNumber: 6,
    },

    // ============================================================
    // 問題 3 (3 soal)
    // 問題用紙に何も印刷されていません。
    // まず話を聞いてください。それから、質問とせんたくしを聞いて、
    // １から４の中から、最もよいものを一つえらんでください。
    // ※ 選択肢は音声のみ
    // ============================================================
    {
      q: "【問題3-1番】全体としてどんな内容ですか。（選択肢は音声で聞いてください）",
      audio: `${BASE}/3_1.mp3`,
      introAudio: `${BASE}/intro_soal_3.mp3`,
      options: ["1番", "2番", "3番", "4番"],
      correct: 0,
      mondai: 3,
      questionNumber: 1,
      audioOnlyOptions: true,
    },
    {
      q: "【問題3-2番】全体としてどんな内容ですか。（選択肢は音声で聞いてください）",
      audio: `${BASE}/3_2.mp3`,
      options: ["1番", "2番", "3番", "4番"],
      correct: 0,
      mondai: 3,
      questionNumber: 2,
      audioOnlyOptions: true,
    },
    {
      q: "【問題3-3番】全体としてどんな内容ですか。（選択肢は音声で聞いてください）",
      audio: `${BASE}/3_3.mp3`,
      options: ["1番", "2番", "3番", "4番"],
      correct: 0,
      mondai: 3,
      questionNumber: 3,
      audioOnlyOptions: true,
    },

    // ============================================================
    // 問題 4 (4 soal)
    // えを見ながら質問を聞いてください。やじるし（→）の人は何と言いますか。
    // １から３の中から、最もよいものを一つえらんでください。
    // ※ 選択肢は音声のみ
    // ============================================================
    {
      q: "【問題4-1番】やじるし（→）の人は何と言いますか。（選択肢は音声で聞いてください）",
      audio: `${BASE}/4_1.mp3`,
      introAudio: `${BASE}/intro_soal_4.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 4,
      questionNumber: 1,
      audioOnlyOptions: true,
    },
    {
      q: "【問題4-2番】やじるし（→）の人は何と言いますか。（選択肢は音声で聞いてください）",
      audio: `${BASE}/4_2.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 4,
      questionNumber: 2,
      audioOnlyOptions: true,
    },
    {
      q: "【問題4-3番】やじるし（→）の人は何と言いますか。（選択肢は音声で聞いてください）",
      audio: `${BASE}/4_3.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 4,
      questionNumber: 3,
      audioOnlyOptions: true,
    },
    {
      q: "【問題4-4番】やじるし（→）の人は何と言いますか。（選択肢は音声で聞いてください）",
      audio: `${BASE}/4_4.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 4,
      questionNumber: 4,
      audioOnlyOptions: true,
    },

    // ============================================================
    // 問題 5 (8 soal)
    // 問題用紙に何も印刷されていません。まず文を聞いてください。
    // それから、そのへんじを聞いて、１から３の中から最もよいものを一つえらんでください。
    // ※ 選択肢は音声のみ
    // ============================================================
    {
      q: "【問題5-1番】（文と選択肢は音声で聞いてください）",
      audio: `${BASE}/5_1.mp3`,
      introAudio: `${BASE}/intro_soal_5.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 5,
      questionNumber: 1,
      audioOnlyOptions: true,
    },
    {
      q: "【問題5-2番】（文と選択肢は音声で聞いてください）",
      audio: `${BASE}/5_2.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 5,
      questionNumber: 2,
      audioOnlyOptions: true,
    },
    {
      q: "【問題5-3番】（文と選択肢は音声で聞いてください）",
      audio: `${BASE}/5_3.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 5,
      questionNumber: 3,
      audioOnlyOptions: true,
    },
    {
      q: "【問題5-4番】（文と選択肢は音声で聞いてください）",
      audio: `${BASE}/5_4.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 5,
      questionNumber: 4,
      audioOnlyOptions: true,
    },
    {
      q: "【問題5-5番】（文と選択肢は音声で聞いてください）",
      audio: `${BASE}/5_5.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 5,
      questionNumber: 5,
      audioOnlyOptions: true,
    },
    {
      q: "【問題5-6番】（文と選択肢は音声で聞いてください）",
      audio: `${BASE}/5_6.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 5,
      questionNumber: 6,
      audioOnlyOptions: true,
    },
    {
      q: "【問題5-7番】（文と選択肢は音声で聞いてください）",
      audio: `${BASE}/5_7.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 5,
      questionNumber: 7,
      audioOnlyOptions: true,
    },
    {
      q: "【問題5-8番】（文と選択肢は音声で聞いてください）",
      audio: `${BASE}/5_8.mp3`,
      options: ["1番", "2番", "3番"],
      correct: 0,
      mondai: 5,
      questionNumber: 8,
      audioOnlyOptions: true,
    },
  ],
};
