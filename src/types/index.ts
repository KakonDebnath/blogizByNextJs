export type TBlogs = {
  id: string;
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
};

export type TBlogsPropsType = {
  blogs: TBlogs[];
};
