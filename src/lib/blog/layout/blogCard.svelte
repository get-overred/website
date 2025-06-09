<script lang="ts">
	import { blur } from "svelte/transition";
	import { config } from "../../config";
	import fallbackProfile from "$lib/assets/fallback_profile.webp";

	interface PostMetadata {
		title: string;
		description: string;
		date: string;
		tags: Array<string>;
		published: boolean;
		author: string;
	}
	interface BlogList {
		meta: PostMetadata;
		slug: string;
		header_image: any;
	}
	export let entry: BlogList;

	// const metadata = entry.meta; //! local, non-reactive snapshot
	//! IF accessed this isnt updated => svelte treats as static!
</script>

<a
	id="card"
	href={`${config.blogUrl}/${entry.slug}`}
	in:blur={{ delay: 500, duration: 500 }}
	out:blur={{ duration: 500 }}
	class="space-y-5 p-3"
>
	<img
		src={entry?.header_image}
		style="aspect-ratio: {config.image_blog_card};"
		class="w-full rounded-md object-cover"
		alt="my_image"
	/>

	<div
		class="flex flex-col items-start justify-center space-y-3 px-6 pb-2 text-start"
	>
		<div class="flex flex-wrap gap-2">
			{#each entry.meta.tags as tag}
				<span
					class="text-overred-red text-sm font-medium text-opacity-80"
				>
					{tag.toUpperCase()}
				</span>
			{/each}
		</div>
		<p
			style="min-height: 2.5rem;"
			class="text-overred-variant-blue flex items-center justify-start text-start text-2xl font-medium"
		>
			{@html entry.meta.title}
		</p>
		<p
			style={`font-family: "Helvetica", "Arial", sans-serif !important;
		min-height: 4rem;`}
			class="text-md line-clamp-3"
		>
			{@html entry.meta.description}
		</p>

		<div class="flex flex-row items-center justify-center space-x-3 pt-2">
			<img
				src={fallbackProfile}
				class="h-12 w-12 rounded-full border-2 border-white object-contain"
				alt="my_profile"
			/>

			<div class="flex flex-col">
				<p
					style={`font-family: "Helvetica", "Arial", sans-serif !important;`}
					class="text-overred-variant-blue text-sm font-semibold italic text-opacity-80"
				>
					{entry.meta.author}
				</p>
				<div
					class="text-overred-variant-blue flex flex-row text-sm text-opacity-70"
				>
					<p
						style={`font-family: "Helvetica", "Arial", sans-serif !important;`}
						class="italic"
					>
						{`${entry.meta.date}`}
					</p>
				</div>
			</div>
		</div>
	</div>
</a>

<style>
	#card {
		width: 400px;
		max-width: w-full;
		border-radius: 0.5rem;
		border: 5px rgb(203 213 225) solid;
		transition-property: all;
		transition-duration: 500ms;
	}
	#card:hover {
		border: 5px var(--color-primary) solid;
		scale: 1.025;
	}
</style>
