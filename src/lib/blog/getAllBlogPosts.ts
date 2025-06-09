import { getHeaderImage } from '$lib/config';

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

export async function getAllBlogPosts() {
    try {
        const allMarkdownFiles = import.meta.glob('/posts/*/index.md', { eager: true });
        const allHeaderImages = import.meta.glob('/posts/*/header/*', { eager: true });

        const iterableMarkdownFiles = Object.entries(allMarkdownFiles);
        const interableHeaderImages = Object.entries(allHeaderImages);

        const allPosts = iterableMarkdownFiles.map(([path, module]) => {
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
        }).filter(Boolean);

        return allPosts;
    } catch (e) {
        console.error(e);
        return [];
    }
} 