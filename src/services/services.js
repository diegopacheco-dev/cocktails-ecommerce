const URL_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

export const getCocktails = async() => {
    const response = await fetch(URL_API);
    const data = await response.json();
    const drinks = data.drinks.map(drink => ({
        ...drink,
        precio: Math.ceil(Math.random() * (10) + 10) + 0.9,
    }))
    return drinks;
}