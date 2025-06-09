<script lang="ts">
	import { config } from "$lib/config";

	export let metadata_tags: string[];
</script>

<!-- Breadcrumbs -->
<ol
	class="breadcrumb flex w-auto items-center justify-start rounded-lg py-2 text-sm space-x-2"
>
	<li class="crumb"><a class="anchor" href={config.blogUrl}>Blog</a></li>
	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
	{#each metadata_tags as tag, i}
		<li class="crumb">
			<a class="anchor" href={`${config.blogUrl}/?tag=${tag}`}>{tag}</a>
		</li>
		{#if i < metadata_tags.length - 1}
			<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
		{/if}
	{/each}
</ol>
