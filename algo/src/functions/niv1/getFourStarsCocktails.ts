import { Cocktail } from "../../interface"

export const getFourStarsCocktails = (cocktails: Cocktail[]): Cocktail[] => {
    return cocktails.filter((item) => item.rating === "4")
}