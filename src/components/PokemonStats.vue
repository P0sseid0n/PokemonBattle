<script setup lang="ts">
import { usePokemonStore } from '../stores/pokemon';

const props = defineProps<{
   pokemon: 'player' | 'enemy';
}>();

const pokemonStore = usePokemonStore();



const getHpPercentage = () => (pokemonStore[props.pokemon].hp / pokemonStore[props.pokemon].maxHp) * 100;

</script>

<template>
   <div class="PokemonStats">
      <header>
         <h3> {{ pokemonStore[props.pokemon].name }} </h3>
         <h3>Lv {{ pokemonStore[props.pokemon].level }} </h3>
      </header>
      <main>
         <p>HP</p>
         <div class="HpBar">
            <div :style="{ width: getHpPercentage() + '%' }" class="HpBarFill"></div>
         </div>
      </main>
      <footer>
         <p>{{ pokemonStore[props.pokemon].hp }} / {{ pokemonStore[props.pokemon].maxHp }}</p>
      </footer>
   </div>
</template>

<style>
.PokemonStats {
   background-color: #f9f8d8;

   width: 560px;
   height: 120px;

   padding: 8px 16px;

   border-radius: 16px;

   border: 4px solid rgb(65, 65, 65);

   display: flex;
   flex-direction: column;
   justify-content: space-between;
}

.PokemonStats header {
   display: flex;
   justify-content: space-between;
   align-items: center;

   margin-bottom: 12px;
}

.PokemonStats header h3 {
   font-size: 36px;
   font-weight: 400;

   letter-spacing: 4px;
}

.PokemonStats main {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 32px;
}

.PokemonStats main p {
   font-size: 24px;
   font-weight: 400;
}

.PokemonStats main .HpBar {
   background-color: rgb(175, 175, 155);

   width: 80%;
   height: 8px;
   border-radius: 8px;
}

.PokemonStats main .HpBar .HpBarFill {
   background-color: rgb(59, 153, 252);

   width: 100%;
   height: 100%;

   border-radius: 8px;
}

.PokemonStats footer {
   display: flex;
   justify-content: flex-end;
   align-items: center;

   padding-right: 32px;
}

.PokemonStats footer p {
   font-size: 24px;
   font-weight: 400;
}
</style>