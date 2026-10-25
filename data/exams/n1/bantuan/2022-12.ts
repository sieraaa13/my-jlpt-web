import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2022
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_2212: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "チームの{新|あたら}しい【{監督|かんとく}】が{決|き}まった。",
      arti: "【Pelatih (manajer)】 baru tim sudah ditentukan.",
    },
    2: {
      yomi: "これは、{外国語|がいこくご}から【{派生|はせい}】した{言葉|ことば}です。",
      arti: "Ini adalah kata yang 【diturunkan】 dari bahasa asing.",
    },
    3: {
      yomi: "{文字|もじ}が【{透|す}けて】いる。",
      arti: "Hurufnya 【tembus terlihat】 (dari balik kertas).",
      optArti: ["kabur, buram (ぼける)", "kurang sebagian, gompal (欠ける)", "lepas, copot (抜ける)", "tembus pandang (透ける)"],
    },
    4: {
      yomi: "この{村|むら}は{湖|みずうみ}の【{恩恵|おんけい}】を{受|う}けている。",
      arti: "Desa ini menerima 【berkah/manfaat】 dari danau.",
    },
    5: {
      yomi: "{厳|きび}しい{練習|れんしゅう}に【{臨|のぞ}む】{選手|せんしゅ}たちの{姿|すがた}を{目|め}にした。",
      arti: "Saya melihat sosok para atlet yang 【menghadapi】 latihan berat.",
      optArti: ["menantang (挑む)", "giat berusaha (励む)", "khawatir, bimbang (悩む)", "menghadapi, menyongsong (臨む)"],
    },
    6: {
      yomi: "{調査|ちょうさ}データは、{地球|ちきゅう}の{温暖化|おんだんか}を【{如実|にょじつ}】に{示|しめ}している。",
      arti: "Data survei menunjukkan pemanasan global 【secara nyata (apa adanya)】.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{被害者|ひがいしゃ}について{報道|ほうどう}するときは、{仮名|かめい}を{用|もち}いてプライバシーを（　）している。",
      arti: "Saat memberitakan korban, nama samaran dipakai untuk (…) privasinya.",
      optYomi: ["{保護|ほご}", "{防御|ぼうぎょ}", "{警備|けいび}", "{支援|しえん}"],
      optArti: ["perlindungan", "pertahanan (dari serangan)", "penjagaan keamanan", "dukungan, bantuan"],
    },
    8: {
      yomi: "この{模型|もけい}は、{実際|じっさい}にあった{建物|たてもの}を20{分|ぶん}の1の{大|おお}きさで（　）{再現|さいげん}した{物|もの}だ。",
      arti: "Maket ini mereproduksi bangunan yang benar-benar ada dengan skala 1:20 secara (…).",
      optYomi: ["{従順|じゅうじゅん}に", "{厳正|げんせい}に", "{忠実|ちゅうじつ}に", "{均等|きんとう}に"],
      optArti: ["dengan patuh, penurut", "dengan tegas dan adil", "dengan setia, persis sesuai aslinya", "dengan merata"],
    },
    9: {
      yomi: "{川|かわ}の{水|みず}が{澄|す}んでいてきれいだったので、{両手|りょうて}で（　）、{顔|かお}を{洗|あら}った。",
      arti: "Air sungainya jernih dan bersih, jadi saya (…) dengan kedua tangan lalu mencuci muka.",
      optArti: ["membalik (halaman, kain)", "menciduk, menyendok", "menjepit", "mencubit, menjumput"],
    },
    10: {
      yomi: "{一生懸命|いっしょうけんめい}{働|はたら}いて、ついに（　）のマイホームを{手|て}に{入|い}れた。",
      arti: "Setelah bekerja keras, akhirnya saya mendapatkan rumah sendiri yang sudah lama (…).",
      optYomi: ["{志望|しぼう}", "{本意|ほんい}", "{欲求|よっきゅう}", "{念願|ねんがん}"],
      optArti: ["pilihan yang dicita-citakan (sekolah, kerja)", "maksud sebenarnya", "hasrat, kebutuhan", "idaman yang lama didambakan"],
    },
    11: {
      yomi: "きれいな{写真|しゃしん}を{撮|と}るためには、まずカメラの（　）を{合|あ}わせることが{大切|たいせつ}です。",
      arti: "Untuk memotret foto yang bagus, yang penting pertama-tama adalah menyetel (…) kamera.",
      optArti: ["pose", "kursor", "fokus", "tempo"],
    },
    12: {
      yomi: "{全国|ぜんこく}{大会|たいかい}は{初出場|はつしゅつじょう}だったが、{厳|きび}しい{試合|しあい}を{勝|か}ち{抜|ぬ}いて{何|なん}とか{上位|じょうい}に（　）。",
      arti: "Ini pertama kalinya tampil di turnamen nasional, tetapi kami memenangkan pertandingan-pertandingan sulit dan entah bagaimana berhasil (…) peringkat atas.",
      optYomi: ["{乗|の}り{込|こ}んだ", "{食|く}い{込|こ}んだ", "{駆|か}け{込|こ}んだ", "{追|お}い{込|こ}んだ"],
      optArti: ["naik ke (kendaraan), menyerbu masuk", "menerobos masuk (ke peringkat)", "berlari masuk", "mendesak, menyudutkan"],
    },
    13: {
      yomi: "{道案内|みちあんない}をしてくれたので（　）{地元|じもと}の{人|ひと}かと{思|おも}ったら、{実|じつ}は{観光客|かんこうきゃく}だった。",
      arti: "Karena ia menunjukkan jalan, saya (…) mengira ia penduduk setempat, ternyata ia wisatawan.",
      optArti: ["(tadinya) yakin sekali (ternyata salah)", "dengan tegas", "dengan kuat, sungguh-sungguh", "dengan jelas"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{必要|ひつよう}な{資金|しきん}を【{調達|ちょうたつ}した】。",
      arti: "Saya 【mengumpulkan/mengadakan】 dana yang diperlukan.",
      optYomi: ["{払|はら}った", "{預|あず}かった", "{返却|へんきゃく}した", "{用意|ようい}した"],
      optArti: ["membayar", "menerima titipan", "mengembalikan", "menyiapkan"],
    },
    15: {
      yomi: "{山田|やまだ}さんは【{温和|おんわ}な】{性格|せいかく}だ。",
      arti: "Yamada-san berwatak 【lembut dan kalem】.",
      optArti: ["segar, menyegarkan", "tenang, kalem", "teliti, penuh perhatian", "ringan, enteng"],
    },
    16: {
      yomi: "おすすめの【スポット】を{教|おし}えてください。",
      arti: "Tolong beri tahu 【tempat】 yang direkomendasikan.",
      optYomi: ["{場所|ばしょ}", "{商品|しょうひん}", "{方法|ほうほう}", "{時期|じき}"],
      optArti: ["tempat", "barang dagangan", "cara", "waktu, musim"],
    },
    17: {
      yomi: "{各国|かっこく}のチームの{実力|じつりょく}は【{拮抗|きっこう}している】。",
      arti: "Kemampuan tim-tim dari tiap negara 【seimbang (bersaing ketat)】.",
      optYomi: ["{差|さ}がある", "{差|さ}がない", "{高|たか}くなっている", "{低|ひく}くなっている"],
      optArti: ["ada selisih", "tidak ada selisih", "semakin tinggi", "semakin rendah"],
    },
    18: {
      yomi: "{住民|じゅうみん}からの【{風当|かぜあ}たり】は{相当|そうとう}なものだった。",
      arti: "【Kecaman】 dari warga cukup keras.",
      optYomi: ["{要求|ようきゅう}", "{信頼|しんらい}", "{期待|きたい}", "{批判|ひはん}"],
      optArti: ["tuntutan", "kepercayaan", "harapan", "kritik"],
    },
    19: {
      yomi: "{子|こ}どもたちの【あどけない】{表情|ひょうじょう}を{捉|とら}えていた。",
      arti: "(Foto itu) menangkap ekspresi anak-anak yang 【lugu dan polos】.",
      optYomi: ["{不安|ふあん}そうな", "{真剣|しんけん}な", "{無邪気|むじゃき}な", "{羨|うらや}ましそうな"],
      optArti: ["tampak cemas", "serius", "polos, tanpa prasangka", "tampak iri"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "【{出荷|しゅっか}】",
      arti: "【出荷】 = pengiriman barang (dari produsen/gudang ke pasar)",
      optYomi: [
        "{有名|ゆうめい}{俳優|はいゆう}の{出荷|しゅっか}によって、{公演|こうえん}のチケットはすぐに{完売|かんばい}した。",
        "{海外|かいがい}の{需要|じゅよう}が{高|たか}まり、アメリカに{新店舗|しんてんぽ}の{出荷|しゅっか}が{決定|けってい}した。",
        "{好評|こうひょう}により{注文|ちゅうもん}が{殺到|さっとう}していて、{商品|しょうひん}の{出荷|しゅっか}が{遅|おく}れている。",
        "{今回|こんかい}の{展覧会|てんらんかい}では、{絵画|かいが}の{出荷|しゅっか}が{大半|たいはん}を{占|し}めた。",
      ],
      optArti: [
        "Berkat 'pengiriman barang' aktor terkenal, tiket pertunjukannya langsung terjual habis.",
        "Permintaan luar negeri meningkat, dan 'pengiriman barang' toko baru ke Amerika sudah diputuskan.",
        "Karena sambutan yang baik, pesanan membanjir sehingga 'pengiriman barang' produk tertunda.",
        "Dalam pameran kali ini, 'pengiriman barang' lukisan menempati sebagian besar.",
      ],
    },
    21: {
      yomi: "【{譲|ゆず}る】",
      arti: "【譲る】 = memberikan/mengalihkan (barang, tempat duduk) kepada orang lain",
      optYomi: [
        "{私|わたし}は{早朝|そうちょう}に{起|お}きて、{新聞|しんぶん}を{各家庭|かくかてい}に{譲|ゆず}る{仕事|しごと}をしている。",
        "{学校|がっこう}の{倉庫|そうこ}の{鍵|かぎ}を{職員室|しょくいんしつ}に{譲|ゆず}るのをすっかり{忘|わす}れていた。",
        "{新|あたら}しいテレビを{買|か}ったので、{古|ふる}いテレビを{友人|ゆうじん}に{譲|ゆず}った。",
        "{今朝|けさ}、{自宅|じたく}{近|ちか}くの{公園|こうえん}で{拾|ひろ}った{財布|さいふ}を{交番|こうばん}に{譲|ゆず}った。",
      ],
      optArti: [
        "Saya bangun pagi-pagi dan bekerja 'memberikan' koran ke setiap rumah.",
        "Saya benar-benar lupa 'memberikan' kunci gudang sekolah ke ruang guru.",
        "Karena sudah membeli TV baru, saya 'memberikan' TV lama kepada teman.",
        "Pagi ini, saya 'memberikan' dompet yang saya pungut di taman dekat rumah ke pos polisi.",
      ],
    },
    22: {
      yomi: "【{底力|そこぢから}】",
      arti: "【底力】 = kekuatan terpendam (yang keluar di saat genting)",
      optYomi: [
        "{毎日|まいにち}{体|からだ}を{鍛|きた}えているので、{腕|うで}の{底力|そこぢから}なら{誰|だれ}にも{負|ま}けない。",
        "{彼|かれ}は{目立|めだ}たない{存在|そんざい}だが、{大事|だいじ}な{場面|ばめん}での{底力|そこぢから}はすごい。",
        "{石原|いしはら}さんは、{動物|どうぶつ}の{言葉|ことば}が{分|わ}かる{特別|とくべつ}な{底力|そこぢから}を{持|も}っている。",
        "{留学|りゅうがく}して、{英語|えいご}を{話|はな}す{底力|そこぢから}を{伸|の}ばしたいと{思|おも}っている。",
      ],
      optArti: [
        "Karena setiap hari melatih badan, soal 'kekuatan terpendam' lengan saya tidak kalah dari siapa pun.",
        "Ia sosok yang tidak menonjol, tetapi 'kekuatan terpendam'-nya di saat-saat penting luar biasa.",
        "Ishihara-san memiliki 'kekuatan terpendam' khusus untuk memahami bahasa hewan.",
        "Saya ingin belajar ke luar negeri untuk mengembangkan 'kekuatan terpendam' berbicara bahasa Inggris.",
      ],
    },
    23: {
      yomi: "【{絶大|ぜつだい}】",
      arti: "【絶大】 = sangat besar (pengaruh, popularitas, kepercayaan)",
      optYomi: [
        "{絶大|ぜつだい}な{開発|かいはつ}によって、{町|まち}の{風景|ふうけい}がすっかり{変|か}わった。",
        "{世界|せかい}を{旅|たび}して、{絶大|ぜつだい}な{山々|やまやま}の{姿|すがた}を{写真|しゃしん}に{収|おさ}めた。",
        "これまで{誰|だれ}も{釣|つ}ったことがないような{絶大|ぜつだい}な{魚|さかな}を{釣|つ}りたい。",
        "あの{歌手|かしゅ}は、{若|わか}い{人|ひと}たちに{絶大|ぜつだい}な{人気|にんき}がある。",
      ],
      optArti: [
        "Karena pembangunan yang 'sangat besar', pemandangan kota berubah total.",
        "Saya berkeliling dunia dan memotret pegunungan yang 'sangat besar'.",
        "Saya ingin memancing ikan 'sangat besar' yang belum pernah dipancing siapa pun.",
        "Penyanyi itu memiliki popularitas yang 'sangat besar' di kalangan anak muda.",
      ],
    },
    24: {
      yomi: "【{手痛|ていた}い】",
      arti: "【手痛い】 = telak, parah (kerugian, kesalahan, kritik yang menyakitkan)",
      optYomi: [
        "{仕事|しごと}で{手痛|ていた}いミスをして、{周|まわ}りに{迷惑|めいわく}をかけた。",
        "{来週|らいしゅう}までは、{手痛|ていた}い{運動|うんどう}をなるべく{避|さ}けてください。",
        "{秋|あき}が{終|お}わって、とうとう{手痛|ていた}い{冬|ふゆ}がやってきた。",
        "{今川|いまがわ}さんは、ほかの{人|ひと}より{手痛|ていた}いスピードで{作業|さぎょう}した。",
      ],
      optArti: [
        "Saya membuat kesalahan yang 'telak' dalam pekerjaan dan merepotkan orang-orang di sekitar.",
        "Sampai minggu depan, sebisa mungkin hindari olahraga yang 'telak'.",
        "Musim gugur berakhir, dan akhirnya musim dingin yang 'telak' pun tiba.",
        "Imagawa-san bekerja dengan kecepatan yang lebih 'telak' daripada orang lain.",
      ],
    },
    25: {
      yomi: "【{誘致|ゆうち}】",
      arti: "【誘致】 = menarik/mengundang (pabrik, perusahaan, acara) agar datang ke suatu daerah",
      optYomi: [
        "{駐車場|ちゅうしゃじょう}で、{係員|かかりいん}が{車|くるま}を{何台|なんだい}も{誘致|ゆうち}している。",
        "{議会|ぎかい}は{町|まち}の{経済|けいざい}を{活性化|かっせいか}させるために、{工場|こうじょう}を{誘致|ゆうち}することを{決|き}めた。",
        "{人材|じんざい}が{不足|ふそく}しているため、{今年|ことし}は100{人|にん}{以上|いじょう}の{新入|しんにゅう}{社員|しゃいん}を{誘致|ゆうち}した。",
        "あの{学校|がっこう}は{新|あたら}しい{教授|きょうじゅ}{方法|ほうほう}を{誘致|ゆうち}したことで、{人々|ひとびと}の{関心|かんしん}を{集|あつ}めている。",
      ],
      optArti: [
        "Di tempat parkir, petugas sedang 'menarik datang' banyak mobil.",
        "Dewan kota memutuskan untuk 'menarik datang' pabrik demi menghidupkan ekonomi kota.",
        "Karena kekurangan SDM, tahun ini kami 'menarik datang' lebih dari 100 karyawan baru.",
        "Sekolah itu menarik perhatian orang karena 'menarik datang' metode pengajaran baru.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "このレストランのシェフはまだ20{代|だい}だが、{著名|ちょめい}な{料理|りょうり}{評論家|ひょうろんか}（　）{満足|まんぞく}させる{腕|うで}の{持|も}ち{主|ぬし}であると、テレビや{雑誌|ざっし}で{評判|ひょうばん}になっている。",
      arti: "Koki restoran ini masih berusia 20-an, tetapi ia terkenal di TV dan majalah sebagai orang yang punya keterampilan untuk memuaskan (…) kritikus kuliner ternama.",
      optArti: ["bahkan (objek) ... pun", "dan ... (tidak gramatikal di sini)", "sampai kepada", "bahkan ... pun (sebagai subjek)"],
    },
    27: {
      yomi: "はっきりとは{覚|おぼ}えていないが、この{町|まち}には（　）{来|き}たことがある。",
      arti: "Saya tidak ingat dengan jelas, tetapi saya pernah datang ke kota ini (…).",
      optArti: ["lagi", "akhirnya", "suatu waktu (dulu)", "sebentar lagi"],
    },
    28: {
      yomi: "（ホームページ）{星山市|ほしやまし}{北|きた}{体育館|たいいくかん}は{老朽化|ろうきゅうか}のため、{本年|ほんねん}{3月|さんがつ}{15日|じゅうごにち}（　）{閉館|へいかん}しました。{長年|ながねん}のご{利用|りよう}、ありがとうございました。",
      arti: "(Situs web) Gedung Olahraga Utara Kota Hoshiyama telah ditutup (…) 15 Maret tahun ini karena sudah tua. Terima kasih atas penggunaan Anda selama bertahun-tahun.",
      optYomi: [null, "に{至|いた}るまで", null, "を{皮切|かわき}りに"],
      optArti: ["karena (alasan resmi)", "sampai dengan (mencakup semuanya)", "terhitung (pada tanggal), dengan (ini)", "diawali dengan"],
    },
    29: {
      yomi: "{高校|こうこう}に{入学|にゅうがく}して、{特|とく}に{入|はい}りたいクラブもなかったので、{友人|ゆうじん}に（　）、テニス{部|ぶ}に{入|はい}った。",
      arti: "Setelah masuk SMA, karena tidak ada klub yang terlalu ingin saya masuki, saya (…) teman lalu masuk klub tenis.",
      optYomi: ["{誘|さそ}われるまま", "{誘|さそ}われようが", "{誘|さそ}われた{上|うえ}に", "{誘|さそ}われない{限|かぎ}り"],
      optArti: ["menurut saja ketika diajak", "meskipun diajak", "selain diajak, ditambah lagi", "selama tidak diajak"],
    },
    30: {
      yomi: "（ホームページ）{当店|とうてん}では、{商品|しょうひん}に{欠陥|けっかん}がある（　）、{返品|へんぴん}および{交換|こうかん}はお{受|う}けできませんので、あらかじめご{了承|りょうしょう}ください。",
      arti: "(Situs web) Di toko kami, (…) produk memiliki cacat, kami tidak menerima pengembalian maupun penukaran barang, mohon dimaklumi sebelumnya.",
      optYomi: ["{点|てん}に{加|くわ}えて", "{点|てん}を{除|のぞ}いて", "{場合|ばあい}に{加|くわ}えて", "{場合|ばあい}を{除|のぞ}いて"],
      optArti: ["selain poin (bahwa)", "kecuali poin (bahwa)", "selain dalam hal", "kecuali dalam hal"],
    },
    31: {
      yomi: "（{取引先|とりひきさき}へのメールで）{来週|らいしゅう}の{打|う}ち{合|あ}わせの{資料|しりょう}をお{送|おく}りします。お{忙|いそが}しいとは（　）が、ご{確認|かくにん}いただければ{幸|さいわ}いです。",
      arti: "(Dalam surel kepada mitra bisnis) Saya kirimkan bahan rapat minggu depan. Saya (…) Anda sedang sibuk, tetapi saya akan senang jika Anda berkenan memeriksanya.",
      optYomi: [null, "{存|ぞん}じます", null, "{申|もう}し{上|あ}げます"],
      optArti: ["melakukan (merendah)", "mengetahui, memahami (merendah)", "ada, berada (hormat)", "menyampaikan (merendah)"],
    },
    32: {
      yomi: "{学生|がくせい}{時代|じだい}はずっとサッカーをしていたのだが、{社会人|しゃかいじん}に（　）、{運動|うんどう}する{機会|きかい}がすっかり{減|へ}ってしまった。",
      arti: "Semasa sekolah saya terus bermain sepak bola, tetapi (…) menjadi pekerja, kesempatan berolahraga jadi berkurang drastis.",
      optArti: ["meskipun setelah menjadi", "apakah karena baru saja menjadi", "sejak menjadi (terus-menerus begitu)", "anggap saja baru menjadi"],
    },
    33: {
      yomi: "{自転車|じてんしゃ}の{鍵|かぎ}が{見当|みあ}たらないと{思|おも}ったら、{昨日|きのう}はいていたズボンのポケットに（　）。",
      arti: "Saya kira kunci sepeda hilang, ternyata (…) di saku celana yang saya pakai kemarin.",
      optYomi: ["{入|い}れたつもりだった", "{入|い}れっぱなしだった", "{入|い}れっこなかった", "{入|い}れるべきではなかった"],
      optArti: ["saya kira sudah memasukkannya", "tertinggal begitu saja di dalam (tidak dikeluarkan)", "tidak mungkin memasukkannya", "seharusnya tidak dimasukkan"],
    },
    34: {
      yomi: "A：「ねえねえ、{北市|きたし}にできた{動物園|どうぶつえん}、{行|い}ったんでしょ？あそこ、{相当|そうとう}{広|ひろ}いらしいね。」B：「（　）。1{日|にち}じゃ{全部|ぜんぶ}{回|まわ}れなかったよ。」",
      arti: "A: \"Eh, kamu sudah pergi ke kebun binatang yang baru dibuka di Kota Kita, kan? Katanya di sana luas sekali, ya.\" B: \"(…). Sehari saja tidak cukup untuk mengelilingi semuanya.\"",
      optYomi: ["{広|ひろ}くないはずないんだよ", "{広|ひろ}いなんてことはないよ", "{広|ひろ}くないわけじゃないんだよ", "{広|ひろ}いなんてもんじゃないよ"],
      optArti: ["tidak mungkin tidak luas", "tidak bisa dibilang luas", "bukannya tidak luas sih", "bukan sekadar luas lagi (luar biasa luas)"],
    },
    35: {
      yomi: "{私|わたし}は{昔|むかし}からバイクが{大好|だいす}きだ。{小|ちい}さいころは、よく{父|ちち}のバイクの{後|うし}ろに（　）。",
      arti: "Sejak dulu saya sangat suka motor. Waktu kecil, saya (…) di belakang motor ayah.",
      optYomi: ["{乗|の}りたがったものだ", "{乗|の}りたがったところだ", "{乗|の}って{欲|ほ}しがったものだ", "{乗|の}って{欲|ほ}しがったところだ"],
      optArti: ["dulu sering ingin membonceng", "baru saja ingin membonceng", "dulu sering ingin (orang lain) membonceng", "baru saja ingin (orang lain) membonceng"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{秋|あき}の{初|はじ}めのこの{時期|じき}は、{真夏|まなつ}に{戻|もど}った＿＿ ★ ＿＿ ＿＿、{気温|きおん}の{差|さ}が{大|おお}きく{体調|たいちょう}を{崩|くず}しやすいので、{注意|ちゅうい}が{必要|ひつよう}だ。",
      arti: "Pada masa awal musim gugur ini, ada hari yang seolah kembali ke puncak musim panas, ada pula hari yang terasa sejuk; perbedaan suhunya besar dan mudah membuat badan tidak fit, jadi perlu berhati-hati.",
      optYomi: ["{日|ひ}もあり", "{日|ひ}もあれば", null, null],
      optArti: ["ada pula hari (yang...)", "ada hari (yang...), dan", "yang terasa sejuk", "yang seolah-olah"],
    },
    37: {
      yomi: "{歴史的|れきしてき}{価値|かち}が{高|たか}いとされる{旧|きゅう}{白木|しらき}{小学校|しょうがっこう}の{校舎|こうしゃ}を{初|はじ}めて{見|み}たが、とても＿＿ ＿＿ ★ ＿＿{驚|おどろ}いた。",
      arti: "Saya pertama kali melihat gedung bekas SD Shiraki yang dianggap bernilai sejarah tinggi, dan saya kaget dengan desainnya yang modern hingga sama sekali tidak terlihat seperti bangunan yang didirikan 100 tahun lalu.",
      optYomi: ["100{年前|ねんまえ}に", "{現代的|げんだいてき}なデザインに", "{建|た}てられたものとは", "{思|おも}えないほどの"],
      optArti: ["100 tahun lalu", "(kaget) dengan desain yang modern", "(bahwa) itu didirikan", "sampai tidak terlihat seperti"],
    },
    38: {
      yomi: "くしゃみや{鼻水|はなみず}といった{症状|しょうじょう}が{現|あらわ}れる{花粉症|かふんしょう}は、{風邪|かぜ}と＿＿ ＿＿ ★ ＿＿ケースもあるそうだ。",
      arti: "Katanya, alergi serbuk sari yang menimbulkan gejala seperti bersin dan pilek, karena gejalanya mirip dengan flu, ada juga kasus di mana orangnya tidak sadar bahwa dirinya menderita alergi serbuk sari.",
      optYomi: ["{自覚|じかく}がない", "{自分|じぶん}は{花粉症|かふんしょう}だという", "{症状|しょうじょう}が{似|に}ている", null],
      optArti: ["tidak menyadari", "bahwa dirinya menderita alergi serbuk sari", "gejalanya mirip", "juga karena (hal itu)"],
    },
    39: {
      yomi: "{高校|こうこう}{卒業後|そつぎょうご}の{進路|しんろ}について{両親|りょうしん}に{反対|はんたい}されたが、{誰|だれ}に{何|なん}と＿＿ ＿＿ ★ ＿＿{思|おも}う。",
      arti: "Orang tua saya menentang pilihan jalan saya setelah lulus SMA, tetapi apa pun yang dikatakan siapa pun, saya ingin percaya dan menempuh jalan yang saya rasa \"inilah dia\".",
      optYomi: ["{思|おも}える{道|みち}を", "{信|しん}じて{進|すす}みたいと", "{言|い}われようとも", "{自分|じぶん}がこれだと"],
      optArti: ["jalan yang (saya) rasa", "(bahwa saya) ingin percaya dan maju", "meskipun dikatakan (apa pun)", "(saya sendiri) bahwa inilah dia"],
    },
    40: {
      yomi: "{企業|きぎょう}の{海外|かいがい}{進出|しんしゅつ}が{成功|せいこう}するかどうかは、＿＿ ＿＿ ★ ＿＿といってもいいだろう。",
      arti: "Bisa dikatakan, berhasil atau tidaknya ekspansi perusahaan ke luar negeri bergantung pada apakah perusahaan bisa mendapatkan SDM unggul yang benar-benar memahami kondisi negara tersebut.",
      optYomi: ["{優秀|ゆうしゅう}な{人材|じんざい}を{確保|かくほ}できる", null, "か{否|いな}か", "その{国|くに}の{事情|じじょう}をよく{知|し}る"],
      optArti: ["bisa mendapatkan SDM unggul", "bergantung pada", "atau tidak (apakah ... atau tidak)", "yang memahami betul kondisi negara itu"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: [null, null, "{確|たし}かに", null],
      optArti: ["malah, lebih tepatnya", "justru sebaliknya", "memang benar", "akhirnya"],
    },
    42: {
      optYomi: ["それ{以来|いらい}だ", null, null, null],
      optArti: ["sejak itulah", "hanya itu saja", "tetap seperti itu", "karena itulah"],
    },
    43: {
      optArti: ["(partikel subjek/objek)", "bahkan ... pun", "kalau ...", "dengan (sarana)"],
    },
    44: {
      optYomi: ["{使者|ししゃ}のようでもある", "{使者|ししゃ}とのことである", "{使者|ししゃ}だとは{言|い}えまい", "{使者|ししゃ}にもなり{得|え}まい"],
      optArti: ["seolah-olah juga seorang utusan", "katanya seorang utusan", "tidak bisa dikatakan utusan", "tidak mungkin menjadi utusan pun"],
    },

    // ── 問題8：内容理解（短文） ──
    45: {
      yomi: "「{嫌|きら}い」の{感情|かんじょう}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang perasaan \"tidak suka\", manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{否定的|ひていてき}で{強|つよ}い{感情|かんじょう}であり、{振|ふ}り{回|まわ}されてもしかたがない。",
        "なくせない{感情|かんじょう}であり、{受|う}け{入|い}れたほうがいい。",
        "{認|みと}めることで、その{感情|かんじょう}を{抑|おさ}えることができる。",
        "{理由|りゆう}を{考|かんが}えれば、{振|ふ}り{回|まわ}されることはない。",
      ],
      optArti: [
        "Itu perasaan negatif dan kuat, jadi wajar saja kalau kita terombang-ambing olehnya.",
        "Itu perasaan yang tidak bisa dihilangkan, jadi sebaiknya diterima.",
        "Dengan mengakuinya, perasaan itu bisa ditekan.",
        "Jika memikirkan alasannya, kita tidak akan terombang-ambing.",
      ],
    },
    46: {
      yomi: "{品質|ひんしつ}にこだわる{戦略|せんりゃく}とは、どういうことか。",
      arti: "Apa yang dimaksud dengan strategi yang mengutamakan kualitas?",
      optYomi: [
        "{品質|ひんしつ}に{見合|みあ}った{価格|かかく}であると{主張|しゅちょう}する。",
        "{品質|ひんしつ}の{良|よ}さと{価格|かかく}の{低|ひく}さを{主張|しゅちょう}する。",
        "{価格|かかく}に{合|あ}わせた{品質|ひんしつ}であると{主張|しゅちょう}する。",
        "{価格|かかく}よりも、{品質|ひんしつ}の{良|よ}さを{主張|しゅちょう}する。",
      ],
      optArti: [
        "Menegaskan bahwa harganya sepadan dengan kualitasnya.",
        "Menegaskan bagusnya kualitas dan murahnya harga.",
        "Menegaskan bahwa kualitasnya disesuaikan dengan harga.",
        "Lebih menegaskan bagusnya kualitas daripada harga.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{素朴|そぼく}な{質問|しつもん}に{向|む}き{合|あ}って、{日常|にちじょう}を{省|かえり}みることが{必要|ひつよう}だ。",
        "{親|おや}が{子|こ}どもから{人生|じんせい}の{本当|ほんとう}の{意味|いみ}を{教|おそ}わることもある。",
        "{大人|おとな}になると、{子|こ}どもが{尋|たず}ねるような{質問|しつもん}をすることは{難|むずか}しい。",
        "{感性|かんせい}を{磨|みが}くには、{子|こ}どもが{投|な}げかけた{素朴|そぼく}な{質問|しつもん}に{答|こた}えるとよい。",
      ],
      optArti: [
        "Perlu menghadapi pertanyaan sederhana dan merenungkan kembali keseharian.",
        "Orang tua kadang belajar makna hidup yang sesungguhnya dari anak.",
        "Setelah dewasa, sulit mengajukan pertanyaan seperti yang ditanyakan anak-anak.",
        "Untuk mengasah kepekaan, sebaiknya menjawab pertanyaan sederhana yang diajukan anak.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{科学者|かがくしゃ}は{時代|じだい}に{合|あ}った{知識|ちしき}を{持|も}つべきだ。",
        "{科学者|かがくしゃ}は{研究|けんきゅう}を{続|つづ}けることでより{謙虚|けんきょ}になるものだ。",
        "{謙虚|けんきょ}であれば、よい{科学者|かがくしゃ}として{認|みと}められるものだ。",
        "どんな{科学者|かがくしゃ}であっても、{自分|じぶん}の{無知|むち}を{自覚|じかく}しているものだ。",
      ],
      optArti: [
        "Ilmuwan harus memiliki pengetahuan yang sesuai zaman.",
        "Ilmuwan, dengan terus meneliti, memang menjadi semakin rendah hati.",
        "Jika rendah hati, seseorang akan diakui sebagai ilmuwan yang baik.",
        "Ilmuwan mana pun pasti menyadari ketidaktahuannya sendiri.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    49: {
      yomi: "とんでもないことになりますとあるが、どうなるのか。",
      arti: "Tertulis \"akan menjadi hal yang gawat\"; apa yang akan terjadi?",
      optYomi: [
        "{子|こ}どもが{子|こ}ども{同士|どうし}で{遊|あそ}べなくなる。",
        "{子|こ}どもが{自由|じゆう}に{遊|あそ}びを{楽|たの}しめなくなる。",
        "{子|こ}どもが{今|いま}の{時代|じだい}の{遊|あそ}びに{興味|きょうみ}をもたなくなる。",
        "{子|こ}どもが{安全|あんぜん}に{管理|かんり}された{場所|ばしょ}でしか{遊|あそ}べなくなる。",
      ],
      optArti: [
        "Anak-anak tidak bisa lagi bermain dengan sesama anak.",
        "Anak-anak tidak bisa lagi menikmati bermain dengan bebas.",
        "Anak-anak tidak lagi tertarik pada permainan zaman sekarang.",
        "Anak-anak hanya bisa bermain di tempat yang diawasi dengan aman.",
      ],
    },
    50: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{大人|おとな}は{子供|こども}の{遊|あそ}びに{干渉|かんしょう}するべきではない。",
        "{大人|おとな}は{安全性|あんぜんせい}を{考|かんが}えて、{遊|あそ}び{環境|かんきょう}を{整|ととの}えなければならない。",
        "{大人|おとな}は{先入観|せんにゅうかん}をもたずに、{子|こ}どもの{遊|あそ}び{環境|かんきょう}を{考|かんが}えるべきだ。",
        "{大人|おとな}の{先入観|せんにゅうかん}が{遊|あそ}び{環境|かんきょう}を{考|かんが}えるうえで{役|やく}に{立|た}つこともある。",
      ],
      optArti: [
        "Orang dewasa tidak boleh mencampuri permainan anak.",
        "Orang dewasa harus menata lingkungan bermain dengan mempertimbangkan keamanan.",
        "Orang dewasa harus memikirkan lingkungan bermain anak tanpa prasangka.",
        "Prasangka orang dewasa kadang berguna dalam memikirkan lingkungan bermain.",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}によると、{雑食性|ざっしょくせい}{動物|どうぶつ}の{特徴|とくちょう}は{何|なに}か。",
      arti: "Menurut penulis, apa ciri hewan omnivora?",
      optYomi: [
        "{慣|な}れ{親|した}しんだものを{食|た}べたいという{気持|きも}ちよりも、{新|あたら}しい{食|た}べものへの{好奇心|こうきしん}のほうが{強|つよ}い。",
        "{新|あたら}しい{食|た}べものに{対|たい}して、{恐怖心|きょうふしん}をもちながらも、{挑戦|ちょうせん}する{性質|せいしつ}をもっている。",
        "いろいろなものを{食|た}べるので、{栄養|えいよう}バランスが{偏|かたよ}らず、{生存|せいぞん}する{確率|かくりつ}が{高|たか}い。",
        "{目|め}の{前|まえ}に{食|た}べものがあれば、{躊躇|ちゅうちょ}せずに{積極的|せっきょくてき}に{食|た}べようとする。",
      ],
      optArti: [
        "Rasa ingin tahu terhadap makanan baru lebih kuat daripada keinginan memakan makanan yang sudah akrab.",
        "Terhadap makanan baru, meski merasa takut, mereka memiliki sifat untuk mencobanya.",
        "Karena memakan berbagai macam makanan, keseimbangan gizinya tidak timpang dan peluang bertahan hidupnya tinggi.",
        "Jika ada makanan di depan mata, mereka akan langsung memakannya tanpa ragu.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}によると、{調理|ちょうり}することでどうなるか。",
      arti: "Menurut penulis, apa yang terjadi dengan memasak (mengolah makanan)?",
      optYomi: [
        "{食材|しょくざい}が{限|かぎ}られていても、{人間|にんげん}の{欲求|よっきゅう}を{満|み}たすことができる。",
        "{新|あたら}しい{食材|しょくざい}への{好奇心|こうきしん}は{薄|うす}れるが、{恐怖|きょうふ}は{解消|かいしょう}できる。",
        "{慣|な}れ{親|した}しんでいないものへの{好奇心|こうきしん}を{高|たか}めることができる。",
        "{食|た}べたことのないものへの{抵抗感|ていこうかん}を{減|へ}らすことができる。",
      ],
      optArti: [
        "Meski bahan makanan terbatas, keinginan manusia bisa terpenuhi.",
        "Rasa ingin tahu terhadap bahan makanan baru memudar, tetapi rasa takut bisa dihilangkan.",
        "Rasa ingin tahu terhadap hal yang belum akrab bisa ditingkatkan.",
        "Rasa enggan terhadap makanan yang belum pernah dimakan bisa dikurangi.",
      ],
    },
    53: {
      yomi: "{筆者|ひっしゃ}によると、{研究者|けんきゅうしゃ}として{不向|ふむ}きな{人|ひと}はどのような{人|ひと}か。",
      arti: "Menurut penulis, orang seperti apa yang tidak cocok menjadi peneliti?",
      optYomi: [
        "{他人|たにん}の{研究|けんきゅう}に、{自分|じぶん}の{研究|けんきゅう}ほどの{関心|かんしん}を{持|も}てない{人|ひと}。",
        "{他人|たにん}よりいいデータを{出|だ}すことができない{人|ひと}。",
        "{自分|じぶん}の{研究|けんきゅう}も{他人|たにん}の{研究|けんきゅう}も{面白|おもしろ}がれない{人|ひと}。",
        "{自分|じぶん}の{研究|けんきゅう}に、{他人|たにん}の{研究|けんきゅう}{成果|せいか}を{生|い}かせない{人|ひと}。",
      ],
      optArti: [
        "Orang yang tidak bisa menaruh minat pada penelitian orang lain sebesar minatnya pada penelitian sendiri.",
        "Orang yang tidak bisa menghasilkan data lebih baik daripada orang lain.",
        "Orang yang tidak bisa merasa tertarik pada penelitian sendiri maupun penelitian orang lain.",
        "Orang yang tidak bisa memanfaatkan hasil penelitian orang lain untuk penelitiannya sendiri.",
      ],
    },
    54: {
      yomi: "{筆者|ひっしゃ}によると、どのようにすれば{質問|しつもん}の{量|りょう}が{増|ふ}えるか。",
      arti: "Menurut penulis, bagaimana caranya agar jumlah pertanyaan bertambah?",
      optYomi: [
        "{既存|きそん}の{知識|ちしき}に{聞|き}いた{内容|ないよう}を{加|くわ}えて、{知|ち}の{体系|たいけい}を{豊|ゆた}かにする。",
        "{聞|き}いた{内容|ないよう}と{自分|じぶん}の{知|ち}の{体系|たいけい}を{照合|しょうごう}し、{違|ちが}いを{意識|いしき}する。",
        "{新|あたら}しい{知|ち}の{体系|たいけい}のなかに、{既存|きそん}の{自分|じぶん}の{知識|ちしき}を{組|く}み{込|こ}む。",
        "{自分|じぶん}の{既存|きそん}の{知識|ちしき}に、{常|つね}に{疑問|ぎもん}を{持|も}つ。",
      ],
      optArti: [
        "Menambahkan isi yang didengar ke pengetahuan yang sudah ada untuk memperkaya sistem pengetahuan.",
        "Mencocokkan isi yang didengar dengan sistem pengetahuan sendiri dan menyadari perbedaannya.",
        "Memasukkan pengetahuan sendiri yang sudah ada ke dalam sistem pengetahuan yang baru.",
        "Selalu meragukan pengetahuan sendiri yang sudah ada.",
      ],
    },
    55: {
      yomi: "「{意図|いと}」を{充分|じゅうぶん}に{嗅|か}ぎ{取|と}らなくてはならないとあるが、なぜか。",
      arti: "Tertulis \"harus benar-benar mengendus 'niat' tersebut\"; mengapa?",
      optYomi: [
        "{事実|じじつ}ではない{情報|じょうほう}が{意図的|いとてき}に{混入|こんにゅう}されているかもしれないから。",
        "{意思|いし}{決定者|けっていしゃ}に{有利|ゆうり}な{情報|じょうほう}を{取|と}り{除|のぞ}かれているかもしれないから。",
        "{情報|じょうほう}には{意図|いと}が{含|ふく}まれていて、{理解|りかい}が{歪|ゆが}められるかもしれないから。",
        "{情報|じょうほう}をもたらす{側|がわ}の{意図|いと}が、{歪|ゆが}められて{理解|りかい}されるかもしれないから。",
      ],
      optArti: [
        "Karena mungkin informasi yang bukan fakta sengaja dicampurkan.",
        "Karena mungkin informasi yang menguntungkan pengambil keputusan telah dibuang.",
        "Karena informasi mengandung niat, dan pemahaman bisa terdistorsi.",
        "Karena niat pihak yang membawa informasi bisa dipahami secara menyimpang.",
      ],
    },
    56: {
      yomi: "{情報|じょうほう}の{汚染|おせん}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan tentang pencemaran informasi?",
      optYomi: [
        "{情報|じょうほう}が{汚染|おせん}されているかどうかを{見抜|みぬ}くことは{難|むずか}しい。",
        "{情報|じょうほう}が{汚染|おせん}されていても、{受|う}け{取|と}る{側|がわ}の{理解|りかい}に{影響|えいきょう}はない。",
        "{情報|じょうほう}に{意図|いと}が{含|ふく}まれていても、{汚染|おせん}されているとは{限|かぎ}らない。",
        "すべての{情報|じょうほう}には{意図|いと}が{含|ふく}まれているので、{汚染|おせん}されているといえる。",
      ],
      optArti: [
        "Sulit untuk mengetahui apakah informasi tercemar atau tidak.",
        "Meski informasi tercemar, tidak ada pengaruhnya pada pemahaman pihak penerima.",
        "Meski informasi mengandung niat, belum tentu informasi itu tercemar.",
        "Karena semua informasi mengandung niat, semuanya bisa dikatakan tercemar.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    57: {
      yomi: "「{人間|にんげん}のための」{論|ろん}の{問題点|もんだいてん}として、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Sebagai masalah dari teori \"demi manusia\", manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{人間|にんげん}のための{森林|しんりん}・{自然|しぜん}の{維持|いじ}に、{結|むす}びついていないこと。",
        "{人間|にんげん}がいなければ、{森林|しんりん}・{自然|しぜん}は{維持|いじ}できないと{考|かんが}えていること。",
        "{農山村|のうさんそん}に{暮|く}らす{人間|にんげん}の{考|かんが}え{方|かた}が{優先|ゆうせん}され{過|す}ぎていること。",
        "{森林|しんりん}・{自然|しぜん}の{維持|いじ}に{対|たい}する{考|かんが}え{方|かた}は、{立場|たちば}によって{異|こと}なること。",
      ],
      optArti: [
        "Teori itu tidak berujung pada pelestarian hutan dan alam demi manusia.",
        "Teori itu menganggap bahwa tanpa manusia, hutan dan alam tidak bisa dilestarikan.",
        "Cara berpikir orang yang tinggal di desa pertanian dan pegunungan terlalu diutamakan.",
        "Cara berpikir tentang pelestarian hutan dan alam berbeda-beda tergantung kedudukan.",
      ],
    },
    58: {
      yomi: "{筆者|ひっしゃ}によると、{日本|にほん}に{関|かん}して、{自然|しぜん}{中心|ちゅうしん}{主義的|しゅぎてき}な{考|かんが}え{方|かた}が{問題|もんだい}なのはなぜか。",
      arti: "Menurut penulis, mengapa cara berpikir yang berpusat pada alam bermasalah jika diterapkan di Jepang?",
      optYomi: [
        "{人間|にんげん}の{介入|かいにゅう}によって、{維持|いじ}されてきた{森林|しんりん}・{自然|しぜん}もあるから。",
        "{人間|にんげん}が{手|て}を{加|くわ}えずに、{原生林|げんせいりん}や{原生的|げんせいてき}な{自然|しぜん}を{維持|いじ}するのは{難|むずか}しいから。",
        "{自然|しぜん}の{維持|いじ}よりも{人間|にんげん}の{暮|く}らしを{守|まも}ることが{優先|ゆうせん}されているから。",
        "{自然|しぜん}の{生存権|せいぞんけん}を{保障|ほしょう}することについて、{人間|にんげん}の{理解|りかい}が{得|え}られないから。",
      ],
      optArti: [
        "Karena ada juga hutan dan alam yang terpelihara justru berkat campur tangan manusia.",
        "Karena sulit melestarikan hutan purba dan alam asli tanpa campur tangan manusia.",
        "Karena melindungi kehidupan manusia lebih diutamakan daripada pelestarian alam.",
        "Karena pemahaman manusia tentang menjamin hak hidup alam tidak bisa didapatkan.",
      ],
    },
    59: {
      yomi: "{筆者|ひっしゃ}によると、{森林|しんりん}ボランティアの{役割|やくわり}とは{何|なに}か。",
      arti: "Menurut penulis, apa peran relawan hutan?",
      optYomi: [
        "{人間|にんげん}を{中心|ちゅうしん}として、{森林|しんりん}・{自然|しぜん}との{関係|かんけい}を{維持|いじ}していくこと。",
        "{人間|にんげん}の{営|いとな}みを{制限|せいげん}して、{森林|しんりん}・{自然|しぜん}との{新|あら}たな{関係|かんけい}を{見付|みつ}け{出|だ}すこと。",
        "{森林|しんりん}・{自然|しぜん}と{人間|にんげん}が{共存|きょうぞん}できる{関係|かんけい}を{維持|いじ}していくこと。",
        "{森林|しんりん}・{自然|しぜん}が{持続|じぞく}できるように、できるだけ{自然|しぜん}に{任|まか}せること。",
      ],
      optArti: [
        "Mempertahankan hubungan dengan hutan dan alam dengan manusia sebagai pusatnya.",
        "Membatasi aktivitas manusia dan menemukan hubungan baru dengan hutan dan alam.",
        "Mempertahankan hubungan di mana hutan, alam, dan manusia bisa hidup berdampingan.",
        "Sebisa mungkin menyerahkan kepada alam agar hutan dan alam bisa lestari.",
      ],
    },

    // ── 問題11：統合理解 ──
    60: {
      yomi: "スランプの{時|とき}に{落|お}ち{込|こ}んでしまう{原因|げんいん}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana A dan B menjelaskan penyebab seseorang menjadi terpuruk saat mengalami slump (kemerosotan performa)?",
      optYomi: [
        "AもBも{成果|せいか}が{上|あ}がらない{原因|げんいん}を{考|かんが}えすぎてしまうからだと{述|の}べている。",
        "AもBも、{過去|かこ}の{状態|じょうたい}と{比較|ひかく}して、{焦|あせ}ってしまうからだと{述|の}べている。",
        "Aは{何|なに}が{悪|わる}いのかが{分|わ}からないからだと{述|の}べ、Bは{調子|ちょうし}が{良|よ}い{人|ひと}と{比較|ひかく}してしまうからだと{述|の}べている。",
        "Aは{能力|のうりょく}の{限界|げんかい}だと{思|おも}ってしまうからだと{述|の}べ、Bは{良|よ}かった{時|とき}と{比較|ひかく}してしまうからだと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan karena terlalu memikirkan penyebab hasil yang tidak meningkat.",
        "A dan B sama-sama menyatakan karena membandingkan dengan keadaan masa lalu lalu menjadi panik.",
        "A menyatakan karena tidak tahu apa yang salah; B menyatakan karena membandingkan diri dengan orang yang sedang dalam kondisi baik.",
        "A menyatakan karena mengira sudah mencapai batas kemampuan; B menyatakan karena membandingkan dengan masa ketika kondisinya baik.",
      ],
    },
    61: {
      yomi: "AとBは、スランプの{時|とき}はどのようにするのがいいと{述|の}べているか。",
      arti: "Menurut A dan B, sebaiknya bagaimana saat sedang mengalami slump?",
      optYomi: [
        "AもBも、{現状|げんじょう}を{維持|いじ}しながら、{調子|ちょうし}が{良|よ}くなるのを{待|ま}てばいいと{述|の}べている。",
        "AもBも{成果|せいか}を{上|あ}げるための{方法|ほうほう}を{考|かんが}えたほうがいいと{述|の}べている。",
        "Aはやる{気|き}や{自信|じしん}を{取|と}り{戻|もど}すまで{待|ま}ったほうがいいと{述|の}べ、Bは{今|いま}の{状態|じょうたい}を{受|う}け{入|い}れて、{自然|しぜん}に{任|まか}せていればいいと{述|の}べている。",
        "Aは{特別|とくべつ}なことは{何|なに}もしなくてもいいと{述|の}べ、Bは{現状|げんじょう}を{認|みと}めて、{今後|こんご}どうするべきかを{考|かんが}えたほうがいいと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan cukup menunggu kondisi membaik sambil mempertahankan keadaan sekarang.",
        "A dan B sama-sama menyatakan sebaiknya memikirkan cara untuk meningkatkan hasil.",
        "A menyatakan sebaiknya menunggu sampai semangat dan kepercayaan diri kembali; B menyatakan cukup menerima keadaan sekarang dan menyerahkannya pada alam.",
        "A menyatakan tidak perlu melakukan hal khusus apa pun; B menyatakan sebaiknya mengakui keadaan sekarang dan memikirkan apa yang harus dilakukan ke depannya.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    62: {
      yomi: "よいことだとあるが、なぜか。",
      arti: "Tertulis \"itu hal yang baik\"; mengapa?",
      optYomi: [
        "{個性的|こせいてき}である{必要|ひつよう}はないと{気|き}づくから。",
        "{挫折|ざせつ}したり{悩|なや}んだりする{経験|けいけん}が{個性|こせい}を{作|つく}るから。",
        "{自分|じぶん}という{人間|にんげん}を{意識|いしき}することになるから。",
        "{自分|じぶん}にあてはまる{個性|こせい}の{型|かた}を{見付|みつ}けられるから。",
      ],
      optArti: [
        "Karena kita menyadari bahwa tidak perlu menjadi berkepribadian unik.",
        "Karena pengalaman gagal dan bimbang itulah yang membentuk kepribadian.",
        "Karena hal itu membuat kita menyadari diri kita sendiri sebagai manusia.",
        "Karena kita bisa menemukan pola kepribadian yang cocok dengan diri sendiri.",
      ],
    },
    63: {
      yomi: "{個性|こせい}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang kepribadian (keunikan diri)?",
      optYomi: [
        "{自分|じぶん}から{社会|しゃかい}とかかわることで、{意識|いしき}できるものだ。",
        "{他人|たにん}と{比較|ひかく}しなければ、{自然|しぜん}に{発揮|はっき}できるものだ。",
        "なりたい{自分|じぶん}を{意識|いしき}すれば、{自然|しぜん}に{身|み}につくものだ。",
        "{求|もと}めて{得|え}るものではなく、{初|はじ}めから{持|も}っているものだ。",
      ],
      optArti: [
        "Sesuatu yang bisa disadari dengan berinteraksi aktif dengan masyarakat.",
        "Sesuatu yang bisa muncul dengan sendirinya jika tidak membandingkan diri dengan orang lain.",
        "Sesuatu yang akan terbentuk dengan sendirinya jika kita menyadari sosok diri yang kita inginkan.",
        "Bukan sesuatu yang didapat dengan dicari, melainkan sesuatu yang sudah dimiliki sejak awal.",
      ],
    },
    64: {
      yomi: "{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan penulis?",
      optYomi: [
        "{自分|じぶん}の{個性|こせい}を{模索|もさく}すべきだ。",
        "{自分|じぶん}{自身|じしん}でいることが{大事|だいじ}だ。",
        "ありのままの{自分|じぶん}を{出|だ}せなくてもいい。",
        "{型|かた}に{縛|しば}られない{生|い}き{方|かた}をしたほうがいい。",
      ],
      optArti: [
        "Kita harus mencari-cari kepribadian kita sendiri.",
        "Yang penting adalah menjadi diri sendiri.",
        "Tidak apa-apa jika tidak bisa menunjukkan diri apa adanya.",
        "Sebaiknya menjalani hidup yang tidak terikat pola.",
      ],
    },

    // ── 問題13：情報検索 ──
    65: {
      yomi: "{次|つぎ}の4{人|にん}は{星川|ほしかわ}{大学|だいがく}の{大学院|だいがくいん}に{在学中|ざいがくちゅう}で、「グローバル{研究|けんきゅう}{活動|かつどう}{助成|じょせい}」に{応募|おうぼ}できるのは{誰|だれ}か。\n\n{西田|にしだ}さん：{海外|かいがい}のシンポジウムで{講演|こうえん}を{聞|き}く、2022{年|ねん}{8月|はちがつ}{24日|にじゅうよっか}から{3日間|みっかかん}、{採択歴|さいたくれき}なし\nダリアさん：{海外|かいがい}に{渡航|とこう}し{資料|しりょう}の{収集|しゅうしゅう}や{調査|ちょうさ}を{行|おこな}う、2023{年|ねん}{1月|いちがつ}{18日|じゅうはちにち}から{3日間|みっかかん}、{採択歴|さいたくれき}なし\nラワンさん：{海外|かいがい}で{研究|けんきゅう}{発表|はっぴょう}を{行|おこな}う、2023{年|ねん}{2月|にがつ}{20日|はつか}から{5日間|いつかかん}、2020{年度|ねんど}に{採択歴|さいたくれき}あり\n{山本|やまもと}さん：{海外|かいがい}に{渡航|とこう}し{調査|ちょうさ}を{行|おこな}う、2022{年|ねん}{8月|はちがつ}{20日|はつか}から{12日間|じゅうににちかん}、2021{年度|ねんど}に{採択歴|さいたくれき}あり",
      arti: "Empat orang berikut sedang kuliah di program pascasarjana Universitas Hoshikawa. Siapa yang bisa mendaftar \"Hibah Kegiatan Penelitian Global\"?\n\nNishida-san: mendengarkan ceramah di simposium luar negeri, 3 hari mulai 24 Agustus 2022, belum pernah terpilih\nDaria-san: pergi ke luar negeri untuk mengumpulkan bahan dan melakukan survei, 3 hari mulai 18 Januari 2023, belum pernah terpilih\nRawan-san: melakukan presentasi penelitian di luar negeri, 5 hari mulai 20 Februari 2023, pernah terpilih pada tahun anggaran 2020\nYamamoto-san: pergi ke luar negeri untuk melakukan survei, 12 hari mulai 20 Agustus 2022, pernah terpilih pada tahun anggaran 2021",
      optYomi: ["{西田|にしだ}さん", null, null, "{山本|やまもと}さん"],
      optArti: ["Nishida-san", "Daria-san", "Rawan-san", "Yamamoto-san"],
    },
    66: {
      yomi: "{応募|おうぼ}に{関|かん}して、{留意|りゅうい}しなければならないことは{何|なに}か。",
      arti: "Terkait pendaftaran, hal apa yang harus diperhatikan?",
      optYomi: [
        "{指導|しどう}{教員|きょういん}から{研究|けんきゅう}{推進課|すいしんか}{窓口|まどぐち}に{提出|ていしゅつ}してもらわなければならない{書類|しょるい}がある。",
        "{研究|けんきゅう}{活動|かつどう}が{発表|はっぴょう}か{調査|ちょうさ}かによって、{提出|ていしゅつ}しなければならない{書類|しょるい}の{種類|しゅるい}が{異|こと}なる。",
        "{記入|きにゅう}{用紙|ようし}は、{5月|ごがつ}{10日|とおか}までに{研究|けんきゅう}{推進課|すいしんか}{窓口|まどぐち}に{取|と}りに{行|い}かなければならない。",
        "{研究|けんきゅう}{発表|はっぴょう}の{場合|ばあい}、{発表|はっぴょう}を{行|おこな}うことが{確定|かくてい}していないと{応募|おうぼ}ができない。",
      ],
      optArti: [
        "Ada dokumen yang harus diserahkan oleh dosen pembimbing ke loket Bagian Promosi Penelitian.",
        "Jenis dokumen yang harus diserahkan berbeda tergantung apakah kegiatan penelitiannya presentasi atau survei.",
        "Formulir isian harus diambil di loket Bagian Promosi Penelitian paling lambat 10 Mei.",
        "Untuk presentasi penelitian, tidak bisa mendaftar jika presentasinya belum pasti.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：プリプリ海老 ──
    "7": {
      yomi: `{以下|いか}は{新聞|しんぶん}のコラムである。

{昔|むかし}に{比|くら}べてレストランのメニューに{修飾語|しゅうしょくご}が{増|ふ}えたと{感|かん}じる。「プリプリ{海老|えび}の○○パスタ」「とろ〜りチーズ{入|い}りのハンバーグ」「××{県産|けんさん}のやわらか{若鶏|わかどり}の△△」といった{感|かん}じだ。{付加|ふか}{価値|かち}や{希少|きしょう}{価値|かち}をアピールして、{商品|しょうひん}の{差別化|さべつか}を{図|はか}りたいのだろう。

これらの{修飾語|しゅうしょくご}は[41]{食欲|しょくよく}を{刺激|しげき}し{期待感|きたいかん}を{高|たか}める。でもよくよく{考|かんが}えると、{差別化|さべつか}の{中身|なかみ}は{実|じつ}にあいまいだ。プリプリ{海老|えび}の{定義|ていぎ}は？ チーズはみな、とろ〜りするのでは？ ××{県産|けんさん}が{品質|ひんしつ}{保証|ほしょう}になるのか？

{実質的|じっしつてき}な{中身|なかみ}を{伴|ともな}った{新商品|しんしょうひん}の{開発|かいはつ}が{困難|こんなん}になっていく{高度|こうど}{消費|しょうひ}{社会|しゃかい}では、{見|み}せかけの{新|あたら}しさで{消費|しょうひ}を{刺激|しげき}しようとする{傾向|けいこう}が{強|つよ}まる。{商品|しょうひん}のパッケージを{新|あたら}しくしたり、{商品名|しょうひんめい}の{変更|へんこう}が{頻繁|ひんぱん}に{行|おこな}われたりするのも[42]。{消費|しょうひ}{社会|しゃかい}とは、{商品|しょうひん}の{差別化|さべつか}{戦略|せんりゃく}によって{中身|なかみ}の{空虚|くうきょ}な（{注|ちゅう}1）ネーミング（{注|ちゅう}2）が{氾濫|はんらん}し、{消費者|しょうひしゃ}がそれに{踊|おど}らされる{世界|せかい}ではないのか。

そのような{社会|しゃかい}は、{私|わたし}たちの{言語|げんご}{感覚|かんかく}[43]{変|か}えてしまう{可能性|かのうせい}がある。{商品|しょうひん}の{差別化|さべつか}{競争|きょうそう}に{終|お}わりがないなら、{修飾語|しゅうしょくご}こそが{肝要|かんよう}になる。つまり、{修飾語|しゅうしょくご}を{伴|ともな}った{呼称|こしょう}がデフォルト（{注|ちゅう}3）となり、{裸|はだか}の{名詞|めいし}が{空虚|くうきょ}に{感|かん}じられるようになるかもしれない。

{何十年|なんじゅうねん}かすれば、{生物|せいぶつ}としての{海老|えび}という{記号|きごう}が{空洞化|くうどうか}して、おいしそうな{食材|しょくざい}としての{修飾語|しゅうしょくご}が{不可欠|ふかけつ}な{要素|ようそ}となり、「{海老|えび}」は「プリプリ{海老|えび}」、「{海老|えび}のチリソース」は「プリプリ{海老|えび}のチリソース」と{呼|よ}ばれているのだろうか。

{私|わたし}たちは、{増殖|ぞうしょく}する{見|み}せかけの{新|あたら}しさに{囲|かこ}まれながら、{空虚|くうきょ}な{記号|きごう}と{戯|たわむ}れ{続|つづ}ける（{注|ちゅう}4）しかないのか？

メニューに{並|なら}ぶ{修飾語|しゅうしょくご}は、{消費|しょうひ}{社会|しゃかい}の{遠|とお}い{未来|みらい}からの[44]。

（{注|ちゅう}1）{空虚|くうきょ}な：{実質的|じっしつてき}な{意味|いみ}がない
（{注|ちゅう}2）ネーミング：{名前|なまえ}を{付|つ}けること
（{注|ちゅう}3）デフォルト：{標準|ひょうじゅん}
（{注|ちゅう}4）{戯|たわむ}れ{続|つづ}ける：ここでは、{付|つ}き{合|あ}い{続|つづ}ける`,
      arti: `Berikut ini adalah sebuah kolom surat kabar.

Saya merasa, dibandingkan dulu, kata-kata penghias di menu restoran makin bertambah. Seperti "Pasta ○○ dengan udang kenyal", "Hamburger isi keju yang meleleh lembut", "△△ ayam muda empuk dari Prefektur ××". Barangkali mereka ingin menonjolkan nilai tambah dan nilai kelangkaan untuk membedakan produknya dari yang lain.

Kata-kata penghias ini [41] merangsang selera makan dan meningkatkan harapan. Namun kalau dipikir baik-baik, isi pembedanya sungguh tidak jelas. Apa definisi udang kenyal? Bukankah semua keju memang meleleh lembut? Apakah "produksi Prefektur ××" menjamin kualitas?

Dalam masyarakat konsumsi tingkat tinggi, di mana pengembangan produk baru yang benar-benar berisi makin sulit, kecenderungan untuk merangsang konsumsi dengan kebaruan semu makin menguat. Kemasan produk diperbarui atau nama produk sering diganti juga [42]. Bukankah masyarakat konsumsi itu adalah dunia di mana penamaan (catatan 2) yang kosong (catatan 1) isinya membanjir akibat strategi pembedaan produk, dan konsumen dibuat menari mengikutinya?

Masyarakat seperti itu berpotensi mengubah [43] kepekaan berbahasa kita. Jika persaingan pembedaan produk tidak ada habisnya, kata penghias itulah yang menjadi kunci. Artinya, sebutan yang disertai kata penghias bisa menjadi standar (catatan 3), dan kata benda polos mungkin akan terasa hampa.

Mungkinkah beberapa puluh tahun lagi, tanda "udang" sebagai makhluk hidup menjadi kosong, kata penghias sebagai bahan makanan yang tampak lezat menjadi unsur yang tak terpisahkan, sehingga "udang" disebut "udang kenyal" dan "udang saus cabai" disebut "udang kenyal saus cabai"?

Apakah kita, sambil dikelilingi kebaruan semu yang terus berlipat ganda, tidak punya pilihan selain terus bermain-main (catatan 4) dengan tanda-tanda yang hampa?

Kata-kata penghias yang berjajar di menu itu [44] dari masa depan yang jauh masyarakat konsumsi.

(Catatan 1) 空虚な: tidak memiliki makna yang substansial
(Catatan 2) ネーミング: pemberian nama
(Catatan 3) デフォルト: standar
(Catatan 4) 戯れ続ける: di sini, terus berurusan dengan`,
    },

    // ── 問題8 (1)：「嫌い」の感情 ──
    "8-1": {
      yomi: `「{嫌|きら}い」はネガティブな{感情|かんじょう}で、まさに{嫌悪感|けんおかん}をもってしまいがちですが、{自分|じぶん}の{中|なか}に{芽生|めば}えてきた{大切|たいせつ}な{感情|かんじょう}であり、{大事|だいじ}な{機能|きのう}でもあります。{何|なに}より{根絶|こんぜつ}できません。

「{嫌|きら}い」はとてもパワーを{必要|ひつよう}とする{感情|かんじょう}ですから、それだけに{反動|はんどう}も{大|おお}きい。{振|ふ}り{回|まわ}されないための{第一歩|だいいっぽ}は、{嫌|きら}いを{認|みと}めることです。ネガティブな{感情|かんじょう}でも、もつことは{自然|しぜん}なことであり、{生|い}きる{上|うえ}でメリットになる、そして{周囲|しゅうい}の{人|ひと}にもメリットがあると{捉|とら}えてみてください。`,
      arti: `"Tidak suka" adalah perasaan negatif, dan kita cenderung merasa jijik terhadapnya, tetapi itu adalah perasaan berharga yang tumbuh di dalam diri kita, sekaligus fungsi yang penting. Terlebih lagi, perasaan itu tidak bisa dimusnahkan.

"Tidak suka" adalah perasaan yang membutuhkan banyak tenaga, sehingga reaksi baliknya pun besar. Langkah pertama agar tidak terombang-ambing olehnya adalah mengakui rasa tidak suka itu. Cobalah memandangnya begini: memiliki perasaan negatif pun adalah hal yang wajar, bermanfaat dalam menjalani hidup, dan juga bermanfaat bagi orang-orang di sekitar.`,
    },

    // ── 問題8 (2)：品質にこだわる戦略 ──
    "8-2": {
      yomi: `{安|やす}く{売|う}るべきか、{品質|ひんしつ}にこだわるべきか。{事|こと}はそんなに{単純|たんじゅん}ではない。どんなに{良|よ}い{商品|しょうひん}であったとしても、できるだけ{価格|かかく}を{抑|おさ}えるための{努力|どりょく}は{必要|ひつよう}だ。{品質|ひんしつ}にこだわる{戦略|せんりゃく}というのは、{品質|ひんしつ}さえ{良|よ}ければどんなに{高|たか}くても{買|か}ってもらえるという{短絡的|たんらくてき}な{戦略|せんりゃく}ではない。

できるだけ{価格|かかく}を{抑|おさ}える{努力|どりょく}はしているけれども、それでも{品質|ひんしつ}にこだわるとこれ{以上|いじょう}は{安|やす}くできない。{他社|たしゃ}の{商品|しょうひん}よりも{高|たか}いのだけれども、それだけの{価値|かち}はある。だからその{差額|さがく}を{許容|きょよう}してほしい。そう{訴|うった}えることが、{品質|ひんしつ}にこだわった{正|ただ}しい{戦略|せんりゃく}である。`,
      arti: `Haruskah menjual dengan murah, atau haruskah mengutamakan kualitas? Persoalannya tidak sesederhana itu. Sebagus apa pun suatu produk, usaha untuk menekan harga sebisa mungkin tetap diperlukan. Strategi mengutamakan kualitas bukanlah strategi dangkal yang menganggap asalkan kualitasnya bagus, semahal apa pun orang akan tetap membeli.

Kami sudah berusaha menekan harga sebisa mungkin, tetapi kalau tetap mengutamakan kualitas, harganya tidak bisa lebih murah lagi. Memang lebih mahal daripada produk perusahaan lain, tetapi nilainya sepadan. Karena itu, mohon terima selisih harganya. Menyampaikan hal seperti itulah strategi yang benar dalam mengutamakan kualitas.`,
    },

    // ── 問題8 (3)：素朴な質問 ──
    "8-3": {
      yomi: `{時|とき}には、{自|みずか}らに「{素朴|そぼく}な{質問|しつもん}」を{投|な}げかけてみてはどうだろうか。{子|こ}どもが{親|おや}に{尋|たず}ねるような「{素朴|そぼく}な{質問|しつもん}」というものは、{意外|いがい}にも{人生|じんせい}や{生|い}きることの{本質|ほんしつ}にかかわることであり、{人生論|じんせいろん}や{哲学|てつがく}の{課題|かだい}であることが{少|すく}なくない。そうした{質問|しつもん}を{真正面|ましょうめん}から{投|な}げかけられたとき、はっと{何|なに}か{気付|きづ}かされるところがあって、{自分|じぶん}の{日常|にちじょう}を{反省|はんせい}するような{反応|はんのう}を{示|しめ}さないとしたら、その{人|ひと}の{感性|かんせい}は{相当|そうとう}に（{注|ちゅう}）{枯|か}れていると{考|かんが}えたほうがよい。

（{注|ちゅう}）{相当|そうとう}に：かなり`,
      arti: `Sesekali, bagaimana kalau kita mencoba mengajukan "pertanyaan sederhana" kepada diri sendiri? "Pertanyaan sederhana" seperti yang diajukan anak kepada orang tuanya, ternyata tak jarang berkaitan dengan hakikat hidup dan kehidupan, serta menjadi persoalan dalam filsafat hidup maupun filsafat. Ketika pertanyaan semacam itu dilontarkan langsung di depan kita, jika kita tidak tersentak menyadari sesuatu dan tidak menunjukkan reaksi seperti merenungkan keseharian kita, sebaiknya kita menganggap bahwa kepekaan orang itu sudah cukup (catatan) layu.

(Catatan) 相当に: cukup, sangat`,
    },

    // ── 問題8 (4)：科学者と謙虚さ ──
    "8-4": {
      yomi: `{科学|かがく}とは、{知|し}れば{知|し}るほどわからないことが{増|ふ}えてくるものである。{自分|じぶん}は{何|なに}も{知|し}らなかったと{思|おも}い{知|し}らされるのが{科学者|かがくしゃ}の{日常|にちじょう}と{言|い}える。つまり、{科学者|かがくしゃ}は{研究|けんきゅう}を{極|きわ}めれば{極|きわ}めるほど{謙虚|けんきょ}になる。{自分|じぶん}の{無知|むち}さを{知|し}って{謙虚|けんきょ}にならざるを{得|え}ないのだ。その{観点|かんてん}から{言|い}えば、{知|し}ったかぶり（{注|ちゅう}）をする{科学者|かがくしゃ}はもはや{研究|けんきゅう}をストップしており、それまでに{得|え}た{知識|ちしき}を{誇|ほこ}っているに{過|す}ぎないということができる。もはや{過去|かこ}の{人|ひと}であり、その{知識|ちしき}は{時代|じだい}{遅|おく}れになっている{可能性|かのうせい}が{高|たか}いのだ。

（{注|ちゅう}）{知|し}ったかぶりをする：{知|し}っているふりをする`,
      arti: `Ilmu pengetahuan adalah sesuatu yang makin diketahui, makin bertambah pula hal yang tidak dipahami. Bisa dikatakan, keseharian seorang ilmuwan adalah disadarkan bahwa dirinya tidak tahu apa-apa. Artinya, makin dalam seorang ilmuwan menekuni penelitiannya, makin rendah hati ia. Ia mau tidak mau menjadi rendah hati karena mengetahui ketidaktahuannya sendiri. Dari sudut pandang itu, bisa dikatakan ilmuwan yang berlagak tahu (catatan) sudah berhenti meneliti, dan hanya membanggakan pengetahuan yang ia peroleh sampai saat itu. Ia sudah menjadi orang masa lalu, dan besar kemungkinan pengetahuannya sudah ketinggalan zaman.

(Catatan) 知ったかぶりをする: berpura-pura tahu`,
    },

    // ── 問題9 (1)：子どもの遊び環境 ──
    "9-1": {
      yomi: `ともすると{私|わたし}たち{大人|おとな}は、{自分|じぶん}たちの{子|こ}ども{時代|じだい}の{遊|あそ}びはよくて、{今|いま}の{子|こ}どもの{遊|あそ}びは{好|この}ましくないと{考|かんが}えがちです。（{中略|ちゅうりゃく}）

{今|いま}はダメで{昔|むかし}はよかったというような{感覚|かんかく}をもって、{今|いま}の{子|こ}どもの{遊|あそ}びについて{考|かんが}えると、とんでもないことになります。{子|こ}どもたちが{嬉々|きき}として（{注|ちゅう}）{遊|あそ}んでいるものを{取|と}り{上|あ}げて、{今|いま}の{時代|じだい}ではおもしろくないような{遊|あそ}びを、{無理|むり}に{押|お}しつけることになってしまいます。そうなると{遊|あそ}びが{遊|あそ}びでなくなってしまいかねません。

また、{私|わたし}たちが{考|かんが}える{好|この}ましい{遊|あそ}び{環境|かんきょう}となると、なぜかとても{整理|せいり}された{空間|くうかん}になりがちです。たとえば{画一化|かくいつか}された{公園|こうえん}を{見|み}ると、ムダ{一|ひと}つなく{機能|きのう}を{重視|じゅうし}したオフィスを{連想|れんそう}させさえします。{限|かぎ}られたスペースで、しかも{安全性|あんぜんせい}や{管理|かんり}の{問題|もんだい}を{考|かんが}えればそうならざるをえないのかもしれませんが、それでは{子|こ}どもが{遊|あそ}びたいと{思|おも}わなくなるのです。

{子|こ}どもたちの{遊|あそ}び{空間|くうかん}には、もしかしたら{不自由|ふじゆう}さや{不便|ふべん}さ、{大人|おとな}がムダだと{思|おも}えるようなものも{必要|ひつよう}かもしれません。{配慮|はいりょ}の{行|ゆ}き{届|とど}きすぎた{場所|ばしょ}は、{遊園地|ゆうえんち}という{商業|しょうぎょう}{施設|しせつ}は{別|べつ}として、{子|こ}どもたちが{自由|じゆう}に{遊|あそ}べる{環境|かんきょう}としては{好|この}ましくないのではないでしょうか。

{子|こ}どもたちの{遊|あそ}び{環境|かんきょう}について{考|かんが}えるときに{大切|たいせつ}なのは、{私|わたし}たち{大人|おとな}の{側|がわ}にあるそのような{先入観|せんにゅうかん}を{捨|す}てることです。{自分|じぶん}は{子|こ}どものころにこんな{遊|あそ}びをした。{今|いま}の{子供|こども}はそれをしていない。だから{今|いま}の{子|こ}どもは{遊|あそ}んでいない。こんな{単純|たんじゅん}な{考|かんが}え{方|かた}では、{決|けっ}して{子|こ}どものためになる{遊|あそ}び{環境|かんきょう}など{考|かんが}えることはできません。

（{注|ちゅう}）{嬉々|きき}として：{喜|よろこ}んで`,
      arti: `Kita orang dewasa sering kali cenderung menganggap permainan masa kecil kita bagus, sedangkan permainan anak zaman sekarang tidak baik. (dihilangkan)

Jika kita memikirkan permainan anak zaman sekarang dengan perasaan "sekarang jelek, dulu bagus", akibatnya bisa gawat. Kita akan merampas hal-hal yang dimainkan anak-anak dengan gembira (catatan), lalu memaksakan permainan yang tidak menarik di zaman sekarang. Kalau begitu, bermain bisa-bisa tidak lagi menjadi bermain.

Selain itu, ketika bicara tentang lingkungan bermain yang kita anggap baik, entah mengapa cenderung menjadi ruang yang sangat tertata. Misalnya, melihat taman yang seragam bahkan mengingatkan kita pada kantor yang mengutamakan fungsi tanpa ada satu pun yang sia-sia. Dengan ruang yang terbatas, ditambah pertimbangan keamanan dan pengelolaan, mungkin memang mau tidak mau jadinya begitu, tetapi dengan begitu anak-anak jadi tidak ingin bermain.

Di ruang bermain anak-anak, mungkin justru diperlukan ketidakleluasaan dan ketidaknyamanan, juga hal-hal yang menurut orang dewasa sia-sia. Tempat yang terlalu penuh perhatian (serba diatur), kecuali fasilitas komersial seperti taman hiburan, bukankah tidak baik sebagai lingkungan tempat anak-anak bisa bermain dengan bebas?

Yang penting ketika memikirkan lingkungan bermain anak adalah membuang prasangka seperti itu yang ada di pihak kita orang dewasa. "Waktu kecil saya bermain seperti ini. Anak sekarang tidak melakukannya. Karena itu anak sekarang tidak bermain." Dengan cara berpikir sesederhana ini, kita sama sekali tidak akan bisa memikirkan lingkungan bermain yang bermanfaat bagi anak.

(Catatan) 嬉々として: dengan gembira`,
    },

    // ── 問題9 (2)：雑食性動物 ──
    "9-2": {
      yomi: `{私|わたし}たち{人間|にんげん}は、いろいろなものを{食|た}べる{雑食性|ざっしょくせい}{動物|どうぶつ}です。それに{対|たい}し、{基本的|きほんてき}にパンダはササだけを{食|た}べ、コアラ（{注|ちゅう}1）はユーカリの{葉|は}だけを{食|た}べます。{動物|どうぶつ}の{生|い}き{残|のこ}り{戦略|せんりゃく}を{考|かんが}えると、{雑食性|ざっしょくせい}{動物|どうぶつ}の{方|ほう}が、{慣|な}れ{親|した}しんだ{食|た}べものが{入手|にゅうしゅ}{困難|こんなん}な{状況|じょうきょう}になったとしても、それ{以外|いがい}の{食|た}べられるものへと{嗜好|しこう}をシフトすることによって{飢餓|きが}を{脱|だっ}し、{生存|せいぞん}する{確率|かくりつ}を{高|たか}めることができます。{雑食性|ざっしょくせい}{動物|どうぶつ}は{環境|かんきょう}{適応性|てきおうせい}に{優|すぐ}れた{生|い}きものといえます。

しかしその{一方|いっぽう}で、{新|あら}たに{見|み}つけ{出|だ}した{食|た}べものが{毒性|どくせい}をもっていたり、{栄養|えいよう}バランスが{悪|わる}いものであれば、{健康|けんこう}を{損|そこ}ね、{最悪|さいあく}{死|し}に{至|いた}る{可能性|かのうせい}があります。そのため、{雑食性|ざっしょくせい}{動物|どうぶつ}は、{新|あたら}しい{食|た}べものを{食|た}べるときには、{必|かなら}ずそのリスクと{対峙|たいじ}（{注|ちゅう}2）しなければなりません。

すなわち{雑食性|ざっしょくせい}{動物|どうぶつ}は、{食|た}べたことのないものを{食|た}べるのを{躊躇|ちゅうちょ}する「{食物|しょくもつ}{新奇性|しんきせい}{恐怖|きょうふ}」と、{積極的|せっきょくてき}に{食|た}べようとする「{食物|しょくもつ}{新奇性|しんきせい}{嗜好|しこう}」という{相|あい}（{注|ちゅう}3）{矛盾|むじゅん}する{行動|こうどう}{傾向|けいこう}を、{生|う}まれながらに{合|あ}わせもっているといえます。（{中略|ちゅうりゃく}）

{雑食性|ざっしょくせい}{動物|どうぶつ}がもつ{食|た}べものの{新奇性|しんきせい}{恐怖|きょうふ}と{新奇性|しんきせい}{嗜好|しこう}のジレンマを{解消|かいしょう}してきたもののひとつが、{人|ひと}の「{調理|ちょうり}」という{行為|こうい}です。{食|た}べたことのない{食材|しょくざい}、たとえば{昆虫|こんちゅう}をそのままの"{原型|げんけい}"で{出|だ}されると、{拒否感|きょひかん}を{抱|いだ}く{人|ひと}が{多|おお}いですが、{粉|こな}にしてチップスなど、{見慣|みな}れたお{菓子|かし}のかたちで{提供|ていきょう}されれば、{食|た}べる{人|ひと}は{確実|かくじつ}に{増|ふ}えます。さらに{慣|な}れ{親|した}しんだ{調味料|ちょうみりょう}で{味付|あじつ}けしたものなどであれば、「あっ、{意外|いがい}とおいしい」と{好評価|こうひょうか}を{得|え}るかもしれません。この{調理|ちょうり}という{操作|そうさ}が、{新奇|しんき}なものを{食|た}べるという{恐怖|きょうふ}を{緩和|かんわ}させるのに{一役|ひとやく}{買|か}って（{注|ちゅう}4）います。

（{注|ちゅう}1）コアラ：{動物|どうぶつ}の{一種|いっしゅ}
（{注|ちゅう}2）{対峙|たいじ}する：ここでは、{向|む}き{合|あ}う
（{注|ちゅう}3）{相|あい}〜：{互|たが}いに〜
（{注|ちゅう}4）{一役|ひとやく}{買|か}う：ここでは、{役立|やくだ}つ`,
      arti: `Kita manusia adalah hewan omnivora yang memakan berbagai macam makanan. Sebaliknya, pada dasarnya panda hanya memakan bambu sasa, dan koala (catatan 1) hanya memakan daun eukaliptus. Jika memikirkan strategi bertahan hidup hewan, hewan omnivora — sekalipun makanan yang sudah akrab baginya menjadi sulit didapat — bisa lolos dari kelaparan dan meningkatkan peluang bertahan hidup dengan mengalihkan selera ke makanan lain yang bisa dimakan. Hewan omnivora bisa disebut makhluk hidup yang unggul dalam beradaptasi dengan lingkungan.

Namun di sisi lain, jika makanan yang baru ditemukan itu beracun atau gizinya tidak seimbang, kesehatan bisa rusak, dan dalam kasus terburuk bisa berujung pada kematian. Karena itu, hewan omnivora harus selalu menghadapi (catatan 2) risiko tersebut ketika memakan makanan baru.

Dengan kata lain, hewan omnivora sejak lahir memiliki dua kecenderungan perilaku yang saling (catatan 3) bertentangan: "neofobia makanan", yaitu ragu memakan sesuatu yang belum pernah dimakan, dan "neofilia makanan", yaitu keinginan aktif untuk memakannya. (dihilangkan)

Salah satu hal yang telah mengatasi dilema antara neofobia dan neofilia makanan pada hewan omnivora adalah tindakan manusia yang disebut "memasak". Jika bahan makanan yang belum pernah dimakan, misalnya serangga, disajikan dalam "bentuk asli"-nya, banyak orang yang merasa enggan, tetapi jika dibuat tepung lalu disajikan dalam bentuk camilan yang sudah biasa dilihat seperti keripik, orang yang mau memakannya pasti bertambah. Terlebih lagi, jika dibumbui dengan bumbu yang sudah akrab, mungkin akan mendapat penilaian baik seperti "Wah, ternyata enak." Kegiatan memasak inilah yang ikut berperan (catatan 4) meredakan rasa takut memakan sesuatu yang asing.

(Catatan 1) コアラ: sejenis hewan
(Catatan 2) 対峙する: di sini, menghadapi
(Catatan 3) 相〜: saling ~
(Catatan 4) 一役買う: di sini, berguna, ikut berperan`,
    },

    // ── 問題9 (3)：能動的に聞く ──
    "9-3": {
      yomi: `{私|わたし}は、{自分|じぶん}の{研究|けんきゅう}をおもしろいと{思|おも}えるのと{同|おな}じ{程度|ていど}に、{他人|たにん}の{研究|けんきゅう}をおもしろいと{思|おも}えるかどうかが、{研究者|けんきゅうしゃ}に{向|む}いているか{否|いな}かの{判断|はんだん}の{基準|きじゅん}であると{思|おも}っている。いくらいいデータを{出|だ}す{人|ひと}であっても、{他人|たにん}のデータを{自分|じぶん}の{仕事|しごと}と{同|おな}じだけの{熱量|ねつりょう}を{持|も}っておもしろがれなければ、{研究者|けんきゅうしゃ}としてははっきり{不向|ふむ}きであると{思|おも}わざるを{得|え}ない。{学者|がくしゃ}としては{失格|しっかく}であろう。

これがもっとも{端的|たんてき}にあらわれるのが、{研究|けんきゅう}{発表|はっぴょう}の{際|さい}に{見|み}られる{質問|しつもん}の{量|りょう}である。（{中略|ちゅうりゃく}）

{発表|はっぴょう}された{内容|ないよう}を、{当事者|とうじしゃ}として{自分|じぶん}ならこういうアイデアで{実験|じっけん}をし、{結果|けっか}をこう{解釈|かいしゃく}することもできる、{明確|めいかく}な{結論|けつろん}を{得|え}るためにはこの{部分|ぶぶん}に{不備|ふび}があり、{次|つぎ}にはこんな{実験|じっけん}を{計画|けいかく}すれば、もっとはっきりした{結論|けつろん}に{到達|とうたつ}することができるのではないか、などなど、{考|かんが}え{始|はじ}めれば、おのずから{尋|たず}ねたいことは{次|つぎ}から{次|つぎ}へ{出|で}てくるはずなのである。

{私|わたし}はこれを「{能動的|のうどうてき}に{聞|き}く」と{言|い}っている。{人|ひと}の{話|はなし}は、{能動的|のうどうてき}に{聞|き}いてこそ、{自|みずか}らの{身|み}につくものである。{話|はな}された{内容|ないよう}をただひたすら{覚|おぼ}えようとしたり、{吸収|きゅうしゅう}しようとしているだけでは、{却|かえ}ってその{知識|ちしき}は{自分|じぶん}のものとならない。

「{能動的|のうどうてき}に{聞|き}く」とは、{話|はな}された{内容|ないよう}を、{自|みずか}らのこれまでの{知|ち}の{体系|たいけい}のなかに{位置|いち}づけることであり、{位置|いち}づけるためには、{聞|き}きつつ{常|つね}に{自分|じぶん}の{知|ち}の{体系|たいけい}を{確認|かくにん}し、{照合|しょうごう}する{作業|さぎょう}を{伴|ともな}うはずである。{外部|がいぶ}からインプットされてくる{内容|ないよう}と、{既存|きそん}の{自|みずか}らの{知識|ちしき}の{箱|はこ}とのあいだに{軋轢|あつれき}が{生|しょう}じるのは{当然|とうぜん}であり、その{軋轢|あつれき}こそが{質問|しつもん}を{促|うなが}す{力|ちから}になる{筈|はず}なのだ。`,
      arti: `Saya berpendapat bahwa tolok ukur untuk menilai cocok tidaknya seseorang menjadi peneliti adalah apakah ia bisa menganggap penelitian orang lain menarik, sama seperti ia menganggap penelitiannya sendiri menarik. Sebagus apa pun data yang dihasilkan seseorang, jika ia tidak bisa merasa tertarik pada data orang lain dengan semangat yang sama seperti pada pekerjaannya sendiri, mau tidak mau saya menganggapnya jelas tidak cocok sebagai peneliti. Sebagai ilmuwan, barangkali ia tidak memenuhi syarat.

Hal ini paling gamblang terlihat pada banyaknya pertanyaan saat presentasi penelitian. (dihilangkan)

Terhadap isi yang dipresentasikan, jika kita mulai berpikir sebagai pihak yang terlibat — kalau saya, saya akan bereksperimen dengan ide seperti ini, hasilnya juga bisa ditafsirkan seperti ini, untuk mendapatkan kesimpulan yang jelas ada kekurangan di bagian ini, dan kalau berikutnya merencanakan eksperimen seperti ini, bukankah kita bisa sampai pada kesimpulan yang lebih jelas, dan seterusnya — seharusnya hal-hal yang ingin ditanyakan akan muncul dengan sendirinya satu demi satu.

Saya menyebut ini "mendengarkan secara aktif". Perkataan orang lain baru akan melekat pada diri kita jika didengarkan secara aktif. Jika hanya berusaha menghafal atau menyerap isi yang disampaikan begitu saja, justru pengetahuan itu tidak akan menjadi milik kita.

"Mendengarkan secara aktif" berarti menempatkan isi yang disampaikan ke dalam sistem pengetahuan kita yang sudah ada selama ini, dan untuk menempatkannya, tentu disertai kegiatan terus memeriksa dan mencocokkan sistem pengetahuan kita sendiri sambil mendengarkan. Wajar bila timbul gesekan antara isi yang masuk dari luar dengan kotak pengetahuan kita yang sudah ada, dan gesekan itulah yang seharusnya menjadi kekuatan yang mendorong munculnya pertanyaan.`,
    },

    // ── 問題9 (4)：情報の汚染 ──
    "9-4": {
      yomi: `{企業|きぎょう}Aと{企業|きぎょう}Bがあり、ある{契約|けいやく}をそのどちらと{取|と}り{交|か}わすべきか{考|かんが}えるときに、A{社|しゃ}は{資本金|しほんきん}1000{万円|まんえん}、B{社|しゃ}は{資本金|しほんきん}1{億円|おくえん}であるという{情報|じょうほう}は、おそらく{重要|じゅうよう}な{情報|じょうほう}の{一|ひと}つであると{想定|そうてい}されるが、すべてではない。{従業員数|じゅうぎょういんすう}、{年商|ねんしょう}（{注|ちゅう}）、{営業|えいぎょう}{継続|けいぞく}{年数|ねんすう}、{支社数|ししゃすう}、{支店数|してんすう}、などなどのうちから、{意思|いし}{決定者|けっていしゃ}が、{意思|いし}{決定|けってい}の{方針|ほうしん}に{基|もと}づいて{重要|じゅうよう}な{情報|じょうほう}を{取捨|しゅしゃ}{選択|せんたく}しなければならないだろう。そのとき、ことさらにいくつかの{情報|じょうほう}に{力点|りきてん}を{置|お}く{報告書|ほうこくしょ}があげられたときに、{意思|いし}{決定者|けっていしゃ}（{経営者|けいえいしゃ}）はそこに{存在|そんざい}する「{意図|いと}」を{充分|じゅうぶん}に{嗅|か}ぎ{取|と}らなくてはならない。つまり、{汚染|おせん}されている{可能性|かのうせい}があるということである。ここで、{報告|ほうこく}された{情報|じょうほう}がすべて{確実|かくじつ}な{事実|じじつ}であったとしても{汚染|おせん}は{生|しょう}じている{可能性|かのうせい}があるという{点|てん}に{注意|ちゅうい}が{必要|ひつよう}である。

したがって、{情報|じょうほう}{汚染|おせん}とは、ある{情報|じょうほう}に、{本来|ほんらい}{想定|そうてい}しているもの{以外|いがい}の{何|なに}かが{付随|ふずい}していて、それによってその{情報|じょうほう}の{理解|りかい}が{歪|ゆが}むことをいう。その{何|なに}かとは、その{情報|じょうほう}をもたらした{側|がわ}の{意図|いと}である。この{世界|せかい}に「データのみで{構成|こうせい}されていて、そこに{意図|いと}の{混入|こんにゅう}が{認|みと}められない」という{意味|いみ}での{無色|むしょく}{透明|とうめい}な{情報|じょうほう}など{存在|そんざい}しない。どのような{情報|じょうほう}であっても、{意図|いと}という{色|いろ}で{染|そ}められている。そして、{重要|じゅうよう}なのはそれが{必|かなら}ずしも{汚染|おせん}ではないという{点|てん}である。{意図|いと}が{混入|こんにゅう}するのは{当然|とうぜん}のことであり、すべての{情報|じょうほう}には{意図|いと}が{混入|こんにゅう}しているのであるから、それだけでもってそれを{汚染|おせん}とまでは{呼|よ}べない。それが{汚染|おせん}となるのは、その{情報|じょうほう}に{含|ふく}まれる「{意図|いと}」によって、その{情報|じょうほう}の{本質|ほんしつ}{部分|ぶぶん}である「データ」の{理解|りかい}が{歪|ゆが}められるからである。

（{注|ちゅう}）{年商|ねんしょう}：1{年間|ねんかん}の{売|う}り{上|あ}げ{額|がく}`,
      arti: `Misalkan ada Perusahaan A dan Perusahaan B, dan kita sedang memikirkan dengan yang mana sebaiknya suatu kontrak dibuat. Informasi bahwa Perusahaan A bermodal 10 juta yen dan Perusahaan B bermodal 100 juta yen barangkali diasumsikan sebagai salah satu informasi penting, tetapi bukan segalanya. Dari jumlah karyawan, omzet tahunan (catatan), lama usaha berjalan, jumlah kantor cabang, jumlah toko cabang, dan sebagainya, pengambil keputusan harus memilah dan memilih informasi penting berdasarkan kebijakan pengambilan keputusannya. Saat itu, ketika diajukan laporan yang secara sengaja menekankan beberapa informasi tertentu, pengambil keputusan (pimpinan perusahaan) harus benar-benar mengendus "niat" yang ada di situ. Artinya, ada kemungkinan informasi itu tercemar. Di sini perlu diperhatikan bahwa sekalipun semua informasi yang dilaporkan adalah fakta yang pasti, pencemaran tetap mungkin terjadi.

Dengan demikian, pencemaran informasi berarti ada sesuatu selain yang semestinya diasumsikan yang menempel pada suatu informasi, sehingga pemahaman atas informasi itu menjadi terdistorsi. Sesuatu itu adalah niat pihak yang membawa informasi tersebut. Di dunia ini tidak ada informasi yang tak berwarna dan transparan dalam arti "hanya tersusun dari data dan tidak ada campuran niat di dalamnya". Informasi apa pun pasti diwarnai oleh warna yang bernama niat. Dan yang penting, hal itu belum tentu merupakan pencemaran. Wajar jika niat tercampur, dan karena semua informasi mengandung campuran niat, hanya dengan itu saja kita tidak bisa menyebutnya pencemaran. Informasi menjadi tercemar karena "niat" yang terkandung di dalamnya mendistorsi pemahaman atas "data", yaitu bagian hakiki dari informasi itu.

(Catatan) 年商: jumlah penjualan selama 1 tahun`,
    },

    // ── 問題10：森林ボランティアと森林維持論 ──
    "10": {
      yomi: `{以下|いか}は、{森林|しんりん}を{守|まも}るボランティア{活動|かつどう}をしている{人|ひと}が{書|か}いた{文章|ぶんしょう}である。

{世界的|せかいてき}に{森林|しんりん}や{自然|しぜん}の{維持|いじ}、{復元|ふくげん}に{対|たい}する{関心|かんしん}が{高|たか}まってきたとき、この{気運|きうん}（{注|ちゅう}1）を{支|ささ}えた{初期|しょき}の{理論|りろん}は、{人間|にんげん}{中心|ちゅうしん}{主義的|しゅぎてき}な{森林|しんりん}・{自然|しぜん}{維持論|いじろん}、つまり{人間|にんげん}の{生存|せいぞん}や{未来|みらい}にとって{森林|しんりん}や{自然|しぜん}の{維持|いじ}は{不可欠|ふかけつ}であるという{理論|りろん}であった。いわばそれは、{人間|にんげん}のための{森林|しんりん}・{自然|しぜん}{維持論|いじろん}であった。ところが、この{考|かんが}え{方|かた}は、たちまち{暗礁|あんしょう}に{乗|の}り{上|あ}げる（{注|ちゅう}2）。

{第一|だいいち}に、{人間|にんげん}のための{森林|しんりん}・{自然|しぜん}{維持論|いじろん}であるかぎり、{人間|にんげん}のための{森林|しんりん}・{自然|しぜん}の{開発論|かいはつろん}を{否定|ひてい}できなくなる。なぜなら、どちらも「{人間|にんげん}のための」という{共通|きょうつう}の{基盤|きばん}の{上|うえ}にたっている{以上|いじょう}、その{違|ちが}いは{価値観|かちかん}の{違|ちが}いにすぎず、{人間|にんげん}の{価値観|かちかん}を{統一|とういつ}することなどできないばかりでなく、すべきでもないからである。

{第二|だいに}に、「{人間|にんげん}のため」といっても、その{内容|ないよう}はさまざまである。{農山村|のうさんそん}に{暮|く}らす{人|ひと}びとと{都市|とし}の{市民|しみん}とでは、その{感|かん}じ{方|かた}は{同|おな}じではないし、{例|たと}えば{同|おな}じ{山村|さんそん}に{暮|く}らす{者|もの}でも、{林業|りんぎょう}{経営|けいえい}をしている{者|もの}とそうでない{者|もの}とでは、{考|かんが}え{方|かた}が{異|こと}なってくる。{人|ひと}と{森|もり}の{関係|かんけい}は{多様|たよう}である{以上|いじょう}、どうすることが{人間|にんげん}のための{森林|しんりん}・{自然|しぜん}の{維持|いじ}なのかと{問|と}われれば、その{答|こた}えはさまざまである。

{第三|だいさん}に、「{人間|にんげん}のための」という{発想|はっそう}にたつかぎり、「{人間|にんげん}のためにならない」{自然|しぜん}は{破壊|はかい}しても{良|よ}いということになりかねない。

こうした{問題点|もんだいてん}があったために、「{人間|にんげん}のための」{論|ろん}は、つまり{人間|にんげん}{中心的|ちゅうしんてき}な{森林|しんりん}・{自然|しぜん}{維持論|いじろん}は、たちまち{破綻|はたん}してしまった。{自然|しぜん}{保護|ほご}{思想|しそう}の{流|なが}れをみるなら、それに{代|か}わって{生|う}まれた{理論|りろん}は、{自然|しぜん}{中心|ちゅうしん}{主義的|しゅぎてき}な{考|かんが}え{方|かた}であった。それは、{人間|にんげん}のためになろうとも、ならなかったとしても、{自然|しぜん}はそれ{自身|じしん}のうちに{生存権|せいぞんけん}をもっており、その{生存権|せいぞんけん}は{保障|ほしょう}されなければならないというものであった。

ところが、この{考|かんが}え{方|かた}にも{問題点|もんだいてん}があった。なぜならこの{理論|りろん}では、{原生林|げんせいりん}や{原生的|げんせいてき}な{自然|しぜん}を{維持|いじ}する{理論|りろん}として{有効|ゆうこう}でも、たとえば{日本|にほん}のような、{長|なが}い{歴史|れきし}のなかで{自然|しぜん}と{人間|にんげん}とが{相互|そうご}に{影響|えいきょう}を{与|あた}えながら、それぞれが{暮|く}らしてきた{地域|ちいき}の{森林|しんりん}・{自然|しぜん}の{問題|もんだい}をよく{説明|せつめい}できないからである。

{一例|いちれい}をあげれば、かつて{農山村|のうさんそん}の{人|ひと}びとは、{自分|じぶん}たちの{暮|く}らしを{守|まも}るために、{人家|じんか}の{近|ちか}くに{里山|さとやま}{天然林|てんねんりん}をつくりだした。それは、{徹底的|てっていてき}に{人間|にんげん}の{手|て}を{加|くわ}えた{天然林|てんねんりん}である。（{中略|ちゅうりゃく}）

{森林|しんりん}ボランティアとは、{自発的|じはつてき}に{森|もり}の{中|なか}で{仕事|しごと}をする{人|ひと}びとである。そうである{以上|いじょう}、{私|わたし}たちは、{人間|にんげん}{中心|ちゅうしん}{主義的|しゅぎてき}な{立場|たちば}にたつことも、{自然|しぜん}{中心的|ちゅうしんてき}な{立場|たちば}にたつこともできない。

とすれば、どうすればよいのだろうか。この{問|と}いに{対|たい}して、{私|わたし}たちは、{森林|しんりん}・{自然|しぜん}と{人間|にんげん}の{関係|かんけい}を{持続的|じぞくてき}に{維持|いじ}していくことこそが{重要|じゅうよう}だと{考|かんが}える。{単純|たんじゅん}に{人間|にんげん}の{未来|みらい}を{守|まも}ることでも、{森|もり}を{守|まも}ることでもない。{森林|しんりん}と{人間|にんげん}の{関係|かんけい}を{維持|いじ}することによって、{森|もり}と{人|ひと}とが{相互的|そうごてき}な{依存|いそん}{関係|かんけい}をもっている{日本|にほん}の{森|もり}と{人|ひと}の{営|いとな}みを{守|まも}っていくことである。

（{注|ちゅう}1）{気運|きうん}：ここでは、{意識|いしき}の{高|たか}まり
（{注|ちゅう}2）{暗礁|あんしょう}に{乗|の}り{上|あ}げる：ここでは、{進|すす}められなくなる`,
      arti: `Berikut ini adalah tulisan seseorang yang melakukan kegiatan relawan untuk menjaga hutan.

Ketika perhatian dunia terhadap pelestarian dan pemulihan hutan serta alam mulai meningkat, teori awal yang menopang gelombang kesadaran (catatan 1) ini adalah teori pelestarian hutan dan alam yang berpusat pada manusia, yaitu teori bahwa pelestarian hutan dan alam sangat diperlukan bagi kelangsungan hidup dan masa depan manusia. Bisa dibilang, itu adalah teori pelestarian hutan dan alam demi manusia. Namun, cara berpikir ini segera kandas (catatan 2).

Pertama, selama itu adalah teori pelestarian hutan dan alam demi manusia, teori itu tidak bisa menolak teori pengembangan (eksploitasi) hutan dan alam demi manusia. Sebab, karena keduanya berdiri di atas dasar yang sama, yaitu "demi manusia", perbedaannya hanyalah perbedaan nilai, dan nilai-nilai manusia bukan hanya tidak mungkin diseragamkan, tetapi juga tidak seharusnya diseragamkan.

Kedua, meskipun dikatakan "demi manusia", isinya bermacam-macam. Cara merasakan orang yang tinggal di desa pertanian dan pegunungan berbeda dengan warga kota, dan misalnya, bahkan di antara orang yang tinggal di desa pegunungan yang sama pun, cara berpikir orang yang mengelola usaha kehutanan dan yang tidak akan berbeda. Karena hubungan manusia dengan hutan beragam, jika ditanya tindakan apa yang merupakan pelestarian hutan dan alam demi manusia, jawabannya pun bermacam-macam.

Ketiga, selama berpijak pada gagasan "demi manusia", bisa-bisa muncul anggapan bahwa alam yang "tidak berguna bagi manusia" boleh dirusak.

Karena adanya masalah-masalah tersebut, teori "demi manusia", yaitu teori pelestarian hutan dan alam yang berpusat pada manusia, segera gagal. Jika melihat arus pemikiran perlindungan alam, teori yang lahir menggantikannya adalah cara berpikir yang berpusat pada alam. Yaitu, entah berguna bagi manusia atau tidak, alam memiliki hak hidup di dalam dirinya sendiri, dan hak hidup itu harus dijamin.

Akan tetapi, cara berpikir ini pun bermasalah. Sebab, meskipun teori ini efektif sebagai teori untuk melestarikan hutan purba dan alam asli, teori ini tidak bisa menjelaskan dengan baik masalah hutan dan alam di wilayah seperti Jepang, di mana selama sejarah panjang alam dan manusia hidup sambil saling memengaruhi.

Sebagai contoh, dahulu orang-orang di desa pertanian dan pegunungan menciptakan hutan alami satoyama di dekat permukiman untuk melindungi kehidupan mereka. Itu adalah hutan alami yang benar-benar diolah oleh tangan manusia. (dihilangkan)

Relawan hutan adalah orang-orang yang bekerja di dalam hutan atas kemauan sendiri. Karena demikian, kami tidak bisa berdiri di posisi yang berpusat pada manusia, maupun di posisi yang berpusat pada alam.

Jika begitu, apa yang sebaiknya dilakukan? Terhadap pertanyaan ini, kami berpendapat bahwa yang terpenting adalah terus mempertahankan hubungan antara hutan/alam dan manusia secara berkelanjutan. Bukan sekadar menjaga masa depan manusia, juga bukan sekadar menjaga hutan. Melainkan, dengan mempertahankan hubungan antara hutan dan manusia, menjaga kehidupan hutan dan manusia Jepang, di mana hutan dan manusia memiliki hubungan saling bergantung.

(Catatan 1) 気運: di sini, meningkatnya kesadaran
(Catatan 2) 暗礁に乗り上げる: di sini, tidak bisa dilanjutkan`,
    },

    // ── 問題11：スランプ ──
    "11": {
      yomi: `【{意見|いけん} A】
{勉強|べんきょう}やスポーツなど{何|なに}かに{取|と}り{組|く}んでいる{時|とき}にスランプはつきもの（{注|ちゅう}）だ。いつもどおりしているのに、{全|まった}く{成果|せいか}が{上|あ}がらない。そんな{時間|じかん}が{続|つづ}くと、{自分|じぶん}には{能力|のうりょく}が{足|た}りないのではないか、これ{以上|いじょう}は{上達|じょうたつ}しないのではないかと{自信|じしん}を{失|うしな}ってしまう。

しかし、スランプとは{一時的|いちじてき}に{調子|ちょうし}が{悪|わる}くなっている{状態|じょうたい}に{過|す}ぎない。{誰|だれ}にでも{調子|ちょうし}の{良|よ}い{時|とき}と{悪|わる}い{時|とき}があり、それは{波|なみ}のようにやってくる。{悪|わる}い{時|とき}にはそれを{乗|の}り{越|こ}えようともがくのではなく、{波|なみ}に{身|み}を{任|まか}せるようにするといい。{現状|げんじょう}をすなおに{受|う}け{止|と}め、これまでと{同|おな}じことをやり{続|つづ}けるのだ。そうして{自然|しぜん}に{波|なみ}を{乗|の}り{越|こ}えれば、またやる{気|き}も{自信|じしん}も{戻|もど}ってくる。そうすれば、{自然|しぜん}に{次|つぎ}にやるべきことも{見|み}えてくるものだ。

（{注|ちゅう}）つきもの：{当然|とうぜん}あるもの

【{意見|いけん} B】
スランプの{状態|じょうたい}になると、{調子|ちょうし}が{良|よ}かった{過去|かこ}と{比|くら}べてしまいます。だから、その{差|さ}にショックを{受|う}けてしまって、{自信|じしん}を{無|な}くしてしまうわけですね。{調子|ちょうし}の{波|なみ}があることは{普通|ふつう}なので、{良|よ}い{時|とき}と{比|くら}べるのは{止|や}めましょう。

それよりも、{今|いま}に{集中|しゅうちゅう}することの{方|ほう}が{大切|たいせつ}です。{今|いま}の{自分|じぶん}を{受|う}け{入|い}れて、「これからどうするべきか」ということを{考|かんが}えてください。こういう{考|かんが}え{方|かた}ができれば、{前向|まえむ}きに{物事|ものごと}を{捉|とら}えることができるはずです。

いつまでも{過去|かこ}に{捉|とら}われている{人|ひと}は、{後悔|こうかい}や{焦|あせ}りといった{感情|かんじょう}しか{出|で}てきません。しかし、{今|いま}を{見|み}ている{人|ひと}だと、「どうすればいいか」という{生産的|せいさんてき}な{考|かんが}え{方|かた}ができるわけですね。`,
      arti: `【Pendapat A】
Saat menekuni sesuatu seperti belajar atau olahraga, slump (kemerosotan performa) adalah hal yang pasti menyertai (catatan). Padahal kita melakukan seperti biasa, tetapi hasilnya sama sekali tidak meningkat. Jika masa seperti itu berlanjut, kita kehilangan kepercayaan diri, berpikir jangan-jangan kemampuan kita kurang, jangan-jangan kita tidak akan lebih mahir lagi.

Namun, slump hanyalah keadaan di mana kondisi kita sementara sedang buruk. Siapa pun punya masa ketika kondisinya baik dan buruk, dan itu datang seperti gelombang. Saat kondisi buruk, sebaiknya bukan meronta-ronta berusaha mengatasinya, melainkan menyerahkan diri pada gelombang. Terimalah keadaan sekarang dengan lapang, dan teruslah melakukan hal yang sama seperti selama ini. Jika gelombang itu terlewati dengan sendirinya, semangat dan kepercayaan diri akan kembali. Dengan begitu, apa yang harus dilakukan berikutnya pun akan terlihat dengan sendirinya.

(Catatan) つきもの: sesuatu yang memang pasti ada

【Pendapat B】
Ketika mengalami slump, kita cenderung membandingkan diri dengan masa lalu ketika kondisi kita baik. Karena itu, kita terkejut oleh perbedaannya dan kehilangan kepercayaan diri. Adanya pasang surut kondisi itu hal yang biasa, jadi berhentilah membandingkan dengan masa-masa baik.

Yang lebih penting adalah berkonsentrasi pada saat ini. Terimalah diri Anda yang sekarang, lalu pikirkan "apa yang harus saya lakukan mulai sekarang". Jika bisa berpikir seperti ini, Anda pasti bisa memandang segala sesuatu secara positif.

Orang yang terus terpaku pada masa lalu hanya akan memunculkan perasaan seperti penyesalan dan kegelisahan. Namun, orang yang melihat saat ini bisa berpikir secara produktif, yaitu "apa yang sebaiknya dilakukan".`,
    },

    // ── 問題12：個性とありのままの自分 ──
    "12": {
      yomi: `{以下|いか}は、{十代|じゅうだい}の{若者|わかもの}に{向|む}けて{書|か}かれた{文章|ぶんしょう}である。

だれでも、{自分|じぶん}が{自分|じぶん}であることを{望|のぞ}み、{個性的|こせいてき}であろうと{願|ねが}っている。そしてその{一方|いっぽう}では、{自分|じぶん}が{他|ほか}のみんなと{違|ちが}った、{自分|じぶん}であることを{恐|おそ}れている。

{本当|ほんとう}は、「{個性的|こせいてき}」であろうと{思|おも}って、{個性的|こせいてき}になれるものでもない。それはたいてい、「{個性的|こせいてき}」といわれる{一|ひと}つの{型|かた}に、{自分|じぶん}をあてはめていることだったりする。{人間|にんげん}にとっては、「{個性的|こせいてき}であれ」などと{言|い}われても、どうしてよいかわからないものであって、「{個性的|こせいてき}」とよばれる{型|かた}を{持|も}ったほうが{楽|らく}なのだ。しかしそれは、{本当|ほんとう}に{個性的|こせいてき}なわけではない。

それでも、{青年期|せいねんき}に{向|む}けて、{個性的|こせいてき}であろうと{試|こころ}みることは、よいことだ。かりにそれが、{一|ひと}つの{型|かた}にすぎなくても、あるいは、{個性的|こせいてき}であろうとして{挫折|ざせつ}したり、{個性的|こせいてき}であることから{逃避|とうひ}することも{含|ふく}めて、{自分|じぶん}にとって{個性|こせい}とはと、{考|かんが}えることはよいことだ。それは、{自分|じぶん}が{自分|じぶん}であることの、あかしでもある。

そこでは、ときに{悩|なや}むことがあったり、どうしたら{個性的|こせいてき}な{人間|にんげん}になれるかと、{模索|もさく}することもあるかもしれない。それはじつは、「{個性的|こせいてき}」であること{以上|いじょう}に、{自分|じぶん}というものを{意識|いしき}していく、{一|ひと}つの{過程|かてい}である。そうした{意味|いみ}では、「{個性的|こせいてき}」であるかどうかなんて、{本当|ほんとう}はたいしたことではなくて、{自分|じぶん}というものが{確立|かくりつ}していくことが、{大事|だいじ}なこととも{言|い}える。

そしてじつは、{個性|こせい}というものは、{人間|にんげん}のひとりひとりに{備|そな}わったもので、その{個性|こせい}がありのままに{出|で}ていることが、{本当|ほんとう}の{意味|いみ}で{個性的|こせいてき}である。むしろ、{本当|ほんとう}の{自分|じぶん}が{出|だ}せないから、{没個性的|ぼつこせいてき}にもなるのだ。

もちろん、{人間|にんげん}はまわりの{社会|しゃかい}を{気|き}になるものであって、{自分|じぶん}をよそおうことも{含|ふく}めてしか、{社会|しゃかい}のなかで{存在|そんざい}できない。{無理|むり}につっぱって、{自分|じぶん}のよそおいを{捨|す}てようとしても、{捨|す}て{切|き}れるものではない。そうした、{社会|しゃかい}とのかかわりも{含|ふく}めて、{自分|じぶん}というものはある。

たいていの{場合|ばあい}、つっぱったり、いじけたりしていては、{自分|じぶん}の{個性|こせい}は{発揮|はっき}できない。つっぱるまいとするのが{一種|いっしゅ}のつっぱりだったり、いじけまいとしてそのことにいじけたり、なんてことまで{問題|もんだい}にしだすと、ちょっと{言葉|ことば}の{遊|あそ}びみたいになるが、ま、そうしたことまで{含|ふく}めて、{気楽|きらく}に{自分|じぶん}であるようにしなくては、{本当|ほんとう}の{意味|いみ}で{個性的|こせいてき}になれないものだ。

そして、ありのままの{自分|じぶん}を{出|だ}すことへの{不安|ふあん}が、「{個性的|こせいてき}」を{一|ひと}つの{型|かた}にしたり、あるいはそうした{型|かた}から{逃|に}げる{道|みち}へ{向|む}かわせたりもする。

それでも{結局|けっきょく}、{自分|じぶん}とはありのままの{自分|じぶん}しかない。それを{自覚|じかく}したとき、きみは{個性的|こせいてき}なきみになる。`,
      arti: `Berikut ini adalah tulisan yang ditujukan kepada anak muda berusia belasan tahun.

Siapa pun ingin menjadi dirinya sendiri dan berharap bisa menjadi pribadi yang unik. Namun di sisi lain, mereka juga takut menjadi diri sendiri yang berbeda dari orang lain.

Sebenarnya, kita tidak bisa menjadi unik hanya dengan berniat menjadi "unik". Biasanya, hal itu justru berarti mencocokkan diri ke dalam satu pola yang disebut "unik". Bagi manusia, meskipun disuruh "jadilah unik", kita tidak tahu harus berbuat apa, sehingga memiliki pola yang disebut "unik" terasa lebih mudah. Namun, itu bukan berarti benar-benar unik.

Meski begitu, menjelang masa remaja, mencoba menjadi pribadi yang unik itu hal yang baik. Seandainya itu hanya sebuah pola pun, atau termasuk gagal saat mencoba menjadi unik, atau melarikan diri dari menjadi unik, memikirkan "apa arti kepribadian bagi diriku" itu hal yang baik. Itu juga merupakan bukti bahwa kita adalah diri kita sendiri.

Di situ, kadang kita bimbang, atau mungkin juga meraba-raba bagaimana caranya menjadi manusia yang unik. Sebenarnya, itu adalah sebuah proses untuk menyadari diri sendiri, lebih dari sekadar menjadi "unik". Dalam arti itu, bisa dikatakan bahwa unik atau tidaknya seseorang sebenarnya bukan hal yang penting; yang penting adalah terbentuknya jati diri.

Dan sebenarnya, kepribadian adalah sesuatu yang dimiliki oleh setiap manusia, dan ketika kepribadian itu keluar apa adanya, itulah unik dalam arti yang sesungguhnya. Justru karena tidak bisa menampilkan diri yang sesungguhnya, seseorang menjadi tidak berkepribadian.

Tentu saja manusia peduli pada masyarakat di sekitarnya, dan hanya bisa ada di dalam masyarakat dengan menyertakan juga upaya menghias (berpura-pura dengan) dirinya. Meskipun memaksakan diri bersikap keras dan mencoba membuang pura-pura itu, kita tidak akan bisa membuangnya sepenuhnya. Diri kita ada, termasuk dengan keterkaitannya dengan masyarakat seperti itu.

Dalam banyak kasus, jika kita bersikap keras kepala atau merajuk, kepribadian kita tidak bisa keluar. Kalau sampai mempermasalahkan bahwa berusaha untuk tidak keras kepala pun adalah semacam sikap keras kepala, atau berusaha tidak merajuk malah merajuk karena hal itu, jadinya agak seperti permainan kata, tetapi ya, termasuk hal-hal seperti itu, jika kita tidak berusaha menjadi diri sendiri dengan santai, kita tidak bisa menjadi unik dalam arti yang sesungguhnya.

Dan kecemasan untuk menampilkan diri apa adanya itulah yang kadang membuat "unik" menjadi sebuah pola, atau malah mengarahkan kita ke jalan untuk lari dari pola semacam itu.

Meski begitu, pada akhirnya, diri kita tidak lain adalah diri kita apa adanya. Ketika kamu menyadari hal itu, kamu akan menjadi dirimu yang unik.`,
    },

    // ── 問題13：星川大学 グローバル研究活動助成 ──
    "13": {
      yomi: `{星川|ほしかわ}{大学|だいがく}
2022{年度|ねんど}「グローバル{研究|けんきゅう}{活動|かつどう}{助成|じょせい}」{募集|ぼしゅう}{要項|ようこう}

1．{応募|おうぼ}{資格|しかく}（{以下|いか}の{条件|じょうけん}を{満|み}たす{者|もの}）
2022{年度|ねんど}に{星川|ほしかわ}{大学|だいがく}の{大学院|だいがくいん}に{在学|ざいがく}していて、2021{年度|ねんど}に{本|ほん}{助成|じょせい}に{採択|さいたく}されていない{者|もの}

2．{対象|たいしょう}となる{研究|けんきゅう}{活動|かつどう}（{以下|いか}の①または②に{当|あ}てはまる{活動|かつどう}）
①{渡航|とこう}{期間|きかん}{10日間|とおかかん}{以上|いじょう}で、{海外|かいがい}において{調査|ちょうさ}を{行|おこな}う
②{海外|かいがい}での{研究|けんきゅう}{会議|かいぎ}、シンポジウム{等|とう}で{研究|けんきゅう}{発表|はっぴょう}を{行|おこな}う（{渡航|とこう}{期間|きかん}は{問|と}わない）

3．{対象|たいしょう}となる{研究|けんきゅう}{活動|かつどう}の{実施|じっし}{期間|きかん}
①②ともに2022{年|ねん}{8月|はちがつ}{1日|ついたち}から2023{年|ねん}{3月|さんがつ}{31日|さんじゅういちにち}までに{行|おこな}うもの

4．{助成|じょせい}{金額|きんがく}{等|とう}
{一人当|ひとりあ}たりの{助成|じょせい}{金額|きんがく}の{上限|じょうげん}は20{万円|まんえん}とします。{応募|おうぼ}は{一人|ひとり}1{件|けん}のみ{可能|かのう}です。{助成|じょせい}{対象|たいしょう}の{費目|ひもく}の{詳細|しょうさい}は{別紙|べっし}を{参照|さんしょう}してください。

5．{選考|せんこう}　{書類|しょるい}による{選考|せんこう}

6．スケジュール
{募集|ぼしゅう}{期間|きかん}　2022{年|ねん}{5月|ごがつ}{10日|とおか}（{火|か}）〜{6月|ろくがつ}{10日|とおか}（{金|きん}）
{結果|けっか}{通知|つうち}　2022{年|ねん}{7月|しちがつ}{中旬|ちゅうじゅん}

7．{応募|おうぼ}{手続|てつづ}き　{以下|いか}のA〜Cを{研究|けんきゅう}{推進課|すいしんか}{窓口|まどぐち}へまとめて{提出|ていしゅつ}してください。

A {申請書|しんせいしょ}（{様式|ようしき}1）
B {推薦書|すいせんしょ} …{指導|しどう}{教員|きょういん}が{作成|さくせい}したものを{学生|がくせい}{本人|ほんにん}が{提出|ていしゅつ}すること。{作成|さくせい}{依頼|いらい}は{余裕|よゆう}をもってするようにしてください。
C {発表|はっぴょう}{申|もう}し{込|こ}みの{写|うつ}し（②の{場合|ばあい}のみ） …{申|もう}し{込|こ}みの{開始|かいし}が{募集|ぼしゅう}{期間後|きかんご}になる{場合|ばあい}は、{準備|じゅんび}ができ{次第|しだい}{提出|ていしゅつ}すること。

・AとBの{記入|きにゅう}{用紙|ようし}が{4月|しがつ}{26日|にじゅうろくにち}から{募集|ぼしゅう}{期間|きかん}の{最終日|さいしゅうび}まで{研究|けんきゅう}{推進課|すいしんか}{窓口|まどぐち}で{配布|はいふ}します。{研究|けんきゅう}{推進課|すいしんか}のウェブページからダウンロードもできます。
・②で{発表|はっぴょう}が{確定|かくてい}していない{場合|ばあい}でも{応募|おうぼ}することができます。その{旨|むね}をAに{記入|きにゅう}のうえ、{必|かなら}ず{募集|ぼしゅう}{期間内|きかんない}にAとBを{提出|ていしゅつ}してください。また、{実際|じっさい}に{発表|はっぴょう}するかどうかが{決|き}まり{次第|しだい}、{速|すみ}やかに{連絡|れんらく}してください。

8．{採択後|さいたくご}の{注意|ちゅうい}{事項|じこう}
{報告書|ほうこくしょ}と{経費|けいひ}の{領収書|りょうしゅうしょ}を{帰国後|きこくご}2{週間|しゅうかん}{以内|いない}に{提出|ていしゅつ}してもらいます。{未提出|みていしゅつ}の{書類|しょるい}があった{場合|ばあい}は{採択|さいたく}を{取|と}り{消|け}す{可能性|かのうせい}があります。

{問|と}い{合|あ}わせ{先|さき}：{研究|けんきゅう}{推進課|すいしんか}　http://www.hoshikawa-u.ac.jp/research.html
{電話|でんわ}：400-028-2882　Eメール　graduate-research@hoshikawa.ac.jp`,
      arti: `Universitas Hoshikawa
Panduan Pendaftaran "Hibah Kegiatan Penelitian Global" Tahun Anggaran 2022

1. Syarat pendaftar (orang yang memenuhi syarat berikut)
Mahasiswa yang terdaftar di program pascasarjana Universitas Hoshikawa pada tahun anggaran 2022, dan tidak terpilih untuk hibah ini pada tahun anggaran 2021

2. Kegiatan penelitian yang dicakup (kegiatan yang termasuk ① atau ② berikut)
① Melakukan survei di luar negeri dengan masa perjalanan 10 hari atau lebih
② Melakukan presentasi penelitian di konferensi penelitian, simposium, dll. di luar negeri (lama perjalanan tidak dipersoalkan)

3. Masa pelaksanaan kegiatan penelitian yang dicakup
Baik ① maupun ②, kegiatan yang dilakukan antara 1 Agustus 2022 hingga 31 Maret 2023

4. Jumlah hibah, dll.
Batas maksimum hibah per orang adalah 200.000 yen. Setiap orang hanya boleh mendaftar 1 kali. Untuk rincian pos biaya yang dicakup hibah, lihat lampiran.

5. Seleksi: seleksi berdasarkan dokumen

6. Jadwal
Masa pendaftaran: 10 Mei (Selasa) – 10 Juni (Jumat) 2022
Pemberitahuan hasil: pertengahan Juli 2022

7. Prosedur pendaftaran: Serahkan A–C berikut sekaligus ke loket Bagian Promosi Penelitian.

A Formulir permohonan (Format 1)
B Surat rekomendasi …Surat yang dibuat oleh dosen pembimbing diserahkan oleh mahasiswa sendiri. Mintalah pembuatannya dengan waktu yang cukup longgar.
C Salinan pendaftaran presentasi (hanya untuk ②) …Jika pembukaan pendaftaran presentasi jatuh setelah masa pendaftaran hibah, serahkan segera setelah siap.

• Formulir isian A dan B dibagikan di loket Bagian Promosi Penelitian mulai 26 April sampai hari terakhir masa pendaftaran. Formulir juga bisa diunduh dari halaman web Bagian Promosi Penelitian.
• Untuk ②, Anda tetap bisa mendaftar meskipun presentasinya belum pasti. Tuliskan hal tersebut di A, lalu pastikan menyerahkan A dan B dalam masa pendaftaran. Selain itu, segera hubungi kami begitu sudah pasti apakah Anda benar-benar akan presentasi atau tidak.

8. Hal-hal yang perlu diperhatikan setelah terpilih
Laporan dan kuitansi biaya harus diserahkan dalam 2 minggu setelah kembali ke Jepang. Jika ada dokumen yang belum diserahkan, keputusan terpilih bisa dibatalkan.

Kontak: Bagian Promosi Penelitian  http://www.hoshikawa-u.ac.jp/research.html
Telepon: 400-028-2882  Surel: graduate-research@hoshikawa.ac.jp`,
    },
  },
};
