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
