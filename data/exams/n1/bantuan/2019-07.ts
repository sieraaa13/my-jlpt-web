import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2019
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1907: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "あの{態度|たいど}には【{猛烈|もうれつ}】に{腹|はら}が{立|た}った。",
      arti: "Saya 【sangat (hebat)】 marah dengan sikap itu.",
    },
    2: {
      yomi: "{彼女|かのじょ}は{病|やまい}を【{克服|こくふく}】して、{職場|しょくば}に{戻|もど}ってきた。",
      arti: "Ia 【mengatasi】 penyakitnya dan kembali ke tempat kerja.",
    },
    3: {
      yomi: "【{崩|くず}れ】やすいので、{運|はこ}ぶときは{気|き}をつけてください。",
      arti: "Karena mudah 【runtuh/hancur】, hati-hati saat membawanya.",
      optArti: ["mudah penyok/remuk", "mudah runtuh, hancur (崩れやすい)", "mudah terkelupas", "mudah tumpah"],
    },
    4: {
      yomi: "この{薬|くすり}にはウイルスの【{繁殖|はんしょく}】を{抑|おさ}える{効果|こうか}がある。",
      arti: "Obat ini berkhasiat menekan 【perkembangbiakan】 virus.",
    },
    5: {
      yomi: "サイトの【{履歴|りれき}】は{残|のこ}っていなかった。",
      arti: "【Riwayat】 situs itu tidak tersisa.",
    },
    6: {
      yomi: "{夕日|ゆうひ}に{赤|あか}く【{映|は}える】{山|やま}を{写真|しゃしん}に{収|おさ}めた。",
      arti: "Saya memotret gunung yang 【tampak indah】 kemerahan diterpa matahari senja.",
      optArti: ["menjulang", "tampak indah, bersinar (映える)", "terbakar", "jernih, cemerlang"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "ガスが{漏|も}れると、（　）が{感知|かんち}して{警報|けいほう}が{鳴|な}る。",
      arti: "Kalau gas bocor, (…) mendeteksinya dan alarm berbunyi.",
      optArti: ["radar", "motor", "sensor", "tuas"],
    },
    8: {
      yomi: "{彼|かれ}はロケットを{作|つく}って{宇宙|うちゅう}へ{飛|と}ばしたいという（　）{夢|ゆめ}を{実現|じつげん}した。",
      arti: "Ia mewujudkan mimpi (…) untuk membuat roket dan meluncurkannya ke luar angkasa.",
      optYomi: ["{絶大|ぜつだい}な", "{盛大|せいだい}な", "{雄大|ゆうだい}な", "{壮大|そうだい}な"],
      optArti: ["sangat besar (pengaruh, kepercayaan)", "meriah", "megah (pemandangan alam)", "besar, ambisius (rencana, mimpi)"],
    },
    9: {
      yomi: "その{優|やさ}しいメロディーは{私|わたし}の{耳|みみ}に（　）{響|ひび}き、{眠|ねむ}りに{誘|さそ}ってくれた。",
      arti: "Melodi yang lembut itu bergema (…) di telinga saya dan membuat saya tertidur.",
      optYomi: [null, null, "{喜|よろこ}ばしく", "{輝|かがや}かしく"],
      optArti: ["dengan nyaman, enak", "dengan lapang dada, tanpa ragu", "menggembirakan", "gemilang"],
    },
    10: {
      yomi: "{兄|あに}は{科学者|かがくしゃ}として{遺伝子|いでんし}の{研究|けんきゅう}に（　）している。",
      arti: "Kakak laki-laki saya, sebagai ilmuwan, (…) penelitian genetika.",
      optYomi: ["{従事|じゅうじ}", "{勤務|きんむ}", "{在籍|ざいせき}", "{就労|しゅうろう}"],
      optArti: ["menekuni, bergerak di (suatu pekerjaan)", "bertugas (di kantor)", "terdaftar (sebagai anggota)", "bekerja (punya pekerjaan)"],
    },
    11: {
      yomi: "{葉書|はがき}が{届|とど}いたが、{雨|あめ}でインクが{少|すこ}し（　）、{読|よ}みにくかった。",
      arti: "Kartu pos sampai, tetapi tintanya sedikit (…) karena hujan sehingga sulit dibaca.",
      optYomi: ["{暴|あば}れて", null, "{震|ふる}えて", null],
      optArti: ["mengamuk", "luntur, merembes", "gemetar", "bengkok, miring"],
    },
    12: {
      yomi: "{子|こ}どもにとってプレッシャーになるので、{将来|しょうらい}に{過度|かど}の{期待|きたい}をするのは（　）だ。",
      arti: "Karena menjadi tekanan bagi anak, berharap berlebihan tentang masa depannya adalah (…).",
      optYomi: ["{不当|ふとう}", "{無効|むこう}", "{禁物|きんもつ}", "{偏見|へんけん}"],
      optArti: ["tidak adil", "tidak berlaku", "pantangan, hal yang harus dihindari", "prasangka"],
    },
    13: {
      yomi: "{社長|しゃちょう}になり、トップに{立|た}つ{者|もの}の{責任|せきにん}の{重|おも}さを（　）{感|かん}じている。",
      arti: "Setelah menjadi direktur, saya merasakan (…) beratnya tanggung jawab orang yang berdiri di puncak.",
      optArti: ["cemas (melihat bahaya)", "takut-takut", "berdebar-debar", "sangat terasa, menusuk ke hati"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "A{社|しゃ}の【コンパクト】な{車|くるま}がよく{売|う}れている。",
      arti: "Mobil 【kompak】 perusahaan A laris terjual.",
      optYomi: ["{新型|しんがた}の", "{小型|こがた}の", "{家族|かぞく}{向|む}きの", "{若者|わかもの}{向|む}きの"],
      optArti: ["model baru", "berukuran kecil", "untuk keluarga", "untuk anak muda"],
    },
    15: {
      yomi: "{無駄|むだ}な{経費|けいひ}は【{極力|きょくりょく}】{減|へ}らそう。",
      arti: "Mari kurangi biaya yang sia-sia 【semaksimal mungkin】.",
      optYomi: [null, "{大幅|おおはば}に", "{一気|いっき}に", "{思|おも}い{切|き}って"],
      optArti: ["sebisa mungkin", "secara besar-besaran", "sekaligus", "dengan berani"],
    },
    16: {
      yomi: "{彼|かれ}は「あ、{忘|わす}れてた」と【つぶやく】と、その{場|ば}を{去|さ}って{行|い}った。",
      arti: "Ia 【bergumam】 \"Ah, aku lupa,\" lalu pergi dari tempat itu.",
      optYomi: ["ゆっくり{言|い}う", "{大|おお}きな{声|こえ}で{言|い}う", "{早口|はやくち}で{言|い}う", "{小|ちい}さな{声|こえ}で{言|い}う"],
      optArti: ["berkata pelan-pelan", "berkata dengan suara keras", "berkata dengan cepat", "berkata dengan suara kecil"],
    },
    17: {
      yomi: "{目撃者|もくげきしゃ}の{証言|しょうげん}には【{不審|ふしん}】な{点|てん}があった。",
      arti: "Ada hal yang 【mencurigakan】 dalam kesaksian saksi mata.",
      optYomi: [null, "{頼|たよ}りない", "{怪|あや}しい", null],
      optArti: ["asal-asalan, ngawur", "tidak bisa diandalkan", "mencurigakan", "samar, tidak jelas"],
    },
    18: {
      yomi: "{何時間|なんじかん}もグラウンドで{練習|れんしゅう}していたので、【ばてて】しまった。",
      arti: "Karena berlatih berjam-jam di lapangan, saya 【kehabisan tenaga】.",
      optYomi: ["{疲|つか}れて", "{飽|あ}きて", "のどが{渇|かわ}いて", null],
      optArti: ["lelah", "bosan", "haus", "lapar"],
    },
    19: {
      yomi: "どんな{厳|きび}しい{状況|じょうきょう}でも{任務|にんむ}を【まっとうする】{覚悟|かくご}がある。",
      arti: "Saya siap 【menuntaskan】 tugas dalam situasi sesulit apa pun.",
      optYomi: ["{継続|けいぞく}する", "{完了|かんりょう}する", "{実行|じっこう}する", "{担当|たんとう}する"],
      optArti: ["melanjutkan", "menuntaskan, menyelesaikan", "melaksanakan", "menangani"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "【{簡素|かんそ}】",
      arti: "簡素 = sederhana, ringkas (tanpa hiasan atau prosedur berbelit)",
      optYomi: [
        "これはボールをけるだけの{簡素|かんそ}なゲームです。",
        "{鈴木|すずき}さんは{頑固|がんこ}だったけど、{今|いま}は{簡素|かんそ}になったね。",
        "{田舎|いなか}で{食|た}べた{簡素|かんそ}な{味|あじ}の{食事|しょくじ}が{忘|わす}れられない。",
        "{以前|いぜん}に{比|くら}べ、{役所|やくしょ}の{手続|てつづ}きは{簡素|かんそ}になりました。",
      ],
      optArti: [
        "Ini permainan 'sederhana' yang hanya menendang bola.",
        "Suzuki-san dulu keras kepala, tapi sekarang jadi 'sederhana' ya.",
        "Saya tidak bisa melupakan makanan berasa 'sederhana' yang saya makan di desa.",
        "Dibanding dulu, prosedur di kantor pemerintahan menjadi 'sederhana'.",
      ],
    },
    21: {
      yomi: "【{解明|かいめい}】",
      arti: "解明 = mengungkap, menjelaskan (mekanisme, misteri)",
      optYomi: [
        "{事態|じたい}が{深刻|しんこく}になる{前|まえ}に、{話|はな}し{合|あ}いで{解決策|かいけつさく}を{解明|かいめい}した。",
        "{住宅|じゅうたく}ローンの{申|もう}し{込|こ}みは{収入|しゅうにゅう}を{解明|かいめい}する{書類|しょるい}が{必要|ひつよう}だ。",
        "がんの{仕組|しく}みを{解明|かいめい}することが{治療薬|ちりょうやく}の{開発|かいはつ}につながる。",
        "{有名人|ゆうめいじん}のスキャンダルを{解明|かいめい}した{記事|きじ}がよく{読|よ}まれる。",
      ],
      optArti: [
        "Sebelum keadaan menjadi serius, kami 'mengungkap' solusi lewat diskusi.",
        "Pengajuan KPR memerlukan dokumen yang 'mengungkap' penghasilan.",
        "'Mengungkap' mekanisme kanker akan mengarah pada pengembangan obat.",
        "Artikel yang 'mengungkap' skandal selebritas banyak dibaca.",
      ],
    },
    22: {
      yomi: "【ほほえましい】",
      arti: "ほほえましい = menyenangkan hati, membuat tersenyum (melihat sesuatu yang manis)",
      optYomi: [
        "{池田|いけだ}さんから、{先週|せんしゅう}{無事|ぶじ}{退院|たいいん}したというほほえましい{知|し}らせがあった。",
        "{幼|おさな}い{兄弟|きょうだい}が{仲良|なかよ}く{遊|あそ}ぶ{姿|すがた}は{見|み}ていてほほえましい。",
        "{彼|かれ}は{野球|やきゅう}の{選手|せんしゅ}として、{多|おお}くのほほえましい{業績|ぎょうせき}がある。",
        "{仕事|しごと}で{疲|つか}れたとき、{私|わたし}はお{茶|ちゃ}を{飲|の}むのがいちばんほほえましい。",
      ],
      optArti: [
        "Ada kabar 'membuat tersenyum' dari Ikeda-san bahwa ia sudah keluar rumah sakit dengan selamat minggu lalu.",
        "Melihat kakak-adik kecil bermain akur itu 'membuat tersenyum'.",
        "Sebagai pemain bisbol, ia punya banyak prestasi yang 'membuat tersenyum'.",
        "Saat lelah bekerja, minum teh adalah hal yang paling 'membuat tersenyum' bagi saya.",
      ],
    },
    23: {
      yomi: "【{目安|めやす}】",
      arti: "目安 = patokan, ukuran kira-kira",
      optYomi: [
        "{健康|けんこう}のために{一日|いちにち}に6キロを{目安|めやす}に{歩|ある}くことにしている。",
        "いつも{目安|めやす}にしていた{看板|かんばん}がなかったので、{道|みち}に{迷|まよ}った。",
        "{古|ふる}い{住所|じゅうしょ}を{目安|めやす}に、{友人|ゆうじん}の{引|ひ}っ{越|こ}し{先|さき}を{探|さが}した。",
        "{先生|せんせい}の{書|か}いた{文字|もじ}を{目安|めやす}にして、{習字|しゅうじ}の{練習|れんしゅう}をしている。",
      ],
      optArti: [
        "Demi kesehatan, saya berjalan kaki dengan 'patokan' 6 km sehari.",
        "Papan nama yang selalu saya jadikan 'patokan' tidak ada, jadi saya tersesat.",
        "Dengan alamat lama sebagai 'patokan', saya mencari tempat pindahan teman.",
        "Saya berlatih kaligrafi dengan tulisan guru sebagai 'patokan'.",
      ],
    },
    24: {
      yomi: "【{様相|ようそう}】",
      arti: "様相 = wajah, rupa, keadaan (suatu situasi/zaman)",
      optYomi: [
        "{腹痛|ふくつう}が{治|おさ}まる{様相|ようそう}がないので、{病院|びょういん}で{診察|しんさつ}を{受|う}けた。",
        "ビデオに{撮|と}って、{子|こ}どもの{成長|せいちょう}の{様相|ようそう}を{記録|きろく}に{残|のこ}したい。",
        "{大|おお}きな{事件|じけん}や{事故|じこ}は、その{時代|じだい}の{社会|しゃかい}の{様相|ようそう}を{反映|はんえい}している。",
        "インターンに{参加|さんか}して、{職場|しょくば}の{様相|ようそう}を{知|し}ることができた。",
      ],
      optArti: [
        "Sakit perut tidak menunjukkan 'rupa' mereda, jadi saya periksa ke rumah sakit.",
        "Saya ingin merekam 'rupa' pertumbuhan anak dengan video.",
        "Peristiwa dan kecelakaan besar mencerminkan 'rupa' masyarakat pada zamannya.",
        "Dengan ikut magang, saya bisa mengetahui 'rupa' tempat kerja.",
      ],
    },
    25: {
      yomi: "【{交|まじ}える】",
      arti: "交える = menyelipkan, mencampurkan (lelucon, gerakan, dll.)",
      optYomi: [
        "アルバイトだった{時期|じき}も{交|まじ}えると、この{会社|かいしゃ}で{働|はたら}いて7{年|ねん}になる。",
        "{首脳|しゅのう}{会議|かいぎ}は{冗談|じょうだん}を{交|まじ}えた{和|なご}やかな{雰囲気|ふんいき}で{進|すす}められた。",
        "{心|こころ}を{交|まじ}えて、{彼|かれ}のセーターを{編|あ}んでいる。",
        "{母|はは}の{誕生日|たんじょうび}にメッセージを{交|まじ}えて{花束|はなたば}を{贈|おく}った。",
      ],
      optArti: [
        "Kalau masa kerja paruh waktu juga 'diselipkan', saya sudah 7 tahun bekerja di perusahaan ini.",
        "KTT berlangsung dalam suasana akrab dengan 'diselipi' lelucon.",
        "Saya merajut sweter untuknya dengan 'menyelipkan' hati.",
        "Pada ulang tahun ibu, saya mengirim buket bunga dengan 'menyelipkan' pesan.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{優勝|ゆうしょう}（　）{逃|のが}したが、{石川|いしかわ}{選手|せんしゅ}は{今|こん}{大会|たいかい}で{自己|じこ}ベストを{更新|こうしん}する{好|こう}{成績|せいせき}を{収|おさ}めた。",
      arti: "Meski gagal meraih (…) juara, atlet Ishikawa mencatat hasil bagus di turnamen ini dengan memperbarui rekor pribadinya.",
      optArti: ["bahkan", "(penekanan: justru, memang …)", "sejauh, sekitar", "hanya"],
    },
    27: {
      yomi: "{今度|こんど}の{正月|しょうがつ}{休|やす}みには、{留学|りゅうがく}している{息子|むすこ}も{帰|かえ}ってくる（　）、{久|ひさ}しぶりに{家族|かぞく}{旅行|りょこう}にでも{行|い}こうかと{思|おも}っています。",
      arti: "Libur Tahun Baru nanti, (…) anak laki-laki saya yang sedang belajar di luar negeri juga pulang, jadi saya berpikir untuk pergi berwisata keluarga setelah sekian lama.",
      optArti: ["memang begitu, tetapi", "walaupun hal itu", "karena (mengingat keadaannya)", "meskipun demikian"],
    },
    28: {
      yomi: "{兄|あに}が{会社|かいしゃ}の{採用|さいよう}{面接|めんせつ}{試験|しけん}から{帰|かえ}ってきた。{表情|ひょうじょう}が{明|あか}るいところを{見|み}ると、（　）うまくいったようだ。",
      arti: "Kakak pulang dari wawancara kerja di perusahaan. Melihat wajahnya yang cerah, (…) berjalan lancar.",
      optYomi: ["{仮|かり}に", null, "{必|かなら}ずしも", null],
      optArti: ["seandainya", "masa sih, tidak mungkin", "belum tentu", "sepertinya, rupanya"],
    },
    29: {
      yomi: "このレストランは、{料理|りょうり}はおいしいのだが、{皿|さら}が{安|やす}っぽい。もう{少|すこ}し{良|よ}いものを{使|つか}えない（　）と{思|おも}う。",
      arti: "Restoran ini makanannya enak, tetapi piringnya terkesan murahan. Saya pikir, (…) memakai yang sedikit lebih bagus.",
      optArti: ["apa tidak bisa … ? (ungkapan harapan)", "meskipun", "memang sudah sewajarnya", "padahal (sayang sekali)"],
    },
    30: {
      yomi: "{先生|せんせい}「{木村|きむら}くん、このレポート{読|よ}んだよ。うまくまとめられなかったって{言|い}ってたけど、けっこうよく（　）。」{木村|きむら}「ありがとうございます。」",
      arti: "Guru: \"Kimura, saya sudah baca laporan ini. Katamu tidak bisa merangkumnya dengan baik, tapi (…).\" Kimura: \"Terima kasih.\"",
      optYomi: ["{書|か}けてなきゃ", "{書|か}けてたらいいね", "{書|か}けてるじゃない", "{書|か}けてるかどうかだね"],
      optArti: ["kalau tidak ditulis dengan baik", "semoga tertulis dengan baik ya", "lumayan bagus kok tulisannya!", "soalnya apakah tertulis baik atau tidak"],
    },
    31: {
      yomi: "{駅前|えきまえ}のうどん{屋|や}「やまむら」は、{最近|さいきん}テレビで{紹介|しょうかい}された（　）、{毎日|まいにち}{店|みせ}の{前|まえ}に{長|なが}い{行列|ぎょうれつ}ができている。",
      arti: "Kedai udon \"Yamamura\" di depan stasiun, (…) baru-baru ini diperkenalkan di TV, setiap hari ada antrean panjang di depannya.",
      optArti: ["katanya (karena) …", "kalau soal …", "yang disebut …", "alasannya adalah …"],
    },
    32: {
      yomi: "{今回|こんかい}の{事故|じこ}について{社長|しゃちょう}が{会見|かいけん}を{行|おこな}ったが、あれでは{何|なん}の{説明|せつめい}（　）、わが{社|しゃ}の{信用|しんよう}が{失|うしな}われるだけだ。",
      arti: "Direktur mengadakan konferensi pers tentang kecelakaan ini, tetapi dengan begitu (…) penjelasan apa pun, dan kepercayaan pada perusahaan kita hanya akan hilang.",
      optArti: ["tidak menjadi", "bahkan sama sekali tidak menjadi", "bukannya menjadi", "bukannya juga menjadi"],
    },
    33: {
      yomi: "{小林|こばやし}「ねえ、{今日|きょう}のダンスの{練習|れんしゅう}、{山口|やまぐち}さんも{来|く}るんだよね？」{森|もり}「どうだろう。あの{人|ひと}、{来|く}るって{言|い}っても、（　）だから……。」",
      arti: "Kobayashi: \"Eh, latihan dansa hari ini, Yamaguchi-san juga datang, kan?\" Mori: \"Entahlah. Orang itu, meskipun bilang datang, (…), jadi …\"",
      optYomi: ["{来|き}ても{来|こ}なくても", "{来|く}るか{来|こ}ないか", "{来|き}たり{来|こ}なかったり", "{来|く}るのも{来|こ}ないのも"],
      optArti: ["datang atau tidak (sama saja)", "apakah datang atau tidak", "kadang datang kadang tidak", "datang maupun tidak"],
    },
    34: {
      yomi: "{昨日|きのう}{大学|だいがく}で{声|こえ}をかけられたサークルの{勧誘|かんゆう}には{困|こま}った。{強引|ごういん}に{話|はなし}を{進|すす}められて、{危|あや}うく{入会|にゅうかい}（　）。",
      arti: "Saya kerepotan dengan ajakan klub yang menyapa saya di kampus kemarin. Pembicaraan didorong secara paksa, dan saya (…) masuk anggota.",
      optArti: ["hampir saja dibuat (terpaksa)", "tidak mungkin dibuat", "kukira tidak dipaksakan", "kuanggap tidak jadi"],
    },
    35: {
      yomi: "{高橋|たかはし}「{林|はやし}さん、ギター{教室|きょうしつ}{探|さが}してるって{聞|き}いてたけど、{見|み}つかった？」{林|はやし}「いえ、まだなんです。」{高橋|たかはし}「よかったら、{私|わたし}が{通|かよ}ってるギター{教室|きょうしつ}、{見学|けんがく}してみない？{見学|けんがく}したからって、（　）し、どう？」",
      arti: "Takahashi: \"Hayashi-san, katanya kamu sedang mencari kursus gitar, sudah ketemu?\" Hayashi: \"Belum.\" Takahashi: \"Kalau mau, coba lihat-lihat kursus gitar tempat saya belajar? Meskipun sudah melihat-lihat, (…), jadi bagaimana?\"",
      optYomi: ["{入|はい}りたがるだけじゃない", "{入|はい}らせないわけにはいかない", "{入|はい}りたくないだけかもしれない", "{入|はい}らなきゃいけないってわけじゃない"],
      optArti: ["bukan hanya ingin masuk", "tidak bisa tidak mengizinkan masuk", "mungkin hanya tidak ingin masuk", "bukan berarti harus masuk"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "X{医院|いいん}は、{患者|かんじゃ}を＿＿ ＿＿ ★ ＿＿{近々|ちかぢか}{予約制|よやくせい}を{導入|どうにゅう}するらしい。",
      arti: "Kabarnya Klinik X dalam waktu dekat akan menerapkan sistem reservasi agar bisa memeriksa pasien tanpa membuat mereka menunggu.",
      optYomi: ["{待|ま}たせる", "{診察|しんさつ}できる", null, null],
      optArti: ["membuat menunggu", "bisa memeriksa", "agar", "tanpa"],
    },
    37: {
      yomi: "{昨日|きのう}、{友人|ゆうじん}から{野菜|やさい}ジュースをたくさんもらった。{一人|ひとり}{暮|ぐ}らしだとインスタント{食品|しょくひん}ばかり{食|た}べてしまって＿＿ ＿＿ ★ ＿＿ありがたい。",
      arti: "Kemarin saya mendapat banyak jus sayur dari teman. Kalau hidup sendiri, saya jadi makan makanan instan saja dan cenderung kekurangan sayur, justru karena itu pemberian ini sangat saya syukuri.",
      optYomi: [null, null, null, "{野菜|やさい}{不足|ぶそく}"],
      optArti: ["justru karena", "menjadi", "cenderung", "kekurangan sayur"],
    },
    38: {
      yomi: "（ホームページで）Q：{洗剤|せんざい}をたくさん{使|つか}ったほうが、{洗濯物|せんたくもの}がきれいになりますか。A：{洗濯物|せんたくもの}を＿＿ ＿＿ ★ ＿＿{悪臭|あくしゅう}の{原因|げんいん}にもなります。{適量|てきりょう}を{守|まも}りましょう。",
      arti: "(Di situs web) T: Apakah cucian jadi lebih bersih kalau memakai banyak deterjen? J: Untuk mencuci bersih cucian, kalau ditanya apakah cukup memasukkan banyak deterjen, tidak demikian; malah bisa tidak terbilas tuntas dan menjadi penyebab bau tak sedap. Patuhi takaran yang sesuai.",
      optYomi: ["{洗剤|せんざい}をたくさん{入|い}れればいいかといえば", "{逆|ぎゃく}にすすぎ{切|き}れなかったりして", "きれいに{洗|あら}うには", null],
      optArti: ["kalau ditanya apakah cukup memasukkan banyak deterjen", "malah tidak terbilas tuntas", "untuk mencuci bersih", "tidak demikian"],
    },
    39: {
      yomi: "この{町|まち}には、{大正|たいしょう}{初期|しょき}に{建|た}てられた{洋館|ようかん}があるらしい。{前々|まえまえ}から＿＿ ★ ＿＿ ＿＿{帰|かえ}ることはできない。",
      arti: "Kabarnya di kota ini ada rumah bergaya Barat yang dibangun pada awal era Taisho. Bagi saya yang sejak lama tertarik pada arsitektur modern, setelah mengetahuinya, saya tidak bisa pulang tanpa melihat rumah itu.",
      optYomi: ["{私|わたし}としては", "{近代|きんだい}{建築|けんちく}に{興味|きょうみ}がある", "その{洋館|ようかん}を{見|み}ずに", "それを{知|し}ったからには"],
      optArti: ["bagi saya", "tertarik pada arsitektur modern", "tanpa melihat rumah bergaya Barat itu", "karena sudah mengetahuinya"],
    },
    40: {
      yomi: "{私|わたし}は、＿＿ ★ ＿＿ ＿＿と{思|おも}い、{校内|こうない}に{畑|はたけ}を{作|つく}って{生徒|せいと}たちに{野菜|やさい}を{育|そだ}てさせることを{校長|こうちょう}に{提案|ていあん}した。",
      arti: "Saya berpikir, kalau memanen lalu memakan sayur yang ditanam sendiri bisa menjadi pemicu untuk memikirkan pertanian sebagai sesuatu yang dekat, maka saya mengusulkan kepada kepala sekolah untuk membuat kebun di sekolah dan menyuruh siswa menanam sayur.",
      optYomi: ["{農業|のうぎょう}を{身近|みぢか}なものとして", "{食|た}べるということが", "{考|かんが}えるきっかけになれば", "{育|そだ}てた{野菜|やさい}を{収穫|しゅうかく}して"],
      optArti: ["pertanian sebagai sesuatu yang dekat", "hal memakan (itu)", "kalau bisa menjadi pemicu untuk memikirkan", "memanen sayur yang ditanam"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optArti: ["sisa, nanti", "lagi, juga", "pertama-tama", "satu lagi"],
    },
    42: {
      optYomi: ["{同|おな}じ", "{別|べつ}の", null, null],
      optArti: ["sama", "lain, berbeda", "seperti itu", "yang waktu itu"],
    },
    43: {
      optArti: ["ada (lalu)", "kalau (sudah)", "karena", "seandainya pun"],
    },
    44: {
      optArti: ["sudah tahu", "apakah mulai paham?", "sepertinya paham", "seharusnya akan mulai paham"],
    },
    45: {
      optYomi: ["しかしその{一方|いっぽう}で", null, "{例|たと}えばこのように", null],
      optArti: ["namun di sisi lain", "meskipun begitu, tidak berarti", "misalnya seperti ini", "kalau boleh dibilang, malah"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{想像力|そうぞうりょく}を{鍛|きた}えることについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang melatih daya imajinasi?",
      optYomi: [
        "{経験|けいけん}からつくられた{枠|わく}を{捨|す}てなければならない。",
        "{経験|けいけん}からつくられた{枠|わく}を{意識|いしき}しないことが{大切|たいせつ}だ。",
        "{経験|けいけん}からつくられた{枠|わく}を{取|と}り{除|のぞ}けることが{大切|たいせつ}だ。",
        "{経験|けいけん}を{積|つ}み{重|かさ}ねて{枠|わく}をより{強|つよ}いものにしなければならない。",
      ],
      optArti: [
        "Kerangka yang terbentuk dari pengalaman harus dibuang.",
        "Penting untuk tidak menyadari kerangka yang terbentuk dari pengalaman.",
        "Penting untuk bisa menyingkirkan kerangka yang terbentuk dari pengalaman.",
        "Harus menumpuk pengalaman agar kerangka menjadi lebih kuat.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{世界|せかい}{各地|かくち}にある{近代的|きんだいてき}な{住|す}まいには、{力強|ちからづよ}さと{豊|ゆた}かさが{感|かん}じられる。",
        "その{土地|とち}にもとからある{住|す}まいには、{人間|にんげん}{本来|ほんらい}の{欲求|よっきゅう}が{表|あらわ}れている。",
        "{人間|にんげん}の{根源的|こんげんてき}な{欲求|よっきゅう}から{生|う}まれた{住|す}まいは、{生活|せいかつ}の{多様|たよう}さに{対応|たいおう}できない。",
        "{生|い}きること、{住|す}まうことへの{欲求|よっきゅう}は、その{土地|とち}の{生活|せいかつ}や{気候|きこう}{風土|ふうど}に{影響|えいきょう}されない。",
      ],
      optArti: [
        "Hunian modern di berbagai belahan dunia terasa kuat dan kaya.",
        "Hunian yang sejak dulu ada di suatu daerah memperlihatkan keinginan asli manusia.",
        "Hunian yang lahir dari keinginan paling mendasar manusia tidak bisa menyesuaikan diri dengan keragaman kehidupan.",
        "Keinginan untuk hidup dan bertempat tinggal tidak dipengaruhi kehidupan maupun iklim dan alam daerah itu.",
      ],
    },
    48: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin dikatakan penulis dalam tulisan ini?",
      optYomi: [
        "{喜|よろこ}びを{感|かん}じられても、{社会|しゃかい}とのつながりが{感|かん}じられない{働|はたら}き{方|かた}は{見直|みなお}すべきだ。",
        "{働|はたら}く{喜|よろこ}びを{得|え}るには、{苦|くる}しさに{立|た}ち{向|む}かっていかなければならない。",
        "{苦|くる}しさを{感|かん}じないで{済|す}むように、{働|はたら}き{方|かた}の{改善|かいぜん}を{求|もと}めていかなければならない。",
        "{苦|くる}しさを{受|う}け{止|と}めつつ、{喜|よろこ}びが{感|かん}じられるような{働|はたら}き{方|かた}を{目指|めざ}すべきだ。",
      ],
      optArti: [
        "Cara kerja yang terasa menyenangkan tetapi tidak terasa terhubung dengan masyarakat harus ditinjau ulang.",
        "Untuk mendapat kegembiraan bekerja, kita harus menghadapi kesulitan.",
        "Kita harus terus menuntut perbaikan cara kerja agar tidak perlu merasakan kesulitan.",
        "Sambil menerima kesulitan, kita harus mengupayakan cara kerja yang bisa memberi rasa gembira.",
      ],
    },
    49: {
      yomi: "{情報化|じょうほうか}{社会|しゃかい}におけるブランドについて、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa yang dikatakan penulis tentang merek dalam masyarakat informasi?",
      optYomi: [
        "{買|か}い{手|て}の{購買|こうばい}{意欲|いよく}を{高|たか}めるきっかけになっている。",
        "{買|か}い{手|て}の{商品|しょうひん}{選択|せんたく}におけるジレンマを{増大|ぞうだい}させている。",
        "{買|か}い{手|て}が{商品|しょうひん}を{選択|せんたく}する{際|さい}の{判断|はんだん}{材料|ざいりょう}になっている。",
        "{企業|きぎょう}や{商品|しょうひん}の{情報|じょうほう}が{買|か}い{手|て}に{誤|あやま}って{伝|つた}わるリスクを{軽減|けいげん}している。",
      ],
      optArti: [
        "Menjadi pemicu yang meningkatkan minat beli pembeli.",
        "Memperbesar dilema pembeli dalam memilih produk.",
        "Menjadi bahan pertimbangan saat pembeli memilih produk.",
        "Mengurangi risiko informasi perusahaan dan produk tersampaikan secara keliru kepada pembeli.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{無理|むり}があるように{思|おも}うのはなぜか。",
      arti: "Mengapa penulis merasa \"kurang masuk akal\"?",
      optYomi: [
        "クマの{餌|えさ}になる{種子|しゅし}は{一種類|いっしゅるい}だけではないから。",
        "クマの{餌|えさ}になる{種子|しゅし}の{種類|しゅるい}が{変化|へんか}しているから。",
        "クマの{餌|えさ}になる{種子|しゅし}の{凶作|きょうさく}はこれまでもあったから。",
        "クマの{餌|えさ}になる{種子|しゅし}の{凶作|きょうさく}は{昔|むかし}のほうが{深刻|しんこく}だったから。",
      ],
      optArti: [
        "Karena biji-bijian yang menjadi makanan beruang tidak hanya satu jenis.",
        "Karena jenis biji-bijian yang menjadi makanan beruang berubah.",
        "Karena gagal panen biji-bijian makanan beruang sudah terjadi sejak dulu.",
        "Karena gagal panen biji-bijian makanan beruang dulu lebih parah.",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}によると、クマが{山|やま}から{降|お}りてくるのはなぜか。",
      arti: "Menurut penulis, mengapa beruang turun dari gunung?",
      optYomi: [
        "{人里|ひとざと}にも{奥山|おくやま}と{同|おな}じような{餌|えさ}があるから。",
        "{人里|ひとざと}のほうが{好|この}みの{餌|えさ}が{容易|ようい}に{得|え}られるから。",
        "{人里|ひとざと}でしか{餌|えさ}を{得|え}られなくなったから。",
        "{人里|ひとざと}ではクマ{同士|どうし}の{力|ちから}{関係|かんけい}にかかわらず{餌|えさ}を{得|え}られるから。",
      ],
      optArti: [
        "Karena di permukiman juga ada makanan yang sama seperti di pegunungan dalam.",
        "Karena di permukiman makanan kesukaan lebih mudah didapat.",
        "Karena makanan hanya bisa didapat di permukiman.",
        "Karena di permukiman makanan bisa didapat tanpa memandang hubungan kekuatan antarberuang.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{野生|やせい}{動物|どうぶつ}の{力|ちから}{関係|かんけい}は、{栄養|えいよう}{状態|じょうたい}によって{決|き}まる。",
        "{野生|やせい}{動物|どうぶつ}の{行動|こうどう}の{変化|へんか}は、{人間|にんげん}の{行為|こうい}に{原因|げんいん}がある。",
        "{野生|やせい}{動物|どうぶつ}の{生態|せいたい}が{変化|へんか}したのは、{人間|にんげん}が{生活|せいかつ}{環境|かんきょう}を{脅|おびや}かしたためだ。",
        "{野生|やせい}{動物|どうぶつ}と{人間|にんげん}が{共存|きょうぞん}していくには、ゴミの{増加|ぞうか}を{抑|おさ}える{必要|ひつよう}がある。",
      ],
      optArti: [
        "Hubungan kekuatan antarsatwa liar ditentukan oleh kondisi gizinya.",
        "Perubahan perilaku satwa liar disebabkan oleh tindakan manusia.",
        "Ekologi satwa liar berubah karena manusia mengancam lingkungan hidupnya.",
        "Agar satwa liar dan manusia bisa hidup berdampingan, pertambahan sampah perlu ditekan.",
      ],
    },
    53: {
      yomi: "{筆者|ひっしゃ}によると、{歴史|れきし}を{研究|けんきゅう}する{人|ひと}はまずどうすべきか。",
      arti: "Menurut penulis, apa yang pertama-tama harus dilakukan orang yang meneliti sejarah?",
      optYomi: [
        "{過去|かこ}は{一部|いちぶ}しか{把握|はあく}できないと{自覚|じかく}しなければならない。",
        "{過去|かこ}の{一面|いちめん}ではなく、{全体|ぜんたい}を{再現|さいげん}しようとしなければならない。",
        "{過去|かこ}を{生|い}きた{人|ひと}たちの{気持|きも}ちは{理解|りかい}できないと{自覚|じかく}しなければならない。",
        "{記憶|きおく}や{資料|しりょう}をもとに、{過去|かこ}を{正確|せいかく}に{再現|さいげん}しようとしなければならない。",
      ],
      optArti: [
        "Harus menyadari bahwa masa lalu hanya bisa dipahami sebagian.",
        "Harus berusaha merekonstruksi keseluruhan, bukan satu sisi masa lalu.",
        "Harus menyadari bahwa perasaan orang-orang di masa lalu tidak bisa dipahami.",
        "Harus berusaha merekonstruksi masa lalu secara akurat berdasarkan ingatan dan bahan.",
      ],
    },
    54: {
      yomi: "そうした{手続|てつづ}きを{踏|ふ}むとはどうすることか。",
      arti: "Apa yang dimaksud dengan \"menempuh prosedur seperti itu\"?",
      optYomi: [
        "{文字|もじ}{表象|ひょうしょう}や{物体|ぶったい}の{分析|ぶんせき}をして、{問題|もんだい}を{解決|かいけつ}する。",
        "{価値|かち}のある{史資料|しりょう}に{多|おお}く{接|せっ}して、{新|あら}たな{問題|もんだい}を{見|み}つける。",
        "{人々|ひとびと}が{関心|かんしん}をもつ{問題|もんだい}を{理解|りかい}し、それに{応|おう}じた{史資料|しりょう}を{探|さが}す。",
        "{興味|きょうみ}を{抱|いだ}いた{問題|もんだい}について{問|と}いかけ、{文字|もじ}{表象|ひょうしょう}や{物体|ぶったい}を{見|み}る。",
      ],
      optArti: [
        "Menganalisis tulisan dan benda, lalu memecahkan masalah.",
        "Banyak bersentuhan dengan bahan sejarah yang berharga, lalu menemukan masalah baru.",
        "Memahami masalah yang diminati orang, lalu mencari bahan sejarah yang sesuai.",
        "Mengajukan pertanyaan tentang masalah yang diminati, lalu melihat tulisan dan benda.",
      ],
    },
    55: {
      yomi: "{歴史像|れきしぞう}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mengenai gambaran sejarah, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{再|さい}{構築|こうちく}を{繰|く}り{返|かえ}すことで{明|あき}らかになる。",
        "{現在|げんざい}を{生|い}きる{者|もの}による{解釈|かいしゃく}が{実態|じったい}に{最|もっと}も{近|ちか}い。",
        "{様々|さまざま}な{解釈|かいしゃく}によって{実態|じったい}に{近|ちか}づくことができる。",
        "{異|こと}なる{解釈|かいしゃく}によって{再|さい}{構築|こうちく}される{可能性|かのうせい}がある。",
      ],
      optArti: [
        "Menjadi jelas dengan merekonstruksi berulang kali.",
        "Tafsiran orang yang hidup di masa kini paling mendekati kenyataan.",
        "Dengan berbagai tafsiran, kita bisa mendekati kenyataan.",
        "Ada kemungkinan direkonstruksi ulang dengan tafsiran yang berbeda.",
      ],
    },
    56: {
      yomi: "{近代的|きんだいてき}な{社会|しゃかい}{革命|かくめい}はどのような{社会|しゃかい}をめざしたか。",
      arti: "Masyarakat seperti apa yang dituju revolusi sosial modern?",
      optYomi: [
        "{個人|こじん}の{出自|しゅつじ}の{違|ちが}いが{存在|そんざい}しない{社会|しゃかい}。",
        "{受|う}けた{教育|きょういく}によって{人生|じんせい}が{決|き}まる{社会|しゃかい}。",
        "{誰|だれ}でも{平等|びょうどう}な{生活|せいかつ}が{送|おく}れる{社会|しゃかい}。",
        "{誰|だれ}にでも{可能性|かのうせい}が{平等|びょうどう}に{与|あた}えられる{社会|しゃかい}。",
      ],
      optArti: [
        "Masyarakat tanpa perbedaan asal-usul individu.",
        "Masyarakat di mana hidup ditentukan oleh pendidikan yang diterima.",
        "Masyarakat di mana siapa pun bisa menjalani kehidupan yang setara.",
        "Masyarakat di mana siapa pun diberi kesempatan yang setara.",
      ],
    },
    57: {
      yomi: "{自分|じぶん}が「やりたい」ことをみずからに{問|と}わざるをえないのは、なぜか。",
      arti: "Mengapa orang mau tak mau harus bertanya pada diri sendiri apa yang \"ingin dilakukan\"?",
      optYomi: [
        "ひとに{決|き}められたことの{中|なか}には{自分|じぶん}の「やりたい」ことがないから。",
        "{自分|じぶん}が「やりたい」ことでなければ、{実現|じつげん}しても{意味|いみ}がないから。",
        "{自分|じぶん}の{存在|そんざい}{価値|かち}は{自分|じぶん}で{明|あき}らかにしなければならないから。",
        "{自分|じぶん}の{存在|そんざい}{価値|かち}は{自分|じぶん}ができることの{中|なか}から{探|さが}すしかないから。",
      ],
      optArti: [
        "Karena di antara hal yang ditentukan orang lain tidak ada yang \"ingin dilakukan\".",
        "Karena kalau bukan hal yang \"ingin dilakukan\", meski terwujud pun tidak bermakna.",
        "Karena nilai keberadaan diri harus diperjelas oleh diri sendiri.",
        "Karena nilai keberadaan diri hanya bisa dicari dari hal yang bisa dilakukan sendiri.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    58: {
      yomi: "①{大|おお}きな{問題|もんだい}とはどのような{問題|もんだい}か。",
      arti: "Apa yang dimaksud dengan ① \"masalah besar\"?",
      optYomi: [
        "{特定|とくてい}の{生物|せいぶつ}{種|しゅ}だけが{影響|えいきょう}を{受|う}けるような{環境|かんきょう}{変化|へんか}を{起|お}こしていること。",
        "{大|おお}きな{環境|かんきょう}{変化|へんか}を{起|お}こして、{多|おお}くの{生物|せいぶつ}{種|しゅ}を{絶滅|ぜつめつ}させてしまったこと。",
        "{急速|きゅうそく}な{環境|かんきょう}{変化|へんか}を{起|お}こして、{多|おお}くの{生物|せいぶつ}{種|しゅ}を{絶滅|ぜつめつ}させかねないこと。",
        "{影響|えいきょう}が{広範囲|こうはんい}に{及|およ}ぶような{大|おお}きな{環境|かんきょう}{変化|へんか}を{起|お}こしたこと。",
      ],
      optArti: [
        "Menimbulkan perubahan lingkungan yang hanya memengaruhi spesies tertentu.",
        "Telah menimbulkan perubahan lingkungan besar dan memusnahkan banyak spesies.",
        "Menimbulkan perubahan lingkungan yang cepat sehingga bisa memusnahkan banyak spesies.",
        "Telah menimbulkan perubahan lingkungan besar yang dampaknya meluas.",
      ],
    },
    59: {
      yomi: "②このこととは{何|なに}か。",
      arti: "Apa yang dimaksud dengan ② \"hal ini\"?",
      optYomi: [
        "{多|おお}くの{生物|せいぶつ}が{滅|ほろ}びる{事態|じたい}が{起|お}きても、{耐|た}えうる{生物|せいぶつ}{種|しゅ}がいたこと。",
        "どんな{生物|せいぶつ}にも{新|あら}たな{環境|かんきょう}に{適応|てきおう}する{力|ちから}があったこと。",
        "{生態系|せいたいけい}が{乱|みだ}れた{結果|けっか}、{個々|ここ}の{生物|せいぶつ}がさらに{強|つよ}くなったこと。",
        "{生態系|せいたいけい}が{壊|こわ}れても、すぐに{元|もと}のように{修復|しゅうふく}されたこと。",
      ],
      optArti: [
        "Meski terjadi peristiwa yang memusnahkan banyak makhluk, ada spesies yang mampu bertahan.",
        "Makhluk hidup apa pun memiliki kemampuan beradaptasi dengan lingkungan baru.",
        "Akibat ekosistem kacau, masing-masing makhluk menjadi lebih kuat.",
        "Meski ekosistem rusak, segera pulih seperti semula.",
      ],
    },
    60: {
      yomi: "{人類|じんるい}が{滅|ほろ}びた{場合|ばあい}の{生態系|せいたいけい}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang ekosistem jika umat manusia punah?",
      optYomi: [
        "{環境|かんきょう}を{自|みずか}ら{変|か}えることで{生|い}き{残|のこ}る{生物|せいぶつ}{種|しゅ}が{現|あらわ}れる。",
        "{人類|じんるい}が{繁栄|はんえい}していた{以前|いぜん}の{生態系|せいたいけい}に{戻|もど}る。",
        "{新|あら}たな{環境|かんきょう}{変化|へんか}が{起|お}きず{安定|あんてい}する。",
        "{新|あら}たに{繁栄|はんえい}する{生物|せいぶつ}{種|しゅ}が{現|あらわ}れる。",
      ],
      optArti: [
        "Akan muncul spesies yang bertahan dengan mengubah lingkungan sendiri.",
        "Kembali ke ekosistem sebelum umat manusia berjaya.",
        "Stabil tanpa terjadi perubahan lingkungan baru.",
        "Akan muncul spesies baru yang berjaya.",
      ],
    },
    61: {
      yomi: "{生態系|せいたいけい}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mengenai ekosistem, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{人間|にんげん}{中心|ちゅうしん}の{見方|みかた}とは{別|べつ}の{視点|してん}で{評価|ひょうか}することもできる。",
        "{人間|にんげん}{以外|いがい}を{基準|きじゅん}にして{議論|ぎろん}するべきである。",
        "{生態系|せいたいけい}の{善|よ}し{悪|あ}しは{環境|かんきょう}を{基準|きじゅん}にして{考|かんが}えるべきである。",
        "{生態系|せいたいけい}の{評価|ひょうか}は{時代|じだい}とともに{変|か}わっていくものだ。",
      ],
      optArti: [
        "Ekosistem juga bisa dinilai dari sudut pandang selain yang berpusat pada manusia.",
        "Harus dibahas dengan patokan selain manusia.",
        "Baik-buruknya ekosistem harus dipikirkan dengan lingkungan sebagai patokan.",
        "Penilaian ekosistem berubah seiring zaman.",
      ],
    },

    // ── 問題11：統合理解 ──
    62: {
      yomi: "「{決|き}める{力|ちから}」のある{人|ひと}について、AとBはどのように{述|の}べているか。",
      arti: "Apa yang dikatakan A dan B tentang orang yang memiliki \"kemampuan memutuskan\"?",
      optYomi: [
        "AもBも、{時間|じかん}を{十分|じゅうぶん}にかけて{慎重|しんちょう}に{判断|はんだん}すると{述|の}べている。",
        "AもBも、どのような{場面|ばめん}でも{失敗|しっぱい}を{恐|おそ}れないと{述|の}べている。",
        "Aは{迷|まよ}いすぎることなく{適切|てきせつ}に{判断|はんだん}できると{述|の}べ、Bは{素早|すばや}く{決断|けつだん}できると{述|の}べている。",
        "Aは{決断|けつだん}が{早|はや}すぎたり{遅|おそ}すぎたりしないと{述|の}べ、Bはリスクを{回避|かいひ}することができると{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama mengatakan orang itu menimbang dengan hati-hati dan cukup waktu.",
        "A dan B sama-sama mengatakan orang itu tidak takut gagal dalam situasi apa pun.",
        "A mengatakan orang itu bisa menimbang dengan tepat tanpa terlalu ragu, B mengatakan orang itu bisa memutuskan dengan cepat.",
        "A mengatakan keputusannya tidak terlalu cepat atau terlalu lambat, B mengatakan orang itu bisa menghindari risiko.",
      ],
    },
    63: {
      yomi: "「{決|き}める{力|ちから}」のある{人|ひと}になるために{必要|ひつよう}なことについて、AとBの{認識|にんしき}で{共通|きょうつう}していることは{何|なに}か。",
      arti: "Mengenai hal yang diperlukan untuk menjadi orang yang memiliki \"kemampuan memutuskan\", apa kesamaan pandangan A dan B?",
      optYomi: [
        "{他人|たにん}の{意見|いけん}に{惑|まど}わされてはいけない。",
        "{複数|ふくすう}の{視点|してん}から{問題|もんだい}を{検討|けんとう}することが{大切|たいせつ}だ。",
        "いつも{最善|さいぜん}の{結果|けっか}を{得|え}ようとするべきではない。",
        "{情報|じょうほう}を{頼|たよ}りにせず、{自身|じしん}の{意見|いけん}に{自信|じしん}を{持|も}つべきだ。",
      ],
      optArti: [
        "Tidak boleh terombang-ambing oleh pendapat orang lain.",
        "Penting untuk menimbang masalah dari beberapa sudut pandang.",
        "Tidak seharusnya selalu berusaha mendapat hasil terbaik.",
        "Harus percaya diri pada pendapat sendiri tanpa bergantung pada informasi.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    64: {
      yomi: "①あの{自由|じゆう}とはどのような{状態|じょうたい}か。",
      arti: "Keadaan seperti apa yang dimaksud dengan ① \"kebebasan itu\"?",
      optYomi: [
        "{現実|げんじつ}{世界|せかい}と{想像|そうぞう}の{世界|せかい}が{混|ま}じり{合|あ}った{状態|じょうたい}。",
        "{独|ひと}りの{時間|じかん}が{十分|じゅうぶん}にある{状態|じょうたい}。",
        "{自由|じゆう}に{時間|じかん}が{使|つか}えるような{暇|ひま}な{状態|じょうたい}。",
        "{夢中|むちゅう}になって{時間|じかん}を{忘|わす}れるような{状態|じょうたい}。",
      ],
      optArti: [
        "Keadaan di mana dunia nyata dan dunia imajinasi bercampur.",
        "Keadaan memiliki cukup waktu sendirian.",
        "Keadaan senggang sehingga bisa memakai waktu sesuka hati.",
        "Keadaan begitu asyik hingga lupa waktu.",
      ],
    },
    65: {
      yomi: "②かわいそうな{子|こ}どもたちとあるが、{何|なに}がかわいそうなのか。",
      arti: "Tertulis ② \"anak-anak yang kasihan\"; apa yang membuat mereka kasihan?",
      optYomi: [
        "ひとりぼっちを{怖|こわ}がっていること。",
        "{自由|じゆう}を{求|もと}めようとは{思|おも}っていないこと。",
        "{人|ひと}とつながっていても{自由|じゆう}だと{思|おも}っていること。",
        "{孤独|こどく}になることは{恐|おそ}ろしいと{教|おし}えられてきたこと。",
      ],
      optArti: [
        "Mereka takut sendirian.",
        "Mereka tidak berpikir untuk mencari kebebasan.",
        "Mereka mengira tetap bebas meski terhubung dengan orang lain.",
        "Mereka diajari bahwa menjadi sendiri itu menakutkan.",
      ],
    },
    66: {
      yomi: "③{偉大|いだい}な{作品|さくひん}について、{筆者|ひっしゃ}が{述|の}べていることに{合|あ}うのはどれか。",
      arti: "Mengenai ③ \"karya agung\", mana yang sesuai dengan yang dikatakan penulis?",
      optYomi: [
        "{孤独|こどく}になれば、{人|ひと}と{違|ちが}う{発想|はっそう}が{生|う}まれる。",
        "{孤独|こどく}な{状態|じょうたい}がなければ、{偉大|いだい}な{作品|さくひん}は{生|う}まれない。",
        "{孤独|こどく}な{者|もの}でなければ、{偉大|いだい}な{作品|さくひん}に{共感|きょうかん}できない。",
        "{孤独|こどく}な{時間|じかん}が{多|おお}ければ、{偉大|いだい}な{作品|さくひん}を{生|う}むことができる。",
      ],
      optArti: [
        "Kalau sendiri, akan lahir ide yang berbeda dari orang lain.",
        "Tanpa keadaan sendiri, karya agung tidak akan lahir.",
        "Kalau bukan orang yang kesepian, tidak bisa bersimpati pada karya agung.",
        "Kalau banyak waktu sendiri, bisa melahirkan karya agung.",
      ],
    },
    67: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin dikatakan penulis?",
      optYomi: [
        "{創造的|そうぞうてき}な{時間|じかん}の{使|つか}い{方|かた}を{知|し}るには{孤独|こどく}になるべきだ。",
        "{孤独|こどく}は{創造力|そうぞうりょく}を{生|う}み{出|だ}すための{貴|とうと}い{機会|きかい}だ。",
        "{孤独|こどく}になることで、{人|ひと}とのつながりのよさがわかる。",
        "{孤独|こどく}のよくないイメージを{消|け}し、{自由|じゆう}との{違|ちが}いを{認識|にんしき}すべきだ。",
      ],
      optArti: [
        "Untuk mengetahui cara memakai waktu secara kreatif, kita harus menyendiri.",
        "Kesendirian adalah kesempatan berharga untuk melahirkan daya cipta.",
        "Dengan menyendiri, kita menyadari indahnya hubungan dengan orang lain.",
        "Kita harus menghapus citra buruk kesendirian dan menyadari bedanya dengan kebebasan.",
      ],
    },

    // ── 問題13：情報検索 ──
    68: {
      yomi: "ロンさんは、{市内|しない}{建築|けんちく}めぐり「{江戸|えど}{時代|じだい}の{建築|けんちく}」に{参加|さんか}したいと{思|おも}っている。ロンさんが{留意|りゅうい}しなければならないことはどれか。",
      arti: "Ron-san ingin ikut tur arsitektur dalam kota \"Arsitektur Zaman Edo\". Hal apa yang harus diperhatikan Ron-san?",
      optYomi: [
        "{開催|かいさい}{日|び}{当日|とうじつ}は、{自身|じしん}で{直接|ちょくせつ}{見学先|けんがくさき}に{向|む}かわなければならない。",
        "{特別展|とくべつてん}の{解説|かいせつ}も{聞|き}きたい{場合|ばあい}、{開催|かいさい}{日|び}の{前日|ぜんじつ}までに{連絡|れんらく}する{必要|ひつよう}がある。",
        "{受|う}け{付|つ}けは{先着|せんちゃく}{順|じゅん}のため、できるだけ{早|はや}く{申|もう}し{込|こ}まなければならない。",
        "{参加|さんか}が{決|き}まったら、{開催|かいさい}{日|び}の1{週間|しゅうかん}{前|まえ}までに{参加費|さんかひ}を{支払|しはら}う{必要|ひつよう}がある。",
      ],
      optArti: [
        "Pada hari pelaksanaan, ia harus langsung pergi sendiri ke tempat kunjungan.",
        "Jika ingin mendengar penjelasan pameran khusus juga, ia perlu menghubungi paling lambat sehari sebelum pelaksanaan.",
        "Karena pendaftaran berdasarkan urutan kedatangan, ia harus mendaftar secepat mungkin.",
        "Jika sudah dipastikan ikut, ia perlu membayar biaya paling lambat satu minggu sebelum pelaksanaan.",
      ],
    },
    69: {
      yomi: "アグネスさんは7{月|がつ}の{特別|とくべつ}{講座|こうざ}「白船山{遺跡|いせき}{発掘|はっくつ}の{歴史|れきし}」の{再|さい}{募集|ぼしゅう}に{申|もう}し{込|こ}もうと{考|かんが}えている。7{月|がつ}{27日|にじゅうしちにち}の{回|かい}を{希望|きぼう}しているが、どのように{申|もう}し{込|こ}まなければならないか。また、{受講|じゅこう}できることになった{場合|ばあい}、{受講料|じゅこうりょう}の{支払|しはら}いはどうすればよいか。",
      arti: "Agnes-san berencana mendaftar pada perekrutan ulang kuliah khusus bulan Juli \"Sejarah Penggalian Situs Shirafuneyama\". Ia menginginkan sesi 27 Juli; bagaimana ia harus mendaftar? Lalu jika bisa ikut, bagaimana cara membayar biaya kuliahnya?",
      optYomi: [
        "7{月|がつ}{24日|にじゅうよっか}までに{電話|でんわ}で{申|もう}し{込|こ}み、{当日|とうじつ}1,000{円|えん}を{会場|かいじょう}で{支払|しはら}う。",
        "7{月|がつ}{24日|にじゅうよっか}までに{電話|でんわ}で{申|もう}し{込|こ}み、{当日|とうじつ}1,800{円|えん}を{会場|かいじょう}で{支払|しはら}う。",
        "7{月|がつ}{27日|にじゅうしちにち}までに{電話|でんわ}で{申|もう}し{込|こ}み、{当日|とうじつ}1,000{円|えん}を{会場|かいじょう}で{支払|しはら}う。",
        "7{月|がつ}{27日|にじゅうしちにち}までに{電話|でんわ}で{申|もう}し{込|こ}み、{当日|とうじつ}1,800{円|えん}を{会場|かいじょう}で{支払|しはら}う。",
      ],
      optArti: [
        "Mendaftar lewat telepon paling lambat 24 Juli, dan membayar 1.000 yen di tempat pada hari itu.",
        "Mendaftar lewat telepon paling lambat 24 Juli, dan membayar 1.800 yen di tempat pada hari itu.",
        "Mendaftar lewat telepon paling lambat 27 Juli, dan membayar 1.000 yen di tempat pada hari itu.",
        "Mendaftar lewat telepon paling lambat 27 Juli, dan membayar 1.800 yen di tempat pada hari itu.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：人間とは月のようなもの ──
    "7": {
      yomi: `この{世|よ}を{生|い}き{抜|ぬ}く{上|うえ}で{知|し}っておくべき{言葉|ことば}がある。

まず{一|ひと}つは、「{人間|にんげん}は{謎|なぞ}」だということ。

{人|ひと}は{自分|じぶん}ではなんでもわかっているつもりでも、{本当|ほんとう}は{自分|じぶん}{自身|じしん}のことをよく{理解|りかい}できていないものだ。

{自分|じぶん}で{自分|じぶん}のことを{理解|りかい}できていないのに、どうして{他人|たにん}のことを{理解|りかい}できるのか。これが、[41]{一|ひと}つ。

それからもう{一|ひと}つは「{人間|にんげん}は{月|つき}のような{存在|そんざい}だ」ということ。{自分|じぶん}が{他人|たにん}に{見|み}せている「{自分|じぶん}」は、{相手|あいて}に{応|おう}じて{見|み}せる「{光|ひか}り{輝|かがや}いている{部分|ぶぶん}」であって、ほかのところに{行|い}けば、また[42]{顔|かお}をする。{上司|じょうし}の{前|まえ}では{部下|ぶか}の{顔|かお}をするし、お{得意様|とくいさま}（{注|ちゅう}1）の{前|まえ}に{行|い}けばそれなりの{顔|かお}をする。{自分|じぶん}だけじゃない、みんなが{千変万化|せんぺんばんか}する（{注|ちゅう}2）ものであり、{人|ひと}は{他人|たにん}に{対|たい}して、{基本的|きほんてき}には{常|つね}に{自分|じぶん}の{明|あか}るい{部分|ぶぶん}を{見|み}せているということだ。

{他人|たにん}には{満月|まんげつ}を{見|み}せていて、{人|ひと}という{光|ひかり}に{当|あ}たって{誰|だれ}もが{輝|かがや}いて{見|み}えているが、その{裏側|うらがわ}は{黒|くろ}く、{暗|くら}いものだ。その{暗|くら}いものを{自分|じぶん}が{持|も}っているということを{最初|さいしょ}からわかって[43]、その{人|ひと}はもう、すぐにでも{心|こころ}が{平和|へいわ}になるだろう。

そうすれば、「あの{人|ひと}は{信|しん}じられる」とか「{信|しん}じられない」とか、「{裏切|うらぎ}られた」という{思|おも}いもなくなる。{人間|にんげん}{社会|しゃかい}という{宇宙|うちゅう}の{上|うえ}に{回|まわ}っていて、その{人間|にんげん}が{裏側|うらがわ}を{見|み}せている{場合|ばあい}もあるのも{仕方|しかた}のないことで、{人間|にんげん}{関係|かんけい}というのは"{引力|いんりょく}"とかいろんなことが{関係|かんけい}してくるということも[44]。

だからこそ「{人間|にんげん}は{謎|なぞ}」であり、たまには{元気|げんき}がなくなったりして、{三日月|みかづき}になったりするけど、いつも{光|ひか}って{見|み}える。[45]{裏側|うらがわ}に、{真|ま}っ{暗|くら}で{人|ひと}に{見|み}せたくない{部分|ぶぶん}を{誰|だれ}もが{持|も}っていて、そのすべての{面|めん}を{見|み}ることは{誰|だれ}にもできない。

{見|み}えている{部分|ぶぶん}の{裏側|うらがわ}にある{面|めん}の{存在|そんざい}を{認識|にんしき}できていれば、{変|へん}に{気持|きも}ちが{揺|ゆ}さぶられることもなくなるのだ。
（{注|ちゅう}1）お{得意様|とくいさま}：ここでは、{取引先|とりひきさき}
（{注|ちゅう}2）{千変万化|せんぺんばんか}する：さまざまに{変化|へんか}する`,
      arti: `Ada kata-kata yang perlu diketahui untuk bertahan hidup di dunia ini.

Pertama, bahwa "manusia adalah misteri".

Orang merasa memahami segala hal tentang dirinya, tetapi sebenarnya ia tidak begitu memahami dirinya sendiri.

Kalau diri sendiri saja tidak bisa dipahami, bagaimana mungkin memahami orang lain? Inilah [41] yang pertama.

Lalu satu lagi adalah bahwa "manusia itu keberadaan seperti bulan". "Diri" yang kita tunjukkan kepada orang lain adalah "bagian yang bersinar terang" yang ditunjukkan sesuai lawan bicara; kalau pergi ke tempat lain, kita memasang wajah [42] lagi. Di depan atasan kita memasang wajah bawahan, dan di depan klien (catatan 1) kita memasang wajah yang sesuai. Bukan hanya diri sendiri; semua orang berubah-ubah dalam ribuan rupa (catatan 2), dan pada dasarnya orang selalu menunjukkan sisi terangnya kepada orang lain.

Kepada orang lain kita menunjukkan bulan purnama; tersinari cahaya yang bernama manusia, setiap orang tampak bersinar, tetapi sisi baliknya hitam dan gelap. Jika sejak awal sudah paham [43] bahwa diri sendiri pun memiliki sisi gelap itu, orang itu akan segera merasakan kedamaian hati.

Dengan begitu, perasaan seperti "orang itu bisa dipercaya", "tidak bisa dipercaya", atau "aku dikhianati" pun akan hilang. Kita berputar di atas alam semesta yang bernama masyarakat manusia, dan wajar saja kalau ada kalanya manusia menunjukkan sisi baliknya; kita pun [44] bahwa hubungan antarmanusia dipengaruhi oleh "gaya tarik" dan berbagai hal lain.

Justru karena itulah "manusia adalah misteri"; kadang kehilangan semangat dan menjadi bulan sabit, tetapi selalu tampak bersinar. [45], di sisi baliknya, setiap orang memiliki bagian yang gelap gulita dan tidak ingin diperlihatkan kepada orang lain, dan tidak ada seorang pun yang bisa melihat semua sisinya.

Jika kita menyadari adanya sisi di balik bagian yang terlihat, perasaan kita tidak akan terguncang secara aneh.
(Catatan 1) お得意様: di sini, mitra bisnis/klien
(Catatan 2) 千変万化する: berubah dengan berbagai cara`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{自分|じぶん}の{経験|けいけん}や{無意識|むいしき}の{枠|わく}にとらわれている（{注|ちゅう}）と、{想像力|そうぞうりょく}はふくらまない。だからその{枠|わく}を{取|と}り{除|のぞ}くことが、{想像力|そうぞうりょく}を{鍛|きた}えるひとつのポイントになるだろう。

とはいえ、いままでの{経験|けいけん}や{考|かんが}えによって{無意識|むいしき}につくられてしまった{枠|わく}はだれももっていて、それはもうしかたがないものだ。その{枠|わく}は、{人生|じんせい}や{経験|けいけん}の{中|なか}でつくりあげてきたもので、その{人|ひと}の{個性|こせい}や{人柄|ひとがら}、{物差|ものさ}しや{基準|きじゅん}になるわけだから、{枠|わく}はあってもいい。ただ、{必要|ひつよう}なときには{意識|いしき}してそれをはずせることが{大切|たいせつ}だ。

（{注|ちゅう}）とらわれる：ここでは、こだわりすぎる`,
      arti: `Jika terbelenggu (catatan) oleh pengalaman sendiri atau kerangka bawah sadar, daya imajinasi tidak akan berkembang. Karena itu, menyingkirkan kerangka tersebut mungkin menjadi salah satu kunci untuk melatih daya imajinasi.

Meski begitu, setiap orang memiliki kerangka yang tanpa sadar terbentuk oleh pengalaman dan pemikiran selama ini, dan itu memang tidak bisa dihindari. Kerangka itu dibangun sepanjang hidup dan pengalaman, serta menjadi kepribadian, watak, tolok ukur, dan standar orang tersebut, jadi tidak apa-apa memiliki kerangka. Hanya saja, yang penting adalah bisa melepaskannya secara sadar ketika diperlukan.

(Catatan) とらわれる: di sini, terlalu terpaku`,
    },
    "8-2": {
      yomi: `{人間|にんげん}の{最|もっと}も{根源的|こんげんてき}な{欲求|よっきゅう}から{生|う}まれる{住|す}まいとは、そこに{住|す}む{人々|ひとびと}の{生活|せいかつ}や{気候|きこう}{風土|ふうど}の{違|ちが}いがそのままに{表|あらわ}れる{土着|どちゃく}の（{注|ちゅう}）ものでした。{世界|せかい}{各地|かくち}にある{土着|どちゃく}の{住|す}まいを{眺|なが}めてみると、ときに{驚|おどろ}くような{表現|ひょうげん}のものもあり、{改|あらた}めて{人間|にんげん}の{生活|せいかつ}の{多様|たよう}な{在|あ}り{方|かた}に{気|き}づかされます。それらは{現代的|げんだいてき}{価値観|かちかん}からすると{確|たし}かに{前近代的|ぜんきんだいてき}で{非合理|ひごうり}なものに{見|み}えるかもしれません。しかし、{私|わたし}はそこに{人々|ひとびと}の{生|い}きること、{住|す}まうことへの{欲求|よっきゅう}の{切実|せつじつ}さ{故|ゆえ}の{力強|ちからづよ}さと、{現代|げんだい}の{私達|わたしたち}の{住|じゅう}{環境|かんきょう}にはない{素朴|そぼく}な{豊|ゆた}かさを{感|かん}じるのです。

（{注|ちゅう}）{土着|どちゃく}の：その{土地|とち}に{根|ね}づいている`,
      arti: `Hunian yang lahir dari keinginan paling mendasar manusia adalah hunian asli setempat (catatan) yang langsung mencerminkan perbedaan kehidupan penghuninya serta iklim dan alam setempat. Jika kita mengamati hunian asli di berbagai belahan dunia, ada yang wujudnya kadang mengejutkan, dan kita kembali disadarkan akan beragamnya cara hidup manusia. Dari sudut pandang nilai modern, hunian-hunian itu mungkin memang tampak pramodern dan tidak rasional. Namun, di sana saya merasakan kekuatan yang lahir dari kesungguhan keinginan orang untuk hidup dan bertempat tinggal, serta kekayaan sederhana yang tidak ada dalam lingkungan hunian kita masa kini.

(Catatan) 土着の: berakar di daerah itu`,
    },
    "8-3": {
      yomi: `{労働|ろうどう}はモノをつくり{出|だ}すために{体|からだ}に{労苦|ろうく}（{注|ちゅう}1）を{強|し}いるので、{苦|くる}しい{部分|ぶぶん}を{併|あわ}せ{持|も}っています。ただ、その{活動|かつどう}を{通|つう}じて{社会|しゃかい}とのつながりを{感|かん}じることができれば{喜|よろこ}びにも{転化|てんか}します（{注|ちゅう}2）。そんな{喜|よろこ}びの{部分|ぶぶん}を{削|けず}り{取|と}られ、{苦役|くえき}（{注|ちゅう}3）だけが{残|のこ}る{状態|じょうたい}が{広|ひろ}がっている{現実|げんじつ}を、どう{食|く}い{止|と}めていくかは{大|おお}きな{課題|かだい}です。{喜|よろこ}びを{感|かん}じられない{働|はたら}き{方|かた}なのに「{働|はたら}くことは{喜|よろこ}びだ！」と{建前|たてまえ}で{押|お}し{切|き}ろうとしたり、「{働|はたら}くのが{怖|こわ}い」と{背中|せなか}を{向|む}けたりの{二者択一|にしゃたくいつ}でなく、{苦|くる}しさと{喜|よろこ}びのバランスの{回復|かいふく}を{求|もと}めて、{働|はたら}き{方|かた}の{改善|かいぜん}を{求|もと}めていくことが{必要|ひつよう}です。
（{注|ちゅう}1）{労苦|ろうく}：ここでは、{負担|ふたん}
（{注|ちゅう}2）{転化|てんか}する：{変|か}わる
（{注|ちゅう}3）{苦役|くえき}：{苦|くる}しくつらい{労働|ろうどう}`,
      arti: `Bekerja memaksakan beban (catatan 1) pada tubuh demi menghasilkan sesuatu, sehingga juga mengandung sisi yang berat. Namun, jika melalui kegiatan itu kita bisa merasakan keterhubungan dengan masyarakat, ia pun berubah (catatan 2) menjadi kegembiraan. Bagaimana membendung kenyataan bahwa semakin meluas keadaan di mana sisi kegembiraan itu terkikis dan hanya tersisa kerja berat (catatan 3) adalah tantangan besar. Yang diperlukan bukanlah pilihan antara memaksakan slogan formal "bekerja itu kegembiraan!" meski cara kerjanya tidak memberi rasa gembira, atau berpaling dengan berkata "aku takut bekerja", melainkan terus menuntut perbaikan cara kerja demi memulihkan keseimbangan antara kesulitan dan kegembiraan.
(Catatan 1) 労苦: di sini, beban
(Catatan 2) 転化する: berubah
(Catatan 3) 苦役: kerja yang berat dan menyiksa`,
    },
    "8-4": {
      yomi: `{情報化|じょうほうか}{社会|しゃかい}では、その{情報化|じょうほうか}が{進|すす}めば{進|すす}むほど、{買|か}い{手|て}は{商品|しょうひん}{選択|せんたく}において{困|こま}るというジレンマをかかえてしまう。{企業|きぎょう}{情報|じょうほう}や{商品|しょうひん}{情報|じょうほう}が{増|ふ}えると、その{実態|じったい}を{推|お}し{量|はか}る（{注|ちゅう}）ことが{難|むずか}しくなるので、{大量|たいりょう}の{情報|じょうほう}を{包括|ほうかつ}する{代表的|だいひょうてき}な{名前|なまえ}や{記号|きごう}やスローガンによってその{優劣|ゆうれつ}を{判断|はんだん}し、それらを{手|て}がかりに{選択|せんたく}のリスクを{軽減|けいげん}しようとする。この{記号|きごう}にあたるものがブランドで、ブランド{戦略|せんりゃく}が{注目|ちゅうもく}を{浴|あ}びてきた{背景|はいけい}には、{情報|じょうほう}{社会|しゃかい}の{進展|しんてん}がある。

（{注|ちゅう}）{推|お}し{量|はか}る：{推測|すいそく}する`,
      arti: `Dalam masyarakat informasi, semakin maju informatisasi, pembeli justru menghadapi dilema kebingungan dalam memilih produk. Ketika informasi perusahaan dan produk bertambah, menjadi sulit menduga (catatan) keadaan sebenarnya, sehingga pembeli menilai unggul-tidaknya lewat nama, simbol, atau slogan representatif yang merangkum banyak informasi, lalu menjadikannya petunjuk untuk mengurangi risiko memilih. Yang berperan sebagai simbol ini adalah merek, dan di balik semakin diperhatikannya strategi merek terdapat perkembangan masyarakat informasi.

(Catatan) 推し量る: menduga, memperkirakan`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `ここ{数年|すうねん}はクマがヒトの{領分|りょうぶん}（{注|ちゅう}1）に{入|はい}りこんでトラブルになることが{多|おお}くなった。

{人里|ひとざと}（{注|ちゅう}2）にクマが{出没|しゅつぼつ}する{原因|げんいん}を{餌|えさ}{不足|ぶそく}に{求|もと}める{報道|ほうどう}が{多|おお}かったように{思|おも}うが、ブナ（{注|ちゅう}3）に{代表|だいひょう}される{奥山|おくやま}の{種子|しゅし}{生産|せいさん}の{豊凶|ほうきょう}（{注|ちゅう}4）は{昔|むかし}からあるできごとで、{奥山|おくやま}での{食物|しょくもつ}{不足|ぶそく}を{毎年|まいとし}のクマ{出没|しゅつぼつ}の{主因|しゅいん}に{当|あ}てはめるのには{無理|むり}があるように{思|おも}う。{奥山|おくやま}でのクマ{同士|どうし}の{力|ちから}{関係|かんけい}で、{弱|よわ}いクマが{餌|えさ}を{求|もと}めて{人里|ひとざと}に{出|で}てきているという{見方|みかた}もあったが、{人里|ひとざと}で{捕|と}らえられたクマの{栄養|えいよう}{状態|じょうたい}を{調|しら}べると、かならずしも{力|ちから}の{弱|よわ}いクマが{人里|ひとざと}に{降|お}りてきているとは{言|い}えないようだ。{奥山|おくやま}に{十分|じゅうぶん}な{餌|えさ}があっても{人里|ひとざと}に{降|お}りてきたり、{人里|ひとざと}の{作物|さくもつ}の{収穫|しゅうかく}{時期|じき}に{合|あ}わせて{山|やま}から{下|お}りてくる{話|はなし}を{聞|き}いていると、{奥山|おくやま}よりも{効率|こうりつ}よく{餌|えさ}を{得|え}られる{人里|ひとざと}へ、{力|ちから}の{強|つよ}いクマが{降|お}りている{様子|ようす}が{想像|そうぞう}できる。{奥山|おくやま}の{動物|どうぶつ}たちの{動|うご}きに{変化|へんか}が{見|み}られるようだ。それはクマだけでなくカモシカやシカを{含|ふく}めた{野生|やせい}{動物|どうぶつ}{全般|ぜんぱん}に{広|ひろ}がる{変化|へんか}である。

（{中略|ちゅうりゃく}）

クマをはじめとする{野生|やせい}{動物|どうぶつ}が、{人里|ひとざと}に「おいしい」{食|た}べ{物|もの}があることを{知|し}るのは、{山里|やまざと}においしい{食|た}べ{物|もの}をゴミとして{捨|す}てたヒトがいるからである。キャンプやバーベキューの{後|あと}に{放置|ほうち}されたゴミや、{里山|さとやま}や{人里|ひとざと}{近|ちか}い{山林|さんりん}に{捨|す}てられたゴミは、しばしば{野生|やせい}{動物|どうぶつ}の{食物|しょくもつ}になる。そして{彼|かれ}らは{学習|がくしゅう}する。ヒトの{捨|す}てたゴミは「おいしい」と。{学習|がくしゅう}した{野生|やせい}{動物|どうぶつ}たちは、{人里|ひとざと}{近|ちか}くでゴミによって{餌付|えづ}けされ（{注|ちゅう}5）、{人里|ひとざと}{内部|ないぶ}へ{入|はい}りこんでくるのである。{野生|やせい}{動物|どうぶつ}が{人里|ひとざと}に{出没|しゅつぼつ}するのは、{人間|にんげん}が{彼|かれ}らを{誘導|ゆうどう}している{側面|そくめん}がある。
（{注|ちゅう}1）{領分|りょうぶん}：{領域|りょういき}
（{注|ちゅう}2）{人里|ひとざと}：ここでは、{山|やま}に{近|ちか}い{村|むら}
（{注|ちゅう}3）ブナ：{森|もり}の{木|き}の{一種|いっしゅ}
（{注|ちゅう}4）{豊凶|ほうきょう}：{豊作|ほうさく}と{凶作|きょうさく}
（{注|ちゅう}5）{餌付|えづ}けする：ここでは、{人|ひと}になれさせる`,
      arti: `Dalam beberapa tahun terakhir, semakin sering beruang masuk ke wilayah (catatan 1) manusia dan menimbulkan masalah.

Saya rasa banyak pemberitaan yang mencari penyebab munculnya beruang di permukiman (catatan 2) pada kekurangan makanan, tetapi melimpah-tidaknya (catatan 4) produksi biji-bijian di pegunungan dalam, yang diwakili pohon buna (catatan 3), adalah kejadian yang sudah ada sejak dulu, sehingga menurut saya kurang masuk akal menjadikan kekurangan makanan di pegunungan dalam sebagai penyebab utama munculnya beruang setiap tahun. Ada pula pandangan bahwa karena hubungan kekuatan antarberuang di pegunungan dalam, beruang yang lemah turun ke permukiman mencari makanan; namun jika kondisi gizi beruang yang ditangkap di permukiman diteliti, tampaknya tidak bisa dikatakan bahwa yang turun ke permukiman selalu beruang yang lemah. Mendengar cerita bahwa beruang tetap turun ke permukiman meski di pegunungan dalam makanan cukup, atau turun dari gunung bertepatan dengan musim panen tanaman di permukiman, kita bisa membayangkan beruang yang kuat turun ke permukiman yang memungkinkan mendapat makanan lebih efisien daripada di pegunungan dalam. Tampaknya ada perubahan pada pergerakan hewan-hewan di pegunungan dalam. Itu adalah perubahan yang meluas ke satwa liar secara umum, bukan hanya beruang, tetapi juga kambing gunung dan rusa.

(Bagian dihilangkan)

Beruang dan satwa liar lainnya mengetahui bahwa di permukiman ada makanan "enak" karena ada manusia yang membuang makanan enak sebagai sampah di desa pegunungan. Sampah yang ditinggalkan setelah berkemah atau barbekyu, serta sampah yang dibuang di satoyama atau hutan dekat permukiman, sering menjadi makanan satwa liar. Lalu mereka belajar: sampah buangan manusia itu "enak". Satwa liar yang sudah belajar dijinakkan (catatan 5) oleh sampah di dekat permukiman, lalu masuk ke dalam permukiman. Munculnya satwa liar di permukiman memiliki sisi di mana manusialah yang menuntun mereka.
(Catatan 1) 領分: wilayah
(Catatan 2) 人里: di sini, desa yang dekat dengan gunung
(Catatan 3) ブナ: sejenis pohon hutan (beech)
(Catatan 4) 豊凶: panen melimpah dan gagal panen
(Catatan 5) 餌付けする: di sini, membuat terbiasa dengan manusia`,
    },
    "9-2": {
      yomi: `{以下|いか}は、{歴史|れきし}を{研究|けんきゅう}する{人|ひと}に{向|む}けて{書|か}かれた{文章|ぶんしょう}である。

{私|わたし}たちが{生|い}きている{現在|げんざい}でも、ちょっと{過|す}ぎれば{時間的|じかんてき}には{過去|かこ}となる。では、{少|すこ}し{前|まえ}の{自分|じぶん}の{経験|けいけん}がどういう{状態|じょうたい}であったのだろうか、という{場面|ばめん}を、{記憶|きおく}や{資料|しりょう}をもとに{正確|せいかく}に{再現|さいげん}することはできるであろうか。{全体|ぜんたい}について{漏|も}れなくすることは、どうあがいても（{注|ちゅう}1）できない。（{中略|ちゅうりゃく}）{過去|かこ}を{生|い}きた{人|ひと}たちの{喜|よろこ}びや{楽|たの}しみにしても、{苦労|くろう}や{苦|くる}しみにしても、{正確|せいかく}にはわれわれはそのごく{一面|いちめん}しか{推察|すいさつ}できないのだ、という{限界|げんかい}についての{謙虚|けんきょ}な{自戒|じかい}が、{歴史|れきし}を{問|と}うにはまず{必要|ひつよう}だと{私|わたし}は{考|かんが}えている。

そのうえで、{現在|げんざい}を{生|い}きている{人間|にんげん}が、ある{問題|もんだい}について{関心|かんしん}をもって{問|と}いかけるとき、はじめて{歴史像|れきしぞう}を{描|えが}く{道|みち}への{出発点|しゅっぱつてん}ができる。そうやって{問|と}いかけがあってはじめて、なにを{史資料|しりょう}として{利用|りよう}できるであろうか、というつぎのステップの{問|と}いへと{続|つづ}いてゆく。あるいは{過去|かこ}からの{遺物|いぶつ}に{接|せっ}して{興味|きょうみ}をそそられ、そこから{歴史|れきし}への{扉|とびら}が{開|ひら}かれる、という{場合|ばあい}もあるかもしれない。いずれにしても、そうした{問|と}いがあって、ある{文字|もじ}{表象|ひょうしょう}（{注|ちゅう}2）や{物体|ぶったい}が{史料|しりょう}ないし{資料|しりょう}としての{価値|かち}を{帯|お}びるのである。

そうした{手続|てつづ}きを{踏|ふ}むことによって、われわれは、{歴史像|れきしぞう}の{構築|こうちく}へと{歩|あゆ}みだす。{描|えが}かれる{歴史像|れきしぞう}は、{過去|かこ}の{実態|じったい}そのものではない。タイムマシーンは{残念|ざんねん}ながらないのであるから、そこには、{歴史|れきし}を{問|と}う{者|もの}によって{再|さい}{構築|こうちく}された{過去|かこ}の{一面|いちめん}についての{像|ぞう}があるのみである。そこにあるのは、{現在|げんざい}を{生|い}きる{者|もの}によってなされた{解釈|かいしゃく}の{結果|けっか}としての{歴史像|れきしぞう}である。したがって、{歴史像|れきしぞう}の{再|さい}{解釈|かいしゃく}ということは、つねにありうることといわなければならない。
（{注|ちゅう}1）どうあがいても：ここでは、どんなに{頑張|がんば}っても
（{注|ちゅう}2）{文字|もじ}{表象|ひょうしょう}：{文字|もじ}で{書|か}いてあるもの`,
      arti: `Berikut ini adalah tulisan yang ditujukan kepada orang yang meneliti sejarah.

Masa kini yang sedang kita jalani pun, begitu sedikit berlalu, secara waktu menjadi masa lalu. Lalu, apakah kita bisa merekonstruksi secara akurat, berdasarkan ingatan dan bahan, seperti apa keadaan pengalaman kita sendiri tak lama sebelumnya? Melakukannya untuk keseluruhan tanpa ada yang terlewat adalah mustahil, sekeras apa pun berusaha (catatan 1). (Bagian dihilangkan) Baik kegembiraan dan kesenangan maupun jerih payah dan penderitaan orang-orang yang hidup di masa lalu, sebenarnya kita hanya bisa menduga sebagian kecil sisinya saja. Saya berpendapat bahwa untuk mempertanyakan sejarah, yang pertama-tama diperlukan adalah peringatan diri yang rendah hati tentang batas tersebut.

Setelah itu, barulah ketika manusia yang hidup di masa kini menaruh minat pada suatu masalah dan mengajukan pertanyaan, terbentuk titik awal menuju jalan untuk melukiskan gambaran sejarah. Barulah setelah ada pertanyaan seperti itu, berlanjut ke pertanyaan tahap berikutnya: apa yang bisa dipakai sebagai bahan sejarah? Atau mungkin juga ada kalanya kita bersentuhan dengan peninggalan masa lalu, tergugah minatnya, lalu dari situ terbukalah pintu menuju sejarah. Bagaimanapun, karena ada pertanyaan seperti itulah, suatu tulisan (catatan 2) atau benda memperoleh nilai sebagai sumber sejarah atau bahan.

Dengan menempuh prosedur seperti itu, kita melangkah menuju penyusunan gambaran sejarah. Gambaran sejarah yang dilukiskan bukanlah kenyataan masa lalu itu sendiri. Sayangnya mesin waktu tidak ada, jadi yang ada hanyalah gambaran tentang satu sisi masa lalu yang direkonstruksi oleh orang yang mempertanyakan sejarah. Yang ada adalah gambaran sejarah sebagai hasil tafsiran yang dibuat oleh orang yang hidup di masa kini. Karena itu, harus dikatakan bahwa penafsiran ulang gambaran sejarah selalu mungkin terjadi.
(Catatan 1) どうあがいても: di sini, sekeras apa pun berusaha
(Catatan 2) 文字表象: sesuatu yang tertulis dengan huruf`,
    },
    "9-3": {
      yomi: `{近代的|きんだいてき}な{社会|しゃかい}{革命|かくめい}は、ひとがたまたまどのような{社会|しゃかい}の{場所|ばしょ}に{生|う}まれ{落|お}ちたかという{偶然|ぐうぜん}によってそのひとの{人生|じんせい}のほとんどが{決|き}まってしまうような{生|い}き{方|かた}というものを{否定|ひてい}し、{家柄|いえがら}とか{階層|かいそう}とか{性|せい}とか{民族|みんぞく}とかの{出自|しゅつじ}によって{差別|さべつ}されない{社会|しゃかい}を{構築|こうちく}することをめざしてきた。{言|い}ってみれば、{出自|しゅつじ}をめぐる{偶然的|ぐうぜんてき}{条件|じょうけん}を{度外視|どがいし}して、みなが{社会|しゃかい}の{同|おな}じスタートラインにつく、そして{学校|がっこう}という{場所|ばしょ}で、{生|い}きるのに{最低限|さいていげん}{必要|ひつよう}な{基礎的|きそてき}な{知識|ちしき}と{技能|ぎのう}とを{学|まな}ぶ、そのうえで、その{後|ご}この{社会|しゃかい}において{個人|こじん}として{何|なに}をなしとげるかでそのひとの{価値|かち}と{人生|じんせい}のかたちが{決|き}まってくるという、そういう{社会|しゃかい}をめざした。{理念|りねん}として{言|い}えば、{出自|しゅつじ}の{偶然|ぐうぜん}な{条件|じょうけん}に{左右|さゆう}されることなく、ひとは{何|なに}にでもなれる、そういう{自由|じゆう}な{世界|せかい}をめざしたのである。そういうなかで、{子|こ}どもの{愛護|あいご}、{婦人|ふじん}の{政治|せいじ}{参加|さんか}、もろもろの（{注|ちゅう}）{差別|さべつ}の{撤廃|てっぱい}などの{政策|せいさく}に{取|と}り{組|く}んできた。

けれども、{何|なに}にでもなれるということは、あらかじめ{何|なに}も{決|き}まっていないということ、{決定的|けっていてき}なものはないということでもある。{裏|うら}を{返|かえ}して{言|い}えば、{何|なに}にでもなれるというのは、{自分|じぶん}がしたいことが{見|み}えないかぎり、{何|なに}にもなれないということでもある。そのような{意味|いみ}で、{自分|じぶん}がここにいることに{理由|りゆう}が{必要|ひつよう}になった{時代|じだい}、{自分|じぶん}が{存在|そんざい}することの{意味|いみ}を{自分|じぶん}で{見|み}いださなければならない{時代|じだい}にわたしたちは{生|い}きている。ひとびとが{自分|じぶん}が「やりたい」ことをみずからに{問|と}わざるをえないのも、そうした{時代|じだい}のなかにあるからである。
（{注|ちゅう}）もろもろの：いろいろな`,
      arti: `Revolusi sosial modern menolak cara hidup di mana sebagian besar hidup seseorang ditentukan oleh kebetulan di lapisan masyarakat mana ia kebetulan dilahirkan, dan bertujuan membangun masyarakat yang tidak mendiskriminasi berdasarkan asal-usul seperti garis keturunan, lapisan sosial, jenis kelamin, atau etnis. Bisa dikatakan, revolusi itu menuju masyarakat di mana syarat kebetulan terkait asal-usul dikesampingkan, semua orang berdiri di garis start yang sama dalam masyarakat, lalu di tempat bernama sekolah mempelajari pengetahuan dan keterampilan dasar minimal yang diperlukan untuk hidup, dan setelah itu nilai serta bentuk hidup seseorang ditentukan oleh apa yang ia capai sebagai individu dalam masyarakat ini. Secara cita-cita, revolusi itu menuju dunia bebas di mana orang bisa menjadi apa saja tanpa dipengaruhi syarat kebetulan asal-usulnya. Di tengah hal itu, dijalankan berbagai kebijakan seperti perlindungan anak, partisipasi politik perempuan, dan penghapusan berbagai (catatan) diskriminasi.

Namun, bisa menjadi apa saja juga berarti bahwa tidak ada yang ditentukan sebelumnya, tidak ada yang pasti. Kalau dibalik, bisa menjadi apa saja juga berarti tidak bisa menjadi apa pun selama kita tidak melihat apa yang ingin kita lakukan. Dalam arti itu, kita hidup di zaman di mana keberadaan kita di sini memerlukan alasan, zaman di mana kita harus menemukan sendiri makna keberadaan diri. Orang mau tak mau bertanya pada diri sendiri apa yang "ingin dilakukan" juga karena berada di dalam zaman seperti itu.
(Catatan) もろもろの: berbagai`,
    },

    // ── 問題10：生態系と人類 ──
    "10": {
      yomi: `シアノバクテリアと{藻類|そうるい}が{誕生|たんじょう}し、{地球|ちきゅう}{上|じょう}を{酸素|さんそ}で{満|み}たすまでには20{億|おく}{年|ねん}{以上|いじょう}の{時間|じかん}を{要|よう}したのに{対|たい}し、{現代人|げんだいじん}が{地球|ちきゅう}{環境|かんきょう}を{大|おお}きく{変|か}えるようになったのは、たかだかここ100〜200{年|ねん}のことである。{光合成|こうごうせい}{生物|せいぶつ}が{大気|たいき}{環境|かんきょう}を{変|か}えるのに{費|つい}やした{時間|じかん}と{比|くら}べると、{人間|にんげん}が{環境|かんきょう}を{変|か}えた{時間|じかん}はあっという{間|ま}といえる。そのため、{大昔|おおむかし}の{非常|ひじょう}にゆっくりとした{大気|たいき}{環境|かんきょう}の{変化|へんか}は、{当時|とうじ}の{生物|せいぶつ}たちには{適応|てきおう}するのに{十分|じゅうぶん}な{時間|じかん}があったが、{今|いま}の{急速|きゅうそく}な{環境|かんきょう}{変化|へんか}には、{多|おお}くの{生物|せいぶつ}{種|しゅ}が{適応|てきおう}できずに{絶滅|ぜつめつ}する{可能性|かのうせい}が{高|たか}いかもしれない。そのため、{人間|にんげん}は①{大|おお}きな{問題|もんだい}を{起|お}こしているのだ、という{人|ひと}もいるだろう。

ところが、{地球|ちきゅう}の{長|なが}い{歴史|れきし}の{中|なか}では、{人類|じんるい}の{活動|かつどう}よりも{短|たん}{時間|じかん}で{地球|ちきゅう}{環境|かんきょう}を{大|おお}きく{変|か}え、{生態系|せいたいけい}を{非常|ひじょう}に{大|おお}きく{攪乱|かくらん}した{事件|じけん}があった。{今|いま}から6500{万|まん}{年|ねん}{前|まえ}の{中生代|ちゅうせいだい}{白亜紀|はくあき}{末|まつ}の{大|だい}{隕石|いんせき}の{衝突|しょうとつ}である。これにより{飛|と}び{散|ち}った{破砕物|はさいぶつ}が{大気|たいき}{中|ちゅう}で{浮遊|ふゆう}し（{注|ちゅう}1）、{太陽光|たいようこう}の{地上|ちじょう}への{到達|とうたつ}を{妨|さまた}げたといわれている。それが{植物|しょくぶつ}による{光合成|こうごうせい}を{強|つよ}く{抑|おさ}え、また{地上|ちじょう}の{寒冷化|かんれいか}を{引|ひ}き{起|お}こしたと{考|かんが}えられている。そしてこのとき、{当時|とうじ}{優占|ゆうせん}していた（{注|ちゅう}2）{恐竜|きょうりゅう}をはじめ、{多|おお}くの{生物|せいぶつ}が{絶滅|ぜつめつ}することになった。ところが、これほど{急激|きゅうげき}で{大|おお}きな{生態系|せいたいけい}の{攪乱|かくらん}に{直面|ちょくめん}しても、{生|い}き{残|のこ}ったものがいた。そして、その{生物|せいぶつ}たちは、{新|あら}たにつくられた{環境|かんきょう}に{適応|てきおう}しながら、{多様|たよう}な{生態系|せいたいけい}をつくってきたのである。

②このことを{考|かんが}えると、{生物|せいぶつ}というものはとてもタフで、{打|う}たれ{強|づよ}いものであることがわかる。すると、{今|いま}、{人類|じんるい}が{強|つよ}い{力|ちから}で{地球|ちきゅう}{環境|かんきょう}を{変|か}えて{生態系|せいたいけい}を{大|おお}きく{攪乱|かくらん}しても、{人類|じんるい}は{滅|ほろ}びるかもしれないが、その{急激|きゅうげき}に{変化|へんか}する{環境|かんきょう}をうまく{生|い}き{抜|ぬ}き、{新|あら}たにつくられた{環境|かんきょう}の{中|なか}で{繁栄|はんえい}する{生物|せいぶつ}{種|しゅ}が{必|かなら}ず{出|で}てくるに{違|ちが}いない。そして、{生物|せいぶつ}がそこに{存在|そんざい}することができれば、そこには{生物|せいぶつ}たちの{相互|そうご}{関係|かんけい}が{生|う}まれ、{食物|しょくもつ}{連鎖|れんさ}がつくられ、きちんと{機能|きのう}する{生態系|せいたいけい}がつくられるのである。そして、その{新|あたら}しい{生態系|せいたいけい}をつくっている{生物|せいぶつ}たちの{中|なか}には、「{大昔|おおむかし}、ヒトという{生物|せいぶつ}がいて、{彼|かれ}らは{我々|われわれ}が{住|す}みやすい{地球|ちきゅう}{環境|かんきょう}をつくってくれたとてもありがたい{生物|せいぶつ}だったんだよ」と、{子孫|しそん}に{語|かた}り{継|つ}いでいるものもいるかもしれない。

このように{考|かんが}えると、{生態系|せいたいけい}の{善|よ}し{悪|あ}しを{考|かんが}えるときには、{誰|だれ}を{中心|ちゅうしん}にするか、いつを{基準|きじゅん}とするのかによって{評価|ひょうか}が{大|おお}きく{変|か}わることがわかる。したがって、{議論|ぎろん}をするときには、その{基準|きじゅん}を{決|き}めなければならないだろう。
（{注|ちゅう}1）{浮遊|ふゆう}する：{浮|う}かび{漂|ただよ}う
（{注|ちゅう}2）{優占|ゆうせん}している：ここでは、{数|かず}が{多|おお}い`,
      arti: `Sianobakteri dan alga lahir lalu memenuhi bumi dengan oksigen dalam waktu lebih dari 2 miliar tahun, sedangkan manusia modern mulai mengubah lingkungan bumi secara besar-besaran paling-paling baru dalam 100–200 tahun terakhir. Dibanding waktu yang dihabiskan makhluk berfotosintesis untuk mengubah lingkungan atmosfer, waktu manusia mengubah lingkungan bisa dibilang sekejap mata. Karena itu, perubahan lingkungan atmosfer yang sangat lambat di masa purba memberi cukup waktu bagi makhluk hidup saat itu untuk beradaptasi, tetapi terhadap perubahan lingkungan yang cepat saat ini, mungkin banyak spesies tidak bisa beradaptasi dan besar kemungkinan punah. Karena itu, mungkin ada orang yang berkata bahwa manusia sedang menimbulkan ① masalah besar.

Namun, dalam sejarah panjang bumi, pernah ada peristiwa yang mengubah lingkungan bumi secara besar-besaran dalam waktu lebih singkat daripada aktivitas manusia dan sangat mengacaukan ekosistem. Yaitu tumbukan meteorit raksasa di akhir periode Kapur zaman Mesozoikum, 65 juta tahun lalu. Konon, pecahan yang beterbangan akibat tumbukan itu melayang (catatan 1) di atmosfer dan menghalangi sinar matahari mencapai permukaan bumi. Hal itu diperkirakan sangat menekan fotosintesis tumbuhan dan juga menyebabkan pendinginan di permukaan bumi. Pada saat itu, banyak makhluk hidup punah, termasuk dinosaurus yang saat itu mendominasi (catatan 2). Namun, meski menghadapi kekacauan ekosistem yang begitu mendadak dan besar, ada yang bertahan hidup. Dan makhluk-makhluk itu, sambil beradaptasi dengan lingkungan yang baru terbentuk, telah membangun ekosistem yang beragam.

Jika memikirkan ② hal ini, kita tahu bahwa makhluk hidup itu sangat tangguh dan tahan banting. Maka, meski kini umat manusia mengubah lingkungan bumi dengan kekuatan besar dan sangat mengacaukan ekosistem, manusia mungkin akan punah, tetapi pasti akan muncul spesies yang berhasil bertahan dalam lingkungan yang berubah cepat itu dan berjaya dalam lingkungan yang baru terbentuk. Lalu, jika makhluk hidup bisa ada di sana, akan lahir hubungan timbal balik antarmakhluk, terbentuk rantai makanan, dan terbentuk ekosistem yang berfungsi dengan baik. Bahkan, di antara makhluk yang membentuk ekosistem baru itu, mungkin ada yang mewariskan cerita kepada keturunannya, "Dahulu kala ada makhluk bernama manusia; mereka adalah makhluk yang sangat berjasa karena telah menciptakan lingkungan bumi yang nyaman untuk kita tinggali."

Jika dipikirkan seperti ini, kita tahu bahwa saat memikirkan baik-buruknya ekosistem, penilaiannya sangat berubah tergantung siapa yang dijadikan pusat dan kapan yang dijadikan patokan. Karena itu, saat berdiskusi, patokan itu harus ditentukan.
(Catatan 1) 浮遊する: melayang-layang
(Catatan 2) 優占している: di sini, jumlahnya banyak`,
    },

    // ── 問題11：決める力 ──
    "11": {
      yomi: `【{意見|いけん} A】
{優|すぐ}れた{人|ひと}は{決断|けつだん}に{迷|まよ}うものです。{決|き}めるために{必要|ひつよう}な{情報|じょうほう}をたくさん{持|も}っていたり、{決|き}めた{結果|けっか}について{多岐|たき}にわたる{予測|よそく}を{立|た}てたりするからです。

「{決|き}める{力|ちから}」のある{人|ひと}とは、たくさんの{情報|じょうほう}を{合理的|ごうりてき}に{利用|りよう}して、{最善|さいぜん}の{結果|けっか}を{予測|よそく}できる{人|ひと}のことです。{深|ふか}くパッと{決|き}める{人|ひと}は{決断力|けつだんりょく}のある{人|ひと}にみえますが、{軽率|けいそつ}な{判断|はんだん}で{最悪|さいあく}の{結果|けっか}を{招|まね}いたのでは{決|き}める{力|ちから}があるとはいえません。また、じっくり{考|かんが}えて{決|き}める{人|ひと}は{慎重|しんちょう}な{人|ひと}にみえますが、ただ{迷|まよ}っているだけでは{良|よ}い{結果|けっか}が{得|え}られないでしょう。

（{中略|ちゅうりゃく}）

どうすれば「{決|き}める{力|ちから}」のある{人|ひと}になれるのでしょう。{身近|みぢか}な{仲間|なかま}の{意見|いけん}はどれも{大差|たいさ}がないので{話半分|はなしはんぶん}に（{注|ちゅう}）{聞|き}いておき、{専門性|せんもんせい}や{価値観|かちかん}の{違|ちが}うたくさんの{人|ひと}の{意見|いけん}を{集約|しゅうやく}して{整理|せいり}します。その{上|うえ}で、{自分|じぶん}{一人|ひとり}で{最終的|さいしゅうてき}な{決断|けつだん}をするのが「{決|き}める{力|ちから}」のある{人|ひと}のやり{方|かた}です。
（{注|ちゅう}）{話半分|はなしはんぶん}に：ここでは、{事実|じじつ}は{全体|ぜんたい}の{半分|はんぶん}ぐらいだという{気持|きも}ちで

【{意見|いけん} B】
{情報|じょうほう}があふれる{現代|げんだい}では、{選択肢|せんたくし}が{多|おお}すぎてなかなか{決断|けつだん}ができないという{状況|じょうきょう}に{陥|おちい}りやすい。{最善|さいぜん}の{結果|けっか}を{得|え}ようと{情報|じょうほう}を{探|さが}せば{探|さが}すほどリスクの{可能性|かのうせい}を{知|し}り、{迷|まよ}い、{検討|けんとう}を{繰|く}り{返|かえ}しているうちに{決断|けつだん}がどんどん{遅|おく}れてしまう。しかしどのような{決断|けつだん}にも{負|ふ}の{面|めん}は{必|かなら}ずある。だから{時間|じかん}をかけすぎるよりも、{失敗|しっぱい}を{恐|おそ}れず{迅速|じんそく}に{決断|けつだん}していく{人|ひと}のほうが「{決|き}める{力|ちから}」がある{人|ひと}だと{言|い}える。

しかし、{早|はや}さが{必要|ひつよう}だとはいっても、{適切|てきせつ}な{判断|はんだん}ができなければ{意味|いみ}がない。{早|はや}く{適切|てきせつ}な{決断|けつだん}ができるようになるには、{瞬時|しゅんじ}に{自身|じしん}とは{違|ちが}う{見方|みかた}を{検討|けんとう}し、{客観的|きゃっかんてき}な{判断|はんだん}ができなければならない。{日頃|ひごろ}からさまざまな{価値観|かちかん}に{触|ふ}れ、{多角的|たかくてき}に{物事|ものごと}をとらえられるようになることが{必要|ひつよう}だ。`,
      arti: `[Pendapat A]
Orang yang unggul justru ragu dalam mengambil keputusan. Sebab mereka memiliki banyak informasi yang diperlukan untuk memutuskan, atau membuat perkiraan yang beragam tentang akibat keputusan itu.

Orang yang memiliki "kemampuan memutuskan" adalah orang yang bisa memanfaatkan banyak informasi secara rasional dan memperkirakan hasil terbaik. Orang yang memutuskan dengan sekejap tampak seperti orang yang tegas, tetapi kalau keputusan gegabahnya mendatangkan hasil terburuk, ia tidak bisa disebut punya kemampuan memutuskan. Sebaliknya, orang yang memutuskan setelah berpikir matang tampak berhati-hati, tetapi kalau hanya bimbang saja, hasil baik tidak akan didapat.

(Bagian dihilangkan)

Bagaimana caranya menjadi orang yang memiliki "kemampuan memutuskan"? Pendapat teman-teman dekat tidak banyak berbeda, jadi dengarkan dengan setengah percaya (catatan), lalu himpun dan rapikan pendapat banyak orang yang keahlian dan nilai-nilainya berbeda. Setelah itu, mengambil keputusan akhir seorang diri adalah cara orang yang memiliki "kemampuan memutuskan".
(Catatan) 話半分に: di sini, dengan anggapan bahwa faktanya hanya sekitar separuh dari keseluruhan

[Pendapat B]
Di zaman yang dibanjiri informasi ini, kita mudah terjebak dalam situasi sulit memutuskan karena pilihannya terlalu banyak. Semakin kita mencari informasi demi mendapat hasil terbaik, semakin kita mengetahui kemungkinan risiko, menjadi bimbang, dan sambil terus menimbang berulang-ulang, keputusan pun makin tertunda. Namun, keputusan apa pun pasti memiliki sisi negatif. Karena itu, daripada menghabiskan terlalu banyak waktu, orang yang memutuskan dengan cepat tanpa takut gagal bisa disebut orang yang memiliki "kemampuan memutuskan".

Namun, meski kecepatan diperlukan, tidak ada artinya jika tidak bisa menimbang dengan tepat. Untuk bisa memutuskan dengan cepat dan tepat, kita harus bisa seketika menimbang sudut pandang yang berbeda dari diri sendiri dan menilai secara objektif. Sejak sehari-hari kita perlu bersentuhan dengan berbagai nilai dan menjadi mampu memandang segala hal dari berbagai sisi.`,
    },

    // ── 問題12：孤独と創造性 ──
    "12": {
      yomi: `なんであれ{無我夢中|むがむちゅう}になって{時間|じかん}を{忘|わす}れるような{体験|たいけん}は、{誰|だれ}にとっても{奇跡|きせき}のような{時間|じかん}である。そんな{奇跡|きせき}を{可能|かのう}にするものこそ、{実|じつ}は「{独|ひと}り」の{時間|じかん}なのである。{現実|げんじつ}{世界|せかい}の{他者|たしゃ}との{接点|せってん}が{完全|かんぜん}になくなり、{日常|にちじょう}のあれやこれやが{背景|はいけい}に{没|ぼっ}する（{注|ちゅう}1）とき、{人|ひと}は{自由|じゆう}の{翼|つばさ}を{羽|は}ばたかせる。

しかし、{現実|げんじつ}のもろもろ（{注|ちゅう}2）が{想像力|そうぞうりょく}や{感性|かんせい}を{邪魔|じゃま}しているかぎり、そうした{無限|むげん}といってよい{自由|じゆう}はやってこない。ヒマで{死|し}にそうな{人|ひと}にも、あの、わくわくする{自由|じゆう}は{訪|おとず}れない。①あの{自由|じゆう}を{取|と}り{戻|もど}すためには、{周囲|しゅうい}の{人|ひと}たちとのつながりを{完全|かんぜん}に{忘|わす}れてしまわなければならない。あるいは、つながりを{完全|かんぜん}に{絶|た}ってまでも、そこに{没入|ぼつにゅう}したい（{注|ちゅう}3）{世界|せかい}が{存在|そんざい}しなければならないということである。

{独|ひと}りは、「ひとりぼっち」である。{孤独|こどく}であり、{寄|よ}る{辺|べ}ない（{注|ちゅう}4）{状態|じょうたい}だ。{中学生|ちゅうがくせい}のなかには——もちろん{高校生|こうこうせい}や{大学生|だいがくせい}のなかにも——、ひとりぼっちになるのが{怖|こわ}くて、{電話機|でんわき}から{離|はな}れられない{人|ひと}も{多|おお}い。{一瞬|いっしゅん}でもスマホ（{注|ちゅう}5）を{手放|てばな}すのが{怖|こわ}くて{仕方|しかた}がない{人|ひと}たちのことを{聞|き}くと、{私|わたし}は「かわいそうだな」と{思|おも}う。{彼|かれ}らは{人|ひと}とのつながりがなくなり、ひとりぼっちの{深|ふか}みに{沈|しず}むのが{怖|こわ}くてたまらないのだ。たぶん、{彼|かれ}ら・{彼女|かのじょ}たちは{孤独|こどく}の{効用|こうよう}を{知|し}らないし、ひとりぼっちゆえの{自由|じゆう}も{知|し}らない。{孤独|こどく}になるところから{始|はじ}まる{創造的|そうぞうてき}な{時間|じかん}の{使|つか}い{方|かた}もまったく{知|し}らない。だから、{彼|かれ}ら・{彼女|かのじょ}たちにとって、{孤独|こどく}はきっと{闇|やみ}のように{暗|くら}くて{深|ふか}いのだ。

そんな、②かわいそうな{子|こ}どもたちをどうすれば{助|たす}けてあげられるだろうか。{独|ひと}りを{恐|おそ}れてはならないと{言|い}ってあげるべきだろうか、{独|ひと}りになることは{怖|こわ}くないと{言|い}っても、きっと{彼|かれ}ら・{彼女|かのじょ}たちには{通|つう}じない。たぶん、その{恐|おそ}れているものこそ{最|もっと}も{貴|とうと}い{宝|たから}なのだと{教|おし}えてくれる{何|なに}かに{出会|であ}うことが{必要|ひつよう}なのだ。{孤独|こどく}が{闇|やみ}ではなく、{光|ひかり}であり、{途方|とほう}もない{創造性|そうぞうせい}の{源泉|げんせん}であることを{知|し}る{機会|きかい}さえあればいい。{多|おお}くの{人々|ひとびと}を{感動|かんどう}させてきた{文学|ぶんがく}{作品|さくひん}や、{感嘆|かんたん}の{声|こえ}を{上|あ}げるしかない{美術|びじゅつ}{作品|さくひん}の{数々|かずかず}。それらは{原稿|げんこう}{用紙|ようし}に{向|む}かい、キャンバスと{向|む}き{合|あ}った{孤独|こどく}な{者|もの}たちの{手|て}から{生|う}まれたものだ。（{中略|ちゅうりゃく}）もちろん、{孤独|こどく}でありさえすれば③{偉大|いだい}な{作品|さくひん}が{生|う}まれるわけではない。{孤独|こどく}は{創造性|そうぞうせい}にとって{十分|じゅうぶん}{条件|じょうけん}ではなく、{必要|ひつよう}{条件|じょうけん}なのだ。だから、いきなり{深遠|しんえん}な{思索|しさく}やらオリジナルな{発想|はっそう}やらがどうして{生|う}まれるのか、と{聞|き}かれても、{答|こた}えようがない。しかしそういう{傑作|けっさく}が{生|う}まれ{落|お}ちた{素地|そじ}（{注|ちゅう}6）にあるのが「{独|ひと}り」の{状態|じょうたい}だということは{知|し}っておくべきだろう。

{孤独|こどく}に{対|たい}して、あまりよくないイメージがあるなら、そのイメージを{払拭|ふっしょく}し、ポジティヴな（{注|ちゅう}7）イメージに{転換|てんかん}しておかなければならない。{孤独|こどく}は{創造|そうぞう}の{源泉|げんせん}であり、{夢中|むちゅう}になれる{悦|よろこ}ばしい{時間|じかん}の{素地|そじ}である。
（{注|ちゅう}1）{背景|はいけい}に{没|ぼっ}する：ここでは、{意識|いしき}されなくなる
（{注|ちゅう}2）もろもろ：さまざまなこと
（{注|ちゅう}3）{没入|ぼつにゅう}する：{熱中|ねっちゅう}する
（{注|ちゅう}4）{寄|よ}る{辺|べ}ない：{頼|たよ}るものがない
（{注|ちゅう}5）スマホ：コンピュータの{機能|きのう}を{持|も}っている{携帯|けいたい}{電話|でんわ}。スマートフォン
（{注|ちゅう}6）{素地|そじ}：もと
（{注|ちゅう}7）ポジティヴな：{肯定的|こうていてき}な`,
      arti: `Pengalaman larut sepenuhnya dalam sesuatu, apa pun itu, hingga lupa waktu adalah waktu yang bagaikan keajaiban bagi siapa pun. Yang memungkinkan keajaiban seperti itu sebenarnya justru waktu "sendirian". Ketika titik temu dengan orang lain di dunia nyata benar-benar hilang dan segala urusan sehari-hari tenggelam ke latar belakang (catatan 1), manusia mengepakkan sayap kebebasan.

Namun, selama berbagai urusan (catatan 2) kenyataan mengganggu imajinasi dan kepekaan, kebebasan yang bisa disebut tak terbatas itu tidak akan datang. Kebebasan yang mendebarkan itu juga tidak datang kepada orang yang hampir mati karena kebosanan. Untuk merebut kembali ① kebebasan itu, kita harus benar-benar melupakan hubungan dengan orang-orang di sekitar. Atau, harus ada dunia yang ingin kita tekuni (catatan 3) sampai rela memutus hubungan sepenuhnya.

Sendirian berarti "sebatang kara". Kesepian, keadaan tanpa tempat bergantung (catatan 4). Di antara siswa SMP — tentu juga di antara siswa SMA dan mahasiswa — banyak yang takut sebatang kara sehingga tidak bisa lepas dari telepon. Mendengar tentang orang-orang yang sangat takut melepaskan ponsel pintar (catatan 5) walau sekejap, saya berpikir, "Kasihan sekali." Mereka sangat takut kehilangan hubungan dengan orang lain dan tenggelam dalam kedalaman kesendirian. Mungkin mereka tidak tahu manfaat kesendirian, dan juga tidak tahu kebebasan yang justru lahir karena sendirian. Mereka sama sekali tidak tahu cara memakai waktu secara kreatif yang dimulai dari menyendiri. Karena itu, bagi mereka, kesendirian pasti gelap dan dalam bagaikan kegelapan.

Bagaimana cara menolong ② anak-anak yang kasihan itu? Haruskah kita berkata kepada mereka bahwa jangan takut sendirian? Meski dikatakan bahwa sendirian itu tidak menakutkan, pasti tidak akan sampai ke hati mereka. Mungkin yang diperlukan adalah bertemu dengan sesuatu yang mengajarkan bahwa yang mereka takuti justru harta paling berharga. Cukup asalkan ada kesempatan untuk mengetahui bahwa kesendirian bukanlah kegelapan, melainkan cahaya, sumber daya cipta yang luar biasa. Karya sastra yang telah menggugah banyak orang, dan karya seni yang hanya bisa membuat kita berdecak kagum. Semua itu lahir dari tangan orang-orang yang sendirian menghadapi kertas naskah dan kanvas. (Bagian dihilangkan) Tentu saja, bukan berarti asal sendirian pasti lahir ③ karya agung. Kesendirian bukan syarat cukup, melainkan syarat perlu bagi daya cipta. Karena itu, kalau ditanya mengapa pemikiran mendalam atau ide orisinal bisa tiba-tiba lahir, tidak ada jawabannya. Namun, kita perlu tahu bahwa yang menjadi dasar (catatan 6) lahirnya karya-karya agung seperti itu adalah keadaan "sendirian".

Jika kita memiliki citra yang kurang baik tentang kesendirian, kita harus menghapus citra itu dan mengubahnya menjadi citra positif (catatan 7). Kesendirian adalah sumber daya cipta, dasar dari waktu menggembirakan di mana kita bisa larut sepenuhnya.
(Catatan 1) 背景に没する: di sini, tidak lagi disadari
(Catatan 2) もろもろ: berbagai hal
(Catatan 3) 没入する: tenggelam, tekun
(Catatan 4) 寄る辺ない: tidak ada yang bisa diandalkan
(Catatan 5) スマホ: telepon genggam yang memiliki fungsi komputer; smartphone
(Catatan 6) 素地: dasar
(Catatan 7) ポジティヴな: positif`,
    },

    // ── 問題13：県立歴史博物館催し物のお知らせ ──
    "13": {
      yomi: `A　{特別|とくべつ}{講座|こうざ}「{古文書|こもんじょ}から{青井市|あおいし}を{知|し}ろう」（{全|ぜん}2{回|かい}）
{定員|ていいん} {各回|かくかい}50{名|めい}　{会場|かいじょう} 2{階|かい} {研修室|けんしゅうしつ}1
{日時|にちじ} ①9{月|がつ}{7日|なのか}（{土|ど}）②9{月|がつ}{14日|じゅうよっか}（{土|ど}）14:00〜16:00
{受講料|じゅこうりょう} {全|ぜん}2{回|かい}1,800{円|えん}　※1{回|かい}のみの{受講|じゅこう}{可|か}、1{回|かい}1,000{円|えん}

B　{体験|たいけん}{教室|きょうしつ}「{武士|ぶし}の{茶道|さどう}」
{定員|ていいん} 20{名|めい}　{会場|かいじょう} {茶室|ちゃしつ}
{日時|にちじ} 9{月|がつ}{6日|むいか}（{金|きん}）9:50〜12:00　{参加費|さんかひ} 500{円|えん}

C　{市内|しない}{建築|けんちく}めぐり「{江戸|えど}{時代|じだい}の{建築|けんちく}」
{定員|ていいん} 20{名|めい}　{見学先|けんがくさき} {旧|きゅう}{杉下|すぎした}{邸|てい}、{旧|きゅう}前岩{邸|てい}など
{日時|にちじ} 9{月|がつ}{1日|ついたち}（{日|にち}）{県立|けんりつ}{歴史|れきし}{博物館|はくぶつかん}9:30{集合|しゅうごう}。12:30{頃|ごろ}{戻|もど}り、{解散|かいさん}。
{参加費|さんかひ} 1,500{円|えん}
その{他|た} 14:00より、{希望者|きぼうしゃ}を{対象|たいしょう}に、{当館|とうかん}で{開催|かいさい}{中|ちゅう}の{特別展|とくべつてん}「{江戸|えど}{末期|まっき}の{建築|けんちく}」の{解説|かいせつ}を{行|おこな}います（{約|やく}30{分|ぷん}）。ご{希望|きぼう}の{方|かた}は{当日|とうじつ}お{申|もう}し{出|で}ください。（{別途|べっと}、{入館|にゅうかん}チケットをご{購入|こうにゅう}ください。）

◆7{月|がつ}{開催|かいさい}の{特別|とくべつ}{講座|こうざ}　{再|さい}{募集|ぼしゅう}！
D　{特別|とくべつ}{講座|こうざ}「白船山{遺跡|いせき}{発掘|はっくつ}の{歴史|れきし}」（{全|ぜん}2{回|かい}）
{募集|ぼしゅう}{人数|にんずう} {各回|かくかい}{若干名|じゃっかんめい}　{会場|かいじょう} 2{階|かい} {研修室|けんしゅうしつ}1
{日時|にちじ} ①7{月|がつ}{20日|はつか}（{土|ど}）②7{月|がつ}{27日|にじゅうしちにち}（{土|ど}）14:00〜16:00
{受講料|じゅこうりょう} {全|ぜん}2{回|かい}1,800{円|えん}　※1{回|かい}のみの{受講|じゅこう}{可|か}、1{回|かい}1,000{円|えん}

【{申込|もうしこみ}{方法|ほうほう}】
A〜C：{往復|おうふく}はがきに{住所|じゅうしょ}・{氏名|しめい}・{電話|でんわ}{番号|ばんごう}・{希望|きぼう}する{催|もよお}し{物|もの}{名|めい}（{複数|ふくすう}{回|かい}{開催|かいさい}の{催|もよお}し{物|もの}は{希望|きぼう}{回|かい}）を{明記|めいき}の{上|うえ}、{下記|かき}{宛先|あてさき}へお{送|おく}りください。お{申|もう}し{込|こ}みが{定員|ていいん}を{超|こ}えた{場合|ばあい}は{抽選|ちゅうせん}となります。
{締切|しめきり}：7{月|がつ}{19日|じゅうくにち}（{金|きん}）{必着|ひっちゃく}

D：{電話|でんわ}でのみ{受|う}け{付|つ}けます。ご{連絡|れんらく}の{時点|じてん}で{定員|ていいん}に{達|たっ}していた{場合|ばあい}、{受講|じゅこう}をお{断|ことわ}りすることもあります。
{締切|しめきり}：{各回|かくかい}の{3日|みっか}{前|まえ}

【{受講料|じゅこうりょう}・{参加費|さんかひ}】
A、C：{開催|かいさい}{日|び}の1{週間|しゅうかん}{前|まえ}までにお{支払|しはら}いください。{詳細|しょうさい}は、お{申|もう}し{込|こ}みの{結果|けっか}をお{知|し}らせする{返信|へんしん}はがきでご{案内|あんない}します。

〒027-3351　{青井市|あおいし}{本町|ほんちょう}6-43　{県立|けんりつ}{歴史|れきし}{博物館|はくぶつかん}{事務室|じむしつ}{企画|きかく}{普及|ふきゅう}{課|か}
お{問合|といあわ}せ・お{申込|もうしこみ}{先|さき}：019-160-0224（{平日|へいじつ}8:30〜17:00{受付|うけつけ}）
B、D：{当日|とうじつ}{会場|かいじょう}でお{支払|しはら}いください。`,
      arti: `A Kuliah khusus "Mengenal Kota Aoi dari Dokumen Kuno" (2 sesi)
Kapasitas 50 orang per sesi, tempat: Ruang Pelatihan 1, lantai 2
Waktu ① 7 September (Sabtu) ② 14 September (Sabtu), 14.00–16.00
Biaya kuliah 1.800 yen untuk 2 sesi ※ boleh ikut 1 sesi saja, 1.000 yen per sesi

B Kelas pengalaman "Upacara Minum Teh ala Samurai"
Kapasitas 20 orang, tempat: ruang teh
Waktu 6 September (Jumat), 9.50–12.00, biaya ikut 500 yen

C Tur arsitektur dalam kota "Arsitektur Zaman Edo"
Kapasitas 20 orang, tempat kunjungan: bekas kediaman Sugishita, bekas kediaman Maeiwa, dll.
Waktu 1 September (Minggu), berkumpul pukul 9.30 di Museum Sejarah Prefektur. Kembali sekitar pukul 12.30, lalu bubar.
Biaya ikut 1.500 yen
Lainnya: Mulai pukul 14.00, bagi yang berminat, akan diberikan penjelasan tentang pameran khusus "Arsitektur Akhir Zaman Edo" yang sedang berlangsung di museum ini (sekitar 30 menit). Yang berminat harap menyampaikan pada hari itu. (Harap membeli tiket masuk museum secara terpisah.)

◆ Kuliah khusus bulan Juli — perekrutan ulang!
D Kuliah khusus "Sejarah Penggalian Situs Shirafuneyama" (2 sesi)
Jumlah peserta: beberapa orang per sesi, tempat: Ruang Pelatihan 1, lantai 2
Waktu ① 20 Juli (Sabtu) ② 27 Juli (Sabtu), 14.00–16.00
Biaya kuliah 1.800 yen untuk 2 sesi ※ boleh ikut 1 sesi saja, 1.000 yen per sesi

[Cara mendaftar]
A–C: Tuliskan dengan jelas alamat, nama, nomor telepon, dan nama acara yang diinginkan (untuk acara dengan beberapa sesi, sesi yang diinginkan) pada kartu pos balasan, lalu kirim ke alamat di bawah. Jika pendaftar melebihi kapasitas, akan diundi.
Batas waktu: harus tiba 19 Juli (Jumat)

D: Hanya menerima lewat telepon. Jika saat menghubungi kapasitas sudah penuh, pendaftaran bisa ditolak.
Batas waktu: 3 hari sebelum setiap sesi

[Biaya kuliah & biaya ikut]
A, C: Harap membayar paling lambat 1 minggu sebelum hari pelaksanaan. Rinciannya akan diberitahukan lewat kartu pos balasan yang memberitahukan hasil pendaftaran.

〒027-3351, Honcho 6-43, Kota Aoi, Museum Sejarah Prefektur, Kantor Bagian Perencanaan & Sosialisasi
Pertanyaan & pendaftaran: 019-160-0224 (hari kerja 8.30–17.00)
B, D: Harap membayar di tempat pada hari pelaksanaan.`,
    },
  },
};
