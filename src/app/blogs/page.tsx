import BlogCard from '@/components/ui/BlogCard';
import { TBlogs } from '@/types';

const BlogsPage = async () => {
  const res = await fetch('http://localhost:5000/blogs', {
    cache: 'no-store',
  });
  const blogs: TBlogs[] = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 italic w-1/2 mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-3 gap-5 py-5 max-w-[90%] mx-auto">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
