import { TBlogsPropsType } from '@/types';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({ blogs }: TBlogsPropsType) => {
  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        Latest Blog From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 italic w-1/2 mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-2 gap-5 py-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 py-5">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;