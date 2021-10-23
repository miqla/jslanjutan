// Looping Array:
// for biasa
// const mhs = ['Mila', 'Lorem', 'Ipsum'];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// for each (khusus array)
// mhs.forEach(m => console.log(m));

// for..of
// for (const m of mhs) {      // kasih nama baru, of nama arraynya
//   console.log(m);
// }


// String     
// n merepresentasikan tiap hurufnya (r, a, b..)
// const nama = 'Rabbani';
// for (const n of nama) {
//   console.log(n);
// }


// contoh lain, foreach
// const mhs = ['Mila', 'Lorem', 'Ipsum'];
// // mhs.forEach((m, i) => console.log(m));    // i akan jadi index 
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i+1}`);
// });

// for..of (biar dapat index tiap object nya)
// for (const [i, m] of mhs.entries()) {     //entries, menghasilkan index
//   console.log(`${m} adalah mahasiswa ke-${i+1}`);
// }


// NodeList
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(n => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments
// function jumlahAngka() {
//   // return arguments.reduce((a, i) => a + i);    //error
//   // arguments.forEach(a => jumlah += a);         //error
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5));


// --------------/----------------/--------------/-------------/-----------------/------------

// for..in
// Looping properti dari object
const mhs = {
  nama: 'Mila',
  umur: 23,
  email: 'mila@mila.id'
}
for (m in mhs) {
  console.log(m);   //hasil: nama umur email  (properti)
  console.log(mhs[m]);    //hasil: value dari propertinya   (m nya jadi object)
}