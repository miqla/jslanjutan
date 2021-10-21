const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >=3) {
//     newAngka.push(angka[i]);    //ngisi const bisa pake push
//   }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(function(a) {
//   return a >= 3;
// });
// console.log(newAngka);

// filter dgn arrow function
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map,nambahin array baru tanpa menghapus array awalnya
// kalikam semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka)

// reduce: melakukan sesuatu terhadap seluruh elemen pada arraynya
// punya 2 argument jadi double (())
// jumlahkan seluruh elemen pada array
// currentValue = elemen array yg sedang di looping
// accumulator = hasil dari prosesnya
// hasilnya : 0 + -1+ 8+ 9+ 1+ 4+ -5+ -4+ 3+ 2+ 9 = 26
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngka);
// setelah currentValue sebenarnya ada nilai default, angka awalnya = 0, boleh diganti nilainya

// method Chaining
// cari angka >5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5)    //8,9,9
  .map(a => a*3)    //24,27,27
  // .map(a => a/3)   boleh tambahin function lagi berapapun    // nambahin function cukup pake . titik
  .reduce((acc, cur) => acc + cur); //78
  console.lo(hasil);


