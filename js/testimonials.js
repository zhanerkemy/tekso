let images = [
    'img/testimonial.jpg',
    'img/keena.jpg',
    'img/feeze.jpg',
    'img/jhone.jpg'
];

let names = [
    'Afa Rose',
    'Keena Lara',
    'Fizzi Brandon',
    'Jhone Doe'
];

let occupations = [
    'Web Designer',
    'Store Owner',
    'Freelancer',
    'CFO'
];


let currentIndex = 0;

function changeContent() {
    document.getElementById('image').src = images[currentIndex];
    document.getElementById('name').textContent = names[currentIndex];
    document.getElementById('occupation').textContent = occupations[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeContent, 4000);

let dots = document.querySelectorAll('.dots .dot');

function changeColor() {
    dots[currentIndex].classList.remove('green'); 
    currentIndex = (currentIndex + 1) % dots.length; 
    dots[currentIndex].classList.add('green'); 
}

setInterval(changeColor, 4000); 

