export type TChildrenProps = {
  children: React.ReactNode;
};
export type TBlog = {
  id: string;
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
};

export type TBlogsPropsType = {
  blogs: TBlog[];
};

export type TBlogId = {
  params: {
    blogId: string;
  };
};

export type TFormValues = TBlog;
