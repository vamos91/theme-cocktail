const mysql = require('mysql2')
const { faker } = require('@faker-js/faker')
const cnx = require('./connection')
const cocktail = require('./data/cocktail')
const ingredients = require('./data/ingredient')

// for (let index = 0; index < cocktail.length; index++) {
//     cnx.query('insert into cocktail_recipe (name, alcool, rating, description, difficulty_level, rate, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?, ?)'
//         , [cocktail[index].strDrink, true, parseInt((Math.random() * (5 - 1) + 1).toFixed()), faker.lorem.paragraphs(), parseInt((Math.random() * (3 - 1) + 1).toFixed()), parseInt((Math.random() * (3 - 1) + 1).toFixed()), faker.date.past(), faker.date.past()]
//         , (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//         })
// }


// for (let index = 0; index < ingredients.length; index++) {
//     cnx.query('insert into ingredient (name, created_at, updated_at) values (?, ?, ?)'
//         , [ingredients[index].strIngredient1, faker.date.past(), faker.date.past()]
//         , (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//         })
// }


// for (let index = 1; index < cocktail.length + 1; index++) {
//     for (let j = 0; j < 5; j++) {
//         cnx.query('insert into measurement (cocktail_recipe_id, ingredient_id, quantity_amount , description) values (?, ?, ?, ?)'
//             , [index, parseInt((Math.random() * (ingredients.length - 1) + 1).toFixed()), Math.round((Math.random() * (100 - 1) + 1) / 5) * 5, faker.lorem.sentence(5)]
//             , (err, result) => {
//                 if (err) {
//                     console.log(err)
//                 }
//             })
        
//     }
// }
    

