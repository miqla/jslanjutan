// Callback
// Synchronous Callback = sebuah function yg parameternya adalah function juga
// function halo (nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan Nama : ');
//   callback(nama);
// }

// // tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Halo ${nama}`));


// contoh synchronous yg lain
// const mhs = [
//   {
//     "nama": "Mila Rabbani",
//     "nrp": "123456789",
//     "email" : "mila@mila.id",
//     "jurusan" : "Teknik Informatika",
//     "idDosenWali": 1
//   },
//   {
//     "nama": "Lorem Ipsum",
//     "nrp": "456789123",
//     "email" : "lorema@mila.id",
//     "jurusan" : "Teknik Mesin",
//     "idDosenWali": 2
//   },
//   {
//     "nama": "Agus Lorem",
//     "nrp": "789123456",
//     "email" : "agus@mila.id",
//     "jurusan" : "Teknik Industri",
//     "idDosenWali": 3
//   }
// ];

// console.log('mulai');
// mhs.forEach(m => console.log(m.nama));   //cetak namanya aja
// console.log('selesai');

// -----------------/---------------/-------------/----------------/---------------/--------------

// Asynchronous Callback
// ajax dgn vanilla javascript
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   }

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// // jalankan function nya
// getDataMahasiswa('data/mahasiswa.json', results => {
//   // console.log(JSON.parse(results));   // parse text to object
//   const mhs = JSON.parse(results);
//   mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');


// Ajax dengan JQuery
console.log('mulai');
// $= jquery, jalanin ajax yg parameternya object, yg propertinya macem2, kayak url. lalu kalo success
$.ajax({
  url: 'data/mahasiswa.json',
  success: (mhs) => {
    // console.log(mhs);    //bisa gini doang, hasilnya object (array)
    mhs.forEach(m => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  }
});
console.log('selesai');
