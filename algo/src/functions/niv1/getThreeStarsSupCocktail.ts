import { Cocktail } from "../../interface"

export const getThreeStarsSupCocktail = (cocktails: Cocktail[]): Cocktail[] => {
    return cocktails.filter((item) => item.rating > "3")
}