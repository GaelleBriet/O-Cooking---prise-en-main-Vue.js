export default {

  async fetchAllRecipesFromDatabase(){
      const recipes  = await(await fetch('/src/data/db.json')).json();
      return recipes
  },

  async fetchRecipeByIdFromDatabase(id){
     const recipes = await this.fetchAllRecipesFromDatabase()
     return recipes.find(recipe => recipe.id === id)
  }

}