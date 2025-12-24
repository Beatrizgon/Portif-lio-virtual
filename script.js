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
    $('#projectCard1').hover(
        function () { $('#overlay1').css('display', 'flex'); },
        function () { $('#overlay1').css('display', 'none'); }
    );

    $('#projectCard2').hover(
        function () { $('#overlay2').css('display', 'flex'); },
        function () { $('#overlay2').css('display', 'none'); }
    );
    const frases = [
        "Desenvolvimento Front-End",
        "Estudante de ADS",
        "Tecnologia e inovação",
    ];

    const textoElemento = $("#animated-text");
    let fraseIndex = 0;
    let letraIndex = 0;
    let deletando = false;
    let velocidade = 100;

    function digitar() {
        const fraseAtual = frases[fraseIndex];
        if (!deletando) {
            textoElemento.text(fraseAtual.slice(0, letraIndex + 1));
            letraIndex++;
            if (letraIndex === fraseAtual.length) {
                deletando = true;
                setTimeout(digitar, 1500);
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
