const getRandomMeal = async () => {
  const resp = await fetch("www.themealdb.com/api/json/v1/1/random.php");
  const randomMeal = await resp.json();
  console.log(randomMeal);
};
const getMealById = async (id) => {
  const meal = await fetch(
    `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
};
const getMealsBySearch = async (term) => {
  const meals = await fetch(
    `www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
};
getRandomMeal();
