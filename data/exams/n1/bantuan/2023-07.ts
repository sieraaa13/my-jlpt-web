import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Juli 2023
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_2307: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{思|おも}わぬ{出来事|できごと}に、{辺|あた}りは【{騒然|そうぜん}】としていた。",
      arti: "Karena kejadian tak terduga, sekitarnya menjadi 【gempar/riuh】.",
    },
    2: {
      yomi: "{西村|にしむら}さんは、いたずらした{子|こ}どもを{優|やさ}しく【{諭|さと}した】。",
      arti: "Nishimura dengan lembut 【menasihati】 anak yang berbuat iseng itu.",
      optArti: ["menasihati, menyadarkan (諭す)", "menimang, menenangkan bayi (あやす)", "mengoreksi, meluruskan (正す)", "menyembuhkan, menghibur (癒す)"],
    },
    3: {
      yomi: "{社会|しゃかい}{生活|せいかつ}を{送|おく}るうえで、【{秩序|ちつじょ}】を{守|まも}ることは{重要|じゅうよう}だ。",
      arti: "Dalam menjalani kehidupan bermasyarakat, menjaga 【ketertiban】 itu penting.",
    },
    4: {
      yomi: "この{辺|あた}りは{犯人|はんにん}が【{潜伏|せんぷく}】しているという{情報|じょうほう}が{入|はい}った。",
      arti: "Masuk informasi bahwa pelaku sedang 【bersembunyi】 di sekitar sini.",
    },
    5: {
      yomi: "アナウンサーの【{朗|ほが}らか】な{声|こえ}が{響|ひび}いた。",
      arti: "Suara 【ceria/riang】 penyiar itu bergema.",
      optArti: ["jernih, suci (清らか)", "ceria, riang (朗らか)", "lembut, empuk (柔らか)", "halus, licin (滑らか)"],
    },
    6: {
      yomi: "{新|あたら}しい{市長|しちょう}は{地域|ちいき}{文化|ぶんか}の【{振興|しんこう}】に{力|ちから}を{入|い}れている。",
      arti: "Wali kota yang baru berupaya keras dalam 【memajukan/menggalakkan】 budaya daerah.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{今|いま}は{両親|りょうしん}と{暮|く}らしているが、{卒業|そつぎょう}して{就職|しゅうしょく}したら、{家|いえ}を{出|で}て（　）したいと{思|おも}っている。",
      arti: "Sekarang saya tinggal bersama orang tua, tetapi setelah lulus dan bekerja saya ingin keluar dari rumah dan (…).",
      optYomi: ["{自制|じせい}", "{自立|じりつ}", "{自重|じちょう}", "{自任|じにん}"],
      optArti: ["menahan diri, mengendalikan diri", "mandiri", "berhati-hati, menjaga diri", "menganggap diri (sebagai)"],
    },
    8: {
      yomi: "この{企業|きぎょう}は、{売|う}り{上|あ}げの{一部|いちぶ}を{町|まち}に{寄付|きふ}することで、{町|まち}の{人々|ひとびと}に{利益|りえき}を（　）している。",
      arti: "Perusahaan ini (…) keuntungannya kepada warga kota dengan menyumbangkan sebagian hasil penjualan kepada kota.",
      optYomi: ["{返上|へんじょう}", "{還元|かんげん}", "{配給|はいきゅう}", "{譲渡|じょうと}"],
      optArti: ["mengembalikan, melepaskan (gelar, hak)", "mengembalikan (keuntungan kepada masyarakat)", "membagikan jatah (ransum)", "mengalihkan (hak milik)"],
    },
    9: {
      yomi: "{今日|きょう}は{朝|あさ}から{空|そら}が（　）と{曇|くも}っていて、{今|いま}にも{雨|あめ}が{降|ふ}り{出|だ}しそうだ。",
      arti: "Hari ini sejak pagi langit mendung (…), sepertinya hujan akan segera turun.",
      optArti: ["basah kuyup", "banyak sekali (bertumpuk)", "kelabu, muram (langit mendung tebal)", "lemas, lunglai"],
    },
    10: {
      yomi: "この{生産|せいさん}{管理|かんり}システムは、{維持費|いじひ}の{高|たか}さが（　）になってなかなか{普及|ふきゅう}しない。",
      arti: "Sistem manajemen produksi ini sulit tersebar luas karena tingginya biaya perawatan menjadi (…).",
      optArti: ["noise, gangguan", "kunci, penguncian (lock)", "tabu", "hambatan, titik lemah (bottleneck)"],
    },
    11: {
      yomi: "{大|おお}きな{声|こえ}で{歌|うた}うと、ストレスの（　）になって{気分|きぶん}がすっきりする。",
      arti: "Kalau bernyanyi dengan suara keras, itu menjadi (…) stres sehingga perasaan menjadi lega.",
      optYomi: ["{発散|はっさん}", "{発射|はっしゃ}", "{流出|りゅうしゅつ}", "{排出|はいしゅつ}"],
      optArti: ["pelepasan, pelampiasan (stres, energi)", "penembakan, peluncuran", "kebocoran, arus keluar", "pembuangan, emisi"],
    },
    12: {
      yomi: "この{二|ふた}つの{漢字|かんじ}はよく{似|に}ていて（　）ので、{読|よ}み{間違|まちが}えることがある。",
      arti: "Kedua kanji ini sangat mirip dan (…), sehingga kadang salah dibaca.",
      optArti: ["membingungkan, mudah tertukar", "tampak masuk akal", "tidak tahu malu", "terlalu akrab, sok akrab"],
    },
    13: {
      yomi: "この{店|みせ}は{細|こま}かいところまで{掃除|そうじ}が（　）いて、{清潔|せいけつ}だ。",
      arti: "Toko ini bersih karena kebersihannya (…) sampai ke bagian-bagian kecil.",
      optYomi: ["{行|い}き{詰|づ}まって", "{行|い}き{交|か}って", "{行|い}き{着|つ}いて", "{行|い}き{届|とど}いて"],
      optArti: ["menemui jalan buntu", "lalu-lalang", "sampai, tiba (di tujuan)", "terjangkau menyeluruh, teliti"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "この{条約|じょうやく}が{締結|ていけつ}されると、{農業|のうぎょう}に{影響|えいきょう}が{出|で}ることが【{懸念|けねん}】される。",
      arti: "Jika perjanjian ini disepakati, 【dikhawatirkan】 akan ada dampak terhadap pertanian.",
      optYomi: ["{期待|きたい}", "{心配|しんぱい}", "{予想|よそう}", "{重視|じゅうし}"],
      optArti: ["harapan", "kekhawatiran", "perkiraan", "penekanan, menganggap penting"],
    },
    15: {
      yomi: "{久|ひさ}しぶりに{会|あ}った{友人|ゆうじん}は、{何|なん}だか【やつれて】いるようだった。",
      arti: "Teman yang lama tidak saya temui itu entah kenapa tampak 【kurus dan lesu】.",
      optYomi: ["{遠慮|えんりょ}して", "{張|は}り{切|き}って", "やせ{衰|おとろ}えて", "{感動|かんどう}して"],
      optArti: ["sungkan, menahan diri", "bersemangat", "kurus dan lemah", "terharu"],
    },
    16: {
      yomi: "{彼|かれ}が【{奮闘|ふんとう}】している{姿|すがた}を{見|み}て、{力|ちから}を{貸|か}そうと{思|おも}った。",
      arti: "Melihat sosoknya yang sedang 【berjuang keras】, saya ingin membantunya.",
      optYomi: ["じっと{我慢|がまん}して", "{必死|ひっし}に{頑張|がんば}って", "{激|はげ}しく{怒|おこ}って", "{焦|あせ}って{取|と}り{組|く}んで"],
      optArti: ["diam-diam menahan diri", "berusaha mati-matian", "marah besar", "mengerjakan dengan tergesa-gesa"],
    },
    17: {
      yomi: "あれは【{不慮|ふりょ}】の{事故|じこ}だったとしか{言|い}いようがない。",
      arti: "Itu hanya bisa dikatakan sebagai kecelakaan yang 【tak terduga】.",
      optYomi: [null, null, "{思|おも}いがけない", "{情|なさ}けない"],
      optArti: ["tidak bisa dihindari", "mustahil", "tak terduga", "menyedihkan, memalukan"],
    },
    18: {
      yomi: "{倉庫|そうこ}の{品物|しなもの}を【{根|ね}こそぎ】もっていかれた。",
      arti: "Barang-barang di gudang dibawa 【sampai habis tak bersisa】.",
      optYomi: [null, null, "{一度|いちど}に", "{次々|つぎつぎ}と"],
      optArti: ["semuanya", "cukup banyak", "sekaligus", "satu demi satu"],
    },
    19: {
      yomi: "{若|わか}いころ{私|わたし}は、{商品|しょうひん}{開発|かいはつ}の{仕事|しごと}に【{没頭|ぼっとう}】していた。",
      arti: "Waktu muda saya 【tenggelam/larut】 dalam pekerjaan pengembangan produk.",
      optYomi: ["{飽|あ}きて", "{憧|あこが}れて", "{不満|ふまん}を{持|も}って", "{熱中|ねっちゅう}して"],
      optArti: ["bosan", "mendambakan", "merasa tidak puas", "asyik, larut sepenuhnya"],
    },

    // ── 問題4：用法 ──
    20: {
      yomi: "【{兆|きざ}し】",
      arti: "【兆し】 = tanda-tanda, gejala awal (sesuatu akan terjadi)",
      optYomi: [
        "{来月|らいげつ}は100{万台|まんだい}バイクを{生産|せいさん}する{兆|きざ}しです。",
        "{消費税|しょうひぜい}が{上|あ}がり、{売|う}り{上|あ}げの{兆|きざ}しが{不透明|ふとうめい}だ。",
        "{多|おお}くの{人|ひと}の{兆|きざ}しと{違|ちが}って、Aチームが{優勝|ゆうしょう}した。",
        "{今年|ことし}になっても{景気|けいき}がよくなる{兆|きざ}しが{見|み}られない。",
      ],
      optArti: [
        "Bulan depan 'tanda-tanda'-nya akan memproduksi satu juta unit sepeda motor.",
        "Pajak konsumsi naik, dan 'tanda-tanda' penjualan tidak jelas.",
        "Berbeda dengan 'tanda-tanda' banyak orang, tim A menjadi juara.",
        "Bahkan sudah masuk tahun ini pun, belum terlihat 'tanda-tanda' ekonomi membaik.",
      ],
    },
    21: {
      yomi: "【{収容|しゅうよう}】",
      arti: "【収容】 = menampung (orang, dalam jumlah tertentu)",
      optYomi: [
        "{大|おお}きなかばんに{旅行|りょこう}の{荷物|にもつ}を{全部|ぜんぶ}{収容|しゅうよう}した。",
        "このコンサートホールは5,500{人|にん}の{観客|かんきゃく}を{収容|しゅうよう}することができる。",
        "この{辞書|じしょ}には8{万語|まんご}が{収容|しゅうよう}されている。",
        "ビタミンを{多|おお}く{収容|しゅうよう}する{食品|しょくひん}をたくさん{食|た}べるようにしている。",
      ],
      optArti: [
        "Saya 'menampung' semua barang perjalanan ke dalam tas besar.",
        "Gedung konser ini dapat 'menampung' 5.500 penonton.",
        "Kamus ini 'menampung' 80.000 kata.",
        "Saya berusaha banyak makan makanan yang 'menampung' banyak vitamin.",
      ],
    },
    22: {
      yomi: "【さえる】",
      arti: "【さえる】 = menjadi jernih/segar; (mata) terjaga, tidak bisa tidur",
      optYomi: [
        "{友人|ゆうじん}は{時間|じかん}にさえていて、{遅刻|ちこく}したことは{一度|いちど}もない。",
        "{父|ちち}は{感情|かんじょう}がさえて{顔|かお}に{出|で}るので、{分|わ}かりやすい。",
        "コーヒーを{飲|の}んだら、{目|め}がさえてしまって、{眠|ねむ}れない。",
        "{彼|かれ}の{目標|もくひょう}はさえていて、{一度|いちど}も{変|か}わることはなかった。",
      ],
      optArti: [
        "Teman saya 'jernih' soal waktu, tidak pernah sekali pun terlambat.",
        "Perasaan ayah saya 'jernih' dan tampak di wajahnya, jadi mudah dipahami.",
        "Setelah minum kopi, mata saya jadi 'terjaga', tidak bisa tidur.",
        "Targetnya 'jernih' dan tidak pernah berubah sekali pun.",
      ],
    },
    23: {
      yomi: "【{痛烈|つうれつ}】",
      arti: "【痛烈】 = pedas, tajam, keras (kritik, serangan)",
      optYomi: [
        "その{映画|えいが}は{評論家|ひょうろんか}から{痛烈|つうれつ}な{批判|ひはん}を{受|う}けた。",
        "{彼|かれ}らは{痛烈|つうれつ}な{戦|たたか}いを{勝|か}ち{抜|ぬ}いて{優勝|ゆうしょう}した。",
        "{痛烈|つうれつ}な{環境|かんきょう}でも{育|そだ}つ{作物|さくもつ}を{研究|けんきゅう}している。",
        "{台風|たいふう}のせいで、{痛烈|つうれつ}な{勢|いきお}いの{風|かぜ}が{吹|ふ}いている。",
      ],
      optArti: [
        "Film itu menerima kritik 'pedas' dari para kritikus.",
        "Mereka memenangi pertarungan yang 'pedas' dan menjadi juara.",
        "Kami meneliti tanaman yang bisa tumbuh bahkan di lingkungan yang 'pedas'.",
        "Karena topan, bertiup angin dengan kekuatan yang 'pedas'.",
      ],
    },
    24: {
      yomi: "【{完結|かんけつ}】",
      arti: "【完結】 = tamat, selesai sepenuhnya (cerita, serial, dsb.)",
      optYomi: [
        "{申|もう}し{込|こ}み{期間|きかん}が{完結|かんけつ}する{前|まえ}に、{急|いそ}いで{書類|しょるい}を{出|だ}しに{行|い}った。",
        "{駅前|えきまえ}に{建設中|けんせつちゅう}だったマンションが{完結|かんけつ}し、{入居|にゅうきょ}が{始|はじ}まった。",
        "10{年間|ねんかん}{続|つづ}いた{連載|れんさい}{小説|しょうせつ}が、いよいよ{次回|じかい}で{完結|かんけつ}する。",
        "{充電|じゅうでん}が{完結|かんけつ}するまで、2{時間|じかん}{程度|ていど}かかります。",
      ],
      optArti: [
        "Sebelum masa pendaftaran 'tamat', saya bergegas menyerahkan dokumen.",
        "Apartemen yang sedang dibangun di depan stasiun 'tamat', dan penghuni mulai masuk.",
        "Novel bersambung yang berlangsung 10 tahun akhirnya akan 'tamat' pada edisi berikutnya.",
        "Butuh sekitar 2 jam sampai pengisian daya 'tamat'.",
      ],
    },
    25: {
      yomi: "【もろい】",
      arti: "【もろい】 = rapuh, mudah rusak/hancur",
      optYomi: [
        "ここは{古|ふる}い{住宅|じゅうたく}で、{壁|かべ}がもろくなっているため、{立|た}ち{入|い}り{禁止|きんし}だ。",
        "{以前|いぜん}は{力|ちから}がもろかったので、{毎日|まいにち}トレーニングして、{筋肉|きんにく}をつけた。",
        "{彼|かれ}はまだ{若|わか}く、{仕事|しごと}の{経験|けいけん}ももろいが、やる{気|き}にあふれている。",
        "この{野菜|やさい}はあまり{火|ひ}を{通|とお}しすぎると、{栄養|えいよう}がもろくなってしまう。",
      ],
      optArti: [
        "Ini rumah tua dan dindingnya sudah 'rapuh', jadi dilarang masuk.",
        "Dulu tenaga saya 'rapuh', jadi saya berlatih setiap hari dan membentuk otot.",
        "Ia masih muda dan pengalaman kerjanya pun 'rapuh', tetapi penuh semangat.",
        "Sayuran ini kalau dimasak terlalu lama, nutrisinya jadi 'rapuh'.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{努力|どりょく}して{夢|ゆめ}を{叶|かな}えた{弟|おとうと}のことを{兄|あに}として{誇|ほこ}り（　）{思|おも}う。",
      arti: "Sebagai kakak, saya merasa bangga (…) adik laki-laki saya yang meraih mimpinya dengan kerja keras.",
    },
    27: {
      yomi: "{失敗|しっぱい}は{誰|だれ}でも{避|さ}けたいのだが、{失敗|しっぱい}（　）{学|まな}べないこともある。",
      arti: "Siapa pun ingin menghindari kegagalan, tetapi ada hal yang (…) kegagalan bisa dipelajari.",
    },
    28: {
      yomi: "{合唱|がっしょう}コンクールで{歌|うた}っている{子供|こども}たちの{表情|ひょうじょう}は、（　）そのものだった。",
      arti: "Ekspresi anak-anak yang bernyanyi di lomba paduan suara benar-benar (…).",
      optYomi: ["{真剣|しんけん}", "{真剣|しんけん}で", "{真剣|しんけん}に", "{真剣|しんけん}な"],
    },
    29: {
      yomi: "{同僚|どうりょう}の{山下|やました}さんは、{最初|さいしょ}は{大人|おとな}しい{人|ひと}だと{思|おも}っていたが、{一緒|いっしょ}に{仕事|しごと}を（　）{実|じつ}はよくしゃべる{人|ひと}だということが{分|わ}かってきた。",
      arti: "Awalnya saya kira rekan kerja saya, Yamashita, orang yang pendiam, tetapi (…) bekerja bersama, saya mulai tahu bahwa sebenarnya ia orang yang banyak bicara.",
      optArti: ["selama (melakukan)", "sejauh (melakukan)", "seiring (melakukan)", "seandainya (melakukan)"],
    },
    30: {
      yomi: "{忙|いそが}しく{引|ひ}っ{越|こ}しの{荷造|にづく}りが（　）、{荷造|にづく}りを{全部|ぜんぶ}やってくれるサービスがあると{友人|ゆうじん}が{教|おし}えてくれた。",
      arti: "Karena sibuk, (…) mengemas barang untuk pindahan, lalu teman saya memberi tahu bahwa ada layanan yang mau mengerjakan semua pengemasan.",
      optArti: ["kalau tadinya tidak bisa", "ketika (saya) tidak kunjung bisa", "kalau dibuat supaya tidak bisa", "ketika dibuat supaya tidak bisa"],
    },
    31: {
      yomi: "まだ11{月|がつ}の{初|はじ}めなのに、{昨日|きのう}は{雪|ゆき}が（　）{寒|さむ}かった。",
      arti: "Padahal masih awal November, kemarin dinginnya (…).",
      optYomi: ["{降|ふ}ることがあるかのように", "{降|ふ}るなんて{思|おも}えないぐらい", "{降|ふ}るとは{思|おも}わないように", "{降|ふ}るんじゃないかというぐらい"],
      optArti: ["seolah-olah salju kadang turun", "sampai tak terbayang salju akan turun", "supaya tidak mengira salju akan turun", "sampai-sampai terasa salju akan turun"],
    },
    32: {
      yomi: "いつも{駅|えき}から{大学|だいがく}までバスを{使|つか}っているが、2キロほどなので、{歩|ある}こうと{思|おも}えば（　）。",
      arti: "Saya selalu naik bus dari stasiun ke kampus, tetapi jaraknya hanya sekitar 2 km, jadi kalau mau berjalan pun (…).",
      optYomi: ["{歩|ある}くほかない", "{歩|ある}けなくもない", "{歩|ある}いてはいられない", "{歩|ある}けるわけがない"],
      optArti: ["tidak ada pilihan selain berjalan", "bukannya tidak bisa berjalan", "tidak bisa terus berjalan santai", "mana mungkin bisa berjalan"],
    },
    33: {
      yomi: "{先日|せんじつ}の{第三回|だいさんかい}さくら{市|し}{教育|きょういく}{講演会|こうえんかい}には、{沢山|たくさん}の{方|かた}が（　）。",
      arti: "Pada Ceramah Pendidikan Kota Sakura ke-3 beberapa waktu lalu, banyak orang (…).",
      optYomi: [null, "お{越|こ}しいただきました", "ご{参加|さんか}いただきました", "ご{覧|らん}くださいました"],
      optArti: ["telah berkenan hadir (subjeknya tamu)", "kami telah mendapat kehormatan atas kedatangan (Anda)", "kami telah mendapat kehormatan atas partisipasi (Anda)", "telah berkenan melihat"],
    },
    34: {
      yomi: "この{辺|あた}りの{町並|まちな}みは{外国|がいこく}のような{雰囲気|ふんいき}で、ここを{訪|おとず}れるだけで{海外|かいがい}を{旅行|りょこう}（　）。",
      arti: "Deretan bangunan di sekitar sini bersuasana seperti di luar negeri; hanya dengan berkunjung ke sini saja, (…) bepergian ke luar negeri.",
      optArti: ["berniat (melakukan)", "berniat (melakukan lalu kembali)", "bisa merasa seolah-olah sudah", "tadinya sudah berniat"],
    },
    35: {
      yomi: "（{図書館|としょかん}で）{娘|むすめ}：「{図書館|としょかん}っていいね。だって、{自分|じぶん}で{買|か}わなくてもこんなにたくさんの{本|ほん}が（　）。」{母|はは}：「そうだね。」",
      arti: "(Di perpustakaan) Anak perempuan: \"Perpustakaan itu enak ya. Soalnya, walaupun tidak beli sendiri, sebanyak ini buku (…).\" Ibu: \"Iya, ya.\"",
      optYomi: ["{読|よ}めるんだもん", "{読|よ}めるもんか", "{読|よ}みたいんだもん", "{読|よ}みたいもんか"],
      optArti: ["kan bisa dibaca (alasan)", "mana bisa dibaca", "kan aku ingin membaca (alasan)", "mana mau membaca"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "スピーチやプレゼンテーションにおいて、ジェスチャーを{使|つか}いながら{話|はな}すのは＿＿ ★ ＿＿ ＿＿{印象|いんしょう}を{悪|わる}くすることもある。",
      arti: "Dalam pidato atau presentasi, berbicara sambil menggunakan gerak tubuh itu efektif, tetapi di sisi lain gerak tubuh yang terlalu besar justru bisa memperburuk kesan.",
      optYomi: [null, "{効果的|こうかてき}である{反面|はんめん}", null, "{大|おお}きすぎるジェスチャーは"],
      optArti: ["terlalu", "di satu sisi efektif, (tetapi) di sisi lain", "justru, malah", "gerak tubuh yang terlalu besar"],
    },
    37: {
      yomi: "{今|いま}や、{書類|しょるい}や{衣料品|いりょうひん}だけでなく{生鮮|せいせん}{食品|しょくひん}も、インターネットへの＿＿ ＿＿ ★ ＿＿{時代|じだい}である。",
      arti: "Kini, bukan hanya dokumen dan pakaian, bahan makanan segar pun bisa dibeli dengan mudah sambil tetap di rumah asalkan ada lingkungan yang memungkinkan akses ke internet — itulah zaman sekarang.",
      optYomi: ["{自宅|じたく}にいながらにして", "{手軽|てがる}に{購入|こうにゅう}できる", "{環境|かんきょう}があれば", "アクセスが{可能|かのう}な"],
      optArti: ["sambil tetap berada di rumah", "bisa dibeli dengan mudah", "asalkan ada lingkungan", "yang memungkinkan akses"],
    },
    38: {
      yomi: "よく{似|に}た{昆虫|こんちゅう}の{判別|はんべつ}は{大変|たいへん}{難|むずか}しいという。{中|なか}には、かなり＿＿ ＿＿ ★ ＿＿{場合|ばあい}もあるそうだ。",
      arti: "Katanya membedakan serangga yang mirip itu sangat sulit. Bahkan ada kasus yang begitu sulit dibedakan sampai-sampai ahli serangga yang sudah cukup berpengalaman pun bingung.",
      optYomi: ["{判別|はんべつ}が{難|むずか}しい", "{昆虫|こんちゅう}{学者|がくしゃ}でさえも", "{経験|けいけん}を{積|つ}んだ", "{迷|まよ}うほど"],
      optArti: ["sulit dibedakan", "bahkan ahli serangga pun", "yang sudah banyak pengalaman", "sampai bingung"],
    },
    39: {
      yomi: "{今回|こんかい}の＿＿ ＿＿ ★ ＿＿{気持|きも}ちの{方|ほう}が{大|おお}きかった。",
      arti: "Dalam pindah kerja kali ini, kalau saya bilang sama sekali tidak cemas, itu bohong, tetapi perasaan senang karena bisa menantang hal baru lebih besar.",
      optYomi: ["{転職|てんしょく}にあたり", null, "{少|すこ}しも{不安|ふあん}がなかったといえば", "{新|あら}たなことに{挑戦|ちょうせん}できてうれしいという"],
      optArti: ["dalam rangka pindah kerja", "itu bohong, tetapi", "kalau dikatakan sama sekali tidak cemas", "(perasaan) senang karena bisa menantang hal baru"],
    },
    40: {
      yomi: "{北山市|きたやまし}は＿＿ ＿＿ ★ ＿＿のどかなところだった。",
      arti: "Kota Kitayama kini memang sudah menjadi kota berpenduduk lebih dari 100.000 orang, tetapi sampai 30 tahun lalu tempat itu tenang dan damai, hampir tidak ada apa-apa selain di sekitar Stasiun Kitayama.",
      optYomi: ["{人口|じんこう}10{万人|まんにん}を{超|こ}える{都市|とし}となったが", "{北山駅|きたやまえき}{周辺|しゅうへん}{以外|いがい}にはほとんど{何|なに}もない", "{今|いま}でこそ", "30{年前|ねんまえ}までは"],
      optArti: ["sudah menjadi kota berpenduduk lebih dari 100.000 orang, tetapi", "hampir tidak ada apa-apa selain di sekitar Stasiun Kitayama", "kini memang (baru)", "sampai 30 tahun lalu"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{小説|しょうせつ}であってもだ", "{小説|しょうせつ}でもあるまい", "{小説|しょうせつ}なのであろうか", "{小説|しょうせつ}なのではないか"],
      optArti: ["meskipun itu novel", "bukanlah novel (yang sehebat itu)", "apakah itu novel?", "bukankah itu novel?"],
    },
    42: {
      optYomi: ["{褒|ほ}めたり{叱|しか}ったりする", "{褒|ほ}めたり{叱|しか}ったりしたほうがいい", "{褒|ほ}めたり{叱|しか}ったりするようだ", "{褒|ほ}めたり{叱|しか}ったりしても{仕方|しかた}ない"],
      optArti: ["memuji dan memarahi", "sebaiknya memuji dan memarahi", "tampaknya memuji dan memarahi", "percuma memuji dan memarahi"],
    },
    43: {
      optYomi: ["{否定|ひてい}せずにいられなくなる", "{否定|ひてい}しがちになる", "{否定|ひてい}できなくなる", "{否定|ひてい}するようになる"],
      optArti: ["jadi tak bisa tidak menyangkal", "jadi cenderung menyangkal", "jadi tidak bisa menyangkal", "jadi mulai menyangkal"],
    },
    44: {
      optYomi: ["も{含|ふく}めて", "でない{限|かぎ}り", null, null],
      optArti: ["termasuk juga", "kecuali (kalau bukan)", "sekalipun, juga", "(yang namanya) … itu"],
    },

    // ── 問題8：内容理解（短文）──
    45: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{情報|じょうほう}を{求|もと}める{人|ひと}ほど、{知|し}らない{情報|じょうほう}があることに{不安|ふあん}を{感|かん}じる。",
        "{情報|じょうほう}を{得|え}ることに{熱心|ねっしん}な{人|ひと}は、{世間|せけん}で{流行|はや}っていることしか{知|し}らない。",
        "{多|おお}くの{情報|じょうほう}から{必要|ひつよう}なものが{選|えら}べなければ、{世間|せけん}から{遅|おく}れてしまう。",
        "{流行|はや}っているものの{情報|じょうほう}に{熱心|ねっしん}なだけでは、{情報化|じょうほうか}{社会|しゃかい}で{生|い}きられない。",
      ],
      optArti: [
        "Makin seseorang mencari informasi, makin ia merasa cemas bahwa ada informasi yang tidak ia ketahui.",
        "Orang yang giat mencari informasi hanya tahu hal-hal yang sedang tren di masyarakat.",
        "Kalau tidak bisa memilih yang diperlukan dari banyak informasi, kita akan tertinggal dari masyarakat.",
        "Hanya giat mengikuti informasi tentang hal yang sedang tren tidak cukup untuk hidup di masyarakat informasi.",
      ],
    },
    46: {
      yomi: "{筆者|ひっしゃ}によると、「{書|か}くこと」によってどうなるか。",
      arti: "Menurut penulis, apa yang terjadi melalui \"menulis\"?",
      optYomi: [
        "{自身|じしん}の{新|あたら}しい{考|かんが}え{方|かた}に{気|き}づく。",
        "{自身|じしん}の{意見|いけん}を{具体的|ぐたいてき}に{伝|つた}えられる。",
        "{自身|じしん}の{意見|いけん}を{批判的|ひはんてき}に{見|み}ることができる。",
        "{自身|じしん}のこころの{変化|へんか}を{観察|かんさつ}することができる。",
      ],
      optArti: [
        "Kita menyadari cara berpikir baru dalam diri sendiri.",
        "Kita bisa menyampaikan pendapat sendiri secara konkret.",
        "Kita bisa melihat pendapat sendiri secara kritis.",
        "Kita bisa mengamati perubahan hati sendiri.",
      ],
    },
    47: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{消費者|しょうひしゃ}{心理|しんり}を{捉|とら}えた{広告|こうこく}{作|づく}りは、{昔|むかし}より{難|むずか}しくなっている。",
        "{消費者|しょうひしゃ}{心理|しんり}を{捉|とら}えていないのは、{良|よ}い{広告|こうこく}とは{言|い}えない。",
        "{消費者|しょうひしゃ}{心理|しんり}を{捉|とら}えていれば、{広告|こうこく}は{表現|ひょうげん}にこだわる{必要|ひつよう}はない。",
        "{消費者|しょうひしゃ}{心理|しんり}を{捉|とら}えているだけでは、{効|き}き{目|め}のある{広告|こうこく}にはならない。",
      ],
      optArti: [
        "Membuat iklan yang menangkap psikologi konsumen lebih sulit daripada dulu.",
        "Iklan yang tidak menangkap psikologi konsumen tidak bisa disebut iklan yang baik.",
        "Asalkan menangkap psikologi konsumen, iklan tidak perlu memusingkan cara penyajian.",
        "Hanya menangkap psikologi konsumen saja tidak membuat iklan menjadi efektif.",
      ],
    },
    48: {
      yomi: "{対話|たいわ}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Tentang dialog, apa yang dikatakan penulis?",
      optYomi: [
        "{他人|たにん}とじぶんの{違|ちが}いが{大|おお}きいほど、{厚|あつ}い{対話|たいわ}ができる。",
        "{他人|たにん}との{思考|しこう}の{違|ちが}いを{把握|はあく}することで、{自身|じしん}の{思考|しこう}が{深|ふか}められる。",
        "わかりあえないという{戸惑|とまど}いや{痛|いた}みが{克服|こくふく}でき、{他人|たにん}と{共感|きょうかん}できる。",
        "{思|おも}いや{考|かんが}えを{表現|ひょうげん}する{能力|のうりょく}が{鍛|きた}えられ、{他人|たにん}に{理解|りかい}してもらいやすくなる。",
      ],
      optArti: [
        "Makin besar perbedaan antara orang lain dan diri sendiri, makin tebal dialog yang bisa dilakukan.",
        "Dengan memahami perbedaan pemikiran dengan orang lain, pemikiran sendiri menjadi lebih dalam.",
        "Kebingungan dan rasa sakit karena tidak bisa saling memahami dapat diatasi, sehingga bisa berempati dengan orang lain.",
        "Kemampuan mengungkapkan perasaan dan pikiran terlatih, sehingga lebih mudah dipahami orang lain.",
      ],
    },

    // ── 問題9：内容理解（中文）──
    49: {
      yomi: "{筆者|ひっしゃ}によると、{学問|がくもん}とはどのような{行為|こうい}か。",
      arti: "Menurut penulis, ilmu (gakumon) itu tindakan seperti apa?",
      optYomi: [
        "「{正解|せいかい}」を{求|もと}めて、{自|みずか}ら{主体的|しゅたいてき}に{問|と}い{続|つづ}けていく{行為|こうい}である。",
        "{独創的|どくそうてき}なアイデアを{得|え}るために、{自|みずか}らのものの{見方|みかた}を{変|か}える{行為|こうい}だ。",
        "{自|みずか}ら{問|と}いながら、ものの{見方|みかた}を{模索|もさく}しながら{自分|じぶん}{自身|じしん}が{変|か}わっていく{行為|こうい}だ。",
        "{新|あたら}しい{知識|ちしき}を{積極的|せっきょくてき}に{取|と}り{入|い}れることで、{自分|じぶん}{自身|じしん}を{変|か}えていく{行為|こうい}だ。",
      ],
      optArti: [
        "Tindakan terus bertanya secara mandiri dan aktif untuk mencari \"jawaban yang benar\".",
        "Tindakan mengubah cara pandang sendiri untuk mendapatkan ide yang orisinal.",
        "Tindakan di mana diri sendiri berubah sambil bertanya sendiri dan mencari-cari cara pandang.",
        "Tindakan mengubah diri sendiri dengan aktif menyerap pengetahuan baru.",
      ],
    },
    50: {
      yomi: "{学問|がくもん}で「{疑|うたが}う」ことについて、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang \"meragukan\" dalam ilmu, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{何|なに}を{信|しん}じればいいのかを{理解|りかい}するのに{欠|か}かせない{行為|こうい}だ。",
        "{豊|ゆた}かに{生|い}きるために、{新|あたら}しい{常識|じょうしき}を{作|つく}りだす{積極的|せっきょくてき}な{行為|こうい}だ。",
        "{常識|じょうしき}に{安易|あんい}に{取|と}り{込|こ}まれないために{必要|ひつよう}だが、{否定的|ひていてき}な{行為|こうい}だ。",
        "{常識|じょうしき}に{縛|しば}られずに、これまでと{異|こと}なる{考|かんが}え{方|かた}を{生|う}み{出|だ}す{行為|こうい}だ。",
      ],
      optArti: [
        "Tindakan yang tak terpisahkan untuk memahami apa yang sebaiknya dipercaya.",
        "Tindakan aktif menciptakan akal sehat baru demi hidup yang kaya.",
        "Perlu supaya tidak mudah terseret akal sehat, tetapi merupakan tindakan negatif.",
        "Tindakan melahirkan cara berpikir yang berbeda dari sebelumnya tanpa terikat akal sehat umum.",
      ],
    },
    51: {
      yomi: "{筆者|ひっしゃ}によると、アリはなぜカタクリの{種|たね}を{巣|す}に{運|はこ}ぶのか。",
      arti: "Menurut penulis, mengapa semut membawa biji katakuri ke sarangnya?",
      optYomi: [
        "{種|たね}についている{脂肪分|しぼうぶん}がアリの{好物|こうぶつ}だから。",
        "{種|たね}はアリの{成長|せいちょう}に{欠|か}かせない{栄養分|えいようぶん}だから。",
        "{種|たね}がアリの{餌|えさ}になる{幼虫|ようちゅう}に{似|に}ているから。",
        "{種|たね}をアリの{生|い}きた{幼虫|ようちゅう}だと{思|おも}うから。",
      ],
      optArti: [
        "Karena lemak yang menempel pada biji adalah makanan kesukaan semut.",
        "Karena biji adalah nutrisi yang tak tergantikan untuk pertumbuhan semut.",
        "Karena biji mirip larva yang menjadi makanan semut.",
        "Karena semut mengira biji itu adalah larva semut yang masih hidup.",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}によると、アリはなぜ{集|あつ}めた{種|たね}を{捨|す}てるのか。",
      arti: "Menurut penulis, mengapa semut membuang biji yang sudah dikumpulkannya?",
      optYomi: [
        "{種|たね}のにおいで、アリの{幼虫|ようちゅう}が{死|し}んでしまうから。",
        "{種|たね}からアリの{死|し}んだ{幼虫|ようちゅう}のにおいがするから。",
        "{種|たね}がアリの{死|し}んだ{幼虫|ようちゅう}と{同|おな}じ{色|いろ}に{変|か}わるから。",
        "{種|たね}がはじけて、アリの{嫌|きら}うにおいを{出|だ}すから。",
      ],
      optArti: [
        "Karena bau biji membuat larva semut mati.",
        "Karena biji mengeluarkan bau larva semut yang mati.",
        "Karena biji berubah warna menjadi sama dengan larva semut yang mati.",
        "Karena biji pecah dan mengeluarkan bau yang dibenci semut.",
      ],
    },
    53: {
      yomi: "「そんな{言|い}い{方|かた}をするもんじゃない」といったら{負|ま}けだ、とあるが、なぜか。",
      arti: "Tertulis \"kalau berkata 'jangan bicara seperti itu', berarti kalah\"; mengapa?",
      optYomi: [
        "{子供|こども}の{成長|せいちょう}を{否定|ひてい}しているようなものだから。",
        "こどもの{反論|はんろん}が{正|ただ}しいと{認|みと}めるようなものだから。",
        "{自分|じぶん}で{自分|じぶん}を{注意|ちゅうい}しているようなものだから。",
        "{自分|じぶん}がこどもと{同|おな}じレベルで{答|こた}えるようなものだから。",
      ],
      optArti: [
        "Karena itu sama saja dengan menyangkal pertumbuhan anak.",
        "Karena itu sama saja dengan mengakui bahwa bantahan anak itu benar.",
        "Karena itu sama saja dengan menegur diri sendiri.",
        "Karena itu sama saja dengan menjawab di level yang sama dengan anak.",
      ],
    },
    54: {
      yomi: "こどもの{模倣|もほう}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Tentang peniruan oleh anak-anak, bagaimana pendapat penulis?",
      optYomi: [
        "{完璧|かんぺき}にはコピーできないことが、{個性|こせい}につながっている。",
        "{完璧|かんぺき}にコピーしようとしているが、{本質|ほんしつ}は{捉|とら}えられていない。",
        "オリジナルなものを{自由|じゆう}に{変|か}えて、おとなを{楽|たの}しませようとしている。",
        "オリジナルからの{逸脱|いつだつ}を{気|き}にせず、{自分|じぶん}の{個性|こせい}を{表現|ひょうげん}しようとしている。",
      ],
      optArti: [
        "Ketidakmampuan meniru dengan sempurna justru berhubungan dengan keunikan pribadi.",
        "Mereka berusaha meniru dengan sempurna, tetapi tidak menangkap esensinya.",
        "Mereka mengubah aslinya dengan bebas untuk menghibur orang dewasa.",
        "Mereka tidak peduli penyimpangan dari aslinya dan berusaha mengekspresikan keunikan dirinya.",
      ],
    },
    55: {
      yomi: "{人間|にんげん}が{使用|しよう}するものを{作|つく}る{際|さい}の{問題点|もんだいてん}について、{筆者|ひっしゃ}が{述|の}べていることはどれか。",
      arti: "Tentang masalah dalam membuat benda yang digunakan manusia, mana yang dikatakan penulis?",
      optYomi: [
        "{同|おな}じもので{多様|たよう}な{使|つか}い{手|て}に{対応|たいおう}すると、そのものの{効果|こうか}に{限界|げんかい}が{生|しょう}じる。",
        "{同|おな}じものを{多様|たよう}な{使|つか}い{手|て}に{対応|たいおう}させるには、{開発|かいはつ}に{時間|じかん}がかかりすぎる。",
        "{個別|こべつ}の{使|つか}い{手|て}に{対応|たいおう}すると、そのものの{効果|こうか}が{見|み}えにくくなる。",
        "{個別|こべつ}の{使|つか}い{手|て}に{対応|たいおう}すると、{平等|びょうどう}にものが{使|つか}えなくなる。",
      ],
      optArti: [
        "Jika satu benda yang sama dipakai untuk melayani beragam pengguna, efektivitasnya menjadi terbatas.",
        "Untuk membuat satu benda yang sama cocok bagi beragam pengguna, pengembangannya terlalu lama.",
        "Jika disesuaikan dengan pengguna perorangan, efek benda itu menjadi sulit terlihat.",
        "Jika disesuaikan dengan pengguna perorangan, benda tidak bisa dipakai secara setara.",
      ],
    },
    56: {
      yomi: "ユニバーサルデザインにおけるデザインやものづくりについて、{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Tentang desain dan pembuatan barang dalam desain universal, apa yang paling ingin dikatakan penulis?",
      optYomi: [
        "{多様|たよう}な{使|つか}い{手|て}が、{平等|びょうどう}だという{感覚|かんかく}が{持|も}てるものを{作|つく}り{出|だ}すべきだ。",
        "{使|つか}い{手|て}が{不平等|ふびょうどう}だと{感|かん}じたら、{原因|げんいん}を{究明|きゅうめい}しなければならない。",
        "すべての{使|つか}い{手|て}にとって{平等|びょうどう}であるものにすることは{難|むずか}しい。",
        "{常|つね}に{使|つか}い{手|て}にとっての{平等|びょうどう}について{考|かんが}えなければならない。",
      ],
      optArti: [
        "Kita harus menciptakan benda yang membuat beragam pengguna merasa diperlakukan setara.",
        "Jika pengguna merasa tidak setara, penyebabnya harus diusut.",
        "Sulit membuat benda yang setara bagi semua pengguna.",
        "Kita harus selalu memikirkan kesetaraan bagi pengguna.",
      ],
    },

    // ── 問題10：内容理解（長文）──
    57: {
      yomi: "ロボピーは、ほかのロボットと{異|こと}なる{点|てん}は{何|なに}か。",
      arti: "Apa perbedaan Robovie dengan robot lainnya?",
      optYomi: [
        "{動作|どうさ}パターンが{決|き}められているので、ある{程度|ていど}{動|うご}きが{予測|よそく}できる。",
        "{与|あた}えられた{情報|じょうほう}の{中身|なかみ}を{自分|じぶん}で{判断|はんだん}して{動|うご}くので、{動|うご}きが{予測|よそく}できない。",
        "どう{動|うご}くかというプログラムを{多数|たすう}{組|く}み{込|こ}んだので、{動|うご}きが{予測|よそく}できない。",
        "{多様|たよう}で{複雑|ふくざつ}な{動作|どうさ}をプログラムしたので、{人間|にんげん}のように{自然|しぜん}な{動|うご}きができる。",
      ],
      optArti: [
        "Pola gerakannya sudah ditentukan, sehingga gerakannya bisa diprediksi sampai batas tertentu.",
        "Ia bergerak dengan menilai sendiri isi informasi yang diberikan, sehingga gerakannya tidak bisa diprediksi.",
        "Banyak program tentang cara bergerak yang dimasukkan, sehingga gerakannya tidak bisa diprediksi.",
        "Gerakan yang beragam dan rumit telah diprogram, sehingga ia bisa bergerak alami seperti manusia.",
      ],
    },
    58: {
      yomi: "どこかへ{向|む}かって{歩|ある}きだしたとあるが、その{時|とき}{筆者|ひっしゃ}にはどのように{見|み}えたか。",
      arti: "Tertulis \"mulai berjalan ke suatu tempat\"; saat itu, bagaimana kelihatannya bagi penulis?",
      optYomi: [
        "プログラムに{間違|まちが}いがあり、ロボピーに{意思|いし}が{生|う}まれて{動|うご}いた。",
        "プログラムが{作動|さどう}したのではなく、ロボピー{自身|じしん}が{考|かんが}えて{動|うご}いた。",
        "プログラムが{作動|さどう}して、{意思|いし}があるかのようにロボピーが{動|うご}いた。",
        "プログラムが{誤作動|ごさどう}して、{制作者|せいさくしゃ}の{意図|いと}に{反|はん}してロボピーが{動|うご}いた。",
      ],
      optArti: [
        "Ada kesalahan dalam program, lalu dalam diri Robovie lahir kehendak dan ia bergerak.",
        "Bukan programnya yang bekerja, melainkan Robovie sendiri yang berpikir lalu bergerak.",
        "Program bekerja, dan Robovie bergerak seolah-olah punya kehendak.",
        "Program mengalami malfungsi, dan Robovie bergerak berlawanan dengan maksud pembuatnya.",
      ],
    },
    59: {
      yomi: "「{心|こころ}」について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Tentang \"hati/pikiran\", bagaimana pendapat penulis?",
      optYomi: [
        "あると{思|おも}って{観察|かんさつ}すれば、{複雑|ふくざつ}な{動|うご}きの{意図|いと}が{理解|りかい}できる。",
        "{実体|じったい}がないので、あるとかないとか{想像|そうぞう}しても{意味|いみ}がない。",
        "{仕組|しく}みが{複雑|ふくざつ}すぎるため、{人間|にんげん}{同士|どうし}であっても{想像|そうぞう}できない。",
        "{理解|りかい}しきれない{複雑|ふくざつ}な{動|うご}きを{見|み}たときに、{人間|にんげん}が{想像|そうぞう}するものだ。",
      ],
      optArti: [
        "Jika diamati dengan anggapan bahwa ia ada, maksud dari gerakan yang rumit bisa dipahami.",
        "Karena tidak berwujud, tidak ada gunanya membayangkan ada atau tidaknya.",
        "Karena mekanismenya terlalu rumit, sesama manusia pun tidak bisa membayangkannya.",
        "Sesuatu yang dibayangkan manusia ketika melihat gerakan rumit yang tidak bisa dipahami sepenuhnya.",
      ],
    },

    // ── 問題11：統合理解 ──
    60: {
      yomi: "メモを{取|と}ることについて、AとBはどのように{述|の}べているか。",
      arti: "Tentang mencatat, apa yang dikatakan A dan B?",
      optYomi: [
        "AもBも、{量|りょう}よりも{書|か}きとる{内容|ないよう}を{意識|いしき}してとることが{重要|じゅうよう}だと{述|の}べている。",
        "AもBも、できるだけ{多|おお}くの{情報|じょうほう}を{正確|せいかく}に{書|か}きとったほうがいいと{述|の}べている。",
        "Aは{内容|ないよう}を{活用|かつよう}するために{必要|ひつよう}だと{述|の}べ、Bは{取|と}ることに{集中|しゅうちゅう}し{過|す}ぎては{意味|いみ}がないと{述|の}べている。",
        "Aは{問題点|もんだいてん}や{感想|かんそう}なども{一緒|いっしょ}に{記入|きにゅう}したほうがいいと{述|の}べ、Bは{話|はなし}の{内容|ないよう}を{理解|りかい}していなければ{正確|せいかく}に{取|と}れないと{述|の}べている。",
      ],
      optArti: [
        "A dan B sama-sama mengatakan bahwa yang penting adalah memperhatikan isi yang dicatat, bukan jumlahnya.",
        "A dan B sama-sama mengatakan sebaiknya mencatat sebanyak mungkin informasi secara akurat.",
        "A mengatakan mencatat itu perlu untuk memanfaatkan isinya, sedangkan B mengatakan tidak ada artinya jika terlalu fokus pada mencatat.",
        "A mengatakan sebaiknya mencatat juga masalah dan kesan, sedangkan B mengatakan tidak bisa mencatat dengan akurat jika tidak memahami isi pembicaraan.",
      ],
    },
    61: {
      yomi: "{話|はなし}の{聞|き}き{方|かた}について、AとBの{認識|にんしき}で{共通|きょうつう}していることは{何|なに}か。",
      arti: "Tentang cara mendengarkan pembicaraan, apa kesamaan pandangan A dan B?",
      optYomi: [
        "{何|なに}かを{得|え}ようという{姿勢|しせい}で{聞|き}くことが{重要|じゅうよう}だ。",
        "その{場|ば}ですべてを{理解|りかい}しようとしなくてもいい。",
        "{手|て}を{動|うご}かしながら{聞|き}いたほうが、{記憶|きおく}に{残|のこ}りやすい。",
        "{興味|きょうみ}や{関心|かんしん}を{示|しめ}し、{話|はな}し{手|て}に{安心感|あんしんかん}を{与|あた}えることが{大切|たいせつ}だ。",
      ],
      optArti: [
        "Penting untuk mendengarkan dengan sikap ingin mendapatkan sesuatu.",
        "Tidak perlu berusaha memahami semuanya saat itu juga.",
        "Mendengarkan sambil menggerakkan tangan lebih mudah diingat.",
        "Penting untuk menunjukkan minat dan perhatian agar pembicara merasa tenang.",
      ],
    },

    // ── 問題12：内容理解（長文）──
    62: {
      yomi: "{決|けっ}して{大|おお}きいものではないと{考|かんが}える{理由|りゆう}として、{筆者|ひっしゃ}が{述|の}べているのはどれか。",
      arti: "Sebagai alasan penulis menganggap \"sama sekali tidak besar\", mana yang dikatakannya?",
      optYomi: [
        "{企業|きぎょう}や{社会|しゃかい}が{望|のぞ}む{人材|じんざい}と、{教育学|きょういくがく}で{目標|もくひょう}とする{人材|じんざい}は{異|こと}なるから。",
        "「{生|い}きる{力|ちから}」をつけるために{必要|ひつよう}なことは、{明確|めいかく}ではないから。",
        "{子|こ}ども{一人一人|ひとりひとり}に{合|あ}わせて、{教育|きょういく}の{内容|ないよう}を{変|か}えられないから。",
        "{子|こ}どもは、{教|おし}えたとおりに{育|そだ}つとはかぎらないから。",
      ],
      optArti: [
        "Karena sumber daya manusia yang diinginkan perusahaan dan masyarakat berbeda dengan yang menjadi tujuan ilmu pendidikan.",
        "Karena hal yang diperlukan untuk menumbuhkan \"daya hidup\" tidak jelas.",
        "Karena isi pendidikan tidak bisa diubah sesuai dengan setiap anak.",
        "Karena anak-anak belum tentu tumbuh persis seperti yang diajarkan.",
      ],
    },
    63: {
      yomi: "{教育|きょういく}について、{筆者|ひっしゃ}の{考|かんが}えに{合|あ}うのはどれか。",
      arti: "Tentang pendidikan, mana yang sesuai dengan pendapat penulis?",
      optYomi: [
        "それぞれの{目的|もくてき}に{合|あ}わせて{合理化|ごうりか}・{効率化|こうりつか}しなければ、{機能|きのう}しない。",
        "みんなで{一|ひと}つの{目的|もくてき}を{共有|きょうゆう}しなければ、{効果|こうか}は{上|あ}がらない。",
        "{特定|とくてい}の{目的|もくてき}を{果|は}たすために{存在|そんざい}するものではない。",
        "{役|やく}に{立|た}つかどうかという{観点|かんてん}で{評価|ひょうか}されるべきだ。",
      ],
      optArti: [
        "Pendidikan tidak akan berfungsi jika tidak dirasionalisasi dan diefisienkan sesuai tujuan masing-masing.",
        "Efeknya tidak akan meningkat jika semua orang tidak berbagi satu tujuan yang sama.",
        "Pendidikan tidak ada untuk mencapai tujuan tertentu saja.",
        "Pendidikan seharusnya dinilai dari sudut pandang berguna atau tidak.",
      ],
    },
    64: {
      yomi: "{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang paling ingin dikatakan penulis?",
      optYomi: [
        "{多様|たよう}な{社会|しゃかい}の{要求|ようきゅう}に{応|おう}じられるように、{教育|きょういく}のあり{方|かた}を{考|かんが}え{直|なお}すべきだ。",
        "{社会|しゃかい}の{不安|ふあん}を{取|と}り{除|のぞ}くためには、{教育|きょういく}を{合理化|ごうりか}・{効率化|こうりつか}すべきではない。",
        "{教育|きょういく}{改革|かいかく}によって、{安定|あんてい}した{社会|しゃかい}を{持続|じぞく}させていくことが{必要|ひつよう}だろう。",
        "{現代|げんだい}{社会|しゃかい}の{問題|もんだい}のすべてが、{教育|きょういく}で{解決|かいけつ}できると{思|おも}ってはいけない。",
      ],
      optArti: [
        "Cara pendidikan harus dipikirkan ulang agar bisa memenuhi beragam tuntutan masyarakat.",
        "Untuk menghilangkan kecemasan masyarakat, pendidikan tidak boleh dirasionalisasi dan diefisienkan.",
        "Melalui reformasi pendidikan, masyarakat yang stabil perlu terus dipertahankan.",
        "Jangan mengira bahwa semua masalah masyarakat modern bisa diselesaikan lewat pendidikan.",
      ],
    },

    // ── 問題13：情報検索 ──
    65: {
      yomi: "{次|つぎ}の4{人|にん}は{今年|ことし}の4{月|がつ}に{運動|うんどう}{教室|きょうしつ}を{受講|じゅこう}したいと{考|かんが}えている。この{中|なか}で、この{教室|きょうしつ}を{受講|じゅこう}できる{人|ひと}は{誰|だれ}か。\n\nダニエルさん：54{歳|さい}、{木原|きはら}{市内|しない}{在住|ざいじゅう}、{木原|きはら}{市外|しがい}{勤務|きんむ}、{去年|きょねん}の1{月|がつ}に{健康度|けんこうど}{測定|そくてい}を{受|う}けた\n{木村|きむら}さん：34{歳|さい}、{木原|きはら}{市外|しがい}{在住|ざいじゅう}、{木原|きはら}{市内|しない}{勤務|きんむ}、{去年|きょねん}の10{月|がつ}に{健康度|けんこうど}{測定|そくてい}を{受|う}けた\n{大川|おおかわ}さん：16{歳|さい}、{木原|きはら}{市内|しない}{在住|ざいじゅう}、{勤務|きんむ}なし、{今年|ことし}の2{月|がつ}に{健康度|けんこうど}{測定|そくてい}を{受|う}けた\nチェさん：27{歳|さい}、{木原|きはら}{市内|しない}{在住|ざいじゅう}、{木原|きはら}{市内|しない}{勤務|きんむ}、{今年|ことし}の5{月|がつ}に{健康度|けんこうど}{測定|そくてい}を{受|う}ける{予定|よてい}",
      arti: "Empat orang berikut ingin mengikuti kelas olahraga pada bulan April tahun ini. Di antara mereka, siapa yang bisa mengikuti kelas ini?\n\nDaniel: 54 tahun, tinggal di Kota Kihara, bekerja di luar Kota Kihara, menjalani pengukuran tingkat kesehatan pada bulan Januari tahun lalu\nKimura: 34 tahun, tinggal di luar Kota Kihara, bekerja di Kota Kihara, menjalani pengukuran tingkat kesehatan pada bulan Oktober tahun lalu\nŌkawa: 16 tahun, tinggal di Kota Kihara, tidak bekerja, menjalani pengukuran tingkat kesehatan pada bulan Februari tahun ini\nChoi: 27 tahun, tinggal di Kota Kihara, bekerja di Kota Kihara, dijadwalkan menjalani pengukuran tingkat kesehatan pada bulan Mei tahun ini",
      optYomi: [null, "{木村|きむら}さん", "{大川|おおかわ}さん", null],
      optArti: ["Daniel", "Kimura", "Ōkawa", "Choi"],
    },
    66: {
      yomi: "シャヒンさんは、{来週|らいしゅう}の「ダンスA」を{予約|よやく}したが、{空|あ}きがあれば{来週|らいしゅう}の「{体操|たいそう}」も{追加|ついか}{予約|よやく}したいと{考|かんが}えている。どうすればいいか。",
      arti: "Shahin sudah memesan \"Dansa A\" minggu depan, tetapi jika ada tempat kosong, ia ingin juga menambah pesanan \"Senam\" minggu depan. Apa yang sebaiknya dilakukan?",
      optYomi: [
        "{来週|らいしゅう}の{月曜日|げつようび}{以降|いこう}に{窓口|まどぐち}か{電話|でんわ}で{空|あ}きを{確認|かくにん}し、{空|あ}きがあれば、{窓口|まどぐち}で{予約|よやく}する。",
        "{来週|らいしゅう}の{月曜日|げつようび}{以降|いこう}に{窓口|まどぐち}か{電話|でんわ}で{空|あ}きを{確認|かくにん}し、{空|あ}きがあれば、{予約機|よやくき}か{電話|でんわ}で{予約|よやく}する。",
        "{来週|らいしゅう}の{水曜日|すいようび}{以降|いこう}に{窓口|まどぐち}か{電話|でんわ}で{空|あ}きを{確認|かくにん}し、{空|あ}きがあれば、{窓口|まどぐち}で{予約|よやく}する。",
        "{来週|らいしゅう}の{水曜日|すいようび}{以降|いこう}に{窓口|まどぐち}か{電話|でんわ}で{空|あ}きを{確認|かくにん}し、{空|あ}きがあれば、{予約機|よやくき}か{電話|でんわ}で{予約|よやく}する。",
      ],
      optArti: [
        "Mulai Senin minggu depan, cek tempat kosong di loket atau lewat telepon; jika ada, pesan di loket.",
        "Mulai Senin minggu depan, cek tempat kosong di loket atau lewat telepon; jika ada, pesan lewat mesin pemesanan atau telepon.",
        "Mulai Rabu minggu depan, cek tempat kosong di loket atau lewat telepon; jika ada, pesan di loket.",
        "Mulai Rabu minggu depan, cek tempat kosong di loket atau lewat telepon; jika ada, pesan lewat mesin pemesanan atau telepon.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：一生の仕事 ──
    "7": {
      yomi: `{自分|じぶん}の{作品|さくひん}を{読|よ}み{返|かえ}さぬ{日|ひ}はないと{言|い}っていい。

{書斎|しょさい}の{手近|てぢか}な{場所|ばしょ}に{全|ぜん}{著作|ちょさく}を{収|おさ}めた{棚|たな}があり、{読書|どくしょ}や{執筆|しっぴつ}に{倦|う}んだときには{適当|てきとう}に{一冊|いっさつ}を{抜|ぬ}き{出|だ}して{読|よ}み{始|はじ}める。{退屈|たいくつ}して{寝|ね}てしまうときもあれば、{仕事|しごと}をそっちのけで{読了|どくりょう}してしまうこともある。

まさかナルシストではない。{復読|ふくどく}に{耐|た}えるほどたいそうな[41]。わが{子|こ}はよその{子|こ}よりもかわゆいと{思|おも}う{親|おや}の{情|じょう}である。

{読|よ}みながら{勝手|かって}に{感心|かんしん}したり、あきれ{果|は}てたり、[42]。

{気|き}に{入|い}らない{点|てん}があるのなら{書|か}き{直|なお}せば{良|よ}さそうなものだが、どうしてもできない。{単行本|たんこうぼん}を{文庫本|ぶんこぼん}にするときですら、{校閲|こうえつ}{上|じょう}の{明|あき}らかな{誤|あやま}りの{他|ほか}にはまず{筆|ふで}を{入|い}れるということがない。{横着|おうちゃく}なわけではなく、{読|よ}めば{読|よ}むほどその{文章|ぶんしょう}を{書|か}いていたころの{自分|じぶん}を[43]のである。いくらか{齢|よわい}を{食|く}ったからといって、{齢|よわい}なりに{懸命|けんめい}であったおのれの{文章|ぶんしょう}を{滅|ほろ}ぼすことは{忍|しの}びないし、その{間|あいだ}に{得|え}たものも{多|おお}いが{喪|うしな}ったものもまた{多|おお}かろうと{思|おも}えば{勇気|ゆうき}も{要|い}る。

{出来栄|できば}えのいかんに{関|かか}わらず、{自分|じぶん}なりに{全|まった}きをめざしていたのである。そうした{過去|かこ}の{自分|じぶん}には{敬意|けいい}を{払|はら}い{続|つづ}けねばならないし、また{同時|どうじ}に{現在|げんざい}の{自分|じぶん}は、{未来|みらい}の{自分|じぶん}に{恥|は}じぬ{小説|しょうせつ}を{書|か}かねばなるまい。{一生|いっしょう}の{仕事|しごと}[44]そうしたものであろうと{思|おも}う。

かにかくに、この{短|みじか}い{文章|ぶんしょう}もいつか{読|よ}み{返|かえ}して{愕然|がくぜん}とするのであろうが。`,
      arti: `Boleh dibilang tidak ada hari tanpa saya membaca ulang karya saya sendiri.

Di tempat yang mudah dijangkau di ruang kerja saya ada rak yang berisi semua karya saya. Ketika jenuh membaca atau menulis, saya asal mencabut satu buku dan mulai membacanya. Ada kalanya saya bosan lalu tertidur, ada kalanya saya mengabaikan pekerjaan dan membacanya sampai habis.

Tentu saja saya bukan narsis. [41] yang begitu hebat sampai layak dibaca berulang kali. Ini sekadar perasaan orang tua yang menganggap anaknya sendiri lebih manis daripada anak orang lain.

Sambil membaca, saya seenaknya kagum, tercengang, [42].

Kalau ada bagian yang tidak saya sukai, rasanya cukup ditulis ulang saja, tetapi entah mengapa saya tidak bisa. Bahkan ketika buku edisi lengkap dijadikan edisi saku (bunkobon) pun, saya hampir tidak pernah mengubah apa-apa selain kesalahan yang jelas dalam penyuntingan. Bukan karena malas; makin saya membaca, makin saya [43] diri saya sewaktu menulis tulisan itu. Hanya karena saya sudah bertambah tua, saya tidak tega menghancurkan tulisan saya yang dulu ditulis dengan sungguh-sungguh sesuai usia saat itu; lagi pula, kalau mengingat bahwa selama itu banyak yang saya peroleh tetapi mungkin banyak pula yang hilang, dibutuhkan keberanian juga.

Terlepas dari bagus tidaknya hasilnya, saya dulu berusaha mencapai kesempurnaan dengan cara saya sendiri. Saya harus terus menghormati diri saya di masa lalu itu, dan sekaligus diri saya yang sekarang harus menulis novel yang tidak memalukan bagi diri saya di masa depan. Saya kira [44] pekerjaan seumur hidup memang seperti itu.

Bagaimanapun juga, tulisan pendek ini pun suatu hari mungkin akan saya baca ulang lalu membuat saya terperangah.`,
    },

    // ── 問題8 (1)：情報化社会 ──
    "8-1": {
      yomi: `{情報|じょうほう}{社会|しゃかい}、あるいは{情報化|じょうほうか}{社会|しゃかい}といっても{良|よ}いですが、そこで{懸命|けんめい}に{生|い}きていこうとすると、まず{出|で}てくる{悲鳴|ひめい}があります。つまり、あまりにも{多|おお}くの{情報|じょうほう}があって、その{中|なか}のどれが{本当|ほんとう}なのか、{何|なに}を{選|えら}んだらいいのかわからない。{今|いま}、{流行|はや}っているものの{情報|じょうほう}に{熱心|ねっしん}であればあるほど、{世間|せけん}で{流行|はや}っていることを{知|し}らないと{自分|じぶん}が{遅|おく}れるんじゃないか、という{焦|あせ}りみたいなものが{人間|にんげん}を{突|つ}き{動|うご}かすのが{情報化|じょうほうか}{社会|しゃかい}の{特徴|とくちょう}です。`,
      arti: `Masyarakat informasi — atau boleh juga disebut masyarakat yang terinformasikan — ketika kita berusaha hidup sungguh-sungguh di dalamnya, ada jeritan yang muncul pertama kali. Yaitu: informasinya terlalu banyak, sehingga kita tidak tahu mana yang benar dan apa yang sebaiknya dipilih. Makin seseorang giat mengikuti informasi tentang hal yang sedang tren sekarang, makin ia terdorong oleh semacam rasa gelisah, "jangan-jangan aku ketinggalan kalau tidak tahu apa yang sedang tren di masyarakat" — itulah ciri masyarakat informasi.`,
    },

    // ── 問題8 (2)：書くこと ──
    "8-2": {
      yomi: `{以下|いか}は、「{書|か}くこと」について{述|の}べたものである。

「{思|おも}ったこと」や「{考|かんが}えたこと」という{抽象的|ちゅうしょうてき}な{存在|そんざい}が{文字|もじ}という{具体的|ぐたいてき}な{存在|そんざい}に{変化|へんか}した{瞬間|しゅんかん}、その{筆者|ひっしゃ}は{自分|じぶん}{自身|じしん}の「{思|おも}ったこと」や「{考|かんが}えたこと」を、{直接|ちょくせつ}、{自分|じぶん}の{目|め}で「{見|み}た」ことになる。つまり、{客観的|きゃっかんてき}に「{観察|かんさつ}」することになるわけだ。「{書|か}くこと」は「{読|よ}むこと」。{自分|じぶん}の{文章|ぶんしょう}を{読|よ}みながら{書|か}き{進|すす}めるのが、「{書|か}く」という{作業|さぎょう}なのである。{観察|かんさつ}はほとんど{必然的|ひつぜんてき}に「{批判|ひはん}」のこころを{呼|よ}び{起|お}こす。「{思|おも}ったこと」や「{考|かんが}えたこと」の{浅|あさ}さや{甘|あま}さを、{書|か}いた{瞬間|しゅんかん}に{思|おも}い{知|し}らされるのである。`,
      arti: `Berikut ini adalah tulisan tentang "menulis".

Pada saat sesuatu yang abstrak berupa "yang dirasakan" atau "yang dipikirkan" berubah menjadi sesuatu yang konkret berupa huruf, penulisnya berarti telah "melihat" langsung dengan matanya sendiri "yang ia rasakan" dan "yang ia pikirkan". Dengan kata lain, ia "mengamati"-nya secara objektif. "Menulis" adalah "membaca". Menulis sambil membaca tulisan sendiri — itulah pekerjaan yang disebut "menulis". Pengamatan hampir pasti membangkitkan sikap "kritis". Begitu menulis, kita langsung disadarkan akan dangkal dan longgarnya "yang kita rasakan" dan "yang kita pikirkan".`,
    },

    // ── 問題8 (3)：広告と消費者心理 ──
    "8-3": {
      yomi: `{昔|むかし}と{比|くら}べてモノが{売|う}れなくなり、{広告|こうこく}の{効|き}きも{悪|わる}くなっていることから、{表現|ひょうげん}の{面白|おもしろ}さや{新規性|しんきせい}ばっかりに{走|はし}ってしまう――{要|よう}は、{本来|ほんらい}、{最|もっと}も{大切|たいせつ}であるはずの{消費者|しょうひしゃ}{心理|しんり}のツボを{十分|じゅうぶん}につかみきれていない、{分析|ぶんせき}しきれていない、いわば{表面上|ひょうめんじょう}の、{表現|ひょうげん}にこだわった{広告|こうこく}が{増|ふ}えているように{感|かん}じます。

{消費者|しょうひしゃ}{心理|しんり}は「{本質|ほんしつ}」、{表現|ひょうげん}は「{伝|つた}え{方|かた}」とも{言|い}い{換|か}えられますが、{最|もっと}も{大切|たいせつ}な{本質|ほんしつ}を{重視|じゅうし}せず、{表面上|ひょうめんじょう}の{伝|つた}え{方|かた}ばかりに{重|おも}きが{置|お}かれるようになっている{状況|じょうきょう}は、いかがなものでしょうか？ {本質|ほんしつ}なきところに{良|よ}い{伝|つた}え{方|かた}など{存在|そんざい}するはずがないのです。`,
      arti: `Dibandingkan dulu, barang makin sulit terjual dan iklan pun makin kurang manjur, sehingga orang cenderung hanya mengejar kemenarikan dan kebaruan penyajian. Singkatnya, saya merasa makin banyak iklan yang hanya di permukaan dan terpaku pada penyajian — iklan yang tidak sepenuhnya menangkap dan menganalisis titik kunci psikologi konsumen, yang semestinya justru paling penting.

Psikologi konsumen bisa disebut juga "esensi", dan penyajian disebut "cara menyampaikan". Bagaimana menurut Anda keadaan di mana esensi yang paling penting tidak diutamakan, dan bobot hanya diletakkan pada cara menyampaikan yang di permukaan? Di tempat yang tidak ada esensinya, mustahil ada cara menyampaikan yang baik.`,
    },

    // ── 問題8 (4)：対話の力 ──
    "8-4": {
      yomi: `{語|かた}り{合|あ}えば{語|かた}り{合|あ}うほど{他人|たにん}と{自分|じぶん}との{違|ちが}いがより{繊細|せんさい}にわかるようになること。それが{対話|たいわ}だ。「わかりあえない」「{伝|つた}わらない」という{戸惑|とまど}いや{痛|いた}みから{出発|しゅっぱつ}すること。それは、{不可欠|ふかけつ}なものに{身|み}を{開|ひら}くことである。そのことで、ひとはより{厚|あつ}い{対話|たいわ}をだすことができるようになる。{対話|たいわ}のなかでみずからの{思考|しこう}をも{鍛|きた}えていく、よくよく{考|かんが}えたうえで{口|くち}にされる{他人|たにん}の{異|こと}なる{思|おも}いや{考|かんが}えに、これまたよく{耳|みみ}を{澄|す}ますことで、じぶんの{考|かんが}えを{再|さい}{点検|てんけん}しはじめるからだ。`,
      arti: `Makin banyak berbicara satu sama lain, makin halus kita memahami perbedaan antara orang lain dan diri sendiri. Itulah dialog. Berangkat dari kebingungan dan rasa sakit karena "tidak bisa saling memahami" dan "tidak tersampaikan". Itu berarti membuka diri terhadap sesuatu yang tak tergantikan. Dengan begitu, orang menjadi mampu menghasilkan dialog yang lebih tebal. Di dalam dialog, pemikiran kita sendiri pun ikut terasah, karena dengan sungguh-sungguh mendengarkan perasaan dan pemikiran orang lain yang berbeda — yang diucapkan setelah dipikirkan matang-matang — kita mulai memeriksa ulang pemikiran kita sendiri.`,
    },

    // ── 問題9 (1)：学問と「疑う」こと ──
    "9-1": {
      yomi: `「{常識|じょうしき}を{疑|うたが}ってみる」ということ、{実|じつ}はそれが{学問|がくもん}の{始|はじ}まりでもあります。{勉強|べんきょう}が「{強|し}いて{勉|つと}める」という{受動的|じゅどうてき}な{側面|そくめん}を{持|も}つものであるならば、{学問|がくもん}は「{問|と}うて{学|まな}ぶ」ことであり、{極|きわ}めて{能動的|のうどうてき}な{行為|こうい}です。{自|みずか}ら{主体的|しゅたいてき}な{行為|こうい}として{問|と}うことを{通|つう}して、{常識|じょうしき}とされてきたものの{見方|みかた}を{疑|うたが}い、それを{少|すこ}しずらすなどして、{別|べつ}の{見方|みかた}を{見出|みいだ}そうとしていきます。{学問|がくもん}の「{正解|せいかい}」はひとつとは{限|かぎ}りません。{学|まな}ぶこととは、{単純|たんじゅん}に{知識|ちしき}を{増|ふ}やすということではなく、ましてやテストで{覚|おぼ}えたことを{吐|は}き{出|だ}すことでもなく、それを{自分|じぶん}のものとして{再編成|さいへんせい}していくことであり、さらに{言|い}えば{自分|じぶん}の{物差|ものさ}しが{変|か}わり、{自分|じぶん}{自身|じしん}が{変|か}わっていくことなのです。そして、{思|おも}いがけない{大|だい}{発見|はっけん}や、{独創的|どくそうてき}なアイデアが{生|う}まれるかもしれません。

「{疑|うたが}う」という{言葉|ことば}は、{通常|つうじょう}は{否定的|ひていてき}な{意味|いみ}で{使|つか}われます。「{人|ひと}を{疑|うたが}う」と{言|い}えば、{普通|ふつう}はその{人|ひと}を{信用|しんよう}しないというのと{同義|どうぎ}なわけです。{私|わたし}も、{人|ひと}を{疑|うたが}って{生|い}きるよりも、できるだけ{人|ひと}を{信|しん}じて{生|い}きていたいと{思|おも}っています。しかし、{世|よ}の{中|なか}で{当|あ}たり{前|まえ}とされている{事柄|ことがら}を「{疑|うたが}う」ことが{必要|ひつよう}な{時|とき}もあります。「{常識|じょうしき}だから」という{一言|ひとこと}で{目|め}を{閉|と}ざし、それに{安易|あんい}に{取|と}り{込|こ}まれてしまうことなく、そこを{少|すこ}しずらしたところに{面白|おもしろ}いことを{見出|みいだ}していくために。それは、{何事|なにごと}も{信用|しんよう}しないというような{厭世的|えんせいてき}な{生|い}き{方|かた}に{繋|つな}がるのでなく、むしろ{創造的|そうぞうてき}で{豊|ゆた}かな{世界|せかい}を{紡|つむ}ぎだしていくための、{積極的|せっきょくてき}な{営|いとな}みなのです。`,
      arti: `"Mencoba meragukan akal sehat (hal yang dianggap umum)" — sebenarnya itulah juga awal dari ilmu (gakumon). Jika belajar (benkyō) memiliki sisi pasif, yaitu "memaksa diri berusaha", maka ilmu adalah "bertanya lalu belajar", sebuah tindakan yang sangat aktif. Melalui bertanya sebagai tindakan mandiri dan atas kehendak sendiri, kita meragukan cara pandang yang selama ini dianggap umum, lalu menggesernya sedikit, dan berusaha menemukan cara pandang lain. "Jawaban yang benar" dalam ilmu belum tentu hanya satu. Belajar bukan sekadar menambah pengetahuan, apalagi memuntahkan hafalan saat ujian, melainkan menata ulang pengetahuan itu sebagai milik sendiri; lebih jauh lagi, berarti tolok ukur kita berubah dan diri kita sendiri pun berubah. Lalu, mungkin akan lahir penemuan besar yang tak terduga atau ide yang orisinal.

Kata "meragukan" biasanya dipakai dengan makna negatif. Kalau dikatakan "meragukan orang", biasanya artinya sama dengan tidak memercayai orang itu. Saya pun lebih ingin hidup dengan memercayai orang sebisa mungkin daripada hidup sambil meragukan orang. Akan tetapi, ada kalanya kita perlu "meragukan" hal-hal yang dianggap wajar di masyarakat — agar kita tidak menutup mata dengan satu kata "karena itu akal sehat" lalu dengan mudah terseret olehnya, melainkan menemukan hal menarik di tempat yang sedikit bergeser dari situ. Itu bukan sesuatu yang mengarah pada cara hidup pesimis yang tidak memercayai apa pun, melainkan justru kegiatan aktif untuk merajut dunia yang kreatif dan kaya.`,
    },

    // ── 問題9 (2)：カタクリとアリ ──
    "9-2": {
      yomi: `{春|はる}に{美|うつく}しい{花|はな}をさかせるカタクリは、アリに{種|たね}まきをさせるという{驚|おどろ}くべき{戦略|せんりゃく}を{持|も}っている。カタクリの{種|たね}が{熟|じゅく}すのは{花|はな}が{咲|さ}いてから、およそ2ヶ{月|げつ}{後|ご}だ。はじけて{地面|じめん}に{落|お}ちた{種|たね}は、すぐにアリがやってきて{巣|す}に{運|はこ}んでいってしまう。{薄茶色|うすちゃいろ}の{種|たね}の{先|さき}に{白|しろ}い{部分|ぶぶん}がある。これが{脂肪分|しぼうぶん}に{富|と}んだエライオゾームと{呼|よ}ばれるものだ。アリはこの{部分|ぶぶん}に{引|ひ}かれることが{分|わ}かっている。エライオゾームはアリにとってそれほど{魅力的|みりょくてき}な{物質|ぶっしつ}であるらしい。

{運|はこ}ばれた{種|たね}はアリの{巣|す}に{貯蔵|ちょぞう}されることになるが、アリは{二日|ふつか}もすると、せっかく{運|はこ}び{込|こ}んだ{種|たね}を{巣|す}から{運|はこ}び{出|だ}してしまう。{種|たね}は{巣|す}の{中|なか}{深|ふか}いところに{持|も}ち{込|こ}まれても{発芽|はつが}ができないから、これはカタクリにとって{好都合|こうつごう}だ。どうしてアリがせっかく{集|あつ}めた{種|たね}を{棄|す}ててしまうのだろうか。{実|じつ}は{熟|じゅく}して{地上|ちじょう}に{落|お}ちたばかりのカタクリの{種|たね}についているエライオゾームは、アリの{幼虫|ようちゅう}が{共通|きょうつう}して{持|も}つにおいに{近|ちか}い{物質|ぶっしつ}を{持|も}っているのだという。アリは{種|たね}を{食|た}べ{物|もの}として{集|あつ}めるわけではなく、{自分|じぶん}の{幼虫|ようちゅう}と{思|おも}って{巣|す}に{持|も}ち{帰|かえ}るらしいというわけだ。ところが{種|たね}がはじけてから24{時間|じかん}もすると、アリの{死|し}んだ{幼虫|ようちゅう}のにおいに{変|か}わるのだそうだ。それで{今度|こんど}はアリは{種|たね}を{巣|す}の{外|そと}に{捨|す}てに{行|い}くのだというから{恐|おそ}れ{入|い}ってしまう。`,
      arti: `Katakuri (bunga lili erythronium), yang mekar indah pada musim semi, memiliki strategi menakjubkan: menyuruh semut menyebarkan bijinya. Biji katakuri matang sekitar dua bulan setelah bunganya mekar. Biji yang pecah dan jatuh ke tanah segera didatangi semut dan dibawa ke sarangnya. Di ujung biji yang berwarna cokelat muda terdapat bagian putih. Inilah yang disebut elaiosom, yang kaya akan lemak. Diketahui bahwa semut tertarik pada bagian ini. Rupanya elaiosom adalah zat yang sangat menarik bagi semut.

Biji yang dibawa akan disimpan di sarang semut, tetapi setelah sekitar dua hari, semut mengeluarkan lagi biji yang susah payah dibawanya masuk. Biji tidak bisa berkecambah kalau dibawa ke bagian dalam sarang yang dalam, jadi ini menguntungkan bagi katakuri. Mengapa semut membuang biji yang susah payah dikumpulkannya? Ternyata elaiosom pada biji katakuri yang baru matang dan jatuh ke tanah mengandung zat yang mirip dengan bau yang umumnya dimiliki larva semut. Artinya, semut rupanya tidak mengumpulkan biji sebagai makanan, melainkan membawanya pulang ke sarang karena mengira itu larvanya sendiri. Namun, sekitar 24 jam setelah biji pecah, baunya berubah menjadi bau larva semut yang sudah mati. Karena itu, kali ini semut pergi membuang biji itu ke luar sarang — sungguh mengagumkan.`,
    },

    // ── 問題9 (3)：こどもの模倣 ──
    "9-3": {
      yomi: `{子|こ}は{親|おや}の{鏡|かがみ}と{言|い}われる。こどもを{見|み}ればおやが{分|わ}かるということだが、こどもは{親|おや}のしぐさ、もの{言|い}いを{実|じつ}によく{見|み}ている。{三|みっ}つにもなれば{如何|いか}にも{生意気|なまいき}に{反論|はんろん}などをするものだが、「そんな{言|い}い{方|かた}をするもんじゃない」といったら{負|ま}けだ。「あら、あなたの{言|い}い{方|かた}とそっくりよ」と{横|よこ}からチクリと{揶揄|やゆ}されるのがオチだから。{全|まった}くこどもは{物真似|ものまね}の{名人|めいじん}なのである。アイドル{歌手|かしゅ}からくまのプーさんの{喋|しゃべ}り{方|かた}まで、{見境|みさかい}なく{貪欲|どんよく}にコピーしてしまう。コピーすることによってこどもたちはすべてを{獲得|かくとく}してゆく。こどもたちは{個性的|こせいてき}であろうなどと{少|すこ}しも{考|かんが}えない。みんなと{同|おな}じようにできることが{嬉|うれ}しくてたまらないのだ。

だが、こどもの{再現|さいげん}のありさまを{少|すこ}し{注意|ちゅうい}ぶかく{観察|かんさつ}していると、この{性能|せいのう}の{良|よ}い{複写機|ふくしゃき}の、{本当|ほんとう}の{性能|せいのう}の{良|よ}さが{見|み}えてくる。{大人|おとな}たちの{考|かんが}えるコピーとはいささか{違|ちが}うのである。こどもたちの{身体的|しんたいてき}{能力|のうりょく}、{言語的|げんごてき}{能力|のうりょく}が{未熟|みじゅく}なのでオリジナルなものの{完璧|かんぺき}なコピーができない。{従|したが}ってこどもはオリジナルなものを{自由|じゆう}に{変改|へんかい}する。{切|き}り{捨|す}て、{誇張|こちょう}する。それはオリジナルなものからの{絶妙|ぜつみょう}な{逸脱|いつだつ}なのである。この{模倣|もほう}{行為|こうい}は、むしろ、{一人|ひとり}のこどもの{生|い}きる{全体|ぜんたい}のなかで、{今|いま}{全|まった}く{新|あたら}しく{意味付|いみづ}けられた{別|べつ}のオリジナルなものが{生成|せいせい}していると{言|い}ってもいいものなのだ。

こどもが{模倣|もほう}をしながらも、とりわけ{個性的|こせいてき}であるのは、このような{模倣|もほう}モデルからの{自由|じゆう}な{逸脱|いつだつ}があるからだ。{私|わたし}たちがこどもをみて{楽|たの}しむのも、その{逸脱|いつだつ}のほほえましさなのではないか。`,
      arti: `Ada ungkapan bahwa anak adalah cermin orang tuanya. Artinya, kalau melihat anaknya kita tahu orang tuanya seperti apa; anak-anak memang sangat memperhatikan gerak-gerik dan cara bicara orang tuanya. Begitu berumur tiga tahun, mereka mulai membantah dengan sangat sok tahu, tetapi kalau kita berkata "jangan bicara seperti itu", kita kalah. Sebab ujung-ujungnya kita akan disindir dari samping, "Lho, persis sama dengan caramu bicara, kan." Anak-anak benar-benar ahli meniru. Dari penyanyi idola sampai cara bicara Winnie the Pooh, semuanya mereka tiru dengan rakus tanpa pilih-pilih. Dengan meniru, anak-anak memperoleh segalanya. Mereka sama sekali tidak berpikir untuk menjadi unik. Mereka senang sekali bisa melakukan hal yang sama seperti orang lain.

Namun, kalau kita sedikit cermat mengamati cara anak-anak meniru, kita bisa melihat kehebatan sejati dari "mesin fotokopi berkinerja tinggi" ini. Peniruannya agak berbeda dengan yang dibayangkan orang dewasa. Karena kemampuan fisik dan kemampuan bahasa anak-anak belum matang, mereka tidak bisa meniru aslinya dengan sempurna. Akibatnya, anak-anak mengubah aslinya dengan bebas. Mereka memangkas dan melebih-lebihkan. Itu adalah penyimpangan yang sangat pas dari aslinya. Tindakan meniru ini justru bisa dikatakan sebagai lahirnya sesuatu yang asli lain, yang kini diberi makna yang sama sekali baru, di dalam keseluruhan hidup seorang anak.

Anak-anak, meskipun meniru, tetap sangat unik karena ada penyimpangan bebas seperti ini dari model yang ditiru. Bukankah yang membuat kita senang melihat anak-anak juga adalah lucunya penyimpangan itu?`,
    },

    // ── 問題9 (4)：ユニバーサルデザインと平等 ──
    "9-4": {
      yomi: `{人々|ひとびと}の{肉体|にくたい}には、{実|じつ}は{大|おお}きな{幅|はば}がある。{生|う}まれ{持|も}った{個性|こせい}があり、{成長|せいちょう}の{段階|だんかい}で{著|いちじる}しく{変化|へんか}するこうした{人間|にんげん}が{使用|しよう}するものを{作|つく}る{際|さい}の{方向性|ほうこうせい}には、{二|ふた}つの{選択肢|せんたくし}がある。{一|ひと}つは、{異|こと}なる{体格|たいかく}や{身体|しんたい}{能力|のうりょく}を{持|も}つ{多数|たすう}の{人々|ひとびと}が{同|おな}じものや{環境|かんきょう}を{平等|びょうどう}に{使|つか}えるようにする{方法|ほうほう}。もう{一|ひと}つは、それぞれの{体格|たいかく}や{能力|のうりょく}に{合|あ}わせて、いくつかのサイズや{機能|きのう}を{用意|ようい}する{方法|ほうほう}である。{前者|ぜんしゃ}は{経済的|けいざいてき}に{有利|ゆうり}な{試|こころ}みだが、その{効果|こうか}に{限界|げんかい}があるケースが{多|おお}い。{後者|こうしゃ}は{多様|たよう}なユーザーに{対応|たいおう}できるが、{開発|かいはつ}に{時間|じかん}がかかり、しかも{作|つく}られたもののコストが{上昇|じょうしょう}してしまうという{問題性|もんだいせい}を{孕|はら}んでいる。

ユニバーサルデザイン（UD）では、{使|つか}い{手|て}の{様々|さまざま}な{問題|もんだい}{負担|ふたん}を{抑|おさ}えつつ、{個人|こじん}に{不平等感|ふびょうどうかん}を{抱|いだ}かせないデザインやものづくりが{求|もと}められている。デザインに{平等|びょうどう}という{意識|いしき}を{上手|じょうず}に{反映|はんえい}させていくために、{多様|たよう}な{使|つか}い{手|て}とできるだけ{接触|せっしょく}し{対話|たいわ}を{行|おこな}い、{使|つか}い{手|て}に{対|たい}する{知識|ちしき}と{体験|たいけん}を{広|ひろ}げることが{効果的|こうかてき}だ。{私|わたし}たちは{平等|びょうどう}という{感覚|かんかく}をどのような{時|とき}に{感|かん}じ、{考|かんが}えるのかという{点|てん}を、{見|み}つめ{直|なお}したい。

{私|わたし}たちが{平等|びょうどう}かどうかを{意識|いしき}するのは、{確|たし}かな{不平等|ふびょうどう}の{予感|よかん}や{印象|いんしょう}を{持|も}つときであることは{間違|まちが}いない。{平等|びょうどう}がきちんと{保証|ほしょう}されている{場合|ばあい}、その{状況|じょうきょう}は{私|わたし}たちにとって{自然|しぜん}なことであり、{問題|もんだい}{意識|いしき}が{芽生|めば}えることはない。しかしデザインやものづくりに{当|あ}たっては、{問題|もんだい}が{発生|はっせい}してから{平等|びょうどう}について{考|かんが}えるのではなく、ものやサービスに{常|つね}に{必要|ひつよう}な{普通|ふつう}の{意識|いしき}であるととらえたい。`,
      arti: `Tubuh manusia sebenarnya memiliki rentang perbedaan yang besar. Ada keunikan bawaan lahir, dan tubuh berubah drastis seiring tahap pertumbuhan. Dalam membuat benda yang digunakan oleh manusia seperti ini, ada dua pilihan arah. Pertama, cara yang membuat banyak orang dengan postur dan kemampuan fisik berbeda dapat menggunakan benda atau lingkungan yang sama secara setara. Kedua, cara menyediakan beberapa ukuran dan fungsi sesuai postur dan kemampuan masing-masing. Cara pertama menguntungkan secara ekonomi, tetapi dalam banyak kasus efektivitasnya terbatas. Cara kedua bisa melayani pengguna yang beragam, tetapi mengandung masalah: pengembangannya lama, dan biaya benda yang dibuat pun meningkat.

Dalam desain universal (UD), dibutuhkan desain dan pembuatan barang yang menekan berbagai beban masalah pengguna sambil tidak membuat individu merasa diperlakukan tidak setara. Agar kesadaran akan kesetaraan tercermin dengan baik dalam desain, efektif jika kita sebisa mungkin berinteraksi dan berdialog dengan pengguna yang beragam, serta memperluas pengetahuan dan pengalaman tentang pengguna. Saya ingin kita meninjau kembali kapan kita merasakan dan memikirkan rasa kesetaraan itu.

Tidak diragukan lagi bahwa kita menyadari setara atau tidaknya sesuatu ketika kita memiliki firasat atau kesan kuat adanya ketidaksetaraan. Jika kesetaraan terjamin dengan baik, keadaan itu wajar bagi kita dan kesadaran akan masalah tidak akan tumbuh. Namun, dalam desain dan pembuatan barang, saya ingin kesetaraan tidak baru dipikirkan setelah masalah muncul, melainkan dipandang sebagai kesadaran biasa yang selalu diperlukan untuk barang maupun layanan.`,
    },

    // ── 問題10：ロボットと心 ──
    "10": {
      yomi: `{以下|いか}は、{筆者|ひっしゃ}がほかの{研究員|けんきゅういん}とともに{開発|かいはつ}したロボットについて{書|か}かれた{文章|ぶんしょう}である。

{通常|つうじょう}、ロボットに{対|たい}するプログラミングは、センサから{取得|しゅとく}した{情報|じょうほう}に{応|おう}じてロボットが{何|なん}らかの{反応|はんのう}をするようなものを{作|つく}っていく。たとえば「{障害物|しょうがいぶつ}を{察知|さっち}したら{避|さ}ける」といった{具合|ぐあい}のものである。しかし、{僕|ぼく}はロボピーがもっと{適当|てきとう}に、{意味|いみ}のない{動|うご}きも{含|ふく}めてさまざまな{行動|こうどう}を{取|と}るようにしたのだ。

300{以上|いじょう}の{動作|どうさ}プログラムをし、{動作|どうさ}パターンが{次々|つぎつぎ}にどういう{順番|じゅんばん}で{発現|はつげん}するかというルールを700{以上|いじょう}プログラムした。その{結果|けっか}{複雑|ふくざつ}に、{多様|たよう}に{動|うご}くロボットが{実現|じつげん}された。ここまでやると、{自分|じぶん}たちでもプログラムがどう{作用|さよう}するかわからなくなる。{何|なに}に{反応|はんのう}して、どんな{行動|こうどう}をするか{予測|よそく}{不能|ふのう}になった。

そんなプログラミングをしておいたロボピーを{研究室|けんきゅうしつ}に{置|お}いていたら、{何|なに}が{起|お}こったか。

{僕|ぼく}らがミーティングをしているとき、{突然|とつぜん}ロボピーは{僕|ぼく}らの{音声|おんせい}を{認識|にんしき}し、「そうではないよ」と{言|い}って{手|て}をぶらぶらさせながらどこかへ{向|む}かって{歩|ある}きだしたのだ。それを{見|み}て{僕|ぼく}らは{呆気|あっけ}にとられながらも、ロボピーに{意思|いし}を{感|かん}じてしまった。{僕|ぼく}らの{話|はなし}を{聞|き}いていて、{彼|かれ}は{思|おも}うところがあり、だからどこかへ{行|い}ってしまったのだろう、と。

もちろんそれは、ロボピーの{中|なか}のあるプログラムが、{何|なに}かをきっかけに{作動|さどう}しただけのことだ。だがなにか{首尾一貫|しゅびいっかん}したひとつの{意思|いし}{決定|けってい}{機構|きこう}から{生|う}み{出|だ}された{行動|こうどう}であるかのように{見|み}えたのだ。

{僕|ぼく}はそのとき{確信|かくしん}した。「{心|こころ}とは、{観察|かんさつ}する{側|がわ}の{問題|もんだい}である」と。

{非常|ひじょう}に{単純|たんじゅん}な{機械|きかい}の{動|うご}きに「{心|こころ}を{感|かん}じますか」と{問|と}えば、{感|かん}じると{言|い}う{人|ひと}は{少|すく}ない。{多少|たしょう}{複雑|ふくざつ}でも、{原理|げんり}を{知|し}っていれば「それは{心|こころ}ではない」と{言|い}う。しかし、{人間|にんげん}は{複雑|ふくざつ}である。いや、{虫|むし}{程度|ていど}でもいい。{動|うご}きが{相当|そうとう}{以上|いじょう}に{複雑|ふくざつ}なものに{対|たい}しては、{相手|あいて}のことを{一|いち}から、すべては{理解|りかい}しきれない。{自分|じぶん}の{頭|あたま}の{中|なか}で{完全|かんぜん}に{再現|さいげん}しきれない、{解釈|かいしゃく}しきれない、{理解|りかい}しきれないほど{複雑|ふくざつ}なもの、{仕組|しく}みがよくわからないくらい{入|い}りくんだものが{目|め}の{前|まえ}にあると、「こいつは、{私|わたし}の{知|し}らないところで{勝手|かって}に{独立|どくりつ}して{考|かんが}え、{動|うご}いているのだろう」という{想像|そうぞう}が{働|はたら}く。その{浮|う}かんできた{想像|そうぞう}に{名前|なまえ}をつけずにはいられなくなる。それを「{心|こころ}」と{呼|よ}んでいるのだ。

{心|こころ}とは、{複雑|ふくざつ}に{動|うご}くモノに{現実的|げんじつてき}にあるというより、その{動|うご}きを{見|み}ている{側|がわ}の{脳|のう}が{想像|そうぞう}しているものなのだ。そしてその{心|こころ}は、{見|み}ている{側|がわ}の{自分|じぶん}にもないと{都合|つごう}が{悪|わる}い。とくに{人間|にんげん}{同士|どうし}であればお{互|たが}いに「{心|こころ}がある」と{感|かん}じてしまっている。だからひとはみな「{自分|じぶん}には{心|こころ}がある」とおもう。しかし{心|こころ}は、{実|じつ}は{自分|じぶん}の{中|なか}にいくら{問|と}い{合|あ}わせ、{内省|ないせい}してみてもしょうがない。{相手|あいて}を{観察|かんさつ}し、{想像|そうぞう}することでしかわからないものなのだ。`,
      arti: `Berikut ini adalah tulisan tentang robot yang dikembangkan penulis bersama peneliti lain.

Biasanya, pemrograman robot dibuat agar robot memberikan suatu reaksi sesuai informasi yang diperoleh dari sensor. Misalnya, semacam "jika mendeteksi rintangan, hindari". Namun, saya membuat Robovie bertindak dengan lebih asal-asalan, melakukan berbagai tindakan termasuk gerakan yang tidak bermakna.

Saya memprogram lebih dari 300 gerakan, dan lebih dari 700 aturan tentang urutan pola-pola gerakan itu muncul satu demi satu. Hasilnya, terwujudlah robot yang bergerak dengan rumit dan beragam. Kalau sudah sejauh ini, kami sendiri pun tidak tahu bagaimana program itu bekerja. Robot itu bereaksi terhadap apa dan melakukan tindakan apa menjadi tak terprediksi.

Apa yang terjadi ketika Robovie yang sudah diprogram seperti itu ditaruh di laboratorium?

Ketika kami sedang rapat, tiba-tiba Robovie mengenali suara kami, berkata "Bukan begitu," lalu mulai berjalan ke suatu tempat sambil mengayun-ayunkan tangannya. Melihat itu, meski tercengang, kami merasakan adanya kehendak pada Robovie. Kami pikir: ia mendengarkan pembicaraan kami, punya pendapat sendiri, dan karena itu pergi ke suatu tempat.

Tentu saja itu hanyalah salah satu program di dalam Robovie yang aktif karena dipicu sesuatu. Tetapi tindakan itu tampak seolah-olah dihasilkan oleh satu mekanisme pengambilan keputusan yang konsisten.

Saat itu saya yakin: "Hati (pikiran) adalah persoalan pihak yang mengamati."

Jika kita bertanya, "Apakah Anda merasakan adanya hati?" terhadap gerakan mesin yang sangat sederhana, sedikit orang yang akan menjawab ya. Sekalipun agak rumit, kalau tahu prinsipnya, orang akan berkata "Itu bukan hati." Namun, manusia itu rumit. Tidak, serangga pun boleh. Terhadap sesuatu yang gerakannya jauh lebih rumit, kita tidak dapat memahami semuanya dari awal. Ketika di depan kita ada sesuatu yang begitu rumit sehingga tidak bisa sepenuhnya kita tiru, tafsirkan, atau pahami di kepala sendiri — sesuatu yang begitu berbelit sampai mekanismenya tidak jelas — muncul bayangan, "Makhluk ini pasti berpikir dan bergerak sendiri secara mandiri, di luar sepengetahuanku." Kita jadi tak tahan untuk tidak memberi nama pada bayangan yang muncul itu. Itulah yang kita sebut "hati".

Hati bukanlah sesuatu yang nyata-nyata ada di dalam benda yang bergerak rumit, melainkan sesuatu yang dibayangkan oleh otak pihak yang melihat gerakan itu. Dan hati itu akan jadi tidak pas kalau tidak ada juga pada diri pihak yang melihat. Terutama sesama manusia, kita saling merasa "ia punya hati". Karena itu semua orang berpikir "aku punya hati". Namun, hati sebenarnya tidak akan ketemu sebanyak apa pun kita menanyai dan merenungi diri sendiri. Hati adalah sesuatu yang hanya bisa diketahui dengan mengamati dan membayangkan pihak lain.`,
    },

    // ── 問題11：メモを取ること ──
    "11": {
      yomi: `【{意見|いけん} A】
{私|わたし}は{普段|ふだん}からメモ{魔|ま}ですが、{人|ひと}の{講演|こうえん}に{行|い}くと、{必死|ひっし}にメモを{取|と}りながら{話|はなし}を{聞|き}きます。せっかくその{場|ば}にいるのだから、{最大限|さいだいげん}{吸収|きゅうしゅう}して{帰|かえ}ろうと{考|かんが}えます。あるいは{友達|ともだち}とくだらない{話|はなし}をしている{時|とき}でも、「あれ？」と{思|おも}ったことや、「いい{話|はなし}だ」と{思|おも}ったことは、{何|なん}でもその{場|ば}でメモを{取|と}るようにしています。そこで{何|なに}を{感|かん}じたり、{新|あたら}しく{知|し}り{得|え}たものは、{別|べつ}の{機会|きかい}に{自分|じぶん}の{役|やく}に{立|た}つかもしれないからです。

{新|あたら}しい{発想|はっそう}や{考|かんが}え{方|かた}のヒントを{得|え}たいといつも{問題|もんだい}{意識|いしき}を{持|も}っていれば、{何気|なにげ}ない{人|ひと}の{発言|はつげん}のなかにも{発見|はっけん}があるはずです。メモをとらなければ{忘|わす}れてしまいますので、{必然的|ひつぜんてき}にメモをとることになります。{手|て}を{動|うご}かして、{記録|きろく}を{取|と}る{結果|けっか}、{記憶|きおく}にも{残|のこ}りやすくなります。こうして{意識化|いしきか}・{可視化|かしか}することが{大切|たいせつ}なのです。

【{意見|いけん} B】
{話|はなし}を{聞|き}いている{時|とき}に、{視線|しせん}も{上|あ}げずにただひたすらメモを{取|と}っている{人|ひと}がいる。{熱心|ねっしん}さは{伝|つた}わるが、{質問|しつもん}もされないと{興味|きょうみ}や{関心|かんしん}を{持|も}って{聞|き}いてもらえているのか{不安|ふあん}になる。このような{人|ひと}は、メモを{取|と}ることが{目的|もくてき}になってしまっているのではないか。{多|おお}くの{情報|じょうほう}を{正確|せいかく}に{書|か}きとることに{集中|しゅうちゅう}してしまい、{肝心|かんじん}な{内容|ないよう}が{頭|あたま}に{入|はい}っていないのだ。

しかしどんなに{正確|せいかく}にメモを{取|と}ったとしても、{内容|ないよう}が{理解|りかい}できていなければ、あとでメモを{活|い}かすこともできない。{受|う}け{身|み}ではなく、{自分|じぶん}に{必要|ひつよう}な{情報|じょうほう}は{何|なに}か、{自分|じぶん}だったらどうするかというように{自分|じぶん}と{関連付|かんれんづ}けて、{主体的|しゅたいてき}に{考|かんが}えながら{聞|き}くことが{必要|ひつよう}だ。メモは、あとで{話|はなし}を{整理|せいり}する{際|さい}の{手|て}がかりになれば{十分|じゅうぶん}である。`,
      arti: `【Pendapat A】
Saya memang dari dulu "maniak mencatat"; kalau menghadiri ceramah orang, saya mendengarkan sambil mencatat mati-matian. Karena sudah susah payah hadir di sana, saya ingin pulang dengan menyerap sebanyak-banyaknya. Bahkan ketika sedang mengobrol hal remeh dengan teman pun, apa saja yang membuat saya berpikir "lho?" atau "ini cerita bagus" langsung saya catat di tempat. Sebab apa yang saya rasakan atau ketahui di sana mungkin akan berguna bagi saya di kesempatan lain.

Kalau kita selalu punya kesadaran akan masalah — ingin mendapatkan petunjuk untuk gagasan dan cara berpikir baru — pasti ada penemuan bahkan dalam ucapan orang yang biasa-biasa saja. Kalau tidak dicatat kita akan lupa, jadi mau tidak mau kita mencatat. Dengan menggerakkan tangan dan membuat catatan, hal itu juga jadi lebih mudah diingat. Menyadarkan dan memvisualkan dengan cara ini itulah yang penting.

【Pendapat B】
Ada orang yang ketika mendengarkan pembicaraan terus-menerus mencatat tanpa mengangkat pandangan sama sekali. Kesungguhannya memang terasa, tetapi kalau ia juga tidak bertanya, saya jadi cemas apakah ia benar-benar mendengarkan dengan minat dan perhatian. Bukankah orang seperti ini sudah menjadikan mencatat sebagai tujuan? Ia terlalu fokus mencatat banyak informasi dengan akurat, sehingga isi yang penting tidak masuk ke kepalanya.

Namun, seakurat apa pun catatannya, kalau isinya tidak dipahami, catatan itu tidak akan bisa dimanfaatkan nanti. Kita perlu mendengarkan bukan secara pasif, melainkan sambil berpikir aktif dengan mengaitkannya pada diri sendiri — informasi apa yang saya perlukan, apa yang akan saya lakukan kalau saya di posisi itu. Catatan sudah cukup jika menjadi petunjuk saat menata ulang pembicaraan nanti.`,
    },

    // ── 問題12：教育への過剰な期待 ──
    "12": {
      yomi: `{企業|きぎょう}にとっても、{人々|ひとびと}にとっても、さきのみえない{不安|ふあん}な{時代|じだい}である。そしてそんな{不安|ふあん}な{時代|じだい}を{生|い}きる{子供|こども}たちに、「{生|い}きる{力|ちから}」をつけさせたいという「{親心|おやごころ}」は、わからないではない。また{企業|きぎょう}の{経営者|けいえいしゃ}が、{少|すこ}しでも{優秀|ゆうしゅう}な{人材|じんざい}を{取|と}り{込|こ}みたいと{考|かんが}えるのは、{必然|ひつぜん}ではあるだろう。{地域|ちいき}の{衰退|すいたい}や{政治|せいじ}の{空洞化|くうどうか}を{食|く}い{止|と}められる{人間|にんげん}が{現|あらわ}れてくれれば、わたしたちの{不安|ふあん}な{気持|きも}ちも、いくぶんなりとも{和|やわ}らぐというものである。

しかし、まがりなりにも{教育学|きょういくがく}を{専門|せんもん}とする{者|もの}として、ここは{言|い}わせてほしい。{現代|げんだい}{日本|にほん}{社会|しゃかい}の{問題|もんだい}を、なんでもかんでも{教育|きょういく}で{解決|かいけつ}しようというのはいただけない。

{確|たし}かに{教育|きょういく}は、{人間|にんげん}を{育|そだ}てることを{通|つう}じて、{人々|ひとびと}の{人生|じんせい}や{社会|しゃかい}の{未来|みらい}に{対|たい}して、{一定|いってい}の{貢献|こうけん}を{為|な}すことができる。しかしわたしに{言|い}わせれば、そのような{教育|きょういく}の{役立|やくだ}ちの{度合|どあ}いは、{決|けっ}して{大|おお}きいものではない。{教育|きょういく}には{不確定性|ふかくていせい}がつきものである。これはもう、{教員|きょういん}{養成|ようせい}のテキストでも{論|ろん}じられる「{教育学|きょういくがく}の{基本|きほん}のキ」だ。{教|おし}えたからといって、その{分|ぶん}だけ{子|こ}どもが{育|そだ}つというわけではないし、{教|おし}えたつもりがないのに、{子供|こども}の{方|ほう}が{勝手|かって}に{学|まな}んでいるということもある。もちろん{教師|きょうし}も{教育|きょういく}{学者|がくしゃ}も、その{確率論的|かくりつろんてき}な{育|そだ}ちをどうにかして{望|のぞ}ましい{方向|ほうこう}に{向|む}ける{努力|どりょく}はするが、なんと{言|い}っても{育|そだ}つのは{子|こ}どもなのだから、「{最小限|さいしょうげん}のコストで{最大限|さいだいげん}のメリットを{達成|たっせい}しなさい」「{必要|ひつよう}な{人材|じんざい}をきっちりきっかり、{耳|みみ}をそろえて{社会|しゃかい}に{納品|のうひん}しなさい」などという{注文|ちゅうもん}を、そうそう{請|う}け{負|お}うことはできない。

それにそもそも{教育|きょういく}は、{経済|けいざい}のためだけのものでも、{共同体|きょうどうたい}の{維持|いじ}のためだけのものでも、{家族|かぞく}のためだけのものでもない。{市場|しじょう}も、{国家|こっか}も、{地域|ちいき}{共同体|きょうどうたい}も、そして{家族|かぞく}も、もっと{役|やく}に{立|た}つ{教育|きょういく}をしろ、{意味|いみ}のある{教育|きょういく}をしろと{言|い}うけれど、それぞれ{注文|ちゅうもん}はバラバラなのである。もちろん{教育|きょういく}は、それぞれの{要求|ようきゅう}に（{確率論的|かくりつろんてき}に）{少|すこ}しずつ{貢献|こうけん}はする。しかしそれをもって{推|お}し{進|すす}めて、どれかの{目的|もくてき}のためだけに{合理化|ごうりか}・{効率化|こうりつか}しようとすれば、{教育|きょういく}はずいぶんと{歪|いびつ}なものになる。まして、みんながみんな{教育|きょういく}からそれぞれの{利益|りえき}を{引|ひ}き{出|だ}そうと{躍起|やっき}になっても、そんな{過剰|かじょう}な{期待|きたい}に{引|ひ}き{裂|さ}かれた{教育|きょういく}がうまく{機能|きのう}するとは{思|おも}えない。

（{中略|ちゅうりゃく}）

{停滞|ていたい}の{続|つづ}くこの{社会|しゃかい}で、{誰|だれ}もが{不安|ふあん}に{押|お}しつぶされ、ちょうどその{分|ぶん}だけ{教育|きょういく}に{過剰|かじょう}な{期待|きたい}や{希望|きぼう}を{託|たく}そうとしている。その{結果|けっか}、{教育|きょういく}、なかでも{学校|がっこう}{教育|きょういく}が、{改革|かいかく}の{渦|うず}に{呑|の}まれ、{余裕|よゆう}をなくしそうになっている。{教育|きょういく}に{多|おお}くを{求|もと}めすぎるなと{警報|けいほう}を{鳴|な}らすことは、{結果的|けっかてき}に、この{社会|しゃかい}と{教育|きょういく}を{持続|じぞく}させるためにいま{一番|いちばん}{必要|ひつよう}なことなのではないだろうか。`,
      arti: `Ini adalah zaman yang penuh kecemasan dan masa depannya tidak terlihat, baik bagi perusahaan maupun bagi masyarakat. Karena itu, "kasih sayang orang tua" yang ingin membekali anak-anak yang hidup di zaman cemas ini dengan "daya hidup" bukannya tidak bisa dipahami. Wajar pula jika para pemimpin perusahaan ingin merekrut sumber daya manusia yang sedikit lebih unggul. Jika muncul orang yang mampu menahan kemunduran daerah atau kekosongan politik, perasaan cemas kita pun tentu akan sedikit mereda.

Namun, sebagai orang yang — meskipun belum sempurna — menekuni ilmu pendidikan, izinkan saya berkata: tidak bisa diterima jika semua masalah masyarakat Jepang modern hendak diselesaikan lewat pendidikan.

Memang benar, melalui membesarkan manusia, pendidikan dapat memberi sumbangan tertentu bagi kehidupan orang dan masa depan masyarakat. Namun menurut saya, kadar kegunaan pendidikan semacam itu sama sekali tidak besar. Pendidikan selalu disertai ketidakpastian. Ini adalah "dasar paling dasar ilmu pendidikan" yang dibahas bahkan di buku teks pendidikan guru. Bukan berarti anak tumbuh sebanyak yang diajarkan; ada pula kalanya anak belajar sendiri padahal kita tidak merasa mengajarkannya. Tentu guru dan ahli pendidikan berusaha mengarahkan pertumbuhan yang bersifat probabilistik itu ke arah yang diinginkan, tetapi bagaimanapun yang tumbuh adalah anak itu sendiri, sehingga kami tidak bisa begitu saja menerima pesanan seperti "capailah manfaat maksimal dengan biaya minimal" atau "serahkan sumber daya manusia yang dibutuhkan kepada masyarakat secara tepat dan lengkap".

Lagi pula, pada dasarnya pendidikan bukan semata-mata untuk ekonomi, bukan semata-mata untuk menjaga komunitas, dan bukan pula semata-mata untuk keluarga. Pasar, negara, komunitas daerah, dan keluarga semuanya berkata "berikan pendidikan yang lebih berguna, pendidikan yang bermakna", tetapi pesanan mereka masing-masing berbeda-beda. Tentu pendidikan sedikit demi sedikit (secara probabilistik) memberi sumbangan bagi tuntutan masing-masing. Namun, jika atas dasar itu pendidikan didorong untuk dirasionalisasi dan diefisienkan hanya demi salah satu tujuan, pendidikan akan menjadi sangat timpang. Apalagi jika semua orang berlomba-lomba menarik keuntungan masing-masing dari pendidikan, sulit dibayangkan pendidikan yang tercabik-cabik oleh harapan berlebihan seperti itu dapat berfungsi dengan baik.

(dihilangkan sebagian)

Di masyarakat yang terus mengalami stagnasi ini, semua orang tertekan oleh kecemasan, dan sebanding dengan itu mereka berusaha menitipkan harapan dan cita-cita berlebihan kepada pendidikan. Akibatnya, pendidikan — terutama pendidikan sekolah — tertelan pusaran reformasi dan hampir kehilangan ruang geraknya. Bukankah membunyikan peringatan "jangan menuntut terlalu banyak dari pendidikan" justru merupakan hal yang paling dibutuhkan sekarang agar masyarakat dan pendidikan ini bisa terus bertahan?`,
    },

    // ── 問題13：木原市健康づくりセンター いきいき運動教室 ──
    "13": {
      yomi: `{健康|けんこう}のために、{楽|たの}しく{運動|うんどう}しませんか。{健康|けんこう}づくりセンターでは、{三|みっ}つのクラスを{毎週|まいしゅう}{開講|かいこう}しています（{通年|つうねん}{開講|かいこう}）。1{回|かい}ごとの{予約制|よやくせい}なので、ご{自分|じぶん}のペースで{受講|じゅこう}ができます。

【{対象|たいしょう}】
{下|した}の①②{両方|りょうほう}に{当|あ}てはまる{方|かた}
①{市内|しない}{在住|ざいじゅう}、もしくは{市内|しない}で{勤務|きんむ}している18{歳|さい}{以上|いじょう}の{方|かた}
②{健康|けんこう}づくりセンターの{健康度|けんこうど}{測定|そくてい}を、{受講日|じゅこうび}から{過去|かこ}1{年|ねん}{以内|いない}に{受|う}けた{方|かた}
※{健康度|けんこうど}{測定|そくてい}の{内容|ないよう}や{予約|よやく}{方法|ほうほう}{等|とう}の{詳細|しょうさい}は、ホームページでご{確認|かくにん}ください。

【クラス】
{水曜日|すいようび}：ダンスA（{初心者|しょしんしゃ}でもできるゆっくりしたダンス）
{木曜日|もくようび}：ダンスB（リズムに{合|あ}わせて{緩|ゆる}く{動|うご}くダンス）
{金曜日|きんようび}：{体操|たいそう}（{全身|ぜんしん}を{使|つか}った{体操|たいそう}）

{時間|じかん}：10:40〜11:40　{会場|かいじょう}：{第一|だいいち}{運動室|うんどうしつ}　{料金|りょうきん}：1{回|かい}500{円|えん}

【{利用|りよう}{方法|ほうほう}】
◆{予約|よやく}の{仕組|しく}み
・{申|もう}し{込|こ}みは{各|かく}クラス{毎回|まいかい}{必要|ひつよう}で、{先着順|せんちゃくじゅん}です（{各|かく}クラス{定員|ていいん}20{名|めい}）
・{予約|よやく}の{種類|しゅるい}は、{基本|きほん}{予約|よやく}と{追加|ついか}{予約|よやく}があります。

{基本|きほん}{予約|よやく}：すべてのクラスの{中|なか}から{週|しゅう}に1{回|かい}{分|ぶん}だけ{予約|よやく}できます。{基本|きほん}{予約|よやく}は、{受講日|じゅこうび}の{前|まえ}の{週|しゅう}から{可能|かのう}です。

{追加|ついか}{予約|よやく}：{実施日|じっしび}の2{日|か}{前|まえ}に{定員|ていいん}に{達|たっ}していないクラスに{限|かぎ}り、{基本|きほん}{予約|よやく}1{回|かい}{分|ぶん}のほかに{追加|ついか}{予約|よやく}ができます。{追加|ついか}{予約|よやく}が{可能|かのう}な{回数|かいすう}は{週|しゅう}1{回|かい}のみです。{空|あ}きは2{日|か}{前|まえ}から、{健康|けんこう}づくりセンター{窓口|まどぐち}か{電話|でんわ}で{確認|かくにん}できます。

◆{予約|よやく}{方法|ほうほう}
・いきいき{運動|うんどう}{教室|きょうしつ}の{予約|よやく}が{初|はじ}めての{方|かた}は、{健康度|けんこうど}{測定|そくてい}の{結果票|けっかひょう}をお{持|も}ちになり、{窓口|まどぐち}で{予約|よやく}してください。{受講者|じゅこうしゃ}カードを{作|つく}ります。
・{予約|よやく}が2{回目|かいめ}{以降|いこう}の{方|かた}は、{健康|けんこう}づくりセンターにある{予約機|よやくき}か{電話|でんわ}でしてください。

◆{料金|りょうきん}の{支払|しはら}い
・{受講日|じゅこうび}{当日|とうじつ}に、{自動|じどう}{受付|うけつけ}{支払機|しはらいき}で{料金|りょうきん}を{支払|しはら}ってください（{受講者|じゅこうしゃ}カードが{必要|ひつよう}です。{忘|わす}れた{方|かた}は{窓口|まどぐち}で{対応|たいおう}します）。

{木原市|きはらし}{健康|けんこう}づくりセンター {電話|でんわ}：02-1124-45`,
      arti: `Mari berolahraga dengan gembira demi kesehatan! Pusat Promosi Kesehatan membuka tiga kelas setiap minggu (dibuka sepanjang tahun). Karena sistemnya pemesanan per sesi, Anda bisa mengikuti kelas sesuai kecepatan Anda sendiri.

【Peserta】
Orang yang memenuhi kedua syarat ① dan ② di bawah
① Berusia 18 tahun ke atas dan tinggal di dalam kota atau bekerja di dalam kota
② Telah menjalani pengukuran tingkat kesehatan di Pusat Promosi Kesehatan dalam 1 tahun terakhir terhitung dari hari kelas
※ Untuk rincian isi pengukuran tingkat kesehatan, cara pemesanannya, dll., silakan cek di situs web.

【Kelas】
Rabu: Dansa A (dansa pelan yang bisa dilakukan pemula)
Kamis: Dansa B (dansa dengan gerakan santai mengikuti irama)
Jumat: Senam (senam yang menggunakan seluruh tubuh)

Waktu: 10.40–11.40  Tempat: Ruang Olahraga 1  Biaya: 500 yen per sesi

【Cara penggunaan】
◆ Sistem pemesanan
• Pendaftaran diperlukan setiap kali untuk setiap kelas, berdasarkan siapa cepat dia dapat (kapasitas tiap kelas 20 orang)
• Jenis pemesanan ada dua: pemesanan dasar dan pemesanan tambahan.

Pemesanan dasar: Anda hanya bisa memesan satu sesi per minggu dari semua kelas. Pemesanan dasar bisa dilakukan mulai minggu sebelum hari kelas.

Pemesanan tambahan: Khusus untuk kelas yang belum penuh 2 hari sebelum hari pelaksanaan, Anda bisa memesan tambahan selain satu sesi pemesanan dasar. Pemesanan tambahan hanya bisa dilakukan satu kali per minggu. Ketersediaan tempat bisa dicek mulai 2 hari sebelumnya di loket Pusat Promosi Kesehatan atau lewat telepon.

◆ Cara memesan
• Bagi yang baru pertama kali memesan Kelas Olahraga Ikiiki, silakan bawa lembar hasil pengukuran tingkat kesehatan dan pesan di loket. Kami akan membuatkan kartu peserta.
• Bagi yang memesan untuk kedua kalinya dan seterusnya, silakan memesan lewat mesin pemesanan di Pusat Promosi Kesehatan atau lewat telepon.

◆ Pembayaran biaya
• Pada hari kelas, bayarlah biaya di mesin penerimaan dan pembayaran otomatis (kartu peserta diperlukan; bagi yang lupa membawanya, akan dilayani di loket).

Pusat Promosi Kesehatan Kota Kihara  Telepon: 02-1124-45`,
    },
  },
};
