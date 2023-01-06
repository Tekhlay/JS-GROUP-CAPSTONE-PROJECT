import './style.css';
import menu from './images/menu.jpg';
import getListitems from './module/getALLitems.js';

const linkbreakfast = document.querySelector('.link-breakfast');
const linkpasta = document.querySelector('.link-pasta');
const linkchicken = document.querySelector('.link-chicken');

const image = new Image();
image.src = menu;
image.style.width = '70px';
const logoTag = document.querySelector('.logo');
logoTag.appendChild(image);

let selected = '';

// Link address for each navigation bars
const breakfasturl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';
const pastaurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta';
const chickenurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken';

// Display the first navigation bar items when the page refreshs
window.addEventListener('load', () => {
  selected = linkbreakfast;
  linkpasta.textContent = 'Pasta';
  linkchicken.textContent = 'Chicken';
  getListitems(selected, breakfasturl);
  linkbreakfast.style.textDecoration = 'underline';
  linkpasta.style.textDecoration = 'none';
  linkchicken.style.textDecoration = 'none';
});

// Event for breakfast navigation bar
linkbreakfast.addEventListener('click', () => {
  selected = linkbreakfast;
  linkpasta.textContent = 'Pasta';
  linkchicken.textContent = 'Chicken';
  getListitems(selected, breakfasturl);
  linkbreakfast.style.textDecoration = 'underline';
  linkpasta.style.textDecoration = 'none';
  linkchicken.style.textDecoration = 'none';
});

// Event for past navigation bar
linkpasta.addEventListener('click', () => {
  selected = linkpasta;
  linkbreakfast.textContent = 'Breakfast';
  linkchicken.textContent = 'Chicken';
  getListitems(selected, pastaurl);
  linkpasta.style.textDecoration = 'underline';
  linkbreakfast.style.textDecoration = 'none';
  linkchicken.style.textDecoration = 'none';
});

// Event for chicken navigation bar
linkchicken.addEventListener('click', () => {
  selected = linkchicken;
  linkbreakfast.textContent = 'Breakfast';
  linkpasta.textContent = 'Pasta';
  getListitems(selected, chickenurl);
  linkchicken.style.textDecoration = 'underline';
  linkbreakfast.style.textDecoration = 'none';
  linkpasta.style.textDecoration = 'none';
});