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
let mahasiswa = ['Mila Rabbani', 'Lorem Ipsum', 'Ipsum'];

// cara biasa
// let jumlahHuruf = mahasiswa.map(function(nama) {
//   return nama.length;
// });

// pake arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// biar hasilnya object, bukan array, dikasih {}, tpi biar {} gadikira function dan mau return, masukin kedalam ()
// biar hasilnya keren pake console.table
let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlhHuruf: nama.length}));
console.table(jumlahHuruf);