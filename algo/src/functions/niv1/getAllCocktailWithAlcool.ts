import { Cocktail } from "../../interface"

export const getAllCocktailWithAlcool = (cocktails: Cocktail[]): Cocktail[] => {
    return cocktails.filter((item) => item.alcool === 1)
}