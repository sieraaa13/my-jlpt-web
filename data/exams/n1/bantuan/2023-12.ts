import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2023
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_2312: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "ある{画家|がか}の{人生|じんせい}の【{軌跡|きせき}】を{描|えが}いた{映画|えいが}を{見|み}た。",
      arti: "Saya menonton film yang menggambarkan 【jejak perjalanan】 hidup seorang pelukis.",
    },
    2: {
      yomi: "ここに{書|か}いてある{情報|じょうほう}には【{偏|かたよ}り】がある。",
      arti: "Informasi yang tertulis di sini mengandung 【keberpihakan/ketimpangan】.",
      optArti: ["jarak, kesenjangan (隔たり)", "keberpihakan, ketimpangan (偏り)", "kesalahan (誤り)", "kengototan, keterpakuan (こだわり)"],
    },
    3: {
      yomi: "{村上|むらかみ}{氏|し}の{主張|しゅちょう}にはさまざまな【{矛盾|むじゅん}】が{含|ふく}まれている。",
      arti: "Pendapat Tuan Murakami mengandung berbagai 【kontradiksi】.",
    },
    4: {
      yomi: "{事実|じじつ}が【{誇張|こちょう}】されて{伝|つた}わる。",
      arti: "Fakta tersampaikan dengan 【dilebih-lebihkan】.",
    },
    5: {
      yomi: "この{食堂|しょくどう}で{社員|しゃいん}{全員|ぜんいん}の{昼食|ちゅうしょく}を【{賄|まかな}って】いる。",
      arti: "Kantin ini 【menyediakan/menanggung】 makan siang semua karyawan.",
      optArti: ["menjamu, bersikap (振る舞う)", "memikul, mengemban (担う)", "menangani, memperlakukan (扱う)", "menyediakan, menanggung (賄う)"],
    },
    6: {
      yomi: "【{軽率|けいそつ}】な{行動|こうどう}が{批判|ひはん}を{招|まね}いた。",
      arti: "Tindakan yang 【gegabah/ceroboh】 mengundang kritik.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "そのチームは、{名門|めいもん}チームが{多数|たすう}{出場|しゅつじょう}する{中|なか}で、{初|はつ}{出場|しゅつじょう}で{優勝|ゆうしょう}という（　）を{成|な}し{遂|と}げた。",
      arti: "Di tengah banyaknya tim ternama yang ikut bertanding, tim itu meraih (…) berupa juara pada keikutsertaan pertamanya.",
      optYomi: ["{好況|こうきょう}", "{喜劇|きげき}", "{快挙|かいきょ}", "{繁栄|はんえい}"],
      optArti: ["kondisi ekonomi yang baik", "komedi", "prestasi gemilang", "kemakmuran"],
    },
    8: {
      yomi: "リーダーの{無責任|むせきにん}な{発言|はつげん}が、{混乱|こんらん}をさらに（　）することになった。",
      arti: "Ucapan pemimpin yang tidak bertanggung jawab akhirnya makin (…) kekacauan.",
      optYomi: ["{助長|じょちょう}", "{拡充|かくじゅう}", "{主導|しゅどう}", "{催促|さいそく}"],
      optArti: ["memperparah, mendorong (hal buruk)", "memperluas dan memperkuat", "memimpin, memprakarsai", "mendesak, menagih"],
    },
    9: {
      yomi: "{誰|だれ}かを{助|たす}けてあげたからといって、その{分|ぶん}の（　）を{求|もと}めてはいけない。",
      arti: "Hanya karena sudah menolong seseorang, kita tidak boleh menuntut (…) sebanding dengan itu.",
      optYomi: ["{仕返|しかえ}し", "{見返|みかえ}り", "{返却|へんきゃく}", "{返済|へんさい}"],
      optArti: ["balas dendam", "imbalan, balasan", "pengembalian (barang pinjaman)", "pelunasan (utang)"],
    },
    10: {
      yomi: "{学内|がくない}から{選|えら}ばれた{学生|がくせい}たちによって、{代表|だいひょう}チームが（　）された。",
      arti: "Tim perwakilan (…) oleh mahasiswa-mahasiswa yang dipilih dari dalam kampus.",
      optYomi: ["{集約|しゅうやく}", "{結合|けつごう}", "{結成|けっせい}", "{採集|さいしゅう}"],
      optArti: ["dihimpun, dirangkum", "digabungkan, disambung", "dibentuk (kelompok, organisasi)", "dikumpulkan (spesimen, serangga)"],
    },
    11: {
      yomi: "{飛行機|ひこうき}やホテルの{予約|よやく}、{関係者|かんけいしゃ}との{日程|にってい}{調整|ちょうせい}など、{出張|しゅっちょう}の（　）はすべて{秘書|ひしょ}に{任|まか}せている。",
      arti: "(…) perjalanan dinas — seperti pemesanan pesawat dan hotel serta penyesuaian jadwal dengan pihak terkait — semuanya saya serahkan kepada sekretaris.",
      optYomi: ["{手配|てはい}", "{始末|しまつ}", "{実施|じっし}", "{整備|せいび}"],
      optArti: ["pengaturan, persiapan", "penyelesaian, membereskan (urusan)", "pelaksanaan", "perawatan, pembenahan (fasilitas)"],
    },
    12: {
      yomi: "{入院|にゅういん}{生活|せいかつ}をして、{健康|けんこう}の{大切|たいせつ}さを（　）{感|かん}じた。",
      arti: "Setelah menjalani rawat inap, saya (…) merasakan pentingnya kesehatan.",
      optArti: ["pesat (kemajuan)", "paling-paling, sebisanya", "tegas dan jelas (bicara)", "sungguh-sungguh, sangat mendalam"],
    },
    13: {
      yomi: "{高木|たかぎ}さんは{入社|にゅうしゃ}{当初|とうしょ}は{表情|ひょうじょう}が{硬|かた}かったが、だんだん{緊張|きんちょう}が（　）きたらしく、{笑顔|えがお}を{見|み}せるようになった。",
      arti: "Awal masuk perusahaan ekspresi Takagi kaku, tetapi sepertinya ketegangannya lambat laun (…), dan ia mulai tersenyum.",
      optArti: ["menjadi serak", "terkelupas", "runtuh, rusak bentuknya", "mengendur, terurai"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{自分|じぶん}の【{尺度|しゃくど}】を{持|も}ったほうがいい。",
      arti: "Sebaiknya memiliki 【tolok ukur】 sendiri.",
      optYomi: ["{理想|りそう}", "{意思|いし}", "{基準|きじゅん}", "{専門|せんもん}"],
      optArti: ["ideal", "kehendak", "standar, patokan", "keahlian, spesialisasi"],
    },
    15: {
      yomi: "【わずらわしい】{仕事|しごと}をやることになってしまった。",
      arti: "Saya jadi harus mengerjakan pekerjaan yang 【merepotkan】.",
      optYomi: ["{退屈|たいくつ}な", "{面倒|めんどう}な", "{危険|きけん}な", "{余計|よけい}な"],
      optArti: ["membosankan", "merepotkan", "berbahaya", "tidak perlu, berlebihan"],
    },
    16: {
      yomi: "{池田|いけだ}さんには{会|あ}えたが、【{肝心|かんじん}】な{話|はなし}はできなかった。",
      arti: "Saya bisa bertemu Ikeda, tetapi tidak bisa membicarakan hal yang 【paling penting】.",
      optYomi: ["{個人的|こじんてき}な", "{具体的|ぐたいてき}な", "{詳細|しょうさい}な", "{重要|じゅうよう}な"],
      optArti: ["pribadi", "konkret", "terperinci", "penting"],
    },
    17: {
      yomi: "{今週|こんしゅう}は{仕事|しごと}が【はかどりました】。",
      arti: "Minggu ini pekerjaan 【berjalan lancar dan maju】.",
      optYomi: ["{順調|じゅんちょう}に{進|すす}みました", "{大幅|おおはば}に{遅|おく}れました", "{徐々|じょじょ}に{減|へ}りました", "{急激|きゅうげき}に{増|ふ}えました"],
      optArti: ["berjalan lancar", "sangat terlambat", "berkurang sedikit demi sedikit", "bertambah secara drastis"],
    },
    18: {
      yomi: "{新人|しんじん}のときはずっと【{辛抱|しんぼう}】していた。",
      arti: "Waktu masih karyawan baru saya terus 【bersabar menahan diri】.",
      optYomi: ["{苦労|くろう}", "{我慢|がまん}", "{失敗|しっぱい}", "{心配|しんぱい}"],
      optArti: ["bersusah payah", "menahan diri, bersabar", "gagal", "khawatir"],
    },
    19: {
      yomi: "この{地方|ちほう}の【しきたり】について{話|はなし}を{聞|き}いた。",
      arti: "Saya mendengar cerita tentang 【adat kebiasaan】 daerah ini.",
      optYomi: ["{名物|めいぶつ}", "{気候|きこう}", "{慣習|かんしゅう}", "{歴史|れきし}"],
      optArti: ["produk/makanan khas", "iklim", "adat kebiasaan", "sejarah"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "【{解約|かいやく}】",
      arti: "【解約】 = membatalkan/memutus kontrak (asuransi, langganan, dsb.)",
      optYomi: [
        "{道路|どうろ}{工事|こうじ}が{終了|しゅうりょう}したので、{車両|しゃりょう}の{通行止|つうこうど}めを{解約|かいやく}した。",
        "{暗証|あんしょう}{番号|ばんごう}を{入力|にゅうりょく}して、ドアのロックを{解約|かいやく}してください。",
        "{体調|たいちょう}が{悪|わる}いので、{友達|ともだち}と{食事|しょくじ}に{行|い}く{予定|よてい}を{解約|かいやく}した。",
        "{家計|かけい}の{見直|みなお}しをして、{保険|ほけん}を{解約|かいやく}することにした。",
      ],
      optArti: [
        "Karena pekerjaan jalan sudah selesai, penutupan jalan untuk kendaraan 'diputus kontraknya'.",
        "Masukkan PIN, lalu 'putus kontrak' kunci pintunya.",
        "Karena badan kurang sehat, saya 'memutus kontrak' rencana makan bersama teman.",
        "Setelah meninjau ulang keuangan rumah tangga, saya memutuskan untuk 'memutus kontrak' asuransi.",
      ],
    },
    21: {
      yomi: "【{特産|とくさん}】",
      arti: "【特産】 = produk khas (suatu daerah)",
      optYomi: [
        "これはあの{監督|かんとく}の{数々|かずかず}の{作品|さくひん}の{中|なか}でも{特産|とくさん}の{映画|えいが}だと{思|おも}う。",
        "{村|むら}の{特産|とくさん}の{黄色|きいろ}いりんごを{使|つか}った{料理|りょうり}をごちそうになった。",
        "{彼|かれ}はわが{国|くに}の{特産|とくさん}の{世界的|せかいてき}なサッカー{選手|せんしゅ}で、{彼|かれ}のことを{知|し}らない{人|ひと}はいない。",
        "わが{社|しゃ}{特産|とくさん}の{技術|ぎじゅつ}を{生|い}かした{新|しん}{商品|しょうひん}を{開発|かいはつ}する。",
      ],
      optArti: [
        "Menurut saya ini film 'produk khas' di antara sekian banyak karya sutradara itu.",
        "Saya dijamu masakan yang memakai apel kuning, 'produk khas' desa itu.",
        "Ia pemain sepak bola kelas dunia 'produk khas' negara kami, tidak ada yang tidak mengenalnya.",
        "Kami mengembangkan produk baru yang memanfaatkan teknologi 'produk khas' perusahaan kami.",
      ],
    },
    22: {
      yomi: "【{問|と}い{詰|つ}める】",
      arti: "【問い詰める】 = mendesak dengan pertanyaan, menginterogasi",
      optYomi: [
        "{石川|いしかわ}さんは{数学|すうがく}ができるから、いつもみんなに{数学|すうがく}の{問題|もんだい}を{問|と}い{詰|つ}められている。",
        "{進路|しんろ}について{一人|ひとり}で{問|と}い{詰|つ}めていたが、{両親|りょうしん}に{相談|そうだん}することにした。",
        "{子|こ}どものころから{星|ほし}を{見|み}るのが{大好|だいす}きで、{今|いま}も{宇宙|うちゅう}の{謎|なぞ}を{問|と}い{詰|つ}めている。",
        "{友人|ゆうじん}たちから、どうして{約束|やくそく}を{破|やぶ}ったのかと{問|と}い{詰|つ}められた。",
      ],
      optArti: [
        "Karena Ishikawa pandai matematika, ia selalu 'didesak dengan pertanyaan' soal matematika oleh semua orang.",
        "Saya 'mendesak dengan pertanyaan' sendirian soal jalur masa depan, tetapi lalu memutuskan berkonsultasi dengan orang tua.",
        "Sejak kecil saya suka melihat bintang, dan sekarang pun saya 'mendesak dengan pertanyaan' misteri alam semesta.",
        "Saya 'didesak dengan pertanyaan' oleh teman-teman, mengapa saya ingkar janji.",
      ],
    },
    23: {
      yomi: "【{改修|かいしゅう}】",
      arti: "【改修】 = memperbaiki/merenovasi (bangunan, jembatan, fasilitas)",
      optYomi: [
        "{顔|かお}の{大|おお}きさに{合|あ}わせて、{眼鏡|めがね}を{改修|かいしゅう}してもらった。",
        "{問題|もんだい}の{解決|かいけつ}には、{法律|ほうりつ}を{改修|かいしゅう}しなければならない。",
        "{台風|たいふう}によって{壊|こわ}れてしまった{橋|はし}を{改修|かいしゅう}している。",
        "この{資料|しりょう}は{古|ふる}いので、データを{改修|かいしゅう}してください。",
      ],
      optArti: [
        "Kacamata saya 'direnovasi' agar sesuai dengan ukuran wajah.",
        "Untuk menyelesaikan masalah, undang-undang harus 'direnovasi'.",
        "Jembatan yang rusak akibat topan sedang 'diperbaiki/direnovasi'.",
        "Dokumen ini sudah lama, jadi tolong 'renovasi' datanya.",
      ],
    },
    24: {
      yomi: "【{手厚|てあつ}い】",
      arti: "【手厚い】 = penuh perhatian, ramah dan cermat (pelayanan, perawatan)",
      optYomi: [
        "{大切|たいせつ}なお{客様|きゃくさま}がいらっしゃったので、{手厚|てあつ}くもてなした。",
        "{交差点|こうさてん}で{起|お}きた{交通|こうつう}{事故|じこ}の{状況|じょうきょう}を{警察|けいさつ}に{手厚|てあつ}く{説明|せつめい}した。",
        "この{商品|しょうひん}は{壊|こわ}れやすいので、{袋|ふくろ}に{包|つつ}んで{手厚|てあつ}く{運|はこ}んだ。",
        "{寝|ね}ている{赤|あか}ちゃんを{起|お}こさないように、ドアを{手厚|てあつ}く{閉|し}めた。",
      ],
      optArti: [
        "Karena tamu penting datang, kami menjamunya dengan 'penuh perhatian'.",
        "Saya menjelaskan kepada polisi keadaan kecelakaan lalu lintas di persimpangan dengan 'penuh perhatian'.",
        "Barang ini mudah rusak, jadi saya membungkusnya dalam kantong dan membawanya dengan 'penuh perhatian'.",
        "Agar tidak membangunkan bayi yang sedang tidur, saya menutup pintu dengan 'penuh perhatian'.",
      ],
    },
    25: {
      yomi: "【デマ】",
      arti: "【デマ】 = kabar bohong, hoaks, desas-desus palsu",
      optYomi: [
        "{誰|だれ}かがデマを{流|なが}して、{私|わたし}たちをだまそうとしている。",
        "この{絵画|かいが}はデマで、{本物|ほんもの}は{市|し}の{美術館|びじゅつかん}で{見|み}られます。",
        "{山本|やまもと}さんは{年上|としうえ}だと{思|おも}っていたが、{私|わたし}のデマだった。",
        "{二人|ふたり}できちんと{話|はな}し{合|あ}って、お{互|たが}いのデマを{解|と}いた。",
      ],
      optArti: [
        "Seseorang menyebarkan 'hoaks' dan mencoba menipu kami.",
        "Lukisan ini 'hoaks'; yang asli bisa dilihat di museum seni kota.",
        "Saya kira Yamamoto lebih tua, tetapi itu 'hoaks' saya.",
        "Kami berdua berbicara baik-baik dan menghilangkan 'hoaks' satu sama lain.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{長|なが}く{使|つか}っていた{古|ふる}い{冷蔵庫|れいぞうこ}を、{引|ひ}っ{越|こ}し（　）{買|か}い{替|か}えた。",
      arti: "(…) pindah rumah, saya mengganti kulkas lama yang sudah lama dipakai dengan yang baru.",
      optYomi: ["を{機|き}に", "を{皮切|かわき}りに", "に{基|もと}づいて", null],
      optArti: ["dengan kesempatan (…) sebagai momen", "diawali dengan", "berdasarkan", "selama, sepanjang (rentang)"],
    },
    27: {
      yomi: "{経営者|けいえいしゃ}は、{会社|かいしゃ}は{社員|しゃいん}（　）ものであるということを{忘|わす}れてはいけない。",
      arti: "Pemilik usaha tidak boleh lupa bahwa perusahaan itu (…) karyawan.",
      optArti: ["yang berkedudukan sebagai", "di dalam, pada", "ada berkat adanya", "khas, hanya bisa oleh"],
    },
    28: {
      yomi: "{私|わたし}はこの{漫画|まんが}が{大好|だいす}きで、つらいときに（　）{元気|げんき}をもらっている。",
      arti: "Saya sangat suka manga ini; saat sedang susah, saya (…) dan mendapat semangat.",
      optYomi: ["{読|よ}み{返|かえ}すべく", "{読|よ}み{返|かえ}すならば", "{読|よ}み{返|かえ}しては", "{読|よ}み{返|かえ}してこそ"],
      optArti: ["untuk membaca ulang", "jika membaca ulang", "(setiap kali) membaca ulang", "justru dengan membaca ulang"],
    },
    29: {
      yomi: "{連休中|れんきゅうちゅう}どこにも{出|で}かけず、（　）、{今日|きょう}は{朝|あさ}からどうも{体|からだ}がだるい。",
      arti: "Selama libur panjang saya tidak pergi ke mana-mana, (…), hari ini sejak pagi badan terasa lesu.",
      optYomi: ["{寝|ね}たことにしたせいか", "{寝|ね}てばかりいたせいか", "{寝|ね}たことにしたとすると", "{寝|ね}てばかりいたとすると"],
      optArti: ["mungkin karena menganggap sudah tidur", "mungkin karena terus-terusan tidur", "kalau dianggap sudah tidur", "kalau terus-terusan tidur"],
    },
    30: {
      yomi: "（{会議|かいぎ}で）{委員長|いいんちょう}「{北駅|きたえき}{周辺|しゅうへん}の{再開発|さいかいはつ}{計画|けいかく}について、{皆|みな}さんのご{意見|いけん}をお{聞|き}かせください。」{委員|いいん}「{私|わたくし}{個人|こじん}（　）その{必要性|ひつようせい}を{感|かん}じておりますが、{市民|しみん}の{皆|みな}さんは{納得|なっとく}しにくいのではないかと{思|おも}います。」",
      arti: "(Dalam rapat) Ketua komite: \"Mengenai rencana pembangunan ulang sekitar Stasiun Kita, silakan sampaikan pendapat Anda semua.\" Anggota: \"(…) saya pribadi, saya merasakan perlunya rencana itu, tetapi saya kira warga kota akan sulit menerimanya.\"",
      optArti: ["menurut (sumber informasi)", "kalau bicara soal", "(hormat) bagi Anda/pihak tersebut", "(rendah hati) sebagai, dari pihak (saya)"],
    },
    31: {
      yomi: "せっかく{新|あたら}しく{買|か}うのならと{高性能|こうせいのう}のパソコンを（　）、{全|まった}く{使|つか}いこなせていない。",
      arti: "Karena berpikir \"mumpung beli baru\", saya (…) komputer berperforma tinggi, tetapi sama sekali tidak bisa memanfaatkannya dengan baik.",
      optYomi: ["{買|か}ったばかりでも", "{買|か}ったはいいが", "{買|か}ったかにかかわらず", "{買|か}ったきりなのに"],
      optArti: ["meskipun baru saja membeli", "membeli sih membeli, tetapi", "terlepas dari membeli atau tidak", "padahal hanya membeli lalu dibiarkan"],
    },
    32: {
      yomi: "{先日|せんじつ}、レストランに{行|い}ったとき、{店員|てんいん}の{失礼|しつれい}な{態度|たいど}に{大変|たいへん}（　）。",
      arti: "Beberapa hari lalu, ketika pergi ke restoran, saya sangat (…) karena sikap pelayan yang tidak sopan.",
      optYomi: ["{不快|ふかい}な{思|おも}いをした", "{不快|ふかい}{極|きわ}まりない", "{不快|ふかい}だったことか", "{不快|ふかい}にもほどがある"],
      optArti: ["merasa tidak nyaman", "sangat-sangat tidak menyenangkan", "betapa tidak menyenangkannya", "tidak menyenangkan pun ada batasnya"],
    },
    33: {
      yomi: "（{会社|かいしゃ}で）{林|はやし}「{部長|ぶちょう}、ABC{銀行|ぎんこう}の{山下|やました}さんが（　）。{応接室|おうせつしつ}でお{待|ま}ちです。」{部長|ぶちょう}「わかりました。」",
      arti: "(Di kantor) Hayashi: \"Pak Manajer, Bapak Yamashita dari Bank ABC (…). Beliau menunggu di ruang tamu.\" Manajer: \"Baik.\"",
      optYomi: ["{参|まい}りました", "{見|み}えました", null, "お{目|め}にかかりました"],
      optArti: ["(rendah hati) datang", "(hormat) datang, hadir", "(rendah hati) berkunjung, bertanya", "(rendah hati) bertemu"],
    },
    34: {
      yomi: "{今日|きょう}から12{月|がつ}だ。{早|はや}いもので、{今年|ことし}ももうすぐ（　）。",
      arti: "Mulai hari ini sudah Desember. Cepat sekali rasanya, tahun ini pun sebentar lagi (…).",
      optYomi: ["{終|お}わろうとする", "{終|お}わるようにする", "{終|お}わろうとしている", "{終|お}わるようにしている"],
      optArti: ["hendak berakhir", "mengusahakan agar berakhir", "akan segera berakhir", "selalu mengusahakan agar berakhir"],
    },
    35: {
      yomi: "{仕事|しごと}において、ミスは（　）。しかし、{人間|にんげん}である{以上|いじょう}、ミスは{避|さ}けられないものだ。",
      arti: "Dalam pekerjaan, kesalahan (…). Namun, selama kita manusia, kesalahan tidak bisa dihindari.",
      optArti: ["mana mungkin tidak boleh dilakukan", "seharusnya tidak boleh dilakukan (dulu)", "belum tentu lebih baik tidak dilakukan", "sudah pasti lebih baik tidak dilakukan"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{当社|とうしゃ}が{先月|せんげつ}{発売|はつばい}したパソコンについて、{印刷|いんさつ}の★ ＿＿ ＿＿ ＿＿ことが{判明|はんめい}しました。",
      arti: "Mengenai komputer yang dirilis perusahaan kami bulan lalu, kami menerima beberapa pertanyaan bahwa pengaturan pencetakan tidak bisa dilakukan, dan setelah diselidiki, ternyata ada kesalahan dalam buku panduan.",
      optYomi: ["マニュアルに{誤|あやま}りがある", "{設定|せってい}ができないとの", "{問|と}い{合|あ}わせが{複数|ふくすう}{寄|よ}せられ", "{調査|ちょうさ}したところ"],
      optArti: ["ada kesalahan dalam buku panduan", "(yang menyatakan) pengaturan tidak bisa dilakukan", "beberapa pertanyaan masuk, dan", "setelah diselidiki"],
    },
    37: {
      yomi: "このフライパンは、さすが＿＿ ＿＿ ★ ＿＿とても{使|つか}いやすい。",
      arti: "Penggorengan ini, sesuai dugaan karena direkomendasikan oleh Mori yang pandai memasak, sangat mudah dipakai.",
      optYomi: ["{森|もり}さんが", null, "{勧|すす}める", "{料理|りょうり}が{上手|じょうず}な"],
      optArti: ["Mori (subjek)", "pantas saja, sesuai dengan", "merekomendasikan", "yang pandai memasak"],
    },
    38: {
      yomi: "{最後|さいご}に{見|み}た{映画|えいが}が＿＿ ＿＿ ★ ＿＿{映画|えいが}を{見|み}ていない。",
      arti: "Sudah begitu lama saya tidak menonton film sampai-sampai tidak ingat apa film terakhir yang saya tonton.",
      optYomi: [null, "{何|なん}だったのかも", "{思|おも}い{出|だ}せない", "{久|ひさ}しく"],
      optArti: ["sampai-sampai", "apa (film) itu pun", "tidak bisa ingat", "sudah lama"],
    },
    39: {
      yomi: "{学生|がくせい}から{提出|ていしゅつ}された{論文|ろんぶん}の{中|なか}に{面白|おもしろ}いものがあった。{私|わたし}が＿＿ ＿＿ ★ ＿＿これまでにない。",
      arti: "Di antara makalah yang diserahkan mahasiswa, ada yang menarik. Sejauh yang saya tahu, belum pernah ada makalah yang menganalisis dengan pendekatan ini.",
      optYomi: ["{知|し}る{限|かぎ}りでは", "{論文|ろんぶん}は", "{分析|ぶんせき}している", "このアプローチで"],
      optArti: ["sejauh yang (saya) tahu", "makalah (topik)", "yang menganalisis", "dengan pendekatan ini"],
    },
    40: {
      yomi: "このレシピ{本|ぼん}は、ふだん{料理|りょうり}をしない{人|ひと}でも＿＿ ＿＿ ★ ＿＿{評判|ひょうばん}になっているそうだ。",
      arti: "Katanya buku resep ini terkenal di kalangan anak muda karena orang yang biasanya tidak memasak pun bisa membuat masakan autentik dengan mudah hanya dengan memasak mengikuti resepnya.",
      optYomi: ["{若|わか}い{人|ひと}の{間|あいだ}で", "{調理|ちょうり}するだけで", "レシピに{沿|そ}って", "{簡単|かんたん}に{本格的|ほんかくてき}な{料理|りょうり}が{作|つく}れると"],
      optArti: ["di kalangan anak muda", "hanya dengan memasak", "mengikuti resep", "(karena) bisa membuat masakan autentik dengan mudah"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{選|えら}べそうだ", "{選|えら}び{得|う}るか", "{選|えら}べるとよかった", "{選|えら}ばなければならない"],
      optArti: ["sepertinya bisa memilih", "apakah mungkin memilih?", "seandainya bisa memilih", "harus memilih"],
    },
    42: {
      optArti: ["sampai-sampai dikatakan", "itulah sebabnya", "artinya, yaitu", "ketika"],
    },
    43: {
      optYomi: ["{小説|しょうせつ}", "ある{小説|しょうせつ}", "その{小説|しょうせつ}", "そういった{小説|しょうせつ}"],
      optArti: ["novel", "suatu novel", "novel itu", "novel semacam itu"],
    },
    44: {
      optArti: ["katanya pendekatan", "mungkin pendekatan", "ada pada pendekatan", "dianggap sebagai pendekatan"],
    },

    // ── 問題8：内容理解（短文）──
    45: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{機械|きかい}の{進化|しんか}に{伴|ともな}い、{人間|にんげん}も{技術|ぎじゅつ}や{能力|のうりょく}を{向上|こうじょう}させることが{必要|ひつよう}だ。",
        "{機械|きかい}がどんなに{進化|しんか}しても、{人間|にんげん}は{機械|きかい}に{使|つか}われないようにすべきだ。",
        "{人間|にんげん}は{機械|きかい}も{道具|どうぐ}であるという{認識|にんしき}を{考|かんが}え{直|なお}したほうがいい。",
        "{人間|にんげん}はどこまで{機械|きかい}を{進化|しんか}させるべきかをよく{考|かんが}えたほうがいい。",
      ],
      optArti: [
        "Seiring perkembangan mesin, manusia juga perlu meningkatkan teknik dan kemampuannya.",
        "Sehebat apa pun mesin berkembang, manusia harus menjaga agar tidak diperalat oleh mesin.",
        "Manusia sebaiknya memikirkan ulang anggapan bahwa mesin pun adalah alat.",
        "Manusia sebaiknya memikirkan baik-baik sejauh mana mesin perlu dikembangkan.",
      ],
    },
    46: {
      yomi: "イヤホン「AS-10」について、このメールで{確認|かくにん}していることは{何|なに}か。",
      arti: "Mengenai earphone \"AS-10\", apa yang dikonfirmasi dalam email ini?",
      optYomi: [
        "{今|いま}から{予約|よやく}しても{発売日|はつばいび}には{渡|わた}せないが、{予約|よやく}するかどうか。",
        "{発売日|はつばいび}が10{月|がつ}{以降|いこう}になってしまうが、{予約|よやく}するかどうか。",
        "{発売日|はつばいび}に{渡|わた}せるかは{分|わ}からないが、{予約|よやく}したままでいいかどうか。",
        "{発売日|はつばいび}ではなく10{月|がつ}{以降|いこう}に{渡|わた}すことになるが、{予約|よやく}したままでいいかどうか。",
      ],
      optArti: [
        "Kalau memesan sekarang pun barang tidak bisa diserahkan pada hari rilis; apakah tetap mau memesan.",
        "Hari rilis mundur ke Oktober atau sesudahnya; apakah tetap mau memesan.",
        "Belum tahu apakah barang bisa diserahkan pada hari rilis; apakah pesanan boleh dibiarkan tetap.",
        "Barang akan diserahkan pada Oktober atau sesudahnya, bukan pada hari rilis; apakah pesanan boleh dibiarkan tetap.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin dikatakan penulis?",
      optYomi: [
        "{顧客|こきゃく}を{限定|げんてい}して、その{要望|ようぼう}に{応|こた}えた{商品|しょうひん}を{作|つく}るべきだ。",
        "{顧客|こきゃく}の{要望|ようぼう}に{応|こた}えるために、{経営|けいえい}{資源|しげん}を{増|ふ}やすべきだ。",
        "{多様|たよう}なニーズに{応|こた}えて、{多|おお}くの{消費者|しょうひしゃ}を{満足|まんぞく}させるべきだ。",
        "ひとつの{商品|しょうひん}に{焦点|しょうてん}を{当|あ}てて、{経営|けいえい}{資源|しげん}を{最大限|さいだいげん}に{活用|かつよう}すべきだ。",
      ],
      optArti: [
        "Kita harus membatasi pelanggan dan membuat produk yang memenuhi keinginan mereka.",
        "Kita harus menambah sumber daya usaha untuk memenuhi keinginan pelanggan.",
        "Kita harus memenuhi kebutuhan yang beragam dan memuaskan banyak konsumen.",
        "Kita harus berfokus pada satu produk dan memanfaatkan sumber daya usaha semaksimal mungkin.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin dikatakan penulis?",
      optYomi: [
        "{他人|たにん}に{嫌|きら}われることなく{生|い}きることは{難|むずか}しい。",
        "{世間|せけん}の{評価|ひょうか}や{期待|きたい}を{気|き}にしながら{生|い}きる{必要|ひつよう}はない。",
        "{自分|じぶん}の{悪|わる}い{部分|ぶぶん}を{見|み}せなければ、{他人|たにん}に{嫌|きら}われることはない。",
        "{自分|じぶん}の{悪|わる}い{部分|ぶぶん}を{見|み}せて{他人|たにん}から{嫌|きら}われるほうが、{楽|らく}に{生|い}きられる。",
      ],
      optArti: [
        "Sulit hidup tanpa dibenci orang lain.",
        "Tidak perlu hidup sambil memusingkan penilaian dan harapan masyarakat.",
        "Kalau tidak memperlihatkan sisi buruk diri sendiri, kita tidak akan dibenci orang lain.",
        "Memperlihatkan sisi buruk diri lalu dibenci orang lain membuat hidup lebih ringan.",
      ],
    },

    // ── 問題9：内容理解（中文）──
    49: {
      yomi: "{筆者|ひっしゃ}によると、{中学|ちゅうがく}や{高校|こうこう}でさまざまな{知識|ちしき}に{触|ふ}れていくと、どうなるか。",
      arti: "Menurut penulis, apa yang terjadi jika di SMP dan SMA kita bersentuhan dengan berbagai pengetahuan?",
      optYomi: [
        "{分野|ぶんや}ごとに{前提|ぜんてい}とされる{世界観|せかいかん}や{物事|ものごと}の{枠組|わくぐ}みが{違|ちが}うことに{気|き}づく。",
        "{身|み}についた{世界観|せかいかん}や{物事|ものごと}の{枠組|わくぐ}みの{中|なか}で{思考|しこう}するようになる。",
        "{新|あたら}しい{世界観|せかいかん}や{考|かんが}え{方|かた}にしか{興味|きょうみ}が{持|も}てなくなる。",
        "{自分|じぶん}の{世界観|せかいかん}や{考|かんが}え{方|かた}がより{明確|めいかく}になる。",
      ],
      optArti: [
        "Kita menyadari bahwa pandangan dunia dan kerangka berpikir yang menjadi dasar berbeda di setiap bidang.",
        "Kita jadi berpikir di dalam pandangan dunia dan kerangka berpikir yang sudah melekat.",
        "Kita jadi hanya tertarik pada pandangan dunia dan cara berpikir yang baru.",
        "Pandangan dunia dan cara berpikir kita sendiri menjadi lebih jelas.",
      ],
    },
    50: {
      yomi: "{筆者|ひっしゃ}によると、{何|なん}のために「{哲学|てつがく}する{力|ちから}」が{必要|ひつよう}か。",
      arti: "Menurut penulis, untuk apa \"kemampuan berfilsafat\" diperlukan?",
      optYomi: [
        "{激|はげ}しく{変化|へんか}する{社会|しゃかい}の{中|なか}で、{自分|じぶん}の{価値観|かちかん}を{探求|たんきゅう}できるようにするため。",
        "{自分|じぶん}のものの{見方|みかた}や{考|かんが}える{枠組|わくぐ}みの{間違|まちが}いを{修正|しゅうせい}できるようにするため。",
        "{自分|じぶん}の{価値観|かちかん}を{問|と}い{直|なお}し、{社会|しゃかい}の{仕組|しく}みを{正|ただ}しく{理解|りかい}するため。",
        "{社会|しゃかい}の{共通|きょうつう}{認識|にんしき}を{学|まな}び、より{深|ふか}いレベルでの{学習|がくしゅう}を{進|すす}めるため。",
      ],
      optArti: [
        "Agar bisa mencari nilai-nilai sendiri di tengah masyarakat yang berubah dengan cepat.",
        "Agar bisa memperbaiki kesalahan dalam cara pandang dan kerangka berpikir sendiri.",
        "Untuk mempertanyakan ulang nilai-nilai sendiri dan memahami sistem masyarakat dengan benar.",
        "Untuk mempelajari pemahaman bersama dalam masyarakat dan melanjutkan belajar ke tingkat yang lebih dalam.",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}によると、{羽毛|うもう}を{持|も}つことにはどのような{利点|りてん}があるか。",
      arti: "Menurut penulis, apa keuntungan memiliki bulu halus?",
      optYomi: [
        "{低温|ていおん}の{環境|かんきょう}でも、{卵|たまご}を{一定|いってい}の{温|あたた}かさで{保|たも}つことができる。",
        "{低温|ていおん}の{環境|かんきょう}でも、{卵|たまご}の{成長|せいちょう}を{促|うなが}し{早|はや}く{孵|かえ}すことができる。",
        "{環境|かんきょう}にかかわらず{体温|たいおん}が{維持|いじ}でき、{卵|たまご}が{多|おお}く{産|う}める。",
        "{環境|かんきょう}に{合|あ}わせて{卵|たまご}の{温度|おんど}を{調整|ちょうせい}でき、{早|はや}く{孵|かえ}すことができる。",
      ],
      optArti: [
        "Bahkan di lingkungan bersuhu rendah, telur bisa dijaga tetap pada kehangatan tertentu.",
        "Bahkan di lingkungan bersuhu rendah, pertumbuhan telur bisa dipacu sehingga cepat menetas.",
        "Suhu tubuh bisa dipertahankan apa pun lingkungannya, sehingga bisa bertelur banyak.",
        "Suhu telur bisa disesuaikan dengan lingkungan, sehingga cepat menetas.",
      ],
    },
    52: {
      yomi: "お{腹|なか}のあたりの{羽毛|うもう}が{抜|ぬ}けていたと{思|おも}われますとあるが、{筆者|ひっしゃ}はなぜそう{考|かんが}えるのか。",
      arti: "Tertulis \"diduga bulu di sekitar perutnya rontok\"; mengapa penulis berpikir demikian?",
      optYomi: [
        "{体|からだ}の{熱|ねつ}を{逃|に}がすことで、{卵|たまご}を{温|あたた}めすぎるのを{防|ふせ}げるから。",
        "{皮膚|ひふ}から{卵|たまご}に{直接|ちょくせつ}{体温|たいおん}が{伝|つた}わることで、{効率的|こうりつてき}に{卵|たまご}を{温|あたた}められるから。",
        "{卵|たまご}に{皮膚|ひふ}を{直接|ちょくせつ}{当|あ}てることで、{卵|たまご}の{温度|おんど}を{知|し}ることができるから。",
        "{卵|たまご}と{接|せっ}する{部分|ぶぶん}の{皮膚|ひふ}がむき{出|だ}しになることで、{卵|たまご}が{抱|だ}きやすくなるから。",
      ],
      optArti: [
        "Karena dengan melepaskan panas tubuh, telur bisa dicegah agar tidak terlalu panas.",
        "Karena suhu tubuh tersalur langsung dari kulit ke telur, sehingga telur bisa dihangatkan secara efisien.",
        "Karena dengan menempelkan kulit langsung ke telur, suhu telur bisa diketahui.",
        "Karena kulit di bagian yang bersentuhan dengan telur terbuka, telur jadi lebih mudah dierami.",
      ],
    },
    53: {
      yomi: "それとあるが、どのようなことか。",
      arti: "Tertulis \"itu\"; apa yang dimaksud?",
      optYomi: [
        "{仕事|しごと}を{具体的|ぐたいてき}な{内容|ないよう}よりイメージで{捉|とら}えて{答|こた}えていること。",
        "よいイメージが{持|も}たれやすい{仕事|しごと}を{選|えら}んで{答|こた}えていること。",
        "できない{仕事|しごと}をできると{思|おも}い{込|こ}んで{答|こた}えていること。",
        "{本当|ほんとう}にやりたい{仕事|しごと}を{選|えら}ばずに{答|こた}えていること。",
      ],
      optArti: [
        "Bahwa mereka menjawab dengan memahami pekerjaan dari citranya, bukan dari isinya yang konkret.",
        "Bahwa mereka menjawab dengan memilih pekerjaan yang mudah dicitrakan baik.",
        "Bahwa mereka menjawab dengan yakin bisa melakukan pekerjaan yang sebenarnya tidak bisa.",
        "Bahwa mereka menjawab tanpa memilih pekerjaan yang benar-benar ingin dilakukan.",
      ],
    },
    54: {
      yomi: "{部下|ぶか}への{接|せっ}し{方|かた}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Tentang cara memperlakukan bawahan, bagaimana pendapat penulis?",
      optYomi: [
        "{希望|きぼう}と{違|ちが}う{仕事|しごと}に{挑戦|ちょうせん}させて、{本人|ほんにん}の{新|あたら}しいスキルを{引|ひ}き{出|だ}すことが{大切|たいせつ}だ。",
        "{適性|てきせい}を{見極|みきわ}めて{仕事|しごと}を{任|まか}せれば、{本人|ほんにん}は{充実感|じゅうじつかん}を{持|も}って{取|と}り{組|く}むようになる。",
        "{本人|ほんにん}のやりたい{仕事|しごと}に{挑戦|ちょうせん}させれば、{望|のぞ}ましい{成果|せいか}が{出|だ}せるようになる。",
        "{個人|こじん}の{成果|せいか}を{望|のぞ}むより、チームに{貢献|こうけん}する{経験|けいけん}をさせることが{大切|たいせつ}だ。",
      ],
      optArti: [
        "Penting untuk menyuruh mereka mencoba pekerjaan yang berbeda dari keinginannya, untuk menggali keterampilan baru.",
        "Jika pekerjaan diserahkan setelah melihat dengan cermat bakatnya, orang itu akan mengerjakannya dengan rasa puas.",
        "Jika disuruh mencoba pekerjaan yang ia inginkan, ia akan bisa menghasilkan hasil yang diharapkan.",
        "Daripada mengharapkan hasil individu, penting untuk memberi pengalaman berkontribusi pada tim.",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}によると、{自分|じぶん}の{仮説|かせつ}に{合|あ}う{実験|じっけん}{結果|けっか}が{得|え}られない{場合|ばあい}、{多|おお}くの{研究者|けんきゅうしゃ}はどうするか。",
      arti: "Menurut penulis, apa yang dilakukan kebanyakan peneliti jika tidak mendapatkan hasil eksperimen yang sesuai dengan hipotesisnya?",
      optYomi: [
        "{仮説|かせつ}と{条件|じょうけん}を{少|すこ}しずつ{変|か}えて、{実験|じっけん}を{繰|く}り{返|かえ}す。",
        "{仮説|かせつ}の{問題点|もんだいてん}を{明|あき}らかにするために、{実験|じっけん}の{条件|じょうけん}を{変|か}える。",
        "{仮説|かせつ}に{合|あ}う{結果|けっか}を{得|え}るために、{条件|じょうけん}を{変|か}えて{実験|じっけん}を{繰|く}り{返|かえ}す。",
        "{仮説|かせつ}に{合|あ}う{結果|けっか}を{求|もと}めて、{条件|じょうけん}を{変|か}えずに{時間|じかん}をかけて{実験|じっけん}する。",
      ],
      optArti: [
        "Mengubah hipotesis dan kondisi sedikit demi sedikit, lalu mengulang eksperimen.",
        "Mengubah kondisi eksperimen untuk memperjelas masalah pada hipotesis.",
        "Mengubah kondisi dan mengulang eksperimen untuk mendapatkan hasil yang sesuai hipotesis.",
        "Mencari hasil yang sesuai hipotesis dengan bereksperimen lama tanpa mengubah kondisi.",
      ],
    },
    56: {
      yomi: "{実験|じっけん}{科学|かがく}の{分野|ぶんや}の{研究者|けんきゅうしゃ}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang peneliti di bidang sains eksperimental, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{実験|じっけん}{結果|けっか}に{振|ふ}り{回|まわ}されず、{常|つね}に{仮説|かせつ}と{結果|けっか}を{冷静|れいせい}に{検証|けんしょう}する{必要|ひつよう}がある。",
        "{実験|じっけん}に{冷静|れいせい}に{臨|のぞ}んでも、{思|おも}いどおりのよい{結果|けっか}が{得|え}られるとは{限|かぎ}らない。",
        "「{発見|はっけん}」のためには、{膨大|ぼうだい}な{時間|じかん}と{試行錯誤|しこうさくご}を{覚悟|かくご}しなければならない。",
        "{思|おも}い{描|えが}いたとおりの{結果|けっか}を{得|え}るには、{実験|じっけん}による{検証|けんしょう}を{諦|あきら}めてはならない。",
      ],
      optArti: [
        "Peneliti perlu selalu menguji hipotesis dan hasil dengan tenang, tanpa terombang-ambing oleh hasil eksperimen.",
        "Sekalipun menghadapi eksperimen dengan tenang, belum tentu mendapatkan hasil bagus sesuai harapan.",
        "Untuk sebuah \"penemuan\", harus siap menghadapi waktu yang sangat lama dan proses coba-coba.",
        "Untuk mendapatkan hasil sesuai bayangan, pengujian lewat eksperimen tidak boleh menyerah.",
      ],
    },

    // ── 問題10：内容理解（長文）──
    57: {
      yomi: "{写真|しゃしん}とテレビの{映像|えいぞう}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang foto dan gambar televisi, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{想像力|そうぞうりょく}を{働|はたら}かせて{写真|しゃしん}を{見|み}れば、{映像|えいぞう}と{同|おな}じような{臨場感|りんじょうかん}が{得|え}られる。",
        "{写真|しゃしん}のほうが{原始的|げんしてき}だからこそ、{見|み}る{人|ひと}に{簡潔|かんけつ}に{意味|いみ}が{伝|つた}わる。",
        "{写真|しゃしん}は{一瞬|いっしゅん}しか{写|うつ}し{出|だ}されていないため、{映像|えいぞう}より{見|み}る{人|ひと}の{想像力|そうぞうりょく}が{必要|ひつよう}だ。",
        "{写真|しゃしん}は{写|うつ}っていないものがある{分|ぶん}、{見|み}る{人|ひと}が{自分|じぶん}を{重|かさ}ね{合|あ}わせるのが{難|むずか}しい。",
      ],
      optArti: [
        "Jika melihat foto sambil menggunakan imajinasi, kita bisa merasakan kesan nyata yang sama dengan gambar video.",
        "Justru karena foto lebih primitif, maknanya tersampaikan secara ringkas kepada yang melihat.",
        "Karena foto hanya menampilkan satu momen, foto lebih membutuhkan imajinasi orang yang melihat daripada video.",
        "Karena ada hal yang tidak terekam dalam foto, sulit bagi yang melihat untuk menempatkan dirinya di dalamnya.",
      ],
    },
    58: {
      yomi: "「{名作|めいさく}」と{呼|よ}ばれる{写真|しゃしん}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Tentang foto yang disebut \"mahakarya\", bagaimana pendapat penulis?",
      optYomi: [
        "{若|わか}い{時|とき}に{価値|かち}が{分|わ}からなくても、{年|とし}を{取|と}るとよさが{分|わ}かるようになる。",
        "{多|おお}くのメッセージを{含|ふく}んでおり、{見|み}る{人|ひと}に{様々|さまざま}な{感情|かんじょう}を{呼|よ}び{起|お}こす。",
        "{明確|めいかく}な{一|ひと}つのメッセージが{伝|つた}わるような{構成力|こうせいりょく}や{力強|ちからづよ}さがある。",
        "{見|み}る{人|ひと}や{心|こころ}の{状態|じょうたい}によって、{受|う}け{取|と}るメッセージが{違|ちが}う。",
      ],
      optArti: [
        "Meskipun waktu muda tidak paham nilainya, setelah tua kita akan memahami kebaikannya.",
        "Mengandung banyak pesan dan membangkitkan berbagai emosi pada yang melihat.",
        "Memiliki kekuatan komposisi dan daya yang menyampaikan satu pesan yang jelas.",
        "Pesan yang diterima berbeda tergantung orang yang melihat dan keadaan hatinya.",
      ],
    },
    59: {
      yomi: "{写真|しゃしん}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang foto, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{誰|だれ}もがどこでも{撮|と}れる{時代|じだい}になり、{心|こころ}に{迫|せま}るものを{撮|と}ることが{難|むずか}しくなっている。",
        "{想像力|そうぞうりょく}を{生|い}かせば、{他|ほか}の{人|ひと}が{見逃|みのが}していた{視点|してん}で{撮|と}れる{環境|かんきょう}が{整|ととの}ってきている。",
        "{他|ほか}の{人|ひと}にはない{視点|してん}で{想像力|そうぞうりょく}を{呼|よ}び{起|お}こすものが{撮|と}れれば、{力|ちから}を{持|も}ち{続|つづ}ける。",
        "{技術|ぎじゅつ}の{進歩|しんぽ}で{誰|だれ}もがよいものが{撮|と}れるようになり、{力|ちから}が{再|さい}{認識|にんしき}されている。",
      ],
      optArti: [
        "Sudah menjadi zaman di mana siapa pun bisa memotret di mana saja, sehingga makin sulit memotret sesuatu yang menyentuh hati.",
        "Jika imajinasi dimanfaatkan, lingkungan untuk memotret dari sudut pandang yang terlewatkan orang lain mulai tersedia.",
        "Jika bisa memotret sesuatu yang membangkitkan imajinasi dari sudut pandang yang tidak dimiliki orang lain, foto akan terus memiliki kekuatan.",
        "Berkat kemajuan teknologi, siapa pun bisa memotret dengan bagus, sehingga kekuatan foto dikenali kembali.",
      ],
    },

    // ── 問題11：統合理解 ──
    60: {
      yomi: "{小説|しょうせつ}を{書|か}くときの{問題点|もんだいてん}として、AとBが{共通|きょうつう}して{挙|あ}げていることは{何|なに}か。",
      arti: "Sebagai masalah ketika menulis novel, apa yang sama-sama disebutkan oleh A dan B?",
      optYomi: [
        "うまく{書|か}けないのは{技術|ぎじゅつ}が{足|た}りないからだと{考|かんが}えること。",
        "{他者|たしゃ}にアドバイスを{求|もと}めて、{自分|じぶん}で{考|かんが}えようとしないこと。",
        "{本当|ほんとう}の{小説|しょうせつ}とはどのようなものかが{理解|りかい}できていないこと。",
        "{書|か}くのに{必要|ひつよう}な{技術|ぎじゅつ}や{手法|しゅほう}を{身|み}につけていると{過信|かしん}すること。",
      ],
      optArti: [
        "Menganggap tidak bisa menulis dengan baik karena kurang teknik.",
        "Meminta nasihat orang lain dan tidak mau berpikir sendiri.",
        "Tidak memahami seperti apa novel yang sebenarnya.",
        "Terlalu yakin bahwa diri sudah menguasai teknik dan metode yang diperlukan untuk menulis.",
      ],
    },
    61: {
      yomi: "{小説|しょうせつ}を{書|か}くために{必要|ひつよう}なことについて、AとBはどのように{述|の}べているか。",
      arti: "Tentang hal yang diperlukan untuk menulis novel, apa yang dikatakan A dan B?",
      optYomi: [
        "AもBも、{本当|ほんとう}に{書|か}きたいことかどうかを{考|かんが}えながら{書|か}くことだと{述|の}べている。",
        "AもBも、うまく{書|か}けないと{思|おも}っても、{怠|なま}けずに{書|か}き{続|つづ}けることだと{述|の}べている。",
        "Aは{自分|じぶん}が{書|か}きたいことを{明確|めいかく}にすることだと{述|の}べ、Bは{最後|さいご}まで{書|か}き{上|あ}げることだと{述|の}べている。",
        "Aは{内容|ないよう}と{表現|ひょうげん}の{関係|かんけい}を{考|かんが}えて{書|か}くことだと{述|の}べ、Bは{手順|てじゅん}に{沿|そ}って{書|か}き{進|すす}めていくことだと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama mengatakan bahwa yang perlu adalah menulis sambil memikirkan apakah itu benar-benar hal yang ingin ditulis.",
        "A dan B sama-sama mengatakan bahwa yang perlu adalah terus menulis tanpa malas meskipun merasa tidak bisa menulis dengan baik.",
        "A mengatakan yang perlu adalah memperjelas apa yang ingin ditulis, sedangkan B mengatakan yang perlu adalah menyelesaikan tulisan sampai akhir.",
        "A mengatakan yang perlu adalah menulis sambil memikirkan hubungan isi dan ekspresi, sedangkan B mengatakan yang perlu adalah menulis mengikuti langkah-langkah.",
      ],
    },

    // ── 問題12：内容理解（長文）──
    62: {
      yomi: "SNSの{支持|しじ}はほとんど{役|やく}に{立|た}たないとあるが、なぜか。",
      arti: "Tertulis \"dukungan di media sosial hampir tidak berguna\"; mengapa?",
      optYomi: [
        "SNSの{支持者|しじしゃ}の{意見|いけん}はさまざまで、すぐにはまとまらないから。",
        "SNSの{支持者|しじしゃ}は{無名|むめい}で{権威|けんい}を{持|も}たないひとが{多|おお}いから。",
        "SNSの{支持者|しじしゃ}はトラブルの{原因|げんいん}を{誤解|ごかい}したまますぐに{発信|はっしん}するから。",
        "SNSの{支持者|しじしゃ}はすぐに{興味|きょうみ}をなくし、{去|さ}ってしまうから。",
      ],
      optArti: [
        "Karena pendapat para pendukung di media sosial beragam dan tidak bisa segera disatukan.",
        "Karena banyak pendukung di media sosial yang tidak terkenal dan tidak punya otoritas.",
        "Karena pendukung di media sosial langsung menyebarkan informasi sambil salah paham tentang penyebab masalah.",
        "Karena pendukung di media sosial cepat kehilangan minat lalu pergi.",
      ],
    },
    63: {
      yomi: "{困難|こんなん}な{時期|じき}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Tentang masa-masa sulit, apa yang dikatakan penulis?",
      optYomi: [
        "{自分|じぶん}と{世界|せかい}の{認識|にんしき}のズレに{気|き}づき{自分|じぶん}が{変|か}わろうとすれば、{乗|の}り{越|こ}えられる。",
        "「{議論|ぎろん}」によって{相手|あいて}や{自分|じぶん}を{変化|へんか}させることで、{乗|の}り{越|こ}えられる。",
        "{少数|しょうすう}の{身|み}の{回|まわ}りの{人々|ひとびと}から{人間|にんげん}{関係|かんけい}を{広|ひろ}げていけば、{乗|の}り{越|こ}えられる。",
        "{家族|かぞく}や{友人|ゆうじん}のような{存在|そんざい}との{深|ふか}い{関係|かんけい}によって、{乗|の}り{越|こ}えられる。",
      ],
      optArti: [
        "Bisa dilalui jika kita menyadari kesenjangan pemahaman antara diri dan dunia, lalu berusaha berubah.",
        "Bisa dilalui dengan mengubah orang lain dan diri sendiri melalui \"debat\".",
        "Bisa dilalui jika kita memperluas hubungan mulai dari sedikit orang di sekitar kita.",
        "Bisa dilalui berkat hubungan yang dalam dengan orang-orang seperti keluarga dan teman.",
      ],
    },
    64: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin dikatakan penulis?",
      optYomi: [
        "{情報|じょうほう}{技術|ぎじゅつ}の{特徴|とくちょう}を{理解|りかい}したうえで{活用|かつよう}すれば、{自分|じぶん}{自身|じしん}の{変化|へんか}につながる。",
        "{情報|じょうほう}{技術|ぎじゅつ}を{活用|かつよう}すれば、{面倒|めんどう}な{人間|にんげん}{関係|かんけい}を{変|か}えられる{可能性|かのうせい}がある。",
        "{情報|じょうほう}{技術|ぎじゅつ}によって{作|つく}られた{人間|にんげん}{関係|かんけい}では、{人間|にんげん}の{変化|へんか}は{期待|きたい}できない。",
        "{情報|じょうほう}{技術|ぎじゅつ}は{人間|にんげん}の{変化|へんか}の{可能性|かのうせい}を{奪|うば}うものであり、{利用|りよう}は{控|ひか}えるべきだ。",
      ],
      optArti: [
        "Jika teknologi informasi dimanfaatkan setelah memahami cirinya, itu akan membawa perubahan pada diri sendiri.",
        "Jika teknologi informasi dimanfaatkan, hubungan antarmanusia yang merepotkan mungkin bisa diubah.",
        "Dalam hubungan antarmanusia yang dibentuk oleh teknologi informasi, perubahan manusia tidak bisa diharapkan.",
        "Teknologi informasi merampas kemungkinan manusia untuk berubah, jadi penggunaannya harus dibatasi.",
      ],
    },

    // ── 問題13：情報検索 ──
    65: {
      yomi: "チョウさんは、{机|つくえ}1{台|だい}を{買|か}い{取|と}ってもらいたいと{思|おも}っている。{机|つくえ}は、{重|おも}さが12kgで、{三辺|さんぺん}の{合計|ごうけい}が220cmである。チョウさんが{利用|りよう}できる{方法|ほうほう}はどれか。",
      arti: "Zhou ingin menjual satu meja (agar dibeli toko). Meja itu beratnya 12 kg dan jumlah ketiga sisinya 220 cm. Cara mana yang bisa digunakan Zhou?",
      optYomi: [
        "{店頭|てんとう}{買取|かいとり}か{出張|しゅっちょう}{買取|かいとり}か{宅配|たくはい}{買取|かいとり}",
        "{店頭|てんとう}{買取|かいとり}か{出張|しゅっちょう}{買取|かいとり}",
        "{店頭|てんとう}{買取|かいとり}か{宅配|たくはい}{買取|かいとり}",
        "{店頭|てんとう}{買取|かいとり}",
      ],
      optArti: [
        "Pembelian di toko, pembelian dengan kunjungan, atau pembelian lewat kurir",
        "Pembelian di toko atau pembelian dengan kunjungan",
        "Pembelian di toko atau pembelian lewat kurir",
        "Pembelian di toko",
      ],
    },
    66: {
      yomi: "{森村|もりむら}さんは、ギター（{重|おも}さ5kg、{三辺|さんぺん}の{合計|ごうけい}150cm）と{自転車|じてんしゃ}（{重|おも}さ10kg、{三辺|さんぺん}の{合計|ごうけい}160cm）をまとめて{買|か}い{取|と}ってもらいたいと{思|おも}っているが、{店頭|てんとう}に{自分|じぶん}で{持|も}っていかずに{済|す}む{方法|ほうほう}がいい。{森村|もりむら}さんが{利用|りよう}できる{方法|ほうほう}はどれで、{何|なに}を{準備|じゅんび}しなければならないか。",
      arti: "Morimura ingin menjual gitar (berat 5 kg, jumlah ketiga sisi 150 cm) dan sepeda (berat 10 kg, jumlah ketiga sisi 160 cm) sekaligus, tetapi lebih suka cara yang tidak mengharuskannya membawa sendiri ke toko. Cara mana yang bisa digunakan Morimura, dan apa yang harus ia siapkan?",
      optYomi: [
        "{宅配|たくはい}{買取|かいとり}で、{品物|しなもの}と{顔|かお}{写真|じゃしん}{付|つ}きの{本人|ほんにん}{確認|かくにん}{書類|しょるい}のコピーを{準備|じゅんび}する。",
        "{宅配|たくはい}{買取|かいとり}で、{品物|しなもの}と{本人|ほんにん}{確認|かくにん}{書類|しょるい}のコピーを{準備|じゅんび}する。{本人|ほんにん}{確認|かくにん}{書類|しょるい}は、{顔|かお}{写真|じゃしん}{付|つ}きでなくてもいい。",
        "{出張|しゅっちょう}{買取|かいとり}で、{品物|しなもの}と{顔|かお}{写真|じゃしん}{付|つ}きの{本人|ほんにん}{確認|かくにん}{書類|しょるい}を{準備|じゅんび}する。",
        "{出張|しゅっちょう}{買取|かいとり}で、{品物|しなもの}と{本人|ほんにん}{確認|かくにん}{書類|しょるい}を{準備|じゅんび}する。{本人|ほんにん}{確認|かくにん}{書類|しょるい}は、{顔|かお}{写真|じゃしん}{付|つ}きでなくてもいい。",
      ],
      optArti: [
        "Pembelian lewat kurir; siapkan barang dan fotokopi dokumen identitas berfoto wajah.",
        "Pembelian lewat kurir; siapkan barang dan fotokopi dokumen identitas. Dokumen identitas tidak harus berfoto wajah.",
        "Pembelian dengan kunjungan; siapkan barang dan dokumen identitas berfoto wajah.",
        "Pembelian dengan kunjungan; siapkan barang dan dokumen identitas. Dokumen identitas tidak harus berfoto wajah.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：エッセイのネタ ──
    "7": {
      yomi: `{以下|いか}は、{作家|さっか}が{書|か}いたエッセイである。

エッセイのネタのほとんどを、{私|わたし}は{日常|にちじょう}の{中|なか}から{探|さが}している。もちろん「エッセイに{書|か}いて{面白|おもしろ}いネタ」と「{書|か}いてもあまり{面白|おもしろ}くないネタ」とがある。{面白|おもしろ}いものを[41]。

つまり{君|きみ}は、{自分|じぶん}が{書|か}くエッセイは{全部|ぜんぶ}{面白|おもしろ}いと{言|い}いたいのかね？ という{声|こえ}が{聞|き}こえるので、さらに{説明|せつめい}すると、{面白|おもしろ}いかどうかは、まずは「{自分|じぶん}にとって」である。{自分|じぶん}にとって{面白|おもしろ}いとはどういうことか。それは{私|わたし}の{場合|ばあい}、「{自分|じぶん}がそれまで{知|し}らなかったこと」を{書|か}く、[42]。

{知識|ちしき}というよりは{感覚|かんかく}や{感情|かんじょう}であることが{多|おお}い。{今|いま}まで{見|み}えなかったものが{見|み}えたとき。{同|おな}じ{場所|ばしょ}なのに{違|ちが}う{場所|ばしょ}のように{感|かん}じられたとき。ずっと{眠|ねむ}っていた{記憶|きおく}。{思|おも}いがけない{嬉|うれ}しさや{悲|かな}しさや{淋|さび}しさ。{不意|ふい}に{自分|じぶん}の{中|なか}に{生|う}まれた、{世界|せかい}というものへのあらたな{認識|にんしき}。

{春|はる}になったら{暖|あたた}かくなるとか、{困|こま}っている{人|ひと}には{親切|しんせつ}にしたほうがいいとか、{不倫|ふりん}はしないほうがいいとか、{梅|うめ}に{鶯|うぐいす}とか{月|つき}に{雁|かり}とか、すでに{知|し}っていることは、いくら{上手|じょうず}に{書|か}いてもつまらない。このエッセイの、665{文字|もじ}という{短|みじか}さの{中|なか}ですら、{書|か}いている{途中|とちゅう}で{退屈|たいくつ}になってきてしまう。

エッセイにかぎらず、[43]でもそうだ。{理想|りそう}を{言|い}えば、{知|し}らないことを「{知|し}った」という{報告|ほうこく}ではなくて、この{世|よ}の{謎|なぞ}、{自分|じぶん}{自身|じしん}の{謎|なぞ}に{近|ちか}づいていく{過程|かてい}を{書|か}いていきたいと{思|おも}っているし、そのような{書|か}きかたをしているときが、{結局|けっきょく}、{私|わたし}は{一番|いちばん}{面白|おもしろ}いのだ。あるいはこれは{書|か}くことにかぎらず、{人生|じんせい}{全般|ぜんぱん}に{対|たい}して{採用|さいよう}したいと{思|おも}っている[44]。`,
      arti: `Berikut ini adalah esai yang ditulis oleh seorang pengarang.

Hampir semua bahan esai saya cari dari kehidupan sehari-hari. Tentu saja ada "bahan yang menarik untuk ditulis dalam esai" dan "bahan yang tidak begitu menarik meskipun ditulis". Saya [41] yang menarik.

Karena saya bisa mendengar suara yang bertanya, "Jadi maksudmu semua esai yang kau tulis itu menarik?", saya jelaskan lebih lanjut: menarik atau tidaknya itu pertama-tama "bagi diri saya sendiri". Apa artinya menarik bagi diri sendiri? Dalam kasus saya, [42] menulis "hal yang sampai saat itu tidak saya ketahui".

Seringnya itu bukan pengetahuan, melainkan perasaan atau emosi. Saat bisa melihat sesuatu yang selama ini tak terlihat. Saat tempat yang sama terasa seperti tempat yang berbeda. Kenangan yang lama tertidur. Rasa senang, sedih, atau sepi yang tak terduga. Pemahaman baru tentang dunia yang tiba-tiba lahir dalam diri.

Hal-hal yang sudah diketahui — misalnya kalau musim semi tiba cuaca jadi hangat, sebaiknya baik hati kepada orang yang kesusahan, sebaiknya tidak berselingkuh, atau pasangan klise seperti "bunga plum dan burung bulbul", "bulan dan angsa liar" — sepandai apa pun ditulis, tetap membosankan. Bahkan dalam esai sependek 665 karakter ini pun, saya bisa mulai bosan di tengah-tengah menulis.

Bukan hanya esai, [43] pun begitu. Idealnya, saya ingin menulis bukan laporan bahwa saya telah "mengetahui" hal yang tadinya tidak saya ketahui, melainkan proses mendekati misteri dunia ini dan misteri diri sendiri; dan pada akhirnya, saat menulis dengan cara seperti itulah saya merasa paling senang. Atau barangkali ini [44] yang ingin saya terapkan bukan hanya dalam menulis, melainkan pada kehidupan secara keseluruhan.`,
    },

    // ── 問題8 (1)：機械と人間 ──
    "8-1": {
      yomi: `{機械|きかい}はどんどん{精密化|せいみつか}し、{巨大|きょだい}に{進化|しんか}している。{人間|にんげん}の{介入|かいにゅう}を{許|ゆる}さないかのような{迫力|はくりょく}さえ{感|かん}じさせる。だが、どれほど{機械|きかい}が{進化|しんか}しようとも、{本質|ほんしつ}は{変|か}わらない。{熟練工|じゅくれんこう}（{注|ちゅう}1）が{金槌|かなづち}やドライバーなどの{道具|どうぐ}を、{自分|じぶん}の{体|からだ}の{一部|いちぶ}のように{自在|じざい}に{使|つか}いこなすことで{最大|さいだい}のパフォーマンスを{発揮|はっき}するように、{精密|せいみつ}{機器|きき}や{巨大|きょだい}な{設備|せつび}も、{人間|にんげん}が{活|い}き{活|い}きと{動|うご}かすことが{必要|ひつよう}である。{機械|きかい}も{道具|どうぐ}である、という{当|あ}たり{前|まえ}のことを、{私|わたし}たちは{忘|わす}れてはいないだろうか。{人間|にんげん}が{機械|きかい}に{使|つか}われたり、{単|たん}なる{番人|ばんにん}（{注|ちゅう}2）になったりするようなことがあってはいけない。

（{注|ちゅう}1）{熟練工|じゅくれんこう}：{熟練|じゅくれん}した{職人|しょくにん}
（{注|ちゅう}2）{番人|ばんにん}：{監視|かんし}する{人|ひと}`,
      arti: `Mesin makin presisi dan berkembang menjadi raksasa. Bahkan terasa seolah-olah tidak mengizinkan campur tangan manusia. Namun, sehebat apa pun mesin berkembang, hakikatnya tidak berubah. Sebagaimana tukang terampil (catatan 1) mengeluarkan performa terbaiknya dengan menggunakan alat seperti palu dan obeng secara leluasa seakan-akan bagian dari tubuhnya sendiri, peralatan presisi dan fasilitas raksasa pun perlu digerakkan oleh manusia dengan penuh semangat. Bukankah kita melupakan hal yang sudah sewajarnya, bahwa mesin pun adalah alat? Tidak boleh terjadi manusia diperalat oleh mesin atau hanya menjadi penjaga (catatan 2) belaka.

(Catatan 1) 熟練工: perajin/tukang yang terampil
(Catatan 2) 番人: orang yang mengawasi`,
    },

    // ── 問題8 (2)：イヤホン予約メール ──
    "8-2": {
      yomi: `{以下|いか}は、ある{電気店|でんきてん}から{届|とど}いたメールである。

{宛|あ}て{先|さき}：syo_yasuhara@kfy.co.jp
{件名|けんめい}：イヤホン「AS-10」の{件|けん}
{日時|にちじ}：9{月|がつ}13{日|にち} 13:30

{安原|やすはら} {正一|しょういち}{様|さま}

LM{電気|でんき}{大木店|おおきてん}をご{利用|りよう}いただき、ありがとうございます。

ご{予約|よやく}いただいたイヤホン「AS-10」ですが、メーカーの{生産|せいさん}が{遅|おく}れているため、{発売日|はつばいび}（9{月|がつ}{20日|はつか}）{当日|とうじつ}に、すべてのお{客様|きゃくさま}にお{渡|わた}しすることが{困難|こんなん}な{状況|じょうきょう}です。
{本日|ほんじつ}、{当店|とうてん}で9{月|がつ}{20日|はつか}にお{渡|わた}しできる{数|かず}が{確定|かくてい}し、{安原|やすはら}{様|さま}のご{注文|ちゅうもん}{分|ぶん}は{確保|かくほ}できないことが{分|わ}かりました。{大変|たいへん}{申|もう}し{訳|わけ}ございません。
{安原|やすはら}{様|さま}へのお{渡|わた}しは10{月|がつ}{以降|いこう}になってしまうのですが、いかがいたしましょうか。ご{注文|ちゅうもん}のキャンセルも{承|うけたまわ}っております。

お{忙|いそが}しいところ{恐縮|きょうしゅく}ですが、ご{返信|へんしん}お{待|ま}ちしております。

LM{電気|でんき} {大木店|おおきてん}
{担当|たんとう}：{上田|うえだ} {映子|えいこ}`,
      arti: `Berikut ini adalah email yang dikirim oleh sebuah toko elektronik.

Kepada: syo_yasuhara@kfy.co.jp
Perihal: Tentang earphone "AS-10"
Waktu: 13 September, 13.30

Yth. Bapak Shōichi Yasuhara

Terima kasih telah menggunakan layanan LM Denki cabang Ōki.

Mengenai earphone "AS-10" yang Bapak pesan, karena produksi dari pabrikan terlambat, kami kesulitan menyerahkannya kepada semua pelanggan tepat pada hari rilis (20 September).
Hari ini jumlah yang dapat kami serahkan di toko pada tanggal 20 September telah dipastikan, dan ternyata jatah pesanan Bapak Yasuhara tidak dapat kami amankan. Kami mohon maaf yang sebesar-besarnya.
Penyerahan kepada Bapak Yasuhara akan menjadi bulan Oktober atau sesudahnya; bagaimana sebaiknya? Kami juga menerima pembatalan pesanan.

Mohon maaf mengganggu kesibukan Bapak; kami menunggu balasan Bapak.

LM Denki cabang Ōki
Petugas: Eiko Ueda`,
    },

    // ── 問題8 (3)：顧客の絞り込み ──
    "8-3": {
      yomi: `{消費者|しょうひしゃ}ニーズの{多様化|たようか}が{進|すす}む{今日|こんにち}、「あらゆる{人|ひと}のための{商品|しょうひん}」はありえない。{経営|けいえい}{資源|しげん}が{限|かぎ}られるひとつの{企業|きぎょう}が、すべての{顧客|こきゃく}を{満足|まんぞく}させることは{不可能|ふかのう}だ。
{今|いま}の{時代|じだい}、すべての{顧客|こきゃく}の{要望|ようぼう}に{応|こた}えようとすると、{結局|けっきょく}、{誰|だれ}の{要望|ようぼう}にも{応|こた}えないことになってしまう。「{万人|ばんにん}{受|う}け」（{注|ちゅう}）という{言葉|ことば}はすでに{死語|しご}かもしれない。
「{誰|だれ}に{売|う}らないか」を{決|き}めることによって、{経営|けいえい}{資源|しげん}を{最大限|さいだいげん}に{有効|ゆうこう}に{活用|かつよう}し、「{売|う}るべき{人|ひと}」に{集中|しゅうちゅう}することができる。

（{注|ちゅう}）{万人|ばんにん}{受|う}け：{皆|みな}に{受|う}け{入|い}れられること`,
      arti: `Saat ini, ketika kebutuhan konsumen makin beragam, "produk untuk semua orang" itu mustahil. Satu perusahaan dengan sumber daya usaha yang terbatas tidak mungkin memuaskan semua pelanggan.
Di zaman sekarang, kalau berusaha memenuhi keinginan semua pelanggan, pada akhirnya kita tidak memenuhi keinginan siapa pun. Kata "disukai semua orang" (catatan) mungkin sudah menjadi kata mati.
Dengan menentukan "kepada siapa kita tidak menjual", kita bisa memanfaatkan sumber daya usaha seefektif mungkin dan berfokus pada "orang yang semestinya menjadi sasaran penjualan".

(Catatan) 万人受け: diterima oleh semua orang`,
    },

    // ── 問題8 (4)：他人の評価 ──
    "8-4": {
      yomi: `「{自分|じぶん}の{悪|わる}い{部分|ぶぶん}を{露|あらわ}にすると、{嫌|きら}われたり、{敬遠|けいえん}されたりするのではないか」という{不安|ふあん}は、もちろんあるだろう。{見|み}せ{方|かた}がまずいと、{実際|じっさい}にそうなる{危険性|きけんせい}もないとは{言|い}えない。しかし、{世間|せけん}からの{評価|ひょうか}や{期待|きたい}に{対|たい}して{神経質|しんけいしつ}になりすぎ、そのせいで{常|つね}に{不安|ふあん}を{抱|かか}えながら{生|い}きていくくらいなら、{他人|たにん}から{嫌|きら}われるほうがよほどましである。
そもそも{他人|たにん}は、あなたが{思|おも}っているほどあなたに{対|たい}して{期待|きたい}などしていない。{誰|だれ}もが{皆|みな}、{自分|じぶん}のことで{頭|あたま}がいっぱいで、{他人|たにん}のことなど{気|き}にかけてはいない。`,
      arti: `Tentu ada kecemasan, "kalau aku memperlihatkan sisi burukku, jangan-jangan aku dibenci atau dijauhi." Jika cara memperlihatkannya buruk, tidak bisa dikatakan tidak ada risiko hal itu benar-benar terjadi. Namun, daripada terlalu peka terhadap penilaian dan harapan masyarakat lalu karenanya hidup terus-menerus dengan kecemasan, lebih baik dibenci orang lain.
Lagi pula, orang lain tidak berharap sebanyak yang Anda kira terhadap Anda. Semua orang sibuk memikirkan dirinya sendiri dan tidak memedulikan orang lain.`,
    },

    // ── 問題9 (1)：哲学する力 ──
    "9-1": {
      yomi: `{中等|ちゅうとう}{教育|きょういく}（{注|ちゅう}1）で、{生徒|せいと}たちはいろいろな{科目|かもく}でさまざまな{分野|ぶんや}の{知識|ちしき}に{触|ふ}れていきます。

どのような{知識|ちしき}でも{必|かなら}ず{前提|ぜんてい}となる{世界観|せかいかん}や{物事|ものごと}の{枠組|わくぐ}みがあり、そうした{背景|はいけい}なくしては{該当|がいとう}する{理論|りろん}や{見識|けんしき}が{成|な}り{立|た}ちません。

{生徒|せいと}たちは、それぞれの{科目|かもく}で{分野|ぶんや}ごとの{専門|せんもん}{知識|ちしき}に{触|ふ}れていくことによって、{前提|ぜんてい}とされる{世界観|せかいかん}や{物事|ものごと}の{枠組|わくぐ}みを、{自分|じぶん}の{世界観|せかいかん}や{考|かんが}え{方|かた}の{一部|いちぶ}として{固定化|こていか}させていきます。

つまり、{学習|がくしゅう}を{進|すす}めて、{専門|せんもん}{知識|ちしき}を{身|み}につければつけるほど、{前提|ぜんてい}とされる{価値観|かちかん}や{枠組|わくぐ}みに{縛|しば}られていくことになるのです。

{一方|いっぽう}で、{技術|ぎじゅつ}{革新|かくしん}やグローバル{化|か}により、{社会|しゃかい}の{仕組|しく}みや{共通|きょうつう}{認識|にんしき}が、{目|め}まぐるしく{変化|へんか}する{中|なか}、{現在|げんざい}の{自分|じぶん}の{世界観|せかいかん}から{飛|と}び{出|だ}して、{他|ほか}の{価値観|かちかん}を{理解|りかい}する{力|ちから}が{必要|ひつよう}とされています。

{哲学|てつがく}の{営|いとな}みの{中核|ちゅうかく}は、{物事|ものごと}の{根本|こんぽん}や{前提|ぜんてい}を{問|と}い{直|なお}して、{考察|こうさつ}することにあります。

{哲学|てつがく}の{営|いとな}みに{親|した}しむことで、{現在|げんざい}のものの{見方|みかた}や{考|かんが}える{枠組|わくぐ}みから{自分|じぶん}を{解|と}き{放|はな}ち、{急速|きゅうそく}に{変化|へんか}する{社会|しゃかい}の{中|なか}で、{揺|ゆ}るぎない（{注|ちゅう}2）{自分|じぶん}の{価値観|かちかん}を{模索|もさく}していく{力|ちから}を{身|み}につけることができるのです。

より{深|ふか}いレベルでの{学習|がくしゅう}が{始|はじ}まる{中等|ちゅうとう}{教育|きょういく}においてこそ、より{柔軟|じゅうなん}な「{哲学|てつがく}する{力|ちから}」を{養|やしな}い{始|はじ}めることが{必要|ひつよう}とされているのです。

（{注|ちゅう}1）{中等|ちゅうとう}{教育|きょういく}：{中学|ちゅうがく}、{高校|こうこう}での{教育|きょういく}
（{注|ちゅう}2）{揺|ゆ}るぎない：{強固|きょうこ}な`,
      arti: `Dalam pendidikan menengah (catatan 1), para siswa bersentuhan dengan pengetahuan dari berbagai bidang melalui berbagai mata pelajaran.

Pengetahuan apa pun pasti memiliki pandangan dunia dan kerangka berpikir yang menjadi dasarnya; tanpa latar belakang seperti itu, teori dan wawasan yang bersangkutan tidak bisa berdiri.

Dengan bersentuhan dengan pengetahuan khusus setiap bidang dalam masing-masing mata pelajaran, para siswa memantapkan pandangan dunia dan kerangka berpikir yang menjadi dasar itu sebagai bagian dari pandangan dunia dan cara berpikir mereka sendiri.

Dengan kata lain, makin jauh belajar dan makin banyak pengetahuan khusus yang dikuasai, makin terikat pula kita oleh nilai-nilai dan kerangka yang menjadi dasarnya.

Di sisi lain, ketika sistem masyarakat dan pemahaman bersama berubah dengan sangat cepat akibat inovasi teknologi dan globalisasi, dibutuhkan kemampuan untuk keluar dari pandangan dunia diri saat ini dan memahami nilai-nilai lain.

Inti kegiatan filsafat adalah mempertanyakan ulang dan menelaah akar dan dasar dari segala sesuatu.

Dengan akrab dengan kegiatan filsafat, kita dapat membebaskan diri dari cara pandang dan kerangka berpikir saat ini, dan memperoleh kemampuan untuk mencari nilai-nilai diri yang kokoh (catatan 2) di tengah masyarakat yang berubah dengan cepat.

Justru dalam pendidikan menengah, tempat dimulainya pembelajaran di tingkat yang lebih dalam, kita perlu mulai memupuk "kemampuan berfilsafat" yang lebih lentur.

(Catatan 1) 中等教育: pendidikan di SMP dan SMA
(Catatan 2) 揺るぎない: kokoh, kuat`,
    },

    // ── 問題9 (2)：羽毛を持つ恐竜 ──
    "9-2": {
      yomi: `{以下|いか}は、{羽毛|うもう}を{持|も}つ{恐竜|きょうりゅう}について{述|の}べられた{文章|ぶんしょう}である。

{恐竜|きょうりゅう}には、{鳥|とり}のように{卵|たまご}を{温|あたた}める{習性|しゅうせい}があったことがわかっています。

（{中略|ちゅうりゃく}）

{気|き}になるのは、いつから{卵|たまご}を{温|あたた}めるようになったのかということですが、{羽毛|うもう}を{持|も}った{時点|じてん}で、{卵|たまご}を{温|あたた}める{習性|しゅうせい}も{持|も}っていた{可能性|かのうせい}があります。

{羽毛|うもう}を{持|も}つことで、{体温|たいおん}を{維持|いじ}できるようになるので、その{体温|たいおん}を{使|つか}って{卵|たまご}の{温度|おんど}を{一定|いってい}に{保|たも}つことができます。{特|とく}に{夜間|やかん}は{気温|きおん}が{下|さ}がるので、{夜|よる}に{親|おや}が{卵|たまご}の{上|うえ}に{座|すわ}って{眠|ねむ}っていれば、{卵|たまご}の{保温|ほおん}にはとても{効果的|こうかてき}です。{卵|たまご}が{一定|いってい}の{温|あたた}かさで{保|たも}たれれば、さまざまな{環境|かんきょう}で{卵|たまご}が{孵|かえ}る{確率|かくりつ}が{高|たか}くなります。

{爬虫類|はちゅうるい}は{卵|たまご}を{温|あたた}めません。{爬虫類|はちゅうるい}の{卵|たまご}は、{放置|ほうち}されても、１{日|にち}のうちある{程度|ていど}の{時間|じかん}、{気温|きおん}が30{度|ど}を{超|こ}えるなどの{条件|じょうけん}が{整|ととの}っていれば、{自然|しぜん}と{孵|かえ}ります。その{代|か}わり、{爬虫類|はちゅうるい}は１{年|ねん}のうち{気温|きおん}の{高|たか}い{限|かぎ}られた{時期|じき}にしか{産卵|さんらん}しません。{生息|せいそく}{地域|ちいき}（{注|ちゅう}）も{限|かぎ}られます。

{羽毛|うもう}のある{恐竜|きょうりゅう}が、{鳥|とり}に{近|ちか}い{体温|たいおん}を{持|も}っていたとすれば、{夏|なつ}{以外|いがい}の{季節|きせつ}でも、{寒冷地|かんれいち}でも、{安定|あんてい}して35〜40{度|ど}ほどの{温度|おんど}で{卵|たまご}を{温|あたた}めることが{可能|かのう}です。

{厳密|げんみつ}に{言|い}うと、{羽毛|うもう}があると{体|からだ}の{熱|ねつ}を{逃|に}がさないので、{卵|たまご}を{温|あたた}めるには{不向|ふむ}きです。{人間|にんげん}で{言|い}うと、{衣服|いふく}の{上|うえ}からでは{温|あたた}めにくいのと{同|おな}じです。{温|あたた}めるなら、{服|ふく}の{中|なか}に{入|い}れて{直接|ちょくせつ}{体温|たいおん}が{伝|つた}わるようにするはずです。

{卵|たまご}を{抱|だ}く{時期|じき}の{鳥|とり}も、{卵|たまご}と{接|せっ}する{部分|ぶぶん}の{羽毛|うもう}がなくなり、{皮膚|ひふ}がむき{出|だ}しになります。

{恐竜|きょうりゅう}が{卵|たまご}を{温|あたた}めていたとすれば、おそらく{同|おな}じように、お{腹|なか}のあたりの{羽毛|うもう}が{抜|ぬ}けていたと{思|おも}われます。

（{注|ちゅう}）{生息|せいそく}{地域|ちいき}：{生活|せいかつ}している{地域|ちいき}`,
      arti: `Berikut ini adalah tulisan tentang dinosaurus berbulu halus.

Telah diketahui bahwa dinosaurus memiliki kebiasaan mengerami telur seperti burung.

(dihilangkan sebagian)

Yang membuat penasaran adalah sejak kapan mereka mulai mengerami telur; ada kemungkinan bahwa begitu memiliki bulu halus, mereka juga sudah memiliki kebiasaan mengerami telur.

Dengan memiliki bulu halus, mereka bisa mempertahankan suhu tubuh, sehingga suhu tubuh itu bisa dipakai untuk menjaga suhu telur tetap stabil. Terutama pada malam hari suhu udara turun, jadi jika induknya tidur sambil duduk di atas telur pada malam hari, itu sangat efektif untuk menjaga kehangatan telur. Jika telur dijaga pada kehangatan yang stabil, kemungkinan telur menetas di berbagai lingkungan pun meningkat.

Reptil tidak mengerami telurnya. Telur reptil, walaupun dibiarkan, akan menetas dengan sendirinya asalkan syaratnya terpenuhi, seperti suhu udara melebihi 30 derajat selama beberapa waktu dalam sehari. Sebagai gantinya, reptil hanya bertelur pada masa terbatas dalam setahun ketika suhu udara tinggi. Wilayah habitatnya (catatan) pun terbatas.

Jika dinosaurus berbulu memiliki suhu tubuh yang mendekati burung, mereka bisa mengerami telur secara stabil pada suhu sekitar 35–40 derajat, bahkan di musim selain musim panas maupun di daerah dingin.

Sebenarnya, kalau mau tepat, bulu halus tidak membiarkan panas tubuh keluar, sehingga kurang cocok untuk mengerami telur. Kalau pada manusia, sama seperti sulit menghangatkan sesuatu dari atas pakaian. Kalau mau menghangatkan, tentu kita akan memasukkannya ke dalam pakaian agar suhu tubuh tersalur langsung.

Burung yang sedang dalam masa mengerami telur pun kehilangan bulu di bagian yang bersentuhan dengan telur, sehingga kulitnya terbuka.

Jika dinosaurus mengerami telur, diduga bulu di sekitar perutnya pun rontok dengan cara yang sama.

(Catatan) 生息地域: wilayah tempat hidup`,
    },

    // ── 問題9 (3)：リーダーとメンバーの適性 ──
    "9-3": {
      yomi: `{以下|いか}は、{仕事|しごと}でリーダーの{立場|たちば}にある{人|ひと}に{向|む}けて{書|か}かれた{文章|ぶんしょう}である。

「{君|きみ}は{何|なに}がやりたいの？」「どんな{仕事|しごと}が{好|す}きですか？」と{聞|き}いたとき、{本人|ほんにん}の{口|くち}から{出|で}てくる{答|こた}えが{本当|ほんとう}に「{向|む}いていること」とは{限|かぎ}りません。なぜなら、どんな{仕事|しごと}をやりたいかについては、{驚|おどろ}くほど{多|おお}くの{人|ひと}がイメージに{左右|さゆう}されています。{特|とく}に{若|わか}い{人|ひと}や{新人|しんじん}であれば、その{傾向|けいこう}は{強|つよ}くなります。{本人|ほんにん}の{発言|はつげん}を{鵜呑|うの}み（{注|ちゅう}1）にしてはいけないのです。

{仕事|しごと}の{実情|じつじょう}を{知|し}らずに{単純|たんじゅん}に「あの{仕事|しごと}が{好|す}きだ！」と{思|おも}い{込|こ}んでいたり、「{商品|しょうひん}{開発|かいはつ}のAさんは{楽|たの}しそう。{私|わたし}も{商品|しょうひん}{開発|かいはつ}をやりたい」と{憧|あこが}れていたり。{上司|じょうし}に{何|なに}をやりたいか{聞|き}かれたから、それほど{強|つよ}い{興味|きょうみ}があるわけではなくても「{特|とく}にありません」と{答|こた}えるのは{気|き}まずいので、「なんとなくやりたいもの」をとりあえず{答|こた}えただけというケースもあります。

それを{踏|ふ}まえずに、「{君|きみ}、{広報|こうほう}が{好|す}きなの？　じゃあ、やってみなさい！　{自分|じぶん}で{言|い}うならモチベーション（{注|ちゅう}2）も{高|たか}いからうまくいくだろう」というリーダーは、マネジメント（{注|ちゅう}3）という{大切|たいせつ}な{仕事|しごと}を{放棄|ほうき}しているようなものです。

{本人|ほんにん}も{気|き}づかない{埋|う}もれたスキルを{引|ひ}き{出|だ}し、チームの{勝利|しょうり}に{貢献|こうけん}してもらうには、リーダーがメンバー{自身|じしん}よりも、その{人|ひと}の{適性|てきせい}を{把握|はあく}していなければなりません。

（{中略|ちゅうりゃく}）

{本当|ほんとう}に{適性|てきせい}があれば、{新|あたら}しいポジションで{成果|せいか}を{出|だ}します。{成果|せいか}が{出|で}ると{面白|おもしろ}くなり、ますますスキルが{上|あ}がります。やがて「{自分|じぶん}が{貢献|こうけん}できている、チームの{役|やく}に{立|た}っている」と{実感|じっかん}できるようになれば、それがそのメンバーのやりたい{仕事|しごと}になっていきます。

（{注|ちゅう}1）{鵜呑|うの}みにする：そのまま{受|う}け{入|い}れる
（{注|ちゅう}2）モチベーション：{意欲|いよく}
（{注|ちゅう}3）マネジメント：ここでは、チームのメンバーの{管理|かんり}`,
      arti: `Berikut ini adalah tulisan yang ditujukan kepada orang yang berkedudukan sebagai pemimpin dalam pekerjaan.

Ketika kita bertanya, "Kamu ingin melakukan apa?" atau "Pekerjaan seperti apa yang kamu sukai?", jawaban yang keluar dari mulut orang itu belum tentu benar-benar "hal yang cocok baginya". Sebab, soal pekerjaan apa yang ingin dilakukan, sangat banyak orang yang dipengaruhi oleh citra. Terutama pada anak muda atau karyawan baru, kecenderungan itu makin kuat. Kita tidak boleh menelan mentah-mentah (catatan 1) ucapan orang itu.

Ada yang tanpa tahu keadaan sebenarnya dari pekerjaan itu langsung yakin, "Aku suka pekerjaan itu!", ada pula yang mengagumi, "Si A di pengembangan produk kelihatannya senang. Aku juga ingin bekerja di pengembangan produk." Ada juga kasus di mana, karena ditanya atasan ingin melakukan apa, dan rasanya canggung menjawab "Tidak ada yang khusus" meskipun tidak punya minat yang begitu kuat, ia sekadar menjawab "sesuatu yang entah kenapa ingin dilakukan".

Pemimpin yang tanpa mempertimbangkan hal itu berkata, "Kamu suka humas? Kalau begitu, coba saja! Karena kamu sendiri yang bilang, motivasimu (catatan 2) juga pasti tinggi, jadi akan berhasil," sama saja dengan meninggalkan pekerjaan penting yang disebut manajemen (catatan 3).

Untuk menggali keterampilan terpendam yang bahkan tidak disadari orang itu sendiri dan membuatnya berkontribusi pada kemenangan tim, pemimpin harus lebih memahami bakat orang itu daripada anggota tim itu sendiri.

(dihilangkan sebagian)

Jika memang benar-benar berbakat, ia akan menghasilkan hasil di posisi barunya. Begitu ada hasil, pekerjaan jadi menyenangkan, dan keterampilannya makin meningkat. Lama-kelamaan, jika ia bisa merasakan, "Aku bisa berkontribusi, aku berguna bagi tim," itulah yang akan menjadi pekerjaan yang ingin ia lakukan.

(Catatan 1) 鵜呑みにする: menerima begitu saja
(Catatan 2) モチベーション: motivasi, semangat
(Catatan 3) マネジメント: di sini, pengelolaan anggota tim`,
    },

    // ── 問題9 (4)：実験科学と自己懐疑 ──
    "9-4": {
      yomi: `{実験|じっけん}{科学|かがく}の{世界|せかい}では、{仮説|かせつ}にぴたりと{合致|がっち}するような{結果|けっか}が{得|え}られることはまずないといってよい。その{際|さい}、ほとんどの{研究者|けんきゅうしゃ}はこう{考|かんが}える。{自分|じぶん}の{仮説|かせつ}は{間違|まちが}っていない。ただ、{実験|じっけん}の{方法|ほうほう}がよくないから、よいデータが{出|で}ないのだと。そこで{条件|じょうけん}を{少|すこ}しずつ{変|か}えて、{繰|く}り{返|かえ}し{実験|じっけん}を{行|おこな}うことになる。しかし、ほとんどの{場合|ばあい}、{実験|じっけん}がうまくいかないのは、{実|じつ}は、{仮説|かせつ}そのものが{間違|まちが}っているからなのだ。

だが、{研究者|けんきゅうしゃ}は{頑迷|がんめい}（{注|ちゅう}1）なので{自説|じせつ}に{固執|こしつ}してしまう。かくして{膨大|ぼうだい}な{時間|じかん}と{試行錯誤|しこうさくご}が{浪費|ろうひ}される。なので、{科学|かがく}{研究|けんきゅう}にほんとうに{必要|ひつよう}な{才能|さいのう}は、{天才性|てんさいせい}やひらめきというよりも、むしろ、{自己|じこ}{懐疑|かいぎ}、{失望|しつぼう}に{対|たい}する{耐性|たいせい}（{注|ちゅう}2）、{潔|いさぎよ}い{諦|あきら}め、といったものとなる。

{逆|ぎゃく}に、{実験|じっけん}{科学|かがく}の{世界|せかい}では、{時|とき}として、{思|おも}い{描|えが}いたとおりの、いや、{想像|そうぞう}{以上|いじょう}にすばらしい、{見事|みごと}な{実験|じっけん}データが{得|え}られることがある。こんな{時|とき}、{研究者|けんきゅうしゃ}に{求|もと}められることは{何|なに}か。ぬか{喜|よろこ}び（{注|ちゅう}3）してはならぬ、ということである。{実験|じっけん}の{方法|ほうほう}に{穴|あな}があるから、{見|み}せかけだけの{結果|けっか}が{出|で}ているのかもしれない。つまりここでも{自己|じこ}{懐疑|かいぎ}、（{希望|きぼう}に{対|たい}する）{耐性|たいせい}、{諦|あきら}め、が{必要|ひつよう}となる。

{英語|えいご}にはこんな{言|い}い{方|かた}がある。too good to be true（できすぎは、{真実|しんじつ}ではない）。もう{少|すこ}しだけ{研究者|けんきゅうしゃ}に{冷静|れいせい}さがあればあの「{発見|はっけん}」はなかった。そんな{誤謬|ごびゅう}（{注|ちゅう}4）はいくつでもある。

（{注|ちゅう}1）{頑迷|がんめい}：{頑固|がんこ}
（{注|ちゅう}2）〜に{対|たい}する{耐性|たいせい}：ここでは、〜に{影響|えいきょう}されない{強|つよ}さ
（{注|ちゅう}3）ぬか{喜|よろこ}び：あとでがっかりする{結果|けっか}になる{一時的|いちじてき}な{喜|よろこ}び
（{注|ちゅう}4）{誤謬|ごびゅう}：{誤|あやま}り`,
      arti: `Dalam dunia sains eksperimental, boleh dibilang hampir tidak pernah diperoleh hasil yang persis sesuai dengan hipotesis. Pada saat itu, kebanyakan peneliti berpikir begini: hipotesisku tidak salah; hanya saja metode eksperimennya kurang baik sehingga data yang bagus tidak keluar. Lalu mereka mengubah kondisinya sedikit demi sedikit dan mengulang eksperimen berkali-kali. Namun, dalam kebanyakan kasus, eksperimen tidak berhasil justru karena hipotesis itu sendiri yang salah.

Akan tetapi, peneliti itu keras kepala (catatan 1), sehingga terpaku pada pendapatnya sendiri. Akibatnya, waktu yang sangat banyak dan proses coba-coba terbuang percuma. Karena itu, bakat yang benar-benar diperlukan dalam penelitian ilmiah bukanlah kejeniusan atau ilham, melainkan keraguan terhadap diri sendiri, ketahanan (catatan 2) terhadap kekecewaan, dan kerelaan untuk menyerah dengan lapang dada.

Sebaliknya, dalam dunia sains eksperimental kadang-kadang diperoleh data eksperimen yang sesuai bayangan — bahkan lebih hebat dari yang dibayangkan. Saat seperti ini, apa yang dituntut dari peneliti? Jangan bergembira terlalu cepat (catatan 3). Bisa jadi hasil yang hanya tampak bagus itu muncul karena ada celah dalam metode eksperimen. Artinya, di sini pun diperlukan keraguan terhadap diri sendiri, ketahanan (terhadap harapan), dan kerelaan untuk menyerah.

Dalam bahasa Inggris ada ungkapan: too good to be true (terlalu bagus untuk menjadi kenyataan). Seandainya peneliti sedikit lebih tenang, "penemuan" itu tidak akan ada. Kekeliruan (catatan 4) seperti itu ada banyak sekali.

(Catatan 1) 頑迷: keras kepala
(Catatan 2) 〜に対する耐性: di sini, kekuatan untuk tidak terpengaruh oleh ~
(Catatan 3) ぬか喜び: kegembiraan sesaat yang kemudian berakhir mengecewakan
(Catatan 4) 誤謬: kesalahan, kekeliruan`,
    },

    // ── 問題10：写真の力 ──
    "10": {
      yomi: `{以下|いか}は、{報道|ほうどう}{写真|しゃしん}を{撮|と}る{人|ひと}が{書|か}いた{文章|ぶんしょう}である。

{写真|しゃしん}の{発表|はっぴょう}の{場|ば}が{減|へ}ったことで、その{未来|みらい}を{懸念|けねん}する{声|こえ}が{多|おお}いが、{私|わたし}は、そうは{思|おも}わない。{音|おと}も{動|うご}きもなく、{数千分|すうせんぶん}の{一秒|いちびょう}という{高速|こうそく}で{動|うご}きを{止|と}める{写真|しゃしん}は、テレビと{比|くら}べると{臨場感|りんじょうかん}では{劣|おと}り、「{伝|つた}えるためのメディア」としては{原始的|げんしてき}なのかもしれない。しかし、テレビのように{用意|ようい}された{答|こた}えを{差|さ}し{出|だ}し、「こうです」と{押|お}しつけるのとは{違|ちが}って、{写真|しゃしん}には、すべてが{提示|ていじ}されていないからこそ、それを{補|おぎな}うための{想像力|そうぞうりょく}が{必要|ひつよう}になる。（{中略|ちゅうりゃく}）

{写真|しゃしん}の{一瞬|いっしゅん}に{込|こ}められた{意味|いみ}を{想像|そうぞう}すること。その{瞬間|しゅんかん}の{前|まえ}と{後|あと}、あるいは、{写|うつ}っていないものにまで{思|おも}いをめぐらせること。さらに{写|うつ}っているものに、どう{自分|じぶん}を{重|かさ}ね{合|あ}わせ、{何|なに}を{感|かん}じ{取|と}るかということ。{想像力|そうぞうりょく}を{伸|の}びやかに{働|はたら}かせることで、{私|わたし}たちは{周|まわ}りに{流|なが}されずに、「いまの{時代|じだい}」を{自分|じぶん}なりに{感|かん}じ{取|と}ることができるはずだ。

しかし、{想像力|そうぞうりょく}を{呼|よ}び{起|お}こすためには、{写真|しゃしん}に「{絵|え}」としての{力|ちから}があることが{必要|ひつよう}{条件|じょうけん}となる。{最初|さいしょ}に「{絵画|かいが}」の{構成力|こうせいりょく}や{力強|ちからづよ}さといったものがあってこそ、{人|ひと}を{惹|ひ}きつけることができるはずで、そこから{何|なに}を{感|かん}じてもらうかはその{次|つぎ}のこととなる。

{写真|しゃしん}を{始|はじ}めた{頃|ころ}、「{名作|めいさく}」と{呼|よ}ばれる{写真|しゃしん}をたくさん{見|み}るように{努|つと}めた。ロバート・キャパの「{倒|たお}れし{兵士|へいし}」、カルティエ・ブレッソンの「{水|みず}たまりを{飛|と}ぶ{男|おとこ}」、ユージン・スミスの「シュバイッツア{博士|はかせ}」……。それらの{写真|しゃしん}を{前|まえ}に、「どうして{名作|めいさく}なのか」と{考|かんが}えた。その{時|とき}は、すぐには{答|こた}えが{見|み}つからなかったが、いま{思|おも}うのは、「{名作|めいさく}とは{見|み}る{人|ひと}が、それぞれに{感|かん}じ{取|と}れるものがある{写真|しゃしん}」ということだ。{悲|かな}しい{時|とき}、うれしい{時|とき}、その{時々|ときどき}の{心|こころ}のあり{様|よう}によって、{一枚|いちまい}の{写真|しゃしん}から{感|かん}じるものは{違|ちが}ってくる。{若|わか}い{時|とき}に{私|わたし}が{感動|かんどう}した{写真|しゃしん}でも、いま{見|み}ると、さほど{感|かん}じないというものもあるし、{逆|ぎゃく}に、{若|わか}い{頃|ころ}は{何|なに}も{感|かん}じなかった{写真|しゃしん}がいまになって{心|こころ}に{迫|せま}ってくることもある。{様々|さまざま}な{人|ひと}が、{心|こころ}のままに{写真|しゃしん}に{向|む}き{合|あ}い、そこからいろいろなメッセージをくみとれる{写真|しゃしん}が、{多|おお}くの{人|ひと}に{支持|しじ}され、{時|とき}を{越|こ}えて{残|のこ}っていく{名作|めいさく}なのだと{思|おも}う。

{写真|しゃしん}の{力|ちから}が{失|うしな}われていると{嘆|なげ}く{人|ひと}もいるが、いまはカメラ{付|つ}き{携帯|けいたい}{電話|でんわ}が{普及|ふきゅう}し、{多|おお}くの{場所|ばしょ}で{写真|しゃしん}を{撮|と}ることができる{時代|じだい}でもある。その{意味|いみ}では、{一億|いちおく}{総|そう}カメラマンの{時代|じだい}といえるのかもしれない。{誰|だれ}もが{撮|と}ることができる{時代|じだい}だからこそ、{独自|どくじ}の{視点|してん}で、{他|ほか}の{人|ひと}が{見逃|みのが}していたアングル（{注|ちゅう}）で{素晴|すば}らしい{写真|しゃしん}を{撮|と}ることができれば、{多|おお}くの{人|ひと}たちによさが{認|みと}めてもらえる{環境|かんきょう}が{整|ととの}ったといえるのではないだろうか。

（{注|ちゅう}）アングル：{角度|かくど}`,
      arti: `Berikut ini adalah tulisan seorang fotografer jurnalistik.

Karena tempat untuk mempublikasikan foto berkurang, banyak suara yang mengkhawatirkan masa depannya, tetapi saya tidak berpikir begitu. Foto — tanpa suara dan gerak, menghentikan gerakan dengan kecepatan seperseribu detik — dibanding televisi memang kalah dalam hal kesan nyata, dan sebagai "media untuk menyampaikan" mungkin tergolong primitif. Namun, berbeda dengan televisi yang menyodorkan jawaban yang sudah disiapkan dan memaksakan "beginilah adanya", pada foto justru karena tidak semuanya diperlihatkan, diperlukan imajinasi untuk melengkapinya. (dihilangkan sebagian)

Membayangkan makna yang terkandung dalam satu momen sebuah foto. Memikirkan sebelum dan sesudah momen itu, atau bahkan hal-hal yang tidak terekam. Lalu, bagaimana kita menempatkan diri pada apa yang terekam dan apa yang kita tangkap darinya. Dengan menggunakan imajinasi secara bebas, kita seharusnya bisa menangkap "zaman sekarang" dengan cara kita sendiri tanpa terbawa arus sekitar.

Namun, agar bisa membangkitkan imajinasi, foto harus memiliki kekuatan sebagai "gambar"; itulah syarat mutlaknya. Justru karena sejak awal ada kekuatan komposisi dan daya sebuah "lukisan", foto bisa memikat orang; apa yang akan dirasakan orang darinya adalah hal berikutnya.

Saat baru mulai memotret, saya berusaha melihat banyak foto yang disebut "mahakarya": "Prajurit yang Gugur" karya Robert Capa, "Pria yang Melompati Genangan Air" karya Cartier-Bresson, "Dr. Schweitzer" karya Eugene Smith…. Di depan foto-foto itu saya berpikir, "Mengapa ini mahakarya?" Saat itu saya tidak langsung menemukan jawabannya, tetapi yang saya pikirkan sekarang adalah: "Mahakarya adalah foto yang memberi sesuatu yang bisa ditangkap oleh setiap orang yang melihatnya dengan caranya masing-masing." Saat sedih, saat senang — tergantung keadaan hati saat itu, apa yang dirasakan dari selembar foto akan berbeda. Ada foto yang membuat saya terharu saat muda, tetapi kini tidak begitu menyentuh; sebaliknya, ada foto yang dulu tidak terasa apa-apa tetapi kini menyentuh hati. Saya kira foto yang bisa dihadapi oleh berbagai orang sesuai isi hatinya dan dari situ mereka bisa menangkap berbagai pesan, itulah mahakarya yang didukung banyak orang dan tetap bertahan melintasi waktu.

Ada orang yang mengeluh bahwa kekuatan foto sudah hilang, tetapi sekarang juga zaman di mana ponsel berkamera sudah tersebar luas dan foto bisa diambil di banyak tempat. Dalam arti itu, mungkin bisa disebut zaman "seratus juta orang semuanya fotografer". Justru karena di zaman ini siapa pun bisa memotret, bukankah bisa dikatakan bahwa kini telah tersedia lingkungan di mana, jika kita mampu mengambil foto yang luar biasa dengan sudut pandang sendiri dan dari sudut (catatan) yang terlewatkan orang lain, kebaikannya akan diakui oleh banyak orang?

(Catatan) アングル: sudut`,
    },

    // ── 問題11：小説の書き方 ──
    "11": {
      yomi: `【{意見|いけん} A】
{小説|しょうせつ}を{書|か}こうとしている{人|ひと}やすでに{何作|なんさく}か{書|か}いたことのある{人|ひと}が、よく{私|わたし}にテクニック{面|めん}での{質問|しつもん}をしてくるけれど、そういうとき{私|わたし}は「あなたが{技術|ぎじゅつ}や{手法|しゅほう}について{誰|だれ}かに{訊|き}く（{注|ちゅう}1）たびに{小説|しょうせつ}はあなたから{離|はな}れていく」と{答|こた}えることにしている。

（{中略|ちゅうりゃく}）

{自分|じぶん}の{小説|しょうせつ}の{行|い}き{詰|づ}まりをテクニック{不足|ぶそく}が{原因|げんいん}だと{考|かんが}える{人|ひと}は「{小説|しょうせつ}の{書|か}き{方|かた}マニュアル」を{信|しん}じる{律儀|りちぎ}さ（{注|ちゅう}2）と{同|おな}じで、たしかに{真面目|まじめ}で{素直|すなお}ないい{人|ひと}ではあるのだろうが、{本当|ほんとう}に{自分|じぶん}が{書|か}きたいことが{何|なに}なのかをきちんと{考|かんが}えていないという{意味|いみ}で、{怠|なま}けているということになる。

{小説|しょうせつ}の{中身|なかみ}と{表現|ひょうげん}・{手法|しゅほう}・{技術|ぎじゅつ}の{関係|かんけい}は{何重|なんじゅう}にも{畳|たた}み{込|こ}まれた（{注|ちゅう}3）もので、{厳密|げんみつ}に{論|ろん}じたらキリがない（{注|ちゅう}4）が、まずそんな{面倒|めんどう}なことは{考|かんが}えずに、「{本当|ほんとう}に{書|か}きたいことだったらテクニックなんか{関係|かんけい}ない」と、シンプルに{考|かんが}えてほしい。

（{注|ちゅう}1）{訊|き}く：ここでは、{質問|しつもん}する
（{注|ちゅう}2）{律儀|りちぎ}さ：{礼儀|れいぎ}{正|ただ}しさ
（{注|ちゅう}3）{何重|なんじゅう}にも{畳|たた}み{込|こ}まれた：ここでは、{複雑|ふくざつ}に{絡|から}み{合|あ}った
（{注|ちゅう}4）キリがない：{際限|さいげん}がない

【{意見|いけん} B】
{小説|しょうせつ}を{書|か}くには{想像|そうぞう}{以上|いじょう}の{気力|きりょく}が{必要|ひつよう}である。{書|か}くことを{決|き}めて{執筆|しっぴつ}に{取|と}りかかっても、{自分|じぶん}には{技術|ぎじゅつ}がないから{下手|へた}な{文章|ぶんしょう}しか{書|か}けないと{手|て}を{止|と}めてしまう{人|ひと}が{多|おお}い。しかし、そんなことで{悩|なや}んでいるくらいなら、まずはどんどん{書|か}き{進|すす}めてみるべきだ。テーマとジャンルを{決|き}める、{構成|こうせい}と{展開|てんかい}を{考|かんが}える、{登場|とうじょう}{人物|じんぶつ}と{舞台|ぶたい}を{決|き}めるといった{必要|ひつよう}な{手順|てじゅん}を{踏|ふ}んだら、あとは{書|か}き{始|はじ}めること、そして{完結|かんけつ}させることが{何|なに}より{重要|じゅうよう}なのだ。

いくら{面白|おもしろ}いストーリーでも、{完結|かんけつ}させないことには{小説|しょうせつ}とはいえない。{短編|たんぺん}{小説|しょうせつ}でも、{納得|なっとく}できる{出来栄|できば}えでなくてもかまわない。まずは{自分|じぶん}の{力|ちから}で{一|ひと}つの{作品|さくひん}を{書|か}き{上|あ}げることだ。それができれば、{自信|じしん}が{生|う}まれ{次|つぎ}の{作品|さくひん}につながっていく。`,
      arti: `【Pendapat A】
Orang yang sedang mencoba menulis novel atau yang sudah pernah menulis beberapa karya sering mengajukan pertanyaan soal teknik kepada saya, dan saat itu saya selalu menjawab, "Setiap kali Anda bertanya (catatan 1) kepada seseorang tentang teknik atau metode, novel itu makin menjauh dari Anda."

(dihilangkan sebagian)

Orang yang menganggap kebuntuan novelnya disebabkan kurangnya teknik itu sama dengan ketaatan (catatan 2) yang memercayai "manual cara menulis novel"; memang mungkin ia orang baik yang serius dan polos, tetapi dalam arti tidak benar-benar memikirkan apa yang sungguh-sungguh ingin ia tulis, berarti ia sedang bermalas-malasan.

Hubungan antara isi novel dan ekspresi, metode, serta teknik itu berlapis-lapis (catatan 3), dan kalau dibahas secara ketat tidak akan ada habisnya (catatan 4); tetapi pertama-tama, saya ingin Anda tidak memikirkan hal yang merepotkan seperti itu dan berpikir sederhana saja: "Kalau memang benar-benar hal yang ingin ditulis, teknik itu tidak ada hubungannya."

(Catatan 1) 訊く: di sini, bertanya
(Catatan 2) 律儀さ: kesopanan, ketaatan pada aturan
(Catatan 3) 何重にも畳み込まれた: di sini, terjalin dengan rumit
(Catatan 4) キリがない: tidak ada habisnya

【Pendapat B】
Menulis novel membutuhkan tenaga semangat yang lebih besar dari yang dibayangkan. Banyak orang yang sudah memutuskan menulis dan mulai mengerjakannya, lalu berhenti karena merasa tidak punya teknik sehingga hanya bisa menulis kalimat yang jelek. Namun, daripada pusing karena hal seperti itu, sebaiknya terus saja menulis. Setelah melalui langkah-langkah yang diperlukan — menentukan tema dan genre, memikirkan struktur dan alur, menentukan tokoh dan latar — selanjutnya yang paling penting adalah mulai menulis dan menyelesaikannya.

Semenarik apa pun ceritanya, kalau tidak diselesaikan, tidak bisa disebut novel. Cerpen pun boleh, dan hasilnya tidak memuaskan pun tidak apa-apa. Pertama-tama, selesaikanlah satu karya dengan kemampuan sendiri. Jika itu bisa dilakukan, akan tumbuh rasa percaya diri yang mengantarkan pada karya berikutnya.`,
    },

    // ── 問題12：SNSと人間関係 ──
    "12": {
      yomi: `SNSを{含|ふく}むリアルタイムウェブ（{注|ちゅう}1,2）の{本質|ほんしつ}は、{時間|じかん}と{過程|かてい}の{消去|しょうきょ}にある。かつてコンテンツ（{注|ちゅう}3）の{拡散|かくさん}には{一定|いってい}の{時間|じかん}がかかった。{権威|けんい}やメディアをすり{抜|ぬ}ける{必要|ひつよう}もあった。けれどもいまや、それらの{面倒|めんどう}をすべてすっとばし（{注|ちゅう}4）、{無名|むめい}の{書|か}き{手|て}が{一晩|ひとばん}で{何百万|なんびゃくまん}もの{支持者|しじしゃ}を{集|あつ}めることができる。それはSNSの{良|よ}いところだ。

けれども{人生|じんせい}にはトラブルがつきもの（{注|ちゅう}5）である。どれだけ{誠実|せいじつ}に{生|い}きていても、{誤解|ごかい}や{中傷|ちゅうしょう}に{曝|さら}されることが{必|かなら}ずある。そしてそういうとき、SNSの{支持|しじ}はほとんど{役|やく}に{立|た}たない。{匿名|とくめい}の{支持者|しじしゃ}は、トラブルの{話題|わだい}{自体|じたい}すぐに{忘|わす}れてしまう。あっというまに（{注|ちゅう}6）{集|あつ}まった{人々|ひとびと}は、{同|おな}じくあっというまに{離|はな}れる。そこで{継続的|けいぞくてき}に{助|たす}けてくれるのは、{結局|けっきょく}は{面倒|めんどう}な{人間|にんげん}{関係|かんけい}に{支|ささ}えられた{家族|かぞく}や{友人|ゆうじん}たちだったりする。

SNSの{人間|にんげん}{関係|かんけい}には{面倒|めんどう}がない。だからSNSの{知人|ちじん}は{面倒|めんどう}を{背負|せお}ってくれない。そんなSNSでも、たしかに{人生|じんせい}がうまく{行|い}っているときは{大|おお}きな{力|ちから}になる。けれども、{本当|ほんとう}の{困難|こんなん}を{抱|かか}えたときは、{助|たす}けにならないのだ。

これからの{時代|じだい}を{生|い}きるうえで、SNSのこの{性格|せいかく}を{知|し}っておくことはとても{重要|じゅうよう}なように{思|おも}う。そもそも、{人生|じんせい}の{困難|こんなん}なるものは{自分|じぶん}と{世界|せかい}のズレの{表|あらわ}れである。{自分|じぶん}はあることを{正|ただ}しいと{信|しん}じるが、{世界|せかい}はそう{思|おも}わない――そういう{対立|たいりつ}が{生|しょう}じたとき、{困難|こんなん}が{訪|おとず}れる。だから{困難|こんなん}そのものが{悪|わる}いわけではない。むしろ、{概念|がいねん}の{発明|はつめい}や{政治|せいじ}の{変革|へんかく}は{必|かなら}ず{困難|こんなん}とともに{生|しょう}じる。その{困難|こんなん}を{時間|じかん}をかけて{解消|かいしょう}し{昇華|しょうか}する（{注|ちゅう}7）ことで、はじめて{自分|じぶん}も{相手|あいて}も{社会|しゃかい}も{進歩|しんぽ}するのだ。けれども、いまのSNSにはそのような{熟成|じゅくせい}の{余裕|よゆう}がほとんどない。

{困難|こんなん}な{時期|じき}を{支|ささ}えるとは、{言|い}いかえれば、{支|ささ}える{相手|あいて}と{世界|せかい}の{関係|かんけい}が{変化|へんか}する{過程|かてい}に{時間|じかん}をかけてつきあうということである。ひとりの{人間|にんげん}が{変|か}わるというのはたいへんなことで、「いいね！」をつけるようにポンポン{複製|ふくせい}できるものではない。いわゆる「{議論|ぎろん}」で{相手|あいて}が{変|か}わると{考|かんが}えているひとは、{人間|にんげん}の{本質|ほんしつ}について{無知|むち}である。ぼくが{一生|いっしょう}をかけて{変|か}えることができるのは、ごく{少数|しょうすう}の{身|み}の{回|まわ}りの{人々|ひとびと}だけであり、そしてぼくを{変|か}えることができるのもおそらく{彼|かれ}らだけだ。その{小|ちい}さく{面倒|めんどう}な{人間|にんげん}{関係|かんけい}をどれだけ{濃密|のうみつ}に{作|つく}れるかで、{人生|じんせい}の{広|ひろ}がりが{決|き}まるのだと{思|おも}う。

{家族|かぞく}も{友人|ゆうじん}もあっというまには{作|つく}れない。{面倒|めんどう}な{存在|そんざい}でもある。だからこそそれは{変化|へんか}の{受|う}け{皿|ざら}となる。{面倒|めんどう}がないところに{変化|へんか}はない。{情報|じょうほう}{技術|ぎじゅつ}は、{面倒|めんどう}のない{人間|にんげん}{関係|かんけい}の{調達|ちょうたつ}を{可能|かのう}にしたが、それはまた{人間|にんげん}から{変化|へんか}の{可能性|かのうせい}を{奪|うば}うものでもあった。そのことを{忘|わす}れずにおきたいと{思|おも}う。

（{注|ちゅう}1）SNS：ウェブ{上|じょう}での{情報|じょうほう}のやり{取|と}りや{交流|こうりゅう}の{場|ば}を{提供|ていきょう}するサービス
（{注|ちゅう}2）リアルタイムウェブ：{情報|じょうほう}{更新|こうしん}が{即時|そくじ}に{行|おこな}われるウェブ
（{注|ちゅう}3）コンテンツ：ここでは、{情報|じょうほう}
（{注|ちゅう}4）すっとばす：ここでは、{省略|しょうりゃく}する
（{注|ちゅう}5）つきもの：{必|かなら}ず{伴|ともな}うもの
（{注|ちゅう}6）あっというまに：{短|みじか}い{間|あいだ}に
（{注|ちゅう}7）{昇華|しょうか}する：ここでは、{別|べつ}の{良|よ}いものに{変|か}える`,
      arti: `Hakikat web waktu nyata (catatan 1, 2), termasuk media sosial, terletak pada penghapusan waktu dan proses. Dulu, penyebaran konten (catatan 3) memakan waktu tertentu. Konten juga perlu lolos dari otoritas dan media. Namun sekarang, semua kerepotan itu dilompati (catatan 4), dan seorang penulis tak dikenal bisa mengumpulkan jutaan pendukung dalam semalam. Itulah sisi baik media sosial.

Namun, hidup selalu disertai (catatan 5) masalah. Setulus apa pun kita hidup, pasti ada saatnya kita terpapar kesalahpahaman dan fitnah. Dan pada saat seperti itu, dukungan di media sosial hampir tidak berguna. Pendukung anonim cepat melupakan topik masalah itu sendiri. Orang-orang yang berkumpul dalam sekejap (catatan 6), dalam sekejap pula akan pergi. Yang terus-menerus menolong kita saat itu, pada akhirnya, sering kali adalah keluarga dan teman yang ditopang oleh hubungan antarmanusia yang merepotkan.

Hubungan di media sosial tidak merepotkan. Karena itu, kenalan di media sosial tidak mau memikul kerepotan kita. Media sosial seperti itu memang menjadi kekuatan besar ketika hidup sedang lancar. Namun, ketika kita menghadapi kesulitan yang sesungguhnya, media sosial tidak bisa menolong.

Untuk hidup di zaman mendatang, saya kira sangat penting mengetahui sifat media sosial ini. Pada dasarnya, yang disebut kesulitan hidup adalah wujud dari ketidakcocokan antara diri dan dunia. Kita percaya sesuatu itu benar, tetapi dunia tidak berpikir demikian — ketika pertentangan seperti itu muncul, datanglah kesulitan. Karena itu, kesulitan itu sendiri tidaklah buruk. Justru penemuan konsep dan perubahan politik selalu lahir bersama kesulitan. Dengan meluangkan waktu untuk menyelesaikan dan mengubah kesulitan itu menjadi sesuatu yang lebih baik (catatan 7), barulah diri kita, pihak lain, dan masyarakat bisa maju. Namun, media sosial saat ini hampir tidak punya ruang untuk pematangan semacam itu.

Menopang seseorang di masa sulit, dengan kata lain, berarti meluangkan waktu untuk menemani proses berubahnya hubungan antara orang yang kita topang dan dunia. Berubahnya seorang manusia itu hal yang berat, bukan sesuatu yang bisa digandakan dengan mudah seperti memberi "suka!". Orang yang mengira lawan bicaranya akan berubah lewat apa yang disebut "debat" itu tidak tahu hakikat manusia. Yang bisa saya ubah sepanjang hidup hanyalah segelintir orang di sekitar saya, dan yang bisa mengubah saya pun barangkali hanya mereka. Saya kira luasnya hidup ditentukan oleh seberapa padat kita bisa membangun hubungan kecil yang merepotkan itu.

Keluarga dan teman tidak bisa dibuat dalam sekejap. Mereka juga merepotkan. Justru karena itu mereka menjadi wadah bagi perubahan. Di tempat yang tidak ada kerepotan, tidak ada perubahan. Teknologi informasi memungkinkan kita memperoleh hubungan antarmanusia yang tidak merepotkan, tetapi itu juga merampas kemungkinan manusia untuk berubah. Saya ingin tidak melupakan hal itu.

(Catatan 1) SNS: layanan yang menyediakan tempat bertukar informasi dan berinteraksi di web
(Catatan 2) リアルタイムウェブ: web yang pembaruan informasinya dilakukan seketika
(Catatan 3) コンテンツ: di sini, informasi
(Catatan 4) すっとばす: di sini, melewatkan
(Catatan 5) つきもの: sesuatu yang pasti menyertai
(Catatan 6) あっというまに: dalam waktu singkat
(Catatan 7) 昇華する: di sini, mengubah menjadi sesuatu yang lain yang lebih baik`,
    },

    // ── 問題13：マスダ買い取りサービス ──
    "13": {
      yomi: `{買|か}い{取|と}りサービスのご{利用|りよう}について

◆{買|か}い{取|と}り{可能|かのう}な{品物|しなもの}
{冷蔵庫|れいぞうこ}などの{家電|かでん}、{机|つくえ}などの{家具|かぐ}、{自転車|じてんしゃ}、{楽器|がっき}を{受|う}け{付|つ}けています。{詳|くわ}しくは、「{買|か}い{取|と}り{可能|かのう}な{品物|しなもの}」のページをご{確認|かくにん}ください。

◆{買|か}い{取|と}り{方法|ほうほう}と{流|なが}れ

{店頭|てんとう}{買取|かいとり}
① {店頭|てんとう}へお{持|も}ちください。
② {品物|しなもの}を{確認|かくにん}し、{買|か}い{取|と}り{金額|きんがく}を{提示|ていじ}します。
③ ご{納得|なっとく}いただけた{場合|ばあい}は、{現金|げんきん}をお{渡|わた}しします。

{出張|しゅっちょう}{買取|かいとり}
① {最寄|もよ}りの{店舗|てんぽ}にお{電話|でんわ}ください。
② {弊社|へいしゃ}スタッフがご{自宅|じたく}へ{伺|うかが}います。
③ ご{自宅|じたく}で{品物|しなもの}を{確認|かくにん}し、{買|か}い{取|と}り{金額|きんがく}をご{提示|ていじ}します。
④ ご{納得|なっとく}いただけた{場合|ばあい}は、{現金|げんきん}をお{渡|わた}しします。

{宅配|たくはい}{買取|かいとり}
① ホームページからご{予約|よやく}ください。
② {宅配|たくはい}{業者|ぎょうしゃ}が{伺|うかが}いますので、{品物|しなもの}をお{渡|わた}しください。
③ {店舗|てんぽ}への{品物|しなもの}{到着|とうちゃく}から3{営業日|えいぎょうび}{以内|いない}に、{買|か}い{取|と}り{金額|きんがく}をメールでご{連絡|れんらく}します。ご{納得|なっとく}いただけた{場合|ばあい}は、{銀行|ぎんこう}{口座|こうざ}へお{振|ふ}り{込|こ}みします。

※{買|か}い{取|と}り{金額|きんがく}にご{納得|なっとく}いただけずキャンセルされる{場合|ばあい}でも、{出張料|しゅっちょうりょう}や{返送料|へんそうりょう}はかかりません。

◆{受|う}け{付|つ}け{可能|かのう}な{品数|しなかず}とサイズ（サイズ{制限|せいげん}は1{点|てん}あたり）
{店頭|てんとう}{買取|かいとり}：1{点|てん}から／サイズ{制限|せいげん}なし
{出張|しゅっちょう}{買取|かいとり}：2{点|てん}から／サイズ{制限|せいげん}なし
{宅配|たくはい}{買取|かいとり}：1{点|てん}から／25kg{以下|いか}で、かつ{三辺|さんぺん}（{縦|たて}・{横|よこ}・{高|たか}さ）の{合計|ごうけい}が160cm{以下|いか}のもの（{自転車|じてんしゃ}の{場合|ばあい}、サイズ{内|ない}でも{宅配|たくはい}{買取|かいとり}は{利用|りよう}できません）

◆ご{本人|ほんにん}{確認|かくにん}について
{店頭|てんとう}{買取|かいとり}、{出張|しゅっちょう}{買取|かいとり}の{場合|ばあい}、{本人|ほんにん}{確認|かくにん}{書類|しょるい}（{運転|うんてん}{免許証|めんきょしょう}{等|とう}）をご{提示|ていじ}いただきます。{宅配|たくはい}{買取|かいとり}の{場合|ばあい}、{品物|しなもの}と{一緒|いっしょ}にコピーをお{送|おく}りいただきます。
{家電|かでん}、{家具|かぐ}、{楽器|がっき}の{場合|ばあい}は、{顔|かお}{写真|じゃしん}のない{本人|ほんにん}{確認|かくにん}{書類|しょるい}もご{利用|りよう}になれますが、{自転車|じてんしゃ}の{場合|ばあい}は、{顔|かお}{写真|じゃしん}{付|つ}きのものをご{用意|ようい}ください。`,
      arti: `Tentang penggunaan layanan pembelian barang bekas

◆ Barang yang bisa dibeli
Kami menerima peralatan elektronik rumah tangga seperti kulkas, perabot seperti meja, sepeda, dan alat musik. Untuk rinciannya, silakan cek halaman "Barang yang bisa dibeli".

◆ Cara pembelian dan alurnya

Pembelian di toko
① Silakan bawa ke toko.
② Kami memeriksa barang dan menyampaikan harga beli.
③ Jika Anda setuju, kami serahkan uang tunai.

Pembelian dengan kunjungan
① Silakan telepon toko terdekat.
② Staf kami akan datang ke rumah Anda.
③ Kami memeriksa barang di rumah Anda dan menyampaikan harga beli.
④ Jika Anda setuju, kami serahkan uang tunai.

Pembelian lewat kurir
① Silakan pesan melalui situs web.
② Kurir akan datang; silakan serahkan barangnya.
③ Dalam 3 hari kerja sejak barang tiba di toko, kami memberitahukan harga beli melalui email. Jika Anda setuju, kami transfer ke rekening bank Anda.

※ Meskipun Anda tidak setuju dengan harga beli dan membatalkannya, tidak dikenakan biaya kunjungan maupun biaya pengiriman balik.

◆ Jumlah dan ukuran barang yang bisa diterima (batas ukuran per barang)
Pembelian di toko: mulai 1 barang / tanpa batas ukuran
Pembelian dengan kunjungan: mulai 2 barang / tanpa batas ukuran
Pembelian lewat kurir: mulai 1 barang / berat 25 kg ke bawah dan jumlah ketiga sisi (panjang, lebar, tinggi) 160 cm ke bawah (untuk sepeda, pembelian lewat kurir tidak bisa digunakan meskipun ukurannya masuk batas)

◆ Tentang verifikasi identitas
Untuk pembelian di toko dan pembelian dengan kunjungan, Anda diminta memperlihatkan dokumen identitas (SIM, dll.). Untuk pembelian lewat kurir, Anda diminta mengirimkan fotokopinya bersama barang.
Untuk peralatan elektronik, perabot, dan alat musik, dokumen identitas tanpa foto wajah juga bisa digunakan, tetapi untuk sepeda, siapkan dokumen yang berfoto wajah.`,
    },
  },
};
