import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2012
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1212: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{従来|じゅうらい}の【{枠|わく}】を{超|こ}えて{新|あたら}しい{分野|ぶんや}に{進出|しんしゅつ}する{企業|きぎょう}が{増|ふ}えている。",
      arti: "Makin banyak perusahaan yang melampaui 【batas/kerangka】 selama ini dan merambah bidang baru.",
      optArti: ["dinding (壁)", "kerangka, batas (枠)", "parit, selokan (溝)", "tepi, pinggiran (縁)"],
    },
    2: {
      yomi: "この{情報誌|じょうほうし}は{国内|こくない}の{主|おも}な{観光|かんこう}{名所|めいしょ}をほぼ【{網羅|もうら}】している。",
      arti: "Majalah informasi ini hampir 【mencakup seluruh】 tempat wisata utama di dalam negeri.",
    },
    3: {
      yomi: "このような{賞|しょう}を{受|う}けることは、{私|わたし}にとって{大変|たいへん}【{名誉|めいよ}】なことです。",
      arti: "Menerima penghargaan seperti ini merupakan 【kehormatan】 besar bagi saya.",
    },
    4: {
      yomi: "{新|しん}{商品|しょうひん}の{開発|かいはつ}には{多額|たがく}の{資金|しきん}を【{費|つい}やした】。",
      arti: "Kami 【menghabiskan】 dana besar untuk mengembangkan produk baru.",
    },
    5: {
      yomi: "あそこに{見|み}えるのは、{千年|せんねん}{前|まえ}に{建|た}てられた【{由緒|ゆいしょ}】あるお{寺|てら}です。",
      arti: "Yang terlihat di sana adalah kuil 【bersejarah/bermartabat】 yang dibangun seribu tahun lalu.",
    },
    6: {
      yomi: "{若|わか}いスタッフたちが【{手際|てぎわ}】よく{作業|さぎょう}を{進|すす}めていた。",
      arti: "Para staf muda mengerjakan tugasnya dengan 【cekatan】.",
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{会議|かいぎ}の{直前|ちょくぜん}に{部長|ぶちょう}の{都合|つごう}が{悪|わる}くなり、（　）{私|わたし}が{代理|だいり}で{出席|しゅっせき}することになった。",
      arti: "Tepat sebelum rapat, manajer berhalangan, sehingga (…) saya hadir sebagai wakilnya.",
      optYomi: ["{瞬時|しゅんじ}に", "{迅速|じんそく}に", "{即刻|そっこく}", "{急遽|きゅうきょ}"],
      optArti: ["dalam sekejap", "dengan cepat (tanggap)", "segera, saat itu juga (perintah)", "mendadak, tergesa-gesa (karena keadaan)"],
    },
    8: {
      yomi: "あの{人|ひと}は「{申請書|しんせいしょ}は{締|し}め{切|き}りまでに{絶対|ぜったい}に{提出|ていしゅつ}した」と、まだ（　）いる。",
      arti: "Orang itu masih (…) bahwa \"formulir pengajuan pasti sudah diserahkan sebelum batas waktu\".",
      optYomi: ["{言|い}い{残|のこ}して", "{言|い}い{張|は}って", "{言|い}い{渡|わた}して", "{言|い}い{放|はな}って"],
      optArti: ["meninggalkan pesan", "bersikeras mengatakan", "menjatuhkan (vonis, perintah)", "berkata dengan lantang"],
    },
    9: {
      yomi: "このままでは{交渉|こうしょう}がまとまらないので、{互|たが}いに（　）せざるをえない。",
      arti: "Kalau begini terus negosiasi tidak akan selesai, jadi kedua pihak terpaksa (…).",
      optYomi: ["{同調|どうちょう}", "{妥協|だきょう}", "{和解|わかい}", "{融合|ゆうごう}"],
      optArti: ["ikut menyetujui", "berkompromi", "berdamai", "berpadu, menyatu"],
    },
    10: {
      yomi: "この{論文|ろんぶん}が{今後|こんご}の{医学|いがく}の{発展|はってん}に（　）するところは{大|おお}きいだろう。",
      arti: "(…) makalah ini bagi perkembangan ilmu kedokteran ke depan tentu besar.",
      optYomi: ["{寄与|きよ}", "{普及|ふきゅう}", "{供与|きょうよ}", "{波及|はきゅう}"],
      optArti: ["sumbangsih, kontribusi", "penyebarluasan", "pemberian (bantuan, fasilitas)", "imbas, merembet"],
    },
    11: {
      yomi: "{今年|ことし}の{花火|はなび}{大会|たいかい}は、30{万人|まんにん}を{超|こ}える（　）が{予想|よそう}されている。",
      arti: "Festival kembang api tahun ini diperkirakan dihadiri (…) lebih dari 300 ribu orang.",
      optYomi: ["{人込|ひとご}み", "{人波|ひとなみ}", "{人通|ひとどお}り", "{人出|ひとで}"],
      optArti: ["keramaian, desakan orang", "lautan manusia", "lalu-lalang orang", "jumlah orang yang keluar/datang"],
    },
    12: {
      yomi: "{仕事|しごと}の{分担|ぶんたん}を{決|き}める{前|まえ}に、{必要|ひつよう}な{作業|さぎょう}をすべて（　）した。",
      arti: "Sebelum menentukan pembagian kerja, saya (…) semua pekerjaan yang diperlukan.",
      optArti: ["mendaftar (list up)", "mendaftarkan diri (entry)", "menyetok", "mengoordinasikan, memadupadankan"],
    },
    13: {
      yomi: "{朝|あさ}から{頭痛|ずつう}がひどかったが、{薬|くすり}を{飲|の}んだら、だいぶ{痛|いた}みが（　）きた。",
      arti: "Sejak pagi sakit kepala saya parah, tetapi setelah minum obat, rasa sakitnya cukup (…).",
      optYomi: ["{弱|よわ}って", "{和|やわ}らいで", "{薄|うす}まって", "{安|やす}らいで"],
      optArti: ["melemah (badan, tenaga)", "mereda", "menjadi encer/tipis", "menjadi tenteram (hati)"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{商品|しょうひん}の{原価|げんか}が{上|あ}がったが、{販売|はんばい}{価格|かかく}への{影響|えいきょう}は【{当面|とうめん}】ないだろう。",
      arti: "Harga pokok barang naik, tetapi 【untuk sementara】 tampaknya tidak berpengaruh pada harga jual.",
      optYomi: [null, "{直接|ちょくせつ}は", null, "{大|たい}して"],
      optArti: ["untuk sementara", "secara langsung", "masa sih", "tidak terlalu"],
    },
    15: {
      yomi: "{今回|こんかい}の{開発|かいはつ}{計画|けいかく}は、これまでのものとは【スケール】が{違|ちが}う。",
      arti: "Rencana pengembangan kali ini berbeda 【skala】-nya dengan yang selama ini.",
      optYomi: ["{方針|ほうしん}", "{規模|きぼ}", "{目的|もくてき}", "{意義|いぎ}"],
      optArti: ["kebijakan", "skala", "tujuan", "makna"],
    },
    16: {
      yomi: "{友人|ゆうじん}は【しきりに】うなずきながら{話|はなし}を{聞|き}いていた。",
      arti: "Teman saya mendengarkan sambil 【berkali-kali】 mengangguk.",
      optYomi: ["{小|ちい}さく", "{時々|ときどき}", "{大|おお}きく", "{何度|なんど}も"],
      optArti: ["kecil-kecil", "kadang-kadang", "besar-besar", "berkali-kali"],
    },
    17: {
      yomi: "【{先方|せんぽう}】に{確認|かくにん}した{上|うえ}で、{企画書|きかくしょ}の{内容|ないよう}を{決定|けってい}した。",
      arti: "Setelah memastikan kepada 【pihak sana】, isi proposal ditetapkan.",
      optYomi: ["{専門家|せんもんか}", "{全員|ぜんいん}", "{相手|あいて}", "{上司|じょうし}"],
      optArti: ["ahli", "semua orang", "pihak lawan, mitra", "atasan"],
    },
    18: {
      yomi: "こんなに【けなされる】とは{思|おも}ってもみなかった。",
      arti: "Saya tidak menyangka akan 【dicela】 sampai segini.",
      optYomi: ["{悪|わる}く{言|い}われる", "{高|たか}く{評価|ひょうか}される", "{反対|はんたい}される", "{喜|よろこ}ばれる"],
      optArti: ["dijelek-jelekkan", "dinilai tinggi", "ditentang", "disambut gembira"],
    },
    19: {
      yomi: "{山田|やまだ}さんは、{口癖|くちぐせ}のように「【おっくうだ】」と{言|い}う。",
      arti: "Yamada-san selalu berkata \"【malas, merepotkan】\" seperti kebiasaan.",
      optYomi: ["{平気|へいき}だ", "{愉快|ゆかい}だ", "{面倒|めんどう}だ", "{退屈|たいくつ}だ"],
      optArti: ["tidak apa-apa", "menyenangkan", "merepotkan", "membosankan"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      yomi: "{広大|こうだい}",
      arti: "広大 = luas sekali (lahan, wilayah)",
      optYomi: [
        "{今回|こんかい}の{金融|きんゆう}{危機|きき}は{世界|せかい}{経済|けいざい}に{広大|こうだい}な{打撃|だげき}を{与|あた}えた。",
        "{緑|みどり}が{多|おお}い{広大|こうだい}なキャンパスは、この{大学|だいがく}の{魅力|みりょく}のひとつです。",
        "{円高|えんだか}の{影響|えいきょう}は、ますます{広大|こうだい}な{業種|ぎょうしゅ}に{及|およ}んでいる。",
        "A{社|しゃ}は{再|さい}{開発|かいはつ}{地区|ちく}に{広大|こうだい}なビルの{建設|けんせつ}を{予定|よてい}している。",
      ],
      optArti: [
        "Krisis keuangan kali ini memberi pukulan yang 'luas sekali' pada ekonomi dunia.",
        "Kampus yang 'luas sekali' dan hijau adalah salah satu daya tarik universitas ini.",
        "Dampak menguatnya yen menjalar ke jenis usaha yang semakin 'luas sekali'.",
        "Perusahaan A berencana membangun gedung yang 'luas sekali' di kawasan pembangunan ulang.",
      ],
    },
    21: {
      yomi: "{秘|ひ}める",
      arti: "秘める = memendam, menyimpan dalam hati (perasaan, potensi)",
      optYomi: [
        "あの{人|ひと}はクールに{見|み}えるが、{実|じつ}は{情熱|じょうねつ}を{内|うち}に{秘|ひ}めている。",
        "{来月|らいげつ}{転職|てんしょく}することは{会社|かいしゃ}のみんなにはまだ{秘|ひ}めている。",
        "{彼|かれ}が{授業|じゅぎょう}{中|ちゅう}に{変|へん}な{顔|かお}をしたので、{笑|わら}いを{秘|ひ}めるのが{大変|たいへん}だった。",
        "チームで{仕事|しごと}をする{上|うえ}では、{多少|たしょう}の{不満|ふまん}は{秘|ひ}める{必要|ひつよう}もある。",
      ],
      optArti: [
        "Orang itu tampak dingin, tetapi sebenarnya 'memendam' semangat di dalam dirinya.",
        "Bahwa saya akan pindah kerja bulan depan masih 'saya pendam' dari semua orang di kantor.",
        "Karena ia memasang wajah aneh saat pelajaran, susah sekali 'memendam' tawa.",
        "Dalam bekerja sebagai tim, kadang perlu 'memendam' sedikit ketidakpuasan.",
      ],
    },
    22: {
      yomi: "{発散|はっさん}",
      arti: "発散 = memancarkan, melepaskan ke luar (panas, bau, stres)",
      optYomi: [
        "インターネット{時代|じだい}になり、{情報|じょうほう}を{発散|はっさん}することが{容易|ようい}になった。",
        "{袋|ふくろ}を{落|お}として、コーヒーの{粉|こな}を{辺|あた}り{一面|いちめん}に{発散|はっさん}してしまった。",
        "{夏|なつ}の{暑|あつ}い{時|とき}には、{朝晩|あさばん}2{回|かい}ぐらい{庭|にわ}に{水|みず}を{発散|はっさん}している。",
        "{冷蔵庫|れいぞうこ}は、{外部|がいぶ}に{熱|ねつ}を{発散|はっさん}することで、{内部|ないぶ}を{冷|ひ}やしている。",
      ],
      optArti: [
        "Di era internet, 'melepaskan' informasi menjadi mudah.",
        "Saya menjatuhkan kantong sehingga bubuk kopi 'terlepas' ke seluruh sekitar.",
        "Saat musim panas, saya 'melepaskan' air ke halaman sekitar dua kali pagi dan sore.",
        "Kulkas mendinginkan bagian dalamnya dengan 'melepaskan' panas ke luar.",
      ],
    },
    23: {
      yomi: "{仕業|しわざ}",
      arti: "仕業 = ulah, perbuatan (biasanya yang buruk)",
      optYomi: [
        "{店|みせ}のシャッターのいたずら{書|が}きは、{近所|きんじょ}に{住|す}む{子供|こども}の{仕業|しわざ}だった。",
        "この{公園|こうえん}にはいつもきれいな{花|はな}が{植|う}えてあるけど、{誰|だれ}の{仕業|しわざ}なんだろう。",
        "まだ{仕事|しごと}に{慣|な}れていない{人|ひと}だから、{彼|かれ}の{仕業|しわざ}を{責|せ}めてもしかたがない。",
        "おぼれている{子|こ}どもを{見|み}つけたときの{林|はやし}さんの{仕業|しわざ}は、{本当|ほんとう}に{立派|りっぱ}だった。",
      ],
      optArti: [
        "Coretan iseng di rolling door toko itu adalah 'ulah' anak yang tinggal di dekat sini.",
        "Taman ini selalu ditanami bunga yang indah; itu 'ulah' siapa, ya?",
        "Karena ia belum terbiasa bekerja, tidak ada gunanya menyalahkan 'ulahnya'.",
        "'Ulah' Hayashi-san saat menemukan anak tenggelam sungguh terpuji.",
      ],
    },
    24: {
      yomi: "{無造作|むぞうさ}",
      arti: "無造作 = asal-asalan, begitu saja tanpa banyak dipikirkan",
      optYomi: [
        "{専門店|せんもんてん}でしか{買|か}えなかった{商品|しょうひん}が、{最近|さいきん}はどこでも{無造作|むぞうさ}に{買|か}える。",
        "あの{人|ひと}は{料理|りょうり}の{味|あじ}に{無造作|むぞうさ}で、{食|た}べられれば{何|なん}でもいいらしい。",
        "{彼女|かのじょ}はおしゃれにはあまり{興味|きょうみ}がないようで、{髪|かみ}も{無造作|むぞうさ}に{束|たば}ねているだけだ。",
        "{高級|こうきゅう}レストランにしては{雰囲気|ふんいき}が{無造作|むぞうさ}で、{初|はじ}めての{人|ひと}でも{入|はい}りやすい。",
      ],
      optArti: [
        "Barang yang dulu hanya bisa dibeli di toko khusus, belakangan bisa dibeli 'asal-asalan' di mana saja.",
        "Orang itu 'asal-asalan' soal rasa masakan; asal bisa dimakan apa pun jadi.",
        "Ia tampaknya tidak begitu tertarik berdandan; rambutnya pun hanya diikat 'asal-asalan'.",
        "Untuk ukuran restoran mewah, suasananya 'asal-asalan', jadi mudah dimasuki bahkan oleh pengunjung baru.",
      ],
    },
    25: {
      yomi: "{総|そう}じて",
      arti: "総じて = secara umum, pada umumnya",
      optYomi: [
        "わかりやすい{説明|せつめい}だったので、{総|そう}じて{理解|りかい}できました。",
        "{私|わたし}は{子|こ}どものころから{総|そう}じて{眼鏡|めがね}をかけています。",
        "{今年|ことし}は、{各|かく}{店舗|てんぽ}の{売|う}り{上|あ}げが{総|そう}じて{伸|の}びている。",
        "{昨日|きのう}のセミナーの{参加者|さんかしゃ}は、{総|そう}じて200{名|めい}だった。",
      ],
      optArti: [
        "Penjelasannya mudah dipahami, jadi saya bisa memahaminya 'secara umum'.",
        "Sejak kecil saya 'secara umum' memakai kacamata.",
        "Tahun ini, penjualan setiap toko 'secara umum' meningkat.",
        "Peserta seminar kemarin 'secara umum' 200 orang.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "A{国|こく}では、{急激|きゅうげき}な{経済|けいざい}{成長|せいちょう}（　）、エネルギー{消費量|しょうひりょう}がこの10{年|ねん}で{約|やく}3{倍|ばい}に{増加|ぞうか}している。",
      arti: "Di negara A, (…) pertumbuhan ekonomi yang pesat, konsumsi energi meningkat sekitar tiga kali lipat dalam 10 tahun ini.",
      optYomi: ["に{沿|そ}って", "に{基|もと}づき", null, null],
      optArti: ["sesuai dengan", "berdasarkan", "seiring dengan", "menanggapi (harapan)"],
    },
    27: {
      yomi: "（{電話|でんわ}で）A「ご{注文|ちゅうもん}の{品|しな}をお{届|とど}けに（　）たいのですが、{明日|あす}のご{都合|つごう}はいかがでしょうか。」B「そうですね。3{時|じ}{以降|いこう}なら{家|いえ}にいます。」",
      arti: "(Di telepon) A: \"Kami ingin (…) mengantarkan barang pesanan Anda; bagaimana jadwal Anda besok?\" B: \"Hmm, setelah jam 3 saya ada di rumah.\"",
      optYomi: ["{上|あ}がり", "{差|さ}しあげ", "{願|ねが}い", "{見|み}え"],
      optArti: ["datang/berkunjung (merendah: 上がる)", "memberikan (merendah)", "memohon", "datang (hormat: 見える)"],
    },
    28: {
      yomi: "「なるほど。それでけんかになったのか。もちろん{悪|わる}いのは{冗談|じょうだん}を{言|い}った{彼|かれ}だけど、それくらいのことで{怒|おこ}った{君|きみ}（　）{君|きみ}だよ。」",
      arti: "\"Oh begitu. Jadi itu sebabnya kalian bertengkar. Tentu yang salah adalah dia yang bercanda, tapi kamu yang marah hanya karena hal sekecil itu (…) kamu juga.\"",
      optArti: ["(X も X = sama saja, sama-sama salah)", "(で)", "(でも)", "(まで)"],
    },
    29: {
      yomi: "デートの{約束|やくそく}がある{日|ひ}は、{急|いそ}いで（　）{業務|ぎょうむ}をこなしていても、なぜか{急|きゅう}な{会議|かいぎ}が{入|はい}ったりして、{結局|けっきょく}{残業|ざんぎょう}で{遅|おく}れてしまう。",
      arti: "Pada hari ada janji kencan, meski saya menyelesaikan pekerjaan dengan cepat (…), entah kenapa ada rapat mendadak dan sebagainya, sehingga akhirnya lembur dan terlambat.",
      optYomi: ["{帰|かえ}るべし", "{帰|かえ}るべき", "{帰|かえ}るべく", "{帰|かえ}るべからず"],
      optArti: ["harus pulang (perintah)", "yang seharusnya pulang", "agar bisa pulang", "tidak boleh pulang"],
    },
    30: {
      yomi: "{彼|かれ}は{自転車|じてんしゃ}がよほど{好|す}きらしい。（　）、{毎日|まいにち}{楽|たの}しそうに{自転車|じてんしゃ}で{通勤|つうきん}してくる。",
      arti: "Sepertinya ia sangat suka sepeda. (…), setiap hari ia berangkat kerja naik sepeda dengan riang.",
      optYomi: ["{雨|あめ}とも{雪|ゆき}とも", "{雨|あめ}でもなく{雪|ゆき}でもなく", "{雨|あめ}というか{雪|ゆき}というか", "{雨|あめ}だろうと{雪|ゆき}だろうと"],
      optArti: ["baik hujan maupun salju (ambigu)", "bukan hujan, bukan salju", "entah hujan, entah salju", "hujan atau salju sekalipun"],
    },
    31: {
      yomi: "{親|おや}が{子供|こども}を{注意|ちゅうい}するのは、{子供|こども}のため（　）のことなのだが、その{気持|きも}ちはなかなか{伝|つた}わらない。",
      arti: "Orang tua menegur anak karena (…) kebaikan anak, tetapi perasaan itu sulit tersampaikan.",
      optYomi: ["に{思|おも}って", "を{思|おも}って", "に{思|おも}っても", "を{思|おも}っても"],
      optArti: ["(bentuk tidak tepat)", "memikirkan (demi)", "(bentuk tidak tepat)", "meski memikirkan"],
    },
    32: {
      yomi: "{彼|かれ}の{政治家|せいじか}としての{能力|のうりょく}は（　）、{首相|しゅしょう}になるにはまだ{早|はや}い。",
      arti: "Kemampuannya sebagai politikus (…), tetapi masih terlalu dini untuk menjadi perdana menteri.",
      optYomi: ["{疑|うたが}いようがないものを", "{疑|うたが}いようがないものの", "{疑|うたが}わないことはないものを", "{疑|うたが}わないことはないものの"],
      optArti: ["padahal tidak diragukan (menyesali)", "memang tidak diragukan, namun", "padahal bukannya tidak meragukan", "bukannya tidak meragukan, namun"],
    },
    33: {
      yomi: "（{会議|かいぎ}で）{部長|ぶちょう}「この{方針|ほうしん}について{意見|いけん}のある{人|ひと}はいますか。あ、{田村|たむら}さん、どうぞ。」{田村|たむら}「はい。そのような{対応|たいおう}は{確|たし}かに{必要|ひつよう}だとは{思|おも}います。しかし、{私|わたし}たち{営業|えいぎょう}の{立場|たちば}（　）、{現在|げんざい}の{状況|じょうきょう}でそこまでやるのは{厳|きび}しいです。」",
      arti: "(Dalam rapat) Manajer: \"Ada yang punya pendapat tentang kebijakan ini? Ah, Tamura-san, silakan.\" Tamura: \"Ya. Saya rasa penanganan seperti itu memang perlu. Namun, (…) posisi kami di bagian penjualan, melakukannya sejauh itu dalam kondisi sekarang berat.\"",
      optYomi: ["に{言|い}わせていれば", "から{言|い}わせてやれば", "に{言|い}わせてあげれば", "から{言|い}わせてもらえば"],
      optArti: ["(bentuk tidak tepat)", "(bentuk tidak tepat)", "(bentuk tidak tepat)", "jika boleh saya katakan dari"],
    },
    34: {
      yomi: "（{携帯|けいたい}{電話|でんわ}で）{夏子|なつこ}「もしもし、{友子|ともこ}？ごめん、{電車|でんしゃ}が{遅|おく}れてて。」{友子|ともこ}「え、そうなの？{映画|えいが}、7{時|じ}からだけど。」{夏子|なつこ}「うん。（　）、また{連絡|れんらく}するね。」",
      arti: "(Di ponsel) Natsuko: \"Halo, Tomoko? Maaf, keretanya terlambat.\" Tomoko: \"Eh, begitu? Filmnya mulai jam 7, lho.\" Natsuko: \"Iya. (…), nanti aku kabari lagi ya.\"",
      optYomi: ["{間|ま}に{合|あ}いそうになかったら", "{間|ま}に{合|あ}いそうになかったから", "{間|ま}に{合|あ}っていなかったのだから", "{間|ま}に{合|あ}っていなかったのだったら"],
      optArti: ["kalau sepertinya tidak keburu", "karena sepertinya tidak keburu", "karena memang tidak keburu", "kalau ternyata tidak keburu"],
    },
    35: {
      yomi: "A「{西川|にしかわ}{先生|せんせい}のデザインは、どういうところが{魅力|みりょく}ですか。」B「そうですね。{私|わたし}にとって{先生|せんせい}のデザインは、{見|み}ているだけでほっとする（　）、そんな{温|あたた}かい{雰囲気|ふんいき}があって、{好|す}きなんです。」",
      arti: "A: \"Apa daya tarik desain Nishikawa-sensei?\" B: \"Hmm. Bagi saya, desain beliau itu (…) membuat lega hanya dengan melihatnya; ada suasana hangat seperti itu, dan saya menyukainya.\"",
      optArti: ["mungkin orang akan bilang, jadi", "bukankah dikatakan?", "mungkin orang akan bilang, tetapi", "bagaimana ya mengatakannya, semacam"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{勉強|べんきょう}に{専念|せんねん}するためにアルバイトをすぐにでも＿＿ ＿＿ ★ ＿＿{困|こま}っている。",
      arti: "Saya ingin segera berhenti kerja paruh waktu agar bisa fokus belajar, tetapi karena kekurangan staf, saya tidak bisa berhenti meski ingin, dan itu menyusahkan.",
      optYomi: [null, "スタッフ{不足|ぶそく}から", null, null],
      optArti: ["tidak bisa berhenti", "karena kekurangan staf", "mau berhenti pun (やめるにやめられず)", "ingin berhenti, tetapi"],
    },
    37: {
      yomi: "{昨日|きのう}、{息子|むすこ}が{近所|きんじょ}の{公園|こうえん}で{捕|つか}まえてきた{昆虫|こんちゅう}を{見|み}て{驚|おどろ}いた。{虫|むし}について＿＿ ＿＿ ★ ＿＿あんな{虫|むし}は{見|み}たことがなかった。",
      arti: "Kemarin saya kaget melihat serangga yang ditangkap anak saya di taman dekat rumah. Kalau soal serangga, saya merasa tahu lebih banyak dari orang lain, tetapi saya pun belum pernah melihat serangga seperti itu.",
      optYomi: [null, "{知|し}っているつもりの", "{人|ひと}よりも{詳|くわ}しく", "{私|わたし}でも"],
      optArti: ["kalau (soal)", "yang merasa tahu", "lebih detail dari orang lain", "bahkan saya"],
    },
    38: {
      yomi: "{将棋|しょうぎ}は{好|す}きなら{上達|じょうたつ}する。{将棋|しょうぎ}が{好|す}きだということ＿＿ ＿＿ ★ ＿＿{強|つよ}くなれるのだ。",
      arti: "Kalau suka shogi, pasti akan mahir. Menyukai shogi itu sendiri sudah merupakan bakat; justru karena ada perasaan suka itulah, seseorang bisa menjadi kuat.",
      optYomi: ["すでに{才能|さいのう}なのであって", null, "{自体|じたい}が", "{好|す}きだという{気持|きも}ちが"],
      optArti: ["sudah merupakan bakat", "justru karena ada", "itu sendiri", "perasaan suka"],
    },
    39: {
      yomi: "{動物園|どうぶつえん}のゴリラが、{私|わたし}のことをずっと{見|み}ていた。{私|わたし}を{仲間|なかま}＿＿ ＿＿ ★ ＿＿だろうか。",
      arti: "Gorila di kebun binatang terus menatap saya. Apakah ia mengira saya teman sekawanannya atau semacamnya?",
      optYomi: [null, null, null, "{思|おも}っていたの"],
      optArti: ["(kutipan) と", "adalah (だ)", "atau semacamnya", "apakah mengira"],
    },
    40: {
      yomi: "＿＿ ＿＿ ★ ＿＿{姿勢|しせい}を{持|も}つことが{重要|じゅうよう}である。",
      arti: "Di zaman sekarang, ketika interaksi antarbudaya makin aktif berkat kemajuan teknologi informasi dan sarana transportasi, penting untuk memiliki sikap yang tidak terpaku pada cara berpikir selama ini dan berusaha memahami nilai-nilai yang berbeda.",
      optYomi: [
        "これまでの{考|かんが}え{方|かた}にこだわらず",
        "{情報|じょうほう}{技術|ぎじゅつ}や{交通|こうつう}{手段|しゅだん}の{発達|はったつ}などで",
        "{異|こと}なる{価値観|かちかん}を{理解|りかい}しようとする",
        "{異文化|いぶんか}{間|かん}の{交流|こうりゅう}が{活発化|かっぱつか}した{現代|げんだい}にあっては",
      ],
      optArti: ["tanpa terpaku pada cara berpikir selama ini", "karena kemajuan teknologi informasi dan sarana transportasi", "yang berusaha memahami nilai-nilai berbeda", "di zaman sekarang ketika interaksi antarbudaya makin aktif"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{下町|したまち}", "{盆踊|ぼんおど}り", "{大人|おとな}", "{彼女|かのじょ}"],
      optArti: ["kawasan kota lama", "tarian Bon", "orang dewasa", "dia (perempuan)"],
    },
    42: {
      optYomi: ["その{年|とし}の", null, "あの{町|まち}の", null],
      optArti: ["tahun itu", "semacam itu", "kota itu", "seperti itu (benda)"],
    },
    43: {
      optArti: ["dan kemudian", "bagaimanapun juga", "atau", "barangkali"],
    },
    44: {
      optYomi: ["{思|おも}わせたかった", "{思|おも}わないだろう", "{思|おも}われてもいい", "{思|おも}わされた"],
      optArti: ["ingin membuat (orang) berpikir", "mungkin tidak berpikir", "boleh dianggap", "dibuat berpikir (mau tak mau)"],
    },
    45: {
      optArti: ["itulah sebabnya saya melakukan", "begitulah (umumnya) dikatakan", "apakah melakukan atau tidak", "tidak mau mengatakan"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{流行|りゅうこう}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang tren?",
      optYomi: [
        "{多|おお}くの{者|もの}に{購買|こうばい}{意欲|いよく}を{誘発|ゆうはつ}させるものである。",
        "{多|おお}くの{者|もの}に{真似|まね}られることなしには{始|はじ}まらない。",
        "{特定|とくてい}のデザイナーによる{誘発|ゆうはつ}が{欠|か}かせない。",
        "{特定|とくてい}のデザイナーのものが{真似|まね}られなければならない。",
      ],
      optArti: [
        "Tren adalah sesuatu yang membangkitkan minat beli banyak orang.",
        "Tren tidak akan dimulai tanpa ditiru oleh banyak orang.",
        "Dorongan dari desainer tertentu mutlak diperlukan.",
        "Karya desainer tertentu harus ditiru.",
      ],
    },
    47: {
      yomi: "{業務|ぎょうむ}のために{携帯|けいたい}{電話|でんわ}を{使用|しよう}している{人|ひと}はどうしなければならないか。",
      arti: "Apa yang harus dilakukan orang yang memakai ponsel untuk pekerjaan?",
      optYomi: [
        "{貸与|たいよ}{申請書|しんせいしょ}を7{月|がつ}10{日|か}までに、7{月|がつ}31{日|にち}までの{通話|つうわ}{料金|りょうきん}{請求|せいきゅう}{書類|しょるい}を8{月|がつ}1{日|ついたち}までに{総務部|そうむぶ}に{提出|ていしゅつ}する。",
        "{貸与|たいよ}{申請書|しんせいしょ}を7{月|がつ}10{日|か}までに、7{月|がつ}31{日|にち}までの{通話|つうわ}{料金|りょうきん}{請求|せいきゅう}{書類|しょるい}を8{月|がつ}31{日|にち}までに{総務部|そうむぶ}に{提出|ていしゅつ}する。",
        "{貸与|たいよ}{申請書|しんせいしょ}を7{月|がつ}17{日|にち}までに、7{月|がつ}31{日|にち}までの{通話|つうわ}{料金|りょうきん}{請求|せいきゅう}{書類|しょるい}を8{月|がつ}1{日|ついたち}までに{総務部|そうむぶ}に{提出|ていしゅつ}する。",
        "{貸与|たいよ}{申請書|しんせいしょ}と7{月|がつ}31{日|にち}までの{通話|つうわ}{料金|りょうきん}{請求|せいきゅう}{書類|しょるい}を、8{月|がつ}31{日|にち}までに{総務部|そうむぶ}に{提出|ていしゅつ}する。",
      ],
      optArti: [
        "Menyerahkan formulir peminjaman paling lambat 10 Juli, dan dokumen tagihan pulsa sampai 31 Juli paling lambat 1 Agustus ke Bagian Umum.",
        "Menyerahkan formulir peminjaman paling lambat 10 Juli, dan dokumen tagihan pulsa sampai 31 Juli paling lambat 31 Agustus ke Bagian Umum.",
        "Menyerahkan formulir peminjaman paling lambat 17 Juli, dan dokumen tagihan pulsa sampai 31 Juli paling lambat 1 Agustus ke Bagian Umum.",
        "Menyerahkan formulir peminjaman dan dokumen tagihan pulsa sampai 31 Juli paling lambat 31 Agustus ke Bagian Umum.",
      ],
    },
    48: {
      yomi: "この{文章|ぶんしょう}で、{筆者|ひっしゃ}はインターネットをどのようにとらえているか。",
      arti: "Dalam tulisan ini, bagaimana penulis memandang internet?",
      optYomi: [
        "{広|ひろ}い{視野|しや}を{失|うしな}わずに{使用|しよう}すれば、より{深|ふか}い{情報|じょうほう}を{得|え}ることができる。",
        "{限|かぎ}られた{情報|じょうほう}や、{個人|こじん}の{興味|きょうみ}のあるものを{得|え}るには{便利|べんり}な{道具|どうぐ}である。",
        "{便利|べんり}なものだが、{使|つか}い{方|かた}に{気|き}をつけないと{限|かぎ}られた{世界|せかい}で{生|い}きることになる。",
        "{意識|いしき}して{使用|しよう}しなければ、{自分|じぶん}の{価値観|かちかん}に{合|あ}った{情報|じょうほう}が{得|え}られないことになる。",
      ],
      optArti: [
        "Jika dipakai tanpa kehilangan wawasan luas, bisa memperoleh informasi yang lebih dalam.",
        "Alat yang praktis untuk memperoleh informasi terbatas atau hal yang diminati pribadi.",
        "Praktis, tetapi jika tidak hati-hati dalam cara pakainya, kita akan hidup dalam dunia yang terbatas.",
        "Jika tidak dipakai dengan sadar, informasi yang sesuai dengan nilai-nilai sendiri tidak akan diperoleh.",
      ],
    },
    49: {
      yomi: "{筆者|ひっしゃ}の{考|かんが}えを{最|もっと}もよく{表|あらわ}しているのはどれか。",
      arti: "Manakah yang paling baik menggambarkan pendapat penulis?",
      optYomi: [
        "{誰|だれ}もが{社会|しゃかい}の{中心|ちゅうしん}から{遠|とお}く{離|はな}れた{存在|そんざい}だ。",
        "{誰|だれ}もが{他人|たにん}の{存在|そんざい}を{認|みと}めることが{大切|たいせつ}だ。",
        "{一人一人|ひとりひとり}が{生|い}きる{意味|いみ}を{持|も}っている{大切|たいせつ}な{存在|そんざい}だ。",
        "{一人一人|ひとりひとり}が{自分|じぶん}の{生|い}きる{世界|せかい}を{見|み}つけることが{大切|たいせつ}だ。",
      ],
      optArti: [
        "Setiap orang adalah keberadaan yang jauh dari pusat masyarakat.",
        "Penting bagi setiap orang untuk mengakui keberadaan orang lain.",
        "Setiap orang adalah keberadaan berharga yang memiliki makna hidup.",
        "Penting bagi setiap orang untuk menemukan dunia tempat ia hidup.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "①{怖|こわ}いこととは{何|なに}か。",
      arti: "Apa yang dimaksud \"① hal yang menakutkan\"?",
      optYomi: [
        "{不十分|ふじゅうぶん}な{知識|ちしき}で{話|はなし}を{単純化|たんじゅんか}したため、{内容|ないよう}が{正確|せいかく}でなくなること",
        "{話|はなし}があいまいになり、{情報|じょうほう}を{断片的|だんぺんてき}にしか{伝|つた}えられなくなること",
        "{事実|じじつ}に{関|かん}する{知識|ちしき}が{不十分|ふじゅうぶん}なせいで、{話|はなし}が{単純化|たんじゅんか}しづらいこと",
        "{扱|あつか}うテーマに{関|かん}して{知識|ちしき}が{増|ふ}えるほど、{説明|せつめい}が{難|むずか}しくなること",
      ],
      optArti: [
        "Isi menjadi tidak akurat karena menyederhanakan pembicaraan dengan pengetahuan yang kurang",
        "Pembicaraan menjadi kabur dan informasi hanya bisa disampaikan sepotong-sepotong",
        "Pembicaraan sulit disederhanakan karena pengetahuan tentang fakta kurang",
        "Semakin bertambah pengetahuan tentang tema, semakin sulit menjelaskannya",
      ],
    },
    51: {
      yomi: "②「わかりやすい{説明|せつめい}」に{至|いた}るスランプとあるが、どのような{状態|じょうたい}か。",
      arti: "Tertulis \"② kemerosotan menuju 'penjelasan yang mudah dipahami'\"; keadaan seperti apa itu?",
      optYomi: [
        "{知識|ちしき}が{増|ふ}えたにもかかわらず、{深|ふか}みのある{説明|せつめい}ができない{状態|じょうたい}",
        "{知識|ちしき}が{増|ふ}えたために、かえってわかりやすい{説明|せつめい}ができない{状態|じょうたい}",
        "{簡単|かんたん}なことにもかかわらず、どう{説明|せつめい}すればいいかわからない{状態|じょうたい}",
        "{話|はなし}を{簡単|かんたん}にしすぎるために、かえって{説明|せつめい}を{理解|りかい}してもらえない{状態|じょうたい}",
      ],
      optArti: [
        "Keadaan tidak bisa memberi penjelasan yang mendalam padahal pengetahuan bertambah",
        "Keadaan justru tidak bisa memberi penjelasan yang mudah dipahami karena pengetahuan bertambah",
        "Keadaan tidak tahu cara menjelaskan padahal hal yang sederhana",
        "Keadaan penjelasan justru tidak dipahami karena pembicaraan terlalu disederhanakan",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}は、スランプを{突破|とっぱ}するにはどうすればいいと{述|の}べているか。",
      arti: "Menurut penulis, apa yang harus dilakukan untuk menembus kemerosotan itu?",
      optYomi: [
        "{簡単|かんたん}にあきらめずに、なぜスランプになったかをよく{考|かんが}える。",
        "あきらめずに{知識|ちしき}をさらに{深|ふか}め、{本質|ほんしつ}は{何|なに}かを{徹底的|てっていてき}に{考|かんが}える。",
        "{単純化|たんじゅんか}できた{話|はなし}を{振|ふ}り{返|かえ}り、わかりやすい{説明|せつめい}とは{何|なに}かを{考|かんが}え{抜|ぬ}く。",
        "{十分|じゅうぶん}に{知識|ちしき}を{深|ふか}めたうえで、{単純化|たんじゅんか}するにはどうすればいいか{考|かんが}える。",
      ],
      optArti: [
        "Tidak mudah menyerah, dan memikirkan baik-baik mengapa terjadi kemerosotan.",
        "Tidak menyerah, memperdalam pengetahuan lagi, dan memikirkan secara tuntas apa esensinya.",
        "Meninjau kembali pembicaraan yang berhasil disederhanakan, lalu memikirkan sampai tuntas apa itu penjelasan yang mudah dipahami.",
        "Setelah cukup memperdalam pengetahuan, memikirkan cara menyederhanakannya.",
      ],
    },
    53: {
      yomi: "①{視点|してん}のズレが{生|しょう}じますとあるが、なぜそうなるのか。",
      arti: "Tertulis \"① terjadi pergeseran sudut pandang\"; mengapa begitu?",
      optYomi: [
        "{大人|おとな}は{子|こ}どもの{世界|せかい}がよく{理解|りかい}できないから",
        "{大人|おとな}は{子|こ}どもの{視点|してん}に{合|あ}わせて{読|よ}もうとするから",
        "{大人|おとな}の{見|み}てきた{風景|ふうけい}と{子|こ}どもの{見|み}ている{風景|ふうけい}はちがうから",
        "{大人|おとな}の{視点|してん}から{子|こ}どもの{視点|してん}で{書|か}かれたものを{読|よ}むから",
      ],
      optArti: [
        "Karena orang dewasa tidak begitu memahami dunia anak",
        "Karena orang dewasa berusaha membaca dengan menyesuaikan diri pada sudut pandang anak",
        "Karena pemandangan yang dilihat orang dewasa berbeda dengan yang dilihat anak",
        "Karena membaca tulisan yang ditulis dari sudut pandang anak dengan sudut pandang orang dewasa",
      ],
    },
    54: {
      yomi: "{筆者|ひっしゃ}によると、{視点|してん}のズレを{解消|かいしょう}するためにできることは{何|なに}か。",
      arti: "Menurut penulis, apa yang bisa dilakukan untuk menghilangkan pergeseran sudut pandang?",
      optYomi: [
        "{大人|おとな}の{視点|してん}で{今|いま}の{子|こ}どもたちの{気持|きも}ちを{考|かんが}えて{読|よ}む。",
        "{大人|おとな}の{自分|じぶん}と{子|こ}ども{時代|じだい}の{自分|じぶん}を{比|くら}べながら{読|よ}む。",
        "{子|こ}ども{時代|じだい}の{自分|じぶん}の{視点|してん}を{思|おも}い{出|だ}しながら{読|よ}む。",
        "{子|こ}どもに{読|よ}んでやるような{気持|きも}ちで{読|よ}む。",
      ],
      optArti: [
        "Membaca sambil memikirkan perasaan anak-anak masa kini dengan sudut pandang orang dewasa.",
        "Membaca sambil membandingkan diri sebagai orang dewasa dengan diri semasa kanak-kanak.",
        "Membaca sambil mengingat sudut pandang diri semasa kanak-kanak.",
        "Membaca dengan perasaan seperti membacakan untuk anak.",
      ],
    },
    55: {
      yomi: "②どうぞ、「{子|こ}どもの{本|ほん}」を{開|ひら}いてみてくださいとあるが、{筆者|ひっしゃ}はなぜそのように{述|の}べていると{考|かんが}えられるか。",
      arti: "Tertulis \"② silakan buka 'buku anak-anak'\"; mengapa kira-kira penulis berkata demikian?",
      optYomi: [
        "{今|いま}の{子|こ}どもの{考|かんが}え{方|かた}を{知|し}ることで、{大人|おとな}である{自分|じぶん}を{省|かえり}みることもあるから",
        "{心|こころ}の{中|なか}にいる{子|こ}どもの{頃|ころ}の{自分|じぶん}に{気|き}づくことで、これまでの{見方|みかた}が{変|か}わることもあるから",
        "{児童|じどう}{文学|ぶんがく}をよく{理解|りかい}することで、{近頃|ちかごろ}の{子|こ}どもの{問題点|もんだいてん}を{発見|はっけん}できるかもしれないから",
        "{子|こ}ども{時代|じだい}の{本|ほん}を{再読|さいどく}することで、これまでの{自分|じぶん}のことがよく{分|わ}かるかもしれないから",
      ],
      optArti: [
        "Karena dengan mengetahui cara berpikir anak masa kini, kita bisa merenungkan diri sebagai orang dewasa",
        "Karena dengan menyadari diri semasa kanak-kanak di dalam hati, cara pandang selama ini bisa berubah",
        "Karena dengan memahami sastra anak dengan baik, kita mungkin bisa menemukan masalah anak-anak zaman sekarang",
        "Karena dengan membaca ulang buku masa kanak-kanak, kita mungkin bisa memahami diri sendiri selama ini",
      ],
    },
    56: {
      yomi: "{筆者|ひっしゃ}によると、ファースト・フードがひろまった{理由|りゆう}は{何|なに}か。",
      arti: "Menurut penulis, apa alasan makanan cepat saji menyebar luas?",
      optYomi: [
        "{人|ひと}びとが{人間|にんげん}{関係|かんけい}や{食|た}べることに{無関心|むかんしん}になったこと",
        "{新|あたら}しい{食|しょく}のスタイルが{人|ひと}びとの{好|この}みに{合|あ}ったこと",
        "{人|ひと}とのつながりや{生活|せいかつ}スタイルが{変化|へんか}したこと",
        "{食|しょく}にたいする{人|ひと}びとの{嗜好|しこう}が{似|に}てきたこと",
      ],
      optArti: [
        "Orang-orang menjadi tidak peduli pada hubungan antarmanusia dan makan",
        "Gaya makan baru cocok dengan selera orang",
        "Hubungan antarmanusia dan gaya hidup berubah",
        "Selera orang terhadap makanan menjadi mirip",
      ],
    },
    57: {
      yomi: "{兆候的|ちょうこうてき}{現象|げんしょう}とあるが、それはどのような{現象|げんしょう}か。",
      arti: "Tertulis \"fenomena yang menjadi tanda\"; fenomena seperti apa itu?",
      optYomi: [
        "{個々|ここ}の{都市|とし}の{食文化|しょくぶんか}のなかに、ファースト・フードが{入|はい}り{込|こ}んでいる。",
        "ファースト・フードの{店舗|てんぽ}{数|すう}が、レストランのように{増|ふ}えている。",
        "ファースト・フードが、{都市|とし}ごとの{多様|たよう}な{食|しょく}{形式|けいしき}を{壊|こわ}そうとしている。",
        "ローカルな{都市|とし}のレストランにファースト・フードの{簡便|かんべん}さを{取|と}り{入|い}れている。",
      ],
      optArti: [
        "Makanan cepat saji masuk ke dalam budaya makan setiap kota.",
        "Jumlah gerai makanan cepat saji bertambah seperti restoran.",
        "Makanan cepat saji berusaha merusak beragam bentuk makan di tiap kota.",
        "Restoran di kota lokal mengadopsi kepraktisan makanan cepat saji.",
      ],
    },
    58: {
      yomi: "ファースト・フードのひろがりが{人|ひと}びとに{与|あた}える{影響|えいきょう}を、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang pengaruh meluasnya makanan cepat saji terhadap orang-orang?",
      optYomi: [
        "{食事|しょくじ}や{人間|にんげん}{関係|かんけい}への{興味|きょうみ}を{失|うしな}い、{人|ひと}びとは{簡便|かんべん}な{生活|せいかつ}スタイルを{求|もと}めるようになる。",
        "{人間|にんげん}{同士|どうし}の{関係|かんけい}を{弱|よわ}めることになり、{仕事|しごと}や{遊|あそ}びに{熱中|ねっちゅう}する{人間|にんげん}が{増|ふ}える{傾向|けいこう}が{強|つよ}まる。",
        "{知|し}らないうちに{人|ひと}との{絆|きずな}や{食|しょく}への{関心|かんしん}を{薄|うす}め、{世界|せかい}{同一|どういつ}の{食|しょく}{形式|けいしき}に{慣|な}れ{切|き}った{人間|にんげん}を{増|ふ}やす。",
        "{同|おな}じメニューに{慣|な}れることで、{人|ひと}びとはいつのまにか{多種|たしゅ}{多様|たよう}な{食文化|しょくぶんか}に{興味|きょうみ}を{持|も}たなくなる。",
      ],
      optArti: [
        "Kehilangan minat pada makan dan hubungan antarmanusia, orang-orang mencari gaya hidup yang praktis.",
        "Melemahkan hubungan antarmanusia, sehingga kecenderungan bertambahnya orang yang asyik bekerja dan bermain makin kuat.",
        "Tanpa disadari menipiskan ikatan dengan orang lain dan minat pada makanan, serta menambah orang yang sudah terbiasa dengan bentuk makan yang seragam di seluruh dunia.",
        "Dengan terbiasa pada menu yang sama, orang-orang tanpa sadar tidak lagi tertarik pada beragam budaya makan.",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "①{社会|しゃかい}の{成員|せいいん}として「ふさわしい」あり{方|かた}とはどのようなものか。",
      arti: "Seperti apakah \"① keadaan yang 'pantas' sebagai anggota masyarakat\"?",
      optYomi: [
        "{子供|こども}を{養|やしな}い、{社会|しゃかい}において{責任|せきにん}あるふるまいができること",
        "{自立|じりつ}するために{必要|ひつよう}な{能力|のうりょく}を{身|み}につけ、{自由|じゆう}に{生|い}きていけること",
        "いつの{時代|じだい}にも{通用|つうよう}する{技能|ぎのう}や{知識|ちしき}を{備|そな}え、{他者|たしゃ}に{尊敬|そんけい}されること",
        "{技能|ぎのう}や{知識|ちしき}を{身|み}につけ、{他者|たしゃ}とのあいだでうまく{生|い}きていけること",
      ],
      optArti: [
        "Menghidupi anak dan bisa berperilaku bertanggung jawab di masyarakat",
        "Menguasai kemampuan yang diperlukan untuk mandiri dan bisa hidup bebas",
        "Memiliki keterampilan dan pengetahuan yang berlaku di zaman mana pun, dan dihormati orang lain",
        "Menguasai keterampilan dan pengetahuan, serta bisa hidup dengan baik bersama orang lain",
      ],
    },
    60: {
      yomi: "{教育|きょういく}{理念|りねん}を「{共有|きょうゆう}」することがむずかしいのはなぜか。",
      arti: "Mengapa \"berbagi bersama\" filosofi pendidikan itu sulit?",
      optYomi: [
        "{社会|しゃかい}や{人間|にんげん}について{色々|いろいろ}な{考|かんが}え{方|かた}がありぶつかり{合|あ}うから",
        "{教育者|きょういくしゃ}と{一般|いっぱん}{社会|しゃかい}の{人|ひと}びととが{思|おも}い{描|えが}く{大人|おとな}らしさは{違|ちが}うから",
        "{子|こ}どもの{主体性|しゅたいせい}について{一致|いっち}した{見解|けんかい}が{得|え}られないから",
        "{社会|しゃかい}のあり{方|かた}や{人|ひと}びとの{価値観|かちかん}が{変化|へんか}してきているから",
      ],
      optArti: [
        "Karena ada berbagai pandangan tentang masyarakat dan manusia yang saling berbenturan",
        "Karena gambaran kedewasaan menurut pendidik berbeda dengan menurut masyarakat umum",
        "Karena tidak tercapai pandangan yang sama tentang kemandirian anak",
        "Karena bentuk masyarakat dan nilai-nilai orang terus berubah",
      ],
    },
    61: {
      yomi: "②{反発|はんぱつ}を{覚|おぼ}える{人|ひと}の{意見|いけん}について、{筆者|ひっしゃ}はどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis tentang pendapat \"② orang yang merasa keberatan\"?",
      optYomi: [
        "{大人|おとな}の{期待|きたい}を{実現|じつげん}しようとするという{点|てん}では{筆者|ひっしゃ}の{考|かんが}えと{同|おな}じだ。",
        "{大人|おとな}の{期待|きたい}を{押|お}し{付|つ}けようとすることは{教育|きょういく}{理念|りねん}にそぐわないものだ。",
        "{子|こ}どもの{主体的|しゅたいてき}な{判断力|はんだんりょく}がみずから{育|そだ}つと{考|かんが}えることは{思|おも}い{込|こ}みでしかない。",
        "{子|こ}どもの{主体的|しゅたいてき}な{判断力|はんだんりょく}を{育|そだ}てようとする{点|てん}では{筆者|ひっしゃ}の{考|かんが}えと{変|か}わらない。",
      ],
      optArti: [
        "Dalam hal berusaha mewujudkan harapan orang dewasa, sama dengan pendapat penulis.",
        "Berusaha memaksakan harapan orang dewasa tidak sesuai dengan filosofi pendidikan.",
        "Menganggap daya nilai mandiri anak akan tumbuh sendiri hanyalah anggapan keliru.",
        "Dalam hal berusaha menumbuhkan daya nilai mandiri anak, tidak berbeda dengan pendapat penulis.",
      ],
    },
    62: {
      yomi: "{教育|きょういく}について、{筆者|ひっしゃ}の{考|かんが}えを{表|あらわ}しているのはどれか。",
      arti: "Manakah yang mencerminkan pendapat penulis tentang pendidikan?",
      optYomi: [
        "{教育|きょういく}は{社会|しゃかい}の{秩序|ちつじょ}に{縛|しば}られない{主体的|しゅたいてき}な{判断力|はんだんりょく}を{養|やしな}うものだ。",
        "{教育|きょういく}は{社会|しゃかい}のあり{方|かた}を{批判的|ひはんてき}に{検討|けんとう}できる{能力|のうりょく}を{育|そだ}てるものだ。",
        "{教育|きょういく}は{強制|きょうせい}から{逃|のが}れられず、その{強制|きょうせい}は{教育|きょういく}{理念|りねん}の{共有|きょうゆう}が{前提|ぜんてい}となる。",
        "{教育|きょういく}は{強制|きょうせい}から{自由|じゆう}ではなく、{社会|しゃかい}の{有力|ゆうりょく}な{教育観|きょういくかん}を{受|う}け{入|い}れざるをえない。",
      ],
      optArti: [
        "Pendidikan memupuk daya nilai mandiri yang tidak terikat tatanan masyarakat.",
        "Pendidikan menumbuhkan kemampuan untuk mengkaji bentuk masyarakat secara kritis.",
        "Pendidikan tidak bisa lepas dari paksaan, dan paksaan itu harus didasari kesepakatan bersama tentang filosofi pendidikan.",
        "Pendidikan tidak bebas dari paksaan, dan mau tak mau harus menerima pandangan pendidikan yang dominan di masyarakat.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "{電子|でんし}{辞書|じしょ}の{長所|ちょうしょ}について、AとBが{共通|きょうつう}して{述|の}べていることは{何|なに}か。",
      arti: "Tentang kelebihan kamus elektronik, apa yang sama-sama dinyatakan A dan B?",
      optYomi: [
        "{軽|かる}くて{簡単|かんたん}に{持|も}ち{運|はこ}ぶことができる。",
        "{大量|たいりょう}のデータを{小|ちい}さくまとめて{収納|しゅうのう}できる。",
        "インターネットを{介|かい}して{多|おお}くの{人|ひと}が{利用|りよう}できる。",
        "{知|し}りたいことばを{速|はや}く{探|さが}し{出|だ}すことができる。",
      ],
      optArti: [
        "Ringan dan mudah dibawa ke mana-mana.",
        "Bisa menyimpan data dalam jumlah besar secara ringkas.",
        "Bisa dipakai banyak orang melalui internet.",
        "Bisa mencari kata yang ingin diketahui dengan cepat.",
      ],
    },
    64: {
      yomi: "{印刷|いんさつ}された{辞書|じしょ}について、AとBはどのように{述|の}べているか。",
      arti: "Bagaimana A dan B menjelaskan tentang kamus cetak?",
      optYomi: [
        "Aは{紙|かみ}の{本|ほん}ならではのよさがあると{述|の}べ、Bは{電子|でんし}{辞書|じしょ}とは{違|ちが}う{使|つか}い{方|かた}で{学生|がくせい}も{使用|しよう}していると{述|の}べている。",
        "Aはデジタル{化|か}が{避|さ}けられないと{述|の}べ、Bは{学生|がくせい}は{電子|でんし}{辞書|じしょ}よりも{魅力|みりょく}を{感|かん}じていると{述|の}べている。",
        "Aは{辞書|じしょ}としての{使|つか}われ{方|かた}はされなくなると{述|の}べ、Bは{電子|でんし}{辞書|じしょ}と{共存|きょうぞん}していくと{述|の}べている。",
        "Aは{本|ほん}のように{楽|たの}しんで{読|よ}めると{述|の}べ、Bは{電子|でんし}{辞書|じしょ}と{使|つか}い{分|わ}けるべきだと{述|の}べている。",
      ],
      optArti: [
        "A menyatakan ada kelebihan khas buku kertas; B menyatakan mahasiswa pun memakainya dengan cara yang berbeda dari kamus elektronik.",
        "A menyatakan digitalisasi tak terhindarkan; B menyatakan mahasiswa merasa kamus cetak lebih menarik daripada kamus elektronik.",
        "A menyatakan kamus cetak tidak akan lagi dipakai sebagai kamus; B menyatakan kamus cetak akan hidup berdampingan dengan kamus elektronik.",
        "A menyatakan kamus cetak bisa dibaca dengan senang seperti buku; B menyatakan kamus cetak dan elektronik harus dibedakan pemakaiannya.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "①もっと{根本的|こんぽんてき}なこととあるが、どのようなことか。",
      arti: "Tertulis \"① hal yang lebih mendasar\"; hal apa itu?",
      optYomi: [
        "{広告|こうこく}とは{一体|いったい}{何|なん}なのかということ",
        "{広告|こうこく}とは{必要|ひつよう}なものなのかということ",
        "{広告|こうこく}の{用語|ようご}や{表現|ひょうげん}が{適切|てきせつ}なのかということ",
        "{広告|こうこく}とは{人|ひと}に{注目|ちゅうもく}されるものなのかということ",
      ],
      optArti: [
        "Apa sebenarnya iklan itu",
        "Apakah iklan itu diperlukan",
        "Apakah istilah dan ungkapan iklan sudah tepat",
        "Apakah iklan itu memang diperhatikan orang",
      ],
    },
    66: {
      yomi: "{筆者|ひっしゃ}は、{広告|こうこく}の{受|う}け{手|て}をどのようにとらえているか。",
      arti: "Bagaimana penulis memandang penerima iklan?",
      optYomi: [
        "{自分|じぶん}のことで{忙|いそが}しくて、{余計|よけい}な{情報|じょうほう}を{取|と}り{入|い}れようとしない。",
        "{毎日|まいにち}の{生活|せいかつ}が{忙|いそが}しく、たくさんのことを{覚|おぼ}えようとしない。",
        "{目|め}にする{広告|こうこく}が{多|おお}すぎて、{必要|ひつよう}なものが{選|えら}べなくなっている。",
        "{関心|かんしん}のもてない{広告|こうこく}が{多|おお}く、{広告|こうこく}を{見|み}る{必要性|ひつようせい}を{感|かん}じていない。",
      ],
      optArti: [
        "Sibuk dengan urusan sendiri sehingga tidak mau menyerap informasi yang tidak perlu.",
        "Kehidupan sehari-hari sibuk sehingga tidak mau mengingat banyak hal.",
        "Iklan yang dilihat terlalu banyak sehingga tidak bisa memilih yang diperlukan.",
        "Banyak iklan yang tidak menarik, sehingga tidak merasa perlu melihat iklan.",
      ],
    },
    67: {
      yomi: "{筆者|ひっしゃ}は②こういう{意見|いけん}に{対|たい}してどのように{考|かんが}えているか。",
      arti: "Bagaimana pendapat penulis terhadap \"② pendapat seperti ini\"?",
      optYomi: [
        "{刺激的|しげきてき}な{広告|こうこく}は、{受|う}け{手|て}の{心|こころ}の{奥|おく}に{入|はい}り{込|こ}んでいきやすい。",
        "{刺激的|しげきてき}な{広告|こうこく}は、より{刺激的|しげきてき}にしていかないと{受|う}け{手|て}に{伝|つた}わらない。",
        "{単|たん}に{刺激的|しげきてき}なだけの{広告|こうこく}も、{受|う}け{手|て}を{振|ふ}り{向|む}かせるためには{必要|ひつよう}だ。",
        "ただ{刺激的|しげきてき}な{広告|こうこく}は、{驚|おどろ}かせるだけで{受|う}け{手|て}の{心|こころ}には{残|のこ}らない。",
      ],
      optArti: [
        "Iklan yang provokatif mudah masuk ke lubuk hati penerima.",
        "Iklan yang provokatif tidak akan sampai ke penerima jika tidak dibuat lebih provokatif lagi.",
        "Iklan yang sekadar provokatif pun perlu untuk membuat penerima menoleh.",
        "Iklan yang sekadar provokatif hanya mengagetkan dan tidak membekas di hati penerima.",
      ],
    },
    68: {
      yomi: "{広告|こうこく}の{発信者|はっしんしゃ}に{対|たい}して、{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis kepada pembuat iklan?",
      optYomi: [
        "{受|う}け{手|て}の{視点|してん}に{立|た}って{商品|しょうひん}をアピールすることが{重要|じゅうよう}だ。",
        "{受|う}け{手|て}の{心|こころ}をつかむような{情報|じょうほう}を{発信|はっしん}し{続|つづ}けることが{重要|じゅうよう}だ。",
        "{受|う}け{手|て}に{商品|しょうひん}の{魅力|みりょく}をいかにストレートに{伝|つた}えるかが{重要|じゅうよう}だ。",
        "{受|う}け{手|て}に{伝|つた}えたい{情報|じょうほう}をいかに{整理|せいり}して{発信|はっしん}するかが{重要|じゅうよう}だ。",
      ],
      optArti: [
        "Yang penting adalah mempromosikan produk dari sudut pandang penerima.",
        "Yang penting adalah terus menyebarkan informasi yang memikat hati penerima.",
        "Yang penting adalah seberapa lugas menyampaikan daya tarik produk kepada penerima.",
        "Yang penting adalah bagaimana menata informasi yang ingin disampaikan kepada penerima lalu menyebarkannya.",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "サラさんは{大学|だいがく}の{芸術|げいじゅつ}{学部|がくぶ}の{学生|がくせい}で{演劇|えんげき}を{勉強|べんきょう}している。サラさんが「{東西|とうざい}{劇場|げきじょう}　{友|とも}の{会|かい}」の{会員|かいいん}になったら、{次|つぎ}のどのサービスを{受|う}けることができるか。",
      arti: "Sarah-san adalah mahasiswi fakultas seni yang belajar teater. Jika Sarah-san menjadi anggota \"Perkumpulan Sahabat Teater Tōzai\", layanan mana yang bisa ia terima?",
      optYomi: [
        "{東西|とうざい}{劇場|げきじょう}の{情報|じょうほう}が{掲載|けいさい}されている{会報誌|かいほうし}を{毎月|まいつき}{受|う}け{取|と}ることができる。",
        "{東西|とうざい}{劇場|げきじょう}で{行|おこな}われる{公演|こうえん}をすべて15％{割引|わりびき}で{観劇|かんげき}することができる。",
        "{東西|とうざい}{劇場|げきじょう}と{系列|けいれつ}{劇場|げきじょう}で{行|おこな}われる{公演|こうえん}をすべて{割引|わりびき}で{見|み}ることができる。",
        "{東西|とうざい}{劇場|げきじょう}と{系列|けいれつ}{劇場|げきじょう}の{売店|ばいてん}で10％{割引|わりびき}で{買|か}い{物|もの}をすることができる。",
      ],
      optArti: [
        "Bisa menerima buletin berisi informasi Teater Tōzai setiap bulan.",
        "Bisa menonton semua pertunjukan di Teater Tōzai dengan potongan 15%.",
        "Bisa menonton semua pertunjukan di Teater Tōzai dan teater jaringannya dengan potongan harga.",
        "Bisa berbelanja dengan potongan 10% di toko Teater Tōzai dan teater jaringannya.",
      ],
    },
    70: {
      yomi: "{会社員|かいしゃいん}のユアンさんは「{東西|とうざい}{劇場|げきじょう}　{友|とも}の{会|かい}」に{入会|にゅうかい}したいと{思|おも}っている。{入会費|にゅうかいひ}と{年会費|ねんかいひ}の{支払|しはら}いはどのようにするか。",
      arti: "Yuan-san, seorang karyawan, ingin bergabung dengan \"Perkumpulan Sahabat Teater Tōzai\". Bagaimana cara membayar uang pendaftaran dan iuran tahunan?",
      optYomi: [
        "{事務局|じむきょく}で{入会費|にゅうかいひ}と{年会費|ねんかいひ}を{直接|ちょくせつ}{払|はら}う。",
        "{金融|きんゆう}{機関|きかん}で{入会費|にゅうかいひ}と{年会費|ねんかいひ}を{振|ふ}り{込|こ}む。",
        "{事務局|じむきょく}で{入会費|にゅうかいひ}を{直接|ちょくせつ}{払|はら}い、{年会費|ねんかいひ}の{自動|じどう}{振替|ふりかえ}の{手続|てつづ}きもする。",
        "{事務局|じむきょく}で{入会費|にゅうかいひ}を{直接|ちょくせつ}{払|はら}い、{金融|きんゆう}{機関|きかん}で{年会費|ねんかいひ}の{自動|じどう}{振替|ふりかえ}の{手続|てつづ}きをする。",
      ],
      optArti: [
        "Membayar uang pendaftaran dan iuran tahunan langsung di sekretariat.",
        "Mentransfer uang pendaftaran dan iuran tahunan di lembaga keuangan.",
        "Membayar uang pendaftaran langsung di sekretariat, sekaligus mengurus autodebet iuran tahunan di sana.",
        "Membayar uang pendaftaran langsung di sekretariat, lalu mengurus autodebet iuran tahunan di lembaga keuangan.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：大人時間 ──
    "7": {
      yomi: `{今年|ことし}は{一回|いっかい}しか{踊|おど}れなかったのだけれど、{毎年|まいとし}、{盆踊|ぼんおど}り（{注|ちゅう}1）を{楽|たの}しみにしているのだった。{盆踊|ぼんおど}りが{上手|じょうず}な{友人|ゆうじん}がいるので、いつも{彼女|かのじょ}の{後|うし}ろに{張|は}り{付|つ}いて{踊|おど}っている。

{踊|おど}りに{行|い}く{場所|ばしょ}はいろいろ。でも、たいてい{東京|とうきょう}の{下町|したまち}ばかりを{選|えら}んでいる。{踊|おど}っている{人|ひと}たちの{感|かん}じが{好|す}きなのである。{地元|じもと}の{方|かた}が{多|おお}いのは{当|あ}たり{前|まえ}なのだけれど、{下町|したまち}の{会社|かいしゃ}にお{勤|つと}めの{人々|ひとびと}が、{仕事|しごと}{帰|がえ}りにふらっと{踊|おど}っていたりするのが{面白|おもしろ}いのだった。{肩|かた}からバッグをぶら{下|さ}げながら{踊|おど}るOL（{注|ちゅう}2）さんたちの、かわいらしさと{言|い}ったら！

{盆踊|ぼんおど}りは、{一見|いっけん}、{老若男女|ろうにゃくなんにょ}が{楽|たの}しめるイベントのようだけれど、{実|じつ}はそうじゃない、とわたしは{思|おも}っている。

[41]のものなのである。

{盆踊|ぼんおど}りって、まあ、どこも6{時|じ}{半|はん}くらいから{始|はじ}まるのだが、8{時|じ}{過|す}ぎくらいになると、{子供|こども}にお{菓子|かし}を{配|くば}る{時間|じかん}がくる。それが{合図|あいず}なのだ。{子供|こども}の{時間|じかん}は{終|お}わったのだ、という{合図|あいず}。

あからさまに「{子供|こども}は{大人|おとな}の{邪魔|じゃま}するな」なんてことは{言|い}わないのだけれど、[42]{雰囲気|ふんいき}が{盆踊|ぼんおど}り{会場|かいじょう}にただよってくる。{今|いま}まで、「さぁ、{踊|おど}って{踊|おど}って」と、{恥|は}ずかしがる{子供|こども}たちを{踊|おど}りの{輪|わ}に{入|い}れていた{大人|おとな}たちが、{子供|こども}に{声|こえ}をかけなくなる。

{子供|こども}にお{菓子|かし}が{配付|はいふ}された{後|あと}、やがて、{大人|おとな}たちが{本気|ほんき}で{踊|おど}りはじめるのだった。{踊|おど}りの{難|むずか}しい{曲|きょく}が{多|おお}くなる。『{炭坑節|たんこうぶし}』など、{渋|しぶ}い{踊|おど}りも{多|おお}くなる。そうなるにしたがって、まわりで{立|た}って{見|み}ていただけの{大人|おとな}たちが、ひとり、またひとりと{踊|おど}りの{輪|わ}に{加|くわ}わりはじめ、{盛上|もりあ}がってくるのだった。

[43]、わたしは{自分|じぶん}の{子供|こども}{時代|じだい}を{静|しず}かに{思|おも}い{出|だ}す。

{大人|おとな}{時間|じかん}になった{盆踊|ぼんおど}りが、とってもかっこよかったこと。{難|むずか}しい{踊|おど}りになって、{仕方|しかた}なく{踊|おど}りの{輪|わ}から{外|はず}れ、{母親|ははおや}や、{近所|きんじょ}のおばさんたちが、もくもくと{踊|おど}っている{姿|すがた}を{見|み}ていた。{子供|こども}の{出番|でばん}はないのだと[44]。

{子供|こども}はでしゃばる（{注|ちゅう}3）んじゃないよ！っていう、{大人|おとな}たちの{態度|たいど}。{大人|おとな}（{特|とく}におばさんたち）がうらやましかったあのときの{気持|きも}ち。{記憶|きおく}から{消|き}えないまま、いい{思|おも}い{出|で}になってわたしの{心|こころ}に{残|のこ}っている。{大人|おとな}が{主役|しゅやく}になる{時間|じかん}って、{悪|わる}くないなと{思|おも}う。{子供|こども}に{歩|あゆ}み{寄|よ}ってばかりじゃ、{大人|おとな}になった{甲斐|かい}がないと[45]。
（{益田|ますだ}ミリ『{前進|ぜんしん}する{日|ひ}もしない{日|ひ}も』による）
（{注|ちゅう}1）{盆踊|ぼんおど}り：{夏|なつ}のお{盆|ぼん}に{行|おこな}われる{行事|ぎょうじ}。{参加者|さんかしゃ}が{輪|わ}になり、{音楽|おんがく}に{合|あ}わせて{踊|おど}る
（{注|ちゅう}2）OL：{女性|じょせい}の{会社員|かいしゃいん}
（{注|ちゅう}3）でしゃばる：{目立|めだ}つ{必要|ひつよう}がないのに、{目立|めだ}とうとする`,
      arti: `Tahun ini saya hanya sempat menari sekali, tetapi setiap tahun saya selalu menantikan tarian Bon (catatan 1). Saya punya teman yang pandai menari Bon, jadi saya selalu menari menempel di belakangnya.

Tempat saya pergi menari bermacam-macam. Tetapi biasanya saya memilih kawasan kota lama (shitamachi) Tokyo. Saya suka suasana orang-orang yang menari di sana. Wajar kalau banyak warga setempat, tetapi yang menarik adalah orang-orang yang bekerja di kantor di kawasan kota lama ikut menari begitu saja sepulang kerja. Betapa lucunya para karyawati (catatan 2) yang menari sambil menyandang tas di bahu!

Tarian Bon sekilas tampak seperti acara yang bisa dinikmati tua-muda, laki-laki dan perempuan, tetapi menurut saya sebenarnya tidak begitu.

Tarian Bon adalah milik [41].

Tarian Bon biasanya dimulai sekitar pukul setengah tujuh di mana-mana, dan sekitar lewat pukul delapan, tibalah waktu membagikan permen kepada anak-anak. Itulah tandanya. Tanda bahwa waktu anak-anak sudah selesai.

Memang tidak ada yang terang-terangan berkata, "Anak-anak jangan mengganggu orang dewasa", tetapi suasana [42] mulai mengambang di arena tarian. Orang-orang dewasa yang tadinya memasukkan anak-anak pemalu ke lingkaran tarian sambil berkata, "Ayo, menari, menari", tidak lagi memanggil anak-anak.

Setelah permen dibagikan kepada anak-anak, lama-lama orang dewasa mulai menari dengan sungguh-sungguh. Lagu dengan tarian yang sulit makin banyak. Tarian yang "berselera tua" seperti "Tankō-bushi" pun makin banyak. Seiring itu, orang-orang dewasa yang tadinya hanya berdiri menonton di sekitar mulai satu per satu bergabung ke lingkaran tarian, dan suasana pun makin meriah.

[43], saya diam-diam teringat masa kecil saya.

Betapa kerennya tarian Bon yang sudah menjadi waktu orang dewasa. Karena tariannya menjadi sulit, saya terpaksa keluar dari lingkaran dan memandangi ibu serta ibu-ibu tetangga yang menari dengan tekun. Saya [44] bahwa tidak ada giliran untuk anak-anak.

Sikap orang dewasa yang seolah berkata, "Anak-anak jangan sok tampil (catatan 3)!" Perasaan iri pada orang dewasa (terutama ibu-ibu) saat itu. Semuanya tidak hilang dari ingatan, dan tetap tinggal di hati saya sebagai kenangan indah. Menurut saya, waktu ketika orang dewasa menjadi tokoh utama itu tidak buruk. Kalau hanya terus mengalah kepada anak-anak, tidak ada gunanya menjadi dewasa — [45].
(Dari buku karya Masuda Miri)
(Catatan 1) 盆踊り: acara pada perayaan Obon musim panas; peserta membentuk lingkaran dan menari mengikuti musik
(Catatan 2) OL: karyawati
(Catatan 3) でしゃばる: berusaha menonjol padahal tidak perlu`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `ファッションなど、{流行|りゅうこう}は{模倣|もほう}を{前提|ぜんてい}にしている。{真似|まね}られなければ、ファッションなど{成立|せいりつ}しない。ミニスカートをデザインしたとしても、{特定|とくてい}のデザイナーのものだけが{売|う}れるのでは、{流行|りゅうこう}にはならない。{多|おお}くの{者|もの}が{模倣|もほう}してはじめて{流行|りゅうこう}は{成立|せいりつ}するため、ファッションなどには、{模倣|もほう}を{誘発|ゆうはつ}させようとする{意図|いと}が{最初|さいしょ}から{織|お}り{込|こ}みずみだ。
（{浜野|はまの}{保樹|やすき}『{模倣|もほう}される{日本|にほん}――{映画|えいが}、アニメから{料理|りょうり}、ファッションまで』による）`,
      arti: `Tren, seperti fesyen, berlandaskan peniruan. Kalau tidak ditiru, fesyen tidak akan terbentuk. Meski seseorang mendesain rok mini, jika hanya karya desainer tertentu yang laku, itu tidak akan menjadi tren. Karena tren baru terbentuk ketika banyak orang menirunya, pada fesyen dan sejenisnya, niat untuk memancing peniruan sudah diperhitungkan sejak awal.
(Dari buku karya Hamano Yasuki tentang Jepang yang ditiru — dari film, anime, sampai masakan dan fesyen)`,
    },
    "8-2": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}で{回覧|かいらん}された{文書|ぶんしょ}である。

{営業部|えいぎょうぶ}{社員|しゃいん}　{各位|かくい}

2012{年|ねん}6{月|がつ}27{日|にち}

{総務|そうむ}{部長|ぶちょう}

{業務|ぎょうむ}{用|よう}{携帯|けいたい}{電話|でんわ}の{貸与|たいよ}について

このたび、{業務|ぎょうむ}{用|よう}{携帯|けいたい}{電話|でんわ}を{貸与|たいよ}することにいたしましたので、{貸与|たいよ}{申請書|しんせいしょ}を7{月|がつ}10{日|か}までに{総務部|そうむぶ}にご{提出|ていしゅつ}ください。{業務|ぎょうむ}{用|よう}{携帯|けいたい}{電話|でんわ}は、7{月|がつ}17{日|にち}{以降|いこう}{順次|じゅんじ}{配付|はいふ}いたします。

また{私物|しぶつ}の{携帯|けいたい}{電話|でんわ}の{業務|ぎょうむ}{使用|しよう}は、8{月|がつ}1{日|ついたち}{以降|いこう}{禁止|きんし}いたします。7{月|がつ}31{日|にち}までの{通話|つうわ}{料金|りょうきん}の{請求|せいきゅう}{書類|しょるい}は、8{月|がつ}31{日|にち}{必着|ひっちゃく}で{総務部|そうむぶ}にご{提出|ていしゅつ}ください。`,
      arti: `Berikut ini adalah dokumen yang diedarkan di sebuah perusahaan.

Kepada seluruh karyawan Bagian Penjualan

27 Juni 2012

Kepala Bagian Umum

Tentang Peminjaman Ponsel Kantor

Kami memutuskan untuk meminjamkan ponsel kantor, maka mohon serahkan formulir permohonan peminjaman ke Bagian Umum paling lambat 10 Juli. Ponsel kantor akan dibagikan secara bertahap mulai 17 Juli.

Selain itu, penggunaan ponsel pribadi untuk keperluan kerja dilarang mulai 1 Agustus. Dokumen tagihan biaya telepon sampai 31 Juli harap diserahkan ke Bagian Umum dan harus sudah diterima paling lambat 31 Agustus.`,
    },
    "8-3": {
      yomi: `{情報化|じょうほうか}、グローバル{化|か}と{言|い}われ、{視野|しや}を{広|ひろ}げるべき{時代|じだい}に、{実|じつ}は{極|きわ}めて{限|かぎ}られた{世界|せかい}、{社会|しゃかい}でしか{情報|じょうほう}や{価値観|かちかん}を{得|え}られていない{人|ひと}が{増|ふ}えているように{思|おも}えます。インターネットは{世界中|せかいじゅう}どこにでもつながりますが、{自分|じぶん}で{意識|いしき}しないと、{限|かぎ}られた{価値観|かちかん}の{情報|じょうほう}だけが{集|あつ}まり、さらに{深|ふか}く{入|はい}り{込|こ}む。{世界観|せかいかん}を{広|ひろ}げるインターネットが、{逆|ぎゃく}に{世界観|せかいかん}や{価値観|かちかん}を{狭|せば}めてしまう、{視野|しや}{狭窄|きょうさく}（{注|ちゅう}）に{陥|おちい}らせる{道具|どうぐ}となってしまうのです。
（{伊藤|いとう}{真|まこと}『{会社|かいしゃ}コンプライアンス――{内部|ないぶ}{統制|とうせい}の{条件|じょうけん}』による）
（{注|ちゅう}）{視野|しや}{狭窄|きょうさく}（きょうさく）：{見|み}える{範囲|はんい}が{狭|せま}くなること`,
      arti: `Di zaman yang disebut era informasi dan globalisasi, ketika wawasan seharusnya diperluas, tampaknya justru makin banyak orang yang hanya memperoleh informasi dan nilai-nilai dari dunia dan masyarakat yang sangat terbatas. Internet terhubung ke mana pun di seluruh dunia, tetapi jika tidak disadari sendiri, hanya informasi dengan nilai-nilai terbatas yang terkumpul, dan kita masuk makin dalam. Internet yang memperluas wawasan dunia justru menjadi alat yang mempersempit pandangan dunia dan nilai-nilai, menjerumuskan kita ke dalam penyempitan pandangan (catatan).
(Dari buku karya Itō Makoto tentang kepatuhan perusahaan)
(Catatan) 視野狭窄: menyempitnya jangkauan pandangan`,
    },
    "8-4": {
      yomi: `この{社会|しゃかい}にはどこかに{中心|ちゅうしん}があって、{自分|じぶん}はその{中心|ちゅうしん}から{遠|とお}く{離|はな}れたところに{押|お}しやられ（{注|ちゅう}1）ていると{感|かん}じている{人|ひと}は{多|おお}い。しかし、{私|わたし}は{私|わたし}{自身|じしん}の「{生|い}きる{意味|いみ}」を{創造|そうぞう}し、{私|わたし}の{生|い}きる{世界|せかい}に{意味|いみ}を{与|あた}える{存在|そんざい}なのであり、{世界|せかい}の{中心|ちゅうしん}は{私|わたし}{自身|じしん}にあるのだ。しかし、それは「{自己|じこ}チュー」（{注|ちゅう}2）の{世界|せかい}ではない。なぜなら、{私|わたし}{自身|じしん}が{意味|いみ}を{生|う}み{出|だ}す{中心|ちゅうしん}であることを{認|みと}めるとき、{私|わたし}たちの{周|まわ}りには{私|わたし}だけでなくたくさんの{中心|ちゅうしん}があることが{分|わ}かってくるからだ。
（{上田|うえだ}{紀行|のりゆき}『{生|い}きる{意味|いみ}』による）
（{注|ちゅう}1）{押|お}しやる：{押|お}してどける
（{注|ちゅう}2）{自己|じこ}チュー：{自己|じこ}{中心|ちゅうしん}のこと。{自分|じぶん}のことしか{考|かんが}えないこと`,
      arti: `Banyak orang merasa bahwa masyarakat ini punya pusat di suatu tempat, dan dirinya tersingkir (catatan 1) jauh dari pusat itu. Namun, saya adalah keberadaan yang menciptakan "makna hidup" saya sendiri dan memberi makna pada dunia tempat saya hidup; pusat dunia ada pada diri saya sendiri. Akan tetapi, itu bukan dunia "egois" (catatan 2). Sebab, ketika saya mengakui bahwa diri saya adalah pusat yang melahirkan makna, saya jadi mengerti bahwa di sekitar kita ada banyak pusat, bukan hanya saya.
(Dari buku "Ikiru Imi" karya Ueda Noriyuki)
(Catatan 1) 押しやる: mendorong menyingkir
(Catatan 2) 自己チュー: egois; hanya memikirkan diri sendiri`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{私|わたし}は、「どうしたらわかりやすく{伝|つた}えられるか」ということを{常|つね}に{考|かんが}えています。

その{一方|いっぽう}で、「{話|はなし}を{単純化|たんじゅんか}しすぎてはいけない」ということも{肝|きも}に{銘|めい}じ（{注|ちゅう}1）ています。

この{兼|か}ね{合|あ}いが、{結構|けっこう}{難|むずか}しいのです。{扱|あつか}うテーマに{関|かん}して{勉強|べんきょう}を{積|つ}み{重|かさ}ね、{知識|ちしき}が{増|ふ}えるほど、{難|むずか}しくなります。{生半可|なまはんか}（{注|ちゅう}2）にしか{知|し}らないときのほうが、{簡単|かんたん}にざっくり（{注|ちゅう}3）{単純化|たんじゅんか}できたりします。でも、そのために{結果|けっか}として、{全体像|ぜんたいぞう}が{見|み}えずに{歪|ゆが}んだ{像|ぞう}を{示|しめ}したり、{事実|じじつ}とニュアンスが{違|ちが}ってきてしまったりすることにもつながります。これはとても①{怖|こわ}いことです。

それを{防|ふせ}ぐには、どうしたらいいか。（{中略|ちゅうりゃく}）

まず、{調|しら}べたいことを{勉強|べんきょう}して、{誰|だれ}かに{話|はな}してみます。{簡単|かんたん}に{話|はなし}ができたら、{要|よう}{注意|ちゅうい}。{学部生|がくぶせい}レベルである{可能性|かのうせい}が{高|たか}いからです。そこで{満足|まんぞく}せずに、さらに{深|ふか}い{勉強|べんきょう}をしてみましょう。すると、あら{不思議|ふしぎ}。{急|きゅう}に{話|はなし}が{難|むずか}しくなります。これが{大学院生|だいがくいんせい}レベルです。いわば②「わかりやすい{説明|せつめい}」に{至|いた}るスランプのようなものです。

そこで{挫折|ざせつ}せず、さらに{勉強|べんきょう}を{深|ふか}め、「この{話|はなし}のキモ（{注|ちゅう}4）は{何|なん}なのか」を{考|かんが}え{抜|ぬ}きましょう。すると、ある{日|ひ}{突然|とつぜん}、{自分|じぶん}でも{驚|おどろ}くほど、わかりやすい{説明|せつめい}ができていることに{気|き}づくはずです。あなたは、その{分野|ぶんや}で、{晴|は}れて「{指導|しどう}{教授|きょうじゅ}」の{立場|たちば}まで{成長|せいちょう}したのです。{学部生|がくぶせい}レベルの{人|ひと}の{説明|せつめい}の{間違|まちが}いを{訂正|ていせい}してあげることもできるようになったことでしょう。

{最初|さいしょ}の{単純化|たんじゅんか}で{満足|まんぞく}せず、さらに{高|たか}みを{目指|めざ}すとスランプに{陥|おちい}る。そこを{突破|とっぱ}すると、「わかりやすい{説明|せつめい}」が{可能|かのう}になる。このプロセスが、キモなのです。
（{池上|いけがみ}{彰|あきら}『〈わかりやすさ〉の{勉強法|べんきょうほう}』による）
（{注|ちゅう}1）{肝|きも}（きも）に{銘|めい}（めい）じる：{決|けっ}して{忘|わす}れないようにする
（{注|ちゅう}2）{生半可|なまはんか}：{中途|ちゅうと}{半端|はんぱ}
（{注|ちゅう}3）ざっくり：{大|おお}まかに、{粗|あら}く
（{注|ちゅう}4）キモ：{最|もっと}も{大事|だいじ}なところ`,
      arti: `Saya selalu memikirkan, "Bagaimana caranya menyampaikan dengan mudah dipahami?"

Di sisi lain, saya juga mencamkan baik-baik (catatan 1) bahwa "pembicaraan tidak boleh terlalu disederhanakan".

Keseimbangan ini cukup sulit. Semakin banyak belajar tentang tema yang dibahas dan semakin bertambah pengetahuan, semakin sulit. Justru saat hanya tahu setengah-setengah (catatan 2), kita bisa menyederhanakannya secara garis besar (catatan 3) dengan mudah. Namun, akibatnya bisa berujung pada menyajikan gambaran yang terdistorsi karena gambaran utuhnya tidak terlihat, atau nuansanya berbeda dari fakta. Ini sungguh ① hal yang menakutkan.

Lalu, bagaimana cara mencegahnya? (dihilangkan)

Pertama, pelajari hal yang ingin Anda selidiki, lalu cobalah ceritakan kepada seseorang. Jika bisa menceritakannya dengan mudah, hati-hati. Sebab besar kemungkinan Anda masih di tingkat mahasiswa S1. Jangan puas di situ, cobalah belajar lebih dalam. Maka, aneh sekali, pembicaraannya tiba-tiba menjadi sulit. Inilah tingkat mahasiswa pascasarjana. Bisa dibilang, ini semacam ② kemerosotan menuju "penjelasan yang mudah dipahami".

Jangan patah semangat di situ; perdalam lagi belajar Anda dan pikirkan sampai tuntas, "Apa inti (catatan 4) dari pembicaraan ini?" Maka, suatu hari tiba-tiba Anda pasti menyadari bahwa Anda sudah bisa memberi penjelasan yang mudah dipahami, sampai Anda sendiri terkejut. Di bidang itu, Anda telah berhasil tumbuh sampai posisi "profesor pembimbing". Anda pun tentu sudah bisa mengoreksi kesalahan penjelasan orang yang masih di tingkat S1.

Jika tidak puas dengan penyederhanaan pertama dan menuju yang lebih tinggi, kita akan jatuh ke dalam kemerosotan. Jika berhasil menembusnya, "penjelasan yang mudah dipahami" menjadi mungkin. Proses inilah intinya.
(Dari buku karya Ikegami Akira tentang cara belajar "kemudahan dipahami")
(Catatan 1) 肝に銘じる: berusaha agar tidak pernah lupa
(Catatan 2) 生半可: setengah-setengah
(Catatan 3) ざっくり: secara garis besar, kasar
(Catatan 4) キモ: bagian yang paling penting`,
    },
    "9-2": {
      yomi: `{児童|じどう}{文学|ぶんがく}の{多|おお}くは、{子|こ}どもの{視点|してん}で{書|か}かれています。もちろん{作者|さくしゃ}は{大人|おとな}なのですが、{子|こ}どもの{考|かんが}え{方|かた}や、{子|こ}どもの{目|め}の{高|たか}さから{見|み}える{風景|ふうけい}を{描|えが}いています。{当然|とうぜん}のことながら{大人|おとな}が{読|よ}む{場合|ばあい}、そこにどうしても①{視点|してん}のズレが{生|しょう}じます。

けれど{大人|おとな}はみな、{昔|むかし}、{子|こ}どもでした。{子|こ}どもを{卒業|そつぎょう}して{大人|おとな}になったと{思|おも}っているのか、{子|こ}どもだった{自分|じぶん}を{抱|かか}えたまま{大人|おとな}になったと{思|おも}っているのかは{人|ひと}それぞれでしょうが、{少|すく}なくとも、だれもが{子|こ}ども{時代|じだい}を{過|す}ごしてきています。{大人|おとな}の{視点|してん}で{読|よ}みながら、{子|こ}どもの{頃|ころ}の{視点|してん}を{思|おも}い{出|だ}すことは{可能|かのう}です。{自分|じぶん}の{中|なか}の{子|こ}どもに{寄|よ}り{添|そ}って、{一緒|いっしょ}に{読|よ}むとでも{言|い}えばいいでしょうか。

{子|こ}ども{時代|じだい}に{読|よ}んだ{本|ほん}を{再読|さいどく}すると、{同|おな}じ{場面|ばめん}なのに、{子|こ}どもの{頃|ころ}の{自分|じぶん}と{今|いま}の{自分|じぶん}とでは、{感|かん}じ{方|かた}や{受|う}け{取|と}り{方|かた}がちがうのに{気|き}づくことがあります。それは{今|いま}の{自分|じぶん}が、{自分|じぶん}の{心|こころ}の{中|なか}にいる{子|こ}どもと{向|む}かいあう{一瞬|いっしゅん}です。そうした{機会|きかい}に、{今|いま}の{子|こ}どもたちへのまなざしを{新|あら}たにすることもあるでしょう。たとえば、「{近頃|ちかごろ}（ちかごろ）の{子|こ}どもにはこまったものだ」と{文句|もんく}を{言|い}っていたけれど、{子|こ}どもの{頃|ころ}の{自分|じぶん}はどうだったのか？と{問|と}い{直|なお}す。{大人|おとな}であることにあぐらをかいていた（{注|ちゅう}）{自分|じぶん}を{省|かえり}みる。そんなことが{起|お}こるかもしれません。

②どうぞ、「{子|こ}どもの{本|ほん}」を{開|ひら}いてみてください。
（ひこ・{田中|たなか}『{大人|おとな}のための{児童|じどう}{文学|ぶんがく}{講座|こうざ}』による）
（{注|ちゅう}）あぐらをかいていた：ここでは、{何|なん}の{疑問|ぎもん}も{感|かん}じずにいた`,
      arti: `Sebagian besar sastra anak ditulis dari sudut pandang anak. Tentu saja pengarangnya orang dewasa, tetapi yang digambarkan adalah cara berpikir anak dan pemandangan yang terlihat dari ketinggian mata anak. Wajar saja, ketika orang dewasa membacanya, mau tak mau terjadi ① pergeseran sudut pandang.

Namun, semua orang dewasa dulunya adalah anak-anak. Apakah ia merasa sudah "lulus" dari masa anak-anak lalu menjadi dewasa, ataukah merasa menjadi dewasa sambil tetap membawa dirinya yang dulu anak-anak, itu tergantung orangnya, tetapi setidaknya semua orang pernah melewati masa kanak-kanak. Sambil membaca dengan sudut pandang dewasa, kita bisa mengingat sudut pandang semasa kecil. Bisa dikatakan, kita membaca bersama sambil mendampingi anak di dalam diri kita.

Ketika membaca ulang buku yang dibaca semasa kecil, kadang kita menyadari bahwa meski adegannya sama, cara merasakan dan memahaminya berbeda antara diri kita semasa kecil dan sekarang. Itulah sekejap ketika diri kita sekarang berhadapan dengan anak di dalam hati kita. Pada kesempatan seperti itu, mungkin kita juga memperbarui cara pandang terhadap anak-anak masa kini. Misalnya, kita mengeluh, "Anak-anak zaman sekarang menyusahkan," lalu bertanya kembali, "Bagaimana diriku waktu kecil?" Kita merenungkan diri yang selama ini berpuas diri (catatan) sebagai orang dewasa. Hal seperti itu mungkin terjadi.

② Silakan, cobalah membuka "buku anak-anak".
(Dari buku karya Hiko Tanaka, kuliah sastra anak untuk orang dewasa)
(Catatan) あぐらをかいていた: di sini, tanpa merasa ragu sedikit pun`,
    },
    "9-3": {
      yomi: `ファースト・フードが{世界中|せかいじゅう}にひろがったのは、{文化|ぶんか}や{人間|にんげん}の{集合|しゅうごう}{状態|じょうたい}に{変化|へんか}が{起|お}こっていたからである。{家族|かぞく}はこれまでほど{安定|あんてい}したものではなくなったし、{私的|してき}な{生活|せいかつ}、{労働|ろうどう}や{遊|あそ}びのパターンも{個人的|こじんてき}かつ{多様|たよう}になっていたのである。{人間|にんげん}の{接触|せっしょく}が{煩|わずら}わしいものに{感|かん}じる{傾向|けいこう}も{増大|ぞうだい}した。{食事|しょくじ}がもつ{楽|たの}しみは{感覚|かんかく}と{社交|しゃこう}の{至上|しじょう}の{快楽|かいらく}ではなくなった。それは{他|た}の{行為|こうい}のあいまに{挿入|そうにゅう}されるものとなることが{多|おお}かったし、それと{平行|へいこう}して{人間|にんげん}は{食事|しょくじ}を{簡便|かんべん}に{済|す}ませることを{望|のぞ}んだことも{考慮|こうりょ}すべきであろう。

（{中略|ちゅうりゃく}）

もちろん{都市|とし}の{食文化|しょくぶんか}にとってファースト・フードが{占|し}める{位置|いち}は、コンビニが{買|か}い{物|もの}{行動|こうどう}にたいして{占|し}める{位置|いち}と{同様|どうよう}、{全面的|ぜんめんてき}ではない。しかし{多種|たしゅ}{多様|たよう}なレストランがいたるところに{叢生|そうせい}（{注|ちゅう}1）してくるなかに、ひとつの{均質化|きんしつか}する{力|ちから}として{割|わ}り{込|こ}み、かつローカルな{都市|とし}を{世界的|せかいてき}な{規模|きぼ}にまでひろがった{同一|どういつ}の{網目|あみめ}に{組|く}み{込|こ}むことは、{無視|むし}できない{力|ちから}の{兆候的|ちょうこうてき}{現象|げんしょう}なのである。

おそらくこうしたファースト・フードの{経験|けいけん}は、{意識|いしき}されていることがら{以上|いじょう}に、ほとんど{意識|いしき}されない{感覚的|かんかくてき}な{影響|えいきょう}の{方|ほう}が{大|おお}きいだろう。かつての{食|しょく}の{内容|ないよう}からみると、{貧困|ひんこん}としかいいようのないメニューに{慣|な}れること、あえて{社会的|しゃかいてき}{関係|かんけい}を{破壊|はかい}しようとしないでも、{人|ひと}びとはファースト・フードの{利用|りよう}によって、いつのまにか{都市|とし}の{遊民|ゆうみん}（{注|ちゅう}2）になっていくこと、そしてこの{食|しょく}{形式|けいしき}の{共有|きょうゆう}によってわれわれは{奇妙|きみょう}なかたちで、われわれ{自身|じしん}をいつのまにか{世界化|せかいか}していること、などである。
（{多木|たき}{浩二|こうじ}『{都市|とし}の{政治学|せいじがく}』による）
（{注|ちゅう}1）{叢生|そうせい}（そうせい）する：ここでは、{多|おお}くできる
（{注|ちゅう}2）{遊民|ゆうみん}：ここでは、{社会的|しゃかいてき}{関係|かんけい}をもたない{人|ひと}`,
      arti: `Makanan cepat saji menyebar ke seluruh dunia karena telah terjadi perubahan pada budaya dan cara manusia berkumpul. Keluarga tidak lagi sestabil dulu, dan pola kehidupan pribadi, kerja, serta bermain pun menjadi individual sekaligus beragam. Kecenderungan merasa kontak antarmanusia itu merepotkan pun meningkat. Kesenangan yang dimiliki kegiatan makan tidak lagi menjadi kenikmatan tertinggi bagi indra dan pergaulan. Makan sering menjadi sesuatu yang diselipkan di sela kegiatan lain, dan sejalan dengan itu, perlu dipertimbangkan pula bahwa manusia menginginkan makan yang praktis dan cepat selesai.

(dihilangkan)

Tentu saja, posisi makanan cepat saji dalam budaya makan kota, sama seperti posisi minimarket dalam perilaku berbelanja, tidaklah menyeluruh. Namun, kenyataan bahwa di tengah beragam restoran yang bermunculan (catatan 1) di mana-mana, ia menyelinap sebagai satu kekuatan yang menyeragamkan, serta memasukkan kota-kota lokal ke dalam jaringan yang sama yang meluas sampai skala dunia, merupakan fenomena yang menjadi tanda kekuatan yang tidak bisa diabaikan.

Mungkin pengalaman makanan cepat saji seperti ini, lebih dari hal-hal yang disadari, pengaruh indrawi yang hampir tidak disadarilah yang lebih besar. Misalnya: terbiasa dengan menu yang, dibandingkan isi makanan masa lalu, hanya bisa disebut miskin; tanpa sengaja merusak hubungan sosial pun, orang-orang lewat penggunaan makanan cepat saji tanpa sadar menjadi "pengembara kota" (catatan 2); dan melalui berbagi bentuk makan ini, kita dengan cara yang aneh tanpa sadar telah "mengglobalkan" diri kita sendiri.
(Dari buku "Politik Kota" karya Taki Kōji)
(Catatan 1) 叢生する: di sini, banyak bermunculan
(Catatan 2) 遊民: di sini, orang yang tidak memiliki hubungan sosial`,
    },

    // ── 問題10：教育とは何か ──
    "10": {
      yomi: `まず、{教育|きょういく}とは{何|なに}か、ということから{考|かんが}えてみよう。さしあたってぼくは、{教育|きょういく}とは、{子|こ}どもを「{社会|しゃかい}の{成員|せいいん}（{大人|おとな}）としてふさわしい{存在|そんざい}」へと{育|そだ}て{上|あ}げていくこと、と{定義|ていぎ}してみたい。

どんな{時代|じだい}、どんな{社会|しゃかい}の{人|ひと}びとでも、{子|こ}どもを{大人|おとな}に{育|そだ}て{上|あ}げなくてはならなかった。そのさいには、①{社会|しゃかい}の{成員|せいいん}として「ふさわしい」あり{方|かた}が{何|なに}かしら{想定|そうてい}されていて、それが{教育|きょういく}の{営|いとな}みを{導|みちび}いていたはずだ。

その「ふさわしさ」は、{大|おお}きく{二|ふた}つに{分|わ}けられるだろう。{一|ひと}つは、{働|はたら}いて{食|た}べていけるために{必要|ひつよう}な{能力|のうりょく}、つまり{農民|のうみん}なら{農民|のうみん}としての、{漁民|ぎょみん}ならば{漁民|ぎょみん}としての、{技能|ぎのう}や{知識|ちしき}。もう{一|ひと}つは、{他|ほか}の{人|ひと}びとのあいだでふさわしいふるまいができること――{基本的|きほんてき}なルールを{守|まも}り、{他|ほか}の{人|ひと}びとと{協力|きょうりょく}する{態勢|たいせい}をとれること、{自分|じぶん}に{与|あた}えられた{役割|やくわり}を{果|は}たし、その{責任|せきにん}をとれること{等々|とうとう}、つまり、{他者|たしゃ}との{関係|かんけい}{能力|のうりょく}である。では、{現代|げんだい}{社会|しゃかい}においては、どういうことが「{大人|おとな}としてふさわしい」のだろうか？{教育|きょういく}{理念|りねん}を{構築|こうちく}するとは、このことをあらためて{考|かんが}え、かつ{共有|きょうゆう}しようとすることに{他|ほか}ならない。

だが、この「{共有|きょうゆう}」ということはなかなかむずかしい。そこには、{社会|しゃかい}のあり{方|かた}と{人間|にんげん}の{生|い}き{方|かた}をどのようなものとして{思|おも}い{描|えが}くか、つまりは、{異|こと}なった{社会観|しゃかいかん}・{人間観|にんげんかん}がさまざまに{入|はい}り{込|こ}み、{衝突|しょうとつ}してくるからだ。

たとえば、ぼくが{最初|さいしょ}にあげた「{教育|きょういく}とは、{子|こ}どもを{社会|しゃかい}の{成員|せいいん}としてふさわしい{存在|そんざい}にすることだ」という{定義|ていぎ}に{対|たい}しても、②{反発|はんぱつ}を{覚|おぼ}える{人|ひと}がいるだろう。「それは、{社会的|しゃかいてき}{期待|きたい}に{子供|こども}を{添|そ}わせようとするよくない{発想|はっそう}だ。{教育|きょういく}とはむしろ、{子供|こども}の{主体的|しゅたいてき}な{判断力|はんだんりょく}を{育|そだ}てるものだ」というわけである。

この{意見|いけん}はしかし、「{社会|しゃかい}の{秩序|ちつじょ}にただ{従|したが}うだけでなく、{主体的|しゅたいてき}な{判断|はんだん}のもとにみずからの{人生|じんせい}をつくりあげ、{社会|しゃかい}のあり{方|かた}をも{批判的|ひはんてき}に{検討|けんとう}する{人間|にんげん}こそが{社会|しゃかい}の{成員|せいいん}としてふさわしい」という{近代的|きんだいてき}な{人間観|にんげんかん}にもとづいている。これもまた、{社会|しゃかい}の{側|がわ}が{子|こ}どもたちに{寄|よ}せる「{期待|きたい}」の{一種|いっしゅ}だと{言|い}わざるをえない。そして{子供|こども}を{放置|ほうち}すれば{主体的|しゅたいてき}・{批判的|ひはんてき}な{人間|にんげん}になるはずもないから、そのように「{育|そだ}て{上|あ}げ」ようとしなくてはならない。

いずれにせよ、{教育|きょういく}というものは、{社会|しゃかい}（{大人|おとな}）の{側|がわ}が{子供|こども}に{寄|よ}せる{期待|きたい}、もっと{強|つよ}い{言|い}い{方|かた}をすれば、ある{種|しゅ}の{強制|きょうせい}から{自由|じゆう}ではない、とぼくは{考|かんが}える。{重要|じゅうよう}なことは、「この{社会|しゃかい}の{一員|いちいん}、つまり{大人|おとな}として{生|い}きていくうえで{何|なに}が{必要|ひつよう}な{条件|じょうけん}なのか」ということをきちんと{見定|みさだ}め{共有|きょうゆう}したうえでの{強制|きょうせい}であるかどうか、という{点|てん}なのだ。
（{苅谷|かりや}{剛彦|たけひこ}・{西|にし}{研|けん}『{考|かんが}えあう{技術|ぎじゅつ}――{教育|きょういく}と{社会|しゃかい}を{哲学|てつがく}する』による）`,
      arti: `Pertama-tama, mari kita pikirkan apa itu pendidikan. Untuk sementara, saya ingin mendefinisikan pendidikan sebagai membesarkan anak menjadi "keberadaan yang pantas sebagai anggota masyarakat (orang dewasa)".

Orang-orang di zaman dan masyarakat mana pun harus membesarkan anak menjadi orang dewasa. Saat itu, tentu ada semacam gambaran ① keadaan yang "pantas" sebagai anggota masyarakat, dan itulah yang menuntun kegiatan pendidikan.

"Kepantasan" itu bisa dibagi besar menjadi dua. Pertama, kemampuan yang diperlukan untuk bekerja dan mencari nafkah, yaitu keterampilan dan pengetahuan sebagai petani bagi petani, sebagai nelayan bagi nelayan. Kedua, kemampuan berperilaku pantas di antara orang lain — mematuhi aturan dasar, mampu bekerja sama dengan orang lain, menjalankan peran yang diberikan dan bertanggung jawab atasnya, dan sebagainya — yaitu kemampuan menjalin hubungan dengan orang lain. Lalu, dalam masyarakat modern, hal apa yang "pantas sebagai orang dewasa"? Membangun filosofi pendidikan tidak lain adalah memikirkan hal ini kembali dan berusaha menyepakatinya bersama.

Namun, "menyepakati bersama" ini cukup sulit. Sebab di situ masuk dan berbenturan berbagai pandangan tentang masyarakat dan manusia yang berbeda — bagaimana kita membayangkan bentuk masyarakat dan cara hidup manusia.

Misalnya, terhadap definisi yang saya sebut pertama, "pendidikan adalah menjadikan anak keberadaan yang pantas sebagai anggota masyarakat", pasti ada ② orang yang merasa keberatan. Katanya, "Itu cara berpikir buruk yang berusaha menyesuaikan anak dengan harapan masyarakat. Pendidikan justru menumbuhkan daya nilai anak yang mandiri."

Namun, pendapat ini didasari pandangan manusia modern bahwa "yang pantas sebagai anggota masyarakat justru adalah manusia yang tidak hanya mengikuti tatanan masyarakat, tetapi membangun hidupnya sendiri berdasarkan penilaian mandiri dan juga mengkaji bentuk masyarakat secara kritis". Mau tak mau, ini pun harus dikatakan sebagai salah satu "harapan" yang diberikan masyarakat kepada anak-anak. Dan karena anak yang dibiarkan tidak mungkin menjadi manusia yang mandiri dan kritis, mereka harus diupayakan "dibesarkan" menjadi seperti itu.

Bagaimanapun juga, menurut saya pendidikan tidak bebas dari harapan yang diberikan masyarakat (orang dewasa) kepada anak, atau kalau mau lebih keras, dari semacam paksaan. Yang penting adalah apakah paksaan itu dilakukan setelah benar-benar menentukan dan menyepakati bersama "apa syarat yang diperlukan untuk hidup sebagai anggota masyarakat ini, yaitu sebagai orang dewasa".
(Dari buku karya Kariya Takehiko dan Nishi Ken)`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
{私|わたし}たち{日本人|にほんじん}がこれまで{培|つちか}ってきた{日本語|にほんご}を{次|つぎ}の{世代|せだい}に{伝|つた}えていくうえで、{国語|こくご}{辞典|じてん}のデジタル{化|か}は{避|さ}けて{通|とお}れない{課題|かだい}です。{辞書|じしょ}のデジタル{化|か}は「{電子|でんし}{辞書|じしょ}」という{形|かたち}ですでに{実用化|じつようか}され、{多|おお}くの{人|ひと}が{利用|りよう}してきました。わからないことばを{瞬時|しゅんじ}に{検索|けんさく}できる{電子|でんし}{辞書|じしょ}は「データ{検索|けんさく}」というコンピューターの{強|つよ}みを{生|い}かしたもので、ことばに{関|かん}する{膨大|ぼうだい}な{情報|じょうほう}をポケットに{入|い}れて{持|も}ち{歩|ある}けるようになりました。

でも、{書籍|しょせき}の{大辞林|だいじりん}（{注|ちゅう}1）を{手|て}にとって{眺|なが}めていると、{電子|でんし}{辞書|じしょ}では{味|あじ}わうことのできない{楽|たの}しみがあることに{気付|きづ}かされます。ページをぱらぱらとめくりながら、{気|き}になったことばの{解説|かいせつ}を{読|よ}むという{楽|たの}しみ{方|かた}です。{辞書|じしょ}は{単|たん}にことばを{調|しら}べるだけでなく、{読|よ}み{物|もの}としてもじゅうぶんに{楽|たの}しめます。
（広瀬則咽仁　{三省堂|さんせいどう}　2011{年|ねん}11{月|がつ}25{日|にち}{取得|しゅとく}による）

【{意見|いけん} B】
{最近|さいきん}の{電子|でんし}{辞書|じしょ}{研究|けんきゅう}によると、{電子|でんし}{辞書|じしょ}を{用|もち}いた{学生|がくせい}は{単語|たんご}にたどり{着|つ}く{時間|じかん}は{早|はや}いが{第一義|だいいちぎ}（{注|ちゅう}2）の{意味|いみ}だけを{読|よ}むことによる{誤答率|ごとうりつ}が{高|たか}まるという。また{僕|ぼく}が{行|おこな}った{大学生|だいがくせい}のメディア{行動|こうどう}{調査|ちょうさ}でも{印刷|いんさつ}{辞書|じしょ}と{電子|でんし}{辞書|じしょ}は、{意外|いがい}なことにかなりの{率|りつ}で{使|つか}い{分|わ}けられている。パソコンとネットを{使|つか}いこなす{理工|りこう}{系|けい}{学生|がくせい}でも、アンダーラインを{引|ひ}いたり、{使|つか}いこなすにしたがってカスタマイズできる（{注|ちゅう}3）{印刷|いんさつ}{辞書|じしょ}の{魅力|みりょく}を{語|かた}っていた。「{印刷|いんさつ}{辞書|じしょ}はマイ・ディクショナリー（{注|ちゅう}4）になりますから」という{発言|はつげん}が{象徴的|しょうちょうてき}だった。{生|う}まれたときからデジタル{機器|きき}に{囲|かこ}まれて{育|そだ}った{今|いま}の{学生|がくせい}でも、メディアの{本質|ほんしつ}を{見抜|みぬ}き{使|つか}い{分|わ}けているのである。
（植村八潮　{三省堂|さんせいどう}　2011{年|ねん}11{月|がつ}25{日|にち}{取得|しゅとく}による）
（{注|ちゅう}1）{大辞林|だいじりん}：{国語|こくご}{辞典|じてん}の{名前|なまえ}
（{注|ちゅう}2）{第一義|だいいちぎ}の：ここでは、{一番目|いちばんめ}に{書|か}いてある
（{注|ちゅう}3）カスタマイズする：ここでは、{自分|じぶん}に{都合|つごう}のいい{使|つか}い{方|かた}ができるようにする
（{注|ちゅう}4）ディクショナリー：{辞書|じしょ}`,
      arti: `【Pendapat A】
Dalam mewariskan bahasa Jepang yang telah kita orang Jepang pupuk selama ini kepada generasi berikutnya, digitalisasi kamus bahasa Jepang adalah tugas yang tidak bisa dihindari. Digitalisasi kamus sudah diwujudkan dalam bentuk "kamus elektronik" dan telah dipakai banyak orang. Kamus elektronik yang bisa mencari kata yang tidak diketahui dalam sekejap memanfaatkan keunggulan komputer berupa "pencarian data", sehingga informasi kata yang sangat banyak bisa dibawa di saku.

Namun, ketika memegang dan memandangi Daijirin (catatan 1) versi buku, kita jadi sadar ada kesenangan yang tidak bisa dinikmati di kamus elektronik. Yaitu cara menikmati dengan membalik-balik halaman sambil membaca penjelasan kata yang menarik perhatian. Kamus tidak hanya untuk mencari kata, tetapi juga cukup menyenangkan sebagai bacaan.
(Dari situs Sanseidō, diakses 25 November 2011)

【Pendapat B】
Menurut penelitian kamus elektronik belakangan ini, mahasiswa yang memakai kamus elektronik memang lebih cepat sampai pada kata yang dicari, tetapi tingkat jawaban salahnya meningkat karena hanya membaca makna pertama (catatan 2). Selain itu, dalam survei perilaku media mahasiswa yang saya lakukan pun, ternyata kamus cetak dan kamus elektronik cukup banyak dibedakan pemakaiannya. Bahkan mahasiswa sains-teknik yang mahir memakai komputer dan internet pun menceritakan daya tarik kamus cetak yang bisa digarisbawahi dan bisa disesuaikan (catatan 3) seiring makin sering dipakai. Ucapan "Kamus cetak bisa menjadi my dictionary (catatan 4)" sangat simbolis. Mahasiswa masa kini yang tumbuh dikelilingi perangkat digital sejak lahir pun mampu menangkap hakikat media dan membedakan pemakaiannya.
(Dari situs Sanseidō, diakses 25 November 2011)
(Catatan 1) 大辞林: nama kamus bahasa Jepang
(Catatan 2) 第一義の: di sini, yang tertulis paling pertama
(Catatan 3) カスタマイズする: di sini, membuatnya bisa dipakai sesuai kebutuhan sendiri
(Catatan 4) ディクショナリー: kamus`,
    },

    // ── 問題12：広告について ──
    "12": {
      yomi: `{皆|みな}さんは、{今朝|けさ}{起|お}きてからいままでに、どんな{広告|こうこく}を{見|み}たか{覚|おぼ}えていますか。

「{広告|こうこく}はほとんどなかったと{思|おも}うけど…」。いやいや、そんなことはありません。{現在|げんざい}の{時間|じかん}が、{朝|あさ}{会社|かいしゃ}に{着|つ}いたばかりだったとしても、{短|みじか}い{時間|じかん}のうちにものすごい{量|りょう}の{広告|こうこく}に{触|ふ}れているはずです。テレビCMで、{新聞|しんぶん}で、{電車|でんしゃ}の{中|なか}で、{街中|まちなか}で…。{何十|なんじゅう}、{何百|なんびゃく}という{数|かず}が、{目|め}の{前|まえ}を{通|とお}り{過|す}ぎたことでしょう。

そのなかで、ぱっと{思|おも}い{出|だ}せるものはありますか。そう{言|い}われてみると、ほとんどといっていいくらい、{記憶|きおく}に{残|のこ}っていないのではないでしょうか。（{中略|ちゅうりゃく}）

「{広告|こうこく}なんて{誰|だれ}も{見|み}ていない」

これは、{僕|ぼく}が{会社|かいしゃ}に{入|はい}って{間|ま}もない{頃|ころ}に{実感|じっかん}したことです。{会議|かいぎ}で{難|むずか}しい{用語|ようご}が{飛|と}び{交|か}い、{商品|しょうひん}のアピールポイントや{表現|ひょうげん}の{話|はなし}は{白熱|はくねつ}しているのですが、①もっと{根本的|こんぽんてき}なことにはなかなか{触|ふ}れられずにいる。{目|め}の{前|まえ}の{仕事|しごと}に{深|ふか}く{入|はい}り{込|こ}んでしまうと、「{果|は}たして、{広告|こうこく}とは{関心|かんしん}をもってもらえるものなのか」という、ぐっと{引|ひ}いた{視線|しせん}で{見|み}ることを{忘|わす}れがちになってしまうのです。こうした{大|だい}{前提|ぜんてい}が{見|み}えないままに{作|つく}られている{広告|こうこく}が、{非常|ひじょう}に{多|おお}いのではないでしょうか。

{広告|こうこく}を{発信|はっしん}する{側|がわ}としては、{伝|つた}えたいことはたくさんあって、{一般|いっぱん}の{人|ひと}たちも{当然|とうぜん}{注目|ちゅうもく}してくれるものと{思|おも}い{込|こ}みがちです。ところが、{受|う}け{手|て}{側|がわ}というのは、{発信者|はっしんしゃ}{側|がわ}のそんな{思|おも}いなど、ほとんど{意|い}に{介|かい}し（{注|ちゅう}1）ていません。なぜなら、{日常|にちじょう}{生活|せいかつ}のなかでは、{自分|じぶん}の{身|み}の{回|まわ}りの{出来事|できごと}や{問題|もんだい}で{精一杯|せいいっぱい}になっているからです。{人|ひと}は{自分|じぶん}の{心|こころ}にバリア（{注|ちゅう}2）を{張|は}っていて、{無意識|むいしき}のうちに{外部|がいぶ}{情報|じょうほう}を{遮断|しゃだん}しています。ですから、{伝|つた}えたい{情報|じょうほう}を{相当|そうとう}きちんと{整理|せいり}したうえで、{筋道|すじみち}を{立|た}てて{戦略的|せんりゃくてき}に{伝|つた}えることを{考|かんが}えないと、{受|う}け{手|て}の{心|こころ}のバリアを{破|やぶ}って{入|はい}り{込|こ}むことなどできないのです。

「{振|ふ}り{向|む}かせるためには、{刺激的|しげきてき}なものにすればいいんじゃないの？」

②こういう{意見|いけん}もあるでしょう。でも、{単|たん}に{刺激的|しげきてき}なだけでは、{一瞬|いっしゅん}{目|め}を{引|ひ}くだけで{終|お}わってしまう。{心|こころ}の{奥|おく}までは{浸透|しんとう}していかないのです。たとえるなら、{子|こ}どもが{隠|かく}れていた{物陰|ものかげ}から{出|で}てきて、「わっ！」と{驚|おどろ}かせるようなもの。{驚|おどろ}かされた{方|ほう}は、{怒|おこ}ったり{相手|あいて}にしなかったりするかもしれません。{相手|あいて}の{理解|りかい}を{得|え}たり{興味|きょうみ}を{引|ひ}いたりしないと、{本当|ほんとう}に{心|こころ}を{捉|とら}えたことにはならないのです。だから、まず{何|なに}が{言|い}いたいのかという{主旨|しゅし}をはっきりさせ、そのうえでどんなトーンで{伝|つた}えるのかという{工夫|くふう}をすることが{大切|たいせつ}です。
（{佐藤|さとう}{可士和|かしわ}『{佐藤|さとう}{可士和|かしわ}の{超|ちょう}{整理術|せいりじゅつ}』による）
（{注|ちゅう}1）{意|い}に{介|かい}する：{気|き}にする
（{注|ちゅう}2）バリア：ここでは、{壁|かべ}`,
      arti: `Apakah Anda ingat iklan apa saja yang Anda lihat sejak bangun pagi ini sampai sekarang?

"Rasanya hampir tidak ada iklan..." Ah, tidak begitu. Meskipun sekarang Anda baru saja tiba di kantor pagi ini, dalam waktu singkat Anda pasti sudah bersentuhan dengan iklan dalam jumlah luar biasa. Di iklan TV, di koran, di dalam kereta, di jalan... Puluhan, ratusan iklan tentu telah lewat di depan mata.

Di antaranya, adakah yang bisa langsung Anda ingat? Kalau ditanya begitu, bukankah hampir bisa dikatakan tidak ada yang membekas di ingatan? (dihilangkan)

"Iklan itu tidak ada yang melihat."

Ini hal yang benar-benar saya rasakan tak lama setelah masuk perusahaan. Dalam rapat, istilah sulit berseliweran, dan pembicaraan tentang titik jual dan ungkapan produk memanas, tetapi ① hal yang lebih mendasar sulit tersentuh. Kalau sudah terlalu tenggelam dalam pekerjaan di depan mata, kita cenderung lupa melihat dari kejauhan: "Apakah iklan itu memang sesuatu yang akan diminati orang?" Bukankah sangat banyak iklan yang dibuat tanpa melihat premis besar ini?

Sebagai pihak yang membuat iklan, ada banyak hal yang ingin disampaikan, dan kita cenderung yakin masyarakat umum pun tentu akan memperhatikannya. Namun, pihak penerima hampir sama sekali tidak memedulikan (catatan 1) perasaan pihak pembuat seperti itu. Sebab, dalam kehidupan sehari-hari mereka sudah kewalahan dengan kejadian dan masalah di sekitar mereka. Orang memasang penghalang (catatan 2) di hatinya dan tanpa sadar memblokir informasi dari luar. Karena itu, jika informasi yang ingin disampaikan tidak ditata dengan cukup rapi lalu disampaikan secara runtut dan strategis, mustahil menembus penghalang hati penerima.

"Kalau mau membuat orang menoleh, bukankah cukup dibuat provokatif?"

② Mungkin ada juga pendapat seperti ini. Namun, kalau hanya provokatif, iklan itu hanya menarik perhatian sesaat lalu selesai. Tidak meresap sampai ke lubuk hati. Ibaratnya seperti anak yang keluar dari tempat persembunyian lalu mengagetkan, "Dor!" Yang dikagetkan mungkin marah atau mengabaikannya. Jika tidak mendapat pemahaman atau menarik minat orang itu, kita belum benar-benar menangkap hatinya. Karena itu, penting untuk lebih dulu memperjelas maksud apa yang ingin disampaikan, lalu mengupayakan nada seperti apa untuk menyampaikannya.
(Dari buku karya Satō Kashiwa tentang teknik merapikan)
(Catatan 1) 意に介する: memedulikan
(Catatan 2) バリア: di sini, dinding`,
    },

    // ── 問題13：「東西劇場　友の会」へのお誘い ──
    "13": {
      yomi: `「{東西|とうざい}{劇場|げきじょう}　{友|とも}の{会|かい}」は、{伝統|でんとう}{芸能|げいのう}、{現代|げんだい}{演劇|えんげき}、バレエ、{音楽|おんがく}などの{舞台|ぶたい}{芸術|げいじゅつ}を{皆様|みなさま}により{深|ふか}く、{身近|みぢか}に{楽|たの}しんでいただくための{会員|かいいん}{組織|そしき}です。{会員|かいいん}の{方|かた}には{様々|さまざま}な{特典|とくてん}をご{用意|ようい}しております。

・{東西|とうざい}{劇場|げきじょう}で{行|おこな}われる{公演|こうえん}やイベントの{情報|じょうほう}をお{伝|つた}えする{会報誌|かいほうし}「とうざい」を{隔月|かくげつ}でお{送|おく}りいたします。

・{東西|とうざい}{劇場|げきじょう}で{行|おこな}われるすべての{公演|こうえん}のチケットを{会員|かいいん}{割引|わりびき}{価格|かかく}でお{求|もと}めいただけます（{一般|いっぱん}{会員|かいいん}10％{引|びき}、{学生|がくせい}{会員|かいいん}15％{引|びき}）。また、{日本|にほん}{全国|ぜんこく}の{系列|けいれつ}{劇場|げきじょう}の{公演|こうえん}にも{一部|いちぶ}{割引|わりびき}を{受|う}けられるものがあります（5％{引|びき}）。

・{舞台|ぶたい}{芸術|げいじゅつ}{関連|かんれん}{書籍|しょせき}を{扱|あつか}う{東西|とうざい}{劇場|げきじょう}{内|ない}{直営|ちょくえい}{売店|ばいてん}、および{系列|けいれつ}{劇場|げきじょう}{売店|ばいてん}でも{割引|わりびき}が{受|う}けられます（{東西|とうざい}{劇場|げきじょう}10％{引|びき}、{系列|けいれつ}{劇場|げきじょう}5％{引|びき}）。

{割引|わりびき}を{受|う}けられる{際|さい}には、{会員証|かいいんしょう}が{必要|ひつよう}です。{学生|がくせい}{会員|かいいん}の{方|かた}は{会員証|かいいんしょう}の{他|ほか}、{学生証|がくせいしょう}も{併|あわ}せてご{提示|ていじ}ください。

【{入会費|にゅうかいひ}・{年会費|ねんかいひ}】
{入会費|にゅうかいひ}（{入会|にゅうかい}{時|じ}のみ）：1,000{円|えん}
{年会費|ねんかいひ}（1{年|ねん}ごと）：{一般|いっぱん}{会員|かいいん}　2,000{円|えん}、{学生|がくせい}{会員|かいいん}　1,500{円|えん}

【ご{入会|にゅうかい}の{手続|てつづ}き】
ご{入会|にゅうかい}は{東西|とうざい}{劇場|げきじょう}{内|ない}の「{東西|とうざい}{劇場|げきじょう}　{友|とも}の{会|かい}」{事務局|じむきょく}で{承|うけたまわ}ります。

{一般|いっぱん}{会員|かいいん}の{方|かた}は、{事務局|じむきょく}で{入会費|にゅうかいひ}のお{支払|しはら}いおよび{年会費|ねんかいひ}{振替|ふりかえ}{用|よう}の{金融|きんゆう}{機関|きかん}{口座|こうざ}のご{登録|とうろく}をお{願|ねが}いします（{金融|きんゆう}{機関|きかん}の{口座|こうざ}{情報|じょうほう}と{印鑑|いんかん}をご{持参|じさん}ください）。{年会費|ねんかいひ}は、ご{入会|にゅうかい}の{約|やく}2ヶ{月|げつ}{後|ご}に、ご{登録|とうろく}の{口座|こうざ}からの{自動|じどう}{振替|ふりかえ}となります。{退会|たいかい}のお{申|もう}し{出|で}がない{限|かぎ}り、{毎年|まいとし}{自動的|じどうてき}に{引|ひ}き{落|お}とされますのでご{了承|りょうしょう}ください。

{学生|がくせい}{会員|かいいん}の{方|かた}は、{入会|にゅうかい}{申|もう}し{込|こ}みの{際|さい}に{学生証|がくせいしょう}をお{持|も}ちの{上|うえ}、{入会費|にゅうかいひ}と{年会費|ねんかいひ}を{事務局|じむきょく}でお{支払|しはら}いください。{一年|いちねん}ごとに{入会|にゅうかい}{継続|けいぞく}の{手続|てつづ}きをお{願|ねが}いしています。{入会|にゅうかい}を{申|もう}し{込|こ}まれた{方|かた}にはその{場|ば}で{会員証|かいいんしょう}を{発行|はっこう}します。

「{東西|とうざい}{劇場|げきじょう}　{友|とも}の{会|かい}」{事務局|じむきょく}　TEL　03-1234-5678`,
      arti: `"Perkumpulan Sahabat Teater Tōzai" adalah organisasi keanggotaan agar Anda bisa menikmati seni panggung seperti seni tradisional, teater modern, balet, dan musik dengan lebih dalam dan lebih dekat. Kami menyediakan berbagai keistimewaan bagi anggota.

・Kami mengirimkan buletin "Tōzai" yang berisi informasi pertunjukan dan acara di Teater Tōzai setiap dua bulan sekali.

・Anda bisa membeli tiket semua pertunjukan di Teater Tōzai dengan harga diskon anggota (anggota umum diskon 10%, anggota pelajar diskon 15%). Selain itu, sebagian pertunjukan di teater jaringan di seluruh Jepang juga bisa didiskon (diskon 5%).

・Diskon juga berlaku di toko langsung di dalam Teater Tōzai yang menjual buku terkait seni panggung, serta toko di teater jaringan (Teater Tōzai diskon 10%, teater jaringan diskon 5%).

Untuk mendapatkan diskon, diperlukan kartu anggota. Anggota pelajar mohon menunjukkan kartu pelajar bersama kartu anggota.

【Uang pendaftaran & iuran tahunan】
Uang pendaftaran (hanya saat mendaftar): 1.000 yen
Iuran tahunan (setiap tahun): anggota umum 2.000 yen, anggota pelajar 1.500 yen

【Prosedur pendaftaran】
Pendaftaran diterima di sekretariat "Perkumpulan Sahabat Teater Tōzai" di dalam Teater Tōzai.

Anggota umum mohon membayar uang pendaftaran dan mendaftarkan rekening lembaga keuangan untuk autodebet iuran tahunan di sekretariat (bawa informasi rekening dan stempel). Iuran tahunan akan didebet otomatis dari rekening terdaftar sekitar 2 bulan setelah mendaftar. Mohon dimaklumi bahwa selama tidak ada permohonan berhenti, iuran akan didebet otomatis setiap tahun.

Anggota pelajar mohon membawa kartu pelajar saat mendaftar, lalu membayar uang pendaftaran dan iuran tahunan di sekretariat. Kami meminta prosedur perpanjangan keanggotaan setiap tahun. Kartu anggota langsung diterbitkan di tempat bagi yang mendaftar.

Sekretariat "Perkumpulan Sahabat Teater Tōzai" TEL 03-1234-5678`,
    },
  },
};
