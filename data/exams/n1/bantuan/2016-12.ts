import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2016
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1612: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{社会|しゃかい}{活動|かつどう}に{参加|さんか}することで、【{人脈|じんみゃく}】を{広|ひろ}げることができた。",
      arti: "Dengan ikut kegiatan sosial, saya bisa memperluas 【jaringan relasi】.",
    },
    2: {
      yomi: "{鈴木|すずき}さんは{指摘|してき}がいつも{的確|てきかく}で、{本当|ほんとう}に【{賢|かしこ}い】{人|ひと}だと{思|おも}う。",
      arti: "Masukan Suzuki-san selalu tepat; saya rasa ia orang yang benar-benar 【cerdas】.",
      optArti: ["tajam", "cerdas, pandai (賢い)", "hebat", "agung, hebat; berkedudukan tinggi"],
    },
    3: {
      yomi: "{文化|ぶんか}の{違|ちが}いが{食生活|しょくせいかつ}に【{顕著|けんちょ}】に{現|あらわ}れている。",
      arti: "Perbedaan budaya tampak 【menonjol】 dalam pola makan.",
    },
    4: {
      yomi: "{相談|そうだん}の{内容|ないよう}は【{多岐|たき}】にわたった。",
      arti: "Isi konsultasinya 【beraneka ragam】.",
    },
    5: {
      yomi: "その{風習|ふうしゅう}は、{今|いま}はもう【{廃|すた}れて】しまった。",
      arti: "Adat itu sekarang sudah 【punah/tidak dipakai lagi】.",
      optArti: ["runtuh", "menjadi serak/pudar", "hancur, remuk", "punah, merosot (廃れて)"],
    },
    6: {
      yomi: "{家賃|やちん}の【{相場|そうば}】は{地域|ちいき}によって{違|ちが}う。",
      arti: "【Harga pasaran】 sewa rumah berbeda-beda tergantung daerah.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{私|わたし}はこの{土地|とち}で{定職|ていしょく}に{就|つ}き、{生活|せいかつ}の（　）を{築|きず}いた。",
      arti: "Saya mendapat pekerjaan tetap di daerah ini dan membangun (…) kehidupan.",
      optYomi: ["{根拠|こんきょ}", "{基盤|きばん}", "{根源|こんげん}", "{基地|きち}"],
      optArti: ["dasar, alasan", "landasan, fondasi", "akar, sumber", "pangkalan"],
    },
    8: {
      yomi: "{議論|ぎろん}は{難航|なんこう}すると{思|おも}ったが、すぐに{意見|いけん}がまとまり、（　）{結論|けつろん}が{出|で}た。",
      arti: "Saya kira diskusinya akan alot, tetapi pendapat segera menyatu dan kesimpulan keluar dengan (…).",
      optArti: ["mulus, lancar", "terpesona", "lembut, mengembang", "diam-diam"],
    },
    9: {
      yomi: "さっき{駅前|えきまえ}で{佐藤|さとう}さんを（　）んですが、{今|いま}、{海外|かいがい}にいるはずなのに{変|へん}です。",
      arti: "Tadi saya (…) Sato-san di depan stasiun, padahal ia seharusnya sedang di luar negeri, aneh.",
      optYomi: ["{見合|みあ}わせた", "{見過|みす}ごした", "{見|み}かけた", "{見違|みちが}えた"],
      optArti: ["menunda; saling memandang", "membiarkan lewat", "melihat sekilas, kebetulan melihat", "pangling, salah mengenali"],
    },
    10: {
      yomi: "{市長|しちょう}の{責任|せきにん}ある{行動|こうどう}が{住民|じゅうみん}の{不安|ふあん}を（　）し、{行政|ぎょうせい}に{対|たい}する{期待|きたい}が{一気|いっき}に{高|たか}まった。",
      arti: "Tindakan wali kota yang bertanggung jawab (…) kecemasan warga, dan harapan terhadap pemerintah melonjak.",
      optYomi: ["{一掃|いっそう}", "{追放|ついほう}", "{削除|さくじょ}", "{排出|はいしゅつ}"],
      optArti: ["menyapu bersih, menghapus tuntas", "mengusir, membuang", "menghapus (data)", "mengeluarkan (gas/limbah)"],
    },
    11: {
      yomi: "{十分|じゅうぶん}に{煮|に}た{野菜|やさい}は{味|あじ}が（　）{柔|やわ}らかく、とてもおいしかった。",
      arti: "Sayur yang direbus cukup lama bumbunya (…) dan empuk, sangat enak.",
      optYomi: ["{溶|と}けて", "{染|し}みて", "{潤|うるお}って", "{沈|しず}んで"],
      optArti: ["meleleh", "meresap", "lembap, basah", "tenggelam"],
    },
    12: {
      yomi: "このテーブルは{私|わたし}が{子|こ}どものころから{使|つか}っているので、（　）があって{捨|す}てられない。",
      arti: "Meja ini sudah saya pakai sejak kecil, jadi ada (…) dan tidak bisa saya buang.",
      optYomi: ["{心情|しんじょう}", "{好感|こうかん}", "{熱意|ねつい}", "{愛着|あいちゃく}"],
      optArti: ["perasaan", "kesan baik", "antusiasme", "keterikatan, rasa sayang (pada benda)"],
    },
    13: {
      yomi: "{現|げん}{社長|しゃちょう}は{創立者|そうりつしゃ}から{経営|けいえい}の（　）を{学|まな}んだ。",
      arti: "Direktur saat ini mempelajari (…) pengelolaan usaha dari pendirinya.",
      optArti: ["basis data", "veteran", "karya seumur hidup", "kiat, know-how"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{高橋|たかはし}さんには【かねがね】お{会|あ}いしたいと{思|おも}っていました。",
      arti: "【Sudah lama】 saya ingin bertemu dengan Takahashi-san.",
      optYomi: ["{直接|ちょくせつ}", null, "{早|はや}く", "{以前|いぜん}から"],
      optArti: ["secara langsung", "sangat ingin", "cepat", "sejak dulu"],
    },
    15: {
      yomi: "{林|はやし}さんはそれを【{故意|こい}に】{捨|す}てたらしい。",
      arti: "Kabarnya Hayashi-san membuangnya 【dengan sengaja】.",
      optArti: ["sengaja", "tanpa sengaja, lupa", "dengan enggan", "cepat-cepat"],
    },
    16: {
      yomi: "{昨日|きのう}、{鈴木|すずき}さんに【おわびした】。",
      arti: "Kemarin saya 【meminta maaf】 kepada Suzuki-san.",
      optYomi: ["{文句|もんく}を{言|い}った", "お{礼|れい}を{言|い}った", "{断|ことわ}った", "{謝|あやま}った"],
      optArti: ["mengeluh", "berterima kasih", "menolak", "meminta maaf"],
    },
    17: {
      yomi: "{中村|なかむら}さんの{言葉|ことば}からは{強|つよ}い【{意気込|いきご}み】が{伝|つた}わってくる。",
      arti: "Dari kata-kata Nakamura-san terasa 【tekad/semangat】 yang kuat.",
      optYomi: ["{敬意|けいい}", "{自信|じしん}", "{意欲|いよく}", "{信頼|しんらい}"],
      optArti: ["rasa hormat", "percaya diri", "semangat, motivasi", "kepercayaan"],
    },
    18: {
      yomi: "{妹|いもうと}は{少|すこ}し【おびえて】いるようだった。",
      arti: "Adik perempuan saya tampak sedikit 【ketakutan】.",
      optYomi: ["{焦|あせ}って", "{怖|こわ}がって", "{悩|なや}んで", "{悔|く}やんで"],
      optArti: ["panik", "takut", "bingung, cemas", "menyesal"],
    },
    19: {
      yomi: "{私|わたし}はその{一言|ひとこと}に【{安堵|あんど}した】。",
      arti: "Saya 【merasa lega】 mendengar satu kalimat itu.",
      optArti: ["merasa plong, segar", "tersentak, tersadar", "merasa lega", "naik darah"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{閑静|かんせい}",
      arti: "閑静 = tenang dan sepi (untuk lingkungan/tempat tinggal)",
      optYomi: [
        "そのレストランは{繁華街|はんかがい}から{外|はず}れた{閑静|かんせい}な{場所|ばしょ}にある。",
        "{今日|きょう}は{朝|あさ}から{具合|ぐあい}が{悪|わる}かったので、{会社|かいしゃ}を{休|やす}んで{家|いえ}で{閑静|かんせい}にしていた。",
        "{用事|ようじ}が{早|はや}く{済|す}み、{閑静|かんせい}な{時間|じかん}ができたので、{映画|えいが}を{見|み}に{行|い}くことにした。",
        "{日中|にっちゅう}はにぎやかな{公園|こうえん}だが、{夜|よる}になると{急|きゅう}に{閑静|かんせい}になる。",
      ],
      optArti: [
        "Restoran itu berada di tempat yang 'tenang dan sepi', agak jauh dari pusat keramaian.",
        "Hari ini sejak pagi badan saya tidak enak, jadi saya libur kerja dan 'tenang dan sepi' di rumah.",
        "Urusan cepat selesai dan ada waktu 'tenang dan sepi', jadi saya memutuskan menonton film.",
        "Taman itu ramai di siang hari, tetapi begitu malam tiba-tiba menjadi 'tenang dan sepi'.",
      ],
    },
    21: {
      yomi: "たやすい",
      arti: "たやすい = mudah, gampang (dilakukan)",
      optYomi: [
        "{弟|おとうと}は{寝坊|ねぼう}したらしく、たやすい{物|もの}だけ{食|た}べて、{慌|あわ}てて{出|で}かけていった。",
        "{伊藤氏|いとうし}とは{大学|だいがく}{時代|じだい}からの{親友|しんゆう}で、{本音|ほんね}が{言|い}えるたやすい{関係|かんけい}だ。",
        "せっかくの{日曜日|にちようび}だから、ゆっくり{休|やす}んでたやすく{過|す}ごそうと{思|おも}う。",
        "この{問題|もんだい}は{想像|そうぞう}{以上|いじょう}に{複雑|ふくざつ}で、たやすく{解決|かいけつ}できるものではなかった。",
      ],
      optArti: [
        "Adik saya sepertinya kesiangan, hanya makan makanan yang 'mudah' lalu buru-buru pergi.",
        "Ito adalah sahabat saya sejak kuliah; hubungan kami 'mudah' sehingga bisa bicara terus terang.",
        "Mumpung hari Minggu, saya ingin beristirahat dan menghabiskan waktu dengan 'mudah'.",
        "Masalah ini lebih rumit dari dugaan, dan bukan sesuatu yang bisa diselesaikan dengan 'mudah'.",
      ],
    },
    22: {
      yomi: "{察|さっ}する",
      arti: "察する = menyelami, memahami (perasaan/keadaan orang tanpa diberi tahu)",
      optYomi: [
        "{医師|いし}たちはチームを{組|く}み、{意見|いけん}を{出|だ}し{合|あ}って、{最良|さいりょう}の{治療法|ちりょうほう}を{察|さっ}した。",
        "{気象|きしょう}{予報士|よほうし}はテレビの{天気|てんき}{予報|よほう}で、{来週|らいしゅう}の{気温|きおん}の{変化|へんか}を{察|さっ}し{始|はじ}めた。",
        "{鈴木|すずき}さんは、{私|わたし}が{何|なに}も{言|い}わなくても、{私|わたし}の{気持|きも}ちを{察|さっ}して{慰|なぐさ}めてくれた。",
        "{外|そと}を{歩|ある}いていたら{急|きゅう}にいいアイディアを{察|さっ}したので、{手帳|てちょう}にメモをした。",
      ],
      optArti: [
        "Para dokter membentuk tim, saling memberi pendapat, dan 'menyelami' metode pengobatan terbaik.",
        "Ahli prakiraan cuaca mulai 'menyelami' perubahan suhu minggu depan di acara ramalan cuaca TV.",
        "Tanpa saya berkata apa pun, Suzuki-san 'menyelami' perasaan saya dan menghibur saya.",
        "Saat berjalan di luar, tiba-tiba saya 'menyelami' ide bagus, jadi saya mencatatnya di buku agenda.",
      ],
    },
    23: {
      yomi: "{内訳|うちわけ}",
      arti: "内訳 = rincian (perincian jumlah/biaya)",
      optYomi: [
        "{来週|らいしゅう}の{内訳|うちわけ}を{認識|にんしき}したが、{予定|よてい}がないのは{木曜|もくよう}の{夜|よる}だけだ。",
        "{前回|ぜんかい}の{出張費|しゅっちょうひ}の{内訳|うちわけ}を{見|み}たら、{交通費|こうつうひ}の{割合|わりあい}が{予想外|よそうがい}に{高|たか}かった。",
        "{司会者|しかいしゃ}は{進行|しんこう}を{間違|まちが}えないように、{式|しき}の{内訳|うちわけ}を{何度|なんど}も{見直|みなお}した。",
        "{家族|かぞく}の{健康|けんこう}のため、{栄養|えいよう}の{内訳|うちわけ}を{考|かんが}えて{食事|しょくじ}を{作|つく}っている。",
      ],
      optArti: [
        "Saya mengecek 'rincian' minggu depan; yang tidak ada jadwal hanya Kamis malam.",
        "Ketika melihat 'rincian' biaya dinas sebelumnya, porsi biaya transportasi ternyata tinggi di luar dugaan.",
        "Agar tidak salah memandu acara, pembawa acara berkali-kali memeriksa 'rincian' upacara.",
        "Demi kesehatan keluarga, saya memasak dengan memikirkan 'rincian' gizi.",
      ],
    },
    24: {
      yomi: "{食|く}い{違|ちが}う",
      arti: "食い違う = tidak cocok, bertentangan (keterangan/pendapat)",
      optYomi: [
        "この{事件|じけん}は、{複数|ふくすう}の{目撃者|もくげきしゃ}の{話|はなし}がそれぞれ{食|く}い{違|ちが}っており、{不明|ふめい}な{点|てん}が{多|おお}い。",
        "{金庫|きんこ}を{開|あ}けようと{思|おも}ったが、どの{鍵|かぎ}も{食|く}い{違|ちが}って{開|あ}けられなかった。",
        "{何|なん}だか{歩|ある}きにくいと{思|おも}ったら、サンダルの{左右|さゆう}が{食|く}い{違|ちが}っていた。",
        "{調味料|ちょうみりょう}を{変|か}えたのか、この{料理|りょうり}はいつもと{味|あじ}が{食|く}い{違|ちが}っているように{感|かん}じる。",
      ],
      optArti: [
        "Dalam kasus ini, keterangan beberapa saksi mata saling 'tidak cocok', dan banyak hal yang belum jelas.",
        "Saya ingin membuka brankas, tetapi semua kunci 'tidak cocok' sehingga tidak bisa dibuka.",
        "Saya merasa susah berjalan, ternyata sandal kiri-kanannya 'tidak cocok' (tertukar).",
        "Mungkin bumbunya diganti, rasa masakan ini terasa 'tidak cocok' dengan biasanya.",
      ],
    },
    25: {
      yomi: "{過密|かみつ}",
      arti: "過密 = terlalu padat (jadwal, penduduk)",
      optYomi: [
        "{雑誌|ざっし}で{紹介|しょうかい}されてから、この{商品|しょうひん}への{過密|かみつ}な{注文|ちゅうもん}が{続|つづ}いているらしい。",
        "{水質|すいしつ}{汚染|おせん}に{関|かん}して{人々|ひとびと}の{抗議|こうぎ}が{過密|かみつ}になり、{政府|せいふ}は{対策|たいさく}を{迫|せま}られている。",
        "{今回|こんかい}の{出張|しゅっちょう}は{過密|かみつ}なスケジュールで、ゆっくり{食事|しょくじ}をする{時間|じかん}もなさそうだ。",
        "{春|はる}になると、この{池|いけ}の{周|まわ}りには、{色|いろ}とりどりの{花|はな}が{過密|かみつ}に{咲|さ}き{乱|みだ}れる。",
      ],
      optArti: [
        "Sejak diperkenalkan di majalah, pesanan 'terlalu padat' untuk produk ini kabarnya terus berlanjut.",
        "Protes warga terkait pencemaran air menjadi 'terlalu padat', dan pemerintah didesak mengambil tindakan.",
        "Perjalanan dinas kali ini jadwalnya 'terlalu padat', sepertinya tidak ada waktu untuk makan dengan santai.",
        "Saat musim semi, di sekitar kolam ini bunga warna-warni mekar 'terlalu padat'.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{朝|あさ}の{満員|まんいん}{電車|でんしゃ}。{車内|しゃない}の{混雑|こんざつ}を（　）、{私|わたし}の{目|め}の{前|まえ}に{座|すわ}っている{学生|がくせい}{風|ふう}の{男|おとこ}は、{平然|へいぜん}とノートパソコンを{広|ひろ}げて、{作業|さぎょう}に{没頭|ぼっとう}していた。",
      arti: "Kereta pagi yang penuh sesak. (…) padatnya gerbong, pria berpenampilan mahasiswa yang duduk di depan saya dengan santai membuka laptop dan tenggelam dalam pekerjaannya.",
      optYomi: ["{含|ふく}めて", null, "{除|のぞ}いて", null],
      optArti: ["termasuk", "berdasarkan", "kecuali", "tanpa memedulikan"],
    },
    27: {
      yomi: "{私|わたし}の{父|ちち}は、（　）もしないで{漫画|まんが}を{批判|ひはん}するから、{本当|ほんとう}に{嫌|いや}になる。",
      arti: "Ayah saya mengkritik manga tanpa (…) pun, sungguh menyebalkan.",
      optYomi: ["{読|よ}まない", "{読|よ}み", "{読|よ}もう", "{読|よ}んで"],
      optArti: ["tidak membaca", "membaca (読みもしない = membaca pun tidak)", "ayo membaca", "membaca, lalu"],
    },
    28: {
      yomi: "（{卒業生|そつぎょうせい}へのインタビューで）{聞|き}き{手|て}「{学生|がくせい}{時代|じだい}にやったことで、{今|いま}の{仕事|しごと}に{役立|やくだ}っていることは{何|なん}でしょうか。」{田中|たなか}「ラグビー{部|ぶ}での{経験|けいけん}ですね。チームワークの{大切|たいせつ}さを{痛感|つうかん}しました。（　）、それは{去年|きょねん}{企画|きかく}チームのリーダーになって{初|はじ}めて{気|き}づいたことですが。」",
      arti: "(Wawancara dengan alumni) Pewawancara: \"Dari yang Anda lakukan semasa kuliah, apa yang berguna untuk pekerjaan sekarang?\" Tanaka: \"Pengalaman di klub rugbi. Saya benar-benar merasakan pentingnya kerja sama tim. (…), itu baru saya sadari tahun lalu setelah menjadi ketua tim perencanaan.\"",
      optYomi: ["{要|よう}するに", null, null, null],
      optArti: ["singkatnya", "atau", "hanya saja, meskipun begitu", "sehubungan dengan itu"],
    },
    29: {
      yomi: "{村|むら}の{郷土史|きょうどし}をまとめるにあたり、{今年|ことし}90{歳|さい}になる{元|もと}{村長|そんちょう}の{東山|ひがしやま}さんにお{話|はなし}を{伺|うかが}った。{村|むら}に{初|はじ}めて{汽車|きしゃ}が{走|はし}ったときのことを{鮮明|せんめい}に{覚|おぼ}えて（　）、その{記憶力|きおくりょく}に{驚|おどろ}いた。",
      arti: "Dalam menyusun sejarah lokal desa, saya mendengar cerita dari Higashiyama-san, mantan kepala desa yang tahun ini berusia 90 tahun. Beliau (…) dengan jelas ingat saat kereta uap pertama kali melintas di desa, dan saya terkejut dengan daya ingatnya.",
      optYomi: [null, "{差|さ}し{上|あ}げ", null, "{申|もう}し{上|あ}げ"],
      optArti: ["(beliau) … (hormat, おいでになる)", "memberikan (merendah)", "(saya) … (merendah, まいる)", "menyampaikan (merendah)"],
    },
    30: {
      yomi: "（{求人|きゅうじん}サイトの「よくある{質問|しつもん}」で）Q:インテリアに{関|かん}する{知識|ちしき}がないのですが、{働|はたら}けますか。A:{研修|けんしゅう}があるので{大丈夫|だいじょうぶ}です。{知識|ちしき}はある（　）が、それよりも{人柄|ひとがら}や{仕事|しごと}に{取|と}り{組|く}む{姿勢|しせい}を{重視|じゅうし}しています。",
      arti: "(Di \"pertanyaan umum\" situs lowongan) Q: Saya tidak punya pengetahuan tentang interior; bisakah saya bekerja? A: Ada pelatihan, jadi tidak masalah. Pengetahuan memang (…) kalau ada, tetapi kami lebih mementingkan kepribadian dan sikap bekerja.",
      optYomi: [null, "ことは{否|いな}めません", "に{越|こ}したことはありません", "といっても{過言|かごん}ではありません"],
      optArti: ["hanyalah", "tak bisa disangkal", "lebih baik (kalau ada)", "tidak berlebihan jika dikatakan"],
    },
    31: {
      yomi: "（お{知|し}らせで）{水道管|すいどうかん}{破裂|はれつ}による{断水|だんすい}のため、8{月|がつ}12{日|にち}まで{市民|しみん}プールの{営業|えいぎょう}を{休止|きゅうし}します。{復旧|ふっきゅう}{状況|じょうきょう}（　）、{営業|えいぎょう}{再開|さいかい}が{遅|おく}れる{可能性|かのうせい}がありますので、ご{了承|りょうしょう}ください。",
      arti: "(Pengumuman) Karena air mati akibat pipa pecah, kolam renang warga tutup sampai 12 Agustus. (…) situasi perbaikan, pembukaan kembali mungkin tertunda; mohon dimaklumi.",
      optYomi: ["{次第|しだい}には", "{次第|しだい}に", "{次第|しだい}では", "{次第|しだい}"],
      optArti: ["(bentuk tidak wajar)", "perlahan-lahan", "tergantung (… bisa jadi)", "begitu ..., segera"],
    },
    32: {
      yomi: "クレジットカードの{番号|ばんごう}{等|とう}、{他人|たにん}に（　）{困|こま}る{情報|じょうほう}は、{電子|でんし}メールには{書|か}かないほうがいいそうだ。",
      arti: "Katanya informasi yang akan merepotkan jika (…) orang lain, seperti nomor kartu kredit, sebaiknya tidak ditulis di email.",
      optYomi: ["{知|し}っていても", "{知|し}っていなくても", "{知|し}らなくては", "{知|し}られては"],
      optArti: ["meski tahu", "meski tidak tahu", "kalau tidak tahu", "kalau sampai diketahui"],
    },
    33: {
      yomi: "{仕事|しごと}は、{決|き}められた{時間|じかん}{内|ない}に、いかに{成果|せいか}を{上|あ}げるかが{大切|たいせつ}であり、{単|たん}に{時間|じかん}をかけて（　）と{私|わたし}は{思|おも}う。",
      arti: "Dalam pekerjaan, yang penting adalah bagaimana menghasilkan dalam waktu yang ditentukan; menurut saya (…) sekadar dengan menghabiskan waktu.",
      optArti: ["tidak aneh disebut berusaha", "bukan berarti cukup berusaha keras", "hanyalah berusaha", "tidak ada cara untuk berusaha"],
    },
    34: {
      yomi: "{現在|げんざい}、{潜水|せんすい}{調査船|ちょうさせん}を{用|もち}いた{調査|ちょうさ}{研究|けんきゅう}が{進展|しんてん}{中|ちゅう}であり、いずれ{近|ちか}いうちに{海底|かいてい}のより{詳細|しょうさい}な{地質|ちしつ}{構造|こうぞう}が{明|あき}らかに（　）。",
      arti: "Saat ini penelitian dengan kapal selam riset sedang berjalan, dan dalam waktu dekat struktur geologi dasar laut yang lebih rinci (…) terungkap.",
      optYomi: ["なるものと{思|おも}われる", "するという{思|おも}いがある", "なったかに{思|おも}える", "するだろうと{思|おも}う"],
      optArti: ["diperkirakan akan", "ada keinginan untuk membuat", "tampaknya seolah sudah", "kurasa akan membuat"],
    },
    35: {
      yomi: "{山下|やました}「あのう、{西村|にしむら}{先輩|せんぱい}。{私|わたし}、{今日|きょう}でこのサークルを（　）。」{西村|にしむら}「ええ？{辞|や}める？{急|きゅう}にどうして？」",
      arti: "Yamashita: \"Anu, Kak Nishimura. Saya, hari ini (…) dari klub ini.\" Nishimura: \"Hah? Keluar? Kenapa tiba-tiba?\"",
      optYomi: ["{辞|や}めてしまわれたのでしょうか", "{辞|や}めてしまったのかと{思|おも}って", "{辞|や}めさせたらどうでしょうか", "{辞|や}めさせてもらおうかと{思|おも}って"],
      optArti: ["apakah (Anda) sudah keluar?", "kukira sudah keluar", "bagaimana kalau disuruh keluar?", "berpikir untuk mohon izin keluar"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "「アセビ」という、{白|しろ}い{花|はな}を{咲|さ}かせる{樹木|じゅもく}を{漢字|かんじ}で「{馬酔木|あせび}」と{書|か}くのは、アセビには★ ＿＿ ＿＿ ＿＿そうです。",
      arti: "Pohon berbunga putih bernama \"asebi\" ditulis dengan kanji \"馬酔木\" (kuda-mabuk-pohon), katanya berasal dari fakta bahwa asebi mengandung zat beracun, dan kuda yang memakannya menjadi seperti mabuk.",
      optYomi: ["{由来|ゆらい}する", "{有毒|ゆうどく}{成分|せいぶん}があり", "{状態|じょうたい}になることに", "{馬|うま}が{食|た}べると{酔|よ}ったような"],
      optArti: ["berasal dari", "ada zat beracun", "(dari) menjadi keadaan", "kalau dimakan kuda, seperti mabuk"],
    },
    37: {
      yomi: "{家族|かぞく}の{時間|じかん}を{大切|たいせつ}にする{夫|おっと}は、つい＿＿ ＿＿ ★ ＿＿ありがたい{存在|そんざい}です。",
      arti: "Suami saya yang menghargai waktu keluarga adalah sosok berharga yang menyadarkan saya, yang cenderung terlalu asyik bekerja, tentang apa yang benar-benar penting.",
      optYomi: ["{本当|ほんとう}に{大切|たいせつ}なものは{何|なん}なのか", "{私|わたし}に", "{仕事|しごと}に{夢中|むちゅう}になりすぎる", "{気|き}づかせてくれる"],
      optArti: ["apa yang benar-benar penting", "kepada saya", "terlalu asyik bekerja", "yang menyadarkan"],
    },
    38: {
      yomi: "Z{県|けん}{知事|ちじ}の{林|はやし}{和夫氏|かずおし}は、{週刊誌|しゅうかんし}で、{脱税|だつぜい}を{行|おこな}った＿＿ ＿＿ ★ ＿＿{異|こと}なり、{名誉|めいよ}を{傷|きず}つけられたとして、{発行元|はっこうもと}のX{社|しゃ}を{相手取|あいてど}り{訴訟|そしょう}を{起|お}こした。",
      arti: "Gubernur prefektur Z, Hayashi Kazuo, menggugat penerbit X karena merasa nama baiknya dicemarkan, terkait pemberitaan di majalah mingguan yang menyebut ia diduga menggelapkan pajak, yang sama sekali berbeda dengan fakta.",
      optYomi: ["{事実|じじつ}とは{全|まった}く", "{疑|うたが}いがあるなどと", "{報|ほう}じられた", null],
      optArti: ["sama sekali (berbeda) dengan fakta", "bahwa ada dugaan, dsb.", "diberitakan", "terhadap hal itu"],
    },
    39: {
      yomi: "Q{鉄道|てつどう}が10{年|ねん}ぶりに{運賃|うんちん}{値上|ねあ}げに{踏|ふ}み{切|き}った。{安全|あんぜん}{対策|たいさく}や{原油|げんゆ}の{高騰|こうとう}で{支出|ししゅつ}が{増|ふ}え、{経営|けいえい}{努力|どりょく}だけでは{対応|たいおう}しきれないと{判断|はんだん}＿＿ ＿＿ ★ ＿＿。",
      arti: "Perusahaan kereta Q menaikkan tarif untuk pertama kalinya dalam 10 tahun. Katanya, pengeluaran naik karena langkah keselamatan dan melonjaknya harga minyak mentah, dan mereka menilai tidak bisa ditangani hanya dengan upaya manajemen.",
      optArti: ["katanya", "(nominalisasi)", "hal (bahwa)", "dan, karena"],
    },
    40: {
      yomi: "{世|よ}の{中|なか}にはさまざまな{資格|しかく}があふれているが、{資格|しかく}を{取|と}った＿＿ ＿＿ ＿＿ ★{世間|せけん}は{甘|あま}くないらしい。",
      arti: "Di dunia ini berbagai sertifikasi melimpah, tetapi kabarnya dunia tidak semudah itu sampai hanya dengan mendapat sertifikasi bisa mendapat pekerjaan yang diinginkan.",
      optYomi: [null, null, null, "{希望|きぼう}の{職|しょく}につける"],
      optArti: ["hanya", "sampai (sebegitu)", "dengan", "bisa mendapat pekerjaan yang diinginkan"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optArti: ["bukannya tidak bisa dikatakan untuk yang sini", "belum tentu berlaku untuk yang sini", "tak kukira berlaku juga untuk yang sini", "apakah menurutmu tidak berlaku untuk yang sini?"],
    },
    42: {
      optArti: ["(saat) seperti itu", "(saat) melakukan", "(saat) itu", "(saat) berniat melakukan"],
    },
    43: {
      optArti: ["soal toilet", "pasti soal toilet", "karena itu toilet", "katanya toilet"],
    },
    44: {
      optArti: ["memang wajar", "sudah semestinya", "akan tetapi, nyatanya", "misalnya"],
    },
    45: {
      optYomi: ["{認識|にんしき}させられたことがある", "{認識|にんしき}させられたおかげだ", "{認識|にんしき}させられる{話|はなし}があった", "{認識|にんしき}させられる{出来事|できごと}だった"],
      optArti: ["pernah disadarkan", "berkat disadarkan", "ada cerita yang menyadarkan", "itu peristiwa yang menyadarkan"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{教師|きょうし}と{生徒|せいと}が{自由|じゆう}に{発言|はつげん}し{合|あ}うことも{必要|ひつよう}だ。",
        "{教師|きょうし}は{生徒|せいと}の{考|かんが}えを{想像|そうぞう}するべきだ。",
        "{教師|きょうし}は{生徒|せいと}の{発言|はつげん}を{待|ま}つことも{必要|ひつよう}だ。",
        "{教師|きょうし}は{生徒|せいと}に{沈黙|ちんもく}の{時間|じかん}を{与|あた}えないようにすべきだ。",
      ],
      optArti: [
        "Guru dan murid juga perlu saling berbicara dengan bebas.",
        "Guru harus membayangkan pikiran murid.",
        "Guru juga perlu menunggu murid berbicara.",
        "Guru sebaiknya tidak memberi murid waktu hening.",
      ],
    },
    47: {
      yomi: "{市民|しみん}{運動場|うんどうじょう}の{予約|よやく}について、このお{知|し}らせは{何|なに}を{知|し}らせているか。",
      arti: "Mengenai reservasi lapangan olahraga warga, apa yang diberitahukan pengumuman ini?",
      optYomi: [
        "{管理|かんり}{事務所|じむしょ}{窓口|まどぐち}での{予約|よやく}{受付|うけつけ}{期間|きかん}が{変更|へんこう}になること",
        "{管理|かんり}{事務所|じむしょ}{窓口|まどぐち}で{利用者|りようしゃ}{登録|とうろく}をすれば、インターネット{上|じょう}で{予約|よやく}ができるようになること",
        "インターネット{上|じょう}での{予約|よやく}{受付|うけつけ}{時間|じかん}がこれまでより{長|なが}くなること",
        "インターネット{上|じょう}の{予約|よやく}システムの{導入|どうにゅう}により、{管理|かんり}{事務所|じむしょ}{窓口|まどぐち}での{予約|よやく}ができなくなること",
      ],
      optArti: [
        "Masa penerimaan reservasi di loket kantor pengelola berubah",
        "Jika mendaftar sebagai pengguna di loket kantor pengelola, reservasi bisa dilakukan lewat internet",
        "Jam penerimaan reservasi lewat internet lebih panjang dari sebelumnya",
        "Dengan diperkenalkannya sistem reservasi internet, reservasi di loket kantor pengelola tidak bisa lagi",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}によると、{異文化|いぶんか}{間|かん}で{対話|たいわ}を{通|とお}して{人間|にんげん}{関係|かんけい}を{築|きず}く{上|うえ}で{最|もっと}も{大切|たいせつ}なことは{何|なに}か。",
      arti: "Menurut penulis, apa yang paling penting dalam membangun hubungan antarmanusia melalui dialog antarbudaya?",
      optYomi: [
        "{自己|じこ}の{価値観|かちかん}を{理解|りかい}してもらおうとする{態度|たいど}",
        "{自己|じこ}の{価値観|かちかん}を{保|たも}ちながら、{他者|たしゃ}の{価値観|かちかん}を{理解|りかい}する{態度|たいど}",
        "{他者|たしゃ}と{自己|じこ}の{共通|きょうつう}の{価値観|かちかん}を{創|つく}り{上|あ}げていく{態度|たいど}",
        "{他者|たしゃ}の{価値観|かちかん}の{中|なか}に{自己|じこ}の{価値観|かちかん}との{共通点|きょうつうてん}を{見|み}つける{態度|たいど}",
      ],
      optArti: [
        "Sikap berusaha agar nilai-nilai diri dipahami",
        "Sikap memahami nilai-nilai orang lain sambil mempertahankan nilai-nilai diri",
        "Sikap bersama-sama menciptakan nilai bersama antara orang lain dan diri sendiri",
        "Sikap menemukan kesamaan dengan nilai diri di dalam nilai orang lain",
      ],
    },
    49: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{述|の}べていることは{何|なに}か。",
      arti: "Apa yang dikemukakan penulis dalam tulisan ini?",
      optYomi: [
        "「{普通|ふつう}」という{視点|してん}がないと、「{特別|とくべつ}なもの」は{作|つく}れない。",
        "「{普通|ふつう}の{人|ひと}」が{普通|ふつう}のものを{作|つく}ると、「{特別|とくべつ}なもの」になる。",
        "「{変|へん}な{人|ひと}」が{普通|ふつう}のものを{作|つく}ると、「{特別|とくべつ}なもの」になる。",
        "「{変|へん}な{人|ひと}」の{視点|してん}でしか、「{特別|とくべつ}なもの」は{作|つく}れない。",
      ],
      optArti: [
        "Tanpa sudut pandang \"biasa\", \"sesuatu yang istimewa\" tidak bisa dibuat.",
        "Jika \"orang biasa\" membuat sesuatu yang biasa, jadilah \"sesuatu yang istimewa\".",
        "Jika \"orang aneh\" membuat sesuatu yang biasa, jadilah \"sesuatu yang istimewa\".",
        "\"Sesuatu yang istimewa\" hanya bisa dibuat dari sudut pandang \"orang aneh\".",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{謎|なぞ}が{多|おお}いとあるが、{謎|なぞ}に{合|あ}うのはどれか。",
      arti: "Tertulis \"banyak misterinya\"; mana yang sesuai dengan misteri itu?",
      optYomi: [
        "{犬|いぬ}ではなくオオカミを{飼|か}おうとしたこと",
        "オオカミを{肉食獣|にくしょくじゅう}だと{思|おも}わなかったこと",
        "{恐|おそ}ろしいオオカミを{飼|か}って{利用|りよう}しようと{考|かんが}えたこと",
        "{狩|か}りの{邪魔|じゃま}になるのに{恐|おそ}ろしいオオカミを{飼|か}おうとしたこと",
      ],
      optArti: [
        "Berusaha memelihara serigala, bukan anjing",
        "Tidak menganggap serigala sebagai karnivora",
        "Berpikir untuk memelihara dan memanfaatkan serigala yang menakutkan",
        "Berusaha memelihara serigala menakutkan padahal mengganggu perburuan",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}によると、どのようなオオカミが{犬|いぬ}の{祖先|そせん}だと{考|かんが}えられるか。",
      arti: "Menurut penulis, serigala seperti apa yang dianggap leluhur anjing?",
      optYomi: [
        "{人間|にんげん}から{頼|たよ}りにされたオオカミ",
        "{狩|か}りの{上手|じょうず}なオオカミ",
        "{群|む}れから{追|お}い{出|だ}されたオオカミ",
        "{群|む}れの{中|なか}で{下位|かい}のオオカミ",
      ],
      optArti: [
        "Serigala yang diandalkan manusia",
        "Serigala yang pandai berburu",
        "Serigala yang diusir dari kawanan",
        "Serigala berperingkat rendah dalam kawanan",
      ],
    },
    52: {
      yomi: "{犬|いぬ}の{祖先|そせん}が{人間|にんげん}と{暮|く}らすようになったきっかけについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang pemicu leluhur anjing mulai hidup bersama manusia?",
      optYomi: [
        "{人間|にんげん}を{利用|りよう}して{仲間|なかま}からの{危険|きけん}を{避|さ}けようとした。",
        "{人間|にんげん}に{近|ちか}づいて{食糧|しょくりょう}を{得|え}ようとした。",
        "{人間|にんげん}が{狩|か}りの{手助|てだす}けをさせた。",
        "{人間|にんげん}がエサを{与|あた}えた。",
      ],
      optArti: [
        "Memanfaatkan manusia untuk menghindari bahaya dari kawanannya.",
        "Mendekati manusia untuk mendapatkan makanan.",
        "Manusia menyuruh mereka membantu berburu.",
        "Manusia memberi makan.",
      ],
    },
    53: {
      yomi: "①そんなふうにとあるが、{子|こ}どもはどんなふうに{大人|おとな}を{見|み}ているのか。",
      arti: "Tertulis \"① seperti itu\"; bagaimana anak-anak memandang orang dewasa?",
      optYomi: [
        "{早|はや}く{大人|おとな}になりたいと{思|おも}っている。",
        "{大人|おとな}の{姿|すがた}から{魅力的|みりょくてき}な{部分|ぶぶん}を{探|さが}している。",
        "{自分|じぶん}が{失敗|しっぱい}したときどうするか{考|かんが}えている。",
        "あんな{大人|おとな}にはなりたくないと{思|おも}っている。",
      ],
      optArti: [
        "Ingin cepat menjadi dewasa.",
        "Mencari sisi yang menarik dari sosok orang dewasa.",
        "Memikirkan apa yang akan dilakukan saat dirinya gagal.",
        "Tidak ingin menjadi orang dewasa seperti itu.",
      ],
    },
    54: {
      yomi: "②これほど{子|こ}どもにとって{不幸|ふこう}なことはないとあるが、{何|なに}が{不幸|ふこう}なのか。",
      arti: "Tertulis \"② tidak ada yang lebih malang bagi anak daripada ini\"; apa yang malang?",
      optYomi: [
        "{大人|おとな}を{見|み}ても{未来|みらい}の{自分|じぶん}に{希望|きぼう}が{持|も}てないこと",
        "{大人|おとな}を{見|み}てもすてきな{大人|おとな}になる{自信|じしん}が{持|も}てないこと",
        "{大人|おとな}を{見|み}ても{今|いま}{何|なに}をしておけばいいか{分|わ}からないこと",
        "{大人|おとな}を{見|み}ても{将来|しょうらい}{自分|じぶん}のしたいことが{見|み}つからないこと",
      ],
      optArti: [
        "Melihat orang dewasa pun tidak bisa berharap pada dirinya di masa depan",
        "Melihat orang dewasa pun tidak yakin bisa menjadi orang dewasa yang hebat",
        "Melihat orang dewasa pun tidak tahu apa yang harus dilakukan sekarang",
        "Melihat orang dewasa pun tidak menemukan apa yang ingin dilakukan di masa depan",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}が{大人|おとな}に{対|たい}して{伝|つた}えたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis kepada orang dewasa?",
      optYomi: [
        "{人生|じんせい}の{先輩|せんぱい}らしく、いつもかっこいい{大人|おとな}でいよう。",
        "ベテランの{子|こ}どもとして、{子|こ}どもを{幸福|こうふく}な{将来|しょうらい}へ{導|みちび}いてあげよう。",
        "{子|こ}どもたちに、{大人|おとな}の{魅力的|みりょくてき}な{世界|せかい}を{教|おし}えよう。",
        "{子|こ}どもたちに、ベテランの{子|こ}どもとしての{行|おこな}いを{示|しめ}そう。",
      ],
      optArti: [
        "Sebagai senior dalam hidup, jadilah orang dewasa yang selalu keren.",
        "Sebagai anak-anak veteran, bimbinglah anak-anak menuju masa depan yang bahagia.",
        "Ajarkan dunia orang dewasa yang menarik kepada anak-anak.",
        "Tunjukkan kepada anak-anak perilaku sebagai anak-anak veteran.",
      ],
    },
    56: {
      yomi: "{変|か}われば{変|か}わるものだとあるが、{科学者|かがくしゃ}はどのように{変|か}わったのか。",
      arti: "Tertulis \"betapa berubahnya\"; bagaimana para ilmuwan berubah?",
      optYomi: [
        "{以前|いぜん}は{記者|きしゃ}を{世俗的|せぞくてき}だと{見|み}ていたが、{現在|げんざい}はメディアを{信頼|しんらい}するようになった。",
        "{以前|いぜん}は{記者|きしゃ}と{距離|きょり}を{置|お}いていたが、{現在|げんざい}は{積極的|せっきょくてき}にメディアとかかわるようになった。",
        "{以前|いぜん}は{同僚|どうりょう}の{目|め}を{気|き}にしていたが、{現在|げんざい}は{記者|きしゃ}の{目|め}をより{気|き}にするようになった。",
        "{以前|いぜん}は{自|みずか}らメディア{戦略|せんりゃく}を{練|ね}っていたが、{現在|げんざい}は{記者|きしゃ}の{力|ちから}を{借|か}りるようになった。",
      ],
      optArti: [
        "Dulu memandang wartawan sebagai orang duniawi, sekarang menjadi percaya pada media.",
        "Dulu menjaga jarak dengan wartawan, sekarang aktif berhubungan dengan media.",
        "Dulu memikirkan pandangan rekan kerja, sekarang lebih memikirkan pandangan wartawan.",
        "Dulu menyusun strategi media sendiri, sekarang meminjam kekuatan wartawan.",
      ],
    },
    57: {
      yomi: "{科学者|かがくしゃ}との{関係|かんけい}で、{今|いま}のジャーナリズムにはどのような{問題|もんだい}があるか。",
      arti: "Dalam hubungan dengan ilmuwan, masalah apa yang ada pada jurnalisme sekarang?",
      optYomi: [
        "{科学者|かがくしゃ}が{望|のぞ}む{論文|ろんぶん}を{記事|きじ}にしていない。",
        "{科学者|かがくしゃ}が{十分|じゅうぶん}{満足|まんぞく}できる{広報|こうほう}をしていない。",
        "{科学者|かがくしゃ}から{提供|ていきょう}された{情報|じょうほう}をそのまま{伝|つた}えている。",
        "{科学者|かがくしゃ}から{提供|ていきょう}された{情報|じょうほう}を{十分|じゅうぶん}{理解|りかい}せずに{報|ほう}じている。",
      ],
      optArti: [
        "Tidak memberitakan makalah yang diinginkan ilmuwan.",
        "Tidak melakukan publikasi yang cukup memuaskan ilmuwan.",
        "Menyampaikan begitu saja informasi yang diberikan ilmuwan.",
        "Memberitakan informasi dari ilmuwan tanpa cukup memahaminya.",
      ],
    },
    58: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{科学者|かがくしゃ}は、{科学|かがく}ジャーナリズムの{立場|たちば}をもっと{理解|りかい}すべきである。",
        "{科学者|かがくしゃ}は、{科学|かがく}ジャーナリズムとの{関係|かんけい}のあり{方|かた}を{改|あらた}めて{見直|みなお}すべきである。",
        "{科学|かがく}ジャーナリズムは、{報道|ほうどう}{内容|ないよう}の{決定|けってい}にあたって{主体的|しゅたいてき}であるべきだ。",
        "{科学|かがく}ジャーナリズムは、{科学|かがく}の{価値|かち}を{正|ただ}しく{認|みと}めてもらえるよう{努|つと}めるべきだ。",
      ],
      optArti: [
        "Ilmuwan harus lebih memahami posisi jurnalisme sains.",
        "Ilmuwan harus meninjau ulang bentuk hubungannya dengan jurnalisme sains.",
        "Jurnalisme sains harus bersikap mandiri dalam menentukan isi pemberitaan.",
        "Jurnalisme sains harus berusaha agar nilai sains diakui dengan benar.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{筆者|ひっしゃ}によると、まちの{樹木|じゅもく}の{大|おお}きな{役割|やくわり}とは{何|なに}か。",
      arti: "Menurut penulis, apa peran besar pepohonan kota?",
      optYomi: [
        "{人々|ひとびと}に{木|き}が{身近|みぢか}な{存在|そんざい}であることを{意識|いしき}させる。",
        "{人々|ひとびと}に{未来|みらい}{都市的|としてき}なイメージを{与|あた}える。",
        "{人々|ひとびと}を{現実|げんじつ}の{煩|わずら}わしさから{逃|のが}れさせる。",
        "{人々|ひとびと}を{落|お}ち{着|つ}いた{気持|きも}ちにさせる。",
      ],
      optArti: [
        "Membuat orang sadar bahwa pohon adalah sesuatu yang dekat.",
        "Memberi orang kesan kota masa depan.",
        "Membuat orang lepas dari kerepotan kenyataan.",
        "Membuat orang merasa tenang.",
      ],
    },
    60: {
      yomi: "①それとはどういうことか。",
      arti: "Apa yang dimaksud \"① itu\"?",
      optYomi: [
        "その{土地|とち}に{暮|く}らす{人々|ひとびと}の{好|この}みに{合|あ}わせた{樹木|じゅもく}を{植|う}えること",
        "その{土地|とち}の{特性|とくせい}と{人々|ひとびと}の{暮|く}らしを{考慮|こうりょ}し、{樹木|じゅもく}を{植|う}えること",
        "その{土地|とち}の{歴史的|れきしてき}な{樹木|じゅもく}を{大切|たいせつ}にし、{保存|ほぞん}すること",
        "その{土地|とち}の{季節|きせつ}の{移|うつ}ろいを{感|かん}じさせる{樹木|じゅもく}を{大切|たいせつ}にすること",
      ],
      optArti: [
        "Menanam pohon yang sesuai selera orang yang tinggal di daerah itu",
        "Menanam pohon dengan mempertimbangkan karakteristik daerah dan kehidupan orang-orangnya",
        "Menjaga dan melestarikan pohon bersejarah di daerah itu",
        "Menghargai pohon yang membuat orang merasakan pergantian musim di daerah itu",
      ],
    },
    61: {
      yomi: "②もっと{欲張|よくば}ってとあるが、{筆者|ひっしゃ}の{気持|きも}ちと{合|あ}うものはどれか。",
      arti: "Tertulis \"② lebih serakah lagi\"; mana yang sesuai dengan perasaan penulis?",
      optYomi: [
        "{自分|じぶん}の{好|この}みだけではなく、まち{全体|ぜんたい}との{調和|ちょうわ}も{考|かんが}えてほしい。",
        "ガーデニングをする{人達|ひとたち}{同士|どうし}で、もっと{情報|じょうほう}{交換|こうかん}をしてほしい。",
        "{個々|ここ}の{庭|にわ}の{花|はな}や{木|き}が、さらに{美|うつく}しく{育|そだ}つようにしてほしい。",
        "{個々|ここ}の{庭|にわ}よりも、まちの{共有|きょうゆう}の{部分|ぶぶん}のほうに{力|ちから}を{入|い}れてほしい。",
      ],
      optArti: [
        "Ingin mereka tidak hanya memikirkan selera sendiri, tetapi juga keselarasan dengan seluruh kota.",
        "Ingin sesama penghobi berkebun lebih banyak bertukar informasi.",
        "Ingin bunga dan pohon di setiap taman tumbuh lebih indah lagi.",
        "Ingin mereka lebih berfokus pada bagian bersama kota daripada taman masing-masing.",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{人々|ひとびと}がまちの{木々|きぎ}を{愛|め}でることで、{子供達|こどもたち}が{自然|しぜん}に{関心|かんしん}を{持|も}つようになる。",
        "{人々|ひとびと}がまちの{木々|きぎ}を{愛|め}でることが、よいまちづくりにつながる。",
        "{人々|ひとびと}がまちの{木々|きぎ}の{手入|てい}れを{怠|おこた}らなければ、よいまちになる。",
        "{人々|ひとびと}が{季節|きせつ}による{木々|きぎ}の{変化|へんか}に{関心|かんしん}を{持|も}つことで、{愛|め}でる{心|こころ}が{生|う}まれる。",
      ],
      optArti: [
        "Dengan orang-orang menyayangi pepohonan kota, anak-anak jadi tertarik pada alam.",
        "Orang-orang menyayangi pepohonan kota akan mengarah pada pembangunan kota yang baik.",
        "Jika orang-orang tidak lalai merawat pepohonan kota, kota akan menjadi baik.",
        "Dengan orang-orang tertarik pada perubahan pohon menurut musim, lahirlah hati yang menyayangi.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{雑談|ざつだん}の{良|よ}い{点|てん}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang sisi baik obrolan santai?",
      optYomi: [
        "Aはお{互|たが}いの{考|かんが}えを{認|みと}め{合|あ}えると{述|の}べ、Bは{相手|あいて}の{人間性|にんげんせい}が{見|み}えてくると{述|の}べている。",
        "Aは{相手|あいて}と{意見|いけん}{交換|こうかん}ができると{述|の}べ、Bはバカらしい{話|はなし}をしても{受|う}け{入|い}れてもらえると{述|の}べている。",
        "Aは{自分|じぶん}が{気|き}づいていなかったことに{気|き}づけると{述|の}べ、Bは{相手|あいて}の{本音|ほんね}を{知|し}ることができると{述|の}べている。",
        "Aは{誰|だれ}もが{自由|じゆう}に{意見|いけん}を{発言|はつげん}できると{述|の}べ、Bは{相手|あいて}と{自分|じぶん}との{共通点|きょうつうてん}を{見|み}つけることができると{述|の}べている。",
      ],
      optArti: [
        "A menyatakan bisa saling mengakui pemikiran; B menyatakan kepribadian lawan bicara jadi terlihat.",
        "A menyatakan bisa bertukar pendapat; B menyatakan obrolan konyol pun bisa diterima.",
        "A menyatakan bisa menyadari hal yang sebelumnya tidak disadari; B menyatakan bisa mengetahui isi hati lawan bicara.",
        "A menyatakan siapa pun bisa bebas berpendapat; B menyatakan bisa menemukan kesamaan dengan lawan bicara.",
      ],
    },
    64: {
      yomi: "{雑談|ざつだん}をするときの{姿勢|しせい}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang sikap saat mengobrol santai?",
      optYomi: [
        "AもBも、{相手|あいて}の{話|はなし}をよく{聞|き}くことが{大切|たいせつ}だと{述|の}べている。",
        "AもBも、{相手|あいて}と{自分|じぶん}が{同|おな}じぐらいの{割合|わりあい}で{話|はな}すようにしようと{述|の}べている。",
        "Aは{相手|あいて}の{話|はなし}を{聞|き}くことが{大切|たいせつ}だと{述|の}べ、Bは{自分|じぶん}から{話|はな}すようにしようと{述|の}べている。",
        "Aは{相手|あいて}の{発言|はつげん}の{意図|いと}を{考|かんが}えることが{大切|たいせつ}だと{述|の}べ、Bはまずは{相手|あいて}に{話|はなし}をさせることが{大切|たいせつ}だと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan pentingnya mendengarkan lawan bicara dengan baik.",
        "A dan B sama-sama menyatakan sebaiknya berbicara dengan porsi yang seimbang.",
        "A menyatakan pentingnya mendengarkan lawan bicara; B menyatakan sebaiknya kita yang memulai bicara.",
        "A menyatakan pentingnya memikirkan maksud ucapan lawan; B menyatakan pentingnya membiarkan lawan bicara lebih dulu.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "そうした{人|ひと}に{出会|であ}うのが、{現場|げんば}に{通|かよ}う{楽|たの}しみのひとつだとあるが、なぜか。",
      arti: "Tertulis \"bertemu orang seperti itu adalah salah satu kesenangan pergi ke lokasi\"; mengapa?",
      optYomi: [
        "{職人|しょくにん}から{得|え}る{情報|じょうほう}で{自分|じぶん}のやり{方|かた}の{正|ただ}しさが{確|たし}かめられるから",
        "{職人|しょくにん}たちの{経験|けいけん}に{基|もと}づいた{信頼|しんらい}できる{情報|じょうほう}が{得|え}られるから",
        "{様々|さまざま}な{職人|しょくにん}たちから{建築|けんちく}{設計|せっけい}の{多様性|たようせい}が{学|まな}べるから",
        "{経験|けいけん}{豊|ゆた}かな{職人|しょくにん}たちの{仕事|しごと}ぶりが{見|み}られるから",
      ],
      optArti: [
        "Karena dengan informasi dari perajin ia bisa memastikan cara kerjanya benar",
        "Karena bisa mendapat informasi tepercaya yang berdasarkan pengalaman para perajin",
        "Karena bisa mempelajari keragaman desain arsitektur dari berbagai perajin",
        "Karena bisa melihat cara kerja para perajin yang berpengalaman",
      ],
    },
    66: {
      yomi: "{鉛筆|えんぴつ}で{描|か}かれた{図面|ずめん}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang gambar rancangan yang dibuat dengan pensil?",
      optYomi: [
        "{設計|せっけい}の{過程|かてい}や{描|か}いた{人|ひと}に{関|かん}する{情報|じょうほう}が{得|え}られる。",
        "{経験|けいけん}を{積|つ}んで{設計|せっけい}に{自信|じしん}のある{人|ひと}にしか{描|か}けない。",
        "{細部|さいぶ}は{分|わ}かりにくいが、{全体|ぜんたい}は{把握|はあく}しやすい。",
        "{情報|じょうほう}を{読|よ}み{取|と}りにくいが、{描|か}いた{人|ひと}の{感情|かんじょう}がこもっている。",
      ],
      optArti: [
        "Bisa didapat informasi tentang proses desain dan orang yang menggambarnya.",
        "Hanya bisa digambar oleh orang yang berpengalaman dan percaya diri dalam merancang.",
        "Detailnya sulit dipahami, tetapi keseluruhannya mudah dipahami.",
        "Informasinya sulit dibaca, tetapi mengandung perasaan orang yang menggambarnya.",
      ],
    },
    67: {
      yomi: "{筆者|ひっしゃ}は、コンピューターが{社会|しゃかい}にどのような{影響|えいきょう}を{与|あた}えたと{述|の}べているか。",
      arti: "Menurut penulis, pengaruh apa yang diberikan komputer pada masyarakat?",
      optYomi: [
        "{多|おお}くの{情報|じょうほう}の{中|なか}から{必要|ひつよう}な{情報|じょうほう}を{選|えら}び{出|だ}しにくくなった。",
        "リスクの{高|たか}い{様々|さまざま}な{種類|しゅるい}の{情報|じょうほう}が{氾濫|はんらん}するようになった。",
        "これまでに{得|え}られた{経験則|けいけんそく}が{社会|しゃかい}で{必要|ひつよう}とされなくなった。",
        "どこにどのようなリスクが{潜|ひそ}んでいるか{把握|はあく}しにくくなった。",
      ],
      optArti: [
        "Menjadi sulit memilih informasi yang diperlukan dari banyak informasi.",
        "Berbagai jenis informasi berisiko tinggi menjadi membanjir.",
        "Kaidah empiris yang didapat selama ini tidak lagi dibutuhkan masyarakat.",
        "Menjadi sulit mengetahui risiko apa yang tersembunyi di mana.",
      ],
    },
    68: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "コンピューター{化|か}によるリスクを{経験則|けいけんそく}によって{回避|かいひ}すべきだ。",
        "コンピューター{化|か}による{効率|こうりつ}{重視|じゅうし}の{風潮|ふうちょう}を{改|あらた}めるべきだ。",
        "{手|て}によってなされる{仕事|しごと}の{伝統|でんとう}を{守|まも}っていくべきだ。",
        "{手|て}によってなされる{仕事|しごと}の{価値|かち}を{再|さい}{認識|にんしき}すべきだ。",
      ],
      optArti: [
        "Risiko komputerisasi harus dihindari dengan kaidah empiris.",
        "Kecenderungan mementingkan efisiensi akibat komputerisasi harus diubah.",
        "Tradisi pekerjaan tangan harus dijaga.",
        "Nilai pekerjaan yang dilakukan dengan tangan harus disadari kembali.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{大森|おおもり}{大学|だいがく}の{学生|がくせい}のリンさんは、{明日中|あすじゅう}に{借|か}りたい{本|ほん}がある。{明日|あした}{行|い}ける{図書館|としょかん}の{中|なか}では、{以下|いか}の4{館|かん}が{所蔵|しょぞう}していることがわかったので、メモをした。リンさんが{本|ほん}を{借|か}りられるのは、{次|つぎ}の{方法|ほうほう}のうちどれか。",
      arti: "Lin-san, mahasiswa Universitas Omori, ingin meminjam sebuah buku paling lambat besok. Di antara perpustakaan yang bisa ia datangi besok, ia tahu 4 perpustakaan berikut menyimpan buku itu dan mencatatnya. Cara mana yang membuat Lin-san bisa meminjam buku itu?",
      optYomi: [
        "{学生証|がくせいしょう}を{持参|じさん}して、{長島|ながしま}{大学|だいがく}{図書館|としょかん}に{行|い}く。",
        "{今|いま}から{紹介状|しょうかいじょう}を{申請|しんせい}し、それを{持参|じさん}して、あおば{大学|だいがく}{図書館|としょかん}に{行|い}く。",
        "{学生証|がくせいしょう}を{持参|じさん}して、{中山|なかやま}{工業|こうぎょう}{大学|だいがく}{図書館|としょかん}に{行|い}く。",
        "{今|いま}から{紹介状|しょうかいじょう}を{申請|しんせい}し、それを{持参|じさん}して、さくら{大学|だいがく}{図書館|としょかん}に{行|い}く。",
      ],
      optArti: [
        "Membawa kartu mahasiswa dan pergi ke Perpustakaan Universitas Nagashima.",
        "Mengajukan surat pengantar sekarang, lalu membawanya ke Perpustakaan Universitas Aoba.",
        "Membawa kartu mahasiswa dan pergi ke Perpustakaan Institut Teknologi Nakayama.",
        "Mengajukan surat pengantar sekarang, lalu membawanya ke Perpustakaan Universitas Sakura.",
      ],
    },
    70: {
      yomi: "{大森|おおもり}{大学|だいがく}の{学生|がくせい}のロイさんは{利用|りよう}したい{資料|しりょう}があるが、{大森|おおもり}{大学|だいがく}にはなかった。{他|た}{大学|だいがく}に{行|い}く{時間|じかん}がないため、{複写|ふくしゃ}{依頼|いらい}か{資料|しりょう}{借用|しゃくよう}のサービスを{利用|りよう}しようと{考|かんが}えている。ロイさんが{注意|ちゅうい}しなければならないこととして{合|あ}っているのは、{次|つぎ}のどれか。",
      arti: "Roy-san, mahasiswa Universitas Omori, ingin memakai suatu bahan, tetapi tidak ada di Universitas Omori. Karena tidak sempat pergi ke universitas lain, ia berniat memakai layanan permintaan fotokopi atau peminjaman bahan. Mana yang benar sebagai hal yang perlu diperhatikan Roy-san?",
      optYomi: [
        "{複写|ふくしゃ}{依頼|いらい}は、{資料|しりょう}を{所蔵|しょぞう}する{大学|だいがく}のホームページから{行|おこな}わなければならない。",
        "{複写|ふくしゃ}{依頼|いらい}は、{一度|いちど}に2{件|けん}{以上|いじょう}まとめて{申|もう}し{込|こ}むことはできない。",
        "{資料|しりょう}の{借用|しゃくよう}に{必要|ひつよう}な{送料|そうりょう}は、{半額|はんがく}を{自身|じしん}が{負担|ふたん}しなければならない。",
        "{借用|しゃくよう}した{資料|しりょう}は、{大森|おおもり}{大学|だいがく}{図書館|としょかん}{内|ない}で{閲覧|えつらん}しなければならない。",
      ],
      optArti: [
        "Permintaan fotokopi harus dilakukan dari situs web universitas yang menyimpan bahan.",
        "Permintaan fotokopi tidak bisa diajukan sekaligus 2 atau lebih.",
        "Separuh ongkos kirim untuk peminjaman bahan harus ditanggung sendiri.",
        "Bahan yang dipinjam harus dibaca di dalam Perpustakaan Universitas Omori.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：十人十色 ──
    "7": {
      yomi: `{以下|いか}は、{小説家|しょうせつか}が{書|か}いたエッセイである。

マニュアルというものが、この{世|よ}には{存在|そんざい}する。{機械|きかい}を{買|か}った{場合|ばあい}には、これを{読|よ}む。{書|か}かれてある{通|とお}りに{動|うご}かないと{困|こま}る。ビデオの{再生|さいせい}ボタンを{押|お}したのに、{録画|ろくが}が{始|はじ}まってはたまらない。ところが、{生|い}き{物|もの}はそうはいかない。あちらに{通用|つうよう}したことが、[41]。

うちで、ねこを{飼|か}い{始|はじ}めた{当座|とうざ}は、{何|なに}も{分|わ}からなかった。{吐|は}いたりすると、それだけでびっくりしてしまった。あわてて、ねこを{飼|か}っている{人|ひと}に{電話|でんわ}した。{一番|いちばん}にかけたところが{留守|るす}だと、ますます、{動揺|どうよう}する。{結局|けっきょく}、{関西|かんさい}の{知|し}り{合|あ}いにまでかけて、「{心配|しんぱい}ありませんよ。ねこは{吐|は}くものですよ」という{言葉|ことば}をいただき、やっと{安心|あんしん}。こんな{具合|ぐあい}だった。

さて、[42]{時|とき}に、{当然|とうぜん}のことながら「ねこの{飼|か}い{方|かた}」の{本|ほん}も{読|よ}んだ。マニュアルである。なるほど——と{思|おも}えることが{書|か}いてある。{中|なか}でも{納得|なっとく}したのが、[43]。

——「{動物|どうぶつ}にとって、{用足|ようた}ししている（{注|ちゅう}1）{時|とき}は、{最|もっと}も{無防備|むぼうび}な{状態|じょうたい}（{注|ちゅう}2）です。{襲|おそ}われたら{大|だい}ピンチ。その{最中|さいちゅう}、{人|ひと}に{近|ちか}づかれることを、ねこはとても{嫌|きら}います。{飼|か}い{主|ぬし}は、{離|はな}れるようにし、のびのびとした{気分|きぶん}にさせてやりましょう」

これは{頷|うなず}ける。そこで、ゆずが——うちのねこの{名前|なまえ}はゆずという——そうする{時|とき}は{遠慮|えんりょ}していた。

[44]。{朝|あさ}。ねこトイレ（{注|ちゅう}3）の{砂|すな}をかきまわし、{汚|よご}れ{物|もの}を{取|と}り{始|はじ}めると、「ご{苦労|くろう}」というように、ゆずがやって{来|く}る。そして、まだトイレに{手|て}を{入|い}れているのに、「どけどけ」というように{中|なか}に{入|はい}ってくる。そして、{足|あし}を{踏|ふ}ん{張|ば}り、——{行|おこな}うのだ。これ{見|み}よがしに（{注|ちゅう}4）。

あの{説得力|せっとくりょく}のあるマニュアルは、{一体全体|いったいぜんたい}、{何|なん}だったのか。なるほど、{生|い}きている{物|もの}には{個性|こせい}があると、あらためて[45]。
（{北村|きたむら}{薫|かおる}『{書|か}かずにはいられない―{北村|きたむら}{薫|かおる}のエッセイ』による）
（{注|ちゅう}1）{用足|ようた}ししている：{大便|だいべん}や{小便|しょうべん}をしている
（{注|ちゅう}2）{無防備|むぼうび}な{状態|じょうたい}：{危険|きけん}に{備|そな}えていない{様子|ようす}
（{注|ちゅう}3）ねこトイレ：{箱|はこ}の{底|そこ}に{砂|すな}などを{敷|し}いた、ねこ{用|よう}のトイレ
（{注|ちゅう}4）これ{見|み}よがしに：{自慢|じまん}げに{見|み}せつけるように`,
      arti: `Berikut ini adalah esai yang ditulis seorang novelis.

Di dunia ini ada yang namanya manual. Saat membeli mesin, kita membacanya. Kalau mesin tidak bekerja sesuai yang tertulis, repot. Sudah menekan tombol putar video, kalau malah mulai merekam, tidak tahan. Namun, makhluk hidup tidak begitu. Hal yang berlaku di sana [41].

Waktu baru mulai memelihara kucing di rumah, saya tidak tahu apa-apa. Kalau kucing muntah saja, saya sudah kaget. Saya buru-buru menelepon orang yang memelihara kucing. Kalau yang pertama saya telepon tidak di rumah, saya makin panik. Akhirnya saya sampai menelepon kenalan di Kansai, dan baru lega setelah mendapat kata-kata, "Tidak perlu khawatir. Kucing memang suka muntah." Begitulah keadaannya.

Nah, pada masa [42] itu, tentu saja saya juga membaca buku "cara memelihara kucing". Itu manual. Di dalamnya tertulis hal-hal yang membuat saya berpikir "oh, begitu". Yang paling meyakinkan saya adalah [43].

— "Bagi hewan, saat buang hajat (catatan 1) adalah saat paling tidak terlindung (catatan 2). Kalau diserang, gawat sekali. Di tengah-tengahnya, kucing sangat tidak suka didekati manusia. Pemilik hendaknya menjauh dan membiarkannya merasa leluasa."

Ini masuk akal. Maka, ketika Yuzu — nama kucing kami Yuzu — sedang melakukannya, saya menahan diri.

[44]. Pagi hari. Ketika saya mengaduk pasir toilet kucing (catatan 3) dan mulai mengambil kotorannya, Yuzu datang seolah berkata, "Terima kasih atas kerja kerasmu." Lalu, meski tangan saya masih di dalam toilet, ia masuk seolah berkata, "Minggir, minggir." Kemudian ia menapakkan kakinya dengan kuat, dan — melakukannya. Seakan pamer (catatan 4).

Sebenarnya apa gunanya manual yang meyakinkan itu? Begitu rupanya, makhluk hidup punya kepribadian masing-masing, [45].
(Dari buku karya Kitamura Kaoru, "Tak Bisa Tidak Menulis – esai Kitamura Kaoru")
(Catatan 1) 用足ししている: sedang buang air besar atau kecil
(Catatan 2) 無防備な状態: keadaan tidak siap menghadapi bahaya
(Catatan 3) ねこトイレ: toilet kucing, kotak yang dasarnya dilapisi pasir dan sebagainya
(Catatan 4) これ見よがしに: seakan memamerkan dengan bangga`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{教師|きょうし}＝{話|はな}す{人|ひと}、{生徒|せいと}＝{聞|き}く{人|ひと}という{構造|こうぞう}が{知|し}らず{知|し}らずのうちに{教室|きょうしつ}{空間|くうかん}にできあがり、そして{固定化|こていか}してしまうのは{恐|おそ}ろしいことではないかと{思|おも}う。{教師|きょうし}が{先取|さきど}りしてしまうことで、{生徒|せいと}が{自分|じぶん}{自身|じしん}で{考|かんが}え、{解決|かいけつ}しようとする{芽|め}をつみとってしまう{場合|ばあい}がある。

いつも{話|はな}し{続|つづ}けるのがコミュニケーションでない。{教師|きょうし}{側|がわ}が{沈黙|ちんもく}し、「{待|ま}つ」という{行為|こうい}も{時|とき}には{大切|たいせつ}であろう。もう{少|すこ}し{話|はな}したい、と{思|おも}うところで{一歩|いっぽ}ひいてみる（{注|ちゅう}）ことで、{相手|あいて}が{言|い}おうとすることを{引|ひ}き{出|だ}すことができるのである。
（{徳井|とくい}{厚子|あつこ}『{日本語|にほんご}{教師|きょうし}の「{衣|ころも}」{再考|さいこう}―{多文化|たぶんか}{共生|きょうせい}への{課題|かだい}』による）
（{注|ちゅう}）{一歩|いっぽ}ひいてみる：ここでは、{話|はな}すのをやめてみる`,
      arti: `Saya rasa menakutkan jika struktur guru = yang berbicara, murid = yang mendengar terbentuk tanpa disadari di ruang kelas dan kemudian membeku. Dengan guru mendahului, kadang tunas murid untuk berpikir dan menyelesaikan sendiri justru tercabut.

Komunikasi bukan berarti terus berbicara. Kadang-kadang tindakan guru diam dan "menunggu" juga penting. Dengan mundur selangkah (catatan) tepat ketika kita ingin berbicara sedikit lagi, kita bisa menggali apa yang hendak dikatakan lawan bicara.
(Dari buku karya Tokui Atsuko tentang meninjau ulang "pakaian" guru bahasa Jepang – tantangan menuju hidup bersama multibudaya)
(Catatan) 一歩ひいてみる: di sini, mencoba berhenti berbicara`,
    },
    "8-2": {
      yomi: `{以下|いか}は、ある{市役所|しやくしょ}のホームページに{掲載|けいさい}されたお{知|し}らせである。

2016{年|ねん}11{月|がつ}{1日|ついたち}
スポーツ{課|か}

{市民|しみん}{運動場|うんどうじょう}の{予約|よやく}について

{市民|しみん}{運動場|うんどうじょう}の{予約|よやく}は、これまで{管理|かんり}{事務所|じむしょ}{窓口|まどぐち}で{受|う}け{付|つ}けておりましたが、2017{年|ねん}2{月|がつ}{1日|ついたち}よりインターネット{上|じょう}の{予約|よやく}システムでも{行|おこな}うことができるようになります。{予約|よやく}システムの{利用|りよう}は{平日|へいじつ}、{土日|どにち}{祝日|しゅくじつ}を{問|と}わず24{時間|じかん}{可能|かのう}で、{予約|よやく}は、{窓口|まどぐち}での{予約|よやく}と{同様|どうよう}に、{使用|しよう}{日|び}の{一|いっ}か{月|げつ}{前|まえ}から{受|う}け{付|つ}けます。

{予約|よやく}システムの{利用|りよう}に{際|さい}しては、{事前|じぜん}に{利用者|りようしゃ}{登録|とうろく}が{必要|ひつよう}となりますので、{身分|みぶん}を{証明|しょうめい}できるものを{持|も}って{管理|かんり}{事務所|じむしょ}{窓口|まどぐち}にお{越|こ}しください。

{市民|しみん}{運動場|うんどうじょう}{管理|かんり}{事務所|じむしょ}　〒002-3833　{南松市|みなみまつし}{中央町|ちゅうおうちょう}3-2　{中央|ちゅうおう}{公園|こうえん}{内|ない}
（{受付|うけつけ}{時間|じかん}：{月曜日|げつようび}～{金曜日|きんようび}　9:00～17:00）`,
      arti: `Berikut ini adalah pengumuman yang dimuat di situs web sebuah balai kota.

1 November 2016
Bagian Olahraga

Tentang reservasi lapangan olahraga warga

Reservasi lapangan olahraga warga selama ini diterima di loket kantor pengelola, tetapi mulai 1 Februari 2017 reservasi juga bisa dilakukan melalui sistem reservasi di internet. Sistem reservasi bisa dipakai 24 jam, baik hari kerja maupun Sabtu, Minggu, dan hari libur nasional, dan reservasi diterima mulai satu bulan sebelum hari pemakaian, sama seperti reservasi di loket.

Untuk memakai sistem reservasi, diperlukan pendaftaran pengguna terlebih dahulu, jadi silakan datang ke loket kantor pengelola dengan membawa tanda pengenal.

Kantor Pengelola Lapangan Olahraga Warga, 〒002-3833, Chuo-cho 3-2, Kota Minamimatsu, di dalam Taman Chuo
(Jam layanan: Senin – Jumat, 9.00–17.00)`,
    },
    "8-3": {
      yomi: `{異文化|いぶんか}{間|かん}での{対話|たいわ}を{議論|ぎろん}するときに、{必|かなら}ずといってよいぐらい{出|で}てくるのが、{価値観|かちかん}の{理解|りかい}と{共有|きょうゆう}である。{他者|たしゃ}と{対話|たいわ}を{通|とお}して、{人間|にんげん}{関係|かんけい}を{樹立|じゅりつ}していくには、{自己|じこ}の{価値観|かちかん}を{保存|ほぞん}したままで、{他者|たしゃ}の{価値観|かちかん}を{理解|りかい}するという{方略|ほうりゃく}だけでは{十分|じゅうぶん}ではない。{相互的|そうごてき}な{働|はたら}きかけを{通|つう}じて、{何|なに}か{新|あら}たな{価値|かち}を{共有|きょうゆう}することが{要求|ようきゅう}されるのである。すなわち、{自|みずか}らの{価値観|かちかん}を{相対化|そうたいか}し、{新|あら}たな{価値|かち}を{対話|たいわ}という{共同|きょうどう}{作業|さぎょう}を{通|つう}じて{創|つく}り{上|あ}げ、それを{共有|きょうゆう}していく{態度|たいど}が{必要|ひつよう}なのだ。
（ARCLE{編集|へんしゅう}{委員会|いいんかい}・{田中|たなか}{茂範|しげのり}・アレン{玉井|たまい}{光江|みつえ}・{根岸|ねぎし}{雅史|まさし}・{吉田|よしだ}{研作|けんさく}{編著|へんちょ}『{幼児|ようじ}から{成人|せいじん}まで{一貫|いっかん}した{英語|えいご}{教育|きょういく}のための{枠組|わくぐ}み―ECF-English Curriculum Framework』による）`,
      arti: `Saat membahas dialog antarbudaya, yang hampir pasti muncul adalah pemahaman dan berbagi nilai-nilai. Untuk membangun hubungan antarmanusia melalui dialog dengan orang lain, strategi memahami nilai-nilai orang lain sambil mempertahankan nilai-nilai sendiri saja tidak cukup. Melalui upaya timbal balik, dituntut untuk berbagi suatu nilai baru. Dengan kata lain, diperlukan sikap merelatifkan nilai-nilai sendiri, menciptakan nilai baru melalui kerja sama bernama dialog, dan membagikannya bersama.
(Dari buku suntingan Komite Editorial ARCLE dkk., kerangka pendidikan bahasa Inggris yang konsisten dari anak usia dini hingga dewasa – ECF)`,
    },
    "8-4": {
      yomi: `{僕|ぼく}は「{変|へん}な{人|ひと}」です。そうでなければ、こんな{仕事|しごと}はしてません。そして{僕|ぼく}は「{普通|ふつう}の{人|ひと}」です。だからこそこの{仕事|しごと}が{成立|せいりつ}しています。

「{特別|とくべつ}なもの」を{生|う}み{出|だ}そうとするとき、それがどんなふうに{特別|とくべつ}なのかを「{普通|ふつう}」という{視点|してん}から{見極|みきわ}める{必要|ひつよう}があります。「{特別|とくべつ}」と「{普通|ふつう}」、{定規|じょうぎ}を{何度|なんど}も{持|も}ち{替|か}えるのです。そのために{自分|じぶん}の{中|なか}の{普通|ふつう}さを{死守|ししゅ}するのです。
（{小林|こばやし}{賢太郎|けんたろう}『{僕|ぼく}がコントや{演劇|えんげき}のために{考|かんが}えていること』による）`,
      arti: `Saya adalah "orang aneh". Kalau tidak, saya tidak akan melakukan pekerjaan seperti ini. Dan saya juga "orang biasa". Justru karena itulah pekerjaan ini bisa berjalan.

Ketika hendak menciptakan "sesuatu yang istimewa", kita perlu memastikan dari sudut pandang "biasa" seperti apa keistimewaannya. "Istimewa" dan "biasa", kita berganti penggaris berkali-kali. Untuk itu, saya mati-matian menjaga kebiasaan (kenormalan) dalam diri saya.
(Dari buku karya Kobayashi Kentaro, "Hal yang Saya Pikirkan untuk Komedi dan Teater")`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{人|ひと}に{従順|じゅうじゅん}な{飼|か}い{犬|いぬ}は、もともとオオカミの{仲間|なかま}を{飼|か}い{馴|な}らしたものである。（{中略|ちゅうりゃく}）

ところが、「{人間|にんげん}がオオカミを{飼|か}い{馴|な}らした」という{話|はなし}には{謎|なぞ}が{多|おお}い。{犬|いぬ}が{人間|にんげん}と{暮|く}らすようになったのは、15000{年|ねん}ほど{前|まえ}の{旧石器|きゅうせっき}{時代|じだい}のことであると{推測|すいそく}されている。{当時|とうじ}の{人類|じんるい}にとって、{肉食獣|にくしょくじゅう}は{恐|おそ}るべき{敵|てき}であった。そんな{恐|おそ}ろしい{肉食獣|にくしょくじゅう}を{飼|か}い{馴|な}らすという{発想|はっそう}を{当時|とうじ}の{人類|じんるい}が{持|も}ち{得|え}たのだろうか。しかも{犬|いぬ}を{飼|か}うということは、{犬|いぬ}にエサをやらなければならない。わずかな{食糧|しょくりょう}で{暮|く}らしていた{人類|じんるい}に、{犬|いぬ}を{飼|か}うほどの{余裕|よゆう}があったのだろうか。また{当時|とうじ}の{人類|じんるい}は{犬|いぬ}がいなくても、{狩|か}りをすることができた。{犬|いぬ}を{必要|ひつよう}とする{理由|りゆう}はなかったのである。

{最近|さいきん}の{研究|けんきゅう}では、{人間|にんげん}が{犬|いぬ}を{必要|ひつよう}としたのではなく、{犬|いぬ}の{方|ほう}から{人間|にんげん}を{求|もと}めて{寄|よ}り{添|そ}ってきたと{考|かんが}えられている。{犬|いぬ}の{祖先|そせん}となったとされる{弱|よわ}いオオカミたちは、{群|む}れの{中|なか}での{順位|じゅんい}が{低|ひく}く、{食|た}べ{物|もの}も{十分|じゅうぶん}ではない。そこで、{人間|にんげん}に{近|ちか}づき、{食|た}べ{残|のこ}しをあさるようになったのではないかと{考|かんが}えられているのである。

{弱|よわ}いオオカミだけでは、{狩|か}りをすることができないが、{人間|にんげん}の{手助|てだす}けをすることはできる。そして、やがて{人間|にんげん}と{犬|いぬ}とが{共|とも}に{狩|か}りをするようになったと{推測|すいそく}されている。こう{考|かんが}えると、{当時|とうじ}、{自然界|しぜんかい}の{中|なか}で{強|つよ}い{存在|そんざい}になりつつあった{人間|にんげん}に{寄|よ}り{添|そ}うことは、{犬|いぬ}にとって{得|とく}なことが{多|おお}かった。つまり、{人間|にんげん}が{犬|いぬ}を{利用|りよう}したのではなく、{犬|いぬ}が{人間|にんげん}を{利用|りよう}したかもしれないのである。
（{稲垣|いながき}{栄洋|ひでひろ}『{弱者|じゃくしゃ}の{戦略|せんりゃく}』による）`,
      arti: `Anjing peliharaan yang patuh pada manusia pada mulanya adalah kerabat serigala yang dijinakkan. (dipersingkat)

Namun, cerita "manusia menjinakkan serigala" mengandung banyak misteri. Anjing diperkirakan mulai hidup bersama manusia sekitar 15.000 tahun lalu, pada zaman Paleolitikum. Bagi manusia waktu itu, hewan karnivora adalah musuh yang menakutkan. Mungkinkah manusia waktu itu punya gagasan untuk menjinakkan karnivora yang begitu menakutkan? Lagi pula, memelihara anjing berarti harus memberinya makan. Apakah manusia yang hidup dengan makanan seadanya punya keleluasaan untuk memelihara anjing? Selain itu, manusia waktu itu bisa berburu meski tanpa anjing. Tidak ada alasan untuk membutuhkan anjing.

Penelitian terbaru menganggap bahwa bukan manusia yang membutuhkan anjing, melainkan anjinglah yang mencari dan mendekati manusia. Serigala-serigala lemah yang dianggap menjadi leluhur anjing berperingkat rendah dalam kawanan dan makanannya pun tidak cukup. Karena itu, diperkirakan mereka mulai mendekati manusia dan mengais sisa makanan.

Serigala lemah saja tidak bisa berburu, tetapi bisa membantu manusia. Lalu diperkirakan lama-kelamaan manusia dan anjing berburu bersama. Jika dipikirkan begini, mendekati manusia yang saat itu sedang menjadi makhluk kuat di alam banyak menguntungkan bagi anjing. Artinya, mungkin bukan manusia yang memanfaatkan anjing, tetapi anjinglah yang memanfaatkan manusia.
(Dari buku karya Inagaki Hidehiro, "Strategi Kaum Lemah")`,
    },
    "9-2": {
      yomi: `{子|こ}どもはこれから{自分|じぶん}は{大人|おとな}になっていくのだから、{自分|じぶん}はどうなるのだろうとそれは{一生懸命|いっしょうけんめい}に{大人|おとな}を{観察|かんさつ}している。その{大人|おとな}に{魅力|みりょく}を{感|かん}じれば、あんなふうになりたいと{思|おも}うかもしれない。ほんのちょっとチャーミングなところを{認|みと}めて、ああ{失敗|しっぱい}しても、どじ（{注|ちゅう}1）ばかりでもいいんだと{思|おも}えることもあるかもしれない。あるいは、{僕|ぼく}はあんな{大人|おとな}にはならないだろうけれど、あんなふうにするのもすてきだなと{感|かん}じることもあるに{違|ちが}いない。とにかく{子|こ}どもは、①そんなふうに{常|つね}に{大人|おとな}を{見|み}ているのである。

（{中略|ちゅうりゃく}）

{子|こ}どもはやがて{大人|おとな}になる。その{大人|おとな}に{魅力|みりょく}がなかったら、それは{自分|じぶん}に{明日|あした}がないと{言|い}われているのと{同|おな}じことだ。{大人|おとな}になってもつまらなそうだ。{楽|たの}しいことがなさそうだと{感|かん}じたら、{君|きみ}の{未来|みらい}はこの{程度|ていど}のものだとつきつけられているのと{変|か}わらない。②これほど{子|こ}どもにとって{不幸|ふこう}なことはない。

{大人|おとな}はいつも{子|こ}どもに{見|み}つめられている、{子|こ}どもが{自分|じぶん}を{観察|かんさつ}しているということを{自覚|じかく}していなければいけないと{思|おも}う。わが{身|み}をつくろって、いいかっこするのではない。{正直|しょうじき}に{失敗|しっぱい}するのなら、{子|こ}どもより{上手|じょうず}に{失敗|しっぱい}してみせよう、{傷|きず}つくなら{子|こ}どもより{上手|じょうず}に{傷|きず}ついてみせよう。{人生|じんせい}の{先輩|せんぱい}としてというより、{現役|げんえき}の{子|こ}どもに{対|たい}してベテランの{子|こ}どもとして、ベテランらしいところを{見|み}せてやろうじゃないか。そういう{気概|きがい}の（{注|ちゅう}2）{大人|おとな}がたくさんいれば、{子|こ}どもたちはきっと{大人|おとな}の{世界|せかい}に{魅力|みりょく}を{見|み}いだすに{違|ちが}いない。それが{幸福|こうふく}な{子|こ}どもの{将来|しょうらい}につながるのだと{思|おも}う。
（{大林|おおばやし}{宣彦|のぶひこ}『{父|ちち}の{失恋|しつれん}　{娘|むすめ}の{結婚|けっこん}―べそっかきの{幸福|こうふく}そうな{顔|かお}』による）
（{注|ちゅう}1）どじ：うっかりした{失敗|しっぱい}
（{注|ちゅう}2）{気概|きがい}の：ここでは、{強|つよ}い{気持|きも}ちを{持|も}った`,
      arti: `Anak-anak, karena mereka akan menjadi dewasa, dengan sungguh-sungguh mengamati orang dewasa sambil bertanya-tanya akan jadi apa dirinya. Jika merasakan daya tarik pada orang dewasa itu, mungkin mereka ingin menjadi seperti itu. Mungkin juga mereka mengakui sedikit sisi menawannya dan bisa berpikir, ah, gagal pun, ceroboh (catatan 1) terus pun tidak apa-apa. Atau, pasti ada juga saatnya mereka merasa, aku mungkin tidak akan jadi orang dewasa seperti itu, tetapi bersikap seperti itu juga keren. Pokoknya, anak-anak ① selalu memandang orang dewasa seperti itu.

(dipersingkat)

Anak-anak kelak menjadi dewasa. Jika orang dewasa itu tidak menarik, itu sama saja dengan dikatakan bahwa dirinya tidak punya hari esok. Kalau mereka merasa menjadi dewasa pun sepertinya membosankan, sepertinya tidak ada yang menyenangkan, itu tidak ada bedanya dengan disodori kenyataan bahwa masa depanmu hanya sebatas ini. ② Tidak ada yang lebih malang bagi anak daripada ini.

Saya rasa orang dewasa harus sadar bahwa mereka selalu dipandangi anak-anak, bahwa anak-anak sedang mengamati mereka. Bukan berarti berdandan dan bergaya keren. Kalau memang gagal, tunjukkan cara gagal yang lebih piawai daripada anak-anak; kalau terluka, tunjukkan cara terluka yang lebih piawai daripada anak-anak. Bukan sebagai senior dalam hidup, melainkan sebagai anak veteran di hadapan anak yang masih aktif, mari tunjukkan sisi veteran kita. Jika banyak orang dewasa yang bertekad (catatan 2) seperti itu, anak-anak pasti akan menemukan daya tarik dalam dunia orang dewasa. Saya rasa itulah yang mengarah pada masa depan anak yang bahagia.
(Dari buku karya Obayashi Nobuhiko tentang patah hati sang ayah dan pernikahan putrinya)
(Catatan 1) どじ: kesalahan karena ceroboh
(Catatan 2) 気概の: di sini, yang memiliki tekad kuat`,
    },
    "9-3": {
      yomi: `{科学|かがく}{記者|きしゃ}を{始|はじ}めた20{年|ねん}ほど{前|まえ}、{記者|きしゃ}の{訪問|ほうもん}を{歓迎|かんげい}しない{科学者|かがくしゃ}は、けっして{珍|めずら}しくなかった。「{新聞|しんぶん}{記者|きしゃ}との{付|つ}き{合|あ}いには{何|なん}のメリットもなく、{時間|じかん}の{無駄|むだ}。{記者|きしゃ}と{親|した}しい{科学者|かがくしゃ}は、{同僚|どうりょう}からうさんくさい{目|め}で{見|み}られる。{真理|しんり}の{探究|たんきゅう}に{没頭|ぼっとう}する{科学者|かがくしゃ}が、{記者|きしゃ}なんていう{世俗|せぞく}を{相手|あいて}にしては{沽券|こけん}（{注|ちゅう}1）にかかわる」というわけだ。それが{今|いま}は、まったく{違|ちが}う。{科学者|かがくしゃ}も、{研究|けんきゅう}に{税金|ぜいきん}を{使|つか}うからには{自分|じぶん}の{仕事|しごと}を{積極的|せっきょくてき}に{世間|せけん}に{説明|せつめい}するのが{当然|とうぜん}だとみなされ、{大学|だいがく}や{研究所|けんきゅうじょ}はメディア{戦略|せんりゃく}を{練|ね}るまでになった。{変|か}われば{変|か}わるものだ。（{中略|ちゅうりゃく}）

{科学者|かがくしゃ}{側|がわ}の{広報|こうほう}が{巧|たく}みになればなるほど、{科学|かがく}ジャーナリズムが{科学者|かがくしゃ}{集団|しゅうだん}のたんなる{宣伝係|せんでんがかり}で{仕事|しごと}をした{気|き}になってしまう{恐|おそ}れがある。

「サイエンス」や{英国|えいこく}の「ネイチャー」に{載|の}る{科学者|かがくしゃ}の{論文|ろんぶん}を、どの{新聞|しんぶん}も{毎週|まいしゅう}のように{記事|きじ}にして{紹介|しょうかい}している。その{多|おお}くが、これらの{論文誌|ろんぶんし}の{巧|たく}みな{広報|こうほう}{資料|しりょう}や{研究者|けんきゅうしゃ}の{記者|きしゃ}{発表|はっぴょう}をもとにしているのだが、これなどまさに、{何|なに}を{社会|しゃかい}に{伝|つた}えるかは{自分|じぶん}で{決|き}めるというジャーナリズムの{要|かなめ}（{注|ちゅう}2）を、{科学者|かがくしゃ}{集団|しゅうだん}{側|がわ}になかば{預|あず}けてしまっているのではないか。

{自分|じぶん}でネタ{探|さが}しをするよりも、このほうがたしかに{効率的|こうりつてき}なのだ。

{米国|べいこく}の{科学|かがく}ジャーナリズムの{教科書|きょうかしょ}には、{科学者|かがくしゃ}たちはマスメディアを{自分|じぶん}たちの{広報|こうほう}{機関|きかん}のようにとらえるものだと{書|か}いてある。{科学|かがく}ジャーナリズムは、{広報|こうほう}{戦略|せんりゃく}に{長|た}けてきた（{注|ちゅう}3）{科学者|かがくしゃ}たちとどう{付|つ}き{合|あ}っていくべきか。その{哲学|てつがく}と{戦略|せんりゃく}を、こちら{側|がわ}も{改|あらた}めて{肝|きも}に{銘|めい}じて（{注|ちゅう}4）おかなければならない{時代|じだい}になった。
（YOMIURI ONLINE2010{年|ねん}3{月|がつ}7{日|か}{取得|しゅとく}による）
（{注|ちゅう}1）{沽券|こけん}にかかわる：{体面|たいめん}を{損|そこ}ねる
（{注|ちゅう}2）{要|かなめ}：{最|もっと}も{大切|たいせつ}な{部分|ぶぶん}
（{注|ちゅう}3）{長|た}けてきた：{上手|じょうず}になってきた
（{注|ちゅう}4）{肝|きも}に{銘|めい}じて：{忘|わす}れないように{心|こころ}にしっかりととめて`,
      arti: `Sekitar 20 tahun lalu ketika saya mulai menjadi wartawan sains, ilmuwan yang tidak menyambut kunjungan wartawan sama sekali tidak langka. "Bergaul dengan wartawan koran tidak ada manfaatnya, buang-buang waktu. Ilmuwan yang akrab dengan wartawan dipandang curiga oleh rekan kerjanya. Bagi ilmuwan yang tenggelam dalam pencarian kebenaran, melayani hal duniawi seperti wartawan bisa merusak martabat (catatan 1)", begitulah. Sekarang, sama sekali berbeda. Ilmuwan pun dianggap wajar untuk secara aktif menjelaskan pekerjaannya kepada masyarakat karena memakai uang pajak untuk penelitian, dan universitas serta lembaga penelitian sampai menyusun strategi media. Betapa berubahnya. (dipersingkat)

Makin piawai publikasi dari pihak ilmuwan, makin besar kekhawatiran jurnalisme sains merasa sudah bekerja padahal hanya menjadi juru promosi kelompok ilmuwan.

Setiap koran hampir setiap minggu memberitakan makalah ilmuwan yang dimuat di "Science" atau "Nature" dari Inggris. Kebanyakan berdasarkan bahan publikasi yang piawai dari jurnal-jurnal itu atau jumpa pers peneliti; bukankah ini justru setengah menyerahkan inti (catatan 2) jurnalisme, yaitu menentukan sendiri apa yang disampaikan kepada masyarakat, kepada pihak kelompok ilmuwan?

Memang ini lebih efisien daripada mencari bahan berita sendiri.

Dalam buku teks jurnalisme sains di Amerika tertulis bahwa ilmuwan cenderung memandang media massa seperti lembaga humas mereka sendiri. Bagaimana jurnalisme sains harus bergaul dengan ilmuwan yang makin lihai (catatan 3) dalam strategi humas? Kita telah memasuki zaman di mana pihak kami pun harus kembali mengingat baik-baik (catatan 4) filosofi dan strategi itu.
(Dari YOMIURI ONLINE, diakses 7 Maret 2010)
(Catatan 1) 沽券にかかわる: merusak martabat
(Catatan 2) 要: bagian terpenting
(Catatan 3) 長けてきた: menjadi mahir
(Catatan 4) 肝に銘じて: menanamkan baik-baik di hati agar tidak lupa`,
    },

    // ── 問題10：まちの樹木の意義 ──
    "10": {
      yomi: `{暮|く}らしの{中|なか}で{身近|みぢか}な{木|き}といえば、{街路樹|がいろじゅ}と{公園|こうえん}の{樹木|じゅもく}、そして{住宅|じゅうたく}の{庭|にわ}の{木|き}あたりでしょうか。いずれも{毎日|まいにち}{目|め}にはしているもの。あらためて{意識|いしき}することは{少|すく}ないと{思|おも}います。でも、{例|たと}えばこれがすべて{枯|か}れてしまったとしたらどうでしょう。なんとも{寂|さび}しく、{無味乾燥|むみかんそう}な、あるいは{何|なに}か{病気|びょうき}を{連想|れんそう}させるようなイメージのまちになってしまうのではないでしょうか。また、{昨今|さっこん}は、{維持|いじ}{管理|かんり}の{面|めん}などから{街路樹|がいろじゅ}を{植|う}えないまちなどもあるようですが、{一見|いっけん}{近代的|きんだいてき}、{未来|みらい}{都市的|としてき}なイメージもしますが、うるおいややすらぎのないまちのようにも{見|み}えます。このようにまちの{樹木|じゅもく}は、{実|じつ}はとても{大|おお}きな{役割|やくわり}を{持|も}っています。

では、この{木々|きぎ}たちは、ただ{植|う}えるだけ、{存在|そんざい}するだけでいいのでしょうか。そうではありません。そこに{意味|いみ}や{意義|いぎ}がなければならないのです。わかりやすく{言|い}うと、{街路樹|がいろじゅ}の{樹種|じゅしゅ}を{何|なに}にするかというようなことです。その{土地|とち}の{植生|しょくせい}（{注|ちゅう}1）を{踏|ふ}まえ、その{上|うえ}に{歴史性|れきしせい}や{未来性|みらいせい}を{重|かさ}ね{合|あ}わせる。{季節|きせつ}の{移|うつ}ろいの{中|なか}で、{人々|ひとびと}がその{木|き}をどのように{眺|なが}めながら{暮|く}らしていくのか。そんな{積|つ}み{重|かさ}ねの{上|うえ}にはじめて「ここにはこの{木|き}を{植|う}えよう」ということになる。①それがその{木|き}がその{場所|ばしょ}に{存在|そんざい}する{意義|いぎ}です。

{住宅|じゅうたく}の{庭木|にわき}も{同|おな}じです。{単|たん}に{自分|じぶん}の{好|この}みばかりでなく、その{木|き}が{住宅街|じゅうたくがい}の{小路|こみち}をどのように{演出|えんしゅつ}するのか、まわりとの{調和|ちょうわ}はどうなのか。そんなことを{考|かんが}えていくのがまちづくりの{中|なか}の「{木|き}」です。{昨今|さっこん}のガーデニングブームで、{確|たし}かに{個々|ここ}の{家|いえ}の{庭|にわ}は{立派|りっぱ}になりました。{花|はな}や{木|き}の{種類|しゅるい}もずいぶん{増|ふ}えて、ひと{昔|むかし}{前|まえ}には{無|な}かったような{色|いろ}や{形|かたち}も{見|み}られます。そして、ガーデニングをする{人達|ひとたち}の{情報|じょうほう}{交流|こうりゅう}も{盛|さか}んとなり、{新|あら}たなコミュニティも{生|う}まれているようです。しかし、いま{一|ひと}つ{自分|じぶん}の{土地|とち}から{外|そと}に{広|ひろ}がっていない{感|かん}じがします。{道路|どうろ}や{公園|こうえん}など{地域|ちいき}にとっての{共有|きょうゆう}の{庭|にわ}であり、{個々|ここ}の{部分|ぶぶん}と{共有|きょうゆう}の{部分|ぶぶん}が{美|うつく}しくなってこそはじめて{全体|ぜんたい}が{美|うつく}しくなるのです。{美|うつく}しく{楽|たの}しい{庭|にわ}を{作|つく}っている{人々|ひとびと}には、②もっと{欲張|よくば}って{美|うつく}しく{楽|たの}しいまちを{作|つく}ってほしいと{思|おも}います。

「{愛|め}でる」という{言葉|ことば}があります。これは{主|おも}に{植物|しょくぶつ}に{対|たい}して{使|つか}われます。{満開|まんかい}の{桜|さくら}や{初夏|しょか}の{新緑|しんりょく}、{真夏|まなつ}の{木陰|こかげ}や{秋|あき}の{紅葉|こうよう}……。{私|わたし}たちは{折々|おりおり}に（{注|ちゅう}2）{木々|きぎ}を{眺|なが}め、そこに{日々|ひび}の{暮|く}らしを{重|かさ}ね{合|あ}わせたり、{育|そだ}ちゆく{木々|きぎ}に{子供達|こどもたち}の{明|あか}るい{未来|みらい}を{願|ねが}ったりしているのではないでしょうか。そしてそんな{思|おも}いをこめて{水|みず}やりや{手入|てい}れをする。これが「{愛|め}でる」ということだと{思|おも}うのです。その{愛|め}でる{心|こころ}と{愛|め}でられる{木々|きぎ}があってはじめてよいまちとなるのです。
（{加藤|かとう}{美浩|よしひろ}『まちづくりのススメ』による）
（{注|ちゅう}1）その{土地|とち}の{植生|しょくせい}：その{土地|とち}にどのような{植物|しょくぶつ}が{生|は}えているか
（{注|ちゅう}2）{折々|おりおり}に：ここでは、{機会|きかい}があるごとに`,
      arti: `Kalau bicara pohon yang dekat dalam kehidupan sehari-hari, mungkin pohon pinggir jalan, pohon di taman, dan pohon di halaman rumah. Semuanya kita lihat setiap hari. Saya kira jarang kita menyadarinya secara khusus. Tetapi, bagaimana jika misalnya semua itu mati? Bukankah kota akan menjadi sangat sepi, gersang, atau bahkan berkesan mengingatkan pada penyakit? Selain itu, belakangan tampaknya ada kota yang tidak menanam pohon pinggir jalan karena alasan pemeliharaan dan sebagainya; sekilas berkesan modern dan seperti kota masa depan, tetapi juga tampak seperti kota tanpa kesegaran dan ketenangan. Begitulah, pepohonan kota sebenarnya memiliki peran yang sangat besar.

Lalu, apakah pepohonan ini cukup sekadar ditanam dan ada? Tidak begitu. Harus ada makna dan nilainya. Sederhananya, misalnya jenis pohon apa yang dipilih untuk pohon pinggir jalan. Berdasarkan vegetasi (catatan 1) daerah itu, lalu ditambah dengan nilai sejarah dan masa depan. Dalam pergantian musim, bagaimana orang-orang akan hidup sambil memandangi pohon itu. Baru di atas tumpukan pertimbangan seperti itulah lahir keputusan "di sini kita tanam pohon ini". ① Itulah makna keberadaan pohon itu di tempat itu.

Pohon di halaman rumah juga sama. Bukan hanya selera sendiri, tetapi bagaimana pohon itu menghiasi gang di kawasan perumahan, bagaimana keselarasannya dengan sekitar. Memikirkan hal-hal seperti itulah "pohon" dalam pembangunan kota. Dengan tren berkebun belakangan ini, memang taman di setiap rumah menjadi bagus. Jenis bunga dan pohon jauh bertambah, terlihat warna dan bentuk yang dulu tidak ada. Pertukaran informasi di antara para penghobi berkebun pun ramai, dan tampaknya lahir komunitas baru. Namun, rasanya belum meluas keluar dari tanah milik sendiri. Jalan dan taman adalah taman bersama bagi daerah itu; baru ketika bagian pribadi dan bagian bersama sama-sama indah, keseluruhannya menjadi indah. Saya berharap orang-orang yang membuat taman yang indah dan menyenangkan ② lebih serakah lagi untuk membuat kota yang indah dan menyenangkan.

Ada kata "愛でる" (menyayangi, menikmati keindahan). Kata ini terutama dipakai untuk tumbuhan. Sakura yang mekar penuh, hijau segar awal musim panas, keteduhan pohon di puncak musim panas, daun merah di musim gugur... Bukankah kita setiap ada kesempatan (catatan 2) memandangi pepohonan, menumpangkan kehidupan sehari-hari kita di sana, atau mendoakan masa depan cerah anak-anak pada pepohonan yang tumbuh? Lalu dengan perasaan seperti itu kita menyiram dan merawatnya. Inilah yang saya kira disebut "愛でる". Baru ketika ada hati yang menyayangi dan pepohonan yang disayangi, kota menjadi kota yang baik.
(Dari buku karya Kato Yoshihiro, "Anjuran Membangun Kota")
(Catatan 1) その土地の植生: tumbuhan apa saja yang tumbuh di daerah itu
(Catatan 2) 折々に: di sini, setiap ada kesempatan`,
    },

    // ── 問題11：雑談 ──
    "11": {
      yomi: `【{意見|いけん} A】
{雑談|ざつだん}はいろいろな{意見|いけん}を{交換|こうかん}し{合|あ}うことによって、ヒントを{得|え}ようというスケールの{大|おお}きな{場|ば}である。そこにいる{誰|だれ}もが{自由|じゆう}に{発言|はつげん}する{権利|けんり}を{持|も}っている。{仮|かり}に{自分|じぶん}とは{反対|はんたい}{意見|いけん}であっても、まずは{聞|き}くという{姿勢|しせい}を{保|たも}つこと、{心理学|しんりがく}のカウンセリングと{同|おな}じである。

そして{相手|あいて}の{発言|はつげん}に{対|たい}して、{自分|じぶん}の{意見|いけん}を{軽|かる}い{気持|きも}ちで{述|の}べる。それが{雑談|ざつだん}である。

どんなに{間違|まちが}っている、バカバカしいと{思|おも}われる{意見|いけん}であっても、いったんそれを{受|う}け{入|い}れること。「なぜあの{人|ひと}はこのような{発言|はつげん}をするのか」と{考|かんが}えていくと、{自分|じぶん}がそれまで{見落|みお}としていたことがあることに{気|き}がつくこともある。

「{話|はな}し{上手|じょうず}は{聞|き}き{上手|じょうず}」という{言葉|ことば}があるように、{雑談|ざつだん}では「いかに{発言|はつげん}するか」よりも「いかに{聞|き}くか」が{大切|たいせつ}になる。
（{多湖|たご}{輝|あきら}『{人|ひと}の{心|こころ}をつかむ「{雑談力|ざつだんりょく}」{情報|じょうほう}が{集|あつ}まる「{雑談力|ざつだんりょく}」』による）

【{意見|いけん} B】
{雑談|ざつだん}は{無駄|むだ}だという{人|ひと}がいるが、{本当|ほんとう}にそうだろうか。{辞書|じしょ}を{調|しら}べると「{無駄話|むだばなし}」という{意味|いみ}もあるが、「さまざまなことを{気楽|きらく}に{話|はな}し{合|あ}うこと」という{意味|いみ}もある。{気楽|きらく}な{気持|きも}ちのとき、{人|ひと}は{本音|ほんね}を{話|はな}すものだ。バカらしいと{思|おも}う{話|はなし}もあるかもしれないが、{雑談|ざつだん}の{中|なか}から{相手|あいて}の{人間性|にんげんせい}が{見|み}えてくる。

そうはいっても、{気楽|きらく}に{話|はな}せる{雰囲気|ふんいき}を{作|つく}るのは{簡単|かんたん}なことではない。まずは、{自分|じぶん}から{話|はなし}のきっかけになりそうな{小|ちい}さなエピソードを{話|はな}そう。{相手|あいて}が{話|はなし}に{乗|の}って（{注|ちゅう}）きたと{思|おも}ったら、そこで{自分|じぶん}の{本音|ほんね}を{話|はな}してみよう。そうすれば、{相手|あいて}もやがて{心|こころ}を{開|ひら}いて{話|はな}し{始|はじ}めるだろう。そうなれば、{雑談|ざつだん}も{意味|いみ}のある{時間|じかん}となる。
（{注|ちゅう}）{話|はなし}に{乗|の}る：ここでは、{話|はなし}に{興味|きょうみ}を{持|も}つ`,
      arti: `[Pendapat A]
Obrolan santai adalah ruang berskala besar untuk mendapat petunjuk dengan saling bertukar berbagai pendapat. Setiap orang yang ada di sana memiliki hak untuk berbicara dengan bebas. Sekalipun pendapatnya berlawanan dengan kita, pertahankan sikap untuk mendengarkan terlebih dahulu, sama seperti konseling dalam psikologi.

Lalu, terhadap ucapan lawan bicara, sampaikan pendapat kita dengan ringan. Itulah obrolan santai.

Pendapat yang tampak sekeliru atau sekonyol apa pun, terimalah dulu. Jika kita berpikir "mengapa orang itu berkata begitu", kadang kita menyadari ada hal yang selama ini terlewat oleh kita.

Seperti pepatah "pandai bicara berarti pandai mendengar", dalam obrolan santai yang penting adalah "bagaimana mendengar" lebih daripada "bagaimana berbicara".
(Dari buku karya Tago Akira tentang "kemampuan mengobrol" yang memikat hati dan mengumpulkan informasi)

[Pendapat B]
Ada orang yang bilang obrolan santai itu sia-sia, tetapi benarkah begitu? Jika dilihat di kamus, memang ada arti "omong kosong", tetapi ada juga arti "membicarakan berbagai hal dengan santai". Saat merasa santai, orang mengatakan isi hatinya. Mungkin ada cerita yang terasa konyol, tetapi dari obrolan santai kepribadian lawan bicara menjadi terlihat.

Meski begitu, menciptakan suasana yang membuat orang bisa berbicara santai bukan hal mudah. Pertama-tama, ceritakan sendiri kisah kecil yang bisa menjadi pembuka pembicaraan. Jika merasa lawan bicara mulai tertarik (catatan), cobalah ungkapkan isi hati kita di situ. Dengan begitu, lawan bicara pun lama-lama akan membuka hati dan mulai berbicara. Jika sudah begitu, obrolan santai pun menjadi waktu yang bermakna.
(Catatan) 話に乗る: di sini, tertarik pada pembicaraan`,
    },

    // ── 問題12：手仕事の価値 ──
    "12": {
      yomi: `{建築|けんちく}の{設計|せっけい}をやっていると{様々|さまざま}な{職人|しょくにん}に{出会|であ}う。{大小|だいしょう}を{問|と}わずどの{現場|げんば}でも{一人|ひとり}や{二人|ふたり}、{主役|しゅやく}を{張|は}れる（{注|ちゅう}1）{人|ひと}がいる。そうした{人|ひと}に{出会|であ}うのが、{現場|げんば}に{通|かよ}う{楽|たの}しみのひとつだ。{長|なが}い{時間|じかん}、{図面|ずめん}にばかり{接|せっ}していると、{現実|げんじつ}を{離|はな}れて{思考|しこう}が{一人歩|ひとりある}きすることがよくある。そんな{時|とき}、{彼|かれ}らからもらう{情報|じょうほう}がかけがえのない（{注|ちゅう}2）ものであることが{分|わ}かる。{我々|われわれ}が{作|つく}り{出|だ}す{図面|ずめん}は、{線|せん}で{描|えが}かれた{抽象的|ちゅうしょうてき}な{記号|きごう}に{過|す}ぎない。{彼|かれ}らは{物|もの}に{触|さわ}っている。{経験則|けいけんそく}によって{裏付|うらづ}けられた、{物|もの}に{近|ちか}い、{深|ふか}くて{確|たし}かな{情報|じょうほう}を{持|も}っている。

{図面|ずめん}は{人間|にんげん}の{頭|あたま}の{中|なか}だけで{作|つく}り{出|だ}されたものだ。それを{現実|げんじつ}の{建物|たてもの}に{移|うつ}し{替|か}えるには、{木|き}や{鉄|てつ}やコンクリートといった、{物|もの}から{手|て}によって{直接|ちょくせつ}に{得|え}られる{情報|じょうほう}が{不可欠|ふかけつ}だ。{頭|あたま}で{生|う}み{出|だ}されたものは、{思|おも}いこみや{錯誤|さくご}によって{間違|まちが}うことが{多|おお}いからだ。

{今|いま}はコンピューターと{情報|じょうほう}{通信|つうしん}の{時代|じだい}だ。それにともなって、{手|て}を{動|うご}かす{機会|きかい}がどんどん{少|すく}なくなってきている。{建築|けんちく}の{設計|せっけい}でもCAD（コンピューター{利用|りよう}{設計|せっけい}）{化|か}の{勢|いきお}いはすさまじい。しかし、その{図面|ずめん}は、{設計|せっけい}の{全体|ぜんたい}を{把握|はあく}しにくい。きれいすぎて、{何|なん}であれ、すべてうまくいっているように{見|み}えてしまう。{手|て}を{経|へ}ずに、{頭|あたま}の{中|なか}だけで{作業|さぎょう}が{完結|かんけつ}してしまっているからだろう。

トレーシングペーパー（{注|ちゅう}3）に{鉛筆|えんぴつ}で{苦労|くろう}をして{描|か}かれた{旧来|きゅうらい}（{注|ちゅう}4）の{図面|ずめん}は、そこに{描|か}く{人|ひと}の{感情|かんじょう}が{入|はい}っている。うまくいっていないところは{消|け}しゴムで{消|け}し、{描|か}き{直|なお}して{修正|しゅうせい}していく。{技術的|ぎじゅつてき}に{問題|もんだい}のあるところ、デザイン{的|てき}にうまくいっていないところほど、{線|せん}にはじみ、トレーシングペーパーは{人|ひと}の{手|て}の{脂|あぶら}で{汚|よご}れてくる。{何回|なんかい}も{描|か}き{直|なお}した{個所|かしょ}は、しまいには{擦|す}り{切|き}れて{穴|あな}が{開|あ}いてしまうこともある。

{描|か}いた{当人|とうにん}の{自信|じしん}がなければ、{鉛筆|えんぴつ}の{線|せん}にもその{迷|まよ}いを{見|み}て{取|と}ることもできる。{慣|な}れてくると、{図面|ずめん}{上|じょう}の{線|せん}から、{描|か}いた{人|ひと}の{経験的|けいけんてき}なレベルや{人柄|ひとがら}さえ{分|わ}かるようになる。{手書|てが}きの{図面|ずめん}には、すてがたい{様々|さまざま}な{種類|しゅるい}の{情報|じょうほう}が{塗|ぬ}り{込|こ}められている。{均質|きんしつ}な{図面|ずめん}の{向|む}こう{側|がわ}に{人|ひと}の{姿|すがた}が{見|み}えにくい{分|ぶん}、CADでは{大|おお}きなリスクを{見落|みお}とす{可能性|かのうせい}もある。

{手|て}から{遠|とお}いコンピューターの{出現|しゅつげん}によって、リスクの{所在|しょざい}をかぎ{取|と}ることが、{旧来|きゅうらい}の{経験則|けいけんそく}では{難|むずか}しくなってきている。これは{設計|せっけい}に{限|かぎ}ったことではないだろう。{今|いま}や{情報|じょうほう}{通信|つうしん}とコンピューターはあらゆる{分野|ぶんや}に{浸透|しんとう}し、{社会|しゃかい}{全体|ぜんたい}を{変|か}えつつある。{頭|あたま}から{生|う}み{出|だ}されたものが{暴走|ぼうそう}している。リスクの{所在|しょざい}が、より{巨大|きょだい}で、{見|み}えにくくなった。

どこかでそれを、{生身|なまみ}の{身体|しんたい}を{持|も}つ{人間|にんげん}の{側|がわ}に{引|ひ}き{戻|もど}す{必要|ひつよう}がある。{手|て}から{得|え}られる{情報|じょうほう}は、{効率|こうりつ}は{悪|わる}いが、{現実|げんじつ}の{世界|せかい}をまさぐって（{注|ちゅう}5）{得|え}られるものだ。その{人|ひと}の{身体|しんたい}だけにとどまる{固有|こゆう}な{情報|じょうほう}といってもよい。{忘|わす}れられつつある{手|て}の{行|ゆ}き{場|ば}を{考|かんが}えるべきだろう。
（{内藤|ないとう}{廣|ひろし}『{建築|けんちく}のはじまりに{向|む}かって』による）
（{注|ちゅう}1）{主役|しゅやく}を{張|は}る：ここでは、{主要|しゅよう}な{役割|やくわり}を{果|は}たす
（{注|ちゅう}2）かけがえのない：{他|ほか}に{代|か}わりがないほど{貴重|きちょう}な
（{注|ちゅう}3）トレーシングペーパー：ここでは、{設計図|せっけいず}を{描|か}くための{紙|かみ}
（{注|ちゅう}4）{旧来|きゅうらい}の：{昔|むかし}からの
（{注|ちゅう}5）まさぐる：{手探|てさぐ}りをする`,
      arti: `Sebagai perancang arsitektur, saya bertemu berbagai perajin. Di setiap lokasi proyek, besar atau kecil, ada satu-dua orang yang bisa memegang peran utama (catatan 1). Bertemu orang seperti itu adalah salah satu kesenangan pergi ke lokasi. Kalau terlalu lama hanya berhadapan dengan gambar rancangan, pikiran sering melayang sendiri lepas dari kenyataan. Saat itulah saya sadar betapa tak tergantikannya (catatan 2) informasi yang saya dapat dari mereka. Gambar rancangan yang kami buat hanyalah simbol abstrak yang digambar dengan garis. Mereka menyentuh benda. Mereka memiliki informasi yang dalam dan pasti, dekat dengan benda, didukung kaidah empiris.

Gambar rancangan diciptakan hanya di dalam kepala manusia. Untuk memindahkannya menjadi bangunan nyata, informasi yang didapat langsung dengan tangan dari benda seperti kayu, besi, dan beton tak tergantikan. Sebab hasil ciptaan kepala sering keliru karena prasangka atau salah kira.

Sekarang adalah zaman komputer dan teknologi informasi-komunikasi. Seiring dengan itu, kesempatan menggerakkan tangan makin berkurang. Dalam desain arsitektur pun, laju penggunaan CAD (desain berbantuan komputer) luar biasa. Namun, gambar seperti itu sulit memperlihatkan keseluruhan desain. Terlalu rapi, sehingga apa pun tampak berjalan lancar. Mungkin karena pekerjaannya selesai hanya di dalam kepala, tanpa melewati tangan.

Gambar rancangan cara lama (catatan 4) yang digambar susah payah dengan pensil di atas kertas kalkir (catatan 3) mengandung perasaan orang yang menggambarnya. Bagian yang tidak beres dihapus dengan penghapus, digambar ulang, dan diperbaiki. Makin bermasalah secara teknis atau tidak beres secara desain, garisnya makin luntur, dan kertas kalkir menjadi kotor oleh minyak tangan. Bagian yang berkali-kali digambar ulang kadang akhirnya aus dan berlubang.

Jika penggambarnya tidak percaya diri, keraguannya bisa terbaca dari garis pensil. Jika sudah terbiasa, dari garis di gambar kita bahkan bisa mengetahui tingkat pengalaman dan kepribadian penggambarnya. Gambar tulisan tangan menyimpan berbagai jenis informasi yang sayang untuk dibuang. Karena sosok manusia sulit terlihat di balik gambar yang seragam, dengan CAD ada kemungkinan risiko besar terlewatkan.

Dengan munculnya komputer yang jauh dari tangan, mencium letak risiko menjadi sulit dengan kaidah empiris lama. Ini mungkin tidak terbatas pada desain. Kini teknologi informasi-komunikasi dan komputer telah meresap ke segala bidang dan sedang mengubah seluruh masyarakat. Hasil ciptaan kepala sedang lepas kendali. Letak risiko menjadi lebih besar dan lebih sulit terlihat.

Di suatu titik, kita perlu menariknya kembali ke sisi manusia yang memiliki tubuh nyata. Informasi yang didapat dari tangan memang tidak efisien, tetapi didapat dengan meraba-raba (catatan 5) dunia nyata. Bisa dikatakan sebagai informasi khas yang hanya tinggal di tubuh orang itu. Kita perlu memikirkan tempat bagi tangan yang mulai terlupakan.
(Dari buku karya Naito Hiroshi, "Menuju Awal Arsitektur")
(Catatan 1) 主役を張る: di sini, memegang peran utama
(Catatan 2) かけがえのない: begitu berharga sehingga tak tergantikan
(Catatan 3) トレーシングペーパー: di sini, kertas untuk menggambar rancangan
(Catatan 4) 旧来の: sejak dulu
(Catatan 5) まさぐる: meraba-raba`,
    },

    // ── 問題13：大森大学図書館 ──
    "13": {
      yomi: `{利用|りよう}したい{資料|しりょう}が{本学|ほんがく}にない{場合|ばあい}、{他|た}{大学|だいがく}の{図書館|としょかん}の{資料|しりょう}を{利用|りよう}できます。

①{他|た}{大学|だいがく}の{図書館|としょかん}に{行|い}く。
①-A　{相互|そうご}{利用|りよう}{協定校|きょうていこう}を{利用|りよう}する。
{相互|そうご}{利用|りよう}{協定|きょうてい}に{加盟|かめい}している{図書館|としょかん}は、{学生証|がくせいしょう}の{提示|ていじ}のみで、{利用|りよう}することができます。{図書館|としょかん}によって、{受|う}けられるサービスが{異|こと}なりますので、{下記|かき}{一覧|いちらん}を{参照|さんしょう}してください。

{協定|きょうてい}に{加盟|かめい}している{図書館|としょかん}の{一覧|いちらん}。

　　　　　　　　　{閲覧|えつらん}　　{貸出|かしだし}
みはま{大学|だいがく}{図書館|としょかん}　　{可|か}　　{可|か}
{長島|ながしま}{大学|だいがく}{図書館|としょかん}　　{可|か}　　{可|か}
あおば{大学|だいがく}{図書館|としょかん}　　{可|か}　　{不可|ふか}
{中山|なかやま}{工業|こうぎょう}{大学|だいがく}{図書館|としょかん}　　{可|か}　　{不可|ふか}

①-B　{相互|そうご}{利用|りよう}{協定校|きょうていこう}{以外|いがい}を{利用|りよう}する。
{本学|ほんがく}{図書館|としょかん}が{発行|はっこう}する{紹介状|しょうかいじょう}を{持参|じさん}すれば、{相互|そうご}{利用|りよう}{協定校|きょうていこう}{以外|いがい}の{図書館|としょかん}にも{入館|にゅうかん}できます。{受|う}けられるサービスについては、{各|かく}{図書館|としょかん}に{問|と}い{合|あ}わせてください。

{紹介状|しょうかいじょう}の{発行|はっこう}は、{所定|しょてい}の{申|もう}し{込|こ}み{書|しょ}に{記入|きにゅう}し{本学|ほんがく}{図書館|としょかん}{受付|うけつけ}で{申|もう}し{込|こ}んでください。
{注意|ちゅうい}：　{利用|りよう}{時|じ}は、{必|かなら}ず{学生証|がくせいしょう}と{紹介状|しょうかいじょう}を{持参|じさん}してください。
{紹介状|しょうかいじょう}の{発行|はっこう}は、{無料|むりょう}ですが、{発行|はっこう}まで{約|やく}5{日|か}かかります。

②{他|た}{大学|だいがく}の{図書館|としょかん}に{複写|ふくしゃ}を{依頼|いらい}し、{取|と}り{寄|よ}せることができる。
{申|もう}し{込|こ}みは、{本学|ほんがく}{図書館|としょかん}{受付|うけつけ}、または、{本学|ほんがく}{図書館|としょかん}ホームページ{上|じょう}で{行|おこな}ってください。
{注意|ちゅうい}：{資料|しりょう}の{複写|ふくしゃ}{料金|りょうきん}、{送料|そうりょう}などは、{全額|ぜんがく}{利用者|りようしゃ}{負担|ふたん}となります。
{一度|いちど}に{依頼|いらい}できる{件数|けんすう}は、5{件|けん}までです。

③{他|た}{大学|だいがく}の{図書館|としょかん}から{借用|しゃくよう}した{資料|しりょう}を{見|み}る
{本学|ほんがく}{図書館|としょかん}が{他|た}{大学|だいがく}の{図書館|としょかん}から{資料|しりょう}を{一定|いってい}{期間|きかん}{借用|しゃくよう}し、その{資料|しりょう}を{本学|ほんがく}{図書館|としょかん}{内|ない}にて{閲覧|えつらん}することができます。
{申|もう}し{込|こ}みは、{本学|ほんがく}{図書館|としょかん}{受付|うけつけ}で{行|おこな}ってください。
{注意|ちゅうい}：{資料|しりょう}の{往復|おうふく}{送料|そうりょう}などは、{全額|ぜんがく}{利用者|りようしゃ}{負担|ふたん}となります。
{本学|ほんがく}{図書館|としょかん}{内|ない}での{閲覧|えつらん}に{限|かぎ}ります。{貸出|かしだし}はできません。
{借用|しゃくよう}{可能|かのう}な{資料|しりょう}は、{一人|ひとり}{一点|いってん}{限|かぎ}りとなります。`,
      arti: `Jika bahan yang ingin dipakai tidak ada di universitas kita, Anda bisa memakai bahan dari perpustakaan universitas lain.

① Pergi ke perpustakaan universitas lain.
①-A Memakai universitas yang terikat perjanjian saling pakai.
Perpustakaan yang tergabung dalam perjanjian saling pakai bisa digunakan hanya dengan menunjukkan kartu mahasiswa. Layanan yang bisa didapat berbeda-beda tergantung perpustakaan, jadi lihat daftar di bawah.

Daftar perpustakaan yang tergabung dalam perjanjian.

— Membaca di tempat — Meminjam
Perpustakaan Universitas Mihama — bisa — bisa
Perpustakaan Universitas Nagashima — bisa — bisa
Perpustakaan Universitas Aoba — bisa — tidak bisa
Perpustakaan Institut Teknologi Nakayama — bisa — tidak bisa

①-B Memakai perpustakaan selain universitas yang terikat perjanjian.
Jika membawa surat pengantar yang diterbitkan perpustakaan kita, Anda juga bisa masuk ke perpustakaan selain yang terikat perjanjian. Mengenai layanan yang bisa didapat, tanyakan ke masing-masing perpustakaan.

Untuk penerbitan surat pengantar, isi formulir yang ditentukan dan ajukan di resepsionis perpustakaan kita.
Perhatian: Saat menggunakan, wajib membawa kartu mahasiswa dan surat pengantar.
Penerbitan surat pengantar gratis, tetapi memakan waktu sekitar 5 hari.

② Meminta fotokopi dari perpustakaan universitas lain dan mendatangkannya.
Pengajuan dilakukan di resepsionis perpustakaan kita atau di situs web perpustakaan kita.
Perhatian: Biaya fotokopi bahan, ongkos kirim, dan lain-lain sepenuhnya ditanggung pengguna.
Jumlah permintaan sekaligus maksimal 5.

③ Melihat bahan yang dipinjam dari perpustakaan universitas lain
Perpustakaan kita meminjam bahan dari perpustakaan universitas lain untuk jangka waktu tertentu, dan bahan itu bisa dibaca di dalam perpustakaan kita.
Pengajuan dilakukan di resepsionis perpustakaan kita.
Perhatian: Ongkos kirim pergi-pulang bahan dan lain-lain sepenuhnya ditanggung pengguna.
Hanya untuk dibaca di dalam perpustakaan kita. Tidak bisa dipinjam bawa pulang.
Bahan yang bisa dipinjam terbatas satu per orang.`,
    },
  },
};
