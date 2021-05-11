document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 300,
        dist: -300,
        shift: 5,
        numVisible:5,
        indicators: false,
        nowWrap: false
    });

    // var instances = M.Carousel.init(elementosCarousel);

    window.next = function() {
        var el = document.querySelector(".carousel");
        var l = M.Carousel.getInstance(el);
        l.next(1);
    }

    window.prev = function() {
        var el = document.querySelector(".carousel");
        var l = M.Carousel.getInstance(el);
        l.prev(1);
    }

    let $next = document.querySelector('.next');
    let $prev = document.querySelector('.prev');
    $next.addEventListener('click',next);
    $prev.addEventListener('click',prev);
    $carousel = document.querySelector('.carousel');

    playInterval();
    $carousel.addEventListener('mouseover', stopInterval);
    $next.addEventListener('mouseover', stopInterval);
    $prev.addEventListener('mouseover', stopInterval);
    $carousel.addEventListener('mouseout', playInterval);
    $next.addEventListener('mouseout', playInterval);
    $prev.addEventListener('mouseout', playInterval);

    function playInterval() {
		intervalo = setInterval(next, 5000);
		// Desactivamos los botones de control
		// $next.setAttribute('disabled', true);
		// $botonRetroceder.setAttribute('disabled', true);
		// $botonPlay.setAttribute('disabled', true);
		// $botonStop.removeAttribute('disabled');

	}

    function stopInterval() {
        clearInterval(intervalo);
    }
});






