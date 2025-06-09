<script lang="ts">
	import "./post.css";
</script>

<div class="flex w-full flex-col post">
	<slot />
</div>

<style>
	:global(.post),
	:global(.post *) {
		font-family: "Helvetica", "Arial", sans-serif !important;
	}
</style>
