const textElement = document.getElementById('text');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

// Lista de textos aleatórios
const texts = [
    "Poema do Cume",
    "No alto daquele cume", 
    "Plantei uma roseira", 
    "O vento no cume bate", 
    "A rosa no cume cheira",
    "Quando vem a chuva fina",
    "Salpicos no cume caem",
    "Formigas no cume entram",
    "Abelhas do cume saem",
    "Quando cai a chuva grossa",
    "A água do cume desce",
    "O barro do cume escorre",
    "O mato no cume crescem",
    "Então, quando cessa a chuva",
    "No cume volta a alegria",
    "Pois torna a brilhar de novo",
    "O Sol que no cume ardia",

];


let currentIndex = 0;
let currentIndex2 = 0;

// Função para exibir o próximo texto no carrossel
function showNextText() {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.textContent = texts[currentIndex];
}

// Função para exibir o texto anterior no carrossel
function showPrevText() {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    textElement.textContent = texts[currentIndex];
}

// Exibe o primeiro texto inicialmente
textElement.textContent = texts[currentIndex];

// Adiciona evento de clique para o botão "Próximo"
nextButton.addEventListener('click', showNextText);

// Adiciona evento de clique para o botão "Anterior"
prevButton.addEventListener('click', showPrevText);
