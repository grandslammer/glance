<script>
	import Board from "../components/Board.svelte"
</script>

<svelte:head>
	<title>Glance | Todos</title>
</svelte:head>

<div id="top">
	<h1>Your Todos</h1>
</div>
<Board />

<style>
	#top {
		height: 15%;
	}
</style>
