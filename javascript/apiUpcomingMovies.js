
  
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTZkYTUxYTUxMzI0ODg3YTlhMTRiYWJlYzQ0NGZmYiIsInN1YiI6IjY2NTdlNGJiMDZiZjY4N2E2N2E4ZDE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zlHUFujN1HNRKnsquHwLkcTwfbu8iRnf87gjHQo9jEs'
const API_URL ='https://api.themoviedb.org/3';

let currentPage = 1;

function llamarAPI(page){
    fetch(`${API_URL}/movie/upcoming?page=${page}`,{
        headers : {
            Authorization: `Bearer ${API_KEY}`,
        }
    })
    .then(response => response.json())
   // .then(data => console.log(data));
   .then(data => dibujarDatos(data));
}

//llamarAPI(1);
function dibujarDatos(json){
    const filas = json.results.map(objeto => pelicula(objeto));
    document.querySelector('.galeria').innerHTML = filas.join('');
}


function pelicula(objeto){
    return `
                <a href="">
                    <div class="imagen">
                        <img src="https://image.tmdb.org/t/p/w500/${objeto.poster_path}" alt="${objeto.title}" class="img-galeria">
                        <div>
                            <h4 class="tituloSection">${objeto.title}</h4>
                        </div>

                    </div>
                </a>
    
    `

}


//FUNCION PARA CARGAR LA SGTE PAG 
function cargarPagSgte(){
    currentPage ++;
    llamarAPI(currentPage);
}

//FUNCION PARA CARGAR LA PAG ANTERIOR
function cargarPagAnterior(){
    if(currentPage>1){
    currentPage --;
    llamarAPI(currentPage);
    }
}

//AGREGAR EVENTOS A LOS BOTONES
document.querySelector('.anterior').addEventListener('click', cargarPagAnterior);
document.querySelector('.siguiente').addEventListener('click', cargarPagSgte);

llamarAPI(currentPage);