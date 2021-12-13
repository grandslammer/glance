<script>
	import { flip } from "svelte/animate"
	import { createEventDispatcher } from "svelte"
	import InPlaceEdit from "../shared/InPlaceEdit.svelte"

	const dispatch = createEventDispatcher()

	const flipDurationMs = 200

	export let todos = []

	function onRightClick(id) {
		console.log(id)
		todos = todos.filter((todo) => todo.id !== id)
	}
</script>

{#each todos as item (item.id)}
	<div
		animate:flip={{ duration: flipDurationMs }}
		class="todo-item"
		on:contextmenu|preventDefault={() => onRightClick(item.id)}
	>
		<InPlaceEdit bind:value={item.name} on:submit={dispatch("edit", "text")} />
	</div>
{/each}

<style>
	.todo-item {
		display: block;
		background-color: #56e39f;
		border-radius: 64px;
		padding: 0.5em 1em;
		cursor: pointer;
		font-size: 2rem;
	}

	.todo-item:not(:last-child) {
		margin-bottom: 20px;
	}
</style>
