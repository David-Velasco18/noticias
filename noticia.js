const pantalla = document.getElementById('noticias');
pantalla.innerHTML = "<p>Cargando... </p>";

const boton = document.getElementById('boton-refrescar');

boton.addEventListener ('click', cargarnoticias);
function cargarnoticias(){
    console.log("Botón conectado");
    const urlGNews = 'https://gnews.io/api/v4/top-headlines?category=general&lang=es&apikey=bb012ed3567af30afd984601e626332f';
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(urlGNews)}`;
    fetch (url)
    .then(response => response.json())
    .then(data => {console.log(data)
       
        pantalla.innerHTML = "";
        
        data.articles.forEach(noticia => {

        pantalla.innerHTML += `<div class="tarjeta-noticia">
        
            <img src="${noticia.image}" class="foto-noticia">
            <h3><a href="${noticia.url}" target="_blank"> ${noticia.title}</a></h3>
            <p>${noticia.description}</p>
            <p>${noticia.publishedAt}</p>

        </div>`;

    });
    })
    .catch(error => console.error ('Error', error));
    
}

cargarnoticias();

