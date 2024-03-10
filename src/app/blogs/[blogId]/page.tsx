import BlogDetails from '@/components/ui/BlogDetails';
import { TBlogId, TBlog } from '@/types';

const DynamicBlogPage = async ({ params }: TBlogId) => {
  const blogId = params.blogId;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog: TBlog = await res.json();
  return (
    <div className="mt-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default DynamicBlogPage;
