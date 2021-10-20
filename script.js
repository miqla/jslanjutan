// cara membuat Object pada javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk object yg banyak
// let mahasiswa = {
//   // properti, isinya adalah nilai / value
//   nama: 'Mila',
//   energi: 10,
//   // method, adalah function didalam object, method isinya function
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   }
// }

// // kalo bikin 2, nama variabelnya gabole sama
// let mahasiswa2 = {
//   nama: 'Milar',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   }
// }

// ---------------------/----------------/------------------/---------------

// 2. Function Declaration
// biar function yg ga dibutuhin ga dijalankan, kita buat object yg isinya (2 buah) method
// const methodMahasiswa = {
//   makan : function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },

//   main : function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//   tidur : function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
//   };

//     // templatenya
// function Mahasiswa(nama, energi) {
//   // let mahasiswa = {};
//   // Object.create(methodMahasiswa): ikut membawa properti dan method dari object lain, parent nya
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   // kalo function declaration harus ada return, else null
//   return mahasiswa;
// }

//     // harus instansiasi dulu,biar ada objectnya
// let mila = Mahasiswa('Mila', 10);
// let erik = Mahasiswa('Erik', 15);


// ----/------/------/--------/------/-/------/-/-/-/-//-/--------

// object prototypel inheritance, gada kelas
// function Mahasiswa(nama, energi) {
//   // let this = Object.create(Mahasiswa.prototype);     dibalik layar, gaperlu ditulis
//   this.nama = nama;
//   this.energi = energi;

//   // return this;     dibalik layar
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam;
//   return `Halo ${this.nama}, selamat tidur!`;
// }

// let mila = new Mahasiswa('Mila', 10);


// ----/------/------/--------/------/-/------/-/-/-/-//-/--------

// versi Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }

  tidur(jam) {
    this.energi += jam;
    return `Halo ${this.nama}, selamat tidur!`;
  }                                                                   
}

let mila = new Mahasiswa('Mila', 10);
let erik = new Mahasiswa('Erik', 20);


let angka = [2,1,3];
console.log(angka.sort());


// ---------------------/----------------/------------------/---------------


// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//   // let mahasiswa = {};      gaperlu nulisin variabelnya
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   }

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   }
//   // return mahasiswa;    gaperlu return
// }

// // jangan lupa pake new
// let lorem = new Mahasiswa('Lorem', 12);


// ---------------------/----------------/------------------/---------------


// 4. Object.create