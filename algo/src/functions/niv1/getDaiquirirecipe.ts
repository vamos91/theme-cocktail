import { Cocktail } from "../../interface";

export const getDaiquirirecipe = (cocktails: Cocktail[]) => {
    return cocktails.find((item) => item.name === 'Banana Daiquiri')
}