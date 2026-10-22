import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2013
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1312: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{関係者|かんけいしゃ}から{話|はなし}を{聞|き}いて、ようやく{現状|げんじょう}が【{把握|はあく}】できた。",
      arti: "Setelah mendengar dari pihak terkait, akhirnya saya bisa 【memahami】 keadaan sekarang.",
    },
    2: {
      yomi: "{社長|しゃちょう}の{発言|はつげん}に【{憤|いきどお}り】を{感|かん}じる。",
      arti: "Saya merasa 【geram/marah】 atas ucapan direktur.",
      optArti: ["ketergesaan, gelisah (焦り)", "keterpakuan, kecermatan (こだわり)", "kegeraman, amarah (憤り)", "kemarahan (怒り)"],
    },
    3: {
      yomi: "その{話|はなし}の【{趣旨|しゅし}】がよくわからなかった。",
      arti: "Saya tidak begitu memahami 【maksud/pokok】 pembicaraan itu.",
    },
    4: {
      yomi: "{兄|あに}は{大学|だいがく}で【{日夜|にちや}】{研究|けんきゅう}に{励|はげ}んでいる。",
      arti: "Kakak saya tekun meneliti di universitas 【siang dan malam】.",
    },
    5: {
      yomi: "{川田|かわた}さんは{最後|さいご}まで{自分|じぶん}の{主張|しゅちょう}を【{貫|つらぬ}いた】。",
      arti: "Kawata-san 【mempertahankan teguh】 pendapatnya sampai akhir.",
    },
    6: {
      yomi: "この30{年|ねん}で、この{国|くに}の【{貧富|ひんぷ}】の{差|さ}は{縮|ちぢ}まってきている。",
      arti: "Dalam 30 tahun ini, kesenjangan 【kaya-miskin】 di negara ini makin menyempit.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{問題|もんだい}の{再発|さいはつ}{防止|ぼうし}のために、{何度|なんど}も{会議|かいぎ}を{開|ひら}いて{対策|たいさく}を（　）。",
      arti: "Untuk mencegah masalah terulang, kami berkali-kali rapat dan (…) langkah penanggulangannya.",
      optYomi: ["{培|つちか}った", "{築|きず}いた", "{練|ね}った", "{磨|みが}いた"],
      optArti: ["memupuk", "membangun", "menggodok, mematangkan (rencana)", "mengasah"],
    },
    8: {
      yomi: "{私|わたし}はスポーツなら{何|なん}でも{好|す}きだが、（　）サッカーが{大好|だいす}きだ。",
      arti: "Saya suka olahraga apa saja, tetapi (…) sepak bola.",
      optArti: ["akhirnya, makin", "persis, benar-benar", "lebih lagi", "terutama, khususnya"],
    },
    9: {
      yomi: "{職場|しょくば}の{環境|かんきょう}に{満足|まんぞく}していたので、その{当時|とうじ}は{転職|てんしょく}など{全|まった}く（　）になかった。",
      arti: "Karena puas dengan lingkungan kerja, waktu itu pindah kerja sama sekali tidak ada di (…).",
      optYomi: ["{念頭|ねんとう}", "{本心|ほんしん}", "{念願|ねんがん}", "{内心|ないしん}"],
      optArti: ["benak, pikiran", "isi hati sebenarnya", "keinginan lama", "dalam hati"],
    },
    10: {
      yomi: "{妹|いもうと}は{今日|きょう}が{初|はじ}めてのデートらしく、{朝|あさ}から（　）して{落|お}ち{着|つ}かない{様子|ようす}だ。",
      arti: "Sepertinya hari ini kencan pertama adik perempuan saya; sejak pagi ia (…) dan tampak tidak tenang.",
      optArti: ["goyah, bergoyang", "gelisah, tidak tenang", "berjalan-jalan santai", "terisak-isak"],
    },
    11: {
      yomi: "{社長|しゃちょう}は、{会社|かいしゃ}の{将来|しょうらい}を（　）{人材|じんざい}の{育成|いくせい}に{力|ちから}を{入|い}れている。",
      arti: "Direktur fokus membina SDM yang akan (…) masa depan perusahaan.",
      optArti: ["memikul, mengemban", "merawat dengan sayang", "memelihara, menghidupi", "mengusung, mengibarkan"],
    },
    12: {
      yomi: "パーティーでは{林|はやし}さんが{料理|りょうり}を{作|つく}って、みんなにその（　）を{披露|ひろう}してくれた。",
      arti: "Di pesta, Hayashi-san memasak dan memamerkan (…)-nya kepada semua orang.",
      optYomi: [null, null, "{腕前|うでまえ}", "{手前|てまえ}"],
      optArti: ["gelagat, sikap", "ulah (buruk)", "keahlian, kemahiran", "di depan; sisi sendiri"],
    },
    13: {
      yomi: "{自分|じぶん}の{考|かんが}えに{自信|じしん}がなくて{発言|はつげん}するのを（　）いるうちに、{議論|ぎろん}が{先|さき}に{進|すす}んでしまった。",
      arti: "Karena tidak percaya diri dengan pendapat saya, selagi saya (…) untuk berbicara, diskusinya sudah berlanjut.",
      optYomi: ["{遠|とお}ざけて", null, "{案|あん}じて", null],
      optArti: ["menjauhkan", "ragu-ragu, bimbang", "mencemaskan", "menghindar, mengelak"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{彼|かれ}の{予測|よそく}は【ことごとく】{外|はず}れた。",
      arti: "Ramalannya 【semuanya】 meleset.",
      optYomi: [null, null, "{思|おも}ったとおり", "{残念|ざんねん}ながら"],
      optArti: ["semua", "sedikit", "sesuai dugaan", "sayangnya"],
    },
    15: {
      yomi: "やっと【{雑踏|ざっとう}】を{抜|ぬ}けた。",
      arti: "Akhirnya saya keluar dari 【keramaian orang】.",
      optYomi: ["{人込|ひとご}み", "{渋滞|じゅうたい}", "{混乱|こんらん}", "{暗|くら}やみ"],
      optArti: ["kerumunan orang", "kemacetan", "kekacauan", "kegelapan"],
    },
    16: {
      yomi: "{台風|たいふう}{発生|はっせい}の【メカニズム】について{説明|せつめい}した。",
      arti: "Saya menjelaskan tentang 【mekanisme】 terbentuknya topan.",
      optYomi: ["{可能性|かのうせい}", null, "{危険性|きけんせい}", null],
      optArti: ["kemungkinan", "pemicu", "bahaya", "cara kerja, mekanisme"],
    },
    17: {
      yomi: "この{記述|きじゅつ}{内容|ないよう}が{正|ただ}しいと{言|い}えるだけの【{裏|うら}づけ】があるのだろう。",
      arti: "Mungkin ada 【bukti pendukung】 yang cukup untuk mengatakan isi tulisan ini benar.",
      optYomi: ["{確信|かくしん}", "{証拠|しょうこ}", "{支持|しじ}", "{基準|きじゅん}"],
      optArti: ["keyakinan", "bukti", "dukungan", "standar"],
    },
    18: {
      yomi: "もう{彼|かれ}に{本当|ほんとう}のことを{伝|つた}える【すべ】がない。",
      arti: "Sudah tidak ada 【cara】 lagi untuk menyampaikan kebenaran kepadanya.",
      optYomi: ["{必要|ひつよう}", "{時間|じかん}", "{方法|ほうほう}", "{理由|りゆう}"],
      optArti: ["keperluan", "waktu", "cara", "alasan"],
    },
    19: {
      yomi: "【せかして】しまってすみません。",
      arti: "Maaf sudah 【membuat Anda terburu-buru】.",
      optYomi: ["{驚|おどろ}かせて", "{急|いそ}がせて", "{待|ま}たせて", "{困|こま}らせて"],
      optArti: ["mengagetkan", "membuat terburu-buru", "membuat menunggu", "menyusahkan"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "{処置|しょち}",
      arti: "処置 = penanganan, tindakan (terutama medis/darurat)",
      optYomi: [
        "{明日|あした}{上司|じょうし}に{報告|ほうこく}できるように、{今日中|きょうじゅう}に{書類|しょるい}を{処置|しょち}しておこう。",
        "{来月|らいげつ}{引|ひ}っ{越|こ}すので、{使|つか}わない{家具|かぐ}を{全部|ぜんぶ}{処置|しょち}しようと{思|おも}う。",
        "{数学|すうがく}は{苦手|にがて}だったが、{先生|せんせい}の{特別|とくべつ}な{処置|しょち}でよく{分|わ}かるようになった。",
        "{医者|いしゃ}の{適切|てきせつ}な{処置|しょち}のおかげで、{痛|いた}みはすぐに{治|おさ}まった。",
      ],
      optArti: [
        "Agar bisa melapor ke atasan besok, mari 'tangani' dokumennya hari ini.",
        "Karena bulan depan pindahan, saya berniat 'menangani' semua perabot yang tidak terpakai.",
        "Saya lemah di matematika, tetapi berkat 'penanganan' khusus guru saya jadi paham.",
        "Berkat 'penanganan' yang tepat dari dokter, rasa sakitnya segera mereda.",
      ],
    },
    21: {
      yomi: "{拍子|ひょうし}",
      arti: "拍子 = (pada) saat/momen (～た拍子に = begitu ..., tiba-tiba)",
      optYomi: [
        "{重|おも}いものを{入|い}れすぎて、{持|も}ち{上|あ}げた{拍子|ひょうし}に{紙袋|かみぶくろ}が{破|やぶ}れてしまった。",
        "{昨日|きのう}はとても{疲|つか}れていたので、{布団|ふとん}に{入|はい}った{拍子|ひょうし}に{眠|ねむ}ってしまった。",
        "{晩|ばん}ご{飯|はん}を{作|つく}った{拍子|ひょうし}に、{明日|あした}のお{弁当|べんとう}も{作|つく}った。",
        "{雨|あめ}がやんだ{拍子|ひょうし}に{出|で}かけたので、{濡|ぬ}れずに{済|す}んだ。",
      ],
      optArti: [
        "Karena terlalu banyak diisi barang berat, kantong kertasnya robek 'pada saat' diangkat.",
        "Kemarin saya sangat lelah, jadi tertidur 'pada saat' masuk ke futon.",
        "'Pada saat' membuat makan malam, saya juga membuat bekal untuk besok.",
        "Saya keluar 'pada saat' hujan reda, jadi tidak kehujanan.",
      ],
    },
    22: {
      yomi: "{口出|くちだ}し",
      arti: "口出し = ikut campur bicara (dalam urusan orang lain)",
      optYomi: [
        "{今|いま}の{意見|いけん}に{反論|はんろん}のある{人|ひと}は{遠慮|えんりょ}せず{自由|じゆう}に{口出|くちだ}ししてください。",
        "{店長|てんちょう}は{客|きゃく}に{上手|じょうず}に{口出|くちだ}しして、{客|きゃく}の{好|この}みをうまく{聞|き}き{出|だ}した。",
        "この{会社|かいしゃ}に{就職|しゅうしょく}できたのは、{山田|やまだ}さんが{口出|くちだ}ししてくれたからだ。",
        "{上司|じょうし}だからといって{部下|ぶか}の{私生活|しせいかつ}にまで{口出|くちだ}しするのはよくない。",
      ],
      optArti: [
        "Yang punya sanggahan terhadap pendapat tadi, silakan 'ikut campur' dengan bebas tanpa sungkan.",
        "Manajer toko 'ikut campur' dengan pandai kepada pelanggan dan berhasil menggali selera mereka.",
        "Saya bisa bekerja di perusahaan ini karena Yamada-san 'ikut campur' untuk saya.",
        "Meski atasan, tidak baik 'ikut campur' sampai ke kehidupan pribadi bawahan.",
      ],
    },
    23: {
      yomi: "{煩雑|はんざつ}",
      arti: "煩雑 = rumit dan merepotkan (prosedur, urusan)",
      optYomi: [
        "いろいろな{書類|しょるい}を{書|か}き、いくつもの{窓口|まどぐち}に{持|も}っていくなど、{手続|てつづ}きが{煩雑|はんざつ}だった。",
        "{部長|ぶちょう}と{課長|かちょう}は{別室|べっしつ}で{煩雑|はんざつ}な{話|はなし}をしているらしく、なかなか{戻|もど}ってこない。",
        "この{辺|あた}りの{道|みち}は{迷路|めいろ}のように{煩雑|はんざつ}で{分|わ}かりにくく、{何度|なんど}{来|き}ても{間違|まちが}えてしまう。",
        "{都会|とかい}で{一人|ひとり}{暮|ぐ}らしを{始|はじ}めたときは、{期待|きたい}と{不安|ふあん}で{煩雑|はんざつ}な{気持|きも}ちだった。",
      ],
      optArti: [
        "Prosedurnya 'rumit dan merepotkan': menulis berbagai dokumen dan membawanya ke beberapa loket.",
        "Sepertinya manajer dan kepala bagian sedang membicarakan hal 'rumit dan merepotkan' di ruang lain, dan lama tidak kembali.",
        "Jalan di sekitar sini 'rumit dan merepotkan' seperti labirin, sulit dipahami, dan berapa kali pun datang saya salah jalan.",
        "Saat mulai hidup sendiri di kota, perasaan saya 'rumit dan merepotkan' antara harapan dan kecemasan.",
      ],
    },
    24: {
      yomi: "{当|あ}てはめる",
      arti: "当てはめる = menerapkan (aturan/contoh) pada sesuatu",
      optYomi: [
        "{給料|きゅうりょう}の{金額|きんがく}は、{社員|しゃいん}{一人一人|ひとりひとり}{能力|のうりょく}に{当|あ}てはめて{決|き}めてほしいと{思|おも}っている。",
        "{最近|さいきん}{天候|てんこう}が{不安定|ふあんてい}で、その{日|ひ}の{気温|きおん}に{当|あ}てはめて{服|ふく}を{選|えら}ぶのが{大変|たいへん}だ。",
        "{少数|しょうすう}の{事例|じれい}を{一般化|いっぱんか}して{社会|しゃかい}{全体|ぜんたい}に{当|あ}てはめて{考|かんが}えてもいいものだろうか。",
        "この{店|みせ}は{客|きゃく}の{要望|ようぼう}にぴったり{当|あ}てはめて{料理|りょうり}を{作|つく}ってくれるので、{評判|ひょうばん}がいい。",
      ],
      optArti: [
        "Saya ingin besaran gaji ditentukan dengan 'menerapkannya' pada kemampuan tiap karyawan.",
        "Belakangan cuaca tidak menentu, jadi repot memilih baju dengan 'menerapkannya' pada suhu hari itu.",
        "Bolehkah kita menggeneralisasi sedikit contoh lalu 'menerapkannya' pada seluruh masyarakat?",
        "Toko ini terkenal karena membuat masakan dengan 'menerapkannya' pas pada permintaan pelanggan.",
      ],
    },
    25: {
      yomi: "{打開|だかい}",
      arti: "打開 = membuka jalan keluar, mendobrak (kebuntuan, krisis)",
      optYomi: [
        "これまでの{古|ふる}い{習慣|しゅうかん}を{打開|だかい}して{新|あたら}しいやり{方|かた}を{取|と}り{入|い}れてみよう。",
        "{高木|たかぎ}{刑事|けいじ}は{綿密|めんみつ}な{捜査|そうさ}を{怠|おこた}らず、{数々|かずかず}の{事件|じけん}を{打開|だかい}してきた。",
        "{彼|かれ}は{超|ちょう}{難関|なんかん}と{言|い}われる{試験|しけん}を{打開|だかい}し、{希望|きぼう}の{職|しょく}に{就|つ}くことができた。",
        "{我社|わがしゃ}の{危機|きき}の{状況|じょうきょう}を{打開|だかい}するためには、{抜本的|ばっぽんてき}な{経営|けいえい}の{見直|みなお}しが{不可欠|ふかけつ}だ。",
      ],
      optArti: [
        "Mari 'dobrak' kebiasaan lama selama ini dan coba menerapkan cara baru.",
        "Detektif Takagi tak pernah lalai melakukan penyelidikan cermat dan telah 'mendobrak' banyak kasus.",
        "Ia 'mendobrak' ujian yang disebut sangat sulit dan bisa mendapat pekerjaan yang diinginkan.",
        "Untuk 'mencari jalan keluar' dari situasi krisis perusahaan kami, peninjauan ulang manajemen secara mendasar mutlak diperlukan.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{夏休|なつやす}みに{水族館|すいぞくかん}に{行|い}ったら、{時期|じき}（　）{時期|じき}だけに{親子|おやこ}{連|づ}れで{混雑|こんざつ}していた。",
      arti: "Saat saya pergi ke akuarium di liburan musim panas, karena (…) memang musimnya, tempat itu penuh dengan orang tua dan anak.",
      optArti: ["(で)", "(に)", "(は)", "(時期が時期だけに = karena memang musimnya)"],
    },
    27: {
      yomi: "{北川市|きたがわし}では、{良好|りょうこう}な{景観|けいかん}{形成|けいせい}を{計画的|けいかくてき}（　）{具体的|ぐたいてき}に{進|すす}めるために、「{北川市|きたがわし}{景観|けいかん}{形成|けいせい}{基本|きほん}{方針|ほうしん}」を{定|さだ}めています。",
      arti: "Kota Kitagawa menetapkan \"Kebijakan Dasar Pembentukan Lanskap Kota Kitagawa\" agar pembentukan lanskap yang baik berjalan secara terencana (…) konkret.",
      optArti: ["dan juga, sekaligus", "malah, lebih tepatnya", "sehubungan dengan itu", "justru sebaliknya"],
    },
    28: {
      yomi: "3000ｍを{超|こ}える{冬山|ふゆやま}に、{十分|じゅうぶん}な{装備|そうび}もなく{単独|たんどく}で{登|のぼ}るのは、（　）{極|きわ}まりない{行為|こうい}だ。",
      arti: "Mendaki sendirian gunung bersalju setinggi lebih dari 3000 m tanpa perlengkapan memadai adalah tindakan yang sangat (…).",
      optYomi: ["{危険|きけん}", "{危険|きけん}の", "{危険|きけん}な", "{危険|きけん}に"],
      optArti: ["berbahaya (bentuk dasar + 極まりない)", "(bentuk tidak tepat)", "(bentuk tidak tepat)", "(bentuk tidak tepat)"],
    },
    29: {
      yomi: "{景気|けいき}は{徐々|じょじょ}に{回復|かいふく}してきていると{言|い}われるが、{私|わたし}には{一時的|いちじてき}な{現象|げんしょう}のように（　）。",
      arti: "Katanya ekonomi perlahan pulih, tetapi bagi saya itu (…) seperti fenomena sementara.",
      optYomi: ["{思|おも}う", "{思|おも}っている", "{思|おも}われる", "{思|おも}わせる"],
      optArti: ["berpikir", "sedang berpikir", "terasa, tampaknya", "membuat berpikir"],
    },
    30: {
      yomi: "{新幹線|しんかんせん}の{新型|しんがた}{車両|しゃりょう}が{初|はじ}めて{一般|いっぱん}に{公開|こうかい}される（　）、{鉄道|てつどう}ファンの{私|わたし}としては、{見|み}に{行|い}かないわけにはいかない。",
      arti: "(…) gerbong Shinkansen model baru dipamerkan untuk umum pertama kalinya, sebagai penggemar kereta saya tidak bisa tidak pergi melihatnya.",
      optArti: ["mungkin karena berada dalam", "kalau sudah begitu keadaannya (karena)", "kalau sudah menjadi", "mungkin karena menjadi"],
    },
    31: {
      yomi: "{自分|じぶん}ではそんなに{短気|たんき}ではないと{思|おも}っているが、{友達|ともだち}に（　）、{私|わたし}はけっこう{怒|おこ}りっぽいらしい。",
      arti: "Saya sendiri merasa tidak begitu pemarah, tetapi (…) teman saya, katanya saya cukup mudah marah.",
      optYomi: ["{言|い}われれば", "{言|い}われたら", "{言|い}わせると", "{言|い}わせて"],
      optArti: ["kalau dikatakan", "kalau dikatakan (setelah)", "menurut (kata)", "membiarkan berkata"],
    },
    32: {
      yomi: "{昨日|きのう}{行|い}った{蕎麦屋|そばや}は、たくさん{人|ひと}が{並|なら}んでいたので（　）、{意外|いがい}にもすぐに{席|せき}に{案内|あんない}された。",
      arti: "Kedai soba yang saya datangi kemarin antreannya panjang, jadi (…), di luar dugaan saya langsung diantar ke kursi.",
      optYomi: ["{待|ま}たされたかと{思|おも}えば", "{待|ま}たされることと{思|おも}い", "{待|ま}たされるかと{思|おも}いきや", "{待|ま}たされたことと{思|おも}うが"],
      optArti: ["begitu dikira sudah menunggu", "mengira akan menunggu, lalu", "dikira akan disuruh menunggu, ternyata", "mengira sudah menunggu, tetapi"],
    },
    33: {
      yomi: "{企画|きかく}{立案|りつあん}というのは{苦|くる}しい{作業|さぎょう}だが、{自分|じぶん}の{案|あん}が{採用|さいよう}された{時|とき}のうれしさ（　）。",
      arti: "Menyusun rencana itu pekerjaan berat, tetapi kegembiraan saat rencana sendiri diterima (…).",
      optArti: ["luar biasa sekali, tak terlukiskan", "hanyalah", "tidak sampai sebegitu", "belum tentu"],
    },
    34: {
      yomi: "{店員|てんいん}「アルバイトの{太田|おおた}さんのことなんですが、{仕事|しごと}{中|ちゅう}におしゃべりが{多|おお}くて{困|こま}っているんです。{店長|てんちょう}から{一言|ひとこと}（　）。」{店長|てんちょう}「わかった。{後|あと}で{注意|ちゅうい}しておくよ。」",
      arti: "Pegawai: \"Soal Ota-san yang kerja paruh waktu, dia banyak mengobrol saat bekerja, saya jadi repot. (…) satu kata dari Manajer?\" Manajer: \"Baik. Nanti saya tegur.\"",
      optYomi: ["{伺|うかが}いたいですが", "お{聞|き}きになるでしょうか", "{申|もう}し{上|あ}げてもよろしいですか", null],
      optArti: ["saya ingin bertanya, tetapi", "apakah Anda akan mendengar?", "bolehkah saya menyampaikan?", "maukah Anda mengatakan (menegurnya)?"],
    },
    35: {
      yomi: "{友達|ともだち}からコンサートのチケットをもらったが、{仕事|しごと}で{忙|いそが}しく、{行|い}けそうにないので、（　）と{悩|なや}んでいる。",
      arti: "Saya dapat tiket konser dari teman, tetapi sibuk bekerja dan sepertinya tidak bisa pergi, jadi saya bingung (…).",
      optArti: ["apa yang terjadi?", "sebaiknya bagaimana ya?", "bagaimana keadaannya?", "sedang berbuat apa?"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{昨今|さっこん}、{森林|しんりん}を{単|たん}に{木材|もくざい}の{供給源|きょうきゅうげん}＿＿ ★ ＿＿ ＿＿と{捉|とら}えることの{重要性|じゅうようせい}が{広|ひろ}く{認識|にんしき}されてきている。",
      arti: "Belakangan ini, makin luas disadari pentingnya memandang hutan bukan hanya sebagai sumber pasokan kayu, tetapi sebagai sumber daya lingkungan yang menumbuhkan air dan udara.",
      optYomi: [null, "{環境|かんきょう}{資源|しげん}", null, "{水|みず}や{空気|くうき}を{育|はぐく}む"],
      optArti: ["bukan hanya", "sumber daya lingkungan", "sebagai", "yang menumbuhkan air dan udara"],
    },
    37: {
      yomi: "{西川|にしかわ}{高校|こうこう}の{森|もり}キャプテンは、{次|つぎ}の{対戦|たいせん}{相手|あいて}が{優勝|ゆうしょう}{候補|こうほ}の{北|きた}{第一|だいいち}{高校|こうこう}に{決定|けってい}したことについて、「たとえ＿＿ ＿＿ ★ ＿＿やるだけです。」と{語|かた}った。",
      arti: "Kapten Mori dari SMA Nishikawa, tentang lawan berikutnya yang dipastikan SMA Kita Daiichi yang difavoritkan juara, berkata, \"Tim seperti apa pun lawannya, kami hanya akan berjuang sekuat tenaga.\"",
      optYomi: ["{相手|あいて}が", "{精一杯|せいいっぱい}", null, null],
      optArti: ["lawannya", "sekuat tenaga", "seperti apa", "tim apa pun"],
    },
    38: {
      yomi: "この{店|みせ}のハンバーガーは、{値段|ねだん}は{多少|たしょう}{高|たか}めだが、{手間|てま}が＿＿ ＿＿ ★ ＿＿おいしさだ。",
      arti: "Hamburger toko ini harganya agak mahal, tetapi karena dibuat dengan susah payah, rasanya jauh tak tertandingi oleh toko lain.",
      optYomi: ["ほかの{店|みせ}の", null, null, null],
      optArti: ["toko lain", "yang (punya) ... dibanding", "tak bisa dibandingkan", "sebanding dengan susah payahnya"],
    },
    39: {
      yomi: "{田中|たなか}「{明日|あした}の{食事会|しょくじかい}、{森|もり}さんも{来|く}るんだよね。{私|わたし}、{会|あ}うのは5{年|ねん}ぶりだよ。」{木村|きむら}「わたしは{仕事|しごと}で＿＿ ＿＿ ★ ＿＿なるかな。」",
      arti: "Tanaka: \"Di acara makan besok, Mori-san juga datang, kan. Aku sudah 5 tahun tidak bertemu dia.\" Kimura: \"Aku pernah bertemu sekali waktu sekalian pergi ke Osaka untuk kerja, dan sejak itu belum lagi, jadi kira-kira 10 tahun ya.\"",
      optYomi: ["10{年|ねん}ぶりに", "{大阪|おおさか}に{行|い}ったついでに", null, "{一度|いちど}{会|あ}って"],
      optArti: ["setelah 10 tahun", "sekalian pergi ke Osaka", "karena sejak itu tidak lagi", "bertemu sekali"],
    },
    40: {
      yomi: "この{本|ほん}を{買|か}ったときは、{話題|わだい}の{本|ほん}だから{読|よ}んでみようか＿＿ ＿＿ ★ ＿＿しかなかったが、{読|よ}み{始|はじ}めたら{夢中|むちゅう}になり、{一晩|ひとばん}で{一気|いっき}に{読|よ}んでしまった。",
      arti: "Waktu membeli buku ini, perasaan saya hanya sebatas \"buku yang sedang ramai, coba baca ah\", tetapi begitu mulai membaca saya tenggelam dan menghabiskannya dalam semalam.",
      optYomi: ["{気持|きも}ち", null, null, null],
      optArti: ["perasaan", "sekitar, sebatas", "(yang)", "(dengan/adalah)"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{買|か}ってきたわけです", "{買|か}ってきましょう", "{買|か}ってきたはずです", "{買|か}ってくるのでしょう"],
      optArti: ["itulah sebabnya membeli", "belilah", "pasti sudah membeli", "mungkin akan membeli"],
    },
    42: {
      optYomi: [null, null, "その{上|うえ}で", null],
      optArti: ["karena itu", "dengan kata lain", "setelah itu, di samping itu", "untuk itu"],
    },
    43: {
      optYomi: ["{犬|いぬ}の", "この{犬|いぬ}の", "その{犬|いぬ}の", "あの{犬|いぬ}の"],
      optArti: ["(etika) anjing (secara umum)", "anjing ini", "anjing itu", "anjing yang itu"],
    },
    44: {
      optYomi: ["{家|いえ}の{中|なか}で{飼|か}えるようになる", "よだれを{流|なが}して{迎|むか}えてくれる", "クッキーを{差|さ}し{出|だ}せるようになる", "ベルの{音|おと}を{聞|き}いてすぐ{食|た}べてくれる"],
      optArti: ["menjadi bisa dipelihara di dalam rumah", "menyambut sambil meneteskan air liur", "menjadi bisa menyodorkan kue", "langsung makan begitu mendengar bel"],
    },
    45: {
      optArti: ["apakah ada?", "seharusnya ada", "bukankah dulu ada?", "ada pun tidak apa-apa"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{筆者|ひっしゃ}は、{学|まな}ぶことの{本質|ほんしつ}とは、どのようなことだと{考|かんが}えているか。",
      arti: "Menurut penulis, apa hakikat belajar?",
      optYomi: [
        "「{型|かた}」を{学|まな}ぶことで、{気|き}づいていなかった{問題|もんだい}を{認識|にんしき}できるようになること",
        "{知識|ちしき}や{技術|ぎじゅつ}を{身|み}につけて、さまざまな{秩序|ちつじょ}や{筋道|すじみち}が{見|み}えるようになること",
        "{既存|きそん}の「{型|かた}」に{固執|こしつ}せず、{常|つね}に「{型破|かたやぶ}り」なことに{挑|いど}むこと",
        "{他人|たにん}が{見出|みいだ}したことを{学|まな}ぶのではなく、{自分|じぶん}{自身|じしん}で{考|かんが}えること",
      ],
      optArti: [
        "Dengan mempelajari \"pola\", menjadi bisa mengenali masalah yang selama ini tidak disadari",
        "Dengan menguasai pengetahuan dan keterampilan, menjadi bisa melihat berbagai tatanan dan alur",
        "Tidak terpaku pada \"pola\" yang ada, dan selalu menantang hal yang \"di luar pola\"",
        "Berpikir sendiri, bukan mempelajari apa yang ditemukan orang lain",
      ],
    },
    47: {
      yomi: "このメールがもっとも{伝|つた}えたいことは{何|なに}か。",
      arti: "Apa yang paling ingin disampaikan surel ini?",
      optYomi: [
        "{予約|よやく}が{成立|せいりつ}しているか{知|し}らせてほしい",
        "{予約|よやく}{内容|ないよう}に{間違|まちが}いがないか{確認|かくにん}してほしい。",
        "{予約|よやく}ページに{不具合|ふぐあい}がないか{調|しら}べてほしい。",
        "{予約|よやく}{時|じ}に{希望|きぼう}した{夕食|ゆうしょく}{時間|じかん}を{遅|おく}らせてほしい。",
      ],
      optArti: [
        "Ingin diberi tahu apakah pemesanannya sudah berhasil",
        "Ingin dipastikan isi pemesanannya tidak salah.",
        "Ingin diperiksa apakah ada gangguan di halaman pemesanan.",
        "Ingin waktu makan malam yang diminta saat memesan dimundurkan.",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}によると、{医療|いりょう}{関係者|かんけいしゃ}に{求|もと}められていることは{何|なに}か。",
      arti: "Menurut penulis, apa yang dituntut dari tenaga medis?",
      optYomi: [
        "{患者|かんじゃ}の{希望|きぼう}を{聞|き}いて{治療|ちりょう}{方法|ほうほう}を{再考|さいこう}すること。",
        "{患者|かんじゃ}が{納得|なっとく}できる{医学的|いがくてき}な{見解|けんかい}を{示|しめ}すこと。",
        "{患者|かんじゃ}の{目|め}を{最新|さいしん}の{治療|ちりょう}{方法|ほうほう}に{向|む}けさせること。",
        "{患者|かんじゃ}を{医学的|いがくてき}な{認識|にんしき}に{導|みちび}くこと。",
      ],
      optArti: [
        "Mendengar keinginan pasien lalu memikirkan ulang metode pengobatan.",
        "Menunjukkan pandangan medis yang bisa diterima pasien.",
        "Mengarahkan perhatian pasien pada metode pengobatan terbaru.",
        "Menuntun pasien pada pemahaman medis.",
      ],
    },
    49: {
      yomi: "{矛盾|むじゅん}であるとあるが、{何|なに}が{矛盾|むじゅん}か。",
      arti: "Tertulis \"merupakan kontradiksi\"; apa yang kontradiktif?",
      optYomi: [
        "{他人|たにん}に{読|よ}まれる{可能性|かのうせい}のある{日記|にっき}に{秘密|ひみつ}を{書|か}き{残|のこ}すこと。",
        "{日記|にっき}の{筆者|ひっしゃ}が{他人|たにん}に{読|よ}まれることを{想定|そうてい}すること。",
        "{日記|にっき}は{筆者|ひっしゃ}しか{読|よ}まないのに、{他人|たにん}にも{読|よ}みやすく{書|か}くこと。",
        "{日記|にっき}は{私的|してき}なもののなのに、{他人|たにん}に{自由|じゆう}に{読|よ}まれるかもしれないこと。",
      ],
      optArti: [
        "Menuliskan rahasia di buku harian yang mungkin dibaca orang lain.",
        "Penulis buku harian membayangkan bahwa buku hariannya akan dibaca orang lain.",
        "Menulis agar mudah dibaca orang lain padahal buku harian hanya dibaca penulisnya.",
        "Buku harian itu bersifat pribadi, tetapi mungkin dibaca bebas oleh orang lain.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "{筆者|ひっしゃ}は{絵|え}を{描|か}き{始|はじ}めた{時|とき}、どのように{描|か}いていたか。",
      arti: "Bagaimana penulis melukis saat baru mulai melukis?",
      optYomi: [
        "{筆|ふで}の{進|すす}め{方|かた}を{身|み}につけようと{思|おも}って{描|か}いていた。",
        "{筆|ふで}を{進|すす}めすぎないように{心|こころ}に{掛|か}けて{描|か}いていた。",
        "{描|か}きたい{気持|きも}ちを{抑|おさ}えながらも{描|か}き{足|た}していた。",
        "{描|か}きたいという{感情|かんじょう}に{任|まか}せて{描|か}き{足|た}していた。",
      ],
      optArti: [
        "Melukis dengan niat menguasai cara menggerakkan kuas.",
        "Melukis sambil berhati-hati agar tidak terlalu banyak menggerakkan kuas.",
        "Menambah-nambah lukisan sambil menahan keinginan melukis.",
        "Menambah-nambah lukisan dengan mengikuti perasaan ingin melukis.",
      ],
    },
    51: {
      yomi: "①とことん{行|い}ききっちゃったほうがいいんですよとあるが、なぜか。",
      arti: "Tertulis \"① lebih baik dilakukan habis-habisan sampai tuntas\"; mengapa?",
      optYomi: [
        "{描|か}きたい{気持|きも}ちがどのぐらいかがわかるから。",
        "{描|か}きたいものが{何|なん}なのかがわかるから。",
        "{描|か}きすぎないことの{大切|たいせつ}さがわかるから。",
        "{描|か}き{加|くわ}えることの{楽|たの}しさがわかるから。",
      ],
      optArti: [
        "Karena jadi tahu seberapa besar keinginan melukis.",
        "Karena jadi tahu apa yang ingin dilukis.",
        "Karena jadi memahami pentingnya tidak melukis berlebihan.",
        "Karena jadi tahu nikmatnya menambah lukisan.",
      ],
    },
    52: {
      yomi: "②{絵|え}を{説明|せつめい}してしまうことについて、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang \"② menjelaskan lukisan\"?",
      optYomi: [
        "{絵|え}を{思|おも}いのままに、{書|か}き{足|た}しすぎるので、{絵|え}に{面白|おもしろ}みがなくなる。",
        "{絵|え}を{描|か}きたいという{気持|きも}ちを{抑|おさ}えるので、{表現|ひょうげん}が{素直|すなお}でなくなる。",
        "{絵|え}を{客観的|きゃっかんてき}な{視点|してん}で{描|か}くので、{見|み}る{人|ひと}にあまり{感動|かんどう}を{与|あた}えられなくなる。",
        "{絵|え}を{客観的|きゃっかんてき}に{見|み}て{描|か}き{足|た}しすぎるので、{感|かん}じたままの{気持|きも}ちが{表現|ひょうげん}されなくなる。",
      ],
      optArti: [
        "Karena terlalu banyak menambah sesuka hati, lukisan jadi tidak menarik.",
        "Karena menahan keinginan melukis, ungkapannya jadi tidak jujur.",
        "Karena melukis dari sudut pandang objektif, lukisan tidak lagi menyentuh orang yang melihat.",
        "Karena melihat lukisan secara objektif lalu terlalu banyak menambah, perasaan apa adanya tidak lagi terungkap.",
      ],
    },
    53: {
      yomi: "その{起点|きてん}とあるが、{何|なに}の{起点|きてん}か。",
      arti: "Tertulis \"titik awalnya\"; titik awal dari apa?",
      optYomi: [
        "{科学|かがく}における{大|おお}きな{発明|はつめい}や{発見|はっけん}",
        "{日常|にちじょう}のなかでの{新鮮|しんせん}な{発想|はっそう}",
        "{生活|せいかつ}の{中|なか}の{科学|かがく}{体験|たいけん}",
        "{実生活|じっせいかつ}に{役立|やくだ}つ{科学|かがく}",
      ],
      optArti: [
        "Penemuan dan temuan besar dalam sains",
        "Gagasan segar dalam keseharian",
        "Pengalaman sains dalam kehidupan",
        "Sains yang berguna bagi kehidupan nyata",
      ],
    },
    54: {
      yomi: "{筆者|ひっしゃ}は、{科学|かがく}における{思|おも}いつきや{驚|おどろ}きを、どのようなものと{考|かんが}えているか。",
      arti: "Bagaimana penulis memandang ide spontan dan keterkejutan dalam sains?",
      optYomi: [
        "{科学的|かがくてき}な「ものの{見方|みかた}」の{本質|ほんしつ}を{形|かたち}づくるもの",
        "{科学|かがく}の{理論|りろん}を{日常的|にちじょうてき}な{出来事|できごと}に{関連|かんれん}づけるもの",
        "いつもとは{違|ちが}う{視点|してん}を{得|え}る{契機|けいき}となるもの",
        "{創意|そうい}{工夫|くふう}をする{過程|かてい}で{生|う}まれてくるもの",
      ],
      optArti: [
        "Hal yang membentuk hakikat \"cara pandang\" ilmiah",
        "Hal yang mengaitkan teori sains dengan kejadian sehari-hari",
        "Hal yang menjadi pemicu untuk mendapat sudut pandang yang berbeda dari biasanya",
        "Hal yang lahir dalam proses berkreasi",
      ],
    },
    55: {
      yomi: "{科学|かがく}を{発展|はってん}させた{人々|ひとびと}に{共通|きょうつう}している{姿勢|しせい}は{何|なに}か。",
      arti: "Apa sikap yang sama-sama dimiliki orang-orang yang mengembangkan sains?",
      optYomi: [
        "{思|おも}いつきや{驚|おどろ}きをそのままにせず、{常識|じょうしき}とは{違|ちが}う{見方|みかた}をしようとする。",
        "{思|おも}いつきや{驚|おどろ}きをこれまでの{科学的|かがくてき}{知識|ちしき}で{説明|せつめい}しようとする。",
        "{発想|はっそう}の{転換|てんかん}を{通|とお}して、{独創的|どくそうてき}な{考|かんが}え{方|かた}を{身|み}に{付|つ}けようとする。",
        "{発想|はっそう}の{転換|てんかん}をすることで、{常識的|じょうしきてき}な「ものの{見方|みかた}」を{否定|ひてい}しようとする。",
      ],
      optArti: [
        "Tidak membiarkan ide spontan dan keterkejutan begitu saja, dan berusaha memandang dengan cara yang berbeda dari akal sehat.",
        "Berusaha menjelaskan ide spontan dan keterkejutan dengan pengetahuan ilmiah selama ini.",
        "Berusaha menguasai cara berpikir orisinal melalui perubahan pola pikir.",
        "Berusaha menyangkal \"cara pandang\" umum dengan mengubah pola pikir.",
      ],
    },
    56: {
      yomi: "①そういう{人間|にんげん}の{傾向|けいこう}とあるが、どのような{傾向|けいこう}か。",
      arti: "Tertulis \"① kecenderungan manusia semacam itu\"; kecenderungan seperti apa?",
      optYomi: [
        "{個性|こせい}の{持|も}ち{主|ぬし}に{表面的|ひょうめんてき}には{感心|かんしん}しつつも、{内心|ないしん}ではそれほど{認|みと}めない。",
        "{個性|こせい}を{重視|じゅうし}し、{意識的|いしきてき}に{自身|じしん}と{似|に}た{個性|こせい}を{持|も}つ{人|ひと}としか{群|む}れようとしない。",
        "{個性的|こせいてき}でありたいと{願|ねが}いながらも、{自身|じしん}と{思|おも}いが{同|おな}じ{人|ひと}と{群|む}れて{安心|あんしん}する。",
        "{個性的|こせいてき}であることを{切望|せつぼう}し、{個性|こせい}が{強|つよ}い{人|ひと}と{集|あつ}まって{安心感|あんしんかん}を{得|え}る。",
      ],
      optArti: [
        "Di permukaan kagum pada orang yang berkepribadian khas, tetapi dalam hati tidak terlalu mengakuinya.",
        "Mengutamakan kepribadian dan dengan sengaja hanya mau berkelompok dengan orang yang kepribadiannya mirip.",
        "Meski ingin tampil khas, merasa tenang saat berkelompok dengan orang yang sepemikiran.",
        "Sangat mendambakan menjadi khas, dan merasa tenang dengan berkumpul bersama orang yang kepribadiannya kuat.",
      ],
    },
    57: {
      yomi: "{何|なに}が②{個|こ}としての{価値|かち}を{否定|ひてい}されてしまうことにつながるのか。",
      arti: "Apa yang berujung pada \"② disangkalnya nilai sebagai individu\"?",
      optYomi: [
        "{自身|じしん}の{限界|げんかい}を{示|しめ}され、{将来|しょうらい}に{不安|ふあん}を{感|かん}じること。",
        "{自身|じしん}の{平凡|へいぼん}さを{思|おも}い{知|し}らされ、{限界|げんかい}を{自覚|じかく}すること。",
        "{自身|じしん}の{平凡|へいぼん}さを{指摘|してき}され、{生|い}きる{意欲|いよく}をなくすこと。",
        "{自身|じしん}の{無能|むのう}さに{気|き}づかされ、{自分|じぶん}の{存在|そんざい}に{不安|ふあん}を{感|かん}じること。",
      ],
      optArti: [
        "Ditunjukkan batas diri sendiri lalu merasa cemas akan masa depan.",
        "Dibuat sadar betapa biasa-biasa saja dirinya lalu menyadari batasnya.",
        "Ditunjukkan betapa biasa-biasa saja dirinya lalu kehilangan semangat hidup.",
        "Dibuat sadar akan ketidakmampuan diri lalu merasa cemas akan keberadaan sendiri.",
      ],
    },
    58: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えに{合|あ}っているのはどれか。",
      arti: "Manakah yang sesuai dengan pendapat penulis?",
      optYomi: [
        "{人間|にんげん}は{自|みずか}らの{可能性|かのうせい}を{広|ひろ}げ、{自身|じしん}の{価値|かち}を{高|たか}める。",
        "{人間|にんげん}は{個|こ}であることの{確証|かくしょう}を{得|え}て、{自身|じしん}の{価値|かち}を{高|たか}める。",
        "{人間|にんげん}は{自|みずか}らに{希望|きぼう}の{余地|よち}を{残|のこ}し、{生|い}きる{意欲|いよく}を{保|たも}つ。",
        "{人間|にんげん}は{常|つね}に{新|あら}たな{希望|きぼう}を{探|さが}しながら、{生|い}きる{意欲|いよく}を{保|たも}つ。",
      ],
      optArti: [
        "Manusia memperluas kemungkinannya dan meningkatkan nilai dirinya.",
        "Manusia memperoleh kepastian sebagai individu dan meningkatkan nilai dirinya.",
        "Manusia menyisakan ruang harapan bagi dirinya dan menjaga semangat hidup.",
        "Manusia selalu mencari harapan baru sambil menjaga semangat hidup.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "①{何|なん}とも{複雑|ふくざつ}な{心境|しんきょう}になるとあるが、なぜか。",
      arti: "Tertulis \"① perasaan menjadi sungguh campur aduk\"; mengapa?",
      optYomi: [
        "{芸術|げいじゅつ}や{文化|ぶんか}の{価値|かち}が{現実|げんじつ}{生活|せいかつ}で{高|たか}く{評価|ひょうか}されないから。",
        "{芸術|げいじゅつ}や{文化|ぶんか}と{社会|しゃかい}{生活|せいかつ}との{関係|かんけい}が{希薄|きはく}になっていくから。",
        "{芸術|げいじゅつ}や{文化|ぶんか}の{研究|けんきゅう}が{現実|げんじつ}{生活|せいかつ}に{役立|やくだ}たないと{思|おも}われているから。",
        "{芸術|げいじゅつ}や{文化|ぶんか}が{社会|しゃかい}{生活|せいかつ}とは{懸|か}け{離|はな}れていると{思|おも}われているから。",
      ],
      optArti: [
        "Karena nilai seni dan budaya tidak dihargai tinggi dalam kehidupan nyata.",
        "Karena hubungan seni-budaya dengan kehidupan sosial makin renggang.",
        "Karena penelitian seni dan budaya dianggap tidak berguna bagi kehidupan nyata.",
        "Karena seni dan budaya dianggap jauh terpisah dari kehidupan sosial.",
      ],
    },
    60: {
      yomi: "{筆者|ひっしゃ}によると、{近年|きんねん}の{音楽|おんがく}{研究|けんきゅう}は、{音楽|おんがく}をどのようにとらえているか。",
      arti: "Menurut penulis, bagaimana penelitian musik belakangan ini memandang musik?",
      optYomi: [
        "{社会|しゃかい}の{状況|じょうきょう}が{悪化|あっか}したときに{最|もっと}も{必要|ひつよう}とされる。",
        "ほかの{芸術|げいじゅつ}や{文化|ぶんか}と{同等|どうとう}には、{論|ろん}じられない。",
        "{現実|げんじつ}{生活|せいかつ}と{乖離|かいり}した{純粋|じゅんすい}なものである。",
        "{政治|せいじ}や{社会|しゃかい}に{深|ふか}く{関|かか}わっている。",
      ],
      optArti: [
        "Paling dibutuhkan saat kondisi masyarakat memburuk.",
        "Tidak bisa dibahas setara dengan seni dan budaya lain.",
        "Sesuatu yang murni dan terpisah dari kehidupan nyata.",
        "Berkaitan erat dengan politik dan masyarakat.",
      ],
    },
    61: {
      yomi: "②{皮肉|ひにく}なことだとあるが、{何|なに}か{皮肉|ひにく}なのか。",
      arti: "Tertulis \"② sungguh ironis\"; apa yang ironis?",
      optYomi: [
        "{音楽|おんがく}{研究者|けんきゅうしゃ}{以外|いがい}の{人|ひと}の{方|ほう}が、{音楽|おんがく}について、{最先端|さいせんたん}の{議論|ぎろん}を{従|したが}っていること",
        "{音楽|おんがく}{研究者|けんきゅうしゃ}{以外|いがい}の{人|ひと}の{方|ほう}が、{音楽|おんがく}を{特別|とくべつ}なものとしたがっていること。",
        "{音楽|おんがく}{研究者|けんきゅうしゃ}{以外|いがい}の{人|ひと}の{方|ほう}が、{音楽|おんがく}を{純粋|じゅんすい}に{楽|たの}しんでいること",
        "{音楽|おんがく}{研究者|けんきゅうしゃ}{以外|いがい}の{人|ひと}の{方|ほう}が、{音楽|おんがく}をよくわかっていること。",
      ],
      optArti: [
        "Orang selain peneliti musik justru mengikuti diskusi termutakhir tentang musik",
        "Orang selain peneliti musik justru ingin menjadikan musik sesuatu yang istimewa.",
        "Orang selain peneliti musik justru menikmati musik secara murni",
        "Orang selain peneliti musik justru lebih memahami musik.",
      ],
    },
    62: {
      yomi: "{現在|げんざい}の{音楽|おんがく}{研究者|けんきゅうしゃ}のあり{方|かた}について、{筆者|ひっしゃ}はどのようにのべているか。",
      arti: "Bagaimana penulis menjelaskan sikap peneliti musik saat ini?",
      optYomi: [
        "{音楽|おんがく}の{持|も}つ{普遍的|ふへんてき}な{価値|かち}を{社会|しゃかい}によりわかりやすく{伝|つた}えることが{課題|かだい}だ。",
        "{音楽|おんがく}{研究|けんきゅう}の{成果|せいか}をこれまで{以上|いじょう}{発信|はっしん}することが{求|もと}められている。",
        "{最先端|さいせんたん}の{音楽|おんがく}{研究|けんきゅう}について{議論|ぎろん}していくことが{重要|じゅうよう}である。",
        "{音楽|おんがく}に{対|たい}する{意義|いぎ}を{変|か}えて{新|あら}たな{研究|けんきゅう}に{取|と}り{組|く}むべきだ。",
      ],
      optArti: [
        "Tugasnya adalah menyampaikan nilai universal musik kepada masyarakat dengan lebih mudah dipahami.",
        "Dituntut untuk menyebarkan hasil penelitian musik lebih banyak dari sebelumnya.",
        "Yang penting adalah terus mendiskusikan penelitian musik termutakhir.",
        "Harus mengubah makna musik dan menekuni penelitian baru.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "AとBの{認識|にんしき}で{共通|きょうつう}しているのは{何|なに}か。",
      arti: "Apa kesamaan pandangan A dan B?",
      optYomi: [
        "{食品|しょくひん}の{安全|あんぜん}{対策|たいさく}に{消費者|しょうひしゃ}の{意見|いけん}が{反映|はんえい}されていない",
        "{食品|しょくひん}{問題|もんだい}への{対策|たいさく}は{安全性|あんぜんせい}を{考|かんが}えるだけでは{十分|じゅうぶん}ではない",
        "{食品|しょくひん}の{安全性|あんぜんせい}に{関|かん}して{科学的|かがくてき}な{証明|しょうめい}が{重視|じゅうし}されていない",
        "{食品|しょくひん}は{絶対|ぜったい}に{安全|あんぜん}だと{言|い}えなければ{消費者|しょうひしゃ}は{納得|なっとく}しない",
      ],
      optArti: [
        "Pendapat konsumen tidak tercermin dalam langkah keamanan pangan",
        "Penanganan masalah pangan tidak cukup hanya dengan memikirkan keamanannya",
        "Pembuktian ilmiah tentang keamanan pangan tidak diutamakan",
        "Konsumen tidak akan puas jika makanan tidak bisa dikatakan mutlak aman",
      ],
    },
    64: {
      yomi: "AとBは、どうしたら{消費者|しょうひしゃ}が{安心|あんしん}を{得|え}られると{述|の}べているか。",
      arti: "Menurut A dan B, bagaimana caranya agar konsumen merasa tenang?",
      optYomi: [
        "AもBも、{消費者|しょうひしゃ}{自身|じしん}が{食|しょく}の{安全|あんぜん}により{関心|かんしん}を{持|も}つことで{得|え}られると{述|の}べている",
        "AもBも、{消費者|しょうひしゃ}が{信頼|しんらい}できる{説明|せつめい}を{生産者|せいさんしゃ}{側|がわ}がすることで{得|え}られると{述|の}べている",
        "Aは{消費者|しょうひしゃ}が{安全性|あんぜんせい}を{理解|りかい}することで{得|え}られると{述|の}べ、Bは{消費者|しょうひしゃ}と{生産者|せいさんしゃ}{側|がわ}が{信頼|しんらい}{関係|かんけい}を{築|きず}くことで{得|え}られると{述|の}べている",
        "Aは{消費者|しょうひしゃ}が{科学的|かがくてき}{知識|ちしき}を{身|み}に{付|つ}けることで{得|え}られると{述|の}べ、Bは{生産者|せいさんしゃ}{側|がわ}がより{精度|せいど}の{高|たか}い{安全|あんぜん}{証明|しょうめい}をすることで{得|え}られると{述|の}べている",
      ],
      optArti: [
        "A dan B sama-sama menyatakan rasa tenang diperoleh jika konsumen sendiri lebih peduli pada keamanan pangan",
        "A dan B sama-sama menyatakan rasa tenang diperoleh jika pihak produsen memberi penjelasan yang bisa dipercaya konsumen",
        "A menyatakan rasa tenang diperoleh jika konsumen memahami keamanannya; B menyatakan rasa tenang diperoleh jika konsumen dan pihak produsen membangun hubungan saling percaya",
        "A menyatakan rasa tenang diperoleh jika konsumen menguasai pengetahuan ilmiah; B menyatakan rasa tenang diperoleh jika pihak produsen memberi bukti keamanan yang lebih akurat",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "{子供|こども}は、①「ごちそうさま」を{言|い}うようにはならないとあるが、なぜか。",
      arti: "Tertulis \"① anak tidak akan mengucapkan 'gochisōsama'\"; mengapa?",
      optYomi: [
        "{親|おや}が{手本|てほん}を{見|み}せないとわからないから",
        "{親|おや}がやかましく{言|い}うとかえって{逆効果|ぎゃくこうか}になるから",
        "その{言葉|ことば}を{言|い}うことが{習慣|しゅうかん}になっていないから",
        "その{言葉|ことば}が{必要|ひつよう}だという{親|おや}の{気持|きも}ちが{伝|つた}わらないから",
      ],
      optArti: [
        "Karena anak tidak paham jika orang tua tidak memberi contoh",
        "Karena jika orang tua cerewet justru berefek sebaliknya",
        "Karena mengucapkan kata itu belum menjadi kebiasaan",
        "Karena perasaan orang tua bahwa kata itu perlu tidak tersampaikan",
      ],
    },
    66: {
      yomi: "{大人|おとな}{同士|どうし}の{人間|にんげん}{関係|かんけい}について、{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan hubungan antarmanusia sesama orang dewasa?",
      optYomi: [
        "{話|はな}し{合|あ}いを{重|かさ}ねても、お{互|たが}いを{理解|りかい}できないことがある",
        "お{互|たが}いを{理解|りかい}するためには、{最後|さいご}まで{議論|ぎろん}することが{必要|ひつよう}だ",
        "{話|はな}し{合|あ}いの{場|ば}で{誤解|ごかい}をなくすには、お{互|たが}いが{妥協|だきょう}しなければならない",
        "コミュニケーションを{諦|あきら}めると、トラブルになることも{珍|めずら}しくない。",
      ],
      optArti: [
        "Meski berkali-kali berdiskusi, kadang tetap tidak bisa saling memahami",
        "Untuk saling memahami, perlu berdiskusi sampai akhir",
        "Untuk menghilangkan salah paham dalam diskusi, kedua pihak harus berkompromi",
        "Jika menyerah berkomunikasi, tidak jarang terjadi masalah.",
      ],
    },
    67: {
      yomi: "②{何|なに}か{別|べつ}の{関係|かんけい}が{生|う}まれるとあるが、どういうことか。",
      arti: "Tertulis \"② akan lahir semacam hubungan yang lain\"; apa maksudnya?",
      optYomi: [
        "{相手|あいて}の{人間性|にんげんせい}を{認|みと}めるようになる",
        "{相手|あいて}の{意見|いけん}を{容認|ようにん}できるようになる",
        "{相手|あいて}の{態度|たいど}を{受|う}け{入|い}れるようになる",
        "{相手|あいて}の{価値観|かちかん}を{理解|りかい}できるようになる",
      ],
      optArti: [
        "Menjadi mengakui kemanusiaan orang itu",
        "Menjadi bisa menerima pendapat orang itu",
        "Menjadi menerima sikap orang itu",
        "Menjadi bisa memahami nilai-nilai orang itu",
      ],
    },
    68: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{問題|もんだい}を{解決|かいけつ}するためには、{相手|あいて}の{目|め}を{見|み}て{理解|りかい}できるまで{話|はな}し{合|あ}えばいい",
        "コミュニケーションのためには、{相手|あいて}の{目|め}を{見|み}て{話|はな}すことが{大切|たいせつ}である",
        "{相手|あいて}に{誤解|ごかい}されないためには、{目|め}を{見|み}てコミュニケーションをすればいい",
        "{自分|じぶん}を{理解|りかい}してもらうには、{目|め}を{見|み}て{繰|く}り{返|かえ}し{話|はな}すことが{大切|たいせつ}である。",
      ],
      optArti: [
        "Untuk menyelesaikan masalah, cukup berdiskusi sambil menatap mata orang itu sampai saling paham",
        "Untuk berkomunikasi, penting berbicara sambil menatap mata orang itu",
        "Agar tidak disalahpahami, cukup berkomunikasi sambil menatap mata",
        "Agar dipahami, penting berbicara berulang-ulang sambil menatap mata.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "ムディさんは、{市民|しみん}{農園|のうえん}を{借|か}りたいと{考|かんが}えている。{作|つく}る{野菜|やさい}は{自分|じぶん}で{決|き}めたいが、{農作業|のうさぎょう}の{経験|けいけん}がないので{作|つく}り{方|かた}を{教|おし}えてほしいと{思|おも}っている。ムディさんはどの{農園|のうえん}を{借|か}りたらよいか。",
      arti: "Mudi-san ingin menyewa kebun warga. Ia ingin menentukan sendiri sayur yang ditanam, tetapi karena tidak berpengalaman bertani, ia ingin diajari cara menanamnya. Kebun mana yang sebaiknya ia sewa?",
      optArti: ["(1) Higashiyama", "(2) Nishikawa", "(3) Mita", "(4) Ikezawa"],
    },
    70: {
      yomi: "{原口市|はらぐちし}の{市民|しみん}{農園|のうえん}を{借|か}りる{際|さい}に、{留意|りゅうい}しなければならないことはどれか。",
      arti: "Apa yang harus diperhatikan saat menyewa kebun warga Kota Haraguchi?",
      optYomi: [
        "{原口市|はらぐちし}に{住|す}んでいる{人|ひと}しか{借|か}りることができない",
        "{同|おな}じ{農園|のうえん}を3{年|ねん}{以上|いじょう}{連続|れんぞく}して{借|か}りなければならない",
        "{自分|じぶん}で{農具|のうぐ}を{準備|じゅんび}しなければならない{農園|のうえん}がある",
        "{早|はや}く{応募|おうぼ}しないと{希望|きぼう}の{農園|のうえん}が{借|か}りられないことがある",
      ],
      optArti: [
        "Hanya orang yang tinggal di Kota Haraguchi yang bisa menyewa",
        "Harus menyewa kebun yang sama selama 3 tahun berturut-turut atau lebih",
        "Ada kebun yang mengharuskan menyiapkan alat tani sendiri",
        "Jika tidak cepat mendaftar, kadang kebun yang diinginkan tidak bisa disewa",
      ],
    },
  },

  bacaan: {
    // ── 問題7：犬が嫌いです ──
    "7": {
      yomi: `{以下|いか}は、『{人生|じんせい}{相談|そうだん}{万事|ばんじ}OK』という{本|ほん}に{書|か}かれている{質問|しつもん}と、それに{対|たい}する{回答|かいとう}である。

Q70　{犬|いぬ}が{嫌|きら}いです

{夫|おっと}の{実家|じっか}は、{大|だい}の{犬|いぬ}{好|ず}きで{家|いえ}の{中|なか}で{放|はな}し{飼|が}いにしています。しかし{私|わたし}は{大|だい}の{犬|いぬ}{嫌|ぎら}い。{昔|むかし}、{母|はは}が「{近|ちか}づくとかまれる」と{言|い}っていたこともあります。{犬|いぬ}は{見抜|みぬ}いているのでしょう。ほかの{人|ひと}にはキューンと{甘|あま}えるのに{私|わたし}だけにはほえまくります。{私|わたし}はこの{家|いえ}の{者|もの}として{失格|しっかく}でしょうか。たかが{犬|いぬ}、されど{犬|いぬ}。かなりのストレスです。（いまいち、28{歳|さい}）

A70　{犬|いぬ}クッキーで{手|て}なずける。

パブロフの{犬|いぬ}という{有名|ゆうめい}な{実験|じっけん}がありました。ベルを{鳴|な}らして{餌|えさ}を{与|あた}えることを{繰|く}り{返|かえ}したら、しまいに{犬|いぬ}が、ベルの{音|おと}を{聞|き}いただけで、{餌|えさ}を{与|あた}えなくてもよだれ（{注|ちゅう}）を{出|だ}すようになったというのです。あれを{応用|おうよう}します。

ペットショップへ{走|はし}り、おいしそうな{犬|いぬ}{用|よう}のクッキーを、[41]。それを{夫|おっと}の{実家|じっか}に{行|い}くときは{必|かなら}ず{持参|じさん}し、ポケットに{入|い}れておきます。

[42]あなたが{取|と}るべき{態度|たいど}は、{吠|ほ}えられても、{動|どう}じないってことです。{手|て}をひっこめたり、{叫|さけ}び{声|ごえ}を{上|あ}げたり、{逃|に}げ{腰|ごし}になったりしちゃいけません。{犬|いぬ}に{足元|あしもと}を{見|み}られます。といって、{犬|いぬ}の{目|め}をまっすぐ{見|み}てはいけません。{犬|いぬ}は{威嚇|いかく}されてると{思|おも}い{込|こ}むものなんです。この{辺|へん}、{人間|にんげん}の{常識|じょうしき}は{通|つう}じませんから、{目|め}は{合|あ}わせない。それが[43]{礼儀|れいぎ}{作法|さほう}です。

さて、{吠|ほ}えられても{動|どう}じず。{目|め}をそらしつつ、{手|て}のひらに{犬|いぬ}クッキーを{載|の}せて{差|さ}し{出|だ}します。{犬|いぬ}の{歯|は}が{当|あ}たらないので、{指|ゆび}でつまんでやるよりこわくないです。あなたは{今後|こんご}、その{犬|いぬ}に{会|あ}ったら、{必|かなら}ず{犬|いぬ}クッキーをやることにします。それを{繰|く}り{返|かえ}すうちに、{犬|いぬ}は、あなた、イコール、クッキーってのを{学習|がくしゅう}し、やがて、[44]でしょう。

{以上|いじょう}は、よく{吠|ほ}えるうちの{犬|いぬ}に{対|たい}して、{犬|いぬ}{嫌|ぎら}いの{友人|ゆうじん}が{試|こころ}みたことです。いまだに{友人|ゆうじん}の{顔|かお}をみると{吠|ほ}えますが、それはクッキーほしさの{吠|ほ}え{声|ごえ}で、もらえばたちまちおとなしくなります。{友人|ゆうじん}もそれがわかってるので、{怯|おび}えなくなりました。

クッキーをやったら、{後|あと}は{無視|むし}します。{無理|むり}はしません。{犬|いぬ}{好|ず}きがいるように、{犬|いぬ}{嫌|ぎら}いが[45]。
（{注|ちゅう}）よだれ：つば、{口|くち}から{流|なが}れ{出|で}る{液体|えきたい}`,
      arti: `Berikut ini adalah pertanyaan yang tertulis dalam buku "Konsultasi Hidup, Semua OK" beserta jawabannya.

Q70 Saya tidak suka anjing

Keluarga suami saya sangat suka anjing dan membiarkan anjingnya berkeliaran di dalam rumah. Tetapi saya sangat tidak suka anjing. Dulu ibu saya juga pernah bilang, "Kalau mendekat nanti digigit." Mungkin anjing itu bisa membacanya. Kepada orang lain ia bermanja-manja merengek, tetapi hanya kepada saya ia terus-menerus menggonggong. Apakah saya tidak layak sebagai anggota keluarga ini? Cuma anjing, tetapi tetap saja anjing. Ini cukup membuat stres. (Imaichi, 28 tahun)

A70 Jinakkan dengan kue anjing.

Ada eksperimen terkenal bernama anjing Pavlov. Katanya, setelah berulang kali membunyikan bel lalu memberi makan, akhirnya anjing meneteskan air liur (catatan) hanya dengan mendengar bunyi bel, meski tidak diberi makan. Kita terapkan itu.

Pergilah ke toko hewan peliharaan, dan [41] kue anjing yang tampak lezat. Setiap kali pergi ke rumah keluarga suami, pastikan membawanya dan menyimpannya di saku.

[42], sikap yang harus Anda ambil adalah tidak gentar meski digonggongi. Jangan menarik tangan, berteriak, atau bersikap hendak kabur. Anjing akan melihat kelemahan Anda. Meski begitu, jangan menatap lurus mata anjing. Anjing akan mengira ia sedang digertak. Dalam hal ini akal sehat manusia tidak berlaku, jadi jangan bertatapan mata. Itulah tata krama [43].

Nah, meski digonggongi, jangan gentar. Sambil memalingkan mata, sodorkan kue anjing di atas telapak tangan. Karena gigi anjing tidak akan mengenai Anda, ini tidak semenakutkan memberikannya dengan jari. Mulai sekarang, setiap kali bertemu anjing itu, Anda harus selalu memberinya kue anjing. Seiring diulang-ulang, anjing akan belajar bahwa Anda sama dengan kue, dan lama-lama [44].

Yang di atas adalah hal yang dicoba seorang teman saya yang tidak suka anjing terhadap anjing kami yang sering menggonggong. Sampai sekarang pun anjing kami masih menggonggong begitu melihat wajah teman saya, tetapi itu gonggongan karena ingin kue, dan begitu diberi ia langsung tenang. Teman saya pun memahami hal itu, sehingga tidak takut lagi.

Setelah memberi kue, selanjutnya abaikan saja. Jangan memaksakan diri. Sama seperti ada orang yang suka anjing, orang yang tidak suka anjing [45].
(Catatan) よだれ: air liur, cairan yang mengalir dari mulut`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{何|なに}かを{学|まな}ぶということは、もちろん、{問題|もんだい}に{答|こた}える{知識|ちしき}や{技術|ぎじゅつ}を{身|み}に{付|つ}けるという{意味|いみ}もあるけれど、それは{実|じつ}は{学|まな}ぶことの{本質|ほんしつ}ではない。ぼくらは{本|ほん}や{学校|がっこう}で、これまで{人|ひと}が{見出|みいだ}してきたさまざまな{秩序|ちつじょ}、{筋道|すじみち}を{学|まな}ぶ。だけど、そうやってさまざまな「{型|かた}」を{学|まな}ぶことによって、{今|いま}まで、{見|み}えていなかった、あるいは、ぼんやりとしか{見|み}えていなかった「{型破|かたやぶ}り」なものが{見|み}えてくるようになる。つまり、{学|まな}べば{学|まな}ぶほど、{見|み}えてくる{問題|もんだい}は{増|ふ}えるというわけだ。
（{野矢|のや}{茂樹|しげき}『はじめて{考|かんが}えるときのように―『わかる』ための{哲学的|てつがくてき}{道案内|みちあんない}』による）`,
      arti: `Belajar sesuatu tentu juga berarti menguasai pengetahuan dan keterampilan untuk menjawab soal, tetapi sebenarnya itu bukan hakikat belajar. Kita mempelajari di buku dan di sekolah berbagai tatanan dan alur yang telah ditemukan orang selama ini. Namun, dengan mempelajari berbagai "pola" itu, kita mulai bisa melihat hal-hal "di luar pola" yang selama ini tidak terlihat atau hanya terlihat samar. Artinya, makin banyak belajar, makin banyak masalah yang terlihat.
(Dari buku karya Noya Shigeki, panduan filosofis untuk "memahami")`,
    },
    "8-2": {
      yomi: `{以下|いか}は、ある{旅館|りょかん}に{届|とど}いたメールである。

{横西|よこにし}{旅館|りょかん}

ご{担当者|たんとうしゃ}{様|さま}

11{月|がつ}30{日|にち}に、{貴|き}{旅館|りょかん}のホームページから{宿泊|しゅくはく}の{予約|よやく}をした{者|もの}です。

{予約|よやく}ページによりますと、{宿泊|しゅくはく}の{可否|かひ}についてはメールでご{連絡|れんらく}いただけるとのことですが、いまだメールをいただいておりません。

{出発|しゅっぱつ}の{日時|にちじ}が{迫|せま}っておりますので、{早急|さっきゅう}にご{確認|かくにん}いただけますでしょうか。

{予約|よやく}{番号|ばんごう}は、131130172で、{予約|よやく}した{内容|ないよう}は、{以下|いか}の{通|とお}りです。

{宿泊|しゅくはく}{希望|きぼう}{日|び}：2013{年|ねん}12{月|がつ}21{日|にち}―23{日|にち}（2{泊|はく}）
{人数|にんずう}：3{名|めい}（{大人|おとな}2{名|めい}、{子供|こども}1{名|めい}）
{部屋|へや}：1{室|しつ}（{禁煙|きんえん}ルーム）

なお、{予約|よやく}{時|じ}には{夕食|ゆうしょく}の{時間|じかん}は、19{時|じ}にお{願|ねが}いしていましたが、18{時|じ}に{変更|へんこう}してください。

よろしくお{願|ねが}いいたします。

{上田|うえだ}{真由美|まゆみ}`,
      arti: `Berikut ini adalah surel yang diterima sebuah penginapan.

Penginapan Yokonishi

Kepada Yth. Petugas yang bersangkutan

Saya orang yang memesan kamar melalui situs web penginapan Anda pada 30 November.

Menurut halaman pemesanan, bisa atau tidaknya menginap akan diberitahukan melalui surel, tetapi sampai sekarang saya belum menerima surel.

Karena tanggal keberangkatan sudah dekat, bisakah Anda segera memastikannya?

Nomor pemesanan saya 131130172, dan isi pemesanannya sebagai berikut.

Tanggal menginap: 21–23 Desember 2013 (2 malam)
Jumlah orang: 3 (2 dewasa, 1 anak)
Kamar: 1 kamar (kamar bebas rokok)

Selain itu, saat memesan saya meminta waktu makan malam pukul 19.00, mohon diubah menjadi pukul 18.00.

Terima kasih atas perhatiannya.

Ueda Mayumi`,
    },
    "8-3": {
      yomi: `{医者|いしゃ}、ナース（{注|ちゅう}）と{患者|かんじゃ}との{間|あいだ}の{意味|いみ}のズレやすれ{違|ちが}いは、{患者|かんじゃ}の{身体的|しんたいてき}{症状|しょうじょう}に{対|たい}する{専門的|せんもんてき}な{医学的|いがくてき}{認識|にんしき}と、{患者|かんじゃ}{自身|じしん}の{意味|いみ}づけとの{間|あいだ}に{生|う}まれている。{医療|いりょう}{関係者|かんけいしゃ}の{課題|かだい}の{一|ひと}つは、{患者|かんじゃ}{自身|じしん}の{身勝手|みがって}な{解釈|かいしゃく}とそれに{基|もと}づいた{治療|ちりょう}{行動|こうどう}を{再考|さいこう}させて、{医学的|いがくてき}に{求|もと}められる{治療|ちりょう}{活動|かつどう}だけに{目|め}を{向|む}けさせることであろう。つまり、{患者|かんじゃ}の{内面|ないめん}にある{認識|にんしき}{構造|こうぞう}の{再構成|さいこうせい}という{難|むずか}しい{問題|もんだい}にぶつかるのである。
（{梶田|かじた}{正巳|まさみ}『{勉強力|べんきょうりょく}をつける―{認識|にんしき}{心理学|しんりがく}からの{発想|はっそう}』による）
（{注|ちゅう}）ナース：{看護師|かんごし}`,
      arti: `Pergeseran makna dan salah paham antara dokter, perawat (catatan), dan pasien lahir di antara pemahaman medis profesional tentang gejala fisik pasien dan pemaknaan pasien sendiri. Salah satu tugas tenaga medis mungkin adalah membuat pasien memikirkan ulang penafsirannya yang semaunya sendiri serta tindakan pengobatan yang didasarkan padanya, lalu mengarahkan perhatiannya hanya pada kegiatan pengobatan yang dituntut secara medis. Dengan kata lain, mereka berhadapan dengan masalah sulit berupa penyusunan ulang struktur pemahaman dalam batin pasien.
(Dari buku karya Kajita Masami tentang meningkatkan daya belajar dari sudut psikologi kognitif)
(Catatan) ナース: perawat`,
    },
    "8-4": {
      yomi: `{日記|にっき}とは{限|かぎ}りなく{私的|してき}な{記録|きろく}であり、{読者|どくしゃ}が{存在|そんざい}しないどころか、{他人|たにん}には{読|よ}まれたくない{秘密|ひみつ}な{表現|ひょうげん}であるともいえる。

ただ{一人|ひとり}だけ、{奇妙|きみょう}な{読者|どくしゃ}が{存在|そんざい}する。いつでも{自由|じゆう}に{日記|にっき}を{読|よ}むことのできる、{日記|にっき}の{筆者|ひっしゃ}である。その{読者|どくしゃ}は{筆者|ひっしゃ}とは{異|こと}なる{場|ば}に{立|た}って、{様々|さまざま}な{配慮|はいりょ}を{働|はたら}かす。{万|まん}が{一|いち}、{日記|にっき}が{盗|ぬす}み{読|よ}まれたり（{注|ちゅう}）、{死後|しご}に{他人|たにん}の{目|め}に{曝|さら}されるような{事態|じたい}が{発生|はっせい}した{場合|ばあい}、こんなことが{書|か}かれているのはまずいのではあるまいか、{等々|とうとう}と。しかし、これは{限|かぎ}りなく{私的|してき}な{記録|きろく}である{筈|はず}の{日記|にっき}にとっての{矛盾|むじゅん}である。
（{黒井|くろい}{千次|せんじ}『{図書|としょ}』2007{年|ねん}2{月|がつ}{号|ごう}による）
（{注|ちゅう}）{盗|ぬす}み{読|よ}む：{他|ほか}の{人|ひと}の{日記|にっき}や{手紙|てがみ}などをこっそり{読|よ}む`,
      arti: `Buku harian adalah catatan yang sepenuhnya pribadi; bisa dikatakan, bukan hanya tidak punya pembaca, tetapi juga ungkapan rahasia yang tidak ingin dibaca orang lain.

Hanya ada satu pembaca yang aneh. Yaitu penulis buku harian itu sendiri, yang bisa membacanya dengan bebas kapan saja. Pembaca itu berdiri di posisi yang berbeda dari penulis dan menerapkan berbagai pertimbangan. Misalnya: seandainya buku harian ini dibaca diam-diam (catatan), atau setelah kematian terpampang di depan mata orang lain, bukankah tidak baik kalau hal seperti ini tertulis? — dan sebagainya. Namun, ini adalah kontradiksi bagi buku harian yang seharusnya merupakan catatan yang sepenuhnya pribadi.
(Dari majalah "Tosho" edisi Februari 2007, tulisan Kuroi Senji)
(Catatan) 盗み読む: diam-diam membaca buku harian atau surat orang lain`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{十年|じゅうねん}{絵|え}を{描|か}いてきて、{最近|さいきん}になってようやく{筆|ふで}の{止|と}めどころがわかってきたかな、と{思|おも}います。{書|か}きすぎずに、{筆|ふで}を{置|お}くコツが{少|すこ}しずつわかってきた。

{最初|さいしょ}のうちは、{筆|ふで}が{多|おお}くなるものなんです。{描|か}きたいという{気持|きも}ちが{強|つよ}いだけに、まだ{足|た}りない、まだ{足|た}りないという{気|き}になって、どんどん{描|か}き{足|た}してしまう。だけど、それを{無理|むり}してセーブすることはないと{思|おも}います。やっぱり、①とことん{行|い}ききっちゃったほうがいいんですよ、{何事|なにごと}も。

たとえば、{空腹|くうふく}のときに{腹|はら}{一杯|いっぱい}{食|た}べて{満腹感|まんぷくかん}というものを{味|あじ}わっておかないと、{加減|かげん}というものがわかりません。{人間|にんげん}、{満腹|まんぷく}を{知|し}っているから、これはまだ{五分|ごぶ}（{注|ちゅう}1）、{腹|はら}{八分|はちぶ}といったらこの{程度|ていど}だという{加減|かげん}がわかる。{一回|いっかい}とことんやってみることで、{抑|おさ}えることや、{行|い}き{過|す}ぎないことの{良|よ}さが{初|はじ}めてわかるものですからね。

（{中略|ちゅうりゃく}）{自分|じぶん}が{描|か}きたいモチーフそのものと{対峙|たいじ}（{注|ちゅう}2）して、{自分|じぶん}の{感|かん}じたところで{筆|ふで}を{進|すす}めている{分|ぶん}にはいいんですが、{客観的|きゃっかんてき}にそれを{見|み}て、ここが{足|た}りない、あそこが{足|た}りないと{思|おも}って{描|か}き{足|た}してしまうと、{止|と}めどころが、わからなくなってしまいます。それは、{自分|じぶん}がどう{見|み}てどう{感|かん}じたかという{気持|きも}ちを{素直|すなお}に{絵|え}にするということとは{違|ちが}ってくる。②{絵|え}を{説明|せつめい}してしまうことになる。そうすると、{絵|え}がうるさくなります。

{客観的|きゃっかんてき}な{目|め}を{持|も}つことも{確|たし}かに{大事|だいじ}なことではあるんですが、{見|み}たまま{感|かん}じたままのストレートな{気持|きも}ちを{解説|かいせつ}してはいけないと{思|おも}うんです。
（{片岡|かたおか}{鶴太郎|つるたろう}『{鶴太郎|つるたろう}{流|りゅう}　{墨彩画|ぼくさいが}{入門|にゅうもん}』による）
（{注|ちゅう}1）{五分|ごぶ}：{全体|ぜんたい}の50パーセント
（{注|ちゅう}2）{対峙|たいじ}する：{向|む}き{合|あ}う`,
      arti: `Setelah sepuluh tahun melukis, rasanya baru belakangan ini saya mulai paham kapan harus menghentikan kuas. Sedikit demi sedikit saya mulai paham kiat meletakkan kuas tanpa melukis berlebihan.

Di awal-awal, sapuan kuas memang cenderung banyak. Justru karena keinginan melukis begitu kuat, saya merasa masih kurang, masih kurang, lalu terus menambah-nambah. Namun, menurut saya tidak perlu memaksakan diri menahannya. Memang, ① dalam hal apa pun, lebih baik dilakukan habis-habisan sampai tuntas.

Misalnya, kalau saat lapar kita tidak pernah makan sampai kenyang dan merasakan rasa kenyang, kita tidak akan tahu takarannya. Karena manusia tahu rasa kenyang, ia tahu takarannya: ini baru setengah (catatan 1), kalau delapan per sepuluh kenyang kira-kira segini. Sebab dengan sekali mencoba sampai tuntas, barulah kita memahami baiknya menahan diri dan tidak berlebihan.

(dihilangkan) Selama saya berhadapan (catatan 2) langsung dengan motif yang ingin saya lukis dan menggerakkan kuas sesuai apa yang saya rasakan, itu tidak masalah. Tetapi jika saya melihatnya secara objektif lalu menambah-nambah karena merasa di sini kurang, di sana kurang, saya jadi tidak tahu kapan harus berhenti. Itu menjadi berbeda dengan menuangkan secara jujur ke dalam lukisan bagaimana saya melihat dan merasakannya. Jadinya ② menjelaskan lukisan. Kalau begitu, lukisan menjadi "berisik".

Memiliki mata yang objektif memang hal yang penting, tetapi menurut saya perasaan lugas apa adanya — seperti yang dilihat dan dirasakan — tidak boleh dijelaskan.
(Dari buku pengantar lukisan tinta berwarna karya Kataoka Tsurutarō)
(Catatan 1) 五分: 50 persen dari keseluruhan
(Catatan 2) 対峙する: berhadapan`,
    },
    "9-2": {
      yomi: `{大方|おおかた}の{予想|よそう}に{反|はん}して、{科学|かがく}が、{飛躍的|ひやくてき}な{成果|せいか}をもたらす{現場|げんば}では、{誰|だれ}もが{実生活|じっせいかつ}の{中|なか}で{体験|たいけん}する{新鮮|しんせん}な{驚|おどろ}きや、たわいのない（{注|ちゅう}1）{思|おも}いつきの{類|たぐ}いがその{起点|きてん}となっている。むしろ、{科学|かがく}の{画期的|かっきてき}な{発明|はつめい}{発見|はっけん}など、{限|かぎ}りなく{日常的|にちじょうてき}で{具体的|ぐたいてき}なものごとが{元|もと}になっているのである。（{中略|ちゅうりゃく}）

しかし、{日|ひ}ごろの{思|おも}いつきや{驚|おどろ}きと{違|ちが}って、{思|おも}いついて{終|お}わり、{驚|おどろ}いただけ、ということにならないところが、{要|よう}するに{科学|かがく}の{特徴|とくちょう}である。{思|おも}いつきや{驚|おどろ}きは、{新|あたら}しい{確|たし}かな「ものの{見方|みかた}」へのきっかけでしかなく、{科学|かがく}とは、それらをとことん{洗練|せんれん}する{創意|そうい}{工夫|くふう}の{営|いとな}みにほかならない。{実|じつ}は、{創意|そうい}{工夫|くふう}こそが、{歴史|れきし}{上|じょう}も、{有数|ゆうすう}の{科学者|かがくしゃ}たちに{見|み}られる、かなり{一貫|いっかん}した{姿勢|しせい}なのである。

{何|なに}かに{驚|おどろ}いて、それまでは{当然|とうぜん}だと{思|おも}っていたことに、{少|すこ}し{違|ちが}った{角度|かくど}から{眼差|まなざ}しをむけてみる。それだけでなく、{違|ちが}った{角度|かくど}から{見|み}えてきたことを{首尾|しゅび}{一貫|いっかん}させ（{注|ちゅう}2）、{確|たし}かなものにすると、{求|もと}めても{無駄|むだ}な{望|のぞ}みだと{決|き}めつけていたことが、あっさりと{実現|じつげん}できることに{気|き}づく。{新鮮|しんせん}な{驚|おどろ}き、{些細|ささい}な{思|おも}いつき、そしてちょっとした{理解|りかい}の{修正|しゅうせい}をきっかけに、{常識|じょうしき}とは{少|すこ}し{違|ちが}った「ものの{見方|みかた}」をしたとき、どこか{一面化|いちめんか}していた{常識|じょうしき}そのものがより{豊|ゆた}かなものにならないか{考|かんが}えてみる。これが{科学|かがく}を{本当|ほんとう}に{発展|はってん}させた{人々|ひとびと}に{共通|きょうつう}した{姿勢|しせい}である。
（{瀬戸|せと}{一夫|かずお}『{科学的|かがくてき}{思考|しこう}とは{何|なん}だろうか―ものつくりの{視点|してん}から』による）
（{注|ちゅう}1）たわいのない：ここでは、{小|ちい}さな
（{注|ちゅう}2）{首尾|しゅび}{一貫|いっかん}させる：{始|はじ}めから{終|お}わりまで、{一貫|いっかん}しているようにする`,
      arti: `Berlawanan dengan dugaan kebanyakan orang, di tempat sains menghasilkan capaian yang melonjak, titik awalnya adalah keterkejutan segar yang dialami siapa pun dalam kehidupan nyata, atau ide-ide spontan yang remeh (catatan 1). Justru penemuan dan temuan sains yang revolusioner berasal dari hal-hal yang sangat sehari-hari dan konkret. (dihilangkan)

Namun, berbeda dengan ide spontan dan keterkejutan sehari-hari, ciri khas sains adalah tidak berhenti pada "terpikir lalu selesai" atau "sekadar terkejut". Ide spontan dan keterkejutan hanyalah pemicu menuju "cara pandang" baru yang pasti, dan sains tidak lain adalah kegiatan berkreasi untuk menyempurnakannya sampai tuntas. Sebenarnya, kreativitas inilah sikap yang cukup konsisten terlihat pada para ilmuwan terkemuka sepanjang sejarah.

Terkejut oleh sesuatu, lalu mencoba memandang hal yang selama ini dianggap wajar dari sudut yang sedikit berbeda. Tidak hanya itu, jika hal yang terlihat dari sudut berbeda itu dibuat konsisten dari awal sampai akhir (catatan 2) dan dipastikan, kita akan menyadari bahwa hal yang kita anggap harapan sia-sia ternyata bisa diwujudkan dengan mudah. Ketika, dipicu oleh keterkejutan segar, ide kecil, dan sedikit koreksi pemahaman, kita memandang dengan "cara pandang" yang sedikit berbeda dari akal sehat, kita mencoba memikirkan apakah akal sehat yang selama ini agak berat sebelah itu bisa menjadi lebih kaya. Inilah sikap yang sama-sama dimiliki orang-orang yang benar-benar mengembangkan sains.
(Dari buku karya Seto Kazuo tentang berpikir ilmiah dari sudut pandang pembuatan barang)
(Catatan 1) たわいのない: di sini, kecil/remeh
(Catatan 2) 首尾一貫させる: membuatnya konsisten dari awal sampai akhir`,
    },
    "9-3": {
      yomi: `{多|おお}くの{人|ひと}は、{個性|こせい}の{持|も}ち{主|ぬし}にあこがれて、できれば{見習|みなら}いたいものだと{思|おも}いながら、{実|じつ}は、{一方|いっぽう}で「{人並|ひとな}み」であることをひそかに{求|もと}めてもいる。「ひと」からはずれていたり、{遅|おく}れていたりすることは、{彼|かれ}らを{極度|きょくど}に{不安|ふあん}にする。「{同|おな}じ」{思|おも}いを{抱|いだ}いていたことを{発見|はっけん}することは{大|おお}きな{安心|あんしん}を{与|あた}えるはずであるから。「{同|おな}じ」{思|おも}いの{通|つう}ずる{仲間|なかま}が{見|み}つかると、すぐにでも{群|む}れようとする。①そういう{人間|にんげん}の{傾向|けいこう}は、{別|べつ}に{日本人|にほんじん}だけに{備|そな}わったものというわけでもなく、ほとんど、{本能的|ほんのうてき}なものとして、{多|おお}かれ{少|すく}なかれ{誰|だれ}もが{抱|かか}えている{要素|ようそ}であると{言|い}ってよい。

にもかかわらず{凡庸|ぼんよう}（{注|ちゅう}1）さは、{表向|おもてむ}き、なぜこれほど{忌|い}み{嫌|きら}われる（{注|ちゅう}2）のか。それは、おそらく、{人間|にんげん}というものの{大多数|だいたすう}が{凡庸|ぼんよう}な{生|せい}を{生|い}きるほかなく、{自分|じぶん}の{未来|みらい}もまたその{限界|げんかい}のなかにあることをうすうす{知|し}っているのだが、そのことをそう{決|き}め{付|つ}けられることは、{自分|じぶん}の{生|せい}を{希望|きぼう}のない{確定的|かくていてき}なイメージに{塗|ぬ}りこめてしまうことであり、それは②{個|こ}としての{価値|かち}を{否定|ひてい}されてしまうことにつながると{感|かん}じられるからである。

{生|い}きる{意欲|いよく}が{現|げん}にあるのに、お{前|まえ}の{未来|みらい}はこのとおり{当|あ}たり{前|まえ}のものでしかないと{規定|きてい}されることは、{未来|みらい}に{向|む}かうものとしてある「{生|せい}の{意欲|いよく}」の{本質的|ほんしつてき}{条件|じょうけん}を{根|ね}こそぎにしてしまう。{自|みずか}らが{有限|ゆうげん}な{存在|そんざい}であることを{大筋|おおすじ}ではわきまえつつ、しかもその{範囲|はんい}{内|ない}に{未知|みち}の{部分|ぶぶん}を{必|かなら}ずいくらかは{残|のこ}しておく。そこに{自|みずか}らが{個|こ}であることの{確証|かくしょう}をかろうじて{求|もと}めようとするのだ。
（{小浜|こはま}{逸郎|いつお}『この{国|くに}はなぜさびしいのか―「ものさし」を{失|うしな}った{日本人|にほんじん}』による）
（{注|ちゅう}1）{凡庸|ぼんよう}さ：ここでは、{人並|ひとな}み、{平凡|へいぼん}であること。
（{注|ちゅう}2）{忌|い}み{嫌|きら}う：ひどく{嫌|きら}う。`,
      arti: `Banyak orang mengagumi orang yang berkepribadian khas dan berpikir ingin meneladaninya jika bisa, tetapi sebenarnya di sisi lain mereka diam-diam juga mendambakan menjadi "seperti orang kebanyakan". Menyimpang dari "orang lain" atau tertinggal membuat mereka sangat cemas. Sebab menemukan bahwa orang lain memiliki perasaan yang "sama" pasti memberi rasa tenang yang besar. Begitu menemukan kawan yang sepemikiran, mereka langsung ingin berkelompok. Bisa dikatakan, ① kecenderungan manusia semacam itu bukan hanya dimiliki orang Jepang, melainkan unsur yang hampir naluriah dan sedikit banyak dimiliki setiap orang.

Meski begitu, mengapa sifat biasa-biasa saja (catatan 1) di permukaan begitu dibenci (catatan 2)? Mungkin karena, sebagian besar manusia tidak punya pilihan selain menjalani hidup yang biasa, dan samar-samar tahu bahwa masa depannya pun ada dalam batas itu, tetapi jika hal itu dipastikan begitu saja, hidupnya seolah dicat dengan gambaran pasti yang tanpa harapan, dan itu terasa berujung pada ② disangkalnya nilai sebagai individu.

Padahal semangat hidup benar-benar ada, tetapi jika ditetapkan bahwa "masa depanmu hanyalah biasa saja seperti ini", syarat esensial "semangat hidup" yang mengarah ke masa depan tercabut sampai ke akarnya. Sambil secara garis besar menyadari bahwa dirinya adalah keberadaan yang terbatas, manusia selalu menyisakan sedikit bagian yang belum diketahui di dalam batas itu. Di sanalah ia berusaha, meski susah payah, mencari kepastian bahwa dirinya adalah individu.
(Dari buku karya Kohama Itsuo tentang orang Jepang yang kehilangan "ukuran")
(Catatan 1) 凡庸さ: di sini, keadaan biasa-biasa saja, seperti orang kebanyakan.
(Catatan 2) 忌み嫌う: sangat membenci.`,
    },

    // ── 問題10：音楽研究のあり方 ──
    "10": {
      yomi: `{音楽|おんがく}に{限|かぎ}ったことではないが、{芸術|げいじゅつ}、{文化|ぶんか}などの{名|な}で{呼|よ}ばれるものはどうしても、{現実|げんじつ}の{政治|せいじ}{経済|けいざい}や{社会|しゃかい}{生活|せいかつ}にかかわることがらは{切|き}り{離|はな}されたものと{考|かんが}えられることが{多|おお}く、また、そうであるがゆえに{価値|かち}を{持|も}つものとされてきたと{言|い}ったほうがよいだろう。{近年|きんねん}のように{財政|ざいせい}{状況|じょうきょう}が{悪化|あっか}するなど、{現実|げんじつ}{生活|せいかつ}をめぐる{状況|じょうきょう}が{深刻|しんこく}になってくると、こういうものはしばしば{不要|ふよう}{不急|ふきゅう}な「{無駄|むだ}」として{切|き}り{捨|す}てられそうになる。{他方|たほう}で、{荒|あ}れた{世|よ}の{中|なか}をしばし（{注|ちゅう}1）{忘|わす}れるためのオアシスのような{場所|ばしょ}としての{意義|いぎ}が{叫|さけ}ばれるようになったりもするが、いずれにしてもその{音楽|おんがく}を{研究|けんきゅう}している{立場|たちば}のわれわれはしばしば、「この{世知辛|せちがら}い（{注|ちゅう}2）{世|よ}の{中|なか}で、そんなことをやっていられるというのはうらやましいことです」などと{言|い}われ、①{何|なん}とも{複雑|ふくざつ}な{心境|しんきょう}になるのである。

だが、コペルニクス{的|てき}{転回|てんかい}を{遂|と}げた（{注|ちゅう}3）と{言|い}っても、{過言|かごん}ではない{近年|きんねん}の{文化|ぶんか}{研究|けんきゅう}の{進展|しんてん}の{中|なか}で、{政治|せいじ}や{社会|しゃかい}の{話|はなし}と{切|き}り{離|はな}して{文化|ぶんか}が{論|ろん}じられるなどということが{幻想|げんそう}である、というより、そのような{幻想|げんそう}{自体|じたい}、すでに、{一定|いってい}の{政治的|せいじてき}{社会的|しゃかいてき}イデオロギーの{刻印|こくいん}を{帯|お}びた（{注|ちゅう}4）ものにほかならなかったということが{明|あき}らかにされてきた。{今|いま}や、{音楽|おんがく}{研究者|けんきゅうしゃ}の{中|なか}にも、{政治|せいじ}や{社会|しゃかい}から{切|き}り{離|はな}された{純粋|じゅんすい}な「{音楽|おんがく}そのもの」がどこかに{宙|ちゅう}（{注|ちゅう}5）に{浮|う}いたような{形|かたち}で{存在|そんざい}しているなどと{素朴|そぼく}に{信|しん}じているような{人|ひと}は{誰|だれ}もいないだろう。

{音楽|おんがく}{研究|けんきゅう}に{関|かか}わる{人々|ひとびと}の{意識|いしき}も{変|か}わり、{研究|けんきゅう}の{内実|ないじつ}も{大|おお}きく{変|か}わってきているにも{関|かか}わらず、むしろ、{音楽|おんがく}{研究|けんきゅう}の{世界|せかい}の{外側|そとがわ}にいる{人|ひと}のほうが、{音楽|おんがく}を「{純粋|じゅんすい}」な{形|かたち}で{囲|かこ}い{込|こ}みたがっているように{思|おも}われるのは②{皮肉|ひにく}なことだ。{社会|しゃかい}{科学|かがく}の{最先端|さいせんたん}で{議論|ぎろん}をしている{人|ひと}が、{音楽|おんがく}の{話|はなし}になったとたんに、30{年|ねん}{前|まえ}の{音楽|おんがく}{研究|けんきゅう}に{戻|もど}ったかのような{古典的|こてんてき}なデータや{図式|ずしき}でものを{考|かんが}えていることが{明|あき}らかになるような{場面|ばめん}に、これまで{何度|なんど}か{出会|であ}ってきた。{歴史|れきし}{学者|がくしゃ}などが{中心|ちゅうしん}になって、{編|あ}んだ{領域|りょういき}{横断的|おうだんてき}な{論集|ろんしゅう}などで、{音楽|おんがく}の{部分|ぶぶん}だけはひどく{浮|う}き{世|よ}{離|ばな}れした（{注|ちゅう}6）{古|ふる}めかしい{論文|ろんぶん}が{掲載|けいさい}されており、{音楽|おんがく}{研究|けんきゅう}の{最近|さいきん}の{成果|せいか}と{大|おお}きく{乖離|かいり}してしまっているようなこともしばしばある。ここ{十数年|じゅうすうねん}で、{音楽|おんがく}{研究者|けんきゅうしゃ}の{目|め}に{映|うつ}る{音楽|おんがく}の{世界|せかい}もずいぶんと{変|か}わっているのに、われわれの{発信|はっしん}が{不足|ふそく}しているために、その{面白|おもしろ}さを{十分|じゅうぶん}に{伝|つた}えきれていない。そんな{気|き}がするのである。
（{渡辺|わたなべ}{裕|ひろし}『{音楽|おんがく}は{社会|しゃかい}を{映|うつ}す―{考|かんが}える{耳|みみ}「{再論|さいろん}」』による）
（{注|ちゅう}1）しばし：しばらく
（{注|ちゅう}2）{世知辛|せちがら}い：{暮|く}らしにくい
（{注|ちゅう}3）コペルニクス{的|てき}{転回|てんかい}を{遂|と}げる：{考|かんが}え{方|かた}がこれまでと{根本的|こんぽんてき}に{変|か}わる
（{注|ちゅう}4）{刻印|こくいん}を{帯|お}びる：ここでは、{影響|えいきょう}をうける。
（{注|ちゅう}5）{宙|ちゅう}：{空中|くうちゅう}
（{注|ちゅう}6）{浮|う}き{世|よ}{離|ばな}れした：{現実|げんじつ}と{懸|か}け{離|はな}れた。`,
      arti: `Ini tidak hanya terbatas pada musik, tetapi hal-hal yang disebut seni, budaya, dan sebagainya sering kali mau tak mau dianggap terpisah dari urusan politik-ekonomi nyata dan kehidupan sosial; atau lebih tepatnya, justru karena itulah hal-hal itu dianggap bernilai. Ketika situasi seputar kehidupan nyata menjadi serius, seperti memburuknya kondisi keuangan belakangan ini, hal-hal seperti ini sering hampir dibuang sebagai "pemborosan" yang tidak perlu dan tidak mendesak. Di sisi lain, ada pula seruan tentang maknanya sebagai tempat seperti oase untuk sejenak (catatan 1) melupakan dunia yang kacau. Bagaimanapun, kami yang meneliti musik sering dikatakan, "Di dunia yang serba sulit (catatan 2) ini, enak sekali bisa melakukan hal seperti itu," dan ① perasaan kami menjadi sungguh campur aduk.

Namun, dalam kemajuan penelitian budaya belakangan ini, yang tidak berlebihan jika dikatakan telah mengalami putaran Kopernikus (catatan 3), telah terungkap bahwa membahas budaya terpisah dari politik dan masyarakat adalah ilusi; lebih dari itu, ilusi semacam itu sendiri ternyata tidak lain sudah terpengaruh (catatan 4) ideologi politik-sosial tertentu. Kini, di antara peneliti musik pun mungkin tidak ada lagi yang dengan polos percaya bahwa "musik itu sendiri" yang murni, terpisah dari politik dan masyarakat, ada di suatu tempat seolah melayang di udara (catatan 5).

Meski kesadaran orang-orang yang terlibat dalam penelitian musik telah berubah dan isi penelitiannya pun berubah besar, ② ironisnya, justru orang-orang di luar dunia penelitian musik tampaknya ingin mengurung musik dalam bentuk yang "murni". Saya sudah beberapa kali menjumpai situasi di mana orang yang berdiskusi di garis terdepan ilmu sosial, begitu pembicaraan beralih ke musik, ternyata berpikir dengan data dan skema klasik seolah kembali ke penelitian musik 30 tahun lalu. Dalam kumpulan makalah lintas bidang yang disusun terutama oleh sejarawan dan lainnya, sering kali hanya bagian musiknya yang memuat makalah kuno yang sangat jauh dari kenyataan (catatan 6), sehingga sangat menyimpang dari hasil penelitian musik terkini. Dalam belasan tahun terakhir, dunia musik di mata peneliti musik pun sudah banyak berubah, tetapi karena kami kurang menyebarkannya, kami belum bisa menyampaikan daya tariknya sepenuhnya. Begitulah perasaan saya.
(Dari buku karya Watanabe Hiroshi, "Musik Mencerminkan Masyarakat")
(Catatan 1) しばし: sejenak
(Catatan 2) 世知辛い: sulit untuk hidup
(Catatan 3) コペルニクス的転回を遂げる: cara berpikir berubah secara mendasar dari sebelumnya
(Catatan 4) 刻印を帯びる: di sini, terpengaruh.
(Catatan 5) 宙: udara
(Catatan 6) 浮き世離れした: jauh dari kenyataan.`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
{近年|きんねん}{食品|しょくひん}{問題|もんだい}への{関心|かんしん}が{高|たか}い。その{多|おお}くは{食品|しょくひん}の{安全性|あんぜんせい}を{不安視|ふあんし}する{声|こえ}だ。すでに{政府|せいふ}は{中立|ちゅうりつ}の{立場|たちば}で{公正|こうせい}に{科学的|かがくてき}{評価|ひょうか}を{行|おこな}う{機関|きかん}を{設置|せっち}し、{企業|きぎょう}も{独自|どくじ}の{検査|けんさ}や{表示|ひょうじ}を{行|おこな}うなどの{対策|たいさく}を{始|はじ}めた{結果|けっか}、{以前|いぜん}より{安全性|あんぜんせい}は{向上|こうじょう}していると{言|い}える。

しかし{残念|ざんねん}ながら、まだ{消費者|しょうひしゃ}の{安心感|あんしんかん}には{結|むす}びついていない。{今後|こんご}{必要|ひつよう}なのは、{安全|あんぜん}なものは{安全|あんぜん}だと{消費者|しょうひしゃ}が{正|ただ}しく{理解|りかい}できることではないだろうか。{科学的|かがくてき}に{安全|あんぜん}だと{判断|はんだん}された{食品|しょくひん}が、{消費者|しょうひしゃ}にも{安全|あんぜん}だと{認知|にんち}されれば{消費者|しょうひしゃ}の{安心|あんしん}につながる。そのためには、{提供|ていきょう}する{側|がわ}のわかりやすい{説明|せつめい}とともに、{消費者|しょうひしゃ}{側|がわ}もそれを{理解|りかい}するための{科学的|かがくてき}{知識|ちしき}を{備|そな}える{必要|ひつよう}があるだろう。

【{意見|いけん} B】
{発生|はっせい}した{食品|しょくひん}{事故|じこ}に{対|たい}して{適切|てきせつ}な{対策|たいさく}がとられ、{科学的|かがくてき}に{安全|あんぜん}が{証明|しょうめい}された{後|あと}も、いつまでもその{食品|しょくひん}の{消費|しょうひ}{回復|かいふく}が{見|み}られないということはよくある。{消費者|しょうひしゃ}が{納得|なっとく}しないのである。

（{中略|ちゅうりゃく}）{安全|あんぜん}に{関|かん}しては、{絶対|ぜったい}{安全|あんぜん}ということはありえないにしても、コストさえ{掛|か}ければ{技術的|ぎじゅつてき}に{安全度|あんぜんど}を{上|あ}げることが{可能|かのう}である。しかも{安全度|あんぜんど}は{多|おお}くの{場合|ばあい}、{科学的|かがくてき}に{数値|すうち}として{明示|めいじ}できる。しかし{安心|あんしん}の{場合|ばあい}には、{示|しめ}された{客観的|きゃっかんてき}な{事実|じじつ}に{納得|なっとく}するかどうかは、{消費者|しょうひしゃ}{一人一人|ひとりひとり}の{主観|しゅかん}によっており、これを{説得|せっとく}するのは{簡単|かんたん}なことではない。{安全|あんぜん}を{安心|あんしん}に{繋|つな}げる{難|むずか}しさは、フードシステム（{注|ちゅう}）に{対|たい}する{消費者|しょうひしゃ}の{信頼|しんらい}の{程度|ていど}が{大|おお}きく{関係|かんけい}する。{消費者|しょうひしゃ}と{生産者|せいさんしゃ}あるいは、{政府|せいふ}の{間|あいだ}に{信頼|しんらい}{関係|かんけい}が{構築|こうちく}されていれば{安全|あんぜん}{証明|しょうめい}がほぼ{同時|どうじ}に{安心|あんしん}へと{繋|つな}がる。
（{時子山|ときこやま}ひろみ『{安全|あんぜん}で{良質|りょうしつ}な{食生活|しょくせいかつ}を{手|て}に{入|い}れる―フードシステム{入門|にゅうもん}』による）
（{注|ちゅう}）フードシステム：{食品|しょくひん}が{生産者|せいさんしゃ}から{消費者|しょうひしゃ}に{届|とど}くまでの{流|なが}れ`,
      arti: `【Pendapat A】
Belakangan ini minat terhadap masalah pangan tinggi. Sebagian besar adalah suara yang mengkhawatirkan keamanan pangan. Pemerintah sudah mendirikan lembaga yang melakukan penilaian ilmiah secara adil dari posisi netral, dan perusahaan juga mulai melakukan langkah seperti pemeriksaan dan pelabelan sendiri; hasilnya, bisa dikatakan keamanannya meningkat dibanding sebelumnya.

Namun sayangnya, hal itu belum berujung pada rasa tenang konsumen. Yang diperlukan ke depan, bukankah agar konsumen bisa memahami dengan benar bahwa yang aman memang aman? Jika makanan yang secara ilmiah dinilai aman juga diakui aman oleh konsumen, itu akan berujung pada rasa tenang konsumen. Untuk itu, selain penjelasan yang mudah dipahami dari pihak penyedia, pihak konsumen pun perlu memiliki pengetahuan ilmiah untuk memahaminya.

【Pendapat B】
Sering terjadi, meski langkah yang tepat telah diambil terhadap kecelakaan pangan yang terjadi dan keamanannya telah dibuktikan secara ilmiah, konsumsi makanan itu tak kunjung pulih. Konsumen tidak puas.

(dihilangkan) Mengenai keamanan, meski keamanan mutlak itu mustahil, asal mengeluarkan biaya, tingkat keamanan bisa ditingkatkan secara teknis. Terlebih lagi, tingkat keamanan dalam banyak kasus bisa ditunjukkan secara ilmiah sebagai angka. Namun, dalam hal rasa tenang, apakah konsumen menerima fakta objektif yang ditunjukkan atau tidak tergantung pada subjektivitas masing-masing konsumen, dan meyakinkannya tidaklah mudah. Sulitnya menghubungkan keamanan dengan rasa tenang sangat berkaitan dengan tingkat kepercayaan konsumen terhadap sistem pangan (catatan). Jika hubungan saling percaya terbangun antara konsumen dan produsen atau pemerintah, bukti keamanan hampir bersamaan berujung pada rasa tenang.
(Dari buku pengantar sistem pangan karya Tokikoyama Hiromi)
(Catatan) フードシステム: alur makanan dari produsen sampai ke konsumen`,
    },

    // ── 問題12：目を見て話す ──
    "12": {
      yomi: `この{秘訣|ひけつ}を{教|おし}えてくれたのは、まだ{小|ちい}さかった{頃|ころ}の{娘|むすめ}でした。

「{外|そと}から{帰|かえ}ったら、{手|て}を{洗|あら}いなさい」

「ごちそうさまを{言|い}いなさい」

（{中略|ちゅうりゃく}）どんなに{声|こえ}に{威厳|いげん}を{込|こ}めて{言|い}うつもりでも、{新聞|しんぶん}を{読|よ}みながらだと、まるでだめ。

【お{父|とう}さんはこう{言|い}っているけど、{手|て}を{洗|あら}うっていうのは、{別|べつ}に{大事|だいじ}なことじゃないんだな】

きちんと{目|め}を{見|み}ていないと、{子供|こども}はたちまちそう{判断|はんだん}してしまいます。よそ{見|み}をしながら{口|くち}やかましく{繰|く}り{返|かえ}しても、①「ごちそうさま」を{言|い}うようにはならないのです。

{目|め}を{見|み}て{話|はな}すことは、{分|わ}かり{合|あ}い、メッセージを{伝|つた}え、コミュニケーションをよくする{秘訣|ひけつ}。これは{子供|こども}に{限|かぎ}ったことではありません。{仕事|しごと}でも{家庭|かてい}でも、すべての{場|ば}において{有効|ゆうこう}です。

{大人|おとな}になると、ぎくしゃくすることは{頻繁|ひんぱん}にあります。

{環境|かんきょう}も{価値観|かちかん}も{考|かんが}え{方|かた}も{違|ちが}う{人|ひと}たちの{集|あつ}まりである{以上|いじょう}、{意見|いけん}が{食|く}い{違|ちが}ったり、{誤解|ごかい}が{生|しょう}じてトラブルになることは{珍|めずら}しくありません。

「じっくり{話|はな}し{合|あ}えば、ちゃんと{分|わ}かり{合|あ}える」というのは、{僕|ぼく}の{見|み}たところ、{残念|ざんねん}ながら{理想論|りそうろん}。どちらかが{妥協|だきょう}したり、お{互|たが}いがちょっと{意見|いけん}を{曲|ま}げたりして{合|あ}わせているだけで、100パーセントの{解決|かいけつ}などありえないのが{現実|げんじつ}です。

あげくの{果|は}てに（{注|ちゅう}）「{話|はな}しても{無駄|むだ}だし、また{同|おな}じことの{繰|く}り{返|かえ}しか」とうんざりし、コミュニケーションをあきらめてしまう――ほうっておくとこんな{事態|じたい}に{陥|おちい}ることも、{珍|めずら}しくはありません。

それでもコミュニケーションを{諦|あきら}めたくないと{思|おも}ったとき、{僕|ぼく}はこの{秘訣|ひけつ}を{思|おも}い{出|だ}しました。いくら{意見|いけん}が{食|く}い{違|ちが}っても、どんなにトラブルが{燃|も}え{上|あ}がっても、{必|かなら}ず{相手|あいて}の{目|め}を{見|み}て{話|はなし}をするということを。

{考|かんが}え{方|かた}がまるで{合|あ}わず、{最後|さいご}まで{言|い}い{分|ぶん}は{平行線|へいこうせん}をたどるような{議論|ぎろん}でも、{相手|あいて}の{目|め}を{見|み}て{話|はな}し{続|つづ}ければ、{不思議|ふしぎ}なことに{相手|あいて}に{尊敬|そんけい}の{念|ねん}が{湧|わ}いてきます。

たとえ「この{人|ひと}の{言|い}っていることは、{間違|まちが}っている！」と{思|おも}っていても、{相手|あいて}の{目|め}を{見|み}て{聞|き}いていれば、「その{人|ひと}の{人間性|にんげんせい}」に{対|たい}しては、{別|べつ}の{気持|きも}ちを{抱|いだ}くようになります。{意見|いけん}は{認|みと}められなくても、{人|ひと}としては{認|みと}められるということです。

{言|い}い{合|あ}っても{目|め}と{目|め}を{見|み}つめ{合|あ}っていれば、{不思議|ふしぎ}な{一体感|いったいかん}すら{生|う}まれます。{結果|けっか}として{解決|かいけつ}には{至|いた}らなくても、{悪|わる}い{方向|ほうこう}には{向|む}かわない。これだけは、{何度|なんど}も{試|ため}した{僕|ぼく}の{保証|ほしょう}{付|つ}きです。

{疲|つか}れていたり、へこんでいたりすると、{人|ひと}は{目|め}を{見|み}て{話|はな}すことができません。そして{下|した}を{向|む}いていればいるほど、よくない{事態|じたい}が{悪化|あっか}します。

さあ、{洗|あら}い{物|もの}をしながら{大事|だいじ}な{話|はなし}をするのはやめましょう。パソコンから{顔|かお}を{上|あ}げて、まっすぐ{目|め}を{見|み}て{話|はな}しましょう。

{理解|りかい}できない{相手|あいて}でも、{受|う}け{入|い}れられない{相手|あいて}でも、この{秘訣|ひけつ}を{知|し}っていれば、②{何|なに}か{別|べつ}の{関係|かんけい}が{生|う}まれるはずです。
（{松浦|まつうら}{弥太郎|やたろう}『あたらしいあたりまえ。{一人|ひとり}{暮|ぐ}らしの{中|なか}の{工夫|くふう}と{発見|はっけん}ノート2』による）
（{注|ちゅう}）あげくの{果|は}てに：{結局|けっきょく}`,
      arti: `Yang mengajarkan kiat ini kepada saya adalah anak perempuan saya ketika masih kecil.

"Kalau pulang dari luar, cuci tangan."

"Ucapkan 'gochisōsama'."

(dihilangkan) Sewibawa apa pun saya berniat mengucapkannya, kalau sambil membaca koran, sama sekali tidak mempan.

【Ayah bilang begitu, tapi ternyata cuci tangan itu bukan hal yang penting, ya.】

Jika tidak benar-benar menatap matanya, anak langsung menilai begitu. Meski diulang-ulang dengan cerewet sambil melihat ke arah lain, ① anak tidak akan mengucapkan "gochisōsama".

Berbicara sambil menatap mata adalah kiat untuk saling memahami, menyampaikan pesan, dan memperbaiki komunikasi. Ini tidak terbatas pada anak-anak. Di pekerjaan maupun di rumah, ini efektif di segala tempat.

Ketika dewasa, hubungan yang kaku sering terjadi.

Karena merupakan kumpulan orang yang lingkungan, nilai, dan cara berpikirnya berbeda, tidak jarang pendapat berselisih, atau terjadi salah paham hingga timbul masalah.

"Kalau dibicarakan dengan tenang, pasti bisa saling memahami" — menurut pengamatan saya, sayangnya itu teori ideal. Kenyataannya, hanya salah satu pihak yang berkompromi, atau masing-masing sedikit mengalah untuk menyesuaikan diri; penyelesaian 100 persen itu mustahil.

Akhirnya (catatan), kita merasa muak, "Bicara pun percuma, pasti terulang lagi hal yang sama," lalu menyerah berkomunikasi — jika dibiarkan, tidak jarang terjerumus ke keadaan seperti ini.

Saat saya tetap tidak ingin menyerah berkomunikasi, saya teringat kiat ini. Sejauh apa pun pendapat berselisih, sepanas apa pun masalahnya, selalu berbicara sambil menatap mata orang itu.

Bahkan dalam perdebatan di mana cara berpikir sama sekali tidak cocok dan pendapat masing-masing tetap sejajar tak bertemu sampai akhir, jika terus berbicara sambil menatap matanya, anehnya rasa hormat terhadap orang itu muncul.

Meski kita berpikir "Yang dikatakan orang ini salah!", jika mendengarkan sambil menatap matanya, kita mulai memiliki perasaan lain terhadap "kemanusiaan orang itu". Artinya, meski pendapatnya tidak bisa diterima, ia bisa diakui sebagai manusia.

Meski saling beradu argumen, jika saling menatap mata, bahkan muncul rasa kebersamaan yang aneh. Meski hasilnya tidak sampai terselesaikan, keadaan tidak menuju ke arah yang buruk. Setidaknya ini saya jamin, karena sudah berkali-kali mencobanya.

Saat lelah atau sedang terpuruk, orang tidak bisa berbicara sambil menatap mata. Dan semakin menunduk, keadaan buruk makin memburuk.

Nah, berhentilah membicarakan hal penting sambil mencuci piring. Angkat wajah dari komputer, dan bicaralah sambil menatap lurus matanya.

Meski dengan orang yang tidak bisa dipahami, meski dengan orang yang tidak bisa diterima, jika tahu kiat ini, ② pasti akan lahir semacam hubungan yang lain.
(Dari buku karya Matsuura Yatarō)
(Catatan) あげくの果てに: akhirnya`,
    },

    // ── 問題13：原口市市民農園 利用者募集案内 ──
    "13": {
      yomi: `{市民|しみん}{農園|のうえん}は、{小|しょう}{面積|めんせき}の{土地|とち}を{利用|りよう}して{野菜|やさい}や{花|はな}{作|づく}りを{楽|たの}しむための{貸|か}し{農園|のうえん}です。{野菜|やさい}や{花|はな}{作|づく}りに{興味|きょうみ}はあるけれど{育|そだ}てる{場所|ばしょ}がないといった{方々|かたがた}は、{市民|しみん}{農園|のうえん}を{利用|りよう}してみませんか。

［{利用者|りようしゃ}］{原口|はらぐち}{市内|しない}にお{住|す}まいの{人|ひと}または{市内|しない}に{勤|つと}める{人|ひと}

［{利用|りよう}{期間|きかん}］2014{年|ねん}4{月|がつ}―2015{年|ねん}3{月|がつ}（{最長|さいちょう}3{年間|ねんかん}の{継続|けいぞく}{利用|りよう}が{可能|かのう}）

［{農園|のうえん}の{場所|ばしょ}、{特徴|とくちょう}、{料金|りょうきん}］{今回|こんかい}{募集|ぼしゅう}する{農園|のうえん}は{以下|いか}の4{箇所|かしょ}です。

{場所|ばしょ}　　{特徴|とくちょう}　　{料金|りょうきん}/{年|ねん}
1　{原口市|はらぐちし}{東山|ひがしやま}　　{指導|しどう}を{受|う}けながら、{共同|きょうどう}で{楽|たの}しく{野菜|やさい}や{花|はな}の{栽培|さいばい}ができます（{栽培|さいばい}する{野菜|やさい}や{花|はな}は、{農園|のうえん}によって{決|き}められています）。{必要|ひつよう}な{種|たね}、{苗|なえ}、{農具|のうぐ}などは{準備|じゅんび}してあります。　　8000{円|えん}
2　{原口市|はらぐちし}{西川|にしかわ}　　10ｍ²を{個人|こじん}で{借|か}りて、{気軽|きがる}に{野菜|やさい}や{花|はな}の{栽培|さいばい}が{楽|たの}しめます。{必要|ひつよう}に{応|おう}じて{栽培|さいばい}{指導|しどう}を{受|う}けられます。{種|たね}、{苗|なえ}などは{各自|かくじ}で{準備|じゅんび}してください。{農具|のうぐ}は{貸|か}し{出|だ}します。　　5000{円|えん}
3　{原口市|はらぐちし}{三田|みた}　　10ｍ²を{個人|こじん}で{借|か}りて、{自由|じゆう}に{野菜|やさい}や{花|はな}の{栽培|さいばい}が{楽|たの}しめます。{種|たね}、{苗|なえ}、{必要|ひつよう}な{農具|のうぐ}は、{各自|かくじ}で{準備|じゅんび}してください。　　3000{円|えん}
4　{原口市|はらぐちし}{池沢|いけざわ}　　50ｍ²{以上|いじょう}を{個人|こじん}で{借|か}りて、じっくり{野菜|やさい}や{花|はな}の{栽培|さいばい}が{楽|たの}しめます。{種|たね}、{苗|なえ}、{必要|ひつよう}な{農具|のうぐ}は、{各自|かくじ}で{準備|じゅんび}してください。{農業|のうぎょう}{用|よう}{大型|おおがた}{機械|きかい}の{貸出|かしだし}を{行|おこな}っています。　　5000{円|えん}

1、2、3は{市街地|しがいち}に{近|ちか}い、{比較的|ひかくてき}{利用|りよう}しやすい{場所|ばしょ}にあります。4は{豊|ゆた}かな{自然|しぜん}に{囲|かこ}まれた{郊外|こうがい}にあります。3、4では{栽培|さいばい}{指導|しどう}は{行|おこな}っていません。

［{応募|おうぼ}{方法|ほうほう}］{往復|おうふく}はがきに、（1）{利用|りよう}を{希望|きぼう}する{農園|のうえん}の{場所|ばしょ}、（2）{利用者|りようしゃ}の{名前|なまえ}、{住所|じゅうしょ}、{電話|でんわ}{番号|ばんごう}を{記入|きにゅう}し、{市役所|しやくしょ}{市民課|しみんか}{市民|しみん}{農園|のうえん}{係|がかり}あてに{送|おく}ってください。{希望者|きぼうしゃ}が{多|おお}い{場合|ばあい}は{抽選|ちゅうせん}になります。

［{応募|おうぼ}{締切|しめきり}］2014{年|ねん}3{月|がつ}2{日|か}（{当日|とうじつ}{消印|けしいん}{有効|ゆうこう}）

［{問|と}い{合|あ}わせ{先|さき}］{原口|はらぐち}{市役所|しやくしょ}{市民課|しみんか}{市民|しみん}{農園|のうえん}{係|がかり}　{電話|でんわ}：031（389）6930`,
      arti: `Kebun warga adalah kebun sewaan untuk menikmati menanam sayur dan bunga di lahan kecil. Bagi Anda yang tertarik menanam sayur dan bunga tetapi tidak punya tempat, bagaimana kalau mencoba kebun warga?

[Pengguna] Orang yang tinggal di Kota Haraguchi atau yang bekerja di dalam kota

[Masa penggunaan] April 2014 – Maret 2015 (bisa diperpanjang hingga maksimal 3 tahun)

[Lokasi, ciri, dan biaya kebun] Kebun yang dibuka kali ini ada 4 lokasi berikut.

Lokasi — Ciri — Biaya/tahun
1. Higashiyama, Kota Haraguchi — Bisa menanam sayur dan bunga bersama-sama dengan menyenangkan sambil dibimbing (sayur dan bunga yang ditanam ditentukan oleh kebun). Benih, bibit, alat tani, dan lainnya sudah disiapkan. — 8.000 yen
2. Nishikawa, Kota Haraguchi — Menyewa 10 m² secara pribadi dan menikmati menanam sayur dan bunga dengan santai. Bimbingan menanam bisa didapat bila diperlukan. Benih, bibit, dan lainnya disiapkan masing-masing. Alat tani dipinjamkan. — 5.000 yen
3. Mita, Kota Haraguchi — Menyewa 10 m² secara pribadi dan bebas menikmati menanam sayur dan bunga. Benih, bibit, dan alat tani yang diperlukan disiapkan masing-masing. — 3.000 yen
4. Ikezawa, Kota Haraguchi — Menyewa 50 m² atau lebih secara pribadi dan menikmati menanam sayur dan bunga dengan tekun. Benih, bibit, dan alat tani yang diperlukan disiapkan masing-masing. Tersedia penyewaan mesin pertanian besar. — 5.000 yen

Nomor 1, 2, dan 3 berada di tempat yang dekat dengan pusat kota dan relatif mudah dijangkau. Nomor 4 berada di pinggiran kota yang dikelilingi alam yang kaya. Di nomor 3 dan 4 tidak ada bimbingan menanam.

[Cara mendaftar] Tuliskan pada kartu pos berbalas: (1) lokasi kebun yang diinginkan, (2) nama, alamat, dan nomor telepon pengguna, lalu kirimkan ke Seksi Kebun Warga, Bagian Kewargaan, Balai Kota. Jika peminat banyak, akan diundi.

[Batas pendaftaran] 2 Maret 2014 (cap pos tanggal tersebut berlaku)

[Kontak] Seksi Kebun Warga, Bagian Kewargaan, Balai Kota Haraguchi, telepon: 031 (389) 6930`,
    },
  },
};
