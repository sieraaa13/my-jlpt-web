// =================================================================
// 📝 MANIFEST FILE — Daftar kumpulan kanji berbunshu (dikelompokkan per radikal)
// Ditambah bertahap seiring setiap file dirapikan.
// =================================================================
import alam from "./alam.json";
import aliranSungai from "./aliran-sungai.json";
import altar from "./altar.json";
import anak from "./anak.json";
import anggotaTubuh from "./anggota-tubuh.json";
import arah from "./arah.json";
import ayah from "./ayah.json";
import benda from "./benda.json";
import berdiri from "./berdiri.json";
import berhenti from "./berhenti.json";
import berkata from "./berkata.json";
import berlari from "./berlari.json";
import besar from "./besar.json";
import binatang from "./binatang.json";
import buluCorak from "./bulu-corak.json";
import buluSayap from "./bulu-sayap.json";
import cabang from "./cabang.json";
import coretanMiring from "./coretan-miring.json";
import delapan from "./delapan.json";
import dua from "./dua.json";
import duaTangan from "./dua-tangan.json";
import garisAtas from "./garis-atas.json";
import garisTegak from "./garis-tegak.json";
import hantu from "./hantu.json";
import hitam from "./hitam.json";
import kacang from "./kacang.json";
import kait from "./kait.json";
import kakiGulunganKain from "./kaki-gulungan-kain.json";
import kakiManusia from "./kaki-manusia.json";
import kakiPincang from "./kaki-pincang.json";
import kataSambung from "./kata-sambung.json";
import kecil from "./kecil.json";
import keduaUrutan from "./kedua-urutan.json";
import kekurangan from "./kekurangan.json";
import kematian from "./kematian.json";
import kenyang from "./kenyang.json";
import kesatria from "./kesatria.json";
import kotakTerbuka from "./kotak-terbuka.json";
import macan from "./macan.json";
import makan from "./makan.json";
import marga from "./marga.json";
import masuk from "./masuk.json";
import matahari from "./matahari.json";
import melangkahDuaKaki from "./melangkah-dua-kaki.json";
import melangkahJauh from "./melangkah-jauh.json";
import melangkahKecil from "./melangkah-kecil.json";
import melangkahPelan from "./melangkah-pelan.json";
import melihat from "./melihat.json";
import membandingkan from "./membandingkan.json";
import membungkus from "./membungkus.json";
import menutupDariAtas from "./menutup-dari-atas.json";
import milikPribadi from "./milik-pribadi.json";
import misterius from "./misterius.json";
import n2ReferensiSoal from "./n2-referensi-soal.json";
import orang from "./orang.json";
import panjang from "./panjang.json";
import papanTipis from "./papan-tipis.json";
import pedas from "./pedas.json";
import pejabat from "./pejabat.json";
import perkataan from "./perkataan.json";
import putih from "./putih.json";
import rasiNaga from "./rasi-naga.json";
import salahBukan from "./salah-bukan.json";
import sampaiTiba from "./sampai-tiba.json";
import satu from "./satu.json";
import segel from "./segel.json";
import senja from "./senja.json";
import sepuluh from "./sepuluh.json";
import suara from "./suara.json";
import tanganLagi from "./tangan-lagi.json";
import tempat from "./tempat.json";
import tenaga from "./tenaga.json";
import tindakan from "./tindakan.json";
import tinggi from "./tinggi.json";
import titik from "./titik.json";
import tua from "./tua.json";
import tubuhBerbaring from "./tubuh-berbaring.json";
import tulisan from "./tulisan.json";
import ukuran from "./ukuran.json";
import wangi from "./wangi.json";
import wanita from "./wanita.json";
import type { RadikalFile } from "@/data/kanji-radikal-types";

export type { RadikalWord, RadikalGroup, RadikalFile } from "@/data/kanji-radikal-types";

export const radikalKanjiFiles: Record<string, RadikalFile> = {
  benda: benda as RadikalFile,
  "n2-referensi-soal": n2ReferensiSoal as RadikalFile,
  tempat: tempat as RadikalFile,
  binatang: binatang as RadikalFile,
  "anggota-tubuh": anggotaTubuh as RadikalFile,
  alam: alam as RadikalFile,
  orang: orang as RadikalFile,
  "tangan-lagi": tanganLagi as RadikalFile,
  melihat: melihat as RadikalFile,
  tenaga: tenaga as RadikalFile,
  tindakan: tindakan as RadikalFile,
  wanita: wanita as RadikalFile,
  perkataan: perkataan as RadikalFile,
  satu: satu as RadikalFile,
  "melangkah-kecil": melangkahKecil as RadikalFile,
  matahari: matahari as RadikalFile,
  besar: besar as RadikalFile,
  senja: senja as RadikalFile,
  "kaki-manusia": kakiManusia as RadikalFile,
  kekurangan: kekurangan as RadikalFile,
  ukuran: ukuran as RadikalFile,
  kecil: kecil as RadikalFile,
  "melangkah-dua-kaki": melangkahDuaKaki as RadikalFile,
  "menutup-dari-atas": menutupDariAtas as RadikalFile,
  delapan: delapan as RadikalFile,
  kait: kait as RadikalFile,
  altar: altar as RadikalFile,
  arah: arah as RadikalFile,
  berhenti: berhenti as RadikalFile,
  tulisan: tulisan as RadikalFile,
  anak: anak as RadikalFile,
  cabang: cabang as RadikalFile,
  "garis-atas": garisAtas as RadikalFile,
  "kedua-urutan": keduaUrutan as RadikalFile,
  "salah-bukan": salahBukan as RadikalFile,
  segel: segel as RadikalFile,
  sepuluh: sepuluh as RadikalFile,
  "tubuh-berbaring": tubuhBerbaring as RadikalFile,
  berkata: berkata as RadikalFile,
  berlari: berlari as RadikalFile,
  "bulu-sayap": buluSayap as RadikalFile,
  "coretan-miring": coretanMiring as RadikalFile,
  kematian: kematian as RadikalFile,
  makan: makan as RadikalFile,
  "sampai-tiba": sampaiTiba as RadikalFile,
  tua: tua as RadikalFile,
  berdiri: berdiri as RadikalFile,
  hitam: hitam as RadikalFile,
  kacang: kacang as RadikalFile,
  "kaki-pincang": kakiPincang as RadikalFile,
  "kotak-terbuka": kotakTerbuka as RadikalFile,
  "melangkah-pelan": melangkahPelan as RadikalFile,
  membandingkan: membandingkan as RadikalFile,
  membungkus: membungkus as RadikalFile,
  "milik-pribadi": milikPribadi as RadikalFile,
  panjang: panjang as RadikalFile,
  "papan-tipis": papanTipis as RadikalFile,
  putih: putih as RadikalFile,
  tinggi: tinggi as RadikalFile,
  "aliran-sungai": aliranSungai as RadikalFile,
  ayah: ayah as RadikalFile,
  "bulu-corak": buluCorak as RadikalFile,
  dua: dua as RadikalFile,
  "dua-tangan": duaTangan as RadikalFile,
  "garis-tegak": garisTegak as RadikalFile,
  hantu: hantu as RadikalFile,
  "kaki-gulungan-kain": kakiGulunganKain as RadikalFile,
  "kata-sambung": kataSambung as RadikalFile,
  kenyang: kenyang as RadikalFile,
  kesatria: kesatria as RadikalFile,
  macan: macan as RadikalFile,
  marga: marga as RadikalFile,
  masuk: masuk as RadikalFile,
  "melangkah-jauh": melangkahJauh as RadikalFile,
  misterius: misterius as RadikalFile,
  pedas: pedas as RadikalFile,
  pejabat: pejabat as RadikalFile,
  "rasi-naga": rasiNaga as RadikalFile,
  suara: suara as RadikalFile,
  titik: titik as RadikalFile,
  wangi: wangi as RadikalFile,
};

export const radikalKanjiOrder = [
  "benda",
  "n2-referensi-soal",
  "tempat",
  "binatang",
  "anggota-tubuh",
  "alam",
  "orang",
  "tangan-lagi",
  "melihat",
  "tenaga",
  "tindakan",
  "wanita",
  "perkataan",
  "satu",
  "melangkah-kecil",
  "matahari",
  "besar",
  "senja",
  "kaki-manusia",
  "kekurangan",
  "ukuran",
  "kecil",
  "melangkah-dua-kaki",
  "menutup-dari-atas",
  "delapan",
  "kait",
  "altar",
  "arah",
  "berhenti",
  "tulisan",
  "anak",
  "cabang",
  "garis-atas",
  "kedua-urutan",
  "salah-bukan",
  "segel",
  "sepuluh",
  "tubuh-berbaring",
  "berkata",
  "berlari",
  "bulu-sayap",
  "coretan-miring",
  "kematian",
  "makan",
  "sampai-tiba",
  "tua",
  "berdiri",
  "hitam",
  "kacang",
  "kaki-pincang",
  "kotak-terbuka",
  "melangkah-pelan",
  "membandingkan",
  "membungkus",
  "milik-pribadi",
  "panjang",
  "papan-tipis",
  "putih",
  "tinggi",
  "aliran-sungai",
  "ayah",
  "bulu-corak",
  "dua",
  "dua-tangan",
  "garis-tegak",
  "hantu",
  "kaki-gulungan-kain",
  "kata-sambung",
  "kenyang",
  "kesatria",
  "macan",
  "marga",
  "masuk",
  "melangkah-jauh",
  "misterius",
  "pedas",
  "pejabat",
  "rasi-naga",
  "suara",
  "titik",
  "wangi",
];
