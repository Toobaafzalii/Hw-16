import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPostList } from "../api/post.api";

export const PostPage: React.FC = () => {
  const post = useQuery({
    queryKey: ["fetching-posts"],
    queryFn: fetchPostList,
  });

  useEffect(() => {
    if (!post.error || !post.isError) return;
    throw new Error("OOPSS");
  }, [post.error, post.isError]);

  return <div>POSTS LIST</div>;
};
