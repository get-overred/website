<script lang="ts">
	import BlogContent from "$lib/blog/BlogContent.svelte";

	export let data: any;
</script>

<BlogContent {data} />

<style>
	#category_btn {
		border: 5px rgb(203 213 225) solid;
		border-radius: 10px;
		max-width: 100%;
		width: 250px;
		transition: all;
		transition-duration: 250ms;
	}
	#category_btn:hover {
		border: 5px var(--color-secondary) solid;
	}
	#category_btn.active_X {
		border: 5px var(--color-primary) solid;
	}
</style>
