import { Cocktail, Ingredient, Measurement } from "../../interface"

export const getGinCocktail = (cocktails: Cocktail[], ingredient: Ingredient[], measurement: Measurement[]) => {
    const ingredientName = ingredient.find((item) => item.name === 'Gin')
    const cocktail_has_measurement = measurement.filter((item) => item.ingredient_id === ingredientName?.id)
    const resultat = cocktail_has_measurement.map((item) => {
        return cocktails.find((cocktail) => cocktail.id === item.cocktail_recipe_id)
    })
    // const resultat = measurement.filter((item) => item.ingredient_id === ingredient.find((item) => item.name === 'Gin')?.id).map((item) => {
    //     return cocktails.find((cocktail) => cocktail.id === item.cocktail_recipe_id)
    // })
    return resultat
}