import React from "react";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { fetchPostById } from "../api/post.api";
import { useQuery } from "@tanstack/react-query";

export const PostById: React.FC = () => {
  const { id } = useParams();
  const loaderData = useLoaderData();

  console.log(loaderData);

  const post = useQuery({
    queryKey: ["fetching-posts"],
    queryFn: () => fetchPostById(Number(id)),
  });

  if (isNaN(Number(id))) {
    throw new Error("OOPSS");
  }

  return <div>POST ID: {post.data?.id}</div>;
};

export const fetchByIdLoader = async (data: LoaderFunctionArgs) => {
  let post: Ipost | undefined = undefined;
  try {
    post = await fetchPostById(Number(data.params.id));
  } catch (error) {
    console.log("error", error);
  }
  return { post };
};
