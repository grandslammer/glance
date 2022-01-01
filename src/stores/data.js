import { writable, readable } from "svelte/store"

import items from "./mock-items.json";

export const Lists = readable([
	{ id: 1, title: "List 1"},
	{ id: 2, title: "List 2"},
	{ id: 3, title: "List 3"},
	{ id: 4, title: "List 4"},
]);

export const Items = writable(items);

console.log(Items.length);

