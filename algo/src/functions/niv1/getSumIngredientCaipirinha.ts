import { Cocktail, Measurement } from "../../interface"

export const getSumIngredientCaipirinha = (cocktails: Cocktail[], measurements: Measurement[]): number => {
    const cocktailName = cocktails.find((item) => item.name = 'Caipirinha')
    const doses = measurements.filter((item) => item.cocktail_recipe_id === cocktailName?.id )
    //console.log(doses)
    let resultat = 0
    for (let index = 0; index < doses.length; index++) {
        resultat += Number(doses[index].quantity_amount)
    }
    return resultat
}