import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchPostList } from "../api/post.api";
import { listLimit } from "../utils/config";
import { PostCard, PostCardSkelton } from "../components/postCard";
import { fetchUsersList, fetchUsersListById } from "../api/users.api";

export const PostPage: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<IDataState>({
    post: [],
    user: [],
  });

  const { mutate: fetchPosts, isPending: postLoading } = useMutation<
    fetchPostResponse,
    null,
    {
      page: number;
      listLimit: number;
    }
  >({
    mutationKey: ["fetching-posts"],
    mutationFn: ({ listLimit, page }) =>
      fetchPostList({ skip: page * listLimit, limit: listLimit }),
  });

  const users = useMutation<
    Iuser[],
    null,
    {
      posts: Ipost[];
    }
  >({
    mutationKey: ["fetching-users-by-id"],
    mutationFn: ({ posts }) =>
      fetchUsersListById(posts.map((el) => Number(el.userId))),
  });

  useEffect(() => {
    fetchPosts(
      {
        page,
        listLimit,
      },
      {
        onSuccess: (postData) => {
          users.mutate(
            { posts: postData.posts },
            {
              onSuccess: (userData) => {
                setData((prevState) => {
                  return {
                    post: [...prevState.post, ...postData.posts],
                    user: [...prevState.user, ...userData],
                  };
                });
              },
            }
          );
        },
      }
    );
  }, [page]);

  // useEffect(() => {
  //   if (!post.error || !post.isError) return;
  //   throw new Error("OOPSS");
  // }, [post.error, post.isError]);

  return (
    <div className="min-h-screen bg-indigo-100 px-10 flex flex-1 mt-5">
      <div className="mx-auto my-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.post.map((item, index) => {
          const user = data?.user?.find((user) => user.id == item.userId);
          return <PostCard key={index} user={user as Iuser} post={item} />;
        })}
        {Boolean(postLoading || users.isPending) &&
          [1, 2, 3, 4, 5, 6].map((item) => {
            return <PostCardSkelton key={item} />;
          })}
        <button
          className="my-2 mx-auto bg-gray-100 px-3 py-3 rounded-2xl w-40 text-md font-gray-800 shadow-lg font-semibold col-span-1 lg:col-span-2 hover:bg-gray-300"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
