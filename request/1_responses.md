
# Exercices SQL

## Partie 1: Sélection de données

> Connectez vous à Mysql via votre terminal.
> Créer le modèle physique de votre BDD.
> Lancer vos requêtes via votre terminal.

1. Sélectionnez la recette du Banana Daiquiri:

```sql
select description from cocktail_recipe where name = 'Banana Daiquiri';
```

2. Sélectionnez tous les cocktails avec alcool :

```sql
select * from cocktail_recipe where alcool = true;
```

3. Sélectionnez tous les cocktails qui ont 4 étoiles:

```sql
select * from cocktail_recipe where rating = 4;
```

4. Sélectionnez tous les cocktails qui ont plus de 3 étoiles:

```sql
select * from cocktail_recipe where rating > 3;
```

5. Sélectionnez tous les cocktails qui ont plus de 2 étoiles, avec alcool et bon marché:

```sql
select name, rating, rate, alcool from cocktail_recipe where rating > 2 and alcool = true and rate = 1; 
```

5. Sélectionnez tous les cocktails à base de Gin (ingredient_id: 3):

```sql
select * from cocktail_recipe inner join measurement on cocktail_recipe.id = cocktail_recipe_id inner join ingredient on ingredient_id = ingredient.id where ingredient.name = 'Gin'; 
```

6. Afficher le nombre de cocktail à base d'alcool :

```sql
select count(name) from cocktail_recipe where alcool = true;
```

7. Afficher le nombre de cocktail à base de milk ou de Strawberries ou de Mango :

```sql
select count(*) from cocktail_recipe inner join measurement on cocktail_recipe.id = cocktail_recipe_id inner join ingredient on ingredient_id = ingredient.id where ingredient.name = 'Milk' or ingredient.name = 'Strawberries' or ingredient.name = 'Mango';
```

8. Afficher tous les ingrédients du cocktail Caipirinha:

```sql
select ingredient.name from ingredient inner join measurement on ingredient.id = ingredient_id inner join cocktail_recipe on cocktail_recipe_id = cocktail_recipe.id where cocktail_recipe.name = 'Caipirinha';
```

9. Afficher la somme (en ml) des ingrédients de la Caipirinha :
    
```sql
select sum(measurement.quantity_amount) from measurement inner join ingredient on ingredient.id = ingredient_id inner join cocktail_recipe on cocktail_recipe_id = cocktail_recipe.id where cocktail_recipe.name = 'Caipirinha';
```

10. Sélectionnez tous les cocktails qui contiennent plus de 50 ml de Light rum :
    
```sql
select cocktail_recipe.name from cocktail_recipe inner join measurement on cocktail_recipe.id = cocktail_recipe_id inner join ingredient on  ingredient_id = ingredient.id where ingredient.name = 'Light rum' and measurement.quantity_amount > 50;
```




