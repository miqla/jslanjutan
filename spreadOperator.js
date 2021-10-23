// Spread Operator ...
// memecah iterables menjadi single element

// Array
// const mhs = ['Mila', 'Lorem', 'Ipsum'];
// console.log(...mhs);
// // string
// console.log(...mhs[0]);


// Menggabungkan 2 array atau lebih
// const mhs = ['Mila', 'Lorem', 'Ipsum'];
// const dosen = ['Agus', 'Mulia', 'Rabbani'];
// // const orang = [mhs, dosen]     error, ga digabung
// // const orang = [...mhs, ...dosen];
// // const orang = mhs.concat(dosen);   //sda
// const orang = [...mhs, 'Ila', ...dosen];    // bisa nambahin array ditengahnya
// console.log(orang);


// meng-copy array
// const mhs = ['Mila', 'Lorem', 'Ipsum'];
// // const mhs1 = mhs;   //tidak benar2 mengcopy, hanya merujuk ke mhs
// // mhs1[0] = 'Agus';   //index ke 0 di mhs1 dan mhs berubah semua
// const mhs1 =[...mhs];   //sekarang benar2 meng-copy mhs
// mhs1[0] = 'Agus';       //mhs1 nya berubah, mhs nya tidak berubah
// console.log(mhs);


// contoh lain
// ngambil dari index.html, copy ke const di file ini
      // cara biasa
// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++ ) {
//   mhs.push(liMhs[i].textContent);
// }
      // ngubah Node list jadi Array dgn ...
// const liMhs = document.querySelectorAll('li');    //ini hasilnya NodeList
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


// contoh lain, dari HTML nya
// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');   //join, biar array jadi string
// // console.log(huruf);
// nama.innerHTML = huruf;   //gabisa pake textContent

// _______________//_______________________//__________________//__________________

// Rest Parameter
// bentuknya array
// function myFunc(a,b, ...myArgs) {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   // return arguments;    //hasilnya bentuknya object
//   // return Array.from(arguments);    //biar hasil arguments nya = array
//   // return [...arguments];    //sda
// }
// console.log(myFunc(1,2,3,4,5));


// menjumlahkan seluruh parameter yg dikirimkan
// function jumlah(...angka) {

//   // pakai for of
//   // let total = 0;
//   // for (const a of angka) {
//   //   total += a;
//   // }
//   // return total;

//   // reduce
//   return angka.reduce((a,b) => a+b);
// }
// console.log(jumlah(1,2,3,4,5));


// Array destructuring
// const kelompok1 = ['Mila', 'Rabbani', 'Agus', 'Lorem', 'Ipsum'];
// const [ketua, wkil, ...anggota] = kelompok1;
// console.log(anggota);


// object destructuring
// const team = {
//   pm: 'Mila',
//   frontEnd1: 'Rabbani',
//   frontEnd2: 'Lorem',
//   backEnd: 'Ipsum',
//   ux: 'Agus',
//   devOps: 'Mulia'
// }
// const { pm, ...myTeam} = team;
// console.log(myTeam);


// Filter
// filtering pada parameter yg dikirimkan
function filterBy(type, ...values) {
  return values.filter(v => typeof v === type);
}
console.log(filterBy('number', 1, 2, 'Mila', false, 10, true, 'Rabbani'));
console.log(filterBy('string', 1, 2, 'Mila', false, 10, true, 'Rabbani'));
console.log(filterBy('boolean', 1, 2, 'Mila', false, 10, true, 'Rabbani'));