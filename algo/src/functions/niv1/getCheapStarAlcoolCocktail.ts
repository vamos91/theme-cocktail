import { Cocktail } from "../../interface"

export const getCheapStarAlcoolCocktail = (cocktails: Cocktail[]): Cocktail[] => {
    return cocktails.filter((item) => item.rating > "2" && item.alcool === 1 && item.rate === "1")
}