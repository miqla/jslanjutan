// cara membuat Object pada javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk object yg banyak
let mahasiswa = {
  // properti, isinya adalah nilai / value
  nama: 'Mila',
  energi: 10,
  // method, adalah function didalam object, method isinya function
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }
}

// kalo bikin 2, nama variabelnya gabole sama
let mahasiswa2 = {
  nama: 'Milar',
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }
}



// 2. Function Declaration
    // templatenya
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }

  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  }

  // kalo function declaration harus ada return, else null
  return mahasiswa;
}

    // harus instansiasi dulu,biar ada objectnya
let mila = Mahasiswa('Mila', 10);
let erik = Mahasiswa('Erik', 15);




// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi) {
  // let mahasiswa = {};      gaperlu nulisin variabelnya
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  }
  // return mahasiswa;    gaperlu return
}

// jangan lupa pake new
let lorem = new Mahasiswa('Lorem', 12);


// 4. Object.create