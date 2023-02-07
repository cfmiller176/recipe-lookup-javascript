const form = document.querySelector('.js-food-form');
const foodContainer= document.querySelector('.js-food-container');


// https://www.themealdb.com/api/json/v1/1/search.php?s=Pie

console.log('JavaScript is running');

function callback(event) {
    event.preventDefault();
    alert('form got submitted');
}

form.addEventListener('submit', callback);

