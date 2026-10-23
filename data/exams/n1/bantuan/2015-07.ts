import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2015
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1507: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{申込書|もうしこみしょ}にパスポートのコピーを【{添付|てんぷ}】した。",
      arti: "Saya 【melampirkan】 fotokopi paspor pada formulir pendaftaran.",
    },
    2: {
      yomi: "{学生|がくせい}に【{慕|した}われる】{教師|きょうし}になりたい。",
      arti: "Saya ingin menjadi guru yang 【disayangi/dikagumi】 murid.",
      optArti: ["disayangi, dikagumi (慕われる)", "dipatuhi, diikuti", "dihormati", "disertai"],
    },
    3: {
      yomi: "{商品|しょうひん}に【{破損|はそん}】があった{場合|ばあい}は{交換|こうかん}いたします。",
      arti: "Jika ada 【kerusakan】 pada barang, kami akan menukarnya.",
    },
    4: {
      yomi: "この{件|けん}は、すでに{部長|ぶちょう}の【{承諾|しょうだく}】を{得|え}ている。",
      arti: "Untuk hal ini, sudah mendapat 【persetujuan】 kepala departemen.",
    },
    5: {
      yomi: "{庭|にわ}に【{淡|あわ}い】ピンクの{花|はな}が{咲|さ}いている。",
      arti: "Di halaman mekar bunga berwarna merah muda 【pucat/lembut】.",
      optArti: ["dangkal", "fana, sekejap", "pucat, lembut (warna) (淡い)", "bersih, murni"],
    },
    6: {
      yomi: "{個々|ここ}の{事情|じじょう}を{考|かんが}えず、【{画一的|かくいつてき}】に{判断|はんだん}するのはよくない。",
      arti: "Tidak baik menilai secara 【seragam/pukul rata】 tanpa memikirkan keadaan masing-masing.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{現在|げんざい}、{工場|こうじょう}にあるすべての{機械|きかい}を24{時間|じかん}（　）させて、{生産量|せいさんりょう}を{増|ふ}やしている。",
      arti: "Saat ini semua mesin di pabrik di(…) 24 jam untuk menambah jumlah produksi.",
      optYomi: ["{展開|てんかい}", "{稼働|かどう}", "{起動|きどう}", "{運行|うんこう}"],
      optArti: ["pengembangan, perluasan", "pengoperasian (mesin)", "menyalakan (sistem)", "pengoperasian (kendaraan)"],
    },
    8: {
      yomi: "{世界中|せかいじゅう}でインターネットの{利用者数|りようしゃすう}が（　）{勢|いきお}いで{伸|の}びている。",
      arti: "Di seluruh dunia, jumlah pengguna internet bertambah dengan laju yang (…).",
      optYomi: ["{慌|あわ}ただしい", null, "{勇|いさ}ましい", null],
      optArti: ["tergesa-gesa, sibuk", "berisik, cerewet", "gagah berani", "dahsyat, luar biasa"],
    },
    9: {
      yomi: "{海外|かいがい}に{赴任|ふにん}したときは、{言葉|ことば}や{習慣|しゅうかん}の{違|ちが}いから{様々|さまざま}な{困難|こんなん}に（　）した。",
      arti: "Ketika ditugaskan ke luar negeri, saya (…) berbagai kesulitan karena perbedaan bahasa dan kebiasaan.",
      optYomi: ["{隣接|りんせつ}", "{直面|ちょくめん}", "{近接|きんせつ}", "{対面|たいめん}"],
      optArti: ["bersebelahan", "menghadapi langsung", "berdekatan", "bertatap muka"],
    },
    10: {
      yomi: "{失敗|しっぱい}は{誰|だれ}にでもあるのだから、いつまでも（　）していないで、{元気|げんき}を{出|だ}してよ。",
      arti: "Semua orang pernah gagal, jadi jangan terus (…), semangatlah.",
      optArti: ["murung, terus memikirkan", "lamban", "sepi, sunyi", "lembut, empuk"],
    },
    11: {
      yomi: "{二|ふた}つの{発表|はっぴょう}は{優劣|ゆうれつ}をつけ{難|がた}いが、（　）{選|えら}ぶなら{後者|こうしゃ}のほうだ。",
      arti: "Kedua presentasi sulit dibandingkan mana yang lebih baik, tetapi (…) memilih, saya pilih yang kedua.",
      optArti: ["sangat; jauh lebih", "makin, lebih lagi", "kalau dipaksa (harus)", "benar-benar, sungguh tampak"],
    },
    12: {
      yomi: "{以下|いか}の{条件|じょうけん}に{一|ひと}つでも（　）する{人|ひと}は、{必|かなら}ず{事務室|じむしつ}に{申|もう}し{出|で}てください。",
      arti: "Orang yang (…) meskipun hanya satu dari syarat berikut, wajib melapor ke kantor.",
      optYomi: ["{該当|がいとう}", "{順応|じゅんのう}", "{相当|そうとう}", "{適応|てきおう}"],
      optArti: ["termasuk, memenuhi (kriteria)", "menyesuaikan diri", "setara, sebanding", "beradaptasi"],
    },
    13: {
      yomi: "{机|つくえ}の{上|うえ}に{置|お}いたはずのレポートが{見|み}つからないが、ほかの{書類|しょるい}や{資料|しりょう}に（　）しまったのだろうか。",
      arti: "Laporan yang seharusnya saya taruh di atas meja tidak ketemu; apakah ia (…) di antara dokumen dan bahan lain?",
      optYomi: [null, "{絡|から}んで", null, "{紛|まぎ}れて"],
      optArti: ["menyatu, terbiasa", "terbelit, terkait", "masuk dengan pas, reda", "tercampur, terselip"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{作品|さくひん}が【{仕上|しあ}がったら】{知|し}らせてください。",
      arti: "Tolong beri tahu saya kalau karyanya 【sudah rampung】.",
      optYomi: ["{届|とど}いたら", "{売|う}れたら", "{受賞|じゅしょう}したら", "{完成|かんせい}したら"],
      optArti: ["kalau sudah sampai", "kalau sudah terjual", "kalau sudah menang penghargaan", "kalau sudah selesai"],
    },
    15: {
      yomi: "{両|りょう}チームの{力|ちから}は【{互角|ごかく}だ】。",
      arti: "Kekuatan kedua tim 【seimbang】.",
      optYomi: ["{徐々|じょじょ}に{離|はな}れている", "{全然|ぜんぜん}{違|ちが}う", "{徐々|じょじょ}に{近|ちか}づいている", "{大体|だいたい}{同|おな}じだ"],
      optArti: ["perlahan menjauh", "sama sekali berbeda", "perlahan mendekat", "kurang lebih sama"],
    },
    16: {
      yomi: "お{客様|きゃくさま}からの【クレーム】に{対応|たいおう}するのが{鈴木|すずき}さんの{仕事|しごと}です。",
      arti: "Pekerjaan Suzuki-san adalah menangani 【komplain】 dari pelanggan.",
      optYomi: ["{返品|へんぴん}", "{注文|ちゅうもん}", "{苦情|くじょう}", "{質問|しつもん}"],
      optArti: ["pengembalian barang", "pesanan", "keluhan", "pertanyaan"],
    },
    17: {
      yomi: "{私|わたし}は{職業柄|しょくぎょうがら}、{様々|さまざま}な{企業|きぎょう}からビジネスに{関|かん}する【{助言|じょげん}】を{求|もと}められる。",
      arti: "Karena pekerjaan saya, saya dimintai 【nasihat】 soal bisnis oleh berbagai perusahaan.",
      optArti: ["saran, nasihat", "wawancara", "presentasi", "pelatihan"],
    },
    18: {
      yomi: "そんなことを{言|い}われたら、{佐藤|さとう}さんが【{錯覚|さっかく}する】のもしかたがない。",
      arti: "Kalau dikatakan seperti itu, wajar saja Sato-san 【salah sangka】.",
      optYomi: ["{疑|うたが}う", "{勘違|かんちが}いする", "{焦|あせ}る", "{油断|ゆだん}する"],
      optArti: ["curiga", "salah paham, salah kira", "panik, terburu-buru", "lengah"],
    },
    19: {
      yomi: "{観光客|かんこうきゃく}が【{殺到|さっとう}した】{理由|りゆう}は、そのニュース{報道|ほうどう}にあったらしい。",
      arti: "Alasan turis 【berbondong-bondong datang】 tampaknya karena pemberitaan itu.",
      optYomi: ["{一度|いちど}に{大勢|おおぜい}{来|き}た", "{急|きゅう}に{来|こ}なくなった", "{増|ふ}え{続|つづ}けた", "{減|へ}り{続|つづ}けた"],
      optArti: ["banyak orang datang sekaligus", "tiba-tiba tidak datang lagi", "terus bertambah", "terus berkurang"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{没頭|ぼっとう}",
      arti: "没頭 = tenggelam, larut (dalam suatu kegiatan)",
      optYomi: [
        "{初|はじ}めて{任|まか}された{仕事|しごと}をやり{遂|と}げ、{充実感|じゅうじつかん}に{没頭|ぼっとう}した。",
        "{一日|いちにち}でも{早|はや}く{良|よ}くなるように、{休暇|きゅうか}を{取|と}って{治療|ちりょう}に{没頭|ぼっとう}したい。",
        "{林氏|はやしし}は{苦労|くろう}して{社長|しゃちょう}になったのに、{全|まった}く{地位|ちい}に{没頭|ぼっとう}していない。",
        "{大学院|だいがくいん}{時代|じだい}は、{寝|ね}る間（ま）も{惜|お}しんで{専門|せんもん}{分野|ぶんや}の{研究|けんきゅう}に{没頭|ぼっとう}していた。",
      ],
      optArti: [
        "Saya menyelesaikan pekerjaan pertama yang dipercayakan, lalu 'tenggelam' dalam rasa puas.",
        "Agar cepat sembuh walau sehari, saya ingin cuti dan 'tenggelam' dalam pengobatan.",
        "Hayashi bersusah payah menjadi direktur, tetapi sama sekali tidak 'tenggelam' pada jabatannya.",
        "Semasa S2, saya 'tenggelam' dalam penelitian bidang keahlian sampai mengorbankan waktu tidur.",
      ],
    },
    21: {
      yomi: "{人手|ひとで}",
      arti: "人手 = tenaga kerja, tenaga bantuan (orang yang bekerja)",
      optYomi: [
        "{父|ちち}は{一家|いっか}の{人手|ひとで}で、{長|なが}い{間|あいだ}{家族|かぞく}を{経済的|けいざいてき}に{支|ささ}えてくれている。",
        "{大手|おおて}メーカーが{突然|とつぜん}{倒産|とうさん}し、{大量|たいりょう}の{人手|ひとで}が{職|しょく}を{失|うしな}うことになった。",
        "{祭|まつ}りの{準備|じゅんび}には{人手|ひとで}が{要|い}るので、{手伝|てつだ}ってくれる{人|ひと}を{探|さが}している。",
        "この{会社|かいしゃ}では、{年齢|ねんれい}や{性別|せいべつ}を{問|と}わず、{優秀|ゆうしゅう}な{人手|ひとで}を{雇用|こよう}している。",
      ],
      optArti: [
        "Ayah adalah 'tenaga kerja' keluarga, dan sudah lama menopang keluarga secara ekonomi.",
        "Produsen besar tiba-tiba bangkrut, dan banyak 'tenaga kerja' kehilangan pekerjaan.",
        "Persiapan festival memerlukan 'tenaga', jadi kami mencari orang yang mau membantu.",
        "Perusahaan ini mempekerjakan 'tenaga kerja' unggul tanpa memandang usia dan jenis kelamin.",
      ],
    },
    22: {
      yomi: "{今更|いまさら}",
      arti: "今更 = sekarang (sudah terlambat), baru sekarang",
      optYomi: [
        "{発生|はっせい}から10{年|ねん}{以上|いじょう}たつが、この{事件|じけん}は{今更|いまさら}{解決|かいけつ}されていない。",
        "これは{長|なが}い{間|あいだ}の{習慣|しゅうかん}だから、{今更|いまさら}{変|か}えるように{言|い}われても{難|むずか}しい。",
        "この{絵|え}に{描|えが}かれた{女性|じょせい}は、{今更|いまさら}{動|うご}き{出|だ}すかのように{生|い}き{生|い}きとしている。",
        "{佐藤|さとう}さんは{最初|さいしょ}は{目立|めだ}たない{社員|しゃいん}だったが、{今更|いまさら}、{会社|かいしゃ}の{中心|ちゅうしん}{人物|じんぶつ}だ。",
      ],
      optArti: [
        "Sudah lebih dari 10 tahun sejak terjadi, tetapi kasus ini 'sudah terlambat' belum terpecahkan.",
        "Ini kebiasaan yang sudah lama, jadi kalau disuruh mengubahnya 'sekarang setelah sekian lama', sulit.",
        "Wanita yang dilukis di lukisan ini begitu hidup seolah 'sudah terlambat' akan bergerak.",
        "Sato-san awalnya karyawan yang tidak menonjol, tetapi 'sudah terlambat' ia jadi tokoh sentral perusahaan.",
      ],
    },
    23: {
      yomi: "くまなく",
      arti: "くまなく = di setiap sudut, menyeluruh (tanpa ada yang terlewat)",
      optYomi: [
        "{家中|いえじゅう}をくまなく{探|さが}したが、{結局|けっきょく}、{鍵|かぎ}は{見|み}つからなかった。",
        "4{月|がつ}から{公共|こうきょう}{料金|りょうきん}がくまなく{値上|ねあ}げされるそうだ。",
        "{金庫|きんこ}の{中|なか}の{現金|げんきん}を{泥棒|どろぼう}にくまなく{盗|ぬす}まれてしまった。",
        "{小学校|しょうがっこう}{時代|じだい}の{友達|ともだち}の{名前|なまえ}をくまなく{思|おも}い{出|だ}せない。",
      ],
      optArti: [
        "Saya mencari 'ke setiap sudut' rumah, tetapi akhirnya kunci tidak ditemukan.",
        "Katanya mulai April tarif utilitas umum akan naik 'ke setiap sudut'.",
        "Uang tunai di brankas dicuri pencuri 'ke setiap sudut'.",
        "Saya tidak bisa mengingat 'ke setiap sudut' nama teman-teman SD.",
      ],
    },
    24: {
      yomi: "{安静|あんせい}",
      arti: "安静 = istirahat tenang (terutama untuk orang sakit)",
      optYomi: [
        "{試合|しあい}を{観戦|かんせん}した{後|あと}は{興奮|こうふん}が{冷|さ}めず、なかなか{安静|あんせい}になれなかった。",
        "{鈴木|すずき}さんはいつも{安静|あんせい}な{判断|はんだん}ができるので、{頼|たよ}りにされている。",
        "{熱|ねつ}が{高|たか}いときは、{無理|むり}をしないで{安静|あんせい}にしていてください。",
        "この{辺|あた}りは{緑|みどり}が{多|おお}く、{安静|あんせい}でとても{住|す}みやすいところです。",
      ],
      optArti: [
        "Setelah menonton pertandingan, rasa senang tidak mereda dan saya sulit menjadi 'istirahat tenang'.",
        "Suzuki-san selalu bisa membuat keputusan yang 'istirahat tenang', jadi ia diandalkan.",
        "Kalau demamnya tinggi, jangan memaksakan diri dan 'beristirahatlah dengan tenang'.",
        "Daerah ini banyak hijaunya, 'istirahat tenang', dan sangat nyaman ditinggali.",
      ],
    },
    25: {
      yomi: "{統合|とうごう}",
      arti: "統合 = penggabungan, integrasi (organisasi/sistem)",
      optYomi: [
        "{来年度|らいねんど}から、{関連|かんれん}{部門|ぶもん}を{統合|とうごう}して、{運営|うんえい}{体制|たいせい}を{再編|さいへん}することになった。",
        "これまでの{調査|ちょうさ}にかかった{費用|ひよう}を{統合|とうごう}して、{金額|きんがく}を{報告書|ほうこくしょ}に{記載|きさい}した。",
        "{部屋|へや}{全体|ぜんたい}をブルー{系|けい}の{色|いろ}に{統合|とうごう}して、{落|お}ち{着|つ}いた{印象|いんしょう}に{変|か}えてみた。",
        "A{班|はん}とB{班|はん}は{違|ちが}う{登山口|とざんぐち}から{山|やま}に{入|はい}り、2{時間|じかん}{後|ご}に{統合|とうごう}する{予定|よてい}だ。",
      ],
      optArti: [
        "Mulai tahun anggaran depan, divisi-divisi terkait akan 'digabungkan' dan sistem pengelolaan ditata ulang.",
        "Biaya survei selama ini 'digabungkan', lalu jumlahnya dicantumkan dalam laporan.",
        "Seluruh ruangan 'digabungkan' dengan warna kebiruan, sehingga kesannya menjadi tenang.",
        "Tim A dan tim B masuk gunung dari jalur pendakian berbeda, dan dijadwalkan 'bergabung' 2 jam kemudian.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{世間|せけん}はオリンピックの{話題|わだい}で{盛|も}り{上|あ}がっているが、{私|わたし}はオリンピックには（　）{興味|きょうみ}がない。",
      arti: "Orang-orang sedang ramai membicarakan Olimpiade, tetapi saya (…) tidak tertarik pada Olimpiade.",
      optYomi: [null, null, "{二度|にど}と", null],
      optArti: ["akhirnya", "sama sekali", "(tidak) lagi untuk kedua kalinya", "meskipun, seandainya"],
    },
    27: {
      yomi: "みんな「{幸|しあわ}せになりたい。」と{言|い}うが、そもそも{何|なに}（　）{幸|しあわ}せとするのだろうか。",
      arti: "Semua orang berkata \"ingin bahagia\", tetapi pada dasarnya (…) apa sesuatu dianggap bahagia?",
      optArti: ["menuju, untuk", "seputar, mengenai", "dengan (sebagai dasar/ukuran)", "seiring dengan"],
    },
    28: {
      yomi: "（{女優|じょゆう}に{対|たい}するインタビューで）A「{女優|じょゆう}になろうと{思|おも}われたきっかけは{何|なん}だったんですか。」B「{高校生|こうこうせい}のときに{初|はじ}めて{見|み}たお{芝居|しばい}に{感動|かんどう}して、{女優|じょゆう}になろうと{決|き}めたんです。あのときあのお{芝居|しばい}を（　）、{女優|じょゆう}になることはなかったと{思|おも}います。」",
      arti: "(Dalam wawancara dengan aktris) A: \"Apa yang mendorong Anda ingin menjadi aktris?\" B: \"Saya terharu oleh drama panggung yang pertama kali saya tonton saat SMA, lalu memutuskan menjadi aktris. (…) drama itu saat itu, saya rasa saya tidak akan menjadi aktris.\"",
      optYomi: ["{見|み}たとしたら", "{見|み}ようが", "{見|み}なかったにしろ", "{見|み}ていなければ"],
      optArti: ["seandainya menonton", "entah menonton", "meskipun tidak menonton", "kalau tidak menonton"],
    },
    29: {
      yomi: "{調査|ちょうさ}の{結果|けっか}、{南北川|なんぼくがわ}の{水質|すいしつ}{汚染|おせん}の{原因|げんいん}はA{社|しゃ}の{工場|こうじょう}にあることが{明|あき}らかになったにもかかわらず、A{社|しゃ}は{決|けっ}してそれを（　）。",
      arti: "Meskipun hasil penyelidikan menunjukkan bahwa penyebab pencemaran air Sungai Nanboku adalah pabrik perusahaan A, perusahaan A sama sekali (…) hal itu.",
      optYomi: ["{認|みと}めるほかはなかった", "{認|みと}めないでもなかった", "{認|みと}めようとはしなかった", "{認|みと}めねばならなかった"],
      optArti: ["tidak ada pilihan selain mengakui", "bukannya tidak mengakui", "tidak mau mengakui", "harus mengakui"],
    },
    30: {
      yomi: "{学生|がくせい}{時代|じだい}によく{通|かよ}ったこの{喫茶店|きっさてん}に{来|く}ると、あのころのことが{昨日|きのう}のことのように（　）。",
      arti: "Kalau datang ke kafe yang sering saya kunjungi semasa kuliah ini, masa itu (…) seperti kejadian kemarin.",
      optYomi: ["{思|おも}い{出|だ}される", "{思|おも}い{出|だ}す", "{思|おも}い{出|だ}すだろう", "{思|おも}い{出|だ}させた"],
      optArti: ["teringat (dengan sendirinya)", "mengingat", "mungkin akan mengingat", "membuat (seseorang) mengingat"],
    },
    31: {
      yomi: "{日本|にほん}{近海|きんかい}で{海水|かいすい}の{酸性化|さんせいか}が{認|みと}められたという。{海|うみ}の{生態系|せいたいけい}に{大|おお}きな{影響|えいきょう}が（　）{遅|おそ}い。{早急|さっきゅう}な{対策|たいさく}が{求|もと}められる。",
      arti: "Katanya pengasaman air laut terdeteksi di perairan dekat Jepang. (…) dampak besar pada ekosistem laut, itu sudah terlambat. Diperlukan penanggulangan segera.",
      optYomi: ["{出|で}たせいなのかは", "{出|で}てしまうかは", "{出|で}たばかりでは", "{出|で}てからでは"],
      optArti: ["apakah karena sudah muncul", "apakah akan muncul", "kalau baru saja muncul", "kalau baru (bertindak) setelah muncul"],
    },
    32: {
      yomi: "{高|たか}さ700メートルを{超|こ}すこの{超|ちょう}{高層|こうそう}ビルは、{高|こう}{成長|せいちょう}を{続|つづ}けるA{国|こく}の{象徴|しょうちょう}（　）{存在|そんざい}となっている。",
      arti: "Gedung pencakar langit setinggi lebih dari 700 meter ini menjadi keberadaan yang (…) simbol negara A yang terus tumbuh pesat.",
      optArti: ["dengan maksud menjadikan", "yang layak disebut", "katanya ada", "seperti akan menjadi"],
    },
    33: {
      yomi: "{初|はじ}めて{自分|じぶん}でみそを{作|つく}った。{実際|じっさい}に{作|つく}ってみて、{時間|じかん}はかかるが、{意外|いがい}と{簡単|かんたん}に（　）と{思|おも}った。",
      arti: "Untuk pertama kalinya saya membuat miso sendiri. Setelah benar-benar mencoba, meski makan waktu, saya pikir ternyata (…) dengan mudah.",
      optYomi: ["{作|つく}るまでだ", "{作|つく}るに{限|かぎ}る", "{作|つく}れるものだ", "{作|つく}っただけのことはある"],
      optArti: ["tinggal membuat saja", "paling baik membuat sendiri", "ternyata bisa dibuat", "sepadan dengan usaha membuatnya"],
    },
    34: {
      yomi: "（レストランで）{妻|つま}「ねえ、{森|もり}さんは30{分|ぷん}くらい{遅|おく}れるんだって。」{夫|おっと}「じゃあ、{先|さき}に{食|た}べ{物|もの}、（　）。お{腹|なか}がすいてきてさ。」{妻|つま}「そうだね。{食|た}べながら{森|もり}さん{待|ま}とう。」{夫|おっと}「うん。」",
      arti: "(Di restoran) Istri: \"Eh, katanya Mori-san terlambat sekitar 30 menit.\" Suami: \"Kalau begitu, makanannya (…) duluan? Aku mulai lapar.\" Istri: \"Iya. Kita tunggu Mori-san sambil makan.\" Suami: \"Oke.\"",
      optYomi: ["{頼|たの}んどけないよ", "{頼|たの}んじゃわないか", "{頼|たの}んどかないで", "{頼|たの}んじゃうんじゃないよね"],
      optArti: ["tidak bisa memesan duluan", "bagaimana kalau kita pesan saja", "jangan pesan duluan", "jangan-jangan kamu mau pesan, kan?"],
    },
    35: {
      yomi: "{田中|たなか}「{部長|ぶちょう}、{先日|せんじつ}{提出|ていしゅつ}した{書類|しょるい}なんですが、あれで{大丈夫|だいじょうぶ}でしょうか。」{部長|ぶちょう}「あ、ごめん。まだ{見|み}てない。」{田中|たなか}「そうですか。すみませんが、なるべく{早|はや}く（　）。」",
      arti: "Tanaka: \"Pak, mengenai dokumen yang saya serahkan kemarin, apakah sudah benar?\" Kepala: \"Ah, maaf. Belum saya lihat.\" Tanaka: \"Begitu ya. Maaf, (…) secepatnya.\"",
      optYomi: ["{見|み}ていただけると{助|たす}かるんですが", "{見|み}ていただくんでしょうか", "{見|み}ていただいたと{思|おも}うんですが", "{見|み}ていただいてはいかがでしょうか"],
      optArti: ["saya akan sangat terbantu kalau Bapak bisa melihatnya", "apakah Bapak akan melihatnya?", "saya kira Bapak sudah melihatnya", "bagaimana kalau Bapak melihatnya?"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{新入|しんにゅう}{社員|しゃいん}には、{一斉|いっせい}{研修|けんしゅう}よりも{現場|げんば}で{直接|ちょくせつ}{指導|しどう}したほうがいい。{例|たと}えば、＿＿ ★ ＿＿ ＿＿、{現場|げんば}だと{場面|ばめん}に{応|おう}じて{指導|しどう}できるので、{成長|せいちょう}も{早|はや}い。",
      arti: "Karyawan baru lebih baik dibimbing langsung di lapangan daripada pelatihan serentak. Misalnya, cara menulis email pun begitu; di lapangan bisa dibimbing sesuai situasi, sehingga perkembangannya juga cepat.",
      optYomi: [null, "メールの{書|か}き{方|かた}", null, null],
      optArti: ["pun, juga", "cara menulis email", "satu hal (misalnya)", "begitu juga"],
    },
    37: {
      yomi: "{僕|ぼく}みたいに＿＿ ＿＿ ★ ＿＿かもしれないが、{僕|ぼく}は、お{金|かね}よりもやりがいを{重視|じゅうし}して{仕事|しごと}を{選|えら}んだほうが、{幸|しあわ}せになれると{思|おも}う。",
      arti: "Mungkin tidak meyakinkan kalau mahasiswa yang belum pernah bekerja seperti saya yang mengatakannya, tetapi saya rasa memilih pekerjaan dengan mengutamakan rasa bermakna daripada uang akan membuat kita bahagia.",
      optYomi: ["{学生|がくせい}が", "{言|い}っても", "{説得力|せっとくりょく}がない", "{働|はたら}いたことがない"],
      optArti: ["mahasiswa (subjek)", "meskipun mengatakan", "tidak meyakinkan", "belum pernah bekerja"],
    },
    38: {
      yomi: "（{本|ほん}のあとがきで）{皆|みな}さんが{国際|こくさい}{経済|けいざい}を{理解|りかい}するために、この{本|ほん}が＿＿ ＿＿ ★ ＿＿{喜|よろこ}びはありません。",
      arti: "(Di kata penutup buku) Jika buku ini sedikit saja bisa berguna bagi Anda semua untuk memahami ekonomi internasional, sebagai penulis tidak ada kebahagiaan yang lebih dari ini.",
      optYomi: ["お{役|やく}に{立|た}てば", "これ{以上|いじょう}の", "{少|すこ}しでも", "{著者|ちょしゃ}として"],
      optArti: ["jika berguna", "yang lebih dari ini", "sedikit saja", "sebagai penulis"],
    },
    39: {
      yomi: "{先生|せんせい}「{今|いま}からディスカッションを{始|はじ}めますが、{一|ひと}つ{注意点|ちゅういてん}があります。＿＿ ＿＿ ★ ＿＿{聞|き}くようにしてください。」",
      arti: "Guru: \"Sekarang kita mulai diskusi, tetapi ada satu hal yang perlu diperhatikan. Meskipun ingin membantah apa yang dikatakan lawan bicara, pertama-tama dengarkan dulu pembicaraannya.\"",
      optYomi: ["{反論|はんろん}したくなっても", "{言|い}っていることに", "{相手|あいて}が", "まずは{相手|あいて}の{話|はなし}を"],
      optArti: ["meskipun ingin membantah", "terhadap apa yang dikatakan", "lawan bicara (subjek)", "pertama-tama pembicaraan lawan"],
    },
    40: {
      yomi: "{出張|しゅっちょう}の{帰|かえ}りに{空港|くうこう}の{売店|ばいてん}で、{家族|かぞく}＿＿ ＿＿ ★ ＿＿、{人気|にんき}の{紅茶|こうちゃ}クッキーを{買|か}った。",
      arti: "Saat pulang dinas, di kios bandara saya membeli kue teh yang populer sebagai oleh-oleh untuk keluarga dan untuk diri sendiri.",
      optArti: ["untuk (keluarga)", "dan", "oleh-oleh", "untuk (diri sendiri)"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optArti: ["apakah karena itu", "apakah memang begitu", "mungkin karena itu", "adalah"],
    },
    42: {
      optArti: ["meskipun begitu, tapi", "lagi pula", "dengan kata lain", "bahkan sebaliknya"],
    },
    43: {
      optArti: ["sudah menjadi (begitu)", "seharusnya dianggap akan menjadi", "seharusnya sudah menjadi", "kupikir sedang menjadi"],
    },
    44: {
      optArti: ["dengan begini, demikianlah", "dengan cara itu (jauh)", "sampai hal-hal ini", "sampai hal-hal itu"],
    },
    45: {
      optYomi: ["{一冊|いっさつ}がいい", "{一冊|いっさつ}といえる", "{一冊|いっさつ}でありたい", "{一冊|いっさつ}を{知|し}っている"],
      optArti: ["satu buku itu bagus", "bisa disebut buku yang", "ingin menjadi buku yang", "tahu satu buku"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "「{売|う}れる{商品|しょうひん}」をつくれるとあるが、なぜか。",
      arti: "Tertulis \"bisa membuat produk yang laku\"; mengapa?",
      optYomi: [
        "{平凡|へいぼん}な{人|ひと}は{自身|じしん}のモノサシを{大多数|だいたすう}の{人|ひと}に{合|あ}わせて{変|か}えられるから",
        "{平凡|へいぼん}な{人|ひと}は{自身|じしん}のモノサシが{世|よ}の{中|なか}に{通用|つうよう}すると{理解|りかい}しているから",
        "{平凡|へいぼん}な{人|ひと}はエリートより{独創的|どくそうてき}なモノサシをもっているから",
        "{平凡|へいぼん}な{人|ひと}は{大多数|だいたすう}の{人|ひと}に{受|う}け{入|い}れられるモノサシをもっているから",
      ],
      optArti: [
        "Karena orang biasa bisa mengubah tolok ukurnya agar sesuai dengan kebanyakan orang",
        "Karena orang biasa paham bahwa tolok ukurnya berlaku di masyarakat",
        "Karena orang biasa memiliki tolok ukur yang lebih orisinal daripada kaum elite",
        "Karena orang biasa memiliki tolok ukur yang diterima oleh kebanyakan orang",
      ],
    },
    47: {
      yomi: "{未来的|みらいてき}とあるが、どのような{点|てん}が{未来的|みらいてき}なのか。",
      arti: "Tertulis \"futuristis\"; dalam hal apa perpustakaan itu futuristis?",
      optYomi: [
        "インターネット{世界|せかい}よりも{情報|じょうほう}を{検索|けんさく}する{仕組|しく}みが{優|すぐ}れている{点|てん}",
        "インターネット{世界|せかい}と{同様|どうよう}に{情報|じょうほう}の{蓄積|ちくせき}と{検索|けんさく}の{仕組|しく}みがある{点|てん}",
        "インターネット{世界|せかい}と{同様|どうよう}にだれもが{自由自在|じゆうじざい}に{情報|じょうほう}を{検索|けんさく}できる{点|てん}",
        "インターネット{世界|せかい}では{見|み}られない{古代|こだい}からの{情報|じょうほう}を{蓄積|ちくせき}している{点|てん}",
      ],
      optArti: [
        "Sistem pencarian informasinya lebih unggul daripada dunia internet",
        "Sama seperti dunia internet, ada sistem penyimpanan dan pencarian informasi",
        "Sama seperti dunia internet, siapa pun bisa mencari informasi dengan bebas",
        "Menyimpan informasi sejak zaman kuno yang tidak terlihat di dunia internet",
      ],
    },
    48: {
      yomi: "うれしいことにとあるが、{何|なに}がうれしいのか。",
      arti: "Tertulis \"menggembirakannya\"; apa yang menggembirakan?",
      optYomi: [
        "この{世|よ}のたいていの{職業|しょくぎょう}は、コドモの{部分|ぶぶん}も{必要|ひつよう}としていること",
        "コドモの{部分|ぶぶん}で{成立|せいりつ}している{職業|しょくぎょう}の{人|ひと}は、{感動|かんどう}のある{人生|じんせい}を{送|おく}れること",
        "コドモの{部分|ぶぶん}を{持|も}っていれば、オトナの{部分|ぶぶん}で{成立|せいりつ}している{職業|しょくぎょう}に{就|つ}けること",
        "オトナの{部分|ぶぶん}で{成立|せいりつ}している{職業|しょくぎょう}の{人|ひと}でも、コドモの{部分|ぶぶん}を{持|も}ち{続|つづ}けていること",
      ],
      optArti: [
        "Sebagian besar pekerjaan di dunia ini juga membutuhkan sisi kanak-kanak",
        "Orang yang pekerjaannya bertumpu pada sisi kanak-kanak bisa menjalani hidup yang penuh haru",
        "Kalau memiliki sisi kanak-kanak, bisa mendapat pekerjaan yang bertumpu pada sisi dewasa",
        "Orang yang pekerjaannya bertumpu pada sisi dewasa pun tetap memiliki sisi kanak-kanak",
      ],
    },
    49: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{述|の}べていることは{何|なに}か。",
      arti: "Apa yang dikemukakan penulis dalam tulisan ini?",
      optYomi: [
        "{我々|われわれ}は{裸|はだか}の{眼|め}でものを{見|み}ている{限|かぎ}り、{世界|せかい}のすべてを{見|み}ることはできない。",
        "{我々|われわれ}は{過去|かこ}の{偉大|いだい}な{人間|にんげん}と{同|おな}じ{見方|みかた}で{世界|せかい}を{見|み}ていると{思|おも}い{込|こ}んでいる。",
        "{我々|われわれ}は{常識|じょうしき}に{縛|しば}られているために、{見|み}えるものが{限|かぎ}られている。",
        "{我々|われわれ}は{常識|じょうしき}という{色|いろ}{眼鏡|めがね}を{外|はず}して{裸|はだか}の{眼|め}で{世界|せかい}を{見|み}るべきだ。",
      ],
      optArti: [
        "Selama kita melihat dengan mata telanjang, kita tidak bisa melihat seluruh dunia.",
        "Kita yakin bahwa kita melihat dunia dengan cara pandang yang sama dengan orang-orang besar masa lalu.",
        "Karena kita terikat akal sehat, apa yang bisa kita lihat terbatas.",
        "Kita harus melepas kacamata berwarna bernama akal sehat dan melihat dunia dengan mata telanjang.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "そうした{心理|しんり}とあるが、どのような{心理|しんり}か。",
      arti: "Tertulis \"psikologi semacam itu\"; psikologi seperti apa?",
      optYomi: [
        "{本|ほん}をたくさん{読|よ}めるようになりたい",
        "{大|たい}した{努力|どりょく}なしに{速読法|そくどくほう}を{身|み}につけたい",
        "「{速読|そくどく}コンプレックス」に{縛|しば}られずに{読|よ}みたい",
        "{内容|ないよう}を{理解|りかい}しなければという{思|おも}いから{解放|かいほう}されたい",
      ],
      optArti: [
        "Ingin bisa membaca banyak buku",
        "Ingin menguasai teknik membaca cepat tanpa usaha berarti",
        "Ingin membaca tanpa terikat \"kompleks membaca cepat\"",
        "Ingin terbebas dari pikiran harus memahami isi",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}によると、{速読|そくどく}をしなければならないのはどのようなときか。",
      arti: "Menurut penulis, kapan kita harus membaca cepat?",
      optYomi: [
        "{情報|じょうほう}の{渦|うず}の{中|なか}に{巻|ま}き{込|こ}まれないようにするとき",
        "{多|おお}くの{情報|じょうほう}を{急|いそ}いで{処理|しょり}しなければならないとき",
        "{多|おお}くの{知識|ちしき}を{自分|じぶん}のものとして{蓄|たくわ}えようとするとき",
        "{社会|しゃかい}の{変化|へんか}の{速|はや}さに{取|と}り{残|のこ}されないようにするとき",
      ],
      optArti: [
        "Saat berusaha agar tidak terseret pusaran informasi",
        "Saat harus memproses banyak informasi dengan cepat",
        "Saat berusaha menyimpan banyak pengetahuan sebagai milik sendiri",
        "Saat berusaha agar tidak tertinggal cepatnya perubahan masyarakat",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}によると、{読書|どくしょ}を{楽|たの}しむにはどうすればよいか。",
      arti: "Menurut penulis, apa yang harus dilakukan agar bisa menikmati membaca?",
      optYomi: [
        "{手応|てごた}えのある{本|ほん}を{繰|く}り{返|かえ}し{読|よ}む",
        "{本|ほん}の{内容|ないよう}に{応|おう}じて{速|はや}さを{変|か}えて{読|よ}む",
        "{速|はや}さにこだわらずできるだけ{多|おお}くの{本|ほん}を{読|よ}む",
        "{速|はや}さや{量|りょう}にこだわらず{時間|じかん}をかけて{本|ほん}を{読|よ}む",
      ],
      optArti: [
        "Membaca berulang-ulang buku yang berbobot",
        "Membaca dengan mengubah kecepatan sesuai isi buku",
        "Membaca sebanyak mungkin buku tanpa mempersoalkan kecepatan",
        "Membaca dengan meluangkan waktu tanpa mempersoalkan kecepatan dan jumlah",
      ],
    },
    53: {
      yomi: "①{驚|おどろ}きがあるとあるが、なぜ{驚|おどろ}いたのか。",
      arti: "Tertulis \"① ada rasa takjub\"; mengapa takjub?",
      optYomi: [
        "{調|しら}べれば{調|しら}べるほど、{歴史|れきし}の{新|あたら}しい{事実|じじつ}がわかってくるから",
        "{自分|じぶん}は{歴史|れきし}が{嫌|きら}いだと{思|おも}っていたが、{実|じつ}は{好|す}きであることを{発見|はっけん}したから",
        "{全|まった}く{別|べつ}だと{思|おも}っていたものの{間|あいだ}に、{思|おも}いがけない{関連性|かんれんせい}が{見|み}えてくるから",
        "{関連性|かんれんせい}があると{思|おも}っていたものが、{全|まった}く{関係|かんけい}がないことがわかったから",
      ],
      optArti: [
        "Karena makin diselidiki, makin banyak fakta sejarah baru yang diketahui",
        "Karena menemukan bahwa ternyata ia suka sejarah, padahal mengira dirinya membencinya",
        "Karena terlihat hubungan tak terduga di antara hal-hal yang dikira sama sekali berbeda",
        "Karena hal-hal yang dikira berhubungan ternyata sama sekali tidak berkaitan",
      ],
    },
    54: {
      yomi: "{筆者|ひっしゃ}が{考|かんが}える②{歴史|れきし}とはどのようなものか。",
      arti: "Seperti apa \"② sejarah\" menurut penulis?",
      optYomi: [
        "{先祖|せんぞ}や{自分|じぶん}たちもかかわって{作|つく}ってきたドラマ",
        "{自分|じぶん}たちの{先祖|せんぞ}が{残|のこ}した{完成|かんせい}されたドラマ",
        "{自分|じぶん}が{生|い}きてきた{時代|じだい}を{映|うつ}したドラマ",
        "{過去|かこ}の{人間|にんげん}が{複雑|ふくざつ}に{絡|から}んでいるドラマ",
      ],
      optArti: [
        "Drama yang dibuat dengan keterlibatan leluhur dan diri kita juga",
        "Drama yang sudah jadi, peninggalan leluhur kita",
        "Drama yang mencerminkan zaman yang telah dijalani diri sendiri",
        "Drama yang melibatkan manusia masa lalu secara rumit",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}の{気持|きも}ちに{合|あ}っているものはどれか。",
      arti: "Mana yang sesuai dengan perasaan penulis?",
      optYomi: [
        "{若|わか}いうちは{歴史|れきし}に{興味|きょうみ}がないのに{中年|ちゅうねん}になって{自然|しぜん}に{興味|きょうみ}がわいてくるのは{驚|おどろ}きだ",
        "{少|すこ}しでも{歴史|れきし}を{学|まな}べば{時代|じだい}の{流|なが}れの{中|なか}での{自分|じぶん}の{位置|いち}を{知|し}りたくなるのは{当然|とうぜん}だ",
        "{中年|ちゅうねん}になって{歴史|れきし}における{自分|じぶん}の{位置|いち}を{知|し}ろうとしない{人|ひと}もいることは{意外|いがい}だ",
        "{十代|じゅうだい}のうちに{歴史|れきし}に{関|かん}する{知識|ちしき}のネットワークを{構築|こうちく}しておくことが{大切|たいせつ}だ",
      ],
      optArti: [
        "Mengherankan bahwa saat muda tidak tertarik sejarah, tetapi saat paruh baya minat itu muncul dengan sendirinya",
        "Wajar jika sedikit belajar sejarah saja, kita jadi ingin tahu posisi diri dalam arus zaman",
        "Mengejutkan bahwa ada orang yang setelah paruh baya tidak berusaha mengetahui posisi dirinya dalam sejarah",
        "Penting membangun jaringan pengetahuan sejarah selagi remaja",
      ],
    },
    56: {
      yomi: "{都市|とし}の{社会|しゃかい}{空間|くうかん}の{特徴|とくちょう}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa yang dikatakan penulis tentang ciri ruang sosial perkotaan?",
      optYomi: [
        "{人々|ひとびと}が{他人|たにん}に{関心|かんしん}を{持|も}たず、{社会的|しゃかいてき}なつながりが{希薄|きはく}になっている。",
        "{人々|ひとびと}が{互|たがい}を{知|し}らないことを{前提|ぜんてい}として、{機能|きのう}で{結|むす}びついている。",
        "{人々|ひとびと}が{相手|あいて}との{親密|しんみつ}さより、{機能的|きのうてき}なつながりを{優先|ゆうせん}している。",
        "{人々|ひとびと}が{匿名性|とくめいせい}を{前提|ぜんてい}としたコミュニケーションを{好|この}んでいる。",
      ],
      optArti: [
        "Orang-orang tidak peduli pada orang lain, dan hubungan sosial menjadi renggang.",
        "Orang-orang terhubung secara fungsional dengan anggapan dasar bahwa mereka tidak saling mengenal.",
        "Orang-orang lebih mengutamakan hubungan fungsional daripada keakraban dengan orang lain.",
        "Orang-orang menyukai komunikasi yang berlandaskan anonimitas.",
      ],
    },
    57: {
      yomi: "{都市|とし}の{社会|しゃかい}{空間|くうかん}の{経験|けいけん}によって、{人々|ひとびと}の{自己|じこ}に{対|たい}する{意識|いしき}はどう{変|か}わったか。",
      arti: "Bagaimana kesadaran orang terhadap dirinya berubah karena pengalaman ruang sosial perkotaan?",
      optYomi: [
        "{集団|しゅうだん}のなかの{一員|いちいん}という{立場|たちば}を{意識|いしき}するようになった。",
        "{個人|こじん}であるということをより{強|つよ}く{自覚|じかく}するようになった。",
        "{自分|じぶん}が{果|は}たすべき{義務|ぎむ}をより{明確|めいかく}に{意識|いしき}するようになった。",
        "{自分|じぶん}の{才能|さいのう}は{社会|しゃかい}のなかで{生|い}かすべきものだと{考|かんが}えるようになった。",
      ],
      optArti: [
        "Menjadi sadar akan posisinya sebagai anggota kelompok.",
        "Menjadi lebih kuat menyadari dirinya sebagai individu.",
        "Menjadi lebih jelas menyadari kewajiban yang harus dipenuhi.",
        "Menjadi berpikir bahwa bakatnya harus dimanfaatkan dalam masyarakat.",
      ],
    },
    58: {
      yomi: "{都市|とし}{社会|しゃかい}におけるマスメディアについて、{筆者|ひっしゃ}はどのようにとらえているか。",
      arti: "Bagaimana penulis memandang media massa dalam masyarakat perkotaan?",
      optYomi: [
        "{人々|ひとびと}の{間|あいだ}の{情報|じょうほう}{共有|きょうゆう}を{安定|あんてい}させている。",
        "{人々|ひとびと}の{社会的|しゃかいてき}な{関係|かんけい}を{強化|きょうか}している。",
        "{情報|じょうほう}の{複雑化|ふくざつか}を{抑制|よくせい}している。",
        "{口頭|こうとう}のコミュニケーションの{発達|はったつ}を{促|うなが}している。",
      ],
      optArti: [
        "Menstabilkan pembagian informasi di antara orang-orang.",
        "Memperkuat hubungan sosial orang-orang.",
        "Menekan makin rumitnya informasi.",
        "Mendorong perkembangan komunikasi lisan.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "そのようにして{作|つく}ったとあるが、どのように{作|つく}ったのか。",
      arti: "Tertulis \"dibuat dengan cara seperti itu\"; bagaimana cara membuatnya?",
      optYomi: [
        "{曲|きょく}{全体|ぜんたい}の{出来上|できあ}がりをイメージしながら{作|つく}った。",
        "{曲|きょく}の{終|お}わりを{意識|いしき}して{納得|なっとく}できる{音|おと}を{探|さが}しながら{作|つく}った。",
        "{美|うつく}しいとされている{音|おと}の{連|つら}なりを{組|く}み{合|あ}わせて{作|つく}った。",
        "{音|おと}の{連|つら}なりを{理屈|りくつ}ではなく{感覚的|かんかくてき}に{選|えら}んで{作|つく}った。",
      ],
      optArti: [
        "Dibuat sambil membayangkan hasil jadi seluruh lagu.",
        "Dibuat sambil mencari bunyi yang memuaskan dengan menyadari akhir lagu.",
        "Dibuat dengan menggabungkan rangkaian bunyi yang dianggap indah.",
        "Dibuat dengan memilih rangkaian bunyi secara intuitif, bukan dengan logika.",
      ],
    },
    60: {
      yomi: "{筆者|ひっしゃ}は、ガラスの{花瓶|かびん}の{例|れい}を{挙|あ}げて{何|なに}を{言|い}おうとしているのか。",
      arti: "Dengan memberi contoh vas kaca, apa yang ingin dikatakan penulis?",
      optYomi: [
        "{音楽|おんがく}の{素材|そざい}として{適|てき}している{音|おと}があること",
        "{作曲家|さっきょくか}はどのような{仕事|しごと}をしなければならないかということ",
        "{作曲家|さっきょくか}は{何|なん}の{知識|ちしき}もなく{曲|きょく}を{作|つく}ることはできないこと",
        "{自身|じしん}の{作曲|さっきょく}について{知|し}らなければいい{曲|きょく}はできないこと",
      ],
      optArti: [
        "Bahwa ada bunyi yang cocok sebagai bahan musik",
        "Pekerjaan seperti apa yang harus dilakukan komponis",
        "Bahwa komponis tidak bisa membuat lagu tanpa pengetahuan apa pun",
        "Bahwa lagu yang bagus tidak bisa dibuat tanpa mengetahui komposisinya sendiri",
      ],
    },
    61: {
      yomi: "{新|あら}たな{音楽|おんがく}の{可能性|かのうせい}を{求|もと}める{作曲家|さっきょくか}{達|たち}の{音楽|おんがく}とは、どのようなものか。",
      arti: "Seperti apa musik para komponis yang mencari kemungkinan musik baru?",
      optYomi: [
        "{伝統的|でんとうてき}なイメージから{離|はな}れた{実験的|じっけんてき}な{音楽|おんがく}",
        "「{基本的|きほんてき}な」{知識|ちしき}を{知|し}らずに{作|つく}った{未知|みち}の{音楽|おんがく}",
        "「{基本的|きほんてき}な」{知識|ちしき}を{元|もと}にして{作|つく}った{新|あたら}しい{音楽|おんがく}",
        "{非|ひ}{伝統的|でんとうてき}だが「{保守的|ほしゅてき}な」イメージを{失|うしな}わない{音楽|おんがく}",
      ],
      optArti: [
        "Musik eksperimental yang menjauh dari citra tradisional",
        "Musik tak dikenal yang dibuat tanpa mengetahui pengetahuan \"dasar\"",
        "Musik baru yang dibuat berdasarkan pengetahuan \"dasar\"",
        "Musik nontradisional yang tetap tidak kehilangan citra \"konservatif\"",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}によると、{自分|じぶん}{自身|じしん}の{作曲|さっきょく}について{語|かた}れることはどのようなことか。",
      arti: "Menurut penulis, apa yang bisa ia ceritakan tentang komposisinya sendiri?",
      optYomi: [
        "{自身|じしん}の{曲|きょく}の{意義|いぎ}と{価値|かち}",
        "{自身|じしん}の{方法論|ほうほうろん}についての{解釈|かいしゃく}",
        "{自身|じしん}の{試|こころ}みと、{曲|きょく}についての{解釈|かいしゃく}",
        "{自身|じしん}の{作曲|さっきょく}{過程|かてい}と、{実験的|じっけんてき}{音楽|おんがく}の{可能性|かのうせい}",
      ],
      optArti: [
        "Makna dan nilai lagunya sendiri",
        "Tafsiran tentang metodologinya sendiri",
        "Tafsiran tentang percobaannya sendiri dan lagunya",
        "Proses komposisinya sendiri dan kemungkinan musik eksperimental",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{子|こ}どもが{昆虫|こんちゅう}をつかまえることについて、AとBはどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat A dan B tentang anak-anak menangkap serangga?",
      optYomi: [
        "Aは{観察|かんさつ}する{姿勢|しせい}を{身|み}につけさせれば{有益|ゆうえき}になると{考|かんが}え、Bは{実感|じっかん}を{伴|ともな}った{自然|しぜん}の{理解|りかい}に{役立|やくだ}つと{考|かんが}えている。",
        "Aは{子|こ}どもの{興味|きょうみ}に{任|まか}せるだけでは{十分|じゅうぶん}ではないと{考|かんが}え、Bは{興味|きょうみ}を{持|も}った{子|こ}どもには{積極的|せっきょくてき}に{勧|すす}めたほうがいいと{考|かんが}えている。",
        "Aは{自然|しぜん}を{知|し}るきっかけにはならないと{考|かんが}え、Bは{子|こ}どものよさや{可能性|かのうせい}を{伸|の}ばすきっかけになると{考|かんが}えている。",
        "Aは{種|しゅ}の{多様性|たようせい}を{知|し}る{上|うえ}で{重要|じゅうよう}だと{考|かんが}え、Bは{成長|せいちょう}{過程|かてい}において{欠|か}かせない{経験|けいけん}だと{考|かんが}えている。",
      ],
      optArti: [
        "A berpendapat itu bermanfaat jika anak dibekali sikap mengamati; B berpendapat itu membantu memahami alam disertai pengalaman nyata.",
        "A berpendapat tidak cukup jika diserahkan pada minat anak; B berpendapat sebaiknya dianjurkan secara aktif pada anak yang berminat.",
        "A berpendapat itu tidak menjadi pemicu untuk mengenal alam; B berpendapat itu menjadi pemicu mengembangkan kelebihan dan potensi anak.",
        "A berpendapat itu penting untuk mengenal keragaman spesies; B berpendapat itu pengalaman yang tak tergantikan dalam proses tumbuh kembang.",
      ],
    },
    64: {
      yomi: "AとBの{認識|にんしき}で{共通|きょうつう}していることは{何|なに}か。",
      arti: "Apa kesamaan pandangan A dan B?",
      optYomi: [
        "{子|こ}どもの{成長|せいちょう}{過程|かてい}で、{自然|しぜん}{保護|ほご}に{対|たい}する{心情|しんじょう}が{深|ふか}められていく。",
        "{子|こ}ども{時代|じだい}の{自然|しぜん}との{触|ふ}れ{合|あ}いを{通|とお}した{学|まな}びが{自然観|しぜんかん}の{基礎|きそ}になる。",
        "{子|こ}どもの{自発的|じはつてき}な{体験|たいけん}や{学|まな}びだけでは{自然観|しぜんかん}の{形成|けいせい}には{十分|じゅうぶん}ではない。",
        "{自然|しぜん}{体験|たいけん}が{多|おお}い{子|こ}どものほうが、{自然|しぜん}{保護|ほご}の{精神|せいしん}が{強|つよ}くなるわけではない。",
      ],
      optArti: [
        "Dalam proses tumbuh kembang anak, perasaan terhadap perlindungan alam makin mendalam.",
        "Pembelajaran melalui interaksi dengan alam di masa kanak-kanak menjadi dasar pandangan tentang alam.",
        "Pengalaman dan pembelajaran spontan anak saja tidak cukup untuk membentuk pandangan tentang alam.",
        "Bukan berarti anak yang banyak berinteraksi dengan alam memiliki semangat perlindungan alam yang lebih kuat.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "①{目標値|もくひょうち}を{設定|せってい}する{仕事|しごと}では、どのような{目標|もくひょう}を{設定|せってい}しようとするか。",
      arti: "Dalam \"① pekerjaan menetapkan nilai target\", target seperti apa yang berusaha ditetapkan?",
      optYomi: [
        "{外部|がいぶ}{環境|かんきょう}や{内部|ないぶ}の{状況|じょうきょう}の{変化|へんか}を{完璧|かんぺき}に{予測|よそく}した{目標|もくひょう}",
        "{現在|げんざい}の{状況|じょうきょう}から{見|み}て{無理|むり}なく{達成|たっせい}される{目標|もくひょう}",
        "{成|な}し{遂|と}げられる{範囲|はんい}の{中|なか}で{最|もっと}も{高|たか}い{目標|もくひょう}",
        "{達成|たっせい}が{難|むずか}しくても{取|と}り{組|く}む{価値|かち}のある{目標|もくひょう}",
      ],
      optArti: [
        "Target yang memprediksi secara sempurna perubahan lingkungan eksternal dan situasi internal",
        "Target yang bisa dicapai tanpa memaksakan diri dilihat dari situasi sekarang",
        "Target paling tinggi dalam batas yang bisa dicapai",
        "Target yang layak diupayakan meski sulit dicapai",
      ],
    },
    66: {
      yomi: "{筆者|ひっしゃ}は、{何|なに}がビジネスチャンスにつながると{述|の}べているか。",
      arti: "Menurut penulis, apa yang mengarah pada peluang bisnis?",
      optYomi: [
        "{創意|そうい}{工夫|くふう}を{生|う}み{出|だ}す{社内|しゃない}{環境|かんきょう}",
        "{社員|しゃいん}にとって{納得感|なっとくかん}のある{目標|もくひょう}{設定|せってい}",
        "{社内外|しゃないがい}の{不確定|ふかくてい}な{変化|へんか}に{対|たい}する{大胆|だいたん}な{予想|よそう}",
        "{社内|しゃない}に{埋|う}もれている{発想|はっそう}や{社外|しゃがい}で{起|お}こる{変化|へんか}",
      ],
      optArti: [
        "Lingkungan internal perusahaan yang melahirkan kreativitas",
        "Penetapan target yang bisa diterima karyawan",
        "Prediksi berani terhadap perubahan tak pasti di dalam dan luar perusahaan",
        "Ide yang terpendam di dalam perusahaan dan perubahan yang terjadi di luar perusahaan",
      ],
    },
    67: {
      yomi: "②{違和感|いわかん}を{覚|おぼ}えるとあるが、どのようなことに{違和感|いわかん}を{覚|おぼ}えているか。",
      arti: "Tertulis \"② merasa janggal\"; hal apa yang terasa janggal?",
      optYomi: [
        "{不確定|ふかくてい}な{要素|ようそ}が{多|おお}いため{目標|もくひょう}を{立|た}てないこと",
        "{周囲|しゅうい}の{状況|じょうきょう}は{変|か}わるのに{目標|もくひょう}を{固定|こてい}すること",
        "{目標|もくひょう}を{立|た}てたのにそれを{口|くち}にしないこと",
        "{目標|もくひょう}を{立|た}てたのにそれを{変|か}えなくてはならないこと",
      ],
      optArti: [
        "Tidak menetapkan target karena banyak unsur yang tidak pasti",
        "Menetapkan target secara kaku padahal situasi sekitar berubah",
        "Sudah menetapkan target tetapi tidak mengucapkannya",
        "Sudah menetapkan target tetapi harus mengubahnya",
      ],
    },
    68: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{実現|じつげん}{不可能|ふかのう}なくらいの{大|おお}きな{目標|もくひょう}を{立|た}てて{達成|たっせい}に{向|む}けて{努力|どりょく}すべきだ。",
        "{自分|じぶん}の{可能性|かのうせい}を{大事|だいじ}にするためには、{大|おお}きな{目標|もくひょう}を{立|た}てるべきではない。",
        "{自分|じぶん}が{持|も}つ{可能性|かのうせい}が{最大限|さいだいげん}に{発揮|はっき}できるような{目標|もくひょう}を{探|さが}し{続|つづ}けることが{重要|じゅうよう}だ。",
        "{目標|もくひょう}を{立|た}てることに{縛|しば}られず、{目|め}の{前|まえ}のことに{最善|さいぜん}の{対応|たいおう}をすることが{重要|じゅうよう}だ。",
      ],
      optArti: [
        "Kita harus menetapkan target besar yang hampir mustahil diwujudkan dan berusaha mencapainya.",
        "Untuk menghargai potensi diri, kita tidak semestinya menetapkan target besar.",
        "Penting untuk terus mencari target yang memungkinkan potensi diri tampil semaksimal mungkin.",
        "Penting untuk tidak terikat pada penetapan target dan menangani hal di depan mata sebaik mungkin.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{次|つぎ}の4{人|にん}は、{読者|どくしゃ}モニターに{応募|おうぼ}しようと{思|おも}っている。{全員|ぜんいん}インターネットを{使|つか}えるパソコンを{持|も}っており、{過去|かこ}にモニターに{応募|おうぼ}したことはない。{応募|おうぼ}{条件|じょうけん}をすべて{満|み}たしているのは{誰|だれ}か。",
      arti: "Empat orang berikut berniat mendaftar sebagai pembaca monitor. Semuanya memiliki komputer yang bisa terhubung ke internet dan belum pernah mendaftar sebagai monitor. Siapa yang memenuhi semua syarat pendaftaran?",
      optYomi: ["{水野|みずの}さん", null, null, "{山田|やまだ}さん"],
      optArti: ["Mizuno-san", "Sou-san", "Chou-san", "Yamada-san"],
    },
    70: {
      yomi: "アンケートに{回答|かいとう}するときに、モニターがすべきことは{何|なに}か。",
      arti: "Apa yang harus dilakukan monitor saat menjawab angket?",
      optYomi: [
        "{指定|してい}{時間|じかん}{内|ない}に{所定|しょてい}のウェブサイトを{通|つう}じて{回答|かいとう}する。",
        "{保管|ほかん}しておいたすべての{新聞|しんぶん}を{読|よ}み{直|なお}して{回答|かいとう}する。",
        "「{実施|じっし}のお{知|し}らせ」を{受信|じゅしん}してから24{時間|じかん}{以内|いない}に{回答|かいとう}する。",
        "{回答|かいとう}{形式|けいしき}を{問|と}わず、すべての{質問|しつもん}に{回答|かいとう}する。",
      ],
      optArti: [
        "Menjawab melalui situs web yang ditentukan dalam waktu yang ditetapkan.",
        "Menjawab setelah membaca ulang semua koran yang disimpan.",
        "Menjawab dalam 24 jam setelah menerima \"pemberitahuan pelaksanaan\".",
        "Menjawab semua pertanyaan apa pun format jawabannya.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：『夫婦格差社会』書評 ──
    "7": {
      yomi: `{以下|いか}は、「{夫婦|ふうふ}{格差|かくさ}{社会|しゃかい}」（{橘木|たちばなき}{俊詔|としあき}、{迫田|さこだ}さやか{著|ちょ}）についての{書評|しょひょう}である。

{貧困|ひんこん}{問題|もんだい}や{格差|かくさ}{問題|もんだい}は、{個人|こじん}{単位|たんい}で{語|かた}られることが{一般的|いっぱんてき}だった。{本書|ほんしょ}は、{日本|にほん}の{格差|かくさ}{研究|けんきゅう}の{第一人者|だいいちにんしゃ}が、{夫婦|ふうふ}{単位|たんい}で{格差|かくさ}{問題|もんだい}を{考|かんが}えることの{重要性|じゅうようせい}を{訴|うった}えるもの[41]。

これまで{経済学|けいざいがく}の{研究者|けんきゅうしゃ}の{間|あいだ}では、{結婚|けっこん}は{所得|しょとく}{格差|かくさ}を{縮小|しゅくしょう}するという{説|せつ}が{有力|ゆうりょく}だった。その{理由|りゆう}は、{夫|おっと}の{稼|かせ}ぎの{多寡|たか}（{注|ちゅう}1）が{妻|つま}の{就労|しゅうろう}に{影響|えいきょう}すると{考|かんが}えられてきたからである。[42]、{夫|おっと}の{所得|しょとく}が{多|おお}ければ、{妻|つま}は{専業|せんぎょう}{主婦|しゅふ}となり、{逆|ぎゃく}に{少|すく}なければ{妻|つま}が{家計|かけい}を{助|たす}けるため{働|はたら}きに{出|で}るということだ。

{著者|ちょしゃ}らはさまざまな{統計|とうけい}を{駆使|くし}しつつ、この{仮説|かせつ}の{妥当性|だとうせい}を{検証|けんしょう}していく。まず、{近年|きんねん}では、{夫|おっと}の{所得|しょとく}が{増|ふ}えても{妻|つま}の{有業率|ゆうぎょうりつ}（{注|ちゅう}2）が{下|さ}がっていないことを{示|しめ}す。{結婚|けっこん}{後|ご}も{女性|じょせい}が{働|はたら}きつづけることが{以前|いぜん}より{一般的|いっぱんてき}に[43]。{次|つぎ}に、{働|はたら}いている{妻|つま}の{所得|しょとく}{格差|かくさ}が{年々|ねんねん}{大|おお}きくなっていることから、{妻|つま}の{就業|しゅうぎょう}によって{夫婦|ふうふ}の{所得|しょとく}{格差|かくさ}は{広|ひろ}がる{可能性|かのうせい}が{高|たか}いことを{示|しめ}す。そして、{日本|にほん}にも{高|こう}{所得者|しょとくしゃ}{同士|どうし}のパワーカップル、{低|てい}{所得者|しょとくしゃ}{同士|どうし}のウィークカップルが{少|すく}なからず{存在|そんざい}するため、{夫婦|ふうふ}{単位|たんい}の{所得|しょとく}{格差|かくさ}にさらに{拍車|はくしゃ}がかかっていると{説明|せつめい}する。[44]{生|う}まれる{格差|かくさ}は{若年|じゃくねん}{夫婦|ふうふ}で{群|ぐん}を{抜|ぬ}いて{大|おお}きい。

{離婚|りこん}が{所得|しょとく}{格差|かくさ}に{与|あた}える{影響|えいきょう}を{分析|ぶんせき}しているのも{本書|ほんしょ}の{特徴|とくちょう}だ。{外国|がいこく}と{異|こと}なり、{日本|にほん}では{低|てい}{学歴|がくれき}のカップルほど{離婚率|りこんりつ}が{高|たか}いという。さらに、{夫|おっと}の{失業|しつぎょう}も{離婚率|りこんりつ}を{高|たか}める{原因|げんいん}となるそうだ。これらはともに{貧困|ひんこん}につながる。「{金|かね}の{切|き}れ{目|め}が{縁|えん}の{切|き}れ{目|め}」と{著者|ちょしゃ}はいうが、なんともやりきれない{気持|きも}ちにさせる。

このように{格差|かくさ}や{貧困|ひんこん}をテーマとするだけに、{本書|ほんしょ}にはどうしても{暗|くら}い{話題|わだい}が{多|おお}くなりがちだ。しかし、それでも{最後|さいご}まで{読者|どくしゃ}を{引|ひ}きつけるのは、その{行間|ぎょうかん}から{経済的|けいざいてき}{弱者|じゃくしゃ}に{対|たい}する{著者|ちょしゃ}たちのやさしい{目線|めせん}が{伝|つた}わってくるからだろう。{今後|こんご}の{日本|にほん}{社会|しゃかい}のあるべき{姿|すがた}を{考|かんが}える{上|うえ}でも{大|おお}いに{勉強|べんきょう}になる[45]。
（{中島|なかじま}{隆信|たかのぶ}　{読売|よみうり}{新聞|しんぶん}2013{年|ねん}3{月|がつ}24{日|か}{付|づけ}{朝刊|ちょうかん}による）
（{注|ちゅう}1）{多寡|たか}（たか）：{多|おお}いか{少|すく}ないか
（{注|ちゅう}2）{有業率|ゆうぎょうりつ}：{仕事|しごと}に{就|つ}いている{割合|わりあい}`,
      arti: `Berikut ini adalah ulasan buku "Masyarakat Kesenjangan Suami-Istri" (karya Tachibanaki Toshiaki dan Sakoda Sayaka).

Masalah kemiskinan dan kesenjangan umumnya dibahas dengan satuan individu. Buku ini [41] buku di mana pakar terkemuka penelitian kesenjangan di Jepang menyerukan pentingnya memikirkan masalah kesenjangan dengan satuan pasangan suami-istri.

Selama ini di kalangan peneliti ekonomi, pendapat yang kuat adalah bahwa pernikahan memperkecil kesenjangan pendapatan. Alasannya, banyak-sedikitnya (catatan 1) penghasilan suami dianggap memengaruhi apakah istri bekerja. [42], jika pendapatan suami besar, istri menjadi ibu rumah tangga penuh, sebaliknya jika kecil, istri pergi bekerja untuk membantu ekonomi keluarga.

Para penulis memanfaatkan berbagai statistik untuk menguji kesahihan hipotesis ini. Pertama, mereka menunjukkan bahwa akhir-akhir ini, meskipun pendapatan suami naik, tingkat bekerja (catatan 2) istri tidak turun. Perempuan yang terus bekerja setelah menikah [43] lebih umum daripada dulu. Selanjutnya, karena kesenjangan pendapatan istri yang bekerja makin besar dari tahun ke tahun, mereka menunjukkan bahwa kerja istri kemungkinan besar memperlebar kesenjangan pendapatan pasangan. Lalu mereka menjelaskan bahwa di Jepang pun cukup banyak "power couple" sesama berpenghasilan tinggi dan "weak couple" sesama berpenghasilan rendah, sehingga kesenjangan pendapatan per pasangan makin dipercepat. Kesenjangan yang lahir [44] jauh paling besar pada pasangan muda.

Ciri lain buku ini adalah analisis dampak perceraian terhadap kesenjangan pendapatan. Berbeda dengan luar negeri, di Jepang makin rendah pendidikan pasangan, makin tinggi tingkat perceraiannya. Lebih lanjut, kehilangan pekerjaan suami juga menjadi penyebab naiknya tingkat perceraian. Keduanya berujung pada kemiskinan. Penulis berkata "putusnya uang adalah putusnya hubungan", dan itu membuat perasaan sungguh tak tertahankan.

Karena bertema kesenjangan dan kemiskinan, buku ini mau tak mau cenderung banyak berisi topik yang suram. Namun, buku ini tetap memikat pembaca sampai akhir, mungkin karena dari sela-sela barisnya terasa pandangan lembut para penulis terhadap kaum yang lemah secara ekonomi. [45] sangat bermanfaat juga untuk memikirkan wujud ideal masyarakat Jepang ke depannya.
(Dari ulasan Nakajima Takanobu, Yomiuri Shimbun edisi pagi 24 Maret 2013)
(Catatan 1) 多寡: banyak atau sedikit
(Catatan 2) 有業率: persentase orang yang bekerja`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `「できる{人|ひと}のモノサシ」は、ごく{一部|いちぶ}であるエリートにしか{通用|つうよう}しません。でも{大多数|だいたすう}に{属|ぞく}している{平凡|へいぼん}な{自分|じぶん}がもつ「ふつうのモノサシ」は、{世|よ}の{中|なか}の{多|おお}くの{人|ひと}に{通用|つうよう}するモノサシです。その「ふつうのモノサシ」からこそ、{多|おお}くの{人|ひと}に{共感|きょうかん}されるヒット{商品|しょうひん}が{生|う}み{出|だ}せると{思|おも}うのです。

{自分|じぶん}は{平凡|へいぼん}だとか、つまらない{人間|にんげん}だと{思|おも}っている{人|ひと}にこそ、「{売|う}れる{発想|はっそう}」がわき、「{売|う}れるシナリオ」が{組|く}み{立|た}てられ、「{売|う}れる{商品|しょうひん}」をつくれるのではないか。{私|わたし}はそんなふうに{考|かんが}えています。
（{吉川|よしかわ}{美樹|みき}『{半径|はんけい}1メートルの「{売|う}れる！」{発想術|はっそうじゅつ}』による）`,
      arti: `"Tolok ukur orang hebat" hanya berlaku bagi segelintir elite. Tetapi "tolok ukur biasa" yang dimiliki diri kita yang biasa-biasa saja, yang termasuk mayoritas, adalah tolok ukur yang berlaku bagi banyak orang di masyarakat. Saya rasa justru dari "tolok ukur biasa" itulah bisa lahir produk laris yang disukai banyak orang.

Justru orang yang merasa dirinya biasa-biasa saja atau membosankanlah yang bisa memunculkan "ide yang laku", menyusun "skenario yang laku", dan membuat "produk yang laku". Begitulah pendapat saya.
(Dari buku karya Yoshikawa Miki, teknik ide "laku!" dalam radius 1 meter)`,
    },
    "8-2": {
      yomi: `グーテンベルクの{活版|かっぱん}{印刷|いんさつ}{革命|かくめい}から{約|やく}500{年|ねん}。{今世紀|こんせいき}、デジタル{技術|ぎじゅつ}による{情報|じょうほう}{爆発|ばくはつ}の{時代|じだい}が{始|はじ}まった。

だれもが{発信者|はっしんしゃ}になるインターネット{世界|せかい}で、すでに{情報|じょうほう}は{飽和|ほうわ}している。すると、「いかに{蓄積|ちくせき}された{情報|じょうほう}を{統合的|とうごうてき}に{再|さい}{利用|りよう}するか」がキー（{注|ちゅう}）になる。{大量|たいりょう}に{蓄積|ちくせき}された{情報|じょうほう}の{中|なか}から、{重要|じゅうよう}なものを{発掘|はっくつ}して{新|あら}たな{創造|そうぞう}に{結|むす}びつけていく{技術|ぎじゅつ}。

それは{古代|こだい}から{書物|しょもつ}を{大量|たいりょう}に{蓄積|ちくせき}し、{索引|さくいん}{検索|けんさく}によって{利用|りよう}できるようにしてきた{図書館|としょかん}の{基本|きほん}システムそのものだ。{図書館|としょかん}は、{私|わたし}たちが{思|おも}っているよりはるかに{未来的|みらいてき}なものだ。
（{朝日|あさひ}{新聞|しんぶん}グループ　2013{年|ねん}8{月|がつ}18{日|にち}{付|づけ}による）
（{注|ちゅう}）キー：ここでは、{重要|じゅうよう}な{点|てん}`,
      arti: `Sekitar 500 tahun sejak revolusi cetak huruf lepas Gutenberg. Abad ini dimulailah era ledakan informasi berkat teknologi digital.

Di dunia internet di mana siapa pun menjadi pengirim informasi, informasi sudah jenuh. Maka, "bagaimana memanfaatkan kembali informasi yang terkumpul secara terpadu" menjadi kunci (catatan). Teknologi untuk menggali hal penting dari informasi yang terkumpul dalam jumlah besar dan menghubungkannya dengan kreasi baru.

Itu tak lain adalah sistem dasar perpustakaan, yang sejak zaman kuno mengumpulkan buku dalam jumlah besar dan membuatnya bisa dimanfaatkan lewat pencarian indeks. Perpustakaan jauh lebih futuristis daripada yang kita kira.
(Dari Asahi Shimbun Group, tanggal 18 Agustus 2013)
(Catatan) キー: di sini, poin penting`,
    },
    "8-3": {
      yomi: `{職業|しょくぎょう}として{芸術家|げいじゅつか}や{学者|がくしゃ}、あるいは{創造|そうぞう}にかかわるひとびととは{生涯|しょうがい}コドモとしての{部分|ぶぶん}がその{作品|さくひん}をつくる。その{部分|ぶぶん}の{水分|すいぶん}が{蒸発|じょうはつ}せぬよう{心|こころ}がけねばならないが、このことは{生活人|せいかつじん}のすべてに{通|つう}じることである。{万人|ばんにん}にとって{感動|かんどう}のある{人生|じんせい}を{送|おく}るためには、{自分|じぶん}のなかのコドモを{蒸発|じょうはつ}させてはならない。

じつをいうと、この{世|よ}のたいていの{職業|しょくぎょう}は、オトナの{部分|ぶぶん}で{成立|せいりつ}している。とくに{法律|ほうりつ}や{経理|けいり}のビジネスの{分野|ぶんや}はそうである。ところが、うれしいことに、そういう{職業人|しょくぎょうじん}のなかに{豊潤|ほうじゅん}な{鑑賞家|かんしょうか}や{趣味人|しゅみじん}が{多|おお}い。
（{司馬|しば}{遼太郎|りょうたろう}『{風塵抄|ふうじんしょう}』による）`,
      arti: `Bagi orang yang berprofesi sebagai seniman atau ilmuwan, atau orang-orang yang terlibat dalam penciptaan, sisi kanak-kanak seumur hiduplah yang menciptakan karya mereka. Mereka harus berhati-hati agar "kelembapan" sisi itu tidak menguap, tetapi hal ini berlaku bagi semua orang yang menjalani kehidupan. Agar setiap orang bisa menjalani hidup yang penuh haru, kita tidak boleh membiarkan sisi kanak-kanak dalam diri kita menguap.

Sebenarnya, sebagian besar pekerjaan di dunia ini bertumpu pada sisi dewasa. Terutama bidang bisnis hukum dan akuntansi. Namun, menggembirakannya, di antara para profesional seperti itu banyak penikmat seni dan orang berhobi yang kaya rasa.
(Dari buku karya Shiba Ryotaro, "Fujinsho")`,
    },
    "8-4": {
      yomi: `{我々|われわれ}は{裸|はだか}の{眼|め}でものを{見|み}ているように{思|おも}っているが、{実際|じっさい}そうではない。{我々|われわれ}は、{常識|じょうしき}という{色|いろ}{眼鏡|めがね}でものを{見|み}ている。そして、{常識|じょうしき}を{作|つく}ったのは、{過去|かこ}の{偉大|いだい}な{人間|にんげん}であり、その{偉大|いだい}な{人間|にんげん}はある{学問|がくもん}や{芸術|げいじゅつ}を{創|つく}り{出|だ}し、そして、{新|あたら}しく{世界|せかい}を{見|み}る{眼|め}を{我々|われわれ}に{教|おし}えた。その{眼|め}が{歴史的|れきしてき}に{我々|われわれ}に{伝承|でんしょう}され、{我々|われわれ}はその{眼|め}でもって、ものを{見|み}、しかも{裸|はだか}の{眼|め}でものを{見|み}ていると{思|おも}っている。しかし、{一|ひと}つの{眼|め}である{限|かぎ}り、それは{世界|せかい}を歪（ゆが）んで{見|み}ているのである。その{眼|め}からはどうしても{見|み}えない{何|なに}かがあるのである。
（{梅原|うめはら}{猛|たけし}『{饗宴|きょうえん}―{梅原|うめはら}{猛|たけし}　{随想|ずいそう}と{対話|たいわ}』による）`,
      arti: `Kita mengira kita melihat segala sesuatu dengan mata telanjang, tetapi kenyataannya tidak begitu. Kita melihat segala sesuatu melalui kacamata berwarna bernama akal sehat. Yang menciptakan akal sehat adalah orang-orang besar masa lalu; orang-orang besar itu menciptakan ilmu atau seni tertentu, lalu mengajarkan kepada kita mata baru untuk melihat dunia. Mata itu diwariskan kepada kita secara historis, dan kita melihat segala sesuatu dengan mata itu, sambil mengira kita melihat dengan mata telanjang. Namun, selama itu hanya satu mata, ia melihat dunia secara terdistorsi. Ada sesuatu yang bagaimanapun tidak terlihat dari mata itu.
(Dari buku karya Umehara Takeshi, "Kyoen – esai dan dialog Umehara Takeshi")`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{私|わたし}たちは、{日々|ひび}、{大量|たいりょう}の{情報|じょうほう}を{処理|しょり}しなければならない{現代|げんだい}において、{本|ほん}もまた、「できるだけ{速|はや}く、たくさん{読|よ}まなければいけない」という{一種|いっしゅ}の{強迫|きょうはく}（{注|ちゅう}1）{観念|かんねん}にとらわれている。「{速読|そくどく}コンプレックス」と{言|い}い{換|か}えてもいいかもしれない。しかも、{楽|らく}をしてそれができるのであれば、{言|い}うことはない。巷（ちまた）に溢（あふ）れかえっている{速読法|そくどくほう}を{説|と}く{本|ほん}は、そうした{心理|しんり}に{巧|たく}みにつけこむ（{注|ちゅう}2）ように{書|か}かれている。

もちろん、{時|とき}と{場合|ばあい}によっては、{速|はや}く{読|よ}むことも{必要|ひつよう}だろう。「{明日|あした}までに{大量|たいりょう}の{資料|しりょう}を{読|よ}んで{書類|しょるい}を{作|つく}らなければいけない」といった{状況下|じょうきょうか}では、{速読|そくどく}や{斜|なな}め{読|よ}み（{注|ちゅう}3）は{避|さ}けられないだろう。しかしそれは、{単|たん}に{一時的|いちじてき}な{情報|じょうほう}の{処理|しょり}であり、{書|か}かれた{内容|ないよう}を{十分|じゅうぶん}に{理解|りかい}し、その{知識|ちしき}を、{自分|じぶん}の{財産|ざいさん}として{身|み}につけるための{読書|どくしょ}ではない。{単|たん}に、{情報|じょうほう}の{渦|うず}の{中|なか}に{否応|いやおう}なく{巻|ま}き{込|こ}まれてしまっているだけで、{自分|じぶん}の{人生|じんせい}を、{今日|きょう}のこの{瞬間|しゅんかん}までよりも、さらに{豊|ゆた}かで、{個性的|こせいてき}なものにするための{読書|どくしょ}ではないのである。

{読書|どくしょ}を{楽|たの}しむ{秘訣|ひけつ}は、{何|なに}よりも、「{速読|そくどく}コンプレックス」から{解放|かいほう}されることである！{本|ほん}を{速|はや}く{読|よ}まなければならない{理由|りゆう}は{何|なに}もない。{速|はや}く{読|よ}もうと{思|おも}えば、{速|はや}く{読|よ}めるような{内容|ないよう}の{薄|うす}い{本|ほん}へと{自然|しぜん}と{手|て}が{伸|の}びがちである。その{反対|はんたい}に、ゆっくり{読|よ}むことを{心|こころ}がけていれば、{時間|じかん}をかけるにふさわしい、{手応|てごた}えのある{本|ほん}を{好|この}むようになるだろう。
（{平野|ひらの}{啓一郎|けいいちろう}『{本|ほん}の{読|よ}み{方|かた}　スロー・リーディングの{実践|じっせん}』による）
（{注|ちゅう}1）{強迫|きょうはく}{観念|かんねん}にとらわれている：ここでは、{強|つよ}い{思|おも}いから{逃|に}げられない
（{注|ちゅう}2）〜に{巧|たく}みにつけこむ：ここでは、〜をうまく{利用|りよう}する
（{注|ちゅう}3）{斜|なな}め{読|よ}み：ざっと{読|よ}むこと`,
      arti: `Di zaman modern ketika kita setiap hari harus memproses informasi dalam jumlah besar, dalam hal buku pun kita terbelenggu semacam obsesi (catatan 1) bahwa "harus membaca secepat dan sebanyak mungkin". Boleh juga disebut "kompleks membaca cepat". Terlebih lagi, kalau itu bisa dilakukan tanpa susah payah, sempurna sudah. Buku-buku yang mengajarkan teknik membaca cepat, yang membanjiri pasaran, ditulis seakan dengan piawai memanfaatkan (catatan 2) psikologi semacam itu.

Tentu saja, tergantung waktu dan situasi, membaca cepat juga perlu. Dalam situasi seperti "harus membaca banyak bahan dan membuat dokumen sebelum besok", membaca cepat atau membaca sekilas (catatan 3) mungkin tak terhindarkan. Tetapi itu hanyalah pemrosesan informasi sementara, bukan membaca untuk memahami isi tulisan dengan baik dan menjadikan pengetahuan itu milik kita sendiri. Itu hanya terseret mau tak mau ke dalam pusaran informasi, bukan membaca untuk membuat hidup kita lebih kaya dan lebih berkarakter daripada sampai detik ini.

Rahasia menikmati membaca, lebih dari apa pun, adalah terbebas dari "kompleks membaca cepat"! Tidak ada alasan apa pun yang mengharuskan kita membaca buku dengan cepat. Kalau berniat membaca cepat, tangan kita cenderung dengan sendirinya meraih buku berisi tipis yang bisa dibaca cepat. Sebaliknya, kalau kita berusaha membaca pelan-pelan, kita akan menyukai buku yang berbobot, yang layak dibaca dengan meluangkan waktu.
(Dari buku karya Hirano Keiichiro, "Cara Membaca Buku – praktik slow reading")
(Catatan 1) 強迫観念にとらわれている: di sini, tidak bisa lepas dari pikiran yang kuat
(Catatan 2) 〜に巧みにつけこむ: di sini, memanfaatkan ~ dengan lihai
(Catatan 3) 斜め読み: membaca sekilas`,
    },
    "9-2": {
      yomi: `{中学生|ちゅうがくせい}や{高校生|こうこうせい}の{頃|ころ}、{歴史|れきし}の{時間|じかん}が{退屈|たいくつ}だった。

（{中略|ちゅうりゃく}）

そんな{私|わたし}が{四十歳|よんじっさい}の{頃|ころ}から{歴史|れきし}に{興味|きょうみ}を{持|も}ち{始|はじ}めた。{何|なに}かを{調|しら}べるとその{辺|あた}りに{知識|ちしき}の{島|しま}ができ、{別|べつ}のことを{調|しら}べるとまた{別|べつ}の{島|しま}ができる。そのうちに{孤立|こりつ}していたはずの{二|ふた}つの{島|しま}が{橋|はし}でつながる。「こういうことだったのか」という①{驚|おどろ}きがある。{一見|いっけん}{関係|かんけい}のなさそうな{二|ふた}つのものが{結|むす}びつくという{意外性|いがいせい}は、{自然|しぜん}{科学|かがく}における{醍醐味|だいごみ}の{最|さい}たるものでもある。{歴史|れきし}を{調|しら}べれば{調|しら}べるほど{島々|しまじま}がネットワークのように{結|むす}ばれて{行|い}く。{人間|にんげん}や{情報|じょうほう}は{地球上|ちきゅうじょう}を{移動|いどう}するから{当然|とうぜん}なのだが、ネットワークの{構築|こうちく}はなぜか{脳|のう}にすこぶる{心地|ここち}よい。その{上|うえ}あらゆる{現象|げんしょう}に{人間|にんげん}が{絡|から}んでいて{余計|よけい}に{面白|おもしろ}い。②{歴史|れきし}とは{地球|ちきゅう}を{舞台|ぶたい}とした{途方|とほう}もなく（{注|ちゅう}1）{壮大|そうだい}な{演劇|えんげき}なのだ。{自分|じぶん}や{先祖|せんぞ}も{舞台|ぶたい}の{隅|すみ}の{隅|すみ}で{参加|さんか}している。それに{人間|にんげん}の{本質|ほんしつ}は{変|か}わらないから、{人|ひと}は{似|に}た{状況|じょうきょう}で{似|に}たヘマ（{注|ちゅう}2）を{何度|なんど}も{繰返|くりかえ}す。だから{現在|げんざい}を{考|かんが}えるのに{実|じつ}に{役立|やくだ}つ。

{若|わか}い{頃|ころ}にこの{面白|おもしろ}さに{気付|きづ}いていれば、{今|いま}と{違|ちが}い{記憶力|きおくりょく}もよかったから{強大|きょうだい}かつ{緻密|ちみつ}なネットワークを{完成|かんせい}することができ{演劇|えんげき}をもっと{深|ふか}く{味|あじ}わえたのにとも{思|おも}う。{無理|むり}だったかも{知|し}れない。{中年|ちゅうねん}にさしかかって{初|はじ}めてこれまで{生|い}きてきた、そしてそう{遠|とお}くない{将来|しょうらい}に{消|き}える{自分|じぶん}の{立位置|たちいち}を{確|たし}かめたくなるからだ。{家系|かけい}を{調|しら}べたくなったり{先祖|せんぞ}や{自|みずか}らがどのような{時代|じだい}の{流|なが}れの{中|なか}で{生|せい}を{受|う}け{生|せい}を{営|いとな}んできたかを{知|し}りたくなる。{無邪気|むじゃき}なままこの{世|よ}から{退場|たいじょう}したくなくなるのだ。{十代|じゅうだい}で{歴史|れきし}に{興味|きょうみ}を{持|も}つ{者|もの}の{気持|きもち}は{私|わたし}には{不思議|ふしぎ}だが、{中年|ちゅうねん}になって{歴史|れきし}に{興味|きょうみ}を{持|も}たない{者|もの}の{気持|きもち}はそれ{以上|いじょう}に{不思議|ふしぎ}だ。
（{藤原|ふじわら}{正彦|まさひこ}『{週刊|しゅうかん}{新潮|しんちょう}』2010{年|ねん}10{月|がつ}28{日|にち}{号|ごう}による）
（{注|ちゅう}1）{途方|とほう}もない：とんでもない。{比|くら}べるものもない。
（{注|ちゅう}2）ヘマ：{失敗|しっぱい}`,
      arti: `Semasa SMP dan SMA, pelajaran sejarah membosankan bagi saya.

(dipersingkat)

Saya yang seperti itu mulai tertarik pada sejarah sejak sekitar usia empat puluh. Begitu menyelidiki sesuatu, terbentuklah pulau pengetahuan di sekitarnya, dan begitu menyelidiki hal lain, terbentuk pulau lain. Lama-lama, dua pulau yang seharusnya terpisah terhubung oleh jembatan. Ada ① rasa takjub: "Oh, jadi begitu rupanya." Kejutan bahwa dua hal yang sekilas tampak tidak berhubungan ternyata terhubung juga merupakan kenikmatan puncak dalam ilmu alam. Makin diselidiki, pulau-pulau sejarah makin terhubung seperti jaringan. Wajar saja karena manusia dan informasi berpindah-pindah di muka bumi, tetapi entah mengapa membangun jaringan itu sangat menyenangkan bagi otak. Terlebih lagi, manusia terlibat dalam segala fenomena sehingga makin menarik. ② Sejarah adalah drama panggung yang luar biasa (catatan 1) megah dengan bumi sebagai panggungnya. Saya dan leluhur saya pun ikut tampil di pojok paling pojok panggung. Lagi pula, karena hakikat manusia tidak berubah, manusia berulang kali melakukan kesalahan (catatan 2) serupa dalam situasi serupa. Karena itu sejarah sungguh berguna untuk memikirkan masa kini.

Saya juga berpikir, andai saya menyadari asyiknya hal ini saat muda, ingatan saya waktu itu lebih baik daripada sekarang, jadi saya bisa menyelesaikan jaringan yang kuat dan rinci dan bisa menikmati drama itu lebih dalam. Tapi mungkin itu mustahil. Sebab baru setelah memasuki paruh baya kita ingin memastikan posisi diri kita yang telah hidup sampai sekarang dan akan lenyap di masa depan yang tidak terlalu jauh. Kita jadi ingin menyelidiki silsilah keluarga, ingin tahu dalam arus zaman seperti apa leluhur dan diri kita lahir dan menjalani hidup. Kita jadi tidak ingin keluar dari dunia ini dalam keadaan polos. Perasaan orang yang tertarik pada sejarah saat remaja aneh bagi saya, tetapi perasaan orang yang tidak tertarik pada sejarah setelah paruh baya lebih aneh lagi.
(Dari tulisan Fujiwara Masahiko, majalah "Shukan Shincho" edisi 28 Oktober 2010)
(Catatan 1) 途方もない: luar biasa, tak tertandingi
(Catatan 2) ヘマ: kesalahan, kegagalan`,
    },
    "9-3": {
      yomi: `{人類|じんるい}は、「{都市|とし}」という{空間|くうかん}をつくったときに、それまでの{部族的|ぶぞくてき}（{注|ちゅう}1）、あるいは{村落的|そんらくてき}な{社会|しゃかい}{空間|くうかん}とは{本質的|ほんしつてき}に{異|こと}なる{社会|しゃかい}{空間|くうかん}を{経験|けいけん}した。{村落|そんらく}においては{人々|ひとびと}は、{共|とも}に{生|い}き、{共|とも}に{死|し}んでいくものとして、互（たがい）のこと、そのまた{親|おや}の{世代|せだい}のこと、{祖先|そせん}のことまで{熟知|じゅくち}していることを{前提|ぜんてい}とした{社会的|しゃかいてき}な{関係|かんけい}を{形成|けいせい}する。{都市|とし}の{街頭|がいとう}においては、{人々|ひとびと}は、{互|たが}いの{匿名性|とくめいせい}を{前提|ぜんてい}として、{見|み}ず{知|し}らずの{他人|たにん}{同士|どうし}の{視線|しせん}によるコミュニケーションを{交|か}わす。{都市|とし}のなかの{市場|しじょう}では{相手|あいて}の{人柄|ひとがら}や{家族|かぞく}のことなどなにも{知|し}らないことを{前提|ぜんてい}とした{商品|しょうひん}の{売買|ばいばい}や{機能的|きのうてき}な{結|むす}びつきを{形成|けいせい}する。さらにそれを{恒常化|こうじょうか}した{組織|そしき}も、{村落|そんらく}の{人|ひと}と{人|ひと}の{関係|かんけい}とは{違|ちが}って{人々|ひとびと}の{分業|ぶんぎょう}を{最適|さいてき}な{状態|じょうたい}で{実現|じつげん}するための{機能的|きのうてき}なつながりである。

{都市|とし}の{社会|しゃかい}{空間|くうかん}の{経験|けいけん}は、{人類|じんるい}にとっての{社会|しゃかい}のイメージを{決定的|けっていてき}に{変|か}えたし、したがって{自己|じこ}のイメージも{変|か}えた。{人々|ひとびと}は、{自分|じぶん}を{個人|こじん}という{単位|たんい}として{意識|いしき}する{機会|きかい}が{多|おお}くなり、{財|ざい}は{一族|いちぞく}（{注|ちゅう}2）や{集団|しゅうだん}のものではなく、{個人|こじん}のものと{意識|いしき}され、{才能|さいのう}は{個々|ここ}の{人間|にんげん}の{属性|ぞくせい}（{注|ちゅう}3）として{考|かんが}えられるようになった。{都市|とし}の{人間|にんげん}の{間|あいだ}にも、うわさが{飛|と}び{交|か}うような{口頭|こうとう}のコミュニケーションは{発達|はったつ}したが、{都市|とし}{社会|しゃかい}が{大型化|おおがたか}し、{複雑化|ふくざつか}するにしたがって、それだけでは{情報|じょうほう}の{共有|きょうゆう}に{不安定性|ふあんていせい}が{拡大|かくだい}してくる。マスメディアは、{誰|だれ}でもアクセス{可能|かのう}であることを{原理|げんり}とする{一|いち}{方向|ほうこう}の{公開型|こうかいがた}メディアである。そのため、{都市型|としがた}のコミュニケーションを{補完|ほかん}（{注|ちゅう}4）し、あるいはそれを{強化|きょうか}する{機能|きのう}をになっている。
（{成田|なりた}{康昭|やすあき}『メディア{空間|くうかん}{文化論|ぶんかろん}―いくつもの{私|わたし}との{遭遇|そうぐう}』による）
（{注|ちゅう}1）{部族|ぶぞく}：{共通|きょうつう}の{文化|ぶんか}を{持|も}つ{地域的|ちいきてき}{集団|しゅうだん}
（{注|ちゅう}2）{一族|いちぞく}：{血縁|けつえん}{関係|かんけい}の{集団|しゅうだん}
（{注|ちゅう}3）{属性|ぞくせい}：{人|ひと}やものに{備|そな}わる{固有|こゆう}の{性質|せいしつ}
（{注|ちゅう}4）{補完|ほかん}する：{補|おぎな}う`,
      arti: `Ketika umat manusia menciptakan ruang yang disebut "kota", mereka mengalami ruang sosial yang pada hakikatnya berbeda dari ruang sosial kesukuan (catatan 1) atau pedesaan sebelumnya. Di desa, orang-orang membentuk hubungan sosial dengan anggapan dasar bahwa mereka hidup dan mati bersama, saling mengenal dengan baik satu sama lain, generasi orang tua mereka, bahkan leluhur mereka. Di jalanan kota, orang-orang, dengan anggapan dasar saling anonim, bertukar komunikasi lewat tatapan sesama orang asing yang tidak saling kenal. Di pasar dalam kota, terbentuk jual-beli barang dan hubungan fungsional dengan anggapan dasar tidak mengetahui apa pun tentang kepribadian atau keluarga lawan. Lebih lanjut, organisasi yang menjadikannya tetap pun, berbeda dengan hubungan antarmanusia di desa, merupakan hubungan fungsional untuk mewujudkan pembagian kerja dalam keadaan optimal.

Pengalaman ruang sosial perkotaan secara menentukan mengubah gambaran masyarakat bagi umat manusia, dan karena itu juga mengubah gambaran diri. Orang-orang makin sering menyadari diri sebagai satuan bernama individu, harta dianggap milik individu bukan milik klan (catatan 2) atau kelompok, dan bakat dianggap sebagai atribut (catatan 3) masing-masing orang. Di antara orang kota pun berkembang komunikasi lisan seperti desas-desus yang beredar, tetapi seiring kota makin besar dan rumit, hanya dengan itu ketidakstabilan dalam berbagi informasi makin meluas. Media massa adalah media terbuka satu arah yang berprinsip bahwa siapa pun bisa mengaksesnya. Karena itu, media massa mengemban fungsi melengkapi (catatan 4) atau memperkuat komunikasi khas perkotaan.
(Dari buku karya Narita Yasuaki, teori budaya ruang media)
(Catatan 1) 部族: kelompok kedaerahan yang memiliki budaya bersama
(Catatan 2) 一族: kelompok yang memiliki hubungan darah
(Catatan 3) 属性: sifat khas yang melekat pada orang atau benda
(Catatan 4) 補完する: melengkapi`,
    },

    // ── 問題10：作曲について ──
    "10": {
      yomi: `{私|わたし}は、{一人|ひとり}の{作曲家|さっきょくか}として、{色々|いろいろ}な{機会|きかい}に、{自分|じぶん}の{作曲|さっきょく}について{語|かた}ってきた。しかしそれは、{私|わたし}{自身|じしん}が、{自分|じぶん}の{作曲|さっきょく}についてよく{知|し}っている、ということを{意味|いみ}するわけではない。{私|わたし}の{作曲|さっきょく}には、{言葉|ことば}で{説明|せつめい}できるような{組織的|そしきてき}な{方法論|ほうほうろん}はない。{作曲|さっきょく}するときの{私|わたし}は、{単|たん}に、{感覚|かんかく}に{頼|たよ}って、{直観的|ちょっかんてき}に「これが{好|い}い」と{納得|なっとく}できる{音|おと}の{連|つら}なりを{探|さが}し{続|つづ}ける。そして、「ここが{曲|きょく}の{終|お}わりだ」と{感|かん}じる{処|ところ}に{到|いた}ったとき、{一|ひと}つの{曲|きょく}の{出来上|できあ}がりとなる。ただそれだけである。「これが{好|い}い」あるいは「ここが{曲|きょく}の{終|お}わりだ」という{感覚的|かんかくてき}な{判断|はんだん}の{根拠|こんきょ}は、{説明|せつめい}できない。そして、そのようにして{作|つく}った{曲|きょく}が{何|なに}であるのかについても、よく{分|わ}からないのである。

もっとも、{私|わたし}は、{自分|じぶん}の{作曲|さっきょく}について{本当|ほんとう}に{何|なに}も{知|し}らないというわけではない。そもそも、どうやって{何|なに}を{作|つく}るかということを{全|まった}く{知|し}らずに{物|もの}を{作|つく}ることは、{不可能|ふかのう}である。{例|たと}えば、もし、ガラスのことも、そして、{花瓶|かびん}というものがどのようなものかも{知|し}らなければ、ガラスの{花瓶|かびん}を{作|つく}ることはできない。{同様|どうよう}に、{作曲|さっきょく}の{場合|ばあい}にも、{素材|そざい}である{音|おと}と、その{音|おと}の{構成|こうせい}の{仕方|しかた}について{知|し}らなければ、そしてさらに、{音楽|おんがく}というものがどのようなものなのかを{知|し}らなければ、{曲|きょく}を{作|つく}ることなどできない。{作曲|さっきょく}をするからには、{作曲者|さっきょくしゃ}は、{当然|とうぜん}、それらについて{一応|いちおう}{知|し}っている。

（{中略|ちゅうりゃく}）

{作曲|さっきょく}は、{必|かなら}ず、{何|なん}らかの{伝統|でんとう}における「{基本的|きほんてき}な」{知識|ちしき}を{前提|ぜんてい}としている。だが、その「{基本的|きほんてき}な」{知識|ちしき}をそのまま（{大抵|たいてい}の{場合|ばあい}、{無意識的|むいしきてき}に）{受|う}け{容|い}れてその{範囲|はんい}で{作曲|さっきょく}する「{保守的|ほしゅてき}な」{作曲家|さっきょくか}{達|たち}がいる{一方|いっぽう}で、{前衛|ぜんえい}{主義|しゅぎ}に{代表|だいひょう}されるような、{新|あら}たな{音楽|おんがく}の{可能性|かのうせい}を{求|もと}める{作曲家|さっきょくか}{達|たち}は、{自|みずか}らが{出発点|しゅっぱつてん}とした{伝統|でんとう}における「{基本的|きほんてき}な」{知識|ちしき}の{外|そと}に{踏|ふ}み{出|だ}そうとする。そして、この{伝統|でんとう}からの{踏|ふ}み{出|だ}し――あるいは、「{逸脱|いつだつ}」と{言|い}うべきかもしれない――は、{常|つね}に、{実験的|じっけんてき}な{性質|せいしつ}を{帯|お}びる。つまり、{非|ひ}{伝統的|でんとうてき}な{素材|そざい}を{用|もち}いることによって、あるいは、{非|ひ}{伝統的|でんとうてき}な{音|おと}{構成法|こうせいほう}を{試|こころ}みることによって、{伝統|でんとう}に{由来|ゆらい}する「{基本的|きほんてき}な」{知識|ちしき}が{告|つ}げる{音楽|おんがく}というもののイメージから{逸脱|いつだつ}した{未知|みち}のものが{産|う}み{出|だ}される{可能性|かのうせい}があり、そして、この{未知|みち}なるものを{相変|あいか}わらず「{音楽|おんがく}」と{呼|よ}ぶとしても、それがどのような{意義|いぎ}と{価値|かち}をもつ{音楽|おんがく}なのかは、{判|わか}らないのである。その{意義|いぎ}と{価値|かち}を{判断|はんだん}するためには、そこに{生|う}まれてきた{音楽|おんがく}そのものを{吟味|ぎんみ}してみるほかはない。

{私|わたし}が、{自分|じぶん}{自身|じしん}の{作曲|さっきょく}について{語|かた}り{得|う}ることは、まさにこのこと、つまり、{自|みずか}らが{行|おこな}った{実験的|じっけんてき}な{試|こころ}みの{結果|けっか}として{産|う}み{出|だ}された{音楽|おんがく}についての{吟味|ぎんみ}であり、{言|い}い{換|か}えれば、{自分|じぶん}が{行|おこな}ったこととその{結果|けっか}についての{自分|じぶん}{自身|じしん}による{解釈|かいしゃく}なのである。
（{近藤|こんどう}{譲|じょう}『〈{音楽|おんがく}〉という{謎|なぞ}』による）`,
      arti: `Sebagai seorang komponis, saya telah berbicara tentang komposisi saya dalam berbagai kesempatan. Tetapi itu tidak berarti saya sendiri paham betul tentang komposisi saya. Dalam komposisi saya, tidak ada metodologi sistematis yang bisa dijelaskan dengan kata-kata. Saat mengarang, saya hanya mengandalkan rasa, terus mencari rangkaian bunyi yang secara intuitif bisa saya terima sebagai "ini bagus". Lalu, ketika sampai pada titik yang terasa "di sinilah akhir lagu", jadilah satu lagu. Hanya itu. Dasar penilaian intuitif "ini bagus" atau "di sinilah akhir lagu" tidak bisa dijelaskan. Dan tentang apa sebenarnya lagu yang dibuat dengan cara seperti itu, saya pun tidak begitu paham.

Meski begitu, bukan berarti saya benar-benar tidak tahu apa-apa tentang komposisi saya. Pada dasarnya, mustahil membuat sesuatu tanpa tahu sama sekali bagaimana dan apa yang dibuat. Misalnya, jika tidak tahu tentang kaca dan tidak tahu seperti apa yang namanya vas, kita tidak bisa membuat vas kaca. Begitu pula dalam komposisi, jika tidak tahu tentang bunyi sebagai bahan dan cara menyusun bunyi itu, dan lebih jauh lagi jika tidak tahu seperti apa yang namanya musik, kita tidak mungkin membuat lagu. Selama mengarang lagu, komponis tentu sedikit-banyak mengetahui hal-hal itu.

(dipersingkat)

Komposisi selalu berlandaskan pengetahuan "dasar" dalam suatu tradisi. Namun, di satu sisi ada komponis "konservatif" yang menerima begitu saja pengetahuan "dasar" itu (dalam kebanyakan kasus, tanpa sadar) dan mengarang dalam batasnya, sementara di sisi lain, para komponis yang mencari kemungkinan musik baru, seperti yang diwakili avant-gardisme, berusaha melangkah keluar dari pengetahuan "dasar" dalam tradisi yang menjadi titik tolak mereka. Dan langkah keluar dari tradisi ini — atau mungkin lebih tepat disebut "penyimpangan" — selalu bersifat eksperimental. Artinya, dengan memakai bahan nontradisional atau mencoba cara menyusun bunyi yang nontradisional, ada kemungkinan lahir sesuatu yang tak dikenal yang menyimpang dari citra musik yang diberikan oleh pengetahuan "dasar" yang berasal dari tradisi; dan meskipun hal tak dikenal ini tetap disebut "musik", tidak diketahui musik dengan makna dan nilai seperti apa itu. Untuk menilai makna dan nilainya, tidak ada cara lain selain menimbang musik yang lahir itu sendiri.

Yang bisa saya ceritakan tentang komposisi saya sendiri justru hal ini, yaitu penimbangan terhadap musik yang lahir sebagai hasil percobaan eksperimental yang saya lakukan; dengan kata lain, tafsiran saya sendiri atas apa yang saya lakukan dan hasilnya.
(Dari buku karya Kondo Jo, "Misteri yang Bernama 'Musik'")`,
    },

    // ── 問題11：子どもの昆虫採集 ──
    "11": {
      yomi: `【{意見|いけん} A】
{子|こ}どもの{昆虫|こんちゅう}{採集|さいしゅう}について、{生命|せいめい}{尊重|そんちょう}や{希少種|きしょうしゅ}{保護|ほご}の{観点|かんてん}からの{批判的|ひはんてき}な{意見|いけん}が{聞|き}かれる。これに{対|たい}しては、{子|こ}どもが{採集|さいしゅう}する{数|かず}など{微々|びび}たるものなのだから、{自然|しぜん}と{触|ふ}れ{合|あ}うことのメリットを{重視|じゅうし}すべきだという{反論|はんろん}もある。

{確|たし}かに{幼少期|ようしょうき}の{自然|しぜん}{体験|たいけん}は{自然観|しぜんかん}の{形成|けいせい}に{必要|ひつよう}ではあるが、{実際|じっさい}に{子|こ}どもの{昆虫|こんちゅう}{採集|さいしゅう}の{様子|ようす}を{見|み}ると、{子|こ}どもが{魅力|みりょく}を{感|かん}じているのは{捕獲|ほかく}の{瞬間|しゅんかん}だけだ。{子|こ}どもの{興味|きょうみ}に{任|まか}せるだけではただの{遊|あそ}びにしかならない。そのため、{昆虫|こんちゅう}{採集|さいしゅう}をより{有意義|ゆういぎ}な{体験|たいけん}にするには、{大人|おとな}からの{働|はたら}きかけが{必要|ひつよう}だ。{昆虫|こんちゅう}の{体|からだ}や{生態|せいたい}を{見|み}て{知|し}る{姿勢|しせい}を{教|おし}え、{子|こ}どもが{種|しゅ}の{多様性|たようせい}に{気|き}づくようにすることが{大切|たいせつ}だ。

【{意見|いけん} B】
{虫|むし}{取|と}りに{夢中|むちゅう}になって{時間|じかん}を{忘|わす}れてしまう{子|こ}や{自分|じぶん}のつかまえたバッタ（{注|ちゅう}）に{見入|みい}ってしまう{子|こ}は、もうその{活動|かつどう}の{中|なか}にその{子|こ}どものよさや{可能性|かのうせい}が{秘|ひ}められている。「どこがおもしろいの」と{尋|たず}ねれば、{彼|かれ}らは{根拠|こんきょ}を{持|も}って{今|いま}{自分|じぶん}が{価値|かち}を{持|も}って{見|み}つめているものについて{答|こた}えてくれるだろう。{彼|かれ}らの{学|まな}びは、もうすでに{始|はじ}まっているのだ。

{学|まな}びを{通|とお}して、{自然|しぜん}に{対|たい}し{自分|じぶん}なりの{意味|いみ}を{構築|こうちく}していく{中|なか}で「{生命観|せいめいかん}」も「{自然観|しぜんかん}」も{進化|しんか}していく。それに{伴|ともな}って、「{生命|せいめい}{愛護|あいご}」「{自然|しぜん}{環境|かんきょう}との{共存|きょうぞん}」という{心情|しんじょう}も{深化|しんか}していくものだろう。（{中略|ちゅうりゃく}）そのように{考|かんが}えるとき、{自然|しぜん}に{対|たい}して{自分|じぶん}なりの{意味|いみ}を{見|み}いだせるかということ、{実感|じっかん}を{伴|ともな}った{理解|りかい}が{行|おこな}われるかということを{抜|ぬ}きにして、「{生命|せいめい}{愛護|あいご}」も「{自然|しぜん}{環境|かんきょう}との{共生|きょうせい}」も{語|かた}ることはできないだろう。
（{角屋|かどや}{重樹|しげき}・{森本|もりもと}{信也|しんや}{編著|へんちょ}『{小学校|しょうがっこう}　{理科|りか}{教育|きょういく}はこう{変|か}わる――ニューサイエンスを{求|もと}めて』による）
（{注|ちゅう}）バッタ：{昆虫|こんちゅう}の{一種|いっしゅ}`,
      arti: `[Pendapat A]
Mengenai anak-anak mengumpulkan serangga, terdengar pendapat kritis dari sudut pandang penghargaan terhadap kehidupan dan perlindungan spesies langka. Terhadap hal ini, ada juga bantahan bahwa jumlah yang dikumpulkan anak-anak sangat sedikit, jadi manfaat berinteraksi dengan alam yang harus diutamakan.

Memang pengalaman alam di masa kanak-kanak diperlukan untuk membentuk pandangan tentang alam, tetapi kalau melihat kenyataan anak-anak mengumpulkan serangga, yang membuat mereka tertarik hanya momen penangkapannya saja. Kalau hanya diserahkan pada minat anak, itu hanya akan menjadi permainan biasa. Karena itu, agar mengumpulkan serangga menjadi pengalaman yang lebih bermakna, diperlukan dorongan dari orang dewasa. Penting untuk mengajarkan sikap mengamati dan mengenal tubuh serta ekologi serangga, agar anak menyadari keragaman spesies.

[Pendapat B]
Anak yang asyik menangkap serangga sampai lupa waktu, atau anak yang terpaku memandangi belalang (catatan) tangkapannya, di dalam kegiatan itu sudah tersimpan kelebihan dan potensi anak tersebut. Jika ditanya, "Apa yang menarik?", mereka akan menjawab dengan alasan tentang apa yang sedang mereka pandangi dengan penuh rasa berharga. Pembelajaran mereka sudah dimulai.

Melalui pembelajaran, dalam proses membangun makna versi sendiri terhadap alam, "pandangan tentang kehidupan" dan "pandangan tentang alam" pun berkembang. Seiring dengan itu, perasaan "menyayangi kehidupan" dan "hidup berdampingan dengan lingkungan alam" pun akan makin mendalam. (dipersingkat) Jika berpikir demikian, kita tidak bisa membicarakan "menyayangi kehidupan" maupun "hidup bersama lingkungan alam" tanpa mempertimbangkan apakah anak bisa menemukan makna versi sendiri terhadap alam dan apakah terjadi pemahaman yang disertai pengalaman nyata.
(Dari buku suntingan Kadoya Shigeki dan Morimoto Shin'ya tentang perubahan pendidikan IPA di SD)
(Catatan) バッタ: sejenis serangga (belalang)`,
    },

    // ── 問題12：目標設定について ──
    "12": {
      yomi: `たとえば、あなたが{会社|かいしゃ}の{中|なか}で{企画|きかく}{部門|ぶもん}に{属|ぞく}し、①{目標値|もくひょうち}を{設定|せってい}する{仕事|しごと}を{与|あた}えられたとする。ここでは{達成|たっせい}{不可能|ふかのう}な{目標|もくひょう}を{設定|せってい}したところで{意味|いみ}がないとされるから、{外部|がいぶ}{環境|かんきょう}や{内部|ないぶ}の{状況|じょうきょう}を{含|ふく}め、{諸々|もろもろ}の{要素|ようそ}を{検討|けんとう}することになるだろう。その{上|うえ}で{現状|げんじょう}から{考|かんが}えて、{達成|たっせい}{可能|かのう}かつできる{限|かぎ}り{高|たか}い{目標|もくひょう}を{探|さぐ}ることになる。

このとき、あなたが{今後|こんご}{変|か}わりうる{外部|がいぶ}{環境|かんきょう}を{完璧|かんぺき}に{予想|よそう}し、{会社|かいしゃ}{内部|ないぶ}のすべてを{完全|かんぜん}に{把握|はあく}している{存在|そんざい}であれば、{目標|もくひょう}を{設定|せってい}する{仕事|しごと}はこの{上|うえ}なく{素晴|すば}らしいものだ。{社員|しゃいん}{全員|ぜんいん}がこれに{向|む}かって{全力|ぜんりょく}を{出|だ}せばそれでいいことになる。

しかし、{実際|じっさい}にはそんなことはありえない。{外部|がいぶ}{環境|かんきょう}は{予想|よそう}もつかない{方向|ほうこう}に{変|か}わりうるし、{社内|しゃない}では、{上|うえ}からの{目|め}が{届|とど}かないところでアイデアを{隠|かく}し{持|も}った{人|ひと}が{必|かなら}ずいる。{固定化|こていか}した{目標|もくひょう}は、{不確定|ふかくてい}{要素|ようそ}にまったく{対応|たいおう}できないのである。しかも、こうした{事前|じぜん}に{予想|よそう}ができない{要素|ようそ}にこそ、{大|おお}きなビジネスチャンスが{転|ころ}がっている。

だから{目標|もくひょう}を{設定|せってい}するならば、{変化|へんか}に{対応|たいおう}する{中|なか}で、{各人|かくじん}の{創意|そうい}{工夫|くふう}の{果|は}てにやっと{達成|たっせい}されるようなものでなければならない。しかし、{事前|じぜん}にこれらをすべて{盛|も}り{込|こ}むことはできるはずもないから、{何|なん}となく{納得感|なっとくかん}のありそうな{落|お}とし{所|どころ}（{注|ちゅう}1）を{探|さが}すことになる。{大人|おとな}はこの{落|お}とし{所|どころ}という{言葉|ことば}が{大好|だいす}きなのだが、こんなものに{意味|いみ}があるはずもないのだ。これではすべての{可能性|かのうせい}を{引|ひ}き{出|だ}すことができないのである。

これは{個人|こじん}としても{同|おな}じことである。（{中略|ちゅうりゃく}）

{試合|しあい}{直後|ちょくご}の{力士|りきし}にインタビューをすれば、「{明日|あした}の{一戦|いっせん}をまた{頑張|がんば}るだけ」と{答|こた}えが{返|かえ}ってくるだろう。ゴルフツアーの{最終日|さいしゅうび}を{明日|あした}に{控|ひか}えたプロ{選手|せんしゅ}でも、{翌日|よくじつ}のスコア{目標|もくひょう}などは{口|くち}にしない。そんなことを{考|かんが}え{始|はじ}めれば、プレイが{崩|くず}れ{始|はじ}めることを{知|し}っているからだ。

それにもかかわらず、なぜかビジネスになると、{途端|とたん}に{誰|だれ}もが{最終|さいしゅう}ゴールを{決|き}めようとする。スポーツよりも遥（はる）かに{不確定|ふかくてい}な{要素|ようそ}が{多|おお}いにもかかわらず、{目標|もくひょう}によって{自分|じぶん}たちを{縛|しば}りつけようとするのである。これにはかなり②{違和感|いわかん}を{覚|おぼ}える。

どんなことでも、{周囲|しゅうい}の{状況|じょうきょう}はどんどん{変|か}わることが{当|あ}たり{前|まえ}である。それにもかかわらず、{自分|じぶん}だけ{変|か}わらないのはおかしい。{過去|かこ}に{立|た}てた{目標|もくひょう}によって{自分|じぶん}を{窮屈|きゅうくつ}な{存在|そんざい}にしてはいけないのである。

もしどうしても{目標|もくひょう}を{立|た}てたいのであれば、ほとんど{実現|じつげん}{不可能|ふかのう}なくらいの{大|おお}きな{目標|もくひょう}を{持|も}つべきだろう。しかし、これ{自体|じたい}はその{達成|たっせい}{方法|ほうほう}を{考|かんが}えるのに{役|やく}には{立|た}たない。{自分|じぶん}が{持|も}つ{可能性|かのうせい}を{大事|だいじ}にしたいのであれば、{目|め}の{前|まえ}のことだけに{没入|ぼつにゅう}（{注|ちゅう}2）し、{何|なに}かしらの（{注|ちゅう}3）{変化|へんか}を{察知|さっち}するにつけ、{次|つぎ}のベストを{探|さが}すというスタンスを{保持|ほじ}することが{重要|じゅうよう}である。
（{成毛|なるけ}{眞|まこと}『{大人|おとな}げない{大人|おとな}になれ！』による）
（{注|ちゅう}1）{落|お}とし{所|どころ}：{妥協点|だきょうてん}
（{注|ちゅう}2）没（ぼっ）入（にゅう）：ここでは、{集中|しゅうちゅう}する
（{注|ちゅう}3）{何|なに}かしらの：{何|なん}らかの`,
      arti: `Misalnya, Anda termasuk divisi perencanaan di perusahaan dan diberi ① tugas menetapkan nilai target. Di sini, menetapkan target yang mustahil dicapai dianggap tidak ada artinya, jadi Anda akan mengkaji berbagai faktor termasuk lingkungan eksternal dan situasi internal. Kemudian, dengan mempertimbangkan keadaan sekarang, Anda akan mencari target yang bisa dicapai sekaligus setinggi mungkin.

Pada saat itu, jika Anda adalah sosok yang bisa memprediksi dengan sempurna lingkungan eksternal yang mungkin berubah ke depan dan memahami seluruh isi perusahaan secara utuh, pekerjaan menetapkan target adalah pekerjaan yang luar biasa. Cukup semua karyawan mengerahkan seluruh tenaga menuju target itu.

Namun, kenyataannya hal itu mustahil. Lingkungan eksternal bisa berubah ke arah yang tak terduga, dan di dalam perusahaan pasti ada orang yang menyimpan ide di tempat yang tak terjangkau pengawasan atasan. Target yang dipatok mati sama sekali tidak bisa menghadapi unsur yang tidak pasti. Lagi pula, justru pada unsur-unsur yang tidak bisa diprediksi sebelumnya inilah peluang bisnis besar bertebaran.

Karena itu, kalau menetapkan target, target itu harus sesuatu yang baru tercapai setelah kreativitas setiap orang dalam proses menghadapi perubahan. Tetapi, mustahil memasukkan semua itu sebelumnya, jadi akhirnya dicarilah titik kompromi (catatan 1) yang kira-kira bisa diterima. Orang dewasa sangat suka kata "titik kompromi" ini, tetapi hal semacam ini tidak mungkin bermakna. Dengan begitu, semua potensi tidak bisa digali.

Hal ini juga sama bagi individu. (dipersingkat)

Jika pesumo diwawancarai tepat setelah pertandingan, jawabannya mungkin, "Saya hanya akan berjuang lagi di pertandingan besok." Pegolf profesional yang menghadapi hari terakhir turnamen besok pun tidak menyebut target skor esok hari. Sebab mereka tahu, kalau mulai memikirkan hal semacam itu, permainan mulai berantakan.

Meski begitu, entah mengapa kalau sudah urusan bisnis, semua orang langsung berusaha menetapkan tujuan akhir. Padahal unsur ketidakpastiannya jauh lebih banyak daripada olahraga, mereka berusaha mengikat diri dengan target. Saya merasa ② cukup janggal terhadap hal ini.

Dalam hal apa pun, wajar bila situasi sekitar terus berubah. Meski begitu, aneh jika hanya diri sendiri yang tidak berubah. Kita tidak boleh membuat diri kita sempit karena target yang ditetapkan di masa lalu.

Kalau memang ingin menetapkan target, sebaiknya punya target besar yang hampir mustahil diwujudkan. Namun, target itu sendiri tidak berguna untuk memikirkan cara mencapainya. Jika ingin menghargai potensi yang dimiliki, yang penting adalah mempertahankan sikap tenggelam (catatan 2) hanya pada hal di depan mata, dan setiap kali menangkap perubahan apa pun (catatan 3), mencari langkah terbaik berikutnya.
(Dari buku karya Naruke Makoto, "Jadilah Orang Dewasa yang Tidak Dewasa!")
(Catatan 1) 落とし所: titik kompromi
(Catatan 2) 没入: di sini, berkonsentrasi
(Catatan 3) 何かしらの: suatu, apa pun`,
    },

    // ── 問題13：やまかわ新聞 読者モニター募集 ──
    "13": {
      yomi: `{紙面|しめん}に{掲載|けいさい}された{記事|きじ}や{広告|こうこく}に{関|かん}するアンケートにお{答|こた}えください。

{募集|ぼしゅう}{概要|がいよう}

モニター{契約|けいやく}{期間|きかん}：2016{年|ねん}4{月|がつ}から2017{年|ねん}3{月|がつ}まで

{応募|おうぼ}{条件|じょうけん}：1～5の{条件|じょうけん}をすべて{満|み}たしている{方|かた}
（1）モニター{契約|けいやく}{期間|きかん}{中|ちゅう}、{以下|いか}にお{住|す}まいの{方|かた}
{関東|かんとう}1{都|と}3{県|けん}（{東京都|とうきょうと}、{神奈川県|かながわけん}、{千葉県|ちばけん}、{埼玉県|さいたまけん}）
（2）やまかわ{新聞|しんぶん}を{朝|ちょう}、{夕刊|ゆうかん}ともに{自宅|じたく}で{購読|こうどく}{中|ちゅう}の{方|かた}
（3）2016{年|ねん}4{月|がつ}2{日|か}{時点|じてん}で20{歳|さい}{以上|いじょう}の{方|かた}
（4）{新聞|しんぶん}、マスコミ、{広告|こうこく}{関係|かんけい}の{職業|しょくぎょう}に{従事|じゅうじ}されていない{方|かた}
（5）インターネットに{接続|せつぞく}できるパソコン{等|とう}をお{持|も}ちの{方|かた}
＊{過去|かこ}に「やまかわ{新聞|しんぶん}{読者|どくしゃ}モニター」をされた{方|かた}は、{応募|おうぼ}できません。

{募集|ぼしゅう}{人数|にんずう}：300{人|にん}　{締|し}め{切|き}り：2016{年|ねん}2{月|がつ}1{日|ついたち}（{月|げつ}）
{募集|ぼしゅう}{方法|ほうほう}：はがきに「{読者|どくしゃ}モニター{希望|きぼう}」の{旨|むね}と{住所|じゅうしょ}、{氏名|しめい}、{年齢|ねんれい}、{性別|せいべつ}、{職業|しょくぎょう}、メールアドレスをご{記入|きにゅう}の{上|うえ}、ご{送付|そうふ}ください。
{結果|けっか}{通知|つうち}：3{月|がつ}{下旬|げじゅん}までにメールでご{連絡|れんらく}します。

アンケート{内容|ないよう}

{内容|ないよう}：{紙面|しめん}に{掲載|けいさい}された{記事|きじ}や{広告|こうこく}についての{評価|ひょうか}など
{実施|じっし}{回数|かいすう}：{月|つき}2、3{回|かい}{程度|ていど}
{謝礼|しゃれい}：{回答|かいとう}1{回|かい}につき{図書|としょ}カード500{円|えん}{分|ぶん}（{任期|にんき}{終了|しゅうりょう}{時|じ}にまとめて{発送|はっそう}）
{手順|てじゅん}：①アンケート{実施|じっし}1{週間|しゅうかん}{前|まえ}にメールで「{実施|じっし}のお{知|し}らせ」が{届|とど}きます。
②アンケート{実施|じっし}{当日|とうじつ}にウェブサイトのアンケート{回答|かいとう}ページにアクセスして{回答|かいとう}してください。
{留意点|りゅういてん}：＊アンケート{実施|じっし}{前|まえ}{一週間|いっしゅうかん}{分|ぶん}の{紙面|しめん}を{保管|ほかん}しておいてください。アンケートはその{中|なか}から{当社|とうしゃ}{指定|してい}の{記事|きじ}や{広告|こうこく}について{答|こた}えていただきます。
＊{回答|かいとう}{可能|かのう}{時間|じかん}は、アンケート{実施|じっし}{当日|とうじつ}の{午前|ごぜん}7{時|じ}から24{時間|じかん}です。
＊{回答|かいとう}{形式|けいしき}には{自由|じゆう}{記述式|きじゅつしき}と{選択式|せんたくしき}があります。{自由|じゆう}{記述式|きじゅつしき}の{箇所|かしょ}は{空欄|くうらん}でも{構|かま}いませんが、{選択式|せんたくしき}の{箇所|かしょ}が{未|み}{入力|にゅうりょく}であった{場合|ばあい}、{回答|かいとう}は{受|う}け{付|つ}けられません。

（{問|と}い{合|あ}わせ{先|さき}）やまかわ{新聞|しんぶん}{読者|どくしゃ}モニター{担当|たんとう}
{電話|でんわ}：07-1234-9876（{受付|うけつけ}{時間|じかん}：{土日|どにち}{祝日|しゅくじつ}を{除|のぞ}く{午前|ごぜん}10{時|じ}～{午後|ごご}5{時|じ}）

【{応募者|おうぼしゃ}{情報|じょうほう}】
{名前|なまえ}　　{職業|しょくぎょう}　　{年齢|ねんれい}（2016{年|ねん}4{月|がつ}2{日|か}{時点|じてん}）　　モニター{契約|けいやく}{期間|きかん}{中|ちゅう}の{居住地|きょじゅうち}　　{購読|こうどく}{中|ちゅう}のやまかわ{新聞|しんぶん}
{水野|みずの}さん　　{大学生|だいがくせい}　　22{歳|さい}　　{神奈川県|かながわけん}　　{朝刊|ちょうかん}のみ
ソウさん　　{広告|こうこく}{代理店|だいりてん}{社員|しゃいん}　　24{歳|さい}　　{埼玉県|さいたまけん}　　{朝刊|ちょうかん}と{夕刊|ゆうかん}
チョウさん　　{旅行|りょこう}{会社|がいしゃ}{社員|しゃいん}　　27{歳|さい}　　{東京都|とうきょうと}　　{朝刊|ちょうかん}と{夕刊|ゆうかん}
{山田|やまだ}さん　　{銀行員|ぎんこういん}　　32{歳|さい}　　{千葉県|ちばけん}（2016{年|ねん}8{月|がつ}に{愛知県|あいちけん}へ{転出|てんしゅつ}{予定|よてい}）　　{朝刊|ちょうかん}と{夕刊|ゆうかん}`,
      arti: `Silakan jawab angket mengenai artikel dan iklan yang dimuat di koran.

Ringkasan rekrutmen

Masa kontrak monitor: April 2016 sampai Maret 2017

Syarat pendaftaran: orang yang memenuhi semua syarat 1–5
(1) Orang yang selama masa kontrak monitor tinggal di wilayah berikut
1 metropolis dan 3 prefektur Kanto (Tokyo, Kanagawa, Chiba, Saitama)
(2) Orang yang berlangganan koran Yamakawa edisi pagi dan sore di rumah
(3) Orang yang berusia 20 tahun ke atas per 2 April 2016
(4) Orang yang tidak bekerja di bidang koran, media massa, atau periklanan
(5) Orang yang memiliki komputer atau perangkat lain yang bisa terhubung ke internet
* Orang yang pernah menjadi "pembaca monitor koran Yamakawa" tidak bisa mendaftar.

Jumlah yang direkrut: 300 orang; batas waktu: 1 Februari 2016 (Senin)
Cara mendaftar: tuliskan pada kartu pos keterangan "ingin menjadi pembaca monitor" beserta alamat, nama, usia, jenis kelamin, pekerjaan, dan alamat email, lalu kirimkan.
Pemberitahuan hasil: akan dihubungi lewat email paling lambat akhir Maret.

Isi angket

Isi: penilaian terhadap artikel dan iklan yang dimuat di koran, dll.
Frekuensi: sekitar 2–3 kali sebulan
Imbalan: kartu buku senilai 500 yen per satu kali jawaban (dikirim sekaligus di akhir masa tugas)
Prosedur: ① Satu minggu sebelum angket dilaksanakan, "pemberitahuan pelaksanaan" dikirim lewat email.
② Pada hari pelaksanaan, akses halaman jawaban angket di situs web dan jawablah.
Catatan: * Simpanlah koran selama satu minggu sebelum pelaksanaan angket. Angket akan menanyakan artikel atau iklan yang ditentukan perusahaan dari koran-koran itu.
* Waktu menjawab adalah 24 jam mulai pukul 7 pagi pada hari pelaksanaan angket.
* Format jawaban ada isian bebas dan pilihan. Bagian isian bebas boleh dikosongkan, tetapi jika ada bagian pilihan yang tidak diisi, jawaban tidak akan diterima.

(Kontak) Bagian Pembaca Monitor Koran Yamakawa
Telepon: 07-1234-9876 (jam layanan: pukul 10 pagi – 5 sore, kecuali Sabtu, Minggu, dan hari libur nasional)

[Data pendaftar]
Nama — Pekerjaan — Usia (per 2 April 2016) — Tempat tinggal selama masa kontrak — Koran Yamakawa yang dilanggan
Mizuno-san — mahasiswa — 22 tahun — Kanagawa — edisi pagi saja
Sou-san — karyawan agen periklanan — 24 tahun — Saitama — edisi pagi dan sore
Chou-san — karyawan agen perjalanan — 27 tahun — Tokyo — edisi pagi dan sore
Yamada-san — pegawai bank — 32 tahun — Chiba (berencana pindah ke Aichi pada Agustus 2016) — edisi pagi dan sore`,
    },
  },
};
