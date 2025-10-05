$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Função para o projeto 1
    const projectCard1 = document.getElementById('projectCard1');
    const overlay1 = document.getElementById('overlay1');

    projectCard1.addEventListener('mouseenter', () => {
        overlay1.style.display = 'flex';
    });

    projectCard1.addEventListener('mouseleave', () => {
        overlay1.style.display = 'none';
    });

    // Função para o projeto 2
    const projectCard2 = document.getElementById('projectCard2');
    const overlay2 = document.getElementById('overlay2');

    projectCard2.addEventListener('mouseenter', () => {
        overlay2.style.display = 'flex';
    });

    projectCard2.addEventListener('mouseleave', () => {
        overlay2.style.display = 'none';
    });
});

const frases = [
  "Desenvolvedora Front-End",
  "Estudante de ADS",
  "Apaixonada por tecnologia e inovação",
];

const textoElemento = document.getElementById("animated-text");
let fraseIndex = 0;
let letraIndex = 0;
let deletando = false;
let velocidade = 100; // tempo entre cada letra

function digitar() {
  const fraseAtual = frases[fraseIndex];
  
  if (!deletando) {
    textoElemento.textContent = fraseAtual.slice(0, letraIndex + 1);
    letraIndex++;

    if (letraIndex === fraseAtual.length) {
      deletando = true;
      setTimeout(digitar, 1500); // espera 1,5s antes de deletar
      return;
    }
  } else {
    textoElemento.textContent = fraseAtual.slice(0, letraIndex - 1);
    letraIndex--;

    if (letraIndex === 0) {
      deletando = false;
      fraseIndex = (fraseIndex + 1) % frases.length;
    }
  }
  setTimeout(digitar, velocidade);
}

digitar();



