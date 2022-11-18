export interface Recipe {
   id: string;
   name: string;
   ingredients: string[];
   instructions: string;
   tags: string[];
   servings: string;
   image: string;
   time: RecipeTime;
   source: string;
}

export interface RecipeTime {
   prep: string;
   cook: string;
   active: string;
   inactive: string;
   ready: string;
   total: string;
}
