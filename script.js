$(document).ready(function () {
    // Inicializar AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-overlay').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); 
    });
    $('.menu-overlay').click(function () {
        $('.navbar .menu').removeClass("active");
        $('.menu-overlay').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });
    $('.navbar .menu li a').click(function () {
        $('.navbar .menu').removeClass("active");
        $('.menu-overlay').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Filtro de Projetos
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const filter = $(this).data('filter');
        
        if (filter === 'all') {
            $('.project-card').fadeIn(300);
        } else {
            $('.project-card').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        }
    });

    const frases = [
        "Desenvolvedora Front-End",
        "Especialista em React & TypeScript",
        "Criadora de Soluções com IA",
        "Apaixonada por Tecnologia",
    ];

    const textoElemento = $("#animated-text");
    let fraseIndex = 0;
    let letraIndex = 0;
    let deletando = false;
    let velocidade = 80;

    function digitar() {
        const fraseAtual = frases[fraseIndex];
        if (!deletando) {
            textoElemento.text(fraseAtual.slice(0, letraIndex + 1));
            letraIndex++;
            if (letraIndex === fraseAtual.length) {
                deletando = true;
                setTimeout(digitar, 2000);
                return;
            }
        } else {
            textoElemento.text(fraseAtual.slice(0, letraIndex - 1));
            letraIndex--;
            if (letraIndex === 0) {
                deletando = false;
                fraseIndex = (fraseIndex + 1) % frases.length;
            }
        }
        setTimeout(digitar, velocidade);
    }

    digitar();
});
