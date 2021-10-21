// Function Expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// }
// console.log(tampilNama('Mila'));


// Arrow Function, 1 parameter
// const tampilNama = (nama) => { return `Halo ${nama}`;}
// console.log(tampilNama('Erik'));


// Arrow Function, 2 parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));


// Arrow Function, 1 parameter
// parameternya gaperlu pake (),
// klo isinya cuma 1, gaperlu tulis return (implicit return). 
// bahkan gaperlu pake {}
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Mila'));


// Arrow Function tanpa parameter, cuma perlu tulis ()
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());


// -----------------/-------------------/------------------/-------------------/-----------


// function mapping
// menghitung jumlah huruf dari masing" mahasiswa, lalu each jumlah dijadikan array
// let mahasiswa = ['Mila Rabbani', 'Lorem Ipsum', 'Ipsum'];

// cara biasa
// let jumlahHuruf = mahasiswa.map(function(nama) {
//   return nama.length;
// });

// pake arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// biar hasilnya object, bukan array, dikasih {}, tpi biar {} gadikira function dan mau return, masukin kedalam ()
// biar hasilnya keren pake console.table
// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlhHuruf: nama.length}));
// console.table(jumlahHuruf);


// ---------------/------------------/-----------------------/------------------/----------

// Konsep this pada Arrow Function
// sebenarnya arrow function gabisa pake konsep this

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = 'Mila';
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   }
// }
// const mila = new Mahasiswa();

// Arrow Function, 
// gabisa buat constructor function pake arrow, tapi klo method didalamnya bisa pake arrow
// const Mahasiswa = function () {
//   this.nama = 'Mila';
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   }
// }   //harus di instansiasi
// const mila = new Mahasiswa();


// Object Literal
// const mhs1 = {
//   nama : 'Mila',
//   umur : 33,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     // console.log(this);
//   } //gaperlu instansiasi
// }


// contoh lain
// const Mahasiswa = function () {
//   this.nama = 'Mila';
//   this.umur = 33;
//   this.sayHello = function () {   //function ekspression, masukin kedalam variabel
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   }

//   // setInterval(function() {      //function declaration      will error karna this nya
//   setInterval(() => { 
//     console.log(this.umur++);
//   }, 500);      //setiap 500ms , jalankan function
// }
// const mila = new Mahasiswa();


// ________________///_____________________//_________________//_________________________//

// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//   this.classList.toggle('size');
//   setTimeout(() => {      //pake arrow biar this nya bukan window tapi box, karena hoisting
//     this.classList.toggle('caption');
//   }, 600);    //setelah 600ms, functionnya jalan
// })

const box = document.querySelector('.box');
box.addEventListener('click', function() {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)){
    [satu, dua] = [dua, satu];      //isinya tukeran, biar efek animasinya reverse
  }

  this.classList.toggle(satu);    //biar dy ngambil variabel didalam satu, nulisnya jgn 'satu'
  setTimeout(() => {      //pake arrow biar this nya bukan window tapi box, karena hoisting
    this.classList.toggle(dua);
  }, 600);    //setelah 600ms, functionnya jalan
})