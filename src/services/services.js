const URL_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

export const getCocktails = async() => {
    const response = await fetch(URL_API);
    const data = response.json();
    return data;
}