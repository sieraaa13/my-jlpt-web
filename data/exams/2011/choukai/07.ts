// /data/exams/2011/choukai/07.ts

export const exam201107_choukai = {
  choukai: [
    {
      q: "問題1: ...", // Ambil dari mondai1 questions
      audio: "/audio/choukai/mondai1/01.mp3",
      options: ["1番", "2番", "3番", "4番"],
      correct: 0,  // Index jawaban benar (0-3)
    },
    {
      q: "問題2: ...",
      audio: "/audio/choukai/mondai1/02.mp3",
      options: ["1番", "2番", "3番", "4番"],
      correct: 1,
    },
    {
      q: "問題3: ...",
      audio: "/audio/choukai/mondai2/01.mp3",
      options: ["1番", "2番", "3番", "4番"],
      correct: 2,
    },
      {
        q: "3番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai1/03.mp3",
        options: [
          "友だちにれんらくする",
          "レストランをよやくする",
          "旅行の計画を立てる",
          "ひこうきをよやくする",
        ],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
      {
        q: "4番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai1/04.mp3",
        options: ["映画を見る", "にもつを出す", "本屋に行く", "ご飯を食べる"],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
      {
        q: "5番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai1/05.mp3",
        options: [
          "かさを用意する",
          "リビングのエアコンをけす",
          "台所の電気をけす",
          "台所のまどを閉める",
        ],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
      {
        q: "6番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai1/06.mp3",
        options: [
          "アンケートをとる",
          "行く場所をさがす",
          "何をするか決める",
          "食事する店を決める",
        ],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
    ],
  },

  // ============================================================
  // 問題 2
  // まず質問を聞いてください。そのあと、問題用紙を見てください。
  // 読む時間があります。それから話を聞いて、問題用紙の１から４の中から、
  // 最もよいものを一つえらんでください。
  // ============================================================
  mondai2: {
    instruction:
      "まず質問を聞いてください。そのあと、問題用紙を見てください。読む時間があります。それから話を聞いて、問題用紙の１から４の中から、最もよいものを一つえらんでください。",
    questions: [
      {
        q: "1番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai2/01.mp3",
        options: ["来週の月曜日", "来週の火曜日", "来週の水曜日", "来週の木曜日"],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
      {
        q: "2番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai2/02.mp3",
        options: [
          "いろいろな国の料理が作れるから",
          "へいじつに教室があるから",
          "一人で作れるから",
          "料金が安いから",
        ],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
      {
        q: "3番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai2/03.mp3",
        options: [
          "朝早い仕事だったから",
          "じきゅうが安かったから",
          "物を作る仕事がしたかったから",
          "ほかの仕事も経験したかったから",
        ],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
      {
        q: "4番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai2/04.mp3",
        options: [
          "インターネットを使うこと",
          "メールをすること",
          "プリンターを使うこと",
          "DVDを見ること",
        ],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
      {
        q: "5番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai2/05.mp3",
        options: [
          "もうしこみのしめきりがすぎたから",
          "2回目のさんかだから",
          "1か月後に帰国するから",
          "来日して半年以上になるから",
        ],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
      {
        q: "6番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai2/06.mp3",
        options: [
          "新しい店ではたらけること",
          "車を使って仕事ができること",
          "しょうひんがたくさん売れること",
          "村の人がよろこんでくれること",
        ],
        correct: null, // ← isi jawaban benar (0-3) setelah tahu dari audio
      },
    ],
  },

  // ============================================================
  // 問題 3
  // 問題用紙に何も印刷されていません。この問題は、ぜんたいとしてどんな
  // ないようかを聞く問題です。話の前に質問はありません。
  // まず話を聞いてください。それから、質問とせんたくしを聞いて、
  // １から４の中から、最もよいものを一つえらんでください。
  // ※ 選択肢は音声のみ（問題用紙への印刷なし）
  // ============================================================
  mondai3: {
    instruction:
      "問題用紙に何も印刷されていません。この問題は、ぜんたいとしてどんなないようかを聞く問題です。話の前に質問はありません。まず話を聞いてください。それから、質問とせんたくしを聞いて、１から４の中から、最もよいものを一つえらんでください。",
    // 選択肢は音声のみのため、options は設定なし
    questions: [
      {
        q: "1番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai3/01.mp3",
        // Soal dan pilihan jawaban seluruhnya dari audio (tidak ada di kertas soal)
        options: null,
        correct: null,
      },
      {
        q: "2番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai3/02.mp3",
        options: null,
        correct: null,
      },
      {
        q: "3番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai3/03.mp3",
        options: null,
        correct: null,
      },
    ],
  },

  // ============================================================
  // 問題 4
  // えを見ながら質問を聞いてください。やじるし（→）の人は何と言いますか。
  // １から３の中から、最もよいものを一つえらんでください。
  // ※ 選択肢は音声のみ。各番号に対応するイラストを参照してください。
  // ============================================================
  mondai4: {
    instruction:
      "えを見ながら質問を聞いてください。やじるし（→）の人は何と言いますか。１から３の中から、最もよいものを一つえらんでください。",
    questions: [
      {
        q: "1番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai4/01.mp3",
        // ↓ Ganti path gambar ilustrasi sesuai file kamu
        image: "/images/choukai/mondai4/01.png",
        imageAlt: "1番のイラスト：女性と男性がコピー機の前に立っている",
        // Pilihan jawaban seluruhnya dari audio (1〜3)
        options: null,
        correct: null,
      },
      {
        q: "2番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai4/02.mp3",
        // ↓ Ganti path gambar ilustrasi sesuai file kamu
        image: "/images/choukai/mondai4/02.png",
        imageAlt: "2番のイラスト：男性が女性（受付）と話している",
        options: null,
        correct: null,
      },
      {
        q: "3番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai4/03.mp3",
        // ↓ Ganti path gambar ilustrasi sesuai file kamu
        image: "/images/choukai/mondai4/03.png",
        imageAlt: "3番のイラスト：二人の女性が食卓で話している",
        options: null,
        correct: null,
      },
      {
        q: "4番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai4/04.mp3",
        // ↓ Ganti path gambar ilustrasi sesuai file kamu
        image: "/images/choukai/mondai4/04.png",
        imageAlt: "4番のイラスト：二人の男性がソファーのある部屋に立っている",
        options: null,
        correct: null,
      },
    ],
  },

  // ============================================================
  // 問題 5
  // 問題用紙に何も印刷されていません。まず文を聞いてください。
  // それから、そのへんじを聞いて、１から３の中から、
  // 最もよいものを一つえらんでください。
  // ※ 選択肢は音声のみ（問題用紙への印刷なし）
  // ============================================================
  mondai5: {
    instruction:
      "問題用紙に何も印刷されていません。まず文を聞いてください。それから、そのへんじを聞いて、１から３の中から、最もよいものを一つえらんでください。",
    questions: [
      {
        q: "1番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/01.mp3",
        options: null,
        correct: null,
      },
      {
        q: "2番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/02.mp3",
        options: null,
        correct: null,
      },
      {
        q: "3番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/03.mp3",
        options: null,
        correct: null,
      },
      {
        q: "4番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/04.mp3",
        options: null,
        correct: null,
      },
      {
        q: "5番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/05.mp3",
        options: null,
        correct: null,
      },
      {
        q: "6番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/06.mp3",
        options: null,
        correct: null,
      },
      {
        q: "7番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/07.mp3",
        options: null,
        correct: null,
      },
      {
        q: "8番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/08.mp3",
        options: null,
        correct: null,
      },
      {
        q: "9番",
        // ↓ Ganti path audio di bawah ini sesuai file kamu
        audio: "/audio/choukai/mondai5/09.mp3",
        options: null,
        correct: null,
      },
    ],
  },
};
