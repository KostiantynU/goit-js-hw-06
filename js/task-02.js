const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulElIngredients = document.querySelector('#ingredients');
const arrEl = ingredients.map(el => {
  const myFutureLi = document.createElement('li');
  myFutureLi.classList.add('item');
  myFutureLi.textContent = el;
  return myFutureLi;
});
ulElIngredients.append(...arrEl);

// Другий варіант, іннерХтмл
// let ulElIngredients = document.querySelector('#ingredients');
// let textToInsert = document.createElement('li');
// textToInsert = ingredients.map(el => `<li class='item'>${el}</li>`).join('');
// ulElIngredients.innerHTML = textToInsert;
