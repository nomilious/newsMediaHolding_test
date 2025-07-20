export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
}

export interface ResponseObj {
    posts: Post[];
    limit: number;
    skip: number;
    total: number;
}

export interface PostsState {
    items: Post[];
    skip: number;
    hasMore: boolean;
    loading: boolean;
    error: string | null;
}
