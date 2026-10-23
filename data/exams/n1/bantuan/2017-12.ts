import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2017
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1712: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{新|あたら}しい{販売|はんばい}ルートを【{開拓|かいたく}】した。",
      arti: "Kami 【membuka/merintis】 jalur penjualan baru.",
    },
    2: {
      yomi: "{私|わたし}たちは、{町|まち}の【{復興|ふっこう}】に{全力|ぜんりょく}で{取|と}り{組|く}んでいます。",
      arti: "Kami berupaya sekuat tenaga untuk 【pemulihan/pembangunan kembali】 kota.",
    },
    3: {
      yomi: "{書類|しょるい}の{確認|かくにん}を【{怠|おこた}った】ために、{問題|もんだい}が{生|しょう}じた。",
      arti: "Masalah timbul karena 【lalai】 memeriksa dokumen.",
      optArti: ["berbohong, memalsukan", "ragu-ragu", "keliru", "lalai (怠った)"],
    },
    4: {
      yomi: "{本人|ほんにん}の【{了承|りょうしょう}】を{得|え}て、{写真|しゃしん}を{掲載|けいさい}した。",
      arti: "Kami memuat foto setelah mendapat 【persetujuan】 dari yang bersangkutan.",
    },
    5: {
      yomi: "あの{人|ひと}はいつもあれこれ【{指図|さしず}】をする。",
      arti: "Orang itu selalu 【memerintah/menyuruh-nyuruh】 macam-macam.",
    },
    6: {
      yomi: "{友人|ゆうじん}と{東京|とうきょう}の{名所|めいしょ}を【{巡|めぐ}り】、{旅|たび}を{満喫|まんきつ}した。",
      arti: "Saya 【berkeliling】 ke tempat-tempat terkenal di Tokyo bersama teman dan menikmati perjalanan sepuasnya.",
      optArti: ["mencari, menyelidiki", "menelusuri", "berkeliling (巡り)", "kegigihan, kelengketan"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{小型|こがた}カメラの{国内|こくない}{市場|しじょう}では、{弊社|へいしゃ}が20パーセントの（　）を{占|し}めています。",
      arti: "Di pasar kamera kecil dalam negeri, perusahaan kami menguasai (…) sebesar 20 persen.",
      optArti: ["kurs, tarif", "level", "peringkat", "pangsa (pasar)"],
    },
    8: {
      yomi: "{転勤|てんきん}の{意向|いこう}を{上司|じょうし}からそれとなく（　）されたが、{返答|へんとう}に{迷|まよ}っている。",
      arti: "Atasan secara halus (…) apakah saya mau dimutasi, tetapi saya bingung menjawabnya.",
      optYomi: ["{自問|じもん}", "{打診|だしん}", "{試行|しこう}", "{探索|たんさく}"],
      optArti: ["bertanya pada diri sendiri", "menjajaki (pendapat)", "uji coba", "penjelajahan, pencarian"],
    },
    9: {
      yomi: "{新|あたら}しい{上司|じょうし}は、{元|もと}{警察官|けいさつかん}という（　）の{持|も}ち{主|ぬし}だ。",
      arti: "Atasan baru saya memiliki (…) sebagai mantan polisi.",
      optYomi: ["{由来|ゆらい}", "{経路|けいろ}", "{経歴|けいれき}", "{従来|じゅうらい}"],
      optArti: ["asal-usul", "rute, jalur", "riwayat karier", "selama ini, konvensional"],
    },
    10: {
      yomi: "{布|ぬの}のバッグは{水|みず}が{染|し}み{込|こ}みやすいが、このバッグは{水|みず}を（　）{素材|そざい}で{作|つく}られているので、{雨|あめ}の{日|ひ}も{安心|あんしん}だ。",
      arti: "Tas kain mudah kemasukan air, tetapi tas ini dibuat dari bahan yang (…) air, jadi aman di hari hujan.",
      optArti: ["menolak (memantulkan) air", "membelokkan, mengalihkan", "menghindari", "menolak (permintaan)"],
    },
    11: {
      yomi: "{今回|こんかい}の{活動|かつどう}の{趣旨|しゅし}は、この{団体|だんたい}の{設立|せつりつ}{目的|もくてき}から{大|おお}きく（　）している。",
      arti: "Maksud kegiatan kali ini sangat (…) dari tujuan pendirian organisasi ini.",
      optYomi: ["{脱退|だったい}", "{逸脱|いつだつ}", "{分散|ぶんさん}", "{拡散|かくさん}"],
      optArti: ["keluar (dari keanggotaan)", "menyimpang", "tersebar, terpencar", "menyebar luas"],
    },
    12: {
      yomi: "インターネットを{使|つか}えば、{様々|さまざま}な{情報|じょうほう}を（　）{簡単|かんたん}に{入手|にゅうしゅ}できる。",
      arti: "Dengan internet, berbagai informasi bisa didapat dengan (…) mudah.",
      optArti: ["sengaja, berani", "lebih baik sekalian", "setidaknya", "sangat (mudah)"],
    },
    13: {
      yomi: "{河原|かわら}の{石|いし}は{形|かたち}も{大|おお}きさも（　）で、{同|おな}じものが{一|ひと}つもないように{見|み}えた。",
      arti: "Batu-batu di tepi sungai bentuk dan ukurannya (…), tampak tidak ada satu pun yang sama.",
      optArti: ["bergulingan, banyak berserakan", "beragam, berbeda-beda", "goyah", "licin berlendir"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{松本氏|まつもとし}は{自身|じしん}のブログで【{抱負|ほうふ}】を{述|の}べていた。",
      arti: "Matsumoto menyampaikan 【cita-cita/tekadnya】 di blognya.",
      optYomi: ["{見解|けんかい}", "{感謝|かんしゃ}", "{反省|はんせい}", "{決意|けつい}"],
      optArti: ["pandangan", "rasa terima kasih", "refleksi diri", "tekad"],
    },
    15: {
      yomi: "あのころは、{暮|く}らしに【ゆとり】があった。",
      arti: "Waktu itu kehidupan kami 【longgar/berkecukupan】.",
      optYomi: ["{目標|もくひょう}", "{活気|かっき}", "{余裕|よゆう}", "{知恵|ちえ}"],
      optArti: ["tujuan", "semangat, keramaian", "kelonggaran", "kebijaksanaan"],
    },
    16: {
      yomi: "{出荷|しゅっか}{台数|だいすう}は【{若干|じゃっかん}】{伸|の}びている。",
      arti: "Jumlah unit yang dikirim 【sedikit】 meningkat.",
      optArti: ["masih saja", "sedikit", "selalu", "lebih lagi"],
    },
    17: {
      yomi: "その{議員|ぎいん}は{議会|ぎかい}での{発言|はつげん}を【{撤回|てっかい}した】。",
      arti: "Anggota dewan itu 【menarik kembali】 ucapannya di sidang.",
      optYomi: [null, "{訂正|ていせい}した", null, "{省略|しょうりゃく}した"],
      optArti: ["membatalkan, mencabut", "mengoreksi", "mengulangi", "menghilangkan, menyingkat"],
    },
    18: {
      yomi: "あの{二人|ふたり}はいつも【{張|は}り{合|あ}って】いる。",
      arti: "Mereka berdua selalu 【bersaing】.",
      optYomi: ["{見|み}つめ{合|あ}って", "{助|たす}け{合|あ}って", "{競|きそ}い{合|あ}って", "{傷|きず}つけ{合|あ}って"],
      optArti: ["saling menatap", "saling membantu", "saling bersaing", "saling melukai"],
    },
    19: {
      yomi: "{中村氏|なかむらし}の【かたくなな】{態度|たいど}は{変|か}わらなかった。",
      arti: "Sikap 【keras kepala】 Nakamura tidak berubah.",
      optYomi: ["{冷静|れいせい}な", "{頑固|がんこ}な", "{強引|ごういん}な", "{真剣|しんけん}な"],
      optArti: ["tenang", "keras kepala", "memaksa", "serius"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{重複|ちょうふく}",
      arti: "重複 = duplikasi, tumpang tindih (hal yang sama muncul dua kali)",
      optYomi: [
        "{私|わたし}は、{努力|どりょく}を{惜|お}しまず{何度|なんど}も{重複|ちょうふく}して{覚|おぼ}えることで、{記憶|きおく}を{定着|ていちゃく}させた。",
        "{大量|たいりょう}のデータの{中|なか}には{重複|ちょうふく}しているものもあり、{早急|さっきゅう}に{整理|せいり}が{必要|ひつよう}だった。",
        "{健康|けんこう}に{自信|じしん}があっても、{無理|むり}が{重複|ちょうふく}すれば{体|からだ}を{壊|こわ}してしまいますよ。",
        "{開園|かいえん}を{待|ま}つ{人|ひと}の{列|れつ}が、{驚|おどろ}くほど{重複|ちょうふく}して{入場|にゅうじょう}ゲートの{前|まえ}にできていた。",
      ],
      optArti: [
        "Tanpa segan berusaha, saya 'menduplikasi' hafalan berkali-kali sehingga ingatan melekat.",
        "Di antara data yang sangat banyak ada yang 'tumpang tindih', jadi perlu segera dirapikan.",
        "Meski yakin sehat, kalau memaksakan diri 'tumpang tindih', badan bisa rusak.",
        "Antrean orang yang menunggu taman dibuka 'tumpang tindih' secara mengejutkan di depan gerbang masuk.",
      ],
    },
    21: {
      yomi: "{拠点|きょてん}",
      arti: "拠点 = basis, markas (pusat kegiatan)",
      optYomi: [
        "うわさの{拠点|きょてん}を{追究|ついきゅう}しても、なにも{解決|かいけつ}はしないだろう。",
        "{日本|にほん}{近代|きんだい}{文学|ぶんがく}の{拠点|きょてん}となった{作品|さくひん}として、この{小説|しょうせつ}は{高|たか}く{評価|ひょうか}された。",
        "この{都市|とし}は、{広場|ひろば}を{拠点|きょてん}にして{道|みち}が{放射状|ほうしゃじょう}に{伸|の}びている。",
        "A{社|しゃ}は、{地元|じもと}の{京都|きょうと}を{拠点|きょてん}に{全国|ぜんこく}{各地|かくち}でビジネスを{展開|てんかい}している。",
      ],
      optArti: [
        "Menelusuri 'basis' gosip pun tidak akan menyelesaikan apa-apa.",
        "Novel ini dinilai tinggi sebagai karya yang menjadi 'basis' sastra modern Jepang.",
        "Di kota ini, jalan-jalan membentang secara radial dengan alun-alun sebagai 'basis'.",
        "Perusahaan A menjalankan bisnis di seluruh negeri dengan kampung halamannya, Kyoto, sebagai 'basis'.",
      ],
    },
    22: {
      yomi: "{真|ま}っ{先|さき}",
      arti: "真っ先 = paling pertama, paling awal",
      optYomi: [
        "リーダーに{適|てき}した{人|ひと}として、{真|ま}っ{先|さき}に{私|わたし}の{頭|あたま}に{浮|う}かんだのは{石川|いしかわ}さんだった。",
        "{次|つぎ}のテストではクラスで{真|ま}っ{先|さき}になれるように{頑張|がんば}って{勉強|べんきょう}しようと{思|おも}う。",
        "{先|さき}ほどお{配|くば}りした{資料|しりょう}の{真|ま}っ{先|さき}にあるグラフをご{覧|らん}ください。",
        "{目|め}が{悪|わる}いので、{教室|きょうしつ}の{真|ま}っ{先|さき}に{座|すわ}らないと、{黒板|こくばん}の{字|じ}がよく{読|よ}めない。",
      ],
      optArti: [
        "Sebagai orang yang cocok menjadi pemimpin, yang 'paling pertama' muncul di kepala saya adalah Ishikawa-san.",
        "Saya ingin belajar keras agar bisa menjadi 'paling pertama' di kelas pada tes berikutnya.",
        "Silakan lihat grafik di bagian 'paling pertama' dokumen yang tadi dibagikan.",
        "Mata saya kurang baik, jadi kalau tidak duduk di 'paling pertama' kelas, saya tidak bisa membaca tulisan di papan.",
      ],
    },
    23: {
      yomi: "{緊密|きんみつ}",
      arti: "緊密 = erat (kerja sama/hubungan)",
      optYomi: [
        "{空港|くうこう}の{滑走路|かっそうろ}を{増設|ぞうせつ}したことで、{航空機|こうくうき}の{発着|はっちゃく}がますます{緊密|きんみつ}になった。",
        "{今日|きょう}の{講演会|こうえんかい}は{参加者|さんかしゃ}が{多|おお}く、{会場|かいじょう}の{体育館|たいいくかん}には{緊密|きんみつ}にいすが{並|なら}べられた。",
        "この{二|ふた}つの{単語|たんご}は{意味|いみ}が{緊密|きんみつ}に{使|つか}い{分|わ}けられているので、{習得|しゅうとく}が{難|むずか}しい。",
        "この{地区|ちく}では{子|こ}どもの{安全|あんぜん}を{守|まも}るため、{学校|がっこう}と{地域|ちいき}が{緊密|きんみつ}に{協力|きょうりょく}している。",
      ],
      optArti: [
        "Karena landasan pacu bandara ditambah, keberangkatan dan kedatangan pesawat makin 'erat'.",
        "Peserta seminar hari ini banyak, jadi kursi di gedung olahraga disusun dengan 'erat'.",
        "Kedua kata ini dibedakan pemakaiannya secara 'erat', jadi sulit dikuasai.",
        "Di wilayah ini, sekolah dan masyarakat bekerja sama dengan 'erat' untuk menjaga keselamatan anak.",
      ],
    },
    24: {
      yomi: "{遂|と}げる",
      arti: "遂げる = mencapai, mengalami (perubahan/perkembangan)",
      optYomi: [
        "この{町|まち}は、{近年|きんねん}の{再開発|さいかいはつ}により、{驚|おどろ}くような{変化|へんか}を{遂|と}げた。",
        "{指定|してい}の{口座|こうざ}に{入金|にゅうきん}した{時点|じてん}で、{正式|せいしき}な{契約|けいやく}が{遂|と}げられる。",
        "{池田|いけだ}さんは{若手|わかて}だが、{担当|たんとう}{部署|ぶしょ}で{重要|じゅうよう}な{責任|せきにん}を{遂|と}げている。",
        "{業者|ぎょうしゃ}の{話|はなし}では、{来月末|らいげつまつ}には{駅前|えきまえ}の{工事|こうじ}を{遂|と}げる{予定|よてい}らしい。",
      ],
      optArti: [
        "Kota ini 'mengalami' perubahan yang mengejutkan karena pembangunan ulang belakangan ini.",
        "Kontrak resmi 'dicapai' pada saat uang disetor ke rekening yang ditentukan.",
        "Ikeda-san masih muda, tetapi 'mencapai' tanggung jawab penting di bagiannya.",
        "Menurut kontraktor, pekerjaan di depan stasiun dijadwalkan 'dicapai' akhir bulan depan.",
      ],
    },
    25: {
      yomi: "うなだれる",
      arti: "うなだれる = menunduk lesu (karena sedih/kecewa)",
      optYomi: [
        "ビルの{最上階|さいじょうかい}の{窓|まど}からうなだれると、あまりの{高|たか}さに{恐怖|きょうふ}を{感|かん}じた。",
        "{昨日|きのう}の{会議|かいぎ}では、{皆|みな}、{部長|ぶちょう}の{話|はなし}に{納得|なっとく}し{力強|ちからづよ}くうなだれていた。",
        "{妹|いもうと}は{知|し}らせを{聞|き}いてがっかりしたのか、うなだれて{顔|かお}を{上|あ}げなかった。",
        "{何|なに}か{踏|ふ}んだような{気|き}がしたので、{思|おも}わずうなだれて{足元|あしもと}を{見|み}た。",
      ],
      optArti: [
        "Ketika saya 'menunduk lesu' dari jendela lantai teratas gedung, saya ketakutan karena begitu tinggi.",
        "Di rapat kemarin, semua orang setuju dengan kepala departemen dan 'menunduk lesu' dengan mantap.",
        "Adik perempuan saya mungkin kecewa mendengar kabar itu; ia 'menunduk lesu' dan tidak mengangkat wajahnya.",
        "Saya merasa menginjak sesuatu, jadi tanpa sadar 'menunduk lesu' dan melihat ke kaki.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "A{陶芸|とうげい}{美術館|びじゅつかん}が25{日|にち}、Y{市|し}に{開館|かいかん}する。{同|どう}{美術館|びじゅつかん}ではこれ（　）、23{日|にち}に{関係者|かんけいしゃ}を{招|まね}いて{記念|きねん}{式典|しきてん}を{行|おこな}った。",
      arti: "Museum Keramik A akan dibuka di Kota Y pada tanggal 25. (…) itu, museum tersebut mengadakan upacara peringatan pada tanggal 23 dengan mengundang pihak terkait.",
      optYomi: ["に{先立|さきだ}ち", "に{次|つ}ぎ", null, null],
      optArti: ["mendahului, sebelum", "setelah, menyusul", "setiap kali", "seiring dengan"],
    },
    27: {
      yomi: "{水泳|すいえい}の水川陽（みずかわよう）{選手|せんしゅ}。{父親|ちちおや}が{有名|ゆうめい}な{水泳|すいえい}{選手|せんしゅ}である（　）、{彼|かれ}は{周囲|しゅうい}からの{大|おお}きなプレッシャーに{苦|くる}しんできたが、それを{乗|の}り{越|こ}え、{見事|みごと}オリンピック{出場|しゅつじょう}を{決|き}めた。",
      arti: "Perenang Mizukawa Yo. (…) ayahnya perenang terkenal, ia menderita tekanan besar dari sekitarnya, tetapi berhasil mengatasinya dan dengan gemilang memastikan diri tampil di Olimpiade.",
      optArti: ["kalau ditanya apakah", "justru karena", "kalau bicara soal", "seperti"],
    },
    28: {
      yomi: "{姉|あね}「あれ？{出|で}かけるの？」{妹|いもうと}「うん、ちょっと{新宿|しんじゅく}まで。」{姉|あね}「あ、{新宿|しんじゅく}に（　）、{帰|かえ}りにみるく{屋|や}のチーズケーキ、{買|か}ってきてくれない？」{妹|いもうと}「うん、いいよ。」",
      arti: "Kakak: \"Lho? Mau pergi?\" Adik: \"Iya, sebentar ke Shinjuku.\" Kakak: \"Oh, (…) ke Shinjuku, pulangnya belikan kue keju toko Milk-ya, ya?\" Adik: \"Iya, boleh.\"",
      optYomi: ["{行|い}くと", "{行|い}けば", "{行|い}ってたら", "{行|い}くんなら"],
      optArti: ["kalau pergi (pasti)", "kalau pergi", "kalau sudah pergi", "kalau memang mau pergi"],
    },
    29: {
      yomi: "5{年|ねん}{前|まえ}に{植|う}えた{校庭|こうてい}の{桜|さくら}が、{今年|ことし}{初|はじ}めて{花|はな}を（　）。",
      arti: "Pohon sakura di halaman sekolah yang ditanam 5 tahun lalu, tahun ini untuk pertama kalinya (…) bunga.",
      optYomi: ["{咲|さ}いた", "{咲|さ}いている", "{咲|さ}かせた", "{咲|さ}くだろう"],
      optArti: ["mekar", "sedang mekar", "memekarkan (bunga)", "mungkin akan mekar"],
    },
    30: {
      yomi: "（{社内|しゃない}メールで）{営業部|えいぎょうぶ}{各位|かくい}　{第|だい}{三|さん}{回|かい}プレゼン{勉強会|べんきょうかい}を{開催|かいさい}します。{参加|さんか}{希望者|きぼうしゃ}は1{月|がつ}15{日|にち}までに、{人事課|じんじか}{村田|むらた}までお{知|し}らせ（　）。",
      arti: "(Email internal) Kepada seluruh bagian penjualan. Kami akan mengadakan kelompok belajar presentasi ketiga. Yang ingin ikut, (…) memberi tahu Murata di bagian personalia paling lambat 15 Januari.",
      optYomi: [null, null, "{願|ねが}います", "{申|もう}し{上|あ}げます"],
      optArti: ["(saya) lakukan (merendah)", "(Anda) lakukan (hormat)", "mohon", "(saya) sampaikan (merendah)"],
    },
    31: {
      yomi: "{悩|なや}んでいるときは、{信頼|しんらい}できる{誰|だれ}かに{話|はなし}を{聞|き}いてもらうといい。{話|はな}すことで{自分|じぶん}の{考|かんが}えも{整理|せいり}でき、{解決|かいけつ}には{至|いた}らない（　）、{気持|きも}ちが{楽|らく}になるだろう。",
      arti: "Saat sedang bingung, sebaiknya minta orang yang bisa dipercaya mendengarkan. Dengan bercerita, pikiran sendiri juga tertata, dan (…) sampai terselesaikan, perasaan akan lebih ringan.",
      optArti: ["sampai sejauh itu", "sejauh itu (objek)", "meskipun tidak sampai", "bahkan sampai"],
    },
    32: {
      yomi: "（テレビ{番組|ばんぐみ}で）{司会|しかい}「きちんと{手|て}を（　）、{指|ゆび}の{間|あいだ}などに{意外|いがい}に{汚|よご}れが{残|のこ}っていることも{多|おお}いのです。そこで{今日|きょう}は{正|ただ}しい{手|て}の{洗|あら}い{方|かた}をご{紹介|しょうかい}します。」",
      arti: "(Di acara TV) Pembawa acara: \"(…) mencuci tangan dengan benar, ternyata sering masih ada kotoran di sela jari dan sebagainya. Karena itu, hari ini kami memperkenalkan cara mencuci tangan yang benar.\"",
      optYomi: ["{洗|あら}えるとは", "{洗|あら}えるとのことで", "{洗|あら}ったつもりだし", "{洗|あら}ったつもりでも"],
      optArti: ["tak disangka bisa mencuci", "katanya bisa mencuci", "merasa sudah mencuci, dan", "meski merasa sudah mencuci"],
    },
    33: {
      yomi: "{今日|きょう}は{朝|あさ}から{胃|い}の{調子|ちょうし}が{悪|わる}い。{夜中|よなか}にラーメンなんか（　）。",
      arti: "Sejak pagi perut saya tidak enak. (…) ramen tengah malam.",
      optYomi: ["{食|た}べるんじゃなかった", "{食|た}べられるんじゃなかった", "{食|た}べたんじゃなかった", "{食|た}べられたんじゃなかった"],
      optArti: ["seharusnya aku tidak makan", "seharusnya tidak bisa makan", "bukankah sudah makan", "bukankah sudah bisa makan"],
    },
    34: {
      yomi: "{近年|きんねん}、{世界的|せかいてき}な{人口|じんこう}{増加|ぞうか}により、{将来|しょうらい}の{水|みず}{不足|ぶそく}への{関心|かんしん}は{急激|きゅうげき}に（　）。",
      arti: "Belakangan ini, karena pertambahan penduduk dunia, perhatian terhadap kekurangan air di masa depan (…) dengan pesat.",
      optYomi: ["{高|たか}まりつつある", "{高|たか}める{見込|みこ}みだ", "{高|たか}まるケースだ", "{高|たか}めることを{余儀|よぎ}なくさせた"],
      optArti: ["sedang meningkat", "diperkirakan akan meningkatkan", "kasus meningkat", "memaksa untuk meningkatkan"],
    },
    35: {
      yomi: "{昨日|きのう}{午後|ごご}2{時|じ}ごろ、X{市|し}の{一部|いちぶ}{地域|ちいき}で、{約|やく}400{世帯|せたい}が{停電|ていでん}した。ABC{電力|でんりょく}は、{工事中|こうじちゅう}のクレーン{車|しゃ}が{電線|でんせん}に{接触|せっしょく}したのが{原因|げんいん}（　）。",
      arti: "Kemarin sekitar pukul 2 siang, di sebagian wilayah Kota X, sekitar 400 rumah tangga mengalami listrik padam. ABC Denryoku (…) penyebabnya adalah mobil derek yang sedang bekerja menyentuh kabel listrik.",
      optArti: ["menjadi", "menyatakan (sebagai)", "terletak pada", "tertulis"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "「{乗|の}りかかった{船|ふね}」ということわざは、{乗|の}った{船|ふね}が{岸|きし}を{離|はな}れれば{途中|とちゅう}で{降|お}りることはできない＿＿ ★ ＿＿ ＿＿ことのたとえである。",
      arti: "Peribahasa \"kapal yang sudah ditumpangi\" berasal dari fakta bahwa kalau kapal yang ditumpangi sudah meninggalkan pantai, kita tidak bisa turun di tengah jalan, dan merupakan perumpamaan bahwa selama sudah memulai sesuatu, tidak bisa berhenti di tengah jalan.",
      optYomi: ["{物事|ものごと}を{始|はじ}めてしまった", null, "{途中|とちゅう}でやめるわけにはいかない", "{以上|いじょう}"],
      optArti: ["sudah memulai sesuatu", "berasal dari hal itu", "tidak bisa berhenti di tengah jalan", "selama (sudah)"],
    },
    37: {
      yomi: "{年|とし}をとって{人生|じんせい}を{振|ふ}り{返|かえ}った{時|とき}に＿＿ ★ ＿＿ ＿＿したくない。",
      arti: "Saat sudah tua dan menengok kembali hidup, saya tidak ingin menjalani hidup yang membuat saya menyesal, berpikir \"seandainya waktu itu aku begitu, pasti aku bisa menjalani hidup yang jauh lebih hebat\".",
      optYomi: ["{生|い}き{方|かた}は", "あの{時|とき}ああしていたら", "{後悔|こうかい}するような", "もっと{素晴|すば}らしい{人生|じんせい}を{送|おく}れていたはずと"],
      optArti: ["cara hidup (yang)", "seandainya waktu itu begitu", "yang membuat menyesal", "pasti bisa menjalani hidup yang lebih hebat"],
    },
    38: {
      yomi: "NPO{法人|ほうじん}「{音楽|おんがく}の{夢|ゆめ}」では、{音楽|おんがく}を{通|つう}じたさまざまな{教育|きょういく}プロジェクトを{展開|てんかい}していくことに＿＿ ＿＿ ★ ＿＿{活動|かつどう}をしています。",
      arti: "NPO \"Ongaku no Yume\" berkegiatan dengan tujuan berkontribusi mewujudkan masyarakat yang makmur melalui pengembangan berbagai proyek pendidikan lewat musik.",
      optYomi: ["{目的|もくてき}に", "{豊|ゆた}かな{社会|しゃかい}の{実現|じつげん}に{寄与|きよ}する", null, null],
      optArti: ["sebagai tujuan", "berkontribusi mewujudkan masyarakat yang makmur", "(hal) itu", "dengan, melalui"],
    },
    39: {
      yomi: "{今|いま}は、{一|いち}{学年|がくねん}5クラスもある{北森川|きたもりかわ}{小学校|しょうがっこう}だが、＿＿ ＿＿ ★ ＿＿{危機感|ききかん}があった。",
      arti: "Sekarang SD Kitamorikawa punya sampai 5 kelas per angkatan, tetapi dulu ada rasa krisis bahwa karena penurunan angka kelahiran, kelangsungan sekolah ini mungkin sulit.",
      optYomi: ["{存続|そんぞく}は{難|むずか}しい", null, null, "かつては{少子化|しょうしか}で"],
      optArti: ["kelangsungan itu sulit", "jangan-jangan", "bahwa", "dulu karena penurunan angka kelahiran"],
    },
    40: {
      yomi: "{県立|けんりつ}{高校|こうこう}の{校長|こうちょう}が、{同校|どうこう}に{在学|ざいがく}する{知人|ちじん}の{娘|むすめ}の{成績|せいせき}{証明書|しょうめいしょ}を{偽造|ぎぞう}したことが{明|あき}らかになり、{教育|きょういく}{関係者|かんけいしゃ}からは＿＿ ＿＿ ＿＿ ★と{怒|いか}りの{声|こえ}が{上|あ}がった。",
      arti: "Terungkap bahwa kepala sekolah SMA prefektur memalsukan surat keterangan nilai putri kenalannya yang bersekolah di sana, dan para pendidik marah, \"Itu tindakan yang tidak pantas dilakukan sebagai pemimpin lembaga pendidikan.\"",
      optYomi: ["{教育|きょういく}{現場|げんば}の{長|ちょう}", "{行為|こうい}", null, null],
      optArti: ["pemimpin lembaga pendidikan", "tindakan", "yang tidak pantas", "sebagai"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optArti: ["bukan, tetapi", "sama seperti", "berbeda dengan", "bagi ... pun"],
    },
    42: {
      optYomi: ["ある{日|ひ}", "あの{日|ひ}に", null, null],
      optArti: ["suatu hari", "pada hari itu", "dengan begini", "dengan cara itu"],
    },
    43: {
      optYomi: ["よく{思|おも}う", "よく{思|おも}うらしい", "{思|おも}った{場合|ばあい}だ", "{思|おも}っただけだ"],
      optArti: ["sering saya pikirkan", "katanya sering dipikirkan", "kalau sampai berpikir", "hanya berpikir"],
    },
    44: {
      optArti: ["lagi pula", "hanya saja, namun", "soalnya", "apalagi"],
    },
    45: {
      optYomi: ["{鈴子|すずこ}は{会|あ}いたくなって", "{鈴子|すずこ}は{母親|ははおや}に{会|あ}いたくなって", "{母親|ははおや}に{会|あ}いたくなって", "{母親|ははおや}は{鈴子|すずこ}に{会|あ}いたくなって"],
      optArti: ["Suzuko jadi ingin bertemu", "Suzuko jadi ingin bertemu ibunya", "(saya) jadi ingin bertemu ibu", "sang ibu jadi ingin bertemu Suzuko"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "このメールで{最|もっと}も{伝|つた}えたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan email ini?",
      optYomi: [
        "{航空券|こうくうけん}{仮|かり}{予約|よやく}の{確認書|かくにんしょ}を{近日中|きんじつちゅう}に{送|おく}ること",
        "{航空券|こうくうけん}の{予約|よやく}はまだ{確定|かくてい}していないこと",
        "{航空券|こうくうけん}の{手配|てはい}に{必要|ひつよう}な{情報|じょうほう}が{足|た}りないこと",
        "{航空券|こうくうけん}が{手配|てはい}できないので{別|べつ}の{便|びん}を{提案|ていあん}したいこと",
      ],
      optArti: [
        "Surat konfirmasi pemesanan sementara tiket pesawat akan dikirim dalam waktu dekat",
        "Pemesanan tiket pesawat belum pasti",
        "Informasi yang diperlukan untuk memesan tiket kurang",
        "Ingin mengusulkan penerbangan lain karena tiket tidak bisa dipesan",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{世界|せかい}に{存在|そんざい}するあらゆる{仕事|しごと}には、それぞれの{価値|かち}がある。",
        "{自然|しぜん}の{中|なか}で{働|はたら}き、{自身|じしん}の{存在|そんざい}を{確認|かくにん}することが{大切|たいせつ}だ。",
        "{人|ひと}はどんなに{豊|ゆた}かになっても、{働|はたら}くことをやめてはいけない。",
        "{人|ひと}は{仕事|しごと}を{通|つう}じて、{自身|じしん}が{存在|そんざい}する{意義|いぎ}を{実感|じっかん}できる。",
      ],
      optArti: [
        "Setiap pekerjaan di dunia ini punya nilainya masing-masing.",
        "Penting untuk bekerja di alam dan memastikan keberadaan diri.",
        "Sekaya apa pun, manusia tidak boleh berhenti bekerja.",
        "Melalui pekerjaan, manusia bisa merasakan makna keberadaan dirinya.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}によると、{歴史学|れきしがく}とはどのようなものか。",
      arti: "Menurut penulis, ilmu sejarah itu seperti apa?",
      optYomi: [
        "{史料|しりょう}の{分析|ぶんせき}をとおして{現代史|げんだいし}を{解明|かいめい}するもの",
        "{古|ふる}い{時代|じだい}の{人々|ひとびと}の{立場|たちば}に{立|た}って{研究|けんきゅう}するもの",
        "{過去|かこ}を{現代|げんだい}の{人々|ひとびと}の{視点|してん}で{解釈|かいしゃく}するもの",
        "{過去|かこ}を{古代史|こだいし}と{比較|ひかく}して{理解|りかい}するもの",
      ],
      optArti: [
        "Sesuatu yang mengungkap sejarah modern melalui analisis sumber sejarah",
        "Sesuatu yang meneliti dengan berdiri di posisi orang zaman dulu",
        "Sesuatu yang menafsirkan masa lalu dari sudut pandang orang masa kini",
        "Sesuatu yang memahami masa lalu dengan membandingkannya dengan sejarah kuno",
      ],
    },
    49: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{言語|げんご}・{思想|しそう}・{文化|ぶんか}は、{人間|にんげん}だけのものと{考|かんが}えるべきではない。",
        "{人間|にんげん}も{動物|どうぶつ}であるという{視点|してん}で、{人間|にんげん}について{考|かんが}えるべきだ。",
        "{人間|にんげん}と{他|た}の{動物|どうぶつ}とのちがいを{問|と}うても{意味|いみ}がない。",
        "{人間|にんげん}と{動物|どうぶつ}のちがいを{根本的|こんぽんてき}に{問|と}い{直|なお}すべきだ。",
      ],
      optArti: [
        "Bahasa, pemikiran, dan budaya tidak semestinya dianggap milik manusia saja.",
        "Kita harus memikirkan manusia dari sudut pandang bahwa manusia juga hewan.",
        "Tidak ada gunanya mempertanyakan perbedaan manusia dan hewan lain.",
        "Perbedaan manusia dan hewan harus dipertanyakan ulang secara mendasar.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{富士山|ふじさん}の{例|れい}を{挙|あ}げて、{筆者|ひっしゃ}が{述|の}べようとしていることは{何|なに}か。",
      arti: "Dengan memberi contoh Gunung Fuji, apa yang ingin dikemukakan penulis?",
      optYomi: [
        "{旅行者|りょこうしゃ}の{観光|かんこう}の{目的|もくてき}が{変化|へんか}してきた。",
        "{旅行者|りょこうしゃ}が{個人的|こじんてき}な{思|おも}い{入|い}れのある{観光地|かんこうち}にしか{行|い}かなくなった。",
        "ただ{見物|けんぶつ}するだけの{観光地|かんこうち}は{飽|あ}きられやすい。",
        "{観光地|かんこうち}は{非|ひ}{日常|にちじょう}への憧（あこが）れを{満|み}たす{場|ば}ではなくなった。",
      ],
      optArti: [
        "Tujuan wisata para pelancong telah berubah.",
        "Pelancong hanya pergi ke tempat wisata yang punya keterikatan pribadi.",
        "Tempat wisata yang hanya untuk ditonton mudah membuat bosan.",
        "Tempat wisata tidak lagi menjadi tempat memenuhi kerinduan akan hal di luar keseharian.",
      ],
    },
    51: {
      yomi: "このことは{観光地|かんこうち}においても{事情|じじょう}は{同|おな}じとあるが、どういうことか。",
      arti: "Tertulis \"hal ini juga sama untuk tempat wisata\"; apa maksudnya?",
      optYomi: [
        "{繰|く}り{返|かえ}し{訪|おとず}れる{旅行者|りょこうしゃ}の{存在|そんざい}が{観光地|かんこうち}の{経営|けいえい}を{支|ささ}える。",
        "{観光地|かんこうち}の{価値|かち}を{認|みと}めて{広|ひろ}めてくれる{人|ひと}が{必要|ひつよう}だ。",
        "{観光地|かんこうち}が{新|あたら}しい{旅行者|りょこうしゃ}を{獲得|かくとく}し{続|つづ}けなければならない。",
        "{安定的|あんていてき}な{収益|しゅうえき}を{得|え}て{観光地|かんこうち}の{価値|かち}を{高|たか}めることが{必要|ひつよう}だ。",
      ],
      optArti: [
        "Keberadaan pelancong yang berkunjung berulang kali menopang pengelolaan tempat wisata.",
        "Diperlukan orang yang mengakui dan menyebarkan nilai tempat wisata.",
        "Tempat wisata harus terus mendapatkan pelancong baru.",
        "Perlu mendapat pendapatan stabil dan meningkatkan nilai tempat wisata.",
      ],
    },
    52: {
      yomi: "{観光地|かんこうち}として{何度|なんど}も{足|あし}を{運|はこ}んでもらうには、{何|なに}が{重要|じゅうよう}か。",
      arti: "Agar orang berkali-kali datang ke tempat wisata, apa yang penting?",
      optYomi: [
        "{次々|つぎつぎ}と{新|あたら}しい{観光|かんこう}{資源|しげん}を{生|う}み{出|だ}し{続|つづ}けること",
        "{観光|かんこう}{資源|しげん}としての{名所|めいしょ}{旧跡|きゅうせき}を{大切|たいせつ}に{保存|ほぞん}すること",
        "{風土|ふうど}{特有|とくゆう}の{文化|ぶんか}や{産業|さんぎょう}の{中|なか}で{人々|ひとびと}が{暮|く}らしていること",
        "その{土地|とち}の{人|ひと}たちが{生|い}き{生|い}きと{暮|く}らせる{理由|りゆう}を{説明|せつめい}すること",
      ],
      optArti: [
        "Terus menciptakan sumber daya wisata baru",
        "Melestarikan tempat terkenal dan situs bersejarah sebagai sumber daya wisata",
        "Orang-orang hidup di tengah budaya dan industri khas daerah itu",
        "Menjelaskan alasan orang setempat bisa hidup bersemangat",
      ],
    },
    53: {
      yomi: "{筆者|ひっしゃ}によると、①天邪鬼（あまのじゃく）としての{芸術|げいじゅつ}が{社会|しゃかい}に{必要|ひつよう}なのはなぜか。",
      arti: "Menurut penulis, mengapa \"① seni sebagai pembangkang\" diperlukan masyarakat?",
      optYomi: [
        "{社会|しゃかい}が{不安|ふあん}や{刺激|しげき}を{当然|とうぜん}のものとして{受|う}け{入|い}れられるようになるから",
        "{社会|しゃかい}にこれまでにないような{創造性|そうぞうせい}やエネルギーをもたらすから",
        "{社会|しゃかい}の{穏|おだ}やかさや{心地|ここち}よさを{人々|ひとびと}に{再|さい}{認識|にんしき}させるから",
        "{社会|しゃかい}の{不安|ふあん}や{狂気|きょうき}や{驚|おどろ}きから{人々|ひとびと}を{解放|かいほう}させるから",
      ],
      optArti: [
        "Karena masyarakat jadi bisa menerima kecemasan dan rangsangan sebagai hal wajar",
        "Karena membawa kreativitas dan energi yang belum pernah ada ke dalam masyarakat",
        "Karena membuat orang kembali menyadari ketenangan dan kenyamanan masyarakat",
        "Karena membebaskan orang dari kecemasan, kegilaan, dan keterkejutan masyarakat",
      ],
    },
    54: {
      yomi: "②その{繰|く}り{返|かえ}しとあるが、{何|なに}を{繰|く}り{返|かえ}すのか。",
      arti: "Tertulis \"② pengulangan itu\"; apa yang diulang?",
      optYomi: [
        "ある{芸術|げいじゅつ}が{社会|しゃかい}に{取|と}り{込|こ}まれ、また{異質性|いしつせい}を{持|も}った{別|べつ}の{芸術|げいじゅつ}が{求|もと}められること",
        "ひとつの{芸術|げいじゅつ}が{社会|しゃかい}に{完全|かんぜん}に{排除|はいじょ}されると、{次|つぎ}の{新|あら}たな{芸術|げいじゅつ}が{誕生|たんじょう}すること",
        "{新|あたら}しい{芸術|げいじゅつ}が、{社会|しゃかい}に{刺激|しげき}を{与|あた}えたり{与|あた}えなかったりすること",
        "{芸術|げいじゅつ}に、{同質性|どうしつせい}が{求|もと}められたり{異質性|いしつせい}が{求|もと}められたりすること",
      ],
      optArti: [
        "Suatu seni diserap masyarakat, lalu dicari lagi seni lain yang memiliki keasingan",
        "Jika satu seni sepenuhnya disingkirkan masyarakat, lahirlah seni baru berikutnya",
        "Seni baru kadang memberi rangsangan pada masyarakat, kadang tidak",
        "Seni kadang dituntut keseragaman, kadang dituntut keasingan",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}によると、いまの{芸術家|げいじゅつか}はどのような{状況|じょうきょう}に{置|お}かれているか。",
      arti: "Menurut penulis, seniman sekarang berada dalam situasi seperti apa?",
      optYomi: [
        "{時代|じだい}の{変化|へんか}を{感|かん}じさせる{作品|さくひん}を{世|よ}に{出|だ}さなければならない。",
        "{穏|おだ}やかさをもたらす{作品|さくひん}を{世|よ}に{出|だ}さなければならない。",
        "{常|つね}に{作品|さくひん}の{質|しつ}を{追求|ついきゅう}していかなければならない。",
        "{作品|さくひん}を{世|よ}に{出|だ}し{続|つづ}けていかなければならない。",
      ],
      optArti: [
        "Harus menerbitkan karya yang membuat orang merasakan perubahan zaman.",
        "Harus menerbitkan karya yang membawa ketenangan.",
        "Harus selalu mengejar kualitas karya.",
        "Harus terus-menerus menerbitkan karya.",
      ],
    },
    56: {
      yomi: "①{大|おお}きな{誤|あやま}りとは{何|なに}か。",
      arti: "Apa \"① kesalahan besar\" itu?",
      optYomi: [
        "あるべき{社会|しゃかい}の{姿|すがた}と{現実|げんじつ}とを{区別|くべつ}できず、{的確|てきかく}な{判断|はんだん}ができないこと",
        "{現実|げんじつ}{社会|しゃかい}における{行動|こうどう}の{判断|はんだん}{基準|きじゅん}があるにもかかわらず、{従|したが}わないこと",
        "{現実|げんじつ}は{動|うご}かしようがないとあきらめて、{自|みずか}ら{動|うご}こうとしないこと",
        "{現実|げんじつ}を{変|か}えられないものとして{受|う}け{入|い}れ、そのなかでしか{行動|こうどう}を{考|かんが}えないこと",
      ],
      optArti: [
        "Tidak bisa membedakan wujud masyarakat yang semestinya dengan kenyataan, sehingga tidak bisa menilai dengan tepat",
        "Tidak mematuhi standar penilaian tindakan padahal ada dalam masyarakat nyata",
        "Menyerah karena kenyataan tidak bisa diubah, dan tidak mau bergerak sendiri",
        "Menerima kenyataan sebagai sesuatu yang tidak bisa diubah, dan hanya memikirkan tindakan di dalamnya",
      ],
    },
    57: {
      yomi: "②その{現実|げんじつ}とあるが、どのようなものか。",
      arti: "Tertulis \"② kenyataan itu\"; kenyataan seperti apa?",
      optYomi: [
        "{不|ふ}{正義|せいぎ}が{行|おこな}われている{現実|げんじつ}",
        "{何|なに}が{不|ふ}{正義|せいぎ}か{決|き}められない{現実|げんじつ}",
        "{社会|しゃかい}が{正義|せいぎ}を{求|もと}めている{現実|げんじつ}",
        "あるべき{社会|しゃかい}を{求|もと}めている{現実|げんじつ}",
      ],
      optArti: [
        "Kenyataan di mana ketidakadilan dilakukan",
        "Kenyataan di mana tidak bisa ditentukan apa yang tidak adil",
        "Kenyataan di mana masyarakat menuntut keadilan",
        "Kenyataan di mana masyarakat yang semestinya dicari",
      ],
    },
    58: {
      yomi: "{行為|こうい}の{適切|てきせつ}さと{正|ただ}しさについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang ketepatan dan kebenaran suatu tindakan?",
      optYomi: [
        "{現実|げんじつ}においては、{正|ただ}しい{行為|こうい}より{最|もっと}も{適切|てきせつ}な{行為|こうい}を{選択|せんたく}すべきだ。",
        "{現実|げんじつ}で{適切|てきせつ}とされる{行為|こうい}が、いつも{正|ただ}しい{行為|こうい}であるとは{言|い}えない。",
        "{行為|こうい}の{正|ただ}しさを{追求|ついきゅう}しすぎて、{現実|げんじつ}における{適切|てきせつ}さを{忘|わす}れてはいけない。",
        "{最|もっと}も{適切|てきせつ}な{行為|こうい}を{探究|たんきゅう}しても、{正|ただ}しい{行為|こうい}は{見|み}つけ{出|だ}せない。",
      ],
      optArti: [
        "Dalam kenyataan, sebaiknya memilih tindakan paling tepat daripada tindakan yang benar.",
        "Tindakan yang dianggap tepat dalam kenyataan belum tentu selalu tindakan yang benar.",
        "Jangan terlalu mengejar kebenaran tindakan hingga melupakan ketepatannya dalam kenyataan.",
        "Meski mencari tindakan paling tepat, tindakan yang benar tidak bisa ditemukan.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{筆者|ひっしゃ}によると、サル{社会|しゃかい}のルールとは{何|なに}か。",
      arti: "Menurut penulis, apa aturan masyarakat monyet?",
      optYomi: [
        "{強|つよ}いサルも{弱|よわ}いサルも、{挑戦|ちょうせん}されれば{相手|あいて}を{攻撃|こうげき}する。",
        "{強|つよ}いサルは、{弱|よわ}いサルを{威嚇|いかく}することはない。",
        "{弱|よわ}いサルは、{強|つよ}いサルに{挑戦|ちょうせん}するようなことはしない。",
        "{弱|よわ}いサルは、{強|つよ}いサルの{関心|かんしん}を{引|ひ}こうとする。",
      ],
      optArti: [
        "Monyet kuat maupun lemah menyerang lawan jika ditantang.",
        "Monyet kuat tidak mengancam monyet lemah.",
        "Monyet lemah tidak melakukan hal yang menantang monyet kuat.",
        "Monyet lemah berusaha menarik perhatian monyet kuat.",
      ],
    },
    60: {
      yomi: "サルとは{違|ちが}ったこととは{何|なに}か。",
      arti: "Apa \"hal yang berbeda dari monyet\" itu?",
      optYomi: [
        "{視線|しせん}{以外|いがい}の{手段|しゅだん}を{使|つか}って{気持|きも}ちを{表現|ひょうげん}すること",
        "{視線|しせん}の{向|む}け{方|かた}が{場面|ばめん}によって{決|き}められること",
        "{視線|しせん}を{向|む}け{続|つづ}ければ{威嚇|いかく}につながること",
        "{視線|しせん}を{様々|さまざま}な{意味|いみ}に{使|つか}い{分|わ}けること",
      ],
      optArti: [
        "Mengungkapkan perasaan dengan cara selain tatapan",
        "Cara mengarahkan tatapan ditentukan oleh situasi",
        "Terus menatap bisa menjadi ancaman",
        "Memakai tatapan dengan berbagai makna yang berbeda",
      ],
    },
    61: {
      yomi: "{筆者|ひっしゃ}は、{視線|しせん}の{作法|さほう}をどのようにとらえているか。",
      arti: "Bagaimana penulis memandang tata cara menatap?",
      optYomi: [
        "お{互|たが}いの{感情|かんじょう}をうまく{伝|つた}え{合|あ}うために{必要|ひつよう}なもの",
        "{言葉|ことば}によるコミュニケーションの{替|か}わりになるもの",
        "{相手|あいて}にいやな{感情|かんじょう}を{伝|つた}えないようにするためのもの",
        "{性別|せいべつ}や{年齢|ねんれい}、{身分|みぶん}や{服装|ふくそう}に{惑|まど}わされないように{使|つか}うもの",
      ],
      optArti: [
        "Sesuatu yang diperlukan untuk saling menyampaikan perasaan dengan baik",
        "Sesuatu yang menggantikan komunikasi lewat kata-kata",
        "Sesuatu untuk menghindari menyampaikan perasaan tidak enak kepada lawan",
        "Sesuatu yang dipakai agar tidak terkecoh jenis kelamin, usia, status, atau pakaian",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{情報|じょうほう}{機器|きき}を{使用|しよう}せずに{感情|かんじょう}を{伝|つた}え{合|あ}うことは{難|むずか}しくなってきている。",
        "{情報|じょうほう}{機器|きき}によるよりも{対面|たいめん}のほうが、{意味|いみ}を{伝|つた}え{合|あ}うには{効果的|こうかてき}である。",
        "{情報|じょうほう}{機器|きき}の{使用|しよう}も{視線|しせん}を{交|か}わすことも、コミュニケーションに{不可欠|ふかけつ}である。",
        "{情報|じょうほう}{機器|きき}の{発達|はったつ}で、{視線|しせん}がコミュニケーションに{果|は}たす{役割|やくわり}が{見失|みうしな}われつつある。",
      ],
      optArti: [
        "Saling menyampaikan perasaan tanpa perangkat informasi makin sulit.",
        "Tatap muka lebih efektif untuk saling menyampaikan makna daripada lewat perangkat informasi.",
        "Pemakaian perangkat informasi maupun saling bertatapan sama-sama tak tergantikan dalam komunikasi.",
        "Dengan perkembangan perangkat informasi, peran tatapan dalam komunikasi mulai terlupakan.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{部下|ぶか}に{未|み}{経験|けいけん}の{仕事|しごと}をさせることについて、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang memberi bawahan pekerjaan yang belum pernah ia alami?",
      optYomi: [
        "AもBも、{仕事|しごと}{上|じょう}の{判断|はんだん}や{行動|こうどう}を{学|まな}べるので{多|おお}くさせたほうがいいと{述|の}べている。",
        "AもBも、{与|あた}えられた{仕事|しごと}ができるようになったらさせたほうがいいと{述|の}べている。",
        "Aは{自力|じりき}でやりとげられそうな{仕事|しごと}ならさせたほうがいいと{述|の}べ、Bはイメージがつかめる{仕事|しごと}ならさせたほうがいいと{述|の}べている。",
        "Aは{積極的|せっきょくてき}に{経験|けいけん}させたほうがいいと{述|の}べ、Bは{十分|じゅうぶん}な{情報|じょうほう}を{与|あた}えてからさせたほうがいいと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan sebaiknya sering diberikan karena bisa mempelajari penilaian dan tindakan dalam pekerjaan.",
        "A dan B sama-sama menyatakan sebaiknya diberikan setelah ia bisa mengerjakan tugas yang diberikan.",
        "A menyatakan sebaiknya diberikan jika pekerjaan itu tampaknya bisa diselesaikan sendiri; B menyatakan sebaiknya diberikan jika gambarannya bisa ditangkap.",
        "A menyatakan sebaiknya secara aktif diberi pengalaman; B menyatakan sebaiknya diberikan setelah diberi informasi yang cukup.",
      ],
    },
    64: {
      yomi: "AとBが{共通|きょうつう}して{部下|ぶか}に{期待|きたい}していることは{何|なに}か。",
      arti: "Apa yang sama-sama diharapkan A dan B dari bawahan?",
      optYomi: [
        "{会社|かいしゃ}で{必要|ひつよう}な{新|あたら}しい{行動|こうどう}スタイルを{身|み}につけること",
        "{新|あたら}しいことに{挑戦|ちょうせん}しようという{気持|きも}ちを{持|も}つこと",
        "{自力|じりき}で{多|おお}くの{問題|もんだい}を{克服|こくふく}できるようになること",
        "{自身|じしん}がしている{仕事|しごと}に{自信|じしん}を{持|も}つこと",
      ],
      optArti: [
        "Menguasai gaya tindakan baru yang diperlukan di perusahaan",
        "Memiliki semangat untuk menantang hal baru",
        "Mampu mengatasi banyak masalah dengan kekuatan sendiri",
        "Percaya diri dengan pekerjaan yang sedang dilakukan",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "そうした{雰囲気|ふんいき}とあるが、どのようなことか。",
      arti: "Tertulis \"suasana seperti itu\"; apa maksudnya?",
      optYomi: [
        "{社会|しゃかい}が{倫理|りんり}を{求|もと}めている。",
        "マスコミが{倫理|りんり}の{必要性|ひつようせい}を{訴|うった}えている。",
        "{倫理学|りんりがく}の{価値|かち}が{見直|みなお}されつつある。",
        "{倫理学|りんりがく}が{他|た}の{分野|ぶんや}に{応用|おうよう}され{始|はじ}めている。",
      ],
      optArti: [
        "Masyarakat mencari etika.",
        "Media massa menyerukan perlunya etika.",
        "Nilai ilmu etika sedang dinilai ulang.",
        "Ilmu etika mulai diterapkan di bidang lain.",
      ],
    },
    66: {
      yomi: "{倫理|りんり}と{空気|くうき}の{似|に}ている{点|てん}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mengenai kesamaan etika dan udara, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{実体|じったい}がわかりにくいので、{意識|いしき}されない。",
        "{生|い}きていく{上|うえ}で、{常|つね}になくてはならない。",
        "{必要|ひつよう}だと{感|かん}じなければ、{意識|いしき}されない。",
        "{必要|ひつよう}になっても、すぐには{意識|いしき}されにくい。",
      ],
      optArti: [
        "Wujudnya sulit dipahami, jadi tidak disadari.",
        "Selalu mutlak diperlukan untuk hidup.",
        "Jika tidak dirasa perlu, tidak disadari.",
        "Meski sudah diperlukan, sulit langsung disadari.",
      ],
    },
    67: {
      yomi: "{筆者|ひっしゃ}は「{倫理的|りんりてき}な{時代|じだい}」をどのような{時代|じだい}だととらえているか。",
      arti: "Penulis memandang \"zaman yang etis\" sebagai zaman seperti apa?",
      optYomi: [
        "{新|あら}たな{価値観|かちかん}が{生|う}まれ、{社会|しゃかい}に{受|う}け{入|い}れられている。",
        "{従来|じゅうらい}の{価値観|かちかん}が{通用|つうよう}しなくなり、{人々|ひとびと}が{生|い}きる{方向性|ほうこうせい}を{見失|みうしな}っている。",
        "{倫理|りんり}の{価値|かち}が{再|さい}{評価|ひょうか}され、{次|つぎ}の{世代|せだい}に{積極的|せっきょくてき}に{倫理|りんり}を{教|おし}えている。",
        "{倫理|りんり}{自体|じたい}に{価値|かち}がないと{考|かんが}えられ、{社会|しゃかい}が{大|おお}きく{揺|ゆ}らいでいる。",
      ],
      optArti: [
        "Nilai-nilai baru lahir dan diterima masyarakat.",
        "Nilai-nilai lama tidak berlaku lagi, dan orang kehilangan arah hidup.",
        "Nilai etika dinilai ulang dan etika diajarkan secara aktif kepada generasi berikutnya.",
        "Etika itu sendiri dianggap tidak bernilai, dan masyarakat sangat goyah.",
      ],
    },
    68: {
      yomi: "{筆者|ひっしゃ}は「{倫理的|りんりてき}な{時代|じだい}」を{生|い}きる{人間|にんげん}にできることは{何|なん}だと{考|かんが}えているか。",
      arti: "Menurut penulis, apa yang bisa dilakukan orang yang hidup di \"zaman yang etis\"?",
      optYomi: [
        "{積極的|せっきょくてき}に{発言|はつげん}し{行動|こうどう}すること",
        "{現在|げんざい}の{経験|けいけん}を{将来|しょうらい}に{生|い}かすこと",
        "{現状|げんじょう}の{問題|もんだい}を{把握|はあく}して{考|かんが}えること",
        "{未来|みらい}を{切|き}り{開|ひら}く{方法|ほうほう}を{考|かんが}えること",
      ],
      optArti: [
        "Berbicara dan bertindak secara aktif",
        "Memanfaatkan pengalaman sekarang untuk masa depan",
        "Memahami masalah saat ini dan memikirkannya",
        "Memikirkan cara membuka masa depan",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "マイクさんは{北山|きたやま}{大学|だいがく}の4{年生|ねんせい}である。{就職|しゅうしょく}{活動|かつどう}のため、{以下|いか}の{四|よっ}つの{証明書|しょうめいしょ}が{必要|ひつよう}になり、メモをした。この{中|なか}で、{受付|うけつけ}{時間|じかん}{内|ない}に{申請|しんせい}をすれば、その{日|ひ}のうちに{受|う}け{取|と}れるのはどれか。\n\nマイクさんのメモ\n・{成績|せいせき}{証明書|しょうめいしょ}\n・{卒業|そつぎょう}{見込|みこみ}{証明書|しょうめいしょ}\n・{健康|けんこう}{診断|しんだん}{証明書|しょうめいしょ}（{書式|しょしき}は{会社|かいしゃ}{指定|してい}のもの）\n・{調査書|ちょうさしょ}（{書式|しょしき}は{会社|かいしゃ}{指定|してい}のもの）",
      arti: "Mike-san adalah mahasiswa tingkat 4 Universitas Kitayama. Untuk mencari kerja, ia memerlukan empat surat keterangan berikut dan mencatatnya. Di antaranya, mana yang bisa diterima hari itu juga jika diajukan dalam jam layanan?\n\nCatatan Mike-san\n- Surat keterangan nilai\n- Surat keterangan perkiraan lulus\n- Surat keterangan pemeriksaan kesehatan (format yang ditentukan perusahaan)\n- Surat penilaian (format yang ditentukan perusahaan)",
      optYomi: [
        "{成績|せいせき}{証明書|しょうめいしょ}と{卒業|そつぎょう}{見込|みこみ}{証明書|しょうめいしょ}",
        "{成績|せいせき}{証明書|しょうめいしょ}と{卒業|そつぎょう}{見込|みこみ}{証明書|しょうめいしょ}と{健康|けんこう}{診断|しんだん}{証明書|しょうめいしょ}",
        "{成績|せいせき}{証明書|しょうめいしょ}と{卒業|そつぎょう}{見込|みこみ}{証明書|しょうめいしょ}と{調査書|ちょうさしょ}",
        "{成績|せいせき}{証明書|しょうめいしょ}と{健康|けんこう}{診断|しんだん}{証明書|しょうめいしょ}",
      ],
      optArti: [
        "Surat keterangan nilai dan surat keterangan perkiraan lulus",
        "Surat keterangan nilai, perkiraan lulus, dan pemeriksaan kesehatan",
        "Surat keterangan nilai, perkiraan lulus, dan surat penilaian",
        "Surat keterangan nilai dan pemeriksaan kesehatan",
      ],
    },
    70: {
      yomi: "{証明書|しょうめいしょ}の{申請|しんせい}に{関|かん}して、{留意|りゅうい}しなければならないことはどれか。",
      arti: "Terkait pengajuan surat keterangan, hal mana yang perlu diperhatikan?",
      optYomi: [
        "{申請|しんせい}までに、{次|つぎ}の{学期|がっき}の{授業料|じゅぎょうりょう}を{納入|のうにゅう}しておく{必要|ひつよう}がある。",
        "{窓口|まどぐち}で{申請|しんせい}する{場合|ばあい}、{学生証|がくせいしょう}とパスワードが{必要|ひつよう}である。",
        "{学生|がくせい}センター{窓口|まどぐち}でしか{申請|しんせい}ができない{期間|きかん}がある。",
        "{大学|だいがく}に{行|い}けない{場合|ばあい}の{申請|しんせい}{方法|ほうほう}はメールのみである。",
      ],
      optArti: [
        "Biaya kuliah semester berikutnya harus dibayar sebelum mengajukan.",
        "Jika mengajukan di loket, diperlukan kartu mahasiswa dan kata sandi.",
        "Ada masa di mana pengajuan hanya bisa dilakukan di loket Pusat Mahasiswa.",
        "Jika tidak bisa ke kampus, cara pengajuannya hanya lewat email.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：『望月青果店』書評 ──
    "7": {
      yomi: `{以下|いか}は、{小説|しょうせつ}『{望月|もちづき}{青果店|せいかてん}』（{小手鞠|こでまり}るい{著|ちょ}）についての{書評|しょひょう}である。

{思春期|ししゅんき}の{頃|ころ}、{母親|ははおや}の{存在|そんざい}を{疎|うと}ましく（{注|ちゅう}1）{思|おも}った。{初|はじ}めて{恋|こい}をした{頃|ころ}だった。{恋|こい}するという{感情|かんじょう}が{嬉|うれ}しいような{恐|おそ}ろしいような{気|き}がしていて、{何|なに}かのせいにしたかったのだと{思|おも}う。{自分|じぶん}の{中|なか}には{母親|ははおや}と{同|おな}じ{血|ち}が{流|なが}れていて、だから{恋|こい}なんかするんだ、{全|すべ}てお{母|かあ}さんのせいなのだなどと{変|へん}な{理屈|りくつ}で{恋心|こいごころ}を{納得|なっとく}させようとしていた。

{本書|ほんしょ}の{主人公|しゅじんこう}・{鈴子|すずこ}[41]{母親|ははおや}は{天敵|てんてき}のような{存在|そんざい}で、{母|はは}からいつも{逃|に}げたいと{思|おも}っていた。そして{結婚|けっこん}に{猛反対|もうはんたい}した{母|はは}を{捨|す}てるような{気持|きも}ちで{誠一郎|せいいちろう}と{一緒|いっしょ}になったのだ。50{代|だい}になった{鈴子|すずこ}は、{盲目|もうもく}の{夫|おっと}・{誠一郎|せいいちろう}と{盲導犬|もうどうけん}の茶々（ちゃちゃ）とアメリカでペンションを{経営|けいえい}しながら{穏|おだ}やかな{日々|ひび}を{過|す}ごしている。

[42]、{小|ちい}さな{青果店|せいかてん}を{営|いとな}む{岡山|おかやま}の{実家|じっか}から{母親|ははおや}の{体調|たいちょう}が{悪|わる}いことを{知|し}らされ、5{年|ねん}ぶりの{里帰|さとがえ}り（{注|ちゅう}2）を{計画|けいかく}するのだが、{大雪|おおゆき}による{停電|ていでん}が{続|つづ}き{里帰|さとがえ}りは{危|あや}ぶまれる。{停電|ていでん}の{中|なか}で{様々|さまざま}な{過去|かこ}の{記憶|きおく}が甦（よみがえる）。{母|はは}との{確執|かくしつ}、{初恋|はつこい}の{人|ひと}・{隆史|たかし}と{交|か}わした{約束|やくそく}……。

{過去|かこ}の{記憶|きおく}を{過|す}ぎたことと{忘|わす}れてしまえばどんなに{楽|らく}かと[43]。{記憶|きおく}は{塗|ぬ}り{変|か}えることが{出来|でき}ないから{厄介|やっかい}で、いつまでも{胸|むね}を{締|し}め{付|つ}ける。{思春期|ししゅんき}の{頃|ころ}に{母親|ははおや}に{投|な}げかけた{酷|ひど}い{言葉|ことば}がふとした{時|とき}に{生々|なまなま}しく{心|こころ}の{中|なか}に{甦|よみがえ}って{居|い}たたまれないような{気持|きも}ちになる（{注|ちゅう}3）ことがある。

[44]、{記憶|きおく}は{塗|ぬ}り{変|か}えられないけれど、{新|あたら}しい{記憶|きおく}を{育|はぐく}むことは{出来|でき}る。{停電|ていでん}の{中|なか}で{鈴子|すずこ}は、{結婚|けっこん}{前|まえ}に{再会|さいかい}した{隆史|たかし}が{時間|じかん}を{超|こ}えて{果|は}たしてくれた{約束|やくそく}を{思|おも}い{出|だ}す。それは、{母|はは}から{誠一郎|せいいちろう}へと{旅立|たびだ}つ{鈴子|すずこ}の{背中|せなか}を{強引|ごういん}に{押|お}してくれた。{誰|だれ}にも{言|い}えない{秘密|ひみつ}の{思|おも}い{出|で}だった。{記憶|きおく}は{人|ひと}の{心|こころ}を{締|し}め{付|つ}けることも{温|あたた}めることも{出来|でき}る。{誠一郎|せいいちろう}との{暮|く}らしの{中|なか}で{育|はぐく}まれてゆく{静|しず}かで{豊|ゆた}かな{幸福|こうふく}な{時間|じかん}は、{鈴子|すずこ}の{母|はは}への{思|おも}いを{少|すこ}しずつ{和|やわ}らげてくれる。{物語|ものがたり}の{最後|さいご}で{交|か}わされる{母娘|おやこ}の{電話|でんわ}の{会話|かいわ}はとっても{可愛|かわい}くて{微笑|ほほえ}ましかった。{本|ほん}を{閉|と}じた{後|あと}、[45]{車|くるま}を{実家|じっか}に{走|はし}らせた。

（{注|ちゅう}1）疎（うと）ましい：いやな{感|かん}じがして{避|さ}けたい
（{注|ちゅう}2）{里帰|さとがえ}り：{実家|じっか}に{帰|かえ}ること
（{注|ちゅう}3）{居|い}たたまれないような{気持|きも}ちになる：ここでは、{落|お}ち{着|つ}いた{気持|きも}ちでいられなくなる`,
      arti: `Berikut ini adalah ulasan novel "Toko Sayur Mochizuki" (karya Kodemari Rui).

Semasa puber, saya merasa jengkel (catatan 1) dengan keberadaan ibu. Itu masa ketika saya pertama kali jatuh cinta. Perasaan jatuh cinta itu terasa menyenangkan sekaligus menakutkan, dan saya rasa saya ingin menyalahkan sesuatu. Saya berusaha meyakinkan perasaan cinta saya dengan logika aneh: dalam diriku mengalir darah yang sama dengan ibu, karena itulah aku jatuh cinta, semuanya salah ibu.

[41] tokoh utama buku ini, Suzuko, ibunya adalah sosok seperti musuh bebuyutan, dan ia selalu ingin lari dari ibunya. Lalu, dengan perasaan seolah membuang ibu yang sangat menentang pernikahannya, ia menikah dengan Seiichiro. Suzuko yang kini berusia 50-an menjalani hari-hari yang tenang bersama suaminya yang buta, Seiichiro, dan anjing pemandu Chacha, sambil mengelola penginapan di Amerika.

[42], ia diberi tahu oleh rumah orang tuanya di Okayama, yang mengelola toko sayur kecil, bahwa kondisi ibunya memburuk, lalu ia merencanakan pulang kampung (catatan 2) untuk pertama kalinya dalam 5 tahun, tetapi listrik padam terus karena salju lebat, sehingga kepulangannya terancam. Dalam gelapnya listrik padam, berbagai ingatan masa lalu hidup kembali. Pertentangan dengan ibu, janji dengan cinta pertamanya, Takashi...

Betapa leganya jika ingatan masa lalu bisa dilupakan sebagai hal yang sudah lewat, [43]. Ingatan merepotkan karena tidak bisa dicat ulang, dan terus-menerus menyesakkan dada. Kata-kata kasar yang saya lontarkan kepada ibu semasa puber kadang tiba-tiba hidup kembali dengan jelas di hati, dan saya jadi gelisah tak keruan (catatan 3).

[44], ingatan memang tidak bisa dicat ulang, tetapi kita bisa menumbuhkan ingatan baru. Dalam gelapnya listrik padam, Suzuko teringat janji yang ditepati Takashi melampaui waktu, ketika mereka bertemu kembali sebelum ia menikah. Itu dengan kuat mendorong punggung Suzuko yang berangkat meninggalkan ibu menuju Seiichiro. Itu kenangan rahasia yang tak bisa ia ceritakan kepada siapa pun. Ingatan bisa menyesakkan hati, bisa juga menghangatkannya. Waktu bahagia yang tenang dan kaya yang tumbuh dalam kehidupan bersama Seiichiro sedikit demi sedikit melunakkan perasaan Suzuko terhadap ibunya. Percakapan telepon ibu dan anak di akhir cerita sangat manis dan membuat tersenyum. Setelah menutup buku, saya [45] dan memacu mobil ke rumah orang tua.

(Catatan 1) 疎ましい: merasa tidak enak dan ingin menghindar
(Catatan 2) 里帰り: pulang ke rumah orang tua
(Catatan 3) 居たたまれないような気持ちになる: di sini, tidak bisa merasa tenang`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{以下|いか}は、あるツアーに{申|もう}し{込|こ}んだ{人|ひと}に{送|おく}られてきたメールである。

{田川|たがわ}{優子|ゆうこ}{様|さま}

この{度|たび}はトラベルライトをご{利用|りよう}いただきありがとうございます。

{弊社|へいしゃ}ホームページよりお{申|もう}し{込|こ}みいただいた「{小型|こがた}{飛行機|ひこうき}で{行|い}く{暁島|あかつきじま}」（12{月|がつ}9{日|か}{発|はつ}）は、{航空券|こうくうけん}の{発売|はつばい}がご{搭乗|とうじょう}{日|び}1か{月|げつ}{前|まえ}からとなるため、{現|げん}{時点|じてん}では{仮|かり}{予約|よやく}になっております。ご{希望|きぼう}の{便|びん}が{確保|かくほ}できましたら、{田川|たがわ}{様|さま}のご{自宅|じたく}宛（あて）に{確認書|かくにんしょ}をお{送|おく}りします。

{万|まん}が{一|いち}、ご{希望|きぼう}に{添|そ}えなかった{場合|ばあい}は、{別|べつ}の{便|びん}をご{提案|ていあん}させていただくこともございます。{何|なに}とぞご{了承|りょうしょう}ください。

それでは、{引|ひ}き{続|つづ}きどうぞよろしくお{願|ねが}いいたします。

2017{年|ねん}9{月|がつ}10{日|か}
{株式|かぶしき}{会社|がいしゃ}トラベルライト（{担当|たんとう} {中村|なかむら}）
{電話|でんわ}：024-881-6456（{平日|へいじつ}10～19{時|じ}・{土日|どにち}{祝|しゅく}9～18{時|じ}）
メールアドレス：toiawase@travellight.co.jp`,
      arti: `Berikut ini adalah email yang dikirim kepada orang yang mendaftar sebuah tur.

Yth. Ibu Tagawa Yuko

Terima kasih telah menggunakan Travel Light.

Untuk tur "Ke Pulau Akatsuki dengan Pesawat Kecil" (berangkat 9 Desember) yang Anda daftarkan melalui situs web kami, penjualan tiket pesawat baru dimulai satu bulan sebelum hari keberangkatan, sehingga saat ini statusnya pemesanan sementara. Jika penerbangan yang Anda inginkan sudah didapat, kami akan mengirim surat konfirmasi ke alamat rumah Ibu Tagawa.

Apabila keinginan Anda tidak dapat dipenuhi, kami mungkin akan mengusulkan penerbangan lain. Mohon dimaklumi.

Demikian, terima kasih atas kepercayaannya.

10 September 2017
PT Travel Light (penanggung jawab: Nakamura)
Telepon: 024-881-6456 (hari kerja pukul 10–19, Sabtu/Minggu/hari libur pukul 9–18)
Alamat email: toiawase@travellight.co.jp`,
    },
    "8-2": {
      yomi: `あらゆる{仕事|しごと}はなんらかの{形|かたち}で、その{人|ひと}を{世界|せかい}の{中|なか}に{位置|いち}づける。{畑|はたけ}{仕事|しごと}のような{個人|こじん}{作業|さぎょう}でもそうだ。{自然|しぜん}のサイクルの{中|なか}に、{自分|じぶん}の{存在|そんざい}を{確|たし}かめることができる。

{人|ひと}はどんなに{大金持|おおがねも}ちになっても、なんらかの{形|かたち}で{働|はたら}こうとする{生|い}き{物|もの}だろう。お{金持|かねも}ちはお{金持|かねも}ちなりの{仕事|しごと}を、{自分|じぶん}でつくり{出|だ}すはずだ。それは{人間|にんげん}が、{外|そと}の{世界|せかい}との{関|かか}わり{合|あ}いを{通|つう}じてしか{自分|じぶん}が{存在|そんざい}するという{実感|じっかん}を{得|え}ることができず、またそれを{常|つね}に{渇望|かつぼう}（{注|ちゅう}）していることを{示|しめ}している。
（{注|ちゅう}）渇望（かつぼう）する：{強|つよ}く{望|のぞ}む`,
      arti: `Setiap pekerjaan, dengan suatu cara, menempatkan orang itu di dalam dunia. Pekerjaan perorangan seperti bertani pun begitu. Kita bisa memastikan keberadaan diri di dalam siklus alam.

Manusia mungkin makhluk yang, sekaya apa pun, akan tetap berusaha bekerja dengan suatu cara. Orang kaya pasti menciptakan sendiri pekerjaan yang sesuai bagi orang kaya. Hal itu menunjukkan bahwa manusia hanya bisa merasakan keberadaan dirinya melalui keterlibatan dengan dunia luar, dan selalu sangat mendambakan (catatan) hal itu.
(Catatan) 渇望する: sangat menginginkan`,
    },
    "8-3": {
      yomi: `「すべての{歴史|れきし}は{現代史|げんだいし}である。」この{有名|ゆうめい}な{言葉|ことば}が{示|しめ}す{内容|ないよう}は、われわれが{史料|しりょう}（{注|ちゅう}1）に{対|たい}した{場合|ばあい}、けっきょく{史料|しりょう}をとおして{過去|かこ}を{見|み}るのは、ほかならぬ{現在|げんざい}のわれわれであり{現在|げんざい}の眼（め）である、ということである。われわれは、{公平無私|こうへいむし}に（{注|ちゅう}2）、また{古|ふる}い{時代|じだい}の{人|ひと}の{心|こころ}になって{対処|たいしょ}しようとしても、われわれが{生|い}きている{現在|げんざい}の{時代|じだい}の{人間|にんげん}である、ということから{脱出|だっしゅつ}することはできないからである。

{要|よう}するに{歴史学|れきしがく}は、こうした{性格|せいかく}をもった{学問|がくもん}である。
（{注|ちゅう}1）{史料|しりょう}：{歴史|れきし}{研究|けんきゅう}のために{必要|ひつよう}な{文献|ぶんけん}や{遺物|いぶつ}など
（{注|ちゅう}2）{公平無私|こうへいむし}に：{私的|してき}な{感情|かんじょう}を{持|も}たずに{公平|こうへい}に`,
      arti: `"Semua sejarah adalah sejarah masa kini." Isi yang ditunjukkan oleh kata-kata terkenal ini adalah bahwa ketika kita menghadapi sumber sejarah (catatan 1), pada akhirnya yang melihat masa lalu melalui sumber sejarah tak lain adalah kita di masa kini, dengan mata masa kini. Sebab, meskipun kita berusaha menanganinya dengan adil tanpa kepentingan pribadi (catatan 2) dan dengan menyelami hati orang zaman dulu, kita tidak bisa lepas dari kenyataan bahwa kita adalah manusia zaman sekarang tempat kita hidup.

Singkatnya, ilmu sejarah adalah ilmu yang memiliki sifat seperti ini.
(Catatan 1) 史料: dokumen dan peninggalan yang diperlukan untuk penelitian sejarah
(Catatan 2) 公平無私に: secara adil tanpa perasaan pribadi`,
    },
    "8-4": {
      yomi: `{人間|にんげん}は{古|ふる}い{昔|むかし}から、「{人間|にんげん}とは{何|なに}か」を{問|と}うてきた。けれどそれは、{早|はや}く{言|い}えば「{人間|にんげん}は{動物|どうぶつ}とどこがちがうか？」という{問|と}いかけであった。いわく（{注|ちゅう}）「{人間|にんげん}には{動物|どうぶつ}にはない{言語|げんご}がある」、いわく「{人間|にんげん}には{思想|しそう}がある」、「{人間|にんげん}には{文化|ぶんか}がある」{等々|とうとう}。しかしこの{問|と}いかけは、{根本的|こんぽんてき}にまちがっていた。

{問題|もんだい}は「{人間|にんげん}は{動物|どうぶつ}とどうちがうか？」ではなくて、「{人間|にんげん}は{他|た}の{動物|どうぶつ}とどうちがうか？」ということだったのである。

これに{答|こた}えるには、{人間|にんげん}はどういう{動物|どうぶつ}であるかを{問|と}う{以外|いがい}にない。
（{注|ちゅう}）いわく：ここでは、よく{言|い}われるように`,
      arti: `Sejak zaman dahulu manusia bertanya, "Apa itu manusia?" Namun, singkatnya, itu adalah pertanyaan "Apa beda manusia dengan hewan?" Seperti sering dikatakan (catatan), "manusia punya bahasa yang tidak dimiliki hewan", "manusia punya pemikiran", "manusia punya budaya", dan seterusnya. Namun pertanyaan ini keliru secara mendasar.

Masalahnya bukan "Apa beda manusia dengan hewan?", melainkan "Apa beda manusia dengan hewan lain?"

Untuk menjawabnya, tidak ada cara lain selain bertanya manusia itu hewan yang seperti apa.
(Catatan) いわく: di sini, seperti yang sering dikatakan`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{日本|にほん}には{昔|むかし}から「{物見遊山|ものみゆさん}」（{注|ちゅう}1）という{言葉|ことば}がありますが、{非|ひ}{日常|にちじょう}への{憧|あこが}れは{観光|かんこう}の{一|ひと}つの{本質|ほんしつ}です。

しかしその{一方|いっぽう}で、{物見遊山|ものみゆさん}だけに{頼|たよ}った{観光地|かんこうち}はいずれ{必|かなら}ず{飽|あ}きられてしまうというのも{事実|じじつ}です。{例|たと}えば{富士山|ふじさん}を{見|み}た{外国人|がいこくじん}が、もう{一度|いちど}{富士山|ふじさん}だけを{見|み}るために{訪日|ほうにち}してくれるでしょうか？よほど{個人的|こじんてき}な{思|おも}い{入|い}れでもない{限|かぎ}り、そういうケースは{稀|まれ}でしょう。{海外|かいがい}からわざわざやって{来|き}た{旅行者|りょこうしゃ}に{日本|にほん}という{場所|ばしょ}へのリピーター（{注|ちゅう}2）となってもらうためには、{彼|かれ}らがまた{戻|もど}って{来|き}たくなる{別|べつ}の{工夫|くふう}が{必要|ひつよう}です。

どの{様|よう}なビジネスであったとしても、{顧客|こきゃく}（＝ファン）の{存在|そんざい}は{決定的|けっていてき}な{意味|いみ}を{持|も}ちます。そのブランドの{価値|かち}を{認|みと}めて、{長期|ちょうき}にわたって{買|か}い{支|ささ}えてくれる{人|ひと}の{存在|そんざい}{無|な}しには{安定的|あんていてき}な{収益|しゅうえき}は{望|のぞ}めません。このことは{観光地|かんこうち}においても{事情|じじょう}は{同|おな}じです。（{中略|ちゅうりゃく}）

ここで{再|ふたた}び、{本質的|ほんしつてき}な{問|と}いかけが{浮|う}かんできます。{顧客|こきゃく}とリピーターを{生|う}みだし、{観光|かんこう}・リゾート{地|ち}として{何度|なんど}も{選|えら}ばれ{続|つづ}けるためには、{一体|いったい}{何|なに}が{必要|ひつよう}なのでしょうか？

{本当|ほんとう}の{意味|いみ}で{旅行者|りょこうしゃ}を{惹|ひ}きつけ、その{土地|とち}のファンとなるのは、{名所|めいしょ}{旧跡|きゅうせき}のような{観光|かんこう}{資源|しげん}だけではありません。{重要|じゅうよう}なのは{自分|じぶん}たちとは{異|こと}なる{豊|ゆた}かな「{日常性|にちじょうせい}（ライフスタイル）」です。その{土地|とち}の{人|ひと}たちが{生|い}き{生|い}きと{暮|く}らしていれば、{訪|おとず}れた{人|ひと}はきっとその{理由|りゆう}を{見|み}つけたくなる。{風土|ふうど}に{根差|ねざ}した{生活|せいかつ}{様式|ようしき}、{独自|どくじ}の{食|しょく}{文化|ぶんか}、{季節|きせつ}ごとの{行事|ぎょうじ}、その{地|ち}の{環境|かんきょう}が{育|はぐく}んだ{産業|さんぎょう}。{二回|にかい}、{三回|さんかい}と{足|あし}を{運|はこ}べば、その{度|たび}にまた{違|ちが}った{表情|ひょうじょう}が{見|み}えてくる。その{深|ふか}さを{知|し}れば、{決|けっ}して{飽|あ}きることはありません。
（{注|ちゅう}1）物見（ものみ）遊山（ゆさん）：{見物|けんぶつ}して{遊|あそ}びまわること
（{注|ちゅう}2）リピーター：ここでは、{繰|く}り{返|かえ}し{訪|おとず}れる{人|ひと}`,
      arti: `Di Jepang sejak dulu ada kata "monomi yusan" (catatan 1), dan kerinduan akan hal di luar keseharian adalah salah satu hakikat pariwisata.

Namun di sisi lain, memang benar bahwa tempat wisata yang hanya mengandalkan tontonan suatu saat pasti membuat bosan. Misalnya, apakah orang asing yang sudah melihat Gunung Fuji akan datang lagi ke Jepang hanya untuk melihat Gunung Fuji sekali lagi? Kecuali punya keterikatan pribadi yang sangat kuat, kasus seperti itu jarang. Agar pelancong yang jauh-jauh datang dari luar negeri menjadi pengunjung berulang (catatan 2) ke tempat bernama Jepang, perlu upaya lain yang membuat mereka ingin kembali lagi.

Bisnis apa pun, keberadaan pelanggan (= penggemar) punya arti yang menentukan. Tanpa keberadaan orang yang mengakui nilai merek itu dan terus membelinya dalam jangka panjang, pendapatan stabil tidak bisa diharapkan. Hal ini juga sama untuk tempat wisata. (dipersingkat)

Di sini, muncul lagi pertanyaan mendasar. Apa sebenarnya yang diperlukan agar bisa menciptakan pelanggan dan pengunjung berulang, dan terus dipilih berkali-kali sebagai tempat wisata dan resor?

Yang benar-benar memikat pelancong dan membuat mereka menjadi penggemar daerah itu bukan hanya sumber daya wisata seperti tempat terkenal dan situs bersejarah. Yang penting adalah "keseharian (gaya hidup)" yang kaya dan berbeda dari kita. Jika orang-orang setempat hidup bersemangat, pengunjung pasti ingin menemukan alasannya. Gaya hidup yang berakar pada iklim dan alam setempat, budaya kuliner yang khas, acara setiap musim, industri yang ditumbuhkan lingkungan setempat. Kalau datang dua kali, tiga kali, setiap kali akan terlihat wajah yang berbeda lagi. Jika mengetahui kedalamannya, kita tidak akan pernah bosan.
(Catatan 1) 物見遊山: berkeliling melihat-lihat dan bersenang-senang
(Catatan 2) リピーター: di sini, orang yang berkunjung berulang kali`,
    },
    "9-2": {
      yomi: `{芸術|げいじゅつ}{作品|さくひん}が{私|わたし}たちにもたらすものは、{感動|かんどう}ばかりではない。{驚|おどろ}きとか{困惑|こんわく}、ときに{不快感|ふかいかん}やイライラ{感|かん}だったりする。それまでだれも{思|おも}いつかなかったような{形状|けいじょう}や{色彩|しきさい}や{音|おと}は、{私|わたし}たちをさまざまに{揺|ゆ}さぶる。

{私|わたし}たちは{慣|な}れ{親|した}しんだ{世界|せかい}に{浸|ひた}っているとき{心地|ここち}よさに{包|つつ}まれているが、そこから{新|あたら}しいものは{生|う}まれない。そういう{意味|いみ}で{穏|おだ}やかで{心地|ここち}よい{文化|ぶんか}は、{保守的|ほしゅてき}で{現状|げんじょう}{肯定的|こうていてき}であり、{創造性|そうぞうせい}やエネルギーにとぼしい。だからこそ、あえて{不安|ふあん}とか{狂気|きょうき}、{驚|おどろ}きといった{刺激|しげき}をもたらしてくれる①{天邪鬼|あまのじゃく}（{注|ちゅう}1）としての{芸術|げいじゅつ}が{社会|しゃかい}には{必要|ひつよう}なのである。

そういう{意味|いみ}で{芸術|げいじゅつ}は{安定|あんてい}した{穏|おだ}やかなものを{否定|ひてい}するところで{生|う}まれる。そうした{芸術|げいじゅつ}が{誕生|たんじょう}すると、{社会|しゃかい}は{大|おお}きな{包摂性|ほうせつせい}（{注|ちゅう}2）をもっているから、トゲトゲしたものもくるんで{呑|の}み{込|こ}んでしまう。すると、また{異質|いしつ}な{刺激|しげき}{因子|いんし}としての{芸術|げいじゅつ}が{必要|ひつよう}になってくる。②その{繰|く}り{返|かえ}しによって、{社会|しゃかい}と{文化|ぶんか}のエネルギーが{維持|いじ}されるのではないか。（{中略|ちゅうりゃく}）

そうした{芸術|げいじゅつ}の{天邪鬼|あまのじゃく}{性|せい}は、{活力|かつりょく}よりも{穏|おだ}やかさが{優勢|ゆうせい}になりがちな{成熟|せいじゅく}{社会|しゃかい}においてはより{重要|じゅうよう}である。しかも、いまは{昔|むかし}とちがって{世|よ}の{中|なか}の{変化|へんか}のサイクルがどんどん{短|みじか}くなっており、これは{芸術|げいじゅつ}を{生|う}み{出|だ}す{側|がわ}に{大|おお}きな{変化|へんか}が{求|もと}められていることを{意味|いみ}している。なぜなら{時代|じだい}の{変化|へんか}に{合|あ}わせようとすると、{必然的|ひつぜんてき}に{次々|つぎつぎ}と{作品|さくひん}を{世|よ}に{出|だ}さなければならず、{個々|ここ}の{作品|さくひん}の{質|しつ}を{高|たか}めることがむずかしくなる。{質|しつ}を{高|たか}めて{完成|かんせい}{域|いき}に{近|ちか}づいたときには、もう{時代|じだい}は{次|つぎ}のサイクルに{入|はい}っていて、{次|つぎ}の{作品|さくひん}に{取|と}りかからなくてはならない。
（{注|ちゅう}1）天邪鬼（あまのじゃく）：ここでは、{逆|さか}らったり{否定|ひてい}したりするようなもの
（{注|ちゅう}2）包摂（ほうせつ）{性|せい}：{中|なか}に{包|つつ}み{込|こ}む{性質|せいしつ}`,
      arti: `Yang dibawa karya seni kepada kita bukan hanya rasa haru. Bisa juga keterkejutan atau kebingungan, kadang rasa tidak nyaman atau kesal. Bentuk, warna, dan bunyi yang sebelumnya tidak terpikirkan siapa pun mengguncang kita dengan berbagai cara.

Ketika kita tenggelam dalam dunia yang sudah akrab, kita diselimuti kenyamanan, tetapi dari sana tidak lahir hal baru. Dalam arti itu, budaya yang tenang dan nyaman bersifat konservatif dan menerima keadaan sekarang, serta miskin kreativitas dan energi. Justru karena itu, masyarakat memerlukan ① seni sebagai pembangkang (catatan 1) yang sengaja membawa rangsangan seperti kecemasan, kegilaan, dan keterkejutan.

Dalam arti itu, seni lahir di tempat yang menyangkal hal yang stabil dan tenang. Ketika seni seperti itu lahir, karena masyarakat memiliki daya rangkul (catatan 2) yang besar, hal yang tajam pun dibungkus dan ditelannya. Lalu, diperlukan lagi seni sebagai faktor rangsangan yang asing. Bukankah ② dengan pengulangan itu energi masyarakat dan budaya terpelihara? (dipersingkat)

Sifat membangkang seni seperti itu lebih penting dalam masyarakat matang yang cenderung lebih didominasi ketenangan daripada vitalitas. Lagi pula, sekarang berbeda dengan dulu, siklus perubahan dunia makin pendek, dan ini berarti pihak pencipta seni dituntut berubah besar. Sebab, jika ingin menyesuaikan dengan perubahan zaman, mau tak mau karya harus terus-menerus diterbitkan, sehingga sulit meningkatkan kualitas tiap karya. Ketika kualitas sudah ditingkatkan dan mendekati kesempurnaan, zaman sudah memasuki siklus berikutnya, dan kita harus mulai mengerjakan karya berikutnya.
(Catatan 1) 天邪鬼: di sini, sesuatu yang melawan atau menyangkal
(Catatan 2) 包摂性: sifat merangkul ke dalam`,
    },
    "9-3": {
      yomi: `いま{私|わたし}たちの{多|おお}くは、{社会|しゃかい}など{動|うご}かしようがないと{考|かんが}えているのではないでしょうか。そして、それを{所与|しょよ}（{注|ちゅう}1）の{条件|じょうけん}として、どのように{行動|こうどう}すればいいかの{判断|はんだん}{基準|きじゅん}を{決|き}めているのです。{言|い}い{換|か}えれば{私|わたし}たちは、「この{社会|しゃかい}は{動|うご}かしようがないのだから、それを{現実|げんじつ}として{受|う}け{入|い}れるしかない」と{思|おも}い{込|こ}み、その{範囲|はんい}{内|ない}で{実行|じっこう}{可能|かのう}な{行為|こうい}しか{考慮|こうりょ}しなくなってしまうのです。ここに①{大|おお}きな{誤|あやま}りがあります。

たしかにこの{社会|しゃかい}は{動|うご}かし{難|がた}い。それは{事実|じじつ}です。しかし、そのことと、この{社会|しゃかい}がいかにあるべきかは、まったく{別|べつ}のことです。にもかかわらず、{目|め}の{前|まえ}の{現実|げんじつ}に{依拠|いきょ}（{注|ちゅう}2）して、{私|わたし}たちの{行為|こうい}の{正|ただ}しさやよさが{決|き}められてしまう。これでは、{現実|げんじつ}に{不|ふ}{正義|せいぎ}が{行|おこな}われていても、それを{問|と}うことはできません。なぜなら、そのような{現実|げんじつ}を{前提|ぜんてい}にして、{正|ただ}しい{行為|こうい}とは{何|なに}かのルール{設定|せってい}がなされているからです。{目|め}の{前|まえ}の{現実|げんじつ}が{正義|せいぎ}にかなっていない{場合|ばあい}、そこでの{行為|こうい}の{正|ただ}しさやよさを{問|と}うことはできないと{私|わたし}は{考|かんが}えていますが、ともすると（{注|ちゅう}3）{私|わたし}たちは、その{現実|げんじつ}の{範囲|はんい}{内|ない}での「{適切|てきせつ}な」{行為|こうい}を「{正|ただ}しい」{行為|こうい}であると{考|かんが}えてしまいがちです。たしかに、②その{現実|げんじつ}が{動|うご}かしがたく、そのなかで{生|い}きていかねばならないとすれば、そこにおいて{最|もっと}も{適切|てきせつ}な{行為|こうい}とは{何|なに}かを{探究|たんきゅう}することには{意味|いみ}がありますし、その{探究|たんきゅう}によって{最|もっと}も{適切|てきせつ}とされる{行為|こうい}を{選択|せんたく}すべきでしょう。

しかしながら、その{現実|げんじつ}のほうに{問題|もんだい}があるとすれば、そこで{最|もっと}も{適切|てきせつ}とされた{行為|こうい}は「{適切|てきせつ}」であるにしても、「{正|ただ}しい」{行為|こうい}ではないはずです。
（{注|ちゅう}1）{所与|しょよ}の：{与|あた}えられた
（{注|ちゅう}2）～に依拠（いきょ）する：～に{基|もと}づく
（{注|ちゅう}3）ともすると：ここでは、つい`,
      arti: `Bukankah banyak dari kita sekarang berpikir bahwa masyarakat tidak mungkin digerakkan? Lalu, dengan menjadikannya kondisi yang sudah diberikan (catatan 1), kita menentukan standar penilaian tentang bagaimana harus bertindak. Dengan kata lain, kita yakin "masyarakat ini tidak bisa digerakkan, jadi tidak ada cara lain selain menerimanya sebagai kenyataan", dan hanya mempertimbangkan tindakan yang bisa dilakukan dalam batas itu. Di sinilah letak ① kesalahan besar.

Memang masyarakat ini sulit digerakkan. Itu fakta. Tetapi hal itu dan bagaimana semestinya masyarakat ini adalah dua hal yang sama sekali berbeda. Meski begitu, kebenaran dan kebaikan tindakan kita ditentukan berdasarkan (catatan 2) kenyataan di depan mata. Dengan begini, meskipun ketidakadilan terjadi dalam kenyataan, kita tidak bisa mempertanyakannya. Sebab aturan tentang apa itu tindakan yang benar ditetapkan dengan kenyataan seperti itu sebagai prasyarat. Saya berpendapat bahwa jika kenyataan di depan mata tidak sesuai dengan keadilan, kebenaran dan kebaikan tindakan di dalamnya tidak bisa dipertanyakan, tetapi kita cenderung tanpa sadar (catatan 3) menganggap tindakan yang "tepat" dalam batas kenyataan itu sebagai tindakan yang "benar". Memang, jika ② kenyataan itu sulit digerakkan dan kita harus hidup di dalamnya, mencari tindakan apa yang paling tepat di sana ada artinya, dan kita sebaiknya memilih tindakan yang dianggap paling tepat dari pencarian itu.

Namun, jika kenyataan itulah yang bermasalah, tindakan yang dianggap paling tepat di sana, meskipun "tepat", seharusnya bukan tindakan yang "benar".
(Catatan 1) 所与の: yang diberikan
(Catatan 2) ～に依拠する: berdasarkan ~
(Catatan 3) ともすると: di sini, tanpa sadar`,
    },

    // ── 問題10：サルと人間の視線 ──
    "10": {
      yomi: `{互|たが}いに{視線|しせん}を{向|む}けるという{場面|ばめん}では、サルと{人間|にんげん}には{大|おお}きな{違|ちが}いがある。サルにとって{相手|あいて}をじっと{見|み}つめるのは{軽|かる}い{威嚇|いかく}になり、{強|つよ}いサルの{特権|とっけん}である。{弱|よわ}いサルは、{見|み}つめられたら{決|けっ}して{見返|みかえ}してはいけない。{挑戦|ちょうせん}したとみなされて{攻撃|こうげき}を{受|う}ける{羽目|はめ}になるからだ。{強|つよ}いサルの{視線|しせん}を{避|さ}けて{横|よこ}や{下|した}を{向|む}くか、{歯|は}をむき{出|だ}して{笑|わら}ったような{表情|ひょうじょう}をすればいい。

{強|つよ}いサルは{自分|じぶん}の{優位性|ゆういせい}を{確認|かくにん}できれば、それ{以上|いじょう}威嚇（いかく）することはない。ただ、{自分|じぶん}が{強|つよ}いサルの{関心|かんしん}を{引|ひ}きそうな{食物|しょくもつ}に{手|て}をかけていたら、すぐさまその{場|ば}を{退|しりぞ}いたほうがいいだろう。{競合|きょうごう}する{場面|ばめん}では、{弱|よわ}いサルが{強|つよ}いサルに{譲|ゆず}るように{誰|だれ}もが{期待|きたい}しているからだ。それがサル{社会|しゃかい}のルールである。

{人間|にんげん}ではサルとは{違|ちが}ったことが{起|お}こる。{時折|ときおり}「{眼|がん}（{注|ちゅう}1）をつけただろう」とすごまれる（{注|ちゅう}2）ことがあるが、{見|み}つめるという{行為|こうい}はふつう{威嚇|いかく}にはつながらない。むしろ、{相手|あいて}に{積極的|せっきょくてき}な{関心|かんしん}を{向|む}けたり、{許容|きょよう}や{忠告|ちゅうこく}、{愛|あい}の{表現|ひょうげん}であったりする。{視線|しせん}の{向|む}け{方|かた}にも{作法|さほう}があり、{目|め}をかっと{見開|みひら}いたり、{細|ほそ}めたり、{丸|まる}くしたり、{四角|しかく}にしたり、{横目|よこめ}や{流|なが}し{目|め}、{上目|うわめ}づかいや{見下|みくだ}すなど、{多種多様|たしゅたよう}である。その{作法|さほう}は{文化|ぶんか}によっても、{性別|せいべつ}や{年齢|ねんれい}、{身分|みぶん}や{服装|ふくそう}によっても{違|ちが}ってくる。それは、{人間|にんげん}にとって{顔|かお}と{顔|かお}とを{合|あ}わせ、{視線|しせん}を{交|か}わすことが{重要|じゅうよう}なコミュニケーションであるからだ。

{実際|じっさい}、{言葉|ことば}が{発達|はったつ}した{私|わたし}たちの{社会|しゃかい}でも、{重要|じゅうよう}なことは{直接|ちょくせつ}{会|あ}って{決|き}めることが{多|おお}いし、{面接|めんせつ}は{人物|じんぶつ}を{確|たし}かめる{手段|しゅだん}として{重用|じゅうよう}されている。（{中略|ちゅうりゃく}）

ところが、{現代|げんだい}の{情報|じょうほう}{機器|きき}はこの{視線|しせん}の{作法|さほう}をあまり{使|つか}わなくてもすむ{社会|しゃかい}をつくってしまった。{人々|ひとびと}は{毎日|まいにち}インターネットやメールをのぞくために{多|おお}くの{時間|じかん}を{使|つか}っている。{家族|かぞく}や{親|した}しい{仲間|なかま}とじっくり{顔|かお}を{合|あ}わせて、{対話|たいわ}や{協同|きょうどう}{作業|さぎょう}を{楽|たの}しむ{時間|じかん}を{失|うしな}いつつある。

その{結果|けっか}、{多様|たよう}な{視線|しせん}の{作法|さほう}を{忘|わす}れ、{他人|たにん}と{視線|しせん}を{合|あ}わせることが{億劫|おっくう}となっているのではないだろうか。だが、{言葉|ことば}は{視線|しせん}のコミュニケーションを{代替|だいたい}できない。{言葉|ことば}は{意味|いみ}を、{視線|しせん}は{感情|かんじょう}を{伝|つた}える。むしろ{意味|いみ}があいまいであるからこそ、{視線|しせん}は{暖|あたた}かくも{冷|つめ}たくもなりうるし、そこで{受|う}けた{印象|いんしょう}を{後|あと}で{変|か}えることもできるのである。

{言葉|ことば}は{視覚|しかく}で{得|え}た{映像|えいぞう}や{画像|がぞう}を{意味|いみ}として{切|き}り{取|と}る。そして{文字|もじ}はその{言葉|ことば}を{化石化|かせきか}する{装置|そうち}である。それが{持|も}ち{運|はこ}び{可能|かのう}な{効率的|こうりつてき}な{手段|しゅだん}だからこそ、{人間|にんげん}は{世界|せかい}を{言葉|ことば}や{文字|もじ}で{塗|ぬ}り{替|か}えた。だがそのおかげで、{私|わたし}たちは{豊|ゆた}かな{心|こころ}を{育|はぐく}んできた{視線|しせん}による{対面|たいめん}の{世界|せかい}を{忘|わす}れようとしている。それは{皮肉|ひにく}にもサルのような{視線|しせん}を{合|あ}わせない、{優劣|ゆうれつ}{社会|しゃかい}に{移行|いこう}することにつながるのではないか、と{私|わたし}は{不安|ふあん}に{思|おも}っている。
（{注|ちゅう}1）眼（がん）をつける：{相手|あいて}の{顔|かお}をにらむ
（{注|ちゅう}2）すごむ：{脅|おど}すような{態度|たいど}をとる`,
      arti: `Dalam situasi saling menatap, ada perbedaan besar antara monyet dan manusia. Bagi monyet, menatap lekat lawan menjadi ancaman ringan, dan itu hak istimewa monyet yang kuat. Monyet yang lemah, jika ditatap, sama sekali tidak boleh membalas tatapan. Sebab ia akan dianggap menantang dan akhirnya diserang. Cukup menghindari tatapan monyet kuat dengan menoleh ke samping atau ke bawah, atau memperlihatkan gigi dengan ekspresi seperti tertawa.

Jika monyet kuat sudah bisa memastikan keunggulannya, ia tidak akan mengancam lebih jauh. Hanya saja, jika kita sedang memegang makanan yang tampaknya menarik perhatian monyet kuat, sebaiknya segera mundur dari tempat itu. Sebab dalam situasi persaingan, semua pihak berharap monyet lemah mengalah kepada monyet kuat. Itulah aturan masyarakat monyet.

Pada manusia, terjadi hal yang berbeda dari monyet. Kadang ada yang mengancam (catatan 2), "Kamu memelototiku (catatan 1), ya?", tetapi tindakan menatap biasanya tidak berujung pada ancaman. Justru bisa berupa perhatian aktif kepada lawan, penerimaan, nasihat, atau ungkapan cinta. Cara mengarahkan tatapan pun punya tata cara: membelalak, menyipit, membulatkan mata, menajamkan mata, melirik, mengerling, menatap dari bawah, memandang rendah, dan sebagainya, sangat beragam. Tata cara itu berbeda-beda menurut budaya, juga menurut jenis kelamin, usia, status, dan pakaian. Itu karena bagi manusia, bertatap muka dan saling bertukar pandang adalah komunikasi yang penting.

Kenyataannya, bahkan dalam masyarakat kita yang bahasanya sudah berkembang, hal penting sering diputuskan dengan bertemu langsung, dan wawancara dihargai sebagai sarana memastikan seseorang. (dipersingkat)

Namun, perangkat informasi modern telah menciptakan masyarakat yang tidak banyak memerlukan tata cara menatap ini. Orang-orang setiap hari menghabiskan banyak waktu untuk melihat internet dan email. Kita mulai kehilangan waktu untuk bertatap muka dengan keluarga dan teman dekat, menikmati percakapan dan kerja sama.

Akibatnya, bukankah kita melupakan beragam tata cara menatap, dan bertatapan dengan orang lain menjadi hal yang malas dilakukan? Namun, kata-kata tidak bisa menggantikan komunikasi lewat tatapan. Kata-kata menyampaikan makna, tatapan menyampaikan perasaan. Justru karena maknanya samar, tatapan bisa menjadi hangat atau dingin, dan kesan yang diterima di sana bisa diubah belakangan.

Kata-kata memotong gambar dan citra yang diperoleh lewat penglihatan menjadi makna. Dan huruf adalah perangkat yang memfosilkan kata-kata itu. Justru karena itu sarana yang efisien dan bisa dibawa ke mana-mana, manusia mengecat ulang dunia dengan kata-kata dan huruf. Tetapi karena itu, kita hampir melupakan dunia tatap muka lewat tatapan yang telah menumbuhkan hati yang kaya. Saya khawatir, ironisnya, itu justru mengarah pada peralihan ke masyarakat unggul-asor yang tidak saling menatap seperti monyet.
(Catatan 1) 眼をつける: memelototi wajah lawan
(Catatan 2) すごむ: bersikap mengancam`,
    },

    // ── 問題11：未経験の仕事と部下の育成 ──
    "11": {
      yomi: `【{意見|いけん} A】
{会社|かいしゃ}の{仕事|しごと}は{学校|がっこう}と{違|ちが}い、{知識|ちしき}だけでは{役|やく}に{立|た}たず、{実際|じっさい}の{判断|はんだん}や{行動|こうどう}が{問題|もんだい}である。だから{何|なに}ごとも、{実際|じっさい}に{経験|けいけん}しない{限|かぎ}り、{新|あたら}しい{能力|のうりょく}は{身|み}につかない。{今|いま}{持|も}っている{能力|のうりょく}というのはすべて、{過去|かこ}において{未|み}{経験|けいけん}の{仕事|しごと}に{取|と}り{組|く}んだ{結果|けっか}、{身|み}についたものだ。

したがって、{部下|ぶか}や{後輩|こうはい}に{対|たい}しては{常|つね}に、{今|いま}までの{仕事|しごと}をだいたいこなせる（{注|ちゅう}）ようになったなと{思|おも}ったら、すかさず{彼|かれ}にとっては{未|み}{経験|けいけん}の{仕事|しごと}を{与|あた}え、それをやりとげるようバックアップをする{必要|ひつよう}がある。

（{中略|ちゅうりゃく}）

そして{何|なん}とか{問題|もんだい}を{克服|こくふく}したら、{必|かなら}ずほめる。ほめることによって{本人|ほんにん}も“おれもやれるな”と{自信|じしん}がつき、{次|つぎ}はこちらから{未|み}{経験|けいけん}の{仕事|しごと}を{与|あた}えなくても、{自分|じぶん}で{新|あたら}しい{問題|もんだい}を{買|か}って{出|で}るようになる。そして{全力|ぜんりょく}{投球|とうきゅう}でそれと{対決|たいけつ}し、{克服|こくふく}してさらに{自信|じしん}の{持|も}てる{範囲|はんい}を{広|ひろ}げ、さらに{未|み}{経験|けいけん}の{課題|かだい}に{取|と}り{組|く}むという{成長|せいちょう}{循環|じゅんかん}に{入|はい}っていく。
（{注|ちゅう}）こなす：{処理|しょり}する

【{意見|いけん} B】
{企業|きぎょう}で{人材|じんざい}を{育|そだ}てるには、{上司|じょうし}が{部下|ぶか}の{行動|こうどう}のスタイルを{理解|りかい}して{指導|しどう}を{行|おこな}うことが{重要|じゅうよう}だ。これまでは、まずはとにかく{経験|けいけん}させ、その{過程|かてい}で{試行錯誤|しこうさくご}しながら{進歩|しんぽ}していくのがよいと{考|かんが}えられてきたが、{最近|さいきん}では{事前|じぜん}に{情報|じょうほう}をインプットした{上|うえ}で{経験|けいけん}をしたいというタイプが{多|おお}い。このようなタイプには、{未|み}{経験|けいけん}の{仕事|しごと}をいきなり{与|あた}えるのではなく、{十分|じゅうぶん}に{情報|じょうほう}を{与|あた}え{全体像|ぜんたいぞう}をつかませた{上|うえ}で、{新|あたら}しい{仕事|しごと}に{取|と}り{組|く}ませることが{効果的|こうかてき}だ。

{最近|さいきん}の{部下|ぶか}は{現状|げんじょう}{維持|いじ}でいいと{考|かんが}える{人|ひと}が{多|おお}いという{批判|ひはん}が{聞|き}かれるが、{彼|かれ}らの{行動|こうどう}のスタイルに{合|あ}わせて{経験|けいけん}を{積|つ}ませていくことによって{視野|しや}が{広|ひろ}がり、{自|みずか}ら{新|あたら}しいことに{取|と}り{組|く}もうという{姿勢|しせい}を{持|も}つようになるだろう。`,
      arti: `[Pendapat A]
Pekerjaan di perusahaan berbeda dengan sekolah; pengetahuan saja tidak berguna, yang menjadi soal adalah penilaian dan tindakan nyata. Karena itu, dalam hal apa pun, kemampuan baru tidak akan terbentuk selama tidak benar-benar dialami. Semua kemampuan yang dimiliki sekarang terbentuk sebagai hasil menghadapi pekerjaan yang belum pernah dialami di masa lalu.

Karena itu, terhadap bawahan atau junior, begitu kita merasa ia sudah kurang lebih bisa menyelesaikan (catatan) pekerjaan selama ini, kita perlu segera memberinya pekerjaan yang belum pernah ia alami dan mendukungnya agar bisa menuntaskannya.

(dipersingkat)

Lalu jika ia entah bagaimana berhasil mengatasi masalah, pastikan memujinya. Dengan dipuji, ia pun menjadi percaya diri, "Aku juga bisa, ya," dan selanjutnya meski kita tidak memberinya pekerjaan baru, ia akan dengan sukarela mengambil masalah baru. Lalu ia menghadapinya dengan sekuat tenaga, mengatasinya, makin memperluas cakupan rasa percaya dirinya, dan menghadapi tugas baru lainnya, masuk ke dalam siklus pertumbuhan.
(Catatan) こなす: menangani, menyelesaikan

[Pendapat B]
Untuk mengembangkan SDM di perusahaan, penting bagi atasan untuk memahami gaya tindakan bawahan dalam membimbing. Selama ini dianggap baik untuk pertama-tama langsung memberi pengalaman, lalu bawahan maju sambil mencoba-coba dalam prosesnya, tetapi belakangan banyak tipe yang ingin mendapat masukan informasi terlebih dahulu sebelum mengalaminya. Untuk tipe seperti ini, efektif untuk tidak tiba-tiba memberi pekerjaan baru, tetapi memberi informasi yang cukup dan membuatnya memahami gambaran keseluruhan sebelum menangani pekerjaan baru.

Terdengar kritik bahwa banyak bawahan zaman sekarang berpikir cukup mempertahankan keadaan, tetapi dengan memberi pengalaman sesuai gaya tindakan mereka, wawasan mereka akan meluas, dan mereka akan memiliki sikap untuk menghadapi hal baru atas kemauan sendiri.`,
    },

    // ── 問題12：倫理的な時代 ──
    "12": {
      yomi: `このところ、「○○{倫理|りんり}」という{言葉|ことば}をしばしば{耳|みみ}にする。マスコミでは、{政治|せいじ}{倫理|りんり}、{企業|きぎょう}{倫理|りんり}、メディア{倫理|りんり}などといった{言葉|ことば}はおなじみのものだろう。そうした{言葉|ことば}は、なにか{問題|もんだい}が{起|お}きたときの{掛|か}け{声|ごえ}のようなもので、{空疎|くうそ}（{注|ちゅう}）な常套句（じょうとうく）にすぎないのかもしれない。だが、{漠然|ばくぜん}と、{倫理|りんり}といったものが{必要|ひつよう}だという{気分|きぶん}が{漂|ただよ}っているのは、{事実|じじつ}であるように{思|おも}う。

そうした{雰囲気|ふんいき}を{受|う}けて、{倫理学|りんりがく}では、{応用|おうよう}{倫理学|りんりがく}と{呼|よ}ばれる{分野|ぶんや}が{急速|きゅうそく}に{成長|せいちょう}し、さまざまな{倫理|りんり}が{提唱|ていしょう}されつつある。たとえば、{生命|せいめい}{倫理|りんり}、{環境|かんきょう}{倫理|りんり}、ビジネス{倫理|りんり}に{始|はじ}まって、{情報|じょうほう}{倫理|りんり}、{工学|こうがく}{倫理|りんり}、スポーツ{倫理|りんり}、さらには、{遺伝子|いでんし}{倫理|りんり}、{脳|のう}{神経|しんけい}{倫理|りんり}、ナノ{倫理|りんり}、ロボット{倫理|りんり}といった{具合|ぐあい}に、{言葉|ことば}を{見|み}ただけでは、{内容|ないよう}がにわかには{想像|そうぞう}しにくいものまで{登場|とうじょう}している。「なんでも{倫理|りんり}{症候群|しょうこうぐん}」とでもいいたくなるほど、「○○{倫理|りんり}」が{大|おお}はやりなのだ。どうやら、{現代|げんだい}は「{倫理的|りんりてき}な{時代|じだい}」らしいのである。

こうした{倫理|りんり}ばやりは、わたしのように{哲学|てつがく}や{倫理学|りんりがく}を{専攻|せんこう}する{人間|にんげん}にとって、{必|かなら}ずしも{喜|よろこ}ばしい{事態|じたい}であるわけではない。それは、{倫理|りんり}が{空気|くうき}のようなものだからだ。

{普段|ふだん}、わたしたちが{生活|せいかつ}しているときに、{空気|くうき}を{吸|す}っていることをとりたてて{意識|いしき}などしない。{生|い}きていく{上|うえ}で{空気|くうき}が{必要|ひつよう}なことはわかっていても、{希薄|きはく}になって、{息苦|いきぐる}しくでもならない{限|かぎ}り、{空気|くうき}は{意識|いしき}されたりはしない。

{倫理|りんり}には、それと{似|に}たところがある。{倫理|りんり}がさかんに{語|かた}られるのは、{社会|しゃかい}がそれまで{通|どお}りにはいかず、{息苦|いきぐる}しくなっているような{時代|じだい}である。{少|すく}なくとも{歴史|れきし}を{振|ふ}り{返|かえ}ってみると、「{倫理的|りんりてき}な{時代|じだい}」はいずれも{価値観|かちかん}の{大|おお}きな{変動期|へんどうき}にあたっていた。つまり、それまで{当然|とうぜん}だと{思|おも}っていた{考|かんが}え{方|かた}や{生|い}き{方|かた}が{大|おお}きく{揺|ゆ}らぎ、どう{考|かんが}え、どう{生|い}きたらよいのかわからないようなときに、{倫理|りんり}は{求|もと}められてきたのだ。わたしたちが{生|い}きている{現代|げんだい}は、そうした{時代|じだい}である{可能性|かのうせい}が{高|たか}い。

この{場合|ばあい}、{一番|いちばん}の{問題|もんだい}は、{変動期|へんどうき}の{人間|にんげん}には、{先|さき}が{容易|ようい}に{見通|みとお}せないことである。{現在|げんざい}は、{過去|かこ}の{歴史的|れきしてき}な{事例|じれい}とは{違|ちが}って、どのような{結果|けっか}が{待|ま}ち{受|う}けているか、あらかじめ{知|し}ることはできない。わたしたちは、そうした{不確|ふたし}かさのなかで、{現在|げんざい}を{生|い}きていかざるをえない。

もちろん、こうした{事態|じたい}を、わたしたちが{新|あら}たな{未来|みらい}を{切|き}り{開|ひら}くのだと、{積極的|せっきょくてき}にいってみることはできるかもしれない。しかし、そうした{積極的|せっきょくてき}な{態度|たいど}や{発言|はつげん}が{簡単|かんたん}にはできないのが、「{倫理的|りんりてき}な{時代|じだい}」なのだ。とりあえずできるのは、なにが{起|お}きつつあるのか、どのような{問題|もんだい}が{出|で}てきているのかを{知|し}り、{考|かんが}えていくことである。それが、{現在|げんざい}を{生|い}きるということであるはずだ。
（{注|ちゅう}）空疎（くそ）：（{注|ちゅう}）常套句（じょうとうく）：ここでは、{中身|なかみ}のない{形|かたち}だけの{言葉|ことば}`,
      arti: `Akhir-akhir ini kita sering mendengar kata "etika ○○". Di media massa, kata-kata seperti etika politik, etika perusahaan, dan etika media sudah tidak asing lagi. Kata-kata seperti itu mungkin hanya semacam seruan ketika terjadi masalah, sekadar klise yang hampa (catatan). Namun, menurut saya memang benar ada suasana samar bahwa yang namanya etika itu diperlukan.

Menanggapi suasana seperti itu, dalam ilmu etika, bidang yang disebut etika terapan berkembang pesat, dan berbagai etika sedang diusulkan. Misalnya, mulai dari bioetika, etika lingkungan, etika bisnis, lalu etika informasi, etika teknik, etika olahraga, bahkan etika genetika, etika neurosains, etika nano, etika robot, sampai muncul hal-hal yang isinya sulit langsung dibayangkan hanya dari namanya. "Etika ○○" begitu populer sampai ingin disebut "sindrom semua-serba-etika". Tampaknya zaman sekarang adalah "zaman yang etis".

Tren etika seperti ini belum tentu keadaan yang menggembirakan bagi orang seperti saya yang mendalami filsafat dan ilmu etika. Sebab etika itu seperti udara.

Biasanya, saat menjalani hidup, kita tidak secara khusus menyadari bahwa kita menghirup udara. Meski tahu udara diperlukan untuk hidup, selama udara tidak menipis dan napas tidak sesak, udara tidak disadari.

Etika ada miripnya dengan itu. Etika ramai dibicarakan pada zaman ketika masyarakat tidak bisa berjalan seperti biasanya dan terasa sesak. Setidaknya, jika menengok sejarah, "zaman yang etis" selalu bertepatan dengan masa perubahan besar nilai-nilai. Artinya, etika dicari ketika cara berpikir dan cara hidup yang selama ini dianggap wajar sangat goyah, dan kita tidak tahu bagaimana harus berpikir dan bagaimana harus hidup. Zaman yang kita jalani sekarang besar kemungkinan adalah zaman seperti itu.

Dalam hal ini, masalah terbesarnya adalah manusia di masa perubahan tidak bisa dengan mudah melihat ke depan. Berbeda dengan contoh sejarah masa lalu, sekarang kita tidak bisa tahu sebelumnya hasil seperti apa yang menanti. Mau tak mau kita harus menjalani masa kini di tengah ketidakpastian seperti itu.

Tentu saja, mungkin kita bisa mencoba menyatakan secara positif bahwa dalam keadaan seperti ini kitalah yang membuka masa depan baru. Namun, "zaman yang etis" adalah zaman ketika sikap dan ucapan positif seperti itu tidak mudah dilakukan. Yang bisa dilakukan untuk sementara adalah mengetahui dan memikirkan apa yang sedang terjadi dan masalah apa yang muncul. Itulah seharusnya yang disebut menjalani masa kini.
(Catatan) 空疎・常套句: di sini, kata-kata yang hanya berupa bentuk tanpa isi`,
    },

    // ── 問題13：北山大学 証明書の発行 ──
    "13": {
      yomi: `{本学|ほんがく}に{在籍|ざいせき}{中|ちゅう}の{学生|がくせい}には{以下|いか}の{証明書|しょうめいしょ}の{発行|はっこう}が{可能|かのう}です。{証明書|しょうめいしょ}の{種類|しゅるい}や{書式|しょしき}によって、{発行|はっこう}{方法|ほうほう}が{異|こと}なります。

{証明書|しょうめいしょ}{自動|じどう}{発行機|はっこうき}で{申請|しんせい}・{発行|はっこう}できる{証明書|しょうめいしょ}（{全|すべ}て{北山|きたやま}{大学|だいがく}の{書式|しょしき}を{使用|しよう}）

{種類|しゅるい}　　{手数料|てすうりょう}（{和文|わぶん}、{英文|えいぶん}）　　{受付|うけつけ}{時間|じかん}　　{所要|しょよう}{日数|にっすう}
1.{在学|ざいがく}{証明書|しょうめいしょ}　　200{円|えん}　　{月|げつ}～{土|ど}　　{即日|そくじつ}
2.{成績|せいせき}{証明書|しょうめいしょ}　　200{円|えん}
3.{卒業|そつぎょう}{見込|みこみ}{証明書|しょうめいしょ}※1　　200{円|えん}　　8：30～20：00　　{即日|そくじつ}
4-a {健康|けんこう}{診断|しんだん}{証明書|しょうめいしょ}　　300{円|えん}

※1 {大学院|だいがくいん}の{学生|がくせい}は、{所属|しょぞく}{研究科|けんきゅうか}の{事務室|じむしつ}に{申請|しんせい}してください。{発行|はっこう}は{申請|しんせい}から5{日|か}{後|ご}となります。

{学生|がくせい}センター{窓口|まどぐち}で{申請|しんせい}が{必要|ひつよう}な{証明書|しょうめいしょ}※2

{種類|しゅるい}　　{受付|うけつけ}{時間|じかん}　　{所要|しょよう}{日数|にっすう}
4-b {健康|けんこう}{診断|しんだん}{証明書|しょうめいしょ}（{提出|ていしゅつ}{先|さき}が{指定|してい}する{書式|しょしき}）　　{月|げつ}～{金|きん}　　{申請|しんせい}{後|ご}5{日|か}
5-a {調査書|ちょうさしょ}（{北山|きたやま}{大学|だいがく}の{書式|しょしき}）　　9：00～16：30　　{申請|しんせい}{後|ご}7{日|か}
5-b {調査書|ちょうさしょ}（{提出|ていしゅつ}{先|さき}が{指定|してい}する{書式|しょしき}）

※2 {手数料|てすうりょう}は、お{問|と}い{合|あ}わせください。

・{申請|しんせい}の{時点|じてん}で、その{前|まえ}の{学期|がっき}までの{授業料|じゅぎょうりょう}を{納入|のうにゅう}していない{場合|ばあい}、{証明書|しょうめいしょ}は{発行|はっこう}できません。
・{申請|しんせい}には、{学生証|がくせいしょう}が{必要|ひつよう}です。{証明書|しょうめいしょ}{自動|じどう}{発行機|はっこうき}を{利用|りよう}しての{申請|しんせい}は、さらに4けたのパスワードも{必要|ひつよう}です。パスワードを{忘|わす}れた{学生|がくせい}は、{所属|しょぞく}{学部|がくぶ}の{事務室|じむしつ}に{再|さい}{交付|こうふ}を{願|ねが}い{出|で}てください。
・3{月|がつ}26{日|にち}～4{月|がつ}5{日|か}、9{月|がつ}25{日|にち}～10{月|がつ}5{日|か}は、データ{更新|こうしん}のため、{証明書|しょうめいしょ}{自動|じどう}{発行機|はっこうき}の{利用|りよう}を{停止|ていし}します。この{期間|きかん}は、{全|すべ}ての{証明書|しょうめいしょ}の{申請|しんせい}を{学生|がくせい}センター{窓口|まどぐち}で{受|う}け{付|つ}けます。
・{電話|でんわ}やメールによる{申請|しんせい}はできませんが、{郵送|ゆうそう}での{申請|しんせい}は{可能|かのう}です。その{場合|ばあい}、{郵送|ゆうそう}にかかる{日数|にっすう}も{考慮|こうりょ}して{申請|しんせい}してください。{詳|くわ}しくは、お{問|と}い{合|あ}わせください。

{問|と}い{合|あ}わせ{先|さき}：{北山|きたやま}{大学|だいがく}{学生|がくせい}センター{証明書|しょうめいしょ}{係|がかり}（041-296-8941）`,
      arti: `Mahasiswa yang terdaftar di universitas kami bisa mendapatkan surat keterangan berikut. Cara penerbitan berbeda-beda tergantung jenis dan format surat keterangan.

Surat keterangan yang bisa diajukan dan diterbitkan lewat mesin penerbit otomatis (semua memakai format Universitas Kitayama)

Jenis — Biaya (bahasa Jepang, bahasa Inggris) — Jam layanan — Waktu proses
1. Surat keterangan masih kuliah — 200 yen — Senin–Sabtu — hari itu juga
2. Surat keterangan nilai — 200 yen
3. Surat keterangan perkiraan lulus ※1 — 200 yen — 8.30–20.00 — hari itu juga
4-a Surat keterangan pemeriksaan kesehatan — 300 yen

※1 Mahasiswa pascasarjana harap mengajukan ke kantor program studi masing-masing. Penerbitan 5 hari setelah pengajuan.

Surat keterangan yang harus diajukan di loket Pusat Mahasiswa ※2

Jenis — Jam layanan — Waktu proses
4-b Surat keterangan pemeriksaan kesehatan (format yang ditentukan pihak tujuan) — Senin–Jumat — 5 hari setelah pengajuan
5-a Surat penilaian (format Universitas Kitayama) — 9.00–16.30 — 7 hari setelah pengajuan
5-b Surat penilaian (format yang ditentukan pihak tujuan)

※2 Untuk biaya, silakan tanyakan.

- Jika pada saat pengajuan biaya kuliah sampai semester sebelumnya belum dibayar, surat keterangan tidak bisa diterbitkan.
- Pengajuan memerlukan kartu mahasiswa. Pengajuan lewat mesin penerbit otomatis juga memerlukan kata sandi 4 digit. Mahasiswa yang lupa kata sandi harap meminta penerbitan ulang ke kantor fakultas masing-masing.
- Pada 26 Maret – 5 April dan 25 September – 5 Oktober, mesin penerbit otomatis tidak bisa dipakai karena pembaruan data. Selama masa ini, pengajuan semua surat keterangan diterima di loket Pusat Mahasiswa.
- Pengajuan lewat telepon atau email tidak bisa, tetapi pengajuan lewat pos bisa. Dalam hal ini, ajukan dengan memperhitungkan lamanya pengiriman pos. Untuk detailnya, silakan tanyakan.

Kontak: Bagian Surat Keterangan, Pusat Mahasiswa Universitas Kitayama (041-296-8941)`,
    },
  },
};
