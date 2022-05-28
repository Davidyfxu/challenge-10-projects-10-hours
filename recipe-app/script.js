function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");
  meal.innerHTML = `<div class="meal-header">
  ${random ? `<span class="random">Random Recipe</span>` : ""}
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
          </div>
          <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
              <i class="fa fa-heart"></i>
            </button>
          </div>`;
  const btn = meal.querySelector(".meal-body .fav-btn");
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      removeMealsLS(mealData.idMeal);
      btn.classList.remove("active");
    } else {
      addMealsLS(mealData.idMeal);
      btn.classList.add("active");
    }
  });
  meals.appendChild(meal);
}

const getRandomMeal = async () => {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];
  addMeal(randomMeal, true);
};
const getMealById = async (id) => {
  const meal = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
};
const getMealsBySearch = async (term) => {
  const meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
};

const meals = document.getElementById("meals");
getRandomMeal();

function updateLocalStorage(meal) {}

function getMealsFromLS() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));
  return mealIds === null ? [] : mealIds;
}
function removeMealsLS(mealId) {
  const mealIds = getMealsFromLS();
  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id !== mealId))
  );
}
function addMealsLS(mealId) {
  const mealIds = getMealsFromLS();
  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}
