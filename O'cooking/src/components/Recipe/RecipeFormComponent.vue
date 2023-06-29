<script setup></script>

<template>
  <div class="main .recipe-form">
    <h2 class="title">créer une recette</h2>
    <form>
      <div>
        <label class="label" for="title">Titre</label>
        <input
          class="input"
          type="text"
          name="title"
          id="title"
          placeholder="Titre de la recette"
        />
      </div>

      <div>
        <label class="label" for="duration">Temps de cuisson</label>
        <input class="input" type="text" name="duration" id="duration" placeholder="10 minutes" />
      </div>

      <div>
        <label class="label" for="cost">Coût par personne</label>
        <input class="input" type="text" name="cost" id="cost" placeholder="1€" />
      </div>

      <div>
        <label class="label" for="recipe">Recette</label>
        <p><textarea name="recipe" id="recipe" rows="10"></textarea></p>
      </div>

      <input class="submit" type="submit" value="Sauvegarder" />
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
