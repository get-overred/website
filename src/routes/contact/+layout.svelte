<script>
	import { seo_map } from '$lib/data/seo';
</script>

<svelte:head>
	<title>{seo_map.contact.title}</title>
	<meta name="description" content={seo_map.contact.description} />
</svelte:head>

<slot />
