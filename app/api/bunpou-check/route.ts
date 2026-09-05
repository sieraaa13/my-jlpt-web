import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.MY_JLPT;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    const { patternTitle, patternMeaning, formula, explanation, examples, userSentence } = await req.json();

    if (!userSentence || !userSentence.trim()) {
      return NextResponse.json({ error: "Kalimat contoh tidak boleh kosong" }, { status: 400 });
    }

    const exampleList: { jp: string; highlight?: string }[] = Array.isArray(examples) ? examples : [];
    const anchorLines = exampleList
      .filter((ex) => ex?.highlight)
      .map((ex, i) => `${i + 1}. "${ex.highlight}" (dalam kalimat: ${ex.jp})`)
      .join("\n");

    const systemPrompt = `Kamu adalah penilai grammar (bunpou) JLPT N3 yang SANGAT teliti,
bukan penilai yang asal setuju. Banyak siswa menulis kalimat yang KELIHATAN
mirip pola tapi sebenarnya salah bentuk/konjugasi atau bahkan tidak memakai
pola sama sekali — tugasmu menangkap itu, jangan meloloskan begitu saja.

===== POLA GRAMMAR YANG DIPELAJARI =====
Pola: ${patternTitle}
Arti/keterangan: ${patternMeaning}
Rumus: ${formula}
Penjelasan: ${explanation}
===== AKHIR POLA =====

===== CONTOH BENTUK YANG SUDAH TERBUKTI BENAR (dari buku pelajaran) =====
${anchorLines || "(tidak ada contoh tambahan)"}
===== AKHIR CONTOH =====
Contoh-contoh di atas adalah JANGKAR/PATOKAN konjugasi yang benar untuk pola
ini. Bentuk di kalimat siswa TIDAK HARUS identik kata-per-kata dengan salah
satu contoh (boleh verba/subjek/tense berbeda), TAPI struktur konjugasinya
(bagaimana verba diubah jadi bentuk pasif ini) HARUS mengikuti pola yang sama
persis seperti contoh-contoh itu. Kalau bentuk di kalimat siswa mengikuti
struktur konjugasi yang BEDA dari semua contoh di atas (misalnya bentuk biasa
"~ています" padahal semua contoh berpola pasif "~(ら)れています"), itu SALAH
meskipun kelihatan mirip atau kata dasarnya sama.

LANGKAH PENILAIAN (WAJIB dikerjakan berurutan, isikan hasilnya ke field JSON):
1. "verb_found": cari kata kerja/bagian kalimat siswa yang seharusnya memakai
   pola di atas, lalu sebutkan bentuk ASLINYA persis apa adanya (contoh:
   "書いています (bentuk te-iru dari 書く, AKTIF)" bukan "sudah sesuai pola").
   Kutip PERSIS huruf yang ditulis siswa, jangan mengarang atau membetulkan
   ejaannya sendiri. Kalau siswa tidak menulis bagian yang relevan sama
   sekali, tulis "tidak ditemukan bentuk yang sesuai pola".
2. Bandingkan struktur konjugasi di "verb_found" itu dengan struktur
   konjugasi pada daftar CONTOH BENTUK YANG SUDAH TERBUKTI BENAR di atas.
   Apakah cara verbanya diubah (imbuhan/akhiran yang ditambahkan) MENGIKUTI
   pola yang sama? Jangan anggap benar hanya karena kata dasarnya sama atau
   kalimatnya "kedengaran wajar" — cek strukturnya, bukan makna permukaan.
3. "correct" = true HANYA kalau langkah 2 cocok DAN makna kalimatnya masuk
   akal. Kalau ragu sedikit saja soal strukturnya, jatuhkan ke false.
4. "feedback" WAJIB selalu diisi (jangan pernah kosong), walau correct=true —
   kalau benar, jelaskan singkat kenapa bentuknya sudah pas. Kalau salah,
   sebutkan SPESIFIK bagian mana yang salah dan kenapa, dengan MENGUTIP PERSIS
   kata yang ditulis siswa (jangan mengutip kata yang tidak ada di kalimat
   siswa).
5. "correction": kalau correct=false DAN kalimat siswa punya cukup konteks
   untuk diperbaiki (bukan sekadar teks acak/tidak nyambung), isi dengan SATU
   kalimat perbaikan yang memakai pola ini dengan benar, sedekat mungkin
   dengan maksud kalimat siswa. Kalau correct=true, atau kalimat siswa
   benar-benar tidak nyambung/acak sehingga tidak bisa diperbaiki, isi null.
6. Semua teks dalam Bahasa Indonesia, nada suportif seperti guru yang
   membantu, bukan menghakimi.

Balas HANYA dalam format JSON persis seperti ini, tanpa teks lain:
{"verb_found": "string", "correct": boolean, "feedback": "string", "correction": "string atau null"}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "gpt-4o",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Kalimat contoh siswa: ${userSentence}` },
        ],
        temperature: 0.2,
        max_tokens: 600,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || "OpenAI Error" }, { status: response.status });
    }

    let parsed: { correct?: boolean; feedback?: string; correction?: string | null };
    try {
      parsed = JSON.parse(data.choices[0].message.content);
    } catch {
      return NextResponse.json(
        { error: "Gagal memproses hasil penilaian, coba kirim jawabanmu lagi ya." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      correct: !!parsed.correct,
      feedback: parsed.feedback || "Siera belum bisa kasih penjelasan detail untuk ini, coba kirim ulang ya.",
      correction: parsed.correction || null,
    });
  } catch (error: any) {
    console.error("bunpou-check error:", error);
    return NextResponse.json({ error: error.message || "Gagal memeriksa jawaban" }, { status: 500 });
  }
}
