import React from "react";

export default function MenuOption({ Icon, text, className }) {
  return (
    <div
      className={`flex items-center space-x-2 text-white p-3 hover:bg-[#2c2c2c] w-full cursor-pointer rounded-md ${className}`}
    >
      <Icon className="h-6" />
      <h1>{text}</h1>
    </div>
  );
}
