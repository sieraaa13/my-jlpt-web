import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2018
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1812: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{父|ちち}は、{楽|たの}しいときはいつも【{豪快|ごうかい}】に{笑|わら}う。",
      arti: "Ayah saya selalu tertawa 【lepas/terbahak-bahak】 saat senang.",
    },
    2: {
      yomi: "{今回|こんかい}の{仕事|しごと}にはかなりの【{忍耐|にんたい}】が{必要|ひつよう}だ。",
      arti: "Pekerjaan kali ini memerlukan 【kesabaran】 yang cukup besar.",
    },
    3: {
      yomi: "{今|いま}、アイディアを【{募|つの}って】いるところですので、ご{協力|きょうりょく}をお{願|ねが}いします。",
      arti: "Saat ini kami sedang 【mengumpulkan】 ide, jadi mohon kerja samanya.",
      optArti: ["memeras, mempersempit", "menyusun matang", "mengumpulkan, menghimpun (募って)", "mencari, menyelidiki"],
    },
    4: {
      yomi: "{現代|げんだい}の{社会|しゃかい}では、【{膨大|ぼうだい}】なエネルギーが{消費|しょうひ}されている。",
      arti: "Dalam masyarakat modern, energi dalam jumlah 【sangat besar】 dikonsumsi.",
    },
    5: {
      yomi: "【{滞|とどこお}って】いた{作業|さぎょう}が、{担当者|たんとうしゃ}が{変|か}わってからスムーズに{進|すす}み{出|だ}した。",
      arti: "Pekerjaan yang 【tersendat】 mulai berjalan lancar setelah penanggung jawabnya berganti.",
      optArti: ["tersendat (滞って)", "tersumbat, padat", "kewalahan", "menumpuk"],
    },
    6: {
      yomi: "{彼|かれ}の{見識|けんしき}の{高|たか}さには【{驚嘆|きょうたん}】するばかりだ。",
      arti: "Saya hanya bisa 【takjub】 akan tingginya wawasannya.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "マラソン{大会|たいかい}が{終|お}わり、{先|さき}ほど{道路|どうろ}の{交通|こうつう}{規制|きせい}が（　）されました。",
      arti: "Maraton sudah selesai, dan barusan pembatasan lalu lintas jalan (…).",
      optYomi: ["{解除|かいじょ}", "{解禁|かいきん}", "{廃止|はいし}", "{停止|ていし}"],
      optArti: ["dicabut, dibuka", "dibebaskan dari larangan", "dihapus", "dihentikan"],
    },
    8: {
      yomi: "{記事|きじ}のすぐ{下|した}に{写真|しゃしん}を{載|の}せるなど（　）を{工夫|くふう}すれば、もっと{読|よ}みやすくなるだろう。",
      arti: "Jika (…) diatur dengan cermat, misalnya menaruh foto tepat di bawah artikel, pasti akan lebih mudah dibaca.",
      optArti: ["sketsa", "tata letak", "garis besar", "penampilan (fisik)"],
    },
    9: {
      yomi: "{来春|らいしゅん}から{始|はじ}まる{情報|じょうほう}{番組|ばんぐみ}の{司会|しかい}に、{若手|わかて}のアナウンサーを（　）することが{決|き}まった。",
      arti: "Diputuskan untuk (…) penyiar muda sebagai pembawa acara program informasi yang dimulai musim semi depan.",
      optYomi: ["{採取|さいしゅ}", "{引用|いんよう}", "{採択|さいたく}", "{起用|きよう}"],
      optArti: ["mengambil (sampel)", "mengutip", "mengadopsi (usulan)", "menunjuk, memakai (orang untuk peran)"],
    },
    10: {
      yomi: "{事件|じけん}{発生|はっせい}の{連絡|れんらく}を{受|う}け、{記者|きしゃ}たちは{急|いそ}いで{現場|げんば}に（　）。",
      arti: "Mendapat kabar kejadian, para wartawan bergegas (…) ke lokasi.",
      optYomi: ["{寄|よ}りかかった", "{駆|か}けつけた", "{結|むす}びついた", "{突|つ}っ{込|こ}んだ"],
      optArti: ["bersandar", "bergegas datang", "terhubung", "menyeruduk masuk"],
    },
    11: {
      yomi: "この{食品|しょくひん}{会社|がいしゃ}は、{薬品|やくひん}や{化粧品|けしょうひん}の{分野|ぶんや}にも{進出|しんしゅつ}し、（　）{経営|けいえい}に{乗|の}り{出|だ}している。",
      arti: "Perusahaan makanan ini juga masuk ke bidang obat dan kosmetik, dan mulai menjalankan usaha (…).",
      optYomi: ["{建設的|けんせつてき}な", "{普遍的|ふへんてき}な", "{圧倒的|あっとうてき}な", "{多角的|たかくてき}な"],
      optArti: ["konstruktif", "universal", "luar biasa unggul", "beragam (diversifikasi)"],
    },
    12: {
      yomi: "{毎年|まいとし}8{月|がつ}の{祭|まつ}りは、{県|けん}{内外|ないがい}から{集|あつ}まった{数千人|すうせんにん}が{歌|うた}や{踊|おど}りに{参加|さんか}し、（　）{行|おこな}われる。",
      arti: "Festival setiap Agustus diadakan secara (…), dengan ribuan orang dari dalam dan luar prefektur ikut bernyanyi dan menari.",
      optYomi: ["{鮮烈|せんれつ}に", "{絶大|ぜつだい}に", "{盛大|せいだい}に", "{熱烈|ねつれつ}に"],
      optArti: ["dengan tajam memukau", "dengan sangat besar (pengaruh)", "dengan meriah", "dengan bergairah"],
    },
    13: {
      yomi: "あの{人|ひと}はいつも（　）{忙|いそが}しそうに{動|うご}き{回|まわ}っている。",
      arti: "Orang itu selalu bergerak ke sana kemari dengan (…) tampak sibuk.",
      optArti: ["lamban", "lancar meluncur", "tergesa-gesa, terburu-buru", "sempoyongan"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "ハムを【スライスして】{皿|さら}に{載|の}せた。",
      arti: "Saya 【mengiris tipis】 ham lalu menaruhnya di piring.",
      optYomi: ["{細|こま}かく{切|き}って", "{薄|うす}く{切|き}って", "よく{焼|や}いて", "{軽|かる}く{焼|や}いて"],
      optArti: ["memotong kecil-kecil", "mengiris tipis", "memanggang matang", "memanggang sebentar"],
    },
    15: {
      yomi: "{集会|しゅうかい}が{始|はじ}まると、{資料|しりょう}が【めいめいに】{配|くば}られた。",
      arti: "Begitu pertemuan dimulai, dokumen dibagikan 【kepada masing-masing】.",
      optYomi: [null, "{一人一人|ひとりひとり}に", "{一斉|いっせい}に", "{順々|じゅんじゅん}に"],
      optArti: ["per kelompok", "kepada setiap orang", "serentak", "berurutan"],
    },
    16: {
      yomi: "{祖父|そふ}のノートには、{当時|とうじ}の{出来事|できごと}が【{克明|こくめい}に】{記|しる}されていた。",
      arti: "Di buku catatan kakek, peristiwa masa itu ditulis 【dengan sangat rinci】.",
      optYomi: ["{客観的|きゃっかんてき}に", "{簡潔|かんけつ}にまとめて", "{生|い}き{生|い}きと", "{詳|くわ}しく{丁寧|ていねい}に"],
      optArti: ["secara objektif", "dirangkum ringkas", "dengan hidup", "rinci dan teliti"],
    },
    17: {
      yomi: "{状況|じょうきょう}を{改善|かいぜん}する【{手立|てだ}て】がない。",
      arti: "Tidak ada 【cara】 untuk memperbaiki keadaan.",
      optYomi: ["{方法|ほうほう}", "{費用|ひよう}", "{時間|じかん}", "{意志|いし}"],
      optArti: ["cara", "biaya", "waktu", "kemauan"],
    },
    18: {
      yomi: "{子|こ}どものころの{思|おも}い{出|で}が【ありありと】{浮|う}かんできた。",
      arti: "Kenangan masa kecil muncul 【dengan jelas】.",
      optYomi: ["{次々|つぎつぎ}と", null, null, null],
      optArti: ["satu demi satu", "samar-samar", "dengan jelas", "tiba-tiba"],
    },
    19: {
      yomi: "{部長|ぶちょう}は{返事|へんじ}を【しぶっていた】。",
      arti: "Kepala departemen 【enggan/menunda-nunda】 memberi jawaban.",
      optYomi: ["なかなか{返事|へんじ}をしようとしなかった", "{返事|へんじ}するのをすっかり{忘|わす}れていた", "{返事|へんじ}が{来|く}るのをいつまでも{待|ま}っていた", "{早|はや}く{返事|へんじ}が{欲|ほ}しいと{何度|なんど}も{要求|ようきゅう}した"],
      optArti: ["tidak kunjung mau menjawab", "lupa sama sekali untuk menjawab", "terus menunggu jawaban datang", "berkali-kali meminta jawaban cepat"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "{作動|さどう}",
      arti: "作動 = (mesin/perangkat) bekerja, aktif",
      optYomi: [
        "その{子|こ}は、{音楽|おんがく}を{流|なが}すとすぐに{作動|さどう}して{踊|おど}りだした。",
        "{最近|さいきん}の{金融|きんゆう}{市場|しじょう}は{専門家|せんもんか}の{予想|よそう}と{逆|ぎゃく}の{方向|ほうこう}に{作動|さどう}している。",
        "{郊外|こうがい}に{建設|けんせつ}した{新|あたら}しい{工場|こうじょう}が、{今日|きょう}{無事|ぶじ}に{作動|さどう}した。",
        "このガスストーブは{転倒|てんとう}すると{安全|あんぜん}{装置|そうち}が{作動|さどう}してガスが{止|と}まる。",
      ],
      optArti: [
        "Anak itu begitu musik diputar langsung 'aktif' dan mulai menari.",
        "Pasar keuangan belakangan 'bekerja' ke arah yang berlawanan dengan prediksi para ahli.",
        "Pabrik baru yang dibangun di pinggiran kota hari ini 'bekerja' dengan lancar.",
        "Jika kompor gas ini terjatuh, alat pengaman 'aktif' dan gas berhenti.",
      ],
    },
    21: {
      yomi: "しぶとい",
      arti: "しぶとい = gigih, ulet, tidak mudah menyerah",
      optYomi: [
        "{今日|きょう}は{朝|あさ}から{熱|ねつ}があり、{体|からだ}がしぶとくて{動|うご}くのがつらい。",
        "この{箱|はこ}は{紙|かみ}でできているのにとてもしぶとく、{強|つよ}く{押|お}してもつぶれない。",
        "{妹|いもうと}はしぶといところがあって、{失敗|しっぱい}してもあきらめず{何度|なんど}でも{挑戦|ちょうせん}する。",
        "{地下|ちか}の{部屋|へや}は、{風通|かぜとお}しが{悪|わる}く{湿気|しっけ}がしぶとくて、{居心地|いごこち}が{悪|わる}い。",
      ],
      optArti: [
        "Hari ini sejak pagi saya demam, badan terasa 'ulet' dan berat untuk bergerak.",
        "Kotak ini terbuat dari kertas, tetapi sangat 'ulet', ditekan kuat pun tidak penyok.",
        "Adik perempuan saya punya sisi 'ulet'; meski gagal ia tidak menyerah dan mencoba berkali-kali.",
        "Ruang bawah tanah sirkulasi udaranya buruk dan kelembapannya 'ulet', jadi tidak nyaman.",
      ],
    },
    22: {
      yomi: "{備|そな}え{付|つ}ける",
      arti: "備え付ける = memasang/melengkapi (perabot, peralatan) di suatu tempat",
      optYomi: [
        "{寮|りょう}の{部屋|へや}にはパソコンが{備|そな}え{付|つ}けてあったので、{自分|じぶん}で{買|か}わずに{済|す}んだ。",
        "{食事|しょくじ}をテーブルに{備|そな}え{付|つ}けておいたので、どうぞ{召|め}し{上|あ}がってください。",
        "{家|いえ}にお{金|かね}を{備|そな}え{付|つ}けておくために、{銀行|ぎんこう}で{現金|げんきん}を{下|お}ろしてきた。",
        "{父|ちち}が{乗|の}って{出|で}かけたのか、{車庫|しゃこ}に{備|そな}え{付|つ}けてあった{車|くるま}がない。",
      ],
      optArti: [
        "Di kamar asrama sudah 'terpasang' komputer, jadi saya tidak perlu membeli sendiri.",
        "Makanan sudah 'dipasang' di meja, silakan dinikmati.",
        "Untuk 'memasang' uang di rumah, saya mengambil uang tunai di bank.",
        "Mungkin ayah memakainya pergi, mobil yang 'terpasang' di garasi tidak ada.",
      ],
    },
    23: {
      yomi: "{基調|きちょう}",
      arti: "基調 = nada dasar, warna dasar (tema utama)",
      optYomi: [
        "{私|わたし}は{自然|しぜん}{環境|かんきょう}の{豊|ゆた}かさを{基調|きちょう}にして、{引|ひ}っ{越|こ}し{先|さき}の{家|いえ}を{選|えら}んだ。",
        "このチームはキャプテンの{鈴木|すずき}{選手|せんしゅ}を{基調|きちょう}によくまとまっている。",
        "{実話|じつわ}を{基調|きちょう}に{書|か}かれた{小説|しょうせつ}が{映画化|えいがか}され、{多|おお}くの{感動|かんどう}を{呼|よ}んだ。",
        "この{部屋|へや}の{家具|かぐ}は{白|しろ}を{基調|きちょう}にした{明|あか}るい{色|いろ}で{統一|とういつ}されている。",
      ],
      optArti: [
        "Saya memilih rumah tujuan pindah dengan kekayaan alam sekitar sebagai 'nada dasar'.",
        "Tim ini kompak dengan kapten Suzuki sebagai 'nada dasar'.",
        "Novel yang ditulis dengan kisah nyata sebagai 'nada dasar' difilmkan dan sangat mengharukan.",
        "Perabot di kamar ini diseragamkan dengan warna cerah dengan putih sebagai 'warna dasar'.",
      ],
    },
    24: {
      yomi: "かさばる",
      arti: "かさばる = makan tempat, besar dan memakan ruang (barang)",
      optYomi: [
        "{映画館|えいがかん}で、{前|まえ}の{席|せき}の{人|ひと}の{頭|あたま}がかさばって、スクリーンがよく{見|み}えなかった。",
        "{紙|かみ}の{袋|ふくろ}に{入|い}れた{荷物|にもつ}がかさばって、{持|も}って{歩|ある}くのが{大変|たいへん}だった。",
        "{品質|ひんしつ}のいい{材料|ざいりょう}を{使|つか}ったら{費用|ひよう}がかさばってしまった。",
        "{弁論|べんろん}{大会|たいかい}で{自分|じぶん}の{番|ばん}が{近|ちか}づくにつれて、{不安|ふあん}がかさばってきた。",
      ],
      optArti: [
        "Di bioskop, kepala orang di kursi depan 'makan tempat', sehingga layar tidak terlihat jelas.",
        "Barang yang dimasukkan ke kantong kertas 'makan tempat', sehingga repot dibawa berjalan.",
        "Setelah memakai bahan berkualitas, biayanya 'makan tempat'.",
        "Di lomba pidato, makin dekat giliran saya, kecemasan makin 'makan tempat'.",
      ],
    },
    25: {
      yomi: "{交錯|こうさく}",
      arti: "交錯 = bercampur aduk, silang-menyilang (perasaan, pikiran)",
      optYomi: [
        "これからの{人生|じんせい}を{考|かんが}えると、{様々|さまざま}な{思|おも}いが{交錯|こうさく}し、{昨夜|さくや}は{朝|あさ}まで{眠|ねむ}れなかった。",
        "{運搬中|うんぱんちゅう}に{箱|はこ}が{落下|らっか}して{中身|なかみ}が{散乱|さんらん}し、{分|わ}けてあった{商品|しょうひん}が{交錯|こうさく}してしまった。",
        "この{道|みち}は100メートル{先|さき}で{大|おお}きな{道路|どうろ}と{交錯|こうさく}するので、そこを{左折|させつ}してください。",
        "この{集|あつ}まりでは{様々|さまざま}な{年代|ねんだい}の{人|ひと}と{交錯|こうさく}するので、{見聞|けんぶん}を{広|ひろ}める{良|よ}い{機会|きかい}だ。",
      ],
      optArti: [
        "Memikirkan hidup ke depan, berbagai perasaan 'bercampur aduk', dan semalam saya tidak bisa tidur sampai pagi.",
        "Saat diangkut, kotak jatuh, isinya berserakan, dan barang yang sudah dipilah 'bercampur aduk'.",
        "Jalan ini 'bercampur aduk' dengan jalan besar 100 meter di depan, jadi beloklah ke kiri di sana.",
        "Di pertemuan ini kita 'bercampur aduk' dengan orang dari berbagai generasi, jadi kesempatan bagus memperluas wawasan.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{私|わたし}は、Tシャツ（　）ジーンズといったカジュアルな{格好|かっこう}が{好|す}きだ。",
      arti: "Saya suka gaya santai seperti kaus (…) jeans.",
      optArti: ["(objek)", "dipadu dengan (Tシャツにジーンズ)", "dan sebagainya", "sekitar, sampai"],
    },
    27: {
      yomi: "{大波|おおなみ}{海岸|かいがん}に{面|めん}している{夏原町|なつはらちょう}では、{海|うみ}の{町|まち}（　）{新鮮|しんせん}な{魚|さかな}{料理|りょうり}が{楽|たの}しめます。",
      arti: "Di Kota Natsuhara yang menghadap Pantai Onami, Anda bisa menikmati masakan ikan segar (…) kota laut.",
      optArti: ["entah, atau", "tanpa", "sambil tetap", "yang khas (hanya ada di)"],
    },
    28: {
      yomi: "{昨日|きのう}、{水月|すいげつ}{滝|だき}を{見|み}に{行|い}った。さすが{日本|にほん}{有数|ゆうすう}の{水量|すいりょう}を{誇|ほこ}るだけあって、（　）{見事|みごと}な{滝|たき}だった。",
      arti: "Kemarin saya pergi melihat Air Terjun Suigetsu. Pantas saja membanggakan debit air termasuk terbesar di Jepang, air terjunnya (…) menakjubkan.",
      optArti: ["sengaja, berani", "masa sih", "cukup, sungguh", "malah"],
    },
    29: {
      yomi: "（メールで）{映画|えいが}の{情報|じょうほう}、ありがとうございます。{教|おし}えてもらわなかったら、（　）ところでした。{明日|あした}{早速|さっそく}{見|み}に{行|い}きます。",
      arti: "(Email) Terima kasih info filmnya. Kalau tidak diberi tahu, hampir saja (…). Besok saya langsung menonton.",
      optYomi: ["{見逃|みのが}す", "{見逃|みのが}さなかった", "{見逃|みのが}せる", "{見逃|みのが}せなかった"],
      optArti: ["melewatkan (hampir melewatkan)", "tidak melewatkan", "bisa melewatkan", "tidak bisa melewatkan"],
    },
    30: {
      yomi: "{最近|さいきん}、{多|おお}くの{地域|ちいき}で{和紙|わし}{職人|しょくにん}の{高齢化|こうれいか}が{進|すす}んでおり、このままでは、せっかくの{伝統|でんとう}{技術|ぎじゅつ}が（　）。",
      arti: "Belakangan di banyak daerah, perajin kertas washi makin menua, dan kalau begini teknik tradisional yang berharga itu (…).",
      optYomi: ["{失|うしな}われたようだ", "{失|うしな}われかけている", "{失|うしな}われかねない", "{失|うしな}われてはならない"],
      optArti: ["sepertinya sudah hilang", "hampir hilang", "bisa-bisa hilang", "tidak boleh hilang"],
    },
    31: {
      yomi: "{会社|かいしゃ}の{先輩|せんぱい}は、「わからないことがあったら、{何|なん}でも{聞|き}いて。」と{言|い}ってくれるが、{会議|かいぎ}や{外出|がいしゅつ}でほとんど{席|せき}にいないので、（　）{聞|き}けない。",
      arti: "Senior di kantor berkata, \"Kalau ada yang tidak dimengerti, tanya apa saja,\" tetapi ia hampir tidak pernah di mejanya karena rapat atau keluar, jadi (…) tidak bisa.",
      optYomi: ["{聞|き}いては", "{聞|き}くには", "{聞|き}こうにも", "{聞|き}かずとも"],
      optArti: ["kalau bertanya", "untuk bertanya", "mau bertanya pun", "meski tidak bertanya"],
    },
    32: {
      yomi: "{西清|にしきよ}さんは{元|もと}{銀行員|ぎんこういん}。{支店長|してんちょう}を（　）、{夢|ゆめ}であった{和菓子|わがし}{職人|しょくにん}を{目指|めざ}し、45{歳|さい}で{退職|たいしょく}。その10{年|ねん}{後|ご}、{大|だい}ヒット{商品|しょうひん}の「{七色|なないろ}だんご」を{生|う}み{出|だ}した。",
      arti: "Nishikiyo-san adalah mantan pegawai bank. (…) kepala cabang, tetapi demi mimpinya menjadi perajin kue Jepang, ia berhenti di usia 45. Sepuluh tahun kemudian, ia menciptakan produk laris \"Dango Tujuh Warna\".",
      optYomi: ["{任|まか}されたまでは", "{任|まか}されたくらいでは", "{任|まか}されるまでになったが", "{任|まか}されるくらいになれば"],
      optArti: ["sampai dipercaya", "kalau hanya dipercaya sebatas", "sudah sampai dipercaya menjadi, tetapi", "kalau sampai dipercaya"],
    },
    33: {
      yomi: "{母|はは}「ねえ、たけしの{次|つぎ}の{対戦|たいせん}{相手|あいて}、{去年|きょねん}{優勝|ゆうしょう}してるんだって。{勝|か}つのは{難|むずか}しいかな。」{父|ちち}「そんなの（　）わかんないよ。」",
      arti: "Ibu: \"Eh, lawan Takeshi berikutnya katanya juara tahun lalu. Sulit menang, ya?\" Ayah: \"Hal begitu (…) tidak akan tahu.\"",
      optArti: ["katanya sedang melakukan", "kalau tidak dicoba", "yang akan dilakukan", "hendak melakukannya"],
    },
    34: {
      yomi: "A「{昨日|きのう}、{取引先|とりひきさき}の{人|ひと}と{食事|しょくじ}したんだけど、プライベートなことまでいろいろ{聞|き}かれて{困|こま}っちゃった。」B「そんなのは、いちいち{本当|ほんとう}のことを{言|い}わずに{適当|てきとう}に（　）。」",
      arti: "A: \"Kemarin aku makan dengan orang dari klien, tapi aku ditanya macam-macam sampai urusan pribadi, jadi bingung.\" B: \"Hal begitu, tidak usah selalu bilang yang sebenarnya, (…) seadanya saja.\"",
      optYomi: ["{答|こた}えてくれそうだよ", "{答|こた}えられたせいだよ", "{答|こた}えただけのことだよ", "{答|こた}えておけばいいんだよ"],
      optArti: ["sepertinya ia mau menjawab", "itu karena bisa menjawab", "hanya menjawab saja kok", "cukup dijawab saja"],
    },
    35: {
      yomi: "{適切|てきせつ}な{目標|もくひょう}を{設定|せってい}するのは{難|むずか}しいと{言|い}われている。{目標|もくひょう}があまりに{高|たか}すぎると、やる{気|き}を（　）からだ。",
      arti: "Menetapkan target yang tepat dikatakan sulit. Sebab jika target terlalu tinggi, (…) motivasi.",
      optYomi: ["{失|うしな}わせてしまってはならない", "{失|うしな}わせてしまいつつある", "{失|うしな}わせてしまうところだ", "{失|うしな}わせてしまうおそれがある"],
      optArti: ["tidak boleh menghilangkan", "sedang menghilangkan", "hampir menghilangkan", "dikhawatirkan bisa menghilangkan"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{民話|みんわ}「{鶴|つる}の{恩返|おんがえ}し」は、わなにかかって{苦|くる}しんでいる＿＿ ＿＿ ★ ＿＿おじさんに{美|うつく}しい{布|ぬの}を{織|お}って{恩返|おんがえ}しをするというお{話|はなし}です。",
      arti: "Cerita rakyat \"Balas Budi Burung Bangau\" adalah kisah bangau yang ditolong saat menderita terjerat perangkap, lalu membalas budi kepada pria yang menolongnya dengan menenun kain yang indah.",
      optYomi: ["{鶴|つる}が", null, "{助|たす}けられた", "{助|たす}けてくれた"],
      optArti: ["bangau (subjek)", "saat (sedang)", "ditolong", "yang telah menolong"],
    },
    37: {
      yomi: "{新人|しんじん}が{仕事中|しごとちゅう}に{居眠|いねむ}りしているのを{発見|はっけん}。{上司|じょうし}としては、{見|み}なかった＿＿ ＿＿ ★ ＿＿{注意|ちゅうい}することにした。",
      arti: "Saya mendapati karyawan baru tertidur saat kerja. Sebagai atasan, saya tidak bisa membiarkannya dengan pura-pura tidak melihat, jadi saya membangunkannya dan menegurnya.",
      optYomi: ["{起|お}こして", null, null, null],
      optArti: ["membangunkan", "membiarkan", "pura-pura (menganggap)", "tidak bisa juga"],
    },
    38: {
      yomi: "{株式|かぶしき}{会社|がいしゃ}トモカワ。{短期的|たんきてき}な{成果|せいか}が{重視|じゅうし}されがちな＿＿ ＿＿ ★ ＿＿{工作|こうさく}{機械|きかい}メーカーである。",
      arti: "PT Tomokawa. Di zaman yang cenderung mementingkan hasil jangka pendek, ini adalah produsen mesin perkakas yang terus tumbuh dengan mantap sambil memandang masa depan Jepang, tidak hanya keuntungan sesaat.",
      optYomi: ["{時代|じだい}にあって", "{目先|めさき}の{利益|りえき}だけでなく", "{着実|ちゃくじつ}に{成長|せいちょう}を{続|つづ}けている", "{日本|にほん}の{将来|しょうらい}を{見据|みす}えながら"],
      optArti: ["di zaman (seperti itu)", "tidak hanya keuntungan sesaat", "terus tumbuh dengan mantap", "sambil memandang masa depan Jepang"],
    },
    39: {
      yomi: "{犯罪|はんざい}{心理|しんり}{学者|がくしゃ}でもある{小説家|しょうせつか}{大石|おおいし}{竜也|たつや}が{描|えが}く{巧|たく}みな{心理|しんり}{描写|びょうしゃ}は、{犯罪|はんざい}{心理学|しんりがく}に{精通|せいつう}した＿＿ ＿＿ ★ ＿＿ものである。",
      arti: "Penggambaran psikologis yang piawai oleh novelis Oishi Tatsuya, yang juga ahli psikologi kriminal, adalah sesuatu yang baru bisa ditulis oleh seorang ahli yang menguasai psikologi kriminal.",
      optYomi: ["{専門家|せんもんか}", "{初|はじ}めて", null, "{書|か}ける"],
      optArti: ["ahli", "baru (bisa)", "(justru karena) sebagai", "bisa ditulis"],
    },
    40: {
      yomi: "{自分|じぶん}の{人生|じんせい}に{関|かか}わる{選択|せんたく}は{自分|じぶん}でしたい。たとえその{結果|けっか}{失敗|しっぱい}したとしても、{自分|じぶん}が＿＿ ★ ＿＿ ＿＿{経験|けいけん}として{受|う}け{入|い}れられると{思|おも}う。",
      arti: "Saya ingin membuat sendiri pilihan yang menyangkut hidup saya. Meski akibatnya gagal, kalau itu keputusan saya sendiri, saya rasa itu bisa diterima sebagai satu pengalaman.",
      optYomi: [null, "{決|き}めたことなら", null, null],
      optArti: ["satu", "kalau itu yang diputuskan", "dengan itu", "itu (topik)"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{見|み}つけられなかった", "{見|み}つけられなくなった", "{見|み}つけないようにした", "{見|み}つけようとしなかった"],
      optArti: ["tidak bisa ditemukan", "menjadi tidak bisa ditemukan", "berusaha tidak menemukan", "tidak berusaha menemukan"],
    },
    42: {
      optYomi: [null, "{一方|いっぽう}で", null, null],
      optArti: ["malah, justru", "di sisi lain", "lagi pula", "bahkan sebaliknya"],
    },
    43: {
      optYomi: ["その{時|とき}ぐらいである", "その{時|とき}だからである", "その{時|とき}のためである", "その{時|とき}のことである"],
      optArti: ["hanya sekitar saat itu", "karena saat itu", "demi saat itu", "terjadi pada saat itu"],
    },
    44: {
      optYomi: ["その{他|た}の", "{例|れい}の", null, "{以下|いか}のような"],
      optArti: ["lain-lain", "yang itu (yang sudah diketahui)", "seperti ini", "seperti berikut"],
    },
    45: {
      optYomi: ["{持|も}っているのだ", "{持|も}っているべきだ", "{持|も}っていてほしい", "{持|も}っていてもかまわない"],
      optArti: ["memang memiliki", "seharusnya memiliki", "ingin agar memiliki", "boleh saja memiliki"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{筆者|ひっしゃ}が{心配|しんぱい}していることは{何|なに}か。",
      arti: "Apa yang dikhawatirkan penulis?",
      optYomi: [
        "{新|あたら}しい{言葉|ことば}が{世|よ}の{中|なか}にあふれてしまうこと",
        "スピードを{優先|ゆうせん}するあまり{誤|あやま}った{判断|はんだん}をしてしまうこと",
        "{思考|しこう}を{深|ふか}める{行為|こうい}が{軽|かろ}んじられるようになること",
        "{思考|しこう}に{時間|じかん}がかかってインターネットのスピードに{追|お}いつかないこと",
      ],
      optArti: [
        "Kata-kata baru membanjiri masyarakat",
        "Karena terlalu mengutamakan kecepatan, membuat penilaian yang keliru",
        "Tindakan memperdalam pemikiran menjadi diremehkan",
        "Berpikir memakan waktu sehingga tidak bisa mengejar kecepatan internet",
      ],
    },
    47: {
      yomi: "このメールで{最|もっと}も{伝|つた}えたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan email ini?",
      optYomi: [
        "10{月|がつ}{分|ぶん}の{請求書|せいきゅうしょ}を{経理部|けいりぶ}の{担当者|たんとうしゃ}あてに{再度|さいど}{送|おく}るようにしてほしい。",
        "10{月|がつ}から{資材|しざい}{管理部|かんりぶ}の{担当者|たんとうしゃ}が{変|か}わったので、{請求書|せいきゅうしょ}の{送付|そうふ}{先|さき}に{注意|ちゅうい}してほしい。",
        "11{月|がつ}{分|ぶん}から{請求書|せいきゅうしょ}の{受|う}け{付|つ}け{方法|ほうほう}が{変|か}わるので{注意|ちゅうい}してほしい。",
        "11{月|がつ}{分|ぶん}の{請求書|せいきゅうしょ}からは{経理部|けいりぶ}の{担当者|たんとうしゃ}あてに{送|おく}るようにしてほしい。",
      ],
      optArti: [
        "Mohon kirim ulang tagihan bulan Oktober kepada petugas bagian akuntansi.",
        "Mohon perhatikan alamat pengiriman tagihan karena petugas bagian pengelolaan bahan berganti sejak Oktober.",
        "Mohon perhatikan karena cara penerimaan tagihan berubah mulai bulan November.",
        "Mulai tagihan bulan November, mohon dikirim kepada petugas bagian akuntansi.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{教師|きょうし}は{自身|じしん}の{指導力|しどうりょく}を{過信|かしん}しないほうがいい。",
        "{教師|きょうし}は{生徒|せいと}ではなく{自分|じぶん}{自身|じしん}と{向|む}き{合|あ}うべきだ。",
        "{教師|きょうし}は{生徒|せいと}に{影響|えいきょう}を{与|あた}えようと{思|おも}わないほうがいい。",
        "{教師|きょうし}は{生徒|せいと}に{仕事|しごと}に{取|と}り{組|く}む{姿勢|しせい}を{積極的|せっきょくてき}に{見|み}せるべきだ。",
      ],
      optArti: [
        "Guru sebaiknya tidak terlalu percaya pada kemampuan membimbingnya.",
        "Guru harus menghadapi dirinya sendiri, bukan murid.",
        "Guru sebaiknya tidak berniat memengaruhi murid.",
        "Guru harus secara aktif menunjukkan sikap bekerja kepada murid.",
      ],
    },
    49: {
      yomi: "{筆者|ひっしゃ}の{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "{生活|せいかつ}の{多|おお}くの{側面|そくめん}を{効率|こうりつ}で{評価|ひょうか}するのには{違和感|いわかん}がある。",
        "{効率|こうりつ}を{勤勉|きんべん}さと{結|むす}びつけて{考|かんが}えるのには{違和感|いわかん}がある。",
        "{効率|こうりつ}は{現代|げんだい}{社会|しゃかい}を{評価|ひょうか}するのに{有効|ゆうこう}な{指標|しひょう}である。",
        "{効率|こうりつ}は{倫理的|りんりてき}な{価値|かち}を{評価|ひょうか}する{重要|じゅうよう}な{尺度|しゃくど}である。",
      ],
      optArti: [
        "Terasa janggal menilai banyak sisi kehidupan dengan efisiensi.",
        "Terasa janggal mengaitkan efisiensi dengan ketekunan.",
        "Efisiensi adalah indikator yang efektif untuk menilai masyarakat modern.",
        "Efisiensi adalah ukuran penting untuk menilai nilai etis.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{筆者|ひっしゃ}によると、{音楽|おんがく}{体験|たいけん}において{大切|たいせつ}なことは{何|なに}か。",
      arti: "Menurut penulis, apa yang penting dalam pengalaman bermusik?",
      optYomi: [
        "{音楽|おんがく}に{対|たい}する{純粋|じゅんすい}な{感覚|かんかく}を{磨|みが}くこと",
        "{自身|じしん}の{興味|きょうみ}に{合|あ}っている{音楽|おんがく}と{向|む}き{合|あ}うこと",
        "{自身|じしん}が{感|かん}じたことをすなおに{言葉|ことば}にすること",
        "{自身|じしん}がどう{感|かん}じているかをしっかりとらえること",
      ],
      optArti: [
        "Mengasah kepekaan murni terhadap musik",
        "Menghadapi musik yang sesuai minat sendiri",
        "Mengungkapkan perasaan sendiri dengan jujur lewat kata-kata",
        "Menangkap dengan baik bagaimana perasaan diri sendiri",
      ],
    },
    51: {
      yomi: "①{簡単|かんたん}なことではないとあるが、なぜか。",
      arti: "Tertulis \"① bukan hal yang mudah\"; mengapa?",
      optYomi: [
        "{周|まわ}りの{評判|ひょうばん}や{情報|じょうほう}に{無意識|むいしき}に{影響|えいきょう}されてしまうから",
        "「{音楽|おんがく}の{聴|き}き{方|かた}」の{情報|じょうほう}と{自身|じしん}の{聴|き}き{方|かた}は{違|ちが}うから",
        "{自身|じしん}が{音楽|おんがく}にどう{反応|はんのう}しているかを{考|かんが}えたことがないから",
        "{自身|じしん}の{反応|はんのう}より{他人|たにん}の{意見|いけん}や{反応|はんのう}のほうが{大切|たいせつ}だと{考|かんが}えているから",
      ],
      optArti: [
        "Karena tanpa sadar terpengaruh reputasi dan informasi di sekitar",
        "Karena informasi \"cara mendengarkan musik\" berbeda dengan cara mendengar sendiri",
        "Karena belum pernah memikirkan bagaimana diri bereaksi terhadap musik",
        "Karena menganggap pendapat dan reaksi orang lain lebih penting daripada reaksi sendiri",
      ],
    },
    52: {
      yomi: "②これとは{何|なに}か。",
      arti: "Apa \"② ini\" itu?",
      optYomi: [
        "{音楽|おんがく}を{最後|さいご}まで{聴|き}いて{印象|いんしょう}に{残|のこ}るかどうか",
        "{音楽|おんがく}を{途中|とちゅう}でやめずに{聴|き}きたいと{思|おも}えるかどうか",
        "{音楽|おんがく}を{中断|ちゅうだん}しても、{後|あと}でまた{聴|き}きたいと{思|おも}えるかどうか",
        "{音楽|おんがく}を{細切|こまぎ}れにしても、{共|きょう}{体験|たいけん}しているという{気持|きも}ちになれるかどうか",
      ],
      optArti: [
        "Apakah musik membekas setelah didengar sampai akhir",
        "Apakah merasa ingin mendengar musik tanpa berhenti di tengah",
        "Apakah meski musik dihentikan, merasa ingin mendengarnya lagi nanti",
        "Apakah meski musik dipotong-potong, tetap merasa mengalaminya bersama",
      ],
    },
    53: {
      yomi: "①{副業|ふくぎょう}を{認|みと}める{企業|きぎょう}が{増|ふ}えているのはなぜか。",
      arti: "Mengapa \"① makin banyak perusahaan yang mengizinkan kerja sampingan\"?",
      optYomi: [
        "{社員|しゃいん}が{既存|きそん}{業務|ぎょうむ}の{良|よ}さを{見|み}いだせなくなっているから",
        "{副業|ふくぎょう}が{本業|ほんぎょう}に{悪影響|あくえいきょう}を{与|あた}えないことがわかってきたから",
        "{政府|せいふ}や{自治体|じちたい}の{支援|しえん}があることで、{今|いま}が{転機|てんき}だという{認識|にんしき}があるから",
        "{本業|ほんぎょう}だけでは、{社員|しゃいん}{個人|こじん}の{成長|せいちょう}も{企業|きぎょう}の{発展|はってん}も{難|むずか}しいと{考|かんが}えているから",
      ],
      optArti: [
        "Karena karyawan tidak lagi bisa menemukan sisi baik pekerjaan yang ada",
        "Karena diketahui kerja sampingan tidak berdampak buruk pada pekerjaan utama",
        "Karena ada dukungan pemerintah dan pemda, sehingga ada kesadaran bahwa sekarang titik balik",
        "Karena berpendapat hanya dengan pekerjaan utama, pertumbuhan karyawan dan perkembangan perusahaan sulit",
      ],
    },
    54: {
      yomi: "{筆者|ひっしゃ}によると、{社員|しゃいん}にとっての{副業|ふくぎょう}の{利点|りてん}は{何|なに}か。",
      arti: "Menurut penulis, apa keuntungan kerja sampingan bagi karyawan?",
      optYomi: [
        "{多様|たよう}な{経験|けいけん}が{積|つ}める{上|うえ}に、{収入|しゅうにゅう}を{増|ふ}やすことができる。",
        "{他|た}の{職業|しょくぎょう}を{経験|けいけん}することで、{本業|ほんぎょう}の{良|よ}さが{再|さい}{認識|にんしき}できる。",
        "{本業|ほんぎょう}よりも{自分|じぶん}に{向|む}いている{仕事|しごと}を{探|さが}す{機会|きかい}が{増|ふ}える。",
        "{本業|ほんぎょう}を{基盤|きばん}としつつ、{安心|あんしん}して{新|あたら}しい{仕事|しごと}に{挑戦|ちょうせん}できる。",
      ],
      optArti: [
        "Bisa mengumpulkan beragam pengalaman sekaligus menambah penghasilan.",
        "Dengan mengalami profesi lain, bisa kembali menyadari kelebihan pekerjaan utama.",
        "Kesempatan mencari pekerjaan yang lebih cocok daripada pekerjaan utama bertambah.",
        "Sambil berpijak pada pekerjaan utama, bisa menantang pekerjaan baru dengan tenang.",
      ],
    },
    55: {
      yomi: "{筆者|ひっしゃ}によると、{副業|ふくぎょう}をする{社員|しゃいん}に{求|もと}められることは{何|なに}か。",
      arti: "Menurut penulis, apa yang dituntut dari karyawan yang bekerja sampingan?",
      optYomi: [
        "{本業|ほんぎょう}で{得|え}た{経験|けいけん}を{副業|ふくぎょう}に{生|い}かすこと",
        "{本業|ほんぎょう}に{対|たい}しても{常|つね}に{意欲|いよく}を{失|うしな}わないこと",
        "{何|なん}のために{副業|ふくぎょう}をするのかを{明確|めいかく}に{自覚|じかく}すること",
        "{成功|せいこう}した{人|ひと}のまねをせず、{新|あたら}しい{分野|ぶんや}に{挑戦|ちょうせん}すること",
      ],
      optArti: [
        "Memanfaatkan pengalaman dari pekerjaan utama untuk kerja sampingan",
        "Selalu tidak kehilangan semangat terhadap pekerjaan utama",
        "Menyadari dengan jelas untuk apa melakukan kerja sampingan",
        "Tidak meniru orang yang sukses dan menantang bidang baru",
      ],
    },
    56: {
      yomi: "①{濃密|のうみつ}な{質量|しつりょう}をもっているとあるが、なぜか。",
      arti: "Tertulis \"① memiliki bobot yang padat\"; mengapa?",
      optYomi: [
        "これまでの{充実|じゅうじつ}した{人生|じんせい}に{満足|まんぞく}しているから",
        "{長|なが}い{人生|じんせい}で{積|つ}み{上|あ}げてきた{経験|けいけん}があるから",
        "{残|のこ}された{時間|じかん}の{大切|たいせつ}さを{知|し}っているから",
        "{時間|じかん}が{早|はや}く{経|た}つのを{知|し}っているから",
      ],
      optArti: [
        "Karena puas dengan hidup yang penuh selama ini",
        "Karena ada pengalaman yang ditumpuk dalam hidup yang panjang",
        "Karena tahu berharganya waktu yang tersisa",
        "Karena tahu waktu berlalu cepat",
      ],
    },
    57: {
      yomi: "②あの{年齢|ねんれい}に{帰|かえ}れといわれたら、{私|わたし}は{即座|そくざ}に{断|ことわ}るだろうとあるが、なぜか。",
      arti: "Tertulis \"② jika disuruh kembali ke usia itu, saya akan langsung menolak\"; mengapa?",
      optYomi: [
        "{時間|じかん}に{追|お}われてなにをしてもむなしく{感|かん}じたから",
        "なにひとつ{思|おも}いどおりにできず{悩|なや}んでいたから",
        "やりたいこともなく{心|こころ}が{満|み}たされなかったから",
        "{面白|おもしろ}くないことばかりやれといわれたから",
      ],
      optArti: [
        "Karena dikejar waktu dan apa pun yang dilakukan terasa hampa",
        "Karena tidak ada satu pun yang bisa sesuai keinginan dan selalu bingung",
        "Karena tidak ada yang ingin dilakukan dan hati tidak terpuaskan",
        "Karena hanya disuruh melakukan hal yang tidak menarik",
      ],
    },
    58: {
      yomi: "{歳|とし}をとることについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang bertambah tua?",
      optYomi: [
        "{先|さき}がわからないことに{悩|なや}まされなくなり、{穏|おだ}やかな{気持|きも}ちになる。",
        "ふたしかな{夢|ゆめ}であっても、その{価値|かち}が{再|さい}{認識|にんしき}できるようになる。",
        "{夢|ゆめ}より{現実|げんじつ}のほうが{素晴|すば}らしいと{気|き}づいて{安心|あんしん}する。",
        "{悩|なや}みはあっても、{夢|ゆめ}を{実現|じつげん}できるようになる。",
      ],
      optArti: [
        "Tidak lagi dirisaukan oleh masa depan yang tidak pasti, dan perasaan menjadi tenang.",
        "Meski mimpi yang tidak pasti, nilainya bisa disadari kembali.",
        "Lega karena menyadari kenyataan lebih indah daripada mimpi.",
        "Meski ada kerisauan, bisa mewujudkan mimpi.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{人間|にんげん}がいない{時代|じだい}の{日本|にほん}の{森|もり}の{生態系|せいたいけい}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang ekosistem hutan Jepang di zaman tanpa manusia?",
      optYomi: [
        "{生息|せいそく}{環境|かんきょう}が{単純|たんじゅん}で{生物|せいぶつ}が{生息|せいそく}しやすかった。",
        "{生物|せいぶつ}が{環境|かんきょう}の{影響|えいきょう}を{受|う}けることが{現在|げんざい}より{少|すく}なかった。",
        "{生物|せいぶつ}もその{生息|せいそく}{環境|かんきょう}も{現在|げんざい}ほど{多様|たよう}ではなかった。",
        "{生物|せいぶつ}もその{生息|せいそく}{環境|かんきょう}も{自然|しぜん}の{作用|さよう}により{多様化|たようか}しつつあった。",
      ],
      optArti: [
        "Lingkungan habitatnya sederhana sehingga makhluk hidup mudah hidup.",
        "Makhluk hidup lebih jarang terpengaruh lingkungan dibanding sekarang.",
        "Makhluk hidup dan habitatnya tidak seberagam sekarang.",
        "Makhluk hidup dan habitatnya sedang menjadi beragam karena kerja alam.",
      ],
    },
    60: {
      yomi: "そう{簡単|かんたん}ではありませんとあるが、なぜか。",
      arti: "Tertulis \"tidak semudah itu\"; mengapa?",
      optYomi: [
        "{植生|しょくせい}と{土壌|どじょう}の{回復|かいふく}には、{人間|にんげん}が{介入|かいにゅう}したのと{同|おな}じ{時間|じかん}が{必要|ひつよう}だから",
        "{人間|にんげん}が{介入|かいにゅう}した{土壌|どじょう}には、{植生|しょくせい}が{成立|せいりつ}しにくいから",
        "{人間|にんげん}が{介入|かいにゅう}した{土壌|どじょう}の{回復|かいふく}は、{植生|しょくせい}の{回復|かいふく}より{時間|じかん}がかかるから",
        "{人間|にんげん}が{介入|かいにゅう}した{植生|しょくせい}と{土壌|どじょう}は、{自然|しぜん}に{回復|かいふく}することはないから",
      ],
      optArti: [
        "Karena pemulihan vegetasi dan tanah memerlukan waktu sama dengan lamanya campur tangan manusia",
        "Karena di tanah yang dicampuri manusia, vegetasi sulit tumbuh",
        "Karena pemulihan tanah yang dicampuri manusia memakan waktu lebih lama daripada pemulihan vegetasi",
        "Karena vegetasi dan tanah yang dicampuri manusia tidak akan pulih secara alami",
      ],
    },
    61: {
      yomi: "{現在|げんざい}の{日本|にほん}の{生物|せいぶつ}{多様性|たようせい}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang keanekaragaman hayati Jepang saat ini?",
      optYomi: [
        "{人間|にんげん}が{自然|しぜん}の{恩恵|おんけい}を{受|う}けようとして{生|う}み{出|だ}したもの",
        "{人間|にんげん}が{生存|せいぞん}するために{行|おこな}った{介入|かいにゅう}によって{生|しょう}じたもの",
        "{人間|にんげん}が{生物|せいぶつ}{多様性|たようせい}を{目指|めざ}して{介入|かいにゅう}した{結果|けっか}{生|う}まれたもの",
        "{人間|にんげん}の{介入|かいにゅう}が{行|おこな}われなかった{土壌|どじょう}で{自然|しぜん}に{生|しょう}じたもの",
      ],
      optArti: [
        "Sesuatu yang diciptakan manusia untuk menerima berkah alam",
        "Sesuatu yang timbul akibat campur tangan manusia demi bertahan hidup",
        "Sesuatu yang lahir dari campur tangan manusia dengan tujuan keanekaragaman hayati",
        "Sesuatu yang timbul secara alami di tanah tanpa campur tangan manusia",
      ],
    },
    62: {
      yomi: "{人間|にんげん}の{自然|しぜん}への{関|かか}わりについて、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Apa kata penulis tentang keterlibatan manusia dengan alam?",
      optYomi: [
        "{自然|しぜん}の{作用|さよう}による{変化|へんか}を{見守|みまも}り{続|つづ}けるのがよい。",
        "{自然|しぜん}への{介入|かいにゅう}の{有無|うむ}による{利害|りがい}を{十分|じゅうぶん}{見極|みきわ}める{必要|ひつよう}がある。",
        "{生物|せいぶつ}の{損失|そんしつ}より{人間|にんげん}の{損失|そんしつ}が{少|すく}ない{場合|ばあい}は、{自然|しぜん}に{介入|かいにゅう}すべきだ。",
        "{人間|にんげん}が{介入|かいにゅう}した{自然|しぜん}をもとに{戻|もど}すために、{資金|しきん}を{投|とう}じて{対策|たいさく}をすべきだ。",
      ],
      optArti: [
        "Sebaiknya terus mengamati perubahan karena kerja alam.",
        "Perlu menimbang baik-baik untung-rugi dari ada atau tidaknya campur tangan pada alam.",
        "Jika kerugian manusia lebih kecil daripada kerugian makhluk hidup, kita harus campur tangan pada alam.",
        "Kita harus mengeluarkan dana dan mengambil langkah untuk mengembalikan alam yang dicampuri manusia.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{苦手|にがて}を{克服|こくふく}することについて、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana pendapat A dan B tentang mengatasi kelemahan?",
      optYomi: [
        "AもBも、{必要|ひつよう}だと{述|の}べている。",
        "AもBも、{必|かなら}ずしも{必要|ひつよう}ではないと{述|の}べている。",
        "Aは{必要|ひつよう}だと{述|の}べ、Bは{必|かなら}ずしも{必要|ひつよう}ではないと{述|の}べている。",
        "Aは{必|かなら}ずしも{必要|ひつよう}ではないと{述|の}べ、Bは{必要|ひつよう}だと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama menyatakan itu perlu.",
        "A dan B sama-sama menyatakan itu tidak selalu perlu.",
        "A menyatakan perlu; B menyatakan tidak selalu perlu.",
        "A menyatakan tidak selalu perlu; B menyatakan perlu.",
      ],
    },
    64: {
      yomi: "AとBの{認識|にんしき}で{共通|きょうつう}していることは{何|なに}か。",
      arti: "Apa kesamaan pandangan A dan B?",
      optYomi: [
        "{困難|こんなん}を{避|さ}けるために、さまざまな{試行錯誤|しこうさくご}を{行|おこな}うのがよい。",
        "{失敗|しっぱい}に{備|そな}えて、{事前|じぜん}に{適切|てきせつ}な{対処|たいしょ}を{考|かんが}えておくべきだ。",
        "{自身|じしん}の{長所|ちょうしょ}を{生|い}かせる{場|ば}を{見付|みつ}けるべきだ。",
        "{自身|じしん}の{弱|よわ}いところを{自覚|じかく}することは{大切|たいせつ}だ。",
      ],
      optArti: [
        "Sebaiknya melakukan berbagai percobaan untuk menghindari kesulitan.",
        "Harus memikirkan penanganan yang tepat sebelumnya untuk berjaga-jaga dari kegagalan.",
        "Harus menemukan tempat yang bisa memanfaatkan kelebihan diri.",
        "Penting menyadari kelemahan diri sendiri.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "{筆者|ひっしゃ}によると、{大量|たいりょう}{生産|せいさん}のシステムが{普及|ふきゅう}したのはなぜか。",
      arti: "Menurut penulis, mengapa sistem produksi massal meluas?",
      optYomi: [
        "{消費者|しょうひしゃ}には{手作|てづく}りのモノは{価格|かかく}が{高|たか}く{手|て}が{届|とど}かなかったから",
        "{消費者|しょうひしゃ}が{商品|しょうひん}に{金銭|きんせん}を{払|はら}うことを{惜|お}しまなかったから",
        "{消費者|しょうひしゃ}が{手作|てづく}りのモノでは{満足|まんぞく}できなかったから",
        "{消費者|しょうひしゃ}が{便利|べんり}で{安価|あんか}な{商品|しょうひん}を{欲|ほっ}していたから",
      ],
      optArti: [
        "Karena barang buatan tangan terlalu mahal dan tak terjangkau konsumen",
        "Karena konsumen tidak segan membayar untuk barang",
        "Karena konsumen tidak puas dengan barang buatan tangan",
        "Karena konsumen menginginkan barang yang praktis dan murah",
      ],
    },
    66: {
      yomi: "①{事情|じじょう}は{違|ちが}ってくるとあるが、どのように{違|ちが}ってきたか。",
      arti: "Tertulis \"① keadaannya menjadi berbeda\"; bagaimana bedanya?",
      optYomi: [
        "{人|ひと}と{違|ちが}う{商品|しょうひん}を{持|も}つことに{意味|いみ}を{見|み}いだすようになった。",
        "{人|ひと}と{違|ちが}う{商品|しょうひん}を{持|も}たなくても{個性|こせい}を{表|あらわ}せるようになった。",
        "{特定|とくてい}の{商品|しょうひん}を{求|もと}めることに{疑問|ぎもん}を{感|かん}じるようになった。",
        "{特定|とくてい}の{商品|しょうひん}を{持|も}つことでは{自身|じしん}の{価値|かち}を{高|たか}められなくなった。",
      ],
      optArti: [
        "Orang mulai menemukan makna dalam memiliki barang yang berbeda dari orang lain.",
        "Orang bisa menunjukkan kepribadian tanpa memiliki barang yang berbeda dari orang lain.",
        "Orang mulai meragukan pencarian barang tertentu.",
        "Memiliki barang tertentu tidak lagi bisa meningkatkan nilai diri.",
      ],
    },
    67: {
      yomi: "②{深刻|しんこく}な{矛盾|むじゅん}とあるが、どういうことか。",
      arti: "Tertulis \"② kontradiksi yang serius\"; apa maksudnya?",
      optYomi: [
        "{人|ひと}との{違|ちが}いを{出|だ}そうとしているのに、{人|ひと}と{似|に}てしまう。",
        "{買|か}いたいモノはないのに、お{金|かね}を{使|つか}いたくなる。",
        "{社会|しゃかい}のモデルに{自分|じぶん}を{合|あ}わせようとするほど、{合|あ}わなくなる。",
        "{本当|ほんとう}の{自分|じぶん}を{隠|かく}そうとするほど、{自分|じぶん}が{出|で}てしまう。",
      ],
      optArti: [
        "Berusaha tampil beda dari orang lain, tetapi malah jadi mirip orang lain.",
        "Tidak ada barang yang ingin dibeli, tetapi ingin menghabiskan uang.",
        "Makin berusaha menyesuaikan diri dengan model masyarakat, makin tidak cocok.",
        "Makin berusaha menyembunyikan diri yang sebenarnya, makin terlihat dirinya.",
      ],
    },
    68: {
      yomi: "{筆者|ひっしゃ}の{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis?",
      optYomi: [
        "モノを{持|も}たないことで{消費|しょうひ}{社会|しゃかい}の{矛盾|むじゅん}を{自覚|じかく}すべきだ。",
        "モノを{持|も}てることの{幸福感|こうふくかん}を{味|あじ}わうべきだ。",
        "モノに{込|こ}められた「{思|おも}い」を{再|さい}{認識|にんしき}すべきだ。",
        "モノの{持|も}つ{本来|ほんらい}の{機能|きのう}を{再|さい}{認識|にんしき}すべきだ。",
      ],
      optArti: [
        "Kita harus menyadari kontradiksi masyarakat konsumsi dengan tidak memiliki barang.",
        "Kita harus menikmati kebahagiaan bisa memiliki barang.",
        "Kita harus kembali menyadari \"perasaan\" yang tertanam dalam barang.",
        "Kita harus kembali menyadari fungsi asli barang.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "サプリナさんは{中橋区|なかはしく}に{住|す}んでいる。「{中橋|なかはし}{自然|しぜん}の{宿|やど}」に、{国|くに}から{遊|あそ}びに{来|く}る{友達|ともだち}と{二人|ふたり}で{泊|と}まりに{行|い}こうと{思|おも}っている。{友達|ともだち}の{年齢|ねんれい}はサプリナさんと{同|おな}じ24{歳|さい}である。{二人|ふたり}に{適用|てきよう}される1{泊|ぱく}の{利用|りよう}{料金|りょうきん}はどのようになるか。",
      arti: "Saprina-san tinggal di Distrik Nakahashi. Ia berencana menginap di \"Penginapan Alam Nakahashi\" berdua dengan teman yang datang berkunjung dari negaranya. Usia temannya sama dengan Saprina-san, 24 tahun. Berapa tarif per malam yang berlaku bagi mereka berdua?",
      optYomi: [
        "サプリナさんも{友達|ともだち}も5,300{円|えん}",
        "サプリナさん5,300{円|えん}、{友達|ともだち}6,000{円|えん}",
        "サプリナさん5,300{円|えん}、{友達|ともだち}7,300{円|えん}",
        "サプリナさんも{友達|ともだち}も7,300{円|えん}",
      ],
      optArti: [
        "Saprina-san dan temannya masing-masing 5.300 yen",
        "Saprina-san 5.300 yen, temannya 6.000 yen",
        "Saprina-san 5.300 yen, temannya 7.300 yen",
        "Saprina-san dan temannya masing-masing 7.300 yen",
      ],
    },
    70: {
      yomi: "ムカジさんは{中橋区|なかはしく}にある{会社|かいしゃ}で{働|はたら}いていて、10{月|がつ}{1日|ついたち}に「{中橋|なかはし}{自然|しぜん}の{宿|やど}」に{泊|と}まりたいと{考|かんが}えている。{予約|よやく}が{申|もう}し{込|こ}める{期間|きかん}はいつからいつまでで、{区民|くみん}{料金|りょうきん}で{宿泊|しゅくはく}するためにしなければならないことは{何|なに}か。",
      arti: "Mukherjee-san bekerja di perusahaan di Distrik Nakahashi dan ingin menginap di \"Penginapan Alam Nakahashi\" pada 1 Oktober. Kapan sampai kapan masa pendaftaran reservasi, dan apa yang harus dilakukan agar bisa menginap dengan tarif warga distrik?",
      optYomi: [
        "4{月|がつ}{1日|ついたち}から9{月|がつ}24{日|か}の{間|あいだ}で、{申|もう}し{込|こ}み{時|じ}に{区民|くみん}であることを{証明|しょうめい}できるものを{提示|ていじ}する。",
        "4{月|がつ}{1日|ついたち}から9{月|がつ}24{日|か}の{間|あいだ}で、{宿泊|しゅくはく}{時|じ}に{区民|くみん}であることを{証明|しょうめい}できるものを{提示|ていじ}する。",
        "4{月|がつ}{1日|ついたち}から9{月|がつ}30{日|にち}の{間|あいだ}で、{宿泊|しゅくはく}{時|じ}に{区民|くみん}であることを{証明|しょうめい}できるものを{提示|ていじ}する。",
        "6{月|がつ}{1日|ついたち}から9{月|がつ}24{日|か}の{間|あいだ}で、{申|もう}し{込|こ}み{時|じ}に{区民|くみん}であることを{証明|しょうめい}できるものを{提示|ていじ}する。",
      ],
      optArti: [
        "Antara 1 April sampai 24 September, dan menunjukkan bukti sebagai warga distrik saat mendaftar.",
        "Antara 1 April sampai 24 September, dan menunjukkan bukti sebagai warga distrik saat menginap.",
        "Antara 1 April sampai 30 September, dan menunjukkan bukti sebagai warga distrik saat menginap.",
        "Antara 1 Juni sampai 24 September, dan menunjukkan bukti sebagai warga distrik saat mendaftar.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：装飾という架け橋 ──
    "7": {
      yomi: `「{自然|しぜん}には{直線|ちょくせん}がありません」——{子|こ}どもの{頃|ころ}テレビから{聞|き}こえた{言葉|ことば}に、{幼|おさな}いながらはっとしたことを{覚|おぼ}えている。その{情報|じょうほう}が{正|ただ}しいのかを{確|たし}かめるために、それ{以来|いらい}{自然|しぜん}をよく{観察|かんさつ}するようになった。{地|ち}を{這|は}う{蟻|あり}や、{道|みち}ばたの{植物|しょくぶつ}、{切|き}り{立|た}った{崖|がけ}の{岩|いわ}に、たしかに{完全|かんぜん}な{直線|ちょくせん}と{呼|よ}べるものは[41]。そして{自分|じぶん}の{身体|しんたい}にも{直線|ちょくせん}が{存在|そんざい}しないことに{気|き}づいた。{爪|つめ}の{一枚|いちまい}から{歯|は}の{一本|いっぽん}、{耳|みみ}の{内部|ないぶ}にいたるまで、{全|すべ}ての{輪郭|りんかく}はゆるやかな{弧|こ}を{描|えが}いている。

[42]、{身|み}の{回|まわ}りには{直線|ちょくせん}が{溢|あふ}れてもいた。{机|つくえ}や{鉛筆|えんぴつ}、{黒板|こくばん}、{箸|はし}やマグカップ、お{菓子|かし}の{箱|はこ}に{直線|ちょくせん}は{存在|そんざい}していた。{自然|しぜん}の{造形|ぞうけい}と{人工|じんこう}の{造形|ぞうけい}に{明確|めいかく}な{差異|さい}があることを{理解|りかい}したのは[43]。

{大人|おとな}になるにつれて、そんな{人工物|じんこうぶつ}の{表面|ひょうめん}を{覆|おお}う「{装飾|そうしょく}」に{関心|かんしん}を{持|も}つようになった。{植物|しょくぶつ}や{動物|どうぶつ}、{空|そら}や{星|ほし}をかたどった{色|いろ}とりどりの{模様|もよう}に{目|め}を{奪|うば}われたのだ。{装飾|そうしょく}の{歴史|れきし}は{古|ふる}く、{紀元前|きげんぜん}に{作|つく}られた{土器|どき}の{模様|もよう}は、{装飾|そうしょく}が{人類|じんるい}にとっていかに{根源的|こんげんてき}な{行為|こうい}であるかを{示|しめ}している。

[44]{最古|さいこ}の{装飾|そうしょく}は{魔除|まよ}け（{注|ちゅう}1）のために{用|もち}いられたのだという。そうと{知|し}って{最初|さいしょ}のうちは、{人|ひと}の{手跡|しゅせき}（{注|ちゅう}2）を{残|のこ}すことが{魔除|まよ}けのために{重要|じゅうよう}なのだと{考|かんが}えていた。しかし、たとえば{縄文|じょうもん}{土器|どき}がその{模様|もよう}から{火焔|かえん}{土器|どき}と{呼|よ}ばれるように、{他|ほか}の{渦|うず}や{縞|しま}の{模様|もよう}も、{雲|くも}の{流|なが}れや{水|みず}の{波紋|はもん}など{自然|しぜん}の{織|お}り{成|な}すかたちに{着想|ちゃくそう}を{得|え}たものである。つまり{人間|にんげん}は、{土器|どき}という{人工|じんこう}の{造形|ぞうけい}に{自然|しぜん}のかたちを{刻|きざ}むことで{魔除|まよ}けとしたのだ。{自分|じぶん}たちの{手|て}でつくった{自然|しぜん}とは{異質|いしつ}な{造形|ぞうけい}を{自然|しぜん}に{溶|と}け{込|こ}ませることが、{邪悪|じゃあく}なものを{遠|とお}ざける{道|みち}であったのである。

{歴史|れきし}{上|じょう}、{装飾|そうしょく}は{余分|よぶん}なものとして{排除|はいじょ}されたこともあった。しかし{実|じつ}のところ、{装飾|そうしょく}は{私|わたし}たちの{造形|ぞうけい}と{自然|しぜん}の{造形|ぞうけい}とをつなぐ{架|か}け{橋|はし}という{至要|しよう}な（{注|ちゅう}3）{役割|やくわり}を[45]。
（{注|ちゅう}1）{魔除|まよ}け：{悪|わる}い{物|もの}を{近|ちか}づけないようにすること
（{注|ちゅう}2）{人|ひと}の{手跡|しゅせき}：{人|ひと}の{手|て}を{加|くわ}えた{跡|あと}
（{注|ちゅう}3）{至要|しよう}な：とても{重要|じゅうよう}な`,
      arti: `"Di alam tidak ada garis lurus." — Saya ingat, waktu kecil, meski masih belia, saya tersentak mendengar kata-kata ini dari televisi. Untuk memastikan apakah informasi itu benar, sejak itu saya rajin mengamati alam. Pada semut yang merayap di tanah, tumbuhan di pinggir jalan, batu tebing yang curam, memang [41] sesuatu yang bisa disebut garis lurus sempurna. Lalu saya sadar bahwa di tubuh saya pun tidak ada garis lurus. Dari selembar kuku, sebatang gigi, sampai bagian dalam telinga, semua garis luarnya membentuk lengkung yang landai.

[42], di sekitar saya juga melimpah garis lurus. Pada meja, pensil, papan tulis, sumpit, mug, dan kotak kue ada garis lurus. Saya memahami bahwa ada perbedaan jelas antara bentuk alam dan bentuk buatan manusia [43].

Seiring beranjak dewasa, saya mulai tertarik pada "dekorasi" yang menutupi permukaan benda buatan manusia itu. Saya terpukau oleh motif warna-warni yang meniru tumbuhan, hewan, langit, dan bintang. Sejarah dekorasi sudah tua, dan motif pada gerabah yang dibuat sebelum Masehi menunjukkan betapa dekorasi adalah tindakan yang mendasar bagi manusia.

Katanya, dekorasi tertua [44] dipakai untuk penolak bala (catatan 1). Mengetahui itu, awalnya saya kira yang penting untuk penolak bala adalah meninggalkan jejak tangan manusia (catatan 2). Namun, misalnya gerabah Jomon disebut gerabah lidah api karena motifnya, motif pusaran dan garis-garis lainnya juga mendapat ilham dari bentuk-bentuk yang dijalin alam, seperti aliran awan dan riak air. Artinya, manusia menjadikannya penolak bala dengan mengukirkan bentuk alam pada bentuk buatan manusia bernama gerabah. Melebur bentuk buatan tangan sendiri yang asing bagi alam ke dalam alam adalah jalan untuk menjauhkan hal jahat.

Dalam sejarah, dekorasi kadang disingkirkan sebagai hal yang berlebihan. Namun sesungguhnya, dekorasi [45] peran sangat penting (catatan 3) sebagai jembatan yang menghubungkan bentuk buatan kita dengan bentuk alam.
(Catatan 1) 魔除け: menjauhkan hal-hal jahat
(Catatan 2) 人の手跡: jejak campur tangan manusia
(Catatan 3) 至要な: sangat penting`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{私|わたし}たちにとっての{言葉|ことば}というものは{思考|しこう}そのものです。{言葉|ことば}を{使|つか}って{考|かんが}える、{判断|はんだん}するのが{人間|にんげん}だとすれば、スピードが{最|さい}{優先|ゆうせん}されるネット（{注|ちゅう}1）では、{熟考|じゅっこう}する、{内省|ないせい}する、{深|ふか}く{考|かんが}えるという、{言葉|ことば}による{人間的|にんげんてき}な{営為|えいい}（{注|ちゅう}2）がないがしろにされはじめているのではないか。もしもこれからの{社会|しゃかい}が、ネット{上|じょう}を{流|なが}れる{言葉|ことば}を{主軸|しゅじく}に{営|いとな}まれるようになると、{人|ひと}にとっての{言葉|ことば}とは、{鮮度|せんど}が{重視|じゅうし}の{生鮮|せいせん}{食品|しょくひん}のようなものになってしまうかもしれません。そこに{思考|しこう}の{積|つ}み{重|かさ}ねや{成熟|せいじゅく}、{歴史|れきし}といったものは{不必要|ふひつよう}です。
（{注|ちゅう}1）ネット：ここでは、インターネット
（{注|ちゅう}2）{営為|えいい}：{行|おこな}い`,
      arti: `Bagi kita, bahasa adalah pikiran itu sendiri. Jika manusia adalah makhluk yang berpikir dan menilai dengan bahasa, bukankah di internet (catatan 1), di mana kecepatan diutamakan, kegiatan (catatan 2) manusiawi melalui bahasa seperti menimbang matang, merenung, dan berpikir mendalam mulai diabaikan? Jika masyarakat ke depan dijalankan dengan bahasa yang mengalir di internet sebagai poros utama, bahasa bagi manusia mungkin akan menjadi seperti bahan makanan segar yang mementingkan kesegaran. Di sana, penumpukan pikiran, kematangan, dan sejarah tidak diperlukan.
(Catatan 1) ネット: di sini, internet
(Catatan 2) 営為: tindakan, kegiatan`,
    },
    "8-2": {
      yomi: `{以下|いか}は、{取引先|とりひきさき}から{送|おく}られてきたメールである。

{沖竹|おきたけ}{株式|かぶしき}{会社|がいしゃ}　{営業部|えいぎょうぶ}
{戸田|とだ}{安文|やすふみ}{様|さま}

いつもお{世話|せわ}になっております。
10{月|がつ}{分|ぶん}の{請求書|せいきゅうしょ}のご{送付|そうふ}、ありがとうございました。
10{月|がつ}9{日|か}にファクス{文書|ぶんしょ}にてご{連絡|れんらく}いたしましたように、{弊社|へいしゃ}では10{月|がつ}{分|ぶん}より、{請求書|せいきゅうしょ}を{各|かく}{部署|ぶしょ}の{担当者|たんとうしゃ}{経由|けいゆ}ではなく、{経理部|けいりぶ}で{直接|ちょくせつ}{受|う}け{付|つ}けることになりました。{今後|こんご}は{資材|しざい}{管理部|かんりぶ}・{横井|よこい}ではなく{経理部|けいりぶ}・{長野|ながの}あてにご{送付|そうふ}{願|ねが}います。
{今回|こんかい}ご{送付|そうふ}いただいた{請求書|せいきゅうしょ}はこちらで{処理|しょり}いたしますので、11{月|がつ}{分|ぶん}よりご{対応|たいおう}をよろしくお{願|ねが}いいたします。

2018{年|ねん}11{月|がつ}6{日|か}
{株式|かぶしき}{会社|がいしゃ}イスキホーム　{資材|しざい}{管理部|かんりぶ}　{横井|よこい}{絵未|えみ}
{電話|でんわ}：07-8756-1324
メールアドレス：e_yokoi@isukihome.co.jp`,
      arti: `Berikut ini adalah email yang dikirim dari mitra bisnis.

PT Okitake, Bagian Penjualan
Yth. Bapak Toda Yasufumi

Terima kasih atas kerja samanya selama ini.
Terima kasih telah mengirimkan tagihan bulan Oktober.
Sebagaimana kami sampaikan melalui faks pada 9 Oktober, mulai tagihan bulan Oktober, perusahaan kami menerima tagihan langsung di bagian akuntansi, bukan melalui petugas di masing-masing bagian. Selanjutnya mohon dikirimkan kepada Nagano di bagian akuntansi, bukan kepada Yokoi di bagian pengelolaan bahan.
Tagihan yang Anda kirim kali ini akan kami proses di sini, jadi mohon penyesuaiannya mulai tagihan bulan November.

6 November 2018
PT Isuki Home, Bagian Pengelolaan Bahan, Yokoi Emi
Telepon: 07-8756-1324
Alamat email: e_yokoi@isukihome.co.jp`,
    },
    "8-3": {
      yomi: `「とにかく{教師|きょうし}は{生徒|せいと}に{向|む}き{合|あ}うべきだ」という{考|かんが}えには、{子|こ}どもを「{指導|しどう}」してやろうという、プロを{自任|じにん}する{教師|きょうし}の、ある{種|しゅ}{思|おも}いあがった{気持|きも}ちがあります。そんなことをしなくても、{毎日|まいにち}{後|うし}ろ{姿|すがた}を{見|み}ているだけで、{子|こ}どもはいい{先生|せんせい}を{見抜|みぬ}きます。{自分|じぶん}の{好|す}きな{先生|せんせい}を{見|み}つけて、{勝手|かって}に{影響|えいきょう}を{受|う}けていくのです。

それを、{向|む}き{合|あ}って{何|なに}かを{伝|つた}えようとか、{道徳的|どうとくてき}な{影響|えいきょう}を{与|あた}えようなどとするから、{偽|にせ}の{厳粛|げんしゅく}さが{生|う}まれ、{子|こ}どもに{嫌|いや}な{圧迫感|あっぱくかん}を{与|あた}えるのです。`,
      arti: `Dalam pikiran "pokoknya guru harus menghadapi murid" terkandung semacam kesombongan guru yang menganggap dirinya profesional dan ingin "membimbing" anak. Tanpa melakukan hal seperti itu pun, cukup dengan melihat punggung guru setiap hari, anak-anak bisa menilai guru yang baik. Mereka menemukan guru yang mereka sukai, dan dengan sendirinya terpengaruh.

Justru karena guru berusaha berhadapan untuk menyampaikan sesuatu atau memberi pengaruh moral, lahirlah kekhidmatan palsu yang memberi tekanan tidak enak kepada anak.`,
    },
    "8-4": {
      yomi: `{効率|こうりつ}は、{幾多|いくた}ある{価値|かち}{尺度|しゃくど}のひとつに{過|す}ぎない。けれども{現代|げんだい}では、{効率|こうりつ}が{良|よ}いことには{突出|とっしゅつ}した{評価|ひょうか}が{与|あた}えられている。また、{効率|こうりつ}は、{勤勉|きんべん}さと{結|むす}びついているから、{倫理的|りんりてき}な{価値|かち}をも{帯|お}びている。そのため、ほとんどの{時間|じかん}を{効率|こうりつ}で{価値|かち}{判断|はんだん}する{傾向|けいこう}が{強|つよ}くなる。1{日|にち}の{価値|かち}は、その{日|ひ}にどれだけのことができたのかによって{計|はか}られるようになる。{考|かんが}えてみれば{不思議|ふしぎ}なことだが、{生活|せいかつ}の{一|いち}{側面|そくめん}でしかない{生産|せいさん}の{場|ば}で{有効|ゆうこう}な{指標|しひょう}が、ほかの{側面|そくめん}にまで{拡張|かくちょう}して{適用|てきよう}されるようになるのだ。`,
      arti: `Efisiensi hanyalah salah satu dari sekian banyak ukuran nilai. Namun di masa kini, efisiensi yang baik diberi penilaian yang menonjol. Selain itu, karena efisiensi terkait dengan ketekunan, ia juga mengandung nilai etis. Karena itu, kecenderungan menilai hampir seluruh waktu dengan efisiensi makin kuat. Nilai sehari diukur dari seberapa banyak yang bisa diselesaikan hari itu. Kalau dipikir aneh juga, indikator yang efektif di bidang produksi, yang hanyalah salah satu sisi kehidupan, diperluas dan diterapkan sampai ke sisi-sisi lain.`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `すべての{音楽|おんがく}{体験|たいけん}の{原点|げんてん}となってくれるのは、まだどんな{言葉|ことば}も{湧|わ}き{上|あ}がってこないような、{純粋|じゅんすい}に{感覚的|かんかくてき}な「{第一|だいいち}{印象|いんしょう}」{以外|いがい}にありえないだろう。{一体|いったい}{自分|じぶん}はその{音楽|おんがく}にどう{反応|はんのう}しているのか。まったく{何|なん}の{興味|きょうみ}も{感|かん}じていないか、{何|なに}とはなしに{居心地|いごこち}が{悪|わる}いか、それとも{気|き}になってはいるのだが、まだうまくそれを{言葉|ことば}に{出来|でき}ないでいるのか。{音楽|おんがく}{体験|たいけん}において{一番|いちばん}{大切|たいせつ}なのは、{他人|たにん}の{意見|いけん}や{世評|せひょう}などに{惑|まど}わされず、まずは{自分|じぶん}の{内|うち}なる{声|こえ}に{耳|みみ}を{澄|す}ませてみることではないかと、{私|わたし}は{考|かんが}えている。

{自分|じぶん}が{音楽|おんがく}にどう{反応|はんのう}しているかをきちんと{聴|き}き{取|と}ってあげる——{実|じつ}はこれはそんなに①{簡単|かんたん}なことではない。マスメディア{時代|じだい}に{生|い}きる{私|わたし}たちは、{音楽|おんがく}を{聴|き}くより{以前|いぜん}に{既|すで}に{大量|たいりょう}の{情報|じょうほう}にさらされているし、{知|し}らないうちに「{音楽|おんがく}の{聴|き}き{方|かた}」についていろいろなことを{刷|す}り{込|こ}まれている（{注|ちゅう}1）。それに{他人|たにん}の{意見|いけん}や{反応|はんのう}だって{気|き}になる。そして{私|わたし}{自身|じしん}が{音楽|おんがく}を{聴|き}くときの{目安|めやす}にしているのは{何|なに}かといえば、それは{最終的|さいしゅうてき}にただ{一|ひと}つ、「{音楽|おんがく}を{細切|こまぎ}れにすることへのためらいの{気持|きも}ちが{働|はたら}くか{否|いな}か」ということである。{細切|こまぎ}れとはつまり、{演奏会|えんそうかい}の{途中|とちゅう}で{席|せき}を{外|はず}したり、CDなら{勝手|かって}に{中断|ちゅうだん}したりすることだ。{何|なに}かしら{立|た}ち{去|さ}りがたいような{感覚|かんかく}と{言|い}えばいいだろうか。{音楽|おんがく}という{不可逆|ふかぎゃく}にして{不可分|ふかぶん}（{注|ちゅう}2）の{一|ひと}つの{時間|じかん}を、{音楽|おんがく}とともに{最後|さいご}まで{共|きょう}{体験|たいけん}しようという{気持|きも}ちになれるかどうか。{自分|じぶん}にとってそれが{意味|いみ}／{意義|いぎ}のある{音楽|おんがく}{体験|たいけん}であったかどうかを{測|はか}るサインは、{最終的|さいしゅうてき}に②これ{以外|いがい}ないと{思|おも}うのである。
（{注|ちゅう}1）{刷|す}り{込|こ}まれる：ここでは、{身|み}に{付|つ}けさせられる
（{注|ちゅう}2）{不可逆|ふかぎゃく}にして{不可分|ふかぶん}の：{逆戻|ぎゃくもど}りできない{上|うえ}に、{分|わ}けられない`,
      arti: `Titik awal semua pengalaman bermusik tidak lain adalah "kesan pertama" yang murni berdasarkan rasa, saat belum ada kata apa pun yang muncul. Sebenarnya bagaimana diri kita bereaksi terhadap musik itu? Apakah sama sekali tidak tertarik, entah kenapa merasa tidak nyaman, atau terusik tetapi belum bisa mengungkapkannya dengan kata-kata? Saya berpendapat, yang paling penting dalam pengalaman bermusik adalah pertama-tama mendengarkan suara batin sendiri tanpa terkecoh pendapat orang lain atau penilaian publik.

Mendengarkan dengan saksama bagaimana diri kita bereaksi terhadap musik — sebenarnya ini ① bukan hal yang semudah itu. Kita yang hidup di era media massa sudah terpapar informasi dalam jumlah besar sebelum mendengar musik, dan tanpa sadar sudah ditanami (catatan 1) berbagai hal tentang "cara mendengarkan musik". Lagi pula, pendapat dan reaksi orang lain juga terasa penting. Lalu, apa yang saya jadikan patokan saat mendengarkan musik? Pada akhirnya hanya satu: "apakah muncul rasa enggan untuk memotong-motong musik". Memotong-motong artinya meninggalkan kursi di tengah konser, atau menghentikan CD sesuka hati. Mungkin bisa disebut perasaan seolah sulit untuk beranjak pergi. Apakah kita merasa ingin mengalami bersama sampai akhir, bersama musik, satu waktu yang bernama musik yang tak bisa diulang dan tak bisa dipisahkan (catatan 2). Menurut saya, tanda untuk mengukur apakah itu pengalaman bermusik yang bermakna bagi diri kita, pada akhirnya ② tidak ada selain ini.
(Catatan 1) 刷り込まれる: di sini, ditanamkan
(Catatan 2) 不可逆にして不可分の: tidak bisa diputar balik, sekaligus tidak bisa dipisahkan`,
    },
    "9-2": {
      yomi: `①{副業|ふくぎょう}を{認|みと}める{企業|きぎょう}が{増|ふ}えている。{自社|じしゃ}の{社員|しゃいん}に{副業|ふくぎょう}を{認|みと}めるとともに、{副業|ふくぎょう}{採用|さいよう}をしている{企業|きぎょう}もある。{神戸市|こうべし}など{自治体|じちたい}でも{推進|すいしん}する{動|うご}きが{出|で}てきた。{成長|せいちょう}{戦略|せんりゃく}の{一環|いっかん}で{政府|せいふ}も{後押|あとお}しをしている。

もともと{企業|きぎょう}は{本業|ほんぎょう}への{支障|ししょう}、{帰属|きぞく}{意識|いしき}の{低下|ていか}、{機密|きみつ}{情報|じょうほう}の{漏洩|ろうえい}などを{防|ふせ}ぐため、{副業|ふくぎょう}を{良|よ}しとしてこなかった。{転機|てんき}を{迎|むか}えているのは、{既存|きそん}{業務|ぎょうむ}だけでは{社員|しゃいん}の{飛躍的|ひやくてき}{成長|せいちょう}は{望|のぞ}めず、{企業|きぎょう}が{発展|はってん}することも{難|むずか}しい、という{危機感|ききかん}があるからだろう。

ウェブサイト{調査|ちょうさ}「{日本|にほん}の{人事部|じんじぶ}　{人事|じんじ}{白書|はくしょ}2017」によれば、{導入|どうにゅう}{企業|きぎょう}が{挙|あ}げた{副業|ふくぎょう}の{効果|こうか}は「{従業員|じゅうぎょういん}のモチベーション（{注|ちゅう}1）{向上|こうじょう}」が{最多|さいた}だった。{副業|ふくぎょう}を{自社|じしゃ}だけでは{得|え}られない{経験|けいけん}やスキル、{人脈|じんみゃく}{形成|けいせい}の{場|ば}ととらえ、{社員|しゃいん}{一人|ひとり}ひとりの{創造性|そうぞうせい}と{生産性|せいさんせい}の{向上|こうじょう}に{期待|きたい}をかける。

{社員|しゃいん}にとっても{本業|ほんぎょう}を{持|も}ちながら{第|だい}2のキャリアを{築|きず}いたり、ローリスク（{注|ちゅう}2）で{起業|きぎょう}したり、メリットがある。{副業|ふくぎょう}が{社会|しゃかい}{全体|ぜんたい}に{広|ひろ}がれば{人手|ひとで}{不足|ぶそく}を{補|おぎな}い、{成長|せいちょう}{産業|さんぎょう}へ{緩|ゆる}やかに{労働力|ろうどうりょく}をシフトさせ、ベンチャー{企業|きぎょう}（{注|ちゅう}3）の{活性化|かっせいか}にも{寄与|きよ}する。

しかし、{労働|ろうどう}{時間|じかん}{管理|かんり}や{労働|ろうどう}{災害|さいがい}の{扱|あつか}いなど{明確|めいかく}になっていないことも{多|おお}い。{主務|しゅむ}{先|さき}（{注|ちゅう}4）の{責任|せきにん}{範囲|はんい}を{明示|めいじ}した{規定|きてい}やガイドラインを{望|のぞ}む{声|こえ}がある。（{中略|ちゅうりゃく}）

{社員|しゃいん}{側|がわ}の{意志|いし}と{力量|りきりょう}も{問|と}われる。

{営業|えいぎょう}{職|しょく}の{友人|ゆうじん}が{本業|ほんぎょう}の{大|だい}{企業|きぎょう}{向|む}けコンサルティング（{注|ちゅう}5）と、{生活|せいかつ}{用品|ようひん}を{販売|はんばい}する{副業|ふくぎょう}を{両立|りょうりつ}させ、{大|だい}{成功|せいこう}している。{一方|いっぽう}、それを{見|み}てまねをした{同僚|どうりょう}たちはどちらも{売|う}れず、{本業|ほんぎょう}{企業|きぎょう}の{組織|そしき}{風土|ふうど}が{荒|あ}れてしまったという。{副業|ふくぎょう}をする{側|がわ}にも、{確|たし}かな{目的|もくてき}{意識|いしき}が{欠|か}かせない。
（{注|ちゅう}1）モチベーション：{意欲|いよく}
（{注|ちゅう}2）ローリスク：{低|ひく}いリスク
（{注|ちゅう}3）ベンチャー{企業|きぎょう}：{新|しん}{分野|ぶんや}に{挑|いど}む{小|しょう}{規模|きぼ}{企業|きぎょう}
（{注|ちゅう}4）{主務|しゅむ}{先|さき}：ここでは、{本業|ほんぎょう}の{勤務|きんむ}{先|さき}
（{注|ちゅう}5）コンサルティング：ここでは、{助言|じょげん}や{指導|しどう}`,
      arti: `① Makin banyak perusahaan yang mengizinkan kerja sampingan. Ada perusahaan yang mengizinkan karyawannya bekerja sampingan sekaligus merekrut pekerja sampingan. Pemerintah daerah seperti Kota Kobe pun mulai mendorongnya. Pemerintah pusat juga mendukung sebagai bagian dari strategi pertumbuhan.

Pada dasarnya perusahaan tidak menyetujui kerja sampingan untuk mencegah gangguan pada pekerjaan utama, menurunnya rasa memiliki, dan bocornya informasi rahasia. Perubahan ini mungkin terjadi karena ada rasa krisis bahwa dengan pekerjaan yang ada saja, pertumbuhan pesat karyawan tidak bisa diharapkan dan perusahaan pun sulit berkembang.

Menurut survei situs web "Bagian SDM Jepang – Buku Putih SDM 2017", efek kerja sampingan yang paling banyak disebut perusahaan pengadopsi adalah "peningkatan motivasi (catatan 1) karyawan". Kerja sampingan dipandang sebagai tempat memperoleh pengalaman, keterampilan, dan jaringan yang tidak bisa didapat di perusahaan sendiri, dan diharapkan meningkatkan kreativitas serta produktivitas setiap karyawan.

Bagi karyawan pun ada manfaatnya, seperti membangun karier kedua sambil tetap punya pekerjaan utama, atau memulai usaha dengan risiko rendah (catatan 2). Jika kerja sampingan meluas ke seluruh masyarakat, ia bisa menutupi kekurangan tenaga kerja, perlahan menggeser tenaga kerja ke industri yang tumbuh, dan juga berkontribusi menghidupkan perusahaan rintisan (catatan 3).

Namun, banyak hal yang belum jelas, seperti pengelolaan jam kerja dan penanganan kecelakaan kerja. Ada suara yang menginginkan aturan atau pedoman yang menjelaskan batas tanggung jawab tempat kerja utama (catatan 4). (dipersingkat)

Kemauan dan kemampuan pihak karyawan juga diuji.

Seorang teman yang bekerja di bidang penjualan berhasil besar menjalankan pekerjaan utamanya, konsultasi (catatan 5) untuk perusahaan besar, sekaligus kerja sampingan menjual barang kebutuhan sehari-hari. Sebaliknya, rekan-rekannya yang melihat lalu meniru, tidak laku di keduanya, dan katanya budaya organisasi di perusahaan utamanya jadi kacau. Pihak yang bekerja sampingan pun perlu kesadaran tujuan yang jelas.
(Catatan 1) モチベーション: motivasi
(Catatan 2) ローリスク: risiko rendah
(Catatan 3) ベンチャー企業: perusahaan kecil yang menantang bidang baru
(Catatan 4) 主務先: di sini, tempat kerja utama
(Catatan 5) コンサルティング: di sini, nasihat dan bimbingan`,
    },
    "9-3": {
      yomi: `{人生|じんせい}の{経験|けいけん}を{積|つ}んだ{者|もの}は、{同|おな}じ{出来事|できごと}に{遭遇|そうぐう}しても、また{同|おな}じ{風景|ふうけい}を{眺|なが}めても、そこから{得|え}る{情報|じょうほう}{量|りょう}が、{若者|わかもの}と{較|くら}べると{格段|かくだん}に{多|おお}い。

だから{老人|ろうじん}の{場合|ばあい}は、{同|おな}じ{長|なが}さの{時間|じかん}の{中|なか}に{詰|つ}まっている{内容|ないよう}が{充実|じゅうじつ}していて、{一刻一刻|いっこくいっこく}が①{濃密|のうみつ}な{質量|しつりょう}をもっている。

（{中略|ちゅうりゃく}）

{老人|ろうじん}がボーっとなにかを{眺|なが}めているのは、なにもすることがないから、ではなく、{思|おも}い{出|だ}すことが{多|おお}{過|す}ぎて{忙|いそが}しいからなのである。{時間|じかん}が{早|はや}く{経|た}つのは、そのせいではないか。

{若|わか}い{頃|ころ}は、いつもヒマを{持|も}て{余|あま}していたものだ。

なにか、{面白|おもしろ}いことはないか。どこかへ{行|い}けば、なにかが{見|み}つかるだろうか。

やれといわれたことをやるのは{嫌|いや}だが、かといって{自分|じぶん}からやりたいことは{見|み}つからない。{退屈|たいくつ}を{紛|まぎ}らわす{術|すべ}も{知|し}らず、{風景|ふうけい}を{眺|なが}めても{空虚|くうきょ}（{注|ちゅう}1）で、{時間|じかん}を{満|み}たす{材料|ざいりょう}があまりにも{少|すく}なかった。いま、②あの{年齢|ねんれい}に{帰|かえ}れといわれたら、{私|わたし}は{即座|そくざ}に{断|ことわ}るだろう。

{若|わか}い{頃|ころ}に{悩|なや}むのは、{先|さき}が{見|み}えないからである。

{自分|じぶん}にどのくらいの{力|ちから}があるのかもわからず、どんな{未来|みらい}が{開|ひら}けているのかもわからない。{先|さき}がわからないことを{夢|ゆめ}と{言|い}い{換|か}えて{慰|なぐさ}めてみても、その{夢|ゆめ}が{虚|うつ}ろなものであることはうすうす{感|かん}じている。あんな{時代|じだい}に、{二度|にど}と{戻|もど}ってたまるものか（{注|ちゅう}2）。

{夢|ゆめ}は{潰|つぶ}れて{現実|げんじつ}となり、その{繰|く}り{返|かえ}しの{末|すえ}に{人生|じんせい}が{現実|げんじつ}ばかりで{満|み}たされるようになることが、{歳|とし}をとるということにほかならない。ふたしかな{夢|ゆめ}を{見|み}ずに{済|す}むことが、いかに{心|こころ}に{平安|へいあん}（{注|ちゅう}3）をもたらすものか、{歳|とし}をとらなければわかるまい。
（{注|ちゅう}1）{空虚|くうきょ}だ：むなしい
（{注|ちゅう}2）{二度|にど}と{戻|もど}ってたまるものか：{絶対|ぜったい}{戻|もど}りたくない
（{注|ちゅう}3）{平安|へいあん}：{安|やす}らかさ`,
      arti: `Orang yang sudah banyak pengalaman hidup, meski mengalami peristiwa yang sama atau memandang pemandangan yang sama, jumlah informasi yang didapat darinya jauh lebih banyak dibanding anak muda.

Karena itu, bagi orang tua, isi yang terkandung dalam waktu yang sama panjangnya lebih padat, dan setiap detiknya ① memiliki bobot yang padat.

(dipersingkat)

Orang tua yang memandang sesuatu dengan bengong bukan karena tidak ada kerjaan, melainkan karena terlalu banyak yang teringat sehingga sibuk. Bukankah itulah sebabnya waktu terasa cepat berlalu?

Waktu muda, saya selalu kebingungan dengan waktu luang.

Adakah sesuatu yang menarik? Kalau pergi ke suatu tempat, apakah akan menemukan sesuatu?

Saya tidak suka melakukan apa yang disuruh, tetapi juga tidak menemukan hal yang ingin saya lakukan sendiri. Tidak tahu cara mengusir kebosanan, memandang pemandangan pun terasa hampa (catatan 1), dan bahan untuk mengisi waktu terlalu sedikit. Sekarang, ② jika disuruh kembali ke usia itu, saya akan langsung menolak.

Waktu muda kita bingung karena tidak bisa melihat masa depan.

Tidak tahu seberapa besar kemampuan diri, tidak tahu masa depan seperti apa yang terbuka. Meski mencoba menghibur diri dengan menyebut ketidakpastian masa depan sebagai mimpi, samar-samar kita merasa mimpi itu hampa. Mana mau saya kembali lagi ke masa seperti itu (catatan 2).

Mimpi hancur dan menjadi kenyataan, dan setelah berulang kali begitu, hidup terisi hanya dengan kenyataan; itulah tak lain yang disebut bertambah tua. Betapa tidak perlu melihat mimpi yang tidak pasti membawa ketenangan (catatan 3) bagi hati, tidak akan dipahami sebelum menjadi tua.
(Catatan 1) 空虚だ: hampa
(Catatan 2) 二度と戻ってたまるものか: sama sekali tidak ingin kembali
(Catatan 3) 平安: ketenteraman`,
    },

    // ── 問題10：日本の森の生態系と生物多様性 ──
    "10": {
      yomi: `{日本|にほん}の{森|もり}の{生態系|せいたいけい}は、{生物|せいぶつ}{多様性|たようせい}が{高|たか}いといわれています。{生物|せいぶつ}{多様性|たようせい}が{高|たか}いのは、{多|おお}くの{生物|せいぶつ}の{生息|せいそく}（{注|ちゅう}1）{域|いき}になりうる{多様|たよう}な{環境|かんきょう}があるからです。では、なぜ、{多様|たよう}な{環境|かんきょう}があるかというと、{人間|にんげん}が{自然|しぜん}に{長期的|ちょうきてき}、{継続的|けいぞくてき}に{介入|かいにゅう}してきたということが{大|おお}きく{関係|かんけい}しています。

{人間|にんげん}がいない{状態|じょうたい}で、{自然|しぜん}が、{自然|しぜん}の{作用|さよう}（{注|ちゅう}2）のなすがままに{置|お}かれていた{時代|じだい}の{植生|しょくせい}（{注|ちゅう}3）を「{原植生|げんしょくせい}」と{呼|よ}んでいます。この{時代|じだい}、{日本|にほん}{列島|れっとう}は{現在|げんざい}の{状態|じょうたい}よりも{生物|せいぶつ}の{生息|せいそく}{環境|かんきょう}として{単純|たんじゅん}なものであったはずで、そこに{生息|せいそく}する{生物|せいぶつ}の{多様性|たようせい}は{現在|げんざい}よりも{低|ひく}かったのではないかと{私|わたし}は{考|かんが}えています。

これまで、{人間|にんげん}は、{人間|にんげん}の{都合|つごう}で、{自然|しぜん}を{改変|かいへん}してきました。しかし{最近|さいきん}になって、{多|おお}くの{人|ひと}が{都市|とし}に{集中|しゅうちゅう}して{住|す}むようになり、{食料|しょくりょう}も{木材|もくざい}もエネルギーも{海外|かいがい}から{輸送|ゆそう}してくるようになって、これまでのように{自然|しぜん}に{長期的|ちょうきてき}、{継続的|けいぞくてき}に{介入|かいにゅう}する{必要|ひつよう}がなくなりました。

{人間|にんげん}の{介入|かいにゅう}が{止|と}まった{森|もり}は、{自然|しぜん}の{作用|さよう}によって{変化|へんか}していきます。そのまま{放|ほう}っておけば、{人間|にんげん}がいなかった{時代|じだい}の{自然|しぜん}に{戻|もど}るかというと、そう{簡単|かんたん}ではありません。{人間|にんげん}の{介入|かいにゅう}は{土壌|どじょう}の{奥深|おくふか}くまで{及|およ}んでいます。{植生|しょくせい}の{回復|かいふく}に{比|くら}べて、{土壌|どじょう}の{回復|かいふく}には{長|なが}い{時間|じかん}がかかるので、まずは{土壌|どじょう}が{回復|かいふく}しない{状態|じょうたい}で、その{上|うえ}に{植生|しょくせい}が{成立|せいりつ}することになります。この{状態|じょうたい}を「{潜在|せんざい}{自然|しぜん}{植生|しょくせい}」といい、{原植生|げんしょくせい}とは{区別|くべつ}されます。

（{中略|ちゅうりゃく}）

{現在|げんざい}の{日本|にほん}の{生物|せいぶつ}{多様性|たようせい}は、{人間|にんげん}による{自然|しぜん}への{長期的|ちょうきてき}、{継続的|けいぞくてき}な{介入|かいにゅう}の{結果|けっか}としてもたらされたものです。その{介入|かいにゅう}は、{決|けっ}して{生物|せいぶつ}{多様性|たようせい}のためではなく、{人間|にんげん}が{生|い}きていくために{燃料|ねんりょう}、{木材|もくざい}その{他|た}を{収奪|しゅうだつ}する（{注|ちゅう}4）ためだったのです。もし{現在|げんざい}の{状態|じょうたい}が、{生物|せいぶつ}{多様性|たようせい}が{高|たか}い{状態|じょうたい}だとすれば、それはあくまで{副産物|ふくさんぶつ}として{得|え}られたものなのです。

{今後|こんご}、{生物|せいぶつ}{多様性|たようせい}の{維持|いじ}のために、{自然|しぜん}に{人間|にんげん}が{介入|かいにゅう}し{続|つづ}けるべきだ、という{主張|しゅちょう}があります。しかし{問題|もんだい}は、そのための{資金|しきん}を{誰|だれ}が{出|だ}すかです。とくに、{公的|こうてき}な{資金|しきん}を{投入|とうにゅう}するかどうかは、よく{考|かんが}えてからのほうがいいと{思|おも}います。

{自然|しぜん}が、{自然|しぜん}の{作用|さよう}によって{変化|へんか}していくのに{逆|さか}らって、{人間|にんげん}が{作業|さぎょう}をしようとすると、{膨大|ぼうだい}な{手間|てま}と{時間|じかん}がかかります。その{手間|てま}に{見合|みあ}う{利益|りえき}が、{人間|にんげん}にもたらされるのか、また、{放置|ほうち}して{自然|しぜん}の{作用|さよう}に{任|まか}せておくことが、{人間|にんげん}や{生物|せいぶつ}にどのような{損失|そんしつ}をもたらすのか、{正確|せいかく}に{理解|りかい}することが{求|もと}められています。
（{注|ちゅう}1）{生息|せいそく}：{生存|せいぞん}
（{注|ちゅう}2）{作用|さよう}のなすがままに：ここでは、{作用|さよう}のままに
（{注|ちゅう}3）{植生|しょくせい}：ここでは、{植物|しょくぶつ}{群|ぐん}の{状態|じょうたい}
（{注|ちゅう}4）{収奪|しゅうだつ}する：{奪|うば}い{取|と}る`,
      arti: `Ekosistem hutan Jepang dikatakan memiliki keanekaragaman hayati yang tinggi. Keanekaragaman hayati tinggi karena ada lingkungan beragam yang bisa menjadi habitat (catatan 1) banyak makhluk hidup. Lalu mengapa ada lingkungan yang beragam? Hal itu sangat berkaitan dengan campur tangan manusia terhadap alam secara jangka panjang dan berkelanjutan.

Vegetasi (catatan 3) pada zaman ketika alam dibiarkan begitu saja mengikuti kerja alam (catatan 2) tanpa manusia disebut "vegetasi asli". Pada zaman itu, kepulauan Jepang seharusnya lebih sederhana sebagai lingkungan habitat makhluk hidup dibanding sekarang, dan saya berpendapat keanekaragaman makhluk hidup yang tinggal di sana lebih rendah daripada sekarang.

Selama ini manusia mengubah alam demi kepentingan manusia. Namun belakangan, banyak orang tinggal terpusat di kota, dan makanan, kayu, maupun energi diangkut dari luar negeri, sehingga tidak perlu lagi campur tangan terhadap alam secara jangka panjang dan berkelanjutan seperti dulu.

Hutan yang tidak lagi dicampuri manusia berubah karena kerja alam. Apakah kalau dibiarkan begitu saja akan kembali ke alam zaman tanpa manusia? Tidak semudah itu. Campur tangan manusia sudah meresap sampai jauh ke dalam tanah. Dibanding pemulihan vegetasi, pemulihan tanah memakan waktu lama, sehingga mula-mula vegetasi terbentuk di atas tanah yang belum pulih. Keadaan ini disebut "vegetasi alami potensial", dan dibedakan dari vegetasi asli.

(dipersingkat)

Keanekaragaman hayati Jepang saat ini adalah hasil campur tangan manusia terhadap alam secara jangka panjang dan berkelanjutan. Campur tangan itu sama sekali bukan untuk keanekaragaman hayati, melainkan untuk merampas (catatan 4) bahan bakar, kayu, dan lain-lain agar manusia bisa hidup. Jika keadaan sekarang adalah keadaan dengan keanekaragaman hayati tinggi, itu semata-mata didapat sebagai produk sampingan.

Ada pendapat bahwa ke depan manusia harus terus campur tangan terhadap alam demi mempertahankan keanekaragaman hayati. Namun masalahnya, siapa yang mengeluarkan dana untuk itu. Terutama, apakah dana publik akan dikucurkan sebaiknya dipikirkan baik-baik terlebih dahulu.

Jika manusia berusaha bekerja melawan perubahan alam karena kerja alam, diperlukan tenaga dan waktu yang sangat besar. Dituntut pemahaman yang tepat: apakah keuntungan yang sepadan dengan tenaga itu akan didapat manusia, dan kerugian apa yang ditimbulkan bagi manusia dan makhluk hidup jika dibiarkan mengikuti kerja alam.
(Catatan 1) 生息: hidup, bertahan hidup
(Catatan 2) 作用のなすがままに: di sini, mengikuti kerjanya begitu saja
(Catatan 3) 植生: di sini, keadaan kelompok tumbuhan
(Catatan 4) 収奪する: merampas`,
    },

    // ── 問題11：苦手の克服 ──
    "11": {
      yomi: `【{意見|いけん} A】
{苦手|にがて}を{克服|こくふく}しようとする{努力|どりょく}は{貴重|きちょう}です。しかし、{人|ひと}には{向|む}き{不向|ふむ}きがあるのも{事実|じじつ}。{苦手|にがて}を{克服|こくふく}するまで{好|す}きなことをやってはならないとすれば、{誰|だれ}だって{自分|じぶん}らしさを{見失|みうしな}ってしまいます。

そう{考|かんが}えれば、できないことを{無理|むり}に{克服|こくふく}する{必要|ひつよう}はないと{考|かんが}えてもいいのではないでしょうか。{不得手|ふえて}な{部分|ぶぶん}は{得意|とくい}な{人|ひと}に{助|たす}けてもらえばいいのです。

{落|お}ちこぼれだったエジソンは、{自分|じぶん}の{知識|ちしき}の{足|た}りない{部分|ぶぶん}を{補|おぎな}うために、{優秀|ゆうしゅう}な{科学者|かがくしゃ}や{技術者|ぎじゅつしゃ}を{雇|やと}いました。{自分|じぶん}の{弱|よわ}みを{知|し}っていたからこそ、エジソンはそれを{埋|う}め{合|あ}わせる{方法|ほうほう}を{考|かんが}え、{千|せん}にも{及|およ}ぶ{発明|はつめい}を{実現|じつげん}できたのです。

{弱|よわ}みがわかれば{弱|よわ}みを「{避|さ}ける」という{選択|せんたく}ができます。それは{弱|よわ}みから「{逃|に}げる」という{意味|いみ}ではありません。{失敗|しっぱい}の{要因|よういん}を{避|さ}けて、{事前|じぜん}に{適切|てきせつ}な{対処|たいしょ}をする{工夫|くふう}ができるようになるという{意味|いみ}です。

{困難|こんなん}から{逃|に}げてばかりいては{何事|なにごと}も{成|な}し{遂|と}げられませんが、{困難|こんなん}を{避|さ}けるために{行|おこな}う{試行錯誤|しこうさくご}は{成功|せいこう}を{導|みちび}く{大|おお}きな{戦略|せんりゃく}です。

【{意見|いけん} B】
あなたは「{苦手|にがて}なことは{何|なん}とかして{乗|の}り{越|こ}えなければ。」と{自分|じぶん}{自身|じしん}を{必要|ひつよう}{以上|いじょう}に{追|お}い{込|こ}んではいないだろうか。もちろん、{自身|じしん}の{欠点|けってん}や{弱点|じゃくてん}はすなおに{認|みと}めて{謙虚|けんきょ}にならなければならない。しかしそれらは{努力|どりょく}で{簡単|かんたん}に{克服|こくふく}できることばかりではない。{克服|こくふく}できないからといってコンプレックスを{抱|かか}え{続|つづ}けるよりも、{得意|とくい}なことを{生|い}かすことを{考|かんが}えてみてはどうだろうか。

{特|とく}に{仕事|しごと}の{場合|ばあい}は、さまざまな{職種|しょくしゅ}や{職場|しょくば}があるので、{自身|じしん}に{合|あ}ったものを{選|えら}ぶことが{可能|かのう}だ。{得意|とくい}なことを{生|い}かせる{環境|かんきょう}を{見付|みつ}けることで、{自信|じしん}を{持|も}って{生|い}き{生|い}きと{働|はたら}くことができるだろう。`,
      arti: `[Pendapat A]
Usaha untuk mengatasi kelemahan itu berharga. Namun, memang benar setiap orang punya kecocokan dan ketidakcocokan. Jika tidak boleh melakukan hal yang disukai sampai kelemahan teratasi, siapa pun akan kehilangan jati dirinya.

Kalau dipikir begitu, bukankah boleh saja berpikir bahwa tidak perlu memaksakan diri mengatasi hal yang tidak bisa? Bagian yang tidak dikuasai cukup dibantu oleh orang yang menguasainya.

Edison, yang dulu murid tertinggal, mempekerjakan ilmuwan dan teknisi yang unggul untuk menutupi kekurangan pengetahuannya. Justru karena mengetahui kelemahannya, Edison memikirkan cara menutupinya dan bisa mewujudkan sampai seribu penemuan.

Jika mengetahui kelemahan, kita bisa memilih untuk "menghindari" kelemahan. Itu bukan berarti "lari" dari kelemahan. Artinya, kita bisa menghindari faktor penyebab kegagalan dan mengupayakan penanganan yang tepat sebelumnya.

Kalau terus lari dari kesulitan, kita tidak akan mencapai apa pun, tetapi percobaan yang dilakukan untuk menghindari kesulitan adalah strategi besar menuju keberhasilan.

[Pendapat B]
Apakah Anda menekan diri sendiri melebihi batas dengan berpikir "hal yang tidak kukuasai harus entah bagaimana kuatasi"? Tentu saja, kita harus jujur mengakui kekurangan dan kelemahan diri serta bersikap rendah hati. Tetapi tidak semuanya bisa diatasi dengan mudah lewat usaha. Daripada terus memendam rasa rendah diri karena tidak bisa mengatasinya, bagaimana kalau memikirkan cara memanfaatkan hal yang dikuasai?

Terutama dalam pekerjaan, karena ada berbagai jenis pekerjaan dan tempat kerja, kita bisa memilih yang cocok dengan diri sendiri. Dengan menemukan lingkungan yang bisa memanfaatkan keahlian, kita bisa bekerja dengan percaya diri dan bersemangat.`,
    },

    // ── 問題12：消費社会とモノの価値 ──
    "12": {
      yomi: `{人間|にんげん}はおかしなもので、{自分|じぶん}が{苦労|くろう}して{作|つく}ったり、{特定|とくてい}の{誰|だれ}かが{自分|じぶん}のために{作|つく}ってくれたと{思|おも}うと、より{深|ふか}い{満足感|まんぞくかん}を{覚|おぼ}えるものらしい。それは{恋人|こいびと}が{編|あ}んでくれたセーターをプレゼントされた{時|とき}のことを{思|おも}えば、{容易|ようい}に{想像|そうぞう}できよう。モノにではなく、そこに{込|こ}められた「{思|おも}い」こそが{人|ひと}を{満足|まんぞく}させ、{幸福|こうふく}にするのである。

だとすると「{労働|ろうどう}や{生産|せいさん}」を{家庭|かてい}から{切|き}り{離|はな}すことで{成立|せいりつ}する{大量|たいりょう}{生産|せいさん}・{大量|たいりょう}{消費|しょうひ}システムの{進展|しんてん}は、{身|み}の{周|まわ}りからそうした「{思|おも}い」や「かけがえ（{注|ちゅう}1）のなさ」を{消|け}し{去|さ}っていく{過程|かてい}だったと{言|い}えなくもない。

かつて{何|なん}でも{手作|てづく}りしていた{時代|じだい}には、{身|み}の{周|まわ}りに{手作|てづく}りのモノやサービスがあふれていたため、{金銭|きんせん}を{払|はら}って{得|え}る{商品|しょうひん}やサービスにそんな「{思|おも}い」や「かけがえのなさ」を{要求|ようきゅう}する{必要|ひつよう}もなかった。{人々|ひとびと}が{商品|しょうひん}に{求|もと}めたのは{単|たん}に{機能|きのう}と{安|やす}さだった。だからこそ、{均質|きんしつ}な{機能|きのう}を{持|も}つ{商品|しょうひん}を{安|やす}く{供給|きょうきゅう}できる{大量|たいりょう}{生産|せいさん}が{有効|ゆうこう}だったのである。

しかし、ある{程度|ていど}{商品|しょうひん}が{行|い}き{渡|わた}ると①{事情|じじょう}は{違|ちが}ってくる。{人間|にんげん}は{持|も}たざる{時|とき}には{人並|ひとな}みを{求|もと}めるが、ひとたび{人並|ひとな}みになるや、{今度|こんど}は{人|ひと}との{違|ちが}いを{求|もと}めだし、{人|ひと}と{同|おな}じ{商品|しょうひん}では{満足|まんぞく}できなくなるからだ。この{隘路|あいろ}（{注|ちゅう}2）を{現代|げんだい}の{資本|しほん}{主義|しゅぎ}はデザインによってモード（{流行|りゅうこう}）を{作|つく}りだしたり、{特定|とくてい}の{商品|しょうひん}を{持|も}つことが{社会的|しゃかいてき}{地位|ちい}の{象徴|しょうちょう}であるかのように{思|おも}わせることで{切|き}り{抜|ぬ}けてきた。

{頻繁|ひんぱん}に{繰|く}り{返|かえ}される{自動車|じどうしゃ}のモデルチェンジや、{去年|きょねん}{買|か}った{服|ふく}を{今年|ことし}{着|き}るのが{恥|は}ずかしいくらいに{目|め}まぐるしく{変|か}わる{流行|りゅうこう}のファッション。{機能的|きのうてき}には{軽|けい}{自動車|じどうしゃ}で{十分|じゅうぶん}であるにもかかわらず、{乗|の}っている{自動車|じどうしゃ}の{大|おお}きさや{豪華|ごうか}さによって{自分|じぶん}の{価値|かち}が{判断|はんだん}されるような{気|き}がして、より{高級|こうきゅう}な{車|くるま}を{買|か}いたくなるのもそのためだろう。

（{中略|ちゅうりゃく}）

ただ、モノによって{自分|じぶん}を{他|た}と{差別化|さべつか}するというこのやり{方|かた}は、②{深刻|しんこく}な{矛盾|むじゅん}に{陥|おちい}らざるをえない。つまり、{社会|しゃかい}に{流布|るふ}された{豊|ゆた}かさや{幸福|こうふく}のモデルに{自分|じぶん}を{合|あ}わせることで{個|こ}を{主張|しゅちょう}するわけだから、{自分|じぶん}を{個性化|こせいか}しようとすればするほど{本当|ほんとう}の{自分|じぶん}の{色|いろ}を{消|け}し{去|さ}り、{逆|ぎゃく}に{没|ぼつ}{個性化|こせいか}していくという{矛盾|むじゅん}である。

{消費財|しょうひざい}がほぼ{万人|ばんにん}に{行|い}き{渡|わた}り、しかも{所得|しょとく}の{大|おお}きな{格差|かくさ}も{無|な}くなって、モノによって{自分|じぶん}を{他者|たしゃ}と{差別化|さべつか}することが{困難|こんなん}になりつつある{現在|げんざい}、この{矛盾|むじゅん}はこれまでになく{鮮明|せんめい}になってきている。もう{買|か}いたいモノがないという{現状|げんじょう}は、その{端的|たんてき}な{現|あらわ}れだろう。こうした{消費|しょうひ}{社会|しゃかい}の{矛盾|むじゅん}を{自覚|じかく}した{時|とき}に{人|ひと}が{立|た}ち{戻|もど}る{場所|ばしょ}は、やはり「{思|おも}い」とか「かけがえのなさ」しかないような{気|き}がする。

{記号|きごう}と{化|か}したモノに{人|ひと}が{操|あやつ}られている{現状|げんじょう}を{脱|だっ}し、{人|ひと}がモノを{使|つか}う{本来|ほんらい}の{姿|すがた}に{戻|もど}るためにも、{満足感|まんぞくかん}や{幸福感|こうふくかん}は{何|なに}によってもたらされるのか、{今|いま}{一度|いちど}{考|かんが}える{必要|ひつよう}があるのではないか。
（{注|ちゅう}1）かけがえのなさ：{他|ほか}に{代|か}わりがないほど{貴重|きちょう}であること
（{注|ちゅう}2）{隘路|あいろ}：ここでは、{難|むずか}しい{状況|じょうきょう}`,
      arti: `Manusia itu aneh; ketika berpikir bahwa sesuatu dibuat dengan susah payah oleh dirinya sendiri, atau dibuat oleh seseorang tertentu khusus untuknya, ia tampaknya merasakan kepuasan yang lebih dalam. Hal itu mudah dibayangkan jika mengingat saat diberi hadiah sweter rajutan kekasih. Bukan barangnya, melainkan "perasaan" yang tertanam di dalamnyalah yang membuat orang puas dan bahagia.

Kalau begitu, bisa dikatakan bahwa perkembangan sistem produksi massal dan konsumsi massal, yang terbentuk dengan memisahkan "kerja dan produksi" dari rumah tangga, adalah proses menghapus "perasaan" dan "ketakterganti-an" (catatan 1) seperti itu dari sekitar kita.

Dulu, di zaman ketika apa saja dibuat sendiri, di sekitar kita melimpah barang dan jasa buatan tangan, jadi tidak perlu menuntut "perasaan" atau "ketakterganti-an" seperti itu dari barang dan jasa yang didapat dengan membayar uang. Yang dicari orang dari barang hanyalah fungsi dan harga murah. Justru karena itu, produksi massal yang bisa memasok barang dengan fungsi seragam secara murah menjadi efektif.

Namun, begitu barang sudah tersebar sampai batas tertentu, ① keadaannya menjadi berbeda. Sebab manusia, ketika belum punya, mencari yang setara dengan orang lain, tetapi begitu sudah setara, kini ia mulai mencari perbedaan dengan orang lain dan tidak puas dengan barang yang sama dengan orang lain. Kapitalisme modern melewati jalan buntu (catatan 2) ini dengan menciptakan mode (tren) lewat desain, dan membuat orang merasa memiliki barang tertentu adalah lambang status sosial.

Pergantian model mobil yang sering berulang, dan mode pakaian yang berubah begitu cepat sampai malu memakai baju yang dibeli tahun lalu tahun ini. Meski secara fungsi mobil kecil sudah cukup, orang merasa nilainya dinilai dari besar dan mewahnya mobil yang dikendarai, sehingga ingin membeli mobil yang lebih mewah; mungkin itu pula sebabnya.

(dipersingkat)

Namun, cara membedakan diri dari orang lain lewat barang ini mau tak mau jatuh ke dalam ② kontradiksi yang serius. Artinya, karena kita menegaskan individualitas dengan menyesuaikan diri pada model kemakmuran dan kebahagiaan yang tersebar di masyarakat, makin berusaha menjadi unik, makin terhapus warna diri yang sebenarnya, dan sebaliknya malah kehilangan keunikan; itulah kontradiksinya.

Saat ini, ketika barang konsumsi sudah tersebar ke hampir semua orang, dan kesenjangan pendapatan yang besar pun hilang, sehingga membedakan diri dari orang lain lewat barang makin sulit, kontradiksi ini menjadi lebih jelas dari sebelumnya. Keadaan sekarang di mana sudah tidak ada barang yang ingin dibeli adalah wujud nyatanya. Rasanya, ketika menyadari kontradiksi masyarakat konsumsi seperti ini, tempat orang kembali memang hanya "perasaan" dan "ketakterganti-an".

Agar lepas dari keadaan sekarang di mana manusia dikendalikan barang yang telah menjadi simbol, dan kembali ke wujud semestinya di mana manusia yang memakai barang, bukankah kita perlu sekali lagi memikirkan apa yang sebenarnya membawa rasa puas dan rasa bahagia?
(Catatan 1) かけがえのなさ: begitu berharga sehingga tidak tergantikan
(Catatan 2) 隘路: di sini, situasi sulit`,
    },

    // ── 問題13：中橋自然の宿 ──
    "13": {
      yomi: `{中橋区|なかはしく}　{区民|くみん}{施設|しせつ}
{中橋|なかはし}{自然|しぜん}の{宿|やど}　{利用|りよう}のご{案内|あんない}
{大木山|おおきやま}のふもとにある「{中橋|なかはし}{自然|しぜん}の{宿|やど}」は{自然|しぜん}の{中|なか}で{過|す}ごすことを{目的|もくてき}に{作|つく}られた{宿泊|しゅくはく}{施設|しせつ}です。

【{利用|りよう}{料金表|りょうきんひょう}（{税込|ぜいこみ}）】1{名|めい}の{利用|りよう}{料金|りょうきん}（1{泊|ぱく}2{食|しょく}{付|つ}き）
　　　　　　　　　　　　　　　　　　　　　　　{大人|おとな}（18{歳|さい}{以上|いじょう}）　{子|こ}ども（4〜17{歳|さい}）
{区民|くみん}{料金|りょうきん}　　　{区民|くみん}※の{方|かた}　　　　　　　　　　　5300{円|えん}　　　　　　3300{円|えん}
{区民|くみん}{以外|いがい}の{方|かた}の{料金|りょうきん}　{区民|くみん}※ではないが{区民|くみん}※と{一緒|いっしょ}にご{利用|りよう}の{方|かた}　6000{円|えん}　3800{円|えん}
　　　　　　　{区民|くみん}※ではない{方|かた}　　　　　　　　7300{円|えん}　　　　　　4300{円|えん}
・3{歳|さい}{以下|いか}は{無料|むりょう}です。（{食事|しょくじ}が{必要|ひつよう}な{場合|ばあい}は2{食|しょく}1,000{円|えん}になります。）

【{申|もう}し{込|こ}み{方法|ほうほう}】{電話|でんわ}、ファクス、インターネットでお{申|もう}し{込|こ}みいただけます。

＜{申|もう}し{込|こ}み{受|う}け{付|つ}け{期間|きかん}＞
{区民|くみん}※の{方|かた}：{利用|りよう}{月|づき}の6か{月|げつ}{前|まえ}の{1日|ついたち}から、{宿泊|しゅくはく}{希望|きぼう}{日|び}の1{週間|しゅうかん}{前|まえ}まで
（{例|れい}：10{月|がつ}{1日|ついたち}の{宿泊|しゅくはく}を{希望|きぼう}の{場合|ばあい}、4{月|がつ}{1日|ついたち}から9{月|がつ}24{日|か}まで）
{区民|くみん}※{以外|いがい}の{方|かた}：{利用|りよう}{月|づき}の4か{月|げつ}{前|まえ}の{1日|ついたち}から、{宿泊|しゅくはく}{希望|きぼう}{日|び}の1{週間|しゅうかん}{前|まえ}まで
（{例|れい}：10{月|がつ}{1日|ついたち}の{宿泊|しゅくはく}を{希望|きぼう}の{場合|ばあい}、6{月|がつ}{1日|ついたち}から9{月|がつ}24{日|か}まで）

{申|もう}し{込|こ}みの{際|さい}には、①{代表者|だいひょうしゃ}の{住所|じゅうしょ}、{氏名|しめい}、{電話|でんわ}{番号|ばんごう}、②{利用|りよう}{人数|にんずう}（{大人|おとな}と{子|こ}どもの{各|かく}{人数|にんずう}、{各|かく}{料金|りょうきん}{区分|くぶん}）、③{希望|きぼう}する{宿泊|しゅくはく}{日|び}、{宿泊|しゅくはく}{日数|にっすう}、④{部屋数|へやかず}の{希望|きぼう}をお{知|し}らせください。

【{料金|りょうきん}の{支払|しはら}い】
ご{宿泊|しゅくはく}{時|じ}にお{支払|しはら}いください。{現金|げんきん}またはクレジットカードでのお{支払|しはら}いが{可能|かのう}です。{区民|くみん}{料金|りょうきん}{適用|てきよう}には、{宿泊|しゅくはく}{時|じ}に、{区民|くみん}※であることを{証明|しょうめい}できるもののご{提示|ていじ}が{必要|ひつよう}です。

※{区民|くみん}は、{以下|いか}のa.〜c.のいずれかに{当|あ}てはまる{方|かた}になります。
a. {中橋区|なかはしく}にお{住|す}まいの{方|かた}
b. {中橋区|なかはしく}にある{会社|かいしゃ}で{仕事|しごと}をしている{方|かた}
c. {中橋区|なかはしく}にある{学校|がっこう}に{通|かよ}っている{方|かた}

{中橋区|なかはしく}{役所|やくしょ}　{施設|しせつ}{課|か}　{自然|しぜん}の{宿|やど}{担当|たんとう}
{電話|でんわ}：015-539-1515　ファクス：015-539-1516
http://www.nakahashi.lg.jp/shizennoyado`,
      arti: `Distrik Nakahashi – Fasilitas untuk warga distrik
Panduan penggunaan Penginapan Alam Nakahashi
"Penginapan Alam Nakahashi" di kaki Gunung Ooki adalah fasilitas penginapan yang dibuat untuk menghabiskan waktu di tengah alam.

[Daftar tarif (termasuk pajak)] Tarif per orang (1 malam dengan 2 kali makan)
— Dewasa (18 tahun ke atas) — Anak (4–17 tahun)
Tarif warga distrik — warga distrik※ — 5.300 yen — 3.300 yen
Tarif bukan warga distrik — bukan warga※ tetapi menginap bersama warga※ — 6.000 yen — 3.800 yen
— bukan warga※ — 7.300 yen — 4.300 yen
- Usia 3 tahun ke bawah gratis. (Jika perlu makan, 2 kali makan 1.000 yen.)

[Cara mendaftar] Pendaftaran bisa lewat telepon, faks, atau internet.

<Masa penerimaan pendaftaran>
Warga distrik※: mulai tanggal 1, enam bulan sebelum bulan pemakaian, sampai satu minggu sebelum tanggal menginap yang diinginkan
(Contoh: jika ingin menginap 1 Oktober, dari 1 April sampai 24 September)
Bukan warga distrik※: mulai tanggal 1, empat bulan sebelum bulan pemakaian, sampai satu minggu sebelum tanggal menginap yang diinginkan
(Contoh: jika ingin menginap 1 Oktober, dari 1 Juni sampai 24 September)

Saat mendaftar, beri tahu kami: ① alamat, nama, dan nomor telepon perwakilan; ② jumlah orang (jumlah dewasa dan anak, serta kategori tarif masing-masing); ③ tanggal dan lama menginap yang diinginkan; ④ jumlah kamar yang diinginkan.

[Pembayaran]
Silakan bayar saat menginap. Bisa dengan uang tunai atau kartu kredit. Untuk mendapat tarif warga distrik, saat menginap perlu menunjukkan bukti bahwa Anda warga distrik※.

※ Warga distrik adalah orang yang memenuhi salah satu dari a.–c. berikut.
a. Orang yang tinggal di Distrik Nakahashi
b. Orang yang bekerja di perusahaan di Distrik Nakahashi
c. Orang yang bersekolah di sekolah di Distrik Nakahashi

Kantor Distrik Nakahashi, Bagian Fasilitas, penanggung jawab Penginapan Alam
Telepon: 015-539-1515, Faks: 015-539-1516
http://www.nakahashi.lg.jp/shizennoyado`,
    },
  },
};
