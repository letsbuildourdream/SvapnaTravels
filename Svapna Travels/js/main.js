$(document).ready(function() {
    $('.nepal').owlCarousel({
        margin: 20,
        loop: true,
        nav: true,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            500: {
                items: 1,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            }
        }
    });
    $('.banner').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
    });
});

function abc() {
    if (document.getElementById('menu').style.display == 'none') {
        document.getElementById('menu').style.display = 'block';
    } else {
        document.getElementById('menu').style.display = 'none';
    }
}