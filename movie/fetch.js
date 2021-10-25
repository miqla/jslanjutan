// Ini copas dari file callback.js

// fetch
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {

  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?apikey=38c2cf77&s=' + inputKeyword.value)
    .then(response => response.json())   //tambahin .json() biar data yg tampil berupa json,    tapi ini masih tetap didalam promise
    // .then(response => console.log(response));   // pake .then lagi biar hasilnya object, ga didalam promise lagi
    .then(response =>{        // ambil filmnya masukin kedalam card
      const movies = response.Search;
      let cards = '';
      movies.forEach(m => cards += showCards(m));

      // masukin kedalam movie container yg di file HTML nya
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;

      // ketika tombol detail di-klik
      const modalDetailButton = document.querySelectorAll('.modal-detail-button');
      // karna querySelectorAll hasilnya NodeList, kita harus looping dulu arraynya
      modalDetailButton.forEach(btn => {
        btn.addEventListener('click', function() {    // habistu baru bisa dikasih event
          // this = tombol ShowDetail yg di-klik, ambil attribute dataset-nya (data-namaData), yg namanya imdbid
          const imdbid = this.dataset.imdbid;
          fetch('http://www.omdbapi.com/?apikey=38c2cf77&s=' + imdbid)
            .then(response => response.json())    //then sekali lagi karna masih promise
            .then(m => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector('.modal-body');
              modalBody.innerHTML = movieDetail;
              // $('.modal-body').html(movieDetail);    versi jquery
            });
        });
      });
    });
});


// biar rapih, struktur HTML tambahan nya dimasukin kedalam function
function showCards(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;                      
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                  <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                  <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`;
}