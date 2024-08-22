import { Cocktail, Ingredient, Measurement } from "../../interface";


export const getIngredientCaipirinha = (cocktails: Cocktail[], ingredients: Ingredient[], measurements: Measurement[]) => {
    const cocktailName = cocktails.find((item) => item.name = 'Caipirinha')
    const doses = measurements.filter((item) => item.cocktail_recipe_id === cocktailName?.id )
    //console.log(doses)
    const ingred = ingredients.filter((item) => {
        return doses.find((dose) => dose?.ingredient_id === item.id)
    })
    
    return ingred
}