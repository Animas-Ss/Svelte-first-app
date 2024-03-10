import { writable } from 'svelte/store'

export let mode = writable(false);
export let counter = writable(0);