import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2011
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1107: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{去年|きょねん}より【{利益|りえき}】がわずかに{増|ふ}えた。",
      arti: "【Keuntungan】 sedikit bertambah dibanding tahun lalu.",
    },
    2: {
      yomi: "{橋本|はしもと}{選手|せんしゅ}の{活躍|かつやく}で、なんとかピンチを【{逃|のが}れた】。",
      arti: "Berkat aksi atlet Hashimoto, kami entah bagaimana 【lolos】 dari situasi genting.",
      optArti: ["lolos, meloloskan diri (逃れた)", "menjauh, berpisah (離れた)", "meleset, menyimpang (逸れた)", "terhindar dari (免れた)"],
    },
    3: {
      yomi: "{子|こ}どものおもちゃは、{安全性|あんぜんせい}を【{考慮|こうりょ}】して{選|えら}ぶようにしている。",
      arti: "Saya berusaha memilih mainan anak dengan 【mempertimbangkan】 keamanannya.",
    },
    4: {
      yomi: "この{辺|あた}りは{視界|しかい}を【{遮|さえぎ}る】{物|もの}がない。",
      arti: "Di sekitar sini tidak ada benda yang 【menghalangi】 pandangan.",
      optArti: ["mengganggu, merintangi (妨げる)", "menghalangi (遮る)", "mempersempit (狭める)", "memisahkan, menyekat (隔てる)"],
    },
    5: {
      yomi: "この{説|せつ}は{科学的|かがくてき}な【{根拠|こんきょ}】に{乏|とぼ}しい。",
      arti: "Teori ini kurang memiliki 【dasar/landasan】 ilmiah.",
    },
    6: {
      yomi: "{何事|なにごと}も{初|はじ}めが【{肝心|かんじん}】だ。",
      arti: "Dalam segala hal, awal itu 【sangat penting】.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{物置|ものおき}の{隅|すみ}で、ほこり（　）になっている{古|ふる}い{人形|にんぎょう}を{見|み}つけた。",
      arti: "Di sudut gudang, saya menemukan boneka tua yang (…) debu.",
      optArti: ["beserta seluruhnya, termasuk", "terkait dengan, sekitar (usia)", "berlumuran, penuh (kotoran)", "serba (hitam, dsb.)"],
    },
    8: {
      yomi: "{木村|きむら}さんとは{共通|きょうつう}の{趣味|しゅみ}があるので、いつも{会話|かいわ}が（　）。",
      arti: "Karena punya hobi yang sama dengan Kimura-san, percakapan kami selalu (…).",
      optYomi: ["{舞|ま}う", "{弾|はず}む", "{転|ころ}がる", "{跳|は}ねる"],
      optArti: ["menari, beterbangan", "hidup, mengalir seru (percakapan)", "berguling", "melompat, memantul"],
    },
    9: {
      yomi: "{地域|ちいき}の（　）に{合|あ}った{医療|いりょう}のシステムが{求|もと}められている。",
      arti: "Dibutuhkan sistem layanan kesehatan yang sesuai dengan (…) daerah.",
      optYomi: ["{実情|じつじょう}", "{実況|じっきょう}", "{実権|じっけん}", "{実在|じつざい}"],
      optArti: ["kondisi nyata", "siaran langsung (keadaan sebenarnya)", "kekuasaan nyata", "keberadaan nyata"],
    },
    10: {
      yomi: "その{選手|せんしゅ}は、{十年|じゅうねん}に{一人|ひとり}の（　）だと{言|い}われている。",
      arti: "Atlet itu disebut sebagai (…) yang muncul sekali dalam sepuluh tahun.",
      optYomi: ["{玄人|くろうと}", "{大家|たいか}", "{巨匠|きょしょう}", "{逸材|いつざい}"],
      optArti: ["profesional, ahli", "pakar besar (seni, ilmu)", "maestro", "bakat luar biasa"],
    },
    11: {
      yomi: "{書類|しょるい}に（　）があった{場合|ばあい}、{申請|しんせい}は{受理|じゅり}されません。",
      arti: "Jika ada (…) pada dokumen, pengajuan tidak akan diterima.",
      optYomi: ["{不穏|ふおん}", "{不当|ふとう}", "{不備|ふび}", "{不順|ふじゅん}"],
      optArti: ["tidak tenteram, gawat", "tidak sah, tidak adil", "kekurangan, tidak lengkap", "tidak teratur (cuaca)"],
    },
    12: {
      yomi: "{約|やく}300{年|ねん}{前|まえ}の{絵画|かいが}の（　）が{終|お}わり、{来月|らいげつ}から{公開|こうかい}される{予定|よてい}だ。",
      arti: "(…) lukisan berusia sekitar 300 tahun telah selesai, dan rencananya akan dipamerkan mulai bulan depan.",
      optYomi: ["{回復|かいふく}", "{修復|しゅうふく}", "{復旧|ふっきゅう}", "{復興|ふっこう}"],
      optArti: ["pemulihan (kesehatan, kondisi)", "restorasi, perbaikan (karya, bangunan)", "pemulihan (sarana yang rusak)", "pembangunan kembali (daerah)"],
    },
    13: {
      yomi: "{経済|けいざい}だけでなく、{法律|ほうりつ}にも{詳|くわ}しいのが{彼|かれ}の（　）だ。",
      arti: "Paham tidak hanya ekonomi tetapi juga hukum adalah (…) dirinya.",
      optYomi: ["{深|ふか}み", "{強|つよ}み", "{高|たか}み", "{重|おも}み"],
      optArti: ["kedalaman", "kelebihan, keunggulan", "ketinggian", "bobot"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "この{映画|えいが}は【{画期的|かっきてき}な】{手法|しゅほう}で{製作|せいさく}された。",
      arti: "Film ini dibuat dengan teknik yang 【revolusioner】.",
      optYomi: ["{広|ひろ}く{知|し}られている", "{最近|さいきん}ではめずらしい", "{非常|ひじょう}に{時間|じかん}がかかる", "{今|いま}までになく{新|あたら}しい"],
      optArti: ["dikenal luas", "jarang belakangan ini", "sangat memakan waktu", "baru, belum pernah ada sebelumnya"],
    },
    15: {
      yomi: "あの{企業|きぎょう}は{海外|かいがい}{市場|しじょう}への{進出|しんしゅつ}を【もくろんで】いる。",
      arti: "Perusahaan itu 【merencanakan】 ekspansi ke pasar luar negeri.",
      optYomi: ["{計画|けいかく}して", "{果|は}たして", "{開始|かいし}して", null],
      optArti: ["merencanakan", "mewujudkan, menunaikan", "memulai", "menyerah"],
    },
    16: {
      yomi: "{問題|もんだい}を{解決|かいけつ}するために、もう{少|すこ}し【{手|て}がかり】が{欲|ほ}しい。",
      arti: "Untuk menyelesaikan masalah, saya ingin sedikit lebih banyak 【petunjuk】.",
      optArti: ["citra, gambaran", "dukungan", "kesempatan", "petunjuk (hint)"],
    },
    17: {
      yomi: "あの{人|ひと}の{話|はなし}は【にわかには】{信|しん}じられない。",
      arti: "Cerita orang itu tidak bisa 【langsung begitu saja】 dipercaya.",
      optYomi: [null, "{完全|かんぜん}には", null, "{簡単|かんたん}には"],
      optArti: ["langsung, seketika", "sepenuhnya", "dengan polos", "dengan mudah"],
    },
    18: {
      yomi: "この{鍋|なべ}は【{重宝|ちょうほう}して】いる。",
      arti: "Panci ini 【sangat berguna/sering saya andalkan】.",
      optYomi: ["{以前|いぜん}より{値上|ねあ}がりしている", "{形|かたち}が{気|き}に{入|い}っている", "{評価|ひょうか}が{高|たか}まっている", "{便利|べんり}で{役|やく}に{立|た}っている"],
      optArti: ["harganya naik dari sebelumnya", "saya suka bentuknya", "penilaiannya meningkat", "praktis dan berguna"],
    },
    19: {
      yomi: "{中村|なかむら}さんは{仕事|しごと}に{対|たい}していつも【シビアだ】。",
      arti: "Nakamura-san selalu 【tegas/ketat】 dalam pekerjaan.",
      optYomi: ["{弱気|よわき}だ", "{厳|きび}しい", "{柔軟|じゅうなん}だ", "{注意深|ちゅういぶか}い"],
      optArti: ["lemah hati, pesimis", "ketat, keras", "luwes", "berhati-hati"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "{連携|れんけい}",
      arti: "連携 = bekerja sama, berkoordinasi (antarpihak)",
      optYomi: [
        "{学校|がっこう}は{地域|ちいき}と{連携|れんけい}して{生徒|せいと}の{安全|あんぜん}を{守|まも}っている。",
        "{複数|ふくすう}の{社員|しゃいん}で{一台|いちだい}のプリンターを{連携|れんけい}して{使|つか}っている。",
        "{最近|さいきん}の{株価|かぶか}は、{為替|かわせ}レートと{連携|れんけい}して{上下|じょうげ}している。",
        "{登山|とざん}のときには、{必|かなら}ず{地図|ちず}を{連携|れんけい}してください。",
      ],
      optArti: [
        "Sekolah 'bekerja sama' dengan masyarakat sekitar untuk menjaga keamanan siswa.",
        "Beberapa karyawan 'bekerja sama' memakai satu printer.",
        "Harga saham belakangan ini naik-turun 'bekerja sama' dengan nilai tukar.",
        "Saat mendaki gunung, pastikan 'bekerja sama' dengan peta.",
      ],
    },
    21: {
      yomi: "{不服|ふふく}",
      arti: "不服 = ketidakpuasan, keberatan (terhadap keputusan)",
      optYomi: [
        "{彼|かれ}の{失礼|しつれい}な{態度|たいど}は、そこにいた{人々|ひとびと}の{不服|ふふく}を{買|か}った。",
        "カラオケで{思|おも}い{切|き}り{歌|うた}って、{日|ひ}ごろの{不服|ふふく}を{晴|は}らそう。",
        "{審判|しんぱん}の{判定|はんてい}に{不服|ふふく}を{唱|とな}えることはできない。",
        "この{部署|ぶしょ}で、お{客様|きゃくさま}からの{不服|ふふく}を{受|う}け{付|つ}けています。",
      ],
      optArti: [
        "Sikapnya yang tidak sopan menimbulkan 'keberatan' orang-orang di sana.",
        "Ayo nyanyi sepuasnya di karaoke untuk melampiaskan 'keberatan' sehari-hari.",
        "Kita tidak bisa mengajukan 'keberatan' atas keputusan wasit.",
        "Bagian ini menerima 'keberatan' dari pelanggan.",
      ],
    },
    22: {
      arti: "かなう = (keinginan, impian) terwujud, terkabul",
      optYomi: [
        "{苦労|くろう}がかない、{彼|かれ}は{俳優|はいゆう}として{成功|せいこう}をおさめた。",
        "{天気|てんき}{予報|よほう}がかない、{今日|きょう}は{一日中|いちにちじゅう}{快晴|かいせい}だった。",
        "{準備|じゅんび}を{重|かさ}ねてきたイベントが{無事|ぶじ}かなった。",
        "{自分|じぶん}の{店|みせ}を{持|も}つという{夢|ゆめ}が、とうとうかなった。",
      ],
      optArti: [
        "Kerja kerasnya 'terkabul', dan ia meraih sukses sebagai aktor.",
        "Ramalan cuaca 'terkabul', hari ini cerah sepanjang hari.",
        "Acara yang terus dipersiapkan 'terkabul' dengan lancar.",
        "Impian memiliki toko sendiri akhirnya 'terkabul'.",
      ],
    },
    23: {
      yomi: "{目覚|めざ}ましい",
      arti: "目覚ましい = menakjubkan, mencolok (kemajuan, perkembangan)",
      optYomi: [
        "あの{新人|しんじん}{選手|せんしゅ}は{目覚|めざ}ましい{成長|せいちょう}を{見|み}せている。",
        "{上|うえ}の{階|かい}で{目覚|めざ}ましいほどの{大|おお}きな{物音|ものおと}がした。",
        "この{赤|あか}はとても{目覚|めざ}ましい{色|いろ}で{人目|ひとめ}をひくね。",
        "{夕|ゆう}べ{早|はや}く{寝|ね}たので、{今朝|けさ}はとても{目覚|めざ}ましい。",
      ],
      optArti: [
        "Atlet pendatang baru itu menunjukkan perkembangan yang 'menakjubkan'.",
        "Terdengar bunyi keras yang 'menakjubkan' dari lantai atas.",
        "Warna merah ini sangat 'menakjubkan' dan menarik perhatian, ya.",
        "Karena semalam tidur cepat, pagi ini saya sangat 'menakjubkan'.",
      ],
    },
    24: {
      arti: "ほどける = (ikatan, simpul) terlepas, terurai",
      optYomi: [
        "ねじがほどけて、いすがぐらぐらしている。",
        "{靴|くつ}のひもがほどけないようにしっかり{結|むす}んだ。",
        "シャツのボタンがほどけているから、とめた{方|ほう}がいいよ。",
        "グラスに{浮|う}かぶ{氷|こおり}がみるみるうちにほどけた。",
      ],
      optArti: [
        "Sekrupnya 'terurai', jadi kursinya goyang.",
        "Saya mengikat tali sepatu erat-erat agar tidak 'terlepas'.",
        "Kancing kemejamu 'terurai', sebaiknya dikancingkan.",
        "Es yang mengapung di gelas 'terurai' dalam sekejap.",
      ],
    },
    25: {
      yomi: "{赴任|ふにん}",
      arti: "赴任 = berangkat ke tempat tugas baru (penempatan kerja)",
      optYomi: [
        "{明日|あした}から{三日間|みっかかん}{東京|とうきょう}へ{赴任|ふにん}しなければならない。",
        "{新入|しんにゅう}{社員|しゃいん}の{研修|けんしゅう}では、{実際|じっさい}に{売|う}り{場|ば}にも{赴任|ふにん}してもらう。",
        "{部長|ぶちょう}が{海外|かいがい}の{支社|ししゃ}に{赴任|ふにん}するので、みんなで{送別会|そうべつかい}を{開|ひら}いた。",
        "{田中|たなか}{氏|し}が{新|あたら}しい{社長|しゃちょう}に{赴任|ふにん}することが{発表|はっぴょう}された。",
      ],
      optArti: [
        "Mulai besok saya harus 'bertugas' ke Tokyo selama tiga hari.",
        "Dalam pelatihan karyawan baru, mereka juga diminta 'bertugas' di area penjualan.",
        "Karena manajer akan 'ditempatkan' di kantor cabang luar negeri, kami semua mengadakan pesta perpisahan.",
        "Diumumkan bahwa Tuan Tanaka akan 'ditempatkan' sebagai direktur baru.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{人気|にんき}{作家|さっか}A{氏|し}の{講演会|こうえんかい}が{無料|むりょう}（　）、{多|おお}くのファンが{詰|つ}めかけた。",
      arti: "(…) ceramah penulis populer A gratis, banyak penggemar berbondong-bondong datang.",
      optArti: ["pada (tahap) ... sudah", "dalam situasi ...", "sebagai", "karena (situasi khusus) ..."],
    },
    27: {
      yomi: "{都会|とかい}から{田舎|いなか}に{移|うつ}り{住|す}んだ{人|ひと}の{話|はなし}を{聞|き}く（　）、「{田舎|いなか}は{人|ひと}を{癒|いや}す{力|ちから}を{持|も}っている」とつくづく{感|かん}じる。",
      arti: "(…) mendengar cerita orang yang pindah dari kota ke desa, saya sungguh merasa, \"Desa memiliki kekuatan untuk menyembuhkan jiwa orang.\"",
      optArti: ["setiap kali (selalu teringat/merasa)", "begitu ... langsung", "yang namanya ..., ternyata", "dari sudut pandang ..."],
    },
    28: {
      yomi: "この{鍋|なべ}は、いため{物|もの}に、{揚|あ}げ{物|もの}に（　）{何|なん}にでも{使|つか}えて{便利|べんり}です。",
      arti: "Panci ini praktis karena bisa dipakai untuk apa saja: tumisan, gorengan, (…).",
      optArti: ["(penanda topik)", "dan (sebagainya; ～に～にと)", "atau, dan lain-lain", "atau"],
    },
    29: {
      yomi: "プリンターの{調子|ちょうし}が{悪|わる}くなり、{製造|せいぞう}{会社|がいしゃ}に{電話|でんわ}で{問|と}い{合|あ}わせたら、{向|む}こうの{担当者|たんとうしゃ}に、あれこれ{質問|しつもん}に{答|こた}え（　）あげく、{対応|たいおう}できないと{言|い}われた。",
      arti: "Printer saya bermasalah, jadi saya menelepon pabrikannya; setelah (…) menjawab macam-macam pertanyaan oleh petugas di sana, akhirnya saya diberi tahu bahwa mereka tidak bisa menanganinya.",
      optArti: ["menyuruh (menjawab)", "disuruh (menjawab, akan)", "menyuruh (akan)", "dipaksa/disuruh (menjawab)"],
    },
    30: {
      yomi: "その{日|ひ}、{私|わたし}はホームに{入|はい}ってきた{電車|でんしゃ}に{飛|と}び{乗|の}った。ところが、{電車|でんしゃ}は{反対|はんたい}{方向|ほうこう}に{走|はし}り{始|はじ}めた（　）{私|わたし}は{電車|でんしゃ}の{行|い}き{先|さき}を{確|たし}かめなかったことを{後悔|こうかい}した。",
      arti: "Hari itu, saya melompat naik ke kereta yang masuk ke peron. Tetapi kereta itu mulai berjalan ke arah sebaliknya (…). Saya menyesal tidak memastikan tujuan kereta.",
      optArti: ["bukan", "...rupanya! (terkejut)", "bukan berarti", "bukankah ...? (dugaan)"],
    },
    31: {
      yomi: "（インタビューで）A「お{店|みせ}で{一番|いちばん}{気|き}をつけていることは{何|なん}ですか」B「{衛生|えいせい}{管理|かんり}です。お{客様|きゃくさま}に{食事|しょくじ}を（　）、{衛生面|えいせいめん}の{管理|かんり}には、{何|なに}よりも{注意|ちゅうい}しております。」",
      arti: "(Dalam wawancara) A: \"Apa yang paling Anda perhatikan di toko?\" B: \"Pengelolaan kebersihan. (…) makanan kepada pelanggan, kami memperhatikan pengelolaan kebersihan lebih dari apa pun.\"",
      optYomi: ["お{出|だ}しになる{以上|いじょう}", "お{出|だ}しになるうえ", "お{出|だ}しする{以上|いじょう}", "お{出|だ}しするうえ"],
      optArti: ["karena (Anda, hormat) menyajikan", "selain (Anda, hormat) menyajikan", "karena kami (merendah) menyajikan", "selain kami (merendah) menyajikan"],
    },
    32: {
      yomi: "{留学|りゅうがく}するまで、{私|わたし}は{自分|じぶん}が{見|み}ている{世界|せかい}がすべてだと{思|おも}っていた。{実|じつ}はそれが{世界|せかい}のほんの{小|ちい}さな{一部分|いちぶぶん}（　）{気付|きづ}いていなかった。",
      arti: "Sampai saya belajar ke luar negeri, saya mengira dunia yang saya lihat adalah segalanya. Saya tidak menyadari (…) sebenarnya itu tidak lebih dari sebagian kecil dunia.",
      optArti: ["hanya pada hal yang bukan", "bahwa itu tidak lebih dari", "hanya dengan hal yang tidak ada", "dengan hal yang hanya ada pada"],
    },
    33: {
      yomi: "（パソコンを{使|つか}いながら）A「ねえ、この{前|まえ}{教|おし}えた{計算|けいさん}{機能|きのう}、{使|つか}ってみた？」B「うん。{今|いま}まであんなに{時間|じかん}をかけてたのが（　）{簡単|かんたん}に{計算|けいさん}できたよ。」A「でしょ。パソコンのことならまかせてよ。」",
      arti: "(Sambil memakai komputer) A: \"Hei, fitur hitung yang kuajarkan kemarin sudah kamu coba?\" B: \"Iya. Bisa menghitung dengan mudah sampai (…) betapa lamanya aku selama ini.\" A: \"Kan? Urusan komputer serahkan padaku.\"",
      optYomi: ["ばかばかしい{思|おも}いをするもので", "ばかばかしく{思|おも}えるもので", "ばかばかしい{思|おも}いをするくらい", "ばかばかしく{思|おも}えるくらい"],
      optArti: ["karena memang (wajar) merasa konyol", "karena memang terasa konyol", "sampai mengalami perasaan konyol", "sampai terasa konyol"],
    },
    34: {
      yomi: "（{電話|でんわ}で）{山中|やまなか}「あ、{木村|きむら}{先生|せんせい}でいらっしゃいますか。AB{出版|しゅっぱん}の{山中|やまなか}でございますが、{今|いま}から{原稿|げんこう}をいただきに{上|あ}がってもよろしいでしょうか。」{木村|きむら}「すみません。まだできていないんです。あと3{日|か}（　）。」",
      arti: "(Di telepon) Yamanaka: \"Ah, apakah ini Kimura-sensei? Saya Yamanaka dari Penerbit AB; bolehkah saya datang sekarang untuk mengambil naskah?\" Kimura: \"Maaf. Belum selesai. (…) 3 hari lagi?\"",
      optYomi: ["{待|ま}っておいてになります", "お{待|ま}ち{申|もう}し{上|あ}げております", "{待|ま}たせていただくことにしましょうか", "{待|ま}っていただくわけにはいきませんか"],
      optArti: ["(bentuk tidak tepat)", "saya (merendah) menunggu Anda", "bagaimana kalau saya yang menunggu?", "bisakah Anda menunggu?"],
    },
    35: {
      yomi: "（{宇宙|うちゅう}{飛行士|ひこうし}　{山田|やまだ}{太郎|たろう}さんへのインタビューで）{山田|やまだ}「{実|じつ}は、{初|はじ}めから{宇宙|うちゅう}{飛行士|ひこうし}になる（　）、そうじゃないんです。{大学|だいがく}を{出|で}たら、{医者|いしゃ}になろうと{思|おも}っていましたから。」{記者|きしゃ}「では、{何|なに}がきっかけで、{宇宙|うちゅう}{飛行士|ひこうし}になりたいと{思|おも}ったんですか。」",
      arti: "(Wawancara dengan astronaut Yamada Tarō) Yamada: \"Sebenarnya, (…) menjadi astronaut sejak awal, tidak begitu. Sebab setelah lulus kuliah, saya berniat menjadi dokter.\" Wartawan: \"Lalu, apa yang membuat Anda ingin menjadi astronaut?\"",
      optArti: ["kalau ditanya apakah memang berniat", "kalau ditanya 'apakah kamu berniat'", "kalau ditanya 'bukankah kamu tidak berniat'", "kalau dibilang 'apakah tidak ada niat'"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{大学|だいがく}{入試|にゅうし}では、{試験|しけん}{当日|とうじつ}{初|はじ}めてその{大学|だいがく}に{行|い}き、{迷|まよ}ってしまった＿＿ ＿＿ ★ ＿＿{事前|じぜん}に{見学|けんがく}しておくとよい。",
      arti: "Dalam ujian masuk universitas, agar tidak terjadi hal seperti baru pertama kali datang ke kampus pada hari ujian lalu tersesat, sebaiknya meninjau lokasinya terlebih dahulu.",
      optArti: ["tidak ada", "yang disebut (hal seperti)", "agar", "hal (yang)"],
    },
    37: {
      yomi: "{趣味|しゅみ}を{持|も}つのは{良|よ}いことだと{思|おも}いますが、{家庭|かてい}を{犠牲|ぎせい}＿＿ ＿＿ ★ ＿＿、それはちょっと{問題|もんだい}です。",
      arti: "Saya pikir punya hobi itu baik, tetapi kalau sudah sampai mengorbankan keluarga, itu agak bermasalah.",
      optArti: ["menjadi", "sampai", "kalau (と)", "dengan (menjadikan)"],
    },
    38: {
      yomi: "{管理職|かんりしょく}になったら、たとえ＿＿ ＿＿ ★ ＿＿{部下|ぶか}の{失敗|しっぱい}も{引|ひ}き{受|う}けるというくらいの{覚悟|かくご}がなくてはならない。",
      arti: "Jika menjadi manajer, harus punya tekad untuk menanggung kesalahan bawahan sebagai tanggung jawab sendiri, meskipun dirinya sendiri tidak bersalah.",
      optYomi: [null, null, "{自分|じぶん}には{責任|せきにん}", "{自分|じぶん}の{責任|せきにん}"],
      optArti: ["dengan menganggap sebagai", "meskipun tidak ada", "pada diri sendiri tanggung jawab", "tanggung jawab sendiri"],
    },
    39: {
      yomi: "＿＿ ＿＿ ★ ＿＿{小|ちい}さな{町|まち}{工場|こうば}だった。",
      arti: "Perusahaan kami, yang sekarang memang disebut perusahaan kelas satu, awalnya hanyalah pabrik kecil di kota.",
      optYomi: [null, "{我|わ}が{社|しゃ}だが", "{今|いま}でこそ", "{一流|いちりゅう}{企業|きぎょう}と{言|い}われる"],
      optArti: ["pada awalnya", "perusahaan kami, tetapi", "sekarang memang", "yang disebut perusahaan kelas satu"],
    },
    40: {
      yomi: "{新|しん}{番組|ばんぐみ}でこれまでにない{役柄|やくがら}を{演|えん}じる{俳優|はいゆう}の{上田|うえだ}{秋|しゅう}さん。{役作|やくづく}りに{悩|なや}んでいる＿＿ ＿＿ ★ ＿＿という。",
      arti: "Aktor Ueda Shū yang memerankan karakter yang belum pernah ia mainkan dalam acara baru. Dikira ia sedang bingung membangun perannya, ternyata katanya tidak juga.",
      optYomi: [null, null, "{思|おも}いきや", null],
      optArti: ["(kutipan) と", "ternyata tidak juga", "dikira ... (ternyata)", "apakah ... (の か)"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{入|はい}るにいい", "{入|はい}るのがいいのか", "{入|はい}るのはいい", "{入|はい}るのでいいのか"],
      optArti: ["bagus untuk masuk", "apakah bagus kalau masuk?", "masuk sih tidak apa-apa", "apakah boleh karena masuk?"],
    },
    42: {
      optArti: ["saya berniat berhenti", "saya ingin itu dihentikan", "apakah akan berhenti?", "tidak bisa dihentikan"],
    },
    43: {
      optArti: ["a: memang / b: kalaupun begitu", "a: sebenarnya / b: apakah?", "a: meskipun begitu / b: bukan berarti", "a: memang benar / b: tidak salah lagi"],
    },
    44: {
      optYomi: ["{見|み}させてしまう", "{身|み}を{乗|の}り{出|だ}させる", "{見|み}られてしまう", "{身|み}を{乗|の}り{出|だ}される"],
      optArti: ["memaksa (orang) menonton", "membuat (orang) mencondongkan badan", "terlanjur ditonton", "dicondongi badan"],
    },
    45: {
      optYomi: [null, "a{広告主|こうこくぬし} / bみんな", "a{広告主|こうこくぬし} / bぼくも", "aぼく / b{広告主|こうこくぬし}も"],
      optArti: ["a: saya / b: semua orang", "a: pengiklan / b: semua orang", "a: pengiklan / b: saya juga", "a: saya / b: pengiklan juga"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{食事|しょくじ}のたびに{食器|しょっき}を{眺|なが}めることで、{陶芸品|とうげいひん}への{愛着|あいちゃく}が{強|つよ}まる。",
        "{日常|にちじょう}{使|つか}う{食器|しょっき}に{注意|ちゅうい}を{向|む}けることで、{陶芸品|とうげいひん}への{関心|かんしん}が{高|たか}まる。",
        "{食器|しょっき}を{通|とお}して{陶芸品|とうげいひん}に{興味|きょうみ}を{持|も}つことで、{芸術|げいじゅつ}{全般|ぜんぱん}への{関心|かんしん}が{高|たか}まる。",
        "{家庭|かてい}にいろいろ{食器|しょっき}を{取|と}り{入|い}れることで、{陶芸品|とうげいひん}への{愛着|あいちゃく}が{強|つよ}まる。",
      ],
      optArti: [
        "Dengan memandangi peralatan makan setiap kali makan, rasa sayang pada keramik menguat.",
        "Dengan memperhatikan peralatan makan sehari-hari, minat pada keramik meningkat.",
        "Dengan tertarik pada keramik lewat peralatan makan, minat pada seni secara umum meningkat.",
        "Dengan menghadirkan berbagai peralatan makan di rumah, rasa sayang pada keramik menguat.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}は、{弱者|じゃくしゃ}をどのようにとらえているか。",
      arti: "Bagaimana penulis memandang pihak yang lemah?",
      optYomi: [
        "{弱者|じゃくしゃ}は{正直|しょうじき}であることで{自|みずか}らの{尊厳|そんげん}を{守|まも}ろうとする。",
        "{弱者|じゃくしゃ}は{理性|りせい}を{持|も}って{自|みずか}らの{過|あやま}ちをわびようとする。",
        "{弱者|じゃくしゃ}は{正論|せいろん}に{頼|たよ}って{劣勢|れっせい}を{解消|かいしょう}しようとする。",
        "{弱者|じゃくしゃ}は{謝罪|しゃざい}することで{自|みずか}らを{守|まも}ろうとする。",
      ],
      optArti: [
        "Pihak lemah berusaha menjaga martabatnya dengan bersikap jujur.",
        "Pihak lemah berusaha meminta maaf atas kesalahannya dengan akal sehat.",
        "Pihak lemah berusaha mengatasi posisi lemahnya dengan berpegang pada argumen yang benar.",
        "Pihak lemah berusaha melindungi dirinya dengan meminta maaf.",
      ],
    },
    48: {
      yomi: "タイヤの{出荷|しゅっか}{価格|かかく}について、この{文章|ぶんしょう}は{何|なに}を{知|し}らせているか。",
      arti: "Mengenai harga pengiriman ban, apa yang diberitahukan pengumuman ini?",
      optYomi: [
        "すべてのタイヤの{価格|かかく}{改定|かいてい}を3{月|がつ}、4{月|がつ}に{続|つづ}き、9{月|がつ}にも{行|おこな}う。",
        "{夏用|なつよう}タイヤ、{冬用|ふゆよう}タイヤの{両方|りょうほう}の{価格|かかく}を、さらに2{回|かい}{改定|かいてい}する。",
        "{春|はる}に{改定|かいてい}しなかった{一般|いっぱん}{車両|しゃりょう}{用|よう}のタイヤ{価格|かかく}{等|とう}も{含|ふく}め、9{月|がつ}に{改定|かいてい}を{行|おこな}う。",
        "{特殊|とくしゅ}{車両|しゃりょう}{用|よう}のタイヤに{続|つづ}き、9{月|がつ}からそれ{以外|いがい}のタイヤの{価格|かかく}も{改定|かいてい}する。",
      ],
      optArti: [
        "Harga semua ban direvisi lagi pada bulan September, menyusul Maret dan April.",
        "Harga ban musim panas dan ban musim dingin akan direvisi dua kali lagi.",
        "Revisi dilakukan pada September, termasuk harga ban kendaraan umum yang tidak direvisi pada musim semi.",
        "Menyusul ban kendaraan khusus, mulai September harga ban selain itu juga direvisi.",
      ],
    },
    49: {
      yomi: "{筆者|ひっしゃ}は、{思春期|ししゅんき}を{迎|むか}える{前|まえ}の{子|こ}どもにとってどんな{経験|けいけん}が{必要|ひつよう}だと{考|かんが}えているか。",
      arti: "Menurut penulis, pengalaman seperti apa yang diperlukan anak sebelum memasuki masa puber?",
      optYomi: [
        "{家庭|かてい}の{外|そと}の{社会|しゃかい}で{多|おお}くの{社会|しゃかい}{問題|もんだい}に{取|と}り{組|く}む{経験|けいけん}",
        "{日々|ひび}の{生活|せいかつ}の{場|ば}で{自分|じぶん}{自身|じしん}と{向|む}き{合|あ}うような{経験|けいけん}",
        "{広|ひろ}い{社会|しゃかい}の{中|なか}で{自分|じぶん}を{鍛|きた}えることができるような{経験|けいけん}",
        "{日常|にちじょう}{生活|せいかつ}の{中|なか}で{個人|こじん}の{発達|はったつ}{段階|だんかい}に{応|おう}じた{役割|やくわり}を{担|にな}う{経験|けいけん}",
      ],
      optArti: [
        "Pengalaman menangani banyak masalah sosial di masyarakat luar rumah",
        "Pengalaman menghadapi diri sendiri dalam kehidupan sehari-hari",
        "Pengalaman yang bisa menempa diri di tengah masyarakat yang luas",
        "Pengalaman memikul peran sesuai tahap perkembangan pribadi dalam kehidupan sehari-hari",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{筆者|ひっしゃ}は、{自分|じぶん}が{笑|わら}われた{原因|げんいん}はどこにあると{考|かんが}えているか。",
      arti: "Menurut penulis, apa penyebab ia ditertawakan?",
      optYomi: [
        "{科学者|かがくしゃ}らしくない{趣|おもむき}のある{表現|ひょうげん}で{桜|さくら}の{花|はな}を{褒|ほ}めた{点|てん}",
        "{自分|じぶん}が{桜|さくら}の{美|うつく}しさを{理解|りかい}できていなかった{点|てん}",
        "{桜|さくら}の{花|はな}は{自分|じぶん}が{述|の}べた{形|かたち}をしていなかった{点|てん}",
        "{桜|さくら}の{美|うつく}しさを{科学者|かがくしゃ}{的|てき}な{視点|してん}から{表現|ひょうげん}した{点|てん}",
      ],
      optArti: [
        "Karena memuji bunga sakura dengan ungkapan puitis yang tidak seperti ilmuwan",
        "Karena ia sendiri tidak memahami keindahan sakura",
        "Karena bunga sakura tidak berbentuk seperti yang ia katakan",
        "Karena ia mengungkapkan keindahan sakura dari sudut pandang ilmuwan",
      ],
    },
    51: {
      yomi: "ここでの{理想化|りそうか}とは{何|なに}か。",
      arti: "Apa yang dimaksud \"idealisasi\" di sini?",
      optYomi: [
        "{桜|さくら}の{花|はな}はどれも{正五角形|せいごかっけい}であるとみなすこと",
        "{桜|さくら}の{花|はな}には{共通|きょうつう}する{特徴|とくちょう}があるとみなすこと",
        "{桜|さくら}の{花|はな}には{数学的|すうがくてき}な{美|うつく}しさがあると{考|かんが}えること",
        "{桜|さくら}の{花|はな}は{他|ほか}のどの{花|はな}よりも{正五角形|せいごかっけい}に{近|ちか}いと{考|かんが}えること",
      ],
      optArti: [
        "Menganggap semua bunga sakura berbentuk segi lima beraturan",
        "Menganggap bunga sakura memiliki ciri yang sama",
        "Berpikir bahwa bunga sakura memiliki keindahan matematis",
        "Berpikir bahwa bunga sakura lebih mendekati segi lima beraturan daripada bunga lain mana pun",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えによると、{花|はな}の{場合|ばあい}、{抽象化|ちゅうしょうか}と{理想化|りそうか}によって{何|なに}が{期待|きたい}されるか。",
      arti: "Menurut penulis, dalam kasus bunga, apa yang diharapkan dari abstraksi dan idealisasi?",
      optYomi: [
        "{花|はな}には{品種|ひんしゅ}を{越|こ}えた{共通点|きょうつうてん}があることが{明|あき}らかになること",
        "{自然界|しぜんかい}に{咲|さ}いている{花|はな}の{美|うつく}しさに{普遍性|ふへんせい}が{見|み}いだされること",
        "{花|はな}の{形|かたち}がどのように{決|き}まるのかその{仕組|しく}みが{解明|かいめい}されること",
        "{花|はな}の{形|かたち}の{対称性|たいしょうせい}が{遺伝子|いでんし}によるものであることが{証明|しょうめい}されること",
      ],
      optArti: [
        "Terungkap bahwa bunga memiliki kesamaan yang melampaui jenisnya",
        "Ditemukan sifat universal pada keindahan bunga yang mekar di alam",
        "Terungkap mekanisme bagaimana bentuk bunga ditentukan",
        "Terbukti bahwa simetri bentuk bunga disebabkan oleh gen",
      ],
    },
    53: {
      yomi: "{世間|せけん}{一般|いっぱん}の{価値|かち}{基準|きじゅん}として{筆者|ひっしゃ}が{本文|ほんぶん}であげているのは{何|なに}か。",
      arti: "Apa yang disebut penulis dalam teks sebagai standar nilai masyarakat umum?",
      optYomi: [
        "{長期|ちょうき}にわたって{居住|きょじゅう}できる{物件|ぶっけん}であること",
        "{将来|しょうらい}{売却|ばいきゃく}するときにも{有利|ゆうり}な{物件|ぶっけん}であること",
        "{購入者|こうにゅうしゃ}の{生活|せいかつ}{様式|ようしき}に{合|あ}った{物件|ぶっけん}であること",
        "{購入|こうにゅう}{時|じ}の{費用|ひよう}{負担|ふたん}が{抑|おさ}えられる{物件|ぶっけん}であること",
      ],
      optArti: [
        "Properti yang bisa ditinggali dalam jangka panjang",
        "Properti yang menguntungkan juga saat dijual di masa depan",
        "Properti yang sesuai dengan gaya hidup pembeli",
        "Properti yang biaya pembeliannya bisa ditekan",
      ],
    },
    54: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えでは、{年|とし}を{取|と}ってから{住|す}む{家|いえ}として{住居|じゅうきょ}を{選|えら}ぶときに{最|もっと}も{大切|たいせつ}なことは{何|なに}か。",
      arti: "Menurut penulis, apa yang paling penting saat memilih rumah untuk ditinggali di hari tua?",
      optYomi: [
        "{老後|ろうご}の{生|い}き{方|かた}や{行動|こうどう}{範囲|はんい}に{沿|そ}っているかを{判断|はんだん}する。",
        "{老後|ろうご}は{行動|こうどう}する{能力|のうりょく}が{衰|おとろ}えるため{家|いえ}の{構造|こうぞう}を{優先|ゆうせん}する。",
        "{未来|みらい}の{予測|よそく}に{沿|そ}って{決|き}めた{予算|よさん}と{同|おな}じくらいのものを{選|えら}ぶ。",
        "いつか{売|う}るときのことも{考|かんが}えて{資産的|しさんてき}な{価値|かち}を{重視|じゅうし}する。",
      ],
      optArti: [
        "Menilai apakah rumah itu sesuai dengan cara hidup dan jangkauan gerak di hari tua.",
        "Mengutamakan struktur rumah karena kemampuan bergerak menurun di hari tua.",
        "Memilih yang harganya kurang lebih sama dengan anggaran yang ditentukan berdasarkan perkiraan masa depan.",
        "Mengutamakan nilai aset dengan memikirkan saat suatu hari menjualnya.",
      ],
    },
    55: {
      yomi: "{住居|じゅうきょ}{選|えら}びについて、{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Tentang memilih rumah, apa yang paling ingin disampaikan penulis?",
      optYomi: [
        "{人|ひと}が{生活|せいかつ}する{上|うえ}でどんな{住居|じゅうきょ}に{住|す}むかはとても{大切|たいせつ}であり、{一般的|いっぱんてき}な{価値|かち}{基準|きじゅん}も{参考|さんこう}にしたほうがよい。",
        "{他人|たにん}と{考|かんが}え{方|かた}が{異|こと}なったとしても、{自分|じぶん}の{生活|せいかつ}スタイルを{重視|じゅうし}して{将来|しょうらい}の{住居|じゅうきょ}を{決定|けってい}したほうがよい。",
        "{将来|しょうらい}の{経済|けいざい}{情勢|じょうせい}の{変化|へんか}に{備|そな}えて、できるだけ{資産|しさん}{価値|かち}の{下|さ}がりにくそうな{住居|じゅうきょ}を{選|えら}んだほうがよい。",
        "{年|とし}を{取|と}るにつれて{住居|じゅうきょ}の{好|この}みも{変|か}わってくるため、その{時々|ときどき}の{考|かんが}えに{合|あ}わせて{住居|じゅうきょ}を{選択|せんたく}したほうがよい。",
      ],
      optArti: [
        "Rumah seperti apa yang ditinggali sangat penting dalam hidup, jadi sebaiknya standar nilai umum juga dijadikan acuan.",
        "Meski cara berpikir berbeda dengan orang lain, sebaiknya rumah masa depan ditentukan dengan mengutamakan gaya hidup sendiri.",
        "Untuk menghadapi perubahan kondisi ekonomi di masa depan, sebaiknya memilih rumah yang nilai asetnya tampak sulit turun.",
        "Karena selera rumah berubah seiring usia, sebaiknya rumah dipilih sesuai pemikiran pada saat itu.",
      ],
    },
    56: {
      yomi: "①そういう{宿命|しゅくめい}とはどういう{意味|いみ}か。",
      arti: "Apa arti \"① takdir semacam itu\"?",
      optYomi: [
        "{現代|げんだい}の{人々|ひとびと}は{考|かんが}えが{時代|じだい}や{環境|かんきょう}に{歪|ゆが}められ、「{世界|せかい}」の{見方|みかた}が{定|さだ}まらない。",
        "{現代|げんだい}の{人々|ひとびと}は{時代|じだい}や{環境|かんきょう}の{制約|せいやく}を{受|う}けており、「{世界|せかい}」が{正|ただ}しく{見|み}えないこともある。",
        "{人間|にんげん}はものの{見方|みかた}が{時代|じだい}や{環境|かんきょう}に{縛|しば}られ、「{世界|せかい}」が{正|ただ}しく{見|み}えないこともある。",
        "{人間|にんげん}は{生|い}き{方|かた}が{時代|じだい}や{環境|かんきょう}に{大|おお}きく{影響|えいきょう}を{受|う}け、「{世界|せかい}」の{見方|みかた}が{定|さだ}まらない。",
      ],
      optArti: [
        "Pikiran orang masa kini didistorsi zaman dan lingkungan, sehingga cara memandang \"dunia\" tidak menentu.",
        "Orang masa kini dibatasi zaman dan lingkungan, sehingga kadang tidak bisa melihat \"dunia\" dengan benar.",
        "Cara pandang manusia terikat oleh zaman dan lingkungan, sehingga kadang tidak bisa melihat \"dunia\" dengan benar.",
        "Cara hidup manusia sangat dipengaruhi zaman dan lingkungan, sehingga cara memandang \"dunia\" tidak menentu.",
      ],
    },
    57: {
      yomi: "②「{世界|せかい}を{知|し}る」ことがますます{困難|こんなん}になったのはなぜか。",
      arti: "Mengapa \"② mengenal dunia\" menjadi semakin sulit?",
      optYomi: [
        "{個人|こじん}の{世界|せかい}{認識|にんしき}が{狭|せば}まり、{実世界|じつせかい}の{時代|じだい}の{変化|へんか}をつかみにくいから",
        "{個人|こじん}の{世界|せかい}{認識|にんしき}が{固|かた}まらず、{実世界|じつせかい}の{情報|じょうほう}に{惑|まど}わされてしまうから",
        "{個人|こじん}の{世界|せかい}{認識|にんしき}が、{実世界|じつせかい}のめまぐるしい{変化|へんか}や{情報量|じょうほうりょう}に{対応|たいおう}できないから",
        "{個人|こじん}の{世界|せかい}{認識|にんしき}が、{高度|こうど}に{発達|はったつ}している{実世界|じつせかい}の{情報|じょうほう}{環境|かんきょう}に{追|お}いつけないから",
      ],
      optArti: [
        "Karena pemahaman dunia tiap orang menyempit, sehingga sulit menangkap perubahan zaman di dunia nyata",
        "Karena pemahaman dunia tiap orang tidak mantap, sehingga terombang-ambing informasi dunia nyata",
        "Karena pemahaman dunia tiap orang tidak mampu mengikuti perubahan yang begitu cepat dan banyaknya informasi di dunia nyata",
        "Karena pemahaman dunia tiap orang tidak bisa mengejar lingkungan informasi dunia nyata yang sangat maju",
      ],
    },
    58: {
      yomi: "{筆者|ひっしゃ}は、「{世界|せかい}を{知|し}る{力|ちから}」を{高|たか}めるためにできることは{何|なに}だと{考|かんが}えているか。",
      arti: "Menurut penulis, apa yang bisa dilakukan untuk meningkatkan \"kemampuan mengenal dunia\"?",
      optYomi: [
        "{今|いま}までの{世界|せかい}{認識|にんしき}を{改|あらた}め、できるだけ{多|おお}くの{情報|じょうほう}を{得|え}ること",
        "{時代|じだい}や{環境|かんきょう}の{制約|せいやく}を{克服|こくふく}して、{自分|じぶん}の{世界|せかい}{認識|にんしき}の{限界|げんかい}を{超|こ}えること",
        "{情報|じょうほう}の{激流|げきりゅう}に{呑|の}み{込|こ}まれず、{自分|じぶん}の{世界|せかい}{認識|にんしき}の{枠|わく}から{自由|じゆう}になること",
        "{自分|じぶん}の{世界|せかい}{認識|にんしき}にできるだけ{柔軟性|じゅうなんせい}を{持|も}たせ、その{範囲|はんい}を{自覚|じかく}すること",
      ],
      optArti: [
        "Memperbaiki pemahaman dunia selama ini dan mendapatkan informasi sebanyak mungkin",
        "Mengatasi batasan zaman dan lingkungan, lalu melampaui batas pemahaman dunia sendiri",
        "Tidak tertelan derasnya arus informasi, dan terbebas dari kerangka pemahaman dunia sendiri",
        "Membuat pemahaman dunia sendiri seluwes mungkin dan menyadari batas cakupannya",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "①そんな{錯覚|さっかく}に{捕|と}らえられるとはどういう{意味|いみ}か。",
      arti: "Apa arti \"① terjebak ilusi semacam itu\"?",
      optYomi: [
        "{自分|じぶん}は{何|なん}でも{知|し}っていて{世界|せかい}を{相手|あいて}にできると{思|おも}う。",
        "{言葉|ことば}でどんなことでも{伝|つた}えられるような{気|き}になる。",
        "{学問|がくもん}から{得|え}られることには{限界|げんかい}がないと{感|かん}じてしまう。",
        "{人間|にんげん}が{世界|せかい}から{学|まな}べることはいかに{大|おお}きいことかと{思|おも}う。",
      ],
      optArti: [
        "Merasa diri tahu segalanya dan bisa menghadapi seluruh dunia.",
        "Merasa bisa menyampaikan apa pun dengan kata-kata.",
        "Merasa bahwa apa yang bisa diperoleh dari ilmu tidak ada batasnya.",
        "Berpikir betapa besarnya hal yang bisa dipelajari manusia dari dunia.",
      ],
    },
    60: {
      yomi: "②これとは{何|なに}を{指|さ}すか。",
      arti: "\"② Hal ini\" merujuk pada apa?",
      optYomi: [
        "{自分|じぶん}にできることを{把握|はあく}したうえで{仕事|しごと}をすること",
        "{自分|じぶん}が{世界|せかい}のために{何|なに}ができるかを{考|かんが}えて{仕事|しごと}に{励|はげ}むこと",
        "できる{限|かぎ}り{多|おお}くの{知識|ちしき}を{得|え}て{自分|じぶん}の{仕事|しごと}に{役立|やくだ}たせること",
        "{人|ひと}のためにできることは{何|なに}かを{考|かんが}えたうえで{仕事|しごと}をすること",
      ],
      optArti: [
        "Bekerja setelah memahami apa yang bisa dilakukan diri sendiri",
        "Giat bekerja sambil memikirkan apa yang bisa dilakukan diri sendiri untuk dunia",
        "Memperoleh pengetahuan sebanyak mungkin dan memanfaatkannya untuk pekerjaan sendiri",
        "Bekerja setelah memikirkan apa yang bisa dilakukan untuk orang lain",
      ],
    },
    61: {
      yomi: "この{文章|ぶんしょう}では、{学問|がくもん}をするということをどのような{例|れい}を{使|つか}って{説明|せつめい}しているか。",
      arti: "Dalam tulisan ini, contoh apa yang dipakai untuk menjelaskan kegiatan menuntut ilmu?",
      optYomi: [
        "{与|あた}えられた{土|つち}を{耕|たがや}し、よい{苗|なえ}を{選|えら}んで{植|う}える。",
        "{与|あた}えられた{土|つち}を{耕|たがや}し、よい{作物|さくもつ}になるように{苗|なえ}を{育|そだ}てる。",
        "{与|あた}えられた{土壌|どじょう}を{改善|かいぜん}するために{耕|たがや}し{続|つづ}ける。",
        "{与|あた}えられた{土壌|どじょう}を{改善|かいぜん}しながら{世界|せかい}{標準|ひょうじゅん}の{作物|さくもつ}を{育|そだ}てる。",
      ],
      optArti: [
        "Mengolah tanah yang diberikan, lalu memilih dan menanam bibit yang baik.",
        "Mengolah tanah yang diberikan, lalu merawat bibit agar menjadi tanaman yang baik.",
        "Terus mengolah tanah yang diberikan untuk memperbaikinya.",
        "Menanam tanaman berstandar dunia sambil memperbaiki tanah yang diberikan.",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}は「{教養|きょうよう}」をどのようなものだと{考|かんが}えているか。",
      arti: "Menurut penulis, \"budi pekerti/keterpelajaran\" itu seperti apa?",
      optYomi: [
        "{新|あら}たな{気質|きしつ}を{見|み}いだすことができる{学問|がくもん}や{思想|しそう}",
        "{人|ひと}それぞれの{気質|きしつ}の{中|なか}で{育|そだ}てられた{学問|がくもん}や{思想|しそう}",
        "{生|い}きていくうえで{必要|ひつよう}な{専門的|せんもんてき}な{知識|ちしき}",
        "{書物|しょもつ}や{学問|がくもん}から{得|え}られた{多|おお}くの{知識|ちしき}",
      ],
      optArti: [
        "Ilmu dan pemikiran yang memungkinkan menemukan watak baru",
        "Ilmu dan pemikiran yang tumbuh dalam watak masing-masing orang",
        "Pengetahuan khusus yang diperlukan untuk hidup",
        "Banyak pengetahuan yang diperoleh dari buku dan ilmu",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{子|こ}どもにテレビを{長時間|ちょうじかん}{見|み}せることについて、AとBの{観点|かんてん}はどのようなものか。",
      arti: "Tentang membiarkan anak menonton TV dalam waktu lama, bagaimana sudut pandang A dan B?",
      optYomi: [
        "Aは{問題|もんだい}{解決|かいけつ}を{意識|いしき}した{今後|こんご}の{課題|かだい}を{述|の}べ、Bは{批判的|ひはんてき}に{現状|げんじょう}を{報告|ほうこく}している。",
        "Aは{解決|かいけつ}を{意識|いしき}した{問題|もんだい}{提起|ていき}をし、Bは{問題|もんだい}の{原因|げんいん}は{社会的|しゃかいてき}{背景|はいけい}にあると{指摘|してき}している。",
        "Aは{影響|えいきょう}の{大|おお}きさを{示|しめ}して{注意|ちゅうい}を{喚起|かんき}し、Bは{問題|もんだい}{解決|かいけつ}を{意識|いしき}した{今後|こんご}の{課題|かだい}を{述|の}べている。",
        "Aは{問題|もんだい}の{原因|げんいん}は{社会的|しゃかいてき}{背景|はいけい}にあると{指摘|してき}し、Bは{影響|えいきょう}の{大|おお}きさを{示|しめ}して{注意|ちゅうい}を{喚起|かんき}している。",
      ],
      optArti: [
        "A menyampaikan tugas ke depan dengan memikirkan penyelesaian masalah; B melaporkan keadaan saat ini secara kritis.",
        "A mengangkat masalah dengan memikirkan penyelesaiannya; B menunjukkan bahwa penyebab masalah ada pada latar belakang sosial.",
        "A menunjukkan besarnya dampak untuk membangkitkan kewaspadaan; B menyampaikan tugas ke depan dengan memikirkan penyelesaian masalah.",
        "A menunjukkan bahwa penyebab masalah ada pada latar belakang sosial; B menunjukkan besarnya dampak untuk membangkitkan kewaspadaan.",
      ],
    },
    64: {
      yomi: "{子|こ}どもとテレビの{関係|かんけい}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana A dan B menjelaskan hubungan anak dan televisi?",
      optYomi: [
        "Aはメディアとの{接触|せっしょく}より{親子|おやこ}のかかわりが{大切|たいせつ}だと{述|の}べ、Bはテレビを{見|み}せるよりも{外|そと}での{遊|あそ}びを{重視|じゅうし}したほうがいいと{述|の}べている。",
        "Aはメディアとの{接触|せっしょく}が{子|こ}どもの{発育|はついく}を{妨|さまた}げる{要因|よういん}だと{述|の}べ、Bは{子育|こそだ}てを{取|と}り{巻|ま}く{状況|じょうきょう}がテレビの{見|み}せ{過|す}ぎを{引|ひ}き{起|お}こす{場合|ばあい}があると{述|の}べている。",
        "Aはメディアとの{接触|せっしょく}が{長|なが}いことよりも{実体験|じったいけん}の{不足|ふそく}のほうが{問題|もんだい}だと{述|の}べ、Bは{生活|せいかつ}の{中|なか}からテレビを{排除|はいじょ}しただけでは{問題|もんだい}は{解決|かいけつ}しないと{述|の}べている。",
        "Aはメディアに{長時間|ちょうじかん}{接触|せっしょく}することが{子|こ}どもの{成長|せいちょう}に{影響|えいきょう}を{与|あた}える{場合|ばあい}が{多|おお}いと{述|の}べ、Bは{親|おや}が{子|こ}どもに{適切|てきせつ}にテレビを{見|み}せることが{大切|たいせつ}だと{述|の}べている。",
      ],
      optArti: [
        "A menyatakan hubungan orang tua-anak lebih penting daripada kontak dengan media; B menyatakan sebaiknya bermain di luar lebih diutamakan daripada menonton TV.",
        "A menyatakan kontak dengan media adalah faktor yang menghambat tumbuh kembang anak; B menyatakan bahwa kondisi seputar pengasuhan anak kadang menyebabkan anak terlalu banyak menonton TV.",
        "A menyatakan yang menjadi masalah adalah kurangnya pengalaman nyata, bukan lamanya kontak dengan media; B menyatakan masalah tidak selesai hanya dengan menyingkirkan TV dari kehidupan.",
        "A menyatakan kontak lama dengan media sering memengaruhi pertumbuhan anak; B menyatakan yang penting adalah orang tua memperlihatkan TV kepada anak secara tepat.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "かたちにならないものとして{筆者|ひっしゃ}が{挙|あ}げているのはどれか。",
      arti: "Apa yang disebut penulis sebagai sesuatu yang \"tidak berwujud\"?",
      optYomi: ["{自然|しぜん}", "{生命|せいめい}", "{感謝|かんしゃ}", "{作法|さほう}"],
      optArti: ["alam", "kehidupan", "rasa terima kasih", "tata krama, adab"],
    },
    66: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}は、{自分|じぶん}の{村|むら}に{暮|く}らす{人々|ひとびと}がどんな{思想|しそう}をもっていると{述|の}べているか。",
      arti: "Dalam tulisan ini, pemikiran seperti apa yang menurut penulis dimiliki orang-orang di desanya?",
      optYomi: [
        "{自然|しぜん}の{中|なか}で{生|い}きるための{思想|しそう}や、{農業|のうぎょう}や{村|むら}のあり{方|かた}についての{思想|しそう}",
        "{自然|しぜん}を{壊|こわ}さずに{暮|く}らすために、{農業|のうぎょう}や{村人|むらびと}はどうあるべきかという{思想|しそう}",
        "{自然|しぜん}に{対|たい}する{感謝|かんしゃ}を{表|あらわ}すために、{村人|むらびと}としてどうするべきかという{思想|しそう}",
        "{自然|しぜん}を{取|と}り{戻|もど}すための{思想|しそう}や、{自然|しぜん}を{利用|りよう}する{農業|のうぎょう}のあり{方|かた}についての{思想|しそう}",
      ],
      optArti: [
        "Pemikiran untuk hidup di tengah alam, serta pemikiran tentang pertanian dan bentuk desa",
        "Pemikiran tentang bagaimana seharusnya pertanian dan warga desa agar bisa hidup tanpa merusak alam",
        "Pemikiran tentang apa yang harus dilakukan sebagai warga desa untuk mengungkapkan terima kasih kepada alam",
        "Pemikiran untuk memulihkan alam, serta pemikiran tentang pertanian yang memanfaatkan alam",
      ],
    },
    67: {
      yomi: "{食事|しょくじ}の{作法|さほう}は、どのような{考|かんが}え{方|かた}と{結|むす}びついているか。",
      arti: "Tata krama makan berkaitan dengan cara berpikir seperti apa?",
      optYomi: [
        "{多|おお}くの{労力|ろうりょく}がささげられて{作|つく}られた{食|た}べ{物|もの}が、いかに{尊|とうと}いものであるかという{考|かんが}え{方|かた}",
        "{何|なに}かを{食|た}べないでは{生|い}きてはいけない{人間|にんげん}のあり{方|かた}が、いかに{罪深|つみぶか}いものであるかという{考|かんが}え{方|かた}",
        "{食事|しょくじ}は{農|のう}が{生|う}み{出|だ}したものをいただくものであり、{農業|のうぎょう}を{営|いとな}む{村人|むらびと}への{感謝|かんしゃ}が{必要|ひつよう}だという{考|かんが}え{方|かた}",
        "{食事|しょくじ}は{他|ほか}の{生命|せいめい}を{自分|じぶん}の{身体|しんたい}に{取|と}り{入|い}れるものであり、それらの{生命|せいめい}に{感謝|かんしゃ}しなければならないという{考|かんが}え{方|かた}",
      ],
      optArti: [
        "Pemikiran tentang betapa berharganya makanan yang dibuat dengan mengerahkan banyak tenaga",
        "Pemikiran tentang betapa berdosanya keberadaan manusia yang tidak bisa hidup tanpa memakan sesuatu",
        "Pemikiran bahwa makan berarti menerima hasil pertanian, sehingga perlu berterima kasih kepada warga desa yang bertani",
        "Pemikiran bahwa makan berarti memasukkan kehidupan lain ke dalam tubuh sendiri, sehingga harus berterima kasih kepada kehidupan-kehidupan itu",
      ],
    },
    68: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{述|の}べていることはどれか。",
      arti: "Mana yang dinyatakan penulis dalam tulisan ini?",
      optYomi: [
        "{思想|しそう}の{表現|ひょうげん}は{必|かなら}ずしも{文章|ぶんしょう}や{作品|さくひん}というかたちをとるとは{限|かぎ}らず、かたちにならないものもある。",
        "{思想|しそう}は{絵|え}や{音楽|おんがく}のようなかたちに{表|あら}わされるものと{考|かんが}えられてきたが、{深|ふか}い{思想|しそう}とはかたちにならないものである。",
        "{思想|しそう}の{表現|ひょうげん}には{絵|え}や{音楽|おんがく}などもあるし、かたちにならないものもあるが、{文章|ぶんしょう}で{表現|ひょうげん}されたものが{最上|さいじょう}のものである。",
        "{思想|しそう}は{文章|ぶんしょう}や{作品|さくひん}のようなかたちになったものが{尊重|そんちょう}されるが、{生活|せいかつ}と{結|むす}びついた{深|ふか}い{思想|しそう}はかたちにならないものである。",
      ],
      optArti: [
        "Ungkapan pemikiran tidak selalu berbentuk tulisan atau karya; ada juga yang tidak berwujud.",
        "Pemikiran selama ini dianggap diungkapkan dalam bentuk seperti lukisan atau musik, tetapi pemikiran yang dalam itu tidak berwujud.",
        "Ungkapan pemikiran ada juga berupa lukisan, musik, dan yang tidak berwujud, tetapi yang diungkapkan lewat tulisan adalah yang terbaik.",
        "Pemikiran yang berwujud seperti tulisan atau karya memang dihargai, tetapi pemikiran mendalam yang terkait dengan kehidupan itu tidak berwujud.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{留学生|りゅうがくせい}のリーさんは、{毎週|まいしゅう}3{回|かい}ぐらい{店|みせ}でアルバイトをしたいと{考|かんが}えている。リーさんは{平日|へいじつ}の{午後|ごご}3{時|じ}から9{時|じ}までの{間|あいだ}しか{働|はたら}けないが、{同|おな}じ{時間|じかん}{仕事|しごと}をした{場合|ばあい}、{一番|いちばん}{給料|きゅうりょう}が{多|おお}いのはどの{仕事|しごと}か。",
      arti: "Lee-san, seorang pelajar asing, ingin bekerja paruh waktu di toko sekitar 3 kali seminggu. Ia hanya bisa bekerja pada hari kerja antara pukul 15.00 dan 21.00. Jika bekerja dengan jam yang sama, pekerjaan mana yang gajinya paling besar?",
      optYomi: ["①{中国|ちゅうごく}{料理|りょうり}{店|てん}スタッフ", "②{日本|にほん}そば{屋|や}スタッフ", "③{居酒屋|いざかや}スタッフ", "④コンビニ{店員|てんいん}"],
      optArti: ["① Staf restoran Tiongkok", "② Staf kedai soba Jepang", "③ Staf izakaya (kedai minum)", "④ Pegawai minimarket"],
    },
    70: {
      yomi: "{大学生|だいがくせい}の{山田|やまだ}さんは{夏休|なつやす}みの{旅行|りょこう}の{費用|ひよう}が{少|すこ}し{足|た}りないので、7{月|がつ}に1{日|にち}か2{日|か}だけアルバイトをしたいと{考|かんが}えている。{山田|やまだ}さんが{応募|おうぼ}できる{仕事|しごと}はいくつあるか。",
      arti: "Yamada-san, seorang mahasiswa, uang untuk liburan musim panasnya sedikit kurang, jadi ia ingin bekerja paruh waktu hanya 1 atau 2 hari di bulan Juli. Ada berapa pekerjaan yang bisa ia lamar?",
      optArti: ["1", "2", "3", "4"],
    },
  },

  bacaan: {
    // ── 問題7：広告主の品位 ──
    "7": {
      yomi: `きょうはCMの{中身|なかみ}ではなく、CMの{出|だ}し{方|かた}について、{広告主|こうこくぬし}の{人|ひと}たちにお{願|ねが}いをしたい。

{番組|ばんぐみ}の{途中|とちゅう}にCMが[41]が、モンダイはその{入|はい}り{方|かた}のタイミングだ。たとえば、{歌|うた}やものまねのうまさを{競|きそ}い{合|あ}う{番組|ばんぐみ}の{中|なか}で、いざ、{審査員|しんさいん}の{点数|てんすう}が{出|で}ようとするその{直前|ちょくぜん}に、ポンとCMが{割|わ}って{入|はい}る。あるいは、クイズ{番組|ばんぐみ}の{中|なか}で{正解|せいかい}が{発表|はっぴょう}されようとするその{瞬間|しゅんかん}に、サッと{画面|がめん}がCMに{入|い}れ{替|か}わる。ああいうせこい（{注|ちゅう}1）ことは[42]。

あれは{広告主|こうこくぬし}がやっているわけでなく、{番組|ばんぐみ}を{作|つく}っているテレビ{局|きょく}の{人|ひと}の{考|かんが}えでやっているんだろう。が、それだったら、そういういやらしいCMの{入|い}れ{方|かた}はしないでほしいと、テレビ{局|きょく}の{人|ひと}に{注文|ちゅうもん}をつけてもらいたい。

[43-a]みんながテレビの{前|まえ}で{身|み}を{乗|の}り{出|だ}している{瞬間|しゅんかん}にCMを{入|い}れれば、{見|み}られる[43-b]が、わざわざ{番組|ばんぐみ}の{流|なが}れを{断|た}ち{切|き}り、{視聴者|しちょうしゃ}の{感興|かんきょう}（{注|ちゅう}2）をそいでまで{強引|ごういん}にCMを{見|み}せようとするやり{方|かた}って、さもしくないだろうか。みっともないだろうか。

CMのセンスは、{企業|きぎょう}のセンスのあらわれである。それはCMの{中身|なかみ}だけでなく、CMの{出|だ}し{方|かた}にも{言|い}えることだ。せっかくいいCMを{作|つく}っても、ああいう{出|だ}し{方|かた}をされると、なんと{視聴者|しちょうしゃ}をバカにした{企業|きぎょう}だろうと{思|おも}われてしまう。いやおうなしに[44]ああいうやり{方|かた}は、{極端|きょくたん}に{言|い}えば{暴力|ぼうりょく}みたいなものであって、{消費者|しょうひしゃ}を{大切|たいせつ}に{思|おも}う{企業|きぎょう}のやることじゃない。

{近|ちか}ごろハヤリの{言葉|ことば}で{言|い}えば、これは{企業|きぎょう}の「{品位|ひんい}」にかかわるモンダイである。[45-a]だけじゃない、[45-b]だいぶ{前|まえ}から、「{品|ひん}がねえぞ」と{怒|おこ}ってるよ。

（{注|ちゅう}1）せこい：ずるい
（{注|ちゅう}2）{感興|かんきょう}をそぐ：{何|なに}かについて{持|も}っている{興味|きょうみ}をなくさせる`,
      arti: `Hari ini saya ingin menyampaikan permintaan kepada para pengiklan, bukan tentang isi iklan, melainkan tentang cara menayangkannya.

Iklan [41] di tengah acara, tetapi MASALAHnya adalah waktu masuknya. Misalnya, dalam acara adu kebolehan menyanyi atau menirukan, tepat sebelum nilai juri akan keluar, tiba-tiba iklan menyela. Atau, dalam acara kuis, tepat pada saat jawaban benar akan diumumkan, layar seketika berganti ke iklan. Hal licik (catatan 1) seperti itu [42].

Itu mungkin bukan pengiklan yang melakukannya, melainkan berdasarkan pemikiran orang stasiun TV yang membuat acara. Namun kalau begitu, saya ingin pengiklan menuntut orang stasiun TV agar tidak menayangkan iklan dengan cara yang menjijikkan seperti itu.

[43-a] jika iklan dimasukkan tepat saat semua orang mencondongkan badan di depan TV, iklan itu akan [43-b] ditonton, tetapi bukankah cara memaksakan iklan dengan sengaja memotong alur acara dan merusak keasyikan (catatan 2) penonton itu picik? Bukankah memalukan?

Selera iklan adalah cerminan selera perusahaan. Hal itu berlaku tidak hanya pada isi iklan, tetapi juga pada cara menayangkannya. Meski sudah susah payah membuat iklan bagus, jika ditayangkan seperti itu, perusahaan akan dianggap betapa meremehkan penontonnya. Cara yang [44] tanpa memberi pilihan seperti itu, kalau mau ekstrem, mirip kekerasan, dan bukan hal yang dilakukan perusahaan yang menghargai konsumen.

Kalau memakai kata yang sedang populer belakangan ini, ini adalah MASALAH yang menyangkut "martabat" perusahaan. Bukan hanya [45-a]; [45-b] sudah lama marah, "Nggak punya kelas, nih!"

(Catatan 1) せこい: licik
(Catatan 2) 感興をそぐ: menghilangkan minat yang dimiliki terhadap sesuatu`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{食器|しょっき}のバラエティこそ、{日本|にほん}のやきもの（{注|ちゅう}）の{特色|とくしょく}の{一|ひと}つだと{思|おも}います。そして、{日本人|にほんじん}のやきものに{対|たい}する{思|おも}いとか{愛着|あいちゃく}は、{食器|しょっき}のみならず、{種類|しゅるい}の{豊富|ほうふ}さにあらわれているといってもいいでしょう。

{私|わたし}たちは{食事|しょくじ}のたびに、もちろん{料理|りょうり}も{食|た}べていますが、{知|し}らずに{目|め}で{食器|しょっき}も{食|た}べているのです。だから{興味|きょうみ}・{関心|かんしん}がないというのは、{不注意|ふちゅうい}なだけなのです。すでに{下地|したじ}はできているのですから、あと{一歩|いっぽ}{踏|ふ}みこめば、やきものに{興味|きょうみ}・{関心|かんしん}がグッと{深|ふか}まるはずなのだと{思|おも}います。
（江口渥『やきものの{世界|せかい}』による）
（{注|ちゅう}）やきもの：{陶芸品|とうげいひん}`,
      arti: `Menurut saya, keragaman peralatan makan justru merupakan salah satu ciri khas keramik (catatan) Jepang. Dan bisa dikatakan, perasaan dan kecintaan orang Jepang terhadap keramik tampak tidak hanya pada peralatan makan, tetapi juga pada banyaknya jenis.

Setiap kali makan, tentu kita menyantap masakannya, tetapi tanpa sadar kita juga "menyantap" peralatan makan dengan mata. Jadi, kalau merasa tidak tertarik atau tidak peduli, itu hanya karena kurang memperhatikan. Dasarnya sudah ada, jadi kalau melangkah sedikit lagi, minat dan perhatian pada keramik pasti akan semakin dalam.
(Dari buku "Dunia Keramik")
(Catatan) やきもの: barang keramik`,
    },
    "8-2": {
      yomi: `おとなは{子|こ}どもに「{嘘|うそ}つきは{泥棒|どろぼう}のはじまり」として{正直|しょうじき}であることを{強要|きょうよう}しますが、{弱者|じゃくしゃ}は{苦|くる}しい{嘘|うそ}をついてでも{自|みずか}らの{尊厳|そんげん}を{守|まも}ろうとします。

{論理的|ろんりてき}に{正|ただ}しいことを{理性|りせい}と{呼|よ}ぶとすれば、{理性的|りせいてき}にあることができるのは{強者|きょうしゃ}だからです。{強者|きょうしゃ}はそれゆえに{理性的|りせいてき}に{弱者|じゃくしゃ}の{過|あやま}ちを{責|せ}めようとしますが、{弱者|じゃくしゃ}の{立場|たちば}からいえば、それは{何|なん}の{意味|いみ}も{持|も}たないことが{多|おお}いのです。{弱者|じゃくしゃ}のする{謝罪|しゃざい}とは、{劣勢|れっせい}を{一時的|いちじてき}に{解消|かいしょう}する{手続|てつづ}きや{儀式|ぎしき}にすぎないのです。
（吉田脩二『ヒトとサルのあいだ―{精神|せいしん}はいつ{生|う}まれたのか』による）`,
      arti: `Orang dewasa memaksa anak-anak untuk jujur dengan berkata "pembohong adalah awal dari pencuri", tetapi pihak yang lemah berusaha menjaga martabatnya bahkan dengan kebohongan yang menyakitkan.

Jika hal yang benar secara logis disebut akal sehat (rasio), yang bisa bersikap rasional adalah pihak yang kuat. Karena itu, pihak yang kuat berusaha menyalahkan kesalahan pihak lemah secara rasional, tetapi dari sudut pandang pihak lemah, hal itu sering kali tidak ada artinya. Permintaan maaf yang dilakukan pihak lemah hanyalah prosedur atau ritual untuk sementara menghapus posisinya yang tidak menguntungkan.
(Dari buku tentang antara manusia dan kera: kapan jiwa lahir)`,
    },
    "8-3": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}ホームページに{掲載|けいさい}されたお{知|し}らせである。

{東本|ひがしもと}タイヤ{株式|かぶしき}{会社|がいしゃ}
2011{年|ねん}6{月|がつ}15{日|にち}

タイヤ{価格|かかく}{改定|かいてい}のお{知|し}らせ

{当社|とうしゃ}は{原材料|げんざいりょう}{価格|かかく}の{高騰|こうとう}を{受|う}け、トラック・バス{等|とう}の{特殊|とくしゅ}{車両|しゃりょう}{用|よう}タイヤの{値上|ねあ}げを、{本年|ほんねん}3{月|がつ}（{夏用|なつよう}タイヤ）、および4{月|がつ}（{冬用|ふゆよう}タイヤ）{実施|じっし}{致|いた}しました。

しかし、{原材料|げんざいりょう}のさらなる{価格|かかく}{高騰|こうとう}が{続|つづ}き、{現在|げんざい}の{出荷|しゅっか}{価格|かかく}の{維持|いじ}が{不可能|ふかのう}であると{判断|はんだん}し、{本年|ほんねん}9{月|がつ}1{日|ついたち}より、{一般|いっぱん}{車両|しゃりょう}{用|よう}タイヤを{含|ふく}むすべてのタイヤの{出荷|しゅっか}{価格|かかく}を{改定|かいてい}することと{致|いた}しました。{何卒|なにとぞ}ご{理解|りかい}{頂|いただ}きますようお{願|ねが}い{申|もう}し{上|あ}げます。

{以上|いじょう}`,
      arti: `Berikut ini adalah pengumuman yang dimuat di situs web sebuah perusahaan.

PT Higashimoto Tire
15 Juni 2011

Pemberitahuan Revisi Harga Ban

Menanggapi lonjakan harga bahan baku, perusahaan kami telah menaikkan harga ban untuk kendaraan khusus seperti truk dan bus pada bulan Maret (ban musim panas) dan April (ban musim dingin) tahun ini.

Namun, lonjakan harga bahan baku terus berlanjut, dan kami menilai harga pengiriman saat ini tidak mungkin dipertahankan. Karena itu, mulai 1 September tahun ini, kami memutuskan merevisi harga pengiriman semua ban, termasuk ban untuk kendaraan umum. Kami mohon pengertian Anda.

Sekian`,
    },
    "8-4": {
      yomi: `{思春期|ししゅんき}を{迎|むか}えた{最近|さいきん}の{子|こ}どもがストレスに{弱|よわ}いのは、それまで{発達|はったつ}{過程|かてい}で{適度|てきど}にストレスにさらされる{経験|けいけん}を{十分|じゅうぶん}にへてこなかったことが{深|ふか}く{関係|かんけい}している。しかもそれは、{彼|かれ}らが{社会|しゃかい}{生活|せいかつ}を{十分|じゅうぶん}に{遂|と}げてこなかったことと{等|ひと}しい。というのは、10{代|だい}{前半|ぜんはん}までの{子|こ}どもは、それまでの{生活圏|せいかつけん}を{出|で}てより{広|ひろ}い{社会的|しゃかいてき}{文脈|ぶんみゃく}のなかでいかにして{自己|じこ}を{実現|じつげん}させるかという{課題|かだい}に{取|と}り{組|く}むなかで、もっとも{強|つよ}くストレスを{味|あじ}わうからにほかならない。
（{正高|まさたか}{信男|のぶお}『{父親力|ちちおやりょく}』による）`,
      arti: `Anak-anak masa kini yang memasuki masa puber lemah terhadap stres, dan hal itu sangat berkaitan dengan kurangnya pengalaman terpapar stres secara wajar dalam proses perkembangan sebelumnya. Terlebih lagi, hal itu sama saja dengan mereka belum cukup menjalani kehidupan sosial. Sebab, anak hingga awal usia belasan paling merasakan stres justru ketika keluar dari lingkup hidupnya selama ini dan menghadapi tantangan bagaimana mewujudkan dirinya dalam konteks sosial yang lebih luas.
(Dari buku "Chichioya-ryoku" karya Masataka Nobuo)`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{以前|いぜん}、{花見|はなみ}をしている{時|とき}に「{桜|さくら}の{花|はな}は{本当|ほんとう}にきれいな{正五角形|せいごかっけい}（{注|ちゅう}1）だね」と{言|い}ったら、{風情|ふぜい}のない{人|ひと}だと{笑|わら}われたことがあった。{確|たし}かに、{桜|さくら}の{花|はな}びらには{微妙|びみょう}な{色合|いろあ}いや{形|かたち}、そして{香|かお}りに{加|くわ}えて、{散|ち}りゆく{美|うつく}しさがある。{花|はな}を{愛|め}でる{和歌|わか}や{俳句|はいく}は{数限|かずかぎ}りないが、そのなかに「{正五角形|せいごかっけい}」という{言葉|ことば}が{使|つか}われたことはおそらく{一度|いちど}もないであろう。{科学者|かがくしゃ}{特有|とくゆう}の{美意識|びいしき}は、{風流|ふうりゅう}とはかなり{異質|いしつ}なものなのだと{悟|さと}った。

{科学|かがく}において{本質|ほんしつ}{以外|いがい}を{切|き}り{捨|す}てるためには、{大胆|だいたん}な{抽象化|ちゅうしょうか}と{理想化|りそうか}が{必要|ひつよう}である。{桜|さくら}の{花|はな}びらのたくさんの{特徴|とくちょう}の{中|なか}から、「{正五角形|せいごかっけい}」という{形|かたち}だけを{取|と}り{出|だ}すこと。これが{抽象化|ちゅうしょうか}である。{実際|じっさい}に{数学的|すうがくてき}な{意味|いみ}で{完全|かんぜん}な{正五角形|せいごかっけい}を{示|しめ}す{花|はな}びらは{少|すく}ないだろうが、そこにはあまりこだわらない。これが{理想化|りそうか}である。

{自然界|しぜんかい}で{正五角形|せいごかっけい}のような{対称性|たいしょうせい}を{示|しめ}すためには、{必|かなら}ず{規則的|きそくてき}な{法則|ほうそく}があるはずである。{花|はな}の{場合|ばあい}、{品種|ひんしゅ}によって{花弁|かべん}（{注|ちゅう}2）の{回転|かいてん}{対称性|たいしょうせい}が{遺伝子|いでんし}で{決定|けってい}されていることは{間違|まちが}いないから、うまくこの{遺伝子|いでんし}を{突|つ}きとめられれば、{花|はな}の{形|かたち}を{決|き}める{普遍的|ふへんてき}な{法則|ほうそく}が{見|み}つかるに{違|ちが}いない。このように、{抽象化|ちゅうしょうか}と{理想化|りそうか}によって{自然|しぜん}{現象|げんしょう}は{単純|たんじゅん}に{整理|せいり}でき、{普遍的|ふへんてき}な{法則|ほうそく}を{見|み}つける{助|たす}けになる。
（{酒井|さかい}{邦嘉|くによし}『{科学者|かがくしゃ}という{仕事|しごと}』による）
（{注|ちゅう}1）{正五角形|せいごかっけい}：{五|いつ}つの{辺|へん}の{長|なが}さが{等|ひと}しい{五角形|ごかっけい}
（{注|ちゅう}2）{花弁|かべん}：{花|はな}びら`,
      arti: `Dulu, saat sedang menikmati bunga sakura, saya berkata, "Bunga sakura itu benar-benar segi lima beraturan (catatan 1) yang indah, ya," lalu ditertawakan sebagai orang yang tidak punya rasa estetika. Memang, kelopak sakura memiliki warna, bentuk, dan aroma yang halus, ditambah keindahan saat berguguran. Puisi waka dan haiku yang memuja bunga tak terhitung jumlahnya, tetapi mungkin tak pernah sekali pun kata "segi lima beraturan" dipakai di dalamnya. Saya menyadari bahwa rasa estetika khas ilmuwan cukup berbeda dengan rasa seni yang anggun.

Dalam sains, untuk membuang hal-hal selain esensi, diperlukan abstraksi dan idealisasi yang berani. Mengambil hanya bentuk "segi lima beraturan" dari sekian banyak ciri kelopak sakura — inilah abstraksi. Mungkin sedikit kelopak yang benar-benar menunjukkan segi lima beraturan sempurna dalam arti matematis, tetapi hal itu tidak terlalu dipersoalkan — inilah idealisasi.

Agar di alam muncul simetri seperti segi lima beraturan, pasti ada hukum yang teratur. Pada bunga, simetri putar kelopak (catatan 2) jelas ditentukan oleh gen sesuai jenisnya, jadi jika gen ini berhasil dilacak, pasti akan ditemukan hukum universal yang menentukan bentuk bunga. Dengan demikian, lewat abstraksi dan idealisasi, fenomena alam bisa ditata secara sederhana, dan itu membantu menemukan hukum universal.
(Dari buku "Pekerjaan Bernama Ilmuwan" karya Sakai Kuniyoshi)
(Catatan 1) 正五角形: segi lima yang kelima sisinya sama panjang
(Catatan 2) 花弁: kelopak bunga`,
    },
    "9-2": {
      yomi: `{住居|じゅうきょ}を{買|か}おうとするときは、その{資産的|しさんてき}な{価値|かち}に{重点|じゅうてん}を{置|お}いて{考|かんが}える{人|ひと}が{多|おお}い。{普通|ふつう}の{人|ひと}にとっては、{一生|いっしょう}に{一度|いちど}の{買|か}い{物|もの}とでもいうべきもので、{多額|たがく}の{金|かね}を{費|つい}やさなくてはならないので、{当然|とうぜん}のことだ。{買|か}った{後|あと}で、{何|なん}らかの{事情|じじょう}で{売|う}らなくてはならない{羽目|はめ}になったときに、{価値|かち}が{減少|げんしょう}していたのでは、{大|だい}{損害|そんがい}を{被|こうむ}る。

だが、{住居|じゅうきょ}にとってより{重要|じゅうよう}なのは、その{有用性|ゆうようせい}（{注|ちゅう}1）である。{住|す}みやすさが{必要|ひつよう}なのはもちろんだが、{自分|じぶん}のライフスタイルに{合|あ}った{構造|こうぞう}になっているとか、{生活|せいかつ}のしやすい{環境|かんきょう}にあって{利便性|りべんせい}（{注|ちゅう}2）に{富|と}んでいるとかの{点|てん}も、{重要|じゅうよう}な{要素|ようそ}である。それらは{必|かなら}ずしも{世間|せけん}{一般|いっぱん}の{価値|かち}{基準|きじゅん}とは{一致|いっち}しない。したがって、{自分|じぶん}たちの{考|かんが}え{方|かた}や{行動|こうどう}{様式|ようしき}に{従|したが}い、それに{照|て}らし{合|あ}わせて{判断|はんだん}する{必要|ひつよう}がある。

{特|とく}に、{終|つい}の{住処|すみか}（{注|ちゅう}3）として{考|かんが}えるときには、{自分|じぶん}たちの{生|い}き{方|かた}をはっきりと{見極|みきわ}め、その{視点|してん}に{立|た}ったうえで、{選択|せんたく}し{決|き}めていかなくてはならない。{年|とし}を{取|と}ってくれば、{当然|とうぜん}のことながら、{行動|こうどう}する{能力|のうりょく}は{衰|おとろ}えてきて、{動|うご}き{回|まわ}る{範囲|はんい}は{狭|せば}まってくる。

{自分|じぶん}たちの{余生|よせい}がどのようなものになるかについて、{計画|けいかく}を{立|た}てたうえに{想像力|そうぞうりょく}を{働|はたら}かせて、{確実性|かくじつせい}の{高|たか}い{予測|よそく}を{組|く}み{立|た}ててみる。その{未来図|みらいず}に{従|したが}って、{住|す}むべき{場所|ばしょ}の{見当|けんとう}をつけ、{住居|じゅうきょ}の{大|おお}きさや{構造|こうぞう}などを{決|き}めていく。もちろん、{将来|しょうらい}の{経済|けいざい}{情勢|じょうせい}の{大|おお}きな{変化|へんか}に{備|そな}えて、{予算|よさん}を{大|おお}きく{下回|したまわ}る{出費|しゅっぴ}に{抑|おさ}えておくことも{必要|ひつよう}であることは、いうまでもない。
（{山崎|やまさき}{武也|たけや}『そこそこ{都会|とかい}に{住|す}もう―{田舎|いなか}{暮|ぐ}らしは{不安|ふあん}がいっぱい』による）
（{注|ちゅう}1）{有用性|ゆうようせい}：{役|やく}に{立|た}つこと
（{注|ちゅう}2）{利便性|りべんせい}：{便利|べんり}さ
（{注|ちゅう}3）{終|つい}の{住処|すみか}：{人生|じんせい}を{終|お}えるまで{住|す}む{家|いえ}`,
      arti: `Saat hendak membeli rumah, banyak orang berpikir dengan menitikberatkan nilai asetnya. Bagi orang biasa, itu bisa disebut belanja sekali seumur hidup dan harus mengeluarkan uang dalam jumlah besar, jadi wajar saja. Jika setelah membeli, karena suatu keadaan terpaksa harus menjualnya dan nilainya sudah turun, kerugiannya besar.

Namun, yang lebih penting bagi sebuah rumah adalah kegunaannya (catatan 1). Kenyamanan untuk ditinggali tentu perlu, tetapi strukturnya yang sesuai dengan gaya hidup sendiri, atau letaknya di lingkungan yang mudah untuk hidup dan sangat praktis (catatan 2), juga merupakan unsur penting. Hal-hal itu belum tentu sejalan dengan standar nilai masyarakat umum. Karena itu, perlu menilai dengan berpedoman pada cara berpikir dan pola perilaku sendiri.

Terutama saat memikirkannya sebagai rumah terakhir (catatan 3), kita harus benar-benar menentukan cara hidup kita, lalu memilih dan memutuskan dari sudut pandang itu. Seiring bertambahnya usia, tentu saja kemampuan bergerak menurun dan jangkauan gerak menyempit.

Kita merencanakan seperti apa sisa hidup kita, lalu dengan memakai daya imajinasi menyusun perkiraan yang tingkat kepastiannya tinggi. Mengikuti gambaran masa depan itu, kita menentukan perkiraan tempat tinggal, lalu ukuran dan struktur rumahnya. Tentu saja, tidak perlu dikatakan lagi bahwa untuk berjaga-jaga terhadap perubahan besar kondisi ekonomi di masa depan, pengeluaran juga perlu ditekan jauh di bawah anggaran.
(Dari buku karya Yamasaki Takeya)
(Catatan 1) 有用性: kegunaan
(Catatan 2) 利便性: kepraktisan
(Catatan 3) 終の住処: rumah yang ditinggali sampai akhir hayat`,
    },
    "9-3": {
      yomi: `{人間|にんげん}は、{所詮|しょせん}、{時代|じだい}の{子|こ}であり、{環境|かんきょう}の{子|こ}である。わたしたちの{認識|にんしき}は、{自分|じぶん}の{生|い}きてきた{時代|じだい}や{環境|かんきょう}に{大|おお}きく{左右|さゆう}される。ある{意味|いみ}、{閉|と}じ{込|こ}められているといってもいい。{認識|にんしき}できる「{世界|せかい}」はきわめて{限定的|げんていてき}なのであり、{時代|じだい}や{環境|かんきょう}の{制約|せいやく}によって、{認識|にんしき}の{鋳型|いがた}（{注|ちゅう}1）ができてしまうから、{場合|ばあい}によっては、{大|おお}きく{歪|ゆが}められた「{世界|せかい}」{像|ぞう}しか{見|み}えなくなることもある。わたしたちは、①そういう{宿命|しゅくめい}を{背負|せお}っているのである。

だから、「{世界|せかい}を{知|し}る」といいつつ、{実|じつ}は、{偏狭|へんきょう}な{認識|にんしき}の{鋳型|いがた}で「{世界|せかい}」をくり{貫|ぬ}いて（{注|ちゅう}2）いるだけということが{生|しょう}じたりする。{鋳型|いがた}が{同|おな}じであるかぎり、{断片的|だんぺんてき}な{情報|じょうほう}をいくら{集|あつ}めたところで、「{世界|せかい}」の{認識|にんしき}は{何|なに}も{変|か}わらない。{固|かた}まった{世界|せかい}{認識|にんしき}をもつことは、「{世界|せかい}」が{大|おお}きく{変化|へんか}する{状況|じょうきょう}では{非常|ひじょう}に{危険|きけん}なことである。

{一方|いっぽう}で、これほど{情報|じょうほう}{環境|かんきょう}が{発達|はったつ}したにもかかわらず、②「{世界|せかい}を{知|し}る」ことがますます{困難|こんなん}になったと{感|かん}じている{人|ひと}も{増加|ぞうか}している。{果|は}てしなく{茫漠|ぼうばく}（{注|ちゅう}3）と{広|ひろ}がり、しかも{絶|た}えず{激動|げきどう}する「{世界|せかい}」が、{手持|ても}ちの{世界|せかい}{認識|にんしき}ではさっぱり{見|み}えなくなってきているからだ。たしかに、ただ{漫然|まんぜん}とメディアの{情報|じょうほう}を{眺|なが}めているだけでは{激流|げきりゅう}に{呑|の}み{込|こ}まれてしまう。

いまこそ、{時代|じだい}や{環境|かんきょう}の{制約|せいやく}を{乗|の}り{越|こ}えて、「{世界|せかい}を{知|し}る{力|ちから}」を{高|たか}めることが{痛切|つうせつ}に{求|もと}められているのではないか。

もちろん、{時代|じだい}や{環境|かんきょう}の{制約|せいやく}から{完全|かんぜん}に{自由|じゆう}になることはない。しかし、{凝|こ}り{固|かた}まった{認識|にんしき}の{鋳型|いがた}をほぐし、{世界|せかい}{認識|にんしき}をできるだけ{柔|やわ}らかく{広|ひろ}げ、{自分|じぶん}たちが{背負|せお}っているものの{見方|みかた}や{考|かんが}え{方|かた}の{限界|げんかい}がどこにあるのか、しっかりとらえ{直|なお}すことはできるはずだ。
（{寺島|てらしま}{実郎|じつろう}『{世界|せかい}を{知|し}る{力|ちから}』による）
（{注|ちゅう}1）{鋳型|いがた}：ここでは、{画一化|かくいつか}した{型|かた}
（{注|ちゅう}2）くり{貫|ぬ}いて：ここでは、{切|き}り{取|と}って
（{注|ちゅう}3）{茫漠|ぼうばく}：{広|ひろ}がりがあり{過|す}ぎて、はっきりしない{様子|ようす}`,
      arti: `Manusia, pada akhirnya, adalah anak zamannya dan anak lingkungannya. Pemahaman kita sangat dipengaruhi oleh zaman dan lingkungan tempat kita hidup. Dalam arti tertentu, bisa dikatakan kita terkurung. "Dunia" yang bisa kita kenali sangat terbatas, dan karena batasan zaman serta lingkungan membentuk cetakan (catatan 1) pemahaman, dalam beberapa kasus kita hanya bisa melihat gambaran "dunia" yang sangat terdistorsi. Kita memikul ① takdir semacam itu.

Karena itu, meski mengaku "mengenal dunia", kadang sebenarnya kita hanya memotong (catatan 2) "dunia" dengan cetakan pemahaman yang sempit. Selama cetakannya sama, sebanyak apa pun informasi terpotong-potong yang dikumpulkan, pemahaman terhadap "dunia" tidak berubah sedikit pun. Memiliki pemahaman dunia yang kaku sangat berbahaya dalam situasi di mana "dunia" berubah besar.

Di sisi lain, meski lingkungan informasi sudah sedemikian maju, makin banyak pula orang yang merasa ② "mengenal dunia" menjadi semakin sulit. Sebab "dunia" yang membentang luas tanpa batas dan samar (catatan 3), serta terus bergejolak, sama sekali tidak terlihat dengan pemahaman dunia yang kita miliki. Memang, jika hanya memandangi informasi media tanpa tujuan, kita akan tertelan derasnya arus.

Bukankah justru sekarang sangat dibutuhkan peningkatan "kemampuan mengenal dunia" dengan melampaui batasan zaman dan lingkungan?

Tentu saja, kita tidak akan pernah sepenuhnya bebas dari batasan zaman dan lingkungan. Namun, kita seharusnya bisa melonggarkan cetakan pemahaman yang sudah mengeras, memperluas pemahaman dunia selentur mungkin, dan menangkap kembali dengan baik di mana batas cara pandang dan cara berpikir yang kita pikul.
(Dari buku "Sekai wo Shiru Chikara" karya Terashima Jitsurō)
(Catatan 1) 鋳型: di sini, pola yang seragam
(Catatan 2) くり貫いて: di sini, memotong
(Catatan 3) 茫漠: begitu luas sehingga tidak jelas`,
    },

    // ── 問題10：独学の精神 ──
    "10": {
      yomi: `{我|わ}が{身|み}が{生涯|しょうがい}に{望|のぞ}み、{知|し}りうることは、{世界中|せかいじゅう}を{旅行|りょこう}しようと、{何|なに}をしようと、{小|ちい}さい。あきれるくらい{小|ちい}さいのだが、この{小|ちい}ささに{耐|た}えていかなければ、{学問|がくもん}はただの{大風呂敷|おおぶろしき}（{注|ちゅう}1）になる。{言葉|ことば}の{風呂敷|ふろしき}はいくらでも{広|ひろ}げられるから、そうやっているうちに{自分|じぶん}は{世界的|せかいてき}に{考|かんが}えている、そのなかに{世界|せかい}のすべてを{包|つつ}める、①そんな{錯覚|さっかく}に{捕|と}らえられる。{木|き}でいい{家|いえ}を{建|た}てる{大工|だいく}とか、{米|こめ}や{野菜|やさい}を{立派|りっぱ}に{育|そだ}てる{農夫|のうふ}とかは、そういうことにはならない。{世界的|せかいてき}に{木|き}を{削|けず}ったり、{世界|せかい}{標準|ひょうじゅん}の{稲|いね}を{育|そだ}てたりはできないから、{彼|かれ}らはみな、{自分|じぶん}の{仕事|しごと}において{賢明|けんめい}である。{我|わ}が{身|み}ひとつの{能力|のうりょく}でできることを{知|し}り{抜|ぬ}いている。{学問|がくもん}をすること、{書物|しょもつ}に{学|まな}ぶことは、ほんとうは②これと{少|すこ}しも{変|か}わりはない。なぜなら、そうしたことはみな、{我|わ}が{身|み}ひとつの{天地|てんち}の{間|あいだ}でしっかりと{生|い}きることだからだ。

{人|ひと}は{世界的|せかいてき}にものを{考|かんが}えることなどできない。それは{錯覚|さっかく}であり、{空想|くうそう}であり、{愚|おろ}かな{思|おも}い{上|あ}がりである。ただし、{天地|てんち}に{向|む}かって{我|わ}が{身|み}を{開|ひら}いていることならできる。{我|わ}が{身|み}ひとつでものを{考|かんが}え、ものを{作|つく}っているほどの{人間|にんげん}なら、それがどういう{意味合|いみあ}いかということは、もちろん{知|し}っている。{人|ひと}は{誰|だれ}でも{自分|じぶん}の{気質|きしつ}を{背負|せお}って{生|う}まれる。{学問|がくもん}する{人|ひと}にとって、この{気質|きしつ}は、{農夫|のうふ}に{与|あた}えられる{土壌|どじょう}のようなものである。{土壌|どじょう}は{天地|てんち}に{開|ひら}かれていなければ、ひからびて（{注|ちゅう}2）{不毛|ふもう}になる。

{与|あた}えられたこの{土|つち}を{耕|たがや}し、{水|みず}を{引|ひ}き、{苗|なえ}を{植|う}える。{苗|なえ}がみずから{育|そだ}つのを、{毎日|まいにち}{助|たす}ける。{苗|なえ}とともに、{自分|じぶん}のなかで{何|なに}かが{育|そだ}つのを{感|かん}じながら。{学問|がくもん}や{思想|しそう}もまた、{人|ひと}の{気質|きしつ}に{植|う}えられた{苗|なえ}のように{育|そだ}つしかないのではないか。{子供|こども}は、{勉強|べんきょう}して{自分|じぶん}の{気質|きしつ}という{土|つち}を{耕|たがや}し、{水|みず}を{引|ひ}き、もらった{苗|なえ}を、{書物|しょもつ}の{言葉|ことば}を{植|う}えるものである。それは、{子供|こども}{自身|じしん}が{何|なに}をいかにやってみるかであり、そうやってこそ、{子供|こども}は{学|まな}ばれる{書物|しょもつ}とともに{育|そだ}つことができる。{子供|こども}が{勉強|べんきょう}をするのは、{自分|じぶん}の{気質|きしつ}という{土壌|どじょう}から、やがて{実|みの}る{精神|せいしん}の{作物|さくもつ}を{育|そだ}てるためである。「{教養|きょうよう}」とは、{元来|がんらい}この{作物|さくもつ}を{指|さ}して{言|い}うのであって、{物識|ものし}り（{注|ちゅう}3）たちの{大風呂敷|おおぶろしき}を{指|さ}して{言|い}うのではない。
（{前田|まえだ}{英樹|ひでき}『{独学|どくがく}の{精神|せいしん}』による）
（{注|ちゅう}1）{大風呂敷|おおぶろしき}：{実際|じっさい}より{大|おお}きく{見|み}せかけたり{言|い}ったりすること
（{注|ちゅう}2）ひからびて：{乾|かわ}ききって
（{注|ちゅう}3）{物識|ものし}り：{物事|ものごと}をよく{知|し}っている{人|ひと}`,
      arti: `Apa yang bisa didambakan dan diketahui diri kita seumur hidup itu kecil, sekalipun kita berkeliling dunia atau melakukan apa pun. Kecilnya sampai mengherankan, tetapi jika kita tidak tahan dengan kecilnya hal ini, ilmu hanya akan menjadi "bentangan kain besar" (bualan, catatan 1). Kain kata-kata bisa dibentangkan seluas apa pun, sehingga sambil melakukannya kita terjebak ① ilusi bahwa kita sedang berpikir secara global dan bisa membungkus seluruh dunia di dalamnya. Tukang kayu yang membangun rumah bagus dari kayu, atau petani yang menumbuhkan padi dan sayur dengan baik, tidak akan begitu. Karena mereka tidak bisa menyerut kayu secara global atau menanam padi berstandar dunia, mereka semua bijak dalam pekerjaannya. Mereka benar-benar tahu apa yang bisa dilakukan dengan kemampuan diri sendiri. Menuntut ilmu dan belajar dari buku sebenarnya sama sekali tidak berbeda dengan ② hal ini. Sebab, semua itu adalah hidup dengan mantap di antara langit dan bumi dengan diri sendiri.

Manusia tidak bisa berpikir secara global. Itu ilusi, khayalan, dan kesombongan yang bodoh. Namun, membuka diri terhadap langit dan bumi masih bisa dilakukan. Orang yang berpikir dan berkarya dengan dirinya sendiri tentu tahu apa maknanya. Setiap orang lahir dengan memikul wataknya sendiri. Bagi orang yang menuntut ilmu, watak ini seperti tanah yang diberikan kepada petani. Jika tanah tidak terbuka terhadap langit dan bumi, ia akan kering kerontang (catatan 2) dan tandus.

Mengolah tanah yang diberikan ini, mengalirkan air, menanam bibit. Setiap hari membantu bibit tumbuh dengan sendirinya. Sambil merasakan sesuatu dalam diri ikut tumbuh bersama bibit itu. Bukankah ilmu dan pemikiran pun hanya bisa tumbuh seperti bibit yang ditanam di watak seseorang? Anak-anak belajar untuk mengolah tanah berupa wataknya sendiri, mengalirkan air, dan menanam bibit yang diterimanya, yaitu kata-kata dalam buku. Itu adalah soal apa dan bagaimana anak itu sendiri mencoba melakukannya, dan hanya dengan begitulah anak bisa tumbuh bersama buku yang ia pelajari. Anak belajar untuk menumbuhkan tanaman jiwa yang kelak berbuah dari tanah berupa wataknya sendiri. "Keterpelajaran" pada dasarnya merujuk pada tanaman ini, bukan pada bualan para orang yang serba tahu (catatan 3).
(Dari buku "Dokugaku no Seishin" karya Maeda Hideki)
(Catatan 1) 大風呂敷: membuat sesuatu tampak atau terdengar lebih besar dari kenyataannya
(Catatan 2) ひからびて: kering sama sekali
(Catatan 3) 物識り: orang yang tahu banyak hal`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
{乳幼児期|にゅうようじき}の{子|こ}どもは、{身近|みぢか}な{人|ひと}とのかかわりあい、そして{遊|あそ}びなどの{実体験|じったいけん}を{重|かさ}ねることによって、{人間|にんげん}{関係|かんけい}を{築|きず}き、{心|こころ}と{身体|しんたい}を{成長|せいちょう}させます。ところが{乳児期|にゅうじき}からのメディア（{注|ちゅう}1）{漬|づ}けの{生活|せいかつ}では、{外遊|そとあそ}びの{機会|きかい}を{奪|うば}い、{人|ひと}とのかかわり{体験|たいけん}の{不足|ふそく}を{招|まね}きます。{実際|じっさい}、{運動|うんどう}{不足|ぶそく}、{睡眠|すいみん}{不足|ぶそく}そしてコミュニケーション{能力|のうりょく}の{低下|ていか}などを{生|しょう}じさせ、その{結果|けっか}、{心身|しんしん}の{発達|はったつ}の{遅|おく}れや{歪|ゆが}みが{生|しょう}じた{事例|じれい}が{臨床|りんしょう}の{場|ば}（{注|ちゅう}2）から{報告|ほうこく}されています。このようなメディアの{弊害|へいがい}は、ごく{一部|いちぶ}の{影響|えいきょう}を{受|う}けやすい{個々|ここ}の{子|こ}どもの{問題|もんだい}としてではなく、メディアが{子|こ}ども{全体|ぜんたい}に{及|およ}ぼす{影響|えいきょう}の{甚大|じんだい}さの{警鐘|けいしょう}と{私|わたし}たちはとらえています。

{特|とく}に{象徴|しょうちょう}{機能|きのう}（{注|ちゅう}3）が{未熟|みじゅく}な2{歳|さい}{以下|いか}の{子|こ}どもや、{発達|はったつ}に{問題|もんだい}のある{子|こ}どものテレビ{画面|がめん}への{早期|そうき}{接触|せっしょく}や{長時間化|ちょうじかんか}は、{親子|おやこ}が{顔|かお}をあわせ{一緒|いっしょ}に{遊|あそ}ぶ{時間|じかん}を{奪|うば}い、{言葉|ことば}や{心|こころ}の{発達|はったつ}を{妨|さまた}げます。
（{社団|しゃだん}{法人|ほうじん}{日本|にほん}{小児科|しょうにか}{医会|いかい}による）
（{注|ちゅう}1）メディア：ここでは、テレビやビデオ
（{注|ちゅう}2）{臨床|りんしょう}の{場|ば}：{実際|じっさい}の{診察|しんさつ}、{治療|ちりょう}の{現場|げんば}
（{注|ちゅう}3）{象徴|しょうちょう}{機能|きのう}：ここでは、{身|み}の{回|まわ}りのものを、{例|たと}えば{言葉|ことば}などで{表|あらわ}す{働|はたら}き

【{意見|いけん} B】
{専門家|せんもんか}からは「テレビをやめて{積極的|せっきょくてき}に{外遊|そとあそ}びをしましょう」「{自然|しぜん}の{中|なか}で{遊|あそ}びましょう」という{意見|いけん}が{聞|き}かれますが、お{母|かあ}さんたちは{進|すす}んでテレビを{見|み}せているのではなく、{地域|ちいき}に{出|で}ても{同|どう}{世代|せだい}の{子|こ}どもがいない、{昔|むかし}と{比|くら}べて{自然|しぜん}がなくなった、という{問題|もんだい}もあるのだと{思|おも}います。（{中略|ちゅうりゃく}）

{多|おお}くの{母親|ははおや}は、テレビの{長時間|ちょうじかん}{視聴|しちょう}がよくないことを{自覚|じかく}しており、{見|み}せる{内容|ないよう}にも{気|き}を{遣|つか}っています。{生活|せいかつ}の{中|なか}からテレビを{排除|はいじょ}するだけではなく、{一日|いちにち}に{六時間|ろくじかん}も{七時間|しちじかん}も{子|こ}どもにテレビを{見|み}せる{親|おや}の{背景|はいけい}に{何|なに}があるのかを{考|かんが}えなければ、{問題|もんだい}の{根本的|こんぽんてき}な{解決|かいけつ}にはならないのです。

したがって、{私|わたし}たちの{生活|せいかつ}スタイルと、{子|こ}どもにとって{望|のぞ}ましいテレビ{視聴|しちょう}のあり{方|かた}のバランスをとりながら、これらの{検証|けんしょう}を{進|すす}める{必要|ひつよう}があるのではないでしょうか。
（{小西|こにし}{行郎|ゆくお}『{早期|そうき}{教育|きょういく}と{脳|のう}』による）`,
      arti: `【Pendapat A】
Anak usia bayi dan balita membangun hubungan antarmanusia serta menumbuhkan jiwa dan raganya melalui interaksi dengan orang-orang terdekat dan pengalaman nyata seperti bermain. Namun, kehidupan yang tenggelam dalam media (catatan 1) sejak bayi merampas kesempatan bermain di luar dan menyebabkan kurangnya pengalaman berinteraksi dengan orang. Kenyataannya, dari lapangan klinis (catatan 2) dilaporkan kasus-kasus kurang gerak, kurang tidur, dan menurunnya kemampuan komunikasi, yang akhirnya menimbulkan keterlambatan dan penyimpangan perkembangan fisik dan mental. Kami memandang dampak buruk media seperti ini bukan sebagai masalah sebagian kecil anak yang mudah terpengaruh, melainkan sebagai peringatan akan besarnya pengaruh media terhadap anak-anak secara keseluruhan.

Terutama bagi anak usia 2 tahun ke bawah yang fungsi simboliknya (catatan 3) belum matang, atau anak yang mengalami masalah perkembangan, kontak dini dan berjam-jam dengan layar TV merampas waktu orang tua dan anak untuk bertatap muka dan bermain bersama, sehingga menghambat perkembangan bahasa dan jiwa.
(Dari Ikatan Dokter Anak Jepang)
(Catatan 1) メディア: di sini, televisi dan video
(Catatan 2) 臨床の場: tempat pemeriksaan dan pengobatan yang sebenarnya
(Catatan 3) 象徴機能: di sini, kemampuan mengungkapkan benda di sekitar, misalnya dengan kata-kata

【Pendapat B】
Para ahli menyampaikan pendapat seperti "Hentikan TV dan aktiflah bermain di luar" atau "Bermainlah di alam", tetapi menurut saya para ibu tidak dengan sukarela memperlihatkan TV; ada juga masalah seperti tidak adanya anak seusia di lingkungan sekitar, dan alam yang sudah hilang dibandingkan dulu. (dihilangkan)

Banyak ibu menyadari bahwa menonton TV berjam-jam itu tidak baik, dan mereka pun memperhatikan isi tontonan. Masalah tidak akan terselesaikan sampai ke akarnya jika kita hanya menyingkirkan TV dari kehidupan, tanpa memikirkan apa yang melatarbelakangi orang tua yang membiarkan anaknya menonton TV sampai enam atau tujuh jam sehari.

Karena itu, bukankah kita perlu melanjutkan pengkajian ini sambil menyeimbangkan gaya hidup kita dengan cara menonton TV yang ideal bagi anak?
(Dari buku karya Konishi Yukuo tentang pendidikan dini dan otak)`,
    },

    // ── 問題12：思想の表現形式 ──
    "12": {
      yomi: `{最近|さいきん}、{思想|しそう}を{表現|ひょうげん}する{方法|ほうほう}について{考|かんが}えることが{多|おお}くなった。たとえば、{文章|ぶんしょう}は{思想|しそう}を{表現|ひょうげん}する{方法|ほうほう}のひとつだけれど、その{文章|ぶんしょう}にもいろいろな{表現|ひょうげん}{形式|けいしき}がある。{哲学|てつがく}の{勉強|べんきょう}をはじめた{頃|ころ}の{私|わたし}は、さまざまな{形式|けいしき}のなかで{論文|ろんぶん}という{形式|けいしき}だけが、{思想|しそう}{表現|ひょうげん}の{方法|ほうほう}にふさわしいと{思|おも}っていた。

しかし、{後|のち}に、この{考|かんが}え{方|かた}を{訂正|ていせい}しなければならなくなった。{思想|しそう}の{表現|ひょうげん}として、{論文|ろんぶん}が{唯一|ゆいいつ}の{方法|ほうほう}だということは{絶対|ぜったい}にない。{私|わたし}たちは、すぐれたエッセーや{小説|しょうせつ}、{詩|し}をとおして、しばしば{思想|しそう}を{学|まな}びとる。とすれば、{思想|しそう}を{表現|ひょうげん}する{文章|ぶんしょう}のかたちは、{自在|じざい}であってよいはずである。

ところが、そう{考|かんが}えてもまだ{問題|もんだい}はある。というのは、{思想|しそう}の{表現|ひょうげん}{形式|けいしき}は、{文章|ぶんしょう}というかたちをとるとは{限|かぎ}らないのだから。{絵|え}でも{彫刻|ちょうこく}でも、{音楽|おんがく}でも、つまり{実|じつ}にさまざまなものを{用|もち}いて、{思想|しそう}を{表現|ひょうげん}するのは{可能|かのう}なはずである。そのなかには、かたちにならないものもある。

たとえば{私|わたし}の{村|むら}に{暮|く}らす{人々|ひとびと}のなかに、{自然|しぜん}に{対|たい}する{深|ふか}い{思想|しそう}をもっていない{人|ひと}など{一人|ひとり}もいない。{村|むら}の{面積|めんせき}の96パーセントを{森|もり}や{川|かわ}がしめるこの{村|むら}で、{自然|しぜん}に{対|たい}する{思想|しそう}をもたなかったら、{人|ひと}は{暮|く}らしていけない。ところが{村人|むらびと}は、＜{自然|しぜん}について＞などという{論文|ろんぶん}を{書|か}くことも、{文章|ぶんしょう}を{書|か}くこともないのである。そればかりか、{自分|じぶん}の{自然|しぜん}{哲学|てつがく}を、{絵|え}や{音楽|おんがく}で{表現|ひょうげん}しようとも{考|かんが}えない。

そんなふうにみていくと、{村人|むらびと}は{自然|しぜん}に{対|たい}してだけではなく、{農|のう}について{深|ふか}い{思想|しそう}や、{村|むら}とは{何|なに}かという{思想|しそう}をもっているのに、それらを{何|なん}らかのかたちで{表現|ひょうげん}することも、またないのである。

とすると、{村人|むらびと}たちは、どんな{方法|ほうほう}で{自分|じぶん}たちの{思想|しそう}を{表現|ひょうげん}しているのであろうか。{私|わたし}は、それは、＜{作法|さほう}＞をとおしてではないかという{気|き}がする。

（{中略|ちゅうりゃく}）{考|かんが}えてみれば、もともとは、{作法|さほう}は、{思想|しそう}と{結|むす}びつきながら{伝承|でんしょう}されてきたものであった。たとえば{昔|むかし}は、{食事|しょくじ}の{作法|さほう}を{厳|きび}しくしつけられた。{食|た}べ{物|もの}を{残|のこ}すことはもちろんのこと、さわぎながら{食事|しょくじ}をすることも、けっしてしてはいけなかった。それは、{食事|しょくじ}は{生命|せいめい}をいただくのだ、という{厳|おごそ}かな{思想|しそう}があったからである。{茶碗|ちゃわん}の{中|なか}の{米|こめ}だけをみても、{人間|にんげん}はおそらく{何万|なんまん}という{生命|せいめい}をいただかなければならない。だから、そういう{人間|にんげん}のあり{方|かた}を{考|かんが}えながら、いま{自分|じぶん}の{身体|からだ}のなかへと{移|うつ}ってくれる{生命|せいめい}に{感謝|かんしゃ}する。この{思想|しそう}が{食事|しょくじ}の{作法|さほう}をつくりだした。

ところが、{近代|きんだい}から{現代|げんだい}の{思想|しそう}は、このような、{日々|ひび}の{暮|く}らしとともにあった{思想|しそう}を{無視|むし}したのである。その{結果|けっか}、{思想|しそう}は、{文章|ぶんしょう}という{表現|ひょうげん}{形式|けいしき}をもち、{文章|ぶんしょう}を{書|か}く{思想家|しそうか}のものになった。そして、いつの{間|ま}にか{人間|にんげん}の{上|うえ}に{君臨|くんりん}し、{現実|げんじつ}を{支配|しはい}する{手段|しゅだん}になっていった。
（{内山|うちやま}{節|たかし}『「{里|さと}」という{思想|しそう}』による）`,
      arti: `Belakangan ini saya semakin sering memikirkan cara mengungkapkan pemikiran. Misalnya, tulisan adalah salah satu cara mengungkapkan pemikiran, tetapi tulisan pun punya berbagai bentuk ungkapan. Ketika mulai belajar filsafat, saya mengira di antara berbagai bentuk itu, hanya bentuk makalah ilmiah yang layak sebagai cara mengungkapkan pemikiran.

Namun, kemudian saya harus mengoreksi cara berpikir ini. Sama sekali tidak benar bahwa makalah adalah satu-satunya cara mengungkapkan pemikiran. Kita sering mempelajari pemikiran melalui esai, novel, dan puisi yang bagus. Kalau begitu, bentuk tulisan yang mengungkapkan pemikiran tentunya boleh bebas.

Akan tetapi, meski berpikir begitu, masih ada masalah. Sebab, bentuk ungkapan pemikiran belum tentu berupa tulisan. Lukisan, patung, musik — dengan kata lain, pemikiran tentu bisa diungkapkan dengan berbagai macam hal. Di antaranya ada juga yang tidak berwujud.

Misalnya, di antara orang-orang yang tinggal di desa saya, tidak ada satu pun yang tidak memiliki pemikiran mendalam tentang alam. Di desa yang 96 persen luasnya berupa hutan dan sungai ini, orang tidak bisa hidup tanpa memiliki pemikiran tentang alam. Namun, warga desa tidak pernah menulis makalah berjudul <Tentang Alam>, bahkan tidak menulis tulisan apa pun. Lebih dari itu, mereka juga tidak berpikir untuk mengungkapkan filsafat alam mereka lewat lukisan atau musik.

Jika dilihat begitu, warga desa memiliki pemikiran mendalam bukan hanya tentang alam, tetapi juga tentang pertanian dan tentang apa itu desa, namun mereka juga tidak mengungkapkannya dalam bentuk apa pun.

Kalau begitu, dengan cara apa warga desa mengungkapkan pemikiran mereka? Saya merasa, mungkin melalui <tata krama>.

(dihilangkan) Kalau dipikir, pada dasarnya tata krama diwariskan dengan terikat pada pemikiran. Misalnya, dulu tata krama makan diajarkan dengan keras. Menyisakan makanan tentu saja, makan sambil ribut pun sama sekali tidak boleh. Itu karena ada pemikiran yang khidmat bahwa makan berarti menerima kehidupan. Dari nasi di dalam mangkuk saja, manusia mungkin harus menerima puluhan ribu kehidupan. Karena itu, sambil memikirkan keberadaan manusia seperti itu, kita berterima kasih kepada kehidupan yang kini berpindah ke dalam tubuh kita. Pemikiran inilah yang melahirkan tata krama makan.

Namun, pemikiran dari era modern hingga kini mengabaikan pemikiran yang hidup bersama keseharian seperti ini. Akibatnya, pemikiran memiliki bentuk ungkapan berupa tulisan, dan menjadi milik para pemikir yang menulis. Lalu, tanpa disadari, pemikiran bertakhta di atas manusia dan menjadi alat untuk menguasai kenyataan.
(Dari buku karya Uchiyama Takashi tentang pemikiran "kampung")`,
    },

    // ── 問題13：アルバイト情報 7月号 ──
    "13": {
      yomi: `| {仕事|しごと} | {内容|ないよう} | {時給|じきゅう}（{円|えん}） | {曜日|ようび}・{時間|じかん} | {条件|じょうけん} |
|------|------|------------|------------|------|
| ①{中国|ちゅうごく}{料理|りょうり}{店|てん}スタッフ | {食器|しょっき}{洗|あら}い、{材料|ざいりょう}の{準備|じゅんび} | 800 | {水曜|すいよう}{定休|ていきゅう} 10:00—14:00 | {週|しゅう}3{回|かい}{以上|いじょう}なるべく{多|おお}く{勤務|きんむ}できる{方|かた}を{望|のぞ}む |
| ②{日本|にほん}そば{屋|や}スタッフ | {注文|ちゅうもん}を{取|と}る・{料理|りょうり}を{出|だ}す{等|とう}の{接客|せっきゃく}、{後片付|あとかたづ}け | 900 | {月曜|げつよう}{定休|ていきゅう} 10:00—21:00 | {週|しゅう}2{回|かい}{以上|いじょう}{時間|じかん}は{相談|そうだん}{可|か} |
| ③{居酒屋|いざかや}スタッフ | {注文|ちゅうもん}を{取|と}る・{料理|りょうり}を{出|だ}す{等|とう}の{接客|せっきゃく}、{後片付|あとかたづ}け | 900 | {毎日|まいにち} 17:00—23:00 | {週|しゅう}2{回|かい}{以上|いじょう}（1{回|かい}は{必|かなら}ず23:00まで）20{歳|さい}{以上|いじょう}の{男女|だんじょ}（{学生|がくせい}{可|か}） |
| ④コンビニ{店員|てんいん} | {商品|しょうひん}{販売|はんばい}および{商品|しょうひん}{管理|かんり} | （〜22{時|じ}）800 （22{時|じ}〜）950 | {毎日|まいにち} (1) 8:00—13:00 (2) 15:00—21:00 (3) 24:00—6:00 | {長期|ちょうき}できる{人|ひと} {週|しゅう}1、2{回|かい}でもOK |
| ⑤スーパー{店員|てんいん} | {生鮮|せいせん}{食品|しょくひん}・{鮮魚|せんぎょ}・{野菜|やさい}{果物|くだもの}・{肉|にく}{売|う}り{場|ば}で{商品|しょうひん}を{切|き}る。{並|なら}べる、{清掃|せいそう} | 850 | {水曜|すいよう}{定休|ていきゅう} 9:00—20:00 | {週|しゅう}1{日|にち}、1{回|かい}4{時間|じかん}{以上|いじょう}（{時間|じかん}{相談|そうだん}{可|か}）{長期|ちょうき}できる{人|ひと} |
| ⑥{食品|しょくひん}{工場|こうじょう}{製造|せいぞう}スタッフ | {主|おも}に{果物|くだもの}の{皮|かわ}むき | （〜22{時|じ}）800 （22{時|じ}〜）1000 | {毎日|まいにち} (1) 8:00—17:00 (2) 17:00—24:00 | {毎日|まいにち}{来|こ}られる{人|ひと} {夜間|やかん}{可能|かのう}な{人|ひと}{歓迎|かんげい} |
| ⑦{新|しん}{製品|せいひん}{宣伝|せんでん}スタッフ | スーパーで{新|しん}{製品|せいひん}（{飲|の}み{物|もの}）をお{客様|きゃくさま}に{紹介|しょうかい}する | 1000 | 7{月|がつ}の{土|ど}・{日曜|にちよう} 9:00—18:00のうち3{時間|じかん}{以上|いじょう} | 7{月|がつ}{中|ちゅう}に2{日|か}{以上|いじょう}{勤務|きんむ}{出来|でき}る{人|ひと} |
| ⑧{引|ひ}っ{越|こ}しアシスタント | {荷物|にもつ}を{運|はこ}ぶ、{荷物|にもつ}の{出|だ}し{入|い}れ | 950 | {毎日|まいにち} {原則|げんそく}9:00—17:00 （{残業|ざんぎょう}あり） | 1{日|にち}だけでも{可|か} |
| ⑨{試験|しけん}{監督|かんとく}{補助|ほじょ} | {試験|しけん}{監督|かんとく}の{助手|じょしゅ} ・{問題|もんだい}{配布|はいふ}と{回収|かいしゅう} ・{受験生|じゅけんせい}のチェック | （{日給|にっきゅう}）6000 | 7{月|がつ}25{日|にち}（{土|ど}） 8:30—17:00 | {大学生|だいがくせい} |
| ⑩{塾|じゅく}{講師|こうし}（{英語|えいご}） | {中学生|ちゅうがくせい}・{高校生|こうこうせい}の{英語|えいご}の{補習|ほしゅう}{授業|じゅぎょう} | 2000 | {火|か}・{木|もく}・{土曜|どよう} 16:00—20:00 | {受験|じゅけん}{指導|しどう}{経験者|けいけんしゃ} {長期|ちょうき}のみ |`,
      arti: `| Pekerjaan | Isi | Upah per jam (yen) | Hari & jam | Syarat |
| ① Staf restoran Tiongkok | Mencuci piring, menyiapkan bahan | 800 | Libur tiap Rabu, 10:00–14:00 | Diutamakan yang bisa bekerja 3 kali/minggu atau lebih, sebanyak mungkin |
| ② Staf kedai soba Jepang | Melayani tamu (mencatat pesanan, menyajikan makanan, dll.), beres-beres | 900 | Libur tiap Senin, 10:00–21:00 | 2 kali/minggu atau lebih, jam bisa dirundingkan |
| ③ Staf izakaya | Melayani tamu (mencatat pesanan, menyajikan makanan, dll.), beres-beres | 900 | Setiap hari 17:00–23:00 | 2 kali/minggu atau lebih (1 kali wajib sampai 23:00), pria/wanita usia 20 tahun ke atas (mahasiswa boleh) |
| ④ Pegawai minimarket | Penjualan dan pengelolaan barang | (s.d. 22:00) 800, (22:00–) 950 | Setiap hari (1) 8:00–13:00 (2) 15:00–21:00 (3) 24:00–6:00 | Bisa jangka panjang; 1–2 kali/minggu pun OK |
| ⑤ Pegawai supermarket | Memotong dan menata barang di bagian makanan segar, ikan, sayur-buah, daging; bersih-bersih | 850 | Libur tiap Rabu, 9:00–20:00 | 1 hari/minggu, minimal 4 jam per kali (jam bisa dirundingkan), bisa jangka panjang |
| ⑥ Staf produksi pabrik makanan | Terutama mengupas buah | (s.d. 22:00) 800, (22:00–) 1000 | Setiap hari (1) 8:00–17:00 (2) 17:00–24:00 | Bisa datang setiap hari; yang bisa malam hari sangat disambut |
| ⑦ Staf promosi produk baru | Memperkenalkan produk baru (minuman) kepada pengunjung di supermarket | 1000 | Sabtu & Minggu di bulan Juli, minimal 3 jam antara 9:00–18:00 | Bisa bekerja minimal 2 hari selama Juli |
| ⑧ Asisten pindahan | Mengangkut barang, mengeluarkan dan memasukkan barang | 950 | Setiap hari, pada dasarnya 9:00–17:00 (ada lembur) | 1 hari saja pun boleh |
| ⑨ Asisten pengawas ujian | Asisten pengawas ujian: membagikan dan mengumpulkan soal, memeriksa peserta | (upah harian) 6000 | 25 Juli (Sabtu) 8:30–17:00 | Mahasiswa |
| ⑩ Pengajar bimbel (bahasa Inggris) | Kelas tambahan bahasa Inggris untuk siswa SMP dan SMA | 2000 | Selasa, Kamis, Sabtu 16:00–20:00 | Berpengalaman membimbing ujian masuk; jangka panjang saja |`,
    },
  },
};
