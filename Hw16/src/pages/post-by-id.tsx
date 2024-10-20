import React from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../api/post.api";
import { useQuery } from "@tanstack/react-query";

export const PostById: React.FC = () => {
  const { id } = useParams();

  const post = useQuery({
    queryKey: ["fetching-posts"],
    queryFn: () => fetchPostById(Number(id)),
  });

  if (isNaN(Number(id))) {
    throw new Error("OOPSS");
  }

  console.log(post.data);

  return <div>POST ID: {post.data?.id}</div>;
};
