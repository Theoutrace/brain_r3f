import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex  bg-blue-300 p-4 gap-4">
      <Link
        className="bg-blue-500 p-4 rounded-md w-[300px]"
        href="/blogs/design"
      >
        Design
      </Link>
      <Link className="bg-blue-500 p-4 rounded-md w-[300px]" href="/blogs/dev">
        Dev
      </Link>
      <Link
        className="bg-blue-500 p-4 rounded-md w-[300px]"
        href="/blogs/strategy"
      >
        Strategy
      </Link>
      <Link
        className="bg-blue-500 p-4 rounded-md w-[300px]"
        href="/blogs/data_and_ai"
      >
        Data & Ai
      </Link>
    </div>
  );
};

export default BlogPage;
