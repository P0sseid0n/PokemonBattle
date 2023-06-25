<script setup lang="ts">
import { ref, computed } from 'vue'

import { usePokemonStore } from '../stores/pokemon';

const pokemonStore = usePokemonStore();

const menu = ref('start')

const optionSelected = ref(0)

const getMoveSelected = computed(() => pokemonStore.player.moves[optionSelected.value])

function playerAttack() {
   const attacked = pokemonStore.pokemonAttack('player', optionSelected.value)

   if (attacked) {
      menu.value = 'start'
   }
}
</script>

<template>
   <div id="HUD" @keypress="menu = 'start'">
      <div v-if="menu === 'start'" id="StartMenu">
         <section id="Text">
            <div>
               <p>What will {{ pokemonStore.player.name }} do?</p>
            </div>
         </section>
         <section id="Options">
            <button class="HUDOption" @click="menu = 'fight'">Fight</button>
            <button class="HUDOption" @click="menu = 'bag'">Bag</button>
            <button class="HUDOption" @click="menu = 'pokemon'">Pokemon</button>
            <button class="HUDOption" @click="menu = 'run'">Run</button>
         </section>
      </div>
      <div v-else-if="menu === 'fight'">
         <section id="Options">
            <button class="HUDOption" v-for="(move, index) in pokemonStore.player.moves"
               @mouseenter="optionSelected = index" @click="playerAttack">
               {{ move.name }}
            </button>
         </section>

         <section id="Text">
            <div>
               <p>
                  {{ getMoveSelected.pp }}/{{ getMoveSelected.maxPp }}
               </p>
               <p>TYPE/{{ getMoveSelected.type.toUpperCase() }}</p>
            </div>
         </section>
      </div>
   </div>
</template>

<style>
#HUD {
   background-color: #000;

   width: calc(100% - 256px);
   height: 200px;

   position: absolute;
   bottom: 16px;
   left: 128px;

   border-radius: 8px;

   padding: 4px;
}

#HUD>div {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   height: 100%;

   gap: 4px;
}

#HUD>div>section {
   flex: 1;
   height: 100%;
}

#Text {
   display: flex;
   justify-content: center;
   align-items: center;

   color: #fff;

   background: rgb(225, 216, 224);
   border: 8px solid rgb(200, 168, 72);

   padding: 8px;

   border-radius: 16px;
}

#Text div {
   height: 100%;
   width: 100%;

   background: rgb(40, 81, 104);

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 16px;
}

#Text p {
   font-size: 48px;
}

#Options {
   display: grid;
   grid-template-columns: 1fr 1fr;

   background: #fff;
   border: 12px solid rgb(125, 115, 135);
   border-radius: 16px;
}

#Options .HUDOption {
   background: transparent;

   font-size: 36px;

   border: none;

   padding: 8px;

   cursor: pointer;
}

#Options .HUDOption:hover {
   background: rgb(225, 216, 224);
}

#Options .HUDOption:focus {
   outline: none;
}
</style>
