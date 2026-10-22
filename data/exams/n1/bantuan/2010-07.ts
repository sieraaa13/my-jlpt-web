import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2010
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1007: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{駅前|えきまえ}の{店|みせ}はどこも【{繁盛|はんじょう}】している。",
      arti: "Toko-toko di depan stasiun semuanya 【ramai/laris】.",
    },
    2: {
      yomi: "【{契約|けいやく}】の{内容|ないよう}については、こちらの{書類|しょるい}をご{覧|らん}ください。",
      arti: "Mengenai isi 【kontrak】, silakan lihat dokumen ini.",
    },
    3: {
      yomi: "この{国|くに}は、{昔|むかし}から{貿易|ぼうえき}によって【{潤|うるお}って】きた。",
      arti: "Negara ini sejak dulu 【makmur】 berkat perdagangan.",
      optArti: ["untung (儲かって)", "menutupi biaya (賄って)", "berdagang (商って)", "menjadi makmur (潤って)"],
    },
    4: {
      yomi: "{警備|けいび}が【{手薄|てうす}】なところがないか{調|しら}べた。",
      arti: "Saya memeriksa apakah ada tempat yang penjagaannya 【lemah/kurang】.",
    },
    5: {
      yomi: "{開発|かいはつ}のために{古|ふる}いビルが{次々|つぎつぎ}と【{壊|こわ}されて】いる。",
      arti: "Demi pembangunan, gedung-gedung tua satu per satu 【dihancurkan】.",
      optArti: ["dihancurkan (壊されて)", "diruntuhkan (崩されて)", "dirobohkan (倒されて)", "digencet hancur (潰されて)"],
    },
    6: {
      yomi: "オリンピックが【{華々|はなばな}しく】{開幕|かいまく}した。",
      arti: "Olimpiade dibuka dengan 【meriah】.",
      optArti: ["meriah, gemilang (華々しく)", "khidmat, berwibawa (重々しく)", "mencekam, berlebihan (物々しく)", "berisik (騒々しく)"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "この{連載|れんさい}{小説|しょうせつ}は{全|ぜん}12{話|わ}で（　）する。",
      arti: "Novel bersambung ini (…) dalam 12 episode.",
      optYomi: ["{静止|せいし}", "{成就|じょうじゅ}", "{完結|かんけつ}", "{終息|しゅうそく}"],
      optArti: ["diam, berhenti bergerak", "terwujud (keinginan)", "tamat, selesai sepenuhnya", "berakhir, mereda (wabah, kerusuhan)"],
    },
    8: {
      yomi: "{会議|かいぎ}で{質問|しつもん}に{答|こた}えられなくて{困|こま}っていたら、{課長|かちょう}が（　）してくれた。",
      arti: "Saat saya kesulitan karena tidak bisa menjawab pertanyaan di rapat, kepala bagian (…) saya.",
      optArti: ["menyimpan, mempertahankan (keep)", "membantu menutupi (follow)", "cocok (match)", "meningkatkan (up)"],
    },
    9: {
      yomi: "この{春|はる}、とうとう（　）のマイホームを{手|て}に{入|い}れた。",
      arti: "Musim semi ini, akhirnya saya mendapatkan rumah sendiri yang (…).",
      optYomi: ["{切望|せつぼう}", "{欲望|よくぼう}", "{念願|ねんがん}", "{志願|しがん}"],
      optArti: ["sangat mendambakan", "nafsu, hasrat", "sudah lama didambakan", "mengajukan diri, melamar"],
    },
    10: {
      yomi: "{会議|かいぎ}ではA{案|あん}に{賛成|さんせい}したが、（　）を{言|い}えばB{案|あん}の{方|ほう}がいいと{思|おも}う。",
      arti: "Di rapat saya setuju dengan usulan A, tetapi kalau mengatakan (…), saya pikir usulan B lebih baik.",
      optYomi: ["{本音|ほんね}", "{本気|ほんき}", "{弱音|よわね}", "{弱気|よわき}"],
      optArti: ["isi hati sebenarnya", "kesungguhan", "keluhan, kata-kata putus asa", "sikap pesimis, lemah hati"],
    },
    11: {
      yomi: "{先方|せんぽう}に{協力|きょうりょく}を{依頼|いらい}したが、（　）{断|ことわ}られてしまった。",
      arti: "Saya meminta kerja sama kepada pihak sana, tetapi ditolak (…).",
      optArti: ["lemas, layu", "dengan halus, lembut", "muak, bosan", "sejuk, dingin"],
    },
    12: {
      yomi: "（　）ホテルでは{全室|ぜんしつ}{禁煙|きんえん}です。",
      arti: "Di hotel (…), semua kamar bebas rokok.",
      optYomi: ["{自|じ}", "{主|しゅ}", "{実|じつ}", "{当|とう}"],
      optArti: ["diri sendiri", "utama", "nyata, sebenarnya", "ini, yang bersangkutan (milik kami)"],
    },
    13: {
      yomi: "{新|あたら}しいビジネスを{始|はじ}めるにあたっては、（　）{計画|けいかく}を{立|た}てる{必要|ひつよう}がある。",
      arti: "Dalam memulai bisnis baru, perlu membuat rencana yang (…).",
      optYomi: ["{零細|れいさい}な", "{綿密|めんみつ}な", "{繊細|せんさい}な", "{濃密|のうみつ}な"],
      optArti: ["kecil-kecilan (usaha)", "cermat dan rinci", "halus, peka", "pekat, padat"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{彼|かれ}はお{金|かね}に{関|かん}して【ルーズ】なところがある。",
      arti: "Ia agak 【tidak disiplin/ceroboh】 dalam hal uang.",
      optArti: ["tidak tahu malu", "tidak beres, ceroboh", "cerewet, berisik", "lemah"],
    },
    15: {
      yomi: "この{職場|しょくば}にもかなり【なじんで】きた。",
      arti: "Saya sudah cukup 【menyatu/terbiasa】 dengan tempat kerja ini.",
      optYomi: ["{恵|めぐ}まれて", "{逆|さか}らって", "{飽|あ}きて", "{慣|な}れて"],
      optArti: ["diberkahi", "melawan", "bosan", "terbiasa"],
    },
    16: {
      yomi: "あの{兄弟|きょうだい}はいつもお{互|たが}いに【{張|は}り{合|あ}って】いる。",
      arti: "Kakak beradik itu selalu 【saling bersaing】.",
      optYomi: ["{競争|きょうそう}して", "{応援|おうえん}して", "{無視|むし}して", "{尊重|そんちょう}して"],
      optArti: ["bersaing", "mendukung", "mengabaikan", "menghargai"],
    },
    17: {
      yomi: "ある{日|ひ}、{我|わ}が{家|や}に【{朗報|ろうほう}】が{届|とど}いた。",
      arti: "Suatu hari, 【kabar gembira】 tiba di rumah kami.",
      optYomi: ["{意外|いがい}な{知|し}らせ", "うれしい{知|し}らせ", "{大切|たいせつ}な{知|し}らせ", "めずらしい{知|し}らせ"],
      optArti: ["kabar tak terduga", "kabar gembira", "kabar penting", "kabar langka"],
    },
    18: {
      yomi: "やっと【わずらわしい】{作業|さぎょう}から{解放|かいほう}された。",
      arti: "Akhirnya saya terbebas dari pekerjaan yang 【merepotkan】.",
      optYomi: ["{地味|じみ}な", "{苦手|にがて}な", "{面倒|めんどう}な", "{退屈|たいくつ}な"],
      optArti: ["sederhana, tidak mencolok", "yang tidak dikuasai", "merepotkan", "membosankan"],
    },
    19: {
      yomi: "さっき、{上司|じょうし}に【いやみ】を{言|い}われた。",
      arti: "Tadi saya dilontari 【sindiran】 oleh atasan.",
      optYomi: ["{不満|ふまん}", "{冗談|じょうだん}", "{愚痴|ぐち}", "{皮肉|ひにく}"],
      optArti: ["ketidakpuasan", "lelucon", "keluh kesah", "sindiran, ironi"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "{密集|みっしゅう}",
      arti: "密集 = berjejal rapat, padat (bangunan, orang)",
      optYomi: [
        "この{地区|ちく}は{古|ふる}い{住宅|じゅうたく}が{密集|みっしゅう}している。",
        "{毎週|まいしゅう}{水曜日|すいようび}に{会議|かいぎ}のメンバーを{密集|みっしゅう}している。",
        "このコンサートには{世界中|せかいじゅう}から{有名|ゆうめい}な{歌手|かしゅ}が{密集|みっしゅう}している。",
        "{趣味|しゅみ}で{外国|がいこく}の{切手|きって}を{密集|みっしゅう}している。",
      ],
      optArti: [
        "Kawasan ini 'padat berjejal' dengan rumah-rumah tua.",
        "Setiap hari Rabu, anggota rapat 'dijejalkan rapat'.",
        "Di konser ini penyanyi terkenal dari seluruh dunia 'berjejal rapat'.",
        "Sebagai hobi, saya 'menjejalkan rapat' prangko luar negeri.",
      ],
    },
    21: {
      yomi: "{潔|いさぎよ}い",
      arti: "潔い = dengan jantan, lapang dada (mengakui/menerima tanpa berkelit)",
      optYomi: [
        "{間違|まちが}ったことをしたと{思|おも}うなら、{潔|いさぎよ}く{謝|あやま}ったほうがいいよ。",
        "{裁判|さいばん}で、{被告|ひこく}は「{自分|じぶん}は{無実|むじつ}だ、{潔|いさぎよ}い」と{主張|しゅちょう}した。",
        "{資料|しりょう}は{配|くば}らずに、{潔|いさぎよ}く{説明|せつめい}だけですませた。",
        "{家|いえ}に{帰|かえ}ったら、{潔|いさぎよ}くなるまでしっかり{手|て}を{洗|あら}いましょう。",
      ],
      optArti: [
        "Kalau merasa sudah berbuat salah, sebaiknya minta maaf 'dengan jantan'.",
        "Di pengadilan, terdakwa bersikeras, \"Saya tidak bersalah, saya 'jantan'.\"",
        "Tanpa membagikan materi, ia menyelesaikannya 'dengan jantan' hanya dengan penjelasan.",
        "Setelah pulang, cucilah tangan dengan saksama sampai 'jantan'.",
      ],
    },
    22: {
      yomi: "{発足|ほっそく}",
      arti: "発足 = mulai berdiri/beroperasi (organisasi, lembaga)",
      optYomi: [
        "これから、{先日|せんじつ}{発足|ほっそく}した{問題|もんだい}について{検討|けんとう}します。",
        "{新|しん}{技術|ぎじゅつ}を{発足|ほっそく}したおかげで、{他社|たしゃ}との{勝負|しょうぶ}に{勝|か}った。",
        "この{団体|だんたい}は{先月|せんげつ}{発足|ほっそく}したばかりです。",
        "この{出版社|しゅっぱんしゃ}は、{来月|らいげつ}、{新|あたら}しい{週刊誌|しゅうかんし}を{発足|ほっそく}する。",
      ],
      optArti: [
        "Sekarang kita akan membahas masalah yang 'berdiri' beberapa hari lalu.",
        "Berkat 'mendirikan' teknologi baru, kami menang bersaing dengan perusahaan lain.",
        "Organisasi ini baru 'berdiri' bulan lalu.",
        "Bulan depan penerbit ini akan 'mendirikan' majalah mingguan baru.",
      ],
    },
    23: {
      arti: "にぎわう = ramai, semarak (dipenuhi banyak orang)",
      optYomi: [
        "{朝|あさ}の{電車|でんしゃ}は{会社|かいしゃ}に{行|い}くサラリーマンでにぎわっている。",
        "{休|やす}みの{前|まえ}の{日|ひ}の{夜|よる}は、どこのレストランもにぎわっている。",
        "{都会|とかい}の{真|ま}ん{中|なか}にあるこの{公園|こうえん}は、いつも{緑|みどり}でにぎわっている。",
        "この{図書館|としょかん}には、いろいろな{分野|ぶんや}の{本|ほん}がにぎわっている。",
      ],
      optArti: [
        "Kereta pagi 'semarak' oleh karyawan yang berangkat kerja.",
        "Pada malam sebelum hari libur, restoran mana pun 'ramai'.",
        "Taman di tengah kota ini selalu 'ramai' oleh hijau pepohonan.",
        "Di perpustakaan ini buku dari berbagai bidang 'ramai'.",
      ],
    },
    24: {
      arti: "ひとまず = untuk sementara, untuk saat ini (sudahi dulu)",
      optYomi: [
        "この{機械|きかい}はひとまず{動|うご}かすとすぐに{止|と}められない。",
        "{政府|せいふ}が{発表|はっぴょう}した{経済|けいざい}{対策|たいさく}は、ひとまずしか{効果|こうか}がなかった。",
        "ご{飯|はん}を{食|た}べてひとまずたってから、{薬|くすり}を{飲|の}んでください。",
        "{今日|きょう}の{作業|さぎょう}はひとまずこれで{終|お}わりにしよう。",
      ],
      optArti: [
        "Mesin ini kalau 'untuk sementara' dijalankan tidak bisa langsung dihentikan.",
        "Kebijakan ekonomi yang diumumkan pemerintah hanya berefek 'untuk sementara'.",
        "Minumlah obat setelah makan dan lewat 'untuk sementara'.",
        "Pekerjaan hari ini kita sudahi dulu 'untuk sementara' sampai di sini.",
      ],
    },
    25: {
      yomi: "{満喫|まんきつ}",
      arti: "満喫 = menikmati sepuas-puasnya",
      optYomi: [
        "この{音楽|おんがく}を{聞|き}くと、{気持|きも}ちがとても{満喫|まんきつ}する。",
        "この{雑誌|ざっし}には、{安|やす}いアパートの{情報|じょうほう}が{満喫|まんきつ}されている。",
        "{海外|かいがい}{旅行|りょこう}に{行|い}って、{久|ひさ}しぶりの{休暇|きゅうか}を{満喫|まんきつ}した。",
        "これらの{条件|じょうけん}を{満喫|まんきつ}する{人材|じんざい}を{探|さが}しています。",
      ],
      optArti: [
        "Kalau mendengar musik ini, perasaan saya sangat 'menikmati sepuasnya'.",
        "Majalah ini 'dinikmati sepuasnya' dengan informasi apartemen murah.",
        "Saya pergi ke luar negeri dan 'menikmati sepuasnya' liburan yang sudah lama tidak saya dapat.",
        "Kami mencari SDM yang 'menikmati sepuasnya' syarat-syarat ini.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "この{美術館|びじゅつかん}の{絵|え}を{全部|ぜんぶ}{見|み}ようと{思|おも}ったら、{半日|はんにち}（　）{足|た}りないと{思|おも}います。",
      arti: "Kalau ingin melihat semua lukisan di museum ini, saya rasa (…) setengah hari tidak akan cukup.",
      optArti: ["selama (rentang waktu)", "dari ... sampai", "sampai (batas)", "(kalau) dengan ..."],
    },
    27: {
      yomi: "{部屋|へや}の{広|ひろ}さも{考|かんが}えず、{店員|てんいん}に{勧|すす}められる（　）、{大|おお}きいテーブルを{買|か}ってしまった。",
      arti: "Tanpa memikirkan luas kamar, saya membeli meja besar (…) disarankan pegawai toko.",
      optArti: ["begitu saja (menuruti)", "(bentuk tidak tepat) ままを", "meski begitu saja", "padahal begitu saja"],
    },
    28: {
      yomi: "A{会社|がいしゃ}の{元|もと}{社員|しゃいん}が11{日|にち}、{突然|とつぜん}の{解雇|かいこ}を{不当|ふとう}（　）、{解雇|かいこ}{取|と}り{消|け}しを{同社|どうしゃ}に{求|もと}める{訴|うった}えを{起|お}こした。",
      arti: "Pada tanggal 11, mantan karyawan Perusahaan A mengajukan gugatan yang menuntut perusahaan membatalkan PHK, (…) PHK mendadak itu tidak sah.",
      optArti: ["menjadi", "dengan menganggap/menyatakan sebagai", "dengan menjadikan", "menjadi (に)"],
    },
    29: {
      yomi: "{下水道|げすいどう}{工事|こうじ}{中|ちゅう}、ご{不便|ふべん}をおかけ{致|いた}しますが、どうかご{理解|りかい}（　）、よろしくお{願|ねが}い{申|もう}し{上|あ}げます。",
      arti: "Selama pekerjaan saluran pembuangan, kami mohon maaf atas ketidaknyamanannya; kami (…) pengertian Anda dan mohon kerja samanya.",
      optYomi: [null, null, "{差|さ}し{上|あ}げたく", "{申|もう}しあげたく"],
      optArti: ["ingin melakukan (merendah)", "ingin menerima/memohon (merendah)", "ingin memberikan (merendah)", "ingin menyampaikan (merendah)"],
    },
    30: {
      yomi: "{間違|まちが}い{電話|でんわ}をかけてきて{謝|あやま}りもしないとは、{失礼|しつれい}（　）。",
      arti: "Salah sambung lalu tidak minta maaf pula, sungguh (…) tidak sopan.",
      optYomi: [null, null, "{極|きわ}まりない", "に{越|こ}したことはない"],
      optArti: ["sangat (perasaan)", "tidak bisa tidak", "sungguh keterlaluan, amat sangat", "paling baik kalau"],
    },
    31: {
      yomi: "（{電車|でんしゃ}の{中|なか}で）A「いつもならこの{時間帯|じかんたい}は{込|こ}んでるのに、{今日|きょう}は{空|す}いてるね。」B「{祝日|しゅくじつ}だからね。」A「あ、そっか。どうりで{空|す}いてる（　）。」",
      arti: "(Di kereta) A: \"Biasanya jam segini penuh, tapi hari ini sepi ya.\" B: \"Kan hari libur nasional.\" A: \"Oh, iya. Pantas saja sepi (…).\"",
      optYomi: [null, "に{決|き}まってる", "に{違|ちが}いない", null],
      optArti: ["kadang ada", "sudah pasti", "pasti, tidak salah lagi", "(wajar) memang semestinya"],
    },
    32: {
      yomi: "{今回|こんかい}の{事件|じけん}で{山田|やまだ}{氏|し}の{政治的|せいじてき}{影響力|えいきょうりょく}が{完全|かんぜん}に{失|うしな}われる（　）、{弱|よわ}まることは{間違|まちが}いないだろう。",
      arti: "Akibat kasus ini, (…) pengaruh politik Tuan Yamada hilang sepenuhnya, tetapi melemah sudah pasti.",
      optArti: ["meski tidak sampai", "padahal tidak", "meski tidak ada pilihan lain", "padahal tidak ada pilihan lain"],
    },
    33: {
      yomi: "「18{歳|さい}までの{育児|いくじ}は{母親|ははおや}がすべきだ」と{言|い}う{人|ひと}もいるが、{子育|こそだ}てをするのが{母親|ははおや}で（　）、{必|かなら}ずしもそうではないと{思|おも}う。",
      arti: "Ada orang yang berkata \"pengasuhan anak sampai usia 18 harus dilakukan ibu\", tetapi (…) yang mengasuh harus ibu, saya rasa tidak selalu begitu.",
      optArti: ["hanya karena harus", "kalau ditanya apakah harus", "hanya karena tidak boleh", "kalau ditanya apakah tidak boleh"],
    },
    34: {
      yomi: "もう{二度|にど}と{恋|こい}（　）と{固|かた}く{心|こころ}に{誓|ちか}ったはずだったが、{知|し}らず{知|し}らずのうちに{彼女|かのじょ}のことが{好|す}きになっていた。",
      arti: "Saya sudah bersumpah dalam hati (…) jatuh cinta lagi, tetapi tanpa sadar saya mulai menyukai dia.",
      optArti: ["justru (tidak akan) ...!", "masa saya mau ... lagi! (tidak akan)", "apakah justru ... ?", "apakah hal semacam ... itu dilakukan?"],
    },
    35: {
      yomi: "{先日|せんじつ}{提出|ていしゅつ}した{私|わたし}の{意見書|いけんしょ}は、{単|たん}に{決定|けってい}に{至|いた}るプロセスの{問題点|もんだいてん}を{指摘|してき}（　）、{決定|けってい}そのものに{反対|はんたい}するものではありません。",
      arti: "Pernyataan pendapat yang saya serahkan kemarin (…) masalah dalam proses menuju keputusan, bukan menentang keputusan itu sendiri.",
      optArti: ["hanya hampir menunjukkan", "sampai hampir menunjukkan", "hanya bermaksud menunjukkan", "sampai bermaksud menunjukkan"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "このレストランは、＿＿ ＿＿ ★ ＿＿と{評判|ひょうばん}だ。",
      arti: "Restoran ini terkenal masakan ikannya enak — pantas saja, karena pemiliknya juga mengelola toko ikan.",
      optYomi: [null, "{主人|しゅじん}が", "{魚屋|さかなや}も{経営|けいえい}している", "{魚|さかな}{料理|りょうり}がおいしい"],
      optArti: ["pantas saja karena", "pemiliknya", "juga mengelola toko ikan", "masakan ikannya enak"],
    },
    37: {
      yomi: "A「{申|もう}し{訳|わけ}ない。{僕|ぼく}が＿＿ ＿＿ ★ ＿＿ことになってしまって。」B「あ、いいえ、{気|き}にしないでください。」",
      arti: "A: \"Maaf ya. Gara-gara saya membuat kesalahan, kamu pun jadi harus lembur.\" B: \"Ah, tidak, jangan dipikirkan.\"",
      optYomi: ["{残業|ざんぎょう}してもらう", "{君|きみ}にまで", null, null],
      optArti: ["(meminta) lembur", "sampai kamu pun", "membuat kesalahan", "gara-gara (hanya karena)"],
    },
    38: {
      yomi: "そもそもこの{情報|じょうほう}が、{責任者|せきにんしゃ}である{彼|かれ}に＿＿ ＿＿ ★ ＿＿と{思|おも}う。",
      arti: "Menurut saya, dari kenyataan bahwa informasi ini tidak sampai kepada dia selaku penanggung jawab saja, sejak awal sudah aneh.",
      optYomi: ["{伝|つた}わっていない", null, null, null],
      optArti: ["tidak tersampaikan", "aneh", "hal (bahwa)", "dari ... saja sudah"],
    },
    39: {
      yomi: "アルバイト{先|さき}の{仲間|なかま}は、みんな＿＿ ＿＿ ★ ＿＿{話題|わだい}が{弾|はず}んで、いつも{盛|も}り{上|あ}がっています。",
      arti: "Teman-teman di tempat kerja paruh waktu umurnya berdekatan semua, jadi obrolan khas satu generasi mengalir lancar dan selalu seru.",
      optYomi: [null, null, "{同世代|どうせだい}", "{年|とし}が{近|ちか}い"],
      optArti: ["karena juga", "yang khas (hanya ada pada)", "satu generasi", "umurnya berdekatan"],
    },
    40: {
      yomi: "ジョン「この『りかい』という{言葉|ことば}はどういう{意味|いみ}ですか。」アリ「ああ、{確|たし}か『わかる』＿＿ ★ ＿＿ ＿＿んですけど。」",
      arti: "John: \"Kata 'rikai' ini artinya apa?\" Ali: \"Oh, kalau tidak salah artinya kira-kira semacam 'mengerti', begitu.\"",
      optYomi: [null, "と{思|おも}う", null, "{意味|いみ}だった"],
      optArti: ["semacam", "saya pikir", "yang disebut", "artinya (dulu) adalah"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: [null, null, "その{結果|けっか}", null],
      optArti: ["ngomong-ngomong", "meskipun begitu", "akibatnya", "walaupun demikian"],
    },
    42: {
      optYomi: ["{親|した}しまれることになる", "{親|した}しみやすくさえあった", "{親|した}しくなるだけのことだ", "{親|した}しめるのではなかったか"],
      optArti: ["jadi lebih disukai/dekat di hati", "bahkan terasa mudah didekati", "hanya sekadar menjadi akrab", "bukankah bisa diakrabi?"],
    },
    43: {
      optYomi: ["{子|こ}どもの{父|ちち}", "{父|ちち}の{子|こ}ども", "このような{子|こ}どもの{父親|ちちおや}", "そういう{父親|ちちおや}の{子|こ}ども"],
      optArti: ["ayah dari anak", "anak dari ayah", "ayah dari anak seperti ini", "anak dari ayah seperti itu"],
    },
    44: {
      optYomi: ["{父|ちち}である", "{父|ちち}ではない", "{父|ちち}だったのだ", "{父|ちち}ではないのか"],
      optArti: ["adalah ayah", "bukan ayah", "ternyata (dulu) ayah", "bukankah ayah?"],
    },
    45: {
      optYomi: ["{対等|たいとう}", "{上下|じょうげ}", "{他人|たにん}", "{家族|かぞく}"],
      optArti: ["setara", "atas-bawah", "orang lain", "keluarga"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "コミュニケーションの{全体像|ぜんたいぞう}に{最|もっと}も{近|ちか}いものはどれか。",
      arti: "Manakah yang paling mendekati gambaran utuh komunikasi?",
      optYomi: [
        "{視線|しせん}や{仕草|しぐさ}で{相手|あいて}と{意思|いし}を{疎通|そつう}させること",
        "{言葉|ことば}や{言葉|ことば}{以外|いがい}の{方法|ほうほう}で{思|おも}いを{伝|つた}え{合|あ}うこと",
        "{黙|だま}って{何|なに}も{言|い}わないことで{思|おも}いを{伝|つた}え{合|あ}うこと",
        "{言葉|ことば}を{使|つか}って{相手|あいて}と{意思|いし}を{疎通|そつう}させること",
      ],
      optArti: [
        "Saling memahami maksud dengan lawan bicara melalui tatapan dan gerak-gerik",
        "Saling menyampaikan perasaan dengan kata-kata maupun cara selain kata-kata",
        "Saling menyampaikan perasaan dengan diam tanpa berkata apa pun",
        "Saling memahami maksud dengan lawan bicara menggunakan kata-kata",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}が{考|かんが}えるネット{上|じょう}の{透明|とうめい}{人間|にんげん}の{世界|せかい}とは、どのようなものか。",
      arti: "Seperti apakah \"dunia manusia transparan\" di internet menurut penulis?",
      optYomi: [
        "{情報|じょうほう}の{発信者|はっしんしゃ}が{誰|だれ}なのかが{見|み}えてしまう{社会|しゃかい}",
        "{犯罪|はんざい}を{起|お}こしても{誰|だれ}からも{気|き}づかれない{社会|しゃかい}",
        "どんな{情報|じょうほう}を{発信|はっしん}しても{犯罪|はんざい}にならない{社会|しゃかい}",
        "{誰|だれ}がどこに{接続|せつぞく}しているのかわからない{社会|しゃかい}",
      ],
      optArti: [
        "Masyarakat di mana siapa pengirim informasi bisa terlihat",
        "Masyarakat di mana kejahatan pun tidak disadari siapa pun",
        "Masyarakat di mana informasi apa pun yang disebarkan tidak menjadi kejahatan",
        "Masyarakat di mana tidak diketahui siapa terhubung ke mana",
      ],
    },
    48: {
      yomi: "この{文書|ぶんしょ}の{件名|けんめい}として、（　）に{入|はい}るのはどれか。",
      arti: "Sebagai perihal (judul) dokumen ini, mana yang masuk ke dalam (　)?",
      optYomi: [
        "{回答|かいとう}・{発送|はっそう}{等|とう}の{遅|おく}れに{関|かん}するおわび",
        "{休業|きゅうぎょう}{中|ちゅう}のホームページ{停止|ていし}のご{案内|あんない}",
        "{年末|ねんまつ}{年始|ねんし}の{休業日|きゅうぎょうび}のお{知|し}らせ",
        "{問|と}い{合|あ}わせ{先|さき}の{変更|へんこう}について",
      ],
      optArti: [
        "Permohonan maaf atas keterlambatan jawaban, pengiriman, dll.",
        "Pemberitahuan penghentian situs web selama libur",
        "Pemberitahuan hari libur akhir dan awal tahun",
        "Tentang perubahan alamat kontak",
      ],
    },
    49: {
      yomi: "{競争|きょうそう}に{勝|か}つような{商品名|しょうひんめい}にするには、まず{何|なに}が{必要|ひつよう}だと{述|の}べているか。",
      arti: "Menurut tulisan, apa yang pertama-tama diperlukan agar nama produk bisa memenangkan persaingan?",
      optYomi: [
        "{音|おと}の{持|も}つ{表情|ひょうじょう}に{敏感|びんかん}になり、{音|おと}と{味|あじ}とのバランスに{気|き}を{配|くば}る。",
        "{自社|じしゃ}のイメージを{大切|たいせつ}に{思|おも}い、{消費者|しょうひしゃ}の{音|おと}の{好|この}みを{考慮|こうりょ}する。",
        "{音|おと}と{味|あじ}への{感性|かんせい}を{磨|みが}き、その{商品|しょうひん}が{持|も}つイメージを{考慮|こうりょ}する。",
        "{開発|かいはつ}した{商品|しょうひん}への{思|おも}いを{大切|たいせつ}にし、{音|おと}の{持|も}つ{響|ひび}きに{気|き}を{配|くば}る。",
      ],
      optArti: [
        "Peka terhadap ekspresi bunyi dan memperhatikan keseimbangan bunyi dengan rasa.",
        "Menghargai citra perusahaan sendiri dan mempertimbangkan selera bunyi konsumen.",
        "Mengasah kepekaan terhadap bunyi dan rasa, serta mempertimbangkan citra produk itu.",
        "Menghargai perasaan terhadap produk yang dikembangkan dan memperhatikan gema bunyinya.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{寛容|かんよう}な{気持|きも}ちになるとあるが、なぜそうなるのか。",
      arti: "Tertulis \"menjadi berlapang hati\"; mengapa bisa begitu?",
      optYomi: [
        "{相手|あいて}の{話|はなし}が{自分|じぶん}の{話|はなし}よりおもしろくて{引|ひ}きこまれてしまうから",
        "{話|はなし}を{奪|うば}ってしまった{人|ひと}の{態度|たいど}が{堂々|どうどう}としていて{魅力的|みりょくてき}だから",
        "{自分|じぶん}の{代|か}わりに{話|はな}し{上手|じょうず}な{人|ひと}が{話|はなし}をしてくれれば{助|たす}かるから",
        "{相手|あいて}は{確|たし}かに{話|はな}し{上手|じょうず}だけれど、{聞|き}き{上手|じょうず}とは{言|い}えないから",
      ],
      optArti: [
        "Karena cerita orang itu lebih menarik daripada ceritanya sendiri sehingga ia ikut terhanyut",
        "Karena sikap orang yang merebut pembicaraan itu percaya diri dan menarik",
        "Karena terbantu jika orang yang pandai bicara berbicara menggantikan dirinya",
        "Karena orang itu memang pandai bicara, tetapi tidak bisa disebut pendengar yang baik",
      ],
    },
    51: {
      yomi: "{話|はな}し{上手|じょうず}になるにはどうすればいいと{筆者|ひっしゃ}は{述|の}べているか。",
      arti: "Menurut penulis, apa yang harus dilakukan agar pandai berbicara?",
      optYomi: [
        "{話|はな}し{上手|じょうず}な{人|ひと}になぜ{上手|じょうず}なのかと{尋|たず}ねて{分析|ぶんせき}する。",
        "どんな{話題|わだい}でも{自分|じぶん}の{話|はなし}にかえられるようにする。",
        "{人|ひと}の{真似|まね}をしないで、{聞|き}き{上手|じょうず}になるための{研究|けんきゅう}をする。",
        "{話|はな}し{上手|じょうず}な{人|ひと}をよく{観察|かんさつ}して、その{特徴|とくちょう}を{自分|じぶん}のものにする。",
      ],
      optArti: [
        "Bertanya kepada orang yang pandai bicara mengapa ia pandai, lalu menganalisisnya.",
        "Berusaha agar topik apa pun bisa dialihkan menjadi cerita sendiri.",
        "Tidak meniru orang lain, dan meneliti cara menjadi pendengar yang baik.",
        "Mengamati dengan baik orang yang pandai bicara, lalu menjadikan ciri-cirinya milik sendiri.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えと{合|あ}っているのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{聞|き}き{上手|じょうず}になるだけでなく、{話|はな}し{上手|じょうず}な{人|ひと}にも{学|まな}んでみるとよい。",
        "{聞|き}き{上手|じょうず}は{損|そん}をすることがあるので、{話|はな}し{上手|じょうず}になったほうがよい。",
        "{他人|たにん}に{嫌|きら}われないように、{話|はな}し{上手|じょうず}より{聞|き}き{上手|じょうず}になったほうがよい。",
        "{聞|き}き{上手|じょうず}から{話|はな}し{上手|じょうず}になるには、{自分|じぶん}の{話|はな}し{方|かた}を{分析|ぶんせき}してみるとよい。",
      ],
      optArti: [
        "Tidak hanya menjadi pendengar yang baik, sebaiknya juga belajar dari orang yang pandai bicara.",
        "Pendengar yang baik kadang dirugikan, jadi lebih baik menjadi pandai bicara.",
        "Agar tidak dibenci orang, lebih baik menjadi pendengar yang baik daripada pandai bicara.",
        "Untuk beralih dari pendengar yang baik menjadi pandai bicara, sebaiknya menganalisis cara bicara sendiri.",
      ],
    },
    53: {
      yomi: "ツバメが{日本|にほん}へ{渡|わた}ってくるのはなぜか。",
      arti: "Mengapa burung layang-layang bermigrasi ke Jepang?",
      optYomi: [
        "{南半球|みなみはんきゅう}でひなが{育|そだ}ち、えさとなる{昆虫|こんちゅう}が{不足|ふそく}するから",
        "{日本|にほん}が{春|はる}になる{頃|ころ}、ひなが{海|うみ}を{渡|わた}れるようになるから",
        "{日本|にほん}が{暖|あたた}かくなるとえさがふえ、{子育|こそだ}てがしやすいから",
        "{日本|にほん}は{冬|ふゆ}になっても、{他|ほか}の{地域|ちいき}より{暖|あたた}かくえさが{豊富|ほうふ}だから",
      ],
      optArti: [
        "Karena anak burung tumbuh di belahan bumi selatan dan serangga untuk makanan menjadi kurang",
        "Karena saat Jepang memasuki musim semi, anak burung sudah mampu menyeberangi laut",
        "Karena saat Jepang menghangat makanan bertambah, sehingga mudah membesarkan anak",
        "Karena Jepang, bahkan di musim dingin, lebih hangat dan kaya makanan daripada wilayah lain",
      ],
    },
    54: {
      yomi: "「ツバメの{初見日|しょけんび}」を{記録|きろく}しているのは{何|なに}のためか。",
      arti: "Untuk apa \"hari pertama terlihatnya burung layang-layang\" dicatat?",
      optYomi: [
        "ツバメの{渡|わた}りのルートを{解明|かいめい}するため",
        "{日照|にっしょう}{時間|じかん}の{短縮|たんしゅく}の{原因|げんいん}を{究明|きゅうめい}するため",
        "{世界|せかい}の{気象|きしょう}や{環境|かんきょう}の{変化|へんか}を{研究|けんきゅう}するため",
        "{観察者|かんさつしゃ}や{研究者|けんきゅうしゃ}に{気象|きしょう}{情報|じょうほう}を{提供|ていきょう}するため",
      ],
      optArti: [
        "Untuk mengungkap rute migrasi burung layang-layang",
        "Untuk menyelidiki penyebab berkurangnya lama penyinaran matahari",
        "Untuk meneliti perubahan cuaca dan lingkungan dunia",
        "Untuk memberikan informasi cuaca kepada pengamat dan peneliti",
      ],
    },
    55: {
      yomi: "{最近|さいきん}の「ツバメの{初見日|しょけんび}」と{日照|にっしょう}{時間|じかん}の{関係|かんけい}について{正|ただ}しいものはどれか。",
      arti: "Mana yang benar tentang hubungan antara \"hari pertama terlihatnya burung layang-layang\" belakangan ini dan lama penyinaran matahari?",
      optYomi: [
        "{南半球|みなみはんきゅう}などで{日照|にっしょう}{時間|じかん}に{変化|へんか}がおきてツバメの{渡|わた}りが{早|はや}まっているのだろう。",
        "{温暖化|おんだんか}で{日本|にほん}の{日照|にっしょう}{時間|じかん}が{長|なが}くなり、ツバメの{渡|わた}りが{遅|おく}れてきているようだ。",
        "ツバメは{毎年|まいとし}{日照|にっしょう}{時間|じかん}と{関係|かんけい}なく{渡|わた}りを{始|はじ}めるようになったのかもしれない。",
        "{日本|にほん}の{日照|にっしょう}{時間|じかん}にくるいがでたために、ツバメが{早|はや}く{渡|わた}ってくるようになった。",
      ],
      optArti: [
        "Mungkin terjadi perubahan lama penyinaran di belahan bumi selatan dan sekitarnya sehingga migrasi burung layang-layang menjadi lebih awal.",
        "Karena pemanasan global, lama penyinaran di Jepang bertambah dan migrasi burung layang-layang tampaknya makin terlambat.",
        "Mungkin burung layang-layang kini mulai bermigrasi tiap tahun tanpa terkait lama penyinaran.",
        "Karena lama penyinaran di Jepang kacau, burung layang-layang jadi datang lebih awal.",
      ],
    },
    56: {
      yomi: "{行為|こうい}の{中身|なかみ}からひどくズレていますとあるが、{筆者|ひっしゃ}は{行為|こうい}の{中身|なかみ}をどのように{説明|せつめい}しているか。",
      arti: "Tertulis \"sangat melenceng dari isi tindakannya\"; bagaimana penulis menjelaskan isi tindakan itu?",
      optYomi: [
        "{生産者|せいさんしゃ}の{立場|たちば}に{立|た}って{経済|けいざい}を{支|ささ}えること",
        "ものを{使|つか}うことで、{何|なに}かをつくり{出|だ}すこと",
        "{生産的|せいさんてき}な{活動|かつどう}に{従事|じゅうじ}して{一日|いちにち}を{終|お}えること",
        "ものを{使|つか}って、その{形|かたち}を{消|け}してしまうこと",
      ],
      optArti: [
        "Menopang ekonomi dengan berdiri di posisi produsen",
        "Menciptakan sesuatu dengan menggunakan barang",
        "Mengakhiri hari dengan menekuni kegiatan produktif",
        "Menggunakan barang sampai bentuknya lenyap",
      ],
    },
    57: {
      yomi: "{筆者|ひっしゃ}は{衣服|いふく}にどのような{役割|やくわり}があると{述|の}べているか。",
      arti: "Menurut penulis, peran apa yang dimiliki pakaian?",
      optYomi: [
        "{体温|たいおん}を{一定|いってい}に{保|たも}つだけでなく、{着|き}る{人|ひと}に{満足感|まんぞくかん}をあたえる。",
        "{次々|つぎつぎ}に{新|あら}たな{流行|りゅうこう}を{生|う}み{出|だ}し、{人々|ひとびと}の{消費|しょうひ}{行動|こうどう}を{促進|そくしん}する。",
        "{着|き}る{人|ひと}の{人柄|ひとがら}や{個性|こせい}を{引|ひ}き{出|だ}すことで、{生活|せいかつ}をより{充実|じゅうじつ}させる。",
        "{生命|せいめい}を{守|まも}るだけでなく、{他者|たしゃ}に{対|たい}する{自分|じぶん}のイメージを{創造|そうぞう}する。",
      ],
      optArti: [
        "Tidak hanya menjaga suhu tubuh tetap stabil, tetapi juga memberi rasa puas kepada pemakainya.",
        "Terus-menerus melahirkan tren baru dan mendorong perilaku konsumsi orang.",
        "Membuat hidup lebih bermakna dengan menonjolkan watak dan kepribadian pemakainya.",
        "Tidak hanya menjaga nyawa, tetapi juga menciptakan citra diri di mata orang lain.",
      ],
    },
    58: {
      yomi: "{筆者|ひっしゃ}が{消費|しょうひ}という{言葉|ことば}を{不適切|ふてきせつ}と{考|かんが}えているのはなぜか。",
      arti: "Mengapa penulis menganggap kata \"konsumsi\" tidak tepat?",
      optYomi: [
        "{言葉|ことば}のイメージが{一般的|いっぱんてき}な{用|もち}い{方|かた}と{合|あ}わないから",
        "{生産|せいさん}との{対立|たいりつ}が{十分|じゅうぶん}に{示|しめ}されていない{言|い}い{方|かた}だから",
        "{物|もの}を{使|つか}って{無|な}くす{行為|こうい}を{消極的|しょうきょくてき}に{示|しめ}した{言|い}い{方|かた}だから",
        "{言葉|ことば}のイメージがその{行為|こうい}の{実態|じったい}を{示|しめ}していないから",
      ],
      optArti: [
        "Karena citra kata itu tidak cocok dengan cara pemakaian umumnya",
        "Karena ungkapan itu tidak cukup menunjukkan pertentangannya dengan produksi",
        "Karena ungkapan itu menggambarkan secara negatif tindakan memakai barang sampai habis",
        "Karena citra kata itu tidak mencerminkan kenyataan tindakan tersebut",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "①{不思議|ふしぎ}に{思|おも}われるとあるが、{人々|ひとびと}は{何|なに}を{不思議|ふしぎ}に{思|おも}うのか。",
      arti: "Tertulis \"① mungkin dianggap aneh\"; apa yang dianggap aneh oleh orang-orang?",
      optYomi: [
        "{心理学|しんりがく}では{感情|かんじょう}{機能|きのう}についてまだ{十分|じゅうぶん}わかっていないこと",
        "{心理学|しんりがく}では{認知|にんち}と{感情|かんじょう}の{関係|かんけい}がまだ{解明|かいめい}されていないこと",
        "{心理学|しんりがく}は{感情|かんじょう}の{働|はたら}きを{研究|けんきゅう}するのが{得意|とくい}だということ",
        "{心理学|しんりがく}が{昔|むかし}から{心|こころ}について{研究|けんきゅう}してきたということ",
      ],
      optArti: [
        "Bahwa psikologi belum cukup memahami fungsi emosi",
        "Bahwa psikologi belum mengungkap hubungan antara kognisi dan emosi",
        "Bahwa psikologi pandai meneliti kerja emosi",
        "Bahwa psikologi sejak dulu meneliti tentang jiwa",
      ],
    },
    60: {
      yomi: "{筆者|ひっしゃ}の{言|い}う②{全体的|ぜんたいてき}な「{生|せい}」の{体験|たいけん}とは{何|なに}か。",
      arti: "Apa yang dimaksud penulis dengan \"② pengalaman 'hidup' secara utuh\"?",
      optYomi: [
        "{心|こころ}で{感|かん}じとったことを、そのまま{行動|こうどう}に{移|うつ}すような{体験|たいけん}",
        "{身|み}の{回|まわ}りの{世界|せかい}を{目|め}や{耳|みみ}で{認識|にんしき}して{考|かんが}え、{心|こころ}で{感|かん}じる{体験|たいけん}",
        "どのように{周囲|しゅうい}を{見|み}たり{聴|き}いたりして{考|かんが}えるかという{体験|たいけん}",
        "{感覚|かんかく}や{知覚|ちかく}で{周囲|しゅうい}の{世界|せかい}のものをとらえようとする{体験|たいけん}",
      ],
      optArti: [
        "Pengalaman langsung mewujudkan apa yang dirasakan hati menjadi tindakan",
        "Pengalaman mengenali dunia sekitar dengan mata dan telinga, memikirkannya, dan merasakannya dengan hati",
        "Pengalaman tentang bagaimana kita melihat, mendengar, dan berpikir tentang sekitar",
        "Pengalaman berusaha menangkap benda-benda di dunia sekitar dengan indra dan persepsi",
      ],
    },
    61: {
      yomi: "この{文章|ぶんしょう}では、ロボットを{取|と}り{上|あ}げて{何|なに}を{説明|せつめい}しているか。",
      arti: "Dalam tulisan ini, apa yang dijelaskan dengan mengangkat contoh robot?",
      optYomi: [
        "ロボットのメカニズムの{複雑|ふくざつ}さ",
        "{最近|さいきん}のロボット{工学|こうがく}の{進歩|しんぽ}のめざましさ",
        "{人間|にんげん}の{動作|どうさ}や{表情|ひょうじょう}を{再現|さいげん}することの{難|むずか}しさ",
        "{人間|にんげん}の{感情|かんじょう}の{働|はたら}きを{解明|かいめい}することの{難|むずか}しさ",
      ],
      optArti: [
        "Rumitnya mekanisme robot",
        "Pesatnya kemajuan teknik robotika belakangan ini",
        "Sulitnya mereproduksi gerakan dan ekspresi manusia",
        "Sulitnya mengungkap kerja emosi manusia",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}の{述|の}べている{感情|かんじょう}の{働|はたら}きを{以下|いか}のようにまとめる{場合|ばあい}、（　）に{入|はい}るものとして{適切|てきせつ}なのはどれか。\n「{私|わたし}たち{人間|にんげん}は、{感情|かんじょう}の{働|はたら}きによって（　）。」",
      arti: "Jika kerja emosi yang dijelaskan penulis dirangkum seperti berikut, mana yang tepat untuk mengisi (　)?\n\"Kita manusia, berkat kerja emosi, (…).\"",
      optYomi: [
        "{何|なに}かをしたいと{思|おも}い{行動|こうどう}を{起|お}こす",
        "もののことを{感覚|かんかく}でとらえようとする",
        "{相手|あいて}の{心|こころ}を{分析|ぶんせき}して{理解|りかい}しようとする",
        "{好|す}き{嫌|きら}いを{論理的|ろんりてき}に{考|かんが}え{判断|はんだん}する",
      ],
      optArti: [
        "ingin melakukan sesuatu lalu bertindak",
        "berusaha menangkap sesuatu dengan indra",
        "berusaha memahami hati orang lain dengan menganalisisnya",
        "memikirkan dan menilai suka-tidak suka secara logis",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "AとBの{認識|にんしき}で{共通|きょうつう}しているのは{何|なに}か。",
      arti: "Apa kesamaan pandangan A dan B?",
      optYomi: [
        "{学歴|がくれき}の{重要性|じゅうようせい}は{否定|ひてい}できない。",
        "{学歴|がくれき}による{区別|くべつ}は{実在|じつざい}する。",
        "{学歴|がくれき}よりも{実力|じつりょく}が{重要|じゅうよう}だ。",
        "{学歴|がくれき}は{実在|じつざい}と{関係|かんけい}がある。",
      ],
      optArti: [
        "Pentingnya latar belakang pendidikan tidak bisa disangkal.",
        "Pembedaan berdasarkan latar belakang pendidikan memang ada.",
        "Kemampuan nyata lebih penting daripada latar belakang pendidikan.",
        "Latar belakang pendidikan berkaitan dengan kenyataan.",
      ],
    },
    64: {
      yomi: "{学歴|がくれき}や{学校|がっこう}{教育|きょういく}について、Bが{批判|ひはん}しているのはどのようなことか。",
      arti: "Mengenai latar belakang pendidikan dan pendidikan sekolah, apa yang dikritik B?",
      optYomi: [
        "{実際|じっさい}の{社会|しゃかい}では{学歴|がくれき}は{関係|かんけい}なく、{何|なん}でもできる{人|ひと}が{高|たか}く{評価|ひょうか}されること",
        "{社会人|しゃかいじん}になってからも、どこで{学校|がっこう}{教育|きょういく}を{受|う}けたかが{重要視|じゅうようし}されること",
        "{実際|じっさい}の{社会|しゃかい}で{必要|ひつよう}とされる{実力|じつりょく}が、{学校|がっこう}{教育|きょういく}では{養成|ようせい}されていないこと",
        "{社会的|しゃかいてき}には{学歴|がくれき}が{重視|じゅうし}されているのに、{企業|きぎょう}ではそれが{通用|つうよう}しないこと",
      ],
      optArti: [
        "Di masyarakat nyata latar belakang pendidikan tidak berpengaruh, dan orang yang bisa segala hal dinilai tinggi",
        "Bahkan setelah bekerja, di mana seseorang menempuh pendidikan sekolah tetap dianggap penting",
        "Kemampuan yang dibutuhkan di masyarakat nyata tidak dilatih dalam pendidikan sekolah",
        "Di masyarakat latar belakang pendidikan diutamakan, tetapi di perusahaan hal itu tidak berlaku",
      ],
    },
    65: {
      yomi: "AとBの{二|ふた}つの{文章|ぶんしょう}を{以下|いか}のようにまとめる{場合|ばあい}、①と②に{入|はい}るものの{組|く}み{合|あ}わせとして{適切|てきせつ}なのはどれか。\n「Aの{筆者|ひっしゃ}は（①）と{考|かんが}えているが、Bの{筆者|ひっしゃ}は（②）と{考|かんが}えている。」",
      arti: "Jika kedua tulisan A dan B dirangkum seperti berikut, kombinasi mana yang tepat untuk ① dan ②?\n\"Penulis A berpendapat (①), sedangkan penulis B berpendapat (②).\"",
      optYomi: [
        "①{学歴|がくれき}が{高|たか}ければ{高|たか}いほどよい／②{社員|しゃいん}が{多|おお}くなれば{学歴|がくれき}という{区分|くぶん}も{大切|たいせつ}だ",
        "①{学歴|がくれき}を{得|え}るために{苦労|くろう}が{必要|ひつよう}だ／②{会社|かいしゃ}で{競争|きょうそう}に{勝|か}つには{学歴|がくれき}は{通用|つうよう}しない",
        "①{学歴|がくれき}は{生|い}きていくのに{必要|ひつよう}なものだ／②{会社|かいしゃ}は{社員|しゃいん}の{学歴|がくれき}より{実力|じつりょく}を{重視|じゅうし}するべきだ",
        "①{子供|こども}に{学歴|がくれき}を{付|つ}けさせるのは{親|おや}の{役目|やくめ}だ／②{社員|しゃいん}は{専門|せんもん}の{知識|ちしき}と{学歴|がくれき}の{両方|りょうほう}が{必要|ひつよう}だ",
      ],
      optArti: [
        "① makin tinggi pendidikan makin baik / ② kalau karyawan bertambah banyak, pembagian berdasarkan pendidikan juga penting",
        "① perlu bersusah payah untuk mendapat pendidikan tinggi / ② untuk menang bersaing di perusahaan, latar belakang pendidikan tidak berlaku",
        "① latar belakang pendidikan diperlukan untuk menjalani hidup / ② perusahaan seharusnya lebih mengutamakan kemampuan karyawan daripada pendidikannya",
        "① membekali anak dengan pendidikan adalah tugas orang tua / ② karyawan memerlukan pengetahuan khusus sekaligus latar belakang pendidikan",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    66: {
      yomi: "{外的|がいてき}{報酬|ほうしゅう}と{内的|ないてき}{報酬|ほうしゅう}の{説明|せつめい}として{本文|ほんぶん}と{合|あ}っているものはどれか。",
      arti: "Manakah penjelasan tentang imbalan eksternal dan imbalan internal yang sesuai dengan isi teks?",
      optYomi: [
        "{外的|がいてき}{報酬|ほうしゅう}は{仕事|しごと}の{幅|はば}を{広|ひろ}げるのに{必要|ひつよう}なものであり、{内的|ないてき}{報酬|ほうしゅう}は{会社|かいしゃ}から{評価|ひょうか}され{給与|きゅうよ}として{得|え}られるもの",
        "{外的|がいてき}{報酬|ほうしゅう}は{将来|しょうらい}の{自分|じぶん}のために{必要|ひつよう}なものであり、{内的|ないてき}{報酬|ほうしゅう}は{自分|じぶん}の{努力|どりょく}では{得|え}られないもの",
        "{外的|がいてき}{報酬|ほうしゅう}は{給与|きゅうよ}として{得|え}られるものであり、{内的|ないてき}{報酬|ほうしゅう}は{長期的|ちょうきてき}には{満足感|まんぞくかん}が{得|え}られないもの",
        "{外的|がいてき}{報酬|ほうしゅう}は{他人|たにん}から{評価|ひょうか}され{得|え}られるものであり、{内的|ないてき}{報酬|ほうしゅう}は{仕事|しごと}を{長|なが}く{続|つづ}けるために{必要|ひつよう}なもの",
      ],
      optArti: [
        "Imbalan eksternal diperlukan untuk memperluas cakupan kerja; imbalan internal adalah yang diperoleh sebagai gaji setelah dinilai perusahaan",
        "Imbalan eksternal diperlukan untuk diri di masa depan; imbalan internal tidak bisa diperoleh dengan usaha sendiri",
        "Imbalan eksternal diperoleh sebagai gaji; imbalan internal dalam jangka panjang tidak memberi rasa puas",
        "Imbalan eksternal diperoleh karena dinilai orang lain; imbalan internal diperlukan agar bisa bekerja dalam jangka panjang",
      ],
    },
    67: {
      yomi: "①そこで{得|え}たお{金|かね}とあるが、そことは{何|なに}を{指|さ}しているか。",
      arti: "Tertulis \"① uang yang diperoleh di sana\"; \"di sana\" merujuk pada apa?",
      optYomi: [
        "{報酬|ほうしゅう}の{低|ひく}い{仕事|しごと}",
        "やりがいのある{仕事|しごと}",
        "{内容|ないよう}に{釣|つ}り{合|あ}わない{仕事|しごと}",
        "{心|こころ}の{満足感|まんぞくかん}を{伴|ともな}わない{仕事|しごと}",
      ],
      optArti: [
        "Pekerjaan dengan imbalan rendah",
        "Pekerjaan yang memberi rasa berarti",
        "Pekerjaan yang tidak sebanding dengan isinya",
        "Pekerjaan yang tidak disertai kepuasan batin",
      ],
    },
    68: {
      yomi: "②まさに{内的|ないてき}{報酬|ほうしゅう}が{外的|がいてき}{報酬|ほうしゅう}へと{実|み}を{結|むす}んでいったとあるが、どういうことか。",
      arti: "Tertulis \"② imbalan internal benar-benar berbuah menjadi imbalan eksternal\"; apa maksudnya?",
      optYomi: [
        "{仕事|しごと}に{慣|な}れて{早|はや}く{片|かた}づけられるようになり、{同僚|どうりょう}と{同|おな}じ{金額|きんがく}の{収入|しゅうにゅう}を{得|え}た。",
        "ボーナスも{退職金|たいしょくきん}もないが、{同|おな}じ{会社|かいしゃ}で{仕事|しごと}を{続|つづ}けた{結果|けっか}、{収入|しゅうにゅう}が{増|ふ}えた。",
        "{成長感|せいちょうかん}や{達成感|たっせいかん}を{得|え}るために{働|はたら}いてきたことが、{高|たか}い{収入|しゅうにゅう}につながった。",
        "10{年間|ねんかん}アルバイトを{続|つづ}けて、{正|せい}{社員|しゃいん}と{同|おな}じ{収入|しゅうにゅう}を{得|え}られるようになった。",
      ],
      optArti: [
        "Terbiasa dengan pekerjaan sehingga bisa menyelesaikannya dengan cepat, lalu memperoleh penghasilan yang sama dengan rekan kerja.",
        "Tidak ada bonus maupun pesangon, tetapi setelah terus bekerja di perusahaan yang sama, penghasilannya bertambah.",
        "Bekerja demi merasakan pertumbuhan dan pencapaian akhirnya membuahkan penghasilan tinggi.",
        "Setelah 10 tahun bekerja paruh waktu, ia bisa memperoleh penghasilan yang sama dengan karyawan tetap.",
      ],
    },
    69: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことはどれか。",
      arti: "Apa yang paling ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{人脈|じんみゃく}や{仕事|しごと}の{幅|はば}を{広|ひろ}げて{高|たか}い{収入|しゅうにゅう}を{得|え}ることができれば、それが{仕事|しごと}の{原動力|げんどうりょく}になる。",
        "すぐに{高|たか}い{収入|しゅうにゅう}に{結|むす}びつかなくても、{心|こころ}の{満足感|まんぞくかん}を{重視|じゅうし}して{仕事|しごと}を{続|つづ}けることが{大切|たいせつ}だ。",
        "{大|おお}きな{収入|しゅうにゅう}を{得|え}たいと{考|かんが}えるなら、アルバイトを{続|つづ}け{高|たか}い{技術|ぎじゅつ}や{人脈|じんみゃく}を{得|え}ることが{大切|たいせつ}だ。",
        "{見|み}えないところで{努力|どりょく}して{仕事|しごと}をすれば、{他人|たにん}が{高|たか}く{評価|ひょうか}してくれ、いつか{収入|しゅうにゅう}も{高|たか}くなる。",
      ],
      optArti: [
        "Jika bisa memperluas relasi dan cakupan kerja lalu memperoleh penghasilan tinggi, itu akan menjadi daya penggerak kerja.",
        "Meski tidak langsung menghasilkan penghasilan tinggi, yang penting adalah terus bekerja dengan mengutamakan kepuasan batin.",
        "Jika ingin penghasilan besar, yang penting adalah terus bekerja paruh waktu dan memperoleh keterampilan tinggi serta relasi.",
        "Jika bekerja dengan berusaha di balik layar, orang lain akan menilai tinggi dan suatu saat penghasilan pun meningkat.",
      ],
    },

    // ── 問題13：情報検索 ──
    70: {
      yomi: "{高木|たかぎ}さんが{制作|せいさく}した{以下|いか}の{作品|さくひん}のうち、{応募|おうぼ}できるものはどれか。",
      arti: "Di antara karya buatan Takagi-san berikut, mana yang bisa diikutsertakan?",
      optYomi: [
        "{清森|きよもり}{高校|こうこう}に{通|かよ}っていたとき{入賞|にゅうしょう}した{秋|あき}の{風景画|ふうけいが}",
        "{清森市|きよもりし}にある{清森|きよもり}{温泉|おんせん}の{紅葉|こうよう}の{油絵|あぶらえ}とイラスト",
        "{清森市|きよもりし}にある{清森|きよもり}{公園|こうえん}で{撮|と}った{春|はる}の{木々|きぎ}の{写真|しゃしん}",
        "{去年|きょねん}{清森市|きよもりし}で{行|おこな}われた{秋祭|あきまつ}りの{写真|しゃしん}と{水彩画|すいさいが}",
      ],
      optArti: [
        "Lukisan pemandangan musim gugur yang pernah menang saat ia bersekolah di SMA Kiyomori",
        "Lukisan cat minyak dan ilustrasi daun merah di Pemandian Air Panas Kiyomori, Kota Kiyomori",
        "Foto pepohonan musim semi yang diambil di Taman Kiyomori, Kota Kiyomori",
        "Foto dan lukisan cat air festival musim gugur yang diadakan tahun lalu di Kota Kiyomori",
      ],
    },
    71: {
      yomi: "{入賞|にゅうしょう}したかどうかを{知|し}るには、{高木|たかぎ}さんはどうしたらよいか。",
      arti: "Untuk mengetahui apakah karyanya menang atau tidak, apa yang sebaiknya dilakukan Takagi-san?",
      optYomi: [
        "1{月|がつ}{中旬|ちゅうじゅん}に{清森市|きよもりし}のホームページを{見|み}る。",
        "1{月|がつ}{中旬|ちゅうじゅん}に{直接|ちょくせつ}、{観光|かんこう}{係|がかり}に{電話|でんわ}して{聞|き}く。",
        "2{月|がつ}{下旬|げじゅん}に{市役所|しやくしょ}の{窓口|まどぐち}に{問|と}い{合|あ}わせる。",
        "2{月|がつ}{下旬|げじゅん}に{届|とど}く{予定|よてい}の{通知|つうち}を{待|ま}つ。",
      ],
      optArti: [
        "Melihat situs web Kota Kiyomori pada pertengahan Januari.",
        "Langsung menelepon bagian pariwisata pada pertengahan Januari untuk bertanya.",
        "Bertanya ke loket balai kota pada akhir Februari.",
        "Menunggu pemberitahuan yang dijadwalkan tiba akhir Februari.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：父性の復権 ──
    "7": {
      yomi: `{父|ちち}が{父|ちち}でなくなっている。{家族|かぞく}を{統合|とうごう}し、{理念|りねん}を{掲|かか}げ、{文化|ぶんか}を{伝|つた}え、{社会|しゃかい}のルールを{教|おし}えるという{父|ちち}の{役割|やくわり}が{消|き}えかけている。[41]、{家族|かぞく}はバラバラになって、{善悪|ぜんあく}の{感覚|かんかく}のない{人間|にんげん}が{成長|せいちょう}し、{全体的|ぜんたいてき}{視点|してん}のない{人間|にんげん}や{無気力|むきりょく}な{人間|にんげん}が{増|ふ}えている。

{父|ちち}としての{役割|やくわり}は{立派|りっぱ}な{父|ちち}でないと{果|は}たすことができない。{立派|りっぱ}でない{父|ちち}が{家族|かぞく}を{統合|とうごう}しようと、{理念|りねん}を{掲|かか}げても、{家族|かぞく}から{無視|むし}されるだけである。{立派|りっぱ}な{父|ちち}が{必要|ひつよう}とされているのに、その{立派|りっぱ}な{父|ちち}が{育|そだ}ちにくいのが{現代|げんだい}{社会|しゃかい}である。そもそも「{立派|りっぱ}」などというものが{流行|はや}らない{世|よ}の{中|なか}なのだ。{全体|ぜんたい}の{将来|しょうらい}を{考|かんが}えてリーダーシップをとり、{取|と}りまとめ、ルールを{教|おし}えるという「{立派|りっぱ}な」{人格|じんかく}は、{尊敬|そんけい}の{対象|たいしょう}にはなりにくい。あまり{立派|りっぱ}でない、むしろだらしのないくらいの{父親|ちちおや}のほうが[42]。

{父|ちち}でなくなった{父|ちち}の{典型|てんけい}が「{友|とも}だちのような{父親|ちちおや}」である。{彼|かれ}らは{上下|じょうげ}の{関係|かんけい}を{意識的|いしきてき}に{捨|す}ててしまった。{価値観|かちかん}を{押|お}しつけることは{絶対|ぜったい}にしない。{何|なに}をするのも{自由|じゆう}{放任|ほうにん}である。しかし[43]は「{自由|じゆう}な{意志|いし}」を{持|も}つようにはなるが、「よい{意志|いし}」を{持|も}つようにはならない。

「{友|とも}だちのような{父親|ちちおや}」はじつは[44]。{父|ちち}とは{子|こ}どもに{文化|ぶんか}を{伝|つた}える{者|もの}である。{伝|つた}えるとはある{意味|いみ}では{価値観|かちかん}を{押|お}しつけることである。{上下|じょうげ}の{関係|かんけい}があり、{権威|けんい}を{持|も}っていて{初|はじ}めてそれができる。しかし[45]の{関係|かんけい}では、{文化|ぶんか}を{伝|つた}えることも、{生活|せいかつ}{規則|きそく}、{社会|しゃかい}{規範|きはん}を{教|おし}えることもできない。「もの{分|わ}かりのいい{父親|ちちおや}」は{父|ちち}の{役割|やくわり}を{果|は}たすことのできなくなった{父|ちち}と{言|い}うべきである。
（{林|はやし}{道義|みちよし}『{父性|ふせい}の{復権|ふっけん}』による）`,
      arti: `Ayah tidak lagi menjadi ayah. Peran ayah — menyatukan keluarga, menjunjung nilai-nilai, mewariskan budaya, dan mengajarkan aturan masyarakat — mulai lenyap. [41], keluarga tercerai-berai, tumbuh manusia yang tidak punya rasa baik-buruk, dan bertambah banyak orang yang tidak punya sudut pandang menyeluruh serta orang yang tidak bersemangat.

Peran sebagai ayah hanya bisa dijalankan oleh ayah yang terhormat (patut diteladani). Ayah yang tidak terhormat, meski berusaha menyatukan keluarga dan menjunjung nilai-nilai, hanya akan diabaikan keluarganya. Padahal ayah yang terhormat dibutuhkan, tetapi masyarakat modern adalah masyarakat di mana ayah seperti itu sulit tumbuh. Pada dasarnya, ini zaman di mana hal yang "terhormat" tidak lagi populer. Pribadi yang "terhormat" — yang memikirkan masa depan bersama, memimpin, menyatukan, dan mengajarkan aturan — sulit menjadi sosok yang dihormati. Ayah yang tidak terlalu terhormat, bahkan cenderung serampangan, justru [42].

Contoh khas ayah yang tidak lagi menjadi ayah adalah "ayah yang seperti teman". Mereka dengan sengaja membuang hubungan atas-bawah. Mereka sama sekali tidak memaksakan nilai-nilai. Apa pun dibiarkan bebas. Namun, [43] memang akan memiliki "kehendak bebas", tetapi tidak akan memiliki "kehendak yang baik".

"Ayah yang seperti teman" sebenarnya [44]. Ayah adalah orang yang mewariskan budaya kepada anak. Mewariskan, dalam arti tertentu, berarti memaksakan nilai-nilai. Itu baru bisa dilakukan jika ada hubungan atas-bawah dan memiliki wibawa. Namun dalam hubungan yang [45], ia tidak bisa mewariskan budaya, juga tidak bisa mengajarkan aturan hidup maupun norma sosial. "Ayah yang serba pengertian" seharusnya disebut ayah yang sudah tidak mampu menjalankan peran ayah.
(Dari "Fusei no Fukken" karya Hayashi Michiyoshi)`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `「コミュニケーション」という{言葉|ことば}はふつう、{双方|そうほう}がメッセージを{伝|つた}え{合|あ}うこと、あるいは{意思|いし}を{疎通|そつう}させること、といった{意味合|いみあ}いで{用|もち}いられているが、これはじっさいのコミュニケーションの{全体像|ぜんたいぞう}をとらえてはいない。たとえば、{黙|だま}って{何|なに}も{語|かた}らないこともコミュニケーションの{行為|こうい}であり、また{視線|しせん}の{動|うご}きやちょっとした{仕草|しぐさ}だけでも、{十分|じゅうぶん}にコミュニケーションは{成立|せいりつ}する。
（{小竹|こたけ}{裕一|ゆういち}『アジア{人|じん}との{正|ただ}しい{付|つ}き{合|あ}い{方|かた}―{異文化|いぶんか}へのまなざし』による）`,
      arti: `Kata "komunikasi" biasanya dipakai dengan arti kedua pihak saling menyampaikan pesan, atau saling memahami maksud, tetapi ini tidak menangkap gambaran utuh komunikasi yang sesungguhnya. Misalnya, diam tanpa berkata apa pun juga merupakan tindakan komunikasi, dan hanya dengan gerak tatapan mata atau gerak-gerik kecil pun komunikasi sudah bisa terjadi.
(Dari buku karya Kotake Yūichi tentang cara bergaul yang benar dengan orang Asia)`,
    },
    "8-2": {
      yomi: `ネット{社会|しゃかい}（{注|ちゅう}1）の{匿名性|とくめいせい}は{完全|かんぜん}に{透明|とうめい}{人間|にんげん}の{心理|しんり}です。{自分|じぶん}がどこにアクセスして（{注|ちゅう}2）いるかなど、みんなにわかってしまうなら、やっても{面白|おもしろ}くないはずです。それだと{制限|せいげん}のある{普通|ふつう}の{社会|しゃかい}と{同|おな}じだから。ですから、ネット{社会|しゃかい}の{匿名性|とくめいせい}というのは、{心理的|しんりてき}には{透明|とうめい}{人間|にんげん}の{世界|せかい}なのです。しかも{初期|しょき}には{規制|きせい}はほとんどなかった。{今|いま}でも{巨大|きょだい}{匿名|とくめい}{掲示板|けいじばん}（{注|ちゅう}3）「2ちゃんねる」（{注|ちゅう}4）などでは、{犯罪|はんざい}を{起|お}こした{場合|ばあい}は{摘発|てきはつ}されますが、そこまでいかなければ、{何|なに}を{書|か}いてもいい{社会|しゃかい}になっています。
（{竹内|たけうち}{薫|かおる}・荒野健彦『「{透明|とうめい}{人間|にんげん}」の{作|つく}り{方|かた}』による）
（{注|ちゅう}1）ネット{社会|しゃかい}：インターネット{上|じょう}の{社会|しゃかい}
（{注|ちゅう}2）アクセスする：ここでは、インターネットでいろいろなサイトに{接続|せつぞく}する
（{注|ちゅう}3）{匿名|とくめい}{掲示板|けいじばん}：{名前|なまえ}を{出|だ}さずに{自由|じゆう}に{書|か}き{込|こ}みができるインターネット{上|じょう}のサイト
（{注|ちゅう}4）「2ちゃんねる」：{日本|にほん}の{匿名|とくめい}{掲示板|けいじばん}の{一|ひと}つ。{幅広|はばひろ}い{分野|ぶんや}を{扱|あつか}い、{利用者|りようしゃ}が{多|おお}い`,
      arti: `Anonimitas masyarakat internet (catatan 1) sepenuhnya adalah psikologi "manusia transparan" (tak kasatmata). Kalau semua orang bisa tahu ke mana kita mengakses (catatan 2), tentu tidak menarik lagi. Sebab kalau begitu, sama saja dengan masyarakat biasa yang penuh batasan. Karena itu, anonimitas masyarakat internet secara psikologis adalah dunia manusia transparan. Terlebih lagi, pada awalnya hampir tidak ada regulasi. Bahkan sekarang pun, di forum anonim raksasa (catatan 3) seperti "2channel" (catatan 4), jika terjadi kejahatan memang akan ditindak, tetapi selama belum sampai ke sana, ia menjadi masyarakat di mana apa pun boleh ditulis.
(Dari buku karya Takeuchi Kaoru dkk., "Cara Membuat 'Manusia Transparan'")
(Catatan 1) ネット社会: masyarakat di internet
(Catatan 2) アクセスする: di sini, terhubung ke berbagai situs di internet
(Catatan 3) 匿名掲示板: situs internet tempat orang bisa menulis bebas tanpa menyebut nama
(Catatan 4) 「2ちゃんねる」: salah satu forum anonim Jepang; membahas berbagai bidang dan banyak penggunanya`,
    },
    "8-3": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}が{顧客|こきゃく}に{向|む}けて{出|だ}した{文書|ぶんしょ}である。

お{客様|きゃくさま}{各位|かくい}
2009{年|ねん}12{月|がつ}14{日|にち}
（{株|かぶ}）ファニチャー{美木|みき}
http://www.Furnituremiki.co.jp/

{拝啓|はいけい}
{師走|しわす}の{候|こう}、ますますご{盛栄|せいえい}のこととお{喜|よろこ}び{申|もう}し{上|あ}げます。{日頃|ひごろ}より{格別|かくべつ}のごひいきを{賜|たまわ}りありがとうございます。
さて、{誠|まこと}に{勝手|かって}ながら、{弊社|へいしゃ}は{年末|ねんまつ}{年始|ねんし}の{下記|かき}{期間|きかん}を{休業|きゅうぎょう}とさせていただきます。{休業|きゅうぎょう}{期間|きかん}{中|ちゅう}も{弊社|へいしゃ}ホームページでのお{問|と}い{合|あ}わせ・ご{注文|ちゅうもん}は{可能|かのう}ですが、{対応|たいおう}はすべて{休業|きゅうぎょう}{明|あ}けとなります。お{問|と}い{合|あ}わせへのご{回答|かいとう}・{商品|しょうひん}の{発送|はっそう}{等|とう}に{通常|つうじょう}より{時間|じかん}がかかりますことをあらかじめご{了承|りょうしょう}{下|くだ}さいますようお{願|ねが}い{申|もう}し{上|あ}げます。
{敬具|けいぐ}

{記|き}
2009{年|ねん}12{月|がつ}29{日|にち}から2010{年|ねん}1{月|がつ}4{日|か}まで
{以上|いじょう}`,
      arti: `Berikut ini adalah surat yang dikirim sebuah perusahaan kepada pelanggannya.

Kepada Yth. Para Pelanggan
14 Desember 2009
PT Furniture Miki
http://www.Furnituremiki.co.jp/

Dengan hormat,
Di bulan Desember ini, kami turut bergembira atas kian makmurnya usaha Anda. Terima kasih atas dukungan istimewa yang selalu Anda berikan.
Dengan ini, mohon maaf atas keputusan sepihak kami, perusahaan kami akan libur selama periode akhir dan awal tahun berikut. Selama masa libur, pertanyaan dan pesanan melalui situs web kami tetap bisa dilakukan, tetapi semuanya baru akan ditangani setelah masa libur berakhir. Mohon dimaklumi sebelumnya bahwa jawaban atas pertanyaan, pengiriman barang, dan sebagainya akan memakan waktu lebih lama dari biasanya.
Hormat kami,

Keterangan
Dari 29 Desember 2009 sampai 4 Januari 2010
Sekian`,
    },
    "8-4": {
      yomi: `{飲料|いんりょう}{大手|おおて}の{商品|しょうひん}{開発|かいはつ}{担当者|たんとうしゃ}が「{当|あ}たり{前|まえ}の{名前|なまえ}では{消費者|しょうひしゃ}の{琴線|きんせん}に{触|ふ}れず（{注|ちゅう}1）、{踏|ふ}み{込|こ}みすぎると『ふざけている』と{思|おも}われる。そのバランスを{測|はか}り、{試行|しこう}{錯誤|さくご}を{続|つづ}けるしかない」と{語|かた}っていましたが、{本音|ほんね}でしょう。でも{場当|ばあ}たり{的|てき}なネーミング（{注|ちゅう}2）では{過激|かげき}な{競争|きょうそう}に{勝|か}ち{抜|ぬ}けません。{音|おと}に{対|たい}する{感性|かんせい}を{磨|みが}き、{音|おと}の{表情|ひょうじょう}に{敏感|びんかん}になり、{何|なに}はさておき（{注|ちゅう}3）{自社|じしゃ}{製品|せいひん}を{愛|あい}し、{育|そだ}てる{意欲|いよく}を{持|も}つことがネーミングの{前提|ぜんてい}{条件|じょうけん}です。
（木通隆行『ネーミングの{極意|ごくい}―{日本語|にほんご}の{魅力|みりょく}は{音|おと}がつくる』による）
（{注|ちゅう}1）{琴線|きんせん}に{触|ふ}れず：{心|こころ}を{動|うご}かさず
（{注|ちゅう}2）{場当|ばあ}たり{的|てき}なネーミング：{十分|じゅうぶん}{考|かんが}えず{思|おも}いつきで{名前|なまえ}をつけること
（{注|ちゅう}3）{何|なに}はさておき：まず{第一|だいいち}に`,
      arti: `Seorang penanggung jawab pengembangan produk di perusahaan minuman besar pernah berkata, "Kalau namanya biasa saja, tidak menyentuh hati (catatan 1) konsumen; kalau terlalu berani, dianggap 'main-main'. Tidak ada cara lain selain menakar keseimbangannya dan terus mencoba-coba." Itu pasti isi hatinya yang sebenarnya. Namun, dengan penamaan asal-asalan (catatan 2), persaingan yang sengit tidak bisa dimenangkan. Mengasah kepekaan terhadap bunyi, menjadi peka terhadap ekspresi bunyi, dan yang terpenting (catatan 3), mencintai produk perusahaan sendiri dan punya semangat untuk membesarkannya — itulah syarat dasar penamaan.
(Dari buku tentang rahasia penamaan: "daya tarik bahasa Jepang diciptakan oleh bunyi")
(Catatan 1) 琴線に触れず: tidak menggerakkan hati
(Catatan 2) 場当たり的なネーミング: memberi nama berdasarkan ide sesaat tanpa berpikir matang
(Catatan 3) 何はさておき: pertama-tama, yang paling utama`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `「あの{人|ひと}は、{私|わたし}が{話|はな}し{始|はじ}めて{一分|いっぷん}とたたないうちに、{話題|わだい}を{自分|じぶん}の{話|はなし}にすりかえてしまう」と{言|い}われる{人|ひと}のなかには、{決|けっ}して{聞|き}き{上手|じょうず}ではないけれど、{不思議|ふしぎ}と{嫌|きら}われない{人|ひと}がいる。

{話|はなし}を{奪|うば}われた{人|ひと}も、「{私|わたし}の{話|はなし}よりずっとおもしろそう。{私|わたし}の{話|はなし}が{宙|ちゅう}に{消|き}えても（{注|ちゅう}1）しょうがないか」という{寛容|かんよう}な{気持|きも}ちになるのだろう。

もちろん、{私|わたし}は「だから、{話|はな}し{上手|じょうず}になればいいんですよ」とは{言|い}わない。ただ、「{聞|き}き{上手|じょうず}でないことが{帳消|ちょうけ}しになるほど{話|はな}し{上手|じょうず}な{人|ひと}のしゃべりは、ちょっと{研究|けんきゅう}してみる{価値|かち}がありますよ」とご{提案|ていあん}したい。

{聞|き}き{上手|じょうず}になるための「{修業|しゅぎょう}」（{注|ちゅう}2）をしていると、そのうち{話|はなし}の{上手|じょうず}な{人|ひと}の{特徴|とくちょう}がわかってくると{思|おも}う。

{聞|き}き{上手|じょうず}から、{話|はな}し{上手|じょうず}でもあるというプラスアルファの{魅力|みりょく}を{持|も}つ{人間|にんげん}へとステップアップする（{注|ちゅう}3）には、いつの{間|ま}にか{相手|あいて}を{自分|じぶん}の{話|はなし}に{引|ひ}きこむのが{上手|じょうず}な{人|ひと}の{話|はなし}ぶりを、「それはなぜなのか」と{自分|じぶん}なりに{分析|ぶんせき}すると、とても{勉強|べんきょう}になるのだ。

{一人|ひとり}で{分析|ぶんせき}するのが{難|むずか}しければ、だれかに「あの{人|ひと}は{話|はなし}が{上手|じょうず}だよね。どんな{話|はな}しぶりに{惹|ひ}かれる？」と{疑問|ぎもん}をぶつけてみるのもいい。

その{勉強|べんきょう}の{成果|せいか}は{必|かなら}ずや、{自分|じぶん}の{言動|げんどう}に{投影|とうえい}されるはずだ。だれだって、{他人|たにん}のいいところは{真似|まね}したいと{思|おも}うから。
（{斉藤|さいとう}{茂太|しげた}『どんなグズもなおる{本|ほん}―17タイプ{別|べつ}グズ{解消法|かいしょうほう}』による）
（{注|ちゅう}1）{話|はなし}が{宙|ちゅう}に{消|き}える：{話|はなし}が{途中|とちゅう}でどこかへ{行|い}ってしまう
（{注|ちゅう}2）{修業|しゅぎょう}：{学|まな}んで{身|み}につけること
（{注|ちゅう}3）ステップアップする：{進歩|しんぽ}する`,
      arti: `Di antara orang-orang yang dikatakan "belum semenit saya mulai bicara, dia sudah mengalihkan topik ke ceritanya sendiri", ada orang yang jelas bukan pendengar yang baik, tetapi anehnya tidak dibenci.

Orang yang pembicaraannya direbut pun mungkin jadi berlapang hati: "Ceritanya jauh lebih menarik daripada cerita saya. Ya sudahlah kalau cerita saya menguap begitu saja (catatan 1)."

Tentu saja, saya tidak mengatakan "Karena itu, jadilah pandai bicara." Hanya saja, saya ingin mengusulkan, "Cara bicara orang yang begitu pandai berbicara sampai kekurangannya sebagai pendengar terhapus, layak untuk sedikit diteliti."

Saya rasa, jika kita menjalani "latihan" (catatan 2) untuk menjadi pendengar yang baik, lama-lama kita akan mengerti ciri-ciri orang yang pandai berbicara.

Untuk naik tingkat (catatan 3) dari pendengar yang baik menjadi orang dengan daya tarik tambahan karena juga pandai berbicara, sangat bermanfaat jika kita menganalisis sendiri, "mengapa begitu?", cara bicara orang yang pandai menarik lawan bicara ke dalam ceritanya tanpa disadari.

Jika sulit menganalisis sendirian, boleh juga melontarkan pertanyaan kepada seseorang, "Orang itu pandai bicara, ya. Cara bicaranya yang seperti apa yang membuatmu tertarik?"

Hasil belajar itu pasti akan tercermin dalam ucapan dan tindakan kita. Sebab siapa pun ingin meniru kelebihan orang lain.
(Dari buku karya Saitō Shigeta tentang cara mengatasi sifat lamban, 17 tipe)
(Catatan 1) 話が宙に消える: pembicaraan hilang entah ke mana di tengah jalan
(Catatan 2) 修業: belajar hingga menguasai
(Catatan 3) ステップアップする: maju, meningkat`,
    },
    "9-2": {
      yomi: `ツバメは{季節|きせつ}の{変化|へんか}にあわせて、くらす{場所|ばしょ}をかえる{渡|わた}り{鳥|どり}です。{日本|にほん}が{冬|ふゆ}の{時期|じき}は、{暖|あたた}かくてえさの{豊富|ほうふ}なオーストラリアや{東南|とうなん}アジアでくらしています。たまごを{産|う}んでひなを{育|そだ}てる{繁殖期|はんしょくき}が{近|ちか}づくと、{春|はる}になってえさとなる{昆虫|こんちゅう}が{一気|いっき}にふえる{日本|にほん}へ{向|む}けて、いのちがけで{海|うみ}を{渡|わた}ってきます。

ツバメの{渡|わた}りは{地球|ちきゅう}の{南半球|みなみはんきゅう}から{北半球|きたはんきゅう}へと、{何千|なんぜん}キロメートルにもなります。ツバメがいつ{渡|わた}ってきたかで、ツバメがくらしていた{地域|ちいき}や、{渡|わた}りのルートの{気象|きしょう}の{変化|へんか}や{環境|かんきょう}の{変化|へんか}をおしはかる（{注|ちゅう}）ことができます。そして、その{変化|へんか}を{長期間|ちょうきかん}にわたって{観察|かんさつ}をつづけることで、{地球|ちきゅう}{全体|ぜんたい}の{気象|きしょう}の{変化|へんか}を{予測|よそく}する{手|て}がかりにもなるので、{気象庁|きしょうちょう}では、その{年|とし}にはじめてツバメを{見|み}た{日|ひ}「ツバメの{初見日|しょけんび}」を、{各地|かくち}の{観察者|かんさつしゃ}や{研究者|けんきゅうしゃ}からの{報告|ほうこく}をもとに、{記録|きろく}をとっているのです。

ツバメが{渡|わた}りの{行動|こうどう}をおこすのは、{日照|にっしょう}{時間|じかん}にかかわりがあるといわれています。（{中略|ちゅうりゃく}）
{日照|にっしょう}{時間|じかん}は{年|とし}ごとの{変化|へんか}が{比較的|ひかくてき}{少|すく}ないので、{日時|にちじ}がそれほどずれることがありませんでした。ところが{長年|ながねん}{蓄積|ちくせき}された{記録|きろく}を{調|しら}べてみると、{近年|きんねん}、{各地|かくち}のツバメの{初見日|しょけんび}が{早|はや}まってきていることがわかってきました。

その{原因|げんいん}は……。
まだはっきりときめられていませんが、{地球|ちきゅう}{温暖化|おんだんか}によっておこる{気象|きしょう}の{変化|へんか}で、オーストラリアや{東南|とうなん}アジア{地方|ちほう}の{晴|せい}、{雨天|うてん}のバランスがくずれ、{日照|にっしょう}{時間|じかん}にまでくるいができているのかもしれません。
（{七尾|ななお}{純|じゅん}『テクテク{観察|かんさつ}　ツバメ{日記|にっき}』による）
（{注|ちゅう}）おしはかる：{推測|すいそく}する`,
      arti: `Burung layang-layang adalah burung migran yang berpindah tempat tinggal mengikuti perubahan musim. Saat Jepang musim dingin, mereka tinggal di Australia atau Asia Tenggara yang hangat dan kaya makanan. Saat musim berkembang biak — bertelur dan membesarkan anak — mendekat, mereka menyeberangi laut dengan mempertaruhkan nyawa menuju Jepang, di mana serangga yang menjadi makanan mereka bertambah pesat begitu musim semi tiba.

Migrasi burung layang-layang dari belahan bumi selatan ke utara mencapai ribuan kilometer. Dari kapan burung layang-layang tiba, kita bisa memperkirakan (catatan) perubahan cuaca dan lingkungan di wilayah tempat mereka tinggal maupun di sepanjang rute migrasinya. Lalu, dengan terus mengamati perubahan itu dalam jangka panjang, hal itu juga menjadi petunjuk untuk memprediksi perubahan cuaca seluruh bumi. Karena itu, Badan Meteorologi mencatat "hari pertama terlihatnya burung layang-layang" pada tahun itu, berdasarkan laporan para pengamat dan peneliti di berbagai daerah.

Konon, perilaku migrasi burung layang-layang berkaitan dengan lama penyinaran matahari. (dihilangkan)
Lama penyinaran matahari relatif sedikit berubah dari tahun ke tahun, sehingga tanggalnya pun tidak banyak bergeser. Namun, ketika catatan yang terkumpul selama bertahun-tahun diperiksa, diketahui bahwa belakangan ini hari pertama terlihatnya burung layang-layang di berbagai daerah semakin maju (lebih awal).

Penyebabnya....
Belum bisa dipastikan, tetapi mungkin akibat perubahan cuaca karena pemanasan global, keseimbangan cuaca cerah dan hujan di Australia dan Asia Tenggara terganggu, sampai-sampai lama penyinaran matahari pun ikut kacau.
(Dari buku harian pengamatan burung layang-layang karya Nanao Jun)
(Catatan) おしはかる: memperkirakan`,
    },
    "9-3": {
      yomi: `{消|け}して{費|つい}やしてしまう、{使|つか}って{無|な}くしてしまう——どうも{消費|しょうひ}という{言葉|ことば}のイメージは{前向|まえむ}きではないですね。{消費者|しょうひしゃ}という{言葉|ことば}も、そう。{生産者|せいさんしゃ}と{対比|たいひ}して、{消極的|しょうきょくてき}イメージがつきまとう。{消費者|しょうひしゃ}という{言葉|ことば}は、{経済|けいざい}{用語|ようご}のなかでもっとも{不適切|ふてきせつ}な{一|ひと}つだと{私|わたし}は{思|おも}います。{行為|こうい}の{中身|なかみ}からひどくズレています。

{消費|しょうひ}と{呼|よ}ばれる{行為|こうい}は、その{中身|なかみ}から{言|い}えば、{生|い}きていくのに{必要|ひつよう}なものを{使|つか}うことですね。{私|わたし}たちは{衣食住|いしょくじゅう}その{他|た}に、さまざまなものを{使|つか}います。しかし、そのことを「{消費|しょうひ}」と{呼|よ}ぶのは{正|ただ}しいか。{正|ただ}しくないと、{言|い}うべきです。なぜなら、{人|ひと}は{食|た}べ{物|もの}を{食|た}べることによって、{自分|じぶん}の{身体|しんたい}を{生産|せいさん}しているのです。なるほど、{食|た}べ{物|もの}の{形|かたち}は{消|き}えてしまいます。しかし、それは{私|わたし}たちの{生命|せいめい}としてよみがえっているのです。{衣服|いふく}を{身|み}につけることはどうか。それは{体温|たいおん}を{維持|いじ}させることによって{命|いのち}をつくり{出|だ}すだけでなく、{他人|たにん}にあたえる{私|わたし}たちの{印象|いんしょう}を{生産|せいさん}しています。このように、{消費|しょうひ}と{呼|よ}ばれている{行為|こうい}は、{私|わたし}たちの{命|いのち}と{生活|せいかつ}を、そして{次|つぎ}の{世代|せだい}の{人間|にんげん}を{生産|せいさん}する{行為|こうい}です。それなのにそれを{消費者|しょうひしゃ}と{呼|よ}ぶのは、{物|もの}の{生産者|せいさんしゃ}の{側|がわ}から{見|み}た{言|い}い{方|かた}にすぎません。
（{岸本|きしもと}{重陳|しげのぶ}『{経済|けいざい}のしくみ100{話|わ}』による）`,
      arti: `Menghapus dan menghabiskan, memakai sampai lenyap — rasanya citra kata "konsumsi" itu tidak positif, ya. Begitu juga kata "konsumen". Dibandingkan dengan "produsen", kata itu selalu dibayangi citra pasif. Menurut saya, kata "konsumen" adalah salah satu istilah ekonomi yang paling tidak tepat. Kata itu sangat melenceng dari isi tindakannya.

Tindakan yang disebut konsumsi, dilihat dari isinya, adalah memakai hal-hal yang diperlukan untuk hidup. Kita memakai berbagai barang untuk sandang, pangan, papan, dan lainnya. Namun, apakah tepat menyebut hal itu "konsumsi"? Harus dikatakan tidak tepat. Sebab, dengan memakan makanan, manusia sedang memproduksi tubuhnya sendiri. Memang, bentuk makanan itu lenyap. Tetapi ia hidup kembali sebagai nyawa kita. Bagaimana dengan mengenakan pakaian? Pakaian tidak hanya menciptakan kehidupan dengan menjaga suhu tubuh, tetapi juga memproduksi kesan diri kita di mata orang lain. Dengan demikian, tindakan yang disebut konsumsi adalah tindakan memproduksi nyawa dan kehidupan kita, dan juga manusia generasi berikutnya. Meski begitu, menyebutnya "konsumen" hanyalah cara pandang dari sisi produsen barang.
(Dari buku "100 Kisah Mekanisme Ekonomi" karya Kishimoto Shigenobu)`,
    },

    // ── 問題10：感情と心理学 ──
    "10": {
      yomi: `{心理学|しんりがく}は{昔|むかし}から{心|こころ}について{研究|けんきゅう}してきたわけですが、{実|じつ}は{肝心|かんじん}の{感情|かんじょう}（{情動|じょうどう}）についてはまだよくわかっていないのです。えっ、{感情|かんじょう}こそ{心理学|しんりがく}が{得意|とくい}とするところではないのですか、と①{不思議|ふしぎ}に{思|おも}われるかもしれません。しかし、{現代|げんだい}の{心理学|しんりがく}が{得意|とくい}としているのは、どちらかというと、{私|わたし}たちが{目|め}や{耳|みみ}で{周囲|しゅうい}の{世界|せかい}をどのようにとらえるかという{感覚|かんかく}や{知覚|ちかく}の{働|はたら}きであり、どのようにものを{考|かんが}えるかといった{認知|にんち}と{呼|よ}ばれる{働|はたら}きについてです。そうした{働|はたら}きと{感情|かんじょう}を{一体化|いったいか}した{心|こころ}のプロセスが、{私|わたし}たちの②{全体的|ぜんたいてき}な「{生|せい}」の{体験|たいけん}なのかもしれません。

{最近|さいきん}では{脳|のう}{科学|かがく}やコンピュータの{専門家|せんもんか}と{協力|きょうりょく}しながら、{世界中|せかいじゅう}の{精鋭|せいえい}たちが{心|こころ}のメカニズムの{研究|けんきゅう}に{取|と}り{組|く}んでいます。その{成果|せいか}がロボット{工学|こうがく}などに{応用|おうよう}されているわけです。{人間|にんげん}と{同|おな}じように{見|み}たり、{聴|き}いたり、{歩|ある}いたり、{話|はな}したりする{精巧|せいこう}なロボットたちが{登場|とうじょう}しています。しかし、まだ{感情|かんじょう}{機能|きのう}をもつに{至|いた}っていないのはご{存知|ぞんじ}のとおりです。ロボットもうれしそうな{表情|ひょうじょう}などをしてみせることはできます。{犬型|いぬがた}のペット・ロボットならしっぽを{振|ふ}る{仕草|しぐさ}もします。しかし、それらは{表面的|ひょうめんてき}な{動作|どうさ}を{真似|まね}しているだけで、{感情|かんじょう}の{働|はたら}きがそうさせているわけではありません。{複雑|ふくざつ}な{心|こころ}の{働|はたら}きの{中|なか}でも{特|とく}に{感情|かんじょう}{機能|きのう}を{解明|かいめい}するのは{難|むずか}しく、それをうまく{再現|さいげん}できないからです。

{感情|かんじょう}は{私|わたし}たちの{体験|たいけん}を{豊|ゆた}かに{裏打|うらう}ちして（{注|ちゅう}1）、なにかを{選|えら}んだり、しようとしたりする{行動|こうどう}を{駆|か}り{立|た}てる（{注|ちゅう}2）{動因|どういん}にもなります。{例|たと}えば、{好|す}き{嫌|きら}いを{理屈|りくつ}（{論理|ろんり}）で{説明|せつめい}することは{難|むずか}しいはずですが、{実際|じっさい}の{行動|こうどう}は{簡単|かんたん}にやれます。ボーイフレンドやガールフレンドを{論理|ろんり}や{計算|けいさん}だけで{選|えら}ぶ{人|ひと}はいないはずです。まあ、{計算|けいさん}づくで（{注|ちゅう}3）{結婚|けっこん}{相手|あいて}を{決|き}めようとする{人|ひと}もいるでしょうが、その{裏|うら}には{別|べつ}の{気持|きも}ちが{動|うご}いていそうです。{感情|かんじょう}は{私|わたし}たちの{思考|しこう}や{行動|こうどう}の{土台|どだい}になっていると{考|かんが}えることができそうです。そのため、{気持|きも}ちの{落|お}ち{込|こ}みがひどいときには、{普段|ふだん}{何気|なにげ}なくやれていたことができなくなることがあるのです。
（佐藤静『こころサポート』による）
（{注|ちゅう}1）{裏打|うらう}ちして：{土台|どだい}として{支|ささ}えて
（{注|ちゅう}2）{駆|か}り{立|た}てる：{何|なに}かをせずにはいられないような{気持|きも}ちにさせる
（{注|ちゅう}3）{計算|けいさん}づくで：{自分|じぶん}の{損|そん}にならないようにいろいろ{考|かんが}えて`,
      arti: `Psikologi memang sejak dulu meneliti tentang jiwa, tetapi sebenarnya tentang hal yang paling pokok, yaitu emosi (afek), masih belum banyak dipahami. "Lho, bukankah emosi justru bidang andalan psikologi?" — mungkin Anda ① merasa heran. Namun, yang menjadi andalan psikologi modern, kalau boleh dikatakan, adalah kerja indra dan persepsi — bagaimana kita menangkap dunia sekitar dengan mata dan telinga — serta kerja yang disebut kognisi, yaitu bagaimana kita memikirkan sesuatu. Proses jiwa yang menyatukan kerja-kerja itu dengan emosi mungkin itulah ② pengalaman "hidup" kita secara utuh.

Belakangan ini, para ahli terbaik dari seluruh dunia meneliti mekanisme jiwa sambil bekerja sama dengan pakar ilmu otak dan komputer. Hasilnya diterapkan, misalnya, pada teknik robotika. Telah muncul robot-robot canggih yang bisa melihat, mendengar, berjalan, dan berbicara seperti manusia. Namun, seperti yang Anda ketahui, robot belum sampai memiliki fungsi emosi. Robot memang bisa menampilkan ekspresi seolah gembira. Robot hewan peliharaan berbentuk anjing pun bisa menggoyangkan ekor. Tetapi itu hanya meniru gerakan di permukaan, bukan karena kerja emosi yang membuatnya begitu. Sebab, di antara kerja jiwa yang rumit, fungsi emosi khususnya sulit diungkap, sehingga tidak bisa direproduksi dengan baik.

Emosi menopang (catatan 1) pengalaman kita sehingga menjadi kaya, dan juga menjadi pendorong yang menggerakkan (catatan 2) tindakan memilih atau hendak melakukan sesuatu. Misalnya, menjelaskan suka atau tidak suka dengan logika tentu sulit, tetapi dalam tindakan nyata hal itu mudah dilakukan. Tidak ada orang yang memilih pacar hanya dengan logika dan perhitungan. Yah, mungkin ada orang yang menentukan pasangan hidup dengan penuh perhitungan (catatan 3), tetapi di baliknya tampaknya ada perasaan lain yang bekerja. Emosi tampaknya bisa dianggap sebagai fondasi pikiran dan tindakan kita. Karena itu, saat perasaan sedang sangat terpuruk, hal-hal yang biasanya bisa dilakukan dengan santai pun kadang tidak bisa dilakukan.
(Dari buku "Kokoro Support")
(Catatan 1) 裏打ちして: menopang sebagai fondasi
(Catatan 2) 駆り立てる: membuat seseorang merasa tidak bisa tidak melakukan sesuatu
(Catatan 3) 計算づくで: berpikir macam-macam agar diri tidak rugi`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
しっかりした{人生|じんせい}を{歩|あゆ}むには、やはり「{学歴|がくれき}」が{必要|ひつよう}です。そう{断言|だんげん}すると{眉|まゆ}をひそめる（{注|ちゅう}1）{人|ひと}もいるかもしれません。しかし{私|わたし}には、{学歴|がくれき}なんかいらない、あるいは、ほどほど（{注|ちゅう}2）でかまわないという{考|かんが}え{方|かた}は、{中途|ちゅうと}{半端|はんぱ}なきれいごとに{思|おも}えてなりません。

{学歴|がくれき}がなくて{苦労|くろう}をしたという{話|はなし}は、{昔|むかし}はさんざん{聞|き}かされました。{最近|さいきん}はあまり{言|い}われていないだけで、{本当|ほんとう}はもっと{厳|きび}しい{選別|せんべつ}が{行|おこ}なわれているそうです。（{中略|ちゅうりゃく}）

{親|おや}ならば、{一生|いっしょう}を{幸|しあわ}せに{生|い}きていける、{一生|いっしょう}、{食|た}べるのに{困|こま}らない「{生|い}きる{力|ちから}」を、{子供|こども}に{付|つ}けさせるべきです。そして、そのための{最良|さいりょう}の{方法|ほうほう}が「{学歴|がくれき}を{付|つ}けさせる」ことだということは、{今|いま}も{昔|むかし}も、{変|か}わりないのではないでしょうか。
（{和田|わだ}{秀樹|ひでき}『{子供|こども}を{東大|とうだい}に{入|い}れる{母親|ははおや}のちょっとした「{習慣術|しゅうかんじゅつ}」』による）
（{注|ちゅう}1）{眉|まゆ}をひそめる：{不快|ふかい}に{感|かん}じる
（{注|ちゅう}2）ほどほど：ちょうどよい{程度|ていど}

【{意見|いけん} B】
いったい、{学歴|がくれき}とはなにものなのか。

{会社|かいしゃ}は、{厳|きび}しい{過当|かとう}{競争|きょうそう}のさなかにあって、{実力|じつりょく}で{勝負|しょうぶ}しなければならないというのに、そこで{働|はたら}いている{人|ひと}は、{入社|にゅうしゃ}{前|まえ}に{教育|きょういく}を{受|う}けた「{場所|ばしょ}」で{評価|ひょうか}されるというのは、どう{考|かんが}えても{納得|なっとく}がいかない。{教育|きょういく}の「{質|しつ}」が{問|と}われるのならばまだ{解|わか}る。「{場所|ばしょ}」というのは、{正常|せいじょう}ではない。わずか{数年間|すうねんかん}の{学校|がっこう}{教育|きょういく}が、{以後|いご}{何十年|なんじゅうねん}にもわたって、その{人|ひと}の{看板|かんばん}として{通用|つうよう}するというのは、{奇妙|きみょう}というほかはない。

（{中略|ちゅうりゃく}）ほんの{小|ちい}さなグループから{出発|しゅっぱつ}した{私|わたし}たちの{会社|かいしゃ}では、{何|なん}でもやれる{人|ひと}が、それをやる、といった{気持|きも}ちで{仕事|しごと}をしてきたつもりであったのに、{人数|にんずう}が{増|ふ}えてくるに{従|したが}って、いつとはなしに、{学歴|がくれき}による{区分|くぶん}といった{方式|ほうしき}が、なんとなくとり{入|い}れられつつある{事実|じじつ}に{気付|きづ}いて、はっとしたことがある。
（{盛田|もりた}{昭夫|あきお}『{学歴|がくれき}{無用論|むようろん}』による）`,
      arti: `【Pendapat A】
Untuk menjalani hidup yang mantap, bagaimanapun juga "latar belakang pendidikan" itu perlu. Kalau saya menegaskan begitu, mungkin ada yang mengernyitkan dahi (catatan 1). Namun bagi saya, pandangan bahwa pendidikan tidak perlu, atau sekadarnya (catatan 2) saja sudah cukup, mau tak mau terasa sebagai omong kosong yang setengah-setengah.

Dulu kita sering sekali mendengar cerita orang yang susah payah karena tidak berpendidikan tinggi. Katanya, belakangan hanya jarang dibicarakan saja, padahal sebenarnya seleksi yang lebih ketat sedang berlangsung. (dihilangkan)

Sebagai orang tua, kita seharusnya membekali anak dengan "daya hidup" agar bisa hidup bahagia seumur hidup dan tidak kesulitan makan seumur hidup. Dan bukankah cara terbaik untuk itu adalah "membekalinya dengan pendidikan" — hal ini tidak berubah dari dulu sampai sekarang?
(Dari buku karya Wada Hideki tentang kebiasaan kecil ibu yang memasukkan anaknya ke Universitas Tokyo)
(Catatan 1) 眉をひそめる: merasa tidak senang
(Catatan 2) ほどほど: tingkat yang pas, sekadarnya

【Pendapat B】
Sebenarnya, apa itu latar belakang pendidikan?

Perusahaan sedang berada di tengah persaingan berlebihan yang ketat dan harus bertarung dengan kemampuan nyata, tetapi orang yang bekerja di sana dinilai berdasarkan "tempat" ia menempuh pendidikan sebelum masuk perusahaan — bagaimanapun dipikirkan, hal itu tidak masuk akal. Kalau yang dipertanyakan adalah "mutu" pendidikannya, masih bisa dimengerti. Tetapi "tempat", itu tidak wajar. Pendidikan sekolah yang hanya beberapa tahun berlaku sebagai "papan nama" orang itu selama puluhan tahun sesudahnya — itu tidak bisa disebut selain aneh.

(dihilangkan) Di perusahaan kami yang berangkat dari kelompok yang sangat kecil, kami merasa sudah bekerja dengan semangat "siapa yang bisa, dia yang mengerjakan". Namun, seiring jumlah orang bertambah, saya pernah tersentak saat menyadari kenyataan bahwa tanpa disadari, cara pembagian berdasarkan latar belakang pendidikan perlahan-lahan mulai diterapkan.
(Dari buku "Gakureki Muyōron" karya Morita Akio)`,
    },

    // ── 問題12：外的報酬と内的報酬 ──
    "12": {
      yomi: `{給与|きゅうよ}には{外的|がいてき}{報酬|ほうしゅう}と{内的|ないてき}{報酬|ほうしゅう}のふたつがある。

{外的|がいてき}{報酬|ほうしゅう}とは{給与|きゅうよ}そのものやインセンティブ（{奨励金|しょうれいきん}）といった、お{金|かね}として{受|う}け{取|と}れるものである。

それに{対|たい}して{内的|ないてき}{報酬|ほうしゅう}とは、{給与|きゅうよ}の{額|がく}には{表|あらわ}れないが、その{仕事|しごと}を{通|とお}して{得|え}られる{満足|まんぞく}の{報酬|ほうしゅう}といったものである。

たとえば、こんな{給与|きゅうよ}はどうだろうか。

{外部|がいぶ}の{人|ひと}と{知|し}り{合|あ}う{機会|きかい}がある「{出会|であ}い{給与|きゅうよ}」、そこにいるだけで{新|あたら}しい{情報|じょうほう}に{触|ふ}れられる「{情報|じょうほう}{供与|きょうよ}」、{専門的|せんもんてき}な{技|わざ}を{習得|しゅうとく}できる「{技|わざ}{磨|みが}き{給与|きゅうよ}」、{気|き}の{合|あ}った{仲間|なかま}と{一緒|いっしょ}にいられる「ふれあい{給与|きゅうよ}」、そして{一流|いちりゅう}の{人|ひと}をそばでウォッチできる（{注|ちゅう}1）「おそば{給与|きゅうよ}」など、そんな{給与|きゅうよ}の{名称|めいしょう}はないが、あると{嬉|うれ}しい{給与|きゅうよ}である。

{私|わたし}の{場合|ばあい}、{外的|がいてき}{報酬|ほうしゅう}よりも{内的|ないてき}{報酬|ほうしゅう}を{増|ふ}やすことを{心|こころ}がけてきた。

たしかに、{同僚|どうりょう}よりも{低|ひく}く{評価|ひょうか}されたショックは{今|いま}でも{忘|わす}れられないし、{同期|どうき}とのボーナスの{差|さ}が{何十万円|なんじゅうまんえん}あっても{愕然|がくぜん}としたこともあった。

しかし、{生活|せいかつ}が{脅|おびや}されるほどの{額|がく}でもないと{割|わ}り{切|き}れれば、{目|め}に{見|み}えない{給与|きゅうよ}を{増|ふ}やすほうが{個人的|こじんてき}な{満足|まんぞく}は{高|たか}いことがわかったのである。

また、{仕事|しごと}を{長|なが}く{続|つづ}けていくには、{内的|ないてき}{報酬|ほうしゅう}がちゃんとなくてはつとまらないということもわかってきた。

{仕事|しごと}をなし{遂|と}げたときの「{達成感|たっせいかん}」や、{自分|じぶん}が{成長|せいちょう}していることを{実感|じっかん}できる「{成長感|せいちょうかん}」こそ{仕事|しごと}の{原動力|げんどうりょく}であって、{他人|たにん}からの{評価|ひょうか}という、{自分|じぶん}の{努力|どりょく}ではいかんともしがたい（{注|ちゅう}2）ものにとらわれすぎるのは{得策|とくさく}ではないと{気|き}づいたのである。

（{中略|ちゅうりゃく}）
どんなに{外的|がいてき}{報酬|ほうしゅう}が{高|たか}くても{内的|ないてき}{報酬|ほうしゅう}が{極端|きょくたん}に{低|ひく}い{仕事|しごと}だと、{長|なが}く{続|つづ}けることはできない。また、①そこで{得|え}たお{金|かね}は{身|み}につかないことが{多|おお}い。

いっぽう、{内的|ないてき}{報酬|ほうしゅう}の{高|たか}い{仕事|しごと}なら、もしかしたら{将来|しょうらい}ビッグな（{注|ちゅう}3）{報酬|ほうしゅう}に{化|ば}けるかもしれない。その{可能性|かのうせい}は{充分|じゅうぶん}にあると{言|い}っていい。たとえ{戻|もど}ってこなかったとしても、{続|つづ}けていけるよさはある。

{私|わたし}の{友人|ゆうじん}に、{編集部|へんしゅうぶ}で{十年間|じゅうねんかん}アルバイトを{続|つづ}けた{人|ひと}がいる。{正|せい}{社員|しゃいん}に{比|くら}べて{給与|きゅうよ}は{低|ひく}く、ボーナスも、{退職金|たいしょくきん}ももちろんない。

しかし、その{後|ご}フリー（{注|ちゅう}4）になった{友人|ゆうじん}は、{正|せい}{社員|しゃいん}よりもはるかに{多|おお}い{報酬|ほうしゅう}を{得|え}るようになった。アルバイトの{十年間|じゅうねんかん}で{技術|ぎじゅつ}を{身|み}につけ、{人脈|じんみゃく}を{培|つちか}い、{仕事|しごと}の{幅|はば}を{広|ひろ}げた、②まさに{内的|ないてき}{報酬|ほうしゅう}が{外的|がいてき}{報酬|ほうしゅう}へと{実|み}を{結|むす}んでいったのである。

{時価|じか}で{給与|きゅうよ}を{計|はか}るより、{心|こころ}の{満足|まんぞく}を{含|ふく}めたトータルかつ{長期|ちょうき}の{視点|してん}で{報酬|ほうしゅう}をとらえないと、{結局|けっきょく}のところ{給与|きゅうよ}は{増|ふ}えていかないのだと{思|おも}う。
（{松永|まつなが}{真理|まり}『シゴトのココロ』による）
（{注|ちゅう}1）ウォッチできる：ここでは、{観察|かんさつ}できること
（{注|ちゅう}2）いかんともしがたい：どうしようもない
（{注|ちゅう}3）ビッグな：{大|おお}きな
（{注|ちゅう}4）フリー：フリーランスの{略|りゃく}。{特定|とくてい}の{組織|そしき}に{所属|しょぞく}せず{自由|じゆう}に{仕事|しごと}をする{人|ひと}`,
      arti: `Gaji terdiri dari dua: imbalan eksternal dan imbalan internal.

Imbalan eksternal adalah hal yang bisa diterima dalam bentuk uang, seperti gaji itu sendiri atau insentif (uang perangsang).

Sebaliknya, imbalan internal adalah imbalan berupa kepuasan yang diperoleh melalui pekerjaan itu, meski tidak tampak pada besaran gaji.

Misalnya, bagaimana dengan "gaji-gaji" seperti ini?

"Gaji perjumpaan" berupa kesempatan berkenalan dengan orang luar, "gaji informasi" berupa bisa bersentuhan dengan informasi baru hanya dengan berada di sana, "gaji asah keterampilan" berupa bisa menguasai teknik profesional, "gaji kebersamaan" berupa bisa bersama rekan yang cocok, dan "gaji di samping" berupa bisa mengamati (catatan 1) orang kelas satu dari dekat — memang tidak ada gaji dengan nama seperti itu, tetapi alangkah senangnya jika ada.

Dalam kasus saya, saya selalu berusaha menambah imbalan internal daripada imbalan eksternal.

Memang, sampai sekarang saya tidak bisa melupakan kejutan saat dinilai lebih rendah daripada rekan kerja, dan saya pernah tercengang ketika selisih bonus dengan rekan seangkatan mencapai ratusan ribu yen.

Namun, jika bisa menerima dengan tegas bahwa jumlahnya tidak sampai mengancam kehidupan, saya jadi tahu bahwa menambah gaji yang tak terlihat memberi kepuasan pribadi yang lebih tinggi.

Saya juga jadi mengerti bahwa untuk bisa bekerja dalam jangka panjang, pekerjaan tidak akan bisa dijalani tanpa imbalan internal yang memadai.

Saya menyadari bahwa "rasa pencapaian" saat menuntaskan pekerjaan dan "rasa bertumbuh" saat merasakan diri berkembang itulah daya penggerak kerja, dan bahwa terlalu terpaku pada penilaian orang lain — hal yang tidak bisa diapa-apakan (catatan 2) dengan usaha sendiri — bukanlah langkah yang bijak.

(dihilangkan)
Setinggi apa pun imbalan eksternalnya, jika imbalan internalnya sangat rendah, pekerjaan itu tidak bisa dijalani lama. Selain itu, ① uang yang diperoleh di sana sering kali tidak bertahan (cepat habis).

Sebaliknya, pekerjaan dengan imbalan internal yang tinggi mungkin saja kelak berubah menjadi imbalan yang besar (catatan 3). Bisa dikatakan kemungkinannya cukup besar. Seandainya pun tidak kembali (dalam bentuk uang), tetap ada kebaikannya karena pekerjaan itu bisa terus dijalani.

Seorang teman saya bekerja paruh waktu di bagian redaksi selama sepuluh tahun. Dibandingkan karyawan tetap, gajinya rendah, dan tentu saja tidak ada bonus maupun pesangon.

Namun, teman yang kemudian menjadi pekerja lepas (catatan 4) itu akhirnya memperoleh imbalan yang jauh lebih besar daripada karyawan tetap. Selama sepuluh tahun bekerja paruh waktu, ia menguasai keterampilan, memupuk relasi, dan memperluas cakupan kerjanya — ② imbalan internal benar-benar berbuah menjadi imbalan eksternal.

Menurut saya, jika imbalan tidak dipandang dari sudut pandang menyeluruh dan jangka panjang yang mencakup kepuasan batin, alih-alih mengukur gaji dengan nilai saat ini, pada akhirnya gaji tidak akan bertambah.
(Dari buku "Shigoto no Kokoro" karya Matsunaga Mari)
(Catatan 1) ウォッチできる: di sini, bisa mengamati
(Catatan 2) いかんともしがたい: tidak bisa berbuat apa-apa
(Catatan 3) ビッグな: besar
(Catatan 4) フリー: singkatan dari freelance; orang yang bekerja bebas tanpa terikat organisasi tertentu`,
    },

    // ── 問題13：清森市 秋の美術コンクール ──
    "13": {
      yomi: `{清森市|きよもりし}　{秋|あき}の{美術|びじゅつ}コンクール
{作品|さくひん}{募集|ぼしゅう}

{部門|ぶもん}　{絵画|かいが}{部門|ぶもん}、{写真|しゃしん}{部門|ぶもん}

{募集|ぼしゅう}{期間|きかん}　2010{年|ねん}11{月|がつ}1{日|ついたち}～11{月|がつ}30{日|にち}

{審査員|しんさいん}　{山田|やまだ}{太郎|たろう}（{日本|にほん}アート{協会|きょうかい}{会長|かいちょう}）、{山本|やまもと}{花子|はなこ}（{画家|がか}）、{川上|かわかみ}{次郎|じろう}（{写真家|しゃしんか}）

{応募|おうぼ}{規定|きてい}
1　{清森|きよもり}{市内|しない}の{秋|あき}を{題材|だいざい}にしたもの。
2　{絵画|かいが}{部門|ぶもん}に{出品|しゅっぴん}する{作品|さくひん}は、イラスト、{水彩画|すいさいが}、{油絵|あぶらえ}、どれでも{可|か}。
{写真|しゃしん}{部門|ぶもん}に{出品|しゅっぴん}する{写真|しゃしん}は、フィルム{写真|しゃしん}、デジタル{写真|しゃしん}、どちらも{可|か}。
※{応募|おうぼ}{作品|さくひん}は{各|かく}{部門|ぶもん}1{人|にん}1{点|てん}に{限|かぎ}ります。
※{作品|さくひん}の{制作|せいさく}{年|ねん}は{問|と}わないが、{未発表|みはっぴょう}のものに{限|かぎ}ります。
（{他|ほか}のコンクールに{入賞|にゅうしょう}していたり、{出版物|しゅっぱんぶつ}や{展示会|てんじかい}などで{公表|こうひょう}されたりしていないものであること。）

{応募|おうぼ}{方法|ほうほう}
{郵送|ゆうそう}、または{持参|じさん}。ただし、{郵送|ゆうそう}{中|ちゅう}の{事故|じこ}について、{市|し}は{責任|せきにん}を{負|お}いません。
{指定|してい}の{応募|おうぼ}{用紙|ようし}を{作品|さくひん}{裏側|うらがわ}に{添付|てんぷ}のこと。{応募|おうぼ}{用紙|ようし}は{市役所|しやくしょ}の{窓口|まどぐち}で、または{市|し}のホームページ（http://www.kiyomori-shi.jp）から{入手|にゅうしゅ}{可能|かのう}。

{応募|おうぼ}{先|さき}
{清森市|きよもりし}{商業|しょうぎょう}{観光課|かんこうか}{観光|かんこう}{係|がかり}
（〒951-0022 {清森市|きよもりし}{清森|きよもり}2-8、TEL 084-874-8524）

{賞|しょう}
{最|さい}{優秀賞|ゆうしゅうしょう}：{各|かく}{部門|ぶもん}1{点|てん}、{賞状|しょうじょう}と{副賞|ふくしょう}（デジタル{一眼|いちがん}レフカメラ）
{優秀賞|ゆうしゅうしょう}：{各|かく}{部門|ぶもん}2{点|てん}、{賞状|しょうじょう}と{副賞|ふくしょう}（{清森|きよもり}ホテルのペア{宿泊券|しゅくはくけん}）
{清森賞|きよもりしょう}：{各|かく}{部門|ぶもん}20{点|てん}{以内|いない}、{賞状|しょうじょう}と{副賞|ふくしょう}（{図書|としょ}カード5{千円|せんえん}{分|ぶん}）

{審査|しんさ}{結果|けっか}
{清森市|きよもりし}のホームページ{上|じょう}に1{月|がつ}15{日|にち}に{発表|はっぴょう}します。{入賞者|にゅうしょうしゃ}には1{月|がつ}{中|ちゅう}に{結果|けっか}を{郵送|ゆうそう}します。{電話|でんわ}および{窓口|まどぐち}での{問|と}い{合|あ}わせには{応|おう}じられません。

{表彰式|ひょうしょうしき}
2011{年|ねん}2{月|がつ}{下旬|げじゅん}（{予定|よてい}）{最|さい}{優秀賞|ゆうしゅうしょう}と{優秀賞|ゆうしゅうしょう}の{方|かた}には、{表彰式|ひょうしょうしき}で{賞状|しょうじょう}および{副賞|ふくしょう}をお{渡|わた}しします。
※{入賞|にゅうしょう}{作品|さくひん}は、1{年|ねん}を{限度|げんど}に{主催者|しゅさいしゃ}がお{預|あず}かりして{広報|こうほう}{活動|かつどう}などに{使用|しよう}し、1{年|ねん}{後|ご}にお{返|かえ}しします。
※{上記|じょうき}の{応募|おうぼ}{規定|きてい}を{守|まも}っていなかった{場合|ばあい}には{入賞|にゅうしょう}が{取|と}り{消|け}されることがあります。

（{主催|しゅさい}）{清森市|きよもりし}
（{協賛|きょうさん}）{昭和|しょうわ}デザイン{株式|かぶしき}{会社|がいしゃ}、{山手|やまのて}{百貨店|ひゃっかてん}、{新|しん}{東京|とうきょう}{鉄道|てつどう}、{清森|きよもり}ホテル`,
      arti: `Kota Kiyomori — Lomba Seni Musim Gugur
Penerimaan Karya

Kategori: lukisan, foto

Masa penerimaan: 1–30 November 2010

Juri: Yamada Tarō (Ketua Asosiasi Seni Jepang), Yamamoto Hanako (pelukis), Kawakami Jirō (fotografer)

Ketentuan peserta
1. Karya bertema musim gugur di dalam Kota Kiyomori.
2. Karya kategori lukisan boleh berupa ilustrasi, lukisan cat air, maupun lukisan cat minyak.
Foto kategori foto boleh berupa foto film maupun foto digital.
※Setiap orang hanya boleh mengirim 1 karya per kategori.
※Tahun pembuatan karya tidak dipersoalkan, tetapi harus karya yang belum pernah dipublikasikan.
(Yaitu karya yang belum pernah menang di lomba lain, dan belum pernah dipublikasikan dalam terbitan, pameran, dan sebagainya.)

Cara mengirim
Melalui pos atau diantar langsung. Namun, pemerintah kota tidak bertanggung jawab atas kecelakaan selama pengiriman pos.
Formulir pendaftaran yang ditentukan harus ditempelkan di bagian belakang karya. Formulir bisa didapat di loket balai kota atau dari situs web kota (http://www.kiyomori-shi.jp).

Alamat pengiriman
Seksi Pariwisata, Bagian Perdagangan dan Pariwisata, Kota Kiyomori
(〒951-0022 Kiyomori 2-8, Kota Kiyomori, TEL 084-874-8524)

Hadiah
Juara utama: 1 karya per kategori, piagam dan hadiah tambahan (kamera DSLR digital)
Juara unggulan: 2 karya per kategori, piagam dan hadiah tambahan (voucher menginap berdua di Hotel Kiyomori)
Penghargaan Kiyomori: maksimal 20 karya per kategori, piagam dan hadiah tambahan (kartu buku senilai 5.000 yen)

Hasil penjurian
Diumumkan di situs web Kota Kiyomori pada 15 Januari. Hasilnya dikirim lewat pos kepada para pemenang dalam bulan Januari. Pertanyaan melalui telepon maupun di loket tidak dilayani.

Upacara penghargaan
Akhir Februari 2011 (rencana). Pemenang juara utama dan juara unggulan akan menerima piagam dan hadiah tambahan di upacara penghargaan.
※Karya pemenang akan disimpan penyelenggara paling lama 1 tahun untuk digunakan dalam kegiatan publikasi dan sebagainya, lalu dikembalikan setelah 1 tahun.
※Jika ketentuan peserta di atas tidak dipatuhi, kemenangan dapat dibatalkan.

(Penyelenggara) Kota Kiyomori
(Sponsor) PT Showa Design, Department Store Yamanote, Kereta Shin-Tokyo, Hotel Kiyomori`,
    },
  },
};
