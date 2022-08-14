import React from "react";

export default function IconButton({ Icon, onClick, className }) {
  return (
    <div
      // className="p-2 rounded-sm bg-zinc-600 cursor-pointer active:bg-zinc-500 transition-all duration-300 w-max"
      className={`${className} p-2 rounded-sm bg-zinc-600 cursor-pointer active:bg-zinc-500 transition-all duration-300 w-max`}
      onClick={() => onClick()}
    >
      <Icon className="h-6 text-white" />
    </div>
  );
}
