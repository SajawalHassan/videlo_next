import Image from "next/image";
import React from "react";

export default function VideoCard({
  title,
  views,
  createdAt,
  channelName,
  channelImage,
  thumbnail,
}) {
  return (
    <div className="w-[20rem] max-h-[20rem] text-white rounded-lg bg-[#3f3f3f54] cursor-pointer hover:-translate-y-2 hover:shadow-zinc-900 shadow-xl transition-all duration-300">
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
          <h1 className="text-xl font-bold line-clamp-2">{title}</h1>
          <div className="mt-2 text-zinc-500 flex items-center justify-between">
            <p className="text-sm">{channelName}</p>
            <p className="text-sm">
              {views} · {createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
