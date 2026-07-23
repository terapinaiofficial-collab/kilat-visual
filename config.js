/* ====================================================================
   KONFIGURASI KILAT VISUAL — edit file ini lalu upload. TANPA coding.
   Baca PANDUAN-SETUP.txt untuk panduan lengkap.
   Aturan: teks selalu di dalam tanda kutip "...". Jangan hapus koma.
   ==================================================================== */
window.__KV_CONFIG = {

  /* -- 1. BRANDING --------------------------------------------------- */
  brandName: "Kilat Visual",        // kata terakhir tampil warna aksen
  tagline:   "Studio Desain AI",
  logoUrl:   "/logo.png",           // logo Kilat Visual (mark oranye transparan). Kosong "" = logo petir bawaan

  /* -- 1b. WARNA (opsional) — kosongkan "" = pakai bawaan -------------- */
  accentColor: "#fe6402",           // oranye Kilat Visual (diambil dari logo). Ganti sesuai selera
  bgColor:     "#0c0a09",           // charcoal hangat (cocok dengan oranye)

  /* -- 2. HARGA & CHECKOUT (produk utama) ---------------------------- */
  price:       "149.000",           // harga tampil
  priceStrike: "700.000",           // harga coret
  paymentUrl:  "https://CHECKOUT-KAMU.com",   // link checkout kamu (Mayar/Scalev/lynk.id). WAJIB

  /* -- 2b. TIER LISENSI RESELLER / WHITELABEL ------------------------
     showResellerTier: false = sembunyikan kartu lisensi (situs jualan biasa). */
  showResellerTier:   true,
  resellerPrice:      "499.000",
  resellerStrike:     "3.000.000",
  resellerPaymentUrl: "",           // link checkout lisensi whitelabel. Kosong = pakai paymentUrl

  /* -- 3. LINK CHATGPT ----------------------------------------------- */
  chatgptUrl: "https://chatgpt.com/",   // ChatGPT biasa (dipakai semua tools)
  gptUrl:     "",                       // link Custom GPT kamu (kosong "" = tombol disembunyikan)

  /* -- 4. SOCIAL (footer) — kosong "" = ikon disembunyikan ----------- */
  instagramUrl:    "",
  instagramHandle: "",
  facebookUrl:     "",
  facebookHandle:  "",

  /* -- 5. LOGIN via GOOGLE SPREADSHEET -------------------------------
     1. Buat Google Sheet, kolom A1 = "Email", isi email pelanggan ke bawah.
     2. File > Share > Publish to web > pilih sheet > format CSV > Publish.
     3. Salin URL (berakhiran output=csv), tempel DI ANTARA kutip.
     Kosong "" = login pakai PASSWORD saja (tanpa cek email) — untuk tes awal. */
  sheetCsvUrl: "",

  // Password login (semua pelanggan pakai 1 password ini). JANGAN tulis
  // password apa adanya — buka hash-tool.html, ketik password, salin hash-nya,
  // tempel DI ANTARA kutip (ganti kode di bawah).
  loginPasswordHash: "7319f80f932449d31d86405b07114e4d81dff4e902f9d11b58208bed952e02e1",
  // ^ hash dari password yang kamu pilih. Mau ganti lagi? buka hash-tool.html,
  //   ketik password baru, salin hash-nya, tempel di antara kutip di atas.
};
