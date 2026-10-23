import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2014
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1412: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "これから【{概略|がいりゃく}】をご{説明|せつめい}します。",
      arti: "Sekarang saya akan menjelaskan 【garis besarnya】.",
    },
    2: {
      yomi: "{面接|めんせつ}には、しっかりと{準備|じゅんび}をして【{臨|のぞ}みたい】と{思|おも}う。",
      arti: "Saya ingin 【menghadapi】 wawancara dengan persiapan yang matang.",
      optArti: ["ingin melibatkan diri, membelit", "ingin menantang", "ingin bekerja keras", "ingin menghadapi (臨みたい)"],
    },
    3: {
      yomi: "{昨日|きのう}、【{督促|とくそく}】の{電話|でんわ}がかかってきた。",
      arti: "Kemarin ada telepon 【penagihan/desakan pembayaran】.",
    },
    4: {
      yomi: "{春|はる}になり、{辺|あた}りには{花|はな}の{香|かお}りが【{漂|ただよ}い】はじめた。",
      arti: "Musim semi tiba, dan aroma bunga mulai 【semerbak/melayang】 di sekitar.",
      optArti: ["mengembara, berkelana", "kelembapan; menjadi lembap", "melayang, semerbak (漂い)", "bau, aroma"],
    },
    5: {
      yomi: "{応募|おうぼ}{作品|さくひん}を【{厳正|げんせい}】に{審査|しんさ}した。",
      arti: "Karya-karya yang masuk dinilai secara 【ketat dan adil】.",
    },
    6: {
      yomi: "これ{以上|いじょう}【{拒|こば}んで】もしかたない。",
      arti: "Percuma 【menolak】 lebih dari ini.",
      optArti: ["mendendam", "berdoa, menyembah", "membenci", "menolak (拒んで)"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{議会|ぎかい}に{提出|ていしゅつ}された{条例|じょうれい}は、{賛成|さんせい}{多数|たすう}で（　）された。",
      arti: "Peraturan daerah yang diajukan ke dewan (…) dengan suara mayoritas setuju.",
      optYomi: ["{判別|はんべつ}", "{採取|さいしゅ}", "{選出|せんしゅつ}", "{可決|かけつ}"],
      optArti: ["pembedaan", "pengambilan (sampel)", "pemilihan (orang)", "pengesahan (disetujui)"],
    },
    8: {
      yomi: "この{国|くに}に{来|き}たころは、{言葉|ことば}も{通|つう}じず{知人|ちじん}もいなくて、とても（　）{気持|きも}ちになったものだ。",
      arti: "Ketika baru datang ke negara ini, bahasanya tidak nyambung dan tidak punya kenalan, jadi perasaan saya sangat (…).",
      optYomi: [null, "{心細|こころぼそ}い", null, "{心無|こころな}い"],
      optArti: ["samar, sayup", "kesepian, merasa tak berdaya", "diam-diam, sunyi", "tidak berperasaan"],
    },
    9: {
      yomi: "A{社|しゃ}は{銀行|ぎんこう}からの{支援|しえん}によって{経営|けいえい}の{悪化|あっか}を{何|なん}とか（　）ことができた。",
      arti: "Berkat bantuan bank, perusahaan A entah bagaimana berhasil (…) memburuknya usaha.",
      optYomi: ["{投|な}げ{出|だ}す", "{吸|す}い{上|あ}げる", "{打|う}ち{切|き}る", "{食|く}い{止|と}める"],
      optArti: ["melempar, meninggalkan begitu saja", "menyedot", "menghentikan (di tengah jalan)", "membendung, menahan (agar tidak meluas)"],
    },
    10: {
      yomi: "この{会社|かいしゃ}の{営業部|えいぎょうぶ}では、{社員|しゃいん}{一人一人|ひとりひとり}に{毎週|まいしゅう}{厳|きび}しい（　）が{課|か}せられている。",
      arti: "Di bagian penjualan perusahaan ini, setiap karyawan dibebani (…) yang berat setiap minggu.",
      optArti: ["karier", "target (kuota kerja)", "kepala, ketua", "biaya"],
    },
    11: {
      yomi: "{今日|きょう}の{対談|たいだん}は、サッカー{選手|せんしゅ}と{物理|ぶつり}{学者|がくしゃ}という（　）の{組|く}み{合|あ}わせで{行|おこな}われる。",
      arti: "Bincang-bincang hari ini dilakukan dengan kombinasi (…), yaitu pemain sepak bola dan fisikawan.",
      optYomi: ["{異色|いしょく}", "{大差|たいさ}", "{変形|へんけい}", "{遠隔|えんかく}"],
      optArti: ["tidak biasa, unik", "perbedaan besar", "perubahan bentuk", "jarak jauh"],
    },
    12: {
      yomi: "この{美|うつく}しい{映像|えいぞう}は、コンピュータの{最新|さいしん}{技術|ぎじゅつ}を（　）して{作|つく}られたものだ。",
      arti: "Gambar yang indah ini dibuat dengan (…) teknologi komputer terbaru.",
      optYomi: ["{駆使|くし}", "{引用|いんよう}", "{充当|じゅうとう}", "{摂取|せっしゅ}"],
      optArti: ["memanfaatkan sepenuhnya", "mengutip", "mengalokasikan (dana)", "mengonsumsi, menyerap"],
    },
    13: {
      yomi: "この{数年|すうねん}で{数々|かずかず}の{食品|しょくひん}{問題|もんだい}が{発覚|はっかく}し、{食|しょく}の{安全|あんぜん}に{対|たい}する{信頼|しんらい}が（　）はじめた。",
      arti: "Dalam beberapa tahun ini banyak masalah pangan terbongkar, dan kepercayaan terhadap keamanan pangan mulai (…).",
      optYomi: ["{震|ふる}え", "{浮|う}かれ", "{揺|ゆ}らぎ", "{乱|みだ}れ"],
      optArti: ["gemetar", "bersuka ria, terlena", "goyah", "kacau"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "そのことが{一番|いちばん}【{気掛|きが}かり】でした。",
      arti: "Hal itulah yang paling 【mengganjal pikiran】.",
      optYomi: ["{残念|ざんねん}", "{意外|いがい}", "{心配|しんぱい}", "{不満|ふまん}"],
      optArti: ["sayang, menyesal", "tak terduga", "khawatir", "tidak puas"],
    },
    15: {
      yomi: "【{案|あん}の{定|じょう}】、{川西|かわにし}さんは{来|こ}なかった。",
      arti: "【Sudah kuduga】, Kawanishi-san tidak datang.",
      optArti: ["entah mengapa", "seperti yang diduga", "sayangnya", "kalau tidak salah"],
    },
    16: {
      yomi: "{公|おおやけ}の{場|ば}で【{不用意|ふようい}な】{発言|はつげん}はしないでほしい。",
      arti: "Saya harap Anda tidak berbicara 【secara gegabah】 di depan umum.",
      optYomi: ["{無駄|むだ}な", "{不利|ふり}な", "{無意味|むいみ}", "{不注意|ふちゅうい}な"],
      optArti: ["sia-sia", "merugikan", "tidak bermakna", "ceroboh, tidak hati-hati"],
    },
    17: {
      yomi: "これはかなり【{厄介|やっかい}な】{問題|もんだい}だ。",
      arti: "Ini masalah yang cukup 【merepotkan】.",
      optYomi: ["{面倒|めんどう}な", "{深刻|しんこく}な", "{重要|じゅうよう}な", "{特殊|とくしゅ}な"],
      optArti: ["merepotkan", "serius", "penting", "khusus"],
    },
    18: {
      yomi: "{山田氏|やまだし}は{当時|とうじ}のことを【{回想|かいそう}して】{次|つぎ}のように{語|かた}った。",
      arti: "Yamada 【mengenang】 masa itu dan bercerita sebagai berikut.",
      optYomi: ["{反省|はんせい}して", "{考|かんが}え{直|なお}して", "{後悔|こうかい}して", "{思|おも}い{返|かえ}して"],
      optArti: ["merenungkan kesalahan", "memikirkan ulang", "menyesal", "mengingat kembali"],
    },
    19: {
      yomi: "これは【{手分|てわ}け】したほうがいい。",
      arti: "Ini sebaiknya 【dibagi-bagi pekerjaannya】.",
      optYomi: ["{分配|ぶんぱい}", "{分担|ぶんたん}", "{分解|ぶんかい}", "{分別|ぶんべつ}"],
      optArti: ["pembagian (barang/hasil)", "pembagian tugas", "pembongkaran, penguraian", "pemilahan (sampah)"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{抱|かか}え{込|こ}む",
      arti: "抱え込む = memikul sendiri, memendam (masalah/pekerjaan)",
      optYomi: [
        "{何度|なんど}も{繰|く}り{返|かえ}して{覚|おぼ}えることで、{記憶|きおく}をしっかり{抱|かか}え{込|こ}むことができる。",
        "{問題|もんだい}が{生|しょう}じたら、{一人|ひとり}で{抱|かか}え{込|こ}まず、{上司|じょうし}や{同僚|どうりょう}に{相談|そうだん}するといい。",
        "この{塾|じゅく}は、{今年度|こんねんど}から{生徒|せいと}を30{人|にん}まで{抱|かか}え{込|こ}むことができるようになった。",
        "{母|はは}は{私|わたし}が{子|こ}どものころに{描|か}いた{絵|え}を、{今|いま}まで{大事|だいじ}に{抱|かか}え{込|こ}んでくれていた。",
      ],
      optArti: [
        "Dengan menghafal berulang kali, kita bisa 'memikul sendiri' ingatan dengan kuat.",
        "Jika muncul masalah, jangan 'memikul sendiri'; sebaiknya berkonsultasi dengan atasan atau rekan kerja.",
        "Mulai tahun ajaran ini, bimbel ini bisa 'memikul sendiri' murid hingga 30 orang.",
        "Ibu saya 'memikul sendiri' dengan hati-hati lukisan yang saya buat waktu kecil sampai sekarang.",
      ],
    },
    21: {
      yomi: "{裏腹|うらはら}",
      arti: "裏腹 = bertolak belakang (antara kata dan sikap, dsb.)",
      optYomi: [
        "あの{双子|ふたご}は{外見|がいけん}はそっくりだが、{全|まった}く{裏腹|うらはら}の{性格|せいかく}をしている。",
        "{地図|ちず}を{見|み}ると、{商店街|しょうてんがい}と{住宅街|じゅうたくがい}は{駅|えき}から{裏腹|うらはら}の{方角|ほうがく}にあるようだ。",
        "{前向|まえむ}きな{言葉|ことば}とは{裏腹|うらはら}に{課長|かちょう}の{態度|たいど}は{消極的|しょうきょくてき}で、{計画|けいかく}は{一向|いっこう}に{進|すす}まない。",
        "みんなが{私|わたし}を{見|み}るので{変|へん}だと{思|おも}ったら、セーターを{裏腹|うらはら}に{着|き}ていた。",
      ],
      optArti: [
        "Si kembar itu penampilannya mirip, tetapi wataknya sama sekali 'bertolak belakang'.",
        "Melihat peta, sepertinya kawasan pertokoan dan perumahan ada di arah yang 'bertolak belakang' dari stasiun.",
        "'Bertolak belakang' dengan kata-katanya yang positif, sikap kepala bagian pasif, dan rencananya sama sekali tidak maju.",
        "Semua orang melihat saya, saya pikir aneh, ternyata saya memakai sweter secara 'bertolak belakang'.",
      ],
    },
    22: {
      yomi: "{耐|た}えがたい",
      arti: "耐えがたい = sulit ditahan, tak tertahankan",
      optYomi: [
        "{今年|ことし}の{夏|なつ}は{例年|れいねん}になく{気温|きおん}が{上|あ}がり、{毎日|まいにち}{耐|た}えがたい{暑|あつ}さが{続|つづ}いている。",
        "このお{菓子|かし}は{湿気|しっけ}に{耐|た}えがたいので、{開封|かいふう}したら{早|はや}めに{食|た}べたほうがいい。",
        "そんなぜいたくな{暮|く}らしをしていたら、すぐに{貯金|ちょきん}が{耐|た}えがたくなるだろう。",
        "この{自転車|じてんしゃ}は{何度|なんど}も{修理|しゅうり}して{使|つか}っていたが、もう{耐|た}えがたいようだ。",
      ],
      optArti: [
        "Musim panas tahun ini suhunya naik tidak seperti biasanya, dan panas yang 'tak tertahankan' terus berlanjut setiap hari.",
        "Kue ini 'tak tertahankan' terhadap kelembapan, jadi setelah dibuka sebaiknya cepat dimakan.",
        "Kalau hidup semewah itu, tabungan akan segera 'tak tertahankan'.",
        "Sepeda ini sudah berkali-kali diperbaiki dan dipakai, tetapi sepertinya sudah 'tak tertahankan'.",
      ],
    },
    23: {
      yomi: "{携|たずさ}わる",
      arti: "携わる = terlibat, berkecimpung (dalam pekerjaan/bidang)",
      optYomi: [
        "{来年|らいねん}、{高校|こうこう}を{受験|じゅけん}するので、{現在|げんざい}{受験|じゅけん}{勉強|べんきょう}に{携|たずさ}わっています。",
        "{私|わたし}は{企業|きぎょう}で{薬品|やくひん}の{開発|かいはつ}に{携|たずさ}わっており、{日々|ひび}{研究|けんきゅう}に{追|お}われている。",
        "{仕事|しごと}を{辞|や}めて{自由|じゆう}な{時間|じかん}ができたので、{新|あたら}しい{趣味|しゅみ}に{携|たずさ}わりはじめた。",
        "{今日|きょう}は{午前中|ごぜんちゅう}は{来客|らいきゃく}と{面会|めんかい}し、{午後|ごご}は2{時間|じかん}{企画|きかく}{会議|かいぎ}に{携|たずさ}わる{予定|よてい}だ。",
      ],
      optArti: [
        "Tahun depan saya ujian masuk SMA, jadi sekarang saya 'berkecimpung' dalam belajar untuk ujian.",
        "Saya 'berkecimpung' dalam pengembangan obat di perusahaan, dan setiap hari sibuk dengan penelitian.",
        "Karena berhenti kerja dan punya waktu luang, saya mulai 'berkecimpung' dalam hobi baru.",
        "Hari ini pagi saya bertemu tamu, dan sore saya dijadwalkan 'berkecimpung' dalam rapat perencanaan selama 2 jam.",
      ],
    },
    24: {
      yomi: "{人一倍|ひといちばい}",
      arti: "人一倍 = melebihi orang lain, jauh lebih (giat/kuat) dari orang lain",
      optYomi: [
        "{村田|むらた}さんが{自分|じぶん}の{会社|かいしゃ}を{持|も}てたのは、これまで{人一倍|ひといちばい}{努力|どりょく}してきたからだ。",
        "あの{人|ひと}は{大切|たいせつ}なお{客様|きゃくさま}なので、{人一倍|ひといちばい}{上等|じょうとう}なワインでもてなしたい。",
        "{弟|おとうと}は{子|こ}どものころから{体|からだ}が{大|おお}きくて、{身長|しんちょう}はいつもクラスで{人一倍|ひといちばい}だった。",
        "タレントの{中村|なかむら}さんの{司会|しかい}が{好評|こうひょう}で、この{番組|ばんぐみ}の{視聴率|しちょうりつ}は{人一倍|ひといちばい}だ。",
      ],
      optArti: [
        "Murata-san bisa punya perusahaan sendiri karena selama ini ia berusaha 'melebihi orang lain'.",
        "Orang itu tamu penting, jadi saya ingin menjamunya dengan anggur yang 'melebihi orang lain' mewahnya.",
        "Adik laki-laki saya sejak kecil badannya besar, tingginya selalu 'melebihi orang lain' di kelas.",
        "Pembawaan acara artis Nakamura-san disukai, rating acara ini 'melebihi orang lain'.",
      ],
    },
    25: {
      yomi: "{復旧|ふっきゅう}",
      arti: "復旧 = pemulihan (fasilitas/infrastruktur kembali berfungsi)",
      optYomi: [
        "{長|なが}く{待|ま}たされたが、{雨|あめ}で{中断|ちゅうだん}された{野球|やきゅう}の{試合|しあい}がもうすぐ{復旧|ふっきゅう}するらしい。",
        "あの{二人|ふたり}はけんかしても{必|かなら}ず{復旧|ふっきゅう}するので、{本当|ほんとう}は{仲|なか}がいいのだろう。",
        "{今年|ことし}の{冬|ふゆ}はひどい{風邪|かぜ}をひいてしまい、{仕事|しごと}になかなか{復旧|ふっきゅう}できなかった。",
        "{昨夜|さくや}から{停電|ていでん}が{続|つづ}いているが、{先|さき}ほど12{時間|じかん}{振|ぶ}りにようやく{復旧|ふっきゅう}した。",
      ],
      optArti: [
        "Sudah lama menunggu, tetapi kabarnya pertandingan bisbol yang terhenti karena hujan akan segera 'dipulihkan'.",
        "Mereka berdua meski bertengkar pasti 'pulih', jadi sebenarnya mereka akrab.",
        "Musim dingin ini saya terkena flu parah, dan lama tidak bisa 'pulih' ke pekerjaan.",
        "Listrik padam sejak semalam, tetapi barusan akhirnya 'pulih' setelah 12 jam.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "この{島|しま}では、{春|はる}になると、{花|はな}（　）{花|はな}が{一斉|いっせい}に{咲|さ}いて、{島|しま}{全体|ぜんたい}を{埋|う}め{尽|つ}くします。",
      arti: "Di pulau ini, saat musim semi tiba, (…) bunga mekar serentak dan memenuhi seluruh pulau.",
      optArti: ["(…dan… dan sebagainya)", "(bunga) dengan (bunga)", "(…atau…)", "(花という花 = semua bunga yang ada)"],
    },
    27: {
      yomi: "うちの{猫|ねこ}は、カメラを{向|む}けると{逃|に}げてしまう。（　）カメラのレンズが{怖|こわ}いようだ。",
      arti: "Kucing kami kabur kalau kamera diarahkan kepadanya. (…) ia takut pada lensa kamera.",
      optArti: ["masa sih, tidak mungkin", "masa, kok bisa", "sepertinya", "malah, justru"],
    },
    28: {
      yomi: "{今年|ことし}は、{景気|けいき}の{回復|かいふく}{傾向|けいこう}（　）、{大|だい}{企業|きぎょう}を{中心|ちゅうしん}に{給与|きゅうよ}の{支給額|しきゅうがく}が{増|ふ}えると{見込|みこ}まれている。",
      arti: "Tahun ini, (…) tren pemulihan ekonomi, jumlah gaji yang dibayarkan diperkirakan meningkat, terutama di perusahaan besar.",
      optYomi: ["に{限|かぎ}って", "を{受|う}けて", null, "を{含|ふく}めて"],
      optArti: ["justru (pada saat itu)", "menyusul, sebagai dampak", "selama, sepanjang", "termasuk"],
    },
    29: {
      yomi: "{普段|ふだん}はLサイズを{着|き}ているのに、{間違|まちが}えてMサイズのTシャツを{買|か}ってしまった。でも、{着|き}てみたら、{少|すこ}しきついが、Mサイズも（　）。",
      arti: "Biasanya saya memakai ukuran L, tetapi saya salah membeli kaus ukuran M. Namun setelah dicoba, meski agak sempit, ukuran M pun (…).",
      optYomi: ["{着|き}られなくはなかった", "{着|き}られもしなかった", "{着|き}られてはならなかった", "{着|き}るに{着|き}られなかった"],
      optArti: ["bukan tidak bisa dipakai", "dipakai pun tidak bisa", "tidak boleh dipakai", "mau dipakai pun tidak bisa"],
    },
    30: {
      yomi: "（ホテルのホームページで）このページでは、{当|とう}ホテルにご{宿泊|しゅくはく}いただいたお{客様|きゃくさま}から（　）ご{意見|いけん}、ご{感想|かんそう}を{掲載|けいさい}しております。",
      arti: "(Di situs web hotel) Di halaman ini kami memuat pendapat dan kesan yang (…) dari para tamu yang telah menginap di hotel kami.",
      optYomi: [null, "{差|さ}し{上|あ}げた", "{頂戴|ちょうだい}した", null],
      optArti: ["(beliau) lakukan", "kami berikan", "kami terima (merendah)", "(beliau) datang"],
    },
    31: {
      yomi: "{悪|わる}いと{思|おも}うなら{素直|すなお}に「ごめん」と（　）、{弟|おとうと}はそれができなくて、すぐ{言|い}い{訳|わけ}する。",
      arti: "Kalau merasa salah, (…) dengan jujur bilang \"maaf\", tetapi adik saya tidak bisa melakukannya dan langsung mencari alasan.",
      optYomi: ["{謝|あやま}ろうとしないのだから", "{謝|あやま}っているところに", "{謝|あやま}ればいいものを", "{謝|あやま}らないかぎりは"],
      optArti: ["karena tidak mau minta maaf", "saat sedang minta maaf", "padahal cukup minta maaf saja", "selama tidak minta maaf"],
    },
    32: {
      yomi: "{私|わたし}が{小学校|しょうがっこう}に（　）のころ、{父|ちち}とどこか{大|おお}きな{川|かわ}へ{釣|つ}りに{行|い}った{記憶|きおく}がある。",
      arti: "Saya ingat, sekitar masa (…) SD, saya pergi memancing bersama ayah ke suatu sungai besar.",
      optYomi: ["{入|はい}ろうが{入|はい}るまいが", "{入|はい}るか{入|はい}らないか", "{入|はい}っていてもいなくても", "{入|はい}るにしても{入|はい}らないにしても"],
      optArti: ["masuk atau tidak masuk (tak peduli)", "baru akan atau baru saja masuk", "sudah masuk atau belum", "entah masuk entah tidak"],
    },
    33: {
      yomi: "バスの{窓|まど}から{大|おお}きな{虹|にじ}が{見|み}えたので{写真|しゃしん}を{撮|と}った。{山道|やまみち}を{走|はし}るバスに（　）けっこう{良|よ}く{撮|と}れていた。",
      arti: "Pelangi besar terlihat dari jendela bus, jadi saya memotretnya. (…) bus yang melaju di jalan gunung, hasilnya cukup bagus.",
      optYomi: ["{揺|ゆ}られながらにしては", "{揺|ゆ}られながらとなれば", "{揺|ゆ}られっぱなしなのか", "{揺|ゆ}られっぱなしだとは"],
      optArti: ["untuk ukuran sambil diguncang", "kalau sambil diguncang", "apakah terus diguncang", "tak disangka terus diguncang"],
    },
    34: {
      yomi: "{試合|しあい}{後|ご}、{木村|きむら}{選手|せんしゅ}は「{絶対|ぜったい}に{勝|か}ちたい{相手|あいて}だっただけに、{大事|だいじ}な{場面|ばめん}でのミスが（　）」とコメントした。",
      arti: "Setelah pertandingan, Kimura berkomentar, \"Justru karena itu lawan yang benar-benar ingin saya kalahkan, kesalahan di momen penting (…).\"",
      optYomi: ["{悔|く}やまないようにする", "{悔|く}やんでばかりだ", "{悔|く}やむべきではない", "{悔|く}やまれてならない"],
      optArti: ["berusaha tidak menyesal", "hanya menyesal terus", "tidak semestinya disesali", "sangat disesali, tak tertahankan"],
    },
    35: {
      yomi: "{夫|おっと}「{見|み}て。{実家|じっか}から{米|こめ}が{届|とど}いたよ。」{妻|つま}「わあ、すごい。これだけたくさんあれば、{私|わたし}たち、{当分|とうぶん}お{米|こめ}は（　）ね。」",
      arti: "Suami: \"Lihat. Beras datang dari rumah orang tua.\" Istri: \"Wah, hebat. Kalau sebanyak ini, untuk sementara kita (…) beras, ya.\"",
      optYomi: ["{買|か}ってきてはないんだ", "{買|か}ったきりになってる", "{買|か}わなくて{済|す}みそうだ", "{買|か}うつもりじゃなかった"],
      optArti: ["belum membeli (kok)", "sudah dibeli lalu dibiarkan", "sepertinya tidak perlu membeli", "tidak berniat membeli"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{彼|かれ}はこの{映画|えいが}で、{純粋|じゅんすい}で{不器用|ぶきよう}な＿＿ ＿＿ ★ ＿＿までに{演|えん}じきった。",
      arti: "Dalam film ini, ia memerankan tokoh utama yang polos dan canggung secara tuntas dengan daya ekspresinya yang mantap, sampai tingkat yang mengagumkan.",
      optYomi: ["その{確|たし}かな", "{主人公|しゅじんこう}を", "{見事|みごと}な", "{表現力|ひょうげんりょく}で"],
      optArti: ["yang mantap itu", "tokoh utama", "mengagumkan", "dengan daya ekspresi"],
    },
    37: {
      yomi: "{社長|しゃちょう}は、「{常|つね}に{魅力|みりょく}ある{新|しん}{商品|しょうひん}を{開発|かいはつ}し{続|つづ}けることが{重要|じゅうよう}であり、それ＿＿ ＿＿ ★ ＿＿ない」と{語|かた}った。",
      arti: "Direktur berkata, \"Terus mengembangkan produk baru yang menarik itu penting; tanpa itu, pertumbuhan perusahaan dan sebagainya tidak mungkin bisa diharapkan.\"",
      optYomi: [null, "{会社|かいしゃ}の{成長|せいちょう}", "{望|のぞ}みようも", null],
      optArti: ["dan sebagainya", "pertumbuhan perusahaan", "tidak ada cara untuk mengharapkan", "tanpa"],
    },
    38: {
      yomi: "たんぱく{質|しつ}は{体|からだ}の{組織|そしき}を{作|つく}る{重要|じゅうよう}な{成分|せいぶん}ですが、{多|おお}くとった＿＿ ＿＿ ★ ＿＿ものでもなく、とりすぎは{逆|ぎゃく}に{健康|けんこう}に{悪影響|あくえいきょう}を{及|およ}ぼすことがあります。",
      arti: "Protein adalah komponen penting pembentuk jaringan tubuh, tetapi bukan berarti kalau banyak dikonsumsi lantas tubuh jadi lebih kuat; kelebihan konsumsi justru bisa berdampak buruk bagi kesehatan.",
      optYomi: ["より{丈夫|じょうぶ}になる", null, null, null],
      optArti: ["menjadi lebih kuat", "apakah lantas", "meskipun, bukan berarti", "seperti itu"],
    },
    39: {
      yomi: "{来年|らいねん}2{月|がつ}のコンサート＿＿ ＿＿ ★ ＿＿となるCDを{発売|はつばい}した。",
      arti: "Band \"Z\" yang akan bubar dengan konser bulan Februari tahun depan merilis CD yang menjadi album keenam sekaligus yang terakhir.",
      optYomi: [null, "6{枚目|まいめ}にして{最後|さいご}", null, "{解散|かいさん}するバンド「Z」"],
      optArti: ["dengan (sebagai penutup)", "yang keenam sekaligus terakhir", "(partikel subjek)", "band \"Z\" yang akan bubar"],
    },
    40: {
      yomi: "{新型|しんがた}ゲーム{機|き}について、{来月|らいげつ}あたりに{何|なん}らかの{発表|はっぴょう}を＿＿ ＿＿ ★ ＿＿ホームページ{上|じょう}で{公表|こうひょう}し、{話題|わだい}となっている。",
      arti: "Mengenai konsol game model baru, perusahaan X yang diperkirakan akan membuat pengumuman sekitar bulan depan, mengumumkan di situs webnya bahwa paling cepat minggu depan akan membuka informasi, dan hal itu menjadi perbincangan.",
      optYomi: ["{見|み}られていた", "X{社|しゃ}が", "{来週|らいしゅう}にも{情報|じょうほう}を{公開|こうかい}すると", null],
      optArti: ["yang diperkirakan", "perusahaan X", "bahwa paling cepat minggu depan akan membuka informasi", "bahwa mungkin akan melakukan"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{子供|こども}から{感|かん}じられた", "{子供|こども}のことで{感|かん}じていた", "{子供|こども}ながらに{感|かん}じた", "{子供|こども}だったら{感|かん}じただろう"],
      optArti: ["terasa dari anak", "merasakan soal anak", "saya rasakan meskipun masih anak-anak", "kalau anak-anak mungkin akan merasa"],
    },
    42: {
      optArti: ["mungkin memang tidak", "katanya karena tidak", "ingin membuat berpikir tidak", "bukankah dianggap tidak?"],
    },
    43: {
      optYomi: ["{一度|いちど}", null, null, "{必|かなら}ず"],
      optArti: ["sekali", "saat itulah", "tadi", "pasti"],
    },
    44: {
      optYomi: ["{助|たす}かってきた", "{助|たす}かっていったわけだ", "{助|たす}かっていたかなんだ", "{助|たす}かった"],
      optArti: ["sudah terbantu (selama ini)", "berarti makin terbantu", "apakah terbantu atau apa", "terbantu"],
    },
    45: {
      optArti: ["pun, juga", "kepada", "daripada", "sekitar, sekadar"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{筆者|ひっしゃ}が{親|おや}に{対|たい}して{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin penulis sampaikan kepada orang tua?",
      optYomi: [
        "{子|こ}どもが{失敗|しっぱい}しなくなるまであきらめずに{教|おし}えることが{大切|たいせつ}だ。",
        "{子|こ}どもが{失敗|しっぱい}しないようあらかじめ{教|おし}えることが{大切|たいせつ}だ。",
        "{子|こ}どもが{失敗|しっぱい}するまでは{何|なに}も{言|い}わずに{見守|みまも}ることが{大切|たいせつ}だ。",
        "{子|こ}どもが{失敗|しっぱい}したとしてもそのまま{見守|みまも}ることが{大切|たいせつ}だ。",
      ],
      optArti: [
        "Penting untuk terus mengajari tanpa menyerah sampai anak tidak gagal lagi.",
        "Penting untuk mengajari anak sebelumnya agar tidak gagal.",
        "Penting untuk mengawasi tanpa berkata apa-apa sampai anak gagal.",
        "Penting untuk tetap membiarkan dan mengawasi meskipun anak gagal.",
      ],
    },
    47: {
      yomi: "「ビタミン{生活|せいかつ}V」について、この{文書|ぶんしょ}は{何|なに}を{知|し}らせているか。",
      arti: "Apa yang diberitahukan dokumen ini tentang \"Vitamin Seikatsu V\"?",
      optYomi: [
        "{通販|つうはん}を{一時|いちじ}{中止|ちゅうし}して、しばらくの{間|あいだ}{店舗|てんぽ}{販売|はんばい}のみ{行|おこな}う。",
        "{生産|せいさん}{体制|たいせい}が{整|ととの}い{次第|しだい}、{通販|つうはん}に{加|くわ}え{店舗|てんぽ}{販売|はんばい}も{再開|さいかい}する。",
        "{在庫|ざいこ}{不足|ぶそく}のため、{現在|げんざい}は{通販|つうはん}および{店舗|てんぽ}{販売|はんばい}を{中止|ちゅうし}している。",
        "{販売|はんばい}は{一時|いちじ}すべて{中止|ちゅうし}になるが、{後日|ごじつ}{店舗|てんぽ}{販売|はんばい}のみ{再開|さいかい}する。",
      ],
      optArti: [
        "Penjualan daring dihentikan sementara, dan untuk sementara hanya dijual di toko.",
        "Begitu sistem produksi siap, selain penjualan daring, penjualan di toko juga dibuka kembali.",
        "Karena stok kurang, saat ini penjualan daring dan di toko dihentikan.",
        "Semua penjualan dihentikan sementara, tetapi di kemudian hari hanya penjualan di toko yang dibuka kembali.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{前|まえ}へ{進|すす}みたいなら、{無理|むり}なことに{執着|しゅうちゃく}せずに{諦|あきら}めることも{必要|ひつよう}だ。",
        "{前|まえ}へ{進|すす}めない{理由|りゆう}がわからないなら、{諦|あきら}めることが{必要|ひつよう}だ。",
        "{能力|のうりょく}を{超|こ}えていると{思|おも}っても、すぐに{諦|あきら}めてしまっては{前|まえ}へ{進|すす}めない。",
        "{能力|のうりょく}に{合|あ}った{憧|あこが}れや{道|みち}を{求|もと}めるなら、{何事|なにごと}も{諦|あきら}めてはいけない。",
      ],
      optArti: [
        "Jika ingin maju, kadang perlu menyerah tanpa terpaku pada hal yang mustahil.",
        "Jika tidak tahu alasan mengapa tidak bisa maju, perlu menyerah.",
        "Meski merasa melampaui kemampuan, kalau langsung menyerah tidak akan bisa maju.",
        "Jika mencari impian atau jalan yang sesuai kemampuan, jangan menyerah dalam hal apa pun.",
      ],
    },
    49: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{少年|しょうねん}{時代|じだい}に{経験|けいけん}した{雷雨|らいう}の{記憶|きおく}は、{人|ひと}によって{異|こと}なる。",
        "{同|おな}じ{雷雨|らいう}でも、{今|いま}の{人|ひと}は{昔|むかし}の{人|ひと}と{同|おな}じような{印象|いんしょう}は{受|う}けない。",
        "{大人|おとな}になると、{子供|こども}{時代|じだい}に{経験|けいけん}した{雷雨|らいう}の{記憶|きおく}は{薄|うす}れてしまう。",
        "{昔|むかし}も{今|いま}も{雷雨|らいう}はあるが、{大人|おとな}になると{子供|こども}のときほど{強|つよ}い{印象|いんしょう}は{受|う}けない。",
      ],
      optArti: [
        "Ingatan tentang badai petir yang dialami di masa kecil berbeda-beda pada setiap orang.",
        "Meski badai petirnya sama, orang zaman sekarang tidak mendapat kesan yang sama dengan orang zaman dulu.",
        "Setelah dewasa, ingatan tentang badai petir di masa kecil memudar.",
        "Dulu maupun sekarang badai petir tetap ada, tetapi setelah dewasa kesan yang didapat tidak sekuat waktu kecil.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "いつまでも{不安|ふあん}をダラダラと{抱|かか}え{続|つづ}けてしまうとあるが、なぜか。",
      arti: "Tertulis \"terus-menerus memendam kecemasan berlarut-larut\"; mengapa?",
      optYomi: [
        "{不安|ふあん}の{原因|げんいん}がいくつもあって{対処|たいしょ}できないから。",
        "{不安|ふあん}について{考|かんが}えることを{避|さ}けてしまうから。",
        "{不安|ふあん}が{一人|ひとり}では{解決|かいけつ}できないほど{大|おお}きいから。",
        "{不安|ふあん}に{向|む}き{合|あ}うと{不安|ふあん}はさらに{膨|ふく}らんでいくから。",
      ],
      optArti: [
        "Karena penyebab kecemasan ada banyak sehingga tidak bisa ditangani.",
        "Karena kita menghindari memikirkan kecemasan itu.",
        "Karena kecemasannya terlalu besar untuk diselesaikan sendiri.",
        "Karena jika dihadapi, kecemasan makin membesar.",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}によると、{危機感|ききかん}をもつとどうなるか。",
      arti: "Menurut penulis, apa yang terjadi jika memiliki rasa krisis?",
      optYomi: [
        "{次|つぎ}の{行動|こうどう}に{移|うつ}れる。",
        "{行動|こうどう}に{自信|じしん}がもてる。",
        "{不安|ふあん}の{原因|げんいん}が{把握|はあく}できる。",
        "{不安|ふあん}の{正体|しょうたい}を{突|つ}き{止|と}めたくなる。",
      ],
      optArti: [
        "Bisa beralih ke tindakan berikutnya.",
        "Bisa percaya diri dalam bertindak.",
        "Bisa memahami penyebab kecemasan.",
        "Jadi ingin mengungkap wujud kecemasan.",
      ],
    },
    52: {
      yomi: "{不安|ふあん}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang kecemasan?",
      optYomi: [
        "{解決|かいけつ}しやすい{不安|ふあん}から{順々|じゅんじゅん}に{対応|たいおう}するといい。",
        "{保留|ほりゅう}にするべきではない{不安|ふあん}をまず{特定|とくてい}するといい。",
        "{不安|ふあん}を{感|かん}じたときはすぐに{解決策|かいけつさく}を{考|かんが}えて{実行|じっこう}するといい。",
        "{不安|ふあん}の{原因|げんいん}が{何|なに}かわかるまでしばらく{保留|ほりゅう}にしておくといい。",
      ],
      optArti: [
        "Sebaiknya tangani satu per satu mulai dari kecemasan yang mudah diselesaikan.",
        "Sebaiknya pertama-tama tentukan kecemasan yang tidak boleh ditunda.",
        "Saat merasa cemas, sebaiknya segera pikirkan solusinya dan jalankan.",
        "Sebaiknya tunda dulu sampai tahu apa penyebab kecemasan.",
      ],
    },
    53: {
      yomi: "いま{内側|うちがわ}から{生|い}きている{感情|かんじょう}と{重|かさ}なり{合|あ}う{表情|ひょうじょう}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang ekspresi yang bertumpang tindih dengan perasaan yang sedang dihayati dari dalam saat ini?",
      optYomi: [
        "{写真|しゃしん}やビデオだけでなく、{鏡|かがみ}でも{見|み}ることができる。",
        "{写真|しゃしん}やビデオはもちろん、{鏡|かがみ}ですら{見|み}ることはできない。",
        "{写真|しゃしん}やビデオでは{見|み}られるが、{鏡|かがみ}では{見|み}ることができない。",
        "{写真|しゃしん}やビデオでは{見|み}られないが、{鏡|かがみ}では{見|み}ることができる。",
      ],
      optArti: [
        "Bisa dilihat tidak hanya lewat foto atau video, tetapi juga lewat cermin.",
        "Tidak bisa dilihat lewat foto atau video, apalagi lewat cermin sekalipun.",
        "Bisa dilihat lewat foto atau video, tetapi tidak lewat cermin.",
        "Tidak bisa dilihat lewat foto atau video, tetapi bisa lewat cermin.",
      ],
    },
    54: {
      yomi: "{他者|たしゃ}の{表情|ひょうじょう}を{理解|りかい}することについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang memahami ekspresi orang lain?",
      optYomi: [
        "{人間|にんげん}{関係|かんけい}が{成立|せいりつ}すれば{容易|ようい}に{理解|りかい}できるが、それ{以前|いぜん}には{困難|こんなん}である。",
        "{人間|にんげん}{関係|かんけい}を{成立|せいりつ}させる{上|うえ}で{理解|りかい}が{欠|か}かせないが、{現実|げんじつ}には{容易|ようい}ではない。",
        "{理解|りかい}できないはずだが、{現実|げんじつ}には{人間|にんげん}{関係|かんけい}を{構築|こうちく}する{基盤|きばん}になっている。",
        "{理解|りかい}しようと{努力|どりょく}することが、{人間|にんげん}{関係|かんけい}を{構築|こうちく}する{上|うえ}で{役立|やくだ}っている。",
      ],
      optArti: [
        "Jika hubungan antarmanusia sudah terbentuk mudah dipahami, tetapi sebelum itu sulit.",
        "Pemahaman itu tak terpisahkan untuk membentuk hubungan antarmanusia, tetapi kenyataannya tidak mudah.",
        "Seharusnya tidak bisa dipahami, tetapi kenyataannya menjadi landasan membangun hubungan antarmanusia.",
        "Usaha untuk memahami berguna dalam membangun hubungan antarmanusia.",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うものはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{表情|ひょうじょう}から{理解|りかい}し{合|あ}うことは、{人間|にんげん}に{備|そな}わったメカニズムだと{考|かんが}えられる。",
        "{感情|かんじょう}を{表情|ひょうじょう}で{表現|ひょうげん}することは、{人間|にんげん}に{共通|きょうつう}するメカニズムだと{考|かんが}えられる。",
        "{他者|たしゃ}の{表情|ひょうじょう}を{理解|りかい}するメカニズムは、{経験|けいけん}を{通|とお}して{精巧|せいこう}になると{考|かんが}えられる。",
        "{典型的|てんけいてき}な{表情|ひょうじょう}の{違|ちが}いを{理解|りかい}するメカニズムには、{文化差|ぶんかさ}があると{考|かんが}えられる。",
      ],
      optArti: [
        "Saling memahami lewat ekspresi bisa dianggap sebagai mekanisme yang sudah ada dalam diri manusia.",
        "Mengungkapkan perasaan lewat ekspresi bisa dianggap sebagai mekanisme yang sama pada semua manusia.",
        "Mekanisme memahami ekspresi orang lain bisa dianggap makin canggih melalui pengalaman.",
        "Mekanisme memahami perbedaan ekspresi khas bisa dianggap memiliki perbedaan budaya.",
      ],
    },
    56: {
      yomi: "{多|おお}くの{大人|おとな}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang kebanyakan orang dewasa?",
      optYomi: [
        "{生活|せいかつ}も{人生|じんせい}もわかっていない。",
        "{生活|せいかつ}と{人生|じんせい}の{違|ちが}いがわかっていない。",
        "{生活|せいかつ}と{人生|じんせい}の{両方|りょうほう}を{教|おし}えている。",
        "{生活|せいかつ}と{人生|じんせい}の{違|ちが}いを{教|おし}えている。",
      ],
      optArti: [
        "Tidak memahami penghidupan maupun kehidupan.",
        "Tidak memahami perbedaan penghidupan dan kehidupan.",
        "Mengajarkan penghidupan dan kehidupan sekaligus.",
        "Mengajarkan perbedaan penghidupan dan kehidupan.",
      ],
    },
    57: {
      yomi: "{筆者|ひっしゃ}によると、{子供|こども}にとって{必要|ひつよう}なのはどのような{時間|じかん}か。",
      arti: "Menurut penulis, waktu seperti apa yang diperlukan anak-anak?",
      optYomi: [
        "{働|はたら}くことの{意義|いぎ}を{考|かんが}える。",
        "{人生|じんせい}と{生活|せいかつ}の{違|ちが}いを{学|まな}ぶ。",
        "{生活|せいかつ}に{必要|ひつよう}なことを{学|まな}ぶ。",
        "{人|ひと}が{生|い}きている{意味|いみ}を{考|かんが}える。",
      ],
      optArti: [
        "Memikirkan makna bekerja.",
        "Mempelajari perbedaan kehidupan dan penghidupan.",
        "Mempelajari hal yang diperlukan untuk penghidupan.",
        "Memikirkan makna manusia hidup.",
      ],
    },
    58: {
      yomi: "「{人生|じんせい}とは{何|なに}か」と{問|と}うことによって、{筆者|ひっしゃ}は{何|なに}がわかると{考|かんが}えているか。",
      arti: "Menurut penulis, dengan bertanya \"apa itu kehidupan\", apa yang bisa dipahami?",
      optYomi: [
        "{自分|じぶん}がなぜ{存在|そんざい}しているかということ。",
        "すべての{学|まな}びが{自分|じぶん}にとって{有益|ゆうえき}だということ。",
        "{教科|きょうか}で{扱|あつか}われている{事柄|ことがら}は{生活|せいかつ}に{必要|ひつよう}だということ。",
        "{人間|にんげん}が{存在|そんざい}すること{自体|じたい}が{不思議|ふしぎ}であるということ。",
      ],
      optArti: [
        "Mengapa diri sendiri ada.",
        "Bahwa semua pembelajaran bermanfaat bagi diri sendiri.",
        "Bahwa hal-hal yang dibahas dalam mata pelajaran diperlukan untuk penghidupan.",
        "Bahwa keberadaan manusia itu sendiri adalah hal yang ajaib.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{捨|す}てられたって{何|なん}とも{思|おも}わないのはなぜか。",
      arti: "Mengapa anak tidak peduli meskipun gambarnya dibuang?",
      optYomi: [
        "いつでも{描|か}きたいものが{描|か}けるから。",
        "{描|か}きたいものが{描|か}けて{納得|なっとく}したから。",
        "{描|か}きたいという{欲求|よっきゅう}が{満|み}たされたから。",
        "{最後|さいご}まで{描|か}けたことに{満足|まんぞく}しているから。",
      ],
      optArti: [
        "Karena kapan saja ia bisa menggambar apa yang ingin digambar.",
        "Karena ia sudah bisa menggambar apa yang diinginkan dan merasa puas.",
        "Karena keinginannya untuk menggambar sudah terpenuhi.",
        "Karena ia puas bisa menggambar sampai selesai.",
      ],
    },
    60: {
      yomi: "{子供|こども}の{描|か}いたものが「{作品|さくひん}」ではないのはなぜか。",
      arti: "Mengapa gambar buatan anak bukan \"karya\"?",
      optYomi: [
        "{大人|おとな}ほどの{表現力|ひょうげんりょく}や{情熱|じょうねつ}をもって{描|か}かれていないから。",
        "{観賞|かんしょう}されることを{目的|もくてき}として{描|か}かれていないから。",
        "{評価|ひょうか}に{値|あたい}する{出来上|できあ}がりになっていないから。",
        "{描|か}いた{本人|ほんにん}が{価値|かち}を{認|みと}めていないから。",
      ],
      optArti: [
        "Karena tidak digambar dengan daya ekspresi dan semangat setara orang dewasa.",
        "Karena tidak digambar dengan tujuan untuk dinikmati orang lain.",
        "Karena hasilnya tidak layak dinilai.",
        "Karena si penggambar sendiri tidak mengakui nilainya.",
      ],
    },
    61: {
      yomi: "「{絵描|えか}きさん」について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa yang dikatakan penulis tentang \"pelukis\"?",
      optYomi: [
        "かんぺきな{出来|でき}ばえを{求|もと}めている。",
        "いつも{同|おな}じような{描|か}き{方|かた}をしている。",
        "{買手|かいて}の{要望|ようぼう}どおりに{描|か}いている。",
        "{買|か}ってもらえるように{描|か}いている。",
      ],
      optArti: [
        "Mengejar hasil yang sempurna.",
        "Selalu melukis dengan cara yang serupa.",
        "Melukis sesuai permintaan pembeli.",
        "Melukis agar lukisannya dibeli.",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}は{芸術|げいじゅつ}をどのようにとらえているか。",
      arti: "Bagaimana penulis memandang seni?",
      optYomi: [
        "{人|ひと}を{引|ひ}きつける{魅力的|みりょくてき}なもの。",
        "{情熱|じょうねつ}に{突|つ}き{動|うご}かされて{作|つく}るもの。",
        "{他人|たにん}には{理解|りかい}できないようなもの。",
        "{人間|にんげん}の{生命力|せいめいりょく}を{巧|たく}みに{表現|ひょうげん}するもの。",
      ],
      optArti: [
        "Sesuatu yang memikat yang menarik hati orang.",
        "Sesuatu yang dibuat karena didorong oleh semangat.",
        "Sesuatu yang tidak bisa dipahami orang lain.",
        "Sesuatu yang dengan piawai mengungkapkan daya hidup manusia.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{近年|きんねん}の{世界|せかい}{遺産|いさん}について、AとBが{共通|きょうつう}して{認識|にんしき}している{点|てん}は{何|なに}か。",
      arti: "Mengenai Situs Warisan Dunia akhir-akhir ini, hal apa yang sama-sama disadari A dan B?",
      optYomi: [
        "{世界|せかい}{遺産|いさん}の{報道|ほうどう}のしかたが{過剰|かじょう}になってきている。",
        "{世界|せかい}{遺産|いさん}への{登録|とうろく}をめざす{動|うご}きが{過熱|かねつ}している。",
        "{世界|せかい}{遺産|いさん}への{登録|とうろく}で{登録|とうろく}{以前|いぜん}より{価値|かち}が{上|あ}がる。",
        "{世界|せかい}{遺産|いさん}は{観光|かんこう}{振興|しんこう}と{密接|みっせつ}に{関係|かんけい}している。",
      ],
      optArti: [
        "Cara pemberitaan Situs Warisan Dunia menjadi berlebihan.",
        "Gerakan untuk mendaftarkan diri sebagai Situs Warisan Dunia makin memanas.",
        "Dengan terdaftar sebagai Situs Warisan Dunia, nilainya naik dibanding sebelum terdaftar.",
        "Situs Warisan Dunia berkaitan erat dengan promosi pariwisata.",
      ],
    },
    64: {
      yomi: "AとBは、{世界|せかい}{遺産|いさん}をめぐってどのような{姿勢|しせい}を{持|も}つべきだと{述|の}べているか。",
      arti: "Menurut A dan B, sikap seperti apa yang semestinya dimiliki terkait Situs Warisan Dunia?",
      optYomi: [
        "AもBも、{世界|せかい}{遺産|いさん}への{登録|とうろく}による{経済|けいざい}{効果|こうか}は{期待|きたい}すべきではないと{述|の}べている。",
        "AもBも、{認定|にんてい}にかかわらず{文化財|ぶんかざい}として{価値|かち}のあるものは{保護|ほご}すべきだと{述|の}べている。",
        "Aは{保護|ほご}という{本来|ほんらい}の{目的|もくてき}に{立|た}ち{戻|もど}るべきだと{述|の}べ、Bは{認定|にんてい}に{惑|まど}わされずもの{自体|じたい}の{価値|かち}を{見定|みさだ}めるべきだと{述|の}べている。",
        "Aは{世界|せかい}{遺産|いさん}に{値|あたい}するかを{冷静|れいせい}に{再|さい}{検討|けんとう}すべきだと{述|の}べ、Bは{世界|せかい}{遺産|いさん}だけを{特別視|とくべつし}せず{他|ほか}にも{目|め}を{向|む}けるべきだと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan bahwa efek ekonomi dari pendaftaran Situs Warisan Dunia tidak semestinya diharapkan.",
        "A dan B sama-sama menyatakan bahwa terlepas dari pengakuan, benda yang bernilai sebagai warisan budaya harus dilindungi.",
        "A menyatakan harus kembali ke tujuan semula yaitu perlindungan; B menyatakan harus menilai nilai benda itu sendiri tanpa terkecoh oleh pengakuan.",
        "A menyatakan perlu mengkaji ulang dengan tenang apakah layak menjadi Situs Warisan Dunia; B menyatakan jangan hanya mengistimewakan Situs Warisan Dunia, tetapi juga memperhatikan yang lain.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "{筆者|ひっしゃ}は、どのような{書評|しょひょう}が{傲慢|ごうまん}だと{感|かん}じているか。",
      arti: "Ulasan buku seperti apa yang dirasa sombong oleh penulis?",
      optYomi: [
        "{大|たい}した{理由|りゆう}づけもなく{優劣|ゆうれつ}を{断定|だんてい}したもの。",
        "{優|すぐ}れている{点|てん}を{決|けっ}して{認|みと}めようとしないもの。",
        "{自身|じしん}に{知識|ちしき}があるかのように{見|み}せかけたもの。",
        "{自身|じしん}の{判断|はんだん}がすべてであるかのように{評価|ひょうか}したもの。",
      ],
      optArti: [
        "Yang memastikan baik-buruknya tanpa alasan berarti.",
        "Yang sama sekali tidak mau mengakui kelebihan.",
        "Yang berpura-pura seolah-olah dirinya berpengetahuan.",
        "Yang menilai seolah-olah penilaian dirinya adalah segalanya.",
      ],
    },
    66: {
      yomi: "ある{参考書|さんこうしょ}について、{筆者|ひっしゃ}が{心外|しんがい}だと{感|かん}じたのはどのような{書評|しょひょう}か。",
      arti: "Mengenai suatu buku referensi, ulasan seperti apa yang membuat penulis merasa tidak terima?",
      optYomi: [
        "どうにか{合格|ごうかく}できる{程度|ていど}を{目指|めざ}したのに、それ{以上|いじょう}の{内容|ないよう}が{必要|ひつよう}だと{批判|ひはん}したもの。",
        "{合格|ごうかく}に{必要|ひつよう}な{最低限|さいていげん}の{知識|ちしき}を{整理|せいり}したものなのに、{合格|ごうかく}は{不可能|ふかのう}だと{批判|ひはん}したもの。",
        "{敢|あ}えて{難|むずか}しいことは{書|か}いていないのに、それでもわかりにくいと{批判|ひはん}したもの。",
        "{難|むずか}しい{試験|しけん}でも{合格|ごうかく}できるように{書|か}いたのに、それでも{不十分|ふじゅうぶん}だと{批判|ひはん}したもの。",
      ],
      optArti: [
        "Padahal ditujukan agar sekadar bisa lulus, tetapi dikritik karena dianggap perlu isi yang lebih dari itu.",
        "Padahal berisi pengetahuan minimum yang diperlukan untuk lulus, tetapi dikritik bahwa lulus itu mustahil.",
        "Padahal sengaja tidak menulis hal sulit, tetapi tetap dikritik sulit dipahami.",
        "Padahal ditulis agar bisa lulus ujian sulit sekalipun, tetapi tetap dikritik tidak memadai.",
      ],
    },
    67: {
      yomi: "{筆者|ひっしゃ}によると、{本|ほん}が{良書|りょうしょ}と{言|い}えるのはどのような{場合|ばあい}か。",
      arti: "Menurut penulis, kapan sebuah buku bisa disebut buku yang baik?",
      optYomi: [
        "{書評|しょひょう}で{強|つよ}く{批判|ひはん}されない{場合|ばあい}。",
        "{多|おお}くの{人|ひと}が{価値|かち}を{認|みと}めている{場合|ばあい}。",
        "{求|もと}める{人|ひと}に{本|ほん}の{趣旨|しゅし}が{理解|りかい}しやすい{場合|ばあい}。",
        "{求|もと}める{人|ひと}のレベルや{目的|もくてき}にあっている{場合|ばあい}。",
      ],
      optArti: [
        "Jika tidak dikritik keras dalam ulasan.",
        "Jika banyak orang mengakui nilainya.",
        "Jika maksud buku mudah dipahami oleh orang yang mencarinya.",
        "Jika sesuai dengan level dan tujuan orang yang mencarinya.",
      ],
    },
    68: {
      yomi: "{本|ほん}を{批評|ひひょう}する{人|ひと}に{対|たい}して、{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin penulis sampaikan kepada orang yang mengulas buku?",
      optYomi: [
        "{著者|ちょしゃ}のあらゆる{本|ほん}を{読|よ}むべきだ。",
        "{極端|きょくたん}に{否定的|ひていてき}な{評価|ひょうか}は{避|さ}けるべきだ。",
        "それぞれの{本|ほん}の{存在|そんざい}{価値|かち}を{認|みと}めるべきだ。",
        "どのような{本|ほん}にも{先入観|せんにゅうかん}なしで{接|せっ}するべきだ。",
      ],
      optArti: [
        "Harus membaca semua buku karya pengarangnya.",
        "Harus menghindari penilaian yang sangat negatif.",
        "Harus mengakui nilai keberadaan setiap buku.",
        "Harus menghadapi buku apa pun tanpa prasangka.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{留学生|りゅうがくせい}のマイクさんは{日本|にほん}で{就職|しゅうしょく}したいと{思|おも}っている。マイクさんが{必|かなら}ず{出席|しゅっせき}しなければならない{行事|ぎょうじ}はいくつか。",
      arti: "Mike-san, seorang mahasiswa asing, ingin bekerja di Jepang. Berapa acara yang wajib dihadiri Mike-san?",
      optYomi: ["{一|ひと}つ", "{二|ふた}つ", "{三|みっ}つ", "{四|よっ}つ"],
      optArti: ["satu", "dua", "tiga", "empat"],
    },
    70: {
      yomi: "{林|はやし}さんはマスコミ{関連|かんれん}の{企業|きぎょう}に{就職|しゅうしょく}したいので、{関連|かんれん}{企業|きぎょう}に{就職|しゅうしょく}した{先輩|せんぱい}の{話|はなし}や、{関連|かんれん}{企業|きぎょう}の{仕事|しごと}{内容|ないよう}について{聞|き}きたいと{思|おも}っている。{林|はやし}さんは{授業|じゅぎょう}のため17{時|じ}{以降|いこう}しか{出席|しゅっせき}できない。{林|はやし}さんに{合|あ}う{行事|ぎょうじ}はどれか。",
      arti: "Hayashi-san ingin bekerja di perusahaan media massa, jadi ia ingin mendengar cerita senior yang bekerja di perusahaan terkait dan tentang isi pekerjaan perusahaan terkait. Karena ada kuliah, Hayashi-san hanya bisa hadir setelah pukul 17. Acara mana yang cocok untuk Hayashi-san?",
      optArti: ["hanya ③ dan ⑧", "③, ⑧, dan ⑩", "hanya ⑧", "hanya ⑧ dan ⑩"],
    },
  },

  bacaan: {
    // ── 問題7：牛の気持ち ──
    "7": {
      yomi: `{以下|いか}は、{丑年|うしどし}の2009{年|ねん}1{月|がつ}7{日|か}に{新聞|しんぶん}に{掲載|けいさい}された{文章|ぶんしょう}である。

{子供|こども}の{頃|ころ}、{十二支|じゅうにし}の{民話|みんわ}（{注|ちゅう}1・2）を{聞|き}いたとき、{私|わたし}が{気|き}になったのは、とにかく{牛|うし}のことだった。{牛|うし}は、「{自分|じぶん}は{歩|ある}くのが{遅|おそ}いから、{早|はや}めに{出発|しゅっぱつ}しよう」とずいぶん{早|はや}いうちから{出発|しゅっぱつ}した。そして、{一着|いっちゃく}でゴールする{寸前|すんぜん}であったにもかかわらず、{自分|じぶん}の{背中|せなか}に{乗|の}っていた{鼠|ねずみ}に{先|さき}を{越|こ}されてしまう。

{牛|うし}がどんな{気分|きぶん}だったのか、と{考|かんが}えると{切|せつ}なくて{仕方|しかた}がない。{自分|じぶん}の{地道|じみち}な{努力|どりょく}が{利用|りよう}されることは、さぞかし{悔|くや}しかったはずだ、と[41]。が、そのことを{話|はな}すと、{母|はは}は、「{牛|うし}はあまり{気|き}にしなかったんだよ。{十二支|じゅうにし}には{入|はい}れたし。『モーいいか』と{思|おも}ったくらい」と{答|こた}えた。{少|すこ}しほっとした。{確|たし}かに、{十二支|じゅうにし}の{一番目|いちばんめ}が、{二番目|にばんめ}に{比|くら}べて{特典|とくてん}があるとも{思|おも}えない。{怒|おこ}るほどのことでも[42]。

さて{先日|せんじつ}、{子供|こども}が{指|ゆび}を{怪我|けが}した。{軽|かる}い{打撲|だぼく}だとは{思|おも}ったものの、{小心者|しょうしんもの}の{私|わたし}はすぐに{整形|せいけい}{外科|げか}へ{向|む}かった。{車|くるま}を{走|はし}らせ、{医院|いいん}に{辿|たど}り{着|つ}くと{駐車場|ちゅうしゃじょう}がいっぱいで、これは{混|こ}んでいるな、と{焦|あせ}った。エレベーターに{乗|の}ると、{向|む}こうから{走|はし}ってくる{男性|だんせい}がいる。{閉|し}まりかけの{扉|とびら}を{開|ひら}くが{相手|あいて}は{礼|れい}も{言|い}わずに{乗|の}り{込|こ}んできて、{目的|もくてき}{階|かい}に{到着|とうちゃく}すると{当然|とうぜん}のように{先|さき}に{降|お}り、さっさと{受付|うけつけ}へと{向|む}かってしまった。

「こちらのほうが{先|さき}に{来|き}ていたではないか！」と{言葉|ことば}が{出|で}なかった。[43]{頭|あたま}を{過|よ}ぎったのが、{牛|うし}のことだ。「ゴール{寸前|すんぜん}で{追|お}い{抜|ぬ}かれた{牛|うし}は、この{程度|ていど}のことは{気|き}にかけなかったはずだ。ここは、『モーいいか』の{精神|せいしん}だ」と{思|おも}えたのだ。なるほど、{牛|うし}のおかげで[44]、と{私|わたし}は{気|き}を{良|よ}くし（{注|ちゅう}3）、その{後|ご}、「{十二支|じゅうにし}の{民話|みんわ}」の{本|ほん}を{探|さが}した。

{読|よ}んでみると、{追|お}い{抜|ぬ}かれた{牛|うし}の{場面|ばめん}には、「とても{悔|くや}しがり、『モーモー』と{怒|おこ}りました」と{書|か}いてある。{何|なん}と、{牛|うし}[45]{怒|おこ}ったのだ。そのことにショックは{受|う}けた。が、{怒|おこ}るべき{時|とき}は{怒|おこ}る、これも{大事|だいじ}なことだな、と{私|わたし}は{調子|ちょうし}よく{考|かんが}える。{今年|ことし}の{私|わたし}の{目標|もくひょう}は、「モーいいか」と「もう{怒|おこ}りました」をバランス{良|よ}く{使|つか}い{分|わ}けることだ。
（{伊坂|いさか}{幸太郎|こうたろう}『3652―{伊坂|いさか}{幸太郎|こうたろう}エッセイ{集|しゅう}』による）
（{注|ちゅう}1）{十二支|じゅうにし}：{十二年|じゅうにねん}で{一回|ひとまわ}りする{暦|こよみ}、{一年|いちねん}ずつ{異|こと}なる{動物|どうぶつ}で{表|あらわ}す
（{注|ちゅう}2）{十二支|じゅうにし}の{民話|みんわ}：{十二支|じゅうにし}の{動物|どうぶつ}を{競争|きょうそう}で{決|き}めたという{話|はなし}。{一番目|いちばんめ}が{鼠|ねずみ}で、{二番目|にばんめ}が{牛|うし}になった
（{注|ちゅう}3）{気|き}を{良|よ}くする：いい{気分|きぶん}になる`,
      arti: `Berikut ini adalah tulisan yang dimuat di surat kabar pada 7 Januari 2009, tahun Kerbau.

Waktu kecil, ketika mendengar cerita rakyat dua belas shio (catatan 1, 2), yang membuat saya kepikiran adalah si sapi. Sapi berpikir, "Jalanku lambat, jadi sebaiknya berangkat lebih awal," lalu berangkat jauh-jauh hari. Namun, padahal sudah hampir mencapai garis finis sebagai yang pertama, ia didahului oleh tikus yang menumpang di punggungnya.

Kalau memikirkan bagaimana perasaan sapi itu, hati saya pilu sekali. [41], usahanya yang tekun dimanfaatkan orang lain pasti sangat menjengkelkan. Tetapi ketika saya menceritakannya, ibu saya menjawab, "Sapi tidak terlalu memikirkannya, kok. Toh ia masuk dua belas shio. Paling-paling ia berpikir 'Mooo, ya sudahlah'." Saya sedikit lega. Memang, rasanya urutan pertama dalam shio tidak punya keistimewaan dibanding urutan kedua. Bisa jadi itu [42] hal yang perlu sampai membuat marah.

Nah, beberapa hari lalu anak saya cedera jari. Saya pikir hanya memar ringan, tetapi karena saya penakut, saya langsung menuju dokter ortopedi. Saya menyetir, dan ketika tiba di klinik, tempat parkirnya penuh; saya panik, wah ramai sekali. Ketika naik lift, ada seorang pria berlari dari arah sana. Saya menahan pintu yang hampir tertutup, tetapi ia masuk tanpa berterima kasih, dan begitu tiba di lantai tujuan ia turun duluan seolah sudah sewajarnya, lalu bergegas ke resepsionis.

Kata-kata "Kan saya yang datang duluan!" tidak keluar dari mulut saya. [43] yang melintas di kepala saya adalah si sapi. Saya bisa berpikir, "Sapi yang didahului tepat sebelum finis pasti tidak memedulikan hal sepele seperti ini. Sekarang saatnya semangat 'Mooo, ya sudahlah'." Begitu rupanya, berkat sapi saya [44], pikir saya dengan senang hati (catatan 3), lalu setelah itu saya mencari buku "cerita rakyat dua belas shio".

Ketika saya baca, di adegan sapi yang didahului tertulis, "Ia sangat kesal dan marah, 'Mooo mooo'." Ternyata sapi [45] marah. Saya cukup terkejut. Tetapi, marah saat memang harus marah, itu juga penting, pikir saya dengan enaknya. Target saya tahun ini adalah memakai "Mooo, ya sudahlah" dan "Aku sudah marah" secara seimbang.
(Dari buku Isaka Kotaro, "3652 – kumpulan esai Isaka Kotaro")
(Catatan 1) 十二支: kalender yang berputar setiap dua belas tahun, tiap tahun dilambangkan oleh hewan berbeda
(Catatan 2) Cerita rakyat dua belas shio: kisah penentuan hewan shio lewat perlombaan. Yang pertama tikus, yang kedua sapi
(Catatan 3) 気を良くする: menjadi senang hati
(Catatan penerjemah: "モー" adalah bunyi sapi sekaligus permainan kata dengan "もう" = sudahlah)`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{失敗|しっぱい}はすべて、{子|こ}どもがその{後|ご}の{人生|じんせい}を{大過|たいか}（{注|ちゅう}）なく{生|い}きるための{血|ち}となり、{肉|にく}となる。そう{思|おも}えば、{失敗|しっぱい}する{前|まえ}に{手|て}を{出|だ}すことがいかに{愚|おろ}かな{教育|きょういく}か、わかろうというものだ。

ただし、{親|おや}は{常|つね}に{子|こ}どもをそばでしっかり{見守|みまも}っていなければなりません。{手|て}は{出|だ}さないけれど、いつでも{危険|きけん}から{救|すく}ってやれるよう、{待機|たいき}するのです。そうして、もし{子|こ}どもが{転|ころ}んでケガをしたら、「ほら、{痛|いた}いでしょう。ぶつからないように{注意|ちゅうい}するのよ」と{教|おし}えてやる。そういう{姿勢|しせい}が{親|おや}に{求|もと}められるのです。
（{大宅|おおや}{映子|えいこ}『{親|おや}の{常識|じょうしき}』による）
（{注|ちゅう}）{大過|たいか}：{大|おお}きな{過|あやま}ち`,
      arti: `Semua kegagalan akan menjadi darah dan daging bagi anak untuk menjalani hidup selanjutnya tanpa kesalahan besar (catatan). Kalau berpikir begitu, kita akan paham betapa bodohnya pendidikan yang turun tangan sebelum anak gagal.

Namun, orang tua harus selalu mengawasi anak dengan saksama di dekatnya. Tidak turun tangan, tetapi bersiaga agar kapan pun bisa menyelamatkan anak dari bahaya. Lalu, jika anak jatuh dan terluka, ajari dia, "Nah, sakit, kan? Hati-hati supaya tidak menabrak." Sikap seperti itulah yang dituntut dari orang tua.
(Dari buku karya Oya Eiko, "Akal Sehat Orang Tua")
(Catatan) 大過: kesalahan besar`,
    },
    "8-2": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}がホームページに{掲載|けいさい}したお{知|し}らせである。

＜ミツヌマ{健康|けんこう}{食品|しょくひん}{株式|かぶしき}{会社|がいしゃ}＞ニュース

2014{年|ねん}、10.14{健康|けんこう}{食品|しょくひん}［ビタミン{生活|せいかつ}V］に{関|かん}するお{知|し}らせ

お{客様|きゃくさま}{各位|かくい}

{平素|へいそ}は{弊社|へいしゃ}{商品|しょうひん}にご{愛顧|あいこ}を{賜|たまわ}り、{厚|あつ}く{御礼|おんれい}{申|もう}し{上|あ}げます。

さて、2014{年|ねん}9{月|がつ}8{日|か}より{通販|つうはん}および{弊社|へいしゃ}{直営|ちょくえい}{店舗|てんぽ}での{販売|はんばい}を{開始|かいし}いたしました［ビタミン{生活|せいかつ}V］は、{情報|じょうほう}{番組|ばんぐみ}での{紹介|しょうかい}もあって、{当初|とうしょ}の{販売|はんばい}{計画|けいかく}を{大幅|おおはば}に{上回|うわまわ}り、{生産|せいさん}が{追|お}いつかない{状況|じょうきょう}となっております。そのため、すでに{通販|つうはん}の{受注|じゅちゅう}を{停止|ていし}しておりますが、{店舗|てんぽ}{販売|はんばい}も{在庫|ざいこ}がなくなり{次第|しだい}、{一時|いちじ}{中止|ちゅうし}せざるを{得|え}なくなりました。

{今後|こんご}は{生産|せいさん}{体制|たいせい}を{整|ととの}え、11{月|がつ}17{日|にち}に{店舗|てんぽ}{販売|はんばい}のみ{再開|さいかい}を{予定|よてい}しております。

お{客様|きゃくさま}にご{迷惑|めいわく}をおかけしますことを、{深|ふか}くお{詫|わ}び{申|もう}し{上|あ}げます。

ミツヌマ{健康|けんこう}{食品|しょくひん}{株式|かぶしき}{会社|がいしゃ}　お{客様|きゃくさま}{担当|たんとう}{係|がかり}：0120-333-4455
［{受付|うけつけ}{時間|じかん}　10：00-18：00　{土日|どにち}{祝|しゅく}{休|やす}み］`,
      arti: `Berikut ini adalah pemberitahuan yang dimuat sebuah perusahaan di situs webnya.

<PT Mitsunuma Kenko Shokuhin> Berita

2014, 10.14 Pemberitahuan mengenai makanan kesehatan [Vitamin Seikatsu V]

Kepada para pelanggan yang terhormat

Terima kasih banyak atas kesetiaan Anda selama ini terhadap produk kami.

[Vitamin Seikatsu V], yang mulai kami jual melalui penjualan daring (mail order) dan di toko langsung milik kami sejak 8 September 2014, berkat diperkenalkan juga di acara informasi, jauh melampaui rencana penjualan awal, sehingga produksi tidak bisa mengejar. Karena itu, kami sudah menghentikan penerimaan pesanan daring, dan penjualan di toko pun terpaksa kami hentikan sementara begitu stok habis.

Ke depannya, kami akan membenahi sistem produksi, dan berencana membuka kembali penjualan di toko saja pada 17 November.

Kami mohon maaf sebesar-besarnya atas ketidaknyamanan yang ditimbulkan.

PT Mitsunuma Kenko Shokuhin, Bagian Layanan Pelanggan: 0120-333-4455
[Jam layanan 10.00–18.00, libur Sabtu, Minggu, dan hari libur nasional]`,
    },
    "8-3": {
      yomi: `{以下|いか}は、{諦|あきら}めについて{書|か}かれた{文章|ぶんしょう}である。

{人|ひと}が{自分|じぶん}の{能力|のうりょく}{以上|いじょう}のことに{憧|あこが}れ、それがどうしても{出来|でき}ないというのに、なお{執着|しゅうちゃく}を{持|も}っているとしたら、{登|のぼ}れない{壁|かべ}の{下|した}で、{徒|いたず}らにじたばたしているようなもので、{気|き}の{毒|どく}でもありますが、{滑稽|こっけい}でもあります。この{場合|ばあい}は{諦|あきら}めが{必要|ひつよう}です。ただそれは、その{次|つぎ}の、{自分|じぶん}の{能力|のうりょく}に{合|あ}った{憧|あこが}れなり、{道|みち}なりを{求|もと}めるためにのみ{必要|ひつよう}であって、{諦|あきら}めの{中|なか}に{憩|いこ}ってしまうことは{少|すこ}し{見当|けんとう}が{外|はず}れていることになるかもしれません。
（{串田|くしだ}{孫一|まごいち}『{考|かんが}える{葦|あし}』による）`,
      arti: `Berikut ini adalah tulisan tentang kerelaan untuk menyerah.

Jika seseorang mendambakan sesuatu di luar kemampuannya, dan meski sama sekali tidak bisa melakukannya ia masih terus terpaku padanya, itu seperti meronta-ronta sia-sia di bawah tembok yang tak bisa dipanjat; kasihan, tetapi juga lucu. Dalam hal ini, menyerah itu perlu. Hanya saja, itu perlu semata-mata untuk mencari dambaan atau jalan berikutnya yang sesuai kemampuan diri, dan berdiam santai di dalam kepasrahan itu mungkin agak salah sasaran.
(Dari buku karya Kushida Magoichi, "Alang-alang yang Berpikir")`,
    },
    "8-4": {
      yomi: `{私|わたし}が35{歳|さい}になったころ、「このごろは、{少年|しょうねん}{時代|じだい}に{経験|けいけん}したような、ものすごい{雷雨|らいう}が{無|な}くなった」と{口|くち}にしたことがあります。ところが、60{歳|さい}ぐらいになったとき、35{歳|さい}ぐらいの{人|ひと}から{同|おな}じ{言葉|ことば}を{聞|き}いたのです。つまり、{私|わたし}が{強|つよ}い{雷雨|らいう}は{無|な}くなったと{感|かん}じたとき、その{人|ひと}はまだ{少年|しょうねん}{時代|じだい}で、{強|つよ}い{雷雨|らいう}を{経験|けいけん}していたことになります。この{場合|ばあい}は、{無|な}くなったのは、{少年|しょうねん}{時代|じだい}{特有|とくゆう}の{自然|しぜん}から{受|う}ける{鮮烈|せんれつ}な{印象|いんしょう}、{驚|おどろ}き、{恐|おそ}れでしょう。
（{倉嶋|くらしま}{厚|あつし}『{日和見|ひよりみ}の{事典|じてん}――{倉嶋|くらしま}{厚|あつし}の{人文|じんぶん}{気象学|きしょうがく}ノート』による）`,
      arti: `Ketika saya berusia sekitar 35 tahun, saya pernah berkata, "Akhir-akhir ini tidak ada lagi badai petir dahsyat seperti yang saya alami waktu kecil." Namun, ketika saya berusia sekitar 60 tahun, saya mendengar kata-kata yang sama dari orang berusia sekitar 35 tahun. Artinya, ketika saya merasa badai petir yang kuat sudah tidak ada, orang itu masih anak-anak dan mengalami badai petir yang kuat. Dalam hal ini, yang hilang mungkin adalah kesan tajam, kekaguman, dan rasa takut terhadap alam yang khas masa kanak-kanak.
(Dari buku karya Kurashima Atsushi, "Ensiklopedia Cuaca – catatan meteorologi humaniora Kurashima Atsushi")`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{不安|ふあん}は、{正体|しょうたい}がつかみきれないときほど{膨|ふく}らんでいく。{長|なが}く{引|ひ}きずる。

{人間|にんげん}だれでも、{自分|じぶん}に{都合|つごう}の{悪|わる}いこと、{恐|おそ}ろしいことは{考|かんが}えたくない。そういう{心理|しんり}が{働|はたら}くから、{無意識|むいしき}のうちに{問題|もんだい}をあいまいにして{解決|かいけつ}を{保留|ほりゅう}にする。

そうして{結局|けっきょく}、いつまでも{不安|ふあん}をダラダラと{抱|かか}え{続|つづ}けてしまう。

{逆|ぎゃく}に{自分|じぶん}の{何|なに}がどのように{不安|ふあん}なのか、{不安|ふあん}に{思|おも}う{必要|ひつよう}があるのかどうかを{把握|はあく}すれば、それだけで{不安|ふあん}は{減|へ}る。

{不安|ふあん}の{正体|しょうたい}が{明確|めいかく}になって、これは{何|なに}かしなければまずいと{認識|にんしき}されれば、それは「{危機感|ききかん}」になる。

{危機感|ききかん}は{不安|ふあん}と{違|ちが}う。{危機感|ききかん}をもてば、{行動|こうどう}を{起|お}こそうという{意欲|いよく}が{湧|わ}く。さらに{情報|じょうほう}を{集|あつ}めて、{行動|こうどう}{計画|けいかく}をたてようとする。やるべきことが{明確|めいかく}になる。だからスタートが{切|き}れるのだ。

{問題|もんだい}は{鍵|かぎ}となる{不安|ふあん}は{何|なに}なのかということだ。{様々|さまざま}な{不安|ふあん}の{中|なか}から、それを{特定|とくてい}して{意識|いしき}する。その{不安|ふあん}に、{思|おも}いきり{光|ひかり}を{当|あ}てて{自分|じぶん}で{正体|しょうたい}を{見極|みきわ}められれば、{次|つぎ}にどうすればいいかの{対策|たいさく}も{講|こう}じられる。

（{中略|ちゅうりゃく}）{不安|ふあん}には、しばらく{保留|ほりゅう}にしておいても{大丈夫|だいじょうぶ}な{不安|ふあん}もある。それがわかった{瞬間|しゅんかん}、{不安|ふあん}はまた{少|すこ}し{減|へ}る。

こうして、{自分|じぶん}が{何|なに}をやらなければいけないかが{見|み}えてくる。やる{気|き}が{出|で}てくる。{動|うご}く{気|き}になる。{不安|ふあん}の{解決策|かいけつさく}を{考|かんが}えながら、{夢|ゆめ}が{膨|ふく}らんでくることもある。
（{佐々木|ささき}{直彦|なおひこ}『「{仕事|しごと}も{人生|じんせい}もうまくいく{人|ひと}」の{考|かんが}え{方|かた}』による）`,
      arti: `Kecemasan makin membesar ketika wujudnya tidak bisa ditangkap sepenuhnya. Ia berlarut-larut lama.

Siapa pun tidak ingin memikirkan hal yang merugikan dirinya atau hal yang menakutkan. Karena psikologi seperti itu bekerja, tanpa sadar kita membuat masalah menjadi samar dan menunda penyelesaiannya.

Akibatnya, kita terus-menerus memendam kecemasan berlarut-larut.

Sebaliknya, jika kita memahami apa dan bagaimana yang membuat kita cemas, serta apakah memang perlu merasa cemas, hanya dengan itu kecemasan berkurang.

Jika wujud kecemasan menjadi jelas dan disadari bahwa "kalau tidak melakukan sesuatu, ini gawat", itu menjadi "rasa krisis".

Rasa krisis berbeda dengan kecemasan. Jika memiliki rasa krisis, muncul semangat untuk bertindak. Kita pun mengumpulkan informasi dan berusaha menyusun rencana tindakan. Apa yang harus dilakukan menjadi jelas. Karena itu kita bisa memulai.

Masalahnya adalah kecemasan mana yang menjadi kunci. Dari berbagai kecemasan, tentukan yang itu dan sadari. Jika kita menyorot kecemasan itu sepenuhnya dan bisa memastikan wujudnya sendiri, kita pun bisa mengambil langkah tentang apa yang harus dilakukan selanjutnya.

(dipersingkat) Ada juga kecemasan yang tidak apa-apa ditunda untuk sementara. Begitu hal itu dipahami, kecemasan berkurang lagi sedikit.

Dengan begitu, apa yang harus kita lakukan mulai terlihat. Semangat muncul. Kita jadi ingin bergerak. Sambil memikirkan solusi kecemasan, kadang impian pun ikut mengembang.
(Dari buku karya Sasaki Naohiko, "Cara berpikir orang yang sukses dalam pekerjaan dan hidup")`,
    },
    "9-2": {
      yomi: `{自分|じぶん}の{泣|な}いているときの{表情|ひょうじょう}や、{笑|わら}ったときの{表情|ひょうじょう}をまともに{見|み}たことのある{人|ひと}は、まずない。

{写真|しゃしん}やビデオになれば、{自然|しぜん}な{笑|わら}いがおさめられることもあるかもしれないが、そこに{映|うつ}っているのは{過去|かこ}のそれであって、いま{内側|うちがわ}から{生|い}きている{感情|かんじょう}と{重|かさ}なり{合|あ}うものではない。その{点|てん}、{鏡|かがみ}ならばそれを{同時的|どうじてき}に{捉|とら}えられそうにもみえる。

しかし、じっさいには{自分|じぶん}が{笑|わら}っているとき、その{笑|わら}っている{自分|じぶん}の{顔|かお}を{見|み}たとたん、もはや{笑|わら}いつづけられなくて、さっと{笑|わら}いがさめてしまうものである。{泣|な}いているときも{同|おな}じである。（{中略|ちゅうりゃく}）

{自分|じぶん}の{表情|ひょうじょう}を{視覚的|しかくてき}に{捉|とら}えることには、そもそも{無理|むり}がある。{他方|たほう}、{他者|たしゃ}の{表情|ひょうじょう}を{内的|ないてき}に{捉|とら}えることも、{私|わたし}たちが{他者|たしゃ}の{身体|しんたい}を{内側|うちがわ}から{生|い}きることができない{以上|いじょう}、{不可能|ふかのう}である。ならば{他者|たしゃ}の{表情|ひょうじょう}の{理解|りかい}はほんらい{不可能|ふかのう}なことだということになるはずだが、{私|わたし}たちは{日頃|ひごろ}から、{表情|ひょうじょう}の{理解|りかい}が{不可能|ふかのう}だとか、{困難|こんなん}だとか、ほとんど{思|おも}いもしない。{現|げん}に{私|わたし}たちは{他者|たしゃ}のわずかな{表情|ひょうじょう}の{変化|へんか}にも{敏感|びんかん}であるし、その{表情|ひょうじょう}の{理解|りかい}を{土台|どだい}にすることで{人間|にんげん}{関係|かんけい}の{基本|きほん}{部分|ぶぶん}を{成|な}り{立|た}たせている。

{表情|ひょうじょう}は、ほぼ{人類|じんるい}に{共通|きょうつう}であって、{微妙|びみょう}な{表情|ひょうじょう}は{別|べつ}として、{人種|じんしゅ}がちがっても、それを{読|よ}み{間違|まちが}うことはまずない。{含|ふく}み{笑|わら}いとか、{苦笑|にがわら}い、あるいは{愛想|あいそ}{笑|わら}いとかいったものだと、{同|おな}じく{笑|わら}いでも{文化差|ぶんかさ}があって、{読|よ}み{間違|まちが}うことがあるかもしれないが、{典型的|てんけいてき}な{表情|ひょうじょう}に{関|かん}してはまず{間違|まちが}わない。そうだとすれば{類|るい}としての{人間|にんげん}のなかに、{表情|ひょうじょう}を{通|とお}して{人間|にんげん}{同士|どうし}わかり{合|あ}うメカニズムが、{個|こ}の{単位|たんい}を{越|こ}えて{存在|そんざい}するものと{考|かんが}えねばならない。
（{浜田|はまだ}{寿美男|すみお}『「{私|わたし}」とは{何|なに}か』による）`,
      arti: `Hampir tidak ada orang yang pernah melihat langsung ekspresi wajahnya sendiri saat menangis atau saat tertawa.

Dalam foto atau video, mungkin ada kalanya tawa yang alami terekam, tetapi yang terekam di sana adalah tawa masa lalu, bukan sesuatu yang bertumpang tindih dengan perasaan yang sedang dihayati dari dalam saat ini. Dalam hal itu, cermin tampaknya bisa menangkapnya secara bersamaan.

Namun, kenyataannya ketika kita sedang tertawa, begitu melihat wajah kita yang sedang tertawa, kita tidak bisa lagi terus tertawa, dan tawa itu langsung lenyap. Begitu pula saat menangis. (dipersingkat)

Menangkap ekspresi diri sendiri secara visual pada dasarnya mustahil. Di sisi lain, menangkap ekspresi orang lain dari dalam juga mustahil, selama kita tidak bisa menghayati tubuh orang lain dari dalam. Kalau begitu, pemahaman ekspresi orang lain seharusnya pada dasarnya mustahil, tetapi sehari-hari kita hampir tidak pernah berpikir bahwa memahami ekspresi itu mustahil atau sulit. Nyatanya kita peka bahkan terhadap perubahan kecil ekspresi orang lain, dan dengan menjadikan pemahaman ekspresi itu sebagai landasan, kita membangun bagian dasar hubungan antarmanusia.

Ekspresi wajah hampir sama pada seluruh umat manusia; terlepas dari ekspresi yang halus, meski berbeda ras, hampir tidak mungkin salah membacanya. Untuk senyum tertahan, senyum kecut, atau senyum basa-basi, walau sama-sama tawa ada perbedaan budaya sehingga mungkin salah baca, tetapi untuk ekspresi yang khas hampir pasti tidak salah. Jika demikian, kita harus menganggap bahwa di dalam manusia sebagai spesies terdapat mekanisme untuk saling memahami melalui ekspresi, yang melampaui satuan individu.
(Dari buku karya Hamada Sumio, "Apa itu 'Aku'")`,
    },
    "9-3": {
      yomi: `{多|おお}くの{大人|おとな}は、{子供|こども}よりも{先|さき}に{生|い}きているから、{自分|じぶん}の{方|ほう}が{人生|じんせい}を{知|し}っていると{思|おも}っている。しかしこれはウソである。{彼|かれ}らが{知|し}っているのは「{生活|せいかつ}」であって、{決|けっ}して「{人生|じんせい}」ではない。{生活|せいかつ}の{仕方|しかた}、いかに{生活|せいかつ}するかを{知|し}っているのを、{人生|じんせい}を{知|し}っていることだと{思|おも}っている。そして{生活|せいかつ}を{教|おし}えることが、{人生|じんせい}を{教|おし}えることだと{間違|まちが}えているのである。しかし、「{生活|せいかつ}」と「{人生|じんせい}」とはどちらも「ライフ」だが、この{両者|りょうしゃ}は{大違|おおちが}いである。「{何|なん}のために」{生活|せいかつ}するのかと{問|と}われたら、どう{答|こた}えるだろう。

こういう{基本的|きほんてき}なところで{大|おお}{間違|まちが}いをしているから、{小中学校|しょうちゅうがっこう}で{仕事|しごと}{体験|たいけん}をさせようといった{愚|ぐ}（{注|ちゅう}1）にもつかない{教育|きょういく}になる。（{中略|ちゅうりゃく}）{生活|せいかつ}の{必要|ひつよう}のない{年齢|ねんれい}には、{生活|せいかつ}に{必要|ひつよう}のないことを{学|まな}ぶ{必要|ひつよう}があるのだ。それはこの{年齢|ねんれい}、このわずかな{期間|きかん}にのみ{許|ゆる}された、きわめて{貴重|きちょう}な{時間|じかん}なのだ。{生活|せいかつ}に{必要|ひつよう}のないことは、{人生|じんせい}に{必要|ひつよう}なことだ。すなわち、{人生|じんせい}とは{何|なに}かを{考|かんが}えるための{時間|じかん}があるのは、この{年代|ねんだい}の{特権|とっけん}なのである。

「{人生|じんせい}とは{何|なに}か」とは、そこにおいて{生活|せいかつ}が{可能|かのう}となるところの{生存|せいぞん}そのもの、これを{問|と}う{問|と}いである。「{生|い}きている」、すなわち「{存在|そんざい}する」とは、どういうことなのか。

この{問|と}いの{不思議|ふしぎ}に{気|き}がつけば、どの{教科|きょうか}も、それを{純粋|じゅんすい}に{知|し}ることの{面白|おもしろ}さがわかるはずだ。{国語|こくご}においては{言葉|ことば}、{算数|さんすう}においては{数|かず}と{図形|ずけい}、{理科|りか}においては{物質|ぶっしつ}と{生命|せいめい}、{社会|しゃかい}においては{人倫|じんりん}（{注|ちゅう}2）、どれもこの{存在|そんざい}と{宇宙|うちゅう}の{不思議|ふしぎ}を{知|し}ろうとするものだと{知|し}るはずだ。{人間|にんげん}{精神|せいしん}の{普遍的|ふへんてき}な{営|いとな}みとして、{自分|じぶん}と{無縁|むえん}なものはひとつもない。どれも{自分|じぶん}の{人生|じんせい}の{役|やく}に{立|た}つ{学|まな}びだと{知|し}るはずなのだ。
（{池田|いけだ}{晶子|あきこ}『{人間|にんげん}{自身|じしん}―{考|かんが}えることに{終|お}わりなく』による）
（{注|ちゅう}1）{愚|ぐ}にもつかない：ここでは、ばかばかしい
（{注|ちゅう}2）{人倫|じんりん}：{人|ひと}として{守|まも}るべき{道|みち}`,
      arti: `Banyak orang dewasa merasa bahwa karena mereka hidup lebih dulu daripada anak-anak, mereka lebih mengenal kehidupan. Tetapi ini bohong. Yang mereka ketahui adalah "penghidupan" (seikatsu), sama sekali bukan "kehidupan" (jinsei). Mereka menganggap mengetahui cara menjalani penghidupan sama dengan mengetahui kehidupan. Lalu mereka keliru mengira bahwa mengajarkan penghidupan sama dengan mengajarkan kehidupan. Namun, "penghidupan" dan "kehidupan" memang sama-sama "life", tetapi keduanya sangat berbeda. Jika ditanya, "untuk apa" kita menjalani penghidupan, bagaimana kita akan menjawab?

Karena salah besar di hal mendasar seperti ini, jadilah pendidikan konyol (catatan 1) seperti menyuruh anak SD dan SMP mencoba pengalaman kerja. (dipersingkat) Di usia yang belum perlu mencari penghidupan, justru perlu mempelajari hal yang tidak diperlukan untuk penghidupan. Itu adalah waktu yang sangat berharga, yang hanya diizinkan pada usia ini, pada masa yang singkat ini. Hal yang tidak diperlukan untuk penghidupan adalah hal yang diperlukan untuk kehidupan. Dengan kata lain, memiliki waktu untuk memikirkan apa itu kehidupan adalah hak istimewa usia ini.

"Apa itu kehidupan" adalah pertanyaan yang mempertanyakan keberadaan itu sendiri, tempat penghidupan menjadi mungkin. Apa artinya "hidup", atau dengan kata lain "ada"?

Jika menyadari keajaiban pertanyaan ini, kita pasti memahami asyiknya mengetahui setiap mata pelajaran secara murni. Kita pasti tahu bahwa bahasa dalam pelajaran bahasa, bilangan dan bangun dalam matematika, materi dan kehidupan dalam IPA, dan etika (catatan 2) dalam IPS, semuanya berusaha mengetahui keajaiban keberadaan dan alam semesta ini. Sebagai aktivitas universal jiwa manusia, tidak ada satu pun yang tidak berhubungan dengan diri kita. Kita pasti akan tahu bahwa semuanya adalah pembelajaran yang berguna bagi kehidupan kita sendiri.
(Dari buku karya Ikeda Akiko, "Manusia Itu Sendiri – berpikir tiada akhir")
(Catatan 1) 愚にもつかない: di sini, konyol
(Catatan 2) 人倫: jalan yang harus dijaga sebagai manusia`,
    },

    // ── 問題10：子供の絵と芸術 ──
    "10": {
      yomi: `{以下|いか}は、ある{芸術家|げいじゅつか}が{書|か}いた{文章|ぶんしょう}である。

{人間|にんげん}は{動物|どうぶつ}とちがって、{知的|ちてき}な{活動|かつどう}、その{情熱|じょうねつ}をもっている。おさなくたって、{魂|たましい}の{衝動|しょうどう}は{強|つよ}いのだ。だから{子供|こども}は{描|か}きたがる。{形|かたち}、{色|いろ}にして{確|たし}かめる。だが{問題|もんだい}は{自分|じぶん}のなかにあるものを{外|そと}に{突|つ}き{出|だ}す、{投|な}げ{出|だ}すという{行為|こうい}{自体|じたい}であって、{決|けっ}して{出来上|できあ}がりの{効果|こうか}ではない。

だから{子供|こども}は{描|か}きおわってしまったものはふり{向|む}きもしない。{捨|す}てられたって{何|なん}とも{思|おも}わないのだ、（{中略|ちゅうりゃく}）それを{大事|だいじ}そうに{拾|ひろ}いあげて、「これは{面白|おもしろ}い。」「{坊|ぼう}やは{才能|さいのう}がある。これをうまく{伸|の}ばせば、{将来|しょうらい}えらい{画家|がか}になるかもしれない。」などと、{観賞|かんしょう}したり{評価|ひょうか}するのは、いつでも{大人|おとな}で、{子供|こども}{自身|じしん}は、もしほめられても、そんなものかなと{聞|き}いているだけである。

だから「{子供|こども}の{絵|え}」というような{言|い}い{方|かた}の、{根本|こんぽん}に{何|なに}か{間違|まちが}いがある、と{私|わたし}は{思|おも}う。{描|か}いたものには{違|ちが}いないが、「{作品|さくひん}」ではない。その{以前|いぜん}の、もっと{根源的|こんげんてき}な{何|なに}ものかなのである。

「{絵|え}」などというから、{大人|おとな}の「{絵画|かいが}{作品|さくひん}」と{混同|こんどう}して{考|かんが}えてしまう。そこにズレがおこる。{大人|おとな}のは{見|み}せる{芸|げい}であり、{商品|しょうひん}である。はじめから{観賞|かんしょう}すること、してもらうことを{目的|もくてき}とし、{結果|けっか}を{予測|よそく}しながら{作|つく}り{上|あ}げたものだ。

いわゆる「{絵描|えか}きさん」となると、{描|か}いている{瞬間|しゅんかん}に、{結果|けっか}がわかっている。こうやれば、こうなる。{習練|しゅうれん}（{注|ちゅう}1）と{経験|けいけん}によって、{色|いろ}やタッチ（{注|ちゅう}2）の{効果|こうか}が{計算|けいさん}できるし、{生命|せいめい}の{衝動|しょうどう}、{情熱|じょうねつ}、{無目的|むもくてき}な{行動|こうどう}よりも、{結果|けっか}の{方|ほう}に{神経|しんけい}が{働|はたら}いてしまう。{出来|でき}ばえに、{逆|ぎゃく}にひきずり{回|まわ}されているのだ。

しかも、{大向|おおむ}こう（{注|ちゅう}3）の{気配|けはい}まですでに{見|み}すかして、……こんな{趣向|しゅこう}は{喜|よろこ}ばれるだろう、これはちょっとやりすぎかな、などと{意識|いしき}・{無意識|むいしき}に、そんな{手応|てごた}えにあわせながら{仕事|しごと}をすすめている。{評判|ひょうばん}をとり、{買手|かいて}がついてくれなければ{食|く}ってゆけないし、{社会|しゃかい}が{許|ゆる}さない。{生活|せいかつ}がきびしいのだ。{無償|むしょう}の{行為|こうい}というわけにはいかない。

{明|あき}らかに「{作品|さくひん}」つまり「{商品|しょうひん}」を{作|つく}っているのである。

{大人|おとな}の{作品|さくひん}だって、{本質的|ほんしつてき}には{生命力|せいめいりょく}こそ{肝要|かんよう}なのだ。{自分|じぶん}の{存在|そんざい}を{純粋|じゅんすい}に{外|そと}に{投|な}げ{出|だ}す、{突|つ}き{出|だ}すアクションの{質|しつ}、{強|つよ}さによって、{猛烈|もうれつ}な{魅力|みりょく}になる。

{私|わたし}{自身|じしん}は、{少|すく}なくともそのつもりである。よく、あなたの{絵|え}はわけがわからないと{言|い}われるが、「{絵|え}」でございます、というようなものは{作|つく}りたくない。それ{以前|いぜん}、そして{以後|いご}のものをひたすらつきつける。――{絵|え}ではなく、{芸術|げいじゅつ}、そして{出来|でき}るかぎり{他|た}の{評価|ひょうか}を{無視|むし}したいと{思|おも}っている。
（{岡本|おかもと}{太郎|たろう}『{美|うつく}しく{怒|いか}れ』による）
（{注|ちゅう}1）{習練|しゅうれん}：{練習|れんしゅう}
（{注|ちゅう}2）タッチ：ここでは、{筆|ふで}の{使|つか}い{方|かた}
（{注|ちゅう}3）{大向|おおむ}こう：ここでは、{観賞|かんしょう}する{人々|ひとびと}`,
      arti: `Berikut ini adalah tulisan seorang seniman.

Berbeda dengan hewan, manusia memiliki aktivitas intelektual dan semangat untuk itu. Meskipun masih kecil, dorongan jiwanya kuat. Karena itu anak-anak senang menggambar. Mereka memastikannya dalam bentuk dan warna. Tetapi yang penting adalah tindakan menyodorkan dan melemparkan keluar apa yang ada di dalam dirinya, sama sekali bukan efek hasil jadinya.

Karena itu anak-anak bahkan tidak menoleh pada gambar yang sudah selesai. Dibuang pun mereka tidak peduli, (dipersingkat) yang memungutnya dengan hati-hati lalu menikmati dan menilainya, "Ini menarik." "Nak, kamu berbakat. Kalau ini dikembangkan dengan baik, mungkin kelak jadi pelukis hebat," selalu orang dewasa; si anak sendiri, meski dipuji, hanya mendengarkan sambil berpikir "oh, begitu ya."

Karena itu, saya pikir ada sesuatu yang keliru pada dasar ungkapan seperti "gambar anak". Memang itu sesuatu yang digambar, tetapi bukan "karya". Itu sesuatu yang ada sebelumnya, sesuatu yang lebih mendasar.

Karena disebut "gambar", kita jadi mencampuradukkannya dengan "karya lukisan" orang dewasa. Di situlah terjadi ketidakcocokan. Milik orang dewasa adalah seni untuk dipertontonkan, sebuah barang dagangan. Sejak awal dibuat dengan tujuan untuk dinikmati, untuk dinikmati orang lain, sambil memperkirakan hasilnya.

Kalau sudah menjadi yang disebut "pelukis", pada saat melukis ia sudah tahu hasilnya. Kalau begini, jadinya begini. Dengan latihan (catatan 1) dan pengalaman, efek warna dan sapuan kuas (catatan 2) bisa diperhitungkan, dan sarafnya lebih bekerja untuk hasil daripada dorongan hidup, semangat, dan tindakan tanpa tujuan. Ia justru diseret-seret oleh hasil jadinya.

Lebih dari itu, ia sudah menerawang suasana para penikmat (catatan 3)... gaya seperti ini mungkin disukai, yang ini agak berlebihan, dan seterusnya; secara sadar maupun tidak, ia mengerjakannya sambil menyesuaikan dengan tanggapan semacam itu. Kalau tidak mendapat reputasi dan tidak ada pembeli, ia tidak bisa makan, dan masyarakat tidak mengizinkan. Hidup itu keras. Tidak bisa menjadi tindakan tanpa pamrih.

Jelas ia sedang membuat "karya", dengan kata lain "barang dagangan".

Karya orang dewasa pun pada hakikatnya yang terpenting adalah daya hidup. Karya menjadi luar biasa memikat berkat kualitas dan kekuatan aksi melemparkan dan menyodorkan keberadaan dirinya keluar secara murni.

Saya sendiri setidaknya berniat begitu. Saya sering dikatakan, "Lukisan Anda tidak bisa dipahami," tetapi saya tidak ingin membuat sesuatu yang seolah berkata "inilah sebuah lukisan". Saya terus menyodorkan sesuatu yang ada sebelum dan sesudahnya. — Bukan lukisan, tetapi seni, dan sebisa mungkin saya ingin mengabaikan penilaian orang lain.
(Dari buku karya Okamoto Taro, "Marahlah dengan Indah")
(Catatan 1) 習練: latihan
(Catatan 2) タッチ: di sini, cara menggunakan kuas
(Catatan 3) 大向こう: di sini, orang-orang yang menikmati karya`,
    },

    // ── 問題11：世界遺産 ──
    "11": {
      yomi: `【{意見|いけん} A】
{世界|せかい}{遺産|いさん}への{関心|かんしん}が{高|たか}まるのは{喜|よろこ}ばしい。{各地|かくち}で{登録|とうろく}をめざす{動|うご}きも{活発化|かっぱつか}している。{新聞|しんぶん}をはじめとしたメディアがそれらを{報|ほう}じる{機会|きかい}も{増|ふ}えた。ただ、いつも{気|き}になるのは、そこに「{地元|じもと}では{観光|かんこう}{振興|しんこう}に{結|むす}びつくのを{期待|きたい}している」といったたぐいの{文言|もんごん}が、{必|かなら}ずと{言|い}ってよいほど{目|め}につくことだ。

{私|わたし}としては、{観光|かんこう}・{経済|けいざい}{効果|こうか}の{拡大|かくだい}を{否定|ひてい}はしないし、{文化財|ぶんかざい}{保護|ほご}との{両立|りょうりつ}はできると{考|かんが}えている。しかし、{近年|きんねん}の{状況|じょうきょう}を{眺|なが}めると、{遺産|いさん}の{保護|ほご}という{基本|きほん}{理念|りねん}が、あまりにも{置|お}き{去|ざ}りにされてしまってはいないだろうか。
（{中村|なかむら}{俊介|しゅんすけ}『{世界|せかい}{遺産|いさん}が{消|き}えてゆく』による）

【{意見|いけん} B】
{日本|にほん}では{映像|えいぞう}や{書籍|しょせき}など、さまざまなメディアで{世界|せかい}{遺産|いさん}を{商品化|しょうひんか}し、パッケージ・ツアーが{数多|かずおお}く{組|く}まれ、{観光|かんこう}{産業|さんぎょう}と{深|ふか}く{結|むす}び{付|つ}く。だが、それは{本当|ほんとう}に{建築|けんちく}や{自然|しぜん}を{愛|あい}し、{歴史|れきし}への{理解|りかい}を{深|ふか}める{人間|にんげん}を{増|ふ}やしているのだろうか。

（{中略|ちゅうりゃく}）{世界|せかい}{遺産|いさん}であろうとなかろうと、{建築|けんちく}の{価値|かち}は{個別|こべつ}に{判断|はんだん}すればいい。{人間|にんげん}も{肩書|かたが}きだけで、すべてを{理解|りかい}できないだろう。{世界|せかい}{遺産|いさん}に{認定|にんてい}されたからといって、{株|かぶ}のように、{建築|けんちく}の{価値|かち}が{上昇|じょうしょう}するわけではない。むろん、{観光|かんこう}{資源|しげん}として{巨額|きょがく}の{富|とみ}をもたらすだろうが、モノとしては{同|おな}じままである。

{私|わたし}が{気|き}になるのは、{世界|せかい}{遺産|いさん}だけを{特別視|とくべつし}するあまり、{逆|ぎゃく}にそれ{以外|いがい}のものはがんばって{保存|ほぞん}しなくてもいいという{風潮|ふうちょう}を{助長|じょちょう}するのではないかということだ。
（{五十嵐|いがらし}{太郎|たろう}『{建築|けんちく}はいかに{社会|しゃかい}と{回路|かいろ}をつなぐのか』による）`,
      arti: `[Pendapat A]
Meningkatnya minat terhadap Situs Warisan Dunia itu menggembirakan. Gerakan untuk didaftarkan juga makin aktif di berbagai daerah. Kesempatan media, mulai dari surat kabar, memberitakannya juga bertambah. Hanya saja, yang selalu mengganjal adalah hampir pasti terlihat kalimat semacam "warga setempat berharap ini akan mendorong promosi pariwisata."

Saya sendiri tidak menyangkal perluasan efek pariwisata dan ekonomi, dan berpendapat itu bisa berjalan seiring dengan perlindungan warisan budaya. Namun, melihat situasi akhir-akhir ini, bukankah gagasan dasar yaitu perlindungan warisan terlalu ditinggalkan?
(Dari buku karya Nakamura Shunsuke, "Situs Warisan Dunia yang Menghilang")

[Pendapat B]
Di Jepang, Situs Warisan Dunia dijadikan komoditas di berbagai media seperti video dan buku, banyak paket tur disusun, dan erat terkait dengan industri pariwisata. Tetapi apakah itu benar-benar menambah jumlah orang yang mencintai arsitektur dan alam serta memperdalam pemahaman akan sejarah?

(dipersingkat) Situs Warisan Dunia atau bukan, nilai sebuah bangunan cukup dinilai secara individual. Manusia pun tidak bisa dipahami seluruhnya hanya dari jabatannya. Bukan berarti karena diakui sebagai Situs Warisan Dunia, nilai bangunan naik seperti saham. Tentu saja sebagai sumber daya wisata ia akan mendatangkan kekayaan besar, tetapi sebagai benda ia tetap sama.

Yang mengganjal bagi saya adalah, karena terlalu mengistimewakan Situs Warisan Dunia saja, jangan-jangan justru mendorong anggapan bahwa yang lain tidak perlu susah-susah dilestarikan.
(Dari buku karya Igarashi Taro, "Bagaimana Arsitektur Menghubungkan Diri dengan Masyarakat")`,
    },

    // ── 問題12：書評について ──
    "12": {
      yomi: `{本|ほん}というのは、{人間|にんげん}と{同|おな}じようなものだ。{一律|いちりつ}の{価値|かち}によって{優劣|ゆうれつ}を{決|き}めることはできない。{人気者|にんきもの}がいるのと{同|おな}じように、ベストセラーがある。{嫌|きら}われ{者|もの}がいるように、{誰|だれ}からも{手|て}に{取|と}られない{本|ほん}もある。だが、どれもがそれぞれの{価値|かち}を{持|も}っている。それを{求|もと}めている{人|ひと}の{手|て}に{求|もと}めているときに{渡|わた}れば、それは{良書|りょうしょ}になる。

それゆえ、{私|わたし}はインターネットの{書評|しょひょう}サイトなどで、まるで{自分|じぶん}を{神|かみ}であるかのように{本|ほん}の{優劣|ゆうれつ}を{断定|だんてい}しているものには{激|はげ}しい{抵抗|ていこう}を{感|かん}じる。もちろん、{書評|しょひょう}をするのは{悪|わる}いことではない。{本|ほん}を{批判|ひはん}したりほめたりするのも、もちろん{大事|だいじ}なことだ。だが、あくまでもそれは、その{人|ひと}の{知識|ちしき}と{関心|かんしん}と{人柄|ひとがら}によっての{判断|はんだん}でしかない。つい{神|かみ}の{立場|たちば}でものを{言|い}いたくなる{気持|きも}ちはわからないでもないが、それはあまりに{傲慢|ごうまん}というものだろう。

{私|わたし}の{本|ほん}も、インターネットの{書評|しょひょう}サイトでかなり{叩|たた}かれているものがある。それはそれでやむをえないと{思|おも}っている。ある{程度|ていど}{売|う}れると、それをけなしたがる{人間|にんげん}がいるものだ。{本|ほん}をけなすと、{自分|じぶん}が{著者|ちょしゃ}よりも{偉|えら}くなったような{気|き}がするのだろう。{私|わたし}{自身|じしん}も{本|ほん}を{書|か}くようになる{前|まえ}、いや、{正直|しょうじき}に{言|い}うとある{程度|ていど}{売|う}れる{本|ほん}を{出|だ}すようになる{前|まえ}、{他人|たにん}の{本|ほん}をずいぶんけなしたものだ。

ただきわめて{心外|しんがい}なのは、ないものねだりをしている{評|ひょう}があまりに{多|おお}いことだ。たとえば、{私|わたし}はある{参考書|さんこうしょ}を{出|だ}している。その{趣旨|しゅし}としていることは、「{大学|だいがく}の{小論文|しょうろんぶん}{試験|しけん}に{何|なん}とか{合格|ごうかく}できるだけのレベルの{小論文|しょうろんぶん}が{書|か}けるようにするため、{最低限|さいていげん}これだけの{知識|ちしき}は{持|も}っていてほしい」という{知識|ちしき}を{整理|せいり}した{参考書|さんこうしょ}だ。だから、{私|わたし}はその{本|ほん}の{中|なか}では、{敢|あ}えて{難|むずか}しいことは{書|か}いていない。ところが、その{参考書|さんこうしょ}を{酷評|こくひょう}する（{注|ちゅう}）{書評|しょひょう}がある。そして、その{評|ひょう}の{中|なか}には「この{本|ほん}を{読|よ}んでも、かろうじて{合格|ごうかく}するくらいの{力|ちから}しかつかない」と{書|か}かれている。

{私|わたし}は、まさしくかろうじて{合格|ごうかく}するくらいの{力|ちから}をつけるためにその{本|ほん}を{書|か}いているのだ。かろうじて{合格|ごうかく}すれば、その{本|ほん}は{最高|さいこう}の{良書|りょうしょ}だろう。{私|わたし}がそのような{意味|いみ}で{敢|あ}えてカットしたことを{取|と}り{上|あ}げて、それが{書|か}かれていないからと{批判|ひはん}されても、こちらとしては{困|こま}ってしまう。

そのような{身勝手|みがって}な{書評|しょひょう}がなんと{多|おお}いことか。{知識|ちしき}のある{人間|にんげん}が{入門書|にゅうもんしょ}を{幼稚|ようち}すぎるとけなし、{知識|ちしき}のない{人間|にんげん}が{専門書|せんもんしょ}をわかりにくいとけなす。しかし、それは{単|たん}に{自分|じぶん}の{背丈|せたけ}にあっていない{本|ほん}を{求|もと}めただけのことに{過|す}ぎない。きちんと{自分|じぶん}の{背丈|せたけ}にあった{本|ほん}を{探|さが}して{買|か}うのが、{読者|どくしゃ}の{務|つと}めだと、{私|わたし}は{思|おも}う。

{本|ほん}について{語|かた}るからには、あらゆる{本|ほん}に{愛情|あいじょう}を{持|も}つべきだと{私|わたし}は{考|かんが}えている。そうしてこそ、{本|ほん}を{批判|ひはん}する{資格|しかく}を{持|も}つと{思|おも}うのだ。
（{樋口|ひぐち}{裕一|ゆういち}『{差|さ}がつく{読書|どくしょ}』による）
（{注|ちゅう}）{酷評|こくひょう}する：ひどく{厳|きび}しい{評価|ひょうか}を{下|くだ}す`,
      arti: `Buku itu sama seperti manusia. Baik-buruknya tidak bisa ditentukan dengan satu ukuran nilai yang seragam. Sama seperti ada orang populer, ada buku laris. Sama seperti ada orang yang tidak disukai, ada juga buku yang tidak disentuh siapa pun. Namun, semuanya memiliki nilainya masing-masing. Jika buku itu sampai ke tangan orang yang mencarinya pada saat ia mencarinya, buku itu menjadi buku yang baik.

Karena itu, saya merasa sangat tidak terima terhadap ulasan di situs ulasan buku internet dan semacamnya yang memastikan baik-buruknya buku seolah-olah dirinya adalah Tuhan. Tentu saja mengulas buku bukan hal buruk. Mengkritik atau memuji buku tentu juga penting. Tetapi bagaimanapun, itu hanyalah penilaian berdasarkan pengetahuan, minat, dan kepribadian orang itu. Saya bukannya tidak paham perasaan ingin berbicara dari posisi Tuhan, tetapi itu terlalu sombong.

Ada juga buku saya yang cukup dihajar di situs ulasan buku internet. Saya anggap itu memang tak terhindarkan. Kalau sudah laku sampai tingkat tertentu, pasti ada orang yang ingin mencelanya. Mungkin dengan mencela buku, ia merasa dirinya lebih hebat dari pengarangnya. Saya sendiri, sebelum mulai menulis buku, bukan, jujur saja, sebelum menerbitkan buku yang cukup laku, banyak mencela buku orang lain.

Hanya saja, yang sungguh membuat saya tidak terima adalah terlalu banyaknya ulasan yang menuntut hal yang memang tidak ada. Misalnya, saya menerbitkan sebuah buku referensi. Maksudnya adalah buku referensi yang merangkum pengetahuan "minimal sebanyak ini yang perlu dimiliki agar bisa menulis esai pada tingkat yang cukup untuk entah bagaimana lulus ujian esai masuk universitas." Karena itu, dalam buku itu saya sengaja tidak menulis hal yang sulit. Namun, ada ulasan yang mengecam habis (catatan) buku referensi itu. Dan di dalam ulasan itu tertulis, "Membaca buku ini pun hanya memberi kemampuan untuk lulus pas-pasan."

Saya justru menulis buku itu tepat untuk memberi kemampuan lulus pas-pasan. Kalau berhasil lulus meski pas-pasan, buku itu adalah buku terbaik. Kalau hal yang sengaja saya potong dengan maksud itu diangkat lalu dikritik karena tidak ditulis, saya jadi bingung.

Betapa banyaknya ulasan buku yang egois seperti itu. Orang berpengetahuan mencela buku pengantar sebagai terlalu kekanak-kanakan, orang tanpa pengetahuan mencela buku spesialis sebagai sulit dipahami. Tetapi itu hanyalah karena mereka mencari buku yang tidak sesuai dengan ukuran dirinya. Saya berpendapat, mencari dan membeli buku yang sesuai dengan ukuran diri dengan benar adalah kewajiban pembaca.

Saya berpendapat, selama berbicara tentang buku, kita harus menyayangi semua buku. Baru dengan begitu, saya rasa, kita punya hak untuk mengkritik buku.
(Dari buku karya Higuchi Yuichi, "Membaca yang Membuat Beda")
(Catatan) 酷評する: memberi penilaian yang sangat keras`,
    },

    // ── 問題13：就職支援行事案内 ──
    "13": {
      yomi: `{就職|しゅうしょく}{活動|かつどう}を{行|おこな}う{学生|がくせい}のために、{各種|かくしゅ}{行事|ぎょうじ}を{実施|じっし}しています。
{全|ぜん}{行事|ぎょうじ}、{申|もう}し{込|こ}みは{不要|ふよう}です。{当日|とうじつ}、{学生証|がくせいしょう}を{持参|じさん}のうえ、{会場|かいじょう}へお{越|こ}し{下|くだ}さい。

{日|ひ}　　{時間|じかん}　　{行事|ぎょうじ}{名|めい}　　{内容|ないよう}
①　9{月|がつ}19{日|にち}（{金|きん}）　イ　{就職|しゅうしょく}ガイダンス　［{就職|しゅうしょく}{活動|かつどう}{全般|ぜんぱん}の{基本的|きほんてき}な{情報|じょうほう}］　{就職|しゅうしょく}{活動|かつどう}の{方法|ほうほう}やスケジュールなど
②　9{月|がつ}24{日|か}（{水|すい}）　ア　{留学生|りゅうがくせい}ガイダンス　{留学生|りゅうがくせい}{向|む}けの{在留|ざいりゅう}{資格|しかく}や{留学生|りゅうがくせい}の{就職|しゅうしょく}{状況|じょうきょう}などの{説明|せつめい}
③　10{月|がつ}3{日|か}（{金|きん}）　イ　{就職|しゅうしょく}{活動|かつどう}{体験談|たいけんだん}（1）　{広告|こうこく}、マスコミ{業界|ぎょうかい}に{就職|しゅうしょく}した{卒業生|そつぎょうせい}による{就職|しゅうしょく}{活動|かつどう}の{体験談|たいけんだん}
④　10{月|がつ}16{日|にち}（{木|もく}）　ア　{就職|しゅうしょく}ガイダンス　［{就職|しゅうしょく}{活動|かつどう}{全般|ぜんぱん}の{基本的|きほんてき}な{情報|じょうほう}］{内容|ないよう}は9{月|がつ}19{日|にち}と{同|おな}じです
⑤　10{月|がつ}23{日|にち}（{木|もく}）　ア　{留学生|りゅうがくせい}ガイダンス　{内容|ないよう}は9{月|がつ}24{日|か}と{同|おな}じです
⑥　11{月|がつ}7{日|か}（{金|きん}）　イ　{留学生|りゅうがくせい}マナー{講座|こうざ}　{留学生|りゅうがくせい}が{日本|にほん}で{就職|しゅうしょく}{活動|かつどう}を{行|おこな}うにあたっての{基本的|きほんてき}なマナー{講座|こうざ}
⑦　11{月|がつ}{20日|はつか}（{木|もく}）　イ　{就職|しゅうしょく}{活動|かつどう}{体験談|たいけんだん}（2）　{金融|きんゆう}、{証券|しょうけん}{業界|ぎょうかい}に{就職|しゅうしょく}した{卒業生|そつぎょうせい}による{就職|しゅうしょく}{活動|かつどう}の{体験談|たいけんだん}
⑧　12{月|がつ}{1日|ついたち}（{月|げつ}）　＊　{合同|ごうどう}{企業|きぎょう}{説明会|せつめいかい}　{詳細|しょうさい}は{下記|かき}{参照|さんしょう}
⑨　12{月|がつ}12{日|にち}（{金|きん}）　イ　{就職|しゅうしょく}{活動|かつどう}{体験談|たいけんだん}（3）　{貿易|ぼうえき}、{流通|りゅうつう}{業界|ぎょうかい}に{就職|しゅうしょく}した{卒業生|そつぎょうせい}による{就職|しゅうしょく}{活動|かつどう}の{体験談|たいけんだん}
⑩　12{月|がつ}17{日|にち}（{水|すい}）　＊　{合同|ごうどう}{企業|きぎょう}{説明会|せつめいかい}　{詳細|しょうさい}は{下記|かき}{参照|さんしょう}

{開催|かいさい}{時間|じかん}：ア…14:50-16:20　　イ…18:30-20:00　　＊{合同|ごうどう}{企業|きぎょう}{説明会|せつめいかい}は{下記|かき}{参照|さんしょう}
{開催|かいさい}{場所|ばしょ}：⑥{以外|いがい}…{緑山|みどりやま}ホール　　⑥…101{教室|きょうしつ}

{注意|ちゅうい}{事項|じこう}
・{就職|しゅうしょく}{希望者|きぼうしゃ}（{留学生|りゅうがくせい}{含|ふく}む）は、［{就職|しゅうしょく}ガイダンス］のどちらかに{必|かなら}ず{出席|しゅっせき}してください。
・［{留学生|りゅうがくせい}ガイダンス］は{希望者|きぼうしゃ}のみ{出席|しゅっせき}してください。

{合同|ごうどう}{企業|きぎょう}{説明会|せつめいかい}について
{合同|ごうどう}{企業|きぎょう}{説明会|せつめいかい}は{業種|ぎょうしゅ}{別|べつ}に、{以下|いか}の{日時|にちじ}に{開催|かいさい}されます。
{各回|かくかい}、{約|やく}50{社|しゃ}が{参加|さんか}{予定|よてい}です。（{途中|とちゅう}{入退場|にゅうたいじょう}{自由|じゆう}）

{時間|じかん}　　12{月|がつ}{1日|ついたち}　　12{月|がつ}17{日|にち}
16:00-17:00　　{金融|きんゆう}、{証券|しょうけん}　　{広告|こうこく}、マスコミ
17:15-18:15　　{広告|こうこく}、マスコミ　　メーカー、IT
18:30-19:30　　{貿易|ぼうえき}、{流通|りゅうつう}　　{教育|きょういく}、{福祉|ふくし}

{緑山|みどりやま}{大学|だいがく}{就職課|しゅうしょくか}`,
      arti: `Kami mengadakan berbagai acara untuk mahasiswa yang sedang mencari kerja.
Semua acara tidak memerlukan pendaftaran. Pada hari pelaksanaan, silakan datang ke lokasi dengan membawa kartu mahasiswa.

Tanggal — Waktu — Nama acara — Isi
① 19 Sept (Jum) — I — Panduan Mencari Kerja [informasi dasar seputar mencari kerja] — cara dan jadwal mencari kerja, dll.
② 24 Sept (Rab) — A — Panduan Mahasiswa Asing — penjelasan status izin tinggal untuk mahasiswa asing, kondisi kerja mahasiswa asing, dll.
③ 3 Okt (Jum) — I — Cerita Pengalaman Mencari Kerja (1) — cerita alumni yang bekerja di industri periklanan dan media massa
④ 16 Okt (Kam) — A — Panduan Mencari Kerja [informasi dasar seputar mencari kerja] — isinya sama dengan 19 September
⑤ 23 Okt (Kam) — A — Panduan Mahasiswa Asing — isinya sama dengan 24 September
⑥ 7 Nov (Jum) — I — Kursus Etiket untuk Mahasiswa Asing — kursus etiket dasar bagi mahasiswa asing yang mencari kerja di Jepang
⑦ 20 Nov (Kam) — I — Cerita Pengalaman Mencari Kerja (2) — cerita alumni yang bekerja di industri keuangan dan sekuritas
⑧ 1 Des (Sen) — * — Pameran Perusahaan Gabungan — lihat rincian di bawah
⑨ 12 Des (Jum) — I — Cerita Pengalaman Mencari Kerja (3) — cerita alumni yang bekerja di industri perdagangan dan distribusi
⑩ 17 Des (Rab) — * — Pameran Perusahaan Gabungan — lihat rincian di bawah

Jam: A (ア) … 14.50–16.20; I (イ) … 18.30–20.00; * Pameran Perusahaan Gabungan lihat di bawah
Lokasi: selain ⑥ … Aula Midoriyama; ⑥ … Ruang 101

Hal yang perlu diperhatikan
- Mahasiswa yang ingin bekerja (termasuk mahasiswa asing) wajib menghadiri salah satu [Panduan Mencari Kerja].
- [Panduan Mahasiswa Asing] hanya dihadiri oleh yang berminat.

Tentang Pameran Perusahaan Gabungan
Pameran Perusahaan Gabungan diadakan per jenis industri pada waktu berikut.
Setiap sesi direncanakan diikuti sekitar 50 perusahaan. (Bebas masuk dan keluar di tengah acara)

Waktu — 1 Desember — 17 Desember
16.00–17.00 — keuangan, sekuritas — periklanan, media massa
17.15–18.15 — periklanan, media massa — manufaktur, TI
18.30–19.30 — perdagangan, distribusi — pendidikan, kesejahteraan

Bagian Karier Universitas Midoriyama`,
    },
  },
};
