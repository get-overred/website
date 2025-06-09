// @ts-nocheck
import { getHeaderImage } from '$lib/config';
import type { PageLoad } from './$types';

interface PostMetadata {
    title: string,
    description: string,
    date: string,
    category: string,
    published: boolean,
    authors: Array<string>,
    reading_time: number,
}
interface PostResponse {
    metadata: PostMetadata;
}
interface SearchPost {
    title: string,
    description: string,
    date: string,
    category: string,
    published: boolean,
    authors: Array<string>,
    reading_time: number,
    slug: string | null,
    content: string | null,
    header_image: any
}

async function getPosts() {
    const allMarkdownFiles = import.meta.glob('/posts/*/index.md', { eager: true });
    const allHeaderImages = import.meta.glob('/posts/*/header/*', { eager: true });

    const iterableMarkdownFiles = Object.entries(allMarkdownFiles);
    const interableHeaderImages = Object.entries(allHeaderImages);

    return iterableMarkdownFiles
        .map(([path, module]) => {
            const theSlug = path.split("/posts/")[1].split("/")[0];
            const blogModule = module as PostResponse;
            const header_image = getHeaderImage(theSlug, interableHeaderImages);

            if (blogModule.metadata.published === true) {
                return {
                    meta: blogModule.metadata,
                    slug: theSlug,
                    header_image: header_image
                };
            }
            return null;
        })
        .filter(Boolean); // Filter out null entries
}

export const prerender = 'auto'

export const load = async () => {
    try {
        const allPosts = await getPosts();
        return { posts: allPosts || [] };
    } catch (error) {
        console.error("Error loading posts:", error);
        return { posts: [] }; // Return empty array instead of undefined
    }
}
;null as any as PageLoad;