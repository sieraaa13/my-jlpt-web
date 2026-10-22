import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2012
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1207: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{珍|めずら}しいイベントがあると{聞|き}いて、{広場|ひろば}に【{群衆|ぐんしゅう}】が{押|お}し{寄|よ}せた。",
      arti: "Mendengar ada acara langka, 【kerumunan orang】 berbondong-bondong datang ke alun-alun.",
    },
    2: {
      yomi: "これまでの{学説|がくせつ}を【{覆|くつがえ}す】ような{新|しん}{事実|じじつ}が{発見|はっけん}された。",
      arti: "Ditemukan fakta baru yang seolah 【membalikkan】 teori-teori selama ini.",
      optArti: ["mengibarkan, membalikkan (翻す)", "membalikkan, meruntuhkan (覆す)", "membingungkan (惑わす)", "mengguncang (揺るがす)"],
    },
    3: {
      yomi: "この{文書|ぶんしょ}には、{当時|とうじ}の{生活|せいかつ}の{様子|ようす}が【{克明|こくめい}】に{記録|きろく}されている。",
      arti: "Dokumen ini mencatat 【secara rinci】 keadaan kehidupan pada masa itu.",
    },
    4: {
      yomi: "{窓|まど}を{開|あ}けると、【{心地|ここち}よい】{風|かぜ}が{入|はい}ってきた。",
      arti: "Saat jendela dibuka, angin yang 【nyaman/sejuk】 masuk.",
    },
    5: {
      yomi: "{新|しん}{社長|しゃちょう}は、これまでの{経営|けいえい}{方針|ほうしん}を【{踏襲|とうしゅう}】すると{述|の}べた。",
      arti: "Direktur baru menyatakan akan 【meneruskan】 kebijakan manajemen selama ini.",
    },
    6: {
      yomi: "{新|あたら}しい{政権|せいけん}には、{医療|いりょう}{制度|せいど}の【{改革|かいかく}】が{期待|きたい}されている。",
      arti: "Pemerintahan baru diharapkan melakukan 【reformasi】 sistem layanan kesehatan.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "この{本|ほん}は{内容|ないよう}が{難|むずか}しすぎて、{初心者|しょしんしゃ}には（　）が{高|たか}いと{思|おも}う。",
      arti: "Isi buku ini terlalu sulit, jadi menurut saya (…)-nya tinggi bagi pemula.",
      optArti: ["batas (limit)", "blok, hambatan", "target kerja wajib (norma)", "rintangan (hurdle)"],
    },
    8: {
      yomi: "プランの（　）はすでに{固|かた}まっています。",
      arti: "(…) rencananya sudah dipastikan.",
      optYomi: ["{大筋|おおすじ}", "{大綱|たいこう}", "{大口|おおぐち}", "{大台|おおだい}"],
      optArti: ["garis besar", "prinsip umum (kebijakan resmi)", "(pesanan) dalam jumlah besar; omong besar", "angka batas (misal: 1 juta)"],
    },
    9: {
      yomi: "{本書|ほんしょ}の{改定|かいてい}（　）は、9{月|がつ}{上旬|じょうじゅん}に{発売|はつばい}の{予定|よてい}です。",
      arti: "(…) revisi buku ini direncanakan terbit pada awal September.",
      optYomi: ["{刷|さつ}", "{判|ばん}", "{誌|し}", "{版|ばん}"],
      optArti: ["cetakan ke-", "ukuran (kertas)", "majalah", "edisi"],
    },
    10: {
      yomi: "システムトラブルの{原因|げんいん}を{徹底的|てっていてき}に（　）し、{再発|さいはつ}{防止|ぼうし}に{取|と}り{組|く}みたい。",
      arti: "Kami ingin (…) penyebab gangguan sistem secara tuntas dan berupaya mencegah terulangnya.",
      optYomi: ["{究明|きゅうめい}", "{釈明|しゃくめい}", "{察知|さっち}", "{探知|たんち}"],
      optArti: ["menyelidiki sampai tuntas", "memberi penjelasan, klarifikasi", "menyadari, merasakan gelagat", "mendeteksi (dengan alat)"],
    },
    11: {
      yomi: "カタカナの「ソ」と「リ」は（　）ので、{名前|なまえ}を{書|か}くときは{気|き}をつけてください。",
      arti: "Katakana \"ソ\" dan \"リ\" (…), jadi hati-hatilah saat menulis nama.",
      optYomi: ["{悩|なや}ましい", "{疑|うたが}わしい", null, null],
      optArti: ["menggelisahkan, membingungkan hati", "meragukan", "mudah tertukar, membingungkan", "merepotkan"],
    },
    12: {
      yomi: "この{業者|ぎょうしゃ}は{魚|さかな}を{缶詰|かんづめ}に（　）し、それを{海外|かいがい}に{輸出|ゆしゅつ}している。",
      arti: "Pengusaha ini (…) ikan menjadi makanan kaleng, lalu mengekspornya ke luar negeri.",
      optYomi: ["{変換|へんかん}", "{転換|てんかん}", "{細工|さいく}", "{加工|かこう}"],
      optArti: ["konversi (data, huruf)", "peralihan (arah, kebijakan)", "kerajinan; tipu muslihat", "pengolahan"],
    },
    13: {
      yomi: "{市役所|しやくしょ}のロビーで、アマチュア{写真家|しゃしんか}による{写真展|しゃしんてん}が（　）います。",
      arti: "Di lobi balai kota, pameran foto oleh fotografer amatir sedang (…).",
      optYomi: ["{施|ほどこ}されて", "{催|もよお}されて", "{設|もう}けられて", "{挙|あ}げられて"],
      optArti: ["diberi, dilakukan (perawatan)", "diselenggarakan", "didirikan, disediakan", "diangkat, disebut"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{山田|やまだ}{先生|せんせい}に【{触発|しょくはつ}されて】、{画家|がか}の{道|みち}を{志|こころざ}しました。",
      arti: "【Terinspirasi】 oleh Yamada-sensei, saya bercita-cita menjadi pelukis.",
      optYomi: ["{指導|しどう}を{受|う}けて", "{刺激|しげき}を{受|う}けて", "{援助|えんじょ}を{受|う}けて", "{評価|ひょうか}を{受|う}けて"],
      optArti: ["dibimbing", "terangsang, terinspirasi", "dibantu", "dinilai"],
    },
    15: {
      yomi: "{記者|きしゃ}のインタビューで、{選手|せんしゅ}たちは【すがすがしい】{表情|ひょうじょう}で{質問|しつもん}に{答|こた}えていた。",
      arti: "Dalam wawancara wartawan, para atlet menjawab pertanyaan dengan raut wajah 【cerah dan lega】.",
      optYomi: [null, "{興奮|こうふん}した", null, "{真剣|しんけん}な"],
      optArti: ["lega", "bersemangat, gembira", "segar, cerah", "serius"],
    },
    16: {
      yomi: "この{部屋|へや}にある{家具|かぐ}は、どれも【{簡潔|かんけつ}な】デザインのものだった。",
      arti: "Perabot di kamar ini semuanya berdesain 【sederhana/ringkas】.",
      optArti: ["keren, dingin (cool)", "modern", "unik", "sederhana (simple)"],
    },
    17: {
      yomi: "{彼|かれ}の{誕生日|たんじょうび}パーティーの{準備|じゅんび}を、{友人|ゆうじん}{数人|すうにん}と【ひそかに】{進|すす}めている。",
      arti: "Saya dan beberapa teman 【diam-diam】 menyiapkan pesta ulang tahunnya.",
      optYomi: [null, "{張|は}り{切|き}って", null, "{急|いそ}いで"],
      optArti: ["diam-diam", "dengan penuh semangat", "santai", "terburu-buru"],
    },
    18: {
      yomi: "{高橋|たかはし}{選手|せんしゅ}は{今年|ことし}の{大会|たいかい}への{参加|さんか}を【{断念|だんねん}した】らしい。",
      arti: "Sepertinya atlet Takahashi 【mengurungkan niat】 ikut turnamen tahun ini.",
      optArti: ["memutuskan", "menyerah, merelakan", "menolak", "mengharapkan"],
    },
    19: {
      yomi: "{努力|どりょく}をすれば【おのずと】{結果|けっか}に{表|あらわ}れてくる。",
      arti: "Jika berusaha, hasilnya akan 【dengan sendirinya】 terlihat.",
      optYomi: [null, null, "{自然|しぜん}に", "{絶対|ぜったい}に"],
      optArti: ["berangsur-angsur", "dengan jelas", "secara alami, dengan sendirinya", "pasti, mutlak"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "{免除|めんじょ}",
      arti: "免除 = pembebasan (dari kewajiban/biaya)",
      optYomi: [
        "{会費|かいひ}を2{年間|ねんかん}{滞納|たいのう}すると、{自動的|じどうてき}に{会|かい}から{免除|めんじょ}されます。",
        "3{年|ねん}{後|ご}にもう{一度|いちど}{試験|しけん}を{受|う}けないと、その{資格|しかく}は{免除|めんじょ}されます。",
        "{入学|にゅうがく}{試験|しけん}の{成績|せいせき}{優秀者|ゆうしゅうしゃ}は、{入学金|にゅうがくきん}が{免除|めんじょ}になります。",
        "うがいをすれば、{風邪|かぜ}の{免除|めんじょ}になります。",
      ],
      optArti: [
        "Jika menunggak iuran selama 2 tahun, Anda otomatis 'dibebaskan' dari perkumpulan.",
        "Jika tidak mengikuti ujian sekali lagi 3 tahun kemudian, kualifikasi itu 'dibebaskan'.",
        "Peserta dengan nilai ujian masuk terbaik 'dibebaskan' dari uang pangkal.",
        "Kalau berkumur, Anda akan 'dibebaskan' dari flu.",
      ],
    },
    21: {
      arti: "ブランク = masa kosong, jeda (tidak aktif bekerja/berlatih)",
      optYomi: [
        "2{年|ねん}のブランクがあり{心配|しんぱい}だったが、{先月|せんげつ}から{職場|しょくば}に{復帰|ふっき}した。",
        "15{分|ふん}ほどブランクにしませんか。みんな{疲|つか}れたようだし。",
        "プレゼンの{最中|さいちゅう}に{緊張|きんちょう}しちゃって、{頭|あたま}がブランクだったよ。",
        "{大事|だいじ}なデータをブランクしてしまった。",
      ],
      optArti: [
        "Ada 'masa kosong' 2 tahun sehingga saya khawatir, tetapi sejak bulan lalu saya kembali bekerja.",
        "Bagaimana kalau kita 'masa kosong' sekitar 15 menit? Sepertinya semua sudah lelah.",
        "Saat presentasi saya gugup, kepala saya 'masa kosong'.",
        "Saya 'mengosongkan' data penting.",
      ],
    },
    22: {
      yomi: "{怠|おこた}る",
      arti: "怠る = melalaikan (kewajiban, usaha)",
      optYomi: [
        "{昨日|きのう}、{会社|かいしゃ}を{怠|おこた}って{映画|えいが}を{見|み}に{行|い}ってしまった。",
        "{忙|いそが}しいときは{料理|りょうり}を{怠|おこた}って、{買|か}ってきた{弁当|べんとう}で{済|す}ますこともある。",
        "{彼|かれ}はどんな{苦労|くろう}も{怠|おこた}らずに、いつも{積極的|せっきょくてき}に{仕事|しごと}に{取|と}り{組|く}んでいる。",
        "{成功|せいこう}を{勝|か}ち{取|と}るためには、{日々|ひび}の{努力|どりょく}を{怠|おこた}ってはいけない。",
      ],
      optArti: [
        "Kemarin saya 'melalaikan' kantor dan pergi menonton film.",
        "Saat sibuk, kadang saya 'melalaikan' memasak dan cukup makan bento yang dibeli.",
        "Ia tidak 'melalaikan' kesulitan apa pun dan selalu aktif bekerja.",
        "Untuk meraih kesuksesan, jangan 'melalaikan' usaha sehari-hari.",
      ],
    },
    23: {
      yomi: "{見込|みこ}み",
      arti: "見込み = perkiraan, prospek (yang akan terjadi)",
      optYomi: [
        "{今日|きょう}はこれから{取引先|とりひきさき}に{打|う}ち{合|あ}わせに{行|い}く{見込|みこ}みです。",
        "{周囲|しゅうい}の{見込|みこ}みに{応|こた}えて、すばらしい{仕事|しごと}を{成|な}し{遂|と}げた。",
        "{田中|たなか}さんは、{来週|らいしゅう}には{退院|たいいん}の{見込|みこ}みです。",
        "{見込|みこ}みもしないところで{昔|むかし}の{友人|ゆうじん}に{会|あ}った。",
      ],
      optArti: [
        "Hari ini saya 'diperkirakan' akan pergi rapat ke klien.",
        "Menjawab 'perkiraan' orang sekitar, ia menyelesaikan pekerjaan yang luar biasa.",
        "Tanaka-san 'diperkirakan' keluar dari rumah sakit minggu depan.",
        "Saya bertemu teman lama di tempat yang tidak 'diperkirakan'.",
      ],
    },
    24: {
      yomi: "{満|み}たない",
      arti: "満たない = kurang dari, tidak mencapai (jumlah tertentu)",
      optYomi: [
        "{私|わたし}が{生|う}まれたのは、{人口|じんこう}500{人|にん}に{満|み}たない{小|ちい}さな{村|むら}です。",
        "{会議|かいぎ}{資料|しりょう}が3{人|にん}{分|ぶん}{満|み}たないから、コピーしてきた。",
        "どうがんばっても、{英語力|えいごりょく}では{田中|たなか}さんに{満|み}たない。",
        "{当店|とうてん}のサービスについて{何|なに}か{満|み}たない{点|てん}があればご{記入|きにゅう}ください。",
      ],
      optArti: [
        "Saya lahir di desa kecil yang penduduknya 'kurang dari' 500 orang.",
        "Materi rapat 'kurang dari' 3 orang, jadi saya memfotokopinya.",
        "Sekeras apa pun berusaha, kemampuan bahasa Inggris saya 'kurang dari' Tanaka-san.",
        "Jika ada hal yang 'kurang dari' layanan toko kami, silakan tuliskan.",
      ],
    },
    25: {
      yomi: "{有数|ゆうすう}",
      arti: "有数 = termasuk segelintir yang terkemuka, terkemuka",
      optYomi: [
        "この{商品|しょうひん}は{有数|ゆうすう}ですので、{売|う}り{切|き}れた{場合|ばあい}もございます。",
        "この{国|くに}は{世界|せかい}でも{有数|ゆうすう}の{小麦|こむぎ}{生産国|せいさんこく}だ。",
        "{会議|かいぎ}で{反対|はんたい}{意見|いけん}を{述|の}べた{人|ひと}は{有数|ゆうすう}のみだった。",
        "いくつもの{案|あん}の{比較|ひかく}、{検討|けんとう}し、その{中|なか}から{有数|ゆうすう}の{案|あん}を{選|えら}んだ。",
      ],
      optArti: [
        "Produk ini 'terkemuka', jadi mungkin saja habis terjual.",
        "Negara ini termasuk produsen gandum yang 'terkemuka' di dunia.",
        "Orang yang menyatakan keberatan dalam rapat hanya 'terkemuka'.",
        "Kami membandingkan dan menimbang beberapa rencana, lalu memilih rencana yang 'terkemuka'.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "40{代|だい}（　）{後半|こうはん}となり、わたしもとうとう{中高年|ちゅうこうねん}の{仲間入|なかまい}りだ。",
      arti: "Usia 40-an saya (…) memasuki paruh akhir, dan akhirnya saya pun masuk golongan setengah baya.",
      optArti: ["(objek)", "ke arah", "pun, juga (penekanan: sudah ...)", "sampai"],
    },
    27: {
      yomi: "{昔|むかし}から「{毒|どく}も（　）{薬|くすり}になる」と{言|い}われている。",
      arti: "Sejak dulu dikatakan, \"Racun pun bisa menjadi obat (…).\"",
      optYomi: ["{使|つか}うとなると", "{使|つか}うものなら", "{使|つか}わんばかりに", "{使|つか}いようによっては"],
      optArti: ["kalau sudah harus memakai", "kalau sampai memakai (akibatnya buruk)", "seolah-olah hendak memakai", "tergantung cara memakainya"],
    },
    28: {
      yomi: "{映画|えいが}『ブラック』は{評判|ひょうばん}{通|どお}りの{面白|おもしろ}さで、{特|とく}に、{主人公|しゅじんこう}が{目|め}に（　）ざる{敵|てき}に{立|た}ち{向|む}かう{場面|ばめん}は{圧巻|あっかん}だった。",
      arti: "Film \"Black\" memang semenarik reputasinya, terutama adegan tokoh utama melawan musuh yang tidak (…) oleh mata sungguh memukau.",
      optYomi: ["{見|み}て", "{見|み}え", "{見|み}る", "{見|み}える"],
      optArti: ["melihat (bentuk て)", "terlihat (bentuk ない: 見えざる = tak terlihat)", "melihat (bentuk kamus)", "terlihat (bentuk kamus)"],
    },
    29: {
      yomi: "{山田|やまだ}さんがこの{絵|え}をいくらで{手|て}に{入|い}れたのかはわからないが、{有名|ゆうめい}{画家|がか}の{作品|さくひん}であることから{考|かんが}えても、{安|やす}くない{値段|ねだん}で{買|か}ったことは（　）{間違|まちが}いない。",
      arti: "Tidak diketahui berapa harga Yamada-san mendapatkan lukisan ini, tetapi mengingat itu karya pelukis terkenal, (…) tidak salah lagi ia membelinya dengan harga yang tidak murah.",
      optArti: ["hampir pasti, kiranya", "sering, baik", "seandainya", "cukup, tidak mudah"],
    },
    30: {
      yomi: "お{客様|きゃくさま}、ご{希望|きぼう}のホテルが{満室|まんしつ}でしたので、{他|ほか}のホテルにご{変更|へんこう}（　）のですが、よろしいでしょうか。",
      arti: "Bapak/Ibu, karena hotel yang Anda inginkan penuh, kami (…) mengganti ke hotel lain; apakah tidak apa-apa?",
      optArti: ["mohon (Anda berkenan)", "(bentuk tidak tepat) なされたい", "(bentuk tidak tepat) くださりたい", "ingin Anda (bentuk tidak tepat)"],
    },
    31: {
      yomi: "この{祭|まつ}りは{長|なが}い{伝統|でんとう}があるので、{皆|みな}さんにはぜひこれからも（　）。",
      arti: "Festival ini memiliki tradisi panjang, jadi saya (…) kalian semua terus melanjutkannya ke depan.",
      optYomi: ["{続|つづ}けていくものです", "{続|つづ}けていってほしいものです", "{続|つづ}けていくことにしましょう", "{続|つづ}けていくことでしょう"],
      optArti: ["memang semestinya terus dilanjutkan", "sungguh berharap (kalian) terus melanjutkan", "mari kita putuskan untuk melanjutkan", "mungkin akan terus dilanjutkan"],
    },
    32: {
      yomi: "ご{使用|しよう}{後|ご}の{返品|へんぴん}{対応|たいおう}は（　）ので、ご{了承|りょうしょう}ください。",
      arti: "Pengembalian barang setelah dipakai (…), mohon dimaklumi.",
      optArti: ["tidak bisa kami lakukan (sopan)", "bisa saja kami lakukan", "tidak bisa kami berikan (bentuk tidak tepat)", "bisa saja kami berikan (bentuk tidak tepat)"],
    },
    33: {
      yomi: "{他人|たにん}の{口座|こうざ}から{不正|ふせい}に{現金|げんきん}を（　）、35{歳|さい}の{男|おとこ}が{逮捕|たいほ}された。",
      arti: "Seorang pria berusia 35 tahun ditangkap (…) uang secara ilegal dari rekening orang lain.",
      optYomi: ["{引|ひ}き{出|だ}したとするとして", "{引|ひ}き{出|だ}したとするのに{対|たい}して", "{引|ひ}き{出|だ}そうとしたとして", "{引|ひ}き{出|だ}そうとしたのに{対|たい}して"],
      optArti: ["dengan anggapan seandainya menarik", "sedangkan seandainya menarik", "atas tuduhan mencoba menarik", "sedangkan mencoba menarik"],
    },
    34: {
      yomi: "（{本屋|ほんや}で）A「あ、この{本|ほん}、{面白|おもしろ}いよ。」B「どんな{話|はなし}？」A「{主人公|しゅじんこう}と{恋人|こいびと}が、{親|おや}に{無理|むり}やり（　）{話|はなし}なんだけど、すごくどきどきするんだ。」",
      arti: "(Di toko buku) A: \"Eh, buku ini seru lho.\" B: \"Ceritanya tentang apa?\" A: \"Tentang tokoh utama dan kekasihnya yang (…) secara paksa oleh orang tuanya, bikin deg-degan banget.\"",
      optYomi: ["{別|わか}れそうになる", "{別|わか}れられそうになる", "{別|わか}れさせそうになる", "{別|わか}れさせられそうになる"],
      optArti: ["hampir berpisah", "hampir bisa berpisah / hampir ditinggalkan", "hampir memisahkan", "hampir dipaksa berpisah"],
    },
    35: {
      yomi: "{川村|かわむら}「{石田|いしだ}さん、ギターがほしいって{言|い}っていましたよね。わたしの{弟|おとうと}が{使|つか}っていたギターがあるんですが、よければどうですか。」{石田|いしだ}「いいんですか。」{川村|かわむら}「はい。{弟|おとうと}に{聞|き}いたら、{喜|よろこ}んでくれる{方|かた}がいるなら、ぜひと{言|い}っていましたので、どうぞもらって（　）。」",
      arti: "Kawamura: \"Ishida-san, katanya kamu ingin gitar, kan? Ada gitar bekas adik saya, kalau mau bagaimana?\" Ishida: \"Boleh?\" Kawamura: \"Ya. Kata adik saya, kalau ada orang yang senang menerimanya, silakan saja, jadi (…) menerimanya.\"",
      optArti: ["maukah (kamu) menerimanya (untuk dia)?", "silakan (terimalah, demi dia)", "bolehkah saya meminta (Anda menerima)?", "(bentuk tidak tepat)"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "＿＿ ★ ＿＿ ＿＿{良心|りょうしん}は{残|のこ}っているはずだ。",
      arti: "Sejahat apa pun orangnya, pasti masih ada hati nurani di suatu tempat dalam dirinya.",
      optYomi: [null, "{悪人|あくにん}で", null, null],
      optArti: ["di suatu tempat", "orang jahat", "meskipun (adalah)", "seperti apa pun"],
    },
    37: {
      yomi: "インターネットの{功罪|こうざい}といった{議論|ぎろん}があるが、インターネットはただの{手段|しゅだん}だ。その{価値|かち}は＿＿ ＿＿ ★ ＿＿ものだと{思|おも}う。",
      arti: "Ada perdebatan tentang baik-buruknya internet, tetapi internet hanyalah alat. Menurut saya nilainya ditentukan oleh cara orang yang memakainya.",
      optYomi: ["{人|ひと}の{使|つか}い{方|かた}", "{使|つか}う", "{決|き}まる", "{次第|しだい}で"],
      optArti: ["cara orang memakai", "memakai", "ditentukan", "tergantung pada"],
    },
    38: {
      yomi: "たばこの{値段|ねだん}が＿＿ ＿＿ ★ ＿＿ことだ。",
      arti: "Harga rokok naik atau turun, bagi saya yang tidak merokok itu hal yang tidak penting.",
      optYomi: [null, "{上|あ}がろうと{下|さ}がろうと", null, "たばこを{吸|す}わない"],
      optArti: ["bagi saya", "naik atau turun", "tidak penting", "yang tidak merokok"],
    },
    39: {
      yomi: "A「{見|み}てみて。レストラン『{夢|ゆめ}』の{無料|むりょう}{券|けん}もらっちゃった。」B「いいなあ。ちょっと{見|み}せて。なんだ。デザート＿＿ ＿＿ ★ ＿＿じゃないか。」",
      arti: "A: \"Lihat deh. Aku dapat voucher gratis Restoran 'Yume'.\" B: \"Enaknya. Coba lihat. Lho, cuma hidangan penutupnya saja yang gratis, kan.\"",
      optArti: ["(subjek) が", "hanya", "(yang disebut) いう", "gratis (katanya)"],
    },
    40: {
      yomi: "1{日|にち}{午後|ごご}4{時|じ}ごろ、システムトラブルの{影響|えいきょう}により、{一時|いちじ}メールサービスに{障害|しょうがい}が{発生|はっせい}しました。お{客様|きゃくさま}に＿＿ ＿＿ ★ ＿＿お{願|ねが}い{申|もう}し{上|あ}げます。",
      arti: "Sekitar pukul 4 sore tanggal 1, akibat gangguan sistem, layanan surel sempat terganggu. Kami mohon maaf sedalam-dalamnya atas ketidaknyamanan besar yang telah kami timbulkan kepada pelanggan; ke depannya kami akan berupaya mencegah terulangnya, dan kami mohon Anda tetap menggunakan layanan ini.",
      optYomi: [
        "{今後|こんご}は{再発|さいはつ}{防止|ぼうし}に{努|つと}めて{参|まい}りますので",
        "{深|ふか}くお{詫|わ}び{申|もう}し{上|あ}げますとともに",
        "{多大|ただい}なご{不便|ふべん}をおかけしましたことを",
        "{引|ひ}き{続|つづ}き{本|ほん}サービスをご{利用|りよう}くださいますよう",
      ],
      optArti: ["karena ke depannya kami akan berupaya mencegah terulangnya", "kami memohon maaf sedalam-dalamnya, sekaligus", "atas ketidaknyamanan besar yang kami timbulkan", "agar Anda tetap menggunakan layanan ini"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{何|なん}であろう", "{何|なん}であろうか", null, "{何|なん}だろうか"],
      optArti: ["apakah gerangan", "apakah gerangan itu?", "benarkah begitu?", "apa ya?"],
    },
    42: {
      optArti: ["jika melakukan", "jika tidak melakukan", "meskipun melakukan", "meskipun tidak melakukan"],
    },
    43: {
      optYomi: [null, "{点|てん}", null, null],
      optArti: ["(penegasan) のだ", "poin", "hal (melakukan ...)", "tempat, bagian"],
    },
    44: {
      optArti: ["kalau begitu", "oleh karena itu", "karena itu", "sebab"],
    },
    45: {
      optArti: ["bukankah ...?", "haruskah ...?", "bukan", "seharusnya"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{食|た}べることについて{筆者|ひっしゃ}はどのように{感|かん}じているか。",
      arti: "Bagaimana perasaan penulis tentang makan?",
      optYomi: [
        "{若|わか}い{頃|ころ}{肉|にく}が{好|す}きでよく{食|た}べた{人|ひと}も、{年|とし}をとると{食|た}べ{物|もの}の{好|この}みが{変|か}わる。",
        "{人|ひと}は{年齢|ねんれい}を{重|かさ}ねるにつれて、{野菜|やさい}も{肉|にく}も{食|た}べる{量|りょう}が{少|すく}なくなってくる。",
        "{二十代|にじゅうだい}の{頃|ころ}は{肉|にく}よりも{味|あじ}のしみたキノコや{野菜|やさい}を{好|この}んで{食|た}べる{人|ひと}が{多|おお}い。",
        "{年長者|ねんちょうしゃ}ほど{野菜|やさい}やキノコなど{半分|はんぶん}ずつ{食|た}べたほうがいいと{思|おも}っている。",
      ],
      optArti: [
        "Orang yang waktu muda suka dan sering makan daging pun, selera makannya berubah setelah tua.",
        "Seiring bertambahnya usia, jumlah sayur dan daging yang dimakan berkurang.",
        "Di usia dua puluhan, banyak orang lebih suka jamur dan sayur yang meresap rasanya daripada daging.",
        "Makin tua, makin menganggap sebaiknya makan sayur dan jamur masing-masing setengah.",
      ],
    },
    47: {
      yomi: "{暗黙|あんもく}のルールになっているのはどんなことか。",
      arti: "Apa yang menjadi aturan tak tertulis?",
      optYomi: [
        "{安否|あんぴ}をたずねる{気持|きも}ち、ことばを{口|くち}に{出|だ}さないこと",
        "あいさつを{交|か}わすときは、まず{安否|あんぴ}をたずねること",
        "あいさつのとき、{家族|かぞく}の{病気|びょうき}のことは{言|い}わないこと",
        "{病気|びょうき}の{人|ひと}がいる{家族|かぞく}とはあいさつを{交|か}わさないこと",
      ],
      optArti: [
        "Tidak mengucapkan perasaan dan kata-kata menanyakan kabar",
        "Saat bertukar salam, pertama-tama menanyakan kabar",
        "Saat bersalam, tidak menyebutkan penyakit anggota keluarga",
        "Tidak bertukar salam dengan keluarga yang ada orang sakitnya",
      ],
    },
    48: {
      yomi: "そこは{何|なに}を{指|さ}しているか。",
      arti: "\"Di sana\" merujuk pada apa?",
      optYomi: [
        "{品種|ひんしゅ}{改良|かいりょう}されていない{花|はな}",
        "カタログに{掲載|けいさい}されている{花|はな}",
        "{筆者|ひっしゃ}が{取|と}り{寄|よ}せたいと{思|おも}った{花|はな}",
        "{筆者|ひっしゃ}が{空想|くうそう}している{庭園|ていえん}の{花|はな}",
      ],
      optArti: [
        "Bunga yang belum dimuliakan jenisnya",
        "Bunga yang dimuat di katalog",
        "Bunga yang ingin dipesan penulis",
        "Bunga di taman khayalan penulis",
      ],
    },
    49: {
      yomi: "{人間|にんげん}について、この{文章|ぶんしょう}からわかることは{何|なに}か。",
      arti: "Apa yang bisa diketahui dari tulisan ini tentang manusia?",
      optYomi: [
        "{環境|かんきょう}の{変化|へんか}に{関係|かんけい}なく、{協調性|きょうちょうせい}より{自己|じこ}{利益|りえき}を{追求|ついきゅう}する。",
        "{生命|せいめい}の{危機|きき}がなくなると、{他者|たしゃ}との{協調性|きょうちょうせい}が{薄|うす}れる。",
        "{文明|ぶんめい}が{発展|はってん}するにつれて、{協調性|きょうちょうせい}が{生|う}まれる。",
        "{協調性|きょうちょうせい}を{育|そだ}てるために、{集団|しゅうだん}{生活|せいかつ}をする。",
      ],
      optArti: [
        "Terlepas dari perubahan lingkungan, manusia mengejar keuntungan pribadi daripada kerja sama.",
        "Jika ancaman terhadap nyawa hilang, kerja sama dengan orang lain melemah.",
        "Seiring berkembangnya peradaban, kerja sama pun lahir.",
        "Manusia hidup berkelompok untuk menumbuhkan kerja sama.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{筆者|ひっしゃ}の{友人|ゆうじん}が、＜「{自分|じぶん}」―「{仕事|しごと}」＝？＞という{設問|せつもん}に「ゼロや」と{答|こた}えたそうだが、それはどのような{意味|いみ}か。",
      arti: "Teman penulis menjawab \"nol\" untuk pertanyaan <\"diri sendiri\" − \"pekerjaan\" = ?>; apa maksudnya?",
      optYomi: [
        "その{友人|ゆうじん}はこれまで{仕事|しごと}しかしてこなかったので、ほかの{仕事|しごと}は{全然|ぜんぜん}できないという{意味|いみ}",
        "その{友人|ゆうじん}は{仕事|しごと}{一筋|ひとすじ}に{生|い}きてきたので、これからも{家族|かぞく}と{一緒|いっしょ}に{何|なに}かしようとは{考|かんが}えていないという{意味|いみ}",
        "その{友人|ゆうじん}は{生活|せいかつ}のすべてを{仕事|しごと}{中心|ちゅうしん}に{送|おく}ってきたので、{定年|ていねん}{後|ご}は{何|なに}もすることがないという{意味|いみ}",
        "その{友人|ゆうじん}は{定年|ていねん}{後|ご}に{生|い}きがいを{見|み}つけ、{会社|かいしゃ}{生活|せいかつ}で{得|え}たものはゼロだったと{感|かん}じているという{意味|いみ}",
      ],
      optArti: [
        "Karena selama ini hanya bekerja, ia sama sekali tidak bisa melakukan pekerjaan lain",
        "Karena hidup hanya untuk pekerjaan, ia tidak berpikir untuk melakukan sesuatu bersama keluarga ke depannya",
        "Karena seluruh hidupnya berpusat pada pekerjaan, setelah pensiun ia tidak punya kegiatan apa pun",
        "Setelah pensiun ia menemukan makna hidup, dan merasa apa yang didapat dari kehidupan kantor adalah nol",
      ],
    },
    51: {
      yomi: "①「ワシも{族|ぞく}」とは、どのような{人|ひと}たちのことか。",
      arti: "Siapakah yang dimaksud \"① golongan 'saya juga'\"?",
      optYomi: [
        "{奥|おく}さんが{何|なに}かしようとすると、なんでも{一緒|いっしょ}にしたがる{定年|ていねん}{後|ご}の{夫|おっと}",
        "{奥|おく}さんばかりでなく、{家族|かぞく}の{皆|みな}さんも{嫌|いや}がられている{定年|ていねん}{後|ご}の{父親|ちちおや}",
        "{会社|かいしゃ}に{出|で}かけて{行|い}くよりも、{家|いえ}で{奥|おく}さんと{一緒|いっしょ}にいるのが{好|す}きな{夫|おっと}",
        "{定年|ていねん}{退職|たいしょく}{後|ご}、{自|みずか}ら{進|すす}んで{家事|かじ}や{社会|しゃかい}{活動|かつどう}に{積極的|せっきょくてき}に{参加|さんか}したがる{夫|おっと}",
      ],
      optArti: [
        "Suami pensiunan yang ingin ikut dalam apa pun yang hendak dilakukan istrinya",
        "Ayah pensiunan yang tidak hanya tidak disukai istrinya, tetapi juga seluruh keluarga",
        "Suami yang lebih suka bersama istri di rumah daripada pergi ke kantor",
        "Suami yang setelah pensiun ingin aktif ikut pekerjaan rumah dan kegiatan sosial atas kemauan sendiri",
      ],
    },
    52: {
      yomi: "②{新|あたら}しい{視点|してん}をもたらすとは、どのようなことか。",
      arti: "Apa maksud \"② membawa sudut pandang baru\"?",
      optYomi: [
        "{退職|たいしょく}{後|ご}には{多種|たしゅ}{多様|たよう}な{仕事|しごと}の{選択肢|せんたくし}があるから{明|あか}るいと{感|かん}じること",
        "{会社|かいしゃ}{中心|ちゅうしん}に{過|す}ごしてきた{人|ひと}ほど、{家|いえ}での{仕事|しごと}に{積極的|せっきょくてき}になれること",
        "{会社|かいしゃ}{人間|にんげん}ほど{定年|ていねん}{後|ご}の{社会|しゃかい}{活動|かつどう}に{意欲的|いよくてき}であるととらえられること",
        "{定年|ていねん}{後|ご}に{生|い}きがいがない{人|ひと}でも、{社会的|しゃかいてき}な{活動|かつどう}には{期待|きたい}があるということ",
      ],
      optArti: [
        "Merasa masa depan cerah karena setelah pensiun ada beragam pilihan pekerjaan",
        "Semakin seseorang hidup berpusat pada kantor, semakin ia bisa aktif dalam pekerjaan rumah",
        "Bisa dipandang bahwa semakin seseorang 'manusia kantor', semakin bersemangat ia dalam kegiatan sosial setelah pensiun",
        "Orang yang tidak punya makna hidup setelah pensiun pun punya harapan pada kegiatan sosial",
      ],
    },
    53: {
      yomi: "①どんな{大|だい}メーカーを{相手|あいて}にも{対等|たいとう}に{優劣|ゆうれつ}を{争|あらそ}うことができるとあるが、なぜか。",
      arti: "Tertulis \"① bisa bersaing setara melawan produsen besar mana pun\"; mengapa?",
      optYomi: [
        "{創意|そうい}{工夫|くふう}する{力|ちから}さえあれば{売|う}れる{車|くるま}がつくれるから",
        "{性能|せいのう}さえよければ{採算|さいさん}のとれるレース{車|しゃ}がつくれるから",
        "{営業力|えいぎょうりょく}に{邪魔|じゃま}されずに{価格|かかく}で{勝負|しょうぶ}できる{車|くるま}がつくれるから",
        "コストなどの{要素|ようそ}に{影響|えいきょう}されずにレースで{競|きそ}える{車|くるま}がつくれるから",
      ],
      optArti: [
        "Karena asal punya daya kreasi, mobil yang laku bisa dibuat",
        "Karena asal performanya bagus, mobil balap yang menguntungkan bisa dibuat",
        "Karena bisa membuat mobil yang bersaing di harga tanpa terganggu kekuatan penjualan",
        "Karena bisa membuat mobil yang bersaing di balapan tanpa terpengaruh faktor seperti biaya",
      ],
    },
    54: {
      yomi: "②{出来|でき}る、{出来|でき}ないとあるが、{何|なに}が{出来|でき}る、{出来|でき}ないのか。",
      arti: "Tertulis \"② bisa atau tidak bisa\"; apa yang bisa atau tidak bisa?",
      optYomi: [
        "{自社|じしゃ}の{最高|さいこう}タイムを{次|つぎ}のレースで{上回|うわまわ}ること",
        "{技術的|ぎじゅつてき}に{妥協|だきょう}するしかない{場合|ばあい}には{妥協|だきょう}すること",
        "ライバル{社|しゃ}よりも{少|すこ}しでも{速|はや}く{走|はし}れる{車|くるま}をつくること",
        "アメリカや{欧州|おうしゅう}のレースでいい{成績|せいせき}をおさめること",
      ],
      optArti: [
        "Melampaui waktu terbaik perusahaan sendiri di balapan berikutnya",
        "Berkompromi saat secara teknis tidak ada pilihan lain",
        "Membuat mobil yang bisa melaju sedikit saja lebih cepat daripada pesaing",
        "Meraih hasil bagus di balapan Amerika atau Eropa",
      ],
    },
    55: {
      yomi: "この{文章|ぶんしょう}によると、レース{車|しゃ}の{開発|かいはつ}は、{技術者|ぎじゅつしゃ}にとってなぜ{魅力的|みりょくてき}なのか。",
      arti: "Menurut tulisan ini, mengapa pengembangan mobil balap menarik bagi para insinyur?",
      optYomi: [
        "{高|たか}い{技術力|ぎじゅつりょく}が{示|しめ}せれば{世界|せかい}で{認|みと}められるから",
        "{自分|じぶん}が{持|も}っている{技術力|ぎじゅつりょく}の{高|たか}さを{証明|しょうめい}できるから",
        "{明確|めいかく}な{目標|もくひょう}に{向|む}かって{開発|かいはつ}だけに{集中|しゅうちゅう}できるから",
        "{開発者|かいはつしゃ}としての{実力|じつりょく}が{大|だい}メーカーからも{評価|ひょうか}されるから",
      ],
      optArti: [
        "Karena jika bisa menunjukkan kemampuan teknis tinggi, mereka diakui dunia",
        "Karena bisa membuktikan tingginya kemampuan teknis yang dimiliki",
        "Karena bisa fokus hanya pada pengembangan menuju target yang jelas",
        "Karena kemampuan sebagai pengembang juga dinilai oleh produsen besar",
      ],
    },
    56: {
      yomi: "{柳田|やなぎた}が{使|つか}う「{空想|くうそう}・{空想|くうそう}する」と「{想像|そうぞう}・{想像|そうぞう}する」にはどのような{関係|かんけい}があると{筆者|ひっしゃ}は{考|かんが}えているか。",
      arti: "Menurut penulis, apa hubungan antara \"khayalan/berkhayal\" dan \"imajinasi/membayangkan\" yang dipakai Yanagita?",
      optYomi: [
        "{互|たが}いに{似|に}ている{部分|ぶぶん}があるが、「{空想|くうそう}・{空想|くうそう}する」から「{想像|そうぞう}・{想像|そうぞう}する」に{変|か}わることはない。",
        "{全|まった}く{異|こと}なるものであり、「{空想|くうそう}・{空想|くうそう}する」と「{想像|そうぞう}・{想像|そうぞう}する」との{境界|きょうかい}ははっきりしていない。",
        "{両極|りょうきょく}を{飛|と}ばすかたちで、「{空想|くうそう}・{空想|くうそう}する」と「{想像|そうぞう}・{想像|そうぞう}する」との{境界|きょうかい}ははっきりしている。",
        "{同様|どうよう}に{明確|めいかく}だが{境|さかい}はぼやけていて、「{空想|くうそう}・{空想|くうそう}する」から「{想像|そうぞう}・{想像|そうぞう}する」に{変|か}わることがある。",
      ],
      optArti: [
        "Ada bagian yang mirip, tetapi \"berkhayal\" tidak pernah berubah menjadi \"membayangkan\".",
        "Keduanya sama sekali berbeda, dan batas antara \"berkhayal\" dan \"membayangkan\" tidak jelas.",
        "Dengan melompati kedua kutub, batas antara \"berkhayal\" dan \"membayangkan\" jelas.",
        "Sama-sama jelas tetapi batasnya kabur, dan \"berkhayal\" kadang berubah menjadi \"membayangkan\".",
      ],
    },
    57: {
      yomi: "{柳田|やなぎた}が「{空想|くうそう}・{空想|くうそう}する」という{言葉|ことば}を{使|つか}うのはどのようなときだと{筆者|ひっしゃ}は{考|かんが}えているか。",
      arti: "Menurut penulis, kapan Yanagita memakai kata \"khayalan/berkhayal\"?",
      optYomi: [
        "はっきりしないものをもとに{古|ふる}い{時代|じだい}を{考|かんが}えるとき",
        "はっきりしたものを{根拠|こんきょ}に{古|ふる}い{時代|じだい}をたどるとき",
        "{現代|げんだい}に{残|のこ}されている{手|て}がかりから{過去|かこ}をたどるとき",
        "{過去|かこ}の{出来事|できごと}を{手|て}がかりに{現代|げんだい}を{考|かんが}えるとき",
      ],
      optArti: [
        "Saat memikirkan zaman kuno berdasarkan hal yang tidak jelas",
        "Saat menelusuri zaman kuno berdasarkan dasar yang jelas",
        "Saat menelusuri masa lalu dari petunjuk yang tersisa di masa kini",
        "Saat memikirkan masa kini dengan petunjuk kejadian masa lalu",
      ],
    },
    58: {
      yomi: "{柳田|やなぎた}が「{想像|そうぞう}・{想像|そうぞう}する」という{言葉|ことば}を{使|つか}うのはどのようなときだと{筆者|ひっしゃ}は{考|かんが}えているか。",
      arti: "Menurut penulis, kapan Yanagita memakai kata \"imajinasi/membayangkan\"?",
      optYomi: [
        "{古|ふる}い{時代|じだい}の{民衆|みんしゅう}の{心|こころ}を{伝|つた}えるとき",
        "{人間|にんげん}の{心|こころ}の{動|うご}きを{積極的|せっきょくてき}に{評価|ひょうか}するとき",
        "あいまいなイメージをはっきりさせるとき",
        "{明確|めいかく}な{根拠|こんきょ}にもとづく{心|こころ}の{動|うご}きを{表|あらわ}すとき",
      ],
      optArti: [
        "Saat menyampaikan hati rakyat zaman kuno",
        "Saat menilai gerak hati manusia secara positif",
        "Saat memperjelas gambaran yang samar",
        "Saat menyatakan gerak hati yang berdasarkan dasar yang jelas",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "①シナジー{効果|こうか}とあるが、{読者|どくしゃ}にとってのシナジー{効果|こうか}とはどのようなものか。",
      arti: "Tertulis \"① efek sinergi\"; seperti apa efek sinergi bagi pembaca?",
      optYomi: [
        "{記述|きじゅつ}されている{内容|ないよう}から、{求|もと}めていた{以上|いじょう}のことが{得|え}られる。",
        "{筆者|ひっしゃ}が{伝|つた}えようとしている{事柄|ことがら}を{理解|りかい}し、{知識|ちしき}を{増|ふ}やす。",
        "{読|よ}むことを{通|とお}して{事実|じじつ}を{知|し}り、{不十分|ふじゅうぶん}な{点|てん}を{探|さが}す。",
        "{文章|ぶんしょう}から{足|た}りない{知識|ちしき}を{補|おぎな}い、{疑問|ぎもん}を{解消|かいしょう}する。",
      ],
      optArti: [
        "Mendapat lebih dari yang dicari dari isi yang tertulis.",
        "Memahami hal yang ingin disampaikan penulis dan menambah pengetahuan.",
        "Mengetahui fakta melalui membaca, lalu mencari bagian yang kurang.",
        "Melengkapi pengetahuan yang kurang dari tulisan dan menghilangkan keraguan.",
      ],
    },
    60: {
      yomi: "②それが{一番|いちばん}よくわかるとあるが、{何|なに}が{一番|いちばん}よくわかるのか。",
      arti: "Tertulis \"② hal itu paling jelas terlihat\"; apa yang paling jelas terlihat?",
      optYomi: [
        "{読|よ}み{手|て}に{満足感|まんぞくかん}を{与|あた}えるのは{難|むずか}しいということ",
        "{素晴|すば}らしい{内容|ないよう}でなければ{読|よ}んでもらえないこと",
        "{読|よ}む{気|き}がないものは{最後|さいご}まで{読|よ}んでもらえないこと",
        "{全部|ぜんぶ}すべてを{理解|りかい}してもらうことは{不可能|ふかのう}だということ",
      ],
      optArti: [
        "Bahwa memberi kepuasan kepada pembaca itu sulit",
        "Bahwa jika isinya tidak luar biasa, tulisan tidak akan dibaca",
        "Bahwa tulisan yang tidak membangkitkan minat baca tidak akan dibaca sampai akhir",
        "Bahwa membuat pembaca memahami semuanya itu mustahil",
      ],
    },
    61: {
      yomi: "{人|ひと}の{頭|あたま}に{届|とど}いても、{心|こころ}に{届|とど}かないとはどういうことか。",
      arti: "Apa maksud \"sampai ke kepala orang, tetapi tidak sampai ke hatinya\"?",
      optYomi: [
        "{技巧|ぎこう}には{感心|かんしん}しても、{内容|ないよう}には{共感|きょうかん}できない。",
        "{行間|ぎょうかん}の{意味|いみ}は{理解|りかい}できても、{内容|ないよう}には{感動|かんどう}できない。",
        "{書|か}き{手|て}の{姿勢|しせい}は{理解|りかい}できても、{気迫|きはく}までは{感|かん}じられない。",
        "{内容|ないよう}は{理解|りかい}できても、{書|か}き{手|て}の{気持|きも}ちは{伝|つた}わってこない。",
      ],
      optArti: [
        "Kagum pada tekniknya, tetapi tidak bisa bersimpati pada isinya.",
        "Bisa memahami makna tersirat, tetapi tidak tersentuh oleh isinya.",
        "Bisa memahami sikap penulis, tetapi tidak merasakan semangatnya.",
        "Isinya bisa dipahami, tetapi perasaan penulis tidak tersampaikan.",
      ],
    },
    62: {
      yomi: "{理系|りけい}の{文章|ぶんしょう}の{書|か}き{手|て}はどのような{姿勢|しせい}を{持|も}つべきだと{筆者|ひっしゃ}は{述|の}べているか。",
      arti: "Menurut penulis, sikap apa yang harus dimiliki penulis tulisan sains?",
      optYomi: [
        "{読者|どくしゃ}の{読|よ}む{目的|もくてき}を{分析|ぶんせき}し、{読者|どくしゃ}に{過不足|かふそく}のない{情報|じょうほう}を{与|あた}えようとする。",
        "{読者|どくしゃ}を{意識|いしき}しつつ、{真摯|しんし}に{解答|かいとう}を{求|もと}めてその{気持|きも}ちを{伝|つた}えようとする。",
        "{読者|どくしゃ}に{満足感|まんぞくかん}を{与|あた}えるよう、{妥協|だきょう}せずに{完全|かんぜん}な{解答|かいとう}を{提供|ていきょう}しようとする。",
        "{読者|どくしゃ}の{読|よ}む{気|き}を{最後|さいご}まで{誘|さそ}うよう、{読者|どくしゃ}の{思考|しこう}{過程|かてい}を{深|ふか}く{分析|ぶんせき}しようとする。",
      ],
      optArti: [
        "Menganalisis tujuan membaca pembaca dan berusaha memberi informasi yang pas, tidak kurang tidak lebih.",
        "Sambil menyadari pembaca, berusaha mencari jawaban dengan tulus dan menyampaikan perasaan itu.",
        "Berusaha memberi jawaban sempurna tanpa kompromi agar pembaca puas.",
        "Berusaha menganalisis proses berpikir pembaca secara mendalam agar minat bacanya bertahan sampai akhir.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{生態系|せいたいけい}を{構成|こうせい}する{生物|せいぶつ}の{保護|ほご}について、AとBの{文章|ぶんしょう}で{共通|きょうつう}して{述|の}べられていることは{何|なに}か。",
      arti: "Tentang perlindungan makhluk hidup penyusun ekosistem, apa yang sama-sama dinyatakan dalam tulisan A dan B?",
      optYomi: [
        "{多様|たよう}な{生物|せいぶつ}を{含|ふく}む{自然|しぜん}{自体|じたい}を{保護|ほご}することが{重要|じゅうよう}である。",
        "{多様|たよう}な{生物|せいぶつ}{種|しゅ}を{一緒|いっしょ}に{保護|ほご}していくことは{非常|ひじょう}に{難|むずか}しい。",
        "{生物|せいぶつ}{種|しゅ}を{分類|ぶんるい}して{保護|ほご}することは{生態系|せいたいけい}の{差別|さべつ}につながる。",
        "{人類|じんるい}に{利益|りえき}を{与|あた}える{生物|せいぶつ}を{保護|ほご}するべきである。",
      ],
      optArti: [
        "Yang penting adalah melindungi alam itu sendiri yang mengandung beragam makhluk hidup.",
        "Melindungi beragam spesies sekaligus sangatlah sulit.",
        "Melindungi spesies dengan mengklasifikasikannya berujung pada diskriminasi ekosistem.",
        "Makhluk hidup yang memberi keuntungan bagi manusia harus dilindungi.",
      ],
    },
    64: {
      yomi: "「{保護|ほご}」の{対象|たいしょう}についてAとBはどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat A dan B tentang sasaran \"perlindungan\"?",
      optYomi: [
        "Aは{地球|ちきゅう}{生態系|せいたいけい}を、Bは{遺伝的|いでんてき}{多様性|たようせい}のある{種|しゅ}を{保護|ほご}すべきだと{考|かんが}えている。",
        "Aは{生態系|せいたいけい}の{全|ぜん}{生物|せいぶつ}を、Bは{希少|きしょう}{価値|かち}のある{生物|せいぶつ}を{保護|ほご}すべきだと{考|かんが}えている。",
        "Aは{人類|じんるい}に{利益|りえき}を{与|あた}える{生物|せいぶつ}{種|しゅ}を、Bは{個別|こべつ}の{種|しゅ}を{保護|ほご}すべきだと{考|かんが}えている。",
        "Aは{人類|じんるい}のためになる{生態系|せいたいけい}を、Bは{生態系|せいたいけい}{全体|ぜんたい}を{保護|ほご}すべきだと{考|かんが}えている。",
      ],
      optArti: [
        "A berpendapat ekosistem bumi, B berpendapat spesies yang punya keragaman genetik yang harus dilindungi.",
        "A berpendapat seluruh makhluk dalam ekosistem, B berpendapat makhluk yang langka yang harus dilindungi.",
        "A berpendapat spesies yang menguntungkan manusia, B berpendapat setiap spesies secara individual yang harus dilindungi.",
        "A berpendapat ekosistem yang bermanfaat bagi manusia, B berpendapat ekosistem secara keseluruhan yang harus dilindungi.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "①お{宅|たく}の{坊|ぼっ}ちゃんがまだ……とあるが、「まだ」の{後|あと}に{続|つづ}く{言葉|ことば}はどれか。",
      arti: "Tertulis \"① anak laki-laki Bapak masih...\"; kata apa yang menyusul setelah \"masih\"?",
      optYomi: [
        "{小学生|しょうがくせい}で、{犬|いぬ}の{訓練|くんれん}が{苦手|にがて}ですから",
        "{序列|じょれつ}が{犬|いぬ}より{上|うえ}になっていませんから",
        "{小学生|しょうがくせい}で、{訓練|くんれん}が{終|お}わっていませんから",
        "きょうだいの{序列|じょれつ}を{理解|りかい}していませんから",
      ],
      optArti: [
        "masih SD, jadi tidak pandai melatih anjing",
        "belum berada di urutan di atas anjing",
        "masih SD, jadi latihannya belum selesai",
        "belum memahami urutan antarsaudara",
      ],
    },
    66: {
      yomi: "②{腕|うで}をがぶりと{噛|か}みつかれた{飼|か}い{主|ぬし}がいたとあるが、この{犬|いぬ}はどうして{噛|か}ついたか。",
      arti: "Tertulis \"② ada pemilik yang lengannya digigit keras\"; mengapa anjing itu menggigit?",
      optYomi: [
        "この{犬|いぬ}は{自分|じぶん}の{方|ほう}が{飼|か}い{主|ぬし}より{上|うえ}だと{思|おも}っていたから",
        "{女性|じょせい}の{訓練士|くんれんし}に{甘|あま}やかされて{誰|だれ}にでも{噛|か}みついていたから",
        "{強|つよ}い{相手|あいて}に{挑|いど}まなければ{厳|きび}しい{自然界|しぜんかい}では{生|い}き{残|のこ}れないから",
        "この{犬|いぬ}は{飼|か}い{主|ぬし}と{自分|じぶん}の{序列|じょれつ}はまだ{定|さだ}まっていないと{思|おも}ったから",
      ],
      optArti: [
        "Karena anjing itu mengira dirinya berada di atas pemiliknya",
        "Karena dimanjakan pelatih perempuan sehingga menggigit siapa saja",
        "Karena jika tidak menantang lawan yang kuat, tidak bisa bertahan di alam yang keras",
        "Karena anjing itu mengira urutan antara pemilik dan dirinya belum ditentukan",
      ],
    },
    67: {
      yomi: "③{男女|だんじょ}{平等|びょうどう}をはきちがえてはいけないと{言|い}っているが、{筆者|ひっしゃ}は「はきちがえる」とどうなると{考|かんが}えているか。",
      arti: "Penulis berkata \"③ jangan salah memahami kesetaraan gender\"; menurut penulis, apa yang terjadi jika \"salah memahaminya\"?",
      optYomi: [
        "{共働|ともばたら}きが{普通|ふつう}になり、{父親|ちちおや}が{家事|かじ}を{分担|ぶんたん}するようになる。",
        "{父親|ちちおや}と{母親|ははおや}の{家庭|かてい}{内|ない}での{役割|やくわり}が{混乱|こんらん}し、{問題|もんだい}が{生|う}まれる。",
        "{職場|しょくば}で{女性|じょせい}がもっと{管理職|かんりしょく}に{進出|しんしゅつ}できるようになる{環境|かんきょう}になる。",
        "{家父長制|かふちょうせい}が{復活|ふっかつ}して{戦前|せんぜん}の{社会|しゃかい}のように{序列化|じょれつか}される。",
      ],
      optArti: [
        "Suami-istri bekerja menjadi hal biasa, dan ayah ikut membagi pekerjaan rumah.",
        "Peran ayah dan ibu dalam keluarga menjadi kacau, dan muncul masalah.",
        "Tercipta lingkungan di mana perempuan bisa lebih banyak menjadi manajer di tempat kerja.",
        "Sistem patriarki bangkit kembali dan terjadi penjenjangan seperti masyarakat sebelum perang.",
      ],
    },
    68: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{犬|いぬ}には{訓練|くんれん}によって{家庭|かてい}{内|ない}での{序列|じょれつ}を{教|おし}え{込|こ}むことが{必要|ひつよう}である。",
        "{父親|ちちおや}と{母親|ははおや}の{役割|やくわり}を{明確|めいかく}にするために、{家父長制|かふちょうせい}を{復活|ふっかつ}すべきである。",
        "{家庭|かてい}の{問題|もんだい}を{解決|かいけつ}するためには{動物|どうぶつ}と{同|おな}じく{序列化|じょれつか}が{必要|ひつよう}である。",
        "{親|おや}は{家庭|かてい}でそれぞれ{父性|ふせい}や{母性|ぼせい}にもとづく{役割|やくわり}を{果|は}たすべきである。",
      ],
      optArti: [
        "Anjing perlu diajari urutan dalam keluarga melalui pelatihan.",
        "Untuk memperjelas peran ayah dan ibu, sistem patriarki harus dihidupkan kembali.",
        "Untuk menyelesaikan masalah keluarga, diperlukan penjenjangan seperti pada hewan.",
        "Orang tua seharusnya masing-masing menjalankan peran berdasarkan sifat keayahan dan keibuan di rumah.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{会社員|かいしゃいん}の{山田|やまだ}さんは{英語|えいご}で{書|か}かれた{新聞|しんぶん}を{読|よ}めるようになりたいと{思|おも}っている。{週末|しゅうまつ}は{出張|しゅっちょう}が{多|おお}いので{平日|へいじつ}しか{通|かよ}えない。{山田|やまだ}さんに{合|あ}う{講座|こうざ}はどれか。",
      arti: "Yamada-san, seorang karyawan, ingin bisa membaca koran berbahasa Inggris. Karena akhir pekan sering dinas luar, ia hanya bisa datang pada hari kerja. Kursus mana yang cocok untuk Yamada-san?",
      optArti: ["① Bahasa Inggris Mudah", "② Belajar Sungguh-sungguh dengan Orang Asing", "③ Bahasa Inggris Pertama", "④ Bahasa Inggris Step-up"],
    },
    70: {
      yomi: "④の{講座|こうざ}を{受講|じゅこう}するためにはどのような{手続|てつづ}きが{必要|ひつよう}か。",
      arti: "Prosedur apa yang diperlukan untuk mengikuti kursus ④?",
      optYomi: [
        "{見学|けんがく}をしてレベルを{確認|かくにん}してから、{電話|でんわ}で{受講|じゅこう}を{申|もう}し{込|こ}む。",
        "{会館|かいかん}に{行|い}って{総合|そうごう}パンフレットをもらい、{窓口|まどぐち}で{申|もう}し{込|こ}む。",
        "{電話|でんわ}で{受講|じゅこう}{申込書|もうしこみしょ}を{送|おく}ってもらい、{会館|かいかん}に{行|い}って{申|もう}し{込|こ}む。",
        "{事前|じぜん}{見学|けんがく}の{予約|よやく}をし、{見学|けんがく}{後|ご}、{郵便局|ゆうびんきょく}で{受講料|じゅこうりょう}を{振|ふ}り{込|こ}む。",
      ],
      optArti: [
        "Mengikuti kunjungan untuk memastikan level, lalu mendaftar lewat telepon.",
        "Pergi ke gedung, mengambil brosur lengkap, lalu mendaftar di loket.",
        "Meminta formulir pendaftaran dikirim lewat telepon, lalu pergi ke gedung untuk mendaftar.",
        "Memesan kunjungan terlebih dahulu, lalu setelah berkunjung mentransfer biaya kursus di kantor pos.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：なぜ下手か日本人の外国語 ──
    "7": {
      yomi: `わが{国|くに}では{一般|いっぱん}に、{日本人|にほんじん}が{外国語|がいこくご}を{話|はな}せないのは、{教育|きょういく}の{技術|ぎじゅつ}が{悪|わる}いからだと{信|しん}じられている。はたして[41]。{確|たし}かに{教育|きょういく}にも{問題|もんだい}があろう。しかし、たとえばつぎの{四点|よんてん}を{実行|じっこう}[42]、どんなに「{会話|かいわ}」がうまくても、{国際的|こくさいてき}な{場所|ばしょ}では{傾聴|けいちょう}（{注|ちゅう}）されないだろう。

（1）{自分|じぶん}の{考|かんが}えを{論理的|ろんりてき}に{表現|ひょうげん}する[43]。
（2）{遠慮|えんりょ}せず{議論|ぎろん}に{割|わ}りこむ[43]。
（3）{他|ほか}の{人|ひと}とひと{味|あじ}{違|ちが}った{発言|はつげん}をする[43]。
（4）{五分|ごふん}に{一度|いちど}は{聴衆|ちょうしゅう}を{笑|わら}わす[43]。

この{四点|よんてん}は、{考|かんが}えようによっては、{外国語|がいこくご}を{話|はな}すよりも{難|むずか}しい。[44]わが{国|くに}では、{語|かた}るには{情|じょう}をもってし、つねに{控|ひか}え{目|め}で、{皆|みな}と{同|おな}じことを{行|おこな}い、まじめでふざけないことが{評価|ひょうか}され、{美徳|びとく}とされているからだ。こう{考|かんが}えてみると、{日本人|にほんじん}の{外国語|がいこくご}{下手|べた}は、{教育|きょういく}{技術|ぎじゅつ}の{問題|もんだい}というよりは、もっと{深|ふか}い{文化|ぶんか}の{問題|もんだい}[45]と{思|おも}うのである。
（{小林|こばやし}{善彦|よしひこ}「なぜ{下手|へた}か{日本人|にほんじん}の{外国語|がいこくご}」1992{年|ねん}8{月|がつ}21{日|にち}{付|づけ}{朝日|あさひ}{新聞|しんぶん}{夕刊|ゆうかん}による）
（{注|ちゅう}）{傾聴|けいちょう}（けいちょう）：{真剣|しんけん}に{聞|き}くこと。`,
      arti: `Di negara kita, umumnya diyakini bahwa orang Jepang tidak bisa berbicara bahasa asing karena teknik pengajarannya buruk. [41] Memang, pendidikan pun mungkin bermasalah. Namun, misalnya, [42] empat hal berikut, seberapa pun pandainya "bercakap-cakap", di forum internasional ia tidak akan didengarkan dengan sungguh-sungguh (catatan).

(1) Mengungkapkan pikiran sendiri secara logis [43].
(2) Menyela diskusi tanpa sungkan [43].
(3) Berbicara dengan sesuatu yang sedikit berbeda dari orang lain [43].
(4) Membuat hadirin tertawa sekali setiap lima menit [43].

Keempat hal ini, tergantung cara memandangnya, lebih sulit daripada berbicara bahasa asing. [44] di negara kita, yang dinilai baik dan dianggap kebajikan adalah berbicara dengan perasaan, selalu rendah hati, melakukan hal yang sama dengan semua orang, serta bersikap serius dan tidak bercanda. Jika dipikirkan begini, menurut saya ketidakmahiran orang Jepang berbahasa asing [45] masalah budaya yang lebih dalam, alih-alih masalah teknik pengajaran.
(Dari artikel Kobayashi Yoshihiko, "Mengapa Orang Jepang Tidak Pandai Bahasa Asing", harian Asahi edisi sore, 21 Agustus 1992)
(Catatan) 傾聴: mendengarkan dengan sungguh-sungguh.`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{大人|おとな}になっても、{味覚|みかく}は{変|か}わり{続|つづ}ける。{二十代|にじゅうだい}の{頃|ころ}、{好|す}きな{麺|めん}などを{問|と}うと、{肉|にく}ばかり{食|た}べている{私|わたし}を{見|み}て、「{私|わたし}たちはもう{沢山|たくさん}。{年|とし}をとると、キノコや{野菜|やさい}が{一番|いちばん}おいしい」などと{半|なか}ば{私|わたし}を、{半|なか}ば{自分|じぶん}{自身|じしん}を{諭|さと}すように{言|い}う{年長者|ねんちょうしゃ}がいた。なるほど、{私|わたし}も、{最近|さいきん}では{肉|にく}の{味|あじ}のしみた{野菜|やさい}やキノコがおいしい。{一方|いっぽう}で、{肉|にく}も{相変|あいか}わらず{食|た}べる。{年長者|ねんちょうしゃ}だからといって、{肉|にく}を{食|た}べなくなるわけではないのに。
（{茂木|もぎ}{健一郎|けんいちろう}『{食|しょく}のクオリア』による）`,
      arti: `Meski sudah dewasa, indra pengecap terus berubah. Waktu saya berusia dua puluhan, ketika ditanya mi kesukaan dan sebagainya, ada orang yang lebih tua yang melihat saya hanya makan daging lalu berkata setengah menasihati saya, setengah menasihati dirinya sendiri, "Kami sudah cukup (dengan daging). Kalau sudah tua, jamur dan sayur paling enak." Memang, belakangan saya pun merasa sayur dan jamur yang meresap rasa dagingnya itu enak. Di sisi lain, saya tetap makan daging seperti biasa. Padahal bukan berarti karena sudah lebih tua, orang jadi tidak makan daging.
(Dari buku karya Mogi Ken'ichirō)`,
    },
    "8-2": {
      yomi: `{相手|あいて}を{思|おも}いやる{気持|きも}ち、これも、「あいさつ」の{心|こころ}にちがいありません。{先年|せんねん}、アフリカへ{行|い}ったとき、タンザニアで{聞|き}いたことですが、{現地|げんち}の{人|ひと}たちが{道|みち}で{知人|ちじん}にあいさつを{交|か}わすとき、おたがいに{家族|かぞく}の{安否|あんぴ}をたずねますが、たとえ{自分|じぶん}の{家族|かぞく}に{病人|びょうにん}がいても、それを{口|くち}に{出|だ}さないのが{暗黙|あんもく}のルールになっているのだそうです。{相手|あいて}の{気持|きも}ちに{負担|ふたん}をかけまいとする{心|こころ}からです。
（川浦博『ことばの{力|ちから}』による）`,
      arti: `Perasaan peduli terhadap orang lain, ini juga pasti merupakan jiwa dari "salam". Ketika saya pergi ke Afrika beberapa tahun lalu, saya mendengar di Tanzania bahwa ketika penduduk setempat bertukar salam dengan kenalan di jalan, mereka saling menanyakan kabar keluarga, tetapi meskipun ada anggota keluarganya yang sakit, menjadi aturan tak tertulis untuk tidak mengatakannya. Itu karena niat agar tidak membebani perasaan lawan bicara.
(Dari buku "Kekuatan Kata-kata")`,
    },
    "8-3": {
      yomi: `{毎年|まいとし}、{花|はな}の{種|たね}を{買|か}い、{球根|きゅうこん}を{植|う}えつける{季節|きせつ}が{近|ちか}づくと、{種苗|しゅびょう}を{扱|あつか}う{農園|のうえん}から、{色刷|いろず}りのカタログが{送|おく}られてくる。{私|わたし}には{植物|しょくぶつ}を{実際|じっさい}に{取|と}り{寄|よ}せて{植|う}える{土地|とち}などはないから、それを{眺|なが}めて{空想|くうそう}{庭園|ていえん}を{楽|たの}しむのである。しかし、それらの{誇|ほこ}らしげに{咲|さ}いている{花|はな}の{見合|みあ}い{写真|しゃしん}を{次々|つぎつぎ}に{見|み}ていくと、{選択|せんたく}（{注|ちゅう}1）が{一様|いちよう}に{偏|かたよ}っていることに{嫌|いや}でも{気|き}がつく。つまり、すべての{花|はな}を「{品種|ひんしゅ}{改良|かいりょう}」によって、より{大輪|たいりん}（{注|ちゅう}2）にし、そして{何|なん}でもかんでも{八重咲|やえざき}（{注|ちゅう}3）に{造|つく}りかえてしまうという、{人間|にんげん}の{趣味|しゅみ}と{努力|どりょく}と{一種|いっしゅ}の{意地|いじ}がそこに{反映|はんえい}しているのである。
（{奥本|おくもと}{大三郎|だいさぶろう}『{虫|むし}の{宇宙誌|うちゅうし}』による）
（{注|ちゅう}1）{選択|せんたく}：ここでは、{花|はな}のこと
（{注|ちゅう}2）{大輪|たいりん}：{花|はな}の{大|おお}きさが{普通|ふつう}よりも{大|おお}きいこと
（{注|ちゅう}3）{八重咲|やえざき}：{花|はな}びらが{数多|かずおお}く{重|かさ}なっていること`,
      arti: `Setiap tahun, menjelang musim membeli benih bunga dan menanam umbi, katalog berwarna dikirimkan dari kebun yang menjual benih dan bibit. Karena saya tidak punya lahan untuk benar-benar memesan dan menanam tanaman, saya menikmati taman khayalan dengan memandangi katalog itu. Namun, ketika satu per satu melihat "foto perjodohan" bunga-bunga yang mekar dengan bangganya itu, mau tidak mau saya menyadari bahwa pilihannya (catatan 1) seragam-seragam saja berat sebelah. Artinya, di sana tercermin selera, usaha, dan semacam gengsi manusia untuk menjadikan semua bunga lebih besar (catatan 2) melalui "pemuliaan jenis", dan mengubah apa saja menjadi bunga berkelopak bertumpuk (catatan 3).
(Dari buku karya Okumoto Daisaburō)
(Catatan 1) 選択: di sini, bunga
(Catatan 2) 大輪: ukuran bunga lebih besar dari biasanya
(Catatan 3) 八重咲: kelopak bunga bertumpuk banyak`,
    },
    "8-4": {
      yomi: `{生|い}きものは{危機|きき}と{遭遇|そうぐう}しそれを{乗|の}り{切|き}ることで{進化|しんか}してきました。{人間|にんげん}{社会|しゃかい}も{同|おな}じです。{環境|かんきょう}{変化|へんか}による{影響|えいきょう}を{受|う}けにくくするため、{私|わたし}たちの{祖先|そせん}は{集団|しゅうだん}{生活|せいかつ}を{始|はじ}め、{都市|とし}を{築|きず}き{文明|ぶんめい}を{育|そだ}ててきました。{協調|きょうちょう}が{社会|しゃかい}の{基本|きほん}にあります。{文明|ぶんめい}の{初期|しょき}{段階|だんかい}では、{生|い}き{延|の}びるため、{皆|みな}が{協調|きょうちょう}します。しかし、{生存|せいぞん}が{既定|きてい}のものと{思|おも}うようになると、{自分|じぶん}さえよければいいという{自己|じこ}{利益|りえき}の{最大化|さいだいか}に{走|はし}ります。{結果|けっか}は{滅亡|めつぼう}です。
（{日本|にほん}{経済|けいざい}{新聞|しんぶん}{二〇一〇年|にせんじゅうねん}{三月|さんがつ}{八日|ようか}{付|づけ}{朝刊|ちょうかん}による）`,
      arti: `Makhluk hidup berevolusi dengan menghadapi krisis dan berhasil melewatinya. Masyarakat manusia pun sama. Agar tidak mudah terpengaruh perubahan lingkungan, leluhur kita memulai hidup berkelompok, membangun kota, dan menumbuhkan peradaban. Kerja sama adalah dasar masyarakat. Pada tahap awal peradaban, semua orang bekerja sama demi bertahan hidup. Namun, begitu kelangsungan hidup dianggap sudah pasti, orang berlari mengejar keuntungan pribadi sebesar-besarnya dengan prinsip "asal diri sendiri untung". Akibatnya adalah kehancuran.
(Dari harian Nihon Keizai Shimbun pagi, 8 Maret 2010)`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{定年|ていねん}に{備|そな}えた{企業|きぎょう}の{研修|けんしゅう}{資料|しりょう}に＜「{自分|じぶん}」―「{仕事|しごと}」＝？＞とあるのを{見|み}て、{会社|かいしゃ}{一筋|ひとすじ}に{働|はたら}いてきた{人|ひと}には{厳|きび}しい{設問|せつもん}だなあ、と{思|おも}ったことがある。

{事実|じじつ}、{会社|かいしゃ}{人間|にんげん}だった{大阪|おおさか}の{友人|ゆうじん}はこの{設問|せつもん}に「ゼロや」と{苦笑|くしょう}して、{定年|ていねん}{後|ご}の{近況|きんきょう}を{話|はな}す。

「{女房|にょうぼう}が{出掛|でか}けようとすると、ワシ（{注|ちゅう}）も{行|い}くと{言|い}うもんやから、すっかり{嫌|いや}がられてるよ」

こういう{定年|ていねん}{亭主|ていしゅ}を「{恐怖|きょうふ}のワシも{族|ぞく}」と{言|い}うのだそうだが、{今|いま}やさぞかし①「ワシも{族|ぞく}」がはびこっていることだろうと{思|おも}いきや、ニッセイ{基礎|きそ}{研究所|けんきゅうしょ}の「{定年|ていねん}{前|まえ}・{定年|ていねん}{後|ご}」という{本|ほん}にこんな{調査|ちょうさ}{結果|けっか}が{収|おさ}められていた。

{数字|すうじ}は{省|はぶ}くが、{仕事|しごと}に{生|い}きがいを{持|も}っていた{人|ひと}のほうが、そうでない{人|ひと}より{定年|ていねん}{後|ご}の{社会|しゃかい}{活動|かつどう}にもずっと{生|い}きがいを{感|かん}じているという{内容|ないよう}で、{要|よう}するに、{会社|かいしゃ}{人間|にんげん}ほど{定年|ていねん}{後|ご}も{意欲的|いよくてき}という{分析|ぶんせき}だ。

{彼|かれ}らの{社会|しゃかい}{活動|かつどう}の{生|い}きがいは、{交友|こうゆう}{関係|かんけい}の{広|ひろ}がりによって{生|う}まれているようで、{植木|うえき}{職人|しょくにん}になったり、NPOやボランティア、{地域|ちいき}{活動|かつどう}に{携|たずさ}わっている{元|もと}{銀行員|ぎんこういん}をはじめ、{多種|たしゅ}{多様|たよう}なケースがいろいろ{紹介|しょうかい}されている。

{以前|いぜん}、あれは{有力|ゆうりょく}{銀行|ぎんこう}の{支店長|してんちょう}であったか、{定年|ていねん}{退職|たいしょく}した{途端|とたん}、{年賀状|ねんがじょう}も{激減|げきげん}するなど{一変|いっぺん}した{状況|じょうきょう}に{喪失感|そうしつかん}を{覚|おぼ}え、{自|みずか}ら{命|いのち}を{絶|た}ったという{話|はなし}を{聞|き}いたことがある。

これなどは{極端|きょくたん}なケースだとしても、＜「{会社|かいしゃ}」のために{頑張|がんば}る{価値観|かちかん}は、「{社会|しゃかい}」のために{頑張|がんば}る{価値観|かちかん}と{合致|がっち}するかもしれない＞と{分析|ぶんせき}される{先|さき}の{調査|ちょうさ}{結果|けっか}などは、{会社|かいしゃ}{人間|にんげん}の「その{後|ご}」に②{新|あたら}しい{視点|してん}をもたらすものだろう。
（{近藤|こんどう}{勝重|かつしげ}「しあわせのトンボ：{会社|かいしゃ}{人間|にんげん}の『その{後|ご}』」2007{年|ねん}11{月|がつ}14{日|か}{付|づけ}{毎日|まいにち}{新聞|しんぶん}{夕刊|ゆうかん}による）
（{注|ちゅう}）ワシ：わたし`,
      arti: `Saya pernah melihat dalam materi pelatihan perusahaan untuk persiapan pensiun tertulis <"diri sendiri" − "pekerjaan" = ?>, dan berpikir, "Ini pertanyaan yang berat bagi orang yang bekerja hanya untuk perusahaan."

Kenyataannya, seorang teman saya di Osaka yang dulu "manusia kantor" tersenyum kecut menjawab "nol" untuk pertanyaan ini, lalu bercerita tentang kabarnya setelah pensiun.

"Setiap kali istriku mau pergi, aku (catatan) bilang 'aku juga ikut', jadi dia benar-benar tidak suka padaku."

Suami pensiunan seperti ini katanya disebut "golongan 'saya juga' yang menakutkan", dan saya kira sekarang ① golongan "saya juga" pasti merajalela, tetapi ternyata dalam buku "Sebelum Pensiun, Sesudah Pensiun" dari NLI Research Institute dimuat hasil survei seperti ini.

Angkanya saya lewati, tetapi isinya: orang yang dulu merasa pekerjaannya bermakna justru jauh lebih merasakan makna hidup dalam kegiatan sosial setelah pensiun dibandingkan yang tidak. Singkatnya, analisisnya adalah semakin seseorang "manusia kantor", semakin bersemangat ia setelah pensiun.

Makna hidup dalam kegiatan sosial mereka tampaknya lahir dari meluasnya pergaulan; dimuat berbagai kasus beragam, mulai dari mantan pegawai bank yang menjadi tukang kebun, terlibat di LSM, kerja sukarela, sampai kegiatan lingkungan.

Dulu saya pernah mendengar cerita — kalau tidak salah tentang seorang kepala cabang bank besar — yang begitu pensiun, kartu ucapan tahun baru pun berkurang drastis dan keadaannya berubah total, lalu ia merasa kehilangan dan bunuh diri.

Meski itu kasus ekstrem, hasil survei tadi yang menganalisis bahwa <nilai bekerja keras untuk "perusahaan" mungkin sejalan dengan nilai bekerja keras untuk "masyarakat"> tentu ② membawa sudut pandang baru tentang "kehidupan setelahnya" bagi manusia kantor.
(Dari kolom Kondō Katsushige, harian Mainichi edisi sore, 14 November 2007)
(Catatan) ワシ: saya (dialek/gaya bicara pria tua)`,
    },
    "9-2": {
      yomi: `{技術者|ぎじゅつしゃ}にとってレース{車|しゃ}を{開発|かいはつ}するというのは、{非常|ひじょう}に{魅力|みりょく}があるようなのだ。

それはそうだろう。{市販|しはん}{車|しゃ}の{開発|かいはつ}であれば、コストのことや{工場|こうじょう}のことを{考|かんが}えなければいけないので、{自分|じぶん}の{考|かんが}え{出|だ}した{創意|そうい}{工夫|くふう}を{必|かなら}ずしも{反映|はんえい}できるわけではない。いいモデルを{出|だ}したからといって、{営業|えいぎょう}の{力|ちから}が{弱|よわ}ければ{売|う}れるとは{限|かぎ}らない（{少|すく}なくとも、{多|おお}くの{開発|かいはつ}{技術者|ぎじゅつしゃ}はそう{思|おも}って{歯軋|はぎし}り（{注|ちゅう}1）をしているに{違|ちが}いない）。しかし、レース{車|しゃ}であれば、ある{程度|ていど}、{採算|さいさん}{無視|むし}で{色|いろ}んなことにトライできる。{何|なに}よりも、{営業力|えいぎょうりょく}とか{他|ほか}の{要素|ようそ}に{邪魔|じゃま}されることなく、①どんな{大|だい}メーカーを{相手|あいて}にも{対等|たいとう}に{優劣|ゆうれつ}を{争|あらそ}うことができるわけだ。

{逆|ぎゃく}にいうと、{言|い}い{訳|わけ}のない{世界|せかい}でもある。{敵|てき}よりコンマ1{秒|びょう}でも{遅|おく}れをとれば{負|ま}けるのだ。そして、それは、はっきりとその{場|ば}で{目|め}に{見|み}える。（{中略|ちゅうりゃく}）

{目標|もくひょう}{設定|せってい}も{単純|たんじゅん}だ。{市販|しはん}{車|しゃ}{開発|かいはつ}なら、{時|とき}にはアメリカと{欧州|おうしゅう}の{両|りょう}{市場|しじょう}で{売|う}れる{車|くるま}を{作|つく}ってくれと{営業|えいぎょう}から{要求|ようきゅう}されたりする。そこでは{技術的|ぎじゅつてき}に{妥協|だきょう}せざるを{得|え}ないが、レースは{絶対的|ぜったいてき}な{速|はや}さだけを{目指|めざ}せばいいのだ。その{代|か}わり、{自分|じぶん}の{実力|じつりょく}が{今|いま}どうであれ、{敵|てき}の{車|くるま}が75{秒|びょう}で（{注|ちゅう}2）サーキットを1{周|しゅう}していれば、それより{速|はや}いタイムで{走|はし}る{車|くるま}をつくらないと{意味|いみ}がないのだ。②{出来|でき}る、{出来|でき}ないを{論|ろん}じる{余地|よち}は{全|まった}く{無|な}い。また、お{分|わ}かりのように、{他|た}チームの{車|くるま}の{真似|まね}だけをしていれば、{決|けっ}して「{最速|さいそく}」にはならないのも{真実|しんじつ}なのだ。
（田中詔一『ホンダの{価値観|かちかん}―{原点|げんてん}から{守|まも}り{続|つづ}けるDNA』による）
（{注|ちゅう}1）{歯軋|はぎし}りをする：ここでは、{悔|くや}しく{思|おも}う
（{注|ちゅう}2）サーキット：レース{用|よう}のコース`,
      arti: `Bagi para insinyur, mengembangkan mobil balap tampaknya sangat menarik.

Wajar saja. Kalau mengembangkan mobil komersial, mereka harus memikirkan biaya dan pabrik, sehingga ide kreatif yang mereka pikirkan belum tentu bisa diterapkan. Meski meluncurkan model bagus, kalau kekuatan penjualannya lemah, belum tentu laku (setidaknya, banyak insinyur pengembang pasti menggertakkan gigi (catatan 1) memikirkan hal itu). Namun, untuk mobil balap, sampai batas tertentu mereka bisa mencoba berbagai hal tanpa memedulikan untung-rugi. Yang terpenting, tanpa terganggu kekuatan penjualan atau faktor lain, ① mereka bisa bersaing setara melawan produsen besar mana pun.

Sebaliknya, ini juga dunia tanpa alasan. Jika tertinggal dari lawan sekalipun hanya 0,1 detik, kalah. Dan itu terlihat jelas saat itu juga. (dihilangkan)

Penetapan target pun sederhana. Kalau mengembangkan mobil komersial, kadang bagian penjualan menuntut dibuatkan mobil yang laku di pasar Amerika sekaligus Eropa. Di situ mau tak mau harus berkompromi secara teknis, tetapi dalam balapan cukup mengejar kecepatan mutlak saja. Sebagai gantinya, bagaimanapun kemampuan diri saat ini, jika mobil lawan mengelilingi sirkuit (catatan 2) dalam 75 detik, tidak ada artinya jika tidak membuat mobil yang lebih cepat dari itu. ② Sama sekali tidak ada ruang untuk memperdebatkan bisa atau tidak bisa. Dan seperti yang Anda pahami, jika hanya meniru mobil tim lain, kita tidak akan pernah menjadi "tercepat" — itu juga kebenaran.
(Dari buku tentang nilai-nilai Honda)
(Catatan 1) 歯軋りをする: di sini, merasa kesal/menyesal
(Catatan 2) サーキット: lintasan balap`,
    },
    "9-3": {
      yomi: `わが{国|くに}の{文章|ぶんしょう}の{書|か}き{手|て}として、{空想|くうそう}・{想像|そうぞう}するという{言葉|ことば}をもっともよく{使|つか}ったのは、おそらく{柳田|やなぎた}{国男|くにお}であろう。{民衆|みんしゅう}に{伝|つた}えられる{生活|せいかつ}の{慣習|かんしゅう}、{用具|ようぐ}などに{残|のこ}る{手|て}がかりをたどって、なつかしい{古層|こそう}（{注|ちゅう}1）へとたどる{民俗学|みんぞくがく}の、わが{国|くに}での{開拓者|かいたくしゃ}として、{柳田|やなぎた}にはこの{言葉|ことば}がきわめてたいせつなものであった。

{柳田|やなぎた}は、{空想|くうそう}・{空想|くうそう}するという{言葉|ことば}と{想像|そうぞう}・{想像|そうぞう}するという{言葉|ことば}とを{区別|くべつ}しようとした。その{文章|ぶんしょう}の{執筆|しっぴつ}の{時期|じき}や、あつかう{対象|たいしょう}、また{語|かた}りかける{相手|あいて}のちがいにつれて、{柳田|やなぎた}の{行|おこな}ったこの{空想|くうそう}・{空想|くうそう}すること、{想像|そうぞう}・{想像|そうぞう}することの{区別|くべつ}には、いかにもはっきりしている{場合|ばあい}と、そうでない{場合|ばあい}がある。しかし{後|あと}の{場合|ばあい}も、{空想|くうそう}・{空想|くうそう}することをしだいに{正確|せいかく}にしてゆけば、{想像|そうぞう}・{想像|そうぞう}するにいたるという、{段階的|だんかいてき}なつながりにおいて―あい{継|つ}ぐ（{注|ちゅう}2）、{境界|きょうかい}がぼやけていることはあっても、その{上|うえ}と{下|した}では、ちがいははっきりしている、という{仕方|しかた}で{一貫|いっかん}されていた。

{具体的|ぐたいてき}な{根拠|こんきょ}のない、あるいはあってもあいまいなものにたって{行|おこ}なう{古層|こそう}への{心|こころ}の{動|うご}きを、{空想|くうそう}・{空想|くうそう}するとし、よりはっきりした{根拠|こんきょ}にたった、しっかりした{心|こころ}の{動|うご}きを、{想像|そうぞう}・{想像|そうぞう}するとして、{柳田|やなぎた}は{使|つか}いわけているのである。

そこで{時|とき}には、やや、とか、あるかに、とかいう{限定辞|げんていじ}をかぶせるばあいなのではあるが、{空想|くうそう}・{空想|くうそう}するには、{人間|にんげん}の{心|こころ}の{動|うご}きとして、マイナス・{消極的|しょうきょくてき}{評価|ひょうか}のしるしがついており、{想像|そうぞう}・{想像|そうぞう}するには、プラス・{積極的|せっきょくてき}{評価|ひょうか}のしるしがついている。
（{大江|おおえ}{健三郎|けんざぶろう}『{新|あたら}しい{文学|ぶんがく}のために』による）
（{注|ちゅう}1）{古層|こそう}：ここでは、{古|ふる}い{時代|じだい}
（{注|ちゅう}2）あい{継|つ}ぐ：{互|たが}いに{続|つづ}いている`,
      arti: `Di antara para penulis di negeri kita, yang paling sering memakai kata "berkhayal" dan "membayangkan" mungkin adalah Yanagita Kunio. Sebagai perintis folklor di negeri kita — ilmu yang menelusuri lapisan masa lalu yang dirindukan (catatan 1) dengan mengikuti petunjuk yang tersisa pada kebiasaan hidup dan peralatan yang diwariskan rakyat — kata-kata ini sangat penting bagi Yanagita.

Yanagita berusaha membedakan kata "khayalan/berkhayal" dan kata "imajinasi/membayangkan". Tergantung waktu penulisan, objek yang dibahas, dan siapa yang diajak bicara, pembedaan yang dilakukan Yanagita antara berkhayal dan membayangkan ini ada yang sangat jelas dan ada yang tidak. Namun, dalam kasus yang kedua pun, pembedaan itu konsisten dalam hubungan bertahap: jika berkhayal dibuat semakin tepat, ia akan sampai pada membayangkan — saling bersambung (catatan 2), dan meski batasnya kadang kabur, di atas dan di bawahnya perbedaannya jelas.

Yanagita membedakan penggunaannya: gerak hati menuju masa lalu yang dilakukan tanpa dasar konkret, atau dengan dasar yang samar, disebut "berkhayal", sedangkan gerak hati yang mantap berdasarkan dasar yang lebih jelas disebut "membayangkan".

Karena itu, meski kadang ia menambahkan kata pembatas seperti "agak" atau "sepertinya", "berkhayal" sebagai gerak hati manusia diberi tanda penilaian minus/negatif, sedangkan "membayangkan" diberi tanda penilaian plus/positif.
(Dari buku "Atarashii Bungaku no Tame ni" karya Ōe Kenzaburō)
(Catatan 1) 古層: di sini, zaman dahulu
(Catatan 2) あい継ぐ: saling bersambung`,
    },

    // ── 問題10：理系の文章術 ──
    "10": {
      yomi: `{理系|りけい}の{文章|ぶんしょう}は{明確|めいかく}な{目的|もくてき}を{持|も}っている{場合|ばあい}が{多|おお}いので、その{目的|もくてき}に{応|おう}じて{読者|どくしゃ}は{文章|ぶんしょう}を{読|よ}む。このため、{目的|もくてき}に{合致|がっち}した{文章|ぶんしょう}は{満足感|まんぞくかん}を{読者|どくしゃ}に{与|あた}える。たとえば、「{某|ぼう}{製品|せいひん}の{適応|てきおう}{障害|しょうがい}に{関|かん}する{調査|ちょうさ}{報告書|ほうこくしょ}」はそれを{知|し}りたい{人|ひと}が{読|よ}み、その{内容|ないよう}が{過不足|かふそく}なく{記述|きじゅつ}されていれば100{点|てん}の{評価|ひょうか}となる。{調査|ちょうさ}{内容|ないよう}が{不十分|ふじゅうぶん}であれば{評価|ひょうか}は{下|さ}がり、{読者|どくしゃ}は{少|すく}なくなる。

しかし、①{筆者|ひっしゃ}と{読者|どくしゃ}のあいだで、その{文章|ぶんしょう}に{記述|きじゅつ}されていること{以上|いじょう}の{事柄|ことがら}が{発見|はっけん}できれば、{読者|どくしゃ}にとって{最高|さいこう}の{満足感|まんぞくかん}となる。{言|い}い{換|か}えれば、{読者|どくしゃ}が{新|あたら}しい{知識|ちしき}を{発見|はっけん}する{喜|よろこ}びを{支援|しえん}する、あるいはそのきっかけとなる{文章|ぶんしょう}こそが、100{点|てん}{以上|いじょう}の{評価|ひょうか}となる。それは{筆者|ひっしゃ}と{読者|どくしゃ}のシナジー{効果|こうか}（{二|ふた}つのものから、それらの{合計|ごうけい}{以上|いじょう}のものが{生|う}み{出|だ}される{効果|こうか}）であり、それをもたらすには、{筆者|ひっしゃ}は{常|つね}に{読者|どくしゃ}を{意識|いしき}し、{読者|どくしゃ}とともに{問題|もんだい}の{解決|かいけつ}にあたるという{姿勢|しせい}を{持|も}つことで{文章|ぶんしょう}に{磨|みが}きがかかる。

いくら{仕事|しごと}や{理系|りけい}の{文章|ぶんしょう}だからといって「AはBで、あとは{考|かんが}えておけ」という{姿勢|しせい}の{文章|ぶんしょう}では{読者|どくしゃ}の{満足感|まんぞくかん}は{少|すく}ない。むしろ、{読者|どくしゃ}は{自分|じぶん}の{無知|むち}を{知|し}り、{自己|じこ}{嫌悪|けんお}に{陥|おちい}り、{一方|いっぽう}、{著者|ちょしゃ}への{親近感|しんきんかん}はなくなり、{読者|どくしゃ}は{遠|とお}ざかる。{文章|ぶんしょう}の{目的|もくてき}を{達成|たっせい}するために{大事|だいじ}なことは、{読者|どくしゃ}が{最後|さいご}まで{読|よ}んでくれることである。いくら{素晴|すば}らしい{内容|ないよう}が{書|か}かれていても、{読者|どくしゃ}が{読|よ}まない{文章|ぶんしょう}では{目的|もくてき}を{果|は}たすことができない。

{学生|がくせい}のレポートで、②それが{一番|いちばん}よくわかる。あるいは{色々|いろいろ}な{情報|じょうほう}や{数値|すうち}が{多|おお}いので、すべてを{完全|かんぜん}に{理解|りかい}しようとして{読|よ}むことは{不可能|ふかのう}である。{結局|けっきょく}、{最初|さいしょ}の{数行|すうぎょう}を{読|よ}んで、あるいは{全体|ぜんたい}を{見渡|みわた}して、{読|よ}む{気|き}が{起|お}こるかどうかが{評価|ひょうか}に{大|おお}いに{影響|えいきょう}する。

これは、{上司|じょうし}に{提出|ていしゅつ}する{企画書|きかくしょ}や、コンペ（{注|ちゅう}1）に{応募|おうぼ}する{提案書|ていあんしょ}などでもまったく{同|おな}じである。

この{意味|いみ}で、{人|ひと}の{読|よ}む{気|き}を{誘|さそ}う{文章|ぶんしょう}であるかどうかが{重要|じゅうよう}である。では、{読|よ}む{気|き}とは{何|なに}か。それはシナジー{効果|こうか}である。

（{中略|ちゅうりゃく}）{筆者|ひっしゃ}が{読者|どくしゃ}{自身|じしん}で{新|あたら}しいことを{発見|はっけん}することの{支援|しえん}はなかなか{難|むずか}しい。むしろ、{自分|じぶん}の{思考|しこう}{過程|かてい}を{深|ふか}く{分析|ぶんせき}し、{読者|どくしゃ}と{一緒|いっしょ}に{考|かんが}えようという{姿勢|しせい}を{持|も}つことが{最|もっと}も{重要|じゅうよう}である。{読者|どくしゃ}に{与|あた}えるのは{完全|かんぜん}な{解答|かいとう}でなく、{解答|かいとう}に{向|む}かうたたき{台|だい}の{姿勢|しせい}を{示|しめ}すことが{最|もっと}も{良|よ}いのだということである。{言|い}い{換|か}えれば、{飾|かざ}らず、{技巧|ぎこう}を{弄|ろう}せず（{注|ちゅう}2）、ありのままの{姿|すがた}を{読者|どくしゃ}に{示|しめ}すことで、{真実|しんじつ}に{迫|せま}ろうという{書|か}き{手|て}の{気持|きも}ちが{読者|どくしゃ}に{通|つう}じるのである。{理系|りけい}の{文章|ぶんしょう}や{理系|りけい}でない{文章|ぶんしょう}にかかわらず、{一般|いっぱん}にはこういう{行間|ぎょうかん}の{意味|いみ}は{不要|ふよう}と{考|かんが}えられているが、それは{味|あじ}わいのない{無味|むみ}{乾燥|かんそう}（{注|ちゅう}3）な{教科書|きょうかしょ}の{書|か}き{方|かた}だ。{人|ひと}の{頭|あたま}に{届|とど}いても、{心|こころ}に{届|とど}かないものは{読|よ}む{気|き}が{起|お}こらなくなり、{結局|けっきょく}、{読者|どくしゃ}の{理解|りかい}にも{届|とど}かなくなる。
（{三木|みき}{光範|みつのり}『{理系|りけい}{発想|はっそう}の{文章術|ぶんしょうじゅつ}』による）
（{注|ちゅう}1）コンペ：ここでは、{仕事|しごと}の{依頼|いらい}{先|さき}を{選|えら}ぶために{企画|きかく}を{競争|きょうそう}させるもの
（{注|ちゅう}2）{技巧|ぎこう}を{弄|ろう}する：ここでは、{必要|ひつよう}でないのにむやみに{使|つか}う
（{注|ちゅう}3）{無味|むみ}{乾燥|かんそう}：{味|あじ}わいがまったくない`,
      arti: `Tulisan bidang sains sering memiliki tujuan yang jelas, sehingga pembaca membacanya sesuai tujuan itu. Karena itu, tulisan yang sesuai tujuan memberi rasa puas kepada pembaca. Misalnya, "laporan survei tentang gangguan kesesuaian produk tertentu" dibaca oleh orang yang ingin mengetahuinya, dan jika isinya ditulis pas tanpa kurang dan lebih, nilainya 100. Jika isi surveinya kurang, nilainya turun dan pembacanya berkurang.

Namun, ① jika antara penulis dan pembaca bisa ditemukan hal-hal yang melampaui apa yang tertulis dalam tulisan itu, itulah kepuasan tertinggi bagi pembaca. Dengan kata lain, tulisan yang mendukung kegembiraan pembaca menemukan pengetahuan baru, atau menjadi pemicunya, itulah yang bernilai lebih dari 100. Itu adalah efek sinergi antara penulis dan pembaca (efek di mana dari dua hal dihasilkan sesuatu yang lebih besar dari jumlah keduanya), dan untuk menghadirkannya, tulisan menjadi terasah jika penulis selalu menyadari pembaca dan memiliki sikap untuk bersama pembaca menyelesaikan masalah.

Meski itu tulisan pekerjaan atau bidang sains, tulisan dengan sikap "A adalah B, sisanya pikirkan sendiri" memberi kepuasan yang kecil kepada pembaca. Malah, pembaca menyadari ketidaktahuannya, jatuh dalam rasa benci pada diri sendiri, sementara rasa dekat dengan penulis hilang, dan pembaca pun menjauh. Yang penting untuk mencapai tujuan tulisan adalah pembaca mau membacanya sampai akhir. Sebagus apa pun isinya, tulisan yang tidak dibaca pembaca tidak bisa mencapai tujuannya.

Dalam laporan mahasiswa, ② hal itu paling jelas terlihat. Karena banyak informasi dan angka, mustahil membacanya dengan berusaha memahami semuanya secara sempurna. Akhirnya, apakah setelah membaca beberapa baris pertama, atau melihat keseluruhannya, timbul minat membaca atau tidak, sangat memengaruhi penilaian.

Ini sama persis untuk proposal yang diserahkan kepada atasan atau proposal yang diikutkan dalam kompetisi (catatan 1).

Dalam arti ini, penting apakah tulisan itu membangkitkan minat orang untuk membaca. Lalu, apa itu minat membaca? Itu adalah efek sinergi.

(dihilangkan) Membantu pembaca menemukan hal baru sendiri cukup sulit. Justru yang paling penting adalah menganalisis proses berpikir sendiri secara mendalam dan memiliki sikap untuk berpikir bersama pembaca. Yang paling baik diberikan kepada pembaca bukanlah jawaban sempurna, melainkan menunjukkan sikap berupa rancangan awal menuju jawaban. Dengan kata lain, dengan menunjukkan diri apa adanya kepada pembaca tanpa berhias dan tanpa memainkan teknik secara berlebihan (catatan 2), perasaan penulis yang berusaha mendekati kebenaran akan sampai kepada pembaca. Baik tulisan sains maupun bukan, umumnya makna tersirat seperti ini dianggap tidak perlu, tetapi itu adalah cara menulis buku pelajaran yang hambar dan kering (catatan 3). Tulisan yang sampai ke kepala orang tetapi tidak sampai ke hatinya tidak akan membangkitkan minat baca, dan pada akhirnya tidak akan sampai pula ke pemahaman pembaca.
(Dari buku karya Miki Mitsunori)
(Catatan 1) コンペ: di sini, persaingan rencana untuk memilih pihak yang akan diberi pekerjaan
(Catatan 2) 技巧を弄する: di sini, memakai teknik secara berlebihan padahal tidak perlu
(Catatan 3) 無味乾燥: sama sekali tidak ada rasanya, hambar`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
{生態系|せいたいけい}{保全|ほぜん}（{注|ちゅう}1）とは、そこに{生息|せいそく}する（{注|ちゅう}2）{生物|せいぶつ}のことを{考慮|こうりょ}するが、{生態系|せいたいけい}を{構成|こうせい}するすべての{生物|せいぶつ}を{等|ひと}しく{扱|あつか}うことができない。なぜなら、{一部|いちぶ}の{生物|せいぶつ}を{守|まも}ろうとすると、{必|かなら}ず{不利益|ふりえき}を{被|こうむ}る{生物|せいぶつ}が{生|しょう}じるからである。すなわち、われわれ{人間|にんげん}が{保全|ほぜん}することによって{利益|りえき}を{得|え}る{生物|せいぶつ}と{不利益|ふりえき}を{受|う}ける{生物|せいぶつ}とが{生|しょう}じることになる。そうなると、{生態系|せいたいけい}を{保全|ほぜん}する{目的|もくてき}で、{何|なん}らかの{活動|かつどう}をするということは、{一部|いちぶ}の{生物|せいぶつ}{種|しゅ}に{利益|りえき}を{与|あた}えるということになる。

（{中略|ちゅうりゃく}）{唯一|ゆいいつ}われわれが{言|い}えることは、われわれ{人類|じんるい}にとって、ということなので、{言|い}い{換|か}えれば、{人類|じんるい}に{利益|りえき}を{与|あた}えてくれる{生物|せいぶつ}を{守|まも}るべきなのである。
（{花里|はなざと}{孝幸|たかゆき}『{自然|しぜん}はそんなにヤワじゃない―{誤解|ごかい}だらけの{生態系|せいたいけい}』による）
（{注|ちゅう}1）{保全|ほぜん}：ここでは、{守|まも}ること
（{注|ちゅう}2）{生息|せいそく}する：{生|い}きる

【{意見|いけん} B】
{保全|ほぜん}{生物学|せいぶつがく}（{注|ちゅう}3）の{核|かく}となる{概念|がいねん}である{生物|せいぶつ}{多様性|たようせい}は{種|しゅ}の{存続|そんぞく}によって{維持|いじ}される。したがって、{保全|ほぜん}{生物学|せいぶつがく}では、{希少種|きしょうしゅ}や{減少|げんしょう}{過程|かてい}にある{個体数|こたいすう}の{保全|ほぜん}に{関|かん}する{知識|ちしき}と{方法|ほうほう}が{一|ひと}つの{重要|じゅうよう}な{課題|かだい}である。（{中略|ちゅうりゃく}）

しかし、{個別|こべつ}の{種|しゅ}をそれぞれ{保護|ほご}することは{非常|ひじょう}に{困難|こんなん}である。{一|ひと}つの{生態系|せいたいけい}をとっても、{微生物|びせいぶつ}から{植物|しょくぶつ}、{昆虫|こんちゅう}、{哺乳|ほにゅう}{動物|どうぶつ}など{多|おお}くの{種|しゅ}が{共存|きょうぞん}しているが、それらのすべての{種|しゅ}を{把握|はあく}して{保護|ほご}することは{不可能|ふかのう}に{近|ちか}い。さらに、{未|み}{分類|ぶんるい}の{種|しゅ}や{種|しゅ}レベル{以下|いか}の{遺伝的|いでんてき}{多様性|たようせい}は、{個別|こべつ}の{種|しゅ}を{保護|ほご}する{方法|ほうほう}では{逆|ぎゃく}に{保護|ほご}されなくなってしまう{恐|おそ}れがある。そこで、{多様|たよう}な{生物|せいぶつ}の{相互|そうご}{関係|かんけい}を{含|ふく}む{自然|しぜん}をそのまま{保全|ほぜん}することが{重要|じゅうよう}になってくる。つまり、{生態系|せいたいけい}を{保全|ほぜん}することで、そこに{含|ふく}まれるすべての{生物|せいぶつ}を{保護|ほご}するという{考|かんが}え{方|かた}である。
（高柳敦『{琵琶湖|びわこ}{研究所|けんきゅうじょ}{所報|しょほう}』1996{年|ねん}{第|だい}15{号|ごう}による）
（{注|ちゅう}3）{保全|ほぜん}{生物学|せいぶつがく}：{生態学|せいたいがく}の{研究|けんきゅう}{分野|ぶんや}のひとつ`,
      arti: `【Pendapat A】
Pelestarian (catatan 1) ekosistem memang mempertimbangkan makhluk hidup yang hidup (catatan 2) di sana, tetapi tidak bisa memperlakukan semua makhluk penyusun ekosistem secara setara. Sebab, jika berusaha melindungi sebagian makhluk hidup, pasti ada makhluk lain yang dirugikan. Artinya, dengan pelestarian oleh kita manusia, akan muncul makhluk yang diuntungkan dan makhluk yang dirugikan. Kalau begitu, melakukan suatu kegiatan dengan tujuan melestarikan ekosistem berarti memberi keuntungan kepada sebagian spesies.

(dihilangkan) Satu-satunya yang bisa kita katakan adalah "bagi kita umat manusia". Dengan kata lain, makhluk hidup yang memberi keuntungan bagi manusialah yang seharusnya dilindungi.
(Dari buku karya Hanazato Takayuki tentang ekosistem yang penuh salah paham)
(Catatan 1) 保全: di sini, melindungi
(Catatan 2) 生息する: hidup

【Pendapat B】
Keanekaragaman hayati, konsep inti biologi konservasi (catatan 3), dipertahankan oleh kelangsungan spesies. Karena itu, dalam biologi konservasi, pengetahuan dan metode untuk melestarikan spesies langka dan populasi yang sedang menurun merupakan salah satu tugas penting. (dihilangkan)

Namun, melindungi setiap spesies satu per satu sangatlah sulit. Dalam satu ekosistem saja, banyak spesies hidup berdampingan, mulai dari mikroorganisme, tumbuhan, serangga, sampai mamalia, dan mengetahui serta melindungi semua spesies itu hampir mustahil. Lebih jauh, spesies yang belum terklasifikasi dan keragaman genetik di bawah tingkat spesies justru berisiko tidak terlindungi dengan cara melindungi spesies satu per satu. Karena itu, menjadi penting untuk melestarikan alam apa adanya, termasuk hubungan timbal balik antar beragam makhluk hidup. Dengan kata lain, cara berpikirnya adalah melindungi semua makhluk hidup di dalamnya dengan melestarikan ekosistemnya.
(Dari buletin Lembaga Penelitian Danau Biwa, No. 15, 1996)
(Catatan 3) 保全生物学: salah satu bidang penelitian ekologi`,
    },

    // ── 問題12：家庭内の序列 ──
    "12": {
      yomi: `うちの{犬|いぬ}は{頭|あたま}がよくないけれどむやみに{吠|ほ}えない。これは{犬種|けんしゅ}の{性格|せいかく}である。もうひとつ、{絶対|ぜったい}に{噛|か}つかない。これは{訓練士|くんれんし}に{仕込|しこ}まれた{成果|せいか}である。{大|おお}きな{犬|いぬ}なので{幼児|ようじ}に{噛|か}ついたら{事件|じけん}になってしまう。

{訓練士|くんれんし}は{二十代|にじゅうだい}の{女性|じょせい}でスクーターに{乗|の}ってやってきた。{訓練|くんれん}{時間|じかん}は{週|しゅう}に4{回|かい}、{各|かく}30{分|ぷん}である。{半年|はんとし}{近|ちか}く{経|た}っても{訓練|くんれん}が{終|お}わらないので、いつになったら{卒業|そつぎょう}できるんですか、と{訊|たず}ねた。{家庭|かてい}{内|ない}での{序列|じょれつ}がはっきりしたら、と{説明|せつめい}する。{序列|じょれつ}ねえ、どういうことかな、とさらに{質問|しつもん}すると、①お{宅|たく}の{坊|ぼっ}ちゃんがまだ……。

{十年|じゅうねん}{前|まえ}なので{息子|むすこ}は{小学生|しょうがくせい}である。{体格的|たいかくてき}にも{犬|いぬ}と{息子|むすこ}に{差|さ}がない。うちの{犬|いぬ}はまず{僕|ぼく}、つぎに{妻|つま}と{気|き}の{強|つよ}い{娘|むすめ}に{降参|こうさん}（{注|ちゅう}1）したのだ。だが{息子|むすこ}は{軟体|なんたい}{動物|どうぶつ}のようにふにゃらふにゃらとしている。{寝|ね}てばかりいる。{起|お}きてもあくびばかりしている。{両者|りょうしゃ}は{最下位|さいかい}{争|あらそ}いを{演|えん}じたまま{四|よ}つに{組|く}んで（{注|ちゅう}2）{決着|けっちゃく}がつかないらしい。

{動物|どうぶつ}は{序列|じょれつ}に{敏感|びんかん}なのだ。（{中略|ちゅうりゃく}）

{女性|じょせい}の{訓練士|くんれんし}が{説明|せつめい}した。{犬|いぬ}をかわいがっているつもりで{甘|あま}やかし、②{腕|うで}をがぶりと{噛|か}みつかれた{飼|か}い{主|ぬし}がいた。{甘|あま}やかせばつけ{上|あ}がるだけ、{自分|じぶん}が{主人|しゅじん}と{信|しん}じ{込|こ}んで{飼|か}い{主|ぬし}をなめた{結果|けっか}である。{動物|どうぶつ}はつねに{威嚇|いかく}しながら{序列|じょれつ}を{確認|かくにん}しているから、{仲間|なかま}{同士|どうし}は{本気|ほんき}で{喧嘩|けんか}をしない。{相手|あいて}が{強|つよ}い、とわかれば{争|あらそ}わない。{喧嘩|けんか}したら{互|たが}いに{傷|きず}つき、{厳|きび}しい{自然界|しぜんかい}では{生|い}き{残|のこ}れないから。

さすがに{血|ち}のめぐりの{悪|わる}いわが{家|や}の{犬|いぬ}も、ある{日|ひ}、{息子|むすこ}にゴツンと{頭|あたま}を{叩|たた}かれ、{最下位|さいかい}が{確定|かくてい}、{平和的|へいわてき}に{棲|す}み{分|わ}けが{決|き}まり、{予算|よさん}オーバーの{訓練|くんれん}は{終了|しゅうりょう}した。

{動物|どうぶつ}から{教訓|きょうくん}を{得|え}たわけではないが、{家庭|かてい}{内|ない}でもタテマエとしての{序列|じょれつ}がないと{混乱|こんらん}がはじまる。{親父|おやじ}の{権威|けんい}の{喪失|そうしつ}が{取|と}り{返|かえ}しのつかないところまできたのは{家父長制|かふちょうせい}（{注|ちゅう}3）を{否定|ひてい}しすぎた{結果|けっか}でもある。{戦前|せんぜん}は{長子|ちょうし}{相続|そうぞく}で、{次男|じなん}{以下|いか}は{相続権|そうぞくけん}がなく{女性|じょせい}にいたってはその{他|た}{大勢|おおぜい}の{扱|あつか}い、ひどいものだった。そういう{状態|じょうたい}を{復活|ふっかつ}せよ、と{述|の}べているのではない。

{職場|しょくば}で{女性|じょせい}がもっと{管理職|かんりしょく}に{進出|しんしゅつ}できる{環境|かんきょう}は{整|ととの}えたほうがよいし、{僕|ぼく}の{経験|けいけん}からして{共働|ともばたら}きには{賛成|さんせい}である。{家事|かじ}も{分担|ぶんたん}したほうがよい。だが③{男女|だんじょ}{平等|びょうどう}をはきちがえてはいけない。{家庭|かてい}は{動物|どうぶつ}の{巣|す}に{似|に}た{面|めん}がある。{権威|けんい}としての{父性|ふせい}、{包容力|ほうようりょく}（{注|ちゅう}4）の{母性|ぼせい}まで{削|けず}り{取|と}ってはいけない。{父親|ちちおや}は{筋肉質|きんにくしつ}で{髭|ひげ}をはやし、{母親|ははおや}には{柔|やわ}らかな{肌|はだ}とやさしい{笑顔|えがお}があるように、それらしく{演|えん}じ{分|わ}けたほうがよい。{頻発|ひんぱつ}する{家庭|かてい}{内|ない}{暴力|ぼうりょく}が{役割|やくわり}{構造|こうぞう}の{喪失|そうしつ}と{無縁|むえん}ではないからである。
（{猪瀬|いのせ}{直樹|なおき}「{家|いえ}」1999{年|ねん}9{月|がつ}26{日|にち}{付|づけ}{朝日|あさひ}{新聞|しんぶん}{朝刊|ちょうかん}による）
（{注|ちゅう}1）{降参|こうさん}する：{負|ま}ける
（{注|ちゅう}2）{四|よ}つに{組|く}む：しっかり{向|む}き{合|あ}って{闘|たたか}うこと
（{注|ちゅう}3）{家父長制|かふちょうせい}：{男性|だんせい}の{年長者|ねんちょうしゃ}が{家族|かぞく}を{支配|しはい}するという{制度|せいど}
（{注|ちゅう}4）{包容力|ほうようりょく}：{相手|あいて}を{寛大|かんだい}な{気持|きも}ちで{受|う}け{止|と}める{力|ちから}`,
      arti: `Anjing kami tidak pintar, tetapi tidak menggonggong sembarangan. Ini sifat rasnya. Satu lagi, ia sama sekali tidak menggigit. Ini hasil didikan pelatih. Karena anjingnya besar, kalau sampai menggigit balita, bisa jadi perkara.

Pelatihnya seorang perempuan berusia dua puluhan yang datang naik skuter. Waktu latihannya 4 kali seminggu, masing-masing 30 menit. Karena hampir setengah tahun berlalu dan latihannya belum selesai, saya bertanya kapan anjingnya bisa "lulus". Ia menjelaskan, "Kalau urutan dalam keluarga sudah jelas." "Urutan, ya? Maksudnya bagaimana?" tanya saya lagi, lalu ia menjawab, "① Anak laki-laki Bapak masih..."

Karena itu sepuluh tahun lalu, anak laki-laki saya masih SD. Secara fisik pun anjing dan anak saya tidak berbeda. Anjing kami pertama-tama menyerah (catatan 1) kepada saya, lalu kepada istri dan anak perempuan saya yang berwatak keras. Tetapi anak laki-laki saya lembek seperti hewan bertubuh lunak. Ia tidur terus. Kalaupun bangun, ia menguap terus. Tampaknya keduanya bergulat (catatan 2) memperebutkan posisi terbawah dan belum ada keputusan.

Hewan peka terhadap urutan. (dihilangkan)

Pelatih perempuan itu menjelaskan. Ada pemilik yang mengira menyayangi anjingnya padahal memanjakannya, lalu ② lengannya digigit keras. Jika dimanjakan, anjing hanya akan besar kepala; itu akibat anjing yakin dirinya tuan dan meremehkan pemiliknya. Hewan selalu memastikan urutan sambil saling menggertak, sehingga sesama kawanan tidak berkelahi sungguhan. Jika tahu lawannya kuat, mereka tidak bertarung. Sebab jika berkelahi, keduanya terluka dan tidak bisa bertahan di alam yang keras.

Akhirnya, anjing kami yang lamban berpikir itu pun suatu hari dipukul kepalanya oleh anak saya, posisi terbawahnya pasti, pembagian wilayah ditentukan secara damai, dan latihan yang melebihi anggaran itu pun selesai.

Bukan berarti saya mendapat pelajaran dari hewan, tetapi dalam keluarga pun, tanpa urutan sebagai formalitas, kekacauan akan dimulai. Hilangnya wibawa ayah sampai tak bisa dipulihkan juga merupakan akibat terlalu menolak sistem patriarki (catatan 3). Sebelum perang berlaku pewarisan oleh anak sulung; anak kedua dan seterusnya tidak punya hak waris, dan perempuan diperlakukan sebagai "orang lain kebanyakan" — sungguh buruk. Saya tidak mengatakan agar keadaan seperti itu dihidupkan kembali.

Lingkungan agar perempuan lebih banyak menjadi manajer di tempat kerja sebaiknya disiapkan, dan dari pengalaman saya, saya setuju suami-istri sama-sama bekerja. Pekerjaan rumah pun sebaiknya dibagi. Tetapi ③ jangan salah memahami kesetaraan gender. Keluarga punya sisi yang mirip sarang hewan. Sifat keayahan sebagai wibawa dan sifat keibuan berupa daya merangkul (catatan 4) jangan sampai ikut terkikis. Seperti ayah yang berotot dan berkumis, dan ibu yang berkulit lembut dan bersenyum ramah, sebaiknya masing-masing memerankan perannya dengan pantas. Sebab kekerasan dalam rumah tangga yang sering terjadi tidak lepas dari hilangnya struktur peran.
(Dari artikel Inose Naoki, "Ie (Rumah)", harian Asahi pagi, 26 September 1999)
(Catatan 1) 降参する: kalah, menyerah
(Catatan 2) 四つに組む: berhadapan dan bertarung dengan sungguh-sungguh
(Catatan 3) 家父長制: sistem di mana pria tertua menguasai keluarga
(Catatan 4) 包容力: kemampuan menerima orang lain dengan lapang hati`,
    },

    // ── 問題13：東京都カルチャー会館 英語講座案内 ──
    "13": {
      yomi: `{東京都|とうきょうと}カルチャー{会館|かいかん}　4{月|がつ}{開講|かいこう}の{講座|こうざ}

①やさしい{英語|えいご}　4{月|がつ}8{日|か}{開講|かいこう}
{簡単|かんたん}な{単語|たんご}で{伝|つた}えられるようになるための「{聞|き}く・{話|はな}す」を{中心|ちゅうしん}とした{講座|こうざ}。{中学校|ちゅうがっこう}レベルの{英語|えいご}で{充分|じゅうぶん}。{講師|こうし}はボランティアの{日本人|にほんじん}{通訳者|つうやくしゃ}。{事前|じぜん}に{見学|けんがく}をすることができます。
・{毎週|まいしゅう}{木曜日|もくようび} 18:30-20:00　12{回|かい}　16000{円|えん}（{教材費|きょうざいひ}{別|べつ}）
・{講師|こうし}　{青木|あおき}{一郎|いちろう}（{東京|とうきょう}{友|とも}だちつくり{会|かい}{代表|だいひょう}）

②{外国人|がいこくじん}としっかり{学|まな}ぶ{英語|えいご}　4{月|がつ}10{日|か}{開講|かいこう}
{日本人|にほんじん}{講師|こうし}では{物足|ものた}りない。でも、いきなり{英語|えいご}だけの{会話|かいわ}についていく{自信|じしん}はない。
そんな{人|ひと}にぴったりの{日本語|にほんご}が{話|はな}せる{外国人|がいこくじん}{講師|こうし}によるコース。{毎回|まいかい}{講師|こうし}と{新聞|しんぶん}{記事|きじ}を{読|よ}みながら{英語力|えいごりょく}を{身|み}に{付|つ}ける。{事前|じぜん}に{見学|けんがく}をすることができます。
・{毎週|まいしゅう}{木曜日|もくようび} 18:30-20:00　15{回|かい}　18000{円|えん}（{教材費|きょうざいひ}{別|べつ}）
・{講師|こうし}　フレンド{外国語|がいこくご}{学校|がっこう}{講師|こうし}

③{初|はじ}めての{英語|えいご}　4{月|がつ}12{日|にち}{開講|かいこう}
{決|き}まり{文句|もんく}をまずレクチャー。あいさつや{買|か}い{物|もの}などで{使|つか}う{表現|ひょうげん}を{紹介|しょうかい}。{聞|き}くことから{入|はい}り、{日常|にちじょう}{会話|かいわ}を{勉強|べんきょう}しながらやさしい{文法|ぶんぽう}も{学|まな}ぶので{身|み}につきやすい。{英語|えいご}での{実務|じつむ}{経験|けいけん}の{長|なが}い{日本人|にほんじん}{講師|こうし}が{丁寧|ていねい}に{教|おし}える。{事前|じぜん}に{見学|けんがく}をすることができる。
・{毎週|まいしゅう}{土曜日|どようび} 12:00-13:30　10{回|かい}　14000{円|えん}（{教材費|きょうざいひ}{別|べつ}）
・{講師|こうし}　{石川|いしかわ}{健二|けんじ}

④ステップアップ{英語|えいご}　4{月|がつ}13{日|にち}{開講|かいこう}
{相手|あいて}に{細|こま}かなニュアンスまで{伝|つた}えられる{英語力|えいごりょく}を{身|み}に{付|つ}けたいと{思|おも}っている{方|かた}におすすめ。{中級|ちゅうきゅう}{以上|いじょう}の{文法|ぶんぽう}を{習得|しゅうとく}した{方|かた}{向|む}け。イギリス{人|じん}{講師|こうし}とともに{複雑|ふくざつ}なテーマで{会話|かいわ}をします。{雑誌|ざっし}や{新聞|しんぶん}などの{読解|どっかい}もあります。{必|かなら}ず{事前|じぜん}に{見学|けんがく}して、ご{自分|じぶん}のレベルに{合|あ}っているかどうかを{確認|かくにん}してからお{申|もう}し{込|こ}みください。
・{毎週|まいしゅう}{日曜日|にちようび} 10:00-12:00　12{回|かい}　20000{円|えん}（{教材費|きょうざいひ}{別|べつ}）
・{講師|こうし}　キャサリン・スミス

★{受講|じゅこう}の{申込|もうしこ}み
{受講|じゅこう}の{予約|よやく}、{申|もう}し{込|こ}みはお{電話|でんわ}で。お{電話|でんわ}での{申|もう}し{込|こ}み{後|ご}、{受講|じゅこう}される{講座|こうざ}の{案内|あんない}と{振|ふ}り{込|こ}み{用紙|ようし}をお{送|おく}りします。
{所定|しょてい}{日|び}までにお{近|ちか}くの{銀行|ぎんこう}から{受講料|じゅこうりょう}を{振|ふ}り{込|こ}んでください。{会館|かいかん}の{窓口|まどぐち}では、{申|もう}し{込|こ}みおよび{現金|げんきん}の{取|と}り{扱|あつか}いはいたしません。

{館内|かんない}には4{月|がつ}からの{講座|こうざ}の{総合|そうごう}パンフレットを{用意|ようい}しています。{気軽|きがる}にお{立|た}ち{寄|よ}りください。

{申|もう}し{込|こ}み/{問|と}い{合|あ}わせ{先|さき}：03-444-7890（{平日|へいじつ}9:00-17:00）`,
      arti: `Gedung Budaya Metropolitan Tokyo — Kursus yang dibuka bulan April

① Bahasa Inggris Mudah — dibuka 8 April
Kursus berpusat pada "mendengar & berbicara" agar bisa menyampaikan maksud dengan kosakata sederhana. Bahasa Inggris tingkat SMP sudah cukup. Pengajarnya penerjemah Jepang sukarelawan. Bisa mengikuti kunjungan (melihat kelas) terlebih dahulu.
・Setiap Kamis 18:30–20:00, 12 kali, 16.000 yen (belum termasuk biaya bahan)
・Pengajar: Aoki Ichirō (Ketua Perkumpulan Mencari Teman Tokyo)

② Belajar Bahasa Inggris Sungguh-sungguh dengan Orang Asing — dibuka 10 April
Kalau pengajar Jepang terasa kurang. Tetapi belum percaya diri langsung mengikuti percakapan yang serba bahasa Inggris.
Kursus oleh pengajar asing yang bisa berbahasa Jepang, cocok untuk orang seperti itu. Setiap pertemuan, kemampuan bahasa Inggris dilatih sambil membaca artikel koran bersama pengajar. Bisa mengikuti kunjungan terlebih dahulu.
・Setiap Kamis 18:30–20:00, 15 kali, 18.000 yen (belum termasuk biaya bahan)
・Pengajar: pengajar Sekolah Bahasa Asing Friend

③ Bahasa Inggris Pertama — dibuka 12 April
Pertama-tama diajarkan ungkapan baku. Diperkenalkan ungkapan yang dipakai saat menyapa, berbelanja, dan sebagainya. Dimulai dari mendengarkan, lalu sambil mempelajari percakapan sehari-hari juga belajar tata bahasa sederhana, sehingga mudah dikuasai. Pengajar Jepang yang lama berpengalaman bekerja dengan bahasa Inggris mengajar dengan teliti. Bisa mengikuti kunjungan terlebih dahulu.
・Setiap Sabtu 12:00–13:30, 10 kali, 14.000 yen (belum termasuk biaya bahan)
・Pengajar: Ishikawa Kenji

④ Bahasa Inggris Step-up — dibuka 13 April
Disarankan bagi yang ingin memiliki kemampuan bahasa Inggris untuk menyampaikan nuansa yang halus. Untuk yang sudah menguasai tata bahasa tingkat menengah ke atas. Bercakap-cakap dengan tema yang rumit bersama pengajar asal Inggris. Ada juga pemahaman bacaan majalah, koran, dan lainnya. Wajib mengikuti kunjungan terlebih dahulu dan memastikan level Anda cocok sebelum mendaftar.
・Setiap Minggu 10:00–12:00, 12 kali, 20.000 yen (belum termasuk biaya bahan)
・Pengajar: Catherine Smith

★ Pendaftaran kursus
Pemesanan dan pendaftaran kursus melalui telepon. Setelah mendaftar lewat telepon, kami akan mengirimkan panduan kursus yang diikuti dan formulir transfer.
Transferkan biaya kursus dari bank terdekat paling lambat tanggal yang ditentukan. Loket gedung tidak menerima pendaftaran maupun pembayaran tunai.

Di dalam gedung tersedia brosur lengkap kursus mulai April. Silakan mampir.

Pendaftaran/pertanyaan: 03-444-7890 (hari kerja 9:00–17:00)`,
    },
  },
};
