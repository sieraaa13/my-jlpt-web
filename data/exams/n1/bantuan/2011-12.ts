import type { ExamBantuan } from "@/lib/exam-bantuan";

// Bantuan Mode Latihan — JLPT N1 Desember 2011
// yomi: {漢字|よみ} → furigana; arti: terjemahan bahasa Indonesia.
// Soal isian tetap memakai (…) di arti supaya jawaban tidak langsung terbaca.
export const bantuanN1_1112: ExamBantuan = {
  soal: {
    // ── 問題1：言葉の読み方 ──
    1: {
      yomi: "{時間|じかん}がたつにつれて、{選手|せんしゅ}の{動|うご}きが【{鈍|にぶ}って】きた。",
      arti: "Seiring berjalannya waktu, gerakan para atlet mulai 【melambat/tumpul】.",
      optArti: ["melambat, tumpul (鈍って)", "macet, tertunda (滞って)", "kalah mutu (劣って)", "menyusut (縮まって)"],
    },
    2: {
      yomi: "{高校生|こうこうせい}のころ、「{将来|しょうらい}は{海外|かいがい}で{働|はたら}きたい」と【{漠然|ばくぜん}】と{考|かんが}えていた。",
      arti: "Waktu SMA, saya 【samar-samar】 berpikir, \"Kelak saya ingin bekerja di luar negeri.\"",
    },
    3: {
      yomi: "【{閲覧|えつらん}】した{資料|しりょう}は、カウンターに{戻|もど}してください。",
      arti: "Bahan yang sudah 【dibaca (di tempat)】 silakan dikembalikan ke konter.",
    },
    4: {
      yomi: "{首相|しゅしょう}は{自身|じしん}の{発言|はつげん}についての【{釈明|しゃくめい}】におわれた。",
      arti: "Perdana menteri disibukkan dengan 【memberi penjelasan/klarifikasi】 atas ucapannya sendiri.",
    },
    5: {
      yomi: "{弊社|へいしゃ}は{今回|こんかい}の【{合併|がっぺい}】を{機|き}に{社名|しゃめい}を{変更|へんこう}します。",
      arti: "Perusahaan kami akan mengganti nama dengan memanfaatkan momen 【merger】 kali ini.",
    },
    6: {
      yomi: "ようやく{景気|けいき}{回復|かいふく}の【{兆|きざ}し】が{見|み}えてきた。",
      arti: "Akhirnya 【tanda-tanda】 pemulihan ekonomi mulai terlihat.",
      optArti: ["tanda, simbol (印)", "bukti (証)", "tanda-tanda, gejala awal (兆し)", "sinar matahari (日差し)"],
    },

    // ── 問題2：文脈規定 ──
    7: {
      yomi: "{大学|だいがく}をやめると{言|い}ったら、{母|はは}に（　）{反対|はんたい}された。",
      arti: "Saat saya bilang akan berhenti kuliah, ibu saya menentang dengan (…).",
      optYomi: ["{猛|もう}", "{強|きょう}", "{頑|がん}", "{厳|げん}"],
      optArti: ["sangat keras, hebat (猛反対)", "kuat", "keras kepala", "ketat"],
    },
    8: {
      yomi: "そんな{軽装|けいそう}で{冬|ふゆ}の{山|やま}に{登|のぼ}るなんて、（　）だ。",
      arti: "Mendaki gunung di musim dingin dengan pakaian setipis itu sungguh (…).",
      optYomi: ["{無残|むざん}", "{無謀|むぼう}", "{無実|むじつ}", "{無念|むねん}"],
      optArti: ["mengenaskan", "nekat, sembrono", "tidak bersalah", "penyesalan, kecewa"],
    },
    9: {
      yomi: "{今回|こんかい}の{作品|さくひん}は、{彼|かれ}にとって（　）の{出来|でき}と{言|い}えるだろう。",
      arti: "Karya kali ini bisa dibilang hasil yang (…) baginya.",
      optYomi: ["{核心|かくしん}", "{真心|まごころ}", "{会心|かいしん}", "{気心|きごころ}"],
      optArti: ["inti", "ketulusan hati", "memuaskan hati sendiri", "watak, isi hati"],
    },
    10: {
      yomi: "この{言葉|ことば}には、やや{批判的|ひはんてき}な（　）が{含|ふく}まれている。",
      arti: "Kata ini mengandung (…) yang agak kritis.",
      optArti: ["selera, kepekaan", "karakter", "nuansa", "inspirasi"],
    },
    11: {
      yomi: "この{辺|あた}りは、{高速|こうそく}{道路|どうろ}と{鉄道|てつどう}が（　）して{走|はし}っている。",
      arti: "Di sekitar sini, jalan tol dan rel kereta membentang (…).",
      optYomi: ["{同調|どうちょう}", "{並列|へいれつ}", "{同伴|どうはん}", "{並行|へいこう}"],
      optArti: ["menyesuaikan diri, ikut", "paralel (rangkaian)", "menemani, membawa serta", "sejajar (berjalan berdampingan)"],
    },
    12: {
      yomi: "この{文章|ぶんしょう}は{新聞|しんぶん}{記事|きじ}からの（　）です。",
      arti: "Tulisan ini adalah (…) dari artikel koran.",
      optYomi: ["{抽選|ちゅうせん}", "{摘出|てきしゅつ}", "{採取|さいしゅ}", "{抜粋|ばっすい}"],
      optArti: ["undian", "pengangkatan (organ), mengeluarkan", "pengambilan (sampel)", "kutipan, petikan"],
    },
    13: {
      yomi: "コピー{用紙|ようし}の（　）が{減|へ}ったら、{注文|ちゅうもん}しておいてください。",
      arti: "Kalau (…) kertas fotokopi berkurang, tolong dipesan.",
      optArti: ["menyimpan, mempertahankan", "isi ulang (charge)", "stok, persediaan", "pangsa, berbagi"],
    },

    // ── 問題3：言い換え類義 ──
    14: {
      yomi: "{今日|きょう}の{会議|かいぎ}で{出|で}た{意見|いけん}は、【ありきたりの】ものが{多|おお}かった。",
      arti: "Pendapat yang muncul di rapat hari ini banyak yang 【biasa saja/klise】.",
      optYomi: ["{的確|てきかく}な", "{平凡|へいぼん}な", "{積極的|せっきょくてき}な", "{否定的|ひていてき}な"],
      optArti: ["tepat", "biasa, umum", "aktif, positif", "negatif"],
    },
    15: {
      yomi: "{両|りょう}チームの{実力|じつりょく}の{差|さ}は【{歴然|れきぜん}としている】。",
      arti: "Perbedaan kemampuan kedua tim 【sangat jelas】.",
      optYomi: ["{以前|いぜん}と{変|か}わらない", "ほとんどない", "{以前|いぜん}より{大|おお}きくなっている", "はっきりしている"],
      optArti: ["tidak berubah dari sebelumnya", "hampir tidak ada", "lebih besar dari sebelumnya", "jelas"],
    },
    16: {
      yomi: "{無駄|むだ}な{経費|けいひ}は【{極力|きょくりょく}】{減|へ}らそう。",
      arti: "Mari kurangi biaya yang sia-sia 【semaksimal mungkin】.",
      optYomi: ["{少|すこ}しずつ", "{大幅|おおはば}に", "できる{限|かぎ}り", "{真|ま}っ{先|さき}に"],
      optArti: ["sedikit demi sedikit", "secara besar-besaran", "sebisa mungkin", "paling pertama"],
    },
    17: {
      yomi: "その{結果|けっか}を{聞|き}いて【{落胆|らくたん}した】。",
      arti: "Mendengar hasil itu, saya 【patah semangat/kecewa】.",
      optYomi: [null, null, "{動揺|どうよう}した", "{疑問|ぎもん}を{持|も}った"],
      optArti: ["terkejut", "kecewa", "goyah, gelisah", "merasa ragu"],
    },
    18: {
      yomi: "あの{小説|しょうせつ}の{結末|けつまつ}は【あっけない】ものだったらしい。",
      arti: "Sepertinya akhir novel itu 【antiklimaks/terlalu singkat】.",
      optYomi: ["{意外|いがい}につまらない", "{意外|いがい}におもしろい", "{予想|よそう}{通|どお}りつまらない", "{予想|よそう}{通|どお}りおもしろい"],
      optArti: ["ternyata membosankan", "ternyata menarik", "membosankan sesuai dugaan", "menarik sesuai dugaan"],
    },
    19: {
      yomi: "あのポスターは{色|いろ}の【コントラスト】が{印象的|いんしょうてき}だ。",
      arti: "【Kontras】 warna poster itu sangat berkesan.",
      optYomi: ["{対比|たいひ}", "{効果|こうか}", "{繊細|せんさい}", "{豊富|ほうふ}さ"],
      optArti: ["perbandingan, kontras", "efek", "halus, lembut", "kekayaan, keberlimpahan"],
    },

    // ── 問題4：用法 ── (kata yang diuji diberi tanda kutip di semua pilihan)
    20: {
      arti: "とっくに = sudah dari tadi, sudah lama (terjadi)",
      optYomi: [
        "このへんには、とっくに{大|おお}きいお{寺|てら}があった。",
        "{山田|やまだ}さんならとっくに{帰|かえ}りました。",
        "あのときのことを{今|いま}ごろ{謝|あやま}ってもとっくに{遅|おそ}いよ。",
        "さっきから{電話|でんわ}がとっくに{鳴|な}りっぱなしだ。",
      ],
      optArti: [
        "Di sekitar sini 'sudah dari tadi' ada kuil besar.",
        "Kalau Yamada-san, ia 'sudah dari tadi' pulang.",
        "Minta maaf sekarang atas kejadian waktu itu 'sudah dari tadi' terlambat.",
        "Sejak tadi teleponnya 'sudah dari tadi' terus berdering.",
      ],
    },
    21: {
      arti: "まちまち = berbeda-beda, beragam (tidak seragam)",
      optYomi: [
        "うちの{家族|かぞく}は{夕食|ゆうしょく}をとる{時間|じかん}がまちまちだ。",
        "{自分|じぶん}{用|よう}と{贈|おく}り{物|もの}{用|よう}をまちまちに{包|つつ}んでもらった。",
        "この{花束|はなたば}はまちまちな{色|いろ}が{混|ま}ざっていてきれいだね。",
        "{営業|えいぎょう}{時間|じかん}や{定休日|ていきゅうび}は、まちまちの{店舗|てんぽ}で{異|こと}なります。",
      ],
      optArti: [
        "Di keluarga saya, waktu makan malam 'berbeda-beda'.",
        "Saya minta yang untuk diri sendiri dan untuk hadiah dibungkus 'berbeda-beda'.",
        "Buket bunga ini indah karena warnanya 'berbeda-beda' bercampur.",
        "Jam buka dan hari libur berbeda di toko yang 'berbeda-beda'.",
      ],
    },
    22: {
      arti: "ゆとり = kelonggaran, keleluasaan (waktu, uang, hati)",
      optYomi: [
        "{参加者|さんかしゃ}が{多|おお}かったので、{資料|しりょう}のゆとりはあと{一枚|いちまい}だけです。",
        "{子供|こども}が{生|う}まれてからは{経済的|けいざいてき}にゆとりがなくなった。",
        "レポート{提出|ていしゅつ}まで、あと{一日|いちにち}だけゆとりをください。",
        "すでにかなり{進捗|しんちょく}したので、これ{以上|いじょう}{交渉|こうしょう}のゆとりはない。",
      ],
      optArti: [
        "Karena pesertanya banyak, 'kelonggaran' materinya tinggal satu lembar.",
        "Sejak anak lahir, kami tidak lagi punya 'kelonggaran' secara ekonomi.",
        "Tolong beri saya 'kelonggaran' satu hari lagi sampai penyerahan laporan.",
        "Karena sudah cukup maju, tidak ada lagi 'kelonggaran' untuk bernegosiasi.",
      ],
    },
    23: {
      yomi: "{配布|はいふ}",
      arti: "配布 = membagikan (kepada banyak orang)",
      optYomi: [
        "インターネットでは、{最新|さいしん}ニュースがすぐに{配布|はいふ}される。",
        "{携帯|けいたい}{電話|でんわ}の{電波|でんぱ}は、どこにいても{配布|はいふ}される。",
        "ご{購入|こうにゅう}いただいた{商品|しょうひん}は、ご{自宅|じたく}まで{配布|はいふ}いたします。",
        "あの{店|みせ}では{今|いま}、{化粧品|けしょうひん}の{無料|むりょう}サンプルを{配布|はいふ}している。",
      ],
      optArti: [
        "Di internet, berita terbaru langsung 'dibagikan'.",
        "Sinyal ponsel 'dibagikan' di mana pun kita berada.",
        "Barang yang Anda beli akan kami 'bagikan' sampai ke rumah Anda.",
        "Toko itu sekarang sedang 'membagikan' sampel kosmetik gratis.",
      ],
    },
    24: {
      yomi: "{質素|しっそ}",
      arti: "質素 = sederhana, bersahaja (gaya hidup)",
      optYomi: [
        "この{文章|ぶんしょう}は{質素|しっそ}で、とてもわかりやすい。",
        "もう{少|すこ}し{値段|ねだん}の{質素|しっそ}なツアーはありませんか。",
        "{経験|けいけん}は{質素|しっそ}でも、やる{気|き}のある{人|ひと}を{採用|さいよう}したい。",
        "{無駄|むだ}なものは{買|か}わずに、{質素|しっそ}な{生活|せいかつ}を{送|おく}っている。",
      ],
      optArti: [
        "Tulisan ini 'bersahaja' dan sangat mudah dipahami.",
        "Apakah ada tur yang harganya sedikit lebih 'bersahaja'?",
        "Meski pengalamannya 'bersahaja', saya ingin merekrut orang yang bersemangat.",
        "Saya menjalani hidup 'sederhana' tanpa membeli barang yang tidak perlu.",
      ],
    },
    25: {
      yomi: "{見失|みうしな}う",
      arti: "見失う = kehilangan jejak, tidak lagi melihat (orang/benda yang diikuti)",
      optYomi: [
        "{相手|あいて}チームのわずかなすきを{見失|みうしな}わず、{点|てん}を{取|と}った。",
        "{何度|なんど}もチェックしたはずなのに、{間違|まちが}いを{見失|みうしな}っていた。",
        "{先生|せんせい}は、{最後|さいご}まで{私|わたし}たちを{見失|みうしな}わずに{指導|しどう}してくれた。",
        "よそ{見|み}をしながら{歩|ある}いていたから、{友達|ともだち}を{見失|みうしな}ってしまった。",
      ],
      optArti: [
        "Tanpa 'kehilangan jejak' celah kecil tim lawan, kami mencetak angka.",
        "Padahal sudah berkali-kali dicek, saya 'kehilangan jejak' kesalahannya.",
        "Guru membimbing kami sampai akhir tanpa 'kehilangan jejak' kami.",
        "Karena berjalan sambil melihat ke arah lain, saya 'kehilangan jejak' teman saya.",
      ],
    },

    // ── 問題5：文法形式の判断 ──
    26: {
      yomi: "{燃料|ねんりょう}{価格|かかく}の{高騰|こうとう}（　）、{複数|ふくすう}の{航空|こうくう}{会社|がいしゃ}が{運賃|うんちん}を{値上|ねあ}げした。",
      arti: "(…) melonjaknya harga bahan bakar, beberapa maskapai menaikkan tarif.",
      optYomi: ["を{受|う}けて", "に{沿|そ}って", null, "を{通|つう}じて"],
      optArti: ["menanggapi, akibat", "sesuai dengan", "selama, meliputi", "melalui"],
    },
    27: {
      yomi: "{本日|ほんじつ}{結論|けつろん}が{出|で}なかった{問題|もんだい}については、{次回|じかい}、{改|あらた}めて{検討|けんとう}すること（　）{致|いた}します。",
      arti: "Masalah yang hari ini belum mendapat kesimpulan, kami (…) untuk dibahas kembali pada kesempatan berikutnya.",
      optArti: ["(の)", "(で)", "(が)", "(ことと致します = memutuskan untuk)"],
    },
    28: {
      yomi: "{全国|ぜんこく}の{名産品|めいさんひん}を{電話|でんわ}{一本|いっぽん}で{自宅|じたく}まで{届|とど}けてくれるサービスが、その{手軽|てがる}さ（　）{人気|にんき}を{集|あつ}めている。",
      arti: "Layanan yang mengantarkan produk khas seluruh negeri ke rumah hanya dengan sekali telepon menjadi populer (…) kemudahannya.",
      optArti: ["sambil, meskipun", "karena", "entah di mana, agak", "tanpa"],
    },
    29: {
      yomi: "A「{頂上|ちょうじょう}まで、どのぐらいかかりますか。」B「{大人|おとな}の{私|わたし}で2{時間|じかん}{半|はん}といった（　）でしたから、お{子|こ}さん{連|づ}れなら、{半日|はんにち}かかるかもしれませんね。」",
      arti: "A: \"Sampai puncak butuh berapa lama?\" B: \"Untuk saya yang dewasa (…) dua setengah jam, jadi kalau membawa anak mungkin butuh setengah hari.\"",
      optArti: ["hal", "hanya, sekitar", "waktu", "kira-kira (sekitar)"],
    },
    30: {
      yomi: "100{年|ねん}の{伝統|でんとう}を{誇|ほこ}るこの{旅館|りょかん}のサービスには、{老舗|しにせ}{旅館|りょかん}（　）{細|こま}やかな{心遣|こころづか}いが{感|かん}じられる。",
      arti: "Dalam pelayanan penginapan yang membanggakan tradisi 100 tahun ini, terasa perhatian cermat yang (…) penginapan tua yang mapan.",
      optArti: ["semacam (merendahkan)", "sesuai karakter", "sampai sebanding dengan", "yang khas, hanya ada pada"],
    },
    31: {
      yomi: "{彼|かれ}の{論文|ろんぶん}は、{構成|こうせい}にはまだ{少|すこ}し{問題|もんだい}がある{気|き}（　）、{内容|ないよう}{自体|じたい}はだいぶよくなったと{思|おも}う。",
      arti: "Makalahnya, saya (…) masih ada sedikit masalah dalam susunannya, tetapi menurut saya isinya sudah jauh lebih baik.",
      optArti: ["memang tidak merasa, tetapi", "bukannya tidak merasa (agak merasa), tetapi", "tidak ada pilihan selain merasa, tetapi", "bukannya tidak merasa (bentuk tidak tepat)"],
    },
    32: {
      yomi: "{夫|おっと}「{週末|しゅうまつ}の{旅行|りょこう}、このスーツケースでどうかな？」{妻|つま}「{何|なん}{週間|しゅうかん}も{海外|かいがい}に（　）、{今度|こんど}はそんなに{大|おお}きいスーツケースは{要|い}らないんじゃない？」",
      arti: "Suami: \"Untuk liburan akhir pekan, koper ini bagaimana?\" Istri: \"(…) ke luar negeri berminggu-minggu, kali ini kan tidak perlu koper sebesar itu?\"",
      optYomi: ["{行|い}くわけじゃあるまいし", "{行|い}くもんだっただろうに", "{行|い}くのじゃあるまいし", "{行|い}くもんじゃなかっただろうけど"],
      optArti: ["toh bukannya mau pergi", "padahal mestinya pergi", "(bentuk tidak tepat)", "meski mestinya tidak pergi"],
    },
    33: {
      yomi: "（インタビューで）{記者|きしゃ}「{田中|たなか}{監督|かんとく}、{優勝|ゆうしょう}おめでとうございます。{田中|たなか}{監督|かんとく}ご{自身|じしん}の{今|いま}のお{気持|きも}ちを（　）。」{監督|かんとく}「はい。{優勝|ゆうしょう}できて{本当|ほんとう}にうれしいです。」",
      arti: "(Dalam wawancara) Wartawan: \"Pelatih Tanaka, selamat atas kemenangannya. (…) perasaan Anda sendiri saat ini?\" Pelatih: \"Ya. Saya sangat senang bisa juara.\"",
      optYomi: ["お{聞|き}きいただけませんか", "お{聞|き}かせ{願|ねが}えますか", "お{話|はな}しになるでしょうか", "お{話|はな}し{申|もう}し{上|あ}げましょうか"],
      optArti: ["bisakah Anda mendengarkan?", "bolehkah kami mendengar (ceritakan)?", "apakah Anda akan berbicara?", "bolehkah saya bicarakan?"],
    },
    34: {
      yomi: "{今年|ことし}は{花粉|かふん}の{量|りょう}が{多|おお}いので、{花粉症|かふんしょう}の{人|ひと}は{辛|つら}いらしい。{目|め}が{多少|たしょう}かゆくなる（　）、ひどい{場合|ばあい}は{痛|いた}くて{目|め}が{開|あ}けられなくなることもあるそうだ。",
      arti: "Tahun ini serbuk sari banyak, jadi penderita alergi serbuk sari katanya menderita. (…) mata sedikit gatal, dalam kasus parah katanya sampai sakit dan tidak bisa membuka mata.",
      optArti: ["meski tidak sampai", "jika tidak sampai", "kalau hanya sebatas itu masih mending, tetapi", "jika cukup sebatas itu"],
    },
    35: {
      yomi: "{駅前|えきまえ}の{再|さい}{開発|かいはつ}の{意義|いぎ}は{理解|りかい}{出来|でき}ても、{長年|ながねん}そこで{商売|しょうばい}をしてきた{人達|ひとたち}にとっては{閉店|へいてん}や{立|た}ち{退|の}きは{不本意|ふほんい}で、すぐには（　）と{思|おも}われる。",
      arti: "Meski makna pembangunan ulang kawasan depan stasiun bisa dipahami, bagi orang-orang yang bertahun-tahun berdagang di sana, menutup toko dan pindah itu bertentangan dengan keinginan mereka, sehingga sepertinya (…) begitu saja.",
      optYomi: ["{受|う}け{入|い}れずにすまないのではないか", "{受|う}け{入|い}れないにかぎるではないか", "{受|う}け{入|い}れがたいのではないか", "{受|う}け{入|い}れないではないか"],
      optArti: ["bukankah tidak bisa tidak menerima?", "bukankah paling baik tidak menerima?", "bukankah sulit diterima?", "bukankah tidak menerima?"],
    },

    // ── 問題6：文の組み立て ──
    36: {
      yomi: "{雑誌|ざっし}で{紹介|しょうかい}された＿＿ ＿＿ ★ ＿＿というわけではないだろう。",
      arti: "Hanya karena diperkenalkan di majalah, bukan berarti pasti restoran yang enak.",
      optYomi: [null, null, null, "{必|かなら}ずしも"],
      optArti: ["restoran", "enak", "hanya karena", "belum tentu, tidak selalu"],
    },
    37: {
      yomi: "{彼|かれ}はとても{優秀|ゆうしゅう}で{成績|せいせき}が{学年|がくねん}の{上位|じょうい}に{入|はい}っている＿＿ ＿＿ ★ ＿＿{真面目|まじめ}で{好感|こうかん}がもてる。",
      arti: "Ia sangat berprestasi; bukan hanya nilainya sering masuk peringkat atas di angkatannya, sikapnya dalam mengikuti pelajaran pun serius dan menyenangkan.",
      optYomi: ["{授業|じゅぎょう}に{取|と}り{組|く}む", null, "{姿勢|しせい}そのものも", "ことが{多|おお}い"],
      optArti: ["dalam mengikuti pelajaran", "bukan hanya", "sikapnya itu sendiri pun", "sering"],
    },
    38: {
      yomi: "（{会社|かいしゃ}で）A「X{社|しゃ}に{行|い}くなら、{電話|でんわ}で{連絡|れんらく}してから{行|い}ったら。」B「いや、X{社|しゃ}の{担当者|たんとうしゃ}が＿＿ ＿＿ ★ ＿＿だから、しなくていいよ。」",
      arti: "(Di kantor) A: \"Kalau mau ke Perusahaan X, telepon dulu sebelum berangkat, ya.\" B: \"Tidak usah, kalau petugas Perusahaan X tidak ada, cukup titipkan dokumen ini saja.\"",
      optYomi: ["この{書類|しょるい}を", null, "{不在|ふざい}なら", "{預|あず}けてくれればいい"],
      optArti: ["dokumen ini", "hanya itu saja", "kalau tidak ada di tempat", "cukup dititipkan"],
    },
    39: {
      yomi: "{政府|せいふ}は＿＿ ＿＿ ★ ＿＿として、{手始|てはじ}めに{自動車|じどうしゃ}{税|ぜい}の{引|ひ}き{上|あ}げを{主張|しゅちょう}している。",
      arti: "Pemerintah, dengan alasan kenaikan pajak tidak bisa dihindari, menyerukan kenaikan pajak kendaraan sebagai langkah awal.",
      optYomi: [null, "{増税|ぞうぜい}は", null, "{避|さ}けよう"],
      optArti: ["hal", "kenaikan pajak", "yang tidak ada (cara)", "menghindari"],
    },
    40: {
      yomi: "「{反省|はんせい}」とは、あたかも{他人|たにん}＿＿ ＿＿ ★ ＿＿{自|みずか}らを{客観的|きゃっかんてき}に{観察|かんさつ}して{行|おこな}う{精神|せいしん}{活動|かつどう}である。",
      arti: "\"Refleksi diri\" adalah kegiatan batin yang dilakukan dengan mengamati diri sendiri secara objektif, seolah-olah memandang orang lain.",
      optYomi: [null, null, null, "{眺|なが}める"],
      optArti: ["(が, bentuk klasik)", "(objek) を", "seperti, bagaikan", "memandang"],
    },

    // ── 問題7：文章の文法 ──
    41: {
      optYomi: ["{君|きみ}から", "{他|ほか}の{人|ひと}から", "{友人|ゆうじん}に", "{誰|だれ}かに"],
      optArti: ["dari kamu", "dari orang lain", "kepada teman", "kepada seseorang"],
    },
    42: {
      optYomi: ["{即|すなわ}ち", "{一方|いっぽう}", null, null],
      optArti: ["yaitu", "di sisi lain", "atau", "meskipun begitu"],
    },
    43: {
      optYomi: ["{借|か}りているのは", "{貸|か}したままなのは", "{借|か}りなくてはいけないのは", "{貸|か}すことができるのは"],
      optArti: ["yang sedang saya pinjam", "yang saya pinjamkan dan belum kembali", "yang harus saya pinjam", "yang bisa saya pinjamkan"],
    },
    44: {
      optYomi: ["その{間|あいだ}", "それ{以前|いぜん}", "あの{時|とき}", "あれ{以来|いらい}"],
      optArti: ["selama itu", "sebelum itu", "waktu itu", "sejak itu"],
    },
    45: {
      optArti: ["akan saya coba", "sepertinya akan", "bagaimana kalau kita ...?", "apakah akan ...?"],
    },

    // ── 問題8：内容理解（短文） ──
    46: {
      yomi: "{筆者|ひっしゃ}によると、{勘|かん}や{察|さっ}しがいいとはどういうことか。",
      arti: "Menurut penulis, apa artinya punya intuisi dan daya tangkap yang baik?",
      optYomi: [
        "{目|め}や{耳|みみ}で{得|え}られる{情報|じょうほう}から、{経験|けいけん}したことのないものごとを{瞬時|しゅんじ}に{判断|はんだん}できる。",
        "{今|いま}までの{記憶|きおく}にこだわらずに、{目|め}の{前|まえ}のできごとの{本質|ほんしつ}を{素早|すばや}くとらえられる。",
        "{頭|あたま}の{中|なか}に{蓄積|ちくせき}した{情報|じょうほう}を{上手|じょうず}に{活用|かつよう}し、{目|め}の{前|まえ}のできごとを{瞬時|しゅんじ}に{判断|はんだん}できる。",
        "{目|め}や{耳|みみ}から{入|はい}る{情報|じょうほう}に{集中|しゅうちゅう}し、その{場|ば}のできごと{全体|ぜんたい}を{一瞬|いっしゅん}で{理解|りかい}できる。",
      ],
      optArti: [
        "Bisa seketika menilai hal yang belum pernah dialami dari informasi yang diperoleh mata dan telinga.",
        "Bisa cepat menangkap esensi kejadian di depan mata tanpa terpaku pada ingatan selama ini.",
        "Bisa memanfaatkan dengan baik informasi yang tersimpan di kepala untuk seketika menilai kejadian di depan mata.",
        "Bisa berkonsentrasi pada informasi dari mata dan telinga, lalu seketika memahami seluruh kejadian di tempat itu.",
      ],
    },
    47: {
      yomi: "このメールの{用件|ようけん}は{何|なに}か。",
      arti: "Apa keperluan surel ini?",
      optYomi: [
        "{出荷|しゅっか}{状況|じょうきょう}のお{知|し}らせと{受取書|うけとりしょ}{返送|へんそう}のお{願|ねが}い",
        "{不足|ふそく}{分|ぶん}{発送|はっそう}のお{知|し}らせと{商品|しょうひん}{確認|かくにん}のお{願|ねが}い",
        "{入荷|にゅうか}{予定|よてい}のお{知|し}らせと{添付|てんぷ}{書類|しょるい}{確認|かくにん}のお{願|ねが}い",
        "{在庫|ざいこ}{状況|じょうきょう}のお{知|し}らせと{納品書|のうひんしょ}{確認|かくにん}のお{願|ねが}い",
      ],
      optArti: [
        "Pemberitahuan status pengiriman dan permohonan mengembalikan tanda terima",
        "Pemberitahuan pengiriman kekurangan barang dan permohonan memeriksa barang",
        "Pemberitahuan jadwal kedatangan barang dan permohonan memeriksa lampiran",
        "Pemberitahuan kondisi stok dan permohonan memeriksa nota pengiriman",
      ],
    },
    48: {
      yomi: "{筆者|ひっしゃ}は、{専門家|せんもんか}・{研究者|けんきゅうしゃ}の{環境|かんきょう}{問題|もんだい}への{取|と}り{組|く}みをどのようにとらえているか。",
      arti: "Bagaimana penulis memandang upaya para ahli dan peneliti terhadap masalah lingkungan?",
      optYomi: [
        "{専門性|せんもんせい}を{生|い}かして{日常的|にちじょうてき}な{環境|かんきょう}{問題|もんだい}の{解決|かいけつ}を{図|はか}っている。",
        "マスコミが{注目|ちゅうもく}している{問題|もんだい}に{特化|とっか}して{研究|けんきゅう}を{進|すす}めている。",
        "{社会的|しゃかいてき}に{注目|ちゅうもく}されている{身近|みぢか}な{課題|かだい}に{積極的|せっきょくてき}に{取|と}り{組|く}んでいる。",
        "マスコミと{連携|れんけい}してあまり{注目|ちゅうもく}されない{問題|もんだい}を{取|と}り{上|あ}げている。",
      ],
      optArti: [
        "Mereka memanfaatkan keahliannya untuk menyelesaikan masalah lingkungan sehari-hari.",
        "Mereka memusatkan penelitian pada masalah yang sedang disorot media massa.",
        "Mereka aktif menangani persoalan dekat yang sedang disorot masyarakat.",
        "Mereka bekerja sama dengan media massa mengangkat masalah yang kurang disorot.",
      ],
    },
    49: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{述|の}べていることは{何|なに}か。",
      arti: "Apa yang dinyatakan penulis dalam tulisan ini?",
      optYomi: [
        "{世|よ}の{中|なか}から{自分|じぶん}を{守|まも}るには{一人|ひとり}で{生|い}きる{精神力|せいしんりょく}が{必要|ひつよう}だ。",
        "{世|よ}の{中|なか}の{矛盾|むじゅん}に{耐|た}えるための{精神力|せいしんりょく}を{維持|いじ}するのは{大変|たいへん}だ。",
        "{社会|しゃかい}にうまく{適応|てきおう}できたとしても、{人間|にんげん}には{孤独|こどく}も{必要|ひつよう}だ。",
        "{人|ひと}は{孤独|こどく}に{生|い}きられないが、{世|よ}の{中|なか}に{合|あ}わせるのも{大変|たいへん}だ。",
      ],
      optArti: [
        "Untuk melindungi diri dari dunia, diperlukan kekuatan mental untuk hidup sendiri.",
        "Mempertahankan kekuatan mental untuk menahan kontradiksi dunia itu berat.",
        "Meski bisa beradaptasi dengan baik di masyarakat, manusia juga memerlukan kesendirian.",
        "Manusia tidak bisa hidup sendirian, tetapi menyesuaikan diri dengan dunia pun berat.",
      ],
    },

    // ── 問題9：内容理解（中文） ──
    50: {
      yomi: "①{大変|たいへん}な{間違|まちが}いだとあるが、{何|なに}が{間違|まちが}いだったのか。",
      arti: "Tertulis \"① kesalahan besar\"; apa yang salah?",
      optYomi: [
        "{家庭|かてい}を{持|も}った{人|ひと}が{市民|しみん}{講座|こうざ}を{聞|き}きに{来|く}るとは{思|おも}えなかったこと",
        "{専門|せんもん}{知識|ちしき}のある{人|ひと}は{自分|じぶん}の{話|はなし}を{理解|りかい}できるだろうと{思|おも}っていたこと",
        "{社会|しゃかい}{経験|けいけん}のある{人|ひと}が{美術史|びじゅつし}に{大|おお}きな{関心|かんしん}を{示|しめ}すとは{思|おも}えなかったこと",
        "{美術|びじゅつ}の{見識|けんしき}を{持|も}った{人|ひと}が{過去|かこ}の{芸術|げいじゅつ}の{話|はなし}に{興味|きょうみ}を{持|も}つと{思|おも}っていたこと",
      ],
      optArti: [
        "Tidak menyangka orang yang sudah berkeluarga datang mendengarkan kursus umum",
        "Mengira orang berpengetahuan khusus akan bisa memahami ceritanya",
        "Tidak menyangka orang yang berpengalaman di masyarakat menunjukkan minat besar pada sejarah seni",
        "Mengira orang berwawasan seni akan tertarik pada cerita seni masa lalu",
      ],
    },
    51: {
      yomi: "②{市民|しみん}{講座|こうざ}の{熱心|ねっしん}さとあるが、{筆者|ひっしゃ}は{講座|こうざ}を{受|う}ける{人|ひと}たちが{熱心|ねっしん}なのはどうしてだと{思|おも}っていたか。",
      arti: "Tertulis \"② antusiasme kursus umum\"; menurut penulis (waktu itu), mengapa para peserta kursus begitu antusias?",
      optYomi: [
        "{学生|がくせい}{時代|じだい}に{感|かん}じた{学|まな}ぶ{喜|よろこ}びを{懐|なつ}かしんでいるから",
        "{学生|がくせい}{時代|じだい}に{知|し}らなかった{学|まな}ぶ{喜|よろこ}びを{初|はじ}めて{知|し}ったから",
        "{学生|がくせい}{時代|じだい}にあった{美術|びじゅつ}への{興味|きょうみ}が{再|ふたた}びわいてきたから",
        "{学生|がくせい}{時代|じだい}に{学|まな}んだ{知識|ちしき}をより{深|ふか}めたいと{思|おも}っているから",
      ],
      optArti: [
        "Karena merindukan kegembiraan belajar yang dirasakan semasa sekolah",
        "Karena untuk pertama kalinya mengenal kegembiraan belajar yang tidak dikenal semasa sekolah",
        "Karena minat pada seni yang ada semasa sekolah muncul kembali",
        "Karena ingin memperdalam pengetahuan yang dipelajari semasa sekolah",
      ],
    },
    52: {
      yomi: "{筆者|ひっしゃ}が{市民|しみん}{講座|こうざ}での{経験|けいけん}を{通|とお}して{最|もっと}も{強|つよ}く{感|かん}じたことは{何|なに}か。",
      arti: "Apa yang paling kuat dirasakan penulis melalui pengalamannya di kursus umum?",
      optYomi: [
        "{芸術|げいじゅつ}に{対|たい}する{憧|あこが}れは{年|とし}をとるにつれて{強|つよ}くなる",
        "{芸術|げいじゅつ}は{人生|じんせい}の{経験|けいけん}があってこそ{理解|りかい}できる",
        "{絵|え}が{理解|りかい}できるようになれば{人生|じんせい}に{深|ふか}みが{出|で}る",
        "{絵|え}は{人|ひと}の{生|い}き{方|かた}を{表|あらわ}したものである",
      ],
      optArti: [
        "Kerinduan pada seni makin kuat seiring bertambahnya usia",
        "Seni justru bisa dipahami karena adanya pengalaman hidup",
        "Jika bisa memahami lukisan, hidup menjadi lebih dalam",
        "Lukisan adalah ungkapan cara hidup seseorang",
      ],
    },
    53: {
      yomi: "この{記事|きじ}によると、{国立|こくりつ}{国会|こっかい}{図書館|としょかん}で2010{年|ねん}8{月|がつ}{上旬|じょうじゅん}に{何|なに}が{行|おこな}われたか。",
      arti: "Menurut artikel ini, apa yang dilakukan di Perpustakaan Parlemen Nasional pada awal Agustus 2010?",
      optYomi: [
        "2006{年|ねん}に{虫食|むしく}い{被害|ひがい}が{見|み}つかった{本|ほん}に{対|たい}する{一斉|いっせい}{調査|ちょうさ}が{行|おこな}われた。",
        "{同|どう}{図書館|としょかん}が{保管|ほかん}してきた{書籍|しょせき}に{対|たい}して{虫食|むしく}い{被害|ひがい}の{一斉|いっせい}{調査|ちょうさ}が{行|おこな}われた。",
        "{個人|こじん}や{団体|だんたい}が{所有|しょゆう}していた{和紙|わし}{製|せい}の{本|ほん}などの{害虫|がいちゅう}{駆除|くじょ}{作業|さぎょう}が{行|おこな}われた。",
        "1930−40{年代|ねんだい}から{同|どう}{図書館|としょかん}が{所蔵|しょぞう}していた{書籍|しょせき}の{害虫|がいちゅう}{駆除|くじょ}{作業|さぎょう}が{行|おこな}われた。",
      ],
      optArti: [
        "Dilakukan pemeriksaan serentak terhadap buku yang ditemukan rusak dimakan serangga pada 2006.",
        "Dilakukan pemeriksaan serentak kerusakan akibat serangga terhadap buku yang disimpan perpustakaan itu.",
        "Dilakukan pembasmian serangga hama pada buku berbahan washi dan lainnya yang dulu dimiliki perorangan dan organisasi.",
        "Dilakukan pembasmian serangga hama pada buku yang disimpan perpustakaan itu sejak tahun 1930–40-an.",
      ],
    },
    54: {
      yomi: "この{記事|きじ}によると、{国立|こくりつ}{国会|こっかい}{図書館|としょかん}では{本|ほん}が{傷|いた}んだ{原因|げんいん}をどのように{考|かんが}えているか。",
      arti: "Menurut artikel ini, apa yang dianggap Perpustakaan Parlemen Nasional sebagai penyebab rusaknya buku?",
      optYomi: [
        "{外|そと}から{持|も}ち{込|こ}まれる{本|ほん}などについた{虫|むし}やカビが{増殖|ぞうしょく}したから。",
        "{本|ほん}や{冊子|さっし}を{入|い}れていた{保管|ほかん}ケースの{機能|きのう}が{十分|じゅうぶん}ではなかったから。",
        "{外部|がいぶ}から{侵入|しんにゅう}した{害虫|がいちゅう}の{駆除|くじょ}のために、{化学|かがく}{薬品|やくひん}を{使用|しよう}したから。",
        "{書庫|しょこ}は{人|ひと}の{出入|でい}りが{少|すく}ない、{虫|むし}やカビの{増殖|ぞうしょく}に{適|てき}した{環境|かんきょう}だったから。",
      ],
      optArti: [
        "Karena serangga dan jamur yang menempel pada buku dari luar berkembang biak.",
        "Karena fungsi kotak penyimpan buku dan buklet tidak memadai.",
        "Karena memakai bahan kimia untuk membasmi serangga yang masuk dari luar.",
        "Karena ruang arsip jarang dimasuki orang sehingga cocok untuk berkembang biaknya serangga dan jamur.",
      ],
    },
    55: {
      yomi: "{国立|こくりつ}{国会|こっかい}{図書館|としょかん}で{行|おこな}われた{作業|さぎょう}の{方法|ほうほう}は{以前|いぜん}のものとどのように{違|ちが}うか。",
      arti: "Bagaimana metode kerja yang dilakukan di Perpustakaan Parlemen Nasional berbeda dari sebelumnya?",
      optYomi: [
        "{以前|いぜん}は{二酸化|にさんか}{炭素|たんそ}ガスを{使用|しよう}していたが、{最近|さいきん}では{低|てい}{費用|ひよう}で{人|ひと}や{環境|かんきょう}への{影響|えいきょう}が{少|すく}ない{薬品|やくひん}を{使用|しよう}するようになった。",
        "{以前|いぜん}は{問題|もんだい}が{見|み}つかった{本|ほん}だけを{処理|しょり}していたが、{最近|さいきん}では{新|あたら}しく{受|う}け{入|い}れた{本|ほん}について{処理|しょり}するようになった。",
        "{以前|いぜん}は{書庫|しょこ}に{入|い}れる{前|まえ}に{一冊|いっさつ}ずつ{処理|しょり}していたが、{最近|さいきん}では{書庫|しょこ}{内|ない}で{一斉|いっせい}に{処理|しょり}するようになった。",
        "{以前|いぜん}は{人|ひと}や{環境|かんきょう}に{有害|ゆうがい}なガスを{使用|しよう}していたが、{最近|さいきん}では{化学|かがく}{薬品|やくひん}を{使用|しよう}するようになった。",
      ],
      optArti: [
        "Dulu memakai gas karbon dioksida, tetapi belakangan memakai obat yang murah dan minim dampak bagi manusia dan lingkungan.",
        "Dulu hanya buku yang ditemukan bermasalah yang ditangani, tetapi belakangan buku yang baru diterima ditangani.",
        "Dulu ditangani satu per satu sebelum masuk ruang arsip, tetapi belakangan ditangani serentak di dalam ruang arsip.",
        "Dulu memakai gas yang berbahaya bagi manusia dan lingkungan, tetapi belakangan memakai bahan kimia.",
      ],
    },
    56: {
      yomi: "ここでの①{混沌|こんとん}とはどのような{状態|じょうたい}か。",
      arti: "Keadaan seperti apa yang dimaksud \"① kekacauan\" di sini?",
      optYomi: [
        "{書|か}きたいことがあってもそれがぼんやりしている{状態|じょうたい}",
        "{書|か}こうとしても{書|か}くことがなかなか{見|み}つからない{状態|じょうたい}",
        "{書|か}こうと{思|おも}う{内容|ないよう}が{複雑|ふくざつ}でうまく{言葉|ことば}で{表|あらわ}せない{状態|じょうたい}",
        "{書|か}きたいことがたくさんあってもうまくまとまらない{状態|じょうたい}",
      ],
      optArti: [
        "Keadaan ada yang ingin ditulis, tetapi masih samar-samar",
        "Keadaan ingin menulis, tetapi sulit menemukan apa yang akan ditulis",
        "Keadaan isi yang ingin ditulis terlalu rumit sehingga sulit diungkapkan dengan kata-kata",
        "Keadaan banyak yang ingin ditulis, tetapi tidak bisa tersusun dengan baik",
      ],
    },
    57: {
      yomi: "{書|か}き{上|あ}げた{文章|ぶんしょう}が②{予感|よかん}していた{内容|ないよう}とは{違|ちが}ったものになっているのはなぜか。",
      arti: "Mengapa tulisan yang sudah selesai menjadi berbeda dari \"② isi yang dirasakan\" sebelumnya?",
      optYomi: [
        "{他人|たにん}に{理解|りかい}されるように{文章|ぶんしょう}を{整理|せいり}して{書|か}き{直|なお}したから",
        "{心|こころ}に{浮|う}かんだ{言葉|ことば}で{表現|ひょうげん}したら{複雑|ふくざつ}な{内容|ないよう}になったから",
        "{書|か}き{進|すす}むにつれて{言葉|ことば}が{自然|しぜん}にわき{出|で}てペンを{動|うご}かしたから",
        "{書|か}き{進|すす}むにつれて{他人|たにん}にわかるような{文章|ぶんしょう}にまとまったから",
      ],
      optArti: [
        "Karena tulisannya dirapikan dan ditulis ulang agar dipahami orang lain",
        "Karena ketika diungkapkan dengan kata-kata yang terlintas di hati, isinya menjadi rumit",
        "Karena seiring menulis, kata-kata keluar dengan sendirinya dan menggerakkan pena",
        "Karena seiring menulis, tulisan tersusun menjadi sesuatu yang bisa dipahami orang lain",
      ],
    },
    58: {
      yomi: "{文章|ぶんしょう}を{書|か}くことについて{筆者|ひっしゃ}はどのように{述|の}べているか。",
      arti: "Bagaimana penulis menjelaskan tentang menulis?",
      optYomi: [
        "{自分|じぶん}の{複雑|ふくざつ}な{思考|しこう}を{他人|たにん}に{示|しめ}すためのものである",
        "{自分|じぶん}の{考|かんが}えを{言葉|ことば}にするという{喜|よろこ}びを{伴|ともな}うものである",
        "{考|かんが}えた{内容|ないよう}{以上|いじょう}のことを{表現|ひょうげん}でき、{自分|じぶん}を{発見|はっけん}するものである",
        "{書|か}きたい{内容|ないよう}がまとまり、{自分|じぶん}の{思考|しこう}も{再|さい}{確認|かくにん}できるものである",
      ],
      optArti: [
        "Sarana menunjukkan pikiran rumit diri sendiri kepada orang lain",
        "Kegiatan yang disertai kegembiraan mengubah pikiran menjadi kata-kata",
        "Kegiatan yang bisa mengungkapkan lebih dari yang dipikirkan dan menemukan diri sendiri",
        "Kegiatan yang menyusun isi yang ingin ditulis sekaligus memastikan kembali pikiran sendiri",
      ],
    },

    // ── 問題10：内容理解（長文） ──
    59: {
      yomi: "{科学的|かがくてき}にものごとを{見|み}るということを、{筆者|ひっしゃ}はどのようにとらえているか。",
      arti: "Bagaimana penulis memandang cara melihat sesuatu secara ilmiah?",
      optYomi: [
        "{現在|げんざい}の{事象|じしょう}の{一部|いちぶ}だけを{取|と}り{上|あ}げて{客観的|きゃっかんてき}な{立場|たちば}で{検証|けんしょう}する。",
        "{関心|かんしん}のある{対象|たいしょう}だけを{客観的|きゃっかんてき}な{立場|たちば}で{検証|けんしょう}し{未来|みらい}を{予測|よそく}する。",
        "{過去|かこ}の{経験|けいけん}をもとにして{客観的|きゃっかんてき}な{立場|たちば}で{現在|げんざい}の{状況|じょうきょう}を{扱|あつか}う。",
        "{人間的|にんげんてき}{知|ち}の{全体|ぜんたい}を{客観的|きゃっかんてき}な{立場|たちば}からだけとらえる。",
      ],
      optArti: [
        "Mengambil hanya sebagian fenomena saat ini dan mengujinya dari posisi objektif.",
        "Menguji hanya objek yang diminati dari posisi objektif lalu memprediksi masa depan.",
        "Menangani keadaan saat ini dari posisi objektif berdasarkan pengalaman masa lalu.",
        "Menangkap keseluruhan pengetahuan manusia hanya dari posisi objektif.",
      ],
    },
    60: {
      yomi: "①この{傾向|けいこう}とあるが、どのような{傾向|けいこう}か。",
      arti: "Tertulis \"① kecenderungan ini\"; kecenderungan seperti apa?",
      optYomi: [
        "{近代的|きんだいてき}な{研究|けんきゅう}を{行|おこな}う{部門|ぶもん}がさらに{増|ふ}えてきた。",
        "{特殊|とくしゅ}な{研究|けんきゅう}{対象|たいしょう}が{排除|はいじょ}されるようになってきた。",
        "{研究|けんきゅう}{対象|たいしょう}をより{実践的|じっせんてき}にとらえるようになってきた。",
        "{専門|せんもん}{分野|ぶんや}が{以前|いぜん}より{細|こま}かく{分|わ}かれるようになってきた。",
      ],
      optArti: [
        "Bagian yang melakukan penelitian modern semakin bertambah.",
        "Objek penelitian yang khusus mulai disingkirkan.",
        "Objek penelitian mulai dipandang secara lebih praktis.",
        "Bidang keahlian terbagi lebih rinci dibanding sebelumnya.",
      ],
    },
    61: {
      yomi: "②{科学|かがく}は、いかに{生|い}きるべきかという{後者|こうしゃ}の{問題|もんだい}を、{本質的|ほんしつてき}に{扱|あつか}うことができないとあるがなぜか。",
      arti: "Tertulis \"② sains pada dasarnya tidak bisa menangani masalah yang terakhir, yaitu bagaimana seharusnya hidup\"; mengapa?",
      optYomi: [
        "{客観的|きゃっかんてき}な{事実|じじつ}{確認|かくにん}を{重視|じゅうし}するものだから。",
        "{現在|げんざい}の{行為|こうい}だけを{主体的|しゅたいてき}に{扱|あつか}うものだから。",
        "{人間|にんげん}{全体|ぜんたい}を{解明|かいめい}することができないから。",
        "{人間|にんげん}の{考|かんが}えや{行為|こうい}の{多|おお}くをまだ{実証|じっしょう}できないから。",
      ],
      optArti: [
        "Karena sains mengutamakan pemastian fakta secara objektif.",
        "Karena sains hanya menangani tindakan saat ini secara subjektif.",
        "Karena sains tidak bisa mengungkap manusia secara utuh.",
        "Karena sains belum bisa membuktikan banyak pikiran dan tindakan manusia.",
      ],
    },
    62: {
      yomi: "{哲学的|てつがくてき}{知|ち}の{重要性|じゅうようせい}はどこにあるか。",
      arti: "Di mana letak pentingnya pengetahuan filosofis?",
      optYomi: [
        "{人間|にんげん}の{生|い}き{方|かた}の{根本|こんぽん}を{据|す}えること。",
        "{主体的|しゅたいてき}な{考|かんが}え{方|かた}や{方法|ほうほう}を{示|しめ}すこと。",
        "{科学的|かがくてき}な{世界|せかい}を{視野|しや}に{入|い}れられること。",
        "{世界|せかい}のあり{方|かた}を{客観的|きゃっかんてき}にとらえられること。",
      ],
      optArti: [
        "Meletakkan dasar cara hidup manusia.",
        "Menunjukkan cara berpikir dan metode yang mandiri.",
        "Bisa memasukkan dunia ilmiah ke dalam cakupan pandangan.",
        "Bisa menangkap keadaan dunia secara objektif.",
      ],
    },

    // ── 問題11：統合理解 ──
    63: {
      yomi: "AとBはアートを{買|か}うことについて、どのような{考|かんが}えを{持|も}っているか。",
      arti: "Bagaimana pendapat A dan B tentang membeli karya seni?",
      optYomi: [
        "Aは{一度|いちど}{買|か}ってみるとそれがアート{収集|しゅうしゅう}につながると{考|かんが}え、Bは{心|こころ}を{動|うご}かされたらすぐに{買|か}ったほうがよいと{考|かんが}えている。",
        "Aは{最初|さいしょ}に{買|か}った{作品|さくひん}がその{後|ご}のアート{収集|しゅうしゅう}に{影響|えいきょう}すると{考|かんが}え、Bはアートを{理解|りかい}するには{買|か}うことが{欠|か}かせないと{考|かんが}えている。",
        "Aは{市場|しじょう}{価値|かち}の{高|たか}いものを{買|か}うことが{重要|じゅうよう}だと{考|かんが}え、Bは{作品|さくひん}が{好|す}きだと{思|おも}う{理由|りゆう}をよく{考|かんが}えてから{買|か}うことが{大切|たいせつ}だと{考|かんが}えている。",
        "Aは{買|か}うほどではないと{思|おも}った{作品|さくひん}でも{買|か}うことが{重要|じゅうよう}だと{考|かんが}え、Bは{作品|さくひん}を{選|えら}ぶときの{基準|きじゅん}を{高|たか}く{設定|せってい}することが{大切|たいせつ}だと{考|かんが}えている。",
      ],
      optArti: [
        "A berpendapat sekali mencoba membeli akan berlanjut menjadi koleksi seni; B berpendapat sebaiknya langsung membeli begitu hati tergerak.",
        "A berpendapat karya pertama yang dibeli memengaruhi koleksi seni selanjutnya; B berpendapat membeli itu mutlak perlu untuk memahami seni.",
        "A berpendapat yang penting membeli karya bernilai pasar tinggi; B berpendapat yang penting memikirkan baik-baik alasan menyukai karya sebelum membeli.",
        "A berpendapat yang penting tetap membeli meski karya itu dirasa tidak sampai layak dibeli; B berpendapat yang penting menetapkan standar tinggi saat memilih karya.",
      ],
    },
    64: {
      yomi: "アートの{価値|かち}について、AとBが{共通|きょうつう}して{述|の}べていることは{何|なに}か。",
      arti: "Tentang nilai karya seni, apa yang sama-sama dinyatakan A dan B?",
      optYomi: [
        "アートの{価値|かち}と、{市場|しじょう}{価値|かち}は{連動|れんどう}している。",
        "アートの{価値|かち}は、{買|か}い{続|つづ}けることで{分|わ}かるものである。",
        "アートの{価値|かち}とは、{買|か}い{手|て}の{価値観|かちかん}で{決|き}まるものである。",
        "アートの{価値|かち}は、{多|おお}くの{人|ひと}に{共有|きょうゆう}される{価値観|かちかん}によって{決|き}められる。",
      ],
      optArti: [
        "Nilai karya seni berkaitan erat dengan nilai pasarnya.",
        "Nilai karya seni baru dipahami dengan terus membeli.",
        "Nilai karya seni ditentukan oleh nilai-nilai pembelinya sendiri.",
        "Nilai karya seni ditentukan oleh nilai-nilai yang dimiliki bersama oleh banyak orang.",
      ],
    },

    // ── 問題12：主張理解（長文） ──
    65: {
      yomi: "ツバメが{人家|じんか}の{軒先|のきさき}に{巣|す}をつくる{理由|りゆう}として{適当|てきとう}なのはどれか。",
      arti: "Manakah alasan yang tepat mengapa burung layang-layang membuat sarang di ujung atap rumah penduduk?",
      optYomi: [
        "{人家|じんか}の{軒先|のきさき}では、ツバメが{子育|こそだ}てに{必要|ひつよう}な{餌|えさ}を{得|え}ることができるから",
        "{人家|じんか}の{軒先|のきさき}は、{店|みせ}の{軒先|のきさき}ほど{人|ひと}の{出入|でい}りがひんぱんではないから",
        "ツバメの{天敵|てんてき}であるスズメが、{常|つね}に{人間|にんげん}を{恐|おそ}れて{近寄|ちかよ}らないから",
        "ツバメの{嫌|きら}うスズメが、{人|ひと}のいるところではひなを{育|そだ}てないから",
      ],
      optArti: [
        "Karena di ujung atap rumah, burung layang-layang bisa mendapat makanan yang diperlukan untuk membesarkan anak",
        "Karena ujung atap rumah tidak seramai ujung atap toko dalam hal keluar-masuk orang",
        "Karena burung gereja, musuh alami burung layang-layang, selalu takut manusia dan tidak mendekat",
        "Karena burung gereja yang tidak disukai burung layang-layang tidak membesarkan anaknya di tempat yang ada manusianya",
      ],
    },
    66: {
      yomi: "{筆者|ひっしゃ}によると{大|だい}{都市|とし}でツバメが{少|すく}なくなったのはなぜか。",
      arti: "Menurut penulis, mengapa burung layang-layang berkurang di kota besar?",
      optYomi: [
        "{森|もり}や{林|はやし}が{失|うしな}われたから",
        "{巣|す}をつくりにくくなったから",
        "カラスやスズメが{増|ふ}えたから",
        "{食物|しょくもつ}を{得|え}るのが{難|むずか}しくなったから",
      ],
      optArti: [
        "Karena hutan dan rimbunan pohon hilang",
        "Karena sulit membuat sarang",
        "Karena gagak dan burung gereja bertambah",
        "Karena sulit mendapatkan makanan",
      ],
    },
    67: {
      yomi: "{多|おお}くの{動物|どうぶつ}たちはわれわれが{思|おも}っていたよりももっとしたたかであるとあるが、どのような{点|てん}でしたたかだと{筆者|ひっしゃ}は{考|かんが}えているか。",
      arti: "Tertulis \"banyak hewan jauh lebih tangguh daripada yang kita kira\"; dalam hal apa penulis menganggap mereka tangguh?",
      optYomi: [
        "{都会|とかい}であっても{森|もり}や{林|はやし}があれば{巣|す}を{作|つく}る",
        "{生|い}きるための{条件|じょうけん}が{整|ととの}えば{都会|とかい}で{生活|せいかつ}する",
        "{都会|とかい}であっても{餌|えさ}がなければ{命|いのち}がけで{探|さが}す",
        "{人間|にんげん}を{避|さ}けることができれば、{都会|とかい}に{棲|す}みつく",
      ],
      optArti: [
        "Meski di kota, jika ada hutan dan pepohonan mereka membuat sarang",
        "Jika syarat untuk hidup terpenuhi, mereka hidup di kota",
        "Meski di kota, jika tidak ada makanan mereka mencarinya dengan mempertaruhkan nyawa",
        "Jika bisa menghindari manusia, mereka menetap di kota",
      ],
    },
    68: {
      yomi: "この{文章|ぶんしょう}で{筆者|ひっしゃ}が{言|い}いたいことは{何|なに}か。",
      arti: "Apa yang ingin disampaikan penulis dalam tulisan ini?",
      optYomi: [
        "{都会|とかい}を{去|さ}った{動物|どうぶつ}たちが{再|ふたた}び{人間|にんげん}と{共生|きょうせい}できるような{対策|たいさく}を{立|た}てる{必要|ひつよう}がある",
        "{都会|とかい}での{生活|せいかつ}は{動物|どうぶつ}にとって{実|じつ}は{利益|りえき}が{多|おお}いということを{認識|にんしき}する{必要|ひつよう}がある",
        "{自然|しぜん}との{共生|きょうせい}を{考|かんが}える{際|さい}には、{動物|どうぶつ}の{生存|せいぞん}に{必要|ひつよう}な{条件|じょうけん}を{尊重|そんちょう}すべきである",
        "{動物|どうぶつ}たちの{生活|せいかつ}を{守|まも}るために{環境|かんきょう}{汚染|おせん}を{防止|ぼうし}し、{自然|しぜん}を{保護|ほご}すべきである",
      ],
      optArti: [
        "Perlu disusun langkah agar hewan yang meninggalkan kota bisa kembali hidup berdampingan dengan manusia",
        "Perlu disadari bahwa hidup di kota sebenarnya banyak menguntungkan bagi hewan",
        "Saat memikirkan hidup berdampingan dengan alam, syarat yang diperlukan untuk kelangsungan hidup hewan harus dihormati",
        "Untuk melindungi kehidupan hewan, pencemaran lingkungan harus dicegah dan alam harus dilindungi",
      ],
    },

    // ── 問題13：情報検索 ──
    69: {
      yomi: "{次|つぎ}の{四人|よにん}のうち、{現|げん}{段階|だんかい}でアイデア{部門|ぶもん}の{特定|とくてい}{課題|かだい}の{応募|おうぼ}{条件|じょうけん}を{満|み}たしているのは{誰|だれ}か。（{下|した}の【{応募|おうぼ}{希望者|きぼうしゃ}】の{表|ひょう}を{見|み}て{答|こた}えなさい）",
      arti: "Dari empat orang berikut, siapa yang saat ini memenuhi syarat mendaftar untuk tema khusus kategori ide? (Jawab dengan melihat tabel 【Calon pendaftar】 di bawah)",
      optYomi: ["{山田|やまだ}さん", "{鈴木|すずき}さん", "チェンさん", "{川村|かわむら}さん"],
      optArti: ["Yamada-san", "Suzuki-san", "Chen-san", "Kawamura-san"],
    },
    70: {
      yomi: "{前川|まえかわ}さんは、{小|ちい}さい{子供|こども}を{乗|の}せたまま{階段|かいだん}をスムーズに{上|のぼ}り{下|お}りできる{仕組|しく}みを{持|も}ったベビーカーを{試作|しさく}した。このベビーカーの{実物|じつぶつ}を{見|み}て{審査|しんさ}してもらいたいと{思|おも}っているが、{前川|まえかわ}さんはどの{部門|ぶもん}に{応募|おうぼ}するのが{適切|てきせつ}か。また、{応募|おうぼ}の{段階|だんかい}で{必|かなら}ず{提出|ていしゅつ}しなければならないものは{何|なに}か。",
      arti: "Maekawa-san membuat purwarupa kereta bayi dengan mekanisme yang bisa naik-turun tangga dengan mulus sambil membawa anak kecil. Ia ingin kereta bayi itu dinilai dengan melihat bendanya langsung. Kategori mana yang tepat untuk ia ikuti? Dan apa yang wajib diserahkan pada tahap pendaftaran?",
      optYomi: [
        "アイデア{部門|ぶもん}の{自由|じゆう}{課題|かだい}に{応募|おうぼ}し、{作品|さくひん}のイラストを{提出|ていしゅつ}する。",
        "アイデア{部門|ぶもん}の{自由|じゆう}{課題|かだい}に{応募|おうぼ}し、{模型|もけい}とイラストを{提出|ていしゅつ}する。",
        "{開発|かいはつ}{部門|ぶもん}に{応募|おうぼ}し、{実物|じつぶつ}の{動|うご}きなどがわかるよう{動画|どうが}を{提出|ていしゅつ}する。",
        "{開発|かいはつ}{部門|ぶもん}に{応募|おうぼ}し、{実物|じつぶつ}の{動|うご}きなどを{記録|きろく}した{動画|どうが}と{実物|じつぶつ}を{提出|ていしゅつ}する。",
      ],
      optArti: [
        "Mendaftar tema bebas kategori ide, dan menyerahkan ilustrasi karya.",
        "Mendaftar tema bebas kategori ide, dan menyerahkan model serta ilustrasi.",
        "Mendaftar kategori pengembangan, dan menyerahkan video yang memperlihatkan gerak benda aslinya.",
        "Mendaftar kategori pengembangan, dan menyerahkan video rekaman gerak benda asli beserta benda aslinya.",
      ],
    },
  },

  bacaan: {
    // ── 問題7：有栖川氏からの手紙 ──
    "7": {
      yomi: `{以下|いか}は、{作家|さっか}の{有栖川|ありすがわ}{氏|し}が{友人|ゆうじん}の{野間|のま}{氏|し}にあてて{書|か}いた{手紙|てがみ}である。

{前略|ぜんりゃく}　ご{無沙汰|ぶさた}していますが、お{変|か}わりありませんか。
こちらは{元気|げんき}でやっています。
{先|さき}にハガキでお{知|し}らせしたとおり、{三月|さんがつ}に{引|ひ}っ{越|こ}しをしました。
{大阪|おおさか}にくることがあればぜひ{立|た}ち{寄|よ}ってください。{積|つ}もる{話|はなし}もあるので、{泊|と}まりがけできてもらえるなら、なお{歓迎|かんげい}します。
さて、お{送|おく}りしたアモン・デュールⅡの『ウルフ・シティ』は、{大学|だいがく}{時代|じだい}に[41]{借|か}りたものです。{長|なが}い{間|あいだ}、どうもありがとう。{二十年|にじゅうねん}{以上|いじょう}も{借|か}りてしまって、{申|もう}し{訳|わけ}ない。「なくしたと{思|おも}ってCDで{買|か}い{直|なお}した」ということのありませんように。
{引|ひ}っ{越|こ}し{後|ご}に{整理|せいり}をしていたら、{人様|ひとさま}（{注|ちゅう}1）から{借|か}りたままの{本|ほん}やレコードがぽろぽろと{出|で}てきて{猛省|もうせい}（{注|ちゅう}2）し、{順|じゅん}に{持|も}ち{主|ぬし}へ{返還|へんかん}していっているのです。
[42]「あるはずなのに{見当|みあ}たらない{本|ほん}」が{少|すく}なからずあって、それを{誰|だれ}に{貸|か}したかを{思|おも}い{出|だ}すのに{一苦労|ひとくろう}しています。{君|きみ}のように、{借|か}りた{本|ほん}をきちんと{返|かえ}す{人|ひと}は{珍|めずら}しいわけです。
{君|きみ}に[43]、たった{一|ひと}つ。{五年|ごねん}ほど{前|まえ}、{神戸|こうべ}で{会|あ}った{時|とき}、「ホテルに{財布|さいふ}を{忘|わす}れてきた」と{言|い}うから{貸|か}した{一万円|いちまんえん}だけか。[44]{会|あ}っていないんですね。{年|とし}をとると、{時間|じかん}がたつのが{早|はや}くて{驚|おどろ}きます。
ともあれ、{遠|とお}からぬ{来訪|らいほう}（{注|ちゅう}3）を{待|ま}っています。{神戸|こうべ}で{盛|も}り{上|あ}がった{話|はなし}の{続|つづ}きでも[45]。
では、また{連絡|れんらく}ください。{奥|おく}さんによろしく。
{草々|そうそう}
{二〇〇四年|にせんよねん}{五月|ごがつ}{十六日|じゅうろくにち}
{有栖川|ありすがわ}{有栖|ありす}
{野間|のま}{亜門|あもん}{様|さま}

（{注|ちゅう}1）{人様|ひとさま}（ひとさま）：ほかの{人|ひと}
（{注|ちゅう}2）{猛省|もうせい}する（もうせい）：{強|つよ}く{反省|はんせい}する
（{注|ちゅう}3）{来訪|らいほう}（らいほう）：{訪|たず}ねてくること`,
      arti: `Berikut ini adalah surat yang ditulis pengarang Arisugawa kepada temannya, Noma.

Langsung saja. Lama tidak berkabar, apakah kamu baik-baik saja?
Saya di sini sehat-sehat saja.
Seperti yang sudah kukabarkan lewat kartu pos, aku pindah rumah bulan Maret.
Kalau kamu datang ke Osaka, mampirlah. Banyak cerita yang menumpuk, jadi kalau kamu bisa datang sambil menginap, lebih disambut lagi.
Nah, "Wolf City" karya Amon Düül II yang kukirim itu adalah barang yang kupinjam [41] semasa kuliah. Terima kasih banyak sudah lama sekali meminjamkannya. Maaf, aku meminjamnya lebih dari dua puluh tahun. Semoga kamu tidak sampai "mengira hilang lalu membeli ulang versi CD-nya".
Waktu beres-beres setelah pindahan, buku dan piringan hitam pinjaman dari orang lain (catatan 1) yang belum kukembalikan bermunculan satu demi satu, aku pun menyesal berat (catatan 2), dan sekarang sedang mengembalikannya satu per satu kepada pemiliknya.
[42], tidak sedikit pula "buku yang seharusnya ada tetapi tidak ketemu", dan aku kesulitan mengingat kepada siapa aku meminjamkannya. Orang sepertimu yang mengembalikan buku pinjaman dengan rapi memang langka.
[43] kamu, cuma satu. Uang sepuluh ribu yen yang kupinjamkan waktu kita bertemu di Kobe sekitar lima tahun lalu karena kamu bilang "dompetku ketinggalan di hotel". [44] kita belum bertemu, ya. Kalau sudah tua, aku kaget betapa cepatnya waktu berlalu.
Bagaimanapun, aku menunggu kunjunganmu (catatan 3) dalam waktu dekat. [45] melanjutkan obrolan seru kita di Kobe.
Kalau begitu, kabari lagi ya. Salam untuk istrimu.
Salam,
16 Mei 2004
Arisugawa Alice
Kepada Noma Amon

(Catatan 1) 人様: orang lain
(Catatan 2) 猛省する: menyesal/introspeksi dengan sangat
(Catatan 3) 来訪: datang berkunjung`,
    },

    // ── 問題8 ──
    "8-1": {
      yomi: `{人間|にんげん}は、{目|め}の{前|まえ}の{物|もの}やできごとを、{自分|じぶん}の{目|め}だけで{見|み}ているとか、{感|かん}じているというように{思|おも}うかもしれないが、{実際|じっさい}には、{脳|のう}の{中|なか}では、{同時|どうじ}に{記憶|きおく}の{中|なか}から{同|おな}じような{情報|じょうほう}を{引|ひ}っ{張|ぱ}り{出|だ}して、{素早|すばや}く{比較|ひかく}、{検討|けんとう}しているのだ。
つまり、{勘|かん}がいいとか、{察|さっ}しがいいというのは、{目|め}で{見|み}たこと、{聞|き}いたことだけでものごとを{判断|はんだん}しているわけではなく、{想像力|そうぞうりょく}が{発達|はったつ}しているということになる。{脳|のう}の{記憶|きおく}をいかにうまく{使|つか}いこなしているかという{差|さ}が{表|あらわ}れてくるのだ。
（{米山|よねやま}{公啓|きみひろ}『「{頭|あたま}がいい」とはどういうことか』による）`,
      arti: `Manusia mungkin mengira bahwa ia melihat atau merasakan benda dan kejadian di depan matanya hanya dengan matanya sendiri, tetapi sebenarnya di dalam otak, pada saat yang sama, informasi serupa ditarik keluar dari ingatan, lalu dibandingkan dan ditimbang dengan cepat.
Artinya, punya intuisi bagus atau daya tangkap bagus bukan berarti menilai sesuatu hanya dari apa yang dilihat dan didengar, melainkan berarti daya imajinasinya berkembang. Yang tampak adalah perbedaan seberapa pandai seseorang memanfaatkan ingatan di otaknya.
(Dari buku karya Yoneyama Kimihiro tentang apa itu "pintar")`,
    },
    "8-2": {
      yomi: `{以下|いか}は、ある{会社|かいしゃ}が{取引先|とりひきさき}に{出|だ}したメールである。

（{株|かぶ}）{中田|なかた}{清掃|せいそう}{社|しゃ}
{総務課|そうむか}　{田山|たやま}　{広|ひろし}　{様|さま}
{毎度|まいど}、お{引立|ひきた}ていただきありがとうございます。
さて、11{月|がつ}5{日|か}にご{注文|ちゅうもん}いただきました{品|しな}を、{本日|ほんじつ}、{添付|てんぷ}の{納品|のうひん}{明細書|めいさいしょ}{通|どお}り{発送|はっそう}いたしました。
なお、「{床用|ゆかよう}{洗剤|せんざい}スリー」につきましては、{誠|まこと}に{申|もう}し{訳|わけ}ございませんが、{在庫|ざいこ}{不足|ぶそく}のため、50{箱|はこ}のみの{発送|はっそう}とさせていただきました。{未|み}{発送|はっそう}{分|ぶん}は{入荷|にゅうか}{次第|しだい}（2{週間|しゅうかん}{後|ご}の{予定|よてい}）{発送|はっそう}いたします。{本日|ほんじつ}{発送|はっそう}の{商品|しょうひん}が{到着|とうちゃく}しましたら、{大変|たいへん}お{手数|てすう}をおかけしますが、{一緒|いっしょ}にお{送|おく}りした{品物|しなもの}{受取書|うけとりしょ}に{押印|おういん}のうえ、{返信|へんしん}{用|よう}{封筒|ふうとう}にてお{送|おく}りくださるようお{願|ねが}い{申|もう}し{上|あ}げます。
{添付|てんぷ}{書類|しょるい}：{納品|のうひん}{明細書|めいさいしょ}（{写|うつ}し）1{通|つう}
（{株|かぶ}）キイト
{営業|えいぎょう}{課長|かちょう}　{佐川|さがわ}　{明人|あきと}`,
      arti: `Berikut ini adalah surel yang dikirim sebuah perusahaan kepada mitra bisnisnya.

PT Nakata Seisō
Kepada Yth. Bapak Tayama Hiroshi, Bagian Urusan Umum
Terima kasih atas dukungan Anda selama ini.
Barang yang Anda pesan pada 5 November telah kami kirimkan hari ini sesuai rincian pengiriman terlampir.
Adapun untuk "Deterjen Lantai Three", dengan sangat menyesal, karena stok tidak cukup, kami hanya mengirim 50 kotak. Sisa yang belum terkirim akan kami kirim begitu barang masuk (direncanakan 2 minggu lagi). Setelah barang yang dikirim hari ini tiba, mohon maaf merepotkan, kami mohon Anda membubuhkan cap pada tanda terima barang yang kami kirim bersamaan, lalu mengirimkannya kembali dengan amplop balasan.
Lampiran: rincian pengiriman (salinan) 1 lembar
PT Kiito
Sagawa Akito, Kepala Bagian Penjualan`,
    },
    "8-3": {
      yomi: `{専門家|せんもんか}・{研究者|けんきゅうしゃ}やマスコミには、ごみ{問題|もんだい}や{斜面林|しゃめんりん}や{里山|さとやま}（{注|ちゅう}）などの{破壊|はかい}といった{身近|みぢか}な{環境|かんきょう}{問題|もんだい}を{注視|ちゅうし}せず、いくつかの{代表的|だいひょうてき}な{環境|かんきょう}{問題|もんだい}ばかりを{取|と}り{扱|あつか}う{傾向|けいこう}が{強|つよ}い。

マスコミなどが{注目|ちゅうもく}する{環境|かんきょう}{問題|もんだい}に{取|と}り{込|こ}んでいることが、{専門家|せんもんか}の{専門性|せんもんせい}を{誇示|こじ}し、{専門家|せんもんか}としてのステータスを{維持|いじ}させることにつながっているかのように{見|み}える。

{環境|かんきょう}{問題|もんだい}が{話題性|わだいせい}の{高|たか}いものに{特化|とっか}されることは、{日常的|にちじょうてき}な{環境|かんきょう}{問題|もんだい}が{大部分|だいぶぶん}の{専門家|せんもんか}・{研究者|けんきゅうしゃ}から{無視|むし}され、{放置|ほうち}されることになる。
（御代川貴久夫・{関|せき}啓子『{環境|かんきょう}{教育|きょういく}を{学|まな}ぶ{人|ひと}のために』による）
（{注|ちゅう}）{里山|さとやま}（さとやま）：{人家|じんか}の{近|ちか}くにあって、{人|ひと}の{生活|せいかつ}と{関係|かんけい}が{深|ふか}い{森林|しんりん}や{山|やま}`,
      arti: `Para ahli, peneliti, dan media massa cenderung kuat untuk tidak memperhatikan masalah lingkungan di sekitar kita seperti masalah sampah atau rusaknya hutan lereng dan satoyama (catatan), dan hanya mengangkat beberapa masalah lingkungan yang representatif.

Tampaknya, menangani masalah lingkungan yang disorot media massa seolah-olah berujung pada memamerkan keahlian sang ahli dan mempertahankan statusnya sebagai ahli.

Ketika masalah lingkungan dikhususkan pada hal-hal yang ramai dibicarakan, masalah lingkungan sehari-hari akan diabaikan dan dibiarkan oleh sebagian besar ahli dan peneliti.
(Dari buku untuk orang yang mempelajari pendidikan lingkungan)
(Catatan) 里山: hutan atau bukit di dekat permukiman yang erat kaitannya dengan kehidupan manusia`,
    },
    "8-4": {
      yomi: `{人|ひと}は{一人|ひとり}では{生|い}きられない。

よほどの{変人|へんじん}か{仙人|せんにん}（{注|ちゅう}1）のような{人|ひと}でなければ、{人|ひと}は{世|よ}の{中|なか}と{無関係|むかんけい}には{生|い}きられない。

しかも、その{世|よ}の{中|なか}というものは{固定|こてい}されたものではなく、ものすごい{速|はや}さで{形|かたち}を{変|か}えていて、それにいちいち{適応|てきおう}していくのには、{体力|たいりょく}も{技術|ぎじゅつ}も{精神力|せいしんりょく}も{要|い}る。

そんな{化|ば}け{物|もの}（{注|ちゅう}2）のような{世|よ}の{中|なか}から{自分|じぶん}を{守|まも}るために、{一人|ひとり}きりで{孤高|ここう}の{城|しろ}に{籠城|ろうじょう}すれば（{注|ちゅう}3）、やがて{孤独|こどく}に{自滅|じめつ}する。その{矛盾|むじゅん}をどうしていったらいいのだろう。
（{山本|やまもと}{文緒|ふみお}『{結婚|けっこん}{願望|がんぼう}』による）
（{注|ちゅう}1）{仙人|せんにん}：{世|よ}の{中|なか}と{離|はな}れて{生|い}きる{神|かみ}のような{人|ひと}
（{注|ちゅう}2）{化|ば}け{物|もの}：{怪物|かいぶつ}
（{注|ちゅう}3）{孤高|ここう}の{城|しろ}に{籠城|ろうじょう}する：ここでは、{外部|がいぶ}との{接触|せっしょく}を{一切|いっさい}{持|も}たずに{自分|じぶん}の{殻|から}に{閉|と}じこもる`,
      arti: `Manusia tidak bisa hidup sendirian.

Kecuali orang yang sangat aneh atau seperti pertapa (catatan 1), manusia tidak bisa hidup tanpa hubungan dengan dunia.

Terlebih lagi, dunia itu tidak tetap, melainkan berubah bentuk dengan kecepatan luar biasa, dan untuk menyesuaikan diri dengannya satu per satu diperlukan stamina, keterampilan, dan kekuatan mental.

Jika untuk melindungi diri dari dunia yang bagaikan monster (catatan 2) itu kita mengurung diri sendirian di benteng yang menyendiri (catatan 3), lama-lama kita akan hancur sendiri karena kesepian. Bagaimana sebaiknya menghadapi kontradiksi itu?
(Dari buku "Kekkon Ganbō" karya Yamamoto Fumio)
(Catatan 1) 仙人: orang seperti dewa yang hidup terpisah dari dunia
(Catatan 2) 化け物: monster
(Catatan 3) 孤高の城に籠城する: di sini, mengurung diri dalam cangkang sendiri tanpa kontak sama sekali dengan dunia luar`,
    },

    // ── 問題9 ──
    "9-1": {
      yomi: `{以下|いか}は、{市民|しみん}{向|む}け{講座|こうざ}の{講師|こうし}を{務|つと}めた{大学|だいがく}{教員|きょういん}の{話|はなし}である。

{正直|しょうじき}なことをいうと、{成人|せいじん}した{人々|ひとびと}の{集|あつ}まりであるNHK{文化|ぶんか}センターで、{美術史|びじゅつし}の{話|はなし}をするのは、{最初|さいしょ}はかなり{疑|うたが}わしい{気分|きぶん}だった。というのは、{多|おお}かれ{少|すく}なかれ{社会|しゃかい}に{出|で}たり、{家庭|かてい}を{持|も}ったりした{経験|けいけん}があって、それなりの{見識|けんしき}なり{専門|せんもん}なりを{持|も}っている{人々|ひとびと}が、いまさら「{役|やく}にも{立|た}たぬ」{過去|かこ}の{芸術|げいじゅつ}に、それほど{深|ふか}い{興味|きょうみ}を{持|も}つだろうなどとは{思|おも}えなかったからである。また、{仮|かり}に{持|も}ったとしても、それは、{自分|じぶん}の{好|この}みに{合|あ}った{美術品|びじゅつひん}を、{楽|たの}しんで{眺|なが}める、といった{種類|しゅるい}のものかと{思|おも}っていた。ところが、それが①{大変|たいへん}な{間違|まちが}いだということがわかった。

ひたひたと{押|お}し{寄|よ}せてくる、にせものでない、{深|ふか}い{興味|きょうみ}が{近頃|ちかごろ}の{大学生|だいがくせい}にこそ{見|み}つけることのできないものであった。はたちになるやならずの{若者|わかもの}たちは、{多|おお}くの{場合|ばあい}、{単位|たんい}をとるためにそこにいるのであって、どこまで{心|こころ}から{興味|きょうみ}を{抱|いだ}いてそこにいるのか{全|まった}く{疑|うたが}わしい。（{中略|ちゅうりゃく}）②{市民|しみん}{講座|こうざ}の{熱心|ねっしん}さは、かつて、{喜|よろこ}びもなく{学生|がくせい}{時代|じだい}を{過|す}ごしてしまった{人々|ひとびと}の、いわばノスタルジー（{注|ちゅう}）の{場|ば}なのであろうか。{失|うしな}われて{初|はじ}めて、その{喜|よろこ}びを{知|し}ったというわけなのか。{私|わたし}はそう{思|おも}うようになった。

ところが、それもまた、{間違|まちが}いだということがわかった。1{年|ねん}と{数|すう}カ{月|げつ}{講座|こうざ}を{続|つづ}けた{今|いま}は、あることがわかったのである。つまり、「{芸術|げいじゅつ}は、{子供|こども}にはわからない」ということである。{芸術|げいじゅつ}とは、{人生|じんせい}の{経験|けいけん}であり、{憧|あこが}れであり、また{失望|しつぼう}と{悲哀|ひあい}である。{一片|いっぺん}の{絵|え}にも、{人生|じんせい}が{詰|つ}まっている。{人生|じんせい}を{生|い}きていないものに、{絵|え}がわかるわけはない。もちろん、{若者|わかもの}でも、ある{程度|ていど}はわかる。しかし、{本当|ほんとう}に{深|ふか}くわかるのは、すでに{生|い}きた{人々|ひとびと}である。
（{若桑|わかくわ}みどり『レット・イット・ビー』による）
（{注|ちゅう}）ノスタルジー：{過|す}ぎた{日々|ひび}を{懐|なつ}かしがること`,
      arti: `Berikut ini adalah cerita seorang dosen universitas yang menjadi pengajar kursus untuk masyarakat umum.

Terus terang, awalnya saya cukup ragu memberikan ceramah sejarah seni di NHK Culture Center, perkumpulan orang-orang dewasa. Sebab, saya tidak bisa membayangkan orang-orang yang sedikit banyak sudah berpengalaman bekerja di masyarakat atau berkeluarga, dan memiliki wawasan atau keahlian masing-masing, sekarang akan begitu tertarik pada seni masa lalu yang "tidak berguna". Kalaupun tertarik, saya kira itu hanya sebatas menikmati karya seni yang sesuai seleranya. Namun, ternyata itu ① kesalahan besar.

Minat yang dalam dan tulus, yang datang bergelombang perlahan, justru tidak bisa ditemukan pada mahasiswa zaman sekarang. Anak muda yang baru atau hampir berusia dua puluh, dalam banyak kasus berada di sana demi mendapatkan kredit kuliah, dan sangat diragukan sejauh mana mereka berada di sana dengan minat yang tulus. (dihilangkan) Apakah ② antusiasme kursus umum ini adalah semacam tempat nostalgia (catatan) bagi orang-orang yang dulu melewati masa sekolahnya tanpa kegembiraan? Apakah setelah kehilangannya, barulah mereka mengenal kegembiraan itu? Saya mulai berpikir begitu.

Namun, ternyata itu pun salah. Kini, setelah menjalankan kursus selama satu tahun beberapa bulan, saya memahami satu hal. Yaitu, "seni tidak bisa dipahami anak-anak". Seni adalah pengalaman hidup, kerinduan, juga kekecewaan dan kesedihan. Dalam sepotong lukisan pun, terkandung kehidupan. Orang yang belum menjalani hidup tidak mungkin memahami lukisan. Tentu saja, anak muda pun bisa memahami sampai batas tertentu. Tetapi yang benar-benar memahaminya dengan dalam adalah orang-orang yang sudah menjalani hidup.
(Dari buku "Let It Be" karya Wakakuwa Midori)
(Catatan) ノスタルジー: merindukan hari-hari yang telah lalu`,
    },
    "9-2": {
      yomi: `{以下|いか}は、{国立|こくりつ}{国会|こっかい}{図書館|としょかん}についての{新聞|しんぶん}{記事|きじ}である。

8{月|がつ}{上旬|じょうじゅん}、{地下|ちか}1{階|かい}に{用意|ようい}された{大型|おおがた}{保温|ほおん}テントに66{箱|はこ}の{段|だん}ボールが{運|はこ}びこまれた。{脇|わき}に{置|お}いた6{本|ほん}のボンベから、{濃度|のうど}60％の{二酸化|にさんか}{炭素|たんそ}ガスが{流|なが}し{込|こ}まれた。

{段|だん}ボールの{中身|なかみ}は、{個人|こじん}や{団体|だんたい}が{所蔵|しょぞう}していた1930〜40{年代|ねんだい}の{和紙|わし}{製|せい}の{書籍|しょせき}や{小冊子|しょうさっし}だ。{同|どう}{図書館|としょかん}{資料|しりょう}{保存|ほぞん}{課|か}の{中島|なかじま}{尚子|なおこ}さんは「{室温|しつおん}25{度|ど}、{濃度|のうど}60％で2{週間|しゅうかん}{燻蒸|くんじょう}（{注|ちゅう}1）すると、{成虫|せいちゅう}はもちろん、{目|め}に{見|み}えない{卵|たまご}まで{駆除|くじょ}できます」と{話|はな}す。

{同|どう}{図書館|としょかん}の{書庫|しょこ}の{大半|たいはん}は{閉架|へいか}（{注|ちゅう}2）で、{見学者|けんがくしゃ}{以外|いがい}の{一般人|いっぱんじん}は{立|た}ち{入|い}る{機会|きかい}がない。これまで{虫食|むしく}い{被害|ひがい}は{数件|すうけん}しかなく、{外部|がいぶ}からの{害虫|がいちゅう}の{侵入|しんにゅう}はあまり{警戒|けいかい}されてこなかったという。

ところが、2006{年|ねん}に{館内|かんない}{一斉|いっせい}{調査|ちょうさ}をすると、{過去|かこ}に{古書店|こしょてん}から{購入|こうにゅう}した{和紙|わし}の{巻物|まきもの}（{注|ちゅう}3）2{本|ほん}が、{保管|ほかん}ケース{内|ない}で{繁殖|はんしょく}した{甲虫|こうちゅう}の{一種|いっしゅ}「シバンムシ」の{幼虫|ようちゅう}に{食|た}べられているのが{見|み}つかった。

07{年|ねん}には{書庫|しょこ}{内|ない}でカビが{発生|はっせい}し、{数千|すうせん}{冊|さつ}の{本|ほん}に{被害|ひがい}が{出|で}た。カビは{本|ほん}そのものを{傷|いた}めるだけでなく、{虫|むし}の{餌|えさ}にもなる。

{調査|ちょうさ}の{結果|けっか}、{外部|がいぶ}から{持|も}ち{込|こ}まれる{本|ほん}や、ホコリに{付着|ふちゃく}した{虫|むし}やカビが、{図書館|としょかん}{内|ない}で{増殖|ぞうしょく}する{可能性|かのうせい}があることがわかった。

これまでは、{虫|むし}が{見|み}つかった{本|ほん}を{取|と}り{出|だ}し、{化学|かがく}{薬品|やくひん}で{駆除|くじょ}してきた。{二酸化|にさんか}{炭素|たんそ}は{人|ひと}や{環境|かんきょう}への{影響|えいきょう}も{少|すく}なく、{低|てい}{費用|ひよう}で{済|す}む。{書庫|しょこ}に{入|い}れる{前|まえ}に、{段|だん}ボールごと{一斉|いっせい}{駆除|くじょ}できるのが{最大|さいだい}のメリットという。

{同|どう}{図書館|としょかん}は、こうしたノウハウをホームページや{論文|ろんぶん}で{国内外|こくないがい}に{紹介|しょうかい}している。
（{朝日|あさひ}{新聞|しんぶん}2010{年|ねん}8{月|がつ}17{日|にち}{付|づけ}{夕刊|ゆうかん}による）
（{注|ちゅう}1）{燻蒸|くんじょう}する：ここでは、ガスや{煙|けむり}で{殺菌|さっきん}{殺虫|さっちゅう}を{行|おこな}う
（{注|ちゅう}2）{閉架|へいか}：{利用者|りようしゃ}に{書棚|しょだな}を{開放|かいほう}せず、{請求|せいきゅう}に{応|おう}じて{本|ほん}を{取|と}り{出|だ}して{見|み}せるシステム
（{注|ちゅう}3）{巻物|まきもの}：{長|なが}い{紙|かみ}に{書|か}かれて、{巻|ま}いて{保管|ほかん}された{昔|むかし}の{書物|しょもつ}`,
      arti: `Berikut ini adalah artikel koran tentang Perpustakaan Parlemen Nasional.

Pada awal Agustus, 66 kardus dibawa masuk ke tenda penghangat besar yang disiapkan di lantai basement 1. Dari 6 tabung yang diletakkan di sampingnya, dialirkan gas karbon dioksida berkadar 60%.

Isi kardus itu adalah buku dan buklet berbahan kertas washi dari tahun 1930–40-an yang dulu disimpan oleh perorangan dan organisasi. Nakajima Naoko dari Bagian Pelestarian Bahan perpustakaan itu berkata, "Jika difumigasi (catatan 1) selama 2 minggu pada suhu ruang 25 derajat dan kadar 60%, bukan hanya serangga dewasa, telur yang tak terlihat mata pun bisa dibasmi."

Sebagian besar ruang arsip perpustakaan ini bersistem tertutup (catatan 2), dan masyarakat umum selain pengunjung tur tidak berkesempatan masuk. Selama ini kerusakan akibat serangga hanya beberapa kasus, sehingga masuknya hama dari luar tidak terlalu diwaspadai.

Namun, ketika dilakukan pemeriksaan serentak di seluruh gedung pada 2006, ditemukan dua gulungan (catatan 3) kertas washi yang dulu dibeli dari toko buku bekas dimakan larva "shibanmushi", sejenis kumbang yang berkembang biak di dalam kotak penyimpanan.

Pada tahun 2007, jamur muncul di ruang arsip dan ribuan buku rusak. Jamur bukan hanya merusak buku itu sendiri, tetapi juga menjadi makanan serangga.

Dari hasil pemeriksaan diketahui bahwa serangga dan jamur yang menempel pada buku dari luar atau pada debu berpotensi berkembang biak di dalam perpustakaan.

Selama ini, buku yang ditemukan berserangga dikeluarkan lalu serangganya dibasmi dengan bahan kimia. Karbon dioksida minim dampak bagi manusia dan lingkungan, serta murah. Keuntungan terbesarnya adalah bisa dibasmi serentak beserta kardusnya sebelum dimasukkan ke ruang arsip.

Perpustakaan ini memperkenalkan pengetahuan praktis seperti ini kepada dalam dan luar negeri melalui situs web dan makalah.
(Dari harian Asahi edisi sore, 17 Agustus 2010)
(Catatan 1) 燻蒸する: di sini, membasmi kuman dan serangga dengan gas atau asap
(Catatan 2) 閉架: sistem di mana rak buku tidak dibuka untuk pengguna; buku diambilkan sesuai permintaan
(Catatan 3) 巻物: buku kuno yang ditulis di kertas panjang dan disimpan dalam keadaan digulung`,
    },
    "9-3": {
      yomi: `{文章|ぶんしょう}を{書|か}こうとすると、{私|わたし}たちの{心|こころ}の{闇|やみ}に{一|ひと}つの{言葉|ことば}が{光|ひか}る。その{言葉|ことば}がおぼろげな（{注|ちゅう}）{内容|ないよう}を{象徴|しょうちょう}していて、そこから{次|つぎ}の{言葉|ことば}が{生|う}まれる{気配|けはい}が{感|かん}じられる。{紙|かみ}の{上|うえ}にその{言葉|ことば}を{書|か}きとめてみる。その{言葉|ことば}によってはじめて{自分|じぶん}が{何|なに}を{書|か}こうとしているかが、わかりはじめるのだ。「①{混沌|こんとん}からことばへ」とはこの{場面|ばめん}を{指|さ}している。{人間|にんげん}の{言葉|ことば}が{本当|ほんとう}に{生|い}きているのはここである。

{私|わたし}たちは、ペンが{書|か}いてゆくにつれて{考|かんが}える。「{考|かんが}える」とは、{音声|おんせい}にならない{言葉|ことば}をひとりごとのように{口|くち}の{中|なか}で{言|い}うことだ。その{言葉|ことば}をペンで{書|か}きとめる。{書|か}きとめた{言葉|ことば}がさらに{次|つぎ}の{思考|しこう}を{呼|よ}ぶ。これが{文章|ぶんしょう}{表現|ひょうげん}の「{現場|げんば}」だ。

{文章|ぶんしょう}を{書|か}いた{経験|けいけん}をふりかえれば、だれでも{思|おも}いあたることだが、{書|か}き{上|あ}げた{文章|ぶんしょう}は{必|かなら}ず、{自分|じぶん}がはじめに{漠然|ばくぜん}と②{予感|よかん}していた{内容|ないよう}とは{違|ちが}ったものになっている。{心|こころ}の{闇|やみ}に{一|ひと}つ{二|ふた}つと{危|あや}うく{連|つら}なって{光|ひか}っていた{言葉|ことば}が{漠然|ばくぜん}と{象徴|しょうちょう}していた{内容|ないよう}と、{複雑|ふくざつ}な{思考|しこう}を{経|へ}て{言葉|ことば}の{秩序|ちつじょ}によって{組織|そしき}され{他人|たにん}にも{理解|りかい}されるようになった{文章|ぶんしょう}との{違|ちが}いが、そう{感|かん}じさせるのだ。

{私|わたし}たちは{自分|じぶん}の{考|かんが}えたことを{文章|ぶんしょう}に{表現|ひょうげん}しようとすることによって、{実際|じっさい}には、{考|かんが}えていた{以上|いじょう}のことをその{表現|ひょうげん}された{文章|ぶんしょう}の{内|うち}に{発見|はっけん}する。これが{文章|ぶんしょう}{表現|ひょうげん}における{発見|はっけん}である。{書|か}かれた{内容|ないよう}（{世界|せかい}）についての{発見|はっけん}と、それが{自分|じぶん}の{中|なか}から{出|で}てきたという{驚|おどろ}き。{文章|ぶんしょう}を{書|か}くということは、{言葉|ことば}によって、{世界|せかい}を{知|し}り{自分|じぶん}を{知|し}るという{二|ふた}つの{驚|おどろ}きを{同時|どうじ}に{経験|けいけん}することでもある。
（梅田卓夫、清水良典、服部左右一、松川由博{編|へん}『{高校生|こうこうせい}のための{文章|ぶんしょう}{読本|とくほん}』による）
（{注|ちゅう}）おぼろげな：はっきりしない`,
      arti: `Ketika hendak menulis, sebuah kata bersinar di kegelapan hati kita. Kata itu melambangkan isi yang masih samar (catatan), dan terasa tanda-tanda kata berikutnya akan lahir dari sana. Kita mencoba mencatat kata itu di atas kertas. Barulah melalui kata itu kita mulai memahami apa yang hendak kita tulis. "① Dari kekacauan menuju kata-kata" merujuk pada momen ini. Di sinilah kata-kata manusia benar-benar hidup.

Kita berpikir seiring pena menulis. "Berpikir" adalah mengucapkan kata-kata yang tidak bersuara di dalam mulut seperti bergumam sendiri. Kata-kata itu dicatat dengan pena. Kata yang dicatat memanggil pikiran berikutnya. Inilah "lapangan" ungkapan tulisan.

Siapa pun yang mengingat kembali pengalaman menulis pasti menyadarinya: tulisan yang sudah selesai pasti menjadi berbeda dari isi yang ② samar-samar dirasakan pada awalnya. Perbedaan antara isi yang samar-samar dilambangkan oleh kata-kata yang bersinar rapuh satu-dua dalam kegelapan hati, dengan tulisan yang telah tersusun oleh tatanan bahasa melalui pemikiran yang rumit sehingga bisa dipahami orang lain — itulah yang membuat kita merasa begitu.

Dengan berusaha mengungkapkan apa yang kita pikirkan ke dalam tulisan, kenyataannya kita menemukan lebih dari yang kita pikirkan di dalam tulisan yang terungkap itu. Inilah penemuan dalam ungkapan tulisan. Penemuan tentang isi (dunia) yang ditulis, dan keterkejutan bahwa hal itu keluar dari dalam diri sendiri. Menulis juga berarti mengalami sekaligus dua keterkejutan: mengenal dunia dan mengenal diri sendiri melalui kata-kata.
(Dari buku panduan menulis untuk siswa SMA)
(Catatan) おぼろげな: tidak jelas, samar`,
    },

    // ── 問題10：哲学の役割 ──
    "10": {
      yomi: `{以下|いか}は、{筆者|ひっしゃ}が{著書|ちょしょ}の{中|なか}で「{哲学|てつがく}の{役割|やくわり}」について{書|か}いたものである。

ここで{大切|たいせつ}なのは、とりわけ{科学|かがく}の{意義|いぎ}と{限界|げんかい}をしっかりと{見定|みさだ}めて、{人間的|にんげんてき}{知|ち}の{全体|ぜんたい}をほんとうに{見渡|みわた}しうる{哲学的|てつがくてき}{知|ち}の{立場|たちば}を{我|わ}がものとすることにある。というのは、{科学的|かがくてき}{知|ち}は、{二|ふた}つの{限界|げんかい}を{持|も}ち、その{限界|げんかい}{内|ない}でしか{意義|いぎ}を{持|も}たないからである。

{一|ひと}つには、{科学的|かがくてき}{知|ち}は、{対象|たいしょう}を{突|つ}き{放|はな}して、{第三者|だいさんしゃ}{的|てき}{立場|たちば}で、{自分|じぶん}に{関|かか}わりのない{客観的|きゃっかんてき}{事象|じしょう}として{眺|なが}め、しかも、{必|かなら}ずそのつど、{特定|とくてい}の{観点|かんてん}からだけ{対象|たいしょう}を{扱|あつか}い、{自分|じぶん}が{関心|かんしん}を{持|も}つ{側面|そくめん}だけを{取|と}り{上|あ}げ、それ{以外|いがい}の{局面|きょくめん}を{捨象|しゃしょう}し（{注|ちゅう}）、{決|けっ}して{対象|たいしょう}の{全体|ぜんたい}を{見|み}ようとはしないのである。だから、{科学|かがく}が{進|すす}むと、{細分化|さいぶんか}が{必至|ひっし}となり、{隣|となり}の{研究室|けんきゅうしつ}でやっていることが、お{互|たが}いにはまったく{分|わ}からなくなる。{専門化|せんもんか}と{特殊化|とくしゅか}が、{科学|かがく}の{運命|うんめい}であり、いかに{学際化|がくさいか}が{叫|さけ}ばれても、{根本的|こんぽんてき}には①この{傾向|けいこう}には{歯止|はど}めが{利|き}かない。それはちょうど、{近代的|きんだいてき}{病院|びょういん}で、{病気|びょうき}を{扱|あつか}う{諸|しょ}{部門|ぶもん}が、{外科|げか}や{内科|ないか}{等々|とうとう}として、{細|こま}かく{分|わ}かれ、{人間|にんげん}{全体|ぜんたい}を{扱|あつか}ってくれる{部署|ぶしょ}が{存在|そんざい}しないのと、{同様|どうよう}である。

{二|ふた}つには、{科学的|かがくてき}{知|ち}は、{対象|たいしょう}を、{自分|じぶん}と{無関係|むかんけい}な{事柄|ことがら}として{扱|あつか}う{客観性|きゃっかんせい}がその{特色|とくしょく}をなしているので、そこでは、{私|わたし}たちが、{自己|じこ}として、{主体的|しゅたいてき}に{決断|けつだん}して{実践的|じっせんてき}に{生|い}きてゆく{行為|こうい}の{問題|もんだい}を、{本質的|ほんしつてき}に{扱|あつか}うことができないのである。というのも、ある{状況|じょうきょう}のなかで、いかに{生|い}きるべきかをよく{考|かんが}えて、{決断|けつだん}し、{行為|こうい}してゆくためには、{来|こ}し{方|かた}{行|ゆ}く{末|すえ}をよく{熟慮|じゅくりょ}して、もはや{無|な}い{過去|かこ}と、いまだ{無|な}い{将来|しょうらい}とを{視野|しや}に{収|おさ}めながら、{現在|げんざい}の{状況|じょうきょう}のなかに{突|つ}き{入|い}ってゆかねばならない。しかし、そのような{無|な}いものを{視野|しや}に{収|おさ}めながら、{記憶|きおく}と{期待|きたい}の{熱|あつ}い{思|おも}いを{抱|いだ}きつつ{行為|こうい}することは、{知覚的|ちかくてき}に{有|あ}る{現在|げんざい}の{事実|じじつ}に{検証|けんしょう}されることによってのみ{確実性|かくじつせい}を{得|え}ようとする{科学|かがく}の{実証性|じっしょうせい}とは、まったく{別個|べっこ}の{事柄|ことがら}だからである。{客観的|きゃっかんてき}な{事実|じじつ}{確認|かくにん}のみを{大事|だいじ}と{考|かんが}える{科学|かがく}の{次元|じげん}と、{人生|じんせい}の{岐路|きろ}に{立|た}って、{右|みぎ}すべきか{左|ひだり}すべきかに{思|おも}い{悩|なや}む{行為者|こういしゃ}の{立場|たちば}とは、{別個|べっこ}の{事柄|ことがら}である。②{科学|かがく}は、いかに{生|い}きるべきかという{後者|こうしゃ}の{問題|もんだい}を、{本質的|ほんしつてき}に{扱|あつか}うことができないのである。

したがって、{科学|かがく}とは{別|べつ}に、{存在|そんざい}の{全体|ぜんたい}を{視野|しや}に{収|おさ}め、{世界|せかい}のあり{方|かた}の{原理的|げんりてき}{全体|ぜんたい}を{考慮|こうりょ}して、{世界観|せかいかん}の{知|ち}を{育|はぐく}むと{同時|どうじ}に、そのなかで、{人間|にんげん}はいかに{生|い}きるべきであるのかという、{人間|にんげん}の{主体的|しゅたいてき}な{行為|こうい}の{根本|こんぽん}を{考究|こうきゅう}して、{人生観|じんせいかん}の{知|ち}を{形成|けいせい}するところに、{哲学的|てつがくてき}な{知|ち}の{本質的|ほんしつてき}な{成立|せいりつ}{根拠|こんきょ}があることになる。{哲学|てつがく}が{愛|あい}し{求|もと}める{真実|しんじつ}の{知|ち}とは、こうした{人生観|じんせいかん}・{世界観|せかいかん}の{根本的|こんぽんてき}{知|ち}にほかならない。
（{渡邊|わたなべ}{二郎|じろう}『{現代|げんだい}の{哲学|てつがく}』による）
（{注|ちゅう}）{捨象|しゃしょう}（しゃしょう）する：{捨|す}て{去|さ}る`,
      arti: `Berikut ini adalah tulisan penulis dalam bukunya tentang "peran filsafat".

Yang penting di sini adalah, terutama, memastikan dengan cermat makna dan batas sains, lalu menjadikan milik kita sudut pandang pengetahuan filosofis yang benar-benar mampu memandang keseluruhan pengetahuan manusia. Sebab, pengetahuan ilmiah memiliki dua batas dan hanya bermakna di dalam batas tersebut.

Pertama, pengetahuan ilmiah mengambil jarak dari objeknya, memandangnya dari posisi pihak ketiga sebagai fenomena objektif yang tidak berkaitan dengan dirinya; terlebih lagi, setiap kali selalu hanya menangani objek dari sudut pandang tertentu, mengangkat hanya aspek yang diminatinya dan membuang (catatan) segi lainnya, serta sama sekali tidak berusaha melihat keseluruhan objek. Karena itu, makin maju sains, pemecahan menjadi bagian-bagian kecil tak terhindarkan, dan apa yang dilakukan di laboratorium sebelah menjadi sama sekali tidak saling dipahami. Spesialisasi dan pengkhususan adalah takdir sains, dan seberapa pun pendekatan antardisiplin diserukan, pada dasarnya ① kecenderungan ini tidak bisa dibendung. Itu persis seperti di rumah sakit modern, di mana berbagai bagian yang menangani penyakit terbagi rinci menjadi bedah, penyakit dalam, dan sebagainya, dan tidak ada bagian yang menangani manusia secara utuh.

Kedua, karena ciri khas pengetahuan ilmiah adalah objektivitas yang menangani objek sebagai hal yang tidak berkaitan dengan diri sendiri, di sana masalah tindakan kita — sebagai diri, memutuskan secara mandiri dan hidup secara praktis — pada dasarnya tidak bisa ditangani. Sebab, untuk memikirkan baik-baik bagaimana seharusnya hidup dalam situasi tertentu, memutuskan, lalu bertindak, kita harus merenungkan dengan saksama jalan yang telah dan akan ditempuh, memasukkan masa lalu yang sudah tidak ada dan masa depan yang belum ada ke dalam pandangan, lalu menerjang ke dalam situasi saat ini. Namun, bertindak sambil memasukkan hal-hal yang tidak ada itu ke dalam pandangan, dengan memeluk perasaan hangat berupa ingatan dan harapan, adalah hal yang sama sekali berbeda dari sifat empiris sains yang berusaha memperoleh kepastian hanya dengan diuji oleh fakta saat ini yang ada secara persepsi. Dimensi sains yang hanya menganggap penting pemastian fakta objektif, dan posisi pelaku yang berdiri di persimpangan hidup sambil bimbang harus ke kanan atau ke kiri, adalah hal yang berbeda. ② Sains pada dasarnya tidak bisa menangani masalah yang terakhir, yaitu bagaimana seharusnya hidup.

Oleh karena itu, dasar esensial berdirinya pengetahuan filosofis terletak pada upaya — terpisah dari sains — memasukkan keseluruhan keberadaan ke dalam pandangan, mempertimbangkan keseluruhan prinsip keadaan dunia untuk memupuk pengetahuan pandangan dunia, sekaligus mengkaji dasar tindakan manusia yang mandiri, yaitu bagaimana seharusnya manusia hidup di dalamnya, untuk membentuk pengetahuan pandangan hidup. Pengetahuan sejati yang dicintai dan dicari filsafat tidak lain adalah pengetahuan mendasar tentang pandangan hidup dan pandangan dunia seperti ini.
(Dari buku "Filsafat Masa Kini" karya Watanabe Jirō)
(Catatan) 捨象する: membuang`,
    },

    // ── 問題11：AB比較（urutan sama dengan teks gabungan di converter） ──
    "11": {
      yomi: `【{意見|いけん} A】
アートを{買|か}うか{買|か}わないか、その{後|ご}もコレクションし{続|つづ}けるか、{止|や}めてしまうのか。
いずれも{最初|さいしょ}の{一点|いってん}をうまく{買|か}えるかどうかが、そしてその{最初|さいしょ}の{作品|さくひん}が、{自分|じぶん}にとって{後々|のちのち}まで{価値|かち}あるものかどうかで{決|き}まってくると{思|おも}う。
もちろんここで{言|い}う{価値|かち}とは{単純|たんじゅん}な{市場|しじょう}{価値|かち}だけではなくて、{求|もと}めた{人|ひと}にとって、{飽|あ}きずに{長|なが}い{間|あいだ}{付|つ}き{合|あ}うのを{続|つづ}けられる{魅力|みりょく}のことを{指|さ}しています。この{自己|じこ}{満足|まんぞく}の{部分|ぶぶん}が{欠|か}けていると、なかなか{次|つぎ}の{一点|いってん}に{手|て}が{伸|の}びにくいのではないでしょうか。
アートは{好|す}きだけれど{作品|さくひん}を{買|か}うほどではないと{最初|さいしょ}は{思|おも}っていても、{一度|いちど}{購入|こうにゅう}してみれば、{後|あと}は{堰|せき}（せき）を{切|き}ったように{買|か}い{続|つづ}けてしまったコレクターの{方達|かたたち}を{身近|みぢか}に{何人|なんにん}も{見|み}ています。
（{宮津|みやつ}{大輔|だいすけ}『{現代|げんだい}アートを{買|か}う』による）

【{意見|いけん} B】
{真|しん}にアートの{価値|かち}が{分|わ}かるようになるためには、やはり、{買|か}うというステップに{至|いた}らないといけないと{思|おも}う。{実際|じっさい}に{買|か}って{自分|じぶん}のものにしてこそ、{本当|ほんとう}にわかってくるものだ。{自分|じぶん}が{出金|しゅっきん}して{手|て}に{入|い}れたものだからこそ、{愛着|あいちゃく}も{出|で}てくるだろうし、{身近|みぢか}において{毎日|まいにち}{見|み}ていることで、いろんな{刺激|しげき}を{受|う}けていくはずだ。（{中略|ちゅうりゃく}）
{数万円|すうまんえん}にしろ、{数百万円|すうひゃくまんえん}にしろ、いくらかのお{金|かね}を{出|だ}して{買|か}うのだから、それに{見合|みあ}うだけのものかどうかをしっかり{吟味|ぎんみ}すること。ギャラリー（{注|ちゅう}2）で{作品|さくひん}と{対峙|たいじ}（{注|ちゅう}3）して、これ、おもしろいな、とか、{好|す}きだなと{心|こころ}を{動|うご}かされる{作品|さくひん}に{出会|であ}えたら、さらに、どうして{自分|じぶん}はこれが{好|す}きなのか、{一|ひと}つ{踏|ふ}み{込|こ}んでその{理由|りゆう}を{考|かんが}えてみることだ。{大切|たいせつ}なのは、{自分|じぶん}にとって、これは{充分|じゅうぶん}な{価値|かち}のあるものだと{思|おも}えるような、{自分|じぶん}{自身|じしん}の{基準|きじゅん}を{持|も}つということである。
（{小山|こやま}{登美夫|とみお}『その{絵|え}、いくら？　{現代|げんだい}アートの{相場|そうば}がわかる』による）
（{注|ちゅう}2）ギャラリー：{美術品|びじゅつひん}の{展示場|てんじじょう}
（{注|ちゅう}3）{対峙|たいじ}する：{向|む}き{合|あ}う`,
      arti: `【Pendapat A】
Membeli karya seni atau tidak, lalu terus mengoleksi atau berhenti.
Menurut saya, semuanya ditentukan oleh apakah karya pertama bisa dibeli dengan baik, dan apakah karya pertama itu tetap bernilai bagi diri sendiri sampai lama kemudian.
Tentu saja, nilai yang dimaksud di sini bukan sekadar nilai pasar, melainkan daya tarik yang membuat pembelinya bisa terus "bergaul" lama dengannya tanpa bosan. Bukankah jika bagian kepuasan diri ini kurang, sulit tergerak untuk membeli karya berikutnya?
Saya melihat banyak kolektor di sekitar saya yang awalnya berpikir "suka seni, tapi tidak sampai membeli karya", namun begitu sekali membeli, setelah itu terus membeli seperti bendungan yang jebol.
(Dari buku "Membeli Seni Kontemporer" karya Miyatsu Daisuke)

【Pendapat B】
Agar benar-benar bisa memahami nilai seni, menurut saya bagaimanapun juga harus sampai pada tahap membeli. Hanya dengan benar-benar membeli dan menjadikannya milik sendiri, kita akan sungguh memahaminya. Justru karena diperoleh dengan mengeluarkan uang sendiri, rasa sayang pun muncul, dan dengan menaruhnya di dekat kita dan melihatnya setiap hari, kita pasti mendapat berbagai rangsangan. (dihilangkan)
Entah puluhan ribu yen atau jutaan yen, karena membelinya dengan mengeluarkan uang, timbanglah baik-baik apakah karya itu sepadan. Jika di galeri (catatan 2) Anda berhadapan (catatan 3) dengan karya dan bertemu karya yang menggerakkan hati — "ini menarik" atau "aku suka ini" — melangkahlah lebih jauh dan pikirkan alasan mengapa Anda menyukainya. Yang penting adalah memiliki standar sendiri sehingga Anda bisa merasa bahwa karya ini cukup bernilai bagi diri Anda.
(Dari buku karya Koyama Tomio tentang harga pasar seni kontemporer)
(Catatan 2) ギャラリー: tempat pameran karya seni
(Catatan 3) 対峙する: berhadapan`,
    },

    // ── 問題12：都市の鳥たち ──
    "12": {
      yomi: `{眺|なが}めていると、{東京|とうきょう}の{空|そら}には{意外|いがい}にたくさんの{鳥|とり}が{飛|と}んでいる。カラスやスズメばかりではない。カモメもいるし、{僕|ぼく}には{種類|しゅるい}のよくわからない{鳥|とり}もいる。それらは{町|まち}や{人家|じんか}に「{適応|てきおう}」した{都市|とし}{鳥|ちょう}ではなく、{野生|やせい}の{鳥|とり}である。そのような{鳥|とり}が、コンクリートのビルの{上|うえ}を{何事|なにごと}もないように{飛|と}び、{何|なん}の{屈託|くったく}もなく、ビルの{一角|いっかく}にとまる。まるで{森|もり}や{林|はやし}の{木|き}の{枝|えだ}にとまるように。（{中略|ちゅうりゃく}）

ツバメが{人家|じんか}の{軒先|のきさき}に{巣|す}をつくるのは、スズメを{避|さ}けるためだということを{明|あき}らかにした{研究|けんきゅう}がある。スズメはふだんはあまり{人間|にんげん}を{恐|おそ}れないが、ひなを{育|そだ}てるときは{人間|にんげん}を{避|さ}ける。だから、{人|ひと}がひんぱんに{出入|でい}りする{店先|みせさき}などには{巣|す}をかけない。ツバメはそれを{利用|りよう}する。そういう{店先|みせさき}の{軒|のき}に{巣|す}をつくれば、{嫌|いや}なスズメはやってこない。{昔|むかし}、ツバメがたくさん{巣|す}をかけると、{店|みせ}は{繁盛|はんじょう}するといわれた。{話|はなし}は{逆|ぎゃく}であって、{繁盛|はんじょう}している{店|みせ}にツバメが{集|あつ}まってくるのである。

{今|いま}、{大|だい}{都市|とし}にはツバメがめっきり{少|すく}なくなった。かつてのように、どの{通|とお}りを{歩|ある}いていても、{子育|こそだ}てのために{餌|えさ}を{持|も}ち{帰|かえ}るツバメが{飛|と}び{交|か}う{姿|すがた}は{見|み}られなくなった。おそらくツバメたちは、{町|まち}そのものの{作|つく}りや、{人間|にんげん}の{存在|そんざい}が{嫌|きら}いになったのではないだろう。{町|まち}が{人工的|じんこうてき}にきれいになりすぎて、{餌|えさ}にする{虫|むし}があまりにも{減|へ}ってしまったので、{町|まち}ではひなも{育|そだ}てられなくなったから、{都会|とかい}には{棲|す}ま（{注|ちゅう}1）なくなったのである。

こういう{事例|じれい}を{見|み}ていると、{自然|しぜん}{保護|ほご}とか{自然|しぜん}との{共生|きょうせい}ということについて、{少|すこ}し{考|かんが}え{直|なお}す{必要|ひつよう}があるのではないか、という{気|き}がしてくる。

{多|おお}くの{動物|どうぶつ}たちはわれわれが{思|おも}っていたよりもずっとしたたかである。{自分|じぶん}たちの{生活|せいかつ}の{基盤|きばん}になる{条件|じょうけん}さえそろっていれば、たとえその{条件|じょうけん}が{人工|じんこう}のものであろうとも、そしてそこをたくさんの{人間|にんげん}がうろうろしていようとも、{平気|へいき}で{棲|す}みついてしまう。カラスやツバメのように、{人間|にんげん}がいることをむしろ{利用|りよう}しているものだって、けっして{少|すく}ないとはいえない。{都市|とし}{周辺|しゅうへん}で{急速|きゅうそく}に{増|ふ}えつつあるタヌキやキツネもその{例|れい}である。{人間|にんげん}がいるおかげで{豊富|ほうふ}な{食物|しょくもつ}がたやすく{手|て}にはいるようになった。{命|いのち}がけで{食物|しょくもつ}を{探|さが}す{必要|ひつよう}はなくなったのだ。

けれど、{都市化|としか}によってツバメは{餌|えさ}を{失|うしな}った。モンシロチョウ（{注|ちゅう}2）は{日|ひ}なたを{失|うしな}った。そうなったら{出|で}ていくほかはない。

{水面|すいめん}に{浮|う}いて{生活|せいかつ}するアメンボ（{注|ちゅう}3）は、{水|みず}が{汚|きたな}かろうと{富|ふ}{栄養化|えいようか}（{注|ちゅう}4）していようと{一向|いっこう}にかまわない。{彼|かれ}らにとって{重要|じゅうよう}なのは、{水|みず}に{表面|ひょうめん}{張力|ちょうりょく}があることだけである。たとえ{科学的|かがくてき}に{無害|むがい}な{物質|ぶっしつ}によってでも、{水|みず}の{表面|ひょうめん}{張力|ちょうりょく}が{低下|ていか}すれば、{彼|かれ}らは{溺|おぼ}れてしまう。

やたらと{動物|どうぶつ}たちに{遠慮|えんりょ}することはないのかもしれないが、それぞれの{動物|どうぶつ}にとってのこのキー・ポイントは{侵|おか}してはならない。
（{日高|ひだか}{敏隆|としたか}『{春|はる}の{数|かぞ}え{方|かた}』による）
（{注|ちゅう}1）{棲|す}む：{住|す}む
（{注|ちゅう}2）モンシロチョウ：チョウの{一|いち}{種類|しゅるい}
（{注|ちゅう}3）アメンボ：{昆虫|こんちゅう}の{名前|なまえ}
（{注|ちゅう}4）{富|ふ}{栄養化|えいようか}：{栄養|えいよう}のある{物質|ぶっしつ}がたまり、{小|ちい}さい{生物|せいぶつ}が{異常|いじょう}{発生|はっせい}する{状態|じょうたい}になること`,
      arti: `Kalau diperhatikan, di langit Tokyo ternyata banyak burung yang terbang. Bukan hanya gagak dan burung gereja. Ada juga camar, dan ada burung yang jenisnya tidak begitu saya ketahui. Mereka bukan burung kota yang "beradaptasi" dengan kota dan permukiman, melainkan burung liar. Burung-burung seperti itu terbang di atas gedung beton seolah tidak ada apa-apa, dan hinggap di sudut gedung tanpa beban sedikit pun. Seolah hinggap di dahan pohon di hutan. (dihilangkan)

Ada penelitian yang mengungkap bahwa burung layang-layang membuat sarang di ujung atap rumah penduduk untuk menghindari burung gereja. Burung gereja biasanya tidak terlalu takut pada manusia, tetapi saat membesarkan anak mereka menghindari manusia. Karena itu, mereka tidak bersarang di depan toko yang sering dilalui orang. Burung layang-layang memanfaatkan hal itu. Jika membuat sarang di atap depan toko seperti itu, burung gereja yang tidak disukainya tidak akan datang. Dulu dikatakan, jika banyak burung layang-layang bersarang, toko akan laris. Sebenarnya kebalikannya: burung layang-layang berkumpul di toko yang laris.

Kini, burung layang-layang jauh berkurang di kota-kota besar. Pemandangan burung layang-layang berseliweran membawa pulang makanan untuk anaknya di jalan mana pun, seperti dulu, tidak lagi terlihat. Mungkin bukan karena burung layang-layang membenci tata kota itu sendiri atau keberadaan manusia. Karena kota menjadi terlalu bersih secara buatan, serangga yang menjadi makanannya berkurang drastis, sehingga anak burung pun tidak bisa dibesarkan di kota, dan mereka tidak lagi tinggal (catatan 1) di kota.

Melihat contoh seperti ini, saya merasa mungkin perlu sedikit memikirkan ulang soal perlindungan alam dan hidup berdampingan dengan alam.

Banyak hewan jauh lebih tangguh daripada yang kita kira. Asalkan syarat yang menjadi dasar kehidupan mereka terpenuhi, meskipun syarat itu buatan manusia, dan meskipun banyak manusia berkeliaran di sana, mereka dengan santai menetap. Seperti gagak dan burung layang-layang, tidak sedikit pula yang justru memanfaatkan keberadaan manusia. Rakun anjing dan rubah yang pesat bertambah di sekitar kota juga contohnya. Berkat adanya manusia, makanan yang berlimpah mudah didapat. Mereka tidak perlu lagi mencari makan dengan mempertaruhkan nyawa.

Namun, karena urbanisasi, burung layang-layang kehilangan makanan. Kupu-kupu putih (catatan 2) kehilangan tempat yang terkena sinar matahari. Kalau sudah begitu, tidak ada pilihan selain pergi.

Anggang-anggang (catatan 3) yang hidup mengapung di permukaan air sama sekali tidak peduli airnya kotor atau mengalami eutrofikasi (catatan 4). Yang penting bagi mereka hanyalah air memiliki tegangan permukaan. Bahkan oleh zat yang secara ilmiah tidak berbahaya pun, jika tegangan permukaan air menurun, mereka akan tenggelam.

Mungkin kita tidak perlu terlalu sungkan terhadap hewan-hewan, tetapi titik kunci bagi setiap hewan ini tidak boleh dilanggar.
(Dari buku "Haru no Kazoekata" karya Hidaka Toshitaka)
(Catatan 1) 棲む: tinggal, hidup
(Catatan 2) モンシロチョウ: salah satu jenis kupu-kupu
(Catatan 3) アメンボ: nama serangga
(Catatan 4) 富栄養化: keadaan ketika zat bergizi menumpuk sehingga makhluk kecil tumbuh secara tidak normal`,
    },

    // ── 問題13：生活を便利にする機器・道具コンテスト ──
    "13": {
      yomi: `{生活|せいかつ}{便利化|べんりか}{協会|きょうかい}
2012「{生活|せいかつ}を{便利|べんり}にする{機器|きき}・{道具|どうぐ}」コンテスト
{募集|ぼしゅう}{案内|あんない}

1．{部門|ぶもん}・{参加|さんか}{資格|しかく}
①{開発|かいはつ}{部門|ぶもん}
{企業|きぎょう}、{高校生|こうこうせい}{以上|いじょう}の{一般|いっぱん}{市民|しみん}を{対象|たいしょう}に、{生活|せいかつ}を{便利|べんり}にするオリジナルな{機器|きき}を{募集|ぼしゅう}します。

②アイデア{部門|ぶもん}（{特定|とくてい}{課題|かだい}と{自由|じゆう}{課題|かだい}）
{中学生|ちゅうがくせい}{以上|いじょう}の{一般|いっぱん}{市民|しみん}を{対象|たいしょう}に、{便利|べんり}な{道具|どうぐ}のアイデアを{募集|ぼしゅう}します。
{特定|とくてい}{課題|かだい}：{片手|かたて}で{簡単|かんたん}に{操作|そうさ}できる{道具|どうぐ}のアイデア
{自由|じゆう}{課題|かだい}：「{生活|せいかつ}を{便利|べんり}にする{道具|どうぐ}」に{関|かん}するアイデアで、{特定|とくてい}{課題|かだい}に{該当|がいとう}しないものなら{何|なん}でもかまいません。

2．{応募|おうぼ}
①{応募|おうぼ}{方法|ほうほう}
{開発|かいはつ}{部門|ぶもん}の{応募|おうぼ}には、{機器|きき}の{実物|じつぶつ}の{動|うご}きや{使|つか}い{方|かた}がわかるような{動画|どうが}が{必要|ひつよう}です。
アイデア{部門|ぶもん}の{応募|おうぼ}には、アイデアが{具体的|ぐたいてき}にイメージできるようなイラストが{必要|ひつよう}です。
・{応募|おうぼ}はすべて{生活|せいかつ}{便利化|べんりか}{協会|きょうかい}のホームページ（http://www.benrika.com）から{行|おこな}ってください。
・{応募|おうぼ}フォームに{必要|ひつよう}{事項|じこう}を{記入|きにゅう}の{上|うえ}、{必要|ひつよう}なものを{添付|てんぷ}して{送信|そうしん}してください。
・{応募|おうぼ}フォームに{添付|てんぷ}できないものは{郵送|ゆうそう}してください（{送付|そうふ}{先|さき}はホームページ{参照|さんしょう}）。
②{応募|おうぼ}{期間|きかん}　2012{年|ねん}6{月|がつ}15{日|にち}〜7{月|がつ}15{日|にち}

3．{選考|せんこう}{方法|ほうほう}
{開発|かいはつ}{部門|ぶもん}は、{独創性|どくそうせい}のほか、{実用性|じつようせい}、{有効性|ゆうこうせい}、コストパフォーマンスを{基準|きじゅん}に{審査|しんさ}します。
{一次|いちじ}{審査|しんさ}は{実物|じつぶつ}の{動画|どうが}を{含|ふく}めた{書類|しょるい}{審査|しんさ}、{二次|にじ}{審査|しんさ}は{実物|じつぶつ}を{使|つか}ってデモンストレーションです。
アイデア{部門|ぶもん}は、{着眼点|ちゃくがんてん}、{独創性|どくそうせい}、{実現|じつげん}{可能性|かのうせい}、{夢|ゆめ}があるかどうかを{基準|きじゅん}に{審査|しんさ}します。
{一次|いちじ}{審査|しんさ}はイラストを{含|ふく}めた{書類|しょるい}{審査|しんさ}、{二次|にじ}{審査|しんさ}は{模型|もけい}および{書類|しょるい}の{審査|しんさ}です。

4．{発表|はっぴょう}・{表彰|ひょうしょう}
2012{年|ねん}8{月|がつ}にホームページ{上|じょう}で{入賞|にゅうしょう}{作品|さくひん}を{公表|こうひょう}し、{応募者|おうぼしゃ}にも{結果|けっか}を{通知|つうち}します。
{開発|かいはつ}{部門|ぶもん}の{入賞|にゅうしょう}{作品|さくひん}は、「2012{生活|せいかつ}{便利化|べんりか}フォーラム{東京|とうきょう}」で{表彰|ひょうしょう}・{展示|てんじ}され、デモンストレーションも{行|おこな}われます。
アイデア{部門|ぶもん}の{入賞|にゅうしょう}{作品|さくひん}は、{同|どう}フォーラムで{表彰|ひょうしょう}され、{試作品|しさくひん}が{作成|さくせい}されます。

【{応募|おうぼ}{希望者|きぼうしゃ}】
| {名前|なまえ} | {職業|しょくぎょう} | {応募|おうぼ}{作品|さくひん} | {提出|ていしゅつ}{可能|かのう}なもの |
|------|------|----------|----------------|
| {山田|やまだ} | {小学生|しょうがくせい} | {帽子|ぼうし}のようにかぶれる{雨傘|あまがさ} | {試作品|しさくひん}とイラスト |
| {鈴木|すずき} | {高校|こうこう}{教師|きょうし} | {片手|かたて}で{簡単|かんたん}に{開|あ}けられる{缶切|かんき}り | アイデアのメモ |
| チェン | {会社員|かいしゃいん} | ふたが{開|あ}けやすくこぼれにくい{水筒|すいとう} | {試作品|しさくひん} |
| {川村|かわむら} | {大学生|だいがくせい} | {片手|かたて}で{楽|らく}に{入力|にゅうりょく}できるキーボード | イラスト |`,
      arti: `Asosiasi Kepraktisan Hidup
Lomba "Alat dan Perangkat yang Membuat Hidup Lebih Praktis" 2012
Panduan Pendaftaran

1. Kategori dan syarat peserta
① Kategori pengembangan
Terbuka bagi perusahaan dan masyarakat umum mulai siswa SMA; kami menerima perangkat orisinal yang membuat hidup lebih praktis.

② Kategori ide (tema khusus dan tema bebas)
Terbuka bagi masyarakat umum mulai siswa SMP; kami menerima ide alat yang praktis.
Tema khusus: ide alat yang bisa dioperasikan dengan mudah memakai satu tangan
Tema bebas: ide apa pun tentang "alat yang membuat hidup lebih praktis" yang tidak termasuk tema khusus.

2. Pendaftaran
① Cara mendaftar
Untuk kategori pengembangan, diperlukan video yang memperlihatkan gerak dan cara pakai perangkat aslinya.
Untuk kategori ide, diperlukan ilustrasi yang membuat ide bisa dibayangkan secara konkret.
・Semua pendaftaran dilakukan melalui situs web Asosiasi Kepraktisan Hidup (http://www.benrika.com).
・Isi hal-hal yang diperlukan di formulir pendaftaran, lampirkan yang diperlukan, lalu kirim.
・Yang tidak bisa dilampirkan di formulir, kirimkan lewat pos (alamat tujuan lihat situs web).
② Masa pendaftaran: 15 Juni – 15 Juli 2012

3. Cara seleksi
Kategori pengembangan dinilai berdasarkan orisinalitas, serta kepraktisan, efektivitas, dan efisiensi biaya.
Penilaian tahap pertama adalah seleksi berkas termasuk video benda aslinya; tahap kedua adalah demonstrasi memakai benda aslinya.
Kategori ide dinilai berdasarkan sudut pandang, orisinalitas, kemungkinan diwujudkan, dan ada-tidaknya impian.
Penilaian tahap pertama adalah seleksi berkas termasuk ilustrasi; tahap kedua adalah penilaian model dan berkas.

4. Pengumuman dan penghargaan
Karya pemenang diumumkan di situs web pada Agustus 2012, dan hasilnya juga diberitahukan kepada pendaftar.
Karya pemenang kategori pengembangan akan diberi penghargaan dan dipamerkan di "Forum Kepraktisan Hidup Tokyo 2012", disertai demonstrasi.
Karya pemenang kategori ide akan diberi penghargaan di forum yang sama, dan purwarupanya akan dibuat.

【Calon pendaftar】
| Nama | Pekerjaan | Karya | Yang bisa diserahkan |
| Yamada | Siswa SD | Payung hujan yang bisa dipakai seperti topi | Purwarupa dan ilustrasi |
| Suzuki | Guru SMA | Pembuka kaleng yang mudah dibuka dengan satu tangan | Catatan ide |
| Chen | Karyawan | Botol minum yang tutupnya mudah dibuka dan tidak mudah tumpah | Purwarupa |
| Kawamura | Mahasiswa | Papan ketik yang mudah diketik dengan satu tangan | Ilustrasi |`,
    },
  },
};
