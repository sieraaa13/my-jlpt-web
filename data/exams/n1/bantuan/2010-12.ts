import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2010
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1012: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{話|はなし}が【{本筋|ほんすじ}】からずれてしまった。",
      arti: "Pembicaraan menyimpang dari 【pokok persoalan】.",
    },
    2: {
      yomi: "{友人|ゆうじん}にピアノの【{伴奏|ばんそう}】を{頼|たの}まれた。",
      arti: "Saya diminta teman untuk memainkan 【iringan】 piano.",
    },
    3: {
      yomi: "{名|めい}{探偵|たんてい}の【{推理|すいり}】で{事件|じけん}は{無事|ぶじ}に{解決|かいけつ}した。",
      arti: "Berkat 【penalaran/deduksi】 sang detektif hebat, kasus itu terpecahkan dengan baik.",
    },
    4: {
      yomi: "{先日|せんじつ}の{会議|かいぎ}では、【{極|きわ}めて】{重要|じゅうよう}な{問題|もんだい}が{話|はな}し{合|あ}われた。",
      arti: "Dalam rapat beberapa hari lalu, dibahas masalah yang 【sangat】 penting.",
      optArti: ["sangat, amat (極めて)", "sekali lagi, secara khusus (改めて)", "sebisa mungkin (努めて)", "menelusuri sampai tuntas (突き詰めて)"],
    },
    5: {
      yomi: "もう{少|すこ}しアイディアを【{練|ね}って】からお{話|はな}しします。",
      arti: "Saya akan menyampaikannya setelah 【mematangkan】 idenya sedikit lagi.",
      optArti: ["mengikis, memangkas (削って)", "menghimpun, merekrut (募って)", "menggali (掘って)", "mematangkan, menggodok (練って)"],
    },
    6: {
      yomi: "{靴|くつ}のひもを【{締|し}めた】。",
      arti: "Saya 【mengencangkan】 tali sepatu.",
      optArti: ["melilitkan (絡めた)", "mengendurkan (緩めた)", "memasang, memasukkan (はめた)", "mengencangkan, mengikat (締めた)"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{各国|かっこく}のテレビがそのニュースを（　）。",
      arti: "Stasiun televisi di berbagai negara (…) berita itu.",
      optYomi: ["{投|とう}じた", "{配送|はいそう}した", "{報|ほう}じた", "{配布|はいふ}した"],
      optArti: ["melemparkan, menanamkan (modal)", "mengantarkan (barang)", "memberitakan", "membagikan (selebaran)"],
    },
    8: {
      yomi: "{森林|しんりん}{伐採|ばっさい}が{環境|かんきょう}に（　）{影響|えいきょう}は{大|おお}きい。",
      arti: "Pengaruh yang (…) penebangan hutan terhadap lingkungan sangat besar.",
      optYomi: ["{及|およ}ぼす", "{授|さず}ける", "{費|つい}やす", "{掲|かか}げる"],
      optArti: ["menimbulkan (pengaruh)", "menganugerahkan", "menghabiskan (waktu, uang)", "mengibarkan, mengusung"],
    },
    9: {
      yomi: "{吉田|よしだ}さんは{弁護士|べんごし}として20{年|ねん}もの（　）を{積|つ}んできた。",
      arti: "Yoshida-san telah mengumpulkan (…) selama 20 tahun sebagai pengacara.",
      optArti: ["veteran (orang berpengalaman)", "posisi", "status", "karier, pengalaman kerja"],
    },
    10: {
      yomi: "この{小説|しょうせつ}の{主人公|しゅじんこう}は、{歴史|れきし}（　）の{人物|じんぶつ}をモデルにしている。",
      arti: "Tokoh utama novel ini dibuat berdasarkan tokoh (…) sejarah.",
      optYomi: ["{上|じょう}", "{面|めん}", "{側|がわ}", "{内|ない}"],
      optArti: ["dalam (catatan) ... (歴史上: dalam sejarah)", "segi, sisi", "pihak", "di dalam"],
    },
    11: {
      yomi: "{交渉|こうしょう}が（　）{進|すす}み、{無事|ぶじ}に{契約|けいやく}することができた。",
      arti: "Negosiasi berjalan (…), dan kontrak pun berhasil ditandatangani.",
      optYomi: [null, null, "{円滑|えんかつ}に", "{急性|きゅうせい}に"],
      optArti: ["dengan anggun (perempuan)", "dengan lentur, luwes", "dengan lancar", "secara akut (penyakit)"],
    },
    12: {
      yomi: "{次|つぎ}の{大会|たいかい}に{向|む}けて、チームの（　）を{強|つよ}めよう。",
      arti: "Menjelang turnamen berikutnya, mari perkuat (…) tim.",
      optYomi: ["{収束|しゅうそく}", "{結束|けっそく}", "{親密|しんみつ}", "{緊密|きんみつ}"],
      optArti: ["pengendalian, mereda", "persatuan, kekompakan", "keakraban", "erat, rapat (hubungan kerja)"],
    },
    13: {
      yomi: "その{企業|きぎょう}は{巨大|きょだい}な{資本|しほん}を（　）に、{海外|かいがい}の{市場|しじょう}に{進出|しんしゅつ}した。",
      arti: "Perusahaan itu masuk ke pasar luar negeri dengan modal raksasa sebagai (…).",
      optYomi: ["{背景|はいけい}", "{根源|こんげん}", "{後援|こうえん}", "{発端|ほったん}"],
      optArti: ["latar belakang, sandaran", "akar, sumber", "dukungan, sponsor", "awal mula (kejadian)"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{今回|こんかい}の{研修会|けんしゅうかい}は、{出席者|しゅっせきしゃ}が【まばらだった】。",
      arti: "Pada pelatihan kali ini, pesertanya 【jarang-jarang (sedikit)】.",
      optYomi: ["{多|おお}かった", "{少|すく}なかった", null, null],
      optArti: ["banyak", "sedikit", "serius", "tidak serius"],
    },
    15: {
      yomi: "{昨日|きのう}は{一日中|いちにちじゅう}【どんよりした】{天気|てんき}だった。",
      arti: "Kemarin seharian cuacanya 【mendung kelabu】.",
      optYomi: ["{曇|くも}っていて{暗|くら}かった", "{晴|は}れていて{明|あか}るかった", "{風|かぜ}が{吹|ふ}いて{涼|すず}しかった", "{雨|あめ}が{降|ふ}って{蒸|む}し{暑|あつ}かった"],
      optArti: ["berawan dan gelap", "cerah dan terang", "berangin dan sejuk", "hujan dan gerah"],
    },
    16: {
      yomi: "{父|ちち}は{毎朝|まいあさ}、【{丹念|たんねん}に】{新聞|しんぶん}に{目|め}を{通|とお}す。",
      arti: "Setiap pagi ayah membaca koran dengan 【teliti】.",
      optArti: ["dengan melamun", "sekilas", "dengan saksama, pelan-pelan", "secara garis besar"],
    },
    17: {
      yomi: "{最近|さいきん}、{仕事|しごと}が【はかどって】いる。",
      arti: "Belakangan ini pekerjaan saya 【berjalan lancar】.",
      optYomi: ["{予想外|よそうがい}に{遅|おく}れている", "{順調|じゅんちょう}に{進|すす}んでいる", "{徐々|じょじょ}に{減|へ}っている", "{急激|きゅうげき}に{増|ふ}えている"],
      optArti: ["terlambat di luar dugaan", "berjalan lancar", "berkurang sedikit demi sedikit", "bertambah drastis"],
    },
    18: {
      yomi: "{検討|けんとう}の{結果|けっか}、この{計画|けいかく}は【{見合|みあ}わせる】ことになりました。",
      arti: "Setelah dipertimbangkan, rencana ini diputuskan untuk 【ditunda/dibatalkan】.",
      optYomi: ["{承認|しょうにん}する", "{実施|じっし}する", "{変更|へんこう}する", "{中止|ちゅうし}する"],
      optArti: ["menyetujui", "melaksanakan", "mengubah", "menghentikan, membatalkan"],
    },
    19: {
      yomi: "{激|はげ}しい{雨|あめ}のため、【やむをえず】{試合|しあい}は{延期|えんき}することになった。",
      arti: "Karena hujan lebat, 【mau tidak mau】 pertandingan ditunda.",
      optYomi: [null, null, "{思|おも}いがけなく", "{限|かぎ}りなく"],
      optArti: ["terpaksa, apa boleh buat", "sebentar lagi", "tanpa diduga", "tanpa batas"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "{調達|ちょうたつ}",
      arti: "調達 = mengadakan, menghimpun (dana, bahan, barang)",
      optYomi: [
        "{新|あたら}しい{事業|じぎょう}のために、{資金|しきん}を{調達|ちょうたつ}しなければならない。",
        "インターネットで{奨学金|しょうがくきん}の{申請|しんせい}{方法|ほうほう}を{調達|ちょうたつ}した。",
        "{希望|きぼう}の{職種|しょくしゅ}に{就|つ}くためには、{早|はや}めに{必要|ひつよう}な{資格|しかく}を{調達|ちょうたつ}したほうがいい。",
        "{環境|かんきょう}{問題|もんだい}に{対|たい}する{各国|かっこく}の{若者|わかもの}の{意識|いしき}を{調達|ちょうたつ}した。",
      ],
      optArti: [
        "Untuk usaha baru, dana harus 'dihimpun'.",
        "Saya 'menghimpun' cara mengajukan beasiswa di internet.",
        "Untuk mendapat jenis pekerjaan yang diinginkan, sebaiknya 'menghimpun' kualifikasi yang diperlukan lebih awal.",
        "Saya 'menghimpun' kesadaran anak muda berbagai negara terhadap masalah lingkungan.",
      ],
    },
    21: {
      yomi: "{細心|さいしん}",
      arti: "細心 = sangat cermat, penuh kehati-hatian",
      optYomi: [
        "{初|はじ}めて{一人|ひとり}で{海外|かいがい}{旅行|りょこう}をしたときは、{細心|さいしん}の{思|おも}いをした。",
        "この{二|ふた}つの{言葉|ことば}は{似|に}ているが、{細心|さいしん}のところでは{意味|いみ}が{異|こと}なる。",
        "{美術品|びじゅつひん}の{運搬|うんぱん}には、{細心|さいしん}の{注意|ちゅうい}を{払|はら}う{必要|ひつよう}がある。",
        "イベントの{概要|がいよう}は{伺|うかが}いましたが、{細心|さいしん}の{説明|せつめい}はまだです。",
      ],
      optArti: [
        "Saat pertama kali bepergian ke luar negeri sendirian, saya merasakan perasaan yang 'sangat cermat'.",
        "Dua kata ini mirip, tetapi pada bagian yang 'sangat cermat' maknanya berbeda.",
        "Dalam mengangkut karya seni, perlu kewaspadaan yang 'sangat cermat'.",
        "Garis besar acaranya sudah saya dengar, tetapi penjelasan yang 'sangat cermat' belum.",
      ],
    },
    22: {
      yomi: "{意地|いじ}",
      arti: "意地 = keras kepala, gengsi (意地を張る = bersikeras)",
      optYomi: [
        "{彼|かれ}は{何|なに}がやりたいのか、{意地|いじ}がはっきりしない。",
        "そう{意地|いじ}を{張|は}らずに、{素直|すなお}に{謝|あやま}ったほうがいいよ。",
        "{会議|かいぎ}で、この{調査|ちょうさ}の{意地|いじ}を{説明|せつめい}した。",
        "わが{社|しゃ}は{顧客|こきゃく}の{意地|いじ}に{沿|そ}った{商品|しょうひん}{開発|かいはつ}を{目指|めざ}している。",
      ],
      optArti: [
        "Apa yang ingin ia lakukan, 'gengsinya' tidak jelas.",
        "Jangan bersikeras karena 'gengsi' begitu; sebaiknya minta maaf dengan jujur.",
        "Dalam rapat, saya menjelaskan 'gengsi' survei ini.",
        "Perusahaan kami menargetkan pengembangan produk sesuai 'gengsi' pelanggan.",
      ],
    },
    23: {
      arti: "めきめき = (maju/membaik) dengan pesat, kentara",
      optYomi: [
        "あの{人|ひと}は{発言|はつげん}するたびに{意見|いけん}がめきめき{変|か}わる。",
        "{入院|にゅういん}して、{健康|けんこう}のありがたみをめきめき{感|かん}じた。",
        "{遠慮|えんりょ}しないで、めきめき{召|め}し{上|あ}がってくださいね。",
        "{水泳|すいえい}{教室|きょうしつ}に{通|かよ}ったおかげで、めきめき{上達|じょうたつ}した。",
      ],
      optArti: [
        "Setiap kali berbicara, pendapat orang itu berubah 'dengan pesat'.",
        "Setelah dirawat di rumah sakit, saya merasakan berharganya kesehatan 'dengan pesat'.",
        "Jangan sungkan, silakan makan 'dengan pesat'.",
        "Berkat ikut kelas renang, kemampuan saya meningkat 'dengan pesat'.",
      ],
    },
    24: {
      yomi: "{目先|めさき}",
      arti: "目先 = yang ada di depan mata, jangka pendek (目先の利益 = keuntungan sesaat)",
      optYomi: [
        "{田中|たなか}さんはつい{目先|めさき}に{帰|かえ}ってしまいましたよ。",
        "あのモデルのファッションは{流行|りゅうこう}の{目先|めさき}を{行|い}っている。",
        "{目先|めさき}の{利益|りえき}を{追|お}うのではなく、{会社|かいしゃ}の{将来|しょうらい}を{考|かんが}えるべきだ。",
        "{決勝戦|けっしょうせん}を{目先|めさき}に{控|ひか}え、{選手|せんしゅ}はだいぶ{緊張|きんちょう}しているようだ。",
      ],
      optArti: [
        "Tanaka-san baru saja pulang 'di depan mata'.",
        "Fesyen model itu berada di 'depan mata' tren.",
        "Seharusnya memikirkan masa depan perusahaan, bukan mengejar keuntungan 'di depan mata'.",
        "Dengan final yang sudah 'di depan mata', para atlet tampak cukup tegang.",
      ],
    },
    25: {
      yomi: "{見落|みお}とす",
      arti: "見落とす = terlewat melihat, luput dari perhatian",
      optYomi: [
        "{人|ひと}が{困|こま}っているのを{見落|みお}とすわけにはいかない。",
        "{飛行機|ひこうき}に{乗|の}っている{間|あいだ}、{窓|まど}からずっと{海|うみ}を{見落|みお}としていた。",
        "{部長|ぶちょう}は、{気|き}づいていたようだが、{今回|こんかい}の{失敗|しっぱい}を{見落|みお}としてくれた。",
        "メールが{多|おお}すぎて、{重要|じゅうよう}な{連絡|れんらく}を{見落|みお}としていた。",
      ],
      optArti: [
        "Saya tidak bisa 'melewatkan' orang yang sedang kesulitan.",
        "Selama di pesawat, saya terus 'melewatkan' laut dari jendela.",
        "Sepertinya manajer menyadarinya, tetapi ia 'melewatkan' kegagalan kali ini.",
        "Karena surelnya terlalu banyak, saya 'terlewat' membaca pesan penting.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{山川|やまかわ}{鉄道|てつどう}は、3{月|がつ}で{開業|かいぎょう}90{周年|しゅうねん}を{迎|むか}えるの（　）{最新型|さいしんがた}{車両|しゃりょう}を{導入|どうにゅう}し、15{日|にち}から{営業|えいぎょう}{運転|うんてん}を{開始|かいし}する。",
      arti: "Kereta Yamakawa, (…) peringatan 90 tahun beroperasi pada bulan Maret, akan memperkenalkan gerbong model terbaru dan mulai beroperasi melayani penumpang tanggal 15.",
      optYomi: ["を{限|かぎ}りに", "を{皮切|かわき}りに", null, "を{機|き}に"],
      optArti: ["dengan ... sebagai yang terakhir", "dengan ... sebagai awal (rangkaian)", "tanpa memedulikan", "dengan memanfaatkan momen"],
    },
    27: {
      yomi: "いかなる{理論|りろん}でも、データによって{実証|じっしょう}されなければ{多|おお}くの{人|ひと}に（　）しない。",
      arti: "Teori apa pun, jika tidak dibuktikan dengan data, tidak akan (…) oleh banyak orang.",
      optYomi: ["{受|う}け{入|い}れは", "{受|う}け{入|い}れられは", "{受|う}け{入|い}れられて", "{受|う}け{入|い}れられることは"],
      optArti: ["menerima (pun)", "diterima (pun)", "diterima, dan", "hal diterima"],
    },
    28: {
      yomi: "（テレビのコマーシャルで）「こちらは{添加物|てんかぶつ}を（　）{使用|しよう}していない、ヘルシーな{食用油|しょくようあぶら}です。」",
      arti: "(Dalam iklan TV) \"Ini minyak goreng sehat yang (…) menggunakan bahan tambahan.\"",
      optArti: ["sama sekali (tidak)", "sangat", "pasti", "masa sih, tidak mungkin"],
    },
    29: {
      yomi: "「{今回|こんかい}のプロジェクトを{任|まか}され、その{責任|せきにん}の{重|おも}さに{身|み}が{引|ひ}き{締|し}まる（　）です。」",
      arti: "\"Dipercaya menangani proyek kali ini, (…) saya jadi tegang dan bersiap diri karena beratnya tanggung jawab.\"",
      optYomi: ["{考|かんが}え", "{見込|みこ}み", "{思|おも}い", "{始末|しまつ}"],
      optArti: ["pemikiran", "perkiraan", "perasaan", "akibat buruk"],
    },
    30: {
      yomi: "「このたびは、{私|わたくし}どもの{商品|しょうひん}{発送|はっそう}ミスにより、お{客様|きゃくさま}に{大変|たいへん}ご{迷惑|めいわく}をかけましたことを{深|ふか}く（　）。{申|もう}し{訳|わけ}ございませんでした。」",
      arti: "\"Atas kesalahan pengiriman barang oleh kami kali ini yang telah sangat merepotkan pelanggan, kami (…) sedalam-dalamnya. Mohon maaf.\"",
      optArti: ["kami minta Anda meminta maaf", "Anda (hormat) meminta maaf", "kami menerima permintaan maaf", "kami menyampaikan permohonan maaf"],
    },
    31: {
      yomi: "{上司|じょうし}「{君|きみ}、{困|こま}る（　）！{資料|しりょう}にミスがあったぞ。{君|きみ}のせいで{大恥|おおはじ}をかいたよ。」{部下|ぶか}「すみません。うっかりしておりまして……」",
      arti: "Atasan: \"Kamu ini, bikin repot (…)! Ada kesalahan di dokumen. Gara-gara kamu saya malu besar.\" Bawahan: \"Maaf. Saya lengah...\"",
      optArti: ["kan! (menegur, lisan)", "bukankah! (formal)", "bukan begitu? (bertanya)", "bukankah begitu? (bertanya, formal)"],
    },
    32: {
      yomi: "{地球|ちきゅう}{温暖化|おんだんか}{抑制|よくせい}への{貢献|こうけん}が、ここ10{年|ねん}あまりの{間|あいだ}に、{優良|ゆうりょう}{企業|きぎょう}の{条件|じょうけん}の{一|ひと}つ（　）ようだ。",
      arti: "Kontribusi terhadap pengendalian pemanasan global, dalam sepuluh tahun lebih terakhir ini, tampaknya (…) salah satu syarat perusahaan unggul.",
      optArti: ["bisa menjadikan", "bisa menjadi", "sedang menjadikan", "sedang menjadi"],
    },
    33: {
      yomi: "{子|こ}ども「お{母|かあ}さん、{来週|らいしゅう}の{日曜日|にちようび}、さくら{山|やま}に{行|い}ってもいい？」{母親|ははおや}「だめよ。{今|いま}の{季節|きせつ}、あの{山|やま}にはハチがたくさん{出|で}るのよ。{万|まん}が{一|いち}、（　）{大変|たいへん}でしょ。」",
      arti: "Anak: \"Bu, Minggu depan boleh ke Gunung Sakura?\" Ibu: \"Tidak boleh. Musim ini di gunung itu banyak lebah. Kalau sampai (…), gawat kan.\"",
      optYomi: ["{刺|さ}されさえしたら", "{刺|さ}されでもしたら", "{刺|さ}させるなどしても", "{刺|さ}させるくらいしても"],
      optArti: ["asal tersengat saja", "kalau sampai tersengat atau semacamnya", "meski membiarkan tersengat dan sebagainya", "meski sampai membiarkan tersengat"],
    },
    34: {
      yomi: "{自慢|じまん}する（　）が、{私|わたし}は{入社|にゅうしゃ}{以来|いらい}10{年|ねん}、{一度|いちど}も{遅刻|ちこく}したことがない。",
      arti: "(…) untuk dibanggakan, tetapi sejak masuk perusahaan 10 tahun lalu, saya tidak pernah sekali pun terlambat.",
      optArti: ["bukan hanya sekadar", "tidak sampai (layak) untuk", "hanya sekadar", "tidak lebih dari sekadar (layak)"],
    },
    35: {
      yomi: "「いくら{注意|ちゅうい}しても、{後輩|こうはい}が{同|おな}じ{失敗|しっぱい}を{繰|く}り{返|かえ}します。{私|わたし}は{注意|ちゅうい}し{続|つづ}けるべきでしょうか。それとも{本人|ほんにん}が{気|き}づくまで、もう{何|なに}も{言|い}う（　）。」",
      arti: "\"Sebanyak apa pun saya tegur, junior saya mengulangi kesalahan yang sama. Apakah saya harus terus menegurnya? Atau, sampai ia sendiri menyadarinya, saya (…) berkata apa-apa lagi?\"",
      optArti: ["apakah sebaiknya", "apakah memang sebaiknya", "bukankah sebaiknya tidak", "bukankah memang sebaiknya"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{山田|やまだ}{監督|かんとく}は{私|わたし}の{恩人|おんじん}です。{今|いま}の＿＿ ＿＿ ★ ＿＿ことです。",
      arti: "Sutradara Yamada adalah penolong saya. Saya bisa seperti sekarang ini semata-mata berkat beliau.",
      optYomi: [null, null, "{私|わたし}が", "{監督|かんとく}"],
      optArti: ["(hanya) karena ada", "adanya (saya) pun", "saya", "sutradara"],
    },
    37: {
      yomi: "いったん{仕事|しごと}を{引|ひ}き{受|う}けた＿＿ ＿＿ ★ ＿＿{最後|さいご}までやり{通|とお}すに{違|ちが}いない。",
      arti: "Kalau sudah menerima pekerjaan, dilihat dari wataknya yang bertanggung jawab tinggi, ia pasti menuntaskannya sampai akhir.",
      optYomi: ["{彼|かれ}の{性格|せいかく}", null, null, "{責任感|せきにんかん}の{強|つよ}い"],
      optArti: ["wataknya", "dilihat dari", "karena sudah", "yang bertanggung jawab tinggi"],
    },
    38: {
      yomi: "ちょっと{考|かんが}えれば、さっきの{話|はなし}が{冗談|じょうだん}＿＿ ＿＿ ★ ＿＿、{単純|たんじゅん}な{彼|かれ}は{簡単|かんたん}に{信|しん}じてしまった。",
      arti: "Kalau dipikir sedikit saja, mestinya ia tahu bahwa cerita tadi hanya lelucon, tetapi dia yang polos begitu mudah percaya.",
      optArti: ["mestinya tahu", "(bahwa) itu (lelucon)", "padahal", "setidaknya hal (itu)"],
    },
    39: {
      yomi: "かつて{映画|えいが}スターであった{山田|やまだ}{氏|し}が{初|はつ}{挑戦|ちょうせん}で{知事|ちじ}{選|せん}に{勝利|しょうり}したのは、{能力|のうりょく}という＿＿ ＿＿ ★ ＿＿{大|おお}きい。",
      arti: "Kemenangan Tuan Yamada, mantan bintang film, dalam pemilihan gubernur pada percobaan pertamanya lebih banyak disebabkan oleh popularitas dan ketenarannya daripada kemampuannya.",
      optYomi: [null, null, null, "{人気|にんき}と{知名度|ちめいど}に"],
      optArti: ["hal, bagian (yang)", "daripada", "disebabkan oleh", "pada popularitas dan ketenaran"],
    },
    40: {
      yomi: "この{植物|しょくぶつ}はとても{強|つよ}いので、＿＿ ＿＿ ★ ＿＿ちゃんと{育|そだ}ちますよ。",
      arti: "Tanaman ini sangat kuat, jadi asalkan tidak lupa menyiraminya, ia pasti tumbuh dengan baik.",
      optYomi: ["{水|みず}やりを", null, null, "{忘|わす}れ"],
      optArti: ["penyiraman", "asalkan, cukup dengan", "tidak melakukan", "lupa"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{通|かよ}う{人|ひと}もいるほどだ", "{通|かよ}うまでもなかろう", "{通|かよ}うべきである", "{通|かよ}う{人|ひと}がいるのだろうか"],
      optArti: ["sampai ada orang yang mengikuti (sekolahnya)", "tidak perlu sampai mengikuti", "seharusnya mengikuti", "apakah ada orang yang mengikuti?"],
    },
    42: {
      optYomi: ["{極|きわ}めて{当然|とうぜん}のことではないか", "{極|きわ}めて{可能性|かのうせい}が{低|ひく}いのではないか", "はたして{健全|けんぜん}なのだろうか", "はたして{起|お}こり{得|え}ないのだろうか"],
      optArti: ["bukankah sangat wajar?", "bukankah kemungkinannya sangat kecil?", "apakah itu benar-benar sehat?", "apakah benar-benar tidak mungkin terjadi?"],
    },
    43: {
      optArti: ["oleh karena itu", "yaitu", "bahkan sebaliknya", "meskipun begitu"],
    },
    44: {
      optYomi: ["こうしてつまずかせる", "そこから{踏|ふ}み{出|だ}させる", "それにつまずいてしまった", "ここから{踏|ふ}み{出|だ}してしまった"],
      optArti: ["yang dengan begini membuat tersandung", "yang membuat melangkah dari sana", "yang telanjur tersandung di situ", "yang telanjur melangkah dari sini"],
    },
    45: {
      optArti: ["apakah akan menjadi ...?", "hanya akan menjadi ... (saja)", "belum tentu menjadi ...", "tidak bisa dikatakan akan menjadi ..."],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{筆者|ひっしゃ}によると、いまの{時代|じだい}に{創造力|そうぞうりょく}を{養|やしな}うには{何|なに}が{必要|ひつよう}か。",
      arti: "Menurut penulis, apa yang diperlukan untuk memupuk daya cipta di zaman sekarang?",
      optYomi: [
        "{失敗|しっぱい}を{経験|けいけん}しながら{課題|かだい}を{見|み}つけ{出|だ}す{力|ちから}",
        "{失敗|しっぱい}を{重|かさ}ねながら{課題|かだい}をこなしていく{力|ちから}",
        "{失敗|しっぱい}を{生|い}かしながら{課題|かだい}を{遂行|すいこう}する{力|ちから}",
        "{失敗|しっぱい}を{受|う}け{入|い}れながら{課題|かだい}を{解|と}く{力|ちから}",
      ],
      optArti: [
        "Kemampuan menemukan persoalan sambil mengalami kegagalan",
        "Kemampuan menyelesaikan tugas sambil terus-menerus gagal",
        "Kemampuan menjalankan tugas sambil memanfaatkan kegagalan",
        "Kemampuan memecahkan persoalan sambil menerima kegagalan",
      ],
    },
    47: {
      yomi: "この{文章|ぶんしょう}で{最|もっと}も{伝|つた}えたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan dalam surat ini?",
      optYomi: [
        "アサクラ{株式|かぶしき}{会社|がいしゃ}の{国際課|こくさいか}が1{月|がつ}に{山中|やまなか}ビルに{移転|いてん}すること",
        "アサクラ{株式|かぶしき}{会社|がいしゃ}の{国際課|こくさいか}が12{月|がつ}に{山中|やまなか}ビルに{移転|いてん}すること",
        "アサクラ{株式|かぶしき}{会社|がいしゃ}の{本社|ほんしゃ}と{国際課|こくさいか}が1{月|がつ}に{山中|やまなか}ビルに{移転|いてん}すること",
        "アサクラ{株式|かぶしき}{会社|がいしゃ}の{本社|ほんしゃ}と{国際課|こくさいか}が12{月|がつ}に{山中|やまなか}ビルに{移転|いてん}すること",
      ],
      optArti: [
        "Bagian Internasional PT Asakura pindah ke Gedung Yamanaka pada bulan Januari",
        "Bagian Internasional PT Asakura pindah ke Gedung Yamanaka pada bulan Desember",
        "Kantor pusat dan Bagian Internasional PT Asakura pindah ke Gedung Yamanaka pada bulan Januari",
        "Kantor pusat dan Bagian Internasional PT Asakura pindah ke Gedung Yamanaka pada bulan Desember",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}は、すれ{違|ちが}いが{起|お}こる{原因|げんいん}をどのように{説明|せつめい}しているか。",
      arti: "Bagaimana penulis menjelaskan penyebab terjadinya salah paham (perbedaan pandangan)?",
      optYomi: [
        "{見|み}る{雲|くも}の{形|かたち}はどの{世代|せだい}でも{変|か}わらないが、{一人一人|ひとりひとり}は{違|ちが}う{雲|くも}の{形|かたち}を{見|み}ているため",
        "{見|み}る{雲|くも}の{形|かたち}はどの{世代|せだい}でも{同|おな}じだが、{一人一人|ひとりひとり}の{記憶|きおく}の{中|なか}で{雲|くも}の{形|かたち}が{変|か}わっていくため",
        "{見|み}る{雲|くも}の{形|かたち}は{世代|せだい}によって{違|ちが}うが、{一人一人|ひとりひとり}は{雲|くも}の{形|かたち}はいつも{同|おな}じだと{思|おも}っているため",
        "{見|み}る{雲|くも}の{形|かたち}は{世代|せだい}によって{異|こと}なるが、{一人一人|ひとりひとり}の{好|す}きな{雲|くも}の{形|かたち}はそれ{以上|いじょう}に{違|ちが}うため",
      ],
      optArti: [
        "Karena bentuk awan yang dilihat sama di semua generasi, tetapi tiap orang melihat bentuk awan yang berbeda",
        "Karena bentuk awan yang dilihat sama di semua generasi, tetapi bentuk awan berubah dalam ingatan tiap orang",
        "Karena bentuk awan yang dilihat berbeda tiap generasi, tetapi tiap orang mengira bentuk awan selalu sama",
        "Karena bentuk awan yang dilihat berbeda tiap generasi, tetapi bentuk awan kesukaan tiap orang lebih berbeda lagi",
      ],
    },
    49: {
      yomi: "{筆者|ひっしゃ}によると、{報道|ほうどう}に{携|たずさ}わる{人間|にんげん}が{備|そな}えておくべき{必須|ひっす}{条件|じょうけん}とは{何|なに}か。",
      arti: "Menurut penulis, apa syarat mutlak yang harus dimiliki orang yang berkecimpung dalam pemberitaan?",
      optYomi: [
        "{示|しめ}されたデータから{影|かげ}の{部分|ぶぶん}を{取|と}り{除|のぞ}く{力|ちから}",
        "{示|しめ}されたデータは{偏|かたよ}ったものではないか{見抜|みぬ}く{力|ちから}",
        "{示|しめ}されたデータをありのまま{分|わ}かりやすく{伝|つた}える{力|ちから}",
        "{示|しめ}されたデータから{報道|ほうどう}{目的|もくてき}の{合|あ}ったものを{選|えら}び{取|と}る{力|ちから}",
      ],
      optArti: [
        "Kemampuan menghilangkan sisi gelap dari data yang disajikan",
        "Kemampuan melihat apakah data yang disajikan itu berat sebelah",
        "Kemampuan menyampaikan data yang disajikan apa adanya dan mudah dipahami",
        "Kemampuan memilih data yang sesuai tujuan pemberitaan dari data yang disajikan",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{筆者|ひっしゃ}は{近代|きんだい}の{冒険|ぼうけん}は、その{後者|こうしゃ}が{重要|じゅうよう}だと{述|の}べているが、それはどのような{意味|いみ}か。",
      arti: "Penulis menyatakan bahwa dalam petualangan modern \"yang terakhir itulah yang penting\"; apa maksudnya?",
      optYomi: [
        "{誰|だれ}もが{難問|なんもん}と{感|かん}じる{対象|たいしょう}を{探|さが}し、{命|いのち}をかけて{挑戦|ちょうせん}することが{重要|じゅうよう}だ",
        "{先駆者|せんくしゃ}が{偉業|いぎょう}を{成|な}し{遂|と}げた{場所|ばしょ}に、{新|あら}たな{決意|けつい}で{挑戦|ちょうせん}することが{重要|じゅうよう}だ",
        "{新|あら}たな{冒険|ぼうけん}の{対象|たいしょう}を{見|み}いだし、{独自|どくじ}の{方法|ほうほう}でそれに{挑戦|ちょうせん}することが{重要|じゅうよう}だ",
        "{誰|だれ}も{踏|ふ}み{入|い}ったことのない{場所|ばしょ}に、{独創的|どくそうてき}な{方法|ほうほう}で{挑戦|ちょうせん}することが{重要|じゅうよう}だ",
      ],
      optArti: [
        "Yang penting adalah mencari sasaran yang dirasa sulit oleh semua orang, lalu menantangnya dengan mempertaruhkan nyawa",
        "Yang penting adalah menantang tempat di mana para pelopor meraih prestasi besar, dengan tekad baru",
        "Yang penting adalah menemukan sasaran petualangan baru, lalu menantangnya dengan cara sendiri",
        "Yang penting adalah menantang tempat yang belum pernah diinjak siapa pun, dengan cara yang orisinal",
      ],
    },
    51: {
      yomi: "{地理的|ちりてき}な{空白|くうはく}がなくなったとはどういうことか。",
      arti: "Apa maksud \"tidak ada lagi ruang kosong secara geografis\"?",
      optYomi: [
        "{誰|だれ}も{考|かんが}えつかないような{冒険|ぼうけん}のルートがなくなった。",
        "{自分|じぶん}なりの{方法|ほうほう}で{冒険|ぼうけん}できる{場所|ばしょ}がなくなった。",
        "{冒険|ぼうけん}に{値|あたい}するルートがすべて{行|い}き{尽|つ}くされた。",
        "{誰|だれ}も{冒険|ぼうけん}したことがない{場所|ばしょ}がなくなった。",
      ],
      optArti: [
        "Tidak ada lagi rute petualangan yang tak terpikirkan siapa pun.",
        "Tidak ada lagi tempat untuk berpetualang dengan cara sendiri.",
        "Semua rute yang layak dijelajahi sudah habis ditempuh.",
        "Tidak ada lagi tempat yang belum pernah dijelajahi siapa pun.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}が、{冒険者|ぼうけんしゃ}はアーティストでもあると{述|の}べているのはなぜか。",
      arti: "Mengapa penulis menyatakan bahwa petualang juga seorang seniman?",
      optYomi: [
        "{冒険者|ぼうけんしゃ}もアーティストのように{創造性|そうぞうせい}のある{自己|じこ}{表現|ひょうげん}が{求|もと}められるから",
        "{冒険者|ぼうけんしゃ}もアーティストのように{表現力|ひょうげんりょく}をつけることで{注目度|ちゅうもくど}が{増|ま}すから",
        "{冒険者|ぼうけんしゃ}もアーティストのように{自然|しぜん}と{向|む}き{合|あ}って{自己|じこ}{表現|ひょうげん}するから",
        "{冒険者|ぼうけんしゃ}もアーティストのように{主体的|しゅたいてき}な{表現|ひょうげん}が{許|ゆる}されているから",
      ],
      optArti: [
        "Karena petualang pun, seperti seniman, dituntut mengekspresikan diri secara kreatif",
        "Karena petualang pun, seperti seniman, makin diperhatikan jika memiliki daya ekspresi",
        "Karena petualang pun, seperti seniman, mengekspresikan diri sambil berhadapan dengan alam",
        "Karena petualang pun, seperti seniman, diizinkan berekspresi secara mandiri",
      ],
    },
    53: {
      yomi: "このへんで{食糧|しょくりょう}の{危機|きき}{管理|かんり}{体制|たいせい}を{考|かんが}えておく{必要|ひつよう}があるとあるが、なぜか。",
      arti: "Tertulis \"sudah saatnya memikirkan sistem manajemen krisis pangan\"; mengapa?",
      optYomi: [
        "{今|いま}すぐ{食糧|しょくりょう}を{確保|かくほ}し{国民|こくみん}{一人一人|ひとりひとり}の{生活|せいかつ}を{守|まも}らなければならないから",
        "アジアを{中心|ちゅうしん}として{食料|しょくりょう}の{生産|せいさん}や{流通|りゅうつう}に{非常|ひじょう}{事態|じたい}が{起|お}きているから",
        "{食糧|しょくりょう}の{確保|かくほ}が{今後|こんご}ますます{難|むずか}しくなることが{予想|よそう}されるから",
        "{食料|しょくりょう}{輸出国|ゆしゅつこく}の{危機|きき}{管理|かんり}{体制|たいせい}が{確固|かっこ}としたものではないから",
      ],
      optArti: [
        "Karena pangan harus segera diamankan sekarang juga untuk melindungi kehidupan setiap warga",
        "Karena sedang terjadi keadaan darurat dalam produksi dan distribusi pangan, terutama di Asia",
        "Karena diperkirakan pengamanan pangan akan makin sulit ke depannya",
        "Karena sistem manajemen krisis di negara pengekspor pangan tidak kokoh",
      ],
    },
    54: {
      yomi: "{体制|たいせい}を{制度|せいど}にしておくとあるが、どうすることか。",
      arti: "Tertulis \"menjadikan sistem itu sebagai aturan (lembaga)\"; apa maksudnya?",
      optYomi: [
        "{生産|せいさん}から{流通|りゅうつう}までの{体制|たいせい}を{考|かんが}える。",
        "{国民|こくみん}が{活動|かつどう}できるような{体制|たいせい}を{整|ととの}える。",
        "{政府|せいふ}{主導|しゅどう}で{実施|じっし}できるような{仕組|しく}みを{作|つく}る。",
        "{生産|せいさん}や{流通|りゅうつう}に{国民|こくみん}が{責任|せきにん}を{持|も}つ{仕組|しく}みを{作|つく}る。",
      ],
      optArti: [
        "Memikirkan sistem dari produksi sampai distribusi.",
        "Menyiapkan sistem agar rakyat bisa beraktivitas.",
        "Membuat mekanisme yang bisa dijalankan atas prakarsa pemerintah.",
        "Membuat mekanisme di mana rakyat bertanggung jawab atas produksi dan distribusi.",
      ],
    },
    55: {
      yomi: "{政府|せいふ}が{検討|けんとう}すべき{食糧|しょくりょう}の{危機|きき}{管理|かんり}{体制|たいせい}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うものはどれか。",
      arti: "Tentang sistem manajemen krisis pangan yang harus dipertimbangkan pemerintah, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{必要|ひつよう}が{生|しょう}じた{時|とき}には、{国民|こくみん}の{同意|どうい}を{得|え}て{実施|じっし}するべきだ。",
        "{今|いま}すぐ{実施|じっし}した{方|ほう}が{良|よ}いので、{速|すみ}やかに{制度化|せいどか}するべきだ。",
        "{平常時|へいじょうじ}は{実施|じっし}する{必要|ひつよう}はないが、{制度|せいど}{自体|じたい}は{早|はや}く{整|ととの}えるべきだ。",
        "{平和|へいわ}な{時|とき}に{限|かぎ}らず、{国民|こくみん}が{自由|じゆう}に{活動|かつどう}できる{環境|かんきょう}を{整|ととの}えるべきだ。",
      ],
      optArti: [
        "Saat diperlukan, harus dijalankan dengan persetujuan rakyat.",
        "Lebih baik dijalankan sekarang juga, jadi harus segera dijadikan aturan.",
        "Di masa normal tidak perlu dijalankan, tetapi aturannya sendiri harus segera disiapkan.",
        "Tidak hanya di masa damai, lingkungan agar rakyat bisa beraktivitas bebas harus disiapkan.",
      ],
    },
    56: {
      yomi: "{日本|にほん}の{建築|けんちく}は{寿命|じゅみょう}が{短|みじか}いとあるが、なぜか。",
      arti: "Tertulis \"bangunan Jepang berumur pendek\"; mengapa?",
      optYomi: [
        "{木材|もくざい}{自体|じたい}に{耐久性|たいきゅうせい}がないため、メンテナンスが{難|むずか}しいから",
        "{建築|けんちく}に{適|てき}した{木材|もくざい}の{入手|にゅうしゅ}が{難|むずか}しく、{修理|しゅうり}もあまりしないから",
        "{木造|もくぞう}{建築|けんちく}は{老朽化|ろうきゅうか}が{速|はや}いだけでなく、{火事|かじ}や{地震|じしん}にも{弱|よわ}いから",
        "{丈夫|じょうぶ}な{木材|もくざい}があまり{使|つか}えないうえ、{災害|さいがい}で{失|うしな}われることも{多|おお}いから",
      ],
      optArti: [
        "Karena kayunya sendiri tidak awet, sehingga sulit dirawat",
        "Karena kayu yang cocok untuk bangunan sulit didapat, dan jarang pula diperbaiki",
        "Karena bangunan kayu tidak hanya cepat lapuk, tetapi juga rentan terhadap kebakaran dan gempa",
        "Karena kayu yang kokoh jarang bisa dipakai, dan bangunan juga sering hilang karena bencana",
      ],
    },
    57: {
      yomi: "これは{何|なに}を{指|さ}すか。",
      arti: "\"Ini\" merujuk pada apa?",
      optYomi: [
        "{建物|たてもの}が{老朽化|ろうきゅうか}してくると{同|おな}じように{建|た}て{直|なお}すことで、{外観|がいかん}が{保持|ほじ}されること",
        "{建物|たてもの}が{老朽化|ろうきゅうか}してくると{外観|がいかん}を{全|まった}く{変|か}えずに{建|た}て{直|なお}すことで{景観|けいかん}が{維持|いじ}されること",
        "{建物|たてもの}が{老朽化|ろうきゅうか}してくると、{材料|ざいりょう}を{再|さい}{利用|りよう}して{同|おな}じ{間取|まど}りに{建|た}て{直|なお}すこと",
        "{建物|たてもの}が{老朽化|ろうきゅうか}してくると、{景観|けいかん}の{維持|いじ}を{優先|ゆうせん}して{見|み}た{目|め}を{変|か}えずに{建|た}て{直|なお}すこと",
      ],
      optArti: [
        "Ketika bangunan mulai lapuk, dibangun ulang dengan cara yang sama sehingga tampilan luarnya terjaga",
        "Ketika bangunan mulai lapuk, dibangun ulang tanpa mengubah tampilan sama sekali sehingga pemandangan terjaga",
        "Ketika bangunan mulai lapuk, bahan dipakai ulang untuk membangun kembali dengan tata ruang yang sama",
        "Ketika bangunan mulai lapuk, dibangun ulang tanpa mengubah tampilan demi mengutamakan pemandangan",
      ],
    },
    58: {
      yomi: "{筆者|ひっしゃ}は、{木造|もくぞう}{建築|けんちく}が{更新|こうしん}されることにはどのような{利点|りてん}があると{考|かんが}えているか。",
      arti: "Menurut penulis, apa keuntungan dari diperbaruinya bangunan kayu?",
      optYomi: [
        "{質|しつ}の{良|よ}い{木材|もくざい}の{入手|にゅうしゅ}が{容易|ようい}になるだけでなく、{職人|しょくにん}の{技術|ぎじゅつ}が{向上|こうじょう}する。",
        "{樹木|じゅもく}の{生育|せいいく}に{合|あ}った{条件|じょうけん}が{整|ととの}う{上|うえ}、{美|うつく}しい{街並|まちな}みも{守|まも}られる。",
        "{植林|しょくりん}が{進|すす}むので{環境|かんきょう}によい{上|うえ}、{職人|しょくにん}の{技術|ぎじゅつ}も{受|う}け{継|つ}がれる。",
        "{木材|もくざい}の{供給|きょうきゅう}が{安定|あんてい}するだけでなく、{美|うつく}しい{風景|ふうけい}が{守|まも}られる。",
      ],
      optArti: [
        "Bukan hanya kayu berkualitas mudah didapat, keterampilan pengrajin juga meningkat.",
        "Kondisi yang cocok untuk pertumbuhan pohon tersedia, dan deretan kota yang indah pun terjaga.",
        "Karena penanaman pohon berjalan, baik bagi lingkungan, dan keterampilan pengrajin pun diwariskan.",
        "Bukan hanya pasokan kayu stabil, pemandangan yang indah juga terjaga.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "サルにレバー{押|お}しをさせる{目的|もくてき}は{何|なに}か。",
      arti: "Apa tujuan membuat monyet menekan tuas?",
      optYomi: [
        "サルを{訓練|くんれん}して、{人間|にんげん}の{意図|いと}を{読|よ}み{取|と}れるようにすること",
        "サルを{訓練|くんれん}して、{動物|どうぶつ}だけが{持|も}つ{見|み}えない{能力|のうりょく}を{開発|かいはつ}すること",
        "サルの{行動|こうどう}を{通|とお}して、{動物|どうぶつ}に{対|たい}する{人間|にんげん}の{心|こころ}の{動|うご}きを{探|さぐ}ること",
        "サルの{行動|こうどう}を{通|とお}して、{目|め}に{見|み}えない{動物|どうぶつ}の{心|こころ}や{意識|いしき}を{研究|けんきゅう}すること",
      ],
      optArti: [
        "Melatih monyet agar bisa membaca maksud manusia",
        "Melatih monyet untuk mengembangkan kemampuan tak kasatmata yang hanya dimiliki hewan",
        "Menyelidiki gerak hati manusia terhadap hewan melalui perilaku monyet",
        "Meneliti jiwa dan kesadaran hewan yang tak terlihat melalui perilaku monyet",
      ],
    },
    60: {
      yomi: "この{実験室|じっけんしつ}の{訓練|くんれん}で、{人間|にんげん}はサルに{対|たい}してどのように{対応|たいおう}しているか。",
      arti: "Dalam pelatihan di laboratorium ini, bagaimana manusia memperlakukan monyet?",
      optYomi: [
        "サルをレバーの{近|ちか}くに{連|つ}れて{行|い}き、{目標|もくひょう}の{行動|こうどう}をしたらすぐにエサをやる。",
        "サルがレバーを{押|お}したらエサを{指示|しじ}し、{目標|もくひょう}の{行動|こうどう}をするまでじっと{待|ま}つ。",
        "サルにレバーを{指示|しじ}し、{人間|にんげん}が{期待|きたい}する{次|つぎ}の{行動|こうどう}をしたらすぐにエサをやる。",
        "サルがレバーを{見|み}たらエサをやり、{人間|にんげん}が{期待|きたい}する{次|つぎ}の{行動|こうどう}をするまでじっと{待|ま}つ。",
      ],
      optArti: [
        "Membawa monyet ke dekat tuas, dan begitu ia melakukan perilaku sasaran langsung diberi makanan.",
        "Begitu monyet menekan tuas, makanan ditunjukkan, lalu menunggu dengan sabar sampai ia melakukan perilaku sasaran.",
        "Menunjukkan tuas kepada monyet, dan begitu ia melakukan perilaku berikutnya yang diharapkan manusia langsung diberi makanan.",
        "Begitu monyet melihat tuas diberi makanan, lalu menunggu dengan sabar sampai ia melakukan perilaku berikutnya yang diharapkan manusia.",
      ],
    },
    61: {
      yomi: "そのときとは、どんなときか。",
      arti: "\"Saat itu\" adalah saat seperti apa?",
      optYomi: [
        "「エサやり」というメッセージを{繰|く}り{返|かえ}し{送|おく}ることで{人間|にんげん}とサルの{行動|こうどう}の{違|ちが}いがわかったとき",
        "「エサやり」というメッセージを{送|おく}る{過程|かてい}を{通|とお}して、サルの{心|こころ}がつかめたと{感|かん}じたとき",
        "レバー{押|お}しの{訓練|くんれん}が{進|すす}むにつれて、サルが{筆者|ひっしゃ}の{心|こころ}をわかってくれたと{感|かん}じたとき",
        "レバー{押|お}しの{訓練|くんれん}によって{教科書|きょうかしょ}には{書|か}かれていないサルの{行動|こうどう}が{解明|かいめい}されたとき",
      ],
      optArti: [
        "Saat perbedaan perilaku manusia dan monyet menjadi jelas dengan berulang kali mengirim pesan \"pemberian makanan\"",
        "Saat merasa berhasil menangkap hati monyet melalui proses mengirim pesan \"pemberian makanan\"",
        "Saat merasa monyet memahami hati penulis seiring kemajuan latihan menekan tuas",
        "Saat perilaku monyet yang tidak tertulis di buku pelajaran terungkap lewat latihan menekan tuas",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}がこの{訓練|くんれん}をしてわかったことは{何|なに}か。",
      arti: "Apa yang dipahami penulis setelah melakukan pelatihan ini?",
      optYomi: [
        "{動物|どうぶつ}を{目標|もくひょう}の{行動|こうどう}に{近|ちか}づける{訓練|くんれん}では、「エサやり」を{通|とお}して{動物|どうぶつ}が{人間|にんげん}に{慣|な}れることが{大切|たいせつ}だ。",
        "{動物|どうぶつ}を{訓練|くんれん}するためには{気持|きも}ちをつかむことが{重要|じゅうよう}であり、それは{自分|じぶん}で{体験|たいけん}して{初|はじ}めてわかる。",
        "{動物|どうぶつ}の{心理|しんり}を{探|さぐ}るためには、まず{教科書|きょうかしょ}に{書|か}いてあるとおりのことを{実践|じっせん}することが{大事|だいじ}だ。",
        "{動物|どうぶつ}の{心|こころ}をつかむには{目|め}に{見|み}える{行動|こうどう}だけに{注目|ちゅうもく}することが{大切|たいせつ}だが、そのことは{教科書|きょうかしょ}に{書|か}いていない。",
      ],
      optArti: [
        "Dalam pelatihan mendekatkan hewan pada perilaku sasaran, yang penting adalah hewan terbiasa dengan manusia melalui \"pemberian makanan\".",
        "Untuk melatih hewan, yang penting adalah menangkap perasaannya, dan hal itu baru bisa dipahami setelah mengalaminya sendiri.",
        "Untuk menyelidiki psikologi hewan, yang penting pertama-tama adalah mempraktikkan persis seperti yang tertulis di buku pelajaran.",
        "Untuk menangkap hati hewan, yang penting adalah memperhatikan perilaku yang terlihat saja, tetapi hal itu tidak tertulis di buku pelajaran.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "AとBが{共通|きょうつう}して{問題|もんだい}だと{指摘|してき}していることは{何|なに}か。",
      arti: "Apa yang sama-sama ditunjuk A dan B sebagai masalah?",
      optYomi: [
        "{家庭|かてい}ごみが{所定|しょてい}の{場所|ばしょ}{以外|いがい}に{捨|す}てられること",
        "ゴミ{処理|しょり}の{費用|ひよう}を{消費者|しょうひしゃ}が{負担|ふたん}すること",
        "ゴミ{問題|もんだい}への{生産者|せいさんしゃ}{側|がわ}の{意識|いしき}が{薄|うす}いこと",
        "{家庭|かてい}で{出|だ}されるゴミが{減|へ}らないこと",
      ],
      optArti: [
        "Sampah rumah tangga dibuang di luar tempat yang ditentukan",
        "Konsumen menanggung biaya pengolahan sampah",
        "Kesadaran pihak produsen terhadap masalah sampah rendah",
        "Sampah yang dikeluarkan rumah tangga tidak berkurang",
      ],
    },
    64: {
      yomi: "{家庭|かてい}ごみ{収集|しゅうしゅう}の{有料化|ゆうりょうか}についてAとBはどのように{述|の}べているか。",
      arti: "Bagaimana A dan B menjelaskan tentang pengenaan biaya pengumpulan sampah rumah tangga?",
      optYomi: [
        "AとBも、ゴミ{処理|しょり}{費用|ひよう}を{消費者|しょうひしゃ}が{負担|ふたん}することになるので、ゴミの{減少|げんしょう}に{貢献|こうけん}するだろうと{述|の}べている。",
        "AとBも、{有料化|ゆうりょうか}しても{家庭|かてい}ごみは{減|へ}らないばかりか、ゴミを{捨|す}てる{規則|きそく}を{守|まも}らない{人|ひと}が{出|で}てくるだろうと{述|の}べている。",
        "Aでは{有料化|ゆうりょうか}すればごみに{対|たい}する{考|かんが}え{方|かた}が{変|か}わるだろうと{述|の}べ、Bでは{有料化|ゆうりょうか}する{前|まえ}に{意識|いしき}{改革|かいかく}が{必要|ひつよう}だと{述|の}べている。",
        "Aでは{有料化|ゆうりょうか}すれば{資源|しげん}の{無駄|むだ}{遣|づか}いが{少|すく}なくなるだろうと{述|の}べ、Bでは{有料化|ゆうりょうか}すれば{便利|べんり}さに{対|たい}する{意識|いしき}が{変|か}わるだろうと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan bahwa karena konsumen menanggung biaya pengolahan sampah, hal itu akan membantu mengurangi sampah.",
        "A dan B sama-sama menyatakan bahwa meski dikenai biaya, sampah rumah tangga bukan hanya tidak berkurang, tetapi juga akan muncul orang yang melanggar aturan pembuangan sampah.",
        "A menyatakan jika dikenai biaya cara pandang terhadap sampah akan berubah; B menyatakan sebelum dikenai biaya perlu ada perubahan kesadaran.",
        "A menyatakan jika dikenai biaya pemborosan sumber daya akan berkurang; B menyatakan jika dikenai biaya kesadaran terhadap kepraktisan akan berubah.",
      ],
    },
    65: {
      yomi: "ごみ{問題|もんだい}についてAとBはどのように{考|かんが}えているか。",
      arti: "Bagaimana A dan B memandang masalah sampah?",
      optYomi: [
        "AもBも、{生産者|せいさんしゃ}と{消費者|しょうひしゃ}の{双方|そうほう}が{協力|きょうりょく}すれば{改善|かいぜん}できると{考|かんが}えている。",
        "AもBも、{自治体|じちたい}の{協力|きょうりょく}を{得|え}て{消費者|しょうひしゃ}{自身|じしん}が{対応|たいおう}すべき{問題|もんだい}だと{考|かんが}えている。",
        "Aでは{消費者|しょうひしゃ}が{対応|たいおう}すべきだと{考|かんが}えているのに{対|たい}し、Bでは{主|おも}に{生産者|せいさんしゃ}が{取|と}り{組|く}むべきだと{考|かんが}えている。",
        "Aでは{自治体|じちたい}が{対応|たいおう}すればいいと{考|かんが}えているのに{対|たい}し、Bは{生産者|せいさんしゃ}や{消費者|しょうひしゃ}の{意識|いしき}も{大切|たいせつ}だと{考|かんが}えている。",
      ],
      optArti: [
        "A dan B sama-sama berpendapat bahwa masalah ini bisa diperbaiki jika produsen dan konsumen bekerja sama.",
        "A dan B sama-sama berpendapat bahwa ini masalah yang harus ditangani konsumen sendiri dengan dukungan pemerintah daerah.",
        "A berpendapat konsumen yang harus menangani, sedangkan B berpendapat terutama produsen yang harus menanganinya.",
        "A berpendapat cukup pemerintah daerah yang menangani, sedangkan B berpendapat kesadaran produsen dan konsumen juga penting.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    66: {
      yomi: "{筆者|ひっしゃ}によれば、{上司|じょうし}にとって{論田|ろんだ}くんのミスの「{情報|じょうほう}{占有率|せんゆうりつ}」が{上|あ}がるのはどのような{場合|ばあい}か。",
      arti: "Menurut penulis, dalam kasus apa \"tingkat penguasaan informasi\" kesalahan Ronda-kun bagi atasan menjadi tinggi?",
      optYomi: [
        "{付|つ}き{合|あ}いの{長|なが}い{上司|じょうし}との{関係|かんけい}の{中|なか}で、{論田|ろんだ}くんがミスを1{回|かい}した{場合|ばあい}",
        "{付|つ}き{合|あ}いの{長|なが}い{上司|じょうし}との{関係|かんけい}の{中|なか}で、{論田|ろんだ}くんがミスを3{回|かい}した{場合|ばあい}",
        "{付|つ}き{合|あ}いの{短|みじか}い{上司|じょうし}との{関係|かんけい}の{中|なか}で、{論田|ろんだ}くんがミスを1{回|かい}した{場合|ばあい}",
        "{付|つ}き{合|あ}いの{短|みじか}い{上司|じょうし}との{関係|かんけい}の{中|なか}で、{論田|ろんだ}くんがミスを3{回|かい}した{場合|ばあい}",
      ],
      optArti: [
        "Jika Ronda-kun membuat 1 kesalahan dalam hubungan dengan atasan yang sudah lama dikenal",
        "Jika Ronda-kun membuat 3 kesalahan dalam hubungan dengan atasan yang sudah lama dikenal",
        "Jika Ronda-kun membuat 1 kesalahan dalam hubungan dengan atasan yang baru dikenal",
        "Jika Ronda-kun membuat 3 kesalahan dalam hubungan dengan atasan yang baru dikenal",
      ],
    },
    67: {
      yomi: "{自分|じぶん}にうそのないふるまいとはどのようなものか。",
      arti: "Seperti apa \"perilaku yang jujur pada diri sendiri\"?",
      optYomi: [
        "その{時々|ときどき}のすなおな{気持|きも}ちを{表|あらわ}すこと",
        "いつも{正直|しょうじき}に{自分|じぶん}の{考|かんが}えを{伝|つた}えること",
        "いつもどおりの{姿|すがた}を{見|み}せること",
        "うそをつかず{正直|しょうじき}に{話|はな}すこと",
      ],
      optArti: [
        "Menunjukkan perasaan apa adanya pada setiap saat",
        "Selalu menyampaikan pendapat sendiri dengan jujur",
        "Menunjukkan sosok diri seperti biasanya",
        "Berbicara jujur tanpa berbohong",
      ],
    },
    68: {
      yomi: "{筆者|ひっしゃ}は、なぜ{初対面|しょたいめん}の{相手|あいて}に{慎重|しんちょう}になったほうがいいと{述|の}べているのか。",
      arti: "Mengapa penulis menyatakan sebaiknya berhati-hati terhadap orang yang baru pertama kali ditemui?",
      optYomi: [
        "{普段|ふだん}どおりの{態度|たいど}では、{相手|あいて}に{自分|じぶん}の{良|よ}さを{十分|じゅうぶん}に{伝|つた}えられないから",
        "{自分|じぶん}に{関|かん}する{一部|いちぶ}の{情報|じょうほう}で{相手|あいて}がすべてを{判断|はんだん}するかもしれないから",
        "{相手|あいて}の{性格|せいかく}が{自分|じぶん}と{合|あ}うかどうかがまだよくわかっていないから",
        "{初対面|しょたいめん}の{相手|あいて}には{慎重|しんちょう}な{姿|すがた}が{実像|じつぞう}だと{思|おも}わせる{必要|ひつよう}があるから",
      ],
      optArti: [
        "Karena dengan sikap seperti biasa, kelebihan diri tidak bisa tersampaikan sepenuhnya",
        "Karena orang itu mungkin menilai segalanya dari sebagian informasi tentang diri kita",
        "Karena belum diketahui apakah watak orang itu cocok dengan kita",
        "Karena orang yang baru ditemui perlu dibuat percaya bahwa sosok yang hati-hati adalah sosok asli kita",
      ],
    },
    69: {
      yomi: "{自分|じぶん}の「メディア{力|りょく}」について、{筆者|ひっしゃ}はどのようにするのがよいと{述|の}べているか。",
      arti: "Tentang \"daya media\" diri sendiri, apa yang sebaiknya dilakukan menurut penulis?",
      optYomi: [
        "{相手|あいて}に{自分|じぶん}の「メディア{力|りょく}」が{正確|せいかく}に{伝|つた}わるように{意識|いしき}する。",
        "{相手|あいて}に{普段|ふだん}の{自分|じぶん}{以上|いじょう}の「メディア{力|りょく}」を{伝|つた}えるようにする。",
        "{相手|あいて}に{刻|きざ}まれた{自分|じぶん}の「メディア{力|りょく}」を{気|き}にせず{平常心|へいじょうしん}でいる。",
        "{相手|あいて}に{見|み}せる{自分|じぶん}の「メディア{力|りょく}」を{下|さ}げないように{静|しず}かにしている。",
      ],
      optArti: [
        "Sadar agar \"daya media\" diri tersampaikan dengan tepat kepada orang lain.",
        "Berusaha menyampaikan \"daya media\" yang melebihi diri sehari-hari kepada orang lain.",
        "Tetap tenang tanpa memedulikan \"daya media\" diri yang sudah terukir di benak orang lain.",
        "Bersikap diam agar \"daya media\" yang ditunjukkan kepada orang lain tidak turun.",
      ],
    },

    // ── 問題13：情報検索 ──
    70: {
      yomi: "{日本|にほん}の{大学|だいがく}・{大学院|だいがくいん}に{在学|ざいがく}している{次|つぎ}の{学生|がくせい}のうち、この{奨学金|しょうがくきん}に{応募|おうぼ}できるのは{誰|だれ}か。",
      arti: "Di antara mahasiswa berikut yang sedang belajar di universitas/pascasarjana Jepang, siapa yang bisa melamar beasiswa ini?",
      optArti: ["Somsiri-san", "Wang-san", "Ahmad-san", "John-san"],
    },
    71: {
      yomi: "キムさんは、2010{年|ねん}4{月|がつ}{現在|げんざい}、{日本|にほん}の{大学院|だいがくいん}の{修士|しゅうし}{課程|かてい}2{年|ねん}で{農学|のうがく}を{専攻|せんこう}している。2011{年度|ねんど}には{博士|はかせ}{課程|かてい}に{進学|しんがく}{予定|よてい}である。キムさんが、この{奨学金|しょうがくきん}に{応募|おうぼ}する{場合|ばあい}、{応募|おうぼ}{時|じ}に{必|かなら}ずしなければならないのは、{次|つぎ}のどれか。",
      arti: "Per April 2010, Kim-san adalah mahasiswa magister tahun ke-2 di pascasarjana Jepang, jurusan pertanian. Ia berencana melanjutkan ke program doktor pada tahun ajaran 2011. Jika Kim-san melamar beasiswa ini, apa yang wajib ia lakukan saat melamar?",
      optYomi: [
        "ホームページから{研究|けんきゅう}{計画書|けいかくしょ}の{様式|ようしき}をダウンロードする。",
        "{博士|はかせ}{課程|かてい}{進学|しんがく}が{決定|けってい}していることを{証明|しょうめい}する{書類|しょるい}をもらう。",
        "{出身|しゅっしん}{大学|だいがく}の{指導|しどう}{教授|きょうじゅ}の{推薦書|すいせんしょ}を{取|と}り{寄|よ}せる。",
        "{応募|おうぼ}{書類|しょるい}を{大学院|だいがくいん}の{事務所|じむしょ}に{提出|ていしゅつ}する。",
      ],
      optArti: [
        "Mengunduh format rencana penelitian dari situs web.",
        "Meminta dokumen yang membuktikan bahwa ia sudah pasti melanjutkan ke program doktor.",
        "Meminta surat rekomendasi dari dosen pembimbing di universitas asalnya.",
        "Menyerahkan berkas lamaran ke kantor administrasi pascasarjana.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：コミュニケーション能力社会 ──
    "7": {
      yomi: `いまはコミュニケーション{能力|のうりょく}が{過剰|かじょう}に{求|もと}められる{時代|じだい}である。{職場|しょくば}でも{学校|がっこう}でも、あるいはもっとプライベートな{空間|くうかん}でもよい。あらゆる{人間|にんげん}{関係|かんけい}において、{自分|じぶん}の{価値|かち}を{認|みと}めてもらうためには{高度|こうど}なコミュニケーション{能力|のうりょく}が{必要|ひつよう}とされる。{書店|しょてん}に{行|い}けばコミュニケーション{能力|のうりょく}を{高|たか}めるための{自己|じこ}{啓発|けいはつ}{本|ぼん}があり{余|あま}るほどでているし、わざわざそのための{学校|がっこう}に[41]。

{確|たし}かに、いまの{産業|さんぎょう}のあり{方|かた}をみると、コミュニケーションが{富|とみ}を{生|う}み{出|だ}す{経済|けいざい}{活動|かつどう}の{中心|ちゅうしん}にきていることがわかる。{製造業|せいぞうぎょう}は{人件費|じんけんひ}の{安|やす}い{海外|かいがい}に{工場|こうじょう}をどんどん{移転|いてん}させ、{国内|こくない}に{残|のこ}っているのは、マネジメントや{企画|きかく}、{研究|けんきゅう}{開発|かいはつ}、マーケティングといった{本社|ほんしゃ}{機能|きのう}{的|てき}な{仕事|しごと}ばかりだ。そこでは、{組織|そしき}をまとめあげる、アイデアをだす、{交渉|こうしょう}する、プレゼンをする、ディスカッションをするといった、{高|たか}いコミュニケーション{能力|のうりょく}が{必要|ひつよう}とされる{活動|かつどう}がどうしても{物|もの}を{言|い}う。{社会|しゃかい}のあり{方|かた}が、{工場|こうじょう}{中心|ちゅうしん}からコミュニケーション{中心|ちゅうしん}へと{大|おお}きく{転換|てんかん}しているのである。

しかし、コミュニケーション{能力|のうりょく}が、{人々|ひとびと}の{価値|かち}を{決|き}める{独占的|どくせんてき}な{尺度|しゃくど}になることは[42]{事実|じじつ}、コミュニケーションべたで{自己|じこ}アピールにそれほど{長|た}け（{注|ちゅう}1）ていなくても、{能力|のうりょく}のある{人|ひと}はいっぱいいる。{私|わたし}も{大学|だいがく}でゼミを{指導|しどう}していると、ゼミの{議論|ぎろん}では{目立|めだ}っていてもレポートの{出来|でき}はそれほどでもない{学生|がくせい}や、{逆|ぎゃく}にゼミではおとなしくても{素晴|すば}らしいレポートを{書|か}いてくる{学生|がくせい}に{頻繁|ひんぱん}にであう。コミュニケーションの{巧拙|こうせつ}と{本人|ほんにん}の{能力|のうりょく}は{必|かなら}ずしも{一致|いっち}しない。

もちろんコミュニケーション{能力|のうりょく}も{人間|にんげん}の{能力|のうりょく}の{一|ひと}つではある。だから、それが{評価|ひょうか}{基準|きじゅん}の{一|ひと}つになることは{当然|とうぜん}といっていい。[43]、コミュニケーション{能力|のうりょく}をめぐる{過当|かとう}（{注|ちゅう}2）な{競争|きょうそう}は、{人間|にんげん}{関係|かんけい}にひずみをもたらすだろう。

{引|ひ}きこもりは、{社会|しゃかい}のなかで{要求|ようきゅう}されるコミュニケーション{能力|のうりょく}があまりに{高|たか}いため、{一度|いちど}{他者|たしゃ}とのコミュニケーションにつまずくと、なかなか{新|あら}たなコミュニケーションに{踏|ふ}み{出|だ}せなくなってしまうことから{生|う}まれる。{引|ひ}きこもりまでいかなくても、{周|まわ}りとのコミュニケーションのなかで{自分|じぶん}がまともに{相手|あいて}にされなければ、{誰|だれ}だって{心|こころ}を{閉|と}ざしてしまい、{内|うち}にこもりがちになるだろう。コミュニケーション{能力|のうりょく}をめぐる{競争|きょうそう}が{激|はげ}しい{社会|しゃかい}は、[44]{人|ひと}にとても{冷淡|れいたん}だ。

また、いじめは、{子供|こども}たちのコミュニケーション{能力|のうりょく}の{欠如|けつじょ}から{起|お}きているのではなく、{逆|ぎゃく}に、みんなが{空気|くうき}を{読|よ}みすぎることで{生|しょう}じるストレスのはけ{口|ぐち}を{特定|とくてい}の{人間|にんげん}に{向|む}けることで{起|お}きている。こうしたストレスや{重圧|じゅうあつ}は、{子供|こども}に{限|かぎ}った{問題|もんだい}ではない。{空気|くうき}を{壊|こわ}してはならないという{圧力|あつりょく}は、{人々|ひとびと}にコミュニケーション{能力|のうりょく}をさらに{要求|ようきゅう}するだろう。しかしそれが{進|すす}めば、{社会|しゃかい}のなかで{同調|どうちょう}{圧力|あつりょく}が{強|つよ}まり、{社会|しゃかい}そのものが{萎縮|いしゅく}（{注|ちゅう}3）[45]。
（{萱野|かやの}{稔人|としひと}『{私|わたし}の{視点|してん}』2009{年|ねん}4{月|がつ}9{日|か}{付|づけ}{朝日|あさひ}{新聞|しんぶん}{朝刊|ちょうかん}による）
（{注|ちゅう}1）{長|た}ける：{優|すぐ}れている
（{注|ちゅう}2）{過当|かとう}な：{適当|てきとう}な{程度|ていど}を{超|こ}えている
（{注|ちゅう}3）{萎縮|いしゅく}する：{元気|げんき}がなくなる`,
      arti: `Sekarang adalah zaman di mana kemampuan komunikasi dituntut secara berlebihan. Di tempat kerja, di sekolah, atau bahkan di ruang yang lebih pribadi. Dalam segala hubungan antarmanusia, kemampuan komunikasi tingkat tinggi dibutuhkan agar nilai diri kita diakui. Di toko buku, buku pengembangan diri untuk meningkatkan kemampuan komunikasi melimpah ruah, dan [41] ke sekolah khusus untuk itu.

Memang, jika melihat bentuk industri saat ini, terlihat bahwa komunikasi telah menjadi pusat kegiatan ekonomi yang menghasilkan kekayaan. Industri manufaktur terus memindahkan pabriknya ke luar negeri yang biaya tenaga kerjanya murah, dan yang tersisa di dalam negeri hanyalah pekerjaan berfungsi kantor pusat seperti manajemen, perencanaan, riset dan pengembangan, serta pemasaran. Di sana, kegiatan yang membutuhkan kemampuan komunikasi tinggi — menyatukan organisasi, memunculkan ide, bernegosiasi, berpresentasi, berdiskusi — mau tak mau menjadi penentu. Bentuk masyarakat sedang berubah besar dari berpusat pada pabrik menjadi berpusat pada komunikasi.

Namun, jika kemampuan komunikasi menjadi satu-satunya tolok ukur yang menentukan nilai seseorang, [42] Kenyataannya, banyak sekali orang yang mampu meski canggung berkomunikasi dan tidak begitu pandai (catatan 1) mempromosikan diri. Saya pun, saat membimbing seminar di universitas, sering bertemu mahasiswa yang menonjol dalam diskusi seminar tetapi laporannya biasa saja, atau sebaliknya mahasiswa yang pendiam di seminar tetapi menulis laporan yang luar biasa. Pandai-tidaknya berkomunikasi belum tentu sejalan dengan kemampuan orang itu.

Tentu saja kemampuan komunikasi juga merupakan salah satu kemampuan manusia. Jadi, wajar saja jika itu menjadi salah satu kriteria penilaian. [43], persaingan berlebihan (catatan 2) seputar kemampuan komunikasi akan menimbulkan distorsi dalam hubungan antarmanusia.

Hikikomori (menarik diri dari pergaulan) muncul karena kemampuan komunikasi yang dituntut masyarakat terlalu tinggi, sehingga begitu seseorang sekali tersandung dalam berkomunikasi dengan orang lain, ia sulit melangkah ke komunikasi yang baru. Meski tidak sampai hikikomori, jika dalam komunikasi dengan sekitarnya ia tidak dianggap serius, siapa pun akan menutup hati dan cenderung mengurung diri. Masyarakat dengan persaingan ketat seputar kemampuan komunikasi sangat dingin terhadap orang yang [44].

Selain itu, perundungan tidak terjadi karena kurangnya kemampuan komunikasi anak-anak, tetapi sebaliknya, terjadi karena stres akibat semua orang terlalu "membaca suasana" dilampiaskan kepada orang tertentu. Stres dan tekanan seperti ini bukan masalah anak-anak saja. Tekanan agar tidak merusak suasana akan semakin menuntut kemampuan komunikasi dari orang-orang. Namun jika itu berlanjut, tekanan untuk menyeragamkan diri akan menguat dalam masyarakat, dan masyarakat itu sendiri [45] layu (catatan 3).
(Dari kolom "Watashi no Shiten" karya Kayano Toshihito, harian Asahi pagi, 9 April 2009)
(Catatan 1) 長ける: unggul, mahir
(Catatan 2) 過当な: melebihi batas yang wajar
(Catatan 3) 萎縮する: kehilangan semangat, layu`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{他|ほか}の{人|ひと}の{成功|せいこう}{事例|じれい}をマネすることが、{必|かなら}ずしも{自分|じぶん}の{成功|せいこう}を{約束|やくそく}するものではなくなったのがいまの{時代|じだい}です。{昨日|きのう}までの{成功|せいこう}は、{今日|きょう}の{成功|せいこう}を{意味|いみ}しません。そのような{時代|じだい}に{大切|たいせつ}なのは、やはり{創造力|そうぞうりょく}です。そして{創造力|そうぞうりょく}とは{新|あたら}しいものをつくりだす{力|ちから}を{意味|いみ}している{以上|いじょう}、{失敗|しっぱい}を{避|さ}けて{培|つちか}えるものではありません。{創造力|そうぞうりょく}を{身|み}につける{上|うえ}でまず{第一|だいいち}に{必要|ひつよう}なのは、{決|き}められた{課題|かだい}に{解|かい}を{出|だ}すことではなく、{自分|じぶん}で{課題|かだい}を{設定|せってい}する{能力|のうりょく}です。
（{畑村|はたむら}{洋太郎|ようたろう}『{失敗学|しっぱいがく}のすすめ』による）`,
      arti: `Zaman sekarang adalah zaman di mana meniru contoh sukses orang lain tidak lagi menjamin kesuksesan diri sendiri. Kesuksesan sampai kemarin tidak berarti kesuksesan hari ini. Yang penting di zaman seperti itu adalah daya cipta. Dan karena daya cipta berarti kemampuan menciptakan hal baru, ia tidak bisa dipupuk dengan menghindari kegagalan. Yang pertama-tama diperlukan untuk menguasai daya cipta bukanlah menjawab soal yang sudah ditentukan, melainkan kemampuan menetapkan persoalan sendiri.
(Dari buku "Shippaigaku no Susume" karya Hatamura Yōtarō)`,
    },
    "8-2": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}が{取引先|とりひきさき}に{出|だ}した{文章|ぶんしょう}である。

2010{年|ねん}11{月|がつ}10{日|か}
エービーシー{株式|かぶしき}{会社|がいしゃ}
{海外|かいがい}{営業|えいぎょう}{部長|ぶちょう}　{田中|たなか}{春子|はるこ}　{様|さま}

アサクラ{株式|かぶしき}{会社|がいしゃ}
{国際|こくさい}{課長|かちょう}　{西田|にしだ}{良雄|よしお}

{拝啓|はいけい}
{貴社|きしゃ}はますますご{盛栄|せいえい}のこととお{喜|よろこ}び{申|もう}し{上|あ}げます。
{先日|せんじつ}お{知|し}らせいたしました{通|とお}り、{弊社|へいしゃ}は、{事業|じぎょう}{拡大|かくだい}のため、{来月|らいげつ}1{月|がつ}に{本社|ほんしゃ}を{現在|げんざい}の{朝日|あさひ}ビル（{北森区|きたもりく}）から{山中|やまなか}ビル（{西川区|にしかわく}）に{移転|いてん}いたします。それに{先立|さきだ}ちまして、これまで{東川区|ひがしかわく}にございました{国際課|こくさいか}も、12{月|がつ}3{日|か}に{山中|やまなか}ビル5{階|かい}に{移転|いてん}することになりました。つきましては、{以下|いか}の{通|とお}り{新|しん}{住所|じゅうしょ}および{連絡先|れんらくさき}をお{知|し}らせいたします。
{今後|こんご}とも、なお{一層|いっそう}のご{愛顧|あいこ}のほどお{願|ねが}い{申|もう}し{上|あ}げます。
{敬具|けいぐ}

{記|き}
{新|しん}{住所|じゅうしょ}：〒141-0023　{東京都|とうきょうと}{西川区|にしかわく}{大町|おおまち}1-5-20　{山中|やまなか}ビル5{階|かい}
{新|しん}{電話|でんわ}{番号|ばんごう}：03-7434-5656
{新|しん}FAX{番号|ばんごう}：03-7434-5657
{以上|いじょう}`,
      arti: `Berikut ini adalah surat yang dikirim sebuah perusahaan kepada mitra bisnisnya.

10 November 2010
PT ABC
Kepada Yth. Ibu Tanaka Haruko, Manajer Penjualan Luar Negeri

PT Asakura
Nishida Yoshio, Kepala Bagian Internasional

Dengan hormat,
Kami turut bergembira atas kian makmurnya perusahaan Anda.
Sebagaimana telah kami beritahukan beberapa waktu lalu, demi perluasan usaha, perusahaan kami akan memindahkan kantor pusat dari Gedung Asahi (Distrik Kitamori) saat ini ke Gedung Yamanaka (Distrik Nishikawa) pada bulan Januari mendatang. Mendahului hal itu, Bagian Internasional yang selama ini berada di Distrik Higashikawa juga akan pindah ke lantai 5 Gedung Yamanaka pada 3 Desember. Sehubungan dengan itu, kami beritahukan alamat dan kontak baru sebagai berikut.
Kami mohon dukungan Anda yang lebih besar lagi ke depannya.
Hormat kami,

Keterangan
Alamat baru: 〒141-0023 Gedung Yamanaka lt. 5, Ōmachi 1-5-20, Distrik Nishikawa, Tokyo
Nomor telepon baru: 03-7434-5656
Nomor faks baru: 03-7434-5657
Sekian`,
    },
    "8-3": {
      yomi: `{価値観|かちかん}や{科学的|かがくてき}{常識|じょうしき}は、{誰|だれ}にとってもいつの{世|よ}でも、{変|か}わらぬものだと{感|かん}じがちです。しかしそれは{雲|くも}の{形|かたち}のように、{一見|いっけん}、{静止|せいし}しているように{見|み}えて、じつはゆっくりと{変化|へんか}しています。あまりにもゆっくり{変化|へんか}するため、{多|おお}くの{人|ひと}が、{雲|くも}は{静止画|せいしが}のように{変化|へんか}しないものだと{信|しん}じているのです。

{誰|だれ}もが、たまたま{自分|じぶん}の{成長期|せいちょうき}に{見|み}ていた{雲|くも}こそが「{正|ただ}しい{雲|くも}の{形|かたち}」だと{思|おも}い{込|こ}みます。こうしてそれぞれの{世代|せだい}の{人|ひと}の{脳裏|のうり}にある{雲|くも}の{姿|すがた}は、お{互|たが}いに{少|すこ}しずつズレてきて、すれ{違|ちが}いが{起|お}こるのです。
（藤沢晃夫『「わかりやすい{教|おし}え{方|かた}」の{技術|ぎじゅつ}―「{教|おし}え{上手|じょうず}」になるための13のポイント』による）`,
      arti: `Kita cenderung merasa bahwa nilai-nilai dan akal sehat ilmiah tidak berubah bagi siapa pun dan di zaman mana pun. Namun, seperti bentuk awan, sekilas tampak diam padahal sebenarnya berubah perlahan. Karena berubah begitu lambat, banyak orang percaya bahwa awan tidak berubah, seperti gambar diam.

Setiap orang yakin bahwa awan yang kebetulan ia lihat di masa pertumbuhannya itulah "bentuk awan yang benar". Dengan begitu, gambaran awan di benak orang dari tiap generasi sedikit demi sedikit saling bergeser, dan terjadilah salah paham.
(Dari buku tentang teknik "cara mengajar yang mudah dipahami")`,
    },
    "8-4": {
      yomi: `データが{示|しめ}す{姿|すがた}は{光|ひかり}の{部分|ぶぶん}もあれば{影|かげ}の{部分|ぶぶん}もある。そのどちらか{一方|いっぽう}だけを{強調|きょうちょう}することは、{分|わ}かりやすさという{面|めん}はあるものの、{徒|いたずら}に{対立軸|たいりつじく}を{先鋭化|せんえいか}（{注|ちゅう}）させたり、{無用|むよう}の{混乱|こんらん}を{生|しょう}じさせる{危険性|きけんせい}がある。

これらをいちいち{意識|いしき}しているのは{大変|たいへん}であるが、{少|すく}なくともデータをやみくもに{信|しん}じてしまう{態度|たいど}だけはとるべきでない。データの{罠|わな}を{見分|みわ}ける{力|ちから}、すなわちデータリテラシーは、{多|おお}くの{人|ひと}にとって{必要|ひつよう}なものではあるが、{本来|ほんらい}は、{公平|こうへい}で{客観的|きゃっかんてき}な{報道|ほうどう}に{努|つと}めるべきメディアに{携|たずさ}わる{人間|にんげん}が、しっかりと{備|そな}えていなければならない{必須|ひっす}の{条件|じょうけん}である。
（{田村|たむら}{秀|しげる}『データの{罠|わな}―{世論|よろん}はこうしてつくられる』による）
（{注|ちゅう}）：{先鋭化|せんえいか}させる：ここでは、{目立|めだ}たせる`,
      arti: `Gambaran yang ditunjukkan data memiliki sisi terang dan sisi gelap. Menekankan salah satunya saja memang mudah dipahami, tetapi berisiko mempertajam (catatan) poros pertentangan tanpa guna atau menimbulkan kekacauan yang tidak perlu.

Menyadari semua ini satu per satu memang berat, tetapi setidaknya kita tidak boleh bersikap mempercayai data secara membabi buta. Kemampuan membedakan jebakan data, yaitu literasi data, memang dibutuhkan banyak orang, tetapi pada dasarnya merupakan syarat mutlak yang harus benar-benar dimiliki orang yang berkecimpung di media, yang seharusnya berupaya memberitakan secara adil dan objektif.
(Dari buku "Jebakan Data — Beginilah Opini Publik Dibentuk" karya Tamura Shigeru)
(Catatan) 先鋭化させる: di sini, menonjolkan`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `すでに{地理的|ちりてき}な{空白|くうはく}がなくなった{現在|げんざい}、{地理的|ちりてき}な{冒険|ぼうけん}や{探検|たんけん}といった{行為|こうい}は、{時間|じかん}が{経|た}つにつれどんどん{不可能|ふかのう}になってきている。ジャーナリストの{本多|ほんだ}{勝一|かついち}{氏|し}は、{冒険|ぼうけん}の{条件|じょうけん}として「{命|いのち}の{危険性|きけんせい}」と「{行為|こうい}の{主体性|しゅたいせい}」の{二|ふた}つをあげているが、{近代|きんだい}の{冒険|ぼうけん}は、その{後者|こうしゃ}が{重要|じゅうよう}だ。それはつまり{自己|じこ}{表現|ひょうげん}の{問題|もんだい}とも{密接|みっせつ}に{関|かか}わってくる。ここでいう{表現|ひょうげん}とは、{地図|ちず}{上|じょう}に{誰|だれ}もたどったことがない{軌跡|きせき}を{描|えが}くという{意味|いみ}である。これまでの{人類|じんるい}の{歩|あゆ}みを{俯瞰|ふかん}して（{注|ちゅう}1）、その{隙間|すきま}を{見|み}つけ、{自分|じぶん}なりの{方法|ほうほう}で{空白|くうはく}を{埋|う}めていく{行為|こうい}と{言|い}い{換|か}えることもできる。わかりやすいところでは、{登山|とざん}におけるバリエーション・ルートや、8000メートル{峰|ほう}（{注|ちゅう}2）を{無|む}{酸素|さんそ}で{登|のぼ}ることや、{厳冬期|げんとうき}にどこそこを{横断|おうだん}するとか、はじめて{大陸|たいりく}の{最高峰|さいこうほう}に{登|のぼ}るとか、そういうことだ。{未踏|みとう}（{注|ちゅう}3）の{地|ち}がなければ、{点|てん}と{点|てん}を{結|むす}んで{誰|だれ}もおこなっていないことをすればいい。そうした{点|てん}と{点|てん}を{結|むす}ぶのが{厳|きび}しい{土地|とち}、アクセスの{難|むずか}しい{山野|さんや}、{思|おも}いもよらないルールを{形成|けいせい}するなら、なおさらその{注目度|ちゅうもくど}は{増|ま}していく。{冒険|ぼうけん}の{世界|せかい}には、{海|うみ}でも{山|やま}でも{空|そら}でも、そういう{志向|しこう}が{必|かなら}ずどこかに{存在|そんざい}している。{白紙|はくし}のキャンバス（{注|ちゅう}4）に{絵|え}を{描|か}くためには{表現力|ひょうげんりょく}が{必要|ひつよう}なように、{地理的|ちりてき}な{空白|くうはく}がなくなった{時代|じだい}を{生|い}きる{現代|げんだい}の{冒険家|ぼうけんか}たちは、そこに{特別|とくべつ}な{自分|じぶん}なりの{題材|だいざい}を{見|み}つけなくてはいけない。だからこそ{冒険家|ぼうけんか}はアーティストでもあるといえる。
（{石川|いしかわ}{直樹|なおき}『{最高|さいこう}の{冒険家|ぼうけんか}』による）
（{注|ちゅう}1）{俯瞰|ふかん}する：{全体|ぜんたい}を{眺|なが}める
（{注|ちゅう}2）8000メートル{峰|ほう}：8000メートル{級|きゅう}の{山|やま}
（{注|ちゅう}3）{未踏|みとう}：まだ{誰|だれ}も{足|あし}を{踏|ふ}み{入|い}れたことがないこと
（{注|ちゅう}4）キャンバス：{絵|え}を{描|か}くための{布地|ぬのじ}`,
      arti: `Kini, ketika tidak ada lagi ruang kosong secara geografis, tindakan seperti petualangan atau penjelajahan geografis semakin lama semakin mustahil. Jurnalis Honda Katsuichi menyebut dua syarat petualangan, yaitu "bahaya bagi nyawa" dan "kemandirian tindakan", dan dalam petualangan modern, yang terakhir itulah yang penting. Artinya, hal itu juga sangat berkaitan dengan persoalan ekspresi diri. Ekspresi di sini berarti menggambar jejak di peta yang belum pernah ditempuh siapa pun. Bisa juga diungkapkan sebagai tindakan memandang dari atas (catatan 1) seluruh perjalanan umat manusia selama ini, menemukan celahnya, lalu mengisi kekosongan itu dengan cara sendiri. Contoh yang mudah dipahami adalah rute variasi dalam pendakian gunung, mendaki puncak 8.000 meter (catatan 2) tanpa oksigen, menyeberangi suatu tempat di puncak musim dingin, atau pertama kali mendaki puncak tertinggi sebuah benua. Jika tidak ada lagi tanah yang belum dijamah (catatan 3), cukup hubungkan titik dengan titik dan lakukan sesuatu yang belum pernah dilakukan siapa pun. Jika titik-titik itu dihubungkan melalui tanah yang keras, pegunungan dan padang yang sulit diakses, sehingga membentuk rute yang tak terduga, perhatian terhadapnya akan makin besar. Dalam dunia petualangan, baik di laut, gunung, maupun udara, orientasi semacam itu pasti selalu ada di suatu tempat. Sama seperti menggambar di kanvas (catatan 4) kosong memerlukan daya ekspresi, para petualang masa kini yang hidup di zaman tanpa ruang kosong geografis harus menemukan tema khusus versi mereka sendiri di sana. Justru karena itulah petualang bisa dikatakan juga seorang seniman.
(Dari buku karya Ishikawa Naoki)
(Catatan 1) 俯瞰する: memandang keseluruhan
(Catatan 2) 8000メートル峰: gunung kelas 8.000 meter
(Catatan 3) 未踏: belum pernah diinjak siapa pun
(Catatan 4) キャンバス: kain untuk melukis`,
    },
    "9-2": {
      yomi: `{世界|せかい}の{食糧|しょくりょう}{供給|きょうきゅう}の{頭打|あたまう}ち（{注|ちゅう}1）、かつての{日本|にほん}と{同|おな}じように、{経済|けいざい}{成長|せいちょう}のために{農業|のうぎょう}を{衰退|すいたい}させ、{一方|いっぽう}では{食生活|しょくせいかつ}の{向上|こうじょう}を{図|はか}るアジアの{動|うご}きなど、{私|わたし}たちが{暮|く}らしている{輸入|ゆにゅう}{大国|たいこく}の{基盤|きばん}は{意外|いがい}に{脆|もろ}い。

{私|わたし}たちは、このへんで{食料|しょくりょう}の{危機|きき}{管理|かんり}{体制|たいせい}を{考|かんが}えておく{必要|ひつよう}があるのではないか。

{危機|きき}{管理|かんり}とは、いったんことが{起|お}きた{時|とき}に、{生産|せいさん}から{流通|りゅうつう}までをどうするか、{前|まえ}もって{体制|たいせい}{作|づく}りを{考|かんが}えておくことである。{体制|たいせい}を{制度|せいど}にしておかないと、{食糧|しょくりょう}{確保|かくほ}のためのある{程度|ていど}{強制力|きょうせいりょく}を{持|も}った{政策|せいさく}を{実施|じっし}することなど{不可能|ふかのう}である。{畑|はたけ}にイモ{類|るい}を{優先的|ゆうせんてき}に{植|う}えなければならない。{個人的|こじんてき}に{嫌|いや}だという{人|ひと}がいても、{国民|こくみん}が{最小限|さいしょうげん}の{栄養|えいよう}をとるために{協力|きょうりょく}してもらう{必要|ひつよう}がある。この{点|てん}を{制度化|せいどか}しておく{方|ほう}が{良|よ}いのではないか、ということである。

{平和|へいわ}な{時|とき}には、この{制度|せいど}は{眠|ねむ}らせておけばいい。いざという{時|とき}に（{注|ちゅう}2）{政府|せいふ}が{発動|はつどう}する（{注|ちゅう}3）のである。{普段|ふだん}は、{政府|せいふ}はなるべく{食料|しょくりょう}の{生産|せいさん}や{流通|りゅうつう}には{介入|かいにゅう}すべきではない。それぞれの{立場|たちば}の{人|ひと}たちが、{自由|じゆう}に{活動|かつどう}{出来|でき}るような{環境|かんきょう}を{整|ととの}えておく{役割|やくわり}だけでいい。しかし{何|なに}かの{時|とき}には、{食料|しょくりょう}{制度|せいど}に{責任|せきにん}を{持|も}つ{仕組|しく}みに{移行|いこう}するのである。{多|おお}くの{場合|ばあい}は、{異常|いじょう}{事態|じたい}が{過|す}ぎ{去|さ}るまでの{一時的|いちじてき}な{措置|そち}になるだろう。

（{中略|ちゅうりゃく}）
{食糧|しょくりょう}の{危機|きき}{管理|かんり}{体制|たいせい}とは、{非常|ひじょう}{事態|じたい}に{備|そな}えた{生産|せいさん}から{流通|りゅうつう}までの{仕組|しく}み{作|づく}りである。{発動|はつどう}する（{注|ちゅう}3）ことがないように{祈|いの}りながら、{制度|せいど}を{検討|けんとう}しておく{必要|ひつよう}があるのではないか。
（{中村|なかむら}{靖彦|やすひこ}『コンビニ　ファミレス　{回転|かいてん}{寿司|ずし}』による）
（{注|ちゅう}1）{頭打|あたまう}ち：{限界|げんかい}に{達|たっ}して、それ{以上|いじょう}に{伸|の}びなくなること
（{注|ちゅう}2）いざという{時|とき}に：{非常|ひじょう}{事態|じたい}の{起|お}こった{時|とき}に
（{注|ちゅう}3）{発動|はつどう}する：ここでは、{制度|せいど}を{実際|じっさい}に{使|つか}う`,
      arti: `Pasokan pangan dunia yang sudah mentok (catatan 1), gerakan di Asia yang — seperti Jepang dulu — melemahkan pertanian demi pertumbuhan ekonomi sambil di sisi lain berupaya meningkatkan pola makan, dan sebagainya: fondasi negara pengimpor besar tempat kita hidup ternyata rapuh.

Bukankah sudah saatnya kita memikirkan sistem manajemen krisis pangan?

Manajemen krisis adalah memikirkan sebelumnya penyusunan sistem: apa yang harus dilakukan dari produksi sampai distribusi jika sesuatu terjadi. Jika sistem itu tidak dijadikan aturan resmi, mustahil menjalankan kebijakan yang memiliki daya paksa tertentu untuk mengamankan pangan. Ladang harus diprioritaskan untuk ditanami umbi-umbian. Meski ada orang yang secara pribadi tidak mau, mereka perlu diminta bekerja sama agar rakyat mendapat gizi minimum. Maksudnya, bukankah lebih baik hal ini dijadikan aturan resmi?

Di masa damai, aturan ini cukup "ditidurkan". Pada saat genting (catatan 2), pemerintah memberlakukannya (catatan 3). Sehari-hari, pemerintah sebisa mungkin tidak boleh mencampuri produksi dan distribusi pangan. Perannya cukup menyiapkan lingkungan agar orang-orang di posisi masing-masing bisa beraktivitas dengan bebas. Namun saat terjadi sesuatu, beralih ke mekanisme di mana pemerintah bertanggung jawab atas sistem pangan. Dalam banyak kasus, itu akan menjadi tindakan sementara sampai keadaan darurat berlalu.

(dihilangkan)
Sistem manajemen krisis pangan adalah penyusunan mekanisme dari produksi sampai distribusi untuk menghadapi keadaan darurat. Bukankah perlu mempertimbangkan aturannya sambil berdoa agar aturan itu tidak perlu diberlakukan (catatan 3)?
(Dari buku karya Nakamura Yasuhiko)
(Catatan 1) 頭打ち: mencapai batas dan tidak bisa naik lagi
(Catatan 2) いざという時に: saat terjadi keadaan darurat
(Catatan 3) 発動する: di sini, benar-benar menggunakan aturan itu`,
    },
    "9-3": {
      yomi: `{日本|にほん}の{建築|けんちく}は{寿命|じゅみょう}が{短|みじか}いが、これは{木造|もくぞう}{自体|じたい}の{耐久性|たいきゅうせい}から{決|き}まるのではない。{木造|もくぞう}{建築|けんちく}でも{百年|ひゃくねん}や{二百年|にひゃくねん}は{持|も}つ。{千年|せんねん}{以上|いじょう}{持|も}つことも{可能|かのう}である。しかし、{構造|こうぞう}{部材|ぶざい}（{注|ちゅう}1）のメンテナンスが{必要|ひつよう}なので{耐久性|たいきゅうせい}を{考|かんが}えると{大材|たいざい}（{注|ちゅう}2）を{用|もち}いたほうが{良|よ}い。しかし、{城郭|じょうかく}（{注|ちゅう}3）や{宮殿|きゅうでん}、{館|やかた}、{寺院|じいん}{仏閣|ぶっかく}（{注|ちゅう}4）の{類|たぐい}でないとなかなか{大材|たいざい}を{用|もち}いることができない。{入手|にゅうしゅ}も{難|むずか}しいし{加工|かこう}にも{手間暇|てまひま}（{注|ちゅう}5）がかかる。また、{一般的|いっぱんてき}に{木造|もくぞう}{建築|けんちく}は{火事|かじ}や{地震|じしん}で{失|うしな}われることも{少|すく}なくない。

{日本人|にほんじん}は{白木|しらき}の{新|あたら}しい{建物|たてもの}を{愛|あい}したが、{時|とき}が{経|た}つと{木|き}の{表面|ひょうめん}が{黒|くろ}ずんでくる。そこで、{余裕|よゆう}がある{者|もの}は、{地震|じしん}や{火災|かさい}に{遭|あ}った{時|とき}は{勿論|もちろん}、ある{程度|ていど}{老朽化|ろうきゅうか}してくると{建|た}て{直|なお}し、{周囲|しゅうい}はその{建|た}て{主|ぬし}のことを「{甲斐性|かいしょう}がある」（{注|ちゅう}6）といって{褒|ほ}め{称|たた}えた。しかし、{建|た}て{直|なお}すと{言|い}っても、{大|おお}まかにいえばもともと{同|おな}じものが{建|た}つ。{勿論|もちろん}{小|ちい}さくなったり{大|おお}きくなったり{間取|まど}りが{変|か}わったりするが{見|み}た{目|め}に{大差|たいさ}がない。そこで、{街並|まちな}みや{風景|ふうけい}は{長期|ちょうき}にわたって{維持|いじ}される。しかも{木材|もくざい}はリユース（{注|ちゅう}7）、リサイクルされた。

これは、{日本|にほん}{独特|どくとく}の{更新|こうしん}の{文化|ぶんか}と{呼|よ}んでも{良|よ}い。この{典型|てんけい}が{伊勢|いせ}{神宮|じんぐう}である。{二十年|にじゅうねん}ごとに{隣|とな}り{合|あ}う{敷地|しきち}に{交互|こうご}に{建|た}て{直|なお}されるが、{建|た}てられるものは{全|まった}く{同|おな}じである。{建物|たてもの}を{更新|こうしん}するためには、{木材|もくざい}が{必要|ひつよう}であり、{樹木|じゅもく}も{植林|しょくりん}によって{更新|こうしん}される。{若木|わかぎ}のほうが{二酸化|にさんか}{炭素|たんそ}の{吸収|きゅうしゅう}{能力|のうりょく}が{優|すぐ}れているから、{若木|わかぎ}への{更新|こうしん}は{環境|かんきょう}{上|じょう}も{評価|ひょうか}できる。{同時|どうじ}に{職人|しょくにん}{技術|ぎじゅつ}も{更新|こうしん}される。{更新|こうしん}は{環境|かんきょう}に{優|やさ}しく、{人々|ひとびと}に{仕事|しごと}を{与|あた}え、ゆっくりとした{変化|へんか}をもたらす{木|き}の{国|くに}の{優|すぐ}れた{文化|ぶんか}である。
（{小西|こにし}{敏正|としまさ}『{平成|へいせい}　{日本|にほん}らしさ{宣言|せんげん}』による）
（{注|ちゅう}1）{構造|こうぞう}{部材|ぶざい}：{建物|たてもの}に{加|くわ}わる{力|ちから}を{支|ささ}える{材料|ざいりょう}（{例|たと}えば、{柱|はしら}）
（{注|ちゅう}2）{大材|たいざい}：ここでは、{長期|ちょうき}の{使用|しよう}に{耐|た}える{大|おお}きな{木材|もくざい}
（{注|ちゅう}3）{城郭|じょうかく}：{城|しろ}とその{外側|そとがわ}の{囲|かこ}い
（{注|ちゅう}4）{仏閣|ぶっかく}：{寺|てら}の{建物|たてもの}
（{注|ちゅう}5）{手間暇|てまひま}：{労力|ろうりょく}と{時間|じかん}
（{注|ちゅう}6）{甲斐性|かいしょう}がある：ここでは、{何|なに}かを{行|おこな}う{経済力|けいざいりょく}があって{立派|りっぱ}だ
（{注|ちゅう}7）リユース：{再|さい}{使用|しよう}`,
      arti: `Bangunan Jepang berumur pendek, tetapi hal ini tidak ditentukan oleh daya tahan kayu itu sendiri. Bangunan kayu pun bisa bertahan seratus atau dua ratus tahun. Bertahan lebih dari seribu tahun pun mungkin. Namun, karena komponen struktur (catatan 1) perlu dirawat, dari segi daya tahan lebih baik memakai kayu besar (catatan 2). Akan tetapi, kecuali untuk benteng (catatan 3), istana, rumah besar, kuil dan bangunan vihara (catatan 4), kayu besar sulit digunakan. Sulit didapat, dan pengolahannya memakan tenaga dan waktu (catatan 5). Selain itu, pada umumnya bangunan kayu juga tidak jarang hilang karena kebakaran atau gempa.

Orang Jepang mencintai bangunan baru dari kayu polos, tetapi seiring waktu permukaan kayu menghitam. Karena itu, orang yang mampu membangun ulang bukan hanya saat terkena gempa atau kebakaran, tetapi juga ketika bangunan sudah agak lapuk, dan orang di sekitarnya memuji pemiliknya sebagai orang yang "kaigaishō ga aru" (catatan 6). Namun, meski disebut membangun ulang, secara garis besar yang berdiri adalah bangunan yang sama seperti semula. Tentu ada yang menjadi lebih kecil atau lebih besar, atau tata ruangnya berubah, tetapi secara tampilan tidak banyak berbeda. Karena itu, deretan kota dan pemandangan terjaga dalam jangka panjang. Terlebih lagi, kayunya dipakai ulang (catatan 7) dan didaur ulang.

Ini boleh disebut budaya pembaruan yang khas Jepang. Contoh khasnya adalah Kuil Ise. Setiap dua puluh tahun kuil itu dibangun ulang secara bergantian di lahan yang bersebelahan, dan yang dibangun persis sama. Untuk memperbarui bangunan diperlukan kayu, dan pepohonan pun diperbarui melalui penanaman. Karena pohon muda lebih baik dalam menyerap karbon dioksida, pembaruan ke pohon muda juga patut dihargai dari segi lingkungan. Pada saat yang sama, keterampilan para pengrajin pun diperbarui. Pembaruan adalah budaya unggul negeri kayu yang ramah lingkungan, memberi pekerjaan kepada orang-orang, dan membawa perubahan yang perlahan.
(Dari buku karya Konishi Toshimasa)
(Catatan 1) 構造部材: bahan yang menopang gaya yang bekerja pada bangunan (misalnya tiang)
(Catatan 2) 大材: di sini, kayu besar yang tahan dipakai lama
(Catatan 3) 城郭: benteng beserta pagar di luarnya
(Catatan 4) 仏閣: bangunan kuil Buddha
(Catatan 5) 手間暇: tenaga dan waktu
(Catatan 6) 甲斐性がある: di sini, punya kemampuan ekonomi untuk melakukan sesuatu dan patut dipuji
(Catatan 7) リユース: pemakaian ulang`,
    },

    // ── 問題10：サルの訓練実験 ──
    "10": {
      yomi: `{心|こころ}は{目|め}に{見|み}えない。だから{客観的|きゃっかんてき}に{知|し}ることはできない。ならば、{心|こころ}とか{意識|いしき}なんて{面倒|めんどう}なことを{考|かんが}えるよりも、{目|め}で{見|み}える、{定規|じょうぎ}で{測|はか}れるものだけを{考|かんが}えることにしよう。そう{考|かんが}える{人|ひと}がいても{不思議|ふしぎ}ではない。

{行動|こうどう}{主義|しゅぎ}{心理学|しんりがく}（{注|ちゅう}1）と{呼|よ}ばれるこの{流派|りゅうは}では、サルやネズミなどにレバー（{注|ちゅう}2）{押|お}しなどの{行動|こうどう}を{訓練|くんれん}し、その{行動|こうどう}や{歪|ゆが}みを{観察|かんさつ}していく。しかし{動物|どうぶつ}に「まずレバーを{押|お}してみてください」と{頼|たの}むわけにはいかない。{例|たと}えば、{初|はじ}めて{実験室|じっけんしつ}に{連|つ}れてこられたサルは、そもそもレバーにさえ{気|き}づかないからだ。

では、サルにどうやってレバーを{押|お}させるのか？ポイントは{二|ふた}つ。ひたすら{待|ま}つ。そして{少|すこ}しずつ{目標|もくひょう}に{近|ちか}づける。

{例|たと}えば、サルが{少|すこ}しでもチラッとレバーを{見|み}たとする。そこですかさずエサを{与|あた}える。これを{何度|なんど}か{繰|く}り{返|かえ}すと、サルの{注意|ちゅうい}が{次第|しだい}にレバーに{向|む}いてくる。ここでいったんエサやりを{止|と}める。するとサルは、うろつきまわったりキョロキョロしたり、{色々|いろいろ}なことを{試|ため}し{始|はじ}める。ここが{我慢|がまん}のしどころ。{試行|しこう}{錯誤|さくご}の{中|なか}、サルの{手|て}がレバーに{伸|の}びるのをじっと{待|ま}つ。そして{手|て}が{少|すこ}しでも{伸|の}びればすぐエサを{与|あた}える。

こうして、{適切|てきせつ}なタイミングでエサをやりながら、{少|すこ}しずつ{目標|もくひょう}の{行動|こうどう}に{近|ちか}づけていくのである。
{私|わたし}はこのやり{方|かた}を、{大学院生|だいがくいんせい}の{頃|ころ}、{助手|じょしゅ}の{先生|せんせい}に{教|おそ}わった。それは{教科書|きょうかしょ}に{書|か}いてあるとおりのことだったが、{実際|じっさい}にやってみると、それは{衝撃|しょうげき}の{体験|たいけん}だった。

エサやりのボタンを{右手|みぎて}に{持|も}ち、{白黒|しろくろ}のモニターごしに、サルの{行動|こうどう}をじっと{見|み}つめる。{私|わたし}はエサに{念|ねん}じていた。「{振|ふ}り{向|む}け、レバーに{振|ふ}り{向|む}いて」。{伝|つた}わらない{思|おも}いを{伝|つた}えた。ふいにサルがレバーに{近|ちか}づく。と、すかさず「エサやり」というメッセージを{送|おく}る。すなわちコミュニケーションであった。

この{訓練|くんれん}をずっとやっていると、{徐々|じょじょ}にサルの{気持|きも}ちがつかめてくる。そして、{気持|きも}ちがつかめてくると、{訓練|くんれん}は{格段|かくだん}に{早|はや}く{進|すす}む。{行動|こうどう}だけを{見|み}よといいながら、その{実|じつ}（{注|ちゅう}4）、うまく{訓練|くんれん}するにはサルの{心|こころ}がつかめなければならないのだ。{心|こころ}は{行動|こうどう}からしかつかめない。しかしそれがつかめたとき、{手|て}の{中|なか}にサルの{心|こころ}があるように{思|おも}えてくる。そのとき{私|わたし}は、{学問|がくもん}の{本当|ほんとう}に{大事|だいじ}なことは、{教科書|きょうかしょ}には{書|か}いていないことを{知|し}ったのだった。
（{金沢|かなざわ}{創|はじめ}『{心体|しんたい}{観測|かんそく}』2009{年|ねん}2{月|がつ}8{日|か}{付|づけ}{朝日|あさひ}{新聞|しんぶん}{日曜|にちよう}{版|ばん}による）
（{注|ちゅう}1）{行動|こうどう}{主義|しゅぎ}{心理学|しんりがく}：{人間|にんげん}や{動物|どうぶつ}などの{行動|こうどう}を{観察|かんさつ}して{研究|けんきゅう}する{学問|がくもん}。
（{注|ちゅう}2）レバー：{機器|きき}を{操作|そうさ}するときにつかんで{動|うご}かす{棒|ぼう}。
（{注|ちゅう}4）その{実|じつ}：{実際|じっさい}には。`,
      arti: `Jiwa tidak terlihat oleh mata. Karena itu, kita tidak bisa mengetahuinya secara objektif. Kalau begitu, daripada memikirkan hal merepotkan seperti jiwa atau kesadaran, mari pikirkan hanya hal yang terlihat mata dan bisa diukur dengan penggaris. Tidak aneh jika ada orang yang berpikir begitu.

Dalam aliran yang disebut psikologi behaviorisme (catatan 1) ini, monyet, tikus, dan lainnya dilatih melakukan perilaku seperti menekan tuas (catatan 2), lalu perilaku dan penyimpangannya diamati. Namun, kita tidak bisa meminta hewan, "Silakan coba tekan tuasnya dulu." Misalnya, monyet yang baru pertama kali dibawa ke laboratorium bahkan tidak menyadari keberadaan tuas.

Lalu, bagaimana cara membuat monyet menekan tuas? Ada dua kuncinya. Menunggu dengan sabar. Dan mendekatkan sedikit demi sedikit ke sasaran.

Misalnya, monyet sedikit saja melirik tuas. Saat itu juga langsung diberi makanan. Setelah diulang beberapa kali, perhatian monyet berangsur-angsur tertuju ke tuas. Di sini pemberian makanan dihentikan dulu. Maka monyet mulai mencoba berbagai hal: berkeliaran, menoleh ke sana kemari. Di sinilah saatnya bersabar. Di tengah coba-coba itu, kita menunggu dengan tenang sampai tangan monyet terulur ke tuas. Lalu begitu tangannya terulur sedikit saja, langsung diberi makanan.

Dengan begini, sambil memberi makanan pada waktu yang tepat, perilakunya didekatkan sedikit demi sedikit ke perilaku sasaran.
Saya diajari cara ini oleh dosen asisten ketika masih mahasiswa pascasarjana. Itu sama persis dengan yang tertulis di buku pelajaran, tetapi ketika benar-benar mencobanya, itu menjadi pengalaman yang mengejutkan.

Sambil memegang tombol pemberi makanan di tangan kanan, saya terus menatap perilaku monyet melalui monitor hitam-putih. Saya memanjatkan harapan lewat makanan itu: "Menolehlah, menolehlah ke tuas." Saya menyampaikan perasaan yang tak bisa tersampaikan. Tiba-tiba monyet mendekati tuas. Saat itu juga saya mengirim pesan "pemberian makanan". Dengan kata lain, itu adalah komunikasi.

Jika terus melakukan pelatihan ini, sedikit demi sedikit kita mulai bisa menangkap perasaan monyet. Dan begitu perasaannya tertangkap, pelatihan berjalan jauh lebih cepat. Meski dikatakan hanya perilaku yang harus dilihat, sebenarnya (catatan 4), untuk melatih dengan baik kita harus bisa menangkap hati monyet. Hati hanya bisa ditangkap dari perilaku. Tetapi ketika berhasil menangkapnya, rasanya hati monyet itu ada di genggaman tangan. Saat itulah saya tahu bahwa hal yang benar-benar penting dalam ilmu pengetahuan tidak tertulis di buku pelajaran.
(Dari kolom karya Kanazawa Hajime, harian Asahi edisi Minggu, 8 Februari 2009)
(Catatan 1) 行動主義心理学: ilmu yang meneliti dengan mengamati perilaku manusia, hewan, dan lainnya.
(Catatan 2) レバー: batang yang digenggam dan digerakkan untuk mengoperasikan alat.
(Catatan 4) その実: sebenarnya.`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
テレビや{新聞|しんぶん}などで{年々|ねんねん}{深刻化|しんこくか}するゴミ{問題|もんだい}が{取|と}り{上|あ}げられている。{例|たと}えば{一般的|いっぱんてき}な{家庭|かてい}ごみとして、{生|なま}ゴミのほかにも{食品|しょくひん}{容器|ようき}や{商品|しょうひん}などの{過剰|かじょう}{包装|ほうそう}による{廃棄物|はいきぶつ}が{多|おお}く{見|み}られるという{報告|ほうこく}がある。{最近|さいきん}では{指定|してい}されたゴミ{袋|ぶくろ}を{買|か}ってごみを{捨|す}てたり、{客|きゃく}に{買|か}い{物|もの}{袋|ぶくろ}の{持参|じさん}を{促|うなが}したりする{動|うご}きがあるが、ごみの{量|りょう}に{変化|へんか}は{見|み}られない。

もし、{自治体|じちたい}が{家庭|かてい}ごみ{一個|いっこ}の{収集|しゅうしゅう}につき○○{円|えん}と{有料化|ゆうりょうか}すればごみは{減|へ}るかもしれない。ごみ{自体|じたい}の{廃棄|はいき}にもお{金|かね}がかかるようになれば、{誰|だれ}もごみを{出|だ}す{前|まえ}に{考|かんが}えるようになるだろう。そうなれば{消費者|しょうひしゃ}は{不必要|ふひつよう}な{包装|ほうそう}を{断|ことわ}り、{使用|しよう}{可能|かのう}な{物|もの}まで{捨|す}ててしまうことも{減少|げんしょう}するのではないだろうか。

【{意見|いけん} B】
{現代|げんだい}{社会|しゃかい}は{数十年|すうじゅうねん}{前|まえ}と{比較|ひかく}にならないほど{便利|べんり}な{生活|せいかつ}が{可能|かのう}になった。しかし、{不要|ふよう}になった{物|もの}を{再|さい}{利用|りよう}することよりも{便利|べんり}さを{優先|ゆうせん}してきた{結果|けっか}、{家庭|かてい}ごみは{増|ふ}え{続|つづ}ける{一方|いっぽう}だ。

{家庭|かてい}ごみを{減量|げんりょう}するため、{現在|げんざい}、ゴミ{袋|ぶくろ}を{有料化|ゆうりょうか}し{消費者|しょうひしゃ}が{処理|しょり}{費用|ひよう}の{一部|いちぶ}を{負担|ふたん}することになっている。しかし、それだけでは{不十分|ふじゅうぶん}であり、{所定|しょてい}の{場所|ばしょ}{以外|いがい}でのゴミの{収集|しゅうしゅう}にかかる{費用|ひよう}を{消費者|しょうひしゃ}に{負担|ふたん}させようという{意見|いけん}も{出|で}ているが、そうなればごみを{所定|しょてい}{以外|いがい}の{所|ところ}に{隠|かく}れて{捨|す}てるおそれも{出|で}てくる。このような{問題|もんだい}を{解決|かいけつ}せずに{安易|あんい}にこれを{実行|じっこう}に{移|うつ}すのには{賛成|さんせい}しかねる。

{物|もの}が{生産|せいさん}され、{消費者|しょうひしゃ}が{購入|こうにゅう}し、{不要|ふよう}なものは{廃棄|はいき}されごみになるという{循環|じゅんかん}を{考|かんが}えると、{新|あたら}しい{製品|せいひん}を{次々|つぎつぎ}と{作|つく}りだす{生産者|せいさんしゃ}も、それに{慣|な}れ{切|き}ってしまった{消費者|しょうひしゃ}も{便利|べんり}さに{対|たい}する{意識|いしき}を{変|か}える{必要|ひつよう}があるのではないだろうか。`,
      arti: `【Pendapat A】
Di televisi, koran, dan media lain, masalah sampah yang kian serius dari tahun ke tahun sering diangkat. Misalnya, ada laporan bahwa sebagai sampah rumah tangga umum, selain sampah dapur juga banyak terlihat limbah dari kemasan berlebihan pada wadah makanan, barang dagangan, dan sebagainya. Belakangan ada gerakan seperti membuang sampah dengan membeli kantong sampah yang ditentukan, atau mendorong pembeli membawa tas belanja sendiri, tetapi jumlah sampah tidak berubah.

Seandainya pemerintah daerah mengenakan biaya ○○ yen per kantong sampah rumah tangga yang dikumpulkan, mungkin sampah akan berkurang. Jika membuang sampah pun memerlukan uang, setiap orang akan berpikir dulu sebelum membuang sampah. Jika begitu, bukankah konsumen akan menolak kemasan yang tidak perlu, dan kebiasaan membuang barang yang masih bisa dipakai pun akan berkurang?

【Pendapat B】
Masyarakat modern kini bisa menikmati kehidupan yang jauh lebih praktis dibandingkan beberapa puluh tahun lalu. Namun, akibat lebih mengutamakan kepraktisan daripada memakai ulang barang yang tidak terpakai, sampah rumah tangga terus saja bertambah.

Untuk mengurangi sampah rumah tangga, saat ini kantong sampah dikenai biaya sehingga konsumen menanggung sebagian biaya pengolahan. Namun, itu saja tidak cukup, dan muncul pula pendapat agar konsumen dibebani biaya pengumpulan sampah di luar tempat yang ditentukan. Tetapi jika begitu, muncul pula risiko orang membuang sampah diam-diam di luar tempat yang ditentukan. Saya sulit menyetujui jika hal ini dijalankan begitu saja tanpa menyelesaikan masalah seperti itu.

Jika memikirkan siklus di mana barang diproduksi, dibeli konsumen, lalu yang tidak diperlukan dibuang menjadi sampah, bukankah baik produsen yang terus-menerus menciptakan produk baru maupun konsumen yang sudah terlalu terbiasa dengan hal itu perlu mengubah kesadaran mereka terhadap kepraktisan?`,
    },

    // ── 問題12：メディア力と情報占有率 ──
    "12": {
      yomi: `{例|たと}えば、3{年間|ねんかん}ずっとノーミスでやってきた{論田|ろんだ}くんが、はじめてミスを{出|だ}した。

3{年|ねん}{前|まえ}からずっとその{仕事|しごと}ぶりを{観|み}てきた{上司|じょうし}と、{異動|いどう}していきなり{論田|ろんだ}くんのミスに{出|で}くわした{上司|じょうし}と、{論田|ろんだ}くんへの{印象|いんしょう}は{同|おな}じだろうか？

{両者|りょうしゃ}のミスの「{情報|じょうほう}{占有率|せんゆうりつ}」が{違|ちが}う。つまり、3{年間|ねんかん}のつきあいの{中|なか}で、ミスが{占|し}める{割合|わりあい}と、たった1{回|かい}{初|はじ}めて{論田|ろんだ}くんと{接|せっ}した{中|なか}で、ミスが{占|し}める{割合|わりあい}だ。

{相手|あいて}は、あなたが{過去|かこ}からずっと{積|つ}み{上|あ}げてきたすべての{情報|じょうほう}で、あなたを{判断|はんだん}するのではない。{結局|けっきょく}は、そのとき{相手|あいて}が{持|も}っている{情報|じょうほう}だけで{判断|はんだん}される。その{中|なか}で、いい{情報|じょうほう}の{占|し}める{割合|わりあい}が{多|おお}ければ「いい{人|ひと}」となる。

あなたが「{優|やさ}しい{人|ひと}」で10{年間|ねんかん}{怒|おこ}ったことがなかったとしても、10{年|ねん}ぶりに{怒|おこ}ったとき、たまたまでくわした{初対面|しょたいめん}の{相手|あいて}にとっては、それが100％だ。あなたを「{恐|こわ}い{人|ひと}」だと{思|おも}う。

{自分|じぶん}にふさわしい「メディア{力|りょく}」を{相手|あいて}の{中|なか}に{刻|きざ}むために、ちょっと「{情報|じょうほう}{占有率|せんゆうりつ}」を{意識|いしき}してみるといい。

コミュニケーションでは、{出会|であ}いからはじまって、{相手|あいて}から{見|み}たあなたの「メディア{力|りょく}」が{決|き}まるまでの{間|あいだ}が{肝心|かんじん}だ。つまり、{初|はじ}めの{方|ほう}が{慎重|しんちょう}さがいる。ここで、かっこつけるのでもなく、でも、あなた{以下|いか}にもならず、{等身大|とうしんだい}（{注|ちゅう}1）のあなたの{良|よ}さが{伝|つた}わるのが{理想|りそう}だ。

いつも{質|しつ}の{高|たか}い{仕事|しごと}をしているなら、はじめての{仕事|しごと}{先|さき}に{対|たい}して、{決|けっ}していつもの{質|しつ}を{落|お}としてはいけない。ふだん{静|しず}かな{人|ひと}なら、{初対面|しょたいめん}の{相手|あいて}にも、{奇|き}をてらったり（{注|ちゅう}2）せず、{普段|ふだん}どおり{静|しず}かにしていればいい。{自分|じぶん}にうそのないふるまいをする、ということは、{初対面|しょたいめん}の{相手|あいて}にこそ{大切|たいせつ}だ。

さて、ここで{問題|もんだい}なのは、ふだんでも{穏|おだ}やかなあなたが、その{日|ひ}はたまたま{嫌|いや}なことが{重|かさ}なり、{攻撃的|こうげきてき}になっていそうという{場合|ばあい}だ。{自分|じぶん}にうそのないということで、{相手|あいて}にきついことを{言|い}ってしまったらどうだろう。あなたにとっては、{年|ねん}に1{回|かい}の、「たまたま{不機嫌|ふきげん}な{日|ひ}」でも、{相手|あいて}にとっては、あなたに{関|かん}する{情報|じょうほう}の100％になる。

{初対面|しょたいめん}の{相手|あいて}、まだ{付|つ}き{合|あ}いの{浅|あさ}い{相手|あいて}には、すこし{慎重|しんちょう}になって{考|かんが}えてほしい。

{日|ひ}ごろ99％{穏|おだ}やかなあなたなら、1％の{異常|いじょう}よりも、いつもその{穏|おだ}やかさを{伝|つた}えるほうが、{結局|けっきょく}は、{正直|しょうじき}な{姿|すがた}を{伝|つた}えている。{相手|あいて}の{中|なか}に、あなたの{実像|じつぞう}に{近|ちか}い「メディア{力|りょく}」が{形成|けいせい}されるからだ。{初対面|しょたいめん}の{相手|あいて}にこそ、{平常心|へいじょうしん}であること、{普段|ふだん}どおりにやることが{大切|たいせつ}だ。
（{山田|やまだ}ズーニー『あなたはなぜ「{通|つう}じない」のか』による）
（{注|ちゅう}1）{等身大|とうしんだい}の：{誇張|こちょう}のない
（{注|ちゅう}2）{奇|き}をてらう：{変|か}わったことをして、{他人|たにん}の{気|き}をひこうとする`,
      arti: `Misalnya, Ronda-kun yang selama 3 tahun bekerja tanpa kesalahan, untuk pertama kalinya membuat kesalahan.

Apakah kesan terhadap Ronda-kun akan sama antara atasan yang sudah mengamati cara kerjanya sejak 3 tahun lalu, dan atasan yang baru dipindahkan lalu langsung mendapati kesalahan Ronda-kun?

"Tingkat penguasaan informasi" kesalahan itu berbeda bagi keduanya. Artinya, proporsi kesalahan dalam hubungan selama 3 tahun, dan proporsi kesalahan dalam satu kali pertemuan pertama dengan Ronda-kun.

Orang lain tidak menilai Anda dari seluruh informasi yang telah Anda kumpulkan sejak dulu. Pada akhirnya, Anda dinilai hanya dari informasi yang dimiliki orang itu saat itu. Di antara informasi itu, jika proporsi informasi baiknya besar, Anda menjadi "orang baik".

Meskipun Anda "orang yang baik hati" dan tidak pernah marah selama 10 tahun, ketika Anda marah untuk pertama kalinya setelah 10 tahun, bagi orang yang kebetulan baru pertama kali bertemu Anda saat itu, itulah 100%-nya. Ia akan menganggap Anda "orang yang menakutkan".

Agar "daya media" yang sesuai dengan diri Anda terukir di benak orang lain, ada baiknya sedikit menyadari "tingkat penguasaan informasi".

Dalam komunikasi, yang terpenting adalah masa sejak pertemuan pertama sampai "daya media" Anda di mata orang itu terbentuk. Artinya, di awal-awal diperlukan kehati-hatian. Idealnya, di sini Anda tidak bergaya berlebihan, tetapi juga tidak tampil di bawah diri Anda, sehingga kelebihan Anda yang apa adanya (catatan 1) tersampaikan.

Jika Anda selalu bekerja dengan kualitas tinggi, jangan sekali-kali menurunkan kualitas biasa Anda terhadap klien baru. Jika sehari-hari Anda pendiam, terhadap orang yang baru ditemui pun cukup tetap tenang seperti biasa, tanpa berusaha tampil aneh untuk menarik perhatian (catatan 2). Berperilaku jujur pada diri sendiri justru penting terhadap orang yang baru pertama kali ditemui.

Nah, yang menjadi masalah di sini adalah kasus ketika Anda yang biasanya tenang, hari itu kebetulan mengalami banyak hal tidak menyenangkan sehingga cenderung agresif. Bagaimana jika, dengan alasan jujur pada diri sendiri, Anda mengucapkan kata-kata yang keras kepada orang itu? Bagi Anda itu hanyalah "hari yang kebetulan buruk" sekali setahun, tetapi bagi orang itu, itu menjadi 100% informasi tentang Anda.

Terhadap orang yang baru pertama kali ditemui atau yang hubungannya masih dangkal, saya harap Anda berpikir dengan sedikit lebih hati-hati.

Jika sehari-hari Anda 99% tenang, menyampaikan ketenangan itu selalu, alih-alih yang 1% tidak biasa, pada akhirnya justru menyampaikan sosok Anda yang jujur. Sebab "daya media" yang mendekati sosok asli Anda akan terbentuk di benak orang itu. Justru terhadap orang yang baru pertama kali ditemui, penting untuk tetap tenang dan bersikap seperti biasa.
(Dari buku karya Yamada Zoonie)
(Catatan 1) 等身大の: apa adanya, tanpa dilebih-lebihkan
(Catatan 2) 奇をてらう: melakukan hal aneh untuk menarik perhatian orang lain`,
    },

    // ── 問題13：外国人留学生奨学金募集要項 ──
    "13": {
      yomi: `{財団|ざいだん}{法人|ほうじん}　{日本|にほん}{留学生|りゅうがくせい}{奨学|しょうがく}{財団|ざいだん}
2011{年度|ねんど}　{外国人|がいこくじん}{留学生|りゅうがくせい}{奨学金|しょうがくきん}{募集|ぼしゅう}{要項|ようこう}

1．{募集|ぼしゅう}{人員|じんいん}　30{名|めい}

2．{奨学金|しょうがくきん}の{支給|しきゅう}{額|がく}・{支給|しきゅう}{方法|ほうほう}など
①{支給|しきゅう}{額|がく}
{大学院|だいがくいん}{修士|しゅうし}{課程|かてい}（{博士|はかせ}{前期|ぜんき}{課程|かてい}）　{月額|げつがく}100,000{円|えん}
{大学院|だいがくいん}{博士|はかせ}{課程|かてい}（{博士|はかせ}{後期|こうき}{課程|かてい}）　{月額|げつがく}120,000{円|えん}
②{支給|しきゅう}{期間|きかん}
{在籍|ざいせき}する{大学院|だいがくいん}での{正規|せいき}の{修学|しゅうがく}{期間|きかん}で、{最長|さいちょう}3{年間|ねんかん}
③{支給|しきゅう}{方法|ほうほう}
{毎月|まいつき}{一回|いっかい}{決|き}まった{日|ひ}に、{受給者|じゅきゅうしゃ}{本人|ほんにん}{名義|めいぎ}の{銀行|ぎんこう}{口座|こうざ}に{直接|ちょくせつ}{振|ふ}り{込|こ}む

3．{応募|おうぼ}{資格|しかく}
①{国籍|こくせき}・ビザについて
・{日本|にほん}{以外|いがい}の{国籍|こくせき}を{有|ゆう}し、{勉強|べんきょう}または{研究|けんきゅう}のための{在留|ざいりゅう}{資格|しかく}（{例|たと}えば{留学|りゅうがく}）で、{日本|にほん}に{入国|にゅうこく}した{者|もの}
②{対象|たいしょう}
・{日本|にほん}{国内|こくない}の{大学院|だいがくいん}で、{理学|りがく}、{工学|こうがく}、{農学|のうがく}の{分野|ぶんや}を{専攻|せんこう}している{者|もの}
・2010{年|ねん}4{月|がつ}{時点|じてん}で、{修士|しゅうし}{課程|かてい}の1{年次|ねんじ}、{博士|はかせ}{課程|かてい}の1{年次|ねんじ}か2{年次|ねんじ}に{在籍|ざいせき}している{者|もの}、または{修士|しゅうし}{課程|かてい}の2{年次|ねんじ}で、2011{年|ねん}4{月|がつ}に{博士|はかせ}{課程|かてい}{進学|しんがく}を{予定|よてい}している{者|もの}
・2009{年度|ねんど}の{大学院|だいがくいん}での{成績|せいせき}が2.8{以上|いじょう}（{満点|まんてん}3.0）で、{心身|しんしん}ともに{健康|けんこう}な{者|もの}
・2011{年度|ねんど}に、それぞれの{政府|せいふ}、{日本|にほん}{政府|せいふ}、{他|ほか}の{財団|ざいだん}などの{奨学金|しょうがくきん}{支給|しきゅう}を{受|う}けない{者|もの}

4．{応募|おうぼ}{方法|ほうほう}
①{提出|ていしゅつ}{書類|しょるい}（{指定|してい}のものは{当|とう}{財団|ざいだん}ホームページからダウンロードして{使用|しよう}すること）
・2011{年度|ねんど}{日本|にほん}{留学生|りゅうがくせい}{奨学|しょうがく}{財団|ざいだん}{奨学金|しょうがくきん}{応募|おうぼ}{用紙|ようし}（{指定|してい}のもの）
・{在学|ざいがく}{証明書|しょうめいしょ}と2009{年度|ねんど}の{成績|せいせき}が{分|わ}かる{成績|せいせき}{証明書|しょうめいしょ}
・{在籍|ざいせき}{大学院|だいがくいん}の{指導|しどう}{教授|きょうじゅ}からの{推薦書|すいせんしょ}
・{研究|けんきゅう}{計画書|けいかくしょ}（3000{字|じ}{以内|いない}、{書式|しょしき}は{自由|じゆう}）
②{応募|おうぼ}{締|し}め{切|き}り　2010{年|ねん}7{月|がつ}31{日|にち}{必着|ひっちゃく}
なお、{申請者|しんせいしゃ}が{直接|ちょくせつ}{応募|おうぼ}するのではなく、{必|かなら}ず{所属|しょぞく}の{大学院|だいがくいん}を{通|つう}じて{応募|おうぼ}すること

5．{選考|せんこう}{方法|ほうほう}
{応募|おうぼ}{書類|しょるい}、{面接|めんせつ}を{総合的|そうごうてき}に{判断|はんだん}して{決定|けってい}する

6．{決定|けってい}{通知|つうち}
2010{年|ねん}9{月|がつ}10{日|か}までに{所属|しょぞく}の{大学院|だいがくいん}を{通|つう}じ、{書面|しょめん}で{通知|つうち}する

7．{問|と}い{合|あ}わせ{先|さき}
{日本|にほん}{留学生|りゅうがくせい}{奨学|しょうがく}{財団|ざいだん}　http://www.ryugaku.or.jp/

【{応募|おうぼ}{候補者|こうほしゃ}{一覧|いちらん}】
| {名前|なまえ} | {国籍|こくせき} | 2010{年|ねん}4{月|がつ}{時点|じてん}の{在籍|ざいせき}{年次|ねんじ} | {専攻|せんこう} | {成績|せいせき} | 2011{年度|ねんど}{他|ほか}の{奨学金|しょうがくきん}の{受給|じゅきゅう}{予定|よてい}の{有無|うむ} |
|------|------|--------------------------|------|------|------------------------------------|
| ソムシリー | タイ | {修士|しゅうし}1{年|ねん} | {電子|でんし}{工学|こうがく} | 3.0 | {有|ゆう} |
| ワン | {中国|ちゅうごく} | {博士|はかせ}2{年|ねん} | {農学|のうがく} | 2.9 | {無|む} |
| アフマド | エジプト | {修士|しゅうし}1{年|ねん} | {法学|ほうがく} | 2.8 | {有|ゆう} |
| ジョン | アメリカ | {学部|がくぶ}4{年|ねん} | {理学|りがく} | 3.0 | {無|む} |`,
      arti: `Yayasan Beasiswa Pelajar Asing Jepang (badan hukum yayasan)
Panduan Penerimaan Beasiswa Pelajar Asing Tahun Ajaran 2011

1. Jumlah penerima: 30 orang

2. Besaran dan cara pemberian beasiswa, dll.
① Besaran
Program magister pascasarjana (program doktor tahap awal): 100.000 yen per bulan
Program doktor pascasarjana (program doktor tahap akhir): 120.000 yen per bulan
② Masa pemberian
Selama masa studi resmi di pascasarjana tempat terdaftar, paling lama 3 tahun
③ Cara pemberian
Ditransfer langsung sebulan sekali pada tanggal tertentu ke rekening bank atas nama penerima sendiri

3. Syarat pelamar
① Kewarganegaraan dan visa
・Berkewarganegaraan selain Jepang, dan masuk ke Jepang dengan status izin tinggal untuk belajar atau penelitian (misalnya pelajar)
② Sasaran
・Orang yang menempuh jurusan sains, teknik, atau pertanian di pascasarjana dalam negeri Jepang
・Per April 2010, terdaftar di tahun ke-1 program magister, tahun ke-1 atau ke-2 program doktor, atau tahun ke-2 program magister yang berencana melanjutkan ke program doktor pada April 2011
・Nilai di pascasarjana tahun ajaran 2009 minimal 2,8 (nilai maksimal 3,0), serta sehat jasmani dan rohani
・Tidak menerima beasiswa dari pemerintah negaranya, pemerintah Jepang, yayasan lain, dan sebagainya pada tahun ajaran 2011

4. Cara melamar
① Dokumen yang diserahkan (dokumen berformat khusus diunduh dari situs web yayasan ini)
・Formulir lamaran beasiswa Yayasan Beasiswa Pelajar Asing Jepang 2011 (format khusus)
・Surat keterangan terdaftar dan transkrip nilai tahun ajaran 2009
・Surat rekomendasi dari dosen pembimbing di pascasarjana tempat terdaftar
・Rencana penelitian (maksimal 3.000 karakter, format bebas)
② Batas akhir lamaran: harus sudah diterima paling lambat 31 Juli 2010
Pelamar tidak melamar secara langsung, tetapi wajib melamar melalui pascasarjana tempatnya terdaftar

5. Cara seleksi
Ditentukan dengan menilai berkas lamaran dan wawancara secara menyeluruh

6. Pemberitahuan keputusan
Diberitahukan secara tertulis melalui pascasarjana tempat terdaftar paling lambat 10 September 2010

7. Kontak
Yayasan Beasiswa Pelajar Asing Jepang http://www.ryugaku.or.jp/

【Daftar calon pelamar】
| Nama | Kewarganegaraan | Tingkat per April 2010 | Jurusan | Nilai | Rencana menerima beasiswa lain 2011 |
| Somsiri | Thailand | Magister thn 1 | Teknik elektro | 3,0 | Ada |
| Wang | Tiongkok | Doktor thn 2 | Pertanian | 2,9 | Tidak |
| Ahmad | Mesir | Magister thn 1 | Hukum | 2,8 | Ada |
| John | Amerika | Sarjana thn 4 | Sains | 3,0 | Tidak |`,
    },
  },
};
