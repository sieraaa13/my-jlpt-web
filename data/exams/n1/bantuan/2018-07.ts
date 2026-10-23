import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2018
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1807: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{鈴木氏|すずきし}は{当時|とうじ}を【{回顧|かいこ}】して、{次|つぎ}のように{語|かた}った。",
      arti: "Suzuki 【mengenang kembali】 masa itu dan bercerita sebagai berikut.",
    },
    2: {
      yomi: "{彼|かれ}の{話|はなし}には{多少|たしょう}の【{偽|いつわ}り】があると{思|おも}われた。",
      arti: "Ceritanya tampaknya mengandung sedikit 【kebohongan】.",
      optArti: ["jarak, kesenjangan", "kepanikan, ketergesaan", "keberatsebelahan", "kebohongan (偽り)"],
    },
    3: {
      yomi: "{私|わたし}は{特|とく}に【{嫌悪感|けんおかん}】は{持|も}たなかった。",
      arti: "Saya tidak terlalu merasa 【jijik/benci】.",
    },
    4: {
      yomi: "{問題|もんだい}が{解決|かいけつ}するまで【{自重|じしゅく}】することにした。",
      arti: "Saya memutuskan untuk 【menahan diri】 sampai masalahnya selesai.",
    },
    5: {
      yomi: "{自分|じぶん}を【{戒|いまし}めたい】と{思|おも}う。",
      arti: "Saya ingin 【menegur/memperingatkan】 diri sendiri.",
      optArti: ["ingin memperbaiki", "ingin menghibur", "ingin mendalami sampai puncak", "ingin menegur, mengekang (戒めたい)"],
    },
    6: {
      yomi: "この{国|くに}の{南側|みなみがわ}には、なだらかな【{丘陵|きゅうりょう}】{地帯|ちたい}が{広|ひろ}がっている。",
      arti: "Di sisi selatan negara ini terbentang daerah 【perbukitan】 yang landai.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "この{商品|しょうひん}は{非常|ひじょう}によく{売|う}れていて、どの{店|みせ}にも（　）がほとんどない{状態|じょうたい}だ。",
      arti: "Produk ini sangat laris, sampai hampir tidak ada (…) di toko mana pun.",
      optYomi: ["{設置|せっち}", "{残留|ざんりゅう}", "{所持|しょじ}", "{在庫|ざいこ}"],
      optArti: ["pemasangan", "tertinggal, tersisa", "kepemilikan (barang bawaan)", "stok"],
    },
    8: {
      yomi: "{企業|きぎょう}の{海外|かいがい}{進出|しんしゅつ}は（　）を{伴|ともな}うが、{成功|せいこう}すれば{利益|りえき}は{大|おお}きい。",
      arti: "Ekspansi perusahaan ke luar negeri disertai (…), tetapi kalau berhasil keuntungannya besar.",
      optArti: ["keluar, gagal", "kesalahan", "risiko", "turun"],
    },
    9: {
      yomi: "{不景気|ふけいき}が{続|つづ}いていても{父|ちち}の{会社|かいしゃ}が{倒産|とうさん}しなかったのは、{設立|せつりつ}{以来|いらい}、（　）{経営|けいえい}を{続|つづ}けてきたおかげだ。",
      arti: "Perusahaan ayah tidak bangkrut meski resesi berlanjut, berkat pengelolaan yang (…) sejak didirikan.",
      optYomi: ["{切実|せつじつ}な", "{堅実|けんじつ}な", "{安泰|あんたい}な", "{安易|あんい}な"],
      optArti: ["mendesak, sungguh-sungguh", "solid, hati-hati", "aman sentosa", "gampangan"],
    },
    10: {
      yomi: "{品質|ひんしつ}の{劣化|れっか}を{防|ふせ}ぐには、{光|ひかり}を{通|とお}さない{黒|くろ}い{箱|はこ}に{入|い}れて、{光|ひかり}を（　）する{必要|ひつよう}がある。",
      arti: "Untuk mencegah turunnya kualitas, perlu dimasukkan ke kotak hitam yang tidak tembus cahaya dan (…) cahaya.",
      optYomi: ["{拒絶|きょぜつ}", "{駆除|くじょ}", "{遮断|しゃだん}", "{隔離|かくり}"],
      optArti: ["penolakan", "pembasmian (hama)", "pemblokiran, menghalangi", "isolasi, pemisahan"],
    },
    11: {
      yomi: "{久|ひさ}しぶりに{帰省|きせい}すると、{町|まち}の{様子|ようす}が（　）{変|か}わっていて、{驚|おどろ}いた。",
      arti: "Saat pulang kampung setelah sekian lama, suasana kota berubah (…), dan saya terkejut.",
      optArti: ["total, drastis", "berjejer", "seperti tak terjadi apa-apa", "sekilas"],
    },
    12: {
      yomi: "{中村|なかむら}さんの{勝手|かって}な{行動|こうどう}には{強|つよ}い{怒|いか}りを{覚|おぼ}えたが、{友人|ゆうじん}に（　）、{少|すこ}し{気持|きも}ちが{落|お}ち{着|つ}いた。",
      arti: "Saya sangat marah dengan tindakan seenaknya Nakamura-san, tetapi setelah (…) oleh teman, perasaan saya sedikit tenang.",
      optYomi: ["{親|した}しまれて", null, "{勧|すす}められて", null],
      optArti: ["disayangi, diakrabi", "ditenangkan, dibujuk", "dianjurkan", "dipercayakan"],
    },
    13: {
      yomi: "{部長|ぶちょう}は{昨日|きのう}の{会議|かいぎ}で、{新|しん}{企画|きかく}について{大枠|おおわく}は{説明|せつめい}したが、{具体的|ぐたいてき}な{開始|かいし}{時期|じき}には（　）しなかった。",
      arti: "Di rapat kemarin, kepala departemen menjelaskan garis besar rencana baru, tetapi tidak (…) waktu mulainya yang konkret.",
      optYomi: ["{供述|きょうじゅつ}", "{言及|げんきゅう}", "{告白|こくはく}", "{通話|つうわ}"],
      optArti: ["keterangan (di pengadilan)", "menyinggung, menyebut", "pengakuan", "percakapan telepon"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "【すみやかに】{片|かた}づけてください。",
      arti: "Tolong rapikan 【segera】.",
      optYomi: ["{元|もと}の{通|とお}りに", "できるだけきれいに", "できるだけ{早|はや}く", "{決|き}めた{通|とお}りに"],
      optArti: ["seperti semula", "serapi mungkin", "secepat mungkin", "sesuai yang ditentukan"],
    },
    15: {
      yomi: "{高橋|たかはし}さんの{主張|しゅちょう}は【{漠然|ばくぜん}としていた】。",
      arti: "Pendapat Takahashi-san 【samar-samar】.",
      optArti: ["kabur, samar", "berantakan, ruwet", "ringan, sederhana", "jelas"],
    },
    16: {
      yomi: "【{妨害|ぼうがい}する】つもりはなかったんです。",
      arti: "Saya tidak bermaksud 【mengganggu】.",
      optArti: ["menipu", "berbuat iseng", "menggoda, mengolok", "mengganggu"],
    },
    17: {
      yomi: "{池田|いけだ}さんは、いつも【エレガントな】{服|ふく}を{着|き}ている。",
      arti: "Ikeda-san selalu memakai pakaian yang 【elegan】.",
      optYomi: ["{活動的|かつどうてき}な", "{地味|じみ}な", "{上品|じょうひん}な", "{個性的|こせいてき}な"],
      optArti: ["aktif, sporty", "sederhana, kalem", "anggun", "berkarakter, unik"],
    },
    18: {
      yomi: "【つかの{間|ま}の】{休息|きゅうそく}だった。",
      arti: "Itu istirahat yang 【sekejap】.",
      optYomi: ["{短|みじか}い", "{久|ひさ}しぶりの", "{充実|じゅうじつ}した", "{十分|じゅうぶん}な"],
      optArti: ["singkat", "setelah sekian lama", "penuh makna", "cukup"],
    },
    19: {
      yomi: "また【しくじって】しまった。",
      arti: "Saya 【gagal/melakukan kesalahan】 lagi.",
      optYomi: ["{緊張|きんちょう}して", "{失敗|しっぱい}して", "{遅刻|ちこく}して", "{誤解|ごかい}して"],
      optArti: ["tegang", "gagal", "terlambat", "salah paham"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{巧|たく}み",
      arti: "巧み = terampil, piawai (dalam teknik)",
      optYomi: [
        "{山本|やまもと}さんは{観察力|かんさつりょく}が{巧|たく}みで、{小|ちい}さな{違|ちが}いも{見逃|みのが}さない。",
        "{社員|しゃいん}{全員|ぜんいん}に{意見|いけん}を{募|つの}ったところ、{巧|たく}みなアイディアが{寄|よ}せられた。",
        "{中島|なかじま}さんは{計算|けいさん}が{早|はや}くて、{算数|さんすう}が{巧|たく}みなんです。",
        "{職人|しょくにん}の{巧|たく}みな{技術|ぎじゅつ}によって、この{器|うつわ}は{作|つく}り{出|だ}される。",
      ],
      optArti: [
        "Daya pengamatan Yamamoto-san 'piawai', ia tidak melewatkan perbedaan kecil sekalipun.",
        "Ketika meminta pendapat semua karyawan, terkumpul ide-ide yang 'piawai'.",
        "Nakajima-san cepat berhitung, ia 'piawai' dalam aritmatika.",
        "Wadah ini diciptakan dengan teknik 'piawai' para perajin.",
      ],
    },
    21: {
      yomi: "{配属|はいぞく}",
      arti: "配属 = penempatan (pegawai ke bagian/divisi)",
      optYomi: [
        "{夜間|やかん}は{患者|かんじゃ}10{人|にん}に{対|たい}して{看護師|かんごし}{一人|ひとり}を{配属|はいぞく}している。",
        "{新入|しんにゅう}{社員|しゃいん}の{全員|ぜんいん}が{希望|きぼう}の{部署|ぶしょ}に{配属|はいぞく}されるわけではない。",
        "{要請|ようせい}に{応|おう}じて、{毎年|まいとし}{日本語|にほんご}{講師|こうし}を{海外|かいがい}に{配属|はいぞく}している。",
        "{営業部|えいぎょうぶ}の{石川|いしかわ}{部長|ぶちょう}が{次期|じき}{社長|しゃちょう}に{配属|はいぞく}された。",
      ],
      optArti: [
        "Pada malam hari, satu perawat 'ditempatkan' untuk setiap 10 pasien.",
        "Tidak semua karyawan baru 'ditempatkan' di bagian yang diinginkan.",
        "Atas permintaan, setiap tahun kami 'menempatkan' pengajar bahasa Jepang ke luar negeri.",
        "Kepala bagian penjualan Ishikawa 'ditempatkan' sebagai direktur berikutnya.",
      ],
    },
    22: {
      yomi: "{乗|の}り{出|だ}す",
      arti: "乗り出す = mulai turun tangan, terjun (menangani sesuatu)",
      optYomi: [
        "{息子|むすこ}が{学生|がくせい}から{社会人|しゃかいじん}へと{新|あら}たな{道|みち}に{乗|の}り{出|だ}した。",
        "{法律|ほうりつ}の{改正|かいせい}に{協力|きょうりょく}してくれるよう、{関係者|かんけいしゃ}に{乗|の}り{出|だ}している。",
        "{労働者|ろうどうしゃ}{不足|ぶそく}が{深刻化|しんこくか}し、{政府|せいふ}が{調査|ちょうさ}に{乗|の}り{出|だ}した。",
        "{母|はは}は{買|か}い{物|もの}から{戻|もど}ると、すぐに{料理|りょうり}に{乗|の}り{出|だ}した。",
      ],
      optArti: [
        "Putra saya 'turun tangan' ke jalan baru, dari mahasiswa menjadi pekerja.",
        "Kami 'turun tangan' kepada pihak terkait agar mau bekerja sama dalam revisi undang-undang.",
        "Kekurangan tenaga kerja makin serius, dan pemerintah 'turun tangan' melakukan penyelidikan.",
        "Begitu pulang belanja, ibu langsung 'turun tangan' memasak.",
      ],
    },
    23: {
      yomi: "{面識|めんしき}",
      arti: "面識 = kenal secara langsung (pernah bertemu)",
      optYomi: [
        "A{大学|だいがく}の{松本|まつもと}{先生|せんせい}は、{名前|なまえ}は{以前|いぜん}からよく{知|し}っているが、{面識|めんしき}はない。",
        "このあたりの{土地|とち}は{面識|めんしき}がないので、{地図|ちず}がないとどこにも{行|い}けない。",
        "{好|す}きな{画家|がか}の{展示会|てんじかい}に{行|い}ったら、{面識|めんしき}がない{新|あたら}しい{絵|え}が{展示|てんじ}されていた。",
        "{海外|かいがい}{旅行中|りょこうちゅう}の{友人|ゆうじん}から{届|とど}いた{絵|え}はがきには、{面識|めんしき}のない{文字|もじ}が{写|うつ}っていた。",
      ],
      optArti: [
        "Saya sudah lama tahu nama Prof. Matsumoto dari Universitas A, tetapi belum pernah 'kenal langsung'.",
        "Saya tidak 'kenal langsung' daerah sekitar sini, jadi tanpa peta tidak bisa ke mana-mana.",
        "Di pameran pelukis favorit saya, dipamerkan lukisan baru yang tidak saya 'kenal langsung'.",
        "Di kartu pos dari teman yang berwisata ke luar negeri, terlihat huruf yang tidak saya 'kenal langsung'.",
      ],
    },
    24: {
      yomi: "{抜粋|ばっすい}",
      arti: "抜粋 = kutipan, cuplikan (bagian yang diambil dari tulisan)",
      optYomi: [
        "このシャンプーは、{植物|しょくぶつ}から{抜粋|ばっすい}された{天然|てんねん}{成分|せいぶん}だけで{作|つく}られています。",
        "アンケートによって{抜粋|ばっすい}した{消費者|しょうひしゃ}の{不満|ふまん}の{声|こえ}を{今後|こんご}の{商品|しょうひん}{開発|かいはつ}に{生|い}かしたい。",
        "{多数|たすう}の{応募者|おうぼしゃ}の{中|なか}から{厳正|げんせい}に{抜粋|ばっすい}した10{名|めい}に{賞品|しょうひん}を{送|おく}った。",
        "お{渡|わた}しした{資料|しりょう}は、{私|わたし}の{論文|ろんぶん}の{一|いち}{部分|ぶぶん}を{抜粋|ばっすい}したものです。",
      ],
      optArti: [
        "Sampo ini dibuat hanya dari bahan alami yang 'dikutip' dari tumbuhan.",
        "Kami ingin memanfaatkan keluhan konsumen yang 'dikutip' lewat angket untuk pengembangan produk ke depan.",
        "Kami mengirim hadiah kepada 10 orang yang 'dikutip' secara ketat dari banyak pendaftar.",
        "Dokumen yang saya berikan adalah 'kutipan' sebagian dari makalah saya.",
      ],
    },
    25: {
      yomi: "{心当|こころあ}たり",
      arti: "心当たり = petunjuk, dugaan (sesuatu yang terlintas di pikiran)",
      optYomi: [
        "なぜ{木村|きむら}さんが{私|わたし}のことを{嫌|きら}っているのか、{私|わたし}には{心当|こころあ}たりがない。",
        "このカメラを{買|か}ったのは10{年|ねん}も{前|まえ}なので、いくらで{買|か}ったか{心当|こころあ}たりがない。",
        "{今日|きょう}は{仕事|しごと}が{忙|いそが}しいので、{何時|なんじ}ごろ{帰|かえ}れるか{心当|こころあ}たりがない。",
        "{何|なに}かいい{解決|かいけつ}{方法|ほうほう}がないか{考|かんが}えているが、まだ{心当|こころあ}たりがない。",
      ],
      optArti: [
        "Saya tidak punya 'dugaan' mengapa Kimura-san membenci saya.",
        "Kamera ini dibeli 10 tahun lalu, jadi saya tidak punya 'dugaan' berapa harganya.",
        "Hari ini kerja sibuk, jadi saya tidak punya 'dugaan' pukul berapa bisa pulang.",
        "Saya sedang memikirkan cara penyelesaian yang baik, tetapi belum punya 'dugaan'.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{技術|ぎじゅつ}の{進歩|しんぽ}で{世|よ}の{中|なか}は{便利|べんり}になったが、{便利|べんり}さ（　）{失|うしな}ったものも{少|すく}なくないのではないだろうか。",
      arti: "Dunia menjadi praktis berkat kemajuan teknologi, tetapi bukankah tidak sedikit pula yang hilang (…) kepraktisan itu?",
      optYomi: [null, "と{相|あい}まって", null, "と{引|ひ}き{換|か}えに"],
      optArti: ["tanpa", "berpadu dengan", "tidak hanya", "sebagai gantinya, sebagai tukaran"],
    },
    27: {
      yomi: "わが{社|しゃ}は、{地球|ちきゅう}{環境|かんきょう}を（　）、{廃棄物|はいきぶつ}の{減量|げんりょう}とリサイクルの{推進|すいしん}に{取|と}り{組|く}んでいる。",
      arti: "Perusahaan kami, (…) lingkungan bumi, berupaya mengurangi limbah dan mendorong daur ulang.",
      optYomi: ["{守|まも}ろうとも", "{守|まも}ればこそ", "{守|まも}るべく", "{守|まも}るにせよ"],
      optArti: ["meski berusaha melindungi", "justru karena melindungi", "untuk melindungi", "kalaupun melindungi"],
    },
    28: {
      yomi: "A「{遅|おく}れてごめん」B「{遅|おそ}いよ！10{分|ぷん}も{遅刻|ちこく}するなんて、{何|なに}{考|かんが}えてるの？」A「{少|すこ}し{遅|おく}れたぐらいで（　）そんなに{怒|おこ}らなくてもいいだろう。」",
      arti: "A: \"Maaf terlambat.\" B: \"Telat! Terlambat sampai 10 menit, kamu mikir apa sih?\" A: \"Cuma telat sedikit, (…) tidak perlu marah sampai segitunya, kan.\"",
      optArti: ["seolah-olah", "sama sekali (tidak)", "tidak perlu sampai (なにも～なくても)", "sama sekali (tidak), seluruhnya"],
    },
    29: {
      yomi: "（{海岸|かいがん}で）A「あれ？イヤリングが{片方|かたほう}ない。どこでなくしたんだろう。ねえ、{一緒|いっしょ}に{探|さが}して。」B「（　）、こんな{広|ひろ}い{場所|ばしょ}でどうやって{探|さが}すの？」",
      arti: "(Di pantai) A: \"Lho? Antingku hilang sebelah. Di mana hilangnya ya. Hei, bantu cari.\" B: \"(…), bagaimana mencarinya di tempat seluas ini?\"",
      optYomi: ["{探|さが}すったって", "{探|さが}すのかどうか", "{探|さが}すわりには", "{探|さが}すっていうより"],
      optArti: ["kamu bilang cari, tapi", "apakah dicari atau tidak", "untuk ukuran mencari", "daripada mencari"],
    },
    30: {
      yomi: "{富士山|ふじさん}{頂|ちょう}から{見|み}た{景色|けしき}のなんと{美|うつく}しかった（　）。{本当|ほんとう}に{感動|かんどう}した。",
      arti: "Betapa indahnya (…) pemandangan yang dilihat dari puncak Gunung Fuji. Saya sungguh terharu.",
      optArti: ["apakah", "(betapa …!)", "pantas saja", "memang biasanya"],
    },
    31: {
      yomi: "うちの{猫|ねこ}は、{突然|とつぜん}{甘|あま}えてきたり、（　）、{呼|よ}んでも{無視|むし}してどこかに{行|い}ってしまったりする。{本当|ほんとう}に{気|き}まぐれだ。",
      arti: "Kucing kami kadang tiba-tiba bermanja-manja, (…) dipanggil pun diabaikan dan pergi entah ke mana. Benar-benar plin-plan.",
      optYomi: ["そうだと{思|おも}って", "そうかと{思|おも}えば", "こうだと{思|おも}って", "こうかと{見|み}れば"],
      optArti: ["berpikir begitu", "tapi di lain waktu (begitu dikira…)", "berpikir begini", "kalau dilihat begini"],
    },
    32: {
      yomi: "{一人|ひとり}{暮|ぐ}らしを{始|はじ}めてからは、{誰|だれ}にも{何|なに}も{言|い}われない（　）、だらしない{生活|せいかつ}をするようになってしまった。",
      arti: "Sejak hidup sendiri, (…) tidak ada yang menegur, saya jadi menjalani hidup yang berantakan.",
      optArti: ["memanfaatkan kesempatan bahwa", "kalau itu bagus", "karena katanya bagus", "padahal sepertinya bagus"],
    },
    33: {
      yomi: "（インタビューで）A「{新聞|しんぶん}{記者|きしゃ}から{弁護士|べんごし}に{転職|てんしょく}しようと{思|おも}われたのはなぜですか。」B「{事件|じけん}の{取材|しゅざい}で{被害者|ひがいしゃ}の{方|かた}のお{話|はなし}を（　）、{大変|たいへん}なご{苦労|くろう}があることを{知|し}り、そういう{方|かた}たちの{力|ちから}になりたいと{思|おも}うようになったんです。」",
      arti: "(Wawancara) A: \"Mengapa Anda memutuskan beralih dari wartawan menjadi pengacara?\" B: \"Saat meliput kasus, (…) cerita para korban, saya tahu mereka sangat menderita, dan saya jadi ingin membantu orang-orang seperti itu.\"",
      optYomi: ["{聞|き}いてくださる{一方|いっぽう}で", "{聞|き}かせてくださる{一方|いっぽう}で", "{聞|き}いていただく{中|なか}で", "{聞|き}かせていただく{中|なか}で"],
      optArti: ["sementara (beliau) mendengar", "sementara (beliau) memperdengarkan", "dalam proses (meminta beliau) mendengar", "dalam proses diizinkan mendengar"],
    },
    34: {
      yomi: "{条件|じょうけん}の{折|お}り{合|あ}いがつかず、すぐに{契約|けいやく}を{結|むす}ぶのが{難|むずか}しい{現状|げんじょう}では、A{社|しゃ}とは、{時間|じかん}はかかっても、{根気|こんき}よく{交渉|こうしょう}を{重|かさ}ねていく（　）。",
      arti: "Dalam keadaan sekarang di mana syarat belum disepakati dan sulit segera menandatangani kontrak, dengan perusahaan A, meski memakan waktu, (…) terus bernegosiasi dengan sabar.",
      optArti: ["mungkin bukan saatnya", "tidak ada cara lain selain", "mana mungkin ada", "bahkan tidak pernah"],
    },
    35: {
      yomi: "A「ねえ、{昨日|きのう}、ABCデパートにいたでしょう？{見|み}かけたよ。」B「ええ！{気|き}づいたなら{声|こえ}をかけて（　）。」",
      arti: "A: \"Eh, kemarin kamu di toserba ABC, kan? Aku lihat lho.\" B: \"Hah! Kalau sadar, (…) menyapaku.\"",
      optArti: ["kamu kira sudah memberi, ya", "padahal kukira sudah diberi", "seharusnya kamu (menyapa), sayang sekali", "seharusnya minta (disapa), ya"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{妹|いもうと}は、{来月|らいげつ}{初|はじ}めに＿＿ ＿＿ ★ ＿＿そうだ。",
      arti: "Katanya, adik perempuan saya, dengan kesempatan pindahan awal bulan depan, memutuskan membeli sofa yang selama ini ingin dibeli tetapi belum terbeli.",
      optYomi: ["{買|か}えずにいた", "ソファを{買|か}うことにした", "{引|ひ}っ{越|こ}しをするのを{機|き}に", "{今|いま}まで{欲|ほ}しいと{思|おも}いつつ"],
      optArti: ["belum terbeli", "memutuskan membeli sofa", "dengan kesempatan pindahan", "selama ini sambil ingin memiliki"],
    },
    37: {
      yomi: "{私|わたし}の{故郷|こきょう}は、{自然|しぜん}に{囲|かこ}まれたのどかな{所|ところ}＿＿ ＿＿ ★ ＿＿{周|まわ}りに{田|た}んぼしかない、ただの{田舎町|いなかまち}だ。",
      arti: "Kampung halaman saya, kalau disebut tempat damai dikelilingi alam memang terdengar bagus, tetapi singkatnya hanyalah kota desa biasa yang sekelilingnya hanya sawah.",
      optYomi: ["と{言|い}えば", "{要|よう}するに", "{聞|き}こえはいいが", null],
      optArti: ["kalau dikatakan", "singkatnya", "terdengar bagus, tetapi", "adalah"],
    },
    38: {
      yomi: "{入社|にゅうしゃ}2{年目|ねんめ}でプロジェクトのリーダーに{指名|しめい}されたときは＿＿ ＿＿ ★ ＿＿{先輩方|せんぱいがた}の{厳|きび}しくも{温|あたた}かいサポートのおかげで、{無事|ぶじ}に{務|つと}めることができました。",
      arti: "Saat ditunjuk menjadi pemimpin proyek di tahun kedua bekerja, saya penuh kecemasan apakah peran sebesar ini bisa diemban oleh pendatang baru seperti saya, tetapi berkat dukungan para senior yang tegas sekaligus hangat, saya bisa menjalankannya dengan baik.",
      optYomi: ["こんな{大役|たいやく}が", "{新人|しんじん}に{務|つと}まるのかと", "{不安|ふあん}でいっぱいでしたが", "{私|わたし}ごとき"],
      optArti: ["peran sebesar ini", "apakah bisa diemban oleh pendatang baru", "penuh kecemasan, tetapi", "orang seperti saya"],
    },
    39: {
      yomi: "{都市|とし}{開発|かいはつ}{事業|じぎょう}を、{地域|ちいき}{住民|じゅうみん}の{同意|どうい}を{得|え}る＿＿ ＿＿ ★ ＿＿、{北市|きたし}の{住民|じゅうみん}が{市長|しちょう}を{訴|うった}えた。",
      arti: "Warga Kota Kita menggugat wali kota dengan alasan ia menjalankan proyek pembangunan kota tanpa mendapat persetujuan warga setempat.",
      optYomi: [null, null, null, "{進|すす}めた"],
      optArti: ["tanpa", "(nominalisasi)", "dengan alasan", "menjalankan"],
    },
    40: {
      yomi: "{政府|せいふ}が{発表|はっぴょう}した{数字|すうじ}によると、{昨年|さくねん}4{月|がつ}{1日|ついたち}＿＿ ★ ＿＿ ＿＿{一昨年|いっさくねん}と{比|くら}べて15{万|まん}{人|にん}{少|すく}なく、{過去|かこ}{最低|さいてい}となった。",
      arti: "Menurut angka yang diumumkan pemerintah, jumlah penduduk di bawah 15 tahun per 1 April tahun lalu berkurang 150 ribu dibanding tahun sebelumnya, terendah sepanjang sejarah.",
      optYomi: [null, "{現在|げんざい}", null, "15{歳|さい}{未満|みまん}の{人口|じんこう}"],
      optArti: ["(topik)", "per (tanggal)", "pada (saat)", "penduduk di bawah 15 tahun"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{消|け}してもかまわない", "{消|け}せなくて", "{消|け}すように", "{消|け}さないのではないか"],
      optArti: ["boleh dimatikan", "tidak bisa mematikan", "matikanlah (instruksi)", "bukankah tidak dimatikan?"],
    },
    42: {
      optArti: ["orang (si itu)", "mereka itu", "orang seperti itu", "orang-orang seperti itu"],
    },
    43: {
      optArti: ["karena itu", "tetapi", "meskipun begitu", "juga"],
    },
    44: {
      optYomi: ["{外|はず}すべきではなかった", "{外|はず}していないはずだ", "{外|はず}したとは{思|おも}えない", "{外|はず}すわけにもいかない"],
      optArti: ["seharusnya tidak dikeluarkan", "seharusnya belum dikeluarkan", "tak kukira sudah dikeluarkan", "tidak bisa juga dikeluarkan"],
    },
    45: {
      optYomi: ["{励|はげ}ます", "{励|はげ}ましたいのに", "{励|はげ}ますからだ", "{励|はげ}ましただろうか"],
      optArti: ["menyemangati", "padahal ingin menyemangati", "karena menyemangati", "apakah sudah menyemangati?"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{目標|もくひょう}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mengenai tujuan, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{目標|もくひょう}は{必|かなら}ずしも{持|も}たなくてよい。",
        "{目標|もくひょう}は{持|も}っているのが{当然|とうぜん}である。",
        "{目標|もくひょう}は{持|も}ちたいと{思|おも}って{持|も}てるものではない。",
        "{目標|もくひょう}を{持|も}っていても{成功|せいこう}するとは{限|かぎ}らない。",
      ],
      optArti: [
        "Tujuan tidak harus dimiliki.",
        "Memiliki tujuan itu sudah semestinya.",
        "Tujuan bukan sesuatu yang bisa dimiliki hanya karena ingin.",
        "Meski memiliki tujuan, belum tentu berhasil.",
      ],
    },
    47: {
      yomi: "{恥|は}じらいと{喜|よろこ}びの{表情|ひょうじょう}はどの{点|てん}で{違|ちが}うか。",
      arti: "Dalam hal apa ekspresi malu-malu dan ekspresi gembira berbeda?",
      optYomi: [
        "{微笑|ほほえ}みがピークに{達|たっ}するまでの{時間|じかん}が{速|はや}いか{遅|おそ}いか",
        "{微笑|ほほえ}む{直前|ちょくぜん}の{視線|しせん}の{動|うご}きが{上|うえ}か{下|した}か",
        "{視線|しせん}を{伏|ふ}せるのが{微笑|ほほえ}みのピークの{前|まえ}か{後|あと}か",
        "{視線|しせん}を{伏|ふ}せている{時間|じかん}が{長|なが}いか{短|みじか}いか",
      ],
      optArti: [
        "Cepat atau lambatnya waktu sampai senyum mencapai puncak",
        "Gerak pandangan tepat sebelum tersenyum ke atas atau ke bawah",
        "Menundukkan pandangan sebelum atau sesudah puncak senyum",
        "Lama atau singkatnya waktu menundukkan pandangan",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}によると、{本番|ほんばん}に{弱|よわ}いひとはどうすればいいか。",
      arti: "Menurut penulis, apa yang sebaiknya dilakukan orang yang lemah saat momen sesungguhnya?",
      optYomi: [
        "{事前|じぜん}に{描|えが}いた{完成形|かんせいけい}にこだわらず、{現実|げんじつ}に{合|あ}わせて{対応|たいおう}する。",
        "{事前|じぜん}に{完成形|かんせいけい}を{描|えが}かずに、あらゆる{事態|じたい}に{備|そな}える。",
        "{到達|とうたつ}イメージを{意識|いしき}しつつ、{失敗|しっぱい}を{恐|おそ}れない{気持|きも}ちで{臨|のぞ}む。",
        "{精度|せいど}の{高|たか}い{到達|とうたつ}イメージに{行動|こうどう}を{合|あ}わせるようにする。",
      ],
      optArti: [
        "Tidak terpaku pada bentuk sempurna yang dibayangkan sebelumnya, dan menyesuaikan dengan kenyataan.",
        "Tidak membayangkan bentuk sempurna sebelumnya, dan bersiap untuk segala keadaan.",
        "Menghadapinya dengan tidak takut gagal sambil menyadari gambaran pencapaian.",
        "Menyesuaikan tindakan dengan gambaran pencapaian yang sangat akurat.",
      ],
    },
    49: {
      yomi: "{見落|みお}としてしまう{可能性|かのうせい}があるのはなぜか。",
      arti: "Mengapa ada kemungkinan terlewat?",
      optYomi: [
        "{普通|ふつう}{相手|あいて}は{嘘|うそ}をつかないと{思|おも}っているから。",
        "{相手|あいて}を{疑|うたが}うのは{失礼|しつれい}だと{教|おし}えられてきたから。",
        "{嘘|うそ}かどうかを{判断|はんだん}する{基準|きじゅん}を{持|も}つのは{難|むずか}しいから。",
        "{嘘|うそ}を{見|み}つける{有効|ゆうこう}な{手|て}がかりが{見|み}つからないから。",
      ],
      optArti: [
        "Karena biasanya kita mengira lawan bicara tidak berbohong.",
        "Karena kita diajari bahwa mencurigai orang itu tidak sopan.",
        "Karena sulit memiliki standar untuk menilai bohong atau tidak.",
        "Karena tidak ditemukan petunjuk efektif untuk menemukan kebohongan.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{本|ほん}が{売|う}れることについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang buku yang laku?",
      optYomi: [
        "{読|よ}むに{値|あたい}する{本|ほん}だと{保証|ほしょう}されたことになる。",
        "{賞|しょう}を{受賞|じゅしょう}するより{価値|かち}がある{場合|ばあい}もある。",
        "{読者|どくしゃ}の{支持|しじ}を{得|え}たことにはならない。",
        "いい{本|ほん}だと{保証|ほしょう}されるわけではない。",
      ],
      optArti: [
        "Berarti dijamin sebagai buku yang layak dibaca.",
        "Kadang lebih berharga daripada memenangkan penghargaan.",
        "Tidak berarti mendapat dukungan pembaca.",
        "Bukan berarti dijamin sebagai buku yang bagus.",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}によると、{賞|しょう}を{選考|せんこう}する{時|とき}に{必要|ひつよう}な{力|ちから}とはどのようなものか。",
      arti: "Menurut penulis, kemampuan apa yang diperlukan saat menyeleksi penghargaan?",
      optYomi: [
        "よいものを{見極|みきわ}めて{書|か}くことができる{能力|のうりょく}",
        "どのような{作品|さくひん}にもよさを{見|み}いだせる{能力|のうりょく}",
        "{専門|せんもん}{分野|ぶんや}の{作品|さくひん}を{正|ただ}しく{評価|ひょうか}できる{能力|のうりょく}",
        "{専門|せんもん}{分野|ぶんや}{以外|いがい}でもよいものが{見極|みきわ}められる{能力|のうりょく}",
      ],
      optArti: [
        "Kemampuan menilai yang baik lalu menulis",
        "Kemampuan menemukan kebaikan dalam karya apa pun",
        "Kemampuan menilai dengan benar karya di bidang keahlian",
        "Kemampuan menilai yang baik meski di luar bidang keahlian",
      ],
    },
    52: {
      yomi: "{自分|じぶん}が{賞|しょう}をもらったのと、{似|に}たような{嬉|うれ}しさがあるとあるが、なぜか。",
      arti: "Tertulis \"ada kegembiraan yang mirip dengan menerima penghargaan sendiri\"; mengapa?",
      optYomi: [
        "{受賞者|じゅしょうしゃ}と{自分|じぶん}の{価値観|かちかん}が{同|おな}じだとわかったから",
        "{受賞者|じゅしょうしゃ}の{苦労|くろう}に{共感|きょうかん}して{選|えら}んだから",
        "{自分|じぶん}の{価値観|かちかん}が{認|みと}められたと{感|かん}じられるから",
        "{自分|じぶん}が{賞|しょう}を{受|う}けた{時|とき}の{喜|よろこ}びを{思|おも}い{出|だ}すから",
      ],
      optArti: [
        "Karena tahu nilai-nilai penerima penghargaan sama dengan dirinya",
        "Karena memilih dengan bersimpati pada kerja keras penerima",
        "Karena merasa nilai-nilai dirinya diakui",
        "Karena teringat kegembiraan saat dirinya menerima penghargaan",
      ],
    },
    53: {
      yomi: "それは{違|ちが}うとあるが、なぜか。",
      arti: "Tertulis \"itu keliru\"; mengapa?",
      optYomi: [
        "リストラは、{会社|かいしゃ}に{属|ぞく}している{社員|しゃいん}{全員|ぜんいん}のせいだから",
        "リストラは、{会社|かいしゃ}の{意思|いし}で{決|き}めたものだから",
        "リストラは、{良|よ}い{商品|しょうひん}でも{売|う}れない{市場|しじょう}のせいだから",
        "リストラは、{市場|しじょう}の{動向|どうこう}を{反映|はんえい}したものだから",
      ],
      optArti: [
        "Karena PHK adalah kesalahan semua karyawan perusahaan",
        "Karena PHK diputuskan atas kehendak perusahaan",
        "Karena PHK adalah kesalahan pasar yang tidak membeli produk bagus sekalipun",
        "Karena PHK mencerminkan kecenderungan pasar",
      ],
    },
    54: {
      yomi: "{筆者|ひっしゃ}の{会社|かいしゃ}の{給料|きゅうりょう}の{決|き}め{方|かた}はどのようなものか。",
      arti: "Bagaimana cara menentukan gaji di perusahaan penulis?",
      optYomi: [
        "{経営者|けいえいしゃ}ではなく{社員|しゃいん}{同士|どうし}の{評価|ひょうか}で{決|き}まる。",
        "{社員|しゃいん}が{個別|こべつ}に{会社|かいしゃ}と{相談|そうだん}して{決|き}まる。",
        "{社員|しゃいん}が{会社|かいしゃ}に{利益|りえき}をもたらしたかどうかで{決|き}まる。",
        "{会社|かいしゃ}の{利益|りえき}が{増|ふ}えれば{全員|ぜんいん}の{給料|きゅうりょう}が{上|あ}がる。",
      ],
      optArti: [
        "Ditentukan oleh penilaian antarkaryawan, bukan oleh pimpinan.",
        "Ditentukan melalui konsultasi karyawan dengan perusahaan secara individual.",
        "Ditentukan oleh apakah karyawan membawa keuntungan bagi perusahaan.",
        "Jika keuntungan perusahaan naik, gaji semua orang naik.",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}が{会社|かいしゃ}で{働|はたら}く{人|ひと}に{求|もと}めているのはどのようなことか。",
      arti: "Apa yang dituntut penulis dari orang yang bekerja di perusahaan?",
      optYomi: [
        "どうすれば{給料|きゅうりょう}に{見合|みあ}う{働|はたら}きができるかを{考|かんが}え、{主体的|しゅたいてき}に{行動|こうどう}すること。",
        "{会社|かいしゃ}の{利益|りえき}より、いかに{消費者|しょうひしゃ}に{利益|りえき}をもたらすかを{考|かんが}えること。",
        "{会社|かいしゃ}{優先|ゆうせん}の{考|かんが}えを{捨|す}て、どうすれば{社会|しゃかい}に{貢献|こうけん}できるかを{考|かんが}えること。",
        "{会社|かいしゃ}に{守|まも}られているという{考|かんが}えをやめ、{個人|こじん}として{消費者|しょうひしゃ}と{向|む}き{合|あ}うこと。",
      ],
      optArti: [
        "Memikirkan bagaimana bekerja sepadan dengan gaji dan bertindak mandiri.",
        "Memikirkan bagaimana memberi keuntungan bagi konsumen daripada keuntungan perusahaan.",
        "Membuang pikiran mendahulukan perusahaan dan memikirkan bagaimana berkontribusi bagi masyarakat.",
        "Berhenti berpikir dilindungi perusahaan dan menghadapi konsumen sebagai individu.",
      ],
    },
    56: {
      yomi: "①{議論|ぎろん}というゲームのルールとはどのようなルールか。",
      arti: "\"① Aturan permainan bernama diskusi\" itu aturan seperti apa?",
      optYomi: [
        "{相手|あいて}の{意見|いけん}が{根拠|こんきょ}を{伴|ともな}っていたら、{反論|はんろん}してはならない。",
        "{相手|あいて}の{根拠|こんきょ}に{納得|なっとく}できたら、その{意見|いけん}も{認|みと}めなければならない。",
        "{意見|いけん}を{述|の}べるときは「{感|かん}じ」や「{心情|しんじょう}」を{表明|ひょうめい}してはならない。",
        "{自分|じぶん}の{意見|いけん}を{認|みと}めさせたければ、{相手|あいて}の{意見|いけん}も{認|みと}めなければならない。",
      ],
      optArti: [
        "Jika pendapat lawan disertai alasan, tidak boleh dibantah.",
        "Jika bisa menerima alasan lawan, pendapatnya pun harus diakui.",
        "Saat menyatakan pendapat, tidak boleh menyatakan \"kesan\" atau \"perasaan\".",
        "Jika ingin pendapat sendiri diakui, pendapat lawan pun harus diakui.",
      ],
    },
    57: {
      yomi: "②{議論|ぎろん}に{負|ま}けると、{何|なん}だか{悔|くや}しい{感|かん}じになるとあるが、なぜか。",
      arti: "Tertulis \"② kalau kalah berdiskusi, entah kenapa terasa kesal\"; mengapa?",
      optYomi: [
        "{相手|あいて}に{従|したが}わなければならないから",
        "{相手|あいて}が{自分|じぶん}を{見下|みくだ}していると{感|かん}じるから",
        "{自分|じぶん}の{意見|いけん}がうまく{伝|つた}えられないから",
        "{自分|じぶん}の{意見|いけん}に{価値|かち}がないように{感|かん}じるから",
      ],
      optArti: [
        "Karena harus menuruti lawan",
        "Karena merasa lawan memandang rendah dirinya",
        "Karena tidak bisa menyampaikan pendapat dengan baik",
        "Karena merasa pendapatnya tidak bernilai",
      ],
    },
    58: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{議論|ぎろん}は{形式|けいしき}に{従|したが}って{真理|しんり}を{追求|ついきゅう}するものだ。",
        "{議論|ぎろん}は{勝|か}ち{負|ま}けではなく{参加|さんか}することに{意義|いぎ}がある。",
        "「{真理|しんり}の{探求|たんきゅう}」には、{相手|あいて}の{意見|いけん}に{従|したが}うことが{必要|ひつよう}だ。",
        "「{真理|しんり}への{献身|けんしん}」を{実践|じっせん}すれば、{議論|ぎろん}に{勝|か}てるものだ。",
      ],
      optArti: [
        "Diskusi adalah mengejar kebenaran sesuai bentuk (aturan)nya.",
        "Makna diskusi terletak pada ikut serta, bukan menang-kalah.",
        "Untuk \"mencari kebenaran\", perlu menuruti pendapat lawan.",
        "Jika mempraktikkan \"pengabdian pada kebenaran\", pasti menang berdiskusi.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "タレントが{私|し}{生活|せいかつ}を{自分|じぶん}からマスメディアに{公表|こうひょう}することに{対|たい}して、{一般|いっぱん}の{人|ひと}びとの{間|あいだ}にはどのような{意見|いけん}があると{筆者|ひっしゃ}は{述|の}べているか。",
      arti: "Menurut penulis, pendapat apa yang ada di masyarakat umum terhadap selebritas yang mengumumkan sendiri kehidupan pribadinya ke media massa?",
      optYomi: [
        "プライバシーに{対|たい}する{姿勢|しせい}が{一貫|いっかん}していない。",
        "プライバシー{保護|ほご}の{流|なが}れに{逆行|ぎゃっこう}していて{好|この}ましくない。",
        "マスメディアに{都合|つごう}よく{利用|りよう}されているだけだ。",
        "マスメディアを{利用|りよう}した{情報|じょうほう}は{信|しん}じることができない。",
      ],
      optArti: [
        "Sikap mereka terhadap privasi tidak konsisten.",
        "Bertentangan dengan arus perlindungan privasi sehingga tidak baik.",
        "Mereka hanya dimanfaatkan media massa demi kepentingannya.",
        "Informasi yang memanfaatkan media massa tidak bisa dipercaya.",
      ],
    },
    60: {
      yomi: "{筆者|ひっしゃ}は、なぜタレントは{自分|じぶん}から{私|し}{生活|せいかつ}を{公表|こうひょう}するようになったと{考|かんが}えているか。",
      arti: "Menurut penulis, mengapa selebritas mulai mengumumkan sendiri kehidupan pribadinya?",
      optYomi: [
        "{多|おお}くの{情報|じょうほう}を{公表|こうひょう}することで{世間|せけん}にさらに{注目|ちゅうもく}されたいから",
        "プライバシーを{守|まも}っても{自分|じぶん}の{宣伝|せんでん}にならないと{考|かんが}えたから",
        "{他人|たにん}に{勝手|かって}なイメージをつくられるのを{未然|みぜん}に{防|ふせ}ぎたいから",
        "{自分|じぶん}のすべてを{公表|こうひょう}すれば{自分|じぶん}を{正|ただ}しく{理解|りかい}してもらえると{考|かんが}えたから",
      ],
      optArti: [
        "Karena ingin lebih diperhatikan publik dengan mengumumkan banyak informasi",
        "Karena berpikir menjaga privasi tidak menjadi promosi diri",
        "Karena ingin mencegah sebelumnya terbentuknya citra seenaknya oleh orang lain",
        "Karena berpikir jika mengumumkan semua tentang diri, mereka akan dipahami dengan benar",
      ],
    },
    61: {
      yomi: "{強力|きょうりょく}な{情報|じょうほう}{発信|はっしん}ツールとあるが、{筆者|ひっしゃ}はなぜ{強力|きょうりょく}だと{考|かんが}えるのか。",
      arti: "Tertulis \"alat penyebar informasi yang kuat\"; mengapa penulis menganggapnya kuat?",
      optYomi: [
        "{自身|じしん}の{伝|つた}えたいイメージが{確実|かくじつ}に{伝|つた}わっていくから",
        "{自身|じしん}についての{情報|じょうほう}を{自力|じりき}で{世|よ}の{中|なか}に{発信|はっしん}できるから",
        "マスメディアより{多|おお}くの{人|ひと}びとに{情報|じょうほう}を{発信|はっしん}できるから",
        "マスメディアによる{自身|じしん}のよくないイメージを{消|け}せるから",
      ],
      optArti: [
        "Karena citra yang ingin disampaikan pasti tersampaikan",
        "Karena bisa menyebarkan informasi tentang diri sendiri ke dunia dengan kekuatan sendiri",
        "Karena bisa menyebarkan informasi kepada lebih banyak orang daripada media massa",
        "Karena bisa menghapus citra buruk diri yang dibuat media massa",
      ],
    },
    62: {
      yomi: "{現代|げんだい}{社会|しゃかい}における＜{私|わたし}づくり＞について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang \"pembentukan diri\" dalam masyarakat modern?",
      optYomi: [
        "＜{私|わたし}づくり＞において、{人|ひと}は{主体的|しゅたいてき}であろうとする。",
        "＜{私|わたし}づくり＞において、{個人|こじん}の{人権|じんけん}が{守|まも}られるようになった。",
        "＜{私|わたし}づくり＞の{主導権|しゅどうけん}が{他人|たにん}に{奪|うば}われてしまっている。",
        "＜{私|わたし}づくり＞の{主導権|しゅどうけん}を{自身|じしん}のもとに{引|ひ}き{戻|もど}すことはできない。",
      ],
      optArti: [
        "Dalam pembentukan diri, orang berusaha bersikap mandiri.",
        "Dalam pembentukan diri, hak asasi individu kini terlindungi.",
        "Kendali atas pembentukan diri telah dirampas orang lain.",
        "Kendali atas pembentukan diri tidak bisa ditarik kembali ke tangan sendiri.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{絵|え}を{描|か}くことについて、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang menggambar?",
      optYomi: [
        "AもBも、{描|か}くことと{写|うつ}すことの{違|ちが}いを{知|し}ることが{大切|たいせつ}だと{述|の}べている。",
        "AもBも、{途中|とちゅう}であきらめないで、{最後|さいご}まで{描|か}くことが{大切|たいせつ}だと{述|の}べている。",
        "Aは{正確|せいかく}さにこだわりすぎないほうがいいと{述|の}べ、Bは{対象|たいしょう}をよく{見|み}て{考|かんが}えながら{描|か}くことが{大切|たいせつ}だと{述|の}べている。",
        "Aは{自身|じしん}が{描|か}きたいように{描|か}けばいいと{述|の}べ、Bは{多|おお}くの{絵|え}を{描|か}くより{一|ひと}つ{一|ひと}つを{丁寧|ていねい}に{描|か}いたほうがいいと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan penting mengetahui beda menggambar dan menyalin.",
        "A dan B sama-sama menyatakan penting tidak menyerah di tengah jalan dan menggambar sampai selesai.",
        "A menyatakan sebaiknya tidak terlalu terpaku pada ketepatan; B menyatakan penting mengamati objek baik-baik dan menggambar sambil berpikir.",
        "A menyatakan cukup menggambar sesuai keinginan sendiri; B menyatakan lebih baik menggambar satu per satu dengan teliti daripada banyak.",
      ],
    },
    64: {
      yomi: "AとBの{認識|にんしき}で{共通|きょうつう}していることは{何|なに}か。",
      arti: "Apa kesamaan pandangan A dan B?",
      optYomi: [
        "{個性|こせい}が{感|かん}じられる{絵|え}が{優|すぐ}れた{絵|え}だといえる。",
        "{自身|じしん}だけでなく{周|まわ}りも{楽|たの}しめる{絵|え}を{描|か}くべきだ。",
        "{誰|だれ}でも{絵|え}が{上手|じょうず}に{描|か}けるようになる。",
        "{楽|たの}しむ{気持|きも}ちを{持|も}って{絵|え}を{描|か}くべきだ。",
      ],
      optArti: [
        "Gambar yang terasa kepribadiannya adalah gambar yang unggul.",
        "Harus menggambar sesuatu yang bisa dinikmati tidak hanya oleh diri sendiri tetapi juga orang sekitar.",
        "Siapa pun bisa menjadi pandai menggambar.",
        "Harus menggambar dengan perasaan menikmati.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "{親方|おやかた}や{先輩|せんぱい}が{技|わざ}を{言葉|ことば}で{教|おし}えなかったのはなぜか。",
      arti: "Mengapa guru dan senior tidak mengajarkan teknik dengan kata-kata?",
      optYomi: [
        "{技|わざ}を{伝|つた}える{言葉|ことば}を{理解|りかい}させられないから",
        "{技|わざ}は{言葉|ことば}では{十分|じゅうぶん}{伝|つた}えられないから",
        "{技|わざ}は{言葉|ことば}で{伝|つた}えても{身|み}につかないから",
        "{技|わざ}は{時間|じかん}がたてば{自然|しぜん}に{身|み}につくものだから",
      ],
      optArti: [
        "Karena tidak bisa membuat murid memahami kata-kata yang menyampaikan teknik",
        "Karena teknik tidak bisa cukup disampaikan dengan kata-kata",
        "Karena teknik meski disampaikan dengan kata-kata tidak akan dikuasai",
        "Karena teknik akan dikuasai dengan sendirinya seiring waktu",
      ],
    },
    66: {
      yomi: "①{努力|どりょく}を{惜|お}しまなかったのはなぜか。",
      arti: "Mengapa \"① tidak segan berusaha\"?",
      optYomi: [
        "{努力|どりょく}を{積|つ}み{重|かさ}ねなければ、{辛|つら}さが{喜|よろこ}びに{変|か}わらないから",
        "{努力|どりょく}を{積|つ}み{重|かさ}ねれば、{報|むく}われた{時|とき}の{喜|よろこ}びが{大|おお}きくなるから",
        "{努力|どりょく}をして{腕|うで}を{上|あ}げれば、{利益|りえき}が{出|で}るから",
        "{努力|どりょく}をし{続|つづ}けなければ、{目指|めざ}すものに{近|ちか}づけないから",
      ],
      optArti: [
        "Karena jika usaha tidak ditumpuk, kesulitan tidak berubah menjadi kegembiraan",
        "Karena jika usaha ditumpuk, kegembiraan saat terbalas menjadi besar",
        "Karena jika berusaha dan meningkatkan keterampilan, keuntungan akan didapat",
        "Karena jika tidak terus berusaha, tidak bisa mendekati yang dituju",
      ],
    },
    67: {
      yomi: "②{時代|じだい}は{変|か}わったとあるが、{人|ひと}の{働|はたら}き{方|かた}はどう{変|か}わったのか。",
      arti: "Tertulis \"② zaman telah berubah\"; bagaimana cara orang bekerja berubah?",
      optYomi: [
        "{修業|しゅぎょう}に{努力|どりょく}が{求|もと}められなくなった。",
        "{技|わざ}を{習得|しゅうとく}することが{必要|ひつよう}とされなくなった。",
        "{機械|きかい}の{出現|しゅつげん}で{効率的|こうりつてき}に{修業|しゅぎょう}ができるようになった。",
        "{誰|だれ}もが{機械|きかい}に{精通|せいつう}することを{求|もと}められるようになった。",
      ],
      optArti: [
        "Usaha tidak lagi dituntut dalam latihan.",
        "Menguasai teknik tidak lagi dianggap perlu.",
        "Dengan munculnya mesin, latihan bisa dilakukan dengan efisien.",
        "Semua orang dituntut menguasai mesin.",
      ],
    },
    68: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{生|い}きづらい{社会|しゃかい}であっても、{誇|ほこ}りを{持|も}って{生|い}きていこう。",
        "{修業|しゅぎょう}を{通|とお}して{働|はたら}く{意味|いみ}と{喜|よろこ}びを{得|え}られた{時代|じだい}に{戻|もど}るべきだ。",
        "{時代|じだい}が{変|か}わっても、{働|はたら}く{意味|いみ}と{喜|よろこ}びを{見|み}つけて{生|い}きていこう。",
        "{働|はたら}く{意味|いみ}や{喜|よろこ}びを{大切|たいせつ}にしながら、{効率|こうりつ}を{追求|ついきゅう}していくべきだ。",
      ],
      optArti: [
        "Meski masyarakatnya sulit untuk hidup, mari hidup dengan bangga.",
        "Kita harus kembali ke zaman ketika makna dan kegembiraan bekerja didapat melalui latihan.",
        "Meski zaman berubah, mari hidup dengan menemukan makna dan kegembiraan bekerja.",
        "Kita harus mengejar efisiensi sambil menghargai makna dan kegembiraan bekerja.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "ナイニさんは1{年|ねん}を{通|つう}じて{花|はな}の{世話|せわ}をするボランティアに{参加|さんか}したいと{考|かんが}えている。{参加|さんか}するためには、どうしなければならないか。",
      arti: "Naini-san ingin ikut sebagai relawan yang merawat bunga sepanjang tahun. Apa yang harus ia lakukan agar bisa ikut?",
      optYomi: [
        "3{月|がつ}8{日|か}の1{週間|しゅうかん}{前|まえ}までに{申|もう}し{込|こ}み、3{月|がつ}8{日|か}か9{日|か}の{説明会|せつめいかい}に{参加|さんか}する。",
        "3{月|がつ}8{日|か}の1{週間|しゅうかん}{前|まえ}までに{申|もう}し{込|こ}み、3{月|がつ}15{日|にち}と16{日|にち}の{説明会|せつめいかい}に{参加|さんか}する。",
        "3{月|がつ}15{日|にち}の1{週間|しゅうかん}{前|まえ}までに{申|もう}し{込|こ}み、3{月|がつ}15{日|にち}か16{日|にち}の{説明会|せつめいかい}に{参加|さんか}する。",
        "3{月|がつ}15{日|にち}の1{週間|しゅうかん}{前|まえ}までに{申|もう}し{込|こ}み、3{月|がつ}15{日|にち}と16{日|にち}の{説明会|せつめいかい}に{参加|さんか}する。",
      ],
      optArti: [
        "Mendaftar paling lambat seminggu sebelum 8 Maret, lalu ikut sesi penjelasan 8 atau 9 Maret.",
        "Mendaftar paling lambat seminggu sebelum 8 Maret, lalu ikut sesi penjelasan 15 dan 16 Maret.",
        "Mendaftar paling lambat seminggu sebelum 15 Maret, lalu ikut sesi penjelasan 15 atau 16 Maret.",
        "Mendaftar paling lambat seminggu sebelum 15 Maret, lalu ikut sesi penjelasan 15 dan 16 Maret.",
      ],
    },
    70: {
      yomi: "フリオさんはボランティア①に{参加|さんか}し、さらに、ボランティア③の{夏祭|なつまつ}りのボランティアとしても{参加|さんか}するつもりだ。その{場合|ばあい}、{夏祭|なつまつ}り{当日|とうじつ}にしなければならないこととして{合|あ}っているのはどれか。",
      arti: "Julio-san ikut relawan ①, dan juga berniat ikut sebagai relawan festival musim panas di relawan ③. Dalam hal itu, mana yang benar sebagai hal yang harus dilakukan pada hari festival musim panas?",
      optYomi: [
        "イベント{開始|かいし}2{時間|じかん}{前|まえ}に{公園|こうえん}に{行|い}く。",
        "イベント{開始|かいし}2{時間|じかん}{前|まえ}に{公園|こうえん}に{行|い}き、ボランティア{登録|とうろく}{費用|ひよう}50{円|えん}を{支払|しはら}う。",
        "イベント{開始|かいし}{時間|じかん}に{公園|こうえん}に{行|い}く。",
        "イベント{開始|かいし}{時間|じかん}に{公園|こうえん}に{行|い}き、ボランティア{登録|とうろく}{費用|ひよう}50{円|えん}を{支払|しはら}う。",
      ],
      optArti: [
        "Pergi ke taman 2 jam sebelum acara dimulai.",
        "Pergi ke taman 2 jam sebelum acara dimulai, dan membayar biaya pendaftaran relawan 50 yen.",
        "Pergi ke taman pada jam acara dimulai.",
        "Pergi ke taman pada jam acara dimulai, dan membayar biaya pendaftaran relawan 50 yen.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：横暴な小説係 ──
    "7": {
      yomi: `{以下|いか}は、{作家|さっか}が{書|か}いた{文章|ぶんしょう}である。

マルチタスク（{注|ちゅう}1）という{言葉|ことば}が{世|よ}の{中|なか}に{行|い}き{渡|わた}るようになって{久|ひさ}しいけれども、{自分|じぶん}{自身|じしん}の{実態|じったい}には{程遠|ほどとお}い{身|み}の{処|しょ}し{方|かた}である。いや、テレビをつけながら、{傍|かたわ}らに{読|よ}みかけの{文庫本|ぶんこぼん}を{置|お}き、{上|うわ}の{空|そら}（{注|ちゅう}2）でスマートフォンを{眺|なが}めつつ、{晩|ばん}ごはんは{何|なに}にしようか、と{考|かんが}えているようなことはたくさんある。そういうことをやたらしてしまうために、わたしは、{自分|じぶん}が{同時|どうじ}にいろんなことをやるとすべての{物事|ものごと}の{達成率|たっせいりつ}が{著|いちじる}しく{下|さ}がってしまっていることを{熟知|じゅくち}している。

なので{以前|いぜん}、{自分|じぶん}しか{見|み}ないメモ{帳|ちょう}には、{分別|ふんべつ}のある{自分|じぶん}が「スマホを{見|み}るときはテレビを[41]」と{書|か}いていた。{守|まも}ったり、{守|まも}らなかったりだ。

{一日|いちにち}のうちに、いろいろな{自分|じぶん}が{出没|しゅつぼつ}しては{退場|たいじょう}していく。{家事|かじ}をしている{自分|じぶん}、{風呂|ふろ}で{休|やす}んでいる{自分|じぶん}、テレビを{見|み}たり{本|ほん}を{読|よ}んだりと{娯楽|ごらく}に{接|せっ}している{自分|じぶん}、そして{仕事|しごと}をしている{自分|じぶん}など。それぞれに{淡々|たんたん}とがんばっているが、{中|なか}にはひどい[42]もいる。

わたしがいちばん{持|も}て{余|あま}しているのは「{小説|しょうせつ}を{書|か}く{係|かかり}の{自分|じぶん}」である。それを{職業|しょくぎょう}にしているのに{身|み}も{蓋|ふた}もない{情|なさ}けない{話|はなし}なのだが、{本当|ほんとう}にこいつは{扱|あつか}いにくい。ゲラ（{校正紙|こうせいし}）を{見|み}る{係|かかり}は{心配性|しんぱいしょう}なので{一日|いちにち}のノルマを{超|こ}えて{仕事|しごと}をしたりもするし、{書評|しょひょう}{係|がかり}などは、{真面目|まじめ}すぎて{気|き}の{毒|どく}なぐらい{考|かんが}え{込|こ}む{時|とき}がある。{随筆|ずいひつ}{係|がかり}は、ぐずぐずしたところはあるが、そんなに{時間帯|じかんたい}や{備品|びひん}のコンディションは{問|と}わない。

[43]、{小説|しょうせつ}{係|がかり}は「まずお{茶|ちゃ}とお{菓子|かし}だ」などと{要求|ようきゅう}し、{真夜中|まよなか}でないと{仕事|しごと}はしないとわがままである。しかもすぐに{気|き}が{散|ち}って、{動物|どうぶつ}の{画像|がぞう}を{検索|けんさく}したがる。そして{落|お}ち{込|こ}みやすい。「{文筆|ぶんぴつ}{課|か}の{他|ほか}の{係|かかり}を{見習|みなら}えよ」とわたしは{思|おも}う。しかし、この{係|かかり}を{中心|ちゅうしん}に{結成|けっせい}された{文筆|ぶんぴつ}{課|か}なので、{今更|いまさら}{組織図|そしきず}から[44]。

ダメな{社内|しゃない}ベンチャーのようなものである。{今日|きょう}もわたしは、{小説|しょうせつ}{係|がかり}のためにお{茶|ちゃ}を{作|つく}り、お{菓子|かし}を{調達|ちょうたつ}し、「とにかく{書|か}かないと{出来|でき}{不出来|ふでき}はわからないよ」と[45]。

（{注|ちゅう}1）マルチタスク：{複数|ふくすう}の{作業|さぎょう}を{同時|どうじ}に{処理|しょり}すること
（{注|ちゅう}2）{上|うわ}の{空|そら}：{集中|しゅうちゅう}できていない{状態|じょうたい}`,
      arti: `Berikut ini adalah tulisan seorang pengarang.

Sudah lama kata multitasking (catatan 1) tersebar luas di masyarakat, tetapi itu cara bersikap yang jauh dari keadaan saya yang sebenarnya. Eh, memang banyak juga saat saya menyalakan TV, menaruh buku saku yang sedang dibaca di samping, memandangi ponsel dengan pikiran melayang (catatan 2), sambil memikirkan mau makan malam apa. Karena saya terlalu sering melakukan hal begitu, saya sangat paham bahwa kalau saya mengerjakan banyak hal sekaligus, tingkat penyelesaian semuanya turun drastis.

Karena itu dulu, di buku catatan yang hanya saya sendiri yang membaca, diri saya yang berakal sehat menulis, "Saat melihat ponsel, [41] TV." Kadang saya patuhi, kadang tidak.

Dalam sehari, berbagai diri saya muncul lalu pergi. Diri yang mengerjakan pekerjaan rumah, diri yang bersantai di bak mandi, diri yang menikmati hiburan seperti menonton TV atau membaca buku, dan diri yang bekerja. Masing-masing berusaha dengan tenang, tetapi ada juga [42] yang parah.

Yang paling merepotkan saya adalah "diri yang bertugas menulis novel". Memalukan dan tak ada gunanya diceritakan karena itulah profesi saya, tetapi sungguh si ini sulit diatur. Petugas yang memeriksa cetak coba (proof) itu mudah cemas, jadi kadang bekerja melebihi target harian; petugas ulasan buku kadang terlalu serius sampai merenung hingga kasihan. Petugas esai memang agak lamban, tetapi tidak terlalu mempersoalkan jam kerja atau kondisi perlengkapan.

[43] petugas novel menuntut "teh dan kue dulu", dan egois tidak mau bekerja kecuali tengah malam. Lagi pula ia mudah buyar konsentrasinya dan ingin mencari gambar binatang. Dan mudah terpuruk. "Tirulah petugas lain di bagian penulisan," pikir saya. Tetapi bagian penulisan ini dibentuk dengan petugas ini sebagai pusatnya, jadi sekarang pun [44] dari bagan organisasi.

Mirip usaha rintisan internal perusahaan yang gagal. Hari ini pun saya membuat teh untuk petugas novel, mengadakan kue, dan [45], "Pokoknya kalau tidak ditulis, tidak akan ketahuan bagus atau tidaknya."

(Catatan 1) マルチタスク: memproses beberapa pekerjaan sekaligus
(Catatan 2) 上の空: keadaan tidak fokus`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{人生|じんせい}やビジネスに{目標|もくひょう}を{持|も}つべきだ、というようなことが{最近|さいきん}よく{言|い}われるが、わたしはそういう{言|い}い{方|かた}に{違和感|いわかん}を{覚|おぼ}える。{目標|もくひょう}というものは、「{持|も}つべきだ」とか「{持|も}ったほうがいい」ものではなく、「{持|も}たなければいけない」とわざわざ{啓蒙|けいもう}するものでもない。{人生|じんせい}のあらゆる{局面|きょくめん}における「{前提|ぜんてい}」なので、そのことがコンセンサス（{注|ちゅう}）になっている{社会|しゃかい}では、{目標|もくひょう}を{持|も}つことについて{語|かた}られることはないからだ。
（{注|ちゅう}）コンセンサス：ここでは、{共通|きょうつう}の{理解|りかい}`,
      arti: `Akhir-akhir ini sering dikatakan bahwa kita harus memiliki tujuan dalam hidup dan bisnis, tetapi saya merasa janggal dengan ungkapan seperti itu. Tujuan bukan sesuatu yang "harus dimiliki" atau "sebaiknya dimiliki", juga bukan sesuatu yang perlu repot-repot diajarkan "wajib dimiliki". Sebab tujuan adalah "prasyarat" dalam setiap tahap kehidupan, sehingga dalam masyarakat yang menjadikan hal itu kesepakatan bersama (catatan), memiliki tujuan tidak pernah dibicarakan.
(Catatan) コンセンサス: di sini, pemahaman bersama`,
    },
    "8-2": {
      yomi: `{以下|いか}は、{恥|は}じらい（{注|ちゅう}）の{表情|ひょうじょう}と{喜|よろこ}びの{表情|ひょうじょう}の{違|ちが}いについて{述|の}べた{文章|ぶんしょう}である。

{心理|しんり}{学者|がくしゃ}のアゼンドルフは、{恥|は}じらいと{喜|よろこ}びの{表情|ひょうじょう}をいろいろ{集|あつ}めて{分析|ぶんせき}した{結果|けっか}、{微笑|ほほえ}みが{最高潮|さいこうちょう}に{達|たっ}する{時期|じき}と{視線|しせん}を{伏|ふ}せる{時期|じき}との{微妙|びみょう}なタイミングのズレが{鍵|かぎ}であることを{突|つ}き{止|と}めた。すなわち、{微笑|ほほえ}みがピークに{達|たっ}する{一秒|いちびょう}ほど{前|まえ}に{視線|しせん}が{伏|ふ}せられると{恥|は}じらいの{表情|ひょうじょう}として{見|み}えるが、ピークに{達|たっ}した{直後|ちょくご}に{目|め}が{伏|ふ}せられるとそれは{喜|よろこ}びの{表情|ひょうじょう}と{判断|はんだん}されるというのだ。

{試|ため}しに、{鏡|かがみ}に{向|む}かってやってみていただきたい。{違|ちが}いが{分|わ}かるだろう。
（{注|ちゅう}）{恥|は}じらい：{恥|は}ずかしがること`,
      arti: `Berikut ini adalah tulisan tentang perbedaan ekspresi malu-malu (catatan) dan ekspresi gembira.

Psikolog Asendorpf mengumpulkan dan menganalisis berbagai ekspresi malu-malu dan gembira, lalu menemukan bahwa kuncinya adalah selisih waktu yang halus antara saat senyum mencapai puncak dan saat pandangan ditundukkan. Yaitu, jika pandangan ditundukkan sekitar satu detik sebelum senyum mencapai puncak, itu terlihat sebagai ekspresi malu-malu, tetapi jika mata ditundukkan tepat setelah mencapai puncak, itu dinilai sebagai ekspresi gembira.

Cobalah di depan cermin. Anda pasti bisa melihat bedanya.
(Catatan) 恥じらい: merasa malu`,
    },
    "8-3": {
      yomi: `「{今|いま}」の{勝負|しょうぶ}、つまり{本番|ほんばん}に{弱|よわ}いというひとは、{失敗|しっぱい}を{恐|おそ}れる{気持|きも}ちが{強|つよ}いのだとおもう。{誰|だれ}しも{失敗|しっぱい}は{望|のぞ}まないが、{人並|ひとな}み{以上|いじょう}に{失敗|しっぱい}を{恐|おそ}れるのは、{皮肉|ひにく}にも{精度|せいど}の{高|たか}い{到達|とうたつ}イメージ、{完成形|かんせいけい}が{描|えが}けている{結果|けっか}だともいえる。

{完全|かんぜん}なものへの{願望|がんぼう}は{融通|ゆうずう}に{欠|か}ける{到達|とうたつ}のイメージでひとを{縛|しば}ってしまうので、「{今|いま}」{起|お}こっている{現実|げんじつ}そのものに{合|あ}わせていくという{柔軟|じゅうなん}な{態度|たいど}をゆるさない。{予定|よてい}どおりでないにしろ、その{場|ば}で、なんとかやり{過|す}ごせる（{注|ちゅう}）、{間|ま}に{合|あ}わせられる、という{行動|こうどう}が{本番|ほんばん}では{求|もと}められているのだ。
（{注|ちゅう}）やり{過|す}ごす：ここでは、{切|き}り{抜|ぬ}ける`,
      arti: `Saya rasa orang yang lemah dalam pertarungan "saat ini", yaitu saat momen sesungguhnya, punya rasa takut gagal yang kuat. Siapa pun tidak ingin gagal, tetapi takut gagal melebihi orang lain, ironisnya, bisa dikatakan akibat sudah mampu membayangkan gambaran pencapaian dan bentuk sempurna yang sangat akurat.

Keinginan akan kesempurnaan mengikat orang dengan gambaran pencapaian yang kaku, sehingga tidak membiarkan sikap luwes untuk menyesuaikan diri dengan kenyataan yang terjadi "saat ini". Pada momen sesungguhnya, yang dituntut adalah tindakan untuk entah bagaimana bisa melewati (catatan) dan menyiasati situasi di tempat itu, meskipun tidak sesuai rencana.
(Catatan) やり過ごす: di sini, melewati/mengatasi`,
    },
    "8-4": {
      yomi: `{日頃|ひごろ}の{他者|たしゃ}とのつきあいでは、{相手|あいて}の{一言一言|ひとことひとこと}が{嘘|うそ}だと{疑|うたが}ってかかっているわけではない。いちいちそんなふうに{接|せっ}したら{失礼|しつれい}にあたる。つまり「{性善説|せいぜんせつ}」（{注|ちゅう}）をデフォルト（{基本|きほん}）として{相手|あいて}と{接|せっ}するのが{普通|ふつう}だろう。{相手|あいて}の{発言|はつげん}は{真実|しんじつ}だと{思|おも}ってそれを{基準|きじゅん}に{判断|はんだん}するから、それを{嘘|うそ}だろうと{見直|みなお}すのは{難|むずか}しい。そうすると、{仮|かり}に{多少|たしょう}{不自然|ふしぜん}な{言|い}い{方|かた}やしぐさがあったとしても、そしてそれが{実際|じっさい}に{嘘|うそ}の{手|て}がかりとして{有効|ゆうこう}であったとしても、{見落|みお}としてしまう{可能性|かのうせい}がある。
（{注|ちゅう}）{性善説|せいぜんせつ}：{人間|にんげん}は{生|う}まれつき{善|よ}い{人|ひと}だという{考|かんが}え{方|かた}`,
      arti: `Dalam pergaulan sehari-hari dengan orang lain, kita tidak mencurigai setiap kata lawan bicara sebagai kebohongan. Kalau setiap kali bersikap begitu, itu tidak sopan. Artinya, biasanya kita bergaul dengan orang dengan "pandangan bahwa manusia pada dasarnya baik" (catatan) sebagai bawaan (default). Karena kita menilai dengan anggapan bahwa ucapan lawan itu benar, sulit meninjau ulang dan menganggapnya bohong. Akibatnya, sekalipun ada cara bicara atau gerak-gerik yang agak tidak wajar, dan sekalipun itu sebenarnya petunjuk yang efektif untuk kebohongan, ada kemungkinan terlewat.
(Catatan) 性善説: pandangan bahwa manusia sejak lahir adalah baik`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{書|か}いたものが{売|う}れれば、それでいちおう{報|むく}われる。{多|おお}くの{読者|どくしゃ}の{支持|しじ}があったということだからである。{贅沢|ぜいたく}を{言|い}うようだが、それだけでは、{何|なん}だか{心|こころ}もとない（{注|ちゅう}）。{売|う}れるということには、{様々|さまざま}な{意味合|いみあ}いがある。いい{本|ほん}だから{売|う}れるとは{限|かぎ}らないし、{売|う}れたからいい{本|ほん}だとも{言|い}えない。

そこに{賞|しょう}の{意味|いみ}がある。{売|う}れようが{売|う}れまいが、これはいい{本|ほん}ですよ。それがある{程度|ていど}{保証|ほしょう}される。お{金|かね}とは{違|ちが}った{価値観|かちかん}がそこに{示|しめ}される。

{私|わたし}はいくつかの{賞|しょう}の{選考|せんこう}に{関係|かんけい}している。{賞|しょう}をいただくより、{賞|しょう}を{選考|せんこう}する{方|ほう}が{好|す}きかもしれない。{書|か}く{場合|ばあい}には、{自分|じぶん}の{力量|りきりょう}が{問|と}われる。しかし、{選考|せんこう}する{場合|ばあい}には、{自分|じぶん}の{目|め}が{問|と}われる。{目|め}が{悪|わる}いと、{何|なに}もかも{同|おな}じに{見|み}える。{違|ちが}いがわからないのである。その{意味|いみ}では{美術品|びじゅつひん}、{骨董品|こっとうひん}の{評価|ひょうか}と{同|おな}じであろう。

{書|か}く{時|とき}には、ある{専門|せんもん}{分野|ぶんや}について、{力|ちから}があればいい。でも{選考|せんこう}する{時|とき}には、それだけでは{不足|ふそく}であろう。どのような{分野|ぶんや}であれ、よいものとは{何|なに}か、それを{見極|みきわ}める{目|め}が{要求|ようきゅう}される。その{代|か}わりに、{専門|せんもん}{分野|ぶんや}について、{必|かなら}ずしも{詳|くわ}しい{必要|ひつよう}はない。

（{中略|ちゅうりゃく}）

{選考|せんこう}する{時|とき}の{喜|よろこ}びは、{複数|ふくすう}の{選考|せんこう}{委員|いいん}が{同|おな}じ{著作|ちょさく}を{本音|ほんね}で{選|えら}んだ{時|とき}である。{自分|じぶん}もそれを{支持|しじ}している{時|とき}には、{自分|じぶん}が{賞|しょう}をもらったのと、{似|に}たような{嬉|うれ}しさがある。{賞|しょう}を{受|う}けた{人|ひと}の{喜|よろこ}びが、まさに{他人事|ひとごと}ではなくなるのである。このあたりの{心理|しんり}が、なかなかおもしろい。

{選考|せんこう}する{側|がわ}も、{常|つね}に{自分|じぶん}の{価値観|かちかん}を{問|と}われている。{推薦|すいせん}した{作品|さくひん}が{受賞|じゅしょう}するのは、その{価値観|かちかん}がいわば{受賞|じゅしょう}することだともいえよう。
（{注|ちゅう}）{心|こころ}もとない：{頼|たよ}りない`,
      arti: `Jika tulisan kita laku, kurang lebih itu sudah menjadi balasan. Sebab artinya ada dukungan dari banyak pembaca. Kedengarannya serakah, tetapi itu saja rasanya agak kurang meyakinkan (catatan). Laku itu punya berbagai makna. Belum tentu buku laku karena bagus, dan juga tidak bisa dikatakan bagus karena laku.

Di situlah makna penghargaan. Laku atau tidak laku, "ini buku yang bagus." Hal itu dijamin sampai batas tertentu. Di sana ditunjukkan nilai yang berbeda dari uang.

Saya terlibat dalam seleksi beberapa penghargaan. Mungkin saya lebih suka menyeleksi penghargaan daripada menerimanya. Saat menulis, yang diuji adalah kemampuan saya. Tetapi saat menyeleksi, yang diuji adalah mata saya. Kalau matanya buruk, semuanya tampak sama. Tidak bisa melihat bedanya. Dalam arti itu, mungkin sama dengan menilai karya seni dan barang antik.

Saat menulis, cukup punya kemampuan di bidang keahlian tertentu. Tetapi saat menyeleksi, itu saja mungkin tidak cukup. Bidang apa pun, dituntut mata untuk menilai apa itu sesuatu yang baik. Sebagai gantinya, tidak harus menguasai bidang keahlian secara mendalam.

(dipersingkat)

Kegembiraan saat menyeleksi adalah ketika beberapa juri dengan jujur memilih karya yang sama. Ketika saya juga mendukungnya, ada kegembiraan yang mirip dengan menerima penghargaan sendiri. Kegembiraan penerima penghargaan benar-benar bukan lagi urusan orang lain. Psikologi semacam ini cukup menarik.

Pihak penyeleksi pun selalu diuji nilai-nilainya. Bisa dikatakan, karya yang direkomendasikan memenangkan penghargaan berarti nilai-nilai itulah yang seakan-akan memenangkan penghargaan.
(Catatan) 心もとない: kurang meyakinkan`,
    },
    "9-2": {
      yomi: `{企業|きぎょう}が{利益|りえき}を{確保|かくほ}するために{社員|しゃいん}を{捨|す}てる、{整理|せいり}するというのは{市場|しじょう}の{意思|いし}です。リストラに{遭|あ}った{人|ひと}は、{自分|じぶん}の{会社|かいしゃ}を{恨|うら}んだり、{文句|もんく}を{言|い}ったりしますが、それは{違|ちが}う。{厳|きび}しい{言|い}い{方|かた}をすれば、{消費者|しょうひしゃ}があなたの{会社|かいしゃ}の{商品|しょうひん}を{買|か}わない、つまりあなたの{給料|きゅうりょう}は{払|はら}えないと{言|い}っているわけです。

{会社|かいしゃ}という{堅牢|けんろう}（{注|ちゅう}1）な{箱|はこ}で{守|まも}られていると{考|かんが}えてはいけない。{社員|しゃいん}{一人|ひとり}ひとりは、{消費者|しょうひしゃ}や{市場|しじょう}とつながっている。{社員|しゃいん}{個人|こじん}{個人|こじん}の{集合体|しゅうごうたい}が{企業|きぎょう}なのです。

{私|わたし}は{社員|しゃいん}の{年金|ねんきん}{制度|せいど}を{廃止|はいし}し、ボーナスも{退職金|たいしょくきん}も{一切|いっさい}{取|と}りやめました。{新入|しんにゅう}{社員|しゃいん}も{含|ふく}めてすべて{年俸|ねんぽう}{制|せい}にし、それぞれが{稼|かせ}ぎ{出|だ}した{利益|りえき}に{応|おう}じて{査定|さてい}する（{注|ちゅう}2）システムに{変|か}えたのです。{年俸|ねんぽう}は、{前年|ぜんねん}{比|ひ}プラスかマイナスかどちらかで、{横|よこ}ばいはありません。{会社|かいしゃ}の{利益|りえき}が{増|ふ}えれば{全体|ぜんたい}の{年俸|ねんぽう}の{原資|げんし}（{注|ちゅう}3）は{増|ふ}えますが、それはプラス{評価|ひょうか}をした{人|ひと}だけに{配分|はいぶん}します。

{会社|かいしゃ}で{働|はたら}くというのは、{会社|かいしゃ}の{利益|りえき}を{増|ふ}やすのが{目的|もくてき}です。その{利益|りえき}は{株主|かぶぬし}と{社員|しゃいん}に{分配|ぶんぱい}されます。{利益|りえき}の{多寡|たか}（{注|ちゅう}4）は{顧客|こきゃく}、すなわち{消費者|しょうひしゃ}が{決|き}めます。{彼|かれ}らにいかに{喜|よろこ}ばれる{仕事|しごと}ができるかが{重要|じゅうよう}です。{働|はたら}くとはそういうことです。{私|わたし}は{日頃|ひごろ}から{社員|しゃいん}に「{給料|きゅうりょう}をもらって{働|はたら}く{人|ひと}は{要|い}らない、{働|はたら}いて{給料|きゅうりょう}をもらう{人|ひと}しか{必要|ひつよう}ない」と{言|い}っています。{社員|しゃいん}という{言葉|ことば}はこれから{死語|しご}になり、「{商人|しょうにん}」という{言葉|ことば}がそれに{代|か}わると{思|おも}います。{会社|かいしゃ}が{何|なに}かしてくれるという{考|かんが}えを{捨|す}て、{個|こ}である{自分|じぶん}が{商人|しょうにん}として{顧客|こきゃく}・{消費者|しょうひしゃ}に{何|なに}を{与|あた}えられるかを{発想|はっそう}する{時代|じだい}なのです。
（{注|ちゅう}1）{堅牢|けんろう}な：{頑丈|がんじょう}な
（{注|ちゅう}2）{査定|さてい}する：{評価|ひょうか}する
（{注|ちゅう}3）{原資|げんし}：ここでは、{資金|しきん}
（{注|ちゅう}4）{多寡|たか}：{多少|たしょう}`,
      arti: `Perusahaan membuang atau merampingkan karyawan demi menjaga keuntungan adalah kehendak pasar. Orang yang terkena PHK mendendam atau mengeluh tentang perusahaannya, tetapi itu keliru. Kalau mau bicara keras, konsumenlah yang mengatakan mereka tidak membeli produk perusahaan Anda, artinya gaji Anda tidak bisa dibayar.

Jangan berpikir bahwa Anda dilindungi oleh kotak kokoh (catatan 1) bernama perusahaan. Setiap karyawan terhubung dengan konsumen dan pasar. Perusahaan adalah kumpulan karyawan sebagai individu.

Saya menghapus sistem pensiun karyawan, dan sama sekali meniadakan bonus maupun pesangon. Semua, termasuk karyawan baru, saya ubah ke sistem gaji tahunan, dengan sistem penilaian (catatan 2) sesuai keuntungan yang dihasilkan masing-masing. Gaji tahunan hanya bisa naik atau turun dibanding tahun sebelumnya, tidak ada yang tetap. Jika keuntungan perusahaan bertambah, dana (catatan 3) untuk gaji tahunan keseluruhan bertambah, tetapi itu hanya dibagikan kepada orang yang mendapat nilai plus.

Bekerja di perusahaan bertujuan menambah keuntungan perusahaan. Keuntungan itu dibagikan kepada pemegang saham dan karyawan. Besar-kecilnya (catatan 4) keuntungan ditentukan oleh pelanggan, yaitu konsumen. Yang penting adalah seberapa bisa melakukan pekerjaan yang menyenangkan mereka. Itulah artinya bekerja. Sehari-hari saya berkata kepada karyawan, "Saya tidak butuh orang yang bekerja karena digaji; saya hanya butuh orang yang bekerja lalu mendapat gaji." Saya rasa kata "karyawan" akan menjadi kata mati, dan kata "pedagang" akan menggantikannya. Ini zaman di mana kita membuang pikiran bahwa perusahaan akan melakukan sesuatu untuk kita, dan diri kita sebagai individu berpikir, sebagai pedagang, apa yang bisa diberikan kepada pelanggan dan konsumen.
(Catatan 1) 堅牢な: kokoh
(Catatan 2) 査定する: menilai
(Catatan 3) 原資: di sini, dana
(Catatan 4) 多寡: banyak-sedikitnya`,
    },
    "9-3": {
      yomi: `{意見|いけん}とはある{問題|もんだい}に{対|たい}する{解決|かいけつ}である。しかし、それは{単|たん}なる「{感|かん}じ」や「{心情|しんじょう}」の{表明|ひょうめい}ではない。{根拠|こんきょ}を{伴|ともな}って、その{内容|ないよう}が{客観的|きゃっかんてき}に{正|ただ}しいのだ、ということを{相手|あいて}に{強制|きょうせい}する{構造|こうぞう}をしている。たとえば「{私|わたし}はこう{思|おも}う。なぜなら～からだ。」と{言|い}うとき、「なぜなら～からだ」の{部分|ぶぶん}を{聞|き}いて、「なるほど」と{思|おも}ったら、その{前|まえ}の「こう{思|おも}う」の{部分|ぶぶん}も{承認|しょうにん}しなければならない。それが、①{議論|ぎろん}というゲームのルールなのである。

{相手|あいて}が{自分|じぶん}の{根拠|こんきょ}を{認|みと}めれば、{相手|あいて}に{自分|じぶん}の{意見|いけん}を{押|お}しつけることができる。{逆|ぎゃく}に{自分|じぶん}が{相手|あいて}の{根拠|こんきょ}を{認|みと}めれば、{自分|じぶん}の{意見|いけん}を{捨|す}てて{相手|あいて}に{従|したが}わなければならなくなる。つまり{議論|ぎろん}とは、{支配|しはい}と{屈従|くつじゅう}（{注|ちゅう}1）という{権力|けんりょく}{関係|かんけい}を{暗黙|あんもく}のうちに{含|ふく}むシビアなゲームなのである。②{議論|ぎろん}に{負|ま}けると、{何|なん}だか{悔|くや}しい{感|かん}じになるのは、そういうことなのだ。

しかし、これが「{勝|か}ち{負|ま}け」に{終|お}わらないのは、{双方|そうほう}が「{真理|しんり}の{探求|たんきゅう}」という{共通|きょうつう}の{目標|もくひょう}を{持|も}っているからだ。{議論|ぎろん}してどちらが{正|ただ}しいかを{決定|けってい}するのは、{勝|か}ち{負|ま}けを{決|き}めることが{主|おも}なる{目的|もくてき}ではない。よりよい{解決|かいけつ}を{求|もと}めるためである。だから、{議論|ぎろん}に{負|ま}けても、それは{相手|あいて}に{負|ま}けたことにはならない。{真理|しんり}に{負|ま}けた、いや{従|したが}っているのである。{悔|くや}しがるより、{自分|じぶん}より{真理|しんり}に{近|ちか}づいたと{満足|まんぞく}すべきなのだ。

{議論|ぎろん}に{参加|さんか}する{者|もの}は、まずこの「{真理|しんり}への{献身|けんしん}」を{共有|きょうゆう}しなければならない。{根拠|こんきょ}の{承認|しょうにん}を{迫|せま}る{形式|けいしき}に{則|のっと}って（{注|ちゅう}2）{発言|はつげん}することは、いわば、この{暗黙|あんもく}の{献身|けんしん}を{表|あらわ}しているのである。
（{注|ちゅう}1）{屈従|くつじゅう}：{自分|じぶん}の{意志|いし}に{反|はん}して{従|したが}うこと
（{注|ちゅう}2）{則|のっと}る：{従|したが}う`,
      arti: `Pendapat adalah penyelesaian terhadap suatu masalah. Namun, itu bukan sekadar pernyataan "kesan" atau "perasaan". Pendapat berstruktur memaksa lawan bicara, dengan disertai alasan, untuk menerima bahwa isinya benar secara objektif. Misalnya, ketika berkata "Saya berpikir begini. Sebab ~," jika setelah mendengar bagian "sebab ~" kita merasa "oh, begitu", maka bagian "saya berpikir begini" sebelumnya pun harus diakui. Itulah ① aturan permainan bernama diskusi.

Jika lawan mengakui alasan kita, kita bisa memaksakan pendapat kita kepadanya. Sebaliknya, jika kita mengakui alasan lawan, kita harus membuang pendapat kita dan menuruti lawan. Artinya, diskusi adalah permainan yang keras yang diam-diam mengandung hubungan kekuasaan berupa dominasi dan ketundukan (catatan 1). ② Itulah sebabnya kalau kalah berdiskusi, entah kenapa terasa kesal.

Namun, ini tidak berakhir sebagai "menang-kalah" karena kedua pihak memiliki tujuan bersama yaitu "mencari kebenaran". Berdiskusi untuk menentukan siapa yang benar bukan bertujuan utama menentukan menang-kalah. Melainkan untuk mencari penyelesaian yang lebih baik. Karena itu, kalah dalam diskusi bukan berarti kalah dari lawan. Kita kalah, atau lebih tepatnya tunduk, pada kebenaran. Alih-alih kesal, kita seharusnya puas karena sudah lebih dekat dengan kebenaran daripada sebelumnya.

Orang yang ikut berdiskusi pertama-tama harus berbagi "pengabdian pada kebenaran" ini. Berbicara sesuai (catatan 2) bentuk yang menuntut pengakuan atas alasan, bisa dikatakan, menunjukkan pengabdian diam-diam ini.
(Catatan 1) 屈従: tunduk berlawanan dengan kehendak sendiri
(Catatan 2) 則る: mengikuti`,
    },

    // ── 問題10：タレントと私生活の公表 ──
    "10": {
      yomi: `タレントがその{私|し}{生活|せいかつ}を{自分|じぶん}からマスメディアに{公表|こうひょう}することは、いまではまったく{珍|めずら}しくなくなった。これまでマスメディアに{私|し}{生活|せいかつ}を{暴露|ばくろ}され{憤慨|ふんがい}してきた{彼|かれ}らが、{自|みずか}らの{結婚|けっこん}や{離婚|りこん}、{病気|びょうき}などについて、{自分|じぶん}からファクスでマスメディアに{連絡|れんらく}する。もちろん{一般|いっぱん}の{人|ひと}びとにとっては、{知|し}らされてもほとんど{関係|かんけい}ない{話|はなし}ばかりである。{彼|かれ}らの{行動|こうどう}を{自己|じこ}{宣伝|せんでん}や{売名|ばいめい}{行為|こうい}ととらえて{眉|まゆ}をひそめる（{注|ちゅう}1）{人|ひと}も{少|すく}なからずいる。{一方|いっぽう}でプライバシー{保護|ほご}を{訴|うった}えておきながら、{都合|つごう}のいいときだけ{私|し}{生活|せいかつ}をさらけ{出|だ}そうとする、というわけだ。

だが{別|べつ}のとらえ{方|かた}はこうである。{彼|かれ}らは{先手|せんて}（{注|ちゅう}2）を{打|う}とうとしているのだ。マスメディアに{勝手|かって}に{詮索|せんさく}（{注|ちゅう}3）され、おもしろおかしく{記事|きじ}にされる{前|まえ}に、{自分|じぶん}の{方|ほう}から{情報|じょうほう}{公開|こうかい}してその{出|で}ばな（{注|ちゅう}4）をくじこうという、いわば{他人|たにん}による{勝手|かって}な{物語化|ものがたりか}に{対|たい}する{予防|よぼう}{措置|そち}である。

（{中略|ちゅうりゃく}）

マスメディアによって{自分|じぶん}のイメージをつくられてしまいそうな{人|ひと}びとにとって、{自分|じぶん}{自身|じしん}の{情報|じょうほう}を{自|みずか}らコントロールすることの{重要度|じゅうようど}は{高|たか}い。そうしなければ、{他人|たにん}によって{勝手|かって}な＜{私|わたし}＞、{自|みずか}らの{物語的|ものがたりてき}{分身|ぶんしん}、すなわちファンタジー・ダブルがつくられて、{社会|しゃかい}を{独|ひと}り{歩|ある}きし{始|はじ}めることになりかねないからだ。そのためにマスメディアを{利用|りよう}しようとするのである。

{昨今|さっこん}、{人|ひと}びとはマスメディアに{対抗|たいこう}する{強力|きょうりょく}な{情報|じょうほう}{発信|はっしん}ツールを{手|て}に{入|い}れた。それはインターネットであり、またそれを{活用|かつよう}したウェブサイトやブログ（{注|ちゅう}5）である。{人|ひと}びとはそれらによってさまざまな{自分|じぶん}の{活動|かつどう}、{知識|ちしき}や{趣味|しゅみ}、{日常|にちじょう}{生活|せいかつ}、そしてときには{心境|しんきょう}や{悩|なや}みまで{公表|こうひょう}するようになった。＜{私|わたし}づくり＞の{主導権|しゅどうけん}を{確保|かくほ}するうえでは、{画期的|かっきてき}な{手段|しゅだん}である。{実際|じっさい}の{効果|こうか}はどの{程度|ていど}かはわからない。だがイメージづくりのイニシアティブをマスメディアに{握|にぎ}られていた{人|ひと}びとにとって、{自力|じりき}で{公|おおやけ}に{情報|じょうほう}{発信|はっしん}する{有力|ゆうりょく}な{手段|しゅだん}を{手|て}に{入|い}れたことに{変|か}わりはないだろう。{人|ひと}びとは、{今度|こんど}は{自|みずか}らの{手|て}でつくった{自分|じぶん}{自身|じしん}の{物語|ものがたり}（ファンタジー・ダブル）を{世|よ}に{出|だ}そうとする。

これはごく{一部|いちぶ}の{人|ひと}びとの{話|はなし}だと{思|おも}われるかもしれない。だがこのことからは、{一般的|いっぱんてき}にプライバシーがどのように{私|わたし}たち{自身|じしん}の{自己|じこ}とかかわっているかをはっきり{見|み}て{取|と}ることができる。{彼|かれ}らに{限|かぎ}らず、{一般的|いっぱんてき}にプライバシーとは＜{私|わたし}づくり＞のイニシアティブの{問題|もんだい}である。

{近代|きんだい}{社会|しゃかい}では、このイニシアティブは{基本的|きほんてき}に{各|かく}{個人|こじん}にあるとされてきた。{自分|じぶん}{自身|じしん}がどのような{人間|にんげん}になるか、そしてどのように{生|い}きるかは、その{人|ひと}{自身|じしん}の{主体的|しゅたいてき}な{意思|いし}や{選択|せんたく}にゆだねられる。これは{個人|こじん}の{人権|じんけん}の{一|ひと}つとされてきたのである。だがこの{権利|けんり}が{奪|うば}われ、{他人|たにん}が{勝手|かって}に{個人|こじん}の{自己|じこ}＜{私|わたし}＞をつくろうとし{始|はじ}めるとき、{私|わたし}たちはプライバシー{侵害|しんがい}を{訴|うった}える。そして{何|なん}とか＜{私|わたし}づくり＞のイニシアティブを{自|みずか}らのもとに{引|ひ}き{戻|もど}そうとする。
（{注|ちゅう}1）{眉|まゆ}をひそめる：{不快|ふかい}な{気持|きも}ちを{表情|ひょうじょう}に{出|だ}す
（{注|ちゅう}2）{先手|せんて}を{打|う}つ：ここでは、{先|さき}に{動|うご}く
（{注|ちゅう}3）{詮索|せんさく}する：{細|こま}かいところまで{調|しら}べる
（{注|ちゅう}4）{出|で}ばなをくじく：{相手|あいて}が{始|はじ}めようとしていることを{妨|さまた}げる
（{注|ちゅう}5）ブログ：{日記|にっき}{形式|けいしき}のウェブサイト`,
      arti: `Selebritas yang mengumumkan sendiri kehidupan pribadinya ke media massa kini sama sekali tidak langka lagi. Mereka yang selama ini marah karena kehidupan pribadinya dibongkar media massa, kini sendiri menghubungi media massa lewat faks tentang pernikahan, perceraian, penyakit, dan sebagainya. Tentu saja bagi masyarakat umum, semuanya hal yang hampir tidak ada hubungannya meski diberitahukan. Tidak sedikit pula orang yang mengernyitkan dahi (catatan 1) dan menganggap tindakan mereka sebagai promosi diri atau mencari nama. Maksudnya, di satu sisi mereka menuntut perlindungan privasi, tetapi hanya saat menguntungkan mereka mengumbar kehidupan pribadi.

Namun, ada cara pandang lain. Mereka berusaha mendahului (catatan 2). Sebelum media massa seenaknya mengorek (catatan 3) dan menulisnya secara sensasional, mereka membuka informasi lebih dulu untuk mematahkan langkah awal (catatan 4) media, dengan kata lain tindakan pencegahan terhadap penceritaan seenaknya oleh orang lain.

(dipersingkat)

Bagi orang-orang yang citranya berisiko dibentuk oleh media massa, mengendalikan sendiri informasi tentang diri sangat penting. Sebab jika tidak, orang lain bisa membuat "aku" seenaknya, kembaran diri versi cerita, yaitu "fantasy double", yang bisa mulai berjalan sendiri di masyarakat. Untuk itulah mereka berusaha memanfaatkan media massa.

Belakangan, orang-orang mendapatkan alat penyebar informasi yang kuat untuk melawan media massa. Yaitu internet, serta situs web dan blog (catatan 5) yang memanfaatkannya. Lewat itu orang mulai mengumumkan berbagai kegiatan, pengetahuan, hobi, kehidupan sehari-hari, bahkan kadang suasana hati dan kegelisahannya. Ini sarana yang revolusioner untuk mengamankan kendali atas "pembentukan diri". Seberapa besar efek nyatanya tidak diketahui. Tetapi bagi orang-orang yang inisiatif pembentukan citranya selama ini dipegang media massa, tidak berubah kenyataan bahwa mereka mendapatkan sarana kuat untuk menyebarkan informasi ke publik dengan kekuatan sendiri. Kali ini orang-orang berusaha meluncurkan ke dunia cerita diri mereka sendiri (fantasy double) yang dibuat dengan tangan sendiri.

Mungkin ini dianggap cerita segelintir orang saja. Tetapi dari sini kita bisa melihat dengan jelas bagaimana privasi secara umum berkaitan dengan diri kita sendiri. Bukan hanya mereka, secara umum privasi adalah masalah inisiatif "pembentukan diri".

Dalam masyarakat modern, inisiatif ini pada dasarnya dianggap ada pada setiap individu. Menjadi manusia seperti apa dan bagaimana hidup diserahkan pada kehendak dan pilihan mandiri orang itu sendiri. Ini dianggap sebagai salah satu hak asasi individu. Namun, ketika hak ini dirampas dan orang lain mulai seenaknya membentuk diri "aku" seseorang, kita menuntut atas pelanggaran privasi. Dan kita berusaha entah bagaimana menarik kembali inisiatif "pembentukan diri" ke tangan sendiri.
(Catatan 1) 眉をひそめる: menunjukkan rasa tidak senang di wajah
(Catatan 2) 先手を打つ: di sini, bergerak lebih dulu
(Catatan 3) 詮索する: menyelidiki sampai detail
(Catatan 4) 出ばなをくじく: menghalangi lawan yang hendak memulai sesuatu
(Catatan 5) ブログ: situs web berformat buku harian`,
    },

    // ── 問題11：絵を描くこと ──
    "11": {
      yomi: `【{意見|いけん} A】
「{私|わたし}、{絵|え}が{描|か}けないのです」と{言|い}う{人|ひと}がたまにいる。そんな{訳|わけ}はない。{紙|かみ}とペンがあれば{誰|だれ}だって{描|か}ける。{紙|かみ}がなくなったって、{何|なん}だっていい。でも、{描|か}けないというのは、「それらしく」{描|か}かなくてはならないという{気持|きも}ちがあるからだ。{馬|うま}を{描|か}きたかったんだけど{牛|うし}になってしまった、りんごを{描|か}いたのがみかんに{見|み}える。だから{絵|え}はうまくない、{描|か}きたくないとなる。

でも、{絵|え}は{正確|せいかく}さを{要求|ようきゅう}されるものではない。{自分|じぶん}の{馬|うま}、{自分|じぶん}のりんごを{描|か}けばいい。{絵|え}はそれくらい「いいかげん」なものであり、{許容|きょよう}{範囲|はんい}の{広|ひろ}いものである。{本物|ほんもの}らしく{描|か}くことは、{描|か}くことではなく{写|うつ}すこと。{描|か}くということは{自分|じぶん}なりの{形|かたち}でいいのだ。

（{中略|ちゅうりゃく}）

{誰|だれ}だって{絵|え}を{描|か}けるし、{誰|だれ}だって{絵|え}を{楽|たの}しめる。それらしく{描|か}く{技術|ぎじゅつ}よりも{喜|よろこ}んで{描|か}く{気持|きも}ちが{大切|たいせつ}であり、{絵|え}に{失敗|しっぱい}はなく、{不正確|ふせいかく}もない。それが{自分|じぶん}の{作品|さくひん}であり、それは{自分|じぶん}の{世界|せかい}である。

【{意見|いけん} B】
{絵|え}が{上手|じょうず}になるには、とにかく{多|おお}くの{絵|え}を{描|か}く{経験|けいけん}が{大切|たいせつ}だ。{絵|え}がうまくならないという{人|ひと}は、うまく{描|か}けないからといって{途中|とちゅう}であきらめてしまうことが{多|おお}い。だがたとえうまく{描|か}けなくても、まずは{最後|さいご}まで{真剣|しんけん}に{描|か}き{上|あ}げることが{重要|じゅうよう}だ。

さらに、{描|か}く{対象|たいしょう}をしっかり{観察|かんさつ}して、{考|かんが}えながら{描|か}くことも{大切|たいせつ}だ。{対象|たいしょう}をよく{見|み}ると{新|あたら}しい{発見|はっけん}も{多|おお}いので、{描|か}くことが{楽|たの}しくなる。{実|じつ}はこの{描|か}くことを{楽|たの}しむ{気持|きも}ちが{最|もっと}も{重要|じゅうよう}なのだ。どんなことでも、{楽|たの}しければたくさんできる。{多|おお}くの{経験|けいけん}を{積|つ}めば、それだけ{上達|じょうたつ}するというもので、{絵|え}を{描|か}くことも{同|おな}じだといえる。`,
      arti: `[Pendapat A]
Kadang ada orang yang berkata, "Saya tidak bisa menggambar." Tidak mungkin. Kalau ada kertas dan pena, siapa pun bisa menggambar. Tanpa kertas pun, apa saja boleh. Tetapi orang merasa tidak bisa menggambar karena ada perasaan harus menggambar "yang mirip". Ingin menggambar kuda tetapi jadinya sapi, menggambar apel tetapi tampak seperti jeruk. Karena itu jadilah "gambarku jelek, aku tidak mau menggambar".

Tetapi, gambar bukan sesuatu yang dituntut ketepatannya. Cukup gambar kuda versi sendiri, apel versi sendiri. Gambar adalah sesuatu yang "seenaknya" sampai begitu, dan batas toleransinya luas. Menggambar persis seperti aslinya bukan menggambar, melainkan menyalin. Menggambar cukup dengan bentuk versi sendiri.

(dipersingkat)

Siapa pun bisa menggambar, siapa pun bisa menikmati gambar. Yang penting adalah perasaan senang menggambar, lebih daripada teknik menggambar yang mirip; dalam gambar tidak ada kegagalan, tidak ada ketidaktepatan. Itulah karya sendiri, dan itulah dunia sendiri.

[Pendapat B]
Untuk pandai menggambar, yang penting adalah pengalaman menggambar sebanyak mungkin. Orang yang merasa gambarnya tidak membaik sering menyerah di tengah jalan karena tidak bisa menggambar dengan bagus. Tetapi meskipun tidak bisa menggambar dengan bagus, yang penting pertama-tama menyelesaikannya dengan serius sampai akhir.

Selain itu, penting juga mengamati objek yang digambar dengan baik dan menggambar sambil berpikir. Kalau objek diamati baik-baik, banyak penemuan baru, sehingga menggambar menjadi menyenangkan. Sebenarnya perasaan menikmati menggambar inilah yang paling penting. Apa pun itu, kalau menyenangkan, kita bisa banyak melakukannya. Makin banyak pengalaman, makin meningkat pula kemampuan, dan menggambar pun bisa dikatakan sama.`,
    },

    // ── 問題12：働くことの喜び ──
    "12": {
      yomi: `{多|おお}くの{人|ひと}が{今|いま}の{社会|しゃかい}は{生|い}きづらいと{言|い}う。

{長|なが}いこと{農林業者|のうりんぎょうしゃ}や{職人|しょくにん}、{漁業者|ぎょぎょうしゃ}{達|たち}に{会|あ}って{話|はなし}を{聞|き}いてきた。{明治|めいじ}{生|う}まれも{大正|たいしょう}{生|う}まれも{昭和|しょうわ}の{方|かた}もいた。その{方々|かたがた}も、{自分|じぶん}たちは{生|い}きやすく、{楽|たの}しい{人生|じんせい}を{送|おく}ってきたとは{言|い}わなかった。

{私|わたし}が{会|あ}った{多|おお}くの{人|ひと}は{徒弟|とてい}{制度|せいど}（{注|ちゅう}）のなかで{技|わざ}を{身|み}につけ{生|い}き{方|かた}を{学|まな}んできた{人達|ひとたち}だった。{林業者|りんぎょうしゃ}{達|たち}は{親方|おやかた}や{先輩|せんぱい}に{仕|つか}えて、{道具|どうぐ}の{使|つか}い{方|かた}や{山|やま}や{木|き}の{性質|せいしつ}、{癖|くせ}を{読|よ}み{取|と}る{方法|ほうほう}を{覚|おぼ}えて{一人前|いちにんまえ}になった。{漁師|りょうし}{達|たち}もそうだ。{父|ちち}や{兄|あに}の{船|ふね}に{乗|の}り{込|こ}み、{飯炊|めした}きから{始|はじ}めて、その{日|ひ}の{水温|すいおん}や{風|かぜ}の{流|なが}れを{読|よ}み、{漁場|ぎょじょう}を{決|き}め、そこに{合|あ}った{道具|どうぐ}を{選|えら}び、{漁獲|ぎょかく}を{得|え}るようになる。

{教|おし}える{親方|おやかた}や{先輩|せんぱい}{達|たち}は「{見|み}て{学|まな}べ」と{言|い}うだけだった。{自分|じぶん}の{指先|ゆびさき}や{感覚|かんかく}、{体|からだ}が{覚|おぼ}えた{技|わざ}を{伝|つた}えるには{言葉|ことば}はあまりに{幅|はば}が{狭|せま}すぎるからだ。

（{中略|ちゅうりゃく}）

やがて{一人前|いちにんまえ}になり、{腕|うで}を{上|あ}げれば、{効率|こうりつ}は{上|あ}がり、{利益|りえき}も{出|で}るようになるが、{目指|めざ}す{到達点|とうたつてん}が{遠|とお}いことに{気|き}づく。だから{日々|ひび}の①{努力|どりょく}を{惜|お}しまなかった。{努力|どりょく}だけが{自分|じぶん}を{補|おぎな}ってくれる{手段|しゅだん}だったからだ。{努力|どりょく}は{辛|つら}いものであったが、{喜|よろこ}びも{伴|ともな}っていた。{積|つ}み{重|かさ}ねれば{明日|あした}があり、{報|むく}われることがあったのだ。

しかし、②{時代|じだい}は{変|か}わった。{時間|じかん}のかかる{訓練|くんれん}を{避|さ}け、{効率|こうりつ}の{向上|こうじょう}を{目指|めざ}した。{効率|こうりつ}こそが{価格|かかく}{競争|きょうそう}に{勝|か}てる{最高|さいこう}の{武器|ぶき}だと{考|かんが}えたからだ。{工場|こうじょう}はもちろん、{漁師|りょうし}は{機械|きかい}を{満載|まんさい}した{高速船|こうそくせん}を{手|て}に{入|い}れ、{農業者|のうぎょうしゃ}はトラクターを{買|か}った。{森林|しんりん}の{伐採|ばっさい}も{機械|きかい}がする。

{世|よ}の{仕組|しく}みも、{人々|ひとびと}の{考|かんが}えも{努力|どりょく}や{修業|しゅぎょう}、{技|わざ}を{持|も}つ{体|からだ}を{不要|ふよう}のものとしたのだ。{技|わざ}はデータとして{機械|きかい}に{組|く}み{込|こ}まれ、{人間|にんげん}に{付属|ふぞく}するものではなくなってしまった。{修業|しゅぎょう}は{人|ひと}を{磨|みが}き、{生|い}き{方|かた}を{支|ささ}えるものであったのだが、それがなくなった。

{今|いま}、{人|ひと}は{働|はたら}かされていると{感|かん}じている。そこでは{隠|かく}された{能力|のうりょく}が{引|ひ}き{出|だ}されることがない。{見|み}つけ{出|だ}す{過程|かてい}がなくなったからだ。{報|むく}いは{金銭|きんせん}であり、{喜|よろこ}びが{薄|うす}っぺらなものになってしまった。{働|はたら}くことの{意味|いみ}が{変|か}わったのだ。

{働|はたら}くことと{生|い}きることは{人生|じんせい}の{表|おもて}と{裏|うら}であった。{生|い}きづらい{世|よ}の{中|なか}と{思|おも}う{人|ひと}が{多|おお}いのは、{働|はたら}くことに{喜|よろこ}びが{伴|ともな}わなくなったからではないか。{私|わたし}の{会|あ}ってきた{人々|ひとびと}は{自分|じぶん}の{仕事|しごと}を{語|かた}るとき、{苦|くる}しかったとは{言|い}いながら、{表情|ひょうじょう}に{生気|せいき}があり、{誇|ほこ}りがにじんでいた。

{社会|しゃかい}が{変|か}わっても{人|ひと}は{生|い}きていかねばならない。{働|はたら}かねばならない。{機械|きかい}を{捨|す}てろというのではない。{効率|こうりつ}も{必要|ひつよう}だ。しかし、{新|あたら}しい{時代|じだい}の{中|なか}で{働|はたら}く{意味|いみ}と{喜|よろこ}びを{見|み}つけ{出|だ}さなければ、{生|い}きづらさが{増|ま}すばかりだ。

{働|はたら}くことの{喜|よろこ}びをどうやって{復活|ふっかつ}させるのか。お{手本|てほん}はほんのこの{間|あいだ}までの{日本|にほん}にある。たくさんの{方達|かたたち}の{話|はなし}を{聞|き}いてきてそう{思|おも}う。
（{注|ちゅう}）{徒弟|とてい}{制度|せいど}：ここでは、{弟子|でし}として{技|わざ}を{習得|しゅうとく}する{制度|せいど}`,
      arti: `Banyak orang berkata bahwa masyarakat sekarang sulit untuk dijalani.

Sudah lama saya bertemu dan mendengar cerita para petani-rimbawan, perajin, dan nelayan. Ada yang lahir di zaman Meiji, Taisho, dan Showa. Mereka pun tidak mengatakan bahwa mereka menjalani hidup yang mudah dan menyenangkan.

Banyak orang yang saya temui adalah orang-orang yang menguasai teknik dan mempelajari cara hidup dalam sistem magang (catatan). Para rimbawan mengabdi kepada guru dan senior, mempelajari cara memakai alat dan cara membaca sifat serta kebiasaan gunung dan pohon, hingga menjadi mandiri. Para nelayan juga begitu. Mereka naik ke kapal ayah atau kakak, mulai dari menanak nasi, lalu belajar membaca suhu air dan arah angin hari itu, menentukan lokasi penangkapan, memilih alat yang sesuai, hingga mendapat hasil tangkapan.

Guru dan senior yang mengajar hanya berkata, "Lihat dan belajarlah." Sebab kata-kata terlalu sempit untuk menyampaikan teknik yang dihafal ujung jari, indra, dan tubuh mereka.

(dipersingkat)

Lama-kelamaan menjadi mandiri, dan jika keterampilan meningkat, efisiensi naik dan keuntungan pun didapat, tetapi mereka menyadari bahwa titik yang dituju masih jauh. Karena itu ① mereka tidak segan berusaha setiap hari. Sebab hanya usaha yang bisa melengkapi diri mereka. Usaha itu berat, tetapi disertai kegembiraan. Jika ditumpuk, ada hari esok, dan ada saatnya terbalas.

Namun, ② zaman telah berubah. Orang menghindari latihan yang memakan waktu dan mengejar peningkatan efisiensi. Sebab efisiensi dianggap senjata terbaik untuk memenangkan persaingan harga. Bukan hanya pabrik, nelayan memiliki kapal cepat penuh mesin, petani membeli traktor. Penebangan hutan pun dilakukan mesin.

Sistem masyarakat maupun pikiran orang menjadikan usaha, latihan, dan tubuh yang menguasai teknik sebagai hal yang tidak diperlukan. Teknik dimasukkan ke mesin sebagai data, dan tidak lagi melekat pada manusia. Latihan dulu mengasah manusia dan menopang cara hidupnya, tetapi itu hilang.

Sekarang orang merasa dipekerjakan. Di sana kemampuan tersembunyi tidak tergali. Sebab proses untuk menemukannya hilang. Imbalannya uang, dan kegembiraannya menjadi dangkal. Makna bekerja telah berubah.

Bekerja dan hidup adalah dua sisi kehidupan. Bukankah banyak orang merasa dunia sulit dijalani karena bekerja tidak lagi disertai kegembiraan? Orang-orang yang saya temui, ketika menceritakan pekerjaannya, meski berkata dulu berat, wajah mereka bersemangat dan terpancar kebanggaan.

Meski masyarakat berubah, manusia harus tetap hidup. Harus bekerja. Bukan berarti buanglah mesin. Efisiensi juga perlu. Namun, jika tidak menemukan makna dan kegembiraan bekerja di zaman baru, kesulitan hidup hanya akan bertambah.

Bagaimana menghidupkan kembali kegembiraan bekerja? Contohnya ada di Jepang hingga belum lama ini. Itulah yang saya pikirkan setelah mendengar cerita banyak orang.
(Catatan) 徒弟制度: di sini, sistem menguasai teknik sebagai murid`,
    },

    // ── 問題13：ふかみ農業公園ボランティア募集 ──
    "13": {
      yomi: `ふかみ{農業|のうぎょう}{公園|こうえん}では、{野菜|やさい}や{花|はな}を{育|そだ}てたり、{季節|きせつ}に{応|おう}じたイベントを{手伝|てつだ}ったりしてくださるボランティアを{募集|ぼしゅう}しています。

ボランティア①　{畑|はたけ}に{野菜|やさい}の{種|たね}をまいたり、{草取|くさと}りなどの{農作業|のうさぎょう}をしたりして、{収穫|しゅうかく}までの{作業|さぎょう}を{行|おこな}います。
{活動|かつどう}{時間|じかん}・{日時|にちじ}：2019{年|ねん}4{月|がつ}～{翌|よく}3{月|がつ}　●{毎週|まいしゅう}{金曜|きんよう}10{時|じ}～12{時|じ}

ボランティア②　{花|はな}を{植|う}えたり、{草取|くさと}りなどの{花壇|かだん}の{整備|せいび}をしたりします。
{活動|かつどう}{時間|じかん}・{日時|にちじ}：2019{年|ねん}4{月|がつ}～{翌|よく}3{月|がつ}　●{毎週|まいしゅう}{木曜|もくよう}10{時|じ}～12{時|じ}

ボランティア③　{年|ねん}3{回|かい}のイベント（{桜|さくら}{祭|まつ}り、{夏祭|なつまつ}り、{収穫祭|しゅうかくさい}）{時|じ}に、{公園|こうえん}{内|ない}で{収穫|しゅうかく}した{野菜|やさい}を{売|う}ったり、{花|はな}を{売|う}ったりします。{一|ひと}つのイベントのみの{参加|さんか}も{可能|かのう}です。
{活動|かつどう}{日時|にちじ}：4{月|がつ}6{日|か}{桜|さくら}{祭|まつ}り、8{月|がつ}10{日|か}{夏祭|なつまつ}り、11{月|がつ}9{日|か}{収穫祭|しゅうかくさい}　{各|かく}イベント{当日|とうじつ}{開始|かいし}から{片付|かたづ}けまで（{開始|かいし}2{時間|じかん}{前|まえ}に{集合|しゅうごう}）

{登録|とうろく}{説明会|せつめいかい}（{場所|ばしょ}：ふかみ{農業|のうぎょう}{公園|こうえん}{事務所|じむしょ}2{階|かい}{会議室|かいぎしつ}）
ボランティア①：2019{年|ねん}3{月|がつ}8{日|か}（{金|きん}）、9{日|か}（{土|ど}）※1　10{時|じ}～11{時|じ}
ボランティア②：2019{年|ねん}3{月|がつ}15{日|にち}（{金|きん}）、16{日|にち}（{土|ど}）※1　10{時|じ}～11{時|じ}
※1 {必|かなら}ずいずれかの{日|ひ}にご{参加|さんか}ください。
ボランティア③：なし

{申|もう}し{込|こ}み{方法|ほうほう}
{以下|いか}を{明記|めいき}の{上|うえ}、はがき、Eメール、FAXのいずれかでお{申|もう}し{込|こ}みください。
ボランティア①、②：{住所|じゅうしょ}、{氏名|しめい}、{年齢|ねんれい}、{電話|でんわ}{番号|ばんごう}、{参加|さんか}を{希望|きぼう}するボランティア{番号|ばんごう}、{登録|とうろく}{説明会|せつめいかい}の{参加|さんか}{希望|きぼう}{日|び}
ボランティア③：{住所|じゅうしょ}、{氏名|しめい}、{年齢|ねんれい}、{電話|でんわ}{番号|ばんごう}、イベント{名|めい}

{締切|しめきり}①、②{登録|とうろく}{説明会|せつめいかい}{開催|かいさい}{日|び}1{日目|にちめ}の1{週間|しゅうかん}{前|まえ}、③{各|かく}イベント{実施|じっし}{日|び}の1{週間|しゅうかん}{前|まえ}{必着|ひっちゃく}

{登録|とうろく}{費用|ひよう}（{保険料|ほけんりょう}）　ボランティア①、②300{円|えん}　③50{円|えん}［{各|かく}イベントにつき］※2
①、②にご{参加|さんか}の{方|かた}は、{活動|かつどう}{初日|しょにち}にお{支払|しはら}いください。③にご{参加|さんか}の{方|かた}は、イベント{当日|とうじつ}の{集合|しゅうごう}{時|じ}にお{支払|しはら}いください。
※2 ①または②にご{参加|さんか}の{方|かた}が③にも{参加|さんか}された{場合|ばあい}、③の{登録|とうろく}{費用|ひよう}は{必要|ひつよう}ありません。

ふかみ{農業|のうぎょう}{公園|こうえん}　〒009-1527　{山川市|やまかわし}ふかみ1569
{電話|でんわ}／FAX：031-849-1111　Eメール：bosyu@fukami-nogyo-koen.com`,
      arti: `Taman Pertanian Fukami merekrut relawan yang mau menanam sayur dan bunga serta membantu acara sesuai musim.

Relawan ① Menebar benih sayur di ladang, melakukan pekerjaan tani seperti mencabut rumput, dan mengerjakan semua hingga panen.
Waktu/tanggal kegiatan: April 2019 – Maret tahun berikutnya, ● setiap Jumat pukul 10–12

Relawan ② Menanam bunga dan merawat petak bunga seperti mencabut rumput.
Waktu/tanggal kegiatan: April 2019 – Maret tahun berikutnya, ● setiap Kamis pukul 10–12

Relawan ③ Pada 3 acara setahun (festival sakura, festival musim panas, festival panen), menjual sayur yang dipanen di taman dan menjual bunga. Boleh ikut satu acara saja.
Tanggal kegiatan: 6 April festival sakura, 10 Agustus festival musim panas, 9 November festival panen; pada hari setiap acara dari mulai sampai beres-beres (berkumpul 2 jam sebelum mulai)

Sesi penjelasan pendaftaran (tempat: ruang rapat lantai 2 kantor Taman Pertanian Fukami)
Relawan ①: 8 Maret 2019 (Jumat), 9 Maret (Sabtu) ※1, pukul 10–11
Relawan ②: 15 Maret 2019 (Jumat), 16 Maret (Sabtu) ※1, pukul 10–11
※1 Wajib hadir pada salah satu hari.
Relawan ③: tidak ada

Cara mendaftar
Tuliskan hal-hal berikut dengan jelas, lalu daftar lewat kartu pos, email, atau faks.
Relawan ①, ②: alamat, nama, usia, nomor telepon, nomor relawan yang diinginkan, tanggal sesi penjelasan yang ingin dihadiri
Relawan ③: alamat, nama, usia, nomor telepon, nama acara

Batas waktu: ①, ② harus tiba satu minggu sebelum hari pertama sesi penjelasan; ③ satu minggu sebelum hari pelaksanaan setiap acara

Biaya pendaftaran (premi asuransi): relawan ①, ② 300 yen; ③ 50 yen [per acara] ※2
Peserta ①, ② membayar pada hari pertama kegiatan. Peserta ③ membayar saat berkumpul pada hari acara.
※2 Jika peserta ① atau ② juga ikut ③, biaya pendaftaran ③ tidak diperlukan.

Taman Pertanian Fukami, 〒009-1527, Fukami 1569, Kota Yamakawa
Telepon/Faks: 031-849-1111, Email: bosyu@fukami-nogyo-koen.com`,
    },
  },
};
