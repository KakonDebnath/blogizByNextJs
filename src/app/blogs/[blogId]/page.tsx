import BlogDetails from '@/components/ui/BlogDetails';
import { TBlogId, TBlog } from '@/types';

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/blogs`);
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: TBlog) => ({
    blogId: blog.id,
  }));
};

const DynamicBlogPage = async ({ params }: TBlogId) => {
  const blogId = params.blogId;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: 'no-store',
  });
  const blog: TBlog = await res.json();
  return (
    <div className="mt-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default DynamicBlogPage;
