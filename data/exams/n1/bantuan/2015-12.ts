import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2015
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1512: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{決勝|けっしょう}の{素晴|すば}らしい{試合|しあい}に{観客|かんきゃく}は【{興奮|こうふん}】した。",
      arti: "Penonton 【bersemangat/tegang gembira】 menyaksikan pertandingan final yang luar biasa.",
    },
    2: {
      yomi: "この{説|せつ}は、{鈴木氏|すずきし}が30{年|ねん}{前|まえ}に{初|はじ}めて【{唱|とな}えた】。",
      arti: "Teori ini pertama kali 【dikemukakan】 oleh Suzuki 30 tahun lalu.",
      optArti: ["memuji", "mengemukakan, menyerukan (唱えた)", "mewujudkan (keinginan)", "menggugat, mengadukan"],
    },
    3: {
      yomi: "この{地域|ちいき}における{主要|しゅよう}な{産業|さんぎょう}の【{変遷|へんせん}】について{調|しら}べた。",
      arti: "Saya meneliti 【perubahan dari masa ke masa】 industri utama di daerah ini.",
    },
    4: {
      yomi: "{藤|ふじ}さんの{日々|ひび}の{努力|どりょく}は{尊敬|そんけい}に【{値|あたい}する】。",
      arti: "Usaha Fuji-san setiap hari 【layak】 dihormati.",
    },
    5: {
      yomi: "{応募|おうぼ}は【{随時|ずいじ}】{受|う}け{付|つ}けています。",
      arti: "Pendaftaran diterima 【kapan saja】.",
    },
    6: {
      yomi: "{優勝|ゆうしょう}を{目指|めざ}してこれからも{練習|れんしゅう}に【{励|はげ}んで】いきます。",
      arti: "Dengan tujuan menjadi juara, kami akan terus 【giat】 berlatih.",
      optArti: ["giat, tekun (励んで)", "mencapai, meluas", "menantang", "bersembunyi; mengenang"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{何度|なんど}も{交渉|こうしょう}した{末|すえ}に、ようやく{両社|りょうしゃ}は（　）して、{契約|けいやく}が{成立|せいりつ}した。",
      arti: "Setelah berkali-kali bernegosiasi, akhirnya kedua perusahaan (…) dan kontrak pun tercapai.",
      optYomi: ["{合意|ごうい}", "{締結|ていけつ}", "{適用|てきよう}", "{順応|じゅんのう}"],
      optArti: ["sepakat", "penandatanganan (perjanjian)", "penerapan", "penyesuaian diri"],
    },
    8: {
      yomi: "{鈴木|すずき}{選手|せんしゅ}の{活躍|かつやく}は、テレビや{新聞|しんぶん}など、{様々|さまざま}な（　）で{紹介|しょうかい}された。",
      arti: "Kiprah Suzuki diperkenalkan di berbagai (…) seperti televisi dan koran.",
      optArti: ["basis data", "komunikasi", "media", "layar"],
    },
    9: {
      yomi: "{来週|らいしゅう}の{研修会|けんしゅうかい}への{参加|さんか}は、（　）はしませんので、{希望者|きぼうしゃ}のみ{申|もう}し{込|こ}んでください。",
      arti: "Keikutsertaan dalam pelatihan minggu depan tidak (…), jadi hanya yang berminat silakan mendaftar.",
      optYomi: ["{強制|きょうせい}", "{圧迫|あっぱく}", "{束縛|そくばく}", "{固執|こしつ}"],
      optArti: ["paksaan, wajib", "tekanan", "kekangan", "bersikukuh"],
    },
    10: {
      yomi: "{高橋|たかはし}さんは{明|あか}るくて（　）だから、そんな{細|こま}かいことは{気|き}にしないと{思|おも}うよ。",
      arti: "Takahashi-san ceria dan (…), jadi saya rasa ia tidak akan memikirkan hal sekecil itu.",
      optArti: ["cerah, jelas (warna)", "lapang hati, santai", "segera, cepat", "kecil, sederhana"],
    },
    11: {
      yomi: "この{歌|うた}は、{子|こ}どもからお{年寄|としよ}りまで（　）{年齢層|ねんれいそう}に{親|した}しまれている。",
      arti: "Lagu ini disukai oleh kelompok usia yang (…), dari anak-anak sampai lansia.",
      optYomi: ["{分厚|ぶあつ}い", "{幅広|はばひろ}い", "{広大|こうだい}な", "{重厚|じゅうこう}な"],
      optArti: ["tebal", "luas (cakupan)", "luas (wilayah)", "berbobot, megah"],
    },
    12: {
      yomi: "この{小説|しょうせつ}の{主人公|しゅじんこう}は、{非常|ひじょう}に{感情|かんじょう}の（　）が{激|はげ}しい{人物|じんぶつ}だと{思|おも}う。",
      arti: "Saya rasa tokoh utama novel ini adalah orang yang (…) emosinya sangat tajam.",
      optYomi: ["{高低|こうてい}", "{出没|しゅつぼつ}", "{明暗|めいあん}", "{起伏|きふく}"],
      optArti: ["tinggi-rendah", "muncul-hilang", "terang-gelap", "naik-turun (pasang surut)"],
    },
    13: {
      yomi: "{森|もり}さんは、その{話|はなし}を{聞|き}いた{時|とき}は{動揺|どうよう}していたが、{次第|しだい}にいつもの{冷静|れいせい}さを（　）。",
      arti: "Mori-san terguncang saat mendengar cerita itu, tetapi perlahan (…) ketenangannya seperti biasa.",
      optYomi: ["{引|ひ}き{寄|よ}せた", "{呼|よ}び{込|こ}んだ", "{取|と}り{戻|もど}した", "{受|う}け{入|い}れた"],
      optArti: ["menarik mendekat", "memanggil masuk", "memperoleh kembali", "menerima"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{林|はやし}さんは{必死|ひっし}に【{弁解|べんかい}して】いた。",
      arti: "Hayashi-san mati-matian 【membela diri】.",
      optYomi: ["{考|かんが}えて", "{反論|はんろん}して", "{謝|あやま}って", "{言|い}い{訳|わけ}して"],
      optArti: ["berpikir", "membantah", "meminta maaf", "beralasan"],
    },
    15: {
      yomi: "{今日|きょう}の{会議|かいぎ}で{提案|ていあん}された{企画|きかく}は【ありふれた】ものが{多|おお}かった。",
      arti: "Rencana yang diusulkan di rapat hari ini banyak yang 【biasa-biasa saja】.",
      optYomi: ["{平凡|へいぼん}な", "{特殊|とくしゅ}な", "{幼稚|ようち}な", "{複雑|ふくざつ}な"],
      optArti: ["biasa, umum", "khusus", "kekanak-kanakan", "rumit"],
    },
    16: {
      yomi: "{高橋|たかはし}さんはどんな{事態|じたい}にも、【うろたえずに】{対処|たいしょ}した。",
      arti: "Takahashi-san menangani situasi apa pun 【tanpa gelagapan】.",
      optYomi: ["{嫌|いや}がらずに", "{慌|あわ}てずに", "{怒|おこ}らずに", null],
      optArti: ["tanpa enggan", "tanpa panik", "tanpa marah", "tanpa menyerah"],
    },
    17: {
      yomi: "{鈴木|すずき}さんの{一言|ひとこと}が{問題|もんだい}{解決|かいけつ}の【{糸口|いとぐち}】になった。",
      arti: "Satu ucapan Suzuki-san menjadi 【titik terang/petunjuk】 penyelesaian masalah.",
      optArti: ["berhenti", "minus", "petunjuk", "saran"],
    },
    18: {
      yomi: "{昨夜|さくや}、{佐藤|さとう}さんが【ふいに】{訪|たず}ねてきた。",
      arti: "Semalam Sato-san datang 【tiba-tiba】.",
      optYomi: [null, "{久|ひさ}しぶりに", "{再|ふたた}び", "{突然|とつぜん}"],
      optArti: ["repot-repot, sengaja", "setelah sekian lama", "sekali lagi", "tiba-tiba"],
    },
    19: {
      yomi: "あの{人|ひと}は【{誇張|こちょう}して】{話|はな}すことが{多|おお}い。",
      arti: "Orang itu sering berbicara 【dengan melebih-lebihkan】.",
      optYomi: ["{積極的|せっきょくてき}に", "{自慢|じまん}して", "{大|おお}げさに", "{大|おお}ざっぱに"],
      optArti: ["secara aktif", "sambil membanggakan diri", "dengan berlebihan", "secara garis besar, sembarangan"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{辞任|じにん}",
      arti: "辞任 = mengundurkan diri (dari jabatan)",
      optYomi: [
        "{森氏|もりし}は{熟慮|じゅくりょ}の{末|すえ}、{市長|しちょう}に{立候補|りっこうほ}することを{辞任|じにん}したいと{申|もう}し{出|で}た。",
        "{高橋|たかはし}{選手|せんしゅ}は、{今朝|けさ}で{現役|げんえき}を{辞任|じにん}し、{今後|こんご}は{後輩|こうはい}の{指導|しどう}に{携|たずさ}わるそうだ。",
        "{初|はじ}めて{出演|しゅつえん}する{舞台|ぶたい}で{主役|しゅやく}に{選|えら}ばれたが、けがをして{辞任|じにん}するしかなかった。",
        "{社長|しゃちょう}は{会見|かいけん}を{開|ひら}き、{今回|こんかい}の{問題|もんだい}の{責任|せきにん}を{取|と}って{辞任|じにん}する{意向|いこう}を{表明|ひょうめい}した。",
      ],
      optArti: [
        "Setelah menimbang matang, Mori menyatakan ingin 'mengundurkan diri' dari pencalonan wali kota.",
        "Kabarnya Takahashi 'mengundurkan diri' sebagai atlet aktif pagi ini, dan ke depan akan melatih junior.",
        "Saya terpilih sebagai pemeran utama di panggung pertama saya, tetapi cedera sehingga terpaksa 'mengundurkan diri'.",
        "Direktur mengadakan konferensi pers dan menyatakan niat 'mengundurkan diri' untuk bertanggung jawab atas masalah ini.",
      ],
    },
    21: {
      yomi: "{帯|お}びる",
      arti: "帯びる = mengandung, memiliki (sifat/nuansa tertentu)",
      optYomi: [
        "これは{様々|さまざま}な{機能|きのう}を{帯|お}びる{携帯|けいたい}{電話|でんわ}で、{録音|ろくおん}や{音楽|おんがく}の{再生|さいせい}などが{可能|かのう}だ。",
        "この{計画|けいかく}は、{最初|さいしょ}はちょっとしたアイデアだったが、ようやく{現実味|げんじつみ}を{帯|お}びてきた。",
        "{佐藤|さとう}さんは{栄養士|えいようし}の{資格|しかく}を{帯|お}びていたことが{有利|ゆうり}になり、{現在|げんざい}の{職|しょく}を{得|え}たそうだ。",
        "{鈴木氏|すずきし}が{個人|こじん}で{始|はじ}めた{商店|しょうてん}は、{現在|げんざい}500{人|にん}の{社員|しゃいん}を{帯|お}びる{企業|きぎょう}に{成長|せいちょう}した。",
      ],
      optArti: [
        "Ini ponsel yang 'mengandung' berbagai fungsi, bisa merekam dan memutar musik.",
        "Rencana ini awalnya hanya ide kecil, tetapi akhirnya mulai 'mengandung' nuansa nyata.",
        "Kabarnya Sato-san mendapat pekerjaan sekarang karena 'mengandung' sertifikat ahli gizi menjadi keuntungan.",
        "Toko yang dimulai Suzuki secara pribadi kini tumbuh menjadi perusahaan yang 'mengandung' 500 karyawan.",
      ],
    },
    22: {
      yomi: "{軌道|きどう}",
      arti: "軌道 = jalur, orbit; arah jalannya (rencana/usaha)",
      optYomi: [
        "{私|わたし}は{大学|だいがく}を{卒業|そつぎょう}するまで、{両親|りょうしん}が{決|き}めた{軌道|きどう}に{沿|そ}って{歩|あゆ}んできただけだった。",
        "{部長|ぶちょう}から、{出張中|しゅっちょうちゅう}に{軌道|きどう}から{外|はず}れた{行動|こうどう}を{取|と}る{時|とき}は、{必|かなら}ず{報告|ほうこく}するように{言|い}われた。",
        "{景気|けいき}がさらに{悪化|あっか}したため、{経営|けいえい}を{縮小|しゅくしょう}する{方向|ほうこう}に{軌道|きどう}を{修正|しゅうせい}することにした。",
        "{新|しん}{商品|しょうひん}の{開発|かいはつ}{実験|じっけん}は、{前回|ぜんかい}とほぼ{同|おな}じ{軌道|きどう}を{通|とお}ってきたが、{今回|こんかい}は{異|こと}なる{結果|けっか}となった。",
      ],
      optArti: [
        "Sampai lulus kuliah, saya hanya berjalan mengikuti 'jalur' yang ditentukan orang tua.",
        "Kepala departemen berpesan, saat dinas, jika bertindak keluar dari 'jalur', wajib melapor.",
        "Karena ekonomi makin memburuk, kami memutuskan mengoreksi 'arah' ke pengecilan usaha.",
        "Eksperimen pengembangan produk baru melewati 'jalur' yang hampir sama dengan sebelumnya, tetapi kali ini hasilnya berbeda.",
      ],
    },
    23: {
      yomi: "{思|おも}い{詰|つ}める",
      arti: "思い詰める = memikirkan terus-menerus sampai tertekan",
      optYomi: [
        "{息子|むすこ}は{初|はじ}めての{海外|かいがい}{旅行|りょこう}が{楽|たの}しみで、{毎日|まいにち}{思|おも}い{詰|つ}めているようだ。",
        "{林|はやし}さんは{何|なに}かに{深|ふか}く{悩|なや}んでいるようで、ずっと{思|おも}い{詰|つ}めた{表情|ひょうじょう}をしている。",
        "この{数学|すうがく}の{問題|もんだい}は{難解|なんかい}で、{一生懸命|いっしょうけんめい}{思|おも}い{詰|つ}めたが、どうしても{解|と}けなかった。",
        "{親友|しんゆう}の{誕生日|たんじょうび}を{祝|いわ}って、{思|おも}い{詰|つ}めて{作|つく}ったケーキなので、{喜|よろこ}んでもらえてよかった。",
      ],
      optArti: [
        "Putra saya menantikan perjalanan ke luar negeri pertamanya, dan sepertinya setiap hari 'tertekan memikirkannya'.",
        "Hayashi-san tampaknya sedang sangat bingung soal sesuatu, wajahnya terus terlihat 'tertekan memikirkannya'.",
        "Soal matematika ini sulit; saya 'tertekan memikirkannya' dengan sungguh-sungguh, tetapi tetap tidak bisa menyelesaikannya.",
        "Itu kue yang saya buat dengan 'tertekan memikirkannya' untuk merayakan ulang tahun sahabat, jadi senang ia menyukainya.",
      ],
    },
    24: {
      yomi: "もはや",
      arti: "もはや = sudah (tidak lagi), kini sudah",
      optYomi: [
        "{現代|げんだい}の{広告|こうこく}{業界|ぎょうかい}において、これまでの{手法|しゅほう}はもはや{通用|つうよう}しないだろう。",
        "{多|おお}くの{研究者|けんきゅうしゃ}がこの{仮説|かせつ}を{証明|しょうめい}するため、もはや{検証|けんしょう}を{続|つづ}けている。",
        "{鈴木氏|すずきし}はもはや{高校|こうこう}{教師|きょうし}だったが、{現在|げんざい}は{作家|さっか}として{活躍|かつやく}している。",
        "{生産|せいさん}{体制|たいせい}が{改善|かいぜん}されれば、{商品|しょうひん}の{不足|ふそく}{状態|じょうたい}はもはや{解消|かいしょう}される{見込|みこ}みだ。",
      ],
      optArti: [
        "Di industri periklanan masa kini, cara-cara selama ini 'sudah tidak lagi' berlaku.",
        "Banyak peneliti 'sudah tidak lagi' terus menguji untuk membuktikan hipotesis ini.",
        "Suzuki 'sudah tidak lagi' guru SMA, tetapi sekarang aktif sebagai penulis.",
        "Jika sistem produksi diperbaiki, kekurangan barang diperkirakan 'sudah tidak lagi' teratasi.",
      ],
    },
    25: {
      yomi: "はなはだしい",
      arti: "はなはだしい = sangat parah, keterlaluan (untuk hal negatif)",
      optYomi: [
        "{近年|きんねん}のはなはだしい{国際化|こくさいか}にともない、{人々|ひとびと}の{海外|かいがい}への{関心|かんしん}が{急激|きゅうげき}に{高|たか}まっている。",
        "あの{俳優|はいゆう}は、{演技|えんぎ}はもちろん{人柄|ひとがら}も{魅力的|みりょくてき}なので、{最近|さいきん}、{人気|にんき}がはなはだしい。",
        "{体力|たいりょく}が{十分|じゅうぶん}に{回復|かいふく}するまで、はなはだしい{運動|うんどう}は{避|さ}けるように{医者|いしゃ}から{言|い}われた。",
        "この{辺|あた}りの{建物|たてもの}はかなり{老朽化|ろうきゅうか}が{進|すす}んでおり、{破損|はそん}や{劣化|れっか}がはなはだしい。",
      ],
      optArti: [
        "Seiring internasionalisasi yang 'sangat parah' belakangan ini, minat orang pada luar negeri meningkat tajam.",
        "Aktor itu tidak hanya aktingnya tetapi juga kepribadiannya menarik, jadi akhir-akhir ini popularitasnya 'sangat parah'.",
        "Dokter berpesan agar menghindari olahraga yang 'sangat parah' sampai stamina pulih sepenuhnya.",
        "Bangunan di sekitar sini sudah cukup tua, dan kerusakan serta kemerosotannya 'sangat parah'.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{宿題|しゅくだい}がない{大人|おとな}がうらやましいと{子供|こども}に{言|い}われたが、（　）{大変|たいへん}なことがいろいろあるのだ。",
      arti: "Anak saya bilang iri pada orang dewasa yang tidak punya PR, tetapi (…) ada banyak hal yang berat.",
      optYomi: ["{大人|おとな}は{大人|おとな}で", "{大人|おとな}が{大人|おとな}に", "{大人|おとな}より{大人|おとな}で", "{大人|おとな}から{大人|おとな}に"],
      optArti: ["orang dewasa pun (punya urusannya sendiri)", "orang dewasa kepada orang dewasa", "lebih dewasa daripada orang dewasa", "dari orang dewasa ke orang dewasa"],
    },
    27: {
      yomi: "{祖母|そぼ}は、{昔|むかし}、{幼稚園|ようちえん}の{先生|せんせい}を（　）、{昔話|むかしばなし}や{童話|どうわ}をたくさん{知|し}っている。",
      arti: "Nenek saya, (…) guru TK dulu, tahu banyak cerita rakyat dan dongeng.",
      optArti: ["karena dulu menjadi (maka harus)", "tak disangka dulu menjadi", "ketika dulu menjadi", "pantas saja karena dulu menjadi"],
    },
    28: {
      yomi: "{私|わたし}の{会社|かいしゃ}では、どんな{理由|りゆう}があろうと、{業務|ぎょうむ}に{関|かん}するデータや{資料|しりょう}を{社外|しゃがい}に{持|も}ち{出|だ}すことは、（　）{認|みと}められていない。",
      arti: "Di perusahaan saya, apa pun alasannya, membawa data atau dokumen terkait pekerjaan ke luar perusahaan (…) tidak diizinkan.",
      optArti: ["sama sekali", "malah, justru", "pasti", "bagaimanapun juga"],
    },
    29: {
      yomi: "{旅行先|りょこうさき}で、きれいな{海|うみ}に{感動|かんどう}して{写真|しゃしん}を{何枚|なんまい}も{撮|と}っていたら、{地元|じもと}の{人|ひと}に{不思議|ふしぎ}そうな{顔|かお}をされた。あんなにきれいな{海|うみ}も、{地元|じもと}の{人|ひと}（　）{日常|にちじょう}の{風景|ふうけい}なのだろう。",
      arti: "Di tempat wisata, saya terharu melihat laut yang indah dan mengambil banyak foto, lalu warga setempat memandang saya dengan heran. Laut seindah itu pun, (…) warga setempat, mungkin hanya pemandangan sehari-hari.",
      optArti: ["dimulai dari, bahkan", "meskipun dikatakan", "bagi (dari sudut pandang)", "terlepas dari"],
    },
    30: {
      yomi: "（パーティーで）　{石川|いしかわ}「あ、{山下|やました}さんはX{社|しゃ}にお{勤|つと}めなんですね。{今度|こんど}、{田中|たなか}さんが{社長|しゃちょう}になられるそうで。」{山下|やました}「え、{石川|いしかわ}さん、{田中|たなか}とお{知|し}り{合|あ}いなんですか。」{石川|いしかわ}「ええ、{田中|たなか}さんには{前|まえ}に{仕事|しごと}で{大変|たいへん}お{世話|せわ}になったことがあって、よく（　）よ。」",
      arti: "(Di pesta) Ishikawa: \"Oh, Yamashita-san bekerja di perusahaan X, ya. Katanya Tanaka-san akan menjadi direktur.\" Yamashita: \"Eh, Ishikawa-san kenal dengan Tanaka?\" Ishikawa: \"Ya, dulu saya banyak dibantu Tanaka-san dalam pekerjaan, jadi saya (…) dengan baik.\"",
      optYomi: ["{知|し}っていただけます", "{存|ぞん}じ{上|あ}げています", "お{目|め}にかかれます", "お{会|あ}いになっています"],
      optArti: ["Anda bisa mengetahui", "mengenal beliau (merendah)", "bisa bertemu (merendah)", "beliau bertemu (hormat)"],
    },
    31: {
      yomi: "{来週|らいしゅう}、{歯医者|はいしゃ}で{歯|は}を{抜|ぬ}くことになった。（　）そうしたいが、もうほかに{方法|ほうほう}がないらしい。",
      arti: "Minggu depan gigi saya akan dicabut di dokter gigi. (…), saya ingin begitu, tetapi sepertinya sudah tidak ada cara lain.",
      optYomi: ["{抜|ぬ}かずにいると", "{抜|ぬ}かずにいることで", "{抜|ぬ}かずに{済|す}むのだから", "{抜|ぬ}かずに{済|す}むものなら"],
      optArti: ["kalau dibiarkan tidak dicabut", "dengan tidak mencabut", "karena tidak perlu dicabut", "kalau saja bisa tidak perlu dicabut"],
    },
    32: {
      yomi: "{彼|かれ}は{最近|さいきん}{忙|いそが}しいので、{頼|たの}んでも{無理|むり}だと（　）が、{一度|いちど}は{頼|たの}んでみようと{思|おも}う。",
      arti: "Ia akhir-akhir ini sibuk, jadi meskipun saya minta, (…) bahwa itu tidak mungkin, tetapi saya pikir akan mencoba memintanya sekali.",
      optYomi: ["{言|い}われる{始末|しまつ}だ", "{言|い}わせるということだ", "{言|い}われるに{決|き}まっている", "{言|い}われるまでになる"],
      optArti: ["sampai-sampai dikatakan (akhir buruk)", "berarti menyuruh mengatakan", "sudah pasti akan dikatakan", "sampai pada tahap dikatakan"],
    },
    33: {
      yomi: "{山田|やまだ}「ねえ、この{料理|りょうり}、{木村|きむら}さんが{作|つく}ったの？」{木村|きむら}「うん」{山田|やまだ}「とってもおいしい。{今度|こんど}{作|つく}り{方|かた}{教|おし}えて。{時間|じかん}があるとき（　）。」",
      arti: "Yamada: \"Eh, masakan ini Kimura-san yang buat?\" Kimura: \"Iya.\" Yamada: \"Enak sekali. Lain kali ajari caranya. (…) waktu kamu senggang.\"",
      optArti: ["bagus, dan juga", "saja tidak apa-apa, jadi", "kalau saja (sayang tidak)", "juga boleh, sih"],
    },
    34: {
      yomi: "A{大学|だいがく}では{昨年|さくねん}カリキュラム{改定|かいてい}が{行|おこな}われたが、それによって、{本当|ほんとう}に{教育|きょういく}の{質|しつ}が{向上|こうじょう}している（　）。{私|わたし}はそうは{思|おも}わない。",
      arti: "Di Universitas A tahun lalu dilakukan revisi kurikulum, tetapi (…) kualitas pendidikan benar-benar meningkat karenanya? Saya tidak berpikir begitu.",
      optArti: ["apakah bisa dikatakan", "bukankah tidak bisa dikatakan", "bukankah seharusnya", "seharusnya atau tidak"],
    },
    35: {
      yomi: "{先月|せんげつ}、{自分|じぶん}のミスで{試合|しあい}に{負|ま}けてしまい、{落|お}ち{込|こ}んでしばらく{練習|れんしゅう}に{集中|しゅうちゅう}できなかった。だが、（　）と{思|おも}い、また{練習|れんしゅう}を{一生懸命|いっしょうけんめい}やることにした。",
      arti: "Bulan lalu saya kalah dalam pertandingan karena kesalahan sendiri, terpuruk, dan beberapa lama tidak bisa fokus berlatih. Tetapi saya berpikir (…), dan memutuskan kembali berlatih dengan sungguh-sungguh.",
      optYomi: ["{落|お}ち{込|こ}みもしない", "{落|お}ち{込|こ}むわけではない", "{落|お}ち{込|こ}んでいたことは{否|いな}めない", "{落|お}ち{込|こ}んでばかりいても{始|はじ}まらない"],
      optArti: ["tidak terpuruk sama sekali", "bukan berarti terpuruk", "tak bisa disangkal saya terpuruk", "terus terpuruk pun tidak ada gunanya"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{社内|しゃない}で{発生|はっせい}したシステムトラブルに{関|かん}し、{担当者|たんとうしゃ}から、{原因|げんいん}を{特定|とくてい}する＿＿ ＿＿ ★ ＿＿{報告|ほうこく}があった。",
      arti: "Terkait gangguan sistem yang terjadi di perusahaan, penanggung jawab melaporkan bahwa untuk memastikan penyebabnya perlu dilakukan penyelidikan rinci.",
      optYomi: ["{必要|ひつよう}がある", null, "{詳細|しょうさい}な{調査|ちょうさ}をする", null],
      optArti: ["perlu", "bahwa (kutipan)", "melakukan penyelidikan rinci", "untuk"],
    },
    37: {
      yomi: "{私|わたし}はどんな{困難|こんなん}に{遭|あ}っても＿＿ ＿＿ ★ ＿＿にほかならない。",
      arti: "Saya bisa terus bermain sepak bola tanpa kalah oleh kesulitan apa pun, tak lain karena ada teman-teman yang bisa dipercaya.",
      optYomi: ["サッカーを{続|つづ}けてこられたのは", "それに{負|ま}けることなく", "{仲間|なかま}がいたから", "{信頼|しんらい}できる"],
      optArti: ["bisa terus bermain sepak bola", "tanpa kalah olehnya", "karena ada teman-teman", "yang bisa dipercaya"],
    },
    38: {
      yomi: "10{年|ねん}ぶりに{故郷|こきょう}に{帰|かえ}ったら、{大|だい}{規模|きぼ}な{再開発|さいかいはつ}が{行|おこな}われていて{驚|おどろ}いた。{昔|むかし}の＿＿ ＿＿ ★ ＿＿{不思議|ふしぎ}な{感覚|かんかく}だった。",
      arti: "Saya pulang kampung setelah 10 tahun dan terkejut karena ada pembangunan ulang besar-besaran. Bagi saya yang hanya tahu suasana kota zaman dulu, rasanya aneh, seperti datang ke kota yang entah di mana dan tidak saya kenal.",
      optYomi: ["{私|わたし}にとっては", "どこか{知|し}らない", "{町|まち}の{様子|ようす}しか{知|し}らない", "{町|まち}に{来|き}たかのような"],
      optArti: ["bagi saya", "entah di mana yang tidak dikenal", "hanya tahu suasana kota", "seperti datang ke kota"],
    },
    39: {
      yomi: "{親友|しんゆう}とけんかしたその{日|ひ}は、{謝|あやま}ってきても＿＿ ＿＿ ★ ＿＿{気持|きも}ちもあったけど、{次|つぎ}の{日|ひ}には{仲直|なかなお}りした。",
      arti: "Hari ketika saya bertengkar dengan sahabat, ada perasaan \"mana mau aku memaafkannya meski ia minta maaf\", tetapi besoknya kami berbaikan.",
      optYomi: [null, null, "{許|ゆる}して", null],
      optArti: ["mana mungkin", "(memaafkan) untuknya", "memaafkan", "(mana) mau"],
    },
    40: {
      yomi: "{映画|えいが}「プレゼント」について、{監督|かんとく}は、{大人|おとな}の＿＿ ＿＿ ★ ＿＿と{語|かた}った。",
      arti: "Tentang film \"Present\", sutradara berkata bahwa itu karya yang dibuat dengan niat membuat film animasi yang layak ditonton orang dewasa.",
      optYomi: ["アニメ{映画|えいが}を", "{作|つく}った{作品|さくひん}だ", "と{考|かんが}えて", "{鑑賞|かんしょう}にたえるような"],
      optArti: ["film animasi", "karya yang dibuat", "dengan pemikiran (ingin)", "yang layak ditonton"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{私|わたし}の", "そんな{彼女|かのじょ}の", null, "その{友人|ゆうじん}だった"],
      optArti: ["milik saya", "milik dia yang seperti itu", "yang dulu teman sekelas", "yang dulu temannya itu"],
    },
    42: {
      optArti: ["masa cuma \"daah\"", "\"daah\" pun tidak bisa?", "bukankah sudah bilang \"daah\"", "bukankah bukan \"daah\""],
    },
    43: {
      optYomi: [null, "{例|たと}えば", "{当時|とうじ}", "{今度|こんど}は"],
      optArti: ["juga", "misalnya", "waktu itu", "kali ini"],
    },
    44: {
      optYomi: ["{聞|き}くだけだった", "{聞|き}きたそうだった", "{聞|き}くようになった", "{聞|き}くかと{思|おも}った"],
      optArti: ["hanya mendengarkan", "tampak ingin mendengar", "jadi mau mendengarkan", "kukira akan mendengarkan"],
    },
    45: {
      optYomi: ["{育|そだ}ち{続|つづ}けるのだそうだ", "{育|そだ}ち{続|つづ}けるというのだ", "{育|そだ}ち{続|つづ}けるからかもしれない", "{育|そだ}ち{続|つづ}けるに{違|ちが}いない"],
      optArti: ["katanya akan terus tumbuh", "konon akan terus tumbuh", "mungkin karena terus tumbuh", "pasti akan terus tumbuh"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{無駄|むだ}を{見極|みきわ}められなければ、{自分|じぶん}に{求|もと}められている{仕事|しごと}をこなせなくなる。",
        "{成果|せいか}を{出|だ}すことばかりを{考|かんが}えていると、{自分|じぶん}の{基準|きじゅん}を{人|ひと}にも{求|もと}めるようになる。",
        "{効率性|こうりつせい}を{重視|じゅうし}しすぎると、{自分|じぶん}が{求|もと}められている{仕事|しごと}がわからなくなる。",
        "{効率的|こうりつてき}に{働|はたら}くことばかりを{考|かんが}えていると、{自分|じぶん}にできる{仕事|しごと}しかしなくなる。",
      ],
      optArti: [
        "Jika tidak bisa memilah yang sia-sia, kita tidak bisa menyelesaikan pekerjaan yang diminta dari kita.",
        "Jika hanya memikirkan hasil, kita jadi menuntut standar kita juga pada orang lain.",
        "Jika terlalu mementingkan efisiensi, kita tidak tahu lagi pekerjaan apa yang diminta dari kita.",
        "Jika hanya memikirkan bekerja secara efisien, kita hanya akan mengerjakan pekerjaan yang bisa kita lakukan.",
      ],
    },
    47: {
      yomi: "{出張|しゅっちょう}{経費|けいひ}{精算|せいさん}{書類|しょるい}について、この{文章|ぶんしょう}で{最|もっと}も{伝|つた}えたいことは{何|なに}か。",
      arti: "Mengenai dokumen penggantian biaya perjalanan dinas, apa yang paling ingin disampaikan tulisan ini?",
      optYomi: [
        "12{月|がつ}{受付|うけつけ}{分|ぶん}の{振|ふ}り{込|こ}みは2{月|がつ}{末日|まつじつ}になること",
        "12{月|がつ}の{受付|うけつけ}の{締|し}め{切|き}りが{他|ほか}の{月|つき}より{早|はや}いこと",
        "12{月|がつ}{受付|うけつけ}{書類|しょるい}の{不備|ふび}への{対応|たいおう}は12{月|がつ}{中|ちゅう}にはできないこと",
        "12{月|がつ}25{日|にち}までに{年内|ねんない}{出張|しゅっちょう}{分|ぶん}を{提出|ていしゅつ}しなければならないこと",
      ],
      optArti: [
        "Transfer untuk dokumen yang diterima bulan Desember dilakukan pada akhir Februari",
        "Batas penerimaan bulan Desember lebih awal daripada bulan lain",
        "Penanganan kekurangan dokumen yang diterima bulan Desember tidak bisa dilakukan di bulan Desember",
        "Dokumen perjalanan dinas tahun ini harus diserahkan paling lambat 25 Desember",
      ],
    },
    48: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "コンピュータ{化|か}の{進行|しんこう}が、{人間|にんげん}を{肉体|にくたい}{労働|ろうどう}から{解放|かいほう}する。",
        "コンピュータ{化|か}の{進行|しんこう}とともに、{脳|のう}の{基礎|きそ}{体力|たいりょく}を{失|うしな}うことになる。",
        "コンピュータ{化|か}に{任|まか}せている{脳|のう}の{雑用|ざつよう}こそが、{創造力|そうぞうりょく}の{土台|どだい}になる。",
        "コンピュータ{化|か}による{精神|せいしん}{労働|ろうどう}からの{解放|かいほう}が、{人間|にんげん}を{創造的|そうぞうてき}にする。",
      ],
      optArti: [
        "Kemajuan komputerisasi membebaskan manusia dari kerja fisik.",
        "Seiring kemajuan komputerisasi, kita akan kehilangan stamina dasar otak.",
        "Justru pekerjaan remeh otak yang diserahkan pada komputer itulah yang menjadi landasan daya cipta.",
        "Pembebasan dari kerja mental berkat komputerisasi membuat manusia kreatif.",
      ],
    },
    49: {
      yomi: "{感情|かんじょう}とのつきあい{方|かた}について、{筆者|ひっしゃ}はどうすればよいと{述|の}べているか。",
      arti: "Mengenai cara bergaul dengan emosi, apa yang sebaiknya dilakukan menurut penulis?",
      optYomi: [
        "{感情|かんじょう}と{深|ふか}くかかわりながらも、{感情|かんじょう}に{縛|しば}られないようにする。",
        "{感情|かんじょう}を{無理|むり}にコントロールせずに、{感情|かんじょう}に{任|まか}せるようにする。",
        "{感情|かんじょう}をコントロールして、{感情|かんじょう}に{流|なが}されないようにする。",
        "{感情|かんじょう}を{隠|かく}すことも、{強|つよ}く{表現|ひょうげん}することもないようにする。",
      ],
      optArti: [
        "Terlibat erat dengan emosi, tetapi tidak terikat olehnya.",
        "Tidak memaksa mengendalikan emosi, melainkan menyerahkan diri pada emosi.",
        "Mengendalikan emosi agar tidak terbawa olehnya.",
        "Tidak menyembunyikan emosi, tetapi juga tidak mengungkapkannya dengan kuat.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "①「{他人|たにん}と{仕事|しごと}をする」ことの{利点|りてん}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang keuntungan \"① bekerja dengan orang lain\"?",
      optYomi: [
        "{負|ま}けた{責任|せきにん}をひとりで{背負|せお}わなくて{済|す}むため、{楽|らく}な{気持|きも}ちで{作品|さくひん}が{作|つく}れる。",
        "{思|おも}い{込|こ}みによる{失敗|しっぱい}がなくなり、{誰|だれ}にでも{受|う}け{入|い}れられる{作品|さくひん}が{作|つく}れる。",
        "{仕事|しごと}の{負担|ふたん}が{減|へ}り、{作品|さくひん}の{質|しつ}を{高|たか}めることに{集中|しゅうちゅう}できる。",
        "{作品|さくひん}の{客観性|きゃっかんせい}が{保|たも}たれる{上|うえ}に、{質|しつ}も{上|あ}げられる。",
      ],
      optArti: [
        "Tidak perlu memikul tanggung jawab kekalahan sendirian, jadi bisa berkarya dengan santai.",
        "Kegagalan karena prasangka hilang, dan bisa membuat karya yang diterima siapa saja.",
        "Beban kerja berkurang, sehingga bisa fokus meningkatkan kualitas karya.",
        "Objektivitas karya terjaga, dan kualitasnya pun bisa ditingkatkan.",
      ],
    },
    51: {
      yomi: "②{絶対|ぜったい}に{勝負|しょうぶ}を{諦|あきら}めてはいけないとあるが、なぜか。",
      arti: "Tertulis \"② jangan pernah menyerah dalam pertarungan\"; mengapa?",
      optYomi: [
        "{後|あと}で{作品|さくひん}の{価値|かち}が{認|みと}められることがあるから",
        "{良|よ}い{作品|さくひん}は{必|かなら}ず{評価|ひょうか}されるものだから",
        "どんな{勝負|しょうぶ}にも{得|え}るものがあるから",
        "{勝負|しょうぶ}に{慣|な}れて{緊張|きんちょう}しなくなるから",
      ],
      optArti: [
        "Karena nilai karya kadang diakui belakangan",
        "Karena karya yang bagus pasti dinilai baik",
        "Karena dari pertarungan apa pun ada yang didapat",
        "Karena terbiasa bertarung sehingga tidak tegang lagi",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}によると、{勝負|しょうぶ}を{続|つづ}ける{上|うえ}で{気|き}をつけるべき{点|てん}は{何|なに}か。",
      arti: "Menurut penulis, apa yang perlu diperhatikan dalam terus bertarung?",
      optYomi: [
        "{勝負|しょうぶ}{以外|いがい}のことは{考|かんが}えてはいけない",
        "{勝|か}ち{負|ま}けにこだわってはいけない",
        "いつも{勝|か}とうと{思|おも}ってはいけない",
        "{負|ま}ける{自分|じぶん}を{想像|そうぞう}してはいけない",
      ],
      optArti: [
        "Jangan memikirkan hal selain pertarungan",
        "Jangan terpaku pada menang-kalah",
        "Jangan selalu berniat menang",
        "Jangan membayangkan diri sendiri kalah",
      ],
    },
    53: {
      yomi: "①{実際|じっさい}にできる{事柄|ことがら}がそれほど{増|ふ}えるわけではないのはなぜか。",
      arti: "Mengapa \"① hal yang benar-benar bisa dilakukan tidak bertambah sebanyak itu\"?",
      optYomi: [
        "{人間|にんげん}は{高速化|こうそくか}した{環境|かんきょう}では{考|かんが}える{時間|じかん}があまりないから",
        "{人間|にんげん}が{物事|ものごと}を{認知|にんち}できる{速度|そくど}はあまり{変化|へんか}しないから",
        "{人間|にんげん}の{認知的|にんちてき}な{能力|のうりょく}を{超|こ}えた{課題|かだい}が{増|ふ}えているから",
        "{人間|にんげん}に{与|あた}えられた{時間|じかん}は{限|かぎ}られているから",
      ],
      optArti: [
        "Karena dalam lingkungan yang makin cepat, manusia tidak punya banyak waktu berpikir",
        "Karena kecepatan manusia mengenali sesuatu tidak banyak berubah",
        "Karena tugas yang melampaui kemampuan kognitif manusia makin banyak",
        "Karena waktu yang diberikan kepada manusia terbatas",
      ],
    },
    54: {
      yomi: "{技術|ぎじゅつ}{革新|かくしん}によって、{一|ひと}つの{事柄|ことがら}の{完成|かんせい}に{要|よう}する{時間|じかん}はどうなったか。",
      arti: "Karena inovasi teknologi, bagaimana waktu yang diperlukan untuk menyelesaikan satu hal?",
      optYomi: [
        "{質|しつ}の{高|たか}さが{求|もと}められるようになったため、{完成|かんせい}までの{時間|じかん}は{変|か}わらない",
        "{考|かんが}える{時間|じかん}は{短縮|たんしゅく}されないため、{完成|かんせい}までの{時間|じかん}は{変|か}わらない",
        "{様々|さまざま}な{情報|じょうほう}が{入手|にゅうしゅ}しやすくなり、{完成|かんせい}までの{時間|じかん}も{短縮|たんしゅく}された",
        "{手作業|てさぎょう}の{時間|じかん}が{短縮|たんしゅく}された{分|ぶん}、{完成|かんせい}までの{時間|じかん}も{短縮|たんしゅく}された",
      ],
      optArti: [
        "Karena kini dituntut kualitas tinggi, waktu sampai selesai tidak berubah",
        "Karena waktu berpikir tidak berkurang, waktu sampai selesai tidak berubah",
        "Berbagai informasi jadi mudah didapat, sehingga waktu sampai selesai juga berkurang",
        "Sebanyak waktu kerja manual berkurang, sebanyak itu pula waktu sampai selesai berkurang",
      ],
    },
    55: {
      yomi: "②ジレンマが{生|しょう}じるとあるが、なぜか。",
      arti: "Tertulis \"② timbul dilema\"; mengapa?",
      optYomi: [
        "{人間|にんげん}の{欲望|よくぼう}が{増|ふ}えすぎて、できることとできないことが{見極|みきわ}められないから",
        "{人間|にんげん}の{欲望|よくぼう}は{増|ふ}えたが、{欲望|よくぼう}を{満|み}たすのに{必要|ひつよう}な{時間|じかん}は{短|みじか}くならないから",
        "{技術|ぎじゅつ}{革新|かくしん}で{作業|さぎょう}{効率|こうりつ}が{上|あ}がったが、しなければならないことも{増|ふ}えているから",
        "{技術|ぎじゅつ}{革新|かくしん}の{速度|そくど}が{速|はや}すぎて、{追|お}いつくのが{難|むずか}しくなっているから",
      ],
      optArti: [
        "Karena keinginan manusia terlalu banyak sehingga tidak bisa membedakan yang bisa dan tidak bisa dilakukan",
        "Karena keinginan manusia bertambah, tetapi waktu yang diperlukan untuk memenuhinya tidak menjadi lebih pendek",
        "Karena efisiensi kerja naik berkat inovasi teknologi, tetapi hal yang harus dilakukan juga bertambah",
        "Karena laju inovasi teknologi terlalu cepat sehingga sulit dikejar",
      ],
    },
    56: {
      yomi: "{筆者|ひっしゃ}によると、{人類|じんるい}が{二足|にそく}{歩行|ほこう}を{採用|さいよう}したのはなぜか。",
      arti: "Menurut penulis, mengapa manusia mengadopsi cara berjalan dengan dua kaki?",
      optYomi: [
        "{広|ひろ}い{範囲|はんい}を{長|なが}く{歩|ある}き{続|つづ}けられるから",
        "{広|ひろ}い{範囲|はんい}を{時間|じかん}をかけずに{移動|いどう}できるから",
        "{遠|とお}くまで{見渡|みわた}しながら{歩|ある}けるから",
        "{必要|ひつよう}に{応|おう}じて{速度|そくど}を{変|か}えながら{歩|ある}けるから",
      ],
      optArti: [
        "Karena bisa terus berjalan lama di wilayah yang luas",
        "Karena bisa berpindah di wilayah luas tanpa memakan waktu",
        "Karena bisa berjalan sambil memandang jauh",
        "Karena bisa berjalan sambil mengubah kecepatan sesuai kebutuhan",
      ],
    },
    57: {
      yomi: "{群|む}れの{行動|こうどう}は、{二足|にそく}{歩行|ほこう}によってどのように{変化|へんか}したと{考|かんが}えられるか。",
      arti: "Bagaimana perilaku kelompok diperkirakan berubah karena berjalan dengan dua kaki?",
      optYomi: [
        "{移動|いどう}が{困難|こんなん}な{者|もの}がグループを{組|く}み、ゆっくり{食物|しょくもつ}を{探|さが}し{歩|ある}くようになった",
        "{移動|いどう}が{困難|こんなん}な{者|もの}を{体力|たいりょく}のある{者|もの}が{助|たす}けながら、{共|とも}に{食物|しょくもつ}を{探|さが}すようになった",
        "{体力|たいりょく}のある{者|もの}のグループができ、その{中|なか}で{食物|しょくもつ}を{共有|きょうゆう}するようになった",
        "{体力|たいりょく}のある{者|もの}のグループができ、{移動|いどう}が{困難|こんなん}な{者|もの}に{食物|しょくもつ}を{分|わ}け{与|あた}えるようになった",
      ],
      optArti: [
        "Yang sulit berpindah membentuk kelompok dan mencari makanan pelan-pelan",
        "Yang kuat membantu yang sulit berpindah sambil bersama-sama mencari makanan",
        "Terbentuk kelompok yang kuat, dan makanan dibagi di dalam kelompok itu",
        "Terbentuk kelompok yang kuat, dan mereka membagikan makanan kepada yang sulit berpindah",
      ],
    },
    58: {
      yomi: "{人類|じんるい}の{祖先|そせん}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mengenai leluhur manusia, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{男|おとこ}たちが{身体|しんたい}をより{大|おお}きく{見|み}せて{群|む}れを{防御|ぼうぎょ}していた",
        "{男|おとこ}たちが{捕食|ほしょく}{動物|どうぶつ}との{遭遇|そうぐう}を{避|さ}けながら{食物|しょくもつ}を{探|さが}し{回|まわ}っていた",
        "{男|おとこ}たちが{捕食|ほしょく}{動物|どうぶつ}からできるだけ{遠|とお}くへ{逃|に}げて{身|み}を{守|まも}っていた",
        "{男|おとこ}たちが{武器|ぶき}を{持|も}って{群|む}れを{防御|ぼうぎょ}しながら{食物|しょくもつ}を{探|さが}し{回|まわ}っていた",
      ],
      optArti: [
        "Para pria melindungi kelompok dengan membuat tubuhnya tampak lebih besar",
        "Para pria berkeliling mencari makanan sambil menghindari bertemu hewan pemangsa",
        "Para pria melindungi diri dengan kabur sejauh mungkin dari hewan pemangsa",
        "Para pria berkeliling mencari makanan sambil melindungi kelompok dengan senjata",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{筆者|ひっしゃ}によると、{歴史学|れきしがく}と{自然|しぜん}{科学|かがく}の{共通点|きょうつうてん}は{何|なに}か。",
      arti: "Menurut penulis, apa kesamaan ilmu sejarah dan ilmu alam?",
      optYomi: [
        "{研究|けんきゅう}の{価値|かち}は{新説|しんせつ}を{示|しめ}すことで{認|みと}められること",
        "{新説|しんせつ}の{展開|てんかい}には、{学者|がくしゃ}{同士|どうし}の{相互|そうご}{批判|ひはん}が{欠|か}かせないこと",
        "{新説|しんせつ}の{根拠|こんきょ}を{検証|けんしょう}{可能|かのう}な{形|かたち}で{示|しめ}すのは{容易|ようい}ではないこと",
        "{他|ほか}の{学者|がくしゃ}が{検証|けんしょう}できるように、{新説|しんせつ}の{根拠|こんきょ}を{示|しめ}す{必要|ひつよう}があること",
      ],
      optArti: [
        "Nilai penelitian diakui dengan menunjukkan teori baru",
        "Dalam mengembangkan teori baru, saling kritik antarilmuwan tak terpisahkan",
        "Tidak mudah menunjukkan dasar teori baru dalam bentuk yang bisa diverifikasi",
        "Dasar teori baru perlu ditunjukkan agar ilmuwan lain bisa memverifikasinya",
      ],
    },
    60: {
      yomi: "{天体|てんたい}{現象|げんしょう}の{発見|はっけん}に{専門|せんもん}{研究者|けんきゅうしゃ}が{少|すく}ないのは、なぜか。",
      arti: "Mengapa sedikit peneliti profesional yang menemukan fenomena benda langit?",
      optYomi: [
        "{専門|せんもん}{研究者|けんきゅうしゃ}は、{新|しん}{天体|てんたい}の{発見|はっけん}には{価値|かち}がないと{考|かんが}えているから",
        "{専門|せんもん}{研究者|けんきゅうしゃ}は、{新|しん}{天体|てんたい}の{発見|はっけん}より{宇宙|うちゅう}そのものの{探究|たんきゅう}を{目的|もくてき}としているから",
        "{専門|せんもん}{研究者|けんきゅうしゃ}は、アマチュアの{天文家|てんもんか}との{役割|やくわり}{分担|ぶんたん}を{意識|いしき}しているから",
        "{専門|せんもん}{研究者|けんきゅうしゃ}は、アマチュアの{天文家|てんもんか}の{発見|はっけん}を{集約|しゅうやく}して{宇宙|うちゅう}{全体|ぜんたい}を{研究|けんきゅう}しているから",
      ],
      optArti: [
        "Karena peneliti profesional menganggap penemuan benda langit baru tidak bernilai",
        "Karena peneliti profesional bertujuan menyelidiki alam semesta itu sendiri, bukan menemukan benda langit baru",
        "Karena peneliti profesional sadar akan pembagian peran dengan astronom amatir",
        "Karena peneliti profesional menghimpun penemuan astronom amatir untuk meneliti seluruh alam semesta",
      ],
    },
    61: {
      yomi: "{歴史|れきし}{小説家|しょうせつか}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa yang dikatakan penulis tentang novelis sejarah?",
      optYomi: [
        "{制度的|せいどてき}な{政治|せいじ}システムを{題材|だいざい}としている",
        "{誰|だれ}も{知|し}らない{史実|しじつ}を{面白|おもしろ}く{物語|ものがたり}にしている",
        "{有名|ゆうめい}な{人物|じんぶつ}や{出来事|できごと}などを{題材|だいざい}としている",
        "{歴史|れきし}{学者|がくしゃ}が{気|き}づかないような{視点|してん}で{書|か}いている",
      ],
      optArti: [
        "Mengangkat sistem politik kelembagaan sebagai bahan",
        "Menjadikan fakta sejarah yang tidak diketahui siapa pun sebagai cerita menarik",
        "Mengangkat tokoh dan peristiwa terkenal sebagai bahan",
        "Menulis dari sudut pandang yang tidak disadari sejarawan",
      ],
    },
    62: {
      yomi: "{歴史|れきし}{学者|がくしゃ}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa yang dikatakan penulis tentang sejarawan?",
      optYomi: [
        "{通説|つうせつ}を{覆|くつがえ}すために、{新|あたら}しい{史実|しじつ}を{発見|はっけん}しようとしている",
        "{通説|つうせつ}に{惑|まど}わされず、{特定|とくてい}の{視点|してん}から{歴史|れきし}をとらえようとしている",
        "{個々|ここ}の{事例|じれい}{研究|けんきゅう}を{踏|ふ}まえて、{史実|しじつ}を{明|あき}らかにしようとしている",
        "{知|し}られていない{史実|しじつ}を{取|と}り{上|あ}げ、{人々|ひとびと}の{歴史|れきし}{認識|にんしき}を{改|あらた}めようとしている",
      ],
      optArti: [
        "Berusaha menemukan fakta sejarah baru untuk membalikkan teori umum",
        "Berusaha memandang sejarah dari sudut pandang tertentu tanpa terkecoh teori umum",
        "Berusaha mengungkap fakta sejarah berdasarkan studi kasus satu per satu",
        "Berusaha mengubah pemahaman sejarah orang dengan mengangkat fakta sejarah yang tidak diketahui",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{現代|げんだい}の{若者|わかもの}の{消費|しょうひ}{傾向|けいこう}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang kecenderungan konsumsi anak muda masa kini?",
      optYomi: [
        "AもBも、{消費|しょうひ}の{対象|たいしょう}が{変化|へんか}していると{述|の}べている",
        "AもBも、ものそのものに{対|たい}する{興味|きょうみ}{関心|かんしん}が{低|ひく}くなったと{述|の}べている",
        "Aはものを{買|か}わなくなったと{述|の}べ、Bは{品質|ひんしつ}にこだわらなくなったと{述|の}べている",
        "Aは{消費|しょうひ}の{対象|たいしょう}がものではなくなったと{述|の}べ、Bは{自身|じしん}のために{消費|しょうひ}するようになったと{述|の}べている",
      ],
      optArti: [
        "A dan B sama-sama menyatakan bahwa objek konsumsi telah berubah",
        "A dan B sama-sama menyatakan bahwa minat terhadap barang itu sendiri menurun",
        "A menyatakan anak muda tidak lagi membeli barang; B menyatakan mereka tidak lagi mementingkan kualitas",
        "A menyatakan objek konsumsi bukan lagi barang; B menyatakan mereka kini berbelanja untuk diri sendiri",
      ],
    },
    64: {
      yomi: "{若者|わかもの}の{消費|しょうひ}{傾向|けいこう}の{変化|へんか}の{要因|よういん}について、AとBが{共通|きょうつう}して{指摘|してき}している{点|てん}は{何|なに}か。",
      arti: "Mengenai penyebab perubahan kecenderungan konsumsi anak muda, apa yang sama-sama ditunjukkan A dan B?",
      optYomi: [
        "{若者|わかもの}の{購買力|こうばいりょく}が{下|さ}がったこと",
        "{若者|わかもの}が{節約|せつやく}を{好|この}むようになったこと",
        "{若者|わかもの}がものに{恵|めぐ}まれた{環境|かんきょう}にあること",
        "{若者|わかもの}にとって{魅力的|みりょくてき}なものが{少|すく}ないこと",
      ],
      optArti: [
        "Daya beli anak muda menurun",
        "Anak muda kini suka berhemat",
        "Anak muda berada di lingkungan yang berlimpah barang",
        "Sedikit barang yang menarik bagi anak muda",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "{個人的|こじんてき}にはそれらに{興味|きょうみ}を{惹|ひ}かれることはなかった。とあるが、なぜか。",
      arti: "Tertulis \"secara pribadi saya tidak tertarik pada lukisan-lukisan itu\"; mengapa?",
      optYomi: [
        "{型|かた}にはまった{見方|みかた}で{描|えが}かれた{山|やま}の{絵|え}が{多|おお}いから",
        "{一般的|いっぱんてき}な{登山者|とざんしゃ}の{視点|してん}で{描|えが}かれた{山|やま}の{絵|え}ではないから",
        "{思|おも}い{出|で}として{残|のこ}すために{描|えが}かれた{山|やま}の{絵|え}しかないから",
        "{自分|じぶん}の{心|こころ}の{中|なか}にある{風景|ふうけい}と{似|に}たような{山|やま}の{絵|え}ばかりだから",
      ],
      optArti: [
        "Karena banyak lukisan gunung yang dilukis dengan cara pandang yang klise",
        "Karena itu bukan lukisan gunung dari sudut pandang pendaki biasa",
        "Karena hanya ada lukisan gunung yang dibuat untuk dikenang",
        "Karena semuanya lukisan gunung yang mirip dengan pemandangan di hatinya",
      ],
    },
    66: {
      yomi: "{筆者|ひっしゃ}は{山|やま}をどのようにとらえているか。",
      arti: "Bagaimana penulis memandang gunung?",
      optYomi: [
        "{山|やま}の{変化|へんか}は{小|ちい}さくても、{心|こころ}に{残|のこ}る{感動|かんどう}は{大|おお}きい",
        "{山|やま}は{同|おな}じように{見|み}えても、それぞれの{個性|こせい}がある",
        "{山|やま}は{一見|いっけん}{変|か}わらないようでも、{変化|へんか}し{続|つづ}けている",
        "{同|おな}じ{山|やま}に{登|のぼ}っても、{山|やま}から{受|う}ける{印象|いんしょう}は{毎回|まいかい}{異|こと}なる",
      ],
      optArti: [
        "Perubahan gunung kecil, tetapi kesan haru yang tertinggal di hati besar",
        "Gunung tampak serupa, tetapi masing-masing punya kekhasan",
        "Gunung sekilas tampak tidak berubah, tetapi terus berubah",
        "Meski mendaki gunung yang sama, kesan yang didapat selalu berbeda",
      ],
    },
    67: {
      yomi: "{都市|とし}{生活者|せいかつしゃ}と、{何十年|なんじゅうねん}も{山|やま}で{暮|く}らしてきたような{画家|がか}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa yang dikatakan penulis tentang penduduk kota dan pelukis yang sudah puluhan tahun tinggal di gunung?",
      optYomi: [
        "いずれも{山|やま}への{憧|あこが}れが{強|つよ}い",
        "いずれも{山|やま}への{興味|きょうみ}が{失|うしな}われている",
        "いずれも{山|やま}の{見方|みかた}が{変化|へんか}してきている",
        "いずれも{山|やま}のイメージが{固定化|こていか}している",
      ],
      optArti: [
        "Keduanya sangat mendambakan gunung",
        "Keduanya sudah kehilangan minat pada gunung",
        "Keduanya cara pandang terhadap gunung sudah berubah",
        "Keduanya memiliki citra gunung yang sudah membeku/klise",
      ],
    },
    68: {
      yomi: "{山|やま}の{風景画|ふうけいが}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang lukisan pemandangan gunung?",
      optYomi: [
        "{山|やま}の{姿|すがた}を{描|えが}くためには、その{山|やま}の{特徴|とくちょう}を{強調|きょうちょう}すべきだ",
        "{山|やま}を{多様|たよう}に{描|えが}くためには、{画家|がか}は{個性|こせい}を{発揮|はっき}すべきだ",
        "{山|やま}への{思|おも}いは{皆|みな}{違|ちが}うのだから、その{表現|ひょうげん}も{自由|じゆう}であるべきだ",
        "{山|やま}の{姿|すがた}は{単一|たんいつ}ではないのだから、その{表現|ひょうげん}も{多様|たよう}であるべきだ",
      ],
      optArti: [
        "Untuk melukis wujud gunung, ciri khas gunung itu harus ditonjolkan",
        "Untuk melukis gunung secara beragam, pelukis harus menunjukkan kepribadiannya",
        "Karena perasaan setiap orang terhadap gunung berbeda, ekspresinya pun harus bebas",
        "Karena wujud gunung tidak tunggal, ekspresinya pun harus beragam",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{東|ひがし}あさひ{市立|しりつ}{博物館|はくぶつかん}「{友|とも}の{会|かい}」の{会員|かいいん}になると{受|う}けることのできるサービスはどれか。",
      arti: "Layanan mana yang bisa diterima jika menjadi anggota \"Tomo no Kai\" (perkumpulan sahabat) Museum Kota Higashi-Asahi?",
      optYomi: [
        "{常設展|じょうせつてん}をいつでも{割引|わりびき}{料金|りょうきん}で{見学|けんがく}できる。",
        "{開催|かいさい}されるすべての{特別展|とくべつてん}にそれぞれ{一度|いちど}だけ{無料|むりょう}で{入|はい}れる。",
        "ショップで{売|う}られている{本|ほん}や{雑誌|ざっし}を10％{安|やす}く{買|か}える。",
        "{半年間|はんとしかん}、{毎月|まいつき}{無料|むりょう}で{博物館|はくぶつかん}{発行|はっこう}の{情報|じょうほう}{雑誌|ざっし}を{送|おく}ってもらえる。",
      ],
      optArti: [
        "Bisa melihat pameran tetap kapan saja dengan harga diskon.",
        "Bisa masuk gratis satu kali ke setiap pameran khusus yang diadakan.",
        "Bisa membeli buku dan majalah yang dijual di toko dengan diskon 10%.",
        "Selama setengah tahun, setiap bulan dikirimi majalah informasi terbitan museum secara gratis.",
      ],
    },
    70: {
      yomi: "ソンさんは、{家|いえ}の{近所|きんじょ}にある{東|ひがし}あさひ{市立|しりつ}{博物館|はくぶつかん}の「{友|とも}の{会|かい}」{会員|かいいん}である。{明後日|あさって}21{日|にち}に{始|はじ}まる{特別展|とくべつてん}を{見|み}に{行|い}く{予定|よてい}だが、{明日|あした}{20日|はつか}で{会員|かいいん}{期間|きかん}が{終了|しゅうりょう}することに{気|き}がついた。21{日|にち}に{会員|かいいん}サービスが{利用|りよう}でき、{年会費|ねんかいひ}がより{安|やす}く{済|す}む{方法|ほうほう}はどれか。",
      arti: "Son-san adalah anggota \"Tomo no Kai\" Museum Kota Higashi-Asahi yang ada di dekat rumahnya. Ia berencana melihat pameran khusus yang dimulai lusa tanggal 21, tetapi menyadari bahwa masa keanggotaannya berakhir besok tanggal 20. Cara mana yang membuatnya bisa memakai layanan anggota pada tanggal 21 dengan iuran tahunan yang lebih murah?",
      optYomi: [
        "{20日|はつか}までに{窓口|まどぐち}に{行|い}って、{継続|けいぞく}{入会|にゅうかい}の{申|もう}し{込|こ}みをする",
        "{20日|はつか}までに{郵送|ゆうそう}で、{継続|けいぞく}{入会|にゅうかい}の{申|もう}し{込|こ}みをする",
        "21{日|にち}に{窓口|まどぐち}に{行|い}って、{継続|けいぞく}{入会|にゅうかい}の{申|もう}し{込|こ}みをする",
        "21{日|にち}に{窓口|まどぐち}に{行|い}って、{新規|しんき}{入会|にゅうかい}の{申|もう}し{込|こ}みをする",
      ],
      optArti: [
        "Pergi ke loket paling lambat tanggal 20 dan mendaftar perpanjangan keanggotaan",
        "Mendaftar perpanjangan keanggotaan lewat pos paling lambat tanggal 20",
        "Pergi ke loket pada tanggal 21 dan mendaftar perpanjangan keanggotaan",
        "Pergi ke loket pada tanggal 21 dan mendaftar keanggotaan baru",
      ],
    },
  },

  bacaan: {
    // ── 問題7：ずっと刻まれる「母の愛」 ──
    "7": {
      yomi: `{友人|ゆうじん}からの{深夜|しんや}の{電話|でんわ}。{彼女|かのじょ}は{息子|むすこ}の{小学校|しょうがっこう}1{年|ねん}のときのクラスメートの{母親|ははおや}で、いわゆるママ{友|とも}である。お{寿司屋|すしや}さんの{彼女|かのじょ}とは{家族|かぞく}ぐるみの{付|つ}き{合|あ}いで、もう20{年|ねん}{以上|いじょう}が{経|た}つ。{仕事|しごと}を{持|も}つ{私|わたし}たちが{自分|じぶん}の{時間|じかん}を{持|も}てるのは、{決|き}まって{深夜|しんや}、いつも{真夜中|まよなか}にいろいろなことを{話|はな}し、{助|たす}け{合|あ}いながら{生|い}きてきた。

[41]{息子|むすこ}が{一人|ひとり}{暮|ぐ}らしを{始|はじ}めた。お{祝|いわ}いを{兼|か}ねてアパートを{訪|たず}ね、{夕食|ゆうしょく}を{作|つく}り、{洗濯|せんたく}をし、{汗|あせ}だくになって{真新|まあたら}しいカーテンをつけ{終|お}えたという。そして{帰|かえ}る{母親|ははおや}に{彼|かれ}は{一言|ひとこと}「じゃあね」。その「じゃあね」に{頭|あたま}にきたと。なぜ、「お{母|かあ}さんありがとう」と{言|い}えないのだ。[42]と、{寂|さび}しくなったという。

{彼女|かのじょ}{自身|じしん}は{幼|おさな}い{頃|ころ}に{両親|りょうしん}が{離婚|りこん}し、{父親|ちちおや}の{元|もと}で{育|そだ}ち、{中学|ちゅうがく}から{家事|かじ}{一切|いっさい}を{任|まか}されていた。{彼女|かのじょ}の{洗濯物|せんたくもの}のたたみ{方|かた}は{今|いま}でも{見|み}ていて{美|うつく}しく、{気持|きも}ちがいい。{子供|こども}たちにはできる{限|かぎ}りのことをしてあげたいと、いつも{一生懸命|いっしょうけんめい}やってきたという。「それでいいんだよ」。そう{答|こた}えながら、{私|わたし}には{突然|とつぜん}、{自分|じぶん}が7{歳|さい}のときの{光景|こうけい}が{蘇|よみがえ}った。

[43]、{私|わたし}の{母|はは}も{働|はたら}いていた。ある{日|ひ}、{初|はじ}めて{友人|ゆうじん}が{家|いえ}に{遊|あそ}びに{来|く}ることになり、{前|まえ}の{晩|ばん}{一緒|いっしょ}にお{風呂|ふろ}に{入|はい}りながら、{母|はは}にそのことを{告|つ}げた。「{明日|あした}ね、○○チャンと○○チャンと……」。{母|はは}は{黙|だま}って[44]。{翌日|よくじつ}{帰宅|きたく}すると、テーブルの{上|うえ}の{紙皿|かみざら}に、{人数分|にんずうぶん}の{数|すう}{種類|しゅるい}のお{菓子|かし}がきれいに{並|なら}べられていた。{手作|てづく}りのケーキや{高価|こうか}なお{菓子|かし}でもなんでもないけれど、{私|わたし}は{自慢|じまん}げにみんなに{言|い}った。「さあ、おやつですよー」

そうなのだ。{愛情|あいじょう}は{突然|とつぜん}{蘇|よみがえ}り、{胸|むね}いっぱいに{広|ひろ}がり、{生|い}き{続|つづ}けるものなのだ。{彼女|かのじょ}の{息子|むすこ}への{愛|あい}も、これからずっと{彼|かれ}の{心|こころ}で[45]。
（{大竹|おおたけ}しのぶ{朝日|あさひ}{新聞|しんぶん}2013{年|ねん}7{月|がつ}19{日|にち}{付|づけ}{夕刊|ゆうかん}による）`,
      arti: `Telepon tengah malam dari seorang teman. Ia ibu dari teman sekelas anak saya waktu kelas 1 SD, yang biasa disebut "teman sesama ibu". Saya dan dia, yang punya restoran sushi, berteman sampai antarkeluarga, dan sudah lebih dari 20 tahun. Kami yang sama-sama bekerja hanya bisa punya waktu sendiri pada tengah malam; kami selalu membicarakan banyak hal di tengah malam dan hidup saling membantu.

Putra [41] mulai hidup sendiri. Katanya ia mengunjungi apartemennya sekaligus memberi selamat, memasak makan malam, mencuci, dan dengan bermandi keringat selesai memasang gorden baru. Lalu kepada ibunya yang pulang, putranya hanya berkata, "Daah." Katanya ia jengkel dengan "daah" itu. Mengapa ia tidak bisa berkata, "Terima kasih, Bu"? [42], begitu katanya, ia jadi merasa sedih.

Ia sendiri, sewaktu kecil orang tuanya bercerai, ia dibesarkan ayahnya, dan sejak SMP dipercaya mengurus semua pekerjaan rumah. Cara ia melipat cucian sampai sekarang indah dan enak dilihat. Katanya ia selalu berusaha sekuat tenaga ingin melakukan sebisa mungkin untuk anak-anaknya. "Begitu saja sudah cukup." Sambil menjawab begitu, tiba-tiba terlintas kembali di benak saya pemandangan ketika saya berusia 7 tahun.

[43], ibu saya juga bekerja. Suatu hari, untuk pertama kalinya teman-teman akan datang bermain ke rumah, dan malam sebelumnya sambil mandi bersama, saya memberi tahu ibu. "Besok, si ○○ dan si ○○ dan..." Ibu [44] diam saja. Keesokan harinya ketika pulang, di atas piring kertas di meja tersusun rapi beberapa jenis kue sejumlah orang yang datang. Bukan kue buatan sendiri atau kue mahal, tetapi saya berkata dengan bangga kepada semuanya, "Ayo, waktunya camilan!"

Begitulah. Kasih sayang itu tiba-tiba hidup kembali, memenuhi dada, dan terus hidup. Kasih sayangnya kepada putranya pun, mulai sekarang dan seterusnya, [45] di hati putranya.
(Dari tulisan Otake Shinobu, Asahi Shimbun edisi sore 19 Juli 2013)`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{無駄|むだ}なものを{早|はや}めに{見極|みきわ}め、{優先度|ゆうせんど}をつけ、いかにスピーディに{仕事|しごと}をこなしていくか。それが{賢|かしこ}く{成果|せいか}を{出|だ}す{方法|ほうほう}だ。{目|め}の{前|まえ}の{先輩|せんぱい}たちも、そうやって{働|はたら}いている{人|ひと}も{多|おお}いのではないかと{思|おも}います。

でも、そうした{人|ひと}たちの{問題点|もんだいてん}は、{仕事|しごと}の{判断|はんだん}{軸|じく}が{自分|じぶん}になるということです。{結局|けっきょく}{自分|じぶん}が{効率的|こうりつてき}に{働|はたら}けるか、{自分|じぶん}が{求|もと}められている{仕事量|しごとりょう}を{時間|じかん}{内|ない}にこなせるかが{最大|さいだい}の{判断|はんだん}{軸|じく}になっていくのです。

すると、できる{範囲|はんい}のこと、{無理|むり}のないことに{収|おさ}まっていってしまうのです。
（{高橋|たかはし}{克枝|かつえ}『「{上司|じょうし}がさっぱりわかってくれない」と{思|おも}っているあなたへ』による）`,
      arti: `Memilah hal yang sia-sia sejak awal, menentukan prioritas, dan menyelesaikan pekerjaan secepat mungkin. Itulah cara cerdas untuk menghasilkan. Saya kira banyak juga senior di sekitar Anda yang bekerja seperti itu.

Namun, masalah orang-orang seperti itu adalah poros penilaian pekerjaannya menjadi diri sendiri. Akhirnya, apakah dirinya bisa bekerja efisien dan apakah dirinya bisa menyelesaikan beban kerja yang diminta dalam waktu yang ditentukan menjadi poros penilaian terbesar.

Akibatnya, pekerjaan pun terbatas pada hal yang bisa dilakukan dan yang tidak memaksakan diri.
(Dari buku karya Takahashi Katsue, untuk Anda yang merasa "atasan sama sekali tidak memahami saya")`,
    },
    "8-2": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}で{回覧|かいらん}された{文章|ぶんしょう}である。

2015{年|ねん}12{月|がつ}{1日|ついたち}

{社員|しゃいん}{各位|かくい}
{経理部|けいりぶ}

{年末|ねんまつ}{年始|ねんし}{休業|きゅうぎょう}に{伴|ともな}う{出張|しゅっちょう}{経費|けいひ}{精算|せいさん}{書類|しょるい}の{提出|ていしゅつ}について

{出張|しゅっちょう}{経費|けいひ}{精算|せいさん}{書類|しょるい}の12{月|がつ}の{受付|うけつけ}は{月末|げつまつ}ではなく25{日|にち}（{金|きん}）までとなります。25{日|にち}までに{受理|じゅり}した{書類|しょるい}については、1{月|がつ}{末日|まつじつ}に{各人|かくじん}の{個人|こじん}{口座|こうざ}に{振込|ふりこ}みます。25{日|にち}を{過|す}ぎたものについては、2{月|がつ}{末日|まつじつ}の{振|ふ}り{込|こ}みとなりますのでご{了承|りょうしょう}ください。{領収書|りょうしゅうしょ}の{添付|てんぷ}{漏|も}れや{記載|きさい}ミスへの{対応|たいおう}も{業務|ぎょうむ}{再開|さいかい}{後|ご}となりますので{併|あわ}せてご{了承|りょうしょう}ください。

なお、{出張|しゅっちょう}{経費|けいひ}{精算|せいさん}{書類|しょるい}の1{月|がつ}の{受付|うけつけ}は{年末|ねんまつ}{年始|ねんし}{休業|きゅうぎょう}{明|あ}けから{再開|さいかい}し、{締|し}め{切|き}りは{通常|つうじょう}{通|どお}り{月末|げつまつ}となります。

{以上|いじょう}`,
      arti: `Berikut ini adalah surat edaran yang diedarkan di sebuah perusahaan.

1 Desember 2015

Kepada seluruh karyawan
Bagian Akuntansi

Perihal penyerahan dokumen penggantian biaya perjalanan dinas sehubungan dengan libur akhir dan awal tahun

Penerimaan dokumen penggantian biaya perjalanan dinas bulan Desember berlaku sampai tanggal 25 (Jumat), bukan akhir bulan. Dokumen yang diterima paling lambat tanggal 25 akan ditransfer ke rekening pribadi masing-masing pada akhir Januari. Dokumen yang lewat dari tanggal 25 akan ditransfer pada akhir Februari; mohon dimaklumi. Penanganan kuitansi yang lupa dilampirkan atau kesalahan penulisan juga baru dilakukan setelah kantor kembali beroperasi; mohon dimaklumi juga.

Selain itu, penerimaan dokumen bulan Januari dibuka kembali setelah libur akhir dan awal tahun, dan batas waktunya seperti biasa yaitu akhir bulan.

Demikian.`,
    },
    "8-3": {
      yomi: `コンピュータ{化|か}の{進行|しんこう}とともに、{記憶力|きおくりょく}のみならず、{計算力|けいさんりょく}とか、{情報|じょうほう}{整理力|せいりりょく}とか、いくつもの{脳|のう}の{雑用|ざつよう}と{思|おも}われている{作業|さぎょう}を{電脳|でんのう}（{注|ちゅう}）に{負|お}わせるようになった。{肉体|にくたい}{労働|ろうどう}だけでなく、{精神|せいしん}{労働|ろうどう}の{負担|ふたん}からも{人間|にんげん}を{解放|かいほう}し、{持|も}てる{力|ちから}をなるべく{創造的|そうぞうてき}な{仕事|しごと}に{振|ふ}り{向|む}けようというのだろう。しかし、{創造力|そうぞうりょく}とは{何|なん}だろう。{記憶力|きおくりょく}や{情報|じょうほう}{整理力|せいりりょく}など{脳|のう}の{基礎|きそ}{体力|たいりょく}の{上|うえ}に{成|な}り{立|た}つもののような{気|き}がしてならないのだ。
（{米原|よねはら}{万里|まり}『{心臓|しんぞう}に{毛|け}が{生|は}えている{理由|りゆう}』による）
（{注|ちゅう}）{電脳|でんのう}：コンピュータ`,
      arti: `Seiring kemajuan komputerisasi, kita mulai membebankan pada "otak elektronik" (catatan) bukan hanya daya ingat, tetapi juga berbagai pekerjaan yang dianggap urusan remeh otak, seperti kemampuan berhitung dan kemampuan mengatur informasi. Mungkin maksudnya membebaskan manusia bukan hanya dari kerja fisik tetapi juga dari beban kerja mental, dan mengarahkan sebanyak mungkin kemampuan yang dimiliki ke pekerjaan kreatif. Namun, apa itu daya cipta? Saya tak bisa tidak merasa bahwa daya cipta berdiri di atas stamina dasar otak seperti daya ingat dan kemampuan mengatur informasi.
(Dari buku karya Yonehara Mari, "Alasan Jantung Ditumbuhi Bulu")
(Catatan) 電脳: komputer`,
    },
    "8-4": {
      yomi: `{誰|だれ}にとっても、{感情|かんじょう}とどう{付|つ}き{合|あ}うかということはなかなか{厄介|やっかい}な{問題|もんだい}である。{感情|かんじょう}とうまくつきあうということは、{単|たん}に{社会的|しゃかいてき}{場面|ばめん}での{感情|かんじょう}{表現|ひょうげん}をうまくコントロールするということではない。むしろ、{感情|かんじょう}の{豊|ゆた}かさや{複雑|ふくざつ}さを{通|とお}して、またしばしば{割|わ}り{切|き}りがたく{統御|とうぎょ}（{注|ちゅう}）しがたい{感情|かんじょう}の{動|うご}きを{通|とお}して、{生|い}きることを{味|あじ}わい、{人生|じんせい}を{活性化|かっせいか}しながら、しかも{感情|かんじょう}の{力|ちから}に{支配|しはい}されないということであろう。
（{井上|いのうえ}{俊|しゅん}　{船津|ふなつ}{衛|まもる}{編|へん}『{自己|じこ}と{他者|たしゃ}の{社会学|しゃかいがく}』による）
（{注|ちゅう}）{統御|とうぎょ}する：{思|おも}いどおりに{扱|あつか}う`,
      arti: `Bagi siapa pun, bagaimana bergaul dengan emosi adalah masalah yang cukup merepotkan. Bergaul dengan baik dengan emosi tidak sekadar berarti mengendalikan ekspresi emosi dengan baik dalam situasi sosial. Justru, itu berarti menikmati hidup dan menghidupkan kehidupan melalui kekayaan dan kerumitan emosi, serta melalui gerak emosi yang sering sulit dipilah dan sulit dikendalikan (catatan), namun tetap tidak dikuasai oleh kekuatan emosi.
(Dari buku "Sosiologi Diri dan Orang Lain", tulisan Inoue Shun, disunting Funatsu Mamoru)
(Catatan) 統御する: menangani sesuai kehendak`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{以下|いか}は、ある{映画|えいが}{監督|かんとく}が{書|か}いた{文章|ぶんしょう}である。

{勝負|しょうぶ}を{続|つづ}けている{限|かぎ}りは、{負|ま}けは{確定|かくてい}しない。{勝|か}ったり{負|ま}けたりしながら、{人生|じんせい}は{続|つづ}いていく。ただ、{勝負|しょうぶ}を{続|つづ}けていくうちにだんだん{勝負勘|しょうぶかん}はついてくるし、くだらない{失敗|しっぱい}はしなくなってくる。スキル（{注|ちゅう}1）が{上|あ}がってくるからだ。

{映画|えいが}の{話|はなし}で{言|い}えば、{僕|ぼく}は{映画|えいが}{制作|せいさく}のシステムそのものに、{大負|おおま}けをしない{仕掛|しか}けを{組|く}み{込|こ}んだ。それは、①「{他人|たにん}と{仕事|しごと}をする」ということだ。{他人|たにん}という{客観性|きゃっかんせい}を{映画|えいが}{制作|せいさく}の{現場|げんば}に{持|も}ち{込|こ}めば、{独|ひと}りよがりな（{注|ちゅう}2）{作品|さくひん}に{突|つ}っ{走|ぱし}ることを{彼|かれ}らが{防|ふせ}いでくれる。それに{僕|ぼく}は{優秀|ゆうしゅう}なやつとしか{組|く}まないから、{僕|ぼく}ひとりで{何|なに}もかも{考|かんが}えるよりずっと{映画|えいが}の{質|しつ}は{高|たか}くなるのだ。

{勝負|しょうぶ}を{続|つづ}けていると、{思|おも}わぬ{成果|せいか}が{飛|と}び{込|こ}んでくることがある。かつて{負|ま}けたと{思|おも}い{込|こ}んでいた{勝負|しょうぶ}に、{後|あと}になって{勝|か}ってしまうことがあるのだ。{僕|ぼく}の{例|れい}で{言|い}えば、{愚直|ぐちょく}（{注|ちゅう}3）に{映画|えいが}を{撮|と}り{続|つづ}けて、ある{程度|ていど}の{評価|ひょうか}を{得|え}るうちに、かつてボロクソに{言|い}われた（{注|ちゅう}4）{作品|さくひん}に{光|ひかり}が{当|あ}たり、{再|さい}{評価|ひょうか}されるようなこともある。（{中略|ちゅうりゃく}）

だから②{絶対|ぜったい}に{勝負|しょうぶ}を{諦|あきら}めてはいけない。ただし、{常勝|じょうしょう}を{狙|ねら}うのは{禁物|きんもつ}だ。{勝負|しょうぶ}をしなければ{勝|か}つことはできないが、{必|かなら}ず{勝|か}とうと、{絶対|ぜったい}に{失敗|しっぱい}しないようにしようと{意気込|いきご}んだら、{緊張感|きんちょうかん}や{気負|きお}いや、そんな{余計|よけい}なものを{背負|せお}い{込|こ}んで{結果的|けっかてき}に{負|ま}けてしまう。
（{押井|おしい}{守|まもる}『{凡人|ぼんじん}として{生|い}きるということ』による）
（{注|ちゅう}1）スキル：{技術|ぎじゅつ}
（{注|ちゅう}2）{独|ひと}りよがりな：ここでは、{自己|じこ}{満足|まんぞく}の
（{注|ちゅう}3）{愚直|ぐちょく}に：ここでは、まじめに、こつこつと
（{注|ちゅう}4）ボロクソに{言|い}われる：ここでは、ひどい{評価|ひょうか}を{受|う}ける`,
      arti: `Berikut ini adalah tulisan seorang sutradara film.

Selama terus bertarung, kekalahan tidak pernah final. Hidup terus berjalan sambil menang dan kalah. Hanya saja, selama terus bertarung, insting bertarung perlahan terasah dan kita tidak lagi melakukan kesalahan konyol. Sebab keterampilan (catatan 1) meningkat.

Kalau bicara soal film, saya menanamkan mekanisme agar tidak kalah telak ke dalam sistem produksi film itu sendiri. Yaitu ① "bekerja dengan orang lain". Jika objektivitas berupa orang lain dibawa ke lokasi produksi film, mereka akan mencegah saya melaju ke karya yang memuaskan diri sendiri (catatan 2). Lagi pula, saya hanya bekerja sama dengan orang-orang hebat, jadi kualitas film jauh lebih tinggi daripada kalau saya memikirkan semuanya sendirian.

Kalau terus bertarung, kadang hasil tak terduga datang. Pertarungan yang dulu saya yakini kalah, belakangan ternyata saya menangkan. Dalam contoh saya, sambil terus membuat film dengan tekun (catatan 3) dan mendapat penilaian tertentu, karya yang dulu dicaci habis-habisan (catatan 4) mendapat sorotan dan dinilai ulang. (dipersingkat)

Karena itu, ② jangan pernah menyerah dalam pertarungan. Namun, mengincar kemenangan terus-menerus itu pantangan. Tanpa bertarung kita tidak bisa menang, tetapi kalau bertekad harus menang, harus sama sekali tidak gagal, kita akan memikul hal-hal berlebihan seperti ketegangan dan ambisi berlebih, dan akhirnya justru kalah.
(Dari buku karya Oshii Mamoru, "Hidup sebagai Orang Biasa")
(Catatan 1) スキル: keterampilan
(Catatan 2) 独りよがりな: di sini, yang memuaskan diri sendiri
(Catatan 3) 愚直に: di sini, dengan serius dan tekun
(Catatan 4) ボロクソに言われる: di sini, mendapat penilaian yang sangat buruk`,
    },
    "9-2": {
      yomi: `{環境|かんきょう}が{高速化|こうそくか}しても、{私|わたし}たちの{神経的|しんけいてき}な{伝達|でんたつ}{速度|そくど}や{知覚|ちかく}{認知|にんち}の{処理|しょり}{時間|じかん}は{変化|へんか}しないことから、{人間|にんげん}が{一時|いちじ}にできる{認知的|にんちてき}{課題|かだい}の{数|かず}もそれほど{変|か}わらないことが{推察|すいさつ}される。このことは、{様々|さまざま}な{情報|じょうほう}が{手|て}に{入|はい}り、やりたいこと、したいこと、そして{実際|じっさい}にできる{可能性|かのうせい}が{高|たか}まったとしても、①{実際|じっさい}にできる{事柄|ことがら}がそれほど{増|ふ}えるわけではないことを{示唆|しさ}している。

もちろん、{技術|ぎじゅつ}{革新|かくしん}によって、{一|ひと}つの{事柄|ことがら}をやり{遂|と}げるまでに{要|よう}する{時間|じかん}は{大|おお}いに{短縮|たんしゅく}された。{筆者|ひっしゃ}{自身|じしん}、パーソナルコンピュータを{使|つか}って{論文|ろんぶん}などを{書|か}くようになって、{論文|ろんぶん}{一本|いっぽん}あたりにかかる{時間|じかん}と{労力|ろうりょく}はずいぶん{減少|げんしょう}したと{思|おも}う。{特|とく}に、{原稿|げんこう}を{清書|せいしょ}したり{作図|さくず}したり、という{手作業|てさぎょう}の{段階|だんかい}に{要|よう}する{時間|じかん}はかなり{減|へ}った。

しかし、そうはいっても、{論文|ろんぶん}を{書|か}く{際|さい}に{論理|ろんり}{展開|てんかい}をまとめるのに{要|よう}する{時間|じかん}はそれほど{短縮|たんしゅく}されるわけではない。{考|かんが}えるためには、どうしてもそれなりの{時間|じかん}が{必要|ひつよう}だ。

（{中略|ちゅうりゃく}）

{人間|にんげん}が{一|ひと}つのことをやり{遂|と}げるにはどうしても{一定|いってい}の{時間|じかん}がかかる。その{時間|じかん}が{技術|ぎじゅつ}{革新|かくしん}や{経験|けいけん}、{学習|がくしゅう}によって、{増|ふ}えた{欲望|よくぼう}を{満|み}たすのに{必要|ひつよう}な{時間|じかん}{以上|いじょう}に{短縮|たんしゅく}されないとしたらどうなるだろうか。{当然|とうぜん}、{潜在的|せんざいてき}な{可能性|かのうせい}に{基|もと}づいて{肥大|ひだい}する{欲望|よくぼう}のうち、{実際|じっさい}に{満|み}たされるものは{一部|いちぶ}のみということになる。この{場合|ばあい}、やりたいこと、やれるはずのことは{数多|かずおお}くあるのに、なかなかそれが{実現|じつげん}できない②ジレンマが{生|しょう}じる。

そうなると、むしろ、できる{事柄|ことがら}が{少|すく}なかったころよりも{時間|じかん}が{足|た}りず、{忙|いそが}しく、やりたいことができないという{感覚|かんかく}が{強|つよ}くなっているかもしれない。
（{一川|いちかわ}{誠|まこと}『{大人|おとな}の{時間|じかん}はなぜ{短|みじか}いのか』による）`,
      arti: `Meskipun lingkungan makin cepat, kecepatan penghantaran saraf dan waktu pemrosesan persepsi-kognisi kita tidak berubah, sehingga dapat diduga bahwa jumlah tugas kognitif yang bisa dilakukan manusia sekaligus juga tidak banyak berubah. Hal ini menyiratkan bahwa meskipun berbagai informasi bisa didapat dan kemungkinan untuk hal yang ingin kita lakukan serta benar-benar bisa kita lakukan meningkat, ① hal yang benar-benar bisa dilakukan tidak bertambah sebanyak itu.

Tentu saja, berkat inovasi teknologi, waktu yang diperlukan untuk menyelesaikan satu hal telah sangat dipersingkat. Saya sendiri, sejak menulis makalah dengan komputer pribadi, merasa waktu dan tenaga per satu makalah jauh berkurang. Terutama, waktu untuk tahap pekerjaan tangan seperti menyalin naskah dengan rapi atau membuat gambar berkurang drastis.

Namun, meski begitu, waktu yang diperlukan untuk merangkai alur logika saat menulis makalah tidak banyak berkurang. Untuk berpikir, bagaimanapun diperlukan waktu yang memadai.

(dipersingkat)

Untuk menyelesaikan satu hal, manusia bagaimanapun memerlukan waktu tertentu. Bagaimana jika waktu itu, berkat inovasi teknologi, pengalaman, dan pembelajaran, tidak berkurang melebihi waktu yang diperlukan untuk memenuhi keinginan yang bertambah? Tentu saja, dari keinginan yang membengkak berdasarkan kemungkinan terpendam, hanya sebagian yang benar-benar terpenuhi. Dalam hal ini, timbul ② dilema: banyak hal yang ingin dilakukan dan seharusnya bisa dilakukan, tetapi sulit diwujudkan.

Kalau begitu, bisa jadi perasaan kekurangan waktu, sibuk, dan tidak bisa melakukan apa yang diinginkan justru lebih kuat dibandingkan masa ketika hal yang bisa dilakukan masih sedikit.
(Dari buku karya Ichikawa Makoto, "Mengapa Waktu Orang Dewasa Terasa Singkat")`,
    },
    "9-3": {
      yomi: `{類人猿|るいじんえん}（{注|ちゅう}1）の{四足|しそく}{歩行|ほこう}と{人間|にんげん}の{二足|にそく}{歩行|ほこう}を{比|くら}べると、{時速|じそく}4kmくらいの{速度|そくど}で{歩|ある}くと、{二足|にそく}{歩行|ほこう}のほうがエネルギー{効率|こうりつ}がいい。しかも{長|なが}く{歩|ある}けば{歩|ある}くほどエネルギー{節約率|せつやくりつ}が{高|たか}くなる。すなわち、{初期|しょき}の{人類|じんるい}は{長|なが}い{距離|きょり}をゆっくりした{速度|そくど}で{歩|ある}く{必要性|ひつようせい}に{迫|せま}られて、{直立|ちょくりつ}{二足|にそく}{歩行|ほこう}を{採用|さいよう}したと{考|かんが}えられるのだ。これは{初期|しょき}の{人類|じんるい}が{徐々|じょじょ}に{熱帯|ねったい}{雨林|うりん}を{出|で}ようとしていたこととぴたり{符合|ふごう}する（{注|ちゅう}2）。{熱帯|ねったい}{雨林|うりん}の{外|そと}では{果実|かじつ}が{散在|さんざい}していて、{広|ひろ}い{範囲|はんい}を{探|さが}し{回|まわ}る{必要|ひつよう}がある。これを{可能|かのう}にする{歩行|ほこう}{様式|ようしき}として、{二足|にそく}で{歩|ある}くことが{有利|ゆうり}になった{可能性|かのうせい}がある。

しかし、{長|ちょう}{距離|きょり}を{歩|ある}くことになると{群|む}れの{全員|ぜんいん}がまとまって{移動|いどう}するのは{困難|こんなん}になる。{子供|こども}や{身重|みおも}（{注|ちゅう}3）の{女性|じょせい}、{老人|ろうじん}など{速|はや}い{速度|そくど}で{長|ちょう}{距離|きょり}を{歩|ある}くことが{難|むずか}しい{仲間|なかま}がいる。そのため、{体力|たいりょく}のある{男|おとこ}たちが{少数|しょうすう}のグループを{組|く}み、{広|ひろ}く{歩|ある}き{回|まわ}って{食物|しょくもつ}を{集|あつ}め、それを{女|おんな}や{子供|こども}たちのもとへ{持|も}ち{帰|かえ}っていっしょに{食|た}べたのではないかと{思|おも}われるのだ。これが{食物|しょくもつ}{共有|きょうゆう}{仮説|かせつ}である。だが、サバンナ（{注|ちゅう}4）へ{出|で}たサルたちは{二足|にそく}にはならなかった。なぜ{人間|にんげん}だけがなったのか。それは、サバンナへ{出|で}たパタスザルやアヌビスヒヒ、マントヒヒたちはオスがメスより{格段|かくだん}に{大|おお}きくなり、{長|なが}い{犬歯|けんし}（{注|ちゅう}5）を{発達|はったつ}させて{群|む}れの{防御|ぼうぎょ}をするようになったからである。しかも{胃腸|いちょう}の{強|つよ}い{彼|かれ}らは{人類|じんるい}ほど{広|ひろ}い{範囲|はんい}を{歩|ある}き{回|まわ}って{食物|しょくもつ}を{探|さが}す{必要|ひつよう}はなかった。{一方|いっぽう}、{人類|じんるい}の{祖先|そせん}は{男|おとこ}が{大|おお}きくなるどころか、{性差|せいさ}が{小|ちい}さく、{犬歯|けんし}も{縮小|しゅくしょう}して{武器|ぶき}としては{使|つか}えなくなっている。これは{人類|じんるい}の{男|おとこ}たちが{捕食|ほしょく}{動物|どうぶつ}と{戦|たたか}うよりも、その{目|め}を{避|さ}けながら{食物|しょくもつ}を{探|さが}し{歩|ある}いていたことを{物語|ものがた}っている。
（{朝倉|あさくら}{敏夫|としお}『{火|ひ}と{食|しょく}』による）
（{注|ちゅう}1）{類人猿|るいじんえん}：{生物学|せいぶつがく}{上|じょう}、{最|もっと}もヒトに{近|ちか}いサル{類|るい}
（{注|ちゅう}2）{符合|ふごう}する：{合|あ}う
（{注|ちゅう}3）{身重|みおも}：{妊娠中|にんしんちゅう}
（{注|ちゅう}4）サバンナ：{熱帯|ねったい}{地方|ちほう}に{見|み}られる{草原|そうげん}
（{注|ちゅう}5）{犬歯|けんし}：ここでは、{特|とく}に{鋭|するど}い{歯|は}`,
      arti: `Jika membandingkan cara berjalan empat kaki kera besar (catatan 1) dengan cara berjalan dua kaki manusia, pada kecepatan sekitar 4 km/jam, berjalan dua kaki lebih efisien energinya. Lagi pula, makin jauh berjalan, makin tinggi tingkat penghematan energinya. Artinya, manusia awal diduga mengadopsi berjalan tegak dengan dua kaki karena terdesak kebutuhan berjalan jarak jauh dengan kecepatan lambat. Hal ini persis cocok (catatan 2) dengan fakta bahwa manusia awal perlahan berusaha keluar dari hutan hujan tropis. Di luar hutan hujan tropis buah-buahan tersebar, sehingga perlu berkeliling mencari di wilayah luas. Ada kemungkinan berjalan dengan dua kaki menjadi menguntungkan sebagai cara berjalan yang memungkinkan hal ini.

Namun, kalau harus berjalan jauh, sulit bagi seluruh anggota kelompok untuk berpindah bersama-sama. Ada anggota yang sulit berjalan jauh dengan cepat, seperti anak-anak, perempuan hamil (catatan 3), dan orang tua. Karena itu, diperkirakan para pria yang kuat membentuk kelompok kecil, berkeliling luas mengumpulkan makanan, lalu membawanya pulang kepada perempuan dan anak-anak untuk dimakan bersama. Inilah hipotesis berbagi makanan. Tetapi, monyet-monyet yang keluar ke sabana (catatan 4) tidak menjadi berkaki dua. Mengapa hanya manusia? Sebab monyet patas, babun anubis, dan babun hamadryas yang keluar ke sabana, jantannya menjadi jauh lebih besar daripada betinanya dan mengembangkan taring (catatan 5) panjang untuk mempertahankan kelompok. Lagi pula, mereka yang pencernaannya kuat tidak perlu berkeliling mencari makanan seluas manusia. Sebaliknya, pada leluhur manusia, prianya bukannya membesar, perbedaan jenis kelaminnya malah kecil, dan taringnya pun mengecil sehingga tidak bisa dipakai sebagai senjata. Ini menunjukkan bahwa para pria manusia, alih-alih melawan hewan pemangsa, berjalan mencari makanan sambil menghindari pandangan mereka.
(Dari buku karya Asakura Toshio, "Api dan Makanan")
(Catatan 1) 類人猿: kera yang secara biologis paling dekat dengan manusia
(Catatan 2) 符合する: cocok
(Catatan 3) 身重: sedang hamil
(Catatan 4) サバンナ: padang rumput di daerah tropis
(Catatan 5) 犬歯: di sini, gigi yang sangat tajam (taring)`,
    },

    // ── 問題10：歴史学者と歴史小説家 ──
    "10": {
      yomi: `{以下|いか}は、{歴史|れきし}{学者|がくしゃ}について、{歴史|れきし}{小説家|しょうせつか}との{比較|ひかく}を{中心|ちゅうしん}に{書|か}かれた{文章|ぶんしょう}である。

{歴史学|れきしがく}では、{史実|しじつ}の{究明|きゅうめい}にもちろんのこと、{新|あたら}しい{歴史像|れきしぞう}を{提示|ていじ}する{時|とき}にも{史料|しりょう}（{注|ちゅう}1）{的|てき}{根拠|こんきょ}が{必要|ひつよう}です。そして、この{史料|しりょう}{的|てき}{根拠|こんきょ}を{基盤|きばん}とするがゆえに、{歴史|れきし}{学者|がくしゃ}の{歴史観|れきしかん}は、{相互|そうご}に{批判|ひはん}{可能|かのう}なものです。これは、{物理|ぶつり}や{化学|かがく}といった{自然|しぜん}{科学|かがく}の{世界|せかい}で{新|しん}{理論|りろん}を{展開|てんかい}する{場合|ばあい}に、その{論拠|ろんきょ}、{論理|ろんり}を{他|ほか}の{学者|がくしゃ}にも{検証|けんしょう}{可能|かのう}な{形|かたち}で{提示|ていじ}しなければならないことと{同様|どうよう}です。

しかし、{小説|しょうせつ}にこうした{論証|ろんしょう}を{求|もと}めるのは{無理|むり}というものです。{最近|さいきん}は{小説家|しょうせつか}に{歴史|れきし}{研究者|けんきゅうしゃ}{同様|どうよう}の{姿勢|しせい}を{求|もと}める{向|む}きもあるようですが、これは{筋違|すじちが}いとしか{思|おも}えません。やはり、{歴史|れきし}{研究|けんきゅう}と{歴史|れきし}{小説|しょうせつ}は、そもそも{目的|もくてき}も{手段|しゅだん}も{違|ちが}うものなのだとしか{言|い}いようがないのです。

また、あるいは、{次|つぎ}のような{話|はなし}が{参考|さんこう}になるでしょうか。

ある{時|とき}、{理学部|りがくぶ}の{天文学|てんもんがく}（{注|ちゅう}2）の{先生|せんせい}に、「どうして{彗星|すいせい}や{小惑星|しょうわくせい}などの{新|しん}{天体|てんたい}を{発見|はっけん}する{人|ひと}には、アマチュアの{天文学|てんもんがく}が{多|おお}いのですか」と{聞|き}いたことがありました。{新聞|しんぶん}でも{報|ほう}じられるような{天体|てんたい}{現象|げんしょう}の{発見|はっけん}に、{意外|いがい}と{専門|せんもん}{研究者|けんきゅうしゃ}が{少|すく}ないことが{気|き}になっていたからです。

するとその{天文学|てんもんがく}の{先生|せんせい}は、「{天文学|てんもんがく}の{先端|せんたん}では、{彗星|すいせい}などの{発見|はっけん}よりは、{大|おお}きな{電波|でんぱ}{望遠鏡|ぼうえんきょう}を{使|つか}って、ある{一定|いってい}の{方向|ほうこう}から{地球|ちきゅう}に{届|とど}く{宇宙|うちゅう}からの{電波|でんぱ}{情報|じょうほう}を{継続的|けいぞくてき}に{受|う}け{取|と}り、その{数値|すうち}の{分析|ぶんせき}によって{宇宙|うちゅう}の{大|おお}きさを{推測|すいそく}したり、{宇宙|うちゅう}の{成|な}り{立|た}ちを{究明|きゅうめい}したりしているのです」と{教|おし}えてくれました。

（{中略|ちゅうりゃく}）

{歴史|れきし}{学者|がくしゃ}と{歴史|れきし}{小説家|しょうせつか}の{違|ちが}いも、これに{近|ちか}いものがあります。{歴史|れきし}{小説家|しょうせつか}を{歴史|れきし}のアマチュアとするつもりはありませんが、{同|おな}じく{歴史|れきし}を{扱|あつか}いながらも、その{立|た}ち{位置|いち}は{違|ちが}うものだと{言|い}えるでしょう。

{歴史|れきし}{小説|しょうせつ}では、{誰|だれ}もがよく{知|し}っている{人物|じんぶつ}や{事件|じけん}をとりあげて{小説|しょうせつ}にすることが{多|おお}いようですが、{歴史|れきし}{研究|けんきゅう}ではむしろ{誰|だれ}も{知|し}らないような{人物|じんぶつ}や{事件|じけん}を{入|い}り{口|ぐち}として{史実|しじつ}を{究明|きゅうめい}することがほとんどです。また、{政争|せいそう}に{誰|だれ}がいかに{勝|か}ったかというような{政治|せいじ}のダイナミックな{人間|にんげん}の{動|うご}きよりは、{制度的|せいどてき}な{政治|せいじ}システムの{変遷|へんせん}を{追究|ついきゅう}する{方|ほう}が{研究|けんきゅう}{手法|しゅほう}としては{主流|しゅりゅう}です。そのため、{歴史|れきし}{学者|がくしゃ}が{世間|せけん}{一般|いっぱん}の{歴史|れきし}ファンを{驚|おどろ}かせるような{新説|しんせつ}を{立|た}てる、というようなことは、{稀|まれ}なこととなるのです。

もちろん、{天文学者|てんもんがくしゃ}であれば{研究|けんきゅう}{機関|きかん}に{属|ぞく}していようが{彗星|すいせい}に{無関心|むかんしん}でないのと{同様|どうよう}に、{歴史|れきし}{研究者|けんきゅうしゃ}もメジャーな{歴史|れきし}トピックに{関心|かんしん}がないわけではありません。しかし、{一見|いっけん}{地味|じみ}な{事例|じれい}{研究|けんきゅう}を{積|つ}み{重|かさ}ねることによって、それまでの{通説|つうせつ}を{修正|しゅうせい}する{新|あたら}しい{視点|してん}が{見|み}いだされていくことを、{研究者|けんきゅうしゃ}は{知|し}っているのです。つまり、{一足飛|いっそくと}びに（{注|ちゅう}3）{通説|つうせつ}を{覆|くつがえ}そうとして、{特定|とくてい}の{視点|してん}から{史料|しりょう}を{読|よ}むような{真似|まね}（{注|ちゅう}4）は{禁物|きんもつ}なのです。
（{山本|やまもと}{博文|ひろふみ}『{歴史|れきし}をつかむ{技法|ぎほう}』による）
（{注|ちゅう}1）{史料|しりょう}：{歴史|れきし}を{研究|けんきゅう}するための{文献|ぶんけん}や{遺物|いぶつ}
（{注|ちゅう}2）{天文学|てんもんがく}：{宇宙|うちゅう}と{天体|てんたい}について{研究|けんきゅう}する{学問|がくもん}
（{注|ちゅう}3）{一足飛|いっそくと}びに：ここでは、{手順|てじゅん}を{無視|むし}して{一気|いっき}に
（{注|ちゅう}4）{真似|まね}：ここでは、{行動|こうどう}`,
      arti: `Berikut ini adalah tulisan tentang sejarawan, terutama dibandingkan dengan novelis sejarah.

Dalam ilmu sejarah, dasar berupa sumber sejarah (catatan 1) diperlukan tidak hanya untuk mengungkap fakta sejarah, tetapi juga ketika mengajukan gambaran sejarah yang baru. Dan karena berlandaskan dasar sumber sejarah itulah, pandangan sejarah para sejarawan dapat saling dikritik. Ini sama seperti di dunia ilmu alam seperti fisika dan kimia, ketika mengembangkan teori baru, dasar dan logikanya harus diajukan dalam bentuk yang bisa diverifikasi ilmuwan lain.

Namun, menuntut pembuktian semacam itu dari novel adalah hal yang mustahil. Belakangan tampaknya ada pihak yang menuntut novelis bersikap seperti peneliti sejarah, tetapi itu hanya bisa saya anggap salah alamat. Memang, penelitian sejarah dan novel sejarah pada dasarnya berbeda tujuan maupun caranya, tidak bisa dikatakan lain.

Atau, mungkin cerita berikut bisa menjadi bahan pertimbangan.

Suatu kali saya bertanya kepada dosen astronomi (catatan 2) di fakultas sains, "Mengapa orang yang menemukan benda langit baru seperti komet dan asteroid kebanyakan astronom amatir?" Sebab saya penasaran mengapa ternyata sedikit peneliti profesional dalam penemuan fenomena benda langit yang sampai diberitakan di koran.

Lalu dosen astronomi itu memberi tahu saya, "Di garis depan astronomi, alih-alih menemukan komet dan sebagainya, kami menggunakan teleskop radio besar untuk terus-menerus menerima informasi gelombang radio dari luar angkasa yang tiba di bumi dari arah tertentu, lalu dengan menganalisis angka-angka itu kami memperkirakan besarnya alam semesta dan mengungkap asal-usul alam semesta."

(dipersingkat)

Perbedaan sejarawan dan novelis sejarah juga mirip dengan ini. Saya tidak bermaksud menyebut novelis sejarah sebagai amatir sejarah, tetapi bisa dikatakan bahwa meski sama-sama menangani sejarah, posisi mereka berbeda.

Dalam novel sejarah, tampaknya sering diangkat tokoh atau peristiwa yang dikenal semua orang, sedangkan dalam penelitian sejarah justru hampir selalu fakta sejarah diungkap dengan tokoh atau peristiwa yang tidak dikenal siapa pun sebagai pintu masuk. Selain itu, sebagai metode penelitian, menelusuri perubahan sistem politik kelembagaan lebih menjadi arus utama daripada gerak dinamis manusia dalam politik seperti siapa yang menang dalam perebutan kekuasaan dan bagaimana caranya. Karena itu, sejarawan jarang sekali mengajukan teori baru yang mengejutkan para penggemar sejarah di masyarakat umum.

Tentu saja, sama seperti astronom yang meski bekerja di lembaga penelitian bukan berarti tidak peduli pada komet, peneliti sejarah juga bukan berarti tidak tertarik pada topik sejarah populer. Namun, peneliti tahu bahwa dengan menumpuk studi kasus yang sekilas tampak membosankan, sudut pandang baru yang mengoreksi teori umum selama ini akan ditemukan. Artinya, tindakan (catatan 4) membaca sumber sejarah dari sudut pandang tertentu demi membalikkan teori umum dalam sekali lompat (catatan 3) adalah pantangan.
(Dari buku karya Yamamoto Hirofumi, "Teknik Memahami Sejarah")
(Catatan 1) 史料: dokumen dan peninggalan untuk meneliti sejarah
(Catatan 2) 天文学: ilmu yang meneliti alam semesta dan benda langit
(Catatan 3) 一足飛びに: di sini, sekaligus dengan mengabaikan prosedur
(Catatan 4) 真似: di sini, tindakan`,
    },

    // ── 問題11：若者の消費 ──
    "11": {
      yomi: `【{意見|いけん} A】
{現在|げんざい}の{若者|わかもの}{世代|せだい}は、「{車|くるま}{離|ばな}れ」などの{言葉|ことば}に{象徴|しょうちょう}されるように{消費|しょうひ}に{対|たい}して{消極的|しょうきょくてき}な{世代|せだい}だととらえられることが{多|おお}い。{高級車|こうきゅうしゃ}やブランド{品|ひん}などかつて{若者|わかもの}が{憧|あこが}れたものに{見向|みむ}きもしない{若者|わかもの}が{増加|ぞうか}しているという。{要因|よういん}の{一|ひと}つとしては、{収入|しゅうにゅう}が{少|すく}なく{未来|みらい}に{希望|きぼう}が{持|も}てないために{節約|せつやく}{志向|しこう}の{若者|わかもの}が{増|ふ}えていることがあると{言|い}われているが、{生|う}まれたときから{多|おお}くのものに{囲|かこ}まれて{育|そだ}ったおかげで、ものそのものに{対|たい}する{欲求|よっきゅう}が{低|ひく}いことも{挙|あ}げられよう。

とはいえ、そのような{若者|わかもの}たちも{全|まった}く{消費|しょうひ}しないわけではない。{彼|かれ}らは、{単|たん}なるものだけではなく、{人|ひと}とのつながりや{体験|たいけん}を{共有|きょうゆう}するためにお{金|かね}を{使|つか}うのである。

【{意見|いけん} B】
{若者|わかもの}の{消費|しょうひ}{実態|じったい}を{俯瞰|ふかん}（{注|ちゅう}1）すると、{今|いま}の{若者|わかもの}は、デフレや{流通|りゅうつう}{環境|かんきょう}の{進化|しんか}による{消費|しょうひ}{社会|しゃかい}の{成熟化|せいじゅくか}、{情報|じょうほう}{通信|つうしん}をはじめとする{技術|ぎじゅつ}{進化|しんか}の{恩恵|おんけい}を{受|う}けて、バブル{期|き}（{注|ちゅう}2）の{若者|わかもの}よりもお{金|かね}をかけずに{多様|たよう}な{商品|しょうひん}・サービスを{楽|たの}しめる{環境|かんきょう}にある。{安価|あんか}で{高|こう}{品質|ひんしつ}な{商品|しょうひん}・サービスがあふれ、{娯楽|ごらく}も{多様化|たようか}していることで、{選択|せんたく}できる{対象|たいしょう}も{増|ふ}えている。こういった{変化|へんか}によって、{今|いま}の{若者|わかもの}では{消費|しょうひ}に{対|たい}するモノサシがかわり、「クルマ」や「{高級|こうきゅう}ブランド{品|ひん}」といったバブル{期|き}の{若者|わかもの}が{欲|ほっ}していたものへの{興味|きょうみ}{関心|かんしん}が{相対的|そうたいてき}に{薄|うす}れているのだろう。

つまり、「{若者|わかもの}はお{金|かね}を{使|つか}わない」わけでなく、お{金|かね}を{使|つか}わなくて{済|す}むようになり、{価値観|かちかん}の{変化|へんか}により{欲|ほっ}するものが{変|か}わってきている。
（{久我|くが}{尚子|なおこ}『{若者|わかもの}は{本当|ほんとう}にお{金|かね}がないのか？―{統計|とうけい}データが{語|かた}る{意外|いがい}な{真実|しんじつ}』による）
（{注|ちゅう}1）{俯瞰|ふかん}する：ここでは、{全体|ぜんたい}を{見|み}る
（{注|ちゅう}2）バブル{期|き}：1980{年代|ねんだい}{後半|こうはん}から1990{年代|ねんだい}{初期|しょき}の、{日本|にほん}の{景気|けいき}が{非常|ひじょう}によかった{時期|じき}`,
      arti: `[Pendapat A]
Generasi muda saat ini sering dianggap sebagai generasi yang pasif dalam konsumsi, seperti dilambangkan oleh istilah "menjauh dari mobil". Katanya makin banyak anak muda yang sama sekali tidak melirik barang yang dulu didambakan anak muda, seperti mobil mewah dan barang bermerek. Salah satu penyebabnya disebut-sebut karena penghasilan kecil dan tidak punya harapan akan masa depan, sehingga anak muda yang cenderung berhemat bertambah; tetapi bisa juga disebutkan bahwa karena sejak lahir mereka tumbuh dikelilingi banyak barang, keinginan terhadap barang itu sendiri rendah.

Meski begitu, anak muda seperti itu bukan berarti sama sekali tidak berbelanja. Mereka menggunakan uang bukan hanya untuk barang semata, tetapi untuk berbagi hubungan dengan orang lain dan pengalaman.

[Pendapat B]
Jika melihat secara menyeluruh (catatan 1) kenyataan konsumsi anak muda, anak muda sekarang, berkat deflasi, matangnya masyarakat konsumsi karena kemajuan lingkungan distribusi, dan kemajuan teknologi termasuk teknologi informasi dan komunikasi, berada di lingkungan di mana mereka bisa menikmati beragam barang dan jasa tanpa mengeluarkan banyak uang dibandingkan anak muda di masa gelembung ekonomi (catatan 2). Barang dan jasa yang murah dan berkualitas tinggi melimpah, dan hiburan pun beragam, sehingga pilihan juga bertambah. Karena perubahan seperti ini, tolok ukur konsumsi anak muda sekarang berubah, dan minat terhadap barang yang diinginkan anak muda masa gelembung seperti "mobil" dan "barang bermerek mewah" mungkin secara relatif memudar.

Artinya, bukan berarti "anak muda tidak menggunakan uang", tetapi mereka kini tidak perlu menggunakan uang, dan karena perubahan nilai, apa yang mereka inginkan berubah.
(Dari buku karya Kuga Naoko, "Apakah Anak Muda Benar-benar Tidak Punya Uang? – kebenaran tak terduga dari data statistik")
(Catatan 1) 俯瞰する: di sini, melihat keseluruhan
(Catatan 2) バブル期: masa ketika ekonomi Jepang sangat baik, dari akhir 1980-an sampai awal 1990-an`,
    },

    // ── 問題12：山の風景画 ──
    "12": {
      yomi: `{山|やま}の{風景画|ふうけいが}は、{世|よ}の{中|なか}にいくらでもある。{日本画|にほんが}にしろ{洋画|ようが}にしろ、{古今東西|ここんとうざい}あまたの（{注|ちゅう}1）{画家|がか}たちが、その{題材|だいざい}に「{山|やま}」を{選|えら}んでいる。モチーフとしての{山|やま}の{意味|いみ}するものは{様々|さまざま}だろうが、{個人的|こじんてき}にはそれらに{興味|きょうみ}を{惹|ひ}かれることはなかった。なぜか。

{一般的|いっぱんてき}な{登山者|とざんしゃ}が{山|やま}を{眺|なが}めた{時|とき}の{感慨|かんがい}は、おおむね{似|に}かよっている。それは、{雄大|ゆうだい}さ、{峻厳|きび}しさ（{注|ちゅう}2）、あるいは{優|やさ}しさといったステレオタイプな{観点|かんてん}から{山|やま}を{賛美|さんび}し、その{風景|ふうけい}を{自分|じぶん}の{心|こころ}の{展示箱|てんじばこ}に{納|おさ}めて「いい{思|おも}い{出|で}」にしてしまう。そして、{山岳画|さんがくが}や{山岳|さんがく}{写真|しゃしん}の{作家|さっか}たちの{多|おお}くもまた、{似|に}たようなイメージを{印画紙|いんがし}やカンバスなどに{再現|さいげん}して、{狭|せま}い{市場|しじょう}の{中|なか}で{再|さい}{生産|せいさん}している{例|れい}が{少|すく}なくない。

だが、{山|やま}に{登|のぼ}る{者|もの}の{心|こころ}に{刻印|こくいん}（{注|ちゅう}3）される{山|やま}の{風景|ふうけい}は{本来|ほんらい}{限定的|げんていてき}なものではなく、{確定|かくてい}しえない{動的|どうてき}な{現象|げんしょう}として{記憶|きおく}されてもよいのではないだろうか。{見|み}る{者|もの}の{心|こころ}の{中|なか}で{定着|ていちゃく}される{山|やま}のイメージは、そしてその{表現|ひょうげん}は、もっと{多様|たよう}であるべきだろう。

つねに{転変|てんぺん}をくり{返|かえ}す「{海|うみ}」に{対|たい}して、{動|うご}かざるものの{象徴|しょうちょう}として、「{山|やま}」が{引|ひ}き{合|あ}いに{出|だ}されることもある。はたしてほんとうに{山|やま}は{動|うご}かないのか。（{中略|ちゅうりゃく}）

{一|いち}{登山者|とざんしゃ}としてこう{思|おも}う。{山|やま}は{動|うご}いていると。それは、{地殻|ちかく}（{注|ちゅう}4）{変動|へんどう}や{火山|かざん}の{噴火|ふんか}など{大|だい}{規模|きぼ}なものだけではない。{遠目|とおめ}には{同|おな}じように{見|み}えても、{風|かぜ}に{吹|ふ}かれて{砂塵|さじん}は{舞|ま}い、{山腹|さんぷく}を{覆|おお}う{植物|しょくぶつ}たちは{陽光|ようこう}を{浴|あ}びて{繁茂|はんも}し、{渓流|けいりゅう}はその{谷|たに}の{深|ふか}さを{日々|ひび}{深|ふか}く{削|けず}り、{刻一刻|こくいっこく}と{変化|へんか}しつづけている。そういった{微細|びさい}な{物理的|ぶつりてき}{変貌|へんぼう}、{小|ちい}さな{生命|せいめい}たちの{死滅|しめつ}と{再生|さいせい}が{瞬時|しゅんじ}も{止|と}まることのない{現場|げんば}が、「{山|やま}」なのである。

{都市|とし}の{風景|ふうけい}は{近代|きんだい}{以降|いこう}{多様|たよう}な{都市論|としろん}の{対象|たいしょう}となってきたが、{本来|ほんらい}、{多様性|たようせい}に{富|と}んでいるはずの{山|やま}という{場所|ばしょ}を{表現|ひょうげん}するイメージが、なぜこれほどまでに{単一的|たんいつてき}なのか。

それは、{山|やま}というつねに{転変|てんぺん}する{自然|しぜん}から、{都市部|としぶ}の{生活者|せいかつしゃ}の{生活|せいかつ}が{乖離|かいり}してしまったことに、{原因|げんいん}を{求|もと}めることができるかもしれない。{山|やま}の{変化|へんか}に{気|き}づくほど{観測|かんそく}していないから、その{変化|へんか}にも{気|き}づかない。

{何十年|なんじゅうねん}も{山|やま}で{暮|く}らしてきたような{画家|がか}でさえも、その{表現|ひょうげん}は{先述|せんじゅつ}した{域|いき}を{出|で}ることは{稀|まれ}だ。{思|おも}うに、そういった{者|もの}は{都市|とし}{生活者|せいかつしゃ}とは{反対|はんたい}に、{表現|ひょうげん}への{憧|あこが}れが{先|さき}にたち、{山|やま}の{実相|じっそう}（{注|ちゅう}5）を{表現|ひょうげん}しえていないのかもしれない。
（{志水|しみず}{哲也|てつや}{編|へん}『{山|やま}と{私|わたし}の{対話|たいわ}』による）
（{注|ちゅう}1）あまたの：{数多|かずおお}くの
（{注|ちゅう}2）{峻厳|きび}しさ：{厳|きび}しさ
（{注|ちゅう}3）{刻印|こくいん}する：ここでは、{刻|きざ}む
（{注|ちゅう}4）{地殻|ちかく}：{地球|ちきゅう}の{表層部|ひょうそうぶ}
（{注|ちゅう}5）{実相|じっそう}：{本当|ほんとう}の{姿|すがた}`,
      arti: `Lukisan pemandangan gunung ada di mana-mana. Baik lukisan Jepang maupun lukisan Barat, banyak sekali (catatan 1) pelukis dari zaman dulu hingga kini, dari Timur hingga Barat, yang memilih "gunung" sebagai tema. Makna gunung sebagai motif mungkin beragam, tetapi secara pribadi saya tidak pernah tertarik pada lukisan-lukisan itu. Mengapa?

Kesan pendaki biasa saat memandang gunung umumnya mirip-mirip. Mereka memuji gunung dari sudut pandang klise seperti kemegahan, kekerasan (catatan 2), atau kelembutannya, lalu menyimpan pemandangan itu di etalase hati mereka dan menjadikannya "kenangan indah". Dan tidak sedikit pula seniman lukisan gunung dan foto gunung yang mereproduksi citra serupa di kertas foto atau kanvas dan memproduksinya ulang di pasar yang sempit.

Namun, bukankah pemandangan gunung yang terukir (catatan 3) di hati pendaki pada dasarnya tidak terbatas, dan boleh saja diingat sebagai fenomena dinamis yang tak bisa dipastikan? Citra gunung yang melekat di hati orang yang melihatnya, dan ekspresinya, semestinya lebih beragam.

Berbeda dengan "laut" yang selalu berubah-ubah, "gunung" kadang dijadikan contoh sebagai lambang sesuatu yang tidak bergerak. Benarkah gunung tidak bergerak? (dipersingkat)

Sebagai seorang pendaki, saya berpikir begini: gunung itu bergerak. Bukan hanya hal berskala besar seperti pergeseran kerak bumi (catatan 4) atau letusan gunung berapi. Meski dari kejauhan tampak sama, debu pasir beterbangan ditiup angin, tumbuhan yang menutupi lereng tumbuh lebat bermandikan sinar matahari, aliran sungai di lembah setiap hari mengikis makin dalam, dan gunung terus berubah dari waktu ke waktu. Tempat di mana perubahan fisik yang halus semacam itu, kematian dan kelahiran kembali makhluk-makhluk kecil tak pernah berhenti sedetik pun, itulah "gunung".

Pemandangan kota sejak zaman modern telah menjadi objek beragam teori perkotaan, tetapi mengapa citra yang mengekspresikan gunung, tempat yang seharusnya kaya keragaman, begitu seragam?

Mungkin penyebabnya bisa dicari pada terpisahnya kehidupan penduduk kota dari alam bernama gunung yang selalu berubah. Karena mereka tidak mengamati gunung sampai bisa menyadari perubahannya, mereka pun tidak menyadari perubahan itu.

Bahkan pelukis yang sudah puluhan tahun tinggal di gunung pun jarang sekali ekspresinya keluar dari batas yang disebutkan tadi. Menurut saya, berlawanan dengan penduduk kota, orang-orang seperti itu lebih didahului oleh hasrat untuk berekspresi, sehingga mungkin tidak berhasil mengekspresikan wujud sejati (catatan 5) gunung.
(Dari buku suntingan Shimizu Tetsuya, "Dialog Gunung dan Saya")
(Catatan 1) あまたの: banyak sekali
(Catatan 2) 峻厳しさ: kekerasan, keketatan
(Catatan 3) 刻印する: di sini, mengukir
(Catatan 4) 地殻: lapisan permukaan bumi
(Catatan 5) 実相: wujud sebenarnya`,
    },

    // ── 問題13：東あさひ市立博物館 “友の会”入会案内 ──
    "13": {
      yomi: `“{友|とも}の{会|かい}”{会員|かいいん}になると

・{東|ひがし}あさひ{市立|しりつ}{博物館|はくぶつかん}の{常設展|じょうせつてん}や、{付属|ふぞく}の{東|ひがし}あさひ{市立|しりつ}{植物園|しょくぶつえん}に{何度|なんど}でも{無料|むりょう}で{入場|にゅうじょう}（{園|えん}）できます。
・{東|ひがし}あさひ{市立|しりつ}{博物館|はくぶつかん}では、{特別展|とくべつてん}を{年|ねん}{数回|すうかい}{開催|かいさい}します。{会員|かいいん}の{方|かた}は、{各|かく}{特別展|とくべつてん}につき1{回|かい}、{無料|むりょう}で{入場|にゅうじょう}できます。また、{同一|どういつ}の{特別展|とくべつてん}を2{回|かい}{以上|いじょう}ご{覧|らん}になる{際|さい}は、2{回目|かいめ}{以降|いこう}は{割引|わりびき}{料金|りょうきん}で{入場|にゅうじょう}できます。
・{館内|かんない}レストランでご{飲食|いんしょく}の{際|さい}に5％の{割引|わりびき}が{受|う}けられます。
・{館内|かんない}のショップで10％の{割引|わりびき}が{受|う}けられます。ただし、{書籍|しょせき}は{除|のぞ}きます。
・{東|ひがし}あさひ{市立|しりつ}{博物館|はくぶつかん}が{年|ねん}6{回|かい}、{毎|まい}{偶数|ぐうすう}{月|づき}に{発行|はっこう}する{情報誌|じょうほうし}を{無料|むりょう}でお{届|とど}けします。

{入会|にゅうかい}{方法|ほうほう}

{新規|しんき}{入会|にゅうかい}：{初|はじ}めて{入会|にゅうかい}する{場合|ばあい}（{以前|いぜん}{入会|にゅうかい}したことがある{方|かた}も、{会員証|かいいんしょう}の{有効|ゆうこう}{期間|きかん}が{終了|しゅうりょう}した{場合|ばあい}は、{再度|さいど}、{新規|しんき}{入会|にゅうかい}{手続|てつづ}きを{行|おこな}ってください。）
{継続|けいぞく}{入会|にゅうかい}：{会員証|かいいんしょう}の{有効|ゆうこう}{期間|きかん}{内|ない}に{手続|てつづ}きをする{場合|ばあい}

{新規|しんき}{入会|にゅうかい}、{継続|けいぞく}{入会|にゅうかい}ともに、{下記|かき}のいずれかの{方法|ほうほう}でお{申|もう}し{込|こ}みください。

（{窓口|まどぐち}）
{窓口|まどぐち}{備|そな}え{付|つ}けの{入会|にゅうかい}{申込書|もうしこみしょ}にご{記入|きにゅう}いただき、{年会費|ねんかいひ}お{支払|しはら}い{後|ご}、その{場|ば}で{会員証|かいいんしょう}を{発行|はっこう}いたします。

（{郵送|ゆうそう}）
{新規|しんき}{入会|にゅうかい}{申込書|もうしこみしょ}、または{継続|けいぞく}{入会|にゅうかい}{申込書|もうしこみしょ}を{本|ほん}ホームページからダウンロードし、{必要|ひつよう}{事項|じこう}をご{記入|きにゅう}の{上|うえ}、{下記|かき}{住所|じゅうしょ}にご{郵送|ゆうそう}ください。
{年会費|ねんかいひ}は、{郵便局|ゆうびんきょく}で「{払込|はらいこみ}{取扱票|とりあつかいひょう}」の{必要|ひつよう}{箇所|かしょ}にご{記入|きにゅう}の{上|うえ}、{下記|かき}の{口座|こうざ}、{加入者|かにゅうしゃ}{宛|あて}にご{送金|そうきん}ください。
お{申込書|もうしこみしょ}{内容|ないよう}とご{入金|にゅうきん}が{確認|かくにん}でき{次第|しだい}、{会員証|かいいんしょう}を{発行|はっこう}し、{送付|そうふ}いたします。{会員証|かいいんしょう}の{到着|とうちゃく}までには、ご{入金|にゅうきん}{後|ご}2{週間|しゅうかん}{程度|ていど}かかります。

{年会費|ねんかいひ}（1{年間|ねんかん}{有効|ゆうこう}）
{新規|しんき}{入会|にゅうかい}：10,000{円|えん}　{継続|けいぞく}{入会|にゅうかい}：8,500{円|えん}

お{問|と}い{合|あ}わせ{先|さき}：{電話|でんわ}：091-568-1153　Eメール　hakubutsukan@higashi-asahi.jp
{郵送|ゆうそう}{先|さき}：009-0364　{東|ひがし}あさひ{市|し}{中川|なかがわ}5-6-1　{東|ひがし}あさひ{市立|しりつ}{博物館|はくぶつかん}{友|とも}の{会|かい}{担当|たんとう}
{振込|ふりこみ}{先|さき}：{口座|こうざ}{番号|ばんごう}0501-11111　{加入者名|かにゅうしゃめい}：{東|ひがし}あさひ{市立|しりつ}{博物館|はくぶつかん}{友|とも}の{会|かい}`,
      arti: `Jika menjadi anggota "Tomo no Kai" (Perkumpulan Sahabat Museum)

- Bisa masuk gratis berkali-kali ke pameran tetap Museum Kota Higashi-Asahi dan Kebun Raya Kota Higashi-Asahi yang menjadi bagiannya.
- Museum Kota Higashi-Asahi mengadakan pameran khusus beberapa kali setahun. Anggota bisa masuk gratis satu kali untuk setiap pameran khusus. Jika melihat pameran khusus yang sama dua kali atau lebih, mulai kunjungan kedua bisa masuk dengan harga diskon.
- Mendapat diskon 5% saat makan dan minum di restoran dalam museum.
- Mendapat diskon 10% di toko dalam museum. Namun, buku tidak termasuk.
- Majalah informasi yang diterbitkan Museum Kota Higashi-Asahi 6 kali setahun, setiap bulan genap, dikirim secara gratis.

Cara mendaftar

Keanggotaan baru: jika mendaftar untuk pertama kali (bagi yang pernah menjadi anggota pun, jika masa berlaku kartu anggotanya sudah habis, silakan melakukan prosedur pendaftaran baru lagi.)
Perpanjangan keanggotaan: jika melakukan prosedur dalam masa berlaku kartu anggota

Baik pendaftaran baru maupun perpanjangan, silakan mendaftar dengan salah satu cara berikut.

(Loket)
Isi formulir pendaftaran yang tersedia di loket; setelah membayar iuran tahunan, kartu anggota langsung diterbitkan di tempat.

(Pos)
Unduh formulir pendaftaran baru atau formulir perpanjangan dari situs web ini, isi hal-hal yang diperlukan, lalu kirimkan lewat pos ke alamat di bawah.
Untuk iuran tahunan, isi bagian yang diperlukan pada "slip setoran" di kantor pos, lalu kirimkan ke rekening dan atas nama penerima di bawah.
Begitu isi formulir dan pembayaran terkonfirmasi, kartu anggota akan diterbitkan dan dikirimkan. Kartu anggota tiba sekitar 2 minggu setelah pembayaran.

Iuran tahunan (berlaku 1 tahun)
Keanggotaan baru: 10.000 yen; perpanjangan: 8.500 yen

Kontak: telepon 091-568-1153, email hakubutsukan@higashi-asahi.jp
Alamat pos: 009-0364, Nakagawa 5-6-1, Kota Higashi-Asahi, Bagian Tomo no Kai Museum Kota Higashi-Asahi
Rekening tujuan: nomor rekening 0501-11111, atas nama: Tomo no Kai Museum Kota Higashi-Asahi`,
    },
  },
};
