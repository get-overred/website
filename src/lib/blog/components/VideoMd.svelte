<!-- This takes either: https://*, ://*  -->

<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { config } from "$lib/config";

	export let src: string;

	console.log(`src; ${src}`);

	let slug: string;
	let cut_index: number = (config.blogUrl.match("/")?.length ?? 0) + 1;

	onMount(() => (slug = $page.url.pathname.split("/")[cut_index]));
</script>

{#if slug && src}
	<div class="flex w-full items-center justify-center py-12">
		<video
			class="border-overred-red max-h-screen overflow-hidden rounded-lg border-4 border-opacity-80 object-contain"
			autoplay={true}
			muted
			controls
			playsinline
		>
			<source
				src={src.includes("https://") ? src : `/assets/${slug}_${src}`}
				type="video/quicktime"
			/>
			<source
				src={src.includes("https://") ? src : `/assets/${slug}_${src}`}
				type="video/mp4"
			/>
			<source
				src={src.includes("https://") ? src : `/assets/${slug}_${src}`}
				type="video/ogg"
			/>
			Your browser does not support the video tag.
		</video>
	</div>
{/if}
