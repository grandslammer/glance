import { writable } from "svelte/store"

// class Todo {
// 	constructor(id, text, date, done = false) {
// 		id, text, date, done
// 	}
// }

const Todos = writable([
	{
		id: 1,
		title: "List 1",
		items: [
			{ id: 11, name: "item11" },
			{ id: 12, name: "item12" },
			{ id: 13, name: "item13" },
			{ id: 14, name: "item14" },
			{ id: 15, name: "item15" },
			{ id: 16, name: "item16" }
		]
	},
	{
		id: 2,
		title: "List 2",
		items: [
			{ id: 21, name: "item21" },
			{ id: 22, name: "item22" },
			{ id: 23, name: "item23" },
			{ id: 24, name: "item24" },
			{ id: 25, name: "item25" },
			{ id: 26, name: "item26" }
		]
	},
	{
		id: 3,
		title: "List 3",
		items: [
			{ id: 31, name: "item31" },
			{ id: 32, name: "item32" },
			{ id: 33, name: "item33" },
			{ id: 34, name: "item34" },
			{ id: 35, name: "item35" },
			{ id: 36, name: "item36" }
		]
	},
	{
		id: 4,
		title: "List 4",
		items: [
			({ id: 41, name: "item41" },
			{ id: 42, name: "item42" },
			{ id: 43, name: "item43" },
			{ id: 44, name: "item44" },
			{ id: 45, name: "item45" },
			{ id: 46, name: "item46" })
		]
	}
])

// const Todos = writable([
// 	{ id: 1, listId: 1, name: "Item 1" },
// 	{ id: 2, listId: 2, name: "Item 2" },
// 	{ id: 3, listId: 3, name: "Item 3" },
// 	{ id: 4, listId: 4, name: "Item 4" },
// 	{ id: 5, listId: 1, name: "Item 5" },
// 	{ id: 6, listId: 1, name: "Item 6" },
// 	{ id: 7, listId: 1, name: "Item 7" },
// 	{ id: 8, listId: 2, name: "Item 8" },
// 	{ id: 9, listId: 3, name: "Item 9" },
// 	{ id: 10, listId: 4, name: "Item 10" }
// ])
export default Todos
