import './style.css';
import getcomments from './module/commentspopup.js';
import { addLikes, getLikes } from './module/likes.js';

const linkbreakfast = document.querySelector('.link-breakfast');
const linkpasta = document.querySelector('.link-pasta');
const linkchicken = document.querySelector('.link-chicken');
// const li = document.querySelectorAll('li');

const breakfasturl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';

const pastaurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta';

const chickenurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken';

let selected = '';
// All items counter for homepage
const itemCounter = (item) => {
  selected.innerHTML = `${selected.textContent}(${item})`;
};

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
      <div class="likes"> </div>
     </div> `;
    // const heartIcon = div.querySelector('.fa-heart');
    // heartIcon.addEventListener('click', addLike);
    const comments = div.querySelector('.comments');
    comments.addEventListener('click', () => {
      getcomments(e.idMeal);
    });

    const numOflikes = div.querySelector('.likes');
    // counter for number of likes for each item
    const likesCounter = (like) => {
      const likesfound = like.find((element) => element.item_id === e.idMeal);
      numOflikes.innerHTML = likesfound !== undefined ? `<i class="fa-solid fa-thumbs-up"></i>(${likesfound.likes}) Likes` : '<i class="fa-solid fa-thumbs-up"></i>(0) Likes';
    };
    getLikes().then(likesCounter);

    // Add new likes
    numOflikes.addEventListener('click', () => {
      addLikes(e.idMeal);
      getLikes().then(likesCounter);
    });

    fooditem.appendChild(div);
  });
};

const getListitems = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();
  const data1 = data.meals;

  // linkbreakfast.innerHTML = `Breakfast (${itemsCounter(data1)})`;

  displayitems(data1);
  itemCounter(data1.length);
};

// console.log(getListitems(breakfasturl))

// linkbreakfast.addEventListener('click', async () => {
//   getListitems(breakfasturl);

//   // linkbreakfast.innerHTML = `Breakfast (${displayitems(breakfasturl)})`;
// });

linkbreakfast.addEventListener('click', () => {
  selected = linkbreakfast;
  linkpasta.textContent = 'Pasta';
  linkchicken.textContent = 'Chicken';
  getListitems(breakfasturl);
  linkbreakfast.style.textDecoration = 'underline';
  linkpasta.style.textDecoration = 'none';
  linkchicken.style.textDecoration = 'none';
});

linkpasta.addEventListener('click', () => {
  selected = linkpasta;
  linkbreakfast.textContent = 'Breakfast';
  linkchicken.textContent = 'Chicken';
  getListitems(pastaurl);
  linkpasta.style.textDecoration = 'underline';
  linkbreakfast.style.textDecoration = 'none';
  linkchicken.style.textDecoration = 'none';
});

linkchicken.addEventListener('click', () => {
  selected = linkchicken;
  linkbreakfast.textContent = 'Breakfast';
  linkpasta.textContent = 'Pasta';
  getListitems(chickenurl);
  linkchicken.style.textDecoration = 'underline';
  linkbreakfast.style.textDecoration = 'none';
  linkpasta.style.textDecoration = 'none';
});

// Display the first navigation bar items when the page refreshs
window.addEventListener('load', () => {
  getListitems(breakfasturl);
});

// linkpasta.addEventListener('click', () => {
//   getListitems(pastaurl);
//   // linkpasta.innerHTML = `Pasta (${itemsCounter()})`;
// });

// linkchicken.addEventListener('click', () => {
//   getListitems(chickenurl);
//   // linkchicken.innerHTML = `Chicken (${itemsCounter()})`;
// });