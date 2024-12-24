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
