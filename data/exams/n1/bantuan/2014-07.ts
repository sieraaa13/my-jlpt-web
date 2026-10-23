import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2014
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1407: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{今回|こんかい}の{大会|たいかい}では、{若手|わかて}の【{躍進|やくしん}】が{目立|めだ}った。",
      arti: "Di kejuaraan kali ini, 【kemajuan pesat】 para pemain muda sangat menonjol.",
    },
    2: {
      yomi: "{計画|けいかく}をきちんと【{遂行|すいこう}】することが{大切|たいせつ}だ。",
      arti: "Penting untuk 【melaksanakan】 rencana dengan benar.",
    },
    3: {
      yomi: "{作者|さくしゃ}の{思|おも}いがこの{一言|ひとこと}に【{凝縮|ぎょうしゅく}】されている。",
      arti: "Perasaan pengarang 【terpadatkan】 dalam satu kalimat ini.",
    },
    4: {
      yomi: "どの{親|おや}もわが{子|こ}が【{健|すこ}やか】に{育|そだ}つことを{願|ねが}っている。",
      arti: "Setiap orang tua berharap anaknya tumbuh dengan 【sehat】.",
      optArti: ["anggun, lemah lembut", "tenang, damai", "sehat (健やか)", "segar, menyegarkan"],
    },
    5: {
      yomi: "このセンターは、{日本|にほん}のがん{研究|けんきゅう}の【{中枢|ちゅうすう}】を{担|にな}っている。",
      arti: "Pusat ini memegang peran 【inti/pusat】 penelitian kanker di Jepang.",
    },
    6: {
      yomi: "{介護|かいご}{制度|せいど}の{整備|せいび}が{遅|おく}れているという{事実|じじつ}は【{否|いな}めない】だろう。",
      arti: "Fakta bahwa pembenahan sistem perawatan lansia tertinggal mungkin 【tidak dapat disangkal】.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{雨|あめ}の{降|ふ}らない{日|ひ}がこれ{以上|いじょう}{続|つづ}けば、{農業|のうぎょう}に{影響|えいきょう}するだけでなく、{日常|にちじょう}{生活|せいかつ}にも（　）を{来|きた}すおそれがある。",
      arti: "Jika hari tanpa hujan terus berlanjut, bukan hanya pertanian yang terdampak, tetapi kehidupan sehari-hari pun bisa mengalami (…).",
      optYomi: ["{苦境|くきょう}", "{不況|ふきょう}", "{支障|ししょう}", "{停滞|ていたい}"],
      optArti: ["situasi sulit", "resesi, kelesuan ekonomi", "gangguan, hambatan", "stagnasi"],
    },
    8: {
      yomi: "その{空|あ}き{地|ち}には、（　）{量|りょう}のごみが{捨|す}てられて、{山|やま}のようになっていた。",
      arti: "Di lahan kosong itu, sampah dalam jumlah (…) dibuang hingga menggunung.",
      optYomi: ["{目|め}まぐるしい", "{限|かぎ}りない", "{極|きわ}まりない", null],
      optArti: ["silih berganti dengan cepat", "tak terbatas", "luar biasa (biasanya untuk sifat negatif)", "sangat banyak, berlimpah"],
    },
    9: {
      yomi: "この{歌手|かしゅ}は{若者|わかもの}の{間|あいだ}で（　）な{人気|にんき}を{誇|ほこ}っている。",
      arti: "Penyanyi ini membanggakan popularitas yang (…) di kalangan anak muda.",
      optYomi: ["{絶大|ぜつだい}", "{膨大|ぼうだい}", "{偉大|いだい}", "{強大|きょうだい}"],
      optArti: ["sangat besar (pengaruh/popularitas)", "sangat banyak (jumlah/volume)", "agung, hebat", "kuat dan besar (kekuatan)"],
    },
    10: {
      yomi: "{話|はな}し{合|あ}いは{平行線|へいこうせん}を（　）、{結局|けっきょく}{一致点|いっちてん}を{見|み}いだせなかった。",
      arti: "Pembicaraan terus (…) jalan sejajar (tidak bertemu), dan akhirnya titik temu tidak ditemukan.",
      optArti: ["melangkah", "menyusuri, mengikuti", "menjiplak, menelusuri garis", "merambat, menyusuri"],
    },
    11: {
      yomi: "{弊社|へいしゃ}の{採用|さいよう}{試験|しけん}では、{筆記|ひっき}{試験|しけん}よりも{面接|めんせつ}に（　）を{置|お}いています。",
      arti: "Dalam tes rekrutmen perusahaan kami, kami lebih memberi (…) pada wawancara daripada tes tertulis.",
      optArti: ["bobot, penekanan", "puncak, teratas", "kekuatan", "utama"],
    },
    12: {
      yomi: "{当選|とうせん}した{林氏|はやしし}は{取材|しゅざい}に{対|たい}して、{今回|こんかい}の{選挙|せんきょ}は{終盤|しゅうばん}まで（　）を{許|ゆる}さない{厳|きび}しい{戦|たたか}いだったと{語|かた}った。",
      arti: "Hayashi yang terpilih mengatakan kepada wartawan bahwa pemilu kali ini adalah pertarungan ketat yang tidak memungkinkan (…) sampai tahap akhir.",
      optYomi: ["{予期|よき}", "{見通|みとお}し", "{見込|みこ}み", "{予断|よだん}"],
      optArti: ["perkiraan, antisipasi", "prospek, pandangan ke depan", "harapan, perkiraan", "prediksi dini (予断を許さない = tidak bisa diprediksi)"],
    },
    13: {
      yomi: "{田中|たなか}さんはいつも{手際|てぎわ}よく（　）{仕事|しごと}を{進|すす}めている。",
      arti: "Tanaka-san selalu mengerjakan pekerjaannya dengan cekatan dan (…).",
      optArti: ["(berkembang) pesat", "lancar mengalir; (tulisan) cepat", "sigap, cekatan", "(anak) tumbuh dengan sehat"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "ユーザー{登録|とうろく}{済|ず}みのお{客様|きゃくさま}は、このサービスが【{無償|むしょう}で】{受|う}けられます。",
      arti: "Pelanggan yang sudah terdaftar sebagai pengguna bisa menerima layanan ini 【secara cuma-cuma】.",
      optYomi: [null, "{優先的|ゆうせんてき}に", null, "{予約|よやく}しなくても"],
      optArti: ["gratis", "secara prioritas", "kapan saja", "meski tanpa reservasi"],
    },
    15: {
      yomi: "{最近|さいきん}、{山本|やまもと}さんは{新|あたら}しい{仕事|しごと}に【{打|う}ち{込|こ}んで】いるらしい。",
      arti: "Kabarnya akhir-akhir ini Yamamoto-san 【tenggelam/serius menekuni】 pekerjaan barunya.",
      optYomi: ["{興味|きょうみ}を{持|も}っている", "しつこく{誘|さそ}われている", "{時間|じかん}をとられている", "{熱心|ねっしん}に{取|と}り{組|く}んでいる"],
      optArti: ["tertarik", "terus-menerus diajak", "tersita waktunya", "mengerjakan dengan tekun"],
    },
    16: {
      yomi: "できればもう{少|すこ}し【ストレートに】{言|い}ってほしかったです。",
      arti: "Kalau bisa, saya ingin Anda mengatakannya sedikit lebih 【terus terang】.",
      optYomi: ["{冷静|れいせい}に", "{率直|そっちょく}に", "{真剣|しんけん}に", "{慎重|しんちょう}に"],
      optArti: ["dengan tenang", "dengan terus terang", "dengan sungguh-sungguh", "dengan hati-hati"],
    },
    17: {
      yomi: "{駅前|えきまえ}に{巨大|きょだい}スーパーができたら【お{手上|てあ}げだ】。",
      arti: "Kalau supermarket raksasa dibuka di depan stasiun, 【kami angkat tangan】.",
      optYomi: ["{大|だい}{歓迎|かんげい}だ", null, "ぜひ{働|はたら}きたい", "{驚|おどろ}きだ"],
      optArti: ["sangat disambut", "tidak ada yang bisa dilakukan", "ingin sekali bekerja (di sana)", "mengejutkan"],
    },
    18: {
      yomi: "この{一年|いちねん}で{収益|しゅうえき}は【{格段|かくだん}に】{増|ふ}えている。",
      arti: "Dalam setahun ini keuntungan bertambah 【jauh/secara mencolok】.",
      optYomi: ["{着実|ちゃくじつ}に", null, "{大幅|おおはば}に", null],
      optArti: ["dengan mantap", "sedikit", "secara besar-besaran", "secara perlahan"],
    },
    19: {
      yomi: "{操作|そうさ}{方法|ほうほう}は【いたって】{簡単|かんたん}でした。",
      arti: "Cara pengoperasiannya 【sangat】 mudah.",
      optYomi: [null, "{意外|いがい}に", "{非常|ひじょう}に", null],
      optArti: ["relatif, cukup", "di luar dugaan", "sangat", "memang benar"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{一律|いちりつ}",
      arti: "一律 = seragam, sama rata (berlaku sama untuk semua)",
      optYomi: [
        "{山下|やました}さんは、{会|あ}うと{一律|いちりつ}に{赤|あか}い{帽子|ぼうし}をかぶっている。",
        "{休|やす}みの{日|ひ}に{出|で}かけようとすると、{一律|いちりつ}に{雨|あめ}が{降|ふ}る。",
        "うちの{会社|かいしゃ}の{社員|しゃいん}は、{経歴|けいれき}はさまざまだが、{一律|いちりつ}に{留学|りゅうがく}{経験者|けいけんしゃ}だ。",
        "すべての{経費|けいひ}を{一律|いちりつ}に{削減|さくげん}するのではなく、{無駄|むだ}なものから{減|へ}らせばよい。",
      ],
      optArti: [
        "Yamashita-san setiap kali bertemu 'sama rata' memakai topi merah.",
        "Setiap kali hendak pergi di hari libur, 'sama rata' turun hujan.",
        "Karyawan perusahaan kami latar belakangnya beragam, tetapi 'sama rata' pernah belajar di luar negeri.",
        "Bukannya memangkas semua biaya 'sama rata', cukup kurangi dari yang sia-sia.",
      ],
    },
    21: {
      yomi: "はがす",
      arti: "はがす = mengelupas, mencopot (sesuatu yang menempel)",
      optYomi: [
        "{木村|きむら}さんはノートに{地図|ちず}を{書|か}くと、そのページをはがして{私|わたし}にくれた。",
        "ジャムを{作|つく}るとき、りんごは{皮|かわ}をはがして、{小|ちい}さく{切|き}ってください。",
        "{友人|ゆうじん}へのプレゼントにするので、{値段|ねだん}のシールをはがしておいた。",
        "{目|め}が{疲|つか}れるので、{家|いえ}に{帰|かえ}るとすぐコンタクトレンズをはがす。",
      ],
      optArti: [
        "Kimura-san menggambar peta di buku catatan, lalu 'mengelupas' halaman itu dan memberikannya kepada saya.",
        "Saat membuat selai, 'kelupas' kulit apelnya lalu potong kecil-kecil.",
        "Karena untuk hadiah teman, saya sudah 'mengelupas' stiker harganya.",
        "Karena mata lelah, begitu pulang saya langsung 'mengelupas' lensa kontak.",
      ],
    },
    22: {
      yomi: "{心構|こころがま}え",
      arti: "心構え = kesiapan mental, sikap batin",
      optYomi: [
        "{金銭|きんせん}トラブルに{遭|あ}わないようにするには、{日|ひ}ごろの{心構|こころがま}えが{大切|たいせつ}だ。",
        "{上司|じょうし}から{海外|かいがい}{赴任|ふにん}を{打診|だしん}されたが、なかなか{心構|こころがま}えが{決|き}まらない。",
        "{今年中|ことしじゅう}に{家|いえ}を{買|か}って{引|ひ}っ{越|こ}す{心構|こころがま}えだったのに、まだいい{物件|ぶっけん}が{見|み}つからない。",
        "{石川|いしかわ}さんがこんなに{親切|しんせつ}にしてくれるのは、{何|なに}か{心構|こころがま}えがあるんじゃないだろうか。",
      ],
      optArti: [
        "Agar tidak terkena masalah keuangan, 'kesiapan mental' sehari-hari itu penting.",
        "Atasan menawari saya penugasan ke luar negeri, tetapi 'kesiapan mental' saya tidak kunjung bulat.",
        "Saya punya 'kesiapan mental' membeli rumah dan pindah tahun ini, tetapi belum menemukan properti yang bagus.",
        "Ishikawa-san begitu baik kepada saya; jangan-jangan ia punya 'kesiapan mental' tertentu.",
      ],
    },
    23: {
      yomi: "{損|そこ}なう",
      arti: "損なう = merusak, mencederai (hubungan, kesehatan, citra, dll.)",
      optYomi: [
        "{増税|ぞうぜい}によって{景気|けいき}が{損|そこ}なわれることを{心配|しんぱい}する{人|ひと}が{多|おお}い。",
        "{度重|たびかさ}なる{発送|はっそう}ミスなどがもとで、{顧客|こきゃく}との{信頼|しんらい}{関係|かんけい}を{損|そこ}なってしまった。",
        "{仕事|しごと}に{失敗|しっぱい}して{自信|じしん}を{損|そこ}なっていたとき、この{本|ほん}を{読|よ}んだら{元気|げんき}が{出|で}ました。",
        "{天気|てんき}{予報|よほう}によると、{今週末|こんしゅうまつ}は{天候|てんこう}が{損|そこ}なわれるそうだ。",
      ],
      optArti: [
        "Banyak orang khawatir kondisi ekonomi akan 'dirusak' oleh kenaikan pajak.",
        "Akibat kesalahan pengiriman yang berulang, kami 'merusak' hubungan kepercayaan dengan pelanggan.",
        "Saat saya 'merusak' rasa percaya diri karena gagal dalam pekerjaan, membaca buku ini membuat saya bersemangat.",
        "Menurut prakiraan cuaca, akhir pekan ini cuacanya akan 'dirusak'.",
      ],
    },
    24: {
      yomi: "しがみつく",
      arti: "しがみつく = berpegangan erat, memeluk erat (tidak mau lepas)",
      optYomi: [
        "{子|こ}どもは{泣|な}きながら{母親|ははおや}の{足|あし}にしがみついて{離|はな}れようとしなかった。",
        "{汗|あせ}のせいで、シャツが{肌|はだ}にしがみついて{気持|きも}ち{悪|わる}い。",
        "ふたが{瓶|びん}にしがみついていて、いくら{力|ちから}を{入|い}れても{開|あ}かない。",
        "{今日|きょう}の{電車|でんしゃ}は、{隣|となり}の{人|ひと}に{体|からだ}がしがみつくほど{込|こ}んでいた。",
      ],
      optArti: [
        "Anak itu sambil menangis 'berpegangan erat' pada kaki ibunya dan tidak mau lepas.",
        "Karena keringat, kemeja 'berpegangan erat' pada kulit dan rasanya tidak nyaman.",
        "Tutupnya 'berpegangan erat' pada botol, sekuat apa pun dibuka tetap tidak terbuka.",
        "Kereta hari ini penuh sampai badan saya 'berpegangan erat' pada orang di sebelah.",
      ],
    },
    25: {
      yomi: "{工面|くめん}",
      arti: "工面 = mengupayakan, mengusahakan (terutama uang)",
      optYomi: [
        "{制度|せいど}の{改正|かいせい}を{求|もと}めて、{街頭|がいとう}で{署名|しょめい}を{工面|くめん}する{活動|かつどう}を{続|つづ}けた。",
        "サービス{向上|こうじょう}のために、{利用者|りようしゃ}からアイディアを{工面|くめん}した。",
        "{選挙|せんきょ}が{近|ちか}くなり、{各|かく}{政党|せいとう}は{候補者|こうほしゃ}を{工面|くめん}するのに{必死|ひっし}だ。",
        "なんとか{資金|しきん}を{工面|くめん}して、ついに{自分|じぶん}の{店|みせ}を{持|も}つことができた。",
      ],
      optArti: [
        "Menuntut perubahan sistem, kami terus berkegiatan 'mengupayakan' tanda tangan di jalan.",
        "Untuk meningkatkan layanan, kami 'mengupayakan' ide dari para pengguna.",
        "Pemilu makin dekat, dan setiap partai mati-matian 'mengupayakan' calon.",
        "Entah bagaimana saya 'mengupayakan' modal, dan akhirnya bisa punya toko sendiri.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{父|ちち}は{仕事|しごと}が{生|い}きがいで、{定年|ていねん}{後|ご}も（　）かぎりは{働|はたら}きたいと{言|い}っている。",
      arti: "Ayah saya menjadikan pekerjaan sebagai makna hidupnya, dan berkata bahwa setelah pensiun pun ia ingin tetap bekerja selama (…).",
      optYomi: ["{働|はたら}けず", "{働|はたら}いた", "{働|はたら}こう", "{働|はたら}ける"],
      optArti: ["tidak bisa bekerja", "sudah bekerja", "mari bekerja", "masih bisa bekerja"],
    },
    27: {
      yomi: "{周囲|しゅうい}からどのような{批判|ひはん}を（　）、{自|みずか}らの{考|かんが}えを{最後|さいご}まで{貫|つらぬ}くべきだ。",
      arti: "(…) kritik apa pun dari sekitar, kita harus mempertahankan pendapat sendiri sampai akhir.",
      optYomi: ["{浴|あ}びたといえば", "{浴|あ}びたにもかかわらず", "{浴|あ}びようとも", "{浴|あ}びるようにも"],
      optArti: ["kalau bicara soal menerima", "padahal sudah menerima", "meskipun menerima", "supaya menerima pun"],
    },
    28: {
      yomi: "テニスの{木村|きむら}{健一|けんいち}{選手|せんしゅ}は、おととしの{全|ぜん}{日本|にほん}{大会|たいかい}{優勝|ゆうしょう}（　）、{競技|きょうぎ}から{離|はな}れていたが、{昨日|きのう}、{正式|せいしき}に{引退|いんたい}を{表明|ひょうめい}した。",
      arti: "Petenis Kimura Ken'ichi, (…) juara Kejuaraan Seluruh Jepang dua tahun lalu, sudah menjauh dari pertandingan, dan kemarin secara resmi mengumumkan pensiun.",
      optYomi: ["を{最後|さいご}に", "を{皮切|かわき}りに", null, "に{沿|そ}って"],
      optArti: ["dengan ... sebagai yang terakhir", "dengan ... sebagai awal", "ketika, menjelang", "sesuai dengan"],
    },
    29: {
      yomi: "{部下|ぶか}「{課長|かちょう}、W{社|しゃ}から{納期|のうき}を{一週間|いっしゅうかん}{早|はや}めてほしいという{連絡|れんらく}があったんですが。」{課長|かちょう}「え、{納期|のうき}の{日程|にってい}を{設定|せってい}したのはあっちだろう。（　）、{納期|のうき}まで2{週間|しゅうかん}の{今|いま}になって、{早|はや}めろと{言|い}うなんて{勝手|かって}{過|す}ぎる。どういうことなんだ。」",
      arti: "Bawahan: \"Pak Kepala, ada kabar dari perusahaan W bahwa mereka ingin tenggat pengiriman dimajukan seminggu.\" Kepala: \"Hah, bukankah yang menetapkan jadwal tenggat itu mereka? (…), sekarang saat tenggat tinggal 2 minggu mereka minta dimajukan, itu terlalu seenaknya. Apa maksudnya?\"",
      optYomi: ["{実|じつ}は", null, null, null],
      optArti: ["sebenarnya", "soalnya, karena", "akan tetapi, hanya saja", "(tetapi) hal itu malah..."],
    },
    30: {
      yomi: "{母|はは}「たかし、{宿題|しゅくだい}は{終|お}わったの？」たかし「まだ{終|お}わってない。{今日|きょう}の{宿題|しゅくだい}、{難|むずか}しくて、{全然|ぜんぜん}（　）。」",
      arti: "Ibu: \"Takashi, PR-nya sudah selesai?\" Takashi: \"Belum selesai. PR hari ini susah, sama sekali (…).\"",
      optArti: ["(habisnya) aku tidak ngerti", "masa sih tidak ngerti", "tidak ngerti, ya?", "hanya karena tidak ngerti"],
    },
    31: {
      yomi: "{新|しん}{市長|しちょう}に{当選|とうせん}した{上田氏|うえだし}は「{選挙中|せんきょちゅう}に{掲|かか}げた{政策|せいさく}を、{市長|しちょう}として{私|わたし}{自|みずか}らが{先頭|せんとう}に{立|た}って{実行|じっこう}して（　）。」と{決意|けつい}を{述|の}べた。",
      arti: "Ueda yang terpilih sebagai wali kota baru menyatakan tekadnya: \"Saya sendiri sebagai wali kota akan berdiri di depan dan (…) melaksanakan kebijakan yang saya usung selama kampanye.\"",
      optYomi: [null, "{願|ねが}います", null, "{頂戴|ちょうだい}します"],
      optArti: ["(akan terus) ... (merendah)", "mohon", "akan melakukan (merendah)", "menerima (merendah)"],
    },
    32: {
      yomi: "{最|さい}{先端|せんたん}の{実験|じっけん}{設備|せつび}を{持|も}ったABC{研究所|けんきゅうじょ}の{研究|けんきゅう}{施設|しせつ}は、{日本|にほん}{一|いち}（　）だろう。",
      arti: "Fasilitas riset Lembaga Penelitian ABC yang memiliki peralatan eksperimen tercanggih, (…) terbaik di Jepang.",
      optYomi: ["の{疑|うたが}いがある", "を{余儀|よぎ}なくさせる", null, "といっても{過言|かごん}ではない"],
      optArti: ["ada kecurigaan", "memaksa (terpaksa)", "tidak ada pilihan selain", "tidak berlebihan jika dikatakan"],
    },
    33: {
      yomi: "{課題|かだい}の{締|し}め{切|き}り{前|まえ}になると、もっと{時間|じかん}があればと{思|おも}うが、（　）、きっと{遊|あそ}んでしまうのだろうとも{思|おも}う。",
      arti: "Menjelang tenggat tugas, saya berpikir andai punya lebih banyak waktu, tetapi saya juga berpikir (…), saya pasti malah akan bermain-main.",
      optArti: ["ada sih ada, tapi", "kalau ada pun (ya begitu juga)", "antara ada dan tidak ada", "kadang ada kadang tidak"],
    },
    34: {
      yomi: "{子供|こども}サッカー{教室|きょうしつ}に、プロサッカー{選手|せんしゅ}の{上田|うえだ}{幸太|こうた}が{参加|さんか}した。{上田|うえだ}{選手|せんしゅ}が{来|く}ることは{参加者|さんかしゃ}には（　）、{突然|とつぜん}の{登場|とうじょう}にみんな{驚|おどろ}いていた。",
      arti: "Pemain sepak bola profesional Ueda Kota ikut dalam kelas sepak bola anak. Kedatangan Ueda (…) kepada peserta, sehingga semua terkejut dengan kemunculannya yang tiba-tiba.",
      optYomi: ["{知|し}られつつも", "{知|し}らされておらず", "{知|し}らされていないと", "{知|し}られたためか"],
      optArti: ["meski diketahui", "tidak diberitahukan, dan", "kalau tidak diberitahukan", "mungkin karena diketahui"],
    },
    35: {
      yomi: "{今回|こんかい}の{最|さい}{優秀|ゆうしゅう}{作品|さくひん}に{対|たい}して、{審査員|しんさいん}たちは、「こんな{瞬間|しゅんかん}を{写真|しゃしん}に{収|おさ}めることができたなんて、まさに{奇跡|きせき}（　）」と{絶賛|ぜっさん}している。",
      arti: "Terhadap karya terbaik kali ini, para juri memuji habis-habisan: \"Bisa mengabadikan momen seperti ini dalam foto, benar-benar (…) keajaiban.\"",
      optYomi: ["とでも{言|い}えばいい", "とすら{言|い}おうとしない", "としか{言|い}いようがない", "と{言|い}ってもしかたがない"],
      optArti: ["sebaiknya disebut saja", "bahkan tidak mau menyebut", "hanya bisa disebut", "percuma disebut"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "A「おとといは{大雨|おおあめ}、{昨日|きのう}は{車|くるま}のパンク。{旅行|りょこう}に{来|き}てからトラブル{続|つづ}きで{嫌|いや}になるよね。」B「{本当|ほんとう}だよ。{最終|さいしゅう}{日|び}の＿＿ ＿＿ ★ ＿＿。」",
      arti: "A: \"Kemarin lusa hujan lebat, kemarin ban mobil bocor. Sejak datang berwisata masalah terus, menyebalkan ya.\" B: \"Betul. Semoga di hari terakhir, hari ini, tidak terjadi apa-apa.\"",
      optYomi: [null, "{今日|きょう}こそ", null, "{起|お}きません"],
      optArti: ["apa pun", "hari ini (semoga) justru", "semoga", "tidak terjadi"],
    },
    37: {
      yomi: "うちの{娘|むすめ}は、なぜあんなに{買|か}い{物|もの}に{時間|じかん}がかかるのか。ブラウス＿＿ ＿＿ ★ ＿＿、{全|まった}くあきれてしまった。",
      arti: "Kenapa anak perempuan saya butuh waktu begitu lama untuk berbelanja? Padahal hanya memilih satu blus, sampai memakan waktu 4 jam, saya benar-benar tercengang.",
      optYomi: ["4{時間|じかん}もかかる", null, "1{枚|まい}{選|えら}ぶ", null],
      optArti: ["sampai memakan 4 jam", "padahal hanya", "memilih satu lembar", "(sampai) ..., (sungguh)"],
    },
    38: {
      yomi: "この{仕事|しごと}をすべて＿＿ ＿＿ ★ ＿＿{無理|むり}だ。",
      arti: "Mengerjakan semua pekerjaan ini seorang diri tidak mungkin bagi karyawan baru Tanaka-san.",
      optYomi: ["{一人|ひとり}でやる", "{新入|しんにゅう}{社員|しゃいん}の{田中|たなか}さん", null, null],
      optArti: ["mengerjakan seorang diri", "karyawan baru Tanaka-san", "bagi", "(hal) itu"],
    },
    39: {
      yomi: "{最近|さいきん}、{運動|うんどう}{不足|ぶそく}だ。{何|なに}しろ{外出|がいしゅつ}＿＿ ＿＿ ★ ＿＿、あとは{朝|あさ}から{晩|ばん}まで{家|いえ}にいるという{生活|せいかつ}なのだ。",
      arti: "Akhir-akhir ini saya kurang olahraga. Soalnya, yang namanya keluar rumah itu hanya sebatas pergi ke supermarket dekat rumah, selebihnya dari pagi sampai malam di rumah saja.",
      optYomi: [null, "{近所|きんじょ}のスーパーに{行|い}く", "{程度|ていど}の", null],
      optArti: ["(hal) yang", "pergi ke supermarket dekat rumah", "sebatas", "kalau bicara soal"],
    },
    40: {
      yomi: "X{交通|こうつう}のバス{路線|ろせん}が{一部|いちぶ}{廃止|はいし}される{問題|もんだい}で、{会社|かいしゃ}{側|がわ}から{地域|ちいき}{住民|じゅうみん}に{対|たい}し、{路線|ろせん}を{廃止|はいし}する＿＿ ＿＿ ★ ＿＿について、{説明|せつめい}がなされた。",
      arti: "Terkait masalah penghapusan sebagian rute bus X Kotsu, pihak perusahaan memberi penjelasan kepada warga setempat tentang kronologi hingga diputuskan menghapus rute serta penanganan ke depannya.",
      optYomi: ["{及|およ}び", "に{至|いた}った", "{経緯|けいい}", "{今後|こんご}の{対応|たいおう}"],
      optArti: ["serta, dan", "sampai pada (keputusan)", "kronologi, latar belakang", "penanganan ke depannya"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["その{前|まえ}に", "そんな{日|ひ}には", null, null],
      optArti: ["sebelum itu", "pada hari seperti itu", "setelah itu", "suatu ketika"],
    },
    42: {
      optYomi: ["{嬉|うれ}しくなった", "{嬉|うれ}しそうにこういった", "{嬉|うれ}しくなるものだ", "{嬉|うれ}しそうにこういうものだ"],
      optArti: ["menjadi senang", "berkata begini dengan gembira", "memang akan jadi senang", "memang biasanya berkata begini dengan gembira"],
    },
    43: {
      optYomi: ["{決|けっ}して{悪|わる}くなかったためだ", "{果|は}たしてよかったのだろうか", "{全然|ぜんぜん}{悪|わる}くなかったのだ", "まだよかったのではないか"],
      optArti: ["karena sama sekali tidak buruk", "apakah benar-benar baik?", "ternyata sama sekali tidak buruk", "bukankah masih lumayan baik?"],
    },
    44: {
      optYomi: ["{彼|かれ}", "{子|こ}ども", "{大人|おとな}", "{自分|じぶん}"],
      optArti: ["dia (anak laki-laki itu)", "anak-anak", "orang dewasa", "diri sendiri"],
    },
    45: {
      optYomi: ["{出会|であ}いたくてたまらなかった", "{出会|であ}えたと{思|おも}った", "{出会|であ}ってもよかった", "{出会|であ}えたおかげかもしれなかった"],
      optArti: ["sangat ingin bertemu", "merasa telah bertemu", "boleh saja bertemu", "mungkin berkat bisa bertemu"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "このメールで{最|もっと}も{伝|つた}えたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan dalam email ini?",
      optYomi: [
        "{申|もう}し{込|こ}みに{必要|ひつよう}な{情報|じょうほう}が{不足|ふそく}しているので、{電話|でんわ}で{知|し}らせてほしい。",
        "{申|もう}し{込|こ}み{方法|ほうほう}が{間違|まちが}っているので、{改|あらた}めて{申|もう}し{込|こ}みをしてほしい。",
        "{電話|でんわ}での{申|もう}し{込|こ}み{時|じ}に{相談|そうだん}{内容|ないよう}を{聞|き}くので、{準備|じゅんび}しておいてほしい。",
        "{平日|へいじつ}{夜|よる}の{時間帯|じかんたい}は{特|とく}に{込|こ}み{合|あ}うので、{早|はや}めに{予約|よやく}してほしい。",
      ],
      optArti: [
        "Informasi yang diperlukan untuk pendaftaran kurang, jadi mohon diberitahukan lewat telepon.",
        "Cara pendaftarannya salah, jadi mohon mendaftar ulang.",
        "Saat mendaftar lewat telepon isi konsultasi akan ditanyakan, jadi mohon dipersiapkan.",
        "Jam malam hari kerja sangat ramai, jadi mohon reservasi lebih awal.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}が「ああっ！」と{叫|さけ}んだのはなぜか。",
      arti: "Mengapa penulis berteriak \"Aaah!\"?",
      optYomi: [
        "{前々|まえまえ}から{抱|いだ}いていた{自身|じしん}の{思|おも}いを{先|さき}に{言|い}われたから",
        "だれかに{言|い}いたかった{自身|じしん}の{気持|きも}ちを{見抜|みぬ}かれたから",
        "{意識|いしき}しないようにしていた{自身|じしん}の{思|おも}いを{指摘|してき}されたから",
        "{言葉|ことば}にできないでいた{自身|じしん}の{気持|きも}ちをズバリ{言|い}われたから",
      ],
      optArti: [
        "Karena pikiran yang sudah lama ia pendam didahului diucapkan orang lain",
        "Karena perasaan yang ingin ia sampaikan kepada seseorang ketahuan",
        "Karena pikiran yang ia usahakan untuk tidak disadari ditunjukkan orang lain",
        "Karena perasaan yang tidak bisa ia ungkapkan dengan kata-kata dikatakan dengan tepat",
      ],
    },
    48: {
      yomi: "{思|おも}い{悩|なや}まずにいられるとあるが、なぜか。",
      arti: "Tertulis \"bisa tidak perlu cemas memikirkannya\"; mengapa?",
      optYomi: [
        "{習慣化|しゅうかんか}された{社会|しゃかい}{共通|きょうつう}の{約束事|やくそくごと}があるから",
        "{社会的|しゃかいてき}な{約束事|やくそくごと}は{日常|にちじょう}{生活|せいかつ}で{教|おし}えられるから",
        "{社会|しゃかい}でお{互|たが}いの{約束事|やくそくごと}が{意識的|いしきてき}に{守|まも}られているから",
        "{習慣|しゅうかん}や{行動|こうどう}に{関|かん}する{約束事|やくそくごと}を{共有|きょうゆう}する{場|ば}が{持|も}てるから",
      ],
      optArti: [
        "Karena ada aturan bersama masyarakat yang sudah menjadi kebiasaan",
        "Karena aturan sosial diajarkan dalam kehidupan sehari-hari",
        "Karena di masyarakat aturan bersama dijaga secara sadar",
        "Karena ada tempat untuk berbagi aturan mengenai kebiasaan dan perilaku",
      ],
    },
    49: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えを{表|あらわ}しているのはどれか。",
      arti: "Mana yang menggambarkan pendapat penulis?",
      optYomi: [
        "{花|はな}そのものの{白|しろ}さは{物理的|ぶつりてき}な{指標|しひょう}で{示|しめ}せない。",
        "{花|はな}そのものの{白|しろ}さは{他|ほか}の{物|もの}との{比較|ひかく}によって{決|き}まる。",
        "{花|はな}の{白|しろ}さの{印象|いんしょう}は{白色度|はくしょくど}では{説明|せつめい}できない。",
        "{花|はな}びらより{咲|さ}き{誇|ほこ}る{花々|はなばな}のほうが{白色度|はくしょくど}が{高|たか}い。",
      ],
      optArti: [
        "Putihnya bunga itu sendiri tidak bisa ditunjukkan dengan indikator fisik.",
        "Putihnya bunga itu sendiri ditentukan oleh perbandingan dengan benda lain.",
        "Kesan putih bunga tidak bisa dijelaskan dengan derajat keputihan.",
        "Bunga-bunga yang mekar indah lebih tinggi derajat keputihannya daripada kelopak bunga.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "①{市場|しじょう}の{健全|けんぜん}さの{表|あらわ}れとあるが、{何|なに}が{健全|けんぜん}さの{表|あらわ}れか。",
      arti: "Tertulis \"① tanda sehatnya pasar\"; apa yang menjadi tanda sehatnya pasar?",
      optYomi: [
        "{製品|せいひん}のマークに{無関心|むかんしん}な{人|ひと}が{多|おお}いこと",
        "{製品|せいひん}のマークの{意味|いみ}を{知|し}らない{人|ひと}がいないこと",
        "{製品|せいひん}のほとんどにマークが{付|つ}いていること",
        "{製品|せいひん}の{質|しつ}がマークによって{保証|ほしょう}されていること",
      ],
      optArti: [
        "Banyak orang yang tidak peduli pada tanda di produk",
        "Tidak ada orang yang tidak tahu arti tanda di produk",
        "Hampir semua produk memiliki tanda",
        "Kualitas produk dijamin oleh tanda",
      ],
    },
    51: {
      yomi: "②{本来|ほんらい}の{機能|きのう}とあるが、どのような{機能|きのう}か。",
      arti: "Tertulis \"② fungsi sebenarnya\"; fungsi seperti apa?",
      optYomi: [
        "{製品|せいひん}の{不具合|ふぐあい}や{問題点|もんだいてん}が{解決|かいけつ}されていることを{証明|しょうめい}する。",
        "{外国|がいこく}{製品|せいひん}と{自国|じこく}の{製品|せいひん}とを{区別|くべつ}するための{情報|じょうほう}を{与|あた}える。",
        "{消費者|しょうひしゃ}の{購入|こうにゅう}{意欲|いよく}を{高|たか}めるとともに、{地域|ちいき}{社会|しゃかい}の{経済|けいざい}を{支|ささ}える。",
        "{消費者|しょうひしゃ}に{安心|あんしん}できる{製品|せいひん}であることを{伝|つた}え、{公共|こうきょう}の{利益|りえき}を{守|まも}る。",
      ],
      optArti: [
        "Membuktikan bahwa cacat dan masalah produk sudah diatasi.",
        "Memberi informasi untuk membedakan produk asing dan produk dalam negeri.",
        "Meningkatkan minat beli konsumen sekaligus menopang ekonomi masyarakat setempat.",
        "Menyampaikan kepada konsumen bahwa produk itu aman, dan melindungi kepentingan umum.",
      ],
    },
    52: {
      yomi: "{適合|てきごう}マークについて、{検討|けんとう}が{必要|ひつよう}になったきっかけは{何|なん}だと{筆者|ひっしゃ}は{述|の}べているか。",
      arti: "Menurut penulis, apa pemicu perlunya pengkajian mengenai tanda kesesuaian?",
      optYomi: [
        "{外国|がいこく}{製品|せいひん}に{対|たい}する{消費者|しょうひしゃ}の{関心|かんしん}が{高|たか}まったこと",
        "{各国|かっこく}の{適合性|てきごうせい}{評価|ひょうか}への{信頼性|しんらいせい}が{失|うしな}われていったこと",
        "{各国|かっこく}の{適合|てきごう}マークが{混在|こんざい}して{理解|りかい}しにくくなったこと",
        "{適合|てきごう}マークが{付|つ}いていない{外国|がいこく}{製品|せいひん}が{流通|りゅうつう}し{始|はじ}めたこと",
      ],
      optArti: [
        "Meningkatnya minat konsumen terhadap produk asing",
        "Hilangnya kepercayaan pada penilaian kesesuaian tiap negara",
        "Tanda kesesuaian tiap negara bercampur sehingga sulit dipahami",
        "Mulai beredarnya produk asing tanpa tanda kesesuaian",
      ],
    },
    53: {
      yomi: "{何|なに}もせずに{同|おな}じところにとどまっているのがリスクなのは、なぜか。",
      arti: "Mengapa diam di tempat yang sama tanpa melakukan apa pun merupakan risiko?",
      optYomi: [
        "{安定|あんてい}や{安心|あんしん}を{失|うしな}うから",
        "{未来|みらい}を{考|かんが}えられなくなるから",
        "{社会|しゃかい}の{進歩|しんぽ}を{止|と}めてしまうから",
        "{周囲|しゅうい}の{進歩|しんぽ}から{取|と}り{残|のこ}されるから",
      ],
      optArti: [
        "Karena kehilangan kestabilan dan rasa aman",
        "Karena jadi tidak bisa memikirkan masa depan",
        "Karena menghentikan kemajuan masyarakat",
        "Karena tertinggal dari kemajuan di sekitar",
      ],
    },
    54: {
      yomi: "ノウハウ{本|ぼん}なるものをまったく{信用|しんよう}していないとあるが、なぜか。",
      arti: "Tertulis \"sama sekali tidak memercayai yang namanya buku kiat-kiat\"; mengapa?",
      optYomi: [
        "{過去|かこ}の{成功|せいこう}{例|れい}から、{新|あたら}しい{法則|ほうそく}は{導|みちび}き{出|だ}せないから",
        "{過去|かこ}の{成功|せいこう}{例|れい}から、{成功|せいこう}した{本人|ほんにん}にしか{再現|さいげん}できないから",
        "{変化|へんか}の{速|はや}い{現代|げんだい}においては、{過去|かこ}の{成功|せいこう}{例|れい}は{役|やく}に{立|た}たないから",
        "グローバル{時代|じだい}においては、{個人|こじん}の{成功|せいこう}{例|れい}はささいなものだから",
      ],
      optArti: [
        "Karena dari contoh sukses masa lalu tidak bisa diturunkan hukum baru",
        "Karena contoh sukses masa lalu hanya bisa diulangi oleh orang yang sukses itu sendiri",
        "Karena di zaman sekarang yang cepat berubah, contoh sukses masa lalu tidak berguna",
        "Karena di era global, contoh sukses pribadi adalah hal sepele",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}によると、{変化|へんか}する{時代|じだい}を{生|い}きていくうえで{必要|ひつよう}なことは{何|なに}か。",
      arti: "Menurut penulis, apa yang diperlukan untuk hidup di zaman yang terus berubah?",
      optYomi: [
        "{社会|しゃかい}の{動|うご}きを{敏感|びんかん}に{察知|さっち}できること",
        "{自身|じしん}で{主体的|しゅたいてき}に{世|よ}の{中|なか}をとらえること",
        "{世|よ}の{中|なか}の{変化|へんか}を{広|ひろ}い{視野|しや}でとらえること",
        "{他者|たしゃ}と{自身|じしん}の{視点|してん}の{違|ちが}いを{見|み}つけること",
      ],
      optArti: [
        "Mampu menangkap pergerakan masyarakat dengan peka",
        "Memandang dunia secara mandiri dengan sudut pandang sendiri",
        "Memandang perubahan dunia dengan wawasan luas",
        "Menemukan perbedaan sudut pandang diri sendiri dan orang lain",
      ],
    },
    56: {
      yomi: "①それが{実感|じっかん}できるとあるが、{何|なに}が{実感|じっかん}できるのか。",
      arti: "Tertulis \"① hal itu bisa dirasakan\"; apa yang bisa dirasakan?",
      optYomi: [
        "{自由|じゆう}という{言葉|ことば}の{重|おも}さ",
        "{自由|じゆう}という{言葉|ことば}のあいまいさ",
        "{自由|じゆう}という{言葉|ことば}の{解釈|かいしゃく}の{違|ちが}い",
        "{自由|じゆう}という{言葉|ことば}の{使|つか}い{方|かた}の{難|むずか}しさ",
      ],
      optArti: [
        "Beratnya kata \"kebebasan\"",
        "Ambiguitas kata \"kebebasan\"",
        "Perbedaan tafsiran kata \"kebebasan\"",
        "Sulitnya menggunakan kata \"kebebasan\"",
      ],
    },
    57: {
      yomi: "②{自由|じゆう}におやり{下|くだ}さいと{言|い}われると、どのように{感|かん}じると{筆者|ひっしゃ}は{述|の}べているか。",
      arti: "Menurut penulis, bagaimana perasaan orang ketika diberi tahu \"② silakan lakukan dengan bebas\"?",
      optYomi: [
        "{失敗|しっぱい}すると{思|おも}われている。",
        "{責任|せきにん}を{押|お}しつけられている。",
        "{思|おも}いどおりにやらせてもらえる。",
        "あまり{頼|たよ}りにならないと{思|おも}われている。",
      ],
      optArti: [
        "Dianggap akan gagal.",
        "Dibebani tanggung jawab.",
        "Diperbolehkan melakukan sesuka hati.",
        "Dianggap tidak begitu bisa diandalkan.",
      ],
    },
    58: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{自由|じゆう}を{定義|ていぎ}できなければ、{自由|じゆう}を{主張|しゅちょう}するべきではない。",
        "{自由|じゆう}の{本当|ほんとう}の{意味|いみ}がわからなければ、{自由|じゆう}を{与|あた}えられるべきではない。",
        "{自由|じゆう}に{伴|ともな}う{責任|せきにん}を{感|かん}じられなければ、{自由|じゆう}という{言葉|ことば}を{使|つか}うべきではない。",
        "{自由|じゆう}と{不自由|ふじゆう}の{違|ちが}いがわからなければ、{自由|じゆう}に{生|い}きることを{許|ゆる}されるべきではない。",
      ],
      optArti: [
        "Jika tidak bisa mendefinisikan kebebasan, jangan menuntut kebebasan.",
        "Jika tidak memahami makna sebenarnya kebebasan, tidak semestinya diberi kebebasan.",
        "Jika tidak bisa merasakan tanggung jawab yang menyertai kebebasan, jangan memakai kata \"kebebasan\".",
        "Jika tidak memahami beda bebas dan tidak bebas, tidak semestinya diizinkan hidup bebas.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{帰|かえ}ってきたなあと{実感|じっかん}するのは、どんなときか。",
      arti: "Kapan penulis merasakan \"ah, aku sudah pulang\"?",
      optYomi: [
        "{都心|としん}に{向|む}かう{列車|れっしゃ}のなかで{静|しず}けさを{感|かん}じたとき",
        "{日本|にほん}の{自然|しぜん}の{色合|いろあ}いをあらためて{意識|いしき}したとき",
        "{日本|にほん}には{緑|みどり}が{多|おお}いことにあらためて{気|き}づいたとき",
        "{四季|しき}の{変化|へんか}が{感|かん}じられるような{色|いろ}に{気|き}づいたとき",
      ],
      optArti: [
        "Saat merasakan keheningan di kereta menuju pusat kota",
        "Saat kembali menyadari nuansa warna alam Jepang",
        "Saat kembali menyadari bahwa Jepang banyak hijaunya",
        "Saat menyadari warna yang memperlihatkan perubahan empat musim",
      ],
    },
    60: {
      yomi: "{外国|がいこく}を{旅|たび}しているときの、{筆者|ひっしゃ}の{自然|しぜん}に{対|たい}する{反応|はんのう}はどのようなものか。",
      arti: "Bagaimana reaksi penulis terhadap alam saat bepergian di luar negeri?",
      optYomi: [
        "{色彩|しきさい}の{多様|たよう}さに{驚|おどろ}くことはあるが、とくべつよいとは{感|かん}じない。",
        "{色彩|しきさい}が{強烈|きょうれつ}だと{思|おも}うことはあるが、{見|み}とれることはあまりない。",
        "{景色|けしき}にひかれることはあるが、{色彩|しきさい}にとくべつな{印象|いんしょう}は{持|も}たない。",
        "{懐|なつ}かしい{景色|けしき}だと{思|おも}うことはあるが、{色彩|しきさい}がやわらかいとは{思|おも}わない。",
      ],
      optArti: [
        "Kadang terkejut dengan ragam warnanya, tetapi tidak merasa istimewa.",
        "Kadang merasa warnanya mencolok, tetapi jarang terpukau.",
        "Kadang tertarik pada pemandangannya, tetapi tidak punya kesan khusus terhadap warnanya.",
        "Kadang merasa pemandangannya nostalgik, tetapi tidak merasa warnanya lembut.",
      ],
    },
    61: {
      yomi: "{帰国|きこく}したときに{都心|としん}の{風景|ふうけい}を{見|み}て、{筆者|ひっしゃ}はどう{感|かん}じるのか。",
      arti: "Bagaimana perasaan penulis saat melihat pemandangan pusat kota sepulang ke Jepang?",
      optYomi: [
        "{自分|じぶん}の{一部|いちぶ}であるような{親|した}しみを{感|かん}じる。",
        "{自分|じぶん}を{受|う}け{入|い}れてくれる{優|やさ}しさを{感|かん}じる。",
        "{自分|じぶん}の{好|この}みに{合|あ}っている{場所|ばしょ}だと{感|かん}じる。",
        "{自分|じぶん}のふだんの{生活|せいかつ}に{戻|もど}ったように{感|かん}じる。",
      ],
      optArti: [
        "Merasakan keakraban seolah-olah itu bagian dari dirinya.",
        "Merasakan kehangatan yang menerima dirinya.",
        "Merasa itu tempat yang sesuai seleranya.",
        "Merasa seperti kembali ke kehidupan sehari-harinya.",
      ],
    },
    62: {
      yomi: "{筆者|ひっしゃ}は、{旅|たび}というものをどのようにとらえているか。",
      arti: "Bagaimana penulis memandang perjalanan?",
      optYomi: [
        "{旅|たび}は、{慣|な}れ{親|した}しんだ{景色|けしき}のよさを{再|さい}{確認|かくにん}させてくれる。",
        "{旅|たび}は、{見慣|みな}れた{風景|ふうけい}に{新|あたら}しい{何|なに}かを{発見|はっけん}することを{可能|かのう}にする。",
        "{旅|たび}は、{旅先|たびさき}と{慣|な}れ{親|した}しんだ{景色|けしき}の{違|ちが}いに{気|き}づいたとき{終|お}わる。",
        "{旅|たび}は、{見慣|みな}れた{風景|ふうけい}が{再|ふたた}びありふれた{日常|にちじょう}になるまで{続|つづ}いている。",
      ],
      optArti: [
        "Perjalanan membuat kita kembali menyadari indahnya pemandangan yang sudah akrab.",
        "Perjalanan memungkinkan kita menemukan sesuatu yang baru di pemandangan yang biasa dilihat.",
        "Perjalanan berakhir saat kita menyadari perbedaan tempat tujuan dengan pemandangan yang akrab.",
        "Perjalanan terus berlangsung sampai pemandangan yang biasa dilihat kembali menjadi keseharian biasa.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{漫画|まんが}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang manga?",
      optYomi: [
        "AもBも、{子|こ}どもにとって{魅力的|みりょくてき}なメディアだと{述|の}べている。",
        "AもBも、{子|こ}どもの{学習|がくしゅう}の{妨|さまた}げになるという{考|かんが}えは{間違|まちが}いだと{述|の}べている。",
        "Aは{子|こ}どもの{知識|ちしき}を{深|ふか}めるのに{役立|やくだ}つと{述|の}べ、Bは{学習|がくしゅう}{資料|しりょう}などとして{活用|かつよう}できると{述|の}べている。",
        "Aは{子|こ}どもの{関心|かんしん}を{広|ひろ}げるきっかけになると{述|の}べ、Bは{見方|みかた}や{特性|とくせい}を{教|おし}えれば{子|こ}どものためになると{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan bahwa manga adalah media yang menarik bagi anak.",
        "A dan B sama-sama menyatakan bahwa anggapan manga menghambat belajar anak itu keliru.",
        "A menyatakan manga berguna untuk memperdalam pengetahuan anak; B menyatakan manga bisa dimanfaatkan sebagai bahan belajar dan sebagainya.",
        "A menyatakan manga menjadi pemicu meluasnya minat anak; B menyatakan manga bermanfaat bagi anak jika diajarkan cara membaca dan karakteristiknya.",
      ],
    },
    64: {
      yomi: "{学校|がっこう}{図書館|としょかん}に{漫画|まんが}を{置|お}くことについて、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang menyediakan manga di perpustakaan sekolah?",
      optYomi: [
        "AもBも、{他|ほか}の{本|ほん}と{同|おな}じように{選択肢|せんたくし}に{含|ふく}めたほうがよいと{述|の}べている。",
        "AもBも、{図書館|としょかん}が{魅力的|みりょくてき}な{場所|ばしょ}になるのでよいと{述|の}べている。",
        "Aは{図書館|としょかん}の{活性化|かっせいか}につながるのでよいと{述|の}べ、Bは{直接|ちょくせつ}{学習|がくしゅう}に{役立|やくだ}つものならよいと{述|の}べている。",
        "Aは{図書|としょ}の{選択|せんたく}は{慎重|しんちょう}にならざるをえないと{述|の}べ、Bは{長期的|ちょうきてき}な{視点|してん}で{検討|けんとう}すべきだと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan sebaiknya manga dimasukkan sebagai pilihan sama seperti buku lain.",
        "A dan B sama-sama menyatakan itu baik karena perpustakaan menjadi tempat yang menarik.",
        "A menyatakan itu baik karena menghidupkan perpustakaan; B menyatakan boleh asal langsung berguna untuk belajar.",
        "A menyatakan pemilihan buku mau tak mau harus hati-hati; B menyatakan perlu dikaji dari sudut pandang jangka panjang.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "①{現代|げんだい}という{時代|じだい}とは、どのような{時代|じだい}だと{筆者|ひっしゃ}は{述|の}べているか。",
      arti: "Menurut penulis, \"① zaman modern\" itu zaman seperti apa?",
      optYomi: [
        "{人々|ひとびと}が{必要性|ひつようせい}を{感|かん}じているものを、{企業|きぎょう}がすぐに{察知|さっち}し{製品化|せいひんか}している",
        "{人々|ひとびと}の{購買欲|こうばいよく}にこたえるために、{企業|きぎょう}が{必要|ひつよう}{以上|いじょう}のものを{開発|かいはつ}している。",
        "{企業|きぎょう}の{多|おお}くの{発明|はつめい}によって、{人々|ひとびと}の{便利|べんり}な{生活|せいかつ}が{支|ささ}えられている。",
        "{企業|きぎょう}が{次々|つぎつぎ}に{新|しん}{製品|せいひん}を{売|う}り{込|こ}むことで、{人々|ひとびと}の{欲望|よくぼう}が{膨|ふく}れ{上|あ}がっている。",
      ],
      optArti: [
        "Perusahaan segera menangkap apa yang dirasa perlu oleh orang-orang dan menjadikannya produk",
        "Untuk menjawab hasrat belanja orang, perusahaan mengembangkan barang melebihi kebutuhan.",
        "Kehidupan praktis orang-orang ditopang oleh banyak penemuan perusahaan.",
        "Karena perusahaan terus-menerus memasarkan produk baru, hasrat orang-orang makin membengkak.",
      ],
    },
    66: {
      yomi: "②{不可能|ふかのう}であるとあるが、なぜか。",
      arti: "Tertulis \"② tidak mungkin\"; mengapa?",
      optYomi: [
        "{人|ひと}は{外部|がいぶ}の{情報|じょうほう}なしでは{生|い}きられないものだから",
        "{人|ひと}は{他者|たしゃ}とのつながりを{棄|す}てきれないものだから",
        "{人|ひと}は{不便|ふべん}で{手間|てま}のかかる{生活|せいかつ}に{戻|もど}れなくなっているから",
        "{人|ひと}は{新|あたら}しいテクノロジーがよいものだと{思|おも}い{込|こ}んでいるから",
      ],
      optArti: [
        "Karena manusia tidak bisa hidup tanpa informasi dari luar",
        "Karena manusia tidak bisa sepenuhnya membuang hubungan dengan orang lain",
        "Karena manusia sudah tidak bisa kembali ke kehidupan yang tidak praktis dan merepotkan",
        "Karena manusia yakin bahwa teknologi baru itu baik",
      ],
    },
    67: {
      yomi: "③そことは{何|なに}を{指|さ}しているか。",
      arti: "\"③ di situ\" merujuk pada apa?",
      optYomi: [
        "{古|ふる}い{機器|きき}を{棄|す}てられない{生活|せいかつ}",
        "{便利|べんり}な{機器|きき}に{囲|かこ}まれた{生活|せいかつ}",
        "{新|あたら}しい{機器|きき}に{頼|たよ}らない{生活|せいかつ}",
        "{必要|ひつよう}な{機器|きき}だけを{使|つか}う{生活|せいかつ}",
      ],
      optArti: [
        "Kehidupan yang tidak bisa membuang alat-alat lama",
        "Kehidupan yang dikelilingi alat-alat praktis",
        "Kehidupan yang tidak bergantung pada alat-alat baru",
        "Kehidupan yang hanya memakai alat yang diperlukan",
      ],
    },
    68: {
      yomi: "{筆者|ひっしゃ}は、どのようにして「{幸福|こうふく}」を{得|え}ようとしているか。",
      arti: "Bagaimana cara penulis berusaha memperoleh \"kebahagiaan\"?",
      optYomi: [
        "{欲望|よくぼう}を{抑制|よくせい}して、{自身|じしん}が{本当|ほんとう}に{気|き}に{入|い}った{機器|きき}だけを{手|て}に{入|い}れる。",
        "{機器|きき}とのかかわりを{制限|せいげん}して{得|え}られた{時間|じかん}を、{自身|じしん}のために{使|つか}う",
        "{便利|べんり}さや{効率性|こうりつせい}を{放棄|ほうき}して、{自身|じしん}が{本当|ほんとう}に{必要|ひつよう}なものを{見極|みきわ}める",
        "ものに{対|たい}する{執着心|しゅうちゃくしん}を{棄|す}てて、{自身|じしん}のための{時間|じかん}を{生|う}み{出|だ}す。",
      ],
      optArti: [
        "Menahan hasrat dan hanya membeli alat yang benar-benar ia sukai.",
        "Menggunakan waktu yang didapat dengan membatasi keterlibatan dengan alat-alat untuk dirinya sendiri",
        "Meninggalkan kepraktisan dan efisiensi, lalu memilah apa yang benar-benar ia butuhkan",
        "Membuang keterikatan pada barang dan menciptakan waktu untuk dirinya sendiri.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{中西|なかにし}さんは35{歳|さい}の{会社員|かいしゃいん}で、CPJカードを{申|もう}し{込|こ}むことにした。{中西|なかにし}さんは{年会費|ねんかいひ}を5000{円|えん}{以内|いない}に{抑|おさ}えたいが、{海外|かいがい}{旅行|りょこう}の{保険|ほけん}はなるべく{高額|こうがく}なものがよい。{中西|なかにし}さんに{最|もっと}も{合|あ}っているカードはどれか。",
      arti: "Nakanishi-san adalah karyawan berusia 35 tahun yang memutuskan mendaftar kartu CPJ. Ia ingin iuran tahunan tidak lebih dari 5.000 yen, tetapi asuransi perjalanan luar negerinya sebisa mungkin bernilai tinggi. Kartu mana yang paling cocok untuk Nakanishi-san?",
      optArti: ["Kartu A", "Kartu B", "Kartu C", "Kartu D"],
    },
    70: {
      yomi: "{会社員|かいしゃいん}の{山本|やまもと}さんはCPJカードを{申|もう}し{込|こ}むことにした。{山本|やまもと}さんは{引|ひ}っ{越|こ}しをしたばかりのため、{運転|うんてん}{免許証|めんきょしょう}に{書|か}かれた{住所|じゅうしょ}と{現住所|げんじゅうしょ}が{異|こと}なっている。カードを{申|もう}し{込|こ}む{際|さい}、{入会|にゅうかい}{申込書|もうしこみしょ}のほかに、{次|つぎ}のどの{書類|しょるい}を{提出|ていしゅつ}しなければならないか。",
      arti: "Yamamoto-san, seorang karyawan, memutuskan mendaftar kartu CPJ. Karena baru pindah rumah, alamat di SIM-nya berbeda dengan alamat sekarang. Saat mendaftar, selain formulir pendaftaran, dokumen mana yang harus ia serahkan?",
      optYomi: [
        "{運転|うんてん}{免許証|めんきょしょう}のコピーだけ",
        "{運転|うんてん}{免許証|めんきょしょう}のコピーと{住民票|じゅうみんひょう}のコピー",
        "{運転|うんてん}{免許証|めんきょしょう}のコピーと{先月|せんげつ}の{電話|でんわ}{料金|りょうきん}の{領収書|りょうしゅうしょ}のコピー",
        "{運転|うんてん}{免許証|めんきょしょう}のコピーと{先月|せんげつ}の{水道|すいどう}{料金|りょうきん}の{領収書|りょうしゅうしょ}のコピー",
      ],
      optArti: [
        "Fotokopi SIM saja",
        "Fotokopi SIM dan fotokopi surat keterangan domisili",
        "Fotokopi SIM dan fotokopi kuitansi tagihan telepon bulan lalu",
        "Fotokopi SIM dan fotokopi kuitansi tagihan air bulan lalu",
      ],
    },
  },

  bacaan: {
    // ── 問題7：これがおもしろいんだ！ ──
    "7": {
      yomi: `{毎年|まいとし}{夏|なつ}になると{自宅|じたく}の{書斎|しょさい}で、{自分|じぶん}が{作|つく}ったものがたりを{語|かた}る{会|かい}をしている。

{自宅|じたく}のある{山梨県|やまなしけん}の{小淵沢|こぶちざわ}は{高原|こうげん}で{涼|すず}しいし、{参加|さんか}{自由|じゆう}だし、というわけで{大勢|おおぜい}の{大人|おとな}や{子|こ}どもが{連日|れんじつ}{来|き}てくれる。

{去年|きょねん}の{夏|なつ}のこと。{近|ちか}くの{別荘|べっそう}からおばあさんといっしょにしょっちゅう{通|かよ}ってくる{小二|しょうに}（{注|ちゅう}1）の{男|おとこ}の{子|こ}がいた。とてもお{話|はなし}{好|ず}きらしい。

だから、その{子|こ}が{来|く}ると、ぼくも{考|かんが}えて、{初|はじ}めての{話|はなし}をするようにしていた。

ところが、それが{重|かさ}なるとだんだんこちらも{手持|ても}ちの{話|はなし}がなくなってくる。ないわけではないけれど、{今年|ことし}の{新作|しんさく}は{限|かぎ}られているし、{他|ほか}の{人|ひと}にも{新作|しんさく}を{聞|き}いてもらいたい。

[41]、{来|き}てくれた{人|ひと}を{見渡|みわた}して、その{男|おとこ}の{子|こ}にだけもう{一度|いちど}{同|おな}じ{話|はなし}を{聞|き}くことを{我慢|がまん}してもらえば、{他|ほか}の{人|ひと}におもしろい{話|はなし}ができることに{気|き}がついた。

そこで、{彼|かれ}には{悪|わる}いなあと{思|おも}いつつ、「{八ヶ岳|やつがたけ}の{霧|きり}という{話|はなし}をします」ときりだした。

すると、{男|おとこ}の{子|こ}は{顔面|がんめん}をくしゃくしゃにして、[42]、「これがおもしろいんだ！」

そのとたんにぼくは{悟|さと}った。

ぼくは{彼|かれ}を{見|み}くびって（{注|ちゅう}2）いた。

{同|おな}じ{話|はなし}をして、[43]。

お{話|はなし}を{聞|き}き{慣|な}れていない{子|こ}は{知|し}っている{話|はなし}にぶつかったとき、「あ、それ、{知|し}ってる！」という{言|い}い{方|かた}で{終|お}わりにする。あらすじを{知|し}ることがお{話|はなし}を{知|し}ることだと{思|おも}い、すべてを{知|し}っていくだけなのだ。

でも、[44]は{違|ちが}った。

お{話|はなし}で{大切|たいせつ}なのはあらすじではない。

あのいいまわし、あの{呼吸|こきゅう}、あのどきどき{感|かん}、あのばかばかしさ。それを{何度|なんど}でも{味|あじ}わうことなのだ。だから{落語|らくご}{好|ず}きは{知|し}っている{話|はなし}を{聞|き}くために{何度|なんど}でも{寄席|よせ}（{注|ちゅう}3）に{通|かよ}う。

あとから{同|おな}じ{道|みち}を{歩|ある}いてくる、いい{仲間|なかま}に[45]。
（{杉山|すぎやま}{亮|あきら}『{母|はは}の{友|とも}』2008{年|ねん}2{月|がつ}{号|ごう}による）
（{注|ちゅう}1）{小二|しょうに}：{小学校|しょうがっこう}の2{年生|ねんせい}のこと。{年齢|ねんれい}は7、8{歳|さい}
（{注|ちゅう}2）{見|み}くびる：ここでは、{相手|あいて}を{実際|じっさい}よりも{低|ひく}く{評価|ひょうか}すること
（{注|ちゅう}3）{寄席|よせ}：{落語|らくご}を{観客|かんきゃく}に{聞|き}かせるための{場所|ばしょ}`,
      arti: `Setiap musim panas, di ruang baca rumah saya, saya mengadakan acara bercerita, membawakan dongeng-dongeng karangan saya sendiri.

Kobuchizawa di Prefektur Yamanashi, tempat rumah saya, adalah dataran tinggi yang sejuk, dan siapa pun bebas ikut, sehingga banyak orang dewasa dan anak-anak datang setiap hari.

Itu terjadi musim panas tahun lalu. Ada seorang anak laki-laki kelas 2 SD (catatan 1) yang sering datang bersama neneknya dari vila di dekat situ. Tampaknya ia sangat suka cerita.

Karena itu, setiap kali anak itu datang, saya pun memikirkannya dan berusaha membawakan cerita yang belum pernah ia dengar.

Namun, karena hal itu terus berulang, lama-lama persediaan cerita saya pun habis. Bukannya tidak ada sama sekali, tetapi karya baru tahun ini terbatas, dan saya juga ingin orang lain mendengar karya baru.

[41], saya memandang orang-orang yang datang, dan tersadar bahwa jika anak laki-laki itu saja mau bersabar mendengar cerita yang sama sekali lagi, saya bisa membawakan cerita yang menarik bagi orang lain.

Maka, sambil merasa tidak enak kepadanya, saya membuka: "Saya akan membawakan cerita berjudul Kabut Yatsugatake."

Lalu, anak itu mengernyitkan seluruh wajahnya dan [42], "Cerita ini seru!"

Saat itu juga saya tersadar.

Saya telah meremehkan (catatan 2) dia.

Membawakan cerita yang sama, [43].

Anak yang belum terbiasa mendengar cerita, ketika bertemu cerita yang sudah ia tahu, akan mengakhirinya dengan berkata, "Ah, itu aku sudah tahu!" Ia mengira mengetahui alur cerita sama dengan mengetahui cerita itu, dan sekadar terus mengumpulkan pengetahuan tentang semuanya.

Tetapi [44] berbeda.

Yang penting dalam sebuah cerita bukanlah alurnya.

Ungkapan itu, irama itu, rasa deg-degan itu, kekonyolan itu. Yang penting adalah menikmatinya berkali-kali. Karena itulah penggemar rakugo berkali-kali datang ke yose (catatan 3) untuk mendengar cerita yang sudah mereka ketahui.

Saya [45] seorang kawan baik yang kelak akan menapaki jalan yang sama.
(Dari tulisan Sugiyama Akira, majalah "Haha no Tomo" edisi Februari 2008)
(Catatan 1) 小二: kelas 2 sekolah dasar, usia 7–8 tahun
(Catatan 2) 見くびる: di sini, menilai orang lain lebih rendah dari kenyataannya
(Catatan 3) 寄席: tempat pertunjukan rakugo bagi penonton`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{以下|いか}は、ある{法律|ほうりつ}{相談会|そうだんかい}に{申|もう}し{込|こ}んだ{人|ひと}に{送|おく}られてきたメールである。

{北原|きたはら}{健二|けんじ}{様|さま}

RST{法律|ほうりつ}{事務所|じむしょ}の{田中|たなか}{良平|りょうへい}と{申|もう}します。

{昨日|さくじつ}、{当|とう}{事務所|じむしょ}の「{無料|むりょう}{法律|ほうりつ}{相談会|そうだんかい}」にメールにてお{申|もう}し{込|こ}みいただきましたが、ご{予約|よやく}は{電話|でんわ}のみとさせていただいております。お{手数|てすう}をおかけいたしますが、{再度|さいど}お{電話|でんわ}にてお{申|もう}し{込|こ}みくださいますようお{願|ねが}いいたします。その{際|さい}、ご{相談|そうだん}{内容|ないよう}についての{簡単|かんたん}な{質問|しつもん}をさせていただきますのでご{了承|りょうしょう}ください。

なお、{平日|へいじつ}{夜|よる}の{時間帯|じかんたい}は{大変|たいへん}{込|こ}み{合|あ}いますので、お{早|はや}めにお{申|もう}し{込|こ}みくださいますようお{願|ねが}いいたします。

RST{法律|ほうりつ}{事務所|じむしょ}　{田中|たなか}{良平|りょうへい}
{電話|でんわ}：031-234-5544（{平日|へいじつ}10〜17{時|じ}）
メールアドレス：rtanaka@rst-houritsu.co.jp
ホームページ：http://www.rst-houritsu.net/consult/html`,
      arti: `Berikut ini adalah email yang dikirim kepada orang yang mendaftar ke sebuah sesi konsultasi hukum.

Yth. Bapak Kitahara Kenji

Saya Tanaka Ryohei dari Kantor Hukum RST.

Kemarin Bapak mendaftar ke "Sesi Konsultasi Hukum Gratis" kantor kami melalui email, tetapi reservasi hanya kami terima melalui telepon. Mohon maaf merepotkan, tetapi mohon mendaftar kembali melalui telepon. Pada saat itu, kami akan mengajukan beberapa pertanyaan singkat mengenai isi konsultasi; mohon dimaklumi.

Selain itu, jam malam pada hari kerja sangat ramai, jadi mohon mendaftar lebih awal.

Kantor Hukum RST, Tanaka Ryohei
Telepon: 031-234-5544 (hari kerja pukul 10–17)
Alamat email: rtanaka@rst-houritsu.co.jp
Situs web: http://www.rst-houritsu.net/consult/html`,
    },
    "8-2": {
      yomi: `{井上|いのうえ}ひさし（{注|ちゅう}1）さんが、「エッセイとはすなわち、{自慢話|じまんばなし}である」といったことを{書|か}いていらしたのを、{以前|いぜん}{読|よ}んだことがありますが、{私|わたし}はその{文|ぶん}を{一読|いちどく}した{瞬間|しゅんかん}、「ああっ！」と{叫|さけ}んで{赤面|せきめん}（{注|ちゅう}2）したのでした。

エッセイ＝{自慢|じまん}、とはまさにその{通|とお}り。エッセイを{書|か}く{仕事|しごと}をしている{私|わたし}は、{心|こころ}のどこかでそのことを{感|かん}じつつ、{気付|きづ}かない{努力|どりょく}をしていた{気|き}がする。

しかしそのようにズバリ{言|い}われると、「{私|わたし}は{今|いま}まで、{自慢話|じまんばなし}によって、{口|くち}を{糊|のり}して（{注|ちゅう}3）きたのだなあ」ということが、{明確|めいかく}に{理解|りかい}できるのです。
（{酒井|さかい}{順子|じゅんこ}『{黒|くろ}いマナー』による）
（{注|ちゅう}1）{井上|いのうえ}ひさし：{日本|にほん}の{小説家|しょうせつか}
（{注|ちゅう}2）{赤面|せきめん}する：{顔|かお}が{赤|あか}くなる
（{注|ちゅう}3）{口|くち}を{糊|のり}する：ここでは、{生計|せいけい}を{立|た}てる`,
      arti: `Dulu saya pernah membaca tulisan Inoue Hisashi (catatan 1) yang kurang lebih mengatakan, "Esai, dengan kata lain, adalah cerita membanggakan diri." Begitu membaca kalimat itu, saya berteriak "Aaah!" dan wajah saya memerah (catatan 2).

Esai = membanggakan diri, memang persis begitu. Saya yang bekerja menulis esai rasanya selama ini, sambil merasakannya di suatu sudut hati, berusaha untuk tidak menyadarinya.

Namun ketika dikatakan setepat itu, saya jadi bisa memahami dengan jelas bahwa "selama ini aku mencari nafkah (catatan 3) dengan cerita membanggakan diri, ya."
(Dari buku karya Sakai Junko, "Kuroi Manaa")
(Catatan 1) Inoue Hisashi: novelis Jepang
(Catatan 2) 赤面する: wajah menjadi merah
(Catatan 3) 口を糊する: di sini, mencari nafkah`,
    },
    "8-3": {
      yomi: `{人間|にんげん}の{社会的|しゃかいてき}な{日常|にちじょう}{生活|せいかつ}は、{無数|むすう}の{暗黙|あんもく}の{約束|やくそく}を{相互|そうご}に{共有|きょうゆう}することで{成|な}り{立|た}っています。{暗黙|あんもく}というのは、そうした{約束|やくそく}が{明確|めいかく}に{意識|いしき}されたり、どこかにはっきり{書|か}かれているわけではないということです。{習慣化|しゅうかんか}し、なかば{無意識的|むいしきてき}に{守|まも}られている{社会的|しゃかいてき}な{約束事|やくそくごと}の{海|うみ}に、{共|とも}に{浸|つ}かっているから、われわれはこの{世界|せかい}の{中|なか}に{安心|あんしん}して{毎日|まいにち}{生|い}きていられるのであり、これから{何|なに}が{起|お}きるのか、{自分|じぶん}はどう{行動|こうどう}したらよいのか、を{一々|いちいち}{思|おも}い{悩|なや}まずにいられるわけです。
（{著者|ちょしゃ}{代表|だいひょう}{森|もり}{猛|たけし}『{異文化|いぶんか}への{理解|りかい}』による）`,
      arti: `Kehidupan sosial manusia sehari-hari terbangun dengan saling berbagi aturan tak tertulis yang tak terhitung jumlahnya. Tak tertulis artinya aturan-aturan itu tidak disadari secara jelas ataupun ditulis dengan tegas di suatu tempat. Karena kita bersama-sama terendam dalam lautan aturan sosial yang sudah menjadi kebiasaan dan dipatuhi setengah tanpa sadar, kita bisa hidup tenang setiap hari di dunia ini, dan bisa tidak perlu cemas memikirkan satu per satu apa yang akan terjadi atau bagaimana kita harus bertindak.
(Dari buku "Memahami Budaya Lain", perwakilan penulis Mori Takeshi)`,
    },
    "8-4": {
      yomi: `{白色度|はくしょくど}というのは{物理的|ぶつりてき}な{指標|しひょう}であって{感受性|かんじゅせい}の{指標|しひょう}ではない。したがって{白色度|はくしょくど}が{高|たか}いというだけでは{白|しろ}は{印象|いんしょう}づけられないのである。{咲|さ}き{乱|みだ}れる{花々|はなばな}の{印象|いんしょう}は{真|ま}っ{白|しろ}でも、その{背後|はいご}にコピー{用紙|ようし}{程度|ていど}の{紙|かみ}を{置|お}いてみると、{花|はな}そのものの{白|しろ}さは{紙|かみ}の{白|しろ}さほどではないことに{気|き}が{付|つ}く。{花弁|かべん}（{注|ちゅう}1）は{淡|あわ}い{色|いろ}を{含|ふく}み{水分|すいぶん}をたたえた（{注|ちゅう}2）{重|おも}たい{白|しろ}である。しかし{咲|さ}き{誇|ほこ}る{花々|はなばな}が{僕|ぼく}らの{心|こころ}に{届|とど}けてくる{白|しろ}は{鮮烈|せんれつ}に{白|しろ}い。
（{原|はら}{研哉|けんや}『{白|しろ}（しろ）』による）
（{注|ちゅう}1）{花弁|かべん}：{花|はな}びら
（{注|ちゅう}2）たたえる：ここでは、{含|ふく}む`,
      arti: `Derajat keputihan adalah indikator fisik, bukan indikator kepekaan rasa. Karena itu, putih tidak bisa meninggalkan kesan hanya karena derajat keputihannya tinggi. Meskipun kesan bunga-bunga yang mekar semarak tampak putih bersih, jika di belakangnya diletakkan kertas sekelas kertas fotokopi, kita akan menyadari bahwa putihnya bunga itu sendiri tidak seputih kertas. Kelopak bunga (catatan 1) adalah putih yang berat, mengandung warna samar dan penuh (catatan 2) air. Namun putih yang disampaikan bunga-bunga yang mekar indah ke hati kita adalah putih yang begitu tajam dan memukau.
(Dari buku karya Hara Ken'ya, "Shiro (Putih)")
(Catatan 1) 花弁: kelopak bunga
(Catatan 2) たたえる: di sini, mengandung`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{市場|しじょう}の{製品|せいひん}のほとんどに{何|なん}らかのマークが{付|つ}いています。それに{気|き}づく{人|ひと}は{少数|しょうすう}であり、その{意味|いみ}を{知|し}ろうとする{人|ひと}は{更|さら}に{少数|しょうすう}でしょう。{見方|みかた}によればこれは①{市場|しじょう}の{健全|けんぜん}さの{表|あらわ}れです。{製品|せいひん}が{満足|まんぞく}なもので{取引|とりひき}がスムーズなら{問題|もんだい}は{起|お}こらないでしょう。しかし、{中|なか}には{使用者|しようしゃ}に{損害|そんがい}を{与|あた}えたり{危険|きけん}にさらしたりする{製品|せいひん}もあるのが{現実|げんじつ}です。

{成熟|せいじゅく}した{社会|しゃかい}では、{公共|こうきょう}の{利益|りえき}に{反|はん}する{製品|せいひん}を{市場|しじょう}から{排除|はいじょ}するために{様々|さまざま}な{仕組|しく}みと{手段|しゅだん}が{使|つか}われていますが、{製品|せいひん}に{付|つ}けられている「{適合|てきごう}マーク」もその{一|ひと}つです。これは{製品|せいひん}が{何|なん}らかの{基準|きじゅん}に{適合|てきごう}していることの{証明|しょうめい}であり、{製品|せいひん}の{供給者|きょうきゅうしゃ}から{購入者|こうにゅうしゃ}{及|およ}び{使用者|しようしゃ}に{情報|じょうほう}を{伝|つた}える{手段|しゅだん}です。{適合|てきごう}マークは、{業者|ぎょうしゃ}{間|かん}の{取引|とりひき}における{要件|ようけん}として、また、{消費者|しょうひしゃ}の{購入|こうにゅう}{判断|はんだん}を{助|たす}ける{手段|しゅだん}として{古|ふる}くから{使|つか}われてきましたが、それらは{主|おも}に{地域|ちいき}{社会|しゃかい}のツールであり、{意味|いみ}や{使|つか}い{方|かた}は{地域|ちいき}{社会|しゃかい}のルールでした。

この{事情|じじょう}は1980{年代|ねんだい}に{一変|いっぺん}します。{市場|しじょう}のグローバル{化|か}により、{見知|みし}らぬマークを{付|つ}けた{外国|がいこく}{製品|せいひん}が{各国|かっこく}の{市場|しじょう}に{溢|あふ}れ{出|で}たからです。（{中略|ちゅうりゃく}）

{適合|てきごう}マークが②{本来|ほんらい}の{機能|きのう}を{果|は}たすには、そのマークが{多数|たすう}の{人々|ひとびと}に{認知|にんち}され、{意味|いみ}が{正|ただ}しく{理解|りかい}されていることが{必要|ひつよう}です。また、マークが{伝|つた}える{情報|じょうほう}の{信頼性|しんらいせい}を{支|ささ}える{適合性|てきごうせい}{評価|ひょうか}が{適切|てきせつ}に{行|おこな}われたことの{証拠|しょうこ}が{必要|ひつよう}です。そこで、ISO（{国際|こくさい}{標準化|ひょうじゅんか}{機構|きこう}）は1996{年|ねん}に{適合|てきごう}マークに{関|かん}する{検討|けんとう}グループを{設置|せっち}し、{問題|もんだい}の{分析|ぶんせき}と{解決策|かいけつさく}の{検討|けんとう}を{開始|かいし}しました。
（{田中|たなか}{正躬|まさみ}{監修|かんしゅう}・{編著|へんちょ}『{氾濫|はんらん}するマーク―{多様化|たようか}する{認証|にんしょう}』による）`,
      arti: `Hampir semua produk di pasar memiliki tanda tertentu. Orang yang menyadarinya sedikit, dan orang yang berusaha mengetahui artinya mungkin lebih sedikit lagi. Dari sudut pandang tertentu, ini adalah ① tanda sehatnya pasar. Jika produknya memuaskan dan transaksinya lancar, tidak akan timbul masalah. Namun kenyataannya, ada juga produk yang merugikan atau membahayakan penggunanya.

Dalam masyarakat yang matang, berbagai mekanisme dan sarana digunakan untuk menyingkirkan produk yang bertentangan dengan kepentingan umum dari pasar, dan "tanda kesesuaian" yang dipasang pada produk adalah salah satunya. Ini merupakan bukti bahwa produk sesuai dengan standar tertentu, dan merupakan sarana untuk menyampaikan informasi dari pemasok produk kepada pembeli dan pengguna. Tanda kesesuaian sudah lama digunakan sebagai syarat dalam transaksi antarpelaku usaha dan sebagai sarana membantu konsumen memutuskan pembelian, tetapi itu terutama alat masyarakat setempat, dan arti serta cara pemakaiannya mengikuti aturan masyarakat setempat.

Keadaan ini berubah total pada tahun 1980-an. Karena globalisasi pasar, produk asing dengan tanda yang tidak dikenal membanjiri pasar setiap negara. (dipersingkat)

Agar tanda kesesuaian dapat menjalankan ② fungsi sebenarnya, tanda itu perlu dikenali oleh banyak orang dan maknanya dipahami dengan benar. Selain itu, diperlukan bukti bahwa penilaian kesesuaian yang menopang keandalan informasi yang disampaikan tanda itu telah dilakukan dengan tepat. Maka, pada tahun 1996 ISO (Organisasi Standardisasi Internasional) membentuk kelompok kajian tentang tanda kesesuaian dan mulai menganalisis masalah serta mengkaji solusinya.
(Dari buku "Membanjirnya Tanda – Sertifikasi yang Makin Beragam", disunting oleh Tanaka Masami)`,
    },
    "9-2": {
      yomi: `{以下|いか}は、ある{日本|にほん}{企業|きぎょう}の{経営者|けいえいしゃ}が{書|か}いた{文章|ぶんしょう}である。

{現状|げんじょう}{維持|いじ}でいい。そう{思|おも}った{途端|とたん}、{進歩|しんぽ}は{止|と}まる。{外|そと}の{世界|せかい}では、{絶|た}え{間|ま}ない{進化|しんか}と{発展|はってん}が{続|つづ}いている。{何|なに}もせずに{同|おな}じところにとどまっているのは、じつは{最大|さいだい}のリスクなのである。

この{国|くに}にもう、{安全|あんぜん}、{安心|あんしん}、{安定|あんてい}はない。{自分|じぶん}は{人生|じんせい}をどうしたいのか、{会社|かいしゃ}をどう{変|か}えたいのか、この{国|くに}をどうすべきか……{一人|ひとり}ひとりが{日本|にほん}の{置|お}かれた{現実|げんじつ}を{直視|ちょくし}しながら、{志|こころざし}{高|たか}く{毎日|まいにち}を{真剣|しんけん}に{生|い}きないかぎり、{未来|みらい}も{変|か}わらない。

そう{言|い}うと{多|おお}くの{日本人|にほんじん}は{反射的|はんしゃてき}に、{次|つぎ}のように{思|おも}うかもしれない。

（{中略|ちゅうりゃく}）「どうすればいいか、もっと{具体的|ぐたいてき}に{教|おし}えてほしい」

とりあえず「{見本|みほん}」のようなものがないと、{何|なに}をやったらよいのか、{見当|けんとう}がつかないのだろう。

しかし、それぞれが{置|お}かれた{状況|じょうきょう}によって、すべきことが{異|こと}なるのは{当然|とうぜん}。ある{人|ひと}にとってはプラスのことが、{別|べつ}の{人|ひと}にとってはマイナスにつながることもあるかもしれない。

そもそも{私|わたし}は、ノウハウ{本|ぼん}なるものをまったく{信用|しんよう}していない。そこに{書|か}いてあるのは、{過去|かこ}の{成功|せいこう}{法則|ほうそく}でしかない。それをもとに{時代|じだい}に{合致|がっち}した{新|あたら}しい{法則|ほうそく}を{考|かんが}えるというのであればまだよいが、{過去|かこ}の{成功|せいこう}{例|れい}をそっくり{踏襲|とうしゅう}して、うまくいくはずがない。

いずれにせよ、{情報|じょうほう}が{瞬時|しゅんじ}に{世界|せかい}を{駆|か}け{巡|めぐ}るグローバル{時代|じだい}では、そうした{成功|せいこう}{法則|ほうそく}は、あっという{間|ま}に{陳腐化|ちんぷか}（{注|ちゅう}1）してしまう。

ただし、{時代|じだい}が{変化|へんか}しても{普遍的|ふへんてき}に{通用|つうよう}する「{考|かんが}え{方|かた}」というものなら、あるかもしれない。もちろんそれにしても、{世|よ}の{趨勢|すうせい}（{注|ちゅう}2）に{影響|えいきょう}されないことはない。しかし{自|みずか}らの{視点|してん}があるかないかで、{目|め}の{前|まえ}の{風景|ふうけい}はまったく{変|か}わってくる。
（{柳井|やない}{正|ただし}『{現実|げんじつ}を{視|み}よ』による）
（{注|ちゅう}1）{陳腐化|ちんぷか}する：ここでは、{古|ふる}くなる
（{注|ちゅう}2）{趨勢|すうせい}：{動向|どうこう}`,
      arti: `Berikut ini adalah tulisan seorang pemimpin perusahaan Jepang.

"Mempertahankan keadaan sekarang sudah cukup." Begitu berpikir seperti itu, kemajuan pun berhenti. Di dunia luar, evolusi dan perkembangan terus berlangsung tanpa henti. Diam di tempat yang sama tanpa melakukan apa pun sebenarnya adalah risiko terbesar.

Di negara ini sudah tidak ada lagi keselamatan, rasa aman, dan kestabilan. Ingin kujalani seperti apa hidupku, ingin kuubah seperti apa perusahaanku, harus diapakan negara ini... Selama setiap orang tidak menghadapi langsung kenyataan yang dihadapi Jepang dan menjalani setiap hari dengan sungguh-sungguh dan bercita-cita tinggi, masa depan pun tidak akan berubah.

Kalau saya berkata begitu, banyak orang Jepang mungkin secara refleks berpikir seperti berikut.

(dipersingkat) "Tolong ajari lebih konkret apa yang harus dilakukan."

Mungkin kalau tidak ada semacam "contoh", mereka tidak tahu apa yang harus dilakukan.

Namun wajar saja bahwa apa yang harus dilakukan berbeda-beda tergantung situasi masing-masing. Hal yang bernilai plus bagi seseorang bisa jadi berujung minus bagi orang lain.

Pada dasarnya, saya sama sekali tidak memercayai yang namanya buku kiat-kiat. Yang tertulis di sana hanyalah hukum sukses masa lalu. Kalau dari situ dipikirkan hukum baru yang sesuai zaman, itu masih lumayan, tetapi menjiplak mentah-mentah contoh sukses masa lalu tidak mungkin berhasil.

Bagaimanapun, di era global ketika informasi beredar ke seluruh dunia dalam sekejap, hukum sukses semacam itu dalam sekejap menjadi usang (catatan 1).

Namun, kalau berupa "cara berpikir" yang tetap berlaku secara universal meski zaman berubah, mungkin ada. Tentu saja itu pun tidak lepas dari pengaruh arus (catatan 2) dunia. Tetapi ada atau tidaknya sudut pandang sendiri akan mengubah sepenuhnya pemandangan di depan mata.
(Dari buku karya Yanai Tadashi, "Lihatlah Kenyataan")
(Catatan 1) 陳腐化する: di sini, menjadi usang
(Catatan 2) 趨勢: kecenderungan, arah perkembangan`,
    },
    "9-3": {
      yomi: `ぼくらは、{自由|じゆう}という{言葉|ことば}にある{重|おも}さを{感|かん}じる。{自由|じゆう}と{勝手|かって}とは{似|に}て{非|ひ}なるもので、{自由|じゆう}を{与|あた}えられると、その{尊|とうと}さ{故|ゆえ}にどう{扱|あつか}っていいかと{緊張|きんちょう}するのである。そのように{教|おし}えられたわけではないのだが、そう{解釈|かいしゃく}する{感性|かんせい}が{少|すく}なくとも{備|そな}わっていたということだろう。

{日常|にちじょう}の{仕事|しごと}のことでもいい、ちょっと{思|おも}い{返|かえ}すと、①それが{実感|じっかん}できる。

②{自由|じゆう}におやり{下|くだ}さいと{言|い}われると、{無邪気|むじゃき}に、あるいは{無責任|むせきにん}に、これは{楽|らく}だと{思|おも}えるだろうか。

{自由|じゆう}におやり{下|くだ}さいの{自由|じゆう}は、あなたの{思|おも}うまま{好|す}きな{世界|せかい}を{構築|こうちく}して{結構|けっこう}ですという、{全幅|ぜんぷく}（{注|ちゅう}1）の{信頼|しんらい}や{神|かみ}の{如|ごと}き{好意|こうい}ではないのである。

もっとつき{放|はな}している。お{手並|てなみ}（{注|ちゅう}2）{拝見|はいけん}という{底意地|そこいじ}の{悪|わる}さもある。だから、{言|い}われた{側|がわ}の{本心|ほんしん}としては、{自由|じゆう}にやらせていただけるのですかと、{感動|かんどう}のリアクション（{注|ちゅう}3）を{示|しめ}しながら、{実|じつ}は{大|たい}して{期待|きたい}していないな、{要|よう}するにあてにされていないなと{思|おも}ったりするのである。

それもこれも、{自由|じゆう}という{言葉|ことば}の{持|も}つ{重|おも}さと、それを{使|つか}いこなす{困難|こんなん}さを{知|し}っているからである。だから、ぼくらは{若|わか}い{時|とき}、{自由|じゆう}に{書|か}いて{下|くだ}さい、{自由|じゆう}に{解釈|かいしゃく}して{下|くだ}さい、{自由|じゆう}に{生|い}きて{下|くだ}さいと{言|い}われると、{捨|す}てられたような{戦慄|せんりつ}を{覚|おぼ}えた（{注|ちゅう}4）ものである。

{自由|じゆう}は{善玉|ぜんだま}、{制約|せいやく}は{悪玉|あくだま}だと{伝|つた}えられているが、{制約|せいやく}を{示|しめ}された{方|ほう}が{人|ひと}は{安心|あんしん}して{生|い}きられるところもあるのである。

（{中略|ちゅうりゃく}）ぼくは、{自由|じゆう}を{理解|りかい}し、{自由|じゆう}を{享受|きょうじゅ}し、{自由|じゆう}を{主張|しゅちょう}するためには、{無免許|むめんきょ}であってはならないと{思|おも}っている。{少|すく}なくとも{許|ゆる}されることと、{許|ゆる}されざることの{判別|はんべつ}が{可能|かのう}な{人|ひと}だけに{交付|こうふ}されるべきなのである。
（{阿久|あく}{悠|ゆう}『{清|きよ}らかな{厭世|えんせい}―{言葉|ことば}を{失|な}くした{日本人|にほんじん}へ』による）
（{注|ちゅう}1）{全幅|ぜんぷく}：{最大限|さいだいげん}
（{注|ちゅう}2）{手並|てなみ}：{技量|ぎりょう}
（{注|ちゅう}3）リアクション：{反応|はんのう}
（{注|ちゅう}4）{戦慄|せんりつ}を{覚|おぼ}える：ここでは、ひどく{恐|おそ}ろしいと{感|かん}じる`,
      arti: `Kita merasakan bobot tertentu dalam kata "kebebasan". Kebebasan dan seenaknya sendiri tampak mirip tetapi berbeda; ketika diberi kebebasan, justru karena berharganya kita jadi tegang memikirkan bagaimana harus memperlakukannya. Bukan karena kita diajari begitu, tetapi setidaknya kita memiliki kepekaan untuk menafsirkannya begitu.

Boleh juga soal pekerjaan sehari-hari; kalau sedikit mengingat kembali, ① hal itu bisa dirasakan.

Ketika dikatakan "② silakan lakukan dengan bebas", apakah kita bisa dengan polos, atau tanpa rasa tanggung jawab, berpikir "wah, ini enak"?

Kebebasan dalam "silakan lakukan dengan bebas" bukanlah kepercayaan penuh (catatan 1) atau kebaikan bak dewa yang berarti "Anda boleh membangun dunia yang Anda sukai sesuka hati."

Ia lebih melepas begitu saja. Ada juga kedengkian terselubung semacam "mari kita lihat kemampuanmu (catatan 2)". Karena itu, perasaan sebenarnya pihak yang diberi tahu adalah, sambil menunjukkan reaksi (catatan 3) terharu "Saya boleh melakukannya dengan bebas?", sebenarnya ia berpikir "mereka tidak terlalu berharap padaku, intinya aku tidak diandalkan."

Semua itu karena kita tahu beratnya kata "kebebasan" dan sulitnya menguasainya. Karena itu, waktu muda, ketika diberi tahu "silakan menulis dengan bebas", "silakan menafsirkan dengan bebas", "silakan hidup dengan bebas", kita merasakan kengerian (catatan 4) seolah dibuang.

Kebebasan disebut sebagai yang baik dan batasan sebagai yang jahat, tetapi ada kalanya manusia justru bisa hidup lebih tenang bila diberi batasan.

(dipersingkat) Saya berpendapat bahwa untuk memahami, menikmati, dan menuntut kebebasan, seseorang tidak boleh "tanpa izin". Kebebasan semestinya hanya diberikan kepada orang yang setidaknya mampu membedakan apa yang boleh dan apa yang tidak boleh.
(Dari buku karya Aku Yu, "Kiyoraka na Ensei – kepada orang Jepang yang kehilangan kata-kata")
(Catatan 1) 全幅: sepenuhnya, semaksimal mungkin
(Catatan 2) 手並: keterampilan, kemampuan
(Catatan 3) リアクション: reaksi
(Catatan 4) 戦慄を覚える: di sini, merasa sangat ngeri`,
    },

    // ── 問題10：旅の終わり ──
    "10": {
      yomi: `アジアであれヨーロッパであれ、あるいは、{三日|みっか}であれ1カ{月|げつ}であれ、{旅|たび}から{帰|かえ}って{成田|なりた}{空港|くうこう}（{注|ちゅう}1）に{着|つ}く。（{中略|ちゅうりゃく}）

{私|わたし}はいつもバスではなくて{列車|れっしゃ}で{家|いえ}まで{帰|かえ}る。

{都心|としん}に{向|む}かう{列車|れっしゃ}には、{旅|たび}から{帰|かえ}ってきた{人|ひと}と、これから{旅|たび}する{人|ひと}たちが{乗|の}っている。{話|はな}している{人|ひと}たちがいても、{不思議|ふしぎ}に{静|しず}かだ。{帰|かえ}る{人|ひと}の{疲|つか}れと、{旅|たび}する{人|ひと}の{緊張|きんちょう}が{混|ま}ざり{合|あ}ったような、ほかの{路線|ろせん}ではなかなか{味|あじ}わえない{静|しず}けさである。

{列車|れっしゃ}がトンネルを{出|で}ると、{私|わたし}は{窓|まど}の{外|そと}の{景色|けしき}を{見|み}る。{空港|くうこう}からしばらくは、{田園|でんえん}{風景|ふうけい}が{続|つづ}く。{彼方|かなた}まで{続|つづ}く{田|た}んぼは、{季節|きせつ}によって{一面|いちめん}の{緑|みどり}だったり{茶色|ちゃいろ}だったり、はられた{水|みず}が{空|そら}を{映|うつ}して{青|あお}かったりする。{山々|やまやま}が、{遠|とお}くに{見|み}えたり{近|ちか}くに{迫|せま}ってきたりする。{冬枯|ふゆが}れの{景色|けしき}でも、{緑|みどり}{濃|こ}い{初夏|しょか}でも、{自然|しぜん}の{色彩|しきさい}が{非常|ひじょう}にやわらかいことに{毎回|まいかい}あらためて{気|き}づかされて、そうして、{帰|かえ}ってきたなあと{実感|じっかん}する。

アジアにもヨーロッパにもそれ{以外|いがい}のどこにでも、ゆたかだったりそうではなかったりする{自然|しぜん}がある。{田舎|いなか}を{旅|たび}すればむせかえるような（{注|ちゅう}2）{緑|みどり}のなかを{歩|ある}くことになる。{見慣|みな}れた{田|た}んぼとそっくりな{光景|こうけい}を{見|み}ることもある。{葉|は}の{落|お}ちた{木々|きぎ}が{針|はり}のような{枝|えだ}を{空|そら}に{突|つ}き{刺|さ}す{景色|けしき}に{見|み}とれることもある。{緑|みどり}の{多|おお}い{町|まち}だ、とか、{水墨画|すいぼくが}（{注|ちゅう}3）みたいだ、とか、その{程度|ていど}の{感想|かんそう}は{抱|いだ}くが、その{色彩|しきさい}についてとくべつ{何|なに}も{思|おも}わない。

{帰|かえ}ってきて、{車窓|しゃそう}から{景色|けしき}をみて{思|おも}うのだ。この{国|くに}の{色彩|しきさい}は{本当|ほんとう}にやわらかい、と。{木々|きぎ}の{緑|みどり}も、{四季|しき}（{注|ちゅう}4）に{即|そく}した{山|やま}の{色|いろ}も、{川|かわ}も{空|そら}も。{旅先|たびさき}で{見|み}てきた{木々|きぎ}や{空|そら}や{海|うみ}といったものが、なんと{強烈|きょうれつ}な{色|いろ}を{放|はな}っていたのかとこのときになって{気|き}づく。

{窓|まど}の{外|そと}に{緑|みどり}が{少|すく}なくなって、{次第|しだい}に{家|いえ}やビルが{増|ふ}えてくる。{都心|としん}が{近|ちか}づくにつれ、どんどん{建物|たてもの}や{看板|かんばん}が{増|ふ}えてくる。さっきより「ああ、{帰|かえ}ってきた」がもう{少|すこ}しふくらむ。{都心|としん}の、{空|そら}の{狭|せま}い、ごたついた（{注|ちゅう}5）{風景|ふうけい}をきれいだと{思|おも}ったことは{一度|いちど}もないけれど、でも、{帰|かえ}ってくると{毎回|まいかい}{近|ちか}しく（{注|ちゅう}6）{思|おも}う。{好|す}きとか{嫌|きら}いではなくて、{私|わたし}に{含|ふく}まれているかのような{近|ちか}しさを{覚|おぼ}えるのだ。

{先|さき}だって、{成田|なりた}{空港|くうこう}まで{人|ひと}を{迎|むか}えにいった。{旅|たび}のにおいをまだ{濃厚|のうこう}に{漂|ただよ}わせている{人|ひと}を{到着口|とうちゃくぐち}で{迎|むか}え、いっしょに{列車|れっしゃ}に{乗|の}り{込|こ}んだ。{旅|たび}の{話|はなし}を{聞|き}きながら、{窓|まど}の{外|そと}を{眺|なが}めていて、ちょっとびっくりした。{旅|たび}から{帰|かえ}ってきて{見|み}る{景色|けしき}とぜんぜん{違|ちが}う。{退屈|たいくつ}な、{見|み}るべきところもない{田園|でんえん}{風景|ふうけい}が{広|ひろ}がっているのである。そうか、{旅|たび}のあとじゃないと、ただの{日常|にちじょう}の{光景|こうけい}なのか。{都心|としん}が{近|ちか}づいてくる。{窓|まど}の{外|そと}に{私|わたし}が{見|み}ている{光景|こうけい}と、{旅|たび}から{帰|かえ}ったひとが{見|み}ている{景色|けしき}は、まったく{違|ちが}うだろうなあと{思|おも}った。

{旅|たび}というのは、{空港|くうこう}に{着|つ}いたときに{終|お}わるのではなくて、{周囲|しゅうい}の{景色|けしき}が、わざわざ{目|め}を{凝|こ}らすこともない{日常|にちじょう}に{戻|もど}ったときに{終|お}わるのだと{知|し}った。
（{角田|かくた}{光代|みつよ}『トランヴェール』2012{年|ねん}3{月|がつ}{号|ごう}による）
（{注|ちゅう}1）{成田|なりた}{空港|くうこう}：{日本|にほん}の{国際|こくさい}{空港|くうこう}
（{注|ちゅう}2）むせかえるような：ここでは、{圧倒|あっとう}されるような
（{注|ちゅう}3）{水墨画|すいぼくが}：{墨|すみ}を{使|つか}って、{白黒|しろくろ}の{濃淡|のうたん}で{描|えが}かれた{絵|え}
（{注|ちゅう}4）{四季|しき}に{即|そく}する：ここでは、{四季|しき}によって{変|か}わる
（{注|ちゅう}5）ごたつく：ごちゃごちゃする
（{注|ちゅう}6）{近|ちか}しい：ここでは、{心理的|しんりてき}に{近|ちか}い`,
      arti: `Entah dari Asia atau Eropa, entah tiga hari atau sebulan, saya pulang dari perjalanan dan tiba di Bandara Narita (catatan 1). (dipersingkat)

Saya selalu pulang ke rumah naik kereta, bukan bus.

Di kereta menuju pusat kota ada orang-orang yang baru pulang dari perjalanan dan orang-orang yang akan memulai perjalanan. Meskipun ada yang bercakap-cakap, anehnya suasananya tenang. Keheningan yang seolah memadukan lelahnya orang yang pulang dan tegangnya orang yang akan bepergian, keheningan yang sulit dirasakan di jalur lain.

Ketika kereta keluar dari terowongan, saya memandang pemandangan di luar jendela. Untuk beberapa saat dari bandara, pemandangan pedesaan terus berlanjut. Sawah yang membentang sampai jauh, tergantung musim, kadang hijau sejauh mata memandang, kadang cokelat, kadang airnya yang menggenang memantulkan langit sehingga tampak biru. Gunung-gunung kadang tampak jauh, kadang seolah mendekat. Baik pemandangan musim dingin yang layu maupun awal musim panas yang hijau pekat, setiap kali saya kembali disadarkan bahwa warna alamnya sangat lembut, dan saat itulah saya merasakan, "ah, aku sudah pulang."

Di Asia, di Eropa, dan di mana pun selain itu, ada alam yang subur dan ada yang tidak. Kalau bepergian ke pedesaan, kita akan berjalan di tengah hijau yang menyesakkan (catatan 2). Kadang kita melihat pemandangan yang persis seperti sawah yang biasa kita lihat. Kadang kita terpukau oleh pemandangan pohon-pohon tanpa daun yang menusukkan ranting seperti jarum ke langit. Saya punya kesan sebatas "kota yang banyak hijaunya" atau "seperti lukisan tinta (catatan 3)", tetapi tidak berpikir apa-apa secara khusus tentang warnanya.

Setelah pulang dan melihat pemandangan dari jendela kereta, barulah saya berpikir: warna negeri ini sungguh lembut. Hijau pepohonan, warna gunung yang mengikuti empat musim (catatan 4), sungai, dan langit. Baru saat itulah saya menyadari betapa kuatnya warna yang dipancarkan pepohonan, langit, dan laut yang saya lihat di tempat tujuan.

Hijau di luar jendela makin sedikit, perlahan rumah dan gedung bertambah. Makin dekat ke pusat kota, bangunan dan papan reklame makin banyak. Rasa "ah, aku sudah pulang" sedikit lebih menggembung daripada tadi. Saya tidak pernah sekali pun menganggap pemandangan pusat kota yang langitnya sempit dan semrawut (catatan 5) itu indah, tetapi setiap kali pulang saya merasa dekat (catatan 6) dengannya. Bukan soal suka atau tidak suka, saya merasakan kedekatan seolah-olah pemandangan itu terkandung dalam diri saya.

Belum lama ini saya pergi menjemput seseorang ke Bandara Narita. Saya menyambut orang yang masih kental menguarkan aroma perjalanan itu di pintu kedatangan, lalu bersama-sama naik kereta. Sambil mendengarkan cerita perjalanannya dan memandang ke luar jendela, saya sedikit terkejut. Pemandangannya sama sekali berbeda dengan yang saya lihat sepulang dari perjalanan. Yang terbentang adalah pemandangan pedesaan yang membosankan dan tidak ada yang layak dilihat. Oh, begitu, kalau bukan sesudah perjalanan, ini hanya pemandangan sehari-hari biasa. Pusat kota makin dekat. Saya berpikir, pemandangan yang saya lihat di luar jendela pasti sangat berbeda dengan yang dilihat orang yang baru pulang dari perjalanan.

Saya jadi tahu bahwa perjalanan tidak berakhir saat tiba di bandara, tetapi berakhir ketika pemandangan sekitar kembali menjadi keseharian yang tidak perlu repot-repot diamati dengan saksama.
(Dari tulisan Kakuta Mitsuyo, majalah "Train Vert" edisi Maret 2012)
(Catatan 1) Bandara Narita: bandara internasional Jepang
(Catatan 2) むせかえるような: di sini, terasa begitu menguasai
(Catatan 3) 水墨画: lukisan yang dibuat dengan tinta, dengan gradasi hitam-putih
(Catatan 4) 四季に即する: di sini, berubah mengikuti empat musim
(Catatan 5) ごたつく: semrawut
(Catatan 6) 近しい: di sini, dekat secara psikologis`,
    },

    // ── 問題11：学校図書館とマンガ ──
    "11": {
      yomi: `【{意見|いけん} A】
{子|こ}どもたちが{社会|しゃかい}{全般|ぜんぱん}のあらゆる{分野|ぶんや}に{関心|かんしん}を{向|む}けようとするとき、まんがはその{垣根|かきね}を{低|ひく}くしてくれる。これは、まんがというメディアの{強|つよ}みだと{思|おも}う。{気軽|きがる}に{手|て}にしたマンガをきっかけに、{知的|ちてき}{好奇心|こうきしん}が{刺激|しげき}されたりすることもあるだろう。{正味|しょうみ}15{分|ふん}たらずの{休|やす}み{時間|じかん}、まんがの{世界|せかい}に{入|はい}り{込|こ}んでいた{子|こ}どもたちの{横顔|よこがお}を{思|おも}い{出|だ}す。まんがならではの{魅力|みりょく}があることも{確|たし}かだ。{魅力|みりょく}は{堪能|たんのう}してほしいし、{強|つよ}みは{学校|がっこう}{図書館|としょかん}{活性化|かっせいか}に{利用|りよう}したい。

まだ{人生|じんせい}の{入|い}り{口|ぐち}ともいえる{小学生|しょうがくせい}。{彼|かれ}らを{多様|たよう}なメディアの{魅力|みりょく}に{出会|であ}わせたいという{思|おも}いと、{学校|がっこう}{図書館|としょかん}が{彼|かれ}らにとって{魅力的|みりょくてき}な{場所|ばしょ}であってほしいという{思|おも}いがある。

だから{小学校|しょうがっこう}でも（{制約|せいやく}は{多|おお}くても）{選書|せんしょ}（{注|ちゅう}）のアンテナはマンガにもはっておいてほしいと、{職|しょく}を{離|はな}れたいまでも{思|おも}っているのである。
（{若菜|わかな}{千佳子|ちかこ}『{子供|こども}の{本棚|ほんだな}』2007{年|ねん}12{月|がつ}{号|ごう}による）
（{注|ちゅう}）{選書|せんしょ}のアンテナを〜にはる：ここでは、{本|ほん}を{選|えら}ぶために〜に{関心|かんしん}を{向|む}ける

【{意見|いけん} B】
マンガを{他|ほか}の{本|ほん}と{区別|くべつ}して{考|かんが}える{方向|ほうこう}は{間違|まちが}っているといえる。マンガを{図書館|としょかん}に{置|お}くことによって、{子|こ}どもは{勉強|べんきょう}しなくなるという{神話|しんわ}から{決別|けつべつ}すべきである。{学校|がっこう}{図書館|としょかん}としては、{絵本|えほん}や{写真集|しゃしんしゅう}、{童話|どうわ}や{物語|ものがたり}などの{本|ほん}の{読|よ}み{方|かた}を{教|おし}えるように、マンガやアニメについてもその{見方|みかた}や{特性|とくせい}を{教|おし}えなくてはならないし、そのことを{通|つう}して{適切|てきせつ}な{学習|がくしゅう}{資料|しりょう}を{適切|てきせつ}な{場面|ばめん}で{活用|かつよう}するようになると{思|おも}われる。（{中略|ちゅうりゃく}）

{学校|がっこう}{図書館|としょかん}の{担当者|たんとうしゃ}は、{図書|としょ}{購入|こうにゅう}に{際|さい}して、{直接|ちょくせつ}{学習|がくしゅう}に{役立|やくだ}つ{図書|としょ}だけを{購入|こうにゅう}するのでなく、{長|なが}い{目|め}で{見|み}て{子|こ}どもたちの{学習|がくしゅう}や{人格|じんかく}{形成|けいせい}に{役立|やくだ}つ{図書|としょ}も{購入|こうにゅう}するゆとりを{持|も}つことが{大切|たいせつ}である。
（{渡部|わたなべ}{康夫|やすお}『{現代|げんだい}の{図書館|としょかん}』{第|だい}192{号|ごう}による）`,
      arti: `[Pendapat A]
Ketika anak-anak hendak mengarahkan minat ke berbagai bidang dalam masyarakat secara umum, manga merendahkan pagar pembatasnya. Saya rasa ini adalah kekuatan media yang bernama manga. Bisa jadi rasa ingin tahu intelektual terangsang berawal dari manga yang diambil begitu saja. Saya teringat raut wajah anak-anak yang tenggelam dalam dunia manga di waktu istirahat yang bersihnya tak sampai 15 menit. Memang benar manga punya daya tarik yang khas. Saya ingin anak-anak menikmati daya tarik itu sepuasnya, dan ingin memanfaatkan kekuatannya untuk menghidupkan perpustakaan sekolah.

Anak SD bisa dibilang masih berada di pintu masuk kehidupan. Saya ingin mempertemukan mereka dengan daya tarik beragam media, dan ingin perpustakaan sekolah menjadi tempat yang menarik bagi mereka.

Karena itu, bahkan sekarang setelah meninggalkan pekerjaan itu, saya tetap berharap bahwa di SD pun (meski banyak batasan) "antena" pemilihan buku (catatan) juga diarahkan ke manga.
(Dari tulisan Wakana Chikako, majalah "Kodomo no Hondana" edisi Desember 2007)
(Catatan) 選書のアンテナを〜にはる: di sini, menaruh perhatian pada ~ untuk memilih buku

[Pendapat B]
Bisa dikatakan bahwa arah berpikir yang membedakan manga dari buku lain itu keliru. Kita harus meninggalkan mitos bahwa dengan menaruh manga di perpustakaan, anak-anak jadi tidak mau belajar. Sebagai perpustakaan sekolah, sebagaimana mengajarkan cara membaca buku bergambar, buku foto, dongeng, dan cerita, kita juga harus mengajarkan cara memandang dan karakteristik manga dan anime, dan melalui hal itu, anak-anak diharapkan akan memanfaatkan bahan belajar yang tepat dalam situasi yang tepat. (dipersingkat)

Penanggung jawab perpustakaan sekolah, saat membeli buku, sebaiknya tidak hanya membeli buku yang langsung berguna untuk belajar, tetapi juga punya keleluasaan untuk membeli buku yang dalam jangka panjang berguna bagi belajar dan pembentukan kepribadian anak-anak.
(Dari tulisan Watanabe Yasuo, "Gendai no Toshokan" No. 192)`,
    },

    // ── 問題12：発明と幸福 ──
    "12": {
      yomi: `{現代|げんだい}は、「{発明|はつめい}は{必要|ひつよう}の{母|はは}」となった{時代|じだい}である。あるものが{発明|はつめい}されると、{企業|きぎょう}はさまざまな{余分|よぶん}の{機能|きのう}をあたかも{必要|ひつよう}{不可欠|ふかけつ}とばかり{付加|ふか}して{製品|せいひん}を{売|う}り{込|こ}もうとし、{人々|ひとびと}はその{機能|きのう}がいかにも{前|まえ}から{必要|ひつよう}であったかのごとく{錯覚|さっかく}して{購入|こうにゅう}するからだ。{発明|はつめい}が{欲望|よくぼう}を{刺激|しげき}し、{欲望|よくぼう}が{人々|ひとびと}を{消費|しょうひ}に{走|はし}らせ、{消費|しょうひ}が{新|あら}たな{必要性|ひつようせい}という{幻想|げんそう}を{生|う}み{出|だ}すのである。その{結果|けっか}、{本来|ほんらい}{必要|ひつよう}でなかったものにまで{飢餓感|きがかん}を{募|つの}らせ、{無限|むげん}に{便利|べんり}さを{追|お}い{求|もと}めるという{悪循環|あくじゅんかん}に{陥|おちい}る。このように{企業|きぎょう}の{戦略|せんりゃく}と{人々|ひとびと}の{欲望|よくぼう}が{結|むす}びついて、ひたすら「{幸福|こうふく}」を{求|もと}めようとする{構造|こうぞう}が①{現代|げんだい}という{時代|じだい}を{象徴|しょうちょう}している。ケータイがその{典型|てんけい}である。

そんな{時代|じだい}に「{幸福|こうふく}」を{考|かんが}えるとすれば、この{欲望|よくぼう}の{連鎖|れんさ}をどこかで{断|た}ち{切|き}るより{仕方|しかた}がない。いや、{発明|はつめい}というような{新|しん}{技術|ぎじゅつ}には{目|め}を{向|む}けず、むしろそれらと{縁|えん}を{切|き}って{積極的|せっきょくてき}に{時代|じだい}{遅|おく}れになるということに「{幸福|こうふく}」は{求|もと}められるのではないだろうか。テレビは{置|お}かずにCDでモーツァルトや{落語|らくご}を{聞|き}き、パソコンはインターネットに{手|て}を{出|だ}さずワープロ{機能|きのう}だけにする。クルマは{持|も}たずに{公共|こうきょう}{交通|こうつう}{機関|きかん}のみを{使|つか}う。ケータイは{家族|かぞく}にしか{番号|ばんごう}を{知|し}らせない。{欲望|よくぼう}を{他者|たしゃ}との{関係|かんけい}に{求|もと}めず、{自分|じぶん}の{内部|ないぶ}からの{声|こえ}を{汲|く}み{上|あ}げ、{何|なに}かを{創|つく}り{出|だ}すことのみに{時間|じかん}を{使|つか}う、そんな{生活|せいかつ}にこそ「{幸福|こうふく}」がありそうな{気|き}がする。

むろん、そんな{修道僧|しゅうどうそう}（{注|ちゅう}1）のような{生|い}き{方|かた}は{現代|げんだい}では②{不可能|ふかのう}である。{電子|でんし}メールでは{誰|だれ}とでも{簡単|かんたん}につながって{対話|たいわ}できる。インターネットで{買|か}い{物|もの}をし、ブログ（{注|ちゅう}2）で{自分|じぶん}の{意見|いけん}が{自由|じゆう}に{出|だ}せるのは{新|あたら}しいテクノロジーがあってこそである。テレビからの{情報|じょうほう}は{日常|にちじょう}{会話|かいわ}に{欠|か}かせないし、{電話|でんわ}での{長話|ながばなし}も{楽|たの}しい。クルマがあればいつでも{好|す}きな{場所|ばしょ}に{行|い}ける。パソコンもテレビもケータイもクルマもない{生活|せいかつ}は{考|かんが}えられず、これら{文明|ぶんめい}の{利器|りき}（{注|ちゅう}3）は{私|わたし}たちを{誘引|ゆういん}（{注|ちゅう}4）して{止|や}まないのだ。③そこには「{幸福|こうふく}」はないと{実|じつ}は{誰|だれ}もが{知|し}っていても、{便利|べんり}さと{効率性|こうりつせい}を{棄|す}てきれないのも{私|わたし}たちなのである。

とすると、どこかで{妥協|だきょう}することを{考|かんが}えねばならない。{断|た}ち{切|き}るところと{利用|りよう}するところを{使|つか}い{分|わ}けるのである。{私|わたし}のやり{方|かた}は{比較的|ひかくてき}{単純|たんじゅん}で、{余分|よぶん}な{機器|きき}を{持|も}たず、{持|も}っても{時間|じかん}を{区切|くぎ}るか{場所|ばしょ}を{限|かぎ}るかして{欲望|よくぼう}を{抑制|よくせい}することだ。（{中略|ちゅうりゃく}）そのようにして{生|う}み{出|だ}された{時間|じかん}を{自分|じぶん}のために{使|つか}うのだ。それが{私|わたし}の「{幸福|こうふく}」への{接近法|せっきんほう}なのである。
（{池内|いけうち}{了|さとる}『{生|い}きのびるための{科学|かがく}』による）
（{注|ちゅう}1）{修道僧|しゅうどうそう}：{修行中|しゅぎょうちゅう}の{僧|そう}
（{注|ちゅう}2）ブログ：{日記|にっき}{形式|けいしき}のホームページ
（{注|ちゅう}3）{利器|りき}：{便利|べんり}な{器具|きぐ}
（{注|ちゅう}4）{誘引|ゆういん}して{止|や}まない：ここでは、{絶|た}えず{引|ひ}き{付|つ}けている`,
      arti: `Zaman sekarang adalah zaman ketika "penemuan menjadi ibu kebutuhan". Sebab, begitu sesuatu ditemukan, perusahaan berusaha memasarkan produk dengan menambahkan berbagai fungsi berlebih seolah-olah itu mutlak diperlukan, dan orang-orang membelinya karena keliru mengira fungsi itu memang sudah diperlukan sejak dulu. Penemuan merangsang hasrat, hasrat mendorong orang untuk konsumsi, dan konsumsi melahirkan ilusi berupa kebutuhan baru. Akibatnya, kita jatuh ke dalam lingkaran setan: rasa lapar makin menjadi bahkan terhadap hal yang sebenarnya tidak diperlukan, dan kita mengejar kepraktisan tanpa batas. Struktur di mana strategi perusahaan dan hasrat orang-orang terjalin sehingga terus-menerus mengejar "kebahagiaan" inilah yang melambangkan ① zaman modern. Ponsel adalah contoh khasnya.

Jika ingin memikirkan "kebahagiaan" di zaman seperti itu, tidak ada cara lain selain memutus rantai hasrat ini di suatu titik. Bahkan, bukankah "kebahagiaan" bisa dicari dengan tidak melirik teknologi baru seperti penemuan, malah memutus hubungan dengannya dan secara aktif menjadi ketinggalan zaman? Tidak menaruh televisi dan mendengarkan Mozart atau rakugo lewat CD, tidak menyentuh internet di komputer dan hanya memakai fungsi pengolah kata. Tidak memiliki mobil dan hanya memakai transportasi umum. Nomor ponsel hanya diberitahukan kepada keluarga. Tidak mencari pemenuhan hasrat dalam hubungan dengan orang lain, menimba suara dari dalam diri, dan memakai waktu hanya untuk menciptakan sesuatu; rasanya justru dalam kehidupan seperti itulah ada "kebahagiaan".

Tentu saja cara hidup seperti biksu (catatan 1) itu ② tidak mungkin di zaman sekarang. Lewat email kita bisa terhubung dan berdialog dengan siapa saja dengan mudah. Berbelanja lewat internet dan bebas menyampaikan pendapat di blog (catatan 2) hanya mungkin karena ada teknologi baru. Informasi dari televisi tak terpisahkan dari percakapan sehari-hari, dan mengobrol lama di telepon juga menyenangkan. Kalau punya mobil, kita bisa pergi ke tempat yang kita suka kapan saja. Kehidupan tanpa komputer, televisi, ponsel, dan mobil tidak terbayangkan; alat-alat praktis (catatan 3) peradaban ini terus-menerus memikat (catatan 4) kita. Meski sebenarnya semua orang tahu bahwa ③ di situ tidak ada "kebahagiaan", kita pula yang tidak sanggup membuang kepraktisan dan efisiensi.

Kalau begitu, kita harus memikirkan kompromi di suatu titik. Memilah mana yang diputus dan mana yang dimanfaatkan. Cara saya relatif sederhana: tidak memiliki alat yang berlebihan, dan kalaupun memiliki, membatasi waktu atau tempat pemakaiannya untuk menahan hasrat. (dipersingkat) Waktu yang dihasilkan dengan cara itu saya gunakan untuk diri sendiri. Itulah cara saya mendekati "kebahagiaan".
(Dari buku karya Ikeuchi Satoru, "Sains untuk Bertahan Hidup")
(Catatan 1) 修道僧: biksu yang sedang menjalani latihan spiritual
(Catatan 2) ブログ: situs web berformat buku harian
(Catatan 3) 利器: alat yang praktis
(Catatan 4) 誘引して止まない: di sini, terus-menerus memikat`,
    },

    // ── 問題13：CPJカードのご案内 ──
    "13": {
      yomi: `カードの{種類|しゅるい}　　A　　B　　C　　D
お{申|もう}し{込|こ}み{資格|しかく}　　30{歳|さい}{以上|いじょう}（{注|ちゅう}1）　　18{歳|さい}{以上|いじょう}29{歳|さい}{以下|いか}（{注|ちゅう}1）　　18{歳|さい}{以上|いじょう}（{注|ちゅう}1）　　18{歳|さい}{以上|いじょう}
{年会費|ねんかいひ}　　ご{本人|ほんにん}　10,500{円|えん}　　3,150{円|えん}　　2,625{円|えん}　　1,050{円|えん}
　　ご{家族|かぞく}　お1{人|にん}1,050{円|えん}　　お1{人|にん}420{円|えん}　　お1{人|にん}420{円|えん}　　{無料|むりょう}
ご{利用|りよう}{可能|かのう}{枠|わく}　　{最高|さいこう}500{万|まん}{円|えん}　　{最高|さいこう}300{万|まん}{円|えん}　　{最高|さいこう}300{万|まん}{円|えん}　　{最高|さいこう}200{万|まん}{円|えん}
{旅行|りょこう}{保険|ほけん}　　{国内|こくない}　　{最高|さいこう}5,000{万|まん}{円|えん}　　{最高|さいこう}5,000{万|まん}{円|えん}　　{最高|さいこう}3,000{万|まん}{円|えん}　　{最高|さいこう}2,000{万|まん}{円|えん}
　　{海外|かいがい}　　{最高|さいこう}8,000{万|まん}{円|えん}　　{最高|さいこう}5,000{万|まん}{円|えん}　　{最高|さいこう}3,000{万|まん}{円|えん}　　{最高|さいこう}2,000{万|まん}{円|えん}
（{注|ちゅう}1）：{学生|がくせい}は{除|のぞ}きます

お{申|もう}し{込|こ}み{方法|ほうほう}
1、インターネットまたは{電話|でんわ}で{資料|しりょう}をご{請求|せいきゅう}ください。
2、{資料|しりょう}が{到着|とうちゃく}しましたら、{入会|にゅうかい}{申込書|もうしこみしょ}にご{記入|きにゅう}のうえ、{本人|ほんにん}{確認|かくにん}{書類|しょるい}を{一緒|いっしょ}にご{返送|へんそう}ください。（Dカードをお{申|もう}し{込|こ}みの{方法|ほうほう}は、{学生証|がくせいしょう}のコピーも{同封|どうふう}してください）
3、{当社|とうしゃ}に{入会|にゅうかい}{申込書|もうしこみしょ}{到着|とうちゃく}{後|ご}、{一|いっ}か{月|げつ}{前後|ぜんご}でカードを{発行|はっこう}いたします。
{当社|とうしゃ}の{判断|はんだん}で、ご{希望|きぼう}に{添|そ}えない{場合|ばあい}もございます。

{本人|ほんにん}の{確認|かくにん}{書類|しょるい}は、{次|つぎ}のいずれか1{点|てん}のコピー（お{名前|なまえ}、{生年月日|せいねんがっぴ}、{現住所|げんじゅうしょ}の{記載|きさい}{面|めん}）をご{用意|ようい}ください。
（1）{運転|うんてん}{免許|めんきょ}をお{持|も}ちの{方|かた}は、{必|かなら}ず{運転|うんてん}{免許証|めんきょしょう}
（2）{運転|うんてん}{免許|めんきょ}をお{持|も}ちでない{方|かた}は、{以下|いか}のいずれか1{点|てん}のコピー
1. パスポート　2. {健康|けんこう}{保険証|ほけんしょう}　3. {住民票|じゅうみんひょう}　4. {在留|ざいりゅう}カードまたは{特別|とくべつ}{永住者|えいじゅうしゃ}{証明書|しょうめいしょ}

{注|ちゅう}2　（1）もしくは（2）に{書|か}かれた{住所|じゅうしょ}と{入会|にゅうかい}{申込書|もうしこみしょ}の{現住所|げんじゅうしょ}が{異|こと}なる{場合|ばあい}は、{現住所|げんじゅうしょ}が{記載|きさい}されている{以下|いか}の{書類|しょるい}のうち、いずれか1{点|てん}のコピーを{併|あわ}せてご{提出|ていしゅつ}ください。
a. {公共|こうきょう}{料金|りょうきん}（{電気|でんき}、ガス、{水道|すいどう}のいずれか{一|ひと}つ）の{領収書|りょうしゅうしょ}
b. {社会|しゃかい}{保険料|ほけんりょう}（{健康|けんこう}{保険|ほけん}、{年金|ねんきん}など）の{領収書|りょうしゅうしょ}
c. {税金|ぜいきん}を{納|おさ}めた{時|とき}の{証明書|しょうめいしょ}`,
      arti: `Jenis kartu — A — B — C — D
Syarat pendaftar — usia 30 tahun ke atas (catatan 1) — usia 18–29 tahun (catatan 1) — usia 18 tahun ke atas (catatan 1) — usia 18 tahun ke atas
Iuran tahunan — pemegang utama: 10.500 yen — 3.150 yen — 2.625 yen — 1.050 yen
  — anggota keluarga: 1.050 yen/orang — 420 yen/orang — 420 yen/orang — gratis
Batas pemakaian — maks. 5 juta yen — maks. 3 juta yen — maks. 3 juta yen — maks. 2 juta yen
Asuransi perjalanan — dalam negeri: maks. 50 juta yen — maks. 50 juta yen — maks. 30 juta yen — maks. 20 juta yen
  — luar negeri: maks. 80 juta yen — maks. 50 juta yen — maks. 30 juta yen — maks. 20 juta yen
(Catatan 1): tidak termasuk pelajar/mahasiswa

Cara mendaftar
1. Mintalah dokumen informasi melalui internet atau telepon.
2. Setelah dokumen tiba, isi formulir pendaftaran keanggotaan, lalu kirimkan kembali bersama dokumen identitas diri. (Bagi yang mendaftar kartu D, sertakan juga fotokopi kartu pelajar/mahasiswa.)
3. Setelah formulir pendaftaran tiba di perusahaan kami, kartu akan diterbitkan dalam waktu sekitar satu bulan.
Ada kalanya kami tidak dapat memenuhi permohonan Anda berdasarkan pertimbangan perusahaan.

Untuk dokumen identitas diri, siapkan fotokopi salah satu dari berikut ini (halaman yang memuat nama, tanggal lahir, dan alamat sekarang).
(1) Bagi yang memiliki SIM, wajib SIM
(2) Bagi yang tidak memiliki SIM, fotokopi salah satu dari berikut
1. Paspor 2. Kartu asuransi kesehatan 3. Surat keterangan domisili (juminhyo) 4. Kartu izin tinggal atau sertifikat penduduk tetap khusus

Catatan 2: Jika alamat yang tertulis di (1) atau (2) berbeda dengan alamat sekarang di formulir pendaftaran, serahkan juga fotokopi salah satu dokumen berikut yang memuat alamat sekarang.
a. Kuitansi tagihan utilitas umum (salah satu dari listrik, gas, atau air)
b. Kuitansi iuran jaminan sosial (asuransi kesehatan, pensiun, dll.)
c. Bukti pembayaran pajak`,
    },
  },
};
