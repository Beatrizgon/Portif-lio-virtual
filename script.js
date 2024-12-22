$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').Class('sticky'); 
        }
    });
});

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

const projectCard = document.getElementById('projectCard');
        const infoCard = document.getElementById('infoCard');
        const closeBtn = document.getElementById('closeBtn');
        const overlay = document.querySelector('.overlay');

        // Mostrar overlay ao passar o mouse sobre o card
        projectCard.addEventListener('mouseenter', () => {
            overlay.style.display = 'flex';
        });

        projectCard.addEventListener('mouseleave', () => {
            overlay.style.display = 'none';
        });

        // Mostrar as informações do projeto ao clicar no card
        projectCard.addEventListener('click', () => {
            infoCard.style.display = 'block';
        });

        // Fechar o card de informações
        closeBtn.addEventListener('click', () => {
            infoCard.style.display = 'none';
        });