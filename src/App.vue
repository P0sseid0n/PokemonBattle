<script setup lang="ts">
import { usePokemonStore } from './stores/pokemon';

const pokemonStore = usePokemonStore();

import PokemonStats from './components/PokemonStats.vue'
import HUD from './components/HUD.vue';
</script>

<template>
   <div id="Battle">
      <div class="container">
         <div class="PokemonSprite PlayerSprite">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"
               alt="PlayerPokemon">
         </div>
         <div class="PokemonPosition PlayerPosition"></div>
         <div class="PokemonSprite EnemySprite">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="EnemyPokemon">
         </div>
         <div class="PokemonPosition EnemyPosition"></div>

         <div class="EnemyStats">
            <PokemonStats pokemon="enemy" />
         </div>

         <div class="PlayerStats">
            <PokemonStats pokemon="player" />
         </div>

         <HUD />
      </div>
   </div>
</template>

<style>
@font-face {
   font-family: "Pokemon Pixel Font Regular";
   src: url("./fonts/pokemon_pixel_font.eot?") format("eot"), url("./fonts/pokemon_pixel_font.woff") format("woff"), url("./fonts/pokemon_pixel_font.ttf") format("truetype"), url("./fonts/pokemon_pixel_font.svg#Pokemon-Pixel-Font") format("svg");
   font-weight: normal;
   font-style: normal;
}

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;

   font-family: 'Pokemon Pixel Font Regular', sans-serif;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

#Battle {
   width: 100vw;
   height: 100vh;
   background-color: #fff;

   display: flex;
   justify-content: center;
   align-items: center;
}

.container {
   width: 100%;
   height: 100%;

   max-width: 1280px;
   max-height: 720px;

   position: relative;
}

.PokemonPosition {
   background-color: #c5c5c5;
   width: 320px;
   height: 32px;
   border-radius: 50%;

   position: absolute;

   z-index: 10;
}

.PokemonSprite {

   position: absolute;

   z-index: 100;
}

.PokemonSprite img {
   width: 160px;
   height: 160px;
}

.PlayerPosition {
   bottom: 240px;
   left: 160px;
}

.PlayerSprite {
   bottom: 240px;
   left: 240px;
}

.EnemyPosition {
   top: 128px;
   right: 160px;
}

.EnemySprite {
   top: 16px;
   right: 240px;
}

.EnemyStats {
   position: absolute;
   top: 32px;
   left: 128px;
}

.PlayerStats {
   position: absolute;

   bottom: calc(240px);
   right: 128px;
}
</style>
