import React from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export const PostCard: React.FC<IpostCardProps> = ({ user, post }) => {
  return (
    <div className="bg-slate-100 rounded-lg shadow-xl px-4 py-3 flex-col  ">
      <div className="flex gap-4">
        <img
          className="w-16 h-16 rounded-full"
          src={user?.image}
          alt={user?.username}
        />
        <div className="flex flex-col items-start justify-start gap-1 pt-1 truncate">
          <p className="text-xl font-semibold text-gray-800 capitalize">
            {user?.username}
          </p>
          <p className="text-base font-normal text-gray-400 truncate">
            {user?.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col px-2 py-2">
        <p className="text-xl font-semibold text-gray-800 capitalize truncate py-1">
          {post?.title}
        </p>
        <p className=" text-md font-semibold text-gray-600 py-1 truncate">
          {post?.body}
        </p>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-4 py-4">
        {post?.tags.map((tag) => {
          return (
            <div
              key={tag}
              className="bg-gray-200 rounded-xl px-3 py-1 text-center hover:bg-gray-300 hover:cursor-pointer font-semibold"
            >
              #{tag}
            </div>
          );
        })}
      </div>
      <hr />
      <div className="flex justify-start items-center gap-2 py-2 text-lg text-gray-800">
        <div className="inline-flex items-center px-2">
          <div className="inline-flex gap-1 items-end text-base font-medium text-gray-800">
            <AiOutlineDislike className="w-5 h-5" />
            {post?.reactions.dislikes}
          </div>
        </div>
        <div className="inline-flex px-2">
          <div className="inline-flex gap-1 items-center text-base font-medium text-gray-800">
            <AiOutlineLike className="w-5 h-5" />
            {post?.reactions.likes}
          </div>
        </div>
        <div className="inline-flex px-2">
          <div className="inline-flex gap-1 items-center text-base font-medium text-gray-800">
            <AiOutlineEye className="w-5 h-5" />
            {post?.views}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostCardSkelton: React.FC = () => {
  return (
    <div className="bg-slate-100 rounded-lg shadow-xl flex-col min-w-full space-y-3 px-4 py-3">
      <div className="flex gap-4 animate-pulse ">
        <div className="w-16 h-16 rounded-full bg-gray-300"></div>
        <div className="flex flex-col items-start justify-start gap-2 pt-2">
          <div className="bg-gray-300 w-24 h-6 rounded-md"></div>
          <div className="bg-gray-300 w-44 h-4 rounded-md "></div>
        </div>
      </div>
      <div className="flex flex-col px-2 py-2 gap-3 animate-pulse ">
        <div className="bg-gray-300 w-96 h-6 rounded-md"></div>
        <div className=" bg-gray-300 w-full h-4 rounded-md"></div>
      </div>
      <div className="flex justify-start items-center px-2 pt-3 gap-4 animate-pulse">
        <div className="w-24 h-7 bg-gray-300 rounded-lg"></div>
        <div className="w-24 h-7 bg-gray-300 rounded-lg"></div>
      </div>
      <hr />
      <div className="flex justify-start items-center min-h-8"></div>
    </div>
  );
};
