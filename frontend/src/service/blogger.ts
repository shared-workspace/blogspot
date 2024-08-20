import { http } from "@/utils/http";

class BloggerHandler {
    blogHandler: BlogHandler;
    postsHandler: PostsHandler;
    commentsHandler: CommentsHandler;
    usersHandler: UsersHandler;
    pagesHandler: PagesHandler;
    blogId: string;
    constructor() {
        const blogId = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
        if (!blogId) {
            throw new Error("Blogger Blog ID is not defined.");
        }
        this.blogId = blogId;
        this.blogHandler = new BlogHandler(blogId);
        this.postsHandler = new PostsHandler(blogId);
        this.pagesHandler = new PagesHandler(blogId);
        this.commentsHandler = new CommentsHandler();
        this.usersHandler = new UsersHandler();
    }
    async isApiAvailable() {
        return this.blogHandler.getBlog().then(() => true).catch(() => false);
    }
}

class BlogHandler {
    blogId: string;
    constructor(blogId: string) {
        this.blogId = blogId;
    }
    async getBlog(blogId: string = this.blogId) {
        return http.get(`/blogs/${blogId}`);
    }
}

class PostsHandler {
    blogId: string;
    constructor(blogId: string) {
        this.blogId = blogId;
    }
    async getPosts(blogId: string = this.blogId) {
        return http.get(`/blogs/${blogId}/posts`);
    }
}

class PagesHandler {
    blogId: string;
    constructor(blogId: string) {
        this.blogId = blogId;
    }
    async getPages(blogId: string = this.blogId) {
        return http.get(`/blogs/${blogId}/pages`);
    }
}

class CommentsHandler {
    constructor() {}
}

class UsersHandler {
    constructor() {}
}

export const bloggerHandler = new BloggerHandler();

