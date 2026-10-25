import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2020
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_2012: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{自分|じぶん}の{将来|しょうらい}について、{他人|たにん}には【{干渉|かんしょう}】されたくない。",
      arti: "Saya tidak ingin 【dicampuri】 orang lain soal masa depan saya sendiri.",
    },
    2: {
      yomi: "{田中|たなか}{選手|せんしゅ}は、{最後|さいご}まで【{粘|ねば}って】、ついに{勝利|しょうり}を{収|おさ}めた。",
      arti: "Atlet Tanaka 【bertahan dengan gigih】 sampai akhir dan akhirnya meraih kemenangan.",
      optArti: ["bertahan gigih (粘って)", "berebut, bertengkar (争って)", "berlomba, bersaing (競って)", "bertahan kuat, menahan diri (踏ん張って)"],
    },
    3: {
      yomi: "{手品師|てじなし}の【{巧妙|こうみょう}】なテクニックに{観客|かんきゃく}から{拍手|はくしゅ}が{起|お}こった。",
      arti: "Penonton bertepuk tangan atas teknik 【lihai】 sang pesulap.",
    },
    4: {
      yomi: "{書類|しょるい}にミスがあったので、すぐに{修正|しゅうせい}を【{促|うなが}した】。",
      arti: "Karena ada kesalahan di dokumen, saya segera 【mendesak】 agar diperbaiki.",
      optArti: ["menyelesaikan (済ました)", "memberikan, melakukan (施した)", "menyuruh buru-buru (急かした)", "mendorong, mendesak (促した)"],
    },
    5: {
      yomi: "{適切|てきせつ}な【{措置|そち}】によって、{問題|もんだい}が{拡大|かくだい}するのを{防|ふせ}ぐことができた。",
      arti: "Berkat 【tindakan penanganan】 yang tepat, masalah bisa dicegah agar tidak meluas.",
    },
    6: {
      yomi: "スポーツを{通|つう}じて、{地域|ちいき}の【{振興|しんこう}】を{図|はか}りたい。",
      arti: "Saya ingin mengupayakan 【pengembangan/kemajuan】 daerah melalui olahraga.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{商品|しょうひん}の{値段|ねだん}を{間違|まちが}えて{表示|ひょうじ}していたため、お{客|きゃく}さんから（　）が{来|き}た。",
      arti: "Karena harga barang salah dicantumkan, datang (…) dari pelanggan.",
      optArti: ["error, kesalahan", "target kerja, kuota", "kerusakan, dampak buruk", "keluhan, komplain"],
    },
    8: {
      yomi: "{御社|おんしゃ}が{新|しん}{技術|ぎじゅつ}を{導入|どうにゅう}することになった（　）についてお{聞|き}かせください。",
      arti: "Mohon ceritakan (…) perusahaan Anda sampai memutuskan memperkenalkan teknologi baru.",
      optYomi: ["{軌道|きどう}", "{経緯|けいい}", "{経路|けいろ}", "{軌跡|きせき}"],
      optArti: ["orbit, jalur (rel)", "kronologi, latar belakang kejadian", "rute, jalur yang dilalui", "jejak, lintasan"],
    },
    9: {
      yomi: "この{映画|えいが}のストーリーは、{地球|ちきゅう}の{歴史|れきし}を{描|えが}いた（　）ものだ。",
      arti: "Cerita film ini adalah kisah (…) yang menggambarkan sejarah bumi.",
      optYomi: ["{絶大|ぜつだい}な", "{壮大|そうだい}な", "{盛大|せいだい}な", "{甚大|じんだい}な"],
      optArti: ["sangat besar (pengaruh/dukungan)", "megah, berskala besar", "meriah (acara)", "parah (kerugian/bencana)"],
    },
    10: {
      yomi: "{試験|しけん}{前|まえ}の1{週間|しゅうかん}は、{朝|あさ}から{晩|ばん}まで（　）{勉強|べんきょう}した。",
      arti: "Seminggu sebelum ujian, saya belajar (…) dari pagi sampai malam.",
      optArti: ["dengan tekun dan intensif", "(tidur) nyenyak", "lengket, menempel terus", "(berubah) drastis, jauh"],
    },
    11: {
      yomi: "{住民|じゅうみん}からの{要望|ようぼう}で、{空|あ}き{地|ち}に{放置|ほうち}されたごみの（　）が{行|おこな}われた。",
      arti: "Atas permintaan warga, dilakukan (…) sampah yang dibiarkan di lahan kosong.",
      optYomi: ["{消去|しょうきょ}", "{駆除|くじょ}", "{削除|さくじょ}", "{撤去|てっきょ}"],
      optArti: ["penghapusan (data, ingatan)", "pembasmian (hama)", "penghapusan (teks, bagian)", "penyingkiran, pembongkaran"],
    },
    12: {
      yomi: "{今年|ことし}のマラソン{大会|たいかい}は、{天候|てんこう}{不良|ふりょう}により{数日|すうじつ}{前|まえ}から{開催|かいさい}が（　）いたが、{当日|とうじつ}は{無事|ぶじ}{行|おこな}われた。",
      arti: "Lomba maraton tahun ini, karena cuaca buruk, penyelenggaraannya sudah (…) sejak beberapa hari sebelumnya, tetapi pada harinya berlangsung dengan lancar.",
      optArti: ["ditakuti", "dikhawatirkan (jangan-jangan batal)", "dipelototi, diincar", "dienggani, diulur-ulur"],
    },
    13: {
      yomi: "{注文|ちゅうもん}していたテレビゲームが{明日|あした}{届|とど}くので、{早|はや}く{遊|あそ}びたくて（　）している。",
      arti: "Video game yang saya pesan akan tiba besok, jadi saya (…) ingin cepat memainkannya.",
      optArti: ["gemetar ketakutan", "gugup, takut-takut", "tidak sabar, gatal ingin", "cemas deg-degan (melihat orang lain)"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "それについては【エキスパート】にも{意見|いけん}を{聞|き}いてみよう。",
      arti: "Soal itu, mari kita tanyakan juga pendapat 【pakar】.",
      optYomi: ["{発明家|はつめいか}", "{協力者|きょうりょくしゃ}", "{責任者|せきにんしゃ}", "{専門家|せんもんか}"],
      optArti: ["penemu", "kolaborator, pembantu", "penanggung jawab", "ahli, pakar"],
    },
    15: {
      yomi: "{兄|あに}は{手|て}にした{新聞|しんぶん}の{記事|きじ}を【{凝視|ぎょうし}】した。",
      arti: "Kakak laki-laki saya 【menatap lekat-lekat】 artikel koran yang dipegangnya.",
      optYomi: ["ざっと{見|み}た", "じっと{見|み}た", "ちらっと{見|み}た", "ぼうっと{見|み}た"],
      optArti: ["melihat sekilas", "menatap lekat-lekat", "melirik", "memandang dengan bengong"],
    },
    16: {
      yomi: "【{架空|かくう}】の{人物|じんぶつ}を{主人公|しゅじんこう}にして{物語|ものがたり}を{作|つく}った。",
      arti: "Saya membuat cerita dengan tokoh 【fiktif】 sebagai pemeran utama.",
      optYomi: ["{素敵|すてき}な", "{思|おも}い{出|で}の", "{想像|そうぞう}の", "{変|へん}な"],
      optArti: ["menawan", "kenangan", "khayalan, rekaan", "aneh"],
    },
    17: {
      yomi: "{鈴木|すずき}さんには、【かねがね】お{目|め}にかかりたいと{思|おも}っておりました。",
      arti: "Saya 【sudah sejak lama】 ingin bertemu dengan Suzuki-san.",
      optYomi: [null, "{以前|いぜん}から", null, "{早|はや}いうちに"],
      optArti: ["kalau bisa", "sejak dulu", "pasti, sungguh", "secepatnya"],
    },
    18: {
      yomi: "{商品|しょうひん}の{原価|げんか}が{上|あ}がったが、{販売|はんばい}{価格|かかく}への{影響|えいきょう}は【{当面|とうめん}】ないだろう。",
      arti: "Harga pokok barang naik, tetapi 【untuk sementara】 mungkin tidak berpengaruh pada harga jual.",
      optYomi: [null, "{直接|ちょくせつ}は", null, "{大|たい}して"],
      optArti: ["untuk sementara waktu", "secara langsung", "masa sih, tidak mungkin", "tidak begitu"],
    },
    19: {
      yomi: "{彼|かれ}はいつも【ぼやいている】。",
      arti: "Dia selalu 【menggerutu】.",
      optYomi: ["{冗談|じょうだん}を{言|い}っている", "わがままを{言|い}っている", "{愚痴|ぐち}を{言|い}っている", "{独|ひと}り{言|ごと}を{言|い}っている"],
      optArti: ["bercanda", "bersikap egois, banyak maunya", "mengeluh", "bicara sendiri"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "【もはや】",
      arti: "もはや = sudah (tidak lagi), kini sudah (keadaan berubah)",
      optYomi: [
        "{現代|げんだい}の{広告|こうこく}{業界|ぎょうかい}において、これまでの{手法|しゅほう}はもはや{通用|つうよう}しないだろう。",
        "{多|おお}くの{研究者|けんきゅうしゃ}がこの{仮説|かせつ}を{証明|しょうめい}するため、もはや{検証|けんしょう}を{続|つづ}けている。",
        "{鈴木氏|すずきし}はもはや{高校|こうこう}{教師|きょうし}だったが、{現在|げんざい}は{作家|さっか}として{活躍|かつやく}している。",
        "{生産|せいさん}{体制|たいせい}が{改善|かいぜん}されれば、{商品|しょうひん}の{不足|ふそく}{状態|じょうたい}はもはや{解消|かいしょう}される{見込|みこ}みだ。",
      ],
      optArti: [
        "Di industri periklanan modern, metode selama ini 'sudah tidak lagi' berlaku.",
        "Banyak peneliti 'sudah (tidak lagi)' terus melakukan pengujian untuk membuktikan hipotesis ini.",
        "Tuan Suzuki 'sudah (tidak lagi)' guru SMA, tetapi kini aktif sebagai penulis.",
        "Jika sistem produksi diperbaiki, kekurangan barang diperkirakan 'sudah (tidak lagi)' teratasi.",
      ],
    },
    21: {
      yomi: "【{円滑|えんかつ}】",
      arti: "円滑 = lancar, mulus (tanpa hambatan; untuk urusan/proses/hubungan)",
      optYomi: [
        "{藤田|ふじた}さんはいくつもの{外国語|がいこくご}を{円滑|えんかつ}に{話|はな}すそうだ。",
        "{会|かい}を{円滑|えんかつ}に{運営|うんえい}するためには、{会員|かいいん}の{協力|きょうりょく}が{不可欠|ふかけつ}だ。",
        "あの{子|こ}はまだ4{歳|さい}なのに、{複雑|ふくざつ}な{漢字|かんじ}を{本|ほん}など{見|み}ないで{円滑|えんかつ}に{書|か}く。",
        "{車|くるま}はカーブの{多|おお}い{坂道|さかみち}を{円滑|えんかつ}に{登|のぼ}って{行|い}った。",
      ],
      optArti: [
        "Kabarnya Fujita-san berbicara beberapa bahasa asing dengan 'lancar'.",
        "Agar perkumpulan berjalan 'lancar', kerja sama anggota sangat diperlukan.",
        "Anak itu baru 4 tahun, tetapi menulis kanji yang rumit dengan 'lancar' tanpa melihat buku.",
        "Mobil itu menanjak dengan 'lancar' di jalan menanjak yang banyak tikungannya.",
      ],
    },
    22: {
      yomi: "【{怠|おこた}る】",
      arti: "怠る = melalaikan, mengabaikan (kewajiban yang seharusnya dilakukan)",
      optYomi: [
        "ここでは、{携帯|けいたい}{電話|でんわ}の{使用|しよう}を{怠|おこた}ってください。",
        "{今日|きょう}は{時間|じかん}がないので、{料理|りょうり}を{怠|おこた}って{外食|がいしょく}にした。",
        "{夫|おっと}は{仕事|しごと}ばかりして、{趣味|しゅみ}のサーフィンを{怠|おこた}っている。",
        "この{薬品|やくひん}を{扱|あつか}うときは、{常|つね}に{注意|ちゅうい}を{怠|おこた}ってはいけない。",
      ],
      optArti: [
        "Di sini, mohon 'lalaikan' penggunaan ponsel.",
        "Hari ini tidak ada waktu, jadi saya 'melalaikan' memasak dan makan di luar.",
        "Suami saya hanya bekerja dan 'melalaikan' hobinya berselancar.",
        "Saat menangani bahan kimia ini, jangan sekali-kali 'lalai' berhati-hati.",
      ],
    },
    23: {
      yomi: "【{失脚|しっきゃく}】",
      arti: "失脚 = jatuh dari jabatan/kedudukan (karena skandal, dsb.)",
      optYomi: [
        "{大臣|だいじん}が{汚職|おしょく}{事件|じけん}で{失脚|しっきゃく}すると、{国民|こくみん}の{政治|せいじ}に{対|たい}する{不信感|ふしんかん}がますます{高|たか}まった。",
        "{審査員|しんさいん}の{一言|ひとこと}で{完全|かんぜん}に{自信|じしん}が{失脚|しっきゃく}し、その{後|ご}も{気力|きりょく}を{取|と}り{戻|もど}せなかった。",
        "{不祥事|ふしょうじ}が{明|あか}るみに{出|で}ると、{一流|いちりゅう}{企業|きぎょう}の{社会的|しゃかいてき}{信用|しんよう}が{一瞬|いっしゅん}のうちに{失脚|しっきゃく}した。",
        "その{陸上|りくじょう}{選手|せんしゅ}は、{合図|あいず}より{早|はや}くスタートラインを{越|こ}えたため{失脚|しっきゃく}してしまった。",
      ],
      optArti: [
        "Ketika menteri 'jatuh dari jabatannya' karena kasus korupsi, ketidakpercayaan rakyat pada politik makin tinggi.",
        "Karena satu ucapan juri, rasa percaya diri saya 'jatuh dari jabatan' sepenuhnya dan tak bisa bangkit lagi.",
        "Begitu skandal terungkap, kepercayaan publik pada perusahaan papan atas itu 'jatuh dari jabatan' seketika.",
        "Atlet lari itu 'jatuh dari jabatan' karena melewati garis start sebelum aba-aba.",
      ],
    },
    24: {
      yomi: "【{収容|しゅうよう}】",
      arti: "収容 = menampung (orang/kendaraan dalam jumlah tertentu di suatu tempat)",
      optYomi: [
        "ホテルの{部屋|へや}には{貴重品|きちょうひん}を{収容|しゅうよう}するための{金庫|きんこ}が{置|お}いてある。",
        "この{辞書|じしょ}にはわかりやすい{例文|れいぶん}がたくさん{収容|しゅうよう}されています。",
        "この{劇場|げきじょう}は2{千|せん}{人|にん}の{観客|かんきゃく}を{収容|しゅうよう}することができます。",
        "{必要|ひつよう}なデータはすべてこのパソコンに{収容|しゅうよう}されています。",
      ],
      optArti: [
        "Di kamar hotel ada brankas untuk 'menampung' barang berharga.",
        "Kamus ini 'menampung' banyak contoh kalimat yang mudah dipahami.",
        "Teater ini dapat 'menampung' 2.000 penonton.",
        "Semua data yang diperlukan 'ditampung' di komputer ini.",
      ],
    },
    25: {
      yomi: "【{実|じつ}に】",
      arti: "実に = sungguh, benar-benar (menekankan perasaan/penilaian)",
      optYomi: [
        "{病気|びょうき}が{実|じつ}に{治|なお}るまで、{運動|うんどう}はしないでください。",
        "うそをつかず、{実|じつ}に{話|はな}してください。",
        "このレポートは{実|じつ}によく{書|か}けている。",
        "{話|はなし}を{聞|き}くだけでなく、{実|じつ}に{見|み}てみると、よくわかる。",
      ],
      optArti: [
        "Jangan berolahraga sampai penyakitnya 'sungguh' sembuh.",
        "Jangan berbohong, bicaralah dengan 'sungguh'.",
        "Laporan ini 'sungguh' ditulis dengan baik.",
        "Bukan hanya mendengar ceritanya, kalau dilihat 'sungguh', akan paham betul.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "100{年|ねん}の{伝統|でんとう}を{誇|ほこ}るこの{旅館|りょかん}のサービスには、{老舗|しにせ}{旅館|りょかん}（　）{細|こま}やかな{心遣|こころづか}いが{感|かん}じられる。",
      arti: "Pada layanan ryokan yang membanggakan tradisi 100 tahun ini, terasa perhatian yang cermat (…) ryokan lama bergengsi.",
      optArti: ["semacam (merendahkan)", "yang berkaitan dengan", "sampai sebesar", "yang khas, hanya dimiliki oleh"],
    },
    27: {
      yomi: "{新入|しんにゅう}{社員|しゃいん}のころ、{取引先|とりひきさき}の{担当者|たんとうしゃ}の{名前|なまえ}を{間違|まちが}えた（　）、{契約|けいやく}してもらえなかったことがある。",
      arti: "Waktu masih karyawan baru, pernah (…) salah menyebut nama penanggung jawab klien, sehingga kontrak tidak didapat.",
      optYomi: [null, "{以上|いじょう}は", null, "かと{思|おも}うと"],
      optArti: ["hal seperti (…), masa sih", "karena sudah (…), maka harus", "gara-gara (…) saja (akibat buruk)", "baru saja (…), tahu-tahu"],
    },
    28: {
      yomi: "これまで{森|もり}さんのことなど{何|なん}とも{思|おも}っていなかった。（　）{最近|さいきん}、なぜか{急|きゅう}に{恋愛|れんあい}{対象|たいしょう}として{意識|いしき}するようになってしまった。",
      arti: "Selama ini aku sama sekali tidak memikirkan Mori-san. (…) belakangan ini, entah kenapa tiba-tiba aku mulai menyadarinya sebagai orang yang bisa kusukai.",
      optArti: ["itu adalah", "itu pun, apalagi", "atau itu", "namun ternyata (berbeda dari dugaan)"],
    },
    29: {
      yomi: "X{自動車|じどうしゃ}の{新|しん}{社長|しゃちょう}に{就任|しゅうにん}した{山下|やました}春好{氏|し}は、{会見|かいけん}で、「{私|わたし}が{持|も}つノウハウ（　）、{早期|そうき}の{黒字化|くろじか}が{図|はか}れると{確信|かくしん}している。」と{述|の}べた。",
      arti: "Yamashita (春好), yang menjabat presiden direktur baru X Motor, dalam konferensi pers mengatakan, \"Saya yakin (…) know-how yang saya miliki, perusahaan bisa segera kembali meraih laba.\"",
      optArti: ["mungkin karena keadaannya", "bahkan dalam (situasi)", "dari sudut pandang (orang itu)", "jika mengerahkan (kemampuan) …, pasti"],
    },
    30: {
      yomi: "できない{理由|りゆう}ばかりを{探|さが}して、（　）あきらめてしまう{人|ひと}に、{成長|せいちょう}はない。",
      arti: "Orang yang hanya mencari alasan tidak bisa dan menyerah (…), tidak akan berkembang.",
      optArti: ["padahal belum mencoba sama sekali", "walaupun tidak perlu melakukannya", "meskipun tidak ada cara melakukannya", "kalau belum selesai melakukannya"],
    },
    31: {
      yomi: "A「ねえ、この{漫画|まんが}、{面白|おもしろ}いよ。」B「{興味|きょうみ}ない。」A「そんなこと{言|い}って。{本当|ほんとう}は{読|よ}んでみたくてしかたが（　）。」",
      arti: "A: \"Eh, komik ini seru lho.\" B: \"Nggak tertarik.\" A: \"Ngomong begitu. Sebenarnya kamu ingin banget membacanya (…).\"",
      optArti: ["harus (tidak)…", "tidak (tahan), tetapi", "padahal (tidak tahan) …", "walaupun tidak …"],
    },
    32: {
      yomi: "{次|つぎ}の{試合|しあい}の{相手|あいて}とは{前回|ぜんかい}の{大会|たいかい}で{一度|いちど}（　）。{前回|ぜんかい}は{負|ま}けたが、{今回|こんかい}は{絶対|ぜったい}に{勝|か}ちたい。",
      arti: "Dengan lawan pertandingan berikutnya, saya (…) sekali di turnamen sebelumnya. Waktu itu kalah, tapi kali ini saya pasti ingin menang.",
      optYomi: ["{対戦|たいせん}している", "{対戦|たいせん}してくる", "{対戦|たいせん}してみる", "{対戦|たいせん}していく"],
      optArti: ["sudah pernah bertanding (pengalaman)", "bertanding lalu kembali", "mencoba bertanding", "akan terus bertanding"],
    },
    33: {
      yomi: "（{旅館|りょかん}のパンフレットで）{電車|でんしゃ}でお{越|こ}しのお{客様|きゃくさま}は、{最寄|もよ}りの{森川|もりかわ}{駅|えき}までスタッフがお{迎|むか}えに（　）ので、{前日|ぜんじつ}までにご{到着|とうちゃく}{予定|よてい}{時間|じかん}をお{知|し}らせください。",
      arti: "(Di brosur ryokan) Bagi tamu yang datang dengan kereta, staf kami akan (…) menjemput ke stasiun terdekat, Stasiun Morikawa, jadi mohon beri tahu perkiraan jam kedatangan paling lambat sehari sebelumnya.",
      optArti: ["datang (hormat, untuk orang lain)", "datang (merendah, untuk pihak sendiri)", "(orang lain) memberi kepada kami", "memberikan (merendah)"],
    },
    34: {
      yomi: "ゆうべは、せっかく{北山|きたやま}まで{夜景|やけい}を{見|み}に{行|い}ったのに、ものすごい{強風|きょうふう}と{寒|さむ}さで、{夜景|やけい}を（　）。",
      arti: "Semalam, padahal sudah jauh-jauh ke Kitayama untuk melihat pemandangan malam, karena angin kencang dan dingin yang luar biasa, pemandangan malamnya (…).",
      optYomi: ["{楽|たの}しまずにはいられなかった", "{楽|たの}しめないことはなかった", "{楽|たの}しむどころではなかった", "{楽|たの}しむつもりはなかった"],
      optArti: ["tidak bisa tidak menikmati", "bukannya tidak bisa dinikmati", "boro-boro bisa dinikmati", "tidak berniat menikmati"],
    },
    35: {
      yomi: "（{会社|かいしゃ}で）A「{知|し}っています？{部長|ぶちょう}が、{売|う}り{上|あ}げを{半年|はんとし}で5{倍|ばい}にするって{言|い}っているらしいですよ。」B「5{倍|ばい}？ありえないよ。どう{考|かんが}えてもさすがに（　）」A「そうですよね。{無理|むり}ですよね。」",
      arti: "(Di kantor) A: \"Tahu tidak? Katanya manajer bilang akan menaikkan penjualan 5 kali lipat dalam setengah tahun.\" B: \"5 kali? Tidak mungkin. Dipikir bagaimanapun, (…)\" A: \"Iya ya. Mustahil ya.\"",
      optYomi: ["{無理|むり}するもんだ", "{無理|むり}するもんか", "{無理|むり}ってもんだ", "{無理|むり}なもんか"],
      optArti: ["memang sewajarnya memaksakan diri", "mana mungkin saya memaksakan diri", "itu sudah jelas mustahil namanya", "mana mungkin mustahil"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "この{花火|はなび}{大会|たいかい}は、{日本|にほん}の{夏|なつ}を{語|かた}る＿＿ ＿＿ ★ ＿＿{有名|ゆうめい}だ。",
      arti: "Festival kembang api ini terkenal sebagai acara yang tak terpisahkan dalam membicarakan musim panas Jepang.",
      optYomi: [null, null, "{欠|か}かせない", null],
      optArti: ["dalam (hal)", "sebagai", "tak terpisahkan", "acara"],
    },
    37: {
      yomi: "{子供|こども}にいろいろなことを{習|なら}わせたいという{親|おや}の{気持|きも}ちはよくわかるが、{子供|こども}の{遊|あそ}ぶ{時間|じかん}を{奪|うば}って＿＿ ＿＿ ★ ＿＿ないと{思|おも}う。",
      arti: "Saya sangat paham perasaan orang tua yang ingin anaknya belajar berbagai hal, tetapi menurut saya tidak perlu sampai merampas waktu bermain anak untuk memaksanya melakukannya.",
      optYomi: ["{必要|ひつよう}は", null, null, "{無理|むり}に"],
      optArti: ["perlunya", "menyuruh melakukan", "sampai", "dengan paksa"],
    },
    38: {
      yomi: "A「おとといは{大雨|おおあめ}、{昨日|きのう}は{車|くるま}のパンク。{旅行|りょこう}に{来|き}てからトラブル{続|つづ}きで{嫌|いや}になるよね。」B「{本当|ほんとう}だよ。{最終日|さいしゅうび}の＿＿ ＿＿ ★ ＿＿。」",
      arti: "A: \"Kemarin lusa hujan lebat, kemarin ban mobil bocor. Sejak berlibur masalah terus, bikin kesal ya.\" B: \"Benar. Semoga hari ini, hari terakhir, justru tidak terjadi apa-apa.\"",
      optYomi: ["{何|なに}も", "{今日|きょう}こそ", null, "{起|お}きません"],
      optArti: ["apa pun (tidak)", "justru hari ini", "semoga", "tidak terjadi"],
    },
    39: {
      yomi: "2025{年|ねん}には{介護|かいご}を{必要|ひつよう}とする{高齢者|こうれいしゃ}が{著|いちじる}しく{増加|ぞうか}することから、{多|おお}くの{専門家|せんもんか}が「{介護|かいご}{施設|しせつ}{職員|しょくいん}の{給与|きゅうよ}を{引|ひ}き{上|あ}げる＿＿ ＿＿ ★ ＿＿」と{指摘|してき}する。",
      arti: "Karena pada tahun 2025 jumlah lansia yang membutuhkan perawatan akan meningkat tajam, banyak ahli menunjukkan bahwa \"mengamankan SDM yang bekerja di bidang perawatan, antara lain dengan menaikkan gaji staf fasilitas perawatan, adalah tugas yang mendesak.\"",
      optYomi: [null, "{緊急|きんきゅう}の{課題|かだい}", "{人材|じんざい}を{確保|かくほ}することが", "{介護|かいご}に{携|たずさ}わる"],
      optArti: ["antara lain dengan", "tugas mendesak", "mengamankan SDM", "yang bergelut di bidang perawatan"],
    },
    40: {
      yomi: "{川北|かわきた}{市|し}{出身|しゅっしん}の{画家|がか} 平一明の＿＿ ＿＿ ★ ＿＿{先週|せんしゅう}{20日|はつか}に{完成|かんせい}した。",
      arti: "Museum peringatan yang pembangunannya digarap Kota Kawakita untuk mewariskan prestasi pelukis asal Kota Kawakita, 平一明, kepada generasi mendatang, telah rampung pada tanggal 20 minggu lalu.",
      optYomi: ["{建設|けんせつ}を{進|すす}めていた", "{川北|かわきた}{市|し}が", "{記念|きねん}{美術館|びじゅつかん}が", "{業績|ぎょうせき}を{後世|こうせい}に{伝|つた}えようと"],
      optArti: ["yang pembangunannya sedang digarap", "Kota Kawakita", "museum peringatan", "untuk mewariskan prestasinya kepada generasi mendatang"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{力|ちから}でもいい", "{力|ちから}である", "{力|ちから}にしよう", "{力|ちから}にすぎない"],
      optArti: ["kekuatan pun boleh", "adalah kekuatan", "mari jadikan kekuatan", "hanyalah kekuatan"],
    },
    42: {
      optArti: ["suatu ketika", "saat ini", "saat itu", "waktu itu (yang sama-sama diketahui)"],
    },
    43: {
      optYomi: ["{思|おも}うそうだ", "{思|おも}えてきた", "{思|おも}わせつつある", "{思|おも}っているだろう"],
      optArti: ["katanya berpikir", "mulai terasa/terpikir", "sedang membuat (orang) berpikir", "mungkin sedang berpikir"],
    },
    44: {
      optArti: ["meskipun begitu (tambahan catatan)", "walaupun demikian", "ngomong-ngomong, kalau dipikir-pikir", "bahkan sebaliknya"],
    },

    // ── 問題8：内容理解（短文） ──
    45: {
      yomi: "{筆者|ひっしゃ}が{読|よ}みたい{雑誌|ざっし}はどのようなものか。",
      arti: "Majalah seperti apa yang ingin dibaca penulis?",
      optYomi: [
        "{凝|こ}ったレイアウトによって{読|よ}みやすい{誌面|しめん}になったもの",
        "{材料|ざいりょう}の{組|く}み{合|あ}わせによって{新|あたら}しい{意味|いみ}を{持|も}たせたもの",
        "{材料|ざいりょう}が{加工|かこう}されて{内容|ないよう}に{深|ふか}みが{増|ま}したもの",
        "レイアウトに{合|あ}わせて{内容|ないよう}が{調整|ちょうせい}されたもの",
      ],
      optArti: [
        "Yang halamannya jadi mudah dibaca berkat tata letak yang digarap rumit.",
        "Yang diberi makna baru melalui kombinasi bahan-bahan.",
        "Yang bahannya diolah sehingga isinya makin mendalam.",
        "Yang isinya disesuaikan dengan tata letak.",
      ],
    },
    46: {
      yomi: "{筆者|ひっしゃ}は{並木|なみき}の{効果|こうか}は{何|なん}だと{述|の}べているか。",
      arti: "Menurut penulis, apa efek deretan pohon di tepi jalan?",
      optYomi: [
        "{緑|みどり}があることで、{街|まち}{全体|ぜんたい}が{賑|にぎ}やかに{感|かん}じられること",
        "{緑|みどり}を{求|もと}めて{集|あつ}まることで、{住民|じゅうみん}のつながりが{強|つよ}まること",
        "{木々|きぎ}の{壁|かべ}があることで、{街|まち}が{一|ひと}つの{整|ととの}った{状態|じょうたい}になること",
        "{自然|しぜん}の{壁|かべ}がその{色|いろ}を{変|か}えることで、{季節|きせつ}の{変化|へんか}を{楽|たの}しめること",
      ],
      optArti: [
        "Karena ada hijau-hijauan, seluruh kota terasa semarak.",
        "Karena orang berkumpul mencari hijau-hijauan, hubungan antarwarga menguat.",
        "Karena ada dinding pepohonan, kota menjadi satu kesatuan yang tertata.",
        "Karena dinding alami berganti warna, perubahan musim bisa dinikmati.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pemikiran penulis?",
      optYomi: [
        "「{時代|じだい}」がかわると{文化|ぶんか}がかわり、{自国|じこく}も{外国|がいこく}のように{感|かん}じられる。",
        "{半|はん}{世紀|せいき}まえより、{外国|がいこく}の{文化|ぶんか}に{接|せっ}することが{増|ふ}えたように{感|かん}じられる。",
        "{昔|むかし}の{文化|ぶんか}が「{時代|じだい}」とともに{消|き}え{去|さ}っていくのは、{惜|お}しいと{感|かん}じられる。",
        "{外国|がいこく}で{暮|く}らしているのに、まるで{半|はん}{世紀|せいき}まえの{母国|ぼこく}にいるように{感|かん}じられる。",
      ],
      optArti: [
        "Jika \"zaman\" berganti, budaya pun berganti, sehingga negeri sendiri pun terasa seperti negeri asing.",
        "Dibanding setengah abad lalu, terasa makin sering bersentuhan dengan budaya asing.",
        "Terasa sayang bahwa budaya lama lenyap seiring \"zaman\".",
        "Padahal tinggal di luar negeri, rasanya seperti berada di tanah air setengah abad lalu.",
      ],
    },
    48: {
      yomi: "「{夢|ゆめ}を{売|う}る」とはどういうことか。",
      arti: "Apa maksud \"menjual mimpi\"?",
      optYomi: [
        "{買|か}い{手|て}に{買|か}いたいと{思|おも}わせるようにする。",
        "{買|か}い{手|て}の{好|この}む{宣伝|せんでん}{手法|しゅほう}を{取|と}り{入|い}れる。",
        "{買|か}い{手|て}の{希望|きぼう}を{聞|き}いて{具体的|ぐたいてき}な{形|かたち}にする。",
        "{買|か}い{手|て}より{先|さき}に{流行|りゅうこう}をつかむようにする。",
      ],
      optArti: [
        "Membuat pembeli merasa ingin membeli.",
        "Memakai metode promosi yang disukai pembeli.",
        "Mendengarkan keinginan pembeli lalu mewujudkannya secara konkret.",
        "Menangkap tren lebih dulu daripada pembeli.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    49: {
      yomi: "{近年|きんねん}の{物事|ものごと}や{思考|しこう}の{伝達|でんたつ}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Tentang cara menyampaikan hal dan pemikiran belakangan ini, apa kata penulis?",
      optYomi: [
        "{言葉|ことば}だけでわかりやすく{伝|つた}えることが{求|もと}められている。",
        "{明確|めいかく}に{伝|つた}えることができるようになっている。",
        "わかりやすく{解説|かいせつ}できない{物事|ものごと}は{避|さ}けられている。",
        "わかりやすく{伝|つた}えることが{重視|じゅうし}されている。",
      ],
      optArti: [
        "Dituntut menyampaikan dengan mudah dipahami hanya lewat kata-kata.",
        "Kini hal-hal bisa disampaikan dengan jelas.",
        "Hal yang tidak bisa dijelaskan dengan mudah cenderung dihindari.",
        "Penyampaian yang mudah dipahami dianggap penting.",
      ],
    },
    50: {
      yomi: "{受|う}け{取|と}る{側|がわ}の{思考|しこう}の{多様性|たようせい}や{広|ひろ}がり、{深|ふか}まりを{妨害|ぼうがい}することがあるとあるが、なぜか。",
      arti: "Tertulis \"terkadang menghambat keragaman, keluasan, dan kedalaman pemikiran pihak penerima\"; mengapa?",
      optYomi: [
        "わかったと{思|おも}い、それ{以上|いじょう}{考|かんが}えようとしなくなるから。",
        "わかりにくいものを{理解|りかい}しようとしなくなるから。",
        "わかりやすい{言葉|ことば}だけでは{表現|ひょうげん}できない{知識|ちしき}があるから。",
        "わかりやすいものは{選択|せんたく}されやすいが、{知識|ちしき}として{定着|ていちゃく}しないから。",
      ],
      optArti: [
        "Karena merasa sudah paham, orang tidak mau berpikir lebih jauh.",
        "Karena orang tidak lagi mau memahami hal yang sulit dipahami.",
        "Karena ada pengetahuan yang tak bisa diungkapkan hanya dengan kata-kata sederhana.",
        "Karena hal yang mudah dipahami cenderung dipilih, tetapi tidak melekat sebagai pengetahuan.",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin dikatakan penulis?",
      optYomi: [
        "わかりにくいものでも、{他者|たしゃ}にわかりやすく{伝|つた}える{姿勢|しせい}を{持|も}つべきだ。",
        "{得|え}た{知識|ちしき}を{踏|ふ}まえて、{思考|しこう}を{深|ふか}め{表現|ひょうげん}できるようになることが{重要|じゅうよう}だ。",
        "{他者|たしゃ}の{言葉|ことば}や{考|かんが}えを{正確|せいかく}に{理解|りかい}することで、{本当|ほんとう}の{学|まな}びにつながる。",
        "{他者|たしゃ}との{関係性|かんけいせい}を{築|きず}くには、わかりやすく{的確|てきかく}な{言葉|ことば}を{使|つか}うことが{求|もと}められる。",
      ],
      optArti: [
        "Walaupun sulit dipahami, kita harus bersikap menyampaikannya dengan mudah kepada orang lain.",
        "Yang penting adalah mampu memperdalam pemikiran berdasarkan pengetahuan yang diperoleh lalu mengungkapkannya.",
        "Memahami kata-kata dan pikiran orang lain dengan tepat akan mengarah pada pembelajaran sejati.",
        "Untuk membangun hubungan dengan orang lain, dituntut memakai kata-kata yang mudah dipahami dan tepat.",
      ],
    },
    52: {
      yomi: "①そのこととは{何|なに}か。",
      arti: "Apa yang dimaksud ① \"hal itu\"?",
      optYomi: [
        "ある{行動|こうどう}を{何度|なんど}も{繰|く}り{返|かえ}すこと。",
        "ある{行動|こうどう}に{思考|しこう}を{向|む}けなくなること。",
        "{自分|じぶん}の{考|かんが}えを{率直|そっちょく}に{述|の}べること。",
        "{自分|じぶん}の{考|かんが}えを{述|の}べようと{意識|いしき}しなくなること。",
      ],
      optArti: [
        "Mengulang suatu tindakan berkali-kali.",
        "Tidak lagi mengarahkan pikiran pada suatu tindakan.",
        "Menyatakan pendapat sendiri dengan terus terang.",
        "Tidak lagi sadar berusaha menyatakan pendapat sendiri.",
      ],
    },
    53: {
      yomi: "②このような{現象|げんしょう}とあるが、どのようなことか。",
      arti: "Tertulis ② \"fenomena seperti ini\"; maksudnya apa?",
      optYomi: [
        "{無意識|むいしき}のうちに{率直|そっちょく}に{話|はな}すことが{減|へ}ってくる。",
        "{無意識|むいしき}のうちに{行動|こうどう}の{結果|けっか}を{予測|よそく}しなくなる。",
        "{率直|そっちょく}に{話|はな}すことを{避|さ}け、{周囲|しゅうい}の{反応|はんのう}に{敏感|びんかん}になる。",
        "{率直|そっちょく}に{話|はな}すことを{求|もと}められても、{拒否|きょひ}するようになる。",
      ],
      optArti: [
        "Tanpa disadari, berbicara terus terang menjadi berkurang.",
        "Tanpa disadari, tidak lagi memprediksi akibat tindakan.",
        "Menghindari bicara terus terang dan menjadi peka terhadap reaksi sekitar.",
        "Walaupun diminta bicara terus terang, menjadi menolak.",
      ],
    },
    54: {
      yomi: "{行動|こうどう}の{抑制|よくせい}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Tentang penahanan (inhibisi) tindakan, apa kata penulis?",
      optYomi: [
        "{行動|こうどう}の{抑制|よくせい}が{強|つよ}まると、{思考|しこう}が{消極的|しょうきょくてき}になる。",
        "{行動|こうどう}の{抑制|よくせい}が{弱|よわ}まると、{思考|しこう}の{果|は}たす{役割|やくわり}は{少|すく}なくなる。",
        "{行動|こうどう}の{抑制|よくせい}の{程度|ていど}は、{思考|しこう}の{仕方|しかた}や{内容|ないよう}によって{変|か}わる。",
        "{行動|こうどう}の{抑制|よくせい}の{自動化|じどうか}は、{否定的|ひていてき}な{思考|しこう}が{直接|ちょくせつ}の{原因|げんいん}となる。",
      ],
      optArti: [
        "Jika penahanan tindakan menguat, pemikiran menjadi pasif.",
        "Jika penahanan tindakan melemah, peran pikiran berkurang.",
        "Kadar penahanan tindakan berubah tergantung cara dan isi berpikir.",
        "Otomatisasi penahanan tindakan disebabkan langsung oleh pikiran negatif.",
      ],
    },
    55: {
      yomi: "「{師|し}と{弟子|でし}」について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Tentang \"guru (master) dan murid\", apa kata penulis?",
      optYomi: [
        "{弟子|でし}が{師|し}から{優|すぐ}れたものを{学|まな}ぶ{個別的|こべつてき}なつながりである。",
        "{弟子|でし}は{師|し}に{選|えら}ばれ、{師|し}の{決定|けってい}に{従|したが}うことになる。",
        "{個人的|こじんてき}なつながりと、{社会的|しゃかいてき}なつながりの{両面|りょうめん}を{持|も}っている。",
        "{同|おな}じ{志|こころざし}を{持|も}つ{者|もの}{同士|どうし}が{偶然|ぐうぜん}{出会|であ}って{結|むす}びついている。",
      ],
      optArti: [
        "Hubungan individual di mana murid mempelajari hal unggul dari sang guru.",
        "Murid dipilih oleh guru dan harus mengikuti keputusan guru.",
        "Memiliki dua sisi: hubungan pribadi dan hubungan sosial.",
        "Orang-orang dengan cita-cita sama kebetulan bertemu lalu terikat.",
      ],
    },
    56: {
      yomi: "{弟子|でし}と{生徒|せいと}について、{筆者|ひっしゃ}はどのようなものだと{述|の}べているか。",
      arti: "Menurut penulis, seperti apa murid (deshi) dan siswa (seito)?",
      optYomi: [
        "{弟子|でし}も{生徒|せいと}も、{師|し}や{教師|きょうし}と{心的|しんてき}なつながりを{前提|ぜんてい}とした{関係|かんけい}を{結|むす}んでいる。",
        "{弟子|でし}も{生徒|せいと}も、{学|まな}ぶということに{対|たい}する{基本的|きほんてき}な{姿勢|しせい}に{変|か}わりはない。",
        "{弟子|でし}は{自分|じぶん}の{学|まな}ぶべきことを{把握|はあく}しているが、{生徒|せいと}はあまり{認識|にんしき}していない。",
        "{弟子|でし}は{師|し}から{学|まな}ぼうとするが、{生徒|せいと}は{社会|しゃかい}のなかで{自然|しぜん}に{学|まな}んでいる。",
      ],
      optArti: [
        "Baik murid maupun siswa menjalin hubungan yang berlandaskan ikatan batin dengan master/guru.",
        "Baik murid maupun siswa, sikap dasarnya terhadap belajar tidak berbeda.",
        "Murid memahami apa yang harus ia pelajari, tetapi siswa kurang menyadarinya.",
        "Murid berusaha belajar dari masternya, sedangkan siswa belajar secara alami di masyarakat.",
      ],
    },
    57: {
      yomi: "「{教師|きょうし}と{生徒|せいと}」について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Tentang \"guru dan siswa\", apa kata penulis?",
      optYomi: [
        "{社会的|しゃかいてき}{役割|やくわり}よりも、{教師|きょうし}と{生徒|せいと}の{個人的|こじんてき}なつながりを{重視|じゅうし}している。",
        "{社会|しゃかい}システムのなかで、{生徒|せいと}の{個人|こじん}{形成|けいせい}を{目的|もくてき}とした{関係|かんけい}である。",
        "{互|たが}いに{公|おおやけ}の{立場|たちば}を{保|たも}ちつつ、{心的|しんてき}なつながりを{深|ふか}めようとしている。",
        "{近代|きんだい}の{膨大|ぼうだい}な{知|ち}や{生活|せいかつ}や{技術|ぎじゅつ}を{教|おし}え、{教|おし}えられる{私的|してき}な{関係|かんけい}である。",
      ],
      optArti: [
        "Lebih mementingkan hubungan pribadi guru dan siswa daripada peran sosial.",
        "Hubungan dalam sistem sosial yang bertujuan membentuk siswa sebagai individu.",
        "Sambil saling menjaga posisi publik, berusaha memperdalam ikatan batin.",
        "Hubungan pribadi mengajar dan diajar pengetahuan, kehidupan, dan teknologi modern yang sangat luas.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    58: {
      yomi: "{六回目|ろっかいめ}の{大絶滅|だいぜつめつ}の{前|まえ}までは、{生物|せいぶつ}{種|しゅ}の{数|かず}はどのように{変化|へんか}してきたか。",
      arti: "Sampai sebelum kepunahan massal keenam, bagaimana jumlah spesies makhluk hidup berubah?",
      optYomi: [
        "{約|やく}{五億|ごおく}{年|ねん}{前|まえ}をピークとして、その{後|ご}{急激|きゅうげき}に{減少|げんしょう}してきた。",
        "{約|やく}{五億|ごおく}{年|ねん}{前|まえ}に{急増|きゅうぞう}した{後|あと}、{五回|ごかい}の{急激|きゅうげき}な{減少|げんしょう}を{経験|けいけん}したが、{増加|ぞうか}してきた。",
        "{約|やく}{五億|ごおく}{年|ねん}{前|まえ}に{一度|いちど}{増加|ぞうか}したが、その{後|ご}は{五回|ごかい}の{急激|きゅうげき}な{減少|げんしょう}を{含|ふく}めて{減|へ}り{続|つづ}けてきた。",
        "{増加|ぞうか}し{続|つづ}けてきたが、{約|やく}{五億|ごおく}{年|ねん}{前|まえ}に{急激|きゅうげき}に{減少|げんしょう}し、その{後|ご}{再|ふたた}び{増加|ぞうか}してきた。",
      ],
      optArti: [
        "Memuncak sekitar 500 juta tahun lalu, lalu menurun drastis.",
        "Setelah melonjak sekitar 500 juta tahun lalu, mengalami lima kali penurunan drastis, tetapi tetap bertambah.",
        "Pernah bertambah sekitar 500 juta tahun lalu, tetapi setelah itu terus berkurang, termasuk lima kali penurunan drastis.",
        "Terus bertambah, tetapi menurun drastis sekitar 500 juta tahun lalu, lalu bertambah lagi.",
      ],
    },
    59: {
      yomi: "{今回|こんかい}の{生物|せいぶつ}の{大絶滅|だいぜつめつ}が{過去|かこ}と{異|こと}なるのはどのような{点|てん}か。",
      arti: "Dalam hal apa kepunahan massal kali ini berbeda dari masa lalu?",
      optYomi: [
        "{絶滅|ぜつめつ}の{速度|そくど}は{速|はや}くなっているが、{生息地|せいそくち}を{広|ひろ}げて{増加|ぞうか}する{種|しゅ}もあること。",
        "{絶滅|ぜつめつ}の{速度|そくど}が{非常|ひじょう}に{速|はや}くなるとともに、{原因|げんいん}も{分|わ}からなくなっていること。",
        "{人間|にんげん}の{行動|こうどう}パターンが{変化|へんか}することで、{生物|せいぶつ}{種|しゅ}の{数|かず}は{増加|ぞうか}していること。",
        "{人間|にんげん}の{行動|こうどう}によって、{自然界|しぜんかい}での{絶滅|ぜつめつ}の{速度|そくど}が{非常|ひじょう}に{速|はや}くなっていること。",
      ],
      optArti: [
        "Laju kepunahan makin cepat, tetapi ada juga spesies yang memperluas habitat dan bertambah.",
        "Laju kepunahan menjadi sangat cepat, sekaligus penyebabnya pun tidak diketahui.",
        "Karena pola perilaku manusia berubah, jumlah spesies bertambah.",
        "Akibat perilaku manusia, laju kepunahan di alam menjadi sangat cepat.",
      ],
    },
    60: {
      yomi: "{現在|げんざい}の{地球|ちきゅう}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pandangan penulis tentang bumi saat ini?",
      optYomi: [
        "{人間|にんげん}が{開発|かいはつ}のペースを{落|お}とせば、{生物|せいぶつ}{種|しゅ}の{絶滅|ぜつめつ}は{食|く}い{止|と}められる。",
        "{人間|にんげん}が{開発|かいはつ}{行為|こうい}を{続|つづ}ければ、{地球|ちきゅう}の{生態系|せいたいけい}はさらに{破壊|はかい}されるだろう。",
        "{人間|にんげん}は{開発|かいはつ}{行為|こうい}をやめて、{破壊|はかい}された{自然|しぜん}を{元|もと}に{戻|もど}さなければならない。",
        "{人間|にんげん}が{開発|かいはつ}{行為|こうい}をやめても、{生物|せいぶつ}{多様性|たようせい}の{減少|げんしょう}は{避|さ}けられない{可能性|かのうせい}が{高|たか}い。",
      ],
      optArti: [
        "Jika manusia memperlambat laju pembangunan, kepunahan spesies dapat dihentikan.",
        "Jika manusia terus melakukan pembangunan, ekosistem bumi akan semakin rusak.",
        "Manusia harus menghentikan pembangunan dan memulihkan alam yang rusak.",
        "Walaupun manusia menghentikan pembangunan, besar kemungkinan berkurangnya keanekaragaman hayati tak terhindarkan.",
      ],
    },

    // ── 問題11：統合理解 ──
    61: {
      yomi: "{多|おお}くの{情報|じょうほう}を{集|あつ}めることについて、AとBはどのように{述|の}べているか。",
      arti: "Tentang mengumpulkan banyak informasi, apa kata A dan B?",
      optYomi: [
        "AもBも、{重要|じゅうよう}だと{述|の}べている。",
        "AもBも、それだけでは{十分|じゅうぶん}ではないと{述|の}べている。",
        "Aは{重要|じゅうよう}だと{述|の}べ、Bはそれだけでは{十分|じゅうぶん}ではないと{述|の}べている。",
        "Aはそれだけでは{十分|じゅうぶん}ではないと{述|の}べ、Bは{重要|じゅうよう}だと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama mengatakan itu penting.",
        "A dan B sama-sama mengatakan itu saja tidak cukup.",
        "A mengatakan penting, B mengatakan itu saja tidak cukup.",
        "A mengatakan itu saja tidak cukup, B mengatakan penting.",
      ],
    },
    62: {
      yomi: "これからの{時代|じだい}に{必要|ひつよう}なことについて、AとBの{認識|にんしき}で{共通|きょうつう}していることは{何|なに}か。",
      arti: "Tentang hal yang dibutuhkan di zaman mendatang, apa kesamaan pandangan A dan B?",
      optYomi: [
        "{情報|じょうほう}{機器|きき}を{活用|かつよう}して、{新|あたら}しいものを{作|つく}り{出|だ}すこと。",
        "{自身|じしん}にとって、{有用|ゆうよう}な{情報|じょうほう}を{見極|みきわ}めること。",
        "{世|よ}の{中|なか}の{変化|へんか}を{正確|せいかく}に{予測|よそく}すること。",
        "{独創的|どくそうてき}なアイデアを{持|も}つこと。",
      ],
      optArti: [
        "Memanfaatkan perangkat informasi untuk menciptakan hal baru.",
        "Memilah informasi yang berguna bagi diri sendiri.",
        "Memprediksi perubahan dunia dengan tepat.",
        "Memiliki ide yang orisinal.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    63: {
      yomi: "{筆者|ひっしゃ}によれば、{上司|じょうし}にとって論田くんのミスの「{情報|じょうほう}{占有率|せんゆうりつ}」が{上|あ}がるのはどのような{場合|ばあい}か。",
      arti: "Menurut penulis, dalam kasus apa \"porsi informasi\" kesalahan 論田-kun bagi atasan menjadi besar?",
      optYomi: [
        "{付|つ}き{合|あ}いの{長|なが}い{上司|じょうし}との{関係|かんけい}の{中|なか}で、論田くんがミスを1{回|かい}した{場合|ばあい}。",
        "{付|つ}き{合|あ}いの{長|なが}い{上司|じょうし}との{関係|かんけい}の{中|なか}で、論田くんがミスを3{回|かい}した{場合|ばあい}。",
        "{付|つ}き{合|あ}いの{短|みじか}い{上司|じょうし}との{関係|かんけい}の{中|なか}で、論田くんがミスを1{回|かい}した{場合|ばあい}。",
        "{付|つ}き{合|あ}いの{短|みじか}い{上司|じょうし}との{関係|かんけい}の{中|なか}で、論田くんがミスを3{回|かい}した{場合|ばあい}。",
      ],
      optArti: [
        "Ketika 論田-kun berbuat salah 1 kali dalam hubungan dengan atasan yang sudah lama mengenalnya.",
        "Ketika 論田-kun berbuat salah 3 kali dalam hubungan dengan atasan yang sudah lama mengenalnya.",
        "Ketika 論田-kun berbuat salah 1 kali dalam hubungan dengan atasan yang baru sebentar mengenalnya.",
        "Ketika 論田-kun berbuat salah 3 kali dalam hubungan dengan atasan yang baru sebentar mengenalnya.",
      ],
    },
    64: {
      yomi: "{自分|じぶん}にうそのないふるまいとはどのようなものか。",
      arti: "Seperti apa \"perilaku yang tidak membohongi diri sendiri\"?",
      optYomi: [
        "その{時々|ときどき}のすなおな{気持|きも}ちを{表|あらわ}すこと。",
        "いつも{正直|しょうじき}に{自分|じぶん}の{考|かんが}えを{伝|つた}えること。",
        "いつもどおりの{姿|すがた}を{見|み}せること。",
        "うそをつかず{正直|しょうじき}に{話|はな}すこと。",
      ],
      optArti: [
        "Mengungkapkan perasaan apa adanya pada saat itu.",
        "Selalu menyampaikan pendapat sendiri dengan jujur.",
        "Menunjukkan diri seperti biasanya.",
        "Berbicara jujur tanpa berbohong.",
      ],
    },
    65: {
      yomi: "{筆者|ひっしゃ}は、なぜ{初対面|しょたいめん}の{相手|あいて}に{慎重|しんちょう}になったほうがいいと{述|の}べているのか。",
      arti: "Mengapa penulis mengatakan sebaiknya berhati-hati terhadap orang yang baru pertama kali ditemui?",
      optYomi: [
        "{普段|ふだん}どおりの{態度|たいど}では、{相手|あいて}に{自分|じぶん}の{良|よ}さを{十分|じゅうぶん}に{伝|つた}えられないから。",
        "{自分|じぶん}に{関|かん}する{一部|いちぶ}の{情報|じょうほう}で{相手|あいて}がすべてを{判断|はんだん}するかもしれないから。",
        "{相手|あいて}の{性格|せいかく}が{自分|じぶん}と{合|あ}うかどうかがまだよくわかっていないから。",
        "{初対面|しょたいめん}の{相手|あいて}には{慎重|しんちょう}な{姿|すがた}が{実像|じつぞう}だと{思|おも}わせる{必要|ひつよう}があるから。",
      ],
      optArti: [
        "Karena dengan sikap biasa, kelebihan diri tidak tersampaikan sepenuhnya.",
        "Karena lawan bicara mungkin menilai segalanya dari sebagian informasi tentang diri kita.",
        "Karena belum tahu apakah karakter lawan bicara cocok dengan kita.",
        "Karena orang yang baru dikenal perlu dibuat mengira sosok yang hati-hati itulah diri kita yang sebenarnya.",
      ],
    },
    66: {
      yomi: "{自分|じぶん}の「メディア{力|りょく}」について、{筆者|ひっしゃ}はどのようにするのがよいと{述|の}べているか。",
      arti: "Tentang \"daya media\" (citra yang tertanam di benak orang lain) diri sendiri, menurut penulis sebaiknya bagaimana?",
      optYomi: [
        "{相手|あいて}に{自分|じぶん}の「メディア{力|りょく}」が{正確|せいかく}に{伝|つた}わるように{意識|いしき}する。",
        "{相手|あいて}に{普段|ふだん}の{自分|じぶん}{以上|いじょう}の「メディア{力|りょく}」を{伝|つた}えるようにする。",
        "{相手|あいて}に{刻|きざ}まれた{自分|じぶん}の「メディア{力|りょく}」を{気|き}にせず{平常心|へいじょうしん}でいる。",
        "{相手|あいて}に{見|み}せる{自分|じぶん}の「メディア{力|りょく}」を{下|さ}げないように{静|しず}かにしている。",
      ],
      optArti: [
        "Sadar berusaha agar \"daya media\" diri tersampaikan dengan tepat kepada lawan bicara.",
        "Berusaha menyampaikan \"daya media\" melebihi diri yang biasa.",
        "Tetap tenang tanpa memedulikan \"daya media\" diri yang sudah terukir pada lawan bicara.",
        "Bersikap diam agar \"daya media\" yang ditunjukkan tidak turun.",
      ],
    },

    // ── 問題13：情報検索 ──
    67: {
      yomi: "ソン{先生|せんせい}は、{来月|らいげつ}{以降|いこう}にクラスの{学生|がくせい}15{名|めい}を{連|つ}れて、「B.{工場|こうじょう}{見学|けんがく}」に{行|い}きたいと{考|かんが}えている。{予約|よやく}に{関|かん}して、{注意|ちゅうい}しなければならないことは{何|なに}か。",
      arti: "Son-sensei ingin membawa 15 mahasiswa kelasnya ke \"B. Kunjungan pabrik\" bulan depan atau sesudahnya. Terkait reservasi, apa yang harus diperhatikan?",
      optYomi: [
        "インターネットで{行|おこな}う{場合|ばあい}は{見学|けんがく}{希望|きぼう}{日|び}の{3日|みっか}{前|まえ}まで、{電話|でんわ}の{場合|ばあい}は{前日|ぜんじつ}までにする。",
        "インターネットでも{電話|でんわ}でもいいが、{見学|けんがく}{希望|きぼう}{日|び}の{7日|なのか}{前|まえ}までにする。",
        "{電話|でんわ}で{見学|けんがく}{希望|きぼう}{日|び}の{7日|なのか}{前|まえ}までにする。",
        "{電話|でんわ}で{見学|けんがく}{希望|きぼう}{日|び}の{前日|ぜんじつ}までにする。",
      ],
      optArti: [
        "Lewat internet paling lambat 3 hari sebelum tanggal kunjungan, lewat telepon paling lambat sehari sebelumnya.",
        "Boleh lewat internet maupun telepon, tetapi paling lambat 7 hari sebelum tanggal kunjungan.",
        "Lewat telepon, paling lambat 7 hari sebelum tanggal kunjungan.",
        "Lewat telepon, paling lambat sehari sebelum tanggal kunjungan.",
      ],
    },
    68: {
      yomi: "マルコさんは{友達|ともだち}と{3人|さんにん}で「A.{工場|こうじょう}{見学|けんがく}と{陶芸|とうげい}{体験|たいけん}」に{行|い}きたいと{考|かんが}えている。12{月|がつ}15{日|にち}から21{日|にち}の{間|あいだ}の{3人|さんにん}の{空|あ}いている{日時|にちじ}をメモにまとめたが、{予約|よやく}が{入|い}れられる{日時|にちじ}はいつか。また、{当日|とうじつ}の{見学|けんがく}についての{注意|ちゅうい}{事項|じこう}として、{合|あ}っているのはどれか。\n\nマルコさんのメモ\nハヌルさん　16{午後|ごご}のみ、20{午前|ごぜん}のみ\nアットさん　16{午後|ごご}のみ、18、19{午前|ごぜん}のみ、20、21\nマルコ　16、19{午後|ごご}のみ、20、21",
      arti: "Marco ingin pergi bertiga dengan temannya ke \"A. Kunjungan pabrik dan pengalaman membuat keramik\". Ia mencatat waktu luang mereka bertiga antara 15–21 Desember; kapan waktu yang bisa direservasi? Lalu, mana keterangan yang benar tentang kunjungan pada hari itu?\n\nCatatan Marco\nHaneul: tgl 16 hanya sore, tgl 20 hanya pagi\nAtt: tgl 16 hanya sore, 18, 19 hanya pagi, 20, 21\nMarco: 16, 19 hanya sore, 20, 21",
      optYomi: [
        "16{日|にち}の14{時|じ}と{20日|はつか}の{9時|くじ}。{見学|けんがく}は16{日|にち}はすべてできるが、{20日|はつか}は{一部|いちぶ}できない{所|ところ}がある。",
        "16{日|にち}の14{時|じ}と{20日|はつか}の{9時|くじ}。{見学|けんがく}は16{日|にち}も{20日|はつか}も{一部|いちぶ}できない{所|ところ}がある。",
        "{20日|はつか}の{9時|くじ}。{見学|けんがく}は{一部|いちぶ}できない{所|ところ}がある。",
        "{20日|はつか}の{9時|くじ}。{見学|けんがく}はできない。",
      ],
      optArti: [
        "Tgl 16 pukul 14 dan tgl 20 pukul 9. Tgl 16 semua bagian bisa dikunjungi, tetapi tgl 20 ada bagian yang tidak bisa.",
        "Tgl 16 pukul 14 dan tgl 20 pukul 9. Baik tgl 16 maupun tgl 20 ada bagian yang tidak bisa dikunjungi.",
        "Tgl 20 pukul 9. Ada bagian yang tidak bisa dikunjungi.",
        "Tgl 20 pukul 9. Kunjungan pabrik tidak bisa dilakukan.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：文芸の毒 ──
    "7": {
      yomi: `「{事実|じじつ}は{小説|しょうせつ}よりも{奇|き}（{注|ちゅう}1）なり——と{言|い}われるのは、たいていの{場合|ばあい}、{事実|じじつ}は{平凡|へいぼん}で{小説|しょうせつ}が{奇|き}であるからこそ、いや、そうでないこともあるのだぞ、という{警告|けいこく}をこめてのことであろう。

{実物|じつぶつ}よりもそれを{写|うつ}した{写真|しゃしん}や{絵|え}の{方|ほう}が{美|うつく}しく、{実在|じつざい}の{悪党|あくとう}よりもそれを{主人公|しゅじんこう}として{描|えが}いた{小説|しょうせつ}や{映画|えいが}の{中|なか}に{出|で}てくるそいつの{方|ほう}が、ずっと、{悪辣|あくらつ}{残虐|ざんぎゃく}な{印象|いんしょう}を{与|あた}えるということがある。{芸術|げいじゅつ}の{力|ちから}、{言葉|ことば}の[41]。

{私|わたし}は{永井荷風|ながいかふう}（{注|ちゅう}2）の{小品|しょうひん}「{春|はる}のおとずれ」（{明治|めいじ}{四十二年|よんじゅうにねん}{作|さく}）を{読|よ}んだとき、かるい{衝撃|しょうげき}を{受|う}けた。{生|うま}れてこの{方|かた}、{何十回|なんじっかい}もの{春|はる}の{訪|おとず}れを{実験|じっけん}（{実際|じっさい}に{体験|たいけん}）してきたにもかかわらず、{荷風|かふう}がたった{七|しち}、{八|はち}ページの{文章|ぶんしょう}の{中|なか}で{描写|びょうしゃ}した{春|はる}の{息吹|いぶ}き、{鼓動|こどう}の{一万分|いちまんぶん}の{一|いち}すらも{私|わたし}は{実感|じっかん}したことがないということに{気付|きづ}いたのである。

{私|わたし}は{荷風|かふう}の{文章|ぶんしょう}——{庭|にわ}の{土|つち}の{色|いろ}の{変化|へんか}や{庭先|にわさき}に{生動|せいどう}する{楓|かえで}や{野菊|のぎく}の{様子|ようす}、{流|なが}れ{渡|わた}る{日|ひ}の{光|ひかり}、{風|かぜ}ともつかぬゆるやかな{大気|たいき}の{動|うご}き、{鶯|うぐいす}や{雀|すずめ}の{声|こえ}、それらの{仔細|しさい}を{美|うつく}しい{言葉|ことば}にのせて{綴|つづ}った{文章|ぶんしょう}を{読|よ}んで、はじめて、{訪|おとず}れる{春|はる}の{本質|ほんしつ}というものを{感|かん}じ、かつ{知|し}ったような{気|き}がした。{大自然|だいしぜん}を{凌駕|りょうが}する{文芸|ぶんげい}の{力|ちから}がそこにあった。

{私|わたし}の{敬愛|けいあい}する{知人|ちじん}の{一人|ひとり}が[42]{言|い}った。——「{昔|むかし}、{文学|ぶんがく}をやろうと{思|おも}ったこともあったが、{永井荷風|ながいかふう}がいるんでやめたよ。{荷風|かふう}があれだけのことをやっているんだもの。おれが{何|なに}か{書|か}いたってかないっこないし、またその{必要|ひつよう}もないしね」。

はじめ、{冗談|じょうだん}{半分|はんぶん}のつくりごとか、{照|て}れかくしのための{大|おお}げさな{言|い}い{回|まわ}しかと{思|おも}っていた。この{言葉|ことば}を{聞|き}いて{二十年|にじゅうねん}{経|た}ち、その{間|あいだ}、この{人|ひと}と{文学談|ぶんがくだん}めいた{話|はなし}は{二度|にど}と{交|か}わしたことはないが、このごろ、あれはホンネだったのだと[43]。

{文筆|ぶんぴつ}の{才|さい}があり、{今|いま}も{若|わか}い{人|ひと}たちに{慕|した}われている{人|ひと}である。{表立|おもてだ}ったところには{一切|いっさい}ものを{書|か}こうとはしない。{著書|ちょしょ}なんかとんでもないという{人|ひと}である。{私|わたし}はこの{人|ひと}は{荷風|かふう}の{毒|どく}にあたったのではないかと{思|おも}う。あまりにもすぐれた{文芸|ぶんげい}は、そのつよい{毒|どく}であとから{来|く}る{人|ひと}の{意気|いき}（{注|ちゅう}3）を{沮喪|そそう}してしまうことがあるのではないか。[44]、{明治|めいじ}{四十二年|よんじゅうにねん}いらい、{有名|ゆうめい}{作家|さっか}の{筆|ふで}になるもので、{春|はる}の{訪|おとず}れそのものを{描|えが}いた{作品|さくひん}はほとんど{見当|みあ}らないようであるが？

（{注|ちゅう}1）{奇|き}なり：{不思議|ふしぎ}である
（{注|ちゅう}2）{永井荷風|ながいかふう}：20{世紀|せいき}{初|はじ}めから{半|なか}ばにかけて{活躍|かつやく}した{小説家|しょうせつか}
（{注|ちゅう}3）{意気|いき}を{沮喪|そそう}する：やる{気|き}を{失|うしな}わせる`,
      arti: `"Kenyataan lebih aneh (catatan 1) daripada novel" — ungkapan ini biasanya diucapkan sebagai peringatan: justru karena kenyataan umumnya biasa saja sedangkan novel itu aneh, maka ketahuilah, ada kalanya tidak demikian.

Ada kalanya foto atau lukisan lebih indah daripada benda aslinya, dan penjahat yang muncul dalam novel atau film yang menjadikannya tokoh utama memberi kesan jauh lebih licik dan kejam daripada penjahat yang sebenarnya. Kekuatan seni, kekuatan kata-kata [41].

Ketika membaca karya pendek Nagai Kafū (catatan 2), "Datangnya Musim Semi" (ditulis tahun Meiji 42), saya mendapat sedikit guncangan. Meskipun sejak lahir saya sudah "bereksperimen" (benar-benar mengalami) datangnya musim semi puluhan kali, saya sadar bahwa saya belum pernah merasakan bahkan sepersepuluh ribu dari hembusan napas dan denyut musim semi yang dilukiskan Kafū dalam tulisan yang hanya tujuh-delapan halaman itu.

Setelah membaca tulisan Kafū — yang merangkai dengan kata-kata indah rincian perubahan warna tanah di kebun, keadaan pohon maple dan krisan liar yang hidup bergerak di halaman, cahaya matahari yang mengalir, gerak udara yang lembut yang tak bisa disebut angin, suara burung uguisu dan pipit — untuk pertama kalinya saya merasa merasakan sekaligus mengetahui hakikat datangnya musim semi. Di situ ada kekuatan sastra yang melampaui alam raya.

[42] seorang kenalan yang saya hormati berkata, — "Dulu aku pernah berniat menekuni sastra, tapi berhenti karena ada Nagai Kafū. Kafū sudah melakukan sejauh itu. Apa pun yang kutulis tak akan bisa menandinginya, dan lagi pula tidak perlu."

Awalnya saya kira itu karangan setengah bercanda, atau ungkapan berlebihan untuk menutupi rasa malu. Sudah dua puluh tahun sejak mendengar kata-kata itu, dan selama itu saya tak pernah lagi berbincang soal sastra dengannya, tetapi belakangan ini [43] bahwa itu adalah isi hatinya yang sebenarnya.

Ia orang yang berbakat menulis dan sampai sekarang masih dihormati anak-anak muda. Namun ia sama sekali tidak mau menulis di tempat yang terbuka untuk umum. Menerbitkan buku pun baginya hal yang mustahil. Saya pikir orang ini mungkin terkena racun Kafū. Bukankah sastra yang terlalu unggul bisa, dengan racunnya yang kuat, mematahkan semangat (catatan 3) orang-orang yang datang sesudahnya? [44], sejak tahun Meiji 42, tampaknya hampir tidak ada karya penulis terkenal yang melukiskan datangnya musim semi itu sendiri, bukan?

(Catatan 1) 奇なり: aneh, ajaib
(Catatan 2) Nagai Kafū: novelis yang aktif dari awal hingga pertengahan abad ke-20
(Catatan 3) 意気を沮喪する: mematahkan semangat`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{昨今|さっこん}の{雑誌|ざっし}はあまりにもレイアウトに{凝|こ}りすぎる。{最初|さいしょ}に{紙面|しめん}をこまかく{仕切|しき}っておいて、それに{合|あ}わせて{原稿|げんこう}をつくるから、{読|よ}んでいても{書|か}いていても{息苦|いきぐる}しい。デザイナーは{設計図|せっけいず}に{合|あ}わせて{材料|ざいりょう}に{手|て}をくわえる。{足|た}りなければ{増|ふ}やし、はみだせば{切|き}りちぢめる。でも{編集者|へんしゅうしゃ}はちがう。{編集|へんしゅう}とは{本来|ほんらい}、すでにある{材料|ざいりょう}をそのまま{組|く}み{合|あ}わせ、そのことによって{新|あたら}しい{意味|いみ}の{深|ふか}さやひろがりをつくりだす{作業|さぎょう}なのだ。{私|わたし}はデザイナーではなく{編集者|へんしゅうしゃ}がつくった{雑誌|ざっし}が{読|よ}みたい。`,
      arti: `Majalah zaman sekarang terlalu berlebihan menggarap tata letak. Halaman dipetak-petak kecil lebih dulu, lalu naskah dibuat menyesuaikannya, sehingga baik membaca maupun menulis terasa sesak. Desainer mengolah bahan agar sesuai dengan cetak birunya. Kalau kurang ditambah, kalau kelebihan dipotong. Tetapi editor berbeda. Menyunting pada dasarnya adalah pekerjaan menggabungkan bahan yang sudah ada apa adanya, dan dengan itu menciptakan kedalaman dan keluasan makna yang baru. Saya ingin membaca majalah yang dibuat oleh editor, bukan oleh desainer.`,
    },
    "8-2": {
      yomi: `{並木|なみき}は{四季|しき}{折々|おりおり}に{変化|へんか}する{自然|しぜん}の{壁|かべ}である。{葉|は}を{落|お}として{列柱|れっちゅう}のような{状態|じょうたい}があったり、{花|はな}を{咲|さ}かせて{賑|にぎ}やかなトンネル{状|じょう}の{壁|かべ}をつくったり、{葉|は}を{繁|しげ}らせて{密|みつ}な{緑陰|りょくいん}の{壁|かべ}になったりする。この{連続|れんぞく}する{柔|やわ}らかな{透|す}けた{壁|かべ}が、どれほど{街並|まちなみ}の{一体化|いったいか}に{役立|やくだ}っているか、まとまりがなく{不揃|ふぞろ}いな{街路|がいろ}も、{並木|なみき}によってまとめられ、{緩|ゆる}やかな{連結|れんけつ}を{成功|せいこう}させている{例|れい}など、{数|かぞ}え{上|あ}げればきりがないのである。`,
      arti: `Deretan pohon di tepi jalan adalah dinding alami yang berubah di setiap musim. Kadang daunnya gugur sehingga tampak seperti barisan tiang, kadang berbunga membentuk dinding berbentuk terowongan yang semarak, kadang daunnya lebat menjadi dinding keteduhan hijau yang rapat. Betapa dinding lembut tembus pandang yang bersambung ini membantu menyatukan wajah kota — contoh jalan yang tidak teratur dan tidak seragam pun dapat dipersatukan oleh deretan pohon sehingga berhasil terhubung secara luwes, tak terhitung banyaknya.`,
    },
    "8-3": {
      yomi: `わたしが{幼児期|ようじき}から{青年期|せいねんき}までをすごした{半|はん}{世紀|せいき}まえの「{日本|にほん}」は{現在|げんざい}の「{日本|にほん}」からみれば「{外国|がいこく}」である。

あるいはわたしにとっての「{母国|ぼこく}」はすでにどこかに{消|き}え{去|さ}って、いまのわたしは{馴|な}れない「{外国|がいこく}{暮|ぐ}らし」をしているのかもしれぬ。{国名|こくめい}だけはかわっていないが、ひとつの「{時代|じだい}」は「{外国|がいこく}」であり、そこにあるのはあきらかに「{異文化|いぶんか}」なのである。`,
      arti: `"Jepang" setengah abad lalu, tempat saya melewati masa kanak-kanak hingga masa muda, jika dilihat dari "Jepang" sekarang adalah "negeri asing".

Atau mungkin "tanah air" bagi saya sudah lenyap entah ke mana, dan saya yang sekarang sedang menjalani "hidup di negeri asing" yang belum terbiasa. Hanya nama negaranya yang tidak berubah, tetapi satu "zaman" adalah "negeri asing", dan yang ada di sana jelas merupakan "budaya lain".`,
    },
    "8-4": {
      yomi: `{筆者|ひっしゃ}がレコード{会社|がいしゃ}の{宣伝|せんでん}{担当者|たんとうしゃ}から{聞|き}いた{言葉|ことば}に「{流行|りゅうこう}は{流行|はや}っていると{思|おも}わせれば、{本当|ほんとう}に{流行|はや}る」というのがある。こうした{宣伝|せんでん}の{場面|ばめん}において{音楽|おんがく}{産業|さんぎょう}が{力|ちから}を{注|そそ}ぐのは「{事実|じじつ}」ではなく「{買|か}い{手|て}にそう{思|おも}わせること」、つまり「{認識|にんしき}の{形成|けいせい}」である。こうした{手法|しゅほう}を{音楽|おんがく}{産業|さんぎょう}は「{夢|ゆめ}を{売|う}る」とよく{呼|よ}ぶ。つまり{音楽|おんがく}{産業|さんぎょう}は{買|か}い{手|て}がほしがる「ファンタジー（{注|ちゅう}1）」を{先|さき}んじて（{注|ちゅう}2）キャッチし、{商品化|しょうひんか}し、{売|う}ることに{長|た}けている（{注|ちゅう}3）。

（{注|ちゅう}1）ファンタジー：{幻想|げんそう}
（{注|ちゅう}2）{先|さき}んじて：ここでは、{誰|だれ}よりも{早|はや}く
（{注|ちゅう}3）{長|た}けている：{優|すぐ}れている`,
      arti: `Di antara kata-kata yang penulis dengar dari staf promosi sebuah perusahaan rekaman, ada ungkapan: "Tren itu, kalau orang dibuat merasa sedang ngetren, akan benar-benar jadi tren." Dalam promosi seperti ini, yang dikejar industri musik bukanlah "fakta", melainkan "membuat pembeli berpikir demikian", yaitu "pembentukan persepsi". Industri musik sering menyebut metode ini "menjual mimpi". Artinya, industri musik pandai (catatan 3) menangkap lebih dulu (catatan 2) "fantasi (catatan 1)" yang diinginkan pembeli, menjadikannya produk, lalu menjualnya.

(Catatan 1) fantasi: khayalan, ilusi
(Catatan 2) 先んじて: di sini, lebih cepat dari siapa pun
(Catatan 3) 長けている: unggul, mahir`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{近年|きんねん}、わが{国|くに}では、{物事|ものごと}を{解説|かいせつ}したり、{考|かんが}えや{視点|してん}を{明確|めいかく}に{伝|つた}えたりする{際|さい}に、{難解|なんかい}な{言葉|ことば}や{文章|ぶんしょう}を{使|つか}うことは{敬遠|けいえん}され、よりわかりやすい{言葉|ことば}や{文章|ぶんしょう}、{語|かた}りが{求|もと}められる{傾向|けいこう}が{顕著|けんちょ}である。テレビの{番組|ばんぐみ}などでニュース{解説|かいせつ}を{担当|たんとう}するキャスターの{中|なか}には、そのわかりやすい{解説|かいせつ}で{人気|にんき}を{博|はく}す（{注|ちゅう}1）{者|もの}もある。わかりやすさは{確|たし}かに{重要|じゅうよう}であり、{学校|がっこう}の{授業|じゅぎょう}でもよい{授業|じゅぎょう}、{子|こ}どもたちの{効率|こうりつ}のよい{学習|がくしゅう}{活動|かつどう}が{展開|てんかい}される{授業|じゅぎょう}における{指導者|しどうしゃ}の{言葉|ことば}や{解説|かいせつ}は、わかりやすく{的確|てきかく}である。さらに{各種|かくしゅ}の{映像|えいぞう}{装置|そうち}を{駆使|くし}するなど、わかりやすさを{実現|じつげん}するための{技術|ぎじゅつ}も{進歩|しんぽ}している。そこでは、{言葉|ことば}が{思考|しこう}と{伝達|でんたつ}のための{主|しゅ}たる{役目|やくめ}を{担|にな}うことになるが、そのわかりやすさはときとして、{受|う}け{取|と}る{側|がわ}の{思考|しこう}の{多様性|たようせい}や{広|ひろ}がり、{深|ふか}まりを{妨害|ぼうがい}することがある。

わかりにくいものとわかりやすいものがあれば、{人|ひと}は{当然|とうぜん}わかりやすい{方|ほう}を{選択|せんたく}する。わかりやすく{的確|てきかく}な{言葉|ことば}は、そのまま{学習者|がくしゅうしゃ}の{中|なか}に{蓄|たくわ}えられる。そして、{多|おお}くの{人|ひと}はその{時点|じてん}で{学習|がくしゅう}が{終了|しゅうりょう}したと{考|かんが}えるのである。わからなかったことがわかった、{新|あたら}しい{知識|ちしき}を{得|え}た、これが{学習|がくしゅう}の{最終|さいしゅう}{段階|だんかい}だと{思|おも}ってしまうのである。しかしそれは、{自身|じしん}の{中|なか}にその{解説|かいせつ}を{発|はっ}した{人|ひと}の{言葉|ことば}や{考|かんが}えを{取|と}り{入|い}れたにすぎない。「{学|まな}びの{真正性|しんせいせい}（{注|ちゅう}2）」とは、そこから{自身|じしん}の{新|あら}たな{思考|しこう}を{広|ひろ}げ、それらが{表現|ひょうげん}される{段階|だんかい}まで{進|すす}むことである。そして、その{多|おお}くは{自分|じぶん}1{人|ひとり}で{行|おこな}われるものではなく、{他者|たしゃ}との{関係性|かんけいせい}の{中|なか}で{成立|せいりつ}することが{多|おお}い。

（{注|ちゅう}1）{博|はく}す：{得|え}る
（{注|ちゅう}2）{学|まな}びの{真正性|しんせいせい}：ここでは、{本物|ほんもの}の{学|まな}び`,
      arti: `Belakangan ini di negeri kita, ketika menjelaskan sesuatu atau menyampaikan gagasan dan sudut pandang dengan jelas, penggunaan kata dan kalimat yang sulit dihindari, dan kecenderungan menuntut kata, kalimat, dan tuturan yang lebih mudah dipahami sangat menonjol. Di antara pembawa acara yang bertugas mengulas berita di program televisi, ada yang meraih (catatan 1) popularitas berkat ulasannya yang mudah dipahami. Kemudahan dipahami memang penting; di sekolah pun, kata-kata dan penjelasan pengajar dalam pelajaran yang baik — pelajaran di mana kegiatan belajar anak berlangsung efisien — mudah dipahami dan tepat. Selain itu, teknologi untuk mewujudkan kemudahan itu juga maju, misalnya dengan memanfaatkan berbagai perangkat visual. Di sana kata-kata memegang peran utama untuk berpikir dan menyampaikan, tetapi kemudahan dipahami itu terkadang menghambat keragaman, keluasan, dan kedalaman pemikiran pihak penerima.

Jika ada yang sulit dipahami dan yang mudah dipahami, tentu orang memilih yang mudah. Kata-kata yang mudah dipahami dan tepat langsung tersimpan dalam diri pembelajar. Lalu banyak orang menganggap belajarnya sudah selesai pada saat itu. Mereka mengira bahwa "yang tadinya tidak paham jadi paham, mendapat pengetahuan baru" itulah tahap akhir belajar. Namun itu hanyalah memasukkan kata-kata dan pikiran orang yang memberi penjelasan ke dalam diri sendiri. "Keaslian belajar (catatan 2)" adalah melangkah dari situ untuk mengembangkan pemikiran baru diri sendiri sampai ke tahap pemikiran itu diungkapkan. Dan sebagian besar hal itu tidak dilakukan seorang diri, melainkan sering terwujud dalam hubungan dengan orang lain.

(Catatan 1) 博す: meraih, mendapat
(Catatan 2) 学びの真正性: di sini, pembelajaran yang sejati`,
    },
    "9-2": {
      yomi: `ある{行動|こうどう}を{何度|なんど}も{繰|く}り{返|かえ}せば、それが{自動化|じどうか}され、あまりそのことに{思考|しこう}を{向|む}けないようになっていくことが{多|おお}いが、いつもそうなるとは{限|かぎ}らない。たとえば、{人|ひと}との{雑談|ざつだん}の{中|なか}で、{自分|じぶん}の{考|かんが}えを{率直|そっちょく}に{述|の}べるということをいつもやっていれば、{確|たし}かに①そのことは{自動化|じどうか}され、{自分|じぶん}の{考|かんが}えを{述|の}べようと{特|とく}に{意識|いしき}しないでも、{気楽|きらく}に{自分|じぶん}の{考|かんが}えを{話|はな}すような{習慣|しゅうかん}ができる。（{中略|ちゅうりゃく}）

しかし、もし、{率直|そっちょく}に{自分|じぶん}の{考|かんが}えを{述|の}べた{時|とき}に、{周囲|しゅうい}の{人|ひと}から{非難|ひなん}されたり、{拒否|きょひ}されたりするということが{繰|く}り{返|かえ}されると、{多|おお}くの{場合|ばあい}、{率直|そっちょく}に{話|はな}すと{自分|じぶん}にマイナスになるという{考|かんが}えが{起|お}こって、{率直|そっちょく}に{話|はな}すという{行動|こうどう}に{自分|じぶん}でブレーキをかけるようになる。{何回|なんかい}もブレーキをかけていると、ブレーキをかけること{自体|じたい}が{自動化|じどうか}して、{自分|じぶん}では{行動|こうどう}の{結果|けっか}をとりたてて{予測|よそく}することなしに、{何|なん}となく、{率直|そっちょく}に{発言|はつげん}することが{少|すく}なくなり、おとなしくなるといった{変化|へんか}が{起|お}こってくる。②このような{現象|げんしょう}を{行動|こうどう}の{抑制|よくせい}の{自動化|じどうか}という。

{行動|こうどう}の{抑制|よくせい}の{場合|ばあい}も、それが{自動化|じどうか}すればするほど、{思考|しこう}の{果|は}たす{役割|やくわり}は{少|すく}なくなるのだが、{思考|しこう}の{仕方|しかた}や{内容|ないよう}によって{抑制|よくせい}の{度合|どあ}いは{変|か}わってくる。たとえば、{自分|じぶん}の{述|の}べようとする{意見|いけん}について、{何回|なんかい}も{繰|く}り{返|かえ}し{考|かんが}えていると、だんだん{抑制|よくせい}が{弱|よわ}まってきて、{気楽|きらく}に{発言|はつげん}できるようになることもあり、{逆|ぎゃく}に、{考|かんが}えれば{考|かんが}えるほど、{発言|はつげん}{後|ご}のいやな{予想|よそう}と{結|むす}びつき、{抑制|よくせい}が{強|つよ}まったりもする。このように、{行動|こうどう}の{抑制|よくせい}に{対|たい}しても、{暗示|あんじ}とまではいかないが、{思考|しこう}が{影響|えいきょう}を{及|およ}ぼすのである。`,
      arti: `Jika suatu tindakan diulang berkali-kali, sering kali tindakan itu menjadi otomatis dan kita tidak lagi banyak memikirkannya, tetapi tidak selalu begitu. Misalnya, jika dalam obrolan dengan orang lain kita selalu menyatakan pendapat dengan terus terang, memang ① hal itu menjadi otomatis, dan terbentuk kebiasaan berbicara santai tentang pendapat sendiri tanpa perlu secara khusus sadar ingin menyatakannya. (dipersingkat)

Namun, jika setiap kali menyatakan pendapat secara terus terang kita berulang kali dikecam atau ditolak orang di sekitar, dalam banyak kasus muncul pikiran bahwa bicara terus terang akan merugikan diri sendiri, lalu kita mulai mengerem sendiri tindakan berbicara terus terang. Kalau sudah berkali-kali mengerem, tindakan mengerem itu sendiri menjadi otomatis, sehingga tanpa secara khusus memprediksi akibat tindakan, entah kenapa kita jadi jarang berbicara terus terang dan menjadi pendiam. ② Fenomena seperti ini disebut otomatisasi penahanan tindakan.

Dalam penahanan tindakan pun, semakin otomatis, semakin kecil peran pikiran, tetapi kadar penahanannya berubah tergantung cara dan isi berpikir. Misalnya, jika kita memikirkan berulang-ulang pendapat yang ingin kita sampaikan, penahanan perlahan melemah dan kita bisa berbicara dengan santai; sebaliknya, semakin dipikirkan, semakin terkait dengan bayangan buruk setelah berbicara, sehingga penahanannya justru menguat. Dengan demikian, terhadap penahanan tindakan pun, walau tidak sampai menjadi sugesti, pikiran memberi pengaruh.`,
    },
    "9-3": {
      yomi: `「{教師|きょうし}と{生徒|せいと}」「{師|し}と{弟子|でし}」は、{位相|いそう}（{注|ちゅう}1）は{似|に}ているがまったく{質|しつ}の{異|こと}なるものだ。{弟子|でし}は{師|し}を{選|えら}べるが、{生徒|せいと}は{教師|きょうし}を{選|えら}べない。{師|し}も{弟子|でし}を{選|えら}べるが、{教師|きょうし}は{生徒|せいと}を{選|えら}べない。{師|し}はいわば{固有|こゆう}の{独|ひと}りの{人|ひと}だが、{教師|きょうし}はたくさんいるなかの{偶然的|ぐうぜんてき}な{一人|ひとり}である。「{師|し}と{弟子|でし}」は「{教師|きょうし}と{生徒|せいと}」の{煮|に}つめられた（{注|ちゅう}2）{範型|はんけい}（モデル）ではない。「{教師|きょうし}と{生徒|せいと}」は{近代|きんだい}のものだが、「{師|し}と{弟子|でし}」は{思想|しそう}（{宗教|しゅうきょう}）や{武術|ぶじゅつ}や{技能|ぎのう}や{芸術|げいじゅつ}の{世界|せかい}には{昔|むかし}からあったもので、「{特別|とくべつ}に{卓越|たくえつ}した{人|ひと}」からその「{優|すぐ}れたもの」を{真摯|しんし}に{学|まな}ぼうとするごく{特殊|とくしゅ}な{個別的|こべつてき}なつながりである。「{師|し}と{弟子|でし}」の{場合|ばあい}、{弟子|でし}は{何|なに}を{学|まな}ぼうとしているかははっきりと{意識|いしき}している。{生徒|せいと}の{場合|ばあい}は、{自分|じぶん}が{学|まな}ぶことになる{近代|きんだい}の{膨大|ぼうだい}な{知|ち}や{生活|せいかつ}や{技術|ぎじゅつ}についてほとんど{認知|にんち}していない。（{中略|ちゅうりゃく}）

「{教師|きょうし}と{生徒|せいと}」は{私|わたくし}（{個人|こじん}）と{私|わたくし}（{個人|こじん}）のつながりではなく、{公|おおやけ}（{社会的|しゃかいてき}{役割|やくわり}）と{公|おおやけ}（{社会的|しゃかいてき}{役割|やくわり}）の{関係|かんけい}であり、{心的|しんてき}なつながりは{二次的|にじてき}なものである。{個人|こじん}と{個人|こじん}が{求|もと}め{合|あ}って{結|むす}びついたものではなく、{社会|しゃかい}システムに{媒介|ばいかい}されたつながりである。それに{対|たい}して、「{師|し}と{弟子|でし}」はもともと{個人的|こじんてき}なつながりであり、「{求|もと}めるもの」「{到達|とうたつ}すべきもの」「{語|かた}るべきもの」を{共有|きょうゆう}している。かなりの{心的|しんてき}{部分|ぶぶん}が{同志的|どうしてき}につながっていると{考|かんが}えられよう。「{教師|きょうし}と{生徒|せいと}」のつながりの{目的|もくてき}は、{子|こ}ども（{生徒|せいと}）の{市民|しみん}（{個人|こじん}）{形成|けいせい}に{還元|かんげん}されるものであり、「{師|し}と{弟子|でし}」というような{濃|こ}い{密度|みつど}のつながりに{昇華|しょうか}する（{注|ちゅう}3）ことは{通常|つうじょう}{考|かんが}えられない。

（{注|ちゅう}1）{位相|いそう}：ここでは、{関係性|かんけいせい}
（{注|ちゅう}2）{煮|に}つめられた：ここでは、{究極的|きゅうきょくてき}な
（{注|ちゅう}3）{昇華|しょうか}する：ここでは、{高|たか}まる`,
      arti: `"Guru dan siswa" dan "master dan murid" mirip dalam bentuk hubungannya (catatan 1), tetapi kualitasnya sama sekali berbeda. Murid bisa memilih master, tetapi siswa tidak bisa memilih guru. Master pun bisa memilih murid, tetapi guru tidak bisa memilih siswa. Master boleh dibilang satu pribadi yang khas, sedangkan guru hanyalah satu orang yang kebetulan dari sekian banyak guru. "Master dan murid" bukanlah model pamungkas (catatan 2) dari "guru dan siswa". "Guru dan siswa" adalah produk zaman modern, sedangkan "master dan murid" sudah ada sejak dulu dalam dunia pemikiran (agama), bela diri, keterampilan, dan seni — suatu hubungan individual yang sangat khusus, di mana seseorang dengan sungguh-sungguh berusaha mempelajari "hal unggul" dari "orang yang luar biasa unggul". Dalam "master dan murid", murid sadar betul apa yang hendak ia pelajari. Sementara siswa hampir tidak menyadari pengetahuan, kehidupan, dan teknologi modern yang sangat luas yang akan ia pelajari. (dipersingkat)

"Guru dan siswa" bukan hubungan pribadi (individu) dengan pribadi (individu), melainkan hubungan publik (peran sosial) dengan publik (peran sosial), dan ikatan batin hanyalah hal sekunder. Itu bukan ikatan antara individu yang saling mencari, melainkan ikatan yang dijembatani sistem sosial. Sebaliknya, "master dan murid" pada dasarnya hubungan pribadi, dan keduanya berbagi "hal yang dicari", "hal yang harus dicapai", dan "hal yang harus dibicarakan". Bisa dikatakan sebagian besar sisi batin mereka terhubung sebagai sesama seperjuangan. Tujuan hubungan "guru dan siswa" bermuara pada pembentukan anak (siswa) sebagai warga (individu), dan biasanya tidak terbayangkan hubungan itu meningkat (catatan 3) menjadi ikatan yang sepadat "master dan murid".

(Catatan 1) 位相: di sini, bentuk hubungan
(Catatan 2) 煮つめられた: di sini, paling puncak
(Catatan 3) 昇華する: di sini, meningkat`,
    },

    // ── 問題10：第六の大絶滅 ──
    "10": {
      yomi: `{地球|ちきゅう}の{長|なが}い{歴史|れきし}の{中|なか}で{生物|せいぶつ}は{進化|しんか}と{分化|ぶんか}をし、{生物|せいぶつ}{種|しゅ}の{数|かず}は{基本的|きほんてき}には{増|ふ}える{傾向|けいこう}にある。{地球|ちきゅう}{上|じょう}の{生物|せいぶつ}の{種類|しゅるい}が{急激|きゅうげき}に{増|ふ}えたのが、カンブリア{紀|き}と{呼|よ}ばれる{約|やく}{五億|ごおく}{年|ねん}{前|まえ}のことで、{生物|せいぶつ}{種|しゅ}の「ビッグバン」と{呼|よ}ばれることもある。だが、その{後|ご}{生物|せいぶつ}の{歴史|れきし}の{中|なか}では、{過去|かこ}{五回|ごかい}、{生物|せいぶつ}{種|しゅ}の{数|かず}が{急激|きゅうげき}に{減少|げんしょう}する「{大絶滅|だいぜつめつ}の{時代|じだい}」があったことが{化石|かせき}の{分析|ぶんせき}などから{分|わ}かっている。（{中略|ちゅうりゃく}）

{現在|げんざい}{確認|かくにん}されている{種|しゅ}の{絶滅|ぜつめつ}は、ほんの{氷山|ひょうざん}の{一角|いっかく}である。{多様|たよう}な{生物|せいぶつ}が{生息|せいそく}している{熱帯林|ねったいりん}が{減少|げんしょう}する{速度|そくど}からすると、{一年間|いちねんかん}に{一千万|いっせんまん}{種|しゅ}のうち{二万七千|にまんななせん}{種|しゅ}が{絶滅|ぜつめつ}していると{推定|すいてい}されるとの{研究|けんきゅう}{結果|けっか}が{報告|ほうこく}されている。{現代|げんだい}は{地球|ちきゅう}の{歴史|れきし}の{中|なか}で{六回目|ろっかいめ}の{生物|せいぶつ}の{大絶滅|だいぜつめつ}{時代|じだい}だと{言|い}えるのだ。

{六回目|ろっかいめ}の{大絶滅|だいぜつめつ}{時代|じだい}は、{過去|かこ}の{五回|ごかい}と{多|おお}くの{点|てん}で{異|こと}なる。{一|ひと}つは{生物|せいぶつ}が{絶滅|ぜつめつ}する{速度|そくど}が{非常|ひじょう}に{速|はや}いということだ。{化石|かせき}の{分析|ぶんせき}などから{推定|すいてい}された{自然界|しぜんかい}での{生物|せいぶつ}{絶滅|ぜつめつ}の{速度|そくど}は{百万|ひゃくまん}{種|しゅ}に{対|たい}して{一年間|いちねんかん}に{一|いっ}{種|しゅ}というペースだ。{多|おお}くの{研究|けんきゅう}は、{現在|げんざい}の{生物|せいぶつ}{絶滅|ぜつめつ}の{速度|そくど}は{自然|しぜん}に{起|お}こる{生物|せいぶつ}{絶滅|ぜつめつ}の{速度|そくど}の{百|ひゃく}〜{千|せん}{倍|ばい}で、その{速度|そくど}はどんどん{速|はや}くなっていると{指摘|してき}している。{今回|こんかい}の{大絶滅|だいぜつめつ}が、ほとんどが{人間|にんげん}{活動|かつどう}が{原因|げんいん}で{起|お}こっているという{点|てん}も{過去|かこ}と{大|おお}きく{異|こと}なる。{自然|しぜん}に{起|お}こる{絶滅|ぜつめつ}は{止|と}めることはできなかった。だが、{今回|こんかい}の{大絶滅|だいぜつめつ}は{人間|にんげん}の{行動|こうどう}パターンが{違|ちが}っていれば{起|お}こることはなかった。{逆|ぎゃく}に{言|い}えば、{人間|にんげん}が{行動|こうどう}を{改|あらた}めれば、{絶滅|ぜつめつ}を{食|く}い{止|と}めることができるかもしれないということになる。

{過去|かこ}の{大絶滅|だいぜつめつ}の{後|あと}では、{恐竜|きょうりゅう}が{減|へ}った{後|あと}で{哺乳類|ほにゅうるい}が{栄|さか}えるようになったように、ある{種|しゅ}の{生物|せいぶつ}がいなくなったことで、{他|ほか}の{生物|せいぶつ}が{生息地|せいそくち}を{広|ひろ}げることができるようになり、その{後|ご}{比較的|ひかくてき}{短時間|たんじかん}のうちに{種|しゅ}の{数|かず}は{増加|ぞうか}に{転|てん}じている。

だが、{今回|こんかい}の{大絶滅|だいぜつめつ}の{場合|ばあい}は、{速度|そくど}が{速|はや}いために{生物|せいぶつ}が{変化|へんか}について{行|い}けない{可能性|かのうせい}がある。しかも、{新|あら}たな{生物|せいぶつ}が{生|う}まれる「ゆりかご」（{注|ちゅう}）となるような{湿地|しっち}や{熱帯林|ねったいりん}、{浅|あさ}い{海|うみ}などの{場所|ばしょ}は、{人間|にんげん}の{開発|かいはつ}{行為|こうい}によって{破壊|はかい}され、{汚染|おせん}されている。{大絶滅|だいぜつめつ}からの{復活|ふっかつ}につながる{生物|せいぶつ}{進化|しんか}の{力|ちから}も、{人間|にんげん}が{奪|うば}っている{可能性|かのうせい}が{高|たか}い。{今|いま}この{地球|ちきゅう}{上|じょう}で{起|お}こっている「{第六|だいろく}の{大絶滅|だいぜつめつ}」は、{過去|かこ}の{五回|ごかい}とは{質的|しつてき}に{大|おお}きく{異|こと}なり、{地球|ちきゅう}の{生態系|せいたいけい}にとって{取|と}り{返|かえ}しがつかないものとなる{可能性|かのうせい}が{否定|ひてい}できない。

{現在|げんざい}のペースで{熱帯林|ねったいりん}やサンゴ{礁|しょう}、{湿地|しっち}などが{破壊|はかい}されたら、{生物|せいぶつ}{種|しゅ}の{絶滅|ぜつめつ}や{生物|せいぶつ}{多様性|たようせい}の{損失|そんしつ}は{今後|こんご}も{急速|きゅうそく}に{進|すす}むことが{心配|しんぱい}されている。しかも、{今世紀|こんせいき}{半|なか}ばくらいには、{地球|ちきゅう}{温暖化|おんだんか}の{進行|しんこう}が{生物|せいぶつ}{種|しゅ}の{絶滅|ぜつめつ}に{拍車|はくしゃ}を{掛|か}けることになることも{懸念|けねん}されている。このままでは、{地球|ちきゅう}の{長|なが}い{歴史|れきし}の{中|なか}で{例|れい}がないほど{生物|せいぶつ}{多様性|たようせい}の{減少|げんしょう}が{著|いちじる}しい、{傷|きず}ついた{地球|ちきゅう}を{次|じ}{世代|せだい}に{引|ひ}き{渡|わた}すことになってしまうのである。

（{注|ちゅう}）ゆりかご：ここでは、{生物|せいぶつ}の{生育|せいいく}に{適|てき}した{環境|かんきょう}`,
      arti: `Dalam sejarah panjang bumi, makhluk hidup berevolusi dan bercabang, dan jumlah spesies pada dasarnya cenderung bertambah. Jenis makhluk hidup di bumi bertambah drastis sekitar 500 juta tahun lalu, pada masa yang disebut periode Kambrium, yang kadang dijuluki "Big Bang" spesies. Namun, dari analisis fosil dan lainnya diketahui bahwa dalam sejarah makhluk hidup sesudahnya, sudah lima kali terjadi "zaman kepunahan massal" di mana jumlah spesies menurun drastis. (dipersingkat)

Kepunahan spesies yang terkonfirmasi saat ini hanyalah puncak gunung es. Dilaporkan hasil penelitian yang memperkirakan bahwa, berdasarkan laju berkurangnya hutan tropis tempat beragam makhluk hidup tinggal, dari sepuluh juta spesies, 27.000 spesies punah setiap tahun. Masa kini bisa disebut zaman kepunahan massal keenam dalam sejarah bumi.

Zaman kepunahan massal keenam berbeda dari lima sebelumnya dalam banyak hal. Pertama, laju kepunahan makhluk hidup sangat cepat. Laju kepunahan di alam yang diperkirakan dari analisis fosil dan lainnya adalah satu spesies per sejuta spesies per tahun. Banyak penelitian menunjukkan bahwa laju kepunahan saat ini 100–1.000 kali laju kepunahan alami, dan lajunya terus meningkat. Kepunahan massal kali ini juga sangat berbeda dari masa lalu karena hampir seluruhnya disebabkan aktivitas manusia. Kepunahan yang terjadi secara alami tidak bisa dihentikan. Tetapi kepunahan massal kali ini tidak akan terjadi seandainya pola perilaku manusia berbeda. Sebaliknya, jika manusia memperbaiki perilakunya, mungkin kepunahan bisa dihentikan.

Setelah kepunahan massal di masa lalu — seperti mamalia yang berjaya setelah dinosaurus berkurang — hilangnya suatu jenis makhluk hidup memungkinkan makhluk lain memperluas habitatnya, dan dalam waktu yang relatif singkat jumlah spesies kembali bertambah.

Namun, dalam kepunahan massal kali ini, karena lajunya cepat, ada kemungkinan makhluk hidup tidak bisa mengikuti perubahan. Terlebih lagi, tempat-tempat seperti lahan basah, hutan tropis, dan laut dangkal yang menjadi "buaian" (catatan) lahirnya makhluk hidup baru sedang dirusak dan dicemari oleh pembangunan manusia. Besar kemungkinan manusia juga sedang merampas daya evolusi makhluk hidup yang mengarah pada pemulihan dari kepunahan massal. Tak dapat disangkal kemungkinan bahwa "kepunahan massal keenam" yang sedang terjadi di bumi ini berbeda secara kualitatif dari lima sebelumnya dan akan menjadi sesuatu yang tak dapat dipulihkan bagi ekosistem bumi.

Dikhawatirkan, jika hutan tropis, terumbu karang, lahan basah, dan lainnya terus dirusak dengan laju sekarang, kepunahan spesies dan hilangnya keanekaragaman hayati akan terus berlangsung cepat. Lagi pula, dikhawatirkan pula bahwa sekitar pertengahan abad ini, pemanasan global akan mempercepat kepunahan spesies. Kalau begini terus, kita akan mewariskan kepada generasi berikutnya bumi yang terluka, dengan penurunan keanekaragaman hayati yang begitu parah hingga belum pernah terjadi dalam sejarah panjang bumi.

(Catatan) ゆりかご (buaian): di sini, lingkungan yang cocok bagi tumbuh kembang makhluk hidup`,
    },

    // ── 問題11：情報収集と考える力 ──
    "11": {
      yomi: `【{意見|いけん} A】
{変化|へんか}の{激|はげ}しい{時代|じだい}に{必要|ひつよう}な{頭|あたま}の{使|つか}い{方|かた}というと、できるだけ{多|おお}くの{情報|じょうほう}を{集|あつ}めて、できるだけ{正|ただ}しく{未来|みらい}を{予測|よそく}するといったことを、イメージする{人|ひと}は{少|すく}なくないでしょう。しかし、{多|おお}くの{情報|じょうほう}を{集|あつ}めても、{世|よ}の{中|なか}が{予想|よそう}もしない{形|かたち}で{変|か}わると、それらがあまり{役|やく}に{立|た}たなくなってしまう{可能性|かのうせい}があります。つまり、{変化|へんか}の{時代|じだい}とは、{将来|しょうらい}が{見通|みとお}しにくい{時代|じだい}でもあるのです。

このような{時代|じだい}に{必要|ひつよう}なのは、ただ{情報|じょうほう}をかき{集|あつ}めることではなく、{自分|じぶん}なりの{発想|はっそう}や、{自分|じぶん}なりの{考|かんが}え{方|かた}を{組|く}み{立|た}てて、{情報|じょうほう}を{処理|しょり}することです。

（{中略|ちゅうりゃく}）

{情報|じょうほう}{収集|しゅうしゅう}が{劇的|げきてき}に{楽|らく}になった{分|ぶん}、「{考|かんが}える」ウエイトはますます{重|おも}くなっています。いわば、みんなと{同|おな}じ{情報|じょうほう}を{材料|ざいりょう}にしながら、いかに{新|あたら}しく、{人|ひと}とは{違|ちが}う{発想|はっそう}で、おもしろいことを{考|かんが}えつくか、そういう{点|てん}での「{考|かんが}える」{力|ちから}がより{求|もと}められているのです。

【{意見|いけん} B】
{今|いま}は{多|おお}くの{情報|じょうほう}があふれ、インターネットで{何|なん}でも{調|しら}べられるようになった。しかしただ{待|ま}っているだけでは{何|なに}も{手|て}に{入|はい}らない。あくまで{自分|じぶん}から{情報|じょうほう}を{求|もと}めていかなければ、あっという{間|ま}に{取|と}り{残|のこ}されてしまう。

{技術|ぎじゅつ}が{高度|こうど}に{発展|はってん}した{現代|げんだい}では、ゼロから{何|なに}かを{生|う}み{出|だ}したり、{人|ひと}とは{異|こと}なるものを{考|かんが}え{出|だ}すのは{困難|こんなん}だと{思|おも}うかもしれない。しかし、{独自|どくじ}の{視点|してん}を{持|も}って{既存|きぞん}のものやアイデアを{組|く}み{合|あ}わせていくことで、これまでになかったものを{創造|そうぞう}することは{可能|かのう}だ。そのためにもやはり、{土台|どだい}となる{情報|じょうほう}が{必要|ひつよう}だ。{現代|げんだい}は、どれだけ{多|おお}くの{情報|じょうほう}を{手|て}にしているかで{決|き}まるといっても{過言|かごん}ではない。`,
      arti: `[Pendapat A]
Ketika berbicara tentang cara menggunakan otak yang diperlukan di zaman yang berubah cepat, tidak sedikit orang yang membayangkan hal seperti mengumpulkan informasi sebanyak mungkin dan memprediksi masa depan setepat mungkin. Namun, walaupun banyak informasi dikumpulkan, jika dunia berubah dengan cara yang tak terduga, informasi itu bisa jadi tidak terlalu berguna. Artinya, zaman perubahan adalah juga zaman ketika masa depan sulit diterka.

Yang diperlukan di zaman seperti ini bukan sekadar mengumpulkan informasi, melainkan menyusun gagasan dan cara berpikir sendiri, lalu mengolah informasi dengannya.

(dipersingkat)

Karena mengumpulkan informasi menjadi jauh lebih mudah, bobot "berpikir" semakin berat. Boleh dikatakan, yang semakin dituntut adalah kemampuan "berpikir" dalam arti: dengan bahan informasi yang sama dengan orang lain, seberapa bisa kita memikirkan hal menarik dengan gagasan yang baru dan berbeda dari orang lain.

[Pendapat B]
Kini informasi melimpah dan apa pun bisa dicari di internet. Tetapi kalau hanya menunggu, kita tidak akan mendapat apa-apa. Jika kita tidak aktif mencari informasi sendiri, dalam sekejap kita akan tertinggal.

Di zaman ketika teknologi berkembang sangat maju, mungkin kita mengira sulit untuk menciptakan sesuatu dari nol atau memikirkan hal yang berbeda dari orang lain. Namun, dengan memiliki sudut pandang sendiri dan menggabungkan hal-hal atau ide-ide yang sudah ada, kita bisa menciptakan sesuatu yang belum pernah ada. Untuk itu pun, tetap diperlukan informasi sebagai fondasinya. Tidak berlebihan jika dikatakan bahwa zaman sekarang ditentukan oleh seberapa banyak informasi yang kita genggam.`,
    },

    // ── 問題12：メディア力と情報占有率 ──
    "12": {
      yomi: `{例|たと}えば、3{年間|ねんかん}ずっとノーミスでやってきた論田くんが、はじめてミスを{出|だ}した。

3{年|ねん}{前|まえ}からずっとその{仕事|しごと}ぶりを{観|み}てきた{上司|じょうし}と、{異動|いどう}していきなり論田くんのミスに{出|で}くわした{上司|じょうし}と、論田くんへの{印象|いんしょう}は{同|おな}じだろうか？

{両者|りょうしゃ}のミスの「{情報|じょうほう}{占有率|せんゆうりつ}」がちがう。つまり、3{年間|ねんかん}のつきあいの{中|なか}で、ミスが{占|し}める{割合|わりあい}と、たった1{回|かい}{初|はじ}めて論田くんと{接|せっ}した{中|なか}で、ミスが{占|し}める{割合|わりあい}と。

{相手|あいて}は、あなたが{過去|かこ}からずっと{積|つ}み{上|あ}げてきたすべての{情報|じょうほう}で、あなたを{判断|はんだん}するのではない。{結局|けっきょく}は、そのとき{相手|あいて}が{持|も}っている{情報|じょうほう}だけで{判断|はんだん}される。その{中|なか}で、いい{情報|じょうほう}の{占|し}める{割合|わりあい}が{多|おお}ければ「いい{人|ひと}だ」となる。

あなたが「{優|やさ}しい{人|ひと}」で10{年間|ねんかん}{怒|おこ}ったことがなかったとしても、10{年|ねん}ぶりに{怒|おこ}ったとき、たまたまでくわした{初対面|しょたいめん}の{相手|あいて}にとっては、それが100%だ。あなたを「{恐|こわ}（こわ）い{人|ひと}」だと{思|おも}う。

{自分|じぶん}にふさわしい「メディア{力|りょく}」を{相手|あいて}の{中|なか}に{刻|きざ}むために、ちょっと「{情報|じょうほう}{占有率|せんゆうりつ}」を{意識|いしき}してみるといい。

コミュニケーションでは、{出会|であ}いからはじまって、{相手|あいて}から{見|み}たあなたの「メディア{力|りょく}」が{決|き}まるまでの{間|あいだ}が{肝心|かんじん}だ。つまり、{初|はじ}めの{方|ほう}が{慎重|しんちょう}さがいる。ここで、かっこつけるのでもなく、でも、あなた{以下|いか}にもならず、{等身大|とうしんだい}（{注|ちゅう}1）のあなたの{良|よ}さが{伝|つた}わるのが{理想|りそう}だ。

いつも{質|しつ}の{高|たか}い{仕事|しごと}をしているなら、はじめての{仕事|しごと}{先|さき}に{対|たい}して、{決|けっ}していつもの{質|しつ}を{落|お}としてはいけない。ふだん{静|しず}かな{人|ひと}なら、{初対面|しょたいめん}の{相手|あいて}にも、{奇|き}（{注|ちゅう}2）をてらったりせず、{普段|ふだん}どおり{静|しず}かにしていればいい。{自分|じぶん}にうそのないふるまいをする、ということは、{初対面|しょたいめん}の{相手|あいて}にこそ{大切|たいせつ}だ。

さて、ここで{問題|もんだい}なのは、ふだんとても{穏|おだ}やかなあなたが、その{日|ひ}はたまたま{嫌|いや}なことが{重|かさ}なり、{攻撃的|こうげきてき}になっているという{場合|ばあい}だ。{自分|じぶん}にうそのないということで、{相手|あいて}にきついことを{言|い}ってしまったらどうだろう。あなたにとっては、{年|ねん}に1{回|かい}の、「たまたま{不機嫌|ふきげん}な{日|ひ}」でも、{相手|あいて}にとっては、あなたに{関|かん}する{情報|じょうほう}の100%になる。

{初対面|しょたいめん}の{相手|あいて}、まだ{付|つ}き{合|あ}いの{浅|あさ}い{相手|あいて}には、すこし{慎重|しんちょう}になって{考|かんが}えてほしい。

{何|なに}が、{自分|じぶん}にうそのないふるまいか？{自分|じぶん}の{正直|しょうじき}な{姿|すがた}を{伝|つた}えるとはどういうことか？

{日|ひ}ごろ99%{穏|おだ}やかなあなたなら、1%の{異常|いじょう}よりも、いつもの{穏|おだ}やかさを{伝|つた}えるほうが、{結局|けっきょく}は、{正直|しょうじき}な{姿|すがた}を{伝|つた}えている。{相手|あいて}の{中|なか}に、あなたの{実像|じつぞう}に{近|ちか}い「メディア{力|りょく}」が{形成|けいせい}されるからだ。{初対面|しょたいめん}の{相手|あいて}にこそ、{平常心|へいじょうしん}であること、{普段|ふだん}どおりにやることが{大切|たいせつ}だ。

（{注|ちゅう}1）{等身大|とうしんだい}の：{誇張|こちょう}のない
（{注|ちゅう}2）{奇|き}をてらう：{変|か}わったことをして、{他人|たにん}の{気|き}をひこうとする`,
      arti: `Misalnya, 論田-kun yang selama 3 tahun bekerja tanpa satu kesalahan pun, untuk pertama kalinya berbuat salah.

Apakah kesan terhadap 論田-kun sama antara atasan yang sudah mengamati kinerjanya sejak 3 tahun lalu, dan atasan yang baru dipindahkan lalu langsung memergoki kesalahan 論田-kun?

"Porsi informasi" kesalahan itu berbeda bagi keduanya. Yaitu, porsi kesalahan dalam hubungan selama 3 tahun, dan porsi kesalahan dalam satu kali pertemuan pertama dengan 論田-kun.

Orang lain tidak menilai Anda berdasarkan seluruh informasi yang Anda kumpulkan sejak dulu. Pada akhirnya, Anda dinilai hanya dari informasi yang dimiliki orang itu saat itu. Di dalamnya, jika porsi informasi baik besar, Anda dianggap "orang baik".

Walaupun Anda "orang yang baik hati" dan tak pernah marah selama 10 tahun, saat Anda marah untuk pertama kalinya dalam 10 tahun, bagi orang yang kebetulan baru pertama kali bertemu Anda, itulah 100%. Ia akan menganggap Anda "orang yang menakutkan".

Agar "daya media" yang pantas bagi diri Anda terukir di benak orang lain, cobalah sedikit menyadari "porsi informasi".

Dalam komunikasi, yang penting adalah masa sejak pertemuan pertama sampai "daya media" Anda di mata orang itu terbentuk. Artinya, di awal perlu kehati-hatian. Idealnya, tanpa sok bergaya, tetapi juga tanpa tampil di bawah diri Anda, kelebihan diri Anda yang apa adanya (catatan 1) tersampaikan.

Jika Anda biasa bekerja dengan kualitas tinggi, jangan sekali-kali menurunkan kualitas itu di hadapan klien baru. Jika Anda biasanya pendiam, di hadapan orang yang baru dikenal pun tak perlu mencari perhatian dengan hal aneh (catatan 2); cukup tetap tenang seperti biasa. Berperilaku tanpa membohongi diri sendiri justru penting di hadapan orang yang baru pertama kali ditemui.

Nah, yang jadi masalah adalah ketika Anda yang biasanya sangat tenang, pada hari itu kebetulan mengalami banyak hal tidak menyenangkan dan menjadi agresif. Bagaimana jika atas nama tidak membohongi diri sendiri, Anda mengucapkan kata-kata pedas kepada orang itu? Bagi Anda itu hanyalah "hari yang kebetulan suasana hati buruk", sekali setahun, tetapi bagi orang itu, itulah 100% informasi tentang Anda.

Terhadap orang yang baru pertama kali ditemui atau yang hubungannya masih dangkal, saya harap Anda sedikit lebih berhati-hati dan berpikir.

Apa itu perilaku yang tidak membohongi diri sendiri? Apa artinya menyampaikan sosok diri yang jujur?

Jika Anda sehari-hari 99% tenang, maka menyampaikan ketenangan yang biasa, alih-alih 1% keanehan, pada akhirnya itulah menyampaikan sosok yang jujur. Sebab di benak orang itu akan terbentuk "daya media" yang dekat dengan sosok Anda yang sebenarnya. Justru di hadapan orang yang baru pertama kali ditemui, penting untuk tetap tenang dan bersikap seperti biasa.

(Catatan 1) 等身大の: apa adanya, tanpa dilebih-lebihkan
(Catatan 2) 奇をてらう: melakukan hal aneh untuk menarik perhatian orang lain`,
    },

    // ── 問題13：田原陶芸 工場見学・陶芸体験のご案内 ──
    "13": {
      yomi: `田原{陶芸|とうげい}では、{陶磁器|とうじき}の{生地|きじ}の{製造|せいぞう}から{絵付|えつ}けまでを{見学|けんがく}したり、カップや{茶|ちゃ}わん{作|づく}りを{体験|たいけん}したりすることができます。ご{自身|じしん}がお{作|つく}りになったものは、{後日|ごじつ}お{送|おく}りいたします。

{開始|かいし}{時間|じかん}　①{9時|くじ}、②{10時|じゅうじ}、③14{時|じ}

{所要|しょよう}{時間|じかん}
A.{工場|こうじょう}{見学|けんがく}と{陶芸|とうげい}{体験|たいけん}：{約|やく}80{分|ぷん}
B.{工場|こうじょう}{見学|けんがく}：{約|やく}30{分|ぷん}
{注意|ちゅうい}　{土|ど}、{日|にち}、{祝日|しゅくじつ}は{工場|こうじょう}の{一部|いちぶ}が{見学|けんがく}できない{場合|ばあい}もございます。

{予約|よやく}{方法|ほうほう}
インターネット（※1）：https://www.tahara-togei/kojo-kengaku/yoyaku/
{電話|でんわ}（※2）：0731-92-3604（8:30〜16:50）

{休業日|きゅうぎょうび}　{年末|ねんまつ}{年始|ねんし}、お{盆|ぼん}
{費用|ひよう}　{工場|こうじょう}{見学|けんがく}：{無料|むりょう}、{陶芸|とうげい}{体験|たいけん}：2,000{円|えん}（{送料|そうりょう}{込|こ}み）
{所在地|しょざいち}　安見{市|し}{西町|にしまち}5982
{問|と}い{合|あ}わせ{先|さき}　田原{陶芸|とうげい}{株式|かぶしき}{会社|がいしゃ} {工場|こうじょう}{見学|けんがく}・{陶芸|とうげい}{体験|たいけん}{担当|たんとう}　{電話|でんわ} 0731-92-3604（8:30〜16:50）

※1 インターネットでのご{予約|よやく}は、{見学|けんがく}{希望|きぼう}{日|び}の{3日|みっか}{前|まえ}まで{承|うけたまわ}っております。
※2 お{電話|でんわ}でのご{予約|よやく}は、{見学|けんがく}{希望|きぼう}{日|び}の{前日|ぜんじつ}まで{承|うけたまわ}っております。

{以下|いか}のお{客様|きゃくさま}に{関|かん}しましては、{必|かなら}ずお{電話|でんわ}でご{予約|よやく}ください。{準備|じゅんび}{等|とう}ございますので、{見学|けんがく}{希望|きぼう}{日|び}の{7日|なのか}{前|まえ}までにお{申|もう}し{込|こ}みをお{願|ねが}いいたします。
・10{名|めい}{以上|いじょう}の{団体|だんたい}で{利用|りよう}されるお{客様|きゃくさま}
・{学校|がっこう}にかかわる{活動|かつどう}で{利用|りよう}されるお{客様|きゃくさま}

{明日|あす}（12{月|がつ}15{日|にち}）から1{週間|しゅうかん}の{予約|よやく}{状況|じょうきょう}　○{予約|よやく}{可|か}　△{残|のこ}り2{名|めい}{以下|いか}　×{不可|ふか}
　　　15({火|か}) 16({水|すい}) 17({木|もく}) 18({金|きん}) 19({土|ど}) 20({日|にち}) 21({月|げつ})
①{9時|くじ}　 ×　　○　　○　　×　　△　　○　　×
②{10時|じゅうじ}　△　　×　　×　　○　　×　　×　　×
③14{時|じ}　△　　△　　○　　○　　×　　○　　△`,
      arti: `Di 田原 Tōgei (keramik), Anda bisa mengamati proses mulai dari pembuatan bahan dasar keramik hingga pengecatan, serta mencoba membuat cangkir atau mangkuk. Barang yang Anda buat sendiri akan kami kirimkan di kemudian hari.

Jam mulai: ① pukul 9, ② pukul 10, ③ pukul 14

Durasi
A. Kunjungan pabrik dan pengalaman membuat keramik: sekitar 80 menit
B. Kunjungan pabrik: sekitar 30 menit
Perhatian: pada hari Sabtu, Minggu, dan hari libur nasional, ada kalanya sebagian pabrik tidak bisa dikunjungi.

Cara reservasi
Internet (*1): https://www.tahara-togei/kojo-kengaku/yoyaku/
Telepon (*2): 0731-92-3604 (8.30–16.50)

Hari libur usaha: akhir dan awal tahun, libur Obon
Biaya: kunjungan pabrik gratis; pengalaman membuat keramik 2.000 yen (termasuk ongkos kirim)
Alamat: 5982 Nishimachi, Kota 安見
Kontak: PT 田原 Tōgei, bagian kunjungan pabrik & pengalaman keramik, telepon 0731-92-3604 (8.30–16.50)

*1 Reservasi lewat internet diterima paling lambat 3 hari sebelum tanggal kunjungan yang diinginkan.
*2 Reservasi lewat telepon diterima paling lambat sehari sebelum tanggal kunjungan yang diinginkan.

Tamu berikut wajib melakukan reservasi lewat telepon. Karena ada persiapan, mohon mendaftar paling lambat 7 hari sebelum tanggal kunjungan yang diinginkan.
- Tamu yang datang dalam rombongan 10 orang atau lebih
- Tamu yang datang untuk kegiatan terkait sekolah

Status reservasi selama 1 minggu mulai besok (15 Desember): ○ bisa dipesan, △ sisa 2 orang atau kurang, × tidak bisa
　　　15(Sel) 16(Rab) 17(Kam) 18(Jum) 19(Sab) 20(Min) 21(Sen)
① pk 9　 ×　　○　　○　　×　　△　　○　　×
② pk 10　△　　×　　×　　○　　×　　×　　×
③ pk 14　△　　△　　○　　○　　×　　○　　△`,
    },
  },
};
