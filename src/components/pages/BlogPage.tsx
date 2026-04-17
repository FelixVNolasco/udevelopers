import { getNews } from "@/sanity/client";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";

export default function BlogPage() {
  const [posts, setPosts] = useState<
    {
      _id: string;
      slug: {
        current: string;
      };
      title: string;
      previewBody: string;
      image: string;
    }[]
  >();

  useEffect(() => {
    getNews().then((res) => {
      setPosts(res[0].List);
    });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">BLOG</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts && posts.map((post) => <BlogCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}
