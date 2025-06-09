<script lang="ts">
    import { page } from "$app/stores";
    import BlogCard from "./layout/blogCard.svelte";
    import type { PostMetadata } from "./types";

    export let data: {
        posts: Array<{ meta: PostMetadata; slug: string; header_image: any }>;
    };
    const blog_list = data.posts;
    const fallbackProfile = "$lib/assets/fallback_profile.webp";

    let didNavigate = false;
    let selectedTag: string | null = null;

    // Get unique tags from all posts
    const allTags = [...new Set(blog_list.flatMap((post) => post.meta.tags))];

    // Filter posts by selected tag
    $: filteredPosts = selectedTag
        ? blog_list.filter((post) =>
              post.meta.tags.includes(selectedTag as string),
          )
        : blog_list;

    function handleTagClick(key: string) {
        selectedTag = selectedTag === key ? null : key;
        $page.url.searchParams.set("tag", key);
        didNavigate = true;
    }

    // Handle URL parameters on load
    $: {
        const params = new URLSearchParams($page.url.search);
        const tag_param = params.get("tag");
        if (tag_param && allTags.includes(tag_param)) {
            selectedTag = tag_param;
        }
    }
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-12 w-full text-center">
        Documentation
    </h1>

    <!-- Tags -->
    <div class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>
        <div class="flex flex-wrap gap-3">
            {#each allTags as tag}
                <button
                    class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                        {selectedTag === tag
                        ? 'bg-overred-red text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm'}"
                    on:click={() => handleTagClick(tag)}
                >
                    {tag}
                </button>
            {/each}
        </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="flex justify-center">
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        >
            {#each filteredPosts as post}
                <div class="flex justify-center">
                    <BlogCard entry={post} />
                </div>
            {/each}
        </div>
    </div>
</div>
