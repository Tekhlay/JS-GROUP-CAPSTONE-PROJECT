const fooditem = document.querySelector('.food-container');

const popup = (items) => {
  const popupwindow = document.createElement('article');
  popupwindow.classList.add('popup-window');
  const btnclose = document.createElement('div');
  btnclose.classList.add('close');
  btnclose.innerHTML = '&times;';
  const popdata = document.createElement('div');
  popdata.classList.add('pop-content');
  popdata.innerHTML = `
 <div class="food-details">
 <img src="${items.strMealThumb}" alt="" width="250px">
 <h2>${items.strMeal}</h2>
 <h4>Ingridents </h4>
 <p>${items.strIngredient1},${items.strIngredient2},${items.strIngredient3} </p>
 <h4>Recipe Instructions </h4>
 <p class='recipe'> ${items.strInstructions} </p>
 </div>
  `;
  btnclose.addEventListener('click', () => {
    fooditem.removeChild(popupwindow);
  });
  popupwindow.appendChild(btnclose);
  popupwindow.appendChild(popdata);
  fooditem.appendChild(popupwindow);
};

const getdetails = async (id) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const request = new Request(url + id);
  const response = await fetch(request);
  const result = await response.json();
  const singleItem = result.meals[0];
  popup(singleItem);
  // console.log(singleItem);
};

export { getdetails as default };