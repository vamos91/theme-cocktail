import { Cocktail } from "../../interface"

export const getCountAlcoolCocktail = (cocktails: Cocktail[]) => {
    const cocktailsWithAlcool = cocktails.filter((item) => item.alcool === 1)
    return cocktailsWithAlcool.length
}