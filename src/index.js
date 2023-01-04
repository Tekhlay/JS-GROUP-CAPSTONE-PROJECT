import './style.css';
import getdetails from './module/commentspopup.js';

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
      <p class="likes">Likes</p>
     </div> `;
    const comments = div.querySelector('.comments');
    comments.addEventListener('click', () => {
      getdetails(e.idMeal);
    });
    fooditem.appendChild(div);
  });
};

const getListitems = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();
  const data1 = data.meals;
  // console.log(data1);
  displayitems(data1);
};

linkbreakfast.addEventListener('click', () => {
  getListitems(breakfasturl);
});

linkpasta.addEventListener('click', () => {
  getListitems(pastaurl);
});

linkchicken.addEventListener('click', () => {
  getListitems(chickenurl);
});