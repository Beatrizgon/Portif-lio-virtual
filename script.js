$(document).ready(function () {
    // Inicializar AOS (Animate on Scroll)
    AOS.init({
        duration: 500,
        easing: 'ease-out',
        once: true,
        // offset 0 + anchorPlacement 'top-bottom': o elemento já anima assim que
        // a borda superior dele encosta na base da tela, sem scroll extra
        offset: 0,
        anchorPlacement: 'top-bottom'
    });

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        
        // Back to Top Button
        if (this.scrollY > 500) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });
    
    // Smooth scroll para o botão voltar ao topo
    $('#backToTop').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
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
    $('.projects-filter').on('click', '.filter-btn', function () {
        const $btn = $(this);

        // Evita refazer o trabalho quando o filtro já está ativo
        if ($btn.hasClass('active')) return;

        $('.filter-btn').removeClass('active');
        $btn.addClass('active');

        const filter = $btn.data('filter');

        $('.project-card').each(function () {
            const card = this;
            // data-category aceita mais de uma categoria separada por espaço,
            // então um projeto pode aparecer em mais de um filtro
            const categorias = String($(card).data('category')).split(/\s+/);
            const visivel = filter === 'all' || categorias.indexOf(filter) !== -1;

            card.classList.remove('card-in');

            if (!visivel) {
                card.classList.add('is-hidden');
                return;
            }

            card.classList.remove('is-hidden');
            // Um card que ainda não tinha entrado na tela continua com
            // opacidade 0 do AOS. Ao subir para a primeira posição pelo
            // filtro, ele apareceria vazio até o próximo scroll.
            card.classList.add('aos-animate');
            // Força o reflow para reiniciar a animação de entrada
            void card.offsetWidth;
            card.classList.add('card-in');
        });

        // O grid mudou de altura: o AOS precisa recalcular os gatilhos
        // das seções seguintes
        if (window.AOS) {
            AOS.refresh();
        }
    });

    const frases = [
        "Desenvolvimento de Software",
        "IA aplicada",
        "Cloud Computing",
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
