// =================================================================
// 📝 MANIFEST FILE — Daftar kumpulan kanji berbunshu (dikelompokkan per radikal)
// Ditambah bertahap seiring setiap file dirapikan.
// =================================================================
import alam from "./alam.json";
import altar from "./altar.json";
import anak from "./anak.json";
import arakPersembahan from "./arak-persembahan.json";
import bagianTubuh from "./bagian-tubuh.json";
import bajak from "./bajak.json";
import benda from "./benda.json";
import beras from "./beras.json";
import berdiri from "./berdiri.json";
import berhenti from "./berhenti.json";
import berkata from "./berkata.json";
import berlari from "./berlari.json";
import berselisih from "./berselisih.json";
import besar from "./besar.json";
import binatang from "./binatang.json";
import biruHijau from "./biru-hijau.json";
import buluCorak from "./bulu-corak.json";
import buluSayap from "./bulu-sayap.json";
import cabang from "./cabang.json";
import coretanMiring from "./coretan-miring.json";
import delapan from "./delapan.json";
import dua from "./dua.json";
import duaTangan from "./dua-tangan.json";
import gandum from "./gandum.json";
import garisAtas from "./garis-atas.json";
import garisTegak from "./garis-tegak.json";
import hantu from "./hantu.json";
import hidung from "./hidung.json";
import hitam from "./hitam.json";
import kacang from "./kacang.json";
import kait from "./kait.json";
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
import larangan from "./larangan.json";
import macan from "./macan.json";
import makan from "./makan.json";
import marga from "./marga.json";
import melangkahKecil from "./melangkah-kecil.json";
import melangkahLambat from "./melangkah-lambat.json";
import melangkahPelan from "./melangkah-pelan.json";
import melihat from "./melihat.json";
import membungkus from "./membungkus.json";
import menutupDariAtas from "./menutup-dari-atas.json";
import merah from "./merah.json";
import milikPribadi from "./milik-pribadi.json";
import misterius from "./misterius.json";
import motifHarimau from "./motif-harimau.json";
import orang from "./orang.json";
import papanTipis from "./papan-tipis.json";
import pedas from "./pedas.json";
import pejabat from "./pejabat.json";
import perkataan from "./perkataan.json";
import putih from "./putih.json";
import rami from "./rami.json";
import sakit from "./sakit.json";
import sampaiTiba from "./sampai-tiba.json";
import satu from "./satu.json";
import segel from "./segel.json";
import sendok from "./sendok.json";
import sepuluh from "./sepuluh.json";
import suara from "./suara.json";
import tandaTitik from "./tanda-titik.json";
import tanganLagi from "./tangan-lagi.json";
import tanpaKanji from "./tanpa-kanji.json";
import tempat from "./tempat.json";
import tenaga from "./tenaga.json";
import tikus from "./tikus.json";
import tindakan from "./tindakan.json";
import tinggi from "./tinggi.json";
import tongkatPemukul from "./tongkat-pemukul.json";
import tua from "./tua.json";
import tubuhBerbaring from "./tubuh-berbaring.json";
import tulisan from "./tulisan.json";
import ukuran from "./ukuran.json";
import wangi from "./wangi.json";
import wanita from "./wanita.json";
import warna from "./warna.json";
import type { RadikalFile } from "@/data/kanji-radikal-types";

export type { RadikalWord, RadikalGroup, RadikalFile } from "@/data/kanji-radikal-types";

export const radikalKanjiFiles: Record<string, RadikalFile> = {
  alam: alam as RadikalFile,
  "bagian-tubuh": bagianTubuh as RadikalFile,
  binatang: binatang as RadikalFile,
  tempat: tempat as RadikalFile,
  benda: benda as RadikalFile,
  orang: orang as RadikalFile,
  melihat: melihat as RadikalFile,
  "melangkah-kecil": melangkahKecil as RadikalFile,
  satu: satu as RadikalFile,
  altar: altar as RadikalFile,
  makan: makan as RadikalFile,
  tindakan: tindakan as RadikalFile,
  sepuluh: sepuluh as RadikalFile,
  "kaki-manusia": kakiManusia as RadikalFile,
  "tangan-lagi": tanganLagi as RadikalFile,
  besar: besar as RadikalFile,
  "tubuh-berbaring": tubuhBerbaring as RadikalFile,
  ukuran: ukuran as RadikalFile,
  berhenti: berhenti as RadikalFile,
  sakit: sakit as RadikalFile,
  beras: beras as RadikalFile,
  berdiri: berdiri as RadikalFile,
  berkata: berkata as RadikalFile,
  kematian: kematian as RadikalFile,
  tinggi: tinggi as RadikalFile,
  anak: anak as RadikalFile,
  putih: putih as RadikalFile,
  tenaga: tenaga as RadikalFile,
  "garis-atas": garisAtas as RadikalFile,
  "garis-tegak": garisTegak as RadikalFile,
  kecil: kecil as RadikalFile,
  kekurangan: kekurangan as RadikalFile,
  tulisan: tulisan as RadikalFile,
  "menutup-dari-atas": menutupDariAtas as RadikalFile,
  "tanda-titik": tandaTitik as RadikalFile,
  cabang: cabang as RadikalFile,
  "kotak-terbuka": kotakTerbuka as RadikalFile,
  delapan: delapan as RadikalFile,
  hitam: hitam as RadikalFile,
  berlari: berlari as RadikalFile,
  kait: kait as RadikalFile,
  marga: marga as RadikalFile,
  "melangkah-pelan": melangkahPelan as RadikalFile,
  segel: segel as RadikalFile,
  "biru-hijau": biruHijau as RadikalFile,
  "bulu-corak": buluCorak as RadikalFile,
  wanita: wanita as RadikalFile,
  larangan: larangan as RadikalFile,
  sendok: sendok as RadikalFile,
  suara: suara as RadikalFile,
  "tongkat-pemukul": tongkatPemukul as RadikalFile,
  "bulu-sayap": buluSayap as RadikalFile,
  hantu: hantu as RadikalFile,
  "kedua-urutan": keduaUrutan as RadikalFile,
  kesatria: kesatria as RadikalFile,
  "papan-tipis": papanTipis as RadikalFile,
  "dua-tangan": duaTangan as RadikalFile,
  macan: macan as RadikalFile,
  "milik-pribadi": milikPribadi as RadikalFile,
  misterius: misterius as RadikalFile,
  "motif-harimau": motifHarimau as RadikalFile,
  rami: rami as RadikalFile,
  dua: dua as RadikalFile,
  "kaki-pincang": kakiPincang as RadikalFile,
  membungkus: membungkus as RadikalFile,
  pedas: pedas as RadikalFile,
  perkataan: perkataan as RadikalFile,
  hidung: hidung as RadikalFile,
  merah: merah as RadikalFile,
  tua: tua as RadikalFile,
  wangi: wangi as RadikalFile,
  "coretan-miring": coretanMiring as RadikalFile,
  kacang: kacang as RadikalFile,
  "sampai-tiba": sampaiTiba as RadikalFile,
  "arak-persembahan": arakPersembahan as RadikalFile,
  bajak: bajak as RadikalFile,
  berselisih: berselisih as RadikalFile,
  gandum: gandum as RadikalFile,
  "kata-sambung": kataSambung as RadikalFile,
  kenyang: kenyang as RadikalFile,
  "melangkah-lambat": melangkahLambat as RadikalFile,
  pejabat: pejabat as RadikalFile,
  "tanpa-kanji": tanpaKanji as RadikalFile,
  tikus: tikus as RadikalFile,
  warna: warna as RadikalFile,
};

export const radikalKanjiOrder = [
  "alam",
  "bagian-tubuh",
  "binatang",
  "tempat",
  "benda",
  "orang",
  "melihat",
  "melangkah-kecil",
  "satu",
  "altar",
  "makan",
  "tindakan",
  "sepuluh",
  "kaki-manusia",
  "tangan-lagi",
  "besar",
  "tubuh-berbaring",
  "ukuran",
  "berhenti",
  "sakit",
  "beras",
  "berdiri",
  "berkata",
  "kematian",
  "tinggi",
  "anak",
  "putih",
  "tenaga",
  "garis-atas",
  "garis-tegak",
  "kecil",
  "kekurangan",
  "tulisan",
  "menutup-dari-atas",
  "tanda-titik",
  "cabang",
  "kotak-terbuka",
  "delapan",
  "hitam",
  "berlari",
  "kait",
  "marga",
  "melangkah-pelan",
  "segel",
  "biru-hijau",
  "bulu-corak",
  "wanita",
  "larangan",
  "sendok",
  "suara",
  "tongkat-pemukul",
  "bulu-sayap",
  "hantu",
  "kedua-urutan",
  "kesatria",
  "papan-tipis",
  "dua-tangan",
  "macan",
  "milik-pribadi",
  "misterius",
  "motif-harimau",
  "rami",
  "dua",
  "kaki-pincang",
  "membungkus",
  "pedas",
  "perkataan",
  "hidung",
  "merah",
  "tua",
  "wangi",
  "coretan-miring",
  "kacang",
  "sampai-tiba",
  "arak-persembahan",
  "bajak",
  "berselisih",
  "gandum",
  "kata-sambung",
  "kenyang",
  "melangkah-lambat",
  "pejabat",
  "tanpa-kanji",
  "tikus",
  "warna",
];
