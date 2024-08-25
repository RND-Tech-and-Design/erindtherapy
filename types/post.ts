// Define the type for the 'posts' array
export type Post = {
    id?: any;
    title?: PostTitle;
    description?: string;
    date?: string;
    image?: string;
    link?: string;
    jetpack_featured_media_url?: string;
    slug?: string;
    excerpt?: PostExcerpt;
    content?: PostContent;
};

type PostExcerpt = {
    rendered?: string;
}

type PostTitle = {
    rendered?: string;
}

type PostContent = {
    rendered?: string;
}
