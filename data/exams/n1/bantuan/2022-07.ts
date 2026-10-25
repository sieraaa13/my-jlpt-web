import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2022
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_2207: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "【{勇敢|ゆうかん}】に{戦|たたか}う{主人公|しゅじんこう}に{子|こ}どもたちは{夢中|むちゅう}だ。",
      arti: "Anak-anak tergila-gila pada tokoh utama yang bertarung dengan 【gagah berani】.",
    },
    2: {
      yomi: "その{件|けん}について、【{忠告|ちゅうこく}】すべきかどうか{考|かんが}えている。",
      arti: "Saya sedang memikirkan apakah sebaiknya 【menasihati/memperingatkan】 soal hal itu.",
    },
    3: {
      yomi: "チームの{多|おお}くの{選手|せんしゅ}が{監督|かんとく}を【{慕|した}って】いるようだ。",
      arti: "Tampaknya banyak pemain tim yang 【mengagumi dan menyayangi】 pelatihnya.",
      optArti: ["merawat dengan penuh perhatian (いたわる)", "menghormati (敬う)", "mengagumi, menyayangi (慕う)", "melindungi, membela (庇う)"],
    },
    4: {
      yomi: "{建物|たてもの}の{入|い}り{口|ぐち}は、{夜間|やかん}は【{施錠|せじょう}】されている。",
      arti: "Pintu masuk gedung 【dikunci】 pada malam hari.",
    },
    5: {
      yomi: "{対策|たいさく}の{結果|けっか}、{地盤|じばん}の【{沈下|ちんか}】は{食|く}い{止|と}められている。",
      arti: "Berkat langkah penanganan, 【penurunan (amblesnya)】 tanah berhasil dihentikan.",
    },
    6: {
      yomi: "{激|はげ}しい{雪|ゆき}に【{阻|はば}まれて】{前|まえ}に{進|すす}めない。",
      arti: "Saya 【terhalang】 salju lebat sehingga tidak bisa maju.",
      optArti: ["dikelilingi (囲まれて)", "dibelit, diganggu (絡まれて)", "ditolak (拒まれて)", "dihalangi, dirintangi (阻まれて)"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{子|こ}どもたちは（　）リズムに{合|あ}わせ、{手|て}をたたいたり、{踊|おど}ったりした。",
      arti: "Anak-anak bertepuk tangan dan menari mengikuti irama yang (…).",
      optYomi: ["{手軽|てがる}な", "{軽率|けいそつ}な", "{気軽|きがる}な", "{軽快|けいかい}な"],
      optArti: ["praktis, mudah dilakukan", "ceroboh, gegabah", "santai, tanpa sungkan", "ringan dan riang (gerak, irama)"],
    },
    8: {
      yomi: "{予習|よしゅう}、{授業|じゅぎょう}、{復習|ふくしゅう}という（　）を{繰|く}り{返|かえ}すことで、{知識|ちしき}の{定着|ていちゃく}を{図|はか}る。",
      arti: "Dengan mengulang (…) berupa persiapan, pelajaran di kelas, dan pengulangan materi, kita mengupayakan agar pengetahuan melekat.",
      optArti: ["pitch, laju (langkah/nada)", "siklus", "shift, pergeseran (giliran kerja)", "pace, kecepatan"],
    },
    9: {
      yomi: "{当事者間|とうじしゃかん}では{紛争|ふんそう}が{解決|かいけつ}できず、{第三者|だいさんしゃ}が（　）に{入|はい}った。",
      arti: "Sengketa tidak bisa diselesaikan di antara pihak-pihak yang bersangkutan, sehingga pihak ketiga masuk sebagai (…).",
      optYomi: ["{代行|だいこう}", "{仲裁|ちゅうさい}", "{干渉|かんしょう}", "{媒介|ばいかい}"],
      optArti: ["mewakili (menjalankan tugas orang lain)", "penengah, arbitrase", "campur tangan", "perantara (penularan, media)"],
    },
    10: {
      yomi: "そのいたずらは{息子|むすこ}の（　）に{違|ちが}いない。",
      arti: "Keisengan itu pasti (…) anak laki-laki saya.",
      optYomi: [null, null, "{腕|うで}まえ", "{扱|あつか}い"],
      optArti: ["ulah, perbuatan (biasanya buruk)", "gelagat, sikap (yang tampak)", "keterampilan, kemahiran", "perlakuan, penanganan"],
    },
    11: {
      yomi: "{完成|かんせい}{間際|まぎわ}のマンションに{欠陥|けっかん}があることが（　）して、{工事|こうじ}が{中止|ちゅうし}された。",
      arti: "(…) bahwa apartemen yang hampir selesai itu memiliki cacat, sehingga pembangunannya dihentikan.",
      optYomi: ["{発覚|はっかく}", "{派生|はせい}", "{波及|はきゅう}", "{露出|ろしゅつ}"],
      optArti: ["terbongkar, ketahuan (hal buruk)", "turunan, timbul dari", "merambat, berimbas luas", "terpapar, terbuka (terlihat)"],
    },
    12: {
      yomi: "この{温泉|おんせん}には{肌|はだ}にいい{成分|せいぶん}が{含|ふく}まれているので、{入浴後|にゅうよくご}は{肌|はだ}が（　）になります。",
      arti: "Mata air panas ini mengandung zat yang baik untuk kulit, jadi setelah berendam kulit menjadi (…).",
      optArti: ["kasar, berpasir", "lengket, berlendir", "halus licin", "kasar berbenjol, keras"],
    },
    13: {
      yomi: "{議論|ぎろん}が（　）、{話|はな}し{合|あ}いは{平行線|へいこうせん}をたどった。",
      arti: "Diskusinya (…), sehingga pembicaraan tidak menemukan titik temu (berjalan sejajar).",
      optYomi: ["{掛|か}け{合|あ}わなくて", "{張|は}り{合|あ}わなくて", "かみ{合|あ}わなくて", "{釣|つ}り{合|あ}わなくて"],
      optArti: ["tidak bernegosiasi", "tidak saling bersaing", "tidak nyambung (tidak saling menanggapi)", "tidak seimbang"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{友人|ゆうじん}に【{触発|しょくはつ}されて】、{事業|じぎょう}を{始|はじ}めた。",
      arti: "【Terinspirasi/terpacu】 oleh teman, saya memulai usaha.",
      optYomi: ["{誘|さそ}われて", "{提案|ていあん}されて", "{助|たす}けられて", "{刺激|しげき}されて"],
      optArti: ["diajak", "diusulkan", "dibantu", "terstimulasi, terpacu"],
    },
    15: {
      yomi: "{彼|かれ}の{言動|げんどう}にほとんどの{人|ひと}が【{閉口|へいこう}している】。",
      arti: "Hampir semua orang 【kewalahan (tak tahan)】 dengan ucapan dan tingkah lakunya.",
      optYomi: ["{慣|な}れて", "{困|こま}って", null, null],
      optArti: ["terbiasa", "kesulitan, dibuat repot", "kecewa", "lega"],
    },
    16: {
      yomi: "{彼|かれ}は{仕事|しごと}を{辞|や}めてから、【{気|き}ままな】{生活|せいかつ}をしているようだ。",
      arti: "Sepertinya sejak berhenti bekerja, ia menjalani hidup yang 【semaunya (bebas)】.",
      optYomi: ["{質素|しっそ}な", "{退屈|たいくつ}な", null, "{自由|じゆう}な"],
      optArti: ["sederhana, bersahaja", "membosankan", "mewah", "bebas"],
    },
    17: {
      yomi: "6{時発|じはつ}の{飛行機|ひこうき}には、【{若干|じゃっかん}】{空席|くうせき}があります。",
      arti: "Pesawat yang berangkat pukul 6 masih memiliki 【sedikit (beberapa)】 kursi kosong.",
      optArti: ["masih", "cukup banyak", "beberapa", "barangkali"],
    },
    18: {
      yomi: "これは【{手分|てわ}け】したほうがいい。",
      arti: "Untuk ini sebaiknya 【dibagi-bagi pekerjaannya】.",
      optYomi: ["{分割|ぶんかつ}", "{分別|ぶんべつ}", "{分担|ぶんたん}", "{分類|ぶんるい}"],
      optArti: ["pembagian (menjadi beberapa bagian)", "pemilahan (sampah)", "pembagian tugas", "klasifikasi"],
    },
    19: {
      yomi: "{林|はやし}さんが、{残|のこ}った{仕事|しごと}を【てきぱきと】{処理|しょり}してくれた。",
      arti: "Hayashi-san menyelesaikan sisa pekerjaan dengan 【cekatan】.",
      optYomi: ["{早|はや}く{正確|せいかく}に", "{時間|じかん}をかけて{丁寧|ていねい}に", "{張|は}り{切|き}って", "{嫌|いや}がらずに"],
      optArti: ["dengan cepat dan tepat", "dengan teliti meski makan waktu", "dengan penuh semangat", "tanpa merasa enggan"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "【{結末|けつまつ}】",
      arti: "【結末】 = akhir/penyelesaian (cerita, peristiwa)",
      optYomi: [
        "{急|きゅう}な{用事|ようじ}ができたため、パーティーの{結末|けつまつ}までいられなかった。",
        "{物語|ものがたり}の{結末|けつまつ}を{知|し}りたくて、{分厚|ぶあつ}い{本|ほん}をひと{晩|ばん}で{読|よ}んでしまった。",
        "{後|あと}から{来|き}た{人|ひと}は、この{列|れつ}の{結末|けつまつ}に{並|なら}んでください。",
        "{細|ほそ}い{枝|えだ}の{結末|けつまつ}にかわいらしい{白|しろ}い{花|はな}が{咲|さ}いている。",
      ],
      optArti: [
        "Karena ada urusan mendadak, saya tidak bisa tinggal sampai 'akhir' pesta.",
        "Karena ingin tahu 'akhir' ceritanya, saya membaca habis buku tebal itu dalam semalam.",
        "Bagi yang datang belakangan, silakan antre di 'akhir' barisan ini.",
        "Bunga putih yang manis mekar di 'ujung' ranting yang kecil.",
      ],
    },
    21: {
      yomi: "【そそる】",
      arti: "【そそる】 = membangkitkan, menggugah (selera, minat, rasa ingin)",
      optYomi: [
        "この{先|さき}は{急|きゅう}なカーブなので、{注意|ちゅうい}をそそる{標識|ひょうしき}が{必要|ひつよう}だ。",
        "{先日|せんじつ}の{村田氏|むらたし}の{発言|はつげん}は、{国民|こくみん}の{対立|たいりつ}をそそるものだと{批判|ひはん}を{浴|あ}びた。",
        "{料理|りょうり}の{味|あじ}も{香|かお}りも{彩|いろど}りも{食欲|しょくよく}をそそる{要素|ようそ}だ。",
        "{救命|きゅうめい}センターの{医師|いし}は{常|つね}に{緊張|きんちょう}をそそられている。",
      ],
      optArti: [
        "Di depan ada tikungan tajam, jadi perlu rambu yang 'menggugah' perhatian.",
        "Pernyataan Tuan Murata beberapa hari lalu dikritik karena 'menggugah' pertentangan di antara rakyat.",
        "Rasa, aroma, dan warna masakan semuanya adalah unsur yang 'menggugah' selera makan.",
        "Dokter di pusat gawat darurat selalu 'digugah' ketegangan.",
      ],
    },
    22: {
      yomi: "【{遮断|しゃだん}】",
      arti: "【遮断】 = memutus, menghalangi (suara, cahaya, aliran, lalu lintas)",
      optYomi: [
        "この{部屋|へや}なら、{外部|がいぶ}の{音|おと}を{遮断|しゃだん}してピアノの{演奏|えんそう}が{録音|ろくおん}できる。",
        "{機械|きかい}の{点検|てんけん}のため、{工場|こうじょう}の{稼働|かどう}を{一時的|いちじてき}に{遮断|しゃだん}している。",
        "ダイエットを{始|はじ}めて{以来|いらい}、{大好|だいす}きな{甘|あま}い{物|もの}を{遮断|しゃだん}している。",
        "{彼女|かのじょ}から{突然|とつぜん}{交際|こうさい}を{遮断|しゃだん}すると{言|い}われて{驚|おどろ}いた。",
      ],
      optArti: [
        "Di ruangan ini, suara dari luar bisa 'diputus/diredam' sehingga permainan piano bisa direkam.",
        "Untuk pemeriksaan mesin, operasional pabrik untuk sementara 'diputus'.",
        "Sejak mulai diet, saya 'memutus' makanan manis yang sangat saya sukai.",
        "Saya kaget karena tiba-tiba ia bilang ingin 'memutus' hubungan kami.",
      ],
    },
    23: {
      yomi: "【{要請|ようせい}】",
      arti: "【要請】 = permintaan resmi, permohonan (bantuan, kerja sama)",
      optYomi: [
        "この{機械|きかい}は、{最新|さいしん}の{物|もの}で{性能|せいのう}はいいが、{電力|でんりょく}の{要請|ようせい}が{大|おお}きいのが{難点|なんてん}だ。",
        "{被災地|ひさいち}からの{要請|ようせい}で、{国|くに}から{医療|いりょう}チームが{派遣|はけん}されることになった。",
        "{今回|こんかい}の{仕事|しごと}は{特別|とくべつ}な{資格|しかく}の{要請|ようせい}はないので、どなたでも{応募|おうぼ}できます。",
        "{高級|こうきゅう}ワインを{何本|なんぼん}も{飲|の}んで、レストランから{高額|こうがく}な{要請|ようせい}があった。",
      ],
      optArti: [
        "Mesin ini model terbaru dan kinerjanya bagus, tetapi kekurangannya adalah 'permintaan resmi' listriknya besar.",
        "Atas 'permintaan resmi' dari daerah bencana, tim medis akan dikirim oleh negara.",
        "Pekerjaan kali ini tidak ada 'permintaan resmi' kualifikasi khusus, jadi siapa pun boleh melamar.",
        "Setelah minum beberapa botol anggur mahal, ada 'permintaan resmi' tagihan besar dari restoran.",
      ],
    },
    24: {
      yomi: "【ぎこちない】",
      arti: "【ぎこちない】 = kaku, canggung (gerakan, sikap, ucapan)",
      optYomi: [
        "{憧|あこが}れの{歌手|かしゅ}に{会|あ}ったとき、{緊張|きんちょう}して{動作|どうさ}がぎこちなくなってしまった。",
        "この{道|みち}は{路面|ろめん}の{状態|じょうたい}が{悪|わる}くてぎこちないので、{運転|うんてん}しにくい。",
        "{今年|ことし}は{天候|てんこう}が{悪|わる}く、{稲|いね}や{野菜|やさい}の{生育|せいいく}がぎこちないそうだ。",
        "{風邪|かぜ}でのどの{調子|ちょうし}がよくないのか、{声|こえ}がぎこちなくて{聞|き}き{取|と}りにくい。",
      ],
      optArti: [
        "Saat bertemu penyanyi idola, saya gugup sehingga gerakan saya menjadi 'kaku/canggung'.",
        "Kondisi permukaan jalan ini buruk dan 'kaku', jadi sulit untuk mengemudi.",
        "Tahun ini cuaca buruk, katanya pertumbuhan padi dan sayuran 'kaku'.",
        "Mungkin karena tenggorokannya tidak enak akibat flu, suaranya 'kaku' dan sulit didengar.",
      ],
    },
    25: {
      yomi: "【{断|だん}じて】",
      arti: "【断じて】 = sama sekali (tidak), sungguh-sungguh (tidak boleh) — tegas",
      optYomi: [
        "{彼|かれ}は{一生懸命|いっしょうけんめい}{思|おも}い{出|だ}そうとしているが、そのときのことを{断|だん}じて{覚|おぼ}えていないようだ。",
        "その{扉|とびら}はとても{重|おも}くて、どんなに{押|お}しても{断|だん}じて{開|あ}かなかった。",
        "{若|わか}いころは{体|からだ}が{丈夫|じょうぶ}で{断|だん}じて{風邪|かぜ}をひくこともなかったが、{最近|さいきん}すっかり{弱|よわ}くなった。",
        "{他人|たにん}を{差別|さべつ}したりいじめたりすることは、{断|だん}じて{許|ゆる}されない。",
      ],
      optArti: [
        "Ia berusaha keras mengingat, tetapi sepertinya 'sama sekali (tegas)' tidak ingat kejadian saat itu.",
        "Pintu itu sangat berat, sekuat apa pun didorong 'sama sekali (tegas)' tidak terbuka.",
        "Waktu muda badan saya kuat dan 'sama sekali (tegas)' tidak pernah masuk angin, tetapi akhir-akhir ini jadi lemah sekali.",
        "Mendiskriminasi atau merundung orang lain 'sama sekali' tidak bisa dibenarkan.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "このお{寺|てら}は、{釘|くぎ}などの{金属類|きんぞくるい}は（　）{使|つか}わず、{木材|もくざい}だけで{建|た}てられているそうだ。",
      arti: "Katanya kuil ini dibangun hanya dengan kayu, (…) memakai logam seperti paku.",
      optArti: ["terlalu", "sama sekali (tidak)", "kalau bisa", "bagaimanapun juga"],
    },
    27: {
      yomi: "{旅館|りょかん}の{窓|まど}から{見|み}えた{山々|やまやま}は{紅葉|こうよう}で{鮮|あざ}やかに{色|いろ}づいており、{澄|す}んだ{青空|あおぞら}（　）、なんとも{美|うつく}しかった。",
      arti: "Pegunungan yang terlihat dari jendela penginapan berwarna cerah oleh daun musim gugur, dan (…) langit biru yang jernih, sungguh sangat indah.",
      optYomi: ["を{経|へ}て", "を{基|もと}に", "と{相|あい}まって", "と{引|ひ}きかえに"],
      optArti: ["melalui, setelah melewati", "berdasarkan", "berpadu dengan, ditambah dengan", "sebagai ganti/imbalan"],
    },
    28: {
      yomi: "ふるさとの{美|うつく}しい{海|うみ}を{見|み}る（　）、この{美|うつく}しい{海|うみ}がいつまでもこのままであってほしいと{思|おも}う。",
      arti: "(…) melihat laut kampung halaman yang indah, saya berharap laut yang indah ini akan tetap seperti ini selamanya.",
      optArti: ["setiap kali (… timbul perasaan)", "entah/meskipun", "meskipun begitu", "maksudnya, karena"],
    },
    29: {
      yomi: "マラソン{大会|たいかい}から{帰|かえ}るとき、{電車|でんしゃ}はすいていたが、{一度|いちど}{座|すわ}ったら（　）{疲|つか}れていたので、ずっと{立|た}っていた。",
      arti: "Saat pulang dari lomba maraton, keretanya sepi, tetapi saya lelah (…) kalau sekali duduk, jadi saya terus berdiri.",
      optYomi: ["{立|た}ち{上|あ}がってはいけないなんて", "{立|た}ち{上|あ}がれそうにないなんて", "{立|た}ち{上|あ}がってはいけないぐらい", "{立|た}ち{上|あ}がれそうにないぐらい"],
      optArti: ["(masa) tidak boleh berdiri", "(masa) sepertinya tidak bisa berdiri", "sampai-sampai tidak boleh berdiri", "sampai-sampai sepertinya tak akan bisa berdiri lagi"],
    },
    30: {
      yomi: "{健康的|けんこうてき}な{生活|せいかつ}を{送|おく}るためには{睡眠|すいみん}{時間|じかん}を{十分|じゅうぶん}にとる{必要|ひつよう}があるが、ただ{長|なが}く（　）そうではない。{時間|じかん}だけでなく{睡眠|すいみん}の{質|しつ}も{重要|じゅうよう}だ。",
      arti: "Untuk menjalani hidup sehat, perlu waktu tidur yang cukup, tetapi (…) tidur lama saja, ternyata tidak juga. Bukan hanya durasinya, kualitas tidur juga penting.",
      optYomi: ["{眠|ねむ}ればいいかというと", "{眠|ねむ}ればいいというより", "{眠|ねむ}ってもいいかというと", "{眠|ねむ}ってもいいというより"],
      optArti: ["kalau ditanya apakah cukup dengan tidur", "daripada (dibilang) cukup dengan tidur", "kalau ditanya apakah boleh tidur", "daripada (dibilang) boleh tidur"],
    },
    31: {
      yomi: "さくら{小学校|しょうがっこう}では、{児童数|じどうすう}が{増加|ぞうか}して、それまでの{教室数|きょうしつすう}では{対応|たいおう}（　）、{今年|ことし}{新|あたら}しい{校舎|こうしゃ}が{建設|けんせつ}された。",
      arti: "Di SD Sakura, jumlah murid bertambah, dan (…) dengan jumlah ruang kelas yang ada selama ini, sehingga tahun ini dibangun gedung sekolah baru.",
      optArti: ["karena sudah tidak bisa menampung sepenuhnya, maka (harus)", "karena (keadaan) sudah tidak bisa menampung sepenuhnya", "karena sudah tak ada pilihan selain menangani, maka (harus)", "karena (keadaan) sudah tak ada pilihan selain menangani"],
    },
    32: {
      yomi: "TKC{遊園地|ゆうえんち}はオープンからまもなく1{年|ねん}を{迎|むか}える。{総|そう}{来場者数|らいじょうしゃすう}は、{先月末|せんげつまつ}の{時点|じてん}で850{万人|まんにん}に{上|のぼ}り、1{周年|しゅうねん}となる{来月|らいげつ}には1000{万人|まんにん}を{超|こ}える（　）という。",
      arti: "Taman hiburan TKC sebentar lagi genap setahun sejak dibuka. Total pengunjung mencapai 8,5 juta orang per akhir bulan lalu, dan katanya (…) melampaui 10 juta orang bulan depan saat ulang tahun pertamanya.",
      optYomi: ["{限|かぎ}りだ", "{最中|さいちゅう}だ", "{見込|みこ}みだ", "{一方|いっぽう}だ"],
      optArti: ["sungguh sangat (perasaan)", "sedang di tengah-tengah", "diperkirakan akan", "terus-menerus (makin)"],
    },
    33: {
      yomi: "アルバイトを{終|お}えて{帰|かえ}ってきたが、のんびり（　）。{明日|あした}{提出|ていしゅつ}するレポートを{完成|かんせい}させなければならない。",
      arti: "Saya pulang setelah selesai kerja paruh waktu, tetapi (…) bersantai. Saya harus menyelesaikan laporan yang dikumpulkan besok.",
      optArti: ["tidak ada pilihan selain", "sangat ingin (tak tertahankan)", "tidak perlu sampai", "tidak bisa (terus) diam/bersantai"],
    },
    34: {
      yomi: "A「あれ、『ぜいたく』の『ぜい』って、{漢字|かんじ}でどう（　）？」B「え、{私|わたし}も{思|おも}い{出|だ}せない。」",
      arti: "A: \"Eh, 'zei' pada kata 'zeitaku' itu, kanjinya (…)?\" B: \"Hah, aku juga tidak ingat.\"",
      optYomi: ["{書|か}くんだよね", "{書|か}くんだっけ", "{書|か}けるんだよね", "{書|か}けるんだっけ"],
      optArti: ["ditulis begini, kan?", "ditulis bagaimana, ya? (mengingat-ingat)", "bisa ditulis, kan?", "bisa ditulis, ya?"],
    },
    35: {
      yomi: "{私|わたし}としては（　）のだが、{妻|つま}は{私|わたし}の{一言|ひとこと}に{感動|かんどう}したらしく、{泣|な}かれてしまった。",
      arti: "Bagi saya sendiri, saya (…), tetapi istri saya tampaknya terharu oleh satu kata dari saya dan malah menangis.",
      optYomi: ["{泣|な}くつもりはなかった", "{泣|な}かせるつもりはなかった", "{泣|な}きたくてたまらなかった", "{泣|な}かせたくてたまらなかった"],
      optArti: ["tidak berniat menangis", "tidak berniat membuatnya menangis", "sangat ingin menangis", "sangat ingin membuatnya menangis"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "（インタビューで）「{私|わたし}が30{年間|ねんかん}{歌手|かしゅ}を{続|つづ}けてこられたのは、ファンの{方|かた}の{支|ささ}えがあったからです。＿＿ ＿＿ ★ ＿＿{歌|うた}い{続|つづ}けたいと{思|おも}っています。」",
      arti: "(Dalam wawancara) \"Saya bisa terus menjadi penyanyi selama 30 tahun berkat dukungan para penggemar. Selama masih ada para penggemar yang mendukung saya, saya ingin terus bernyanyi.\"",
      optYomi: ["{限|かぎ}り", "ファンの{皆|みな}さんが", "{応援|おうえん}してくれる", null],
      optArti: ["selama", "para penggemar", "yang mendukung (saya)", "ada"],
    },
    37: {
      yomi: "S{市|し}が18{歳|さい}{以上|いじょう}の＿＿ ＿＿ ★ ＿＿{運動|うんどう}{不足|ぶそく}を{感|かん}じていることがわかった。",
      arti: "Ketika Kota S melakukan survei kesadaran tentang olahraga terhadap warga berusia 18 tahun ke atas, diketahui bahwa banyak orang merasa kurang berolahraga.",
      optYomi: ["{意識|いしき}{調査|ちょうさ}を{行|おこな}ったところ", "{市民|しみん}を{対象|たいしょう}に", "{多|おお}くの{人|ひと}が", "{運動|うんどう}に{関|かん}する"],
      optArti: ["ketika melakukan survei kesadaran", "dengan sasaran warga kota", "banyak orang", "mengenai olahraga"],
    },
    38: {
      yomi: "{子供|こども}のころ、{母|はは}はしつけに{厳|きび}しくて、{私|わたし}はそれが{嫌|いや}だった。しかし、{母|はは}が＿＿ ＿＿ ★ ＿＿{今|いま}ならわかる。",
      arti: "Waktu kecil, ibu saya keras dalam mendidik, dan saya tidak suka itu. Namun, sekarang setelah saya sendiri menjadi orang tua, saya mengerti bahwa ibu bersikap keras justru karena memikirkan saya.",
      optYomi: ["{親|おや}になった", "{私|わたし}のことを", "{思|おも}えばこそだったのだと", "{厳|きび}しかったのは"],
      optArti: ["(saya) yang sudah menjadi orang tua", "(tentang) diri saya", "(bahwa) justru karena memikirkan", "(alasan ibu) bersikap keras"],
    },
    39: {
      yomi: "{去年|きょねん}＿＿ ＿＿ ★ ＿＿、{若者|わかもの}の{間|あいだ}で{流行|りゅうこう}している。",
      arti: "Jas hujan yang diluncurkan oleh Perusahaan M tahun lalu menjadi perbincangan bukan hanya karena fungsinya, tetapi juga karena desainnya yang lucu, dan kini sedang tren di kalangan anak muda.",
      optYomi: [null, "{機能性|きのうせい}もさることながら", "M{社|しゃ}から{発売|はつばい}された", "そのかわいらしいデザインが{話題|わだい}となり"],
      optArti: ["jas hujan (itu)", "fungsinya memang (bagus), tetapi lebih lagi", "yang diluncurkan oleh Perusahaan M", "desainnya yang lucu menjadi perbincangan"],
    },
    40: {
      yomi: "「{未来|みらい}のものづくりコンテスト」は、＿＿ ＿＿ ★ ＿＿{今年|ことし}で20{回目|かいめ}を{迎|むか}える。",
      arti: "\"Kontes Membuat Benda Masa Depan\" adalah kontes yang dimulai oleh Perusahaan ABC pada peringatan 50 tahun berdirinya, agar anak-anak merasakan serunya membuat sesuatu, dan tahun ini memasuki penyelenggaraan ke-20.",
      optYomi: ["{子供|こども}たちに", null, "ものづくりの{面白|おもしろ}さを{感|かん}じてもらおうと", "ABC{社|しゃ}が{創立|そうりつ}50{周年|しゅうねん}を{機|き}に{始|はじ}めた"],
      optArti: ["kepada anak-anak", "(sebagai) kontes", "agar (mereka) merasakan serunya membuat sesuatu", "yang dimulai Perusahaan ABC pada momen 50 tahun berdirinya"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{保育園|ほいくえん}", "ある{保育園|ほいくえん}", "そうした{保育園|ほいくえん}", "それ{以外|いがい}の{保育園|ほいくえん}"],
      optArti: ["tempat penitipan anak", "suatu tempat penitipan anak", "tempat penitipan anak semacam itu", "tempat penitipan anak selain itu"],
    },
    42: {
      optArti: ["sebagai tambahan/catatan", "hanya saja", "oleh karena itu", "meskipun begitu"],
    },
    43: {
      optYomi: ["{入学|にゅうがく}したとたん", "{入学|にゅうがく}しておきながら", "{入学|にゅうがく}したとしても", "{入学|にゅうがく}してはじめて"],
      optArti: ["begitu masuk sekolah", "padahal sudah masuk sekolah", "seandainya pun masuk sekolah", "baru setelah masuk sekolah"],
    },
    44: {
      optYomi: ["たくましく{思|おも}えます", null, null, null],
      optArti: ["terasa (bagi saya) tangguh", "dianggap tangguh", "seharusnya dulu tangguh", "(sungguh) sudah menjadi tangguh"],
    },

    // ── 問題8：内容理解（短文） ──
    45: {
      yomi: "{筆者|ひっしゃ}が、{番組|ばんぐみ}づくりにおいて{危険|きけん}だと{感|かん}じていることは{何|なに}か。",
      arti: "Apa yang dirasakan penulis sebagai bahaya dalam pembuatan acara?",
      optYomi: [
        "{視聴率|しちょうりつ}を{上|あ}げようとして、{事実|じじつ}とは{異|こと}なることを{伝|つた}えてしまうこと",
        "わかりやすいことだけを{伝|つた}えて、{視聴者|しちょうしゃ}に{関心|かんしん}を{持|も}たれなくなってしまうこと",
        "わかりやすくしようとして、{事実|じじつ}を{掘|ほ}り{下|さ}げて{伝|つた}えられなくなってしまうこと",
        "メッセージをシンプルにしようとして、{本質|ほんしつ}がわかりにくくなってしまうこと",
      ],
      optArti: [
        "Demi menaikkan rating, malah menyampaikan hal yang berbeda dari fakta.",
        "Hanya menyampaikan hal yang mudah dipahami, sehingga penonton tidak lagi tertarik.",
        "Demi membuatnya mudah dipahami, fakta tidak lagi bisa disampaikan secara mendalam.",
        "Demi menyederhanakan pesan, esensinya malah menjadi sulit dipahami.",
      ],
    },
    46: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{失敗|しっぱい}してもいいと{思|おも}わせることで、{相手|あいて}は{自|みずか}ら{行動|こうどう}できるようになる。",
        "{失敗|しっぱい}を{経験|けいけん}させれば、{相手|あいて}は{失敗|しっぱい}について{自|みずか}ら{考|かんが}えるようになる。",
        "{失敗|しっぱい}の{経験|けいけん}を{積|つ}ませることで、{相手|あいて}は{失敗|しっぱい}をしないようになる。",
        "{失敗|しっぱい}を{許容|きょよう}しなければ、{相手|あいて}は{行動|こうどう}することを{恐|おそ}れてしまう。",
      ],
      optArti: [
        "Dengan membuat orang merasa boleh gagal, ia akan bisa bertindak atas kemauan sendiri.",
        "Jika diberi pengalaman gagal, orang akan berpikir sendiri tentang kegagalan.",
        "Dengan membiarkan orang mengumpulkan pengalaman gagal, ia akan menjadi tidak gagal lagi.",
        "Jika kegagalan tidak ditoleransi, orang akan takut untuk bertindak.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{直感力|ちょっかんりょく}による「{発見|はっけん}や{気|き}づき」は、{問題|もんだい}の{解決|かいけつ}に{欠|か}かせない。",
        "「{発見|はっけん}や{気|き}づき」は、いつも{直感力|ちょっかんりょく}によって{生|う}まれるわけではない。",
        "{強|つよ}い{探求心|たんきゅうしん}と{問題|もんだい}{意識|いしき}を{持|も}っていれば、{問題|もんだい}は{解決|かいけつ}できる。",
        "{問題|もんだい}への{探求心|たんきゅうしん}を{持|も}ち{続|つづ}けていなければ、{直感力|ちょっかんりょく}は{作用|さよう}しない。",
      ],
      optArti: [
        "\"Penemuan dan kesadaran\" dari intuisi sangat diperlukan untuk memecahkan masalah.",
        "\"Penemuan dan kesadaran\" tidak selalu lahir dari intuisi.",
        "Jika memiliki rasa ingin menyelidiki yang kuat dan kesadaran akan masalah, masalah bisa dipecahkan.",
        "Jika tidak terus memiliki rasa ingin menyelidiki suatu masalah, intuisi tidak akan bekerja.",
      ],
    },
    48: {
      yomi: "「{思|おも}い{出|で}」について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang \"kenangan\", manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{不愉快|ふゆかい}な「{思|おも}い{出|で}」ほど、{記憶|きおく}に{残|のこ}りやすい。",
        "{時間|じかん}がたてば、{多|おお}くの「{思|おも}い{出|で}」が{消|き}えていく。",
        "{時間|じかん}がたつほど、{事実|じじつ}とは{異|こと}なっていくことが{多|おお}い。",
        "{出来事|できごと}の{記憶|きおく}が{鮮明|せんめい}なほど、{自分|じぶん}の「{物語|ものがたり}」が{作|つく}られる。",
      ],
      optArti: [
        "Makin tidak menyenangkan suatu \"kenangan\", makin mudah tertinggal di ingatan.",
        "Seiring berjalannya waktu, banyak \"kenangan\" yang menghilang.",
        "Makin lama waktu berlalu, sering kali kenangan makin berbeda dari fakta.",
        "Makin jelas ingatan akan suatu peristiwa, makin terbentuk \"kisah\" diri sendiri.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    49: {
      yomi: "{料理本|りょうりぼん}について、{筆者|ひっしゃ}が{不満|ふまん}に{思|おも}っていたことは{何|なに}か。",
      arti: "Mengenai buku resep, apa yang selama ini membuat penulis tidak puas?",
      optYomi: [
        "なぜ{自分|じぶん}とは{違|ちが}う{手順|てじゅん}なのかがわからないこと",
        "{作|つく}り{方|かた}が{丁寧|ていねい}に{書|か}かれていないこと",
        "{手順|てじゅん}が{決|き}められた{理由|りゆう}が{書|か}かれていないこと",
        "{手順|てじゅん}が{一|ひと}つしか{書|か}かれていないこと",
      ],
      optArti: [
        "Tidak tahu mengapa langkahnya berbeda dengan cara dirinya sendiri.",
        "Cara membuatnya tidak ditulis dengan rinci.",
        "Alasan mengapa langkah-langkahnya ditetapkan begitu tidak ditulis.",
        "Langkahnya hanya ditulis satu macam saja.",
      ],
    },
    50: {
      yomi: "{型|かた}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan tentang \"pola/pakem\"?",
      optYomi: [
        "{個人|こじん}が{自由|じゆう}に{作|つく}ったもので、{基本|きほん}{原理|げんり}をもとに{作|つく}られたものではない。",
        "{学|まな}ぶことはできないので、{自分|じぶん}で{見|み}つけるしかない。",
        "{作|つく}った{人|ひと}には{必要|ひつよう}なものだが、{誰|だれ}にでも{役|やく}に{立|た}つとは{言|い}えない。",
        "{作|つく}った{人|ひと}から{学|まな}べば、{誰|だれ}にでも{応用|おうよう}できるものだ。",
      ],
      optArti: [
        "Sesuatu yang dibuat bebas oleh individu, bukan dibuat berdasarkan prinsip dasar.",
        "Tidak bisa dipelajari, jadi mau tidak mau harus ditemukan sendiri.",
        "Diperlukan oleh orang yang membuatnya, tetapi tidak bisa dikatakan berguna bagi semua orang.",
        "Jika dipelajari dari pembuatnya, siapa pun bisa menerapkannya.",
      ],
    },
    51: {
      yomi: "{学|まな}ぶことについて、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang belajar, manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{基本|きほん}{原理|げんり}を{理解|りかい}したうえで、{自分|じぶん}なりのやり{方|かた}を{発見|はっけん}することが{大切|たいせつ}だ。",
        "より{多|おお}くの{型|かた}を{学|まな}び、その{中|なか}から{自分|じぶん}に{合|あ}ったやり{方|かた}を{探|さが}し{出|だ}すべきだ。",
        "まず{型|かた}を{身|み}につけ、それを{自分|じぶん}に{合|あ}うように{修正|しゅうせい}していくことが{大切|たいせつ}だ。",
        "マニュアルを{使|つか}うことをやめて、{基本|きほん}{原理|げんり}を{自分|じぶん}で{考|かんが}えるべきだ。",
      ],
      optArti: [
        "Penting untuk menemukan cara sendiri setelah memahami prinsip dasarnya.",
        "Sebaiknya mempelajari sebanyak mungkin pola, lalu mencari cara yang cocok untuk diri sendiri di antaranya.",
        "Penting untuk menguasai pola terlebih dahulu, lalu memperbaikinya agar cocok dengan diri sendiri.",
        "Sebaiknya berhenti memakai manual dan memikirkan prinsip dasarnya sendiri.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}にとって、アニメーションを{作|つく}る{作業|さぎょう}とはどのようなものか。",
      arti: "Bagi penulis, seperti apakah pekerjaan membuat animasi itu?",
      optYomi: [
        "{自分|じぶん}のイメージどおりになることを{求|もと}めずに、{楽|たの}しみながら{形|かたち}にする。",
        "{自分|じぶん}のイメージに{近|ちか}づけて{修正|しゅうせい}を{重|かさ}ねるうちに、できあがっていく。",
        "{思|おも}い{描|えが}いたことと{現実|げんじつ}の{形|かたち}を{調整|ちょうせい}し{続|つづ}け、あるところで{妥協|だきょう}する。",
        "{十分|じゅうぶん}{納得|なっとく}できるまで、{完成|かんせい}に{向|む}けて{作業|さぎょう}を{積|つ}み{重|かさ}ねる。",
      ],
      optArti: [
        "Mewujudkannya sambil menikmati, tanpa menuntut hasilnya sesuai bayangan sendiri.",
        "Sambil terus memperbaiki agar mendekati bayangan sendiri, karya itu pun jadi.",
        "Terus menyesuaikan antara apa yang dibayangkan dan bentuk nyatanya, lalu berkompromi di satu titik.",
        "Menumpuk pekerjaan menuju penyelesaian sampai benar-benar puas.",
      ],
    },
    53: {
      yomi: "この{魔物|まもの}とは{何|なに}か。",
      arti: "Apa yang dimaksud dengan \"makhluk gaib (iblis)\" ini?",
      optYomi: [
        "{我慢|がまん}できないくらい{大変|たいへん}で、{作品|さくひん}{作|づく}りをやめてしまいたくなる{物作|ものづく}り",
        "{後悔|こうかい}に{悩|なや}まされながら、{納得|なっとく}できる{作品|さくひん}を{目指|めざ}し{続|つづ}ける{物作|ものづく}り",
        "{自分|じぶん}のベストの{形|かたち}が{分|わ}からなくなってしまうような{物作|ものづく}り",
        "{作品|さくひん}を{作|つく}り{終|お}えるたびに、{気力|きりょく}を{奪|うば}われるような{物作|ものづく}り",
      ],
      optArti: [
        "Kegiatan berkarya yang begitu berat hingga tak tertahankan dan membuat ingin berhenti berkarya.",
        "Kegiatan berkarya yang terus mengejar karya yang memuaskan sambil tersiksa oleh penyesalan.",
        "Kegiatan berkarya yang membuat tidak tahu lagi bentuk terbaik diri sendiri.",
        "Kegiatan berkarya yang setiap kali selesai membuat karya, semangat terkuras.",
      ],
    },
    54: {
      yomi: "{創作|そうさく}することについて、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang berkreasi (mencipta), manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{自分|じぶん}の{思|おも}いどおりにならなくても、{人|ひと}に{評価|ひょうか}された{時|とき}に{充実感|じゅうじつかん}が{得|え}られる。",
        "{自分|じぶん}の{世界観|せかいかん}を{思|おも}う{存分|ぞんぶん}{広|ひろ}げ、{作品|さくひん}の{中|なか}で{表現|ひょうげん}できた{時|とき}に{満足|まんぞく}できる。",
        "{満足|まんぞく}できる{作品|さくひん}になりそうになくても、{完成|かんせい}させると{充実感|じゅうじつかん}が{得|え}られる。",
        "いつか{満足|まんぞく}する{作品|さくひん}が{作|つく}れると{信|しん}じていれば、{評価|ひょうか}される{作品|さくひん}が{作|つく}れる。",
      ],
      optArti: [
        "Meski tidak sesuai keinginan sendiri, rasa puas didapat ketika dinilai baik oleh orang lain.",
        "Rasa puas didapat ketika bisa memperluas pandangan dunia sendiri sepuasnya dan mengekspresikannya dalam karya.",
        "Meski sepertinya tidak akan menjadi karya yang memuaskan, rasa puas didapat jika diselesaikan.",
        "Jika percaya suatu saat bisa membuat karya yang memuaskan, kita bisa membuat karya yang dinilai baik.",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}によると、デジタルを{使|つか}うことで{前頭葉|ぜんとうよう}の{老化|ろうか}が{進|すす}むのはなぜか。",
      arti: "Menurut penulis, mengapa penuaan lobus frontal bertambah cepat karena menggunakan perangkat digital?",
      optYomi: [
        "{記憶|きおく}にかかわる{脳|のう}の{機能|きのう}を{使|つか}うことが{少|すく}なくなるから",
        "デジタルがもたらす{膨大|ぼうだい}な{情報|じょうほう}が、{脳|のう}を{疲労|ひろう}させるから",
        "{脳|のう}が{情報|じょうほう}や{知識|ちしき}を{扱|あつか}うことがなくなるから",
        "{脳|のう}が{感情|かんじょう}のコントロールや{思考|しこう}をしないようになるから",
      ],
      optArti: [
        "Karena fungsi otak yang berkaitan dengan ingatan makin jarang dipakai.",
        "Karena informasi dalam jumlah besar yang dibawa perangkat digital membuat otak lelah.",
        "Karena otak tidak lagi mengolah informasi dan pengetahuan.",
        "Karena otak menjadi tidak lagi mengendalikan emosi atau berpikir.",
      ],
    },
    56: {
      yomi: "この{考|かんが}えとはどのような{考|かんが}えか。",
      arti: "Pemikiran seperti apakah \"pemikiran ini\"?",
      optYomi: [
        "{脳|のう}よりデジタルのほうが、{情報|じょうほう}や{知識|ちしき}を{多|おお}く{蓄積|ちくせき}できる。",
        "デジタルに{頼|たよ}り{過|す}ぎると、{次第|しだい}に{脳|のう}の{機能|きのう}が{低下|ていか}する。",
        "デジタルは、{脳|のう}と{同|おな}じように{思考|しこう}に{使|つか}えるものではない。",
        "デジタルと{脳|のう}を{使|つか}い{分|わ}けることで、{脳|のう}は{思考|しこう}に{特化|とっか}できる。",
      ],
      optArti: [
        "Perangkat digital bisa menyimpan lebih banyak informasi dan pengetahuan daripada otak.",
        "Jika terlalu bergantung pada perangkat digital, fungsi otak lambat laun menurun.",
        "Perangkat digital tidak bisa dipakai untuk berpikir seperti halnya otak.",
        "Dengan membagi peran antara perangkat digital dan otak, otak bisa dikhususkan untuk berpikir.",
      ],
    },
    57: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{情報|じょうほう}や{知識|ちしき}の{記憶|きおく}{装置|そうち}である{脳|のう}を、さらに{鍛|きた}えるべきだ。",
        "{連想|れんそう}や{判断|はんだん}の{機能|きのう}を{持|も}てば、デジタルも{脳|のう}の{役目|やくめ}を{果|は}たせる。",
        "デジタルをうまく{活用|かつよう}しなければ、{脳|のう}の{潜在力|せんざいりょく}が{引|ひ}き{出|だ}せない。",
        "{脳|のう}の{機能|きのう}を{衰|おとろ}えさせないよう、デジタルの{利用|りよう}は{慎重|しんちょう}であるべきだ。",
      ],
      optArti: [
        "Otak sebagai alat penyimpan informasi dan pengetahuan harus dilatih lebih lagi.",
        "Jika memiliki fungsi asosiasi dan penilaian, perangkat digital pun bisa menjalankan peran otak.",
        "Jika perangkat digital tidak dimanfaatkan dengan baik, potensi otak tidak bisa digali.",
        "Agar fungsi otak tidak melemah, penggunaan perangkat digital harus hati-hati.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    58: {
      yomi: "{筆者|ひっしゃ}は{先生|せんせい}の{言葉|ことば}を{聞|き}いて、なんのために{読書|どくしょ}をするようになったか。",
      arti: "Setelah mendengar perkataan gurunya, untuk apa penulis mulai membaca buku?",
      optYomi: [
        "{難解|なんかい}な{物|もの}の{見方|みかた}や{考|かんが}え{方|かた}を{理解|りかい}するため",
        "{自身|じしん}の{物|もの}の{見方|みかた}や{考|かんが}え{方|かた}を{再考|さいこう}するため",
        "{自身|じしん}の{知識|ちしき}を{増|ふ}やすため",
        "{自身|じしん}の{知識|ちしき}が{正|ただ}しいかどうかを{確認|かくにん}するため",
      ],
      optArti: [
        "Untuk memahami cara pandang dan cara berpikir yang sulit dipahami.",
        "Untuk memikirkan ulang cara pandang dan cara berpikir dirinya sendiri.",
        "Untuk menambah pengetahuan dirinya sendiri.",
        "Untuk memastikan apakah pengetahuan dirinya benar atau tidak.",
      ],
    },
    59: {
      yomi: "{理解|りかい}するとはどういうことか。",
      arti: "Apa yang dimaksud dengan \"memahami\"?",
      optYomi: [
        "{概念|がいねん}や{観念|かんねん}に{頼|たよ}らず、{人|ひと}や{物|もの}を{中立的|ちゅうりつてき}に{捉|とら}えること",
        "{概念|がいねん}や{観念|かんねん}にとらわれず、{人|ひと}や{物|もの}の{本質|ほんしつ}を{捉|とら}えること",
        "{概念|がいねん}や{観念|かんねん}を{利用|りよう}して、{人|ひと}や{物|もの}を{単独|たんどく}な{在|あ}り{方|かた}で{捉|とら}えること",
        "{概念|がいねん}や{観念|かんねん}をとおして、{様々|さまざま}な{人|ひと}や{物|もの}を{共通|きょうつう}の{枠組|わくぐ}みで{捉|とら}えること",
      ],
      optArti: [
        "Menangkap orang dan benda secara netral tanpa bergantung pada konsep dan gagasan.",
        "Menangkap hakikat orang dan benda tanpa terikat oleh konsep dan gagasan.",
        "Memanfaatkan konsep dan gagasan untuk menangkap orang dan benda dalam keberadaannya yang tunggal.",
        "Melalui konsep dan gagasan, menangkap berbagai orang dan benda dalam kerangka yang sama.",
      ],
    },
    60: {
      yomi: "{理解|りかい}することの{問題点|もんだいてん}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang masalah dari \"memahami\"?",
      optYomi: [
        "{学問|がくもん}としての{正|ただ}しい{在|あ}り{方|かた}に、{疑問|ぎもん}を{持|も}たなくなる。",
        "{諸々|もろもろ}の{存在|そんざい}を{個別性|こべつせい}や{独自性|どくじせい}でしか{捉|とら}えられなくなる。",
        "{人|ひと}や{物|もの}の{個別性|こべつせい}や{独自性|どくじせい}が{見|み}えなくなるおそれがある。",
        "{人|ひと}や{物|もの}の{本質|ほんしつ}に{力|ちから}を{加|くわ}えて、ゆがめてしまう{可能性|かのうせい}がある。",
      ],
      optArti: [
        "Kita tidak lagi mempertanyakan bentuk yang benar sebagai ilmu pengetahuan.",
        "Segala keberadaan hanya bisa ditangkap dari sisi keunikan dan kekhasannya saja.",
        "Ada kekhawatiran keunikan dan kekhasan orang atau benda menjadi tidak terlihat.",
        "Ada kemungkinan kita menekan hakikat orang atau benda hingga mendistorsinya.",
      ],
    },

    // ── 問題11：統合理解 ──
    61: {
      yomi: "AとBの{認識|にんしき}で{共通|きょうつう}していることは{何|なに}か。",
      arti: "Apa kesamaan pandangan A dan B?",
      optYomi: [
        "{初対面|しょたいめん}の{印象|いんしょう}を{変|か}えるのは{難|むずか}しい。",
        "{態度|たいど}や{服装|ふくそう}も{相手|あいて}が{持|も}つ{印象|いんしょう}に{影響|えいきょう}を{与|あた}える。",
        "{相手|あいて}が{持|も}つ{印象|いんしょう}を{気|き}にしすぎないほうがいい。",
        "{信頼度|しんらいど}は、{自分|じぶん}{自身|じしん}の{努力|どりょく}だけでは{高|たか}められない。",
      ],
      optArti: [
        "Kesan pada pertemuan pertama sulit diubah.",
        "Sikap dan pakaian juga memengaruhi kesan yang ditangkap lawan bicara.",
        "Sebaiknya tidak terlalu memikirkan kesan yang ditangkap lawan bicara.",
        "Tingkat kepercayaan tidak bisa ditingkatkan hanya dengan usaha diri sendiri.",
      ],
    },
    62: {
      yomi: "{説得力|せっとくりょく}を{高|たか}めるために{必要|ひつよう}なことについて、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana A dan B menjelaskan hal yang diperlukan untuk meningkatkan daya bujuk?",
      optYomi: [
        "AもBも、{専門性|せんもんせい}の{高|たか}い{説明|せつめい}ではなく、{日常|にちじょう}{生活|せいかつ}の{身近|みぢか}な{例|れい}を{挙|あ}げて{説明|せつめい}することだと{述|の}べている。",
        "AもBも、{相手|あいて}の{要求|ようきゅう}を{理解|りかい}するために、{話|はなし}をしっかり{聞|き}くことだと{述|の}べている。",
        "Aは{相手|あいて}に{合|あ}わせた{説明|せつめい}をすることだと{述|の}べ、Bは{専門的|せんもんてき}{知識|ちしき}や{情報|じょうほう}を{多|おお}く{集|あつ}めて{生活|せいかつ}に{結|むす}びつけながら{説明|せつめい}することだと{述|の}べている。",
        "Aは{相手|あいて}の{求|もと}める{内容|ないよう}を{的確|てきかく}に{説明|せつめい}することだと{述|の}べ、Bは{相手|あいて}に{合|あ}わせて{情報量|じょうほうりょう}を{調整|ちょうせい}することだと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan bahwa yang diperlukan adalah menjelaskan dengan contoh sehari-hari yang dekat, bukan penjelasan yang sangat teknis.",
        "A dan B sama-sama menyatakan bahwa yang diperlukan adalah mendengarkan baik-baik agar memahami keinginan lawan bicara.",
        "A menyatakan perlunya menjelaskan sesuai lawan bicara; B menyatakan perlunya mengumpulkan banyak pengetahuan dan informasi khusus lalu menjelaskannya sambil dikaitkan dengan kehidupan sehari-hari.",
        "A menyatakan perlunya menjelaskan dengan tepat isi yang diinginkan lawan bicara; B menyatakan perlunya menyesuaikan jumlah informasi dengan lawan bicara.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    63: {
      yomi: "{筆者|ひっしゃ}によると、{自然界|しぜんかい}で{子孫|しそん}を{残|のこ}した{生物|せいぶつ}はなぜ{子孫|しそん}を{残|のこ}せたか。",
      arti: "Menurut penulis, mengapa makhluk hidup yang meninggalkan keturunan di alam bisa meninggalkan keturunan?",
      optYomi: [
        "{自然|しぜん}{環境|かんきょう}に{合|あ}わせて{自身|じしん}を{変化|へんか}させたから",
        "{自身|じしん}に{適|てき}した{自然|しぜん}{環境|かんきょう}を{選|えら}んで{移動|いどう}したから",
        "DNAが{複製|ふくせい}されるときに、ずれが{生|しょう}じなかったから",
        "DNAに{生|しょう}じた{変化|へんか}が、たまたま{自然|しぜん}{環境|かんきょう}に{合|あ}ったから",
      ],
      optArti: [
        "Karena mereka mengubah diri sendiri menyesuaikan lingkungan alam.",
        "Karena mereka memilih dan berpindah ke lingkungan alam yang cocok bagi dirinya.",
        "Karena tidak terjadi penyimpangan saat DNA disalin.",
        "Karena perubahan yang terjadi pada DNA kebetulan cocok dengan lingkungan alam.",
      ],
    },
    64: {
      yomi: "①ホワイトレグホンについて、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan tentang ① White Leghorn?",
      optYomi: [
        "{卵|たまご}を{産|う}んでも{暖|あたた}めない。",
        "{一度|いちど}に{多|おお}くの{卵|たまご}を{産|う}む。",
        "{産|う}んだ{卵|たまご}をほかの{鳥|とり}に{託|たく}す。",
        "ほかの{鳥|とり}より{卵|たまご}を{暖|あたた}める{時間|じかん}が{短|みじか}い。",
      ],
      optArti: [
        "Meski bertelur, ia tidak mengerami telurnya.",
        "Bertelur banyak sekaligus.",
        "Menitipkan telur yang ditetaskan kepada burung lain.",
        "Waktu mengerami telurnya lebih pendek daripada burung lain.",
      ],
    },
    65: {
      yomi: "②カイコについて、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan tentang ② ulat sutra?",
      optYomi: [
        "{身動|みうご}きが{取|と}れないため、{絹糸|きぬいと}が{多|おお}く{作|つく}り{出|だ}せなくなった。",
        "{人間|にんげん}が{餌|えさ}を{与|あた}えることで、{絹糸|きぬいと}を{作|つく}ることに{専念|せんねん}するようになった。",
        "{生|い}きるエネルギーの{大部分|だいぶぶん}を、{餌|えさ}を{食|た}べることに{費|つい}やすようになった。",
        "{人工的|じんこうてき}な{環境|かんきょう}を{与|あた}えた{結果|けっか}、{絹糸|きぬいと}を{作|つく}るという{新|あたら}しい{能力|のうりょく}を{獲得|かくとく}した。",
      ],
      optArti: [
        "Karena tidak bisa bergerak, ia tidak bisa lagi menghasilkan banyak benang sutra.",
        "Karena manusia memberinya makan, ia menjadi berfokus membuat benang sutra.",
        "Ia menjadi menghabiskan sebagian besar energi hidupnya untuk makan.",
        "Sebagai hasil diberi lingkungan buatan, ia memperoleh kemampuan baru, yaitu membuat benang sutra.",
      ],
    },
    66: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{人間|にんげん}が{作|つく}りかえた{生物|せいぶつ}は、{本来|ほんらい}の{姿|すがた}に{戻|もど}さなければならない。",
        "{人間|にんげん}はあらゆる{生物|せいぶつ}と{新|あら}たな{共生|きょうせい}{関係|かんけい}を{築|きず}くべきだ。",
        "{人間|にんげん}は{生物|せいぶつ}の{進化|しんか}のプロセスに{介入|かいにゅう}するべきではない。",
        "{人間|にんげん}は{作|つく}り{出|だ}した{生命|せいめい}との{共生|きょうせい}{関係|かんけい}を{維持|いじ}しなければならない。",
      ],
      optArti: [
        "Makhluk hidup yang diubah manusia harus dikembalikan ke wujud aslinya.",
        "Manusia harus membangun hubungan simbiosis baru dengan semua makhluk hidup.",
        "Manusia tidak boleh campur tangan dalam proses evolusi makhluk hidup.",
        "Manusia harus mempertahankan hubungan simbiosis dengan kehidupan yang telah diciptakannya.",
      ],
    },

    // ── 問題13：情報検索 ──
    67: {
      yomi: "ジェシカさんは、9{月|がつ}に{受講料|じゅこうりょう}9,000{円|えん}のビジネスマナー{講座|こうざ}を、10{月|がつ}に{受講料|じゅこうりょう}27,000{円|えん}のプレゼン{講座|こうざ}を{受講|じゅこう}する。ジェシカさんが{会社|かいしゃ}から{受|う}けられる{補助|ほじょ}は、いくらになるか。",
      arti: "Jessica-san akan mengikuti kursus tata krama bisnis seharga 9.000 yen pada bulan September, dan kursus presentasi seharga 27.000 yen pada bulan Oktober. Berapa subsidi yang bisa ia terima dari perusahaan?",
      optYomi: ["9,000{円|えん}と10,000{円|えん}", "9,000{円|えん}と27,000{円|えん}", "10,000{円|えん}と10,000{円|えん}", "10,000{円|えん}"],
      optArti: ["9.000 yen dan 10.000 yen", "9.000 yen dan 27.000 yen", "10.000 yen dan 10.000 yen", "10.000 yen"],
    },
    68: {
      yomi: "{森田|もりた}さんは、{2月|にがつ}{20日|はつか}にビジネス{文書|ぶんしょ}{講座|こうざ}を{受講|じゅこう}する。{受講料|じゅこうりょう}{補助|ほじょ}の{申請|しんせい}はどうしなければならないか。",
      arti: "Morita-san akan mengikuti kursus dokumen bisnis pada tanggal 20 Februari. Bagaimana ia harus mengajukan subsidi biaya kursus?",
      optYomi: [
        "{2月|にがつ}{15日|じゅうごにち}までに①〜④を{人事課|じんじか}に{提出|ていしゅつ}する。",
        "{2月|にがつ}{15日|じゅうごにち}までに①を、{3月|さんがつ}{10日|とおか}までに②〜④を{人事課|じんじか}に{提出|ていしゅつ}する。",
        "{2月|にがつ}{15日|じゅうごにち}までに①を、{3月|さんがつ}{31日|さんじゅういちにち}までに②〜④を{人事課|じんじか}に{提出|ていしゅつ}する。",
        "{3月|さんがつ}{10日|とおか}までに①〜④を{人事課|じんじか}に{提出|ていしゅつ}する。",
      ],
      optArti: [
        "Menyerahkan ①–④ ke Bagian Personalia paling lambat 15 Februari.",
        "Menyerahkan ① paling lambat 15 Februari, dan ②–④ paling lambat 10 Maret ke Bagian Personalia.",
        "Menyerahkan ① paling lambat 15 Februari, dan ②–④ paling lambat 31 Maret ke Bagian Personalia.",
        "Menyerahkan ①–④ ke Bagian Personalia paling lambat 10 Maret.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：立場が人をつくる ──
    "7": {
      yomi: `{以下|いか}は、{作家|さっか}が{書|か}いた{文章|ぶんしょう}である。

{立場|たちば}が{人|ひと}をつくる。とはよく{言|い}ったものだと{思|おも}います。これは{主|おも}にビジネスの{世界|せかい}で{使|つか}われていることばだと{思|おも}うのですが、{子|こ}どもの{社会|しゃかい}でも{同|おな}じようなことを{感|かん}じることが{多々|たた}あります。

ここ{十数年|じゅうすうねん}、{私|わたし}は{毎月|まいつき}、{保育園|ほいくえん}の{取材|しゅざい}を{行|おこな}っていました。いま{多|おお}くの{保育園|ほいくえん}では0{歳|さい}から{五歳|ごさい}（{就学前|しゅうがくまえ}まで）の{子|こ}どもを{受|う}け{入|い}れていますが、なかには0{歳|さい}から{二歳児|にさいじ}までの{低年齢児|ていねんれいじ}を{対象|たいしょう}にした{保育園|ほいくえん}もあります。[41]に{行|い}って{驚|おどろ}くのは、{二歳児|にさいじ}の{姿|すがた}です。{五歳児|ごさいじ}までいる{保育園|ほいくえん}の{二歳児|にさいじ}や、{園|えん}に{通|かよ}っていない{二歳児|にさいじ}と{比|くら}べると、とにかくしっかりして{見|み}えるのです。

どちらがいいとか、わるい、という{話|はなし}ではありません。[42]、「{自分|じぶん}は{小|ちい}さい{子|こ}」、という{環境|かんきょう}で{生活|せいかつ}をするのと「{自分|じぶん}は{一番|いちばん}{大|おお}きい{子|こ}」という{環境|かんきょう}で{過|す}ごすのでは、やはり{行動|こうどう}や{意識|いしき}に{違|ちが}いが{出|で}てくると{思|おも}うのです。

それが{顕著|けんちょ}にあらわれていると{思|おも}うのは、{小学校|しょうがっこう}{一年生|いちねんせい}へと{進学|しんがく}したときの{子|こ}どもたちです。

{入学前|にゅうがくまえ}、{保育園|ほいくえん}や{幼稚園|ようちえん}の{年長児|ねんちょうじ}（{注|ちゅう}1）だったときは、{小|ちい}さなお{友|とも}だちの{着替|きが}えを{手伝|てつだ}ったり、{給食|きゅうしょく}や{掃除|そうじ}などのお{当番|とうばん}{活動|かつどう}を{行|おこな}ったり、あそびを{通|とお}してさまざまな{活動|かつどう}のなかで、いろいろな{体験|たいけん}をつみかさねていきます。

{年長児|ねんちょうじ}は、なんでもできるかっこいいお{兄|にい}ちゃん、お{姉|ねえ}ちゃんだったのです。

ところが、{小学校|しょうがっこう}に[43]、{一年生|いちねんせい}は{面倒|めんどう}を{見|み}てもらう、{小|ちい}さくてかわいい{存在|そんざい}になります。{立場|たちば}が{一転|いってん}するのです。

{六年生|ろくねんせい}に{手|て}を{握|にぎ}られ、トイレに{連|つ}れて{行|い}ってもらっている{一年生|いちねんせい}のなかには、{案外|あんがい}まんざらでもない（{注|ちゅう}2）{顔|かお}で、その{状況|じょうきょう}に{順応|じゅんのう}している{子|こ}もいます。それはそれでかわいいのですが……

けれど、いるのです。いえ、{実|じつ}はたくさんの{一年生|いちねんせい}が、お{世話|せわ}されることに{対|たい}して、なんで？どうして？と{感|かん}じていると{思|おも}うのです。

「ぼくは・わたしは{大|おお}きくなったのに！」と。

そんな{不満顔|ふまんがお}の{一年生|いちねんせい}が、なんとも[44]。

{子|こ}どもは、{自分|じぶん}の{明日|あした}に{大|おお}きな{期待|きたい}をしている。その{期待|きたい}が、{子|こ}どものたくましさなのではないかと{思|おも}うのです。

（{注|ちゅう}1）{年長児|ねんちょうじ}：{年齢|ねんれい}がいちばん{上|うえ}のクラスの{幼児|ようじ}
（{注|ちゅう}2）まんざらでもない：{嫌|いや}ではなさそうな`,
      arti: `Berikut ini adalah tulisan seorang pengarang.

"Kedudukan membentuk manusia." Menurut saya ungkapan itu sungguh tepat. Saya kira ungkapan ini terutama dipakai di dunia bisnis, tetapi dalam masyarakat anak-anak pun sering kali saya merasakan hal yang serupa.

Selama belasan tahun terakhir, setiap bulan saya meliput tempat penitipan anak. Saat ini banyak tempat penitipan anak menerima anak usia 0 sampai 5 tahun (sampai sebelum masuk SD), tetapi ada juga tempat penitipan yang khusus menerima anak usia dini, dari 0 sampai 2 tahun. Yang mengejutkan ketika pergi ke [41] adalah sosok anak-anak usia 2 tahunnya. Dibandingkan dengan anak usia 2 tahun di tempat penitipan yang menampung sampai usia 5 tahun, atau anak usia 2 tahun yang tidak dititipkan, mereka benar-benar tampak lebih mandiri.

Ini bukan soal mana yang baik atau mana yang buruk. [42], hidup di lingkungan di mana "aku anak kecil" dengan menjalani hari di lingkungan di mana "aku anak paling besar", menurut saya tetap akan memunculkan perbedaan dalam tindakan maupun kesadaran.

Menurut saya, hal itu paling mencolok terlihat pada anak-anak saat naik ke kelas 1 SD.

Sebelum masuk sekolah, ketika masih menjadi anak kelas tertua (catatan 1) di tempat penitipan anak atau TK, mereka membantu teman-teman kecil berganti pakaian, menjalankan tugas piket seperti makan siang dan bersih-bersih, dan mengumpulkan berbagai pengalaman dalam beragam kegiatan melalui bermain.

Anak kelas tertua adalah kakak laki-laki dan kakak perempuan keren yang bisa melakukan apa saja.

Namun, [43] SD, anak kelas 1 menjadi sosok kecil dan imut yang diurus orang lain. Kedudukan mereka berbalik seketika.

Di antara anak kelas 1 yang digandeng tangannya oleh anak kelas 6 dan diantar ke toilet, ada juga yang tanpa diduga menyesuaikan diri dengan situasi itu dengan wajah yang tampaknya tidak keberatan (catatan 2). Itu pun lucu dengan caranya sendiri, tetapi...

Namun, ada juga yang lain. Bukan, sebenarnya saya pikir banyak anak kelas 1 yang merasa "kenapa? mengapa?" terhadap diurus-urus seperti itu.

"Padahal aku sudah besar!" begitu.

Anak kelas 1 yang berwajah tidak puas seperti itu sungguh [44].

Anak-anak menaruh harapan besar pada hari esok mereka. Saya pikir harapan itulah yang merupakan ketangguhan anak-anak.

(Catatan 1) 年長児: anak dari kelas dengan usia paling tua (di penitipan/TK)
(Catatan 2) まんざらでもない: tampaknya tidak keberatan`,
    },

    // ── 問題8 (1)：わかりやすい番組 ──
    "8-1": {
      yomi: `テレビ{番組|ばんぐみ}は、その{番組|ばんぐみ}{内容|ないよう}のすべてが{視聴者|しちょうしゃ}に{伝|つた}わるよう、わかるように{作|つく}られるが、{一歩|いっぽ}{間違|まちが}えれば、「わかりやすいだけの{番組|ばんぐみ}づくり」になってしまう{危険性|きけんせい}がある。メッセージがシンプルな{番組|ばんぐみ}のほうが{視聴率|しちょうりつ}を{取|と}りやすい、などと{言|い}われる{傾向|けいこう}があるなかで、「わかりやすく」することでかえって、{事象|じしょう}や{事実|じじつ}の、{深|ふか}さ、{複雑|ふくざつ}さ、{多面性|ためんせい}、つまり{事実|じじつ}の{豊|ゆた}かさを、そぎ（{注|ちゅう}）{落|お}としてしまう{危険性|きけんせい}があるのだ。とりわけ{報道|ほうどう}{番組|ばんぐみ}では、このことは{致命的|ちめいてき}な{危|あや}うさになる。

（{注|ちゅう}）そぎ{落|お}とす：{削|けず}る`,
      arti: `Acara televisi dibuat agar dapat dipahami sehingga seluruh isinya tersampaikan kepada penonton, tetapi jika salah langkah sedikit saja, ada bahaya hal itu berubah menjadi "pembuatan acara yang sekadar mudah dipahami". Di tengah kecenderungan anggapan bahwa acara dengan pesan sederhana lebih mudah meraih rating, justru dengan membuat sesuatu "mudah dipahami", ada bahaya kita memangkas (catatan) kedalaman, kerumitan, dan keberagaman sisi dari peristiwa dan fakta — dengan kata lain, kekayaan fakta itu sendiri. Terutama dalam acara berita, hal ini menjadi bahaya yang fatal.

(Catatan) そぎ落とす: memangkas, mengikis`,
    },

    // ── 問題8 (2)：失敗する権利 ──
    "8-2": {
      yomi: `{人材|じんざい}{育成|いくせい}という{場面|ばめん}では、{相手|あいて}に「{失敗|しっぱい}する{権利|けんり}」をもっと{与|あた}えてもいいような{気|き}がします。それはなによりも「{失敗|しっぱい}する{権利|けんり}」を{与|あた}えることが、{相手|あいて}の{自発性|じはつせい}を{生|う}み{出|だ}すことに{結|むす}びつくからです。

{逆|ぎゃく}にいえば「{失敗|しっぱい}する{権利|けんり}」がないところでは、{行動|こうどう}がどうしても「しなければならない」の{連続|れんぞく}になり、{自発性|じはつせい}よりも{義務感|ぎむかん}を{助長|じょちょう}してしまいます。

{自分|じぶん}はどのくらい{相手|あいて}に「{失敗|しっぱい}する{権利|けんり}」を{与|あた}えているのか、{一度|いちど}{立|た}ち{止|ど}まって{考|かんが}える{価値|かち}はあるでしょう。`,
      arti: `Dalam konteks pengembangan sumber daya manusia, saya merasa kita boleh memberi lebih banyak "hak untuk gagal" kepada orang lain. Sebab, yang terpenting, memberi "hak untuk gagal" berkaitan dengan munculnya inisiatif (kemauan sendiri) pada orang tersebut.

Sebaliknya, di tempat yang tidak ada "hak untuk gagal", tindakan mau tidak mau menjadi rangkaian "harus melakukan", sehingga yang tumbuh justru rasa kewajiban, bukan inisiatif.

Ada baiknya kita berhenti sejenak dan memikirkan seberapa banyak "hak untuk gagal" yang sudah kita berikan kepada orang lain.`,
    },

    // ── 問題8 (3)：直感力 ──
    "8-3": {
      yomi: `{直感力|ちょっかんりょく}は{即座|そくざ}に{作用|さよう}する{場合|ばあい}もあれば、{逆|ぎゃく}に{時間|じかん}を{置|お}いて、ある{日|ひ}{突然|とつぜん}{作用|さよう}することもあります。{言|い}い{方|かた}を{変|か}えれば、{気|き}まぐれな{存在|そんざい}とも{言|い}えます。

しかし、その{気|き}まぐれとも{思|おも}える{直感力|ちょっかんりょく}による「{発見|はっけん}や{気|き}づき」は、{考|かんが}え{続|つづ}けたり、{悩|なや}み{続|つづ}ける、といった{努力|どりょく}と{強|つよ}い{指向性|しこうせい}（{注|ちゅう}）の{結果|けっか}として{生|う}まれてくる「{閃|ひらめ}き」であって、{探求|たんきゅう}への{意識|いしき}{関心|かんしん}がないところに{発生|はっせい}することはありません。つまり、{強|つよ}い{探求心|たんきゅうしん}と{問題|もんだい}{意識|いしき}を{持|も}ち{続|つづ}けた{結果|けっか}として、あとから{直感|ちょっかん}が{働|はたら}いてくるわけです。

（{注|ちゅう}）{指向性|しこうせい}：ここでは、{特定|とくてい}の{方向|ほうこう}に{向|む}かう{意識|いしき}`,
      arti: `Intuisi ada kalanya bekerja seketika, tetapi sebaliknya ada juga yang bekerja setelah jeda waktu, tiba-tiba pada suatu hari. Dengan kata lain, intuisi bisa disebut sesuatu yang sesuka hati (tak menentu).

Namun, "penemuan dan kesadaran" yang lahir dari intuisi yang tampak sesuka hati itu sebenarnya adalah "ilham" yang muncul sebagai hasil dari usaha seperti terus berpikir dan terus bergulat, serta dari kesadaran terarah (catatan) yang kuat; ilham tidak akan muncul di tempat yang tidak ada kesadaran dan minat untuk menyelidiki. Artinya, intuisi baru bekerja belakangan sebagai hasil dari terus memiliki rasa ingin menyelidiki yang kuat dan kesadaran akan masalah.

(Catatan) 指向性: di sini, kesadaran yang mengarah ke arah tertentu`,
    },

    // ── 問題8 (4)：思い出 ──
    "8-4": {
      yomi: `「{思|おも}い{出|で}」とは、「かつて」の{私|わたし}の{出来事|できごと}について、「いま」の{私|わたし}の{内|うち}で{生起|せいき}する「{心|こころ}の{動|うご}き」のことだ。{嫌|いや}な{不愉快|ふゆかい}な「{思|おも}い{出|で}」は{自|おの}ずと{封印|ふういん}されて（{注|ちゅう}1）{縮小|しゅくしょう}してもゆくが、{一方|いっぽう}の{楽|たの}しい{愉快|ゆかい}な「{思|おも}い{出|で}」は{止|と}め{処|ど}なく（{注|ちゅう}2）{過剰|かじょう}に{膨|ふく}らみ、{出来事|できごと}の{事実|じじつ}を{超|こ}えて{一|ひと}つの「{物語|ものがたり}」が{出来上|できあ}がってしまうことも{多|おお}い。「かつて」から{経|へ}た{時間|じかん}が{遠|とお}くなればなるほど（{老|お}いるほど）、{思|おも}い{違|ちが}いや{思|おも}い{込|こ}みを{含|ふく}んだ「{私|わたし}の{記憶|きおく}」が{作|つく}られる、そうなりがちだ。

（{注|ちゅう}1）{封印|ふういん}されて：ここでは、{触|ふ}れられずに
（{注|ちゅう}2）{止|と}め{処|ど}なく：{止|と}まることなく`,
      arti: `"Kenangan" adalah "gerak hati" yang timbul di dalam diri saya "sekarang" mengenai peristiwa yang saya alami "dahulu". Kenangan yang buruk dan tidak menyenangkan dengan sendirinya tersegel (catatan 1) dan mengecil, sementara kenangan yang menyenangkan dan gembira mengembang berlebihan tanpa henti (catatan 2), dan tidak jarang melampaui fakta peristiwanya hingga terbentuk sebuah "kisah". Makin jauh waktu yang berlalu dari "dahulu" (makin menua), makin terbentuk "ingatan saya" yang mengandung salah ingat dan prasangka — kecenderungannya memang begitu.

(Catatan 1) 封印されて: di sini, tidak disentuh
(Catatan 2) 止め処なく: tanpa berhenti`,
    },

    // ── 問題9 (1)：型と基本原理 ──
    "9-1": {
      yomi: `{巷|ちまた}によくある{料理本|りょうりぼん}について、{私|わたし}がかねがね{不満|ふまん}に{思|おも}っていたことがある。

それは、たとえば{炒飯|チャーハン}ならば、{一|いち}、フライパンを{熱|ねっ}する。{二|に}、{大|おお}さじ{二杯|にはい}のサラダ{油|あぶら}を{入|い}れる。{三|さん}、{溶|と}き{卵|たまご}を{入|い}れる。……といった{感|かん}じに{書|か}かれていることが{多|おお}くて、なぜそうするのかが{書|か}かれていないのだ。なぜフライパンを{熱|ねっ}してから{油|あぶら}を{入|い}れるのか。なぜ{溶|と}き{卵|たまご}をこのタイミングで{入|い}れるのか。{私|わたし}は、そういうことが{知|し}りたい。{型|かた}というかマニュアルが{欲|ほ}しいのではなく、その{型|かた}が{生|う}み{出|だ}された{基本|きほん}{原理|げんり}が{知|し}りたいのである。

{基本|きほん}{原理|げんり}さえつかめれば、これは{他|ほか}にも{広|ひろ}く{応用|おうよう}が{利|き}くので、{後々|あとあと}{役立|やくだ}つ{度合|どあ}いが{大|おお}きい。{個別|こべつ}の{型|かた}だけを{学|まな}んでも、それは{他|ほか}のことに{応用|おうよう}できるのかできないのか{判断|はんだん}がつかないし、{応用|おうよう}したとしても、その{範囲|はんい}はかなり{限定|げんてい}されてしまう。そして{何|なに}より、ただ{誰|だれ}かの{作|つく}った{型|かた}に{理由|りゆう}もわからず{無自覚|むじかく}なまま{従|したが}っていること{自体|じたい}が、{私|わたし}にはとても{気持|きも}ちが{悪|わる}いのだ。

（{中略|ちゅうりゃく}）

{型|かた}というものは、それを{考案|こうあん}した{人|ひと}{自身|じしん}に{最|もっと}も{必要|ひつよう}だったものであって、{必|かなら}ずしもすべての{人|ひと}に{有益|ゆうえき}とは{限|かぎ}らない。{真|しん}に{学|まな}ぶとは、{誰|だれ}かの{型|かた}をコピーすることではなく、そこからエッセンスを{抽出|ちゅうしゅつ}して、{自分|じぶん}に{合|あ}ったやり{方|かた}を{生|う}み{出|だ}すことではないだろうか。

マニュアルを{使|つか}うことに{慣|な}らされた{現代|げんだい}だからこそ、{白紙|はくし}の{状態|じょうたい}から{必要|ひつよう}なやり{方|かた}をその{都度|つど}{見|み}つけ{出|だ}せるような{人間|にんげん}を{育|そだ}てていく{必要|ひつよう}があるのではないかと、{私|わたし}はいろんな{場面|ばめん}で{思|おも}うのである。`,
      arti: `Ada satu hal yang sejak lama membuat saya tidak puas tentang buku-buku resep yang banyak beredar di masyarakat.

Yaitu, misalnya untuk nasi goreng, sering kali ditulis seperti: satu, panaskan wajan. Dua, masukkan dua sendok makan minyak sayur. Tiga, masukkan telur kocok... dan seterusnya, tetapi tidak ditulis mengapa harus dilakukan begitu. Mengapa minyak dimasukkan setelah wajan dipanaskan? Mengapa telur kocok dimasukkan pada saat ini? Hal-hal seperti itulah yang ingin saya ketahui. Saya tidak menginginkan pola atau manual, melainkan ingin tahu prinsip dasar yang melahirkan pola tersebut.

Asalkan prinsip dasarnya bisa ditangkap, prinsip itu bisa diterapkan secara luas pada hal lain, sehingga kegunaannya di kemudian hari besar. Kalau hanya mempelajari pola satu per satu, kita tidak bisa menilai apakah pola itu bisa diterapkan pada hal lain atau tidak, dan kalaupun diterapkan, cakupannya akan sangat terbatas. Dan yang terutama, sekadar mengikuti pola buatan orang lain tanpa tahu alasannya dan tanpa sadar — hal itu sendiri terasa sangat tidak nyaman bagi saya.

(dihilangkan)

Pola pada dasarnya adalah sesuatu yang paling dibutuhkan oleh orang yang merancangnya sendiri, dan belum tentu bermanfaat bagi semua orang. Belajar yang sejati bukankah bukan menyalin pola orang lain, melainkan menyaring esensinya lalu melahirkan cara yang cocok bagi diri sendiri?

Justru karena di zaman sekarang kita sudah dibiasakan memakai manual, saya di berbagai kesempatan berpikir bahwa kita perlu membesarkan manusia yang mampu menemukan cara yang diperlukan setiap kali, dari keadaan kertas kosong.`,
    },

    // ── 問題9 (2)：アニメーション作り ──
    "9-2": {
      yomi: `これまでずいぶんたくさんアニメーションを{作|つく}ってきましたが、しかしなかなか{未|いま}だに{巧|うま}くアニメーションを{作|つく}るのは{難|むずか}しく、{大変|たいへん}です。いつもどう{作|つく}ったらよいのか、{作|つく}り{始|はじ}めてからもとまどってしまうのです。しかし{少|すこ}しずつ{形|かたち}になってくると、ふつふつ（{注|ちゅう}1）と{楽|たの}しくなってくるのです。そしてできあがってきたイメージと{自分|じぶん}の{頭|あたま}の{中|なか}のイメージとの、{一致|いっち}とズレを{近|ちか}づけたり、{遠|とお}ざけたりするために、たくさんの{作業|さぎょう}を{積|つ}み{重|かさ}ねて、{最後|さいご}には、どこかであきらめを{付|つ}けて、{終|お}わりにします。

ただその{時|とき}には{終|お}わったと{思|おも}っても、{少|すこ}し{時間|じかん}を{置|お}いてみると、もう{少|すこ}しこうすればよかった、ああすればよかったと、{後悔|こうかい}ばかりが{浮|う}かんできて、{自分|じぶん}のアニメーションの{上映会|じょうえいかい}に{立|た}ち{会|あ}う{時|とき}は、いたたまれない{思|おも}いがします。アニメーションに{限|かぎ}らず、クリエーター（{注|ちゅう}2）は{多|おお}かれ{少|すく}なかれ、ただ{楽|たの}しいばかりではなく、こんな{思|おも}いをしながら、{次|つぎ}こそは{自分|じぶん}のベストを{形|かたち}にしようと、{日々|ひび}まるで「{修行|しゅぎょう}」のように{物作|ものづく}りに{追|お}われていくのではないでしょうか。いつかは、この{魔物|まもの}から{逃|のが}れて、{心|こころ}{安|やす}らかな{日|ひ}が{訪|おとず}れるのを{夢想|むそう}しながら。

（{中略|ちゅうりゃく}）

{現実|げんじつ}{世界|せかい}には、{辛|つら}いことや{思|おも}いどおりにならないこともたくさんありますが、{創作|そうさく}{活動|かつどう}の{中|なか}、{精神|せいしん}の{世界|せかい}で{自由|じゆう}に{羽|はね}を{伸|の}ばせる{時|とき}、そこには{他|ほか}のいろいろな{楽|たの}しい{娯楽|ごらく}では{味|あじ}わえない{深|ふか}い{喜|よろこ}びがあり、それがこの{魔物|まもの}から{逃|のが}れられない{理由|りゆう}のひとつです。

そして、{言葉|ことば}にはできない{価値観|かちかん}をうまく{作品|さくひん}として{整|ととの}えられた{時|とき}、それは{人|ひと}の{反応|はんのう}や{評価|ひょうか}を{超|こ}えた、{絶対的|ぜったいてき}な{充実感|じゅうじつかん}を{与|あた}えてくれるものと{信|しん}じています。

（{注|ちゅう}1）ふつふつと：{心|こころ}の{中|なか}からわいてくるように
（{注|ちゅう}2）クリエーター：{創造的|そうぞうてき}な{仕事|しごと}に{携|たずさ}わっている{人|ひと}`,
      arti: `Sejauh ini saya sudah membuat cukup banyak animasi, tetapi sampai sekarang pun membuat animasi dengan baik itu sulit dan berat. Saya selalu bingung bagaimana sebaiknya membuatnya, bahkan setelah mulai mengerjakannya. Namun, ketika sedikit demi sedikit mulai berbentuk, rasa senang pun muncul meluap-luap (catatan 1). Lalu, untuk mendekatkan atau menjauhkan kecocokan dan selisih antara gambaran yang mulai jadi dengan gambaran di kepala saya, saya menumpuk banyak pekerjaan, dan pada akhirnya, di satu titik saya merelakannya dan mengakhirinya.

Hanya saja, meskipun saat itu saya merasa sudah selesai, setelah memberi jeda waktu sedikit, yang muncul hanyalah penyesalan: "Seharusnya sedikit begini", "Seharusnya begitu", sehingga ketika menghadiri pemutaran animasi saya sendiri, saya merasa tidak tahan duduk di sana. Bukan hanya animasi, bukankah para kreator (catatan 2), sedikit banyak, tidak hanya merasakan kesenangan, tetapi juga perasaan seperti ini, sambil bertekad "kali berikutnya saya akan mewujudkan karya terbaik saya", lalu setiap hari dikejar-kejar kegiatan berkarya seolah sedang menjalani "latihan pertapaan"? Sambil memimpikan suatu hari nanti terbebas dari makhluk gaib ini dan datangnya hari-hari yang tenang di hati.

(dihilangkan)

Di dunia nyata ada banyak hal yang menyakitkan dan tidak berjalan sesuai keinginan, tetapi ketika dalam kegiatan berkarya kita bisa merentangkan sayap dengan bebas di dunia batin, di sana ada kebahagiaan mendalam yang tidak bisa dirasakan lewat berbagai hiburan menyenangkan lainnya, dan itulah salah satu alasan kita tidak bisa lepas dari makhluk gaib ini.

Dan ketika nilai-nilai yang tak bisa diungkapkan dengan kata-kata berhasil ditata dengan baik menjadi sebuah karya, saya percaya hal itu memberikan rasa puas mutlak yang melampaui reaksi dan penilaian orang lain.

(Catatan 1) ふつふつと: seperti meluap dari dalam hati
(Catatan 2) クリエーター: orang yang bergelut di pekerjaan kreatif`,
    },

    // ── 問題9 (3)：外部脳と前頭葉 ──
    "9-3": {
      yomi: `{人間|にんげん}の{脳|のう}の{一部|いちぶ}に、{前頭葉|ぜんとうよう}というものがある。

この{前頭葉|ぜんとうよう}は、{意欲|いよく}や{感情|かんじょう}のコントロール、{思考|しこう}や{想像|そうぞう}のスイッチ{機能|きのう}を{果|は}たしていると{考|かんが}えられている。そして、{長期|ちょうき}{記憶|きおく}を{保持|ほじ}する{役割|やくわり}も{担|にな}っている。しかしここが、{脳|のう}の{中|なか}で{一番|いちばん}{早|はや}く{老化|ろうか}が{始|はじ}まるのだという。（{中略|ちゅうりゃく}）

{前頭葉|ぜんとうよう}の{老化|ろうか}に{拍車|はくしゃ}をかけると{懸念|けねん}されているものがある。デジタル（{注|ちゅう}1）だ。{人間|にんげん}がパソコンやスマートフォン（{注|ちゅう}2）、インターネットなどに{頼|たよ}り{過|す}ぎるようになったことで、{自分|じぶん}の{頭|あたま}の{中|なか}に{情報|じょうほう}や{知識|ちしき}を{蓄積|ちくせき}したり、{繰|く}り{返|かえ}し{引|ひ}き{出|だ}す{機会|きかい}が{減|へ}った。それが{前頭葉|ぜんとうよう}の{老化|ろうか}をいっそう{促|うなが}しているという{指摘|してき}がある。

デジタルの{中|なか}に{蓄|たくわ}えられる{莫大|ばくだい}な{情報|じょうほう}を、{人間|にんげん}に{新|あら}たに{与|あた}えられた「{外部脳|がいぶのう}」だと{解釈|かいしゃく}し、これが{人間|にんげん}の{脳|のう}の{効率化|こうりつか}につながるのだという{見解|けんかい}が{増|ふ}えた。{外部脳|がいぶのう}を{持|も}てば、{自分|じぶん}の{脳|のう}を{記憶|きおく}{装置|そうち}にせず、{思考|しこう}の{場|ば}として{徹底|てってい}できる、そう{考|かんが}える{専門家|せんもんか}も{少|すく}なくない。

しかし、{外部脳|がいぶのう}に{頼|たよ}ることの{代償|だいしょう}が{前頭葉|ぜんとうよう}の{老化|ろうか}{促進|そくしん}だとすれば、この{考|かんが}えに{対|たい}しては{慎重|しんちょう}に{対峙|たいじ}（{注|ちゅう}3）しなければならない。

{自分|じぶん}の{脳|のう}の{中|なか}に{情報|じょうほう}や{知識|ちしき}を{記憶|きおく}し、それを{駆使|くし}してこそ{生|う}まれる{連想|れんそう}や{判断|はんだん}というものがある。これを{頻繁|ひんぱん}に{繰|く}り{返|かえ}すことで、{人間|にんげん}の{脳|のう}の{潜在力|せんざいりょく}が{引|ひ}き{出|だ}され、{老化|ろうか}も{防|ふせ}ぐことができる。{外部脳|がいぶのう}ができたことを{謳歌|おうか}する{前|まえ}に、{自分|じぶん}の{脳|のう}を{鍛|きた}え、{活用|かつよう}することの{重要性|じゅうようせい}を{再認識|さいにんしき}する{必要|ひつよう}がありそうだ。{闇雲|やみくも}に（{注|ちゅう}4）デジタルへ{脳|のう}の{役目|やくめ}を{託|たく}すことは、{危険|きけん}を{伴|ともな}うと{言|い}わざるを{得|え}ない。{外部脳|がいぶのう}に{人間|にんげん}の{脳|のう}が{持|も}つ{元来|がんらい}の{力|ちから}を{奪|うば}われかねないのだから。

（{注|ちゅう}1）デジタル：ここでは、デジタル{機器|きき}
（{注|ちゅう}2）スマートフォン：パソコンの{機能|きのう}もある{携帯|けいたい}{電話|でんわ}
（{注|ちゅう}3）{対峙|たいじ}する：{向|む}き{合|あ}う
（{注|ちゅう}4）{闇雲|やみくも}に：{深|ふか}く{考|かんが}えずに`,
      arti: `Salah satu bagian otak manusia adalah lobus frontal.

Lobus frontal ini diyakini berfungsi mengendalikan motivasi dan emosi, serta menjadi sakelar bagi pikiran dan imajinasi. Selain itu, ia juga berperan menyimpan ingatan jangka panjang. Namun, konon bagian inilah yang paling awal mengalami penuaan di dalam otak. (dihilangkan)

Ada sesuatu yang dikhawatirkan mempercepat penuaan lobus frontal. Yaitu perangkat digital (catatan 1). Karena manusia menjadi terlalu bergantung pada komputer, ponsel pintar (catatan 2), internet, dan sebagainya, kesempatan untuk menyimpan informasi dan pengetahuan di dalam kepala sendiri serta memanggilnya kembali berulang-ulang menjadi berkurang. Ada yang menunjukkan bahwa hal itu semakin mempercepat penuaan lobus frontal.

Makin banyak pandangan yang menafsirkan informasi berlimpah yang tersimpan di dalam perangkat digital sebagai "otak eksternal" yang baru diberikan kepada manusia, dan bahwa hal ini akan meningkatkan efisiensi otak manusia. Tidak sedikit pula ahli yang berpikir bahwa dengan memiliki otak eksternal, kita tidak perlu menjadikan otak sendiri sebagai alat penyimpan ingatan, melainkan bisa sepenuhnya menjadikannya tempat untuk berpikir.

Namun, jika harga yang harus dibayar karena bergantung pada otak eksternal adalah percepatan penuaan lobus frontal, kita harus menghadapi (catatan 3) pemikiran ini dengan hati-hati.

Ada asosiasi dan penilaian yang justru baru lahir ketika kita menyimpan informasi dan pengetahuan di dalam otak sendiri lalu memanfaatkannya sepenuhnya. Dengan sering mengulang hal ini, potensi otak manusia dapat digali, dan penuaan pun dapat dicegah. Sebelum merayakan lahirnya otak eksternal, tampaknya kita perlu menyadari kembali pentingnya melatih dan memanfaatkan otak sendiri. Mau tidak mau harus dikatakan bahwa menyerahkan peran otak kepada perangkat digital secara membabi buta (catatan 4) mengandung bahaya. Sebab, otak eksternal bisa-bisa merampas kekuatan asli yang dimiliki otak manusia.

(Catatan 1) デジタル: di sini, perangkat digital
(Catatan 2) スマートフォン: ponsel yang juga memiliki fungsi komputer
(Catatan 3) 対峙する: menghadapi
(Catatan 4) 闇雲に: tanpa berpikir dalam-dalam`,
    },

    // ── 問題10：理解することの暴力 ──
    "10": {
      yomi: `{大学|だいがく}2（{注|ちゅう}1）{回生|かいせい}の{頃|ころ}だったか、フランス{語|ご}の{文章|ぶんしょう}を{講読|こうどく}する{授業|じゅぎょう}に{出席|しゅっせき}していたところ、なにかの{折|おり}に{先生|せんせい}が、「{分|わ}かるものを{読|よ}むのは{読書|どくしょ}ではなく、{分|わ}からないものを{読|よ}むのが{読書|どくしょ}です」、と{仰|おっしゃ}った。（{中略|ちゅうりゃく}）{先生|せんせい}の{言葉|ことば}を{聞|き}いて{当時|とうじ}の{私|わたし}は、{自分|じぶん}がそれまでに{知|し}った{限|かぎ}られた{知識|ちしき}を{確認|かくにん}するだけの{本|ほん}を{読|よ}むのではだめで、{自分|じぶん}の{知|し}らない{考|かんが}え{方|かた}や{感|かん}じ{方|かた}にふれることによって、{自分|じぶん}の{偏狭|へんきょう}（{注|ちゅう}2）な{物|もの}の{見方|みかた}を{問|と}い{直|なお}さなければならない、と{先生|せんせい}は{言|い}いたかったのだろうと{思|おも}った。{先生|せんせい}の{言葉|ことば}に{私|わたし}は{感銘|かんめい}し、その{時|とき}{以来|いらい}、{当時|とうじ}の{私|わたし}にとってとりわけ{難解|なんかい}であったフランス{現代|げんだい}{思想|しそう}の{哲学者|てつがくしゃ}や{思想家|しそうか}の{本|ほん}を、{理解|りかい}できるようになるまでとことん{読|よ}むように{心|こころ}がけた。

そんな{読書|どくしょ}を{続|つづ}けるうちに、はたして、{難解|なんかい}な{本|ほん}を{理解|りかい}するだけの{読書|どくしょ}でいいのだろうかと{自問|じもん}するようになった。というのも、{理解|りかい}するということが、そもそも{良|よ}いことかと{問|と}いかける{哲学者|てつがくしゃ}や{思想家|しそうか}の{本|ほん}を{読|よ}んだからだ。{理解|りかい}するとは、{人|ひと}であれ{物|もの}であれ、その{人|ひと}やその{物|もの}を{理|り}（{注|ちゅう}3）にかなった{仕方|しかた}で{知|し}る{良|よ}い{方法|ほうほう}だとたいていは{言|い}われる。しかしながら、{理|り}にかなった{仕方|しかた}で、その{人|ひと}の{人格|じんかく}なり、その{物|もの}の{本質|ほんしつ}なりを{知|し}ることには、{暴力的|ぼうりょくてき}なところはなにもないのだろうか。{理解|りかい}するということは、{唯一|ゆいいつ}{存在|そんざい}しているこの{人|ひと}やこの{物|もの}を、その{単独|たんどく}な{在|あ}り{方|かた}ではなく、ほかの{人|ひと}やほかの{物|もの}と{共通|きょうつう}する{一般的|いっぱんてき}な{在|あ}り{方|かた}で{捉|とら}えることだ。{私|わたし}たちがなにかを{知|し}ろうとする{際|さい}に{頼|たよ}りとする{概念|がいねん}や{観念|かんねん}は、{様々|さまざま}な{在|あ}り{方|かた}をする{諸々|もろもろ}（{注|ちゅう}4）の{存在|そんざい}に{当|あ}てはまるから{役|やく}に{立|た}つ。{概念|がいねん}や{観念|かんねん}は{私|わたし}たちが{知|し}ろうとする{対象|たいしょう}の{在|あ}り{方|かた}に{力|ちから}を{加|くわ}えるわけではないのだから、{知|し}る{私|わたし}たちと{知|し}られる{対象|たいしょう}の{間|あいだ}に{立|た}つ{中立的|ちゅうりつてき}な{光|ひかり}のようなものだと{見|み}なされている。{的確|てきかく}な{概念|がいねん}や{観念|かんねん}をとおして{諸々|もろもろ}の{存在|そんざい}を{理解|りかい}するのは、{正|ただ}しい{学問|がくもん}だとされてきた。しかしながら、たとえそれが{正|ただ}しくても、この{人|ひと}やこの{物|もの}が{持|も}っている{単独|たんどく}のなにかは、{理解|りかい}では{捉|とら}えられないまま、{知|ち}それ{自体|じたい}のなかで{忘却|ぼうきゃく}（{注|ちゅう}5）されてしまいがちだ。なにかを{理解|りかい}できるということは、たしかに{人間|にんげん}の{優|すぐ}れた{能力|のうりょく}である。が、それは{武器|ぶき}であり、この{至高|しこう}（{注|ちゅう}6）の{武器|ぶき}の{前|まえ}では、およそ{存在|そんざい}するものはなんであれ、ほとんど{抵抗|ていこう}することができないということを{心得|こころえ}ていなければならない。

（{注|ちゅう}1）2{回生|かいせい}：2{年生|ねんせい}
（{注|ちゅう}2）{偏狭|へんきょう}な：{偏|かたよ}っていて{狭|せま}い
（{注|ちゅう}3）{理|り}にかなった：{合理的|ごうりてき}な
（{注|ちゅう}4）{諸々|もろもろ}の：ここでは、あらゆる
（{注|ちゅう}5）{忘却|ぼうきゃく}する：{忘|わす}れ{去|さ}る
（{注|ちゅう}6）{至高|しこう}：{最高|さいこう}`,
      arti: `Kalau tidak salah, waktu saya mahasiswa tingkat 2 (catatan 1), saat mengikuti kuliah membaca teks berbahasa Prancis, pada suatu kesempatan dosen saya berkata, "Membaca sesuatu yang kita pahami bukanlah membaca; membaca sesuatu yang tidak kita pahami, itulah membaca." (dihilangkan) Mendengar perkataan dosen itu, saya waktu itu berpikir bahwa yang ingin beliau sampaikan barangkali adalah: tidak cukup membaca buku yang hanya memastikan pengetahuan terbatas yang sudah kita ketahui sebelumnya; kita harus mempertanyakan ulang cara pandang kita yang sempit (catatan 2) dengan bersentuhan dengan cara berpikir dan cara merasa yang tidak kita ketahui. Saya terkesan oleh perkataan dosen itu, dan sejak saat itu saya berusaha membaca buku-buku para filsuf dan pemikir aliran pemikiran Prancis modern — yang bagi saya waktu itu sangat sulit dipahami — secara tuntas sampai saya bisa memahaminya.

Seiring terus membaca seperti itu, saya mulai bertanya pada diri sendiri: apakah benar cukup dengan membaca yang hanya bertujuan memahami buku-buku sulit? Sebab, saya membaca buku para filsuf dan pemikir yang mempertanyakan apakah memahami itu pada dasarnya hal yang baik. Biasanya dikatakan bahwa memahami adalah cara yang baik untuk mengenal seseorang atau sesuatu — entah orang entah benda — dengan cara yang masuk akal (catatan 3). Akan tetapi, apakah sama sekali tidak ada unsur kekerasan dalam mengenal kepribadian seseorang atau hakikat suatu benda dengan cara yang masuk akal? Memahami berarti menangkap orang ini atau benda ini, yang keberadaannya satu-satunya, bukan dalam keberadaannya yang tunggal, melainkan dalam keberadaan umum yang sama dengan orang dan benda lain. Konsep dan gagasan yang kita andalkan ketika ingin mengenal sesuatu berguna karena dapat diterapkan pada segala (catatan 4) keberadaan dengan wujud yang beragam. Karena konsep dan gagasan tidak memberi tekanan pada wujud objek yang ingin kita kenali, keduanya dianggap seperti cahaya netral yang berdiri di antara kita yang mengenal dan objek yang dikenali. Memahami segala keberadaan melalui konsep dan gagasan yang tepat telah dianggap sebagai ilmu pengetahuan yang benar. Namun, sekalipun hal itu benar, sesuatu yang tunggal yang dimiliki orang ini atau benda ini cenderung tetap tidak tertangkap oleh pemahaman dan terlupakan (catatan 5) di dalam pengetahuan itu sendiri. Mampu memahami sesuatu memang merupakan kemampuan unggul manusia. Akan tetapi, itu adalah senjata, dan kita harus menyadari bahwa di hadapan senjata tertinggi (catatan 6) ini, apa pun yang ada nyaris tidak bisa melawan.

(Catatan 1) 2回生: mahasiswa tahun ke-2
(Catatan 2) 偏狭な: berat sebelah dan sempit
(Catatan 3) 理にかなった: rasional, masuk akal
(Catatan 4) 諸々の: di sini, segala
(Catatan 5) 忘却する: melupakan sama sekali
(Catatan 6) 至高: tertinggi`,
    },

    // ── 問題11：説得力 ──
    "11": {
      yomi: `【{意見|いけん} A】
ビジネスで{相手|あいて}をうまく{説得|せっとく}したいとは{誰|だれ}もが{思|おも}うことだろう。{私|わたし}が{最|もっと}も{意識|いしき}しているのは、{相手|あいて}の{性格|せいかく}や{価値観|かちかん}、{知的|ちてき}{水準|すいじゅん}などに{応|おう}じた{説明|せつめい}のしかたをすることだ。{具体的|ぐたいてき}で{明快|めいかい}な{例|れい}を{求|もと}める{人|ひと}もいるし、データに{基|もと}づいた{緻密|ちみつ}な{説明|せつめい}を{好|この}む{人|ひと}もいる。さまざまなタイプに{合|あ}わせて{対応|たいおう}することで、{説得力|せっとくりょく}を{高|たか}められるように{努|つと}めている。

ただ、どのような{相手|あいて}でも、まずは{話|はなし}を{聞|き}いてもらえなければ{意味|いみ}がない。そのためには、{話|はな}し{方|かた}や{服装|ふくそう}などの{最低限|さいていげん}のマナーは{身|み}につけておかなければならない。{中身|なかみ}のある{話|はなし}ができればいいとこれらを{軽視|けいし}する{人|ひと}もいるが、{初対面|しょたいめん}で{悪|わる}い{印象|いんしょう}を{持|も}たれてしまうと、そもそも{話|はなし}を{聞|き}こうとは{思|おも}ってもらえず{大|おお}きなマイナスになってしまうからだ。もちろん{相手|あいて}の{印象|いんしょう}を{気|き}にしすぎるのは{問題|もんだい}だが、いい{印象|いんしょう}を{持|も}ってもらうことはプラスに{働|はたら}くことも{多|おお}いと{思|おも}う。

【{意見|いけん} B】
{説得力|せっとくりょく}を{高|たか}めるための{第一歩|だいいっぽ}は、「{送|おく}り{手|て}」としての{自分|じぶん}{自身|じしん}の{信頼度|しんらいど}を{高|たか}めること。「この{人|ひと}は{信用|しんよう}できそう」といった{印象|いんしょう}を{与|あた}えることです。{多|おお}くのビジネスパーソンが{服装|ふくそう}や{言葉|ことば}づかいを{気|き}にするのも、{信頼|しんらい}できる{印象|いんしょう}を{与|あた}えたいからに{他|ほか}なりません。

{何|なに}よりも{重要|じゅうよう}なのは、{説得|せっとく}{内容|ないよう}に{関連|かんれん}した{知識|ちしき}や{情報|じょうほう}を{十分|じゅうぶん}に{吸収|きゅうしゅう}し、{専門性|せんもんせい}を{高|たか}めておくことです。（{中略|ちゅうりゃく}）

{仕事|しごと}に{関連|かんれん}する{情報|じょうほう}というのは、{日常|にちじょう}{生活|せいかつ}の{至|いた}る{場面|ばめん}に{転|ころ}がっています。{街|まち}を{歩|ある}いていても、ショッピングモールや{行楽地|こうらくち}に{出|で}かけても、{人々|ひとびと}の{行動|こうどう}パターンやライフスタイル（{注|ちゅう}）を{知|し}るヒントが{見|み}つかります。{専門的|せんもんてき}{知識|ちしき}や{情報|じょうほう}を{生活|せいかつ}に{密着|みっちゃく}した{形|かたち}で{提示|ていじ}することができれば、より{説得力|せっとくりょく}が{増|ま}すはずです。{説得力|せっとくりょく}のある{人|ひと}には{日頃|ひごろ}から{研究|けんきゅう}{熱心|ねっしん}な{人|ひと}が{多|おお}いのもそのためです。

{好印象|こういんしょう}も{説得力|せっとくりょく}につながります。{人|ひと}の{話|はなし}に{耳|みみ}を{傾|かたむ}け、{言葉|ことば}と{心|こころ}のキャッチボールができる{人|ひと}は、{間違|まちが}いなく{好印象|こういんしょう}を{与|あた}えます。

（{注|ちゅう}）ライフスタイル：{生活|せいかつ}{様式|ようしき}`,
      arti: `【Pendapat A】
Siapa pun tentu ingin bisa membujuk lawan bicara dengan baik dalam bisnis. Yang paling saya perhatikan adalah cara menjelaskan yang disesuaikan dengan kepribadian, nilai-nilai, tingkat intelektual, dan sebagainya dari lawan bicara. Ada orang yang menginginkan contoh konkret dan jelas, ada pula yang menyukai penjelasan cermat berdasarkan data. Dengan menanggapi sesuai berbagai tipe orang, saya berusaha agar bisa meningkatkan daya bujuk saya.

Hanya saja, siapa pun lawan bicaranya, tidak ada artinya jika mereka tidak mau mendengarkan kita lebih dulu. Untuk itu, kita harus menguasai tata krama minimal seperti cara berbicara dan cara berpakaian. Ada orang yang meremehkan hal-hal ini dengan berpikir asalkan bisa berbicara hal yang berisi sudah cukup, tetapi jika pada pertemuan pertama kita meninggalkan kesan buruk, sejak awal orang tidak akan mau mendengarkan kita, dan itu menjadi kerugian besar. Tentu saja terlalu memikirkan kesan lawan bicara itu bermasalah, tetapi menurut saya membuat orang punya kesan baik sering kali berdampak positif.

【Pendapat B】
Langkah pertama untuk meningkatkan daya bujuk adalah meningkatkan tingkat kepercayaan terhadap diri sendiri sebagai "penyampai". Yaitu memberikan kesan seperti "orang ini sepertinya bisa dipercaya". Banyak pebisnis memperhatikan pakaian dan tutur kata tidak lain karena ingin memberikan kesan bisa dipercaya.

Yang terpenting dari semuanya adalah menyerap secara cukup pengetahuan dan informasi yang berkaitan dengan isi yang ingin kita sampaikan, dan meningkatkan keahlian kita. (dihilangkan)

Informasi yang berkaitan dengan pekerjaan tersebar di setiap sudut kehidupan sehari-hari. Saat berjalan di kota, atau saat pergi ke pusat perbelanjaan maupun tempat wisata, kita bisa menemukan petunjuk untuk mengetahui pola perilaku dan gaya hidup (catatan) orang-orang. Jika kita bisa menyajikan pengetahuan dan informasi khusus dalam bentuk yang dekat dengan kehidupan sehari-hari, daya bujuk kita pasti akan semakin bertambah. Itulah sebabnya di antara orang yang punya daya bujuk, banyak yang sehari-harinya tekun meneliti.

Kesan baik juga berkaitan dengan daya bujuk. Orang yang mau mendengarkan perkataan orang lain dan bisa berkomunikasi timbal balik dengan kata-kata dan hati, pasti memberikan kesan yang baik.

(Catatan) ライフスタイル: gaya hidup`,
    },

    // ── 問題12：人間が作りかえた生命 ──
    "12": {
      yomi: `{植物|しょくぶつ}は{美|うつく}しい{花|はな}を{咲|さ}かせ、{虫|むし}を{誘|さそ}った。{鳥|とり}は{飛|と}ぶために{翼|つばさ}を{生|は}やした。しかし、{生物|せいぶつ}は、{自|みずか}ら{求|もと}めてそのような{性質|せいしつ}を{得|え}たわけではない。{生命|せいめい}にとって{新|あたら}しい{変化|へんか}は{偶然|ぐうぜん}によってしか{生|う}まれない。

DNAが{複製|ふくせい}され、{親|おや}から{子|こ}に{受|う}け{渡|わた}されるとき、ごくごく{稀|まれ}に、ほんのわずかな{誤植|ごしょく}（{注|ちゅう}1）が{発生|はっせい}する。もちろん{誤植|ごしょく}はランダム（{注|ちゅう}2）におきる。ささいな{誤植|ごしょく}は{新|あら}たな{変化|へんか}をもたらす。その{変化|へんか}{自体|じたい}には{目的|もくてき}も{意図|いと}も{方向性|ほうこうせい}もない。そこから{何|なに}かを{選|えら}びとるのは{自然|しぜん}{環境|かんきょう}である。{自然|しぜん}{環境|かんきょう}に{適|てき}した{変化|へんか}は{選択|せんたく}され、{子孫|しそん}を{残|のこ}す。{環境|かんきょう}に{不適|ふてき}な{変化|へんか}は{子孫|しそん}を{残|のこ}せず、{淘汰|とうた}（{注|ちゅう}3）される。

ところがもし{本来|ほんらい}ならあっさり{淘汰|とうた}されてしまうような{変化|へんか}であっても、それを{選|えら}びとり、{守|まも}り、{育|はぐく}むような「{選択者|せんたくしゃ}」が{自然|しぜん}{以外|いがい}に{存在|そんざい}すれば、その{変化|へんか}は{生|い}きのびることができる。そんなことが{近年|きんねん}、{実|じつ}はたくさん、あちこちで{起|お}こっている。{近年|きんねん}、といってもそれは、{人間|にんげん}がこの{世界|せかい}に{出現|しゅつげん}して{以来|いらい}のこと。

たとえば{鳥|とり}。{鳥|とり}は{卵|たまご}を{産|う}むと{巣|す}に{籠|こも}って{暖|あたた}める{性質|せいしつ}を{持|も}つ。{数週間|すうしゅうかん}それに{専心|せんしん}（{注|ちゅう}4）する。しかし、もし{何|なん}らかの{突然|とつぜん}{変異|へんい}によって{鳥|とり}の{習性|しゅうせい}が{変化|へんか}し、{卵|たまご}を{産|う}んでも{暖|あたた}めることを{放棄|ほうき}してしまった。そんな{変化|へんか}は、{子孫|しそん}を{残|のこ}すのに{圧倒的|あっとうてき}に{不利|ふり}だから、たちまちそんな{鳥|とり}は{淘汰|とうた}されるはず。

ところが{人間|にんげん}はその{鳥|とり}の{卵|たまご}を{鳥|とり}に{代|か}わって{暖|あたた}め{子孫|しそん}を{増|ふ}やしてやることにした。なぜか。{鳥|とり}は{卵|たまご}を{暖|あたた}めることを{放棄|ほうき}したかわりに、またすぐに{次|つぎ}の{卵|たまご}を{作|つく}りはじめる{性質|せいしつ}を{持|も}っていたから。こうして{現在|げんざい}、{私|わたし}たち{人間|にんげん}は、{毎日|まいにち}{排卵|はいらん}（{注|ちゅう}5）し、{毎日|まいにち}のように{卵|たまご}を{産|う}みっぱなしにして{平然|へいぜん}としている{鳥|とり}、すなわち、{一年|いちねん}に300{個|こ}{以上|いじょう}も{卵|たまご}を{産|う}み{続|つづ}けるニワトリ、①ホワイトレグホンを{選|えら}びとった。

たとえば②カイコ（{注|ちゅう}6）。カイコはもともとクワコという{蛾|が}の{一種|いっしゅ}だった。{人間|にんげん}が{常時|じょうじ}、{餌|えさ}を{供給|きょうきゅう}して{人工的|じんこうてき}な{環境|かんきょう}を{与|あた}えた。すると{幼虫|ようちゅう}は{自分|じぶん}で{餌|えさ}を{探索|たんさく}するのをサボるようになった。その{分|ぶん}の{余力|よりょく}をもっと{別|べつ}なこと、つまり{絹糸|きぬいと}を{作|つく}り{出|だ}す{能力|のうりょく}に{振|ふ}り{向|む}けるような{種|しゅ}が{選別|せんべつ}された。かくして{自分|じぶん}ではほとんど{動|うご}けず、{必要|ひつよう}{以上|いじょう}に{大|おお}きく{厚手|あつで}の{繭|まゆ}（{注|ちゅう}7）を{作|つく}りだし、そこから{出|で}ることも{飛|と}ぶこともできないような{昆虫|こんちゅう}が{作|つく}り{出|だ}された。カイコは{人間|にんげん}がいないと{生|い}きていけない。

（{中略|ちゅうりゃく}）

{人間|にんげん}がその{進化|しんか}のプロセスに{介入|かいにゅう}し、{自然|しぜん}になりかわって{選択者|せんたくしゃ}としてふるまい、{作|つく}りかえ、{新|あら}たに{生|う}み{出|だ}した{生命|せいめい}。その{生命|せいめい}たちはもはや{人間|にんげん}なしでは{生|い}きていくことができない。{一方|いっぽう}、{人間|にんげん}もまたそんな{生命|せいめい}に{助|たす}けられ、あるいは{支|ささ}えられて{生|い}きている。これは{人間|にんげん}と{人間|にんげん}が{作|つく}り{出|だ}した{生命|せいめい}との{新|あら}たな{共生|きょうせい}{関係|かんけい}とも{呼|よ}べる。

{人間|にんげん}が{登場|とうじょう}して{以来|いらい}、{進化|しんか}の{歴史|れきし}は{新|あたら}しい{局面|きょくめん}を{迎|むか}えた。{人|ひと}が{作|つく}りかえたいのち。それに{対|たい}して{人間|にんげん}はきちんと{責任|せきにん}を{取|と}らなければならない。

（{注|ちゅう}1）{誤植|ごしょく}：ここでは、ずれ
（{注|ちゅう}2）ランダムに：{偶然|ぐうぜん}に
（{注|ちゅう}3）{淘汰|とうた}される：ここでは、{滅|ほろ}びる
（{注|ちゅう}4）{専心|せんしん}する：{集中|しゅうちゅう}する
（{注|ちゅう}5）{排卵|はいらん}する：ここでは、{体|からだ}の{中|なか}で{卵|たまご}を{作|つく}る
（{注|ちゅう}6）カイコ：{絹糸|きぬいと}を{作|つく}り{出|だ}す{虫|むし}
（{注|ちゅう}7）{繭|まゆ}：{虫|むし}が{自身|じしん}を{包|つつ}むための{球状|きゅうじょう}の{覆|おお}い`,
      arti: `Tumbuhan mekarkan bunga yang indah dan mengundang serangga. Burung menumbuhkan sayap untuk terbang. Akan tetapi, makhluk hidup tidak memperoleh sifat-sifat seperti itu karena menginginkannya sendiri. Bagi kehidupan, perubahan baru hanya lahir karena kebetulan.

Ketika DNA disalin dan diwariskan dari induk ke anak, sangat-sangat jarang terjadi salah cetak (catatan 1) yang amat kecil. Tentu saja salah cetak itu terjadi secara acak (catatan 2). Salah cetak yang kecil membawa perubahan baru. Perubahan itu sendiri tidak memiliki tujuan, maksud, maupun arah. Yang memilih sesuatu dari situ adalah lingkungan alam. Perubahan yang sesuai dengan lingkungan alam terpilih dan meninggalkan keturunan. Perubahan yang tidak sesuai dengan lingkungan tidak dapat meninggalkan keturunan dan tersisih (catatan 3).

Namun, seandainya ada "pemilih" selain alam yang memilih, melindungi, dan memelihara perubahan yang semestinya dengan mudah tersisih, perubahan itu bisa bertahan hidup. Sebenarnya hal seperti itu banyak terjadi di mana-mana belakangan ini. Meskipun dikatakan "belakangan ini", maksudnya adalah sejak manusia muncul di dunia ini.

Misalnya burung. Burung memiliki sifat, setelah bertelur, mengurung diri di sarang dan mengerami telurnya. Selama beberapa minggu ia berkonsentrasi (catatan 4) pada hal itu. Namun, misalkan karena suatu mutasi mendadak, kebiasaan burung itu berubah, dan meskipun bertelur ia meninggalkan tugas mengerami. Perubahan seperti itu sangat merugikan untuk meninggalkan keturunan, sehingga burung semacam itu seharusnya segera tersisih.

Akan tetapi, manusia memutuskan untuk mengerami telur burung itu menggantikan si burung dan memperbanyak keturunannya. Mengapa? Karena sebagai ganti meninggalkan tugas mengerami, burung itu memiliki sifat segera mulai membuat telur berikutnya. Dengan begitu, kini kita manusia telah memilih burung yang setiap hari berovulasi (catatan 5) dan dengan tenang membiarkan telurnya begitu saja hampir setiap hari — yaitu ayam yang terus bertelur lebih dari 300 butir setahun, ① White Leghorn.

Contoh lainnya ② ulat sutra (catatan 6). Ulat sutra pada awalnya adalah sejenis ngengat bernama kuwako. Manusia terus-menerus memasok makanan dan memberikan lingkungan buatan. Akibatnya, larvanya menjadi malas mencari makan sendiri. Lalu terseleksilah jenis yang mengalihkan sisa tenaganya itu ke hal lain, yaitu kemampuan menghasilkan benang sutra. Dengan demikian, tercipta serangga yang hampir tidak bisa bergerak sendiri, membuat kepompong (catatan 7) yang lebih besar dan tebal dari yang diperlukan, dan tidak bisa keluar dari situ maupun terbang. Ulat sutra tidak bisa hidup tanpa manusia.

(dihilangkan)

Kehidupan yang diciptakan manusia dengan campur tangan dalam proses evolusi, berperan sebagai pemilih menggantikan alam, mengubahnya, dan melahirkannya secara baru. Kehidupan-kehidupan itu kini sudah tidak bisa hidup tanpa manusia. Di sisi lain, manusia pun hidup dengan dibantu atau ditopang oleh kehidupan-kehidupan tersebut. Ini bisa disebut sebagai hubungan simbiosis baru antara manusia dan kehidupan yang diciptakan manusia.

Sejak manusia muncul, sejarah evolusi memasuki babak baru. Kehidupan yang diubah oleh manusia. Terhadapnya, manusia harus bertanggung jawab dengan sungguh-sungguh.

(Catatan 1) 誤植: di sini, penyimpangan (selisih)
(Catatan 2) ランダムに: secara kebetulan
(Catatan 3) 淘汰される: di sini, punah
(Catatan 4) 専心する: berkonsentrasi
(Catatan 5) 排卵する: di sini, membuat telur di dalam tubuh
(Catatan 6) カイコ: serangga yang menghasilkan benang sutra
(Catatan 7) 繭: selubung berbentuk bola untuk membungkus tubuh serangga itu sendiri`,
    },

    // ── 問題13：外部講座の受講料補助について ──
    "13": {
      yomi: `2022{年度|ねんど}
{外部|がいぶ}{講座|こうざ}の{受講料|じゅこうりょう}{補助|ほじょ}について

{社員|しゃいん}の{業務|ぎょうむ}{能力|のうりょく}{向上|こうじょう}を{目的|もくてき}として、{社外|しゃがい}で{受講|じゅこう}する{外部|がいぶ}{講座|こうざ}の{受講料|じゅこうりょう}を{補助|ほじょ}します。

1．{対象|たいしょう}の{講座|こうざ}
・2022{年|ねん}{4月|しがつ}{1日|ついたち}から2023{年|ねん}{2月|にがつ}{28日|にじゅうはちにち}までに{行|おこな}われる、{業務|ぎょうむ}と{関連|かんれん}がある{講座|こうざ}が{対象|たいしょう}です。{業務|ぎょうむ}との{関連|かんれん}については、{受講料|じゅこうりょう}{補助|ほじょ}{申請書|しんせいしょ}に{記入|きにゅう}してください。
・{昨年度|さくねんど}の{補助|ほじょ}{対象|たいしょう}{講座|こうざ}{例|れい}：ビジネスマナー{講座|こうざ}、プレゼン{講座|こうざ}、ビジネス{文書|ぶんしょ}{講座|こうざ}{等|とう}

2．{補助|ほじょ}{金額|きんがく}
・{講座|こうざ}{受講料|じゅこうりょう}の{補助|ほじょ}の{申請|しんせい}は、{以下|いか}のAかBで{行|おこな}ってください（{同年度|どうねんど}{内|ない}にAとBの{両方|りょうほう}で{申請|しんせい}することはできません）。

　　{一|ひと}つの{講座|こうざ}の{受講料|じゅこうりょう}　{補助|ほじょ}{金額|きんがく}　{補助|ほじょ}{申請|しんせい}{可能|かのう}な{講座数|こうざすう}（{年度|ねんど}につき）
A　30,000{円|えん}{以上|いじょう}　　　　25,000{円|えん}　1{講座|こうざ}
B　30,000{円|えん}{未満|みまん}　　　　10,000{円|えん}*　2{講座|こうざ}
*{講座|こうざ}の{受講料|じゅこうりょう}が1{万円|まんえん}{未満|みまん}の{場合|ばあい}、{受講料|じゅこうりょう}の{実費|じっぴ}を{支給|しきゅう}します。

3．{申請|しんせい}{書類|しょるい}と{補助金|ほじょきん}の{支払|しはら}い
・{補助|ほじょ}{金額|きんがく}{分|ぶん}は、{立|た}て{替|か}え{払|ばら}いになります。
・{以下|いか}の{書類|しょるい}を、{受講後|じゅこうご}にまとめて、{人事課|じんじか}にご{提出|ていしゅつ}ください。Bで{二|ふた}つの{講座|こうざ}を{受講|じゅこう}する{場合|ばあい}は、{講座|こうざ}ごとに{書類|しょるい}を{分|わ}けて{提出|ていしゅつ}してもかまいません。
①{受講料|じゅこうりょう}{補助|ほじょ}{申請書|しんせいしょ}（{人事課|じんじか}ウェブページよりダウンロード）
②{受講料|じゅこうりょう}の{領収書|りょうしゅうしょ}
③{講座|こうざ}に{出席|しゅっせき}したことを{証明|しょうめい}する{書類|しょるい}（{講座|こうざ}{修了証|しゅうりょうしょう}{等|とう}）
④{講座|こうざ}の{内容|ないよう}が{書|か}かれた{資料|しりょう}（パンフレット{等|とう}）
・{補助金|ほじょきん}は、{各月|かくつき}の{15日|じゅうごにち}までに{書類|しょるい}を{提出|ていしゅつ}した{場合|ばあい}、{翌月|よくげつ}{末日|まつじつ}に{振|ふ}り{込|こ}みます。{16日|じゅうろくにち}{以降|いこう}に{提出|ていしゅつ}した{場合|ばあい}は、2か{月後|げつご}の{末日|まつじつ}となります。

・{申請|しんせい}{書類|しょるい}{提出|ていしゅつ}{締|し}め{切|き}り：2023{年|ねん}{2月|にがつ}{15日|じゅうごにち}

{提出|ていしゅつ}{締|し}め{切|き}りまでに{書類|しょるい}をまとめて{提出|ていしゅつ}できない{場合|ばあい}、①のみ{先|さき}に{提出|ていしゅつ}{締|し}め{切|き}りまでに{提出|ていしゅつ}し、{他|ほか}の{書類|しょるい}については、{3月|さんがつ}{10日|とおか}までにご{提出|ていしゅつ}ください。{補助金|ほじょきん}は、{3月|さんがつ}{31日|さんじゅういちにち}に{振|ふ}り{込|こ}みます。

{提出|ていしゅつ}・{問|と}い{合|あ}わせ{先|さき}：{人事課|じんじか} {平川|ひらかわ}（{内線|ないせん}3210）`,
      arti: `Tahun Anggaran 2022
Tentang Subsidi Biaya Kursus Eksternal

Dengan tujuan meningkatkan kemampuan kerja karyawan, perusahaan memberikan subsidi biaya kursus eksternal yang diikuti di luar perusahaan.

1. Kursus yang dicakup
• Kursus yang berkaitan dengan pekerjaan dan diselenggarakan antara 1 April 2022 hingga 28 Februari 2023. Tuliskan kaitannya dengan pekerjaan di formulir pengajuan subsidi biaya kursus.
• Contoh kursus yang disubsidi tahun lalu: kursus tata krama bisnis, kursus presentasi, kursus dokumen bisnis, dan lain-lain.

2. Jumlah subsidi
• Pengajuan subsidi biaya kursus dilakukan dengan opsi A atau B di bawah ini (tidak boleh mengajukan dengan A dan B sekaligus dalam tahun anggaran yang sama).

    Biaya satu kursus | Jumlah subsidi | Jumlah kursus yang bisa diajukan (per tahun anggaran)
A  30.000 yen ke atas | 25.000 yen | 1 kursus
B  kurang dari 30.000 yen | 10.000 yen* | 2 kursus
*Jika biaya kursus kurang dari 10.000 yen, yang dibayarkan adalah biaya sebenarnya.

3. Dokumen pengajuan dan pembayaran subsidi
• Jumlah subsidi dibayar dengan sistem talangan (Anda bayar dulu, lalu diganti).
• Serahkan dokumen-dokumen berikut sekaligus setelah mengikuti kursus ke Bagian Personalia. Jika mengikuti dua kursus dengan opsi B, dokumen boleh diserahkan terpisah per kursus.
① Formulir pengajuan subsidi biaya kursus (unduh dari halaman web Bagian Personalia)
② Kuitansi biaya kursus
③ Dokumen yang membuktikan kehadiran di kursus (sertifikat kelulusan kursus, dll.)
④ Materi yang menjelaskan isi kursus (brosur, dll.)
• Jika dokumen diserahkan paling lambat tanggal 15 setiap bulan, subsidi ditransfer pada akhir bulan berikutnya. Jika diserahkan tanggal 16 atau sesudahnya, transfer dilakukan pada akhir bulan, dua bulan kemudian.

• Batas akhir penyerahan dokumen pengajuan: 15 Februari 2023

Jika tidak dapat menyerahkan dokumen sekaligus sebelum batas akhir, serahkan hanya ① lebih dulu sebelum batas akhir, dan untuk dokumen lainnya serahkan paling lambat 10 Maret. Subsidi akan ditransfer pada 31 Maret.

Tempat penyerahan & pertanyaan: Bagian Personalia, Hirakawa (ekstensi 3210)`,
    },
  },
};
