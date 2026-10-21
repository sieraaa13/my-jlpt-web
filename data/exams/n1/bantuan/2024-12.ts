import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2024
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_2412: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{佐藤|さとう}{選手|せんしゅ}がゴールを{決|き}めたとき、{観客|かんきゃく}は【{絶叫|ぜっきょう}】した。",
      arti: "Saat atlet Sato mencetak gol, para penonton 【berteriak histeris】.",
    },
    2: {
      yomi: "【{背後|はいご}】から{物音|ものおと}が{聞|き}こえた。",
      arti: "Terdengar suara dari 【arah belakang】.",
    },
    3: {
      yomi: "{将来|しょうらい}の【{抱負|ほうふ}】を{述|の}べる。",
      arti: "Menyampaikan 【cita-cita/tekad】 untuk masa depan.",
    },
    4: {
      yomi: "{人|ひと}を【{侮|あなど}って】はいけない。",
      arti: "Jangan 【meremehkan】 orang lain.",
      optArti: ["menggoda/mengolok-olok", "mencaci maki", "meremehkan", "mengkhianati"],
    },
    5: {
      yomi: "{相手|あいて}がわかるように、【{筋道|すじみち}】を{立|た}てて{説明|せつめい}した。",
      arti: "Saya menjelaskan dengan 【alur yang runtut/logis】 agar lawan bicara mengerti.",
    },
    6: {
      yomi: "その{小説|しょうせつ}の{主人公|しゅじんこう}は、【{奔放|ほんぽう}】な{性格|せいかく}をしている。",
      arti: "Tokoh utama novel itu berwatak 【bebas lepas (tidak terikat aturan)】.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "その{生物|せいぶつ}は、{厳|きび}しい{環境|かんきょう}に（　）できる{能力|のうりょく}を{持|も}っている。",
      arti: "Makhluk hidup itu memiliki kemampuan untuk (…) dengan lingkungan yang keras.",
      optYomi: ["{適応|てきおう}", "{合致|がっち}", "{転換|てんかん}", "{推移|すいい}"],
      optArti: ["adaptasi, menyesuaikan diri", "kecocokan, sesuai persis", "peralihan, perubahan arah", "pergeseran/perkembangan seiring waktu"],
    },
    8: {
      yomi: "{店|みせ}の{売|う}り{上|あ}げを{五年|ごねん}で{二倍|にばい}にするという{目標|もくひょう}を（　）、みんなで{努力|どりょく}している。",
      arti: "Kami (…) target untuk melipatgandakan penjualan toko dalam lima tahun, dan semua berusaha bersama.",
      optYomi: ["{企|くわだ}てて", "{興|おこ}して", "{築|きず}いて", "{掲|かか}げて"],
      optArti: ["merencanakan (rencana besar/buruk)", "mendirikan, membangkitkan (usaha/industri)", "membangun (hubungan, posisi)", "mengusung, memasang (target, slogan)"],
    },
    9: {
      yomi: "{新|あたら}しい{市長|しちょう}は{前市長|ぜんしちょう}の{政策|せいさく}を（　）し、{駅前|えきまえ}の{開発|かいはつ}を{進|すす}めると{述|の}べた。",
      arti: "Wali kota baru menyatakan akan (…) kebijakan wali kota sebelumnya dan melanjutkan pembangunan kawasan depan stasiun.",
      optYomi: ["{相続|そうぞく}", "{獲得|かくとく}", "{踏襲|とうしゅう}", "{伝承|でんしょう}"],
      optArti: ["pewarisan (harta)", "perolehan, mendapatkan", "meneruskan cara/kebijakan pendahulu", "pewarisan tradisi turun-temurun"],
    },
    10: {
      yomi: "{台風|たいふう}で{電車|でんしゃ}の{到着|とうちゃく}が{大幅|おおはば}に{遅|おく}れたため、{駅|えき}でしばらく（　）された。",
      arti: "Karena kedatangan kereta sangat terlambat akibat topan, saya (…) di stasiun untuk beberapa saat.",
      optYomi: ["{息抜|いきぬ}き", "{棚上|たなあ}げ", "{待|ま}ち{伏|ぶ}せ", "{足止|あしど}め"],
      optArti: ["rehat sejenak", "penundaan (masalah dibiarkan)", "penyergapan, menunggu diam-diam", "tertahan, tidak bisa melanjutkan perjalanan"],
    },
    11: {
      yomi: "{今日|きょう}は{試合|しあい}で{一日中|いちにちじゅう}{走|はし}り{続|つづ}けたので、{疲|つか}れて（　）になった。",
      arti: "Hari ini saya terus berlari seharian dalam pertandingan, jadi saya kelelahan sampai (…).",
      optArti: ["berantakan, kacau", "lelah sekali, kehabisan tenaga", "berlumpur, kental lengket", "hancur lembek, acak-acakan"],
    },
    12: {
      yomi: "{工場|こうじょう}の{誘致|ゆうち}について、{市長|しちょう}が{丁寧|ていねい}に{説明|せつめい}し、{住民|じゅうみん}の{不安|ふあん}の（　）に{努|つと}めた。",
      arti: "Terkait upaya menarik pabrik ke kota, wali kota menjelaskan dengan cermat dan berusaha (…) kecemasan warga.",
      optYomi: ["{払拭|ふっしょく}", "{喪失|そうしつ}", "{破棄|はき}", "{排斥|はいせき}"],
      optArti: ["menghapus/menyapu bersih (keraguan, kecemasan)", "kehilangan", "pemusnahan, pembatalan (dokumen, kontrak)", "pengucilan, penolakan"],
    },
    13: {
      yomi: "{階段|かいだん}でつまずいて{転|ころ}びそうになったので、（　）{隣|となり}にいた{友人|ゆうじん}の{腕|うで}をつかんだ。",
      arti: "Karena tersandung di tangga dan hampir jatuh, saya (…) meraih lengan teman yang ada di sebelah.",
      optArti: ["sebentar lagi, segera", "suatu saat nanti", "seketika, secara refleks", "sudah lama (terjadi)"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{社長|しゃちょう}は{小林|こばやし}{部長|ぶちょう}の【{手腕|しゅわん}】を{高|たか}く{評価|ひょうか}しているようだ。",
      arti: "Sepertinya direktur sangat menghargai 【kecakapan】 Manajer Kobayashi.",
      optYomi: ["{経験|けいけん}", "{能力|のうりょく}", "{考|かんが}え", "{人柄|ひとがら}"],
      optArti: ["pengalaman", "kemampuan", "pemikiran", "kepribadian"],
    },
    15: {
      yomi: "{時間|じかん}を【ロス】してしまった。",
      arti: "Saya telah 【membuang (rugi)】 waktu.",
      optYomi: ["{間違|まちが}えて", "{無駄|むだ}にして", null, "{延長|えんちょう}して"],
      optArti: ["salah", "menyia-nyiakan", "menulis / menggaruk (dari かく)", "memperpanjang"],
    },
    16: {
      yomi: "{確認|かくにん}が【おろそか】になっていた。",
      arti: "Pengecekan menjadi 【terabaikan/asal-asalan】.",
      optYomi: ["{面倒|めんどう}に", "{困難|こんなん}に", "{遅|おそ}く", null],
      optArti: ["merepotkan", "sulit", "lambat", "asal-asalan, sembarangan"],
    },
    17: {
      yomi: "{私|わたし}たちのチームの【{目下|もっか}】の{目標|もくひょう}は、{市|し}の{大会|たいかい}で{優勝|ゆうしょう}することだ。",
      arti: "Target 【saat ini】 tim kami adalah menjuarai turnamen tingkat kota.",
      optYomi: ["{最大|さいだい}", "{将来|しょうらい}", "{今|いま}", "{最低限|さいていげん}"],
      optArti: ["terbesar", "masa depan", "sekarang", "batas minimal"],
    },
    18: {
      yomi: "{経費|けいひ}を{考慮|こうりょ}したうえで、{古|ふる}いアパートの{改修|かいしゅう}{工事|こうじ}を【{請|う}け{負|お}う】ことにした。",
      arti: "Setelah mempertimbangkan biaya, kami memutuskan untuk 【menerima borongan】 pekerjaan renovasi apartemen tua.",
      optYomi: ["{引|ひ}き{受|う}ける", "{申|もう}し{込|こ}む", "{断|ことわ}る", "{諦|あきら}める"],
      optArti: ["menerima (tugas/pekerjaan)", "mendaftar, mengajukan", "menolak", "menyerah, merelakan"],
    },
    19: {
      yomi: "{先生|せんせい}に{本|ほん}を【{進呈|しんてい}】しました。",
      arti: "Saya 【mempersembahkan】 buku kepada guru.",
      optYomi: ["{差|さ}し{上|あ}げました", null, "お{貸|か}ししました", "お{借|か}りしました"],
      optArti: ["memberikan (bentuk hormat)", "menerima (bentuk hormat)", "meminjamkan (bentuk hormat)", "meminjam (bentuk hormat)"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "【{加工|かこう}】",
      arti: "【加工】 = mengolah, memproses (bahan menjadi produk)",
      optYomi: [
        "{食事|しょくじ}や{運動|うんどう}などを{生活|せいかつ}{習慣|しゅうかん}に{加工|かこう}するような{医師|いし}からアドバイスを{受|う}けた。",
        "このお{店|みせ}では、{余|あま}った{木材|もくざい}を{加工|かこう}した{商品|しょうひん}を{販売|はんばい}している。",
        "{両親|りょうしん}は{古|ふる}い{民家|みんか}を{安|やす}く{購入|こうにゅう}して、{民宿|みんしゅく}に{加工|かこう}した。",
        "{就職|しゅうしょく}{規則|きそく}の{一部|いちぶ}を{加工|かこう}することにした。",
      ],
      optArti: [
        "Saya menerima saran dari dokter agar 'mengolah' makan dan olahraga ke dalam kebiasaan hidup.",
        "Toko ini menjual produk hasil 'olahan' kayu sisa.",
        "Orang tua saya membeli rumah tradisional tua dengan murah, lalu 'mengolahnya' menjadi penginapan.",
        "Diputuskan untuk 'mengolah' sebagian peraturan kerja.",
      ],
    },
    21: {
      yomi: "【{養|やしな}う】",
      arti: "【養う】 = menafkahi/menghidupi (keluarga); memupuk (kemampuan)",
      optYomi: [
        "{息子|むすこ}が{近|ちか}くの{公園|こうえん}で{虫|むし}を{捕|つか}まえてきたので、{家|いえ}で{養|やしな}うことにした。",
        "{部屋|へや}のベランダで{植物|しょくぶつ}を{養|やしな}うためにお{店|みせ}で{鉢|はち}と{土|つち}を{買|か}った。",
        "{売|う}り{上|あ}げを{伸|の}ばし、{自分|じぶん}の{会社|かいしゃ}を{養|やしな}ってきた。",
        "{会社|かいしゃ}を{経営|けいえい}しながら{３人|さんにん}の{子|こ}どもを{養|やしな}っている。",
      ],
      optArti: [
        "Anak saya menangkap serangga di taman dekat rumah, jadi kami memutuskan untuk 'menghidupinya' di rumah.",
        "Saya membeli pot dan tanah di toko untuk 'menghidupi' tanaman di beranda kamar.",
        "Saya meningkatkan penjualan dan telah 'menghidupi' perusahaan saya sendiri.",
        "Sambil mengelola perusahaan, ia 'menghidupi' tiga orang anak.",
      ],
    },
    22: {
      yomi: "【{資質|ししつ}】",
      arti: "【資質】 = bakat, pembawaan alami seseorang",
      optYomi: [
        "{携帯|けいたい}{電話|でんわ}のカメラの{資質|ししつ}は{日|ひ}に{日|ひ}に{向上|こうじょう}している。",
        "この{動物|どうぶつ}は、{見|み}た{目|め}は{可愛|かわい}いらしいが、{資質|ししつ}は{荒|あら}いので{注意|ちゅうい}が{必要|ひつよう}だ。",
        "{会社|かいしゃ}で{製品|せいひん}の{資質|ししつ}を{管理|かんり}する{仕事|しごと}をしている。",
        "{森|もり}さんは{身体|しんたい}{能力|のうりょく}が{高|たか}く、{陸上|りくじょう}{選手|せんしゅ}としての{資質|ししつ}に{恵|めぐ}まれている。",
      ],
      optArti: [
        "'Bakat' kamera ponsel meningkat dari hari ke hari.",
        "Hewan ini tampak lucu, tetapi 'bakatnya' kasar, jadi perlu berhati-hati.",
        "Saya bekerja mengelola 'bakat' produk di perusahaan.",
        "Mori-san memiliki kemampuan fisik yang tinggi dan dikaruniai 'bakat' sebagai atlet atletik.",
      ],
    },
    23: {
      yomi: "【{正当|せいとう}】",
      arti: "【正当】 = sah, wajar, adil (sebagaimana mestinya)",
      optYomi: [
        "{説明書|せつめいしょ}を{見|み}て{正当|せいとう}な{組|く}み{立|た}てたのに、{部品|ぶひん}が{一|ひと}つ{余|あま}った。",
        "「まる」はニックネームで、{私|わたし}の{正当|せいとう}な{名前|なまえ}は「{丸山|まるやま}」です。",
        "その{画家|がか}は、{若|わか}いころには{正当|せいとう}な{評価|ひょうか}を{受|う}けていなかった。",
        "トンネルの{建設|けんせつ}{工事|こうじ}は{大|おお}きな{遅|おく}れもなく、{正当|せいとう}に{進|すす}んでいる。",
      ],
      optArti: [
        "Meski sudah merakit 'secara sah' sambil melihat buku petunjuk, satu komponen tersisa.",
        "\"Maru\" adalah nama panggilan; nama saya yang 'sah' adalah \"Maruyama\".",
        "Pelukis itu tidak mendapat penilaian yang 'adil' semasa mudanya.",
        "Pembangunan terowongan berjalan 'secara sah' tanpa keterlambatan berarti.",
      ],
    },
    24: {
      arti: "【ありきたり】 = biasa saja, klise, pasaran",
      optYomi: [
        "あの{町|まち}にはコンビニがありきたりで、とても{便利|べんり}だ。",
        "その{小説|しょうせつ}のストーリーはありきたりで、つまらなかった。",
        "{困|こま}っている{人|ひと}がいたら{助|たす}けるのは、ありきたりのことだ。",
        "ありきたりの{方|かた}は{入場料|にゅうじょうりょう}{1000円|せんえん}となっています。",
      ],
      optArti: [
        "Di kota itu minimarketnya 'klise', jadi sangat praktis.",
        "Cerita novel itu 'klise' dan membosankan.",
        "Menolong orang yang sedang kesusahan adalah hal yang 'klise'.",
        "Bagi yang 'klise', tiket masuknya 1000 yen.",
      ],
    },
    25: {
      yomi: "【{間柄|あいだがら}】",
      arti: "【間柄】 = hubungan (antarpribadi)",
      optYomi: [
        "{木村|きむら}さんとは{中学|ちゅうがく}からずっと{同|おな}じクラスだが、それほど{親|した}しい{間柄|あいだがら}ではない。",
        "{友好|ゆうこう}{条約|じょうやく}で{両国|りょうこく}の{間柄|あいだがら}は{今後|こんご}{進展|しんてん}する。",
        "{生態系|せいたいけい}の{変化|へんか}と{近年|きんねん}の{環境|かんきょう}{破壊|はかい}との{間柄|あいだがら}が{指摘|してき}される。",
        "{父|ちち}が{漁師|りょうし}で、{小|ちい}さい{頃|ころ}から{海|うみ}と{間柄|あいだがら}の{深|ふか}い{暮|く}らしをしてきた。",
      ],
      optArti: [
        "Saya sekelas dengan Kimura-san sejak SMP, tetapi 'hubungan' kami tidak terlalu akrab.",
        "Dengan perjanjian persahabatan, 'hubungan' kedua negara akan berkembang ke depannya.",
        "'Hubungan' antara perubahan ekosistem dan kerusakan lingkungan beberapa tahun terakhir disoroti.",
        "Ayah saya nelayan, jadi sejak kecil saya menjalani hidup yang 'hubungannya' erat dengan laut.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{宝|たから}くじ{売|う}り{場|ば}があるよ、{買|か}ってみない？　どうせ{当|あ}たらないんだから、{買|か}う（　）{無駄|むだ}だったよ。",
      arti: "\"Ada loket lotre, nih. Mau coba beli?\" \"Toh tidak bakal menang, jadi membeli pun (…) sia-sia.\"",
      optArti: ["daripada", "hanya (formal)", "untuk, bagi", "hanya/sebatas (〜だけ無駄 = sia-sia saja)"],
    },
    27: {
      yomi: "{近年|きんねん}の{健康|けんこう}{意識|いしき}の{高|たか}まり（　）{健康|けんこう}{食品|しょくひん}は{急|きゅう}{成長|せいちょう}している。",
      arti: "(…) meningkatnya kesadaran akan kesehatan beberapa tahun terakhir, makanan kesehatan tumbuh pesat.",
      optYomi: ["に{次|つ}いで", null, "を{受|う}けて", null],
      optArti: ["menyusul, setelah (urutan)", "selama, sepanjang (rentang)", "menanggapi, sebagai dampak dari", "seputar, mengenai (perdebatan)"],
    },
    28: {
      yomi: "{息子|むすこ}はサッカーの{練習|れんしゅう}でよほど{疲|つか}れていたのか、{家|いえ}に（　）{食事|しょくじ}もとらず、{寝|ね}てしまった。",
      arti: "Entah karena sangat lelah latihan sepak bola, anak saya (…) rumah, lalu tidur tanpa makan.",
      optYomi: ["{帰|かえ}り{次第|しだい}", "{帰|かえ}るなり", "{帰|かえ}ったなり", "{帰|かえ}るとなれば"],
      optArti: ["segera setelah pulang (untuk rencana)", "begitu pulang langsung", "sejak pulang (lalu terus begitu)", "kalau memang harus pulang"],
    },
    29: {
      yomi: "ウェブサイトごとに{異|こと}なるパスワードを{設定|せってい}するのは{面倒|めんどう}だが、{第三者|だいさんしゃ}に{不正|ふせい}にアクセスされる（　）、やむを{得|え}ない。",
      arti: "Membuat kata sandi berbeda untuk tiap situs memang merepotkan, tetapi (…) diakses secara ilegal oleh pihak ketiga, hal itu tidak bisa dihindari.",
      optYomi: ["しかない{以上|いじょう}", "しかない{反面|はんめん}", "{恐|おそ}れがある{以上|いじょう}", "{恐|おそ}れがある{反面|はんめん}"],
      optArti: ["karena tidak ada pilihan selain", "di sisi lain hanya bisa", "selama ada risiko", "meski ada risiko, di sisi lain"],
    },
    30: {
      yomi: "{昨日|きのう}{行|い}った{美術館|びじゅつかん}は、{一日|いちにち}では（　）{作品|さくひん}が{展示|てんじ}されていた。",
      arti: "Museum seni yang saya kunjungi kemarin memamerkan karya (…) dalam satu hari.",
      optYomi: ["{見|み}きれないほどの", "{見|み}ずにはいられないほどの", "{見|み}きれないといった", "{見|み}ずにはいられないといった"],
      optArti: ["sampai tidak habis dilihat", "sampai tidak tahan untuk tidak melihat", "yang semacam 'tidak habis dilihat'", "yang semacam 'tidak tahan untuk tidak melihat'"],
    },
    31: {
      yomi: "{引|ひ}っ{越|こ}しを{控|ひか}えているので、なるべく{余計|よけい}な{出費|しゅっぴ}を（　）、{友人|ゆうじん}に{誘|さそ}われたスキー{旅行|りょこう}に{行|い}くことにした。",
      arti: "Karena sebentar lagi pindahan, (…) pengeluaran yang tidak perlu sebisa mungkin, (namun) saya memutuskan ikut liburan ski yang diajak teman.",
      optYomi: ["{抑|おさ}えたら{抑|おさ}えたで", "{抑|おさ}えられるものなら", "{抑|おさ}えるには{抑|おさ}えずに", "{抑|おさ}えたいところだが"],
      optArti: ["kalaupun sudah ditekan, (tetap ada masalah lain)", "kalau saja bisa ditekan", "untuk menekan, tanpa menekan", "inginnya sih menekan, tetapi"],
    },
    32: {
      yomi: "{驚|おどろ}いたことに、その{小学生|しょうがくせい}は、{高校|こうこう}レベルの{数学|すうがく}の{問題|もんだい}をすらすらと（　）。",
      arti: "Yang mengejutkan, anak SD itu (…) soal matematika tingkat SMA dengan lancar.",
      optYomi: ["{解|と}けるとは", "{解|と}けるものなら", "{解|と}いたまでだ", "{解|と}いてみせた"],
      optArti: ["tak disangka bisa menyelesaikan", "kalau memang bisa menyelesaikan (silakan)", "hanya sekadar menyelesaikan", "berhasil menyelesaikan (dan memperlihatkannya)"],
    },
    33: {
      yomi: "{専門家|せんもんか}の{話|はなし}では、かつてこの{地域|ちいき}{一帯|いったい}は{海|うみ}だった（　）。",
      arti: "Menurut keterangan ahli, dahulu seluruh wilayah ini (…) adalah laut.",
      optArti: ["katanya, disebut", "dapat dikatakan", "yang seperti", "dikatakan (orang/umum)"],
    },
    34: {
      yomi: "{子|こ}どもは{生|う}まれてくる{家庭|かてい}{環境|かんきょう}を{選|えら}べない。だからこそ、{親|おや}の{経済|けいざい}{状況|じょうきょう}によって、{子|こ}どもの{教育|きょういく}{機会|きかい}が{奪|うば}われること（　）。",
      arti: "Anak tidak bisa memilih lingkungan keluarga tempat ia dilahirkan. Justru karena itu, kesempatan pendidikan anak terenggut karena kondisi ekonomi orang tua (…).",
      optArti: ["bukan berarti ada/terjadi", "tidak boleh ada/terjadi", "bukan berarti adalah", "tidak boleh menjadi"],
    },
    35: {
      yomi: "（{大学|だいがく}で）{先生|せんせい}「{青木|あおき}さん、{今度|こんど}の{広報誌|こうほうし}のモデルを{青木|あおき}さんにお{願|ねが}いできたらと{思|おも}うんだけど、どうかな」{青木|あおき}「やりたいです。でも、{私|わたし}（　）」{先生|せんせい}「もちろん」",
      arti: "(Di kampus) Dosen: \"Aoki-san, saya ingin meminta Aoki-san menjadi model majalah humas edisi berikutnya, bagaimana?\" Aoki: \"Saya mau. Tapi, saya (…)\" Dosen: \"Tentu saja.\"",
      optArti: ["kalau begitu boleh?", "orang seperti saya boleh?", "kalau begitu boleh, kan", "apakah orang seperti saya ini tidak apa-apa? (rendah hati)"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{昨日|きのう}はとても{寒|さむ}く、{積|つ}もり＿＿ ＿＿ ★ ＿＿ずっと{雪|ゆき}が{降|ふ}っていた。",
      arti: "Kemarin sangat dingin; salju memang tidak sampai menumpuk, tetapi turun terus sepanjang pagi.",
      optYomi: [null, null, null, "{午前中|ごぜんちゅう}"],
      optArti: ["tetapi", "justru, memang (penekanan)", "tidak (melakukan)", "sepanjang pagi"],
    },
    37: {
      yomi: "この{映画|えいが}はあまりにも{正直|しょうじき}で＿＿ ＿＿ ★ ＿＿、コメディー{作品|さくひん}だ。",
      arti: "Film ini adalah karya komedi yang menggambarkan keseharian seorang pria yang tak henti-hentinya bermasalah dengan orang-orang di sekitarnya justru karena terlalu jujur dan terlalu serius.",
      optYomi: ["{真面目|まじめ}すぎる", "{周|まわ}りの{人々|ひとびと}とのトラブルが{絶|た}えない", null, "{男|おとこ}の{日常|にちじょう}を{描|えが}いた"],
      optArti: ["terlalu serius", "tak henti bermasalah dengan orang-orang sekitar", "justru karena", "yang menggambarkan keseharian seorang pria"],
    },
    38: {
      yomi: "＿＿ ＿＿ ★ ＿＿{読|よ}みやすいように、{最近|さいきん}は、ビジネス{理論|りろん}を{漫画|まんが}でわかりやすく{解説|かいせつ}したものが{多|おお}い。",
      arti: "Umumnya buku bisnis cenderung dianggap kaku, tetapi agar mudah dibaca juga oleh orang yang enggan dengan buku bisnis, belakangan banyak buku yang menjelaskan teori bisnis secara mudah lewat manga.",
      optYomi: ["{堅苦|かたくる}しいものと{思|おも}われがちだが", "{抵抗|ていこう}がある{人|ひと}にも", "{一般的|いっぱんてき}にビジネス{書|しょ}というと", "ビジネス{書|しょ}に"],
      optArti: ["cenderung dianggap kaku, tetapi", "bahkan bagi orang yang merasa enggan", "umumnya, kalau bicara buku bisnis", "terhadap buku bisnis"],
    },
    39: {
      yomi: "{渋滞|じゅうたい}の{中|なか}を＿＿ ＿＿ ★ ＿＿{遊園地|ゆうえんち}に{入|はい}る{前|まえ}から{疲|つか}れてしまった。",
      arti: "Setelah menyetir 3 jam di tengah kemacetan dan akhirnya sampai, kali ini tempat parkirnya yang penuh sesak, sehingga saya sudah kelelahan bahkan sebelum masuk taman hiburan.",
      optYomi: ["{今度|こんど}は", "{３時間|さんじかん}{運転|うんてん}して", "{駐車場|ちゅうしゃじょう}が{混雑|こんざつ}していて", "ようやく{着|つ}いたと{思|おも}ったら"],
      optArti: ["kali ini (giliran)", "menyetir selama 3 jam", "tempat parkirnya penuh sesak", "begitu akhirnya sampai"],
    },
    40: {
      yomi: "{商品|しょうひん}やサービスが＿＿ ＿＿ ★ ＿＿ない。",
      arti: "Sebagus apa pun barang atau layanannya, kalau keberadaannya tidak diketahui orang, urusan laku atau tidak laku pun tidak ada.",
      optYomi: ["{売|う}れるも{売|う}れないも", "その{存在|そんざい}が", "{知|し}られないことには", "どんなに{良|よ}い{物|もの}でも"],
      optArti: ["laku atau tidak laku", "keberadaannya", "kalau tidak diketahui", "sebagus apa pun barangnya"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{気|き}を{使|つか}えはしない", "{気|き}を{使|つか}ってなどいない", "{気|き}を{使|つか}わせられはしない", "{気|き}を{使|つか}わせてなどいない"],
      optArti: [
        "tidak bisa berlaku perhatian",
        "sama sekali tidak berlaku perhatian",
        "tidak mungkin membuat (mereka) repot memikirkan saya",
        "sama sekali tidak membuat (mereka) repot",
      ],
    },
    42: {
      optArti: ["dengan itu, karena itu", "bukan hanya itu", "bahkan sebaliknya", "meskipun demikian"],
    },
    43: {
      optYomi: ["{承知|しょうち}していれば", "{承知|しょうち}していて", "{承知|しょうち}していたのか", "{承知|しょうち}していたかのように"],
      optArti: ["kalau sudah menyadari", "menyadari, dan", "apakah sudah menyadari?", "seolah-olah sudah menyadari"],
    },
    44: {
      optArti: ["kalau, soal", "pun, juga", "bahkan", "meskipun dikatakan"],
    },

    // ── 問題8：内容理解（短文） ──
    45: {
      yomi: "{筆者|ひっしゃ}によると、「{情報通|じょうほうつう}」とはどのような{人|ひと}か。",
      arti: "Menurut penulis, \"jōhōtsū\" (orang yang paham informasi) adalah orang seperti apa?",
      optYomi: [
        "{幅広|はばひろ}い{分野|ぶんや}で{人並|ひとな}み{以上|いじょう}の{情報|じょうほう}をもっている{人|ひと}。",
        "{何|なに}が{自分|じぶん}にとって{必要|ひつよう}な{情報|じょうほう}かをよく{理解|りかい}している{人|ひと}。",
        "{誰|だれ}が{必要|ひつよう}な{情報|じょうほう}をもっているかをよく{把握|はあく}している{人|ひと}。",
        "{情報|じょうほう}をもっている{人|ひと}を{見|み}つけて、{問題|もんだい}{解決|かいけつ}ができる{人|ひと}。",
      ],
      optArti: [
        "Orang yang memiliki informasi melebihi rata-rata di berbagai bidang.",
        "Orang yang benar-benar paham informasi apa yang ia butuhkan.",
        "Orang yang benar-benar tahu siapa yang memiliki informasi yang dibutuhkan.",
        "Orang yang bisa menemukan pemilik informasi lalu menyelesaikan masalah.",
      ],
    },
    46: {
      yomi: "{手|て}の{感覚|かんかく}について、{実験|じっけん}からどのようなことが{分|わ}かったか。",
      arti: "Mengenai indra perasa tangan, apa yang diketahui dari eksperimen tersebut?",
      optYomi: [
        "{熱|あつ}いお{湯|ゆ}や{冷|つめ}たい{水|みず}につけ{続|つづ}けていると、{温度|おんど}が{感|かん}じられなくなる。",
        "{冷|つめ}たい{水|みず}のあとより{熱|あつ}いお{湯|ゆ}のあとにつけたほうが、ぬるま{湯|ゆ}を{温|あたた}かく{感|かん}じる。",
        "{先|さき}につけていた{水|みず}やお{湯|ゆ}の{温度|おんど}より、ぬるま{湯|ゆ}の{温度|おんど}のほうが{低|ひく}く{感|かん}じる。",
        "{先|さき}につけていた{水|みず}やお{湯|ゆ}の{温度|おんど}によって、ぬるま{湯|ゆ}の{温度|おんど}の{感|かん}じ{方|かた}が{変|か}わる。",
      ],
      optArti: [
        "Jika terus dicelupkan ke air panas atau air dingin, suhu menjadi tidak terasa.",
        "Air suam-suam kuku terasa lebih hangat bila dicelupkan setelah air panas daripada setelah air dingin.",
        "Suhu air suam-suam kuku terasa lebih rendah daripada suhu air yang dicelupkan sebelumnya.",
        "Cara merasakan suhu air suam-suam kuku berubah tergantung suhu air yang dicelupkan sebelumnya.",
      ],
    },
    47: {
      yomi: "{自動|じどう}{運転車|うんてんしゃ}の{登場|とうじょう}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang munculnya mobil swakemudi?",
      optYomi: [
        "{安全|あんぜん}や{便利|べんり}さも{重要|じゅうよう}ではあるが、{自分|じぶん}で{運転|うんてん}する{楽|たの}しさは{失|うしな}いたくない。",
        "{安全性|あんぜんせい}と{娯楽性|ごらくせい}の{共存|きょうぞん}が{望|のぞ}ましいが、{実現|じつげん}は{難|むずか}しい。",
        "{娯楽性|ごらくせい}がなくなるが、{安全|あんぜん}や{便利|べんり}さのためには{許容|きょよう}せざるをえない。",
        "{娯楽性|ごらくせい}を{犠牲|ぎせい}にしてまで、{運転|うんてん}の{自動化|じどうか}を{進|すす}めてはいけない。",
      ],
      optArti: [
        "Keselamatan dan kepraktisan memang penting, tetapi ia tidak ingin kehilangan kesenangan mengemudi sendiri.",
        "Hidup berdampingannya keselamatan dan unsur hiburan memang diharapkan, tetapi sulit diwujudkan.",
        "Unsur hiburan memang hilang, tetapi demi keselamatan dan kepraktisan terpaksa harus diterima.",
        "Otomatisasi mengemudi tidak boleh dijalankan sampai mengorbankan unsur hiburan.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}は、{翻訳|ほんやく}のどのような{点|てん}が{音楽|おんがく}の{演奏|えんそう}に{似|に}ていると{述|の}べているか。",
      arti: "Menurut penulis, dalam hal apa penerjemahan mirip dengan memainkan musik?",
      optYomi: [
        "{原作|げんさく}を{丹念|たんねん}にたどっても、{作家|さっか}の{世界観|せかいかん}が{再現|さいげん}されない{可能性|かのうせい}がある{点|てん}。",
        "{同|おな}じ{原作|げんさく}を{翻訳|ほんやく}しても、{出来上|できあ}がった{翻訳|ほんやく}が{多様|たよう}になりうる{点|てん}。",
        "{翻訳家|ほんやくか}の{個性|こせい}により、{異|こと}なる{作家|さっか}の{作品|さくひん}でも{似|に}た{印象|いんしょう}になりうる{点|てん}。",
        "{翻訳家|ほんやくか}{次第|しだい}で、さまざまな{世界観|せかいかん}が{生|う}み{出|だ}される{可能性|かのうせい}がある{点|てん}。",
      ],
      optArti: [
        "Meski karya asli ditelusuri dengan teliti, pandangan dunia penulisnya mungkin tidak tergambarkan kembali.",
        "Meski menerjemahkan karya asli yang sama, hasil terjemahannya bisa beragam.",
        "Karena kepribadian penerjemah, karya dari penulis yang berbeda pun bisa memberi kesan serupa.",
        "Tergantung penerjemahnya, berbagai pandangan dunia bisa tercipta.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    49: {
      yomi: "ライオンの{子育|こそだ}てについて、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan cara singa mengasuh anaknya?",
      optYomi: [
        "{生後|せいご}すぐに、{群|む}れの{中|なか}で{雌|めす}が{交代|こうたい}で{育|そだ}てる。",
        "{生後|せいご}{一|いっ}か{月|げつ}あまり{過|す}ぎると、{経験|けいけん}{豊富|ほうふ}な{年長|ねんちょう}の{雌|めす}が{育|そだ}てる。",
        "{歩|ある}けるようになるまで、{群|む}れの{中|なか}で{母親|ははおや}が{育|そだ}てる。",
        "{歩|ある}けるようになると、{群|む}れの{雌|めす}が{協力|きょうりょく}して{育|そだ}てる。",
      ],
      optArti: [
        "Segera setelah lahir, para betina dalam kawanan mengasuh secara bergantian.",
        "Setelah lewat sekitar satu bulan sejak lahir, betina tua yang berpengalaman yang mengasuh.",
        "Sampai bisa berjalan, induknya mengasuh di dalam kawanan.",
        "Setelah bisa berjalan, para betina kawanan mengasuh bersama-sama.",
      ],
    },
    50: {
      yomi: "{共同|きょうどう}{生活|せいかつ}の{利点|りてん}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan keuntungan hidup bersama (dalam kawanan)?",
      optYomi: [
        "{壮年期|そうねんき}のライオンの{経験|けいけん}を{育児|いくじ}と{狩|か}りに{生|い}かすことができる。",
        "{年齢|ねんれい}に{応|おう}じて{役割|やくわり}を{分担|ぶんたん}することで、{育児|いくじ}と{狩|か}りが{両立|りょうりつ}できる。",
        "{群|む}れの{中|なか}での{役割|やくわり}{分担|ぶんたん}が{明確|めいかく}になり、{個々|ここ}のライオンの{負担|ふたん}が{減|へ}る。",
        "{若|わか}いライオンが{育児|いくじ}も{狩|か}りも{経験|けいけん}することで、どんな{役割|やくわり}もできるようになる。",
      ],
      optArti: [
        "Pengalaman singa usia matang bisa dimanfaatkan untuk mengasuh anak dan berburu.",
        "Dengan membagi peran sesuai usia, mengasuh anak dan berburu bisa berjalan bersamaan.",
        "Pembagian peran dalam kawanan menjadi jelas, sehingga beban tiap singa berkurang.",
        "Dengan mengalami mengasuh dan berburu, singa muda menjadi mampu menjalankan peran apa pun.",
      ],
    },
    51: {
      yomi: "{取材|しゅざい}をしている{人|ひと}からうまく{言葉|ことば}が{出|で}てこないことについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang kata-kata yang tidak keluar dengan lancar dari pewawancara?",
      optYomi: [
        "{取材|しゅざい}を{受|う}けている{人|ひと}は、{間|ま}を{取|と}りながら{話|はな}さなければならないという{気持|きも}ちにさせられる。",
        "{取材|しゅざい}を{受|う}けている{人|ひと}は、{考|かんが}えをまとめたり{振|ふ}り{返|かえ}ったりしながら{内容|ないよう}が{深|ふか}められる。",
        "{取材|しゅざい}を{受|う}けている{人|ひと}は、{内容|ないよう}をまとめて{分|わ}かりやすく{伝|つた}えるための{準備|じゅんび}ができる。",
        "{取材|しゅざい}を{受|う}けている{人|ひと}は、{自分|じぶん}のせいだと{考|かんが}えて{自|みずか}ら{会話|かいわ}を{進|すす}めようとする。",
      ],
      optArti: [
        "Orang yang diwawancarai jadi merasa harus berbicara sambil memberi jeda.",
        "Orang yang diwawancarai bisa memperdalam isi pembicaraan sambil merangkum pikiran dan merenung kembali.",
        "Orang yang diwawancarai bisa bersiap merangkum isi agar tersampaikan dengan mudah dipahami.",
        "Orang yang diwawancarai menganggap itu salahnya sendiri lalu berusaha memajukan percakapan sendiri.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{自分|じぶん}に{対|たい}して{多面的|ためんてき}な{見方|みかた}ができれば、ほかの{人|ひと}の{失敗|しっぱい}や{欠点|けってん}にも{寛容|かんよう}になる。",
        "{欠点|けってん}だと{思|おも}えることを{改善|かいぜん}できれば、{自分|じぶん}の{能力|のうりょく}が{発揮|はっき}できるようになる。",
        "{本来|ほんらい}の{力|ちから}を{発揮|はっき}するためには、{自分|じぶん}の{欠点|けってん}ではなく{長所|ちょうしょ}を{探|さが}すのがいい。",
        "{失敗|しっぱい}や{欠点|けってん}だと{思|おも}っていても、{捉|とら}え{方|かた}{次第|しだい}で{長所|ちょうしょ}になり{得|う}る。",
      ],
      optArti: [
        "Jika bisa melihat diri sendiri dari berbagai sisi, kita juga menjadi toleran terhadap kegagalan dan kekurangan orang lain.",
        "Jika hal yang dianggap kekurangan bisa diperbaiki, kemampuan diri bisa dikeluarkan.",
        "Untuk mengeluarkan kemampuan yang sebenarnya, sebaiknya mencari kelebihan diri, bukan kekurangannya.",
        "Meski dianggap kegagalan atau kekurangan, tergantung cara memandangnya hal itu bisa menjadi kelebihan.",
      ],
    },
    53: {
      yomi: "こういった{時|とき}とは、どのような{時|とき}か。",
      arti: "Yang dimaksud \"saat seperti ini\" adalah saat seperti apa?",
      optYomi: [
        "パッケージの{変更|へんこう}に{伴|ともな}って、ファンが{商品|しょうひん}への{愛着|あいちゃく}を{失|うしな}った{時|とき}。",
        "パッケージの{変更|へんこう}を{望|のぞ}まないファンが{多|おお}いのに、{変更|へんこう}せざるを{得|え}ない{時|とき}。",
        "{新|あたら}しいファンを{獲得|かくとく}するには、パッケージの{変更|へんこう}が{不可欠|ふかけつ}だと{分|わ}かった{時|とき}。",
        "ファンの{賛否|さんぴ}が{分|わ}からない{状況|じょうきょう}で、パッケージを{変更|へんこう}しなければならない{時|とき}。",
      ],
      optArti: [
        "Saat penggemar kehilangan keterikatan pada produk seiring perubahan kemasan.",
        "Saat banyak penggemar tidak menginginkan perubahan kemasan, tetapi perubahan terpaksa dilakukan.",
        "Saat diketahui bahwa perubahan kemasan mutlak diperlukan untuk menarik penggemar baru.",
        "Saat kemasan harus diubah padahal setuju-tidaknya penggemar belum diketahui.",
      ],
    },
    54: {
      yomi: "マーケティング{調査|ちょうさ}の{結果|けっか}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang hasil survei pemasaran?",
      optYomi: [
        "{一部|いちぶ}の{消費者|しょうひしゃ}の{意見|いけん}として、うまく{生|い}かすべきだ。",
        "{肯定的|こうていてき}な{意見|いけん}を{積極的|せっきょくてき}に{取|と}り{入|い}れて{商品|しょうひん}{開発|かいはつ}に{生|い}かすべきだ。",
        "{消費者|しょうひしゃ}の{反応|はんのう}が{変|か}わっていくことを{考慮|こうりょ}して{分析|ぶんせき}するべきだ。",
        "{過去|かこ}の{結果|けっか}と{合|あ}わせて、{消費者|しょうひしゃ}の{好|この}みの{変化|へんか}を{読|よ}み{取|と}るべきだ。",
      ],
      optArti: [
        "Harus dimanfaatkan dengan baik sebagai pendapat sebagian konsumen.",
        "Pendapat positif harus diserap secara aktif dan dimanfaatkan untuk pengembangan produk.",
        "Harus dianalisis dengan mempertimbangkan bahwa reaksi konsumen akan berubah.",
        "Harus membaca perubahan selera konsumen dengan menggabungkannya dengan hasil masa lalu.",
      ],
    },
    55: {
      yomi: "「{待|ま}つ」ことからはじまっていくとあるが、{何|なに}を{待|ま}つのか。",
      arti: "Tertulis \"dimulai dari 'menunggu'\"; apa yang ditunggu?",
      optYomi: [
        "{自然|しぜん}が{豊|ゆた}かさを{回復|かいふく}して{利用|りよう}できるようになるとき。",
        "{自然|しぜん}を{人間|にんげん}の{都合|つごう}に{合|あ}わせるのに{適|てき}したとき。",
        "{自然|しぜん}の{恵|めぐ}みを{受|う}けるのに{適|てき}した{状態|じょうたい}になるとき。",
        "{自然|しぜん}の{変化|へんか}が{感|かん}じられるようになるとき。",
      ],
      optArti: [
        "Saat alam memulihkan kekayaannya sehingga bisa dimanfaatkan.",
        "Saat yang tepat untuk menyesuaikan alam dengan kepentingan manusia.",
        "Saat alam berada dalam kondisi yang tepat untuk menerima berkahnya.",
        "Saat perubahan alam mulai bisa dirasakan.",
      ],
    },
    56: {
      yomi: "{筆者|ひっしゃ}によると、{村|むら}の{人|ひと}たちの{人間|にんげん}{関係|かんけい}はどのようにつくられたか。",
      arti: "Menurut penulis, bagaimana hubungan antarmanusia orang-orang desa dibangun?",
      optYomi: [
        "{自然|しぜん}との{関係|かんけい}と{同様|どうよう}に、{相手|あいて}の{行動|こうどう}を{見|み}ながら{時機|じき}を{捉|とら}えて{働|はたら}きかける。",
        "{自然|しぜん}の{変化|へんか}を{捉|とら}えるように、{相手|あいて}の{変化|へんか}を{待|ま}って{働|はたら}きかける。",
        "{自然|しぜん}の{影響|えいきょう}を{受|う}けやすい{人々|ひとびと}の{動|うご}きを{理解|りかい}し、タイミングよく{働|はたら}きかける。",
        "{自然|しぜん}の{変化|へんか}を{待|ま}つのと{同様|どうよう}に、{相手|あいて}からの{働|はたら}きかけを{焦|あせ}らずに{待|ま}つ。",
      ],
      optArti: [
        "Sama seperti hubungan dengan alam, mereka bertindak dengan menangkap momen yang tepat sambil memperhatikan tindakan orang lain.",
        "Seperti menangkap perubahan alam, mereka menunggu perubahan pada orang lain lalu bertindak.",
        "Mereka memahami gerak orang-orang yang mudah terpengaruh alam, lalu bertindak tepat waktu.",
        "Sama seperti menunggu perubahan alam, mereka menunggu dengan sabar tindakan dari pihak lain.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    57: {
      yomi: "{筆者|ひっしゃ}によると、{教育|きょういく}の{仕事|しごと}は{通常|つうじょう}の{仕事|しごと}とどのような{点|てん}で{異|こと}なるか。",
      arti: "Menurut penulis, dalam hal apa pekerjaan di bidang pendidikan berbeda dari pekerjaan biasa?",
      optYomi: [
        "{知識|ちしき}や{技術|ぎじゅつ}の{高|たか}さよりも{人格|じんかく}の{良|よ}さの{方|ほう}が{重視|じゅうし}される。",
        "{知識|ちしき}や{技術|ぎじゅつ}が{十分|じゅうぶん}でなくても{良|よ}い{結果|けっか}を{生|う}むことがある。",
        "{経験知|けいけんち}の{豊富|ほうふ}なベテランより、{若|わか}く{未熟|みじゅく}な{方|ほう}が{好|す}かれやすい。",
        "{経験|けいけん}を{積|つ}み{技術|ぎじゅつ}が{上|あ}がっても、{仕事|しごと}の{質|しつ}が{良|よ}くなるとは{限|かぎ}らない。",
      ],
      optArti: [
        "Kebaikan kepribadian lebih diutamakan daripada tingginya pengetahuan dan keterampilan.",
        "Meski pengetahuan dan keterampilan belum cukup, kadang bisa menghasilkan hasil yang baik.",
        "Yang muda dan belum matang lebih mudah disukai daripada veteran yang kaya pengalaman.",
        "Meski pengalaman bertambah dan keterampilan meningkat, kualitas pekerjaan belum tentu membaik.",
      ],
    },
    58: {
      yomi: "{筆者|ひっしゃ}によると、{初年度|しょねんど}の{教師|きょうし}の{緊張感|きんちょうかん}は{学生|がくせい}たちにどのように{影響|えいきょう}するか。",
      arti: "Menurut penulis, bagaimana ketegangan guru di tahun pertama memengaruhi para mahasiswa?",
      optYomi: [
        "{積極的|せっきょくてき}に{授業|じゅぎょう}に{参加|さんか}し、{教師|きょうし}の{緊張感|きんちょうかん}を{和|やわ}らげようとする。",
        "{教師|きょうし}の{立場|たちば}を{理解|りかい}し、{生徒|せいと}らしい{態度|たいど}で{授業|じゅぎょう}を{受|う}けようとする。",
        "{教師|きょうし}と{一緒|いっしょ}に{授業|じゅぎょう}を{作|つく}っているのだという{気持|きも}ちになる。",
        "{教師|きょうし}と{緊張感|きんちょうかん}が{共有|きょうゆう}でき、{心|こころ}を{開|ひら}いていいのだと{思|おも}うようになる。",
      ],
      optArti: [
        "Mereka aktif berpartisipasi di kelas dan berusaha meredakan ketegangan guru.",
        "Mereka memahami posisi guru dan berusaha mengikuti kelas dengan sikap layaknya siswa.",
        "Mereka merasa sedang membangun kelas bersama-sama dengan guru.",
        "Mereka bisa berbagi ketegangan dengan guru dan mulai merasa boleh membuka hati.",
      ],
    },
    59: {
      yomi: "{筆者|ひっしゃ}によると、{教育|きょういく}を{仕事|しごと}にしている{人間|にんげん}にとって{大切|たいせつ}なことは{何|なに}か。",
      arti: "Menurut penulis, apa yang penting bagi orang yang bekerja di bidang pendidikan?",
      optYomi: [
        "{経験|けいけん}に{満足|まんぞく}することなく、{自|みずか}ら{変化|へんか}し{続|つづ}けようとすること。",
        "{新鮮|しんせん}さを{失|うしな}わないために、{自|みずか}ら{新|あたら}しい{知識|ちしき}や{技術|ぎじゅつ}を{身|み}につけること。",
        "{自|みずか}らの{足|た}りなさを{補|おぎな}いつつ、{情熱|じょうねつ}を{持|も}って{接|せっ}すること。",
        "{自|みずか}らの{未熟|みじゅく}さを{隠|かく}さずに、{学|まな}ぶ{側|がわ}が{一体感|いったいかん}を{得|え}やすくすること。",
      ],
      optArti: [
        "Tidak puas dengan pengalaman dan terus berusaha berubah sendiri.",
        "Menguasai sendiri pengetahuan dan keterampilan baru agar tidak kehilangan kesegaran.",
        "Menutupi kekurangan diri sambil berinteraksi dengan penuh semangat.",
        "Tidak menyembunyikan ketidakmatangan diri agar pihak pelajar mudah merasakan kebersamaan.",
      ],
    },

    // ── 問題11：統合理解 ──
    60: {
      yomi: "{部下|ぶか}や{後輩|こうはい}が{指示|しじ}{待|ま}ちになっている{理由|りゆう}として、ＡとＢが{共通|きょうつう}して{述|の}べていることは{何|なに}か。",
      arti: "Apa yang sama-sama disebutkan A dan B sebagai alasan bawahan atau junior menjadi \"menunggu perintah\"?",
      optYomi: [
        "{知識|ちしき}や{経験|けいけん}が{足|た}りず、やるべきことが{分|わ}からないこと。",
        "{自信|じしん}がなく、{自主的|じしゅてき}に{仕事|しごと}を{進|すす}めることができないこと。",
        "{上司|じょうし}がいつも{丁寧|ていねい}にやり{方|かた}を{教|おし}えてくれること。",
        "{上司|じょうし}にいわれたことを{行|おこな}うのが{仕事|しごと}だと{思|おも}っていること。",
      ],
      optArti: [
        "Kurang pengetahuan dan pengalaman sehingga tidak tahu apa yang harus dilakukan.",
        "Tidak percaya diri sehingga tidak bisa menjalankan pekerjaan atas inisiatif sendiri.",
        "Atasan selalu mengajarkan caranya dengan teliti.",
        "Menganggap bahwa melakukan apa yang dikatakan atasan adalah pekerjaannya.",
      ],
    },
    61: {
      yomi: "{指示|しじ}{待|ま}ちになっている{部下|ぶか}や{後輩|こうはい}の{対応|たいおう}のしかたについて、ＡとＢはどのように{述|の}べているか。",
      arti: "Bagaimana A dan B menjelaskan cara menangani bawahan atau junior yang \"menunggu perintah\"?",
      optYomi: [
        "ＡもＢも、{自分|じぶん}なりのやり{方|かた}を{考|かんが}えて{提案|ていあん}させるといいと{述|の}べている。",
        "ＡもＢも、{仕事|しごと}の{目的|もくてき}を{伝|つた}え、やるべきことを{一緒|いっしょ}に{考|かんが}えるといいと{述|の}べている。",
        "Ａは{仕事|しごと}の{目的|もくてき}と{全体像|ぜんたいぞう}を{理解|りかい}させるといいと{述|の}べ、Ｂは{自分|じぶん}でできそうなことはまず{一人|ひとり}で{考|かんが}えさせるといいと{述|の}べている。",
        "Ａはほかの{仕事|しごと}とのかかわりを{教|おし}えるといいと{述|の}べ、Ｂはやり{方|かた}がすでに{分|わ}かっている{仕事|しごと}を{与|あた}え{自分|じぶん}{自身|じしん}でやらせるといいと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan sebaiknya mereka disuruh memikirkan cara sendiri lalu mengusulkannya.",
        "A dan B sama-sama menyatakan sebaiknya tujuan pekerjaan disampaikan dan apa yang harus dilakukan dipikirkan bersama.",
        "A menyatakan sebaiknya mereka dibuat memahami tujuan dan gambaran utuh pekerjaan; B menyatakan sebaiknya hal yang tampaknya bisa mereka lakukan disuruh dipikirkan sendiri dulu.",
        "A menyatakan sebaiknya diajarkan kaitannya dengan pekerjaan lain; B menyatakan sebaiknya diberi pekerjaan yang caranya sudah diketahui lalu dibiarkan mengerjakannya sendiri.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    62: {
      yomi: "{筆者|ひっしゃ}によると、{人々|ひとびと}は{脳科学|のうかがく}に{何|なに}を{期待|きたい}しているか。",
      arti: "Menurut penulis, apa yang diharapkan orang-orang dari neurosains?",
      optYomi: [
        "{複雑|ふくざつ}な{脳|のう}の{仕組|しく}みをわかりやすく{説明|せつめい}してくれること。",
        "どうすれば{自分|じぶん}が{幸|しあわ}せに{生|い}きられるかを{教|おし}えてくれること。",
        "{人間|にんげん}の{感情|かんじょう}や{思考|しこう}や{行動|こうどう}の{扱|あつか}い{方|かた}を{教|おし}えてくれること。",
        "{人間|にんげん}にとって{幸|しあわ}せな{人生|じんせい}とは{何|なに}かを{客観的|きゃっかんてき}に{示|しめ}してくれること。",
      ],
      optArti: [
        "Menjelaskan mekanisme otak yang rumit dengan mudah dipahami.",
        "Mengajarkan bagaimana caranya agar diri sendiri bisa hidup bahagia.",
        "Mengajarkan cara menangani emosi, pikiran, dan perilaku manusia.",
        "Menunjukkan secara objektif apa itu hidup bahagia bagi manusia.",
      ],
    },
    63: {
      yomi: "{脳科学|のうかがく}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang neurosains, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{個人|こじん}の{人生|じんせい}に{適用|てきよう}するには、{普遍的|ふへんてき}な{法則|ほうそく}を{見|み}つけなければならない。",
        "{人|ひと}の{脳|のう}の{機能|きのう}をすべて{解明|かいめい}できたとしても、{普遍的|ふへんてき}な{法則|ほうそく}にたどり{着|つ}けない。",
        "{普遍的|ふへんてき}な{法則|ほうそく}にたどり{着|つ}いたとしても、{人生|じんせい}の{個々|ここ}の{事柄|ことがら}には{応用|おうよう}できない。",
        "{普遍的|ふへんてき}な{法則|ほうそく}に{到達|とうたつ}するには、{人生|じんせい}の{個々|ここ}の{事柄|ことがら}を{解|と}き{明|あ}かさなければならない。",
      ],
      optArti: [
        "Untuk diterapkan pada kehidupan individu, hukum universal harus ditemukan.",
        "Meski seluruh fungsi otak manusia berhasil diungkap, hukum universal tetap tidak akan tercapai.",
        "Meski hukum universal tercapai, itu tidak bisa diterapkan pada hal-hal individual dalam hidup.",
        "Untuk mencapai hukum universal, hal-hal individual dalam hidup harus diungkap.",
      ],
    },
    64: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{科学|かがく}が{証明|しょうめい}した{事実|じじつ}は、{個人|こじん}や{社会|しゃかい}の{価値観|かちかん}に{影響|えいきょう}を{与|あた}える{恐|おそ}れがある。",
        "{科学|かがく}だけでなく{個人|こじん}や{社会|しゃかい}の{価値観|かちかん}を{考慮|こうりょ}したうえで、{未来|みらい}を{選|えら}ぶ{必要|ひつよう}がある。",
        "{科学|かがく}は{個人|こじん}や{社会|しゃかい}の{価値観|かちかん}を{扱|あつか}えず、{人類|じんるい}が{望|のぞ}む{未来|みらい}の{実現|じつげん}には{役|やく}に{立|た}たない。",
        "{科学|かがく}は{事実|じじつ}を{対象|たいしょう}とするものであり、{個人|こじん}や{社会|しゃかい}の{価値観|かちかん}を{扱|あつか}うものではない。",
      ],
      optArti: [
        "Fakta yang dibuktikan sains berisiko memengaruhi nilai-nilai individu dan masyarakat.",
        "Masa depan perlu dipilih dengan mempertimbangkan tidak hanya sains, tetapi juga nilai-nilai individu dan masyarakat.",
        "Sains tidak bisa menangani nilai-nilai individu dan masyarakat, sehingga tidak berguna untuk mewujudkan masa depan yang diinginkan umat manusia.",
        "Sains berurusan dengan fakta, dan bukan untuk menangani nilai-nilai individu dan masyarakat.",
      ],
    },

    // ── 問題13：情報検索 ──
    65: {
      yomi: "サイさんは、{９月|くがつ}{４日|よっか}から{７日|なのか}までボランティア{活動|かつどう}を{行|おこな}ったので、{９月|くがつ}{中|ちゅう}に{助成金|じょせいきん}を{申請|しんせい}しようと{考|かんが}えている。{交通費|こうつうひ}と{宿泊費|しゅくはくひ}を{計算|けいさん}してメモにまとめたが、{申請|しんせい}が{認|みと}められた{場合|ばあい}、サイさんに{支給|しきゅう}される{助成金|じょせいきん}はいくらになるか。\n\n【サイさんのメモ】{交通費|こうつうひ}：12,000{円|えん}　{宿泊費|しゅくはくひ}：7,000{円|えん}を{３泊|さんぱく}{分|ぶん}",
      arti: "Sai-san mengikuti kegiatan sukarela dari tanggal 4 sampai 7 September dan berencana mengajukan subsidi di bulan September. Ia menghitung biaya transportasi dan penginapan lalu mencatatnya. Jika pengajuannya disetujui, berapa subsidi yang akan diterima Sai-san?\n\n【Catatan Sai-san】 Transportasi: 12.000 yen　Penginapan: 7.000 yen × 3 malam",
      optYomi: [
        "{交通|こうつう}10,000{円|えん}と、{宿泊|しゅくはく}6,000{円|えん}を{２泊|にはく}{分|ぶん}。",
        "{交通|こうつう}10,000{円|えん}と、{宿泊|しゅくはく}6,000{円|えん}を{３泊|さんぱく}{分|ぶん}。",
        "{交通|こうつう}12,000{円|えん}と、{宿泊|しゅくはく}7,000{円|えん}を{２泊|にはく}{分|ぶん}。",
        "{交通|こうつう}12,000{円|えん}と、{宿泊|しゅくはく}7,000{円|えん}を{３泊|さんぱく}{分|ぶん}。",
      ],
      optArti: [
        "Transportasi 10.000 yen, dan penginapan 6.000 yen untuk 2 malam.",
        "Transportasi 10.000 yen, dan penginapan 6.000 yen untuk 3 malam.",
        "Transportasi 12.000 yen, dan penginapan 7.000 yen untuk 2 malam.",
        "Transportasi 12.000 yen, dan penginapan 7.000 yen untuk 3 malam.",
      ],
    },
    66: {
      yomi: "ジムさんは、{１月|いちがつ}{10日|とおか}に{日帰|ひがえ}りでボランティア{活動|かつどう}を{行|おこな}う{予定|よてい}である。{助成金|じょせいきん}を{申請|しんせい}したいと{考|かんが}えているが、{活動|かつどう}{終了|しゅうりょう}{後|ご}に{必|かなら}ず{提出|ていしゅつ}しなければならないものは{何|なに}で、いつまでに{提出|ていしゅつ}しなければならないか。",
      arti: "Jim-san berencana mengikuti kegiatan sukarela pulang-pergi (tanpa menginap) pada 10 Januari. Ia ingin mengajukan subsidi; dokumen apa yang wajib diserahkan setelah kegiatan selesai, dan paling lambat kapan harus diserahkan?",
      optYomi: [
        "AとBとCで、{３月|さんがつ}{10日|とおか}までに{提出|ていしゅつ}する。",
        "AとBとCで、{３月|さんがつ}{24日|にじゅうよっか}までに{提出|ていしゅつ}する。",
        "AとBとCとDで、{３月|さんがつ}{10日|とおか}までに{提出|ていしゅつ}する。",
        "AとBとCとDで、{３月|さんがつ}{24日|にじゅうよっか}までに{提出|ていしゅつ}する。",
      ],
      optArti: [
        "A, B, dan C, diserahkan paling lambat 10 Maret.",
        "A, B, dan C, diserahkan paling lambat 24 Maret.",
        "A, B, C, dan D, diserahkan paling lambat 10 Maret.",
        "A, B, C, dan D, diserahkan paling lambat 24 Maret.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：寂しい片耳 ──
    "7": {
      yomi: `{久|ひさ}しぶりに{少|すこ}し、{落|お}ち{込|こ}んでいる。お{気|き}に{入|い}りのピアスを{片方|かたほう}、{落|お}としてしまったからだ。これが{一人|ひとり}で{行動|こうどう}している{昼間|ひるま}なら、{諦|あきら}めがつくまで{探|さが}しに{戻|もど}るが、{生憎|あいにく}、{紛失|ふんしつ}に{気付|きづ}いたのは{夜|よる}。それも{編集者|へんしゅうしゃ}の{方々|かたがた}に{丸一日|まるいちにち}{取材|しゅざい}にご{同行|どうこう}いただいた{末|すえ}、お{疲|つか}れさまと{入|はい}った{店|みせ}でのことだった。

ようやく{一息|ひといき}ついてらっしゃる{編集者|へんしゅうしゃ}さんたちに、[41]、{動揺|どうよう}を{押|お}し{殺|ころ}してさりげなく{周|まわ}りを{見回|みまわ}し、やっぱりない、と{片耳|かたみみ}に{触|ふ}れるのが{精|せい}いっぱい。{朝|あさ}からほうぼう{歩|ある}き{回|まわ}った{後|あと}のため、{探|さが}しに{行|い}くのはどう{考|かんが}えても{不可能|ふかのう}で、そのまますごすごと{家|いえ}に{引|ひ}き{上|あ}げた。

{親|した}しいお{店|みせ}で{作|つく}っていただいたピアスなので、{片方|かたほう}だけ{発注|はっちゅう}する（{注|ちゅう}１）のは{難|むずか}しくない。[42]{自分|じぶん}でも{珍|めずら}しいほど{落|お}ち{込|こ}んだのは、それが{三|さん}、{四年|よねん}ぶりの{落|お}とし{物|もの}だったからだ。

ピアスホールを{開|あ}けて{間|ま}がない{二十代|にじゅうだい}の{頃|ころ}は、{着用|ちゃくよう}に{慣|な}れていなかったため、{二|に}、{三|さん}か{月|げつ}に{一度|いちど}は{必|かなら}ずピアスを{落|お}とした。{三十代|さんじゅうだい}からは{徐々|じょじょ}にそれが{間遠|まどお}になり、この{数年|すうねん}はとんと{失敗|しっぱい}をしていない。

{最初|さいしょ}から{自分|じぶん}の{迂闊|うかつ}さを[43]、{何|なに}を{落|お}とそうともがっかりはしない。もはやそんなことはあるまいと{高|たか}を{括|くく}っていた（{注|ちゅう}２）だけに、{傲慢|ごうまん}な{自分|じぶん}がなおさら{情|なさ}けなくなる。{顧|かえり}みれば{逆上|さかあ}がりも{九九|くく}も{苦手|にがて}だった{子供|こども}の{頃|ころ}は、「できないこと」をたくさん{抱|かか}えているのが{当然|とうぜん}で、どんなミスをしても{平気|へいき}だった。{大人|おとな}になればなるほど、{失敗|しっぱい}が{怖|こわ}く、{人|ひと}の{眼|め}が{気|き}になってきたのは、{知|し}らず{知|し}らずのうちに{自分|じぶん}が「できる」{人間|にんげん}と{考|かんが}えるに{至|いた}ったからかもしれない。

だがそもそも、{年|とし}を{重|かさ}ねたから{失敗|しっぱい}をしないというのは、{幻想|げんそう}だ。ピアス[44]、{最近|さいきん}たまたま{落|お}とさない{日々|ひび}が{続|つづ}いていただけで、{明日|あした}からは{毎日|まいにち}{紛失|ふんしつ}を{重|かさ}ねるかもしれない。いや、{自分|じぶん}のうっかり{工合|ぐあい}（{注|ちゅう}３）を{考|かんが}えれば、むしろその{方|ほう}が{自然|しぜん}だと{自分|じぶん}に{言|い}い{聞|き}かせながら、{私|わたし}はまだピアスの{消|き}えた{片耳|かたみみ}を{撫|な}で{続|つづ}けている。

（{注|ちゅう}１）{発注|はっちゅう}する：{注文|ちゅうもん}する
（{注|ちゅう}２）{高|たか}を{括|くく}っていた：{油断|ゆだん}していた
（{注|ちゅう}３）{工合|ぐあい}：{具合|ぐあい}`,
      arti: `Sudah lama tidak begini, saya sedikit murung. Sebab, saya kehilangan sebelah anting kesayangan saya. Kalau ini terjadi di siang hari saat saya bepergian sendirian, saya akan kembali mencarinya sampai bisa merelakannya, tetapi sayangnya, saya baru sadar kehilangan itu pada malam hari. Itu pun terjadi di sebuah restoran yang kami masuki untuk melepas lelah, setelah para editor menemani saya meliput seharian penuh.

Kepada para editor yang akhirnya bisa bernapas lega, [41], jadi yang bisa saya lakukan hanyalah menahan rasa panik, diam-diam melihat sekeliling, lalu menyentuh telinga yang sebelah sambil membatin "memang tidak ada". Karena sejak pagi kami sudah berjalan ke sana kemari, kembali untuk mencarinya jelas mustahil, dan saya pun pulang ke rumah dengan lesu.

Anting itu dibuatkan oleh toko langganan saya, jadi memesan (catatan 1) sebelahnya saja tidaklah sulit. [42], saya murung sampai-sampai saya sendiri heran, karena itu adalah barang hilang pertama setelah tiga atau empat tahun.

Di usia dua puluhan, ketika lubang tindik saya baru dibuat, saya belum terbiasa memakainya sehingga pasti kehilangan anting sekali dalam dua atau tiga bulan. Sejak usia tiga puluhan hal itu perlahan makin jarang, dan beberapa tahun terakhir ini saya sama sekali tidak pernah gagal.

[43] kecerobohan diri sendiri sejak awal, saya tidak akan kecewa apa pun yang hilang. Justru karena saya sudah meremehkan (catatan 2) dengan berpikir hal seperti itu tidak akan terjadi lagi, diri saya yang congkak ini terasa makin menyedihkan. Kalau diingat-ingat, waktu kecil saya payah dalam gerakan putar naik di palang maupun hafalan perkalian; wajar saja punya banyak "hal yang tidak bisa dilakukan", sehingga kesalahan apa pun tidak membuat saya risau. Semakin dewasa, saya makin takut gagal dan makin peduli pada pandangan orang; mungkin karena tanpa sadar saya mulai menganggap diri sebagai orang yang "mampu".

Namun pada dasarnya, anggapan bahwa karena bertambah umur kita tidak akan gagal adalah ilusi. [44] soal anting, belakangan kebetulan saja hari-hari tanpa kehilangan terus berlanjut; bisa jadi mulai besok saya akan kehilangan setiap hari. Bukan, kalau mengingat betapa cerobohnya (catatan 3) saya, justru itulah yang lebih wajar — begitu saya menasihati diri sendiri, sambil terus mengusap telinga sebelah yang antingnya hilang.

(Catatan 1) 発注する: memesan
(Catatan 2) 高を括っていた: lengah, meremehkan
(Catatan 3) 工合: kondisi, keadaan`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `どんな{社会|しゃかい}にも、「{情報通|じょうほうつう}」と{呼|よ}ばれる{人|ひと}がいます。「{物知|ものし}り（{注|ちゅう}）」とは{違|ちが}います。{多|おお}くの{場合|ばあい}は、「{情報|じょうほう}に{通|つう}じた{人|ひと}」つまり、どこにいけば{情報|じょうほう}があるのかを{知|し}っている{人|ひと}を{指|さ}します。

どんなに{知識|ちしき}の{豊|ゆた}かな{人|ひと}でも、{知|し}っている{分野|ぶんや}や{程度|ていど}にはかぎりがあります。けれども、ある{分野|ぶんや}については、{人並|ひとな}み{以上|いじょう}によく{知|し}っている{人|ひと}は{少|すく}なくありません。「この{問題|もんだい}については、〇〇さんが{詳|くわ}しい」「この{問題|もんだい}なら、〇〇さんに{聞|き}けばわかる」そうした{引|ひ}き{出|だ}しを、{人並|ひとな}み{以上|いじょう}にもっている{人|ひと}が「{情報通|じょうほうつう}」なのです。

（{注|ちゅう}）{物知|ものし}り：{物事|ものごと}を{広|ひろ}くよく{知|し}っている{人|ひと}。`,
      arti: `Di masyarakat mana pun, ada orang yang disebut "jōhōtsū" (orang yang paham informasi). Ini berbeda dengan "monoshiri" (catatan). Dalam banyak kasus, istilah itu merujuk pada "orang yang menguasai jalur informasi", yaitu orang yang tahu ke mana harus pergi untuk mendapatkan informasi.

Sekaya apa pun pengetahuan seseorang, bidang dan tingkat yang ia ketahui ada batasnya. Namun, tidak sedikit orang yang mengetahui bidang tertentu lebih baik daripada orang kebanyakan. "Soal masalah ini, ○○-san yang paham." "Kalau masalah ini, tanya saja ke ○○-san pasti tahu." Orang yang punya "laci" rujukan seperti itu lebih banyak daripada orang kebanyakan, itulah "jōhōtsū".

(Catatan) 物知り: orang yang mengetahui banyak hal secara luas.`,
    },
    "8-2": {
      yomi: `{人間|にんげん}の{感覚|かんかく}がいかにあてにならないものかを{示|しめ}す{有名|ゆうめい}な{実験|じっけん}があります。

まず、{三|みっ}つの{容器|ようき}に{冷|つめ}たい{水|みず}とぬるま{湯|ゆ}、それに{熱|あつ}いお{湯|ゆ}を{用意|ようい}します。はじめに{右手|みぎて}を{冷|つめ}たい{水|みず}に、{左手|ひだりて}を{熱|あつ}いお{湯|ゆ}に、{同時|どうじ}につけます。しばらくしたら、{今度|こんど}は{両手|りょうて}を{同時|どうじ}にぬるま{湯|ゆ}につけてみます。すると、{冷|つめ}たい{水|みず}に{慣|な}れた{右手|みぎて}は{温|あたた}かいと{感|かん}じ、{熱|あつ}いお{湯|ゆ}に{慣|な}れた{左手|ひだりて}は{同|おな}じぬるま{湯|ゆ}を{冷|つめ}たいと{感|かん}じるでしょう。{人間|にんげん}の{感覚|かんかく}は{同|おな}じ{身体|しんたい}の{一部|いちぶ}でさえも、ちがう{意味|いみ}を{受|う}け{取|と}ってしまうのです。`,
      arti: `Ada eksperimen terkenal yang menunjukkan betapa indra manusia tidak bisa diandalkan.

Pertama, siapkan air dingin, air suam-suam kuku, dan air panas di tiga wadah. Mula-mula, celupkan tangan kanan ke air dingin dan tangan kiri ke air panas secara bersamaan. Setelah beberapa saat, sekarang celupkan kedua tangan bersamaan ke air suam-suam kuku. Maka tangan kanan yang sudah terbiasa dengan air dingin akan merasakannya hangat, sedangkan tangan kiri yang terbiasa dengan air panas akan merasakan air suam-suam kuku yang sama itu dingin. Indra manusia, bahkan pada bagian tubuh yang sama sekalipun, bisa menangkap makna yang berbeda.`,
    },
    "8-3": {
      yomi: `{自動車|じどうしゃ}が{自動的|じどうてき}に{運転|うんてん}されることになれば、それは{完全|かんぜん}に{単|たん}なる{移動|いどう}{手段|しゅだん}となり、{運転|うんてん}することの{娯楽性|ごらくせい}は{存在|そんざい}しなくなる。{人間|にんげん}が{自分|じぶん}で{自動車|じどうしゃ}を{運転|うんてん}する{楽|たの}しさというものは、{安全|あんぜん}や{利便性|りべんせい}（{注|ちゅう}１）とのトレードオフ（{注|ちゅう}２）として、なくなってしかるべきものなのだろうか。{人間|にんげん}を{害|がい}するリスクのある{非合理的|ひごうりてき}な{娯楽性|ごらくせい}は、{自動|じどう}{運転車|うんてんしゃ}とともになくなってしまえばいいと{割|わ}り{切|き}ってしまう{前|まえ}に、{安全性|あんぜんせい}と{娯楽性|ごらくせい}が{両立|りょうりつ}する{解|かい}はあると{信|しん}じたい。

（{注|ちゅう}１）{利便性|りべんせい}：{便利|べんり}さ
（{注|ちゅう}２）〜とのトレードオフとして：ここでは、〜を{得|え}るかわりに`,
      arti: `Jika mobil dikemudikan secara otomatis, mobil akan sepenuhnya menjadi sekadar alat transportasi, dan unsur hiburan dari mengemudi tidak akan ada lagi. Apakah kesenangan manusia mengemudikan mobilnya sendiri memang sepatutnya hilang sebagai "trade-off" (catatan 2) dengan keselamatan dan kepraktisan (catatan 1)? Sebelum dengan tegas memutuskan bahwa hiburan yang tidak rasional dan berisiko membahayakan manusia lebih baik lenyap saja bersama datangnya mobil swakemudi, saya ingin percaya bahwa ada solusi yang membuat keselamatan dan unsur hiburan bisa berjalan bersamaan.

(Catatan 1) 利便性: kepraktisan
(Catatan 2) 〜とのトレードオフとして: di sini, sebagai ganti memperoleh 〜`,
    },
    "8-4": {
      yomi: `{翻訳|ほんやく}という{作業|さぎょう}は{音楽|おんがく}の{演奏|えんそう}に{似|に}ている。{作家|さっか}は{作曲家|さっきょくか}に、{翻訳家|ほんやくか}は{演奏家|えんそうか}に、それぞれたとえることができるのではないか。{前|まえ}から、ひそかにそう{考|かんが}えていた。{新|あたら}しい{世界観|せかいかん}を{提示|ていじ}するために{構成|こうせい}を{練|ね}り、{一|ひと}つ{一|ひと}つの{言葉|ことば}や{音|おと}を{吟味|ぎんみ}して{組|く}み{立|た}てていく{作家|さっか}＝{作曲家|さっきょくか}。かたや（{注|ちゅう}）{作者|さくしゃ}に{寄|よ}りそうようにして{意|い}を{汲|く}み、{原作|げんさく}や{楽譜|がくふ}を{丹念|たんねん}にたどってその{世界|せかい}を{再現|さいげん}してみせる{翻訳家|ほんやくか}＝{演奏家|えんそうか}。{楽譜|がくふ}をもとにしていても、{演奏家|えんそうか}によって、{生|う}み{出|だ}される{曲|きょく}の{印象|いんしょう}がまるで{違|ちが}うことがあるように、{小説|しょうせつ}や{詩|し}も、{翻訳家|ほんやくか}の{個性|こせい}や{解釈|かいしゃく}によって、{何種類|なんしゅるい}もの{異|こと}なる{翻訳|ほんやく}が{存在|そんざい}することがありうる。

（{注|ちゅう}）かたや：{一方|いっぽう}`,
      arti: `Pekerjaan menerjemahkan mirip dengan memainkan musik. Bukankah penulis bisa diibaratkan komponis, dan penerjemah diibaratkan pemain musik? Sejak lama, diam-diam saya berpikir begitu. Penulis = komponis: menyusun struktur dengan matang untuk menyajikan pandangan dunia yang baru, menimbang setiap kata dan bunyi satu per satu, lalu merangkainya. Sementara itu (catatan), penerjemah = pemain musik: seolah mendampingi pengarang untuk menangkap maksudnya, menelusuri karya asli atau partitur dengan teliti, lalu menghadirkan kembali dunia tersebut. Sama seperti kesan lagu yang dihasilkan bisa sangat berbeda tergantung pemainnya meski berdasarkan partitur yang sama, novel dan puisi pun bisa memiliki berbagai macam terjemahan yang berbeda tergantung kepribadian dan interpretasi penerjemahnya.

(Catatan) かたや: di sisi lain`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{育児|いくじ}と{言|い}えば、たいていは{母親|ははおや}によってなされると{思|おも}われています。（{中略|ちゅうりゃく}）

ところがライオンはちょっと{違|ちが}います。{同|おな}じ{群|む}れのライオンは、そろって{出産|しゅっさん}する{傾向|けいこう}があり、{育児|いくじ}も{群|む}れの{雌|めす}{全員|ぜんいん}が{協力|きょうりょく}して{行|おこな}うのです。{赤|あか}ちゃんは{生|う}まれて{一|いっ}か{月|げつ}あまりは{物陰|ものかげ}に{隠|かく}され、{母親|ははおや}だけで{育|そだ}てられます。しかし、{歩|ある}けるようになると、{群|む}れに{連|つ}れてこられて{共同|きょうどう}{生活|せいかつ}が{始|はじ}まります。

ライオンの{群|む}れには{複数|ふくすう}の{大人|おとな}の{雌|めす}がいますから、それらの{子|こ}どもたちが{集|あつ}まって、{大所帯|おおじょたい}となります。{集|あつ}められた{子|こ}どもたちは、{自分|じぶん}の{母親|ははおや}{以外|いがい}のライオンの{乳|ちち}も{飲|の}むことができ、{群|む}れの{全員|ぜんいん}の{保護|ほご}を{受|う}けることができます。{捕食獣|ほしょくじゅう}（{注|ちゅう}１）であるライオンは、{子育|こそだ}て{中|ちゅう}も{獲物|えもの}{狩|が}りに{出|で}かけなければなりません。{母親|ははおや}{一頭|いっとう}で{子育|こそだ}てをしている{場合|ばあい}には、{外出|がいしゅつ}{中|ちゅう}に、ハイエナ（{注|ちゅう}２）などに{子|こ}どもが{捕食|ほしょく}される{危険|きけん}があります。しかし、{共同|きょうどう}{育児|いくじ}をして{誰|だれ}かが{子|こ}どものそばに{残|のこ}っていれば{安心|あんしん}です。

{若|わか}い{雌|めす}ライオンは{敏捷|びんしょう}（{注|ちゅう}３）ですが、{子育|こそだ}ての{経験|けいけん}に{乏|とぼ}しく、{失敗|しっぱい}することもよくあります。それに{比|くら}べ、{壮年期|そうねんき}になったライオンは{経験|けいけん}{豊富|ほうふ}で{態度|たいど}もどっしりとして{子育|こそだ}ても{上手|じょうず}です。{年長|ねんちょう}の{雌|めす}がまとめて{面倒|めんどう}を{見|み}た{方|ほう}が{育児|いくじ}はうまくいくかもしれません。{反面|はんめん}、{若|わか}いライオンの{敏捷性|びんしょうせい}は{狩|か}りでは{有利|ゆうり}に{働|はたら}くでしょう。ライオンは{狩|か}りも{共同|きょうどう}で{行|おこな}い、{獲物|えもの}はみんなで{食|た}べますから{年老|としお}いて{狩|か}りに{参加|さんか}できなくても、{食事|しょくじ}をとることができるのです。

ライオンたちは、{明確|めいかく}な{分業|ぶんぎょう}とまではいえなくても、うまく{育児|いくじ}と{狩|か}りを{全員|ぜんいん}が{協力|きょうりょく}することで、{問題|もんだい}を{解決|かいけつ}しています。

（{注|ちゅう}１）{捕食獣|ほしょくじゅう}：ほかの{動物|どうぶつ}を{捕|と}らえて{食|た}べる{獣|けもの}
（{注|ちゅう}２）ハイエナ：{動物|どうぶつ}の{一種|いっしゅ}
（{注|ちゅう}３）{敏捷|びんしょう}：{動|うご}きが{素早|すばや}い`,
      arti: `Bicara soal mengasuh anak, umumnya dianggap dilakukan oleh sang ibu. (dihilangkan)

Namun, singa sedikit berbeda. Singa dalam satu kawanan cenderung melahirkan pada waktu yang bersamaan, dan pengasuhan anak pun dilakukan bersama oleh seluruh betina dalam kawanan. Selama sekitar satu bulan lebih setelah lahir, bayi singa disembunyikan di tempat tersembunyi dan diasuh hanya oleh induknya. Namun, begitu bisa berjalan, mereka dibawa ke kawanan dan kehidupan bersama pun dimulai.

Dalam kawanan singa terdapat beberapa betina dewasa, sehingga anak-anak mereka berkumpul menjadi rombongan besar. Anak-anak yang dikumpulkan itu bisa menyusu juga dari singa selain induknya sendiri, dan mendapat perlindungan dari seluruh anggota kawanan. Singa, sebagai hewan pemangsa (catatan 1), harus tetap pergi berburu meski sedang mengasuh anak. Jika induk mengasuh anak seorang diri, ada bahaya anaknya dimangsa hiena (catatan 2) dan sebagainya selagi ia pergi. Namun, jika mengasuh bersama dan ada yang tinggal di dekat anak-anak, maka aman.

Singa betina muda memang gesit (catatan 3), tetapi minim pengalaman mengasuh anak dan sering gagal. Sebaliknya, singa yang sudah memasuki usia matang kaya pengalaman, bersikap tenang dan mantap, serta pandai mengasuh anak. Mungkin pengasuhan akan lebih berhasil jika betina yang lebih tua mengurus semuanya sekaligus. Di sisi lain, kegesitan singa muda akan menguntungkan dalam berburu. Singa juga berburu bersama dan memakan hasil buruan bersama-sama, sehingga meski sudah tua dan tidak bisa ikut berburu, mereka tetap bisa makan.

Para singa itu, meski belum bisa disebut pembagian kerja yang jelas, menyelesaikan masalah dengan cara seluruh anggota bekerja sama dengan baik dalam mengasuh anak dan berburu.

(Catatan 1) 捕食獣: hewan yang menangkap dan memakan hewan lain
(Catatan 2) ハイエナ: hiena, sejenis hewan
(Catatan 3) 敏捷: gerakannya cepat`,
    },
    "9-2": {
      yomi: `{仕事柄|しごとがら}（{注|ちゅう}１）、{私|わたし}は{取材|しゅざい}を{受|う}けることが{多|おお}いが、あるとき{取材|しゅざい}をしている{人|ひと}から、{話|はな}すのが{苦手|にがて}だと{打|う}ち{明|あ}けられたことがある。{取材|しゅざい}{中|ちゅう}は{自然|しぜん}な{感|かん}じで{会話|かいわ}が{進|すす}んでいたこともあって{少|すこ}し{驚|おどろ}いたが、そう{言|い}われてみるとたしかに{少|すこ}し{緊張|きんちょう}しているように{見|み}えなくもない。ただ、{取材|しゅざい}を{受|う}けている{私|わたし}の{立場|たちば}からすると、{必|かなら}ずしも{悪|わる}い{印象|いんしょう}は{受|う}けなかった。

むしろ{緊張感|きんちょうかん}が{相手|あいて}に{対|たい}する{配慮|はいりょ}のように{感|かん}じられて、{良|よ}い{感|かん}じで{話|はな}すことができた。

{私|わたし}たちは、あることが{苦手|にがて}だと{思|おも}うと、うまくできていないように{見|み}える{面|めん}に{目|め}を{向|む}けてしまう。スムーズに{言葉|ことば}が{出|で}てこなかったことや、{話|はなし}が{行|ゆ}きつ{戻|もど}りつしてしまったことなどが{気|き}になって、{自分|じぶん}を{責|せ}める{気持|きも}ちになる。

しかし、スムーズに{言葉|ことば}が{出|で}なかったことで、{会話|かいわ}にため（{注|ちゅう}２）が{出|で}てきていることもある。{相手|あいて}は、その{時間的|じかんてき}すきまの{時|とき}に、{考|かんが}えをまとめたり、{振|ふ}り{返|かえ}りをしたりできたりする。トントン{拍子|びょうし}に（{注|ちゅう}３）{会話|かいわ}が{進|すす}まないことで、{話|はな}している{内容|ないよう}を{多面的|ためんてき}に{考|かんが}えることができたりもする。

{思|おも}うように{会話|かいわ}できないときは、{失敗|しっぱい}ではなく、{話|はなし}を{深|ふか}めるように{無意識|むいしき}に{心|こころ}が{手助|てだす}けしているようにも{思|おも}える。（{中略|ちゅうりゃく}）{失敗|しっぱい}のように{思|おも}えることには、それなりに{意味|いみ}があるのだろう。

{欠点|けってん}のように{思|おも}えることも、{見方|みかた}を{変|か}えるとじつは{長所|ちょうしょ}だということが{少|すく}なくない。{自分|じぶん}に{対|たい}して{多面的|ためんてき}な{見方|みかた}ができると、{気持|きも}ちが{楽|らく}になるし、{本来|ほんらい}の{力|ちから}を{発揮|はっき}できるようになる。

（{注|ちゅう}１）{仕事柄|しごとがら}：{仕事|しごと}の{性質上|せいしつじょう}
（{注|ちゅう}２）ため：ここでは、{余裕|よゆう}の{時間|じかん}
（{注|ちゅう}３）トントン{拍子|びょうし}に：{順調|じゅんちょう}に`,
      arti: `Karena sifat pekerjaan saya (catatan 1), saya sering diwawancarai. Suatu kali, seorang pewawancara mengaku kepada saya bahwa ia tidak pandai berbicara. Saya sedikit terkejut karena selama wawancara percakapan berjalan dengan wajar, tetapi setelah ia berkata begitu, memang ia tampak agak tegang. Namun, dari sudut pandang saya sebagai orang yang diwawancarai, kesan yang saya terima belum tentu buruk.

Malah, ketegangannya terasa seperti bentuk kepedulian kepada lawan bicara, sehingga saya bisa berbicara dengan nyaman.

Ketika merasa tidak pandai dalam sesuatu, kita cenderung memperhatikan sisi yang tampak tidak berjalan baik. Kita jadi memikirkan kata-kata yang tidak keluar dengan lancar atau pembicaraan yang maju-mundur, lalu menyalahkan diri sendiri.

Akan tetapi, karena kata-kata tidak keluar dengan lancar, terkadang muncul "jeda" (catatan 2) dalam percakapan. Pada celah waktu itu, lawan bicara bisa merangkum pikirannya atau merenungkan kembali. Karena percakapan tidak berjalan mulus begitu saja (catatan 3), isi pembicaraan pun bisa dipikirkan dari berbagai sisi.

Ketika tidak bisa bercakap seperti yang diinginkan, rasanya itu bukan kegagalan, melainkan hati kita tanpa sadar sedang membantu memperdalam pembicaraan. (dihilangkan) Hal yang tampak seperti kegagalan mungkin punya maknanya sendiri.

Tidak jarang hal yang tampak seperti kekurangan ternyata adalah kelebihan jika dilihat dari sudut pandang lain. Jika kita bisa melihat diri sendiri dari berbagai sisi, perasaan menjadi lebih ringan dan kita bisa mengeluarkan kemampuan yang sebenarnya.

(Catatan 1) 仕事柄: karena sifat pekerjaan
(Catatan 2) ため: di sini, waktu jeda/kelonggaran
(Catatan 3) トントン拍子に: dengan lancar`,
    },
    "9-3": {
      yomi: `{以下|いか}は、{商品|しょうひん}パッケージのデザイナーが{書|か}いた{文章|ぶんしょう}である。

{大量|たいりょう}{生産品|せいさんひん}のように{全国|ぜんこく}に{流通|りゅうつう}し、{多|おお}くの{方々|かたがた}にご{利用|りよう}いただく{商品|しょうひん}の{場合|ばあい}には、{必|かなら}ずマーケティング{調査|ちょうさ}（{注|ちゅう}１）が{行|おこな}われます。とくにパッケージのリニューアル{時|じ}には、{従来|じゅうらい}よりも{売|う}り{上|あ}げを{落|お}としてしまっては{大変|たいへん}なので、より{慎重|しんちょう}に{行|おこな}われます。

ただそういう{場合|ばあい}、{必|かなら}ず「{今|いま}までの{方|ほう}が{良|よ}かった」という{意見|いけん}が{過半|かはん}を{占|し}めます。ですがメーカーにとっては、{定番|ていばん}となっている{商品|しょうひん}をどうしてもリニューアル（{注|ちゅう}２）しなければならないタイミングが{必|かなら}ずやってきます。それは、{競合|きょうごう}{他社|たしゃ}が{売|う}り{上|あ}げを{伸|の}ばしたり、{技術|ぎじゅつ}{開発|かいはつ}に{伴|ともな}い{商品|しょうひん}そのものが{改善|かいぜん}されたり、いろいろな{理由|りゆう}でそれは{必|かなら}ずやってくる。ところがマーケティング{調査|ちょうさ}してみると「{変|か}えない{方|ほう}がいい」という{結果|けっか}が{出|で}てしまう。{今|いま}までのファンはその{商品|しょうひん}に{愛着|あいちゃく}をもっているわけですから、リニューアルに{大賛成|だいさんせい}してくれるわけがないのです。ですが、どうしても{新|あたら}しくしなければならない。

{私|わたし}はこういった{時|とき}、これまでの{財産|ざいさん}をうまく{生|い}かして、{今|いま}までのファンがある{程度|ていど}{許容|きょよう}してくれれば、それは{大成功|だいせいこう}だと{考|かんが}えています。{最初|さいしょ}は{少|すこ}し{許|ゆる}せない{部分|ぶぶん}があったとしても、これが{一年|いちねん}、{二年|にねん}{経|た}つと、{新|あたら}しいデザインも{見慣|みな}れてくる。したがってマーケティング{調査|ちょうさ}の{数字|すうじ}は、そういう{時間軸|じかんじく}も{考|かんが}えたうえで{見|み}る{必要|ひつよう}があります。

（{注|ちゅう}１）マーケティング{調査|ちょうさ}：{市場|しじょう}{調査|ちょうさ}
（{注|ちゅう}２）リニューアル：ここでは、{更新|こうしん}`,
      arti: `Berikut adalah tulisan seorang desainer kemasan produk.

Untuk produk yang beredar ke seluruh negeri dan digunakan banyak orang, seperti barang produksi massal, survei pemasaran (catatan 1) pasti dilakukan. Terutama saat pembaruan kemasan, survei dilakukan dengan lebih hati-hati karena akan gawat jika penjualan justru turun dibanding sebelumnya.

Hanya saja, dalam kasus seperti itu, pendapat "yang lama lebih bagus" pasti menjadi mayoritas. Namun bagi produsen, pasti akan datang saatnya produk andalan mau tidak mau harus diperbarui (catatan 2). Momen itu pasti datang karena berbagai alasan, misalnya pesaing meningkatkan penjualannya, atau produk itu sendiri diperbaiki seiring perkembangan teknologi. Akan tetapi, saat dilakukan survei pemasaran, hasilnya adalah "lebih baik tidak diubah". Penggemar lama punya keterikatan dengan produk tersebut, jadi mustahil mereka sangat setuju dengan pembaruan. Namun, produk itu tetap harus diperbarui.

Pada saat seperti ini, saya menganggap bahwa jika aset yang ada selama ini dimanfaatkan dengan baik dan penggemar lama bisa menerimanya sampai batas tertentu, itu sudah keberhasilan besar. Meski awalnya ada bagian yang sulit diterima, setelah satu atau dua tahun, orang pun akan terbiasa melihat desain baru itu. Karena itu, angka hasil survei pemasaran perlu dilihat dengan mempertimbangkan rentang waktu seperti itu juga.

(Catatan 1) マーケティング調査: survei pasar
(Catatan 2) リニューアル: di sini, pembaruan`,
    },
    "9-4": {
      yomi: `{群馬県|ぐんまけん}の{上野村|うえのむら}で{暮|く}らすようになって{覚|おぼ}えたもののひとつに「{待|ま}つ」という{感覚|かんかく}がある。

たとえばこの{村|むら}の{農業|のうぎょう}は{春|はる}を{待|ま}たなければはじまらない。{山菜|さんさい}も、{茸|きのこ}も、それが{出|で}てくる{時期|じき}を{待|ま}たなければけっして{手|て}には{入|はい}らない。{木材|もくざい}として{利用|りよう}するのなら、{木|き}を{切|き}るのは、{森|もり}の{木々|きぎ}が{活動|かつどう}を{低下|ていか}させる{秋|あき}から{冬|ふゆ}がくるのを{待|ま}つ{必要|ひつよう}がある。{実|じつ}に{多|おお}くのことが、{村|むら}では「{待|ま}つ」ことからはじまっていく。

それが、{自然|しぜん}とともに{働|はたら}き、{暮|く}らすということなのであろう。{自然|しぜん}の{力|ちから}を{借|か}りようとすれば、{自然|しぜん}がつくる、それに{適|てき}したときがくるのを{待|ま}たなければならない。といってもそれは、のんびりした{暮|く}らし{方|かた}とばかりもいえないのである。なぜなら、ときを{待|ま}つ{以上|いじょう}、{逆|ぎゃく}にそのときを{逃|のが}してしまったらうまくいかなくなる。{田植|たう}えのとき、{草取|くさと}りのとき、{稲刈|いねか}りのとき…。{村|むら}の{暮|く}らしには、{逃|に}がしてはいけないときがたえずやってくる。

ときを{待|ま}つ{暮|く}らしにとっては、{人間|にんげん}の{意志|いし}は{万能|ばんのう}ではない。それよりも{自然|しぜん}という{他者|たしゃ}の{動|うご}きの{方|ほう}が{重要|じゅうよう}で、{人間|にんげん}の{意志|いし}は、{自然|しぜん}の{動|うご}きをうまく{活用|かつよう}する{範囲内|はんいない}でしか{有効|ゆうこう}ではない。だから、{自然|しぜん}と{結|むす}ばれ、ときを{待|ま}ちながら{働|はたら}き{暮|く}らしてきた{村|むら}の{人|ひと}たちは、{人間|にんげん}{関係|かんけい}のなかでも{同|おな}じような{感覚|かんかく}を{育|はぐく}んだ。{人間|にんげん}{関係|かんけい}においても{自分|じぶん}の{一方的|いっぽうてき}な{意志|いし}は{万能|ばんのう}ではない。{人々|ひとびと}の{動|うご}きを{理解|りかい}しながら、ちょうどよいタイミングがくるのを{待|ま}って、そのときを{逃|のが}さずに{働|はたら}きかけていく。それが{村|むら}の{人|ひと}たちの{人間|にんげん}{関係|かんけい}のつくり{方|かた}だった。{自然|しぜん}との{関係|かんけい}のなかで{学|まな}んだことが{人間|にんげん}{同士|どうし}の{関係|かんけい}のなかでもいかされていたのである。

（{内山|うちやま} {節|たかし}『{戦争|せんそう}という{仕事|しごと}』による）`,
      arti: `Salah satu hal yang saya pelajari sejak tinggal di Desa Ueno, Prefektur Gunma, adalah rasa "menunggu".

Misalnya, pertanian di desa ini tidak akan dimulai sebelum menunggu musim semi. Sayuran liar pegunungan maupun jamur tidak akan pernah didapat tanpa menunggu musim kemunculannya. Jika kayu hendak dimanfaatkan sebagai bahan bangunan, menebang pohon harus menunggu datangnya musim gugur hingga musim dingin, saat pepohonan di hutan menurunkan aktivitasnya. Sungguh banyak hal di desa yang dimulai dari "menunggu".

Mungkin itulah yang disebut bekerja dan hidup bersama alam. Jika ingin meminjam kekuatan alam, kita harus menunggu datangnya waktu yang tepat yang diciptakan oleh alam. Meski begitu, hal itu tidak bisa dikatakan sekadar cara hidup yang santai. Sebab, karena kita menunggu waktu, sebaliknya jika waktu itu terlewat, semuanya tidak akan berjalan baik. Waktu menanam padi, waktu menyiangi rumput, waktu memanen padi... Dalam kehidupan desa, waktu-waktu yang tidak boleh terlewatkan terus-menerus datang.

Bagi kehidupan yang menunggu waktu, kehendak manusia tidaklah mahakuasa. Yang lebih penting adalah gerak "pihak lain" bernama alam, dan kehendak manusia hanya efektif dalam batas memanfaatkan gerak alam dengan baik. Karena itu, orang-orang desa yang terhubung dengan alam dan hidup bekerja sambil menunggu waktu, menumbuhkan rasa yang serupa dalam hubungan antarmanusia. Dalam hubungan antarmanusia pun, kehendak sepihak diri sendiri tidaklah mahakuasa. Sambil memahami gerak orang-orang, mereka menunggu datangnya waktu yang tepat, lalu bertindak tanpa melewatkan saat itu. Itulah cara orang desa membangun hubungan antarmanusia. Apa yang dipelajari dari hubungan dengan alam juga dimanfaatkan dalam hubungan sesama manusia.

(Dari Uchiyama Takashi, "Pekerjaan yang Bernama Perang")`,
    },

    // ── 問題10：未熟さの効用 ──
    "10": {
      yomi: `{教育|きょういく}を{仕事|しごと}にしていると、{面白|おもしろ}いことがたくさんある。その{中|なか}の{一|ひと}つに、「{未熟|みじゅく}さの{効用|こうよう}」とでも{言|い}うべき{現象|げんしょう}がある。{知識|ちしき}や{教育|きょういく}{技術|ぎじゅつ}がたとえ{未熟|みじゅく}であったとしても、{不思議|ふしぎ}と{初|はじ}めて{受|う}け{持|も}った{授業|じゅぎょう}が{生徒|せいと}との{間|あいだ}に{一番|いちばん}{濃|こ}い{縁|えん}を{結|むす}ぶことがよくある。

{通常|つうじょう}の{仕事|しごと}は、{経験|けいけん}を{積|つ}み、{技術|ぎじゅつ}が{上|あ}がるほど、{質|しつ}が{良|よ}くなる。{教育|きょういく}の{世界|せかい}でも、もちろん{経験知|けいけんち}は{有効|ゆうこう}に{働|はたら}く。ベテランの{安定感|あんていかん}は、たしかに{大切|たいせつ}だ。しかし、{教育|きょういく}の{場合|ばあい}は、{若|わか}く{未熟|みじゅく}であることがむしろプラスに{働|はたら}くケースがよくあるのも{事実|じじつ}だ。{初年度|しょねんど}に{受|う}け{持|も}った{学生|がくせい}たちのことが{鮮明|せんめい}に{記憶|きおく}に{残|のこ}り、その{後|ご}のつき{合|あ}いも{深|ふか}い、という{経験|けいけん}が{私|わたし}にもある。

これはどういうことだろうか。まず{考|かんが}えられるのは、{初年度|しょねんど}の{緊張感|きんちょうかん}が、{学生|がくせい}たちに{新鮮|しんせん}な{印象|いんしょう}を{与|あた}えたということだ。{慣|な}れてくると{手際|てぎわ}が{良|よ}くなる。すると、{学生|がくせい}たちは、{安心|あんしん}する{一方|いっぽう}で{油断|ゆだん}が{出|で}る。レストランで{手際|てぎわ}のいいコックに{料理|りょうり}を{出|だ}してもらうような{気分|きぶん}で、{授業|じゅぎょう}を{受|う}け{始|はじ}めてしまうのだ。{授業|じゅぎょう}を{上手|じょうず}にサービスする{側|がわ}と、サービスを{受|う}ける{側|がわ}に、{立場|たちば}がはっきり{分|わ}かれてしまう。{先生|せんせい}はいかにも{先生|せんせい}らしく、{生徒|せいと}はいかにも{生徒|せいと}らしい。

こうした{関係|かんけい}は、{安定|あんてい}はしているが、ときに{新鮮|しんせん}さに{欠|か}ける。これに{対|たい}して、{初年度|しょねんど}の{教師|きょうし}が{持|も}つ{緊張感|きんちょうかん}は、{生徒|せいと}にも{伝染|でんせん}する。その{緊張感|きんちょうかん}の{共有|きょうゆう}が、{一|ひと}つの{同|おな}じ{場|ば}を{作|つく}り{上|あ}げているのだという{意識|いしき}を{生|う}みだす。{参加|さんか}し{作|つく}り{上|あ}げる{感覚|かんかく}が、{生徒|せいと}の{方|ほう}にも{生|う}まれる。それが{思|おも}い{出|で}の{濃|こ}さにもつながる。

ここで{初年度|しょねんど}というのは、{教師|きょうし}になって{初|はじ}めての{年度|ねんど}というだけではない。{学校|がっこう}を{替|か}わって、{教師|きょうし}が{新|あら}たな{気持|きも}ちで{臨|のぞ}むときも{新鮮|しんせん}さが{出|で}る。あるいは{新|あたら}しい{教科|きょうか}を{担当|たんとう}する、{一生懸命|いっしょうけんめい}{勉強|べんきょう}して{多少|たしょう}の{不安|ふあん}を{持|も}ちながら{勢|いきお}いをつけて{切|き}り{抜|ぬ}けていくときにも、{印象|いんしょう}{深|ぶか}い{授業|じゅぎょう}ができやすい。

ただ{単|たん}に{未熟|みじゅく}であることがいいわけではもちろんない。{自分|じぶん}が{未熟|みじゅく}であることを{自覚|じかく}し、その{分|ぶん}{精一杯|せいいっぱい}{準備|じゅんび}し、{情熱|じょうねつ}を{持|も}って{語|かた}りかけるときに、{未熟|みじゅく}さがプラスに{転|てん}じるのだ。

{教育|きょういく}において「{新鮮|しんせん}さ」は{決定的|けっていてき}な{重要性|じゅうようせい}を{持|も}っている。いわゆる「{教師|きょうし}{臭|くさ}さ」は、{学|まな}ぶ{側|がわ}の{構|かま}えを{鈍|にぶ}くさせてしまう。{型|かた}どおりの{教|おし}え{方|かた}が{染|し}みついてしまっている、という{印象|いんしょう}を{与|あた}えてしまうだけで{大|おお}きなマイナスになるのだ。「{決|き}まり{切|き}った{感|かん}じ」を{印象|いんしょう}として{与|あた}えないようにすることが{大切|たいせつ}である。{経験知|けいけんち}を{重|かさ}ねる{良|よ}さを{残|のこ}したまま、{新鮮|しんせん}さを{失|うしな}わない。これは、もはや{一|ひと}つの{技|わざ}である。「{先生|せんせい}も{自分|じぶん}たちと{一緒|いっしょ}に{変化|へんか}してくれるのだ」という{意識|いしき}が{学|まな}ぶ{側|がわ}に{生|う}まれると、{場|ば}を{一緒|いっしょ}に{盛|も}り{上|あ}げる{機運|きうん}が{高|たか}まる。`,
      arti: `Jika bekerja di bidang pendidikan, ada banyak hal menarik. Salah satunya adalah fenomena yang bisa disebut "manfaat ketidakmatangan". Meskipun pengetahuan dan keterampilan mengajar masih belum matang, anehnya kelas pertama yang diampu sering kali justru menjalin ikatan paling erat dengan para siswa.

Pada pekerjaan biasa, semakin banyak pengalaman dan semakin tinggi keterampilan, semakin baik pula kualitasnya. Di dunia pendidikan pun, tentu saja pengetahuan dari pengalaman berfungsi efektif. Kestabilan seorang veteran memang penting. Namun, faktanya dalam pendidikan sering ada kasus ketika menjadi muda dan belum matang justru berdampak positif. Saya pun punya pengalaman bahwa mahasiswa yang saya ajar di tahun pertama masih teringat jelas, dan hubungan kami setelahnya pun erat.

Mengapa begitu? Yang pertama terpikir adalah bahwa ketegangan di tahun pertama memberi kesan segar kepada para mahasiswa. Begitu terbiasa, cara kerja menjadi cekatan. Akibatnya, para mahasiswa merasa tenang, tetapi di sisi lain menjadi lengah. Mereka mulai mengikuti kuliah dengan perasaan seperti disuguhi masakan oleh koki yang cekatan di restoran. Posisi pun terbagi jelas antara pihak yang "melayani" kuliah dengan mahir dan pihak yang menerima layanan. Guru benar-benar bersikap seperti guru, dan siswa benar-benar seperti siswa.

Hubungan semacam ini memang stabil, tetapi kadang kurang segar. Sebaliknya, ketegangan yang dimiliki guru di tahun pertama menular juga kepada siswa. Berbagi ketegangan itu melahirkan kesadaran bahwa mereka bersama-sama sedang membangun satu ruang yang sama. Perasaan ikut berpartisipasi dan membangun pun muncul di pihak siswa. Hal itu juga berkaitan dengan dalamnya kenangan.

"Tahun pertama" di sini bukan hanya tahun pertama menjadi guru. Ketika pindah sekolah dan guru menghadapi kelas dengan semangat baru, kesegaran juga muncul. Atau ketika mengampu mata pelajaran baru — belajar sungguh-sungguh, lalu melaluinya dengan penuh semangat sambil menyimpan sedikit rasa cemas — kelas yang berkesan juga mudah tercipta.

Tentu saja, sekadar belum matang bukan berarti baik. Ketika kita sadar bahwa diri kita belum matang, lalu sebagai gantinya bersiap semaksimal mungkin dan berbicara dengan penuh semangat, barulah ketidakmatangan berubah menjadi nilai positif.

Dalam pendidikan, "kesegaran" memiliki arti yang sangat menentukan. Apa yang disebut "bau guru" (kesan kaku khas guru) membuat kesiapan belajar pihak pelajar menjadi tumpul. Hanya dengan memberi kesan bahwa cara mengajar yang serba mengikuti pola sudah melekat, itu sudah menjadi minus yang besar. Penting untuk tidak memberi kesan "serba monoton". Mempertahankan kelebihan dari menumpuk pengalaman sambil tidak kehilangan kesegaran — ini sudah merupakan sebuah keahlian tersendiri. Ketika pihak pelajar merasa "guru pun ikut berubah bersama kami", semangat untuk bersama-sama menghidupkan suasana kelas pun meningkat.`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter) ──
    "11": {
      yomi: `【{意見|いけん} A】
「{指示|しじ}されないと{自分|じぶん}から{動|うご}かない」「{指示|しじ}されたことしかやらない」、いわゆる{指示|しじ}{待|ま}ちになっているといわれる{部下|ぶか}や{後輩|こうはい}がいる。{指示|しじ}{待|ま}ちになるのは、{仕事|しごと}に{関|かん}する{知識|ちしき}や{経験|けいけん}が{不足|ふそく}していたり{仕事|しごと}に{対|たい}してやる{気|き}がなかったりすることなどが{原因|げんいん}だといわれている。しかし{実|じつ}は、そもそも{上司|じょうし}からの{指示|しじ}に{従|したが}うことが{自分|じぶん}の{役目|やくめ}だと{考|かんが}え、それ{以上|いじょう}のことをする{必要性|ひつようせい}を{感|かん}じていないという{場合|ばあい}が{多|おお}いのだ。

そのような{部下|ぶか}には、{何|なん}のためにこの{仕事|しごと}を{行|おこな}い、{業務|ぎょうむ}{全体|ぜんたい}の{中|なか}でほかの{仕事|しごと}とどうかかわっているのかを{教|おし}えることが{重要|じゅうよう}だ。{仕事|しごと}の{全体像|ぜんたいぞう}がイメージできれば、{部下|ぶか}は{次|つぎ}にやるべきことや{工夫|くふう}できそうな{点|てん}が{分|わ}かってくる。その{結果|けっか}、{自分|じぶん}に{求|もと}められていることに{気|き}づき、{自主的|じしゅてき}に{行動|こうどう}できるようになっていくだろう。

【{意見|いけん} B】
{部下|ぶか}や{後輩|こうはい}が{指示|しじ}{待|ま}ちであるのを{簡単|かんたん}に{部下|ぶか}{自身|じしん}の{責任|せきにん}と{決|き}めつけるのは、{問題|もんだい}があります。{指示|しじ}{待|ま}ちになっている{理由|りゆう}が{何|なに}かあるのかもしれません。

まず{部下|ぶか}{自身|じしん}が{自主的|じしゅてき}に{動|うご}くことの{重要性|じゅうようせい}を{認識|にんしき}していないケースがあります。「{言|い}われた{通|とお}りにするのが{部下|ぶか}の{仕事|しごと}だ」と{思|おも}いこんでいて、むしろ「どうしましょう」と{相談|そうだん}することこそが{部下|ぶか}の{務|つと}めだと{信|しん}じているケースです。この{場合|ばあい}は、どんな{仕事|しごと}もすべてマニュアルで{示|しめ}すことはできず、{個人|こじん}の{判断|はんだん}や{工夫|くふう}がいることを{伝|つた}えることからはじめる{必要|ひつよう}があります。

（{中略|ちゅうりゃく}）

「これはどうしましょうか」と{相談|そうだん}された{時|とき}は、{部下|ぶか}{自身|じしん}にその{対応策|たいおうさく}を{考|かんが}えられるかどうか{見極|みきわ}めて、「{一度|いちど}、{自分|じぶん}なりの{案|あん}を{考|かんが}えてみて」と{要求|ようきゅう}してみるのです。{上司|じょうし}がいつもそのように{振|ふ}る{舞|ま}えば、{部下|ぶか}は{上司|じょうし}の{思|おも}いにそって、「{提案型|ていあんがた}の{相談|そうだん}」をするようになってきます。`,
      arti: `【Pendapat A】
Ada bawahan atau junior yang disebut "menunggu perintah": "tidak bergerak sendiri kalau tidak diperintah", "hanya mengerjakan yang diperintahkan". Konon penyebabnya adalah kurangnya pengetahuan dan pengalaman terkait pekerjaan, atau tidak adanya motivasi terhadap pekerjaan. Namun sebenarnya, banyak kasus di mana mereka pada dasarnya menganggap tugas mereka adalah mengikuti perintah atasan, dan tidak merasa perlu melakukan lebih dari itu.

Kepada bawahan seperti itu, penting untuk mengajarkan untuk apa pekerjaan ini dilakukan dan bagaimana kaitannya dengan pekerjaan lain dalam keseluruhan tugas. Jika bisa membayangkan gambaran utuh pekerjaan, bawahan akan mulai memahami apa yang harus dilakukan selanjutnya dan bagian mana yang bisa ia kreasikan. Akibatnya, ia akan menyadari apa yang diharapkan darinya dan perlahan mampu bertindak atas inisiatif sendiri.

【Pendapat B】
Langsung memvonis bahwa bawahan atau junior yang menunggu perintah adalah tanggung jawab bawahan itu sendiri adalah hal yang bermasalah. Mungkin ada alasan tertentu mengapa mereka menunggu perintah.

Pertama, ada kasus ketika bawahan sendiri tidak menyadari pentingnya bergerak atas inisiatif sendiri. Mereka yakin bahwa "melakukan sesuai yang diperintahkan adalah tugas bawahan", dan justru percaya bahwa berkonsultasi dengan bertanya "bagaimana sebaiknya?" itulah kewajiban bawahan. Dalam kasus ini, perlu dimulai dengan menyampaikan bahwa tidak semua pekerjaan bisa dijelaskan lewat manual, dan dibutuhkan penilaian serta kreativitas pribadi.

(dihilangkan)

Ketika diajak berkonsultasi "Ini bagaimana sebaiknya?", nilailah apakah bawahan itu sendiri mampu memikirkan langkah penanganannya, lalu cobalah meminta, "Coba pikirkan dulu usulanmu sendiri." Jika atasan selalu bersikap demikian, bawahan akan mengikuti harapan atasan dan mulai melakukan "konsultasi berbasis usulan".`,
    },

    // ── 問題12：脳科学と価値観 ──
    "12": {
      yomi: `{最近|さいきん}、{日本|にほん}ではテレビや{書籍|しょせき}で{脳科学者|のうかがくしゃ}がブームになりました。{脳科学|のうかがく}が{一般|いっぱん}の{人々|ひとびと}の{関心|かんしん}を{強|つよ}く{惹|ひ}いた{最大|さいだい}の{理由|りゆう}は、{脳科学|のうかがく}によって{自分|じぶん}がよりよい{人生|じんせい}を{歩|あゆ}めそうだと{感|かん}じるからではないでしょうか。

{科学|かがく}は{事物|じぶつ}を{客観的|きゃっかんてき}に{扱|あつか}う{三人称的|さんにんしょうてき}な{学問|がくもん}です。そのため、{何|なに}か{冷|つめ}たく、{自分|じぶん}とは{関係|かんけい}のないようなよそよそしさ（{注|ちゅう}１）を{感|かん}じてしまいます。ところが、{脳科学|のうかがく}は{人間|にんげん}の{感情|かんじょう}や{思考|しこう}や{行動|こうどう}に{関|かか}わる{科学|かがく}です。そのため、{科学|かがく}としては{初|はじ}めてのことですが、まるで{文学|ぶんがく}や{芸術|げいじゅつ}のように{一人称|いちにんしょう}（{注|ちゅう}２）{世界|せかい}に{踏|ふ}み{込|こ}んできて、{幸|しあわ}せな{人生|じんせい}のノウハウを{提供|ていきょう}してくれているように{思|おも}えるのです。

しかし、せっかく{関心|かんしん}を{持|も}っている{人|ひと}に{水|みず}を{差|さ}す（{注|ちゅう}３）つもりはないのですが、{脳科学|のうかがく}が{今|いま}よりずっと{進歩|しんぽ}したとしても、{人間|にんげん}の{心|こころ}や{私|わたし}たちの{人生|じんせい}について、すみずみまで{解|と}き{明|あ}かせるようになるわけではないと{肝|きも}に{銘|めい}じて（{注|ちゅう}４）おいた{方|ほう}がよいと{思|おも}います。{脳|のう}は{複雑|ふくざつ}で、まだまだわからないことが{多|おお}く、{普遍的|ふへんてき}な{法則|ほうそく}に{到達|とうたつ}するまでの{道|みち}のりはきわめて{遠|とお}いのです。そして、たとえ{到達|とうたつ}できたとしても、{科学|かがく}の{普遍的|ふへんてき}{法則|ほうそく}は{人生|じんせい}の{個別性|こべつせい}や{一回|いっかい}（{注|ちゅう}５）{性|せい}に{対|たい}しては{全|まった}く{無力|むりょく}です。ゆえに、{人生|じんせい}の{個別|こべつ}の{事柄|ことがら}に{適用|てきよう}して{何|なに}かを{予言|よげん}したりすることは、おそらく{不可能|ふかのう}でしょう。

もう{一|ひと}つ{大切|たいせつ}なのは、{科学|かがく}は{事実|じじつ}を{扱|あつか}うことはできますが、{価値観|かちかん}の{問題|もんだい}を{扱|あつか}うことはできないということです。ですから、{脳科学|のうかがく}によってある{事実|じじつ}が{判明|はんめい}したとしても、それを{価値観|かちかん}と{混同|こんどう}してはいけません。たとえば、ある{脳科学|のうかがく}の{本|ほん}に、「こうすれば{脳|のう}を{活性化|かっせいか}できるので、みなさんもやってみましょう」と{書|か}いてあったとします。ですが、{脳|のう}の{活性化|かっせいか}は{絶対的|ぜったいてき}な{価値|かち}でしょうか。{極端|きょくたん}な{例|れい}で{考|かんが}えてみましょう。{副作用|ふくさよう}の{全|まった}くない{薬物|やくぶつ}だったとしても、{薬物|やくぶつ}で{健康|けんこう}な{人間|にんげん}（たとえば{受験生|じゅけんせい}）の{脳|のう}を{活性化|かっせいか}することは{許|ゆる}されるでしょうか。これが{許|ゆる}されるかどうかは、{論理|ろんり}や{価値観|かちかん}に{属|ぞく}する{話|はなし}です。{価値観|かちかん}は{個人|こじん}と{社会|しゃかい}が{決|き}めるものです。そして、{個人|こじん}の{価値|かち}と{社会|しゃかい}の{価値|かち}も{同|おな}じとは{限|かぎ}りません。{脳科学|のうかがく}の{知見|ちけん}（{注|ちゅう}６）は{事実|じじつ}を{記述|きじゅつ}したものであって、{価値|かち}とは{何|なん}の{関係|かんけい}もないのです。

（{中略|ちゅうりゃく}）

{人類|じんるい}がどのような{未来|みらい}を{選|えら}ぶかという{問題|もんだい}も、{結局|けっきょく}のところ{価値観|かちかん}の{問題|もんだい}です。{科学|かがく}は、{選|えら}んだ{未来|みらい}を{実現|じつげん}するための{道具|どうぐ}にはなり{得|え}ますが、{未来|みらい}を{選|えら}ぶ{価値観|かちかん}の{問題|もんだい}を{扱|あつか}うことはできません。

（{注|ちゅう}１）よそよそしさ：{無関係|むかんけい}である
（{注|ちゅう}２）{一人称|いちにんしょう}：{書|か}き{手|て}が{自分|じぶん}{自身|じしん}をさす
（{注|ちゅう}３）{水|みず}を{差|さ}す：わきから{邪魔|じゃま}をする
（{注|ちゅう}４）{肝|きも}に{銘|めい}じる：{心|こころ}に{強|つよ}くきざみつけて{忘|わす}れない
（{注|ちゅう}５）{一回性|いっかいせい}：{一回|いっかい}{起|お}こるだけ
（{注|ちゅう}６）{知見|ちけん}：{見解|けんかい}、{見識|けんしき}`,
      arti: `Belakangan ini di Jepang, ilmuwan neurosains (ilmu otak) menjadi tren di televisi dan buku. Alasan terbesar neurosains begitu menarik perhatian masyarakat umum barangkali karena orang merasa bisa menjalani hidup yang lebih baik berkat neurosains.

Sains adalah ilmu "orang ketiga" yang memperlakukan sesuatu secara objektif. Karena itu, kita merasakan semacam kesan dingin dan berjarak (catatan 1), seolah tidak ada hubungannya dengan diri kita. Akan tetapi, neurosains adalah sains yang berkaitan dengan emosi, pikiran, dan perilaku manusia. Oleh karena itu — dan ini pertama kalinya bagi sebuah sains — ia seolah melangkah masuk ke dunia "orang pertama" (catatan 2) layaknya sastra dan seni, dan tampak seperti memberikan kiat menjalani hidup bahagia.

Namun, meski saya tidak bermaksud mengganggu (catatan 3) orang yang sudah tertarik, saya rasa sebaiknya kita tanamkan dalam hati (catatan 4) bahwa sekalipun neurosains jauh lebih maju dari sekarang, bukan berarti ia akan mampu mengungkap hati manusia dan hidup kita sampai ke sudut-sudutnya. Otak itu rumit, masih banyak hal yang belum diketahui, dan jalan untuk mencapai hukum universal masih sangat jauh. Dan sekalipun bisa mencapainya, hukum universal sains sama sekali tidak berdaya terhadap keunikan individual dan sifat "hanya sekali terjadi" (catatan 5) dari kehidupan. Karena itu, menerapkannya pada hal-hal individual dalam hidup untuk meramalkan sesuatu barangkali mustahil.

Satu hal penting lainnya: sains bisa menangani fakta, tetapi tidak bisa menangani persoalan nilai. Karena itu, meski suatu fakta terungkap lewat neurosains, kita tidak boleh mencampuradukkannya dengan nilai. Misalnya, sebuah buku neurosains menulis, "Dengan cara ini otak bisa diaktifkan, jadi mari Anda semua mencobanya." Namun, apakah aktivasi otak merupakan nilai mutlak? Mari pikirkan dengan contoh ekstrem. Sekalipun obat itu sama sekali tanpa efek samping, apakah boleh mengaktifkan otak manusia sehat (misalnya peserta ujian masuk) dengan obat? Boleh atau tidaknya hal ini adalah persoalan yang termasuk ranah logika dan nilai. Nilai ditentukan oleh individu dan masyarakat. Dan nilai individu belum tentu sama dengan nilai masyarakat. Temuan (catatan 6) neurosains adalah deskripsi fakta, dan sama sekali tidak ada hubungannya dengan nilai.

(dihilangkan)

Persoalan masa depan seperti apa yang akan dipilih umat manusia pun pada akhirnya adalah persoalan nilai. Sains bisa menjadi alat untuk mewujudkan masa depan yang dipilih, tetapi tidak bisa menangani persoalan nilai dalam memilih masa depan.

(Catatan 1) よそよそしさ: kesan tidak ada hubungannya
(Catatan 2) 一人称: penulis merujuk pada dirinya sendiri
(Catatan 3) 水を差す: mengganggu dari samping
(Catatan 4) 肝に銘じる: mengukir kuat di hati dan tidak melupakannya
(Catatan 5) 一回性: hanya terjadi sekali
(Catatan 6) 知見: pandangan, wawasan`,
    },

    // ── 問題13：情報検索 ──
    "13": {
      yomi: `{緑川|みどりかわ}{大学|だいがく}では、{国内|こくない}{各地|かくち}でボランティア{活動|かつどう}に{参加|さんか}する{学生|がくせい}に{対|たい}して、{費用|ひよう}の{一部|いちぶ}を{助成|じょせい}する{制度|せいど}を{設|もう}けています。

1. {助成|じょせい}{対象者|たいしょうしゃ}：{緑川|みどりかわ}{大学|だいがく}の{学部生|がくぶせい}と{大学院生|だいがくいんせい}
2. {助成|じょせい}{対象|たいしょう}となる{活動|かつどう}：{公的|こうてき}{団体|だんたい}が{主催|しゅさい}するボランティア{活動|かつどう}
3. {助成|じょせい}{対象|たいしょう}となる{費用|ひよう}・{金額|きんがく}・{回数|かいすう}
   ・{費用|ひよう}：ボランティア{活動|かつどう}のために{支出|ししゅつ}される{交通費|こうつうひ}と{宿泊費|しゅくはくひ}
   ・{交通費|こうつうひ}：{１回|いっかい}につき10,000{円|えん}を{上限|じょうげん}として{支払|しはら}います。
   ・{宿泊費|しゅくはくひ}：{１回|いっかい}につき{１泊|いっぱく}あたり6,000{円|えん}を{上限|じょうげん}として{実費|じっぴ}を{支払|しはら}います。{２泊|にはく}までを{支給|しきゅう}{対象|たいしょう}とします。
   ・{回数|かいすう}：{年度|ねんど}{中|ちゅう}{２回|にかい}まで
4. {申請|しんせい}{方法|ほうほう}（A〜Cの{書類|しょるい}はホームページからダウンロード{可|か}）
   {活動|かつどう}{終了|しゅうりょう}{後|ご}{２か月|にかげつ}{以内|いない}に{以下|いか}の{書類|しょるい}をボランティアセンターに{提出|ていしゅつ}してください。
   ただし、{年度|ねんど}{内|ない}{最終|さいしゅう}{提出|ていしゅつ}{期限|きげん}は{３月|さんがつ}{24日|にじゅうよっか}（{厳守|げんしゅ}）とします。
   A：ボランティア{活動|かつどう}{助成金|じょせいきん}{申請書|しんせいしょ}
   B：ボランティア{活動|かつどう}{助成金|じょせいきん}{振込|ふりこみ}{口座|こうざ}{届|とどけ}
   C：ボランティア{活動|かつどう}{証明書|しょうめいしょ}（{受|う}け{入|い}れ{先|さき}の{様式|ようしき}も{可|か}）
   D：{領収書|りょうしゅうしょ}（※{宿泊費|しゅくはくひ}の{領収書|りょうしゅうしょ}は{必|かなら}ず{提出|ていしゅつ}。{交通費|こうつうひ}の{領収書|りょうしゅうしょ}は{入手|にゅうしゅ}{可能|かのう}な{場合|ばあい}は{提出|ていしゅつ}。{入手|にゅうしゅ}できない{場合|ばあい}は{実際|じっさい}の{金額|きんがく}をAに{記入|きにゅう}）
5. {助成金|じょせいきん}{振込|ふりこみ}：{審査|しんさ}を{行|おこな}い、{申請|しんせい}が{認|みと}められた{場合|ばあい}は、{書類|しょるい}{提出|ていしゅつ}があった{翌月|よくげつ}の{月末|げつまつ}に{振|ふ}り{込|こ}みます（{書類|しょるい}に{不備|ふび}があった{場合|ばあい}、{振|ふ}り{込|こ}みが{遅|おく}れる{場合|ばあい}があります）。
6. その{他|た}：「A：ボランティア{活動|かつどう}{助成金|じょせいきん}{申請書|しんせいしょ}」の「{活動|かつどう}に{参加|さんか}した{感想|かんそう}」をボランティアセンターのホームページで{紹介|しょうかい}することがあります。
7. {問|と}い{合|あ}わせ{先|さき}：{緑川|みどりかわ}{大学|だいがく}ボランティアセンター（{３号館|さんごうかん}{１階|いっかい}）{月|げつ}〜{金曜日|きんようび} 9:00〜17:00`,
      arti: `Universitas Midorikawa memiliki program yang menyubsidi sebagian biaya bagi mahasiswa yang mengikuti kegiatan sukarela di berbagai daerah di dalam negeri.

1. Penerima subsidi: mahasiswa S1 dan pascasarjana Universitas Midorikawa
2. Kegiatan yang disubsidi: kegiatan sukarela yang diselenggarakan oleh lembaga publik
3. Biaya, jumlah, dan frekuensi yang disubsidi
   ・Biaya: biaya transportasi dan penginapan yang dikeluarkan untuk kegiatan sukarela
   ・Transportasi: dibayarkan dengan batas maksimal 10.000 yen per kegiatan.
   ・Penginapan: dibayarkan sesuai biaya riil dengan batas maksimal 6.000 yen per malam per kegiatan. Yang ditanggung maksimal 2 malam.
   ・Frekuensi: maksimal 2 kali dalam satu tahun ajaran
4. Cara pengajuan (dokumen A–C dapat diunduh dari situs web)
   Serahkan dokumen berikut ke Pusat Sukarelawan dalam waktu 2 bulan setelah kegiatan selesai.
   Namun, batas akhir penyerahan dalam tahun ajaran adalah 24 Maret (wajib ditaati).
   A: Formulir pengajuan subsidi kegiatan sukarela
   B: Formulir rekening tujuan transfer subsidi
   C: Surat keterangan kegiatan sukarela (format dari pihak penerima/penyelenggara juga boleh)
   D: Kuitansi (※ kuitansi penginapan wajib diserahkan. Kuitansi transportasi diserahkan bila bisa diperoleh. Jika tidak bisa diperoleh, tulis jumlah sebenarnya di formulir A)
5. Transfer subsidi: setelah diperiksa, jika pengajuan disetujui, dana ditransfer pada akhir bulan berikutnya setelah dokumen diserahkan (jika dokumen tidak lengkap, transfer bisa terlambat).
6. Lain-lain: "Kesan mengikuti kegiatan" dalam "A: Formulir pengajuan subsidi kegiatan sukarela" mungkin akan ditampilkan di situs web Pusat Sukarelawan.
7. Kontak: Pusat Sukarelawan Universitas Midorikawa (Gedung 3, lantai 1), Senin–Jumat 09.00–17.00`,
    },
  },
};
