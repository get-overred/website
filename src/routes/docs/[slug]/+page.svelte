<script lang="ts">
	import { config, exportTOC, type ContentEntry } from "$lib/config";
	import { onMount } from "svelte";
	import Breadcrumb from "$lib/blog/components/BlogBreadcrumb.svelte";
	import Socials from "$lib/blog/components/Socials.svelte";
	import { page } from "$app/stores";
	import profilePicture from "$lib/assets/fallback_profile.webp";

	export let data: any;

	const metadata = data.props.meta;
	const tags = metadata.tags;

	let heading_id = "";
	$: console.log(`Heading ID update: ${heading_id}`);

	// TOC List
	let toc_list: Array<ContentEntry> | null = null;
	let in_heading_pos: boolean | null = null;
	onMount(() => updateTOC(null));
	onMount(() => {
		requestAnimationFrame(() => {
			addEventListener("scroll", (event) => {
				in_heading_pos = false;
				updateTOC(event);
			});
		});
	});
	onMount(() => {
		toc_list = exportTOC();
		console.log(toc_list);
	});
	onMount(() => {
		console.log(`Url: ${$page.url.href}`);
	});

	function updateTOC(event: Event | null) {
		const article = document.getElementById("blog-article");
		if (!article) return;
		const headings = article.getElementsByTagName("h2");
		let h2_array: Array<string> = [];
		for (let index = 0; index < headings.length; index++) {
			const element = headings[index];
			h2_array.push(element.id);
		}

		[...h2_array] = h2_array.sort(sortByPosition);

		function sortByPosition(a: string, b: string) {
			const a_ele = document.getElementById(a);
			const b_ele = document.getElementById(b);
			if (!a_ele || !b_ele) return 0;

			const a_rect = a_ele.getBoundingClientRect();
			const b_rect = b_ele.getBoundingClientRect();

			const a_top = a_rect.top < 5 ? Infinity : a_rect.top;
			const b_top = b_rect.top < 5 ? Infinity : b_rect.top;

			return a_top - b_top;
		}
		heading_id = h2_array[0];

		// Scroll TOC
		if (!event) return;
		const perc_scroll = window.scrollY / document.body.scrollHeight;
		console.log(`Scrolled ${perc_scroll}% of the main window`);
		const toc = document.getElementById("article-toc");
		if (!toc) return;
		const scroll_position: number = (toc?.scrollHeight ?? 0) * perc_scroll;
		toc?.scrollTo(0, scroll_position);
	}

	let isOpen = false;
	let panelStyle = "translate-x-full";

	function toggle() {
		isOpen = !isOpen;
		panelStyle = isOpen ? "translate-x-0" : "translate-x-full";
	}
</script>

<svelte:head>
	<title>{metadata.title}</title>

	<meta content={metadata.description} name="description" />

	<meta content={metadata.title} property="og:title" />
	<meta content={data.props?.header_image} property="og:image" />
	<meta content={config.siteUrl} property="og:url" />
	<meta content={metadata.description} property="og:description" />
	<meta content={config.siteName} property="og:site_name" />

	<meta content={config.twitterHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={metadata.title} name="twitter:title" />
	<meta content={metadata.description} name="twitter:description" />
	<meta content={data.props?.header_image} name="twitter:image" />
</svelte:head>

<!-- TOC Panel -->
<div class="fixed right-0 top-1/2 -translate-y-1/2 z-50 2xl:hidden">
	<!-- Collapsed Button -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		on:click={toggle}
		class=" text-white cursor-pointer px-6 py-3 rounded-t-2xl shadow-2xl opacity-90 bg-primary transition-all duration-300 ease-in-out transform hover:scale-105 rotate-[270deg] origin-right mr-5"
	>
		<span class="font-bold text-xl">ToC</span>
	</div>

	<!-- Expanded Panel -->
	<div
		class="absolute right-0 top-1/2 -translate-y-1/2 w-96 bg-white shadow-2xl rounded-l-lg border border-gray-200 overflow-hidden transition-all duration-500 ease-in-out transform {panelStyle}"
		style="opacity: {isOpen
			? '1'
			: '0'}; height: 50vh; display: flex; flex-direction: column;"
	>
		<div
			class="flex justify-between items-center bg-blue-600 text-white px-6 py-3 flex-shrink-0"
		>
			<span class="font-semibold text-lg">Table of Contents</span>
			<button
				on:click={toggle}
				class="ml-4 hover:bg-blue-700 px-3 py-1.5 rounded transition-colors duration-200"
			>
				<i class="fa-solid fa-xmark"></i>
			</button>
		</div>
		<div class="p-6 overflow-y-auto flex-grow">
			<div class="flex flex-col space-y-3">
				{#if toc_list}
					{#each toc_list as entry}
						<a
							href={`#${entry.id}`}
							class={$page.url?.href &&
							$page.url.href.toString().includes(entry.id) &&
							in_heading_pos !== false
								? "text-md w-full rounded-lg bg-slate-400 px-4 py-2.5 transition-colors duration-200"
								: "text-md w-full rounded-lg bg-slate-200 px-4 py-2.5 hover:bg-slate-400 transition-colors duration-200"}
						>
							{entry.title}
						</a>
					{/each}
				{/if}
			</div>

			<div class="flex flex-col space-y-1 mt-10">
				<h3 class="px-2 text-2xl font-semibold">Share</h3>
				<div class="flex flex-row space-x-2 px-2">
					<Socials type="twitter" title={metadata.title} />
					<Socials type="reddit" title={metadata.title} />
					<Socials type="facebook" title={metadata.title} />
				</div>
			</div>
		</div>
	</div>
</div>

<div
	class="flex h-full w-full flex-col items-center justify-center 2xl:my-12 scroll-mt-[100px] scroll-smooth"
>
	<!-- Header -->
	<header
		class="flex w-full min-h-[calc(100vh-5rem)] 2xl:min-h-0 flex-col items-center overflow-clip 2xl:mx-auto 2xl:h-96 2xl:flex-row 2xl:space-x-20 2xl:px-20 2xl:pb-5 relative"
	>
		<span class="block 2xl:hidden absolute top-2 left-2 sm:left-10">
			<Breadcrumb metadata_tags={tags} /></span
		>
		<h1
			class="flex w-full 2xl:hidden items-center justify-center text-center text-3xl sm:text-4xl font-bold mx-12 mt-24 mb-10 md:mx-12 xl:mx-12"
			data-toc-ignore
		>
			{metadata.title}
		</h1>

		<div
			style={`aspect-ratio: ${config.image_ratio_view};`}
			class="rounded-xl flex justify-center items-center w-full 2xl:px-0 2xl:mx-0 2xl:aspect-[${config.image_ratio_view}] md:w-5/6 lg:w-2/3 xl:w-3/5 2xl:w-2/5 2xl:rounded-lg border-4 border-primary 2xl:border-none shadow-inner shadow-primary 2xl:shadow-none"
		>
			<img
				src={data.props?.header_image}
				class="w-full h-full object-cover rounded-xl 2xl:rounded-lg"
				alt="my_image"
			/>
		</div>

		<div
			class="flex-row items-center justify-center py-2 my-5 hidden sm:flex 2xl:hidden opacity-50 px-4 text-md space-x-2"
		>
			<p>Updated:</p>
			<p>{`${metadata.date}`}</p>
			<span class="flex items-center justify-center px-4">&bull;</span>
			<img
				src={profilePicture}
				class="rounded-full border-2 border-white object-contain h-8 w-8 bg-primary"
				alt="my_profile"
			/>
			<p class="flex items-center font-bold">
				{"OverRED Team"}
			</p>
			<span class="flex items-center justify-center px-4">&bull;</span>
			<p class="hidden sm:block">Reading Time:</p>
			<p class="lock sm:hidden">Time:</p>
			<p>{`${metadata.reading_time} min`}</p>
		</div>

		<div
			style={`aspect-ratio: ${config.image_ratio_view};`}
			class="left-0 2xl:flex flex-col justify-evenly text-left hidden opacity-75 space-y-10"
		>
			<span class="hidden 2xl:block"
				><Breadcrumb metadata_tags={tags} /></span
			>
			<h1
				class="2xl:flex grow hidden items-center justify-start text-left font-bold text-5xl"
				data-toc-ignore
			>
				{metadata.title}
			</h1>

			<div
				class="flex w-full flex-col items-center justify-center pt-5 2xl:flex-col 2xl:pt-0"
			>
				<div
					class="flex w-full flex-row items-start justify-start space-x-3 pr-2 opacity-80 2xl:pr-0 2xl:pt-2"
				>
					<!-- Profile-->
					<img
						src={profilePicture}
						class="rounded-full border-2 border-white object-contain h-12 w-12 bg-primary"
						alt="my_profile"
					/>

					<p
						class="text-xl flex h-full flex-col items-center justify-center font-semibold 2xl:text-2xl"
					>
						{"OverRED Team"}
					</p>
				</div>
				<!-- Date & Reading Time -->
				<div
					class="2xl:text-xl flex w-full flex-row items-start justify-start text-md opacity-90 2xl:pt-3"
				>
					<p class="italic">Updated:</p>
					<span class="px-1"></span>
					<p class="italic">{`${metadata.date}`}</p>
					<span class="flex items-center justify-center px-2"
						>&bull;</span
					>
					<p class="hidden italic sm:block">Reading Time:</p>
					<p class="lock italic sm:hidden">Time:</p>
					<span class="px-1"></span>
					<p class="italic">{`${metadata.reading_time} min`}</p>
				</div>
			</div>
		</div>

		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<span
			class="block 2xl:hidden w-5/6 h-[0.2rem] bg-slate-400 mt-5 bg-opacity-25 rounded-full"
		/>
	</header>

	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<span
		class="hidden 2xl:block w-[95%] h-[0.2rem] bg-slate-400 my-12 bg-opacity-25 rounded-full"
	/>

	<div class="flex w-full flex-col lg:flex-row justify-center">
		<article
			id="blog-article"
			style="scroll-behavior: smooth; scroll-padding: 50px;"
			class="prose prose-lg max-w-none w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12 mx-auto bg-white rounded-xl lg:border-4 mt-0"
		>
			<svelte:component this={data.props.content} />
		</article>

		<!-- TOC for large screens -->
		<div
			class="hidden 2xl:flex 2xl:w-[25%] justify-start py-2 opacity-80 mr-20"
		>
			<div class="flex h-min w-full flex-col sticky top-28">
				<div class="flex flex-col space-y-1">
					<h3 class="px-2 text-2xl font-semibold">
						Table of Contents
					</h3>
					<div class="flex flex-col space-y-3 px-2">
						{#if toc_list}
							{#each toc_list as entry}
								<a
									href={`#${entry.id}`}
									class={$page.url?.href &&
									$page.url.href
										.toString()
										.includes(entry.id) &&
									in_heading_pos !== false
										? "text-md w-full rounded-lg bg-slate-400 px-3 py-2"
										: "text-md w-full rounded-lg bg-slate-200 px-3 py-2 hover:bg-slate-400"}
								>
									{entry.title}
								</a>
							{/each}
						{/if}
					</div>
				</div>

				<div class="flex flex-col space-y-1">
					<h3 class="px-2 text-2xl font-semibold">Share</h3>
					<div class="flex flex-row space-x-2 px-2">
						<Socials type="twitter" title={metadata.title} />
						<Socials type="reddit" title={metadata.title} />
						<Socials type="facebook" title={metadata.title} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
