// Define the images
const images = [
  'img/background_01.jpg',
  'img/background_02.jpg',
  'img/background_03.jpeg',
];

// App state
let index =0;
const max = images.length;


// Interactuar con ellos
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// Escuchar el evento de click de flecha
prevSlideButton.addEventListener('click', function(){
  index--;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

// Boton siguiente
nextSlideButton.addEventListener('click', function(){
  index++;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

// funcion de utilidad

function setImageIndex(){
  if (index < 0) index= max -1;
  if (index === max) index =0;
}

function changeBackgroundImage(backgroundImage, element){
  element.style.backgroundImage = `url(${backgroundImage})`;
}
