const cv = document.querySelector('.cv');
cv.addEventListener('mouseenter', function() {
    cv.style.color = 'black';
    cv.style.backgroundColor = 'white';

    cv.addEventListener('mouseleave', function() {
        cv.style.color = 'white';
        cv.style.backgroundColor = 'black';
    });
});

const about = document.querySelector('.about-btn');
about.addEventListener('mouseenter', function() {
    about.style.color = 'black';
    about.style.backgroundColor = 'white';

    about.addEventListener('mouseleave', function() {
        about.style.color = 'black';
        about.style.backgroundColor = '#ffc107';
    });
});

const hover = document.querySelector('#submit');

hover.addEventListener('mouseenter', function() {
    hover.style.color = 'white';
    hover.style.backgroundColor = 'black';


    hover.addEventListener('mouseleave', function() {
        hover.style.color = 'black';
        hover.style.backgroundColor = 'white';
    });
});

function myFunction() {
    alert("Terima Kasih Masukannya Ya Semua")
}