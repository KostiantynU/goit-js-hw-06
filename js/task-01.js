// ---------- task 01
const ulEl = document.querySelector('#categories');
const liOfUl = ulEl.children;
console.log('Number of categories:', liOfUl.length);
// А якщо треба порахувати, то:
let countOfCategories = 0;
const temp = Array.from(liOfUl).forEach(el => (countOfCategories += 1));
console.log('Number of categories:', countOfCategories);
// ---------- task 02
const liElItem = ulEl.childNodes;
console.log(liElItem[1].textContent);
