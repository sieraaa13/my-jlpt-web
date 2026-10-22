import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2013
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1307: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "それは【{愚|おろ}か】な{行動|こうどう}だった。",
      arti: "Itu adalah tindakan yang 【bodoh】.",
      optArti: ["licik, tangguh (強か)", "diam-diam (密か)", "cepat, segera (速やか)", "bodoh (愚か)"],
    },
    2: {
      yomi: "{相手|あいて}チームの【{巧妙|こうみょう}】な{作戦|さくせん}に{引|ひ}っかかってしまった。",
      arti: "Kami terjebak strategi tim lawan yang 【cerdik】.",
    },
    3: {
      yomi: "{町|まち}の{公園|こうえん}は{人々|ひとびと}の【{憩|いこ}い】の{場|ば}として{親|した}しまれている。",
      arti: "Taman kota disukai sebagai tempat 【bersantai/beristirahat】 warga.",
      optArti: ["kelembapan, kesejahteraan (潤い)", "perkumpulan (集い)", "keramaian (賑わい)", "tempat bersantai, rehat (憩い)"],
    },
    4: {
      yomi: "この{製品|せいひん}は【{需要|じゅよう}】が{高|たか}く、{生産|せいさん}が{追|お}いつかない。",
      arti: "Produk ini 【permintaannya】 tinggi sehingga produksi tidak bisa mengejar.",
    },
    5: {
      yomi: "{道路|どうろ}の{拡張|かくちょう}{工事|こうじ}によって、{渋滞|じゅうたい}が【{緩和|かんわ}】された。",
      arti: "Berkat pelebaran jalan, kemacetan 【berkurang/teratasi】.",
    },
    6: {
      yomi: "{工場|こうじょう}の【{跡地|あとち}】が{公園|こうえん}になった。",
      arti: "【Bekas lahan】 pabrik menjadi taman.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "コピー{代|だい}は、{後|あと}で{払|はら}うので、とりあえず（　）おいてもらえませんか。",
      arti: "Biaya fotokopi nanti saya bayar, jadi bisakah untuk sementara Anda (…) dulu?",
      optYomi: ["{積|つ}み{立|た}てて", "{引|ひ}き{落|お}として", "{立|た}て{替|か}えて", "{差|さ}し{引|ひ}いて"],
      optArti: ["menabung sedikit demi sedikit", "mendebet (dari rekening)", "menalangi dulu", "memotong, mengurangi"],
    },
    8: {
      yomi: "この{問題|もんだい}の{最終的|さいしゅうてき}な{対応|たいおう}は、{社長|しゃちょう}に（　）することに{決|き}まった。",
      arti: "Diputuskan bahwa penanganan akhir masalah ini (…) kepada direktur.",
      optYomi: ["{依存|いぞん}", "{一任|いちにん}", "{従属|じゅうぞく}", "{委託|いたく}"],
      optArti: ["ketergantungan", "menyerahkan sepenuhnya", "tunduk, subordinasi", "menitipkan pekerjaan (ke pihak luar)"],
    },
    9: {
      yomi: "{疲|つか}れると、{甘|あま}いものがなぜか（　）{食|た}べたくなる。",
      arti: "Kalau lelah, entah kenapa saya jadi (…) ingin makan yang manis.",
      optArti: ["dengan tekun, sepenuh hati", "sangat, tak tertahankan", "dengan keras kepala", "dengan tulus, bertekad"],
    },
    10: {
      yomi: "{彼|かれ}が{自分|じぶん}の{意見|いけん}を（　）{主張|しゅちょう}したせいで、{話|はな}し{合|あ}いがちっとも{進|すす}まなかった。",
      arti: "Karena ia bersikeras (…) mempertahankan pendapatnya, diskusi sama sekali tidak maju.",
      optYomi: ["{強硬|きょうこう}に", "{果敢|かかん}に", "{無謀|むぼう}に", "{堅実|けんじつ}に"],
      optArti: ["dengan keras, tidak mau mengalah", "dengan berani", "dengan nekat", "dengan mantap, aman"],
    },
    11: {
      yomi: "こんな{大事|だいじ}な{取|と}り{引|ひ}きは、{入社|にゅうしゃ}2{年目|ねんめ}の{社員|しゃいん}には（　）が{重|おも}いだろう。",
      arti: "Transaksi sepenting ini mungkin (…) berat bagi karyawan tahun kedua.",
      optYomi: ["{頭|あたま}", "{肩|かた}", "{荷|に}", "{職|しょく}"],
      optArti: ["kepala", "bahu", "beban (荷が重い = tanggung jawab terlalu berat)", "jabatan"],
    },
    12: {
      yomi: "お{気|き}に（　）ことを{申|もう}し{上|あ}げてしまったようで、{申|もう}し{訳|わけ}ありません。",
      arti: "Sepertinya saya telah mengatakan sesuatu yang (…) perasaan Anda; mohon maaf.",
      optYomi: ["{障|さわ}る", "{及|およ}ぶ", "{絡|から}む", "{逆|さか}らう"],
      optArti: ["menyinggung (気に障る)", "mencapai, sampai", "terlibat, membelit", "melawan"],
    },
    13: {
      yomi: "この{数日|すうじつ}ずっと{雨|あめ}で、{窓|まど}も{開|あ}けられないので、{部屋|へや}が（　）して{気持|きも}ち{悪|わる}い。",
      arti: "Beberapa hari ini terus hujan dan jendela tidak bisa dibuka, jadi kamar (…) dan tidak nyaman.",
      optArti: ["kering, cerah", "lembap (menyenangkan, lembut)", "lembap dan pengap (tidak menyenangkan)", "kasar, kering berkeresek"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{山田|やまだ}{氏|し}は{著書|ちょしょ}で、【{従来|じゅうらい}の】{経営|けいえい}{戦略|せんりゃく}について{意見|いけん}を{述|の}べている。",
      arti: "Tuan Yamada dalam bukunya menyampaikan pendapat tentang strategi manajemen 【selama ini】.",
      optYomi: ["{長期的|ちょうきてき}な", null, null, "{短期的|たんきてき}な"],
      optArti: ["jangka panjang", "selama ini", "ke depan", "jangka pendek"],
    },
    15: {
      yomi: "{会議|かいぎ}の{資料|しりょう}は【あらかじめ】お{送|おく}りします。",
      arti: "Materi rapat akan kami kirim 【terlebih dahulu】.",
      optYomi: ["{早急|さっきゅう}に", null, "{改|あらた}めて", "{事前|じぜん}に"],
      optArti: ["segera", "sekaligus", "sekali lagi, lain kali", "sebelumnya"],
    },
    16: {
      yomi: "{彼|かれ}は{高校|こうこう}{時代|じだい}、{数学|すうがく}の{成績|せいせき}が【{抜群|ばつぐん}だった】。",
      arti: "Semasa SMA, nilai matematikanya 【sangat menonjol】.",
      optYomi: ["ほかと{比|くら}べて{特|とく}に{下|さ}がった", "ほかと{比|くら}べて{特|とく}に{悪|わる}かった", "ほかと{比|くら}べて{特|とく}に{上|あ}がった", "ほかと{比|くら}べて{特|とく}に{良|よ}かった"],
      optArti: ["sangat turun dibanding yang lain", "sangat buruk dibanding yang lain", "sangat naik dibanding yang lain", "sangat bagus dibanding yang lain"],
    },
    17: {
      yomi: "A{社|しゃ}の【バックアップ】を{受|う}けて、{新|あたら}しい{事業|じぎょう}を{始|はじ}めた。",
      arti: "Dengan 【dukungan】 Perusahaan A, kami memulai usaha baru.",
      optYomi: ["{影響|えいきょう}", "{支援|しえん}", "{依頼|いらい}", "{指示|しじ}"],
      optArti: ["pengaruh", "dukungan", "permintaan", "instruksi"],
    },
    18: {
      yomi: "{彼|かれ}の{話|はなし}を{聞|き}いて{皆|みな}【{仰天|ぎょうてん}した】。",
      arti: "Mendengar ceritanya, semua orang 【terperanjat】.",
      optYomi: ["とても{驚|おどろ}いた", "とても{喜|よろこ}んだ", "{深|ふか}く{感動|かんどう}した", "{深|ふか}く{同情|どうじょう}した"],
      optArti: ["sangat terkejut", "sangat gembira", "sangat terharu", "sangat bersimpati"],
    },
    19: {
      yomi: "ご{説明|せつめい}の{内容|ないよう}は【おおむね】{理解|りかい}できました。",
      arti: "Isi penjelasan Anda 【sebagian besar】 sudah bisa saya pahami.",
      optArti: ["akhirnya", "sedikit", "segera", "kurang lebih, garis besarnya"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "{円滑|えんかつ}",
      arti: "円滑 = lancar, mulus (urusan, proses kerja)",
      optYomi: [
        "{手術|しゅじゅつ}の{後|あと}、{田中|たなか}さんの{体力|たいりょく}は{円滑|えんかつ}に{回復|かいふく}している。",
        "{手順|てじゅん}を{改善|かいぜん}したら、{業務|ぎょうむ}が{円滑|えんかつ}に{進|すす}むようになった。",
        "{瓶|びん}のふたが{固|かた}くて{開|あ}かなかったが、{温|あたた}めたら{円滑|えんかつ}に{開|あ}いた。",
        "{山田|やまだ}さんは3か{国語|こくご}を{円滑|えんかつ}に{操|あやつ}ることができるそうだ。",
      ],
      optArti: [
        "Setelah operasi, stamina Tanaka-san pulih dengan 'lancar'.",
        "Setelah prosedurnya diperbaiki, pekerjaan berjalan 'lancar'.",
        "Tutup botolnya keras dan tidak terbuka, tetapi setelah dihangatkan terbuka dengan 'lancar'.",
        "Katanya Yamada-san bisa menguasai tiga bahasa dengan 'lancar'.",
      ],
    },
    21: {
      yomi: "{優位|ゆうい}",
      arti: "優位 = posisi unggul, keunggulan (dibanding pihak lain)",
      optYomi: [
        "A{社|しゃ}はこの{数年|すうねん}、{小型|こがた}パソコン{市場|しじょう}において{他社|たしゃ}より{優位|ゆうい}に{立|た}っている。",
        "{今度|こんど}のスポーツ{大会|たいかい}では{優位|ゆうい}に{入賞|にゅうしょう}できるように{毎日|まいにち}{練習|れんしゅう}に{励|はげ}んでいる。",
        "ご{予約|よやく}のお{客|きゃく}さまを{優位|ゆうい}にお{席|せき}にご{案内|あんない}しておりますので、{少々|しょうしょう}お{待|ま}ちください。",
        "{当社|とうしゃ}は、{生産性|せいさんせい}より{品質|ひんしつ}を{優位|ゆうい}に{考|かんが}えた{生産|せいさん}{体制|たいせい}に{転換|てんかん}を{進|すす}めています。",
      ],
      optArti: [
        "Beberapa tahun ini Perusahaan A berada di posisi 'unggul' dibanding perusahaan lain di pasar PC mini.",
        "Saya giat berlatih setiap hari agar bisa menang secara 'unggul' di turnamen olahraga nanti.",
        "Kami mengantar tamu yang sudah memesan ke kursi secara 'unggul', mohon tunggu sebentar.",
        "Perusahaan kami sedang beralih ke sistem produksi yang memikirkan mutu secara 'unggul' dibanding produktivitas.",
      ],
    },
    22: {
      arti: "かばう = membela, melindungi (orang yang disalahkan/diserang)",
      optYomi: [
        "{仕事|しごと}のストレスから{身|み}をかばうには、{適度|てきど}な{休養|きゅうよう}も{必要|ひつよう}だ。",
        "このマンションは、{警備員|けいびいん}が{入|い}り{口|ぐち}で{住人|じゅうにん}をかばっているので{安心|あんしん}だ。",
        "{政府|せいふ}は{子|こ}どもたちの{人権|じんけん}をかばう{法律|ほうりつ}を{成立|せいりつ}させた。",
        "{父|ちち}にしかられていたら、{母|はは}が「わざとやったわけじゃないんだから」と{言|い}ってかばってくれた。",
      ],
      optArti: [
        "Untuk 'membela' diri dari stres kerja, istirahat yang cukup juga perlu.",
        "Apartemen ini aman karena satpam 'membela' penghuni di pintu masuk.",
        "Pemerintah mengesahkan undang-undang yang 'membela' hak asasi anak-anak.",
        "Saat dimarahi ayah, ibu 'membela' saya dengan berkata, \"Kan dia tidak sengaja.\"",
      ],
    },
    23: {
      yomi: "{加味|かみ}",
      arti: "加味 = memperhitungkan, mempertimbangkan juga (unsur lain)",
      optYomi: [
        "わが{社|しゃ}では、{仕事|しごと}の{成果|せいか}だけでなく、{勤務|きんむ}{態度|たいど}も{加味|かみ}して{社員|しゃいん}を{評価|ひょうか}している。",
        "{外国|がいこく}の{文化|ぶんか}が{加味|かみ}されて、わが{国|くに}の{生活|せいかつ}スタイルも{徐々|じょじょ}に{変化|へんか}してきた。",
        "{発表|はっぴょう}は{以上|いじょう}ですが、{最後|さいご}に{少|すこ}しだけ{加味|かみ}させていただきます。",
        "{私|わたし}は{保存料|ほぞんりょう}や{着色料|ちゃくしょくりょう}を{加味|かみ}した{食品|しょくひん}はなるべく{買|か}わないようにしている。",
      ],
      optArti: [
        "Di perusahaan kami, karyawan dinilai tidak hanya dari hasil kerja, tetapi juga dengan 'memperhitungkan' sikap kerjanya.",
        "Dengan 'diperhitungkannya' budaya asing, gaya hidup negara kita pun perlahan berubah.",
        "Presentasi sudah selesai, tetapi di akhir izinkan saya 'memperhitungkan' sedikit.",
        "Saya berusaha tidak membeli makanan yang 'memperhitungkan' pengawet dan pewarna.",
      ],
    },
    24: {
      yomi: "{気配|けはい}",
      arti: "気配 = tanda-tanda, gelagat (keberadaan sesuatu)",
      optYomi: [
        "{私|わたし}は{目|め}や{口|くち}のあたりに{祖母|そぼ}の{気配|けはい}があるとよく{言|い}われる。",
        "{彼女|かのじょ}が{部屋|へや}に{入|はい}ってくると、その{場|ば}の{気配|けはい}がぱっと{明|あか}るくなった。",
        "{会議|かいぎ}の{開始|かいし}{時間|じかん}を{過|す}ぎているのに、{誰|だれ}も{来|く}る{気配|けはい}がない。",
        "{駅前|えきまえ}にビルや{店|みせ}ができて、10{年|ねん}{前|まえ}とは{気配|けはい}がすっかり{変|か}わった。",
      ],
      optArti: [
        "Saya sering dibilang punya 'tanda-tanda' nenek di sekitar mata dan mulut.",
        "Begitu ia masuk ruangan, 'tanda-tanda' tempat itu langsung menjadi cerah.",
        "Sudah lewat jam mulai rapat, tetapi tidak ada 'tanda-tanda' seorang pun akan datang.",
        "Dengan berdirinya gedung dan toko di depan stasiun, 'tanda-tandanya' benar-benar berubah dari 10 tahun lalu.",
      ],
    },
    25: {
      yomi: "{合致|がっち}",
      arti: "合致 = sesuai persis, cocok (dengan teori, syarat, tujuan)",
      optYomi: [
        "この{靴|くつ}は{私|わたし}の{足|あし}の{形|かたち}に{合致|がっち}していて、{疲|つか}れにくい。",
        "{私|わたし}は{年齢|ねんれい}に{合致|がっち}した{服装|ふくそう}をするように{心|こころ}がけている。",
        "{実験|じっけん}{結果|けっか}は、{理論的|りろんてき}な{予測|よそく}に{完全|かんぜん}に{合致|がっち}していた。",
        "{自分|じぶん}に{合致|がっち}する{仕事|しごと}なんて、そう{簡単|かんたん}には{見|み}つからない。",
      ],
      optArti: [
        "Sepatu ini 'sesuai persis' dengan bentuk kaki saya, sehingga tidak mudah lelah.",
        "Saya berusaha berpakaian yang 'sesuai persis' dengan usia.",
        "Hasil eksperimen 'sesuai persis' sepenuhnya dengan prediksi teoretis.",
        "Pekerjaan yang 'sesuai persis' dengan diri sendiri tidak mudah ditemukan.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{乗客|じょうきゃく}の{減少|げんしょう}が{続|つづ}いていた{竹山|たけやま}{鉄道|てつどう}が、{今年|ことし}の3{月|がつ}31{日|にち}（　）{廃止|はいし}された。",
      arti: "Kereta Takeyama yang penumpangnya terus berkurang ditutup (…) 31 Maret tahun ini.",
      optYomi: ["を{受|う}けて", "を{皮切|かわき}りに", null, null],
      optArti: ["menanggapi", "dimulai dari", "dengan ... sebagai puncak", "dengan (tanggal itu) sebagai akhir"],
    },
    27: {
      yomi: "（ニュースで）{北川|きたがわ}{動物園|どうぶつえん}では、{連日|れんじつ}の{猛暑|もうしょ}で{元気|げんき}のないペンギンに、せめて{気分|きぶん}（　）{南極|なんきょく}を{感|かん}じてもらおうと{氷|こおり}の{塊|かたまり}がプレゼントされました。",
      arti: "(Dalam berita) Di Kebun Binatang Kitagawa, penguin yang lesu karena panas terik berhari-hari diberi hadiah bongkahan es, agar setidaknya (…) suasananya bisa merasakan Antartika.",
      optArti: ["(bentuk tidak tepat)", "setidaknya ... saja", "bahkan ... pun", "kira-kira (bentuk tidak tepat)"],
    },
    28: {
      yomi: "{近年|きんねん}、{子|こ}どもの{読書|どくしょ}{離|ばな}れが{指摘|してき}されているが、（　）{子|こ}どもの{読書量|どくしょりょう}は{本当|ほんとう}に{減|へ}っているのだろうか。",
      arti: "Belakangan ini sering disebut anak-anak menjauhi bacaan, tetapi (…) apakah jumlah bacaan anak benar-benar berkurang?",
      optArti: ["seandainya", "sepertinya", "barangkali", "benarkah, apakah sungguh"],
    },
    29: {
      yomi: "（メールの{終|お}わりに）それでは{以上|いじょう}の{件|けん}につき、{引|ひ}き{続|つづ}きご{検討|けんとう}いただければ{幸|さいわ}いに（　）。どうかよろしくお{願|ねが}い{申|もう}し{上|あ}げます。",
      arti: "(Di akhir surel) Demikianlah, kami (…) berbahagia jika Anda berkenan terus mempertimbangkan hal di atas. Mohon kerja samanya.",
      optYomi: ["{存|ぞん}じます", null, "{頂戴|ちょうだい}します", null],
      optArti: ["merasa (merendah: 存じる)", "menerima, dipercayakan", "menerima (merendah)", "menerima, mendengar (merendah)"],
    },
    30: {
      yomi: "（{会社|かいしゃ}で）A「あ、その{資料|しりょう}はあしたまた{使|つか}うから、{捨|す}てないで（　）。」B「わかった。じゃあ、ファイルに{保管|ほかん}するね。」",
      arti: "(Di kantor) A: \"Ah, dokumen itu mau dipakai lagi besok, jadi jangan dibuang, (…).\" B: \"Oke. Kalau begitu kusimpan di map, ya.\"",
      optYomi: ["{取|と}れるって", "{取|と}っといて", "{取|と}っちゃわないって", "{取|と}っとけなくて"],
      optArti: ["katanya bisa diambil", "simpan saja dulu", "katanya tidak akan diambil", "tidak bisa disimpan"],
    },
    31: {
      yomi: "{本|ほん}サービスを{利用|りよう}される{方|かた}は、{利用|りよう}{規約|きやく}を（　）、お{申|もう}し{込|こ}みください。",
      arti: "Bagi yang akan menggunakan layanan ini, silakan mendaftar (…) ketentuan penggunaan.",
      optYomi: ["ご{覧|らん}の{結果|けっか}", "ご{覧|らん}になった{結果|けっか}", "ご{覧|らん}になった{上|うえ}で", "ご{覧|らん}くださった{上|うえ}に"],
      optArti: ["hasil melihat", "hasil setelah melihat", "setelah membaca", "selain telah melihat"],
    },
    32: {
      yomi: "{私|わたし}は{映画|えいが}{監督|かんとく}になる{夢|ゆめ}をかなえるために、{一生懸命|いっしょうけんめい}{映像|えいぞう}の{勉強|べんきょう}をしている。{絶対|ぜったい}に、（　）{終|お}わらせない。",
      arti: "Saya belajar video dengan sungguh-sungguh untuk mewujudkan impian menjadi sutradara. Saya sama sekali tidak akan membiarkan (…) berakhir.",
      optYomi: ["{夢|ゆめ}に{夢|ゆめ}を", "{夢|ゆめ}なら{夢|ゆめ}と", "{夢|ゆめ}が{夢|ゆめ}なら", "{夢|ゆめ}を{夢|ゆめ}で"],
      optArti: ["(bentuk tidak tepat)", "kalau mimpi ya mimpi", "kalau mimpinya mimpi", "impian (berakhir) tetap sebagai impian saja"],
    },
    33: {
      yomi: "（{会社|かいしゃ}で）{田中|たなか}「ねえ、{中村|なかむら}くん。もう{遅|おそ}いし、{今日|きょう}はここまでにしようよ。」{中村|なかむら}「そうだね。じゃあ、{残|のこ}りはあした（　）。」{田中|たなか}「うん。またあしたがんばろう。」",
      arti: "(Di kantor) Tanaka: \"Nakamura, sudah larut, hari ini sampai sini saja, yuk.\" Nakamura: \"Iya. Kalau begitu, sisanya (…) besok.\" Tanaka: \"Oke. Besok semangat lagi.\"",
      optArti: ["kita kerjakan saja (memutuskan)", "toh akan dikerjakan sih", "apakah sedang mau mengerjakan?", "karena sedang dikerjakan"],
    },
    34: {
      yomi: "この{曲|きょく}は、{失恋|しつれん}で{落|お}ち{込|こ}んで{泣|な}いていた{私|わたし}に、また{新|あたら}しい{恋|こい}をしようと（　）{曲|きょく}です。",
      arti: "Lagu ini adalah lagu yang (…) saya — yang menangis terpuruk karena patah hati — untuk kembali jatuh cinta lagi.",
      optYomi: ["{思|おも}われていた", "{思|おも}わせてくれた", "{思|おも}わせられた", "{思|おも}われてならなかった"],
      optArti: ["dianggap", "membuat (saya) berpikir/bertekad", "dibuat berpikir (terpaksa)", "terus-menerus terasa"],
    },
    35: {
      yomi: "{中村|なかむら}「{山田|やまだ}さんは{本当|ほんとう}に{猫|ねこ}が{好|す}きなんだね。{今日|きょう}のバッグも{猫|ねこ}の{絵柄|えがら}だし。」{山田|やまだ}「うん。でも、あんまり{持|も}ち{物|もの}が{猫柄|ねこがら}ばかりなんで、{家族|かぞく}から『{猫|ねこ}{好|ず}き（　）だろう。』って{言|い}われたりする。」",
      arti: "Nakamura: \"Yamada-san benar-benar suka kucing, ya. Tas hari ini pun bergambar kucing.\" Yamada: \"Iya. Tapi karena barang-barangku hampir semuanya bermotif kucing, keluargaku kadang bilang, 'Suka kucing pun (…).'\"",
      optArti: ["tidak termasuk dalam batas", "paling baik adalah", "ada batasnya (keterlaluan)", "tidak sampai sebegitu"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{近所|きんじょ}の{猫|ねこ}は、{私|わたし}を{見|み}るとすぐに{逃|に}げるくせに、{途中|とちゅう}で{立|た}ち{止|ど}まってこちらを{振|ふ}り{返|かえ}る。できるもんなら＿＿ ＿＿ ★ ＿＿すごくかわいい。",
      arti: "Kucing tetangga langsung kabur begitu melihat saya, tetapi di tengah jalan berhenti dan menoleh. Ekspresinya yang menyebalkan seolah berkata \"tangkap aku kalau bisa\" itu sangat menggemaskan.",
      optYomi: ["{表情|ひょうじょう}が", "あの{憎|にく}らしい", null, "{捕|つか}まえてごらん"],
      optArti: ["ekspresinya", "yang menyebalkan itu", "yang seolah berkata", "coba tangkap"],
    },
    37: {
      yomi: "{先月|せんげつ}、{父|ちち}に{手作|てづく}りの{箸|はし}をプレゼントした。{長|なが}くて＿＿ ＿＿ ★ ＿＿{気|き}に{入|い}ってくれているのかもしれない。",
      arti: "Bulan lalu saya menghadiahkan sumpit buatan tangan kepada ayah. Melihat ia memakainya setiap hari sambil berkata \"terlalu panjang, entah kenapa susah dipakai\", mungkin ia menyukainya.",
      optYomi: ["と{言|い}いながらも", "ところを{見|み}ると", "なんだか{使|つか}いにくい", "{毎日|まいにち}{使|つか}っている"],
      optArti: ["meski berkata", "melihat kenyataan bahwa", "entah kenapa susah dipakai", "memakainya setiap hari"],
    },
    38: {
      yomi: "このドラマの{人気|にんき}は、ストーリーも＿＿ ＿＿ ★ ＿＿いえる。",
      arti: "Popularitas drama ini, selain ceritanya tentu saja, bisa dikatakan banyak disebabkan oleh kemampuan akting para aktornya.",
      optYomi: [null, null, "{大|おお}きいと", "{俳優|はいゆう}の{演技力|えんぎりょく}に"],
      optArti: ["banyak disebabkan oleh", "selain ... tentu saja", "besar", "pada kemampuan akting aktor"],
    },
    39: {
      yomi: "{通勤|つうきん}に{片道|かたみち}2{時間|じかん}かかる{私|わたし}みたいな＿＿ ＿＿ ★ ＿＿{人|ひと}は{本当|ほんとう}にうらやましい。",
      arti: "Bagi orang seperti saya yang butuh 2 jam sekali jalan untuk ke kantor, orang yang hanya beberapa menit berjalan kaki ke tempat kerja sungguh membuat iri.",
      optYomi: ["{人間|にんげん}から", "{数分|すうふん}なんて", "{職場|しょくば}まで{歩|ある}いて", null],
      optArti: ["dari (sudut pandang) orang", "hanya beberapa menit", "berjalan kaki ke tempat kerja", "kalau (dari ...)"],
    },
    40: {
      yomi: "{近年|きんねん}の{急速|きゅうそく}なインターネットの{普及|ふきゅう}がマスメディアに＿＿ ＿＿ ★ ＿＿。",
      arti: "Pengaruh yang diberikan oleh pesatnya penyebaran internet belakangan ini terhadap media massa tidaklah kecil.",
      optYomi: ["{少|すく}なからぬ", null, "{与|あた}えた", "{影響|えいきょう}は"],
      optArti: ["tidak sedikit", "ada (sesuatu)", "yang diberikan", "pengaruhnya"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{気|き}にかかるだろうが", "{気|き}にかかるわけがないし", "{気|き}にかかるといっても", "{気|き}にかかるかはともかく"],
      optArti: ["mungkin terpikir, tetapi", "tidak mungkin terpikir, dan", "meskipun dibilang terpikir", "terlepas dari terpikir atau tidak"],
    },
    42: {
      optYomi: ["{気|き}が{揉|も}めるのである", "{気|き}が{揉|も}めそうだから", "{気|き}を{揉|も}むとか", "{気|き}を{揉|も}むようなものだ"],
      optArti: ["itulah yang membuat saya cemas", "karena sepertinya akan cemas", "semacam mencemaskan", "seperti mencemaskan"],
    },
    43: {
      optYomi: ["{朝|あさ}だとお{思|おも}いのはずだ", "{朝|あさ}だと{思|おも}って{頂|いただ}きたい", "{朝|あさ}だったとは{思|おも}いも{寄|よ}らなかった", "{朝|あさ}だったとお{思|おも}いのようだ"],
      optArti: ["Anda pasti mengira itu pagi", "bayangkanlah suatu pagi", "tak disangka ternyata pagi", "sepertinya Anda mengira itu pagi"],
    },
    44: {
      optArti: ["justru sebaliknya", "ngomong-ngomong", "namun", "lalu, maka"],
    },
    45: {
      optArti: ["kapan yang bagus?", "tidak bisakah diapa-apakan?", "kira-kira kapan ya?", "apakah bisa teratasi?"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{筆者|ひっしゃ}は、{現代|げんだい}の{恋愛|れんあい}はどうなってきていると{考|かんが}えているか。",
      arti: "Menurut penulis, bagaimana perkembangan percintaan masa kini?",
      optYomi: [
        "{全|ぜん}{人格|じんかく}でぶつかりあう{関係|かんけい}が{一般的|いっぱんてき}になってきた。",
        "{全|ぜん}{人格|じんかく}でぶつかりあう{関係|かんけい}は{現実|げんじつ}には{存在|そんざい}しなくなった。",
        "{自己|じこ}の{一部|いちぶ}しか{見|み}せあわない{関係|かんけい}は{敬遠|けいえん}されてきている。",
        "お{互|たが}いに{自己|じこ}の{一部|いちぶ}しか{見|み}せあわないようになってきている。",
      ],
      optArti: [
        "Hubungan yang saling berbenturan dengan seluruh kepribadian menjadi umum.",
        "Hubungan yang saling berbenturan dengan seluruh kepribadian kini tidak ada lagi dalam kenyataan.",
        "Hubungan yang hanya saling memperlihatkan sebagian diri mulai dihindari.",
        "Masing-masing mulai hanya saling memperlihatkan sebagian dirinya.",
      ],
    },
    47: {
      yomi: "{歴史学|れきしがく}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang ilmu sejarah?",
      optYomi: [
        "{社会|しゃかい}の{流|なが}れを{読|よ}みとり、{将来|しょうらい}のために{記録|きろく}しておくものである。",
        "{現代|げんだい}{社会|しゃかい}や{人々|ひとびと}の{活動|かつどう}の{変化|へんか}を、{過去|かこ}の{時代|じだい}と{比較|ひかく}するものである。",
        "{社会|しゃかい}の{変化|へんか}を{時間|じかん}の{流|なが}れのなかに{位置|いち}づけて、{進|すす}む{道|みち}を{示|しめ}すものである。",
        "{社会|しゃかい}の{変化|へんか}や{流|なが}れを{振|ふ}り{返|かえ}り、これまでの{出来事|できごと}を{検証|けんしょう}するものである。",
      ],
      optArti: [
        "Ilmu yang membaca arus masyarakat dan mencatatnya untuk masa depan.",
        "Ilmu yang membandingkan perubahan masyarakat masa kini dan kegiatan orang dengan zaman dahulu.",
        "Ilmu yang menempatkan perubahan masyarakat dalam arus waktu dan menunjukkan jalan ke depan.",
        "Ilmu yang menengok kembali perubahan dan arus masyarakat lalu menguji peristiwa selama ini.",
      ],
    },
    48: {
      yomi: "{才覚|さいかく}のある{人|ひと}について、この{文章|ぶんしょう}ではどのように{述|の}べられているか。",
      arti: "Bagaimana tulisan ini menjelaskan tentang orang yang punya kecerdikan (bakat)?",
      optYomi: [
        "{優秀|ゆうしゅう}な{能力|のうりょく}を{使|つか}って、{社員|しゃいん}を{率|ひき}いてゆく{責任|せきにん}がある。",
        "{人並|ひとな}み{外|はず}れた{能力|のうりょく}をビジネスに{活|い}かすことが{必要|ひつよう}である。",
        "{誰|だれ}の{助|たす}けを{借|か}りることもなく、{企業|きぎょう}を{成功|せいこう}に{導|みちび}くことができる。",
        "{他者|たしゃ}の{支|ささ}えによって{初|はじ}めて{能力|のうりょく}をビジネスに{活用|かつよう}することができる。",
      ],
      optArti: [
        "Ia bertanggung jawab memimpin karyawan dengan kemampuannya yang unggul.",
        "Ia perlu memanfaatkan kemampuan luar biasanya untuk bisnis.",
        "Ia bisa membawa perusahaan menuju sukses tanpa bantuan siapa pun.",
        "Ia baru bisa memanfaatkan kemampuannya untuk bisnis berkat dukungan orang lain.",
      ],
    },
    49: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{絶望|ぜつぼう}を{希望|きぼう}に{変|か}える{方法|ほうほう}を{模索|もさく}しなければならない。",
        "{絶望|ぜつぼう}していては{希望|きぼう}にたどり{着|つ}くことはできない。",
        "{絶望|ぜつぼう}に{立|た}ち{向|む}かってゆけばその{先|さき}に{希望|きぼう}がある。",
        "{絶望|ぜつぼう}から{目|め}をそらすと{希望|きぼう}が{見|み}えてくる。",
      ],
      optArti: [
        "Kita harus mencari cara mengubah keputusasaan menjadi harapan.",
        "Kalau berputus asa, kita tidak bisa sampai pada harapan.",
        "Jika kita menghadapi keputusasaan, di baliknya ada harapan.",
        "Jika kita memalingkan mata dari keputusasaan, harapan akan terlihat.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "①この{効果|こうか}とはどのようなことか。",
      arti: "Apa yang dimaksud \"① efek ini\"?",
      optYomi: [
        "{最初|さいしょ}に{与|あた}えられた{情報|じょうほう}が、その{後|ご}の{印象|いんしょう}を{方向|ほうこう}づける。",
        "{最初|さいしょ}に{与|あた}えられた{情報|じょうほう}で{印象|いんしょう}が{決|き}まり、{変化|へんか}しない。",
        "{最初|さいしょ}に{受|う}ける{印象|いんしょう}は、{後|あと}からの{情報|じょうほう}によって{変化|へんか}する。",
        "{最初|さいしょ}に{受|う}ける{印象|いんしょう}が{強|つよ}ければ、{否定的|ひていてき}な{印象|いんしょう}につながらない。",
      ],
      optArti: [
        "Informasi yang diberikan pertama kali mengarahkan kesan selanjutnya.",
        "Kesan ditentukan oleh informasi pertama dan tidak berubah.",
        "Kesan pertama berubah karena informasi yang datang kemudian.",
        "Jika kesan pertama kuat, tidak akan berujung pada kesan negatif.",
      ],
    },
    51: {
      yomi: "②{後|あと}の{手|て}がかりによって{印象|いんしょう}がつくられやすいとあるが、なぜか。",
      arti: "Tertulis \"② kesan mudah terbentuk oleh petunjuk yang datang kemudian\"; mengapa?",
      optYomi: [
        "{前|まえ}に{与|あた}えられた{手|て}がかりが{不十分|ふじゅうぶん}だから。",
        "{前|まえ}に{与|あた}えられた{手|て}がかりより{後|あと}のものが{新|あたら}しく{思|おも}えるから。",
        "{後|あと}で{与|あた}えられた{手|て}がかりがより{重要|じゅうよう}に{思|おも}えるから。",
        "{後|あと}で{与|あた}えられた{手|て}がかりが{前|まえ}のものと{置|お}き{換|か}わるから。",
      ],
      optArti: [
        "Karena petunjuk yang diberikan sebelumnya tidak cukup.",
        "Karena petunjuk yang belakangan terasa lebih baru daripada yang sebelumnya.",
        "Karena petunjuk yang diberikan belakangan terasa lebih penting.",
        "Karena petunjuk yang diberikan belakangan menggantikan yang sebelumnya.",
      ],
    },
    52: {
      yomi: "{初頭|しょとう}{効果|こうか}と{新近|しんきん}{効果|こうか}の{二|ふた}つの{説明|せつめい}からわかることは{何|なに}か。",
      arti: "Apa yang bisa dipahami dari penjelasan dua efek, efek primasi dan efek resensi?",
      optYomi: [
        "よく{知|し}らない{人|ひと}の{印象|いんしょう}は、{与|あた}えられる{情報|じょうほう}の{順序|じゅんじょ}と{受|う}け{手|て}によって{変化|へんか}する。",
        "よく{知|し}らない{人|ひと}の{印象|いんしょう}は、{後|あと}に{与|あた}えられた{情報|じょうほう}によって{決定|けってい}される。",
        "よく{知|し}らない{人|ひと}に{好|こう}{印象|いんしょう}を{与|あた}えるには、{初対面|しょたいめん}の{印象|いんしょう}が{肝心|かんじん}である。",
        "よく{知|し}らない{人|ひと}に{対|たい}して{肯定的|こうていてき}な{印象|いんしょう}を{持|も}つことは{困難|こんなん}である。",
      ],
      optArti: [
        "Kesan terhadap orang yang tidak dikenal berubah tergantung urutan informasi yang diberikan dan siapa penerimanya.",
        "Kesan terhadap orang yang tidak dikenal ditentukan oleh informasi yang diberikan belakangan.",
        "Untuk memberi kesan baik kepada orang yang tidak dikenal, kesan pertemuan pertama itu penting.",
        "Sulit memiliki kesan positif terhadap orang yang tidak dikenal.",
      ],
    },
    53: {
      yomi: "①{私|わたし}たちの{世代|せだい}とあるが、{筆者|ひっしゃ}の{世代|せだい}にとっての{読書|どくしょ}はどのようなものであったか。",
      arti: "Tertulis \"① generasi kami\"; bagaimana membaca bagi generasi penulis?",
      optYomi: [
        "{社会|しゃかい}{生活|せいかつ}を{営|いとな}む{上|うえ}で{必須|ひっす}であると{信|しん}じられていた。",
        "{近年|きんねん}の{社会|しゃかい}{経済|けいざい}のあり{方|かた}には{合|あ}わないものとされていた。",
        "{映像|えいぞう}や{音響|おんきょう}メディアと{同列|どうれつ}に{扱|あつか}われるようになってきていた。",
        "{人間|にんげん}の{成長|せいちょう}に{不可欠|ふかけつ}だと{自信|じしん}をもって{言|い}えなくなってきていた。",
      ],
      optArti: [
        "Diyakini mutlak perlu untuk menjalani kehidupan sosial.",
        "Dianggap tidak cocok dengan bentuk sosial-ekonomi belakangan ini.",
        "Mulai diperlakukan setara dengan media visual dan audio.",
        "Mulai tidak bisa lagi dikatakan dengan yakin sebagai hal yang tak tergantikan bagi pertumbuhan manusia.",
      ],
    },
    54: {
      yomi: "②「{時代|じだい}の{流|なが}れ」は、{書物|しょもつ}にどのような{変化|へんか}をもたらしたか。",
      arti: "Perubahan apa yang dibawa \"② arus zaman\" terhadap buku?",
      optYomi: [
        "{映像化|えいぞうか}することを{目的|もくてき}として{書|か}かれた{本|ほん}が{増|ふ}えた。",
        "{情報|じょうほう}を{提供|ていきょう}する{本|ほん}やすぐに{読|よ}まれなくなる{本|ほん}が{増|ふ}えた。",
        "{楽|たの}しみや{喜|よろこ}びが{与|あた}えられ{心|こころ}の{支|ささ}えになるような{本|ほん}が{増|ふ}えた。",
        "{教育的|きょういくてき}に{望|のぞ}ましくない{本|ほん}や{悪影響|あくえいきょう}を{与|あた}えるような{本|ほん}が{増|ふ}えた。",
      ],
      optArti: [
        "Buku yang ditulis dengan tujuan untuk difilmkan bertambah.",
        "Buku yang menyajikan informasi dan buku yang cepat tidak dibaca lagi bertambah.",
        "Buku yang memberi kesenangan, kegembiraan, dan menjadi penopang hati bertambah.",
        "Buku yang tidak baik secara pendidikan atau berpengaruh buruk bertambah.",
      ],
    },
    55: {
      yomi: "1980{年代|ねんだい}{半|なか}ば{以降|いこう}のメディア{論|ろん}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan teori media sejak pertengahan 1980-an?",
      optYomi: [
        "{活字|かつじ}{文化|ぶんか}を{急激|きゅうげき}に{変容|へんよう}させた{要因|よういん}を{把握|はあく}していなかった。",
        "{活字|かつじ}{文化|ぶんか}が{衰弱|すいじゃく}していく{時期|じき}を{予測|よそく}していなかった。",
        "{活字|かつじ}{文化|ぶんか}の{衰退|すいたい}{後|ご}の{状況|じょうきょう}を{見通|みとお}していなかった。",
        "{活字|かつじ}{文化|ぶんか}と{映像|えいぞう}{文化|ぶんか}の{本質|ほんしつ}を{明|あき}らかにしていなかった。",
      ],
      optArti: [
        "Tidak memahami faktor yang membuat budaya cetak berubah drastis.",
        "Tidak memprediksi kapan budaya cetak akan melemah.",
        "Tidak meramalkan keadaan setelah budaya cetak merosot.",
        "Tidak mengungkap hakikat budaya cetak dan budaya visual.",
      ],
    },
    56: {
      yomi: "①けっして{容易|ようい}ではありませんとあるが、なぜか。",
      arti: "Tertulis \"① sama sekali tidak mudah\"; mengapa?",
      optYomi: [
        "{人|ひと}は{社会|しゃかい}に{存在|そんざい}するリスクに{直撃|ちょくげき}されるから",
        "{個人|こじん}の{不安|ふあん}や{不満|ふまん}には{共通点|きょうつうてん}がないから",
        "{個人|こじん}はそれぞれの{集団|しゅうだん}に{縛|しば}られるから",
        "{本人|ほんにん}だけの{問題|もんだい}だと{思|おも}えるから",
      ],
      optArti: [
        "Karena orang terkena langsung risiko yang ada di masyarakat",
        "Karena kecemasan dan ketidakpuasan tiap orang tidak punya kesamaan",
        "Karena setiap orang terikat pada kelompoknya masing-masing",
        "Karena terasa sebagai masalah dirinya sendiri saja",
      ],
    },
    57: {
      yomi: "②そのような{個人|こじん}とはどのような{個人|こじん}か。",
      arti: "Seperti apa \"② individu semacam itu\"?",
      optYomi: [
        "{自分|じぶん}の{存在|そんざい}を{認|みと}めない{社会|しゃかい}は{認|みと}めようとしない{人|ひと}",
        "{自分|じぶん}を{圧迫|あっぱく}する{社会|しゃかい}に{立|た}ち{向|む}かおうとする{人|ひと}",
        "{自分|じぶん}の{意識|いしき}を{社会|しゃかい}に{向|む}けようとしない{人|ひと}",
        "{自分|じぶん}を{認|みと}めない{社会|しゃかい}に{生|い}きている{人|ひと}",
      ],
      optArti: [
        "Orang yang tidak mau mengakui masyarakat yang tidak mengakui keberadaannya",
        "Orang yang berusaha melawan masyarakat yang menekannya",
        "Orang yang tidak mau mengarahkan kesadarannya pada masyarakat",
        "Orang yang hidup di masyarakat yang tidak mengakuinya",
      ],
    },
    58: {
      yomi: "{平等化|びょうどうか}{社会|しゃかい}を{生|い}きる〈{私|わたし}〉にとって{他者|たしゃ}とは{何|なに}か。",
      arti: "Bagi \"aku\" yang hidup di masyarakat yang setara, apa itu orang lain?",
      optYomi: [
        "{自分|じぶん}の{不完全|ふかんぜん}さを{感|かん}じさせられる{社会|しゃかい}や{周囲|しゅうい}の{人々|ひとびと}",
        "{相互|そうご}に{助|たす}け{合|あ}わなければならないことを{教|おし}えてくれる{人々|ひとびと}",
        "お{互|たが}いを{認|みと}め{合|あ}える{人々|ひとびと}や{自分|じぶん}に{役割|やくわり}を{与|あた}えてくれる{社会|しゃかい}",
        "{一人|ひとり}ひとりが{平等|びょうどう}であることを{意識|いしき}させてくれる{社会|しゃかい}",
      ],
      optArti: [
        "Masyarakat dan orang sekitar yang membuat kita merasakan ketidaksempurnaan diri",
        "Orang-orang yang mengajarkan bahwa kita harus saling menolong",
        "Orang-orang yang bisa saling mengakui dan masyarakat yang memberi peran kepada kita",
        "Masyarakat yang membuat kita sadar bahwa setiap orang setara",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{筆者|ひっしゃ}は、①{意表|いひょう}をついた{連鎖|れんさ}{反応|はんのう}をABCDを{用|もち}いてどのように{説明|せつめい}しているか。",
      arti: "Bagaimana penulis menjelaskan \"① reaksi berantai yang tak terduga\" dengan memakai A, B, C, D?",
      optYomi: [
        "BをおそうAを{除去|じょきょ}した{結果|けっか}、あらたな{強|つよ}いAが{発生|はっせい}してCやDをおそうようになる。",
        "BをおそうAを{除去|じょきょ}した{結果|けっか}、Aに{食|く}い{殺|ころ}されていたCやDがBをおそうようになる。",
        "BをおそうCやDを{除去|じょきょ}した{結果|けっか}、あらたなAが{増加|ぞうか}してBをおそうようになる。",
        "BをおそうCやDを{除去|じょきょ}した{結果|けっか}、CやDに{食|く}い{殺|ころ}されていたAがBをおそうようになる。",
      ],
      optArti: [
        "Akibat membasmi A yang menyerang B, muncul A baru yang kuat lalu menyerang C dan D.",
        "Akibat membasmi A yang menyerang B, C dan D yang tadinya dimangsa A mulai menyerang B.",
        "Akibat membasmi C dan D yang menyerang B, A yang baru bertambah lalu menyerang B.",
        "Akibat membasmi C dan D yang menyerang B, A yang tadinya dimangsa C dan D mulai menyerang B.",
      ],
    },
    60: {
      yomi: "②このこととあるが、このこととは{何|なに}か。",
      arti: "Tertulis \"② hal ini\"; apa yang dimaksud?",
      optYomi: ["{化学|かがく}{薬品|やくひん}の{開発|かいはつ}", "{化学|かがく}{薬品|やくひん}の{有用性|ゆうようせい}", "{化学|かがく}{薬品|やくひん}の{無効性|むこうせい}", "{化学|かがく}{薬品|やくひん}の{量|りょう}と{質|しつ}の{強大化|きょうだいか}"],
      optArti: ["Pengembangan bahan kimia", "Kegunaan bahan kimia", "Ketidakefektifan bahan kimia", "Makin besar dan kuatnya jumlah serta kadar bahan kimia"],
    },
    61: {
      yomi: "{筆者|ひっしゃ}が{考|かんが}える③{最初|さいしょ}の{出発点|しゅっぱつてん}とはいつのことか。",
      arti: "Kapan \"③ titik awal pertama\" menurut penulis?",
      optYomi: [
        "{人間|にんげん}が{採集|さいしゅう}{活動|かつどう}によって{生活|せいかつ}を{営|いとな}みはじめたころ",
        "{人間|にんげん}が{土地|とち}を{牧場|ぼくじょう}や{田畑|たはた}として{使用|しよう}しはじめたころ",
        "{企業|きぎょう}に{資本|しほん}が{集|あつ}まり、{産業|さんぎょう}が{発展|はってん}しはじめたころ",
        "{文明|ぶんめい}が{高度化|こうどか}し、{工業|こうぎょう}が{盛|さか}んになりはじめたころ",
      ],
      optArti: [
        "Saat manusia mulai hidup dengan kegiatan meramu",
        "Saat manusia mulai memakai tanah sebagai padang ternak dan sawah-ladang",
        "Saat modal berkumpul di perusahaan dan industri mulai berkembang",
        "Saat peradaban makin maju dan industri mulai berkembang pesat",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}によると、{自然界|しぜんかい}のバランスがくずれた{原因|げんいん}は{何|なに}か。",
      arti: "Menurut penulis, apa penyebab rusaknya keseimbangan alam?",
      optYomi: [
        "{人間|にんげん}が{都市|とし}{発展|はってん}のために{大規模|だいきぼ}な{建設|けんせつ}を{進|すす}めてきたこと",
        "{人間|にんげん}が{薬剤|やくざい}{開発|かいはつ}のために{各種|かくしゅ}{生物|せいぶつ}{群|ぐん}を{利用|りよう}してきたこと",
        "{人間|にんげん}が{人間|にんげん}に{利用|りよう}{価値|かち}のない{生物|せいぶつ}{群|ぐん}を{排除|はいじょ}してきたこと",
        "{人間|にんげん}が{人間|にんげん}いがいの{生物|せいぶつ}{群|ぐん}の{存在|そんざい}を{無視|むし}してきたこと",
      ],
      optArti: [
        "Manusia melakukan pembangunan besar-besaran demi perkembangan kota",
        "Manusia memanfaatkan berbagai kelompok makhluk hidup untuk mengembangkan obat",
        "Manusia menyingkirkan kelompok makhluk hidup yang tidak berguna bagi manusia",
        "Manusia mengabaikan keberadaan kelompok makhluk hidup selain manusia",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "AとBで{紹介|しょうかい}されている{店|みせ}の{共通点|きょうつうてん}は{何|なに}か。",
      arti: "Apa kesamaan toko yang diperkenalkan di A dan B?",
      optYomi: [
        "{商品|しょうひん}が{見|み}やすく{並|なら}べられていること",
        "{様々|さまざま}な{商品|しょうひん}がそろえられていること",
        "{時間|じかん}を{気|き}にせずに{買|か}い{物|もの}できること",
        "{客|きゃく}の{要望|ようぼう}を{品|しな}ぞろえに{反映|はんえい}していること",
      ],
      optArti: [
        "Barang ditata agar mudah dilihat",
        "Tersedia berbagai macam barang",
        "Bisa berbelanja tanpa memikirkan waktu",
        "Permintaan pelanggan tercermin dalam pilihan barang",
      ],
    },
    64: {
      yomi: "AとBで{紹介|しょうかい}されている{店|みせ}の{経営|けいえい}{方針|ほうしん}は、どのような{点|てん}で{異|こと}なるか。",
      arti: "Dalam hal apa kebijakan pengelolaan toko di A dan B berbeda?",
      optYomi: [
        "Aの{店|みせ}は{客|きゃく}への{対応|たいおう}を{重視|じゅうし}し、Bの{店|みせ}は{購入|こうにゅう}の{効率|こうりつ}を{重視|じゅうし}している。",
        "Aの{店|みせ}は{固定|こてい}{客|きゃく}の{確保|かくほ}を{重視|じゅうし}し、Bの{店|みせ}は{新規|しんき}の{客|きゃく}の{増加|ぞうか}を{重視|じゅうし}している。",
        "Aの{店|みせ}は{商品|しょうひん}の{価格|かかく}{設定|せってい}を{重視|じゅうし}し、Bの{店|みせ}は{顧客|こきゃく}{満足度|まんぞくど}を{重視|じゅうし}している。",
        "Aの{店|みせ}は{商品|しょうひん}のデザイン{性|せい}を{重視|じゅうし}し、Bの{店|みせ}は{商品|しょうひん}の{実用性|じつようせい}を{重視|じゅうし}している。",
      ],
      optArti: [
        "Toko A mengutamakan pelayanan kepada pelanggan, toko B mengutamakan efisiensi pembelian.",
        "Toko A mengutamakan menjaga pelanggan tetap, toko B mengutamakan pertambahan pelanggan baru.",
        "Toko A mengutamakan penetapan harga, toko B mengutamakan kepuasan pelanggan.",
        "Toko A mengutamakan desain produk, toko B mengutamakan kepraktisan produk.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "{中学生|ちゅうがくせい}のころの{筆者|ひっしゃ}の{親|おや}に{対|たい}する{態度|たいど}はどのようなものだったか。",
      arti: "Bagaimana sikap penulis terhadap orang tuanya saat SMP?",
      optYomi: [
        "{話|はなし}らしい{話|はなし}はしようとしなかった。",
        "{話|はな}しかけられないように{顔|かお}を{合|あ}わせなかった。",
        "{親|おや}を{寂|さび}しがらせないように{気|き}をつかっていた。",
        "{言葉|ことば}として{意味|いみ}をなさないやりとりを{避|さ}けていた。",
      ],
      optArti: [
        "Tidak berusaha berbicara yang sungguh-sungguh.",
        "Tidak bertatap muka agar tidak diajak bicara.",
        "Berusaha agar orang tua tidak merasa kesepian.",
        "Menghindari percakapan yang tidak bermakna sebagai kata-kata.",
      ],
    },
    66: {
      yomi: "①{気持|きもち}は{安定|あんてい}していたとあるが、なぜか。",
      arti: "Tertulis \"① perasaan saya tenang\"; mengapa?",
      optYomi: [
        "{親|おや}と{時々|ときどき}「{対話|たいわ}」による{交流|こうりゅう}が{持|も}てたから",
        "{親|おや}が「{対話|たいわ}」をのぞんでいることが{分|わ}かったから",
        "{親|おや}が{自分|じぶん}を{気|き}にかけていることを{確認|かくにん}できたから",
        "{親|おや}が{自分|じぶん}のことを{理解|りかい}していると{感|かん}じたから",
      ],
      optArti: [
        "Karena kadang bisa berinteraksi lewat \"dialog\" dengan orang tua",
        "Karena tahu orang tua menginginkan \"dialog\"",
        "Karena bisa memastikan orang tua memperhatikan dirinya",
        "Karena merasa orang tua memahami dirinya",
      ],
    },
    67: {
      yomi: "②{長|なが}い{目|め}で{見|み}れば、あまりいい{影響|えいきょう}を{残|のこ}さないとあるが、なぜか。",
      arti: "Tertulis \"② dalam jangka panjang tidak meninggalkan pengaruh yang baik\"; mengapa?",
      optYomi: [
        "{親|おや}が{不安|ふあん}な{気持|きもち}でアドバイスすると、{子供|こども}の{不安|ふあん}も{増|ま}すから",
        "{親|おや}の{価値観|かちかん}によるアドバイスは、{子供|こども}にとってあまり{役|やく}に{立|た}たないから",
        "{親|おや}が{子供|こども}の{世界|せかい}に{入|はい}ろうとすると、{子供|こども}は{心|こころ}を{閉|と}ざしてしまうから",
        "{親|おや}が{子供|こども}にかかわりすぎると、{子供|こども}は{自分|じぶん}の{世界|せかい}をつくりにくくなるから",
      ],
      optArti: [
        "Karena jika orang tua memberi nasihat dengan cemas, kecemasan anak juga bertambah",
        "Karena nasihat berdasarkan nilai-nilai orang tua tidak terlalu berguna bagi anak",
        "Karena jika orang tua berusaha masuk ke dunia anak, anak akan menutup hatinya",
        "Karena jika orang tua terlalu ikut campur, anak sulit membangun dunianya sendiri",
      ],
    },
    68: {
      yomi: "{親|おや}は{子供|こども}に{対|たい}してどうあるべきだと、{筆者|ひっしゃ}は{考|かんが}えているか。",
      arti: "Menurut penulis, bagaimana seharusnya orang tua terhadap anak?",
      optYomi: [
        "{子供|こども}との{意思|いし}{疎通|そつう}を{図|はか}り、{交流|こうりゅう}を{深|ふか}める。",
        "{子供|こども}との{距離|きょり}を{受|う}け{入|い}れ、{成長|せいちょう}を{見守|みまも}る。",
        "{子供|こども}の{気持|きもち}を{理解|りかい}し、{愛情|あいじょう}を{言葉|ことば}にする。",
        "{子供|こども}の{悩|なや}みを{共有|きょうゆう}し、かつ{適度|てきど}な{距離|きょり}を{保|たも}つ。",
      ],
      optArti: [
        "Berusaha saling memahami dengan anak dan memperdalam interaksi.",
        "Menerima jarak dengan anak dan mengawasi pertumbuhannya.",
        "Memahami perasaan anak dan mengungkapkan kasih sayang dengan kata-kata.",
        "Ikut menanggung kesulitan anak sekaligus menjaga jarak yang wajar.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "この{病院|びょういん}で{基本|きほん}{検査|けんさ}{項目|こうもく}のほかに、{追加|ついか}の{検査|けんさ}も{受|う}ける{必要|ひつよう}がある{場合|ばあい}、{予約|よやく}はどのようにしなければならない{決|き}まりになっているか。",
      arti: "Jika di rumah sakit ini perlu menjalani pemeriksaan tambahan selain item pemeriksaan dasar, bagaimana aturan pemesanannya?",
      optYomi: [
        "{電話|でんわ}で、2{日|か}{前|まえ}までに{予約|よやく}する。",
        "{電話|でんわ}で、4{日|か}{前|まえ}までに{予約|よやく}する。",
        "Eメールで、2{日|か}{前|まえ}までに{予約|よやく}する。",
        "Eメールで、4{日|か}{前|まえ}までに{予約|よやく}する。",
      ],
      optArti: [
        "Memesan lewat telepon paling lambat 2 hari sebelumnya.",
        "Memesan lewat telepon paling lambat 4 hari sebelumnya.",
        "Memesan lewat surel paling lambat 2 hari sebelumnya.",
        "Memesan lewat surel paling lambat 4 hari sebelumnya.",
      ],
    },
    70: {
      yomi: "アッサさんは{健康|けんこう}{診断書|しんだんしょ}を{会社|かいしゃ}{指定|してい}の{用紙|ようし}を{使|つか}って、{英文|えいぶん}で{作成|さくせい}してもらう{必要|ひつよう}がある。{作成|さくせい}{料金|りょうきん}を{受診|じゅしん}{当日|とうじつ}に{支払|しはら}うこと{以外|いがい}に{何|なに}をすることが{必要|ひつよう}か。",
      arti: "Assa-san perlu dibuatkan surat keterangan sehat dalam bahasa Inggris memakai formulir yang ditentukan perusahaannya. Selain membayar biaya pembuatan pada hari pemeriksaan, apa lagi yang perlu ia lakukan?",
      optYomi: [
        "{予約|よやく}{時|じ}に{英文|えいぶん}の{診断書|しんだんしょ}の{作成|さくせい}を{依頼|いらい}し、{受診|じゅしん}{日|び}までに{用紙|ようし}を{郵送|ゆうそう}する。",
        "{予約|よやく}{時|じ}に{英文|えいぶん}の{診断書|しんだんしょ}の{作成|さくせい}を{依頼|いらい}し、{受診|じゅしん}{当日|とうじつ}{用紙|ようし}を{渡|わた}す。",
        "{受診|じゅしん}{当日|とうじつ}に{英文|えいぶん}の{診断書|しんだんしょ}の{作成|さくせい}を{依頼|いらい}し、{受診|じゅしん}{後|ご}{用紙|ようし}を{郵送|ゆうそう}する。",
        "{受診|じゅしん}{当日|とうじつ}に{英文|えいぶん}の{診断書|しんだんしょ}の{作成|さくせい}を{依頼|いらい}し、{用紙|ようし}を{渡|わた}す。",
      ],
      optArti: [
        "Meminta pembuatan surat keterangan berbahasa Inggris saat memesan, lalu mengirim formulir lewat pos sebelum hari pemeriksaan.",
        "Meminta pembuatan surat keterangan berbahasa Inggris saat memesan, lalu menyerahkan formulir pada hari pemeriksaan.",
        "Meminta pembuatan surat keterangan berbahasa Inggris pada hari pemeriksaan, lalu mengirim formulir lewat pos setelahnya.",
        "Meminta pembuatan surat keterangan berbahasa Inggris pada hari pemeriksaan, lalu menyerahkan formulir.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：銀杏が衣を脱ぐ時 ──
    "7": {
      yomi: `{毎年|まいとし}、{秋|あき}も{深|ふか}まって{朝夕|あさゆう}の{冷|ひ}え{込|こ}みが{厳|きび}しさを{増|ま}す{今時分|いまじぶん}になると、{北|きた}の{郷里|きょうり}の{菩提寺|ぼだいじ}の{境内|けいだい}にある{銀杏|いちょう}の{巨木|きょぼく}のことが{気|き}にかかる。

[41]、その{銀杏|いちょう}が{老木|ろうぼく}だから、{台風|たいふう}でもきたら{大枝|おおえだ}が{折|お}れやしないかと{心配|しんぱい}するのではない。{今年|ことし}の{落葉|らくよう}はもう{終|お}わったか、どうか。まだなら、{落葉|らくよう}するまでにあと{何日|なんにち}ぐらい{間|ま}があるだろうか。そう{思|おも}って[42]。

その{銀杏|いちょう}は{大木|たいぼく}だから、{葉|は}を{厚|あつ}く{繁|しげ}らせていて、{秋|あき}の{黄葉|こうよう}はまことに{見事|みごと}である。それに、{落葉|らくよう}の{光景|こうけい}も{思|おも}わず{息|いき}を{呑|の}むほどのものであるらしい。{私|わたし}はまだ{見|み}たことがないから、{予定|よてい}が{立|た}つようなら、いちど{出|で}かけてみてもいいと{思|おも}っている。けれども、{銀杏|いちょう}としても{落葉|らくよう}の{予測|よそく}などつくわけがないだろう。

{一枚|いちまい}や{二枚|にまい}の{落葉|らくよう}なら{話|はなし}は{別|べつ}だが、この{銀杏|いちょう}の{葉|は}は、{短時間|たんじかん}で{一枚|いちまい}{残|のこ}らず{落|お}ちてしまうのだから。

{霜|しも}が{降|お}りたのではないかと{思|おも}われるほど{冷|ひ}え{込|こ}みのきつい、かんと{晴|は}れ{渡|わた}った[43]。{裏山|うらやま}から{昇|のぼ}る{朝日|あさひ}の{光芒|こうぼう}が、{庫裏|くり}の{屋根|やね}を{乗|の}り{越|こ}えて{境内|けいだい}へ{降|お}りてくる。

まず、{銀杏|いちょう}の{一番|いちばん}てっぺんに{朝日|あさひ}が{当|あ}たる。[44]、{暖|あたた}められた{葉|は}が{一枚|いちまい}、ひらと{枝先|えださき}を{離|はな}れて、{舞|ま}い{落|お}ちる。それを{合図|あいず}に、{陽|ひ}を{浴|あ}びた{葉|は}が{次|つぎ}から{次|つぎ}へと{落|お}ちはじめる。ひっきりなしに{落|お}ちる。

{銀杏|いちょう}は、しばしさわさわという{落葉|らくよう}の{音|おと}に{包|つつ}まれる。まるで{分厚|ぶあつ}いこがね{色|いろ}の{衣|ころも}を{足元|あしもと}へ{脱|ぬ}ぎ{落|お}とすかのように、{銀杏|いちょう}はみるみる{裸|はだか}になっていく。

{銀杏|いちょう}に{訊|き}きたい。{今年|ことし}の{落葉|らくよう}は[45]。`,
      arti: `Setiap tahun, ketika musim gugur makin larut dan dingin pagi-sore makin menggigit seperti sekarang ini, saya teringat pohon ginkgo raksasa di halaman kuil keluarga di kampung halaman saya di utara.

[41], bukan berarti saya khawatir dahan besarnya patah kalau ada topan karena ginkgo itu sudah tua. Apakah daunnya tahun ini sudah selesai gugur atau belum? Kalau belum, kira-kira berapa hari lagi sampai daunnya gugur? Karena memikirkan itulah [42].

Karena ginkgo itu pohon besar, daunnya rimbun tebal, dan warna kuningnya di musim gugur sungguh memukau. Selain itu, pemandangan daun gugurnya pun tampaknya sampai membuat orang menahan napas. Saya belum pernah melihatnya, jadi kalau jadwal memungkinkan, saya pikir boleh juga sekali pergi melihatnya. Namun, sang ginkgo sendiri pun tentu tidak bisa memperkirakan kapan daunnya gugur.

Kalau satu dua helai daun gugur, lain cerita, tetapi daun ginkgo ini gugur semuanya tanpa sisa dalam waktu singkat.

[43] suatu pagi yang cerah membentang, begitu dingin sampai terasa seperti embun beku telah turun. Berkas cahaya matahari pagi yang terbit dari bukit belakang melewati atap rumah biksu dan turun ke halaman kuil.

Pertama, matahari pagi menyinari pucuk tertinggi ginkgo. [44], sehelai daun yang telah terhangatkan lepas melayang dari ujung dahan dan jatuh menari. Sebagai tanda, daun-daun yang terkena sinar matahari mulai berguguran satu demi satu. Gugur tanpa henti.

Untuk sesaat, ginkgo terbungkus bunyi daun gugur yang berdesir. Seolah menanggalkan jubah tebal berwarna keemasan ke kakinya, ginkgo itu dengan cepat menjadi telanjang.

Saya ingin bertanya kepada ginkgo itu. Daun gugur tahun ini [45].`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{現代|げんだい}、{恋愛|れんあい}は、{通常|つうじょう}は{部分|ぶぶん}でしか{他者|たしゃ}とかかわり{合|あ}いをもたない{個人|こじん}にとって、{例外的|れいがいてき}に{全|ぜん}{人格|じんかく}と{全|ぜん}{人格|じんかく}とのぶつかりあいを{経験|けいけん}する、{特別|とくべつ}な{関係|かんけい}なのであろうか。それとも、「{全|ぜん}{人格的|じんかくてき}」というのは{幻想|げんそう}で、{恋愛|れんあい}もまた{互|たが}いに{自己|じこ}のある{一面|いちめん}を{見|み}せあう、{部分的|ぶぶんてき}{関係|かんけい}の{一例|いちれい}か。これはもちろん、そのどちらなのか、という{問題|もんだい}ではなく、{個々|ここ}の{恋愛|れんあい}はこの{振幅|しんぷく}のどこかにあるということになるだろう。だが、{趨勢|すうせい}（{注|ちゅう}）としては{後者|こうしゃ}の{方|ほう}へと{振|ふ}れてきているのではないだろうか。
（{草柳|くさやなぎ}{千早|ちはや}「AERA Mook」1999{年|ねん}7{月|がつ}10{日|か}{号|ごう}による）
（{注|ちゅう}）{趨勢|すうせい}：{傾向|けいこう}`,
      arti: `Di masa kini, apakah percintaan merupakan hubungan istimewa di mana individu — yang biasanya hanya berhubungan dengan orang lain secara parsial — secara luar biasa mengalami benturan antara seluruh kepribadian dengan seluruh kepribadian? Ataukah "seluruh kepribadian" itu hanyalah ilusi, dan percintaan pun merupakan salah satu contoh hubungan parsial di mana kedua pihak saling memperlihatkan satu sisi dirinya? Tentu saja, ini bukan soal mana yang benar; setiap percintaan berada di suatu titik dalam rentang ini. Namun, bukankah kecenderungannya (catatan) mulai bergeser ke arah yang terakhir?
(Dari AERA Mook edisi 10 Juli 1999, tulisan Kusayanagi Chihaya)
(Catatan) 趨勢: kecenderungan`,
    },
    "8-2": {
      yomi: `これから{起|お}こる{社会|しゃかい}の{変化|へんか}を{読|よ}みとるのは{難|むずか}しい。しかし、その{変化|へんか}を{見極|みきわ}めて{将来|しょうらい}に{対|たい}する{指針|ししん}をもたなければ、{激|はげ}しく{変化|へんか}する{社会|しゃかい}のなかで{自分|じぶん}を{見失|みうしな}ってしまう。{歴史学|れきしがく}は、この{時代|じだい}の{変化|へんか}を{長|なが}い{時間|じかん}のなかにおいて{見据|みす}え、{社会|しゃかい}の{進|すす}む{方向|ほうこう}を{教|おし}えてくれる{学問|がくもん}である。けっして、{過|す}ぎ{去|さ}った{過去|かこ}を{記憶|きおく}したり、なぞったりする{学問|がくもん}ではない。ゆるやかに{流|なが}れる{時代|じだい}にあっても{激動|げきどう}する{時代|じだい}にあっても、{歴史学|れきしがく}は{私|わたし}たちの{行|ゆ}く（{注|ちゅう}1）{手|て}を{照|て}らす{一条|いちじょう}（{注|ちゅう}2）の{光|ひかり}なのだと{思|おも}う。
（{高山|たかやま}{博|ひろし}『{歴史学|れきしがく}　{未来|みらい}へのまなざし――{中世|ちゅうせい}シチリアからグローバル・ヒストリーへ』による）
（{注|ちゅう}1）{行|ゆ}く{手|て}：{行|ゆ}く{先|さき}
（{注|ちゅう}2）{一条|いちじょう}：{一筋|ひとすじ}`,
      arti: `Membaca perubahan masyarakat yang akan terjadi memang sulit. Namun, jika kita tidak memastikan perubahan itu dan memiliki pedoman untuk masa depan, kita akan kehilangan diri di tengah masyarakat yang berubah drastis. Ilmu sejarah adalah ilmu yang memandang perubahan zaman ini dalam rentang waktu yang panjang dan memberi tahu arah yang ditempuh masyarakat. Sama sekali bukan ilmu untuk menghafal atau menelusuri ulang masa lalu yang sudah berlalu. Baik di zaman yang mengalir tenang maupun di zaman yang bergejolak, menurut saya ilmu sejarah adalah seberkas (catatan 2) cahaya yang menerangi jalan di depan (catatan 1) kita.
(Dari buku karya Takayama Hiroshi tentang ilmu sejarah)
(Catatan 1) 行く手: arah yang akan dituju
(Catatan 2) 一条: seberkas`,
    },
    "8-3": {
      yomi: `{昔|むかし}も{今|いま}も、{才覚|さいかく}というのは{一定|いってい}の{軌道|きどう}から{飛|と}び{出|だ}してゆく{能力|のうりょく}のことで、みんなにそんな{例外的|れいがいてき}な{能力|のうりょく}が{備|そな}わっていたら、そもそも{大地|だいち}にはりつく{農業|のうぎょう}も、{分業|ぶんぎょう}で{成|な}り{立|た}つ{産業|さんぎょう}{社会|しゃかい}も{有|あ}り{得|え}ない。いつの{世|よ}も、{才覚|さいかく}のある{者|もの}が{新|あたら}しいビジネスを{起|お}こしてゆくのは{事実|じじつ}だが、それをビジネスとして{成立|せいりつ}させるのは{社員|しゃいん}の{労働|ろうどう}と{資本|しほん}だし、それがなければ{起業家|きぎょうか}の{才覚|さいかく}が{活|い}きることもない。
（{高村|たかむら}{薫|かおる}『{閑人|かんじん}{生生|せいせい}――{平成|へいせい}{雑記帳|ざっきちょう}{二〇〇七|にせんなな}－{二〇〇九|にせんきゅう}』による）`,
      arti: `Dulu maupun sekarang, kecerdikan adalah kemampuan untuk melompat keluar dari jalur tertentu; kalau semua orang memiliki kemampuan luar biasa seperti itu, pertanian yang terikat pada tanah dan masyarakat industri yang berdiri di atas pembagian kerja tidak akan mungkin ada. Di zaman mana pun, memang benar orang yang cerdik memulai bisnis baru, tetapi yang membuatnya berdiri sebagai bisnis adalah kerja karyawan dan modal, dan tanpa itu kecerdikan sang wirausahawan pun tidak akan berguna.
(Dari buku esai karya Takamura Kaoru, 2007–2009)`,
    },
    "8-4": {
      yomi: `{今|いま}の{世|よ}には{明|あか}るいものは{余|あま}りに{少|すく}なく、{暗|くら}いものは{余|あま}りに{多|おお}く{見|み}えるが、{両者|りょうしゃ}は{別個|べっこ}のばらばらではない。{絶望|ぜつぼう}と{見|み}える{対象|たいしょう}を{嫌|きら}ったり{恐|おそ}れたりして{目|め}をつぶって、そこを{去|さ}れば、もう{希望|きぼう}とは{決|けっ}して{会|あ}えない。{絶望|ぜつぼう}すべき{対象|たいしょう}にはしっかと（{注|ちゅう}1）{絶望|ぜつぼう}し、それを{克服|こくふく}するために{努力|どりょく}し{続|つづ}ければ、それが{希望|きぼう}に{転化|てんか}（{注|ちゅう}2）してゆくのだ。そうだ、{希望|きぼう}は{絶望|ぜつぼう}のど{真|ま}ん{中|なか}の、そのどん{底|ぞこ}に{実在|じつざい}しているのだ。
（むのたけじ『{希望|きぼう}は{絶望|ぜつぼう}のど{真|ま}ん{中|なか}に』による）
（{注|ちゅう}1）しっかと：しっかり
（{注|ちゅう}2）{転化|てんか}：{変化|へんか}`,
      arti: `Di dunia sekarang, hal yang cerah tampak terlalu sedikit dan yang gelap terlalu banyak, tetapi keduanya bukan hal yang terpisah-pisah. Jika kita membenci atau takut pada hal yang tampak sebagai keputusasaan, menutup mata, lalu pergi dari sana, kita tidak akan pernah bertemu harapan. Jika kita benar-benar (catatan 1) berputus asa terhadap hal yang patut membuat putus asa, lalu terus berusaha mengatasinya, itu akan berubah (catatan 2) menjadi harapan. Ya, harapan benar-benar ada di tengah-tengah keputusasaan, di dasarnya yang paling dalam.
(Dari buku karya Muno Takeji, "Harapan Ada di Tengah Keputusasaan")
(Catatan 1) しっかと: dengan sungguh-sungguh
(Catatan 2) 転化: berubah`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `よく{知|し}らない{人|ひと}についてどのようにして{印象|いんしょう}を{受|う}けるのであろうか。アッシュの{有名|ゆうめい}な{実験|じっけん}を{例|れい}にして{紹介|しょうかい}する。{誰彼|だれかれ}についての{印象|いんしょう}というものは、{与|あた}えられる{手|て}がかり（{情報|じょうほう}）の{順序|じゅんじょ}によって{影響|えいきょう}されることを{示|しめ}している。たとえば、「{知的|ちてき}な→{勤勉|きんべん}な→{衝動的|しょうどうてき}な→{批判力|ひはんりょく}のある→{頑固|がんこ}な→{嫉妬深|しっとぶか}い」の{順番|じゅんばん}である{人物|じんぶつ}の{特徴|とくちょう}が{伝|つた}えられると、{多少|たしょう}の{欠点|けってん}はあるが、{適応的|てきおうてき}で{有能|ゆうのう}な{人物|じんぶつ}という{印象|いんしょう}ができる。{一方|いっぽう}、これとは{逆|ぎゃく}の{順番|じゅんばん}「{嫉妬深|しっとぶか}い→{頑固|がんこ}な……→{知的|ちてき}な」では、{深刻|しんこく}な{問題|もんだい}を{抱|かか}えた{人|ひと}とみなされる。（{中略|ちゅうりゃく}）

{最初|さいしょ}の{手|て}がかりが{方向|ほうこう}づけをし、{後|あと}に{与|あた}えられる{手|て}がかりはそれに{結|むす}びつけて{解釈|かいしゃく}されると{考|かんが}えられる。これを{初頭|しょとう}{効果|こうか}という。{初|はじ}めに{与|あた}えられる{手|て}がかりが{否定的|ひていてき}だと{後|あと}の{肯定的|こうていてき}な{手|て}がかりも{胡散臭|うさんくさ}くみなされてしまう。{世|よ}に{言|い}われるように、「{第一|だいいち}{印象|いんしょう}が{肝心|かんじん}」なのである。

なお、①この{効果|こうか}はすべての{人|ひと}に{見|み}られるわけではなく、むしろ、{後|あと}の{手|て}がかりによけいに{影響|えいきょう}を{受|う}ける{人|ひと}もあることも{指摘|してき}されている。あまり{創造的|そうぞうてき}でない{人|ひと}、{認知|にんち}の{物差|ものさ}しが{少|すく}ない（{見方|みかた}の{次元|じげん}が{少|すく}ない）{人|ひと}の{場合|ばあい}には、{与|あた}えられた{手|て}がかりを{順番|じゅんばん}に{維持|いじ}しがたく、{初|はじ}めに{与|あた}えられた{手|て}がかりが{後|あと}に{与|あた}えられた{手|て}がかりによって{上書|うわが}きされてしまい、{結果的|けっかてき}に{初|はじ}めの{手|て}がかりによる{印象|いんしょう}は{薄|うす}くなり、②{後|あと}の{手|て}がかりによって{印象|いんしょう}がつくられやすい（{新近|しんきん}{効果|こうか}）。{相手|あいて}が{複雑|ふくざつ}さに{強|つよ}い{人|ひと}かどうかで、{伝|つた}える{情報|じょうほう}の{順序|じゅんじょ}を{操作|そうさ}することによって{印象|いんしょう}を{変|か}えることも{可能|かのう}である。
（{海保|かいほ}{博之|ひろゆき}{編著|へんちょ}『{瞬間|しゅんかん}{情報|じょうほう}{処理|しょり}の{心理学|しんりがく}』による）`,
      arti: `Bagaimana kita mendapat kesan tentang orang yang tidak begitu kita kenal? Saya akan memperkenalkan eksperimen terkenal Asch sebagai contoh. Eksperimen itu menunjukkan bahwa kesan terhadap seseorang dipengaruhi oleh urutan petunjuk (informasi) yang diberikan. Misalnya, jika ciri seseorang disampaikan dengan urutan "cerdas → rajin → impulsif → kritis → keras kepala → pencemburu", terbentuk kesan orang yang adaptif dan cakap meski punya sedikit kekurangan. Sebaliknya, dengan urutan terbalik "pencemburu → keras kepala ... → cerdas", ia dianggap orang yang memiliki masalah serius. (dihilangkan)

Diduga petunjuk pertama memberi arah, dan petunjuk yang diberikan kemudian ditafsirkan dengan dikaitkan pada arah itu. Ini disebut efek primasi. Jika petunjuk pertama negatif, petunjuk positif yang menyusul pun dianggap mencurigakan. Seperti kata orang, "kesan pertama itu penting".

Namun, juga ditunjukkan bahwa ① efek ini tidak terlihat pada semua orang; justru ada orang yang lebih terpengaruh oleh petunjuk yang belakangan. Pada orang yang kurang kreatif, atau yang alat ukur kognisinya sedikit (dimensi cara pandangnya sedikit), sulit mempertahankan petunjuk sesuai urutan, sehingga petunjuk yang diberikan pertama ditimpa oleh petunjuk yang diberikan belakangan; akibatnya kesan dari petunjuk pertama menipis, dan ② kesan mudah terbentuk oleh petunjuk yang belakangan (efek resensi). Tergantung apakah lawan bicara tahan terhadap kerumitan atau tidak, kesan pun bisa diubah dengan mengatur urutan informasi yang disampaikan.
(Dari buku psikologi pemrosesan informasi seketika, disunting Kaiho Hiroyuki)`,
    },
    "9-2": {
      yomi: `{書|しょ}を{読|よ}むという{行為|こうい}が、{人間|にんげん}の{成長|せいちょう}や{知的|ちてき}{能力|のうりょく}の{向上|こうじょう}に{必須|ひっす}のものであることを、かつての{社会|しゃかい}は{経験|けいけん}{法則|ほうそく}{的|てき}に{理解|りかい}していたのではないだろうか。{素読|そどく}（{注|ちゅう}1）などは{強制的|きょうせいてき}、{修養|しゅうよう}（{注|ちゅう}2）{的|てき}なものではあるが、{読書|どくしょ}{習慣|しゅうかん}の{形成|けいせい}を{何|なに}よりも{重視|じゅうし}する{教育|きょういく}メソッド（{注|ちゅう}3）であったことは{確|たし}かである。しかし、①{私|わたし}たちの{世代|せだい}はどうであろうか。{書物|しょもつ}というものが{映像|えいぞう}や{音響|おんきょう}メディアなどと{単純|たんじゅん}に{比較|ひかく}することを{許|ゆる}さない{必需品|ひつじゅひん}であり、{読書|どくしょ}は{基本的|きほんてき}な{能力|のうりょく}であるという{確信|かくしん}をいだいてきたものの、{近年|きんねん}の{社会|しゃかい}{経済|けいざい}のあり{方|かた}によって{自信|じしん}を{喪|うしな}いかけていたことは{否|いな}めないのではなかろうか。

{活字|かつじ}{以外|いがい}の{表現|ひょうげん}{手段|しゅだん}が{大|おお}きな{影響力|えいきょうりょく}をもつようになったことを②「{時代|じだい}の{流|なが}れ」と{呼|よ}ぶのはいいが、{文化|ぶんか}の{変容|へんよう}があまりにも{急激|きゅうげき}なこと、あるいは{一|ひと}つの{有力|ゆうりょく}な{文化|ぶんか}が{別|べつ}のものに{置|お}き{換|か}えられることには{予測|よそく}しがたい{弊害|へいがい}を{伴|ともな}う。{活字|かつじ}にもいろいろあるが、{書物|しょもつ}に{特有|とくゆう}の{楽|たの}しみを{与|あた}えてくれる{本|ほん}、{思索|しさく}の{喜|よろこ}びをもたらしてくれる{本|ほん}、{人生|じんせい}の{支|ささ}えになるような{本|ほん}が{相対的|そうたいてき}に{少|すく}なくなったのは、1980{年代|ねんだい}の{半|なか}ばごろからで、{書店|しょてん}の{棚|たな}には{情報的|じょうほうてき}な{本|ほん}や、{映像|えいぞう}{文化|ぶんか}の{書籍化|しょせきか}をねらった{寿命|じゅみょう}の{短|みじか}いものばかりが{目立|めだ}つようになった。{家庭|かてい}からはスペースの{狭|せま}さをいいわけに、{本棚|ほんだな}が{姿|すがた}を{消|け}してしまった。

ちょうどそのころから{映像|えいぞう}{文化|ぶんか}や{活字|かつじ}{文化|ぶんか}の{本質|ほんしつ}を{考|かんが}えるメディア{論|ろん}が{盛|さか}んになったが、いまから{思|おも}えば{従来|じゅうらい}の{活字|かつじ}{文化|ぶんか}が{衰弱|すいじゃく}した{場合|ばあい}にどうなるかという{洞察力|どうさつりょく}において、いささか{欠|か}けるところがなかっただろうか。
（{紀田|きだ}{順一郎|じゅんいちろう}『{読書|どくしょ}{三到|さんとう}――{新|しん}{時代|じだい}の「{読|よ}む・{引|ひ}く・{考|かんが}える」』による）
（{注|ちゅう}1）{素読|そどく}：ここでは、{意味|いみ}を{考|かんが}えずに、{声|こえ}を{出|だ}して{読|よ}むこと
（{注|ちゅう}2）{修養|しゅうよう}：{学問|がくもん}を{修|おさ}め{人格|じんかく}を{高|たか}めること
（{注|ちゅう}3）メソッド：{方法|ほうほう}`,
      arti: `Bukankah masyarakat dahulu memahami secara empiris bahwa kegiatan membaca buku mutlak diperlukan bagi pertumbuhan manusia dan peningkatan kemampuan intelektual? Membaca nyaring tanpa memikirkan arti (sodoku, catatan 1) dan sejenisnya memang bersifat memaksa dan bersifat penempaan diri (catatan 2), tetapi jelas merupakan metode (catatan 3) pendidikan yang paling mengutamakan pembentukan kebiasaan membaca. Namun, bagaimana dengan ① generasi kami? Meski kami yakin bahwa buku adalah kebutuhan pokok yang tidak bisa begitu saja dibandingkan dengan media visual atau audio, dan bahwa membaca adalah kemampuan dasar, tak bisa disangkal bahwa kami mulai kehilangan keyakinan itu karena bentuk sosial-ekonomi belakangan ini.

Boleh saja menyebut sarana ekspresi selain cetakan yang kini berpengaruh besar sebagai ② "arus zaman", tetapi perubahan budaya yang terlalu cepat, atau satu budaya yang kuat digantikan oleh yang lain, disertai dampak buruk yang sulit diprediksi. Cetakan pun bermacam-macam, tetapi sejak sekitar pertengahan 1980-an, buku yang memberi kesenangan khas buku, buku yang membawa kegembiraan berpikir, dan buku yang menjadi penopang hidup relatif menjadi lebih sedikit, dan di rak toko buku yang menonjol hanyalah buku informatif dan buku berumur pendek yang dibukukan dari budaya visual. Di rumah-rumah, dengan alasan ruangan sempit, rak buku pun lenyap.

Tepat sejak saat itu teori media yang memikirkan hakikat budaya visual dan budaya cetak menjadi marak, tetapi kalau dipikir sekarang, bukankah teori itu agak kurang dalam ketajaman wawasan tentang apa yang akan terjadi jika budaya cetak selama ini melemah?
(Dari buku karya Kida Jun'ichirō tentang membaca di era baru)
(Catatan 1) 素読: di sini, membaca dengan bersuara tanpa memikirkan maknanya
(Catatan 2) 修養: menuntut ilmu dan meningkatkan kepribadian
(Catatan 3) メソッド: metode`,
    },
    "9-3": {
      yomi: `{現在|げんざい}、{不安定化|ふあんていか}する{社会|しゃかい}におけるさまざまなリスクが{個人|こじん}を{直撃|ちょくげき}しています。かつてであれば{個人|こじん}の{属|ぞく}する{集団|しゅうだん}や{組織|そしき}が、リスクを{受|う}け{止|と}めるのを{支|ささ}えてくれました。ところが、いまではそのような{支|ささ}えを{期待|きたい}することは{難|むずか}しくなっています。{現代|げんだい}における{不平等|ふびょうどう}は{個人|こじん}{単位|たんい}で{現|あらわ}れるのです。しかもその{場合|ばあい}、{不安|ふあん}や{不満|ふまん}を{抱|かか}えた{人々|ひとびと}は、{同|おな}じような{立場|たちば}に{置|お}かれ、{似|に}たような{思|おも}いをもった{人々|ひとびと}と{連帯|れんたい}することが①けっして{容易|ようい}ではありません。{外|そと}から{見|み}れば、どれほど{共通|きょうつう}の{傾向|けいこう}が{見|み}られる{問題|もんだい}でも、{一人|ひとり}ひとりの{個人|こじん}にはどうしても〈{私|わたし}〉の{問題|もんだい}に{見|み}えてしまうからです。（{中略|ちゅうりゃく}）{平等化|びょうどうか}{社会|しゃかい}を{生|い}きる{個人|こじん}は、それぞれが{自分|じぶん}の〈{私|わたし}〉の{意識|いしき}をもっています。その{意味|いみ}でいえば、{誰|だれ}{一人|ひとり}、{他者|たしゃ}の{意|い}のままにその{存在|そんざい}を{否定|ひてい}されるほど{弱|よわ}くはありません。もし、{社会|しゃかい}が{自分|じぶん}の{存在|そんざい}を{認|みと}めないのなら、{逆|ぎゃく}に、{自分|じぶん}もそのような{社会|しゃかい}を{認|みと}めないというのが、{現代|げんだい}における{個人|こじん}の{典型的|てんけいてき}な{自意識|じいしき}といえるでしょう。{反面|はんめん}、②そのような{個人|こじん}は{自分|じぶん}{一人|ひとり}で{自己|じこ}{完結|かんけつ}できるほどには{強|つよ}くありません。{自分|じぶん}が［{同類|どうるい}］のうちの{一人|ひとり}に{過|す}ぎないことを{痛|いた}いほど{自覚|じかく}している{平等化|びょうどうか}{社会|しゃかい}の{個人|こじん}は、それゆえに{他者|たしゃ}をつねに{意識|いしき}せざるをえないのです。

そうだとすれば、{一人|ひとり}ひとりに{固有|こゆう}な〈{私|わたし}〉にこだわりつつ、それでも{自|みずか}らの{不完全性|ふかんぜんせい}を{日々|ひび}{感|かん}じている{個人|こじん}にとって、{自分|じぶん}の{自分|じぶん}らしさを{確認|かくにん}するためにも{他者|たしゃ}が{必要|ひつよう}なはずです。その{場合|ばあい}の{他者|たしゃ}とは、{自分|じぶん}の{身|み}の{回|まわ}りにいて、{相互|そうご}に{承認|しょうにん}を{与|あた}え{合|あ}うような{他者|たしゃ}ばかりでなく、{自|みずか}らに{位置|いち}と{役割|やくわり}を{与|あた}えてくれる{社会|しゃかい}もまた、{重要|じゅうよう}な{他者|たしゃ}にほかなりません。
（{宇野|うの}{重規|しげき}『〈{私|わたし}〉{時代|じだい}のデモクラシー』による）`,
      arti: `Saat ini, berbagai risiko dalam masyarakat yang makin tidak stabil menghantam individu secara langsung. Dulu, kelompok atau organisasi tempat individu bernaung membantu menahan risiko itu. Namun, sekarang dukungan seperti itu sulit diharapkan. Ketidaksetaraan di masa kini muncul dalam satuan individu. Terlebih lagi, dalam hal itu, orang-orang yang memendam kecemasan dan ketidakpuasan ① sama sekali tidak mudah bersatu dengan orang-orang yang berada di posisi serupa dan punya perasaan serupa. Sebab, sekalipun dari luar terlihat sebagai masalah yang punya kecenderungan sama, bagi setiap individu masalah itu mau tak mau tampak sebagai masalah "aku". (dihilangkan) Individu yang hidup dalam masyarakat yang setara masing-masing memiliki kesadaran "aku"-nya sendiri. Dalam arti itu, tidak seorang pun begitu lemah sampai keberadaannya bisa disangkal sesuka hati orang lain. Bisa dikatakan, kesadaran diri khas individu masa kini adalah: jika masyarakat tidak mengakui keberadaanku, sebaliknya aku pun tidak mengakui masyarakat semacam itu. Di sisi lain, ② individu semacam itu tidak cukup kuat untuk bisa berdiri utuh sendirian. Individu dalam masyarakat yang setara, yang sangat menyadari bahwa dirinya hanyalah salah satu dari "sesamanya", karena itulah mau tak mau selalu menyadari orang lain.

Kalau begitu, bagi individu yang berpegang pada "aku" yang khas pada setiap orang namun setiap hari merasakan ketidaksempurnaannya, orang lain seharusnya diperlukan, juga untuk memastikan jati dirinya. Orang lain dalam hal ini bukan hanya orang-orang di sekitar yang saling memberi pengakuan, tetapi masyarakat yang memberi posisi dan peran kepada diri kita pun tidak lain adalah "orang lain" yang penting.
(Dari buku karya Uno Shigeki tentang demokrasi di era "aku")`,
    },

    // ── 問題10：沈黙の春 ──
    "10": {
      yomi: `{自然|しぜん}は{多種|たしゅ}{多様|たよう}の{生物|せいぶつ}{群|ぐん}が{存在|そんざい}することで、それなりの{安定|あんてい}を{維持|いじ}している。そのなかの{一種|いっしゅ}ないし{数種|すうしゅ}を{撲滅|ぼくめつ}することは、とりもなおさず{全体|ぜんたい}のバランスをくずす{結果|けっか}になる。{複雑|ふくざつ}な{形|かたち}の{自然石|しぜんせき}がつみかさなってできた{石垣|いしがき}から、{一個|いっこ}ないし{数個|すうこ}の{石|いし}をひきぬいたらどうなるか。{影響|えいきょう}はたちまち{全体|ぜんたい}におよび、{石垣|いしがき}そのものの{大規模|だいきぼ}な{崩壊|ほうかい}をおこすにちがいない。ちょうどそれとおなじである。しかも{自然界|しぜんかい}の{場合|ばあい}、{構成|こうせい}それ{自体|じたい}が{複雑|ふくざつ}であるゆえに、{影響|えいきょう}もいっぺんには{表面化|ひょうめんか}しない。ある{部分|ぶぶん}はたちどころ（{注|ちゅう}1）に、べつの{部分|ぶぶん}は{長期間|ちょうきかん}をおいたのちに、{被害|ひがい}の{進行|しんこう}をあらわにしてくる。{人間|にんげん}{自身|じしん}の{予想|よそう}もしなかった{個所|かしょ}へ、①{意表|いひょう}をついた{連鎖|れんさ}{反応|はんのう}の{結果|けっか}がでてくるのである。Aなる（{注|ちゅう}2）{害虫|がいちゅう}を{除去|じょきょ}する{目的|もくてき}で、ある{薬剤|やくざい}が{使用|しよう}されたとしよう。その{目的|もくてき}はたっせられて、Bなる{作物|さくもつ}が{虫害|ちゅうがい}をまぬかれた。しかしその{結果|けっか}、おなじくAによって{食|く}い{殺|ころ}されていたCやDの{種属|しゅぞく}が、{抑制|よくせい}{因子|いんし}をとりのけられて{爆発的|ばくはつてき}に{増加|ぞうか}し、あらたな{害虫|がいちゅう}となってBにおそいかかる。こういった{例|れい}が{多数|たすう}あるのである。

{殺虫|さっちゅう}・{殺菌|さっきん}の{効能|こうのう}をもつ{化学|かがく}{薬品|やくひん}が、いったん{開発|かいはつ}されてこのかたというもの、{人間|にんげん}は{文字|もじ}どおりなりふりかまわず（{注|ちゅう}3）、ひたすらそれへの{依存度|いぞんど}を{増|ま}し、つまり{量質|りょうしつ}ともに{強大化|きょうだいか}する{方向|ほうこう}へつっぱしった。なぜそのようにしなければならなかったのか。{最近|さいきん}の{日本|にほん}では、②このことをもいわゆる{公害|こうがい}の{一種|いっしゅ}にふくめ、{製薬|せいやく}{資本|しほん}の{営利|えいり}{主義|しゅぎ}――すなわち{企業|きぎょう}の{利益|りえき}のため{不必要|ふひつよう}な{薬品|やくひん}を{売|う}りまくって{乱用|らんよう}をすすめたことが、{非難|ひなん}のまとになっている。しかしこれだけで{片|かた}づけられるほど、{事態|じたい}の{本質|ほんしつ}は{単純|たんじゅん}でないのだ。{上|うえ}のような{皮相|ひそう}（{注|ちゅう}4）{的|てき}{見解|けんかい}でわりきるには、{現在|げんざい}の{状況|じょうきょう}はあまりに{絶望的|ぜつぼうてき}である。すでに③{最初|さいしょ}の{出発点|しゅっぱつてん}からして、{人間|にんげん}の{文明|ぶんめい}それ{自体|じたい}のなかに、かく（{注|ちゅう}5）ならざるをえない{必然性|ひつぜんせい}がやどされ（{注|ちゅう}6）ていた。{一|いち}{企業|きぎょう}の{責任|せきにん}に{帰|き}するには、{悲劇|ひげき}の{根|ね}はいささか{深|ふか}すぎる。

{人間|にんげん}が{今日|こんにち}のごとく{高度|こうど}{文明|ぶんめい}をきずきえたのは、{採集|さいしゅう}{経済|けいざい}から{脱|だっ}して、{牧畜|ぼくちく}さらに{農耕|のうこう}という{生産|せいさん}{手段|しゅだん}を{発明|はつめい}したからである。それは{換言|かんげん}すると、ある{特定|とくてい}の{土地|とち}を、{牧場|ぼくじょう}あるいは{田畑|たはた}として{使用|しよう}することである。さらに{換言|かんげん}すると、{人間|にんげん}の{利用|りよう}{目的|もくてき}にかなう{家畜|かちく}・{作物|さくもつ}によって、それらの{土地|とち}を{独占|どくせん}させることでもある。ほんらいならばその{土地|とち}には、{家畜|かちく}・{作物|さくもつ}いがいの{各種|かくしゅ}{生物|せいぶつ}が、{当然|とうぜん}のこととして{棲息|せいそく}（{注|ちゅう}7）していた。{人間|にんげん}はそれらの{生物|せいぶつ}{群|ぐん}にたいし、{害獣|がいじゅう}・{害鳥|がいちょう}・{害虫|がいちゅう}あるいは{雑草|ざっそう}といった{汚名|おめい}を{一方的|いっぽうてき}にかぶせ、{強引|ごういん}に{排除|はいじょ}する{手段|しゅだん}にでた。こうして{自然界|しぜんかい}のバランスがくずれた。いわゆる{公害|こうがい}の{起源|きげん}は、{工業|こうぎょう}とともにおきたのではなく、{遠|とお}く{牧畜|ぼくちく}ないし{農耕|のうこう}のはじまりにさかのぼるのである。
（レイチェル・カーソン{著|ちょ}・青樹簗一{訳|やく}『{沈黙|ちんもく}の{春|はる}』―{筑波|つくば}{常治|ひさはる}の「{解説|かいせつ}」による）
（{注|ちゅう}1）たちどころに：たちまち
（{注|ちゅう}2）〜なる：ここでは、〜という
（{注|ちゅう}3）なりふりかまわず：ここでは、{先|さき}のことも{考|かんが}えず
（{注|ちゅう}4）{皮相的|ひそうてき}：{表面的|ひょうめんてき}
（{注|ちゅう}5）かく：このように
（{注|ちゅう}6）やどす：{含|ふく}む
（{注|ちゅう}7）{棲息|せいそく}する：{生|い}きる`,
      arti: `Alam mempertahankan kestabilannya dengan adanya beragam kelompok makhluk hidup. Membasmi satu atau beberapa jenis di antaranya sama dengan merusak keseimbangan keseluruhan. Apa yang terjadi jika dari dinding batu yang tersusun dari tumpukan batu alam berbentuk rumit, satu atau beberapa batu dicabut? Dampaknya langsung menjalar ke seluruhnya, dan pasti dinding batu itu sendiri runtuh besar-besaran. Persis sama dengan itu. Terlebih lagi, di alam, karena susunannya sendiri rumit, dampaknya pun tidak muncul ke permukaan sekaligus. Sebagian bagian menampakkan kerusakannya seketika (catatan 1), bagian lain baru setelah jangka waktu panjang. Hasil ① reaksi berantai yang tak terduga muncul di tempat yang tak pernah disangka manusia sendiri. Misalkan suatu obat dipakai dengan tujuan membasmi hama bernama (catatan 2) A. Tujuan itu tercapai, dan tanaman bernama B terhindar dari serangan hama. Namun akibatnya, jenis C dan D yang sama-sama dimangsa A kehilangan faktor penekannya, bertambah secara eksplosif, lalu menjadi hama baru yang menyerang B. Ada banyak contoh seperti ini.

Sejak bahan kimia berkhasiat membunuh serangga dan kuman dikembangkan, manusia, secara harfiah tanpa memikirkan akibat ke depan (catatan 3), terus-menerus meningkatkan ketergantungannya, artinya berlari ke arah memperbesar jumlah dan kadarnya. Mengapa harus begitu? Di Jepang belakangan ini, ② hal ini pun dimasukkan sebagai salah satu bentuk polusi, dan orientasi laba modal farmasi — yaitu menjual habis-habisan obat yang tidak perlu demi keuntungan perusahaan dan mendorong penyalahgunaannya — menjadi sasaran kecaman. Namun, hakikat persoalannya tidak sesederhana sampai bisa diselesaikan hanya dengan itu. Keadaan sekarang terlalu suram untuk disimpulkan dengan pandangan dangkal (catatan 4) seperti di atas. Sejak ③ titik awal pertama pun, di dalam peradaban manusia itu sendiri sudah terkandung (catatan 6) keniscayaan bahwa mau tak mau akan menjadi begini (catatan 5). Akar tragedi ini agak terlalu dalam untuk dibebankan pada tanggung jawab satu perusahaan.

Manusia bisa membangun peradaban tinggi seperti sekarang karena keluar dari ekonomi meramu dan menemukan sarana produksi berupa peternakan lalu pertanian. Dengan kata lain, itu berarti memakai tanah tertentu sebagai padang ternak atau sawah-ladang. Dengan kata lain lagi, itu berarti membiarkan tanah itu dimonopoli oleh ternak dan tanaman yang sesuai tujuan pemanfaatan manusia. Semula, di tanah itu sudah sewajarnya hidup (catatan 7) berbagai makhluk selain ternak dan tanaman. Manusia secara sepihak memberi cap buruk kepada kelompok makhluk itu — hewan perusak, burung perusak, hama, atau gulma — lalu mengambil cara menyingkirkannya secara paksa. Begitulah keseimbangan alam rusak. Asal-usul yang disebut polusi tidak muncul bersama industri, melainkan bisa ditelusuri jauh ke awal peternakan dan pertanian.
(Dari "Komentar" Tsukuba Hisaharu dalam terjemahan "Silent Spring" karya Rachel Carson)
(Catatan 1) たちどころに: seketika
(Catatan 2) 〜なる: di sini, yang disebut ~
(Catatan 3) なりふりかまわず: di sini, tanpa memikirkan akibat ke depan
(Catatan 4) 皮相的: dangkal
(Catatan 5) かく: begini
(Catatan 6) やどす: mengandung
(Catatan 7) 棲息する: hidup`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
{現代|げんだい}の{若者|わかもの}{向|む}けのファッションは、かつての{一流|いちりゅう}デザイナーとは{異|こと}なり、{消費者|しょうひしゃ}{自|みずか}らの{感性|かんせい}で{選択|せんたく}するものに{変|か}わってきている。

ある{衣料|いりょう}{専門店|せんもんてん}では、{客|きゃく}の{目線|めせん}に{近|ちか}い{若|わか}い{店員|てんいん}に{好|す}きな{服|ふく}をデザインさせて、これまでにない{若者|わかもの}{向|む}けのファッションを{形|かたち}にしてきた。{店内|てんない}にはいろいろなバリエーションを{楽|たの}しみたいという{客|きゃく}の{要望|ようぼう}に{応|こた}えられるように、あらゆるタイプの{商品|しょうひん}が{置|お}かれている。また、{一対一|いったいいち}で{接客|せっきゃく}することを{基本|きほん}としているため、{売|う}り{場|ば}には{多|おお}くの{店員|てんいん}がいる。{悩|なや}んでいる{客|きゃく}には{一時間|いちじかん}{以上|いじょう}{対応|たいおう}することもある。この{丁寧|ていねい}さのおかげで、{客|きゃく}は{喜|よろこ}んで{買|か}い{物|もの}をして、{何度|なんど}も{足|あし}を{運|はこ}ぶ{客|きゃく}となっていく。

このような{努力|どりょく}を{重|かさ}ねた{結果|けっか}、{売|う}り{上|あ}げを{確実|かくじつ}に{伸|の}ばし、{現在|げんざい}ではトップクラスの{専門店|せんもんてん}となっている。

【{意見|いけん} B】
{店|みせ}はがらがらなのに、{長期間|ちょうきかん}{増収|ぞうしゅう}を{続|つづ}けている{大手|おおて}{衣料品|いりょうひん}{店|てん}がある。

どの{店舗|てんぽ}も{広々|ひろびろ}としていて、{店内|てんない}が{客|きゃく}で{混雑|こんざつ}することはない。{通路|つうろ}もショッピングカートが{楽々|らくらく}とすれちがえるほど{広|ひろ}く、カートを{止|と}めて{商品|しょうひん}を{見|み}ていても{邪魔|じゃま}にならない。{子供|こども}{連|づ}れでも{他|ほか}の{客|きゃく}に{気|き}を{使|つか}うこともなく{買|か}い{物|もの}ができる。ある{店舗|てんぽ}が{混雑|こんざつ}するようになると、{近|ちか}くに{新|しん}{店舗|てんぽ}を{作|つく}ってしまうというのだから、{驚|おどろ}きだ。

{店|みせ}には{多種|たしゅ}{多様|たよう}な{商品|しょうひん}があり、それらはすべてハンガーで{壁|かべ}{一面|いちめん}につり{下|さ}げられている。{客|きゃく}は、{一目|ひとめ}で{欲|ほ}しいものが{見|み}つけ{出|だ}せるので、{無駄|むだ}な{時間|じかん}を{費|つい}やすことなく{買|か}い{物|もの}を{済|す}ませられる。

このような{経営|けいえい}スタイルが{好評|こうひょう}で{顧客|こきゃく}{満足度|まんぞくど}が{高|たか}く、{増収|ぞうしゅう}につながっているのだ。`,
      arti: `【Pendapat A】
Fesyen untuk anak muda masa kini, berbeda dengan desainer kelas satu dulu, telah berubah menjadi sesuatu yang dipilih konsumen dengan kepekaannya sendiri.

Sebuah toko pakaian khusus menyuruh pegawai mudanya — yang sudut pandangnya dekat dengan pelanggan — mendesain pakaian yang mereka sukai, sehingga mewujudkan fesyen anak muda yang belum pernah ada. Di dalam toko tersedia berbagai jenis barang agar bisa memenuhi permintaan pelanggan yang ingin menikmati beragam variasi. Selain itu, karena dasarnya melayani secara satu lawan satu, banyak pegawai di area penjualan. Pelanggan yang bimbang kadang dilayani lebih dari satu jam. Berkat ketelitian ini, pelanggan berbelanja dengan senang hati dan menjadi pelanggan yang berkali-kali datang.

Hasil dari upaya yang terus-menerus seperti ini, penjualan meningkat dengan pasti, dan kini toko itu menjadi toko khusus kelas atas.

【Pendapat B】
Ada toko pakaian besar yang pendapatannya terus naik dalam jangka panjang padahal tokonya lengang.

Setiap gerainya luas dan lega, sehingga bagian dalam toko tidak pernah sesak oleh pelanggan. Lorongnya pun cukup lebar sampai troli belanja bisa berpapasan dengan mudah, dan berhenti dengan troli sambil melihat barang pun tidak mengganggu. Pelanggan yang membawa anak pun bisa berbelanja tanpa sungkan terhadap pelanggan lain. Mengejutkan, katanya jika suatu gerai mulai ramai, mereka langsung membuka gerai baru di dekatnya.

Di toko tersedia beragam barang, dan semuanya digantung dengan hanger di sepanjang dinding. Pelanggan bisa langsung menemukan barang yang diinginkan sekilas pandang, sehingga bisa selesai berbelanja tanpa membuang waktu.

Gaya pengelolaan seperti ini disukai, kepuasan pelanggan tinggi, dan berujung pada kenaikan pendapatan.`,
    },

    // ── 問題12：親子の距離 ──
    "12": {
      yomi: `{私|わたし}もかつて{一個|いっこ}の{子供|こども}であったが、{親|おや}との「{対話|たいわ}」など{別|べつ}にのぞまなかったように{思|おも}う。もし{親|おや}の{方|ほう}が「{対話|たいわ}」をしかけてきたら、{照|て}れくさいような、{歯|は}（{注|ちゅう}1）の{浮|う}くような{気持|きもち}がしただろう。{少|すく}なくとも、{中学生|ちゅうがくせい}のあたりからは、そうであった。{私|わたし}は{特別|とくべつ}{反抗的|はんこうてき}な{子供|こども}ではなかったが、{親|おや}と「{対話|たいわ}」などしたって、{本当|ほんとう}の{話|はなし}はできない、とごく{自然|しぜん}に{承知|しょうち}していたように{思|おも}う。

といって、{親|おや}とのつながりを、まったくのぞんでいなかったわけではない。しかし、それは「{対話|たいわ}」などという{正面|しょうめん}（{注|ちゅう}2）きったものではなく、{言葉|ことば}としてはほとんど{意味|いみ}をなさないような{交流|こうりゅう}があれば、{充分|じゅうぶん}だった。つまり、{家|いえ}の{中|なか}で{顔|かお}を{合|あ}わせて、{黙|だま}って{顔|かお}をそむけられては、どこか{寂|さび}しいような{見捨|みす}てられたような{気持|きもち}がしたが、「お」「やってるか」ぐらいのやりとりがあれば、①{気持|きもち}は{安定|あんてい}していたのである。

それ{以上|いじょう}{親|おや}が{気|き}をつかって「このごろ{音楽|おんがく}はどんなもんがはやっているんだ？」などと{聞|き}いてきたら、{無理|むり}してるなあ、と{思|おも}うし、そんな{必要|ひつよう}ないのになあ、と{思|おも}うし、{答|こた}えるのがすごく{億劫|おっくう}だったろう、と{思|おも}う。

{親|おや}とは{通|つう}じない{部分|ぶぶん}を、どんどん{持|も}つことによって、{子供|こども}は{自分|じぶん}の{世界|せかい}をつくっていくのである。{不分明|ふぶんめい}（{注|ちゅう}3）なところが{多|おお}いから、といって{親|おや}が{不安|ふあん}におちいることはない、と{思|おも}う。

「なにを{考|かんが}えているか、なにをしているか{分|わか}らない」{部分|ぶぶん}が{増|ふ}えていくことで、{子供|こども}は{成長|せいちょう}しているのだ。そこへ、いちいち{親|おや}が{首|くび}をつっこみ「{一緒|いっしょ}に{悩|なや}み、{一緒|いっしょ}に{考|かんが}えよう」などとすることは、{子供|こども}にとっては、ひどくわずらわしいことだし、{親|おや}が{加|くわ}わることで{当面|とうめん}の{局面|きょくめん}はいい{方向|ほうこう}へ{転換|てんかん}するとしても、②{長|なが}い{目|め}で{見|み}れば、あまりいい{影響|えいきょう}を{残|のこ}さない、というように{思|おも}う。

（{中略|ちゅうりゃく}）

では、どうしたらいいか、というと、{原則的|げんそくてき}には{親|おや}は{子供|こども}の{内面|ないめん}については、ほうっておくしかないのだ。{理解|りかい}しようとしたり、いわん（{注|ちゅう}4）や{共感|きょうかん}しようとしたり{一緒|いっしょ}に{悩|なや}もうとしたりしてもむだなのだと{思|おも}う。

{子供|こども}との{距離|きょり}が、{刻々|こっこく}ひらいていくことに{堪|た}えるしかないのだ。そして、その{距離|きょり}をリアルにとらえている{親|おや}は、{子供|こども}にとって{魅力的|みりょくてき}だと{思|おも}う。

そうした{親|おや}は、{子供|こども}を{理解|りかい}しようとしたり、{一緒|いっしょ}に{悩|なや}もうとしたりしない。そういうことができないことの{悲|かな}しさ、{寂|さび}しさ、{情|なさ}けなさを{胸|むね}におさめて、{子供|こども}と{対|たい}する。いわば「{他人|たにん}」として{対|たい}する。「{親切|しんせつ}な{他人|たにん}」として{対|たい}する。そして、その{節度|せつど}を{保|たも}てるということが、{子供|こども}への{愛情|あいじょう}になっている。というような{親|おや}でありたい。と{少|すく}なくとも{私|わたし}は{思|おも}っている。
（{山田|やまだ}{太一|たいち}『{誰|だれ}かへの{手紙|てがみ}のように』による）
（{注|ちゅう}1）{歯|は}の{浮|う}くような：ここでは、なんとなく{落|お}ち{着|つ}かない
（{注|ちゅう}2）{正面|しょうめん}きったもの：ここでは、きちんとしたもの
（{注|ちゅう}3）{不分明|ふぶんめい}な：はっきりしない
（{注|ちゅう}4）いわんや：まして`,
      arti: `Saya pun dulu seorang anak, tetapi rasanya saya tidak terlalu menginginkan "dialog" dengan orang tua. Kalau orang tua yang memulai "dialog", saya mungkin merasa malu dan risih (catatan 1). Setidaknya, sejak sekitar SMP memang begitu. Saya bukan anak yang luar biasa suka membangkang, tetapi rasanya saya dengan sendirinya paham bahwa meski ber-"dialog" dengan orang tua, pembicaraan yang sungguh-sungguh tidak akan terjadi.

Meski begitu, bukan berarti saya sama sekali tidak menginginkan keterhubungan dengan orang tua. Hanya saja, itu bukan sesuatu yang resmi (catatan 2) seperti "dialog"; cukup ada interaksi yang hampir tidak bermakna sebagai kata-kata. Artinya, jika bertemu muka di rumah lalu orang tua diam saja memalingkan wajah, saya merasa agak kesepian dan seperti diabaikan, tetapi jika ada sapaan sekadar "Oh" atau "Lagi sibuk?", ① perasaan saya tenang.

Kalau orang tua lebih dari itu sampai repot-repot bertanya, "Musik apa yang lagi populer belakangan ini?", saya mungkin berpikir, "Dipaksakan sekali," dan "Padahal tidak perlu begitu," dan rasanya menjawabnya akan sangat malas.

Dengan terus memiliki bagian yang tidak tersambung dengan orang tua, anak membangun dunianya sendiri. Menurut saya, orang tua tidak perlu cemas hanya karena banyak hal yang tidak jelas (catatan 3).

Anak tumbuh dengan bertambahnya bagian yang "tidak diketahui apa yang dipikirkan, apa yang dilakukan". Jika orang tua di sana ikut campur satu per satu sambil berkata "mari bimbang bersama, berpikir bersama", bagi anak itu sangat merepotkan, dan meski dengan campur tangan orang tua keadaan saat itu berbalik ke arah yang baik, menurut saya ② dalam jangka panjang tidak meninggalkan pengaruh yang baik.

(dihilangkan)

Lalu harus bagaimana? Pada prinsipnya, orang tua tidak punya pilihan selain membiarkan batin anak. Menurut saya sia-sia berusaha memahaminya, apalagi (catatan 4) berusaha berempati atau bimbang bersama.

Tidak ada pilihan selain menahan diri saat jarak dengan anak makin melebar dari waktu ke waktu. Dan menurut saya, orang tua yang menangkap jarak itu dengan realistis justru menarik bagi anak.

Orang tua seperti itu tidak berusaha memahami anak atau bimbang bersamanya. Ia menyimpan di dada kesedihan, kesepian, dan rasa tak berdaya karena tidak bisa melakukan hal itu, lalu menghadapi anaknya. Bisa dikatakan, menghadapinya sebagai "orang lain". Sebagai "orang lain yang baik hati". Dan kemampuan menjaga batas itulah yang menjadi kasih sayang kepada anak. Setidaknya, saya ingin menjadi orang tua seperti itu.
(Dari buku karya Yamada Taichi)
(Catatan 1) 歯の浮くような: di sini, entah kenapa terasa tidak tenang
(Catatan 2) 正面きったもの: di sini, sesuatu yang resmi/serius
(Catatan 3) 不分明な: tidak jelas
(Catatan 4) いわんや: apalagi`,
    },

    // ── 問題13：緑町病院 雇用時健康診断のご案内 ──
    "13": {
      yomi: `【{基本|きほん}{検査|けんさ}{項目|こうもく}】①{問診|もんしん}および{診察|しんさつ}　②{身体|しんたい}{計測|けいそく}　③{血圧|けつあつ}{測定|そくてい}　④{尿|にょう}{検査|けんさ}　⑤{視力|しりょく}{検査|けんさ}　⑥{聴力|ちょうりょく}{検査|けんさ}　⑦{血液|けつえき}{検査|けんさ}　⑧{胸部|きょうぶ}エックス{線|せん}{検査|けんさ}　⑨{心電図|しんでんず}{検査|けんさ}

※その{他|た}{検査|けんさ}を{追加|ついか}でご{希望|きぼう}の{方|かた}は、ご{予約|よやく}{時|じ}にお{問|と}い{合|あ}わせください。

【{実施|じっし}{日時|にちじ}】{月曜日|げつようび}〜{金曜日|きんようび}　9:30〜17:00

【{予約|よやく}{方法|ほうほう}】{予約|よやく}の{申|もう}し{込|こ}みは、{電話|でんわ}もしくはEメールにて{受|う}け{付|つ}けます。{電話|でんわ}の{場合|ばあい}は{検診|けんしん}{日|び}の2{日|か}{前|まえ}まで、Eメールの{場合|ばあい}は4{日|か}{前|まえ}までにお{願|ねが}いします。

※{上記|じょうき}①〜⑨{以外|いがい}の{検査|けんさ}をご{希望|きぼう}の{場合|ばあい}は、{必|かなら}ずお{電話|でんわ}にてお{申|もう}し{込|こ}みください。

【{費用|ひよう}】（{検診|けんしん}{費用|ひよう}および{診断書|しんだんしょ}{発行|はっこう}まですべてを{含|ふく}んだ{金額|きんがく}です）
{電話|でんわ}による{予約|よやく}の{場合|ばあい}　9,450{円|えん}（{税込|ぜいこ}み）　Eメールによる{予約|よやく}の{場合|ばあい}　8,925{円|えん}（{税込|ぜいこ}み）

※{上記|じょうき}①〜⑨{以外|いがい}の{検査|けんさ}を{受|う}ける{方|かた}は、{追加|ついか}{料金|りょうきん}が{発生|はっせい}します。

【{検査|けんさ}{結果|けっか}】
・{健康|けんこう}{診断書|しんだんしょ}は、{受診|じゅしん}{日|び}の1{週間|しゅうかん}{後|ご}から{窓口|まどぐち}でのお{渡|わた}しになります。{郵送|ゆうそう}も{可能|かのう}です（{送料|そうりょう}{別途|べっと}）。
・{結果|けっか}{記入|きにゅう}{用|よう}の{指定|してい}{用紙|ようし}がある{場合|ばあい}は、{受診|じゅしん}{当日|とうじつ}、{受付|うけつけ}にご{提出|ていしゅつ}ください。
・{英文|えいぶん}による{健康|けんこう}{診断書|しんだんしょ}も{作成|さくせい}いたします（{作成|さくせい}{料|りょう}{別途|べっと}）。ご{希望|きぼう}の{方|かた}は、ご{予約|よやく}{時|じ}にお{知|し}らせください。{作成|さくせい}には、{別途|べっと}{日数|にっすう}が{約|やく}2{日|か}かかります。

【お{支払|しはら}い】・{当日|とうじつ}、{窓口|まどぐち}にてお{支払|しはら}いください。{各種|かくしゅ}カードも{取|と}り{扱|あつか}っております。

【{注意|ちゅうい}{事項|じこう}】
・{受診|じゅしん}6{時間|じかん}{前|まえ}までに{食事|しょくじ}を{終|お}わらせてください。それ{以降|いこう}は、お{水|みず}のみでお{過|す}ごしください。
・{眼鏡|めがね}をお{使|つか}いの{方|かた}は、{当日|とうじつ}ご{持参|じさん}ください。コンタクトレンズをお{使|つか}いの{方|かた}は、ケースをご{持参|じさん}ください。

【{問|と}い{合|あ}わせ{先|さき}】{緑町|みどりまち}{病院|びょういん}　{電話|でんわ}：01-1234-5678　（{受付|うけつけ}{時間|じかん}：{月曜日|げつようび}〜{金曜日|きんようび}の9:00〜17:00）
Eメール：yoyaku@midori-machi.com`,
      arti: `【Item pemeriksaan dasar】① Wawancara medis dan pemeriksaan dokter ② Pengukuran tubuh ③ Pengukuran tekanan darah ④ Tes urine ⑤ Tes penglihatan ⑥ Tes pendengaran ⑦ Tes darah ⑧ Rontgen dada ⑨ Elektrokardiogram (EKG)

※Bagi yang menginginkan pemeriksaan tambahan lainnya, silakan bertanya saat memesan.

【Hari & jam pelaksanaan】Senin–Jumat 9:30–17:00

【Cara memesan】Pemesanan diterima melalui telepon atau surel. Untuk telepon paling lambat 2 hari sebelum hari pemeriksaan, untuk surel paling lambat 4 hari sebelumnya.

※Jika menginginkan pemeriksaan selain ①–⑨ di atas, wajib mendaftar melalui telepon.

【Biaya】(Jumlah ini sudah mencakup semuanya, dari biaya pemeriksaan sampai penerbitan surat keterangan)
Pemesanan lewat telepon: 9.450 yen (termasuk pajak); pemesanan lewat surel: 8.925 yen (termasuk pajak)

※Bagi yang menjalani pemeriksaan selain ①–⑨ di atas, dikenakan biaya tambahan.

【Hasil pemeriksaan】
・Surat keterangan sehat diserahkan di loket mulai 1 minggu setelah hari pemeriksaan. Bisa juga dikirim lewat pos (ongkos kirim terpisah).
・Jika ada formulir khusus untuk mengisi hasil, harap serahkan ke resepsionis pada hari pemeriksaan.
・Kami juga membuat surat keterangan sehat berbahasa Inggris (biaya pembuatan terpisah). Bagi yang menginginkannya, beri tahu saat memesan. Pembuatannya memerlukan tambahan waktu sekitar 2 hari.

【Pembayaran】・Silakan bayar di loket pada hari pemeriksaan. Berbagai kartu juga diterima.

【Perhatian】
・Selesaikan makan paling lambat 6 jam sebelum pemeriksaan. Setelah itu, hanya boleh minum air.
・Bagi pengguna kacamata, harap membawanya pada hari pemeriksaan. Bagi pengguna lensa kontak, harap membawa wadahnya.

【Kontak】Rumah Sakit Midorimachi, telepon: 01-1234-5678 (jam layanan: Senin–Jumat 9:00–17:00)
Surel: yoyaku@midori-machi.com`,
    },
  },
};
