import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2019
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1912: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{彼|かれ}はその{話|はなし}を【{披露|ひろう}】するチャンスをうかがっていたようだ。",
      arti: "Tampaknya ia sedang menunggu kesempatan untuk 【memamerkan/menceritakan】 kisah itu.",
    },
    2: {
      yomi: "{力|ちから}を{入|い}れたら【{砕|くだ}けて】しまった。",
      arti: "Begitu diberi tenaga, benda itu 【hancur berkeping-keping】.",
      optArti: ["hancur berkeping-keping (砕けて)", "gompal, kurang", "meletup, terpental", "robek, terbelah"],
    },
    3: {
      yomi: "{年|とし}をとって、{物|もの}に【{執着|しゅうちゃく}】する{気持|きも}ちが{少|すく}なくなった。",
      arti: "Setelah menua, perasaan 【terikat/melekat】 pada barang berkurang.",
    },
    4: {
      yomi: "【{債務|さいむ}】の{状況|じょうきょう}を{確|たし}かめる。",
      arti: "Memeriksa kondisi 【utang】.",
    },
    5: {
      yomi: "{鈴木氏|すずきし}の{研究|けんきゅう}は{物理学|ぶつりがく}の{発展|はってん}に{大|おお}いに【{貢献|こうけん}】した。",
      arti: "Penelitian Suzuki sangat 【berkontribusi】 pada perkembangan fisika.",
    },
    6: {
      yomi: "{昨日|きのう}の{彼|かれ}の{態度|たいど}は、{実|じつ}に【{潔|いさぎよ}い】ものだった。",
      arti: "Sikapnya kemarin sungguh 【jantan, berbesar hati】.",
      optArti: ["bersih, suci (清い)", "mulia (尊い)", "jantan, berbesar hati (潔い)", "menyenangkan (快い)"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{森|もり}{選手|せんしゅ}は{記者|きしゃ}{会見|かいけん}で{今|こん}シーズン{限|かぎ}りで{引退|いんたい}することを（　）した。",
      arti: "Dalam konferensi pers, atlet Mori (…) bahwa ia akan pensiun di akhir musim ini.",
      optYomi: ["{証言|しょうげん}", "{開示|かいじ}", "{供述|きょうじゅつ}", "{表明|ひょうめい}"],
      optArti: ["kesaksian", "pengungkapan (informasi)", "keterangan (di depan penyidik)", "pernyataan (sikap/niat)"],
    },
    8: {
      yomi: "{政治家|せいじか}の{高木氏|たかぎし}は、{全国|ぜんこく}{各地|かくち}を{飛|と}び{回|まわ}って（　）{講演|こうえん}を{行|おこな}い、{政策|せいさく}への{支持|しじ}を{呼|よ}びかけた。",
      arti: "Politisi Takagi berkeliling ke seluruh negeri, berceramah dengan (…), dan menyerukan dukungan atas kebijakannya.",
      optYomi: ["{圧倒的|あっとうてき}に", "{精力的|せいりょくてき}に", "{急進的|きゅうしんてき}に", "{普遍的|ふへんてき}に"],
      optArti: ["luar biasa unggul", "penuh energi, giat", "radikal", "universal"],
    },
    9: {
      yomi: "{友人|ゆうじん}に{預|あず}けてきたペットのことが（　）で、{旅行|りょこう}はあまり{楽|たの}しめなかった。",
      arti: "Karena hewan peliharaan yang saya titipkan ke teman membuat (…), saya tidak terlalu menikmati perjalanan.",
      optYomi: ["{手|て}つかず", "{臆病|おくびょう}", "{気|き}がかり", "{迷惑|めいわく}"],
      optArti: ["belum disentuh", "penakut", "khawatir, kepikiran", "merepotkan"],
    },
    10: {
      yomi: "このグラフは、この10{年間|ねんかん}の{市|し}の{人口|じんこう}の（　）を{示|しめ}したものです。",
      arti: "Grafik ini menunjukkan (…) jumlah penduduk kota selama 10 tahun terakhir.",
      optYomi: ["{推移|すいい}", "{過程|かてい}", "{転換|てんかん}", "{変容|へんよう}"],
      optArti: ["perubahan dari waktu ke waktu", "proses", "peralihan, perubahan arah", "perubahan wujud"],
    },
    11: {
      yomi: "{予算|よさん}が{減|へ}らされたことにより、その{事業|じぎょう}は{継続|けいぞく}が（　）いる。",
      arti: "Karena anggarannya dipangkas, kelanjutan proyek itu (…).",
      optYomi: ["{損|そこ}なわれて", "{恐|おそ}れられて", "{崩|くず}されて", "{危|あや}ぶまれて"],
      optArti: ["dirusak", "ditakuti", "diruntuhkan", "dikhawatirkan, diragukan"],
    },
    12: {
      yomi: "この{箱|はこ}の{中|なか}には{本|ほん}が{詰|つ}まっていて、（　）{重|おも}い。",
      arti: "Kotak ini penuh buku dan berat (…).",
      optArti: ["goyah", "mendung, suram", "terasa berat, mantap", "lembap"],
    },
    13: {
      yomi: "{二|ふた}つの{商品|しょうひん}を{並|なら}べると、それらの{違|ちが}いは（　）としていて、{片方|かたほう}は{偽物|にせもの}だとすぐに{分|わ}かる。",
      arti: "Kalau dua produk itu dijajarkan, perbedaannya (…), sehingga langsung ketahuan salah satunya palsu.",
      optYomi: ["{歴然|れきぜん}", "{整然|せいぜん}", "{続々|ぞくぞく}", "{堂々|どうどう}"],
      optArti: ["jelas sekali", "rapi, teratur", "berturut-turut", "gagah, megah"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{新人|しんじん}でいきなり{主役|しゅやく}に{選|えら}ばれるのは【{異例|いれい}】のことだよ。",
      arti: "Pendatang baru langsung terpilih jadi pemeran utama itu hal yang 【tidak biasa】.",
      optYomi: ["{珍|めずら}しい", null, "{立派|りっぱ}な", "{幸運|こううん}な"],
      optArti: ["jarang, langka", "patut dirayakan", "hebat", "beruntung"],
    },
    15: {
      yomi: "{木村|きむら}さんは{新|あたら}しい{薬|くすり}を{開発|かいはつ}するための{実験|じっけん}に【{打|う}ち{込|こ}んだ】。",
      arti: "Kimura-san 【tekun mencurahkan diri】 pada eksperimen untuk mengembangkan obat baru.",
      optYomi: ["{失敗|しっぱい}した", "{苦労|くろう}した", "{協力|きょうりょく}した", "{熱中|ねっちゅう}した"],
      optArti: ["gagal", "bersusah payah", "bekerja sama", "tekun, asyik"],
    },
    16: {
      yomi: "{池田|いけだ}さんはお{金|かね}に{関|かん}して【ルーズ】な{人|ひと}だ。",
      arti: "Ikeda-san orang yang 【sembrono】 soal uang.",
      optYomi: [null, null, "{無関心|むかんしん}な", "{厳|きび}しい"],
      optArti: ["pelit", "ceroboh, tidak teratur", "tidak peduli", "ketat"],
    },
    17: {
      yomi: "{祖父|そふ}は{学生|がくせい}{時代|じだい}に{体験|たいけん}した{不思議|ふしぎ}な{出来事|できごと}を【つぶさに】{語|かた}って{聞|き}かせてくれた。",
      arti: "Kakek menceritakan 【secara rinci】 kejadian aneh yang dialaminya semasa sekolah.",
      optYomi: [null, "{繰|く}り{返|かえ}し", "{詳細|しょうさい}に", "{懐|なつ}かしそうに"],
      optArti: ["dengan santai", "berulang-ulang", "secara rinci", "dengan penuh kerinduan"],
    },
    18: {
      yomi: "{高橋|たかはし}さんの{話|はなし}は【{脈絡|みゃくらく}】がない。",
      arti: "Cerita Takahashi-san tidak ada 【kaitan/alurnya】.",
      optYomi: [null, "{終|お}わり", "{面白|おもしろ}み", null],
      optArti: ["kebohongan", "akhir", "daya tarik", "hubungan, keterkaitan"],
    },
    19: {
      yomi: "{次|つぎ}の{会議|かいぎ}で{新|あたら}しいプロジェクトについて【{吟味|ぎんみ}】することになっている。",
      arti: "Di rapat berikutnya proyek baru akan 【dikaji dengan saksama】.",
      optYomi: ["{決定|けってい}", "{提案|ていあん}", "{検討|けんとう}", "{報告|ほうこく}"],
      optArti: ["keputusan", "usulan", "pertimbangan, kajian", "laporan"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "【{要望|ようぼう}】",
      arti: "要望 = permintaan, tuntutan (kepada pihak berwenang)",
      optYomi: [
        "{宇宙|うちゅう}{飛行士|ひこうし}になるという{子|こ}どものころからの{要望|ようぼう}がついに{実現|じつげん}した。",
        "{市民|しみん}の{要望|ようぼう}で、{交通量|こうつうりょう}の{多|おお}い{道|みち}に{新|あら}たに{道路|どうろ}{標識|ひょうしき}が{設置|せっち}された。",
        "{必要|ひつよう}な{書類|しょるい}をすべて{窓口|まどぐち}に{出|だ}せば、パスポートの{要望|ようぼう}ができる。",
        "{進学|しんがく}か{就職|しゅうしょく}か{迷|まよ}っていたが、{両親|りょうしん}と{相談|そうだん}し、{担任|たんにん}の{先生|せんせい}に{進学|しんがく}の{要望|ようぼう}を{出|だ}した。",
      ],
      optArti: [
        "'Permintaan' sejak kecil untuk menjadi astronaut akhirnya terwujud.",
        "Atas 'permintaan' warga, rambu lalu lintas baru dipasang di jalan yang ramai.",
        "Jika semua dokumen yang diperlukan diserahkan ke loket, Anda bisa melakukan 'permintaan' paspor.",
        "Saya bimbang antara melanjutkan sekolah atau bekerja, tetapi setelah berdiskusi dengan orang tua, saya menyerahkan 'permintaan' melanjutkan sekolah kepada wali kelas.",
      ],
    },
    21: {
      yomi: "【{覆|くつがえ}す】",
      arti: "覆す = membalikkan, menjungkirbalikkan (teori, keputusan)",
      optYomi: [
        "どんなに{若|わか}いころに{戻|もど}りたくても、{年齢|ねんれい}を{覆|くつがえ}すことはできない。",
        "{予定|よてい}を{覆|くつがえ}してもいいなら、{先|さき}に{買|か}い{物|もの}に{行|い}きましょう。",
        "{記入|きにゅう}{後|ご}はアンケート{用紙|ようし}を{覆|くつがえ}して、{裏面|りめん}を{上|うえ}にして{置|お}いてください。",
        "これまでの{定説|ていせつ}を{覆|くつがえ}すような{新|あたら}しい{研究|けんきゅう}{結果|けっか}が{発表|はっぴょう}された。",
      ],
      optArti: [
        "Betapapun ingin kembali muda, usia tidak bisa 'dijungkirbalikkan'.",
        "Kalau jadwal boleh 'dijungkirbalikkan', mari pergi belanja dulu.",
        "Setelah diisi, 'jungkirbalikkan' lembar angket dan letakkan dengan sisi belakang di atas.",
        "Diumumkan hasil penelitian baru yang 'menjungkirbalikkan' teori yang selama ini diterima.",
      ],
    },
    22: {
      yomi: "【{繁盛|はんじょう}】",
      arti: "繁盛 = ramai, laris (toko/usaha)",
      optYomi: [
        "{駅前|えきまえ}のスーパーは{安|やす}いと{評判|ひょうばん}で、とても{繁盛|はんじょう}している。",
        "{都心|としん}に{向|む}かう{道|みち}は{通勤|つうきん}ラッシュの{車|くるま}で{繁盛|はんじょう}し、なかなか{前|まえ}に{進|すす}まない。",
        "{久|ひさ}しぶりの{同窓会|どうそうかい}は、{歌|うた}やおしゃべりで{大|おお}いに{繁盛|はんじょう}した。",
        "この{国|くに}の{経済|けいざい}は10{年|ねん}の{間|あいだ}に{急速|きゅうそく}に{繁盛|はんじょう}してきた。",
      ],
      optArti: [
        "Supermarket di depan stasiun terkenal murah dan sangat 'laris'.",
        "Jalan menuju pusat kota 'laris' oleh mobil jam sibuk dan sulit maju.",
        "Reuni yang lama dinanti sangat 'laris' dengan nyanyian dan obrolan.",
        "Ekonomi negara ini 'laris' dengan cepat dalam 10 tahun.",
      ],
    },
    23: {
      yomi: "【くじける】",
      arti: "くじける = patah semangat, putus asa",
      optYomi: [
        "{年|とし}を{取|と}っても{体力|たいりょく}がくじけないよう、{毎日|まいにち}{運動|うんどう}している。",
        "{庭|にわ}の{草花|くさばな}が{暑|あつ}さでくじけないよう、{一日|いちにち}に{何度|なんど}も{水|みず}をやっている。",
        "{失敗|しっぱい}してくじけそうになった{時|とき}、{親友|しんゆう}が{励|はげ}ましてくれた。",
        "{今|いま}は{晴|は}れているが、{午後|ごご}は{天気|てんき}がくじけそうだから、{傘|かさ}を{持|も}っていこう。",
      ],
      optArti: [
        "Saya berolahraga setiap hari agar stamina tidak 'patah semangat' meski menua.",
        "Saya menyiram berkali-kali sehari agar tanaman di taman tidak 'patah semangat' karena panas.",
        "Saat gagal dan hampir 'patah semangat', sahabat menyemangati saya.",
        "Sekarang cerah, tapi sore cuacanya sepertinya akan 'patah semangat', jadi bawa payung.",
      ],
    },
    24: {
      yomi: "【ひたむき】",
      arti: "ひたむき = sepenuh hati, gigih, tak kenal menyerah",
      optYomi: [
        "{科学|かがく}{技術|ぎじゅつ}のひたむきな{進歩|しんぽ}のおかげで、{我々|われわれ}の{生活|せいかつ}は{便利|べんり}になった。",
        "この{時計|とけい}は{百年|ひゃくねん}もの{間|あいだ}、この{家|いえ}でひたむきに{時|とき}を{刻|きざ}んできた。",
        "{早朝|そうちょう}から{雪|ゆき}がひたむきに{積|つ}もり、すでに1メートル{以上|いじょう}になっている。",
        "{転|ころ}んでもゴールに{向|む}かって{走|はし}り{続|つづ}ける{少女|しょうじょ}のひたむきな{姿|すがた}に{感動|かんどう}した。",
      ],
      optArti: [
        "Berkat kemajuan 'gigih' ilmu pengetahuan dan teknologi, hidup kita menjadi praktis.",
        "Jam ini selama seratus tahun telah 'gigih' menandai waktu di rumah ini.",
        "Sejak subuh salju menumpuk dengan 'gigih' dan sudah lebih dari 1 meter.",
        "Saya terharu melihat sosok 'gigih' gadis yang terus berlari menuju garis finis meski terjatuh.",
      ],
    },
    25: {
      yomi: "【{互角|ごかく}】",
      arti: "互角 = seimbang, setara (kemampuan)",
      optYomi: [
        "{今回|こんかい}のプロジェクトで{得|え}た{利益|りえき}は、メンバー{全員|ぜんいん}で{互角|ごかく}に{分配|ぶんぱい}した。",
        "{決勝|けっしょう}に{残|のこ}った{選手|せんしゅ}たちの{実力|じつりょく}は{互角|ごかく}だから、{誰|だれ}が{優勝|ゆうしょう}するか{分|わ}からない。",
        "いつも{出張|しゅっちょう}で{使|つか}うホテルが{満室|まんしつ}だったので、{互角|ごかく}の{料金|りょうきん}のところを{見|み}つけた。",
        "エアコンが{壊|こわ}れているみたいで、{室温|しつおん}が{外|そと}の{気温|きおん}と{互角|ごかく}になってしまった。",
      ],
      optArti: [
        "Keuntungan dari proyek ini dibagi 'seimbang' oleh semua anggota.",
        "Kemampuan para atlet yang lolos ke final 'seimbang', jadi tidak tahu siapa yang akan juara.",
        "Hotel yang biasa dipakai saat dinas penuh, jadi saya menemukan tempat dengan tarif 'seimbang'.",
        "Sepertinya AC rusak, suhu ruangan jadi 'seimbang' dengan suhu luar.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{不況|ふきょう}の{影響|えいきょう}で、{多|おお}くの{企業|きぎょう}が{事業|じぎょう}の{縮小|しゅくしょう}や{延期|えんき}、さらには{事業|じぎょう}からの{撤退|てったい}（　）{余儀|よぎ}なくされている。",
      arti: "Akibat resesi, banyak perusahaan terpaksa mengecilkan atau menunda usaha, bahkan (…) mundur dari usaha.",
      optArti: ["(partikel objek)", "dengan, di", "dan, dengan", "ke, pada"],
    },
    27: {
      yomi: "{一度|いちど}ついてしまった{癖|くせ}は、（　）{簡単|かんたん}には{直|なお}らないものだ。",
      arti: "Kebiasaan yang sudah melekat sekali tidak akan (…) mudah diperbaiki.",
      optArti: ["begitu (mudah)", "seandainya pun", "lama-lama", "sebenarnya (apa)"],
    },
    28: {
      yomi: "{半年間|はんとしかん}の{大学|だいがく}{受験|じゅけん}（　）、アイドルの{西田|にしだ}アキは{現在|げんざい}{活動|かつどう}を{休止|きゅうし}している。",
      arti: "(…) ujian masuk universitas setengah tahun lagi, idola Nishida Aki saat ini menghentikan sementara kegiatannya.",
      optYomi: ["を{基|もと}にして", "を{控|ひか}えて", null, null],
      optArti: ["berdasarkan", "menjelang (sesuatu yang akan dihadapi)", "dengan (sarana), per (batas waktu)", "seputar, mengenai"],
    },
    29: {
      yomi: "{結婚|けっこん}20{年目|ねんめ}の{記念|きねん}に、{娘|むすめ}が{遊園地|ゆうえんち}のペアチケットをプレゼントしてくれた。いまさら{夫婦|ふうふ}{二人|ふたり}で{遊園地|ゆうえんち}（　）と{思|おも}ったが、{行|い}ってみたら{意外|いがい}と{楽|たの}しめた。",
      arti: "Untuk peringatan 20 tahun pernikahan, putri kami menghadiahkan tiket berpasangan ke taman hiburan. Saya pikir, \"Masa sekarang suami-istri berdua ke taman hiburan (…),\" tetapi setelah dicoba ternyata menyenangkan.",
      optArti: ["tidak lebih dari", "khas, hanya bisa di", "bukan lagi masanya (…kan)", "semacam"],
    },
    30: {
      yomi: "（{手紙|てがみ}で）{年末|ねんまつ}を{迎|むか}え、お{忙|いそが}しい{毎日|まいにち}をお{過|す}ごしのことと（　）が、お{変|か}わりありませんでしょうか。",
      arti: "(Dalam surat) Menjelang akhir tahun, saya (…) Anda sedang menjalani hari-hari yang sibuk; apakah Anda baik-baik saja?",
      optYomi: [null, "{承|うけたまわ}ります", "{存|ぞん}じます", "{申|もう}し{上|あ}げます"],
      optArti: ["melakukan (bentuk rendah hati)", "menerima, mendengar (bentuk rendah hati)", "kira, rasa (bentuk rendah hati 思う)", "menyampaikan (bentuk rendah hati)"],
    },
    31: {
      yomi: "{駐車場|ちゅうしゃじょう}に{着|つ}いて、{車|くるま}から（　）、ザーッと{大粒|おおつぶ}の{雨|あめ}が{降|ふ}ってきた。",
      arti: "Sesampainya di parkiran, (…) dari mobil, hujan butiran besar turun dengan deras.",
      optYomi: ["{出|で}るようにしたとたん", "{出|で}ようとしたとたん", "{出|で}るようにするにつれて", "{出|で}ようとするにつれて"],
      optArti: ["begitu membiasakan keluar", "tepat saat hendak keluar", "seiring membiasakan keluar", "seiring hendak keluar"],
    },
    32: {
      yomi: "{取引先|とりひきさき}との{打|う}ち{合|あ}わせで、「{御社|おんしゃ}で」と（　）、{誤|あやま}って「{弊社|へいしゃ}で」と{言|い}ってしまい、{相手|あいて}を{混乱|こんらん}させてしまった。",
      arti: "Dalam rapat dengan klien, (…) \"di perusahaan Anda\", saya keliru berkata \"di perusahaan kami\" sehingga membuat lawan bicara bingung.",
      optYomi: ["{言|い}うのにひきかえ", "{言|い}ったことにしても", "{言|い}うべきところを", "{言|い}ったつもりはないのに"],
      optArti: ["berbeda dengan mengatakan", "anggaplah sudah mengatakan", "di saat seharusnya mengatakan", "padahal tidak bermaksud mengatakan"],
    },
    33: {
      yomi: "この{映画|えいが}は{主役|しゅやく}の{演技|えんぎ}が{良|よ}くない。ほかの{俳優|はいゆう}については（　）、{実|じつ}にもったいない。",
      arti: "Akting pemeran utama film ini kurang bagus. (…) para aktor lainnya, sungguh sayang sekali.",
      optYomi: ["{文句|もんく}のつけようがないのか", "{文句|もんく}のつけようがないだけに", "{文句|もんく}をつけずにはいられないのか", "{文句|もんく}をつけずにはいられないだけに"],
      optArti: ["apakah tidak ada yang bisa dikritik?", "justru karena tidak ada celah untuk dikritik", "apakah tidak bisa tidak mengkritik?", "justru karena tidak bisa tidak mengkritik"],
    },
    34: {
      yomi: "こんなに{天気|てんき}が{良|よ}くなるなら、レインコートなんて、{着|き}て（　）。",
      arti: "Kalau cuacanya jadi secerah ini, jas hujan segala, (…).",
      optArti: ["oh iya, aku sudah memakainya (ke sini)", "seharusnya aku memakainya (ke sini)", "bukankah sudah memakainya?", "seharusnya tidak usah memakainya (ke sini)"],
    },
    35: {
      yomi: "{夕方|ゆうがた}の{飛行機|ひこうき}で{帰|かえ}ろうと{思|おも}っていたが、{台風|たいふう}の{進路|しんろ}によっては{午後|ごご}の{便|びん}がすべて{欠航|けっこう}に（　）。{今夜|こんや}の{宿|やど}を{探|さが}しておいたほうがよさそうだ。",
      arti: "Saya berencana pulang dengan pesawat sore, tetapi tergantung arah topan, semua penerbangan siang (…) dibatalkan. Sebaiknya saya mencari penginapan untuk malam ini.",
      optArti: ["paling baik jika menjadi", "bahkan tidak tampak akan menjadi", "tidak mungkin sudah menjadi", "bukan tidak mungkin menjadi"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{先生|せんせい}に{薦|すす}められた{文献|ぶんけん}は{難|むずか}しくて、ひと{通|とお}り{読|よ}むことは★ ＿＿ ＿＿ ＿＿とは{言|い}えない。",
      arti: "Literatur yang direkomendasikan guru sulit; saya memang sudah membacanya sekilas, tetapi tidak bisa dikatakan terlalu memahaminya.",
      optYomi: [null, null, "{読|よ}んだ", "{理解|りかい}できた"],
      optArti: ["tetapi", "terlalu (tidak)", "sudah membaca", "bisa memahami"],
    },
    37: {
      yomi: "{今日|きょう}は{予定|よてい}が{詰|つ}まっていて、{食事|しょくじ}をする＿＿ ★ ＿＿ ＿＿{一日|いちにち}だった。",
      arti: "Hari ini jadwal padat; hari yang begitu sibuk sampai waktu untuk makan pun terasa sayang.",
      optYomi: [null, null, "{忙|いそが}しい", "{時間|じかん}が{惜|お}しい"],
      optArti: ["pun (untuk)", "sampai, saking", "sibuk", "waktu terasa sayang"],
    },
    38: {
      yomi: "{自分|じぶん}のこと＿＿ ＿＿ ★ ＿＿のは{我慢|がまん}できない。",
      arti: "Kalau tentang diri saya sendiri sih tidak apa-apa, tetapi saya tidak tahan kalau keluarga atau teman saya dijelek-jelekkan.",
      optYomi: [null, null, null, "{家族|かぞく}や{友人|ゆうじん}を{悪|わる}く{言|い}われる"],
      optArti: ["tentang", "lain soal, tidak apa-apa", "kalau", "keluarga atau teman dijelek-jelekkan"],
    },
    39: {
      yomi: "{食|しょく}に{関|かん}して、これだけは＿＿ ＿＿ ★ ＿＿{誰|だれ}にでもあると{思|おも}う。",
      arti: "Soal makanan, saya rasa setiap orang pasti memiliki semacam prinsip bahwa \"yang satu ini tidak bisa ditawar\".",
      optYomi: [null, "{持|も}つことは", "{譲|ゆず}れないという", "{何|なに}かしらの"],
      optArti: ["prinsip, keteguhan (pilihan)", "memiliki (itu)", "yang tidak bisa ditawar", "semacam, suatu"],
    },
    40: {
      yomi: "{人気|にんき}のランニングシューズが{欲|ほ}しくて＿＿ ＿＿ ★ ＿＿{結局|けっきょく}{買|か}えなかった。",
      arti: "Saya ingin sepatu lari yang populer dan berkeliling mencari ke beberapa toko olahraga, tetapi entah sudah habis, atau kalaupun masih ada tidak ada ukuran yang pas, sehingga akhirnya tidak bisa membeli.",
      optYomi: ["{残|のこ}っていても", "{売|う}り{切|き}れているか", "サイズが{合|あ}うのがなかったりで", "スポーツショップを{数軒|すうけん}{回|まわ}って{探|さが}したが"],
      optArti: ["kalaupun masih ada", "entah sudah habis", "atau tidak ada ukuran yang pas", "berkeliling mencari ke beberapa toko olahraga, tetapi"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optArti: ["saya juga", "kalau saya", "bagi saya", "kalau saya sendiri sih"],
    },
    42: {
      optYomi: ["{実|じつ}は", "{確|たし}かに", null, null],
      optArti: ["sebenarnya", "memang benar", "meskipun begitu", "mungkin saja"],
    },
    43: {
      optYomi: ["{否定|ひてい}してすらない", "{否定|ひてい}してはいまいか", "{否定|ひてい}していたとしよう", "{否定|ひてい}しているわけではない"],
      optArti: ["bahkan tidak menyangkal", "bukankah sedang menyangkal?", "anggaplah tadinya menyangkal", "bukan berarti saya menyangkal"],
    },
    44: {
      optYomi: ["{生|う}まれそうだが", "{生|う}まれるのはいいが", "{生|う}まれるからだが", "{生|う}まれるかどうかだが"],
      optArti: ["sepertinya akan muncul, tetapi", "muncul sih tidak apa-apa, tetapi", "karena muncul (celah); dan", "soalnya muncul atau tidak, tetapi"],
    },
    45: {
      optArti: ["intinya adalah tidak bisa menjadi", "saya kira tidak mungkin menjadi", "katanya tidak boleh menjadi", "mungkin bisa tidak usah menjadi"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "「A42-C4」の{再|さい}{修理|しゅうり}について、このお{知|し}らせで{伝|つた}えたいことは{何|なに}か。",
      arti: "Mengenai perbaikan ulang \"A42-C4\", apa yang ingin disampaikan pengumuman ini?",
      optYomi: [
        "{再|さい}{修理|しゅうり}の{対象|たいしょう}となる{人|ひと}はお{客様|きゃくさま}センターに{連絡|れんらく}してほしい。",
        "{該当|がいとう}する{期間|きかん}にホース{修理|しゅうり}をした{人|ひと}に、{関連|かんれん}{会社|がいしゃ}から{連絡|れんらく}がある。",
        "{該当|がいとう}する{期間|きかん}にホース{修理|しゅうり}をして、その{後|ご}{不具合|ふぐあい}が{生|しょう}じた{人|ひと}は、お{客様|きゃくさま}センターに{連絡|れんらく}してほしい。",
        "{該当|がいとう}する{期間|きかん}{以外|いがい}にホース{修理|しゅうり}をした{人|ひと}に、{関連|かんれん}{会社|がいしゃ}から{連絡|れんらく}がある。",
      ],
      optArti: [
        "Orang yang menjadi sasaran perbaikan ulang diminta menghubungi pusat layanan pelanggan.",
        "Orang yang memperbaiki selang pada periode terkait akan dihubungi oleh perusahaan afiliasi.",
        "Orang yang memperbaiki selang pada periode terkait dan setelahnya mengalami kerusakan diminta menghubungi pusat layanan pelanggan.",
        "Orang yang memperbaiki selang di luar periode terkait akan dihubungi oleh perusahaan afiliasi.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin dikatakan penulis?",
      optYomi: [
        "{目的|もくてき}を{持|も}っていては、{豊|ゆた}かな{人生|じんせい}が{送|おく}れない。",
        "{目的|もくてき}を{一|ひと}つだけに{限定|げんてい}しなければ、{充実|じゅうじつ}した{人生|じんせい}になる。",
        "{目的|もくてき}の{達成|たっせい}ばかりを{考|かんが}えていては、{人生|じんせい}を{十分|じゅうぶん}に{味|あじ}わえない。",
        "{目的|もくてき}が{達成|たっせい}できなくても、{自然|しぜん}を{感|かん}じて{生|い}きれば{幸|しあわ}せな{気持|きも}ちになる。",
      ],
      optArti: [
        "Kalau punya tujuan, kita tidak bisa menjalani hidup yang kaya.",
        "Kalau tujuan tidak dibatasi pada satu saja, hidup akan bermakna.",
        "Kalau hanya memikirkan pencapaian tujuan, kita tidak bisa menikmati hidup sepenuhnya.",
        "Meski tujuan tidak tercapai, kalau hidup sambil merasakan alam, kita akan merasa bahagia.",
      ],
    },
    48: {
      yomi: "{仮面|かめん}をつけた{模倣|もほう}とは、どのようなものか。",
      arti: "Apa yang dimaksud dengan \"peniruan yang bertopeng\"?",
      optYomi: [
        "{誰|だれ}の{真似|まね}もしていないように{見|み}える{模倣|もほう}。",
        "{教師|きょうし}の{真似|まね}をしているように{見|み}える{模倣|もほう}。",
        "{自分|じぶん}の{気持|きも}ちに{反|はん}してする{模倣|もほう}。",
        "{実体|じったい}を{見|み}せないための{模倣|もほう}。",
      ],
      optArti: [
        "Peniruan yang tampak seolah tidak meniru siapa pun.",
        "Peniruan yang tampak seolah meniru guru.",
        "Peniruan yang dilakukan berlawanan dengan perasaan sendiri.",
        "Peniruan untuk menyembunyikan wujud aslinya.",
      ],
    },
    49: {
      yomi: "{筆者|ひっしゃ}によると、{現代|げんだい}はどういう{時代|じだい}か。",
      arti: "Menurut penulis, zaman sekarang zaman seperti apa?",
      optYomi: [
        "{人間|にんげん}は、「{必要|ひつよう}」な{物|もの}は{何|なん}でも「{発明|はつめい}」できると{錯覚|さっかく}している。",
        "{人間|にんげん}は{物質的|ぶっしつてき}に{豊|ゆた}かになったのに、{新|あら}たな「{発明|はつめい}」{品|ひん}を{求|もと}め{続|つづ}けている。",
        "「{発明|はつめい}」された{物|もの}によって、{人間|にんげん}の{精神|せいしん}が{影響|えいきょう}を{受|う}けている。",
        "「{発明|はつめい}」{品|ひん}は、{人間|にんげん}の{精神|せいしん}の{飢|う}えを{満|み}たすために{改良|かいりょう}され{続|つづ}けている。",
      ],
      optArti: [
        "Manusia salah mengira bahwa barang apa pun yang \"diperlukan\" bisa \"diciptakan\".",
        "Meski sudah makmur secara materi, manusia terus mencari barang \"temuan\" baru.",
        "Jiwa manusia dipengaruhi oleh barang yang \"diciptakan\".",
        "Barang \"temuan\" terus disempurnakan untuk memenuhi kelaparan jiwa manusia.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{筆者|ひっしゃ}によると、{書|か}くとはどういうことか。",
      arti: "Menurut penulis, apa itu menulis?",
      optYomi: [
        "{直感|ちょっかん}や{思|おも}いつきを{頭|あたま}に{浮|う}かんだ{順|じゅん}に{並|なら}べていくこと。",
        "ばらばらな{断片|だんぺん}を{直感|ちょっかん}に{基|もと}づいてつないでいくこと。",
        "{頭|あたま}に{浮|う}かんだ{断片|だんぺん}を{筋道|すじみち}を{立|た}ててつないでいくこと。",
        "{論理的|ろんりてき}に{考|かんが}えたことをスムーズな{流|なが}れに{並|なら}べていくこと。",
      ],
      optArti: [
        "Menyusun intuisi dan gagasan sesuai urutan muncul di kepala.",
        "Menyambung potongan-potongan yang terpisah berdasarkan intuisi.",
        "Menyambung potongan yang muncul di kepala dengan alur yang runtut.",
        "Menyusun hal yang dipikirkan secara logis ke dalam alur yang mulus.",
      ],
    },
    51: {
      yomi: "{不思議|ふしぎ}だとあるが、なぜか。",
      arti: "Tertulis \"aneh\"; mengapa?",
      optYomi: [
        "{考|かんが}えていたことが{書|か}けていなくても、{書|か}けたように{思|おも}えてくるから。",
        "{書|か}くことに{集中|しゅうちゅう}しすぎないほうが、うまく{書|か}けたと{思|おも}えてくるから。",
        "{書|か}き{足|た}しているうちに、{自分|じぶん}の{考|かんが}えがより{深|ふか}まったと{思|おも}えてくるから。",
        "{書|か}き{上|あ}げたものが、{初|はじ}めから{考|かんが}えていたことであるかのように{思|おも}えるから。",
      ],
      optArti: [
        "Karena meski yang dipikirkan tidak tertulis, terasa seolah sudah tertulis.",
        "Karena kalau tidak terlalu fokus menulis, terasa tulisannya lebih bagus.",
        "Karena sambil menambahkan tulisan, terasa pikiran sendiri menjadi lebih dalam.",
        "Karena tulisan yang sudah selesai terasa seolah memang hal yang dipikirkan sejak awal.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{言葉|ことば}にすることで、{自分|じぶん}の「{考|かんが}え」が{出来上|できあ}がる。",
        "{言葉|ことば}が{作|つく}り{出|だ}す「{考|かんが}え」は{自分|じぶん}の「{考|かんが}え」ではない。",
        "「{考|かんが}え」が{存在|そんざい}して{初|はじ}めて、{書|か}き{進|すす}められる。",
        "{意識|いしき}によって「{考|かんが}え」を{言葉|ことば}にすることができる。",
      ],
      optArti: [
        "Dengan menuangkannya ke dalam kata-kata, \"pikiran\" kita terbentuk.",
        "\"Pikiran\" yang diciptakan kata-kata bukanlah \"pikiran\" kita sendiri.",
        "Baru setelah ada \"pikiran\", tulisan bisa dilanjutkan.",
        "Dengan kesadaran, \"pikiran\" bisa dituangkan ke dalam kata-kata.",
      ],
    },
    53: {
      yomi: "カエルが{寄生虫|きせいちゅう}に{感染|かんせん}して{発病|はつびょう}する{割合|わりあい}が{低|ひく}いのは、どのような{場合|ばあい}か。",
      arti: "Dalam kasus apa persentase katak yang terinfeksi parasit lalu jatuh sakit rendah?",
      optYomi: [
        "1{種類|しゅるい}の{寄生虫|きせいちゅう}しかいない。",
        "1{種類|しゅるい}のカエルしかいない。",
        "{数|すう}{種類|しゅるい}の{寄生虫|きせいちゅう}が{共存|きょうぞん}する。",
        "{数|すう}{種類|しゅるい}のカエルが{共存|きょうぞん}する。",
      ],
      optArti: [
        "Hanya ada satu jenis parasit.",
        "Hanya ada satu jenis katak.",
        "Beberapa jenis parasit hidup berdampingan.",
        "Beberapa jenis katak hidup berdampingan.",
      ],
    },
    54: {
      yomi: "{種|しゅ}のレベルを{超|こ}えた{協力|きょうりょく}とはどのようなものか。",
      arti: "Apa yang dimaksud dengan \"kerja sama yang melampaui tingkat spesies\"?",
      optYomi: [
        "{他|た}の{種|しゅ}に{自分|じぶん}の{種|しゅ}の{病気|びょうき}を{広|ひろ}めない。",
        "{他|た}の{種|しゅ}とともに、ある{特定|とくてい}の1{種類|しゅるい}を{滅|ほろ}ぼす。",
        "{自分|じぶん}の{種|しゅ}の{存続|そんぞく}より{他|た}の{種|しゅ}の{存続|そんぞく}を{優先|ゆうせん}させる。",
        "{多少|たしょう}の{犠牲|ぎせい}を{払|はら}っても、{他|た}の{種|しゅ}の{存続|そんぞく}を{助|たす}ける。",
      ],
      optArti: [
        "Tidak menyebarkan penyakit spesiesnya ke spesies lain.",
        "Bersama spesies lain memusnahkan satu jenis tertentu.",
        "Mendahulukan kelangsungan spesies lain daripada spesies sendiri.",
        "Membantu kelangsungan spesies lain meski harus berkorban sedikit.",
      ],
    },
    55: {
      yomi: "{寄生虫|きせいちゅう}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa yang dikatakan penulis tentang parasit?",
      optYomi: [
        "{感染|かんせん}するカエルが1{種類|しゅるい}だけだと、{寄生虫|きせいちゅう}{自身|じしん}も{絶滅|ぜつめつ}してしまう。",
        "{感染|かんせん}するカエルが1{種類|しゅるい}だけだと、{長期的|ちょうきてき}に{寄生虫|きせいちゅう}の{増殖率|ぞうしょくりつ}が{高|たか}まる。",
        "{感染|かんせん}するカエルが{多|た}{種類|しゅるい}だと、{寄生虫|きせいちゅう}{自身|じしん}も{絶滅|ぜつめつ}してしまう。",
        "{感染|かんせん}するカエルが{多|た}{種類|しゅるい}だと、{一時的|いちじてき}に{寄生虫|きせいちゅう}の{増殖率|ぞうしょくりつ}が{高|たか}まる。",
      ],
      optArti: [
        "Jika katak yang terinfeksi hanya satu jenis, parasit itu sendiri juga akan punah.",
        "Jika katak yang terinfeksi hanya satu jenis, laju perkembangbiakan parasit meningkat dalam jangka panjang.",
        "Jika katak yang terinfeksi banyak jenis, parasit itu sendiri juga akan punah.",
        "Jika katak yang terinfeksi banyak jenis, laju perkembangbiakan parasit meningkat untuk sementara.",
      ],
    },
    56: {
      yomi: "これとは{何|なに}か。",
      arti: "Apa yang dimaksud dengan \"hal ini\"?",
      optYomi: [
        "{職人|しょくにん}の{経験|けいけん}や{勘|かん}、{心|こころ}を「{見|み}える{化|か}」すると、{変形|へんけい}してしまうこと。",
        "{職人|しょくにん}の{経験|けいけん}や{勘|かん}、{心|こころ}を「{見|み}える{化|か}」する{技術|ぎじゅつ}がまだないこと。",
        "「{見|み}える{化|か}」されたものには、{職人|しょくにん}の{経験|けいけん}や{勘|かん}、{心|こころ}は{含|ふく}まれないこと。",
        "「{見|み}える{化|か}」されるには、{職人|しょくにん}の{経験|けいけん}や{勘|かん}が{必要|ひつよう}であること。",
      ],
      optArti: [
        "Jika pengalaman, intuisi, dan hati perajin \"divisualisasikan\", semuanya berubah bentuk.",
        "Belum ada teknologi untuk \"memvisualisasikan\" pengalaman, intuisi, dan hati perajin.",
        "Hal yang sudah \"divisualisasikan\" tidak mengandung pengalaman, intuisi, dan hati perajin.",
        "Untuk \"divisualisasikan\", diperlukan pengalaman dan intuisi perajin.",
      ],
    },
    57: {
      yomi: "{筆者|ひっしゃ}によると、{新|あたら}しい{技術|ぎじゅつ}を{生|う}み{出|だ}すのに{必要|ひつよう}なことは{何|なに}か。",
      arti: "Menurut penulis, apa yang diperlukan untuk melahirkan teknologi baru?",
      optYomi: [
        "できるだけ{多|おお}くのプロセスを{手作業|てさぎょう}で{行|おこな}うこと。",
        "{優|すぐ}れた{職人|しょくにん}の{技|わざ}を「{見|み}える{化|か}」すること。",
        "{職人|しょくにん}が「{見|み}える{化|か}」に{取|と}り{組|く}むこと。",
        "{手|て}と{頭|あたま}を{使|つか}って{作業|さぎょう}をすること。",
      ],
      optArti: [
        "Mengerjakan sebanyak mungkin proses dengan tangan.",
        "\"Memvisualisasikan\" keterampilan perajin unggul.",
        "Perajin menekuni \"visualisasi\".",
        "Bekerja dengan menggunakan tangan dan kepala.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    58: {
      yomi: "{脳|のう}{科学|かがく}について、{筆者|ひっしゃ}はどのようにとらえているか。",
      arti: "Bagaimana penulis memandang ilmu otak (neurosains)?",
      optYomi: [
        "{他|た}の{学問|がくもん}より{早|はや}いスピードで{進歩|しんぽ}している。",
        "{人々|ひとびと}の{脳|のう}{機能|きのう}を{高|たか}めることに{貢献|こうけん}している。",
        "{身近|みぢか}な{疑問|ぎもん}を{扱|あつか}っており、{多|おお}くの{人々|ひとびと}に{理解|りかい}されている。",
        "{脳|のう}の{働|はたら}きが{理解|りかい}されないまま、{人々|ひとびと}の{興味|きょうみ}だけが{先行|せんこう}している。",
      ],
      optArti: [
        "Berkembang lebih cepat daripada ilmu lain.",
        "Berkontribusi meningkatkan fungsi otak manusia.",
        "Membahas pertanyaan sehari-hari sehingga dipahami banyak orang.",
        "Minat orang mendahului, padahal cara kerja otak belum dipahami.",
      ],
    },
    59: {
      yomi: "そういう{色気|いろけ}とは、どのようなことか。",
      arti: "Apa yang dimaksud dengan \"ambisi (keinginan menarik perhatian) seperti itu\"?",
      optYomi: [
        "{科学者|かがくしゃ}が{科学|かがく}{本来|ほんらい}の{面白|おもしろ}さを{前面|ぜんめん}に{出|だ}そうとすること。",
        "{科学者|かがくしゃ}が{事実|じじつ}を{実際|じっさい}より{面白|おもしろ}くして{伝|つた}えようとすること。",
        "{科学者|かがくしゃ}が{一般|いっぱん}の{人々|ひとびと}に{分|わ}かりやすく{科学|かがく}を{説明|せつめい}しようとすること。",
        "{科学者|かがくしゃ}が{新聞|しんぶん}に{掲載|けいさい}されるような{興味深|きょうみぶか}い{研究|けんきゅう}をしようとすること。",
      ],
      optArti: [
        "Ilmuwan berusaha menonjolkan daya tarik asli ilmu pengetahuan.",
        "Ilmuwan berusaha menyampaikan fakta dengan dibuat lebih menarik daripada kenyataannya.",
        "Ilmuwan berusaha menjelaskan ilmu pengetahuan dengan mudah kepada masyarakat umum.",
        "Ilmuwan berusaha melakukan penelitian menarik yang bisa dimuat di koran.",
      ],
    },
    60: {
      yomi: "{現代|げんだい}のメディアと{脳|のう}{科学|かがく}の{現場|げんば}との{関係|かんけい}はどのようになっているか。",
      arti: "Bagaimana hubungan antara media masa kini dan dunia penelitian ilmu otak?",
      optYomi: [
        "メディアが、{研究|けんきゅう}{内容|ないよう}に{介入|かいにゅう}するようになってきている。",
        "メディアの{過剰|かじょう}な{要求|ようきゅう}のため、{研究|けんきゅう}の{現場|げんば}に{負担|ふたん}がかかっている。",
        "{脳|のう}{科学|かがく}に{関|かん}する{情報|じょうほう}{提供|ていきょう}の{機会|きかい}が、メディアに{奪|うば}われている。",
        "{脳|のう}{科学|かがく}{本来|ほんらい}の{面白|おもしろ}さが、メディアに{取|と}り{上|あ}げられなくなっている。",
      ],
      optArti: [
        "Media mulai ikut campur dalam isi penelitian.",
        "Karena tuntutan media yang berlebihan, dunia penelitian terbebani.",
        "Kesempatan memberikan informasi tentang ilmu otak direbut oleh media.",
        "Daya tarik asli ilmu otak tidak lagi diangkat oleh media.",
      ],
    },
    61: {
      yomi: "{筆者|ひっしゃ}によると、{昨今|さっこん}のメディアとの{関|かか}わりにおいて、{科学者|かがくしゃ}はどうあるべきか。",
      arti: "Menurut penulis, bagaimana seharusnya sikap ilmuwan dalam hubungannya dengan media akhir-akhir ini?",
      optYomi: [
        "メディアを{自身|じしん}の{研究|けんきゅう}のために{活用|かつよう}するべきだ。",
        "メディアを{通|つう}じて{研究|けんきゅう}の{現場|げんば}から{情報|じょうほう}を{発信|はっしん}するべきだ。",
        "メディアへの{対応|たいおう}よりも、{研究|けんきゅう}を{優先|ゆうせん}するべきだ。",
        "メディアの{要求|ようきゅう}には{対応|たいおう}せず、{研究|けんきゅう}の{現場|げんば}を{大切|たいせつ}にするべきだ。",
      ],
      optArti: [
        "Harus memanfaatkan media untuk penelitiannya sendiri.",
        "Harus menyebarkan informasi dari dunia penelitian melalui media.",
        "Harus mendahulukan penelitian daripada melayani media.",
        "Tidak perlu melayani tuntutan media dan harus mengutamakan dunia penelitian.",
      ],
    },

    // ── 問題11：統合理解 ──
    62: {
      yomi: "{部下|ぶか}を{褒|ほ}めすぎることの{問題点|もんだいてん}として、AとBが{共通|きょうつう}して{述|の}べていることは{何|なに}か。",
      arti: "Sebagai masalah terlalu sering memuji bawahan, apa yang sama-sama dikatakan A dan B?",
      optYomi: [
        "{部下|ぶか}{同士|どうし}の{人間|にんげん}{関係|かんけい}が{悪|わる}くなること。",
        "{部下|ぶか}が{上司|じょうし}に{不信感|ふしんかん}を{持|も}ち、やる{気|き}をなくすこと。",
        "{部下|ぶか}が{褒|ほ}められるために{仕事|しごと}をするようになること。",
        "{部下|ぶか}が{仕事|しごと}で{成果|せいか}を{上|あ}げることだけを{目標|もくひょう}にすること。",
      ],
      optArti: [
        "Hubungan antarbawahan memburuk.",
        "Bawahan tidak percaya pada atasan dan kehilangan motivasi.",
        "Bawahan menjadi bekerja demi dipuji.",
        "Bawahan hanya menjadikan pencapaian hasil kerja sebagai target.",
      ],
    },
    63: {
      yomi: "{部下|ぶか}への{接|せっ}し{方|かた}について、AとBはどのように{述|の}べているか。",
      arti: "Mengenai cara memperlakukan bawahan, apa yang dikatakan A dan B?",
      optYomi: [
        "Aは{状況|じょうきょう}に{応|おう}じて{褒|ほ}めたり{叱|しか}ったりすることが{必要|ひつよう}だと{述|の}べ、Bは{良|よ}い{点|てん}をすぐに{褒|ほ}めることが{大切|たいせつ}だと{述|の}べている。",
        "Aは{叱|しか}った{後|あと}には{褒|ほ}めるようにしたほうがいいと{述|の}べ、Bは{適切|てきせつ}なタイミングで{褒|ほ}めることが{大切|たいせつ}だと{述|の}べている。",
        "Aはできるだけ{叱|しか}るのをやめるべきだと{述|の}べ、Bは{良|よ}いと{思|おも}った{点|てん}を{率直|そっちょく}に{表現|ひょうげん}したほうがいいと{述|の}べている。",
        "Aは{分|わ}かりやすい{言葉|ことば}で{褒|ほ}めることが{大切|たいせつ}だと{述|の}べ、Bは{仕事|しごと}の{過程|かてい}の{中|なか}で{良|よ}かった{点|てん}を{褒|ほ}めたほうがいいと{述|の}べている。",
      ],
      optArti: [
        "A mengatakan perlu memuji atau memarahi sesuai situasi, B mengatakan penting segera memuji hal yang baik.",
        "A mengatakan sebaiknya memuji setelah memarahi, B mengatakan penting memuji pada waktu yang tepat.",
        "A mengatakan sebisa mungkin berhenti memarahi, B mengatakan sebaiknya terus terang mengungkapkan hal yang dianggap baik.",
        "A mengatakan penting memuji dengan kata-kata yang mudah dipahami, B mengatakan sebaiknya memuji hal yang baik dalam proses kerja.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    64: {
      yomi: "とんでもない{発明|はつめい}だと{思|おも}うのは、なぜか。",
      arti: "Mengapa penulis menganggapnya \"penemuan yang luar biasa\"?",
      optYomi: [
        "{人間|にんげん}の{脳|のう}の{対応力|たいおうりょく}を{徐々|じょじょ}に{変|か}えてきたから。",
        "{人間|にんげん}に{抽象的|ちゅうしょうてき}な{思考|しこう}を{強|し}いるようになったから。",
        "{多様|たよう}な{人生観|じんせいかん}や{人間性|にんげんせい}を{生|う}み{出|だ}してきたから。",
        "{生活|せいかつ}から{考|かんが}え{方|かた}まで{人間|にんげん}のあり{方|かた}を{変|か}えてきたから。",
      ],
      optArti: [
        "Karena sedikit demi sedikit mengubah daya adaptasi otak manusia.",
        "Karena memaksa manusia berpikir abstrak.",
        "Karena melahirkan beragam pandangan hidup dan sifat manusia.",
        "Karena mengubah keberadaan manusia, dari kehidupan hingga cara berpikir.",
      ],
    },
    65: {
      yomi: "{狩猟|しゅりょう}{採集|さいしゅう}{生活|せいかつ}をしていた{頃|ころ}のヒトの{欲望|よくぼう}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa yang dikatakan penulis tentang keinginan manusia pada masa hidup berburu dan meramu?",
      optYomi: [
        "{自分|じぶん}たちの{日常|にちじょう}しか{知|し}らなかったから、{欲望|よくぼう}は{限|かぎ}られていた。",
        "{自|みずか}らの{経験|けいけん}から{欲望|よくぼう}には{限|かぎ}りがないことを{知|し}っていた。",
        "{多|おお}くの{欲望|よくぼう}を{持|も}っていたが、それを{満|み}たす{手段|しゅだん}は{限|かぎ}られていた。",
        "{生|い}きることが{最|さい}{優先|ゆうせん}だったから、{欲望|よくぼう}を{持|も}つ{余裕|よゆう}がなかった。",
      ],
      optArti: [
        "Karena hanya mengenal keseharian sendiri, keinginannya terbatas.",
        "Dari pengalaman sendiri mereka tahu bahwa keinginan tidak ada batasnya.",
        "Mereka punya banyak keinginan, tetapi cara memenuhinya terbatas.",
        "Karena bertahan hidup adalah prioritas utama, tidak ada ruang untuk memiliki keinginan.",
      ],
    },
    66: {
      yomi: "{筆者|ひっしゃ}によると、ヒトは{貨幣|かへい}を{手|て}に{入|い}れてどうなったか。",
      arti: "Menurut penulis, bagaimana manusia setelah memperoleh uang?",
      optYomi: [
        "{人間|にんげん}{関係|かんけい}に{関心|かんしん}がなくなった。",
        "{貨幣|かへい}{自体|じたい}が{欲望|よくぼう}の{対象|たいしょう}になった。",
        "{特定|とくてい}の{物|もの}に{対|たい}する{欲望|よくぼう}が{強|つよ}くなった。",
        "{何|なに}が{本当|ほんとう}に{欲|ほ}しいのか{分|わ}からなくなった。",
      ],
      optArti: [
        "Tidak lagi peduli pada hubungan antarmanusia.",
        "Uang itu sendiri menjadi objek keinginan.",
        "Keinginan terhadap barang tertentu menjadi kuat.",
        "Tidak tahu lagi apa yang sebenarnya diinginkan.",
      ],
    },
    67: {
      yomi: "{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin dikatakan penulis?",
      optYomi: [
        "{貨幣|かへい}を{得|え}ることだけが{働|はたら}く{意味|いみ}ではないと{自覚|じかく}することが{必要|ひつよう}だ。",
        "{貨幣|かへい}があることによって{共同|きょうどう}という{感覚|かんかく}が{必要|ひつよう}ではなくなっている。",
        "{貨幣|かへい}によって{失|うしな}われている{共同|きょうどう}という{感覚|かんかく}を{忘|わす}れてはいけない。",
        "{貨幣|かへい}には{人間|にんげん}{関係|かんけい}を{壊|こわ}すという{負|ふ}の{面|めん}もあることを{忘|わす}れてはいけない。",
      ],
      optArti: [
        "Perlu disadari bahwa memperoleh uang bukan satu-satunya makna bekerja.",
        "Karena adanya uang, rasa kebersamaan tidak lagi diperlukan.",
        "Kita tidak boleh melupakan rasa kebersamaan yang hilang karena uang.",
        "Kita tidak boleh lupa bahwa uang juga memiliki sisi negatif yang merusak hubungan antarmanusia.",
      ],
    },

    // ── 問題13：情報検索 ──
    68: {
      yomi: "この{助成|じょせい}{制度|せいど}への{応募|おうぼ}に{関|かん}して、{留意|りゅうい}しなければならないことはどれか。",
      arti: "Terkait pendaftaran ke sistem subsidi ini, hal apa yang harus diperhatikan?",
      optYomi: [
        "この{助成金|じょせいきん}の{交付|こうふ}を{過去|かこ}に{一度|いちど}も{受|う}けていない{団体|だんたい}である{必要|ひつよう}がある。",
        "{助成|じょせい}を{受|う}ける{事業|じぎょう}は{決|き}められた{期間|きかん}{内|ない}に{実施|じっし}しなければならない。",
        "{合計|ごうけい}を30{万|まん}{円|えん}{以内|いない}にすれば、{複数|ふくすう}の{事業|じぎょう}について{応募|おうぼ}できる。",
        "{団体|だんたい}によるプレゼンテーションを1{次|じ}{選考|せんこう}の{際|さい}に{行|おこな}わなければならない。",
      ],
      optArti: [
        "Harus organisasi yang sama sekali belum pernah menerima subsidi ini.",
        "Proyek yang menerima subsidi harus dilaksanakan dalam periode yang ditentukan.",
        "Jika totalnya 300 ribu yen atau kurang, bisa mendaftar untuk beberapa proyek.",
        "Presentasi oleh organisasi harus dilakukan pada seleksi tahap pertama.",
      ],
    },
    69: {
      yomi: "ソンさんは{十条|じゅうじょう}{市民|しみん}による{国際|こくさい}{交流|こうりゅう}クラブの{代表|だいひょう}で、この{助成|じょせい}{制度|せいど}に{応募|おうぼ}することにした。{参加|さんか}{必須|ひっす}のもの{以外|いがい}は{出|で}るつもりはない。12{月|がつ}{10日|とおか}の{説明会|せつめいかい}に{参加|さんか}できない{場合|ばあい}、ソンさんの{応募|おうぼ}{方法|ほうほう}として{合|あ}っているのはどれか。",
      arti: "Son-san adalah ketua klub pertukaran internasional beranggotakan warga Kota Jujo, dan memutuskan mendaftar ke sistem subsidi ini. Ia tidak berniat menghadiri apa pun selain yang wajib. Jika ia tidak bisa menghadiri sesi penjelasan 10 Desember, cara mendaftar mana yang tepat untuk Son-san?",
      optYomi: [
        "12{月|がつ}{19日|じゅうくにち}の{説明会|せつめいかい}に{参加|さんか}し、{提出|ていしゅつ}{書類|しょるい}を{応募|おうぼ}{期間|きかん}{内|ない}にファクスで{送|おく}る。",
        "12{月|がつ}{19日|じゅうくにち}の{説明会|せつめいかい}に{参加|さんか}し、{提出|ていしゅつ}{書類|しょるい}を{応募|おうぼ}{期間|きかん}{内|ない}に{着|つ}くように{郵送|ゆうそう}する。",
        "12{月|がつ}{19日|じゅうくにち}の{説明会|せつめいかい}と{個別|こべつ}{相談会|そうだんかい}に{参加|さんか}し、{提出|ていしゅつ}{書類|しょるい}を{応募|おうぼ}{期間|きかん}{内|ない}にメールで{送|おく}る。",
        "12{月|がつ}{19日|じゅうくにち}の{説明会|せつめいかい}と{個別|こべつ}{相談会|そうだんかい}に{参加|さんか}し、{提出|ていしゅつ}{書類|しょるい}を{応募|おうぼ}{期間|きかん}{内|ない}に{窓口|まどぐち}に{提出|ていしゅつ}する。",
      ],
      optArti: [
        "Menghadiri sesi penjelasan 19 Desember dan mengirim dokumen lewat faks dalam periode pendaftaran.",
        "Menghadiri sesi penjelasan 19 Desember dan mengirim dokumen lewat pos agar tiba dalam periode pendaftaran.",
        "Menghadiri sesi penjelasan 19 Desember dan konsultasi individu, lalu mengirim dokumen lewat email dalam periode pendaftaran.",
        "Menghadiri sesi penjelasan 19 Desember dan konsultasi individu, lalu menyerahkan dokumen ke loket dalam periode pendaftaran.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：「好き」という言葉の罠 ──
    "7": {
      yomi: `{以下|いか}は、{小説家|しょうせつか}が{書|か}いた{文章|ぶんしょう}である。

「{好|す}き」という{言葉|ことば}は{曖昧|あいまい}だ。{意味|いみ}が{曖昧|あいまい}なわけではない。{言葉|ことば}に{込|こ}められる{感情|かんじょう}の{強|つよ}さの{度合|どあ}いがはっきりしないのだ。ないよりはあったほうがいいという{程度|ていど}の「{好|す}き」もあるし、それを{奪|うば}われたり{失|うしな}ったりしたら{死|し}んでしまうかも{知|し}れないという{強烈|きょうれつ}な{感情|かんじょう}や{意志|いし}を{伴|ともな}う「{好|す}き」もある。{私事|わたくしごと}で{恐縮|きょうしゅく}だが、わたしは{小説|しょうせつ}を{書|か}くのが{好|す}きではない。じゃあ{嫌|きら}いなのかというとそうでもない。おそらくそれがなくては{生|い}きていけないくらい{重要|じゅうよう}で{大切|たいせつ}なものだが、{非常|ひじょう}な{集中|しゅうちゅう}を{要|よう}するのでとても{好|す}きとは{言|い}えないのだ。[41]{小説|しょうせつ}を{書|か}くことは{好|す}きという{言葉|ことば}の{枠外|わくがい}にある。

{子|こ}どものころから{文章|ぶんしょう}を{書|か}くことは{得意|とくい}だったが、{好|す}きではなかった。もし{自分|じぶん}が{小説|しょうせつ}を{書|か}くことが{好|す}きだったらどうなっていただろう、と{考|かんが}えることがある。もし{好|す}きだったら、たぶん{日常的|にちじょうてき}な{行為|こうい}になっていただろう。つまり{小説|しょうせつ}を{書|か}くことが{自分|じぶん}にとって{特別|とくべつ}なことではなくなっていただろう。[42]{小説|しょうせつ}を{書|か}くことそのものに{満足|まんぞく}を{覚|おぼ}えるようになったかも{知|し}れない。{執筆|しっぴつ}が{日常的|にちじょうてき}な{行為|こうい}と{化|か}すこと、{書|か}くことそのものに{満足|まんぞく}すること、いずれも{予定|よてい}{調和|ちょうわ}（{注|ちゅう}1）に{向|む}かう{要因|よういん}となる。わたしにとっては{忌避|きひ}すべきことだ。

「{好|す}き」という{概念|がいねん}を[43]。だが{好|す}きという{言葉|ことば}は{自家|じか}{撞着|どうちゃく}（{注|ちゅう}2）・{満足|まんぞく}の{罠|わな}に{陥|おちい}りやすい。{程度|ていど}の{差|さ}はあっても、{好|す}きという{感情|かんじょう}には{必|かなら}ず{脳|のう}の{深部|しんぶ}が{関係|かんけい}している。{理性|りせい}{一般|いっぱん}を{司|つかさど}る{前頭|ぜんとう}{前|ぜん}{皮質|ひしつ}ではなく、{深部|しんぶ}{大脳|だいのう}{辺縁系|へんえんけい}や{基底核|きていかく}が{関|かか}わっている。「{好|す}き」は{理性|りせい}ではなくエモーショナル（{注|ちゅう}3）な{部分|ぶぶん}に{依存|いぞん}する。だからたいていの{場合|ばあい}、{本当|ほんとう}に「{好|す}きなこと」「{好|す}きなモノ」「{好|す}きな{人|ひと}」に{関|かん}して、わたしたちは{他人|たにん}に{説明|せつめい}できない。なぜ{好|す}きなの？どう{好|す}きなの？と{聞|き}かれても、うまく{答|こた}えられないのだ。「{好|す}き」が{脳|のう}の{深部|しんぶ}から{湧|わ}いてくるもので、その{説明|せつめい}を{担当|たんとう}するのは{理性|りせい}なので、そこに{本来的|ほんらいてき}なギャップが[44]、{逆|ぎゃく}に、{他人|たにん}にわかりやすく{説明|せつめい}できるような「{好|す}き」は、{案外|あんがい}どうでもいい{場合|ばあい}が{多|おお}い。

「なぜあの{人|ひと}が{好|す}きなの？」「お{金持|かねも}ちだから」というようなやりとりを{想像|そうぞう}すればわかりやすいが、{説明|せつめい}{可能|かのう}なわかりやすい「{好|す}き」は、{何|なに}かを{生|う}み{出|だ}すような{力|ちから}には[45]。
（{注|ちゅう}1）{予定|よてい}{調和|ちょうわ}：ここでは、{創造的|そうぞうてき}でない{状態|じょうたい}
（{注|ちゅう}2）{自家|じか}{撞着|どうちゃく}：{自己|じこ}{矛盾|むじゅん}
（{注|ちゅう}3）エモーショナルな：{感情|かんじょう}の`,
      arti: `Berikut ini adalah tulisan seorang novelis.

Kata "suka" itu ambigu. Bukan maknanya yang ambigu. Yang tidak jelas adalah kadar kekuatan perasaan yang terkandung dalam kata itu. Ada "suka" sebatas lebih baik ada daripada tidak, ada pula "suka" yang disertai perasaan dan kehendak kuat sampai-sampai kita mungkin mati kalau hal itu direbut atau hilang. Maaf menyinggung urusan pribadi, tetapi saya tidak suka menulis novel. Lalu, apakah saya membencinya? Tidak juga. Mungkin itu sesuatu yang begitu penting dan berharga sampai saya tidak bisa hidup tanpanya, tetapi karena membutuhkan konsentrasi luar biasa, saya sama sekali tidak bisa menyebutnya suka. [41], menulis novel berada di luar kerangka kata "suka".

Sejak kecil saya pandai menulis, tetapi tidak menyukainya. Kadang saya berpikir, seandainya saya suka menulis novel, akan jadi bagaimana? Kalau suka, mungkin itu akan menjadi kegiatan sehari-hari. Artinya, menulis novel tidak lagi menjadi hal yang istimewa bagi saya. [42] saya jadi merasa puas dengan menulis novel itu sendiri. Kegiatan menulis berubah menjadi rutinitas, dan merasa puas dengan menulis itu sendiri, keduanya menjadi faktor yang mengarah pada keadaan serba sudah diduga (catatan 1). Bagi saya, itu hal yang harus dihindari.

[43] konsep "suka". Namun, kata "suka" mudah terjerumus ke dalam perangkap kontradiksi diri (catatan 2) dan rasa puas. Meski kadarnya berbeda, perasaan suka pasti melibatkan bagian dalam otak. Yang terlibat bukan korteks prefrontal yang mengatur nalar secara umum, melainkan sistem limbik bagian dalam dan ganglia basal. "Suka" bergantung bukan pada nalar, melainkan pada bagian emosional (catatan 3). Karena itu, dalam kebanyakan kasus, kita tidak bisa menjelaskan kepada orang lain tentang "hal yang benar-benar kita sukai", "barang yang kita sukai", atau "orang yang kita sukai". Meski ditanya, kenapa suka? sukanya bagaimana? kita tidak bisa menjawab dengan baik. "Suka" muncul dari bagian dalam otak, sedangkan yang bertugas menjelaskannya adalah nalar, sehingga [44] celah yang mendasar di sana; sebaliknya, "suka" yang bisa dijelaskan dengan mudah kepada orang lain sering kali ternyata tidak terlalu penting.

Mudah dipahami jika kita membayangkan percakapan seperti "Kenapa kamu suka orang itu?" "Karena dia kaya." "Suka" yang mudah dipahami dan bisa dijelaskan, [45] kekuatan yang melahirkan sesuatu.
(Catatan 1) 予定調和: di sini, keadaan yang tidak kreatif
(Catatan 2) 自家撞着: kontradiksi diri
(Catatan 3) エモーショナルな: emosional`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}がホームページに{掲載|けいさい}したお{知|し}らせである。

{株式|かぶしき}{会社|がいしゃ}フジハルク＞お{客様|きゃくさま}へ{大切|たいせつ}なお{知|し}らせ
2019{年|ねん}10{月|がつ}{1日|ついたち}
{株式|かぶしき}{会社|がいしゃ}フジハルク

{家庭|かてい}{用|よう}エアコン「A42-C4」の{再|さい}{修理|しゅうり}のお{知|し}らせ

{日頃|ひごろ}は{弊社|へいしゃ}{製品|せいひん}をご{愛用|あいよう}いただき、{厚|あつ}く{御礼|おんれい}{申|もう}し{上|あ}げます。
この{度|たび}、{家庭|かてい}{用|よう}エアコン「A42-C4」について、{弊社|へいしゃ}が2019{年|ねん}4{月|がつ}から8{月|がつ}の{間|あいだ}に{行|おこな}ったホース{修理|しゅうり}の{際|さい}に{使用|しよう}した{金具|かなぐ}に{不具合|ふぐあい}があることが{判明|はんめい}しました。そのため、その{期間|きかん}に{修理|しゅうり}をした{製品|せいひん}に{対|たい}して{再|さい}{修理|しゅうり}を{実施|じっし}させていただくことになりました。
つきましては、{再|さい}{修理|しゅうり}の{対象|たいしょう}となるお{客様|きゃくさま}には、{弊社|へいしゃ}{製品|せいひん}の{修理|しゅうり}を{行|おこな}っております{関連|かんれん}{会社|がいしゃ}「FHエンジニア」より{直接|ちょくせつ}{電話|でんわ}にてご{連絡|れんらく}させていただきます。
なお、{本件|ほんけん}に{関|かん}するお{問|と}い{合|あ}わせは、{弊社|へいしゃ}お{客様|きゃくさま}センターまでお{願|ねが}いいたします。
お{客様|きゃくさま}には{大変|たいへん}ご{迷惑|めいわく}とお{手数|てすう}をおかけしますことを{深|ふか}くおわびいたします。
{何卒|なにとぞ}ご{理解|りかい}{賜|たまわ}りますよう、お{願|ねが}い{申|もう}し{上|あ}げます。

{株式|かぶしき}{会社|がいしゃ}フジハルク　お{客様|きゃくさま}センター：0120-333-4585
［{受付|うけつけ}{時間|じかん}　10:00-18:00　{土日祝|どにちしゅく}{休|やす}み］`,
      arti: `Berikut ini adalah pengumuman yang dimuat sebuah perusahaan di situs webnya.

PT Fujihaluk > Pemberitahuan penting untuk pelanggan
1 Oktober 2019
PT Fujihaluk

Pemberitahuan perbaikan ulang AC rumah tangga "A42-C4"

Kami mengucapkan terima kasih sebesar-besarnya atas kesetiaan Anda menggunakan produk kami.
Baru-baru ini diketahui bahwa ada cacat pada komponen logam yang kami gunakan saat memperbaiki selang AC rumah tangga "A42-C4" antara April hingga Agustus 2019. Karena itu, kami akan melakukan perbaikan ulang untuk produk yang diperbaiki pada periode tersebut.
Sehubungan dengan itu, pelanggan yang menjadi sasaran perbaikan ulang akan dihubungi langsung lewat telepon oleh perusahaan afiliasi "FH Engineer" yang menangani perbaikan produk kami.
Adapun pertanyaan mengenai hal ini, harap ditujukan ke pusat layanan pelanggan kami.
Kami memohon maaf yang sebesar-besarnya atas ketidaknyamanan dan kerepotan yang ditimbulkan bagi pelanggan.
Kami mohon pengertian Anda.

PT Fujihaluk, Pusat Layanan Pelanggan: 0120-333-4585
[Jam layanan 10.00–18.00, libur Sabtu, Minggu, dan hari libur nasional]`,
    },
    "8-2": {
      yomi: `{目的地|もくてきち}を{目指|めざ}して{走|はし}るだけでは、{人生|じんせい}というのはもったいないのではないか。{私|わたし}は{散歩|さんぽ}することが{好|す}きなのだが、{散歩|さんぽ}というのは、ゴールをめざして{邁進|まいしん}することの{対極|たいきょく}（{注|ちゅう}）にある。むしろ{目的|もくてき}に{縛|しば}られていたのでは{見|み}えてこないものへと{心|こころ}を{開|ひら}いていなければならない。ちょっとした{季節|きせつ}の{移|うつ}り{変|か}わり、{鳥|とり}の{声|こえ}、ここちよい{風|かぜ}、{店先|みせさき}からパンを{焼|や}くにおいなどが{漂|ただよ}ってくると、それだけで{幸|しあわ}せな{気持|きも}ちになる。{人生|じんせい}にも、こんな{味|あじ}わいがあるだろう。

（{注|ちゅう}）{対極|たいきょく}：{反対|はんたい}の{位置|いち}`,
      arti: `Bukankah sayang jika hidup hanya diisi dengan berlari menuju tempat tujuan? Saya suka berjalan-jalan, dan berjalan-jalan itu berada di kutub yang berlawanan (catatan) dengan maju terus menuju garis akhir. Justru kita harus membuka hati terhadap hal-hal yang tidak akan terlihat jika terikat pada tujuan. Perubahan musim yang kecil, kicau burung, angin yang sejuk, atau aroma roti dipanggang yang tercium dari depan toko, itu saja sudah membuat hati bahagia. Hidup pun tentu memiliki cita rasa seperti ini.

(Catatan) 対極: posisi yang berlawanan`,
    },
    "8-3": {
      yomi: `{子|こ}どもたちは、{教師|きょうし}から「{自分|じぶん}で{考|かんが}えなさい」「{人|ひと}の{真似|まね}をしてはいけません」ということを{明示的|めいじてき}にも、{暗黙的|あんもくてき}にも{示|しめ}されると、「{人|ひと}の{真似|まね}ではない」という「{真似|まね}」をすることを{学|まな}ぶようになる。{例|たと}えば、{自分|じぶん}{自身|じしん}の{気持|きも}ちとは{裏腹|うらはら}に、あえて「{人|ひと}とは{異|こと}なる{発言|はつげん}、あるいは{行動|こうどう}をする」ことを{学|まな}んでいく。この{学|まな}びが{模倣|もほう}ではないとどうして{言|い}えようか。{一見|いっけん}{個性的|こせいてき}、{一見|いっけん}{創造的|そうぞうてき}に{見|み}える{仮面|かめん}をつけた{模倣|もほう}は、{明|あき}らかな「{形|かたち}」の{模倣|もほう}とは{異|こと}なる{故|ゆえ}に、その{実体|じったい}が{見|み}えにくい。`,
      arti: `Ketika anak-anak ditunjukkan oleh guru, baik secara eksplisit maupun implisit, bahwa "berpikirlah sendiri" dan "jangan meniru orang lain", mereka belajar melakukan "peniruan" yang berupa "tidak meniru orang lain". Misalnya, berlawanan dengan perasaan mereka sendiri, mereka belajar untuk sengaja "berbicara atau bertindak berbeda dari orang lain". Bagaimana bisa dikatakan bahwa pembelajaran ini bukan peniruan? Peniruan bertopeng yang sekilas tampak unik dan kreatif berbeda dengan peniruan "bentuk" yang jelas, sehingga wujud aslinya sulit terlihat.`,
    },
    "8-4": {
      yomi: `かつては「{必要|ひつよう}は{発明|はつめい}の{母|はは}」であった。{技術|ぎじゅつ}は{物質的|ぶっしつてき}な{欲望|よくぼう}から{出発|しゅっぱつ}したのは{事実|じじつ}だが、「{必要|ひつよう}」という{精神|せいしん}の{飢|う}えが「{発明|はつめい}」という{物質的|ぶっしつてき}{生産|せいさん}へと{導|みちび}いたことを{忘|わす}れてはならない。{精神|せいしん}が{物質|ぶっしつ}をコントロールしていたのだ。しかし、{現代|げんだい}は「{発明|はつめい}は{必要|ひつよう}の{母|はは}」となった。「{発明|はつめい}」{品|ひん}を{改良|かいりょう}して{新|あら}たな{機能|きのう}を{付加|ふか}することにより、{人々|ひとびと}に「{必要|ひつよう}」であったと{錯覚|さっかく}させ、{消費|しょうひ}を{加速|かそく}したのである。{必要|ひつよう}と{発明|はつめい}の{関係|かんけい}が{逆転|ぎゃくてん}し、{物質|ぶっしつ}が{精神|せいしん}を{先導|せんどう}するようになったと{言|い}える。`,
      arti: `Dulu, "kebutuhan adalah ibu dari penemuan". Memang benar teknologi berangkat dari keinginan materi, tetapi jangan lupa bahwa kelaparan jiwa yang bernama "kebutuhan" itulah yang menuntun pada produksi materi yang bernama "penemuan". Jiwa mengendalikan materi. Namun, kini "penemuan menjadi ibu dari kebutuhan". Dengan menyempurnakan barang "temuan" dan menambahkan fungsi baru, orang dibuat salah mengira bahwa barang itu "dibutuhkan", sehingga konsumsi dipercepat. Bisa dikatakan bahwa hubungan antara kebutuhan dan penemuan terbalik, dan materi kini memimpin jiwa.`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{私|わたし}たちは{頭|あたま}の{中|なか}で「{考|かんが}える」とき、{決|けっ}して{論文|ろんぶん}のように{筋道|すじみち}の{立|た}った{記述|きじゅつ}のように{考|かんが}えるわけではない。たとえば{私|わたし}の{評論|ひょうろん}を{書|か}くときの{経験|けいけん}では、{論旨|ろんし}のエッセンスとなるような{直感|ちょっかん}とか、ハイライト（{注|ちゅう}1）{部分|ぶぶん}の“{決|き}め”になるようなフレーズ（{注|ちゅう}2）を{思|おも}いついたときに「これは{書|か}ける」なんてわくわくして{思|おも}い{立|た}つのである。つまり、その{瞬間|しゅんかん}の{頭|あたま}に{浮|う}かんだものは、ばらばらな{断片|だんぺん}と{大|おお}まかな{展望|てんぼう}に{他|ほか}ならない。そのピンポイント（{注|ちゅう}3）の{断片|だんぺん}と{他|ほか}の{断片|だんぺん}との{間|あいだ}を、スムーズな{説得力|せっとくりょく}のある{流|なが}れになるように{継|つ}ぎ{足|た}していく{作業|さぎょう}が「{書|か}く」という{仕事|しごと}である。

しかし、スムーズにつなぐことに{集中|しゅうちゅう}しすぎると、もとの{目的地|もくてきち}から{逸|そ}れた{方向|ほうこう}へ{論旨|ろんし}が{勝手|かって}に{伸|の}びていってしまうことが、まま（{注|ちゅう}4）ある。（{中略|ちゅうりゃく}）ひとは{書|か}こうとしていたことをきちんと{書|か}けるわけではなくて、むしろ{積|つ}み{木|き}のように{書|か}き{足|た}しているうちに、{最初|さいしょ}は{書|か}こうともしていなかったことを{知|し}らず{知|し}らずに{書|か}いてしまうことが{少|すく}なくないのである。そのくせ{書|か}き{上|あ}げてしまうと「そうか、{自分|じぶん}はこういうことを{考|かんが}えていたんだ」などと{思|おも}えてくるから{不思議|ふしぎ}だ。

{私|わたし}たちの{意識|いしき}は、{言葉|ことば}とイメージの{網|あみ}の{目|め}をふわふわ{漂|ただよ}っているようなものである。それが{言葉|ことば}や{文章|ぶんしょう}に{定着|ていちゃく}したとき、「{考|かんが}え」というものになる。{言葉|ことば}を{抜|ぬ}きにして「{考|かんが}え」は{存在|そんざい}しない。{順序|じゅんじょ}として「{考|かんが}え」がもともとあったから{言葉|ことば}が{出|で}てくるのだと{思|おも}いがちだが、{逆|ぎゃく}に{言葉|ことば}が{出|で}てきて{初|はじ}めて「{考|かんが}え」ははっきりするものなのである。だから{言葉|ことば}の{運動|うんどう}が{勝手|かって}に{作|つく}り{上|あ}げてしまった{論旨|ろんし}が、いつのまにか{自分|じぶん}の「{考|かんが}え」になってしまうという{現象|げんしょう}が{起|お}こるわけだ。
（{注|ちゅう}1）ハイライト{部分|ぶぶん}：ここでは、{重要|じゅうよう}な{部分|ぶぶん}
（{注|ちゅう}2）フレーズ：ここでは、{言葉|ことば}や{表現|ひょうげん}
（{注|ちゅう}3）ピンポイントの：ここでは、{中心|ちゅうしん}となる
（{注|ちゅう}4）まま：{時々|ときどき}`,
      arti: `Ketika kita "berpikir" di dalam kepala, kita sama sekali tidak berpikir seperti uraian yang runtut layaknya makalah. Misalnya, dari pengalaman saya saat menulis kritik, ketika terlintas intuisi yang menjadi inti argumen atau frasa (catatan 2) yang menjadi "penentu" di bagian sorotan (catatan 1), saya bersemangat dan tergerak, "Ini bisa ditulis." Artinya, yang muncul di kepala pada saat itu tidak lain adalah potongan-potongan terpisah dan gambaran kasar. Pekerjaan "menulis" adalah menyambung potongan inti (catatan 3) itu dengan potongan lain agar menjadi alur yang mulus dan meyakinkan.

Namun, jika terlalu fokus menyambung dengan mulus, kadang-kadang (catatan 4) argumen memanjang sendiri ke arah yang menyimpang dari tujuan semula. (Bagian dihilangkan) Orang tidak selalu bisa menulis dengan tepat apa yang ingin ditulisnya; justru tidak jarang, sambil menambah tulisan seperti menyusun balok mainan, tanpa sadar ia menuliskan hal yang awalnya sama sekali tidak ingin ditulis. Anehnya, begitu tulisan selesai, terasa seperti, "Oh begitu, ternyata aku memikirkan hal seperti ini."

Kesadaran kita bagaikan melayang-layang di jaring kata dan citra. Ketika itu melekat menjadi kata atau kalimat, ia menjadi sesuatu yang disebut "pikiran". Tanpa kata-kata, "pikiran" tidak ada. Kita cenderung mengira urutannya adalah karena "pikiran" sudah ada sejak awal, maka kata-kata keluar; padahal sebaliknya, "pikiran" baru menjadi jelas setelah kata-kata keluar. Karena itulah terjadi fenomena di mana argumen yang dibangun sendiri oleh gerak kata-kata tanpa disadari menjadi "pikiran" kita sendiri.
(Catatan 1) ハイライト部分: di sini, bagian penting
(Catatan 2) フレーズ: di sini, kata atau ungkapan
(Catatan 3) ピンポイントの: di sini, yang menjadi inti
(Catatan 4) まま: kadang-kadang`,
    },
    "9-2": {
      yomi: `イギリスの{科学|かがく}{誌|し}『ネイチャー』の{最近|さいきん}の{号|ごう}に、カエルの{種|しゅ}{多様性|たようせい}と{寄生虫|きせいちゅう}の{感染率|かんせんりつ}についての{論文|ろんぶん}が{載|の}っています。カエルの{全数|ぜんすう}は{同|おな}じで、{特定|とくてい}の1{種類|しゅるい}しかいない{場合|ばあい}と、{数|すう}{種類|しゅるい}のカエルが{共存|きょうぞん}する{場合|ばあい}で、ある{種|しゅ}のカエルが{寄生虫|きせいちゅう}に{感染|かんせん}して{発病|はつびょう}する{割合|わりあい}は、{前者|ぜんしゃ}のケースのほうが{高|たか}いという{内容|ないよう}です。つまり{多様性|たようせい}が{高|たか}いと{特定|とくてい}の{種|しゅ}が{病気|びょうき}になる{割合|わりあい}が{下|さ}がるというのです。

（{中略|ちゅうりゃく}）

{他|た}の{種|しゅ}が{存在|そんざい}することによって{自分|じぶん}が{病気|びょうき}になる{確率|かくりつ}が{下|さ}がるとするのなら、それぞれの{種|しゅ}は{互|たが}いの{種|しゅ}を{競争|きょうそう}で{滅|ほろ}ぼしてしまわないほうが{自分|じぶん}も{得|とく}をします。もしかすると、{自分|じぶん}たちの{使|つか}う{資源|しげん}を{他|た}の{種|しゅ}に{譲|ゆず}ってでも、それを{存続|そんぞく}させることが{有利|ゆうり}になるかもしれません。アリのような{種|しゅ}{内|ない}での{協力|きょうりょく}と{同様|どうよう}、いくつもの{種|しゅ}がコストを{払|はら}って{共存|きょうぞん}し{合|あ}うことで、それぞれの{種|しゅ}が{得|とく}をしている{可能性|かのうせい}があります。{種|しゅ}のレベルを{超|こ}えた{協力|きょうりょく}と{言|い}えるかもしれません。

この{話|はなし}がさらに{面白|おもしろ}いのは、それが{寄生虫|きせいちゅう}という、カエルを{滅|ほろ}ぼしかねない{要因|よういん}とリンクして{起|お}こっている{点|てん}です。{寄生虫|きせいちゅう}の{側|がわ}から{見|み}た{場合|ばあい}、{感受性|かんじゅせい}の（{感染|かんせん}する）カエル1{種|しゅ}だけのときは、どの{個体|こたい}へも{感染|かんせん}でき、そこで{成長|せいちょう}できますから、{短期的|たんきてき}な{寄生虫|きせいちゅう}の{増殖率|ぞうしょくりつ}は{高|たか}くなるでしょう。しかし、{全部|ぜんぶ}のカエルに{感染|かんせん}して{殺|ころ}してしまうと{寄生|きせい}できる{相手|あいて}がいなくなるため、{寄生虫|きせいちゅう}も{滅|ほろ}びなくてはならなくなります。したがって、いろいろなカエルがいることは、{寄生虫|きせいちゅう}にとっても、{自身|じしん}の{長期的|ちょうきてき}{存続|そんぞく}を{可能|かのう}にするメカニズムとして{働|はたら}いているのです。`,
      arti: `Edisi terbaru jurnal sains Inggris "Nature" memuat makalah tentang keragaman spesies katak dan tingkat infeksi parasit. Isinya: dengan jumlah total katak yang sama, antara kasus di mana hanya ada satu jenis tertentu dan kasus di mana beberapa jenis katak hidup berdampingan, persentase katak suatu spesies yang terinfeksi parasit lalu jatuh sakit lebih tinggi pada kasus pertama. Artinya, jika keragamannya tinggi, persentase spesies tertentu jatuh sakit menurun.

(Bagian dihilangkan)

Jika keberadaan spesies lain menurunkan peluang diri sendiri jatuh sakit, maka setiap spesies juga diuntungkan bila tidak saling memusnahkan lewat persaingan. Bahkan mungkin, menyerahkan sebagian sumber daya yang dipakai sendiri kepada spesies lain demi kelangsungannya justru menguntungkan. Seperti kerja sama di dalam satu spesies pada semut, ada kemungkinan banyak spesies saling hidup berdampingan dengan menanggung biaya sehingga masing-masing spesies diuntungkan. Mungkin bisa disebut kerja sama yang melampaui tingkat spesies.

Yang lebih menarik dari cerita ini adalah bahwa hal itu terjadi dalam kaitannya dengan parasit, faktor yang bisa memusnahkan katak. Dilihat dari sisi parasit, jika hanya ada satu jenis katak yang rentan (bisa terinfeksi), parasit bisa menginfeksi individu mana pun dan tumbuh di sana, sehingga laju perkembangbiakan parasit dalam jangka pendek akan tinggi. Namun, jika semua katak terinfeksi dan mati, tidak ada lagi inang untuk ditumpangi, sehingga parasit pun harus punah. Karena itu, keberadaan berbagai macam katak juga berfungsi bagi parasit sebagai mekanisme yang memungkinkan kelangsungan hidupnya dalam jangka panjang.`,
    },
    "9-3": {
      yomi: `{今|いま}、モノづくりの{過程|かてい}を「{見|み}える{化|か}」と{称|しょう}して{可視化|かしか}（{注|ちゅう}1）、{数値化|すうちか}し、{技|わざ}やノウハウを{共有化|きょうゆうか}したり、さらには{自動化|じどうか}して{人|ひと}を{減|へ}らそうという{動|うご}きが{盛|さか}んになっています。けれど、この{過程|かてい}には{大|おお}きな{危険|きけん}が{潜|ひそ}んでいることを{認識|にんしき}しなくてはなりません。

モノづくりには、{手|て}づくり、{手作業|てさぎょう}の{要素|ようそ}が{非常|ひじょう}に{重要|じゅうよう}です。{経験|けいけん}、{勘|かん}に{基|もと}づく{技|わざ}は{体|からだ}で{覚|おぼ}えるしかありません。{見|み}える{化|か}しようとすると、すべての{作業|さぎょう}をデジタル{的|てき}に{数値化|すうちか}することになります。しかし、{勘|かん}や{経験|けいけん}による{手作業|てさぎょう}は{数値化|すうちか}できません。また、どんな{思|おも}いを{込|こ}め、どんな{気持|きも}ちでつくっているかという{心|こころ}の{部分|ぶぶん}は{数値|すうち}にしようがありません。

（{中略|ちゅうりゃく}）

{見|み}える{化|か}の{過程|かてい}には「{省略|しょうりゃく}」と「{変形|へんけい}」が{起|お}きる{危険性|きけんせい}があります。{怖|こわ}いのは、{一度|いちど}、{仕組|しく}みができ{上|あ}がると、それが{元|もと}の{実態|じったい}であるかのような{錯覚|さっかく}を{起|お}こし、{一人歩|ひとりある}きしてしまうことです。{見|み}える{化|か}されたものは、{元々|もともと}の{姿|すがた}からアナログの{部分|ぶぶん}が{省略|しょうりゃく}され、{変形|へんけい}しているのです。これに{気付|きづ}かなければなりません。

もう{一|ひと}つの{危険|きけん}は{創造|そうぞう}が{起|お}きなくなることです。ある{職人|しょくにん}の{技|わざ}があったとします。これを{見|み}える{化|か}しても、そこからは{何|なに}も{新|あたら}しいものや{価値|かち}が{生|う}まれているわけではありません。

{匠|たくみ}（{注|ちゅう}2）の{技|わざ}とは、{自分|じぶん}で{経験|けいけん}を{積|つ}み、{手|て}で{触|さわ}り、{頭|あたま}で{考|かんが}えている{中|なか}で、「こうしたほうがいい」「こんなやり{方|かた}があるな」と{気付|きづ}き{培|つちか}ってきたものです。つまり、{手作業|てさぎょう}のプロセスの{中|なか}にこそ{創造|そうぞう}があるのです。

{今|いま}のやり{方|かた}を{見|み}える{化|か}、{自動化|じどうか}し、{手作業|てさぎょう}のプロセスを{抜|ぬ}いてしまえば、{新|あたら}しい{技術|ぎじゅつ}は{生|う}まれません。
（{注|ちゅう}1）{可視化|かしか}する：{目|め}に{見|み}えるようにする
（{注|ちゅう}2）{匠|たくみ}：{優|すぐ}れた{職人|しょくにん}`,
      arti: `Kini sedang marak gerakan memvisualisasikan (catatan 1) dan mengangkakan proses pembuatan barang dengan sebutan "membuatnya terlihat", membagikan keterampilan dan pengetahuan praktis, bahkan mengotomatiskannya untuk mengurangi tenaga manusia. Namun, kita harus menyadari bahwa dalam proses ini tersembunyi bahaya besar.

Dalam pembuatan barang, unsur buatan tangan dan kerja tangan sangat penting. Keterampilan yang berdasarkan pengalaman dan intuisi hanya bisa dikuasai dengan tubuh. Jika ingin membuatnya terlihat, semua pekerjaan harus diangkakan secara digital. Namun, kerja tangan berdasarkan intuisi dan pengalaman tidak bisa diangkakan. Selain itu, bagian hati, yaitu dengan perasaan dan semangat seperti apa barang itu dibuat, tidak mungkin dijadikan angka.

(Bagian dihilangkan)

Dalam proses membuatnya terlihat, ada bahaya terjadinya "penghilangan" dan "perubahan bentuk". Yang menakutkan adalah begitu sistemnya terbentuk, orang salah mengira itulah kenyataan aslinya, lalu sistem itu berjalan sendiri. Hal yang sudah dibuat terlihat telah kehilangan bagian analognya dari wujud aslinya dan sudah berubah bentuk. Kita harus menyadari hal ini.

Bahaya lainnya adalah kreasi tidak lagi terjadi. Misalkan ada keterampilan seorang perajin. Meski dibuat terlihat, tidak ada hal atau nilai baru yang lahir darinya.

Keterampilan seorang maestro (catatan 2) adalah sesuatu yang dipupuk dari kesadaran seperti "sebaiknya begini" atau "ada cara seperti ini ya" sambil menumpuk pengalaman sendiri, menyentuh dengan tangan, dan berpikir dengan kepala. Artinya, justru di dalam proses kerja tangan itulah ada kreasi.

Jika cara kerja sekarang dibuat terlihat dan diotomatiskan sehingga proses kerja tangan dihilangkan, teknologi baru tidak akan lahir.
(Catatan 1) 可視化する: membuat terlihat oleh mata
(Catatan 2) 匠: perajin yang unggul`,
    },

    // ── 問題10：脳科学とメディア ──
    "10": {
      yomi: `{脳|のう}{科学|かがく}はヒトそのものの{仕組|しく}みを{明|あき}らかにしようとする{学問|がくもん}です。そのため、その{成|な}り{立|た}ちから{人々|ひとびと}の{耳目|じもく}を{引|ひ}く（{注|ちゅう}1）ように{運命|うんめい}づけられていると{言|い}えます。{脳|のう}{科学|かがく}は、{誰|だれ}もが{青春|せいしゅん}の{一時期|いちじき}に{悩|なや}む「{自分|じぶん}って{何|なん}だろう」という{疑問|ぎもん}に{科学|かがく}の{力|ちから}で{挑|いど}むという、{考|かんが}えてみたら{少|すこ}し{青臭|あおくさ}い（{注|ちゅう}2）{学問|がくもん}だったりするのです。

だからというわけではありませんが、{人々|ひとびと}の{口|くち}に{上|のぼ}りやすく、そのため{伝搬|でんぱん}のスピードも{他|た}の{学問|がくもん}と{比|くら}べて{早|はや}いように{思|おも}います。{特|とく}に、{自己|じこ}の{知覚|ちかく}の{裏|うら}をかかれる（{注|ちゅう}3）ようなさまざまな{現象|げんしょう}、たとえば{錯視|さくし}{現象|げんしょう}や{無意識|むいしき}と{意識|いしき}の{話|はなし}などは、{自己|じこ}{恒常性|こうじょうせい}、つまり{自分|じぶん}がいつも{自分|じぶん}であり{続|つづ}けることに{関|かか}わるだけに、{他|た}のどんな{科学|かがく}より{人々|ひとびと}の{気持|きも}ちを{鷲掴|わしづか}みにします（{注|ちゅう}4）。そのせいで、{脳|のう}{機能|きのう}を{理解|りかい}する{前|まえ}に{現象|げんしょう}だけが{先走|さきばし}って{人々|ひとびと}の{間|あいだ}に{広|ひろ}がっていくことも{多|おお}い{学問|がくもん}です。もちろん、それは{何|なに}より{面白|おもしろ}いからです。

そんな{脳|のう}{科学|かがく}も、{昨今|さっこん}の{説明|せつめい}{責任|せきにん}という{考|かんが}え{方|かた}や{社会|しゃかい}{還元|かんげん}という{意味合|いみあ}いで、{一般|いっぱん}の{人々|ひとびと}へなんとか{知見|ちけん}のフィードバック（{注|ちゅう}5）をしなければならない{圧力|あつりょく}にさらされています。{少|すこ}し{前|まえ}には、{脳|のう}{科学|かがく}の{研究|けんきゅう}{成果|せいか}が{新聞|しんぶん}に{掲載|けいさい}されることはあまりありませんでしたが、{今|いま}ではプレスリリース（{注|ちゅう}6）も{当|あ}たり{前|まえ}に{行|おこな}われますし、そこではできるだけ{面白|おもしろ}く{人々|ひとびと}の{興味|きょうみ}をひきつけるストーリーを{作|つく}りがちになります。{本当|ほんとう}はそういう{色気|いろけ}は{基礎|きそ}{科学|かがく}に{馴染|なじ}まないのですが、メディアからの{要請|ようせい}があると、{僕|ぼく}たちはなんとかそれに{応|こた}えようとして、{浅薄|せんぱく}な{脚色|きゃくしょく}をして{本当|ほんとう}の{面白|おもしろ}さをゆがめてしまいがちになります。

そういう「メディア{対応|たいおう}」と{呼|よ}ばれる{技術|ぎじゅつ}も{科学者|かがくしゃ}に{必要|ひつよう}とされている{現代|げんだい}は、ある{意味|いみ}で{科学者|かがくしゃ}にとって{不幸|ふこう}な{時代|じだい}なのかもしれません。

（{中略|ちゅうりゃく}）

{昨今|さっこん}の{過剰|かじょう}なメディアの{脳|のう}{科学|かがく}の{取|と}り{上|あ}げ{方|かた}は、{科学者|かがくしゃ}の{説明|せつめい}{責任|せきにん}を{遥|はる}かに{逸脱|いつだつ}したレベルであるように{思|おも}えるのです。そういうメディアの{要求|ようきゅう}に、{誠実|せいじつ}に{対応|たいおう}しようとすればするほど、{科学者|かがくしゃ}は{自分|じぶん}をすり{減|へ}らすことになるでしょうし、だんだんと{科学|かがく}の{現場|げんば}から{乖離|かいり}せざるを{得|え}なくなるでしょう。それは、{優秀|ゆうしゅう}な{科学者|かがくしゃ}を{潰|つぶ}すことになります。

{科学者|かがくしゃ}の{価値|かち}は、{何|なに}よりも{科学|かがく}の{現場|げんば}に{居続|いつづ}けることにあります。{科学的|かがくてき}{知見|ちけん}に{裏打|うらう}ちされない（{注|ちゅう}7）{空論|くうろん}を{弄|もてあそ}ぶのではなく、{常|つね}に{研究|けんきゅう}の{現場|げんば}に{自分|じぶん}をつなぎ{止|と}め、{足|あし}を{杭|くい}で{打|う}ち{付|つ}けてでも{科学|かがく}の{現実|げんじつ}から{離|はな}れないようにすること。そういう{決意|けつい}をもってメディアに{対応|たいおう}するのであれば、フワフワと{遠|とお}くに{行|い}ってしまうことはないでしょう。
（{注|ちゅう}1）{耳目|じもく}を{引|ひ}く：{注意|ちゅうい}を{引|ひ}く
（{注|ちゅう}2）{青臭|あおくさ}い：ここでは、{純粋|じゅんすい}すぎる
（{注|ちゅう}3）{自己|じこ}の{知覚|ちかく}の{裏|うら}をかかれる：ここでは、{自分|じぶん}が{思|おも}いもしなかった
（{注|ちゅう}4）{鷲掴|わしづか}みにする：ここでは、{強|つよ}く{掴|つか}む
（{注|ちゅう}5）フィードバック：{還元|かんげん}
（{注|ちゅう}6）プレスリリース：メディア{向|む}けの{公式|こうしき}{発表|はっぴょう}
（{注|ちゅう}7）〜に{裏打|うらう}ちされる：〜に{裏|うら}づけられる`,
      arti: `Ilmu otak adalah ilmu yang berusaha mengungkap mekanisme manusia itu sendiri. Karena itu, sejak awal kelahirannya bisa dikatakan sudah ditakdirkan untuk menarik perhatian (catatan 1) orang. Ilmu otak, kalau dipikir-pikir, adalah ilmu yang agak naif (catatan 2), karena menantang dengan kekuatan sains pertanyaan "aku ini apa?" yang dirisaukan semua orang pada suatu masa remajanya.

Bukan berarti karena itu, tetapi ilmu otak mudah menjadi buah bibir, sehingga menurut saya kecepatan penyebarannya pun lebih cepat dibanding ilmu lain. Terutama berbagai fenomena yang mengecoh persepsi diri (catatan 3), misalnya fenomena ilusi optik atau cerita tentang bawah sadar dan kesadaran, justru karena berkaitan dengan keajekan diri, yaitu diri kita selalu tetap menjadi diri kita, mencengkeram (catatan 4) hati orang lebih kuat daripada sains mana pun. Akibatnya, ilmu ini sering kali hanya fenomenanya yang berlari mendahului dan menyebar di masyarakat sebelum fungsi otak dipahami. Tentu saja, itu karena ilmu ini sangat menarik.

Ilmu otak seperti itu pun kini, karena gagasan akuntabilitas dan makna pengembalian manfaat kepada masyarakat, mendapat tekanan untuk bagaimanapun memberikan umpan balik (catatan 5) pengetahuan kepada masyarakat umum. Belum lama ini, hasil penelitian ilmu otak jarang dimuat di koran, tetapi sekarang siaran pers (catatan 6) sudah menjadi hal biasa, dan di sana kita cenderung membuat cerita yang semenarik mungkin untuk memikat minat orang. Sebenarnya ambisi seperti itu tidak cocok dengan ilmu dasar, tetapi jika ada permintaan dari media, kami berusaha memenuhinya, lalu cenderung memberi dramatisasi dangkal yang mendistorsi daya tarik yang sebenarnya.

Zaman sekarang, ketika keterampilan yang disebut "melayani media" pun dituntut dari ilmuwan, dalam arti tertentu mungkin merupakan zaman yang malang bagi ilmuwan.

(Bagian dihilangkan)

Cara media mengangkat ilmu otak secara berlebihan akhir-akhir ini tampaknya sudah jauh melampaui batas akuntabilitas ilmuwan. Semakin ilmuwan berusaha melayani tuntutan media seperti itu dengan tulus, semakin ia akan menguras dirinya, dan lambat laun mau tak mau menjauh dari dunia penelitian. Itu akan menghancurkan ilmuwan yang unggul.

Nilai seorang ilmuwan terutama terletak pada keberadaannya yang terus di dunia penelitian. Bukan bermain-main dengan teori kosong yang tidak didukung (catatan 7) pengetahuan ilmiah, melainkan selalu menambatkan diri di dunia penelitian, dan tidak menjauh dari kenyataan sains meski harus memaku kaki dengan pasak. Jika melayani media dengan tekad seperti itu, kita tidak akan melayang-layang pergi jauh.
(Catatan 1) 耳目を引く: menarik perhatian
(Catatan 2) 青臭い: di sini, terlalu murni/naif
(Catatan 3) 自己の知覚の裏をかかれる: di sini, sesuatu yang tidak pernah terpikirkan
(Catatan 4) 鷲掴みにする: di sini, mencengkeram dengan kuat
(Catatan 5) フィードバック: pengembalian (manfaat)
(Catatan 6) プレスリリース: pengumuman resmi untuk media
(Catatan 7) 〜に裏打ちされる: didukung oleh ～`,
    },

    // ── 問題11：褒めること ──
    "11": {
      yomi: `【{意見|いけん} A】
{褒|ほ}めれば{人|ひと}は{育|そだ}つといいます。{確|たし}かに{人間|にんげん}は{叱|しか}られるより、{認|みと}められたり{褒|ほ}められたほうが{嬉|うれ}しいに{決|き}まっていますし、「よし、{次|つぎ}もがんばろう」とやる{気|き}も{出|で}るものです。リーダーだって、{普段|ふだん}からガミガミ{言|い}うより、{部下|ぶか}を{褒|ほ}めるほうが{自分|じぶん}{自身|じしん}の{気分|きぶん}も{良|よ}いでしょう。

しかし{褒|ほ}めてばかりいると、{今度|こんど}は{思|おも}わぬ{弊害|へいがい}が{出|で}てくると{私|わたし}は{考|かんが}えています。{確|たし}かに{部下|ぶか}の{士気|しき}は{上|あ}がるのですが、{逆|ぎゃく}に{褒|ほ}められることが{目的|もくてき}になりかねない。「お{前|まえ}は{偉|えら}いな」と{課長|かちょう}に{褒|ほ}められたいから、{仕事|しごと}を{一生懸命|いっしょうけんめい}にやるようになってしまうのです。

（{中略|ちゅうりゃく}）

「{良|よ}くやった」「{偉|えら}いな」などという{言葉|ことば}は、たまに{言|い}うから{効果的|こうかてき}なのであって、{日常的|にちじょうてき}に{口|くち}にしていたら{効果|こうか}は{半減|はんげん}してしまうでしょう。{要|よう}は{褒|ほ}めるところと{叱|しか}るところ、リーダーはいつも{人|ひと}を{見|み}てバランスを{考|かんが}えなくてはなりません。

【{意見|いけん} B】
{部下|ぶか}のやる{気|き}を{引|ひ}き{出|だ}すようにうまく{褒|ほ}めるのは{難|むずか}しい。{的外|まとはず}れな{褒|ほ}め{方|かた}をすれば「{自分|じぶん}をよく{見|み}ていない」と{不信感|ふしんかん}を{抱|いだ}かせてしまうし、{皆|みな}の{前|まえ}で{特定|とくてい}の{人|ひと}ばかりを{褒|ほ}めれば、チーム{内|ない}の{関係|かんけい}が{悪化|あっか}してしまうこともある。さらに{褒|ほ}め{続|つづ}けることで、{部下|ぶか}が、{仕事|しごと}への{責任感|せきにんかん}や{使命感|しめいかん}からではなく、{上司|じょうし}に{褒|ほ}められることを{目的|もくてき}にがんばるという{状態|じょうたい}になってしまう{恐|おそ}れがある。

このような{事態|じたい}を{避|さ}けるために、{上司|じょうし}には{適切|てきせつ}に{褒|ほ}める{技術|ぎじゅつ}が{求|もと}められる。{部下|ぶか}が{良|よ}い{仕事|しごと}をしたら、タイミングを{逃|のが}さずその{場|ば}で{褒|ほ}めることが{効果的|こうかてき}だ。また、{成果|せいか}だけを{褒|ほ}めるのではなく、{仕事|しごと}の{過程|かてい}の{中|なか}で{何|なに}が{良|よ}かったかを{取|と}り{上|あ}げて{褒|ほ}めることが{重要|じゅうよう}だ。そうすれば、{部下|ぶか}も{評価|ひょうか}された{点|てん}を{明確|めいかく}に{自覚|じかく}でき、{次|つぎ}の{仕事|しごと}につなげやすくなる。`,
      arti: `[Pendapat A]
Katanya, orang akan berkembang kalau dipuji. Memang manusia pasti lebih senang diakui atau dipuji daripada dimarahi, dan jadi termotivasi, "Oke, lain kali juga aku akan berusaha." Seorang pemimpin pun tentu lebih senang hatinya kalau memuji bawahan daripada sehari-hari mengomel.

Namun, menurut saya kalau terus-menerus memuji, kali ini akan muncul dampak buruk yang tak terduga. Memang semangat bawahan meningkat, tetapi sebaliknya, dipuji bisa menjadi tujuan. Mereka jadi bekerja keras karena ingin dipuji kepala bagian, "Kamu hebat ya."

(Bagian dihilangkan)

Kata-kata seperti "Kerja bagus" atau "Hebat ya" efektif justru karena sesekali diucapkan; kalau diucapkan setiap hari, efeknya akan berkurang separuh. Intinya, kapan memuji dan kapan memarahi, pemimpin harus selalu melihat orangnya dan memikirkan keseimbangannya.

[Pendapat B]
Memuji dengan baik agar memunculkan motivasi bawahan itu sulit. Kalau cara memujinya meleset, bawahan jadi tidak percaya, "Dia tidak benar-benar memperhatikanku", dan kalau di depan semua orang hanya memuji orang tertentu, hubungan dalam tim bisa memburuk. Lebih jauh lagi, dengan terus memuji, ada kekhawatiran bawahan bekerja keras bukan karena rasa tanggung jawab atau rasa misi terhadap pekerjaan, melainkan demi dipuji atasan.

Untuk menghindari keadaan seperti itu, atasan dituntut memiliki keterampilan memuji dengan tepat. Jika bawahan melakukan pekerjaan yang baik, memujinya saat itu juga tanpa melewatkan momen adalah cara yang efektif. Selain itu, penting untuk tidak hanya memuji hasil, tetapi mengangkat dan memuji apa yang baik dalam proses kerja. Dengan begitu, bawahan pun bisa menyadari dengan jelas poin yang dinilai, dan lebih mudah menerapkannya pada pekerjaan berikutnya.`,
    },

    // ── 問題12：貨幣と人間性 ──
    "12": {
      yomi: `{交換|こうかん}と{交易|こうえき}（{注|ちゅう}1）の{歴史|れきし}は{非常|ひじょう}に{古|ふる}く、{何万年|なんまんねん}も{前|まえ}までさかのぼれるようだが、{貨幣|かへい}{経済|けいざい}は{進化|しんか}{史|し}{的|てき}に{言|い}えばごく{最近|さいきん}のことである。どんなものにでも{変|か}えることができる{抽象的|ちゅうしょうてき}な{価値|かち}とは、とんでもない{発明|はつめい}だと{思|おも}う。（{中略|ちゅうりゃく}）

それは、{貨幣|かへい}というものが、{確|たし}かに{人間|にんげん}の{生活|せいかつ}を{変|か}え、{世界|せかい}を{見|み}る{目|め}を{変|か}え、{欲望|よくぼう}のあり{方|かた}を{変|か}え、{人生観|じんせいかん}を{変|か}え、{結局|けっきょく}のところ{人間性|にんげんせい}を{変|か}えてきているように{思|おも}うからだ。{貨幣|かへい}{経済|けいざい}の{真|ま}っただ{中|なか}で{暮|く}らしている{私|わたし}たちにとって、{貨幣|かへい}は{当|あ}たり{前|まえ}の{存在|そんざい}だが、ヒトという{生物|せいぶつ}にとって、こんなものの{存在|そんざい}は{決|けっ}して{当|あ}たり{前|まえ}ではなかった。そして、{大量|たいりょう}の{砂糖|さとう}や{脂肪|しぼう}の{存在|そんざい}に{私|わたし}たちの{脳|のう}も{体|からだ}もうまく{対応|たいおう}できていないのと{同|おな}じく、この{貨幣|かへい}という{存在|そんざい}にも、{実|じつ}は{私|わたし}たちの{脳|のう}はうまく{対応|たいおう}できていないのではないだろうか？

ヒトが{狩猟|しゅりょう}{採集|さいしゅう}{生活|せいかつ}をしていた{頃|ころ}、ヒトは{自分|じぶん}たちの{手|て}で{集|あつ}められる{食料|しょくりょう}を{食|た}べ、{自分|じぶん}たちの{手|て}で{作|つく}れる{道具|どうぐ}や{衣服|いふく}を{使|つか}って{暮|く}らしていた。できることは{限|かぎ}られていたし、{望|のぞ}めることには{限度|げんど}があった。まさに{等身大|とうしんだい}の（{注|ちゅう}2）{生活|せいかつ}である。それ{以上|いじょう}の{世界|せかい}の{可能性|かのうせい}を{知|し}らなければ、{欲望|よくぼう}にも{限|かぎ}りがあった。「{欲|ほ}しい{物|もの}」というのは{具体的|ぐたいてき}な{物|もの}であり、それを{手|て}に{入|い}れる{方法|ほうほう}は{限|かぎ}られていた。そして、ヒトはそのことを{知|し}っていた。

しかし、{何|なに}にでも{交換|こうかん}できる{抽象的|ちゅうしょうてき}な{価値|かち}が{手|て}に{入|はい}るようになると、それ{自体|じたい}を{得|え}たいという{新|あら}たな{欲望|よくぼう}が{生|う}まれる。「{金|かね}の{亡者|もうじゃ}（{注|ちゅう}3）」は、{何|なに}か{特定|とくてい}の{物|もの}が{欲|ほ}しいから{貨幣|かへい}を{得|え}るのではない。ともかく{貨幣|かへい}をためることが{何|なに}にもまして{大事|だいじ}な{目的|もくてき}なのだ。そこには{限度|げんど}がない。

また、{何|なに}にでも{交換|こうかん}できる{抽象的|ちゅうしょうてき}な{価値|かち}は、{人間|にんげん}{関係|かんけい}を{買|か}うことも、{幸|しあわ}せな{気分|きぶん}を{買|か}うこともできる。{貨幣|かへい}がない{時|とき}には、{人間|にんげん}{関係|かんけい}を{築|きず}いていなければできなかったことが、{個別|こべつ}の{人間|にんげん}{関係|かんけい}{抜|ぬ}きに{手|て}に{入|はい}る。{逆|ぎゃく}に、{貨幣|かへい}なしではほとんど{何|なに}もできない。

そして、{今|いま}では、{貨幣|かへい}を{手|て}に{入|い}れることは{一|ひと}つの{職業|しょくぎょう}につくことである。{一|ひと}つの{職場|しょくば}で{一|ひと}つの{仕事|しごと}をし、その{対価|たいか}（{注|ちゅう}4）に{貨幣|かへい}をもらう。そうすると、ヒトは、{自分|じぶん}が{独立|どくりつ}して{生|い}きていると{思|おも}う。{本当|ほんとう}は、{今|いま}でも{狩猟|しゅりょう}{採集|さいしゅう}{生活|せいかつ}{時代|じだい}と{同|おな}じように、みんなで{共同|きょうどう}{作業|さぎょう}をすることで{生|い}きているのだ。{農家|のうか}がいなければお{米|こめ}も{野菜|やさい}もない。{物流|ぶつりゅう}や{商店|しょうてん}がなければ、{買|か}うことができない。{医者|いしゃ}がいなければ{病気|びょうき}を{治|なお}せない。{学校|がっこう}の{先生|せんせい}がいなければ{教育|きょういく}ができない。{今|いま}でも、みんなでともに{生|い}き、{生|い}かされて{暮|く}らしているのだが、それぞれに{貨幣|かへい}が{介在|かいざい}しているので、{共同|きょうどう}という{感覚|かんかく}がなくなる。{便利|べんり}なものには{必|かなら}ず{負|ふ}の{面|めん}がある。ちょっと{立|た}ち{止|ど}まって{考|かんが}えてみた{方|ほう}がよい。
（{注|ちゅう}1）{交易|こうえき}：ここでは、{取|と}り{引|ひ}き
（{注|ちゅう}2）{等身大|とうしんだい}の：その{人|ひと}の{状況|じょうきょう}や{能力|のうりょく}に{合|あ}った
（{注|ちゅう}3）{金|かね}の{亡者|もうじゃ}：{異常|いじょう}に{金銭|きんせん}に{執着|しゅうちゃく}する{人|ひと}
（{注|ちゅう}4）{対価|たいか}：ここでは、{報酬|ほうしゅう}`,
      arti: `Sejarah pertukaran dan perdagangan (catatan 1) sangat tua, tampaknya bisa ditelusuri sampai puluhan ribu tahun lalu, tetapi ekonomi uang, dari sudut sejarah evolusi, adalah hal yang sangat baru. Saya pikir nilai abstrak yang bisa ditukar dengan apa saja adalah penemuan yang luar biasa. (Bagian dihilangkan)

Sebab, menurut saya uang memang telah mengubah kehidupan manusia, mengubah cara memandang dunia, mengubah bentuk keinginan, mengubah pandangan hidup, dan pada akhirnya mengubah sifat manusia. Bagi kita yang hidup di tengah-tengah ekonomi uang, uang adalah keberadaan yang lumrah, tetapi bagi makhluk bernama manusia, keberadaan benda seperti ini sama sekali tidak lumrah. Lalu, sama seperti otak dan tubuh kita belum mampu menyesuaikan diri dengan baik terhadap keberadaan gula dan lemak dalam jumlah besar, bukankah sebenarnya otak kita juga belum mampu menyesuaikan diri dengan baik terhadap keberadaan uang ini?

Ketika manusia hidup berburu dan meramu, manusia memakan makanan yang bisa dikumpulkan dengan tangan sendiri, dan hidup memakai alat serta pakaian yang bisa dibuat dengan tangan sendiri. Yang bisa dilakukan terbatas, dan yang bisa diharapkan ada batasnya. Benar-benar kehidupan yang sesuai ukuran diri (catatan 2). Karena tidak mengetahui kemungkinan dunia di luar itu, keinginan pun ada batasnya. "Barang yang diinginkan" adalah barang yang konkret, dan cara mendapatkannya terbatas. Dan manusia mengetahui hal itu.

Namun, begitu nilai abstrak yang bisa ditukar dengan apa saja bisa diperoleh, lahirlah keinginan baru untuk mendapatkan nilai itu sendiri. "Budak uang (catatan 3)" bukan mencari uang karena menginginkan barang tertentu. Yang penting, menimbun uang adalah tujuan yang lebih utama daripada apa pun. Di situ tidak ada batasnya.

Selain itu, nilai abstrak yang bisa ditukar dengan apa saja juga bisa membeli hubungan antarmanusia dan membeli perasaan bahagia. Hal yang dulu, saat belum ada uang, tidak bisa dilakukan tanpa membangun hubungan antarmanusia, kini bisa didapat tanpa hubungan pribadi. Sebaliknya, tanpa uang hampir tidak ada yang bisa dilakukan.

Dan kini, memperoleh uang berarti memiliki satu pekerjaan. Melakukan satu pekerjaan di satu tempat kerja, lalu menerima uang sebagai imbalannya (catatan 4). Maka, manusia merasa bahwa dirinya hidup mandiri. Padahal sebenarnya, sekarang pun, sama seperti zaman hidup berburu dan meramu, kita hidup dengan bekerja bersama-sama. Tanpa petani tidak ada beras maupun sayur. Tanpa logistik dan toko, kita tidak bisa membeli. Tanpa dokter, penyakit tidak bisa disembuhkan. Tanpa guru sekolah, pendidikan tidak bisa berjalan. Sekarang pun kita hidup bersama-sama dan saling menghidupi, tetapi karena di setiap hubungan ada uang yang menjadi perantara, rasa kebersamaan pun hilang. Hal yang praktis pasti memiliki sisi negatif. Sebaiknya kita berhenti sejenak dan memikirkannya.
(Catatan 1) 交易: di sini, transaksi
(Catatan 2) 等身大の: sesuai dengan keadaan dan kemampuan orang itu
(Catatan 3) 金の亡者: orang yang luar biasa terobsesi pada uang
(Catatan 4) 対価: di sini, imbalan`,
    },

    // ── 問題13：十条市 国際交流事業助成制度 ──
    "13": {
      yomi: `2020{年度|ねんど}{募集|ぼしゅう}{概要|がいよう}

{趣旨|しゅし}　{本|ほん}{制度|せいど}は、{市民|しみん}が{行|おこな}う{国際|こくさい}{交流|こうりゅう}{事業|じぎょう}を{市|し}が{助成|じょせい}し、{国際|こくさい}{交流|こうりゅう}を{推進|すいしん}することを{目的|もくてき}としています。

{対象|たいしょう}{団体|だんたい}　{国際|こくさい}{交流|こうりゅう}{活動|かつどう}を{行|おこな}う{団体|だんたい}で、{次|つぎ}のいずれにも{該当|がいとう}する{団体|だんたい}
・{団体|だんたい}の{主|しゅ}たる{構成員|こうせいいん}が{十条|じゅうじょう}{市民|しみん}で、1{年|ねん}{以上|いじょう}の{活動|かつどう}{実績|じっせき}があること
・{過去|かこ}3{年|ねん}{以内|いない}に{本|ほん}{助成金|じょせいきん}の{交付|こうふ}を{受|う}けていないこと

{対象|たいしょう}{事業|じぎょう}　2020{年|ねん}4{月|がつ}{1日|ついたち}から12{月|がつ}{31日|さんじゅういちにち}までの{間|あいだ}に{実施|じっし}される{事業|じぎょう}で、「{国際|こくさい}{理解|りかい}と{国際|こくさい}{協力|きょうりょく}」または「{多文化|たぶんか}{共生|きょうせい}{社会|しゃかい}の{実現|じつげん}」に{関|かん}するもの

{助成|じょせい}{額|がく}　1{事業|じぎょう}あたり30{万|まん}{円|えん}{以内|いない}（1{団体|だんたい}につき1{事業|じぎょう}のみ{応募|おうぼ}{可|か}）

{提出|ていしゅつ}{書類|しょるい}　①{申請書|しんせいしょ}　②{事業|じぎょう}{計画書|けいかくしょ}
※{当|とう}センターホームページよりダウンロードしてください。

{応募|おうぼ}{方法|ほうほう}　{上記|じょうき}の{書類|しょるい}を{郵送|ゆうそう}していただくか、センター{窓口|まどぐち}に{直接|ちょくせつ}ご{持参|じさん}ください。（メール、ファクス{不可|ふか}）

{応募|おうぼ}{期間|きかん}　2020{年|ねん}1{月|がつ}{10日|とおか}（{金|きん}）〜1{月|がつ}{28日|にじゅうはちにち}（{火|か}）※{最終|さいしゅう}{日|び}{必着|ひっちゃく}（{窓口|まどぐち}{持参|じさん}は17{時|じ}まで）

スケジュール
{説明会|せつめいかい}　①2019{年|ねん}12{月|がつ}{10日|とおか}（{火|か}）13:00〜14:00
　　　　②2019{年|ねん}12{月|がつ}{19日|じゅうくにち}（{木|もく}）13:00〜14:00
{応募|おうぼ}を{希望|きぼう}する{方|かた}は、①か②のいずれかに{必|かなら}ずご{参加|さんか}ください。（{予約|よやく}{不要|ふよう}）

{個別|こべつ}{相談会|そうだんかい}　2019{年|ねん}12{月|がつ}{11日|じゅういちにち}（{水|すい}）〜12{月|がつ}{25日|にじゅうごにち}（{水|すい}）30{分|ぷん}{程度|ていど}
{事業|じぎょう}の{内容|ないよう}{等|とう}について{担当|たんとう}{職員|しょくいん}が{相談|そうだん}に{応|おう}じます。（{希望者|きぼうしゃ}のみ・{要|よう}{予約|よやく}）

1{次|じ}{選考|せんこう}　{書類|しょるい}{審査|しんさ}。{結果|けっか}は2020{年|ねん}2{月|がつ}{14日|じゅうよっか}（{金|きん}）までに{応募者|おうぼしゃ}{全員|ぜんいん}に{書面|しょめん}で{通知|つうち}します。

2{次|じ}{選考|せんこう}　2020{年|ねん}3{月|がつ}{7日|なのか}（{土|ど}）10:00〜12:30
{団体|だんたい}によるプレゼンテーションと、{質疑|しつぎ}{応答|おうとう}

{結果|けっか}{通知|つうち}　2020{年|ねん}3{月|がつ}{13日|じゅうさんにち}（{金|きん}）までに2{次|じ}{選考|せんこう}{参加者|さんかしゃ}{全員|ぜんいん}に{書面|しょめん}で{通知|つうち}します。

お{問|と}い{合|あ}わせ・{送付|そうふ}{先|さき}　〒614-3790　{十条市|じゅうじょうし}{西島|にしじま}2-21　{十条市|じゅうじょうし}{国際|こくさい}{交流|こうりゅう}センター
{国際|こくさい}{交流|こうりゅう}{事業|じぎょう}{助成|じょせい}{担当|たんとう}　{電話|でんわ}0199-61-2257`,
      arti: `Ringkasan perekrutan tahun anggaran 2020

Maksud: Sistem ini bertujuan agar kota menyubsidi proyek pertukaran internasional yang dilakukan warga dan mendorong pertukaran internasional.

Organisasi sasaran: organisasi yang melakukan kegiatan pertukaran internasional dan memenuhi semua syarat berikut
・Anggota utama organisasi adalah warga Kota Jujo, dan memiliki rekam jejak kegiatan 1 tahun atau lebih
・Belum menerima subsidi ini dalam 3 tahun terakhir

Proyek sasaran: proyek yang dilaksanakan antara 1 April dan 31 Desember 2020, yang berkaitan dengan "pemahaman internasional dan kerja sama internasional" atau "mewujudkan masyarakat multikultural yang hidup berdampingan"

Jumlah subsidi: maksimal 300 ribu yen per proyek (setiap organisasi hanya boleh mendaftarkan 1 proyek)

Dokumen yang diserahkan: ① formulir permohonan ② rencana proyek
※ Silakan unduh dari situs web pusat ini.

Cara mendaftar: Kirim dokumen di atas lewat pos, atau bawa langsung ke loket pusat. (Email dan faks tidak diterima)

Periode pendaftaran: 10 Januari (Jumat) – 28 Januari (Selasa) 2020 ※ harus tiba pada hari terakhir (penyerahan di loket sampai pukul 17.00)

Jadwal
Sesi penjelasan ① 10 Desember 2019 (Selasa) 13.00–14.00
② 19 Desember 2019 (Kamis) 13.00–14.00
Yang ingin mendaftar wajib menghadiri salah satu dari ① atau ②. (Tanpa reservasi)

Konsultasi individu: 11 Desember (Rabu) – 25 Desember (Rabu) 2019, sekitar 30 menit
Petugas akan melayani konsultasi tentang isi proyek dan lain-lain. (Hanya bagi yang berminat, wajib reservasi)

Seleksi tahap 1: pemeriksaan dokumen. Hasilnya diberitahukan secara tertulis kepada semua pendaftar paling lambat 14 Februari 2020 (Jumat).

Seleksi tahap 2: 7 Maret 2020 (Sabtu) 10.00–12.30
Presentasi oleh organisasi, serta tanya jawab

Pemberitahuan hasil: diberitahukan secara tertulis kepada semua peserta seleksi tahap 2 paling lambat 13 Maret 2020 (Jumat).

Pertanyaan & alamat pengiriman: 〒614-3790, Nishijima 2-21, Kota Jujo, Pusat Pertukaran Internasional Kota Jujo
Bagian Subsidi Proyek Pertukaran Internasional, telepon 0199-61-2257`,
    },
  },
};
