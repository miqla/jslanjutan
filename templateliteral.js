// Template Literals / Template String / String Literals
// const nama = 'Mila';
// const umur = 33;
// console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`)


// // Embedded Expressions
// console.log(`${1+1}`);
// // console.log(`${alert('Halo!')}`);


// // ternary operator
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// ---------------------/--------------/-----------------/---------------/-----------------/-----

// 1. HTML Fragments
// const mhs = { 
//   nama: 'Mila Rabbani',
//   umur: 33,
//   nrp: '123456789',
//   email: 'mila@mila.id'
// };

// const el = `<div class="class">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);

// 2. Looping, Array of Object (array yg isinya object)
// const mhs = [
//   {
//     nama : 'Mila Rabbani',
//     email: 'mila@mila.id'
//   },
//   {
//     nama : 'Lorem Ipsum',
//     email: 'lorem@mila.id'
//   },
//   {
//     nama : 'Ipsum Mulia',
//     email: 'ipsum@mila.id'
//   },
// ];

// // m = item, .join= delete koma, karna isinya array,
// const el = `
//   <div class="mhs">
//     ${mhs.map(m => `<ul>
//       <li>${m.nama}</li>
//       <li>${m.email}</li>
//     </ul>`).join('')}
//   </div>
// `;



// 3. Conditionals (if)
// ternary
// const lagu = {
//   judul: 'Tetap Dalam Jiwa',
//   penyanyi: 'Isyana Sarasvati'
// }

// const lagu = {
//   judul: 'Kau Adalah',
//   penyanyi: 'Isyana Sarasvati',
//   feat: 'Rayi Putra'
// }

// const el = `
//   <div class="lagu">
//     <ul>
//       <li>${lagu.penyanyi}</li>
//       <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>  
//   </div>
// `;



// 4. Nested
// HTML Fragments bersarang

// const mhs = {
//   nama: 'Mila Rabbani',
//   semester: 5,
//   mataKuliah: [
//     'Rekayasa Web',
//     'Analisis dan perancangan Sistem Informasi',
//     'Pemrograman Sistem Interaktif',
//     'Perancangan Sistem Berorientasi Object'
//   ]
// };

// function cetakMataKuliah(matakuliah) {
//   return `
//     <ol>
//       ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>
//   `;
// }

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="semester">Semester : ${mhs.semester}</span>
//   <h4>Mata Kuliah :</h4>
//   ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;   //munculin ke websitenya



// ---------------/-----------------/------------------/----------------------/--------------



// Tagged Templates
// Bisa menerima parameter, lalu ada yg namanya RestParameter ...
// const nama = 'Mila Rabbani';
// const umur = 33;

// function coba(strings, ...values) {

//   // return values;

//   // let result = '';
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`;     //kasih '' biar undefined nya ga ditampilkan
//   // });
//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Highlight
const nama = 'Mila Rabbani';
const umur = 33;
const email = 'mila@mila.id';

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

// String ini dilewatkan dulu kedalam function
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;
document.body.innerHTML = str;