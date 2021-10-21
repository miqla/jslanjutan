// 1. ambil semua elemen video
// cara ambil atribut selain class dan id, pake []
// hasil query selector = Nodelist, jadiin array biar bisa pake map filter reduce (higher order function)
const videos = Array.from(document.querySelectorAll('[data-duration'));

// pilih hanya yg 'JAVASCRIPT LANJUTAN', textContent/InnerHTML
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video (string).   Chaining.     dataSet = utk ngambil data, duration = sesuai nama atribut di HTML nya
  .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
  .map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
  })

// jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;   //ambil sisa detiknya
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;


// console.log(jmlVideo);