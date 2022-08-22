import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

export default function VideoCard({
  title,
  views,
  createdAt,
  channelName,
  channelImage,
  thumbnail,
  likes,
  dislikes,
}) {
  return (
    <div
      className="w-[20rem] text-white rounded-lg bg-[#3f3f3f54] cursor-pointer hover:-translate-y-2 hover:shadow-zinc-900 shadow-xl transition-all duration-300 relative"
      title={title}
    >
      <Image
        src={thumbnail}
        width={320}
        height={190}
        className="rounded-t-lg"
      />
      <div className="flex space-x-3 px-2 py-3 -mt-2">
        <div>
          <Image
            src={channelImage}
            height={40}
            width={40}
            className="rounded-full bg-zinc-700"
          />
        </div>
        <div className="w-full">
          <h1 className="text-xl line-clamp-1">{title}</h1>
          <div className="flex items-center justify-between px-3">
            <div className="w-full text-zinc-500">
              <p className="text-sm truncate">{channelName}</p>
              <p className="text-sm truncate">
                {views} · {createdAt}
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center space-x-3">
                <ThumbUpIcon className="h-6" />
                <ThumbDownIcon className="h-6" />
              </div>
              <div className="flex items-center space-x-5">
                <p className="text-xs">{likes}</p>
                <p className="text-xs">{dislikes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
