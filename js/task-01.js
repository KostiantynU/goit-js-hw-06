// ---------- task 01:01
const liOfUl = document.querySelectorAll('#categories .item');
let countOfCategories = 0;
liOfUl.forEach(() => (countOfCategories += 1));
console.log('Number of categories:', countOfCategories);
// ---------- task 01:02
const liElItem = document.querySelectorAll('.item');
liElItem.forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Elements:', el.lastElementChild.children.length);
});
