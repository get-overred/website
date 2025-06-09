<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Logo from "./assets/Logo.svelte";
	import { fade, fly, draw, blur } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	export let yScroll = 0;

	let mounted = false;
	onMount(() => (mounted = true));

	// get current link:
	let current_link: string = "";
	$: if (mounted) current_link = $page.url.pathname;
	$: if (current_link) {
		routes.forEach((element, index) => {
			show_routes[index] = current_link.includes(
				element.url.replace("/", ""),
			);
			console.log("Does check?");
			console.log(current_link.includes(element.url.replace("/", "")));
		});

		console.log(routes);
	}

	// did the page Scroll:
	let isScroll: boolean = false;
	$: isScroll = yScroll > 0;

	// DATA
	const routes = [
		{ title: "Docs", url: "/docs" },
		{ title: "Contact", url: "/contact" },
	];
	const show_routes = [false, false, false];

	const btns = [
		{
			icon: "fa-brands fa-github",
			url: "https://github.com/mokollmar/overred",
		},
		{ title: "Login", url: "https://app.overred.co/" },
	];
</script>

<header id="header" class="sticky top-0 pt-6 flex justify-center z-50">
	<div
		id="header"
		class={"items-center flex flex-row justify-between py-2 w-full px-6" +
			(isScroll
				? " backdrop-blur-[5px] bg-white bg-opacity-50 rounded-xl shadow-centered-lg md:w-[85%] xl:w-[75%]"
				: " md:w-[90%] xl:w-[80%] ")}
	>
		<a
			href="/"
			class="text-center text-xl hover:opacity-75 overflow-hidden"
		>
			<Logo
				class_data="w-60 flex jusitfy-center items-center object-contain px-6 py-2 h-12 overflow-hidden"
			/>
		</a>

		<div class="space-x-20 flex flex-row">
			<div class="flex flex-row justify-center items-center space-x-12">
				{#each routes as _route, index}
					<div class="flex flex-col items-center justify-center">
						<a
							class="text-overred-variant-blue font-bold text-md h-min"
							href={_route.url}>{_route.title}</a
						>
						{#if show_routes[index]}
							<div
								transition:fade={{
									easing: quintOut,
									duration: 2000,
								}}
								class="h-[0.1rem] w-full rounded-l-2xl bg-gradient-to-tr from-overred-red via-overred-shadow-orange to-overred-shadow-pink"
							/>
						{:else}
							<div class="h-[0.1rem]" />
						{/if}
					</div>
				{/each}
			</div>

			<div class="flex flex-row justify-center items-center space-x-6">
				{#each btns as _, idx}
					{#if idx == 0}
						<a
							class="text-overred-variant-blue aspect-square text-4xl flex justify-center items-center"
							href={btns[idx].url}
							><i class={btns[idx].icon}></i></a
						>
					{:else}
						<a
							class="text-white bg-overred-red py-2 px-5 rounded-full font-semibold text-md hover:bg-red-700 transition-all duration-500"
							href={btns[idx].url}>{btns[idx].title}</a
						>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</header>

<style>
	#header {
		transition:
			transform 1.5s ease-in-out,
			background-color 1s ease-in-out,
			all 1s ease-in-out;
	}
</style>
