const URL_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";

export const getCocktails = async() => {
    const response = await fetch(URL_API+"f=a");
    const data = await response.json();
    const drinks = data.drinks.map(drink => ({
        ...drink,
        precio: Math.ceil(Math.random() * (10) + 10) + 0.9,
    }))
    return drinks;
}

export const searchCocktail = async(search) => {
    const response = await fetch(`${URL_API}s=${encodeURI(search)}`)
    const data = await response.json();
    if (data?.drinks?.length > 0) {
        const drinks = data.drinks.map(drink => ({
            ...drink,
            precio: Math.ceil(Math.random() * (10) + 10) + 0.9,
        }))
        return drinks;
    } else {
        return []
    }
}
