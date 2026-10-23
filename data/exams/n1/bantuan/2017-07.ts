import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2017
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1707: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "この{広大|こうだい}な{大地|だいち}を【{潤|うるお}す】にはまだまだ{不十分|ふじゅうぶん}だった。",
      arti: "Itu masih jauh dari cukup untuk 【mengairi/menyuburkan】 tanah yang luas ini.",
      optArti: ["mengolah (tanah)", "membasahi", "mengairi, menyuburkan (潤す)", "menyembuhkan"],
    },
    2: {
      yomi: "{使|つか}う{前|まえ}に{必|かなら}ず{熱湯|ねっとう}で【{殺菌|さっきん}】してください。",
      arti: "Sebelum dipakai, pastikan 【disterilkan】 dengan air panas.",
    },
    3: {
      yomi: "これが{私|わたし}に【{託|たく}された】{仕事|しごと}です。",
      arti: "Inilah pekerjaan yang 【dipercayakan】 kepada saya.",
      optArti: ["dibebankan", "diserahkan", "diturunkan, diberikan", "dipercayakan (託された)"],
    },
    4: {
      yomi: "このコンサートホールは、{舞台|ぶたい}に{向|む}かって{床|ゆか}が【{傾斜|けいしゃ}】している。",
      arti: "Di gedung konser ini, lantainya 【miring】 ke arah panggung.",
    },
    5: {
      yomi: "{毎回|まいかい}のように{反対派|はんたいは}の{人々|ひとびと}に【{阻|はば}まれて】きた。",
      arti: "Hampir setiap kali kami 【dihalangi】 oleh pihak yang menentang.",
      optArti: ["dihalangi (阻まれて)", "dipelototi", "diganggu, dicari gara-gara", "ditolak"],
    },
    6: {
      yomi: "{秘密|ひみつ}にしていたことを{友人|ゆうじん}に【{暴露|ばくろ}】された。",
      arti: "Hal yang saya rahasiakan 【dibongkar】 oleh teman.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "この{学校|がっこう}は{教育|きょういく}の（　）として、{職業|しょくぎょう}{体験|たいけん}{活動|かつどう}を{授業|じゅぎょう}に{取|と}り{入|い}れている。",
      arti: "Sekolah ini memasukkan kegiatan pengalaman kerja ke dalam pelajaran sebagai (…) pendidikan.",
      optYomi: ["{一環|いっかん}", "{一体|いったい}", "{内部|ないぶ}", "{部門|ぶもん}"],
      optArti: ["bagian dari (rangkaian)", "satu kesatuan", "bagian dalam", "divisi, bidang"],
    },
    8: {
      yomi: "この{商品|しょうひん}は、{特|とく}によく{売|う}れる{時期|じき}というものはなく、{毎月|まいつき}（　）100{個|こ}ほど{売|う}れる。",
      arti: "Produk ini tidak punya masa laris tertentu; setiap bulan terjual (…) sekitar 100 buah.",
      optArti: ["dengan jelas", "secara langsung", "secara sederhana", "secara konstan, stabil"],
    },
    9: {
      yomi: "{中学|ちゅうがく}でクラスメートだった{石井|いしい}さんと{話|はな}しているうちに、{昔|むかし}の{記憶|きおく}が（　）きた。",
      arti: "Sambil mengobrol dengan Ishii-san, teman sekelas SMP, ingatan lama (…).",
      optYomi: [null, null, "{引|ひ}き{返|かえ}して", "{立|た}ち{直|なお}って"],
      optArti: ["menelusuri kembali ke masa lalu", "hidup kembali, muncul kembali", "berbalik arah", "bangkit kembali"],
    },
    10: {
      yomi: "{林|はやし}{選手|せんしゅ}は、3{度目|どめ}のオリンピック{出場|しゅつじょう}で、ついに（　）の{金|きん}メダルを{獲得|かくとく}した。",
      arti: "Pada keikutsertaan ketiga di Olimpiade, Hayashi akhirnya meraih medali emas yang (…).",
      optYomi: ["{意欲|いよく}", "{志願|しがん}", "{欲求|よっきゅう}", "{念願|ねんがん}"],
      optArti: ["semangat", "permohonan sukarela", "hasrat, kebutuhan", "sudah lama didambakan"],
    },
    11: {
      yomi: "{鈴木|すずき}さんに{表彰状|ひょうしょうじょう}を{贈|おく}り、{永年|えいねん}の{功績|こうせき}を（　）。",
      arti: "Kami memberikan piagam penghargaan kepada Suzuki-san dan (…) jasanya selama bertahun-tahun.",
      optYomi: ["{敬|うやま}った", "{仰|あお}いだ", null, null],
      optArti: ["menghormati", "mendongak; meminta (petunjuk)", "memuji, menghargai", "menjamu"],
    },
    12: {
      yomi: "{今回|こんかい}のトラブルの{原因|げんいん}は{相手|あいて}{側|がわ}にあって、{池田|いけだ}さんには{決|けっ}して（　）はないよ。",
      arti: "Penyebab masalah kali ini ada di pihak lawan; Ikeda-san sama sekali tidak (…).",
      optYomi: ["{悪|あく}", "{非|ひ}", "{苦|く}", "{没|ぼつ}"],
      optArti: ["kejahatan", "kesalahan (非はない = tidak bersalah)", "penderitaan", "tenggelam, tidak dipakai"],
    },
    13: {
      yomi: "{以前|いぜん}はさまざまなジャンルの{小説|しょうせつ}を{読|よ}んでいたが、{最近|さいきん}は（　）{推理|すいり}{小説|しょうせつ}ばかりだ。",
      arti: "Dulu saya membaca novel dari berbagai genre, tetapi akhir-akhir ini (…) novel detektif.",
      optArti: ["makin", "berulang-ulang, terus-menerus", "hanya, melulu", "setidaknya"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "【{粘|ねば}り{強|づよ}く】{交渉|こうしょう}した。",
      arti: "Kami bernegosiasi 【dengan gigih】.",
      optYomi: ["{覚悟|かくご}して", "{油断|ゆだん}せずに", "{思|おも}い{切|き}って", null],
      optArti: ["dengan siap menerima risiko", "tanpa lengah", "dengan berani", "tanpa menyerah"],
    },
    15: {
      yomi: "【{入念|にゅうねん}に】{調査|ちょうさ}を{行|おこな}った。",
      arti: "Kami melakukan penyelidikan 【dengan cermat】.",
      optYomi: ["{厳|きび}しく{公平|こうへい}に", "{細|こま}かく{丁寧|ていねい}に", "{興味|きょうみ}を{持|も}って", "{責任|せきにん}を{持|も}って"],
      optArti: ["dengan tegas dan adil", "dengan rinci dan teliti", "dengan minat", "dengan tanggung jawab"],
    },
    16: {
      yomi: "{本人|ほんにん}も【うすうす】{気|き}づいていたと{思|おも}う。",
      arti: "Saya rasa orangnya sendiri juga 【samar-samar】 sudah menyadarinya.",
      optArti: ["mungkin", "seperti yang diduga; memang", "entah bagaimana, samar-samar", "sudah lama sekali"],
    },
    17: {
      yomi: "この{方法|ほうほう}にも【{難点|なんてん}】はある。",
      arti: "Cara ini pun ada 【kekurangannya】.",
      optYomi: ["{悪|わる}いところ", "{惜|お}しいところ", "{無駄|むだ}なところ", "{不安|ふあん}なところ"],
      optArti: ["sisi buruk", "sisi yang disayangkan", "sisi yang sia-sia", "sisi yang mengkhawatirkan"],
    },
    18: {
      yomi: "{橋本|はしもと}さんは【むっとした】ようだった。",
      arti: "Hashimoto-san tampaknya 【tersinggung/kesal】.",
      optYomi: ["{驚|おどろ}いたような{顔|かお}をしていた", "{怒|おこ}ったような{顔|かお}をしていた", "{疲|つか}れたような{顔|かお}をしていた", "{飽|あ}きたような{顔|かお}をしていた"],
      optArti: ["wajahnya tampak terkejut", "wajahnya tampak marah", "wajahnya tampak lelah", "wajahnya tampak bosan"],
    },
    19: {
      yomi: "すぐに【{照会|しょうかい}した】ほうがいいですよ。",
      arti: "Sebaiknya segera 【menanyakan/mengonfirmasi】.",
      optYomi: ["{問|と}い{合|あ}わせた", "{申|もう}し{込|こ}んだ", "{知|し}らせた", "{訪|たず}ねた"],
      optArti: ["menanyakan", "mendaftar", "memberi tahu", "mengunjungi"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{昇進|しょうしん}",
      arti: "昇進 = naik jabatan, promosi",
      optYomi: [
        "{私|わたし}の{大学|だいがく}は、2{年生|ねんせい}までに50{単位|たんい}とらないと、3{年生|ねんせい}に{昇進|しょうしん}できない。",
        "{中村|なかむら}さんは、{料理|りょうり}{教室|きょうしつ}に{通|かよ}うようになって、プロ{並|な}みの{腕前|うでまえ}に{昇進|しょうしん}した。",
        "{私|わたし}が{応援|おうえん}するチームは、{今日|きょう}の{試合|しあい}に{勝|か}って、2{位|い}に{昇進|しょうしん}した。",
        "{松本|まつもと}{課長|かちょう}が{来月|らいげつ}、{部長|ぶちょう}に{昇進|しょうしん}することになったそうだ。",
      ],
      optArti: [
        "Di universitas saya, kalau tidak mengambil 50 SKS sampai tingkat 2, tidak bisa 'naik jabatan' ke tingkat 3.",
        "Sejak ikut kelas memasak, keterampilan Nakamura-san 'naik jabatan' setara profesional.",
        "Tim yang saya dukung menang hari ini dan 'naik jabatan' ke peringkat 2.",
        "Kabarnya Kepala Seksi Matsumoto akan 'naik jabatan' menjadi kepala departemen bulan depan.",
      ],
    },
    21: {
      yomi: "{配布|はいふ}",
      arti: "配布 = membagikan (brosur, dsb.) kepada banyak orang",
      optYomi: [
        "{廊下|ろうか}の{角|かど}で{人|ひと}とぶつかって、{持|も}っていた{資料|しりょう}を{床|ゆか}に{配布|はいふ}してしまった。",
        "{隣|となり}のうちの{人|ひと}への{郵便物|ゆうびんぶつ}が{私|わたし}のうちに{間違|まちが}って{配布|はいふ}されていた。",
        "{駅|えき}の{案内所|あんないじょ}では、{観光|かんこう}{案内|あんない}{地図|ちず}を{無料|むりょう}で{配布|はいふ}している。",
        "この{一週間|いっしゅうかん}くらい、{雨|あめ}が{降|ふ}らず{乾燥|かんそう}しているので、{庭|にわ}の{木|き}に{水|みず}を{配布|はいふ}した。",
      ],
      optArti: [
        "Saya menabrak orang di sudut lorong dan 'membagikan' dokumen yang saya bawa ke lantai.",
        "Kiriman pos untuk tetangga salah 'dibagikan' ke rumah saya.",
        "Di pusat informasi stasiun, peta wisata 'dibagikan' gratis.",
        "Sekitar seminggu ini tidak hujan dan kering, jadi saya 'membagikan' air ke pohon di halaman.",
      ],
    },
    22: {
      yomi: "{滅|ほろ}びる",
      arti: "滅びる = musnah, punah, runtuh (bangsa, peradaban, spesies)",
      optYomi: [
        "{事業|じぎょう}の{失敗|しっぱい}が{続|つづ}き、このままでは{資金|しきん}が{滅|ほろ}びるおそれがある。",
        "{連日|れんじつ}の{異常|いじょう}な{暑|あつ}さが{原因|げんいん}なのか、{水槽|すいそう}の{魚|さかな}が{滅|ほろ}びてしまった。",
        "{今日|きょう}の{試合|しあい}に{負|ま}けて{優勝|ゆうしょう}の{望|のぞ}みは{滅|ほろ}びたが、{最後|さいご}までがんばろうと{思|おも}う。",
        "{昔|むかし}この{地域|ちいき}に{栄|さか}えていた{文明|ぶんめい}は{大|だい}{災害|さいがい}によって{滅|ほろ}びたという{説|せつ}がある。",
      ],
      optArti: [
        "Kegagalan usaha terus berlanjut, dan kalau begini modal bisa 'musnah'.",
        "Mungkin karena panas yang luar biasa berhari-hari, ikan di akuarium 'musnah'.",
        "Kalah hari ini, harapan juara 'musnah', tetapi saya ingin berjuang sampai akhir.",
        "Ada teori bahwa peradaban yang dulu makmur di daerah ini 'musnah' karena bencana besar.",
      ],
    },
    23: {
      yomi: "{発足|ほっそく}",
      arti: "発足 = berdiri, dibentuk, mulai beroperasi (organisasi)",
      optYomi: [
        "この{団体|だんたい}は、{留学生|りゅうがくせい}{支援|しえん}を{目的|もくてき}に、{昨年|さくねん}8{月|がつ}に{発足|ほっそく}した。",
        "まもなく{発足|ほっそく}するバスターミナルは、{国内|こくない}で{最大|さいだい}{規模|きぼ}のものだ。",
        "{来月|らいげつ}10{日|か}に{発足|ほっそく}する{国際|こくさい}{大会|たいかい}に{向|む}け、{選手団|せんしゅだん}が{日本|にほん}を{出発|しゅっぱつ}した。",
        "{一|いっ}か{月間|げつかん}の{研修|けんしゅう}によって、チームリーダーとしての{自覚|じかく}が{発足|ほっそく}した。",
      ],
      optArti: [
        "Organisasi ini 'dibentuk' Agustus tahun lalu dengan tujuan mendukung mahasiswa asing.",
        "Terminal bus yang sebentar lagi 'dibentuk' ini adalah yang terbesar di dalam negeri.",
        "Kontingen atlet berangkat dari Jepang menuju kejuaraan internasional yang 'dibentuk' tanggal 10 bulan depan.",
        "Berkat pelatihan sebulan, kesadaran sebagai ketua tim 'dibentuk'.",
      ],
    },
    24: {
      yomi: "{提起|ていき}",
      arti: "提起 = mengangkat, mengajukan (masalah/isu untuk dibahas)",
      optYomi: [
        "{製品|せいひん}の{安全性|あんぜんせい}に{問題|もんだい}があることがわかり、{消費者|しょうひしゃ}に{注意|ちゅうい}を{提起|ていき}している。",
        "{友人|ゆうじん}に{一緒|いっしょ}に{会社|かいしゃ}を{興|おこ}さないかと{提起|ていき}したが、{断|ことわ}られてしまった。",
        "{今日|きょう}の{議会|ぎかい}で、{介護|かいご}{制度|せいど}の{在|あ}り{方|かた}について{問題|もんだい}を{提起|ていき}した。",
        "{中野|なかの}{監督|かんとく}が{引退|いんたい}した{後|あと}の{監督|かんとく}をお{願|ねが}いできないかと、{山本氏|やまもとし}に{提起|ていき}している。",
      ],
      optArti: [
        "Diketahui ada masalah keamanan produk, dan kami 'mengangkat' peringatan kepada konsumen.",
        "Saya 'mengangkat' ajakan kepada teman untuk mendirikan perusahaan bersama, tetapi ditolak.",
        "Di sidang dewan hari ini, saya 'mengangkat' masalah tentang bentuk ideal sistem perawatan lansia.",
        "Kami 'mengangkat' permintaan kepada Yamamoto apakah ia bersedia menjadi pelatih setelah Pelatih Nakano pensiun.",
      ],
    },
    25: {
      yomi: "{見落|みお}とす",
      arti: "見落とす = terlewat melihat, luput dari perhatian",
      optYomi: [
        "たとえ{親友|しんゆう}であっても、{不正|ふせい}{行為|こうい}を{見落|みお}とすわけにはいかない。",
        "{練習|れんしゅう}しても{一向|いっこう}に{上達|じょうたつ}しないので、コーチから{見落|みお}とされてしまった。",
        "「300,000{円|えん}」と{書|か}いてあったのに、ゼロを{一|ひと}つ{見落|みお}として3{万|まん}{円|えん}だと{勘違|かんちが}いしていた。",
        "{人込|ひとご}みの{中|なか}を{歩|ある}いているうちに、{前|まえ}を{歩|ある}いていた{友人|ゆうじん}を{見落|みお}としてしまった。",
      ],
      optArti: [
        "Meski sahabat sekalipun, saya tidak bisa 'melewatkan' perbuatan curang.",
        "Meski berlatih sama sekali tidak ada kemajuan, sehingga saya 'dilewatkan' oleh pelatih.",
        "Padahal tertulis \"300.000 yen\", saya 'terlewat' satu nol dan salah mengira 30.000 yen.",
        "Saat berjalan di tengah keramaian, saya 'terlewat' teman yang berjalan di depan saya.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{今年|ことし}{歌手|かしゅ}{生活|せいかつ}40{周年|しゅうねん}を{迎|むか}えた{山川|やまかわ}みつ{子|こ}は、{引退|いんたい}のうわさを{否定|ひてい}して、「{応援|おうえん}してくれるファンが{一人|ひとり}でも（　）、{歌|うた}い{続|つづ}けます。」と{語|かた}った。",
      arti: "Yamakawa Mitsuko, yang tahun ini merayakan 40 tahun berkarier sebagai penyanyi, membantah rumor pensiun dan berkata, \"(…) masih ada satu orang pun penggemar yang mendukung, saya akan terus bernyanyi.\"",
      optYomi: ["いた{上|うえ}", "いる{限|かぎ}り", null, null],
      optArti: ["setelah ada", "selama ada", "meskipun ada", "pantas saja karena ada"],
    },
    27: {
      yomi: "{今度|こんど}のプロジェクトのリーダーは{石川|いしかわ}さんだと{予想|よそう}していたが、{違|ちが}うようだ。{石川|いしかわ}さんでない（　）、{誰|だれ}なのだろう。",
      arti: "Saya kira pemimpin proyek kali ini Ishikawa-san, tetapi sepertinya bukan. (…) bukan Ishikawa-san, lalu siapa?",
      optYomi: [null, null, null, "と{思|おも}っても"],
      optArti: ["kalau (memang)", "karena (keadaan)", "alih-alih, lebih tepatnya", "meskipun berpikir"],
    },
    28: {
      yomi: "A{社|しゃ}は、{製品|せいひん}の{成分|せいぶん}{表示|ひょうじ}に{誤|あやま}りがあったことについて{謝罪|しゃざい}したが、{品質|ひんしつ}には（　）{問題|もんだい}はないと{強調|きょうちょう}した。",
      arti: "Perusahaan A meminta maaf atas kesalahan label komposisi produk, tetapi menegaskan bahwa (…) masalah pada kualitasnya.",
      optArti: ["sekali-kali, sedikit pun (dalam keadaan apa pun)", "sama sekali tidak ada", "cukup, tidak mudah", "terlalu"],
    },
    29: {
      yomi: "{今年|ことし}35{歳|さい}になるサッカー{日本|にほん}{代表|だいひょう}の{森|もり}{選手|せんしゅ}について、{監督|かんとく}は、「{確|たし}かに{体力|たいりょく}が{落|お}ちてきた（　）が、{高|たか}い{技術力|ぎじゅつりょく}に{期待|きたい}している。」と{述|の}べた。",
      arti: "Mengenai Mori, pemain timnas sepak bola Jepang yang tahun ini berusia 35, pelatih berkata, \"Memang (…) staminanya menurun, tetapi saya berharap pada kemampuan tekniknya yang tinggi.\"",
      optYomi: [null, null, "ことは{否|いな}めない", "に{越|こ}したことはない"],
      optArti: ["seharusnya", "sesuai dengan", "tak bisa disangkal", "lebih baik kalau"],
    },
    30: {
      yomi: "{田中|たなか}{部長|ぶちょう}「ねえ、{山下|やました}くん、{今度|こんど}の{会議|かいぎ}でこの{企画|きかく}の{説明|せつめい}をするのは{鈴木|すずき}{課長|かちょう}だっけ？」{山下|やました}「はい、{課長|かちょう}がご{説明|せつめい}（　）。」",
      arti: "Kepala Tanaka: \"Hei, Yamashita, yang menjelaskan rencana ini di rapat nanti Kepala Seksi Suzuki, ya?\" Yamashita: \"Ya, Kepala Seksi yang akan (…) penjelasannya.\"",
      optYomi: ["{申|もう}します", null, "{願|ねが}います", null],
      optArti: ["(merendah, kata 'berkata')", "(menerima, merendah)", "memohon", "melakukan (hormat)"],
    },
    31: {
      yomi: "{脳|のう}{科学|かがく}の{研究|けんきゅう}が{進|すす}んだと{言|い}われる{現代|げんだい}（　）、{脳|のう}のメカニズムについては{解明|かいめい}できていない{部分|ぶぶん}が{多|おお}いという。",
      arti: "(…) zaman sekarang yang disebut-sebut penelitian ilmu otaknya sudah maju, katanya masih banyak bagian mekanisme otak yang belum terungkap.",
      optArti: ["bahkan di", "justru di", "bahkan terhadap", "justru terhadap"],
    },
    32: {
      yomi: "{全国|ぜんこく}{高校|こうこう}テニス{大会|たいかい}{決勝|けっしょう}で、{西山|にしやま}{選手|せんしゅ}は、{持|も}ち{前|まえ}の{精神力|せいしんりょく}の{強|つよ}さで{相手|あいて}の{厳|きび}しい{攻撃|こうげき}に（　）、{見事|みごと}{勝利|しょうり}を{収|おさ}めた。",
      arti: "Di final kejuaraan tenis SMA nasional, Nishiyama dengan kekuatan mentalnya (…) serangan lawan yang keras, lalu meraih kemenangan gemilang.",
      optYomi: ["{耐|た}えかねたほど", "{耐|た}えかねた{末|すえ}に", "{耐|た}えぬいたほど", "{耐|た}えぬいた{末|すえ}に"],
      optArti: ["sampai tak tahan", "setelah tak tahan", "sampai bertahan habis-habisan", "setelah bertahan habis-habisan"],
    },
    33: {
      yomi: "{昨日|きのう}の{新入生|しんにゅうせい}{歓迎会|かんげいかい}は{失敗|しっぱい}だった。{私|わたし}たち{上級生|じょうきゅうせい}がたくさん{質問|しつもん}をして、{新入生|しんにゅうせい}が{話|はな}しやすい（　）、{逆|ぎゃく}に{緊張|きんちょう}させてしまったようだ。",
      arti: "Acara penyambutan mahasiswa baru kemarin gagal. Kami para senior banyak bertanya, (…) agar mahasiswa baru mudah berbicara, malah membuat mereka tegang.",
      optArti: ["setelah akhirnya membuat", "berniat membuat ..., tetapi ternyata", "padahal sudah menjadi", "bukan hanya sudah menjadi"],
    },
    34: {
      yomi: "{楽|たの}しみにしていた{初|はじ}めての{海外|かいがい}{旅行|りょこう}。{搭乗|とうじょう}{手続|てつづ}きも{出国|しゅっこく}{審査|しんさ}も{終|お}わり、あとは{出発|しゅっぱつ}を（　）。",
      arti: "Perjalanan ke luar negeri pertama yang dinanti-nanti. Check-in dan pemeriksaan imigrasi sudah selesai, tinggal (…) keberangkatan.",
      optYomi: ["{待|ま}つばかりとなった", "{待|ま}つこともあるはずだ", "{待|ま}てなくなってしまった", "{待|ま}てそうにはないみたいだ"],
      optArti: ["tinggal menunggu saja", "seharusnya ada kalanya menunggu", "jadi tidak bisa menunggu", "sepertinya tidak bisa menunggu"],
    },
    35: {
      yomi: "{先々週|せんせんしゅう}、{妹|いもうと}が{図書館|としょかん}で{分厚|ぶあつ}い{本|ほん}を10{冊|さつ}も{借|か}りてきた。「2{週間|しゅうかん}しか{借|か}りられないんだから、そんなに{絶対|ぜったい}（　）」と{思|おも}ったが、{全部|ぜんぶ}{読|よ}んで{返|かえ}したらしい。",
      arti: "Dua minggu lalu adik perempuan saya meminjam sampai 10 buku tebal dari perpustakaan. Saya pikir, \"Pinjamnya cuma 2 minggu, sebanyak itu pasti (…)\", tetapi ternyata ia membaca semuanya lalu mengembalikannya.",
      optYomi: ["{読|よ}みかけなのか", "{読|よ}みっぱなしだろう", "{読|よ}みきれっこない", "{読|よ}んでもいないくせに"],
      optArti: ["apakah sedang di tengah membaca?", "pasti dibiarkan setelah dibaca", "mana mungkin habis terbaca", "padahal membaca pun tidak"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "みなみ{水族館|すいぞくかん}はふだんから{来館者|らいかんしゃ}が{多|おお}いが、{先日|せんじつ}ペンギンの{赤|あか}ちゃんが{生|う}まれた＿＿ ＿＿ ★ ＿＿いつも{以上|いじょう}ににぎわっている。",
      arti: "Akuarium Minami biasanya memang ramai pengunjung, tetapi karena beberapa hari lalu lahir bayi penguin, akuarium itu lebih ramai dari biasanya oleh banyak orang yang ingin melihat bayi itu sekilas.",
      optYomi: ["{多|おお}くの{人|ひと}で", null, null, "{赤|あか}ちゃんを{一目|ひとめ}{見|み}よう"],
      optArti: ["oleh banyak orang", "juga karena", "yang (berniat)", "ingin melihat bayi itu sekilas"],
    },
    37: {
      yomi: "{新|しん}{社長|しゃちょう}は{労働|ろうどう}{条件|じょうけん}に{問題|もんだい}はないと{考|かんが}えているようだが、{実態|じったい}をわかっていない。{労働|ろうどう}{条件|じょうけん}＿＿ ＿＿ ★ ＿＿が{業績|ぎょうせき}{向上|こうじょう}だ。",
      arti: "Direktur baru tampaknya menganggap tidak ada masalah dengan kondisi kerja, tetapi ia tidak memahami kenyataannya. Tanpa perbaikan kondisi kerja, apa itu peningkatan kinerja (tidak mungkin).",
      optYomi: [null, null, "{何|なに}", "{改善|かいぜん}"],
      optArti: ["(partikel の)", "tanpa", "apa (itu)", "perbaikan"],
    },
    38: {
      yomi: "{現代|げんだい}の{映画|えいが}{音楽|おんがく}{界|かい}で、{作品|さくひん}の{世界観|せかいかん}に{合|あ}わせて＿＿ ＿＿ ★ ＿＿だろう。",
      arti: "Di dunia musik film masa kini, dalam hal bakat membuat musik yang sesuai dengan pandangan dunia karyanya, hampir tidak ada komponis yang lebih unggul daripada dia.",
      optYomi: ["{彼女|かのじょ}{以上|いじょう}に{優|すぐ}れている", "{才能|さいのう}にかけては", "{作曲家|さっきょくか}はまずいない", "{音楽|おんがく}を{作|つく}る"],
      optArti: ["lebih unggul daripada dia", "dalam hal bakat", "komponis hampir tidak ada", "membuat musik"],
    },
    39: {
      yomi: "ゼミの{教|おし}え{子|ご}たちが{新|あたら}しい{技術|ぎじゅつ}を{使|つか}ったソーラーカーの{開発|かいはつ}に{成功|せいこう}した。{実用化|じつようか}が{近|ちか}いとされている＿＿ ＿＿ ★ ＿＿{効率|こうりつ}よく{走|はし}ることができたと{思|おも}う。",
      arti: "Murid seminar saya berhasil mengembangkan mobil tenaga surya dengan teknologi baru. Meski jauh dari mobil buatan perusahaan A yang disebut-sebut hampir siap dipakai, saya rasa mobil itu bisa melaju dengan cukup efisien.",
      optYomi: [null, null, "A{社|しゃ}が{開発|かいはつ}した", "{遠|とお}く{及|およ}ばないにしろ"],
      optArti: ["dengan cukup, sesuai kadarnya", "(dibanding) yang", "yang dikembangkan perusahaan A", "meski jauh tertinggal"],
    },
    40: {
      yomi: "これまでにないウェディングドレスを{作|つく}ろうと{思|おも}い、デザイン{画|が}を{描|か}いては＿＿ ＿＿ ★ ＿＿、やっと{納得|なっとく}のいくものができた。",
      arti: "Saya ingin membuat gaun pengantin yang belum pernah ada; setelah mengulang puluhan kali menggambar desain lalu memperbaikinya, akhirnya jadi sesuatu yang memuaskan.",
      optYomi: [null, "{数十回|すうじっかい}", "{直|なお}す", "{繰|く}り{返|かえ}すこと"],
      optArti: ["(partikel を)", "puluhan kali", "memperbaiki", "mengulang"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optArti: ["seharusnya sedang melakukan", "karena sedang melakukan", "saat itu sedang melakukan", "sampai-sampai melakukan"],
    },
    42: {
      optYomi: ["{思|おも}います", "{思|おも}うようです", "{思|おも}うのに", "{思|おも}って"],
      optArti: ["saya pikir", "sepertinya berpikir", "padahal berpikir", "karena berpikir (begitu)"],
    },
    43: {
      optArti: ["(topik)", "(subjek)", "juga", "hanya"],
    },
    44: {
      optYomi: ["{聞|き}いてます", "{聞|き}いてきます", "{聞|き}いてくれます", "{聞|き}かれてます"],
      optArti: ["(saya) bertanya", "(saya) bertanya lalu kembali", "(mereka) bertanya untuk saya", "(saya) ditanya"],
    },
    45: {
      optArti: ["ingin berada", "(dia) ingin berada", "dulu berada", "hal berada"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{西山|にしやま}{営業所|えいぎょうしょ}について、このお{知|し}らせで{最|もっと}も{伝|つた}えたいことは{何|なに}か。",
      arti: "Mengenai Kantor Cabang Nishiyama, apa yang paling ingin disampaikan pemberitahuan ini?",
      optYomi: [
        "{移転|いてん}が{完了|かんりょう}し、5{月|がつ}31{日|にち}から{業務|ぎょうむ}を{再開|さいかい}している。",
        "{移転|いてん}が{完了|かんりょう}したので、{電話|でんわ}とメールは{使|つか}える。",
        "ファクス{機|き}が{復旧|ふっきゅう}し{次第|しだい}、{業務|ぎょうむ}を{再開|さいかい}する。",
        "ファクス{機|き}は{不調|ふちょう}だが、{電話|でんわ}とメールは{使|つか}える。",
      ],
      optArti: [
        "Pemindahan selesai, dan operasional dibuka kembali sejak 31 Mei.",
        "Karena pemindahan selesai, telepon dan email bisa digunakan.",
        "Begitu mesin faks pulih, operasional akan dibuka kembali.",
        "Mesin faks bermasalah, tetapi telepon dan email bisa digunakan.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{動物|どうぶつ}たちにとって、{飼育|しいく}{係|がかり}との{関係|かんけい}は{展示場|てんじじょう}の{改善|かいぜん}よりも{重要|じゅうよう}である。",
        "{飼育|しいく}{環境|かんきょう}を{改善|かいぜん}しても、{動物|どうぶつ}にストレスがたまることがある。",
        "{飼育|しいく}{環境|かんきょう}の{改善|かいぜん}には、{飼育|しいく}{係|がかり}が{動物|どうぶつ}の{特徴|とくちょう}や{性格|せいかく}を{把握|はあく}することも{重要|じゅうよう}である。",
        "{飼育|しいく}{係|がかり}の{使命|しめい}は、{動物|どうぶつ}の{特徴|とくちょう}や{性格|せいかく}に{合|あ}った{展示場|てんじじょう}を{作|つく}ることである。",
      ],
      optArti: [
        "Bagi hewan, hubungan dengan perawat lebih penting daripada perbaikan kandang pamer.",
        "Meski lingkungan pemeliharaan diperbaiki, hewan kadang tetap stres.",
        "Untuk memperbaiki lingkungan pemeliharaan, penting juga perawat memahami ciri dan watak hewan.",
        "Tugas perawat adalah membuat kandang pamer yang sesuai ciri dan watak hewan.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{企業|きぎょう}では「{共感|きょうかん}」によるコミュニケーションで{人|ひと}を{動|うご}かしている。",
        "{企業|きぎょう}では「{役職|やくしょく}」を{使|つか}って{人|ひと}を{動|うご}かすことも{考|かんが}えるべきだ。",
        "{人|ひと}は{本質的|ほんしつてき}な{満足|まんぞく}が{得|え}られると{確信|かくしん}しない{限|かぎ}り{動|うご}かない。",
        "{人|ひと}は「{力|ちから}」より「{共感|きょうかん}」によって{動|うご}こうとする。",
      ],
      optArti: [
        "Perusahaan menggerakkan orang dengan komunikasi berdasarkan \"empati\".",
        "Perusahaan juga harus mempertimbangkan menggerakkan orang dengan \"jabatan\".",
        "Orang tidak bergerak selama tidak yakin akan mendapat kepuasan hakiki.",
        "Orang lebih mau bergerak karena \"empati\" daripada \"kekuatan\".",
      ],
    },
    49: {
      yomi: "その{現象|げんしょう}とはどのような{現象|げんしょう}のことか。",
      arti: "\"Fenomena itu\" adalah fenomena seperti apa?",
      optYomi: [
        "{道具|どうぐ}によって{人間|にんげん}が{便利|べんり}さに{鈍感|どんかん}になる{現象|げんしょう}",
        "{道具|どうぐ}によって{人間|にんげん}が{振|ふ}り{回|まわ}されている{現象|げんしょう}",
        "{道具|どうぐ}が{人間|にんげん}にとって{危険|きけん}なものになる{現象|げんしょう}",
        "{道具|どうぐ}の{発展|はってん}が{人間|にんげん}の{欲求|よっきゅう}を{拡大|かくだい}させる{現象|げんしょう}",
      ],
      optArti: [
        "Fenomena manusia menjadi tidak peka terhadap kepraktisan karena alat",
        "Fenomena manusia diombang-ambingkan oleh alat",
        "Fenomena alat menjadi berbahaya bagi manusia",
        "Fenomena perkembangan alat memperbesar keinginan manusia",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{嘘|うそ}ではないとあるが、{何|なに}が{嘘|うそ}ではないのか。",
      arti: "Tertulis \"bukan bohong\"; apa yang bukan bohong?",
      optYomi: [
        "{自分|じぶん}が{語|かた}る{自分|じぶん}と{相手|あいて}が{語|かた}る{自分|じぶん}",
        "{異|こと}なる{相手|あいて}によって{語|かた}られた{自分|じぶん}",
        "{相手|あいて}に{合|あ}わせて{語|かた}り{分|わ}けた{自分|じぶん}",
        "{相手|あいて}にとって{良|よ}い{自分|じぶん}と{悪|わる}い{自分|じぶん}",
      ],
      optArti: [
        "Diri yang diceritakan sendiri dan diri yang diceritakan lawan bicara",
        "Diri yang diceritakan oleh lawan bicara yang berbeda-beda",
        "Diri yang diceritakan secara berbeda menyesuaikan lawan bicara",
        "Diri yang baik dan diri yang buruk bagi lawan bicara",
      ],
    },
    51: {
      yomi: "よく{知|し}らない{相手|あいて}に{自分|じぶん}を{語|かた}るのは、なぜ{難|むずか}しいのか。",
      arti: "Mengapa sulit menceritakan diri kepada orang yang tidak begitu dikenal?",
      optYomi: [
        "{自分|じぶん}のどの{側面|そくめん}を{語|かた}ればよいか{決|き}められないから",
        "{自分|じぶん}のすべての{側面|そくめん}を{語|かた}らなければならないから",
        "{自分|じぶん}のイメージが{相手|あいて}によってつくられることになるから",
        "{自分|じぶん}が{演出|えんしゅつ}したとおりに{相手|あいて}に{思|おも}ってもらえないから",
      ],
      optArti: [
        "Karena tidak bisa memutuskan sisi diri yang mana yang harus diceritakan",
        "Karena harus menceritakan semua sisi diri",
        "Karena citra diri akan dibentuk oleh lawan bicara",
        "Karena lawan bicara tidak menganggap kita sesuai yang kita tampilkan",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えを{最|もっと}もよく{表|あらわ}しているのはどれか。",
      arti: "Mana yang paling tepat menggambarkan pendapat penulis?",
      optYomi: [
        "よく{知|し}らない{相手|あいて}には、{本当|ほんとう}の{自分|じぶん}を{語|かた}ることが{必要|ひつよう}だ。",
        "{相手|あいて}より{先|さき}に、{自分|じぶん}から{語|かた}り{始|はじ}めることが{重要|じゅうよう}だ。",
        "{相手|あいて}とよく{語|かた}り{合|あ}うことによって、{自分|じぶん}の{形|かたち}がつくられていく。",
        "{相手|あいて}に{自分|じぶん}を{語|かた}ることによって、{自分|じぶん}の{形|かたち}ができあがっていく。",
      ],
      optArti: [
        "Kepada orang yang tidak dikenal, perlu menceritakan diri yang sebenarnya.",
        "Penting untuk mulai bercerita lebih dulu daripada lawan bicara.",
        "Dengan banyak berbincang dengan lawan bicara, bentuk diri terbentuk.",
        "Dengan menceritakan diri kepada lawan bicara, bentuk diri jadi terbentuk.",
      ],
    },
    53: {
      yomi: "{筆者|ひっしゃ}によると、ウェブ{時代|じだい}に{生|い}きる{人々|ひとびと}が{感|かん}じている{不安|ふあん}とはどのようなものか。",
      arti: "Menurut penulis, kecemasan apa yang dirasakan orang-orang yang hidup di era web?",
      optYomi: [
        "{膨大|ぼうだい}な{情報|じょうほう}を{理解|りかい}する{時間|じかん}が{足|た}りないのではないか。",
        "{人|ひと}や{世間|せけん}に{対|たい}する{認識|にんしき}が{深|ふか}まっていないのではないか。",
        "{蓄積|ちくせき}され{続|つづ}ける{情報|じょうほう}の{中|なか}から{必要|ひつよう}な{情報|じょうほう}が{探|さが}せないのではないか。",
        "{人|ひと}の{心|こころ}までが{時間|じかん}や{情報|じょうほう}に{流|なが}されそうになっているのではないか。",
      ],
      optArti: [
        "Jangan-jangan waktu untuk memahami informasi yang sangat banyak tidak cukup.",
        "Jangan-jangan pemahaman terhadap manusia dan masyarakat tidak makin dalam.",
        "Jangan-jangan informasi yang diperlukan tidak bisa ditemukan dari informasi yang terus menumpuk.",
        "Jangan-jangan hati manusia pun hampir terseret waktu dan informasi.",
      ],
    },
    54: {
      yomi: "{小説|しょうせつ}は「{小|ちい}さく{説|と}く」とあるが、どういう{意味|いみ}か。",
      arti: "Tertulis novel itu \"menjelaskan dalam ukuran kecil\"; apa maksudnya?",
      optYomi: [
        "{人間|にんげん}の{複雑|ふくざつ}な{心理|しんり}を{簡潔|かんけつ}に{示|しめ}す。",
        "{広|ひろ}く{複雑|ふくざつ}な{人間|にんげん}{社会|しゃかい}を{少|すこ}しだけ{見|み}せる。",
        "{人|ひと}の{心|こころ}や{複雑|ふくざつ}な{世|よ}の{中|なか}を{凝縮|ぎょうしゅく}して{示|しめ}す。",
        "{広|ひろ}い{世|よ}の{中|なか}の{重要|じゅうよう}なところを{圧縮|あっしゅく}して{見|み}せる。",
      ],
      optArti: [
        "Menunjukkan psikologi manusia yang rumit secara ringkas.",
        "Memperlihatkan sedikit saja masyarakat manusia yang luas dan rumit.",
        "Menyajikan hati manusia dan dunia yang rumit secara padat.",
        "Memperlihatkan bagian penting dari dunia yang luas secara dipadatkan.",
      ],
    },
    55: {
      yomi: "ウェブ{時代|じだい}に{小説|しょうせつ}を{読|よ}むことについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang membaca novel di era web?",
      optYomi: [
        "{小説|しょうせつ}には{膨大|ぼうだい}な{情報|じょうほう}が{詰|つ}め{込|こ}まれているので、{濃密|のうみつ}な{時間|じかん}を{体験|たいけん}することができる。",
        "{小説|しょうせつ}は{複雑|ふくざつ}な{世|よ}の{中|なか}を{説明|せつめい}しているので、{情報|じょうほう}が{溢|あふ}れる{世界|せかい}を{深|ふか}く{理解|りかい}できるようになる。",
        "{小説|しょうせつ}が{読者|どくしゃ}に{寄|よ}り{添|そ}ってくれることで、{現代|げんだい}の{情報|じょうほう}とのかかわり{方|かた}とは{異|こと}なる{刺激|しげき}が{得|え}られる。",
        "{小説|しょうせつ}が{読者|どくしゃ}の{手|て}を{引|ひ}いてくれることで、{情報|じょうほう}{社会|しゃかい}で{不安|ふあん}を{感|かん}じず{生|い}きていけるようになる。",
      ],
      optArti: [
        "Karena novel memuat informasi yang sangat banyak, kita bisa mengalami waktu yang padat.",
        "Karena novel menjelaskan dunia yang rumit, kita jadi bisa memahami dunia yang dibanjiri informasi secara mendalam.",
        "Karena novel mendampingi pembaca, kita mendapat rangsangan yang berbeda dari cara berhubungan dengan informasi masa kini.",
        "Karena novel menuntun tangan pembaca, kita bisa hidup tanpa cemas di masyarakat informasi.",
      ],
    },
    56: {
      yomi: "{生|い}き{物|もの}にとっての{睡眠|すいみん}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang tidur bagi makhluk hidup?",
      optYomi: [
        "{生|い}き{抜|ぬ}くために、さまざまな{条件|じょうけん}に{合|あ}わせて{調整|ちょうせい}できるものである。",
        "{脳|のう}を{休息|きゅうそく}させるために、{一定|いってい}の{時間|じかん}{確保|かくほ}されるべきものである。",
        "{自身|じしん}の{生命|せいめい}を{脅|おびや}かすもので、できるだけ{避|さ}けるべきものである。",
        "{環境|かんきょう}に{適応|てきおう}するために、{他|ほか}の{活動|かつどう}より{優先|ゆうせん}されるものである。",
      ],
      optArti: [
        "Sesuatu yang bisa disesuaikan dengan berbagai kondisi agar bisa bertahan hidup.",
        "Sesuatu yang harus dijamin dalam waktu tertentu untuk mengistirahatkan otak.",
        "Sesuatu yang mengancam nyawa sendiri dan sebaiknya dihindari sebisa mungkin.",
        "Sesuatu yang diutamakan di atas kegiatan lain untuk beradaptasi dengan lingkungan.",
      ],
    },
    57: {
      yomi: "{睡眠|すいみん}を{人為的|じんいてき}な{規則|きそく}で{拘束|こうそく}したとあるが、どういうことか。",
      arti: "Tertulis \"mengekang tidur dengan aturan buatan manusia\"; apa maksudnya?",
      optYomi: [
        "{日々|ひび}の{睡眠|すいみん}{時間|じかん}をできるだけ{短|みじか}くすることにした。",
        "{一日|いちにち}のうちの、{一定|いってい}の{時間|じかん}を{睡眠|すいみん}に{充|あ}てることにした。",
        "{活動|かつどう}{時間|じかん}に{合|あ}わせて、{睡眠|すいみん}{時間|じかん}を{減|へ}らすことにした。",
        "{各自|かくじ}の{条件|じょうけん}に{合|あ}わせて、{睡眠|すいみん}{時間|じかん}を{決|き}めることにした。",
      ],
      optArti: [
        "Memutuskan memperpendek waktu tidur setiap hari sebisa mungkin.",
        "Memutuskan memakai waktu tertentu dalam sehari untuk tidur.",
        "Memutuskan mengurangi waktu tidur sesuai waktu beraktivitas.",
        "Memutuskan menentukan waktu tidur sesuai kondisi masing-masing.",
      ],
    },
    58: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{人間|にんげん}の{睡眠|すいみん}{時間|じかん}は{一様|いちよう}に{決|き}めるようなものではない。",
        "{人間|にんげん}の{睡眠|すいみん}の{方式|ほうしき}は{他|ほか}の{生|い}き{物|もの}と{比|くら}べられるものではない。",
        "{人間|にんげん}も{他|ほか}の{生|い}き{物|もの}と{同様|どうよう}に、{睡眠|すいみん}をとることが{生存|せいぞん}{戦略|せんりゃく}となっている。",
        "{人間|にんげん}は{社会|しゃかい}{活動|かつどう}をすることで、{他|ほか}の{生|い}き{物|もの}と{異|こと}なる{睡眠|すいみん}{時間|じかん}が{必要|ひつよう}になった。",
      ],
      optArti: [
        "Waktu tidur manusia bukan sesuatu yang bisa ditentukan seragam.",
        "Cara tidur manusia tidak bisa dibandingkan dengan makhluk lain.",
        "Seperti makhluk lain, tidur juga menjadi strategi bertahan hidup bagi manusia.",
        "Karena beraktivitas sosial, manusia memerlukan waktu tidur yang berbeda dari makhluk lain.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "①{不思議|ふしぎ}がっていたとあるが、{何|なに}を{不思議|ふしぎ}がっていたか。",
      arti: "Tertulis \"① merasa heran\"; apa yang membuatnya heran?",
      optYomi: [
        "{宅配便|たくはいびん}の{荷物|にもつ}が{梱包|こんぽう}されたまま{置|お}かれていること",
        "{十年|じゅうねん}{経|た}っても{店|みせ}の{様子|ようす}が{何|なに}も{変|か}わらないこと",
        "{店|みせ}なのに{客|きゃく}がいるのを{見|み}たことがないこと",
        "{店主|てんしゅ}を{一度|いちど}も{見|み}たことがないこと",
      ],
      optArti: [
        "Paket kiriman diletakkan dalam keadaan masih terbungkus",
        "Setelah sepuluh tahun pun keadaan toko sama sekali tidak berubah",
        "Meskipun toko, belum pernah terlihat ada pembeli",
        "Belum pernah sekali pun melihat pemilik toko",
      ],
    },
    60: {
      yomi: "②ひと{筋|すじ}の{光|ひかり}が{射|さ}し{込|こ}んで{来|く}る{思|おも}いがしたとあるが、なぜか。",
      arti: "Tertulis \"② terasa seberkas cahaya masuk\"; mengapa?",
      optYomi: [
        "{同|どう}{世代|せだい}の{女性|じょせい}が{自分|じぶん}と{同|おな}じ{思|おも}いを{抱|いだ}いていることがわかったから",
        "{割|わ}れてしまった{思|おも}い{出|で}{深|ぶか}い{陶器|とうき}を{直|なお}せそうだとわかったから",
        "{不思議|ふしぎ}に{思|おも}っていた{店|みせ}がどのような{店|みせ}かわかったから",
        "{専門的|せんもんてき}な{技術|ぎじゅつ}を{近所|きんじょ}で{見|み}られることがわかったから",
      ],
      optArti: [
        "Karena tahu ada wanita seangkatan yang punya perasaan sama dengannya",
        "Karena tahu keramik penuh kenangan yang pecah tampaknya bisa diperbaiki",
        "Karena tahu toko yang ia herankan itu toko seperti apa",
        "Karena tahu bisa melihat teknik keahlian khusus di dekat rumah",
      ],
    },
    61: {
      yomi: "③すっかり{気|き}が{楽|らく}になってとあるが、なぜか。",
      arti: "Tertulis \"③ menjadi sangat lega\"; mengapa?",
      optYomi: [
        "{店主|てんしゅ}も{自分|じぶん}のことを{知|し}っていて、{親|した}しく{接|せっ}してくれたから",
        "{店主|てんしゅ}は{話|はな}しづらい{人|ひと}だと{思|おも}ったが、そうではなかったから",
        "{店主|てんしゅ}が{仕事|しごと}の{手|て}を{休|やす}めて{話|はな}しかけてくれたから",
        "{店主|てんしゅ}が{以前|いぜん}と{同|おな}じように{接|せっ}してくれたから",
      ],
      optArti: [
        "Karena pemilik toko juga mengenalnya dan bersikap akrab",
        "Karena ia kira pemilik toko sulit diajak bicara, ternyata tidak",
        "Karena pemilik toko menghentikan pekerjaannya dan mengajaknya bicara",
        "Karena pemilik toko bersikap sama seperti sebelumnya",
      ],
    },
    62: {
      yomi: "この{文章|ぶんしょう}で{述|の}べられている{経験|けいけん}を{通|とお}して、{筆者|ひっしゃ}が{強|つよ}く{思|おも}ったのはどのようなことか。",
      arti: "Melalui pengalaman yang diceritakan dalam tulisan ini, apa yang sangat dirasakan penulis?",
      optYomi: [
        "{形|かたち}あるものは{壊|こわ}れるからこそ、{愛情|あいじょう}を{持|も}って{使|つか}いたい。",
        "{壊|こわ}れるものには{美|うつく}しさがあり、{作|つく}り{手|て}への{感謝|かんしゃ}の{念|ねん}を{忘|わす}れてはならない。",
        "{壊|こわ}れたものは{修復|しゅうふく}できても、{壊|こわ}れたときの{心|こころ}の{痛手|いたで}はなくならない。",
        "{壊|こわ}れたものを{直|なお}す{技術|ぎじゅつ}があることに{感謝|かんしゃ}しながら、{大事|だいじ}に{使|つか}いたい。",
      ],
      optArti: [
        "Justru karena benda berbentuk itu bisa pecah, ingin memakainya dengan rasa sayang.",
        "Benda yang bisa pecah memiliki keindahan, dan rasa terima kasih kepada pembuatnya tidak boleh dilupakan.",
        "Benda yang pecah bisa diperbaiki, tetapi luka hati saat pecah tidak hilang.",
        "Sambil bersyukur ada teknik memperbaiki benda pecah, ingin memakainya dengan hati-hati.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{外来語|がいらいご}・{外国語|がいこくご}の{使用|しよう}が{避|さ}けられない{理由|りゆう}として、AとBが{共通|きょうつう}して{述|の}べていることは{何|なに}か。",
      arti: "Sebagai alasan penggunaan kata serapan/bahasa asing tak terhindarkan, apa yang sama-sama dikemukakan A dan B?",
      optYomi: [
        "{外来語|がいらいご}・{外国語|がいこくご}の{方|ほう}が{日本語|にほんご}で{表現|ひょうげん}しにくい{概念|がいねん}を{表|あらわ}すこともできること",
        "{外来語|がいらいご}・{外国語|がいこくご}がすでに{定着|ていちゃく}して{一般的|いっぱんてき}になっていること",
        "{外来語|がいらいご}・{外国語|がいこくご}を{使用|しよう}しないと{外国人|がいこくじん}が{理解|りかい}できないと{考|かんが}えられていること",
        "{外来語|がいらいご}・{外国語|がいこくご}を{使用|しよう}する{方|ほう}が{現代的|げんだいてき}であると{考|かんが}えられていること",
      ],
      optArti: [
        "Kata serapan/bahasa asing juga bisa mengungkapkan konsep yang sulit diungkapkan dalam bahasa Jepang",
        "Kata serapan/bahasa asing sudah mengakar dan menjadi umum",
        "Dianggap orang asing tidak bisa memahami jika tidak memakai kata serapan/bahasa asing",
        "Memakai kata serapan/bahasa asing dianggap lebih modern",
      ],
    },
    64: {
      yomi: "{外来語|がいらいご}・{外国語|がいこくご}のあり{方|かた}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang penggunaan kata serapan/bahasa asing?",
      optYomi: [
        "AもBも、{若|わか}い{世代|せだい}であってもできるだけ{使用|しよう}すべきではないと{述|の}べている。",
        "AもBも、{対象|たいしょう}となる{世代|せだい}によって{使用|しよう}するかどうかを{考|かんが}えるべきだと{述|の}べている。",
        "Aは{安易|あんい}に{使用|しよう}しないようにすべきだと{述|の}べ、Bは{意味|いみ}をよく{理解|りかい}した{上|うえ}で{使用|しよう}すべきだと{述|の}べている。",
        "Aは{国民|こくみん}{一般|いっぱん}を{対象|たいしょう}に{使用|しよう}する{場合|ばあい}はよく{考|かんが}えるべきだと{述|の}べ、Bは{相手|あいて}に{応|おう}じて{使用|しよう}した{方|ほう}がいいと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan sebisa mungkin tidak dipakai, bahkan oleh generasi muda.",
        "A dan B sama-sama menyatakan perlu dipertimbangkan sesuai generasi sasaran.",
        "A menyatakan jangan dipakai sembarangan; B menyatakan sebaiknya dipakai setelah benar-benar memahami artinya.",
        "A menyatakan perlu dipikirkan baik-baik jika ditujukan untuk masyarakat umum; B menyatakan sebaiknya dipakai sesuai lawan bicara.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "{筆者|ひっしゃ}によると、{原初的|げんしょてき}な{科学|かがく}とはどういうものか。",
      arti: "Menurut penulis, apa itu sains yang asali (primordial)?",
      optYomi: [
        "{一見|いっけん}{無用|むよう}と{思|おも}われるものを、{世|よ}の{中|なか}に{役立|やくだ}てようとするもの",
        "{人間|にんげん}の{可能性|かのうせい}を{拡大|かくだい}するために、なくてはならないもの",
        "{自然|しぜん}の{中|なか}で{感性|かんせい}{豊|ゆた}かに{生|い}きるために、{自然|しぜん}を{学|まな}ぼうとするもの",
        "{自然|しぜん}の{偉大|いだい}さを{学|まな}び、{人間|にんげん}の{感性|かんせい}を{豊|ゆた}かにしていくもの",
      ],
      optArti: [
        "Sesuatu yang berusaha menjadikan hal yang sekilas tak berguna bermanfaat bagi dunia",
        "Sesuatu yang mutlak diperlukan untuk memperluas potensi manusia",
        "Sesuatu yang berusaha mempelajari alam agar bisa hidup dengan kepekaan rasa di alam",
        "Sesuatu yang mempelajari keagungan alam dan memperkaya kepekaan manusia",
      ],
    },
    66: {
      yomi: "それでいいのかと{改|あらた}めて{考|かんが}え{直|なお}してみる{必要|ひつよう}があるとあるが、{筆者|ひっしゃ}は{何|なに}を{考|かんが}え{直|なお}してみる{必要|ひつよう}があると{述|の}べているか。",
      arti: "Tertulis \"perlu dipikirkan ulang apakah itu sudah benar\"; menurut penulis apa yang perlu dipikirkan ulang?",
      optYomi: [
        "{科学|かがく}の{営|いとな}みの{中|なか}に{社会|しゃかい}に{寄与|きよ}しないムダが{多|おお}いこと",
        "{社会|しゃかい}が{科学|かがく}に{投資|とうし}しなくなってきたこと",
        "{社会|しゃかい}も{科学者|かがくしゃ}も{科学|かがく}を{経済的|けいざいてき}{観点|かんてん}からしか{見|み}ていないこと",
        "{社会|しゃかい}も{科学者|かがくしゃ}も{科学|かがく}に{見返|みかえ}りを{求|もと}めるべきではないと{考|かんが}えていること",
      ],
      optArti: [
        "Banyaknya pemborosan yang tidak berkontribusi bagi masyarakat dalam kegiatan sains",
        "Masyarakat tidak lagi berinvestasi pada sains",
        "Masyarakat maupun ilmuwan hanya memandang sains dari sudut pandang ekonomi",
        "Masyarakat maupun ilmuwan berpendapat tidak semestinya menuntut imbalan dari sains",
      ],
    },
    67: {
      yomi: "{筆者|ひっしゃ}は{科学|かがく}が{社会|しゃかい}にどのような{貢献|こうけん}をしてきたと{考|かんが}えているか。",
      arti: "Menurut penulis, kontribusi apa yang telah diberikan sains kepada masyarakat?",
      optYomi: [
        "{無数|むすう}の{科学者|かがくしゃ}の{積|つ}み{上|あ}げから{天才|てんさい}を{登場|とうじょう}させてきた。",
        "これまで{主流|しゅりゅう}とされてきたものの{見方|みかた}を{覆|くつがえ}し{変化|へんか}をもたらした。",
        "{社会|しゃかい}の{要求|ようきゅう}する{新|あたら}しい{商品|しょうひん}を{次々|つぎつぎ}に{提供|ていきょう}してきた。",
        "{社会|しゃかい}の{役|やく}に{立|た}たないことにも{価値|かち}があると{人々|ひとびと}に{認識|にんしき}させてきた。",
      ],
      optArti: [
        "Memunculkan para jenius dari tumpukan usaha ilmuwan yang tak terhitung.",
        "Membalikkan cara pandang yang selama ini dianggap arus utama dan membawa perubahan.",
        "Terus menyediakan produk baru yang dituntut masyarakat.",
        "Menyadarkan orang bahwa hal yang tidak berguna bagi masyarakat pun bernilai.",
      ],
    },
    68: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{市民|しみん}と{科学|かがく}の{楽|たの}しみを{共有|きょうゆう}することが「{文化|ぶんか}としての{科学|かがく}」の{発展|はってん}につながる。",
        "{市民|しみん}が{知的|ちてき}{好奇心|こうきしん}を{高|たか}めれば「{文化|ぶんか}としての{科学|かがく}」が{豊|ゆた}かになる。",
        "「{文化|ぶんか}としての{科学|かがく}」と「{役|やく}に{立|た}つ{科学|かがく}」が{共存|きょうぞん}することで{社会|しゃかい}が{豊|ゆた}かになる。",
        "「{文化|ぶんか}としての{科学|かがく}」とともに「{役|やく}に{立|た}つ{科学|かがく}」を{市民|しみん}に{伝|つた}えることが{必要|ひつよう}だ。",
      ],
      optArti: [
        "Berbagi kesenangan sains dengan masyarakat mengarah pada perkembangan \"sains sebagai budaya\".",
        "Jika masyarakat meningkatkan rasa ingin tahu intelektual, \"sains sebagai budaya\" menjadi kaya.",
        "Dengan hidup berdampingannya \"sains sebagai budaya\" dan \"sains yang berguna\", masyarakat menjadi makmur.",
        "Perlu menyampaikan \"sains yang berguna\" bersama \"sains sebagai budaya\" kepada masyarakat.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "ウーさんは55{歳|さい}で、このスポーツジムに{入会|にゅうかい}してトレーニングジムとプールを{使|つか}いたいと{考|かんが}えている。{火曜|かよう}の10{時|じ}から12{時|じ}までと、{水曜|すいよう}の17{時|じ}から19{時|じ}までが{両方|りょうほう}{利用|りよう}できるもので、できるだけ{安|やす}いプランがいい。ウーさんの{希望|きぼう}に{合|あ}うプランはどれか。",
      arti: "Wu-san berusia 55 tahun dan ingin bergabung dengan gym ini untuk memakai ruang latihan dan kolam renang. Ia ingin paket semurah mungkin yang bisa dipakai pada Selasa pukul 10–12 dan Rabu pukul 17–19. Paket mana yang sesuai keinginan Wu-san?",
      optYomi: [null, "{平日|へいじつ}A", "{平日|へいじつ}B", "{平日|へいじつ}C"],
      optArti: ["Full time", "Hari kerja A", "Hari kerja B", "Hari kerja C"],
    },
    70: {
      yomi: "アンガスさんは、このスポーツジムの「{夏|なつ}のご{入会|にゅうかい}キャンペーン」の{期間|きかん}{内|ない}に{入会|にゅうかい}{手続|てつづ}きに{行|い}くつもりだ。アンガスさんが{入会|にゅうかい}{手続|てつづ}き{時|じ}に{支払|しはら}わなければならない{料金|りょうきん}はどれか。",
      arti: "Angus-san berniat melakukan pendaftaran dalam masa \"kampanye pendaftaran musim panas\" gym ini. Biaya mana yang harus dibayar Angus-san saat mendaftar?",
      optYomi: [
        "{入会金|にゅうかいきん}と2か{月分|げつぶん}の{月会費|げっかいひ}",
        "{入会金|にゅうかいきん}と1か{月分|げつぶん}の{月会費|げっかいひ}",
        "2か{月分|げつぶん}の{月会費|げっかいひ}",
        "1か{月分|げつぶん}の{月会費|げっかいひ}",
      ],
      optArti: [
        "Biaya pendaftaran dan iuran bulanan 2 bulan",
        "Biaya pendaftaran dan iuran bulanan 1 bulan",
        "Iuran bulanan 2 bulan",
        "Iuran bulanan 1 bulan",
      ],
    },
  },

  bacaan: {
    // ── 問題7：声優が語る愛犬「直司」 ──
    "7": {
      yomi: `{以下|いか}は、{飼|か}っている{犬|いぬ}について、ある{声優|せいゆう}（{注|ちゅう}）が{語|かた}ったことをまとめたコラムである。

{職場|しょくば}の{同僚|どうりょう}の{飼|か}っている{犬|いぬ}が{子犬|こいぬ}をたくさん{産|う}んだというのを{父|ちち}が{聞|き}きつけて、「こいつが{一番|いちばん}かわいかった」と{勝手|かって}に{連|つ}れてきました。

{大学|だいがく}に{通|かよ}いつつ{仕事|しごと}を[41]。ある{作品|さくひん}で{演|えん}じた{役名|やくめい}から「{直司|なおじ}」と{名付|なづ}けました。{日本人|にほんじん}の{名前|なまえ}なら{祖父|そふ}も{覚|おぼ}えられると[42]。

{僕|ぼく}は{末|すえ}っ{子|こ}です。{直司|なおじ}はわが{家|や}では{年齢|ねんれい}や{立場|たちば}が{一番|いちばん}{下|した}になるので、{自分|じぶん}[43]もう1{人|り}いるような{感|かん}じです。{実家|じっか}にいたときは{僕|ぼく}がよく{散歩|さんぽ}に{連|つ}れて{行|い}きました。{前|まえ}にも{犬|いぬ}を{飼|か}っていたのですが、{小|ちい}さかった{頃|ころ}は{犬|いぬ}が{怖|こわ}くて、{好|す}きになれませんでした。でも{直司|なおじ}は{自然|しぜん}となついてくれました。

{家|いえ}が{好|す}きで、{居間|いま}によくいます。{雪|ゆき}が{降|ふ}った{時|とき}、{好奇心|こうきしん}で{外|そと}で{走|はし}り{回|まわ}るかと{思|おも}ったら、{気持|きも}ちよさそうに{舌|した}を{出|だ}してこたつで{寝|ね}ていたこともありました。こたつから{顔|かお}だけ{出|だ}して{寝|ね}ている{祖父|そふ}と{同|おな}じような{格好|かっこう}をしていました。

{家|いえ}を{出|で}てからは{実家|じっか}にまめに{電話|でんわ}して「{直司|なおじ}、{元気|げんき}？」と{父|ちち}や{母|はは}に[44]。{帰省|きせい}したときは、たわいないことを{話|はな}しかけますが、{愚痴|ぐち}は{言|い}いません。{言葉|ことば}の{意味|いみ}はわからないと{思|おも}うけれど、{人|ひと}が{言|い}われて{重|おも}い{言葉|ことば}は{犬|いぬ}もストレスを{感|かん}じると{思|おも}うので。

{性格|せいかく}はおとなしいけど、メス{犬|いぬ}が{好|す}き。{目|め}を{離|はな}したすきに、ぱっと{近所|きんじょ}のメス{犬|いぬ}の{方|ほう}へ{駆|か}け{寄|よ}っていくことがあります。シェパードの{警察犬|けいさつけん}を{演|えん}じたことがあるんですけど、その{時|とき}は{直司|なおじ}の{様子|ようす}や{鳴|な}き{声|ごえ}が{参考|さんこう}になりました。そのシェパードもスケベな{性格|せいかく}だったものですから。

きれいごとのように{単|たん}にかわいがるのは{嫌|きら}いですが、ほっとけない{存在|そんざい}です。{直司|なおじ}の{残|のこ}りの{人生|じんせい}もできるだけ{近|ちか}くに[45]。
（{朝日|あさひ}{新聞|しんぶん}2013{年|ねん}5{月|がつ}23{日|にち}{付|づけ}{夕刊|ゆうかん}による）
（{注|ちゅう}）{声優|せいゆう}：アニメのキャラクターなどの{声|こえ}を{演|えん}じる{俳優|はいゆう}`,
      arti: `Berikut ini adalah kolom yang merangkum cerita seorang pengisi suara (catatan) tentang anjing peliharaannya.

Ayah saya mendengar bahwa anjing milik rekan kerjanya melahirkan banyak anak anjing, lalu seenaknya membawa pulang satu sambil berkata, "Yang ini paling lucu."

Waktu itu saya [41] bekerja sambil kuliah. Saya menamainya "Naoji" dari nama peran yang saya mainkan dalam sebuah karya. Saya [42] kalau nama orang Jepang, kakek pun bisa mengingatnya.

Saya anak bungsu. Di rumah kami, Naoji paling bawah dalam hal usia dan kedudukan, jadi rasanya seperti ada satu lagi diri saya [43]. Waktu tinggal di rumah orang tua, saya sering mengajaknya jalan-jalan. Sebelumnya kami juga pernah memelihara anjing, tetapi waktu kecil saya takut anjing dan tidak bisa menyukainya. Tetapi Naoji dengan sendirinya jadi akrab dengan saya.

Ia suka rumah dan sering berada di ruang keluarga. Waktu salju turun, saya kira ia akan berlarian di luar karena penasaran, ternyata ia tidur di kotatsu dengan lidah terjulur, tampak nyaman. Posenya sama dengan kakek yang tidur dengan hanya kepala menyembul dari kotatsu.

Sejak keluar dari rumah, saya rajin menelepon ke rumah dan [44] ayah atau ibu, "Naoji sehat?" Saat pulang kampung, saya mengajaknya bicara hal remeh, tetapi tidak mengeluh. Saya rasa ia tidak memahami arti kata-katanya, tetapi kata-kata yang terasa berat bila diucapkan kepada manusia, saya rasa anjing pun ikut merasa stres.

Wataknya pendiam, tetapi suka anjing betina. Saat lengah sedikit saja, ia langsung berlari menghampiri anjing betina tetangga. Saya pernah memerankan anjing polisi jenis gembala Jerman, dan waktu itu tingkah dan gonggongan Naoji menjadi referensi. Sebab anjing gembala itu juga berwatak genit.

Saya tidak suka sekadar menyayanginya dengan cara yang dibuat-buat, tetapi ia sosok yang tidak bisa saya abaikan. Sisa hidup Naoji pun saya [45] sedekat mungkin dengannya.
(Dari Asahi Shimbun edisi sore 23 Mei 2013)
(Catatan) 声優: aktor yang mengisi suara karakter anime dan sebagainya`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{以下|いか}は、ある{企業|きぎょう}がホームページに{掲載|けいさい}したお{知|し}らせである。

{関川|せきかわ}{薬品|やくひん}{工業|こうぎょう}{株式|かぶしき}{会社|がいしゃ}お{知|し}らせ

2017.06.01　{重要|じゅうよう}なお{知|し}らせ

すでにお{知|し}らせしておりますとおり、{西山|にしやま}{営業所|えいぎょうしょ}は5{月|がつ}31{日|にち}（{水|すい}）より{移転|いてん}{先|さき}にて{業務|ぎょうむ}を{再開|さいかい}しております。しかしながら、{移転|いてん}{作業|さぎょう}{時|じ}にファクス{機|き}に{故障|こしょう}が{生|しょう}じ、{本日|ほんじつ}（6{月|がつ}{1日|ついたち}）{現在|げんざい}もファクスの{送受信|そうじゅしん}ができません。

{復旧|ふっきゅう}までは{下記|かき}の{電話|でんわ}もしくはメールをご{利用|りよう}ください。なお、ファクス{機|き}が{復旧|ふっきゅう}し{次第|しだい}、こちらのホームページ{上|じょう}でお{知|し}らせいたします。

{関係者|かんけいしゃ}の{皆様|みなさま}には{大変|たいへん}ご{迷惑|めいわく}をお{掛|か}けし{申|もう}し{訳|わけ}ございませんが、{何卒|なにとぞ}よろしくお{願|ねが}いいたします。

{電話|でんわ}{番号|ばんごう}：020-428-4319
Eメール：info@sekikawa.com`,
      arti: `Berikut ini adalah pemberitahuan yang dimuat sebuah perusahaan di situs webnya.

Pemberitahuan PT Sekikawa Yakuhin Kogyo

2017.06.01 Pemberitahuan penting

Sebagaimana telah kami beritahukan, Kantor Cabang Nishiyama sudah kembali beroperasi di lokasi baru sejak 31 Mei (Rabu). Namun, mesin faks rusak saat pemindahan, sehingga per hari ini (1 Juni) faks masih belum bisa mengirim dan menerima.

Sampai pulih, silakan gunakan telepon atau email di bawah ini. Begitu mesin faks pulih, kami akan memberitahukannya di situs web ini.

Kami mohon maaf sebesar-besarnya atas ketidaknyamanan bagi semua pihak terkait, dan mohon pengertiannya.

Nomor telepon: 020-428-4319
Email: info@sekikawa.com`,
    },
    "8-2": {
      yomi: `{以下|いか}は、{動物園|どうぶつえん}の{飼育|しいく}{環境|かんきょう}について{書|か}かれたものである。

{動物|どうぶつ}たちにとって{飼育|しいく}{係|がかり}は{大事|だいじ}な{環境|かんきょう}{要因|よういん}である。{展示場|てんじじょう}としての{環境|かんきょう}の{改善|かいぜん}だけでは、{動物|どうぶつ}たちの{飼育|しいく}{環境|かんきょう}の{真|しん}の{改善|かいぜん}にはならない。{日々|ひび}{動物|どうぶつ}と{接触|せっしょく}する{飼育|しいく}{係|がかり}は、{時|とき}として{動物|どうぶつ}たちのストレス{源|げん}になることがある。{飼育|しいく}{係|がかり}がストレス{源|げん}にならないためには{動物|どうぶつ}をよく{観察|かんさつ}し、{行動|こうどう}にあわせた{世話|せわ}をし、その{動物|どうぶつ}の{種|しゅ}としての{特徴|とくちょう}、{個体|こたい}としての{性格|せいかく}を{知|し}らなければならない。
（{小宮|こみや}{輝之|てるゆき}『{物語|ものがたり}　{上野|うえの}{動物園|どうぶつえん}の{歴史|れきし}』による）`,
      arti: `Berikut ini adalah tulisan tentang lingkungan pemeliharaan di kebun binatang.

Bagi hewan, perawat adalah faktor lingkungan yang penting. Memperbaiki lingkungan sebagai tempat pamer saja tidak akan benar-benar memperbaiki lingkungan pemeliharaan hewan. Perawat yang setiap hari berinteraksi dengan hewan kadang bisa menjadi sumber stres bagi hewan. Agar perawat tidak menjadi sumber stres, ia harus mengamati hewan dengan baik, merawatnya sesuai perilakunya, dan mengetahui ciri hewan itu sebagai spesies serta wataknya sebagai individu.
(Dari buku karya Komiya Teruyuki, "Kisah – Sejarah Kebun Binatang Ueno")`,
    },
    "8-3": {
      yomi: `{人|ひと}と{人|ひと}とのコミュニケーションが{希薄化|きはくか}していると{言|い}われる{今日|こんにち}、それを{如何|いか}に{円滑|えんかつ}に、{如何|いか}に{真意|しんい}を{外|はず}さずに{行|おこな}うかは、{誰|だれ}にとっても{大|おお}きな{課題|かだい}だ。

{時|とき}に{人|ひと}は「{力|ちから}」によって{他者|たしゃ}を{動|うご}かそうとする。あるいは「{経済力|けいざいりょく}」が{人|ひと}を{動|うご}かす{手段|しゅだん}ともなる。{企業|きぎょう}という{組織|そしき}では、「{役職|やくしょく}＝ポジション」を{使|つか}って{人|ひと}を{動|うご}かすケースも{多|おお}い。

だがそういった「{上意下達|じょういかたつ}」（{注|ちゅう}1）「{弱肉強食|じゃくにくきょうしょく}」のコミュニケーションでは、{人|ひと}は{本質的|ほんしつてき}な{満足|まんぞく}は{得|え}られない。{人|ひと}が{人|ひと}である{所以|ゆえん}（{注|ちゅう}2）は、{力|ちから}{対|たい}{力|ちから}の{拮抗|きっこう}ではなく、{他者|たしゃ}との「{共感|きょうかん}」によって「{動|うご}く」「{動|うご}かす」ことができる{点|てん}にある。
（{佐渡|さど}{裕|ゆたか}・{辻|つじ}{秀一|しゅういち}『{感|かん}じて{動|うご}く』による）
（{注|ちゅう}1）{上意下達|じょういかたつ}：{上|うえ}に{立|た}つ{者|もの}の{考|かんが}えや{命令|めいれい}を{下位|かい}の{者|もの}へ{伝|つた}えること
（{注|ちゅう}2）{所以|ゆえん}：{理由|りゆう}`,
      arti: `Di masa kini, ketika komunikasi antarmanusia disebut makin renggang, bagaimana melakukannya dengan lancar dan tanpa melenceng dari maksud sebenarnya adalah tantangan besar bagi siapa pun.

Kadang orang berusaha menggerakkan orang lain dengan "kekuatan". Atau "kekuatan ekonomi" juga menjadi sarana menggerakkan orang. Dalam organisasi bernama perusahaan, banyak juga kasus menggerakkan orang dengan "jabatan = posisi".

Namun dengan komunikasi "perintah dari atas ke bawah" (catatan 1) dan "yang kuat memakan yang lemah" seperti itu, orang tidak mendapat kepuasan hakiki. Alasan (catatan 2) manusia disebut manusia terletak bukan pada tarik-menarik kekuatan lawan kekuatan, melainkan pada kemampuannya untuk "bergerak" dan "menggerakkan" melalui "empati" dengan orang lain.
(Dari buku karya Sado Yutaka dan Tsuji Shuichi, "Merasakan lalu Bergerak")
(Catatan 1) 上意下達: menyampaikan pemikiran atau perintah atasan kepada bawahan
(Catatan 2) 所以: alasan`,
    },
    "8-4": {
      yomi: `{人間|にんげん}には、{道具|どうぐ}をつくり、その{道具|どうぐ}に{適応|てきおう}しようとする{性質|せいしつ}がある。そしてその{道具|どうぐ}に{適応|てきおう}し{過|す}ぎてしまうことで、{本来|ほんらい}の{人間|にんげん}の{能力|のうりょく}を{削|そ}がれて（{注|ちゅう}1）しまうことがある。その{適応力|てきおうりょく}が{仇|あだ}（{注|ちゅう}2）となり、{人間|にんげん}がつくった{道具|どうぐ}により{人間|にんげん}が{左右|さゆう}される。まるで、{人間|にんげん}がつくった{道具|どうぐ}に{人間|にんげん}がつくられてしまうかのように。{歩|ある}きながらでもスマートフォン（{注|ちゅう}3）を{使|つか}いたいという{欲求|よっきゅう}にかられ、{挙|あ}げ{句|く}に{視野|しや}を{大|おお}きくそこへ{奪|うば}われ、{自|みずか}ら、そして{他者|たしゃ}をも{危険|きけん}な{状況|じょうきょう}に{追|お}い{込|こ}んでしまう。これもその{現象|げんしょう}のひとつだ。
（{小川|おがわ}{和也|かずや}『デジタルは{人間|にんげん}を{奪|うば}うのか』による）
（{注|ちゅう}1）{削|そ}ぐ：{削|けず}る
（{注|ちゅう}2）{仇|あだ}：ここでは、{害|がい}
（{注|ちゅう}3）スマートフォン：パソコンの{機能|きのう}もある{携帯|けいたい}{電話|でんわ}`,
      arti: `Manusia memiliki sifat membuat alat dan berusaha menyesuaikan diri dengan alat itu. Dan karena terlalu menyesuaikan diri dengan alat itu, kemampuan asli manusia kadang terkikis (catatan 1). Daya adaptasi itu menjadi bumerang (catatan 2), dan manusia dikendalikan oleh alat buatan manusia. Seakan-akan manusia dibentuk oleh alat yang dibuat manusia. Terdorong keinginan memakai ponsel pintar (catatan 3) bahkan sambil berjalan, akhirnya pandangan banyak tersita ke sana, dan menjerumuskan diri sendiri bahkan orang lain ke dalam situasi berbahaya. Ini juga salah satu fenomena itu.
(Dari buku karya Ogawa Kazuya, "Apakah Digital Merampas Manusia?")
(Catatan 1) 削ぐ: mengikis
(Catatan 2) 仇: di sini, bahaya, kerugian
(Catatan 3) スマートフォン: ponsel yang juga memiliki fungsi komputer`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `よく{知|し}っている{人|ひと}を{相手|あいて}に{自己|じこ}を{語|かた}るのは{簡単|かんたん}だが、お{互|たが}いによく{知|し}らない{相手|あいて}に{自己|じこ}を{語|かた}るというのは{非常|ひじょう}に{難|むずか}しい。

よく{知|し}っている{相手|あいて}との{間|あいだ}に{共通|きょうつう}の{文脈|ぶんみゃく}ができあがっているので、その{文脈|ぶんみゃく}にふさわしい{自分|じぶん}を{提示|ていじ}していけばよいから、ほぼ{自動化|じどうか}した{形|かたち}で{自己|じこ}を{語|かた}ることができる。たとえば、{相手|あいて}がこちらのことを{勇|いさ}ましい{豪傑|ごうけつ}（{注|ちゅう}1）とみなしているなら、{自分|じぶん}の{中|なか}の{武勇伝|ぶゆうでん}（{注|ちゅう}2）{的|てき}なエピソードを{中心|ちゅうしん}に{語|かた}ることになるだろうし、{相手|あいて}がこちらのことを{温厚|おんこう}な{紳士|しんし}とみなしているなら、{自分|じぶん}の{中|なか}のおだやかな{部分|ぶぶん}を{中心|ちゅうしん}に{語|かた}ることになるだろう。{相手|あいて}との{文脈|ぶんみゃく}によって{語|かた}り{分|わ}けるからといって、けっしてだましているわけではない。どちらも{嘘|うそ}ではないのだ。

{困|こま}るのは、よく{知|し}らない{人|ひと}が{相手|あいて}である{場合|ばあい}だ。{共通|きょうつう}の{文脈|ぶんみゃく}ができあがっていないため、どのような{自分|じぶん}を{語|かた}り{出|だ}していけばよいのかがわからない。{逆|ぎゃく}に{言|い}えば、{共通|きょうつう}の{文脈|ぶんみゃく}による{制約|せいやく}がないぶん、どんな{自分|じぶん}でも{自由|じゆう}に{演出|えんしゅつ}し、{語|かた}り{出|だ}していくことができる。だからこそ、{迷|まよ}い、{悩|なや}んでしまうのだ。

こうした{事情|じじょう}からわかるのは、{僕|ぼく}たちは{自分|じぶん}のことをいろんなふうに{語|かた}ることができるということだ。

（{中略|ちゅうりゃく}）

{自分|じぶん}の{姿|すがた}がおぼろげ（{注|ちゅう}3）にしか{見|み}えないうちから、まずは{語|かた}ることを{始|はじ}めなければならない。

{語|かた}ることによって、{自分|じぶん}の{姿|すがた}が{語|かた}りの{方向|ほうこう}につくられていく。
（{榎本|えのもと}{博明|ひろあき}『〈ほんとうの{自分|じぶん}〉のつくり{方|かた}——{自己|じこ}{物語|ものがたり}の{心理学|しんりがく}』による）
（{注|ちゅう}1）{豪傑|ごうけつ}：{勇気|ゆうき}のある、{強|つよ}い{人|ひと}
（{注|ちゅう}2）{武勇伝|ぶゆうでん}{的|てき}な：ここでは、{勇|いさ}ましい
（{注|ちゅう}3）おぼろげに：ぼんやりと`,
      arti: `Menceritakan diri kepada orang yang kita kenal baik itu mudah, tetapi menceritakan diri kepada orang yang tidak saling mengenal dengan baik sangatlah sulit.

Dengan orang yang dikenal baik, sudah terbentuk konteks bersama, jadi cukup menampilkan diri yang sesuai konteks itu, sehingga kita bisa menceritakan diri hampir secara otomatis. Misalnya, jika lawan bicara menganggap kita pahlawan pemberani (catatan 1), kita akan bercerita terutama tentang kisah-kisah heroik (catatan 2) dalam diri kita; jika lawan bicara menganggap kita pria santun yang lembut, kita akan bercerita terutama tentang sisi tenang dalam diri kita. Meski bercerita secara berbeda sesuai konteks dengan lawan bicara, itu sama sekali bukan menipu. Keduanya bukan bohong.

Yang menyulitkan adalah ketika lawan bicaranya orang yang tidak dikenal baik. Karena belum terbentuk konteks bersama, kita tidak tahu diri seperti apa yang harus diceritakan. Sebaliknya, karena tidak ada batasan konteks bersama, kita bisa menampilkan dan menceritakan diri seperti apa pun dengan bebas. Justru karena itulah kita bimbang dan bingung.

Dari keadaan seperti ini kita tahu bahwa kita bisa menceritakan diri kita dengan berbagai cara.

(dipersingkat)

Bahkan ketika sosok diri kita masih tampak samar-samar (catatan 3), kita harus mulai bercerita terlebih dahulu.

Dengan bercerita, sosok diri kita terbentuk ke arah cerita itu.
(Dari buku karya Enomoto Hiroaki, cara membentuk "diri yang sebenarnya" – psikologi kisah diri)
(Catatan 1) 豪傑: orang yang berani dan kuat
(Catatan 2) 武勇伝的な: di sini, heroik
(Catatan 3) おぼろげに: samar-samar`,
    },
    "9-2": {
      yomi: `ウェブ{時代|じだい}に{突入|とつにゅう}して、{私|わたし}たちの{生活|せいかつ}は、{世界中|せかいじゅう}のありとあらゆる{情報|じょうほう}が{溢|あふ}れかえることとなった。その{量|りょう}は{膨大|ぼうだい}で、しかも、{時間|じかん}とともに{流|なが}れ{去|さ}ることもなく、データとして{刻々|こっこく}と{蓄|たくわ}えられ{続|つづ}けている。{一方|いっぽう}で、{私|わたし}たちの{毎日|まいにち}はといえば、{相|あい}も{変|か}わらず24{時間|じかん}しかなく、{寿命|じゅみょう}は80{年|ねん}{程度|ていど}だ。どうやったって、そのすべてを{網羅|もうら}することなどできない。

{私|わたし}たちは、{仕方|しかた}なく、どんな{情報|じょうほう}とも、どんな{言葉|ことば}とも、{忙|せわ}しく（{注|ちゅう}1）、{広|ひろ}く{浅|あさ}いつきあいをするようになって、ふと{我|われ}に{返|かえ}ると、{自分|じぶん}は{果|は}たして、{本当|ほんとう}に、{以前|いぜん}よりも、{世間|せけん}や{人間|にんげん}に{対|たい}する{理解|りかい}が{深|ふか}くなっているのだろうかと、{不安|ふあん}を{感|かん}じるようになっている。

そういう{時代|じだい}に、{小説|しょうせつ}は、まさしく「{小|ちい}さく{説|と}く」のである。

この{広大無辺|こうだいむへん}（{注|ちゅう}2）で、{複雑|ふくざつ}{極|きわ}まりない{世|よ}の{中|なか}を、そして、そこに{生|い}きる{人間|にんげん}の{心|こころ}の{奥底|おくそこ}を、{誰|だれ}の{手|て}のひらにも{収|おさ}まるほどのコンパクトなサイズに{圧縮|あっしゅく}して、{濃密|のうみつ}な{時間|じかん}とともに{体験|たいけん}させてくれる。それが、{小説|しょうせつ}だ。

{確|たし}かに{小説|しょうせつ}は、{絵|え}や{彫刻|ちょうこく}のように、{一目|ひとめ}で{見|み}ることのできる{物体|ぶったい}ではない。ある{一定量|いっていりょう}の{記号|きごう}の{連|つら}なりである{以上|いじょう}、{時間|じかん}をかけて、{前|まえ}から{順番|じゅんばん}に{最後|さいご}まで{辿|たど}っていかなければならない。しかし、その{間|あいだ}、{小説|しょうせつ}は{絶|た}えず、{読者|どくしゃ}に{語|かた}りかけ、{読者|どくしゃ}に{耳|みみ}を{貸|か}し、{読者|どくしゃ}の{手|て}を{引|ひ}き、{読者|どくしゃ}と{一緒|いっしょ}に{感|かん}じ、{一緒|いっしょ}に{考|かんが}える。それは、{途方|とほう}（{注|ちゅう}3）に{暮|く}れるような{情報|じょうほう}の{海|うみ}を{泳|およ}ぎ{回|まわ}るのとは、まったく{別|べつ}の{興奮|こうふん}を{与|あた}えてくれるはずだ。
（{平野|ひらの}{啓一郎|けいいちろう}『{小説|しょうせつ}の{読|よ}み{方|かた}―{感想|かんそう}が{語|かた}れる{着眼点|ちゃくがんてん}』による）
（{注|ちゅう}1）{忙|せわ}しく：ここでは、{時間|じかん}に{追|お}い{立|た}てられるように
（{注|ちゅう}2）{広大無辺|こうだいむへん}で：{限|かぎ}りなく{広|ひろ}くて
（{注|ちゅう}3）{途方|とほう}に{暮|く}れる：どうしたらよいかわからなくなる`,
      arti: `Memasuki era web, kehidupan kita dibanjiri segala macam informasi dari seluruh dunia. Jumlahnya sangat besar, dan lagi tidak mengalir hilang seiring waktu, melainkan terus disimpan dari waktu ke waktu sebagai data. Sementara itu, hari-hari kita tetap saja hanya 24 jam, dan umur kita sekitar 80 tahun. Bagaimanapun caranya, kita tidak mungkin mencakup semuanya.

Mau tak mau, kita jadi bergaul dengan informasi dan kata-kata apa pun secara tergesa-gesa (catatan 1), luas tetapi dangkal, dan ketika tiba-tiba tersadar, kita mulai cemas: apakah aku benar-benar lebih memahami masyarakat dan manusia daripada dulu?

Di zaman seperti itu, novel benar-benar "menjelaskan dalam ukuran kecil" (小説 = 小さく説く).

Dunia yang tak terbatas luasnya (catatan 2) dan teramat rumit ini, juga lubuk hati terdalam manusia yang hidup di dalamnya, dipadatkan menjadi ukuran ringkas yang muat di telapak tangan siapa pun, dan kita diajak mengalaminya bersama waktu yang padat. Itulah novel.

Memang novel bukan benda yang bisa dilihat sekilas seperti lukisan atau patung. Karena merupakan rangkaian simbol dalam jumlah tertentu, kita harus meluangkan waktu dan menelusurinya berurutan dari depan sampai akhir. Namun, selama itu, novel tak henti-hentinya berbicara kepada pembaca, mendengarkan pembaca, menuntun tangan pembaca, merasakan bersama pembaca, dan berpikir bersama pembaca. Itu pasti memberi kegembiraan yang sama sekali berbeda dari berenang di lautan informasi yang membuat kita kehilangan arah (catatan 3).
(Dari buku karya Hirano Keiichiro, cara membaca novel – sudut pandang agar bisa menyampaikan kesan)
(Catatan 1) 忙しく: di sini, seperti dikejar-kejar waktu
(Catatan 2) 広大無辺で: luas tanpa batas
(Catatan 3) 途方に暮れる: tidak tahu harus berbuat apa`,
    },
    "9-3": {
      yomi: `{一日|いちにち}に{八時間|はちじかん}{眠|ねむ}るのが{人間|にんげん}{社会|しゃかい}の{決|き}まりごとであるかのように{言|い}う{人|ひと}がいる。それには{何|なに}か{特別|とくべつ}な{根拠|こんきょ}があるのか。{睡眠|すいみん}は、もともとは、{適応|てきおう}のための{技術|ぎじゅつ}である。さまざまな{身体|しんたい}{内部|ないぶ}および{外部|がいぶ}の{環境|かんきょう}{条件|じょうけん}に{合|あ}わせて、{脳|のう}をうまく{休息|きゅうそく}させ、よりよく{活動|かつどう}させるための{柔軟|じゅうなん}な{生存|せいぞん}{戦略|せんりゃく}である。{多少|たしょう}の{無理|むり}や{融通|ゆうずう}が{利|き}かないはずはない。

しかも、{眠|ねむ}ることは{筋肉|きんにく}を{緩|ゆる}ませる、{意識|いしき}レベルを{下|さ}げる、{栄養|えいよう}{補給|ほきゅう}を{断|た}つなどの{危険|きけん}を{伴|ともな}う“{命懸|いのちが}け”の{行為|こうい}だ。それだけに、{睡眠中|すいみんちゅう}の{安全|あんぜん}が{確保|かくほ}できる{条件|じょうけん}を{整|ととの}えてからでないと、{眠|ねむ}るわけにはいかないというのが{生|い}き{物|もの}の{鉄則|てっそく}だ。また、{優先|ゆうせん}してなすべきことがほかにあるから、{睡眠|すいみん}は、すなおに{順位|じゅんい}をそちらに{譲|ゆず}るのが{通例|つうれい}だ。

そうなると、{安心|あんしん}して{睡眠|すいみん}に{割|わ}り{当|あ}てられる{時間|じかん}は、かなりかぎられたものになってしまう。{一日|いちにち}のうちのかぎられた{条件|じょうけん}と{時間|じかん}のもとでうまく{眠|ねむ}り、うまく{目覚|めざ}めるために、{高等|こうとう}{動物|どうぶつ}は{進化|しんか}の{過程|かてい}でさまざまな{方式|ほうしき}を{開発|かいはつ}してきた。だから、{睡眠|すいみん}は{本来|ほんらい}{多様性|たようせい}に{富|と}むものだ。

{人間|にんげん}の{睡眠|すいみん}も、{生物学的|せいぶつがくてき}にはまったく{同様|どうよう}の{適応力|てきおうりょく}を{備|そな}えている。しかし、{人間|にんげん}は{文明|ぶんめい}の{発達|はったつ}とともに、{睡眠|すいみん}を{人為的|じんいてき}な{規則|きそく}で{拘束|こうそく}した。{社会|しゃかい}{活動|かつどう}や{季節|きせつ}{変化|へんか}などをもとにして、{睡眠|すいみん}の{持|も}つ{多様性|たようせい}を{一定|いってい}の{枠|わく}の{中|なか}に{押|お}し{込|こ}めてしまったのだ。

こうして、{世|よ}の{中|なか}では、{大人|おとな}は{一日|いちにち}に{八時間|はちじかん}まとめて{寝|ね}るのが{基準|きじゅん}であるかのように{考|かんが}える{傾向|けいこう}が{定着|ていちゃく}した。ここから、{睡眠|すいみん}{時間|じかん}の{負債|ふさい}を{気|き}にするという{不幸|ふこう}が{発生|はっせい}したのだ。{一日|いちにち}に{八時間|はちじかん}くらい{寝床|ねどこ}の{中|なか}で{過|す}ごす{人|ひと}が{大半|たいはん}を{占|し}めるにせよ、この{数値|すうち}に{生物学的|せいぶつがくてき}な{根拠|こんきょ}はない。
（{井上|いのうえ}{昌次郎|しょうじろう}『{睡眠|すいみん}の{技術|ぎじゅつ}――{今日|きょう}からぐっすり{眠|ねむ}れる{本|ほん}』による）`,
      arti: `Ada orang yang berbicara seolah-olah tidur delapan jam sehari adalah aturan masyarakat manusia. Apakah itu punya dasar khusus? Tidur pada mulanya adalah teknik untuk beradaptasi. Ia adalah strategi bertahan hidup yang luwes untuk mengistirahatkan otak dengan baik dan membuatnya lebih aktif, menyesuaikan dengan berbagai kondisi lingkungan di dalam dan di luar tubuh. Tidak mungkin tidak bisa dipaksakan atau disesuaikan sedikit.

Lagi pula, tidur adalah tindakan "taruhan nyawa" yang disertai bahaya seperti melemaskan otot, menurunkan tingkat kesadaran, dan memutus asupan nutrisi. Justru karena itu, hukum besi makhluk hidup adalah tidak boleh tidur sebelum menyiapkan kondisi yang menjamin keamanan selama tidur. Selain itu, karena ada hal lain yang harus diutamakan, biasanya tidur dengan patuh memberikan prioritasnya kepada hal itu.

Kalau begitu, waktu yang bisa dialokasikan untuk tidur dengan tenang menjadi cukup terbatas. Agar bisa tidur dan bangun dengan baik dalam kondisi dan waktu yang terbatas dalam sehari, hewan tingkat tinggi telah mengembangkan berbagai cara dalam proses evolusi. Karena itu, tidur pada dasarnya kaya keragaman.

Tidur manusia pun secara biologis memiliki daya adaptasi yang sama persis. Namun, seiring kemajuan peradaban, manusia mengekang tidur dengan aturan buatan manusia. Berdasarkan aktivitas sosial dan perubahan musim, keragaman yang dimiliki tidur dijejalkan ke dalam kerangka tertentu.

Dengan demikian, di masyarakat mengakar kecenderungan menganggap seolah-olah standar orang dewasa adalah tidur delapan jam sekaligus dalam sehari. Dari sinilah lahir kemalangan berupa mengkhawatirkan "utang" waktu tidur. Meskipun sebagian besar orang menghabiskan sekitar delapan jam sehari di tempat tidur, angka ini tidak punya dasar biologis.
(Dari buku karya Inoue Shojiro, "Teknik Tidur – buku agar bisa tidur nyenyak mulai hari ini")`,
    },

    // ── 問題10：骨董屋と金継ぎ ──
    "10": {
      yomi: `{最寄|もよ}り{駅|えき}へと{向|む}かう{途中|とちゅう}、{骨董屋|こっとうや}さんの{前|まえ}を{通|とお}る。

その{店|みせ}が{越|こ}して{来|き}たのは{十年|じゅうねん}ほど{前|まえ}だろうか。はっきりした{記憶|きおく}はないのだが、{夫|おっと}のひとことで{興味|きょうみ}を{持|も}った。「{毎日|まいにち}どんどん{売|う}れる{商売|しょうばい}じゃないだろうけど、それにしても{客|きゃく}が{入|はい}っているのを{見|み}たことないよね」という。{確|たし}かにいつもひっそりと、{主|あるじ}とおぼしき{人|ひと}は{店|みせ}の{奥|おく}にじっと{座|すわ}っているばかり。{宅配便|たくはいびん}の{梱包|こんぽう}された{包|つつ}みがたくさん{置|お}かれていることから、ネット{販売|はんばい}{専門|せんもん}の{店|みせ}なのだろうか。{夫|おっと}はその{後|ご}も①{不思議|ふしぎ}がっていた。

それから{一年|いちねん}ほどして、ふいに{謎|なぞ}が{解|と}けた。

{面識|めんしき}はないが、{時|とき}おり{読|よ}んでいた{同|どう}{世代|せだい}の{女性|じょせい}のブログ（{注|ちゅう}1）にこの{店|みせ}を{訪|たず}ねた{話|はなし}が{載|の}っていた。{壊|こわ}れてしまった{陶器|とうき}の{修理|しゅうり}を{頼|たの}みに{行|い}ったというのである。{漆|うるし}（{注|ちゅう}2）を{使|つか}った{金継|きんつ}ぎ、{銀継|ぎんつ}ぎと{呼|よ}ばれる{手法|しゅほう}で{損|そこ}なわれた{部分|ぶぶん}を{修復|しゅうふく}するのだが、その{仕上|しあ}がりは{瑕疵|かし}ではなく、{景色|けしき}に{見立|みた}てることができるほど{美|うつく}しい。

{思|おも}いがけない{近所|きんじょ}にそんな{専門|せんもん}の{工房|こうぼう}（{注|ちゅう}3）があったとは。{新鮮|しんせん}な{驚|おどろ}きとともに、②ひと{筋|すじ}の{光|ひかり}が{射|さ}し{込|こ}んで{来|く}る{思|おも}いがした。{我|わ}が{家|や}にも{欠|か}けたからといって{捨|す}てられず、{破片|はへん}をそっと{薄紙|うすがみ}に{包|つつ}んだままにしているものがある。{祖母|そぼ}が{求|もと}め、そして{壊|こわ}してしまった{十客|じっきゃく}{揃|ぞろ}いの{小鉢|こばち}（{注|ちゅう}4）のひとつ。{義父|ぎふ}が{好|この}んで{使|つか}っていたという{杯|さかずき}。これらを{元|もと}の{形|かたち}にもどすことができたら、どんなに{心|こころ}{和|なご}むことだろう。

さっそく{店|みせ}を{訪|たず}ねてみると、「やあ、いらっしゃい」と{主|あるじ}はまるでなじみの{客|きゃく}のように{迎|むか}えてくれた。{作業|さぎょう}の{合間|あいま}に{手|て}をゆるめて（{注|ちゅう}5）いることがあって、{店|みせ}の{前|まえ}の{人|ひと}の{行|ゆ}き{来|き}を{眺|なが}めている。「だから{近所|きんじょ}に{住|す}んでいる{人|ひと}のことはなんとなくわかるんです。」{見|み}ているのはこちらばかりと{思|おも}ったら{大|おお}{間違|まちが}いだ。

③すっかり{気|き}が{楽|らく}になって、こちらの{事情|じじょう}を{打|う}ち{明|あ}けた。

（{中略|ちゅうりゃく}）

{買替|かいか}えた{方|ほう}が{安|やす}あがりとわかっているものでも、{使|つか}いつづけた{愛着|あいちゃく}があって{手放|てばな}せないという{人|ひと}が{増|ふ}えている。{一方|いっぽう}で、{高価|こうか}な{器|うつわ}を{使|つか}うお{料理屋|りょうりや}さんが、{段|だん}ボールいっぱい{送|おく}りつけてくることもある。「{前|まえ}に{修理|しゅうり}したものがまた{新|あら}たに{壊|こわ}れてもどってきたり。{時々|ときどき}、どういう{扱|あつか}いをしてるのかなと{思|おも}うことがありますよ。」

{形|かたち}あるものはいずれは{壊|こわ}れる。この{道理|どうり}があるから、{歳月|さいげつ}を{経|へ}て{伝|つた}えられたものに{感謝|かんしゃ}の{念|ねん}も{湧|わ}くし、{儚|はかな}さと{美|うつく}しさは{同義|どうぎ}でもある。うっかり{手|て}を{滑|すべ}らせる（{注|ちゅう}6）{瞬間|しゅんかん}は{誰|だれ}にもあり、{取|と}り{返|かえ}しのつかない（{注|ちゅう}7）{事実|じじつ}に{直面|ちょくめん}すると、ため{息|いき}が{出|で}るほど{心|こころ}に{重|おも}い。

{金継|きんつ}ぎはそんな{心|こころ}の{痛手|いたで}までやさしくいたわってくれる{伝統|でんとう}の{技術|ぎじゅつ}だ。もしもの{時|とき}に{助|たす}けてくれる{人|ひと}がいると{思|おも}うと{心底|しんそこ}{有|あ}り{難|がた}い。けれど、だからこそ{指先|ゆびさき}には{神経|しんけい}を{使|つか}ってぞんざいな{扱|あつか}いはすまいと、{見事|みごと}に{修復|しゅうふく}された{器|うつわ}を{手|て}に{思|おも}っている。
（{青木|あおき}{奈緒|なお}『{暮|くら}しの{手帖|てちょう}』2014{年|ねん}10-11{月|がつ}{号|ごう}による）
（{注|ちゅう}1）ブログ：{日記|にっき}{形式|けいしき}のウェブサイト
（{注|ちゅう}2）{漆|うるし}を{使|つか}った{金継|きんつ}ぎ、{銀継|ぎんつ}ぎと{呼|よ}ばれる{手法|しゅほう}：{陶器|とうき}の{修理|しゅうり}{方法|ほうほう}の{名称|めいしょう}
（{注|ちゅう}3）{工房|こうぼう}：ここでは、{仕事場|しごとば}
（{注|ちゅう}4）{十客|じっきゃく}{揃|ぞろ}いの{小鉢|こばち}：{十個|じっこ}{揃|そろ}った{小|ちい}さな{器|うつわ}
（{注|ちゅう}5）{手|て}をゆるめる：ここでは、{休憩|きゅうけい}する
（{注|ちゅう}6）{手|て}を{滑|すべ}らせる：ここでは、{落|お}とす
（{注|ちゅう}7）{取|と}り{返|かえ}しのつかない：{元|もと}の{状態|じょうたい}に{戻|もど}すことのできない`,
      arti: `Dalam perjalanan ke stasiun terdekat, saya melewati depan sebuah toko barang antik.

Mungkin toko itu pindah ke sini sekitar sepuluh tahun lalu. Saya tidak ingat pasti, tetapi saya jadi tertarik karena satu ucapan suami. Katanya, "Mungkin bukan usaha yang laris setiap hari, tapi tetap saja, aku belum pernah lihat ada pembeli masuk, ya." Memang selalu sepi; orang yang tampaknya pemiliknya hanya duduk diam di bagian dalam toko. Dari banyaknya paket kiriman yang sudah dibungkus, apakah toko itu khusus berjualan daring? Suami saya sesudahnya pun ① terus merasa heran.

Sekitar setahun kemudian, misteri itu tiba-tiba terpecahkan.

Di blog (catatan 1) seorang wanita seangkatan yang tidak saya kenal tetapi sesekali saya baca, dimuat cerita kunjungannya ke toko ini. Katanya ia pergi meminta perbaikan keramik yang pecah. Bagian yang rusak diperbaiki dengan teknik yang disebut kintsugi dan gintsugi yang memakai pernis urushi (catatan 2), dan hasilnya begitu indah sehingga bukan dianggap cacat, melainkan bisa dinikmati sebagai pemandangan.

Tak disangka ada bengkel (catatan 3) khusus seperti itu di dekat rumah. Bersama rasa kaget yang segar, ② terasa seberkas cahaya masuk. Di rumah kami pun ada barang yang meski sompek tidak bisa dibuang, dan pecahannya masih saya bungkus pelan-pelan dengan kertas tipis. Salah satu dari satu set mangkuk kecil isi sepuluh (catatan 4) yang dibeli nenek lalu dipecahkannya. Cawan sake yang katanya disukai mertua saya. Alangkah lega hati ini kalau semua itu bisa kembali ke bentuk semula.

Begitu saya segera mengunjungi toko itu, pemiliknya menyambut, "Wah, selamat datang," seolah saya pelanggan langganan. Ada kalanya di sela pekerjaan ia beristirahat (catatan 5) dan memandangi orang yang lalu-lalang di depan toko. "Jadi, saya kurang lebih tahu orang-orang yang tinggal di sekitar sini." Salah besar kalau saya kira hanya kami yang mengamati.

③ Saya menjadi sangat lega dan menceritakan keadaan saya.

(dipersingkat)

Makin banyak orang yang, meski tahu membeli baru lebih murah, tidak bisa melepaskan barang karena rasa sayang setelah lama memakainya. Di sisi lain, ada juga restoran yang memakai peralatan makan mahal mengirimkan satu kardus penuh. "Kadang barang yang dulu diperbaiki kembali lagi karena pecah lagi. Kadang saya bertanya-tanya, bagaimana sih mereka memperlakukannya."

Benda yang berbentuk suatu saat pasti pecah. Karena ada hukum ini, rasa syukur muncul terhadap benda yang diwariskan melewati tahun-tahun, dan kefanaan sama artinya dengan keindahan. Setiap orang punya saat tak sengaja menjatuhkan (catatan 6), dan ketika menghadapi kenyataan yang tak bisa dipulihkan (catatan 7), hati terasa begitu berat sampai menghela napas.

Kintsugi adalah teknik tradisional yang dengan lembut merawat bahkan luka hati seperti itu. Memikirkan ada orang yang bisa menolong saat terjadi sesuatu, saya sungguh bersyukur. Tetapi justru karena itulah, sambil memegang peralatan makan yang diperbaiki dengan indah, saya berpikir akan berhati-hati dengan ujung jari dan tidak memperlakukannya dengan sembarangan.
(Dari tulisan Aoki Nao, majalah "Kurashi no Techo" edisi Oktober–November 2014)
(Catatan 1) ブログ: situs web berformat buku harian
(Catatan 2) Teknik kintsugi dan gintsugi dengan urushi: nama metode perbaikan keramik
(Catatan 3) 工房: di sini, tempat kerja
(Catatan 4) 十客揃いの小鉢: sepuluh wadah kecil satu set
(Catatan 5) 手をゆるめる: di sini, beristirahat
(Catatan 6) 手を滑らせる: di sini, menjatuhkan
(Catatan 7) 取り返しのつかない: tidak bisa dikembalikan ke keadaan semula`,
    },

    // ── 問題11：外来語・外国語 ──
    "11": {
      yomi: `【{意見|いけん} A】
{国際化|こくさいか}の{進展|しんてん}や{新|しん}{技術|ぎじゅつ}の{開発|かいはつ}などに{伴|ともな}って、{新|あたら}しい{概念|がいねん}やニュアンスの{提示|ていじ}など、{外来語|がいらいご}・{外国語|がいこくご}（{注|ちゅう}）を{使用|しよう}せざるを{得|え}ない{面|めん}があり、また、{既|すで}に{外来語|がいらいご}・{外国語|がいこくご}を{用|もち}いた{方|ほう}がその{日本語|にほんご}{訳|やく}よりも{分|わ}かりやすい{場合|ばあい}もある。そうした{場合|ばあい}は{別|べつ}として、{一般的|いっぱんてき}には、{相手|あいて}や{目的|もくてき}に{応|おう}じて{十分|じゅうぶん}な{配慮|はいりょ}の{上|うえ}に、その{外来語|がいらいご}や{外国語|がいこくご}を{使用|しよう}するか{否|いな}かの{判断|はんだん}がなされる{必要|ひつよう}があろう。{外来語|がいらいご}・{外国語|がいこくご}は{基本的|きほんてき}にその{語|ご}に{対|たい}する{知識|ちしき}がないと{伝達|でんたつ}{不能|ふのう}になることが{多|おお}い。そういう{意味|いみ}で、{広|ひろ}く{国民|こくみん}{一般|いっぱん}を{対象|たいしょう}にしている{官公庁|かんこうちょう}、{新聞|しんぶん}・{放送|ほうそう}{等|とう}では、{簡単|かんたん}に{日本語|にほんご}に{言|い}い{換|か}えられる{外来語|がいらいご}・{外国語|がいこくご}や{耳慣|みみな}れない{外来語|がいらいご}・{外国語|がいこくご}などは{安易|あんい}に{使|つか}わないようにすべきである。
（{文化庁|ぶんかちょう}ウェブサイトによる）
（{注|ちゅう}）{外来語|がいらいご}・{外国語|がいこくご}：ここでは、{片仮名|かたかな}{語|ご}

【{意見|いけん} B】
「ユーザー」、「ケア」など{多|おお}くの{外来語|がいらいご}・{外国語|がいこくご}が{私|わたし}たちの{生活|せいかつ}の{中|なか}にあふれている。{外来語|がいらいご}・{外国語|がいこくご}は{意味|いみ}があいまいなので{使用|しよう}すべきではないという{声|こえ}も{多|おお}い。しかし、グローバル{化|か}する{現代|げんだい}では、{既存|きそん}の{日本語|にほんご}で{置|お}き{換|か}えにくい{新|あたら}しい{概念|がいねん}や{事象|じしょう}を{表|あらわ}す{上|うえ}で、{外来語|がいらいご}・{外国語|がいこくご}を{使|つか}うのは{仕方|しかた}がないことだ。

{一方|いっぽう}、ある{調査|ちょうさ}によると、{若|わか}い{世代|せだい}は{外来語|がいらいご}・{外国語|がいこくご}{使用|しよう}の{増加|ぞうか}を{容認|ようにん}し、{使用|しよう}する{割合|わりあい}が{高|たか}いが、{年齢|ねんれい}の{高|たか}い{世代|せだい}ではその{割合|わりあい}が{低|ひく}いそうだ。このような{違|ちが}いが、{世代|せだい}{間|かん}のコミュニケーションの{障害|しょうがい}になるという{心配|しんぱい}もある。また、{年齢|ねんれい}が{高|たか}くなってから{利用|りよう}{機会|きかい}が{多|おお}くなる{医療|いりょう}や{福祉|ふくし}の{分野|ぶんや}で、{外来語|がいらいご}・{外国語|がいこくご}の{使用|しよう}が{多|おお}いことも{問題|もんだい}だ。{外来語|がいらいご}・{外国語|がいこくご}を{使用|しよう}する{際|さい}には、{相手|あいて}が{理解|りかい}できるかどうかを{考|かんが}えることも{大切|たいせつ}だ。`,
      arti: `[Pendapat A]
Seiring kemajuan internasionalisasi dan pengembangan teknologi baru, ada sisi di mana kita terpaksa memakai kata serapan/bahasa asing (catatan), misalnya untuk menyajikan konsep atau nuansa baru, dan ada juga kasus di mana kata serapan/bahasa asing sudah lebih mudah dipahami daripada terjemahan Jepangnya. Terlepas dari kasus seperti itu, pada umumnya perlu diputuskan apakah akan memakai kata serapan atau bahasa asing tersebut dengan pertimbangan yang cukup sesuai lawan bicara dan tujuan. Kata serapan/bahasa asing pada dasarnya sering tidak tersampaikan jika tidak ada pengetahuan tentang kata itu. Dalam arti itu, instansi pemerintah, koran, siaran, dan sebagainya yang menyasar masyarakat luas sebaiknya tidak sembarangan memakai kata serapan/bahasa asing yang mudah diganti dengan bahasa Jepang atau yang tidak lazim didengar.
(Dari situs web Badan Urusan Kebudayaan)
(Catatan) 外来語・外国語: di sini, kata berhuruf katakana

[Pendapat B]
Banyak kata serapan/bahasa asing seperti "user" dan "care" membanjiri kehidupan kita. Banyak juga yang berpendapat kata serapan/bahasa asing tidak sebaiknya dipakai karena artinya samar. Namun, di zaman yang mengglobal sekarang, memakai kata serapan/bahasa asing untuk mengungkapkan konsep atau fenomena baru yang sulit diganti dengan bahasa Jepang yang ada adalah hal yang tak terhindarkan.

Di sisi lain, menurut suatu survei, generasi muda menerima bertambahnya pemakaian kata serapan/bahasa asing dan persentase pemakaiannya tinggi, sedangkan pada generasi yang lebih tua persentasenya rendah. Ada kekhawatiran perbedaan seperti ini menjadi hambatan komunikasi antargenerasi. Selain itu, banyaknya pemakaian kata serapan/bahasa asing di bidang medis dan kesejahteraan, yang makin sering dipakai setelah usia lanjut, juga merupakan masalah. Saat memakai kata serapan/bahasa asing, penting juga memikirkan apakah lawan bicara bisa memahaminya.`,
    },

    // ── 問題12：文化としての科学 ──
    "12": {
      yomi: `{私|わたし}は、{科学|かがく}が{再|ふたた}び{文化|ぶんか}のみに{寄与|きよ}する{営|いとな}みを{取|と}り{戻|もど}すべきと{考|かんが}えている。{壁|かべ}に{飾|かざ}られたピカソの{絵|え}のように、なければないで{済|す}ませられるが、そこにあれば{楽|たの}しい、なければ{何|なに}か{心|こころ}の{空白|くうはく}を{感|かん}じてしまう、そんな「{無用|むよう}の{用|よう}」としての{科学|かがく}である。{世|よ}の{中|なか}に{役立|やくだ}とうというような{野心|やしん}を{捨|す}て、{自然|しぜん}と{戯|たわむ}れ（{注|ちゅう}1）ながら{自然|しぜん}の{偉大|いだい}さを{学|まな}んでいく{科学|かがく}で{良|よ}いのではないだろうか。{好奇心|こうきしん}、{探求心|たんきゅうしん}、{美|び}を{求|もと}める{心|こころ}、{想像|そうぞう}する{力|ちから}、{普遍性|ふへんせい}への{憧|あこが}れ、そのような{人間|にんげん}の{感性|かんせい}を{最大限|さいだいげん}{練磨|れんま}（{注|ちゅう}2）して、{人間|にんげん}の{可能性|かのうせい}を{拡大|かくだい}する{営|いとな}みのことである。

むろん、{経済|けいざい}{一辺倒|いっぺんとう}の{現代|げんだい}{社会|しゃかい}では、そんな{原初的|げんしょてき}な{科学|かがく}は{許|ゆる}されない。{一般|いっぱん}に{文化|ぶんか}の{創造|そうぞう}には{金|かね}がかかる。ましてや{科学|かがく}は{高価|こうか}な{実験|じっけん}{器具|きぐ}やコンピューターを{必要|ひつよう}とするから{一定|いってい}の{投資|とうし}をしなければならず、そうすれば{必|かなら}ずその{分|ぶん}の{見返|みかえ}りが{要求|ようきゅう}される。「{文化|ぶんか}より{明日|あした}のコメを」という{声|こえ}も{絶|た}えることがない。{社会|しゃかい}もムダと{思|おも}われるものに{金|かね}を{投|とう}ずるのを{忌避|きひ}（{注|ちゅう}3）するからだ。それが「{役|やく}に{立|た}つ」{科学|かがく}とならねばならない{要因|よういん}で、{科学者|かがくしゃ}もセールスマンのように{次々|つぎつぎ}に{目新|めあたら}しい{商品|しょうひん}を{用意|ようい}して{社会|しゃかい}の{要求|ようきゅう}に{迎合|げいごう}していかねばならなくなる。それを{逆手|さかて}にとって、あたかも{世|よ}の{中|なか}を{牛耳|ぎゅうじ}（{注|ちゅう}4）っているかのように{尊大|そんだい}に{振舞|ふるま}う{科学者|かがくしゃ}すら{登場|とうじょう}するようになった。これほど{社会|しゃかい}に{貢献|こうけん}しているのだから、もっと{金|かね}をよこせ（{注|ちゅう}5）というわけである。{金|かね}を{通|とお}しての{科学者|かがくしゃ}と{社会|しゃかい}の{綱引|つなひ}き（{注|ちゅう}6）{状態|じょうたい}と{言|い}えるだろうか。

それでいいのかと{改|あらた}めて{考|かんが}え{直|なお}してみる{必要|ひつよう}がある。{確|たし}かに{科学|かがく}には{金|かね}がかかり、それには{社会|しゃかい}の{支持|しじ}が{欠|か}かせない。「{無用|むよう}の{用|よう}」にすらならないムダも{多|おお}いだろう。しかし、ときに{科学|かがく}は{世界|せかい}の{見方|みかた}を{変|か}える{大|おお}きな{力|ちから}を{秘|ひ}めている。{事実|じじつ}、{科学|かがく}はその{力|ちから}によって{自然観|しぜんかん}や{世界観|せかいかん}を{一変|いっぺん}させ、{社会|しゃかい}のありように{大|おお}きな{変化|へんか}をもたらしてきた。{社会|しゃかい}への{見返|みかえ}りとは、そのような{概念|がいねん}や{思想|しそう}を{提供|ていきょう}する{役目|やくめ}にあるのではないか。それは{万|まん}に{一|ひと}つくらいの{確率|かくりつ}であるかもしれないが、{科学|かがく}の{営|いとな}み{抜|ぬ}きにしては{起|お}こり{得|え}ない{貢献|こうけん}である。むろん、{天才|てんさい}の{登場|とうじょう}を{必要|ひつよう}とする{場合|ばあい}が{多|おお}いが、その{陰|かげ}には{無数|むすう}の{無名|むめい}の{科学者|かがくしゃ}がいたことを{忘|わす}れてはならない。それらの{積|つ}み{上|あ}げがあってこそ{天才|てんさい}も{活躍|かつやく}できるのである。

{今|いま}{必要|ひつよう}なのは、「{文化|ぶんか}としての{科学|かがく}」を{広|ひろ}く{市民|しみん}に{伝|つた}えることであり、{科学|かがく}の{楽|たの}しみを{市民|しみん}とともに{共有|きょうゆう}することである。{実際|じっさい}、{本当|ほんとう}のところ{市民|しみん}は「{役|やく}に{立|た}つ{科学|かがく}」ではなく、「{役|やく}に{立|た}たないけれど{知的|ちてき}なスリルを{味|あじ}わえる{科学|かがく}」を{求|もと}めている。{市民|しみん}も{知的|ちてき}{冒険|ぼうけん}をしたいのだ。（{中略|ちゅうりゃく}）{科学|かがく}の{行為|こうい}は{科学者|かがくしゃ}という{人間|にんげん}の{営|いとな}みだから、そこには{数多|かずおお}くのエピソードがあり、{成功|せいこう}も{失敗|しっぱい}もある。それらも{一緒|いっしょ}に{紡|つむ}ぎ{合|あ}わせることによって「{文化|ぶんか}としての{科学|かがく}」が{豊|ゆた}かになっていくのではないだろうか。それが{結果的|けっかてき}に{市民|しみん}に{勇気|ゆうき}や{喜|よろこ}びを{与|あた}えると{信|しん}じている。
（{池内|いけうち}{了|さとる}『{科学|かがく}の{限界|げんかい}』による）
（{注|ちゅう}1）{戯|たわむ}れる：ここでは、{触|ふ}れ{合|あ}う
（{注|ちゅう}2）{練磨|れんま}する：{鍛|きた}えて{磨|みが}く
（{注|ちゅう}3）{忌避|きひ}する：{嫌|きら}って{避|さ}ける
（{注|ちゅう}4）{牛耳|ぎゅうじ}る：{思|おも}い{通|どお}りに{動|うご}かす
（{注|ちゅう}5）よこせ：くれ
（{注|ちゅう}6）{綱引|つなひ}き{状態|じょうたい}：ここでは、{引|ひ}っ{張|ぱ}り{合|あ}い{状態|じょうたい}`,
      arti: `Saya berpendapat sains harus kembali menjadi kegiatan yang hanya berkontribusi pada budaya. Seperti lukisan Picasso yang tergantung di dinding: kalau tidak ada pun tidak apa-apa, tetapi kalau ada menyenangkan, dan kalau tidak ada terasa ada kekosongan di hati; sains sebagai "manfaat dari yang tak berguna" seperti itu. Bukankah cukup sains yang membuang ambisi untuk berguna bagi dunia, dan mempelajari keagungan alam sambil bercengkerama (catatan 1) dengan alam? Yaitu kegiatan yang mengasah (catatan 2) semaksimal mungkin kepekaan manusia seperti rasa ingin tahu, semangat mencari, hati yang mendambakan keindahan, daya imajinasi, dan kerinduan akan universalitas, untuk memperluas potensi manusia.

Tentu saja, dalam masyarakat modern yang serba ekonomi, sains asali seperti itu tidak diizinkan. Umumnya penciptaan budaya memerlukan uang. Terlebih sains, yang memerlukan peralatan eksperimen dan komputer mahal, harus mendapat investasi tertentu, dan kalau begitu pasti dituntut imbalan setimpal. Suara "beras untuk besok daripada budaya" pun tak pernah putus. Sebab masyarakat juga menghindari (catatan 3) mengeluarkan uang untuk hal yang dianggap sia-sia. Itulah sebab sains harus menjadi sains yang "berguna", dan ilmuwan pun seperti pedagang harus terus menyiapkan produk baru demi menuruti tuntutan masyarakat. Bahkan muncul ilmuwan yang memanfaatkan hal itu dan bersikap angkuh seolah-olah menguasai (catatan 4) dunia. Maksudnya, "kami sudah sebegini berkontribusi pada masyarakat, jadi berikan (catatan 5) lebih banyak uang." Mungkin bisa disebut keadaan tarik tambang (catatan 6) antara ilmuwan dan masyarakat melalui uang.

Perlu dipikirkan ulang apakah itu sudah benar. Memang sains memerlukan uang, dan untuk itu dukungan masyarakat tak tergantikan. Mungkin banyak pula pemborosan yang bahkan tidak menjadi "manfaat dari yang tak berguna". Namun, kadang sains menyimpan kekuatan besar untuk mengubah cara memandang dunia. Kenyataannya, dengan kekuatan itu sains telah mengubah total pandangan tentang alam dan dunia, serta membawa perubahan besar pada wujud masyarakat. Bukankah imbalan bagi masyarakat itu terletak pada peran menyediakan konsep dan pemikiran seperti itu? Mungkin peluangnya hanya satu banding sepuluh ribu, tetapi itu kontribusi yang tidak mungkin terjadi tanpa kegiatan sains. Tentu saja sering diperlukan munculnya seorang jenius, tetapi jangan lupa bahwa di baliknya ada ilmuwan tak bernama yang tak terhitung jumlahnya. Justru karena ada tumpukan usaha mereka, sang jenius bisa berkiprah.

Yang diperlukan sekarang adalah menyampaikan "sains sebagai budaya" secara luas kepada masyarakat, dan berbagi kesenangan sains bersama masyarakat. Kenyataannya, sesungguhnya masyarakat tidak mencari "sains yang berguna", melainkan "sains yang tidak berguna tetapi memberi sensasi intelektual". Masyarakat pun ingin bertualang secara intelektual. (dipersingkat) Karena kegiatan sains adalah kegiatan manusia bernama ilmuwan, di sana ada banyak kisah, ada keberhasilan dan kegagalan. Bukankah dengan merajut semua itu bersama, "sains sebagai budaya" menjadi kaya? Saya yakin itu pada akhirnya memberi keberanian dan kegembiraan kepada masyarakat.
(Dari buku karya Ikeuchi Satoru, "Batas Sains")
(Catatan 1) 戯れる: di sini, berinteraksi
(Catatan 2) 練磨する: menempa dan mengasah
(Catatan 3) 忌避する: menghindari karena tidak suka
(Catatan 4) 牛耳る: menggerakkan sesuka hati
(Catatan 5) よこせ: berikan
(Catatan 6) 綱引き状態: di sini, keadaan saling tarik`,
    },

    // ── 問題13：りんどうスポーツジム ──
    "13": {
      yomi: `{広々|ひろびろ}としたトレーニングジムとプールで、{楽|たの}しく{汗|あせ}を{流|なが}しませんか。

{営業|えいぎょう}{時間|じかん}
{月|げつ}～{金|きん}　8：00～23：00　　{土|ど}　8：00～21：00　　{日|にち}：9：00～20：00
{祝日|しゅくじつ}の{場合|ばあい}は20：00で{営業|えいぎょう}{終了|しゅうりょう}します。

{料金表|りょうきんひょう}　{曜日|ようび}や{時間|じかん}など、ご{自身|じしん}に{合|あ}ったプランをお{選|えら}びください。

プラン　　{月会費|げっかいひ}　　ご{利用|りよう}{時間|じかん}　　ご{入会|にゅうかい}{条件|じょうけん}
フルタイム　　10000{円|えん}　　{全|ぜん}{営業日|えいぎょうび}{時間|じかん}{内|ない}　　16{歳|さい}{以上|いじょう}の{方|かた}
{平日|へいじつ}A　　9000{円|えん}　　{月|げつ}～{金|きん}の{営業|えいぎょう}{時間|じかん}{内|ない}
{平日|へいじつ}B　　8000{円|えん}　　{月|げつ}～{金|きん}の17：00まで
{平日|へいじつ}C　　8000{円|えん}　　{月|げつ}～{金|きん}の18：00{以降|いこう}
シニア　　7800{円|えん}　　{月|げつ}～{日|にち}の20：00まで　　60{歳|さい}{以上|いじょう}の{方|かた}

すべてのプランで、トレーニングジムとプールがご{利用|りよう}いただけます。

{入会|にゅうかい}{手続|てつづ}き
①～③をお{持|も}ちの{上|うえ}、{受付|うけつけ}にお{越|こ}しください。
①{本人|ほんにん}{確認|かくにん}{書類|しょるい}（{免許証|めんきょしょう}、{保険証|ほけんしょう}などの{公的|こうてき}{身分|みぶん}{証明|しょうめい}{書類|しょるい}）
②{金融|きんゆう}{機関|きかん}の{通帳|つうちょう}とお{届|とど}け{印|いん}、またはキャッシュカード
③{入会金|にゅうかいきん}（5000{円|えん}）および2か{月分|げつぶん}（1か{月目|げつめ}、2か{月目|げつめ}）の{月会費|げっかいひ}
＊{各種|かくしゅ}キャンペーン{適用|てきよう}により、{入会金|にゅうかいきん}、{月会費|げっかいひ}が{割引|わりびき}になる{場合|ばあい}があります。

りんどうスポーツジム　{電話|でんわ}：058-556-7788　http://rindou-s.com

【{夏|なつ}のご{入会|にゅうかい}キャンペーン】
7{月|がつ}31{日|にち}までにご{入会|にゅうかい}の{方|かた}{限定|げんてい}の3つの{特典|とくてん}！この{機会|きかい}をお{見逃|みのが}しなく！

{特典|とくてん}①　{入会金|にゅうかいきん}が{無料|むりょう}！
{特典|とくてん}②　{月会費|げっかいひ}が1か{月分|げつぶん}{無料|むりょう}！（3か{月目|げつめ}の{月会費|げっかいひ}を{免除|めんじょ}）
{特典|とくてん}③　タオルレンタルが2か{月間|げつかん}{無料|むりょう}！

＊{入会|にゅうかい}{手続|てつづ}きなど、{詳|くわ}しくは「ご{入会|にゅうかい}{案内|あんない}」のポスターをご{参照|さんしょう}の{上|うえ}、ご{不明|ふめい}な{点|てん}はスタッフまでお{気軽|きがる}にお{問|と}い{合|あ}わせください。`,
      arti: `Mari berkeringat dengan gembira di ruang latihan dan kolam renang yang luas.

Jam operasional
Senin–Jumat 8.00–23.00; Sabtu 8.00–21.00; Minggu 9.00–20.00
Pada hari libur nasional tutup pukul 20.00.

Daftar harga — pilih paket yang sesuai dengan hari dan jam Anda.

Paket — Iuran bulanan — Jam pemakaian — Syarat keanggotaan
Full time — 10.000 yen — semua hari dalam jam operasional — usia 16 tahun ke atas
Hari kerja A — 9.000 yen — Senin–Jumat dalam jam operasional
Hari kerja B — 8.000 yen — Senin–Jumat sampai pukul 17.00
Hari kerja C — 8.000 yen — Senin–Jumat mulai pukul 18.00
Senior — 7.800 yen — Senin–Minggu sampai pukul 20.00 — usia 60 tahun ke atas

Semua paket bisa memakai ruang latihan dan kolam renang.

Prosedur pendaftaran
Datanglah ke resepsionis dengan membawa ①–③.
① Dokumen identitas diri (dokumen identitas resmi seperti SIM, kartu asuransi)
② Buku tabungan bank beserta stempel terdaftar, atau kartu ATM
③ Biaya pendaftaran (5.000 yen) dan iuran bulanan untuk 2 bulan (bulan ke-1 dan ke-2)
* Dengan berlakunya berbagai kampanye, biaya pendaftaran dan iuran bulanan bisa didiskon.

Rindo Sports Gym, telepon: 058-556-7788, http://rindou-s.com

[Kampanye Pendaftaran Musim Panas]
3 keistimewaan khusus untuk yang mendaftar sampai 31 Juli! Jangan lewatkan kesempatan ini!

Keistimewaan ① Biaya pendaftaran gratis!
Keistimewaan ② Iuran bulanan gratis 1 bulan! (iuran bulan ke-3 dibebaskan)
Keistimewaan ③ Sewa handuk gratis selama 2 bulan!

* Untuk prosedur pendaftaran dan lainnya, lihat poster "Panduan Pendaftaran", dan jika ada yang kurang jelas silakan tanyakan kepada staf.`,
    },
  },
};
