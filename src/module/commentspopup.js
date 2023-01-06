import { CommentForm, displayComents, getComments } from './comment.js';

// Comments pop up menu
const popup = (items, comments) => {
  // console.log(comments);
  const fooditem = document.querySelector('.food-container');
  const popupwindow = document.createElement('article');
  popupwindow.classList.add('popup-window');
  const btnclose = document.createElement('div');
  btnclose.classList.add('close');
  btnclose.innerHTML = '&times;';
  const commentCard = document.createElement('div');
  commentCard.classList.add('comment-card');
  displayComents(comments, commentCard);
  const newForm = document.createElement('div');
  CommentForm(items.idMeal, newForm);
  const popdata = document.createElement('div');
  popdata.classList.add('pop-content');
  popdata.innerHTML = `
 <div class="food-details">
 <img src="${items.strMealThumb}" alt="" width="250px">
 <h2>${items.strMeal}</h2>
 <h4>Ingridents </h4>
 <ol><li>${items.strIngredient1}</li>
 <li>${items.strIngredient2}</li>
 <li>${items.strIngredient3}</li>
 <li>${items.strIngredient4}</li>
 </ol>
 <h4>Recipe Instructions </h4>
 <p class='recipe'> ${items.strInstructions} </p>
 <a class='youtube' href = "${items.strYoutube}"> Watch Tutorial on YouTube </a>
 </div>
  `;
  btnclose.addEventListener('click', () => {
    fooditem.removeChild(popupwindow);
  });
  popupwindow.appendChild(btnclose);
  popupwindow.appendChild(popdata);
  popupwindow.appendChild(commentCard);
  popupwindow.appendChild(newForm);
  fooditem.appendChild(popupwindow);
};

// get number of comments provided for a single item using item id
const getdetails = async (id) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const request = new Request(url + id);
  const response = await fetch(request);
  const result = await response.json();
  const singleItem = result.meals[0];
  const commentData = await getComments(id);
  popup(singleItem, commentData);
};

export { getdetails as default };