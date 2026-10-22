import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2024
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_2407: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{食品|しょくひん}の【{腐敗|ふはい}】を{防止|ぼうし}する",
      arti: "Mencegah 【pembusukan】 makanan.",
    },
    2: {
      yomi: "こちらの{方|ほう}が【{粗|あら}い】ようだ。",
      arti: "Sepertinya yang ini lebih 【kasar】.",
      optArti: ["tumpul, lamban", "rapuh", "kasar (tidak halus)", "longgar, landai"],
    },
    3: {
      yomi: "これは{胃|い}の【{粘膜|ねんまく}】を{保護|ほご}する{薬|くすり}です。",
      arti: "Ini obat yang melindungi 【selaput lendir】 lambung.",
    },
    4: {
      yomi: "{医学|いがく}の{進歩|しんぽ}によって、{人々|ひとびと}の【{寿命|じゅみょう}】が{延|の}びた。",
      arti: "Berkat kemajuan ilmu kedokteran, 【usia harapan hidup】 orang-orang bertambah panjang.",
    },
    5: {
      yomi: "{手紙|てがみ}の{内容|ないよう}は{私|わたし}を【{戒|いまし}める】ものだった。",
      arti: "Isi surat itu bersifat 【menegur/memperingatkan】 saya.",
      optArti: ["mencela, menyalahkan", "menyalahkan, menuntut", "menghibur", "menegur, memperingatkan"],
    },
    6: {
      yomi: "【{誓約書|せいやくしょ}】に{署名|しょめい}する{時|とき}、{少|すこ}し{緊張|きんちょう}した。",
      arti: "Saya sedikit gugup saat menandatangani 【surat pernyataan/sumpah】.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{今回|こんかい}の{遺跡|いせき}の{発見|はっけん}はこれまでの{説|せつ}を（　）から{覆|くつがえ}すものになりそうだ。",
      arti: "Penemuan situs purbakala kali ini tampaknya akan membalikkan teori selama ini dari (…)-nya.",
      optYomi: ["{拠点|きょてん}", "{根底|こんてい}", "{原本|げんぽん}", "{元祖|がんそ}"],
      optArti: ["basis, markas", "dasar terdalam, akar", "naskah asli", "pelopor, pencetus pertama"],
    },
    8: {
      yomi: "1{年|ねん}で{一番|いちばん}{忙|いそが}しい{時期|じき}なので、{休日|きゅうじつ}を（　）して{働|はたら}いています。",
      arti: "Karena ini masa tersibuk dalam setahun, saya bekerja dengan (…) hari libur.",
      optYomi: ["{寄付|きふ}", "{還元|かんげん}", "{進呈|しんてい}", "{返上|へんじょう}"],
      optArti: ["sumbangan, donasi", "pengembalian (keuntungan ke masyarakat)", "mempersembahkan", "merelakan/mengembalikan (hari libur, gelar)"],
    },
    9: {
      yomi: "{外部|がいぶ}からの{問|と}い{合|あ}わせの{電話|でんわ}は、{用件|ようけん}を{確認|かくにん}して{担当者|たんとうしゃ}に（　）ください。",
      arti: "Untuk telepon pertanyaan dari luar, pastikan keperluannya lalu (…) kepada petugas yang bertanggung jawab.",
      optYomi: ["{繰|く}り{越|こ}して", "{差|さ}し{替|か}えて", "{引|ひ}き{渡|わた}して", "{取|と}り{次|つ}いで"],
      optArti: ["memindahkan ke periode berikutnya", "mengganti (dengan yang lain)", "menyerahkan (barang, orang)", "meneruskan/menyambungkan (telepon, pesan)"],
    },
    10: {
      yomi: "{新|あたら}しい{生活|せいかつ}への{期待|きたい}と{不安|ふあん}が（　）し、{気持|きも}ちが{落|お}ち{着|つ}かない。",
      arti: "Harapan dan kecemasan terhadap kehidupan baru (…), sehingga perasaan saya tidak tenang.",
      optYomi: ["{交錯|こうさく}", "{混合|こんごう}", "{連動|れんどう}", "{反発|はんぱつ}"],
      optArti: ["bercampur aduk, silang-menyilang", "pencampuran (bahan)", "bergerak saling terkait", "penolakan, perlawanan"],
    },
    11: {
      yomi: "トンネル{工事|こうじ}が{始|はじ}まって1{年|ねん}になるが、{地盤|じばん}の{弱|よわ}い{箇所|かしょ}があり、{工事|こうじ}は（　）している。",
      arti: "Sudah setahun sejak pembangunan terowongan dimulai, tetapi ada bagian tanah yang lemah sehingga pekerjaannya (…).",
      optYomi: ["{難航|なんこう}", "{低迷|ていめい}", "{衰退|すいたい}", "{脱落|だつらく}"],
      optArti: ["tersendat, berjalan sulit", "lesu, terpuruk (ekonomi, peringkat)", "merosot, mengalami kemunduran", "rontok, tersisih"],
    },
    12: {
      yomi: "{会場|かいじょう}は、{人々|ひとびと}の{話|はな}し{声|ごえ}で（　）と{騒|さわ}がしく、アナウンスがよく{聞|き}こえなかった。",
      arti: "Ruangan acara (…) riuh oleh suara obrolan orang-orang, sehingga pengumuman tidak terdengar jelas.",
      optArti: ["perlahan-lahan, merembes", "kental lengket, berlumpur", "riuh rendah, ramai bersahutan", "lengket, menempel terus"],
    },
    13: {
      yomi: "{登山|とざん}に{誘|さそ}われたが、あまり{経験|けいけん}がないので、みんなの（　）になると{思|おも}い、{断|ことわ}った。",
      arti: "Saya diajak mendaki gunung, tetapi karena kurang berpengalaman, saya pikir akan menjadi (…) bagi semua orang, jadi saya menolak.",
      optYomi: ["{骨折|ほねお}り", "{足手|あしで}まとい", "{裏目|うらめ}", null],
      optArti: ["jerih payah", "beban, penghambat", "hasil berbalik (jadi buruk)", "sikap ragu-ragu, setengah hati"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "これはA{社|しゃ}に【{委託|いたく}】することにした。",
      arti: "Hal ini diputuskan untuk 【dipercayakan】 kepada Perusahaan A.",
      optYomi: ["{戻|もど}す", "{送|おく}る", "{任|まか}せる", "{譲|ゆず}る"],
      optArti: ["mengembalikan", "mengirim", "menyerahkan, mempercayakan", "memberikan (hak), mengalah"],
    },
    15: {
      yomi: "その{話|はなし}を{聞|き}いて、【すがすがしい】{気分|きぶん}になった。",
      arti: "Mendengar cerita itu, perasaan saya menjadi 【segar dan lega】.",
      optYomi: [null, "{爽|さわ}やかな", "{楽|たの}しい", "{懐|なつ}かしい"],
      optArti: ["muram", "segar, menyegarkan", "menyenangkan", "membuat rindu (nostalgia)"],
    },
    16: {
      yomi: "リフォームの{費用|ひよう}を【{工面|くめん}】する{必要|ひつよう}がある。",
      arti: "Perlu 【mengusahakan (mencari)】 biaya renovasi.",
      optYomi: ["{減|へ}らす", "{計算|けいさん}する", "{用意|ようい}する", "{支払|しはら}う"],
      optArti: ["mengurangi", "menghitung", "menyiapkan", "membayar"],
    },
    17: {
      yomi: "それは{仕事|しごと}の{道具|どうぐ}なんだから、【ぞんざい】な{扱|あつか}いをされては{困|こま}るよ。",
      arti: "Itu alat kerja, jadi saya tidak mau kalau diperlakukan dengan 【sembarangan】.",
      optYomi: ["{雑|ざつ}な", "{変|へん}な", "{危険|きけん}な", "{強引|ごういん}な"],
      optArti: ["kasar, asal-asalan", "aneh", "berbahaya", "memaksa"],
    },
    18: {
      yomi: "{男|おとこ}の{子|こ}は{父親|ちちおや}の{話|はなし}を【うなだれて】{聞|き}いていた。",
      arti: "Anak laki-laki itu mendengarkan perkataan ayahnya sambil 【tertunduk lesu】.",
      optYomi: ["ふざけた{態度|たいど}で", "{目|め}を{閉|と}じて", "まじめな{表情|ひょうじょう}で", "{下|した}を{向|む}いて"],
      optArti: ["dengan sikap bercanda", "sambil memejamkan mata", "dengan raut wajah serius", "sambil menunduk"],
    },
    19: {
      yomi: "{悪天候|あくてんこう}による{工事|こうじ}の{遅|おく}れは、{担当者|たんとうしゃ}にとって{大|おお}きな【{打撃|だげき}】だった。",
      arti: "Keterlambatan pekerjaan akibat cuaca buruk merupakan 【pukulan】 besar bagi penanggung jawabnya.",
      optArti: ["kecelakaan, insiden", "hal tabu", "tekanan", "kerusakan, kerugian (damage)"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "【{風潮|ふうちょう}】",
      arti: "【風潮】 = kecenderungan/arus pemikiran yang sedang berlaku di masyarakat",
      optYomi: [
        "{本田|ほんだ}さんはいつも{風潮|ふうちょう}のファッションに{身|み}を{包|つつ}んでいる。",
        "{何事|なにごと}も{経済的|けいざいてき}な{効率|こうりつ}で{判断|はんだん}するのが{今|いま}の{社会|しゃかい}の{風潮|ふうちょう}だ。",
        "{地形|ちけい}の{関係|かんけい}で、この{辺|あた}りは{夏|なつ}に{雨|あめ}が{降|ふ}りやすい{風潮|ふうちょう}がある。",
        "{京都|きょうと}の{町|まち}を{歩|ある}いて、{古都|こと}の{風潮|ふうちょう}を{楽|たの}しんだ。",
      ],
      optArti: [
        "Honda-san selalu berbalut fesyen 'kecenderungan zaman'.",
        "Menilai segala hal dari efisiensi ekonomi adalah 'kecenderungan' masyarakat saat ini.",
        "Karena kondisi geografis, daerah ini punya 'kecenderungan' mudah hujan di musim panas.",
        "Saya berjalan-jalan di kota Kyoto dan menikmati 'kecenderungan' ibu kota kuno.",
      ],
    },
    21: {
      arti: "【もたらす】 = membawa, mendatangkan (akibat, perubahan)",
      optYomi: [
        "{科学|かがく}{技術|ぎじゅつ}の{急速|きゅうそく}な{進歩|しんぽ}は{我々|われわれ}の{生活|せいかつ}に{大|おお}きな{変化|へんか}をもたらした。",
        "この{珍|めずら}しいお{菓子|かし}は、{宮下|みやした}さんが{海外|かいがい}からもたらしたお{土産|みやげ}です。",
        "{弟|おとうと}は{体力|たいりょく}をもたらすために、{毎朝|まいあさ}{公園|こうえん}をジョギングしている。",
        "この{計画|けいかく}は、{市|し}が{許可|きょか}をもたらすまで{実行|じっこう}されない{見通|みとお}しだ。",
      ],
      optArti: [
        "Kemajuan pesat ilmu dan teknologi telah 'mendatangkan' perubahan besar pada kehidupan kita.",
        "Kue langka ini adalah oleh-oleh yang 'didatangkan' Miyashita-san dari luar negeri.",
        "Adik saya jogging di taman setiap pagi untuk 'mendatangkan' stamina.",
        "Rencana ini diperkirakan tidak akan dijalankan sampai pemerintah kota 'mendatangkan' izin.",
      ],
    },
    22: {
      yomi: "【{撤回|てっかい}】",
      arti: "【撤回】 = menarik kembali (pernyataan, usulan, keputusan)",
      optYomi: [
        "{雪|ゆき}が{激|はげ}しくなってきたので、{途中|とちゅう}で{登山|とざん}を{撤回|てっかい}して{山小屋|やまごや}に{戻|もど}った。",
        "{旅行|りょこう}の{前日|ぜんじつ}に{風邪|かぜ}をひいてしまい、ホテルの{予約|よやく}を{撤回|てっかい}した。",
        "{水野|みずの}{氏|し}は{今朝|けさ}の{記者|きしゃ}{会見|かいけん}でした{発言|はつげん}を、{午後|ごご}すぐに{撤回|てっかい}した。",
        "{彼|かれ}は{医師|いし}になるという{進路|しんろ}を{撤回|てっかい}し、{音楽家|おんがくか}を{目指|めざ}すことにしたそうだ。",
      ],
      optArti: [
        "Karena salju makin lebat, saya 'menarik kembali' pendakian di tengah jalan dan kembali ke pondok gunung.",
        "Sehari sebelum perjalanan saya masuk angin, lalu 'menarik kembali' pemesanan hotel.",
        "Tuan Mizuno 'menarik kembali' pernyataan yang ia buat di konferensi pers pagi ini, segera di sore harinya.",
        "Katanya ia 'menarik kembali' jalur karier menjadi dokter dan memutuskan untuk menjadi musisi.",
      ],
    },
    23: {
      yomi: "【{補填|ほてん}】",
      arti: "【補填】 = menutup/menambal kekurangan (terutama kerugian, defisit)",
      optYomi: [
        "{書類|しょるい}をよく{読|よ}んで、{空欄|くうらん}に{必要|ひつよう}{事項|じこう}を{補填|ほてん}してください。",
        "{暑|あつ}い{中|なか}で{運動|うんどう}して{汗|あせ}をかいたときは、{水分|すいぶん}を{補填|ほてん}することが{大切|たいせつ}だ。",
        "{新規|しんき}{事業|じぎょう}で{生|しょう}じた{赤字|あかじ}は、{別|べつ}の{事業|じぎょう}の{収益|しゅうえき}で{補填|ほてん}することにした。",
        "{風邪|かぜ}で{休|やす}んでいる{間|あいだ}、みんなが{協力|きょうりょく}して{私|わたし}の{仕事|しごと}を{補填|ほてん}してくれた。",
      ],
      optArti: [
        "Bacalah dokumen dengan teliti, lalu 'tutupi kekurangan' kolom kosong dengan hal-hal yang diperlukan.",
        "Saat berolahraga di cuaca panas dan berkeringat, penting untuk 'menutup kekurangan' cairan.",
        "Defisit dari usaha baru diputuskan untuk 'ditutup' dengan keuntungan dari usaha lain.",
        "Selama saya libur karena flu, semua orang bekerja sama 'menutup kekurangan' pekerjaan saya.",
      ],
    },
    24: {
      arti: "【コンスタント】 = tetap, stabil (terus-menerus pada tingkat yang sama)",
      optYomi: [
        "この{商品|しょうひん}は{発売|はつばい}{以来|いらい}、{毎月|まいつき}50{個|こ}{程度|ていど}コンスタントに{売|う}れている。",
        "この{映画|えいが}を{見|み}るのは3{度目|どめ}だが、{何度|なんど}{見|み}てもコンスタントに{感動|かんどう}する。",
        "この{公園|こうえん}の{電灯|でんとう}は、{防犯|ぼうはん}のためかひと{晩中|ばんじゅう}コンスタントについている。",
        "{石川|いしかわ}{先生|せんせい}は70{歳|さい}を{過|す}ぎたそうだが、コンスタントに{若々|わかわか}しい。",
      ],
      optArti: [
        "Sejak dirilis, produk ini terjual 'stabil' sekitar 50 buah setiap bulan.",
        "Ini ketiga kalinya saya menonton film ini, tetapi berapa kali pun menonton saya terharu secara 'stabil'.",
        "Lampu taman ini, mungkin demi keamanan, menyala 'stabil' sepanjang malam.",
        "Katanya Pak Ishikawa sudah lewat 70 tahun, tetapi beliau awet muda secara 'stabil'.",
      ],
    },
    25: {
      arti: "【ずばり】 = (berkata) terus terang, tepat kena sasaran",
      optYomi: [
        "{木村|きむら}さんの{一言|ひとこと}を{聞|き}いて、あのときの{出来事|できごと}がずばりと{脳裏|のうり}によみがえってきた。",
        "{息子|むすこ}は、ずっと{続|つづ}けていた{野球|やきゅう}をずばりとやめ、{勉強|べんきょう}に{専念|せんねん}した。",
        "{森|もり}さんはきちょうめんな{人|ひと}で、{机|つくえ}の{上|うえ}の{本|ほん}はいつもずばりとそろえて{置|お}かれている。",
        "{友人|ゆうじん}に{自分|じぶん}の{欠点|けってん}をずばりと{指摘|してき}されて、しばらく{落|お}ち{込|こ}んだ。",
      ],
      optArti: [
        "Mendengar sepatah kata Kimura-san, kejadian waktu itu muncul kembali di benak saya 'secara terus terang'.",
        "Anak saya berhenti 'secara terus terang' dari bisbol yang sudah lama ia tekuni, lalu fokus belajar.",
        "Mori-san orang yang rapi; buku di mejanya selalu tersusun 'secara terus terang'.",
        "Kekurangan saya ditunjukkan teman 'secara terus terang', dan saya murung untuk beberapa waktu.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{机|つくえ}の{引|ひ}き{出|だ}しを{整理|せいり}していたら、{以前|いぜん}{使|つか}っていた{電卓|でんたく}が{出|で}てきた。まだ{使|つか}え（　）するが、{使|つか}う{機会|きかい}がなさそうなので{処分|しょぶん}しようと{思|おも}う。",
      arti: "Saat merapikan laci meja, kalkulator yang dulu saya pakai muncul. Masih bisa dipakai (…), tetapi sepertinya tidak akan ada kesempatan memakainya, jadi saya berniat membuangnya.",
      optArti: ["bahkan", "bahkan ... saja", "(penekanan kontras: memang ... sih)", "juga"],
    },
    27: {
      yomi: "{彼|かれ}はわずか27{歳|さい}（　）{市長|しちょう}となった。",
      arti: "Ia menjadi wali kota (…) usia yang baru 27 tahun.",
      optArti: ["untuk ukuran ...", "dalam rangka, menjelang", "pada saat (resmi)", "pada (usia/tahap) ... sudah"],
    },
    28: {
      yomi: "（ホームページで）{当|とう}センターの{相談|そうだん}{窓口|まどぐち}に（　）、{事前|じぜん}にご{連絡|れんらく}をお{願|ねが}いいたします。",
      arti: "(Di situs web) (…) ke loket konsultasi pusat kami, mohon hubungi kami terlebih dahulu.",
      optYomi: ["{伺|うかが}って{以来|いらい}", "{伺|うかが}う{際|さい}は", "お{越|こ}しになって{以来|いらい}", "お{越|こ}しになる{際|さい}は"],
      optArti: ["sejak saya berkunjung (merendah)", "saat saya berkunjung (merendah)", "sejak Anda datang (hormat)", "saat Anda datang (hormat)"],
    },
    29: {
      yomi: "6{歳|さい}の{息子|むすこ}は、{将来|しょうらい}{私|わたし}と{同|おな}じ{消防士|しょうぼうし}になりたいと{言|い}っている。{実際|じっさい}に（　）、そんなことを{言|い}ってくれたことがうれしい。",
      arti: "Anak saya yang berusia 6 tahun bilang kelak ingin menjadi pemadam kebakaran seperti saya. (…) benar-benar menjadi, saya senang ia mengatakan hal itu.",
      optArti: ["tidak terbatas pada jadi atau tidaknya", "terlepas dari jadi atau tidaknya", "meskipun terpaksa harus menjadi", "bukan hanya terpaksa menjadi"],
    },
    30: {
      yomi: "A{大臣|だいじん}は、{週刊誌|しゅうかんし}の{報道|ほうどう}について、「{事実|じじつ}ではないにもかかわらず、あたかも{事実|じじつ}である（　）{報道|ほうどう}されたことは{遺憾|いかん}である」と{述|の}べた。",
      arti: "Menteri A, mengenai pemberitaan majalah mingguan, menyatakan, \"Sangat disesalkan bahwa hal itu diberitakan (…) fakta, padahal bukan fakta.\"",
      optArti: ["tidak perlu sampai", "karena (bahasa kaku)", "karena sudah (pasti)", "seolah-olah"],
    },
    31: {
      yomi: "{今日|きょう}はさんざんな{一日|いちにち}だった。{自転車|じてんしゃ}はパンクするし、{財布|さいふ}はなくすし、しまいには{大雨|おおあめ}に{降|ふ}られてずぶぬれになる（　）。",
      arti: "Hari ini benar-benar hari yang sial. Ban sepeda bocor, dompet hilang, dan akhirnya kehujanan lebat sampai basah kuyup (…).",
      optYomi: ["{始末|しまつ}だった", "{最中|さいちゅう}だった", "{思|おも}いだった", "{限|かぎ}りだった"],
      optArti: ["(berakhir dengan) keadaan buruk seperti itu", "sedang di tengah-tengah", "perasaannya (seperti)", "sungguh sangat (perasaan)"],
    },
    32: {
      yomi: "{森|もり}{選手|せんしゅ}の{予選|よせん}{敗退|はいたい}は、けがが{原因|げんいん}だと{言|い}われているが、{本人|ほんにん}は「けがは{関係|かんけい}ない。{単|たん}に{実力|じつりょく}が{足|た}りなかった（　）」とコメントしている。",
      arti: "Kekalahan atlet Mori di babak penyisihan disebut-sebut karena cedera, tetapi ia sendiri berkomentar, \"Cedera tidak ada hubungannya. Kemampuan saya memang kurang, (…).\"",
      optArti: ["pantas saja (sesuai dengan)", "ada sesuatu yang (mengesankan)", "hanya itu saja (tidak lebih)", "bisa dibilang seperti"],
    },
    33: {
      yomi: "エアコンが{故障|こしょう}してしまい、この1{週間|しゅうかん}{暑|あつ}くて{大変|たいへん}だったが、{今日|きょう}ようやく{修理|しゅうり}してもらえた。これでもう{暑|あつ}さに（　）。",
      arti: "AC rusak dan seminggu ini panas sekali, tetapi hari ini akhirnya diperbaiki. Dengan ini saya (…) oleh panas lagi.",
      optYomi: ["{悩|なや}まされかねない", "{悩|なや}ませかねない", "{悩|なや}まされることはない", "{悩|なや}ませることはない"],
      optArti: ["bisa-bisa tersiksa", "bisa-bisa menyiksa", "tidak akan tersiksa", "tidak akan menyiksa"],
    },
    34: {
      yomi: "（{天気|てんき}{予報|よほう}で）「{明日|あす}は{低気圧|ていきあつ}の{発達|はったつ}に{伴|ともな}い、{西日本|にしにほん}を{中心|ちゅうしん}に{風雨|ふうう}が（　）。」",
      arti: "(Dalam prakiraan cuaca) \"Besok, seiring berkembangnya tekanan rendah, angin dan hujan (…), terutama di Jepang bagian barat.\"",
      optYomi: ["{強|つよ}めつつあります", "{強|つよ}める{見込|みこ}みです", "{強|つよ}まりつつあります", "{強|つよ}まる{見込|みこ}みです"],
      optArti: ["sedang memperkuat (transitif)", "diperkirakan akan memperkuat (transitif)", "sedang menguat", "diperkirakan akan menguat"],
    },
    35: {
      yomi: "（{育児|いくじ}の{本|ほん}で）3{歳|さい}{前後|ぜんご}の{子供|こども}は、「なぜ？」「どうして？」と{何|なん}でも（　）。{周囲|しゅうい}の{大人|おとな}はめんどくさがらずに、そういった{質問|しつもん}に{向|む}き{合|あ}ってあげましょう。",
      arti: "(Dalam buku parenting) Anak sekitar usia 3 tahun (…) segala hal sambil bertanya \"Kenapa?\" \"Mengapa?\". Orang dewasa di sekitarnya hendaknya tidak malas menanggapi pertanyaan semacam itu.",
      optYomi: ["{知|し}りたがるものです", "{知|し}りたそうなものです", "{知|し}りたがることです", "{知|し}りたそうなことです"],
      optArti: ["memang (wajarnya) ingin tahu", "tampaknya hal yang ingin diketahui", "hal yang ingin diketahui", "hal yang tampaknya ingin diketahui"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{息子|むすこ}が{通|かよ}っているピアノ{教室|きょうしつ}の{発表会|はっぴょうかい}で、{緊張|きんちょう}して{弾|ひ}けなくなってしまった{子|こ}がいた。{大人|おとな}だって＿＿ ★ ＿＿ ＿＿{無理|むり}はないだろう。",
      arti: "Di pentas les piano anak saya, ada anak yang sampai tidak bisa bermain karena gugup. Orang dewasa pun gugup kalau melakukan sesuatu di depan banyak orang, jadi wajar saja kalau anak-anak sampai begitu.",
      optYomi: [null, "{緊張|きんちょう}するのだから", "{大勢|おおぜい}の{前|まえ}で{何|なに}かをするのは", "{子供|こども}が"],
      optArti: ["(kalau) jadi begitu pun", "karena (memang) gugup", "melakukan sesuatu di depan banyak orang", "anak-anak"],
    },
    37: {
      yomi: "（テレビ{番組|ばんぐみ}のナレーション）「{蚊|か}と{言|い}えば、{動物|どうぶつ}の{血|ち}を{吸|す}うイメージがありますが、{実|じつ}は{血|ち}を{吸|す}うのは{雌|めす}だけだそうです。しかも、＿＿ ＿＿ ★ ＿＿{専門家|せんもんか}に{詳|くわ}しく{聞|き}いてみよう。」",
      arti: "(Narasi acara TV) \"Bicara soal nyamuk, kesannya mereka mengisap darah hewan, tetapi ternyata yang mengisap darah hanya nyamuk betina. Terlebih lagi, katanya itu adalah perilaku khusus betina yang akan bertelur. Mari kita tanyakan lebih rinci kepada ahlinya.\"",
      optYomi: ["{雌|めす}に{限|かぎ}っての", null, "{行動|こうどう}なのだ", "{産卵|さんらん}を{控|ひか}えた"],
      optArti: ["yang terbatas pada betina", "katanya", "adalah perilaku", "yang akan segera bertelur"],
    },
    38: {
      yomi: "{昨年度|さくねんど}までは{社内|しゃない}{研修|けんしゅう}{後|ご}のアンケートを{記述式|きじゅつしき}で{行|おこな}っていたが、まとめるのに{時間|じかん}がかかる＿＿ ＿＿ ★ ＿＿を{踏|ふ}まえ、{今年度|こんねんど}は{選択式|せんたくしき}で{行|おこな}うことにした。",
      arti: "Sampai tahun lalu, kuesioner setelah pelatihan internal dibuat dalam bentuk isian. Namun, mempertimbangkan bahwa selain lama merangkumnya, tanggapan dari peserta pun kurang baik, tahun ini diputuskan memakai bentuk pilihan.",
      optYomi: [null, "{評判|ひょうばん}も{良|よ}くなかった", null, "{受講者|じゅこうしゃ}からの"],
      optArti: ["selain itu, ditambah", "tanggapannya pun tidak baik", "hal (bahwa)", "dari peserta pelatihan"],
    },
    39: {
      yomi: "{枕|まくら}を{変|か}えたら、{今|いま}までより{良|よ}く{眠|ねむ}れるようになった。{自分|じぶん}に{合|あ}った＿＿ ＿＿ ★ ＿＿{驚|おどろ}いた。",
      arti: "Setelah mengganti bantal, saya jadi bisa tidur lebih nyenyak dari sebelumnya. Saya kaget, karena tidak menyangka kualitas tidur bisa berubah sebanyak ini hanya dengan mengganti ke bantal yang cocok untuk diri sendiri.",
      optYomi: ["{睡眠|すいみん}の{質|しつ}が{変|か}わるなんて", "{枕|まくら}に{換|か}えるだけで", "{思|おも}っていなかったから", null],
      optArti: ["(bahwa) kualitas tidur bisa berubah", "hanya dengan mengganti ke bantal", "karena tidak menyangka", "sebanyak ini"],
    },
    40: {
      yomi: "{人工|じんこう}{知能|ちのう}をはじめとする＿＿ ★ ＿＿ ＿＿{企業|きぎょう}が{多|おお}い。",
      arti: "Banyak perusahaan yang, meski memahami manfaat mengadopsi teknologi mutakhir seperti kecerdasan buatan, belum sampai menerapkannya karena sulitnya mendapatkan SDM yang mampu menanganinya serta masalah biaya.",
      optYomi: ["メリットは{理解|りかい}しつつも", "{導入|どうにゅう}に{至|いた}っていない", "{先端|せんたん}{技術|ぎじゅつ}を{取|と}り{入|い}れる", "{扱|あつか}える{人材|じんざい}の{確保|かくほ}やコスト{面|めん}での{難|むずか}しさから"],
      optArti: ["meski memahami manfaatnya", "belum sampai menerapkan", "mengadopsi teknologi mutakhir", "karena sulitnya mendapatkan SDM yang mampu dan masalah biaya"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{話|はな}したとしても", "{話|はな}そうものなら", "{話|はな}すことで", "{話|はな}さないかぎり"],
      optArti: ["meskipun berbicara", "kalau sampai berbicara (akibatnya buruk)", "dengan berbicara", "selama tidak berbicara"],
    },
    42: {
      optYomi: ["{会|あ}うよりも", "{会|あ}ってこそ", "{会|あ}うまでに", "{会|あ}っただけでも"],
      optArti: ["daripada bertemu", "justru dengan bertemu (barulah)", "sebelum bertemu", "meski hanya bertemu"],
    },
    43: {
      optYomi: ["{思|おも}い{出|だ}したくてたまらないのです", "{思|おも}い{出|だ}すのではないでしょうか", "{思|おも}い{出|だ}すしかありません", "{思|おも}い{出|だ}してください"],
      optArti: ["sangat ingin mengingatnya", "bukankah Anda akan teringat?", "tidak ada pilihan selain mengingat", "cobalah ingat"],
    },
    44: {
      optYomi: [null, "という{点|てん}です", null, null],
      optArti: ["begitulah (alasannya)", "itulah poinnya", "anggap saja", "dianggap, dinyatakan"],
    },

    // ── 問題8：内容理解（短文） ──
    45: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{本当|ほんとう}に{実力|じつりょく}があれば、{練習|れんしゅう}でできなかったことでも{試合|しあい}でできる。",
        "{全力|ぜんりょく}で{練習|れんしゅう}したから{試合|しあい}でも{成功|せいこう}するというのは、{甘|あま}い{考|かんが}えだ。",
        "{練習|れんしゅう}でしっかりできていても、{試合|しあい}で{実力|じつりょく}を{発揮|はっき}するのは{難|むずか}しい。",
        "{練習|れんしゅう}にも{全力|ぜんりょく}で{取|と}り{組|く}まなければ、{試合|しあい}でいい{結果|けっか}は{出|だ}せない。",
      ],
      optArti: [
        "Jika benar-benar punya kemampuan, hal yang tidak bisa dilakukan saat latihan pun bisa dilakukan saat pertandingan.",
        "Anggapan bahwa karena sudah berlatih sepenuh tenaga maka akan berhasil di pertandingan adalah pemikiran yang naif.",
        "Meski saat latihan bisa melakukannya dengan baik, sulit mengeluarkan kemampuan saat pertandingan.",
        "Jika latihan pun tidak dijalani dengan sepenuh tenaga, hasil bagus tidak akan diraih dalam pertandingan.",
      ],
    },
    46: {
      yomi: "{感情|かんじょう}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan tentang emosi?",
      optYomi: [
        "{感情|かんじょう}は{生理的|せいりてき}な{反応|はんのう}より{思考|しこう}の{影響|えいきょう}が{大|おお}きい。",
        "{感情|かんじょう}は{相手|あいて}の{対応|たいおう}ではなく{自分|じぶん}の{実感|じっかん}で{決|き}まる。",
        "{感情|かんじょう}は{実感|じっかん}だけではなく{価値|かち}{判断|はんだん}も{含|ふく}む。",
        "{感情|かんじょう}は{思考|しこう}より{先|さき}に{生|う}まれるものである。",
      ],
      optArti: [
        "Emosi lebih banyak dipengaruhi pikiran daripada reaksi fisiologis.",
        "Emosi ditentukan oleh apa yang dirasakan diri sendiri, bukan oleh sikap pihak lain.",
        "Emosi tidak hanya berisi apa yang dirasakan, tetapi juga penilaian nilai (benar-salah).",
        "Emosi adalah sesuatu yang muncul lebih dulu daripada pikiran.",
      ],
    },
    47: {
      yomi: "{科学者|かがくしゃ}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan tentang ilmuwan?",
      optYomi: [
        "{原因|げんいん}と{結果|けっか}が{単純|たんじゅん}に{結|むす}ばれない{限|かぎ}り、{疑|うたが}い{続|つづ}ける。",
        "{原因|げんいん}と{結果|けっか}が{論理的|ろんりてき}に{証明|しょうめい}できなければ、{受|う}け{入|い}れない。",
        "{原因|げんいん}と{結果|けっか}の{関係|かんけい}が{複雑|ふくざつ}であるほど、より{強固|きょうこ}な{証拠|しょうこ}を{要求|ようきゅう}する。",
        "{原因|げんいん}と{結果|けっか}の{関係|かんけい}が{意外|いがい}な{場合|ばあい}には、{証拠|しょうこ}がない{限|かぎ}り{推測|すいそく}を{述|の}べない。",
      ],
      optArti: [
        "Selama sebab dan akibat tidak terhubung secara sederhana, mereka terus meragukan.",
        "Jika sebab dan akibat tidak bisa dibuktikan secara logis, mereka tidak menerimanya.",
        "Semakin rumit hubungan sebab-akibat, semakin kuat bukti yang mereka tuntut.",
        "Jika hubungan sebab-akibat tidak terduga, mereka tidak menyampaikan dugaan selama tidak ada bukti.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}の{説明|せつめい}によると、{自立|じりつ}した{人|ひと}とはどのような{人|ひと}か。",
      arti: "Menurut penjelasan penulis, orang yang mandiri adalah orang seperti apa?",
      optYomi: [
        "{自立|じりつ}と{依存|いぞん}が{全|まった}く{違|ちが}うことだと{認識|にんしき}している{人|ひと}。",
        "{依存|いぞん}を{少|すく}なくしたうえで、{他者|たしゃ}と{生|い}きようとする{人|ひと}。",
        "{必要|ひつよう}に{応|おう}じて{依存|いぞん}し、{自身|じしん}の{依存|いぞん}をよく{理解|りかい}している{人|ひと}。",
        "{孤立|こりつ}することを{恐|おそ}れず、{依存|いぞん}をなくそうと{努力|どりょく}している{人|ひと}。",
      ],
      optArti: [
        "Orang yang menyadari bahwa kemandirian dan ketergantungan adalah hal yang sama sekali berbeda.",
        "Orang yang berusaha hidup bersama orang lain setelah mengurangi ketergantungan.",
        "Orang yang bergantung sesuai kebutuhan dan memahami betul ketergantungannya sendiri.",
        "Orang yang tidak takut terisolasi dan berusaha menghilangkan ketergantungan.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    49: {
      yomi: "{筆者|ひっしゃ}は{何|なん}のために{新聞|しんぶん}を{使|つか}って「{修業|しゅぎょう}」をしていたか。",
      arti: "Untuk apa penulis melakukan \"latihan\" dengan memakai koran?",
      optYomi: [
        "{記事|きじ}の{人物|じんぶつ}について{自分|じぶん}の{考|かんが}えを{持|も}つため。",
        "{記事|きじ}を{参考|さんこう}に、{自分|じぶん}なりのストーリーを{作|つく}り{出|だ}すため。",
        "{自分|じぶん}{自身|じしん}の{考|かんが}えを{持|も}てるようにするため。",
        "{自分|じぶん}の{考|かんが}えを{言葉|ことば}で{表現|ひょうげん}できるようになるため。",
      ],
      optArti: [
        "Untuk memiliki pendapat sendiri tentang tokoh dalam artikel.",
        "Untuk menciptakan cerita versi sendiri dengan berpedoman pada artikel.",
        "Agar bisa memiliki pemikiran sendiri.",
        "Agar bisa mengungkapkan pemikiran sendiri dengan kata-kata.",
      ],
    },
    50: {
      yomi: "{筆者|ひっしゃ}は、「{修業|しゅぎょう}」を{繰|く}り{返|かえ}した{後|あと}、{漫画|まんが}で{何|なに}を{表現|ひょうげん}したいと{思|おも}ったか。",
      arti: "Setelah mengulang-ulang \"latihan\" itu, apa yang ingin diungkapkan penulis lewat manga?",
      optYomi: [
        "ヒロインが{自|みずか}ら{決断|けつだん}し{人生|じんせい}を{生|い}きる{姿|すがた}。",
        "ヒロインが{自|みずか}らの{人生|じんせい}について{悩|なや}む{姿|すがた}。",
        "ヒロインが{自|みずか}ら{選|えら}んだ{人生|じんせい}で{成功|せいこう}する{過程|かてい}。",
        "ヒロインの{感情|かんじょう}や{心|こころ}が{変化|へんか}する{過程|かてい}。",
      ],
      optArti: [
        "Sosok heroine yang mengambil keputusan sendiri dan menjalani hidupnya.",
        "Sosok heroine yang bergulat dengan hidupnya sendiri.",
        "Proses heroine meraih kesuksesan dalam hidup yang ia pilih sendiri.",
        "Proses berubahnya emosi dan hati heroine.",
      ],
    },
    51: {
      yomi: "カブトムシの{例|れい}を{挙|あ}げて{筆者|ひっしゃ}が{言|い}おうとしていることは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis dengan memberi contoh kumbang badak?",
      optYomi: [
        "{環境|かんきょう}によって、{個体|こたい}が{生|い}き{残|のこ}るために{必要|ひつよう}な{基本形|きほんけい}も{変化|へんか}していく。",
        "さまざまな{形|かたち}の{個体|こたい}が{生|う}まれても、{時間|じかん}がたてばひとつの{形|かたち}になっていく。",
        "{生存|せいぞん}の{条件|じょうけん}に{合|あ}う{変化|へんか}の{生|しょう}じた{個体|こたい}だけが{生|い}き{残|のこ}ることができる。",
        "{生存|せいぞん}にかかわる{本質的|ほんしつてき}な{部分|ぶぶん}の{変化|へんか}でなければ、どんな{形|かたち}の{個体|こたい}も{生|い}き{残|のこ}る。",
      ],
      optArti: [
        "Tergantung lingkungan, bentuk dasar yang dibutuhkan individu untuk bertahan hidup pun ikut berubah.",
        "Meski lahir individu dengan berbagai bentuk, seiring waktu semuanya akan menjadi satu bentuk.",
        "Hanya individu yang mengalami perubahan sesuai syarat bertahan hidup yang bisa bertahan.",
        "Selama bukan perubahan pada bagian esensial yang berkaitan dengan kelangsungan hidup, individu berbentuk apa pun akan bertahan.",
      ],
    },
    52: {
      yomi: "{生物|せいぶつ}の{進化|しんか}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan tentang evolusi makhluk hidup?",
      optYomi: [
        "{突然|とつぜん}{変異|へんい}で{生|しょう}じた{多様性|たようせい}は、{環境|かんきょう}{次第|しだい}で{維持|いじ}されたり{縮小|しゅくしょう}したりする。",
        "{突然|とつぜん}{変異|へんい}が{頻繁|ひんぱん}に{起|お}こることで、{環境|かんきょう}の{影響|えいきょう}を{受|う}けない{個体|こたい}が{生|う}まれる。",
        "{突然|とつぜん}{変異|へんい}も{環境|かんきょう}からの{圧力|あつりょく}も、{多様性|たようせい}を{拡大|かくだい}したり{縮小|しゅくしょう}したりする{役割|やくわり}がある。",
        "{多様性|たようせい}は、{環境|かんきょう}からの{圧力|あつりょく}で{絞|しぼ}り{込|こ}まれても、{突然|とつぜん}{変異|へんい}によって{拡大|かくだい}し{続|つづ}けていく。",
      ],
      optArti: [
        "Keragaman yang muncul akibat mutasi bisa dipertahankan atau menyusut tergantung lingkungan.",
        "Karena mutasi sering terjadi, lahirlah individu yang tidak terpengaruh lingkungan.",
        "Baik mutasi maupun tekanan lingkungan sama-sama berperan memperluas dan mempersempit keragaman.",
        "Keragaman, meski dipersempit oleh tekanan lingkungan, terus meluas berkat mutasi.",
      ],
    },
    53: {
      yomi: "「{正|ただ}しい{怒|いか}り」の{罠|わな}とはどういうことか。",
      arti: "Apa yang dimaksud dengan \"jebakan 'kemarahan yang benar'\"?",
      optYomi: [
        "{不正|ふせい}に{対|たい}する{怒|いか}りの{感情|かんじょう}が{自分|じぶん}で{制御|せいぎょ}できなくなってしまうこと。",
        "{不正|ふせい}に{怒|いか}りを{感|かん}じる{自分|じぶん}の{側|がわ}に{正義|せいぎ}があると{思|おも}い{込|こ}んでしまうこと。",
        "{不正|ふせい}だけではなく{正|ただ}しいことに{対|たい}しても{怒|いか}りを{抱|いだ}いてしまうこと。",
        "{怒|いか}りによってしか{不正|ふせい}を{正|ただ}すことができないと{思|おも}い{込|こ}んでしまうこと。",
      ],
      optArti: [
        "Perasaan marah terhadap ketidakadilan menjadi tak terkendali oleh diri sendiri.",
        "Terlanjur yakin bahwa kebenaran ada di pihak diri sendiri yang marah terhadap ketidakadilan.",
        "Merasa marah bukan hanya terhadap ketidakadilan, tetapi juga terhadap hal yang benar.",
        "Terlanjur yakin bahwa ketidakadilan hanya bisa diluruskan dengan kemarahan.",
      ],
    },
    54: {
      yomi: "「{正|ただ}しく{怒|おこ}る」ことについて、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang \"marah dengan benar\", mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{怒|いか}りに{基|もと}づいた{行為|こうい}が{正当|せいとう}かどうかを{社会|しゃかい}{全体|ぜんたい}で{考|かんが}えるべきだ。",
        "{怒|いか}りから{生|しょう}じた{行為|こうい}が{正当|せいとう}かどうかを{常|つね}に{客観視|きゃっかんし}する{必要|ひつよう}がある。",
        "{怒|いか}りをどのようにして{正義|せいぎ}に{結|むす}びつけたらいいか{冷静|れいせい}に{考|かんが}えるべきだ。",
        "{一人一人|ひとりひとり}が{自分|じぶん}の{怒|いか}りの{行動|こうどう}に{責任|せきにん}を{持|も}ち、{冷静|れいせい}でいる{必要|ひつよう}がある。",
      ],
      optArti: [
        "Apakah tindakan yang didasari kemarahan itu sah atau tidak, harus dipikirkan oleh seluruh masyarakat.",
        "Perlu selalu melihat secara objektif apakah tindakan yang lahir dari kemarahan itu sah atau tidak.",
        "Harus memikirkan dengan tenang bagaimana cara mengaitkan kemarahan dengan keadilan.",
        "Setiap orang perlu bertanggung jawab atas tindakan kemarahannya dan tetap tenang.",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}によると、{最初|さいしょ}から{批判的|ひはんてき}に{読|よ}むことの{問題点|もんだいてん}は{何|なに}か。",
      arti: "Menurut penulis, apa masalahnya membaca secara kritis sejak awal?",
      optYomi: [
        "{論点|ろんてん}だけでなく、{重要|じゅうよう}でない{点|てん}まで{取|と}り{上|あ}げて{批判|ひはん}するようになること。",
        "{著者|ちょしゃ}の{主張|しゅちょう}が{正|ただ}しいと{分|わ}かっているのに、{受|う}け{入|い}れられなくなること。",
        "{批判|ひはん}することが{目的|もくてき}になり、{著者|ちょしゃ}の{主張|しゅちょう}を{正確|せいかく}に{理解|りかい}できなくなること。",
        "{批判|ひはん}することしか{頭|あたま}になくなり、{自分|じぶん}の{考|かんが}えが{持|も}てなくなること。",
      ],
      optArti: [
        "Jadi mengkritik bukan hanya pokok persoalan, tetapi juga hal-hal yang tidak penting.",
        "Jadi tidak bisa menerima pendapat penulis padahal tahu bahwa pendapat itu benar.",
        "Mengkritik menjadi tujuan, sehingga tidak bisa memahami pendapat penulis dengan tepat.",
        "Kepala hanya berisi keinginan mengkritik, sehingga tidak bisa memiliki pemikiran sendiri.",
      ],
    },
    56: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{批判的|ひはんてき}に{読|よ}みながら{徹底的|てっていてき}な{読|よ}みも{加|くわ}えることを{意識|いしき}するべきだ。",
        "{徹底的|てっていてき}に{読|よ}むことが{必要|ひつよう}だが、{批判的|ひはんてき}な{読|よ}みも{忘|わす}れてはいけない。",
        "{徹底的|てっていてき}に{読|よ}むか{批判的|ひはんてき}に{読|よ}むかは{内容|ないよう}によって{決|き}める{必要|ひつよう}がある。",
        "{徹底的|てっていてき}に{深|ふか}く{読|よ}めば、{意識|いしき}しなくても{鋭|するど}く{批判的|ひはんてき}に{読|よ}むことができる。",
      ],
      optArti: [
        "Sambil membaca secara kritis, harus sadar untuk menambahkan pembacaan yang mendalam.",
        "Membaca secara mendalam memang perlu, tetapi pembacaan kritis juga tidak boleh dilupakan.",
        "Membaca secara mendalam atau secara kritis perlu ditentukan berdasarkan isinya.",
        "Jika membaca secara mendalam, tanpa disadari pun kita bisa membaca dengan tajam dan kritis.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    57: {
      yomi: "{数学|すうがく}の{問題|もんだい}を{解|と}くことについて、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang menyelesaikan soal matematika, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{早|はや}く{解|と}けなくても、{解|と}き{方|かた}を{身|み}につけることが{大切|たいせつ}だ。",
        "{解|と}けても{解|と}けなくても、{問題|もんだい}に{取|と}り{組|く}むことが{大切|たいせつ}だ。",
        "{解|と}けなかった{問題|もんだい}が{解|と}けるようになったらおもしろくなる。",
        "{解|と}き{方|かた}のわからない{問題|もんだい}を{解|と}こうとすることに{意味|いみ}がある。",
      ],
      optArti: [
        "Meski tidak bisa cepat menyelesaikannya, yang penting adalah menguasai cara penyelesaiannya.",
        "Bisa diselesaikan atau tidak, yang penting adalah menghadapi soal itu.",
        "Begitu soal yang tadinya tak terpecahkan bisa diselesaikan, matematika menjadi menarik.",
        "Ada maknanya berusaha menyelesaikan soal yang belum diketahui cara penyelesaiannya.",
      ],
    },
    58: {
      yomi: "{頭|あたま}のなかに{飼|か}っておくとはどういうことか。",
      arti: "Apa maksud \"memeliharanya di dalam kepala\"?",
      optYomi: [
        "わかる{問題|もんだい}を{手|て}がかりにして、わからない{問題|もんだい}を{考|かんが}えること。",
        "わかる{問題|もんだい}とわからない{問題|もんだい}を、{頭|あたま}のなかで{区別|くべつ}しておくこと。",
        "わからない{問題|もんだい}をわかるまで{解|と}き{続|つづ}けていること。",
        "わからない{状態|じょうたい}のまま、{問題|もんだい}を{頭|あたま}のなかに{残|のこ}しておくこと。",
      ],
      optArti: [
        "Memikirkan soal yang belum dipahami dengan berpegang pada soal yang sudah dipahami.",
        "Memilah di dalam kepala antara soal yang dipahami dan yang tidak.",
        "Terus mengerjakan soal yang belum dipahami sampai paham.",
        "Membiarkan soal tetap tersimpan di kepala dalam keadaan belum dipahami.",
      ],
    },
    59: {
      yomi: "{筆者|ひっしゃ}によると、どのように{勉強|べんきょう}すればよいか。",
      arti: "Menurut penulis, bagaimana sebaiknya belajar?",
      optYomi: [
        "{結果|けっか}を{急|いそ}がずに、{考|かんが}えることを{楽|たの}しむ。",
        "{結果|けっか}に{達|たっ}することができれば、どんなやり{方|かた}でもよい。",
        "{目的|もくてき}を{忘|わす}れないで、あせらずに{勉強|べんきょう}を{楽|たの}しめばよい。",
        "{自分|じぶん}に{合|あ}ったやり{方|かた}を{探|さが}して、{時間|じかん}を{気|き}にせず{取|と}り{組|く}む。",
      ],
      optArti: [
        "Tidak terburu-buru mengejar hasil, dan menikmati proses berpikir.",
        "Asalkan bisa mencapai hasil, cara apa pun boleh.",
        "Tanpa melupakan tujuan, nikmati saja belajar tanpa tergesa-gesa.",
        "Mencari cara yang cocok untuk diri sendiri, lalu mengerjakannya tanpa memedulikan waktu.",
      ],
    },

    // ── 問題11：統合理解 ──
    60: {
      yomi: "あきらめることについて、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana A dan B menjelaskan tentang menyerah (berhenti)?",
      optYomi: [
        "AもBも、{成果|せいか}が{出|だ}せる{可能性|かのうせい}が{低|ひく}い{場合|ばあい}には、あきらめたほうがよいと{述|の}べている。",
        "AもBも、つらくても、できるだけあきらめずに{頑張|がんば}ったほうがよいと{述|の}べている。",
        "Aは{状況|じょうきょう}によっては、あきらめたほうがよいこともあると{述|の}べ、Bはあきらめてもいいと{思|おも}ったほうが、{頑張|がんば}り{続|つづ}けられる{場合|ばあい}もあると{述|の}べている。",
        "Aは{努力|どりょく}しても{結果|けっか}に{結|むす}びつかない{場合|ばあい}は、あきらめたほうがよいと{述|の}べ、Bは{十分|じゅうぶん}にやってみるまでは、あきらめることを{考|かんが}えるべきではないと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan bahwa jika kemungkinan membuahkan hasil itu rendah, lebih baik menyerah.",
        "A dan B sama-sama menyatakan bahwa meski berat, lebih baik berusaha sebisa mungkin tanpa menyerah.",
        "A menyatakan bahwa tergantung situasinya, kadang lebih baik menyerah; B menyatakan bahwa kadang justru dengan berpikir 'boleh menyerah' seseorang bisa terus berjuang.",
        "A menyatakan bahwa jika usaha tidak membuahkan hasil, lebih baik menyerah; B menyatakan bahwa sebelum benar-benar mencoba sepenuhnya, jangan memikirkan untuk menyerah.",
      ],
    },
    61: {
      yomi: "AとBの{認識|にんしき}で{共通|きょうつう}していることは{何|なに}か。",
      arti: "Apa kesamaan pandangan A dan B?",
      optYomi: [
        "あきらめることになった{原因|げんいん}を{考|かんが}えるべきだ。",
        "あきらめるのが{早|はや}ければ、{早|はや}く{立|た}ち{直|なお}れる。",
        "あきらめたことでも、{再|さい}{挑戦|ちょうせん}することはできる。",
        "あきらめたことを{後悔|こうかい}してはいけない。",
      ],
      optArti: [
        "Harus memikirkan penyebab sampai harus menyerah.",
        "Jika cepat menyerah, bisa cepat bangkit kembali.",
        "Hal yang sudah dilepaskan pun masih bisa dicoba lagi.",
        "Tidak boleh menyesali hal yang sudah dilepaskan.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    62: {
      yomi: "{筆者|ひっしゃ}によると、{親|おや}や{教師|きょうし}は{子|こ}どもや{生徒|せいと}に{対|たい}して{何|なに}をしているか。",
      arti: "Menurut penulis, apa yang dilakukan orang tua dan guru terhadap anak dan murid?",
      optYomi: [
        "{反抗|はんこう}を{容認|ようにん}しつつ、{不自由|ふじゆう}な{社会的|しゃかいてき}{規範|きはん}に{従|したが}わせている。",
        "どの{時代|じだい}にも{通用|つうよう}する{社会的|しゃかいてき}{規範|きはん}を{身|み}につけさせている。",
        "{社会的|しゃかいてき}{規範|きはん}を{教|おし}え、{社会|しゃかい}の{枠組|わくぐ}みに{適応|てきおう}させている。",
        "{社会的|しゃかいてき}{規範|きはん}を{教|おし}えたうえで、{自由|じゆう}に{生|い}きる{方法|ほうほう}を{身|み}につけさせている。",
      ],
      optArti: [
        "Sambil membiarkan pembangkangan, mereka membuat anak patuh pada norma sosial yang mengekang.",
        "Mereka menanamkan norma sosial yang berlaku di zaman mana pun.",
        "Mereka mengajarkan norma sosial dan membuat anak menyesuaikan diri dengan kerangka masyarakat.",
        "Setelah mengajarkan norma sosial, mereka menanamkan cara hidup bebas.",
      ],
    },
    63: {
      yomi: "{精神的|せいしんてき}な{財産|ざいさん}とは{何|なに}か。",
      arti: "Apa yang dimaksud dengan \"harta spiritual\"?",
      optYomi: [
        "ひとが{幸福|こうふく}になるために{守|まも}ってきたもの。",
        "ひとが{本能|ほんのう}を{抑圧|よくあつ}されずに{生|い}きるためのもの。",
        "ひとが{社会|しゃかい}で{生|い}きていくために{作|つく}られてきたもの。",
        "これから{生|う}まれ{育|そだ}っていく{子|こ}どもにとって{必要|ひつよう}なもの。",
      ],
      optArti: [
        "Hal-hal yang dijaga manusia agar menjadi bahagia.",
        "Hal-hal agar manusia bisa hidup tanpa naluri yang ditekan.",
        "Hal-hal yang telah dibentuk agar manusia bisa hidup di dalam masyarakat.",
        "Hal-hal yang diperlukan anak-anak yang akan lahir dan tumbuh nanti.",
      ],
    },
    64: {
      yomi: "{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{社会的|しゃかいてき}{規範|きはん}は{時代|じだい}によって{変化|へんか}するものであり、{子|こ}どもはおとなの{思|おも}うとおりにならなくて{当然|とうぜん}である。",
        "{社会的|しゃかいてき}{規範|きはん}は{暫定的|ざんていてき}なものにすぎず、{子|こ}どもが{自身|じしん}の{考|かんが}え{方|かた}に{合|あ}ったものを{作|つく}っていくことが{望|のぞ}ましい。",
        "{時代|じだい}の{変化|へんか}に{適応|てきおう}できるように、おとなは{子|こ}どもに{社会的|しゃかいてき}{規範|きはん}の{背景|はいけい}となる{考|かんが}え{方|かた}を{教|おし}えたほうがいい。",
        "{時代|じだい}によって{考|かんが}え{方|かた}は{変化|へんか}するものなので、それに{合|あ}わせて{次|つぎ}の{世代|せだい}が{社会的|しゃかいてき}{規範|きはん}を{変|か}えるべきだ。",
      ],
      optArti: [
        "Norma sosial berubah seiring zaman, sehingga wajar jika anak tidak menjadi seperti yang diinginkan orang dewasa.",
        "Norma sosial hanyalah sementara, dan sebaiknya anak membuat norma yang sesuai dengan cara berpikirnya sendiri.",
        "Agar bisa beradaptasi dengan perubahan zaman, orang dewasa sebaiknya mengajarkan cara berpikir yang melatarbelakangi norma sosial kepada anak.",
        "Karena cara berpikir berubah seiring zaman, generasi berikutnya harus mengubah norma sosial sesuai dengan itu.",
      ],
    },

    // ── 問題13：情報検索 ──
    65: {
      yomi: "マリーさんは{秋川|あきかわ}{大学|だいがく}で{本|ほん}を{借|か}りるために、{図書館|としょかん}{利用|りよう}カードを{作|つく}ろうと{思|おも}っている。{今日|きょう}は{金曜日|きんようび}である。{明日|あした}の{夜|よる}までに{本|ほん}を{借|か}りたいが、{図書館|としょかん}{利用|りよう}カードは、どのように{申請|しんせい}しなければならないか。",
      arti: "Marie-san ingin membuat kartu perpustakaan untuk meminjam buku di Universitas Akikawa. Hari ini hari Jumat. Ia ingin meminjam buku paling lambat besok malam; bagaimana ia harus mengajukan kartu perpustakaan?",
      optYomi: [
        "{今日|きょう}、{中央|ちゅうおう}{図書館|としょかん}か{文学部|ぶんがくぶ}{図書館|としょかん}で9{時|じ}から17{時|じ}までの{間|あいだ}に{申請|しんせい}する。",
        "{今日|きょう}、{中央|ちゅうおう}{図書館|としょかん}で9{時|じ}から17{時|じ}までの{間|あいだ}に{申請|しんせい}する。{文学部|ぶんがくぶ}{図書館|としょかん}では{申請|しんせい}できない。",
        "{今日|きょう}、{中央|ちゅうおう}{図書館|としょかん}か{文学部|ぶんがくぶ}{図書館|としょかん}で9{時|じ}から17{時|じ}までの{間|あいだ}に{申請|しんせい}するか、{明日|あした}、{中央|ちゅうおう}{図書館|としょかん}で9{時|じ}から17{時|じ}までの{間|あいだ}に{申請|しんせい}する。",
        "{今日|きょう}か{明日|あした}、{中央|ちゅうおう}{図書館|としょかん}か{文学部|ぶんがくぶ}{図書館|としょかん}で9{時|じ}から17{時|じ}までの{間|あいだ}に{申請|しんせい}する。",
      ],
      optArti: [
        "Hari ini, mengajukan di Perpustakaan Pusat atau Perpustakaan Fakultas Sastra antara pukul 9 dan 17.",
        "Hari ini, mengajukan di Perpustakaan Pusat antara pukul 9 dan 17. Tidak bisa mengajukan di Perpustakaan Fakultas Sastra.",
        "Hari ini mengajukan di Perpustakaan Pusat atau Perpustakaan Fakultas Sastra antara pukul 9 dan 17, atau besok mengajukan di Perpustakaan Pusat antara pukul 9 dan 17.",
        "Hari ini atau besok, mengajukan di Perpustakaan Pusat atau Perpustakaan Fakultas Sastra antara pukul 9 dan 17.",
      ],
    },
    66: {
      yomi: "カイさんは、{研究|けんきゅう}のために{資料|しりょう}を{借|か}りたり{複写|ふくしゃ}したりする{必要|ひつよう}があって、{秋川|あきかわ}{大学|だいがく}の{文学部|ぶんがくぶ}{図書館|としょかん}に{来|き}た。{図書館|としょかん}{利用|りよう}カードは{持|も}っている。{今日|きょう}は、{授業|じゅぎょう}{期間|きかん}の{火曜日|かようび}である。{貸|か}し{出|だ}しと{複写|ふくしゃ}は、{何時|なんじ}まで{可能|かのう}か。",
      arti: "Kai-san datang ke Perpustakaan Fakultas Sastra Universitas Akikawa karena perlu meminjam dan memfotokopi bahan untuk penelitian. Ia sudah punya kartu perpustakaan. Hari ini hari Selasa dalam masa perkuliahan. Sampai pukul berapa peminjaman dan fotokopi bisa dilakukan?",
      optYomi: [
        "{貸|か}し{出|だ}しは18{時|じ}の15{分|ふん}{前|まえ}まで、{複写|ふくしゃ}は18{時|じ}まで{可能|かのう}である。",
        "{貸|か}し{出|だ}しは21{時|じ}の15{分|ふん}{前|まえ}まで、{複写|ふくしゃ}は21{時|じ}まで{可能|かのう}である。",
        "{貸|か}し{出|だ}しは21{時|じ}の15{分|ふん}{前|まえ}まで、{複写|ふくしゃ}は21{時|じ}の10{分|ぷん}{前|まえ}まで{可能|かのう}である。",
        "{貸|か}し{出|だ}しは21{時|じ}の30{分|ぷん}{前|まえ}まで、{複写|ふくしゃ}は21{時|じ}の10{分|ぷん}{前|まえ}まで{可能|かのう}である。",
      ],
      optArti: [
        "Peminjaman sampai 15 menit sebelum pukul 18, fotokopi sampai pukul 18.",
        "Peminjaman sampai 15 menit sebelum pukul 21, fotokopi sampai pukul 21.",
        "Peminjaman sampai 15 menit sebelum pukul 21, fotokopi sampai 10 menit sebelum pukul 21.",
        "Peminjaman sampai 30 menit sebelum pukul 21, fotokopi sampai 10 menit sebelum pukul 21.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：人には会いに行こう ──
    "7": {
      yomi: `{以下|いか}は、{医師|いし}が{脳|のう}と{心|こころ}の{健康|けんこう}について{書|か}いた{文章|ぶんしょう}である。

{人|ひと}には{会|あ}いに{行|い}こうというと、{当|あ}たり{前|まえ}だと{思|おも}うでしょう。わざわざ{人|ひと}には{会|あ}いに{行|い}こうとしたのは、{電話|でんわ}や{手紙|てがみ}（もしくはメール）ですませるのではなく、{会|あ}うことに{意味|いみ}があるからです。

{会|あ}うのは、コミュニケーションとしてきわめて{重要|じゅうよう}です。つまり、コミュニケーションは{自分|じぶん}の{持|も}っている{情報|じょうほう}を{伝|つた}えるだけでなく、{相手|あいて}との{共感|きょうかん}がありますが、{自分|じぶん}{自身|じしん}の{気|き}づき、{相手|あいて}の{気|き}づきにもつながる{場合|ばあい}もあります。{会|あ}って[41]、{相手|あいて}も{変|か}わり、{自分|じぶん}も{変|か}わる{可能性|かのうせい}があるということです。コミュニケーションではお{互|たが}いにわかりあう、つまり{共感|きょうかん}がたいへん{重要|じゅうよう}です。{相手|あいて}の{身|み}になって{何|なに}かを{感|かん}じる、それは{相手|あいて}の{感情|かんじょう}かもしれないし、{痛|いた}みかもしれません。こうした{共感|きょうかん}こそ、{人間|にんげん}のコミュニケーションです。

{会|あ}わなくても{電話|でんわ}や{手紙|てがみ}（メール）でも、こうした{共感|きょうかん}は{生|う}まれますが、{相手|あいて}の{身|み}になることができるかというとむずかしいでしょう。やはり{実際|じっさい}に[42]{本当|ほんとう}の{共感|きょうかん}は{生|う}まれると{思|おも}います。

{脳|のう}にとっても、{刺激|しげき}の{度合|どあ}いが{違|ちが}います。{初恋|はつこい}の{人|ひと}とデートをしたときのことを[43]。{胸|むね}がどきどきして、たいへん{緊張|きんちょう}したでしょう。{初恋|はつこい}の{人|ひと}でなくても、{好|す}きな{人|ひと}に{会|あ}えば{脳|のう}は{活性化|かっせいか}し、ときめき{状態|じょうたい}を{維持|いじ}しますし、{反対|はんたい}に{嫌|きら}いな{人|ひと}に{会|あ}うとそれなりの{負|ふ}の{感情|かんじょう}が{生|う}まれてきます。{感情|かんじょう}の{流|なが}れが{生|う}まれ、{共感|きょうかん}も{発生|はっせい}します。{当然|とうぜん}、{脳|のう}も{喜|よろこ}びにあふれるでしょうし、{反対|はんたい}に{嫌悪|けんお}の{情|じょう}が{流|なが}れることもあるでしょう。それだけ{活性化|かっせいか}される[44]。

やはり{人|ひと}には{会|あ}いに{行|い}きましょう。ときめきを{求|もと}めて。`,
      arti: `Berikut ini adalah tulisan seorang dokter tentang kesehatan otak dan jiwa.

Kalau saya bilang "temuilah orang", Anda mungkin berpikir itu hal yang biasa. Saya sengaja mengatakan "temuilah orang" karena bertemu itu sendiri punya makna, bukan sekadar diselesaikan lewat telepon atau surat (atau surel).

Bertemu sangatlah penting sebagai komunikasi. Artinya, komunikasi bukan hanya menyampaikan informasi yang kita miliki; ada empati dengan lawan bicara, dan kadang juga berujung pada kesadaran baru bagi diri sendiri maupun lawan bicara. [41] setelah bertemu, ada kemungkinan lawan bicara berubah dan diri kita pun berubah. Dalam komunikasi, saling memahami, yaitu empati, sangatlah penting. Merasakan sesuatu dengan menempatkan diri di posisi orang lain — itu bisa berupa perasaannya, bisa juga rasa sakitnya. Empati semacam inilah komunikasi manusia yang sesungguhnya.

Tanpa bertemu pun, lewat telepon atau surat (surel), empati seperti itu memang bisa muncul, tetapi apakah kita bisa benar-benar menempatkan diri di posisi orang lain, rasanya sulit. Saya pikir, memang [42] secara langsung, barulah empati yang sejati lahir.

Bagi otak pun, kadar rangsangannya berbeda. [43] saat Anda berkencan dengan cinta pertama Anda. Jantung berdebar-debar dan Anda sangat gugup, bukan? Meski bukan cinta pertama, bertemu orang yang disukai membuat otak aktif dan mempertahankan keadaan berdebar-debar; sebaliknya, bertemu orang yang tidak disukai memunculkan perasaan negatif tertentu. Arus perasaan muncul, empati pun timbul. Tentu saja otak akan dipenuhi kegembiraan, dan sebaliknya bisa juga dialiri rasa tidak suka. Sebegitu aktifnya otak dirangsang — [44].

Jadi, temuilah orang. Demi mencari debaran hati.`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `「{練習|れんしゅう}ではできていなかったのに、{試合|しあい}では{技|わざ}を{成功|せいこう}させられた」などという{場合|ばあい}に「すごいね」とほめられると、「{私|わたし}は{本番|ほんばん}に{強|つよ}いから、{練習|れんしゅう}はそこそこにして、{本番|ほんばん}で{勝負|しょうぶ}をかければいい」と{思|おも}ってしまいがちです。
{本番|ほんばん}に{強|つよ}いのは{悪|わる}いことではありませんが、{練習|れんしゅう}でしっかりできていないことを「{本番|ほんばん}になればきっとできるだろう」と{考|かんが}えるのは、{甘|あま}いと{言|い}わざるをえません。そのようなスタンスでは、トップクラスの{結果|けっか}を{出|だ}すことはとうていできないでしょう。
{真|しん}の{実力|じつりょく}をつけるには、やはり{練習|れんしゅう}でも{常|つね}に{全力|ぜんりょく}{投球|とうきゅう}する{姿勢|しせい}が{必要|ひつよう}です。`,
      arti: `Ketika dipuji "hebat ya" dalam situasi seperti "saat latihan tidak bisa, tetapi di pertandingan berhasil melakukan tekniknya", kita cenderung berpikir, "Saya kuat di saat penentuan, jadi latihan secukupnya saja, lalu bertaruh di pertandingan sungguhan."
Kuat di saat penentuan memang bukan hal buruk, tetapi menganggap hal yang belum dikuasai saat latihan "pasti bisa nanti saat pertandingan" mau tak mau harus dikatakan naif. Dengan sikap seperti itu, hasil kelas atas sama sekali tidak akan bisa diraih.
Untuk membangun kemampuan yang sejati, tetap diperlukan sikap untuk selalu mengerahkan seluruh tenaga, bahkan saat latihan.`,
    },
    "8-2": {
      yomi: `{感情|かんじょう}とは、{単純|たんじゅん}な{生理的|せいりてき}な{反応|はんのう}のことではありません。{電車|でんしゃ}のなかで{足|あし}を{踏|ふ}まれても、{踏|ふ}んだ{相手|あいて}の{自分|じぶん}への{対応|たいおう}によって、{怒|いか}りになったりならなかったりします。{自分|じぶん}が{痛|いた}い{思|おも}いをしても、ときに{相手|あいて}の{方|ほう}に{同情|どうじょう}しさえします。{人|ひと}が{感|かん}じる{怒|いか}りとは、{自分|じぶん}が{傷|きず}つけられたという{実感|じっかん}に{加|くわ}えて、その{傷|きず}つける{振|ふ}る{舞|ま}いが{不当|ふとう}であるという{判断|はんだん}も{含|ふく}まれているのです。このように{感情|かんじょう}は、じつは{価値|かち}{判断|はんだん}に{基|もと}づいているのであり、すでにそこには{思考|しこう}があるのです。

（{注|ちゅう}）ときに：{時|とき}には`,
      arti: `Emosi bukanlah sekadar reaksi fisiologis yang sederhana. Meski kaki kita terinjak di dalam kereta, tergantung bagaimana sikap orang yang menginjak terhadap kita, kita bisa marah atau tidak. Meski kita sendiri yang kesakitan, terkadang (catatan) kita bahkan bersimpati kepada orang itu. Kemarahan yang dirasakan seseorang tidak hanya berisi perasaan bahwa dirinya disakiti, tetapi juga penilaian bahwa perbuatan yang menyakiti itu tidak pantas. Dengan demikian, emosi sebenarnya didasarkan pada penilaian nilai, dan di sana sudah ada proses berpikir.

(Catatan) ときに: terkadang`,
    },
    "8-3": {
      yomi: `{科学者|かがくしゃ}は、{一般|いっぱん}に{疑|うたぐ}り{深|ぶか}い。{原因|げんいん}と{結果|けっか}が{単純|たんじゅん}に{結|むす}ばれる{場合|ばあい}はそうでもないが、{複雑|ふくざつ}な{経路|けいろ}でつながっている{場合|ばあい}には、{論理|ろんり}の{道筋|みちすじ}がちゃんとたどれない{限|かぎ}り{疑|うたが}い{続|つづ}けるのが{通例|つうれい}（{注|ちゅう}）である。だから、{新聞|しんぶん}のインタビューなどで{意外|いがい}な{結果|けっか}や{思|おも}いがけない{現象|げんしょう}について{意見|いけん}を{聞|き}かれたとき、{必|かなら}ず「もしそれが{事実|じじつ}とすれば」という{前置|まえお}きをしてから{推測|すいそく}を{述|の}べることになっている。より{重大|じゅうだい}な{結果|けっか}を{主張|しゅちょう}した{論|ろん}に{対|たい}しては、より{確実|かくじつ}でより{強固|きょうこ}な{証拠|しょうこ}を{要求|ようきゅう}するのも、その{理由|りゆう}からである。

（{注|ちゅう}）{通例|つうれい}：ここでは、{一般的|いっぱんてき}`,
      arti: `Ilmuwan pada umumnya suka curiga. Jika sebab dan akibat terhubung secara sederhana, tidak terlalu, tetapi jika terhubung lewat jalur yang rumit, lazimnya (catatan) mereka akan terus meragukan selama alur logikanya tidak bisa ditelusuri dengan jelas. Karena itu, ketika dimintai pendapat dalam wawancara koran atau semacamnya tentang hasil yang tak terduga atau fenomena yang tak disangka, mereka pasti memberi pengantar "seandainya itu fakta" sebelum menyampaikan dugaan. Alasan yang sama pula yang membuat mereka menuntut bukti yang lebih pasti dan lebih kuat terhadap argumen yang mengklaim hasil yang lebih penting.

(Catatan) 通例: di sini, hal yang umum`,
    },
    "8-4": {
      yomi: `{人間|にんげん}は{一人|ひとり}では{生|い}きていけない。{誰|だれ}かと{依存|いぞん}し{合|あ}っている。かつては、{自立|じりつ}ということを{単純|たんじゅん}に{考|かんが}え、{依存|いぞん}を{少|すく}なくするほど{自立|じりつ}すると{考|かんが}えられたこともあった。しかし、{現在|げんざい}の{心理学|しんりがく}はそれほど{単純|たんじゅん}に{自立|じりつ}と{依存|いぞん}を{一直線|いっちょくせん}{上|じょう}にある{対立|たいりつ}{概念|がいねん}としては{見|み}ていない。{適切|てきせつ}に{依存|いぞん}し、そのことについてよく{自覚|じかく}している{者|もの}こそ{自立|じりつ}しているのだ、と{考|かんが}える。{依存|いぞん}をなくそうと{努力|どりょく}するあまり、{人間|にんげん}は{孤立|こりつ}してしまい、そのために{生|しょう}じる{障害|しょうがい}によって、かえって{自立性|じりつせい}を{奪|うば}われてしまう。`,
      arti: `Manusia tidak bisa hidup sendirian. Kita saling bergantung dengan seseorang. Dulu, kemandirian dipahami secara sederhana, sehingga pernah dianggap bahwa makin sedikit ketergantungan, makin mandiri seseorang. Namun, psikologi masa kini tidak lagi memandang kemandirian dan ketergantungan secara sesederhana itu, sebagai dua konsep yang berlawanan di satu garis lurus. Orang yang bergantung secara tepat dan sangat menyadari hal itulah yang dianggap mandiri. Karena terlalu berusaha menghilangkan ketergantungan, manusia malah terisolasi, dan akibat hambatan yang muncul karenanya, kemandiriannya justru terenggut.`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{私|わたし}は、{何|なに}を{表現|ひょうげん}したくて{漫画|まんが}を{描|か}いているのか？ マンガ{家|か}を{目指|めざ}したころから{考|かんが}えていた。（{中略|ちゅうりゃく}）

{古代|こだい}から、{似|に}た{物語|ものがたり}はたくさんある。ドラマ（{注|ちゅう}1）{作|づく}りで{大事|だいじ}なのは、{新|あたら}しい{筋立|すじだ}て（{注|ちゅう}2）やエピソードを{無理|むり}やりひねり{出|だ}すことより、{作者|さくしゃ}{独自|どくじ}の{考|かんが}え{方|かた}を、ドラマにのせて{表現|ひょうげん}することなのだろう。{十代|じゅうだい}の{私|わたし}は、そう{気|き}づいた。しかし「{自分|じぶん}の{考|かんが}え」をどうやって{確立|かくりつ}するのか？ {自分|じぶん}の{考|かんが}えのつもりでも、{人|ひと}の{意見|いけん}に{引|ひ}きずられているかもしれない。

そこで{新聞|しんぶん}を{使|つか}った「{修業|しゅぎょう}」を{思|おも}いついた。{毎朝|まいあさ}、{新聞|しんぶん}を{適当|てきとう}に{開|ひら}き、{目|め}をつぶって{紙面|しめん}を{指|さ}す。そして{指先|ゆびさき}にふれたところに{載|の}っていた{記事|きじ}の{中|なか}の{人物|じんぶつ}になりきって「この{後|あと}どうすればこの{問題|もんだい}が{解決|かいけつ}するか？ どう{振舞|ふるま}うのがベストなのか？」を{毎日|まいにち}、{真剣|しんけん}に{想像|そうぞう}した。

これをくり{返|かえ}すうち、{自分|じぶん}なりの{考|かんが}え{方|かた}をきちんと{言葉|ことば}で{表現|ひょうげん}する{大切|たいせつ}さが{分|わ}かってきた。そして{自分|じぶん}が{何|なに}を{表現|ひょうげん}したいのかも、おぼろげ（{注|ちゅう}3）ながら{見|み}えてきた。

{突|つ}き{詰|つ}めると、{私|わたし}は「ヒロインが{何|なに}を{考|かんが}えているか」を{描|えが}きたかったのだ。

それまでの{少女|しょうじょ}{漫画|まんが}には、{主人公|しゅじんこう}である{少女|しょうじょ}が{能動的|のうどうてき}に{動|うご}く{物語|ものがたり}が{少|すく}ないように{感|かん}じていた。それよりヒロインの{喜怒哀楽|きどあいらく}、{感情|かんじょう}が{描|えが}かれることが{多|おお}かった。でも{私|わたし}は、{自|みずか}ら{考|かんが}え{決心|けっしん}して{生|い}き{方|かた}を{選|えら}ぶ{少女|しょうじょ}を{描|えが}きたかった。

そのため{私|わたし}の{作品|さくひん}では、{何|なに}かを{決意|けつい}するまでのヒロインの{試行|しこう}{錯誤|さくご}が{長|なが}い。{第一|だいいち}{読者|どくしゃ}である{担当|たんとう}{編集者|へんしゅうしゃ}には「{理屈|りくつ}っぽい」と{言|い}われ{続|つづ}けている。「ヒロインが{泣|な}く{時|とき}に{読者|どくしゃ}が{共感|きょうかん}してくれるんだ」とアドバイスされても、{泣|な}く{前|まえ}に{考|かんが}える{女性|じょせい}を{描|えが}き{続|つづ}けた。

（{注|ちゅう}1）ドラマ：ここでは、ストーリー
（{注|ちゅう}2）{筋立|すじだ}て：{話|はなし}の{組|く}み{立|た}て
（{注|ちゅう}3）おぼろげながら：ぼんやりではあるが`,
      arti: `Apa yang ingin saya ungkapkan sampai saya menggambar manga? Saya sudah memikirkannya sejak bercita-cita menjadi mangaka. (dihilangkan)

Sejak zaman kuno, sudah ada banyak kisah yang mirip. Yang penting dalam membuat drama (catatan 1) mungkin bukanlah memaksakan diri memeras alur (catatan 2) atau episode baru, melainkan mengungkapkan cara berpikir khas pengarang dengan menumpangkannya pada drama. Saya menyadari hal itu di usia belasan. Namun, bagaimana cara membangun "pemikiran sendiri"? Meski merasa itu pemikiran sendiri, bisa jadi sebenarnya kita terseret oleh pendapat orang lain.

Maka saya terpikir "latihan" menggunakan koran. Setiap pagi saya membuka koran secara acak, memejamkan mata, lalu menunjuk halamannya. Kemudian saya menjiwai tokoh dalam artikel yang tersentuh ujung jari, dan setiap hari dengan sungguh-sungguh membayangkan, "Setelah ini, bagaimana caranya agar masalah ini terselesaikan? Bertindak seperti apa yang terbaik?"

Selama mengulang-ulang hal ini, saya mulai memahami pentingnya mengungkapkan cara berpikir sendiri dengan kata-kata secara jelas. Dan apa yang ingin saya ungkapkan pun mulai terlihat, meski samar-samar (catatan 3).

Kalau ditelusuri sampai ke dasarnya, saya ingin menggambarkan "apa yang dipikirkan sang heroine".

Saya merasa, manga shōjo sampai saat itu jarang memuat kisah di mana gadis tokoh utamanya bergerak secara aktif. Yang lebih sering digambarkan adalah suka-duka dan emosi heroine. Tetapi saya ingin menggambarkan gadis yang berpikir sendiri, bertekad, lalu memilih jalan hidupnya.

Karena itu, dalam karya saya, proses coba-coba sang heroine sampai ia memutuskan sesuatu berlangsung panjang. Editor yang menangani saya, yang juga pembaca pertama saya, terus mengatakan karya saya "terlalu banyak berlogika". Meski dinasihati, "Pembaca akan berempati saat heroine menangis", saya terus menggambarkan perempuan yang berpikir sebelum menangis.

(Catatan 1) ドラマ: di sini, cerita
(Catatan 2) 筋立て: susunan cerita, alur
(Catatan 3) おぼろげながら: meski samar-samar`,
    },
    "9-2": {
      yomi: `{以下|いか}は、{生物|せいぶつ}の{進化|しんか}について{書|か}かれた{文章|ぶんしょう}である。

{世界中|せかいじゅう}にさまざまな{形|かたち}の{角|つの}を{持|も}つカブトムシ（{注|ちゅう}1）がいますが、その{中|なか}のどれかが{生|い}き{残|のこ}りやすいということはありません。カブトムシとしての{条件|じょうけん}さえ{整|ととの}っていれば、{角|つの}の{形|かたち}はどれでもいい。たまたま{突然|とつぜん}{変異|へんい}（{注|ちゅう}2）でいろいろな{角|つの}のカブトムシが{生|う}まれ、そこには{環境|かんきょう}{圧力|あつりょく}がかからなかったので、どれも{生|い}き{残|のこ}っただけの{話|はなし}です（もちろん、たとえば{移動|いどう}が{困難|こんなん}なほど{巨大|きょだい}な{角|つの}など、{生|い}きるのに{邪魔|じゃま}になる{形質|けいしつ}の{個体|こたい}は{淘汰|とうた}（{注|ちゅう}3）されたでしょう）。

こうした{形質|けいしつ}は、{進化|しんか}のプロセスにおける「{遊|あそ}び」の{部分|ぶぶん}だといえます。たとえば{自動車|じどうしゃ}なら、{四角|しかく}い{車体|しゃたい}にタイヤが{四|よっ}つあり、{中|なか}にはエンジンやハンドルがあるといった{基本形|きほんけい}は、どのメーカーでも{変|か}わりません。しかしそれ{以外|いがい}の{細|こま}かい{部分|ぶぶん}――ヘッドライトの{形|かたち}やシートの{色|いろ}や{材質|ざいしつ}など――は、{自動車|じどうしゃ}としての{本質|ほんしつ}にあまり{関係|かんけい}がないので、{車種|しゃしゅ}やメーカーによってかなり{多様性|たようせい}がある。デザイン{的|てき}に{遊|あそ}べるのです。

{生物|せいぶつ}の{場合|ばあい}も、デザイン{的|てき}な{遊|あそ}びを{入|い}れる{余地|よち}がなく、{多|おお}くの{種|しゅ}に{共通|きょうつう}する{基本形|きほんけい}はあります。{生|い}きている{環境|かんきょう}が{同|おな}じなら、{体型|たいけい}が{似|に}てくるのは{当然|とうぜん}の{成|な}り{行|ゆ}きで、これは「{収斂|しゅうれん}{進化|しんか}」と{呼|よ}ばれています。たとえば{哺乳類|ほにゅうるい}であるイルカの{体型|たいけい}が{魚類|ぎょるい}と{似|に}ているのは{収斂|しゅうれん}{進化|しんか}の{結果|けっか}のひとつです。

（{中略|ちゅうりゃく}）

{突然|とつぜん}{変異|へんい}は{生物|せいぶつ}の{多様性|たようせい}を{拡大|かくだい}しますが、{環境|かんきょう}{圧力|あつりょく}にはその{多様性|たようせい}を{絞|しぼ}り{込|こ}む{役割|やくわり}があるといえるでしょう。{生物|せいぶつ}の{進化|しんか}には、その{両面|りょうめん}があるのです。

（{注|ちゅう}1）カブトムシ：{昆虫|こんちゅう}の{一種|いっしゅ}で、{雄|おす}は{角|つの}を{持|も}つ
（{注|ちゅう}2）{突然|とつぜん}{変異|へんい}：{親|おや}にはない{生物的|せいぶつてき}{特徴|とくちょう}が{子|こ}に{現|あらわ}れること
（{注|ちゅう}3）{淘汰|とうた}される：ここでは、{滅|ほろ}びる`,
      arti: `Berikut ini adalah tulisan tentang evolusi makhluk hidup.

Di seluruh dunia ada kumbang badak (catatan 1) dengan tanduk berbagai bentuk, tetapi tidak ada satu pun di antaranya yang lebih mudah bertahan hidup. Asalkan syarat sebagai kumbang badak terpenuhi, bentuk tanduk apa pun boleh. Kebetulan saja lahir kumbang badak dengan berbagai tanduk karena mutasi (catatan 2), dan karena tidak ada tekanan lingkungan di sana, semuanya bertahan hidup — hanya itu ceritanya (tentu saja, individu dengan sifat yang mengganggu kehidupan, misalnya tanduk yang begitu besar sampai sulit bergerak, mungkin tersingkir (catatan 3)).

Sifat-sifat seperti ini bisa dikatakan bagian "main-main" dalam proses evolusi. Misalnya mobil: bentuk dasar seperti bodi persegi dengan empat roda, di dalamnya ada mesin dan setir, tidak berbeda di produsen mana pun. Namun bagian-bagian kecil lainnya — bentuk lampu depan, warna dan bahan jok, dan sebagainya — tidak terlalu berkaitan dengan esensi sebuah mobil, sehingga cukup beragam tergantung jenis mobil dan produsennya. Di situ desainnya bisa "bermain".

Pada makhluk hidup pun, ada bentuk dasar yang sama pada banyak spesies, yang tidak menyisakan ruang untuk "main-main" desain. Jika lingkungan hidupnya sama, wajar saja bentuk tubuhnya menjadi mirip; ini disebut "evolusi konvergen". Misalnya, bentuk tubuh lumba-lumba yang merupakan mamalia mirip dengan ikan adalah salah satu hasil evolusi konvergen.

(dihilangkan)

Mutasi memperluas keragaman makhluk hidup, sedangkan tekanan lingkungan bisa dikatakan berperan mempersempit keragaman itu. Evolusi makhluk hidup memiliki kedua sisi tersebut.

(Catatan 1) カブトムシ: sejenis serangga; yang jantan bertanduk
(Catatan 2) 突然変異: munculnya ciri biologis pada anak yang tidak dimiliki induknya
(Catatan 3) 淘汰される: di sini, punah`,
    },
    "9-3": {
      yomi: `{不正|ふせい}に{対|たい}して、{腹|はら}の{底|そこ}からふつふつと{怒|いか}りが{湧|わ}き{上|あ}がってくるのは、{人間|にんげん}にとってとても{大切|たいせつ}なことです。そして、それが{大|おお}きな{共感|きょうかん}となって{社会|しゃかい}{全体|ぜんたい}に{広|ひろ}がるとき、{社会|しゃかい}{変革|へんかく}のうねり（{注|ちゅう}）が{訪|おとず}れます。

しかし{同時|どうじ}に{私|わたし}たちは、「{正|ただ}しい{怒|いか}り」の{罠|わな}についても、きちんと{知|し}っておかなくてはなりません。「{正|ただ}しい{怒|いか}り」で{胸|むね}がいっぱいになると、「{怒|おこ}っている{私|わたし}こそが{正|ただ}しいのだ」というふうに、{私|わたし}を{正義|せいぎ}の{側|がわ}に{置|お}いてしまいがちになります。すると、{私|わたし}の{正義|せいぎ}を{邪魔|じゃま}するものは「{悪|あく}」である、という{思考|しこう}{回路|かいろ}ができあがります。

それがさらにもう{一歩|いっぽ}{進|すす}むと、「{悪|あく}」である{彼|かれ}らに{正義|せいぎ}の{裁|さば}きを{加|くわ}えて{社会|しゃかい}を{良|よ}くするためならば、こっちだって{少々|しょうしょう}の「{小|ちい}さな{悪|あく}」を{行|おこな}ってもかまわないはずだ、となってしまうことすらあるのです。

{歴史|れきし}を{振|ふ}り{返|かえ}ってみれば、このような{行|い}き{過|す}ぎが{何度|なんど}も{繰|く}り{返|かえ}されてきました。そして「{正|ただ}しい{怒|いか}り」で{胸|むね}がいっぱいだと、なかなかそのような{罠|わな}の{存在|そんざい}に{気|き}づけません。

すなわち、ほんとうの{意味|いみ}で「{正|ただ}しく{怒|おこ}る」とは、「{不正|ふせい}は{許|ゆる}せない！」という{怒|いか}りによって{動機|どうき}づけられた{自分|じぶん}の{行為|こうい}のひとつひとつが、{客観的|きゃっかんてき}に{見|み}ても「{正|ただ}しい」と{言|い}えるのかどうかを、たえず{冷静|れいせい}に{自己|じこ}{点検|てんけん}しながら、その{怒|いか}りのエネルギーを{上手|じょうず}に{正義|せいぎ}へと{結|むす}びつけていくことではないかと{私|わたし}は{思|おも}うのです。それができてはじめて、{私|わたし}たちはより{良|よ}い{社会|しゃかい}を{作|つく}っていけるのです。

（{注|ちゅう}）うねり：ここでは、{大|おお}きな{動|うご}き`,
      arti: `Kemarahan yang bergolak dari lubuk hati terhadap ketidakadilan adalah hal yang sangat penting bagi manusia. Dan ketika kemarahan itu menjadi empati besar yang menyebar ke seluruh masyarakat, datanglah gelombang (catatan) perubahan sosial.

Namun pada saat yang sama, kita juga harus benar-benar memahami jebakan "kemarahan yang benar". Jika dada dipenuhi "kemarahan yang benar", kita cenderung menempatkan diri di pihak keadilan, seperti "sayalah yang benar karena saya marah". Lalu terbentuklah pola pikir bahwa apa pun yang menghalangi keadilan saya adalah "kejahatan".

Jika itu maju selangkah lagi, bisa-bisa sampai muncul pikiran: demi menjatuhkan hukuman keadilan kepada mereka yang "jahat" dan memperbaiki masyarakat, tentu tidak apa-apa kalau kita pun melakukan sedikit "kejahatan kecil".

Jika menengok sejarah, tindakan yang kebablasan seperti ini sudah berkali-kali terulang. Dan jika dada dipenuhi "kemarahan yang benar", kita sulit menyadari adanya jebakan seperti itu.

Artinya, menurut saya "marah dengan benar" dalam arti yang sesungguhnya adalah terus-menerus memeriksa diri dengan tenang apakah setiap tindakan kita yang didorong oleh kemarahan "ketidakadilan tidak bisa dibiarkan!" itu memang bisa disebut "benar" bila dilihat secara objektif, sambil dengan cermat mengarahkan energi kemarahan itu kepada keadilan. Hanya jika itu bisa dilakukan, barulah kita bisa membangun masyarakat yang lebih baik.

(Catatan) うねり: di sini, gerakan besar`,
    },
    "9-4": {
      yomi: `{経済|けいざい}{学者|がくしゃ}のケインズは、「{本|ほん}を{読|よ}むときは{好意的|こういてき}に{読|よ}まなければならない」と{発言|はつげん}したことがあるが、それは、ケインズの{論敵|ろんてき}（{注|ちゅう}1）だったある{経済|けいざい}{学者|がくしゃ}（スージーだったと{記憶|きおく}している）が、{最初|さいしょ}から{悪意|あくい}に{基|もと}づく{批判的|ひはんてき}な{態度|たいど}でケインズの{著書|ちょしょ}を{読|よ}むために、{肝心|かんじん}の{論点|ろんてん}を{一向|いっこう}に{理解|りかい}しないこと（できないこと）を{嘆|なげ}いての{発言|はつげん}であった。

つまり、{読|よ}む{前|まえ}から{批判的|ひはんてき}な{姿勢|しせい}を{持|も}っていると、{批判|ひはん}という{意図的|いとてき}フィルターの{介在|かいざい}によって、{他者|たしゃ}のつくった{知的|ちてき}{生産物|せいさんぶつ}との{関|かか}わり{方|かた}が、{出発点|しゅっぱつてん}から{歪|ゆが}んでしまうのである。{高名|こうめい}な{著者|ちょしゃ}になんとかして{批判|ひはん}の{一矢|いっし}を{浴|あ}びせてやろうと{意気込|いきご}んでいる{人|ひと}が{書|か}いた{書評|しょひょう}などを{読|よ}むと、{浅薄|せんぱく}な（{注|ちゅう}2）{揚|あ}げ{足|あし}{取|と}り（{注|ちゅう}3）に{終始|しゅうし}している{場合|ばあい}が{実|じつ}に{多|おお}いのは、そのせいである。そんな{読|よ}み{方|かた}をしていては、「{知|ち}」が{血肉化|けつにくか}する（{注|ちゅう}4）ことなど{到底|とうてい}ありえない。やはり{最初|さいしょ}は、{好意的|こういてき}な{読|よ}みからスタートした{方|ほう}が{得|とく}だろう。

{好意的|こういてき}な{読|よ}み{方|かた}の{先|さき}には、{没入|ぼつにゅう}（{注|ちゅう}5）して{読|よ}むという{世界|せかい}があると{私|わたし}は{考|かんが}えている。{好意|こうい}も{批判|ひはん}もなく、ただ{夢中|むちゅう}になって{読|よ}む。{徹底的|てっていてき}に{読|よ}む。そうやって{読|よ}んだものこそ、{無意識|むいしき}のうちに{内在化|ないざいか}（{注|ちゅう}6）する。

（{中略|ちゅうりゃく}）

ただし、{私|わたし}は{批判的|ひはんてき}な{読|よ}み{方|かた}が{不要|ふよう}だと{言|い}っているのではない。{没入|ぼつにゅう}しないと{深|ふか}く{読|よ}めないと{言|い}う{一方|いっぽう}で、しかし、{批判的|ひはんてき}に{読|よ}まなければ、{読|よ}みが{鋭|するど}くならないとも{実感|じっかん}している。

では、どうすれば{良|よ}いのだろうか。バランスを{取|と}るにかぎる、と{物知|ものし}り{顔|がお}（{注|ちゅう}7）で{言|い}う{人|ひと}もいるかもしれない。しかし、ここで{必要|ひつよう}なのは、{両者|りょうしゃ}のバランスを{取|と}ろうとすることではない。そうではなくて、このふたつの{読|よ}み{方|かた}を{意識的|いしきてき}に{往来|おうらい}することなのだ。

（{注|ちゅう}1）{論敵|ろんてき}：{論争|ろんそう}の{相手|あいて}
（{注|ちゅう}2）{浅薄|せんぱく}な：{思慮|しりょ}が{足|た}りない
（{注|ちゅう}3）{揚|あ}げ{足|あし}{取|と}り：{重要|じゅうよう}でない{部分|ぶぶん}を{取|と}り{上|あ}げて{批判|ひはん}すること
（{注|ちゅう}4）{血肉化|けつにくか}する：ここでは、{自分|じぶん}のものになる
（{注|ちゅう}5）{没入|ぼつにゅう}する：{熱中|ねっちゅう}する
（{注|ちゅう}6）{内在化|ないざいか}する：ここでは、{身|み}につく
（{注|ちゅう}7）{物知|ものし}り{顔|がお}：よく{知|し}っているかのような{顔|かお}`,
      arti: `Ekonom Keynes pernah berkata, "Saat membaca buku, kita harus membacanya dengan sikap bersahabat." Ucapan itu adalah keluhannya karena seorang ekonom yang menjadi lawan debatnya (catatan 1) (seingat saya Suzy) membaca buku-buku Keynes sejak awal dengan sikap kritis yang dilandasi niat buruk, sehingga sama sekali tidak memahami (tidak mampu memahami) pokok persoalannya yang terpenting.

Artinya, jika kita sudah bersikap kritis sebelum membaca, karena adanya saringan yang disengaja berupa kritik, cara kita berhubungan dengan karya intelektual orang lain sudah melenceng sejak titik awal. Itulah sebabnya resensi buku yang ditulis orang yang bersemangat ingin melontarkan satu serangan kritik kepada penulis ternama sangat sering hanya berisi mencari-cari kesalahan (catatan 3) yang dangkal (catatan 2). Dengan cara membaca seperti itu, mustahil "pengetahuan" bisa mendarah daging (catatan 4). Jadi, pada awalnya lebih menguntungkan memulai dari pembacaan yang bersahabat.

Saya berpendapat, di ujung cara membaca yang bersahabat ada dunia membaca dengan larut (catatan 5). Tanpa rasa suka maupun kritik, hanya membaca dengan tenggelam di dalamnya. Membaca secara tuntas. Justru apa yang dibaca dengan cara itulah yang tanpa sadar akan terinternalisasi (catatan 6).

(dihilangkan)

Namun, saya tidak mengatakan bahwa cara membaca kritis itu tidak perlu. Di satu sisi saya bilang tanpa larut kita tidak bisa membaca secara mendalam, tetapi saya juga benar-benar merasakan bahwa tanpa membaca secara kritis, pembacaan kita tidak akan tajam.

Lalu, sebaiknya bagaimana? Mungkin ada yang berkata dengan lagak sok tahu (catatan 7), "Yang terbaik adalah menyeimbangkannya." Namun yang diperlukan di sini bukanlah berusaha menyeimbangkan keduanya. Melainkan, bolak-balik secara sadar di antara kedua cara membaca ini.

(Catatan 1) 論敵: lawan debat
(Catatan 2) 浅薄な: kurang pertimbangan, dangkal
(Catatan 3) 揚げ足取り: mengkritik dengan mengangkat bagian yang tidak penting
(Catatan 4) 血肉化する: di sini, menjadi milik diri sendiri
(Catatan 5) 没入する: tenggelam, asyik
(Catatan 6) 内在化する: di sini, melekat pada diri
(Catatan 7) 物知り顔: raut wajah seolah tahu segalanya`,
    },

    // ── 問題10：数学の力 ──
    "10": {
      yomi: `{以下|いか}は、ある{数学者|すうがくしゃ}が{書|か}いた{文章|ぶんしょう}である。

{数学|すうがく}というものは、{解|と}き{方|かた}がわかってしまったあとで、{力|ちから}がつくことはない。{解|と}き{方|かた}を{身|み}につける{前|まえ}の、まだ{解|と}き{方|かた}のわからない{間|あいだ}だけが、{力|ちから}をつけるチャンスである。{解|と}けるようになるのは{同|おな}じでも、それまでのあり{方|かた}で、{力|ちから}が{身|み}につくかどうかが、きまってくる。

それに、おもしろいのも、{本当|ほんとう}は、まだ{解|と}けないで、いろいろと{考|かんが}えている{間|あいだ}である。{解|と}けなきゃつまらないようだが、それは{早|はや}く{解|と}こうとあせるからで、{楽|たの}しみは{解|と}けるまでのほうにある。{解|と}けるようになったあとは、むしろむなしい。だいたい、「{答|こた}えのわかっている{謎|なぞ}」なんて、{意味|いみ}がない。{解|と}き{方|かた}がわからないからこそ、{問題|もんだい}の{名|な}にあたいするのだ。

もちろん、まったく{手|て}がつかない（{注|ちゅう}1）のでは、おもしろくもないが、{案外|あんがい}に、{多少|たしょう}はわからないでも、うまく{頭|あたま}のなかに{飼|か}っておくと、そのうちに{馴|な}れてくれて、わかってきたりする。その、だんだん{少|すこ}しずつ、わかりかけというのも、オツな（{注|ちゅう}2）ものだ。そのためには、それを{飼|か}っておく、{頭|あたま}の{牧場|ぼくじょう}がゆたかでなければならない。{本当|ほんとう}のところは、{数学|すうがく}の{力|ちから}というのは、いろいろわかったことをためこむより、わからないのを{飼|か}っておける、その{牧場|ぼくじょう}のゆたかさのほうにあるのかもしれない。

とくに、{公式|こうしき}などをおぼえるのには、ぼくは{反対|はんたい}である。それは{簡単|かんたん}すぎて、{少|すこ}しもおもしろくないし、おぼえたものは{忘|わす}れるものだ。とくに、{急|いそ}いでおぼえたものは、{早|はや}く{忘|わす}れる。{同|おな}じおぼえるにしても、なるべくなら{時間|じかん}をかけたほうが、{長持|ながも}ちする。

（{中略|ちゅうりゃく}）

このごろは、テストでおどされる（{注|ちゅう}3）ことが{多|おお}いので、わかること、{解|と}けることを{急|いそ}ぐ{傾向|けいこう}にある。たしかに、テストなどでは、{時間|じかん}がかぎられているので、{急|いそ}ぐのも{多少|たしょう}は{仕方|しかた}がない。しかしながら、{時間|じかん}を{制限|せいげん}されたときに{急|いそ}いでできるためには、{時間|じかん}の{制限|せいげん}されていないときに、{時間|じかん}を{気|き}にしないでやっておいたほうがよい。テストで{急|いそ}ぐためには、テスト{以外|いがい}では{急|いそ}がないほうがよいのである。

どんなやり{方|かた}でも、わかって、{問題|もんだい}が{解|と}けるようになる、という{結果|けっか}は{同|おな}じかもしれない。しかし、ゆったりとやると、そのわかり{方|かた}にコク（{注|ちゅう}4）が{出|で}てくるものだ。そして、その{結果|けっか}に{達|たっ}するまでの{道筋|みちすじ}を{楽|たの}しむことで、{力|ちから}がつく。

{勉強|べんきょう}を{楽|たの}しむなんて、と{思|おも}うかもしれないが、それは{目的|もくてき}ばかり{見|み}てあせるからで、{楽|たの}しむ{気|き}になれば、なんだって{楽|たの}しめるものだ。

（{注|ちゅう}1）{手|て}がつかない：ここでは、できない
（{注|ちゅう}2）オツな：ここでは、おもしろい
（{注|ちゅう}3）おどされる：ここでは、{早|はや}く{問題|もんだい}を{解|と}かされる
（{注|ちゅう}4）コク：{深|ふか}み`,
      arti: `Berikut ini adalah tulisan seorang matematikawan.

Dalam matematika, kemampuan tidak akan bertambah setelah cara penyelesaiannya sudah diketahui. Hanya selama belum tahu cara menyelesaikannya, sebelum menguasainya, itulah kesempatan untuk membangun kemampuan. Meski hasil akhirnya sama-sama bisa menyelesaikan, apakah kemampuan itu melekat atau tidak ditentukan oleh bagaimana prosesnya sampai ke sana.

Lagi pula, yang menarik sebenarnya adalah saat belum bisa menyelesaikannya dan masih memikirkan berbagai hal. Kelihatannya kalau tidak bisa menyelesaikan itu membosankan, tetapi itu karena kita tergesa-gesa ingin cepat selesai; kesenangannya justru ada pada proses sampai bisa menyelesaikannya. Setelah bisa menyelesaikan, malah terasa hampa. Pada dasarnya, "teka-teki yang sudah diketahui jawabannya" itu tidak ada artinya. Justru karena cara penyelesaiannya belum diketahui, ia layak disebut soal.

Tentu saja, kalau sama sekali tidak bisa disentuh (catatan 1), tidak menarik juga. Namun, tak disangka, meski agak belum paham, kalau soal itu "dipelihara" dengan baik di dalam kepala, lama-kelamaan ia menjadi jinak dan kita mulai memahaminya. Proses mulai memahami sedikit demi sedikit itu juga menarik (catatan 2). Untuk itu, "padang penggembalaan" di kepala tempat memeliharanya harus luas dan subur. Sebenarnya, mungkin kemampuan matematika itu justru terletak pada suburnya padang penggembalaan yang mampu memelihara hal-hal yang belum dipahami, bukan pada menimbun banyak hal yang sudah dipahami.

Terutama, saya menentang menghafal rumus dan semacamnya. Itu terlalu mudah, sama sekali tidak menarik, dan yang dihafal pasti akan terlupa. Terutama, yang dihafal terburu-buru akan cepat terlupa. Kalaupun sama-sama menghafal, sebisa mungkin lebih lama awet jika diberi waktu.

(dihilangkan)

Belakangan ini, karena kita sering "ditakut-takuti" (catatan 3) dengan ujian, ada kecenderungan terburu-buru ingin paham dan bisa menyelesaikan. Memang, dalam ujian waktunya terbatas, jadi terburu-buru sedikit banyak tidak terhindarkan. Namun, agar bisa mengerjakan dengan cepat saat waktunya dibatasi, sebaiknya saat waktunya tidak dibatasi kita mengerjakan tanpa memedulikan waktu. Agar bisa cepat dalam ujian, sebaiknya tidak terburu-buru di luar ujian.

Dengan cara apa pun, hasil akhirnya — paham dan bisa menyelesaikan soal — mungkin sama. Namun, jika dikerjakan dengan santai, pemahaman itu akan memiliki kedalaman (catatan 4). Dan dengan menikmati jalan sampai mencapai hasil itulah kemampuan terbentuk.

Anda mungkin berpikir, "Masa belajar dinikmati?", tetapi itu karena kita hanya melihat tujuan dan jadi tergesa-gesa. Kalau sudah berniat menikmati, apa pun bisa dinikmati.

(Catatan 1) 手がつかない: di sini, tidak bisa (mengerjakan)
(Catatan 2) オツな: di sini, menarik
(Catatan 3) おどされる: di sini, dipaksa menyelesaikan soal dengan cepat
(Catatan 4) コク: kedalaman`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
まじめで{責任感|せきにんかん}が{強|つよ}く、{負|ま}けず{嫌|ぎら}いな{人|ひと}は「あきらめない」{傾向|けいこう}があります。「あきらめない」ことは、{基本的|きほんてき}にはもちろんいいことなのですが、しかし{一方|いっぽう}、あきらめたほうがよいことも、{実|じつ}はけっこうあるものです。

{一所懸命|いっしょけんめい}に{取|と}り{組|く}んでも、うまくいかない、{成果|せいか}が{出|で}ない、{充足感|じゅうそくかん}や{満足感|まんぞくかん}が{得|え}られない。そうした{場合|ばあい}は「あきらめる」というのも、{十分|じゅうぶん}よい{選択肢|せんたくし}になります。こうした{場合|ばあい}の「あきらめる」とは、「やめてしまう」ということです。

やめる{際|さい}には、「うまくいかなかった。やめてよかった」と{思|おも}うのがコツでしょうね。うまくいかなかったことを{悔|く}やみつつやめるのは、{避|さ}けたいものです。それでは、うまくいかなかったことが{尾|お}（{注|ちゅう}）を{引|ひ}いてしまいます。「うまくいかなくてよかった」と{思|おも}うくらいがちょうどいいでしょう。それができるようになると、{一時的|いちじてき}には{落|お}ち{込|こ}んでも、{立|た}ち{直|なお}りが{早|はや}くなります。

【{意見|いけん} B】
{最近|さいきん}は{仕事|しごと}で{悩|なや}んでいる{人|ひと}に{対|たい}して「{無理|むり}をしないであきらめたほうがよい」というアドバイスを{目|め}にすることがある。もちろん{体調|たいちょう}を{崩|くず}してしまうような{場合|ばあい}には{途中|とちゅう}でやめるべきだ。しかしあきらめるということは、やれることはすべてやり{尽|つ}くしたあとで{考|かんが}えるべきではないだろうか。{困難|こんなん}な{目標|もくひょう}ほど{簡単|かんたん}には{達成|たっせい}できないものだ。だから、{最初|さいしょ}から、できなければあきらめてもいいんだという{気持|きも}ちでいては、つらくなったときに{頑張|がんば}り{続|つづ}けることができない。

{仮|かり}にどうしてもうまくいかずにあきらめることになったとしても、{精|せい}いっぱい{努力|どりょく}した{結果|けっか}ならば{納得|なっとく}できる。{落|お}ち{込|こ}んだりくよくよしたりするのではなく{気持|きも}ちを{切|き}り{替|か}えて、しっかり{原因|げんいん}を{考|かんが}えて{次|つぎ}に{生|い}かすことが{重要|じゅうよう}だ。

（{注|ちゅう}）{尾|お}を{引|ひ}く：ずっと{残|のこ}る`,
      arti: `【Pendapat A】
Orang yang serius, punya rasa tanggung jawab tinggi, dan tidak mau kalah cenderung "tidak menyerah". "Tidak menyerah" pada dasarnya tentu hal yang baik, tetapi di sisi lain, sebenarnya cukup banyak juga hal yang lebih baik dilepaskan.

Sudah berusaha sekuat tenaga, tetapi tidak berjalan lancar, tidak membuahkan hasil, tidak memperoleh rasa puas dan rasa cukup. Dalam kasus seperti itu, "menyerah" pun bisa menjadi pilihan yang cukup baik. "Menyerah" dalam kasus seperti ini berarti "berhenti".

Saat berhenti, kiatnya mungkin adalah berpikir, "Tidak berhasil. Untung saya berhenti." Berhenti sambil menyesali kegagalan sebaiknya dihindari. Kalau begitu, kegagalan itu akan terus membekas (catatan). Berpikir "untung tidak berhasil" justru sudah pas. Kalau sudah bisa begitu, meski sempat terpuruk sementara, kita akan cepat bangkit kembali.

【Pendapat B】
Belakangan ini sering terlihat nasihat bagi orang yang bermasalah dengan pekerjaannya: "Jangan memaksakan diri, lebih baik menyerah saja." Tentu saja jika sampai kesehatan terganggu, sebaiknya berhenti di tengah jalan. Namun, bukankah menyerah seharusnya dipikirkan setelah semua yang bisa dilakukan sudah dilakukan? Semakin sulit sebuah target, semakin tidak mudah dicapai. Karena itu, jika sejak awal kita berpikir "kalau tidak bisa, menyerah juga tidak apa-apa", kita tidak akan bisa terus berjuang saat keadaan menjadi berat.

Seandainya pun akhirnya harus menyerah karena benar-benar tidak berhasil, jika itu hasil dari usaha sekuat tenaga, kita bisa menerimanya. Yang penting bukan terpuruk atau terus meratap, melainkan mengubah suasana hati, memikirkan penyebabnya dengan sungguh-sungguh, lalu memanfaatkannya untuk kesempatan berikutnya.

(Catatan) 尾を引く: terus membekas`,
    },

    // ── 問題12：子育てと社会的規範 ──
    "12": {
      yomi: `{子育|こそだ}て（{養育|よういく}）にしろ、{学校|がっこう}での{教育|きょういく}にしろ、{当事者|とうじしゃ}（{親|おや}・{教師|きょうし}）が{心|こころ}がけなければならないのは、まず{子|こ}どもは{親|おや}（{教師|きょうし}）の{思|おも}うとおりにならないということである。あるいは、こちらの{思|おも}うとおりになったら、かえって{問題|もんだい}だということである。

「{子供|こども}は{親|おや}（{教師|きょうし}）の{思|おも}う{通|とお}りにならない」という{意味|いみ}は、{甘|あま}やかして{野放図|のほうず}（{注|ちゅう}1）にしていいということではない。{反抗|はんこう}は{望|のぞ}ましいから、{大|おお}いに{結構|けっこう}だとも{違|ちが}う。もともと、{親|おや}も{教師|きょうし}も{言葉|ことば}で{説得|せっとく}できるようになる{以前|いぜん}から、まず{子|こ}ども（{生徒|せいと}）たちを{家庭|かてい}や{学校|がっこう}の{生活|せいかつ}の{枠組|わくぐ}みに{入|い}れなければならない。{絶対|ぜったい}に{放|ほう}っておくわけにはいかないし、{理屈|りくつ}{抜|ぬ}きで{生活|せいかつ}の{型|かた}や{秩序|ちつじょ}を{押|お}しつけざるをえない。それが{親|おや}や{教師|きょうし}の{社会的|しゃかいてき}{役割|やくわり}であり、{個人|こじん}としてはどうかと{思|おも}うようなことも、{親|おや}や{教師|きょうし}は、{一律|いちりつ}に{画一的|かくいつてき}に{身|み}につけさせようとする。それは{避|さ}けられない。{望|のぞ}むと{望|のぞ}まざるとにかかわらず、みんながやらなくてはならない。

{人間|にんげん}が{社会的|しゃかいてき}{動物|どうぶつ}であるということは、そういうことであろう。{動物|どうぶつ}が{持|も}って{生|う}まれてきた{本能|ほんのう}で{自由|じゆう}に{生|い}きられるのに{対|たい}して、ひとの{子|こ}どもは{動物的|どうぶつてき}な{本能|ほんのう}を{抑圧|よくあつ}されて、{社会的|しゃかいてき}{規範|きはん}を{生|う}まれてから{次々|つぎつぎ}と{覚|おぼ}え、{身|み}につけていかねばならない。これは、ほかの{動物|どうぶつ}と{比較|ひかく}すると、{不自由|ふじゆう}なことである。{親|おや}や{教師|きょうし}は、そういうひとの{宿命|しゅくめい}である{不自由|ふじゆう}を{子|こ}どもたちに{身|み}につけさせなければならない。

（{中略|ちゅうりゃく}）

そういう{社会的|しゃかいてき}{規範|きはん}は、{今|いま}の{社会|しゃかい}のレベルや{段階|だんかい}が{必要|ひつよう}としていることであり、{本当|ほんとう}にひとの{幸福|こうふく}にとってふさわしいものかどうかはわからない。ましてや、{生|う}まれ{育|そだ}っていくその{子|こ}どもにとって、{絶対|ぜったい}に{必要|ひつよう}なものかどうかもわからない。ただ、わかっているのは、{社会的|しゃかいてき}に{生|い}きていくために{今|いま}ある{社会的|しゃかいてき}{規範|きはん}やルール、{考|かんが}え{方|かた}をひとまず{受|う}け{入|い}れなければならないということだけである。そして、そういうひとを{規制|きせい}し{構成|こうせい}してきたもろもろ（{注|ちゅう}2）の{精神的|せいしんてき}な{財産|ざいさん}は、{時代|じだい}とともに{変|か}わってきたという{事実|じじつ}である。

だから、{次|つぎ}の{世代|せだい}は、{私|わたし}たちと{同|おな}じにはならない。したがって、{子|こ}どもは{親|おや}（{教師|きょうし}）の{思|おも}うとおりにはならないのだ。もちろん、{思|おも}うとおりにしようとすることは{避|さ}けられないとしても、{思|おも}うとおりにならないことを{覚悟|かくご}しているべきである。それが{子|こ}ども（{生徒|せいと}）や、あとの{世代|せだい}の{人|ひと}たちへの{尊敬|そんけい}であり、{信頼|しんらい}であろう。

「こちらの{思|おも}うとおりになったら、かえって{問題|もんだい}だ」も{同|おな}じことだが、{現在|げんざい}の{人間|にんげん}や{社会|しゃかい}がすでに{理想|りそう}を{実現|じつげん}した{完璧|かんぺき}な{社会|しゃかい}であるはずがないし、{私|わたし}たちが{正|ただ}しいと{思|おも}い、{子|こ}どもたちに{押|お}しつけている{社会|しゃかい}{規範|きはん}やルールも、あくまでも{暫定的|ざんていてき}なものにすぎない。だから、{私|わたし}たちが{予想|よそう}した{以上|いじょう}に、{私|わたし}たちの{思|おも}いどおりになる{子|こ}どもができてしまったら、{大変|たいへん}なことになる。

おとなと{子|こ}どもとの{誤差|ごさ}は、{基本的|きほんてき}にはいつでも{歓迎|かんげい}していいことである。

（{注|ちゅう}1）{野放図|のほうず}にする：{勝手|かって}にさせる
（{注|ちゅう}2）もろもろの：さまざまな`,
      arti: `Baik dalam mengasuh anak (membesarkan) maupun dalam pendidikan di sekolah, yang harus diingat oleh pihak yang bersangkutan (orang tua, guru) adalah, pertama, anak tidak akan menjadi seperti yang diinginkan orang tua (guru). Atau, kalau anak menjadi persis seperti yang kita inginkan, justru itulah masalahnya.

Makna "anak tidak akan menjadi seperti yang diinginkan orang tua (guru)" bukan berarti boleh memanjakan dan membiarkannya semaunya (catatan 1). Bukan juga berarti pembangkangan itu diharapkan sehingga sangat dipersilakan. Pada dasarnya, sejak sebelum orang tua maupun guru bisa membujuk dengan kata-kata, mereka harus lebih dulu memasukkan anak-anak (murid) ke dalam kerangka kehidupan rumah dan sekolah. Sama sekali tidak bisa dibiarkan, dan mau tak mau pola serta tatanan hidup harus dipaksakan tanpa banyak alasan. Itulah peran sosial orang tua dan guru; bahkan hal yang secara pribadi mereka ragukan pun, orang tua dan guru berusaha menanamkannya secara seragam dan pukul rata. Itu tidak bisa dihindari. Mau atau tidak, semua orang harus melakukannya.

Mungkin itulah makna bahwa manusia adalah makhluk sosial. Sementara hewan bisa hidup bebas dengan naluri bawaan lahirnya, anak manusia harus ditekan naluri hewaninya, lalu sejak lahir satu demi satu mempelajari dan menanamkan norma sosial. Dibandingkan hewan lain, ini adalah hal yang mengekang. Orang tua dan guru harus menanamkan keterkekangan yang menjadi takdir manusia itu kepada anak-anak.

(dihilangkan)

Norma sosial semacam itu adalah apa yang dibutuhkan oleh tingkat dan tahap masyarakat saat ini, dan tidak diketahui apakah benar-benar pantas bagi kebahagiaan manusia. Apalagi, tidak diketahui pula apakah norma itu mutlak diperlukan bagi anak yang akan lahir dan tumbuh itu. Yang diketahui hanyalah bahwa, untuk hidup bermasyarakat, kita harus menerima dulu norma sosial, aturan, dan cara berpikir yang ada sekarang. Dan juga fakta bahwa berbagai (catatan 2) harta spiritual yang telah mengatur dan membentuk manusia seperti itu terus berubah seiring zaman.

Karena itu, generasi berikutnya tidak akan sama dengan kita. Oleh sebab itu, anak tidak akan menjadi seperti yang diinginkan orang tua (guru). Tentu saja, meski upaya untuk membentuknya sesuai keinginan tidak bisa dihindari, kita harus siap bahwa anak tidak akan menjadi seperti yang kita inginkan. Itulah bentuk penghormatan dan kepercayaan kepada anak (murid) dan orang-orang dari generasi sesudahnya.

"Kalau anak menjadi persis seperti yang kita inginkan, justru itulah masalahnya" juga sama halnya: manusia dan masyarakat saat ini tidak mungkin sudah merupakan masyarakat sempurna yang telah mewujudkan cita-cita, dan norma sosial serta aturan yang kita anggap benar dan kita paksakan kepada anak-anak pun hanyalah bersifat sementara. Karena itu, jika sampai muncul anak yang menjadi persis seperti keinginan kita melebihi perkiraan kita, itu akan menjadi masalah besar.

Selisih antara orang dewasa dan anak-anak pada dasarnya selalu boleh disambut dengan baik.

(Catatan 1) 野放図にする: membiarkan berbuat semaunya
(Catatan 2) もろもろの: berbagai macam`,
    },

    // ── 問題13：情報検索 ──
    "13": {
      yomi: `{秋川|あきかわ}{大学|だいがく}＞{秋川|あきかわ}{大学|だいがく}{図書館|としょかん}＞{一般|いっぱん}{利用|りよう}
{一般|いっぱん}の{方|かた}の{図書館|としょかん}{利用|りよう}について

{秋川|あきかわ}{大学|だいがく}の{学生|がくせい}{以外|いがい}の{一般|いっぱん}の{方|かた}も、{研究|けんきゅう}{等|とう}の{目的|もくてき}のために、{秋川|あきかわ}キャンパスにある{中央|ちゅうおう}{図書館|としょかん}と{文学部|ぶんがくぶ}{図書館|としょかん}の{資料|しりょう}が{利用|りよう}できます。

【{入館|にゅうかん}{方法|ほうほう}】
・{図書館|としょかん}{利用|りよう}カードをお{持|も}ちの{方|かた}は、{自動|じどう}{入退館|にゅうたいかん}ゲートから{入退館|にゅうたいかん}ができます。
・お{持|も}ちでない{方|かた}は、カウンターで{一日|いちにち}{入館証|にゅうかんしょう}を{発行|はっこう}いたします。

【{図書館|としょかん}{利用|りよう}カードについて】
・{図書館|としょかん}{利用|りよう}カードは、{図書館|としょかん}{資料|しりょう}の{貸|か}し{出|だ}しの{際|さい}に{必要|ひつよう}になります。
・{発行|はっこう}をご{希望|きぼう}の{方|かた}は、{身分|みぶん}{証明書|しょうめいしょ}をお{持|も}ちになり、{中央|ちゅうおう}{図書館|としょかん}、または{文学部|ぶんがくぶ}{図書館|としょかん}のカウンターにお{越|こ}しください（{文学部|ぶんがくぶ}{図書館|としょかん}では{平日|へいじつ}のみ{受|う}け{付|つ}けています）。
・{平日|へいじつ}の9{時|じ}から17{時|じ}までの{間|あいだ}に{申請|しんせい}を{受|う}け{付|つ}けた{場合|ばあい}、その{日|ひ}のうちにカードをお{渡|わた}しします。{平日|へいじつ}の17{時|じ}{以降|いこう}、および{土日|どにち}に{受|う}け{付|つ}けた{場合|ばあい}は、{次|つぎ}の{平日|へいじつ}{開館日|かいかんび}{以降|いこう}にお{渡|わた}しします。

【{貸|か}し{出|だ}しと{返却|へんきゃく}】
・{貸|か}し{出|だ}し{冊数|さっすう}は5{冊|さつ}まで、{貸|か}し{出|だ}し{期間|きかん}は2{週間|しゅうかん}です。
・{中央|ちゅうおう}{図書館|としょかん}の{貸|か}し{出|だ}し{受付|うけつけ}{時間|じかん}は{閉館|へいかん}30{分|ぷん}{前|まえ}まで、{文学部|ぶんがくぶ}{図書館|としょかん}は{閉館|へいかん}15{分|ふん}{前|まえ}までです。
・{開館|かいかん}{時|じ}の{返却|へんきゃく}は、カウンターで{受|う}け{付|つ}けています。{閉館|へいかん}・{休館|きゅうかん}{時|じ}は、ブックポストに{入|い}れてください。

【{資料|しりょう}の{複写|ふくしゃ}】
・{館内|かんない}の{複写機|ふくしゃき}で、{図書館|としょかん}{資料|しりょう}の{複写|ふくしゃ}ができます。
・{複写機|ふくしゃき}は、{中央|ちゅうおう}{図書館|としょかん}は{閉館|へいかん}10{分|ぷん}{前|まえ}まで、{文学部|ぶんがくぶ}{図書館|としょかん}は{閉館|へいかん}{時間|じかん}まで{利用|りよう}できます。

【{開館|かいかん}{時間|じかん}】
{中央|ちゅうおう}{図書館|としょかん}：
　{授業|じゅぎょう}{期間|きかん} {平日|へいじつ} 9:00〜22:00 / {土日|どにち} 9:00〜17:00
　{夏休|なつやす}み・{春休|はるやす}み{期間|きかん} {平日|へいじつ} 9:00〜19:00 / {土日|どにち} {休館|きゅうかん}

{文学部|ぶんがくぶ}{図書館|としょかん}：
　{授業|じゅぎょう}{期間|きかん} {平日|へいじつ} 9:00〜21:00 / {土日|どにち} 9:00〜17:00
　{夏休|なつやす}み・{春休|はるやす}み{期間|きかん} {平日|へいじつ} 9:00〜18:00 / {土日|どにち} {休館|きゅうかん}

※{各|かく}{期間|きかん}の{具体的|ぐたいてき}な{日程|にってい}は、{開館|かいかん}カレンダーのページをご{覧|らん}ください。`,
      arti: `Universitas Akikawa > Perpustakaan Universitas Akikawa > Penggunaan Umum
Tentang penggunaan perpustakaan oleh masyarakat umum

Masyarakat umum selain mahasiswa Universitas Akikawa juga dapat menggunakan bahan di Perpustakaan Pusat dan Perpustakaan Fakultas Sastra di Kampus Akikawa untuk keperluan penelitian dan sebagainya.

【Cara masuk】
・Yang memiliki kartu perpustakaan dapat keluar-masuk melalui gerbang otomatis.
・Yang tidak memilikinya akan dibuatkan tanda masuk satu hari di konter.

【Tentang kartu perpustakaan】
・Kartu perpustakaan diperlukan saat meminjam bahan perpustakaan.
・Yang ingin membuat kartu, silakan membawa kartu identitas dan datang ke konter Perpustakaan Pusat atau Perpustakaan Fakultas Sastra (Perpustakaan Fakultas Sastra hanya menerima pada hari kerja).
・Jika pengajuan diterima pada hari kerja antara pukul 9 dan 17, kartu diserahkan pada hari itu juga. Jika diterima pada hari kerja setelah pukul 17, atau pada hari Sabtu-Minggu, kartu diserahkan pada hari buka (hari kerja) berikutnya atau sesudahnya.

【Peminjaman dan pengembalian】
・Jumlah pinjaman maksimal 5 buku, masa pinjam 2 minggu.
・Layanan peminjaman di Perpustakaan Pusat sampai 30 menit sebelum tutup; di Perpustakaan Fakultas Sastra sampai 15 menit sebelum tutup.
・Pengembalian saat perpustakaan buka diterima di konter. Saat tutup atau libur, masukkan ke kotak pengembalian buku.

【Fotokopi bahan】
・Bahan perpustakaan dapat difotokopi dengan mesin fotokopi di dalam gedung.
・Mesin fotokopi dapat digunakan sampai 10 menit sebelum tutup di Perpustakaan Pusat, dan sampai jam tutup di Perpustakaan Fakultas Sastra.

【Jam buka】
Perpustakaan Pusat:
　Masa perkuliahan: hari kerja 9:00–22:00 / Sabtu-Minggu 9:00–17:00
　Libur musim panas & musim semi: hari kerja 9:00–19:00 / Sabtu-Minggu tutup

Perpustakaan Fakultas Sastra:
　Masa perkuliahan: hari kerja 9:00–21:00 / Sabtu-Minggu 9:00–17:00
　Libur musim panas & musim semi: hari kerja 9:00–18:00 / Sabtu-Minggu tutup

※Untuk jadwal rinci setiap periode, silakan lihat halaman kalender buka perpustakaan.`,
    },
  },
};
