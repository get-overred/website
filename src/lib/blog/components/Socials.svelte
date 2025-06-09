<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let type: string;
	export let title: string;

	let icon: string | null;
	let link: string | null;

	onMount(() => {
		switch (type) {
			case 'twitter':
				icon = 'square-x-twitter ';
				link = encodeURI(`https://x.com/intent/tweet/?text=${title}&url=${$page.url}`);
				break;
			case 'reddit':
				icon = 'square-reddit ';
				link = encodeURI(`https://www.reddit.com/submit?url=${$page.url}&title=${title}`);
				break;
			case 'facebook':
				icon = 'square-facebook ';
				link = encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${$page.url}`);
				break;
			case 'tumblr':
				icon = 'square-tumblr ';
				link = encodeURI(`https://www.tumblr.com/share?url=${$page.url}&title=${title}`);
				break;
			case 'linkedin':
				icon = 'linkedin';
				link = encodeURI(`https://www.linkedin.com/sharing/share-offsite/?url=${$page.url}`);
				break;
		}
	});
</script>

{#if link && icon}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a class="w-min" href={link} target="_blank">
		<i class={`fa-brands fa-${icon}` + 'text-[35px] opacity-75 shadow-sm hover:scale-105'}></i>
	</a>
{/if}
