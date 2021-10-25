// Ajax dengan JQuery
// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=38c2cf77&s=avengers',
//   success: movies => console.log(movies)
// });


// object AJAX dengan Vanilla JavaScript
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//     }   
//   }
//     else{
//       console.log(xhr.responseText);
//   }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=38c2cf77&s=avengers');
// xhr.send();


// Sintaks JavaScript
// console.log(fetch('http://www.omdbapi.com/?apikey=38c2cf77&s=avengers'))
// fetch('http://www.omdbapi.com/?apikey=38c2cf77&s=avengers')
  // .then(response => response.json())
  // .then(response => console.log(response));


// -------------------/------------------/-----------------/------------------/-------------

// Promise
// Object yang merepresantasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
  // biasanya dipakai ketika request ke API
// janji (terpenuhi / ingkar)
// states / keadaan (fulfilled / rejected / pending)
// untuk menjalankan keadaan, kita perlu callback
// Callback (resolve / reject / finally)
// Aksi (then / catch). then akan menjalankan resolve, catch akan menjalankan reject


// Contoh1    lngsung ditepati
// let ditepati = true;
// // let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati');
//   } else {
//     reject('Ingkar Janji..');
//   }
// });
// // console.log(janji1);

// janji1
//   .then(response => console.log('OK : ' + response))    //nangkap resolve
//   .catch(response => console.log('NOT OK : ' + response))   //nangkap reject


// Contoh 2     nunggu dulu, ga langsung ditepati
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(()=>{
//       resolve('Janji telah ditepati setelah beberapa waktu!');
//     }, 2000);
//   } else {
//     setTimeout(()=>{
//       reject('Janji tidak ditepati setelah beberapa waktu!');
//     }, 2000);
//   }
// });

// console.log('mulai');
// //console.log(janji2.then(()=> console.log(janji2)));      //kita bisa lihat prosesnya

// janji2     //lngsung dijalankan dgn method asynchronous
//   .finally(() => console.log('Selesai menunggu'))       //dijalankan duluan ketika then & fetch siap dijalankan, biasanya dijalankan utk matiin animasi loading
//   .then(response => console.log('OK : ' + response))  
//   .catch(response => console.log('NOT OK : ' + response))   
// console.log('selesai');

// --------------------/--------------------/-------------------------/---------------/

// Promise.all()    (method utk menjalankan banyak promise sekaligus)
// anggap kita terhubung ke API Film
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{    //anggap aja json
      judul: 'Avengers',
      sutradara: '"Mila',
      pemeran: 'Lorem, Ipsum'
    }])
  }, 1000);
});
// anggap kita terhubung ke API cuaca
const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{    //anggap aja json
      kota: 'Bandung',
      temp: 26,
      kondisi: 'Cerah Berawan'
    }])
  }, 500);
});

// kalo mau jalanin promise nya satu persatu
film.then(response => console.log(response));
cuaca.then(response => console.log(response));

// Kalo mau langsung jalanin semuanya   (hasilnya array)
Promise.all([film, cuaca])
  .then(response => console.log(response));

// kalo gamau gabung array nya kayak hasil diatas, bisa pake destructing
Promise.all([film, cuaca])
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });