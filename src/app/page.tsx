import LatestBlogs from '@/components/latestBlogs/LatestBlogs';
import { TBlogs } from '@/types';

const HomePage = async () => {
  const res = await fetch('http://localhost:5000/blogs');
  const blogs: TBlogs[] = await res.json();
  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
