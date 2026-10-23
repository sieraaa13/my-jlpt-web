import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2016
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1607: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "この{寺|てら}の{周辺|しゅうへん}には【{樹木|じゅもく}】が{茂|しげ}っている。",
      arti: "Di sekitar kuil ini 【pepohonan】 tumbuh lebat.",
    },
    2: {
      yomi: "{将来|しょうらい}のために{様々|さまざま}な{知識|ちしき}を【{蓄|たくわ}えて】おきたい。",
      arti: "Saya ingin 【menimbun/mengumpulkan】 berbagai pengetahuan untuk masa depan.",
      optArti: ["membawa serta", "menyiapkan, memperlengkapi", "memeluk, memikul", "menimbun, menyimpan (蓄えて)"],
    },
    3: {
      yomi: "この{店|みせ}は{今月|こんげつ}から{商品|しょうひん}の【{陳列|ちんれつ}】の{仕方|しかた}を{変更|へんこう}した。",
      arti: "Mulai bulan ini toko ini mengubah cara 【memajang】 barang.",
    },
    4: {
      yomi: "{今日|きょう}の{舞台|ぶたい}は【{華|はな}やか】で、{観客|かんきゃく}を{大|おお}いに{楽|たの}しませた。",
      arti: "Pertunjukan hari ini 【semarak/gemerlap】 dan sangat menghibur penonton.",
      optArti: ["rukun, damai", "cerah, jelas", "semarak, gemerlap (華やか)", "ringan, lincah"],
    },
    5: {
      yomi: "{専門家|せんもんか}に【{鑑定|かんてい}】を{依頼|いらい}した。",
      arti: "Saya meminta 【penilaian/penaksiran】 kepada ahli.",
    },
    6: {
      yomi: "この{雑誌|ざっし}にある{情報|じょうほう}は{少|すこ}し【{偏|かたよ}って】いる。",
      arti: "Informasi di majalah ini agak 【berat sebelah】.",
      optArti: ["terpaku, bersikukuh", "keliru", "berbohong, memalsukan", "berat sebelah, condong (偏って)"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{今回|こんかい}の{事故|じこ}から{得|え}た（　）をもとに、{再発|さいはつ}を{防止|ぼうし}するための{対策|たいさく}を{立|た}てた。",
      arti: "Berdasarkan (…) yang didapat dari kecelakaan kali ini, kami menyusun langkah pencegahan agar tidak terulang.",
      optYomi: ["{触発|しょくはつ}", "{啓発|けいはつ}", "{教養|きょうよう}", "{教訓|きょうくん}"],
      optArti: ["pemicu, rangsangan", "pencerahan, penyadaran", "wawasan, budaya", "pelajaran (dari pengalaman)"],
    },
    8: {
      yomi: "{林|はやし}さんは{服|ふく}の（　）が{抜群|ばつぐん}で、いつもすてきな{服装|ふくそう}をしている。",
      arti: "Hayashi-san punya (…) berpakaian yang luar biasa, selalu berpakaian menarik.",
      optArti: ["selera, cita rasa", "waktu yang tepat", "langkah, tahap", "nuansa"],
    },
    9: {
      yomi: "A{社|しゃ}は、{開発|かいはつ}した{技術|ぎじゅつ}が（　）するのを{防|ふせ}ぐため、{管理|かんり}{体制|たいせい}を{強化|きょうか}した。",
      arti: "Perusahaan A memperkuat sistem pengelolaan untuk mencegah teknologi yang dikembangkannya (…).",
      optYomi: ["{展開|てんかい}", "{発散|はっさん}", "{流出|りゅうしゅつ}", "{転向|てんこう}"],
      optArti: ["berkembang, meluas", "melepaskan (energi/stres)", "bocor ke luar", "beralih haluan"],
    },
    10: {
      yomi: "どんな{苦難|くなん}に{直面|ちょくめん}しても、{最善|さいぜん}を（　）よう{努|つと}めている。",
      arti: "Menghadapi kesulitan apa pun, saya berusaha (…) yang terbaik.",
      optYomi: ["{遂|と}げる", "{尽|つ}くす", "{果|は}たす", "{極|きわ}める"],
      optArti: ["mencapai, menuntaskan", "mengerahkan (最善を尽くす)", "memenuhi (tugas)", "mendalami sampai puncak"],
    },
    11: {
      yomi: "{駅|えき}から{博物館|はくぶつかん}まではバスが（　）{出|で}ているので、ほとんど{待|ま}たずに{乗|の}ることができる。",
      arti: "Bus dari stasiun ke museum berangkat (…), jadi hampir tidak perlu menunggu.",
      optYomi: ["{頻繁|ひんぱん}に", "{緊密|きんみつ}に", "{活発|かっぱつ}に", "{円滑|えんかつ}に"],
      optArti: ["sering", "erat", "aktif", "lancar"],
    },
    12: {
      yomi: "{一日中|いちにちじゅう}{歩|ある}いて（　）{疲|つか}れたので、{今夜|こんや}はゆっくり{休|やす}みたい。",
      arti: "Seharian berjalan dan (…) lelah, jadi malam ini saya ingin istirahat.",
      optArti: ["segar, lega", "kering kerontang", "letih sekali", "penuh sesak"],
    },
    13: {
      yomi: "{母|はは}に{相談|そうだん}したかったが、{忙|いそが}しそうだったので、なかなか{話|はなし}を（　）ことができなかった。",
      arti: "Saya ingin berkonsultasi dengan ibu, tetapi ia tampak sibuk, jadi saya tidak kunjung bisa (…) pembicaraan.",
      optYomi: ["{押|お}し{込|こ}む", "{切|き}り{出|だ}す", "{割|わ}り{当|あ}てる", "{持|も}ち{上|あ}げる"],
      optArti: ["menjejalkan", "memulai/membuka (pembicaraan)", "membagikan (tugas)", "mengangkat; memuji"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "この{文|ぶん}は{主人公|しゅじんこう}の{心情|しんじょう}を【{端的|たんてき}に】{表|あらわ}している。",
      arti: "Kalimat ini menggambarkan perasaan tokoh utama 【secara lugas】.",
      optYomi: ["{明白|めいはく}に", "{部分的|ぶぶんてき}に", "{大|おお}げさに", "{主|おも}に"],
      optArti: ["dengan jelas", "sebagian", "berlebihan", "terutama"],
    },
    15: {
      yomi: "【わずらわしい】{作業|さぎょう}がやっと{終|お}わった。",
      arti: "Pekerjaan yang 【merepotkan】 akhirnya selesai.",
      optYomi: ["{苦手|にがて}な", "{面倒|めんどう}な", "{単調|たんちょう}な", "{膨大|ぼうだい}な"],
      optArti: ["tidak dikuasai", "merepotkan", "monoton", "sangat banyak"],
    },
    16: {
      yomi: "{私|わたし}は{小学校|しょうがっこう}の{同級生|どうきゅうせい}の{名前|なまえ}を【かろうじて】{思|おも}い{出|だ}した。",
      arti: "Saya 【nyaris tidak】 (akhirnya berhasil) mengingat nama teman sekelas SD.",
      optYomi: [null, "{何|なん}とか", null, null],
      optArti: ["entah mengapa", "entah bagaimana (berhasil juga)", "segera", "kebetulan"],
    },
    17: {
      yomi: "{彼|かれ}は【{自尊心|じそんしん}】を{取|と}り{戻|もど}した。",
      arti: "Ia memperoleh kembali 【harga dirinya】.",
      optArti: ["citra", "kendali", "gaya", "harga diri"],
    },
    18: {
      yomi: "これは{私|わたし}にとって【ささいな】{問題|もんだい}だ。",
      arti: "Ini masalah 【sepele】 bagi saya.",
      optYomi: ["{重要|じゅうよう}な", "{新|あら}たな", "{小|ちい}さな", "{深刻|しんこく}な"],
      optArti: ["penting", "baru", "kecil", "serius"],
    },
    19: {
      yomi: "{佐藤|さとう}さんは{少|すこ}し【とまどって】いるようだった。",
      arti: "Sato-san tampak sedikit 【bingung】.",
      optYomi: ["{困|こま}って", "{驚|おどろ}いて", "{怖|こわ}がって", "{悔|く}やんで"],
      optArti: ["bingung, kesulitan", "terkejut", "takut", "menyesal"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{規制|きせい}",
      arti: "規制 = pembatasan, regulasi (oleh aturan/pihak berwenang)",
      optYomi: [
        "{光熱費|こうねつひ}を{最小限|さいしょうげん}に{規制|きせい}して、{家計|かけい}の{負担|ふたん}を{減|へ}らしている。",
        "{今年|ことし}は{就職|しゅうしょく}{活動|かつどう}で{忙|いそが}しくなるので、アルバイトは{規制|きせい}するつもりだ。",
        "マラソン{大会|たいかい}{当日|とうじつ}は{交通|こうつう}が{規制|きせい}され、{一部|いちぶ}の{道路|どうろ}が{通行止|つうこうど}めになる。",
        "この{授業|じゅぎょう}は{少|しょう}{人数|にんずう}で{行|おこな}われるため、{受講|じゅこう}できる{学生数|がくせいすう}が{規制|きせい}されている。",
      ],
      optArti: [
        "Kami 'meregulasi' biaya listrik dan gas seminimal mungkin untuk mengurangi beban keuangan rumah tangga.",
        "Tahun ini saya akan sibuk mencari kerja, jadi saya berniat 'meregulasi' kerja sambilan.",
        "Pada hari maraton, lalu lintas 'dibatasi' dan sebagian jalan ditutup.",
        "Kelas ini diadakan dengan sedikit peserta, jadi jumlah mahasiswa yang bisa ikut 'diregulasi'.",
      ],
    },
    21: {
      yomi: "{入手|にゅうしゅ}",
      arti: "入手 = memperoleh, mendapatkan (barang/informasi)",
      optYomi: [
        "A{社|しゃ}は{今回|こんかい}の{不祥事|ふしょうじ}に{関|かん}して、{世間|せけん}から{多|おお}くの{批判|ひはん}を{入手|にゅうしゅ}した。",
        "{社会人|しゃかいじん}になって{初|はじ}めて{入手|にゅうしゅ}した{給料|きゅうりょう}で、{両親|りょうしん}に{贈|おく}り{物|もの}をした。",
        "{高橋氏|たかはしし}は{幼|おさな}いころから{音楽|おんがく}の{才能|さいのう}を{発揮|はっき}し、{数々|かずかず}の{賞|しょう}を{入手|にゅうしゅ}した。",
        "{海外|かいがい}に{留学|りゅうがく}する{際|さい}には、{現地|げんち}の{生活|せいかつ}に{役立|やくだ}つ{情報|じょうほう}を{入手|にゅうしゅ}しておくといい。",
      ],
      optArti: [
        "Terkait skandal kali ini, perusahaan A 'memperoleh' banyak kritik dari masyarakat.",
        "Dengan gaji pertama yang saya 'peroleh' setelah bekerja, saya memberi hadiah kepada orang tua.",
        "Takahashi menunjukkan bakat musik sejak kecil dan 'memperoleh' banyak penghargaan.",
        "Saat belajar ke luar negeri, sebaiknya 'memperoleh' dulu informasi yang berguna untuk kehidupan di sana.",
      ],
    },
    22: {
      yomi: "{素早|すばや}い",
      arti: "素早い = cepat, sigap (dalam bertindak/bereaksi)",
      optYomi: [
        "{警察|けいさつ}の{素早|すばや}い{対応|たいおう}によって、{逃走|とうそう}した{犯人|はんにん}はその{日|ひ}のうちに{逮捕|たいほ}された。",
        "{窓|まど}を{開|あ}けていたら{強|つよ}い{風|かぜ}が{吹|ふ}いて、{机|つくえ}の{上|うえ}の{紙|かみ}が{素早|すばや}く{飛|と}んでしまった。",
        "{鈴木|すずき}{教授|きょうじゅ}は{話|はな}し{方|かた}が{素早|すばや}いので、{講義|こうぎ}の{内容|ないよう}が{聞|き}き{取|と}れないことがある。",
        "{森氏|もりし}の{小説|しょうせつ}は{人気|にんき}があって、{新|あたら}しい{作品|さくひん}が{発売|はつばい}されると{素早|すばや}く{売|う}り{切|き}れてしまう。",
      ],
      optArti: [
        "Berkat penanganan polisi yang 'sigap', pelaku yang kabur ditangkap hari itu juga.",
        "Saat jendela terbuka, angin kencang bertiup dan kertas di meja terbang dengan 'sigap'.",
        "Cara bicara Profesor Suzuki 'sigap', jadi kadang isi kuliahnya tidak tertangkap.",
        "Novel Mori populer, begitu karya baru terbit langsung habis dengan 'sigap'.",
      ],
    },
    23: {
      yomi: "{経緯|けいい}",
      arti: "経緯 = kronologi, latar belakang jalannya peristiwa",
      optYomi: [
        "{今年|ことし}の{夏休|なつやす}みは、{毎日|まいにち}の{経緯|けいい}を{日記|にっき}に{書|か}いて{記録|きろく}に{残|のこ}すことにした。",
        "{社長|しゃちょう}は{今日|きょう}の{会議|かいぎ}で、A{社|しゃ}との{契約|けいやく}{問題|もんだい}が{解決|かいけつ}に{至|いた}った{経緯|けいい}を{説明|せつめい}した。",
        "この{語学|ごがく}{学校|がっこう}では、{初級|しょきゅう}と{中級|ちゅうきゅう}の{間|あいだ}に{初中級|しょちゅうきゅう}という{経緯|けいい}を{組|く}み{入|い}れている。",
        "{出張|しゅっちょう}でA{工場|こうじょう}を{訪|おとず}れ、{自動車|じどうしゃ}が{製造|せいぞう}される{経緯|けいい}を{視察|しさつ}した。",
      ],
      optArti: [
        "Liburan musim panas ini saya memutuskan mencatat 'kronologi' setiap hari di buku harian.",
        "Di rapat hari ini, direktur menjelaskan 'kronologi' hingga masalah kontrak dengan perusahaan A terselesaikan.",
        "Sekolah bahasa ini menyisipkan 'kronologi' bernama tingkat pra-menengah di antara tingkat dasar dan menengah.",
        "Dalam perjalanan dinas saya mengunjungi pabrik A dan meninjau 'kronologi' pembuatan mobil.",
      ],
    },
    24: {
      yomi: "{退|しりぞ}く",
      arti: "退く = mundur; turun/lengser (dari jabatan)",
      optYomi: [
        "{不規則|ふきそく}な{生活|せいかつ}を{退|しりぞ}いてから、{体調|たいちょう}がよくなってきたと{感|かん}じている。",
        "{佐藤氏|さとうし}は{社長|しゃちょう}の{地位|ちい}を{退|しりぞ}いた{後|あと}も、{会社|かいしゃ}への{影響力|えいきょうりょく}を{持|も}ちつづけた。",
        "{仕事|しごと}が{忙|いそが}しい{時期|じき}を{退|しりぞ}いたら、{休暇|きゅうか}を{取|と}って{家族|かぞく}と{旅行|りょこう}しようと{思|おも}っている。",
        "A{市|し}の{財政|ざいせい}は{一時|いちじ}の{危機的|ききてき}{状況|じょうきょう}を{退|しりぞ}いたが、いまだに{厳|きび}しい{運営|うんえい}が{続|つづ}いている。",
      ],
      optArti: [
        "Sejak 'mundur' dari kehidupan yang tidak teratur, saya merasa kondisi badan membaik.",
        "Sato tetap memiliki pengaruh di perusahaan bahkan setelah 'lengser' dari jabatan direktur.",
        "Setelah 'mundur' dari masa sibuk kerja, saya berniat cuti dan berwisata dengan keluarga.",
        "Keuangan kota A sudah 'mundur' dari situasi krisis sesaat, tetapi pengelolaannya masih ketat.",
      ],
    },
    25: {
      yomi: "{還元|かんげん}",
      arti: "還元 = mengembalikan (keuntungan, dsb.) kepada masyarakat/konsumen",
      optYomi: [
        "{林|はやし}{選手|せんしゅ}は、{連日|れんじつ}の{試合|しあい}で{消耗|しょうもう}した{体力|たいりょく}を{還元|かんげん}するため、しばらく{休養|きゅうよう}するそうだ。",
        "{参加|さんか}の{申|もう}し{込|こ}みを{取|と}り{消|け}した{場合|ばあい}、{事前|じぜん}に{支払|しはら}った{参加費|さんかひ}は{還元|かんげん}される。",
        "{一時|いちじ}{減少|げんしょう}した{車|くるま}の{生産|せいさん}{台数|だいすう}は、{今年|ことし}になって{徐々|じょじょ}に{還元|かんげん}してきた。",
        "A{社|しゃ}は、{会社|かいしゃ}が{得|え}た{利益|りえき}を{自然|しぜん}{保護|ほご}{活動|かつどう}を{通|つう}じて{社会|しゃかい}に{還元|かんげん}している。",
      ],
      optArti: [
        "Kabarnya Hayashi akan beristirahat sejenak untuk 'mengembalikan' stamina yang terkuras pertandingan beruntun.",
        "Jika membatalkan pendaftaran, biaya partisipasi yang sudah dibayar akan 'dikembalikan ke masyarakat'.",
        "Jumlah produksi mobil yang sempat menurun, tahun ini perlahan 'dikembalikan ke masyarakat'.",
        "Perusahaan A 'mengembalikan' keuntungan yang diperolehnya kepada masyarakat melalui kegiatan pelestarian alam.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "アナウンサー「{次|つぎ}の{試合|しあい}は{優勝|ゆうしょう}{候補|こうほ}{同士|どうし}の{対決|たいけつ}です。（　）どちらが{勝|か}つのでしょうか。」",
      arti: "Penyiar: \"Pertandingan berikutnya adalah duel antarkandidat juara. (…) siapa yang akan menang?\"",
      optArti: ["akhirnya", "masa sih, jangan-jangan", "sepertinya", "lantas, kira-kira (sungguh)"],
    },
    27: {
      yomi: "{相手|あいて}の{意見|いけん}に{対|たい}して、どんな{反論|はんろん}を（　）{自由|じゆう}だが、{自分|じぶん}の{考|かんが}えを{一方的|いっぽうてき}に{押|お}し{付|つ}けるのはよくないと{思|おも}う。",
      arti: "Terhadap pendapat lawan, (…) bantahan apa pun itu bebas, tetapi saya rasa memaksakan pendapat sendiri secara sepihak itu tidak baik.",
      optArti: ["selama sudah melakukan", "meskipun sambil melakukan", "mau melakukan (… apa pun)", "selama sedang melakukan"],
    },
    28: {
      yomi: "A{公園|こうえん}ではバーベキューや{釣|つ}りもできるので、{親子|おやこ}で{一日|いちにち}{楽|たの}しめる。{週末|しゅうまつ}（　）、いつも{朝|あさ}から{家族|かぞく}{連|づ}れでいっぱいだ。",
      arti: "Di Taman A bisa barbeku dan memancing, jadi orang tua dan anak bisa bersenang-senang seharian. (…) akhir pekan, selalu penuh keluarga sejak pagi.",
      optYomi: [null, "を{機|き}に", null, null],
      optArti: ["karena (pemberitahuan resmi)", "dengan kesempatan itu", "dengan (sebagai batas)", "kalau sudah (tiba) …"],
    },
    29: {
      yomi: "「このプロジェクトが{成功|せいこう}（　）、リーダーの{君|きみ}にかかっている。」と{課長|かちょう}に{言|い}われ、やる{気|き}が{高|たか}まった。",
      arti: "Kepala bagian berkata, \"Proyek ini (…) bergantung padamu sebagai pemimpin,\" dan semangat saya pun meningkat.",
      optArti: ["berhasil atau tidaknya", "entah berhasil entah tidak (dsb.)", "berhasil atau tidak, terserah", "bisa dibilang berhasil atau tidak"],
    },
    30: {
      yomi: "{昨日|きのう}{初|はじ}めてハンバーグを{作|つく}ったが、{家族|かぞく}にあまりおいしくないと{言|い}われてしまった。{今度|こんど}は{絶対|ぜったい}おいしく（　）。",
      arti: "Kemarin saya pertama kali membuat hamburger steak, tetapi keluarga bilang kurang enak. Lain kali saya pasti (…) enak.",
      optYomi: ["{作|つく}るものか", "{作|つく}る{始末|しまつ}だ", "{作|つく}ってみせる", "{作|つく}りつつある"],
      optArti: ["mana mau membuat", "sampai-sampai membuat (akhir buruk)", "akan saya buktikan bisa membuat", "sedang dalam proses membuat"],
    },
    31: {
      yomi: "このパソコンは{新品|しんぴん}だと10{万|まん}{円|えん}はするが、{中古|ちゅうこ}なら{高|たか}くても4、5{万|まん}{円|えん}（　）。",
      arti: "Komputer ini kalau baru seharga 100 ribu yen, tetapi kalau bekas, paling mahal (…) 40–50 ribu yen.",
      optYomi: ["に{上|のぼ}る", null, null, null],
      optArti: ["mencapai (jumlah besar)", "kira-kira sekitar", "bukankah tidak mungkin", "jauh dari, bukan saatnya"],
    },
    32: {
      yomi: "{数々|かずかず}の{名曲|めいきょく}を{生|う}み{出|だ}し、{天才|てんさい}{作曲家|さっきょくか}と{呼|よ}ばれる{山川氏|やまかわし}だが、{天才|てんさい}（　）{苦悩|くのう}もあったという。",
      arti: "Yamakawa melahirkan banyak lagu ternama dan disebut komponis jenius, tetapi konon ia juga mengalami penderitaan (…) jenius.",
      optYomi: [null, null, "とせざるを{得|え}ない", null],
      optArti: ["yang bisa dianggap", "yang seolah-olah", "terpaksa menganggap", "justru karena (ia) seorang"],
    },
    33: {
      yomi: "{今回|こんかい}の{市長|しちょう}{選挙|せんきょ}で、{川西氏|かわにしし}は、{福祉|ふくし}や{教育|きょういく}の{充実|じゅうじつ}を{訴|うった}えて{市民|しみん}の{心|こころ}を（　）、{支持|しじ}が{得|え}られず、{落選|らくせん}に{終|お}わった。",
      arti: "Dalam pemilihan wali kota kali ini, Kawanishi menyerukan peningkatan kesejahteraan dan pendidikan dan (…) hati warga, tetapi tidak mendapat dukungan dan akhirnya kalah.",
      optArti: ["meski berusaha meraih", "meski tidak sepenuhnya meraih", "hanya karena berusaha meraih", "hanya karena tidak sepenuhnya meraih"],
    },
    34: {
      yomi: "{弟|おとうと}は{就職|しゅうしょく}{活動|かつどう}がうまくいかず{大変|たいへん}そうだが、{私|わたし}が{代|か}わることもできないので、{自分|じぶん}の{力|ちから}で（　）。",
      arti: "Adik saya tampak kesulitan karena pencarian kerjanya tidak lancar, tetapi saya juga tidak bisa menggantikannya, jadi (…) dengan kekuatannya sendiri.",
      optYomi: ["{頑張|がんば}れるに{決|き}まっている", "{頑張|がんば}ってもらうしかない", "{頑張|がんば}れないこともない", "{頑張|がんば}ってしまうところがある"],
      optArti: ["pasti bisa berjuang", "tidak ada cara selain ia sendiri berjuang", "bukannya tidak bisa berjuang", "ada kecenderungan terlalu berjuang"],
    },
    35: {
      yomi: "（メールで）{風邪|かぜ}の{具合|ぐあい}はいかがですか。{今年|ことし}の{風邪|かぜ}は{長引|ながび}くみたいですから、どうぞお{気|き}をつけください。{一日|いちにち}も{早|はや}く{回復|かいふく}（　）。",
      arti: "(Lewat email) Bagaimana keadaan flu Anda? Sepertinya flu tahun ini berlangsung lama, jadi mohon berhati-hati. (…) pulih secepatnya.",
      optYomi: [null, "{願|ねが}ってはどうですか", null, null],
      optArti: ["semoga Anda (bisa)", "bagaimana kalau berdoa", "saya ingin melakukan", "apakah Anda sedang"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{町|まち}の{夏祭|なつまつ}りに{行|い}くときはいつも{一人|ひとり}だ。{一人|ひとり}で＿＿ ★ ＿＿ ＿＿{約束|やくそく}して{一緒|いっしょ}に{行|い}く{必要|ひつよう}もないからだ。",
      arti: "Saya selalu pergi sendirian ke festival musim panas di kota. Sebab meskipun pergi sendiri, saya pasti bertemu salah seorang teman, jadi tidak perlu janjian pergi bersama seseorang.",
      optYomi: ["{誰|だれ}かと", "{誰|だれ}かしら", "{行|い}っても", "{友達|ともだち}に{会|あ}うので"],
      optArti: ["dengan seseorang", "seseorang (entah siapa)", "meskipun pergi", "karena bertemu teman"],
    },
    37: {
      yomi: "{先月|せんげつ}{初|はじ}めて{出版|しゅっぱん}した{自分|じぶん}の{小説|しょうせつ}の{売|う}れ{行|ゆ}きが{気|き}になっているが、{友人|ゆうじん}の{前|まえ}では、そんなこと＿＿ ★ ＿＿ ＿＿{言|い}ってしまう。",
      arti: "Saya memikirkan penjualan novel pertama saya yang terbit bulan lalu, tetapi di depan teman, saya malah mengatakan hal yang bertentangan dengan isi hati, seperti \"hal begitu sih tidak masalah\".",
      optYomi: [null, null, null, "{本心|ほんしん}とは{違|ちが}うことを"],
      optArti: ["seperti (kutipan)", "terserah, bagaimana pun", "tidak masalah", "hal yang berbeda dengan isi hati"],
    },
    38: {
      yomi: "{授業|じゅぎょう}のレポートなどでインターネット{上|じょう}のデータを{使用|しよう}するときは、{情報|じょうほう}が{正|ただ}しい＿＿ ＿＿ ★ ＿＿も{重要|じゅうよう}である。",
      arti: "Saat memakai data dari internet untuk laporan kuliah dan sebagainya, penting tidak hanya memastikan apakah informasinya benar, tetapi juga mengecek kapan data itu dibuat.",
      optYomi: ["か{否|いな}か", "{確認|かくにん}すること", "いつのデータかを", null],
      optArti: ["apakah ... atau tidak", "memastikan", "data kapan itu", "tidak hanya"],
    },
    39: {
      yomi: "{部屋|へや}が{汚|きたな}いことを＿＿ ＿＿ ★ ＿＿、まだ{汚|きたな}いと{言|い}われた。",
      arti: "Saya ditegur orang tua soal kamar yang kotor, lalu merasa sudah membersihkannya sampai tidak bisa lebih bersih lagi, tetapi tetap dikatakan masih kotor.",
      optYomi: ["これ{以上|いじょう}", "{親|おや}に{注意|ちゅうい}されて", "きれいにしたつもりだったが", "きれいにしようがないくらい"],
      optArti: ["lebih dari ini", "ditegur orang tua", "merasa sudah membersihkan, tetapi", "sampai tidak bisa dibersihkan lagi"],
    },
    40: {
      yomi: "{政府|せいふ}は{景気|けいき}{回復|かいふく}のための{政策|せいさく}を{進|すす}めているが、{景気|けいき}が{回復|かいふく}してきている＿＿ ＿＿ ★ ＿＿{現状|げんじょう}である。",
      arti: "Pemerintah menjalankan kebijakan pemulihan ekonomi, tetapi kenyataannya masih banyak perusahaan yang belum sampai bisa merasakan bahwa ekonomi sedang pulih.",
      optYomi: ["{企業|きぎょう}もまだ{多|おお}い", "までに{至|いた}らない", "と{実感|じっかん}できる", null],
      optArti: ["perusahaan pun masih banyak", "belum sampai", "bisa merasakan bahwa", "bahwa (kenyataannya)"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{飛|と}び{出|だ}してくることもあった", "{飛|と}び{出|だ}してくるかもしれなかった", "{飛|と}び{出|だ}してきたほどだ", "{飛|と}び{出|だ}してきたのだろう"],
      optArti: ["kadang juga melompat keluar", "mungkin akan melompat keluar", "sampai-sampai melompat keluar", "mungkin karena itu ia melompat keluar"],
    },
    42: {
      optArti: ["meskipun ada, ya", "andai saja ada", "tak disangka ada", "padahal ada, sih"],
    },
    43: {
      optYomi: ["{彼女|かのじょ}", "{部下|ぶか}", "{私|わたし}", "あの{子|こ}"],
      optArti: ["dia (teman)", "bawahan", "saya", "anak itu"],
    },
    44: {
      optArti: ["lalu", "padahal, tetapi", "dengan begini", "bahkan sebaliknya"],
    },
    45: {
      optYomi: ["あの{若者|わかもの}だ", "あの{若者|わかもの}だからか", "あの{若者|わかもの}だそうだ", "あの{若者|わかもの}だと{思|おも}っていた"],
      optArti: ["pemuda itu", "mungkin karena pemuda itu", "katanya pemuda itu", "saya kira pemuda itu"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "このメールを{受|う}け{取|と}った{人|ひと}がしなければならないことは{何|なに}か。",
      arti: "Apa yang harus dilakukan orang yang menerima email ini?",
      optYomi: [
        "{副|ふく}{社長|しゃちょう}の{工場|こうじょう}{視察|しさつ}を8{月|がつ}9{日|か}に{変更|へんこう}し、{竹内|たけうち}さんとの{面談|めんだん}{日程|にってい}も{調整|ちょうせい}する。",
        "{副|ふく}{社長|しゃちょう}の{工場|こうじょう}{視察|しさつ}と{竹内|たけうち}さんとの{面談|めんだん}を8{月|がつ}10{日|か}{以降|いこう}で{再|さい}{調整|ちょうせい}する。",
        "{副|ふく}{社長|しゃちょう}の{工場|こうじょう}{視察|しさつ}の{日程|にってい}と{帰国|きこく}{日|び}が{変更|へんこう}になったことを{竹内|たけうち}さんに{連絡|れんらく}する。",
        "{副|ふく}{社長|しゃちょう}の{工場|こうじょう}{視察|しさつ}{後|ご}の{面談|めんだん}がキャンセルになったことを{竹内|たけうち}さんに{連絡|れんらく}する。",
      ],
      optArti: [
        "Mengubah kunjungan pabrik wakil direktur ke 9 Agustus dan juga menyesuaikan jadwal pertemuan dengan Takeuchi-san.",
        "Menjadwalkan ulang kunjungan pabrik wakil direktur dan pertemuan dengan Takeuchi-san ke 10 Agustus atau sesudahnya.",
        "Memberi tahu Takeuchi-san bahwa jadwal kunjungan pabrik dan tanggal pulang wakil direktur berubah.",
        "Memberi tahu Takeuchi-san bahwa pertemuan setelah kunjungan pabrik wakil direktur dibatalkan.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うものはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{怒|いか}りの{原因|げんいん}を{明|あき}らかにしたいなら、{怒|いか}りをごまかさないほうがいい。",
        "{怒|いか}りを{抑|おさ}えていると、ますます{怒|いか}りが{増|ま}してしまう。",
        "{自分|じぶん}が{間違|まちが}っていないと{思|おも}うなら、{怒|いか}りを{抑|おさ}えなくていい。",
        "{自分|じぶん}が{間違|まちが}っていると{気|き}づけば、{怒|いか}りは{長|なが}く{続|つづ}かない。",
      ],
      optArti: [
        "Jika ingin memperjelas penyebab kemarahan, sebaiknya jangan menutupi kemarahan.",
        "Jika kemarahan ditahan, kemarahan makin bertambah.",
        "Jika merasa diri tidak salah, kemarahan tidak perlu ditahan.",
        "Jika menyadari diri salah, kemarahan tidak berlangsung lama.",
      ],
    },
    48: {
      yomi: "{引|ひ}っ{越|こ}しについて、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang pindahan rumah?",
      optYomi: [
        "{不要|ふよう}なものを{捨|す}てる{機会|きかい}であり、{自分|じぶん}もそのための{引|ひ}っ{越|こ}しを{何度|なんど}もしている。",
        "{望|のぞ}むような{生活|せいかつ}をするためであり、{自分|じぶん}もいい{場所|ばしょ}があれば{引|ひ}っ{越|こ}しをしたい。",
        "{生活|せいかつ}を{一新|いっしん}する{機会|きかい}だが、{自分|じぶん}は{引|ひ}っ{越|こ}しをしてもそれを{活|い}かせていない。",
        "いい{面|めん}もあるが、{自分|じぶん}は{面倒|めんどう}であまり{引|ひ}っ{越|こ}しをしていない。",
      ],
      optArti: [
        "Itu kesempatan membuang barang tak perlu, dan ia sendiri sudah berkali-kali pindah untuk itu.",
        "Itu untuk menjalani hidup yang diinginkan, dan ia pun ingin pindah jika ada tempat bagus.",
        "Itu kesempatan memperbarui hidup, tetapi ia sendiri meski pindah tidak bisa memanfaatkannya.",
        "Ada sisi baiknya, tetapi ia merasa repot sehingga jarang pindah.",
      ],
    },
    49: {
      yomi: "{欲望|よくぼう}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang keinginan (hasrat)?",
      optYomi: [
        "{欲望|よくぼう}が{満|み}たされたため、{本当|ほんとう}に{必要|ひつよう}なものがわからなくなっている。",
        "{欲望|よくぼう}が{簡単|かんたん}に{満|み}たされるために、{日々|ひび}の{楽|たの}しみが{失|うしな}われている。",
        "{欲望|よくぼう}が{膨|ふく}らみすぎて、{欲望|よくぼう}を{満|み}たすことをあきらめるようになっている。",
        "{欲望|よくぼう}が{膨|ふく}らみすぎたため、{幸福|こうふく}が{感|かん}じられなくなっている。",
      ],
      optArti: [
        "Karena keinginan terpenuhi, kita tidak tahu lagi apa yang benar-benar diperlukan.",
        "Karena keinginan mudah terpenuhi, kesenangan sehari-hari hilang.",
        "Keinginan terlalu membengkak sehingga kita menyerah untuk memenuhinya.",
        "Karena keinginan terlalu membengkak, kita tidak bisa lagi merasakan kebahagiaan.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "「{帰|かえ}れるところがある」と{思|おも}っている{人|ひと}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang orang yang merasa \"ada tempat untuk pulang\"?",
      optYomi: [
        "{人生|じんせい}の{選択肢|せんたくし}に{迷|まよ}わない。",
        "{人生|じんせい}の{可能性|かのうせい}が{広|ひろ}がる。",
        "{自分|じぶん}に{自信|じしん}が{持|も}てる。",
        "{将来|しょうらい}に{不安|ふあん}を{感|かん}じない。",
      ],
      optArti: [
        "Tidak bimbang dalam pilihan hidup.",
        "Kemungkinan hidupnya meluas.",
        "Bisa percaya diri.",
        "Tidak merasa cemas akan masa depan.",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}は{親|おや}が{子|こ}どものためにどうすればよいと{考|かんが}えているか。",
      arti: "Menurut penulis, apa yang sebaiknya dilakukan orang tua untuk anaknya?",
      optYomi: [
        "いつでも{助|たす}けてあげられることを{伝|つた}える。",
        "「{人間|にんげん}は{弱|よわ}い」ということを{教|おし}える。",
        "{自立|じりつ}の{妨|さまた}げになることをしない。",
        "{将来|しょうらい}お{金|かね}に{困|こま}らないようにする。",
      ],
      optArti: [
        "Menyampaikan bahwa orang tua bisa membantu kapan saja.",
        "Mengajarkan bahwa \"manusia itu lemah\".",
        "Tidak melakukan hal yang menghambat kemandirian.",
        "Memastikan anak tidak kesulitan uang di masa depan.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}は、{家|いえ}はどのような{場|ば}であるべきだと{考|かんが}えているか。",
      arti: "Menurut penulis, rumah semestinya menjadi tempat seperti apa?",
      optYomi: [
        "{競争|きょうそう}に{勝|か}つためにさらに{自信|じしん}をつける{場|ば}",
        "{社会|しゃかい}で{自立|じりつ}するための{能力|のうりょく}を{身|み}につける{場|ば}",
        "どんなときでも、{穏|おだ}やかな{気持|きも}ちになれる{場|ば}",
        "つらくなったときでも、{活力|かつりょく}を{取|と}り{戻|もど}せる{場|ば}",
      ],
      optArti: [
        "Tempat untuk menambah rasa percaya diri agar menang bersaing",
        "Tempat untuk membekali kemampuan agar mandiri di masyarakat",
        "Tempat di mana kapan pun bisa merasa tenang",
        "Tempat di mana saat merasa berat pun bisa memulihkan tenaga",
      ],
    },
    53: {
      yomi: "①{生産性|せいさんせい}を{向上|こうじょう}させるとあるが、なぜか。",
      arti: "Tertulis \"① meningkatkan produktivitas\"; mengapa?",
      optYomi: [
        "{作業|さぎょう}{工程|こうてい}が{細分化|さいぶんか}されると、{一|ひと}つひとつの{作業|さぎょう}が{速|はや}くなるから",
        "{作業|さぎょう}{工程|こうてい}が{細分化|さいぶんか}されると、{職人|しょくにん}でなくてもできるから",
        "{一|いち}{工程|こうてい}であれば、{仕上|しあ}げられる{職人|しょくにん}の{数|かず}が{増|ふ}えるから",
        "{一|いち}{工程|こうてい}であれば、どんな{職人|しょくにん}でもできるから",
      ],
      optArti: [
        "Karena jika proses kerja dirinci, setiap pekerjaan menjadi lebih cepat",
        "Karena jika proses kerja dirinci, bukan perajin pun bisa melakukannya",
        "Karena jika hanya satu proses, jumlah perajin yang bisa menyelesaikannya bertambah",
        "Karena jika hanya satu proses, perajin mana pun bisa melakukannya",
      ],
    },
    54: {
      yomi: "②{同|おな}じ{分業|ぶんぎょう}の{網|あみ}の{目|め}に{属|ぞく}しているとは、どのようなことを{意味|いみ}しているか。",
      arti: "Apa arti \"② termasuk dalam jaring pembagian kerja yang sama\"?",
      optYomi: [
        "{一連|いちれん}の{作業|さぎょう}{工程|こうてい}の{中|なか}の{一|ひと}つの{役割|やくわり}を{担|にな}っているということ",
        "{作業|さぎょう}{工程|こうてい}が{細分化|さいぶんか}されて{分業|ぶんぎょう}{関係|かんけい}が{多様|たよう}であるということ",
        "{誰|だれ}もがどの{工程|こうてい}でもこなせる{状態|じょうたい}にあるということ",
        "{同|おな}じ{工程|こうてい}を{分担|ぶんたん}している{人|ひと}が{数多|かずおお}くいるということ",
      ],
      optArti: [
        "Memegang satu peran dalam rangkaian proses kerja",
        "Proses kerja dirinci sehingga hubungan pembagian kerja beragam",
        "Siapa pun berada dalam keadaan bisa mengerjakan proses mana pun",
        "Banyak orang yang berbagi proses yang sama",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}は{現代|げんだい}をどのような{時代|じだい}だと{考|かんが}えているか。",
      arti: "Menurut penulis, zaman sekarang itu zaman seperti apa?",
      optYomi: [
        "{世界|せかい}{全体|ぜんたい}に{熟練|じゅくれん}した{職人|しょくにん}の{技術|ぎじゅつ}が{広|ひろ}められている。",
        "{世界|せかい}{全体|ぜんたい}の{分業|ぶんぎょう}{関係|かんけい}で{経済|けいざい}が{成|な}り{立|た}っている。",
        "{世界中|せかいじゅう}で{工業|こうぎょう}{製品|せいひん}の{品質|ひんしつ}が{高|たか}くなっている。",
        "{世界|せかい}のすべての{国|くに}で{分業|ぶんぎょう}が{重視|じゅうし}されている。",
      ],
      optArti: [
        "Keterampilan perajin ahli tersebar ke seluruh dunia.",
        "Ekonomi berdiri di atas hubungan pembagian kerja seluruh dunia.",
        "Kualitas produk industri meningkat di seluruh dunia.",
        "Pembagian kerja diutamakan di semua negara di dunia.",
      ],
    },
    56: {
      yomi: "①{可能性|かのうせい}とはどのようなことか。",
      arti: "Apa yang dimaksud \"① kemungkinan\"?",
      optYomi: [
        "{普通|ふつう}の{人|ひと}のほうが、{丁寧|ていねい}に{取材|しゅざい}に{応|おう}じてくれること",
        "{普通|ふつう}の{人|ひと}の{実感|じっかん}に、{取材|しゅざい}すべきものを{見|み}いだせること",
        "{普通|ふつう}の{人|ひと}への{取材|しゅざい}では、{共感|きょうかん}できる{話|はなし}を{聞|き}けること",
        "{普通|ふつう}の{人|ひと}への{取材|しゅざい}のほうが、{幸福|こうふく}な{時間|じかん}に{感|かん}じられること",
      ],
      optArti: [
        "Orang biasa lebih sopan menanggapi wawancara",
        "Bisa menemukan hal yang layak diwawancarai dalam perasaan nyata orang biasa",
        "Dalam wawancara dengan orang biasa, bisa mendengar cerita yang bisa dirasakan bersama",
        "Wawancara dengan orang biasa terasa lebih membahagiakan",
      ],
    },
    57: {
      yomi: "②{有意義|ゆういぎ}な{取材|しゅざい}とはどのようなものだったか。",
      arti: "\"② Wawancara yang bermakna\" itu seperti apa?",
      optYomi: [
        "{普通|ふつう}の{人|ひと}から{時代|じだい}の{証言|しょうげん}になるような{話|はなし}を{聞|き}く。",
        "{普通|ふつう}の{人|ひと}から{数多|かずおお}くの{普通|ふつう}の{話|はなし}を{聞|き}く。",
        "{話題|わだい}の{人物|じんぶつ}から{日常|にちじょう}の{何|なに}げない{話|はなし}を{聞|き}く。",
        "{特別|とくべつ}な{人|ひと}から{特別|とくべつ}な{話|はなし}を{聞|き}く。",
      ],
      optArti: [
        "Mendengar dari orang biasa cerita yang menjadi kesaksian zaman.",
        "Mendengar banyak cerita biasa dari orang biasa.",
        "Mendengar cerita sehari-hari yang biasa dari tokoh yang sedang ramai dibicarakan.",
        "Mendengar cerita istimewa dari orang istimewa.",
      ],
    },
    58: {
      yomi: "{過去|かこ}は③「これだ」と{見|み}せられるようなものではないとあるが、なぜか。",
      arti: "Tertulis \"masa lalu bukan sesuatu yang bisa ditunjukkan ③ 'inilah dia'\"; mengapa?",
      optYomi: [
        "{過去|かこ}は{心|こころ}の{中|なか}で{形|かたち}を{変|か}えていくものだから",
        "{過去|かこ}はあまりに{多|おお}くの{出来事|できごと}を{含|ふく}んでいるから",
        "{過去|かこ}の{記録|きろく}は{過去|かこ}の{一部|いちぶ}でしかないから",
        "{過去|かこ}の{記憶|きおく}は{徐々|じょじょ}に{薄|うす}れていくものだから",
      ],
      optArti: [
        "Karena masa lalu berubah bentuk di dalam hati",
        "Karena masa lalu mengandung terlalu banyak peristiwa",
        "Karena catatan masa lalu hanyalah sebagian dari masa lalu",
        "Karena ingatan masa lalu perlahan memudar",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{知覚|ちかく}の{情報|じょうほう}{処理|しょり}と{感情|かんじょう}の{反応|はんのう}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang pemrosesan informasi persepsi dan reaksi emosi?",
      optYomi: [
        "いずれも{大|おお}きな{個人差|こじんさ}が{見|み}られる。",
        "いずれも{個人差|こじんさ}はあまり{見|み}られない。",
        "{知覚|ちかく}の{情報|じょうほう}{処理|しょり}のほうが{大|おお}きな{個人差|こじんさ}が{見|み}られる。",
        "{感情|かんじょう}の{反応|はんのう}のほうが{大|おお}きな{個人差|こじんさ}が{見|み}られる。",
      ],
      optArti: [
        "Keduanya menunjukkan perbedaan individu yang besar.",
        "Keduanya tidak banyak menunjukkan perbedaan individu.",
        "Pemrosesan informasi persepsi menunjukkan perbedaan individu yang lebih besar.",
        "Reaksi emosi menunjukkan perbedaan individu yang lebih besar.",
      ],
    },
    60: {
      yomi: "{近年|きんねん}、{感情|かんじょう}の{働|はたら}きはどのようなものだと{考|かんが}えられるようになったか。",
      arti: "Akhir-akhir ini, fungsi emosi dianggap seperti apa?",
      optYomi: [
        "{避|さ}けられない{状況|じょうきょう}を{受|う}け{入|い}れるためのもの",
        "{避|さ}けられない{状況|じょうきょう}において、{理性|りせい}を{保|たも}つためのもの",
        "{不確実|ふかくじつ}な{状況|じょうきょう}において、{判断|はんだん}して{決断|けつだん}するためのもの",
        "{不確実|ふかくじつ}な{状況|じょうきょう}において、{正解|せいかい}を{求|もと}めるためのもの",
      ],
      optArti: [
        "Sesuatu untuk menerima situasi yang tak terhindarkan",
        "Sesuatu untuk menjaga akal sehat dalam situasi yang tak terhindarkan",
        "Sesuatu untuk menilai dan memutuskan dalam situasi yang tidak pasti",
        "Sesuatu untuk mencari jawaban benar dalam situasi yang tidak pasti",
      ],
    },
    61: {
      yomi: "{個人差|こじんさ}が{生|しょう}じることがどのようなことにつながるか。",
      arti: "Timbulnya perbedaan individu mengarah pada apa?",
      optYomi: [
        "{人間|にんげん}という{生物種|せいぶつしゅ}の{存続|そんぞく}",
        "{人間|にんげん}と{他|た}の{生物種|せいぶつしゅ}との{共存|きょうぞん}",
        "{生死|せいし}にかかわるような{事態|じたい}の{減少|げんしょう}",
        "{環境|かんきょう}の{変化|へんか}に{対応|たいおう}できる{生物種|せいぶつしゅ}の{増加|ぞうか}",
      ],
      optArti: [
        "Kelangsungan spesies bernama manusia",
        "Hidup berdampingannya manusia dengan spesies lain",
        "Berkurangnya situasi yang menyangkut hidup-mati",
        "Bertambahnya spesies yang bisa beradaptasi dengan perubahan lingkungan",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{人々|ひとびと}が{生|い}きていくためには、{感情|かんじょう}の{個人差|こじんさ}を{敏感|びんかん}に{察知|さっち}すべきだ。",
        "{人々|ひとびと}が{生|い}きていく{上|うえ}では、{感情|かんじょう}の{反応|はんのう}の{個人差|こじんさ}を{受|う}け{入|い}れたほうがいい。",
        "{感情|かんじょう}の{反応|はんのう}に{個人差|こじんさ}があることこそが、{人間|にんげん}であることのあかしである。",
        "{感情|かんじょう}の{反応|はんのう}に{個人差|こじんさ}があることは、{人間|にんげん}を{取|と}り{巻|ま}く{環境|かんきょう}の{変化|へんか}によるものである。",
      ],
      optArti: [
        "Agar bisa hidup, orang harus peka menangkap perbedaan emosi individu.",
        "Dalam menjalani hidup, sebaiknya menerima perbedaan individu dalam reaksi emosi.",
        "Adanya perbedaan individu dalam reaksi emosi itulah bukti sebagai manusia.",
        "Adanya perbedaan individu dalam reaksi emosi disebabkan perubahan lingkungan di sekitar manusia.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{企業|きぎょう}の{問題点|もんだいてん}として、AとBが{共通|きょうつう}して{指摘|してき}している{点|てん}は{何|なに}か。",
      arti: "Sebagai masalah perusahaan, apa yang sama-sama ditunjukkan A dan B?",
      optYomi: [
        "{社内|しゃない}の{人間|にんげん}{関係|かんけい}が{悪|わる}いこと",
        "{社内|しゃない}で{無駄|むだ}な{会議|かいぎ}が{多|おお}すぎること",
        "{社内|しゃない}{会議|かいぎ}で{活発|かっぱつ}な{議論|ぎろん}が{行|おこな}われないこと",
        "{社内|しゃない}{会議|かいぎ}の{結論|けつろん}が{業績|ぎょうせき}{向上|こうじょう}に{結|むす}びつかないこと",
      ],
      optArti: [
        "Hubungan antarmanusia di perusahaan buruk",
        "Terlalu banyak rapat yang sia-sia di perusahaan",
        "Tidak ada diskusi yang aktif dalam rapat internal",
        "Kesimpulan rapat internal tidak berujung pada peningkatan kinerja",
      ],
    },
    64: {
      yomi: "{会議|かいぎ}でのリーダーの{姿勢|しせい}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang sikap pemimpin dalam rapat?",
      optYomi: [
        "AもBも、メンバーから{出|で}た{意見|いけん}をうまく{調整|ちょうせい}することが{重要|じゅうよう}だと{述|の}べている。",
        "AもBも、{自身|じしん}の{意見|いけん}は{控|ひか}えて、{質問|しつもん}でメンバーの{意見|いけん}を{引|ひ}き{出|だ}すことが{重要|じゅうよう}だと{述|の}べている。",
        "Aはメンバー{同士|どうし}で{話|はな}し{合|あ}うことが{重要|じゅうよう}だと{述|の}べ、Bは{自身|じしん}の{考|かんが}えを{示|しめ}してメンバーも{意見|いけん}を{求|もと}めるべきだと{述|の}べている。",
        "Aは{質問|しつもん}をしてメンバーの{意見|いけん}を{集|あつ}めるべきだと{述|の}べ、Bは{目標|もくひょう}を{明確|めいかく}に{示|しめ}して{議論|ぎろん}を{進|すす}めることが{重要|じゅうよう}だと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan pentingnya menyelaraskan dengan baik pendapat yang muncul dari anggota.",
        "A dan B sama-sama menyatakan pentingnya menahan pendapat sendiri dan menggali pendapat anggota lewat pertanyaan.",
        "A menyatakan pentingnya diskusi antaranggota; B menyatakan pemimpin harus menunjukkan pendapatnya dan juga meminta pendapat anggota.",
        "A menyatakan pemimpin harus bertanya untuk mengumpulkan pendapat anggota; B menyatakan pentingnya menunjukkan tujuan dengan jelas dan memajukan diskusi.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "①{編集者|へんしゅうしゃ}の{注文|ちゅうもん}とあるが、{編集者|へんしゅうしゃ}はなぜ{注文|ちゅうもん}したのか。",
      arti: "Tertulis \"① permintaan editor\"; mengapa editor meminta begitu?",
      optYomi: [
        "{読者|どくしゃ}が{科学|かがく}に{苦手|にがて}{意識|いしき}を{持|も}っていると{考|かんが}えているから",
        "{読者|どくしゃ}が{科学|かがく}の{専門的|せんもんてき}なことばを{理解|りかい}できないと{考|かんが}えているから",
        "{読者|どくしゃ}が{考|かんが}える{科学|かがく}と{暮|く}らしの{中|なか}の{科学|かがく}は{違|ちが}うと{考|かんが}えているから",
        "{読者|どくしゃ}が{持|も}っている{科学|かがく}のイメージがはっきりしないと{考|かんが}えているから",
      ],
      optArti: [
        "Karena ia menganggap pembaca merasa tidak cakap dalam sains",
        "Karena ia menganggap pembaca tidak bisa memahami istilah ilmiah",
        "Karena ia menganggap sains menurut pembaca berbeda dengan sains dalam kehidupan",
        "Karena ia menganggap citra sains yang dimiliki pembaca tidak jelas",
      ],
    },
    66: {
      yomi: "②「それを{使|つか}う{人|ひと}たち」について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang \"② orang-orang yang menggunakannya\"?",
      optYomi: [
        "{科学|かがく}{技術|ぎじゅつ}は{使|つか}っているうちに{理解|りかい}できると{思|おも}っている。",
        "{科学|かがく}{技術|ぎじゅつ}を{使|つか}ってはいるが、{理解|りかい}しているとは{言|い}えない。",
        "{科学|かがく}{技術|ぎじゅつ}を{理解|りかい}してはいるが、{使|つか}いこなせていない。",
        "{科学|かがく}{技術|ぎじゅつ}を{理解|りかい}しているつもりで{使|つか}っている。",
      ],
      optArti: [
        "Mereka mengira iptek akan dipahami sambil dipakai.",
        "Mereka memakai iptek, tetapi tidak bisa dikatakan memahaminya.",
        "Mereka memahami iptek, tetapi tidak menguasai pemakaiannya.",
        "Mereka memakai iptek dengan merasa sudah memahaminya.",
      ],
    },
    67: {
      yomi: "③そのしくみなどを{知|し}る{必要|ひつよう}はないと{考|かんが}えることの{問題点|もんだいてん}は{何|なに}か。",
      arti: "Apa masalahnya jika berpikir \"③ tidak perlu tahu mekanismenya\"?",
      optYomi: [
        "マニュアルがないと{製品|せいひん}が{使|つか}えないこと",
        "マニュアル{以外|いがい}の{使|つか}い{方|かた}ができなくなること",
        "{供給|きょうきゅう}する{側|がわ}の{伝|つた}えたい{情報|じょうほう}が{理解|りかい}できないこと",
        "{供給|きょうきゅう}する{側|がわ}に{都合|つごう}のいい{情報|じょうほう}しか{得|え}られないこと",
      ],
      optArti: [
        "Produk tidak bisa dipakai tanpa manual",
        "Tidak bisa memakai dengan cara selain yang ada di manual",
        "Tidak bisa memahami informasi yang ingin disampaikan pihak pemasok",
        "Hanya mendapat informasi yang menguntungkan pihak pemasok",
      ],
    },
    68: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{科学|かがく}{技術|ぎじゅつ}の{知識|ちしき}を{豊富|ほうふ}に{身|み}につけることが{大切|たいせつ}だ。",
        "{科学|かがく}{技術|ぎじゅつ}をマニュアルに{頼|たよ}らず{使|つか}いこなすことが{大切|たいせつ}だ。",
        "{科学|かがく}{技術|ぎじゅつ}を{取|と}り{入|い}れ、そのしくみを{知|し}ろうとすることが{大切|たいせつ}だ。",
        "{科学|かがく}{技術|ぎじゅつ}を{知|し}り、{生活|せいかつ}に{取|と}り{入|い}れるかどうかを{判断|はんだん}することが{大切|たいせつ}だ。",
      ],
      optArti: [
        "Penting membekali diri dengan banyak pengetahuan iptek.",
        "Penting menguasai iptek tanpa bergantung pada manual.",
        "Penting mengadopsi iptek dan berusaha mengetahui mekanismenya.",
        "Penting mengenal iptek dan menilai apakah akan memasukkannya ke dalam kehidupan.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{次|つぎ}の4{人|にん}は、{全員|ぜんいん}「{学生|がくせい}レポーター」に{応募|おうぼ}しようと{思|おも}っている。この{中|なか}で、「{学生|がくせい}レポーター」に{応募|おうぼ}できるのは{誰|だれ}か。",
      arti: "Keempat orang berikut semuanya ingin mendaftar sebagai \"reporter mahasiswa\". Siapa di antara mereka yang bisa mendaftar?",
      optArti: ["Kim-san", "Khan-san", "Hong-san", "Cruz-san"],
    },
    70: {
      yomi: "「{学生|がくせい}レポーター」に{応募|おうぼ}する{人|ひと}が、2017{年|ねん}2{月|がつ}24{日|か}（{金|きん}）までに{必|かなら}ずしなければならないことは{何|なに}か。",
      arti: "Apa yang wajib dilakukan pendaftar \"reporter mahasiswa\" paling lambat 24 Februari 2017 (Jumat)?",
      optYomi: [
        "{申込書|もうしこみしょ}、{志望|しぼう}{理由書|りゆうしょ}をメールで{提出|ていしゅつ}する。",
        "{申込書|もうしこみしょ}、{志望|しぼう}{理由書|りゆうしょ}を{持参|じさん}して{提出|ていしゅつ}する。",
        "{申込書|もうしこみしょ}、{志望|しぼう}{理由書|りゆうしょ}、{写真|しゃしん}をメールで{提出|ていしゅつ}する。",
        "{申込書|もうしこみしょ}、{志望|しぼう}{理由書|りゆうしょ}、{写真|しゃしん}を{持参|じさん}して{提出|ていしゅつ}する。",
      ],
      optArti: [
        "Menyerahkan formulir pendaftaran dan surat alasan melamar lewat email.",
        "Menyerahkan formulir pendaftaran dan surat alasan melamar secara langsung.",
        "Menyerahkan formulir pendaftaran, surat alasan melamar, dan foto lewat email.",
        "Menyerahkan formulir pendaftaran, surat alasan melamar, dan foto secara langsung.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：お好み焼き屋の若者 ──
    "7": {
      yomi: `{近|ちか}くの{商店街|しょうてんがい}を{歩|ある}いていたら、{新|あたら}しい{店|みせ}ができていた。お{好|この}み{焼|や}き{屋|や}のようだ。さりげなく{覗|のぞ}くと、{客|きゃく}はまばらで、しらじらとした{灯|あか}りがテーブルに{反射|はんしゃ}している。{一緒|いっしょ}にいた{友人|ゆうじん}と「{大丈夫|だいじょうぶ}なのかな、こういう{店|みせ}」などと{言|い}いながら{通|とお}り{過|す}ぎようとしたら、{突然|とつぜん}ドアが{開|ひら}いてエプロンをした{若者|わかもの}が{飛|と}び{出|だ}してきた。「よろしくお{願|ねが}いしますっ！」と{店|みせ}のカードを{差|さ}し{出|だ}す。{勢|いきお}いにのまれて{受|う}け{取|と}ると、ペこりと{一礼|いちれい}して{戻|もど}っていった。{店|みせ}を{覗|のぞ}いていた{私|わたし}たちに{気|き}がついて、{反射的|はんしゃてき}に{店|みせ}から[41]。

「やるねえ、あの{子|こ}」と{友人|ゆうじん}。{彼女|かのじょ}は{企業|きぎょう}の{管理職|かんりしょく}である。{理屈|りくつ}ばかりで{身体|からだ}が{動|うご}かない{若者|わかもの}が{多|おお}いとぼやく（{注|ちゅう}1）「ああいうのが{一人|ひとり}、{部下|ぶか}に[42]」と{言|い}った。「ほんとほんと」と{私|わたし}。

[43]だって{若|わか}いころは、{考|かんが}えることと{身体|からだ}が{動|うご}くことの{間|あいだ}に{時差|じさ}がなかった。{駆|か}け{出|だ}しの{編集者|へんしゅうしゃ}{時代|じだい}、ロケやスタジオ{撮影|さつえい}の{現場|げんば}では、{指示|しじ}されるより{先|さき}に{走|はし}りだしたものだ。——{友人|ゆうじん}に{向|む}かって{自画自賛|じがじさん}しながら、{頭|あたま}の{隅|すみ}で{思|おも}っていた。{本当|ほんとう}は{今|いま}だって、そうじゃなきゃマズイんじゃないか、と。

フリーランサー（{注|ちゅう}2）の{私|わたし}は、{一生|いっしょう}、{管理職|かんりしょく}になることはない。アルバイトか{店主|てんしゅ}かは{知|し}らないが、あの{若者|わかもの}と{同|おな}じ{立場|たちば}なのだ。[44]いつの{間|ま}にか、ひどく{腰|こし}が{重|おも}くなっている（{注|ちゅう}3）。

よし、{明日|あした}からは{臨戦|りんせん}{態勢|たいせい}（{注|ちゅう}4）でいくぞ。{見習|みなら}うべきは[45]。{思|おも}わずそう{力|りき}んで{苦笑|くしょう}した。しかし{気分|きぶん}は{悪|わる}くない。{若者|わかもの}よ、ありがとう。
（{日本|にほん}エッセイスト・クラブ{編|へん}『{散歩|さんぽ}とカツ{丼|どん}―10{年|ねん}{版|ばん}ベスト・エッセイ{集|しゅう}』による。）
（{注|ちゅう}1）ぼやく：{不満|ふまん}に{思|おも}っていることを{独|ひと}り{言|ごと}のように{言|い}う
（{注|ちゅう}2）フリーランサー：{組織|そしき}に{所属|しょぞく}せず{個人|こじん}で{仕事|しごと}をしている{人|ひと}
（{注|ちゅう}3）{腰|こし}が{重|おも}くなっている：{行動|こうどう}を{起|お}こすのが{遅|おそ}くなっている
（{注|ちゅう}4）{臨戦|りんせん}{態勢|たいせい}：ここでは、いつでも{動|うご}けるように{準備|じゅんび}ができている{状態|じょうたい}`,
      arti: `Saat berjalan di kawasan pertokoan dekat rumah, ada toko baru. Sepertinya restoran okonomiyaki. Ketika saya mengintip sekilas, pengunjungnya jarang, dan lampu yang pucat memantul di meja. Sambil berkata kepada teman yang bersama saya, "Apa tidak apa-apa ya, toko seperti ini," kami hendak lewat, tiba-tiba pintu terbuka dan seorang pemuda bercelemek melompat keluar. "Mohon dukungannya!" katanya sambil menyodorkan kartu toko. Terbawa semangatnya, kami menerimanya, lalu ia membungkuk sekali dan kembali masuk. [41] karena ia menyadari kami sedang mengintip toko, lalu secara refleks melompat keluar dari toko.

"Hebat juga anak itu," kata teman saya. Ia seorang manajer di perusahaan. Ia yang suka menggerutu (catatan 1) bahwa banyak anak muda yang hanya pandai berteori tetapi tidak bergerak, berkata, "Seandainya [42] satu saja yang seperti itu di antara bawahanku." "Betul, betul," kata saya.

[43] pun waktu muda tidak ada jeda antara berpikir dan bergerak. Semasa editor pemula, di lokasi syuting luar ruangan dan studio, saya sudah berlari sebelum diperintah. — Sambil memuji diri sendiri di depan teman, di sudut kepala saya berpikir: sebenarnya sekarang pun, kalau tidak begitu, bukankah gawat?

Saya yang seorang pekerja lepas (catatan 2) seumur hidup tidak akan menjadi manajer. Entah ia pekerja paruh waktu atau pemilik toko, posisi saya sama dengan pemuda itu. [44] entah sejak kapan, saya jadi sangat malas bergerak (catatan 3).

Baiklah, mulai besok saya akan siap siaga (catatan 4). Yang harus saya teladani adalah [45]. Tanpa sadar saya bersemangat begitu lalu tersenyum kecut. Tetapi perasaan saya tidak buruk. Wahai pemuda, terima kasih.
(Dari "Sanpo to Katsudon – kumpulan esai terbaik edisi 2010", suntingan Japan Essayist Club)
(Catatan 1) ぼやく: mengucapkan ketidakpuasan seperti bergumam sendiri
(Catatan 2) フリーランサー: orang yang bekerja secara pribadi tanpa terikat organisasi
(Catatan 3) 腰が重くなっている: menjadi lambat untuk bertindak
(Catatan 4) 臨戦態勢: di sini, keadaan siap bergerak kapan saja`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}の{海外|かいがい}{駐在員|ちゅうざいいん}が{受|う}け{取|と}ったメールである。

ムンバイ{工場|こうじょう}　{主任|しゅにん}
{高城|たかぎ}{洋二|ようじ}{様|さま}

お{世話|せわ}になっております。{本社|ほんしゃ}{秘書課|ひしょか}の{横山|よこやま}です。

{来月|らいげつ}の{副|ふく}{社長|しゃちょう}{出張|しゅっちょう}のスケジュールに{関|かん}して、{以下|いか}{変更|へんこう}のご{連絡|れんらく}です。

8{月|がつ}8{日|か}（{月|げつ}）にムンバイ{工場|こうじょう}{視察|しさつ}の{予定|よてい}でしたが、{本社|ほんしゃ}にて{会議|かいぎ}が{入|はい}り、{副|ふく}{社長|しゃちょう}のムンバイ{到着|とうちゃく}は9{日|か}（{火|か}）22{時|じ}となる{見込|みこ}みです。お{手数|てすう}をおかけしますが、{視察|しさつ}{日程|にってい}の{調整|ちょうせい}を{翌日|よくじつ}{以降|いこう}でお{願|ねが}いいたします。また{視察|しさつ}{後|ご}に{予定|よてい}していた、ムンバイ{日本|にほん}{商工会|しょうこうかい}{会長|かいちょう}の{竹内|たけうち}{様|さま}との{面談|めんだん}の{調整|ちょうせい}もお{願|ねが}いいたします。なお、ムンバイ{出発|しゅっぱつ}は8{月|がつ}12{日|にち}（{金|きん}）で{変更|へんこう}ありません。

{以上|いじょう}、よろしくお{願|ねが}いいたします。

{秘書課|ひしょか}
{横山|よこやま}{陽一|よういち}`,
      arti: `Berikut ini adalah email yang diterima seorang karyawan perusahaan yang ditugaskan di luar negeri.

Pabrik Mumbai, Kepala Seksi
Yth. Bapak Takagi Yoji

Terima kasih atas kerja samanya. Saya Yokoyama dari Bagian Sekretariat kantor pusat.

Berikut pemberitahuan perubahan jadwal perjalanan dinas wakil direktur bulan depan.

Semula dijadwalkan kunjungan ke Pabrik Mumbai pada 8 Agustus (Senin), tetapi ada rapat di kantor pusat, sehingga wakil direktur diperkirakan tiba di Mumbai pada tanggal 9 (Selasa) pukul 22.00. Mohon maaf merepotkan, mohon jadwal kunjungan disesuaikan ke hari berikutnya atau sesudahnya. Mohon juga disesuaikan jadwal pertemuan dengan Bapak Takeuchi, Ketua Kamar Dagang dan Industri Jepang di Mumbai, yang direncanakan setelah kunjungan. Adapun keberangkatan dari Mumbai tetap pada 12 Agustus (Jumat), tidak berubah.

Demikian, terima kasih atas perhatiannya.

Bagian Sekretariat
Yokoyama Yoichi`,
    },
    "8-2": {
      yomi: `「{自分|じぶん}は{間違|まちが}ってない」と{思|おも}うことから{始|はじ}まる{怒|いか}りは、{妥当|だとう}な{怒|いか}りです。{少|すこ}しも{後|うし}ろめたくありません。

むしろ、「{間違|まちが}ってない」と{思|おも}いながら{怒|いか}りをごまかしてしまったときのほうが{後味|あとあじ}は{悪|わる}いのです。「なんで{怒|おこ}らなかったんだろう」という{後悔|こうかい}は、{惨|みじ}めな{気持|きも}ちになって{長|なが}く{続|つづ}きます。

{怒|いか}りを{抑|おさ}えてばかりいると、この{惨|みじ}めな{気持|きも}ちにも{慣|な}れてしまいます。{敗北感|はいぼくかん}に{慣|な}らされてしまうのです。わたしはこれがいちばん{怖|こわ}いと{思|おも}っています。
（{和田|わだ}{秀樹|ひでき}『{腹|はら}が{立|た}ったら{怒|おこ}りなさい』による）`,
      arti: `Kemarahan yang berawal dari pikiran "aku tidak salah" adalah kemarahan yang wajar. Sama sekali tidak perlu merasa bersalah.

Justru, ketika kita menutupi kemarahan padahal merasa "tidak salah", rasanya lebih tidak enak sesudahnya. Penyesalan "kenapa aku tidak marah ya" berubah menjadi perasaan menyedihkan dan berlangsung lama.

Jika terus menahan kemarahan, kita pun jadi terbiasa dengan perasaan menyedihkan ini. Kita jadi terbiasa dengan rasa kalah. Menurut saya inilah yang paling menakutkan.
(Dari buku karya Wada Hideki, "Kalau Kesal, Marahlah")`,
    },
    "8-3": {
      yomi: `{引|ひ}っ{越|こ}しというのは、{誰|だれ}にとっても{面倒|めんどう}だが、いい{面|めん}もあるだろう。すなわち、これまでの{生活|せいかつ}を{振|ふ}り{返|かえ}り、{今後|こんご}{望|のぞ}むような{生活|せいかつ}を{思|おも}い{描|えが}きながら、そのために{不要|ふよう}なものをどんどん{処分|しょぶん}する{機会|きかい}である、と。そういう{意味|いみ}では、{引|ひ}っ{越|こ}しは{日常|にちじょう}{生活|せいかつ}を{更生|こうせい}させるよいきっかけでもあるはずだ。

{私|わたし}はいつもそのきっかけを{活|い}かしたいと{思|おも}いながらも、なかなか{実行|じっこう}するに{至|いた}らない。むしろ{何十年|なんじゅうねん}も、まるで{亀|かめ}のごとく{重|おも}い{物|もの}を{背負|せお}いながら{転々|てんてん}としてきたわけである。
（マイク・モラスキー　{日本|にほん}{経済|けいざい}{新聞|しんぶん}2014{年|ねん}3{月|がつ}25{日|にち}{付|づけ}{夕刊|ゆうかん}による）`,
      arti: `Pindahan itu merepotkan bagi siapa pun, tetapi ada juga sisi baiknya. Yaitu, kesempatan untuk merenungkan kehidupan selama ini, membayangkan kehidupan yang diinginkan ke depan, dan untuk itu terus membuang barang yang tidak perlu. Dalam arti itu, pindahan seharusnya juga menjadi pemicu yang baik untuk memperbarui kehidupan sehari-hari.

Saya selalu ingin memanfaatkan pemicu itu, tetapi tidak kunjung sampai melaksanakannya. Malah, selama puluhan tahun saya berpindah-pindah sambil memikul barang berat seperti kura-kura.
(Dari tulisan Mike Molasky, Nihon Keizai Shimbun edisi sore 25 Maret 2014)`,
    },
    "8-4": {
      yomi: `いま{人間|にんげん}の{欲望|よくぼう}がいろいろと{問題|もんだい}になっているのは、それが{余|あま}りにも{膨|ふく}らみすぎて、{欲望|よくぼう}の{充足|じゅうそく}それ{自体|じたい}が{目的|もくてき}と{化|か}し、{本来|ほんらい}の{意味|いみ}、つまり{私|わたし}たちの{必要|ひつよう}を{満|み}たし、{私|わたし}たちに{心身|しんしん}の{安定|あんてい}とやすらぎ（{幸福|こうふく}）をもたらす{範囲|はんい}を{遥|はる}かに{逸脱|いつだつ}してしまったことにある。

{私|わたし}たちの{多|おお}くはこの{過度|かど}に{肥大|ひだい}した{欲望|よくぼう}ゆえに、{日々|ひび}を{楽|たの}しく{過|すご}せるどころか、{絶|た}えざる{欲求|よっきゅう}{不満|ふまん}に{苛|さいな}まれるという{不幸|ふこう}な{状態|じょうたい}に{陥|おちい}っている。
（{鈴木|すずき}{孝夫|たかお}『{人|ひと}にはどれだけの{物|もの}が{必要|ひつよう}か―ミニマム{生活|せいかつ}のすすめ』による）`,
      arti: `Hasrat manusia kini menjadi berbagai masalah karena hasrat itu terlalu membengkak, pemenuhan hasrat itu sendiri menjadi tujuan, dan jauh menyimpang dari makna semestinya, yaitu batas yang memenuhi kebutuhan kita dan membawa ketenangan serta kedamaian lahir batin (kebahagiaan) bagi kita.

Banyak dari kita, karena hasrat yang membengkak berlebihan ini, bukannya bisa menjalani hari-hari dengan gembira, malah jatuh ke dalam keadaan malang yang terus disiksa rasa tidak puas.
(Dari buku karya Suzuki Takao, "Berapa Banyak Barang yang Diperlukan Manusia – anjuran hidup minimalis")`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `いつでも{帰|かえ}ってこられる{場所|ばしょ}があると{思|おも}っていられるのは、ずいぶんと{心強|こころづよ}いことだと{思|おも}うんです。{別|べつ}に{帰|かえ}ってこなくてもいい。「{帰|かえ}れるところがある」と{思|おも}っている{人|ひと}と、そんな{場所|ばしょ}がない{人|ひと}では、{人生|じんせい}の{選択肢|せんたくし}の{数|かず}が{違|ちが}う。{当|あ}たり{前|まえ}ですけれど、「{退路|たいろ}のある」{人|ひと}の{方|ほう}が{発想|はっそう}がずっと{自由|じゆう}になれる。ずっと{冒険的|ぼうけんてき}になれる。

{親子|おやこ}{関係|かんけい}も{同|おな}じじゃないかと{思|おも}います。10{年|ねん}ほど{前|まえ}に{高校|こうこう}を{卒業|そつぎょう}した{娘|むすめ}が{東京|とうきょう}へ{行|い}くときに、ぼくが{娘|むすめ}に{言|い}ったのは{二|ふた}つだけです。「{金|かね}なら{貸|か}すぞ」と「{困|こま}ったらいつでも{帰|かえ}っておいで」。{親|おや}が{子|こ}どもに{向|む}かって{言|い}ってあげられる{言葉|ことば}はこれに{尽|つ}きるん（{注|ちゅう}1）じゃないでしょうか。{泊|と}まるところがなかったら、いつだって{君|きみ}のためのご{飯|はん}とベッドは{用意|ようい}してあるよ。この{言葉|ことば}だけは{親|おや}はどんなことがあっても{意地|いじ}でも{言|い}い{続|つづ}けないといけないと{思|おも}うんです。「そんなに{甘|あま}やかすと{自立|じりつ}の{妨|さまた}げになる」と{苦言|くげん}を{言|い}う{人|ひと}もいますけれど、ぼくはそれは{違|ちが}うと{思|おも}う。

「{人間|にんげん}は{弱|よわ}い」というのがぼくの{人間観|にんげんかん}の{根本|こんぽん}なんです。だから、{最|さい}{優先|ゆうせん}の{仕事|しごと}はどうやってその{弱|よわ}い{人間|にんげん}を{慰|なぐさ}め、{癒|いや}し、{支援|しえん}する{場|ば}を{安定的|あんていてき}に{確保|かくほ}するか、です。（{中略|ちゅうりゃく}）{家|いえ}は、メンバーのポテンシャル（{注|ちゅう}2）を{高|たか}めたり、{競争|きょうそう}に{勝|か}つために{鍛|きた}えたりするための{場|ば}じゃない。そういう{機会|きかい}なら{家|いえ}の{外|そと}にいくらでもある。{家|いえ}というのは、{外|そと}に{出|で}て、{傷|きず}つき、{力尽|ちからつ}き、{壊|こわ}れてしまったメンバーがその{傷|きず}を{癒|いや}して、また{外|そと}へ{出|で}て{行|い}く{元気|げんき}を{回復|かいふく}するための{備|そな}えの{場|ば}であるべきだとぼくは{思|おも}っています。
（{内田|うちだ}{樹|たつる}『ぼくの{住|す}まい{論|ろん}』による）
（{注|ちゅう}1）これに{尽|つ}きる：これしかない
（{注|ちゅう}2）ポテンシャル：ここでは、{可能性|かのうせい}`,
      arti: `Bisa merasa bahwa ada tempat yang bisa kita datangi kembali kapan saja, menurut saya sangat menenangkan hati. Tidak harus benar-benar pulang. Orang yang merasa "ada tempat untuk pulang" dan orang yang tidak punya tempat seperti itu berbeda jumlah pilihan hidupnya. Sudah pasti, orang yang "punya jalan mundur" bisa berpikir jauh lebih bebas. Bisa jauh lebih berani bertualang.

Saya rasa hubungan orang tua dan anak juga sama. Sekitar 10 tahun lalu, ketika putri saya yang baru lulus SMA pergi ke Tokyo, yang saya katakan kepadanya hanya dua: "Kalau soal uang, Ayah pinjamkan" dan "Kalau kesulitan, pulanglah kapan saja." Bukankah kata-kata yang bisa diucapkan orang tua kepada anak hanya itu (catatan 1)? Kalau tidak punya tempat menginap, kapan pun makanan dan tempat tidur untukmu sudah disiapkan. Saya pikir, kata-kata ini saja harus terus diucapkan orang tua dengan gigih apa pun yang terjadi. Ada orang yang mengkritik, "Memanjakan sampai begitu akan menghambat kemandirian," tetapi saya rasa itu keliru.

"Manusia itu lemah" adalah dasar pandangan saya tentang manusia. Karena itu, tugas yang paling diutamakan adalah bagaimana secara stabil menjamin tempat untuk menghibur, menyembuhkan, dan mendukung manusia yang lemah itu. (dipersingkat) Rumah bukan tempat untuk meningkatkan potensi (catatan 2) anggotanya atau menempa mereka agar menang dalam persaingan. Kesempatan seperti itu banyak sekali di luar rumah. Menurut saya, rumah semestinya menjadi tempat persiapan, di mana anggota yang keluar, terluka, kehabisan tenaga, dan hancur bisa menyembuhkan lukanya dan memulihkan semangat untuk keluar lagi.
(Dari buku karya Uchida Tatsuru, "Teori Hunian Saya")
(Catatan 1) これに尽きる: hanya itu
(Catatan 2) ポテンシャル: di sini, potensi`,
    },
    "9-2": {
      yomi: `{何|なん}であれ、{一個|いっこ}の{製品|せいひん}を{完璧|かんぺき}に{仕上|しあ}げるのに{要求|ようきゅう}される{技能|ぎのう}は、たいへんなものです。そんな{芸当|げいとう}（{注|ちゅう}1）が{可能|かのう}な{職人|しょくにん}の{数|かず}は{限|かぎ}られていることでしょう。{作|つく}り{出|だ}せる{製品|せいひん}の{数|かず}も、{自然|しぜん}と{限|かぎ}られてきます。ところが、{作業|さぎょう}{工程|こうてい}を{細分化|さいぶんか}してみますと、{個々|ここ}の{工程|こうてい}は{意外|いがい}に{単純|たんじゅん}だったりします。より{単純|たんじゅん}な、{一|ひと}つひとつの{工程|こうてい}であれば、きちんとこなせる{職人|しょくにん}の{数|かず}は、{製品|せいひん}をまるごと{作|つく}れる{職人|しょくにん}の{数|かず}に{比|くら}べて、ずっと{多|おお}くなるでしょう。また、{未|み}{熟練|じゅくれん}だった{職人|しょくにん}が{腕|うで}を{上|あ}げる（{注|ちゅう}2）のも、より{単純|たんじゅん}な{一|いち}{工程|こうてい}に{限定|げんてい}しての{話|はなし}であれば、ずっと{容易|ようい}です。{作業|さぎょう}の{細分化|さいぶんか}と{役割|やくわり}{分担|ぶんたん}、つまり{分業化|ぶんぎょうか}は、{確|たし}かに①{生産性|せいさんせい}を{向上|こうじょう}させるものなのです。

{一個|いっこ}の{経済|けいざい}に{属|ぞく}するということは、その{経済|けいざい}に{属|ぞく}する{他|ほか}の{人|ひと}たちと{分業|ぶんぎょう}{関係|かんけい}を{取|と}り{結|むす}ぶことを{意味|いみ}します。あなたの{仕事|しごと}も、{同|おな}じ{日本|にほん}に{住|す}んでいる{面識|めんしき}もない{誰|だれ}かの{仕事|しごと}も、②{同|おな}じ{分業|ぶんぎょう}の{網|あみ}の{目|め}に{属|ぞく}しているのです。{今|いま}では{分業|ぶんぎょう}{関係|かんけい}は{世界|せかい}{全体|ぜんたい}に{広|ひろ}がっていますから、あなたがした{仕事|しごと}が、{地球|ちきゅう}の{裏側|うらがわ}にいる{誰|だれ}かのした{仕事|しごと}と{組|く}み{合|あ}わさっているということも、ざらにあります。そして、{分業|ぶんぎょう}の{網|あみ}の{目|め}が{全|ぜん}{世界|せかい}に{広|ひろ}がり、たとえば{一個|いっこ}の{工業|こうぎょう}{製品|せいひん}を{生産|せいさん}するために、{構想|こうそう}からデザイン、{原型|げんけい}の{製作|せいさく}、{部品|ぶひん}の{製造|せいぞう}、{組|く}み{立|た}てといったさまざまな{作業|さぎょう}が{全|ぜん}{世界|せかい}に{広|ひろ}がっている{現代|げんだい}は、{確|たし}かに{人類|じんるい}{史上|しじょう}{最|もっと}も{豊|ゆた}かな{時代|じだい}なのです。
（{徳川|とくがわ}{家広|いえひろ}『{自分|じぶん}を{守|まも}る{経済学|けいざいがく}』による）
（{注|ちゅう}1）{芸当|げいとう}：{普通|ふつう}の{人|ひと}にはまねのできない{技|わざ}
（{注|ちゅう}2）{腕|うで}を{上|あ}げる：{技術|ぎじゅつ}を{上達|じょうたつ}させる`,
      arti: `Apa pun itu, keterampilan yang dituntut untuk menyelesaikan satu produk dengan sempurna sangatlah besar. Jumlah perajin yang mampu melakukan keahlian (catatan 1) seperti itu pasti terbatas. Jumlah produk yang bisa dibuat pun dengan sendirinya terbatas. Namun, jika proses kerja dirinci, ternyata setiap proses tak jarang cukup sederhana. Jika berupa proses satu per satu yang lebih sederhana, jumlah perajin yang bisa mengerjakannya dengan baik akan jauh lebih banyak dibanding perajin yang bisa membuat seluruh produk. Selain itu, bagi perajin yang belum terampil, meningkatkan keahlian (catatan 2) juga jauh lebih mudah jika terbatas pada satu proses yang lebih sederhana. Perincian pekerjaan dan pembagian peran, yaitu pembagian kerja, memang ① meningkatkan produktivitas.

Menjadi bagian dari satu perekonomian berarti menjalin hubungan pembagian kerja dengan orang lain yang termasuk dalam perekonomian itu. Pekerjaan Anda maupun pekerjaan seseorang yang tidak Anda kenal yang tinggal di Jepang yang sama, ② termasuk dalam jaring pembagian kerja yang sama. Kini hubungan pembagian kerja sudah meluas ke seluruh dunia, jadi tidak jarang pekerjaan yang Anda lakukan dipadukan dengan pekerjaan seseorang di sisi lain bumi. Dan zaman sekarang, ketika jaring pembagian kerja meluas ke seluruh dunia dan, misalnya, untuk memproduksi satu produk industri berbagai pekerjaan mulai dari konsep, desain, pembuatan purwarupa, pembuatan komponen, hingga perakitan tersebar di seluruh dunia, memang merupakan zaman paling makmur dalam sejarah manusia.
(Dari buku karya Tokugawa Iehiro, "Ilmu Ekonomi untuk Melindungi Diri")
(Catatan 1) 芸当: keahlian yang tak bisa ditiru orang biasa
(Catatan 2) 腕を上げる: meningkatkan keterampilan`,
    },
    "9-3": {
      yomi: `{以下|いか}は、{長年|ながねん}インタビューを{仕事|しごと}にしている{人|ひと}が{書|か}いた{文章|ぶんしょう}である。

{何|なに}かと{取材|しゅざい}しつくされたような{今|いま}の{時代|じだい}にも、{乗|の}った{電車|でんしゃ}で{横|よこ}に{座|すわ}った、ぐらいの{近|ちか}くにいる{普通|ふつう}の{人|ひと}たちの{辿|たど}った{過去|かこ}、{精神的|せいしんてき}な{道|みち}のりを{取材|しゅざい}することには①{可能性|かのうせい}が{残|のこ}されている。これは{幸福|こうふく}な{感触|かんしょく}だった。{普通|ふつう}の{人|ひと}に{対|たい}して、{話題|わだい}の{人物|じんぶつ}と{同|おな}じような{方法|ほうほう}でなるべく{丁寧|ていねい}に{話|はなし}をうかがってみたけれど（そのうちの{一|いち}{部分|ぶぶん}は、これはある{職業|しょくぎょう}における{普通|ふつう}の{人|ひと}たちへのインタビューとして、{昨年|さくねん}{発表|はっぴょう}した{拙著|せっちょ}『{善|よ}き{書店員|しょてんいん}』という{本|ほん}にまとめた）。{特殊|とくしゅ}な{人物|じんぶつ}の{発言|はつげん}よりむしろそんな{普通|ふつう}の{人|ひと}たちの{実感|じっかん}こそ、{数十年|すうじゅうねん}{後|ご}に{振|ふ}り{返|かえ}れば{時代|じだい}の{証言|しょうげん}にも{聞|き}こえるのではと{思|おも}うようになっていた。②{有意義|ゆういぎ}な{取材|しゅざい}が{開拓|かいたく}されきったような{空白|くうはく}の{時代|じだい}に、{特別|とくべつ}で{極端|きょくたん}な{物語|ものがたり}はもういいやという{状況|じょうきょう}で{隙間|すきま}を{見|み}つけようとして、そこら{辺|へん}にころんと{転|ころ}がっている{声|こえ}の{実|みの}りにたまたま{気|き}づかされたわけだ。

{過去|かこ}は、{文句|もんく}の{言|い}えない{形|かたち}で③「これだ」と{見|み}せられるようなものではない。{映像|えいぞう}などで{記録|きろく}されていてさえ、{人物|じんぶつ}の{内面|ないめん}で{起|お}きた{心|こころ}の{大|だい}{事件|じけん}みたいなものは{捉|とら}えられなかったりもする。{解釈|かいしゃく}は{変化|へんか}するから、{同|おな}じ{出来事|できごと}への{同|おな}じ{人物|じんぶつ}の{談話|だんわ}も{十年|じゅうねん}{前|まえ}と{今|いま}でかなり{異|こと}なることもよくあり、つまり{過去|かこ}は{人物|じんぶつ}の{内面|ないめん}で{揺|ゆ}れ{動|うご}き{続|つづ}けていて、{形|かたち}を{持|も}たない{怪物|かいぶつ}のようでもある。{過去|かこ}の{解釈|かいしゃく}は、{本人|ほんにん}が{切実|せつじつ}に{感|かん}じているからこそ{人生|じんせい}に{陰影|いんえい}を{与|あた}えるため、{主観|しゅかん}の{記憶|きおく}の{何|なに}が{真実|しんじつ}かさえも{重要|じゅうよう}ではない{場面|ばめん}がある。{有名|ゆうめい}{無名|むめい}を{問|と}わず、さまざまな{方|かた}に{取材|しゅざい}で{話|はなし}をうかがううちに、この{過去|かこ}という{確固|かっこ}たる{形|かたち}を{持|も}たず{動|うご}き{続|つづ}ける{怪物|かいぶつ}にこそ{人間|にんげん}は{振|ふ}り{回|まわ}されたり、あるいは{歩|ある}き{続|つづ}けていくための{滋養|じよう}（{注|ちゅう}）をもらったりするようだな、と{思|おも}うようになっていった。
（{木村|きむら}{俊介|しゅんすけ}『{暮|くら}しの{手帖|てちょう}』2014{年|ねん}6-7{月|がつ}{号|ごう}による）
（{注|ちゅう}）{滋養|じよう}：ここでは、{力|ちから}`,
      arti: `Berikut ini adalah tulisan seseorang yang sudah bertahun-tahun bekerja sebagai pewawancara.

Bahkan di zaman sekarang yang seakan sudah habis diliput dari segala sisi, ① masih tersisa kemungkinan untuk meliput masa lalu dan perjalanan batin orang-orang biasa yang ada di dekat kita, sedekat orang yang duduk di sebelah kita di kereta. Ini adalah perasaan yang membahagiakan. Saya mencoba mewawancarai orang biasa dengan cara yang sama seperti tokoh yang sedang ramai dibicarakan, sesopan mungkin (sebagian di antaranya saya rangkum dalam buku saya "Pegawai Toko Buku yang Baik", yang terbit tahun lalu, sebagai wawancara dengan orang-orang biasa dalam suatu profesi). Saya mulai berpikir bahwa justru perasaan nyata orang-orang biasa seperti itulah, bukan ucapan tokoh istimewa, yang kalau ditengok puluhan tahun kemudian akan terdengar sebagai kesaksian zaman. Di zaman kosong ketika ② wawancara yang bermakna seakan sudah habis digarap, dalam situasi "sudah cukup dengan kisah istimewa dan ekstrem", saya berusaha mencari celah, dan kebetulan disadarkan akan buah suara yang tergeletak begitu saja di sekitar kita.

Masa lalu bukan sesuatu yang bisa ditunjukkan dalam bentuk yang tak terbantahkan, ③ "inilah dia". Bahkan yang terekam dalam video pun, peristiwa besar di dalam batin seseorang kadang tidak tertangkap. Karena tafsiran berubah, cerita orang yang sama tentang peristiwa yang sama sering kali cukup berbeda antara sepuluh tahun lalu dan sekarang; artinya masa lalu terus bergoyang di dalam batin seseorang, seperti monster tanpa bentuk. Tafsiran masa lalu memberi bayang-bayang pada hidup justru karena orang itu merasakannya dengan sungguh-sungguh, sehingga ada saat-saat di mana bahkan bagian mana dari ingatan subjektif yang benar pun tidak penting. Sambil mendengar cerita dari berbagai orang, baik terkenal maupun tidak, saya mulai berpikir bahwa justru oleh monster bernama masa lalu yang tidak punya bentuk pasti dan terus bergerak inilah manusia diombang-ambingkan, atau justru mendapat nutrisi (catatan) untuk terus melangkah.
(Dari tulisan Kimura Shunsuke, majalah "Kurashi no Techo" edisi Juni–Juli 2014)
(Catatan) 滋養: di sini, kekuatan`,
    },

    // ── 問題10：感情の個人差 ──
    "10": {
      yomi: `{視覚|しかく}や{聴覚|ちょうかく}などの{情報|じょうほう}{処理|しょり}においては、{脳|のう}の{働|はたら}きの{個人差|こじんさ}は{比較的|ひかくてき}{少|すく}ない。{丸|まる}いものを{提示|ていじ}すれば、{脳|のう}はそれを{丸|まる}いものとして{認識|にんしき}する。{丸|まる}いものを{提示|ていじ}した{時|とき}に、それを「{丸|まる}」と{認識|にんしき}する{人|ひと}と「{三角|さんかく}」と{認識|にんしき}する{人|ひと}が{相|あい}{半|なか}ばする（{注|ちゅう}1）ということはあり{得|え}ない。{同様|どうよう}に、あるピッチの{音|おと}を{聴|き}いた{時|とき}に、その{情報|じょうほう}{処理|しょり}に{個人差|こじんさ}はあまり{見|み}られない。

その{一方|いっぽう}で、ある{事象|じしょう}に{対|たい}する{感情|かんじょう}の{反応|はんのう}においては、{個人|こじん}によるばらつきが{大|おお}きくなるのが{通例|つうれい}（{注|ちゅう}2）である。{同|おな}じものを{前|まえ}にしても、{全|すべ}ての{人|ひと}がそれを{好|す}きだと{感|かん}じたり、{逆|ぎゃく}に{全|すべ}ての{人|ひと}がそれを{嫌|きら}いだと{思|おも}うとは{限|かぎ}らない。ある{人|ひと}が{好|す}きだと{感|かん}じるものを、{別|べつ}の{人|ひと}が{嫌|きら}いだと{思|おも}うのはごく{普通|ふつう}のことである。{感情|かんじょう}においては、{脳|のう}の{反応|はんのう}に{大|おお}きな{個人差|こじんさ}が{見|み}られるのである。

そもそも、{感情|かんじょう}の{働|はたら}きとは{何|なん}であろうか？ひと{昔|むかし}{前|まえ}には、{感情|かんじょう}とはある{特定|とくてい}の{刺激|しげき}に{対|たい}する{類型的|るいけいてき}な（{注|ちゅう}3）{反応|はんのう}であると{考|かんが}えられてきた。{大脳|だいのう}{新|しん}{皮質|ひしつ}（{注|ちゅう}4）が{担|にな}っている{理性|りせい}の{働|はたら}きが{環境|かんきょう}の{変化|へんか}に{応|おう}じて{柔軟|じゅうなん}な{情報|じょうほう}{処理|しょり}を{行|おこな}うのに{対|たい}して、「{爬虫類|はちゅうるい}の{脳|のう}」とも{呼|よ}ばれる{古|ふる}い{脳|のう}の{部位|ぶい}が{重要|じゅうよう}な{役割|やくわり}を{担|にな}う{感情|かんじょう}は、{一定|いってい}の{決|き}まり{切|き}った{反応|はんのう}をするものと{思|おも}われていたのである。

しかし、{近年|きんねん}の{脳|のう}{科学|かがく}の{発達|はったつ}により、{感情|かんじょう}は、むしろ{生|い}きる{上|うえ}で{避|さ}けることのできない{不確実性|ふかくじつせい}に{対|たい}する{適応|てきおう}{戦略|せんりゃく}であることが{明|あき}らかになってきた。{理性|りせい}では{割|わ}り{切|き}れない、{結果|けっか}がどうなるかわからないような{生|なま}の{状況|じょうきょう}において、それでも{判断|はんだん}し、{決断|けつだん}することを{支|ささ}えるための{情報|じょうほう}{処理|しょり}のメカニズムとして、{感情|かんじょう}は{存在|そんざい}していると{考|かんが}えられるに{至|いた}ったのである。

（{中略|ちゅうりゃく}）

{感情|かんじょう}が{不確実性|ふかくじつせい}に{対|たい}する{適応|てきおう}であると{考|かんが}えると、その{反応|はんのう}において{個人差|こじんさ}が{生|しょう}じるのは{自然|しぜん}なことである。{不確実|ふかくじつ}な{状況|じょうきょう}の{下|もと}では、とるべき{選択肢|せんたくし}の「{正解|せいかい}」は{一|ひと}つとは{限|かぎ}らないからである。

さまざまな{人々|ひとびと}が{異|こと}なる{戦略|せんりゃく}をとり、{全体|ぜんたい}としてバラエティが{増|ま}したほうが、{人間|にんげん}という{生物種|せいぶつしゅ}{全体|ぜんたい}としては、むしろ{適応的|てきおうてき}である。{生死|せいし}にかかわるような{状況|じょうきょう}においては、たとえ、ある{選択|せんたく}をした{人|ひと}が{不幸|ふこう}にして{死|し}んでしまったとしても、{別|べつ}の{選択|せんたく}をした{人|ひと}が{生|い}きのびれば{生物種|せいぶつしゅ}としては{存続|そんぞく}できるからである。{全体|ぜんたい}が{同|おな}じ{選択肢|せんたくし}を{選|えら}んでしまっては、{環境|かんきょう}の{変化|へんか}や{予想|よそう}のできない{事態|じたい}に{対|たい}して{脆弱|ぜいじゃく}になって（{注|ちゅう}5）しまう。

{他人|たにん}が{異|こと}なる{感情|かんじょう}の{反応|はんのう}を{見|み}せることを{許容|きょよう}することの{倫理的|りんりてき}{基礎|きそ}は、まさにこの{点|てん}にある。{他人|たにん}が{自分|じぶん}と{異|こと}なる{感情|かんじょう}の{中|なか}にあることに{反発|はんぱつ}するのは{自然|しぜん}な{心|こころ}の{動|うご}きであるが、とらわれて（{注|ちゅう}6）はいけない。{自他|じた}の{差異|さい}に{対|たい}して{許容的|きょようてき}であることが、すぐれて{生命|せいめい}{哲学|てつがく}{上|じょう}の{原理|げんり}にかなっているのである。
（{茂木|もぎ}{健一郎|けんいちろう}『{疾走|しっそう}する{精神|せいしん}』による）
（{注|ちゅう}1）{相|あい}{半|なか}ばする：{同|おな}じくらいである
（{注|ちゅう}2）{通例|つうれい}：{一般的|いっぱんてき}
（{注|ちゅう}3）{類型的|るいけいてき}な：{型|かた}どおりの
（{注|ちゅう}4）{大脳|だいのう}{新|しん}{皮質|ひしつ}：{脳|のう}の{一|いち}{部分|ぶぶん}
（{注|ちゅう}5）{脆弱|ぜいじゃく}になる：もろくて{弱|よわ}くなる
（{注|ちゅう}6）とらわれる：ここでは、ある{考|かんが}えに{縛|しば}られる`,
      arti: `Dalam pemrosesan informasi seperti penglihatan dan pendengaran, perbedaan individu dalam kerja otak relatif kecil. Jika diperlihatkan benda bulat, otak mengenalinya sebagai benda bulat. Tidak mungkin ketika benda bulat diperlihatkan, orang yang mengenalinya sebagai "bulat" dan yang mengenalinya sebagai "segitiga" berimbang jumlahnya (catatan 1). Begitu pula ketika mendengar bunyi dengan nada tertentu, perbedaan individu dalam pemrosesan informasinya tidak banyak terlihat.

Sebaliknya, dalam reaksi emosi terhadap suatu peristiwa, umumnya (catatan 2) variasi antarindividu menjadi besar. Meski menghadapi hal yang sama, belum tentu semua orang merasa menyukainya, atau sebaliknya semua orang membencinya. Hal yang disukai seseorang dibenci orang lain adalah hal yang sangat biasa. Dalam emosi, terlihat perbedaan individu yang besar dalam reaksi otak.

Pada dasarnya, apa fungsi emosi? Dulu, emosi dianggap sebagai reaksi yang baku (catatan 3) terhadap rangsangan tertentu. Berbeda dengan fungsi akal yang diemban neokorteks serebral (catatan 4), yang memproses informasi secara luwes sesuai perubahan lingkungan, emosi, yang peran pentingnya diemban bagian otak lama yang juga disebut "otak reptil", dianggap memberi reaksi yang tetap dan sudah pasti.

Namun, berkat kemajuan ilmu otak belakangan ini, menjadi jelas bahwa emosi justru merupakan strategi adaptasi terhadap ketidakpastian yang tak bisa dihindari dalam hidup. Akhirnya emosi dianggap ada sebagai mekanisme pemrosesan informasi yang menopang kita untuk tetap menilai dan memutuskan dalam situasi kehidupan nyata yang tak bisa dipilah dengan akal dan tak diketahui hasilnya.

(dipersingkat)

Jika emosi dianggap sebagai adaptasi terhadap ketidakpastian, wajar jika timbul perbedaan individu dalam reaksinya. Sebab dalam situasi yang tidak pasti, "jawaban benar" dari pilihan yang harus diambil belum tentu hanya satu.

Jika berbagai orang mengambil strategi yang berbeda dan keragamannya bertambah secara keseluruhan, itu justru lebih adaptif bagi seluruh spesies bernama manusia. Dalam situasi yang menyangkut hidup-mati, sekalipun orang yang mengambil suatu pilihan malang dan mati, jika orang yang mengambil pilihan lain bertahan hidup, spesies itu bisa tetap lestari. Jika semua memilih pilihan yang sama, kita akan menjadi rapuh (catatan 5) terhadap perubahan lingkungan dan situasi tak terduga.

Dasar etis untuk menoleransi orang lain yang menunjukkan reaksi emosi berbeda terletak tepat pada hal ini. Menolak orang lain yang berada dalam emosi berbeda dari kita adalah gerak hati yang wajar, tetapi kita tidak boleh terbelenggu (catatan 6) olehnya. Bersikap toleran terhadap perbedaan diri dan orang lain sungguh sesuai dengan prinsip filsafat kehidupan.
(Dari buku karya Mogi Ken'ichiro, "Jiwa yang Berlari Kencang")
(Catatan 1) 相半ばする: kira-kira sama banyak
(Catatan 2) 通例: umum
(Catatan 3) 類型的な: sesuai pola baku
(Catatan 4) 大脳新皮質: salah satu bagian otak
(Catatan 5) 脆弱になる: menjadi rapuh dan lemah
(Catatan 6) とらわれる: di sini, terikat pada suatu pemikiran`,
    },

    // ── 問題11：会議とリーダー ──
    "11": {
      yomi: `【{意見|いけん} A】
{企業|きぎょう}のような{組織|そしき}では、{上下|じょうげ}{関係|かんけい}、{年齢|ねんれい}、{性別|せいべつ}などのさまざまな{要因|よういん}により、{普段|ふだん}からメンバー{全員|ぜんいん}がフラットに（{注|ちゅう}1）{話|はな}し{合|あ}える{雰囲気|ふんいき}がない{場合|ばあい}も{少|すく}なくありません。さらに、{会議|かいぎ}の{場|ば}になると、{誰|だれ}かに{対|たい}する{遠慮|えんりょ}や、ライバル{心|しん}などが{作用|さよう}して、メンバーからまったく{発言|はつげん}が{出|で}なかったり、{話|はなし}が{平行線|へいこうせん}のまますり{合|あ}わない、などといったことが{起|お}こってしまいます。

こうした{状況|じょうきょう}を{活性化|かっせいか}させて、メンバー{全員|ぜんいん}でアイデアを{出|だ}していくために{重要|じゅうよう}なのが、チームリーダーからメンバーへ{質問|しつもん}をすることです。

チームリーダーという{立場|たちば}になると、ついつい、{自分|じぶん}の{考|かんが}えや{答|こた}えを、メンバーに{提示|ていじ}してしまいがちですが、そうやって{出|で}た{結論|けつろん}は{得|え}てして（{注|ちゅう}2）{予定|よてい}{調和|ちょうわ}（{注|ちゅう}3）になりがちです。

チームで{創造的|そうぞうてき}なアイデアを{出|だ}していくためには、メンバーの{内側|うちがわ}にあるものを{引|ひ}き{出|だ}すことが{重要|じゅうよう}であり、そのきっかけを{与|あた}えるのが「{質問|しつもん}」なのです。
（{博報堂|はくほうどう}ブランドデザイン『チームのアイデア{力|りょく}。―アイデアが{出|で}るチームになるための5つのステップ』による）
（{注|ちゅう}1）フラットに：ここでは、{対等|たいとう}に
（{注|ちゅう}2）{得|え}てして：ともすれば
（{注|ちゅう}3）{予定|よてい}{調和|ちょうわ}：ここでは、{無難|ぶなん}なもの

【{意見|いけん} B】
{組織|そしき}の{活力|かつりょく}を{生|い}かすには、メンバー{同士|どうし}の{積極的|せっきょくてき}な{意見|いけん}{交換|こうかん}が{欠|か}かせない。しかし{再三|さいさん}{会議|かいぎ}は{行|おこな}われるものの、{役職|やくしょく}や{人間|にんげん}{関係|かんけい}を{気|き}にしすぎて{積極的|せっきょくてき}な{議論|ぎろん}にならず、{生産性|せいさんせい}がないという{声|こえ}も{聞|き}かれる。こうした{状況|じょうきょう}を{打開|だかい}するために、リーダーは{会議|かいぎ}でどうすべきか。

まずリーダーが{自身|じしん}の{明確|めいかく}なビジョンをメンバーに{提示|ていじ}し、それについて{広|ひろ}く{意見|いけん}を{求|もと}めることが{大切|たいせつ}だ。{目標|もくひょう}がはっきり{定|さだ}まっていて、それに{向|む}けて{具体的|ぐたいてき}{方策|ほうさく}を{練|ね}るという{議論|ぎろん}ならば、メンバーも{発言|はつげん}しやすい。また、さまざまな{方向性|ほうこうせい}の{意見|いけん}が{出|で}て{一|ひと}つの{結論|けつろん}へ{収束|しゅうそく}させられないという{非|ひ}{効率|こうりつ}な{事態|じたい}も{避|さ}けられる。リーダーは、{目指|めざ}すべき{方向|ほうこう}を{示|しめ}し、メンバーと{議論|ぎろん}を{深|ふか}めていける{場|ば}を{作|つく}ることが{重要|じゅうよう}だ。`,
      arti: `[Pendapat A]
Dalam organisasi seperti perusahaan, karena berbagai faktor seperti hierarki, usia, dan jenis kelamin, tidak jarang sehari-hari tidak ada suasana di mana semua anggota bisa berdiskusi secara setara (catatan 1). Terlebih lagi, dalam rapat, sungkan terhadap seseorang atau rasa persaingan ikut bekerja, sehingga terjadi hal-hal seperti anggota sama sekali tidak bicara, atau pembicaraan berjalan sejajar tanpa titik temu.

Yang penting untuk menghidupkan situasi seperti ini dan agar semua anggota memunculkan ide adalah ketua tim mengajukan pertanyaan kepada anggota.

Kalau sudah di posisi ketua tim, kita cenderung menyodorkan pendapat dan jawaban sendiri kepada anggota, tetapi kesimpulan yang lahir dengan cara itu sering kali (catatan 2) cenderung aman-aman saja (catatan 3).

Agar tim bisa memunculkan ide kreatif, penting untuk menggali apa yang ada di dalam diri anggota, dan yang memberi pemicu untuk itu adalah "pertanyaan".
(Dari buku Hakuhodo Brand Design tentang daya ide tim – 5 langkah menjadi tim yang memunculkan ide)
(Catatan 1) フラットに: di sini, secara setara
(Catatan 2) 得てして: sering kali, cenderung
(Catatan 3) 予定調和: di sini, sesuatu yang aman-aman saja

[Pendapat B]
Untuk memanfaatkan vitalitas organisasi, pertukaran pendapat yang aktif antaranggota tak terpisahkan. Namun, meski rapat diadakan berulang kali, terdengar keluhan bahwa karena terlalu memikirkan jabatan dan hubungan antarmanusia, diskusi tidak aktif dan tidak produktif. Untuk mengatasi situasi seperti ini, apa yang harus dilakukan pemimpin dalam rapat?

Pertama-tama, penting bagi pemimpin untuk menyodorkan visinya yang jelas kepada anggota dan meminta pendapat seluas-luasnya tentang visi itu. Jika tujuannya jelas dan diskusinya adalah merancang langkah konkret menuju tujuan itu, anggota pun mudah berbicara. Selain itu, situasi tidak efisien di mana pendapat dari berbagai arah muncul dan tidak bisa dikerucutkan menjadi satu kesimpulan juga bisa dihindari. Penting bagi pemimpin untuk menunjukkan arah yang dituju dan menciptakan tempat untuk memperdalam diskusi bersama anggota.`,
    },

    // ── 問題12：科学技術との付き合い方 ──
    "12": {
      yomi: `わたしは、{暮|く}らしや{家族|かぞく}の{中|なか}にある{科学|かがく}をテーマにして、{雑誌|ざっし}に{記事|きじ}を{書|か}くことがあります。{料理|りょうり}の{科学|かがく}、{生活|せいかつ}の{中|なか}にある{器具|きぐ}のしくみなどを{取|と}り{上|あ}げて、{科学|かがく}を{専門|せんもん}としない{人|ひと}たちにも{関心|かんしん}を{持|も}ってもらえるような{記事|きじ}づくりを{工夫|くふう}します。そんなとき①{編集者|へんしゅうしゃ}の{注文|ちゅうもん}はこうです。

「{一般|いっぱん}の{主婦|しゅふ}の{方|かた}にとってとっつきやすくする（{注|ちゅう}1）ために、{内容|ないよう}は{科学|かがく}のことであっても『{科学|かがく}』ということばは{使|つか}わないでください。『{科学|かがく}』と{聞|き}いただけで{引|ひ}いてしまう（そのページを{読|よ}むことをやめてしまう）{人|ひと}がけっこういますから」

これは、わたしにとってはむずかしい{注文|ちゅうもん}であることが{多|おお}いのですが、{編集者|へんしゅうしゃ}の{言|い}うことは、{一般|いっぱん}の{人|ひと}に{対|たい}する{情報|じょうほう}{発信|はっしん}の{心構|こころがま}えとして、{現|げん}{時点|じてん}では{適切|てきせつ}と{言|い}うほかありません。「{科学|かがく}」ということばを{使|つか}うか{否|いな}かが{大|おお}きな{問題|もんだい}なのではありません。{読者|どくしゃ}である「{一般|いっぱん}の{人|ひと}たち」も、{発信|はっしん}する{側|がわ}である「{編集者|へんしゅうしゃ}」も、{科学|かがく}に{対|たい}して{距離|きょり}を{感|かん}じているということであり、それは、{現在|げんざい}の「{科学|かがく}{技術|ぎじゅつ}」と②「それを{使|つか}う{人|ひと}たち」の{関係|かんけい}を{象徴|しょうちょう}しています。{作|つく}る{側|がわ}、{発信|はっしん}する{側|がわ}は、{当然|とうぜん}その{内容|ないよう}を{熟知|じゅくち}し{将来|しょうらい}の{方向性|ほうこうせい}を{提案|ていあん}しますが、それを{使|つか}う{側|がわ}の{人|ひと}は{与|あた}えられたものを{十分|じゅうぶん}に{理解|りかい}せず「{買|か}う」という{行動|こうどう}だけで{受|う}け{入|い}れていると{言|い}いかえられます。

（{中略|ちゅうりゃく}）

{技術|ぎじゅつ}、そして{科学|かがく}{技術|ぎじゅつ}は、その{時代|じだい}に{生|い}きている{人々|ひとびと}によって{求|もと}められ{発展|はってん}してきたものであるはずですから、わたしたちはそれらの{科学|かがく}{技術|ぎじゅつ}を{使|つか}う{主人公|しゅじんこう}です。しかし、はたしてわたしたちの{科学|かがく}{技術|ぎじゅつ}に{対|たい}する{理解|りかい}は、{科学|かがく}の{発展|はってん}とともに{進|すす}んでいるでしょうか……？

たとえば、あなたの{周|まわ}りで、「{科学|かがく}はむずかしいから」と{決|き}めつけて、{苦手|にがて}だと{思|おも}っている{人|ひと}はいませんか。あなた{自身|じしん}はどうでしょう。{科学的|かがくてき}{理論|りろん}と{実用化|じつようか}のレベルが{複雑|ふくざつ}で{高度|こうど}なために、{一握|ひとにぎ}りの{人|ひと}たちにしかわからないむずかしいものになってしまっているのは{事実|じじつ}です。

{専門家|せんもんか}や{技術者|ぎじゅつしゃ}が{作|つく}り{出|だ}したものを、マニュアルの{通|とお}りに{使|つか}うことさえできれば、③そのしくみなどを{知|し}る{必要|ひつよう}はない、という{人|ひと}もいるかもしれません。しかし、そのような{使|つか}い{方|かた}では、{供給|きょうきゅう}する{側|がわ}から{示|しめ}された{技術|ぎじゅつ}の「{良|よ}い{部分|ぶぶん}」しか{見|み}えません。{科学|かがく}{技術|ぎじゅつ}を{提供|ていきょう}する{側|がわ}からは「{良|よ}い{部分|ぶぶん}」しか{聞|き}かれないのだとしたら……。それらを{使|つか}う{主人公|しゅじんこう}であるわたしたちは、{与|あた}えられる{情報|じょうほう}だけではなく、{科学的|かがくてき}{背景|はいけい}やしくみを{少|すこ}しでも{知|し}った{上|うえ}で、{生活|せいかつ}の{中|なか}に{取|と}り{入|い}れるか、{取|と}り{入|い}れないのかを{判断|はんだん}することが{必要|ひつよう}です。

{良|よ}いこと（ベネフィット）も{悪|わる}いこと（リスク）も{考|かんが}えながら{科学|かがく}{技術|ぎじゅつ}とつきあっていく、その{第一歩|だいいっぽ}は、「{知|し}ること」です。
（{佐倉|さくら}{統|おさむ}/{古田|ふるた}ゆかり/リビング・サイエンス・ラボ『おはようからおやすみまでの{科学|かがく}』による）
（{注|ちゅう}1）とっつきやすくする：ここでは、{受|う}け{入|い}れられやすくする`,
      arti: `Saya kadang menulis artikel di majalah bertema sains dalam kehidupan dan keluarga. Saya mengangkat sains memasak, mekanisme peralatan dalam kehidupan sehari-hari, dan sebagainya, dan berusaha membuat artikel yang bisa menarik minat orang yang tidak berlatar belakang sains. Pada saat seperti itu, ① permintaan editor adalah begini:

"Agar mudah diterima (catatan 1) oleh ibu rumah tangga pada umumnya, meskipun isinya tentang sains, tolong jangan pakai kata 'sains'. Cukup banyak orang yang begitu mendengar kata 'sains' langsung mundur (berhenti membaca halaman itu)."

Bagi saya ini sering kali permintaan yang sulit, tetapi apa yang dikatakan editor, sebagai sikap dalam menyampaikan informasi kepada masyarakat umum, untuk saat ini tidak bisa tidak dikatakan tepat. Masalah besarnya bukan pakai atau tidaknya kata "sains". Masalahnya adalah "masyarakat umum" sebagai pembaca maupun "editor" sebagai pihak penyampai sama-sama merasa berjarak dengan sains, dan itu melambangkan hubungan antara "iptek" saat ini dan ② "orang-orang yang menggunakannya". Pihak pembuat dan penyampai tentu memahami isinya dengan baik dan mengusulkan arah ke depan, tetapi bisa dikatakan bahwa pihak pengguna menerima apa yang diberikan tanpa cukup memahaminya, hanya dengan tindakan "membeli".

(dipersingkat)

Teknologi, dan iptek, seharusnya dicari dan dikembangkan oleh orang-orang yang hidup di zamannya, jadi kitalah tokoh utama yang menggunakan iptek itu. Namun, apakah pemahaman kita tentang iptek benar-benar maju seiring perkembangan sains...?

Misalnya, apakah di sekitar Anda ada orang yang langsung memutuskan "sains itu sulit" dan merasa tidak cakap? Bagaimana dengan Anda sendiri? Memang benar bahwa karena tingkat teori ilmiah dan penerapannya rumit dan tinggi, sains menjadi sesuatu yang sulit yang hanya dipahami segelintir orang.

Mungkin ada juga orang yang berpendapat bahwa asal bisa memakai apa yang diciptakan para ahli dan teknisi sesuai manual, ③ tidak perlu tahu mekanismenya. Namun, dengan cara pemakaian seperti itu, yang terlihat hanyalah "bagian baik" teknologi yang ditunjukkan pihak pemasok. Bagaimana jika dari pihak penyedia iptek hanya terdengar "bagian baik"-nya saja... Kita, tokoh utama yang menggunakannya, perlu menilai apakah akan memasukkannya ke dalam kehidupan atau tidak, setelah sedikit banyak mengetahui latar belakang ilmiah dan mekanismenya, bukan hanya berdasarkan informasi yang diberikan.

Langkah pertama untuk bergaul dengan iptek sambil memikirkan hal baik (manfaat) maupun hal buruk (risiko) adalah "mengetahui".
(Dari buku karya Sakura Osamu, Furuta Yukari, dan Living Science Lab, "Sains dari Selamat Pagi sampai Selamat Malam")
(Catatan 1) とっつきやすくする: di sini, membuat mudah diterima`,
    },

    // ── 問題13：川村市 学生レポーター募集案内 ──
    "13": {
      yomi: `{川村市|かわむらし}＞レポーター{募集|ぼしゅう}＞{学生|がくせい}レポーター{募集|ぼしゅう}

{学生|がくせい}レポーター{募集|ぼしゅう}について

{川村市|かわむらし}では、{市|し}の{魅力|みりょく}を{伝|つた}えるため、{市|し}のホームページに{掲載|けいさい}するレポートを{執筆|しっぴつ}する「{学生|がくせい}レポーター」を{募集|ぼしゅう}します。

【{活動|かつどう}{内容|ないよう}】
{川村市|かわむらし}の{自然|しぜん}、{産業|さんぎょう}、{文化|ぶんか}などについて{取材|しゅざい}し、{年度|ねんど}{中|ちゅう}に4{本|ほん}{程度|ていど}の{写真|しゃしん}つき{記事|きじ}を{出|だ}していただきます。

【{任期|にんき}】
2017{年|ねん}4{月|がつ}～2018{年|ねん}3{月|がつ}（1{年間|ねんかん}）

【{謝礼|しゃれい}】
{謝礼|しゃれい}（{年額|ねんがく}10,000{円|えん}）と{記念品|きねんひん}を{差|さ}し{上|あ}げます。

【{応募|おうぼ}{資格|しかく}】
{任期|にんき}{中|ちゅう}を{通|つう}じて、{以下|いか}のa）～c）の{条件|じょうけん}をすべて{満|み}たす{方|かた}
a）{大学院|だいがくいん}、{大学|だいがく}、{短期|たんき}{大学|だいがく}または{専門|せんもん}{学校|がっこう}に{通|かよ}う{学生|がくせい}である。
・{外国人|がいこくじん}{学生|がくせい}の{方|かた}も{歓迎|かんげい}します。
b）{川村|かわむら}{市内|しない}に{在住|ざいじゅう}、または{川村市|かわむらし}にある{学校|がっこう}に{在学|ざいがく}している。
c）2017{年|ねん}3{月|がつ}18{日|にち}（{土|ど}）に{川村|かわむら}{市役所|しやくしょ}で{行|おこな}われる{事前|じぜん}{説明会|せつめいかい}に{出席|しゅっせき}できる。

【{応募|おうぼ}{方法|ほうほう}】
{市役所|しやくしょ}{広報課|こうほうか}にメールで①、②をご{提出|ていしゅつ}ください。（2017{年|ねん}2{月|がつ}24{日|か}（{金|きん}）{締|し}め{切|き}り）。{折|お}り{返|かえ}し、{面接|めんせつ}{日|び}についてご{連絡|れんらく}します。{面接|めんせつ}では{写真|しゃしん}を{使|つか}ったプレゼンテーション（5{分|ふん}{程度|ていど}）もしていただきます。{必|かなら}ず③をご{持参|じさん}ください。{採否|さいひ}は、{志望|しぼう}{理由書|りゆうしょ}{及|およ}び{面接|めんせつ}により{決定|けってい}します。

①{申込書|もうしこみしょ}
……{本|ほん}ホームページからダウンロードし、{必要|ひつよう}{事項|じこう}を{記入|きにゅう}してください。
②{志望|しぼう}{理由書|りゆうしょ}
……{書式|しょしき}{自由|じゆう}。{川村市|かわむらし}{学生|がくせい}レポーターに{応募|おうぼ}した{理由|りゆう}について200{字|じ}{程度|ていど}で{書|か}いてください。
③{写真|しゃしん}（テーマ「{私|わたし}は{伝|つた}えたい{川村市|かわむらし}」。{人物|じんぶつ}、{風景|ふうけい}、{物|もの}など、{何|なん}でも{結構|けっこう}です。）
＊{面接|めんせつ}{時|じ}、{学生証|がくせいしょう}と{現住所|げんじゅうしょ}がわかるものを{確認|かくにん}しますので、ご{持参|じさん}ください。

【その{他|た}】
レポーターをお{願|ねが}いする{方|かた}には、{市|し}で{指定|してい}するボランティア{保険|ほけん}に{加入|かにゅう}していただきます。（{保険|ほけん}の{費用|ひよう}は{市|し}で{負担|ふたん}いたします。）

お{問|と}い{合|あ}わせ：{川村|かわむら}{市役所|しやくしょ}　{広報課|こうほうか}　081-6543-2100/kouhou@kawamura.jp

【{応募者|おうぼしゃ}{情報|じょうほう}】
{名前|なまえ}　　{任期|にんき}{中|ちゅう}の{通学|つうがく}{先|さき}　　{任期|にんき}{中|ちゅう}の{住所|じゅうしょ}　　その{他|た}
キムさん　　{岩里市|いわさとし}にある{大学|だいがく}　　{岩里市|いわさとし}
カーンさん　　{川村市|かわむらし}にある{専門|せんもん}{学校|がっこう}　　{岩里市|いわさとし}　　2017{年|ねん}3{月|がつ}9{日|か}から{20日|はつか}まで{一時|いちじ}{帰国|きこく}の{予定|よてい}
ホンさん　　{岩里市|いわさとし}にある{大学|だいがく}　　{川村市|かわむらし}　　2017{年|ねん}1{月|がつ}から{川村市|かわむらし}に{在住|ざいじゅう}{予定|よてい}
クルスさん　　{川村市|かわむらし}にある{大学院|だいがくいん}　　{川村市|かわむらし}　　2017{年|ねん}9{月|がつ}で{大学院|だいがくいん}を{修了|しゅうりょう}し、10{月|がつ}に{帰国|きこく}{予定|よてい}`,
      arti: `Kota Kawamura > Rekrutmen Reporter > Rekrutmen Reporter Mahasiswa

Tentang rekrutmen reporter mahasiswa

Untuk menyampaikan daya tarik kota, Kota Kawamura merekrut "reporter mahasiswa" yang akan menulis laporan untuk dimuat di situs web kota.

[Isi kegiatan]
Meliput alam, industri, budaya, dan lain-lain di Kota Kawamura, dan menyerahkan sekitar 4 artikel berfoto selama tahun anggaran.

[Masa tugas]
April 2017 – Maret 2018 (1 tahun)

[Imbalan]
Imbalan (10.000 yen per tahun) dan cendera mata.

[Syarat pendaftar]
Orang yang selama masa tugas memenuhi semua syarat a)–c) berikut
a) Mahasiswa yang berkuliah di pascasarjana, universitas, akademi, atau sekolah kejuruan.
- Mahasiswa asing juga dipersilakan.
b) Tinggal di Kota Kawamura, atau bersekolah di sekolah yang ada di Kota Kawamura.
c) Bisa menghadiri sesi penjelasan awal di Balai Kota Kawamura pada 18 Maret 2017 (Sabtu).

[Cara mendaftar]
Serahkan ① dan ② lewat email ke Bagian Humas Balai Kota (batas 24 Februari 2017 (Jumat)). Kami akan segera menghubungi Anda mengenai tanggal wawancara. Dalam wawancara, Anda juga akan melakukan presentasi dengan foto (sekitar 5 menit). Wajib membawa ③. Diterima atau tidaknya ditentukan berdasarkan surat alasan melamar dan wawancara.

① Formulir pendaftaran
... Unduh dari situs web ini dan isi hal-hal yang diperlukan.
② Surat alasan melamar
... Format bebas. Tuliskan alasan mendaftar sebagai reporter mahasiswa Kota Kawamura dalam sekitar 200 karakter.
③ Foto (tema "Kota Kawamura yang ingin saya sampaikan". Orang, pemandangan, benda, apa saja boleh.)
* Saat wawancara, kami akan memeriksa kartu mahasiswa dan dokumen yang menunjukkan alamat sekarang, jadi harap dibawa.

[Lain-lain]
Orang yang kami minta menjadi reporter wajib ikut asuransi relawan yang ditentukan kota. (Biaya asuransi ditanggung kota.)

Kontak: Balai Kota Kawamura, Bagian Humas, 081-6543-2100 / kouhou@kawamura.jp

[Data pendaftar]
Nama — Tempat kuliah selama masa tugas — Alamat selama masa tugas — Lain-lain
Kim-san — universitas di Kota Iwasato — Kota Iwasato
Khan-san — sekolah kejuruan di Kota Kawamura — Kota Iwasato — berencana pulang sementara ke negaranya 9–20 Maret 2017
Hong-san — universitas di Kota Iwasato — Kota Kawamura — berencana tinggal di Kota Kawamura mulai Januari 2017
Cruz-san — pascasarjana di Kota Kawamura — Kota Kawamura — lulus pascasarjana September 2017 dan berencana pulang ke negaranya pada Oktober`,
    },
  },
};
