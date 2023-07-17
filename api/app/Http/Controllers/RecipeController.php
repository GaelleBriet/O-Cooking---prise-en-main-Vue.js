<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;

class RecipeController extends Controller
{

  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Recipe::all(["id", "name", "description", "ingredients", "user_id"]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $recipe = new Recipe();
    $recipe->name = $request->name;
    $recipe->description = $request->description;
    $recipe->ingredients = $request->ingredients;
    $recipe->user_id = $request->user_id;
    $recipe->save();

    // Récupérer l'utilisateur associé à la recette
    $user = User::find($request->user_id);

    // Retourner la réponse avec les informations de la recette et de l'utilisateur
    return response()->json([
      'id' => $recipe->id,
      'name' => $recipe->name,
      'description' => $recipe->description,
      'ingredients' => $recipe->ingredients,
      'user_id' => $recipe->user_id,
      'user' => $user,
    ]);
  }

  /**
   * Display the specified resource.
   *
   * @param int $id
   */
  public function show(Recipe $recipe)
  {
    return $recipe->load("comments");
  }

  /**
   * Update the specified resource in storage.
   *
   * @param int $id
   */
  public function update(Request $request, Recipe $recipe)
  {
    $recipe->name = $request->name;
    $recipe->description = $request->description;
    $recipe->ingredients = $request->ingredients;
    $recipe->save();
    return $recipe;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param int $id
   */
  public function destroy(Recipe $recipe)
  {
    $recipe->delete();
    return response()->noContent();
  }

  public function comments(Recipe $recipe)
  {
    return $recipe->comments;
  }
}
