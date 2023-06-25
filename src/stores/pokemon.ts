import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', () => {
	const player = reactive({
		name: 'Charizard',
		maxHp: 100,
		hp: 100,
		level: 9,
		moves: [
			{
				name: 'Tackle',
				damage: 5,
				pp: 10,
				maxPp: 10,
				type: 'Normal',
			},
			{
				name: 'Flamethrower',
				damage: 10,
				pp: 5,
				maxPp: 5,
				type: '  Fire',
			},
			{
				name: 'Fire Blast',
				damage: 20,
				pp: 2,
				maxPp: 2,
				type: 'Fire',
			},
			{
				name: 'Fire Punch',
				damage: 15,
				pp: 3,
				maxPp: 3,
				type: 'Fire',
			},
		],
	})

	const enemy = reactive({
		name: 'Blastoise',
		maxHp: 100,
		hp: 100,
		level: 10,
		moves: [
			{
				name: 'Tackle',
				damage: 5,
				pp: 10,
				maxPp: 10,
				type: 'Normal',
			},
			{
				name: 'Hydro Pump',
				damage: 10,
				pp: 5,
				maxPp: 5,
				type: 'Water',
			},
			{
				name: 'Water Pulse',
				damage: 20,
				pp: 2,
				maxPp: 2,
				type: 'Water',
			},
			{
				name: 'Water Gun',
				damage: 15,
				pp: 3,
				maxPp: 3,
				type: 'Water',
			},
		],
	})

	function pokemonAttack(attacker: 'player' | 'enemy', moveIndex: number): boolean {
		const attackerPokemon = attacker === 'player' ? player : enemy
		const defenderPokemon = attacker === 'player' ? enemy : player

		const move = attackerPokemon.moves[moveIndex]

		if (move.pp === 0) return false

		move.pp--

		const damage = Math.floor(Math.random() * move.damage) + 1

		defenderPokemon.hp -= damage
		return true
	}

	return { player, enemy, pokemonAttack }
})
