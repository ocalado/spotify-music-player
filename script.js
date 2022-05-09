// variável que será a música tocada no momento 

let musicas = [
    {
        titulo: 'Guitar song',
        artista: 'Jonny',
        src:'musicas/We Ride! - Reed Mathis.mp3',
        img:'imagens/hector-bermudez-iIWDt0fXa84-unsplash .jpg'
    },
    {
        titulo: 'Samba guy',
        artista: 'Mirovaldo',
        src:'musicas/Ella Vater - The Mini Vandals.mp3',
        img:'imagens/lua-vazia-0rlJUkeFzqY-unsplash.jpg'
    },
    {
        titulo: 'Piano Bar',
        artista: 'Ludwin',
        src:'musicas/A Brand New Start - TrackTribe.mp3',
        img:'imagens/darius-soodmand-F8E2tks5N04-unsplash.jpg'
    }
]

let musica = document.querySelector('audio');
let indexMusica = 0;
let musicaDuracao = document.querySelector('.fim'); 
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


renderizarMusica(indexMusica);

// Eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra)

// eventos para 

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2; 
    }
    renderizarMusica(indexMusica);
});
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        musicaDuracao.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}


function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra (){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos (segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    
    return `${campoMinutos}:${campoSegundos}`; 
}

window.onload = function() {
    musicaDuracao.textContent = segundosParaMinutos(Math.floor(musica.duration));
};




