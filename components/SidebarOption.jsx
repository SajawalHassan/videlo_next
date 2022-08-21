import React from "react";

export default function SidebarOption({ Icon, text }) {
  return (
    <div className="py-2 rounded-lg hover:bg-[#202020] flex items-center space-x-3 px-3 transition-colors duration-300 cursor-pointer">
      <Icon className="h-6" />
      <h1 className="text-lg">{text}</h1>
    </div>
  );
}
