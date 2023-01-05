import './style.css';
import getcomments from './module/commentspopup.js';
import { addLike, itemsCounter } from './module/homepageDisplay.js';

const linkbreakfast = document.querySelector('.link-breakfast');
const linkpasta = document.querySelector('.link-pasta');
const linkchicken = document.querySelector('.link-chicken');
// const li = document.querySelectorAll('li');

const breakfasturl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';

const pastaurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta';

const chickenurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken';

const displayitems = (element) => {
  const fooditem = document.querySelector('.food-container');
  fooditem.innerHTML = '';
  element.forEach((e) => {
    const div = document.createElement('div');
    div.classList.add('food-card');
    div.id = e.idMeal;
    div.innerHTML = `
     <div class="food-img"> <img src="${e.strMealThumb}" alt="#"></div>
      <h3 class="food-title">${e.strMeal}</h3>
      <div class="reactions">
      <button class="comments">Coments</button>
      <i data-id=${e.idMeal} class="fa-regular fa-heart"></i>
      <p data-id=${e.idMeal} class="likes">Likes</p>
     </div> `;
    const heartIcon = div.querySelector('.fa-heart');
    heartIcon.addEventListener('click', addLike);
    const comments = div.querySelector('.comments');
    comments.addEventListener('click', () => {
      getcomments(e.idMeal);
    });

    fooditem.appendChild(div);
  });
};

const getListitems = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();
  let  data1 = data.meals;
  
  linkbreakfast.innerHTML = `Breakfast (${itemsCounter(data1)})`;

  displayitems(data1);
  //return data1
};

// console.log(getListitems(breakfasturl))

linkbreakfast.addEventListener('click', async () => {
  getListitems(breakfasturl);

  // linkbreakfast.innerHTML = `Breakfast (${displayitems(breakfasturl)})`;
});

linkpasta.addEventListener('click', () => {
  getListitems(pastaurl);
  // linkpasta.innerHTML = `Pasta (${itemsCounter()})`;
});

linkchicken.addEventListener('click', () => {
  getListitems(chickenurl);
  // linkchicken.innerHTML = `Chicken (${itemsCounter()})`;
});