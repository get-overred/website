<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { onMount } from 'svelte';
	import { Toaster } from 'svelte-french-toast';

	let yScroll: number = 0;

	onMount(() => {
		get();
	});

	async function get() {
		// await parseMarkdownFiles();
	}
</script>

<Toaster />

<div class="bg-background flex flex-col overflow-x-clip min-h-screen">
	<!-- Header -->
	<Header {yScroll} />

	<div class="flex flex-grow">
		<slot />
	</div>

	<!-- Footer -->
	<Footer />
</div>

<svelte:window bind:scrollY={yScroll} />
