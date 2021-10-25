// bikin promise
// const coba = new Promise(resolve => resolve('selesai'));    // ini syncoonous
// console.log(coba);


// biar dy nunggu dulu
// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai')
//   }, 2000);
// });
// coba.then(()=>console.log(coba));


// function cobaPromise() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('selesai')
//     }, 2000);
//   });
// }

// // const coba = cobaPromise();
// // coba.then(()=>console.log(coba));

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }
// cobaAsync();




function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;       //3000ms
    if(waktu < 5000) {
      setTimeout(() => {
        resolve('selesai')
      }, waktu);
    } else {
      reject('kelamaan!');
    }
  });
}
// const coba = cobaPromise();
// coba
//   .then(()=>console.log(coba))
//   .catch(()=>console.log(coba));

async function cobaAsync() {
  // try untuk .then, catch untuk .catch
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch(err) {
    // console.log(err);
    console.error(err);   //biar warnanya merah
  }
}
cobaAsync();
