// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Mila';

// 1. CREATION phase pada Global Context
// js akan mencari dulu ada variabel / function ga, kalo ada..
// nama var = undefined       isinya undefined
// nama function = fn()       isinya adalah code function itu sendiri
// let sama const ga berlaku hoisting
// konsep/proses ini dinamakan HOISTING, lalu dari awal sudah ada 2 object, yaitu:
// window = global object
// this = window

// exceution phase
// mengeksekusi programnya, baris perbaris dari atas kebawah

// console.log(sayHello());

// var nama = 'Mila';
// var umur = 33;

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yg didalamnya terdapat creation dan execution phase
// bisa mengakses macam" seperti :
// window
// arguments = isinya, apapun yg ada didalam parameter () function nya
// hoisting (local)

// untuk melihat visualisasi lengkap dari proses eksekusinya, kunjungi https://pythontutor.com/javascript.html#mode=edit


// var nama = 'Mila';
// var username = '@miqdadsr';

// function cetakURL(username) {
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL(username));


// function a() {
//   console.log('ini a');

//   function b() {
//     console.log('ini b');

//     function c() {
//       console.log('ini c');
//     }

//     c();
//   }

//   b();
// }

// a();



// function satu () { 
//   var nama = 'Mila';
//   console.log(nama);
// }

// function dua () {
//   // console.log(arguments);    hasilnya dalam bentuk array
//   // console.log(arguments[0]);   hasilnya adalah isi array yg indexnya 0
//   console.log(nama);
// }

// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Doddy');
// console.log(nama);


// ______________//_________________________/_________________/________________________/

// function init () {
//   let nama = 'Mila';
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// function init () {
//     // let nama = 'Mila';
//     return function (nama) {
//       console.log(nama);
//     }
//   }
//   let panggilNama = init();
//   panggilNama('Mila');
//   panggilNama('Erik');


  // function factory
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenagkan!`);
//   }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('Mila'));


// immediately invoked function
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  }
})();

counter = 100;    //gangaruh

console.log(add());
console.log(add());
console.log(add());