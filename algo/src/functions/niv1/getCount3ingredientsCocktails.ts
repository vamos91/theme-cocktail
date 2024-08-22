import { Cocktail, Ingredient, Measurement } from "../../interface"

//Afficher le nombre de cocktail à base de Milk ou de Strawberries ou de Mango
export const getCount3ingredientsCocktails = (cocktails: Cocktail[], ingredients: Ingredient[], measurements: Measurement[]) => {
    const ingred = ingredients.filter((item) => item.name === 'Milk' || item.name === 'Strawberries' || item.name === 'Mango')
   const doses = measurements.filter((item) => {
        return ingred.find((ingredient) => ingredient.id === item.ingredient_id)
    })
    const cockt = cocktails.filter((item) => {
       return doses.find((dose) => dose.cocktail_recipe_id === item.id)
    })
    return cockt.length
}