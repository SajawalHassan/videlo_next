import React from "react";

export default function IconButton({ Icon, onClick, className }) {
  return (
    <div
      className={`${className} p-2 rounded-sm bg-[#414141] cursor-pointer active:bg-zinc-500 transition-all duration-300 w-max`}
      onClick={() => onClick()}
    >
      <Icon className="h-6 text-white" />
    </div>
  );
}
