import { cocktails } from "./data/cocktail_recipe";
import { ingredients } from "./data/ingredient";
import { measurements } from "./data/measurement";
import { getDaiquirirecipe } from './functions/niv1/getDaiquirirecipe'
import { getAllCocktailWithAlcool } from './functions/niv1/getAllCocktailWithAlcool'
import { getFourStarsCocktails } from "./functions/niv1/getFourStarsCocktails";
import { getThreeStarsSupCocktail } from "./functions/niv1/getThreeStarsSupCocktail";
import { getCheapStarAlcoolCocktail } from "./functions/niv1/getCheapStarAlcoolCocktail";
import { getGinCocktail } from "./functions/niv1/getGinCocktail";
import { getCountAlcoolCocktail } from "./functions/niv1/getCountAlcoolCocktail";
import { getCount3ingredientsCocktails } from "./functions/niv1/getCount3ingredientsCocktails";
import { getIngredientCaipirinha } from "./functions/niv1/getIngredientCaipirinha";
import { getSumIngredientCaipirinha } from "./functions/niv1/getSumIngredientCaipirinha";

//Sélectionnez le cocktail du Banana Daiquiri:
const daiquiriRecipe = getDaiquirirecipe(cocktails)
//console.log('daiquiriRecipe', daiquiriRecipe)

//Sélectionnez tous les cocktails avec alcool
const allCocktailWithAlcool = getAllCocktailWithAlcool(cocktails)
//console.log('allCocktailWithAlcool', allCocktailWithAlcool)

//Sélectionnez tous les cocktails qui ont 4 étoiles
const fourStarsCocktails = getFourStarsCocktails(cocktails)
//console.log('fourStarsCocktails', fourStarsCocktails)

const threeStarsSupCocktail = getThreeStarsSupCocktail(cocktails)
//console.log('threeStarsSupCocktail', threeStarsSupCocktail)

//Sélectionnez tous les cocktails qui ont plus de 2 étoiles, avec alcool et bon marché
const cheapStarAlcoolCocktail = getCheapStarAlcoolCocktail(cocktails)
//console.log('cheapStarAlcoolCocktail', cheapStarAlcoolCocktail)

//Sélectionnez tous les cocktails à base de Gin (ingredient_id: 3)
const ginCocktail = getGinCocktail(cocktails, ingredients, measurements)
//console.log('ginCocktail', ginCocktail)

//Afficher le nombre de cocktail à base d'alcool
const countAlcoolCocktail = getCountAlcoolCocktail(cocktails)
//console.log('countAlcoolCocktail', countAlcoolCocktail)

//Afficher le nombre de cocktail à base de milk ou de Strawberries ou de Mango
const count3ingredientsCocktails = getCount3ingredientsCocktails(cocktails, ingredients, measurements)
//console.log('count3ingredientsCocktails', count3ingredientsCocktails)

//Afficher tous les ingrédients du cocktail Caipirinha
const ingredientCaipirinha = getIngredientCaipirinha(cocktails, ingredients, measurements)
//console.log('ingredientCaipirinha', ingredientCaipirinha)

//Afficher la somme (en ml) des ingrédients de la Caipirinha
const sumIngredientCaipirinha = getSumIngredientCaipirinha(cocktails, measurements)
//console.log('sumIngredientCaipirinha', sumIngredientCaipirinha)