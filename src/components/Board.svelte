<script>
	import { flip } from "svelte/animate"
	import { dndzone } from "svelte-dnd-action"
	import InPlaceEdit from "../shared/InPlaceEdit.svelte"
	import { Lists, Items } from "../stores/data"
	import { debug, prevent_default } from "svelte/internal"

	let columnItems = $Items // TODO fix writing to todos directly!

	const flipDurationMs = 300

	let valid = false

	function handleDndConsiderColumns(e) {
		columnItems = e.detail.items
	}
	function handleDndFinalizeColumns(e) {
		columnItems = e.detail.items
	}
	function handleDndConsiderCards(cid, e) {
		const colIdx = columnItems.findIndex((c) => c.id === cid)
		columnItems[colIdx].items = e.detail.items
		columnItems = [...columnItems]
	}
	function handleDndFinalizeCards(cid, e) {
		const colIdx = columnItems.findIndex((c) => c.id === cid)
		columnItems[colIdx].items = e.detail.items
		columnItems = [...columnItems]
	}

	// Delete a todo
	function onRightClick(todoId) {
		const toDelete = $Items.find((t) => t.id === todoId);
		toDelete.deletedAt = Date.now();
		console.log(`Deleted: ${todoId}`, toDelete);
	}

	// TODO fix submit function
	function submit(field, todoId) {
		return ({ detail: newValue }) => {
			// TODO: POST value to server here

			valid = true

			//validate todo is greater than 1 character in length
			if (false) { //if (newValue.trim().length < 1) {
				valid = false
				console.log("Todo must be at least 1 character long!")

				// TODO delete here is not working!
				Items.update((listOfTodoLists) => {
					return listOfTodoLists.map((todoList) => {
						todoList.items = todoList.items.filter((todo) => todo.id !== todoId)
						return todoList
					})
				})
				console.log("invalid todo deleted")
			}

			// update todo
			if (valid) {
				Items.update((listOfTodoLists) => {
					return listOfTodoLists.map((todoList) => {
						if (todoList.items.id === todoId) {
							todoList.items.name = newValue
							console.log(`updated ${field}, new value is: "${newValue}"`)
							return todoList
						}
					})
				})
			}
			console.log($Items)
		}
	}

	const filteredByList=(value)=>{
		return $Items.filter(i => i.list === value && i.deletedAt === null);
	}
	$: filteredByList(1);
	$: filteredByList(2);
	$: filteredByList(3);
	$: filteredByList(4);
</script>

<section
	class="board"
	use:dndzone={{ items: $Items, flipDurationMs, type: "columns" }}
	on:consider={handleDndConsiderColumns}
	on:finalize={handleDndFinalizeColumns}
>
	{#each $Lists as list (list.id)}
		<div class="column" animate:flip={{ duration: flipDurationMs }}>
			<div class="column-title">{list.title}</div>
			<div
				class="column-content"
				use:dndzone={{ items: filteredByList(list.id), flipDurationMs }}
				on:consider={(e) => handleDndConsiderCards(list.id, e)}
				on:finalize={(e) => handleDndFinalizeCards(list.id, e)}
			>
				{#each filteredByList(list.id) as item (item.id)}
					<div
						class="card"
						animate:flip={{ duration: flipDurationMs }}
						on:contextmenu|preventDefault={() => onRightClick(item.id)}
					>
						<InPlaceEdit bind:value={item.name} on:submit={submit("text")} />
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>

<style>
	.board {
		display: flex;
		flex-wrap: wrap;
		height: 85%;
	}

	.board > * {
		flex-basis: auto;
		width: 50%;
		box-sizing: border-box;
		border: 1px solid white;
	}
	.column {
		width: 49%;
		height: 49%;
		border: 1px solid white;
		float: left;
	}
	/* .column-content {
	} */
	.column-title {
		margin-bottom: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card {
		display: block;
		background-color: #56e39f;
		border-radius: 64px;
		padding: 0.5em 1em;
		cursor: pointer;
		font-size: 2rem;
	}
	.card:not(:last-child) {
		margin-bottom: 20px;
	}
</style>
