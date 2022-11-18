import { Recipe } from '../types/recipe.type';

export default function Recipe(props: { recipe: Recipe }) {
   return (
      <div>
         <h1>{props.recipe.name}</h1>
         <img src={props.recipe.image}></img>
         {props.recipe.ingredients.map((ingredient) => (
            <div>
               <p>{ingredient}</p>
            </div>
         ))}
      </div>
   );
}
