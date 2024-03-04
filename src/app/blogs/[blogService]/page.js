import { getUsers } from "@/service/blogService";
import React from "react";

const BlogServicePage = async (props) => {
  const data = await getUsers();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Blog service: {props.params.blogService}
      </h1>
    </div>
  );
};

export default BlogServicePage;
