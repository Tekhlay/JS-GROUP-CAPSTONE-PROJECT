/**
 * @jest-environment jsdom
 */
import { communtCounter } from './module/commentspopup.js';

beforeAll(() => {
  document.body.innerHTML = `
  <div class="container">
          <header>
              <nav class="nav-bar">
                  <ul class="nav-item">
                      <li class="link-breakfast">Breakfast</li>
                      <li class="link-pasta">Pasta</li>
                      <li class="link-chicken">Chicken</li>
                  </ul>
              </nav>
          </header>
          <main class="food-container">
            
              
          </main>
      
          <footer>
              <div class="footer-content">Created by Microverse under CCI license</div>
          </footer>
      </div>`;
});

// const commentarr = ['comment1', 'comment2'];
describe('Test Comment counter function ', () => {
  test('number of Comments equals 0', () => {
    const fooditem = document.querySelector('.food-container');
    fooditem.innerHTML = `
    <p> Comment 1</p>
    `;
    const comments = fooditem.querySelectorAll('span');
    const count = communtCounter(comments);
    expect(count).toEqual(0);
  });
  test('number of Comments equals 2', () => {
    const fooditem = document.querySelector('.food-container');
    fooditem.innerHTML = `
    <p> Comment 1</p>
    <p> Comment 2</p>
    `;
    const comments = fooditem.querySelectorAll('p');
    const count = communtCounter(comments);
    expect(count).toEqual(2);
  });

  test('number of Comments equals 3', () => {
    const fooditem = document.querySelector('.food-container');
    fooditem.innerHTML = `
    <p> Comment 1</p>
    <p> Comment 2</p>
    <p> Comment 3</p>
    `;
    const comments = fooditem.querySelectorAll('p');
    const count = communtCounter(comments);
    expect(count).toEqual(3);
  });
});