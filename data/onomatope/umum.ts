// data/onomatope/umum.ts
// Kamus Onomatope — kelompok UMUM: dipakai sehari-hari, dikenal semua penutur,
// sering muncul di percakapan, anime/drama, dan ujian JLPT.
// Arti, kondisi penggunaan & contoh kalimat ditulis sendiri.

import type { OnomatopeKategori } from "@/data/onomatope-types";

export const onomatopeUmum: OnomatopeKategori[] = [
  {
    id: "perasaan",
    judul: "Perasaan & emosi",
    items: [
      { kata: "どきどき", arti: "berdebar-debar", kondisi: "Jantung berdebar karena gugup, takut, atau jatuh cinta.", contoh: "発表の前はいつもどきどきする。" },
      { kata: "わくわく", arti: "tidak sabar karena senang", kondisi: "Perasaan gembira menantikan sesuatu yang menyenangkan.", contoh: "明日から旅行なので、わくわくしている。" },
      { kata: "いらいら", arti: "kesal, jengkel", kondisi: "Tidak sabar atau marah karena sesuatu tidak berjalan sesuai harapan.", contoh: "電車が全然来なくて、いらいらした。" },
      { kata: "はらはら", arti: "cemas, deg-degan (melihat orang lain)", kondisi: "Khawatir menyaksikan situasi berbahaya atau genting, biasanya yang dialami orang lain.", contoh: "子どもが高い所に登るのを見て、はらはらした。" },
      { kata: "がっかり", arti: "kecewa", kondisi: "Kecewa karena hasil atau kenyataan tidak sesuai harapan.", contoh: "楽しみにしていたコンサートが中止になって、がっかりした。" },
      { kata: "ほっと", arti: "lega", kondisi: "Rasa tegang atau khawatir hilang setelah masalah selesai.", contoh: "試験に合格して、ほっとした。" },
      { kata: "うきうき", arti: "riang gembira", kondisi: "Hati ringan dan senang sampai terlihat dari sikap.", contoh: "彼女はデートの日、朝からうきうきしていた。" },
      { kata: "びっくり", arti: "kaget, terkejut", kondisi: "Terkejut oleh sesuatu yang tidak terduga; sangat umum dalam percakapan.", contoh: "急に後ろから呼ばれて、びっくりした。" },
    ],
  },
  {
    id: "tubuh",
    judul: "Kondisi tubuh & kesehatan",
    items: [
      { kata: "ぺこぺこ", arti: "lapar sekali", kondisi: "Perut sangat lapar (おなかがぺこぺこ). Juga berarti membungkuk-bungkuk berulang kali.", contoh: "朝から何も食べていないので、おなかがぺこぺこだ。" },
      { kata: "からから", arti: "kering kerontang (haus)", kondisi: "Tenggorokan sangat kering karena haus; juga tanah atau udara yang sangat kering.", contoh: "走った後で、のどがからからだ。" },
      { kata: "ずきずき", arti: "nyut-nyutan", kondisi: "Rasa sakit berdenyut, misalnya sakit kepala, gigi, atau luka.", contoh: "虫歯がずきずき痛む。" },
      { kata: "ふらふら", arti: "sempoyongan, pusing", kondisi: "Badan goyah karena lelah, sakit, atau lapar; tidak bisa berdiri tegak.", contoh: "熱があって、立つとふらふらする。" },
      { kata: "くたくた", arti: "lelah sekali, lunglai", kondisi: "Sangat capek sampai tidak bertenaga. Juga untuk kain/sayur yang sudah lemas.", contoh: "一日中歩いて、くたくたに疲れた。" },
      { kata: "ぐっすり", arti: "(tidur) nyenyak", kondisi: "Tidur dalam dan pulas tanpa terbangun.", contoh: "昨夜はぐっすり眠れた。" },
      { kata: "ぞくぞく", arti: "merinding, menggigil", kondisi: "Badan terasa dingin karena demam atau takut; juga merinding karena sangat senang/tegang.", contoh: "風邪をひいたのか、背中がぞくぞくする。" },
    ],
  },
  {
    id: "gerakan",
    judul: "Gerakan & tindakan",
    items: [
      { kata: "うろうろ", arti: "mondar-mandir", kondisi: "Berjalan ke sana kemari tanpa tujuan jelas, misalnya karena tersesat atau bingung.", contoh: "道がわからなくて、駅の周りをうろうろした。" },
      { kata: "ぶらぶら", arti: "jalan-jalan santai", kondisi: "Berjalan tanpa tujuan untuk bersantai; juga berarti menganggur atau benda yang bergoyang menggantung.", contoh: "日曜日は町をぶらぶらした。" },
      { kata: "ゆっくり", arti: "pelan-pelan, santai", kondisi: "Melakukan sesuatu tanpa terburu-buru; juga beristirahat dengan tenang.", contoh: "今日は家でゆっくり休んでください。" },
      { kata: "さっと", arti: "dengan cepat, sekilas", kondisi: "Gerakan cepat dan ringan, atau melakukan sesuatu sebentar saja.", contoh: "野菜をさっとゆでる。" },
      { kata: "どんどん", arti: "terus-menerus, makin lama makin", kondisi: "Sesuatu berlangsung atau bertambah dengan cepat dan berturut-turut.", contoh: "遠慮しないで、どんどん食べてください。" },
      { kata: "ぐるぐる", arti: "berputar-putar", kondisi: "Berputar berkali-kali, atau melilitkan sesuatu berulang kali.", contoh: "道に迷って、同じ所をぐるぐる回った。" },
      { kata: "よちよち", arti: "tertatih-tatih", kondisi: "Cara berjalan bayi atau anak kecil yang baru belajar jalan.", contoh: "赤ちゃんがよちよち歩き始めた。" },
      { kata: "ころころ", arti: "menggelinding", kondisi: "Benda bulat kecil yang menggelinding ringan. Juga untuk sesuatu yang sering berubah (意見がころころ変わる).", contoh: "ボールが坂をころころ転がっていった。" },
    ],
  },
  {
    id: "bicara",
    judul: "Bicara, tertawa & menangis",
    items: [
      { kata: "にこにこ", arti: "tersenyum-senyum", kondisi: "Tersenyum ramah dan senang, tanpa suara.", contoh: "店員さんはいつもにこにこしている。" },
      { kata: "げらげら", arti: "tertawa terbahak-bahak", kondisi: "Tertawa keras tanpa menahan diri.", contoh: "テレビを見ながら、げらげら笑った。" },
      { kata: "くすくす", arti: "tertawa cekikikan", kondisi: "Tertawa kecil sambil menahan suara.", contoh: "後ろの席の学生がくすくす笑っている。" },
      { kata: "しくしく", arti: "menangis terisak pelan", kondisi: "Menangis dengan suara kecil dan lama. Juga untuk sakit perut yang terus-menerus tapi ringan.", contoh: "迷子の子どもがしくしく泣いていた。" },
      { kata: "わんわん", arti: "menangis meraung-raung", kondisi: "Menangis dengan suara keras, biasanya anak kecil.", contoh: "転んだ子どもがわんわん泣き出した。" },
      { kata: "ぺらぺら", arti: "fasih, lancar (bahasa)", kondisi: "Lancar berbicara bahasa asing; juga banyak bicara sampai membocorkan hal yang tidak perlu.", contoh: "彼は英語も中国語もぺらぺらだ。" },
      { kata: "ひそひそ", arti: "berbisik-bisik", kondisi: "Berbicara pelan agar tidak terdengar orang lain.", contoh: "二人は教室の隅でひそひそ話していた。" },
    ],
  },
  {
    id: "makan",
    judul: "Makan, minum & rasa",
    items: [
      { kata: "ぱくぱく", arti: "makan dengan lahap", kondisi: "Makan dengan suapan besar dan cepat, terlihat enak sekali.", contoh: "子どもたちはカレーをぱくぱく食べた。" },
      { kata: "もぐもぐ", arti: "mengunyah-ngunyah", kondisi: "Mengunyah dengan mulut tertutup.", contoh: "ハムスターがひまわりの種をもぐもぐ食べている。" },
      { kata: "ごくごく", arti: "minum dengan tegukan besar", kondisi: "Minum banyak dan cepat, biasanya karena haus.", contoh: "運動の後、水をごくごく飲んだ。" },
      { kata: "さくさく", arti: "renyah", kondisi: "Tekstur makanan yang renyah ringan seperti gorengan atau kue kering. Juga untuk pekerjaan yang berjalan lancar.", contoh: "この天ぷらは衣がさくさくしている。" },
      { kata: "ぐつぐつ", arti: "mendidih bergolak", kondisi: "Masakan berkuah yang direbus lama dengan api kecil.", contoh: "鍋でシチューをぐつぐつ煮込む。" },
      { kata: "ほかほか", arti: "hangat mengepul", kondisi: "Makanan yang baru matang dan masih hangat; juga badan yang terasa hangat.", contoh: "ほかほかのご飯が食べたい。" },
      { kata: "ぴりぴり", arti: "pedas menyengat", kondisi: "Rasa pedas yang menggigit di lidah. Juga suasana tegang atau sikap gelisah.", contoh: "このカレーは舌がぴりぴりするほど辛い。" },
    ],
  },
  {
    id: "tekstur",
    judul: "Keadaan benda & tekstur",
    items: [
      { kata: "ふわふわ", arti: "lembut mengembang", kondisi: "Benda yang ringan, empuk, dan lembut seperti kapas, roti, atau handuk.", contoh: "このパンはふわふわでおいしい。" },
      { kata: "つるつる", arti: "licin, mulus", kondisi: "Permukaan yang sangat licin; juga suara/cara menyeruput mi.", contoh: "雪で道がつるつるになっている。" },
      { kata: "ざらざら", arti: "kasar (permukaan)", kondisi: "Permukaan yang terasa kasar seperti amplas atau pasir.", contoh: "砂が入って、床がざらざらしている。" },
      { kata: "べたべた", arti: "lengket", kondisi: "Lengket tidak nyaman di kulit atau benda. Juga pasangan yang terlalu menempel.", contoh: "ジュースをこぼして、テーブルがべたべただ。" },
      { kata: "ぴかぴか", arti: "berkilau, mengilap", kondisi: "Benda yang bersih mengilap atau masih baru.", contoh: "車を洗って、ぴかぴかにした。" },
      { kata: "ぼろぼろ", arti: "rusak parah, compang-camping", kondisi: "Benda yang sudah sangat usang atau hancur; juga badan/hati yang sangat lelah.", contoh: "この辞書は使いすぎてぼろぼろになった。" },
      { kata: "ぎゅうぎゅう", arti: "berdesak-desakan, penuh sesak", kondisi: "Tempat atau wadah yang terisi sangat padat.", contoh: "朝の電車はぎゅうぎゅうで動けない。" },
      { kata: "ばらばら", arti: "berserakan, terpencar", kondisi: "Benda yang tercerai-berai atau orang yang tidak kompak/tidak seragam.", contoh: "本が床にばらばらに落ちた。" },
    ],
  },
  {
    id: "alam",
    judul: "Cuaca & alam",
    items: [
      { kata: "ざあざあ", arti: "(hujan) deras", kondisi: "Suara dan keadaan hujan yang turun sangat lebat.", contoh: "外は雨がざあざあ降っている。" },
      { kata: "しとしと", arti: "(hujan) rintik-rintik tenang", kondisi: "Hujan halus yang turun pelan dan lama, khas musim hujan 梅雨.", contoh: "朝から雨がしとしと降り続いている。" },
      { kata: "ぽつぽつ", arti: "tetes demi tetes, mulai gerimis", kondisi: "Hujan yang baru mulai turun satu-satu; juga sesuatu yang muncul sedikit demi sedikit.", contoh: "雨がぽつぽつ降り出した。" },
      { kata: "ごろごろ", arti: "(petir) bergemuruh", kondisi: "Suara guntur di kejauhan. Juga berarti bermalas-malasan berbaring atau benda besar menggelinding.", contoh: "遠くで雷がごろごろ鳴っている。" },
      { kata: "ぽかぽか", arti: "hangat nyaman", kondisi: "Cuaca atau badan yang hangat menyenangkan, terutama sinar matahari musim semi.", contoh: "今日はぽかぽかして、気持ちがいい。" },
      { kata: "じめじめ", arti: "lembap, pengap", kondisi: "Udara atau tempat yang lembap dan tidak nyaman.", contoh: "梅雨の時期は部屋がじめじめする。" },
      { kata: "きらきら", arti: "berkelap-kelip", kondisi: "Cahaya yang berkilau indah seperti bintang atau air; juga mata yang berbinar.", contoh: "夜空に星がきらきら光っている。" },
    ],
  },
  {
    id: "suara",
    judul: "Bunyi & suara",
    items: [
      { kata: "とんとん", arti: "tok-tok (ketukan ringan)", kondisi: "Suara mengetuk pelan berulang, misalnya mengetuk pintu atau menepuk bahu.", contoh: "誰かがドアをとんとんたたいた。" },
      { kata: "がちゃん", arti: "prang! (benda keras jatuh/pecah)", kondisi: "Suara benda kaca atau logam yang jatuh, pecah, atau beradu keras.", contoh: "皿ががちゃんと割れた。" },
      { kata: "ばたん", arti: "brak! (pintu dibanting, jatuh)", kondisi: "Suara pintu tertutup keras atau orang/benda yang jatuh terjerembap.", contoh: "風でドアがばたんと閉まった。" },
      { kata: "ざわざわ", arti: "riuh rendah, ramai berbisik", kondisi: "Suara banyak orang berbicara bersamaan; juga suara daun tertiup angin.", contoh: "先生が来るまで、教室はざわざわしていた。" },
      { kata: "ちゃりん", arti: "cring! (koin jatuh)", kondisi: "Suara logam kecil seperti koin atau kunci yang jatuh.", contoh: "小銭がちゃりんと床に落ちた。" },
    ],
  },
  {
    id: "sikap",
    judul: "Sikap, sifat & cara melakukan",
    items: [
      { kata: "しっかり", arti: "dengan baik, kuat, teguh", kondisi: "Melakukan sesuatu dengan sungguh-sungguh; juga orang yang bisa diandalkan.", contoh: "毎朝しっかり朝ごはんを食べましょう。" },
      { kata: "きちんと", arti: "dengan rapi, dengan benar", kondisi: "Melakukan sesuatu dengan teratur dan sesuai aturan.", contoh: "使った物はきちんと片付けてください。" },
      { kata: "のんびり", arti: "santai, tenang", kondisi: "Menghabiskan waktu tanpa terburu-buru; juga sifat yang tidak tergesa-gesa.", contoh: "休みの日は田舎でのんびり過ごしたい。" },
      { kata: "こつこつ", arti: "tekun sedikit demi sedikit", kondisi: "Usaha yang dilakukan rutin dan sabar dalam waktu lama.", contoh: "毎日こつこつ単語を覚えている。" },
      { kata: "うっかり", arti: "tanpa sengaja, lalai", kondisi: "Lupa atau salah karena kurang perhatian.", contoh: "うっかり傘を電車に忘れてしまった。" },
      { kata: "ぎりぎり", arti: "mepet, nyaris", kondisi: "Batas waktu atau jumlah yang hampir tidak cukup.", contoh: "締め切りぎりぎりにレポートを出した。" },
    ],
  },
];
