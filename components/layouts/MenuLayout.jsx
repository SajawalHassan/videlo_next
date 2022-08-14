import React from "react";
import IconButton from "../IconButton";

import { XIcon } from "@heroicons/react/outline";

export default function MenuLayout({ children, setMenu, className }) {
  return (
    <div className={`${className} bg-[#353535] w-[15rem] pb-2`}>
      <div className="relative pt-2">
        <IconButton
          Icon={XIcon}
          onClick={() => setMenu(false)}
          className="absolute right-2 top-2"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-2 min-h-[15rem]">
        {children}
      </div>
    </div>
  );
}
