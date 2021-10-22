// Template Literals / Template String / String Literals
const nama = 'Mila';
const umur = 33;
console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`)

// Embedded Expressions
console.log(`${1+1}`);
// console.log(`${alert('Halo!')}`);

// ternary operator
const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = { 
  nama: 'Mila Rabbani',
  umur: 33,
  nrp: '123456789',
  email: 'mila@mila.id'
};

const el = `<div class="class">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);