// Destructuring Variable /Assignment

// 1. Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Mila Rabbani'];

// Cara Biasa
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);

// Cara Destructuring
// const [salam, satu, dua, nama] = perkenalan;   //nama variabelnya bebas, gaharus sama dgn nama properti di arraynya
// console.log(dua);

// Skipping items
// const [salam, , , nama] = perkenalan;
// // console.log(dua);    error, dua is undefined
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a,b] = coba();
// console.log(b)

// Rest parameter
// const [a, ...values] = [1,2,3,4,5,6];
// console.log(a);
// console.log(values);    //isinya array

// -----------------/------------/--------------/-----------------/----------------/------------

// 2. Destructuring Object
// const mhs = {
//   nama : "Mila Rabbani",
//   umur : 23
// }
// const nama = mhs.nama;

// nama variabel nya harus sesuai dgn nama properti dari objectnya
// const {nama , umur} = mhs;
// console.log(nama);


// Assignment tanpa deklarasi object
// ({nama , umur} = { nama : "Mila Rabbani", umur : 23 });
// console.log(nama);


// Assign ke variabel yg baru
// const mhs = {
//   nama : "Mila Rabbani",
//   umur : 23
// }
// // kasih titik dua: lalu kasih nama baru
// const {nama: n , umur: u} = mhs;
// console.log(u);


// Memberikan Default Value
// const mhs = {
//   nama : "Mila Rabbani",
//   umur : 23,
//   email: 'mila@mila.id'
// }
// // kalo ada pake yg ada, kalo gada pake yg default
// const {nama , umur, email = 'email@default.com'} = mhs;
// console.log(email);


// Memberi nilai default + Assign ke variabel baru
// const mhs = {
//   nama : "Mila Rabbani",
//   umur : 23,
//   email: 'mila@mila.id'
// }
// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// // console.log(email);   //error karna yg dikenali sekarang e, bukan email
// console.log(e);


// Rest Parameter
// const mhs = {
//   nama : "Mila Rabbani",
//   umur : 23,
//   email: 'mila@mila.id'
// }
// const {nama, ...value} = mhs;
// console.log(value);   //hasilnya bentuknya object


// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama : "Mila Rabbani",
  umur : 23,
  email: 'mila@mila.id'
}

// function getIdMhs(mhs) {
//   return mhs.id;
// }

// console.log(getIdMhs(mhs));   //isi parameternya adalah const mhs

function getIdMhs({ id }) {   //dibongkar dulu object yg diterima, diambil id nya. klo mau ambil nama & id juga boleh
  return id;
}

console.log(getIdMhs(mhs)); 